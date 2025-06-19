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

// TODO: examine what info is really needed in the ctors
sealed abstract class ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat with StratVar(s)
case class ProdFun(params: Ls[ConsStrat], res: ProdStrat) extends ProdStrat
case object NoProd extends ProdStrat
class Ctor(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId],
  val ctor: ClassLikeSymbol,
  val args: Ls[TermSymbol -> ProdStrat]) extends ProdStrat

sealed abstract class ConsStrat
case class ConsVar(s: StratVarState) extends ConsStrat with StratVar(s)
case class ConsFun(params: Ls[ProdStrat], res: ConsStrat) extends ConsStrat
case object NoCons extends ConsStrat
class FieldSel(
  val exprId: ResultId,
  val instantiationId: Opt[InstantiationId],
  val field: Tree.Ident,
  val consVar: ConsVar) extends ConsStrat:
    val filter = mutable.Map.empty[ProdVar, Ls[ClassLikeSymbol]].withDefaultValue(Nil)
    def updateFilter(p: ProdVar, c: Ls[ClassLikeSymbol]) =
      filter += p -> (c ::: filter(p))

class Dtor(
  val scrutExprId: ResultId,
  val instantiationId: Opt[InstantiationId]) extends ConsStrat

class ProdStratScheme(s: StratVarState, constraints: Ls[ProdStrat -> ConsStrat]):
  def instantiate(referSite: ResultId)(using d: DeforestConstraintsCollector, cc: d.ConstraintsAndCacheHitCollector): ProdVar =
    val instantiatingFunSym = d.preAnalyzer.getResult(referSite) match
      case Value.Ref(l) => l.asBlkMember.get
      case s: Select => s.symbol.flatMap(_.asBlkMember).get
      case _ => die
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
        updateInstantiationId(c.instantiationId),
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

class DeforestPreAnalyzer(val b: Block) extends BlockTraverser:
  given stratVarUidState: Uid.StratVar.State = new Uid.StratVar.State
  import StratVarState.freshVar
  
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
    resultIdToResult(id).getCtorSymFromCtorLikeExpr
  def getMatchFromMatchScrutExprId(scrutExprId: ResultId): Opt[Match] =
    matchScrutToMatchBlock.get(scrutExprId)
  def getResult(id: ResultId) = resultIdToResult(id)
  def getStableResultId(id: ResultId) = resultIdToStableId.getOrElseUpdate.curried(id):
    val prev = stableResuldIt
    stableResuldIt += 1
    prev
  def getReferredFunSym(id: ResultId) =
    def chk(s: BlockMemberSymbol) =
      // assert(s.trmImplTree.exists(_.k is syntax.Fun))
      s
    resultIdToResult(id) match
      case s: Select => chk(s.symbol.get.asBlkMember.get)
      case Value.Ref(l) => chk(l.asBlkMember.get)
      case _ => die
  
  
  private val resultIdToStableId = mutable.Map.empty[ResultId, Int]  
  private var stableResuldIt = 0
  private var inMatchScrutsArms: Ls[ResultId -> Opt[ClassLikeSymbol]] = Nil
  private def inMatchScruts = inMatchScrutsArms.unzip._1
  private var inFunDef: Opt[BlockMemberSymbol] = N
  private var symsDefinedForFun: Opt[Set[Symbol]] = N
  override def applyFunDefn(fun: FunDefn): Unit =
    inFunDef match
      case N =>
        topLevelFunSymToFun += fun.sym -> fun
        inFunDef = S(fun.sym)
        symsDefinedForFun = S(fun.body.definedVars ++ fun.params.flatMap(_.params.map(_.sym)) + fun.sym)
        super.applyFunDefn(fun)
        inFunDef = N
        symsDefinedForFun = N
      case S(value) =>
        // nothing special for non-top-level functions
        nonTopLevelDefinedFunSyms += fun.sym
        super.applyFunDefn(fun)
  
  override def applySymbol(s: Symbol): Unit = s match
    case s: BlockMemberSymbol if s.trmImplTree.fold(false)(_.k is syntax.Fun) => symToStratVar.updateWith(s):
      case N => S(freshVar(s.nme, S(s)).asProdStrat)
      case S(x) => S(x)
    // term symbol: variable in patterns so they are always inside the current fundefn (if any)
    case s: (TermSymbol | TempSymbol) => symToStratVar.updateWith(s):
      case N => S(freshVar(s.nme, inFunDef).asProdStrat)
      case S(x) => S(x)
    case v: (BlockMemberSymbol | VarSymbol) => symToStratVar.updateWith(s):
      case N =>
        val inFunOrNot = inFunDef.fold(false): _ =>
          symsDefinedForFun.get.contains(s)
        S(freshVar(s.nme, if inFunOrNot then inFunDef else N).asProdStrat)
      case S(x) => S(x)
    case _: (TopLevelSymbol | BuiltinSymbol | ClassLikeSymbol) => ()
    case _ => die
  
  override def applyResult(r: Result): Unit =
    resultIdToResult += r.uid -> r
    super.applyResult(r)
  
  override def applyPath(p: Path): Unit =
    resultIdToResult += p.uid -> p
    p match
      case s@Select(path, nme) =>
        selsToMatchingArmsContainingIt += s.uid -> inMatchScrutsArms
        s.symbol.flatMap(_.asBlkMember).foreach: b =>
          b.trmTree.foreach: t =>
            if t.k is syntax.Fun then usedFunSyms += b
      case _ => ()
    super.applyPath(p)
  
  override def applyValue(v: Value): Unit =
    resultIdToResult += v.uid -> v
    v match
      case Value.Ref(l) => l.asBlkMember.foreach: b =>
        b.trmTree.foreach: t =>
          if t.k is syntax.Fun then usedFunSyms += b
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
  
  applyBlock(b)


class DeforestConstraintsCollector(val preAnalyzer: DeforestPreAnalyzer):
  given stratVarUidState: Uid.StratVar.State = preAnalyzer.stratVarUidState
  import StratVarState.freshVar
  
  val constraints = processTopLevel(preAnalyzer.b)
  class ConstraintsAndCacheHitCollector(val forFun: Opt[BlockMemberSymbol]):
    var constraints: Ls[ProdStrat -> ConsStrat] = Nil
    var cacheHit: Ls[BlockMemberSymbol] = Nil // TODO: a better name to say it actually get the symbol of funs in a recursive group
    def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
    def constrain(cs: Ls[ProdStrat -> ConsStrat]) = constraints :::= cs
    def hit(s: BlockMemberSymbol) = cacheHit ::= s
    def hit(ss: Ls[BlockMemberSymbol]) = cacheHit :::= ss
  
  object funSymToProdStratScheme:
    val store = mutable.Map.empty[BlockMemberSymbol, ProdStratScheme]
    val recursiveGroups = mutable.Map.empty[BlockMemberSymbol, Ls[BlockMemberSymbol]]
    def getOrUpdate(s: BlockMemberSymbol)(using processingDefs: Ls[BlockMemberSymbol], cc: ConstraintsAndCacheHitCollector): ProdVar | ProdStratScheme =
      preAnalyzer.getTopLevelFunDefnForSym(s) match
        // not a fun defined in the current block, just return its prodvar
        case None =>
          // preAnalyzer.noProdStratVar
          preAnalyzer.getProdVarForSym(s) // TODO: consider functions being imported?
        case Some(funDefn) => store.get(s) match
          case Some(scheme) => scheme
          case None => processingDefs.filter(_ is s) match
            case sym :: Nil =>
              cc.hit(sym)
              processingDefs.headOption.foreach: h =>
                cc.hit(h)
              preAnalyzer.getProdVarForSym(sym)
            case Nil => 
              // start processing this function, if the cache hit contains the currently processing defs functions
              // then: 1. the referred function belongs to the same recursion group and need to share the constraints 2. return the prodvar
              // else: we found a new recursive group, for each member of the group, update the store with the correct type scheme and return the type scheme
              val newcc = processFunDefn(funDefn, processingDefs)
              if newcc.cacheHit.exists(x => processingDefs.contains(x)) then
                cc.hit(newcc.cacheHit)
                cc.constrain(newcc.constraints)
                processingDefs.headOption.foreach: h =>
                  cc.hit(h)
                preAnalyzer.getProdVarForSym(s)
              else
                val recursiveGroupMembers = (s :: newcc.cacheHit).distinct
                recursiveGroupMembers.foreach: f =>
                  store.updateWith(f):
                    case N => S(ProdStratScheme(preAnalyzer.getProdVarForSym(f).s, newcc.constraints))
                    case S(_) => die // this means the scc is not computed corrrectely
                  recursiveGroups.updateWith(f):
                    case N => S(recursiveGroupMembers)
                    case S(_) => die // this means the scc is not computed corrrectely
                store(s)
            case _ => die // die if something occurs twice in the processing list
  
  def processTopLevel(b: Block): Ls[ProdStrat -> ConsStrat] =
    val cc = new ConstraintsAndCacheHitCollector(N)
    val strat = processBlock(b)(using Nil, cc)
    cc.constrain(strat, NoCons)
    cc.constrain(preAnalyzer.noProdStratVar, NoCons)
    cc.constrain(NoProd, preAnalyzer.noProdStratVar.asConsStrat)
    preAnalyzer.usedFunSyms
      .diff(preAnalyzer.topLevelDefinedFunSyms)
      .diff(preAnalyzer.nonTopLevelDefinedFunSyms)
      .foreach: usedButNotDefined =>
        cc.constrain(NoProd, preAnalyzer.getProdVarForSym(usedButNotDefined).asConsStrat)
    // TODO: for defined but not fun syms, constrain them with NoCons
    cc.constraints
  
  def processFunDefn(defn: FunDefn, processingDefs: Ls[BlockMemberSymbol]): ConstraintsAndCacheHitCollector =
    val thisFunVar = preAnalyzer.getProdVarForSym(defn.sym)
    val paramSyms = defn.params.head.params.map: // TODO: handle multiple param list and the `restParam`
      case Param(sym = sym, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
    val cc = new ConstraintsAndCacheHitCollector(S(defn.sym))
    val bodyStrat = processBlock(defn.body)(using defn.sym :: processingDefs, cc)
    val res = freshVar(s"${defn.sym.nme}_res", S(defn.sym))
    cc.constrain(bodyStrat, res.asConsStrat)
    cc.constrain(ProdFun(paramSyms, res.asProdStrat), thisFunVar.asConsStrat)
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
            case (Case.Cls(clsSym, _), body) => processBlock(body) // TODO: check
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
            val paramSyms = params.head.params.map: // TODO: handle multiple param list and the `restParam`
              case Param(sym = sym, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
            val bodyStrat = processBlock(body)
            val res = freshVar(s"${sym.nme}_res", cc.forFun)
            cc.constrain(bodyStrat, res.asConsStrat)
            cc.constrain(ProdFun(paramSyms, res.asProdStrat), preAnalyzer.getProdVarForSym(sym).asConsStrat)
          else
            () // skip toplevel fundefs are they are processed when needed
        case v: ValDefn => throw NotDeforestableException("No support for `ValDefn` yet")
        case c: ClsLikeDefn => throw NotDeforestableException("No support for `ClsLikeDefn` yet")
      processBlock(rest)
    case End(msg) => NoProd
    // make it a type var instead of `NoProd` so that things like `throw match error` in
    // default else branches do not block fusion...
    case Throw(exc) =>
      processResult(exc)
      freshVar("throw", cc.forFun).asProdStrat

  def processResult(r: Result)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat =
    val generatedForDef = cc.forFun
    val instantiationId = cc.forFun.fold(S(Nil))(_ => N)
    def handleCallLike(f: Path, args: Ls[Path], c: Result): ProdStrat =
      val argsTpe = args.map(processResult)
      f match
        case s@Select(p, nme) =>
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
              new Ctor(c.uid, instantiationId, s, clsFields.zip(argsTpe))
        case Value.Ref(funSym) =>
          funSym.asCls match
            case Some(s) =>
              val clsFields = s.tree.clsParams
              new Ctor(c.uid, instantiationId, s, clsFields.zip(argsTpe))
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
          val funTpe = processResult(lam)
          val appRes = freshVar("call_lam_res", generatedForDef)
          cc.constrain(funTpe, ConsFun(argsTpe, appRes.asConsStrat))
          appRes.asProdStrat
        case Value.This(sym) => throw NotDeforestableException("No support for `this` as a callee yet")
        case Value.Lit(lit) => lastWords(s"try to call literal $lit")
        case Value.Arr(elems) => lastWords(s"try to call array $elems")
    r match
    case c@Call(f, args) => handleCallLike(f, args.map {case Arg(false, value) => value}, c)
    case i@Instantiate(cls, args) => handleCallLike(cls, args, i)
    case sel@Select(p, nme) => sel.symbol match
      case Some(s) if s.asObj.isDefined =>
          new Ctor(sel.uid, instantiationId, s.asObj.get, Nil)
      case Some(s) if s.asBlkMember.exists(_.trmImplTree.exists(_.k is syntax.Fun)) &&
        preAnalyzer.topLevelDefinedFunSyms.contains(s.asBlkMember.get) =>
        funSymToProdStratScheme.getOrUpdate(s.asBlkMember.get) match
          case v: ProdVar => v
          case t: ProdStratScheme =>
            val instantiated = t.instantiate(sel.uid)(using this, cc)
            instantiated
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
        // println(s"ref $l: ${l.asBlkMember.map(_.trees)}")
        if l.asBlkMember.exists(preAnalyzer.topLevelDefinedFunSyms.contains) then
          funSymToProdStratScheme.getOrUpdate(l.asBlkMember.get) match
            case v: ProdVar => v
            case t: ProdStratScheme =>
              val instantiated = t.instantiate(v.uid)(using this, cc)
              instantiated
        else
          preAnalyzer.getProdVarForSym(l)
      case Some(m) => new Ctor(v.uid, instantiationId, m, Nil)
    
    case Value.This(sym) => throw NotDeforestableException("No support for `this` yet")
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      val paramSyms = params.map: // TODO: handle multiple param list and the `restParam`
        case Param(sym = sym, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
      val bodyStrat = processBlock(body)
      val res = freshVar(s"lam_res", generatedForDef)
      cc.constrain(bodyStrat, res.asConsStrat)
      ProdFun(paramSyms, res.asProdStrat)
    case Value.Arr(elems) => throw NotDeforestableException("No support for arrays yet")


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
        c.args.find(a => a._1.id == d.field).map: p =>
          handle(p._2 -> d.consVar)
      case (c: Ctor, d: ConsFun) => () // ignore, TODO: maybe a warning?
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
      case (NoProd, fSel: FieldSel) => dtorSources.update(fSel, NoProd)
      case (NoProd, ConsFun(l, r)) =>
        l.foreach(a => handle(a, NoCons))
        handle(NoProd, r)
      case (NoProd, NoCons) => ()
    
  locally:
    given mutable.Set[ProdStrat -> ConsStrat] = mutable.Set.empty
    constraints.foreach(handle)
  
  val resolveClashes =
    val ctorToDtor = ctorDests.store.clone() // TODO: clone is only helpful for debugging
    val dtorToCtor = dtorSources.store.clone()
    def removeCtor(rm: (Ctor | ResultId)): Unit = rm match
      case rm: Ctor =>
        for
          (dtors, _) <- ctorToDtor.remove(rm)
          dtor <- dtors
        do removeDtor(dtor)
      case _ =>
        for rm <- ctorToDtor.keySet.filter(x => x.exprId == rm) do removeCtor(rm)
    def removeDtor(rm: Dtor | FieldSel) =
      for (ctors, _) <- dtorToCtor.remove(rm)
          x <- ctors do removeCtor(x)
    
    // remove clashes
    for
      (rm, dtors -> noCons) <- ctorToDtor
      (mats, sels) = dtors.partitionMap:
        case d: Dtor => L(d)
        case s: FieldSel => R(s)
      if noCons || !locally:
        mats.size == 0 && sels.size == 1 ||
        mats.size == 1 && locally:
          val matScrutExprId = mats.head.scrutExprId
          val matExprInstantiationId = mats.head.instantiationId.get
          val matScrutSym = preAnalyzer.getResult(matScrutExprId).asInstanceOf[Value.Ref].l
          sels.forall: s =>
            val selExprId = s.exprId
            preAnalyzer.getResult(selExprId) match
              case Select(Value.Ref(l), _) => 
                preAnalyzer.selsToMatchingArmsContainingIt(selExprId).exists(_._1 == matScrutExprId) &&
                (l is matScrutSym) &&
                s.instantiationId.get == matExprInstantiationId
              case _ => false
    do removeCtor(rm)
    for
      case (rm, _ -> true) <- dtorToCtor
    do removeDtor(rm)
    
    // remove cycle
    def getCtorInArm(ctorExprId: ResultId , dtorScrutExprId: ResultId) =
      val ctorSym = preAnalyzer.getCtorSymFromCtorLikeExprId(ctorExprId).get
      val dtor = preAnalyzer.getMatchFromMatchScrutExprId(dtorScrutExprId).get
      val arm =
        dtor.arms.find:
          case (Case.Cls(c1, _) -> body) => c1 is ctorSym
        .map(_._2).orElse(dtor.dflt).get
      val armAndMatchRest =
        preAnalyzer
        .matchScrutToParentMatchScruts(dtorScrutExprId)
        .foldLeft(Begin(arm, dtor.rest)): (acc, x) =>
          val newRest = preAnalyzer.getMatchFromMatchScrutExprId(x).get.rest
          Begin(acc, newRest)
      val traverser = new GetCtorsTraverser(armAndMatchRest)
      traverser.ctors
    def findCycle(c: Ctor, d: Dtor): Ls[ResultId] =
      val cache = mutable.Set(c.exprId)
      def go(ctorAndMatchesScrutExprIds: Ls[ResultId -> ResultId]): Ls[ResultId] =
        val newCtorsAndNewMatches = for
          (c, m) <- ctorAndMatchesScrutExprIds
          c <- getCtorInArm(c, m)
          (_, ds -> noCons) <- ctorToDtor.filter(x => x._1.exprId == c)
          _ = assert(!noCons)
          (mats, _) = ds.partitionMap:
            case d: Dtor => L(d)
            case s: FieldSel => R(s)
          m <- mats.headOption
        yield c -> m.scrutExprId
        val cycled = newCtorsAndNewMatches.filter: c =>
          !cache.add(c._1)
        if newCtorsAndNewMatches.isEmpty then
          Nil
        else if cycled.nonEmpty then
          cycled.map(_._1)
        else
          go(newCtorsAndNewMatches)
      c.instantiationId -> d.instantiationId match
        case S(id1) -> S(id2) if id1 == id2 =>
          go(Ls(c.exprId -> d.scrutExprId))
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
    
    ctorToDtor -> dtorToCtor



class GetCtorsTraverser(b: Block) extends BlockTraverser:
  var ctors = Set.empty[ResultId]
  override def applyResult(r: Result): Unit = r match
    case Call(f, args) =>
      if f.asClsSymbol.isDefined then ctors += r.uid
      args.foreach:
        case Arg(false, v) => applyResult(v)
    case Instantiate(cls, args) =>
      if cls.asClsSymbol.isDefined then ctors += r.uid
      args.foreach(applyResult)
    case p: Path => if p.asObjSymbol.isDefined then ctors += r.uid
  applyBlock(b)

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
  def getCtorSymFromCtorLikeExpr = r match
    case Call(f, _) => f.asClsSymbol
    case Instantiate(cls, _) => cls.asClsSymbol
    case p: Path => p.asObjSymbol

