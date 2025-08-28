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
  val deforestFlag = deforestation //NullaryCommand("deforest")
  val deforestInfo = NullaryCommand("deforestInfo")
  val expect = Command("expect"): ln =>
    ln.trim
  
  private val baseScp: utils.Scope =
    utils.Scope.empty
  
  val runtimeNme = baseScp.allocateName(Elaborator.State.runtimeSymbol)
  val termNme = baseScp.allocateName(Elaborator.State.termSymbol)
  val definitionMetadataNme = baseScp.allocateName(Elaborator.State.definitionMetadataSymbol)
  val prettyPrintNme = baseScp.allocateName(Elaborator.State.prettyPrintSymbol)
  
  val ltl = new TraceLogger:
    override def doTrace = debugLowering.isSet || scope.exists:
      showUCS.get.getOrElse(Set.empty).contains
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
    def importRuntimeModule(name: Str, file: os.Path) =
      h.execute(s"const $name = (await import(\"${file}\")).default;") match
      case ReplHost.Result(msg) =>
        if msg.startsWith("Uncaught") then output(s"Failed to load $name: $msg")
      case r => output(s"Failed to load $name: $r")
    importRuntimeModule(runtimeNme, runtimeFile)
    h.execute(s"const $definitionMetadataNme = Symbol.for(\"mlscript.definitionMetadata\");")
    h.execute(s"const $prettyPrintNme = Symbol.for(\"mlscript.prettyPrint\");")
    if importQQ.isSet then importRuntimeModule(termNme, termFile)
    h
  
  private var hostCreated = false
  
  
  given deforestState: deforest.Deforest.State = new deforest.Deforest.State
  
  override def run(): Unit =
    try super.run() finally if hostCreated then host.terminate()
  
  override def processTerm(blk: semantics.Term.Blk, inImport: Bool)(using Config, Raise): Unit =
    super.processTerm(blk, inImport)
    
    val outerRaise: Raise = summon
    val reportedMessages = mutable.Set.empty[Str]
    var correctResult: Opt[Str] = None
    
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
        JSBuilder()
      val le = low.program(blk)
      val nestedScp = baseScp.nest
      val je = nestedScp.givenIn:
        jsb.programBody(le, N, wd)
      val jsStr = je.stripBreaks.mkString(100)
      output(s"JS (unsanitized):")
      output(jsStr)
        
      if deforestFlag.isSet then
        import codegen.deforest.*
        output(">>>>>>>>>>>>>>>>>>>>>>>>> Deforestation JS >>>>>>>>>>>>>>>>>>>>>>>>>>")
        preludeFile.givenIn:
          Deforest(le, wd) match
            case R(msg) => output(s"Not deforestable: $msg")
            case L(deforestRes -> _ -> _) =>
              val jsStr = baseScp.nest.givenIn:
                jsb.program(deforestRes, N, wd).stripBreaks.mkString(100)
              output(jsStr)
        output("<<<<<<<<<<<<<<<<<<<<<<<<< Deforestation JS <<<<<<<<<<<<<<<<<<<<<<<<<<")
    
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
      
      def getResSymAndResNme(n: Str) =
        val resSym = new TempSymbol(S(blk), n)
        resSym -> baseScp.allocateName(resSym)
      
      def assignResultSymForBlock(lowered: Program, resSym: TempSymbol) =
        lowered.copy(main = lowered.main.mapTail:
          case e: End =>
            Assign(resSym, Value.Lit(syntax.Tree.UnitLit(false)), e)
          case Return(res, implct) =>
            assert(implct)
            Assign(resSym, res, Return(Value.Lit(syntax.Tree.UnitLit(false)), true))
          case tl: (Throw | Break | Continue) => tl
        )
      
      def mkJS(le: Program) =
        val (pre, js) = baseScp.givenIn:
          jsb.worksheet(le)
        val preStr = pre.stripBreaks.mkString(100)
        val jsStr = js.stripBreaks.mkString(100)
        if showSanitizedJS.isSet then
          output(s"JS:")
          output(jsStr)
        preStr -> jsStr
      
      def mkQuery(preStr: Str, jsStr: Str)(k: Str => Unit) =
        val queryStr = jsStr.replaceAll("\n", " ")
        val (reply, stderr) = host.query(preStr, queryStr, !expectRuntimeOrCodeGenErrors && fixme.isUnset && todo.isUnset)
        reply match
          case ReplHost.Result(content) =>
            k(content)
            // val res :+ end = content.splitSane('\n') : @unchecked
            // // TODO: seems that not all programs end with "undefined" now
            // // assert(end == "undefined")
            // handleResult(res)
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
      
      def executeJS(preStr: Str, jsStr: Str, resNme: Str) =
        if traceJS.isSet then
          host.execute(
            s"$runtimeNme.TraceLogger.enabled = true; " +
            s"$runtimeNme.TraceLogger.resetIndent(0)")
        
        // * Sometimes the JS block won't execute due to a syntax or runtime error so we always set this first
        host.execute(s"$resNme = undefined")
        
        mkQuery(preStr, jsStr): stdout =>
          stdout.splitSane('\n').init // should always ends with "undefined" (TODO: check)
            .foreach: line =>
              output(s"> ${line}")
        if traceJS.isSet then
          host.execute(s"$runtimeNme.TraceLogger.enabled = false")
      
      def handleDefinedValues(nme: Str, sym: Symbol, expect: Opt[Str])(handleResult: Str => Unit) =
        val le =
          import codegen.*
          Return(
            Call(
              Value.Ref(Elaborator.State.runtimeSymbol).selSN("printRaw"),
              Arg(N, Value.Ref(sym)) :: Nil)(true, false),
          implct = true)
        val je = baseScp.givenIn:
          jsb.block(le, endSemi = false)
        val jsStr = je.stripBreaks.mkString(100)
        mkQuery("", jsStr): out =>
          // Omit the last line which is always "undefined" or the unit.
          val result = out.lastIndexOf('\n') match
            case n if n >= 0 => out.substring(0, n)
            case _ => ""
          expect match
          case S(expected) if result =/= expected => raise:
            ErrorReport(msg"Expected: '${expected}', got: '${result}'" -> N :: Nil,
              source = Diagnostic.Source.Runtime)
          case _ => ()
          val anon = nme.isEmpty
          result match
          case "undefined" if anon =>
          case "()" if anon =>
          case _ => output(s"${if anon then "" else s"$nme "}= $result")
      
      val lowered0 = low.program(blk)
      val resSym -> resNme = getResSymAndResNme("block$res")
      val le = assignResultSymForBlock(lowered0, resSym)
      if showLoweredTree.isSet then
        output(s"Lowered:")
        output(le.showAsTree)
      
      if ppLoweredTree.isSet then
        output(s"Pretty Lowered:")
        output(Printer.mkDocument(le)(using summon[Raise], baseScp).toString)
      
      val (preStr, jsStr) = mkJS(le)
      executeJS(preStr, jsStr, resNme)
      
      if silent.isUnset then 
        import Elaborator.Ctx.*
        def definedValues = curCtx.env.iterator.flatMap:
          case (nme, e @ (_: RefElem | SelElem(base = RefElem(_: InnerSymbol)))) =>
            e.symbol match
            case S(ts: TermSymbol) if ts.k.isInstanceOf[syntax.ValLike] => S((nme, ts, N))
            case S(ts: BlockMemberSymbol)
              if ts.trmImplTree.exists(_.k.isInstanceOf[syntax.ValLike]) => S((nme, ts, N))
            case S(vs: VarSymbol) => S((nme, vs, N))
            case _ => N
          case _ => N
        val valuesToPrint = ("", resSym, expect.get) +: definedValues.toSeq.sortBy(_._1)
        valuesToPrint.foreach: (nme, sym, expected) =>
          handleDefinedValues(nme, sym, expected)(if sym === resSym then r => correctResult = S(r) else _ => ())
      
      if deforestFlag.isSet then
        import codegen.deforest.*
        output(">>>>>>>>>>>>>>>>>>>>>>>>>>> Deforestation >>>>>>>>>>>>>>>>>>>>>>>>>>>")
        val deforestLow = ltl.givenIn:
          codegen.Lowering()
        val le = deforestLow.program(blk)
        
        val collector = CollectTopLevelDefs(le.main.definedVars.filter(_.isFunction).map(_.asInstanceOf[BlockMemberSymbol]))
        deforestState.topLevelFunInPrevDiffBlocks.addAll(collector.apply(le.main))
        
        
        preludeFile.givenIn:
          Deforest(le, wd) match
            case R(msg) => output(s"Not deforestable: $msg")
            case L(deforestRes -> summary -> detail) =>
              if deforestInfo.isSet then
                output(detail)
              output("---------- deforest summary ----------")
              output(summary)
              val resSym -> resNme = getResSymAndResNme("block$res_deforest")
              val deforestRes2 = assignResultSymForBlock(deforestRes, resSym)
              if showLoweredTree.isSet then
                output(s"Lowered:")
                output(deforestRes2.showAsTree)
              if ppLoweredTree.isSet then
                output(s"Pretty Lowered:")
                output(Printer.mkDocument(deforestRes2)(using summon[Raise], baseScp).toString)
              val (preStr, jsStr) = mkJS(deforestRes2)
              if showSanitizedJS.isSet then
                output("------ deforested sanitized js -------")
                output(jsStr)
              output("-------------- executing -------------")
              executeJS(preStr, jsStr, resNme)
              if silent.isUnset then 
                handleDefinedValues("", resSym, expect.get): result =>
                  if correctResult.fold(false)(_ != result) then raise:
                    ErrorReport(
                      msg"The result from deforestated program (\"${result}\") is different from the one computed by the original prorgam (\"${correctResult.get}\")" -> N :: Nil,
                      source = Diagnostic.Source.Runtime)
          
          output("<<<<<<<<<<<<<<<<<<<<<<<<<<< Deforestation <<<<<<<<<<<<<<<<<<<<<<<<<<<")



class CollectTopLevelDefs(toCollect: Set[BlockMemberSymbol]) extends BlockTraverser:
  val res = mutable.Map.empty[BlockMemberSymbol, FunDefn]
  override def applyFunDefn(fun: FunDefn): Unit =
    if toCollect.contains(fun.sym) then
      res += fun.sym -> fun
  def apply(b: Block): Map[BlockMemberSymbol, FunDefn] =
    applyBlock(b)
    res.toMap
      