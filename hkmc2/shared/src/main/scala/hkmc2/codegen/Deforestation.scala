package hkmc2
package codegen

import semantics.*
import semantics.Elaborator.State
import syntax.{Literal, Tree}
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import scala.collection.mutable.LinkedHashMap
import Result.ResultId

type StratVar
type StratVarId = Uid[StratVar]
type ClsOrModSymbol = ClassLikeSymbol

sealed abstract class Strat

sealed abstract class ProdStrat extends Strat

sealed abstract class ConsStrat extends Strat

class StratVarState(val uid: StratVarId, val name: Str = ""):
  lazy val asProdStrat = ProdVar(this)
  lazy val asConsStrat = ConsVar(this)
  
  override def toString(): String = s"${if name.isEmpty() then "var" else name}@${uid}"

object StratVarUidHandler extends Uid.Handler[StratVar]
object StratVarState:
  def freshVar(nme: String = "")(using vuid: StratVarUidHandler.State) =
    val newId = vuid.nextUid
    val s = StratVarState(newId, nme)
    val p = s.asProdStrat
    val c = s.asConsStrat
    p -> c


extension (i: ResultId)
  def getResult(using d: Deforest) = d.resultIdToResult(i)
  def handleCtorIds[A](k: (ResultId, Select | Value.Ref, ClsOrModSymbol, Ls[Arg]) => A)(using Deforest) =
    i.getResult match
      case Call(fun, args) => fun match
        case s: Select if s.symbol.flatMap(_.asCls).isDefined =>
          Some(k(i, s, s.symbol.get.asCls.get, args))
        case v: Value.Ref if v.l.asCls.isDefined =>
          Some(k(i, v, v.l.asCls.get, args))
        case _ => None
      case s: Select if s.symbol.flatMap(_.asObj).isDefined =>
        Some(k(i, s, s.symbol.get.asObj.get, Nil))
      case v: Value.Ref if v.l.asObj.isDefined =>
        Some(k(i, v, v.l.asObj.get, Nil))
      case _ => None
  def getClsSymOfUid(using Deforest) = i.handleCtorIds((_, _, s, _) => s).get

case class Ctor(ctor: ClsOrModSymbol, args: Map[TermSymbol, ProdStrat], expr: ResultId) extends ProdStrat
case class ProdFun(l: Ls[ConsStrat], r: ProdStrat) extends ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat with StratVarTrait(s)
case object NoProd extends ProdStrat



class Dtor(val expr: Match, val outterMatch: Option[ResultId])(using d: Deforest) extends ConsStrat:
  d.matchScrutToMatchBlock.updateWith(expr.scrut.uid):
    case None => Some(expr)
    case Some(_) => lastWords(s"should only update once (uid: ${expr.scrut.uid})")
  d.matchScrutToParentMatchScrut.updateWith(expr.scrut.uid):
    case None => Some(outterMatch)
    case Some(_) => lastWords(s"should only update once (uid: ${expr.scrut.uid})")
object Dtor:
  def unapply(d: Dtor)(using Deforest): Opt[ResultId] = S(d.expr.scrut.uid)
    

case class FieldSel(field: Tree.Ident, consVar: ConsVar)(val expr: ResultId, val inMatching: LinkedHashMap[ResultId, ClsOrModSymbol]) extends ConsStrat with FieldSelTrait
case class ConsFun(l: Ls[ProdStrat], r: ConsStrat) extends ConsStrat
case class ConsVar(s: StratVarState) extends ConsStrat with StratVarTrait(s)
case object NoCons extends ConsStrat


enum DtorExpr:
  case Match(s: ResultId)
  case Sel(s: ResultId)

enum CtorFinalDest:
  case Match(scrut: ResultId, expr: codegen.Match, selInArms: Set[ResultId], selMaps: Map[Tree.Ident, Symbol] -> Map[ResultId, Symbol])
  case Sel(s: ResultId)

trait FieldSelTrait:
  this: FieldSel =>
  val filter = mutable.Map.empty[ProdVar, Ls[ClsOrModSymbol]].withDefaultValue(Nil)
  
  def updateFilter(p: ProdVar, c: Ls[ClsOrModSymbol]) =
    filter += p -> (c ::: filter(p))

trait StratVarTrait(stratState: StratVarState):
  this: ProdVar | ConsVar =>
  
  lazy val asProdStrat = stratState.asProdStrat
  lazy val asConsStrat = stratState.asConsStrat
  lazy val uid = stratState.uid

final case class NotDeforestableException(msg: String) extends Exception(msg)

// Compute free vars for a block, without considering deforestation, used on transformed blocks
// This means that for matches we don't need to consider the extra
// free vars that may be introduced by deforestation:
// 1. the free vars from the `rest` of the their parent matches
// 2. the free vars caused by the substitution of selections of scrutinees of their parent matches
class FreeVarTraverser(alwaysDefined: Set[Symbol]) extends BlockTraverser:
  val ctx = mutable.Set.from(alwaysDefined)
  val result = mutable.Set.empty[Symbol]
  
  override def applyBlock(b: Block): Unit = b match
    case Match(scrut, arms, dflt, rest) =>
      applyPath(scrut)
      (arms.map(_._2) ++ dflt).foreach: a =>
        // dflt may just be `throw error``, and `rest` may use vars assigned in non default arms.
        // So use `flattened` to remove dead code (after `throw error`) and spurious free vars.
        val realArm = Begin(a, rest)
        applyBlock(realArm)

    case Assign(lhs, rhs, rest) =>
      applyResult(rhs)
      ctx += lhs
      applyBlock(rest)
      ctx -= lhs
    case Begin(sub, rest) => applyBlock(b.flattened)
    case Define(defn, rest) => defn match
      case FunDefn(owner, sym, params, body) =>
        val paramSymbols = params.flatMap:
          case ParamList(flags, params, restParam) => (params ++ restParam).map:
            case Param(flags, sym, sign) => sym
        ctx += sym
        ctx ++= paramSymbols
        applyBlock(body)
        ctx --= paramSymbols
        applyBlock(rest)
        ctx -= sym
      case ValDefn(owner, k, sym, rhs) =>
        ctx += sym
        applyPath(rhs)
        applyBlock(rest)
        ctx -= sym
      case c: ClsLikeDefn => ??? // not supported
    
    case _ => super.applyBlock(b)
      
  override def applyValue(v: Value): Unit = v match
    case Value.Ref(l) => l match
      // builtin symbols and toplevel symbols are always in scope
      case _: (BuiltinSymbol | TopLevelSymbol) => ()
      // NOTE: assume all class definitions are in the toplevel
      case b: BlockMemberSymbol if b.asClsLike.isDefined => ()
      case _ => if !ctx.contains(l) then result += l
    case _ => super.applyValue(v)
  
  override def applyLam(l: Value.Lam): Unit =
    val paramSymbols = l.params.params.map(p => p.sym)
    ctx ++= paramSymbols
    applyBlock(l.body)
    ctx --= paramSymbols
  
  def analyze(b: Block) =
    applyBlock(b)
    result.toList.sortBy(_.uid)

// Compute free vars for a Match block, considering deforestations. Used on non-transformed blocks
// Make use of `freeVarsOfNonTransformedMatches`, which computes the free vars _after transformation_
// from non-transformed matches (either fusing or un-fusing matches).
// Sources of additional free vars for fusing matches:
//   - the free vars from the `rest` of the their parent matches
//   - the free vars caused by the substitution of selections of scrutinees of their parent matches
// Otherwise, additional free vars come from fusing matches that are contained in the block,
// and this is handled by freeVarsOfNonTransformedMatches
class DeforestationFreeVarTraverserForMatch(
  alwaysDefined: Set[Symbol],
  selsToBeReplaced: Map[ResultId, Symbol],
  selsReplacementByCurrentMatch: Map[ResultId, Symbol],
  currentMatchScrut: Symbol,
  dt: DeforestTransformer
) extends FreeVarTraverser(alwaysDefined):
  given Deforest = dt.d
  override def applyBlock(b: Block): Unit = b match
    // a nested match
    case m@Match(scrut, arms, dflt, rest) =>
      result ++= dt.freeVarsOfNonTransformedMatches(scrut.uid, m)
      
      // sub-matches' scruts (which are not included in freeVarsOfNonTransformedMatches)
      // are also free vars
      val Value.Ref(l) = scrut
      if !ctx(l) then result += l
      
      // free vars in nested-matches reported by freeVarsOfNonTransformedMatches may also contain
      // spurious ones: those that are going to be substitued by the current match,
      // and those that are in the ctx
      result --= selsReplacementByCurrentMatch.values
      result --= ctx
    case _ => super.applyBlock(b)
  
  override def applyPath(p: Path): Unit = p match
    case p @ Select(qual, name) => selsToBeReplaced.get(p.uid) match
      case None => qual match
        // if it is the scrut of current match and the computation containing
        // this selection is moved, then the selection will be replaced and there will be no free vars
        case Value.Ref(l) if l == currentMatchScrut => ()
        case _ => super.applyPath(p)
      case Some(s) => result += s
    case _ => super.applyPath(p)
  
  override def analyze(m: Block): List[Symbol] =
    require(m.isInstanceOf[Match])
    val matchExpr@Match(scrut@Value.Ref(l), arms, dflt, rest) = m
    val parentMatchRest = dt.allParentMatches(scrut.uid).foldRight[Block](End("")): (p, acc) =>
      Begin(dt.d.matchScrutToMatchBlock(p).rest, acc)
    (arms.map(_._2) ++ dflt).foreach: a =>
      // dflt may just be `throw error``, and `rest` may use vars assigned in non default arms.
      // So use `flattened` to remove dead code (after `throw error`) and spurious free vars.
      // Also take care of the `rest`s of its parent match blocks.
      val realArm = Begin(a, Begin(rest, parentMatchRest)).flattened
      applyBlock(realArm)
    
    result.toList.sortBy(_.uid)
    

class WillBeNonEndTailBlockTraverser(using d: Deforest) extends BlockTraverserShallow:
  var flag = false
  override def applyBlock(b: Block): Unit = b match
    case Match(scrut, arms, dflt, rest) =>
      flag =
        d.filteredDtors(scrut.uid) ||
        (arms.forall { case (_, b) => b.willBeNonEndTailBlock } && dflt.fold(true)(_.willBeNonEndTailBlock)) ||
        rest.willBeNonEndTailBlock
    case _: End => ()
    case _: BlockTail => flag = true
    case _ => super.applyBlock(b)
  def analyze(b: Block): Bool =
    applyBlock(b)
    flag

class ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) extends BlockTransformer(new SymbolSubst()):
  override def applyValue(v: Value): Value = v match
    case Value.Ref(l) => Value.Ref(freeVarsAndTheirNewSyms.getOrElse(l, l))
    case _ => super.applyValue(v)

object HasExplicitRetTraverser extends BlockTraverserShallow:
  var flag = false
  override def applyBlock(b: Block): Unit = b match
    case Return(_, imp) => flag = !imp
    case _ => super.applyBlock(b)
  
  def analyze(b: Block) =
    flag = false
    applyBlock(b)
    flag
  
extension (b: Block)
  def replaceSymbols(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) =
    ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms).applyBlock(b)

  def sortedFvsForTransformedBlocks(alwaysDefined: Set[Symbol]) =
    FreeVarTraverser(alwaysDefined).analyze(b)
  
  def hasExplicitRet: Boolean =
    HasExplicitRetTraverser.analyze(b)
  
  def willBeNonEndTailBlock(using d: Deforest): Bool =
    WillBeNonEndTailBlockTraverser().analyze(b)
    
class Deforest(using TL, Raise, Elaborator.State):
  
  given StratVarUidHandler.State = StratVarUidHandler.State()
  given Deforest = this
  import StratVarState.freshVar
  
  
  val resultIdToResult = mutable.Map.empty[ResultId, Result]
  
  def apply(p: Program): Opt[Program] -> String -> Int =
    val mainBlk = p.main
    
    globallyDefinedVars.init(mainBlk)
    
    // allocate type vars for defined symbols in the blocks
    symToStrat.init(mainBlk)
  
    try
      processBlock(mainBlk)
    catch
      case NotDeforestableException(msg) =>
        // return None if deforestation is not applicable
        return N -> "" -> 0
    
    resolveConstraints
    
    tl.log("-----------------------------------------")
    ctorDests.ctorDests.foreach:
      case (ctorExprId, CtorDest(matches, sels, noCons)) => tl.log:
        val ctorName = ctorExprId.getClsSymOfUid.nme + s"(id:$ctorExprId)"
        val matchExprScruts = "if " + matches.map{(s, m) =>
          m.scrut.asInstanceOf[Value.Ref].l.nme + s"(id:$s)"
        }.toList.sorted.mkString(" | ") + " then ... "
        val selExpr = sels.map{
          case sel@FieldSel(s, v) => s".${s.name}(id:${sel.expr})"
        }.toList.sorted.mkString(" | ")
        s"$ctorName\n\t --- match ---> $matchExprScruts\n\t --- sels ---> $selExpr\n\tNoCons: $noCons"
    tl.log("-----------------------------------------")
    dtorSources.dtorSources.foreach:
      case (d, DtorSource(ctors, noProd)) =>
        tl.log(s"$d <--- ${ctors.map(c => c.getClsSymOfUid.nme + s"(id:$c)").toList.mkString(" | ")} <--- (NoProd: $noProd)")
    tl.log("-----------------------------------------")
    filteredCtorDests.foreach:
      case (ctorUid, CtorFinalDest.Sel(s)) => tl.log(s"${ctorUid.getClsSymOfUid.nme}(id:$ctorUid) --sel--> " + s)
      case (ctorUid, CtorFinalDest.Match(scrut, _, _, _)) => tl.log(s"${ctorUid.getClsSymOfUid.nme}(id:$ctorUid) --mat--> " + scrut )
    
    val fusionStat = filteredCtorDests.map:
      case (ctorUid, CtorFinalDest.Sel(s)) =>
        "\t" + ctorUid.getClsSymOfUid.nme + " --sel--> " + s"`.${resultIdToResult(s).asInstanceOf[Select].name}`"
      case (ctorUid, CtorFinalDest.Match(scrut, expr, _, _)) =>
        "\t" + ctorUid.getClsSymOfUid.nme + " --match--> " + s"`if ${expr.scrut.asInstanceOf[Value.Ref].l.nme} is ...`"
    
    if filteredCtorDests.nonEmpty then
      S(Program(p.imports, rewrite(mainBlk))) -> s"${filteredCtorDests.size} fusion opportunities:\n${fusionStat.toList.sorted.mkString("\n")}" -> filteredCtorDests.size
    else
      S(p) -> s"0 fusion opportunity" -> 0
  
  // these are never considered as free vars (because of their symbol type)
  // consider TopLevelSym, BlockMemberSymbols and BuiltInSyms as globally defined...
  object globallyDefinedVars:
    val store = mutable.Set.from[Symbol](State.globalThisSymbol ::State.runtimeSymbol :: Nil)
    
    def apply(s: Symbol) = store.contains(s)
    
    def init(b: Block) = store ++= b.definedVars
  
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  
  val matchScrutToMatchBlock = mutable.Map.empty[ResultId, Match]
  val matchScrutToParentMatchScrut = mutable.Map.empty[ResultId, Option[ResultId]]
  object symToStrat:
    val store = mutable.Map.empty[Symbol, ProdVar]
    val funSymsWithDefn = mutable.Set.empty[BlockMemberSymbol]
    val usedFunSym = mutable.Set.empty[BlockMemberSymbol]
    
    def init(p: Block) =
      if store.isEmpty then
        object FreshVarForAllVars extends BlockTraverser:
          override def applySymbol(s: Symbol): Unit = s match
            case b: BlockMemberSymbol =>
              store += s -> freshVar(s.nme)._1
              b.trmImplTree.foreach: t =>
                if t.k is syntax.Fun then usedFunSym += b
            case _: TempSymbol => store += s -> freshVar(s.nme)._1
            case _: VarSymbol => store += s -> freshVar(s.nme)._1
            case _: TermSymbol => store += s -> freshVar(s.nme)._1
            case _ => ()
          
          override def applyFunDefn(fun: FunDefn): Unit =
            funSymsWithDefn += fun.sym
            super.applyFunDefn(fun)
            
        FreshVarForAllVars.applyBlock(p)
      // `NoProd` to block fusion for those functions that are imported from elsewhere
      usedFunSym.diff(funSymsWithDefn).foreach: funSymsWithoutDefn =>
        constrain(NoProd, store(funSymsWithoutDefn).asConsStrat)
      
    
    def getStratOfSym(s: Symbol) =
      s match
        case _: BuiltinSymbol => NoProd
        case _: TopLevelSymbol => NoProd
        // TODO: cannot fuse intermediate values created by
        // calling data constructors passed around like functions,
        // like `fun app(ctor) = ctor(1); if app(AA) is AA(x) then x`;
        // immediate data constructor calls are handled directly,
        // so if this method is called on a ClsLike symbol,
        // it means that this constructor is passed around like a function,
        // which we can't fuse for now
        case _ if s.asCls.isDefined => NoProd
        case _: BlockMemberSymbol => store(s)
        case _: LocalSymbol => store(s)
    def +=(e: Symbol -> ProdVar) = store += e
    def addAll(es: Iterable[Symbol -> ProdVar]) = store.addAll(es)
    def apply(s: Symbol) = store(s)
  
  def getClsFields(s: ClassSymbol) = s.tree.clsParams

  
  
  def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
  
  def processBlock(b: Block)(using
    inArm: LinkedHashMap[ProdVar, ClsOrModSymbol] = LinkedHashMap.empty[ProdVar, ClsOrModSymbol],
    matching: LinkedHashMap[ResultId, ClsOrModSymbol] = LinkedHashMap.empty[ResultId, ClsOrModSymbol]
  ): ProdStrat = b match
    case m@Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      constrain(scrutStrat, Dtor(m, matching.lastOption.map(_._1)))
      val armsRes = if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        arms.map:
          case (Case.Cls(s, _), body) => 
            processBlock(body)(
              using inArm + (scrutStrat.asInstanceOf[ProdVar] -> s),
              matching + (scrut.uid -> s)
            )
      else
        arms.map:
          case (_, armBody) => processBlock(armBody)
      val dfltRes = dflt.map(processBlock)
      rest match
        case End(msg) =>
          val matchRes = freshVar()
          armsRes.appendedAll(dfltRes).foreach: r =>
            constrain(r, matchRes._2)
          matchRes._1
        case _ => processBlock(rest)

    case Return(res, implct) => processResult(res)
    case Assign(lhs, rhs, rest) =>
      constrain(processResult(rhs), symToStrat(lhs).asConsStrat)
      processBlock(rest)
    case Begin(sub, rest) =>
      processBlock(sub)
      processBlock(rest)
    case Define(defn, rest) =>
      defn match
        case FunDefn(_, sym, params, body) =>
          val funSymStratVar = symToStrat(sym)
          val param = params.head match
            case ParamList(flags, params, N) => params // TODO: handle mutiple param list
          val funStrat = constrFun(param, body)
          constrain(funStrat, funSymStratVar.asConsStrat)
          funSymStratVar
        case v: ValDefn => throw NotDeforestableException("No support for `ValDefn` yet")
        case c: ClsLikeDefn => throw NotDeforestableException("No support for `ClsLikeDefn` yet")
      processBlock(rest)
    case End(msg) => NoProd
    // make it a type var instead of `NoProd` so that things like `throw match error` in
    // default else branches do not block fusion...
    case Throw(exc) => freshVar("throw")._1
  
  def constrFun(params: Ls[Param], body: Block)(using
    inArm: LinkedHashMap[ProdVar, ClsOrModSymbol],
    matching: LinkedHashMap[ResultId, ClsOrModSymbol]
  ) =
    val paramSyms = params.map:
      case Param(_, sym, _) => sym
    val paramStrats = paramSyms.map(symToStrat.apply)
    symToStrat.addAll(paramSyms.zip(paramStrats))
    val res = freshVar()
    constrain(processBlock(body), res._2)
    ProdFun(paramStrats.map(s => s.asConsStrat), res._1)
  
  def processResult(r: Result)(using
    inArm: LinkedHashMap[ProdVar, ClsOrModSymbol],
    matching: LinkedHashMap[ResultId, ClsOrModSymbol]
  ): ProdStrat = r match
    case c@Call(f, args) =>
      val argsTpe = args.map:
        case Arg(false, value) => processResult(value)
      f match
        case s@Select(p, nme) =>
          s.symbol.map(_.asCls) match
            case None =>
              val pStrat = processResult(p)
              val tpeVar = freshVar()
              constrain(pStrat, FieldSel(nme, tpeVar._2)(s.uid, matching))
              val appRes = freshVar()
              constrain(tpeVar._1, ConsFun(argsTpe, appRes._2))
              appRes._1
            case Some(None) =>
              val funSym = s.symbol.get
              val appRes = freshVar("call_" + funSym.nme + "_res")
              constrain(symToStrat.getStratOfSym(funSym), ConsFun(argsTpe, appRes._2))
              appRes._1
            case Some(Some(s)) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap, c.uid)
        case Value.Ref(l) =>
          l.asCls match
            case Some(s) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap, c.uid)
            case _ => // then it is a function
              val appRes = freshVar("call_" + l.nme + "_res")
              constrain(symToStrat.getStratOfSym(l), ConsFun(argsTpe, appRes._2))
              appRes._1
        case lam@Value.Lam(params, body) =>
          val funTpe = processResult(lam)
          val appRes = freshVar()
          constrain(funTpe, ConsFun(argsTpe, appRes._2))
          appRes._1
        
        case Value.This(sym) => throw NotDeforestableException("No support for `this` as a callee yet")
        case Value.Lit(lit) => ???
        case Value.Arr(elems) => ???

    case Instantiate(cls, args) => throw NotDeforestableException("No support for `instantiate` yet")

    case sel@Select(p, nme) => sel.symbol match
      case Some(s) if s.asObj.isDefined =>
        Ctor(s.asObj.get, Map.empty, sel.uid)
      case _ => 
        val pStrat = processResult(p)
        pStrat match
          case ProdVar(pStratVar) if inArm.contains(pStratVar.asProdStrat) =>
            val tpeVar = freshVar()
            val selStrat = FieldSel(nme, tpeVar._2)(sel.uid, matching)
            selStrat.updateFilter(pStratVar.asProdStrat, inArm(pStratVar.asProdStrat) :: Nil)
            constrain(pStrat, selStrat)
            tpeVar._1
          case _ =>
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2)(sel.uid, matching))
            tpeVar._1
            
    case v@Value.Ref(l) => l.asObj match
      case None => symToStrat.getStratOfSym(l)
      case Some(m) => Ctor(m, Map.empty, v.uid)
    
    case Value.This(sym) => throw NotDeforestableException("No support for `this` yet")
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      constrFun(params, body)
    case Value.Arr(elems) => throw NotDeforestableException("No support for arrays yet")
  
  
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  
  case class CtorDest(matches: Map[ResultId, Match], sels: Set[FieldSel], noCons: Bool)
  case class DtorSource(ctors: Set[ResultId], noProd: Bool)
  object ctorDests:
    val ctorDests = mutable.Map.empty[ResultId, CtorDest].withDefaultValue(CtorDest(Map.empty, Set.empty, false))
    def update(ctor: ResultId, m: Match) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels, noCons)) => Some(CtorDest(matches + (m.scrut.uid -> m), sels, noCons))
      case None => Some(CtorDest(Map(m.scrut.uid -> m), Set.empty, false))
    def update(ctor: ResultId, s: FieldSel) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels, noCons)) => Some(CtorDest(matches, sels + s, noCons))
      case None => Some(CtorDest(Map.empty, Set(s), false))
    def update(ctor: ResultId, n: NoCons.type) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels, noCons)) => Some(CtorDest(matches, sels, true))
      case None => Some(CtorDest(Map.empty, Set.empty, true))
    def get(ctor: ResultId) = ctorDests.get(ctor)
  
  object dtorSources:
    val dtorSources = mutable.Map.empty[DtorExpr, DtorSource].withDefaultValue(DtorSource(Set.empty, false))
    private def getDtorExprOfResultId(i: ResultId) = i.getResult match
      case s: Select => DtorExpr.Sel(i)
      case r: Value.Ref => DtorExpr.Match(i)
      case _ => ??? // unreachable
    def update(dtor: ResultId, ctor: ResultId) =
      val dtorExpr = getDtorExprOfResultId(dtor)
      dtorSources.updateWith(dtorExpr):
        case None => Some(DtorSource(Set(ctor), false))
        case Some(DtorSource(ctors, noProd)) => Some(DtorSource(ctors + ctor, noProd))
    def update(dtor: ResultId, noProd: NoProd.type) =
      val dtorExpr = getDtorExprOfResultId(dtor)
      dtorSources.updateWith(dtorExpr):
        case None => Some(DtorSource(Set.empty, true))
        case Some(DtorSource(ctors, noProd)) => Some(DtorSource(ctors, true))
    def get(dtor: ResultId) = dtorSources.get(getDtorExprOfResultId(dtor))
      
  
  
  def resolveConstraints: Unit =
    
    def handle(c: ProdStrat -> ConsStrat)(using cache: mutable.Set[ProdStrat -> ConsStrat]): Unit =
      val prod = c._1
      val cons = c._2
      
      if cache(c) then return ()
      
      cache += c
      
      (prod, cons) match
        case (Ctor(ctor, args, expr), dtorStrat@Dtor(scrut)) =>
          ctorDests.update(expr, dtorStrat.expr)
          dtorSources.update(scrut, expr)
        case (Ctor(ctor, args, expr), selDtor@FieldSel(field, consVar)) =>
          ctorDests.update(expr, selDtor)
          dtorSources.update(selDtor.expr, expr)
          args.find(a => a._1.id == field).map: p =>
            handle(p._2 -> consVar)
        case (Ctor(ctor, args, _), ConsFun(l, r)) => () // ignore
        
        case (p: ProdVar, _) =>
          upperBounds += p.uid -> (cons :: upperBounds(p.uid))
          lowerBounds(p.uid).foreach: l =>
            (l, cons) match
              case (l: ProdVar, sel@FieldSel(field, consVar)) =>
                sel.updateFilter(l, sel.filter(p))
                handle(l -> cons)
              case (Ctor(ctor, args, _), sel@FieldSel(field, consVar)) =>
                if sel.filter.get(p).forall(_.contains(ctor)) then
                  handle(l -> cons)
                else
                  ()
              case _ => handle(l -> cons)
        case (_, c: ConsVar) =>
          lowerBounds += c.uid -> (prod :: lowerBounds(c.uid))
          upperBounds(c.uid).foreach: u =>
            (prod, u) match
              case (Ctor(ctor, args, _), sel@FieldSel(field, consVar)) =>
                if sel.filter.get(c.asProdStrat).forall(_.contains(ctor)) then
                  handle(prod -> u)
                else
                  ()
              case (_: ProdVar, _) => ??? // unreachable, should be handled above
              case _ => handle(prod -> u)
        case (Ctor(ctor, args, expr), NoCons) =>
          ctorDests.update(expr, NoCons)
          args.valuesIterator.foreach(a => handle(a, NoCons))
        case (ProdFun(l, r), Dtor(cls)) => () // ignore
        case (ProdFun(l, r), FieldSel(field, consVar)) => () // ignore
        case (ProdFun(lp, rp), ConsFun(lc, rc)) =>
          lc.zip(lp).foreach(handle)
          handle(rp, rc)
        case (ProdFun(l, r), NoCons) =>
          l.foreach(a => handle(NoProd, a))
          handle(r, NoCons)
        case (NoProd, Dtor(scrut)) => dtorSources.update(scrut, NoProd)
        case (NoProd, fSel@FieldSel(field, consVar)) => dtorSources.update(fSel.expr, NoProd)
        case (NoProd, ConsFun(l, r)) =>
          l.foreach(a => handle(a, NoCons))
          handle(NoProd, r)
        case (NoProd, NoCons) => ()
      
    constraints.foreach(c => handle(c)(using mutable.Set.empty))
  
  
  // ======== after resolving constraints ======
    
  lazy val resolveClashes =
    type CtorToDtor = Map[ResultId, CtorDest]
    type DtorToCtor = Map[DtorExpr, DtorSource]
    
    def removeCtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[ResultId]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        tl.log("rm ctor: " + rm.map(c => c.getClsSymOfUid.nme).mkString(" | "))
        val (newCtorDests, toDelete) = ctorDests.partition(c => !rm(c._1))
        removeDtor(newCtorDests, dtorSources, toDelete.values.flatMap[DtorExpr]{ case CtorDest(mat, sels, _) =>
          mat.keySet.map(s => DtorExpr.Match(s)) ++ sels.map(s => DtorExpr.Sel(s.expr))
        }.toSet)
    
    def removeDtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[DtorExpr]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        tl.log("rm dtor: " + rm.mkString(" | "))
        val (newDtorSources, toDelete) = dtorSources.partition(d => !rm(d._1))
        removeCtor(ctorDests, newDtorSources, toDelete.values.map(_.ctors).flatten.toSet)
    
    val ctorToDtor = ctorDests.ctorDests.toMap
    val dtorToCtor = dtorSources.dtorSources.toMap
    
    val removeClashes =
      val tmpRes = removeCtor(
        ctorToDtor,
        dtorToCtor,
        ctorToDtor.filterNot { case _ -> CtorDest(dtors, sels, noCons) =>
          ((dtors.size == 0 && sels.size == 1)
          || (dtors.size == 1 && {
            val scrutRef@Value.Ref(scrut) = dtors.head._1.getResult
            sels.forall { s => s.expr.getResult match
              case Select(Value.Ref(l), nme) => (l === scrut) && s.inMatching.contains(scrutRef.uid) // need to be in the matching arms, and checking the scrutinee
              case _ => false }
          }))
          && !noCons
        }.keySet
      )
      removeDtor(tmpRes._1, tmpRes._2, tmpRes._2.filter(_._2.noProd).keySet)
    
    
    val removeCycle = {
      def getCtorInArm(ctor: ResultId, dtor: Match): Set[ResultId] =
        val ctorSym = getClsSymOfUid(ctor)
        val arm = dtor.arms.find{ case (Case.Cls(c1, _) -> body) => c1 === ctorSym }.map(_._2).orElse(dtor.dflt).get
        
        object GetCtorsTraverser extends BlockTraverser:
          val ctors = mutable.Set.empty[ResultId]
          override def applyResult(r: Result): Unit =
            r.uid.handleCtorIds{ (id, f, clsOrMod, args) =>
              ctors += id
              args.foreach { case Arg(_, value) => applyResult(value) }
            } match
              case Some(_) => ()
              case None => r match
                case Call(_, args) =>
                  args.foreach { case Arg(_, value) => applyResult(value) }
                case Instantiate(cls, args) =>
                  args.foreach(applyResult)
                case _ => ()
  
        GetCtorsTraverser.applyBlock(arm)
        GetCtorsTraverser.ctors.toSet
      
      def findCycle(ctor: ResultId, dtor: Match): Set[ResultId] =
        val cache = mutable.Set(ctor)
        def go(ctorAndMatches: Set[ResultId -> Match]): Set[ResultId] =
          val newCtorsAndNewMatches =
            ctorAndMatches.flatMap((c, m) => getCtorInArm(c, m)).flatMap: c =>
              removeClashes._1.get(c).flatMap:
                case CtorDest(matches, sels, false) => matches.values.headOption.map(m => c -> m)
          val cycled = newCtorsAndNewMatches.filter(c => !cache.add(c._1))
          if newCtorsAndNewMatches.isEmpty then
            Set.empty
          else if cycled.nonEmpty then
            cycled.map(_._1)
          else
            go(newCtorsAndNewMatches)
        go(Set(ctor -> dtor))
      
      val toRmCtor = removeClashes._1.flatMap:
        case (c, CtorDest(matches, sels, false)) => 
          assert(matches.size <= 1)
          matches.values.flatMap(m => findCycle(c, m))
      
      removeCtor(removeClashes._1, removeClashes._2, toRmCtor.toSet)
    }

    val finalRes = removeCycle
    finalRes
    
  
  
  lazy val filteredCtorDests: Map[ResultId, CtorFinalDest] =
    val res = mutable.Map.empty[ResultId, CtorFinalDest]
    
    // we need only one CtorFinalDest per arm for each pat mat expr
    val handledMatches = mutable.Map.empty[ResultId -> ClsOrModSymbol, Opt[CtorFinalDest]]
    
    resolveClashes._1.toSortedMap.foreach { case (ctor, CtorDest(dtors, sels, false)) =>
      val filteredDtor = {
        if dtors.size == 0 && sels.size == 1 then Some(CtorFinalDest.Sel(sels.head.expr))
        else if dtors.size == 0 && sels.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size == 1 then
          val currentCtorCls = getClsSymOfUid(ctor)
          val scrutRef@Value.Ref(scrut) = dtors.head._1.getResult
          handledMatches.getOrElseUpdate(
            scrutRef.uid -> currentCtorCls,
            if sels.forall{ s => s.expr.getResult match
              case Select(Value.Ref(l), nme) => (l === scrut) && s.inMatching.contains(scrutRef.uid)
              case _ => false
            } then
              val fieldNameToSymToBeReplaced = mutable.Map.empty[Tree.Ident, Symbol]
              val selectionUidsToSymToBeReplaced = mutable.Map.empty[ResultId, Symbol]
              
              dtors.head._2.arms.foreach:
                case (Case.Cls(cOrMod, _), body) if cOrMod.asCls.fold(false)(_ === currentCtorCls) =>
                  val c = cOrMod.asCls.get
                  // if this arm is used more than once, should be var symbol because the arm body will be
                  // extracted to a function, otherwise just temp symbol
                  val varSymInsteadOfTempSym = resolveClashes._2(DtorExpr.Match(dtors.head._1)).ctors.count(getClsSymOfUid(_) === c) > 1
                  val selsInArms = sels.filter { fs => fs.inMatching(dtors.head._1) === c }
                  
                  selsInArms.foreach: fs =>
                    assert(getClsFields(c).map(_.id).contains(fs.field))
                    fieldNameToSymToBeReplaced.updateWith(fs.field):
                      case Some(v) => Some(v)
                      case None => Some(if varSymInsteadOfTempSym
                        then VarSymbol(Tree.Ident(s"_deforest_${c.name}_${fs.field.name}"))
                        else TempSymbol(N, s"_deforest_${c.name}_${fs.field.name}"))
                    val sym = fieldNameToSymToBeReplaced(fs.field)
                    
                    selectionUidsToSymToBeReplaced.addOne(fs.expr -> sym)
                case _ => ()
              Some(CtorFinalDest.Match(
                dtors.head._1,
                dtors.head._2,
                sels.map(_.expr),
                fieldNameToSymToBeReplaced.toMap -> selectionUidsToSymToBeReplaced.toMap
              ))
            else
              throw Error("more than one consumer")
              None
          )
        else ???
      }
      res.updateWith(ctor){_ => filteredDtor}
    }
    res.toMap
  
  lazy val rewritingSelConsumer = filteredCtorDests.values.flatMap {
    case CtorFinalDest.Match(_, _, _, _) => None
    case CtorFinalDest.Sel(s) => Some(s)
  }.toSet
  
  lazy val filteredDtors = filteredCtorDests.values.collect {
    case CtorFinalDest.Match(scrut, _, _, _) => scrut
  }.toSet
  
  def rewrite(p: Block) =
    val deforestTransformer = DeforestTransformer()
    val rest = deforestTransformer.applyBlock(p)
    val newDefsRest = deforestTransformer.matchRest.getAllFunDefs
    val newDefsArms = deforestTransformer.matchArms.getAllFunDefs
    newDefsArms(newDefsRest(rest))
  
class DeforestTransformer(using val d: Deforest, elabState: Elaborator.State) extends BlockTransformer(new SymbolSubst()):
  self =>
  val nonFreeVars: Set[Symbol] = d.globallyDefinedVars.store.toSet

  val replaceSelInfo: Map[ResultId, Symbol] =
    d.filteredCtorDests.values.flatMap { 
      case CtorFinalDest.Match(_, _, _, selMaps) =>
        selMaps._2
      case CtorFinalDest.Sel(s) => Nil
    }.toMap
  
  def parentMatchesUptoAFusingOne(scrutId: ResultId) =
    def go(scrutId: ResultId): List[ResultId] -> Opt[ResultId] =
      d.matchScrutToParentMatchScrut(scrutId).fold(Nil -> N): r =>
        if d.filteredDtors.contains(r)
        then Nil -> S(r)
        else
          val res = go(r)
          (r :: res._1) -> res._2
    go(scrutId)
  
  def allParentMatches(scrutId: ResultId) =
    def go(scrutId: ResultId): List[ResultId] =
      d.matchScrutToParentMatchScrut(scrutId).fold(Nil)(r => r :: go(r))
    go(scrutId)
  
  object freeVarsOfNonTransformedMatches:
    val store = mutable.Map.empty[ResultId, List[Symbol]]
    
    private val toBeReplacedForAllBranches = mutable.Map.empty[ResultId, Map[ResultId, Symbol]].withDefaultValue(Map.empty)
    d.filteredCtorDests.values.foreach:
      case CtorFinalDest.Match(scrut, expr, selInArms, selMaps) =>
        toBeReplacedForAllBranches += scrut -> (toBeReplacedForAllBranches(scrut) ++ selMaps._2)
    
    def apply(scrutExprId: ResultId, m: Match) = store.getOrElseUpdate(
      scrutExprId,
      locally:
        assert(m.scrut.uid === scrutExprId)
        val Match(Value.Ref(l), _, _, _) = m
        val selReplacementNotForThisSel = replaceSelInfo -- toBeReplacedForAllBranches(scrutExprId).keys
        DeforestationFreeVarTraverserForMatch(
          nonFreeVars,
          selReplacementNotForThisSel,
          toBeReplacedForAllBranches(scrutExprId),
          l,
          self
        ).analyze(m)
    )

  object matchArms:
    val store = LinkedHashMap.empty[ResultId, Map[ClsOrModSymbol | None.type, FunDefn]].withDefaultValue(Map.empty)
    
    // return a lambda, which either calls the extracted arm function, or contains the computations in matching arms
    def getOrElseUpdate(
      scrut: ResultId,
      m: Match,
      cls: ClsOrModSymbol,
      sel: Set[ResultId],
      currentUsedCtorArgsToFields: Map[Tree.Ident, Value.Ref],
      preComputedSymbols: Map[Tree.Ident, Symbol] -> Map[ResultId, Symbol] = Map.empty -> Map.empty
    ) =
      assert(scrut === m.scrut.uid)
      val freeVarsAndTheirNewSyms = freeVarsOfNonTransformedMatches(scrut, m).map(s => s -> VarSymbol(Tree.Ident(s.nme)))
      val (body, isDflt) = m.arms.find{ case (Case.Cls(c1, _) -> _) => c1 === cls }.map(_._2 -> false).orElse(m.dflt.map(_ -> true)).get
      store.get(scrut).flatMap(_.get(if isDflt then None else cls)) match
        case None => // not registered before, or this branch of this match will only appear once
          val rest = m.rest
          val makeBody = matchRest.getOrElseUpdate(scrut, rest) match
            case N -> rewrittenRest => (bodyBlk: Block) =>
              Begin(bodyBlk, rewrittenRest).flattened.replaceSymbols(freeVarsAndTheirNewSyms.toMap).mapTail:
                case Return(res, implct) => Return(res, false)
                case t => t
            case Some(f) -> rewrittenRest => (bodyBlk: Block) =>
              Begin(
                bodyBlk,
                Return(
                  Call(
                    Value.Ref(f),
                    rewrittenRest.sortedFvsForTransformedBlocks(nonFreeVars).map(a => Arg(false, Value.Ref(a))))(true, false),
                  false
                )
              ).flattened.replaceSymbols(freeVarsAndTheirNewSyms.toMap).mapTail:
                case Return(res, implct) => Return(res, false)
                case t => t
          
          if d.resolveClashes._2(DtorExpr.Match(scrut)).ctors.count{c =>
            if !isDflt then c.getClsSymOfUid === cls
            else m.arms.find{ case (Case.Cls(c1, _), _) => c1 === c.getClsSymOfUid }.isEmpty
           } > 1 then
            // make a function, and register, and return a lambda calling that function with correct arguments
            // arguments for lambda: free vars
            // arguments for that function: free vars and pattern vars
            
            val bodyReplaceSel = applyBlock(body)
            
            val freeVarsAndTheirNewSymsInLam = freeVarsAndTheirNewSyms.map(s => s._1 -> VarSymbol(s._2.id))
            val funBody = makeBody(bodyReplaceSel)
            val funSym = BlockMemberSymbol(s"match_${scrut.getResult.asInstanceOf[Value.Ref].l.nme}_branch_${if isDflt then "dflt" else cls.nme}", Nil)
            val newDef = FunDefn(
              N,
              funSym,
              ParamList(
                ParamListFlags.empty,
                freeVarsAndTheirNewSyms.map(s => Param(FldFlags.empty, s._2, N)).toList
                  ::: preComputedSymbols._1.toList.sortBy(_._1.name).map(v =>
                    
                    Param(FldFlags.empty, v._2.asInstanceOf[VarSymbol], N)
                  ),
                N
              ) :: Nil,
              funBody
            )
            store += (scrut -> (store(scrut) + ((if isDflt then None else cls) -> newDef)))
            Value.Lam(
              ParamList(ParamListFlags.empty, freeVarsAndTheirNewSymsInLam.map(s => Param(FldFlags.empty, s._2, N)), N),
              Return(
                Call(Value.Ref(funSym), freeVarsAndTheirNewSymsInLam.map(a => Arg(false, Value.Ref(a._2))) ::: currentUsedCtorArgsToFields.toList.sortBy(_._1.name).map(a => Arg(false, a._2)))(true, false),
                false
              )
            )
          else
            val bodyReplaceSel = applyBlock(body)
            val lambdaBody = makeBody(bodyReplaceSel)
            Value.Lam(
              ParamList(ParamListFlags.empty, freeVarsAndTheirNewSyms.values.map(s => Param(FldFlags.empty, s, N)).toList, N),
              lambdaBody
            )
          
        case Some(f) =>
          // return a lambda that calls f with correct arguments
          Value.Lam(
            ParamList(ParamListFlags.empty, freeVarsAndTheirNewSyms.map(s => Param(FldFlags.empty, s._2, N)), N),
            Return(
                Call(Value.Ref(f.sym), freeVarsAndTheirNewSyms.map(a => Arg(false, Value.Ref(a._2))) ::: currentUsedCtorArgsToFields.toList.sortBy(_._1.name).map(a => Arg(false, a._2)))(true, false),
                false
              )
          )
    
    def getAllFunDefs: Block => Block =
      store.values.flatMap(v => v.values).foldRight(identity: Block => Block):
        case (defn, k) => r => Define(defn, k(r))
  
  object matchRest:
    val store = LinkedHashMap.empty[ResultId, Opt[FunDefn] -> Block]
    
    def getAllDefined = store.valuesIterator.flatMap(_._1.map(_.sym))
    
    // returns the symbol for the rest function (if any), and the rewritten rest block
    def getOrElseUpdate(s: ResultId, restBeforeRewriting: Block): Opt[Symbol] -> Block =
      store.get(s) match
        case Some(f, b) => f.map(_.sym) -> b
        case _ =>
          // return all blocks concat together using `Begin`, and return if all of them are `End` blocks
          def concatAllRestBlocksOfMatches(ps: List[ResultId]) =
            ps.foldRight[Block](End("")){ (pid, acc) =>
              val b = d.matchScrutToMatchBlock(pid).rest
              val isEnd = b.isInstanceOf[End]
              if isEnd then acc else Begin(b, acc)
            }
          val parentRestInfo = parentMatchesUptoAFusingOne(s) match
            case ps -> Some(theFusingOne) =>
              // return the original rests from unfused parent matches,
              // and the function symbol for the `rest` of the fusing parent match (if any)
              // and the rewritten `rest` block of that fusing parent match
              concatAllRestBlocksOfMatches(ps) ->
              getOrElseUpdate(theFusingOne, d.matchScrutToMatchBlock(theFusingOne).rest)
            case ps -> None => 
              // return the original rests from unfused parent matches, and none (meaning that there is no fusing parent match)  
              concatAllRestBlocksOfMatches(ps) -> None
          
          // bd: original `rest`s of non-fusing parent matches
          val restRewritten =
            val nonFlatten = parentRestInfo match
              // None: there is no fusing parent match
              case bd -> None => applyBlock(Begin(restBeforeRewriting, bd))
              // (Some(s), b): there is a fusing parent match, and its `rest` is extracted into a function with symbol `s`,
              // and the transformed `rest` is b
              case bd -> (Some(s), b) => Begin(
                applyBlock(restBeforeRewriting),
                Return(Call(Value.Ref(s), b.sortedFvsForTransformedBlocks(nonFreeVars ++ getAllDefined).map(a => Arg(false, Value.Ref(a))))(true, false), false))
              // (None, b): there is a fusing parent match, and its `rest` is not extracted into a function
              case bd -> (None, b) => Begin(applyBlock(Begin(restBeforeRewriting, bd)), b)
            nonFlatten.flattened
          
          // no need to build a new function for empty rest, or if the rest is only going to be used once
          if restRewritten.isInstanceOf[End] || (d.resolveClashes._2(DtorExpr.Match(s)).ctors.map(c => c.getClsSymOfUid).size == 1) then
            val res = N -> restRewritten
            store += s -> res
            res
          else // build a new function and update the store
            val scrutName = s.getResult.asInstanceOf[Value.Ref].l.nme
            val sym = BlockMemberSymbol(s"match_${scrutName}_rest", Nil)
            val freeVarsAndTheirNewSyms = restRewritten.sortedFvsForTransformedBlocks(nonFreeVars ++ getAllDefined).map(s => s -> VarSymbol(Tree.Ident(s.nme))).toMap
            val newFunDef = FunDefn(
              N,
              sym,
              ParamList(ParamListFlags.empty, freeVarsAndTheirNewSyms.values.map(s => Param(FldFlags.empty, s, N)).toList, N) :: Nil,
              restRewritten.replaceSymbols(freeVarsAndTheirNewSyms)
            )
            store += s -> (Some(newFunDef) -> restRewritten)
            Some(sym) -> restRewritten
    
    def getAllFunDefs: Block => Block =
      store.values.foldRight(identity: Block => Block):
        case (defn -> _, k) =>
          r => defn match
            case None => k(r)
            case Some(defn) => Define(defn, k(r))
  
  
  override def applyBlock(b: Block): Block = b match
    case mat@Match(scrut, arms, dflt, rest) if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } && d.filteredDtors.contains(scrut.uid) =>
      // since all fusing matches will be considered to be in the tail position,
      // if any of the parent `rest`s has explicit return, the rewritten match will have explicit return
      val oneOfParentMatchRestHasExplicitRet = allParentMatches(scrut.uid).foldRight(false) { (pid, acc) => acc || d.matchScrutToMatchBlock(pid).rest.hasExplicitRet }
      val needExplicitRet = rest.hasExplicitRet || arms.exists(_._2.hasExplicitRet) || oneOfParentMatchRestHasExplicitRet
      val freeVars = freeVarsOfNonTransformedMatches(scrut.uid, mat).map(v => Arg(false, Value.Ref(v)))
      Return(Call(scrut, freeVars)(false, false), !needExplicitRet)
    case Match(scrut, arms, dflt, rest)
    if
      // If all the arms end with non-`End` blocks, then the `rest` of this `Match` will never be executed,
      // and we remove the `rest` in this case. This prevents `rest` to use variables that become
      // undefined because computation in arms that defines them are moved away. 
      // TODO: it will become unnecessary once we have proper binding declarations in the Block IR
      // and all uses of never-assigned variables will be known to be dead code
      dflt.fold(false)(_.willBeNonEndTailBlock) && arms.forall { case (_, body) => body.willBeNonEndTailBlock }
    =>
      super.applyBlock(Match(scrut, arms, dflt, End("")))
    case _ => super.applyBlock(b)
  
  override def applyResult(r: Result): Result = r match
    case _: Call =>
      // calls to fusing contructors are handled in `applyResult2`
      // here we only handle calls to non-fusing constructors and functions
      assert(!d.filteredCtorDests.isDefinedAt(r.uid))
      super.applyResult(r)
    case _ => super.applyResult(r)
  
  override def applyResult2(r: Result)(k: Result => Block): Block = r match
    case call@Call(f, args) if d.filteredCtorDests.isDefinedAt(call.uid) =>
      val c = f match
        case s: Select => s.symbol.get.asCls.get
        case Value.Ref(l) => l.asCls.get
        case _ => ???
      d.filteredCtorDests.get(call.uid).get match
        case CtorFinalDest.Match(scrut, expr, sels, selsMap) =>
          // use pre-determined symbols, create temp symbols for un-used fields
          val usedFieldIdentToSymbolsToBeReplaced = selsMap._1
          val allFieldIdentToSymbolsToBeReplaced = d.getClsFields(c).map: f =>
            f.id -> usedFieldIdentToSymbolsToBeReplaced.getOrElse(f.id, TempSymbol(N, s"_deforest_${c.name}_${f.id.name}_unused"))
      
          // if all vars are temp vars, no need to create more temp vars
          // otherwise, create temps for var symbols (which will be function params with these temp vars flowing in)
          val assignedTempSyms =
            if allFieldIdentToSymbolsToBeReplaced.forall(_._2.isInstanceOf[TempSymbol]) then
              allFieldIdentToSymbolsToBeReplaced.map(a => a._1 -> a._2.asInstanceOf[TempSymbol])
            else
              allFieldIdentToSymbolsToBeReplaced.map { case (id, s) => s match
                case ts: TempSymbol => id -> ts
                case vs: VarSymbol => id -> TempSymbol(N, s"${vs.name}_tmp")
              }
      
          val bodyAndRestInLam = matchArms.getOrElseUpdate(
            scrut,
            expr,
            c,
            sels.toSet,
            assignedTempSyms.filter(a => usedFieldIdentToSymbolsToBeReplaced.contains(a._1)).map(a => a._1 -> Value.Ref(a._2).asInstanceOf[Value.Ref]).toMap,
            selsMap._1 -> selsMap._2)
      
          args.zip(assignedTempSyms.map(_._2)).foldRight[Block](k(bodyAndRestInLam)):
            case ((a, tmp), rest) => applyResult2(a.value) { r => Assign(tmp, r, rest) }
      
        case CtorFinalDest.Sel(s) =>
          val selFieldName = s.getResult match { case Select(p, nme) => nme }
          val idx = d.getClsFields(c).indexWhere(s => s.id === selFieldName)
          k(args(idx).value)
      
    case _ => super.applyResult2(r)(k)
  
  def handleObjFusing(objCallExprUid: ResultId, objClsSym: ModuleSymbol) =
    // must be a pat mat on objects; no support for selection on objects yet
    val CtorFinalDest.Match(scrut, expr, sels, selsMap) = d.filteredCtorDests(objCallExprUid): @unchecked
    val body = expr.arms.find{ case (Case.Cls(m, _) -> body) => m === objClsSym }.map(_._2).orElse(expr.dflt).get
    matchArms.getOrElseUpdate(scrut, expr, objClsSym, Set.empty, Map.empty)

  override def applyPath(p: Path): Path = p match
    // a selection which is a consumer on its own
    case s@Select(p, nme) if d.rewritingSelConsumer.contains(s.uid) => applyPath(p)
    
    // a selection inside a fusing match that needs to be replaced by pre-computed symbols
    case s@Select(p, nme) if replaceSelInfo.get(s.uid).isDefined => Value.Ref(replaceSelInfo(s.uid))
    
    case s@Select(p, nme) => s.symbol.flatMap(_.asObj) match
      // a fusing object constructor
      case Some(obj) if d.filteredCtorDests.isDefinedAt(s.uid) => handleObjFusing(s.uid, obj)
      case _ => super.applyPath(s)
    
    case v: Value => applyValue(v)
    case _ => super.applyPath(p)
  
  override def applyValue(v: Value): Value = v match
    case r@Value.Ref(l) => l.asObj match
      case None => r
      case Some(obj) if d.filteredCtorDests.isDefinedAt(r.uid) => handleObjFusing(r.uid, obj)
      case _ => super.applyValue(v)
    case _ => super.applyValue(v)
