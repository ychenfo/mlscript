const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
let swap, new_range, scc1, lambda$, lambda$1;
lambda$1 = (undefined, function (scc2, es) {
  return (x) => {
    let tmp;
    tmp = scc2[map$accessorSymbol](swap, es);
    return new_range(tmp, x)
  }
});
lambda$ = (undefined, function (es) {
  return (x) => {
    return new_range(es, x)
  }
});
swap = function swap(a) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(a) && a.length === 2) {
    element0$ = runtime.Tuple.get(a, 0);
    element1$ = runtime.Tuple.get(a, 1);
    return globalThis.Object.freeze([
      element1$,
      element0$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
new_range = function new_range(xys, w) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp;
    if (xys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xys.head;
      arg$Cons$1$ = xys.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = element0$ == w;
        if (scrut === true) {
          tmp = new_range(arg$Cons$1$, w);
          return NofibPrelude.Cons(element1$, tmp)
        }
        xys = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class scc {
  static {
    scc1 = this
  }
  static get [map$accessorSymbol]() { return scc.#map; }
  static #snd(x) {
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      return runtime.Tuple.get(x, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = scc.#map(f, arg$Cons$1$);
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
      tmp = scc.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #dfs(r, vsns, xs) {
    loopLabel: while (true) {
      let scrut, scrut1, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
        element0$ = runtime.Tuple.get(vsns, 0);
        element1$ = runtime.Tuple.get(vsns, 1);
        if (xs instanceof NofibPrelude.Nil.class) {
          return globalThis.Object.freeze([
            element0$,
            element1$
          ])
        } else if (xs instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs.head;
          arg$Cons$1$ = xs.tail;
          scrut = scc.#inList(arg$Cons$0$, element0$);
          if (scrut === true) {
            tmp = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            vsns = tmp;
            xs = arg$Cons$1$;
            continue loopLabel
          }
          tmp1 = NofibPrelude.Cons(arg$Cons$0$, element0$);
          tmp2 = globalThis.Object.freeze([
            tmp1,
            NofibPrelude.Nil
          ]);
          tmp3 = runtime.safeCall(r(arg$Cons$0$));
          scrut1 = scc.#dfs(r, tmp2, tmp3);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
            element0$1 = runtime.Tuple.get(scrut1, 0);
            element1$1 = runtime.Tuple.get(scrut1, 1);
            tmp4 = NofibPrelude.Cons(arg$Cons$0$, element1$1);
            tmp5 = scc.#append(tmp4, element1$);
            tmp6 = globalThis.Object.freeze([
              element0$1,
              tmp5
            ]);
            vsns = tmp6;
            xs = arg$Cons$1$;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #stronglyConnComp(es, vs) {
    let tmp, tmp1, tmp2, tmp3, lambda$here, scc2, r, vsns, xs, inlinedVal;
    tmp = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    tmp1 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    lambda$here = lambda$(es);
    tmp2 = scc.#dfs(lambda$here, tmp1, vs);
    tmp3 = scc.#snd(tmp2);
    scc2 = scc;
    r = lambda$1(scc, es);
    vsns = tmp;
    xs = tmp3;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, element1$, element0$, arg$Cons$0$, arg$Cons$1$, element1$1, element0$1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10;
        if (runtime.Tuple.isArrayLike(vsns) && vsns.length === 2) {
          element0$ = runtime.Tuple.get(vsns, 0);
          element1$ = runtime.Tuple.get(vsns, 1);
          if (xs instanceof NofibPrelude.Nil.class) {
            inlinedVal = globalThis.Object.freeze([
              element0$,
              element1$
            ]);
            break inlinedLbl
          } else if (xs instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = xs.head;
            arg$Cons$1$ = xs.tail;
            scrut = scc2.#inList(arg$Cons$0$, element0$);
            if (scrut === true) {
              tmp4 = globalThis.Object.freeze([
                element0$,
                element1$
              ]);
              vsns = tmp4;
              xs = arg$Cons$1$;
              continue loopLabel
            }
            tmp5 = NofibPrelude.Cons(arg$Cons$0$, element0$);
            tmp6 = globalThis.Object.freeze([
              tmp5,
              NofibPrelude.Nil
            ]);
            tmp7 = runtime.safeCall(r(arg$Cons$0$));
            scrut1 = scc2.#dfs(r, tmp6, tmp7);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
              element0$1 = runtime.Tuple.get(scrut1, 0);
              element1$1 = runtime.Tuple.get(scrut1, 1);
              tmp8 = NofibPrelude.Cons(arg$Cons$0$, element1$1);
              tmp9 = NofibPrelude.Cons(tmp8, element1$);
              tmp10 = globalThis.Object.freeze([
                element0$1,
                tmp9
              ]);
              vsns = tmp10;
              xs = arg$Cons$1$;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return scc.#snd(inlinedVal)
  }
  static #testScc_nofib(d) {
    let vertices, edges, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
    tmp = NofibPrelude.Cons(7, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(6, tmp);
    tmp2 = NofibPrelude.Cons(5, tmp1);
    tmp3 = NofibPrelude.Cons(4, tmp2);
    tmp4 = NofibPrelude.Cons(3, tmp3);
    tmp5 = NofibPrelude.Cons(2, tmp4);
    vertices = NofibPrelude.Cons(1, tmp5);
    tmp6 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp7 = globalThis.Object.freeze([
      3,
      2
    ]);
    tmp8 = globalThis.Object.freeze([
      3,
      4
    ]);
    tmp9 = globalThis.Object.freeze([
      3,
      7
    ]);
    tmp10 = globalThis.Object.freeze([
      4,
      3
    ]);
    tmp11 = globalThis.Object.freeze([
      5,
      1
    ]);
    tmp12 = globalThis.Object.freeze([
      5,
      6
    ]);
    tmp13 = globalThis.Object.freeze([
      5,
      7
    ]);
    tmp14 = globalThis.Object.freeze([
      6,
      5
    ]);
    tmp15 = globalThis.Object.freeze([
      7,
      6
    ]);
    tmp16 = NofibPrelude.Cons(tmp15, NofibPrelude.Nil);
    tmp17 = NofibPrelude.Cons(tmp14, tmp16);
    tmp18 = NofibPrelude.Cons(tmp13, tmp17);
    tmp19 = NofibPrelude.Cons(tmp12, tmp18);
    tmp20 = NofibPrelude.Cons(tmp11, tmp19);
    tmp21 = NofibPrelude.Cons(tmp10, tmp20);
    tmp22 = NofibPrelude.Cons(tmp9, tmp21);
    tmp23 = NofibPrelude.Cons(tmp8, tmp22);
    tmp24 = NofibPrelude.Cons(tmp7, tmp23);
    edges = NofibPrelude.Cons(tmp6, tmp24);
    return scc.#stronglyConnComp(edges, vertices)
  }
  static main() {
    let tmp;
    tmp = scc.#testScc_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "scc"];
});
export default scc1;
