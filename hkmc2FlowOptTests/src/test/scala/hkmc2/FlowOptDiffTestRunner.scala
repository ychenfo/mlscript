package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._

import hkmc2.utils._
import os.Path
import io.PlatformPath.given

object FlowOptDiffTestState extends DiffTestRunner.State:

  override def testDir = TestFolders.flowDiffDir(workingDir, "flowopt-opt")

class FlowOptDiffTestRunner
  extends DiffTestRunnerBase(FlowOptDiffTestState)
  with ParallelTestExecution
