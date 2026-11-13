package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowBaseCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-base") :: Nil,
):
  protected def cctx: CompilerCtx = FlowBaseCompileTestRunner.cctx

end FlowBaseCompileTestRunner


object FlowBaseCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowBaseCompilerCtx(os.pwd)

end FlowBaseCompileTestRunner
