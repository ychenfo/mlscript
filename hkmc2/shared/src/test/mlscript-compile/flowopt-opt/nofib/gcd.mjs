const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const g$accessorSymbol = globalThis.Symbol("g");
let lscomp2, lscomp1, gcd1, lambda, lambda1, lambda$, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$;
          if (param1 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param1.head;
            arg$Cons$1$ = param1.tail;
            param1 = arg$Cons$0$;
            param2 = arg$Cons$1$;
            param3 = param0;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param3 instanceof NofibPrelude.Nil.class) {
            param1 = param2;
            id = 0;
            continue loopLabel
          } else if (param3 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param3.head;
            arg$Cons$1$ = param3.tail;
            tmp = globalThis.Object.freeze([
              param1,
              arg$Cons$0$
            ]);
            tmp1 = lscomp1_lscomp2(1, param0, param1, param2, arg$Cons$1$);
            return NofibPrelude.Cons(tmp, tmp1)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lscomp2 = function lscomp2(ms, h1, t1, p2) {
  return lscomp1_lscomp2(1, ms, h1, t1, p2)
};
lambda$ = (undefined, function (gcd2) {
  return (caseScrut) => {
    return lambda(gcd2, caseScrut)
  }
});
lscomp1 = function lscomp1(ms, p1) {
  return lscomp1_lscomp2(0, ms, p1, undefined, undefined)
};
lambda = (undefined, function (gcd2, caseScrut) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    let inlinedVal, scrut, tmp, tmp1;
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    scrut = element0$ == 0;
    if (scrut === true) {
      inlinedVal = globalThis.Object.freeze([
        element1$,
        0,
        1
      ]);
      return globalThis.Object.freeze([
        element0$,
        element1$,
        inlinedVal
      ])
    }
    tmp = globalThis.Object.freeze([
      1,
      0,
      element0$
    ]);
    tmp1 = globalThis.Object.freeze([
      0,
      1,
      element1$
    ]);
    inlinedVal = gcd2[g$accessorSymbol](tmp, tmp1);
    return globalThis.Object.freeze([
      element0$,
      element1$,
      inlinedVal
    ]);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda1 = (undefined, function (caseScrut) {
  let element2$, element2$1, element1$, element0$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 3) {
    runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    element2$ = runtime.Tuple.get(caseScrut, 2);
    if (runtime.Tuple.isArrayLike(element2$) && element2$.length === 3) {
      element0$ = runtime.Tuple.get(element2$, 0);
      element1$ = runtime.Tuple.get(element2$, 1);
      element2$1 = runtime.Tuple.get(element2$, 2);
      tmp = element0$ + element1$;
      tmp1 = tmp + element2$1;
      return runtime.safeCall(globalThis.Math.abs(tmp1))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class gcd {
  static {
    gcd1 = this
  }
  static get [g$accessorSymbol]() { return gcd.#g; }
  static #g(u1u2u3, v1v2v3) {
    loopLabel: while (true) {
      let scrut, element2$, element1$, element0$, element2$1, element1$1, element0$1, element1$2, element0$2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
      if (runtime.Tuple.isArrayLike(u1u2u3) && u1u2u3.length === 3) {
        element0$ = runtime.Tuple.get(u1u2u3, 0);
        element1$ = runtime.Tuple.get(u1u2u3, 1);
        element2$ = runtime.Tuple.get(u1u2u3, 2);
        if (runtime.Tuple.isArrayLike(v1v2v3) && v1v2v3.length === 3) {
          element0$1 = runtime.Tuple.get(v1v2v3, 0);
          element1$1 = runtime.Tuple.get(v1v2v3, 1);
          element2$1 = runtime.Tuple.get(v1v2v3, 2);
          scrut = element2$1 == 0;
          if (scrut === true) {
            return globalThis.Object.freeze([
              element2$,
              element0$,
              element1$
            ])
          }
          {
            let inlinedVal, inlinedVal1, inlinedVal2, tmp6, tmp7, inlinedVal3, tmp8;
            tmp7 = element2$ / element2$1;
            inlinedVal1 = runtime.safeCall(globalThis.Math.trunc(tmp7));
            tmp8 = element2$ / element2$1;
            inlinedVal3 = runtime.safeCall(globalThis.Math.trunc(tmp8));
            tmp6 = element2$1 * inlinedVal3;
            inlinedVal2 = element2$ - tmp6;
            inlinedVal = globalThis.Object.freeze([
              inlinedVal1,
              inlinedVal2
            ]);
            if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
              element0$2 = runtime.Tuple.get(inlinedVal, 0);
              element1$2 = runtime.Tuple.get(inlinedVal, 1);
              tmp = globalThis.Object.freeze([
                element0$1,
                element1$1,
                element2$1
              ]);
              tmp1 = element0$2 * element0$1;
              tmp2 = element0$ - tmp1;
              tmp3 = element0$2 * element1$1;
              tmp4 = element1$ - tmp3;
              tmp5 = globalThis.Object.freeze([
                tmp2,
                tmp4,
                element1$2
              ]);
              u1u2u3 = tmp;
              v1v2v3 = tmp5;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #gcdE(x, y) {
    let scrut, tmp, tmp1;
    scrut = x == 0;
    if (scrut === true) {
      return globalThis.Object.freeze([
        y,
        0,
        1
      ])
    }
    tmp = globalThis.Object.freeze([
      1,
      0,
      x
    ]);
    tmp1 = globalThis.Object.freeze([
      0,
      1,
      y
    ]);
    return gcd.#g(tmp, tmp1);
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
  static #test(d) {
    let ns, ms, tripls, rs, tmp, tmp1, inlinedVal;
    tmp = 5000 + d;
    ns = NofibPrelude.enumFromTo(5000, tmp);
    tmp1 = 10000 + d;
    ms = NofibPrelude.enumFromTo(10000, tmp1);
    inlinedVal = lscomp1_lscomp2(0, ms, ns, undefined, undefined);
    tripls = NofibPrelude.map(lambda$(gcd), inlinedVal);
    rs = NofibPrelude.map(lambda1, tripls);
    return gcd.#max_(rs)
  }
  static #testGcd_nofib(x) {
    return gcd.#test(x)
  }
  static main() {
    return gcd.#testGcd_nofib(40)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "gcd"];
});
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { gcd1 as _$_modulePrivate_$_gcd };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default gcd1;
