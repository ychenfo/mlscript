package hkmc2
package codegen
package deforest

import scala.jdk.CollectionConverters.MapHasAsScala
import semantics.*
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import hkmc2.Config.LiftDefns


case class ImportedInfo(
  otherImports: Ls[Symbol -> Str],
  innerSymbolsToOutterSymbols: Ls[InnerSymbol -> BlockMemberSymbol],
  funAndDefs: Ls[BlockMemberSymbol -> FunDefn],
  lazySymbols: Ls[Symbol],
  forceSymbols: Ls[Symbol],
  privateSymbols: Ls[BlockMemberSymbol])

object ImportedInfo:
  val empty = ImportedInfo(Nil, Nil, Nil, Nil, Nil, Nil)

class GetInfoOfImportedFile(cfg: Config.Deforestation) extends BlockTraverser:
  var funAndDefs: Ls[BlockMemberSymbol -> FunDefn] = Nil
  var innerToOutter: Opt[InnerSymbol -> BlockMemberSymbol] = N
  var lazySymbols: Ls[Symbol] = Nil
  var forceSymbols: Ls[Symbol] = Nil
  var privateFunSyms = Set.empty[BlockMemberSymbol]
  override def applyDefn(defn: Defn): Unit = defn match
    case clsLike: ClsLikeDefn
      if clsLike.companion.isDefined && cfg.importedPublicModNames.contains(clsLike.sym.nme) =>
      val comp = clsLike.companion.get
      innerToOutter = S(comp.isym -> clsLike.sym)
      funAndDefs :::= comp.methods.map(f => f.sym -> f)
      super.applyDefn(defn)
    case _ => super.applyDefn(defn)
  
  override def applyFunDefn(fun: FunDefn): Unit =
    privateFunSyms += fun.sym
    if cfg.seeThroughLazySymbolsNames.contains(fun.sym.nme) then
      lazySymbols ::= fun.sym
    if cfg.seeThroughForceSymbolsNames.contains(fun.sym.nme) then
      forceSymbols ::= fun.sym
  
  def apply(b: Block): Unit =
    applyBlock(b)
    privateFunSyms = privateFunSyms -- funAndDefs.keys

object Deforest:
  class State:
    val importedFileNameToLoweredBlock = mutable.Map.empty[os.Path, Program]
    val topLevelFunInPrevDiffBlocks = mutable.Map.empty[BlockMemberSymbol, FunDefn]
    val resultToResultId = new java.util.IdentityHashMap[Result, Uid[Result]].asScala
    val resultIdToResult = mutable.Map.empty[Uid[Result], Result]
    object ResultUidState extends Uid.Result.State
  
  def deforestImport(path: Str, wd: os.Path)(using
    cfg: Config,
    raise: Raise,
    st: State,
    elabSt: Elaborator.State,
    ctx: Elaborator.Ctx,
  ): ImportedInfo =
    given TraceLogger = new TraceLogger:
      override def doTrace: Bool = false
    
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    assert(file.ext == "mls")
    val prog = st.importedFileNameToLoweredBlock.getOrElseUpdate.curried(file):
      val semBlk -> _ = elabSt.importedFileNameToSemBlk(file)
      val resolver = Resolver(tl)
      resolver.traverseBlock(semBlk)(using Resolver.ICtx.empty)
      val low = codegen.Lowering()(using
        cfg.copy(liftDefns = S(LiftDefns())), tl, raise, elabSt, ctx)
      low.program(semBlk)
    val traverser = new GetInfoOfImportedFile(cfg.deforest.get)
    traverser(prog.main)
    ImportedInfo(
      prog.imports,
      traverser.innerToOutter.toList,
      traverser.funAndDefs,
      traverser.lazySymbols,
      traverser.forceSymbols,
      traverser.privateFunSyms.toList.sortBy(_.uid))
  
  def apply(p: Program, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    ctx: Elaborator.Ctx,
    st: State,
    elabSt: Elaborator.State,
    preludeFile: os.Path
  ): Either[Program -> String -> String, String] =    
    val importedInfo =
      val trulyImported = p.imports
        .find: (outterSym, path) =>
          cfg.deforest.get.importedPublicModNames.exists(path.contains)
        .fold(ImportedInfo.empty): (outterSym, path) =>
          deforestImport(path.replace(".mjs", ".mls"), wd)
      trulyImported.copy(funAndDefs = trulyImported.funAndDefs ++ st.topLevelFunInPrevDiffBlocks)
    try
      val pre = new DeforestPreAnalyzer(p.main, importedInfo)
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
