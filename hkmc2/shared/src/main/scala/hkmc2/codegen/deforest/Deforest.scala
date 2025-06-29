package hkmc2
package codegen
package deforest

import semantics.*
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import Result.ResultId


case class ImportedProgramInfo(
  imports: Ls[Symbol -> Str],
  innerSymbolsToOutterSymbols: Ls[InnerSymbol -> BlockMemberSymbol],
  funAndDefs: Ls[BlockMemberSymbol -> FunDefn])


class GetInfoOfImportedFile extends BlockTraverser:
  var innerSymbolsToOutterSymbols: Ls[InnerSymbol -> BlockMemberSymbol] = Nil
  var funAndDefs: Ls[BlockMemberSymbol -> FunDefn] = Nil
  
  private var shouldCollectFunDefn = true
  override def applyDefn(defn: Defn): Unit = defn match
    case clsLike: ClsLikeDefn if clsLike.k is syntax.Mod =>
      innerSymbolsToOutterSymbols ::= clsLike.isym -> clsLike.sym
      super.applyDefn(defn)
    case _: ClsLikeDefn =>
      shouldCollectFunDefn = false
      super.applyDefn(defn)
      shouldCollectFunDefn = true
    case _ => super.applyDefn(defn)
  
  override def applyFunDefn(fun: FunDefn): Unit =
    if shouldCollectFunDefn then funAndDefs ::= fun.sym -> fun


object Deforest:
  class State:
    val importedFileNameToLoweredBlock = collection.mutable.Map.empty[os.Path, Program]
    val topLevelFunSymToFunDefn = collection.mutable.Map.empty[BlockMemberSymbol, FunDefn]
  
  def deforestImport(path: Str, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    st: State,
    elabSt: Elaborator.State,
    preludeFile: os.Path,
  ): InnerSymbol -> BlockMemberSymbol -> Ls[BlockMemberSymbol -> FunDefn] =
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    assert(file.ext == "mls")
    val preludeParse = ParserSetup(preludeFile, false)
    val mainParse = ParserSetup(file, false)
    val elab = Elaborator(tl, wd, Elaborator.Ctx.empty)
    val initState = elabSt.init.nestLocal
    val (pblk, newCtx) = elab.importFrom(preludeParse.resultBlk)(using initState)
    newCtx.nestLocal.givenIn:
      val elab = Elaborator(tl, wd, newCtx)
      val parsed = mainParse.resultBlk
      val (blk0, _) = elab.importFrom(parsed)
      val resolver = Resolver(tl)
      resolver.traverseBlock(blk0)(using Resolver.ICtx.empty)
      val blk = new semantics.Term.Blk(
        semantics.Import(elabSt.runtimeSymbol, (preludeFile/os.up/os.up/os.up/"mlscript-compile"/"Runtime.mjs").toString) :: blk0.stats,
        blk0.res
      )
      val low = tl.givenIn:
        new codegen.Lowering()
      val prog = low.program(blk)
    // val semBlk -> outterSym -> newCtx = elabSt.importedFileNameToSemBlk(file)
    // val prog = st.importedFileNameToLoweredBlock.getOrElseUpdate.curried(file):
    //   val resolver = Resolver(tl)
    //   resolver.traverseBlock(semBlk)(using Resolver.ICtx.empty)
    //   val low = codegen.Lowering()(using
    //     cfg,
    //     tl,
    //     raise,
    //     elabSt,
    //     newCtx)
    //   low.program(semBlk)
    
      prog.main match
        case Define(defn: ClsLikeDefn, rest) if defn.k is syntax.Mod =>
          println(s"${defn.sym}: ${defn.sym.uid}")
          // println(s"$outterSym: ${outterSym.uid}")
          defn.isym -> defn.sym -> defn.methods.map:
            case fdef@FunDefn(sym = sym, _) => sym -> fdef
        case _ => lastWords("expect a module def")
        
  def deforestImport2(path: Str, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    st: State,
    elabSt: Elaborator.State,
  ) =
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    assert(file.ext == "mls")
    val semBlk -> outterSym -> newCtx = elabSt.importedFileNameToSemBlk(file)
    val prog = st.importedFileNameToLoweredBlock.getOrElseUpdate.curried(file):
      val resolver = Resolver(tl)
      resolver.traverseBlock(semBlk)(using Resolver.ICtx.empty)
      val low = codegen.Lowering()(using
        cfg,
        tl,
        raise,
        elabSt,
        newCtx)
      low.program(semBlk)
    val traverser = new GetInfoOfImportedFile
    traverser.applyBlock(prog.main)
    traverser.innerSymbolsToOutterSymbols ->
    traverser.funAndDefs
    
  
  def apply(p: Program, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    ctx: Elaborator.Ctx,
    st: State,
    elabSt: Elaborator.State,
    preludeFile: os.Path
  ): Either[Program -> String -> String, String] =
    val innerToOutterSym -> importedFunAndDefns = p.imports
      .find: (outterSym, path) =>
        path.contains("NofibPrelude.mjs") // TODO: use config instead of hard code
      .fold(N -> Nil): (outterSym, path)  =>
        deforestImport(path.replace(".mjs", ".mls"), wd) match
          case inner -> outter -> funDefs =>
            println(s"$outter: ${outter.uid}")
            println(s"$outterSym: ${outterSym.uid}")
            // assert(outter is outterSym)
            S(inner -> outter) -> funDefs
    val specialImports = p.imports
      .filter: (_, path) =>
        path.contains("NofibPrelude")
    
    
    // val in2out -> impFunDef = p.imports
    //   .find: (outterSym, path) =>
    //     path.contains("NofibPrelude.mjs") // TODO: use config instead of hard code
    //   .fold(Nil -> Nil): (outterSym, path)  =>
    //     deforestImport2(path.replace(".mjs", ".mls"), wd)
    // val importedFileInfo = ImportedProgramInfo(
    //   p.imports,
    //   in2out,
    //   impFunDef)
          
        
    try
      val pre = new DeforestPreAnalyzer(p.main, importedFunAndDefns, innerToOutterSym, p.imports)
      val col = new DeforestConstraintsCollector(pre)
      val ana = new DeforestConstrainSolver(col)
      val rwp = new DeforestRewritePrepare(ana)
      val rw = new DeforestRewriter(rwp)
      val detail = col.constraints
        .map: (p, c) =>
          (s"$p --> $c")
        .mkString("\n")
      val summary = rwp.ctorIdToFinalDest
        .map: (ctorid, dest) =>
          pre.getResult(ctorid._1).toString() +
          "@" +
          pre.getStableResultId(ctorid._1) +
          "@" +
          ctorid._2.makeSuffix(pre) +
          " --> " +
          dest.toString(pre)
        .mkString("\n")
      val deforestRes = rw()
      L:
        Program(p.imports, deforestRes) -> summary -> detail
    catch
      case NotDeforestableException(msg) => R(msg)
