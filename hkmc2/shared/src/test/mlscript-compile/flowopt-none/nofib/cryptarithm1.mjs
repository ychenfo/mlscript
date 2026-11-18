const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const enumFromTo$accessorSymbol = globalThis.Symbol("enumFromTo");
const take$accessorSymbol = globalThis.Symbol("take");
const filter$accessorSymbol = globalThis.Symbol("filter");
const condition$accessorSymbol = globalThis.Symbol("condition");
const addj$accessorSymbol = globalThis.Symbol("addj");
const permutations$accessorSymbol = globalThis.Symbol("permutations");
let lscomp, cryptarithm11, lambda, lambda$, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param2 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param2.head;
            arg$Cons$1$ = param2.tail;
            tmp = param0[addj$accessorSymbol](param1, arg$Cons$0$);
            param2 = arg$Cons$1$;
            param3 = tmp;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param3 instanceof NofibPrelude.Nil.class) {
            id = 0;
            continue loopLabel
          } else if (param3 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param3.head;
            arg$Cons$1$ = param3.tail;
            tmp = lscomp1_lscomp2(1, param0, param1, param2, arg$Cons$1$);
            return NofibPrelude.Cons(arg$Cons$0$, tmp)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
lambda$ = (undefined, function (cryptarithm12) {
  return (i) => {
    return lambda(cryptarithm12, i)
  }
});
lambda = (undefined, function (cryptarithm12, i) {
  let p0, tmp, tmp1, tmp2;
  tmp = 9 + i;
  tmp1 = cryptarithm12[enumFromTo$accessorSymbol](0, tmp);
  p0 = cryptarithm12[take$accessorSymbol](7, tmp1);
  tmp2 = cryptarithm12[permutations$accessorSymbol](p0);
  return cryptarithm12[filter$accessorSymbol](cryptarithm12[condition$accessorSymbol], tmp2)
});
lscomp = function lscomp(k, p1) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (p1 instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (p1 instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = p1.head;
    arg$Cons$1$ = p1.tail;
    tmp = NofibPrelude.Cons(k, arg$Cons$0$);
    tmp1 = lscomp(k, arg$Cons$1$);
    return NofibPrelude.Cons(tmp, tmp1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class cryptarithm1 {
  static {
    cryptarithm11 = this
  }
  static get [enumFromTo$accessorSymbol]() { return cryptarithm1.#enumFromTo; }
  static get [take$accessorSymbol]() { return cryptarithm1.#take; }
  static get [filter$accessorSymbol]() { return cryptarithm1.#filter; }
  static get [condition$accessorSymbol]() { return cryptarithm1.#condition; }
  static get [addj$accessorSymbol]() { return cryptarithm1.#addj; }
  static get [permutations$accessorSymbol]() { return cryptarithm1.#permutations; }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = cryptarithm1.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = cryptarithm1.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #take(n, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = n <= 0;
      if (scrut === true) {
        return NofibPrelude.Nil
      }
      tmp = n - 1;
      tmp1 = cryptarithm1.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
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
          tmp = cryptarithm1.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #expand(a, b, c, d, e, f) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    tmp = e * 10;
    tmp1 = f + tmp;
    tmp2 = d * 100;
    tmp3 = tmp1 + tmp2;
    tmp4 = c * 1000;
    tmp5 = tmp3 + tmp4;
    tmp6 = b * 10000;
    tmp7 = tmp5 + tmp6;
    tmp8 = a * 100000;
    return tmp7 + tmp8
  }
  static #condition(onefuri) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, arg$Cons$0$2, arg$Cons$1$2, arg$Cons$0$3, arg$Cons$1$3, arg$Cons$0$4, arg$Cons$1$4, arg$Cons$0$5, arg$Cons$1$5, arg$Cons$0$6, arg$Cons$1$6, tmp, tmp1, tmp2, tmp3, tmp4;
    if (onefuri instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = onefuri.head;
      arg$Cons$1$ = onefuri.tail;
      if (arg$Cons$1$ instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = arg$Cons$1$.head;
        arg$Cons$1$1 = arg$Cons$1$.tail;
        if (arg$Cons$1$1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$2 = arg$Cons$1$1.head;
          arg$Cons$1$2 = arg$Cons$1$1.tail;
          if (arg$Cons$1$2 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$3 = arg$Cons$1$2.head;
            arg$Cons$1$3 = arg$Cons$1$2.tail;
            if (arg$Cons$1$3 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$4 = arg$Cons$1$3.head;
              arg$Cons$1$4 = arg$Cons$1$3.tail;
              if (arg$Cons$1$4 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$5 = arg$Cons$1$4.head;
                arg$Cons$1$5 = arg$Cons$1$4.tail;
                if (arg$Cons$1$5 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$6 = arg$Cons$1$5.head;
                  arg$Cons$1$6 = arg$Cons$1$5.tail;
                  if (arg$Cons$1$6 instanceof NofibPrelude.Nil.class) {
                    tmp = cryptarithm1.#expand(0, 0, 0, arg$Cons$0$, arg$Cons$0$1, arg$Cons$0$2);
                    tmp1 = cryptarithm1.#expand(0, 0, arg$Cons$0$3, arg$Cons$0$, arg$Cons$0$4, arg$Cons$0$5);
                    tmp2 = 2 * tmp1;
                    tmp3 = tmp + tmp2;
                    tmp4 = cryptarithm1.#expand(0, 0, arg$Cons$0$1, arg$Cons$0$6, arg$Cons$0$1, arg$Cons$0$2);
                    return tmp3 == tmp4
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #addj(j, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = NofibPrelude.Cons(j, NofibPrelude.Nil);
      return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp1 = NofibPrelude.Cons(arg$Cons$0$, arg$Cons$1$);
      tmp2 = NofibPrelude.Cons(j, tmp1);
      tmp3 = cryptarithm1.#addj(j, arg$Cons$1$);
      tmp4 = lscomp(arg$Cons$0$, tmp3);
      return NofibPrelude.Cons(tmp2, tmp4)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #permutations(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(NofibPrelude.Nil, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = cryptarithm1.#permutations(arg$Cons$1$);
      return lscomp1_lscomp2(0, cryptarithm1, arg$Cons$0$, tmp, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testCryptarithm_nofib(n) {
    let tmp, lambda$here;
    tmp = cryptarithm1.#enumFromTo(1, n);
    lambda$here = lambda$(cryptarithm1);
    return cryptarithm1.#map(lambda$here, tmp)
  }
  static main() {
    return cryptarithm1.#testCryptarithm_nofib(1)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cryptarithm1"];
});
export default cryptarithm11;
