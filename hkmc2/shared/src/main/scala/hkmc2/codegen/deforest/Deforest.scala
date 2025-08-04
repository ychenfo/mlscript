package hkmc2
package codegen
package deforest

import semantics.*
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import Result.ResultId
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

class GetInfoOfImportedFile(publicModName: String) extends BlockTraverser:
  var funAndDefs: Ls[BlockMemberSymbol -> FunDefn] = Nil
  var innerToOutter: Opt[InnerSymbol -> BlockMemberSymbol] = N
  var lazySymbols: Ls[Symbol] = Nil
  var forceSymbols: Ls[Symbol] = Nil
  var privateFunSyms = Set.empty[BlockMemberSymbol]
  // private var shouldCollectFunDefn = false
  override def applyDefn(defn: Defn): Unit = defn match
    case clsLike: ClsLikeDefn if (clsLike.k is syntax.Mod) && clsLike.sym.nme === publicModName =>
      innerToOutter = S(clsLike.isym -> clsLike.sym)
      funAndDefs :::= clsLike.methods.map(f => f.sym -> f)
      // shouldCollectFunDefn = true
      super.applyDefn(defn)
      // shouldCollectFunDefn = false
    case lzClass: ClsLikeDefn if (lzClass.k is syntax.Cls) && lzClass.sym.nme === "Lazy" =>
      lazySymbols ::= lzClass.isym // the symbol attached to select is the inner symbol
    case _ => super.applyDefn(defn)
  
  override def applyFunDefn(fun: FunDefn): Unit =
    privateFunSyms += fun.sym
    if fun.sym.nme === "lazy" then
      lazySymbols ::= fun.sym
    if fun.sym.nme === "force" then
      forceSymbols ::= fun.sym
    // else if shouldCollectFunDefn then
    //   funAndDefs ::= fun.sym -> fun
  
  def apply(b: Block): Unit =
    applyBlock(b)
    privateFunSyms = privateFunSyms -- funAndDefs.keys

object Deforest:
  class State:
    val importedFileNameToLoweredBlock = collection.mutable.Map.empty[os.Path, Program]
  
  def deforestImport2(path: Str, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    st: State,
    elabSt: Elaborator.State,
  ): ImportedInfo =
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    assert(file.ext == "mls")
    val semBlk -> _ -> newCtx = elabSt.importedFileNameToSemBlk(file)
    val prog = st.importedFileNameToLoweredBlock.getOrElseUpdate.curried(file):
      val resolver = Resolver(tl)
      resolver.traverseBlock(semBlk)(using Resolver.ICtx.empty)
      val low = codegen.Lowering()(using
      cfg.copy(liftDefns = S(LiftDefns())), tl, raise, elabSt, newCtx)
      low.program(semBlk)
    val traverser = new GetInfoOfImportedFile(file.baseName)
    traverser(prog.main)
    ImportedInfo(
      Nil,
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
    // val innerToOutterSym -> importedFunAndDefns = p.imports
    //   .find: (outterSym, path) =>
    //     path.contains("NofibPrelude.mjs") // TODO: use config instead of hard code
    //   .fold(N -> Nil): (outterSym, path)  =>
    //     deforestImport(path.replace(".mjs", ".mls"), wd) match
    //       case inner -> outter -> funDefs =>
    //         // println(s"$outter: ${outter.uid}")
    //         // println(s"$outterSym: ${outterSym.uid}")
    //         // assert(outter is outterSym)
    //         S(inner -> outter) -> funDefs
    // val specialImports = p.imports
    //   .filter: (_, path) =>
    //     path.contains("NofibPrelude")
    
    val importedInfo = p.imports
      .find: (outterSym, path) =>
        path.contains("NofibPrelude.mjs")
      .fold(ImportedInfo.empty): (outterSym, path) =>
        deforestImport2(path.replace(".mjs", ".mls"), wd)
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
