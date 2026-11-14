package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowDnoneCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-dnone") :: Nil,
):
  protected def cctx: CompilerCtx = FlowDnoneCompileTestRunner.cctx

end FlowDnoneCompileTestRunner


object FlowDnoneCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowCompilerCtx(os.pwd, "flowopt-dnone")

end FlowDnoneCompileTestRunner
