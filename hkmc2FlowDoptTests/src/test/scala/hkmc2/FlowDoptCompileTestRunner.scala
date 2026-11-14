package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowDoptCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-dopt") :: Nil,
):
  protected def cctx: CompilerCtx = FlowDoptCompileTestRunner.cctx

end FlowDoptCompileTestRunner


object FlowDoptCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowCompilerCtx(os.pwd, "flowopt-dopt")

end FlowDoptCompileTestRunner
