const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const listEq$accessorSymbol = globalThis.Symbol("listEq");
const append$accessorSymbol = globalThis.Symbol("append");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const mmapl$accessorSymbol = globalThis.Symbol("mmapl");
let label, labelOf, lscomp, cse1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, label$, lambda$5, lambda$6, labelOf$, lambda$7, main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map, main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph, main_testCse_nofib_lambda$_lambda_cse$cse, main_testCse_nofib_lambda$_lambda$lambda, main_testCse_nofib_lambda$$lambda$, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$, main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map1, main_testCse_nofib_enumFromTo$enumFromTo, main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Cons, main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Nil, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Nil, main_testCse_nofib_lambda$_lambda_map$xs_Nil, main_testCse_nofib_lambda$_lambda_map$xs_Cons, main_testCse_nofib_map$xs_Cons, main_testCse_nofib_map$xs_Nil, scanr$ls_Cons, scanr$ls_Nil, scanr$ls_Cons$worker, main_testCse_nofib_map$xs_Cons$worker, main_testCse_nofib_lambda$_lambda_map$xs_Cons$worker, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons$worker, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3$worker;
main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map(f, arg$Cons$1$);
    return main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph = function main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph(t) {
  let arg$Node$0$, arg$Node$1$, element1$, element0$, tmp, tmp1, tmp2, labelOf$here;
  if (t instanceof cse1.Node.class) {
    arg$Node$0$ = t.a;
    arg$Node$1$ = t.b;
    if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(arg$Node$0$, 0);
      element1$ = runtime.Tuple.get(arg$Node$0$, 1);
      labelOf$here = labelOf$(cse1);
      tmp = main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map1(labelOf$here, arg$Node$1$);
      tmp1 = main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3(element0$, element1$, tmp);
      tmp2 = main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map(main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph, arg$Node$1$);
      inlinedVal = tmp2(undefined, undefined, undefined, undefined, undefined);
      return NofibPrelude.Cons(tmp1, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse$cse = function main_testCse_nofib_lambda$_lambda_cse$cse(t) {
  let tmp, scrut, tmp1, sim$here, tmp2, inlinedVal, scrut1;
  tmp2 = label(cse1, t);
  scrut1 = runtime.safeCall(tmp2(0));
  if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
    runtime.Tuple.get(scrut1, 0);
    inlinedVal = runtime.Tuple.get(scrut1, 1);
    tmp = main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph(inlinedVal);
    tmp1 = globalThis.Object.freeze([
      lambda4,
      NofibPrelude.Nil
    ]);
    sim$here = main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$(cse1);
    scrut = cse1[foldr$accessorSymbol](sim$here, tmp1, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      runtime.Tuple.get(scrut, 0);
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda$lambda = function main_testCse_nofib_lambda$_lambda$lambda(cse2, i) {
  let Cons_head, Cons_head1, Cons_head2, Cons_head3, Cons_head4, Cons_head5, inlinedVal, tmp, inlinedVal1, tmp1, fv_scrut, fv_tmp;
  tmp1 = i / 6;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = 6 * inlinedVal1;
  inlinedVal = i - tmp;
  Cons_head = cse2.example5;
  Cons_head1 = cse2.example4;
  Cons_head2 = cse2.example3;
  Cons_head3 = cse2.example2;
  Cons_head4 = cse2.example1;
  Cons_head5 = cse2.example0;
  fv_scrut = inlinedVal <= 0;
  if (fv_scrut === true) {
    return NofibPrelude.Nil
  }
  {
    let fv_scrut1, fv_tmp1, inlinedVal2, fv_tmp2, inlinedVal3;
    fv_tmp = inlinedVal - 1;
    fv_scrut1 = fv_tmp <= 0;
    if (fv_scrut1 === true) {
      inlinedVal2 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
    } else {
      let fv_scrut2, fv_tmp3, inlinedVal4;
      fv_tmp1 = fv_tmp - 1;
      fv_scrut2 = fv_tmp1 <= 0;
      if (fv_scrut2 === true) {
        inlinedVal4 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
      } else {
        let fv_scrut3, fv_tmp4, inlinedVal5;
        fv_tmp3 = fv_tmp1 - 1;
        fv_scrut3 = fv_tmp3 <= 0;
        if (fv_scrut3 === true) {
          inlinedVal5 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
        } else {
          let fv_scrut4, fv_tmp5, inlinedVal6;
          fv_tmp4 = fv_tmp3 - 1;
          fv_scrut4 = fv_tmp4 <= 0;
          if (fv_scrut4 === true) {
            inlinedVal6 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
          } else {
            let fv_scrut5, inlinedVal7;
            fv_tmp5 = fv_tmp4 - 1;
            fv_scrut5 = fv_tmp5 <= 0;
            if (fv_scrut5 === true) {
              inlinedVal7 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
            } else {
              let inlinedVal8;
              inlinedVal8 = main_testCse_nofib_lambda$_lambda_map$xs_Nil();
              inlinedVal7 = main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head, inlinedVal8);
            }
            inlinedVal6 = main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head1, inlinedVal7);
          }
          inlinedVal5 = main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head2, inlinedVal6);
        }
        inlinedVal4 = main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head3, inlinedVal5);
      }
      inlinedVal2 = main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head4, inlinedVal4);
    }
    fv_tmp2 = runtime.safeCall(main_testCse_nofib_lambda$_lambda_cse$cse(Cons_head5));
    inlinedVal3 = inlinedVal2(undefined, undefined, undefined, undefined, undefined, main_testCse_nofib_lambda$_lambda_cse$cse, undefined);
    return NofibPrelude.Cons(fv_tmp2, inlinedVal3);
  }
};
main_testCse_nofib_lambda$$lambda$ = function main_testCse_nofib_lambda$$lambda$(cse2) {
  return (i) => {
    return main_testCse_nofib_lambda$_lambda$lambda(cse2, i)
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$ = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$(cse2) {
  return (n_s_cs, r_lg) => {
    return n_s_cs(undefined, undefined, undefined, undefined, undefined, undefined, r_lg, undefined, undefined, undefined, undefined, undefined, cse2, undefined, undefined, undefined, undefined, undefined)
  }
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map1 = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map(f, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    tmp1 = main_testCse_nofib_lambda$_lambda_cse_ltGraph_map$map1(f, arg$Cons$1$);
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_enumFromTo$enumFromTo = function main_testCse_nofib_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testCse_nofib_enumFromTo$enumFromTo(tmp, b);
    return main_testCse_nofib_map$xs_Cons(a, tmp1)
  }
  return main_testCse_nofib_map$xs_Nil();
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Cons = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    let inlinedVal;
    inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined);
    return cse1[append$accessorSymbol](Cons_head, inlinedVal)
  }
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Nil = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_concat$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp) => {
    return NofibPrelude.Nil
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3 = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_cs, fv_s, fv_n, fv_r_lg, fv_element0$1, fv_element1$1, fv_lg, fv_r, fv_rcs, fv_cse, fv_ms, fv_scrut, fv_tmp, fv_tmp1, fv_lambda$here) => {
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_cs, fv_s, fv_n, fv_r_lg, fv_element0$1, fv_element1$1, fv_lg, fv_r, fv_rcs, fv_cse, fv_ms, fv_scrut, fv_tmp, fv_tmp1, fv_lambda$here)
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3$worker = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$n_s_cs_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_cs, fv_s, fv_n, fv_r_lg, fv_element0$1, fv_element1$1, fv_lg, fv_r, fv_rcs, fv_cse, fv_ms, fv_scrut, fv_tmp, fv_tmp1, fv_lambda$here) {
  if (runtime.Tuple.isArrayLike(fv_r_lg) && fv_r_lg.length === 2) {
    let inlinedVal;
    fv_element0$1 = runtime.Tuple.get(fv_r_lg, 0);
    fv_element1$1 = runtime.Tuple.get(fv_r_lg, 1);
    inlinedVal = tup3_2(undefined, undefined, undefined, undefined, undefined, fv_element0$1, undefined);
    fv_ms = lscomp(fv_cse, tup3_1, inlinedVal, fv_element1$1);
    if (fv_ms instanceof NofibPrelude.Nil.class) {
      fv_tmp = globalThis.Object.freeze([
        tup3_0,
        tup3_1,
        inlinedVal
      ]);
      fv_tmp1 = NofibPrelude.Cons(fv_tmp, fv_element1$1);
      return globalThis.Object.freeze([
        fv_element0$1,
        fv_tmp1
      ])
    }
    fv_lambda$here = lambda$7(fv_cse, tup3_0, fv_element0$1, fv_ms);
    return globalThis.Object.freeze([
      fv_lambda$here,
      fv_element1$1
    ]);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons$worker = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Nil = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCse_nofib_lambda$_lambda_map$xs_Nil = function main_testCse_nofib_lambda$_lambda_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testCse_nofib_lambda$_lambda_map$xs_Cons = function main_testCse_nofib_lambda$_lambda_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCse_nofib_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCse_nofib_lambda$_lambda_map$xs_Cons$worker = function main_testCse_nofib_lambda$_lambda_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCse_nofib_map$xs_Cons = function main_testCse_nofib_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testCse_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testCse_nofib_map$xs_Cons$worker = function main_testCse_nofib_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testCse_nofib_map$xs_Nil = function main_testCse_nofib_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
scanr$ls_Cons = function scanr$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_f, fv_q, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_t, fv_q1, fv_tmp, fv_tmp1) => {
    return scanr$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_f, fv_q, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_t, fv_q1, fv_tmp, fv_tmp1)
  }
};
scanr$ls_Cons$worker = function scanr$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_f, fv_q, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_t, fv_q1, fv_tmp, fv_tmp1) {
  let inlinedVal;
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, fv_q, undefined, undefined, undefined, undefined, undefined, undefined);
  if (inlinedVal instanceof NofibPrelude.Cons.class) {
    fv_arg$Cons$0$1 = inlinedVal.head;
    fv_arg$Cons$1$1 = inlinedVal.tail;
    fv_tmp = runtime.safeCall(fv_f(Cons_head, fv_arg$Cons$0$1));
    fv_tmp1 = NofibPrelude.Cons(fv_arg$Cons$0$1, fv_arg$Cons$1$1);
    return NofibPrelude.Cons(fv_tmp, fv_tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
scanr$ls_Nil = function scanr$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_scrut, fv_f, fv_q, fv_arg$Cons$0$1, fv_arg$Cons$1$1, fv_t, fv_q1, fv_tmp, fv_tmp1) => {
    return NofibPrelude.Cons(fv_q, NofibPrelude.Nil)
  }
};
lambda$7 = (undefined, function (cse2, n, r, ms) {
  return (x) => {
    return lambda3(cse2, n, r, ms, x)
  }
});
lscomp = function lscomp(cse2, s, rcs, ls) {
  loopLabel: while (true) {
    let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element2$, element1$, element0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 3) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        element2$ = runtime.Tuple.get(arg$Cons$0$, 2);
        scrut = s === element1$;
        if (scrut === true) {
          scrut1 = cse2[listEq$accessorSymbol](element2$, rcs);
          if (scrut1 === true) {
            tmp = lscomp(cse2, s, rcs, arg$Cons$1$);
            return NofibPrelude.Cons(element0$, tmp)
          }
          ls = arg$Cons$1$;
          continue loopLabel;
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda3 = (undefined, function (cse2, n, r, ms, x) {
  let scrut, arg$Cons$0$;
  if (ms instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = ms.head;
    scrut = n === x;
    if (scrut === true) {
      return arg$Cons$0$
    }
    return runtime.safeCall(r(x));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda4 = (undefined, function (x) {
  return x
});
labelOf$ = function labelOf$(cse2) {
  return (t) => {
    return labelOf(cse2, t)
  }
};
labelOf = function labelOf(cse2, t) {
  let arg$Node$0$, element0$;
  if (t instanceof cse2.Node.class) {
    arg$Node$0$ = t.a;
    if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
      element0$ = runtime.Tuple.get(arg$Node$0$, 0);
      runtime.Tuple.get(arg$Node$0$, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$6 = (undefined, function (cse2, x, n) {
  return (ts) => {
    return lambda1(cse2, x, n, ts)
  }
});
lambda1 = (undefined, function (cse2, x, n, ts) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    n,
    x
  ]);
  tmp1 = cse2.Node(tmp, ts);
  return lambda$(tmp1)
});
lambda$5 = (undefined, function (cse2, x, xs) {
  return (n) => {
    return lambda2(cse2, x, xs, n)
  }
});
lambda2 = (undefined, function (cse2, x, xs, n) {
  let tmp, label$here, f;
  label$here = label$(cse2);
  tmp = cse2[mmapl$accessorSymbol](label$here, xs);
  f = lambda$6(cse2, x, n);
  return lambda$1(tmp, f)
});
label$ = function label$(cse2) {
  return (t) => {
    return label(cse2, t)
  }
};
label = function label(cse2, t) {
  let arg$Node$0$, arg$Node$1$;
  if (t instanceof cse2.Node.class) {
    let m, f;
    arg$Node$0$ = t.a;
    arg$Node$1$ = t.b;
    m = cse2.incr;
    f = lambda$5(cse2, arg$Node$0$, arg$Node$1$);
    return lambda$1(m, f)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$4 = (undefined, function (f) {
  return (s) => {
    let tmp;
    tmp = runtime.safeCall(f(s));
    return globalThis.Object.freeze([
      tmp,
      s
    ])
  }
});
lambda$3 = (undefined, function (cse2, b) {
  return (bs) => {
    let tmp;
    tmp = NofibPrelude.Cons(b, bs);
    return lambda$(tmp)
  }
});
lambda$2 = (undefined, function (cse2, f, as_) {
  return (b) => {
    return lambda(cse2, f, as_, b)
  }
});
lambda = (undefined, function (cse2, f, as_, b) {
  let tmp, f1;
  tmp = cse2[mmapl$accessorSymbol](f, as_);
  f1 = lambda$3(cse2, b);
  return lambda$1(tmp, f1)
});
lambda$1 = (undefined, function (m, f) {
  return (s) => {
    return lambda6(m, f, s)
  }
});
lambda6 = (undefined, function (m, f, s) {
  let scrut, element1$, element0$, callPrefix;
  scrut = runtime.safeCall(m(s));
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    element0$ = runtime.Tuple.get(scrut, 0);
    element1$ = runtime.Tuple.get(scrut, 1);
    callPrefix = runtime.safeCall(f(element1$));
    return runtime.safeCall(callPrefix(element0$))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$ = (undefined, function (a) {
  return (s) => {
    return globalThis.Object.freeze([
      s,
      a
    ])
  }
});
lambda5 = (undefined, function (x) {
  return x + 1
});
(class cse {
  static {
    cse1 = this
  }
  static get [listEq$accessorSymbol]() { return cse.#listEq; }
  static get [append$accessorSymbol]() { return cse.#append; }
  static get [foldr$accessorSymbol]() { return cse.#foldr; }
  static get [mmapl$accessorSymbol]() { return cse.#mmapl; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, Cons_head, Cons_head1, Cons_head2, Cons_head3, Cons_head4, Cons_tail, Cons_head5, Cons_tail1, Cons_head6, Cons_tail2, Cons_head7, f, q, f1, q1, fv_tmp, inlinedVal, fv_tmp1, inlinedVal1, fv_tmp2, inlinedVal2, fv_tmp3, inlinedVal3, inlinedVal4, Cons_tail3, inlinedVal5;
    tmp = cse.#update(lambda5);
    cse.incr = tmp;
    cse.Node = function Node(a, b) {
      return globalThis.Object.freeze(new Node.class(a, b));
    };
    (class Node {
      static {
        cse.Node.class = this
      }
      constructor(a, b) {
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["a", "b"]];
    });
    tmp1 = cse.Node("0", NofibPrelude.Nil);
    cse.zerO = tmp1;
    tmp2 = cse.Node("a", NofibPrelude.Nil);
    cse.a = tmp2;
    tmp3 = cse.Node("b", NofibPrelude.Nil);
    cse.b = tmp3;
    tmp4 = cse.Node("c", NofibPrelude.Nil);
    cse.c = tmp4;
    tmp5 = cse.Node("d", NofibPrelude.Nil);
    cse.d = tmp5;
    cse.example0 = cse.a;
    tmp6 = cse.#plus_(cse.a, cse.a);
    cse.example1 = tmp6;
    tmp7 = cse.#mult_(cse.a, cse.b);
    tmp8 = cse.#mult_(cse.a, cse.b);
    tmp9 = cse.#plus_(tmp7, tmp8);
    cse.example2 = tmp9;
    tmp10 = cse.#plus_(cse.a, cse.b);
    tmp11 = cse.#mult_(tmp10, cse.c);
    tmp12 = cse.#plus_(cse.a, cse.b);
    tmp13 = cse.#plus_(tmp11, tmp12);
    cse.example3 = tmp13;
    Cons_head = cse.d;
    Cons_head1 = cse.c;
    Cons_head2 = cse.b;
    Cons_head3 = cse.a;
    f = cse.#plus_;
    q = cse.zerO;
    fv_tmp = runtime.safeCall(f(q, Cons_head3));
    fv_tmp1 = runtime.safeCall(f(fv_tmp, Cons_head2));
    fv_tmp2 = runtime.safeCall(f(fv_tmp1, Cons_head1));
    fv_tmp3 = runtime.safeCall(f(fv_tmp2, Cons_head));
    inlinedVal4 = NofibPrelude.Cons(fv_tmp3, NofibPrelude.Nil);
    inlinedVal3 = NofibPrelude.Cons(fv_tmp2, inlinedVal4);
    inlinedVal2 = NofibPrelude.Cons(fv_tmp1, inlinedVal3);
    inlinedVal1 = NofibPrelude.Cons(fv_tmp, inlinedVal2);
    inlinedVal = NofibPrelude.Cons(q, inlinedVal1);
    tmp14 = cse.#prod(inlinedVal);
    cse.example4 = tmp14;
    Cons_head4 = cse.d;
    Cons_tail = scanr$ls_Nil();
    Cons_head5 = cse.c;
    Cons_tail1 = scanr$ls_Cons(Cons_head4, Cons_tail);
    Cons_head6 = cse.b;
    Cons_tail2 = scanr$ls_Cons(Cons_head5, Cons_tail1);
    Cons_head7 = cse.a;
    f1 = cse.#plus_;
    q1 = cse.zerO;
    Cons_tail3 = scanr$ls_Cons(Cons_head6, Cons_tail2);
    inlinedVal5 = scanr$ls_Cons$worker(Cons_head7, Cons_tail3, undefined, undefined, undefined, undefined, undefined, f1, q1, undefined, undefined, undefined, undefined, undefined, undefined);
    tmp15 = cse.#prod(inlinedVal5);
    cse.example5 = tmp15;
  }
  static #listEq(xs, ys) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return true
        }
        return false;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = arg$Cons$0$ == arg$Cons$0$1;
          if (scrut === true) {
            xs = arg$Cons$1$;
            ys = arg$Cons$1$1;
            continue loopLabel
          }
          return false;
        }
        return false;
      }
      return false;
    }
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = cse.#append(arg$Cons$1$, ys);
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
      tmp = cse.#foldr(f, z, arg$Cons$1$);
      return runtime.safeCall(f(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #retURN(a) {
    return lambda$(a)
  }
  static #bind(m, f) {
    return lambda$1(m, f)
  }
  static #mmapl(f, aas) {
    let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here;
    if (aas instanceof NofibPrelude.Nil.class) {
      return cse.#retURN(NofibPrelude.Nil)
    } else if (aas instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = aas.head;
      arg$Cons$1$ = aas.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      lambda$here = lambda$2(cse, f, arg$Cons$1$);
      return cse.#bind(tmp, lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update(f) {
    return lambda$4(f)
  }
  static #plus_(x, y) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x, tmp);
    return cse.Node("+", tmp1)
  }
  static #mult_(x, y) {
    let tmp, tmp1;
    tmp = NofibPrelude.Cons(y, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(x, tmp);
    return cse.Node("*", tmp1)
  }
  static #prod(xs) {
    return cse.Node("X", xs)
  }
  static main() {
    let tmp, f, inlinedVal;
    tmp = main_testCse_nofib_enumFromTo$enumFromTo(1, 6);
    f = main_testCse_nofib_lambda$$lambda$(cse1);
    inlinedVal = tmp(undefined, undefined, undefined, undefined, undefined, f, undefined);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cse"];
});
export default cse1;
