const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const listEq$accessorSymbol = globalThis.Symbol("listEq");
const take$accessorSymbol = globalThis.Symbol("take");
const mmapl$accessorSymbol = globalThis.Symbol("mmapl");
const cse$accessorSymbol = globalThis.Symbol("cse");
let label, labelOf, sim, cse1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, lambda$3, label$, lambda$4, lambda$5, labelOf$, sim$, lambda$6, lambda$7, lambda$worker;
lambda$7 = (undefined, function (cse2) {
  return (i) => {
    return lambda4(cse2, i)
  }
});
lambda4 = (undefined, function (cse2, i) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, tmp7, inlinedVal1, tmp8;
  tmp8 = i / 6;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp7 = 6 * inlinedVal1;
  inlinedVal = i - tmp7;
  tmp = NofibPrelude.Cons(cse2.example5, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(cse2.example4, tmp);
  tmp2 = NofibPrelude.Cons(cse2.example3, tmp1);
  tmp3 = NofibPrelude.Cons(cse2.example2, tmp2);
  tmp4 = NofibPrelude.Cons(cse2.example1, tmp3);
  tmp5 = NofibPrelude.Cons(cse2.example0, tmp4);
  tmp6 = cse2[take$accessorSymbol](inlinedVal, tmp5);
  return cse2[map$accessorSymbol](cse2[cse$accessorSymbol], tmp6)
});
lambda$6 = (undefined, function (n, r, ms) {
  return (x) => {
    return lambda2(n, r, ms, x)
  }
});
lambda2 = (undefined, function (n, r, ms, x) {
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
sim$ = function sim$(cse2) {
  return (n_s_cs, r_lg) => {
    return sim(cse2, n_s_cs, r_lg)
  }
};
sim = function sim(cse2, n_s_cs, r_lg) {
  let rcs, element2$, element1$, element0$, element1$1, element0$1, tmp, tmp1, lambda$here;
  if (runtime.Tuple.isArrayLike(n_s_cs) && n_s_cs.length === 3) {
    element0$ = runtime.Tuple.get(n_s_cs, 0);
    element1$ = runtime.Tuple.get(n_s_cs, 1);
    element2$ = runtime.Tuple.get(n_s_cs, 2);
    if (runtime.Tuple.isArrayLike(r_lg) && r_lg.length === 2) {
      let cse3, s, rcs1, ls, inlinedVal;
      element0$1 = runtime.Tuple.get(r_lg, 0);
      element1$1 = runtime.Tuple.get(r_lg, 1);
      rcs = cse2[map$accessorSymbol](element0$1, element2$);
      cse3 = cse2;
      s = element1$;
      rcs1 = rcs;
      ls = element1$1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, element2$1, element1$2, element0$2;
          if (ls instanceof NofibPrelude.Nil.class) {
            inlinedVal = NofibPrelude.Nil;
            break inlinedLbl
          } else if (ls instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = ls.head;
            arg$Cons$1$ = ls.tail;
            if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 3) {
              element0$2 = runtime.Tuple.get(arg$Cons$0$, 0);
              element1$2 = runtime.Tuple.get(arg$Cons$0$, 1);
              element2$1 = runtime.Tuple.get(arg$Cons$0$, 2);
              scrut = s === element1$2;
              if (scrut === true) {
                scrut1 = cse3[listEq$accessorSymbol](element2$1, rcs1);
                if (scrut1 === true) {
                  inlinedVal = NofibPrelude.Cons(element0$2, undefined);
                  break inlinedLbl
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
      }
      if (inlinedVal instanceof NofibPrelude.Nil.class) {
        tmp = globalThis.Object.freeze([
          element0$,
          element1$,
          rcs
        ]);
        tmp1 = NofibPrelude.Cons(tmp, element1$1);
        return globalThis.Object.freeze([
          element0$1,
          tmp1
        ])
      }
      lambda$here = lambda$6(element0$, element0$1, inlinedVal);
      return globalThis.Object.freeze([
        lambda$here,
        element1$1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda3 = (undefined, function (x) {
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
lambda$5 = (undefined, function (cse2, x, n) {
  return (ts) => {
    return (eta$0$0) => {
      return lambda$worker(cse2, x, n, ts, eta$0$0)
    }
  }
});
lambda$worker = function lambda$worker(cse2, x, n, ts, eta$0$0) {
  let tmp, tmp1;
  tmp = globalThis.Object.freeze([
    n,
    x
  ]);
  tmp1 = cse2.Node(tmp, ts);
  return globalThis.Object.freeze([
    eta$0$0,
    tmp1
  ])
};
lambda$4 = (undefined, function (cse2, x, xs) {
  return (n) => {
    return lambda1(cse2, x, xs, n)
  }
});
lambda1 = (undefined, function (cse2, x, xs, n) {
  let tmp, label$here, f;
  label$here = label$(cse2);
  tmp = cse2[mmapl$accessorSymbol](label$here, xs);
  f = lambda$5(cse2, x, n);
  return lambda$(tmp, f)
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
    f = lambda$4(cse2, arg$Node$0$, arg$Node$1$);
    return lambda$(m, f)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$3 = (undefined, function (f) {
  return (s) => {
    let tmp;
    tmp = runtime.safeCall(f(s));
    return globalThis.Object.freeze([
      tmp,
      s
    ])
  }
});
lambda$2 = (undefined, function (b) {
  return (bs) => {
    return (eta$0$0) => {
      let tmp;
      tmp = NofibPrelude.Cons(b, bs);
      return globalThis.Object.freeze([
        eta$0$0,
        tmp
      ])
    }
  }
});
lambda$1 = (undefined, function (cse2, f, as_) {
  return (b) => {
    return lambda(cse2, f, as_, b)
  }
});
lambda = (undefined, function (cse2, f, as_, b) {
  let tmp, f1;
  tmp = cse2[mmapl$accessorSymbol](f, as_);
  f1 = lambda$2(b);
  return lambda$(tmp, f1)
});
lambda$ = (undefined, function (m, f) {
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
lambda5 = (undefined, function (x) {
  return x + 1
});
(class cse {
  static {
    cse1 = this
  }
  static get [map$accessorSymbol]() { return cse.#map; }
  static get [listEq$accessorSymbol]() { return cse.#listEq; }
  static get [take$accessorSymbol]() { return cse.#take; }
  static get [mmapl$accessorSymbol]() { return cse.#mmapl; }
  static get [cse$accessorSymbol]() { return cse.#cse; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
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
    tmp14 = NofibPrelude.Cons(cse.d, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(cse.c, tmp14);
    tmp16 = NofibPrelude.Cons(cse.b, tmp15);
    tmp17 = NofibPrelude.Cons(cse.a, tmp16);
    tmp18 = cse.#scanl(cse.#plus_, cse.zerO, tmp17);
    tmp19 = cse.#prod(tmp18);
    cse.example4 = tmp19;
    tmp20 = NofibPrelude.Cons(cse.d, NofibPrelude.Nil);
    tmp21 = NofibPrelude.Cons(cse.c, tmp20);
    tmp22 = NofibPrelude.Cons(cse.b, tmp21);
    tmp23 = NofibPrelude.Cons(cse.a, tmp22);
    tmp24 = cse.#scanr(cse.#plus_, cse.zerO, tmp23);
    tmp25 = cse.#prod(tmp24);
    cse.example5 = tmp25;
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = cse.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = cse.#enumFromTo(tmp, b);
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
      tmp1 = cse.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #concat(ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = cse.#concat(arg$Cons$1$);
      return cse.#append(arg$Cons$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanl(f, q, ls) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      tmp = runtime.safeCall(f(q, arg$Cons$0$));
      tmp1 = cse.#scanl(f, tmp, arg$Cons$1$);
      return NofibPrelude.Cons(q, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #scanr(f, q, ls) {
    let scrut, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(q, NofibPrelude.Nil)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      scrut = cse.#scanr(f, q, arg$Cons$1$);
      if (scrut instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = scrut.head;
        arg$Cons$1$1 = scrut.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
        tmp1 = NofibPrelude.Cons(arg$Cons$0$1, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    return (eta$0$0) => {
      return globalThis.Object.freeze([
        eta$0$0,
        a
      ])
    }
  }
  static #bind(m, f) {
    return (eta$0$0) => {
      let scrut, element1$, element0$, callPrefix;
      scrut = runtime.safeCall(m(eta$0$0));
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        callPrefix = runtime.safeCall(f(element1$));
        return runtime.safeCall(callPrefix(element0$))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #mmapl(f, aas) {
    let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here;
    if (aas instanceof NofibPrelude.Nil.class) {
      return cse.#retURN(NofibPrelude.Nil)
    } else if (aas instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = aas.head;
      arg$Cons$1$ = aas.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      lambda$here = lambda$1(cse, f, arg$Cons$1$);
      return cse.#bind(tmp, lambda$here)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #startingWith(m, v) {
    let scrut;
    scrut = runtime.safeCall(m(v));
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #update(f) {
    return lambda$3(f)
  }
  static #labelTree(t) {
    let tmp;
    tmp = label(cse, t);
    return cse.#startingWith(tmp, 0)
  }
  static #ltGraph(t) {
    let arg$Node$0$, arg$Node$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, labelOf$here;
    if (t instanceof cse.Node.class) {
      arg$Node$0$ = t.a;
      arg$Node$1$ = t.b;
      if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Node$0$, 0);
        element1$ = runtime.Tuple.get(arg$Node$0$, 1);
        labelOf$here = labelOf$(cse);
        tmp = cse.#map(labelOf$here, arg$Node$1$);
        tmp1 = globalThis.Object.freeze([
          element0$,
          element1$,
          tmp
        ]);
        tmp2 = cse.#map(cse.#ltGraph, arg$Node$1$);
        tmp3 = cse.#concat(tmp2);
        return NofibPrelude.Cons(tmp1, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #findCommon(ls) {
    let scrut, tmp, sim$here;
    tmp = globalThis.Object.freeze([
      lambda3,
      NofibPrelude.Nil
    ]);
    sim$here = sim$(cse);
    scrut = cse.#foldr(sim$here, tmp, ls);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cse(t) {
    let tmp, tmp1;
    tmp = cse.#labelTree(t);
    tmp1 = cse.#ltGraph(tmp);
    return cse.#findCommon(tmp1)
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
  static #testCse_nofib(n) {
    let tmp, lambda$here;
    tmp = cse.#enumFromTo(1, n);
    lambda$here = lambda$7(cse);
    return cse.#map(lambda$here, tmp)
  }
  static main() {
    let tmp;
    tmp = cse.#testCse_nofib(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cse"];
});
export default cse1;
