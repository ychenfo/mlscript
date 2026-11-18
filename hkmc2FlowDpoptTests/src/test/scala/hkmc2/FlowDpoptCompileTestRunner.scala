package hkmc2

import hkmc2.utils.*, shorthands.*


class FlowDpoptCompileTestRunner extends CompileTestRunnerBase(
  compileDirs = TestFolders.flowCompileDir(os.pwd, "flowopt-dpopt") :: Nil,
):
  protected def cctx: CompilerCtx = FlowDpoptCompileTestRunner.cctx

end FlowDpoptCompileTestRunner


object FlowDpoptCompileTestRunner:
  
  given cctx: CompilerCtx = TestFolders.flowCompilerCtx(os.pwd, "flowopt-dpopt")

end FlowDpoptCompileTestRunner
