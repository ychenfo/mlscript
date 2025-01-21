package hkmc2
package codegen

import semantics.*
import semantics.Elaborator.State
import syntax.{Literal, Tree}
import utils.{TL, tl}
import mlscript.utils.*, shorthands.*
import scala.collection.mutable

type StratVar
type StratVarId = Uid[StratVar]
type ClsOrModSymbol = ClassSymbol | ModuleSymbol

sealed abstract class Strat

sealed abstract class ProdStrat extends Strat

sealed abstract class ConsStrat extends Strat

// enum ProdStrat:
case class Ctor(ctor: ClsOrModSymbol, args: Map[TermSymbol, ProdStrat], expr: Call | Select) extends ProdStrat
case class ProdFun(l: Ls[ConsStrat], r: ProdStrat) extends ProdStrat
case class ProdVar(uid: StratVarId, name: Str = "") extends ProdStrat with StratVarTrait(uid, name)
case object NoProd extends ProdStrat


// enum ConsStrat:
case class Dtor(scrut: Value.Ref, arms: Ls[Case -> Block]) extends ConsStrat
case class FieldSel(field: Tree.Ident, consVar: ConsVar, expr: Select) extends ConsStrat with FieldSelTrait
case class ConsFun(l: Ls[ProdStrat], r: ConsStrat) extends ConsStrat
case class ConsVar(uid: StratVarId, name: Str = "") extends ConsStrat with StratVarTrait(uid, name)
case object NoCons extends ConsStrat

trait FieldSelTrait:
  this: FieldSel =>
  val filter = mutable.Map.empty[ProdVar, Ls[ClsOrModSymbol]].withDefaultValue(Nil)
  
  def updateFilter(p: ProdVar, c: Ls[ClsOrModSymbol]) =
    filter += p -> (c ::: filter(p))

trait StratVarTrait(uid: StratVarId, name: Str):
  this: ProdVar | ConsVar =>
  
  lazy val asProdStrat = ProdVar(uid, name)
  lazy val asConsStrat = ConsVar(uid, name)

extension (r: Result)
  def replaceSelect(using p: Set[Select], args: Map[Tree.Ident, Path]): Result = r match
    case c@Call(f, args) => Call(f, args.map{case Arg(spread, value) => Arg(spread, value.replaceSelect.asInstanceOf[Path])})(c.isMlsFun)
    case sel@Select(path, nme) =>
      if p.contains(sel) then args(nme) else sel
    case _ => r
    // case Value.Ref(l) => r
    // case Instantiate(cls, args) => ???
    // case Value.This(sym) => ???
    // case Value.Lit(lit) => ???
    // case Value.Lam(params, body) => ???
    // case Value.Arr(elems) => ???
  

extension (b: Block)
  // TODO: similar to Block.mapTail?
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
    case HandleBlock(lhs, res, cls, handlers, body, rest) => ???
    case HandleBlockReturn(res) => ???
    case End(msg) => ???
  
  def replaceSelect(using p: Set[Select], args: Map[Tree.Ident, Path]): Block = b match
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
  
  

class Deforest(using TL, Raise, Elaborator.State):
  // import ProdStrat.*
  // import ConsStrat.*
  
  object StratVarId extends Uid.Handler[StratVar]
  
  def apply(p: Program) =
    processBlock(p.main)
    // constraints.foreach(tl.log)
    // tl.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>")
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
    
    rewrite(p)
    
  
  val vuid = StratVarId.State()
  
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  
  val symToStrat = mutable.Map.empty[Symbol, ProdVar]
  // currently, symbols that shouldn't be read from ctx are symbols for ctors (class/object) blkMem symbols
  // TODO: ctor as a function?
  def getStratOfSym(s: Symbol) =
    s match
      case _: BuiltinSymbol => NoProd
      case _: TopLevelSymbol => NoProd
      case _: BlockMemberSymbol => symToStrat(s) // For `fun` and `let` only, not classes or modules?
      case _: LocalSymbol => symToStrat(s)
      case _: FlowSymbol => symToStrat(s)
  
  // def getClsFields(s: ClassSymbol) = s.tree.paramLists.head.fields.map {
  //   case Tree.InfixApp(id: Tree.Ident, kw, rhs) => id
  //   case id: Tree.Ident => id
  // }
  def getClsFields(s: ClassSymbol) = s.tree.clsParams

  def freshVar(nme: String = "")(using filter: Opt[ProdVar -> ClsOrModSymbol] = N): ProdVar -> ConsVar =
    val newId = vuid.nextUid
    val p: ProdVar = ProdVar(newId, nme)
    val c: ConsVar = ConsVar(newId, nme)
    // filter.foreach{ case v -> cls =>
    //   p.filter.updateWith(v){
    //     case None => Some(cls :: Nil)
    //     case Some(value) => Some(cls :: value)
    //   }
    //   c.filter.updateWith(v){
    //     case None => Some(cls :: Nil)
    //     case Some(value) => Some(cls :: value)
    //   }
    // }
    p -> c
    
  def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
  
  def processBlock(b: Block)(using inArm: Option[ProdVar -> ClsOrModSymbol] = N): ProdStrat = b match
    case Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      val armsRes = if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        arms.map { case (Case.Cls(s, _), body) => 
          constrain(scrutStrat, Dtor(scrut, arms))
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
        case None =>
          val lhsTpeVar = freshVar(lhs.nme)
          constrain(processResult(rhs), lhsTpeVar._2)
          symToStrat += lhs -> lhsTpeVar._1
        case Some(v) =>
          constrain(processResult(rhs), v.asConsStrat)
      processBlock(rest)
    case Begin(sub, rest) =>
      processBlock(sub)
      processBlock(rest)
    case Define(defn, rest) =>
      defn match
        case FunDefn(sym, params, body) =>
          val funSymStratVar = freshVar(sym.nme)
          symToStrat += sym -> funSymStratVar._1
          val param = params.head match
            case ParamList(flags, params, restParam) => params
          val funStrat = constrFun(param, body) // TODO: handle mutiple param list
          constrain(funStrat, funSymStratVar._2)
          funSymStratVar._1
        case ValDefn(owner, k, sym, rhs) => NoProd // TODO:
        case ClsLikeDefn(sym, k, parentSym, methods, privateFields, publicFields, preCtor, ctor) => NoProd
      processBlock(rest)
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
              constrain(pStrat, FieldSel(nme, tpeVar._2, s))
              val appRes = freshVar()
              constrain(tpeVar._1, ConsFun(argsTpe, appRes._2))
              appRes._1
            case Some(None) =>
              val funSym = s.symbol.get
              val appRes = freshVar("call_" + funSym.nme + "_res")
              constrain(getStratOfSym(funSym), ConsFun(argsTpe, appRes._2))
              appRes._1
            case Some(Some(s)) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap, c)
        case Value.Ref(l) =>
          l.asCls match
            case Some(s) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap, c)
            case _ => // then it is a function
              val appRes = freshVar("call_" + l.nme + "_res")
              constrain(getStratOfSym(l), ConsFun(argsTpe, appRes._2))
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
      case Some(s) if s.asMod.isDefined =>
        Ctor(s.asMod.get, Map.empty, sel)
      case _ => 
        val pStrat = processResult(p)
        inArm match
          case Some(armP -> clsSym) if armP === pStrat =>
            // assert(sel.symbol.exists(_.isInstanceOf[TermSymbol]))
            val tpeVar = freshVar()
            val selStrat = FieldSel(nme, tpeVar._2, sel)
            selStrat.updateFilter(armP, clsSym :: Nil)
            constrain(pStrat, selStrat)
            tpeVar._1
          case _ =>
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2, sel))
            tpeVar._1
            
    case Value.Ref(l) => getStratOfSym(l)
    case Value.This(sym) => ???
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      constrFun(params, body)
    case Value.Arr(elems) => ???
  
  
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  
  val ctorDests = mutable.Map.empty[Call | Select, (Map[Value.Ref, Ls[Case -> Block]] -> Ls[Select])].withDefaultValue(Map.empty -> Nil)
  val dtorSources = mutable.Map.empty[Value.Ref | Select, Ls[Call | Select]].withDefaultValue(Nil)
  
  
  def resolveConstraints: Unit =
    
    def handle(c: ProdStrat -> ConsStrat)(using cache: mutable.Set[ProdStrat -> ConsStrat]): Unit =
      val prod = c._1
      val cons = c._2
      
      if cache(c) then return ()
      
      cache += c
      
      (prod, cons) match
        case (Ctor(ctor, args, expr), Dtor(scrut, arms)) =>
          ctorDests.updateWith(expr){
            case Some(d -> s) =>
              Some(
                (d.updatedWith(scrut){
                  case None => Some(arms)
                  case Some(v) => Some(arms ::: v)
                }) -> s
              )
            case None => Some(Map(scrut -> arms) -> Nil)
          }
          dtorSources += scrut -> (expr :: dtorSources(scrut))
          // TODO: keep track of this ctor to dtor
        case (Ctor(ctor, args, expr), FieldSel(field, consVar, sel)) =>
          // if clsSym.isDefined then
          //   args.get(clsSym.get).map(p => handle(p -> consVar))
          // else  
          ctorDests.updateWith(expr){
            case Some(d -> s) => Some(d -> (sel :: s))
            case None => Some(Map.empty -> (sel :: Nil))
          }
          dtorSources.updateWith(sel){
            case None => Some(expr :: Nil)
            case Some(value) => Some(expr :: value)
          }
          args.find(a => a._1.id == field).map(p =>
            // rewritingSel.add(sel)
            handle(p._2 -> consVar)
          )
        case (Ctor(ctor, args, _), ConsFun(l, r)) => ???
        
        case (p@ProdVar(uid, name), _) =>
          upperBounds += uid -> (cons :: upperBounds(uid))
          lowerBounds(uid).foreach{ l =>
            (l, cons) match
              case (l: ProdVar, sel@FieldSel(field, consVar, selExpr)) =>
                sel.updateFilter(l, sel.filter(p))
                handle(l -> cons)
              case (Ctor(ctor, args, expr), sel@FieldSel(field, consVar, selExpr)) =>
                if sel.filter.get(p).forall(_.contains(ctor)) then
                  handle(l -> cons)
                else
                  ()
              case _ => handle(l -> cons)
          }
        case (_, c@ConsVar(uid, name)) =>
          lowerBounds += uid -> (prod :: lowerBounds(uid))
          upperBounds(uid).foreach { u =>
            (prod, u) match
              case (Ctor(ctor, args, expr), sel@FieldSel(field, consVar, selExpr)) =>
                if sel.filter.get(c.asProdStrat).forall(_.contains(ctor)) then
                  handle(prod -> u)
                else
                  ()
              case (_: ProdVar, _) => ??? // unreachable, should be handled above
              case _ => handle(prod -> u)
          }
          // upperBounds(uid).foreach(c => handle(prod -> c))
        case (Ctor(ctor, args, _), NoCons) => ()
        case (ProdFun(l, r), Dtor(cls, _)) => ???
        case (ProdFun(l, r), FieldSel(field, consVar, sel)) => ???
        case (ProdFun(lp, rp), ConsFun(lc, rc)) =>
          lc.zip(lp).foreach(handle)
          handle(rp, rc)
        case (ProdFun(l, r), NoCons) => ()
        case (NoProd, Dtor(cls, _)) => ()
        case (NoProd, FieldSel(field, consVar, sel)) => ()
        case (NoProd, ConsFun(l, r)) => ()
        case (NoProd, NoCons) => ()
      
    constraints.foreach(c => handle(c)(using mutable.Set.empty))
  
  
  // ======== after resolving constraints ======
  
  def resolveClashes =
    type CtorToDtor = Map[Call | Select, (Map[Value.Ref, Ls[Case -> Block]] -> Ls[Select])]
    type DtorToCtor = Map[Value.Ref | Select, Ls[Call | Select]]
    
    def removeCtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[Call | Select]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newCtorDests, toDelete) = ctorDests.partition(c => !rm(c._1))
        removeDtor(newCtorDests, dtorSources, toDelete.values.flatMap[Value.Ref | Select]{ case (mat -> sels) => mat.keySet ++ sels }.toSet)
    
    def removeDtor(ctorDests: CtorToDtor, dtorSources: DtorToCtor, rm: Set[Value.Ref | Select]): CtorToDtor -> DtorToCtor =
      if rm.isEmpty then
        ctorDests -> dtorSources
      else
        val (newDtorSources, toDelete) = dtorSources.partition(d => !rm(d._1))
        removeCtor(ctorDests, newDtorSources, toDelete.values.flatten.toSet)
    
    val ctorToDtor = ctorDests.toMap
    val dtorToCtor = dtorSources.toMap
    
    removeCtor(
      ctorToDtor,
      dtorToCtor,
      ctorToDtor.filterNot { case (_, dests) =>
        val (dtors, sels) = dests
        (dtors.size == 0 && sels.size == 1)
        || (dtors.size == 1 && {
          val Value.Ref(scrut) = dtors.head._1
          sels.forall { case Select(Value.Ref(l), nme) => l == scrut; case _ => false }
        })
      }.keySet
    )
    
  
  
  def filteredCtorDests: Map[Call | Select, (Value.Ref -> (Ls[Case -> Block] -> Ls[Select])) | Select] =
    val res = mutable.Map.empty[Call | Select, (Value.Ref -> (Ls[Case -> Block] -> Ls[Select])) | Select]
    resolveClashes._1.foreach { case (ctor, dests) =>
      val (dtors, sels) = dests
      val filteredDtor = {
        if dtors.size == 0 && sels.size == 1 then Some(sels.head)
        else if dtors.size == 0 && sels.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size > 1 then
          throw Error("more than one consumer")
          None
        else if dtors.size == 1 then
          val Value.Ref(scrut) = dtors.head._1
          if sels.forall{ case Select(Value.Ref(l), nme) => l == scrut; case _ => false } then
            Some(dtors.head._1 -> (dtors.head._2 -> sels))
          else
            throw Error("more than one consumer")
            None
        else ???
      }
      res.updateWith(ctor){_ => filteredDtor}
    }
    res.toMap
  
  def rewritingSel = filteredCtorDests.values.flatMap {
    case Select(p, nme) => None // TODO:
    case scrut -> (_ -> sels) => sels
  }
  
  def filteredDtors = filteredCtorDests.values.collect {
    case (scrut -> _) => scrut
  }.toSet
  
  def rewrite(p: Program) =
    Program(
      p.imports,
      rewriteBlock(p.main)
    )
  
  def rewriteBlock(b: Block): Block = b match
    case mat@Match(scrut, arms, dflt, rest) =>
      if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } && filteredDtors.contains(scrut) then
        // TODO:
        rest match
          case End(msg) => Return(scrut, mat.hasImplctRet) // TODO: true or false?
          case _ => rest
      else
        Match(scrut, arms.map{ (cse, blk) => (cse, rewriteBlock(blk)) }, dflt.map(rewriteBlock), rewriteBlock(rest))
    case Return(res, implct) =>
      rewriteResult(res)(r => Return(r, implct))
    case Assign(lhs, rhs, rest) =>
      rewriteResult(rhs)(r => Assign(lhs, r, rewriteBlock(rest)))
    case Begin(sub, rest) => Begin(rewriteBlock(sub), rewriteBlock(rest))
    case d@Define(defn, rest) =>
      defn match
        case FunDefn(sym, params, body) => Define(FunDefn(sym, params, rewriteBlock(body)), rewriteBlock(rest))
        case _ => d
    case End(msg) => End(msg)
    case Throw(exc) => rewriteResult(exc)(Throw.apply)
    
    case AssignField(lhs, nme, rhs, rest) => ???
    case Label(label, body, rest) => ???
    case Break(label) => Break(label)
    case Continue(label) => ???
    case TryBlock(sub, finallyDo, rest) => ???
  
  
  def rewriteResult(r: Result)(k: Result => Block): Block = r match
    case call@Call(f, args) =>
      f match
        case s@Select(p, nme) => s.symbol.flatMap(_.asCls) match
          case None => k(call)
          case Some(c) =>
            // assert(ctorDests(call).size == 1, s"$call has more than one destination")
            filteredCtorDests.get(call) match
              case None => k(call)
              case Some(Select(p, nme)) => ???
              case Some(scrut -> (arms, sels)) =>
                val body = arms.find{ case (Case.Cls(c1, _) -> body) => c1 === c }.get._2
                tl.log(call.toString() + " ----> " + body)
                
                val newArgs = args.map(_ => TempSymbol(N))
                // args.zip(newArgs).foldRight[Block](body.replaceAssignments(newArgs.map(a => Value.Ref(a))).mapRes(k)){ case ((a, tmp), rest) =>
                //   rewriteResult(a.value): r =>
                //     Assign(tmp, r, rest)
                // }
                val idsToArgs = getClsFields(c).map(s => s.id).zip(newArgs.map(s => Value.Ref(s))).toMap
                
                args.zip(newArgs).foldRight[Block](body.replaceSelect(using rewritingSel.toSet, idsToArgs).mapRes(k)){ case ((a, tmp), rest) =>
                  rewriteResult(a.value): r =>
                    Assign(tmp, r, rest)
                }
        case Value.Ref(l) => l.asCls match
          case None => k(call)
          case Some(c) => ??? // TODO:
        case Value.Lam(params, body) =>
          k(Call(Value.Lam(params, rewriteBlock(body)), args)(call.isMlsFun))
    case Instantiate(cls, args) => k(r)
    case s@Select(p, nme) => s.symbol.flatMap(f => f.asMod) match
      case None => k(s)
      case Some(mod) =>
        filteredCtorDests.get(s) match
          case None => 
            k(s)
          case Some(Select(p, nme)) => ??? // TODO:
          case Some(scrut -> (arms, sels)) =>
            val body = arms.find{ case (Case.Cls(m, _) -> body) => m === mod }.get
            tl.log(mod.toString + " ----> " + body)
            
            body._2.mapRes(k)
            
    
    case Value.Ref(l) => k(Value.Ref(l))
    case Value.This(sym) => k(Value.This(sym))
    case Value.Lit(lit) => k(Value.Lit(lit))
    case Value.Lam(params, body) => k(Value.Lam(params, rewriteBlock(body)))
    case Value.Arr(elems) => k(Value.Arr(elems))
  
  