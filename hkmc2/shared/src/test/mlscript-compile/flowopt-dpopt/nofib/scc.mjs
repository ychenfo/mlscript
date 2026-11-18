const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const inList$accessorSymbol = globalThis.Symbol("inList");
const append$accessorSymbol = globalThis.Symbol("append");
let scc1, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Nil$main_testScc_nofib_stronglyConnComp_dfs$xs_Nil, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons1, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons2, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons3, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons4, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map, main_main_testScc_nofib_stronglyConnComp_span_tree$vsns_tup2_main_testScc_nofib_stronglyConnComp_snd$x_tup2$main_testScc_nofib_stronglyConnComp_snd$x_tup2, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$1, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$worker, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$worker, main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$worker, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker1, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker2, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker3, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker4, main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker5;
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Nil$main_testScc_nofib_stronglyConnComp_dfs$xs_Nil = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Nil$main_testScc_nofib_stronglyConnComp_dfs$xs_Nil() {
  return (fv_ns) => {
    return globalThis.Object.freeze([
      undefined,
      fv_ns
    ])
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element1$, fv_tmp2, fv_tmp3) => {
    return main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker5(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element1$, fv_tmp2, fv_tmp3)
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker5 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(fv_ns)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(fv_tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons1 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) => {
    return main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker4(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3)
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker4 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(undefined, fv_vs, fv_ns, fv_r, undefined, undefined, undefined, undefined, undefined)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(undefined, fv_element0$, fv_tmp3, fv_r, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons2 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) => {
    return main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker3(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3)
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker3 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(undefined, fv_vs, fv_ns, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(undefined, fv_element0$, fv_tmp3, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons3 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) => {
    return main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker2(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3)
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker2 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(undefined, fv_vs, fv_ns, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(undefined, fv_element0$, fv_tmp3, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons4 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(Cons_head, Cons_tail) {
  return (fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) => {
    return main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker1(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3)
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker1 = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(undefined, fv_vs, fv_ns, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(undefined, fv_element0$, fv_tmp3, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker = function main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(Cons_head, Cons_tail, fv_scrut, fv_vs, fv_ns, fv_r, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3) {
  fv_scrut = scc1[inList$accessorSymbol](Cons_head, fv_vs);
  if (fv_scrut === true) {
    return Cons_tail(undefined, fv_vs, fv_ns, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
  }
  {
    let tup2_1, inlinedVal;
    fv_tmp = NofibPrelude.Cons(Cons_head, fv_vs);
    tup2_1 = NofibPrelude.Nil;
    fv_tmp1 = runtime.safeCall(fv_r(Cons_head));
    inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
      fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
      fv_tmp2 = NofibPrelude.Cons(Cons_head, fv_element1$);
      fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, fv_ns);
      return Cons_tail(undefined, fv_element0$, fv_tmp3, fv_r, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap(a) {
  return (eta$0$3, eta$0$6, eta$0$7) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19) => {
      return main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$worker(a, eta$0$3, eta$0$6, eta$0$7, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19)
    }
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$worker = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$worker(a, eta$0$3, eta$0$6, eta$0$7, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    let fv_scrut;
    element0$ = runtime.Tuple.get(a, 0);
    element1$ = runtime.Tuple.get(a, 1);
    fv_scrut = element1$ == eta$0$7;
    if (fv_scrut === true) {
      let inlinedVal, fv_scrut1, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3;
      inlinedVal = eta$0$3(undefined, eta$0$7);
      fv_scrut1 = scc1[inList$accessorSymbol](element0$, eta$1$5);
      if (fv_scrut1 === true) {
        return inlinedVal(undefined, undefined, undefined, undefined, undefined, eta$1$5, undefined, eta$1$7, eta$1$8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
      }
      {
        let tup2_1, inlinedVal1;
        fv_tmp = NofibPrelude.Cons(element0$, eta$1$5);
        tup2_1 = NofibPrelude.Nil;
        fv_tmp1 = runtime.safeCall(eta$1$8(element0$));
        inlinedVal1 = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, eta$1$8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
          fv_element0$ = runtime.Tuple.get(inlinedVal1, 0);
          fv_element1$ = runtime.Tuple.get(inlinedVal1, 1);
          fv_tmp2 = NofibPrelude.Cons(element0$, fv_element1$);
          fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, eta$1$7);
          return inlinedVal(undefined, undefined, undefined, undefined, undefined, fv_element0$, undefined, fv_tmp3, eta$1$8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return eta$0$3(undefined, eta$0$7)(eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$ = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$(es) {
  return (x) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19) => {
      return main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$worker(main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap$main_testScc_nofib_stronglyConnComp_lambda$_lambda_swap$swap, es, undefined, x, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19)
    }
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map(f, xs) {
  return (eta$0$7, eta$0$8) => {
    return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19) => {
      return main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$worker(f, xs, eta$0$7, eta$0$8, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19)
    }
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$worker = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$worker(f, xs, eta$0$7, eta$0$8, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (xs instanceof NofibPrelude.Cons.class) {
    let Cons_tail;
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    Cons_tail = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map$main_testScc_nofib_stronglyConnComp_lambda$_lambda_map$map(f, arg$Cons$1$);
    return tmp(Cons_tail, eta$0$7, eta$0$8)(eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, eta$1$9, eta$1$10, eta$1$11, eta$1$12, eta$1$13, eta$1$14, eta$1$15, eta$1$16, eta$1$17, eta$1$18, eta$1$19)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return globalThis.Object.freeze([
      eta$1$5,
      eta$1$7
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_testScc_nofib_stronglyConnComp_span_tree$vsns_tup2_main_testScc_nofib_stronglyConnComp_snd$x_tup2$main_testScc_nofib_stronglyConnComp_snd$x_tup2 = function main_main_testScc_nofib_stronglyConnComp_span_tree$vsns_tup2_main_testScc_nofib_stronglyConnComp_snd$x_tup2$main_testScc_nofib_stronglyConnComp_snd$x_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$worker = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$worker(xys, w, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19) {
  loopLabel: while (true) {
    loopLabel1: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$;
      if (xys instanceof NofibPrelude.Nil.class) {
        return globalThis.Object.freeze([
          eta$0$5,
          eta$0$7
        ])
      } else if (xys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xys.head;
        arg$Cons$1$ = xys.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          scrut = element0$ == w;
          if (scrut === true) {
            let fv_scrut, fv_tmp, fv_tmp1, fv_element0$, fv_element1$, fv_tmp2, fv_tmp3;
            fv_scrut = scc1[inList$accessorSymbol](element1$, eta$0$5);
            if (fv_scrut === true) {
              xys = arg$Cons$1$;
              continue loopLabel
            }
            {
              let tup2_1, inlinedVal;
              fv_tmp = NofibPrelude.Cons(element1$, eta$0$5);
              tup2_1 = NofibPrelude.Nil;
              fv_tmp1 = runtime.safeCall(eta$0$8(element1$));
              inlinedVal = fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_1, eta$0$8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
              if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
                fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
                fv_element1$ = runtime.Tuple.get(inlinedVal, 1);
                fv_tmp2 = NofibPrelude.Cons(element1$, fv_element1$);
                fv_tmp3 = scc1[append$accessorSymbol](fv_tmp2, eta$0$7);
                xys = arg$Cons$1$;
                eta$0$5 = fv_element0$;
                eta$0$7 = fv_tmp3;
                continue loopLabel
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          xys = arg$Cons$1$;
          continue loopLabel1;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$1 = function main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$(es) {
  return (x) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19) => {
      return main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$worker(es, x, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17, eta$0$18, eta$0$19)
    }
  }
};
(class scc {
  static {
    scc1 = this
  }
  static get [inList$accessorSymbol]() { return scc.#inList; }
  static get [append$accessorSymbol]() { return scc.#append; }
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
      tmp = scc.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let edges, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, Cons_tail, Cons_tail1, Cons_tail2, Cons_tail3, Cons_tail4, tup2_0, tup2_1, tup2_01, tup2_11, inlinedVal, element1$, fv_tmp, fv_element0$, fv_element1$, fv_tmp1, fv_tmp2, inlinedVal1;
    Cons_tail = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Nil$main_testScc_nofib_stronglyConnComp_dfs$xs_Nil();
    Cons_tail1 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons(7, Cons_tail);
    Cons_tail2 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons1(6, Cons_tail1);
    Cons_tail3 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons2(5, Cons_tail2);
    Cons_tail4 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons3(4, Cons_tail3);
    tmp = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      3,
      2
    ]);
    tmp2 = globalThis.Object.freeze([
      3,
      4
    ]);
    tmp3 = globalThis.Object.freeze([
      3,
      7
    ]);
    tmp4 = globalThis.Object.freeze([
      4,
      3
    ]);
    tmp5 = globalThis.Object.freeze([
      5,
      1
    ]);
    tmp6 = globalThis.Object.freeze([
      5,
      6
    ]);
    tmp7 = globalThis.Object.freeze([
      5,
      7
    ]);
    tmp8 = globalThis.Object.freeze([
      6,
      5
    ]);
    tmp9 = globalThis.Object.freeze([
      7,
      6
    ]);
    tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(tmp8, tmp10);
    tmp12 = NofibPrelude.Cons(tmp7, tmp11);
    tmp13 = NofibPrelude.Cons(tmp6, tmp12);
    tmp14 = NofibPrelude.Cons(tmp5, tmp13);
    tmp15 = NofibPrelude.Cons(tmp4, tmp14);
    tmp16 = NofibPrelude.Cons(tmp3, tmp15);
    tmp17 = NofibPrelude.Cons(tmp2, tmp16);
    tmp18 = NofibPrelude.Cons(tmp1, tmp17);
    edges = NofibPrelude.Cons(tmp, tmp18);
    tup2_0 = NofibPrelude.Nil;
    tup2_1 = NofibPrelude.Nil;
    tup2_01 = NofibPrelude.Nil;
    tup2_11 = NofibPrelude.Nil;
    if (tup2_01 instanceof NofibPrelude.Nil.class) {
      if (false === true) {
        let Cons_tail5, fv_r, inlinedVal2;
        Cons_tail5 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons4(3, Cons_tail4);
        fv_r = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$1(edges);
        inlinedVal2 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(2, Cons_tail5, undefined, tup2_01, tup2_11, fv_r, undefined, undefined, undefined, undefined, undefined, undefined);
        inlinedVal1 = inlinedVal2;
      } else {
        let tup2_12, eta$0$8, inlinedVal2;
        fv_tmp = NofibPrelude.Cons(1, tup2_01);
        tup2_12 = NofibPrelude.Nil;
        eta$0$8 = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$1(edges);
        inlinedVal2 = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$_main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$main_testScc_nofib_stronglyConnComp_lambda$_lambda_new_range$new_range$worker(edges, 1, undefined, undefined, undefined, undefined, undefined, fv_tmp, undefined, tup2_12, eta$0$8, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
        if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
          let Cons_tail5, fv_r, inlinedVal3;
          fv_element0$ = runtime.Tuple.get(inlinedVal2, 0);
          fv_element1$ = runtime.Tuple.get(inlinedVal2, 1);
          fv_tmp1 = NofibPrelude.Cons(1, fv_element1$);
          fv_tmp2 = scc1.#append(fv_tmp1, tup2_11);
          Cons_tail5 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons4(3, Cons_tail4);
          fv_r = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$1(edges);
          inlinedVal3 = main_main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$main_testScc_nofib_stronglyConnComp_dfs$xs_Cons$worker(2, Cons_tail5, undefined, fv_element0$, fv_tmp2, fv_r, undefined, undefined, undefined, undefined, undefined, undefined);
          inlinedVal1 = inlinedVal3;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
        let tup2_02, tup2_12, fv_xs, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_scrut, fv_scc, fv_r, fv_tmp3, fv_tmp4, fv_element0$1, fv_element1$1, fv_tmp5, fv_tmp6, inlinedVal2;
        element1$ = runtime.Tuple.get(inlinedVal1, 1);
        tup2_02 = tup2_0;
        tup2_12 = tup2_1;
        fv_xs = element1$;
        fv_scc = scc1;
        fv_r = main_main_testScc_nofib_stronglyConnComp_lambda$$lambda$$main_testScc_nofib_stronglyConnComp_lambda$$lambda$(edges);
        inlinedLbl: {
          loopLabel: while (true) {
            if (fv_xs instanceof NofibPrelude.Nil.class) {
              inlinedVal2 = main_main_testScc_nofib_stronglyConnComp_span_tree$vsns_tup2_main_testScc_nofib_stronglyConnComp_snd$x_tup2$main_testScc_nofib_stronglyConnComp_snd$x_tup2(tup2_12);
              break inlinedLbl
            } else if (fv_xs instanceof NofibPrelude.Cons.class) {
              fv_arg$Cons$0$ = fv_xs.head;
              fv_arg$Cons$1$ = fv_xs.tail;
              fv_scrut = fv_scc.#inList(fv_arg$Cons$0$, tup2_02);
              if (fv_scrut === true) {
                fv_xs = fv_arg$Cons$1$;
                continue loopLabel
              }
              {
                let tup2_13, inlinedVal3;
                fv_tmp3 = NofibPrelude.Cons(fv_arg$Cons$0$, tup2_02);
                tup2_13 = NofibPrelude.Nil;
                fv_tmp4 = runtime.safeCall(fv_r(fv_arg$Cons$0$));
                inlinedVal3 = fv_tmp4(undefined, undefined, undefined, undefined, undefined, fv_tmp3, undefined, tup2_13, fv_r, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
                if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
                  fv_element0$1 = runtime.Tuple.get(inlinedVal3, 0);
                  fv_element1$1 = runtime.Tuple.get(inlinedVal3, 1);
                  fv_tmp5 = NofibPrelude.Cons(fv_arg$Cons$0$, fv_element1$1);
                  fv_tmp6 = NofibPrelude.Cons(fv_tmp5, tup2_12);
                  tup2_02 = fv_element0$1;
                  tup2_12 = fv_tmp6;
                  fv_xs = fv_arg$Cons$1$;
                  continue loopLabel
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        inlinedVal = inlinedVal2();
        return runtime.safeCall(inlinedVal.toString())
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "scc"];
});
export default scc1;
