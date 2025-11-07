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
import hkmc2.syntax.Keyword.in


case class ImportedInfo(
  otherImports: Ls[Symbol -> Str],
  innerSymbolsToOutterSymbols: Ls[InnerSymbol -> BlockMemberSymbol],
  funAndDefs: Ls[BlockMemberSymbol -> FunDefn],
  lazySymbols: Ls[Symbol],
  forceSymbols: Ls[Symbol],
  privateSymbols: Ls[BlockMemberSymbol]):
  
  def :::(other: ImportedInfo) =
    ImportedInfo(
      otherImports ::: other.otherImports,
      innerSymbolsToOutterSymbols ::: other.innerSymbolsToOutterSymbols,
      funAndDefs ::: other.funAndDefs,
      lazySymbols ::: other.lazySymbols,
      forceSymbols ::: other.forceSymbols,
      privateSymbols ::: other.privateSymbols)

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
      if clsLike.companion.isDefined &&
      cfg.seethroughModules.exists(p => p.baseName == clsLike.sym.nme) =>
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
  
  def deforestImport(file: os.Path)(using
    cfg: Config,
    raise: Raise,
    st: State,
    elabSt: Elaborator.State,
    ctx: Elaborator.Ctx,
  ): ImportedInfo =
    given localTL: TraceLogger = new TraceLogger:
      override def doTrace: Bool = false
    
    val prog = st.importedFileNameToLoweredBlock.getOrElseUpdate.curried(file):
      val semBlk -> _ = elabSt.importedFileNameToSemBlk(file)
      val resolver = Resolver(localTL)
      resolver.traverseBlock(semBlk)(using Resolver.ICtx.empty)
      val low = codegen.Lowering()(using
        cfg.copy(liftDefns = S(LiftDefns())), localTL, raise, elabSt, ctx)
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
  ): Either[Program -> RenewSymbolTransformer, String] = 
    val importedInfo =
      val trulyImported = p.imports
        .map: (_, path) =>
          if path.startsWith("/")
            then os.Path(path.replace(".mjs", ".mls"))
            else wd / os.RelPath(path.replace(".mjs", ".mls"))
        .filter(cfg.deforest.get.seethroughModules.contains)
        .foldLeft(ImportedInfo.empty): (acc, path) =>
          acc ::: deforestImport(path)
      trulyImported.copy(funAndDefs = trulyImported.funAndDefs ++ st.topLevelFunInPrevDiffBlocks)
    try
      // st.topLevelFunInPrevDiffBlocks.foreach(x => {println(x._1); println(x._2.body.toString().splitSane('\n').map(l => s"\t$l").mkString("\n"))})
      val pre = new DeforestPreAnalyzer(p.main, importedInfo)
      val col = new DeforestConstraintsCollector(pre)
      val ana = new DeforestConstrainSolver(col)
      val rwp = new DeforestRewritePrepare(ana)
      val rw = new DeforestRewriter(rwp)
      val deforestRes = rw()
      val symbolRenew = new RenewSymbolTransformer(deforestRes)
      val res = symbolRenew.res
      L(Program(p.imports, res) -> symbolRenew)
    catch
      case NotDeforestableException(msg) => R(msg)



class RenewSymbolSubst(b: Block)(using Elaborator.State) extends SymbolSubst:
  val map = mutable.Map.empty[Symbol, Symbol]
  private def cloneSym(s: Symbol): Symbol =
    s match
      case s: BlockMemberSymbol => new BlockMemberSymbol(s.nme, s.trees, s.nameIsMeaningful)
      case s: TempSymbol => new TempSymbol(s.trm, s.nme)
      case s: VarSymbol => new VarSymbol(s.id)
      case s: FlowSymbol => new FlowSymbol(s.nme)
      case s: InstSymbol => new InstSymbol(s.origin.subst(using this))
      case s: BuiltinSymbol => s
      case s: TermSymbol => new TermSymbol(s.k, s.owner.map(_.subst(using this)), s.id)
      case s: ClassSymbol => new ClassSymbol(s.tree, s.id)
      case s: ModuleOrObjectSymbol => new ModuleOrObjectSymbol(s.tree, s.id)
      case s: TypeAliasSymbol => new TypeAliasSymbol(s.id)
      case s: PatternSymbol => new PatternSymbol(s.id, s.params, s.body)
      case s: TopLevelSymbol => s
      case s: ErrorSymbol => new ErrorSymbol(s.nme, s.tree)
  
  for s <- b.topLvlDefinedVars.toList.sortBy(_.uid) do
    map.addOne(s, cloneSym(s))
    
  override def mapBlockMemberSym(s: BlockMemberSymbol): BlockMemberSymbol =
    map.getOrElse(s, s).asInstanceOf[BlockMemberSymbol]
  override def mapFlowSym(s: FlowSymbol): FlowSymbol =
    map.getOrElse(s, s).asInstanceOf[FlowSymbol]
  override def mapTempSym(s: TempSymbol): TempSymbol =
    map.getOrElse(s, s).asInstanceOf[TempSymbol]
  override def mapVarSym(s: VarSymbol): VarSymbol =
    map.getOrElse(s, s).asInstanceOf[VarSymbol]
  override def mapInstSym(s: InstSymbol): InstSymbol =
    val newOrigin = s.origin.subst(using this)
    if newOrigin is s.origin then
      map.getOrElse(s, s).asInstanceOf[InstSymbol]
    else
      map
        .updateWith(s):
          case None => Some(cloneSym(s))
          case Some(ns) => Some(ns)
        .get.asInstanceOf[InstSymbol]
  override def mapBuiltInSym(s: BuiltinSymbol): BuiltinSymbol =
    map.getOrElse(s, s).asInstanceOf[BuiltinSymbol]
  override def mapTermSym(s: TermSymbol): TermSymbol =
    val newOwner = s.owner.map(o => o.subst(using this))
    val isSame = newOwner.zip(s.owner).fold(true)((n, o) => n is o)
    if isSame then
      map.getOrElse(s, s).asInstanceOf[TermSymbol]
    else
      map
        .updateWith(s):
          case None => Some(cloneSym(s))
          case Some(ns) => Some(ns)
        .get.asInstanceOf[TermSymbol]
  override def mapCtorSym(s: CtorSymbol): CtorSymbol =
    map.getOrElse(s, s).asInstanceOf[CtorSymbol]
  override def mapClsSym(s: ClassSymbol): ClassSymbol =
    map.getOrElse(s, s).asInstanceOf[ClassSymbol]
  override def mapModuleSym(s: ModuleOrObjectSymbol): ModuleOrObjectSymbol =
    map.getOrElse(s, s).asInstanceOf[ModuleOrObjectSymbol]
  override def mapTypeAliasSym(s: TypeAliasSymbol): TypeAliasSymbol =
    map.getOrElse(s, s).asInstanceOf[TypeAliasSymbol]
  override def mapPatSym(s: PatternSymbol): PatternSymbol =
    map.getOrElse(s, s).asInstanceOf[PatternSymbol]
  override def mapTopLevelSym(s: TopLevelSymbol): TopLevelSymbol =
    map.getOrElse(s, s).asInstanceOf[TopLevelSymbol]
  override def mapErrorSym(s: ErrorSymbol): ErrorSymbol =
    map.getOrElse(s, s).asInstanceOf[ErrorSymbol]

class RenewSymbolTransformer(b: Block)(using Elaborator.State)
  extends BlockTransformer(new RenewSymbolSubst(b)):
  val res = applyBlock(b)
  

extension (b: Block)
  def topLvlDefinedVars: Set[Local] = b match
    case _: Return | _: Throw => Set.empty
    case Begin(sub, rst) => sub.topLvlDefinedVars ++ rst.topLvlDefinedVars
    case Assign(l, r, rst) => rst.topLvlDefinedVars + l
    case AssignField(l, n, r, rst) => rst.topLvlDefinedVars
    case AssignDynField(l, n, ai, r, rst) => rst.topLvlDefinedVars
    case Match(scrut, arms, dflt, rst) => Set.empty
    case End(_) => Set.empty
    case Break(_) => Set.empty
    case Continue(_) => Set.empty
    case Define(defn, rst) =>
      defn match
        case FunDefn(owner, sym, params, body) =>
          val rest = rst.topLvlDefinedVars
          rest + defn.sym
        case ValDefn(tsym, sym, rhs) =>
          val rest = rst.topLvlDefinedVars
          rest + defn.sym
        case ClsLikeDefn(owner, isym, sym, k, paramsOpt, auxParams, parentPath, methods, privateFields, publicFields, preCtor, ctor, companion, bufferable) =>
          val rest = rst.topLvlDefinedVars
          // inner symbols also needs to be renewed because they are allocated
          // in the same level of scope in `JSBuilder.reserveNames`
          companion.map(_.isym).toSet ++ rest + defn.sym + isym
    case HandleBlock(lhs, res, par, args, cls, hdr, bod, rst) => rst.topLvlDefinedVars + res + lhs
    case TryBlock(sub, fin, rst) => sub.topLvlDefinedVars ++ fin.topLvlDefinedVars ++ rst.topLvlDefinedVars
    case Label(lbl, loop, bod, rst) => bod.topLvlDefinedVars ++ rst.topLvlDefinedVars
