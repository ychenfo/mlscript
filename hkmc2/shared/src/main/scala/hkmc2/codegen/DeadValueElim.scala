package hkmc2
package codegen

import scala.collection.mutable.{LinkedHashSet, LinkedHashMap, Buffer}

import hkmc2.utils.*, shorthands.*
import utils.*

import hkmc2.codegen.flowAnalysis.*
import semantics.*


// The solvers below remove what `FlowConstraintSolver.isDeadValue` finds unused, each at one syntax form.
// A removed result becomes the unit literal; bindings of it stay.


abstract class DeadCallElimResult extends FlowAnalysisSolverResult:
  def deadCalls: collection.Set[ConcreteId[ResultId]]
  
  final def hasWorkToDo: Bool = deadCalls.nonEmpty
  
  final def polyInstIds: Iterator[InstantiationId] = deadCalls.iterator.map(_.instId)
  
end DeadCallElimResult


object NoDeadCallElim extends DeadCallElimResult:
  val deadCalls = Set.empty[ConcreteId[ResultId]]


class DeadCallElimSolver(val constraintSolver: FlowConstraintSolver, traceLogger: TraceLogger) extends DeadCallElimResult:
  given tl: TraceLogger = traceLogger
  given fState: FlowAnalysis.State = constraintSolver.fState
  given eState: Elaborator.State = constraintSolver.eState
  given raise: Raise = constraintSolver.preAnalyzer.raise
  given symbolPrinter: SymbolPrinter = constraintSolver.preAnalyzer.traceSymbolPrinter
  
  val deadCalls =
    
    // an empty `srcs` means no producer of the callee is modeled (eg, a class parameter),
    // so an empty effect var says nothing about the call
    def isPureArgList(call: Call, cf: ConsFun): Bool =
      FlowAnalysis.isPureCall(call, cf.exprId.whichArgList)
      || cf.srcs.nonEmpty && EffectAnalysis.summarize(cf.effect) === EffectSummary.Pure
    
    def resultIsDead(cf: ConsFun): Bool = cf.res match
      case v: StratVar => constraintSolver.isDeadValue(v)
      case _ => false
    
    def isDeadPureCall(call: Call, cfs: Iterable[ConsFun]): Bool =
      // every arg list must be applied at a known call site, with no effect a caller can observe
      call.argss.indices.forall(i => cfs.exists(_.exprId.whichArgList === i))
      && cfs.forall(isPureArgList(call, _))
      // the value of the whole call is the result of its last arg list
      && cfs.filter(_.exprId.whichArgList === call.argss.size - 1).forall(resultIsDead)
    
    val consFunsByCall = LinkedHashMap.empty[ConcreteId[ResultId], Buffer[ConsFun]]
    for cf <- constraintSolver.allConsFuns do
      consFunsByCall.getOrElseUpdate(ConcreteId(cf.exprId.exprId, cf.instantiationId.get), Buffer.empty) += cf
    
    LinkedHashSet.from:
      consFunsByCall.iterator.collect:
        case (id, cfs) if id.exprId.getResult.match
          case call: Call => isDeadPureCall(call, cfs)
          case _ => false
        => id
  end deadCalls
  
  if tl.isTracing then
    given ShowCfg = ShowCfg.internal
    tl.log(">>> dead-call-elim results >>>")
    for callStr <- deadCalls.toSeq.map(id => dbg"${id.exprId.getResult.showDbg} @ ${id.instId.showInstId}").sorted do
      tl.log(s"eliminable: $callStr")
    tl.log("<<< dead-call-elim results <<<")
  end if
end DeadCallElimSolver


abstract class DeadBranchElimResult extends FlowAnalysisSolverResult:
  // per match, identified by its scrutinee, the classes whose branches never match
  def deadBranches: collection.Map[ConcreteId[ResultId], Set[ClassLikeSymbol]]
  
  final def hasWorkToDo: Bool = deadBranches.nonEmpty
  
  final def polyInstIds: Iterator[InstantiationId] = deadBranches.keysIterator.map(_.instId)
  
end DeadBranchElimResult


object NoDeadBranchElim extends DeadBranchElimResult:
  val deadBranches = Map.empty[ConcreteId[ResultId], Set[ClassLikeSymbol]]


class DeadBranchElimSolver(val constraintSolver: FlowConstraintSolver, traceLogger: TraceLogger) extends DeadBranchElimResult:
  given tl: TraceLogger = traceLogger
  given fState: FlowAnalysis.State = constraintSolver.fState
  given eState: Elaborator.State = constraintSolver.eState
  given raise: Raise = constraintSolver.preAnalyzer.raise
  given symbolPrinter: SymbolPrinter = constraintSolver.preAnalyzer.traceSymbolPrinter
  
  // matches where every class branch would go and there is no default, so nothing is removed
  val keptWholeMatches = Buffer.empty[ConcreteId[ResultId]]
  
  val deadBranches =
    
    // instances of these are only ever created as `Ctor`s; other classes (external, multi-list, objects) may come from elsewhere
    def isTrackedDataClass(cls: ClassLikeSymbol): Bool = cls match
      case cls: ClassSymbol =>
        cls.defn.exists(d => !Inheritance.isExternal(d)) && cls.tree.clsParams.size === 1
      case _ => false
    
    val dtorsByMatch = LinkedHashMap.empty[ConcreteId[ResultId], Buffer[Dtor]]
    for d <- constraintSolver.allDtors do
      dtorsByMatch.getOrElseUpdate(d.concreteId, Buffer.empty) += d
    
    val res = LinkedHashMap.empty[ConcreteId[ResultId], Set[ClassLikeSymbol]]
    for
      (id, dtors) <- dtorsByMatch
      // empty `srcs` means no producer of the scrutinee is modeled, so absence of a class says nothing
      if dtors.forall(_.srcs.nonEmpty)
      srcs = dtors.iterator.flatMap(_.srcs).toSet
      if !srcs.contains(UnknownProd)
      m <- constraintSolver.preAnalyzer.res.matchScrutToMatchBlock.get(id.exprId)
    do
      val srcClasses = srcs.collect:
        case c: Ctor => c.ctor
      // a branch on `cls` can only match a value built by `cls` or, through inheritance, by a subclass
      val dead = m.arms.iterator.collect:
        case (Case.Cls(cls, _), _)
          if isTrackedDataClass(cls)
          && !srcClasses.exists(c => (c is cls) || constraintSolver.mayInheritFields(c, cls))
        => cls
      .toSet
      val clsArms = m.arms.collect:
        case (Case.Cls(cls, _), _) => cls
      if dead.nonEmpty then
        if m.dflt.isEmpty && clsArms.forall(dead.contains) then keptWholeMatches += id
        else res(id) = dead
    res
  end deadBranches
  
  if tl.isTracing then
    given ShowCfg = ShowCfg.internal
    def showMatch(id: ConcreteId[ResultId]): Str = dbg"match on ${id.exprId.getResult.showDbg} @ ${id.instId.showInstId}"
    tl.log(">>> dead-branch-elim results >>>")
    val lines =
      deadBranches.iterator.map((id, clss) => s"eliminable: ${clss.map(_.nme).toSeq.sorted.mkString(", ")} in ${showMatch(id)}")
      ++ keptWholeMatches.iterator.map(id => s"kept, as no branch would be left: ${showMatch(id)}")
    for line <- lines.toSeq.sorted do tl.log(line)
    tl.log("<<< dead-branch-elim results <<<")
  end if
end DeadBranchElimSolver
