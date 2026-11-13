package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowOtherCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-other") :: Nil,
):
  protected def cctx: CompilerCtx = FlowOtherCompileTestRunner.cctx

end FlowOtherCompileTestRunner


object FlowOtherCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowOtherCompilerCtx(os.pwd)

end FlowOtherCompileTestRunner
