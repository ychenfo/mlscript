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


type CtorId = ResultId -> InstantiationId
type MatchId = ResultId -> InstantiationId
type SelId = ResultId -> InstantiationId

enum FinalDest:
  case Match(val matchId: MatchId, val arm: Opt[ClassLikeSymbol], val selsInArm: Ls[SelId])
  case Sel(val s: SelId)

  
class DeforestRewritePrepare(val sol: DeforestConstrainSolver)(using Elaborator.State):
  drwp =>
  val preAnalyzer = sol.preAnalyzer

  val instIdToMappingFromOldToNewSyms = mutable.Map.empty[InstantiationId, Map[BlockMemberSymbol, BlockMemberSymbol]]
  // need to be ordered because we need to traverse it to generate new fun def bodies
  val newSymToInstIdAndOldSym = mutable.LinkedHashMap.empty[BlockMemberSymbol, InstantiationId -> BlockMemberSymbol]
  locally:
    for
      (ctor, _) <- sol.resolveClashes._1
      instantiationId = ctor.instantiationId.get
      case instId@(invokedReferSite :: _) <- instantiationId.scanRight(Nil)(_ :: _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.makeSuffix(preAnalyzer)
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
      (dtorOrSel, _) <- sol.resolveClashes._2
      instantiationId = dtorOrSel match
        case f: FieldSel => f.instantiationId.get
        case d: Dtor => d.instantiationId.get
      case instId@(invokedReferSite :: _) <- instantiationId.scanRight(Nil)(_ :: _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.makeSuffix(preAnalyzer)
      val mapping = recursiveGroupFunSym.map: old =>
        val newSymbol = BlockMemberSymbol(old.nme + s"_$newSymSuffix", Nil, old.nameIsMeaningful)
        newSymToInstIdAndOldSym.updateWith(newSymbol):
          case N => S(instId -> old)
          case S(_) => die
        old -> newSymbol
      mapping.toMap
  
  val finalDestToCtorIds = mutable.LinkedHashMap.empty[FinalDest, Set[CtorId]]
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
            FinalDest.Sel(sel.head.exprId -> sel.head.instantiationId.get)
          else
            assert(dtor.size == 1)
            val dtorScrutExprId = dtor.head.scrutExprId -> dtor.head.instantiationId.get
            val distinctSels = sel
              .map: s =>
                assert(s.instantiationId.get == dtorScrutExprId._2)
                s.exprId -> s.instantiationId.get
              .distinct // need to preserve order
            assert:
              distinctSels.forall: s =>
                preAnalyzer.selsToMatchingArmsContainingIt(s._1).exists: armInfo =>
                  armInfo._1 == dtorScrutExprId._1 &&
                  armInfo._2.fold(true): clsSym =>
                     clsSym is c.ctor
            val ctorCls = preAnalyzer.getCtorSymFromCtorLikeExprId(c.exprId).get
            val whichArm = preAnalyzer.matchScrutToMatchBlock(dtorScrutExprId._1).arms
              .flatMap: x =>
                x._1 match
                  case Case.Cls(cls, _) => if (cls is ctorCls) then S(cls) else N
                  case _ => die
              .headOption
            FinalDest.Match(
              dtorScrutExprId,
              whichArm,
              distinctSels
            )
        finalDestToCtorIds.updateWith(ctorFinalDest):
          case N => S(Set(ctorExprId))
          case S(s) => S(s + ctorExprId)
        ctorExprId -> ctorFinalDest
    .toMap
  val rewritingMatchIds -> rewritingSelIds = finalDestToCtorIds.keySet.partitionMap:
    case FinalDest.Match(matchId, _, _) => L(matchId)
    case FinalDest.Sel(s) => R(s)
  
  val fusingMatchIdToMatchRestFunSymbols = mutable.LinkedHashMap.empty[MatchId, BlockMemberSymbol]
  locally:
    // the order of traversal is deterministic because rewritingMatchIds is from
    // the keySet of linkedHashMap
    for
      case (FinalDest.Match(matchId, _, _), _) <- finalDestToCtorIds
      numOfMatchingArms = finalDestToCtorIds.keySet.count:
        case FinalDest.Match(matId, _, _) => matId == matchId
        case _ => false
      if numOfMatchingArms > 1
    do
      fusingMatchIdToMatchRestFunSymbols.updateWith(matchId):
        case N =>
          val scrutName = preAnalyzer.getResult(matchId._1).asInstanceOf[Value.Ref].l.nme
          S(BlockMemberSymbol(
            s"match_${scrutName}_rest_${matchId._2.makeSuffix(preAnalyzer)}",
            Nil))
        case S(x) => S(x)
  
  val finalDestToSymbolsToReplaceSelInArms = mutable.Map.empty[
    FinalDest,
    Map[SelId, (TempSymbol | VarSymbol)] -> Map[Tree.Ident, (TempSymbol | VarSymbol)]]
  val fusingMatchIdToSymbolsToReplacedInAllBranches = mutable.Map.empty[
    MatchId,
    Map[SelId, (TempSymbol | VarSymbol)]]
  val finalDestToMatchArmFunSymbols = mutable.LinkedHashMap.empty[FinalDest, BlockMemberSymbol]
  locally:
    def updateSelReplacementMaps(matchArmDest: FinalDest.Match, useVarSym: Bool) =
      val FinalDest.Match(matchId, cls, selsInArm) = matchArmDest
      cls match
      case N => ()
      case Some(cls) =>
        val selNameToNewSymbol = mutable.Map.empty[Tree.Ident, (TempSymbol | VarSymbol)]
        val selExprIdToNewSymbol = mutable.Map.empty[SelId, (TempSymbol | VarSymbol)]
        for selId <- selsInArm do
          val selName = preAnalyzer.getResult(selId._1).asInstanceOf[Select].name
          val symName = s"_deforest_${cls.nme}_${selName}_${selId._2.makeSuffix(preAnalyzer)}"
          val sym = selNameToNewSymbol.getOrElseUpdate.curried(selName):
            if useVarSym then VarSymbol(Tree.Ident(symName)) else TempSymbol(N, symName)
          selExprIdToNewSymbol += selId -> sym
        finalDestToSymbolsToReplaceSelInArms += matchArmDest -> (selExprIdToNewSymbol.toMap -> selNameToNewSymbol.toMap)
        fusingMatchIdToSymbolsToReplacedInAllBranches.updateWith(matchId):
          case N => S(selExprIdToNewSymbol.toMap)
          case S(x) => S(x ++ selExprIdToNewSymbol.toMap)
    finalDestToCtorIds.foreach:
      case (_: FinalDest.Match) -> ctorIds if ctorIds.size < 1 => die
      case (matchArmDest@FinalDest.Match(matchId, cls, _)) -> ctorIds =>
        val needArmSymAndVarSym = ctorIds.size > 1
        updateSelReplacementMaps(matchArmDest, needArmSymAndVarSym)
        if needArmSymAndVarSym then
          val scrutName = preAnalyzer.getResult(matchId._1).asInstanceOf[Value.Ref].l.nme
          val armName = cls.fold("default")(_.nme)
          val funSym = BlockMemberSymbol(
            s"match_${scrutName}_arm_${armName}_${matchId._2.makeSuffix(preAnalyzer)}",
            Nil)
          finalDestToMatchArmFunSymbols += matchArmDest -> funSym
      case _ => ()
  
  val alwaysNonFreeVars =
    sol.preAnalyzer.b.definedVars ++
    newSymToInstIdAndOldSym.keySet ++
    fusingMatchIdToMatchRestFunSymbols.values ++
    finalDestToMatchArmFunSymbols.values +
    State.globalThisSymbol +
    State.runtimeSymbol
  
  val selIdsToSymbolsToReplace =
    finalDestToSymbolsToReplaceSelInArms.values.flatMap(_._1).toMap
  
  object freeVarsOfOriginalMatchesConsideringDeforestation:
    val store = mutable.Map.empty[MatchId, Ls[Symbol]]
    def apply(m: MatchId) = store.getOrElseUpdate.curried(m):
      new FreeVarTraverserForMatchConsideringDeforestation(m, drwp).freeVars



class DeforestRewriter(val rewritePrepare: DeforestRewritePrepare)(using Elaborator.State):
  val preAnalyzer = rewritePrepare.preAnalyzer
  
  object matchRestOfFusingMatches:
    // from match scrut expr id to either a function def with a set of args that should be applied
    val store = mutable.Map.empty[MatchId, Either[FunDefn -> Ls[Symbol], Block]]
    def getAllFunDefs =
      rewritePrepare.fusingMatchIdToMatchRestFunSymbols.foldRight(identity: Block => Block):
        case matchId -> _ -> k => store(matchId) match
          case Left(fdef -> _) => r => Define(fdef, k(r))
          case Right(b) =>
            assert(b.isInstanceOf[End])
            k
    
    // returns the block of match rest, or a `Return` block that calls the function extracted
    // from the match rest
    def getOrElseUpdate(matchId: MatchId): Block =
      store.get(matchId) match
      case S(R(blk)) => die // blk
      case S(L(fdef -> args)) =>
        Return(
          Call(Value.Ref(fdef.sym), args.map(a => Arg(false, Value.Ref(a))))(true, false),
          false)
      case N =>
        val scrutExprId -> instantiationId = matchId
        val parentMatchesScrutExprIds -> thePossiblyFusingOne = preAnalyzer
          .matchScrutToParentMatchScruts(scrutExprId)
          .span: x =>
            !rewritePrepare.rewritingMatchIds.contains(x -> instantiationId)
        val transform = new Transform(instantiationId)
        val transformedCurrentMatchRest =
          transform(preAnalyzer.matchScrutToMatchBlock(scrutExprId).rest)
        val withAllParentMatchesRests =
          parentMatchesScrutExprIds.foldLeft[Block](transformedCurrentMatchRest): (acc, p) =>
            val parentMatchRest = transform(preAnalyzer.matchScrutToMatchBlock(p).rest)
            val isEnd = parentMatchRest.isInstanceOf[End]
            if isEnd then acc else Begin(acc, parentMatchRest)
        val withTheRestOfPossiblyFusingMatch = thePossiblyFusingOne.headOption
          .fold(withAllParentMatchesRests): scrutExprIdOfTheFusingOne =>
            Begin(withAllParentMatchesRests, getOrElseUpdate(scrutExprIdOfTheFusingOne, instantiationId))
          .flattened
        
        val noNeedToBuild =
          withTheRestOfPossiblyFusingMatch.isInstanceOf[End] ||
          rewritePrepare.fusingMatchIdToMatchRestFunSymbols.get(matchId).isEmpty
        // no need to build a new function for empty rest, or if the rest is only going to be used once
        if noNeedToBuild then
          store.updateWith(matchId):
            case S(_) => die
            case N => S(R(withTheRestOfPossiblyFusingMatch))
          withTheRestOfPossiblyFusingMatch
        else // build a new function for the rest of this fusing match
          val sym = rewritePrepare.fusingMatchIdToMatchRestFunSymbols(matchId)
          val freeVars = withTheRestOfPossiblyFusingMatch
            .sortedFvsForTransformedBlocks(rewritePrepare.alwaysNonFreeVars)
          val newSymbols = freeVars.map(s => VarSymbol(Tree.Ident(s.nme)))
          val newFunDef = FunDefn(N, sym, newSymbols.asParamList :: Nil,
            withTheRestOfPossiblyFusingMatch.replaceSymbols(freeVars.zip(newSymbols).toMap))
          store.updateWith(matchId):
            case S(_) => die
            case N => S(L(newFunDef -> freeVars))
          Return(
            Call(Value.Ref(sym), freeVars.map(a => Arg(false, Value.Ref(a))))(true, false),
            false)
  
  object matchArmsOfFusingMatches:
    val store = mutable.Map.empty[FinalDest.Match, Either[FunDefn -> Ls[Symbol], Block]]
    
    // return a lambda, which either calls the extracted arm function, or contains the computations in matching arms
    def getOrElseUpdate(dest: FinalDest.Match): Value.Lam = ???
      
  
  
  val matchArmBodyFunDefns = mutable.Map.empty[FinalDest.Match, FunDefn]
  val finalDestToMatchArmBody: Map[FinalDest.Match, Ls[TempSymbol] => Result] =
    rewritePrepare.finalDestToCtorIds.collect:
      case matchArmDest@FinalDest.Match(matchId, arm, selsInArm) -> ctorIds =>
        if ctorIds.size < 1 then die
        else if ctorIds.size == 1 then ???
        else ???
    ???
        
        
      
  // val duplicatedFuns = newSymToInstIdAndOldSym.foldRight(sol.preAnalyzer.b):
  //   case (newSym -> instId, acc) =>
      // 1. find original fundefs
      // 2. transform fun body under the specific instantiation id
      // 3. accumulate the definition
      // ???
  // object transformers:
  //   val store = mutable.Map.empty[InstantiationId, Transform]
  //   def apply(instId: InstantiationId) =
  //     store.getOrElseUpdate(instId, new Transform(instId))
  
  private val uselessSymbolSubst = new SymbolSubst
  class Transform(instId: InstantiationId) extends BlockTransformer(uselessSymbolSubst):
    override def applyBlock(b: Block): Block = ???
    override def applyResult2(r: Result)(k: Result => Block): Block = ???
    def apply(b: Block) = applyBlock(b)



// Compute free vars for a block, without considering deforestation.
// Used on blocks after the deforestation transformation.
// This means that for matches we don't need to consider the extra
// free vars that may be introduced by deforestation:
// 1. the free vars from the `rest` of the their parent matches
// 2. the free vars caused by the substitution of selections of scrutinees of their parent matches
class FreeVarTraverser(val blk: Block, alwaysDefined: Set[Symbol]) extends BlockTraverser:
  protected val ctx = mutable.Set.from(alwaysDefined)
  protected val result = mutable.Set.empty[Symbol]
  
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
          case ParamList(_, params, restParam) => (params ++ restParam).map:
            case Param(sym = sym, _) => sym
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
      case c: ClsLikeDefn => die // not supported
    
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
  
  protected def analyze: Unit = applyBlock(blk)
  
  analyze
  
  val freeVars = result.toList.sortBy(_.uid)

// Used on match blocks before deforestation transformation
// Compute free vars considering new vars introduced by deforestation
class FreeVarTraverserForMatchConsideringDeforestation(
  matchId: MatchId,
  drwp: DeforestRewritePrepare
) extends FreeVarTraverser(drwp.preAnalyzer.matchScrutToMatchBlock(matchId._1), drwp.alwaysNonFreeVars):
  val instantiationId = matchId._2
  val preAnalyzer = drwp.preAnalyzer
  
  val selsReplacementByCurrentMatch =
    drwp.fusingMatchIdToSymbolsToReplacedInAllBranches(matchId)
  val selsReplacementNotForThisMatch =
    drwp.selIdsToSymbolsToReplace --
    selsReplacementByCurrentMatch.keySet
  val currentMatchScrutSymbol = blk.asInstanceOf[Match].scrut.asInstanceOf[Value.Ref].l
  

  override def applyBlock(b: Block): Unit = b match
    // a nested match
    case m@Match(scrut, _, _, _) =>
      result ++= drwp.freeVarsOfOriginalMatchesConsideringDeforestation(scrut.uid -> instantiationId)
      
      // sub-matches' scruts (which are not included in freeVarsOfNonTransformedMatches)
      // are also free vars
      val Value.Ref(l) = scrut: @unchecked
      if !ctx(l) then result += l
      
      // free vars in nested-matches reported by freeVarsOfNonTransformedMatches may also contain
      // spurious ones: those that are going to be substitued by the current match,
      // and those that are in the ctx
      result --= selsReplacementByCurrentMatch.values
      result --= ctx
    case _ => super.applyBlock(b)
  
  override def applyPath(p: Path): Unit = p match
    case p@Select(qual, name) => selsReplacementNotForThisMatch.get(p.uid -> instantiationId) match
      case None => qual match
        // if it is the scrut of current match and the computation containing
        // this selection is moved, then the selection will be replaced and there will be no free vars
        case Value.Ref(l) if l == currentMatchScrutSymbol => ()
        case _ => super.applyPath(p)
      case Some(s) => result += s
    case _ => super.applyPath(p)
  
  override def analyze: Unit =
    val Match(_, arms, dflt, rest) = blk: @unchecked
    val parentMatchRest = drwp.preAnalyzer
      .matchScrutToParentMatchScruts(matchId._1)
      .foldRight[Block](End("")): (p, acc) =>
        Begin(preAnalyzer.matchScrutToMatchBlock(p).rest, acc)
    (arms.map(_._2) ++ dflt).foreach: a =>
      // dflt may just be `throw error``, and `rest` may use vars assigned in non default arms.
      // So use `flattened` to remove dead code (after `throw error`) and spurious free vars.
      // Also take care of the `rest`s of its parent match blocks.
      val realArm = Begin(a, Begin(rest, parentMatchRest)).flattened
      applyBlock(realArm)



class ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) extends BlockTransformer(new SymbolSubst()):
  override def applyValue(v: Value): Value = v match
    case Value.Ref(l) => Value.Ref(freeVarsAndTheirNewSyms.getOrElse(l, l))
    case _ => super.applyValue(v)


extension (b: Block)
  def replaceSymbols(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) =
    new ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms).applyBlock(b)
  def sortedFvsForTransformedBlocks(alwaysDefined: Set[Symbol]) =
    new FreeVarTraverser(b, alwaysDefined).freeVars

extension (ps: Ls[VarSymbol])
  def asParamList = ParamList(
    ParamListFlags.empty,
    ps.map(s => Param(FldFlags.empty, s, N, Modulefulness.none)),
    N)

extension (instId: InstantiationId)
  def makeSuffix(preAnalyzer: DeforestPreAnalyzer) =
    instId.map(preAnalyzer.getStableResultId).mkString("_")

