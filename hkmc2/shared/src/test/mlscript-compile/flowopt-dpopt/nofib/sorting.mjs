const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const append$accessorSymbol = globalThis.Symbol("append");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const select$accessorSymbol = globalThis.Symbol("select");
let readTree, readTree1, sorting1, lambda, lambda$, main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap, main_testSorting_nofib_mangle_sort_heapSort_heap$heap, main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix, main_testSorting_nofib_mangle_sort_heapSort_clear$clear, main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree, main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$$to_tree$, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$$to_tree$, main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT1, main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt1, main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt, main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_LT, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt1, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT1, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ, main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt, main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt, main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT, main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt, main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_LT, main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt1, main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT1, main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split, main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines_break_$break_, main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$s__Cons, main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$lines, main_main_testSorting_nofib_mangle_lines$lines_main_testSorting_nofib_mangle_lines$s__Nil$main_testSorting_nofib_mangle_lines$s__Nil, main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$_main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda$main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda, main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$$main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$, main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2, main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2$main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2, main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort, main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1$main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons1, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons2, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil, main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil1, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil1, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons1, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil2, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons2, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil3, main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons3, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil$main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda$main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$$main_testSorting_nofib_mangle_unlines_lambda$$lambda$, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append$main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append, main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons, main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Nil$main_testSorting_nofib_mangle_unlines_concat$ls_Nil, main_main_testSorting_nofib_mangle_unlines_map$map$main_testSorting_nofib_mangle_unlines_map$map, main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Cons$main_testSorting_nofib_mangle_unlines_concat$ls_Cons, main_lambda$_lambda$lambda, main_lambda$$lambda$;
main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines_break_$break_ = function main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines_break_$break_(p, ls) {
  let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    let deforest$lam;
    deforest$lam = main_main_testSorting_nofib_mangle_lines$lines_main_testSorting_nofib_mangle_lines$s__Nil$main_testSorting_nofib_mangle_lines$s__Nil();
    return globalThis.Object.freeze([
      NofibPrelude.Nil,
      deforest$lam
    ])
  } else if (ls instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ls.head;
    arg$Cons$1$ = ls.tail;
    scrut = runtime.safeCall(p(arg$Cons$0$));
    if (scrut === true) {
      tmp = main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$s__Cons(arg$Cons$1$);
      return globalThis.Object.freeze([
        NofibPrelude.Nil,
        tmp
      ])
    }
    scrut1 = main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines_break_$break_(p, arg$Cons$1$);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
      return globalThis.Object.freeze([
        tmp1,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$lines = function main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$lines(s) {
  let scrut, element1$, element0$;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  scrut = main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines_break_$break_(lambda, s);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    return element1$(undefined, element0$)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$s__Cons = function main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$s__Cons(Cons_tail) {
  return (fv_tmp, fv_l) => {
    fv_tmp = main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$lines(Cons_tail);
    return NofibPrelude.Cons(fv_l, fv_tmp)
  }
};
main_main_testSorting_nofib_mangle_lines$lines_main_testSorting_nofib_mangle_lines$s__Nil$main_testSorting_nofib_mangle_lines$s__Nil = function main_main_testSorting_nofib_mangle_lines$lines_main_testSorting_nofib_mangle_lines$s__Nil$main_testSorting_nofib_mangle_lines$s__Nil() {
  return (fv_tmp, fv_l) => {
    fv_tmp = NofibPrelude.Nil;
    return NofibPrelude.Cons(fv_l, fv_tmp)
  }
};
main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$_main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda$main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda = function main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$_main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda$main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda(x, y) {
  let inlinedVal, xs, ys, inlinedVal1;
  xs = x;
  ys = y;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt();
          break inlinedLbl
        } else if (ys instanceof NofibPrelude.Cons.class) {
          inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_LT();
          break inlinedLbl
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt();
          break inlinedLbl
        } else if (ys instanceof NofibPrelude.Cons.class) {
          let inlinedVal2, inlinedVal3;
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          inlinedVal2 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
          inlinedVal3 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
          scrut = inlinedVal2 === inlinedVal3;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          {
            let inlinedVal4, inlinedVal5;
            inlinedVal4 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal5 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut1 = inlinedVal4 < inlinedVal5;
            if (scrut1 === true) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_LT();
              break inlinedLbl
            }
            inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt();
            break inlinedLbl;
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  inlinedVal = inlinedVal1();
  return ! inlinedVal
};
main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$$main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$ = function main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$$main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$(x) {
  return (y) => {
    return main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$_main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda$main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda$lambda(x, y)
  }
};
main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2 = function main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2(xs) {
  let arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    let p, inlinedVal, tmp3, lambda$here;
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    p = main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2_main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$$main_testSorting_nofib_mangle_sort_quickSort2_lambda$$lambda$(arg$Cons$0$);
    tmp3 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    lambda$here = lambda$(sorting1, p);
    inlinedVal = sorting1[foldr$accessorSymbol](lambda$here, tmp3, arg$Cons$1$);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      tmp = main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2(element0$);
      tmp1 = main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2(element1$);
      tmp2 = NofibPrelude.Cons(arg$Cons$0$, tmp1);
      return sorting1[append$accessorSymbol](tmp, tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2$main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2 = function main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2$main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2(x, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let inlinedVal, xs, ys, inlinedVal1;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$0$;
      ys = x;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2;
          if (xs instanceof NofibPrelude.Nil.class) {
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = xs.head;
            arg$Cons$1$1 = xs.tail;
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_GT();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              let inlinedVal2, inlinedVal3;
              arg$Cons$0$2 = ys.head;
              arg$Cons$1$2 = ys.tail;
              inlinedVal2 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              inlinedVal3 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
              scrut = inlinedVal2 === inlinedVal3;
              if (scrut === true) {
                xs = arg$Cons$1$1;
                ys = arg$Cons$1$2;
                continue loopLabel1
              }
              {
                let inlinedVal4, inlinedVal5;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                scrut1 = inlinedVal4 < inlinedVal5;
                if (scrut1 === true) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal1 = main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_GT();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal = inlinedVal1();
      if (inlinedVal === true) {
        tmp = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2$main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2(x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort = function main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort(xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1$main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1(arg$Cons$0$, arg$Cons$1$);
    tmp1 = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort(tmp);
    tmp2 = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2$main_testSorting_nofib_mangle_sort_quickSort_lscomp2$lscomp2(arg$Cons$0$, arg$Cons$1$);
    tmp3 = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort(tmp2);
    tmp4 = NofibPrelude.Cons(arg$Cons$0$, tmp3);
    return sorting1[append$accessorSymbol](tmp1, tmp4)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1$main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1 = function main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1$main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1(x, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      xs = arg$Cons$0$;
      ys = x;
      inlinedLbl: {
        loopLabel1: while (true) {
          let scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2;
          if (xs instanceof NofibPrelude.Nil.class) {
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = xs.head;
            arg$Cons$1$1 = xs.tail;
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_GT();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              let inlinedVal3, inlinedVal4;
              arg$Cons$0$2 = ys.head;
              arg$Cons$1$2 = ys.tail;
              inlinedVal3 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
              scrut = inlinedVal3 === inlinedVal4;
              if (scrut === true) {
                xs = arg$Cons$1$1;
                ys = arg$Cons$1$2;
                continue loopLabel1
              }
              {
                let inlinedVal5, inlinedVal6;
                inlinedVal5 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
                inlinedVal6 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                scrut1 = inlinedVal5 < inlinedVal6;
                if (scrut1 === true) {
                  inlinedVal2 = main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal2 = main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_GT();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal1 = inlinedVal2();
      inlinedVal = ! inlinedVal1;
      if (inlinedVal === true) {
        tmp = main_main_testSorting_nofib_mangle_sort_quickSort$quickSort_main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1$main_testSorting_nofib_mangle_sort_quickSort_lscomp1$lscomp1(x, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Cons$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  }
  if (ys instanceof NofibPrelude.Nil.class) {
    return xs
  }
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof NofibPrelude.Cons.class) {
      let inlinedVal, xs1, ys1, inlinedVal1;
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      xs1 = arg$Cons$0$;
      ys1 = arg$Cons$0$1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
          if (xs1 instanceof NofibPrelude.Nil.class) {
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = xs1.head;
            arg$Cons$1$2 = xs1.tail;
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              let inlinedVal2, inlinedVal3;
              arg$Cons$0$3 = ys1.head;
              arg$Cons$1$3 = ys1.tail;
              inlinedVal2 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
              inlinedVal3 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
              scrut = inlinedVal2 === inlinedVal3;
              if (scrut === true) {
                xs1 = arg$Cons$1$2;
                ys1 = arg$Cons$1$3;
                continue loopLabel
              }
              {
                let inlinedVal4, inlinedVal5;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut1 = inlinedVal4 < inlinedVal5;
                if (scrut1 === true) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal = inlinedVal1();
      if (inlinedVal === true) {
        tmp = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(arg$Cons$1$, arg$Cons$1$1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, tmp);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      {
        let inlinedVal2, xs2, ys2, inlinedVal3;
        xs2 = arg$Cons$0$;
        ys2 = arg$Cons$0$1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
            if (xs2 instanceof NofibPrelude.Nil.class) {
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                break inlinedLbl1
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            } else if (xs2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = xs2.head;
              arg$Cons$1$2 = xs2.tail;
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                let inlinedVal4, inlinedVal5;
                arg$Cons$0$3 = ys2.head;
                arg$Cons$1$3 = ys2.tail;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut = inlinedVal4 === inlinedVal5;
                if (scrut === true) {
                  xs2 = arg$Cons$1$2;
                  ys2 = arg$Cons$1$3;
                  continue loopLabel1
                }
                {
                  let inlinedVal6, inlinedVal7;
                  inlinedVal6 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                  inlinedVal7 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                  scrut1 = inlinedVal6 < inlinedVal7;
                  if (scrut1 === true) {
                    inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                    break inlinedLbl1
                  }
                  inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                  break inlinedLbl1;
                }
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        inlinedVal2 = inlinedVal3();
        if (inlinedVal2 === true) {
          tmp2 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
          tmp3 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(arg$Cons$1$, tmp2);
          return NofibPrelude.Cons(arg$Cons$0$, tmp3)
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        tmp5 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(tmp4, arg$Cons$1$1);
        return NofibPrelude.Cons(arg$Cons$0$1, tmp5);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit(run, xs) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    if (run instanceof NofibPrelude.Nil.class) {
      if (xs instanceof NofibPrelude.Nil.class) {
        return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil1()
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = xs.head;
        arg$Cons$1$1 = xs.tail;
        tmp = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
        run = tmp;
        xs = arg$Cons$1$1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    if (xs instanceof NofibPrelude.Nil.class) {
      let Cons_tail;
      Cons_tail = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil();
      return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons2(run, Cons_tail)
    }
    if (run instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = run.head;
      arg$Cons$1$ = run.tail;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = xs.head;
        arg$Cons$1$1 = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          let inlinedVal, xs1, ys, inlinedVal1;
          xs1 = arg$Cons$0$1;
          ys = arg$Cons$0$;
          inlinedLbl: {
            loopLabel1: while (true) {
              let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
              if (xs1 instanceof NofibPrelude.Nil.class) {
                if (ys instanceof NofibPrelude.Nil.class) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt();
                  break inlinedLbl
                } else if (ys instanceof NofibPrelude.Cons.class) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt();
                  break inlinedLbl
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              } else if (xs1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = xs1.head;
                arg$Cons$1$2 = xs1.tail;
                if (ys instanceof NofibPrelude.Nil.class) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_GT();
                  break inlinedLbl
                } else if (ys instanceof NofibPrelude.Cons.class) {
                  let inlinedVal2, inlinedVal3;
                  arg$Cons$0$3 = ys.head;
                  arg$Cons$1$3 = ys.tail;
                  inlinedVal2 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                  inlinedVal3 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                  scrut = inlinedVal2 === inlinedVal3;
                  if (scrut === true) {
                    xs1 = arg$Cons$1$2;
                    ys = arg$Cons$1$3;
                    continue loopLabel1
                  }
                  {
                    let inlinedVal4, inlinedVal5;
                    inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                    inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                    scrut1 = inlinedVal4 < inlinedVal5;
                    if (scrut1 === true) {
                      inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt();
                      break inlinedLbl
                    }
                    inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_GT();
                    break inlinedLbl;
                  }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          inlinedVal = inlinedVal1();
          if (inlinedVal === true) {
            tmp1 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
            tmp2 = NofibPrelude.Cons(arg$Cons$0$, tmp1);
            run = tmp2;
            xs = arg$Cons$1$1;
            continue loopLabel
          }
          {
            let inlinedVal2, inlinedVal3, xs2, ys1, inlinedVal4;
            xs2 = arg$Cons$0$1;
            ys1 = arg$Cons$0$;
            inlinedLbl1: {
              loopLabel2: while (true) {
                let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
                if (xs2 instanceof NofibPrelude.Nil.class) {
                  if (ys1 instanceof NofibPrelude.Nil.class) {
                    inlinedVal4 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt1();
                    break inlinedLbl1
                  } else if (ys1 instanceof NofibPrelude.Cons.class) {
                    inlinedVal4 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt1();
                    break inlinedLbl1
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                } else if (xs2 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = xs2.head;
                  arg$Cons$1$2 = xs2.tail;
                  if (ys1 instanceof NofibPrelude.Nil.class) {
                    inlinedVal4 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT1();
                    break inlinedLbl1
                  } else if (ys1 instanceof NofibPrelude.Cons.class) {
                    let inlinedVal5, inlinedVal6;
                    arg$Cons$0$3 = ys1.head;
                    arg$Cons$1$3 = ys1.tail;
                    inlinedVal5 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                    inlinedVal6 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                    scrut = inlinedVal5 === inlinedVal6;
                    if (scrut === true) {
                      xs2 = arg$Cons$1$2;
                      ys1 = arg$Cons$1$3;
                      continue loopLabel2
                    }
                    {
                      let inlinedVal7, inlinedVal8;
                      inlinedVal7 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                      inlinedVal8 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                      scrut1 = inlinedVal7 < inlinedVal8;
                      if (scrut1 === true) {
                        inlinedVal4 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt1();
                        break inlinedLbl1
                      }
                      inlinedVal4 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT1();
                      break inlinedLbl1;
                    }
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            inlinedVal3 = inlinedVal4();
            inlinedVal2 = ! inlinedVal3;
            if (inlinedVal2 === true) {
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
              tmp4 = NofibPrelude.Cons(arg$Cons$0$1, tmp3);
              run = tmp4;
              xs = arg$Cons$1$1;
              continue loopLabel
            }
            tmp5 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            tmp6 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
            tmp7 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit(tmp6, arg$Cons$1$1);
            return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons1(tmp5, tmp7);
          }
        }
        {
          let inlinedVal, inlinedVal1, xs1, ys, inlinedVal2;
          xs1 = arg$Cons$0$1;
          ys = arg$Cons$0$;
          inlinedLbl: {
            loopLabel1: while (true) {
              let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
              if (xs1 instanceof NofibPrelude.Nil.class) {
                if (ys instanceof NofibPrelude.Nil.class) {
                  inlinedVal2 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt();
                  break inlinedLbl
                } else if (ys instanceof NofibPrelude.Cons.class) {
                  inlinedVal2 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt();
                  break inlinedLbl
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              } else if (xs1 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$2 = xs1.head;
                arg$Cons$1$2 = xs1.tail;
                if (ys instanceof NofibPrelude.Nil.class) {
                  inlinedVal2 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT();
                  break inlinedLbl
                } else if (ys instanceof NofibPrelude.Cons.class) {
                  let inlinedVal3, inlinedVal4;
                  arg$Cons$0$3 = ys.head;
                  arg$Cons$1$3 = ys.tail;
                  inlinedVal3 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                  inlinedVal4 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                  scrut = inlinedVal3 === inlinedVal4;
                  if (scrut === true) {
                    xs1 = arg$Cons$1$2;
                    ys = arg$Cons$1$3;
                    continue loopLabel1
                  }
                  {
                    let inlinedVal5, inlinedVal6;
                    inlinedVal5 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                    inlinedVal6 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                    scrut1 = inlinedVal5 < inlinedVal6;
                    if (scrut1 === true) {
                      inlinedVal2 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt();
                      break inlinedLbl
                    }
                    inlinedVal2 = main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT();
                    break inlinedLbl;
                  }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          inlinedVal1 = inlinedVal2();
          inlinedVal = ! inlinedVal1;
          if (inlinedVal === true) {
            tmp8 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
            tmp9 = NofibPrelude.Cons(arg$Cons$0$1, tmp8);
            run = tmp9;
            xs = arg$Cons$1$1;
            continue loopLabel
          }
          tmp10 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
          tmp11 = NofibPrelude.Cons(arg$Cons$0$1, NofibPrelude.Nil);
          tmp12 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit(tmp11, arg$Cons$1$1);
          return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons(tmp10, tmp12);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1 = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  }
  if (ys instanceof NofibPrelude.Nil.class) {
    return xs
  }
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof NofibPrelude.Cons.class) {
      let inlinedVal, xs1, ys1, inlinedVal1;
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      xs1 = arg$Cons$0$;
      ys1 = arg$Cons$0$1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
          if (xs1 instanceof NofibPrelude.Nil.class) {
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = xs1.head;
            arg$Cons$1$2 = xs1.tail;
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              let inlinedVal2, inlinedVal3;
              arg$Cons$0$3 = ys1.head;
              arg$Cons$1$3 = ys1.tail;
              inlinedVal2 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
              inlinedVal3 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
              scrut = inlinedVal2 === inlinedVal3;
              if (scrut === true) {
                xs1 = arg$Cons$1$2;
                ys1 = arg$Cons$1$3;
                continue loopLabel
              }
              {
                let inlinedVal4, inlinedVal5;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut1 = inlinedVal4 < inlinedVal5;
                if (scrut1 === true) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal = inlinedVal1();
      if (inlinedVal === true) {
        tmp = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1(arg$Cons$1$, arg$Cons$1$1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, tmp);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      {
        let inlinedVal2, xs2, ys2, inlinedVal3;
        xs2 = arg$Cons$0$;
        ys2 = arg$Cons$0$1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
            if (xs2 instanceof NofibPrelude.Nil.class) {
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                break inlinedLbl1
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            } else if (xs2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = xs2.head;
              arg$Cons$1$2 = xs2.tail;
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                let inlinedVal4, inlinedVal5;
                arg$Cons$0$3 = ys2.head;
                arg$Cons$1$3 = ys2.tail;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut = inlinedVal4 === inlinedVal5;
                if (scrut === true) {
                  xs2 = arg$Cons$1$2;
                  ys2 = arg$Cons$1$3;
                  continue loopLabel1
                }
                {
                  let inlinedVal6, inlinedVal7;
                  inlinedVal6 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                  inlinedVal7 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                  scrut1 = inlinedVal6 < inlinedVal7;
                  if (scrut1 === true) {
                    inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                    break inlinedLbl1
                  }
                  inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                  break inlinedLbl1;
                }
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        inlinedVal2 = inlinedVal3();
        if (inlinedVal2 === true) {
          tmp2 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
          tmp3 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1(arg$Cons$1$, tmp2);
          return NofibPrelude.Cons(arg$Cons$0$, tmp3)
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        tmp5 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1(tmp4, arg$Cons$1$1);
        return NofibPrelude.Cons(arg$Cons$0$1, tmp5);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons1 = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge1(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2 = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  }
  if (ys instanceof NofibPrelude.Nil.class) {
    return xs
  }
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    if (ys instanceof NofibPrelude.Cons.class) {
      let inlinedVal, xs1, ys1, inlinedVal1;
      arg$Cons$0$1 = ys.head;
      arg$Cons$1$1 = ys.tail;
      xs1 = arg$Cons$0$;
      ys1 = arg$Cons$0$1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
          if (xs1 instanceof NofibPrelude.Nil.class) {
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$2 = xs1.head;
            arg$Cons$1$2 = xs1.tail;
            if (ys1 instanceof NofibPrelude.Nil.class) {
              inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
              break inlinedLbl
            } else if (ys1 instanceof NofibPrelude.Cons.class) {
              let inlinedVal2, inlinedVal3;
              arg$Cons$0$3 = ys1.head;
              arg$Cons$1$3 = ys1.tail;
              inlinedVal2 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
              inlinedVal3 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
              scrut = inlinedVal2 === inlinedVal3;
              if (scrut === true) {
                xs1 = arg$Cons$1$2;
                ys1 = arg$Cons$1$3;
                continue loopLabel
              }
              {
                let inlinedVal4, inlinedVal5;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut1 = inlinedVal4 < inlinedVal5;
                if (scrut1 === true) {
                  inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal1 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal = inlinedVal1();
      if (inlinedVal === true) {
        tmp = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2(arg$Cons$1$, arg$Cons$1$1);
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, tmp);
        return NofibPrelude.Cons(arg$Cons$0$, tmp1)
      }
      {
        let inlinedVal2, xs2, ys2, inlinedVal3;
        xs2 = arg$Cons$0$;
        ys2 = arg$Cons$0$1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut, scrut1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3;
            if (xs2 instanceof NofibPrelude.Nil.class) {
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                break inlinedLbl1
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            } else if (xs2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = xs2.head;
              arg$Cons$1$2 = xs2.tail;
              if (ys2 instanceof NofibPrelude.Nil.class) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                break inlinedLbl1
              } else if (ys2 instanceof NofibPrelude.Cons.class) {
                let inlinedVal4, inlinedVal5;
                arg$Cons$0$3 = ys2.head;
                arg$Cons$1$3 = ys2.tail;
                inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                inlinedVal5 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                scrut = inlinedVal4 === inlinedVal5;
                if (scrut === true) {
                  xs2 = arg$Cons$1$2;
                  ys2 = arg$Cons$1$3;
                  continue loopLabel1
                }
                {
                  let inlinedVal6, inlinedVal7;
                  inlinedVal6 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                  inlinedVal7 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                  scrut1 = inlinedVal6 < inlinedVal7;
                  if (scrut1 === true) {
                    inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT();
                    break inlinedLbl1
                  }
                  inlinedVal3 = main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt();
                  break inlinedLbl1;
                }
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        inlinedVal2 = inlinedVal3();
        if (inlinedVal2 === true) {
          tmp2 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
          tmp3 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2(arg$Cons$1$, tmp2);
          return NofibPrelude.Cons(arg$Cons$0$, tmp3)
        }
        tmp4 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
        tmp5 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2(tmp4, arg$Cons$1$1);
        return NofibPrelude.Cons(arg$Cons$0$1, tmp5);
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons2 = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons(Cons_head, Cons_tail) {
  return () => {
    let inlinedVal;
    inlinedVal = Cons_tail();
    return main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Cons_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge$merge2(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil() {
  return () => {
    return NofibPrelude.Nil
  }
};
main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil1 = function main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit_main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil$main_testSorting_nofib_mangle_sort_mergeSort_merge_lists$xs_Nil() {
  return () => {
    return NofibPrelude.Nil
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil1 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons1 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil2 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons2 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil3 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil() {
  return (fv_ys) => {
    return fv_ys
  }
};
main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons3 = function main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_ys);
    return NofibPrelude.Cons(Cons_head, inlinedVal)
  }
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil$main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil$main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil() {
  return (fv_ys) => {
    return (eta$0$0, eta$0$5, eta$0$6) => {
      return fv_ys(eta$0$0, eta$0$5, eta$0$6)
    }
  }
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda$main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda$main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda(l) {
  let tmp, Cons_tail;
  Cons_tail = main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil$main_testSorting_nofib_mangle_unlines_concat_append$xs_Nil();
  tmp = main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons("\n", Cons_tail);
  return main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append$main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append(l, tmp)
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$$main_testSorting_nofib_mangle_unlines_lambda$$lambda$ = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$$main_testSorting_nofib_mangle_unlines_lambda$$lambda$() {
  return (l) => {
    return main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda$main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda(l)
  }
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return (eta$0$0, eta$0$5, eta$0$6) => {
      let inlinedVal, fv_tmp;
      inlinedVal = Cons_tail(fv_ys);
      fv_tmp = runtime.safeCall(eta$0$6(eta$0$0, Cons_head));
      return inlinedVal(fv_tmp, undefined, eta$0$6)
    }
  }
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append$main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append$main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append(xs, ys) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append$main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append(arg$Cons$1$, ys);
    return main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_lambda$_lambda_append$append_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons(arg$Cons$0$, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons = function main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$_main_testSorting_nofib_mangle_unlines_lambda$_lambda$lambda_main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons$main_testSorting_nofib_mangle_unlines_concat_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return (eta$0$0, eta$0$5, eta$0$6) => {
      let inlinedVal, fv_tmp;
      inlinedVal = Cons_tail(fv_ys);
      fv_tmp = runtime.safeCall(eta$0$6(eta$0$0, Cons_head));
      return inlinedVal(fv_tmp, undefined, eta$0$6)
    }
  }
};
main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Nil$main_testSorting_nofib_mangle_unlines_concat$ls_Nil = function main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Nil$main_testSorting_nofib_mangle_unlines_concat$ls_Nil() {
  return () => {
    return (eta$0$0, eta$0$5, eta$0$6) => {
      return eta$0$0
    }
  }
};
main_main_testSorting_nofib_mangle_unlines_map$map$main_testSorting_nofib_mangle_unlines_map$map = function main_main_testSorting_nofib_mangle_unlines_map$map$main_testSorting_nofib_mangle_unlines_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_main_testSorting_nofib_mangle_unlines_map$map$main_testSorting_nofib_mangle_unlines_map$map(f, arg$Cons$1$);
    return main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Cons$main_testSorting_nofib_mangle_unlines_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Nil$main_testSorting_nofib_mangle_unlines_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Cons$main_testSorting_nofib_mangle_unlines_concat$ls_Cons = function main_main_testSorting_nofib_mangle_unlines_map$map_main_testSorting_nofib_mangle_unlines_concat$ls_Cons$main_testSorting_nofib_mangle_unlines_concat$ls_Cons(Cons_head, Cons_tail) {
  return () => {
    return (eta$0$0, eta$0$5, eta$0$6) => {
      let inlinedVal;
      inlinedVal = Cons_tail();
      return Cons_head(inlinedVal)(eta$0$0, eta$0$5, eta$0$6)
    }
  }
};
main_lambda$_lambda$lambda = function main_lambda$_lambda$lambda(acc, c) {
  let tmp, inlinedVal, inlinedVal1, inlinedVal2;
  inlinedVal = runtime.safeCall(c.codePointAt(0));
  inlinedVal1 = runtime.safeCall(globalThis.BigInt(inlinedVal));
  inlinedVal2 = runtime.safeCall(globalThis.BigInt(31));
  tmp = acc * inlinedVal2;
  return inlinedVal1 + tmp
};
main_lambda$$lambda$ = function main_lambda$$lambda$() {
  return (acc, c) => {
    return main_lambda$_lambda$lambda(acc, c)
  }
};
main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split = function main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split(id, param0, param1, param2, param3, param4) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param0 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param0 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param0.head;
            arg$Cons$1$ = param0.tail;
            if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
              return NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil)
            }
            param0 = sorting1;
            param1 = arg$Cons$0$;
            param2 = NofibPrelude.Nil;
            param3 = NofibPrelude.Nil;
            param4 = arg$Cons$1$;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
          if (param4 instanceof NofibPrelude.Nil.class) {
            tmp = main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split(0, param2, undefined, undefined, undefined, undefined);
            tmp1 = main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split(0, param3, undefined, undefined, undefined, undefined);
            tmp2 = NofibPrelude.Cons(param1, tmp1);
            return param0[append$accessorSymbol](tmp, tmp2)
          } else if (param4 instanceof NofibPrelude.Cons.class) {
            let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
            arg$Cons$0$ = param4.head;
            arg$Cons$1$ = param4.tail;
            xs = arg$Cons$0$;
            ys = param1;
            inlinedLbl: {
              loopLabel1: while (true) {
                let scrut, scrut1, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2;
                if (xs instanceof NofibPrelude.Nil.class) {
                  if (ys instanceof NofibPrelude.Nil.class) {
                    inlinedVal2 = main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt();
                    break inlinedLbl
                  } else if (ys instanceof NofibPrelude.Cons.class) {
                    inlinedVal2 = main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt();
                    break inlinedLbl
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                } else if (xs instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$1 = xs.head;
                  arg$Cons$1$1 = xs.tail;
                  if (ys instanceof NofibPrelude.Nil.class) {
                    inlinedVal2 = main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_GT();
                    break inlinedLbl
                  } else if (ys instanceof NofibPrelude.Cons.class) {
                    let inlinedVal3, inlinedVal4;
                    arg$Cons$0$2 = ys.head;
                    arg$Cons$1$2 = ys.tail;
                    inlinedVal3 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
                    inlinedVal4 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                    scrut = inlinedVal3 === inlinedVal4;
                    if (scrut === true) {
                      xs = arg$Cons$1$1;
                      ys = arg$Cons$1$2;
                      continue loopLabel1
                    }
                    {
                      let inlinedVal5, inlinedVal6;
                      inlinedVal5 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
                      inlinedVal6 = runtime.safeCall(arg$Cons$0$2.codePointAt(0));
                      scrut1 = inlinedVal5 < inlinedVal6;
                      if (scrut1 === true) {
                        inlinedVal2 = main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt();
                        break inlinedLbl
                      }
                      inlinedVal2 = main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_GT();
                      break inlinedLbl;
                    }
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            inlinedVal1 = inlinedVal2();
            inlinedVal = ! inlinedVal1;
            if (inlinedVal === true) {
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, param2);
              param2 = tmp3;
              param4 = arg$Cons$1$;
              id = 1;
              continue loopLabel
            }
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, param3);
            param3 = tmp4;
            param4 = arg$Cons$1$;
            id = 1;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap = function main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, k, x, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1, tmp2, tmp3;
  if (t instanceof sorting2.Tip.class) {
    return sorting2.Branch(x, sorting2.Tip, sorting2.Tip)
  } else if (t instanceof sorting2.Branch.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, xs, ys, inlinedVal3, inlinedVal4, xs1, ys1, inlinedVal5;
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    xs1 = x;
    ys1 = arg$Branch$0$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
        if (xs1 instanceof NofibPrelude.Nil.class) {
          if (ys1 instanceof NofibPrelude.Nil.class) {
            inlinedVal5 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt();
            break inlinedLbl
          } else if (ys1 instanceof NofibPrelude.Cons.class) {
            inlinedVal5 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt();
            break inlinedLbl
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (xs1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs1.head;
          arg$Cons$1$ = xs1.tail;
          if (ys1 instanceof NofibPrelude.Nil.class) {
            inlinedVal5 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT();
            break inlinedLbl
          } else if (ys1 instanceof NofibPrelude.Cons.class) {
            let inlinedVal6, inlinedVal7;
            arg$Cons$0$1 = ys1.head;
            arg$Cons$1$1 = ys1.tail;
            inlinedVal6 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal7 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut = inlinedVal6 === inlinedVal7;
            if (scrut === true) {
              xs1 = arg$Cons$1$;
              ys1 = arg$Cons$1$1;
              continue loopLabel
            }
            {
              let inlinedVal8, inlinedVal9;
              inlinedVal8 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal9 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut1 = inlinedVal8 < inlinedVal9;
              if (scrut1 === true) {
                inlinedVal5 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt();
                break inlinedLbl
              }
              inlinedVal5 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT();
              break inlinedLbl;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal4 = inlinedVal5();
    inlinedVal = ! inlinedVal4;
    if (inlinedVal === true) {
      let inlinedVal6, inlinedVal7, tmp4, inlinedVal8, tmp5;
      tmp5 = k / 2;
      inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp5));
      tmp4 = 2 * inlinedVal8;
      inlinedVal7 = k - tmp4;
      inlinedVal6 = inlinedVal7 === 0;
      if (inlinedVal6 === true) {
        let inlinedVal9, tmp6;
        tmp6 = k / 2;
        inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, inlinedVal9, arg$Branch$0$, arg$Branch$1$);
        return sorting2.Branch(x, tmp3, arg$Branch$2$)
      }
    }
    xs = x;
    ys = arg$Branch$0$;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
        if (xs instanceof NofibPrelude.Nil.class) {
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt1();
            break inlinedLbl1
          } else if (ys instanceof NofibPrelude.Cons.class) {
            inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt1();
            break inlinedLbl1
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT1();
            break inlinedLbl1
          } else if (ys instanceof NofibPrelude.Cons.class) {
            let inlinedVal6, inlinedVal7;
            arg$Cons$0$1 = ys.head;
            arg$Cons$1$1 = ys.tail;
            inlinedVal6 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal7 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut = inlinedVal6 === inlinedVal7;
            if (scrut === true) {
              xs = arg$Cons$1$;
              ys = arg$Cons$1$1;
              continue loopLabel1
            }
            {
              let inlinedVal8, inlinedVal9;
              inlinedVal8 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal9 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut1 = inlinedVal8 < inlinedVal9;
              if (scrut1 === true) {
                inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt1();
                break inlinedLbl1
              }
              inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT1();
              break inlinedLbl1;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal2 = inlinedVal3();
    inlinedVal1 = ! inlinedVal2;
    if (inlinedVal1 === true) {
      let inlinedVal6, tmp4;
      tmp4 = k / 2;
      inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp4));
      tmp = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, inlinedVal6, arg$Branch$0$, arg$Branch$2$);
      return sorting2.Branch(x, arg$Branch$1$, tmp)
    }
    {
      let inlinedVal6, inlinedVal7, tmp4, inlinedVal8, tmp5;
      tmp5 = k / 2;
      inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp5));
      tmp4 = 2 * inlinedVal8;
      inlinedVal7 = k - tmp4;
      inlinedVal6 = inlinedVal7 === 0;
      if (inlinedVal6 === true) {
        let inlinedVal9, tmp6;
        tmp6 = k / 2;
        inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp1 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, inlinedVal9, x, arg$Branch$1$);
        return sorting2.Branch(arg$Branch$0$, tmp1, arg$Branch$2$)
      }
      {
        let inlinedVal9, tmp6;
        tmp6 = k / 2;
        inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp6));
        tmp2 = main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, inlinedVal9, x, arg$Branch$2$);
        return sorting2.Branch(arg$Branch$0$, arg$Branch$1$, tmp2);
      }
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_heapSort_heap$heap = function main_testSorting_nofib_mangle_sort_heapSort_heap$heap(sorting2, k, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return sorting2.Tip
  } else if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = k + 1;
    tmp1 = main_testSorting_nofib_mangle_sort_heapSort_heap$heap(sorting2, tmp, arg$Cons$1$);
    return main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap$to_heap(sorting2, k, arg$Cons$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix = function main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix(sorting2, l, r) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, arg$Branch$0$1, arg$Branch$1$1, arg$Branch$2$1, tmp, tmp1, tmp2, tmp3;
  if (l instanceof sorting2.Tip.class) {
    return r
  }
  if (r instanceof sorting2.Tip.class) {
    return l
  }
  if (l instanceof sorting2.Branch.class) {
    arg$Branch$0$ = l.a;
    arg$Branch$1$ = l.l;
    arg$Branch$2$ = l.r;
    if (r instanceof sorting2.Branch.class) {
      let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
      arg$Branch$0$1 = r.a;
      arg$Branch$1$1 = r.l;
      arg$Branch$2$1 = r.r;
      xs = arg$Branch$0$;
      ys = arg$Branch$0$1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
          if (xs instanceof NofibPrelude.Nil.class) {
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt();
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          } else if (xs instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = xs.head;
            arg$Cons$1$ = xs.tail;
            if (ys instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_GT();
              break inlinedLbl
            } else if (ys instanceof NofibPrelude.Cons.class) {
              let inlinedVal3, inlinedVal4;
              arg$Cons$0$1 = ys.head;
              arg$Cons$1$1 = ys.tail;
              inlinedVal3 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal4 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut = inlinedVal3 === inlinedVal4;
              if (scrut === true) {
                xs = arg$Cons$1$;
                ys = arg$Cons$1$1;
                continue loopLabel
              }
              {
                let inlinedVal5, inlinedVal6;
                inlinedVal5 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
                inlinedVal6 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
                scrut1 = inlinedVal5 < inlinedVal6;
                if (scrut1 === true) {
                  inlinedVal2 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt();
                  break inlinedLbl
                }
                inlinedVal2 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_GT();
                break inlinedLbl;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal1 = inlinedVal2();
      inlinedVal = ! inlinedVal1;
      if (inlinedVal === true) {
        tmp = main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix(sorting2, arg$Branch$1$, arg$Branch$2$);
        tmp1 = sorting2.Branch(arg$Branch$0$1, arg$Branch$1$1, arg$Branch$2$1);
        return sorting2.Branch(arg$Branch$0$, tmp, tmp1)
      }
      tmp2 = sorting2.Branch(arg$Branch$0$, arg$Branch$1$, arg$Branch$2$);
      tmp3 = main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix(sorting2, arg$Branch$1$1, arg$Branch$2$1);
      return sorting2.Branch(arg$Branch$0$1, tmp2, tmp3);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_heapSort_clear$clear = function main_testSorting_nofib_mangle_sort_heapSort_clear$clear(sorting2, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1;
  if (t instanceof sorting2.Tip.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Branch.class) {
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    tmp = main_testSorting_nofib_mangle_sort_heapSort_clear_mix$mix(sorting2, arg$Branch$1$, arg$Branch$2$);
    tmp1 = main_testSorting_nofib_mangle_sort_heapSort_clear$clear(sorting2, tmp);
    return NofibPrelude.Cons(arg$Branch$0$, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree = function main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree(sorting2, x, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1;
  if (t instanceof sorting2.Tip.class) {
    return sorting2.Branch(x, sorting2.Tip, sorting2.Tip)
  } else if (t instanceof sorting2.Branch.class) {
    let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    xs = x;
    ys = arg$Branch$0$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
        if (xs instanceof NofibPrelude.Nil.class) {
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
            break inlinedLbl
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            let inlinedVal3, inlinedVal4;
            arg$Cons$0$1 = ys.head;
            arg$Cons$1$1 = ys.tail;
            inlinedVal3 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal4 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut = inlinedVal3 === inlinedVal4;
            if (scrut === true) {
              xs = arg$Cons$1$;
              ys = arg$Cons$1$1;
              continue loopLabel
            }
            {
              let inlinedVal5, inlinedVal6;
              inlinedVal5 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal6 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut1 = inlinedVal5 < inlinedVal6;
              if (scrut1 === true) {
                inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
                break inlinedLbl
              }
              inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT();
              break inlinedLbl;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree(sorting2, x, arg$Branch$1$);
      return sorting2.Branch(arg$Branch$0$, tmp, arg$Branch$2$)
    }
    tmp1 = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree(sorting2, x, arg$Branch$2$);
    return sorting2.Branch(arg$Branch$0$, arg$Branch$1$, tmp1);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$$to_tree$ = function main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$$to_tree$(sorting2) {
  return (x, t) => {
    return main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree$to_tree(sorting2, x, t)
  }
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree(sorting2, x, t) {
  let arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp, tmp1, tmp2, tmp3;
  if (t instanceof sorting2.Tip2.class) {
    return sorting2.Twig2(x)
  } else if (t instanceof sorting2.Twig2.class) {
    let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
    arg$Twig2$0$ = t.a;
    xs = x;
    ys = arg$Twig2$0$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
        if (xs instanceof NofibPrelude.Nil.class) {
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt1();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt1();
            break inlinedLbl
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT1();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            let inlinedVal3, inlinedVal4;
            arg$Cons$0$1 = ys.head;
            arg$Cons$1$1 = ys.tail;
            inlinedVal3 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal4 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut = inlinedVal3 === inlinedVal4;
            if (scrut === true) {
              xs = arg$Cons$1$;
              ys = arg$Cons$1$1;
              continue loopLabel
            }
            {
              let inlinedVal5, inlinedVal6;
              inlinedVal5 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal6 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut1 = inlinedVal5 < inlinedVal6;
              if (scrut1 === true) {
                inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt1();
                break inlinedLbl
              }
              inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT1();
              break inlinedLbl;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp = sorting2.Twig2(x);
      return sorting2.Branch2(arg$Twig2$0$, tmp, sorting2.Tip2)
    }
    tmp1 = sorting2.Twig2(x);
    return sorting2.Branch2(arg$Twig2$0$, sorting2.Tip2, tmp1);
  } else if (t instanceof sorting2.Branch2.class) {
    let inlinedVal, inlinedVal1, xs, ys, inlinedVal2;
    arg$Branch2$0$ = t.a;
    arg$Branch2$1$ = t.l;
    arg$Branch2$2$ = t.r;
    xs = x;
    ys = arg$Branch2$0$;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
        if (xs instanceof NofibPrelude.Nil.class) {
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
            break inlinedLbl
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          if (ys instanceof NofibPrelude.Nil.class) {
            inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT();
            break inlinedLbl
          } else if (ys instanceof NofibPrelude.Cons.class) {
            let inlinedVal3, inlinedVal4;
            arg$Cons$0$1 = ys.head;
            arg$Cons$1$1 = ys.tail;
            inlinedVal3 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
            inlinedVal4 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
            scrut = inlinedVal3 === inlinedVal4;
            if (scrut === true) {
              xs = arg$Cons$1$;
              ys = arg$Cons$1$1;
              continue loopLabel
            }
            {
              let inlinedVal5, inlinedVal6;
              inlinedVal5 = runtime.safeCall(arg$Cons$0$.codePointAt(0));
              inlinedVal6 = runtime.safeCall(arg$Cons$0$1.codePointAt(0));
              scrut1 = inlinedVal5 < inlinedVal6;
              if (scrut1 === true) {
                inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt();
                break inlinedLbl
              }
              inlinedVal2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT();
              break inlinedLbl;
            }
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = ! inlinedVal1;
    if (inlinedVal === true) {
      tmp2 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree(sorting2, x, arg$Branch2$1$);
      return sorting2.Branch2(arg$Branch2$0$, tmp2, arg$Branch2$2$)
    }
    tmp3 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree(sorting2, x, arg$Branch2$2$);
    return sorting2.Branch2(arg$Branch2$0$, arg$Branch2$1$, tmp3);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$$to_tree$ = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$$to_tree$(sorting2) {
  return (x, t) => {
    return main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree$to_tree(sorting2, x, t)
  }
};
main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT1 = function main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt1 = function main_testSorting_nofib_mangle_sort_heapSort_heap_to_heap_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_heapSort_clear_mix_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt = function main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_LT = function main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_LT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt1 = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT1 = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_mergeSort_runsplit_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ = function main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_EQ() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt = function main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_eqList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt = function main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT = function main_testSorting_nofib_mangle_sort_mergeSort_merge_lists_merge_ltList$scrut_LT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_quickSort_lscomp1_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_quickSort_lscomp2_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt = function main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_LT = function main_testSorting_nofib_mangle_sort_quickSort2_lambda$_lambda_geList_ltList$scrut_LT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_quickerSort_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt1 = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_dflt() {
  return () => {
    return false
  }
};
main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT1 = function main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$_to_tree_leList_gtList$scrut_GT() {
  return () => {
    return true
  }
};
readTree1 = function readTree(sorting2, t) {
  let arg$Branch2$0$, arg$Branch2$1$, arg$Branch2$2$, arg$Twig2$0$, tmp, tmp1, tmp2;
  if (t instanceof sorting2.Tip2.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Twig2.class) {
    arg$Twig2$0$ = t.a;
    return NofibPrelude.Cons(arg$Twig2$0$, NofibPrelude.Nil)
  } else if (t instanceof sorting2.Branch2.class) {
    arg$Branch2$0$ = t.a;
    arg$Branch2$1$ = t.l;
    arg$Branch2$2$ = t.r;
    tmp = readTree1(sorting2, arg$Branch2$1$);
    tmp1 = readTree1(sorting2, arg$Branch2$2$);
    tmp2 = NofibPrelude.Cons(arg$Branch2$0$, tmp1);
    return sorting2[append$accessorSymbol](tmp, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
readTree = function readTree(sorting2, t) {
  let arg$Branch$0$, arg$Branch$1$, arg$Branch$2$, tmp, tmp1, tmp2;
  if (t instanceof sorting2.Tip.class) {
    return NofibPrelude.Nil
  } else if (t instanceof sorting2.Branch.class) {
    arg$Branch$0$ = t.a;
    arg$Branch$1$ = t.l;
    arg$Branch$2$ = t.r;
    tmp = readTree(sorting2, arg$Branch$1$);
    tmp1 = readTree(sorting2, arg$Branch$2$);
    tmp2 = NofibPrelude.Cons(arg$Branch$0$, tmp1);
    return sorting2[append$accessorSymbol](tmp, tmp2)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (sorting2, p) {
  return (x, y) => {
    return sorting2[select$accessorSymbol](p, x, y)
  }
});
lambda = (undefined, function (x) {
  return x === "\n"
});
(class sorting {
  static {
    sorting1 = this
  }
  static get [append$accessorSymbol]() { return sorting.#append; }
  static get [foldr$accessorSymbol]() { return sorting.#foldr; }
  static get [select$accessorSymbol]() { return sorting.#select; }
  static {
    (class EQ {
      static {
        new this
      }
      constructor() {
        sorting.EQ = this;
        Object.defineProperty(this, "class", {
          value: EQ
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"];
    });
    (class GT {
      static {
        new this
      }
      constructor() {
        sorting.GT = this;
        Object.defineProperty(this, "class", {
          value: GT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"];
    });
    (class LT {
      static {
        new this
      }
      constructor() {
        sorting.LT = this;
        Object.defineProperty(this, "class", {
          value: LT
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"];
    });
    (class Tip {
      static {
        new this
      }
      constructor() {
        sorting.Tip = this;
        Object.defineProperty(this, "class", {
          value: Tip
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"];
    });
    sorting.Branch = function Branch(a, l, r) {
      return globalThis.Object.freeze(new Branch.class(a, l, r));
    };
    (class Branch {
      static {
        sorting.Branch.class = this
      }
      constructor(a, l, r) {
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch", ["a", "l", "r"]];
    });
    (class Tip2 {
      static {
        new this
      }
      constructor() {
        sorting.Tip2 = this;
        Object.defineProperty(this, "class", {
          value: Tip2
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip2"];
    });
    sorting.Twig2 = function Twig2(a) {
      return globalThis.Object.freeze(new Twig2.class(a));
    };
    (class Twig2 {
      static {
        sorting.Twig2.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Twig2", ["a"]];
    });
    sorting.Branch2 = function Branch2(a, l, r) {
      return globalThis.Object.freeze(new Branch2.class(a, l, r));
    };
    (class Branch2 {
      static {
        sorting.Branch2.class = this
      }
      constructor(a, l, r) {
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Branch2", ["a", "l", "r"]];
    });
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = sorting.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #foldr(f, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = sorting.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #select(p, x, ts_fs) {
    let scrut, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      element0$ = runtime.Tuple.get(ts_fs, 0);
      element1$ = runtime.Tuple.get(ts_fs, 1);
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, element0$);
        return globalThis.Object.freeze([
          tmp,
          element1$
        ])
      }
      tmp1 = NofibPrelude.Cons(x, element1$);
      return globalThis.Object.freeze([
        element0$,
        tmp1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main(input) {
    let f, tmp, sep, tmp1, lambda$here, inlinedVal, inlinedVal1, f1, inlinedVal2, inlinedVal3, tmp2, inlinedVal4, inlinedVal5, arg$Cons$0$, arg$Cons$1$, tmp3, inlinedVal6, inlinedVal7, tmp4, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, to_tree$here, inlinedVal17, inlinedVal18, to_tree$here1;
    f = NofibPrelude.nofibStringToList(input);
    tmp = main_main_testSorting_nofib_mangle_lines$lines$main_testSorting_nofib_mangle_lines$lines(f);
    sep = sorting1.#reverse;
    to_tree$here1 = main_testSorting_nofib_mangle_sort_treeSort2_mkTree_to_tree$$to_tree$(sorting1);
    inlinedVal18 = sorting1.#foldr(to_tree$here1, sorting1.Tip2, tmp);
    inlinedVal17 = readTree1(sorting1, inlinedVal18);
    inlinedVal14 = runtime.safeCall(sep(inlinedVal17));
    to_tree$here = main_testSorting_nofib_mangle_sort_treeSort_mkTree_to_tree$$to_tree$(sorting1);
    inlinedVal16 = sorting1.#foldr(to_tree$here, sorting1.Tip, inlinedVal14);
    inlinedVal15 = readTree(sorting1, inlinedVal16);
    inlinedVal12 = runtime.safeCall(sep(inlinedVal15));
    inlinedVal13 = main_testSorting_nofib_mangle_sort_quickerSort$quickerSort_main_testSorting_nofib_mangle_sort_quickerSort$split(0, inlinedVal12, undefined, undefined, undefined, undefined);
    inlinedVal11 = runtime.safeCall(sep(inlinedVal13));
    inlinedVal10 = runtime.safeCall(main_main_testSorting_nofib_mangle_sort_quickSort2$quickSort2$main_testSorting_nofib_mangle_sort_quickSort2$quickSort2(inlinedVal11));
    inlinedVal9 = runtime.safeCall(sep(inlinedVal10));
    inlinedVal8 = runtime.safeCall(main_main_testSorting_nofib_mangle_sort_quickSort$quickSort$main_testSorting_nofib_mangle_sort_quickSort$quickSort(inlinedVal9));
    inlinedVal6 = runtime.safeCall(sep(inlinedVal8));
    tmp4 = main_main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit$main_testSorting_nofib_mangle_sort_mergeSort_runsplit$runsplit(NofibPrelude.Nil, inlinedVal6);
    inlinedVal7 = tmp4();
    inlinedVal4 = runtime.safeCall(sep(inlinedVal7));
    if (inlinedVal4 instanceof NofibPrelude.Nil.class) {
      inlinedVal5 = NofibPrelude.Nil;
    } else if (inlinedVal4 instanceof NofibPrelude.Cons.class) {
      let rev, xs, ys, inlinedVal19;
      arg$Cons$0$ = inlinedVal4.head;
      arg$Cons$1$ = inlinedVal4.tail;
      tmp3 = NofibPrelude.Cons(arg$Cons$0$, NofibPrelude.Nil);
      rev = NofibPrelude.Nil;
      xs = tmp3;
      ys = arg$Cons$1$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, tmp5, tmp6, tmp7, tmp8, tmp9;
          if (xs instanceof NofibPrelude.Nil.class) {
            if (ys instanceof NofibPrelude.Cons.class) {
              let inlinedVal20, l$_, l, inlinedVal21;
              arg$Cons$0$2 = ys.head;
              arg$Cons$1$2 = ys.tail;
              l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil();
              l = rev;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let arg$Cons$0$3, arg$Cons$1$3;
                  if (l instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$3 = l.head;
                    arg$Cons$1$3 = l.tail;
                    l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons(arg$Cons$0$3, l$_);
                    l = arg$Cons$1$3;
                    continue loopLabel1
                  }
                  inlinedVal21 = l$_;
                  break inlinedLbl1;
                }
              }
              tmp5 = NofibPrelude.Cons(arg$Cons$0$2, NofibPrelude.Nil);
              inlinedVal20 = inlinedVal21(tmp5);
              rev = NofibPrelude.Nil;
              xs = inlinedVal20;
              ys = arg$Cons$1$2;
              continue loopLabel
            } else if (ys instanceof NofibPrelude.Nil.class) {
              let inlinedVal20, l$_, l, inlinedVal21;
              l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil1();
              l = rev;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let arg$Cons$0$3, arg$Cons$1$3;
                  if (l instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$3 = l.head;
                    arg$Cons$1$3 = l.tail;
                    l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons1(arg$Cons$0$3, l$_);
                    l = arg$Cons$1$3;
                    continue loopLabel1
                  }
                  inlinedVal21 = l$_;
                  break inlinedLbl1;
                }
              }
              inlinedVal20 = inlinedVal21(xs);
              inlinedVal19 = inlinedVal20;
              break inlinedLbl
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          if (ys instanceof NofibPrelude.Nil.class) {
            let inlinedVal20, l$_, l, inlinedVal21;
            l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil2();
            l = rev;
            inlinedLbl1: {
              loopLabel1: while (true) {
                let arg$Cons$0$3, arg$Cons$1$3;
                if (l instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$3 = l.head;
                  arg$Cons$1$3 = l.tail;
                  l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons2(arg$Cons$0$3, l$_);
                  l = arg$Cons$1$3;
                  continue loopLabel1
                }
                inlinedVal21 = l$_;
                break inlinedLbl1;
              }
            }
            inlinedVal20 = inlinedVal21(xs);
            inlinedVal19 = inlinedVal20;
            break inlinedLbl
          }
          if (xs instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = xs.head;
            arg$Cons$1$1 = xs.tail;
            if (ys instanceof NofibPrelude.Cons.class) {
              let inlinedVal20, xs1, ys1, inlinedVal21;
              arg$Cons$0$2 = ys.head;
              arg$Cons$1$2 = ys.tail;
              xs1 = arg$Cons$0$1;
              ys1 = arg$Cons$0$2;
              inlinedLbl1: {
                loopLabel1: while (true) {
                  let scrut, scrut1, arg$Cons$0$3, arg$Cons$1$3, arg$Cons$0$4, arg$Cons$1$4;
                  if (xs1 instanceof NofibPrelude.Nil.class) {
                    if (ys1 instanceof NofibPrelude.Nil.class) {
                      inlinedVal21 = main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt();
                      break inlinedLbl1
                    } else if (ys1 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$0$4 = ys1.head;
                      arg$Cons$1$4 = ys1.tail;
                      inlinedVal21 = main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_LT();
                      break inlinedLbl1
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  } else if (xs1 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$3 = xs1.head;
                    arg$Cons$1$3 = xs1.tail;
                    if (ys1 instanceof NofibPrelude.Nil.class) {
                      inlinedVal21 = main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt();
                      break inlinedLbl1
                    } else if (ys1 instanceof NofibPrelude.Cons.class) {
                      let inlinedVal22, inlinedVal23;
                      arg$Cons$0$4 = ys1.head;
                      arg$Cons$1$4 = ys1.tail;
                      inlinedVal22 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                      inlinedVal23 = runtime.safeCall(arg$Cons$0$4.codePointAt(0));
                      scrut = inlinedVal22 === inlinedVal23;
                      if (scrut === true) {
                        xs1 = arg$Cons$1$3;
                        ys1 = arg$Cons$1$4;
                        continue loopLabel1
                      }
                      {
                        let inlinedVal24, inlinedVal25;
                        inlinedVal24 = runtime.safeCall(arg$Cons$0$3.codePointAt(0));
                        inlinedVal25 = runtime.safeCall(arg$Cons$0$4.codePointAt(0));
                        scrut1 = inlinedVal24 < inlinedVal25;
                        if (scrut1 === true) {
                          inlinedVal21 = main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_LT();
                          break inlinedLbl1
                        }
                        inlinedVal21 = main_testSorting_nofib_mangle_sort_insertSort_trins_ltList$scrut_dflt();
                        break inlinedLbl1;
                      }
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
              }
              inlinedVal20 = inlinedVal21();
              if (inlinedVal20 === true) {
                tmp6 = NofibPrelude.Cons(arg$Cons$0$1, rev);
                tmp7 = NofibPrelude.Cons(arg$Cons$0$2, arg$Cons$1$2);
                rev = tmp6;
                xs = arg$Cons$1$1;
                ys = tmp7;
                continue loopLabel
              }
              {
                let inlinedVal22, l$_, l, inlinedVal23;
                l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Nil3();
                l = rev;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let arg$Cons$0$3, arg$Cons$1$3;
                    if (l instanceof NofibPrelude.Cons.class) {
                      arg$Cons$0$3 = l.head;
                      arg$Cons$1$3 = l.tail;
                      l$_ = main_main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons$main_testSorting_nofib_mangle_sort_insertSort_trins_append$xs_Cons3(arg$Cons$0$3, l$_);
                      l = arg$Cons$1$3;
                      continue loopLabel2
                    }
                    inlinedVal23 = l$_;
                    break inlinedLbl2;
                  }
                }
                tmp8 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
                tmp9 = NofibPrelude.Cons(arg$Cons$0$2, tmp8);
                inlinedVal22 = inlinedVal23(tmp9);
                rev = NofibPrelude.Nil;
                xs = inlinedVal22;
                ys = arg$Cons$1$2;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal5 = inlinedVal19;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    inlinedVal2 = runtime.safeCall(sep(inlinedVal5));
    tmp2 = main_testSorting_nofib_mangle_sort_heapSort_heap$heap(sorting1, 0, inlinedVal2);
    inlinedVal3 = main_testSorting_nofib_mangle_sort_heapSort_clear$clear(sorting1, tmp2);
    lambda$here = main_main_testSorting_nofib_mangle_unlines_lambda$$lambda$$main_testSorting_nofib_mangle_unlines_lambda$$lambda$();
    tmp1 = main_main_testSorting_nofib_mangle_unlines_map$map$main_testSorting_nofib_mangle_unlines_map$map(lambda$here, inlinedVal3);
    inlinedVal = tmp1();
    inlinedVal1 = runtime.safeCall(globalThis.BigInt(0));
    f1 = main_lambda$$lambda$();
    return inlinedVal(inlinedVal1, undefined, f1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "sorting"];
});
export default sorting1;
