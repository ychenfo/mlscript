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

enum ProdStrat:
  case Ctor(ctor: ClassSymbol | ModuleSymbol, args: Map[TermSymbol, ProdStrat], expr: Call | Select)
  case ProdFun(l: Ls[ConsStrat], r: ProdStrat)
  case ProdVar(uid: StratVarId, name: Str = "") extends ProdStrat with StratVarTrait(uid, name)
  case NoProd


enum ConsStrat:
  case Dtor(scrut: Value.Ref)
  case FieldSel(field: Tree.Ident, consVar: ConsVar, sym: Opt[TermSymbol])
  case ConsFun(l: Ls[ProdStrat], r: ConsStrat)
  case ConsVar(uid: StratVarId, name: Str = "") extends ConsStrat with StratVarTrait(uid, name)
  case NoCons

trait StratVarTrait(uid: StratVarId, name: Str):
  this: ProdStrat.ProdVar | ConsStrat.ConsVar =>
  lazy val asProdStrat = ProdStrat.ProdVar(uid, name)
  lazy val asConsStrat = ConsStrat.ConsVar(uid, name)

class Deforest(using TL, Raise, Elaborator.State):
  import ProdStrat.*
  import ConsStrat.*
  
  object StratVarId extends Uid.Handler[StratVar]
  
  def apply(p: Program) =
    processBlock(p.main)
    constraints.foreach(println)
    println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    resolveConstraints

    println("upper:")
    upperBounds.foreach(u => println("\t" + u))
    println("lower:")
    lowerBounds.foreach(l => println("\t" + l))
    println("ctor -> dtor:")
    ctorDests.foreach(l => println("\t" + l._1 + " ===> " + l._2))
    println("dtor -> ctor:")
    dtorSources.foreach(l => println("\t" + l._1 + " ===> " + l._2))
    
    
  
  val vuid = StratVarId.State()
  
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  
  val symToStrat = mutable.Map.empty[Symbol, ProdStrat.ProdVar]
  // currently, symbols that shouldn't be read from ctx are symbols for ctors (class/object) blkMem symbols
  // TODO: ctor as a function?
  def getStratOfSym(s: Symbol) =
    // s.asMod.fold(
      s match
        case _: BuiltinSymbol => NoProd
        case _: TopLevelSymbol => NoProd
        case _: BlockMemberSymbol => symToStrat(s)
        case _: LocalSymbol => symToStrat(s)
        case _: FlowSymbol => symToStrat(s)
    // )(m => Ctor(m, Map.empty))
  
  // def getClsFields(s: ClassSymbol) = s.tree.paramLists.head.fields.map {
  //   case Tree.InfixApp(id: Tree.Ident, kw, rhs) => id
  //   case id: Tree.Ident => id
  // }
  def getClsFields(s: ClassSymbol) = s.tree.clsParams

  def freshVar(nme: String = ""): ProdVar -> ConsVar =
    val newId = vuid.nextUid
    ProdVar(newId, nme) -> ConsVar(newId, nme)
    
  def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
  
  def processBlock(b: Block)(using inArm: Option[ProdStrat -> (ClassSymbol | ModuleSymbol)] = N): ProdStrat = b match
    case Match(scrut, arms, dflt, rest) =>
      val scrutStrat = processResult(scrut)
      if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        arms.foreach { case (Case.Cls(s, _), body) => 
          constrain(scrutStrat, Dtor(scrut))
          processBlock(body)(using S(scrutStrat -> s))
        }
      else
        arms.map{ case (_, armBody) => processBlock(armBody) }
      // TODO: dflt?
      dflt.map(processBlock)
      processBlock(rest)

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
        case FunDefn(sym, params, body) => NoProd // TODO:
        case ValDefn(owner, k, sym, rhs) => NoProd // TODO:
        case ClsLikeDefn(sym, k, parentSym, methods, privateFields, publicFields, preCtor, ctor) => NoProd

    case End(msg) => NoProd
    case Throw(exc) => NoProd
    case AssignField(lhs, nme, rhs, rest) => ???
    case Label(label, body, rest) => ???
    case Break(label) => ???
    case Continue(label) => ???
    case TryBlock(sub, finallyDo, rest) => ???
  
  def constrFun(params: Ls[Param], body: Block) =
    val paramSyms = params.map{ case Param(_, sym, _) => sym }
    val paramStrats = paramSyms.map{ sym => freshVar(sym.name) }
    symToStrat.addAll(paramSyms.zip(paramStrats.map(_._1)))
    val res = freshVar()
    constrain(processBlock(body), res._2)
    ProdFun(paramStrats.map(_._2), res._1)
  
  def processResult(r: Result)(using inArm: Option[ProdStrat -> (ClassSymbol | ModuleSymbol)]): ProdStrat = r match
    case c@Call(f, args) =>
      val argsTpe = args.map { case Arg(false, value) => 
        processResult(value)
      }
      f match
        case s@Select(p, nme) => s.symbol.flatMap(_.asCls) match
          case Some(s) =>
            val clsFields = getClsFields(s)
            Ctor(s, clsFields.zip(argsTpe).toMap, c)
          case _ =>
            val pStrat = processResult(p)
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2, N))
            val appRes = freshVar()
            constrain(tpeVar._1, ConsFun(argsTpe, appRes._2))
            appRes._1
        case Value.Ref(l) =>
          l.asCls match
            case Some(s) =>
              val clsFields = getClsFields(s)
              Ctor(s, clsFields.zip(argsTpe).toMap, c)
            case _ =>
              val appRes = freshVar()
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
            assert(sel.symbol.exists(_.isInstanceOf[TermSymbol]))
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2, sel.symbol.map(_.asInstanceOf[TermSymbol])))
            tpeVar._1
          case _ =>
            val tpeVar = freshVar()
            constrain(pStrat, FieldSel(nme, tpeVar._2, N))
            tpeVar._1
            
    case Value.Ref(l) => getStratOfSym(l)
    case Value.This(sym) => ???
    case Value.Lit(lit) => NoProd
    case Value.Lam(ParamList(_, params, N), body) =>
      constrFun(params, body)
    case Value.Arr(elems) => ???
  
  
  val upperBounds = mutable.Map.empty[StratVarId, Ls[ConsStrat]].withDefaultValue(Nil)
  val lowerBounds = mutable.Map.empty[StratVarId, Ls[ProdStrat]].withDefaultValue(Nil)
  
  val ctorDests = mutable.Map.empty[Call | Select, Ls[Value.Ref]].withDefaultValue(Nil)
  val dtorSources = mutable.Map.empty[Value.Ref, Ls[Call | Select]].withDefaultValue(Nil)
  
  def resolveConstraints: Unit =
    
    def handle(c: ProdStrat -> ConsStrat)(using cache: mutable.Set[ProdStrat -> ConsStrat]): Unit =
      val prod = c._1
      val cons = c._2
      
      if cache(c) then return ()
      
      cache += c
      
      (prod, cons) match
        case (Ctor(ctor, args, expr), Dtor(scrut)) =>
          ctorDests += expr -> (scrut :: ctorDests(expr))
          dtorSources += scrut -> (expr :: dtorSources(scrut))
          // TODO: keep track of this ctor to dtor
        case (Ctor(ctor, args, _), FieldSel(field, consVar, clsSym)) =>
          if clsSym.isDefined then
            args.get(clsSym.get).map(p => handle(p -> consVar))
          else
            args.find(a => a._1.id == field).map(p => handle(p._2 -> consVar))
        case (Ctor(ctor, args, _), ConsFun(l, r)) => ???
        case (_, ConsVar(uid, name)) =>
          lowerBounds += uid -> (prod :: lowerBounds(uid))
          upperBounds(uid).foreach(c => handle(prod -> c))
        case (ProdVar(uid, name), _) =>
          upperBounds += uid -> (cons :: upperBounds(uid))
          lowerBounds(uid).foreach(p => handle(p -> cons))
        case (Ctor(ctor, args, _), NoCons) => ()
        case (ProdFun(l, r), Dtor(cls)) => ???
        case (ProdFun(l, r), FieldSel(field, consVar, _)) => ???
        case (ProdFun(lp, rp), ConsFun(lc, rc)) =>
          lc.zip(lp).foreach(handle)
          handle(rp, rc)
        case (ProdFun(l, r), NoCons) => ()
        case (NoProd, Dtor(cls)) => ()
        case (NoProd, FieldSel(field, consVar, _)) => ()
        case (NoProd, ConsFun(l, r)) => ()
        case (NoProd, NoCons) => ()
      
    constraints.foreach(c => handle(c)(using mutable.Set.empty))
      
  
  
  def rewrite(p: Program) = ???
  
  def rewriteBlock(b: Block): Block = b match
    case Match(scrut, arms, dflt, rest) =>
      if arms.forall{ case (cse, _) => cse.isInstanceOf[Case.Cls] } then
        ??? // TODO: dtor, check strat
      else
        Match(scrut, arms.map{ (cse, blk) => (cse, rewriteBlock(blk)) }, dflt.map(rewriteBlock), rewriteBlock(rest))
    case Return(res, implct) => Return(rewriteResult(res), implct)
    case Assign(lhs, rhs, rest) => Assign(lhs, rewriteResult(rhs), rewriteBlock(rest))
    case Begin(sub, rest) => Begin(rewriteBlock(sub), rewriteBlock(rest))
    case d@Define(defn, rest) =>
      // TODO:
      ???
      
    
    case End(msg) => End(msg)
    case Throw(exc) => Throw(rewriteResult(exc))
    
    case AssignField(lhs, nme, rhs, rest) => ???
    case Label(label, body, rest) => ???
    case Break(label) => Break(label)
    case Continue(label) => ???
    case TryBlock(sub, finallyDo, rest) => ???
  
  
  def rewriteResult(r: Result): Result = r match
    case c@Call(f, args) =>
      f match
        case s@Select(p, nme) => s.symbol.flatMap(_.asCls) match
          case None => c
          case Some(c) => ??? // TODO: ctor, check strat
        case Value.Ref(l) => l.asCls match
          case None => c
          case Some(c) => ??? // TODO: ctor, check strat
        case Value.Lam(params, body) =>
          Call(Value.Lam(params, rewriteBlock(body)), args)(c.isMlsFun)
    case Instantiate(cls, args) => r
    case s@Select(p, nme) => s.symbol.flatMap(f => f.asMod) match
      case None => s
      case Some(value) => ??? // TODO: ctor, check strat
    
    case Value.Ref(l) => Value.Ref(l)
    case Value.This(sym) => Value.This(sym)
    case Value.Lit(lit) => Value.Lit(lit)
    case Value.Lam(params, body) => Value.Lam(params, rewriteBlock(body))
    case Value.Arr(elems) => Value.Arr(elems)
  
  