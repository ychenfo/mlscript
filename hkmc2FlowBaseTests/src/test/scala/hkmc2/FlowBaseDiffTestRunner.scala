package hkmc2

import org.scalatest.{funsuite, ParallelTestExecution}
import org.scalatest.time._

import hkmc2.utils._
import os.Path
import io.PlatformPath.given

object FlowBaseDiffTestState extends DiffTestRunner.State:

  override def testDir = TestFolders.flowDiffDir(workingDir, "flowopt-base")

class FlowBaseDiffTestRunner
  extends DiffTestRunnerBase(FlowBaseDiffTestState)
  with ParallelTestExecution
