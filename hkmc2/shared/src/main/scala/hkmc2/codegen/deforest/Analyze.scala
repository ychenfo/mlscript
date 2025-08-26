package hkmc2
package codegen
package deforest

import semantics.*
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import Result.ResultId

final case class NotDeforestableException(msg: String) extends Exception(msg)

type StratVarId = Uid[StratVarState]
type InstantiationId = Ls[ResultId]

class StratVarState(val uid: StratVarId, val name: Str, val generatedForDef: Opt[BlockMemberSymbol]):
  lazy val asProdStrat = ProdVar(this)
  lazy val asConsStrat = ConsVar(this)
  override def toString(): String = s"${if name.isEmpty() then "var" else name}@${uid}@$generatedForDef"
object StratVarState:
  def freshVar(nme: String, generatedForDef: Opt[BlockMemberSymbol])(using vuid: Uid.StratVar.State) =
    val newId = vuid.nextUid
    StratVarState(newId, nme, generatedForDef)
trait StratVar(s: StratVarState):
  this: ProdVar | ConsVar =>
  def asProdStrat = s.asProdStrat
  def asConsStrat = s.asConsStrat
  def uid = s.uid


sealed abstract class ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat with StratVar(s)
case class ProdFun(params: Ls[ConsStrat], res: ProdStrat) extends ProdStrat
case object NoProd extends ProdStrat

// val UNIQE = mutable.Set.empty[CtorId]
// def register(c: Ctor)(using pre: DeforestPreAnalyzer) =
//   c.instantiationId match
//     case None => ()
//     case Some(instId) => 
//       if !UNIQE.add(c.exprId -> instId) then lastWords(s"${c.ctor}@${instId.toReadableCallPath(pre)} again")

case class Ctor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId])(
  val ctor: ClassLikeSymbol,
  val args: Ls[TermSymbol -> ProdStrat])(using pre: DeforestPreAnalyzer) extends ProdStrat
    // register(this)

sealed abstract class ConsStrat
case class ConsVar(s: StratVarState) extends ConsStrat with StratVar(s)
case class ConsFun(params: Ls[ProdStrat], res: ConsStrat) extends ConsStrat
case object NoCons extends ConsStrat
class FieldSel(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId],
  val field: Tree.Ident,
  val consVar: ConsVar) extends ConsStrat:
    // this filter means that this selection occurs in match branches where the
    // keys (of type ProdVar) are known to be of the type of the ClassLikeSymbols
    val filter = mutable.Map.empty[ProdVar, Ls[ClassLikeSymbol]].withDefaultValue(Nil)
    def updateFilter(p: ProdVar, c: Ls[ClassLikeSymbol]) =
      filter += p -> (c ::: filter(p))

class Dtor(
  val scrutExprId: ResultId,
  val instantiationId: Opt[InstantiationId]) extends ConsStrat

class ProdStratScheme(s: StratVarState, constraints: Ls[ProdStrat -> ConsStrat]):
  def instantiate(referSite: ResultId)(using d: DeforestConstraintsCollector, cc: d.ConstraintsAndCacheHitCollector): ProdVar = d.preAnalyzer.tl.trace(s"inst ${d.preAnalyzer.getReferredFunSym(referSite)} under ${cc.forFun}"):
    given DeforestPreAnalyzer = d.preAnalyzer
    val instantiatingFunSym = d.preAnalyzer.getResult(referSite) match
      case Value.Ref(l) => l.asBlkMember.get
      case s: Select => s.symbol.flatMap(_.asBlkMember).get
      case _ => die
    assert(instantiatingFunSym.isFunctionSymbol)
    val instantiatingRecursiveGroup = d.funSymToProdStratScheme.recursiveGroups(instantiatingFunSym)
    val stratVarMap = mutable.Map.empty[StratVarState, StratVarState]
    def updateInstantiationId(instId: Opt[InstantiationId]) =
      S(instId.fold(referSite :: Nil)(l => referSite :: l))
    def duplicateVarState(s: StratVarState) =
      if s.generatedForDef.fold(false)(instantiatingRecursiveGroup.contains) then
        stratVarMap.getOrElseUpdate.curried(s):
          StratVarState.freshVar(s.name, cc.forFun)(using d.stratVarUidState)
      else
        s
    def duplicateProdStrat(s: ProdStrat): ProdStrat = s match
      case ProdVar(s) => duplicateVarState(s).asProdStrat
      case ProdFun(params, res) => ProdFun(params.map(duplicateConsStrat), duplicateProdStrat(res))
      case NoProd => NoProd
      case c: Ctor => new Ctor(
        c.exprId,
        updateInstantiationId(c.instantiationId))(
        c.ctor,
        c.args.map((a, b) => a -> duplicateProdStrat(b))
      )
    def duplicateConsStrat(c: ConsStrat): ConsStrat = c match
      case ConsVar(s) => duplicateVarState(s).asConsStrat
      case ConsFun(params, res) => ConsFun(params.map(duplicateProdStrat), duplicateConsStrat(res))
      case NoCons => NoCons
      case fSel: FieldSel =>
        val res = new FieldSel(
          fSel.exprId,
          updateInstantiationId(fSel.instantiationId),
          fSel.field,
          duplicateVarState(fSel.consVar.s).asConsStrat)
        fSel.filter.foreach: (p, ls) =>
          res.updateFilter(duplicateVarState(p.s).asProdStrat, ls)
        res
      case dtor: Dtor => new Dtor(dtor.scrutExprId, updateInstantiationId(dtor.instantiationId))
    val newProd = duplicateVarState(s).asProdStrat
    constraints.foreach: (p, c) =>
      cc.constrain(duplicateProdStrat(p), duplicateConsStrat(c))
    newProd

class DeforestPreAnalyzer(
  val b: Block,
  val importedInfo: ImportedInfo
)(using val elabState: Elaborator.State, val tl: TraceLogger) extends BlockTraverser:
  given stratVarUidState: Uid.StratVar.State = new Uid.StratVar.State
  import StratVarState.freshVar
  
  // this contains
  // - top level computations // TODO: how???? or can current implementation hanlde it already?
  // - preCtor and Ctor in module definitions
  // - exported module functions
  // and their corresponding correct root instantiation id?
  var topLevelLikeComputations: Ls[Block | FunDefn] = Nil
  var dummyRefsToTopLevelLikeFuns = Map.empty[BlockMemberSymbol, Value.Ref]
  lazy val dummyRefsInstantiationIds: Set[InstantiationId] = dummyRefsToTopLevelLikeFuns.values.map(_.uid :: Nil).toSet
  object arrBlkMemSym:
    val store = mutable.Map.empty[Int, ClassSymbol]
    def apply(n: Int) = store.getOrElseUpdate.curried(n):
      ClassSymbol(Tree.DummyTypeDef(syntax.Cls), Tree.Ident(s"Deforest_Arr_$n"))
  val noProdStratVar = freshVar("primitive", N).asProdStrat
  val resultIdToResult = mutable.Map.empty[ResultId, Result]
  val topLevelFunSymToFun = mutable.Map.empty[BlockMemberSymbol, FunDefn]
  val matchScrutToMatchBlock = mutable.Map.empty[ResultId, Match]
  val matchScrutToParentMatchScruts = mutable.Map.empty[ResultId, Ls[ResultId]]
  val matchScrutInFunDef = mutable.Map.empty[ResultId, Opt[BlockMemberSymbol]]
  val selsToMatchingArmsContainingIt = mutable.Map.empty[ResultId, Ls[ResultId -> Opt[ClassLikeSymbol]]]
  val symToStratVar = mutable.Map.empty[Symbol, ProdVar]
  val usedFunSyms = mutable.Set.empty[BlockMemberSymbol]
  lazy val topLevelDefinedFunSyms = topLevelFunSymToFun.keySet
  val nonTopLevelDefinedFunSyms = mutable.Set.empty[BlockMemberSymbol]
  def getProdVarForSym(s: Symbol) = s match
    case _: (BuiltinSymbol | TopLevelSymbol) => noProdStratVar
    case _ if s.asCls.isDefined => noProdStratVar
    case _ => symToStratVar(s)
  def getTopLevelFunDefnForSym(s: BlockMemberSymbol) = topLevelFunSymToFun.get(s)
  def getCtorSymFromCtorLikeExprId(id: ResultId): Opt[ClassLikeSymbol] =
    resultIdToResult(id).getCtorSymFromCtorLikeExpr(using this)
  def getMatchFromMatchScrutExprId(scrutExprId: ResultId): Opt[Match] =
    matchScrutToMatchBlock.get(scrutExprId)
  def getResult(id: ResultId) = resultIdToResult(id)
  def getStableResultId(id: ResultId) = resultIdToStableId.getOrElseUpdate.curried(id):
    val prev = stableResuldIt
    stableResuldIt += 1
    prev
  def getReferredFunSym(id: ResultId) =
    def chk(s: BlockMemberSymbol) =
      assert(s.isFunction)
      s
    resultIdToResult(id) match
      case s: Select => chk(s.symbol.get.asBlkMember.get)
      case Value.Ref(l) => chk(l.asBlkMember.get)
      case _ => die
  
  private var moduleFuns: Opt[Set[BlockMemberSymbol]] = N
  // should only consider imported functions, top level functions and functions inside modules
  // private var shouldConsiderFunDefn = true
  // imported functions referring to privately defined `val` or `let`s are not handleable
  private var importedFunctionHandleable = true
  // indicate if a block contains features that current implementation cannot handle (other than side effects)
  private var handleable = true
  // if a function is imported or not
  private var imported = false
  private val resultIdToStableId = mutable.Map.empty[ResultId, Int]  
  private var stableResuldIt = 0
  private var inMatchScrutsArms: Ls[ResultId -> Opt[ClassLikeSymbol]] = Nil
  private def inMatchScruts = inMatchScrutsArms.unzip._1
  private var inFunDef: Opt[BlockMemberSymbol] = N
  private var symsDefinedForFun: Opt[Set[Symbol]] = N
  private def maybeCollectFun(fun: FunDefn) =
    // if shouldConsiderFunDefn && handleable && (imported && importedFunctionHandleable) || !imported then
    if handleable then
      topLevelFunSymToFun += fun.sym -> fun
    // if !imported && shouldConsiderFunDefn && handleable then
    if !imported && handleable then
      topLevelLikeComputations ::= fun
      val dummyRef = Value.Ref(fun.sym)
      resultIdToResult += dummyRef.uid -> dummyRef
      dummyRefsToTopLevelLikeFuns += fun.sym -> dummyRef.asInstanceOf[Value.Ref]
  private def isPrivatelyDefined(s: Symbol) =
    imported && importedInfo.privateSymbols.contains(s)
  override def applyFunDefn(fun: FunDefn): Unit =
    inFunDef match
      case N =>
        // handleable = true
        handleable = moduleFuns.fold(true)(s => s.contains(fun.sym))
        inFunDef = S(fun.sym)
        // symsDefinedForFun = S(fun.body.definedVars ++ fun.params.flatMap(_.params.map(_.sym)) + fun.sym)
        symsDefinedForFun = S(fun.deforestDefinedVars)
        super.applyFunDefn(fun)
        maybeCollectFun(fun)
        inFunDef = N
        symsDefinedForFun = N
      case S(value) =>
        // nothing special for non-top-level functions // TODO: after ensuring lift before deforest just panic here
        nonTopLevelDefinedFunSyms += fun.sym
        super.applyFunDefn(fun)
  
  override def applySymbol(s: Symbol): Unit = s match
    case s: BlockMemberSymbol if s.isFunction && symsDefinedForFun.fold(true)(x => !x.contains(s)) => symToStratVar.updateWith(s):
      case N => S(freshVar(s.nme, S(s)).asProdStrat)
      case S(x) => S(x)
    // term symbol: variable in patterns so they are always inside the current fundefn (if any)
    // FIXME: check
    // case s: (TermSymbol | TempSymbol | FlowSymbol) => symToStratVar.updateWith(s):
    //   case N =>
    //     println(s"new for $s(${s.getClass()}) in $inFunDef")
    //     S(freshVar(s.nme, inFunDef).asProdStrat)
    //   case S(x) => S(x)
    case v: (BlockMemberSymbol | VarSymbol | TermSymbol | TempSymbol | FlowSymbol) => symToStratVar.updateWith(s):
      case N =>
        // println(s"new !! for $v")
        val inFunOrNot = inFunDef.fold(false): _ =>
          symsDefinedForFun.get.contains(s)
        S(freshVar(s.nme, if inFunOrNot then inFunDef else N).asProdStrat)
      case S(x) => S(x)
    case _: (TopLevelSymbol | BuiltinSymbol | ClassLikeSymbol) => ()
    case _ => lastWords(s"$s")
  
  override def applyResult(r: Result): Unit =
    resultIdToResult += r.uid -> r
    r match
      case DeforestTupSelect(scrut, idx) =>
        selsToMatchingArmsContainingIt += r.uid -> inMatchScrutsArms
      case _ => ()
    super.applyResult(r)
  
  override def applyPath(p: Path): Unit =
    resultIdToResult += p.uid -> p
    p match
      case s@Select(path, nme) =>
        selsToMatchingArmsContainingIt += s.uid -> inMatchScrutsArms
        s.symbol match
          case None => ()
          case Some(sym) =>
            if isPrivatelyDefined(sym) then handleable = false
            if sym.isFunction then usedFunSyms += s.symbol.get.asBlkMember.get
      case _ => ()
    super.applyPath(p)
  
  override def applyValue(v: Value): Unit =
    resultIdToResult += v.uid -> v
    v match
      case Value.Ref(l) =>
        if l.isFunction then usedFunSyms += l.asBlkMember.get
        if isPrivatelyDefined(l) then handleable = false
      case Value.This(_) => handleable = false
      case _ => ()
    super.applyValue(v)
  
  override def applyBlock(b: Block): Unit = b match
    case m@Match(scrut, arms, dflt, rest) =>
      matchScrutToMatchBlock += scrut.uid -> m
      matchScrutInFunDef += scrut.uid -> inFunDef
      matchScrutToParentMatchScruts += scrut.uid -> inMatchScruts
      applyPath(scrut)
      
      val prev = inMatchScrutsArms
      arms.foreach: arm =>
        val cse = arm._1 match
          case Case.Cls(cls, path) => S(cls)
          case _ => N
        inMatchScrutsArms = (scrut.uid -> cse) :: inMatchScrutsArms
        applyCase(arm._1); applySubBlock(arm._2)
        inMatchScrutsArms = prev
      
      inMatchScrutsArms = (scrut.uid -> N) :: inMatchScrutsArms
      dflt.foreach(applySubBlock)
      inMatchScrutsArms = prev
      
      applySubBlock(rest)
    case _ => super.applyBlock(b)
  
  override def applyDefn(defn: Defn): Unit = defn match
    case clsLike: ClsLikeDefn if clsLike.k is syntax.Mod =>
      topLevelLikeComputations ::= clsLike.preCtor
      topLevelLikeComputations ::= clsLike.ctor
      moduleFuns = S(clsLike.methods.map(_.sym).toSet)
      super.applyDefn(defn)
      moduleFuns = N
    case _: ClsLikeDefn => () // no need to traverse class defn body at all
    case _ => super.applyDefn(defn)
  
  override def applyArg(arg: Arg): Unit =
    if arg.spread.isDefined then handleable = false
    super.applyArg(arg)
  
  override def applyParamList(pl: ParamList): Unit =
    if pl.restParam.isDefined then handleable = false
    super.applyParamList(pl)
  
  imported = true
  importedInfo.funAndDefs.foreach: (_, fdefn) =>
    applyFunDefn(fdefn)
  imported = false
  applyBlock(b)


class DeforestConstraintsCollector(val preAnalyzer: DeforestPreAnalyzer):
  given stratVarUidState: Uid.StratVar.State = preAnalyzer.stratVarUidState
  given elabState: Elaborator.State = preAnalyzer.elabState
  given DeforestPreAnalyzer = preAnalyzer
  import StratVarState.freshVar
  
  
  val constraints = processTopLevel
  class ConstraintsAndCacheHitCollector(val forFun: Opt[BlockMemberSymbol]):
    var constraints: Ls[ProdStrat -> ConsStrat] = Nil
    var trackedFunctionSymbolsInOneRecGroup: Ls[BlockMemberSymbol] = Nil
    def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
    def constrain(cs: Ls[ProdStrat -> ConsStrat]) = constraints :::= cs
    def hit(s: BlockMemberSymbol) = trackedFunctionSymbolsInOneRecGroup ::= s
    def hit(ss: Ls[BlockMemberSymbol]) = trackedFunctionSymbolsInOneRecGroup :::= ss
  
  object funSymToProdStratScheme:
    val processedFunToCollector = mutable.Map.empty[BlockMemberSymbol, ConstraintsAndCacheHitCollector]
    val store = mutable.Map.empty[BlockMemberSymbol, ProdStratScheme]
    val recursiveGroups = mutable.Map.empty[BlockMemberSymbol, Ls[BlockMemberSymbol]]
    def getOrUpdate(s: BlockMemberSymbol)(using processingDefs: Ls[BlockMemberSymbol], cc: ConstraintsAndCacheHitCollector): ProdVar | ProdStratScheme =
      // println:
      //   s"get $s in $processingDefs by ${cc.forFun}(${cc.trackedFunctionSymbolsInOneRecGroup})"
      preAnalyzer.getTopLevelFunDefnForSym(s) match
        // not a fun whose definition is visible for fusion, just return its prodvar
        case None =>
          preAnalyzer.getProdVarForSym(s)
        case Some(funDefn) => store.get(s) match
          case Some(scheme) => scheme
          case None => processingDefs.filter(_ is s) match
            case sym :: Nil =>
              cc.hit(sym)
              processingDefs.headOption.foreach: h =>
                cc.hit(h)
              preAnalyzer.getProdVarForSym(sym)
            case Nil => 
              processedFunToCollector.get(s) match
              case Some(otherCC) =>
                cc.hit(otherCC.trackedFunctionSymbolsInOneRecGroup)
                processingDefs.headOption.foreach: h =>
                  cc.hit(h)
                preAnalyzer.getProdVarForSym(s)
              case None =>
                // start processing this function, if the cache hit contains the currently processing defs functions
                // then: 1. the referred function belongs to the same recursion group and need to share the constraints 2. return the prodvar
                // else: we found a new recursive group, for each member of the group, update the store with the correct type scheme and return the type scheme
                val newcc = processFunDefn(funDefn, processingDefs)
                if newcc.trackedFunctionSymbolsInOneRecGroup.exists(x => processingDefs.contains(x)) then
                  cc.hit(newcc.trackedFunctionSymbolsInOneRecGroup)
                  cc.constrain(newcc.constraints)
                  processingDefs.headOption.foreach: h =>
                    cc.hit(h)
                  preAnalyzer.getProdVarForSym(s)
                else
                  val recursiveGroupMembers = (s :: newcc.trackedFunctionSymbolsInOneRecGroup).distinct
                  recursiveGroupMembers.foreach: f =>
                    store.updateWith(f):
                      case N => S(ProdStratScheme(preAnalyzer.getProdVarForSym(f).s, newcc.constraints))
                      case S(_) => die // this means the scc is not computed corrrectely
                    recursiveGroups.updateWith(f):
                      case N => S(recursiveGroupMembers)
                      case S(_) => die // this means the scc is not computed corrrectely
                  store(s)
            case _ => die // die if something occurs twice in the processing list
  
  def processTopLevel: Ls[ProdStrat -> ConsStrat] =
    val cc = new ConstraintsAndCacheHitCollector(N)
    cc.constrain(preAnalyzer.noProdStratVar, NoCons)
    cc.constrain(NoProd, preAnalyzer.noProdStratVar.asConsStrat)
    
    val stratOfRealTopLevel = processBlock(preAnalyzer.b)(using Nil, cc)
    cc.constrain(stratOfRealTopLevel, NoCons)
    
    preAnalyzer.topLevelLikeComputations.foreach: 
      case b: Block => processBlock(b)(using Nil, cc)
      case FunDefn(_, sym, params, body) =>
        val bodyStrat = processResult(preAnalyzer.dummyRefsToTopLevelLikeFuns(sym))(using Nil, cc).asInstanceOf[ProdVar]
        cc.constrain(bodyStrat, NoCons)
        cc.constrain(NoProd, bodyStrat.asConsStrat)
    
    preAnalyzer.usedFunSyms
      .diff(preAnalyzer.topLevelDefinedFunSyms)
      .diff(preAnalyzer.nonTopLevelDefinedFunSyms)
      .foreach: usedButNotDefined =>
        cc.constrain(NoProd, preAnalyzer.getProdVarForSym(usedButNotDefined).asConsStrat)
    cc.constraints
  
  def processFunDefn(defn: FunDefn, processingDefs: Ls[BlockMemberSymbol]): ConstraintsAndCacheHitCollector =
    val cc = funSymToProdStratScheme.processedFunToCollector
      .updateWith(defn.sym):
        case Some(_) => lastWords(s"process ${defn.sym} again")
        case None => Some(new ConstraintsAndCacheHitCollector(S(defn.sym)))
      .get
    val thisFunVar = preAnalyzer.getProdVarForSym(defn.sym)
    // assert(defn.params.size === 1)
    val res = freshVar(s"${defn.sym.nme}_res", S(defn.sym))
    val funProdStrat = defn.params.foldRight[ProdStrat](res.asProdStrat): (ps, acc) =>
      assert(ps.restParam.isEmpty) // TODO: the `restParam`
      val psTys = ps.params.map:
        case Param(_, sym, _, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
      ProdFun(psTys, acc)
    val bodyStrat = processBlock(defn.body)(using defn.sym :: processingDefs, cc)
    cc.constrain(bodyStrat, res.asConsStrat)
    cc.constrain(funProdStrat, thisFunVar.asConsStrat)
    cc
  
  def processBlock(b: Block)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat = b match
    case m@Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      cc.constrain(scrutStrat, new Dtor(scrut.uid, cc.forFun.fold(S(Nil))(_ => N)))
      val armsRes =
        if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
          arms.map:
            case (Case.Cls(clsSym, _), body) => processBlock(body) // TODO: no need for this clsSym
        else if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Tup] } then
          arms.map(a => processBlock(a._2))
        else
          arms.map:
            case (_, armBody) => processBlock(armBody)
      val dfltRes = dflt.map(processBlock)
      rest match
        case End(msg) =>
          val matchRes = freshVar("", cc.forFun)
          armsRes.appendedAll(dfltRes).foreach: r =>
            cc.constrain(r, matchRes.asConsStrat)
          matchRes.asProdStrat
        case _ => processBlock(rest)

    case Return(res, implct) => processResult(res)
    case Assign(lhs, rhs, rest) =>
      cc.constrain(processResult(rhs), preAnalyzer.getProdVarForSym(lhs).asConsStrat)
      processBlock(rest)
    case Begin(sub, rest) =>
      processBlock(sub)
      processBlock(rest)
    case Define(defn, rest) =>
      defn match
        case FunDefn(_, sym, params, body) =>
          if processingDefs.nonEmpty then
            val paramSyms = params.head.params.map:
              case Param(_, sym, _, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
            val res = freshVar(s"${sym.nme}_res", cc.forFun)
            val funProdStrat = params.foldRight[ProdStrat](res.asProdStrat): (ps, acc) =>
              assert(ps.restParam.isEmpty) // TODO: the `restParam`
              val psTys = ps.params.map:
                case Param(_, sym, _, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
              ProdFun(psTys, acc)
            val bodyStrat = processBlock(body)
            cc.constrain(bodyStrat, res.asConsStrat)
            cc.constrain(funProdStrat, preAnalyzer.getProdVarForSym(sym).asConsStrat)
          else
            () // skip toplevel fundefs are they are processed when needed
        case ValDefn(_, sym, rhs) =>
          val valStrat = preAnalyzer.getProdVarForSym(sym)
          val stratRhs = processResult(rhs)
          cc.constrain(stratRhs, valStrat.asConsStrat)
          // throw NotDeforestableException("No support for `ValDefn` yet")
        case c: ClsLikeDefn => ()
          // just skip, because we assume to handle lifted program, and
          // things inside this ClsLikeDefn that need to be traversed will be in
          // preAnalyzer.topLevelLikeComputations
          // throw NotDeforestableException("Only support top-level module definitions now")
      processBlock(rest)
    case End(msg) => NoProd
    // make it a type var instead of `NoProd` so that things like `throw match error` in
    // default else branches do not block fusion...
    case Throw(exc) =>
      processResult(exc)
      freshVar("throw", cc.forFun).asProdStrat
    case _ => throw NotDeforestableException(s"not supported: $b")

  def processResult(r: Result)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat =
    val generatedForDef = cc.forFun
    val instantiationId = cc.forFun.fold(S(Nil))(_ => N)
    def handleCallLike(f: Path, args: Ls[Path], c: Result): ProdStrat =
      def lookThroughLazy(args: Ls[Path]) =
        args match
          case (arg@Value.Ref(lamSym: BlockMemberSymbol)) :: Nil =>
            val res = freshVar("lz_res", generatedForDef)
            val lamStrat = funSymToProdStratScheme.getOrUpdate(lamSym) match
              case t: ProdStratScheme =>
                t.instantiate(arg.uid)(using this, cc)
              case s: ProdVar => s // TODO: check
            cc.constrain(lamStrat, ConsFun(Nil, res.asConsStrat))
            res.asProdStrat
          case (arg@Value.Ref(lamSym)) :: Nil =>
            val lamStrat = preAnalyzer.getProdVarForSym(lamSym)
            val res = freshVar("lz_res", generatedForDef)
            cc.constrain(lamStrat, ConsFun(Nil, res.asConsStrat))
            res.asProdStrat
      f match
        case s: Select if s.symbol.exists(preAnalyzer.importedInfo.forceSymbols.contains) =>
          val arg :: Nil = args: @unchecked
          processResult(arg)
        case Value.Ref(l) if preAnalyzer.importedInfo.forceSymbols.contains(l) =>
          val arg :: Nil = args: @unchecked
          processResult(arg)
        case s: Select if s.symbol.exists(preAnalyzer.importedInfo.lazySymbols.contains) =>
          lookThroughLazy(args)
        case Value.Ref(l) if preAnalyzer.importedInfo.lazySymbols.contains(l) =>
          lookThroughLazy(args)
        case s@Select(p, nme) =>
          val argsTpe = args.map(processResult)
          s.symbol.map(_.asCls) match
            case None =>
              val pStrat = processResult(p)
              val tpeVar = freshVar("", generatedForDef)
              cc.constrain(pStrat, new FieldSel(s.uid, instantiationId, nme, tpeVar.asConsStrat))
              val appRes = freshVar("", generatedForDef) // unknown function symbol
              cc.constrain(tpeVar.asProdStrat, ConsFun(argsTpe, appRes.asConsStrat))
              appRes.asProdStrat
            case Some(None) =>
              val funSym = s.symbol.get
              val appRes = freshVar("call_" + funSym.nme + "_res", generatedForDef)
              funSym.asBlkMember match
                case None =>
                  cc.constrain(preAnalyzer.getProdVarForSym(funSym), ConsFun(argsTpe, appRes.asConsStrat))
                case Some(s) =>
                  funSymToProdStratScheme.getOrUpdate(s) match
                    case v: ProdVar => cc.constrain(v, ConsFun(argsTpe, appRes.asConsStrat))
                    case t: ProdStratScheme =>
                      val instantiated = t.instantiate(f.uid)(using this, cc)
                      cc.constrain(instantiated, ConsFun(argsTpe, appRes.asConsStrat))
              appRes.asProdStrat
            case Some(Some(s)) =>
              val clsFields = s.tree.clsParams
              new Ctor(c.uid, instantiationId)(s, clsFields.zip(argsTpe))
        case Value.Ref(funSym) =>
          val argsTpe = args.map(processResult)
          funSym.asCls match
            case Some(s) =>
              val clsFields = s.tree.clsParams
              new Ctor(c.uid, instantiationId)(s, clsFields.zip(argsTpe))
            case _ => // then it is a function
              val appRes = freshVar("call_" + funSym.nme + "_res", generatedForDef)
              funSym.asBlkMember match
                case None =>
                  cc.constrain(preAnalyzer.getProdVarForSym(funSym), ConsFun(argsTpe, appRes.asConsStrat))
                case Some(s) =>
                  funSymToProdStratScheme.getOrUpdate(s) match
                    case v: ProdVar => cc.constrain(v, ConsFun(argsTpe, appRes.asConsStrat))
                    case t: ProdStratScheme =>
                      val instantiated = t.instantiate(f.uid)(using this, cc)
                      cc.constrain(instantiated, ConsFun(argsTpe, appRes.asConsStrat))
              appRes.asProdStrat
        case lam@Value.Lam(params, body) =>
          val argsTpe = args.map(processResult)
          val funTpe = processResult(lam)
          val appRes = freshVar("call_lam_res", generatedForDef)
          cc.constrain(funTpe, ConsFun(argsTpe, appRes.asConsStrat))
          appRes.asProdStrat
        case Value.This(sym) => throw NotDeforestableException("No support for `this` as a callee yet")
        case Value.Lit(lit) => lastWords(s"try to call literal $lit")
        case Value.Arr(_, elems) => lastWords(s"try to call array $elems")
    r match
    case sel@DeforestTupSelect(scrut, idx) =>
      val pStrat = processResult(scrut)
      pStrat match
        case ProdVar(pStratVar) =>
          val inMatchingArm = preAnalyzer.selsToMatchingArmsContainingIt(sel.uid).flatMap:
            case (scrutUid, S(inArm)) =>
              preAnalyzer.matchScrutToMatchBlock(scrutUid).scrut match
                case Value.Ref(l) =>
                  S(preAnalyzer.getProdVarForSym(l) -> inArm)
                case _ => N
            case _ => N
          val tpeVar = freshVar("sel_res", generatedForDef)
          val selStrat = new FieldSel(sel.uid, instantiationId, Tree.Ident(idx.toString()), tpeVar.asConsStrat)
          inMatchingArm.foreach: (p, c) =>
            selStrat.updateFilter(p, c :: Nil)
          cc.constrain(pStrat, selStrat)
          tpeVar.asProdStrat
        case _ => die
    case c@Call(f, args) => handleCallLike(f, args.map {case Arg(N, value) => value}, c)
    case i@Instantiate(false, cls, args) => handleCallLike(cls, args.map {case Arg(N, value) => value}, i)
    case sel@Select(p, nme) => sel.symbol match
      case Some(s) if s.asObj.isDefined =>
          new Ctor(sel.uid, instantiationId)(s.asObj.get, Nil)
      case Some(s) if s.isFunction &&
        preAnalyzer.topLevelDefinedFunSyms.contains(s.asBlkMember.get) =>
        funSymToProdStratScheme.getOrUpdate(s.asBlkMember.get) match
          case v: ProdVar => v
          case t: ProdStratScheme =>
            val instantiated = t.instantiate(sel.uid)(using this, cc)
            instantiated
      // case Some(s) => preAnalyzer.getProdVarForSym(s)
      case _ =>
        p match
          // special case for selecting from a module...
          case Value.Ref(l) if l.asMod.isDefined && sel.symbol.isDefined =>
            preAnalyzer.getProdVarForSym(sel.symbol.get)
          case _ =>
            val pStrat = processResult(p)
            pStrat match
              case ProdVar(pStratVar) =>
                val inMatchingArm = preAnalyzer.selsToMatchingArmsContainingIt(sel.uid).flatMap:
                  case (scrutUid, S(inArm)) =>
                    preAnalyzer.matchScrutToMatchBlock(scrutUid).scrut match
                      case Value.Ref(l) =>
                        S(preAnalyzer.getProdVarForSym(l) -> inArm)
                      case _ => N
                  case _ => N
                val tpeVar = freshVar("sel_res", generatedForDef)
                val selStrat = new FieldSel(sel.uid, instantiationId, nme, tpeVar.asConsStrat)
                inMatchingArm.foreach: (p, c) =>
                  selStrat.updateFilter(p, c :: Nil)
                cc.constrain(pStrat, selStrat)
                tpeVar.asProdStrat
              case _ =>
                val tpeVar = freshVar("sel_res", generatedForDef)
                cc.constrain(pStrat, new FieldSel(sel.uid, instantiationId, nme, tpeVar.asConsStrat))
                tpeVar.asProdStrat
            
    case v@Value.Ref(l) => l.asObj match
      case None =>
        if l.asBlkMember.exists(preAnalyzer.topLevelDefinedFunSyms.contains) then
          funSymToProdStratScheme.getOrUpdate(l.asBlkMember.get) match
            case v: ProdVar => v
            case t: ProdStratScheme =>
              val instantiated = t.instantiate(v.uid)(using this, cc)
              instantiated
        else
          preAnalyzer.getProdVarForSym(l)
      case Some(m) => new Ctor(v.uid, instantiationId)(m, Nil)
    
    case Value.This(sym) => throw NotDeforestableException("No support for `this` yet")
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) => // TODO: the `restParam`
      val paramSyms = params.map:
        case Param(_, sym, _, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
      val bodyStrat = processBlock(body)
      val res = freshVar(s"lam_res", generatedForDef)
      cc.constrain(bodyStrat, res.asConsStrat)
      ProdFun(paramSyms, res.asProdStrat)
    case Value.Arr(false, elems) =>
      val args = elems.zipWithIndex.map:
        case (Arg(N, value), n) =>
          TermSymbol(syntax.ImmutVal, N, Tree.Ident(n.toString())) ->
          processResult(value)
        case _ => throw NotDeforestableException("no support for array with spread")
      new Ctor(r.uid, instantiationId)(preAnalyzer.arrBlkMemSym(elems.length), args)


class DeforestConstrainSolver(val collector: DeforestConstraintsCollector):
  val preAnalyzer = collector.preAnalyzer
  val constraints = collector.constraints
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  object ctorDests:
    val store = mutable.LinkedHashMap.empty[Ctor, Ls[Dtor | FieldSel] -> Bool]
    def update(c: Ctor, d: Dtor | FieldSel | NoCons.type) = d match
      case NoCons => store.updateWith(c):
        case S(l -> _) => S(l, true)
        case N => S(Nil, true)
      case d: (Dtor | FieldSel) => store.updateWith(c):
        case S(l -> b) => S(d :: l, b)
        case N => S(d :: Nil, false)
    def get(c: Ctor) = store.get(c).map(l => l._1.distinct -> l._2)
  object dtorSources:
    val store = mutable.LinkedHashMap.empty[Dtor | FieldSel, Ls[Ctor] -> Bool]
    def update(d: Dtor | FieldSel, c: Ctor | NoProd.type) = c match
      case NoProd => store.updateWith(d):
        case S(l -> _) => S(l, true)
        case N => S(Nil, true)
      case c: Ctor => store.updateWith(d):
        case S(l -> b) => S(c :: l, b)
        case N => S(c :: Nil, false)
  
  private def handle(constraint: ProdStrat -> ConsStrat)(using cache: mutable.Set[ProdStrat -> ConsStrat]): Unit =
    val prod = constraint._1
    val cons = constraint._2
    val proceed = cache.add(constraint)
    assert:
      (!prod.isInstanceOf[Ctor] || prod.asInstanceOf[Ctor].instantiationId.isDefined) &&
      (!cons.isInstanceOf[Dtor] || cons.asInstanceOf[Dtor].instantiationId.isDefined)
    if proceed then constraint match
      case (c: Ctor, d: Dtor) =>
        ctorDests.update(c, d)
        dtorSources.update(d, c)
      case (c: Ctor, d: FieldSel) =>
        ctorDests.update(c, d)
        dtorSources.update(d, c)
        c.args.find(a => a._1.id == d.field) match
          case None =>
            handle(c, NoCons)
            handle(NoProd, d.consVar)
          case Some(p) => handle(p._2 -> d.consVar)
      case (c: Ctor, d: ConsFun) => ()
      case (p: ProdVar, _) =>
        upperBounds += p.uid -> (cons :: upperBounds(p.uid))
        lowerBounds(p.uid).foreach: l =>
          (l, cons) match
            case (l: ProdVar, sel: FieldSel) =>
              sel.updateFilter(l, sel.filter(p))
              handle(l -> cons)
            case (c: Ctor, sel: FieldSel) =>
              if sel.filter.get(p).forall(_.contains(c.ctor)) then
                handle(l -> cons)
            case _ => handle(l -> cons)
      case (_, c: ConsVar) =>
        lowerBounds += c.uid -> (prod :: lowerBounds(c.uid))
        upperBounds(c.uid).foreach: u =>
          (prod, u) match
            case (ctor: Ctor, sel: FieldSel) =>
              if sel.filter.get(c.asProdStrat).forall(_.contains(ctor.ctor)) then
                handle(prod -> u)
            case (_: ProdVar, _) => die
            case _ => handle(prod -> u)
      case (ctor: Ctor, NoCons) =>
        ctorDests.update(ctor, NoCons)
        ctor.args.foreach(a => handle(a._2, NoCons))
      case (ProdFun(l, r), _: Dtor) => () // ignore
      case (ProdFun(l, r), _: FieldSel) => () // ignore
      case (ProdFun(lp, rp), ConsFun(lc, rc)) =>
        lc.zip(lp).foreach(handle)
        handle(rp, rc)
      case (ProdFun(l, r), NoCons) =>
        l.foreach(a => handle(NoProd, a))
        handle(r, NoCons)
      case (NoProd, d: Dtor) => dtorSources.update(d, NoProd)
      case (NoProd, fSel: FieldSel) =>
        dtorSources.update(fSel, NoProd)
        handle(NoProd, fSel.consVar)
      case (NoProd, ConsFun(l, r)) =>
        l.foreach(a => handle(a, NoCons))
        handle(NoProd, r)
      case (NoProd, NoCons) => ()
    
  locally:
    given mutable.Set[ProdStrat -> ConsStrat] = mutable.Set.empty
    constraints.foreach(handle)
  
  
  def removeCtor(rm: (Ctor | CtorId))(using
    ctorToDtor: mutable.LinkedHashMap[Ctor, Ls[Dtor | FieldSel] -> Bool],
    dtorToCtor: mutable.LinkedHashMap[Dtor | FieldSel, Ls[Ctor] -> Bool],
    toRmCtor: mutable.Set[Ctor],
    toRmDtor: mutable.Set[Dtor | FieldSel]
  ): Unit = rm match
    case rm: Ctor =>
      if toRmCtor.add(rm) then
      for
        (dtors, _) <- ctorToDtor.get(rm)
        dtor <- dtors
      do removeDtor(dtor)
    case rm: CtorId =>
      for
        rm <- ctorToDtor.keySet.filter: x =>
          x.exprId === rm._1 && x.instantiationId.fold(false)(_ === rm._2)
      do removeCtor(rm)
  
  
  def removeDtor(rm: Dtor | FieldSel)(using
    ctorToDtor: mutable.LinkedHashMap[Ctor, Ls[Dtor | FieldSel] -> Bool],
    dtorToCtor: mutable.LinkedHashMap[Dtor | FieldSel, Ls[Ctor] -> Bool],
    toRmCtor: mutable.Set[Ctor],
    toRmDtor: mutable.Set[Dtor | FieldSel]
  ) =
    if toRmDtor.add(rm) then
    for (ctors, _) <- dtorToCtor.get(rm)
        x <- ctors do removeCtor(x)
  
  
  val resolveClashes -> cyclicOnes =
    given ctorToDtor: mutable.LinkedHashMap[Ctor, Ls[Dtor | FieldSel] -> Bool] = ctorDests.store
    given dtorToCtor: mutable.LinkedHashMap[Dtor | FieldSel, Ls[Ctor] -> Bool] = dtorSources.store

    given toRmCtor: mutable.Set[Ctor] = mutable.Set.empty[Ctor]
    given toRmDtor: mutable.Set[Dtor | FieldSel] = mutable.Set.empty[Dtor | FieldSel]
    
    
    // remove clashes
    for
      (rm, dtors -> noCons) <- ctorToDtor
      _ = assert(rm.instantiationId.isDefined)
      (mats, sels) = dtors.partitionMap:
        case d: Dtor =>
          assert(d.instantiationId.isDefined)
          L(d)
        case s: FieldSel => R(s)
      if noCons || !locally:
        mats.size == 0 && sels.size == 1 ||
        mats.size == 1 && locally:
          val matScrutExprId = mats.head.scrutExprId
          val matExprInstantiationId = mats.head.instantiationId.get
          val matScrutSym = preAnalyzer.getResult(matScrutExprId).asInstanceOf[Value.Ref].l
          sels.forall: s =>
            val selExprId = s.exprId
            given Elaborator.State = collector.preAnalyzer.elabState
            def chk(l: Symbol) =
              preAnalyzer.selsToMatchingArmsContainingIt(selExprId).exists(_._1 === matScrutExprId) &&
              (l is matScrutSym) &&
              s.instantiationId.get === matExprInstantiationId
            preAnalyzer.getResult(selExprId) match
              case Select(Value.Ref(l), _) => chk(l)
              case DeforestTupSelect(Value.Ref(l), _) => chk(l)
              case _ => false
    do removeCtor(rm)
    for
      case (rm, _ -> true) <- dtorToCtor
    do removeDtor(rm)
    toRmCtor.foreach(rm => ctorToDtor.remove(rm))
    toRmDtor.foreach(rm => dtorToCtor.remove(rm))
    toRmCtor.clear()
    toRmDtor.clear()
    
    // remove cycle
    def getCtorInArm(ctorExprId: CtorId , dtorScrutExprId: MatchId) =
      val ctorSym = preAnalyzer.getCtorSymFromCtorLikeExprId(ctorExprId._1).get
      val dtor = preAnalyzer.getMatchFromMatchScrutExprId(dtorScrutExprId._1).get
      val arm =
        dtor.arms.find:
          case (Case.Cls(c1, _) -> body) => c1 is ctorSym
          case (Case.Tup(len, _) -> _) => preAnalyzer.arrBlkMemSym(len) is ctorSym
        .map(_._2).orElse(dtor.dflt).get
      val armAndMatchRest = preAnalyzer
        .matchScrutToParentMatchScruts(dtorScrutExprId._1)
        .foldLeft(Begin(arm, dtor.rest)): (acc, x) =>
          val newRest = preAnalyzer.getMatchFromMatchScrutExprId(x).get.rest
          Begin(acc, newRest)
      val traverser = new GetCtorsTraverser(armAndMatchRest)
      traverser.ctors.map(_ -> dtorScrutExprId._2)
    def findCycle(c: Ctor, d: Dtor): Ls[CtorId] =
      val cache = mutable.Set(c.exprId -> c.instantiationId.get)
      def go(ctorAndMatchesScrutExprIds: Ls[CtorId -> MatchId]): Ls[CtorId] =
        val newCtorsAndNewMatches = for
          (c, m) <- ctorAndMatchesScrutExprIds
          c <- getCtorInArm(c, m)
          (ds -> noCons) <- ctorToDtor
            .get:
              new Ctor(c._1, S(c._2))(preAnalyzer.arrBlkMemSym(0), Nil)(using preAnalyzer)
            .toSeq
          _ = assert(!noCons)
          case (m: Dtor) <- ds
        yield c -> (m.scrutExprId -> m.instantiationId.get)
        val cycled = newCtorsAndNewMatches.filter: c =>
          !cache.add(c._1)
        if newCtorsAndNewMatches.isEmpty then
          Nil
        else if cycled.nonEmpty then
          cycled.map(_._1)
        else
          go(newCtorsAndNewMatches)
      c.instantiationId -> d.instantiationId match
        case S(id1) -> S(id2) =>
          go(Ls((c.exprId -> id1) -> (d.scrutExprId -> id2)))
        case _ => Nil
    for
      (ctor, dtors -> noCons) <- ctorToDtor
      (mats, sels) = dtors.partitionMap:
        case d: Dtor => L(d)
        case s: FieldSel => R(s)
      _ = assert(!noCons && mats.size <= 1)
      dtor <- mats
      rm <- findCycle(ctor, dtor)
    do removeCtor(rm)
    val cyclic = toRmCtor -> toRmDtor
    
    ctorToDtor -> dtorToCtor -> cyclic



class GetCtorsTraverser(b: Block) extends BlockTraverser:
  var ctors = Set.empty[ResultId]
  override def applyResult(r: Result): Unit = r match
    case Call(f, args) =>
      if f.asClsSymbol.isDefined then ctors += r.uid
      args.foreach:
        case Arg(N, v) => applyResult(v)
    case Instantiate(false, cls, args) =>
      if cls.asClsSymbol.isDefined then ctors += r.uid
      args.foreach(applyArg)
    case Value.Arr(false, elems) =>
      ctors += r.uid
      elems.foreach:
        case Arg(N, v) => applyResult(v)
    case p: Path => if p.asObjSymbol.isDefined then ctors += r.uid
  applyBlock(b)

extension (fun: FunDefn)
  def deforestDefinedVars: Set[Local] =
    fun.body.deforestDefinedVars ++ fun.params.flatMap(_.params.map(_.sym)) + fun.sym
    
extension (b: Block)
  def deforestDefinedVars: Set[Local] = b match
    case _: Return | _: Throw => Set.empty
    case Begin(sub, rst) => sub.deforestDefinedVars ++ rst.deforestDefinedVars
    case Assign(l: TermSymbol, r, rst) => rst.deforestDefinedVars
    case Assign(l, r, rst) => rst.deforestDefinedVars + l
    case AssignField(l, n, r, rst) => rst.deforestDefinedVars
    case AssignDynField(l, n, ai, r, rst) => rst.deforestDefinedVars
    case Match(scrut, arms, dflt, rst) =>
      arms.flatMap(_._2.deforestDefinedVars).toSet ++ dflt.toList.flatMap(_.deforestDefinedVars) ++ rst.deforestDefinedVars
    case End(_) => Set.empty
    case Break(_) => Set.empty
    case Continue(_) => Set.empty
    case Define(defn, rst) =>
      val rest = rst.deforestDefinedVars
      if defn.isOwned then rest else
        defn match
          case fdef: FunDefn => rest ++ fdef.deforestDefinedVars
          case _: ValDefn => rest + defn.sym
          case _ => ???
    // Note that the handler's LHS and body are not part of the current block, so we do not consider them here.
    case HandleBlock(lhs, res, par, args, cls, hdr, bod, rst) => rst.deforestDefinedVars + res
    case TryBlock(sub, fin, rst) => sub.deforestDefinedVars ++ fin.deforestDefinedVars ++ rst.deforestDefinedVars
    case Label(lbl, bod, rst) => bod.deforestDefinedVars ++ rst.deforestDefinedVars


extension (p: Path)
  def asClsSymbol = p match
    case s: Select => s.symbol.flatMap(_.asCls)
    case Value.Ref(l) => l.asCls
    case _ => N
  def asObjSymbol = p match
    case s: Select => s.symbol.flatMap(_.asObj)
    case Value.Ref(l) => l.asObj
    case _ => N

extension (r: Result)
  def getCtorSymFromCtorLikeExpr(using pre: DeforestPreAnalyzer) = r match
    case Call(f, _) => f.asClsSymbol
    case Instantiate(_, cls, _) => cls.asClsSymbol
    case Value.Arr(_, elems) => S(pre.arrBlkMemSym(elems.length))
    case p: Path => p.asObjSymbol

object DeforestTupSelect:
  def unapply(v: Result)(using elabState: Elaborator.State): Opt[Value.Ref -> Int] = v match
    case Call(
      Select(Select(Value.Ref(elabState.runtimeSymbol), Tree.Ident("Tuple")), Tree.Ident("get")),
      Arg(N, scrut: Value.Ref) :: Arg(N, Value.Lit(Tree.IntLit(x))) :: Nil) => S(scrut -> x.toInt)
    case _ => N
  
  def getDeforestSelNameFromResult(r: Result)(using elabState: Elaborator.State): Tree.Ident = r match
    case Select(_, name) => name
    case _ => unapply(r) match
      case N => die
      case Some(_, idx) => Tree.Ident(idx.toString())
    