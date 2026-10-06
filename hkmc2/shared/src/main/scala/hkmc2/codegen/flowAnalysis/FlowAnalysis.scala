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
  )(using TraceLogger, Elaborator.State, Raise, SymbolPrinter) =
    given State = new State
    val pre = new FlowPreAnalyzer(pgrm)
    val constrCol = new FlowConstraintsCollector(pre, mono, nonAffineTracking, accumulatorTracking)
    new FlowConstraintSolver(constrCol)

  def mkTraceLogger(
    cfg: Config.FlowAnalysisConfig,
    prefix: Str,
    outerTl: TL,
  ): TraceLogger =
    new TraceLogger(using outerTl.debugPrinter):
      override def doTrace: Bool = scope match
        case S(TraceScope.NonAffineSyms) => cfg.logNonAffine
        case S(TraceScope.AccumulatorSym) => cfg.logAccumulator
        case _ => cfg.debug

      override def emitDbg(str: Str): Unit =
        outerTl.emitDbg(s"$prefix$str")
    
end FlowAnalysis


class ResultId(val result: Result, name: Str)(using eState: Elaborator.State) extends Symbol(using eState):
  def nme: Str = name
  def subst(using SymbolSubst): ResultId = this
  def toLoc: Opt[Loc] = result.toLoc

type InstantiationId = Ls[ResultId]
type CtorCls = ClassLikeSymbol | Int
type SelField = TermSymbol | Int
type FunId = (funSym: TermSymbol, whichParamList: Int) | ResultId
type OriginId = ResultId | FunId
type ConcreteFunId = ConcreteId[FunId]
type StratVarSym = LocalVarSymbol | TermSymbol
type RootSym = TermSymbol | ClassSymbol


object TrackableFieldSelect:
  def unapply(s: Select): Opt[Path -> (field: TermSymbol, owner: ClassSymbol)] =
    s.symbol match
    // TODO: this _.decl is still use term instead of irDefn?
    // hmm can we get rid of this _.isInstanceOf[Param]?
    case S(sSym) if sSym.asTrm.exists(_.decl.exists(_.isInstanceOf[Param])) =>
      val tSym = sSym.asTrm.get
      for
        owner <- tSym.owner
        cls <- owner.asCls
        if cls.irClsLikeDefn.exists(irCls => (irCls.paramsOpt.toList ::: irCls.auxParams).sizeIs == 1)
      yield s.qual -> (tSym, cls)
    case _ => N

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
      target ->
      locally:
        p match
          case Select(qual, _) => S(qual)
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

class StratVar(val name: Str, val sourceSymbol: Opt[Symbol], val generatedFor: Opt[RootSym])(using eState: Elaborator.State)
  extends Symbol(using eState) with ProdStrat with ConsStrat:
  def nme: Str = name
  def subst(using SymbolSubst): StratVar = this
  def toLoc: Opt[Loc] = sourceSymbol.flatMap(_.toLoc)
  // Bounds belong to this analysis-local variable and are populated by FlowConstraintSolver.
  val upperBounds = LinkedHashSet.empty[ConsStrat]
  val lowerBounds = LinkedHashSet.empty[ProdStrat]
  lazy val asIntoParam = new StratVar.IntoParamImpl(this)
  lazy val asPossibleAccumulator = new StratVar.PossibleAccumulatorImpl(this)

object StratVar:
  final class IntoParamImpl private[StratVar] (val s: StratVar) extends ConsStrat:
    override def toString(): String = s"IntoParam($s)"
  final class PossibleAccumulatorImpl private[StratVar] (val s: StratVar) extends ConsStrat:
    override def toString(): String = s"PossibleAccumulator($s)"
  

  def freshVar(nme: String)(using fState: FlowAnalysis.State): StratVar =
    freshVar(nme, N, N)
  def freshVar(nme: String, generatedFor: RootSym)(using fState: FlowAnalysis.State): StratVar =
    freshVar(nme, N, S(generatedFor))
  def freshVar(nme: String, sourceSymbol: Opt[Symbol], generatedFor: Opt[RootSym])(using fState: FlowAnalysis.State): StratVar =
    val ownName = if nme.isEmpty then "$stratvar" else nme
    val name = generatedFor.fold(ownName)(root => s"${ownName}_for_${root.nme}")
    val stratVar = StratVar(name, sourceSymbol, generatedFor)(using fState.eState)
    fState.stratVars += stratVar
    stratVar
  def freshVar(nme: String, forRootOpt: Opt[RootSym])(using fState: FlowAnalysis.State): StratVar =
    forRootOpt match
    case None => freshVar(nme)
    case Some(forRoot) => freshVar(nme, forRoot)

type IntoParam = StratVar.IntoParamImpl
type PossibleAccumulator = StratVar.PossibleAccumulatorImpl

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
  val restParam: Opt[ConsStrat],
  val res: ProdStrat,
  val capturedVarUpperbound: StratVar
) extends ProdStrat with StratWithOrigin[FunId]:
  val dests = MutSet.empty[ConsFun | MarkerConsStrat]
  override def toString(): String =
    s"(${params.map(_.toString()).mkString(", ")}) -> ${res.toString()}"

case object UnknownProd extends MarkerProdStrat

class Ctor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val ctor: CtorCls,
  val args: Ls[SelField -> ProdStrat]
) extends ProdStrat with StratWithOrigin[ResultId]:
  val dests = MutSet.empty[ConcreteCtorConsumer | MarkerConsStrat]
  override def toString(): String =
    s"$ctor(${args.map(_.toString()).mkString(", ")})"


class ConsFun(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val params: Ls[ProdStrat],
  val res: ConsStrat
) extends ConsStrat with StratWithOrigin[ResultId]:
  val srcs = MutSet.empty[ProdFun | MarkerProdStrat]
  override def toString(): String =
    s"(${params.map(_.toString()).mkString(", ")}) -> ${res.toString()}"

case object UnknownCons extends MarkerConsStrat

case object NonAffine extends MarkerConsStrat

case object Accumulator extends MarkerConsStrat

class FieldSel(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
)(
  val field: SelField,
  val selectsFrom: CtorCls,
  val consVar: StratVar
) extends ConsStrat with ConcreteCtorConsumer

class Dtor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId]
) extends ConsStrat with ConcreteCtorConsumer

case class ConcreteId[A <: OriginId](exprId: A, instId: InstantiationId):
  def pp(using FlowAnalysis.State): Str = exprId match
    case (sym: TermSymbol, idx: Int) => s"${sym.nme}#$idx"
    case r: ResultId => s"${r.getResult}"


// TODO:
// `exposed` are the vars a use links to: a function's own var, or a class's ctor params
class ProdStratScheme(val exposed: Ls[StratVar], val constraints: Ls[ProdStrat -> ConsStrat])

class FlowPreAnalyzer(val pgrm: Program)(using
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
    locallyDefined: MutSet[StratVarSym],
    captured: LinkedHashSet[StratVarSym]
  )
  private var currentCaptureInfo: Opt[CaptureTrackingInfo] = N
  private var currentAffinityCount = res.affinityCounts
  // the functions scanned code refers to and the classes it constructs, of which those of earlier blocks become roots here
  private val usedDefns = mutable.Queue.empty[RootSym]
  // the functions and classes whose code is scanned, local or not, so that a use of one is never taken for a foreign root
  private val scannedDefns = MutSet.empty[RootSym]
  
  
  // main's own code, which lists the roots it defines without entering them
  ctxTracker.inTopLvl(N):
    applyBlock(pgrm.main)
  // then the code of each root, as a unit of its own
  for d <- res.localRoots do scanRoot(d)
  // then each root of an earlier block that scanned code uses, until none is left
  while usedDefns.nonEmpty do
    val d = usedDefns.dequeue()
    val isForeignRoot = d match
      // only a public function, as a private one may have lost params to dpe in its own block
      case f: TermSymbol =>
        !scannedDefns(f) && f.irFunDefn.exists(_.visibility is Visibility.Public) && (f.getState is eState)
      case cls: ClassSymbol => !scannedDefns(cls) && cls.irClsLikeDefn.isDefined
    if isForeignRoot then
      res.foreignRoots.add(d)
      scanRoot(d)
  
  object res:
    val primitiveStratVar = StratVar.freshVar("unknown")
    // the roots defined in this program, in program order
    val localRoots = LinkedHashSet.empty[RootSym]
    // the roots of earlier blocks that the scanned code uses, read through their symbols
    val foreignRoots = LinkedHashSet.empty[RootSym]
    // the vals defined where main's code runs, read through their symbols
    val rootVals = LinkedHashSet.empty[TermSymbol]
    val matchScrutToMatchBlock = MutMap.empty[ResultId, Match]
    val labelSymToLabelBlk = MutMap.empty[LabelSymbol, Label]
    val matchScrutToCtxOfMatch = MutMap.empty[ResultId, Ls[InCtx]]
    val labelSymToCtxOfLabel = MutMap.empty[LabelSymbol, Ls[InCtx]]
    val selToCtxOfSel = MutMap.empty[ResultId, Ls[InCtx]]
    val modSymToBms = MutMap.empty[InnerSymbol, BlockMemberSymbol]
    val generatedVars = MutMap.empty[StratVarSym, StratVar]
    val capturedVars = MutMap.empty[TermSymbol | ResultId, LinkedHashSet[StratVarSym]]
    val affinityCounts = MutMap.empty[StratVarSym, Int].withDefaultValue(0)
    def getEnclosingMatchesForSel(selExprId: ResultId) =
      selToCtxOfSel.get(selExprId).fold(Iterator.empty):
        _.iterator
        .collect:
          case InCtx.MtchBody(m, cse) => m.scrut.uid -> cse
    lazy val nonAffineSyms: Set[StratVarSym] = affinityCounts
      .iterator
      .collect:
        case (sym, n) if n > 1 => sym
      .filterNot:
        case ts: TermSymbol => localRoots.contains(ts) || foreignRoots.contains(ts)
        case _ => false
      .toSet

  end res
  
  enum InCtx:
    // `root` is the unit scanned under this frame (N for main's), which owns the vars bound there
    case TopLvl(root: Opt[RootSym])
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
        case InCtx.TopLvl(_) => true
        case InCtx.Mod(_) => true
        case InCtx.ModCtor(_) => true
        case InCtx.BegnBody(_) => true
        case InCtx.Scped(_) => true
        case _ => false
  
    def getAllCtx = ctx
    def isTopLvlLikeFunCtx: Boolean = isTopLvlLikeFunCtx(ctx)
    def isTopLvlLikeModuleCtx: Boolean =
      ctx.forall:
        case InCtx.TopLvl(_) => true
        case InCtx.BegnBody(_) => true
        case InCtx.Scped(_) => true
        case _ => false
    def registerStratVar(sym: StratVarSym, nme: String): Unit =
      val currentRoot = ctx.lastOption match
        case S(InCtx.TopLvl(root)) => root
        case c => lastWords(s"var registered outside a top-level frame: $c")
      res.generatedVars.getOrElseUpdate(sym, freshVar(nme, S(sym), currentRoot))
    
    private inline def withCtx(newCtx: InCtx)(inline body: => Any)(after: => Unit = ()): Unit =
      ctx = newCtx :: ctx
      body
      ctx = ctx.tail
      after
    
    inline def inMod(mod: ClsLikeBody)(inline body: => Any) =
      withCtx(InCtx.Mod(mod))(body)()
    
    inline def inFun(fun: FunDefn)(inline body: => Any) =
      val locallyDefined = MutSet.empty[StratVarSym]
      locallyDefined += fun.dSym
      for pl <- fun.params do
        pl.params.foreach(p => locallyDefined += p.sym)
        pl.restParam.foreach(p => locallyDefined += p.sym)
      withCtx(InCtx.Fn(fun))(withCaptureInfo(fun.dSym, locallyDefined)(body))()
    
    inline def inLabelBody(label: Label)(inline body: => Any) =
      withCtx(InCtx.LblBody(label))(body):
        res.labelSymToLabelBlk.addOne(label.label -> label)
        res.labelSymToCtxOfLabel.addOne(label.label -> ctx)
    
    inline def inMatchBody(m: Match, cse: Opt[CtorCls])(inline body: => Any): Unit =
      withCtx(InCtx.MtchBody(m, cse))(body):
        res.matchScrutToMatchBlock.addOne(m.scrut.uid -> m)
        res.matchScrutToCtxOfMatch.addOne(m.scrut.uid -> ctx)
    
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
      val locallyDefined = MutSet.empty[StratVarSym]
      lam.params.params.foreach(p => locallyDefined += p.sym)
      lam.params.restParam.foreach(p => locallyDefined += p.sym)
      withCtx(InCtx.Lam(lam))(withCaptureInfo(lam.uid, locallyDefined)(body))()
    
    // each unit is scanned in a top-level context of its own
    inline def inTopLvl(root: Opt[RootSym])(inline body: => Any) =
      assert(ctx.isEmpty)
      withCtx(InCtx.TopLvl(root))(body):
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
    case _ => currentAffinityCount(s) += 1
  
  private def recordRefInCaptures(l: LocalVarSymbol | TermSymbol): Unit =
    (l, currentCaptureInfo) match
    case (_: ClassCtorSymbol, _) | (_, N) => ()
    case (_, S(capInfo)) =>
      if !capInfo.locallyDefined.contains(l) then
        capInfo.captured += l

  private def withCaptureInfo(owner: TermSymbol | ResultId, locallyDefined: MutSet[StratVarSym])(body: => Any): Unit =
    val outerCapInfo = currentCaptureInfo
    val newCapInfo = CaptureTrackingInfo(locallyDefined, LinkedHashSet.empty)
    currentCaptureInfo = S(newCapInfo)
    body
    currentCaptureInfo = outerCapInfo
    outerCapInfo.foreach: outer =>
      outer.captured ++= newCapInfo.captured.iterator.filterNot(outer.locallyDefined.contains)
    res.capturedVars(owner) = newCapInfo.captured
  
  override def applyBlock(b: Block): Unit = b match
    case scpd@Scoped(syms, body) =>
      val localSyms = syms.collect:
        case s: LocalVarSymbol => s
      for s <- localSyms do
        ctxTracker.registerStratVar(s, s.nme)
      currentCaptureInfo.foreach(_.locallyDefined ++= localSyms)
      ctxTracker.inScoped(scpd):
        applyBlock(body)
      currentCaptureInfo.foreach(_.locallyDefined --= localSyms)
    case m@Match(scrut, arms, dflt, rest) =>
      applyPath(scrut)
      val outerAffinityCount = currentAffinityCount
      val mergedBranchUsage = MutMap.empty[StratVarSym, Int].withDefaultValue(0)
      for (cse, body) <- arms do
        val cseCls = cse match
          case Case.Cls(cls, _) => S(cls)
          case Case.Tup(n, false) => S(n)
          case _ => N
        currentAffinityCount = MutMap.empty[StratVarSym, Int].withDefaultValue(0)
        ctxTracker.inMatchBody(m, cseCls):
          applyBlock(body)
        for (sym, n) <- currentAffinityCount do
          mergedBranchUsage(sym) = mergedBranchUsage(sym).max(n)
        currentAffinityCount = outerAffinityCount
      for dft <- dflt do
        currentAffinityCount = MutMap.empty[StratVarSym, Int].withDefaultValue(0)
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
        case l: (LocalVarSymbol | TermSymbol) => recordRefInCaptures(l)
        case _ => ()
      applyResult(rhs)
      applyBlock(rest)
    case Define(defn, rest) =>
      applyDefn(defn)
      applyBlock(rest)
    case Throw(exc) => applyResult(exc)
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
    case AssignDynField(lhs, fld, arrayIdx, rhs, rest) =>
      applyPath(lhs)
      applyPath(fld)
      applyResult(rhs)
      applyBlock(rest)
    case End(_) => ()
    case Unreachable(_) => ()
  
  override def applyResult(r: Result): Unit =
    for case (cls: ClassSymbol, _, _) <- CtorProducer.unapply(r) do usedDefns.enqueue(cls)
    r match
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
      recordRefInCaptures(s)
      if recordAffinity then recordAffinityUse(s)
    case _ => ()

  private def applyValueMemberRef(v: Value.MemberRef, recordAffinity: Bool) =
    val Value.MemberRef(_, disamb) = v
    disamb match
    case s: TermSymbol =>
      recordRefInCaptures(s)
      if recordAffinity then recordAffinityUse(s)
    case _ => ()
  
  override def applyPath(p: Path): Unit =
    for (f, _) <- FunRef.unapply(p) do usedDefns.enqueue(f)
    p match
    case DynSelect(qual, fld, arrayIdx) =>
      applyPath(qual); applyPath(fld)
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
    case p: Select =>
      super.applyPath(p)
    case c: Cast => applyResult(c.value)
    case v: Value => applyValue(v)
  
  override def applyValue(v: Value): Unit = v match
    case v@Value.SimpleRef(l) => applyValueSimpleRef(v, recordAffinity = true)
    case v@Value.MemberRef(_, _) => applyValueMemberRef(v, recordAffinity = true)
    case Value.This(sym) => ()
    case Value.Lit(lit) => ()
  
  override def applyFunDefn(fun: FunDefn): Unit =
    softAssert(fun.dSym.irDefn.exists(_ is fun), s"function ${fun.dSym} is not its symbol's ir definition")
    // a function defined where main's code runs is a root, scanned as a unit of its own
    if ctxTracker.isTopLvlLikeFunCtx then
      res.localRoots.add(fun.dSym)
    else scanFun(fun)
  
  private def scanFun(fun: FunDefn): Unit =
    scannedDefns += fun.dSym
    ctxTracker.inFun(fun):
      ctxTracker.registerStratVar(fun.dSym, fun.sym.nme)
      currentCaptureInfo.foreach(_.locallyDefined += fun.dSym)
      fun.params.foreach(applyParamList)
      applyBlock(fun.body)
  
  // the code of a root, read through its symbol, which owns the vars bound there
  private def scanRoot(d: RootSym): Unit =
    ctxTracker.inTopLvl(S(d)):
      d match
      case f: TermSymbol => scanFun(rootDefn(f))
      case cls: ClassSymbol => scanCtor(rootDefn(cls))
  
  def rootDefn(f: TermSymbol): FunDefn =
    f.irFunDefn.getOrElse(lastWords(s"root function ${f.nme} has no ir definition"))
  def rootDefn(cls: ClassSymbol): ClsLikeDefn =
    cls.irClsLikeDefn.getOrElse(lastWords(s"root class ${cls.nme} has no ir definition"))
  
  override def applyLam(lam: Lambda): Unit =
    ctxTracker.inLam(lam):
      applyParamList(lam.params)
      applyBlock(lam.body)
  
  override def applyValDefn(defn: ValDefn): Unit =
    ctxTracker.registerStratVar(defn.tsym, defn.tsym.nme)
    if ctxTracker.isTopLvlLikeModuleCtx then
      softAssert(defn.tsym.irDefn.exists(_ is defn), s"root val ${defn.tsym} is not its symbol's ir definition")
      res.rootVals.add(defn.tsym)
    currentCaptureInfo.foreach(_.locallyDefined += defn.tsym)
    applyPath(defn.rhs)
  
  override def applyParamList(pl: ParamList): Unit =
    pl.params.foreach(p => ctxTracker.registerStratVar(p.sym, p.sym.nme))
    pl.restParam.foreach(p => ctxTracker.registerStratVar(p.sym, p.sym.nme))
  
  override def applyArg(arg: Arg): Unit =
    applyPath(arg.value)
  
  override def applyDefn(defn: Defn): Unit = defn match
    case defn: FunDefn => applyFunDefn(defn)
    case defn: ValDefn => applyValDefn(defn)
    case cls@ClsLikeDefn(own, isym, sym, ctorSym, k, paramsOpt, auxParams, parentPath, methods,
        privateFields, publicFields, preCtor, ctor, mod, bufferable)
    =>
      for clsSym <- isym.asCls do
        softAssert(clsSym.irClsLikeDefn.exists(_ is cls), s"class ${clsSym} is not its symbol's ir definition")
      // a class defined where main's code runs is a root, whose ctor is scanned as a unit of its own
      isym.asCls match
      case S(clsSym) if ctxTracker.isTopLvlLikeFunCtx =>
        res.localRoots.add(clsSym)
      case _ => scanCtor(cls)
      ctxTracker.inCls(cls):
        privateFields.foreach(tsym => ctxTracker.registerStratVar(tsym, tsym.nme))
        publicFields.foreach: (_, tsym) =>
          ctxTracker.registerStratVar(tsym, tsym.nme)
        methods.foreach(applyFunDefn)
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
  
  private def scanCtor(cls: ClsLikeDefn): Unit =
    cls.isym.asCls.foreach(scannedDefns += _)
    ctxTracker.inCls(cls):
      cls.paramsOpt.foreach(applyParamList)
      cls.auxParams.foreach(applyParamList)
      ctxTracker.inClsPreCtor(cls):
        applyBlock(cls.preCtor)
      ctxTracker.inClsCtor(cls):
        applyBlock(cls.ctor)
  
end FlowPreAnalyzer

class FlowConstraintsCollector(
  val preAnalyzer: FlowPreAnalyzer,
  val mono: Bool,
  val nonAffineTracking: Bool,
  val accumulatorTracking: Bool,
):
  given FlowPreAnalyzer = preAnalyzer
  given Raise = preAnalyzer.raise
  given fState: FlowAnalysis.State = preAnalyzer.fState
  given eState: Elaborator.State = preAnalyzer.eState
  given tl: TraceLogger = preAnalyzer.tl
  import StratVar.freshVar
  
  // how a root is analyzed (poly: one instance per use) and emitted (rewritten in place where it is defined, or as a specialized copy per use)
  private case class RootMode(poly: Bool, rewrittenInPlace: Bool, specialized: Bool):
    assert(poly || !specialized, "a root analyzed mono has no per-use instances to specialize")
  // the roots this analysis sees, each with its mode; the only reader of the `mono` switch
  private val roots = LinkedHashMap.from:
    for d <- preAnalyzer.res.localRoots.iterator ++ preAnalyzer.res.foreignRoots yield
      val mode = d match
        // a ctor is analyzed per construction, and never emitted anew
        case _: ClassSymbol => RootMode(poly = true, rewrittenInPlace = false, specialized = false)
        // a function of an earlier block is emitted only as specialized copies, as its own code lives in that block
        case f: TermSymbol => RootMode(poly = !mono, rewrittenInPlace = preAnalyzer.res.localRoots.contains(f), specialized = !mono)
      d -> mode
  
  // the param fields of a ctor, by the var of the param each one holds
  private case class CtorFields(paramVars: Ls[StratVar], paramOfField: Map[TermSymbol, StratVar])
  
  // collects the constraints of the code of root `forRoot` (N for main's), under path `instId` (N in a scheme template),
  // inside the ctors whose `this` is in `ctorFields`
  private class ConstraintsCollector private (
    val forRoot: Opt[RootSym],
    val instId: Opt[InstantiationId],
    val ctorFields: Map[InnerSymbol, CtorFields],
    buffer: mutable.ListBuffer[ProdStrat -> ConsStrat],
  ):
    def constraints: Ls[ProdStrat -> ConsStrat] = buffer.toList
    def constrain(p: ProdStrat, c: ConsStrat) = buffer.prepend(p -> c)
    def constrain(cs: Iterable[ProdStrat -> ConsStrat]) = buffer.prependAll(cs)
    def forCodeOf(root: RootSym, instId: Opt[InstantiationId]): ConstraintsCollector =
      assert(roots.contains(root))
      new ConstraintsCollector(S(root), instId, Map.empty, buffer)
    def withCtorFields(self: InnerSymbol, fields: CtorFields): ConstraintsCollector =
      new ConstraintsCollector(forRoot, instId, ctorFields + (self -> fields), buffer)
  private object ConstraintsCollector:
    def apply(instId: Opt[InstantiationId]): ConstraintsCollector =
      new ConstraintsCollector(N, instId, Map.empty, mutable.ListBuffer.empty)
  
  private val globalCollector = ConstraintsCollector(S(Nil))
  def allConstraints = globalCollector.constraints
  // the scc groups of poly roots, each instantiated as a whole
  val sccGroups = MutMap.empty[RootSym, Ls[RootSym]]
  def sccRep(d: RootSym): Opt[RootSym] = sccGroups.get(d).map(_.head)
  
  // the one-site path of each local root function's in-place code
  val synthesizedInstIdToFunSymForInPlaceRewrite = LinkedHashMap.empty[InstantiationId, TermSymbol]
  // TODO: clean this up along with the RootMode design...
  // a strategy is rewritable only if the code of each site of its path is emitted
  def isBlocked(s: StratWithOrigin[?]): Bool =
    // a group is emitted only as a whole: as specialized copies, except that an in-place site's entry is rewritten in place
    def groupAllows(d: RootSym, emitted: RootSym => Bool) = sccGroups.getOrElse(d, d :: Nil).forall(emitted)
    def isEmitted(site: ResultId) = synthesizedInstIdToFunSymForInPlaceRewrite.get(site :: Nil) match
      case S(f) => groupAllows(f, m => if m is f then roots(m).rewrittenInPlace else roots(m).specialized)
      case N => site.getResult match
        case FunRef(f, _) => groupAllows(f, roots(_).specialized)
        case CtorProducer(cls: ClassSymbol, _, _) => groupAllows(cls, roots(_).specialized)
        case _ => false
    s.instantiationId.exists(_.exists(!isEmitted(_)))

  val allRealCtors = mutable.Buffer.empty[Ctor]
  private def registerCtor(c: Ctor)(using cc: ConstraintsCollector): Ctor =
    if cc.instId.isDefined then allRealCtors += c
    c
  
  private val generatedVars: collection.Map[StratVarSym, StratVar] =
    preAnalyzer.res.generatedVars.withDefaultValue(preAnalyzer.res.primitiveStratVar)
  
  locally {
    val schemes = MutMap.empty[RootSym, ProdStratScheme]

    // Computing the ProdStratScheme for each scc group of poly roots, this way the sccs of the call graph is
    // never materialized
    object ProdStratSchemeAnalysisInScc extends SccAnalysis[RootSym]:
      protected def successors(d: RootSym): Ls[RootSym] =
        var referred = Ls.empty[RootSym]
        object CollectAllReferredRoots extends BlockTraverser:
          override def applyPath(p: Path) = p match
            case FunRef(callee, _) =>
              if roots.get(callee).exists(_.poly) then
                referred ::= callee
            case _ => ()
          // constructing a class runs its ctor
          override def applyResult(r: Result) =
            r match
            case CtorProducer(cls: ClassSymbol, _, _) if roots.contains(cls) => referred ::= cls
            case _ => ()
            super.applyResult(r)
        d match
        case f: TermSymbol => CollectAllReferredRoots.applyBlock(preAnalyzer.rootDefn(f).body)
        case cls: ClassSymbol =>
          val defn = preAnalyzer.rootDefn(cls)
          CollectAllReferredRoots.applyBlock(defn.preCtor)
          CollectAllReferredRoots.applyBlock(defn.ctor)
        referred
      protected def isHandled(d: RootSym) = schemes.contains(d)
      protected def handleScc(group: Ls[RootSym], sccId: Int): Unit =
        for d <- group do sccGroups(d) = group
        val groupRep = group.head
        ConstraintsCollector(N).givenIn: cc ?=>
          for d <- group do
            given ConstraintsCollector = cc.forCodeOf(d, N)
            d match
            case f: TermSymbol => collectFunction(preAnalyzer.rootDefn(f))
            case cls: ClassSymbol => processCtorBody(preAnalyzer.rootDefn(cls))
          if nonAffineTracking then
            for
              sym <- preAnalyzer.res.nonAffineSyms
              stratVar <- preAnalyzer.res.generatedVars.get(sym)
              if stratVar.generatedFor.flatMap(sccRep).contains(groupRep)
            do cc.constrain(stratVar, NonAffine)
          for d <- group do
            val exposed = d match
              case f: TermSymbol => generatedVars(f) :: Nil
              case cls: ClassSymbol => ctorParamVars(preAnalyzer.rootDefn(cls))
            schemes(d) = ProdStratScheme(exposed, cc.constraints)
    end ProdStratSchemeAnalysisInScc
    
    // every scheme is ready before any code instantiates it
    ProdStratSchemeAnalysisInScc.queryAll(roots.keysIterator.filter(roots(_).poly))
    
    // the site of a synthesized use of root `f`, the one-site path its own code is analyzed under
    def ownSite(f: TermSymbol): ResultId = preAnalyzer.rootDefn(f).sym.asMemberRef(f).uid

    // collect constraints from the top-level block
    globalCollector.givenIn: cc ?=>
      cc.constrain(preAnalyzer.res.primitiveStratVar, UnknownCons)
      cc.constrain(UnknownProd, preAnalyzer.res.primitiveStratVar)
      
      processBlock(preAnalyzer.pgrm.main)(using cc, UnknownCons)
      
      // the code of each root, and its uses by code we cannot see
      for (d, mode) <- roots do (d, mode) match
        // a mono function's code is collected as is under a site of its own, and code we cannot see may call a public one rewritten in place
        case (f: TermSymbol, RootMode(poly = false, rewrittenInPlace = inPlace)) =>
          val site = ownSite(f)
          if inPlace then synthesizedInstIdToFunSymForInPlaceRewrite(site :: Nil) = f
          collectFunction(preAnalyzer.rootDefn(f))(using cc.forCodeOf(f, S(site :: Nil)))
          if inPlace && (preAnalyzer.rootDefn(f).visibility is Visibility.Public) then
            cc.constrain(generatedVars(f), UnknownCons)
        // a poly function's code is rewritten in place as one more instance, which serves every caller without a copy
        case (f: TermSymbol, RootMode(poly = true, rewrittenInPlace = true)) =>
          val site = ownSite(f)
          synthesizedInstIdToFunSymForInPlaceRewrite(site :: Nil) = f
          cc.constrain(schemes(f).instantiate(site, f).head, UnknownCons)
        // a poly function of an earlier block only has the instances of its uses
        case (_: TermSymbol, RootMode(poly = true, rewrittenInPlace = false)) => ()
        // code we cannot see may construct any class defined here
        case (cls: ClassSymbol, _) =>
          if preAnalyzer.res.localRoots.contains(cls) then
            for p <- schemes(cls).instantiate(Value.This(cls)(N).uid, cls) do cc.constrain(UnknownProd, p)

      // this places non-affine constraints correctly:
      // non-affine constraints on symbols owned by a poly scc group are handled
      // in their scc strat scheme, and the global collector collects the remaining constriants
      if nonAffineTracking then
        for
          sym <- preAnalyzer.res.nonAffineSyms
          stratVar <- preAnalyzer.res.generatedVars.get(sym)
          if stratVar.generatedFor.flatMap(sccRep).isEmpty
        do cc.constrain(stratVar, NonAffine)
      
      for
        v <- preAnalyzer.res.rootVals
        if v.irDefn.getOrElse(lastWords(s"root val ${v.nme} has no ir definition")).visibility is Visibility.Public
      do
        cc.constrain(generatedVars(v), UnknownCons)
    
    // =========================
    
    extension (pScheme: ProdStratScheme) def instantiate(
      referSite: ResultId,
      referringTo: RootSym
    )(using cc: ConstraintsCollector): Ls[StratVar] =
      val groupRep: RootSym = sccRep(referringTo).get
      val stratVarMap = MutMap.empty[StratVar, StratVar]
      def updateInstantiationId(instId: Opt[InstantiationId]) =
        S(instId.fold(referSite :: Nil)(referSite :: _))
      def duplicateVarState(s: StratVar) =
        if s.generatedFor.flatMap(sccRep).exists(_ is groupRep)
        then stratVarMap.getOrElseUpdate(s, freshVar(s.name, s.sourceSymbol, cc.forRoot))
        else s
      def duplicateProdStrat(s: ProdStrat): ProdStrat = s match
        case v: StratVar => duplicateVarState(v)
        case p: ProdFun =>
          new ProdFun(p.exprId, updateInstantiationId(p.instantiationId))(
            p.params.map(duplicateConsStrat),
            p.restParam.map(duplicateConsStrat),
            duplicateProdStrat(p.res),
            duplicateVarState(p.capturedVarUpperbound))
        case UnknownProd => UnknownProd
        case c: Ctor => registerCtor(
          new Ctor(c.exprId, updateInstantiationId(c.instantiationId))(
            c.ctor,
            c.args.map((a, b) => a -> duplicateProdStrat(b))))
      def duplicateConsStrat(c: ConsStrat): ConsStrat = c match
        case v: StratVar => duplicateVarState(v)
        case c: ConsFun =>
          new ConsFun(c.exprId, updateInstantiationId(c.instantiationId))(
            c.params.map(duplicateProdStrat),
            duplicateConsStrat(c.res))
        case UnknownCons => UnknownCons
        case NonAffine => NonAffine
        case Accumulator => Accumulator
        case pAcc: PossibleAccumulator => duplicateVarState(pAcc.s).asPossibleAccumulator
        case iPrm: IntoParam => duplicateVarState(iPrm.s).asIntoParam
        case fSel: FieldSel =>
          new FieldSel(fSel.exprId, updateInstantiationId(fSel.instantiationId))(
            fSel.field,
            fSel.selectsFrom,
            duplicateVarState(fSel.consVar))
        case dtor: Dtor => new Dtor(dtor.exprId, updateInstantiationId(dtor.instantiationId))
      val newExposed = pScheme.exposed.map(duplicateVarState)
      pScheme.constraints.foreach: (p, c) =>
        cc.constrain(duplicateProdStrat(p), duplicateConsStrat(c))
      newExposed
    
    // a symbol that never gets a strat var stands for something opaque
    def varOf(sym: Symbol): StratVar = sym match
      case s: StratVarSym => generatedVars(s)
      case _ => preAnalyzer.res.primitiveStratVar
    
    extension (v: StratVar)
      def constrainOpaque(using cc: ConstraintsCollector): Unit =
        cc.constrain(UnknownProd, v)
        cc.constrain(v, UnknownCons)
    
    def mkFunProdStrat(
      resName: String,
      params: Ls[ParamList],
      body: Block,
      funLamId: FunId
    )(using cc: ConstraintsCollector): ProdStrat =
      def paramListFunId(whichParamList: Int): FunId =
        funLamId match
          case (sym: TermSymbol, -1) => (sym, whichParamList)
          case lambdaExprId: ResultId =>
            assert(whichParamList == 0)
            lambdaExprId
          case other => lastWords(s"unexpected funLamId shape: $other")
      val capturedSyms = funLamId match
        case (sym: TermSymbol, _) => preAnalyzer.res.capturedVars(sym)
        case lamExprId: ResultId => preAnalyzer.res.capturedVars(lamExprId)
        case other => lastWords(s"unexpected funLamId shape: $other")
      val res = freshVar(resName, cc.forRoot)
      params.foreach:
        _.restParam.foreach: p =>
          generatedVars(p.sym).constrainOpaque
      val funValueStrat = params.zipWithIndex.foldRight[ProdStrat](res):
        case ((ps, whichParamList), acc) =>
          val plFunId = paramListFunId(whichParamList)
          val capUB = freshVar(s"cap_ub_$plFunId", cc.forRoot)
          for
            v <- capturedSyms
            capturedSymStrat <- generatedVars.get(v)
          do
            cc.constrain(capturedSymStrat, capUB)
          new ProdFun(plFunId, cc.instId)(
            ps.params.map(p => generatedVars(p.sym)),
            ps.restParam.map(p => generatedVars(p.sym)),
            acc,
            capUB)
      processBlock(body)(using cc, res)
      funValueStrat

    def collectFunction(fun: FunDefn)(using cc: ConstraintsCollector): Unit =
      val funProdStrat = mkFunProdStrat(
        s"${fun.dSym.nme}_res",
        fun.params,
        fun.body,
        (fun.dSym, -1))
      cc.constrain(funProdStrat, generatedVars(fun.dSym))
    
    // a root's code is a unit of its own, which the driver collects
    def processFunctionDefn(fun: FunDefn)(using cc: ConstraintsCollector): Unit =
      if !roots.contains(fun.dSym) then collectFunction(fun)
    
    // the field initialized by each ctor param, for a class whose ctor takes a single param list
    def ctorParamFields(defn: ClsLikeDefn): Opt[Ls[Param -> TermSymbol]] =
      defn.paramsOpt.toList ::: defn.auxParams match
      case ps :: Nil if ps.restParam.isEmpty =>
        val fields = ps.params.map: p =>
          p.fldSym.flatMap:
            case tSym: TermSymbol => S(tSym)
            case bms: BlockMemberSymbol => bms.tsym
            case _ => N
        Option.when(fields.forall(_.isDefined))(ps.params.zip(fields.flatten))
      case _ => N
    
    def ctorParamVars(defn: ClsLikeDefn): Ls[StratVar] =
      (defn.paramsOpt.toList ::: defn.auxParams).flatMap(_.allParams).map(p => generatedVars(p.sym))
    
    // a ctor reads and writes its params through their fields on `this`
    def processCtorBody(defn: ClsLikeDefn)(using cc: ConstraintsCollector): Unit =
      val ctorCc = ctorParamFields(defn).fold(cc): paramFields =>
        cc.withCtorFields(defn.isym, CtorFields(
          paramFields.map((p, _) => generatedVars(p.sym)),
          paramFields.map((p, field) => field -> generatedVars(p.sym)).toMap))
      processBlock(defn.preCtor)(using ctorCc, UnknownCons)
      processBlock(defn.ctor)(using ctorCc, UnknownCons)
    
    // a ctor's references to its params are elaborated into selecting their fields on `this`
    object CtorParamFieldSel:
      def unapply(r: Result)(using cc: ConstraintsCollector): Opt[StratVar] = r match
        case s @ Select(Value.This(self), _) =>
          for
            cf <- cc.ctorFields.get(self)
            case field: TermSymbol <- s.symbol
            paramVar <- cf.paramOfField.get(field)
          yield paramVar
        case _ => N
    
    // the `Ctor` strategy already models these stores, and replaying them would let every argument escape
    object CtorParamFieldStore:
      def unapply(b: Block)(using cc: ConstraintsCollector): Opt[Block] =
        def storesParam(cf: CtorFields, field: Symbol, p: SimpleSymbol) = field match
          case f: TermSymbol => cf.paramOfField.get(f).exists(_ is varOf(p))
          case _ => false
        b match
        case af @ AssignField(Value.This(self), _, Value.SimpleRef(p), rest)
          if cc.ctorFields.get(self).exists(cf => af.symbol.exists(storesParam(cf, _, p))) => S(rest)
        case Define(ValDefn(tsym, _, Value.SimpleRef(p)), rest)
          if cc.ctorFields.valuesIterator.exists(storesParam(_, tsym, p)) => S(rest)
        case _ => N
    
    // any other use of `this` hands every param field to something this analysis does not model
    object CtorThisEscape:
      def unapply(r: Result)(using cc: ConstraintsCollector): Opt[Ls[StratVar]] = r match
        case Value.This(self) => cc.ctorFields.get(self).map(_.paramVars)
        case _ => N
    
    def processClsLikeDefn(cls: ClsLikeDefn)(using cc: ConstraintsCollector): Unit =
      cls.privateFields.foreach(sym => generatedVars(sym).constrainOpaque)
      cls.publicFields.foreach: (_, tsym) =>
        generatedVars(tsym).constrainOpaque
      cls.methods.foreach: fun =>
        generatedVars(fun.dSym).constrainOpaque
        fun.params.foreach(_.allParams.foreach(p => generatedVars(p.sym).constrainOpaque))
        processBlock(fun.body)(using cc, UnknownCons)
      cls.isym.asCls match
      case S(clsSym) =>
        // a root class's ctor is a unit of its own, while a nested one is collected with its unit, for unknown args too
        if !roots.contains(clsSym) then
          for p <- ctorParamVars(cls) do cc.constrain(UnknownProd, p)
          processCtorBody(cls)
      case N =>
        processBlock(cls.preCtor)(using cc, UnknownCons)
        processBlock(cls.ctor)(using cc, UnknownCons)
      cls.companion.foreach: mod =>
        mod.privateFields.foreach(sym => generatedVars(sym).constrainOpaque)
        mod.publicFields.foreach: (_, tsym) =>
          generatedVars(tsym).constrainOpaque
        mod.methods.foreach: fun =>
          processFunctionDefn(fun)
        processBlock(mod.ctor)(using cc, UnknownCons)
    
    def constrainOpaqueResult(r: Result)(using cc: ConstraintsCollector): Unit =
      cc.constrain(processResult(r), UnknownCons)

    def processBlock(b: Block)(using cc: ConstraintsCollector, blkRes: ConsStrat): Unit =
      val instId = cc.instId
      b match
      case CtorParamFieldStore(rest) => processBlock(rest)
      case Return(res) => cc.constrain(processResult(res), blkRes)
      case Throw(exc) => constrainOpaqueResult(exc)
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
          case lhs: (LocalVarSymbol | TermSymbol) => cc.constrain(rhsStrat, generatedVars(lhs))
        processBlock(rest)
      case TryBlock(sub, finallyDo, rest) =>
        processBlock(sub)
        processBlock(finallyDo)
        processBlock(rest)
      case AssignField(lhs, nme, rhs, rest) =>
        constrainOpaqueResult(lhs)
        constrainOpaqueResult(rhs)
        processBlock(rest)
      case AssignDynField(lhs, fld, arrayIdx, rhs, rest) =>
        constrainOpaqueResult(lhs)
        constrainOpaqueResult(fld)
        constrainOpaqueResult(rhs)
        processBlock(rest)
      case Define(defn, rest) =>
        defn match
        case ValDefn(tsym, sym, rhs) =>
          val rhsStrat = processResult(rhs)
          cc.constrain(rhsStrat, generatedVars(tsym))
        case fun: FunDefn =>
          processFunctionDefn(fun)
        case cls: ClsLikeDefn =>
          processClsLikeDefn(cls)
        processBlock(rest)
      case End(msg) => ()
      case Unreachable(_) => ()
    
    def processResult(r: Result)(using cc: ConstraintsCollector): ProdStrat =
      val instId = cc.instId
      def handleCallLike(callExprId: ResultId, f: Path, args: List[Arg]): ProdStrat =
        val fStrat = processResult(f)
        val argsStrat = args.map(a => processResult(a.value))
        if args.exists(_.spread.isDefined) then
          cc.constrain(fStrat, UnknownCons)
          argsStrat.foreach(arg => cc.constrain(arg, UnknownCons))
          UnknownProd
        else
          val callRes = freshVar("call_res", cc.forRoot)
          cc.constrain(fStrat, new ConsFun(callExprId, instId)(argsStrat, callRes))
          callRes
      r match
        case CtorParamFieldSel(paramVar) => paramVar
        case CtorThisEscape(paramVars) =>
          for v <- paramVars do cc.constrain(v, UnknownCons)
          UnknownProd
        case sel@TrackableSelect(from, field, owner) =>
          val fromStrat = processResult(from)
          val selRes = freshVar("sel_res", cc.forRoot)
          cc.constrain(
            fromStrat,
            new FieldSel(sel.uid, instId)(field, owner, selRes))
          selRes
        case c@CtorProducer(ctor, args, selectedFrom) if args.forall(_.spread.isEmpty) =>
          for qual <- selectedFrom do
            cc.constrain(processResult(qual), UnknownCons)
          val argsStrat = args.map:
            case Arg(_, a) => processResult(a)
          ctor match
          case cls: ClassSymbol =>
            val modeled = for
              defn <- cls.irClsLikeDefn
              paramFields <- ctorParamFields(defn)
              if argsStrat.sizeCompare(paramFields) === 0
            yield defn -> paramFields
            modeled match
            case S((defn, paramFields)) =>
              // a class with a scheme is instantiated here; a nested class, or one of the group being collected, links its own params
              val paramVars = schemes.get(cls).fold(ctorParamVars(defn))(_.instantiate(c.uid, cls))
              argsStrat.lazyZip(paramVars).foreach(cc.constrain)
              registerCtor(new Ctor(c.uid, instId)(ctor, paramFields.map(_._2).zip(argsStrat)))
            case N =>
              // an unmodeled class, or an arity mismatch from a partially applied ctor function or a reported error
              for a <- argsStrat do cc.constrain(a, UnknownCons)
              UnknownProd
          case _: ModuleOrObjectSymbol => registerCtor(new Ctor(c.uid, instId)(ctor, Nil))
          case tupSize: Int =>
            registerCtor(new Ctor(c.uid, instId)(tupSize, (0 until tupSize).zip(argsStrat).toList))
        case c@CtorProducer(_, args, selectedFrom) =>
          for qual <- selectedFrom do
            cc.constrain(processResult(qual), UnknownCons)
          args.foreach(arg => cc.constrain(processResult(arg.value), UnknownCons))
          UnknownProd
        case c@Call(fun, argss) =>
          argss match
            case args :: Nil => handleCallLike(c.uid, fun, args)
            case args :: rest =>
              // For multi-arg-list calls, handle the first arg list normally for
              // dead-param-elim, then constrain subsequent arg lists opaquely.
              // We cannot reuse c.uid for subsequent ConsFuns because the
              // DeadParamElim rewriter only rewrites the first arg list,
              // and sharing the same exprId would cause conflicting eliminable sets.
              val firstResult = handleCallLike(c.uid, fun, args)
              cc.constrain(firstResult, UnknownCons)
              rest.foreach: nextArgs =>
                nextArgs.foreach(a => cc.constrain(processResult(a.value), UnknownCons))
              UnknownProd
        case i@Instantiate(_, cls, argss) =>
          constrainOpaqueResult(cls)
          argss.flatten.foreach(a => constrainOpaqueResult(a.value))
          UnknownProd
        case lam@Lambda(ps, body) =>
          mkFunProdStrat("lam_res", ps :: Nil, body, lam.uid)
        case _: Tuple => lastWords("should be handled in CtorProducer")
        case Record(_, fields) =>
          fields.foreach:
            case RcdArg(idx, value) =>
              idx.foreach(p => cc.constrain(processResult(p), UnknownCons))
              cc.constrain(processResult(value), UnknownCons)
          UnknownProd
        case p: Path =>
          p match
          case refSite@FunRef(f, selectedFrom) =>
            for qual <- selectedFrom do
              cc.constrain(processResult(qual), UnknownCons)
            // a root with a scheme is instantiated at each use; any other function, or one of the group being collected, links its own var
            schemes.get(f) match
            case Some(fScheme) =>
              fScheme.instantiate(refSite.uid, f).head
            case None => generatedVars(f)
          case s@Select(qual, name) =>
            cc.constrain(processResult(qual), UnknownCons)
            s.symbol.fold(UnknownProd)(varOf)
          case DynSelect(qual, fld, arrayIdx) =>
            cc.constrain(processResult(qual), UnknownCons)
            cc.constrain(processResult(fld), UnknownCons)
            UnknownProd
          case Cast(value, _, _) =>
            val valueStrat = processResult(value)
            cc.constrain(valueStrat, UnknownCons)
            valueStrat
          case Value.MemberRef(_, disamb) => varOf(disamb)
          case Value.SimpleRef(sym) => varOf(sym)
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
    def handle(constraint: ProdStrat -> ConsStrat): Unit =
      assert:
        val (prod, cons) = constraint
        hasConcreteInstantiationId(prod) &&
        hasConcreteInstantiationId(cons)
      constraint match
      case (c: Ctor, d: Dtor) =>
        addCtorDest(c, d)
        addDtorSrc(d, c)
      case (c: Ctor, d: FieldSel) =>
        if d.selectsFrom === c.ctor then
          addCtorDest(c, d)
          addDtorSrc(d, c)
          handle(
            c.args.find(_._1 is d.field).get._2,
            d.consVar)
      case (c: Ctor, UnknownCons) =>
        addCtorDest(c, UnknownCons)
        for (_, argProd) <- c.args do handle(argProd, UnknownCons)
      case (c: Ctor, x@(NonAffine | Accumulator)) =>
        addCtorDest(c, x)
        for (_, argProd) <- c.args do handle(argProd, x)
      case (c: Ctor, i: IntoParam) =>
        for (_, argProd) <- c.args do handle(argProd, i.s.asPossibleAccumulator)
      case (c: Ctor, p: PossibleAccumulator) =>
        for (_, argProd) <- c.args do handle(argProd, p)
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
      case (p: ProdFun, UnknownCons) =>
        addFunDest(p, UnknownCons)
        for a <- p.params do handle(UnknownProd, a)
        p.restParam.foreach(r => handle(UnknownProd, r))
        handle(p.res, UnknownCons)
      case (p: ProdFun, x@(NonAffine | Accumulator)) =>
        addFunDest(p, x)
        handle(p.capturedVarUpperbound, x)
      case (p: ProdFun, i: IntoParam) =>
        handle(p.capturedVarUpperbound, i.s.asPossibleAccumulator)
      case (p: ProdFun, c: PossibleAccumulator) =>
        handle(p.capturedVarUpperbound, c)
      case (UnknownProd, d: Dtor) =>
        addDtorSrc(d, UnknownProd)
      case (UnknownProd, sel: FieldSel) =>
        addDtorSrc(sel, UnknownProd)
        handle(UnknownProd, sel.consVar)
      case (UnknownProd, c: ConsFun) =>
        addFunSrc(c, UnknownProd)
        for a <- c.params do handle(a, UnknownCons)
        handle(UnknownProd, c.res)
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


end FlowConstraintSolver
