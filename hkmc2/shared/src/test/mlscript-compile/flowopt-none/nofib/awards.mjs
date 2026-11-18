const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const ltList$accessorSymbol = globalThis.Symbol("ltList");
const ltTup2$accessorSymbol = globalThis.Symbol("ltTup2");
const map$accessorSymbol = globalThis.Symbol("map");
const filter$accessorSymbol = globalThis.Symbol("filter");
const sum$accessorSymbol = globalThis.Symbol("sum");
const findawards$accessorSymbol = globalThis.Symbol("findawards");
const competitors$accessorSymbol = globalThis.Symbol("competitors");
const qsort_qpart_rqsort_rqpart$accessorSymbol = globalThis.Symbol("qsort_qpart_rqsort_rqpart");
let award, awards1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7;
lambda$7 = (undefined, function (awards2) {
  return (x) => {
    return lambda8(awards2, x)
  }
});
lambda8 = (undefined, function (awards2, x) {
  let tmp, inlinedVal, lambda$here, tmp1, inlinedVal1, tmp2;
  tmp2 = x / 100;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp2));
  tmp1 = 100 * inlinedVal1;
  inlinedVal = x - tmp1;
  tmp = awards2[competitors$accessorSymbol](inlinedVal);
  lambda$here = lambda$6(awards2);
  return awards2[map$accessorSymbol](lambda$here, tmp)
});
lambda$6 = (undefined, function (awards2) {
  return (caseScrut) => {
    return lambda7(awards2, caseScrut)
  }
});
lambda7 = (undefined, function (awards2, caseScrut) {
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
lambda$5 = (undefined, function (threshold) {
  return (caseScrut) => {
    return lambda6(threshold, caseScrut)
  }
});
lambda6 = (undefined, function (threshold, caseScrut) {
  let element0$;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    element0$ = runtime.Tuple.get(caseScrut, 0);
    runtime.Tuple.get(caseScrut, 1);
    return element0$ >= threshold
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (name) {
  return (ps) => {
    return globalThis.Object.freeze([
      name,
      ps
    ])
  }
});
lambda$3 = (undefined, function (awards2) {
  return (p) => {
    let tmp;
    tmp = awards2[sum$accessorSymbol](p);
    return globalThis.Object.freeze([
      tmp,
      p
    ])
  }
});
award = function award(awards2, sumscores, name_threshold) {
  let element1$, element0$, lambda$here;
  if (runtime.Tuple.isArrayLike(name_threshold) && name_threshold.length === 2) {
    let inlinedVal, lambda$here1, le, r, inlinedVal1;
    element0$ = runtime.Tuple.get(name_threshold, 0);
    element1$ = runtime.Tuple.get(name_threshold, 1);
    lambda$here1 = lambda$5(element1$);
    inlinedVal = awards2[filter$accessorSymbol](lambda$here1, sumscores);
    le = lambda$(awards2);
    r = NofibPrelude.Nil;
    inlinedVal1 = awards2[qsort_qpart_rqsort_rqpart$accessorSymbol](0, le, inlinedVal, r, undefined, undefined, undefined);
    lambda$here = lambda$4(element0$);
    return awards2[map$accessorSymbol](lambda$here, inlinedVal1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$2 = (undefined, function (n) {
  return (x) => {
    return NofibPrelude.Cons(n, x)
  }
});
lambda5 = (undefined, function (x) {
  return NofibPrelude.Cons(x, NofibPrelude.Nil)
});
lambda3 = (undefined, function (a, b) {
  return a < b
});
lambda4 = (undefined, function (a, b) {
  return a > b
});
lambda$1 = (undefined, function (awards2) {
  return (a, b) => {
    return awards2[ltList$accessorSymbol](a, b, lambda3, lambda4)
  }
});
lambda1 = (undefined, function (a, b) {
  return a < b
});
lambda2 = (undefined, function (a, b) {
  return a > b
});
lambda$ = (undefined, function (awards2) {
  return (a, b) => {
    let lambda$here;
    lambda$here = lambda$1(awards2);
    return awards2[ltTup2$accessorSymbol](a, b, lambda1, lambda2, lambda$here)
  }
});
lambda = (undefined, function (x, y) {
  return x == y
});
(class awards {
  static {
    awards1 = this
  }
  static get [qsort_qpart_rqsort_rqpart$accessorSymbol]() { return awards.#qsort_qpart_rqsort_rqpart; }
  static get [ltList$accessorSymbol]() { return awards.#ltList; }
  static get [ltTup2$accessorSymbol]() { return awards.#ltTup2; }
  static get [map$accessorSymbol]() { return awards.#map; }
  static get [filter$accessorSymbol]() { return awards.#filter; }
  static get [sum$accessorSymbol]() { return awards.#sum; }
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
  static #ltList(xs, ys, lt, gt) {
    loopLabel: while (true) {
      let scrut, scrut1, arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (xs instanceof NofibPrelude.Nil.class) {
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        }
        return true;
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (ys instanceof NofibPrelude.Nil.class) {
          return false
        } else if (ys instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = ys.head;
          arg$Cons$1$1 = ys.tail;
          scrut = runtime.safeCall(lt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut === true) {
            return true
          }
          scrut1 = runtime.safeCall(gt(arg$Cons$0$, arg$Cons$0$1));
          if (scrut1 === true) {
            return false
          }
          xs = arg$Cons$1$;
          ys = arg$Cons$1$1;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #ltTup2(t1, t2, lt1, gt1, lt2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(t1) && t1.length === 2) {
      element0$ = runtime.Tuple.get(t1, 0);
      element1$ = runtime.Tuple.get(t1, 1);
      if (runtime.Tuple.isArrayLike(t2) && t2.length === 2) {
        element0$1 = runtime.Tuple.get(t2, 0);
        element1$1 = runtime.Tuple.get(t2, 1);
        scrut = runtime.safeCall(lt1(element0$, element0$1));
        if (scrut === true) {
          return true
        }
        scrut1 = runtime.safeCall(gt1(element0$, element0$1));
        if (scrut1 === true) {
          return false
        }
        return runtime.safeCall(lt2(element1$, element1$1));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = awards.#map(f, arg$Cons$1$);
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
      tmp1 = awards.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
  }
  static #append(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = awards.#append(arg$Cons$1$, ys);
      return NofibPrelude.Cons(arg$Cons$0$, tmp)
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
          tmp = awards.#filter(f, arg$Cons$1$);
          return NofibPrelude.Cons(arg$Cons$0$, tmp)
        }
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #foldl(f, a, xs) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xs instanceof NofibPrelude.Nil.class) {
        return a
      } else if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        tmp = runtime.safeCall(f(a, arg$Cons$0$));
        a = tmp;
        xs = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #deleteBy(eq, x, ys) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp;
    if (ys instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ys instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ys.head;
      arg$Cons$1$ = ys.tail;
      scrut = runtime.safeCall(eq(x, arg$Cons$0$));
      if (scrut === true) {
        return arg$Cons$1$
      }
      tmp = awards.#deleteBy(eq, x, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sum(xs) {
    let xs1, a, inlinedVal;
    xs1 = xs;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (xs1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (xs1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = xs1.head;
          arg$Cons$1$ = xs1.tail;
          tmp = a + arg$Cons$0$;
          xs1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #delete_(xs, e) {
    return awards.#deleteBy(lambda, e, xs)
  }
  static #listDiff(a, ls) {
    return awards.#foldl(awards.#delete_, a, ls)
  }
  static #perms(m, nns) {
    let scrut, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, lambda$here;
    if (nns instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    scrut = m == 1;
    if (scrut === true) {
      return awards.#map(lambda5, nns)
    }
    if (nns instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = nns.head;
      arg$Cons$1$ = nns.tail;
      tmp = m - 1;
      tmp1 = awards.#perms(tmp, arg$Cons$1$);
      lambda$here = lambda$2(arg$Cons$0$);
      tmp2 = awards.#map(lambda$here, tmp1);
      tmp3 = awards.#perms(m, arg$Cons$1$);
      return awards.#append(tmp2, tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #awards(scores) {
    let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$here;
    tmp = awards.#perms(3, scores);
    lambda$here = lambda$3(awards);
    sumscores = awards.#map(lambda$here, tmp);
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
    tmp7 = awards.#append(tmp4, tmp6);
    return awards.#append(tmp2, tmp7)
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
  static #competitors(i) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40;
    tmp = NofibPrelude.Cons(21, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(34, tmp);
    tmp2 = NofibPrelude.Cons(i, tmp1);
    tmp3 = NofibPrelude.Cons(40, tmp2);
    tmp4 = NofibPrelude.Cons(27, tmp3);
    tmp5 = NofibPrelude.Cons(35, tmp4);
    tmp6 = globalThis.Object.freeze([
      "Simon",
      tmp5
    ]);
    tmp7 = NofibPrelude.Cons(14, NofibPrelude.Nil);
    tmp8 = NofibPrelude.Cons(8, tmp7);
    tmp9 = NofibPrelude.Cons(5, tmp8);
    tmp10 = NofibPrelude.Cons(10, tmp9);
    tmp11 = NofibPrelude.Cons(17, tmp10);
    tmp12 = NofibPrelude.Cons(i, tmp11);
    tmp13 = NofibPrelude.Cons(45, tmp12);
    tmp14 = NofibPrelude.Cons(19, tmp13);
    tmp15 = NofibPrelude.Cons(23, tmp14);
    tmp16 = globalThis.Object.freeze([
      "Hans",
      tmp15
    ]);
    tmp17 = NofibPrelude.Cons(21, NofibPrelude.Nil);
    tmp18 = NofibPrelude.Cons(16, tmp17);
    tmp19 = NofibPrelude.Cons(8, tmp18);
    tmp20 = NofibPrelude.Cons(34, tmp19);
    tmp21 = NofibPrelude.Cons(19, tmp20);
    tmp22 = NofibPrelude.Cons(21, tmp21);
    tmp23 = NofibPrelude.Cons(20, tmp22);
    tmp24 = NofibPrelude.Cons(i, tmp23);
    tmp25 = NofibPrelude.Cons(18, tmp24);
    tmp26 = NofibPrelude.Cons(1, tmp25);
    tmp27 = globalThis.Object.freeze([
      "Phil",
      tmp26
    ]);
    tmp28 = NofibPrelude.Cons(14, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(18, tmp28);
    tmp30 = NofibPrelude.Cons(9, tmp29);
    tmp31 = NofibPrelude.Cons(41, tmp30);
    tmp32 = NofibPrelude.Cons(i, tmp31);
    tmp33 = NofibPrelude.Cons(54, tmp32);
    tmp34 = NofibPrelude.Cons(17, tmp33);
    tmp35 = NofibPrelude.Cons(23, tmp34);
    tmp36 = NofibPrelude.Cons(9, tmp35);
    tmp37 = globalThis.Object.freeze([
      "Kevin",
      tmp36
    ]);
    tmp38 = NofibPrelude.Cons(tmp37, NofibPrelude.Nil);
    tmp39 = NofibPrelude.Cons(tmp27, tmp38);
    tmp40 = NofibPrelude.Cons(tmp16, tmp39);
    return NofibPrelude.Cons(tmp6, tmp40)
  }
  static #testAwards_nofib(n) {
    let tmp, lambda$here;
    tmp = awards.#enumFromTo(1, n);
    lambda$here = lambda$7(awards);
    return awards.#map(lambda$here, tmp)
  }
  static main() {
    return awards.#testAwards_nofib(100)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "awards"];
});
export default awards1;
