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
    val topLevelFunSymToFunDefn = collection.mutable.Map.empty[BlockMemberSymbol, FunDefn]
  
  def apply(p: Program)(using State, Elaborator.State): Either[Program -> String -> String, String] =
    try
      val pre = new DeforestPreAnalyzer(p.main)
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
