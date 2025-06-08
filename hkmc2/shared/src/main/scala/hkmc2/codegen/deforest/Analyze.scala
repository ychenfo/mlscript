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
  val exprId: ResultId,
  val instantiationId: Opt[Ls[ResultId]],
  val outterMatch: Option[ResultId],
  val inDef: Option[BlockMemberSymbol]) extends ConsStrat

class ProdStratScheme(s: StratVarState, constraints: Ls[ProdStrat -> ConsStrat]):
  def instantiate(referSite: ResultId): ProdVar = ??? // TODO:


class ConstraintsAndCacheHitCollector:
  var constraints: Ls[ProdStrat -> ConsStrat] = Nil
  var cacheHit: Ls[BlockMemberSymbol] = Nil
  def constrain(p: ProdStrat, c: ConsStrat) = constraints ::= p -> c
  def constrain(cs: Ls[ProdStrat -> ConsStrat]) = constraints :::= cs
  def hit(s: BlockMemberSymbol) = cacheHit ::= s
  def hit(ss: Ls[BlockMemberSymbol]) = cacheHit :::= ss

class DeforestPreAnalyzer(b: Block, cc: ConstraintsAndCacheHitCollector)(using TL, Raise) extends BlockTraverser:
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
  // TODO: for used but not defined fun syms, constrain them with NoProd
  // TODO: for defined but not fun syms, constrain them with NoCons
    
class DeforestAnalyzer(preAnalyzer: DeforestPreAnalyzer)(using TL, Raise, Elaborator.State):
  given stratVarUidState: Uid.StratVarNew.State = preAnalyzer.stratVarUidState
  given DeforestAnalyzer = this
  import StratVarState.freshVar
    
  
  object FunSymToProdStrat:
    val store = mutable.Map.empty[BlockMemberSymbol, ProdStratScheme]
    def getOrUpdate(s: BlockMemberSymbol)(using processingDefs: Ls[BlockMemberSymbol], cc: ConstraintsAndCacheHitCollector): ProdVar | ProdStratScheme =
      store.get(s) match
        case None => processingDefs.filter(_ is s) match
          case Nil => preAnalyzer.getFunDefnForSym(s) match
            // not a fun defined in the current block, just return its prodvar
            case None => preAnalyzer.getProdVarForSym(s)
            case Some(funDefn) =>
              // TODO: start processing this function, if the cache hit contains the currently processing defs functions
              // then: 1. the function belongs to the same recursion group and need to share the constraints 2. return the prodvar
              // else: update the store with the correct type scheme and return the type scheme
              val cc = processFunDefn(funDefn, processingDefs)
              if cc.cacheHit.exists(x => processingDefs.contains(x)) then
                // for all the cache hits,
                // if the latest hit position in the processing is the head,
                // then it means a complete recursive group (which is all the symbols in the cachehit) is discovered,
                // otherwise we need to further accumulate the constraints and cachehits (those that are on the path to the hit should also be added to the cachehit set)
                // until we find the complete recursive group.
                if cc.cacheHit.exists(x => processingDefs.tail.contains(x)) then
                  ??? // FIXME:
                else // a complete recursive function group is found
                     // FIXME: this is wrong: some other callers of the currently processed fun may call even further up,
                     // so here we may be still creating prod strat schemes pre-maturally
                  val sortedRecGroup = cc.cacheHit.toList.sortBy(x => x.uid)
                  sortedRecGroup.foreach: s =>
                    val stratScheme = ProdStratScheme(preAnalyzer.getProdVarForSym(s).s, cc.constraints)
                    store.updateWith(s):
                      case N => S(stratScheme)
                      case S(_) => die
                  store(s)
              else
                val stratScheme = ProdStratScheme(preAnalyzer.getProdVarForSym(s).s, cc.constraints)
                store.updateWith(s):
                  case N => S(stratScheme)
                  case S(_) => die
                stratScheme
          case sym :: Nil =>
            cc.hit(sym)
            preAnalyzer.getProdVarForSym(sym)
          case _ => die
        case Some(scheme) => scheme
      
  
  def processFunDefn(defn: FunDefn, processingDefs: Ls[BlockMemberSymbol]): ConstraintsAndCacheHitCollector =
    val thisFunVar = preAnalyzer.getProdVarForSym(defn.sym)
    val paramSyms = defn.params.head.params.map: // TODO: handle multiple param list and the `restParam`
      case Param(sym = sym, _) => preAnalyzer.getProdVarForSym(sym).asConsStrat
    val cc = new ConstraintsAndCacheHitCollector
    val bodyStrat = processBlock(defn.body)(using defn.sym :: processingDefs, cc)
    val res = freshVar(s"${defn.sym.nme}_res", S(defn.sym))
    cc.constrain(bodyStrat, res.asConsStrat)
    cc.constrain(ProdFun(paramSyms, res.asProdStrat), thisFunVar.asConsStrat)
    cc
    
  
  // returns the cache-hit set of function symbols
  def processBlock(b: Block)(using
    processingDefs: Ls[BlockMemberSymbol],
    cc: ConstraintsAndCacheHitCollector
  ): ProdStrat = ???
  
  