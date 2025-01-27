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

abstract class JSBackendDiffMaker extends MLsDiffMaker:
  
  val debugLowering = NullaryCommand("dl")
  val js = NullaryCommand("js")
  val showSanitizedJS = NullaryCommand("ssjs")
  val showJS = NullaryCommand("sjs")
  val showRepl = NullaryCommand("showRepl")
  val noSanityCheck = NullaryCommand("noSanityCheck")
  val traceJS = NullaryCommand("traceJS")
  val handler = NullaryCommand("handler")
  val deforestFlag = NullaryCommand("deforest")
  val deforestInfo = NullaryCommand("deforestInfo")
  val expect = Command("expect"): ln =>
    ln.trim
  val stackSafe = Command("stackSafe"): ln =>
    ln.trim
  
  private val baseScp: utils.Scope =
    utils.Scope.empty
  
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
    h
  
  lazy val hostDeforest =
    hostCreated = true
    given TL = replTL
    val h = ReplHost(rootPath)
    h
  
  private var hostCreated = false
  override def run(): Unit =
    try super.run() finally if hostCreated then host.terminate()

  private val DEFAULT_STACK_LIMT = 500
  
  
  def mkQuery(prefix: Str, preStr: Str, jsStr: Str)(using host: ReplHost = host, r: Raise) =
    import hkmc2.Message.MessageContext
    val queryStr = jsStr.replaceAll("\n", " ")
    val (reply, stderr) = host.query(preStr, queryStr, !expectRuntimeOrCodeGenErrors && fixme.isUnset && todo.isUnset)
    reply match
      case ReplHost.Result(content, stdout) =>
        stdout match
        case None | Some("") =>
        case Some(str) =>
          str.splitSane('\n').foreach: line =>
            output(s"> ${line}")
        expect.get match
        case S(expected) if content != expected && prefix == "" => raise:
          ErrorReport(msg"Expected: ${expected}, got: ${content}" -> N :: Nil,
            source = Diagnostic.Source.Runtime)
        case _ =>
        content match
        case "undefined" =>
        case "null" =>
        case _ =>
          if silent.isUnset then output(s"$prefix= ${content}")
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
  
  override def processTerm(blk: semantics.Term.Blk, inImport: Bool)(using Raise): Unit =
    super.processTerm(blk, inImport)
    val outerRaise: Raise = summon
    var showingJSYieldedCompileError = false
    val stackLimit = stackSafe.get match
      case None => None
      case Some("off") => None
      case Some(value) => value.toIntOption match
        case None => Some(DEFAULT_STACK_LIMT)
        case Some(value) =>
          if value < 0 then
            failures += 1
            output("/!\\ Stack limit must be positive, but the stack limit here is set to " + value)
            Some(DEFAULT_STACK_LIMT)
          else
            Some(value)
    if showJS.isSet then
      given Raise =
        case d @ ErrorReport(source = Source.Compilation) =>
          showingJSYieldedCompileError = true
          outerRaise(d)
        case d => outerRaise(d)
      given Elaborator.Ctx = curCtx
      val low = ltl.givenIn:
        new codegen.Lowering(lowerHandlers = handler.isSet, stackLimit = stackLimit)
          with codegen.LoweringSelSanityChecks(instrument = false)
          with codegen.LoweringTraceLog(instrument = false)
      val jsb = new JSBuilder
        with JSBuilderArgNumSanityChecks(instrument = false)
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
        val nestedScp = baseScp
        val (pre, je) = nestedScp.givenIn:
          jsb.worksheet(deforestRes)
        output("==== JS (deforested): ====")
        
        val jsStr = je.stripBreaks.mkString(100)
        val preStr = pre.stripBreaks.mkString(100)
        output(preStr)
        output(jsStr)
        mkQuery("", preStr, jsStr)(using hostDeforest)
        output("<<<<<<<<<<<<<<<<<<<<<<<<<<< Deforestation <<<<<<<<<<<<<<<<<<<<<<<<<<<")
      
    if js.isSet && !showingJSYieldedCompileError then
      given Elaborator.Ctx = curCtx
      val low = ltl.givenIn:
        new codegen.Lowering(lowerHandlers = handler.isSet, stackLimit = stackLimit)
          with codegen.LoweringSelSanityChecks(noSanityCheck.isUnset)
          with codegen.LoweringTraceLog(traceJS.isSet)
      val jsb = new JSBuilder
        with JSBuilderArgNumSanityChecks(noSanityCheck.isUnset)
      val le = low.program(blk)
      if showLoweredTree.isSet then
        output(s"Lowered:")
        output(le.showAsTree)
      
      // * We used to do this to avoid needlessly generating new variable names in separate blocks:
      // val nestedScp = baseScp.nest
      val nestedScp = baseScp
      // val nestedScp = codegen.js.Scope(S(baseScp), curCtx.outer, collection.mutable.Map.empty) // * not needed
      
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
      
      mkQuery("", preStr, jsStr)
      
      if deforestFlag.isSet && showJS.isUnset then // TODO: refine this logic...
        mkQuery("", preStr, jsStr)(using hostDeforest)
      
      if traceJS.isSet then
        host.execute("globalThis.Predef.TraceLogger.enabled = false")
      
      import Elaborator.Ctx.*
      def definedValues = curCtx.env.iterator.flatMap:
        case (nme, e @ (_: RefElem | SelElem(RefElem(_: InnerSymbol), _, _))) =>
          e.symbol match
          case S(ts: TermSymbol) if ts.k.isInstanceOf[syntax.ValLike] => S((nme, ts))
          case S(ts: BlockMemberSymbol)
            if ts.trmImplTree.exists(_.k.isInstanceOf[syntax.ValLike]) => S((nme, ts))
          case S(vs: VarSymbol) => S((nme, vs))
          case _ => N
        case _ => N
      if silent.isUnset then definedValues.toSeq.sortBy(_._1).foreach: (nme, sym) =>
        val le = codegen.Return(codegen.Value.Ref(sym), implct = true)
        val je = nestedScp.givenIn:
          jsb.block(le)
        val jsStr = je.stripBreaks.mkString(100)
        mkQuery(s"$nme ", "", jsStr)
      
      
