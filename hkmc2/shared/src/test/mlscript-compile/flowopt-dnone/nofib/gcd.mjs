const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let gcd1, main_testGcd_nofib_test_enumFromTo$enumFromTo, main_testGcd_nofib_test_lscomp1$lscomp2, main_testGcd_nofib_test_lambda$_lambda_gcdE_g_quotRem$quotRem, main_testGcd_nofib_test_lambda$$lambda$, main_testGcd_nofib_test_lambda$lambda, main_testGcd_nofib_test_lscomp1$p1_Nil, main_testGcd_nofib_test_lscomp1$p1_Cons, main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2, main_testGcd_nofib_test_map$xs_Nil, main_testGcd_nofib_test_map$xs_Cons, main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2, main_testGcd_nofib_test_map$xs_Nil1, main_testGcd_nofib_test_map$xs_Cons1, main_testGcd_nofib_test_lambda$caseScrut_tup3, main_testGcd_nofib_test_lambda$element2$_tup3, main_testGcd_nofib_test_lambda$element2$_tup3$worker, main_testGcd_nofib_test_map$xs_Cons$worker, main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker, main_testGcd_nofib_test_map$xs_Cons$worker1, main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2$worker;
main_testGcd_nofib_test_enumFromTo$enumFromTo = function main_testGcd_nofib_test_enumFromTo$enumFromTo(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = main_testGcd_nofib_test_enumFromTo$enumFromTo(tmp, b);
    return main_testGcd_nofib_test_lscomp1$p1_Cons(a, tmp1)
  }
  return main_testGcd_nofib_test_lscomp1$p1_Nil();
};
main_testGcd_nofib_test_lscomp1$lscomp2 = function main_testGcd_nofib_test_lscomp1$lscomp2(ms, h1, t1, p2) {
  let arg$Cons$0$, arg$Cons$1$, tmp;
  if (p2 instanceof NofibPrelude.Nil.class) {
    return t1(undefined, undefined, undefined, undefined, ms)
  } else if (p2 instanceof NofibPrelude.Cons.class) {
    let Cons_head;
    arg$Cons$0$ = p2.head;
    arg$Cons$1$ = p2.tail;
    tmp = main_testGcd_nofib_test_lscomp1$lscomp2(ms, h1, t1, arg$Cons$1$);
    Cons_head = main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2(h1, arg$Cons$0$);
    return main_testGcd_nofib_test_map$xs_Cons(Cons_head, tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testGcd_nofib_test_lambda$_lambda_gcdE_g_quotRem$quotRem = function main_testGcd_nofib_test_lambda$_lambda_gcdE_g_quotRem$quotRem(a, b) {
  let inlinedVal, inlinedVal1, tmp, tmp1, inlinedVal2, tmp2;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.trunc(tmp1));
  tmp2 = a / b;
  inlinedVal2 = runtime.safeCall(globalThis.Math.trunc(tmp2));
  tmp = b * inlinedVal2;
  inlinedVal1 = a - tmp;
  return main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2(inlinedVal, inlinedVal1)
};
main_testGcd_nofib_test_lambda$$lambda$ = function main_testGcd_nofib_test_lambda$$lambda$(gcd2) {
  return (caseScrut) => {
    return caseScrut(undefined, undefined, undefined, undefined, undefined, gcd2)
  }
};
main_testGcd_nofib_test_lambda$lambda = function main_testGcd_nofib_test_lambda$lambda(caseScrut) {
  return caseScrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_testGcd_nofib_test_lscomp1$p1_Nil = function main_testGcd_nofib_test_lscomp1$p1_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_h1, fv_ms) => {
    return main_testGcd_nofib_test_map$xs_Nil()
  }
};
main_testGcd_nofib_test_lscomp1$p1_Cons = function main_testGcd_nofib_test_lscomp1$p1_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_h1, fv_ms) => {
    return main_testGcd_nofib_test_lscomp1$lscomp2(fv_ms, Cons_head, Cons_tail, fv_ms)
  }
};
main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2 = function main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_r, fv_q, fv_tmp, fv_v1, fv_v2, fv_v3, fv_tmp1, fv_tmp2, fv_u1, fv_tmp3, fv_tmp4, fv_u2, fv_tmp5) => {
    return main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_r, fv_q, fv_tmp, fv_v1, fv_v2, fv_v3, fv_tmp1, fv_tmp2, fv_u1, fv_tmp3, fv_tmp4, fv_u2, fv_tmp5)
  }
};
main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2$worker = function main_testGcd_nofib_test_lambda$_lambda_gcdE_g$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_r, fv_q, fv_tmp, fv_v1, fv_v2, fv_v3, fv_tmp1, fv_tmp2, fv_u1, fv_tmp3, fv_tmp4, fv_u2, fv_tmp5) {
  let fv_scrut, fv_scrut1;
  fv_tmp1 = tup2_0 * fv_v1;
  fv_tmp2 = fv_u1 - fv_tmp1;
  fv_tmp3 = tup2_0 * fv_v2;
  fv_tmp4 = fv_u2 - fv_tmp3;
  fv_scrut = tup2_1 == 0;
  if (fv_scrut === true) {
    return main_testGcd_nofib_test_lambda$element2$_tup3(fv_v3, fv_v1, fv_v2)
  }
  fv_scrut1 = main_testGcd_nofib_test_lambda$_lambda_gcdE_g_quotRem$quotRem(fv_v3, tup2_1);
  return fv_scrut1(undefined, undefined, undefined, undefined, undefined, fv_tmp2, fv_tmp4, tup2_1, undefined, undefined, fv_v1, undefined, undefined, fv_v2, undefined);
};
main_testGcd_nofib_test_map$xs_Nil = function main_testGcd_nofib_test_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testGcd_nofib_test_map$xs_Nil1()
  }
};
main_testGcd_nofib_test_map$xs_Cons = function main_testGcd_nofib_test_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testGcd_nofib_test_map$xs_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testGcd_nofib_test_map$xs_Cons$worker1 = function main_testGcd_nofib_test_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testGcd_nofib_test_map$xs_Cons1(fv_tmp, inlinedVal)
};
main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2 = function main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_y, fv_x, fv_tmp, fv_gcd) => {
    return main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_y, fv_x, fv_tmp, fv_gcd)
  }
};
main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker = function main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_y, fv_x, fv_tmp, fv_gcd) {
  let inlinedVal, scrut;
  scrut = tup2_0 == 0;
  if (scrut === true) {
    inlinedVal = main_testGcd_nofib_test_lambda$element2$_tup3(tup2_1, 0, 1);
    return main_testGcd_nofib_test_lambda$caseScrut_tup3(tup2_0, tup2_1, inlinedVal)
  }
  {
    let fv_scrut, fv_scrut1, inlinedVal1;
    fv_scrut = tup2_1 == 0;
    if (fv_scrut === true) {
      inlinedVal1 = main_testGcd_nofib_test_lambda$element2$_tup3(tup2_0, 1, 0);
      return main_testGcd_nofib_test_lambda$caseScrut_tup3(tup2_0, tup2_1, inlinedVal1)
    }
    fv_scrut1 = main_testGcd_nofib_test_lambda$_lambda_gcdE_g_quotRem$quotRem(tup2_0, tup2_1);
    inlinedVal1 = fv_scrut1(undefined, undefined, undefined, undefined, undefined, 0, 1, tup2_1, undefined, undefined, 1, undefined, undefined, 0, undefined);
    return main_testGcd_nofib_test_lambda$caseScrut_tup3(tup2_0, tup2_1, inlinedVal1);
  }
};
main_testGcd_nofib_test_map$xs_Nil1 = function main_testGcd_nofib_test_map$xs_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return NofibPrelude.Nil
  }
};
main_testGcd_nofib_test_map$xs_Cons1 = function main_testGcd_nofib_test_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testGcd_nofib_test_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testGcd_nofib_test_map$xs_Cons$worker = function main_testGcd_nofib_test_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testGcd_nofib_test_lambda$caseScrut_tup3 = function main_testGcd_nofib_test_lambda$caseScrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_element0$1, fv_element1$1, fv_element2$1, fv_v, fv_u, fv_gg, fv_d2, fv_d1, fv_tmp, fv_tmp1) => {
    return tup3_2(fv_element0$1, fv_element1$1, fv_element2$1, fv_v, fv_u, fv_gg, fv_d2, tup3_1, fv_d1, tup3_0, fv_tmp, fv_tmp1)
  }
};
main_testGcd_nofib_test_lambda$element2$_tup3 = function main_testGcd_nofib_test_lambda$element2$_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_v, fv_u, fv_gg, fv_d2, fv_element1$1, fv_d1, fv_element0$1, fv_tmp, fv_tmp1) => {
    return main_testGcd_nofib_test_lambda$element2$_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_v, fv_u, fv_gg, fv_d2, fv_element1$1, fv_d1, fv_element0$1, fv_tmp, fv_tmp1)
  }
};
main_testGcd_nofib_test_lambda$element2$_tup3$worker = function main_testGcd_nofib_test_lambda$element2$_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_v, fv_u, fv_gg, fv_d2, fv_element1$1, fv_d1, fv_element0$1, fv_tmp, fv_tmp1) {
  fv_tmp = tup3_0 + tup3_1;
  fv_tmp1 = fv_tmp + tup3_2;
  return runtime.safeCall(globalThis.Math.abs(fv_tmp1))
};
(class gcd {
  static {
    gcd1 = this
  }
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = gcd.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #max_(ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
      if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          return arg$Cons$0$
        } else if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = arg$Cons$1$.head;
          arg$Cons$1$1 = arg$Cons$1$.tail;
          scrut = arg$Cons$0$ < arg$Cons$0$1;
          if (scrut === true) {
            tmp = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
            ls = tmp;
            continue loopLabel
          }
          tmp1 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$1);
          ls = tmp1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static main() {
    let ns, ms, inlinedVal, f, inlinedVal1, inlinedVal2;
    ns = main_testGcd_nofib_test_enumFromTo$enumFromTo(5000, 5040);
    ms = gcd1.#enumFromTo(10000, 10040);
    inlinedVal = ns(undefined, undefined, undefined, undefined, ms);
    f = main_testGcd_nofib_test_lambda$$lambda$(gcd1);
    inlinedVal1 = inlinedVal(undefined, undefined, undefined, undefined, undefined, f, undefined);
    inlinedVal2 = inlinedVal1(undefined, undefined, undefined, undefined, undefined, main_testGcd_nofib_test_lambda$lambda, undefined);
    return gcd1.#max_(inlinedVal2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "gcd"];
});
export default gcd1;
