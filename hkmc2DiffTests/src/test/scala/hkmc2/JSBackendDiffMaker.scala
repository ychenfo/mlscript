package hkmc2

import scala.collection.mutable

import mlscript.utils.*, shorthands.*
import utils.*

import semantics.*
import codegen.*
import codegen.js.{JSBuilder, JSBuilderArgNumSanityChecks}
import document.*
import codegen.Block
import utils.Scope
import hkmc2.syntax.Tree.Ident
import hkmc2.codegen.Path
import hkmc2.Diagnostic.Source
import hkmc2.Message.MessageContext

abstract class JSBackendDiffMaker extends MLsDiffMaker:
  
  val debugLowering = NullaryCommand("dl")
  val js = NullaryCommand("js")
  val showSanitizedJS = NullaryCommand("ssjs")
  val showJS = NullaryCommand("sjs")
  val showRepl = NullaryCommand("showRepl")
  val traceJS = NullaryCommand("traceJS")
  val deforestFlag = NullaryCommand("deforest")
  val deforestInfo = NullaryCommand("deforestInfo")
  val expect = Command("expect"): ln =>
    ln.trim
  
  private val baseScp: utils.Scope =
    utils.Scope.empty
  
  val runtimeNme = baseScp.allocateName(Elaborator.State.runtimeSymbol)
  
  val ltl = new TraceLogger:
    override def doTrace = debugLowering.isSet
    override def emitDbg(str: String): Unit = output(str)
  
  val replTL = new TraceLogger:
    override def doTrace = showRepl.isSet
    override def emitDbg(str: String): Unit = output(str)
  
  val deforestTL = new TraceLogger:
    override def doTrace: Bool = deforestInfo.isSet
    override def emitDbg(str: String): Unit = output(str)
  
  lazy val host =
    hostCreated = true
    given TL = replTL
    val h = ReplHost(rootPath)
    h.execute(s"const $runtimeNme = (await import(\"${runtimeFile}\")).default;") match
    case ReplHost.Result(msg) =>
      if msg.startsWith("Uncaught") then output(s"Failed to load runtime: $msg")
    case r => output(s"Failed to load runtime: $r")
    h
  
  lazy val hostDeforest =
    hostDeforestCreated = true
    given TL = replTL
    val h = ReplHost(rootPath)
    h.execute(s"const $runtimeNme = (await import(\"${runtimeFile}\")).default;") match
    case ReplHost.Result(msg) =>
      if msg.startsWith("Uncaught") then output(s"Failed to load runtime: $msg")
    case r => output(s"Failed to load runtime: $r")
    h
  
  private var hostCreated = false
  private var hostDeforestCreated = false
  
  override def run(): Unit =
    try super.run() finally
      if hostCreated then host.terminate()
      if hostDeforestCreated then hostDeforest.terminate()

  
  
  def mkQuery(preStr: Str, jsStr: Str)(using host: ReplHost = host, r: Raise)(k: Str => Unit) =
    val queryStr = jsStr.replaceAll("\n", " ")
    val (reply, stderr) = host.query(preStr, queryStr, !expectRuntimeOrCodeGenErrors && fixme.isUnset && todo.isUnset)
    reply match
      case ReplHost.Result(content) => k(content)
      case ReplHost.Empty =>
      case ReplHost.Unexecuted(message) => ???
      case ReplHost.Error(isSyntaxError, message, otherOutputs) =>
        if otherOutputs.nonEmpty then
          otherOutputs.splitSane('\n').foreach: line =>
            output(s"> ${line}")
        if (isSyntaxError) then
          // If there is a syntax error in the generated code,
          // it should be a code generation error.
          raise(ErrorReport(msg"[Uncaught SyntaxError] ${message}" -> N :: Nil,
            source = Diagnostic.Source.Compilation))
        else
          // Otherwise, it is considered a simple runtime error.
          raise(ErrorReport(msg"${message}" -> N :: Nil,
            source = Diagnostic.Source.Runtime))
    if stderr.nonEmpty then output(s"// Standard Error:\n${stderr}")
  
  override def processTerm(blk: semantics.Term.Blk, inImport: Bool)(using Config, Raise): Unit =
    super.processTerm(blk, inImport)
    
    val outerRaise: Raise = summon
    val reportedMessages = mutable.Set.empty[Str]
    var deforestResult: Opt[Str] = None
    
    if showJS.isSet then
      given Raise =
        case d @ ErrorReport(source = Source.Compilation) =>
          reportedMessages += d.mainMsg
          outerRaise(d)
        case d => outerRaise(d)
      given Elaborator.Ctx = curCtx
      val low = ltl.givenIn:
        codegen.Lowering()
      val jsb = ltl.givenIn:
        new JSBuilder
      val le = low.program(blk)
      val nestedScp = baseScp.nest
      val je = nestedScp.givenIn:
        jsb.program(le, N, wd)
      val jsStr = je.stripBreaks.mkString(100)
      output(s"JS (unsanitized):")
      output(jsStr)
        
      if deforestFlag.isSet then
        val deforest = new Deforest(using deforestTL)
        output(">>>>>>>>>>>>>>>>>>>>>>>>>>> Deforestation >>>>>>>>>>>>>>>>>>>>>>>>>>>")
        if showLoweredTree.isSet then
          output("\n==== Non-inserted lowered tree ====")
          output(le.showAsTree)
        
        val deforestRes = deforest(le)
        
        if showLoweredTree.isSet then
          output("\n==== deforested tree ====")
          output(deforestRes.showAsTree)
          output("\n")
          
        val resSym = new TempSymbol(S(blk), "block$res")  
        
        val resNme = baseScp.allocateName(resSym)
        
        val le0 = deforestRes.copy(main = deforestRes.main.mapTail:
          case e: End =>
            Assign(resSym, Value.Lit(syntax.Tree.UnitLit(false)), e)
          case Return(res, implct) =>
            assert(implct)
            Assign(resSym, res, Return(Value.Lit(syntax.Tree.UnitLit(false)), true))
          case tl: (Throw | Break | Continue) => tl
        )
        
        val (pre, je) = baseScp.givenIn:
          jsb.worksheet(le0)
        output("==== JS (deforested): ====")
        
        val jsStr = je.stripBreaks.mkString(100)
        val preStr = pre.stripBreaks.mkString(100)
        output(preStr)
        output(jsStr)
        
        
        hostDeforest.execute(s"$resNme = undefined")
        mkQuery(preStr, jsStr)(using hostDeforest): stdout =>
          stdout.splitSane('\n').init
            .foreach: line =>
              output(s"> ${line}")
        
        if silent.isUnset then 
          import Elaborator.Ctx.*
          // def definedValues = curCtx.env.iterator.flatMap:
          //   case (nme, e @ (_: RefElem | SelElem(RefElem(_: InnerSymbol), _, _))) =>
          //     e.symbol match
          //     case S(ts: TermSymbol) if ts.k.isInstanceOf[syntax.ValLike] => S((nme, ts, N))
          //     case S(ts: BlockMemberSymbol)
          //       if ts.trmImplTree.exists(_.k.isInstanceOf[syntax.ValLike]) => S((nme, ts, N))
          //     case S(vs: VarSymbol) => S((nme, vs, N))
          //     case _ => N
          //   case _ => N
          val valuesToPrint = List(("", resSym, expect.get))
          valuesToPrint.foreach: (nme, sym, expect) =>
            val le =
              import codegen.*
              Return(
                Call(
                  Value.Ref(Elaborator.State.globalThisSymbol).selSN("Predef").selSN("printRaw"),
                  Arg(false, Value.Ref(sym)) :: Nil)(true, false),
              implct = true)
            val je = baseScp.givenIn:
              jsb.block(le, endSemi = false)
            val jsStr = je.stripBreaks.mkString(100)
            mkQuery("", jsStr)(using hostDeforest): out =>
              val result = out.splitSane('\n').init.mkString // should always ends with "undefined" (TODO: check)
              expect match
              case S(expected) if result =/= expected => raise:
                ErrorReport(msg"Expected: '${expected}', got: '${result}'" -> N :: Nil,
                  source = Diagnostic.Source.Runtime)
              case _ => ()
              if sym === resSym then deforestResult = S(result)
              result match
              case "undefined" =>
              case "()" =>
              case _ =>
                output(s"${if nme.isEmpty then "" else s"$nme "}= ${result.indentNewLines("| ")}")
        output("<<<<<<<<<<<<<<<<<<<<<<<<<<< Deforestation <<<<<<<<<<<<<<<<<<<<<<<<<<<")
      
    if js.isSet then
      given Elaborator.Ctx = curCtx
      given Raise =
        case e: ErrorReport if reportedMessages.contains(e.mainMsg) =>
          if verbose.isSet then
            output(s"Skipping already reported diagnostic: ${e.mainMsg}")
        case d => outerRaise(d)
      val low = ltl.givenIn:
        new codegen.Lowering()
          with codegen.LoweringSelSanityChecks
          with codegen.LoweringTraceLog(traceJS.isSet)
      val jsb = ltl.givenIn:
          new JSBuilder
            with JSBuilderArgNumSanityChecks
      val resSym = new TempSymbol(S(blk), "block$res")
      val lowered0 = low.program(blk)
      val le = lowered0.copy(main = lowered0.main.mapTail:
        case e: End =>
          Assign(resSym, Value.Lit(syntax.Tree.UnitLit(false)), e)
        case Return(res, implct) =>
          assert(implct)
          Assign(resSym, res, Return(Value.Lit(syntax.Tree.UnitLit(false)), true))
        case tl: (Throw | Break | Continue) => tl
      )
      if showLoweredTree.isSet then
        output(s"Lowered:")
        output(le.showAsTree)
      
      // * We used to do this to avoid needlessly generating new variable names in separate blocks:
      // val nestedScp = baseScp.nest
      val nestedScp = baseScp
      // val nestedScp = codegen.js.Scope(S(baseScp), curCtx.outer, collection.mutable.Map.empty) // * not needed
      
      val resNme = nestedScp.allocateName(resSym)
      
      if ppLoweredTree.isSet then
        output(s"Pretty Lowered:")
        output(Printer.mkDocument(le)(using summon[Raise], nestedScp).toString)
      
      val (pre, js) = nestedScp.givenIn:
        jsb.worksheet(le)
      val preStr = pre.stripBreaks.mkString(100)
      val jsStr = js.stripBreaks.mkString(100)
      if showSanitizedJS.isSet then
        output(s"JS:")
        output(jsStr)
      
      if traceJS.isSet then
        host.execute(
          "globalThis.Predef.TraceLogger.enabled = true; " +
          "globalThis.Predef.TraceLogger.resetIndent(0)")
      
      // * Sometimes the JS block won't execute due to a syntax or runtime error so we always set this first
      host.execute(s"$resNme = undefined")
      
      mkQuery(preStr, jsStr): stdout =>
          stdout.splitSane('\n').init // should always ends with "undefined" (TODO: check)
            .foreach: line =>
              output(s"> ${line}")
      
      if deforestFlag.isSet && showJS.isUnset then
        mkQuery(preStr, jsStr)(using hostDeforest)(_ => ())
      
      
      
      if traceJS.isSet then
        host.execute("globalThis.Predef.TraceLogger.enabled = false")
      
      if silent.isUnset then 
        import Elaborator.Ctx.*
        def definedValues = curCtx.env.iterator.flatMap:
          case (nme, e @ (_: RefElem | SelElem(RefElem(_: InnerSymbol), _, _))) =>
            e.symbol match
            case S(ts: TermSymbol) if ts.k.isInstanceOf[syntax.ValLike] => S((nme, ts, N))
            case S(ts: BlockMemberSymbol)
              if ts.trmImplTree.exists(_.k.isInstanceOf[syntax.ValLike]) => S((nme, ts, N))
            case S(vs: VarSymbol) => S((nme, vs, N))
            case _ => N
          case _ => N
        val valuesToPrint = ("", resSym, expect.get) +: definedValues.toSeq.sortBy(_._1)
        valuesToPrint.foreach: (nme, sym, expect) =>
          val le =
            import codegen.*
            Return(
              Call(
                Value.Ref(Elaborator.State.globalThisSymbol).selSN("Predef").selSN("printRaw"),
                Arg(false, Value.Ref(sym)) :: Nil)(true, false),
            implct = true)
          val je = nestedScp.givenIn:
            jsb.block(le, endSemi = false)
          val jsStr = je.stripBreaks.mkString(100)
          mkQuery("", jsStr): out =>
            val result = out.splitSane('\n').init.mkString // should always ends with "undefined" (TODO: check)
            expect match
            case S(expected) if result =/= expected => raise:
              ErrorReport(msg"Expected: '${expected}', got: '${result}'" -> N :: Nil,
                source = Diagnostic.Source.Runtime)
            case _ => ()
            if sym === resSym && deforestFlag.isSet && deforestResult.fold(false)(_ != result) then raise:
              ErrorReport(
                msg"The result from deforestated program (\"${deforestResult.get}\") is different from the one computed by the original prorgam (\"${result}\")" -> N :: Nil,
                source = Diagnostic.Source.Runtime)
            val anon = nme.isEmpty
            result match
            case "undefined" if anon =>
            case "()" if anon =>
            case _ =>
              output(s"${if anon then "" else s"$nme "}= ${result.indentNewLines("| ")}")
      

