package hkmc2
package codegen
package flowAnalysis

import scala.jdk.CollectionConverters.MapHasAsScala
import utils.*
import hkmc2.utils.*, shorthands.*
import hkmc2.Message.MessageContext
import semantics.*
import syntax.Tree
import scala.collection.mutable
import scala.collection.mutable.{Set as MutSet, Map as MutMap, LinkedHashMap, LinkedHashSet}


object FlowAnalysis:
  object TraceScope:
    val NonAffineSyms = "flow-analysis/non-affine"
    val AccumulatorSym = "flow-analysis/accumulator"
    val Effects = "flow-analysis/effects"

  class State(using val eState: Elaborator.State):
    val resultToResultId = new java.util.IdentityHashMap[Result, ResultId].asScala
    
    /** This buffer is currently only used internally for logging (`logNonAffineSyms` and `logAccumulatorSyms`) */
    val stratVars = mutable.Buffer.empty[StratVar]

    private def resultIdName(result: Result): Str = result match
      case FunRef(fun, _) => fun.nme
      case Lambda(_, _) => "lambda"
      case Value.SimpleRef(sym) => sym.nme
      case Value.MemberRef(sym, _) => sym.nme
      case Value.This(sym) => sym.nme
      case _ => "result"
  
    extension (instId: InstantiationId)
      def mkFunName(using Elaborator.State): String =
        instId
          .map: i =>
            i.getReferredFun.get.name
          .mkString("_")
      def showInstId(using SymbolPrinter, Raise, ShowCfg): Str =
        if instId.isEmpty then "<root>" else instId.map(_.showRefSite).mkString(".")
    
    extension (resultId: ResultId)
      def getResult = resultId.result
      def getReferredSym: Symbol =
        resultId.getReferredSymOpt.getOrElse(lastWords(s"assumption failed: ${resultId.getResult} is not a SimpleRef, MemberRef, or ThisRef"))
      def getReferredSymOpt: Opt[Symbol] =
        resultId.getResult match
        case Value.SimpleRef(s) => S(s)
        case Value.MemberRef(bms, _) => S(bms)
        case Value.This(sym) => S(sym)
        case e => N
      def getReferredFun(using Elaborator.State): Option[TermSymbol] =
        resultId.getResult match
        case FunRef(f, _) => Some(f)
        case _ => None
      def showRefSite(using SymbolPrinter, Raise, ShowCfg): Str =
        summon[SymbolPrinter].printSymbol(resultId)
    
    extension (id: ConcreteFunId)
      def showConcreteFunId(using SymbolPrinter, Raise, ShowCfg): Str =
        val funStr = id.exprId match
          case (funSym: TermSymbol, whichParamList) => s"${summon[SymbolPrinter].printSymbol(funSym)}#$whichParamList"
          case lamId: ResultId => lamId.showRefSite
        s"$funStr @ ${id.instId.showInstId}"
    
    extension (r: Result)
      def uid = resultToResultId.get(r) match
        case None =>
          val id = ResultId(r, resultIdName(r))
          resultToResultId(r) = id
          id
        case Some(id) => id
  
  
  def apply(
    pgrm: Program,
    mono: Bool,
    nonAffineTracking: Bool,
    accumulatorTracking: Bool,
    logEffects: Bool,
    noFreeze: Bool,
    // count a use in a loop, and of top-level state, as many uses (see `FlowPreAnalyzer.recordAffinityUse`)
    conservativeAffinity: Bool,
  )(using TraceLogger, Elaborator.State, Raise, SymbolPrinter) =
    given State = new State
    val pre = new FlowPreAnalyzer(pgrm, conservativeAffinity)
    val constrCol = new FlowConstraintsCollector(
      pre,
      mono,
      nonAffineTracking,
      accumulatorTracking,
      noFreeze,
    )
    val solver = new FlowConstraintSolver(constrCol)
    val tl = summon[TraceLogger]
    if logEffects then tl.scoped(TraceScope.Effects):
      if tl.isTracing then EffectAnalysis.logResults(solver)
    solver
  
  // * FIXME: not all symbols have irDefn; add and look up an irHeader instead
  private[codegen] def isPureCall(call: Call, whichArgList: Int): Bool = call.fun match
    case Value.SimpleRef(b: BuiltinSymbol) => whichArgList == 0 && b.isPure
    case p => p.targetSymbol.exists:
      case s: TermSymbol => s.irFunDefn match
        case S(fun) => whichArgList < fun.params.size && fun.annotations.exists(_.isInstanceOf[Annot.Pure])
        case N => s.defn.exists: fun =>
          whichArgList < fun.params.size && fun.annotations.exists(_.isInstanceOf[Annot.Pure])
      case _ => false

  // whether constructing an instance only stores the constructor's parameters into fields
  private[codegen] def hasSimpleCtor(cls: ClassSymbol): Bool =
    cls.irClsLikeDefn.exists: defn =>
      val params = (defn.paramsOpt.toList ::: defn.auxParams).flatMap(_.allParams).map(_.sym).toSet[Symbol]
      @annotation.tailrec
      def onlyStoresParams(b: Block): Bool = b match
        case AssignField(Value.This(self), _, Value.SimpleRef(p), rest) if (self is defn.isym) && params(p) =>
          onlyStoresParams(rest)
        case Define(ValDefn(_, _, Value.SimpleRef(p)), rest) if params(p) =>
          onlyStoresParams(rest)
        case End(_) => true
        case _ => false
      onlyStoresParams(defn.preCtor) && onlyStoresParams(defn.ctor)

  def mkTraceLogger(
    cfg: Config.FlowAnalysisConfig,
    prefix: Str,
    sink: DebugSink,
  )(using printer: DebugPrinter): TraceLogger =
    val debug = new DebugContext:
      override protected def forceUids: Bool = printer.showUids
    new TraceLogger(debug, sink, indentWhenDisabled = true, prefix = prefix):
      protected def phaseEnabled(config: Config.Debug): Bool = false
      protected def forceTrace(scope: Opt[Str]): Bool = scope match
        case S(TraceScope.NonAffineSyms) => cfg.logNonAffine
        case S(TraceScope.AccumulatorSym) => cfg.logAccumulator
        case S(TraceScope.Effects) => cfg.logEffects
        case _ => cfg.debug
    
end FlowAnalysis


class ResultId(val result: Result, name: Str)(using eState: Elaborator.State) extends Symbol(using eState):
  def nme: Str = name
  def subst(using SymbolSubst): ResultId = this
  def toLoc: Opt[Loc] = result.toLoc

type InstantiationId = Ls[ResultId]
type CtorCls = ClassLikeSymbol | Int
type SelField = TermSymbol | Int
// `value` holds the constructor argument and every value that may be written into the field;
// `effect` names the field in write effects: it receives them if the field may be written, and flows into the effect of its reads
type CtorField = (field: SelField, value: StratVar, effect: StratVar)
type FunId = (funSym: TermSymbol, whichParamList: Int) | ResultId
type CallId = (exprId: ResultId, whichArgList: Int)
type OriginId = ResultId | FunId | CallId
type ConcreteFunId = ConcreteId[FunId]


object TrackableField:
  def unapply(sym: Opt[Symbol]): Opt[(field: TermSymbol, owner: ClassSymbol)] =
    sym match
    case S(sSym) if sSym.asTrm.exists(_.decl.exists(_.isInstanceOf[Param])) =>
      val tSym = sSym.asTrm.get
      for
        owner <- tSym.owner
        cls <- owner.asCls
        if cls.tree.clsParams.size === 1
        // The fields of external classes are not initialized from constructor arguments
        // visible in the IR. For instance, `Array`'s `length` field is also read on tuples,
        // which are not constructed as `Array` instances.
        if !cls.defn.exists(Inheritance.isExternal)
      yield (tSym, cls)
    case _ => N

object TrackableFieldSelect:
  def unapply(s: Select): Opt[Path -> (field: TermSymbol, owner: ClassSymbol)] =
    TrackableField.unapply(s.symbol).map(s.qual -> _)

object PossibleTrackableTupleSelect:
  def unapply(s: Result)(using eState: Elaborator.State): Opt[Value.SimpleRef -> Int] =
    s match
    case Call(
      p,
      (Arg(N, ref@Value.SimpleRef(scrut)) :: Arg(N, Value.Lit(Tree.IntLit(n))) :: Nil) :: Nil
    ) if p.targetSymbol.contains(eState.tupleGetSymbol) => S(ref -> n.toInt)
    case _ => N

object TrackableSelect:
  def unapply(s: Result)(using pre: FlowPreAnalyzer, eState: Elaborator.State): Opt[(from: Path, field: SelField, owner: CtorCls)] =
    given fState: FlowAnalysis.State = pre.fState
    s match
    case sel@PossibleTrackableTupleSelect((ref@Value.SimpleRef(scrut)) -> ith) =>
      pre.res.getEnclosingMatchesForSel(sel.uid).find(_._1.getReferredSymOpt.contains(scrut)).flatMap:
        case (_, Some(tupSize: Int)) => S(ref, ith, tupSize)
        case _ => N
    case TrackableFieldSelect(qual, field -> owner) =>
      Some((qual, field, owner))
    case _ => N

object MemberRefTo:
  def unapply(p: Path): Opt[(targetSymbol: DefinitionSymbol[?], selectedFrom: Opt[Path])] =
    p.targetSymbol.map: target =>
      target -> p.match
        case Select(qual, _) => S(qual)
        case DynSelect(qual, _, DynSelectKind.Member(_)) => S(qual)
        case SuperSelect(qual, _, _) => S(qual)
        case _ => N

object CtorProducer:
  /** Extracts result forms that produce a concrete `Ctor` flow strategy. */
  def unapply(r: Result)(using Elaborator.State): Opt[(ctorCls: CtorCls, args: Ls[Arg], selectedFrom: Opt[Path])] =
    r match
    case Instantiate(_, MemberRefTo(cls: ClassSymbol, qual), argss) => S(cls, argss.flatten, qual)
    case Call(MemberRefTo(cls: ClassCtorSymbol, qual), argss) => S(cls.associatedCls, argss.flatten, qual)
    case MemberRefTo(ctor: ModuleOrObjectSymbol, qual) => S(ctor, Nil, qual)
    case Tuple(_, args) => S(args.size, args, N)
    case _ => N

object FunRef:
  def unapply(s: Path)(using Elaborator.State): Option[TermSymbol -> Opt[Path]] = s match
    case MemberRefTo(tSym: TermSymbol, qual)
      if (tSym.k is syntax.Fun) && tSym.owner.forall(_.asMod.isDefined) => S(tSym -> qual)
    case _ => N


sealed trait ProdStrat
sealed trait ConsStrat

type NoProd = NoProd.type
case object NoProd extends ProdStrat

class StratVar(val name: Str, val sourceSymbol: Opt[Symbol], val generatedForFun: Opt[TermSymbol])(using eState: Elaborator.State)
  extends Symbol(using eState) with ProdStrat with ConsStrat:
  def nme: Str = name
  def subst(using SymbolSubst): StratVar = this
  def toLoc: Opt[Loc] = sourceSymbol.flatMap(_.toLoc)
  // Bounds belong to this analysis-local variable and are populated by FlowConstraintSolver.
  val upperBounds = LinkedHashSet.empty[ConsStrat]
  val lowerBounds = LinkedHashSet.empty[ProdStrat]
  lazy val asIntoParam = new StratVar.IntoParamImpl(this)
  lazy val asPossibleAccumulator = new StratVar.PossibleAccumulatorImpl(this)
  lazy val asEff = new StratVar.EffImpl(this)
  lazy val asReachPos = new StratVar.ReachImpl(this, true)
  lazy val asReachNeg = new StratVar.ReachImpl(this, false)
  def asReach(positive: Bool): StratVar.ReachImpl = if positive then asReachPos else asReachNeg

object StratVar:
  final class IntoParamImpl private[StratVar] (val s: StratVar) extends ConsStrat:
    override def toString(): String = s"IntoParam($s)"
  final class PossibleAccumulatorImpl private[StratVar] (val s: StratVar) extends ConsStrat:
    override def toString(): String = s"PossibleAccumulator($s)"
  // `Mask` finds effects by identity in `lowerBounds`, so `asEff` must be the only way to get one
  final class EffImpl private[StratVar] (val name: StratVar) extends ProdStrat:
    override def toString(): String = s"Eff($name)"
  final class ReachImpl private[StratVar] (val visible: StratVar, val positive: Bool) extends ConsStrat:
    override def toString(): String = s"Reach(${if positive then "+" else "-"}, $visible)"
  

  def freshVar(nme: String)(using fState: FlowAnalysis.State): StratVar =
    freshVar(nme, N, N)
  def freshVar(nme: String, generatedForFun: TermSymbol)(using fState: FlowAnalysis.State): StratVar =
    freshVar(nme, N, S(generatedForFun))
  def freshVar(nme: String, sourceSymbol: Opt[Symbol], generatedForFun: Opt[TermSymbol])(using fState: FlowAnalysis.State): StratVar =
    val ownName = if nme.isEmpty then "$stratvar" else nme
    val name = generatedForFun.fold(ownName)(fun => s"${ownName}_for_${fun.nme}")
    val stratVar = StratVar(name, sourceSymbol, generatedForFun)(using fState.eState)
    fState.stratVars += stratVar
    stratVar
  def freshVar(nme: String, forFunOpt: Opt[TermSymbol])(using fState: FlowAnalysis.State): StratVar =
    forFunOpt match
    case None => freshVar(nme)
    case Some(forFun) => freshVar(nme, forFun)

type IntoParam = StratVar.IntoParamImpl
type PossibleAccumulator = StratVar.PossibleAccumulatorImpl
type Eff = StratVar.EffImpl
type Reach = StratVar.ReachImpl

sealed trait StratWithOrigin[A <: OriginId]:
  def exprId: A
  def instantiationId: Opt[InstantiationId]
  def concreteId: ConcreteId[A] = ConcreteId(exprId, instantiationId.get)

// strategies for constraint endpoints that do not represent real producer/consumer
// but mark some properties (unknown, non-affine, etc.) of the corresponding upper/lower bounds.
sealed trait MarkerProdStrat extends ProdStrat
sealed trait MarkerConsStrat extends ConsStrat

sealed trait ConcreteCtorConsumer extends StratWithOrigin[ResultId]:
  val srcs = MutSet.empty[Ctor | MarkerProdStrat]

class ProdFun(
  val exprId: FunId,
  val instantiationId: Opt[InstantiationId]
)(
  val params: Ls[ConsStrat],
  /** The number of leading `params` that are not optional (see `LoweredParamList.paramCountLB`). */
  val requiredParamCount: Int,
  val restParam: Opt[ConsStrat],
  val res: ProdStrat,
  val capturedVarUpperbound: StratVar,
  val effect: StratVar | NoProd,
) extends ProdStrat with StratWithOrigin[FunId]:
  def paramInfo: (Int, Int, Bool) = (params.size, requiredParamCount, restParam.isDefined)
  val dests = MutSet.empty[ConsFun | MarkerConsStrat]
  override def toString(): String =
    s"(${params.map(_.toString()).mkString(", ")}) -> ${res.toString()}"

case object UnknownProd extends MarkerProdStrat

/** A coarse effect marker indicating that the variable is unsafe for eta-epansion. */
case object UnsafeEta extends MarkerProdStrat

class Ctor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val ctor: CtorCls,
  val args: Ls[CtorField],
  // only the `mut val` fields of a frozen object can be written
  val frozen: Bool,
) extends ProdStrat with StratWithOrigin[ResultId]:
  val dests = MutSet.empty[ConcreteCtorConsumer | MarkerConsStrat]
  def arg(field: SelField): CtorField =
    args.find(_.field is field).getOrElse(lastWords(s"no field $field in $this"))
  override def toString(): String =
    s"$ctor(${args.map(_.value.toString()).mkString(", ")})"


class ConsFun(
  val exprId: CallId,
  val instantiationId: Opt[InstantiationId],
)(
  val params: Ls[ProdStrat],
  val res: ConsStrat,
  val effect: StratVar | NoProd,
) extends ConsStrat with StratWithOrigin[CallId]:
  val srcs = MutSet.empty[ProdFun | MarkerProdStrat]
  override def toString(): String =
    s"(${params.map(_.toString()).mkString(", ")}) -> ${res.toString()}"

case object UnknownCons extends MarkerConsStrat

case object NonAffine extends MarkerConsStrat

case object Accumulator extends MarkerConsStrat

// callers see a body's effect only if it is also reachable from the function's inputs;
// one `Mask` sits on each of the two vars and checks the `other` when an effect lands on its own,
// so the effect reaches `filteredEffect` on whichever arrival comes second
class Mask(val other: StratVar, val filteredEffect: StratVar, val onBody: Bool) extends ConsStrat:
  override def toString(): String = s"Mask($other, $filteredEffect, onBody = $onBody)"

class FieldSel(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val field: SelField,
  val selectsFrom: CtorCls,
  val consVar: StratVar,
  // the effect of the reading code, which observes the field if it may be written
  val effect: StratVar | NoProd,
) extends ConsStrat with ConcreteCtorConsumer

class FieldWrite(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val field: SelField,
  val writesTo: CtorCls,
  val rhs: ProdStrat,
  val effect: StratVar | NoProd,
) extends ConsStrat with ConcreteCtorConsumer

class Dtor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
) extends ConsStrat with ConcreteCtorConsumer

case class ConcreteId[A <: OriginId](exprId: A, instId: InstantiationId):
  def pp(using FlowAnalysis.State): Str = exprId match
    case (sym: TermSymbol, idx: Int) => s"${sym.nme}#$idx"
    case (r: ResultId, idx: Int) => s"${r.getResult}#$idx"
    case r: ResultId => s"${r.getResult}"


class ProdStratScheme(val s: StratVar, val constraints: Ls[ProdStrat -> ConsStrat])

class FlowPreAnalyzer(val pgrm: Program, val conservativeAffinity: Bool)(using
  val tl: TraceLogger,
  val eState: Elaborator.State,
  val fState: FlowAnalysis.State,
  val raise: Raise,
  val symbolPrinter: SymbolPrinter
) extends BlockTraverser:
  import StratVar.freshVar
  val traceSymbolPrinter = SymbolPrinter(symbolPrinter.dbgScp.nest)
  
  // Records the local definitions and captured variables of the current
  // nested function/lambda.
  // This tracking of captured variables is needed for propagating non-affine
  // information through ProdFuns.
  private case class CaptureTrackingInfo(
    locallyDefined: MutSet[Symbol],
    // each captured symbol with the member symbol it was referred through, if any:
    // `Scoped` lists local functions by member symbol, while references record their term symbol
    captured: LinkedHashMap[Symbol, Opt[BlockMemberSymbol]]
  ):
    def defines(sym: Symbol, member: Opt[BlockMemberSymbol]): Bool =
      locallyDefined.contains(sym) || member.exists(locallyDefined.contains)
  private var currentCaptureInfo: Opt[CaptureTrackingInfo] = N
  private var currentAffinityCount = res.affinityCounts
  
  
  ctxTracker.inTopLvl:
    applyBlock(pgrm.main)
  
  object res:
    val primitiveStratVar = StratVar.freshVar("unknown")
    val rootFunDefns = LinkedHashMap.empty[TermSymbol, FunDefn]
    val rootValDefns = LinkedHashMap.empty[TermSymbol, ValDefn]
    val funSymToFunDefn = MutMap.empty[TermSymbol, FunDefn]
    val matchScrutToMatchBlock = MutMap.empty[ResultId, Match]
    val labelSymToLabelBlk = MutMap.empty[Symbol, Label]
    val matchScrutToCtxOfMatch = MutMap.empty[ResultId, Ls[InCtx]]
    val labelSymToCtxOfLabel = MutMap.empty[Symbol, Ls[InCtx]]
    val selToCtxOfSel = MutMap.empty[ResultId, Ls[InCtx]]
    val modSymToBms = MutMap.empty[Symbol, BlockMemberSymbol]
    val generatedVars = MutMap.empty[Symbol, StratVar] // TODO: tighten `Symbol` type!
    val generatedEffects = MutMap.empty[Symbol, StratVar] // TODO: tighten `Symbol` type! // TODO: populate for getters!
    val capturedVars = MutMap.empty[FunId, LinkedHashSet[Symbol]]
    val affinityCounts = MutMap.empty[Symbol, Int].withDefaultValue(0)
    // variables assigned by a function or lambda that does not define them; callers can observe such writes
    val nonlocallyAssigned = MutSet.empty[Symbol]
    // the val bound to each member, which a reference resolved to a class may stand for (eg, `val Alias = Box`)
    val valOfMember = MutMap.empty[BlockMemberSymbol, TermSymbol]
    // the variables of top-level `Scoped` blocks and the top-level vals
    val topLevelBindings = LinkedHashSet.empty[Symbol]
    def getEnclosingMatchesForSel(selExprId: ResultId) =
      selToCtxOfSel.get(selExprId).fold(Iterator.empty):
        _.iterator
        .collect:
          case InCtx.MtchBody(m, cse) => m.scrut.uid -> cse
    lazy val nonAffineSyms: Set[Symbol] = affinityCounts
      .iterator
      .collect:
        case (sym, n) if n > 1 => sym
      .filterNot(isRootFun)
      .toSet
    def isRootFun(s: Symbol): Bool = s match
      case ts: TermSymbol => rootFunDefns.contains(ts)
      case _ => false

  end res
  
  enum InCtx:
    case TopLvl()
    case Mod(mod: ClsLikeBody)
    case ModCtor(mod: ClsLikeBody)
    case Cls(cls: ClsLikeDefn)
    case ClsPreCtor(cls: ClsLikeDefn)
    case ClsCtor(cls: ClsLikeDefn)
    case Fn(f: FunDefn)
    case Lam(lam: Lambda)
    case LblBody(l: Label)
    case MtchBody(m: Match, cse: Opt[CtorCls])
    case BegnBody(b: Begin)
    case Scped(s: Scoped)
  
  private object ctxTracker:
    private var ctx: Ls[InCtx] = Nil
    private def isTopLvlLikeFunCtx(ctx0: Ls[InCtx]): Boolean =
      ctx0.forall:
        case InCtx.TopLvl() => true
        case InCtx.Mod(_) => true
        case InCtx.ModCtor(_) => true
        case InCtx.BegnBody(_) => true
        case InCtx.Scped(_) => true
        case _ => false
  
    def getAllCtx = ctx
    def isTopLvlLikeModuleCtx: Boolean =
      ctx.forall:
        case InCtx.TopLvl() => true
        case InCtx.BegnBody(_) => true
        case InCtx.Scped(_) => true
        case _ => false
    def registerStratVar(sym: Symbol, nme: String): Unit =
      val currentRootFun = ctx.tails.collectFirst:
        case InCtx.Fn(fun) :: tl if isTopLvlLikeFunCtx(tl) => fun.dSym
      res.generatedVars.getOrElseUpdate(sym, freshVar(nme, S(sym), currentRootFun))
    
    private inline def withCtx(newCtx: InCtx)(inline body: => Any)(after: => Unit = ()): Unit =
      ctx = newCtx :: ctx
      body
      ctx = ctx.tail
      after
    
    inline def inMod(mod: ClsLikeBody)(inline body: => Any) =
      withCtx(InCtx.Mod(mod))(body)()
    
    inline def inFun(fun: FunDefn)(inline body: => Any) =
      // each param list is a closure over the params of the lists before it
      def withParamListCaptureInfo(paramLists: Iterator[(LoweredParamList, Int)]): Unit = paramLists.nextOption() match
        case N => body
        case S((pl, whichParamList)) =>
          val locallyDefined = MutSet.from[Symbol](pl.paramSyms)
          locallyDefined += fun.sym
          locallyDefined += fun.dSym
          withCaptureInfo((fun.dSym, whichParamList), locallyDefined):
            withParamListCaptureInfo(paramLists)
      withCtx(InCtx.Fn(fun))(withParamListCaptureInfo(fun.params.iterator.zipWithIndex)):
        res.funSymToFunDefn(fun.dSym) = fun
        if isTopLvlLikeFunCtx(ctx) then
          res.rootFunDefns.addOne(fun.dSym -> fun)
    
    inline def inLabelBody(label: Label)(inline body: => Any) =
      withCtx(InCtx.LblBody(label))(body):
        res.labelSymToLabelBlk.addOne(label.label -> label)
        res.labelSymToCtxOfLabel.addOne(label.label -> ctx)
    
    inline def inMatchBody(m: Match, cse: Opt[CtorCls])(inline body: => Any): Unit =
      withCtx(InCtx.MtchBody(m, cse))(body):
        res.matchScrutToMatchBlock.addOne(m.scrut.uid -> m)
        res.matchScrutToCtxOfMatch.addOne(m.scrut.uid -> ctx)
    
    // whether the current code may run several times per run of the enclosing function or lambda
    def isInLoopOfCurrentFun: Boolean =
      ctx.iterator
        .takeWhile:
          case InCtx.Fn(_) | InCtx.Lam(_) => false
          case _ => true
        .exists:
          case InCtx.LblBody(l) => l.loop
          case _ => false
    
    def isEnclosingMatchScrutSym(sym: Symbol): Boolean =
      ctx.exists:
        case InCtx.MtchBody(m, _) => m.scrut match
          case Value.SimpleRef(s) => s is sym
          case Value.MemberRef(bms, disamb) => disamb is sym
          case _ => false
        case _ => false
    
    inline def inBeginBody(begin: Begin)(inline body: => Any) =
      withCtx(InCtx.BegnBody(begin))(body)()
    
    inline def inScoped(scpd: Scoped)(inline body: => Any) =
      withCtx(InCtx.Scped(scpd))(body)()
    
    inline def inLam(lam: Lambda)(inline body: => Any) =
      val locallyDefined = MutSet.empty[Symbol]
      lam.params.paramSyms.foreach(locallyDefined += _)
      withCtx(InCtx.Lam(lam))(withCaptureInfo(lam.uid, locallyDefined)(body))()
    
    inline def inTopLvl(inline body: => Any) =
      assert(ctx.isEmpty)
      withCtx(InCtx.TopLvl())(body):
        assert(ctx.isEmpty)
    
    inline def inModCtor(mod: ClsLikeBody)(inline body: => Any) =
      assert(ctx.head.matches{ case _: InCtx.Mod => true })
      withCtx(InCtx.ModCtor(mod))(body):
        assert(ctx.head.matches{ case _: InCtx.Mod => true })
    
    inline def inCls(cls: ClsLikeDefn)(inline body: => Any) =
      withCtx(InCtx.Cls(cls))(body)()
    
    inline def inClsPreCtor(cls: ClsLikeDefn)(inline body: => Any) =
      withCtx(InCtx.ClsPreCtor(cls))(body)()
    
    inline def inClsCtor(cls: ClsLikeDefn)(inline body: => Any) =
      withCtx(InCtx.ClsCtor(cls))(body)()
  
  end ctxTracker
  
  private def recordAffinityUse(s: LocalVarSymbol | TermSymbol): Unit =
    s match
    case _: ClassCtorSymbol => ()
    // syntactic counting misses that a use in a loop body runs once per iteration
    case _ => currentAffinityCount(s) += (if conservativeAffinity && ctxTracker.isInLoopOfCurrentFun then 2 else 1)
  
  private def recordRefInCaptures(l: LocalVarSymbol | TermSymbol, member: Opt[BlockMemberSymbol]): Unit =
    (l, currentCaptureInfo) match
    case (_: ClassCtorSymbol, _) | (_, N) => ()
    case (_, S(capInfo)) =>
      if !capInfo.defines(l, member) then
        capInfo.captured(l) = member

  private def withCaptureInfo(owner: FunId, locallyDefined: MutSet[Symbol])(body: => Any): Unit =
    val outerCapInfo = currentCaptureInfo
    val newCapInfo = CaptureTrackingInfo(locallyDefined, LinkedHashMap.empty)
    currentCaptureInfo = S(newCapInfo)
    body
    currentCaptureInfo = outerCapInfo
    outerCapInfo.foreach: outer =>
      outer.captured ++= newCapInfo.captured.iterator.filterNot((sym, member) => outer.defines(sym, member))
    res.capturedVars(owner) = LinkedHashSet.from(newCapInfo.captured.keysIterator)
  
  override def applyBlock(b: Block): Unit = b match
    case scpd@Scoped(syms, body) =>
      for s <- syms do
        s match
        case s: BlockMemberSymbol => ()
        case _ =>
          ctxTracker.registerStratVar(s, s.nme)
          if ctxTracker.isTopLvlLikeModuleCtx then res.topLevelBindings += s
      currentCaptureInfo.foreach(_.locallyDefined ++= syms)
      ctxTracker.inScoped(scpd):
        applyBlock(body)
      currentCaptureInfo.foreach(_.locallyDefined --= syms)
    case m@Match(scrut, arms, dflt, rest) =>
      applyPath(scrut)
      val outerAffinityCount = currentAffinityCount
      val mergedBranchUsage = MutMap.empty[Symbol, Int].withDefaultValue(0)
      for (cse, body) <- arms do
        val cseCls = cse match
          case Case.Cls(cls, _) => S(cls)
          case Case.Tup(n, false) => S(n)
          case _ => N
        currentAffinityCount = MutMap.empty[Symbol, Int].withDefaultValue(0)
        ctxTracker.inMatchBody(m, cseCls):
          applyBlock(body)
        for (sym, n) <- currentAffinityCount do
          mergedBranchUsage(sym) = mergedBranchUsage(sym).max(n)
        currentAffinityCount = outerAffinityCount
      for dft <- dflt do
        currentAffinityCount = MutMap.empty[Symbol, Int].withDefaultValue(0)
        ctxTracker.inMatchBody(m, N):
          applyBlock(dft)
        for (sym, n) <- currentAffinityCount do
          mergedBranchUsage(sym) = mergedBranchUsage(sym).max(n)
        currentAffinityCount = outerAffinityCount
      for (sym, n) <- mergedBranchUsage do
        currentAffinityCount(sym) = currentAffinityCount(sym) + n
      applyBlock(rest)
    case Return(res) => applyResult(res)
    case lbl@Label(label, loop, body, rest) =>
      ctxTracker.inLabelBody(lbl):
        applyBlock(body)
      applyBlock(rest)
    case bgn@Begin(sub, rest) =>
      ctxTracker.inBeginBody(bgn):
        applyBlock(sub)
      applyBlock(rest)
    case Assign(lhs, rhs, rest) =>
      lhs match
        case l: (LocalVarSymbol | TermSymbol) =>
          recordRefInCaptures(l, N)
          if currentCaptureInfo.exists(!_.defines(l, N)) then res.nonlocallyAssigned += l
        case _ => ()
      applyResult(rhs)
      applyBlock(rest)
    case Define(defn, rest) =>
      applyDefn(defn)
      applyBlock(rest)
    case Throw(exc, _) => applyResult(exc)
    case Break(label) => ()
    case Continue(label) => ()
    case TryBlock(sub, finallyDo, rest) =>
      applyBlock(sub)
      applyBlock(finallyDo)
      applyBlock(rest)
    case AssignField(lhs, nme, rhs, rest) =>
      applyPath(lhs)
      applyResult(rhs)
      applyBlock(rest)
    case AssignDynField(lhs, fld, kind, rhs, rest) =>
      applyPath(lhs)
      applyPath(fld)
      applyResult(rhs)
      applyBlock(rest)
    case End(_) => ()
    case Unreachable(_) => ()
  
  override def applyResult(r: Result): Unit = r match
    case tupSel@PossibleTrackableTupleSelect(_, _) =>
      res.selToCtxOfSel.addOne(tupSel.uid -> ctxTracker.getAllCtx)
    case Call(fun, argss) =>
      applyPath(fun)
      argss.foreach(_.foreach(applyArg))
    case Instantiate(mut, cls, argss) =>
      applyPath(cls)
      argss.foreach(_.foreach(applyArg))
    case l: Lambda =>
      applyLam(l)
    case Tuple(mut, elems) =>
      elems.foreach(applyArg)
    case Record(_, fields) =>
      fields.foreach:
        case RcdArg(idx, value) => idx.foreach(applyPath); applyPath(value)
    case Cast(value, _, _) =>
      applyResult(value)
    case p: Path => applyPath(p)
  
  private def applyValueSimpleRef(v: Value.SimpleRef, recordAffinity: Bool) =
    v.sym match
    case s: LocalVarSymbol =>
      recordRefInCaptures(s, N)
      if recordAffinity then recordAffinityUse(s)
    case _ => ()

  private def applyValueMemberRef(v: Value.MemberRef, recordAffinity: Bool) =
    val Value.MemberRef(member, disamb) = v
    disamb match
    case s: TermSymbol =>
      recordRefInCaptures(s, S(member))
      if recordAffinity then recordAffinityUse(s)
    case _ => ()
  
  override def applyPath(p: Path): Unit = p match
    case p@TrackableFieldSelect(qual, _ -> _) =>
      res.selToCtxOfSel.addOne(p.uid -> ctxTracker.getAllCtx)
      qual match
      case v@Value.SimpleRef(l)
        if ctxTracker.isEnclosingMatchScrutSym(l) =>
          applyValueSimpleRef(v, recordAffinity = false)
      case v@Value.MemberRef(bms, disamb)
        if ctxTracker.isEnclosingMatchScrutSym(disamb) =>
          applyValueMemberRef(v, recordAffinity = false)
      case _ => applyPath(qual)
    case p: (Select | SuperSelect | DynSelect) =>
      super.applyPath(p)
    case c: Cast => applyResult(c.value)
    case v: Value => applyValue(v)
  
  override def applyValue(v: Value): Unit = v match
    case v@Value.SimpleRef(l) => applyValueSimpleRef(v, recordAffinity = true)
    case v@Value.MemberRef(_, _) => applyValueMemberRef(v, recordAffinity = true)
    case Value.This(sym) => ()
    case Value.Lit(lit) => ()
  
  override def applyFunDefn(fun: FunDefn): Unit =
    ctxTracker.inFun(fun):
      ctxTracker.registerStratVar(fun.dSym, fun.sym.nme)
      currentCaptureInfo.foreach(_.locallyDefined += fun.dSym)
      fun.params.foreach(applyParamList)
      applyBlock(fun.body)
  
  override def applyLam(lam: Lambda): Unit =
    ctxTracker.inLam(lam):
      applyParamList(lam.params)
      applyBlock(lam.body)
  
  override def applyValDefn(defn: ValDefn): Unit =
    ctxTracker.registerStratVar(defn.tsym, defn.tsym.nme)
    res.valOfMember(defn.sym) = defn.tsym
    if ctxTracker.isTopLvlLikeModuleCtx then
      res.rootValDefns.addOne(defn.tsym -> defn)
      res.topLevelBindings += defn.tsym
    currentCaptureInfo.foreach(_.locallyDefined += defn.tsym)
    applyPath(defn.rhs)
  
  override def applyParamList(pl: LoweredParamList): Unit =
    pl.allParams.foreach(p => ctxTracker.registerStratVar(p.sym, p.sym.nme))
  
  override def applyArg(arg: Arg): Unit =
    applyPath(arg.value)
  
  override def applyDefn(defn: Defn): Unit = defn match
    case defn: FunDefn => applyFunDefn(defn)
    case defn: ValDefn => applyValDefn(defn)
    case cls@ClsLikeDefn(own, isym, sym, ctorSym, k, paramsOpt, auxParams, parentPath, methods,
        privateFields, publicFields, preCtor, ctor, mod, bufferable, termCompanion, _)
    =>
      cls.methodKeys.valuesIterator.foreach(applyPath)
      mod.foreach(_.methodKeys.valuesIterator.foreach(applyPath))
      ctxTracker.inCls(cls):
        paramsOpt.foreach(applyParamList)
        auxParams.foreach(applyParamList)
        privateFields.foreach(tsym => ctxTracker.registerStratVar(tsym, tsym.nme))
        publicFields.foreach: (_, tsym) =>
          ctxTracker.registerStratVar(tsym, tsym.nme)
        methods.foreach(applyFunDefn)
        ctxTracker.inClsPreCtor(cls):
          applyBlock(preCtor)
        ctxTracker.inClsCtor(cls):
          applyBlock(ctor)
      for b: ClsLikeBody <- mod do
        if ctxTracker.isTopLvlLikeModuleCtx then
          res.modSymToBms(b.isym) = sym
        ctxTracker.inMod(b):
          b.privateFields.foreach(tsym => ctxTracker.registerStratVar(tsym, tsym.nme))
          b.publicFields.foreach: (_, tsym) =>
            ctxTracker.registerStratVar(tsym, tsym.nme)
          b.methods.foreach(applyFunDefn)
          ctxTracker.inModCtor(b):
            applyBlock(b.ctor)
      
  override def applyCompanionModule(b: ClsLikeBody): Unit =
    lastWords("handled inline in `applyDefn`")
  
end FlowPreAnalyzer

class FlowConstraintsCollector(
  val preAnalyzer: FlowPreAnalyzer,
  val mono: Bool,
  val nonAffineTracking: Bool,
  val accumulatorTracking: Bool,
  val noFreeze: Bool,
):
  given FlowPreAnalyzer = preAnalyzer
  given Raise = preAnalyzer.raise
  given fState: FlowAnalysis.State = preAnalyzer.fState
  given eState: Elaborator.State = preAnalyzer.eState
  given tl: TraceLogger = preAnalyzer.tl
  import StratVar.freshVar
  
  private class ConstraintsCollector private (
    val forFunGroup: Opt[TermSymbol],
    val forFun: Opt[TermSymbol],
    buffer: mutable.ListBuffer[ProdStrat -> ConsStrat],
  ):
    def constraints: Ls[ProdStrat -> ConsStrat] = buffer.toList
    val instId: Opt[InstantiationId] = forFunGroup.fold(S(Nil))(_ => N)
    def constrain(p: ProdStrat, c: ConsStrat) = buffer.prepend(p -> c)
    def constrain(cs: Iterable[ProdStrat -> ConsStrat]) = buffer.prependAll(cs)
    def forActualRootFun(fun: TermSymbol): ConstraintsCollector =
      assert(preAnalyzer.res.rootFunDefns.contains(fun))
      new ConstraintsCollector(forFunGroup, S(fun), buffer)
  private object ConstraintsCollector:
    def apply(forFunGroup: Opt[TermSymbol], forFun: Opt[TermSymbol]): ConstraintsCollector =
      new ConstraintsCollector(forFunGroup, forFun, mutable.ListBuffer.empty)
  
  private val globalCollector = ConstraintsCollector(N, N)
  def allConstraints = globalCollector.constraints
  val funToSccGroups = MutMap.empty[TermSymbol, Ls[TermSymbol]]
  def funToSccRep(tSym: TermSymbol): Option[TermSymbol] = funToSccGroups.get(tSym).map(_.head)
  
  // for fusing strictly internal parts of functions
  val synthesizedInstIdToFunSym = LinkedHashMap.empty[InstantiationId, TermSymbol]

  val allRealCtors = mutable.Buffer.empty[Ctor]
  private def registerCtor(c: Ctor)(using cc: ConstraintsCollector): Ctor =
    if cc.forFunGroup.isEmpty then allRealCtors += c
    c
  
  private def mkCtorFields(fields: Ls[SelField], argsStrat: Ls[ProdStrat])(using cc: ConstraintsCollector): Ls[CtorField] =
    fields.zip(argsStrat).map: (field, argStrat) =>
      val fieldName = field match
        case field: TermSymbol => field.nme
        case idx: Int => idx.toString
      val value = freshVar(s"field_$fieldName", cc.forFun)
      cc.constrain(argStrat, value)
      (field = field, value = value, effect = freshVar(s"field_effect_$fieldName", cc.forFun))
  
  private val generatedVars: collection.Map[Symbol, StratVar] = // TODO: tighten `Symbol` type!
    preAnalyzer.res.generatedVars.withDefaultValue(preAnalyzer.res.primitiveStratVar)
  private val generatedEffects: collection.Map[Symbol, StratVar] = // TODO: tighten `Symbol` type! // TODO: use at access sites of getters!
    preAnalyzer.res.generatedEffects.withDefaultValue(preAnalyzer.res.primitiveStratVar)

  locally {
    val funsToProdStratScheme = MutMap.empty[TermSymbol, ProdStratScheme]

    if !mono then
      // Computing the ProdStratScheme for each scc group, this way the sccs of the call graph is
      // never materialized
      object ProdStratSchemeAnalysisInScc extends SccAnalysis[TermSymbol]:
        protected def successors(f: TermSymbol): Ls[TermSymbol] =
          var callees = Ls.empty[TermSymbol]
          object CollectAllReferredFun extends BlockTraverser:
            override def applyPath(p: Path) =
              p match
              case FunRef(callee, _) =>
                if preAnalyzer.res.rootFunDefns.contains(callee) then
                  callees ::= callee
              case _ => ()
              // a reference can sit inside another path, eg, a lifted closure under a `Cast`
              super.applyPath(p)
          CollectAllReferredFun.applyBlock(preAnalyzer.res.rootFunDefns(f).body)
          callees
        protected def isHandled(f: TermSymbol) = funsToProdStratScheme.contains(f)
        protected def handleScc(groupedFuns: Ls[TermSymbol], sccId: Int): Unit =
          for f <- groupedFuns do funToSccGroups(f) = groupedFuns
          val groupRep = groupedFuns.head
          ConstraintsCollector(Some(groupRep), N).givenIn: cc ?=>
            for funSym <- groupedFuns do
              given ConstraintsCollector = cc.forActualRootFun(funSym)
              processFunctionBody(preAnalyzer.res.funSymToFunDefn(funSym))
            if nonAffineTracking then
              for
                sym <- preAnalyzer.res.nonAffineSyms
                stratVar <- preAnalyzer.res.generatedVars.get(sym)
                if stratVar.generatedForFun.flatMap(funToSccRep).contains(groupRep)
              do cc.constrain(stratVar, NonAffine)
            for funSym <- groupedFuns do
              funsToProdStratScheme(funSym) = ProdStratScheme(generatedVars(funSym), cc.constraints)
      end ProdStratSchemeAnalysisInScc
      
      ProdStratSchemeAnalysisInScc.queryAll(preAnalyzer.res.rootFunDefns.keys)
    end if

    // collect constraints from the top-level block
    globalCollector.givenIn: cc ?=>
      cc.constrain(preAnalyzer.res.primitiveStratVar, UnknownCons)
      cc.constrain(UnknownProd, preAnalyzer.res.primitiveStratVar)
      processBlock(preAnalyzer.pgrm.main)(using cc, UnknownCons, N)

      // this places non-affine constraints correctly:
      // - in mono mode there are no per-scc collectors,
      // so the global collector gets all the relevant non-affine constraints;
      // - in poly mode, non-affine constraints on scc-owned symbols are handled
      // in their scc strat scheme, and the global collector collects the remaining constriants
      if nonAffineTracking then
        for
          sym <- preAnalyzer.res.nonAffineSyms
          stratVar <- preAnalyzer.res.generatedVars.get(sym)
          if mono || stratVar.generatedForFun.isEmpty
        do cc.constrain(stratVar, NonAffine)
      // root functions never count as non-affine, so a value they read from top-level state may be used
      // once per call of theirs, any number of times
      if nonAffineTracking && preAnalyzer.conservativeAffinity then
        for
          sym <- preAnalyzer.res.topLevelBindings
          stratVar <- preAnalyzer.res.generatedVars.get(sym)
        do cc.constrain(stratVar, NonAffine)

      for
        (tsym, defn) <- preAnalyzer.res.rootValDefns
        if defn.visibility is Visibility.Public
      do
        cc.constrain(generatedVars(tsym), UnknownCons)

      if mono then
        for
          (_, fun) <- preAnalyzer.res.rootFunDefns
          if fun.visibility is Visibility.Public
        do
          cc.constrain(generatedVars(fun.dSym), UnknownCons)
      else
        for (funSym, fun) <- preAnalyzer.res.rootFunDefns do
          val pScheme = funsToProdStratScheme(funSym)
          val synthesizedRefUid =
            preAnalyzer.res.funSymToFunDefn(funSym).sym.asMemberRef(funSym).uid
          val selfProd = pScheme.instantiate(synthesizedRefUid, funSym)
          cc.constrain(selfProd, UnknownCons)
          val selfInstId = synthesizedRefUid :: Nil
          synthesizedInstIdToFunSym(selfInstId) = funSym
    
    // =========================
    
    extension (pScheme: ProdStratScheme) def instantiate(
      referSite: ResultId,
      referringTo: TermSymbol
    )(using cc: ConstraintsCollector): StratVar =
      val groupRep: TermSymbol = funToSccRep(referringTo).get
      val stratVarMap = MutMap.empty[StratVar, StratVar]
      def updateInstantiationId(instId: Opt[InstantiationId]) =
        S(instId.fold(referSite :: Nil)(referSite :: _))
      def duplicateVarStateOpt(s: StratVar | NoProd): StratVar | NoProd =
        s match
        case v: StratVar => duplicateVarState(v)
        case NoProd => NoProd
      def duplicateVarState(s: StratVar) =
        if s.generatedForFun.fold(false):
          forFun => funToSccRep(forFun).fold(false)(_ is groupRep)
        then stratVarMap.getOrElseUpdate(s, freshVar(s.name, s.sourceSymbol, cc.forFun))
        else s
      def duplicateProdStrat(s: ProdStrat): ProdStrat = s match
        case v: StratVar => duplicateVarState(v)
        case p: ProdFun =>
          new ProdFun(p.exprId, updateInstantiationId(p.instantiationId))(
            p.params.map(duplicateConsStrat),
            p.requiredParamCount,
            p.restParam.map(duplicateConsStrat),
            duplicateProdStrat(p.res),
            duplicateVarState(p.capturedVarUpperbound),
            duplicateVarStateOpt(p.effect))
        case UnknownProd => UnknownProd
        case UnsafeEta => UnsafeEta
        case NoProd => NoProd
        case _: Eff => lastWords("`Eff` is only created while solving, after schemes are instantiated")
        case c: Ctor => registerCtor(
          new Ctor(c.exprId, updateInstantiationId(c.instantiationId))(
            c.ctor,
            c.args.map(a => (field = a.field, value = duplicateVarState(a.value), effect = duplicateVarState(a.effect))),
            c.frozen))
      def duplicateConsStrat(c: ConsStrat): ConsStrat = c match
        case v: StratVar => duplicateVarState(v)
        case c: ConsFun =>
          new ConsFun(c.exprId, updateInstantiationId(c.instantiationId))(
            c.params.map(duplicateProdStrat),
            duplicateConsStrat(c.res),
            duplicateVarStateOpt(c.effect))
        case UnknownCons => UnknownCons
        case NonAffine => NonAffine
        case Accumulator => Accumulator
        case pAcc: PossibleAccumulator => duplicateVarState(pAcc.s).asPossibleAccumulator
        case iPrm: IntoParam => duplicateVarState(iPrm.s).asIntoParam
        case r: Reach => duplicateVarState(r.visible).asReach(r.positive)
        case m: Mask => new Mask(duplicateVarState(m.other), duplicateVarState(m.filteredEffect), m.onBody)
        case fSel: FieldSel =>
          new FieldSel(fSel.exprId, updateInstantiationId(fSel.instantiationId))(
            fSel.field,
            fSel.selectsFrom,
            duplicateVarState(fSel.consVar),
            duplicateVarStateOpt(fSel.effect))
        case fWrite: FieldWrite =>
          new FieldWrite(fWrite.exprId, updateInstantiationId(fWrite.instantiationId))(
            fWrite.field,
            fWrite.writesTo,
            duplicateProdStrat(fWrite.rhs),
            duplicateVarStateOpt(fWrite.effect))
        case dtor: Dtor => new Dtor(dtor.exprId, updateInstantiationId(dtor.instantiationId))
      val newProd = duplicateVarState(pScheme.s)
      pScheme.constraints.foreach: (p, c) =>
        cc.constrain(duplicateProdStrat(p), duplicateConsStrat(c))
      newProd
    
    extension (v: StratVar)
      def constrainOpaque(using cc: ConstraintsCollector): Unit =
        cc.constrain(UnknownProd, v)
        cc.constrain(v, UnknownCons)
    
    def mkFunProdStrat(
      resName: String,
      params: NELs[LoweredParamList],
      body: Block,
      funLamId: FunId,
      annotations: Ls[Annot]
    )(using cc: ConstraintsCollector): ProdStrat =
      def paramListFunId(whichParamList: Int): FunId =
        funLamId match
          case (sym: TermSymbol, -1) => (sym, whichParamList)
          case lambdaExprId: ResultId =>
            assert(whichParamList == 0)
            lambdaExprId
          case other => lastWords(s"unexpected funLamId shape: $other")
      val res = freshVar(resName, cc.forFun)
      val sourceSymbol = funLamId match
        case (sym: TermSymbol, _) => S(sym)
        case _: ResultId => N
      val effect =
        freshVar(s"effect_$funLamId", sourceSymbol, cc.forFun)
      val visible = freshVar(s"visible_$funLamId", cc.forFun)
      val filteredEffect = freshVar(s"filtered_effect_$funLamId", cc.forFun)
      cc.constrain(effect, new Mask(visible, filteredEffect, onBody = true))
      cc.constrain(visible, new Mask(effect, filteredEffect, onBody = false))
      // state held by a top-level binding outlives every call, so every function sees it as if it captured
      // the binding: otherwise a function writing it only through a callee would mask that callee's write
      for
        sym <- preAnalyzer.res.topLevelBindings
        bindingStrat <- generatedVars.get(sym)
      do cc.constrain(bindingStrat, visible.asReachPos)
      params.foreach: ps =>
        ps.restParam.foreach: p =>
          generatedVars(p.sym).constrainOpaque
        // * The argument of an optional parameter may be omitted, in which case the parameter is
        // * `null`, a value that is not tracked by the analysis.
        ps.params.drop(ps.paramCountLB).foreach: p =>
          cc.constrain(UnknownProd, generatedVars(p.sym))
      val funValueStrat = params.zipWithIndex.foldRight[ProdStrat](res):
        case ((ps, whichParamList), acc) =>
          val plFunId = paramListFunId(whichParamList)
          // A declared curried function runs its body only at the final list.
          // Applying earlier parameter lists only captures arguments; each needs its own, initially pure summary.
          val effectParamList =
            if whichParamList == params.size - 1 then filteredEffect
            else freshVar(s"effect_$plFunId", cc.forFun)
          val capUB = freshVar(s"cap_ub_$plFunId", cc.forFun)
          for
            v <- preAnalyzer.res.capturedVars(plFunId)
            capturedSymStrat <- generatedVars.get(v)
          do
            cc.constrain(capturedSymStrat, capUB)
            // naming a top-level function must not make its latent effects visible
            if !preAnalyzer.res.isRootFun(v) then cc.constrain(capturedSymStrat, visible.asReachPos)
          for p <- ps.params ++ ps.restParam do
            cc.constrain(generatedVars(p.sym), visible.asReachPos)
          new ProdFun(plFunId, cc.instId)(
            ps.params.map(p => generatedVars(p.sym)),
            ps.paramCountLB,
            ps.restParam.map(p => generatedVars(p.sym)),
            acc,
            capUB,
            effectParamList)
      // An explicit @pure annotation overrides the latent effect. Keep analyzing body
      // calls, but do not let their effects flow into this trusted override.
      processBlock(body)(using cc, res,
        if annotations.exists(_.isInstanceOf[Annot.Pure])
        then N else S(effect))
      funValueStrat

    def processFunctionDefn(fun: FunDefn)(using cc: ConstraintsCollector): Unit =
      val isRoot = preAnalyzer.res.rootFunDefns.contains(fun.dSym)
      if mono || !isRoot then
        given ConstraintsCollector = if isRoot then cc.forActualRootFun(fun.dSym) else cc
        processFunctionBody(fun)

    def processFunctionBody(fun: FunDefn)(using cc: ConstraintsCollector): Unit =
      fun.params match
      case Nil =>
        processBlock(fun.body)(using cc, generatedVars(fun.dSym), S(generatedEffects(fun.dSym)))
      case nel: NELs[?] =>
        val funProdStrat = mkFunProdStrat(
          s"${fun.dSym.nme}_res",
          nel,
          fun.body,
          (fun.dSym, -1),
          fun.annotations)
        cc.constrain(funProdStrat, generatedVars(fun.dSym))
    
    def processClsLikeDefn(cls: ClsLikeDefn)(using cc: ConstraintsCollector, currentEffect: Opt[StratVar]): Unit =
      cls.methodKeys.valuesIterator.foreach(constrainOpaqueResult)
      // constructor args flow into the fields of a `Ctor`, never into these vars, which are therefore unknown;
      // without a producer, a call through such a param would look like it has no callee consuming its args
      (cls.paramsOpt.toList ::: cls.auxParams).foreach(_.allParams.foreach(p => cc.constrain(UnknownProd, generatedVars(p.sym))))
      cls.privateFields.foreach(sym => generatedVars(sym).constrainOpaque)
      cls.publicFields.foreach: (_, tsym) =>
        generatedVars(tsym).constrainOpaque
      cls.methods.foreach: fun =>
        generatedVars(fun.dSym).constrainOpaque
        fun.params.foreach(_.allParams.foreach(p => generatedVars(p.sym).constrainOpaque))
        processBlock(fun.body)(using cc, UnknownCons, N /* methods are always considered impure; we don't track their effects */)
      processBlock(cls.preCtor)(using cc, UnknownCons, N /* FIXME: ctor effects should NOT be discarded */)
      processBlock(cls.ctor)(using cc, UnknownCons, N /* FIXME: ctor effects should NOT be discarded */)
      cls.companion.foreach: mod =>
        mod.methodKeys.valuesIterator.foreach(constrainOpaqueResult)
        mod.privateFields.foreach(sym => generatedVars(sym).constrainOpaque)
        mod.publicFields.foreach: (_, tsym) =>
          generatedVars(tsym).constrainOpaque
        mod.methods.foreach: fun =>
          processFunctionDefn(fun)
          // only root functions get an escape constraint below; the method of a nested module
          // can be called from code this analysis never sees, eg, a later block
          if !preAnalyzer.res.rootFunDefns.contains(fun.dSym) then
            cc.constrain(generatedVars(fun.dSym), UnknownCons)
        processBlock(mod.ctor)(using cc, UnknownCons, N /* FIXME: ctor effects should NOT be discarded */)
    
    def constrainOpaqueResult(r: Result)(using cc: ConstraintsCollector, currentEffect: Opt[StratVar]): Unit =
      cc.constrain(processResult(r), UnknownCons)

    def markUnsafeEta()(using cc: ConstraintsCollector, currentEffect: Opt[StratVar]): Unit =
      // TODO: don't register such constraints unless a flag is on
      currentEffect.foreach(e => cc.constrain(UnsafeEta, e))

    def processBlock(b: Block)(using cc: ConstraintsCollector, blkRes: ConsStrat, currentEffect: Opt[StratVar]): Unit =
      val instId = cc.instId
      b match
      case Return(res) => cc.constrain(processResult(res), blkRes)
      case Throw(exc, annotations) =>
        if annotations.exists(_.isInstanceOf[Annot.Pure]) then
          constrainOpaqueResult(exc)(using cc, N)
        else
          markUnsafeEta()
          constrainOpaqueResult(exc)
      case Match(scrut, arms, dflt, rest) =>
        val scrutStrat = processResult(scrut)
        cc.constrain(scrutStrat, new Dtor(scrut.uid, instId))
        for case (Case.Cls(cls, path), _) <- arms do
          cc.constrain(processResult(path), UnknownCons)
        (arms.map(_._2) ++ dflt).foreach(processBlock)
        processBlock(rest)
      case Label(l, loop, body, rest) =>
        processBlock(body)
        processBlock(rest)
      case Break(label) => ()
      case Continue(label) => ()
      case Scoped(syms, body) => processBlock(body)
      case Begin(sub, rest) =>
        processBlock(sub)
        processBlock(rest)
      case Assign(lhs, rhs, rest) =>
        val rhsStrat = processResult(rhs)
        lhs.match
          case NoSymbol => ()
          case lhs: (LocalVarSymbol | TermSymbol) =>
            cc.constrain(rhsStrat, generatedVars(lhs))
            // variable writes have no effect var of their own: a write to a variable of an enclosing scope
            // is unsafe, which keeps calls to the writer; writes to the writer's own locals stay invisible
            if preAnalyzer.res.nonlocallyAssigned(lhs) then markUnsafeEta()
        processBlock(rest)
      case TryBlock(sub, finallyDo, rest) =>
        processBlock(sub)
        processBlock(finallyDo)
        processBlock(rest)
      case write @ AssignField(lhs, nme, rhs, rest) =>
        write.symbol match
        case TrackableField(field, owner) =>
          val lhsStrat = processResult(lhs)
          // stored values are treated as escaping, so that written fields need none of the markers
          // (eg, non-affinity) that constructor arguments receive
          val stored = freshVar("stored", cc.forFun)
          cc.constrain(processResult(rhs), stored)
          cc.constrain(lhsStrat, new FieldWrite(lhs.uid, instId)(field, owner, stored, currentEffect.getOrElse(NoProd)))
          cc.constrain(stored, UnknownCons)
        case _ =>
          markUnsafeEta()
          constrainOpaqueResult(lhs)
          constrainOpaqueResult(rhs)
        processBlock(rest)
      case AssignDynField(lhs, fld, kind, rhs, rest) =>
        markUnsafeEta()
        constrainOpaqueResult(lhs)
        constrainOpaqueResult(fld)
        constrainOpaqueResult(rhs)
        processBlock(rest)
      case Define(defn, rest) =>
        defn match
        case ValDefn(tsym, sym, rhs) =>
          val rhsStrat = processResult(rhs)
          cc.constrain(rhsStrat, generatedVars(tsym))
        // defining a function only creates a closure: its body's effects go to the function's own effect var
        case fun: FunDefn =>
          processFunctionDefn(fun)
        // Other definitions are deliberately opaque.
        case cls: ClsLikeDefn =>
          markUnsafeEta()
          processClsLikeDefn(cls)
        processBlock(rest)
      case End(msg) => ()
      case Unreachable(_) => ()
    
    def processResult(r: Result)(using cc: ConstraintsCollector, currentEffect: Opt[StratVar]): ProdStrat =
      val instId = cc.instId
      def freshCallEffect(): StratVar =
        val effect = freshVar("call_effect", cc.forFun)
        // A call's effect contributes to the enclosing function's latent effect.
        currentEffect.foreach: enclosingEffect =>
          cc.constrain(effect, enclosingEffect)
        effect
      def constrainConstructorEffect(result: Result): Unit =
        val unsafeEta = result match
          case CtorProducer(cls: ClassSymbol, _, _) if FlowAnalysis.hasSimpleCtor(cls) => false
          case call: Call => !FlowAnalysis.isPureCall(call, call.argss.size - 1)
          case _: Instantiate => true
          case _ => false
        // Constructor bodies are not modeled here; instantiation may have effects.
        if unsafeEta then markUnsafeEta()
      def handleCallLike(callId: CallId, fStrat: ProdStrat, args: List[Arg]): ProdStrat =
        val argsStrat = args.map(a => processResult(a.value))
        if args.exists(_.spread.isDefined) then
          // TODO: preserve callee-effect precision for spread calls
          // * Needs to address [todo:effectful-spreads]
          markUnsafeEta()
          cc.constrain(fStrat, UnknownCons)
          argsStrat.foreach(arg => cc.constrain(arg, UnknownCons))
          UnknownProd
        else
          val callRes = freshVar("call_res", cc.forFun)
          val effect = freshCallEffect()
          cc.constrain(fStrat, new ConsFun(callId, instId)(
            argsStrat,
            callRes,
            effect,
          ))
          callRes
      r match
        case sel@TrackableSelect(from, field, owner) =>
          val fromStrat = processResult(from)
          val selRes = freshVar("sel_res", cc.forFun)
          cc.constrain(
            fromStrat,
            new FieldSel(sel.uid, instId)(field, owner, selRes, currentEffect.getOrElse(NoProd)))
          selRes
        case c@CtorProducer(ctor, args, selectedFrom) if args.forall(_.spread.isEmpty) =>
          constrainConstructorEffect(c)
          for qual <- selectedFrom do
            cc.constrain(processResult(qual), UnknownCons)
          val argsStrat = args.map:
            case Arg(_, a) => processResult(a)
          val frozen = !noFreeze && c.match
            case Instantiate(mut, _, _) => !mut
            case Tuple(mut, _) => !mut
            // the constructor function of a class freezes the instance
            case _: Call => true
            // module objects may have mutable fields
            case _: Path => false
            case r => lastWords(s"unexpected constructor producer: $r")
          ctor match
          case cls: ClassSymbol =>
            cls.tree.clsParams.size match
            case 1 =>
              val clsParams = cls.tree.clsParams.head // TODO use irDefn here and elsewhere
              // TODO: properly check the parameter lists, which may change after passes like lifting
              // softTODO(argsStrat.size === clsParams.size, s"mismatched ctor arg and cls param sizes")
              registerCtor(new Ctor(c.uid, instId)(ctor, mkCtorFields(clsParams, argsStrat), frozen))
            case _ =>
              // - the size of 0 means we don't know the cls param symbols,
              // so we constrain args with UnknownCons and this CtorProducer gives UnknownProd
              // - if size > 1, we cannot handle multiple parameter class flow now,
              //   constrain args with UnknownCons and this CtorProducer gives UnknownProd
              for a <- argsStrat do cc.constrain(a, UnknownCons)
              UnknownProd
          case _: ModuleOrObjectSymbol => registerCtor(new Ctor(c.uid, instId)(ctor, Nil, frozen))
          case tupSize: Int =>
            registerCtor(new Ctor(c.uid, instId)(tupSize, mkCtorFields((0 until tupSize).toList, argsStrat), frozen))
        case c@CtorProducer(_, args, selectedFrom) =>
          markUnsafeEta()
          for qual <- selectedFrom do
            cc.constrain(processResult(qual), UnknownCons)
          args.foreach(arg => cc.constrain(processResult(arg.value), UnknownCons))
          UnknownProd
        case c@Call(fun, argss) =>
          // each later arg list applies the result of the previous one
          argss.iterator.zipWithIndex.foldLeft(processResult(fun)):
            case (fStrat, (args, whichArgList)) => handleCallLike((c.uid, whichArgList), fStrat, args)
        case i@Instantiate(_, cls, argss) =>
          constrainConstructorEffect(i)
          constrainOpaqueResult(cls)
          argss.flatten.foreach(a => constrainOpaqueResult(a.value))
          UnknownProd
        case lam@Lambda(ps, body) =>
          mkFunProdStrat("lam_res", ps ne_:: Nil, body, lam.uid, Nil)
        case _: Tuple => lastWords("should be handled in CtorProducer")
        case Record(_, fields) =>
          if fields.exists(_.spread) then markUnsafeEta()
          fields.foreach:
            case RcdArg(idx, value) =>
              idx.foreach(p => cc.constrain(processResult(p), UnknownCons))
              cc.constrain(processResult(value), UnknownCons)
          UnknownProd
        case p: Path =>
          p match
          case refSite @ FunRef(f, selectedFrom) =>
            // ? [todo:harry-0]
            // ? It's a special case for module getters but I'm not sure if
            // ? this is good enough. It just conservatively marks it unsafe.
            if f.irFunDefn.fold(!f.isAccessPure)(_.params.isEmpty) then markUnsafeEta()
            refSite match
              case DynSelect(_, key, DynSelectKind.Member(_)) => cc.constrain(processResult(key), UnknownCons)
              case SuperSelect(_, base, key) =>
                cc.constrain(processResult(base), UnknownCons)
                cc.constrain(processResult(key), UnknownCons)
              case _ => ()
            for qual <- selectedFrom do
              cc.constrain(processResult(qual), UnknownCons)
            funsToProdStratScheme.get(f) match
            case Some(fScheme) =>
              fScheme.instantiate(refSite.uid, f)
            case None =>
              // in poly mode a root function's body only produces into its scheme, so its var stays empty:
              // only a reference from within its own SCC, which is being analyzed, may have no scheme yet
              softAssert(mono || !preAnalyzer.res.rootFunDefns.contains(f) || funToSccGroups.contains(f),
                s"reference to root function ${f.nme} analyzed before its scheme")
              generatedVars(f)
          case s @ SuperSelect(qual, base, key) =>
            markUnsafeEta()
            cc.constrain(processResult(key), UnknownCons)
            cc.constrain(processResult(qual), UnknownCons)
            cc.constrain(processResult(base), UnknownCons)
            generatedVars(s.symbol)
          case s @ Select(qual, name) =>
            markUnsafeEta()
            cc.constrain(processResult(qual), UnknownCons)
            s.symbol.fold(UnknownProd): selSym =>
              generatedVars(selSym)
          case DynSelect(qual, fld, kind) =>
            markUnsafeEta()
            cc.constrain(processResult(qual), UnknownCons)
            cc.constrain(processResult(fld), UnknownCons)
            kind match
              case DynSelectKind.Member(sym) => generatedVars(sym)
              case DynSelectKind.ArrayIdx | DynSelectKind.Unknown => UnknownProd
          case Cast(value, _, check) =>
            if check then markUnsafeEta()
            val valueStrat = processResult(value)
            cc.constrain(valueStrat, UnknownCons)
            valueStrat
          case Value.MemberRef(member, disamb) =>
            disamb match
            case _: ClassSymbol | _: PatternSymbol =>
              // Just accessing the binding is pure.
              // the reference reads a val resolved to this class, whose value is then used in a way not modeled
              preAnalyzer.res.valOfMember.get(member).foreach: valSym =>
                cc.constrain(generatedVars(valSym), UnknownCons)
            case sym: TermSymbol =>
              // (Accessing mutable fields is a Select)
              if !sym.isAccessPure then markUnsafeEta()
            case _: ModuleOrObjectSymbol =>
              lastWords("module/object references should be handled by CtorProducer")
            case _: TypeAliasSymbol =>
              lastWords("type aliases should not occur as runtime member references")
            generatedVars(disamb)
          case Value.SimpleRef(sym) =>
            generatedVars(sym)
          case Value.This(_) => UnknownProd
          case Value.Lit(lit) => UnknownProd
  }
end FlowConstraintsCollector

class FlowConstraintSolver(val collector: FlowConstraintsCollector):
  given tl: TraceLogger = collector.tl
  given fState: FlowAnalysis.State = collector.fState
  given eState: Elaborator.State = collector.eState
  given preAnalyzer: FlowPreAnalyzer = collector.preAnalyzer
  given Raise = preAnalyzer.raise
  given SymbolPrinter = preAnalyzer.traceSymbolPrinter
  
  
  val ctorsWithDests = mutable.Buffer.empty[Ctor]
  val consumersWithSrcs = mutable.Buffer.empty[ConcreteCtorConsumer]
  val prodFunsWithDests = mutable.Buffer.empty[ProdFun]
  val consFunsWithSrcs = mutable.Buffer.empty[ConsFun]
  val functionEffectVars = LinkedHashMap.empty[ConcreteId[FunId], StratVar | NoProd]
  val callEffectVars = LinkedHashMap.empty[ConcreteId[CallId], StratVar | NoProd]
  // every concrete call site, including those whose callee has no modeled producer (no `srcs`)
  val allConsFuns = LinkedHashSet.empty[ConsFun]
  // every concrete match and field read, including those whose scrutinee has no modeled producer (no `srcs`)
  val allCtorConsumers = LinkedHashSet.empty[ConcreteCtorConsumer]
  // the consumers each function value is directly constrained against; dests omit vars and some consumers
  val prodFunUpperBounds = LinkedHashMap.empty[ProdFun, LinkedHashSet[ConsStrat]]
  
  private def addCtorDest(c: Ctor, d: ConcreteCtorConsumer | MarkerConsStrat): Unit =
    if c.dests.isEmpty then ctorsWithDests += c
    c.dests += d
  private def addDtorSrc(d: ConcreteCtorConsumer, p: Ctor | MarkerProdStrat): Unit =
    if d.srcs.isEmpty then consumersWithSrcs += d
    d.srcs += p
  private def addFunDest(p: ProdFun, c: ConsFun | MarkerConsStrat): Unit =
    if p.dests.isEmpty then prodFunsWithDests += p
    p.dests += c
  private def addFunSrc(c: ConsFun, p: ProdFun | MarkerProdStrat): Unit =
    if c.srcs.isEmpty then consFunsWithSrcs += c
    c.srcs += p
  
  /** Whether instances of `cls` may have the fields of `ancestor` through inheritance.
    * A class whose parent chain is not known is assumed to possibly inherit them.
    * TODO: cache inheritance set in header object to avoid retraversals, here and elsewhere (eg erased types). */
  def mayInheritFields(cls: CtorCls, ancestor: CtorCls): Bool = (cls, ancestor) match
    case (cls: ClassLikeSymbol, ancestor: ClassLikeSymbol) =>
      def go(cur: ClassLikeSymbol, seen: Set[ClassLikeSymbol]): Bool =
        cur.irClassHeader.fold(ClassHeader.Parent.Unknown)(_.parent) match
          case ClassHeader.Parent.Unknown => true
          case ClassHeader.Parent.Root => false
          case ClassHeader.Parent.Known(parent) => parent.asClsOrMod match
            case S(parent) => (parent is ancestor) || !seen(parent) && go(parent, seen + parent)
            case N => true
      go(cls, Set(cls))
    case _ => false
  
  object AllUpperBounds extends
    SccAnalysis.NoopHandling[StratVar]
    with SccAnalysis.CachingComputedNodeValue[StratVar, collection.Set[ConsStrat]]:
      
      protected def successors(node: StratVar): IterableOnce[StratVar] =
        node.upperBounds.iterator.collect:
          case v: StratVar => v
      
      protected def computeValuePerScc(members: Ls[StratVar], sccId: Int): collection.Set[ConsStrat] =
        val res = MutSet.empty[ConsStrat]
        for
          m <- members
          ub <- m.upperBounds
        do ub match
          case v: StratVar => res.addAll(computed.getOrElse(v, Nil))
          case _ => res.add(ub)
        res
      
      def apply(lb: StratVar): collection.Set[ConsStrat] = computed.get(lb) match
        case S(res) => res
        case N =>
          query(lb)
          computed(lb)
    
  
  // whether an upper bound of a value uses it: vars only pass it on (`AllUpperBounds` follows them),
  // and the markers record facts for other analyses
  def isConcreteConsumer(c: ConsStrat): Bool = c match
    case _: ConsFun | _: FieldSel | _: FieldWrite | _: Dtor | UnknownCons => true
    case _: StratVar | _: IntoParam | _: Reach | NonAffine | Accumulator => false
    // `Mask` only bounds effect vars, and `PossibleAccumulator` only appears with accumulator tracking;
    // both count as uses, as they always have in dead-parameter elimination
    case _: PossibleAccumulator | _: Mask => true
  
  // the shared notion of a dead value: nothing ever calls, selects from, writes to, matches on, or leaks it
  def isDeadValue(v: StratVar): Bool = !AllUpperBounds(v).exists(isConcreteConsumer)
  
  private def logNonAffineSyms: Unit =
    tl.scoped(FlowAnalysis.TraceScope.NonAffineSyms):
      given ShowCfg = ShowCfg.internal
      tl.log(">>> non-affine syms >>>")
      val outputRes =
        for
          stratVar <- fState.stratVars
          if AllUpperBounds(stratVar).contains(NonAffine)
        yield summon[SymbolPrinter].printSymbol(stratVar)
      for nonAffine <- outputRes.toSortedSet do
        tl.log(nonAffine)
      tl.log("<<< non-affine syms <<<")
  
  private def logAccumulatorSyms: Unit =
    tl.scoped(FlowAnalysis.TraceScope.AccumulatorSym):
      given ShowCfg = ShowCfg.internal
      tl.log(">>> accumulator syms >>>")
      def showAccumulatorSym(stratVar: StratVar): Opt[Str] =
        AllUpperBounds(stratVar)
          .collectFirst:
            case pAcc: PossibleAccumulator if pAcc.s is stratVar => stratVar
            case iPrm: IntoParam if iPrm.s is stratVar => stratVar
          .map(summon[SymbolPrinter].printSymbol)
      val outputRes =
        for
          stratVar <- fState.stratVars
          if AllUpperBounds(stratVar).contains(Accumulator)
          accumulatorSym <- showAccumulatorSym(stratVar)
        yield accumulatorSym
      for accumulator <- outputRes.toSortedSet do
        tl.log(accumulator)
      tl.log("<<< accumulator syms <<<")
  
  locally {
    def hasConcreteInstantiationId(prodOrCons: ProdStrat | ConsStrat): Boolean = prodOrCons match
      case s: StratWithOrigin[?] => s.instantiationId.isDefined
      case _ => true
    def registerFunctionEffects(prod: ProdStrat): Unit = prod match
      case p: ProdFun =>
        functionEffectVars(p.concreteId) = p.effect
        registerFunctionEffects(p.res)
      case _ => ()
    def inferredCallEffect(c: ConsFun): StratVar | NoProd =
      c.exprId.exprId.getResult match
        case call: Call if FlowAnalysis.isPureCall(call, c.exprId.whichArgList) => NoProd
        case _ => c.effect
    
    def observe(effect: StratVar | NoProd, observed: ProdStrat): Unit = effect match
      case e: StratVar => handle(observed, e)
      case NoProd => ()
    def unknownMayWrite(c: Ctor, field: SelField): Bool =
      !c.frozen || field.match
        case field: TermSymbol => field.k is syntax.MutVal
        case _: Int => false
    def handle(constraint: ProdStrat -> ConsStrat): Unit =
      assert:
        val (prod, cons) = constraint
        hasConcreteInstantiationId(prod) &&
        hasConcreteInstantiationId(cons)
      registerFunctionEffects(constraint._1)
      constraint._2 match
        case c: ConsFun =>
          callEffectVars(c.concreteId) = c.effect
          allConsFuns += c
        case d: (Dtor | FieldSel) => allCtorConsumers += d
        case _ => ()
      constraint match
        case (p: ProdFun, c) => prodFunUpperBounds.getOrElseUpdate(p, LinkedHashSet.empty) += c
        case _ => ()
      constraint match
      case (c: Ctor, d: Dtor) =>
        addCtorDest(c, d)
        addDtorSrc(d, c)
      case (c: Ctor, d: FieldSel) =>
        if d.selectsFrom === c.ctor then
          addCtorDest(c, d)
          addDtorSrc(d, c)
          val field = c.arg(d.field)
          handle(field.value, d.consVar)
          observe(d.effect, field.effect)
        // An inherited field is initialized by a parent constructor, which can receive any
        // of the subclass constructor's arguments. This analysis does not relate them to
        // the field, so the instance and the selected value must be treated as unknown.
        // Otherwise, eg, dead-parameter elimination would drop the argument that the field holds.
        // TODO: Properly track value flows through class constructors (current and inherited)
        else if mayInheritFields(c.ctor, d.selectsFrom) then
          handle(c, UnknownCons)
          handle(UnknownProd, d)
      case (c: Ctor, w: FieldWrite) =>
        if w.writesTo === c.ctor then
          addCtorDest(c, w)
          addDtorSrc(w, c)
          val field = c.arg(w.field)
          handle(w.rhs, field.value)
          handle(field.effect.asEff, field.effect)
          observe(w.effect, field.effect.asEff)
        // as for `FieldSel`: the subclass constructor arguments do not tell which field is written
        else if mayInheritFields(c.ctor, w.writesTo) then
          handle(c, UnknownCons)
          observe(w.effect, UnsafeEta)
      case (c: Ctor, UnknownCons) =>
        addCtorDest(c, UnknownCons)
        for a <- c.args do handle(a.value, UnknownCons)
        for a <- c.args if unknownMayWrite(c, a.field) do
          handle(UnknownProd, a.value)
          handle(UnsafeEta, a.effect)
      case (c: Ctor, x@(NonAffine | Accumulator)) =>
        addCtorDest(c, x)
        for a <- c.args do handle(a.value, x)
      case (c: Ctor, i: IntoParam) =>
        for a <- c.args do handle(a.value, i.s.asPossibleAccumulator)
      case (c: Ctor, p: PossibleAccumulator) =>
        for a <- c.args do handle(a.value, p)
      case (p: ProdFun, c: ConsFun) =>
        addFunDest(p, c)
        addFunSrc(c, p)
        val tracksAccumulator = collector.accumulatorTracking
        
        c.params.take(p.params.size).lazyZip(p.params).foreach: (argC, argP) =>
          handle(argC -> argP)
          if tracksAccumulator then argP match
            case v: StratVar => handle(argC, v.asIntoParam)
            case _ => ()
        for
          restCons <- p.restParam
          arg <- c.params.drop(p.params.size)
        do
          handle(arg, restCons)
          if tracksAccumulator then restCons match
            case v: StratVar => handle(arg, v.asIntoParam)
            case _ => ()
        handle(p.res, c.res)
        // The callee's latent effect becomes the effect observed at this call.
        inferredCallEffect(c) match
        case NoProd => ()
        case ce: StratVar => handle(p.effect, ce)
      case (p: ProdFun, UnknownCons) =>
        addFunDest(p, UnknownCons)
        for a <- p.params do handle(UnknownProd, a)
        p.restParam.foreach(r => handle(UnknownProd, r))
        handle(p.res, UnknownCons)
        // unknown code may call the function any number of times
        if collector.nonAffineTracking then
          addFunDest(p, NonAffine)
          handle(p.capturedVarUpperbound, NonAffine)
      case (p: ProdFun, x@(NonAffine | Accumulator)) =>
        addFunDest(p, x)
        handle(p.capturedVarUpperbound, x)
      case (p: ProdFun, i: IntoParam) =>
        handle(p.capturedVarUpperbound, i.s.asPossibleAccumulator)
      case (p: ProdFun, c: PossibleAccumulator) =>
        handle(p.capturedVarUpperbound, c)
      // every field is treated as mutable, so its contents are reachable at both signs
      case (c: Ctor, r: Reach) =>
        for a <- c.args do
          handle(a.value, r.visible.asReachPos)
          handle(a.value, r.visible.asReachNeg)
          if r.positive then handle(a.effect, r.visible)
      case (p: ProdFun, r: Reach) =>
        for a <- p.params ++ p.restParam do a match
          case v: StratVar => handle(v, r.visible.asReach(!r.positive))
          case _ => ()
        handle(p.res, r)
        if r.positive then p.effect match
          case e: StratVar => handle(e, r.visible)
          case NoProd => ()
      case (UnknownProd, d: Dtor) =>
        addDtorSrc(d, UnknownProd)
      case (UnknownProd, sel: FieldSel) =>
        addDtorSrc(sel, UnknownProd)
        handle(UnknownProd, sel.consVar)
        observe(sel.effect, UnsafeEta)
      case (UnknownProd, w: FieldWrite) =>
        addDtorSrc(w, UnknownProd)
        observe(w.effect, UnsafeEta)
      case (UnknownProd, c: ConsFun) =>
        addFunSrc(c, UnknownProd)
        for a <- c.params do handle(a, UnknownCons)
        handle(UnknownProd, c.res)
        // The conservative fallback.
        inferredCallEffect(c) match
        case NoProd => ()
        case ce: StratVar => handle(UnsafeEta, ce)
      case (e: Eff, m: Mask) =>
        if m.other.lowerBounds.contains(e) then handle(e, m.filteredEffect)
      // an unknown effect cannot be on state the function created, but one that only
      // reaches the visible side comes from an input the body may never use
      case (UnsafeEta, m: Mask) =>
        if m.onBody then handle(UnsafeEta, m.filteredEffect)
      case (p: StratVar, c: StratVar) =>
        if p.upperBounds.add(c) then
          for l <- p.lowerBounds do handle(l, c)
          for u <- c.upperBounds do handle(p, u)
      case (p: StratVar, c) => if p.upperBounds.add(c) then
        c match
          case pAcc: PossibleAccumulator if p is pAcc.s =>
            p.upperBounds.add(Accumulator)
            for l <- p.lowerBounds do handle(l, Accumulator)
          case _ => ()
        for l <- p.lowerBounds do handle(l, c)
      case (p, c: StratVar) => if c.lowerBounds.add(p) then
        for u <- c.upperBounds do handle(p, u)
      case _ => () // ignore other cases
    end handle
    
    for c <- collector.allConstraints do handle(c)
  }
  
  logNonAffineSyms
  logAccumulatorSyms
  
  // a ctor arg reaches `PossibleAccumulator` through its field var, never as the param var itself,
  // so `handle` misses a param that flows back into itself through a ctor field
  if collector.accumulatorTracking then softTODO(
    !collector.allRealCtors.exists: c =>
      c.args.exists: a =>
        a.value.upperBounds.exists:
          case pAcc: PossibleAccumulator => pAcc.s.upperBounds.contains(a.value)
          case _ => false,
    "accumulator detection through constructor fields")


end FlowConstraintSolver
