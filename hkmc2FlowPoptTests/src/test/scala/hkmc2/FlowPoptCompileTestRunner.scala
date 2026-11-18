package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowPoptCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-popt") :: Nil,
):
  protected def cctx: CompilerCtx = FlowPoptCompileTestRunner.cctx

end FlowPoptCompileTestRunner


object FlowPoptCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowCompilerCtx(os.pwd, "flowopt-popt")

end FlowPoptCompileTestRunner
