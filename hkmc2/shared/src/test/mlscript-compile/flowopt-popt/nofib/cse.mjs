const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const listEq$accessorSymbol = globalThis.Symbol("listEq");
const take$accessorSymbol = globalThis.Symbol("take");
const concat$accessorSymbol = globalThis.Symbol("concat");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
let cse1, lambda, lambda1, lambda2, lambda$, lambda$1, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_lambda$$lambda$, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$mmapl, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda$, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda, main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label, main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda$, main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda, main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label$, main_testCse_nofib_lambda$_lambda_cse$cse, main_testCse_nofib_lambda$_lambda$lambda, main_testCse_nofib_lambda$$lambda$, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$_lambda$lambda, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$$lambda$, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$sim, main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_bind$bind, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_retURN$retURN, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$$lambda$, main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$_labelOf$labelOf, main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$$labelOf$, main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph, main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$_lambda$lambda$worker;
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_lambda$$lambda$ = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_lambda$$lambda$(b) {
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
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$mmapl = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$mmapl(f, aas) {
  let arg$Cons$0$, arg$Cons$1$, tmp, lambda$here;
  if (aas instanceof NofibPrelude.Nil.class) {
    return main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_retURN$retURN(NofibPrelude.Nil)
  } else if (aas instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = aas.head;
    arg$Cons$1$ = aas.tail;
    tmp = runtime.safeCall(f(arg$Cons$0$));
    lambda$here = main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda$(cse1, f, arg$Cons$1$);
    return main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_bind$bind(tmp, lambda$here)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda(cse2, f, as_, b) {
  let tmp, f1;
  tmp = main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$mmapl(f, as_);
  f1 = main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_lambda$$lambda$(b);
  return lambda$(tmp, f1)
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda$ = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda$(cse2, f, as_) {
  return (b) => {
    return main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$lambda(cse2, f, as_, b)
  }
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label(cse2, t) {
  let arg$Node$0$, arg$Node$1$;
  if (t instanceof cse2.Node.class) {
    let m, f;
    arg$Node$0$ = t.a;
    arg$Node$1$ = t.b;
    m = cse2.incr;
    f = main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda$(cse2, arg$Node$0$, arg$Node$1$);
    return lambda$(m, f)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda(cse2, x, xs, n) {
  let tmp, label$here, f;
  label$here = main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label$(cse2);
  tmp = main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl$mmapl(label$here, xs);
  f = main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$$lambda$(cse2, x, n);
  return lambda$(tmp, f)
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label$ = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label$(cse2) {
  return (t) => {
    return main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label(cse2, t)
  }
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda$ = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda$(cse2, x, xs) {
  return (n) => {
    return main_testCse_nofib_lambda$_lambda_cse_labelTree_label$lambda(cse2, x, xs, n)
  }
};
main_testCse_nofib_lambda$_lambda_cse$cse = function main_testCse_nofib_lambda$_lambda_cse$cse(t) {
  let tmp, scrut, tmp1, sim$here, tmp2, inlinedVal, scrut1;
  tmp2 = main_testCse_nofib_lambda$_lambda_cse_labelTree_label$label(cse1, t);
  scrut1 = runtime.safeCall(tmp2(0));
  if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
    inlinedVal = runtime.Tuple.get(scrut1, 1);
    tmp = main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph(inlinedVal);
    tmp1 = globalThis.Object.freeze([
      lambda,
      NofibPrelude.Nil
    ]);
    sim$here = main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$(cse1);
    scrut = cse1[foldr$accessorSymbol](sim$here, tmp1, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda$lambda = function main_testCse_nofib_lambda$_lambda$lambda(cse2, i) {
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
  return cse2[map$accessorSymbol](main_testCse_nofib_lambda$_lambda_cse$cse, tmp6)
};
main_testCse_nofib_lambda$$lambda$ = function main_testCse_nofib_lambda$$lambda$(cse2) {
  return (i) => {
    return main_testCse_nofib_lambda$_lambda$lambda(cse2, i)
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$_lambda$lambda = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$_lambda$lambda(n, r, ms, x) {
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
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$$lambda$ = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$$lambda$(n, r, ms) {
  return (x) => {
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$_lambda$lambda(n, r, ms, x)
  }
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$sim = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$sim(cse2, n_s_cs, r_lg) {
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
      lambda$here = main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim_lambda$$lambda$(element0$, element0$1, inlinedVal);
      return globalThis.Object.freeze([
        lambda$here,
        element1$1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$ = function main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$$sim$(cse2) {
  return (n_s_cs, r_lg) => {
    return main_testCse_nofib_lambda$_lambda_cse_findCommon_sim$_sim$sim(cse2, n_s_cs, r_lg)
  }
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_bind$bind = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_bind$bind(m, f) {
  return (eta$0$0) => {
    return lambda2(m, f, eta$0$0)
  }
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_retURN$retURN = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_mmapl_retURN$retURN(a) {
  return (eta$0$0) => {
    return globalThis.Object.freeze([
      eta$0$0,
      a
    ])
  }
};
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$_lambda$lambda$worker = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$_lambda$lambda$worker(cse2, x, n, ts, eta$0$0) {
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
main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$$lambda$ = function main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$$lambda$(cse2, x, n) {
  return (ts) => {
    return (eta$0$0) => {
      return main_testCse_nofib_lambda$_lambda_cse_labelTree_label_lambda$_lambda$lambda$worker(cse2, x, n, ts, eta$0$0)
    }
  }
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$_labelOf$labelOf = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$_labelOf$labelOf(cse2, t) {
  let arg$Node$0$;
  if (t instanceof cse2.Node.class) {
    arg$Node$0$ = t.a;
    if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
      return runtime.Tuple.get(arg$Node$0$, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$$labelOf$ = function main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$$labelOf$(cse2) {
  return (t) => {
    return main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$_labelOf$labelOf(cse2, t)
  }
};
main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph = function main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph(t) {
  let arg$Node$0$, arg$Node$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3, labelOf$here;
  if (t instanceof cse1.Node.class) {
    arg$Node$0$ = t.a;
    arg$Node$1$ = t.b;
    if (runtime.Tuple.isArrayLike(arg$Node$0$) && arg$Node$0$.length === 2) {
      element0$ = runtime.Tuple.get(arg$Node$0$, 0);
      element1$ = runtime.Tuple.get(arg$Node$0$, 1);
      labelOf$here = main_testCse_nofib_lambda$_lambda_cse_ltGraph_labelOf$$labelOf$(cse1);
      tmp = cse1[map$accessorSymbol](labelOf$here, arg$Node$1$);
      tmp1 = globalThis.Object.freeze([
        element0$,
        element1$,
        tmp
      ]);
      tmp2 = cse1[map$accessorSymbol](main_testCse_nofib_lambda$_lambda_cse_ltGraph$ltGraph, arg$Node$1$);
      tmp3 = cse1[concat$accessorSymbol](tmp2);
      return NofibPrelude.Cons(tmp1, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (f) {
  return (s) => {
    let tmp;
    tmp = runtime.safeCall(f(s));
    return globalThis.Object.freeze([
      tmp,
      s
    ])
  }
});
lambda$ = (undefined, function (m, f) {
  return (s) => {
    return lambda2(m, f, s)
  }
});
lambda2 = (undefined, function (m, f, s) {
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
lambda1 = (undefined, function (x) {
  return x + 1
});
(class cse {
  static {
    cse1 = this
  }
  static get [map$accessorSymbol]() { return cse.#map; }
  static get [listEq$accessorSymbol]() { return cse.#listEq; }
  static get [take$accessorSymbol]() { return cse.#take; }
  static get [concat$accessorSymbol]() { return cse.#concat; }
  static get [foldr$accessorSymbol]() { return cse.#foldr; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25;
    tmp = cse.#update(lambda1);
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
  static #update(f) {
    return lambda$1(f)
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
    let inlinedVal, tmp, lambda$here;
    tmp = cse1.#enumFromTo(1, 6);
    lambda$here = main_testCse_nofib_lambda$$lambda$(cse1);
    inlinedVal = cse1.#map(lambda$here, tmp);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cse"];
});
export default cse1;
