package hkmc2
package semantics

import scala.collection.mutable
import scala.annotation.tailrec

import mlscript.utils.*, shorthands.*
import hkmc2.Message.MessageContext
import utils.TraceLogger

import Elaborator.*
import hkmc2.syntax.LetBind

class Importer:
  self: Elaborator =>
  import tl.*
  
  def importPath(path: Str): Import =
    // log(s"pwd: ${os.pwd}")
    // log(s"wd: ${wd}")
    
    val file =
      if path.startsWith("/")
      then os.Path(path)
      else wd / os.RelPath(path)
    
    val nme = file.baseName
    val id = new syntax.Tree.Ident(nme) // TODO loc
    
    lazy val sym = TermSymbol(LetBind, N, id)
    
    if path.startsWith(".") || path.startsWith("/") then // leave alone imports like "fs"
      log(s"importing $file")
      
      val nme = file.baseName
      val id = new syntax.Tree.Ident(nme) // TODO loc
      
      file.ext match
      
      case "mjs" | "js" =>
        Import(sym, file.toString)
        
      case "mls" =>
        val _ -> sym -> _ =
          self.state.importedFileNameToSemBlk.getOrElseUpdate.curried(file):
            tl.trace(s">>> Importing $file"):
              val block = os.read(file)
              val fph = new FastParseHelpers(block)
              val origin = Origin(file, 0, fph)
              
              // TODO add parser option to omit internal impls
              
              val lexer = new syntax.Lexer(origin, dbg = tl.doTrace)
              val tokens = lexer.bracketedTokens
              val rules = syntax.ParseRules()
              val p = new syntax.Parser(origin, tokens, rules, raise, dbg = tl.doTrace):
                def doPrintDbg(msg: => Str): Unit =
                  // if dbg then output(msg)
                  if dbg then tl.log(msg)
              val res = p.parseAll(p.block(allowNewlines = true))
              val resBlk = new syntax.Tree.Block(res)
              
              given newCtx: Elaborator.Ctx =
                if path.contains("NofibPrelude") then // TODO:
                  prelude.copy(mode = Mode.Full).nestLocal
                else
                  prelude.copy(mode = Mode.Light).nestLocal

              val elab = Elaborator(tl, file / os.up, prelude)
              val (semBlk, _) = elab.importFrom(resBlk)
              
              
              resBlk.definedSymbols.find(_._1 === nme) match
              case Some(nme -> sym) => semBlk -> sym -> newCtx
              case None => lastWords(s"File $file does not define a symbol named $nme")
        
        val jsFile = file / os.up / (file.baseName + ".mjs")
        Import(sym, jsFile.toString)
        
      case _ =>
        raise(ErrorReport(msg"Unsupported file extension: ${file.ext}" -> N :: Nil))
        Import(sym, file.toString)
      
    else
      Import(sym, path)
    

