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
