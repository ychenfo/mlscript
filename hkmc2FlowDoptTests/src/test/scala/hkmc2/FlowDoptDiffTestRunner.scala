package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._

import hkmc2.utils._
import os.Path
import io.PlatformPath.given

object FlowDoptDiffTestState extends DiffTestRunner.State:

  override def testDir = TestFolders.flowDiffDir(workingDir, "flowopt-dopt")

class FlowDoptDiffTestRunner
  extends DiffTestRunnerBase(FlowDoptDiffTestState)
  with ParallelTestExecution
