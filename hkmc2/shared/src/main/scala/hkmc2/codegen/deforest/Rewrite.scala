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

// TODO: maybe better design this to not use secondary param list for case class
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
                case _ => die
            .headOption
          val tmpSymbolsForFieldsOfCtor = ctorCls.asCls
            .map: cls =>
              cls.tree.clsParams.map: fieldName =>
                TempSymbol(N, fieldName.name)
            .getOrElse(Nil)
          FinalDest.Match(dtorScrutExprId, whichArm)(distinctSels, tmpSymbolsForFieldsOfCtor)
      finalDestToCtorIds.updateWith(ctorFinalDest):
        case N => S(Set(ctorExprId))
        case S(s) => S(s + ctorExprId)
      ctorIdToFinalDest.updateWith(ctorExprId): 
        case N => S(ctorFinalDest)
        case S(_) => die
  
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
      numOfMatchingArms = finalDestToCtorIds.keys.count:
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
  val finalDestToSymbolsToReplaceSelInArms = mutable.Map.empty[
    FinalDest,
    Map[SelId, VarSymbol] -> Map[Tree.Ident, VarSymbol]]
  // if a key doesn't exist, it means the matchId doesn't have any arm that is used more than once
  val fusingMatchIdToVarSymbolsToReplacedInAllBranches = mutable.Map.empty[
    MatchId,
    Map[SelId, VarSymbol]]
  // if a key doesn't exist, it means the final dest is only used once
  val finalDestToMatchArmFunSymbols = mutable.LinkedHashMap.empty[FinalDest, BlockMemberSymbol]
  finalDestToCtorIds.foreach:
    case (_: FinalDest.Match) -> ctorIds if ctorIds.size < 1 => die
    case (matchArmDest@FinalDest.Match(matchId, cls)) -> ctorIds if ctorIds.size > 1 =>
      for cls <- cls do
        val selNameToNewSymbol = mutable.Map.empty[Tree.Ident, VarSymbol]
        val selExprIdToNewSymbol = mutable.Map.empty[SelId, VarSymbol]
        for selId <- matchArmDest.selsInArm do
          val selName = preAnalyzer.getResult(selId._1).asInstanceOf[Select].name
          val symName = s"_deforest_${cls.nme}_${selName}_${selId._2.makeSuffix(preAnalyzer)}"
          val sym = selNameToNewSymbol.getOrElseUpdate.curried(selName):
            VarSymbol(Tree.Ident(symName))
          selExprIdToNewSymbol += selId -> sym
        finalDestToSymbolsToReplaceSelInArms += matchArmDest -> (selExprIdToNewSymbol.toMap -> selNameToNewSymbol.toMap)
        fusingMatchIdToVarSymbolsToReplacedInAllBranches.updateWith(matchId):
          case N => S(selExprIdToNewSymbol.toMap)
          case S(x) => S(x ++ selExprIdToNewSymbol.toMap)
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
  
  // if a key doesn't exist, it means the all the arms of this matchId are used more than once
  val fusingMatchIdToTmpSymbolsToReplacedInAllBranches = mutable.Map.empty[
    MatchId,
    Map[SelId, TempSymbol]]
  val selIdsInArmToSymbolsToReplace = mutable.Map.empty[SelId, TempSymbol | VarSymbol]
  locally:
    def matDestToTempSymbolMap(mat: FinalDest.Match) =
      mat.arm.fold(Nil): c =>
        mat.selsInArm.map: selId =>
          val ctorFieldNames = c.asCls.get.tree.clsParams
          val selName = preAnalyzer.getResult(selId._1).asInstanceOf[Select].name
          val idx = ctorFieldNames.indexWhere(_.id == selName)
          selId -> mat.tmpSymbolForASpecificCtorId(idx)
    for case (c, mat: FinalDest.Match) <- ctorIdToFinalDest do
      if finalDestToCtorIds(mat).size == 1 then
        val selsToTmpSyms = matDestToTempSymbolMap(mat)
        fusingMatchIdToTmpSymbolsToReplacedInAllBranches.updateWith(mat.matchId):
          case N => S(selsToTmpSyms.toMap)
          case S(m) => S(m ++ selsToTmpSyms)
        selIdsInArmToSymbolsToReplace.addAll(selsToTmpSyms)
      else
        val selsToVarSyms = finalDestToSymbolsToReplaceSelInArms(mat)._1
        selIdsInArmToSymbolsToReplace.addAll(selsToVarSyms)
  
  
  object freeVarsOfOriginalMatchesConsideringDeforestation:
    val store = mutable.Map.empty[MatchId, Ls[Symbol]]
    def apply(m: MatchId) = store.getOrElseUpdate.curried(m):
      new FreeVarTraverserForMatchConsideringDeforestation(m, drwp).freeVars



class DeforestRewriter(val rewritePrepare: DeforestRewritePrepare)(using Elaborator.State):
  val preAnalyzer = rewritePrepare.preAnalyzer
  
  def apply() =
    val withDuplicatedDefs = rewritePrepare.newSymToInstIdAndOldSym.foldRight(Transform(Nil)(preAnalyzer.b)):
      case (newSym -> (instId -> oldSym), acc) =>
        // 1. find original fundefs
        // 2. transform fun body under the specific instantiation id
        // 3. accumulate the definition
        val FunDefn(_, _, param, body) = preAnalyzer.getFunDefnForSym(oldSym).get
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
        val newFunDefn = FunDefn(N, newSym, newParam, newBody)
        Define(newFunDefn, acc)
    matchRestOfFusingMatches.getAllFunDefs:
      matchArmsOfFusingMatches.getAllFunDefs:
        withDuplicatedDefs
  
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
      case S(R(blk)) => if blk.isInstanceOf[End] then blk else die
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
    val store = mutable.Map.empty[FinalDest.Match, Either[FunDefn, Block]]
    def getAllFunDefs =
      rewritePrepare.finalDestToCtorIds.keys.foldRight(identity: Block => Block):
        case (m: FinalDest.Match, acc) =>
          store.get(m) match
            case S(L(fdefn)) => rest => Define(fdefn, acc(rest))
            case _ => acc
        case (_, acc) => acc
        
    // return a lambda, which either calls the extracted arm function
    // or contains the computations in matching arms
    def getOrElseUpdate(ctorId: CtorId): Value.Lam =
      val dest = rewritePrepare.ctorIdToFinalDest(ctorId).asInstanceOf[FinalDest.Match]
      val freeVarsInTheMatch =
        rewritePrepare.freeVarsOfOriginalMatchesConsideringDeforestation(dest.matchId)
      val armFunOrBlk = store.updateWith(dest):
        case S(R(_)) => die
        case S(f@L(_)) => S(f)
        case N => S:
          val transformedRest = matchRestOfFusingMatches.getOrElseUpdate(dest.matchId)
          val originalMatchArmBody =
            val matchExpr = preAnalyzer.matchScrutToMatchBlock(dest.matchId._1)
            dest.arm.fold(matchExpr.dflt.get): armCls =>
              matchExpr.arms.find(a => a._1.asInstanceOf[Case.Cls].cls is armCls).get._2
          // this rewrittenBody here already has its selection replaced with
          // the pre-computed var symbols (if the arm is used multiple times)
          // or the temp symbols (if the arm is used only once)
          val rewrittenBody = Begin(Transform(dest.matchId._2)(originalMatchArmBody), transformedRest).flattened
          rewritePrepare.finalDestToMatchArmFunSymbols.get(dest) match
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
                  c.tree.clsParams.map: p =>
                    rewritePrepare
                      .finalDestToSymbolsToReplaceSelInArms(dest)._2
                      .getOrElse(Tree.Ident(p.name), VarSymbol(Tree.Ident(s"_unused_${p.name}")))
              L(FunDefn(
                N,
                funSym,
                (freeVarSymForFunDef ::: varSymbolsThatReplacedSelections).asParamList :: Nil,
                funBody))
      val symsForArmFreeVarsInLam = freeVarsInTheMatch.map: x =>
        VarSymbol(Tree.Ident(x.nme))
      armFunOrBlk.get match
        case L(fdefn) => Value.Lam(
          symsForArmFreeVarsInLam.asParamList,
          Return(
            Call(
              Value.Ref(fdefn.sym),
              symsForArmFreeVarsInLam.asArgsList ::: dest.tmpSymbolForASpecificCtorId.asArgsList)(true, false),
            false))
        case R(b) => Value.Lam(
          symsForArmFreeVarsInLam.asParamList,
          b.replaceSymbols(freeVarsInTheMatch.zip(symsForArmFreeVarsInLam).toMap).mapTail:
            case Return(res, implct) => Return(res, false)
            case t => t)
  
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
      def handleCallLike(f: Path, ctorResId: ResultId)(args: Ls[Path]) =
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
            val selFieldName = preAnalyzer.getResult(s._1).asInstanceOf[Select].name
            val idx = c.tree.clsParams.indexWhere(_.id == selFieldName)
            k(args(idx))
      r match
        case call@Call(f, args) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(call.uid.withInstId) =>
          handleCallLike(f, call.uid):
            args.map:
              case Arg(false, value) => value
        case ins@Instantiate(cls, args) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(ins.uid.withInstId) =>
          handleCallLike(cls, ins.uid)(args)
        case _ => super.applyResult2(r)(k)
    
    override def applyPath(p: Path): Path = p match
      // a selection which is a consumer on its own
      case s: Select if rewritePrepare.rewritingSelIds(s.uid.withInstId) => applyPath(p)
      // a selection inside a fusing match that needs to be replaced by pre-computed symbols
      case s: Select if rewritePrepare.selIdsInArmToSymbolsToReplace.get(s.uid.withInstId).isDefined =>
        Value.Ref(rewritePrepare.selIdsInArmToSymbolsToReplace(s.uid.withInstId))
      case s@Select(p, nme) => s.symbol.flatMap(_.asObj) match
        // a fusing object constructor
        case Some(obj) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(s.uid.withInstId) =>
          matchArmsOfFusingMatches.getOrElseUpdate(s.uid.withInstId)
        case _ => s.symbol.flatMap(_.asBlkMember) match
          case Some(blk) if blk.trmImplTree.fold(false)(_.k is syntax.Fun) =>
            val newInstId = s.uid :: instId
            rewritePrepare.instIdToMappingFromOldToNewSyms.get(newInstId).fold(super.applyPath(s)): m => // FIXME: correctly rename recursive groups
              Value.Ref(m(blk))
          case _ => super.applyPath(s)
      case v: Value => applyValue(v)
      case _ => super.applyPath(p)
    
    override def applyValue(v: Value): Value = v match
      case r@Value.Ref(l) => l.asObj match
        case Some(obj) if rewritePrepare.ctorIdToFinalDest.isDefinedAt(r.uid.withInstId) =>
          matchArmsOfFusingMatches.getOrElseUpdate(r.uid.withInstId)
        case None => l.asBlkMember match
          case Some(blk) if blk.trmImplTree.fold(false)(_.k is syntax.Fun) =>
            val newInstId = r.uid :: instId
            rewritePrepare.instIdToMappingFromOldToNewSyms.get(newInstId).fold(super.applyValue(v)): m => // FIXME: correctly rename recursive groups
              Value.Ref(m(blk))
          case _ => super.applyValue(v)
        case _ => super.applyValue(v)
      case _ => super.applyValue(v)
    
    override def applyFunDefn(fun: FunDefn): FunDefn = fun
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
  
  lazy val freeVars =
    applyBlock(blk)
    result.toList.sortBy(_.uid)

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
  println(selsReplacementByCurrentMatch.size)
  val selsReplacementNotForThisMatch =
    drwp.selIdsInArmToSymbolsToReplace.toMap --
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
    result.toList.sortBy(_.uid)

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
    instId.map(preAnalyzer.getStableResultId).mkString("_")

