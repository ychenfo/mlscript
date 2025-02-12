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
case class Ctor(ctor: ClsOrModSymbol, args: Map[TermSymbol, ProdStrat])(val expr: CtorExpr) extends ProdStrat
case class ProdFun(l: Ls[ConsStrat], r: ProdStrat) extends ProdStrat
case class ProdVar(s: StratVarState) extends ProdStrat with StratVarTrait(s)
case object NoProd extends ProdStrat


// enum ConsStrat:
case class Dtor(scrut: ResultId)(val expr: Match) extends ConsStrat:
  assert(scrut === expr.scrut.uid)

case class FieldSel(field: Tree.Ident, consVar: ConsVar)(val expr: ResultId) extends ConsStrat with FieldSelTrait
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

extension (r: Result)
  def replaceSelect(using p: Set[ResultId], args: Map[Tree.Ident, Path]): Result = r match
    case c@Call(f, args) => Call(f, args.map{case Arg(spread, value) => Arg(spread, value.replaceSelect.asInstanceOf[Path])})(c.isMlsFun, c.mayRaiseEffects)
    case sel@Select(path, nme) =>
      if p.contains(sel.uid) then args(nme) else sel
    case _ => r
    // case Value.Ref(l) => r
    // case Instantiate(cls, args) => ???
    // case Value.This(sym) => ???
    // case Value.Lit(lit) => ???
    // case Value.Lam(params, body) => ???
    // case Value.Arr(elems) => ???

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
  def mapRes(f: Result => Block): Block = b match
    case Return(res, implct) => f(res)
    case Assign(lhs, rhs, rest: End) => f(rhs)
    case Assign(lhs, rhs, rest) => Assign(lhs, rhs, rest.mapRes(f))
    case Define(defn, rest) => Define(defn, rest.mapRes(f))
    // case Match(scrut, arms, dflt, e: End) => Match(scrut, arms)
    // case Match(scrut, arms, dflt, rest) => Match(scrut, arms, dflt, rest.mapRes(f))
    case Throw(exc) => ???
    case Label(label, body, rest) => ???
    case Break(label) => ???
    case Continue(label) => ???
    case Begin(sub, rest) => ???
    case TryBlock(sub, finallyDo, rest) => ???
    case AssignField(_, _, _, _) => ???
    case _: HandleBlock => ???
    case HandleBlockReturn(res) => ???
    case End(msg) => ???
  
  def replaceSelect(using p: Set[ResultId], args: Map[Tree.Ident, Path]): Block = b match
    case Assign(lhs, rhs, rest) => Assign(lhs, rhs.replaceSelect, rest.replaceSelect)
    case Return(res, implct) => Return(res.replaceSelect, implct)
    case Match(scrut, arms, dflt, rest) => ???
    case _ => b
    // case Throw(exc) => ???
    // case Label(label, body, rest) => ???
    // case Break(label) => ???
    // case Continue(label) => ???
    // case Begin(sub, rest) => ???
    // case TryBlock(sub, finallyDo, rest) => ???
    // case AssignField(_, _, _, _) => ???
    // case Define(defn, rest) => ???
    // case HandleBlock(lhs, res, cls, handlers, body, rest) => ???
    // case HandleBlockReturn(res) => ???
    // case End(msg) => ???
  
  
  def replaceAssignments(args: List[Path]): Block = args match
    case head :: tail => b match
      case Assign(lhs, rhs, rest) => Assign(lhs, head, rest.replaceAssignments(tail))
    case Nil => b
  
  def hasImplctRet: Boolean = b match
    case Match(scrut, arms, dflt, rest) => arms.map(a => a._2).appendedAll(dflt).exists(b => b.hasImplctRet)
    case Return(res, implct) => implct
    case Assign(lhs, rhs, rest) => rest.hasImplctRet
    case Define(defn, rest) => rest.hasImplctRet
    case End(msg) => false
    case _ => false
    // case Throw(exc) => 
    // case Label(label, body, rest) =>
    // case Break(label) =>
    // case Continue(label) =>
    // case Begin(sub, rest) =>
    // case TryBlock(sub, finallyDo, rest) =>
    // case AssignField(symbol) =>
    // case HandleBlock(lhs, res, cls, handlers, body, rest) =>
    // case HandleBlockReturn(res) =>
  
  def mergeMatchArms: Block =
    object MergeMatchArmTransformer extends BlockTransformer(new SymbolSubst()):
      override def applyBlock(b: Block): Block = b match
        case m: Match => m.mergeArms
        case _ => super.applyBlock(b)
    MergeMatchArmTransformer.applyBlock(b)

class Deforest(using TL, Raise, Elaborator.State):
  
  object StratVarUidHandler extends Uid.Handler[StratVar]()
  given Uid.Handler[StratVar]#State = StratVarUidHandler.State()
  import StratVarState.freshVar
  
  def apply(p: Program) =
    // allocate type vars for defined symbols in the blocks
    symToStrat.init(p.main)
    // p.main.definedVars.foreach: v => 
    //   symToStrat += v -> freshVar(v.nme)._1
  
    processBlock(p.main.mergeMatchArms)
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
    
    rewrite(p)
    
  
  
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  
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
  
  def processBlock(b: Block)(using inArm: Option[ProdVar -> ClsOrModSymbol] = N): ProdStrat = b match
    case m@Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      val armsRes = if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        arms.map { case (Case.Cls(s, _), body) => 
          constrain(scrutStrat, Dtor(scrut.uid)(m))
          // TODO: fix this "asInstanceOf"?
          processBlock(body)(using S(scrutStrat.asInstanceOf[ProdVar] -> s))
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
      processBlock(rest)
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
      
    case End(msg) => NoProd
    case Throw(exc) => NoProd
    case AssignField(lhs, nme, rhs, rest) => ???
    case Label(label, body, rest) => ???
    case Break(label) => ???
    case Continue(label) => ???
    case TryBlock(sub, finallyDo, rest) => ???
  
  def constrFun(params: Ls[Param], body: Block)(using inArm: Option[ProdVar -> ClsOrModSymbol] = N) =
    val paramSyms = params.map{ case Param(_, sym, _) => sym }
    val paramStrats = paramSyms.map{ sym => freshVar(sym.name) }
    symToStrat.addAll(paramSyms.zip(paramStrats.map(_._1)))
    val res = freshVar()
    constrain(processBlock(body), res._2)
    ProdFun(paramStrats.map(_._2), res._1)
  
  def processResult(r: Result)(using inArm: Option[ProdVar -> ClsOrModSymbol]): ProdStrat = r match
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
              constrain(pStrat, FieldSel(nme, tpeVar._2)(s.uid))
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
              Ctor(s, clsFields.zip(argsTpe).toMap)(c.uid)
        case Value.Ref(l) =>
          l.asCls match
            case Some(s) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap)(c.uid)
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
        Ctor(s.asObj.get, Map.empty)(sel.uid)
      case _ => 
        val pStrat = processResult(p)
        inArm match
          case Some(armP -> clsSym) if armP === pStrat =>
            // assert(sel.symbol.exists(_.isInstanceOf[TermSymbol]))
            val tpeVar = freshVar()
            val selStrat = FieldSel(nme, tpeVar._2)(sel.uid)
            selStrat.updateFilter(armP, clsSym :: Nil)
            constrain(pStrat, selStrat)
            tpeVar._1
          case _ =>
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2)(sel.uid))
            tpeVar._1
            
    case v@Value.Ref(l) => l.asObj match
      case None => symToStrat.getStratOfSym(l)
      case Some(m) => Ctor(m, Map.empty)(v.uid)
    
    case Value.This(sym) => ???
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      constrFun(params, body)
    case Value.Arr(elems) => ???
  
  
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  
  case class CtorDest(matches: Map[ResultId, Match], sels: Ls[ResultId])
  
  object ctorDests:
    val ctorDests = mutable.Map.empty[ResultId, CtorDest].withDefaultValue(CtorDest(Map.empty, Nil))
    def update(ctor: CtorExpr, m: Match) = ctorDests.updateWith(ctor):
      case Some(CtorDest(matches, sels)) => Some(CtorDest(matches + (m.scrut.uid -> m), sels))
      case None => Some(CtorDest(Map(m.scrut.uid -> m), Nil))
    def update(ctor: CtorExpr, s: ResultId) = ctorDests.updateWith(ctor):
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
        case (ctorStrat@Ctor(ctor, args), dtorStrat@Dtor(scrut)) =>
          ctorDests.update(ctorStrat.expr, dtorStrat.expr)
          dtorSources.update(scrut, ctorStrat.expr)
        case (ctorStrat@Ctor(ctor, args), selDtor@FieldSel(field, consVar)) =>
          // if clsSym.isDefined then
          //   args.get(clsSym.get).map(p => handle(p -> consVar))
          // else  
          ctorDests.update(ctorStrat.expr, selDtor.expr)
          dtorSources.update(selDtor.expr, ctorStrat.expr)
          args.find(a => a._1.id == field).map(p =>
            // rewritingSel.add(sel)
            handle(p._2 -> consVar)
          )
        case (Ctor(ctor, args), ConsFun(l, r)) => ???
        
        case (p: ProdVar, _) =>
          upperBounds += p.uid -> (cons :: upperBounds(p.uid))
          lowerBounds(p.uid).foreach{ l =>
            (l, cons) match
              case (l: ProdVar, sel@FieldSel(field, consVar)) =>
                sel.updateFilter(l, sel.filter(p))
                handle(l -> cons)
              case (Ctor(ctor, args), sel@FieldSel(field, consVar)) =>
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
              case (Ctor(ctor, args), sel@FieldSel(field, consVar)) =>
                if sel.filter.get(c.asProdStrat).forall(_.contains(ctor)) then
                  handle(prod -> u)
                else
                  ()
              case (_: ProdVar, _) => ??? // unreachable, should be handled above
              case _ => handle(prod -> u)
          }
          // upperBounds(uid).foreach(c => handle(prod -> c))
        case (Ctor(ctor, args), NoCons) => ()
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
  
  lazy val resolveClashes =
    type CtorToDtor = Map[CtorExpr, CtorDest]
    type DtorToCtor = Map[DtorExpr, Ls[CtorExpr]]
    
    def removeCtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[CtorExpr]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newCtorDests, toDelete) = ctorDests.partition(c => !rm(c._1))
        removeDtor(newCtorDests, dtorSources, toDelete.values.flatMap[DtorExpr]{ case CtorDest(mat, sels) =>
          mat.keySet.map(s => DtorExpr.Match(s)) ++ sels.map(s => DtorExpr.Sel(s))
        }.toSet)
    
    def removeDtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[DtorExpr]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newDtorSources, toDelete) = dtorSources.partition(d => !rm(d._1))
        removeCtor(ctorDests, newDtorSources, toDelete.values.flatten.toSet)
    
    val ctorToDtor = ctorDests.ctorDests.toMap
    val dtorToCtor = dtorSources.dtorSources.toMap
    
    removeCtor(
      ctorToDtor,
      dtorToCtor,
      ctorToDtor.filterNot { case _ -> CtorDest(dtors, sels) =>
        (dtors.size == 0 && sels.size == 1)
        || (dtors.size == 1 && {
          val Value.Ref(scrut) = ResultUid(dtors.head._1)
          sels.forall { s => ResultUid(s) match
            case Select(Value.Ref(l), nme) => l == scrut
            case _ => false }
        })
      }.keySet
    )
    
  
  
  lazy val filteredCtorDests: Map[CtorExpr, CtorFinalDest] =
    val res = mutable.Map.empty[CtorExpr, CtorFinalDest]
    resolveClashes._1.foreach { case (ctor, CtorDest(dtors, sels)) =>
      val filteredDtor = {
        if dtors.size == 0 && sels.size == 1 then Some(CtorFinalDest.Sel(sels.head))
        else if dtors.size == 0 && sels.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size == 1 then
          val Value.Ref(scrut) = ResultUid(dtors.head._1)
          if sels.forall{ s => ResultUid(s) match
            case Select(Value.Ref(l), nme) => l == scrut
            case _ => false
          } then
            Some(CtorFinalDest.Match(dtors.head._1, dtors.head._2, sels))
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
  
  def rewrite(p: Program) =
    Program(
      p.imports,
      DeforestTransformer.applyBlock(p.main)
    )
  
  object DeforestTransformer extends BlockTransformer(new SymbolSubst()):
    
    override def applyBlock(b: Block): Block = b match
      case mat@Match(scrut, arms, dflt, rest) =>
        if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } && filteredDtors.contains(scrut.uid) then
          // TODO:
          rest match
            case End(msg) => Return(scrut, mat.hasImplctRet) // TODO: true or false?
            case _ => rest
        else
          Match(scrut, arms.map{ (cse, blk) => (cse, applyBlock(blk)) }, dflt.map(applyBlock), applyBlock(rest))
      case Return(res, implct) =>
        applyResult2(res)(r => Return(r, implct))
      case Assign(lhs, rhs, rest) =>
        applyResult2(rhs)(r => Assign(lhs, r, applyBlock(rest)))
      case Begin(sub, rest) => Begin(applyBlock(sub), applyBlock(rest))
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
    
    
    override def applyResult2(r: Result)(k: Result => Block): Block = r match
      case call@Call(f, args) =>
        def handleNormalCall(args: List[Arg]) =
          val newArgSyms = args.map{ case Arg(false, v) => // TODO: spread..?
            val tmpSym = TempSymbol(N)
            v -> tmpSym
          }
          newArgSyms.foldRight(
            k(Call(f, newArgSyms.map{ case _ -> s => Arg(false, Value.Ref(s)) })(call.isMlsFun, call.mayRaiseEffects))
          ){ case (arg, sym) -> rest =>
              applyResult2(arg)(r => Assign(sym, r, rest)) // TODO: avoid new tmpvars when args are not rewritten...
          }
          
        def handleCtorCall(c: ClassSymbol) =
          // assert(ctorDests(call).size == 1, s"$call has more than one destination")
          filteredCtorDests.get(call.uid) match
            case None =>
              handleNormalCall(args)
            case Some(CtorFinalDest.Match(scrut, expr, sels)) =>
              val body = expr.arms.find{ case (Case.Cls(c1, _) -> body) => c1 === c }.get._2
              tl.log(call.toString() + " ----> " + body)
              
              val newArgs = args.map(_ => TempSymbol(N))
              
              val idsToArgs = getClsFields(c).map(s => s.id).zip(newArgs.map(s => Value.Ref(s))).toMap
              
              args.zip(newArgs).foldRight[Block](applyBlock(body.replaceSelect(using sels.toSet, idsToArgs)).mapRes(k)){ case ((a, tmp), rest) =>
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
              tl.log(mod.toString + " ----> " + body)
              
              body._2.mapRes(k)
            case Some(_) => ??? // TODO: a selection on a module consumes it
      
      case r@Value.Ref(l) => l.asObj match
        case None => k(r)
        case Some(mod) =>
          filteredCtorDests.get(r.uid) match
            case None => 
              k(r)
            case Some(CtorFinalDest.Match(scrut, expr, sels)) =>
              val body = expr.arms.find{ case (Case.Cls(m, _) -> body) => m === mod }.get
              tl.log(mod.toString + " ----> " + body)
              body._2.mapRes(k)
            case Some(_) => ??? // TODO: a selection on a module consumes it
      case Value.This(sym) => k(Value.This(sym))
      case Value.Lit(lit) => k(Value.Lit(lit))
      case Value.Lam(params, body) => k(Value.Lam(params, applyBlock(body)))
      case Value.Arr(elems) => k(Value.Arr(elems))
    
    