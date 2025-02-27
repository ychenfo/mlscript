package hkmc2
package codegen

import semantics.*
import semantics.Elaborator.State
import syntax.{Literal, Tree}
import utils.{TL, tl, SymbolSubst}
import mlscript.utils.*, shorthands.*
import scala.collection.mutable

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

object StratVarState:
  
  def freshVar(nme: String = "")(using vuid: Uid.Handler[StratVar]#State) =
    val newId = vuid.nextUid
    val s = StratVarState(newId, nme)
    val p = s.asProdStrat
    val c = s.asConsStrat
    p -> c


type CtorExpr = ResultId
// enum ProdStrat:
case class Ctor(ctor: ClsOrModSymbol, args: Map[TermSymbol, ProdStrat], expr: CtorExpr) extends ProdStrat
case class ProdFun(l: Ls[ConsStrat], r: ProdStrat) extends ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat with StratVarTrait(s)
case object NoProd extends ProdStrat


// enum ConsStrat:
case class Dtor(scrut: ResultId)(val expr: Match)(using d: Deforest) extends ConsStrat:
  assert(scrut === expr.scrut.uid)
  d.matchScrutToMatchBlock.updateWith(scrut):
    case None => Some(expr)
    case Some(exist) => ??? // should only update once

case class FieldSel(field: Tree.Ident, consVar: ConsVar)(val expr: ResultId, val inMatching: Opt[ResultId]) extends ConsStrat with FieldSelTrait
case class ConsFun(l: Ls[ProdStrat], r: ConsStrat) extends ConsStrat
case class ConsVar(s: StratVarState) extends ConsStrat with StratVarTrait(s)
case object NoCons extends ConsStrat


enum DtorExpr:
  case Match(s: ResultId)
  case Sel(s: ResultId)

enum CtorFinalDest:
  case Match(scrut: ResultId, expr: codegen.Match, selInArms: Ls[ResultId])
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

extension (m: Match)
  def mergeArms: Match =
    val Match(s, arms, dflt, rest) = m
    dflt.map(_.mergeMatchArms).fold(m):
      case m@Match(s2, arms2, dflt2, _: End) if s2 === s =>
        Match(
          s,
          (arms ::: arms2).map((cse, b) => (cse, b.mergeMatchArms)),
          dflt2,
          rest.mergeMatchArms
        )
      case d => Match(
        s,
        arms.map((cse, b) => (cse, b.mergeMatchArms)),
        S(d),
        rest.mergeMatchArms
      )

extension (b: Block)
  def replaceSymbols(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) =
    object ReplaceLocalSymTransformer extends BlockTransformer(new SymbolSubst()):
      // FIXME: depends on my hacky change (d4358d7) to blocktransformer to work...
      override def applyLocal(sym: Local): Local = freeVarsAndTheirNewSyms.getOrElse(sym, sym)
    ReplaceLocalSymTransformer.applyBlock(b)

  def sortedFvs(using alwaysDefined: Set[Symbol]) = (b.freeVars -- b.definedVars -- alwaysDefined).filterNot(v => v.asClsLike.isDefined).toList.sortBy(_.uid)

  def replaceSelect(using ss: Set[ResultId], args: Map[Tree.Ident, Value.Ref]): Block =
    object ReplaceSelectTransformer extends BlockTransformer(new SymbolSubst()):
      override def applyPath(p: Path): Path = p match
        case s@Select(_, nme) if ss(s.uid) => args(nme)
        case _ => p
    ReplaceSelectTransformer.applyBlock(b)
  
  def hasExplicitRet: Boolean =
    object HasExplicitRetTransformer extends BlockTransformerShallow(new SymbolSubst()):
      var flag = false
      override def applyBlock(b: Block): Block = b match
        case Return(_, imp) => flag = !imp; b
        case Define(defn, rest) => applyBlock(rest)
        case _ => super.applyBlock(b)
      override def applyResult(r: Result): Result = r
    
    HasExplicitRetTransformer.applyBlock(b)
    HasExplicitRetTransformer.flag
  
  
  def mergeMatchArms: Block =
    object MergeMatchArmTransformer extends BlockTransformer(new SymbolSubst()):
      override def applyBlock(b: Block): Block = b match
        case m: Match => m.mergeArms
        case _ => super.applyBlock(b)
    MergeMatchArmTransformer.applyBlock(b)
  
  def flattened = b.flatten(identity)
      
  private def flatten(k: End => Block): Block = b match
    case Match(scrut, arms, dflt, rest) =>
      val newRest = rest.flatten(k)
      val newArms = arms.mapConserve: arm =>
        val newBody = arm._2.flattened
        if newBody is arm._2 then arm else (arm._1, newBody)
      val newDflt = dflt.map(_.flattened)
      if (newRest is rest) && (newArms is arms) && (dflt is newDflt)
      then b
      else Match(scrut, newArms, newDflt, newRest)

    case Label(label, body, rest) =>
      val newBody = body.flattened
      val newRest = rest.flatten(k)
      if (newBody is body) && (newRest is rest)
      then b
      else Label(label, newBody, newRest)
      
    case Begin(sub, rest) =>
      sub.flatten(_ => rest.flatten(k))
    
    case TryBlock(sub, finallyDo, rest) =>
      val newSub = sub.flattened
      val newFinallyDo = finallyDo.flattened
      val newRest = rest.flatten(k)
      if (newSub is sub) && (newFinallyDo is finallyDo) && (newRest is rest)
      then b
      else TryBlock(newSub, newFinallyDo, newRest)
      
    case Assign(lhs, rhs, rest) =>
      val newRest = rest.flatten(k)
      if newRest is rest
      then b
      else Assign(lhs, rhs, newRest)
      
    case a@AssignField(lhs, nme, rhs, rest) =>
      val newRest = rest.flatten(k)
      if newRest is rest
      then b
      else AssignField(lhs, nme, rhs, newRest)(a.symbol)
      
    case AssignDynField(lhs, fld, arrayIdx, rhs, rest) =>
      val newRest = rest.flatten(k)
      if newRest is rest
      then b
      else AssignDynField(lhs, fld, arrayIdx, rhs, newRest)
    
    case Define(defn, rest) =>
      val newDefn = defn match
        case d: FunDefn =>
          val newBody = d.body.flattened
          if newBody is d.body
          then d
          else d.copy(body = newBody)
        case v: ValDefn => v
        case c: ClsLikeDefn =>
          val newPreCtor = c.preCtor.flattened
          val newCtor = c.ctor.flattened
          if (newPreCtor is c.preCtor) && (newCtor is c.ctor)
          then c
          else c.copy(preCtor = newPreCtor, ctor = newCtor)
      
      val newRest = rest.flatten(k)
      if (newDefn is defn) && (newRest is rest)
      then b
      else Define(newDefn, newRest)
    
    case HandleBlock(lhs, res, par, args, cls, handlers, body, rest) =>
      val newHandlers = handlers.mapConserve: h =>
        val newBody = h.body.flattened
        if newBody is h.body then h else h.copy(body = newBody)
      val newBody = body.flattened
      val newRest = rest.flatten(k)
      if (newHandlers is handlers) && (newBody is body) && (newRest is rest)
      then b
      else HandleBlock(lhs, res, par, args, cls, newHandlers, newBody, newRest)

    case e: End => k(e)
    case t: BlockTail => b
  

class Deforest(using TL, Raise, Elaborator.State):
  
  object StratVarUidHandler extends Uid.Handler[StratVar]()
  given Uid.Handler[StratVar]#State = StratVarUidHandler.State()
  import StratVarState.freshVar
  
  def apply(p: Program) =
    val flattenP = p.main.flattened
    val mergedArms = flattenP.mergeMatchArms
  
    globallyDefinedVars.init(mergedArms)
    
    // allocate type vars for defined symbols in the blocks
    symToStrat.init(mergedArms)
  
    processBlock(mergedArms)
    resolveConstraints

    tl.log("upper:")
    upperBounds.foreach(u => tl.log("\t" + u))
    tl.log("lower:")
    lowerBounds.foreach(l => tl.log("\t" + l))
    tl.log("-----------------------------------------")
    
    // tl.log("ctor -> dtor:")
    // ctorDests.foreach(l => tl.log("\t" + l._1.toString() + " ===> " + l._2.size))
    // tl.log("dtor -> ctor:")
    // dtorSources.foreach(l => tl.log("\t" + l._1.toString().take(20) + " ===> " + l._2.toString().take(20)))
    
    tl.log("ctor -> dtor")
    resolveClashes._1.foreach(u => tl.log("\t" + u))
    tl.log("dtor -> ctor")
    resolveClashes._2.foreach(l => tl.log("\t" + l))
    
    Program(
      p.imports,
      rewrite(mergedArms)
    )
  
  // these are never considered as free vars (because of their symbol type)
  // currently cannot distinguish toplevel `let` and function params (both are varsymbol)
  // so toplevel `let`s are not considered globally defined vars for now...
  object globallyDefinedVars:
    val store = mutable.Set.empty[Symbol]
    
    def apply(s: Symbol) = store.contains(s)
    
    def init(b: Block) =
      object Subst extends SymbolSubst:
        // only consider block member symbols as globally defined
        override def mapBlockMemberSym(s: BlockMemberSymbol): BlockMemberSymbol =
          store += s; s
        override def mapBuiltInSym(s: BuiltinSymbol): BuiltinSymbol =
          store += s; s
      
      object FreshVarForAllVars extends BlockTransformer(Subst)
      FreshVarForAllVars.applyBlock(b)
  
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  
  val matchScrutToMatchBlock = mutable.Map.empty[ResultId, Match]
  object symToStrat:
    val store = mutable.Map.empty[Symbol, ProdVar]
    
    def init(p: Block) =
      if store.isEmpty then
        object AllVarsSymbolSubst extends SymbolSubst:
          override def mapBlockMemberSym(s: BlockMemberSymbol): BlockMemberSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapFlowSym(s: FlowSymbol): FlowSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapTempSym(s: TempSymbol): TempSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapVarSym(s: VarSymbol): VarSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapInstSym(s: InstSymbol): InstSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapTermSym(s: TermSymbol): TermSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapClsSym(s: ClassSymbol): ClassSymbol =
            store += s -> freshVar(s.nme)._1; s
          override def mapModuleSym(s: ModuleSymbol): ModuleSymbol =
            store += s -> freshVar(s.nme)._1; s
        object FreshVarForAllVars extends BlockTransformer(AllVarsSymbolSubst)
        FreshVarForAllVars.applyBlock(p)
    
    // currently, symbols that shouldn't be read from ctx are symbols for ctors (class/object) blkMem symbols
    // TODO: ctor as a function?
    def getStratOfSym(s: Symbol) =
      s match
        case _: BuiltinSymbol => NoProd
        case _: TopLevelSymbol => NoProd
        case _: BlockMemberSymbol => store.getOrElse(s, {tl.log(s"${s.nme} no strat"); NoProd}) // For `fun` and `let` only, not classes or modules?
        case _: LocalSymbol => store.getOrElse(s, NoProd)
        case _: FlowSymbol => store(s)
    def get(s: Symbol) = store.get(s)
    def +=(e: Symbol -> ProdVar) = store += e
    def addAll(es: Iterable[Symbol -> ProdVar]) = es.foreach(store += _)
    def apply(s: Symbol) = store(s)
  
  def getClsFields(s: ClassSymbol) = s.tree.clsParams

  
  
  def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
  
  def processBlock(b: Block)(using
    inArm: Map[ProdVar, ClsOrModSymbol] = Map.empty[ProdVar, ClsOrModSymbol],
    matching: Opt[ResultId] = None
  ): ProdStrat = b match
    case m@Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      constrain(scrutStrat, Dtor(scrut.uid)(m)(using this))
      val armsRes = if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        arms.map { case (Case.Cls(s, _), body) => 
          // TODO: fix this "asInstanceOf"?
          processBlock(body)(using inArm + (scrutStrat.asInstanceOf[ProdVar] -> s), Some(scrut.uid))
        }
      else
        arms.map{ case (_, armBody) => processBlock(armBody) }
      // TODO: dflt?
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
      symToStrat.get(lhs) match
        // case None =>
        //   val lhsTpeVar = freshVar(lhs.nme)
        //   constrain(processResult(rhs), lhsTpeVar._2)
        //   symToStrat += lhs -> lhsTpeVar._1
        case Some(v) =>
          constrain(processResult(rhs), v.asConsStrat)
      processBlock(rest)
    case Begin(sub, rest) =>
      processBlock(sub)
      processBlock(rest)
    case Define(defn, rest) =>
      defn match
        case FunDefn(_, sym, params, body) =>
          // val funSymStratVar = freshVar(sym.nme)
          // symToStrat += sym -> funSymStratVar._1
          val funSymStratVar = symToStrat(sym)
          val param = params.head match
            case ParamList(flags, params, restParam) => params
          val funStrat = constrFun(param, body) // TODO: handle mutiple param list
          constrain(funStrat, funSymStratVar.asConsStrat)
          funSymStratVar
        case ValDefn(owner, k, sym, rhs) => NoProd // TODO:
        case c: ClsLikeDefn if c.sym.asMod.isDefined =>
          c.methods.foreach{ case FunDefn(_, sym, params, body) => 
            val funSymStratVar = freshVar(sym.nme)
            symToStrat += sym -> funSymStratVar._1
            val param = params.head match
              case ParamList(flags, params, restParam) => params
            val funStrat = constrFun(param, body) // TODO: handle mutiple param list
            constrain(funStrat, funSymStratVar._2)
            funSymStratVar._1
          }
          processBlock(c.ctor)
        case _ => ??? // TODO:
      processBlock(rest)
    case End(msg) => NoProd
    case Throw(exc) => NoProd
    case AssignField(lhs, nme, rhs, rest) => ???
    case Label(label, body, rest) => ???
    case Break(label) => ???
    case Continue(label) => ???
    case TryBlock(sub, finallyDo, rest) => ???
  
  def constrFun(params: Ls[Param], body: Block)(using
    inArm: Map[ProdVar, ClsOrModSymbol],
    matching: Opt[ResultId]
  ) =
    val paramSyms = params.map{ case Param(_, sym, _) => sym }
    val paramStrats = paramSyms.map{ sym => symToStrat(sym) }
    symToStrat.addAll(paramSyms.zip(paramStrats))
    val res = freshVar()
    constrain(processBlock(body), res._2)
    ProdFun(paramStrats.map(s => s.asConsStrat), res._1)
  
  def processResult(r: Result)(using
    inArm: Map[ProdVar, ClsOrModSymbol],
    matching: Opt[ResultId]
  ): ProdStrat = r match
    case c@Call(f, args) =>
      val argsTpe = args.map { case Arg(false, value) => 
        processResult(value)
      }
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
          
        case Value.This(sym) => ???
        case Value.Lit(lit) => ???
        case Value.Arr(elems) => ???

    case Instantiate(cls, args) =>
      // TODO:
      freshVar()._1

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
        
        // if inArm.contains(pStrat) then
        //   // assert(sel.symbol.exists(_.isInstanceOf[TermSymbol]))
        //   val tpeVar = freshVar()
        //   val selStrat = FieldSel(nme, tpeVar._2)(sel.uid)
        //   selStrat.updateFilter(pStrat, inArm(pStrat) :: Nil)
        //   constrain(pStrat, selStrat)
        //   tpeVar._1
        // else
        //   val tpeVar = freshVar()
        //   constrain(pStrat, FieldSel(nme, tpeVar._2)(sel.uid))
        //   tpeVar._1
            
    case v@Value.Ref(l) => l.asObj match
      case None => symToStrat.getStratOfSym(l)
      case Some(m) => Ctor(m, Map.empty, v.uid)
    
    case Value.This(sym) => ???
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      constrFun(params, body)
    case Value.Arr(elems) => ???
  
  
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  
  case class CtorDest(matches: Map[ResultId, Match], sels: Ls[FieldSel])
  
  object ctorDests:
    val ctorDests = mutable.Map.empty[ResultId, CtorDest].withDefaultValue(CtorDest(Map.empty, Nil))
    def update(ctor: CtorExpr, m: Match) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels)) => Some(CtorDest(matches + (m.scrut.uid -> m), sels))
      case None => Some(CtorDest(Map(m.scrut.uid -> m), Nil))
    def update(ctor: CtorExpr, s: FieldSel) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels)) => Some(CtorDest(matches, s :: sels))
      case None => Some(CtorDest(Map.empty, s :: Nil))
    def get(ctor: CtorExpr) = ctorDests.get(ctor)
  
  object dtorSources:
    val dtorSources = mutable.Map.empty[DtorExpr, Ls[ResultId]].withDefaultValue(Nil)
    private def getDtorExprOfResultId(i: ResultId) = ResultUid(i) match
      case s: Select => DtorExpr.Sel(i)
      case r: Value.Ref => DtorExpr.Match(i)
      case _ => ??? // unreachable
    def update(dtor: ResultId, ctor: ResultId) =
      val dtorExpr = getDtorExprOfResultId(dtor)
      dtorSources += dtorExpr -> (ctor :: dtorSources(dtorExpr))
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
          // if clsSym.isDefined then
          //   args.get(clsSym.get).map(p => handle(p -> consVar))
          // else  
          ctorDests.update(expr, selDtor)
          dtorSources.update(selDtor.expr, expr)
          args.find(a => a._1.id == field).map(p =>
            // rewritingSel.add(sel)
            handle(p._2 -> consVar)
          )
        case (Ctor(ctor, args, _), ConsFun(l, r)) => ???
        
        case (p: ProdVar, _) =>
          upperBounds += p.uid -> (cons :: upperBounds(p.uid))
          lowerBounds(p.uid).foreach{ l =>
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
          }
        case (_, c: ConsVar) =>
          lowerBounds += c.uid -> (prod :: lowerBounds(c.uid))
          upperBounds(c.uid).foreach { u =>
            (prod, u) match
              case (Ctor(ctor, args, _), sel@FieldSel(field, consVar)) =>
                if sel.filter.get(c.asProdStrat).forall(_.contains(ctor)) then
                  handle(prod -> u)
                else
                  ()
              case (_: ProdVar, _) => ??? // unreachable, should be handled above
              case _ => handle(prod -> u)
          }
          // upperBounds(uid).foreach(c => handle(prod -> c))
        case (Ctor(ctor, args, _), NoCons) => ()
        case (ProdFun(l, r), Dtor(cls)) => ???
        case (ProdFun(l, r), FieldSel(field, consVar)) => ???
        case (ProdFun(lp, rp), ConsFun(lc, rc)) =>
          lc.zip(lp).foreach(handle)
          handle(rp, rc)
        case (ProdFun(l, r), NoCons) => ()
        case (NoProd, Dtor(cls)) => ()
        case (NoProd, FieldSel(field, consVar)) => ()
        case (NoProd, ConsFun(l, r)) => ()
        case (NoProd, NoCons) => ()
      
    constraints.foreach(c => handle(c)(using mutable.Set.empty))
  
  
  // ======== after resolving constraints ======
  
  def handleCtors[A](c: ResultId, k: (ResultId, Select | Value.Ref, ClsOrModSymbol, Ls[Arg]) => A): Opt[A] =
    ResultUid(c) match
      case Call(fun, args) => fun match
        case s: Select if s.symbol.flatMap(_.asCls).isDefined =>
          Some(k(c, s, s.symbol.get.asCls.get, args))
        case v: Value.Ref if v.l.asCls.isDefined =>
          Some(k(c, v, v.l.asCls.get, args))
        case _ => None
      case s: Select if s.symbol.flatMap(_.asObj).isDefined =>
        Some(k(c, s, s.symbol.get.asObj.get, Nil))
      case v: Value.Ref if v.l.asObj.isDefined =>
        Some(k(c, v, v.l.asObj.get, Nil))
      case _ => None
  
  def getClsSymOfUid(c: CtorExpr): ClsOrModSymbol =
    handleCtors(c, (_, _, s, _) => s).get
    
  
  lazy val resolveClashes =
    type CtorToDtor = Map[CtorExpr, CtorDest]
    type DtorToCtor = Map[DtorExpr, Ls[CtorExpr]]
    
    def removeCtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[CtorExpr]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newCtorDests, toDelete) = ctorDests.partition(c => !rm(c._1))
        removeDtor(newCtorDests, dtorSources, toDelete.values.flatMap[DtorExpr]{ case CtorDest(mat, sels) =>
          mat.keySet.map(s => DtorExpr.Match(s)) ++ sels.map(s => DtorExpr.Sel(s.expr))
        }.toSet)
    
    def removeDtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[DtorExpr]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newDtorSources, toDelete) = dtorSources.partition(d => !rm(d._1))
        removeCtor(ctorDests, newDtorSources, toDelete.values.flatten.toSet)
    
    val ctorToDtor = ctorDests.ctorDests.toMap
    val dtorToCtor = dtorSources.dtorSources.toMap
    
    val removeClashes = removeCtor(
      ctorToDtor,
      dtorToCtor,
      ctorToDtor.filterNot { case _ -> CtorDest(dtors, sels) =>
        (dtors.size == 0 && sels.size == 1)
        || (dtors.size == 1 && {
          val scrutRef@Value.Ref(scrut) = ResultUid(dtors.head._1)
          sels.forall { s => ResultUid(s.expr) match
            case Select(Value.Ref(l), nme) => (l === scrut) && s.inMatching.contains(scrutRef.uid) // need to be in the matching arms, and checking the scrutinee
            case _ => false }
        })
      }.keySet
    )
    
    val removeCycle = {
      def getCtorInArm(ctor: CtorExpr, dtor: Match): Set[CtorExpr] =
        val ctorSym = getClsSymOfUid(ctor)
        val arm = dtor.arms.find{ case (Case.Cls(c1, _) -> body) => c1 === ctorSym }.get._2
        
        object GetCtorsTransformer extends BlockTransformer(new SymbolSubst()):
          val ctors = mutable.Set.empty[ResultId]
          override def applyResult(r: Result): Result =
            handleCtors(
              r.uid,
              (id, f, clsOrMod, args) =>
                ctors += id
                args.foreach { case Arg(_, value) => applyResult(value) }
            ) match
              case Some(_) => r
              case None => r match
                case Call(_, args) =>
                  args.foreach { case Arg(_, value) => applyResult(value) }; r
                case Instantiate(cls, args) =>
                  args.foreach(applyResult); r
                case _ => r
  
        GetCtorsTransformer.applyBlock(arm)
        GetCtorsTransformer.ctors.toSet
      
      def findCycle(ctor: CtorExpr, dtor: Match): Set[CtorExpr] =
        val cache = mutable.Set(ctor)
        def go(ctorAndMatches: Set[CtorExpr -> Match]): Set[CtorExpr] =
          val newCtorsAndNewMatches =
            ctorAndMatches.flatMap((c, m) => getCtorInArm(c, m)).flatMap: c =>
              removeClashes._1.get(c).flatMap:
                case CtorDest(matches, sels) => matches.values.headOption.map(m => c -> m)
          val cycled = newCtorsAndNewMatches.filter(c => !cache.add(c._1))
          if newCtorsAndNewMatches.isEmpty then
            Set.empty
          else if cycled.nonEmpty then
            cycled.map(_._1)
          else
            go(newCtorsAndNewMatches)
        go(Set(ctor -> dtor))
      
      val toRmCtor = removeClashes._1.flatMap:
        case (c, CtorDest(matches, sels)) => 
          assert(matches.size <= 1)
          matches.values.flatMap(m => findCycle(c, m))
      
      removeCtor(removeClashes._1, removeClashes._2, toRmCtor.toSet)
    }

    val finalRes = removeCycle
    finalRes
    
  
  
  lazy val filteredCtorDests: Map[CtorExpr, CtorFinalDest] =
    val res = mutable.Map.empty[CtorExpr, CtorFinalDest]
    resolveClashes._1.foreach { case (ctor, CtorDest(dtors, sels)) =>
      val filteredDtor = {
        if dtors.size == 0 && sels.size == 1 then Some(CtorFinalDest.Sel(sels.head.expr))
        else if dtors.size == 0 && sels.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size == 1 then
          val scrutRef@Value.Ref(scrut) = ResultUid(dtors.head._1)
          if sels.forall{ s => ResultUid(s.expr) match
            case Select(Value.Ref(l), nme) => (l === scrut) && s.inMatching.contains(scrutRef.uid)
            case _ => false
          } then
            Some(CtorFinalDest.Match(dtors.head._1, dtors.head._2, sels.map(_.expr)))
          else
            throw Error("more than one consumer")
            None
        else ???
      }
      res.updateWith(ctor){_ => filteredDtor}
    }
    res.toMap
  
  lazy val rewritingSelConsumer = filteredCtorDests.values.flatMap {
    case CtorFinalDest.Match(_, _, sels) => None
    case CtorFinalDest.Sel(s) => Some(s)
  }.toSet
  
  lazy val filteredDtors = filteredCtorDests.values.collect {
    case CtorFinalDest.Match(scrut, _, _) => scrut
  }.toSet
  
  lazy val scopeExtrusionInfo: Map[ResultId, List[Symbol]] =
    resolveClashes._2.keys.flatMap{
      case DtorExpr.Match(s) =>
        val Match(scrut, arms, dflt, rest) = matchScrutToMatchBlock(s)
        val fvsInallBodiesAndRest = (rest :: arms.map(_._2).appendedAll(dflt)).flatMap(b => b.sortedFvs(using globallyDefinedVars.store.toSet))
        // NOTE: doesn't intersect with defined vars in dflt because it may be only `throw error`
        val definedInAllArms = arms.map(_._2.definedVars).reduce((a, b) => a.intersect(b))
        Some(s -> fvsInallBodiesAndRest.filterNot(a => (a.uid == scrut.l.uid) || definedInAllArms.contains(a)).distinct.sortBy(_.uid))
      case DtorExpr.Sel(s) => None
    }.toMap
      
  
  def rewrite(p: Block) =
    val deforestTransformer = DeforestTransformer(using globallyDefinedVars.store.toSet)
    val rest = deforestTransformer.applyBlock(p)
    val newDefs = deforestTransformer.matchRest.getAllFunDefs
    newDefs(rest)
  
  class DeforestTransformer(using nonFreeVars: Set[Symbol]) extends BlockTransformer(new SymbolSubst()):
    
    override def applyBlock(b: Block): Block = b match
      case mat@Match(scrut, arms, dflt, rest) =>
        if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } && filteredDtors.contains(scrut.uid) then
          val needExplicitRet = rest.hasExplicitRet || arms.exists(_._2.hasExplicitRet)
          val freeVars = scopeExtrusionInfo(scrut.uid).map(v => Arg(false, Value.Ref(v)))
            // val definedInAllArms = arms.map(_._2.definedVars).fold(arms.head._2.definedVars)((a, b) => a.intersect(b))
            // val res = (arms.flatMap(_._2.sortedFvs) ::: dflt.fold(Nil)(_.sortedFvs) ::: rest.sortedFvs).distinct
            // res.filterNot(
            //     v =>
            //       val isScrut = v == scrut.l
            //       isScrut || definedInAllArms.contains(v) // TODO: shouldn't intersect with dflt since it just throws Error? 
            //   ) // not scrut (which will be selected on, or those defined in arms or dflt, but later refered to in the rest)
            //   .sortBy(_.uid)
            //   .map(v => Arg(false, Value.Ref(v)))
          Return(Call(scrut, freeVars)(false, false), !needExplicitRet)
        else
          Match(scrut, arms.map{ (cse, blk) => (cse, applyBlock(blk)) }, dflt.map(applyBlock), applyBlock(rest))
      case Return(res, implct) =>
        applyResult2(res)(r => Return(r, implct))
      case Assign(lhs, rhs, rest) =>
        applyResult2(rhs)(r => Assign(lhs, r, applyBlock(rest)))
      case d@Define(defn, rest) =>
        defn match
          case FunDefn(o, sym, params, body) => Define(FunDefn(o, sym, params, applyBlock(body)), applyBlock(rest))
          case _ => super.applyBlock(d)
      case End(msg) => End(msg)
      case Throw(exc) => applyResult2(exc)(Throw.apply)
      
      case _ => super.applyBlock(b)
      // case AssignField(lhs, nme, rhs, rest) => ???
      // case Label(label, body, rest) => ???
      // case Break(label) => Break(label)
      // case Continue(label) => ???
      // case TryBlock(sub, finallyDo, rest) => ???
    
    def makeLambda(body: Block, freeVarsAndTheirNewSyms: Map[Symbol, VarSymbol]) =
      val bodyFlattened = body.flattened // otherwise mapTail to make all return explicit may not work
      val newBody = bodyFlattened.replaceSymbols(freeVarsAndTheirNewSyms)
      Value.Lam(
        ParamList(ParamListFlags.empty, freeVarsAndTheirNewSyms.values.map(s => Param(FldFlags.empty, s, N)).toList, N),
        newBody.mapTail:
          case Return(res, implct) => Return(res, false)
          case t => t
      )
    
    def setupBodyAndRest(body: Block, rest: Block, scrut: ResultId, sel: Set[ResultId], selMap: Map[Tree.Ident, Value.Ref]) =
      val rewrittenBody = applyBlock(body).replaceSelect(using sel, selMap)
      val rewrittenRest = applyBlock(rest) // TODO: avoid rewriting it more than once
      // should first rewrite, then replace symbol, otherwise the exprids will change?
      val freeVarsAndTheirNewSyms = scopeExtrusionInfo(scrut).map(s => s -> VarSymbol(Tree.Ident(s.nme))).toMap
        // (rewrittenBody.sortedFvs ::: rewrittenRest.sortedFvs)
        //   .distinct
        //   .map(s => s -> VarSymbol(Tree.Ident(s.nme)))
        //   .filterNot(x => selMap.valuesIterator.map(v => v.l).contains(x._1) || rewrittenBody.definedVars(x._1))
        //   .toMap
      val restFunOrRestBlock = matchRest.getOrElse(scrut, rewrittenRest)
      val lambdaBody = restFunOrRestBlock match
        case None => 
          Begin(rewrittenBody, rewrittenRest)
        case Some(f) =>
          Begin(
            rewrittenBody,
            Return(
              Call(
                Value.Ref(f),
                rewrittenRest.sortedFvs.map(a => Arg(false, Value.Ref(a))))(true, false),
              false
            )
          )
      makeLambda(lambdaBody, freeVarsAndTheirNewSyms)  
      
    
    object matchRest:
      val store = mutable.Map.empty[ResultId, FunDefn]
      
      def getOrElse(s: ResultId, restRewritten: Block): Opt[Symbol] =
        store.get(s) match
          case Some(s) => Some(s.sym)
          case None if restRewritten.isInstanceOf[End] || (resolveClashes._2(DtorExpr.Match(s)).length == 1) => None
          case _ => // now need to build a new function and update the store
            val scrutName = ResultUid(s).asInstanceOf[Value.Ref].l.nme
            val sym = BlockMemberSymbol(s"match_${scrutName}_rest", Nil)
            val freeVarsAndTheirNewSyms = restRewritten.sortedFvs.map(s => s -> VarSymbol(Tree.Ident(s.nme))).toMap
            
            val newFunDef = FunDefn(
              N,
              sym,
              ParamList(ParamListFlags.empty, freeVarsAndTheirNewSyms.values.map(s => Param(FldFlags.empty, s, N)).toList, N) :: Nil,
              restRewritten.replaceSymbols(freeVarsAndTheirNewSyms)
            )
            store += s -> newFunDef
            Some(sym)
      
      def getAllFunDefs: Block => Block =
        store.values.foldRight(identity: Block => Block): (defn, k) =>
          r => Define(defn, k(r))
      
    
    override def applyResult2(r: Result)(k: Result => Block): Block = r match
      case call@Call(f, args) =>
        def handleNormalCall(args: List[Arg]) =
          var newArgs: Ls[Arg] = Nil
          args.foreach:
            case Arg(spread, value) => applyResult2(value): r =>
              // since the arguments must be paths,
              // and calls with parameters are not paths,
              // so paths will always be rewritten to paths,
              // and there won't be more blocks added by `applyResult2(value)`
              // so just use a dummy `End` here, to use `applyResult2` as `applyResult`
              newArgs = Arg(spread, r.asInstanceOf[Path]) :: newArgs
              End()
          k(Call(f, newArgs.reverse)(call.isMlsFun, call.mayRaiseEffects))
          
        def handleCtorCall(c: ClassSymbol) =
          // assert(ctorDests(call).size == 1, s"$call has more than one destination")
          filteredCtorDests.get(call.uid) match
            case None =>
              handleNormalCall(args)
            case Some(CtorFinalDest.Match(scrut, expr, sels)) =>
              val body = expr.arms.find{ case (Case.Cls(c1, _) -> body) => c1 === c }.get._2
              // tl.log(call.toString() + " ----> " + body)
              
              val newArgs = args.map(_ => TempSymbol(N))
              
              val idsToArgs = getClsFields(c).map(s => s.id).zip(newArgs.map(s => Value.Ref(s).asInstanceOf[Value.Ref])).toMap
              
              val bodyAndRestInLam = setupBodyAndRest(body, expr.rest, scrut, sels.toSet, idsToArgs)
              
              args.zip(newArgs).foldRight[Block](k(bodyAndRestInLam)){ case ((a, tmp), rest) =>
                applyResult2(a.value): r =>
                  Assign(tmp, r, rest)
              }
            case Some(CtorFinalDest.Sel(s)) =>
              val selFieldName = ResultUid(s) match { case Select(p, nme) => nme }
              val idx = getClsFields(c).indexWhere(s => s.id === selFieldName)
              k(args(idx).value)
        
        f match
          case s@Select(p, nme) => s.symbol.flatMap(_.asCls) match
            case None =>
              handleNormalCall(args)
            case Some(c) => handleCtorCall(c)
          case Value.Ref(l) => l.asCls match
            case None =>
              handleNormalCall(args)
            case Some(c) => handleCtorCall(c)
          case Value.Lam(params, body) =>
            k(Call(Value.Lam(params, applyBlock(body)), args)(call.isMlsFun, call.mayRaiseEffects))
      case Instantiate(cls, args) => k(r)
      case s@Select(p, nme) => s.symbol.flatMap(f => f.asObj) match
        case None =>
          if rewritingSelConsumer.contains(s.uid) then
            k(p)
          else
            k(s)
        case Some(mod) =>
          filteredCtorDests.get(s.uid) match
            case None => 
              k(s)
            case Some(CtorFinalDest.Match(scrut, expr, sels)) =>
              val body = expr.arms.find{ case (Case.Cls(m, _) -> body) => m === mod }.get
              // tl.log(mod.toString + " ----> " + body)
              val bodyAndRestInLam = setupBodyAndRest(body._2, expr.rest, scrut, Set.empty, Map.empty)
              k(bodyAndRestInLam)
            case Some(_) => ??? // TODO: a selection on a module consumes it
      
      case r@Value.Ref(l) => l.asObj match
        case None => k(r)
        case Some(mod) =>
          filteredCtorDests.get(r.uid) match
            case None => 
              k(r)
            case Some(CtorFinalDest.Match(scrut, expr, sels)) =>
              val body = expr.arms.find{ case (Case.Cls(m, _) -> body) => m === mod }.get
              // tl.log(mod.toString + " ----> " + body)
              
              val bodyAndRestInLam = setupBodyAndRest(body._2, expr.rest, scrut, Set.empty, Map.empty)
              k(bodyAndRestInLam)
            case Some(_) => ??? // TODO: a selection on a module consumes it
      case Value.This(sym) => k(Value.This(sym))
      case Value.Lit(lit) => k(Value.Lit(lit))
      case Value.Lam(params, body) => k(Value.Lam(params, applyBlock(body)))
      case Value.Arr(elems) => k(Value.Arr(elems))
    
    
