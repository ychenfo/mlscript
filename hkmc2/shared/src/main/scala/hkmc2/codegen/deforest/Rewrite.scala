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
  // A match arm is considered a final destination.
  // `selsInArm` totally depends on `matchId` and `arm`, while
  // `tmpSymbolForASpecificCtorId` depends on the ctor that reaches this destination.
  // This field is in the second param list because we want maps from `FinalDest`s
  // to only consider `matchId` and `arm` (i.e. the match arm).
  case Match(val matchId: MatchId, val arm: Opt[ClassLikeSymbol])(val selsInArm: Ls[SelId], val tmpSymbolForASpecificCtorId: Ls[TempSymbol])
  case Sel(val s: SelId)
  def toString(pre: DeforestPreAnalyzer): String = this match
    case Match(matchId, arm) => pre.resultIdToResult(matchId._1).toString() + "@" + matchId._2.makeSuffix(pre) + "@" + arm.fold("dflt")(_.nme)
    case Sel(s) => pre.resultIdToResult(s._1).toString() + "@" + s._2.makeSuffix(pre)
  

  
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
      case instId@(_ :+ invokedReferSite) <- instantiationId.scanLeft(Nil)(_ :+ _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.makeSuffix(preAnalyzer)
      val mapping = recursiveGroupFunSym.map: old =>
        val newSymbol =
          // for dummy refer refs, since we modify the fun def in-place, no need for new symbol
          if preAnalyzer.dummyRefsInstantiationIds.contains(instId) &&
            (old is preAnalyzer.getReferredFunSym(instId.head)) then old
          else
            BlockMemberSymbol(old.nme + s"_$newSymSuffix", Nil, old.nameIsMeaningful)
        newSymToInstIdAndOldSym.updateWith(newSymbol):
          case N => S(instId -> old)
          case S(_) => die
        old -> newSymbol
      mapping.toMap
    // TODO: can merge all ids that *only* have dtor to one id, but also need to consider all other
    // referred functions along the way?
    for
      (dtorOrSel, _) <- sol.resolveClashes._2
      instantiationId = dtorOrSel match
        case f: FieldSel => f.instantiationId.get
        case d: Dtor => d.instantiationId.get
      case instId@(_ :+ invokedReferSite) <- instantiationId.scanLeft(Nil)(_ :+ _)
    do instIdToMappingFromOldToNewSyms.getOrElseUpdate.curried(instId):
      val invokedFunSym = preAnalyzer.getReferredFunSym(invokedReferSite)
      val recursiveGroupFunSym = sol.collector.funSymToProdStratScheme.recursiveGroups(invokedFunSym)
      val newSymSuffix = instId.makeSuffix(preAnalyzer)
      val mapping = recursiveGroupFunSym.map: old =>
        val newSymbol =
          // for dummy refer refs, since we modify the fun def in-place, no need for new symbol
          if preAnalyzer.dummyRefsInstantiationIds.contains(instId) &&
            (old is preAnalyzer.getReferredFunSym(instId.head)) then old
          else
            BlockMemberSymbol(old.nme + s"_$newSymSuffix", Nil, old.nameIsMeaningful)
        newSymToInstIdAndOldSym.updateWith(newSymbol):
          case N => S(instId -> old)
          case S(_) => die
        old -> newSymbol
      mapping.toMap
  
  val finalDestToCtorIds = mutable.LinkedHashMap.empty[FinalDest, Set[CtorId]]
  val ctorIdToFinalDest = mutable.LinkedHashMap.empty[CtorId, FinalDest]
  sol.resolveClashes._1.foreach:
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
                case Case.Tup(len, _) => if (preAnalyzer.arrBlkMemSym(len) is ctorCls) then S(ctorCls) else N
                case _ => die
            .headOption
          val tmpSymbolsForFieldsOfCtor = ctorCls.asCls
            .map: cls =>
              cls.getClsParamNames(preAnalyzer).map: fieldName =>
                TempSymbol(N, s"_deforest_${cls.nme}_$fieldName")
            .getOrElse(Nil)
          FinalDest.Match(dtorScrutExprId, whichArm)(distinctSels, tmpSymbolsForFieldsOfCtor)
      finalDestToCtorIds.updateWith(ctorFinalDest):
        case N => S(Set(ctorExprId))
        case S(s) => S(s + ctorExprId)
      ctorIdToFinalDest.updateWith(ctorExprId): 
        case N => S(ctorFinalDest)
        case S(x) => die
          // assert(x == ctorFinalDest)
          // S(x)
          // S(x) // FIXME:
  
  val rewritingMatchIds -> rewritingSelIds = finalDestToCtorIds.keySet.partitionMap:
    case FinalDest.Match(matchId, _) => L(matchId)
    case FinalDest.Sel(s) => R(s)
  
  // not all symbols are used because some of the match rests are just `End`s, so no need to
  // create a new function for them.
  val fusingMatchIdToMatchRestFunSymbols = mutable.LinkedHashMap.empty[MatchId, BlockMemberSymbol]
  locally:
    // the order of traversal is deterministic because rewritingMatchIds is from
    // the keySet of linkedHashMap
    for
      case (FinalDest.Match(matchId, _), _) <- finalDestToCtorIds
      numOfMatchingArms = finalDestToCtorIds.keySet.count:
        case FinalDest.Match(matId, _) => matId == matchId
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
  
  
  // if a key doesn't exist, it means the final dest is only used once
  val finalDestToVarSymbolsToReplaceSelInArms = mutable.Map.empty[
    FinalDest,
    Map[SelId, VarSymbol] -> Map[Tree.Ident, VarSymbol]]
  // if a key doesn't exist, it means the matchId doesn't have any arm that is used more than once
  val fusingMatchIdToVarSymbolsToReplacedInAllBranches = mutable.Map.empty[
    MatchId,
    Map[SelId, VarSymbol]]
  // if a key doesn't exist, it means the all the arms of this matchId are used more than once
  val fusingMatchIdToTmpSymbolsToReplacedInAllBranches = mutable.Map.empty[
    MatchId,
    Map[SelId, TempSymbol]]
  // if a key doesn't exist, it means the final dest is only used once
  val finalDestToMatchArmFunSymbols = mutable.Map.empty[FinalDest, BlockMemberSymbol]
  val selIdsInAllArmsToSymbolsToReplace = mutable.Map.empty[SelId, TempSymbol | VarSymbol]
  locally:
    def matDestToTempSymbolMap(mat: FinalDest.Match) =
      mat.arm.fold(Nil): c =>
        mat.selsInArm.map: selId =>
          val ctorFieldNames = c.asCls.get.getClsParamNames(preAnalyzer)
          val selName = preAnalyzer.getResult(selId._1).asInstanceOf[Select].name
          val idx = ctorFieldNames.indexWhere(_ == selName.name)
          selId -> mat.tmpSymbolForASpecificCtorId(idx)
    for case (c, matchArmDest@FinalDest.Match(matchId, cls)) <- ctorIdToFinalDest do
      val numOfCtors = finalDestToCtorIds(matchArmDest).size
      if numOfCtors < 1 then
        die
      else if numOfCtors == 1 then
        val selsToTmpSyms = matDestToTempSymbolMap(matchArmDest)
        fusingMatchIdToTmpSymbolsToReplacedInAllBranches.updateWith(matchId):
          case N => S(selsToTmpSyms.toMap)
          case S(m) => S(m ++ selsToTmpSyms)
        selIdsInAllArmsToSymbolsToReplace.addAll(selsToTmpSyms)
      else
        finalDestToMatchArmFunSymbols.getOrElseUpdate.curried(matchArmDest):
          val selNameToNewSymbol = mutable.Map.empty[Tree.Ident, VarSymbol]
          val selExprIdToNewSymbol = mutable.Map.empty[SelId, VarSymbol]
          for cls <- cls do
            for selId <- matchArmDest.selsInArm do
              val selName = preAnalyzer.getResult(selId._1).asInstanceOf[Select].name
              val symName = s"_deforest_${cls.nme}_${selName.name}_${selId._2.makeSuffix(preAnalyzer)}"
              val sym = selNameToNewSymbol.getOrElseUpdate.curried(selName):
                VarSymbol(Tree.Ident(symName))
              selExprIdToNewSymbol += selId -> sym
          finalDestToVarSymbolsToReplaceSelInArms += matchArmDest -> (selExprIdToNewSymbol.toMap -> selNameToNewSymbol.toMap)
          fusingMatchIdToVarSymbolsToReplacedInAllBranches.updateWith(matchId):
            case N => S(selExprIdToNewSymbol.toMap)
            case S(x) => S(x ++ selExprIdToNewSymbol.toMap)
          selIdsInAllArmsToSymbolsToReplace.addAll(selExprIdToNewSymbol)
          val scrutName = preAnalyzer.getResult(matchId._1).asInstanceOf[Value.Ref].l.nme
          val armName = cls.fold("default")(_.nme)
          val funSym = BlockMemberSymbol(
            s"match_${scrutName}_arm_${armName}_${matchId._2.makeSuffix(preAnalyzer)}",
            Nil)
          funSym
  
  
  val alwaysNonFreeVars =
    sol.preAnalyzer.b.definedVars ++
    newSymToInstIdAndOldSym.keySet ++
    fusingMatchIdToMatchRestFunSymbols.values ++
    finalDestToMatchArmFunSymbols.values +
    State.globalThisSymbol +
    State.runtimeSymbol
  
  object freeVarsOfOriginalMatchesConsideringDeforestation:
    val store = mutable.Map.empty[MatchId, Ls[Symbol]]
    def apply(m: MatchId) = store.getOrElseUpdate.curried(m):
      new FreeVarTraverserForMatchConsideringDeforestation(m, drwp).freeVars



class DeforestRewriter(val rewritePrepare: DeforestRewritePrepare)(using Elaborator.State):
  val preAnalyzer = rewritePrepare.preAnalyzer
  
  def apply() =
    val duplicatedDefs = for
      newSym -> (instId -> oldSym) <- rewritePrepare.newSymToInstIdAndOldSym
      if !locally:
        // the dummy refs are for rewriting exported module functions in-place, so no new defs
        preAnalyzer.dummyRefsInstantiationIds.contains(instId) && locally:
          (oldSym is preAnalyzer.getReferredFunSym(instId.head)) && locally:
            assert(oldSym is newSym)
            true
    yield
        // 1. find original fundefs
        // 2. transform fun body under the specific instantiation id
        val FunDefn(_, _, param, body) = preAnalyzer.getTopLevelFunDefnForSym(oldSym).get
        val oldToNewParam = mutable.Map.empty[VarSymbol, VarSymbol]
        val newParam = param.map: 
          case ParamList(flags, params, restParam) =>
            def makeNewParam(p: Param) = 
              val Param(flags, sym, sign, modulefulness) = p
              val newSym = VarSymbol(sym.id)
              oldToNewParam += sym -> newSym
              Param(flags, newSym, sign, modulefulness)
            val newParams = params.map(makeNewParam)
            val newRestParam = restParam.map(makeNewParam)
            ParamList(flags, newParams, newRestParam)
        val newBody = Transform(instId)(body).replaceSymbols(oldToNewParam.toMap)
        // the owner is `N` because duplicated functions shouldn't be inside any module
        FunDefn(N, newSym, newParam, newBody)
    
    val withDuplicatedDefs = duplicatedDefs.foldRight(Transform(Nil)(preAnalyzer.b)):
      case (newFunDefn, acc) =>
        Define(newFunDefn, acc)
    matchRestOfFusingMatches.prependAllFunDefs:
      matchArmsOfFusingMatches.prependAllFunDefs:
        withDuplicatedDefs
    // preAnalyzer.inModuleInfo match
    // case None =>
    //   val withDuplicatedDefs = duplicatedDefs.foldRight(Transform(Nil)(preAnalyzer.b)):
    //     case (newFunDefn, acc) =>
    //       Define(newFunDefn, acc)
    //   matchRestOfFusingMatches.prependAllFunDefs:
    //     matchArmsOfFusingMatches.prependAllFunDefs:
    //       withDuplicatedDefs
    // case Some(inMod -> mainBody -> mDef) =>
    //   val newMainFun = FunDefn(
    //     S(inMod),
    //     BlockMemberSymbol("main_deforest", Nil, true),
    //     PlainParamList(Nil) :: Nil,
    //     Transform(Nil)(mainBody))
    //   Define(
    //     mDef.copy(
    //       methods = newMainFun ::
    //         (duplicatedDefs ++
    //         matchRestOfFusingMatches.getAllFunDefs ++
    //         matchArmsOfFusingMatches.getAllFunDefs ++
    //         mDef.methods).toList,
    //       preCtor = Transform(Nil)(mDef.preCtor),
    //       ctor = Transform(Nil)(mDef.ctor)),
    //     End(""))
  
  object matchRestOfFusingMatches:
    // from match scrut expr id to either a function def with a set of args that should be applied
    // or a block containing the computation in the `rest` of the match
    val store = mutable.Map.empty[MatchId, Either[FunDefn -> Ls[Symbol], Block]]
    def prependAllFunDefs =
      rewritePrepare.fusingMatchIdToMatchRestFunSymbols.foldRight(identity: Block => Block):
        case matchId -> _ -> k => store.get(matchId) match
          case S(Left(fdef -> _)) => r => Define(fdef, k(r))
          case S(Right(b)) =>
            assert(b.isInstanceOf[End])
            k
          case _ =>
            lastWords(s"not here ${preAnalyzer.getResult(matchId._1)}@${matchId._1}@${matchId._2.toReadableCallPath(preAnalyzer)}@${matchId._2}")
    // def getAllFunDefs =
    //   for
    //     (matchId, _) <- rewritePrepare.fusingMatchIdToMatchRestFunSymbols
    //     if store(matchId).isLeft
    //   yield
    //     val L(fdefn, _) = store(matchId): @unchecked
    //     fdefn
    
    // returns the block of match rest, or a `Return` block that calls the function extracted
    // from the match rest
    private val outsideQueryAvailable = mutable.Set.empty[MatchId]
    opaque type IsInnerCall = Bool
    def getOrElseUpdate(matchId: MatchId)(using inner: IsInnerCall = false): Block = store.get(matchId) match
      case S(R(blk)) =>
        if inner || blk.isInstanceOf[End] || outsideQueryAvailable.remove(matchId) then
          blk
        else
          lastWords(s"match rest $blk was expected to be used only once, but now it's used more than once")
      case S(L(fdef -> args)) =>
        Return(
          Call(callNewFun(fdef.sym), args.map(a => Arg(false, Value.Ref(a))))(true, false),
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
            Begin(withAllParentMatchesRests, getOrElseUpdate(scrutExprIdOfTheFusingOne, instantiationId)(using true))
          .flattened
        
        // if the rest is empty or only going to be used once,
        // then no need to build a function for it
        val noNeedToBuild =
          withTheRestOfPossiblyFusingMatch.isInstanceOf[End] ||
          rewritePrepare.fusingMatchIdToMatchRestFunSymbols.get(matchId).isEmpty
        if noNeedToBuild then
          if inner then outsideQueryAvailable += matchId
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
            Call(callNewFun(sym), freeVars.map(a => Arg(false, Value.Ref(a))))(true, false),
            false)
  
  object matchArmsOfFusingMatches:
    val store = mutable.Map.empty[FinalDest.Match, Either[FunDefn, Block]]
    def prependAllFunDefs =
      rewritePrepare.finalDestToCtorIds.keys.foldRight(identity: Block => Block):
        case (m: FinalDest.Match, acc) =>
          store.get(m) match
            case S(L(fdefn)) => rest => Define(fdefn, acc(rest))
            case _ => acc
        case (_, acc) => acc
    def getAllFunDefs =
      for
        case (m: FinalDest.Match, _) <- rewritePrepare.finalDestToCtorIds
        if store.get(m).exists(x => x.isLeft)
      yield
        val L(fdef) = store(m): @unchecked
        fdef
    
    // return a lambda, which either calls the extracted arm function
    // or contains the computations in matching arms
    def getOrElseUpdate(ctorId: CtorId): Value.Lam =
      val dest = rewritePrepare.ctorIdToFinalDest(ctorId).asInstanceOf[FinalDest.Match]
      val freeVarsInTheMatch =
        rewritePrepare.freeVarsOfOriginalMatchesConsideringDeforestation(dest.matchId)
      val exist = store.get(dest)
      val armFunOrBlk = exist match
        case Some(R(a)) => lastWords(s"$a in ${dest.matchId._2.toReadableCallPath(preAnalyzer)}")
        case Some(f@L(_)) => f
        case None =>
          val transformedRest = matchRestOfFusingMatches.getOrElseUpdate(dest.matchId)
          val originalMatchArmBody =
            val matchExpr = preAnalyzer.matchScrutToMatchBlock(dest.matchId._1)
            dest.arm.fold(matchExpr.dflt.get): armCls =>
              armCls.asCls.flatMap(c => c.getArrClsSymSize(preAnalyzer)) match
                case N =>
                  matchExpr.arms.find(a => a._1.asInstanceOf[Case.Cls].cls is armCls).get._2
                case S(n) => matchExpr.arms.find(a => a._1.asInstanceOf[Case.Tup].len == n).get._2
          // this rewrittenBody here already has its selection replaced with
          // the pre-computed var symbols (if the arm is used multiple times)
          // or the temp symbols (if the arm is used only once)
          val rewrittenBody = Begin(Transform(dest.matchId._2)(originalMatchArmBody), transformedRest).flattened
          val res = rewritePrepare.finalDestToMatchArmFunSymbols.get(dest) match
            case N => R(rewrittenBody)
            case Some(funSym) =>
              val freeVarSymForFunDef = freeVarsInTheMatch.map: x =>
                VarSymbol(Tree.Ident(x.nme))
              val funBody = rewrittenBody.replaceSymbols(freeVarsInTheMatch.zip(freeVarSymForFunDef).toMap).mapTail:
                case Return(res, implct) => Return(res, false)
                case t => t
              val varSymbolsThatReplacedSelections =
                // the order is the same as class ctor param
                preAnalyzer.getCtorSymFromCtorLikeExprId(ctorId._1).get.asCls.fold(Nil): c =>
                  c.getClsParamNames(preAnalyzer).map: p =>
                    rewritePrepare
                      .finalDestToVarSymbolsToReplaceSelInArms(dest)._2
                      .getOrElse(Tree.Ident(p), VarSymbol(Tree.Ident(s"_unused_${p}")))
              L(FunDefn(
                N,
                funSym,
                (freeVarSymForFunDef ::: varSymbolsThatReplacedSelections).asParamList :: Nil,
                funBody))
          store.updateWith(dest):
            case None => S(res)
            case Some(x) => lastWords(s"already exist? $x")
          res
      val symsForArmFreeVarsInLam = freeVarsInTheMatch.map: x =>
        VarSymbol(Tree.Ident(x.nme))
      armFunOrBlk match
        case L(fdefn) => Value.Lam(
          symsForArmFreeVarsInLam.asParamList,
          Return(
            Call(
              callNewFun(fdefn.sym),
              symsForArmFreeVarsInLam.asArgsList ::: dest.tmpSymbolForASpecificCtorId.asArgsList)(true, false),
            false))
        case R(b) => Value.Lam(
          symsForArmFreeVarsInLam.asParamList,
          b.replaceSymbols(freeVarsInTheMatch.zip(symsForArmFreeVarsInLam).toMap).mapTail:
            case Return(res, implct) => Return(res, false)
            case t => t)
  
  
  private def callNewFun(sym: BlockMemberSymbol): Path =
    Value.Ref(sym)
    // preAnalyzer.inModuleInfo.fold(Value.Ref(sym)):
    //   case innerSym -> _ -> _ =>
    //     Select(Value.Ref(innerSym), Tree.Ident(sym.nme))(S(sym))
  
  private val uselessSymbolSubst = new SymbolSubst
  // rewrite ctor and dtors
  // replace selections in match arms
  // replace refer site symbols to their new symbols
  class Transform(instId: InstantiationId) extends BlockTransformer(uselessSymbolSubst):
    extension (resId: ResultId)
      def withInstId = resId -> instId
    override def applyBlock(b: Block): Block = b match
      case mat@Match(scrut, arms, dflt, rest) =>
        if rewritePrepare.rewritingMatchIds.contains(scrut.uid.withInstId) then
          // since all fusing matches will be considered to be in the tail position,
          // if any of the parent `rest`s has explicit return, the rewritten match will have explicit return
          val oneOfParentMatchRestHasExplicitRet =
            preAnalyzer.matchScrutToParentMatchScruts(scrut.uid).foldRight(false): (pid, acc) =>
              acc || preAnalyzer.matchScrutToMatchBlock(pid).rest.hasExplicitRet
          val needExplicitRet = rest.hasExplicitRet || arms.exists(_._2.hasExplicitRet) || oneOfParentMatchRestHasExplicitRet
          val freeVars = rewritePrepare.freeVarsOfOriginalMatchesConsideringDeforestation(scrut.uid.withInstId)
          Return(Call(scrut, freeVars.asArgsList)(false, false), !needExplicitRet)
        else
          val allArmWillBeNonEnd =
            dflt.fold(false)(_.willBeNonEndTailBlock(instId, rewritePrepare)) &&
            arms.forall:
              case (_, body) => body.willBeNonEndTailBlock(instId, rewritePrepare)
          if allArmWillBeNonEnd then
            super.applyBlock(Match(scrut, arms, dflt, End("")))
          else
            super.applyBlock(b)
      case _ => super.applyBlock(b)
    
    override def applyResult(r: Result): Result = r match
      case _: Call =>
        // calls to fusing contructors are handled in `applyResult2`
        // here we only handle calls to non-fusing constructors and functions
        assert(!rewritePrepare.ctorIdToFinalDest.isDefinedAt(r.uid.withInstId))
        super.applyResult(r)
      case _ => super.applyResult(r)
    
    override def applyResult2(r: Result)(k: Result => Block): Block =
      def handleCallLike(_f: Path, ctorResId: ResultId)(args: Ls[Path]) = // TODO: remove the first parameter?
        val c = preAnalyzer.getCtorSymFromCtorLikeExprId(ctorResId).get.asCls.get
        rewritePrepare.ctorIdToFinalDest(ctorResId.withInstId) match
          case matchDest@FinalDest.Match(matchId, whichArm) =>
            // use pre-determined symbols
            val tempSymbolsForFields = matchDest.tmpSymbolForASpecificCtorId
            tempSymbolsForFields
              .zip(args)
              .foldRight(k(matchArmsOfFusingMatches.getOrElseUpdate(ctorResId.withInstId))):
                case (tmpSym, arg) -> rest =>
                  applyResult2(arg): r =>
                    Assign(tmpSym, r, rest)
          case FinalDest.Sel(s) =>
            val selFieldName = preAnalyzer.getResult(s._1).asInstanceOf[Select].name.name
            val idx = c.getClsParamNames(preAnalyzer).indexWhere(_ == selFieldName)
            k(args(idx))
      r match
        case call@Call(f, args) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(call.uid.withInstId) =>
          handleCallLike(f, call.uid):
            args.map:
              case Arg(false, value) => value
        case ins@Instantiate(cls, args) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(ins.uid.withInstId) =>
          handleCallLike(cls, ins.uid)(args)
        case v@Value.Arr(elems) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(v.uid.withInstId) =>
          handleCallLike(v, v.uid):
            elems.map:
              case Arg(false, value) => value
        case _ => super.applyResult2(r)(k)
    
    override def applyPath(p: Path): Path = p match
      // a selection which is a consumer on its own
      case Select(qual, _) if rewritePrepare.rewritingSelIds(p.uid.withInstId) => applyPath(qual)
      // a selection inside a fusing match that needs to be replaced by pre-computed symbols
      case s: Select if rewritePrepare.selIdsInAllArmsToSymbolsToReplace.get(s.uid.withInstId).isDefined =>
        Value.Ref(rewritePrepare.selIdsInAllArmsToSymbolsToReplace(s.uid.withInstId))
      case s@Select(p, nme) => s.symbol.flatMap(_.asObj) match
        // a fusing object constructor
        case Some(obj) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(s.uid.withInstId) =>
          matchArmsOfFusingMatches.getOrElseUpdate(s.uid.withInstId)
        case _ => s.symbol.flatMap(_.asBlkMember) match
          case Some(blk) if blk.isFunction && preAnalyzer.topLevelDefinedFunSyms.contains(blk) =>
            val inTheSameRecursiveGroup = instId.lastOption.fold(false): currentReferSite =>
              val currentSym = preAnalyzer.getReferredFunSym(currentReferSite)
              rewritePrepare.sol.collector.funSymToProdStratScheme.recursiveGroups(currentSym).contains(blk)
            val newInstId = if inTheSameRecursiveGroup then instId else instId :+ s.uid
            rewritePrepare.instIdToMappingFromOldToNewSyms.get(newInstId).fold(super.applyPath(s)): m =>
              if m(blk) is blk then
                // the new symbol being the same as the old symbol means
                // that this refer site should refer to the in-place rewritten
                // function, and to refer to the function defined in the original
                // place the selection is still needed.
                s
              else
                Value.Ref(m(blk))
              // preAnalyzer.inModuleInfo.fold(Value.Ref(m(blk))):
              //   case mod -> _ -> _ =>
              //     Select(Value.Ref(mod.asMod.get), Tree.Ident(m(blk).nme))(S(m(blk)))
          case _ => super.applyPath(s)
      case v: Value => applyValue(v)
      case _ => super.applyPath(p)
    
    override def applyValue(v: Value): Value = v match
      case r@Value.Ref(l) => l.asObj match
        case Some(obj) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(r.uid.withInstId) =>
          matchArmsOfFusingMatches.getOrElseUpdate(r.uid.withInstId)
        case None => l.asBlkMember match
          case Some(blk) if blk.isFunction && preAnalyzer.topLevelDefinedFunSyms.contains(blk) =>
            val inTheSameRecursiveGroup = instId.lastOption.fold(false): currentReferSite =>
              val currentSym = preAnalyzer.getReferredFunSym(currentReferSite)
              rewritePrepare.sol.collector.funSymToProdStratScheme.recursiveGroups(currentSym).contains(blk)
            val newInstId = if inTheSameRecursiveGroup then instId else instId :+ r.uid
            rewritePrepare.instIdToMappingFromOldToNewSyms.get(newInstId).fold(super.applyValue(v)): m =>
              Value.Ref(m(blk))
          case _ =>
            preAnalyzer.importedInfo.innerSymbolsToOutterSymbols
              .find: (in, out) =>
                l is in
              .fold(super.applyValue(v)): (in, out) =>
                Value.Ref(out)
        case _ => super.applyValue(v)
      case _ => super.applyValue(v)
    
    override def applyFunDefn(fun: FunDefn): FunDefn =
      if instId.isEmpty then
        preAnalyzer.dummyRefsToTopLevelLikeFuns.get(fun.sym) match
          case Some(ref) =>
            // val FunDefn(_, _, param, body) = preAnalyzer.getTopLevelFunDefnForSym(oldSym).get
            val param = fun.params
            val body = fun.body
            val oldToNewParam = mutable.Map.empty[VarSymbol, VarSymbol]
            val newParam = param.map: 
              case ParamList(flags, params, restParam) =>
                def makeNewParam(p: Param) = 
                  val Param(flags, sym, sign, modulefulness) = p
                  val newSym = VarSymbol(sym.id)
                  oldToNewParam += sym -> newSym
                  Param(flags, newSym, sign, modulefulness)
                val newParams = params.map(makeNewParam)
                val newRestParam = restParam.map(makeNewParam)
                ParamList(flags, newParams, newRestParam)
            val newBody = Transform(ref.uid :: Nil)(body).replaceSymbols(oldToNewParam.toMap)
            // the owner is `N` because duplicated functions shouldn't be inside any module
            FunDefn(fun.owner, fun.sym, newParam, newBody)
            // Transform(ref.uid :: Nil).applyFunDefn(fun)
          case None => fun // skip other top level functions
        
        // super.applyFunDefn(fun)
        // fun // skip top level functions // TODO: should not skip, should rewrite their body inplace
        // Transform()
      else
        super.applyFunDefn(fun)
    def apply(b: Block) =
      // println(s"transforming ${instId.toReadableCallPath(preAnalyzer)}")
      applyBlock(b)



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
      case b if b.asClsLike.isDefined || b.asMod.isDefined => ()
      case _ => if !ctx.contains(l) then result += l
    case _ => super.applyValue(v)
  
  override def applyLam(l: Value.Lam): Unit =
    val paramSymbols = l.params.params.map(p => p.sym)
    ctx ++= paramSymbols
    applyBlock(l.body)
    ctx --= paramSymbols
  
  lazy val freeVars =
    applyBlock(blk)
    (result.diff(blk.definedVars)).toList.sortBy(_.uid)

// Used on match blocks before deforestation transformation
// Compute free vars considering new vars introduced by deforestation
class FreeVarTraverserForMatchConsideringDeforestation(
  matchId: MatchId,
  drwp: DeforestRewritePrepare
) extends FreeVarTraverser(drwp.preAnalyzer.matchScrutToMatchBlock(matchId._1), drwp.alwaysNonFreeVars):
  val instantiationId = matchId._2
  val preAnalyzer = drwp.preAnalyzer
  
  val selsReplacementByCurrentMatch =
    drwp.fusingMatchIdToVarSymbolsToReplacedInAllBranches.getOrElse[Map[SelId, VarSymbol | TempSymbol]](matchId, Map.empty) ++
    drwp.fusingMatchIdToTmpSymbolsToReplacedInAllBranches.getOrElse(matchId, Map.empty)
  val selsReplacementNotForThisMatch =
    drwp.selIdsInAllArmsToSymbolsToReplace.toMap --
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
        case Value.Ref(l) if l is currentMatchScrutSymbol => ()
        case _ => super.applyPath(p)
      case Some(s) => result += s
    case _ => super.applyPath(p)
  
  override lazy val freeVars: List[Symbol] = 
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
    (result.diff(blk.definedVars)).toList.sortBy(_.uid)

class ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) extends BlockTransformer(new SymbolSubst()):
  override def applyValue(v: Value): Value = v match
    case Value.Ref(l) => Value.Ref(freeVarsAndTheirNewSyms.getOrElse(l, l))
    case _ => super.applyValue(v)

class HasExplicitRetTraverser(b: Block) extends BlockTraverserShallow:
  var result = false
  override def applyBlock(b: Block): Unit = b match
    case Return(_, imp) => result = !imp
    case _ => super.applyBlock(b)
  
  applyBlock(b)

class WillBeNonEndTailBlockTraverser(b: Block, instId: InstantiationId, drwp: DeforestRewritePrepare) extends BlockTraverserShallow:
  var result = false
  override def applyBlock(b: Block): Unit = b match
    case Match(scrut, arms, dflt, rest) =>
      result =
        drwp.rewritingMatchIds.contains(scrut.uid -> instId) ||
        rest.willBeNonEndTailBlock(instId, drwp) ||
        locally:
          dflt.fold(true)(_.willBeNonEndTailBlock(instId, drwp)) &&
          arms.forall:
            case (_, b) => b.willBeNonEndTailBlock(instId, drwp)
    case _: End => ()
    case _: BlockTail => result = true
    case _ => super.applyBlock(b)
  
  applyBlock(b)

extension (b: Block)
  def replaceSymbols(freeVarsAndTheirNewSyms: Map[Symbol, Symbol]) =
    new ReplaceLocalSymTransformer(freeVarsAndTheirNewSyms).applyBlock(b)
  def sortedFvsForTransformedBlocks(alwaysDefined: Set[Symbol]) =
    new FreeVarTraverser(b, alwaysDefined).freeVars
  def hasExplicitRet =
    new HasExplicitRetTraverser(b).result
  def willBeNonEndTailBlock(instId: InstantiationId, drwp: DeforestRewritePrepare) =
    new WillBeNonEndTailBlockTraverser(b, instId, drwp).result

extension (ps: Ls[VarSymbol])
  def asParamList = ParamList(
    ParamListFlags.empty,
    ps.map(s => Param(FldFlags.empty, s, N, Modulefulness.none)),
    N)

extension (ss: Ls[Symbol])
  def asArgsList = ss.map: s =>
    Arg(false, Value.Ref(s))

extension (instId: InstantiationId)
  def makeSuffix(preAnalyzer: DeforestPreAnalyzer) =
    "inst_" + instId.map(preAnalyzer.getStableResultId).mkString("_") + "_tsni"
    // "inst_" + instId.toReadableCallPath(preAnalyzer) + "_tsni"
  def toReadableCallPath(preAnalyzer: DeforestPreAnalyzer) =
    instId.map(x => preAnalyzer.getReferredFunSym(x).nme).mkString("_")
    // instId.map(x => preAnalyzer.getReferredFunSym(x).nme + s"$x").mkString("_")

extension (clsSym: ClassSymbol)
  def getClsParamNames(pre: DeforestPreAnalyzer) =
    pre.arrBlkMemSym.store.find(_._2 is clsSym) match
      case None => clsSym.tree.clsParams.map(_.nme)
      case Some(n, _) => Ls.range(0, n).map(_.toString())
  def getArrClsSymSize(pre: DeforestPreAnalyzer) =
    pre.arrBlkMemSym.store.find(_._2 is clsSym) match
      case None => N
      case Some(n, _) => S(n)
