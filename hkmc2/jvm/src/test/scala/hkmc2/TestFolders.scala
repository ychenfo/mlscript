package hkmc2

import hkmc2.utils.*, shorthands.*


/** Centralized definitions of which test directories belong to which SBT project.
  * Each project specifies the `mlscript/` subdirectories (for diff tests) and the
  * `mlscript-compile/` subdirectories (for compile tests) that it owns. */
object TestFolders:
  
  /** Directory configuration files named `.mls` are not standalone test sources. */
  def isTestSource(file: os.BasePath): Bool =
    file.ext === "mls" && file.baseName.nonEmpty
  
  /** Helper to check whether `file` is inside (i.e. a descendant of) `dir`. */
  def isInDir(file: os.Path, dir: os.Path): Bool =
    file.startsWith(dir)
  
  /** The base test directory: `hkmc2/shared/src/test`. */
  def mainTestDir(wd: os.Path): os.Path =
    wd/"hkmc2"/"shared"/"src"/"test"
  
  /** The diff test directory: `hkmc2/shared/src/test/mlscript`. */
  def diffTestDir(wd: os.Path): os.Path =
    mainTestDir(wd)/"mlscript"
  
  /** The compile test directory: `hkmc2/shared/src/test/mlscript-compile`. */
  def compileTestDir(wd: os.Path): os.Path =
    mainTestDir(wd)/"mlscript-compile"
  
  /** The compiler paths of the test layout, which every test runner shares.
    * They are part of a `CompilerCtx`, so all the runners of one project must agree on them. */
  def compilerPaths(wd: os.Path): MLsCompiler.Paths =
    import io.PlatformPath.given
    new MLsCompiler.Paths:
      val preludeFile: io.Path = mainTestDir(wd)/"mlscript"/"decls"/"Prelude.mls"
      val runtimeFile: io.Path = compileTestDir(wd)/"Runtime.mjs"
      val runtimeSourceFile: io.Path = compileTestDir(wd)/"Runtime.mls"
      val termFile: io.Path = compileTestDir(wd)/"Term.mjs"

  /** A fresh context for compile tests. Its root configuration is fixed because cached
    * compilation units are shared between tests and must not depend on test order. */
  def compilerCtx(wd: os.Path): CompilerCtx =
    import io.PlatformPath.given
    CompilerCtx.fresh(io.FileSystem.default, compilerPaths(wd), Config.default(mainTestDir(wd)))
  
  // the lifting and aggressive setup shared by the benchmark programs (nofib and flow-opt)
  def benchConfig(wd: os.Path): Config =
    import io.PlatformPath.given
    Config.default(mainTestDir(wd)).copy(liftDefns = S(Config.LiftDefns()), aggressive = true)

  // the benchmark setup: only the nofib programs are compiled with it (lifting, aggressive, poly flow-based opt with logs)
  def nofibConfig(wd: os.Path): Config =
    import io.PlatformPath.given
    benchConfig(wd).mapOptimizer: opt =>
      opt.copy(
        // deforest = S(Config.Deforest.default),
        // flowBasedOpt = S(Config.FlowBasedOpt(Config.FlowAnalysisConfig.defaultMono.copy(
        //   // mono = false,
        //   mono = true,
        //   // debugEta = false, debugDpe = false, debugDce = false, debugDead = false)))
        //   debugEta = true, debugDpe = true, debugDce = true, debugDead = true)))
        deforest = N,
        flowBasedOpt = N
      )
  
  // a fresh context for the nofib compile tests, whose root configuration is `nofibConfig`
  def nofibCompilerCtx(wd: os.Path): CompilerCtx =
    import io.PlatformPath.given
    CompilerCtx.fresh(io.FileSystem.default, compilerPaths(wd), nofibConfig(wd))

  // flow-opt setup of one variant: deforest on or off, and flow-based opt off or on (mono or poly),
  // with its eta/dpe/dce/dead logs on; `flowopt-none` is the benchmark setup with both off
  def flowConfig(wd: os.Path, variant: Str): Config =
    import io.PlatformPath.given
    val (deforest, flowBasedMono) = variant match
      case "flowopt-dnone" => (true, N)
      case "flowopt-dopt" => (true, S(true))
      case "flowopt-none" => (false, N)
      case "flowopt-opt" => (false, S(false))
    benchConfig(wd).mapOptimizer: opt =>
      opt.copy(
        deforest = if deforest then S(Config.Deforest.default) else N,
        flowBasedOpt = flowBasedMono.map: mono =>
          Config.FlowBasedOpt(Config.FlowAnalysisConfig.defaultMono.copy(
            mono = mono,
            // debugEta = false, debugDpe = false, debugDce = false, debugDead = false)))
            debugEta = true, debugDpe = true, debugDce = true, debugDead = true))
      )

  // a fresh context for the compile tests of one flow-opt variant, whose root configuration is `flowConfig`
  def flowCompilerCtx(wd: os.Path, variant: Str): CompilerCtx =
    import io.PlatformPath.given
    CompilerCtx.fresh(io.FileSystem.default, compilerPaths(wd), flowConfig(wd, variant))

  // ——— Diff test subdirectories excluded from the main DiffTestRunner ———
  
  /** Diff test subdirectories that belong to the hkmc2NofibTests project. */
  def nofibDiffDir(wd: os.Path): os.Path =
    diffTestDir(wd)/"nofib"
  
  /** Diff test subdirectories that belong to the hkmc2AppsTests project. */
  def appsDiffDir(wd: os.Path): os.Path =
    diffTestDir(wd)/"apps"
  
  /** Diff test subdirectories that belong to the hkmc2WasmTests project. */
  def wasmDiffDir(wd: os.Path): os.Path =
    diffTestDir(wd)/"wasm"
  
  /** Diff test subdirectories that belong to the hkmc2SlopTests project. */
  def slopDiffDir(wd: os.Path): os.Path =
    diffTestDir(wd)/"slop"

  // the flow-opt variants, each a directory of the same name under `mlscript/` and `mlscript-compile/`
  val flowVariants: Ls[Str] = "flowopt-dnone" :: "flowopt-dopt" :: "flowopt-none" :: "flowopt-opt" :: Nil

  /** Diff test subdirectory of one flow-opt variant, for its hkmc2Flow*Tests project. */
  def flowDiffDir(wd: os.Path, variant: Str): os.Path =
    diffTestDir(wd)/variant

  /** Diff test subdirectories of all the flow-opt variants. */
  def flowDiffDirs(wd: os.Path): Ls[os.Path] =
    flowVariants.map(flowDiffDir(wd, _))

  /** Diff test directories that are always excluded (staging, mlscript-compile). */
  def alwaysExcludedDiffDirs(wd: os.Path): Ls[os.Path] =
    (diffTestDir(wd)/"ucs"/"staging") :: compileTestDir(wd) :: Nil
  
  /** All diff test directories excluded from the main DiffTestRunner. */
  def mainExcludedDiffDirs(wd: os.Path): Ls[os.Path] =
    nofibDiffDir(wd) ::
    appsDiffDir(wd) ::
    wasmDiffDir(wd) ::
    slopDiffDir(wd) ::
    flowDiffDirs(wd) :::
    alwaysExcludedDiffDirs(wd)
  
  /** Check whether a file should be excluded from the given list of excluded
    * directories and/or individual files. */
  def isExcluded(file: os.Path, excludedDirs: Ls[os.Path]): Bool =
    excludedDirs.exists(dir => isInDir(file, dir))
  
  // ——— Compile test directories ———
  
  /** Compile test directories for the main hkmc2JVM project.
    * We walk from `mainTestDir` so test names include the `mlscript-compile/` prefix. */
  def mainCompileDirs(wd: os.Path): Ls[os.Path] =
    mainTestDir(wd) :: Nil
  
  /** Directories whose compile files are excluded from the main CompileTestRunner. */
  def mainExcludedCompileDirs(wd: os.Path): Ls[os.Path] =
    nofibCompileDirs(wd) ::: appsCompileDirs(wd) ::: wasmCompileDirs(wd) ::: flowCompileDirs(wd)
  
  /** Compile test directories for the hkmc2NofibTests project.
    * We walk from `bench/` so test names include the `mlscript-compile/` prefix. */
  def nofibCompileDirs(wd: os.Path): Ls[os.Path] =
    compileTestDir(wd)/"nofib" :: Nil
  
  /** Compile test directories for the hkmc2AppsTests project.
    * We walk from `mlscript-compile/apps/` directly. */
  def appsCompileDirs(wd: os.Path): Ls[os.Path] =
    compileTestDir(wd)/"apps" :: Nil
  
  /** Compile test directories for the hkmc2WasmTests project.
    * We walk from `mainTestDir` so test names include the `mlscript-compile/` prefix.. */
  def wasmCompileDirs(wd: os.Path): Ls[os.Path] =
    compileTestDir(wd)/"wasm" :: Nil

  /** Compile test directory of one flow-opt variant, for its hkmc2Flow*Tests project. */
  def flowCompileDir(wd: os.Path, variant: Str): os.Path =
    compileTestDir(wd)/variant

  /** Compile test directories of all the flow-opt variants. */
  def flowCompileDirs(wd: os.Path): Ls[os.Path] =
    flowVariants.map(flowCompileDir(wd, _))

end TestFolders
