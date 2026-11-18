const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const fst$accessorSymbol = globalThis.Symbol("fst");
const inList$accessorSymbol = globalThis.Symbol("inList");
const append$accessorSymbol = globalThis.Symbol("append");
const all$accessorSymbol = globalThis.Symbol("all");
const foldl$accessorSymbol = globalThis.Symbol("foldl");
const nubBy$accessorSymbol = globalThis.Symbol("nubBy");
const deleteBy$accessorSymbol = globalThis.Symbol("deleteBy");
const atIndex$accessorSymbol = globalThis.Symbol("atIndex");
const maxLevel$accessorSymbol = globalThis.Symbol("maxLevel");
const safe$accessorSymbol = globalThis.Symbol("safe");
const label$accessorSymbol = globalThis.Symbol("label");
const mapTree$accessorSymbol = globalThis.Symbol("mapTree");
const knownConflict$accessorSymbol = globalThis.Symbol("knownConflict");
const collect$accessorSymbol = globalThis.Symbol("collect");
let lscomp1, constraints1, lambda, lambda1, lambda2, lambda3, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, main_testConstraints_nofib_lambda$_lambda_try__search_filter$filter, main_testConstraints_nofib_lambda$_lambda$lambda, main_testConstraints_nofib_lambda$_lambda_try__search_leaves_map$map, main_testConstraints_nofib_lambda$_lambda_try__search_leaves$leaves, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree_map$map, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$foldTree, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$lambda$, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1$f1, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$$f1$, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next$next, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$$next$, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$initTree, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$lambda$, main_testConstraints_nofib_bt_f3$_f3$f3, main_testConstraints_nofib_bt_f3$$f3$, main_testConstraints_nofib_bt$bt, main_testConstraints_nofib_bm$bm, main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo, main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo, main_testConstraints_nofib_bm_cacheChecks$lambda$, main_testConstraints_nofib_bm_cacheChecks$lambda, main_testConstraints_nofib_bm_cacheChecks$cacheChecks, main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo, main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda$lambda, main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$$lambda$, main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$$f4$, main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$, main_testConstraints_nofib_bm_lookupCache_mapTree$lambda$, main_testConstraints_nofib_bm_cacheChecks_map$map, main_testConstraints_nofib_bm_mapTree$lambda$, main_testConstraints_nofib_bm_fst$fst, main_testConstraints_nofib_bjbt_bt_f3$_f3$f3, main_testConstraints_nofib_bjbt_bt_f3$$f3$, main_testConstraints_nofib_bjbt$bjbt, main_testConstraints_nofib_bjbt_bj_f6$_f6_map$map, main_testConstraints_nofib_bjbt_bj_f6$$f6$, main_testConstraints_nofib_bjbt_bt_mapTree$lambda$, main_testConstraints_nofib_bjbt_bt_mapTree$lambda, main_testConstraints_nofib_bjbt_bt_mapTree$mapTree, main_testConstraints_nofib_bjbt_bj_foldTree$lambda$, main_testConstraints_nofib_bjbt_bt_mapTree_map$map, main_testConstraints_nofib_bjbt__bt_f3$_f3$f3, main_testConstraints_nofib_bjbt__bt_f3$$f3$, main_testConstraints_nofib_bjbt_$bjbt_, main_testConstraints_nofib_bjbt__bj__f7$_f7_map$map, main_testConstraints_nofib_bjbt__bj__f7$$f7$, main_testConstraints_nofib_bjbt__bt_mapTree$lambda$, main_testConstraints_nofib_bjbt__bt_mapTree$lambda, main_testConstraints_nofib_bjbt__bt_mapTree$mapTree, main_testConstraints_nofib_bjbt__bj__foldTree$lambda$, main_testConstraints_nofib_bjbt__bt_mapTree_map$map, main_testConstraints_nofib_fc$fc, main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo, main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo, main_testConstraints_nofib_fc_cacheChecks$lambda$, main_testConstraints_nofib_fc_cacheChecks$lambda, main_testConstraints_nofib_fc_cacheChecks$cacheChecks, main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo, main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda$lambda, main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$$lambda$, main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$$f4$, main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$, main_testConstraints_nofib_fc_lookupCache_mapTree$lambda$, main_testConstraints_nofib_fc_cacheChecks_map$map, main_testConstraints_nofib_fc_domainWipeout_mapTree$lambda$, main_testConstraints_nofib_fc_domainWipeout_f8$$f8$, main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Nil, main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons, main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Nil, main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Cons, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Nil, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_lscomp1$ls_Nil, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Nil, main_testConstraints_nofib_lambda$_lambda_try__listLen_l$ls_Cons, main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons, main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons, main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Nil, main_testConstraints_nofib_bt_f3$_f3$scrut_Some, main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2, main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1$ls_Nil, main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons, main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2, main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node, main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2, main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons, main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Nil, main_testConstraints_nofib_bm_mapTree$n_Node, main_testConstraints_nofib_bm_mapTree_map$xs_Cons, main_testConstraints_nofib_bm_fst$x_tup2, main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Nil, main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons, main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons, main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_Some, main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2, main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons, main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Nil, main_testConstraints_nofib_bjbt_bj_foldTree$n_Node, main_testConstraints_nofib_bjbt_bj_f6$_f6$tp2_tup2, main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known, main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown, main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Nil, main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons, main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Nil, main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons, main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons, main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_Some, main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2, main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons, main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Nil, main_testConstraints_nofib_bjbt__bj__foldTree$n_Node, main_testConstraints_nofib_bjbt__bj__f7$_f7$tp2_tup2, main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known, main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown, main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Nil, main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons, main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1$ls_Nil, main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons, main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2, main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node, main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2, main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons, main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Nil, main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node, main_testConstraints_nofib_fc_domainWipeout_f8$_f8$tp2_tup2, main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2, main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons, main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons$worker, main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2$worker, main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node$worker, main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons$worker, main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2$worker, main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node$worker, main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker, main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons$worker, main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons$worker, main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown$worker, main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known$worker, main_testConstraints_nofib_bjbt__bj__foldTree$n_Node$worker, main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons$worker, main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2$worker, main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_dflt$worker, main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons$worker, main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker, main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons$worker, main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown$worker, main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known$worker, main_testConstraints_nofib_bjbt_bj_foldTree$n_Node$worker, main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons$worker, main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2$worker, main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_dflt$worker, main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker, main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker, main_testConstraints_nofib_bm_mapTree_map$xs_Cons$worker, main_testConstraints_nofib_bm_mapTree$n_Node$worker, main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons$worker, main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2$worker, main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node$worker, main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker, main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons$worker, main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2$worker, main_testConstraints_nofib_bt_f3$_f3$scrut_dflt$worker, main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker, main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons$worker, main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons$worker, main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons$worker, main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo$worker, main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo$worker;
main_testConstraints_nofib_lambda$_lambda_try__search_filter$filter = function main_testConstraints_nofib_lambda$_lambda_try__search_filter$filter(f, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = runtime.safeCall(f(arg$Cons$0$));
      if (scrut === true) {
        tmp = main_testConstraints_nofib_lambda$_lambda_try__search_filter$filter(f, arg$Cons$1$);
        return main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testConstraints_nofib_lambda$_lambda$lambda = function main_testConstraints_nofib_lambda$_lambda$lambda(n, x) {
  let inlinedVal, tmp, tmp1, tmp2, lambda$here, inlinedVal1, p, f, inlinedVal2, arg$CSP$0$, arg$CSP$1$, next$here, p1, inlinedVal3, f1$here;
  inlinedVal = constraints1.CSP(n, n, constraints1[safe$accessorSymbol]);
  if (inlinedVal instanceof constraints1.CSP.class) {
    arg$CSP$0$ = inlinedVal.vars;
    arg$CSP$1$ = inlinedVal.vals;
    next$here = main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$$next$(constraints1, arg$CSP$0$, arg$CSP$1$);
    inlinedVal1 = main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$initTree(next$here, NofibPrelude.Nil);
    tmp = runtime.safeCall(x(inlinedVal, inlinedVal1));
    p = lambda$6(constraints1);
    p1 = lambda$4(p);
    f1$here = main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$$f1$(constraints1, p1);
    inlinedVal3 = main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$foldTree(f1$here, tmp);
    tmp1 = main_testConstraints_nofib_lambda$_lambda_try__search_leaves$leaves(inlinedVal3);
    lambda$here = lambda$7(constraints1);
    tmp2 = main_testConstraints_nofib_lambda$_lambda_try__search_filter$filter(lambda$here, tmp1);
    f = constraints1[fst$accessorSymbol];
    inlinedVal2 = tmp2(f);
    return inlinedVal2(undefined, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_try__search_leaves_map$map = function main_testConstraints_nofib_lambda$_lambda_try__search_leaves_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_lambda$_lambda_try__search_leaves_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_try__search_leaves$leaves = function main_testConstraints_nofib_lambda$_lambda_try__search_leaves$leaves(t) {
  let arg$Node$0$, arg$Node$1$, tmp;
  if (t instanceof constraints1.Node.class) {
    arg$Node$0$ = t.lab;
    arg$Node$1$ = t.children;
    if (arg$Node$1$ instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(arg$Node$0$, NofibPrelude.Nil)
    }
    tmp = main_testConstraints_nofib_lambda$_lambda_try__search_leaves_map$map(main_testConstraints_nofib_lambda$_lambda_try__search_leaves$leaves, arg$Node$1$);
    return tmp();
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree_map$map = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$foldTree = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$foldTree(f, n) {
  let arg$Node$0$, arg$Node$1$, tmp, lambda$here;
  if (n instanceof constraints1.Node.class) {
    arg$Node$0$ = n.lab;
    arg$Node$1$ = n.children;
    lambda$here = main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$lambda$(f);
    tmp = main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree_map$map(lambda$here, arg$Node$1$);
    return runtime.safeCall(f(arg$Node$0$, tmp))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$lambda$ = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$lambda$(f) {
  return (x) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_foldTree$foldTree(f, x)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1$f1 = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1$f1(constraints2, p, a, cs) {
  let f, inlinedVal;
  f = lambda$3(constraints2, p);
  inlinedVal = cs(undefined, f);
  return constraints2.Node(a, inlinedVal)
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$$f1$ = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$$f1$(constraints2, p) {
  return (a, cs) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1$f1(constraints2, p, a, cs)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, inlinedVal;
    tmp = a + 1;
    fv_tmp = eta$0$5[maxLevel$accessorSymbol](eta$0$6);
    fv_tmp1 = fv_tmp + 1;
    fv_tmp2 = eta$0$5.Assign(fv_tmp1, a);
    fv_tmp3 = NofibPrelude.Cons(fv_tmp2, eta$0$6);
    inlinedVal = main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$5, eta$0$6, undefined, undefined, undefined);
    return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons(fv_tmp3, inlinedVal)
  }
  return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_lscomp1$ls_Nil()(eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9);
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next$next = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next$next(constraints2, vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints2[maxLevel$accessorSymbol](ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_enumFromTo$enumFromTo(1, vals);
    return tmp1(undefined, constraints2, ss, undefined, undefined, undefined)
  }
  return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Nil();
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$$next$ = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$$next$(constraints2, vars, vals) {
  return (ss) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next$next(constraints2, vars, vals, ss)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$initTree = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$initTree(f, x) {
  let tmp, f1, inlinedVal;
  tmp = runtime.safeCall(f(x));
  f1 = main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$lambda$(f);
  inlinedVal = tmp(undefined, f1);
  return constraints1.Node(x, inlinedVal)
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$lambda$ = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$lambda$(f) {
  return (y) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree$initTree(f, y)
  }
};
main_testConstraints_nofib_bt_f3$_f3$f3 = function main_testConstraints_nofib_bt_f3$_f3$f3(constraints2, csp, s) {
  let inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_bt_f3$_f3$scrut_dflt$worker(undefined, undefined, undefined, constraints2, csp, s)
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, inlinedVal1, l$_, l, inlinedVal2;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      l$_ = main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Nil();
      l = arg$Cons$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = l.head;
            arg$Cons$1$1 = l.tail;
            l$_ = main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons(arg$Cons$0$1, l$_);
            l = arg$Cons$1$1;
            continue loopLabel
          }
          inlinedVal2 = l$_;
          break inlinedLbl;
        }
      }
      f = lambda$5(arg$CSP$2$, arg$Cons$0$);
      inlinedVal1 = inlinedVal2(undefined, f);
      inlinedVal = inlinedVal1(arg$Cons$0$);
      return inlinedVal(undefined, undefined, undefined, constraints2, csp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bt_f3$$f3$ = function main_testConstraints_nofib_bt_f3$$f3$(constraints2, csp) {
  return (s) => {
    return main_testConstraints_nofib_bt_f3$_f3$f3(constraints2, csp, s)
  }
};
main_testConstraints_nofib_bt$bt = function main_testConstraints_nofib_bt$bt(csp, t) {
  let f3$here;
  f3$here = main_testConstraints_nofib_bt_f3$$f3$(constraints1, csp);
  return constraints1[mapTree$accessorSymbol](f3$here, t)
};
main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(tmp, b, undefined, undefined, undefined, undefined, undefined, eta$0$5);
    return NofibPrelude.Cons(eta$0$5.Unknown, inlinedVal)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm$bm = function main_testConstraints_nofib_bm$bm(csp, t) {
  let tmp, inlinedVal, f, inlinedVal1, arg$CSP$0$, arg$CSP$1$, tmp1;
  if (csp instanceof constraints1.CSP.class) {
    let inlinedVal2;
    arg$CSP$0$ = csp.vars;
    arg$CSP$1$ = csp.vals;
    tmp1 = main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo(1, arg$CSP$0$);
    inlinedVal2 = tmp1(undefined, constraints1, arg$CSP$1$);
    inlinedVal = NofibPrelude.Cons(NofibPrelude.Nil, inlinedVal2);
    tmp = main_testConstraints_nofib_bm_cacheChecks$cacheChecks(csp, inlinedVal, t);
    f = main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$(constraints1, csp);
    inlinedVal1 = tmp(undefined, f);
    return inlinedVal1(undefined, undefined, undefined, undefined, undefined, main_testConstraints_nofib_bm_fst$fst, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$5, eta$0$6) => {
    return main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6)
  }
};
main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal, inlinedVal1;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_bm_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(1, eta$0$6, undefined, undefined, undefined, undefined, undefined, eta$0$5);
    inlinedVal1 = main_testConstraints_nofib_bm_emptyTable_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$5, eta$0$6);
    return NofibPrelude.Cons(inlinedVal, inlinedVal1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_head, fv_tmp, inlinedVal, arg$Cons$0$, arg$Cons$1$;
    tmp = a + 1;
    Cons_head = main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2(eta$0$5, a);
    fv_tmp = runtime.safeCall(eta$1$5(eta$1$6, Cons_head));
    if (eta$1$8 instanceof NofibPrelude.Cons.class) {
      let inlinedVal1;
      arg$Cons$0$ = eta$1$8.head;
      arg$Cons$1$ = eta$1$8.tail;
      inlinedVal1 = main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(tmp, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, undefined, undefined, undefined, undefined, undefined, undefined, eta$1$5, arg$Cons$0$, undefined, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal1)
    }
    inlinedVal = NofibPrelude.Nil;
    return NofibPrelude.Cons(fv_tmp, inlinedVal);
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm_cacheChecks$cacheChecks = function main_testConstraints_nofib_bm_cacheChecks$cacheChecks(csp, tbl, n) {
  let arg$Node$0$, arg$Node$1$, tmp, lambda$here;
  if (n instanceof constraints1.Node.class) {
    let Node_lab;
    arg$Node$0$ = n.lab;
    arg$Node$1$ = n.children;
    lambda$here = main_testConstraints_nofib_bm_cacheChecks$lambda$(csp, tbl, arg$Node$0$);
    tmp = main_testConstraints_nofib_bm_cacheChecks_map$map(lambda$here, arg$Node$1$);
    Node_lab = main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2(arg$Node$0$, tbl);
    return main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node(Node_lab, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_cacheChecks$lambda = function main_testConstraints_nofib_bm_cacheChecks$lambda(csp, tbl, s, x) {
  let arg$Cons$0$, arg$Assign$0$, arg$Assign$1$, arg$CSP$0$, arg$CSP$1$, arg$CSP$2$, tmp, tmp1, arg$Cons$1$;
  if (tbl instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = tbl.tail;
    if (s instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_bm_cacheChecks$cacheChecks(csp, arg$Cons$1$, x)
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      if (arg$Cons$0$ instanceof constraints1.Assign.class) {
        arg$Assign$0$ = arg$Cons$0$.varr;
        arg$Assign$1$ = arg$Cons$0$.value;
        if (csp instanceof constraints1.CSP.class) {
          let inlinedVal, f, inlinedVal1, arg$Cons$0$1, arg$Cons$1$1;
          arg$CSP$0$ = csp.vars;
          arg$CSP$1$ = csp.vals;
          arg$CSP$2$ = csp.rel;
          tmp = arg$Assign$0$ + 1;
          tmp1 = main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo(tmp, arg$CSP$0$);
          inlinedVal = tmp1(undefined, arg$CSP$1$);
          f = main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$$lambda$(constraints1, arg$Assign$1$, arg$Assign$0$, arg$CSP$2$);
          if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            inlinedVal1 = inlinedVal(undefined, f, arg$Cons$0$1, arg$Cons$1$1);
            return main_testConstraints_nofib_bm_cacheChecks$cacheChecks(csp, inlinedVal1, x)
          }
          inlinedVal1 = NofibPrelude.Nil;
          return main_testConstraints_nofib_bm_cacheChecks$cacheChecks(csp, inlinedVal1, x);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_cacheChecks$lambda$ = function main_testConstraints_nofib_bm_cacheChecks$lambda$(csp, tbl, s) {
  return (x) => {
    return main_testConstraints_nofib_bm_cacheChecks$lambda(csp, tbl, s, x)
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$6) => {
    return main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$6)
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$6) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal, inlinedVal1;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo(1, eta$0$6)(undefined, undefined, undefined, undefined, undefined, a, undefined);
    inlinedVal1 = main_testConstraints_nofib_bm_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$6);
    return main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons(inlinedVal, inlinedVal1)
  }
  return main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1$ls_Nil()(eta$0$4, eta$0$6);
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda$lambda = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda$lambda(constraints2, val_, var_, rel, x, y) {
  let f, arg$Cons$0$, arg$Cons$1$;
  f = main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$$f4$(constraints2, val_, var_, rel);
  if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    return y(undefined, undefined, undefined, undefined, undefined, f, arg$Cons$0$, undefined, arg$Cons$1$)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$$lambda$ = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$$lambda$(constraints2, val_, var_, rel) {
  return (x, y) => {
    return main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda$lambda(constraints2, val_, var_, rel, x, y)
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$$f4$ = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$$f4$(constraints2, val_, var_, rel) {
  return (cs, varval) => {
    return varval(undefined, undefined, undefined, undefined, undefined, cs, constraints2, undefined, var_, val_, undefined, undefined, rel, undefined, undefined, undefined)
  }
};
main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$ = function main_testConstraints_nofib_bm_lookupCache_lambda$$lambda$(constraints2, csp) {
  return (x) => {
    return x(undefined, constraints2, undefined, undefined, undefined, undefined, undefined, undefined, csp, undefined, undefined)
  }
};
main_testConstraints_nofib_bm_lookupCache_mapTree$lambda$ = function main_testConstraints_nofib_bm_lookupCache_mapTree$lambda$(f) {
  return (x) => {
    return x(undefined, f)
  }
};
main_testConstraints_nofib_bm_cacheChecks_map$map = function main_testConstraints_nofib_bm_cacheChecks_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_bm_cacheChecks_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_mapTree$lambda$ = function main_testConstraints_nofib_bm_mapTree$lambda$(f) {
  return (x) => {
    return x(undefined, undefined, undefined, undefined, undefined, f, undefined, undefined)
  }
};
main_testConstraints_nofib_bm_fst$fst = function main_testConstraints_nofib_bm_fst$fst(x) {
  return x(undefined, undefined, undefined, undefined)
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$f3 = function main_testConstraints_nofib_bjbt_bt_f3$_f3$f3(csp, s) {
  let inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_dflt$worker(undefined, undefined, csp, s)
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, inlinedVal1, l$_, l, inlinedVal2;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      l$_ = main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Nil();
      l = arg$Cons$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = l.head;
            arg$Cons$1$1 = l.tail;
            l$_ = main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons(arg$Cons$0$1, l$_);
            l = arg$Cons$1$1;
            continue loopLabel
          }
          inlinedVal2 = l$_;
          break inlinedLbl;
        }
      }
      f = lambda$5(arg$CSP$2$, arg$Cons$0$);
      inlinedVal1 = inlinedVal2(undefined, f);
      inlinedVal = inlinedVal1(arg$Cons$0$);
      return inlinedVal(undefined, undefined, csp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bt_f3$$f3$ = function main_testConstraints_nofib_bjbt_bt_f3$$f3$(csp) {
  return (s) => {
    return main_testConstraints_nofib_bjbt_bt_f3$_f3$f3(csp, s)
  }
};
main_testConstraints_nofib_bjbt$bjbt = function main_testConstraints_nofib_bjbt$bjbt(csp, t) {
  let inlinedVal, f, f3$here;
  f3$here = main_testConstraints_nofib_bjbt_bt_f3$$f3$(csp);
  inlinedVal = main_testConstraints_nofib_bjbt_bt_mapTree$mapTree(f3$here, t);
  f = main_testConstraints_nofib_bjbt_bj_f6$$f6$(constraints1);
  return inlinedVal(f)
};
main_testConstraints_nofib_bjbt_bj_f6$_f6_map$map = function main_testConstraints_nofib_bjbt_bj_f6$_f6_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_bjbt_bj_f6$_f6_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bj_f6$$f6$ = function main_testConstraints_nofib_bjbt_bj_f6$$f6$(constraints2) {
  return (tp2, chs) => {
    return tp2(undefined, constraints2, undefined, chs, undefined, undefined, undefined)
  }
};
main_testConstraints_nofib_bjbt_bt_mapTree$mapTree = function main_testConstraints_nofib_bjbt_bt_mapTree$mapTree(f, n) {
  let arg$Node$0$, arg$Node$1$, tmp, tmp1, lambda$here;
  if (n instanceof constraints1.Node.class) {
    arg$Node$0$ = n.lab;
    arg$Node$1$ = n.children;
    tmp = runtime.safeCall(f(arg$Node$0$));
    lambda$here = main_testConstraints_nofib_bjbt_bt_mapTree$lambda$(f);
    tmp1 = main_testConstraints_nofib_bjbt_bt_mapTree_map$map(lambda$here, arg$Node$1$);
    return main_testConstraints_nofib_bjbt_bj_foldTree$n_Node(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bt_mapTree$lambda = function main_testConstraints_nofib_bjbt_bt_mapTree$lambda(f, x) {
  return main_testConstraints_nofib_bjbt_bt_mapTree$mapTree(f, x)
};
main_testConstraints_nofib_bjbt_bt_mapTree$lambda$ = function main_testConstraints_nofib_bjbt_bt_mapTree$lambda$(f) {
  return (x) => {
    return main_testConstraints_nofib_bjbt_bt_mapTree$lambda(f, x)
  }
};
main_testConstraints_nofib_bjbt_bj_foldTree$lambda$ = function main_testConstraints_nofib_bjbt_bj_foldTree$lambda$(f) {
  return (x) => {
    return x(f)
  }
};
main_testConstraints_nofib_bjbt_bt_mapTree_map$map = function main_testConstraints_nofib_bjbt_bt_mapTree_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_bjbt_bt_mapTree_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$f3 = function main_testConstraints_nofib_bjbt__bt_f3$_f3$f3(csp, s) {
  let inlinedVal, arg$CSP$2$, arg$Cons$0$, arg$Cons$1$;
  if (csp instanceof constraints1.CSP.class) {
    arg$CSP$2$ = csp.rel;
    if (s instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_dflt$worker(undefined, undefined, csp, s)
    } else if (s instanceof NofibPrelude.Cons.class) {
      let f, inlinedVal1, l$_, l, inlinedVal2;
      arg$Cons$0$ = s.head;
      arg$Cons$1$ = s.tail;
      l$_ = main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Nil();
      l = arg$Cons$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = l.head;
            arg$Cons$1$1 = l.tail;
            l$_ = main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons(arg$Cons$0$1, l$_);
            l = arg$Cons$1$1;
            continue loopLabel
          }
          inlinedVal2 = l$_;
          break inlinedLbl;
        }
      }
      f = lambda$5(arg$CSP$2$, arg$Cons$0$);
      inlinedVal1 = inlinedVal2(undefined, f);
      inlinedVal = inlinedVal1(arg$Cons$0$);
      return inlinedVal(undefined, undefined, csp, s)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_f3$$f3$ = function main_testConstraints_nofib_bjbt__bt_f3$$f3$(csp) {
  return (s) => {
    return main_testConstraints_nofib_bjbt__bt_f3$_f3$f3(csp, s)
  }
};
main_testConstraints_nofib_bjbt_$bjbt_ = function main_testConstraints_nofib_bjbt_$bjbt_(csp, t) {
  let inlinedVal, f, f3$here;
  f3$here = main_testConstraints_nofib_bjbt__bt_f3$$f3$(csp);
  inlinedVal = main_testConstraints_nofib_bjbt__bt_mapTree$mapTree(f3$here, t);
  f = main_testConstraints_nofib_bjbt__bj__f7$$f7$(constraints1);
  return inlinedVal(f)
};
main_testConstraints_nofib_bjbt__bj__f7$_f7_map$map = function main_testConstraints_nofib_bjbt__bj__f7$_f7_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_bjbt__bj__f7$_f7_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bj__f7$$f7$ = function main_testConstraints_nofib_bjbt__bj__f7$$f7$(constraints2) {
  return (tp2, chs) => {
    return tp2(undefined, constraints2, undefined, chs, undefined, undefined, undefined, undefined)
  }
};
main_testConstraints_nofib_bjbt__bt_mapTree$mapTree = function main_testConstraints_nofib_bjbt__bt_mapTree$mapTree(f, n) {
  let arg$Node$0$, arg$Node$1$, tmp, tmp1, lambda$here;
  if (n instanceof constraints1.Node.class) {
    arg$Node$0$ = n.lab;
    arg$Node$1$ = n.children;
    tmp = runtime.safeCall(f(arg$Node$0$));
    lambda$here = main_testConstraints_nofib_bjbt__bt_mapTree$lambda$(f);
    tmp1 = main_testConstraints_nofib_bjbt__bt_mapTree_map$map(lambda$here, arg$Node$1$);
    return main_testConstraints_nofib_bjbt__bj__foldTree$n_Node(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_mapTree$lambda = function main_testConstraints_nofib_bjbt__bt_mapTree$lambda(f, x) {
  return main_testConstraints_nofib_bjbt__bt_mapTree$mapTree(f, x)
};
main_testConstraints_nofib_bjbt__bt_mapTree$lambda$ = function main_testConstraints_nofib_bjbt__bt_mapTree$lambda$(f) {
  return (x) => {
    return main_testConstraints_nofib_bjbt__bt_mapTree$lambda(f, x)
  }
};
main_testConstraints_nofib_bjbt__bj__foldTree$lambda$ = function main_testConstraints_nofib_bjbt__bj__foldTree$lambda$(f) {
  return (x) => {
    return x(f)
  }
};
main_testConstraints_nofib_bjbt__bt_mapTree_map$map = function main_testConstraints_nofib_bjbt__bt_mapTree_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_bjbt__bt_mapTree_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(tmp, b, undefined, undefined, undefined, undefined, undefined, eta$0$5);
    return NofibPrelude.Cons(eta$0$5.Unknown, inlinedVal)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc$fc = function main_testConstraints_nofib_fc$fc(csp, t) {
  let tmp, inlinedVal, f, inlinedVal1, arg$CSP$0$, arg$CSP$1$, tmp1;
  if (csp instanceof constraints1.CSP.class) {
    let inlinedVal2;
    arg$CSP$0$ = csp.vars;
    arg$CSP$1$ = csp.vals;
    tmp1 = main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo(1, arg$CSP$0$);
    inlinedVal2 = tmp1(undefined, constraints1, arg$CSP$1$);
    inlinedVal = NofibPrelude.Cons(NofibPrelude.Nil, inlinedVal2);
    tmp = main_testConstraints_nofib_fc_cacheChecks$cacheChecks(csp, inlinedVal, t);
    f = main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$(constraints1, csp);
    inlinedVal1 = tmp(undefined, f);
    if (csp instanceof constraints1.CSP.class) {
      let f1;
      f1 = main_testConstraints_nofib_fc_domainWipeout_f8$$f8$(constraints1);
      return inlinedVal1(undefined, undefined, undefined, undefined, undefined, f1, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$5, eta$0$6) => {
    return main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6)
  }
};
main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$5, eta$0$6) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal, inlinedVal1;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_fc_emptyTable_lscomp1_enumFromTo$enumFromTo$worker(1, eta$0$6, undefined, undefined, undefined, undefined, undefined, eta$0$5);
    inlinedVal1 = main_testConstraints_nofib_fc_emptyTable_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$5, eta$0$6);
    return NofibPrelude.Cons(inlinedVal, inlinedVal1)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
      return main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
    }
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_head, fv_tmp, inlinedVal, arg$Cons$0$, arg$Cons$1$;
    tmp = a + 1;
    Cons_head = main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2(eta$0$5, a);
    fv_tmp = runtime.safeCall(eta$1$5(eta$1$6, Cons_head));
    if (eta$1$8 instanceof NofibPrelude.Cons.class) {
      let inlinedVal1;
      arg$Cons$0$ = eta$1$8.head;
      arg$Cons$1$ = eta$1$8.tail;
      inlinedVal1 = main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo$worker(tmp, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, undefined, undefined, undefined, undefined, undefined, undefined, eta$1$5, arg$Cons$0$, undefined, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal1)
    }
    inlinedVal = NofibPrelude.Nil;
    return NofibPrelude.Cons(fv_tmp, inlinedVal);
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc_cacheChecks$cacheChecks = function main_testConstraints_nofib_fc_cacheChecks$cacheChecks(csp, tbl, n) {
  let arg$Node$0$, arg$Node$1$, tmp, lambda$here;
  if (n instanceof constraints1.Node.class) {
    let Node_lab;
    arg$Node$0$ = n.lab;
    arg$Node$1$ = n.children;
    lambda$here = main_testConstraints_nofib_fc_cacheChecks$lambda$(csp, tbl, arg$Node$0$);
    tmp = main_testConstraints_nofib_fc_cacheChecks_map$map(lambda$here, arg$Node$1$);
    Node_lab = main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2(arg$Node$0$, tbl);
    return main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node(Node_lab, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_cacheChecks$lambda = function main_testConstraints_nofib_fc_cacheChecks$lambda(csp, tbl, s, x) {
  let arg$Cons$0$, arg$Assign$0$, arg$Assign$1$, arg$CSP$0$, arg$CSP$1$, arg$CSP$2$, tmp, tmp1, arg$Cons$1$;
  if (tbl instanceof NofibPrelude.Cons.class) {
    arg$Cons$1$ = tbl.tail;
    if (s instanceof NofibPrelude.Nil.class) {
      return main_testConstraints_nofib_fc_cacheChecks$cacheChecks(csp, arg$Cons$1$, x)
    } else if (s instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = s.head;
      if (arg$Cons$0$ instanceof constraints1.Assign.class) {
        arg$Assign$0$ = arg$Cons$0$.varr;
        arg$Assign$1$ = arg$Cons$0$.value;
        if (csp instanceof constraints1.CSP.class) {
          let inlinedVal, f, inlinedVal1, arg$Cons$0$1, arg$Cons$1$1;
          arg$CSP$0$ = csp.vars;
          arg$CSP$1$ = csp.vals;
          arg$CSP$2$ = csp.rel;
          tmp = arg$Assign$0$ + 1;
          tmp1 = main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo(tmp, arg$CSP$0$);
          inlinedVal = tmp1(undefined, arg$CSP$1$);
          f = main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$$lambda$(constraints1, arg$Assign$1$, arg$Assign$0$, arg$CSP$2$);
          if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = arg$Cons$1$.head;
            arg$Cons$1$1 = arg$Cons$1$.tail;
            inlinedVal1 = inlinedVal(undefined, f, arg$Cons$0$1, arg$Cons$1$1);
            return main_testConstraints_nofib_fc_cacheChecks$cacheChecks(csp, inlinedVal1, x)
          }
          inlinedVal1 = NofibPrelude.Nil;
          return main_testConstraints_nofib_fc_cacheChecks$cacheChecks(csp, inlinedVal1, x);
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_cacheChecks$lambda$ = function main_testConstraints_nofib_fc_cacheChecks$lambda$(csp, tbl, s) {
  return (x) => {
    return main_testConstraints_nofib_fc_cacheChecks$lambda(csp, tbl, s, x)
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo = function main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4, eta$0$6) => {
    return main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$6)
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo$worker = function main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$0$6) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let inlinedVal, inlinedVal1;
    tmp = a + 1;
    inlinedVal = main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1_enumFromTo$enumFromTo(1, eta$0$6)(undefined, undefined, undefined, undefined, undefined, a, undefined);
    inlinedVal1 = main_testConstraints_nofib_fc_cacheChecks_fillTable_enumFromTo$enumFromTo$worker(tmp, b, undefined, eta$0$6);
    return main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons(inlinedVal, inlinedVal1)
  }
  return main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1$ls_Nil()(eta$0$4, eta$0$6);
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda$lambda = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda$lambda(constraints2, val_, var_, rel, x, y) {
  let f, arg$Cons$0$, arg$Cons$1$;
  f = main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$$f4$(constraints2, val_, var_, rel);
  if (x instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = x.head;
    arg$Cons$1$ = x.tail;
    return y(undefined, undefined, undefined, undefined, undefined, f, arg$Cons$0$, undefined, arg$Cons$1$)
  }
  return NofibPrelude.Nil;
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$$lambda$ = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$$lambda$(constraints2, val_, var_, rel) {
  return (x, y) => {
    return main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda$lambda(constraints2, val_, var_, rel, x, y)
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$$f4$ = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$$f4$(constraints2, val_, var_, rel) {
  return (cs, varval) => {
    return varval(undefined, undefined, undefined, undefined, undefined, cs, constraints2, undefined, var_, val_, undefined, undefined, rel, undefined, undefined, undefined)
  }
};
main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$ = function main_testConstraints_nofib_fc_lookupCache_lambda$$lambda$(constraints2, csp) {
  return (x) => {
    return x(constraints2, undefined, undefined, undefined, undefined, undefined, undefined, csp, undefined)
  }
};
main_testConstraints_nofib_fc_lookupCache_mapTree$lambda$ = function main_testConstraints_nofib_fc_lookupCache_mapTree$lambda$(f) {
  return (x) => {
    return x(undefined, f)
  }
};
main_testConstraints_nofib_fc_cacheChecks_map$map = function main_testConstraints_nofib_fc_cacheChecks_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testConstraints_nofib_fc_cacheChecks_map$map(f, arg$Cons$1$);
    return main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_domainWipeout_mapTree$lambda$ = function main_testConstraints_nofib_fc_domainWipeout_mapTree$lambda$(f) {
  return (x) => {
    return x(undefined, undefined, undefined, undefined, undefined, f, undefined, undefined)
  }
};
main_testConstraints_nofib_fc_domainWipeout_f8$$f8$ = function main_testConstraints_nofib_fc_domainWipeout_f8$$f8$(constraints2) {
  return (tp2) => {
    return tp2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, constraints2, undefined, undefined, undefined, undefined, undefined)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Nil = function main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Nil() {
  return (fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return eta$0$5
    }
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons = function main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_f) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons$worker(Cons_head, Cons_tail, fv_f)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons$worker = function main_testConstraints_nofib_lambda$_lambda_try__search_map$xs_Cons$worker(Cons_head, Cons_tail, fv_f) {
  let inlinedVal;
  runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(fv_f);
  return main_testConstraints_nofib_lambda$_lambda_try__listLen_l$ls_Cons(inlinedVal)
};
main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Nil = function main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Nil() {
  return () => {
    return NofibPrelude.Nil
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Cons = function main_testConstraints_nofib_lambda$_lambda_try__search_leaves_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return constraints1[append$accessorSymbol](Cons_head, inlinedVal)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Nil = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Nil() {
  return (fv_scrut, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_f) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons$worker = function main_testConstraints_nofib_lambda$_lambda_try__search_prune_filterTree_f1$_f1_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f) {
  fv_scrut = runtime.safeCall(fv_f(Cons_head));
  if (fv_scrut === true) {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, fv_f);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
  return Cons_tail(undefined, fv_f);
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_lscomp1$ls_Nil = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_next$_next_lscomp1$ls_Nil() {
  return (fv_tmp, fv_constraints, fv_ss, fv_tmp1, fv_tmp2, fv_tmp3) => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons$worker = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Nil = function main_testConstraints_nofib_lambda$_lambda_try__search_mkTree_initTree_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testConstraints_nofib_lambda$_lambda_try__listLen_l$ls_Cons = function main_testConstraints_nofib_lambda$_lambda_try__listLen_l$ls_Cons(Cons_tail) {
  return (fv_tmp, fv_a) => {
    fv_tmp = fv_a + 1;
    return Cons_tail(undefined, fv_tmp)
  }
};
main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons = function main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head) {
  return (fv_a) => {
    return main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a)
  }
};
main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker = function main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a) {
  let Some_x, arg$Assign$0$, arg$Assign$0$1;
  if (fv_a instanceof constraints1.Assign.class) {
    arg$Assign$0$1 = fv_a.varr;
    if (Cons_head instanceof constraints1.Assign.class) {
      arg$Assign$0$ = Cons_head.varr;
      Some_x = main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2(arg$Assign$0$1, arg$Assign$0$);
      return main_testConstraints_nofib_bt_f3$_f3$scrut_Some(Some_x)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons = function main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_f) => {
    return main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f)
  }
};
main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker = function main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f) {
  fv_scrut = runtime.safeCall(fv_f(Cons_head));
  if (fv_scrut === true) {
    Cons_tail(undefined, fv_f);
    return main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head)
  }
  return Cons_tail(undefined, fv_f);
};
main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Nil = function main_testConstraints_nofib_bt_f3$_f3_earliestInconsistency_filter$ls_Nil() {
  return (fv_scrut, fv_f) => {
    return (eta$0$4) => {
      return (eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10) => {
        return main_testConstraints_nofib_bt_f3$_f3$scrut_dflt$worker(eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10)
      }
    }
  }
};
main_testConstraints_nofib_bt_f3$_f3$scrut_Some = function main_testConstraints_nofib_bt_f3$_f3$scrut_Some(Some_x) {
  return (fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_csp, fv_s) => {
    return Some_x(fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_s)
  }
};
main_testConstraints_nofib_bt_f3$_f3$scrut_dflt$worker = function main_testConstraints_nofib_bt_f3$_f3$scrut_dflt$worker(fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_csp, fv_s) {
  let inlinedVal, inlinedVal1, arg$CSP$0$, tmp;
  if (fv_csp instanceof fv_constraints.CSP.class) {
    arg$CSP$0$ = fv_csp.vars;
    tmp = fv_constraints[maxLevel$accessorSymbol](fv_s);
    inlinedVal1 = tmp == arg$CSP$0$;
    if (inlinedVal1 === true) {
      inlinedVal = fv_constraints.Known(NofibPrelude.Nil);
      return globalThis.Object.freeze([
        fv_s,
        inlinedVal
      ])
    }
    inlinedVal = fv_constraints.Unknown;
    return globalThis.Object.freeze([
      fv_s,
      inlinedVal
    ]);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2 = function main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_s) => {
    return main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_s)
  }
};
main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2$worker = function main_testConstraints_nofib_bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_tmp2, fv_constraints, fv_s) {
  fv_tmp = NofibPrelude.Cons(tup2_1, NofibPrelude.Nil);
  fv_tmp1 = NofibPrelude.Cons(tup2_0, fv_tmp);
  fv_tmp2 = fv_constraints.Known(fv_tmp1);
  return globalThis.Object.freeze([
    fv_s,
    fv_tmp2
  ])
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1$ls_Nil = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lscomp1$ls_Nil() {
  return (fv_tmp, fv_vals) => {
    return (eta$0$4, eta$0$5, eta$0$6, eta$0$8) => {
      return NofibPrelude.Nil
    }
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons = function main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f, fv_x, fv_xs) => {
    return main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_x, fv_xs)
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons$worker = function main_testConstraints_nofib_bm_cacheChecks_fillTable_zipWith$yss_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_x, fv_xs) {
  let inlinedVal, arg$Cons$0$, arg$Cons$1$;
  fv_tmp = runtime.safeCall(fv_f(fv_x, Cons_head));
  if (fv_xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = fv_xs.head;
    arg$Cons$1$ = fv_xs.tail;
    inlinedVal = Cons_tail(undefined, fv_f, arg$Cons$0$, arg$Cons$1$);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  inlinedVal = NofibPrelude.Nil;
  return NofibPrelude.Cons(fv_tmp, inlinedVal);
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2 = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker = function main_testConstraints_nofib_bm_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4) {
  fv_scrut = fv_cs === fv_constraints.Unknown;
  if (fv_scrut === true) {
    fv_tmp = fv_constraints.Assign(fv_var_, fv_val_);
    fv_tmp1 = fv_constraints.Assign(tup2_0, tup2_1);
    fv_tmp2 = runtime.safeCall(fv_rel(fv_tmp, fv_tmp1));
    fv_scrut1 = ! fv_tmp2;
    if (fv_scrut1 === true) {
      fv_tmp3 = NofibPrelude.Cons(tup2_0, NofibPrelude.Nil);
      fv_tmp4 = NofibPrelude.Cons(fv_var_, fv_tmp3);
      return fv_constraints.Known(fv_tmp4)
    }
    return fv_cs;
  }
  return fv_cs;
};
main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node = function main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node(Node_lab, Node_children) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node$worker(Node_lab, Node_children, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node$worker = function main_testConstraints_nofib_bm_lookupCache_mapTree$n_Node$worker(Node_lab, Node_children, fv_tmp, fv_f) {
  let f, inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Node_lab));
  f = main_testConstraints_nofib_bm_lookupCache_mapTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return main_testConstraints_nofib_bm_mapTree$n_Node(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2 = function main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp1, fv_tableEntry, fv_scrut, fv_tmp2, fv_csp, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp1, fv_tableEntry, fv_scrut, fv_tmp2, fv_csp, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2$worker = function main_testConstraints_nofib_bm_lookupCache_lambda$_lambda_f5$tp_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp1, fv_tableEntry, fv_scrut, fv_tmp2, fv_csp, fv_tmp3, fv_tmp4) {
  if (tup2_0 instanceof NofibPrelude.Nil.class) {
    fv_tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      fv_constraints.Unknown
    ]);
    return main_testConstraints_nofib_bm_fst$x_tup2(fv_tmp)
  } else if (tup2_0 instanceof NofibPrelude.Cons.class) {
    let arg$Cons$0$, arg$Assign$1$;
    fv_arg$Cons$0$ = tup2_0.head;
    fv_arg$Cons$1$ = tup2_0.tail;
    if (fv_arg$Cons$0$ instanceof fv_constraints.Assign.class) {
      arg$Assign$1$ = fv_arg$Cons$0$.value;
      fv_tmp1 = arg$Assign$1$ - 1;
      if (tup2_1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = tup2_1.head;
        fv_tableEntry = fv_constraints[atIndex$accessorSymbol](fv_tmp1, arg$Cons$0$);
        fv_scrut = fv_tableEntry === fv_constraints.Unknown;
        if (fv_scrut === true) {
          let inlinedVal, inlinedVal1, arg$CSP$0$;
          if (fv_csp instanceof constraints1.CSP.class) {
            let fv_arg$Assign$0$;
            arg$CSP$0$ = fv_csp.vars;
            if (fv_arg$Cons$0$ instanceof constraints1.Assign.class) {
              fv_arg$Assign$0$ = fv_arg$Cons$0$.varr;
              inlinedVal1 = fv_arg$Assign$0$ == arg$CSP$0$;
              if (inlinedVal1 === true) {
                inlinedVal = constraints1.Known(NofibPrelude.Nil);
              } else {
                inlinedVal = constraints1.Unknown;
              }
              fv_tmp2 = inlinedVal;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          fv_tmp2 = fv_tableEntry;
        }
        fv_tmp3 = NofibPrelude.Cons(fv_arg$Cons$0$, fv_arg$Cons$1$);
        fv_tmp4 = globalThis.Object.freeze([
          fv_tmp3,
          fv_tmp2
        ]);
        return main_testConstraints_nofib_bm_fst$x_tup2(fv_tmp4)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons = function main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons$worker = function main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_testConstraints_nofib_bm_mapTree_map$xs_Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Nil = function main_testConstraints_nofib_bm_lookupCache_mapTree_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testConstraints_nofib_bm_mapTree$n_Node = function main_testConstraints_nofib_bm_mapTree$n_Node(Node_lab, Node_children) {
  return (fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1) => {
    return main_testConstraints_nofib_bm_mapTree$n_Node$worker(Node_lab, Node_children, fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1)
  }
};
main_testConstraints_nofib_bm_mapTree$n_Node$worker = function main_testConstraints_nofib_bm_mapTree$n_Node$worker(Node_lab, Node_children, fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1) {
  let f, inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Node_lab));
  f = main_testConstraints_nofib_bm_mapTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return constraints1.Node(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_bm_mapTree_map$xs_Cons = function main_testConstraints_nofib_bm_mapTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_bm_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_bm_mapTree_map$xs_Cons$worker = function main_testConstraints_nofib_bm_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_bm_fst$x_tup2 = function main_testConstraints_nofib_bm_fst$x_tup2(tup2_0) {
  return (fv_element0$, fv_element1$, fv_s, fv_f) => {
    return tup2_0
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Nil = function main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Nil() {
  return (fv_scrut, fv_f) => {
    return (eta$0$4) => {
      return (eta$1$5, eta$1$6, eta$1$9, eta$1$10) => {
        return main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_dflt$worker(eta$1$5, eta$1$6, eta$1$9, eta$1$10)
      }
    }
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons = function main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_f) => {
    return main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f)
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker = function main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f) {
  fv_scrut = runtime.safeCall(fv_f(Cons_head));
  if (fv_scrut === true) {
    Cons_tail(undefined, fv_f);
    return main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head)
  }
  return Cons_tail(undefined, fv_f);
};
main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons = function main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head) {
  return (fv_a) => {
    return main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a)
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker = function main_testConstraints_nofib_bjbt_bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a) {
  let Some_x, arg$Assign$0$, arg$Assign$0$1;
  if (fv_a instanceof constraints1.Assign.class) {
    arg$Assign$0$1 = fv_a.varr;
    if (Cons_head instanceof constraints1.Assign.class) {
      arg$Assign$0$ = Cons_head.varr;
      Some_x = main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2(arg$Assign$0$1, arg$Assign$0$);
      return main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_Some(Some_x)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_dflt$worker = function main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_dflt$worker(fv_tmp, fv_tmp1, fv_csp, fv_s) {
  let inlinedVal, inlinedVal1, arg$CSP$0$, tmp;
  if (fv_csp instanceof constraints1.CSP.class) {
    arg$CSP$0$ = fv_csp.vars;
    tmp = constraints1[maxLevel$accessorSymbol](fv_s);
    inlinedVal1 = tmp == arg$CSP$0$;
    if (inlinedVal1 === true) {
      let Known_vs;
      Known_vs = NofibPrelude.Nil;
      inlinedVal = main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known(Known_vs);
      return main_testConstraints_nofib_bjbt_bj_f6$_f6$tp2_tup2(fv_s, inlinedVal)
    }
    inlinedVal = main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown();
    return main_testConstraints_nofib_bjbt_bj_f6$_f6$tp2_tup2(fv_s, inlinedVal);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_Some = function main_testConstraints_nofib_bjbt_bt_f3$_f3$scrut_Some(Some_x) {
  return (fv_tmp, fv_tmp1, fv_csp, fv_s) => {
    return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$13) => {
      return Some_x(fv_tmp, fv_tmp1, fv_s)(eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$13)
    }
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2 = function main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tmp1, fv_s) => {
    return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$13) => {
      return main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_s, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$13)
    }
  }
};
main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2$worker = function main_testConstraints_nofib_bjbt_bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_s, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$13) {
  let fv_tmp2, fv_tmp3;
  fv_tmp = NofibPrelude.Cons(tup2_1, NofibPrelude.Nil);
  fv_tmp1 = NofibPrelude.Cons(tup2_0, fv_tmp);
  fv_tmp2 = eta$0$6.Known(fv_tmp1);
  fv_tmp3 = globalThis.Object.freeze([
    fv_s,
    fv_tmp2
  ]);
  return eta$0$6.Node(fv_tmp3, eta$0$8)
};
main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons = function main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) => {
    return main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc)
  }
};
main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons$worker = function main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) {
  if (runtime.Tuple.isArrayLike(Cons_head) && Cons_head.length === 2) {
    fv_element0$ = runtime.Tuple.get(Cons_head, 0);
    fv_element1$ = runtime.Tuple.get(Cons_head, 1);
    if (fv_element1$ instanceof constraints1.Known.class) {
      let inlinedVal, tmp;
      fv_arg$Known$0$ = fv_element1$.vs;
      fv_tmp = constraints1[maxLevel$accessorSymbol](fv_element0$);
      tmp = constraints1[inList$accessorSymbol](fv_tmp, fv_arg$Known$0$);
      inlinedVal = ! tmp;
      if (inlinedVal === true) {
        return fv_arg$Known$0$
      }
      {
        let inlinedVal1, tmp1, tmp2, lambda$here;
        tmp1 = constraints1[nubBy$accessorSymbol](lambda, fv_acc);
        lambda$here = lambda$1(constraints1, lambda);
        tmp2 = constraints1[foldl$accessorSymbol](lambda$here, tmp1, fv_arg$Known$0$);
        inlinedVal1 = constraints1[append$accessorSymbol](fv_arg$Known$0$, tmp2);
        return Cons_tail(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, inlinedVal1);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Nil = function main_testConstraints_nofib_bjbt_bj_f6$_f6_combine$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) => {
    return fv_acc
  }
};
main_testConstraints_nofib_bjbt_bj_foldTree$n_Node = function main_testConstraints_nofib_bjbt_bj_foldTree$n_Node(Node_lab, Node_children) {
  return (fv_f) => {
    return main_testConstraints_nofib_bjbt_bj_foldTree$n_Node$worker(Node_lab, Node_children, fv_f)
  }
};
main_testConstraints_nofib_bjbt_bj_foldTree$n_Node$worker = function main_testConstraints_nofib_bjbt_bj_foldTree$n_Node$worker(Node_lab, Node_children, fv_f) {
  let f, inlinedVal;
  f = main_testConstraints_nofib_bjbt_bj_foldTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return runtime.safeCall(fv_f(Node_lab, inlinedVal))
};
main_testConstraints_nofib_bjbt_bj_f6$_f6$tp2_tup2 = function main_testConstraints_nofib_bjbt_bj_f6$_f6$tp2_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return tup2_1(tup2_0, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known = function main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known(Known_vs) {
  return (fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known$worker(Known_vs, fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known$worker = function main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Known$worker(Known_vs, fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4) {
  fv_tmp = fv_constraints.Known(Known_vs);
  fv_tmp1 = globalThis.Object.freeze([
    fv_element0$,
    fv_tmp
  ]);
  return fv_constraints.Node(fv_tmp1, fv_chs)
};
main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown = function main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown() {
  return (fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown$worker(fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown$worker = function main_testConstraints_nofib_bjbt_bj_f6$_f6$element1$_Unknown$worker(fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_tmp3, fv_tmp4) {
  let acc, inlinedVal;
  fv_tmp2 = main_testConstraints_nofib_bjbt_bj_f6$_f6_map$map(fv_constraints[label$accessorSymbol], fv_chs);
  acc = NofibPrelude.Nil;
  inlinedVal = fv_tmp2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, acc);
  fv_tmp3 = fv_constraints.Known(inlinedVal);
  fv_tmp4 = globalThis.Object.freeze([
    fv_element0$,
    fv_tmp3
  ]);
  return fv_constraints.Node(fv_tmp4, fv_chs)
};
main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Nil = function main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons = function main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons$worker = function main_testConstraints_nofib_bjbt_bj_foldTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Nil = function main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Nil() {
  return (fv_scrut, fv_f) => {
    return (eta$0$4) => {
      return (eta$1$5, eta$1$6, eta$1$9, eta$1$10) => {
        return main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_dflt$worker(eta$1$5, eta$1$6, eta$1$9, eta$1$10)
      }
    }
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons = function main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_f) => {
    return main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f)
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker = function main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency_filter$ls_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_f) {
  fv_scrut = runtime.safeCall(fv_f(Cons_head));
  if (fv_scrut === true) {
    Cons_tail(undefined, fv_f);
    return main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head)
  }
  return Cons_tail(undefined, fv_f);
};
main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons = function main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons(Cons_head) {
  return (fv_a) => {
    return main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a)
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons$worker = function main_testConstraints_nofib_bjbt__bt_f3$_f3_earliestInconsistency$scrut_Cons$worker(Cons_head, fv_a) {
  let Some_x, arg$Assign$0$, arg$Assign$0$1;
  if (fv_a instanceof constraints1.Assign.class) {
    arg$Assign$0$1 = fv_a.varr;
    if (Cons_head instanceof constraints1.Assign.class) {
      arg$Assign$0$ = Cons_head.varr;
      Some_x = main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2(arg$Assign$0$1, arg$Assign$0$);
      return main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_Some(Some_x)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_dflt$worker = function main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_dflt$worker(fv_tmp, fv_tmp1, fv_csp, fv_s) {
  let inlinedVal, inlinedVal1, arg$CSP$0$, tmp;
  if (fv_csp instanceof constraints1.CSP.class) {
    arg$CSP$0$ = fv_csp.vars;
    tmp = constraints1[maxLevel$accessorSymbol](fv_s);
    inlinedVal1 = tmp == arg$CSP$0$;
    if (inlinedVal1 === true) {
      let Known_vs;
      Known_vs = NofibPrelude.Nil;
      inlinedVal = main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known(Known_vs);
      return main_testConstraints_nofib_bjbt__bj__f7$_f7$tp2_tup2(fv_s, inlinedVal)
    }
    inlinedVal = main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown();
    return main_testConstraints_nofib_bjbt__bj__f7$_f7$tp2_tup2(fv_s, inlinedVal);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_Some = function main_testConstraints_nofib_bjbt__bt_f3$_f3$scrut_Some(Some_x) {
  return (fv_tmp, fv_tmp1, fv_csp, fv_s) => {
    return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$14, eta$0$15) => {
      return Some_x(fv_tmp, fv_tmp1, fv_s)(eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$14, eta$0$15)
    }
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2 = function main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tmp1, fv_s) => {
    return (eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$14, eta$0$15) => {
      return main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_s, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$14, eta$0$15)
    }
  }
};
main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2$worker = function main_testConstraints_nofib_bjbt__bt_f3$_f3$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tmp1, fv_s, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$10, eta$0$12, eta$0$14, eta$0$15) {
  let fv_tmp2, fv_tmp3;
  fv_tmp = NofibPrelude.Cons(tup2_1, NofibPrelude.Nil);
  fv_tmp1 = NofibPrelude.Cons(tup2_0, fv_tmp);
  fv_tmp2 = eta$0$6.Known(fv_tmp1);
  fv_tmp3 = globalThis.Object.freeze([
    fv_s,
    fv_tmp2
  ]);
  return eta$0$6.Node(fv_tmp3, eta$0$8)
};
main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons = function main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) => {
    return main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc)
  }
};
main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons$worker = function main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) {
  if (runtime.Tuple.isArrayLike(Cons_head) && Cons_head.length === 2) {
    fv_element0$ = runtime.Tuple.get(Cons_head, 0);
    fv_element1$ = runtime.Tuple.get(Cons_head, 1);
    if (fv_element1$ instanceof constraints1.Known.class) {
      let inlinedVal, tmp;
      fv_arg$Known$0$ = fv_element1$.vs;
      fv_tmp = constraints1[maxLevel$accessorSymbol](fv_element0$);
      tmp = constraints1[inList$accessorSymbol](fv_tmp, fv_arg$Known$0$);
      inlinedVal = ! tmp;
      if (inlinedVal === true) {
        return fv_arg$Known$0$
      }
      {
        let inlinedVal1, tmp1, tmp2, lambda$here;
        tmp1 = constraints1[nubBy$accessorSymbol](lambda, fv_acc);
        lambda$here = lambda$1(constraints1, lambda);
        tmp2 = constraints1[foldl$accessorSymbol](lambda$here, tmp1, fv_arg$Known$0$);
        inlinedVal1 = constraints1[append$accessorSymbol](fv_arg$Known$0$, tmp2);
        return Cons_tail(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, inlinedVal1);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Nil = function main_testConstraints_nofib_bjbt__bj__f7$_f7_combine$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_element0$, fv_element1$, fv_arg$Known$0$, fv_css, fv_cs, fv_s, fv_tmp, fv_scrut, fv_tmp1, fv_acc) => {
    return fv_acc
  }
};
main_testConstraints_nofib_bjbt__bj__foldTree$n_Node = function main_testConstraints_nofib_bjbt__bj__foldTree$n_Node(Node_lab, Node_children) {
  return (fv_f) => {
    return main_testConstraints_nofib_bjbt__bj__foldTree$n_Node$worker(Node_lab, Node_children, fv_f)
  }
};
main_testConstraints_nofib_bjbt__bj__foldTree$n_Node$worker = function main_testConstraints_nofib_bjbt__bj__foldTree$n_Node$worker(Node_lab, Node_children, fv_f) {
  let f, inlinedVal;
  f = main_testConstraints_nofib_bjbt__bj__foldTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return runtime.safeCall(fv_f(Node_lab, inlinedVal))
};
main_testConstraints_nofib_bjbt__bj__f7$_f7$tp2_tup2 = function main_testConstraints_nofib_bjbt__bj__f7$_f7$tp2_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4) => {
    return tup2_1(tup2_0, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known = function main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known(Known_vs) {
  return (fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known$worker(Known_vs, fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known$worker = function main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Known$worker(Known_vs, fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4) {
  fv_tmp = fv_constraints.Known(Known_vs);
  fv_tmp1 = globalThis.Object.freeze([
    fv_element0$,
    fv_tmp
  ]);
  return fv_constraints.Node(fv_tmp1, fv_chs)
};
main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown = function main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown() {
  return (fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown$worker(fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown$worker = function main_testConstraints_nofib_bjbt__bj__f7$_f7$element1$_Unknown$worker(fv_element0$, fv_tmp, fv_constraints, fv_tmp1, fv_chs, fv_tmp2, fv_cs_, fv_tmp3, fv_tmp4) {
  let acc, inlinedVal, arg$Known$0$;
  fv_tmp2 = main_testConstraints_nofib_bjbt__bj__f7$_f7_map$map(fv_constraints[label$accessorSymbol], fv_chs);
  acc = NofibPrelude.Nil;
  inlinedVal = fv_tmp2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, acc);
  fv_cs_ = fv_constraints.Known(inlinedVal);
  if (fv_cs_ instanceof fv_constraints.Known.class) {
    arg$Known$0$ = fv_cs_.vs;
    if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
      fv_tmp3 = globalThis.Object.freeze([
        fv_element0$,
        fv_cs_
      ]);
      return fv_constraints.Node(fv_tmp3, NofibPrelude.Nil)
    }
    fv_tmp4 = globalThis.Object.freeze([
      fv_element0$,
      fv_cs_
    ]);
    return fv_constraints.Node(fv_tmp4, fv_chs);
  }
  fv_tmp4 = globalThis.Object.freeze([
    fv_element0$,
    fv_cs_
  ]);
  return fv_constraints.Node(fv_tmp4, fv_chs);
};
main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Nil = function main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return NofibPrelude.Nil
  }
};
main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons = function main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons$worker = function main_testConstraints_nofib_bjbt__bj__foldTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1$ls_Nil = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lscomp1$ls_Nil() {
  return (fv_tmp, fv_vals) => {
    return (eta$0$4, eta$0$5, eta$0$6, eta$0$8) => {
      return NofibPrelude.Nil
    }
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons = function main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f, fv_x, fv_xs) => {
    return main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_x, fv_xs)
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons$worker = function main_testConstraints_nofib_fc_cacheChecks_fillTable_zipWith$yss_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f, fv_x, fv_xs) {
  let inlinedVal, arg$Cons$0$, arg$Cons$1$;
  fv_tmp = runtime.safeCall(fv_f(fv_x, Cons_head));
  if (fv_xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = fv_xs.head;
    arg$Cons$1$ = fv_xs.tail;
    inlinedVal = Cons_tail(undefined, fv_f, arg$Cons$0$, arg$Cons$1$);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  inlinedVal = NofibPrelude.Nil;
  return NofibPrelude.Cons(fv_tmp, inlinedVal);
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2 = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4) => {
    return main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4)
  }
};
main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker = function main_testConstraints_nofib_fc_cacheChecks_fillTable_lambda$_lambda_f4$_f4$varval_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_vall, fv_varr, fv_scrut, fv_cs, fv_constraints, fv_tmp, fv_var_, fv_val_, fv_tmp1, fv_tmp2, fv_rel, fv_scrut1, fv_tmp3, fv_tmp4) {
  fv_scrut = fv_cs === fv_constraints.Unknown;
  if (fv_scrut === true) {
    fv_tmp = fv_constraints.Assign(fv_var_, fv_val_);
    fv_tmp1 = fv_constraints.Assign(tup2_0, tup2_1);
    fv_tmp2 = runtime.safeCall(fv_rel(fv_tmp, fv_tmp1));
    fv_scrut1 = ! fv_tmp2;
    if (fv_scrut1 === true) {
      fv_tmp3 = NofibPrelude.Cons(tup2_0, NofibPrelude.Nil);
      fv_tmp4 = NofibPrelude.Cons(fv_var_, fv_tmp3);
      return fv_constraints.Known(fv_tmp4)
    }
    return fv_cs;
  }
  return fv_cs;
};
main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node = function main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node(Node_lab, Node_children) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node$worker(Node_lab, Node_children, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node$worker = function main_testConstraints_nofib_fc_lookupCache_mapTree$n_Node$worker(Node_lab, Node_children, fv_tmp, fv_f) {
  let f, inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Node_lab));
  f = main_testConstraints_nofib_fc_lookupCache_mapTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2 = function main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2(tup2_0, tup2_1) {
  return (fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_tableEntry, fv_scrut, fv_tmp1, fv_csp, fv_tmp2) => {
    return main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2$worker(tup2_0, tup2_1, fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_tableEntry, fv_scrut, fv_tmp1, fv_csp, fv_tmp2)
  }
};
main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2$worker = function main_testConstraints_nofib_fc_lookupCache_lambda$_lambda_f5$tp_tup2$worker(tup2_0, tup2_1, fv_constraints, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_tmp, fv_tableEntry, fv_scrut, fv_tmp1, fv_csp, fv_tmp2) {
  if (tup2_0 instanceof NofibPrelude.Nil.class) {
    let tup2_01, tup2_11, tup2_02;
    tup2_01 = NofibPrelude.Nil;
    tup2_11 = fv_constraints.Unknown;
    tup2_02 = main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2(tup2_01, tup2_11);
    return main_testConstraints_nofib_fc_domainWipeout_f8$_f8$tp2_tup2(tup2_02, tup2_1)
  } else if (tup2_0 instanceof NofibPrelude.Cons.class) {
    let tup2_01, arg$Cons$0$, arg$Assign$1$;
    fv_arg$Cons$0$ = tup2_0.head;
    fv_arg$Cons$1$ = tup2_0.tail;
    if (fv_arg$Cons$0$ instanceof fv_constraints.Assign.class) {
      arg$Assign$1$ = fv_arg$Cons$0$.value;
      fv_tmp = arg$Assign$1$ - 1;
      if (tup2_1 instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = tup2_1.head;
        fv_tableEntry = fv_constraints[atIndex$accessorSymbol](fv_tmp, arg$Cons$0$);
        fv_scrut = fv_tableEntry === fv_constraints.Unknown;
        if (fv_scrut === true) {
          let inlinedVal, inlinedVal1, arg$CSP$0$;
          if (fv_csp instanceof constraints1.CSP.class) {
            let fv_arg$Assign$0$;
            arg$CSP$0$ = fv_csp.vars;
            if (fv_arg$Cons$0$ instanceof constraints1.Assign.class) {
              fv_arg$Assign$0$ = fv_arg$Cons$0$.varr;
              inlinedVal1 = fv_arg$Assign$0$ == arg$CSP$0$;
              if (inlinedVal1 === true) {
                inlinedVal = constraints1.Known(NofibPrelude.Nil);
              } else {
                inlinedVal = constraints1.Unknown;
              }
              fv_tmp1 = inlinedVal;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          fv_tmp1 = fv_tableEntry;
        }
        fv_tmp2 = NofibPrelude.Cons(fv_arg$Cons$0$, fv_arg$Cons$1$);
        tup2_01 = main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2(fv_tmp2, fv_tmp1);
        return main_testConstraints_nofib_fc_domainWipeout_f8$_f8$tp2_tup2(tup2_01, tup2_1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons = function main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons$worker = function main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Nil = function main_testConstraints_nofib_fc_lookupCache_mapTree_map$xs_Nil() {
  return (fv_tmp, fv_f) => {
    return (eta$0$4, eta$0$5) => {
      return NofibPrelude.Nil
    }
  }
};
main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node = function main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node(Node_lab, Node_children) {
  return (fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1) => {
    return main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node$worker(Node_lab, Node_children, fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1)
  }
};
main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node$worker = function main_testConstraints_nofib_fc_domainWipeout_mapTree$n_Node$worker(Node_lab, Node_children, fv_arg$Node$0$, fv_arg$Node$1$, fv_c, fv_l, fv_tmp, fv_f, fv_lambda$here, fv_tmp1) {
  let f, inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Node_lab));
  f = main_testConstraints_nofib_fc_domainWipeout_mapTree$lambda$(fv_f);
  inlinedVal = Node_children(undefined, f);
  return constraints1.Node(fv_tmp, inlinedVal)
};
main_testConstraints_nofib_fc_domainWipeout_f8$_f8$tp2_tup2 = function main_testConstraints_nofib_fc_domainWipeout_f8$_f8$tp2_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_element0$1, fv_element1$1, fv_tbl, fv_cs, fv_as_, fv_wipedDomains, fv_constraints, fv_scrut, fv_tmp, fv_tmp1, fv_tmp2, fv_cs_) => {
    return tup2_0(tup2_1, fv_wipedDomains, fv_constraints, fv_tmp, fv_tmp2)
  }
};
main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2 = function main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2(tup2_0, tup2_1) {
  return (fv_element1$, fv_wipedDomains, fv_constraints, fv_tmp, fv_tmp1) => {
    return main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2$worker(tup2_0, tup2_1, fv_element1$, fv_wipedDomains, fv_constraints, fv_tmp, fv_tmp1)
  }
};
main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2$worker = function main_testConstraints_nofib_fc_domainWipeout_f8$_f8$element0$_tup2$worker(tup2_0, tup2_1, fv_element1$, fv_wipedDomains, fv_constraints, fv_tmp, fv_tmp1) {
  fv_wipedDomains = lscomp1(fv_constraints, fv_element1$);
  if (fv_wipedDomains instanceof NofibPrelude.Nil.class) {
    return globalThis.Object.freeze([
      tup2_0,
      tup2_1
    ])
  }
  {
    let arg$Cons$0$;
    if (fv_wipedDomains instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_wipedDomains.head;
      fv_tmp1 = fv_constraints[collect$accessorSymbol](arg$Cons$0$);
      fv_tmp = fv_constraints.Known(fv_tmp1);
      return globalThis.Object.freeze([
        tup2_0,
        fv_tmp
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons = function main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_tmp, fv_f) => {
    return main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f)
  }
};
main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons$worker = function main_testConstraints_nofib_fc_domainWipeout_mapTree_map$xs_Cons$worker(Cons_head, Cons_tail, fv_tmp, fv_f) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, fv_f);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
lscomp1 = function lscomp1(constraints2, ls) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = constraints2[all$accessorSymbol](constraints2[knownConflict$accessorSymbol], arg$Cons$0$);
      if (scrut === true) {
        lscomp1(constraints2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, undefined)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$7 = (undefined, function (constraints2) {
  return (x) => {
    return lambda2(constraints2, x)
  }
});
lambda$6 = (undefined, function (constraints2) {
  return (x) => {
    return lambda3(constraints2, x)
  }
});
lambda2 = (undefined, function (constraints2, x) {
  let arg$Known$0$, element1$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    runtime.Tuple.get(x, 0);
    element1$ = runtime.Tuple.get(x, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Nil.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda3 = (undefined, function (constraints2, x) {
  let arg$Known$0$, element1$;
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    runtime.Tuple.get(x, 0);
    element1$ = runtime.Tuple.get(x, 1);
    if (element1$ instanceof constraints2.Known.class) {
      arg$Known$0$ = element1$.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$5 = (undefined, function (rel, a) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(rel(a, x));
    return ! tmp
  }
});
lambda$4 = (undefined, function (p) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(p(x));
    return ! tmp
  }
});
lambda$3 = (undefined, function (constraints2, p) {
  return (x) => {
    return lambda1(constraints2, p, x)
  }
});
lambda1 = (undefined, function (constraints2, p, x) {
  let arg$Node$0$;
  if (x instanceof constraints2.Node.class) {
    arg$Node$0$ = x.lab;
    return runtime.safeCall(p(arg$Node$0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (constraints2, f) {
  return (x) => {
    return constraints2[mapTree$accessorSymbol](f, x)
  }
});
lambda = (undefined, function (x, y) {
  return x == y
});
lambda$1 = (undefined, function (constraints2, eq) {
  return (acc, y) => {
    return constraints2[deleteBy$accessorSymbol](eq, y, acc)
  }
});
lambda$ = (undefined, function (eq, h) {
  return (y) => {
    let tmp;
    tmp = runtime.safeCall(eq(h, y));
    return ! tmp
  }
});
(class constraints {
  static {
    constraints1 = this
  }
  static get [fst$accessorSymbol]() { return constraints.#fst; }
  static get [inList$accessorSymbol]() { return constraints.#inList; }
  static get [append$accessorSymbol]() { return constraints.#append; }
  static get [all$accessorSymbol]() { return constraints.#all; }
  static get [foldl$accessorSymbol]() { return constraints.#foldl; }
  static get [nubBy$accessorSymbol]() { return constraints.#nubBy; }
  static get [deleteBy$accessorSymbol]() { return constraints.#deleteBy; }
  static get [atIndex$accessorSymbol]() { return constraints.#atIndex; }
  static get [maxLevel$accessorSymbol]() { return constraints.#maxLevel; }
  static get [safe$accessorSymbol]() { return constraints.#safe; }
  static get [label$accessorSymbol]() { return constraints.#label; }
  static get [mapTree$accessorSymbol]() { return constraints.#mapTree; }
  static get [knownConflict$accessorSymbol]() { return constraints.#knownConflict; }
  static get [collect$accessorSymbol]() { return constraints.#collect; }
  static {
    constraints.Assign = function Assign(varr, value) {
      return globalThis.Object.freeze(new Assign.class(varr, value));
    };
    (class Assign {
      static {
        constraints.Assign.class = this
      }
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assign", ["varr", "value"]];
    });
    constraints.CSP = function CSP(vars, vals, rel) {
      return globalThis.Object.freeze(new CSP.class(vars, vals, rel));
    };
    (class CSP {
      static {
        constraints.CSP.class = this
      }
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSP", ["vars", "vals", "rel"]];
    });
    constraints.Node = function Node(lab, children) {
      return globalThis.Object.freeze(new Node.class(lab, children));
    };
    (class Node {
      static {
        constraints.Node.class = this
      }
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["lab", "children"]];
    });
    constraints.Known = function Known(vs) {
      return globalThis.Object.freeze(new Known.class(vs));
    };
    (class Known {
      static {
        constraints.Known.class = this
      }
      constructor(vs) {
        this.vs = vs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Known", ["vs"]];
    });
    (class Unknown {
      static {
        new this
      }
      constructor() {
        constraints.Unknown = this;
        Object.defineProperty(this, "class", {
          value: Unknown
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unknown"];
    });
  }
  static #fst(x) {
    let element0$;
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      element0$ = runtime.Tuple.get(x, 0);
      runtime.Tuple.get(x, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = constraints.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #inList(x, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = x === arg$Cons$0$;
        if (scrut === true) {
          return true
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      } else if (ls instanceof NofibPrelude.Nil.class) {
        return false
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = constraints.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #filter(f, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(f(arg$Cons$0$));
        if (scrut === true) {
          tmp = constraints.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #all(p, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$;
      if (ls instanceof NofibPrelude.Nil.class) {
        return true
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = runtime.safeCall(p(arg$Cons$0$));
        if (scrut === true) {
          ls = arg$Cons$1$;
          continue loopLabel
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #foldl(f, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #nubBy(eq, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, lambda$here;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      lambda$here = lambda$(eq, arg$Cons$0$);
      tmp = constraints.#filter(lambda$here, arg$Cons$1$);
      tmp1 = constraints.#nubBy(eq, tmp);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = constraints.#deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unionBy(eq, xs, ys) {
    let tmp, tmp1, lambda$here;
    tmp = constraints.#nubBy(eq, ys);
    lambda$here = lambda$1(constraints, eq);
    tmp1 = constraints.#foldl(lambda$here, tmp, xs);
    return constraints.#append(xs, tmp1)
  }
  static #union(xs, ys) {
    return constraints.#unionBy(lambda, xs, ys)
  }
  static #atIndex(i, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        scrut = i == 0;
        if (scrut === true) {
          return arg$Cons$0$
        }
        tmp = i - 1;
        i = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #maxLevel(ls) {
    let arg$Cons$0$;
    if (ls instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      if (arg$Cons$0$ instanceof constraints.Assign.class) {
        return arg$Cons$0$.varr
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #safe(as1, as2) {
    let scrut, scrut1, arg$Assign$0$, arg$Assign$1$, arg$Assign$0$1, arg$Assign$1$1, tmp, tmp1, tmp2, tmp3;
    if (as1 instanceof constraints.Assign.class) {
      arg$Assign$0$ = as1.varr;
      arg$Assign$1$ = as1.value;
      if (as2 instanceof constraints.Assign.class) {
        arg$Assign$0$1 = as2.varr;
        arg$Assign$1$1 = as2.value;
        tmp = arg$Assign$1$ == arg$Assign$1$1;
        scrut = ! tmp;
        if (scrut === true) {
          let inlinedVal, inlinedVal1;
          tmp1 = arg$Assign$0$ - arg$Assign$0$1;
          inlinedVal = runtime.safeCall(globalThis.Math.abs(tmp1));
          tmp2 = arg$Assign$1$ - arg$Assign$1$1;
          inlinedVal1 = runtime.safeCall(globalThis.Math.abs(tmp2));
          tmp3 = inlinedVal == inlinedVal1;
          scrut1 = ! tmp3;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #label(n) {
    if (n instanceof constraints.Node.class) {
      return n.lab
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mapTree(f, n) {
    let arg$Node$0$, arg$Node$1$, tmp, tmp1, lambda$here;
    if (n instanceof constraints.Node.class) {
      arg$Node$0$ = n.lab;
      arg$Node$1$ = n.children;
      tmp = runtime.safeCall(f(arg$Node$0$));
      lambda$here = lambda$2(constraints, f);
      tmp1 = constraints.#map(lambda$here, arg$Node$1$);
      return constraints.Node(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #knownConflict(c) {
    let arg$Known$0$;
    if (c instanceof constraints.Known.class) {
      arg$Known$0$ = c.vs;
      if (arg$Known$0$ instanceof NofibPrelude.Cons.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #collect(ls) {
    let arg$Cons$0$, arg$Cons$1$, arg$Known$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof constraints.Known.class) {
        arg$Known$0$ = arg$Cons$0$.vs;
        tmp = constraints.#collect(arg$Cons$1$);
        return constraints.#union(arg$Known$0$, tmp)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10;
    inlinedVal1 = main_testConstraints_nofib_lambda$_lambda$lambda(6, main_testConstraints_nofib_bt$bt);
    inlinedVal3 = main_testConstraints_nofib_lambda$_lambda$lambda(6, main_testConstraints_nofib_bm$bm);
    inlinedVal5 = main_testConstraints_nofib_lambda$_lambda$lambda(6, main_testConstraints_nofib_bjbt$bjbt);
    inlinedVal7 = main_testConstraints_nofib_lambda$_lambda$lambda(6, main_testConstraints_nofib_bjbt_$bjbt_);
    inlinedVal9 = main_testConstraints_nofib_lambda$_lambda$lambda(6, main_testConstraints_nofib_fc$fc);
    inlinedVal10 = NofibPrelude.Nil;
    inlinedVal8 = NofibPrelude.Cons(inlinedVal9, inlinedVal10);
    inlinedVal6 = NofibPrelude.Cons(inlinedVal7, inlinedVal8);
    inlinedVal4 = NofibPrelude.Cons(inlinedVal5, inlinedVal6);
    inlinedVal2 = NofibPrelude.Cons(inlinedVal3, inlinedVal4);
    inlinedVal = NofibPrelude.Cons(inlinedVal1, inlinedVal2);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "constraints"];
});
export default constraints1;
