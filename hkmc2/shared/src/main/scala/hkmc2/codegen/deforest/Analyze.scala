package hkmc2
package codegen
package deforest

import semantics.*
import semantics.Elaborator.State
import syntax.{Literal, Tree}
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import scala.collection.mutable.LinkedHashMap
import Result.ResultId

final case class NotDeforestableException(msg: String) extends Exception(msg)

type StratVarId = Uid[StratVarState]

class StratVarState(val uid: StratVarId, val name: Str, val generatedForDef: Opt[BlockMemberSymbol]):
  lazy val asProdStrat = ProdVar(this)
  lazy val asConsStrat = ConsVar(this)
  override def toString(): String = s"${if name.isEmpty() then "var" else name}@${uid}"
object StratVarState:
  def freshVar(nme: String, generatedForDef: Opt[BlockMemberSymbol])(using vuid: Uid.StratVarNew.State) =
    val newId = vuid.nextUid
    StratVarState(newId, nme, generatedForDef)

// TODO: examine what info is really needed in the ctors
sealed abstract class ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat:
  lazy val asProdStrat = ProdVar(this.s)
  lazy val asConsStrat = ConsVar(this.s)
case class ProdFun(params: Ls[ConsStrat], res: ProdStrat) extends ProdStrat
case object NoProd extends ProdStrat
class Ctor(
  val exprId: ResultId,
  val instantiationId: Opt[Ls[ResultId]],
  val ctor: ClassLikeSymbol,
  val args: Ls[TermSymbol -> ProdStrat]) extends ProdStrat

sealed abstract class ConsStrat
case class ConsVar(s: StratVarState) extends ConsStrat
case class ConsFun(params: Ls[ProdStrat], res: ConsStrat) extends ConsStrat
case object NoCons extends ConsStrat
class FieldSel(
  val exprId: ResultId,
  val field: Tree.Ident,
  val consVar: ConsVar) extends ConsStrat:
    val filter = mutable.Map.empty[ProdVar, Ls[ClassLikeSymbol]].withDefaultValue(Nil)
    def updateFilter(p: ProdVar, c: Ls[ClassLikeSymbol]) =
      filter += p -> (c ::: filter(p))

class Dtor(
  val scrutExprId: ResultId,
  val instantiationId: Opt[Ls[ResultId]]) extends ConsStrat

class ProdStratScheme(s: StratVarState, constraints: Ls[ProdStrat -> ConsStrat]):
  def instantiate(referSite: ResultId)(using d: DeforestConstraintsCollector, cc: d.ConstraintsAndCacheHitCollector): ProdVar =
    val instantiatingFunSym = d.preAnalyzer.resultIdToResult(referSite) match
      case Value.Ref(l) => l.asBlkMember.get
      case s: Select => s.symbol.flatMap(_.asBlkMember).get
      case _ => die
    val stratVarMap = mutable.Map.empty[StratVarState, StratVarState]
    def duplicateVarState(s: StratVarState) =
      if s.generatedForDef.fold(false)(_ is instantiatingFunSym) then
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
        S(c.instantiationId.fold(referSite :: Nil)(l => referSite :: l)),
        c.ctor,
        c.args.map((a, b) => a -> duplicateProdStrat(b))
      )
    def duplicateConsStrat(c: ConsStrat): ConsStrat = c match
      case ConsVar(s) => duplicateVarState(s).asConsStrat
      case ConsFun(params, res) => ConsFun(params.map(duplicateProdStrat), duplicateConsStrat(res))
      case NoCons => NoCons
      case fSel: FieldSel =>
        val res = new FieldSel(fSel.exprId, fSel.field, duplicateVarState(fSel.consVar.s).asConsStrat)
        fSel.filter.foreach: (p, ls) =>
          res.updateFilter(duplicateVarState(p.s).asProdStrat, ls)
        res
      case dtor: Dtor => new Dtor(dtor.scrutExprId, S(dtor.instantiationId.fold(referSite :: Nil)(l => referSite :: l)))
    val newProd = duplicateVarState(s).asProdStrat
    constraints.foreach: (p, c) =>
      cc.constrain(duplicateProdStrat(p), duplicateConsStrat(c))
    newProd

class DeforestPreAnalyzer(b: Block) extends BlockTraverser:
  given stratVarUidState: Uid.StratVarNew.State = new Uid.StratVarNew.State
  import StratVarState.freshVar
  
  val resultIdToResult = mutable.Map.empty[ResultId, Result]
  val funSymToFun = mutable.Map.empty[BlockMemberSymbol, FunDefn]
  val matchScrutToMatchBlock = mutable.Map.empty[ResultId, Match]
  val matchScrutToParentMatchScruts = mutable.Map.empty[ResultId, Ls[ResultId]]
  val matchScrutInFunDef = mutable.Map.empty[ResultId, Opt[BlockMemberSymbol]]
  val selsToMatchingArms = mutable.Map.empty[ResultId, Ls[ResultId -> Opt[ClassLikeSymbol]]]
  val symToStratVar = mutable.Map.empty[Symbol, ProdVar]
  val usedFunSyms = mutable.Set.empty[BlockMemberSymbol]
  lazy val definedFunSyms = funSymToFun.keySet
  def getProdVarForSym(s: Symbol) = symToStratVar(s)
  def getFunDefnForSym(s: BlockMemberSymbol) = funSymToFun.get(s)
  
  private var inMatchScrutsArms: Ls[ResultId -> Opt[ClassLikeSymbol]] = Nil
  private def inMatchScruts = inMatchScrutsArms.unzip._1
  private var inFunDef: Opt[BlockMemberSymbol] = N
  override def applyFunDefn(fun: FunDefn): Unit =
    funSymToFun += fun.sym -> fun
    inFunDef match
      case N => inFunDef = S(fun.sym)
      case S(value) => throw NotDeforestableException("not expecting nested function definitions")
    super.applyFunDefn(fun)
    inFunDef = N
  
  override def applySymbol(s: Symbol): Unit = symToStratVar.updateWith(s):
    case N => S(freshVar(s.nme, inFunDef).asProdStrat)
    case S(x) => S(x)
  
  override def applyResult(r: Result): Unit =
    resultIdToResult += r.uid -> r
    super.applyResult(r)
  
  override def applyPath(p: Path): Unit =
    resultIdToResult += p.uid -> p
    p match
      case s@Select(path, nme) => selsToMatchingArms += s.uid -> inMatchScrutsArms
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
  given stratVarUidState: Uid.StratVarNew.State = preAnalyzer.stratVarUidState
  import StratVarState.freshVar
  
  class ConstraintsAndCacheHitCollector(val forFun: Opt[BlockMemberSymbol]):
    var constraints: Ls[ProdStrat -> ConsStrat] = Nil
    var cacheHit: Ls[BlockMemberSymbol] = Nil // TODO: a better name to say it actually get the symbol of funs in a recursive group
    private def check(p: ProdStrat): Unit = p match
      case ProdVar(s) => check(s)
      case _ => ()
    private def check(c: ConsStrat): Unit = c match
      case ConsVar(s) => check(s)
      case _ => ()
    private def check(s: StratVarState): Unit = (s.generatedForDef, forFun) match
      case (N, N) => ()
      case (S(s1), S(s2)) => assert(s1 is s2)
      case _ => die
    def constrain(p: ProdStrat, c: ConsStrat) =
      check(p)
      check(c)
      constraints ::= p -> c
    def constrain(cs: Ls[ProdStrat -> ConsStrat]) =
      cs.foreach: (p, c) =>
        check(p)
        check(c)
      constraints :::= cs
    def hit(s: BlockMemberSymbol) = cacheHit ::= s
    def hit(ss: Ls[BlockMemberSymbol]) = cacheHit :::= ss
  
  object funSymToProdStratScheme:
    val store = mutable.Map.empty[BlockMemberSymbol, ProdStratScheme]
    def getOrUpdate(s: BlockMemberSymbol)(using processingDefs: Ls[BlockMemberSymbol], cc: ConstraintsAndCacheHitCollector): ProdVar | ProdStratScheme =
      preAnalyzer.getFunDefnForSym(s) match
        // not a fun defined in the current block, just return its prodvar
        case None => preAnalyzer.getProdVarForSym(s)
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
                (s :: newcc.cacheHit).foreach: f =>
                  store.getOrElseUpdate(f, ProdStratScheme(preAnalyzer.getProdVarForSym(f).s, newcc.constraints))
                store(s)
            case _ => die // die if something occurs twice in the processing list
  
  def processTopLevel(b: Block): Ls[ProdStrat -> ConsStrat] =
    val cc = new ConstraintsAndCacheHitCollector(N)
    val strat = processBlock(b)(using Nil, cc)
    cc.constrain(strat, NoCons)
    // TODO: for used but not defined fun syms, constrain them with NoProd
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
  
  // returns the cache-hit set of function symbols
  def processBlock(b: Block)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat = b match
    case m@Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      cc.constrain(scrutStrat, new Dtor(scrut.uid, N))
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
          val matchRes = freshVar("", processingDefs.headOption)
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
        case f: FunDefn => () // skip as toplevel fundefs are processed when needed
        case v: ValDefn => throw NotDeforestableException("No support for `ValDefn` yet")
        case c: ClsLikeDefn => throw NotDeforestableException("No support for `ClsLikeDefn` yet")
      processBlock(rest)
    case End(msg) => NoProd
    // make it a type var instead of `NoProd` so that things like `throw match error` in
    // default else branches do not block fusion...
    case Throw(exc) =>
      processResult(exc)
      freshVar("throw", processingDefs.headOption).asProdStrat

  
  def processResult(r: Result)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat =
    val generatedForDef = processingDefs.headOption
    def handleCallLike(f: Path, args: Ls[Path], c: Result): ProdStrat =
      val argsTpe = args.map(processResult)
      f match
        case s@Select(p, nme) =>
          s.symbol.map(_.asCls) match
            case None =>
              val pStrat = processResult(p)
              val tpeVar = freshVar("", generatedForDef)
              cc.constrain(pStrat, new FieldSel(s.uid, nme, tpeVar.asConsStrat))
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
              new Ctor(c.uid, N, s, clsFields.zip(argsTpe))
        case Value.Ref(funSym) =>
          funSym.asCls match
            case Some(s) =>
              val clsFields = s.tree.clsParams
              new Ctor(c.uid, N, s, clsFields.zip(argsTpe))
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
        case Value.Lit(lit) => ???
        case Value.Arr(elems) => ???
    r match
    case c@Call(f, args) => handleCallLike(f, args.map {case Arg(false, value) => value}, c)
    case i@Instantiate(cls, args) => handleCallLike(cls, args, i)
    case sel@Select(p, nme) => sel.symbol match
      case Some(s) if s.asObj.isDefined => new Ctor(sel.uid, N, s.asObj.get, Nil)
      case _ => 
        val pStrat = processResult(p)
        pStrat match
          case ProdVar(pStratVar) =>
            val inMatchingArm = preAnalyzer.selsToMatchingArms(sel.uid).flatMap:
              case (scrutUid, S(inArm)) =>
                preAnalyzer.matchScrutToMatchBlock(scrutUid).scrut match
                  case Value.Ref(l) =>
                    S(preAnalyzer.getProdVarForSym(l) -> inArm)
                  case _ => N
              case _ => N
            val tpeVar = freshVar("sel_res", generatedForDef)
            val selStrat = new FieldSel(sel.uid, nme, tpeVar.asConsStrat)
            inMatchingArm.foreach: (p, c) =>
              selStrat.updateFilter(p, c :: Nil)
            cc.constrain(pStrat, selStrat)
            tpeVar.asProdStrat
          case _ =>
            val tpeVar = freshVar("sel_res", generatedForDef)
            cc.constrain(pStrat, new FieldSel(sel.uid, nme, tpeVar.asConsStrat))
            tpeVar.asProdStrat
                
    case v@Value.Ref(l) => l.asObj match
      case None => preAnalyzer.getProdVarForSym(l)
      case Some(m) => new Ctor(v.uid, N, m, Nil)
    
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
  
class DeforestConstrainSolver()