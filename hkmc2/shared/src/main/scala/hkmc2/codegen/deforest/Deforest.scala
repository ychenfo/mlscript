package hkmc2
package codegen
package deforest

import semantics.*
import syntax.Tree
import utils.*
import mlscript.utils.*, shorthands.*
import scala.collection.mutable
import Result.ResultId


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
  ) =
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    if path.startsWith(".") || path.startsWith("/") then // leave alone imports like "fs"
      file.ext match
      case "mjs" | "js" => N -> Nil
      case "mls" =>
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
        prog.main match
          case Define(defn: ClsLikeDefn, rest) if defn.k is syntax.Mod =>
            S(defn.isym -> outterSym) -> defn.methods.map:
              case fdef@FunDefn(sym = sym, _) => sym -> fdef
          case _ => lastWords("expect a module def")
      else
        N -> Nil
        
  
  
  def apply(p: Program, wd: os.Path)(using
    cfg: Config,
    tl: TL,
    raise: Raise,
    ctx: Elaborator.Ctx,
    st: State,
    elabSt: Elaborator.State,
  ): Either[Program -> String -> String, String] =
    val innerToOutterSym -> importedFunAndDefns = p.imports
      .find: (_, path) =>
        path.contains("NofibPrelude.mjs")
      .fold(N -> Nil): (_, path) =>
        deforestImport(path.replace(".mjs", ".mls"), wd)
    try
      val pre = new DeforestPreAnalyzer(p.main, importedFunAndDefns, innerToOutterSym)
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
