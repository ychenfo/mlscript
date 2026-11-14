package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowNoneCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-none") :: Nil,
):
  protected def cctx: CompilerCtx = FlowNoneCompileTestRunner.cctx

end FlowNoneCompileTestRunner


object FlowNoneCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowCompilerCtx(os.pwd, "flowopt-none")

end FlowNoneCompileTestRunner
