const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_go as go } from "./NofibPrelude.mjs";
const findawards$accessorSymbol = globalThis.Symbol("findawards");
const competitors$accessorSymbol = globalThis.Symbol("competitors");
const qsort_qpart_rqsort_rqpart$accessorSymbol = globalThis.Symbol("qsort_qpart_rqsort_rqpart");
let award, atleast, awards1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, lambda$1, lambda$2, lambda$3, lambda$4;
lambda$4 = (undefined, function (awards2) {
  return (x) => {
    return lambda13(awards2, x)
  }
});
lambda13 = (undefined, function (awards2, x) {
  let tmp, inlinedVal, tmp1, inlinedVal1, tmp2;
  tmp2 = x / 100;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = 100 * inlinedVal1;
  inlinedVal = x - tmp1;
  tmp = awards2[competitors$accessorSymbol](inlinedVal);
  return NofibPrelude.map(lambda$3(awards2), tmp)
});
lambda$3 = (undefined, function (awards2) {
  return (caseScrut) => {
    return lambda12(awards2, caseScrut)
  }
});
lambda12 = (undefined, function (awards2, caseScrut) {
  let element1$, element0$, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    element1$ = runtime.Tuple.get(caseScrut, 1);
    tmp = awards2[findawards$accessorSymbol](element1$);
    return globalThis.Object.freeze([
      element0$,
      tmp
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (threshold) {
  return (caseScrut) => {
    return lambda9(threshold, caseScrut)
  }
});
lambda9 = (undefined, function (threshold, caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    return element0$ >= threshold
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (name) {
  return (ps) => {
    return globalThis.Object.freeze([
      name,
      ps
    ])
  }
});
lambda10 = (undefined, function (name, ps) {
  return globalThis.Object.freeze([
    name,
    ps
  ])
});
atleast = function atleast(sumscores, threshold) {
  return NofibPrelude.filter(lambda$2(threshold), sumscores)
};
award = function award(awards2, sumscores, name_threshold) {
  let element1$, element0$;
  if (runtime.Tuple.isArrayLike(name_threshold) && name_threshold.length === 2) {
    let inlinedVal, r, inlinedVal1;
    element0$ = runtime.Tuple.get(name_threshold, 0);
    element1$ = runtime.Tuple.get(name_threshold, 1);
    inlinedVal = NofibPrelude.filter(lambda$2(element1$), sumscores);
    r = NofibPrelude.Nil;
    inlinedVal1 = awards2[qsort_qpart_rqsort_rqpart$accessorSymbol](0, lambda6, inlinedVal, r, undefined, undefined, undefined);
    return NofibPrelude.map(lambda$1(element0$), inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda11 = (undefined, function (p) {
  let inlinedVal;
  inlinedVal = go(NofibPrelude, p, 0);
  return globalThis.Object.freeze([
    inlinedVal,
    p
  ])
});
lambda$ = (undefined, function (n) {
  return (x) => {
    return NofibPrelude.Cons(n, x)
  }
});
lambda7 = (undefined, function (x) {
  return NofibPrelude.Cons(x, NofibPrelude.Nil)
});
lambda8 = (undefined, function (n, x) {
  return NofibPrelude.Cons(n, x)
});
lambda3 = (undefined, function (a, b) {
  return a < b
});
lambda4 = (undefined, function (a, b) {
  return a > b
});
lambda1 = (undefined, function (a, b) {
  return a < b
});
lambda2 = (undefined, function (a, b) {
  return a > b
});
lambda5 = (undefined, function (a, b) {
  return NofibPrelude.ltList(a, b, lambda3, lambda4)
});
lambda6 = (undefined, function (a, b) {
  return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda5)
});
lambda = (undefined, function (x, y) {
  return x == y
});
(class awards {
  static {
    awards1 = this
  }
  static get [qsort_qpart_rqsort_rqpart$accessorSymbol]() { return awards.#qsort_qpart_rqsort_rqpart; }
  static get [findawards$accessorSymbol]() { return awards.#findawards; }
  static get [competitors$accessorSymbol]() { return awards.#competitors; }
  static #qsort_qpart_rqsort_rqpart(id, param0, param1, param2, param3, param4, param5) {
    loopLabel: while (true) {
      switch (id) {
        case 0:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param2
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Cons(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = NofibPrelude.Nil;
                param4 = NofibPrelude.Nil;
                param5 = param2_tmp;
                id = 1;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 1:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof NofibPrelude.Nil.class) {
              tmp = awards.#qsort_qpart_rqsort_rqpart(2, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = NofibPrelude.Cons(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 2;
              continue loopLabel
            } else if (param2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(param1, arg$Cons$0$));
              if (scrut === true) {
                tmp2 = NofibPrelude.Cons(arg$Cons$0$, param4);
                param2 = arg$Cons$1$;
                param4 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, param3);
              param2 = arg$Cons$1$;
              param3 = tmp3;
              id = 1;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 2:
          {
            let arg$Cons$0$, arg$Cons$1$;
            if (param1 instanceof NofibPrelude.Nil.class) {
              return param2
            } else if (param1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param1.head;
              arg$Cons$1$ = param1.tail;
              if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
                return NofibPrelude.Cons(arg$Cons$0$, param2)
              }
              {
                let param2_tmp;
                param2_tmp = param2;
                param0 = param0;
                param1 = arg$Cons$0$;
                param2 = arg$Cons$1$;
                param3 = NofibPrelude.Nil;
                param4 = NofibPrelude.Nil;
                param5 = param2_tmp;
                id = 3;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        case 3:
          {
            let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
            if (param2 instanceof NofibPrelude.Nil.class) {
              tmp = awards.#qsort_qpart_rqsort_rqpart(0, param0, param4, param5, undefined, undefined, undefined);
              tmp1 = NofibPrelude.Cons(param1, tmp);
              param1 = param3;
              param2 = tmp1;
              id = 0;
              continue loopLabel
            } else if (param2 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = param2.head;
              arg$Cons$1$ = param2.tail;
              scrut = runtime.safeCall(param0(arg$Cons$0$, param1));
              if (scrut === true) {
                tmp2 = NofibPrelude.Cons(arg$Cons$0$, param3);
                param2 = arg$Cons$1$;
                param3 = tmp2;
                id = 3;
                continue loopLabel
              }
              tmp3 = NofibPrelude.Cons(arg$Cons$0$, param4);
              param2 = arg$Cons$1$;
              param4 = tmp3;
              id = 3;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
      }
    }
  }
  static #delete_(xs, e) {
    return NofibPrelude.deleteBy(lambda, e, xs)
  }
  static #listDiff(a, ls) {
    return NofibPrelude.foldl(awards.#delete_, a, ls)
  }
  static #qsort(le, ls, r) {
    return awards.#qsort_qpart_rqsort_rqpart(0, le, ls, r, undefined, undefined, undefined)
  }
  static #qpart(le, x, ys, rlt, rge, r) {
    return awards.#qsort_qpart_rqsort_rqpart(1, le, x, ys, rlt, rge, r)
  }
  static #rqsort(le, ls, r) {
    return awards.#qsort_qpart_rqsort_rqpart(2, le, ls, r, undefined, undefined, undefined)
  }
  static #rqpart(le, x, yss, rle, rgt, r) {
    return awards.#qsort_qpart_rqsort_rqpart(3, le, x, yss, rle, rgt, r)
  }
  static #sort(l) {
    return awards.#qsort(lambda6, l, NofibPrelude.Nil)
  }
  static #perms(m, nns) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3;
    if (nns instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    }
    if (nns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = nns.head;
      arg$Cons$1$ = nns.tail;
      tmp = m - 1;
      tmp1 = awards.#perms(tmp, arg$Cons$1$);
      tmp2 = NofibPrelude.map(lambda$(arg$Cons$0$), tmp1);
      tmp3 = awards.#perms(m, arg$Cons$1$);
      return NofibPrelude.append(tmp2, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #awards(scores) {
    let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = awards.#perms(3, scores);
    sumscores = NofibPrelude.map(lambda11, tmp);
    tmp1 = globalThis.Object.freeze([
      "Gold",
      70
    ]);
    tmp2 = award(awards, sumscores, tmp1);
    tmp3 = globalThis.Object.freeze([
      "Silver",
      60
    ]);
    tmp4 = award(awards, sumscores, tmp3);
    tmp5 = globalThis.Object.freeze([
      "Bronze",
      50
    ]);
    tmp6 = award(awards, sumscores, tmp5);
    tmp7 = NofibPrelude.append(tmp4, tmp6);
    return NofibPrelude.append(tmp2, tmp7)
  }
  static #findawards(scores) {
    let scrut, arg$Cons$0$, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    scrut = awards.#awards(scores);
    if (scrut instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (scrut instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = scrut.head;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 2) {
          element0$1 = runtime.Tuple.get(element1$, 0);
          element1$1 = runtime.Tuple.get(element1$, 1);
          tmp = globalThis.Object.freeze([
            element0$1,
            element1$1
          ]);
          tmp1 = globalThis.Object.freeze([
            element0$,
            tmp
          ]);
          tmp2 = awards.#listDiff(scores, element1$1);
          tmp3 = awards.#findawards(tmp2);
          return NofibPrelude.Cons(tmp1, tmp3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #findallawards(competitors) {
    return NofibPrelude.map(lambda$3(awards), competitors)
  }
  static #competitors(i) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.list(35, 27, 40, i, 34, 21);
    tmp1 = globalThis.Object.freeze([
      "Simon",
      tmp
    ]);
    tmp2 = NofibPrelude.list(23, 19, 45, i, 17, 10, 5, 8, 14);
    tmp3 = globalThis.Object.freeze([
      "Hans",
      tmp2
    ]);
    tmp4 = NofibPrelude.list(1, 18, i, 20, 21, 19, 34, 8, 16, 21);
    tmp5 = globalThis.Object.freeze([
      "Phil",
      tmp4
    ]);
    tmp6 = NofibPrelude.list(9, 23, 17, 54, i, 41, 9, 18, 14);
    tmp7 = globalThis.Object.freeze([
      "Kevin",
      tmp6
    ]);
    return NofibPrelude.list(tmp1, tmp3, tmp5, tmp7)
  }
  static #testAwards_nofib(n) {
    let tmp;
    tmp = NofibPrelude.enumFromTo(1, n);
    return NofibPrelude.map(lambda$4(awards), tmp)
  }
  static main() {
    return awards.#testAwards_nofib(100)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "awards"];
});
export { award as _$_modulePrivate_$_award };
export { atleast as _$_modulePrivate_$_atleast };
export { awards1 as _$_modulePrivate_$_awards };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda9 as _$_modulePrivate_$_lambda9 };
export { lambda10 as _$_modulePrivate_$_lambda10 };
export { lambda11 as _$_modulePrivate_$_lambda11 };
export { lambda12 as _$_modulePrivate_$_lambda12 };
export { lambda13 as _$_modulePrivate_$_lambda13 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export default awards1;
