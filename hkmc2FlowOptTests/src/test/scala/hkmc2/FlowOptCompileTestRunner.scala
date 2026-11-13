package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowOptCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-opt") :: Nil,
):
  protected def cctx: CompilerCtx = FlowOptCompileTestRunner.cctx

end FlowOptCompileTestRunner


object FlowOptCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowOptCompilerCtx(os.pwd)

end FlowOptCompileTestRunner
