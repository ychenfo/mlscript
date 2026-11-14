package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._

import hkmc2.utils._
import os.Path
import io.PlatformPath.given

object FlowNoneDiffTestState extends DiffTestRunner.State:

  override def testDir = TestFolders.flowDiffDir(workingDir, "flowopt-none")

class FlowNoneDiffTestRunner
  extends DiffTestRunnerBase(FlowNoneDiffTestState)
  with ParallelTestExecution
