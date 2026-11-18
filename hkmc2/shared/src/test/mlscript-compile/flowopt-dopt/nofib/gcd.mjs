const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let gcd1, main_testGcd_nofib_test_enumFromTo$enumFromTo, main_testGcd_nofib_test_lambda$$lambda$, main_testGcd_nofib_test_lambda$lambda, main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2, main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker, main_testGcd_nofib_test_lscomp1$lscomp2$worker, main_testGcd_nofib_test_enumFromTo$enumFromTo$worker;
main_testGcd_nofib_test_enumFromTo$enumFromTo = function main_testGcd_nofib_test_enumFromTo$enumFromTo(a, b) {
  return (eta$0$4) => {
    return (eta$1$4, eta$1$5) => {
      return (eta$2$4, eta$2$5) => {
        return main_testGcd_nofib_test_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$1$4, eta$1$5, eta$2$4, eta$2$5)
      }
    }
  }
};
main_testGcd_nofib_test_enumFromTo$enumFromTo$worker = function main_testGcd_nofib_test_enumFromTo$enumFromTo$worker(a, b, eta$0$4, eta$1$4, eta$1$5, eta$2$4, eta$2$5) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let t1;
    tmp = a + 1;
    t1 = main_testGcd_nofib_test_enumFromTo$enumFromTo(tmp, b);
    return main_testGcd_nofib_test_lscomp1$lscomp2$worker(eta$0$4, a, t1, eta$0$4, eta$1$4, eta$1$5, eta$2$4, eta$2$5)
  }
  return NofibPrelude.Nil;
};
main_testGcd_nofib_test_lscomp1$lscomp2$worker = function main_testGcd_nofib_test_lscomp1$lscomp2$worker(ms, h1, t1, p2, eta$0$4, eta$0$5, eta$1$4, eta$1$5) {
  let arg$Cons$0$, arg$Cons$1$;
  if (p2 instanceof NofibPrelude.Nil.class) {
    return t1(ms)(eta$0$4, eta$0$5)(eta$1$4, eta$1$5)
  } else if (p2 instanceof NofibPrelude.Cons.class) {
    let Cons_head, fv_tmp, fv_tmp1, inlinedVal;
    arg$Cons$0$ = p2.head;
    arg$Cons$1$ = p2.tail;
    Cons_head = main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2(h1, arg$Cons$0$);
    fv_tmp = runtime.safeCall(eta$0$5(Cons_head));
    fv_tmp1 = runtime.safeCall(eta$1$5(fv_tmp));
    inlinedVal = main_testGcd_nofib_test_lscomp1$lscomp2$worker(ms, h1, t1, arg$Cons$1$, undefined, eta$0$5, undefined, eta$1$5);
    return NofibPrelude.Cons(fv_tmp1, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testGcd_nofib_test_lambda$$lambda$ = function main_testGcd_nofib_test_lambda$$lambda$() {
  return (caseScrut) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) => {
      return caseScrut()(eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12)
    }
  }
};
main_testGcd_nofib_test_lambda$lambda = function main_testGcd_nofib_test_lambda$lambda(caseScrut) {
  return caseScrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2 = function main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2(tup2_0, tup2_1) {
  return () => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) => {
      return main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12)
    }
  }
};
main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker = function main_testGcd_nofib_test_lambda$_lambda$caseScrut_tup2$worker(tup2_0, tup2_1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut;
  scrut = tup2_0 == 0;
  if (scrut === true) {
    let fv_tmp, fv_tmp1;
    fv_tmp = tup2_1 + 0;
    fv_tmp1 = fv_tmp + 1;
    return runtime.safeCall(globalThis.Math.abs(fv_tmp1))
  }
  {
    let fv_scrut;
    fv_scrut = tup2_1 == 0;
    if (fv_scrut === true) {
      let fv_tmp, fv_tmp1;
      fv_tmp = tup2_0 + 1;
      fv_tmp1 = fv_tmp + 0;
      return runtime.safeCall(globalThis.Math.abs(fv_tmp1))
    }
    {
      let inlinedVal, inlinedVal1, tmp, tmp1, inlinedVal2, tmp2, tup2_01, tup2_11, fv_v1, fv_v2, fv_v3, fv_tmp, fv_tmp1, fv_u1, fv_tmp2, fv_tmp3, fv_u2, inlinedVal3;
      tmp1 = tup2_0 / tup2_1;
      inlinedVal = runtime.safeCall(globalThis.Math.trunc(tmp1));
      tmp2 = tup2_0 / tup2_1;
      inlinedVal2 = runtime.safeCall(globalThis.Math.trunc(tmp2));
      tmp = tup2_1 * inlinedVal2;
      inlinedVal1 = tup2_0 - tmp;
      tup2_01 = inlinedVal;
      tup2_11 = inlinedVal1;
      fv_v1 = 0;
      fv_v2 = 1;
      fv_v3 = tup2_1;
      fv_u1 = 1;
      fv_u2 = 0;
      inlinedLbl: {
        loopLabel: while (true) {
          let fv_scrut1;
          fv_tmp = tup2_01 * fv_v1;
          fv_tmp1 = fv_u1 - fv_tmp;
          fv_tmp2 = tup2_01 * fv_v2;
          fv_tmp3 = fv_u2 - fv_tmp2;
          fv_scrut1 = tup2_11 == 0;
          if (fv_scrut1 === true) {
            let fv_tmp4, fv_tmp5;
            fv_tmp4 = fv_v3 + fv_v1;
            fv_tmp5 = fv_tmp4 + fv_v2;
            inlinedVal3 = runtime.safeCall(globalThis.Math.abs(fv_tmp5));
            break inlinedLbl
          }
          {
            let inlinedVal4, inlinedVal5, tmp3, tmp4, inlinedVal6, tmp5, fv_v2_tmp, fv_v1_tmp, tup2_1_tmp;
            tmp4 = fv_v3 / tup2_11;
            inlinedVal4 = runtime.safeCall(globalThis.Math.trunc(tmp4));
            tmp5 = fv_v3 / tup2_11;
            inlinedVal6 = runtime.safeCall(globalThis.Math.trunc(tmp5));
            tmp3 = tup2_11 * inlinedVal6;
            inlinedVal5 = fv_v3 - tmp3;
            fv_v2_tmp = fv_v2;
            fv_v1_tmp = fv_v1;
            tup2_1_tmp = tup2_11;
            tup2_01 = inlinedVal4;
            tup2_11 = inlinedVal5;
            fv_v1 = fv_tmp1;
            fv_v2 = fv_tmp3;
            fv_v3 = tup2_1_tmp;
            fv_u1 = fv_v1_tmp;
            fv_u2 = fv_v2_tmp;
            continue loopLabel;
          }
        }
      }
      return inlinedVal3;
    }
  }
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
    inlinedVal = ns(ms);
    f = main_testGcd_nofib_test_lambda$$lambda$();
    inlinedVal1 = inlinedVal(undefined, f);
    inlinedVal2 = inlinedVal1(undefined, main_testGcd_nofib_test_lambda$lambda);
    return gcd1.#max_(inlinedVal2)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "gcd"];
});
export default gcd1;
