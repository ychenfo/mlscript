package hkmc2
package codegen
package deforest


import semantics.*
import semantics.Elaborator.State
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import Result.ResultId

type InstantiationId = Ls[ResultId]
type CtorId = ResultId -> InstantiationId

enum FinalDest:
  case Match(val scrutExprId: ResultId, val instantiationId: InstantiationId, val arm: ClassLikeSymbol, val selsInArm: Ls[ResultId])
  case Sel(val s: ResultId)
  
class DeforestRewritePrepare(val sol: DeforestConstrainSolver)(using Elaborator.State):
  val preAnalyzer = sol.preAnalyzer

  val instIdToMappingFromOldToNewSyms = mutable.Map.empty[Ls[ResultId], Map[BlockMemberSymbol, BlockMemberSymbol]]
  // need to be ordered because we need to traverse it to generate new fun def bodies
  val newSymToInstIdAndOldSym = mutable.LinkedHashMap.empty[BlockMemberSymbol, Ls[ResultId] -> BlockMemberSymbol]
  locally:
    for
      (ctor, _) <- sol.resolveClashes._1
      instantiationId = ctor.instantiationId.get
      case instId@(invokedReferSite :: _) <- instantiationId.scanRight(Nil)(_ :: _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.map(preAnalyzer.getStableResultId).mkString("_")
      val mapping = recursiveGroupFunSym.map: old =>
        val newSymbol = BlockMemberSymbol(old.nme + s"_$newSymSuffix", Nil, old.nameIsMeaningful)
        newSymToInstIdAndOldSym.updateWith(newSymbol):
          case N => S(instId -> old)
          case S(_) => die
        old -> newSymbol
      mapping.toMap
    // TODO: can merge all ids that *only* have dtor to one id, but also need to consider all other
    // referred functions along the way
    for
      case (dtor: Dtor, _) <- sol.resolveClashes._2
      instantiationId = dtor.instantiationId.get
      case instId@(invokedReferSite :: _) <- instantiationId.scanRight(Nil)(_ :: _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.map(preAnalyzer.getStableResultId).mkString("_")
      val mapping = recursiveGroupFunSym.map: old =>
        val newSymbol = BlockMemberSymbol(old.nme + s"_$newSymSuffix", Nil, old.nameIsMeaningful)
        newSymToInstIdAndOldSym.updateWith(newSymbol):
          case N => S(instId -> old)
          case S(_) => die
        old -> newSymbol
      mapping.toMap
  
  val finalDestToCtorIds = mutable.Map.empty[FinalDest, Set[CtorId]]
  val ctorIdToFinalDest: Map[CtorId, FinalDest] = sol.resolveClashes._1
    .map:
      case (c: Ctor, dtors -> noCons) =>
        assert(!noCons)
        val (dtor, sel) = dtors.partitionMap:
          case d: Dtor => L(d)
          case s: FieldSel => R(s)
        val ctorExprId = c.exprId -> c.instantiationId.get
        val ctorFinalDest =
          if dtor.isEmpty then
            assert(sel.size == 1)
            FinalDest.Sel(sel.head.exprId)
          else
            assert(dtor.size == 1)
            val dtorScrutExprId = dtor.head.scrutExprId
            val distinctSels = sel.map(_.exprId).distinct // need to preserve order
            distinctSels.foreach: s =>
              assert(preAnalyzer.selsToMatchingArms(s).exists(_._1 == dtorScrutExprId))
            FinalDest.Match(
              dtorScrutExprId,
              dtor.head.instantiationId.get,
              preAnalyzer.getCtorSymFromCtorLikeExprId(c.exprId).get,
              distinctSels
            )
        finalDestToCtorIds.updateWith(ctorFinalDest):
          case N => S(Set(ctorExprId))
          case S(s) => S(s + ctorExprId)
        ctorExprId -> ctorFinalDest
    .toMap
  val rewritingMatchIds -> rewritingSelIds = finalDestToCtorIds.keySet.partitionMap:
    case FinalDest.Match(scrutExprId = s, instantiationId = id, _) => L(s -> id)
    case FinalDest.Sel(s) => R(s)



class DeforestRewriter(val rewritePrepare: DeforestRewritePrepare)(using Elaborator.State):
  val finalDestToMatchArmBody: Map[FinalDest.Match, Ls[TempSymbol] => Block] =
    rewritePrepare.finalDestToCtorIds.collect:
      case (FinalDest.Match(scrutExprId, instantiationId, arm, selsInArm) -> ctorIds) => ???
    ???
        
        
      
  // val duplicatedFuns = newSymToInstIdAndOldSym.foldRight(sol.preAnalyzer.b):
  //   case (newSym -> instId, acc) =>
      // 1. find original fundefs
      // 2. transform fun body under the specific instantiation id
      // 3. accumulate the definition
      // ???
  class Transformer(instId: InstantiationId) extends BlockTransformer(new SymbolSubst):
    override def applyBlock(b: Block): Block = ???
    override def applyResult2(r: Result)(k: Result => Block): Block = ???
    def apply(b: Block) = applyBlock(b)