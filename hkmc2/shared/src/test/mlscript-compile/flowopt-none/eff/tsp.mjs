const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const link$accessorSymbol = globalThis.Symbol("link");
const sameNd$accessorSymbol = globalThis.Symbol("sameNd");
const distance$accessorSymbol = globalThis.Symbol("distance");
let mkTree, mkTree1, uniform, median, build, drand48, rev, findMinDist, loop, findMin, choose, locateCycle, length, dist, cycle, tsp1, lambda, lambda$, build_mkTree_mkTree;
build_mkTree_mkTree = function build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, med, med1, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale;
            med = median(param0, param1, param5, param7, param2);
            tmp = build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, med, undefined);
            tmp1 = build_mkTree_mkTree(1, param0, param1, param2, param4, param6, med, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, med, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale;
            med1 = median(param0, param1, param4, param6, param2);
            tmp2 = build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, med1, undefined);
            tmp3 = build_mkTree_mkTree(2, param0, param1, param2, param5, param7, med1, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, med1, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
cycle = function cycle(tsp2, next, t) {
  let arg$ND$6$;
  if (t instanceof tsp2.ND.class) {
    arg$ND$6$ = t.next;
    return next === arg$ND$6$
  }
  return false;
};
dist = function dist(tsp2, ax, ay, bx, by) {
  let dx, dy, tmp, tmp1, tmp2;
  dx = ax - bx;
  dy = ay - by;
  tmp = dx * dx;
  tmp1 = dy * dy;
  tmp2 = tmp + tmp1;
  return runtime.safeCall(globalThis.Math.sqrt(tmp2))
};
length = function length(tsp2, x, y, next, t, px, py, n, len) {
  loopLabel: while (true) {
    let arg$ND$2$, arg$ND$3$, arg$ND$6$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof tsp2.NULL.class) {
      let dx, dy, tmp4, tmp5, tmp6, inlinedVal;
      dx = px - x;
      dy = py - y;
      tmp4 = dx * dx;
      tmp5 = dy * dy;
      tmp6 = tmp4 + tmp5;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(tmp6));
      tmp = len + inlinedVal;
      return globalThis.Object.freeze([
        n,
        tmp
      ])
    } else if (t instanceof tsp2.ND.class) {
      let tsp3, inlinedVal, arg$ND$6$1;
      arg$ND$2$ = t.x;
      arg$ND$3$ = t.y;
      arg$ND$6$ = t.next;
      tsp3 = tsp2;
      if (t instanceof tsp3.ND.class) {
        arg$ND$6$1 = t.next;
        inlinedVal = next === arg$ND$6$1;
      } else {
        inlinedVal = false;
      }
      if (inlinedVal === true) {
        let dx, dy, tmp4, tmp5, tmp6, inlinedVal1;
        dx = px - arg$ND$2$;
        dy = py - arg$ND$3$;
        tmp4 = dx * dx;
        tmp5 = dy * dy;
        tmp6 = tmp4 + tmp5;
        inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
        tmp1 = len + inlinedVal1;
        return globalThis.Object.freeze([
          n,
          tmp1
        ])
      }
      {
        let dx, dy, tmp4, tmp5, tmp6, inlinedVal1;
        tmp2 = n + 1;
        dx = px - arg$ND$2$;
        dy = py - arg$ND$3$;
        tmp4 = dx * dx;
        tmp5 = dy * dy;
        tmp6 = tmp4 + tmp5;
        inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
        tmp3 = len + inlinedVal1;
        t = arg$ND$6$.value;
        px = arg$ND$2$;
        py = arg$ND$3$;
        n = tmp2;
        len = tmp3;
        continue loopLabel;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
findMin = function findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return globalThis.Object.freeze([
          min,
          minDist
        ])
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
locateCycle = function locateCycle(tsp2, t, start) {
  let scrut, prev, next, minToNext, minToPrev, tToNext, tToPrev, scrut1, arg$ND$6$, element1$, element0$, arg$ND$5$, arg$ND$6$1, tmp, tmp1, tmp2;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$ = runtime.Tuple.get(scrut, 0);
      element1$ = runtime.Tuple.get(scrut, 1);
      if (element0$ instanceof tsp2.ND.class) {
        arg$ND$5$ = element0$.prev;
        arg$ND$6$1 = element0$.next;
        prev = arg$ND$5$.value;
        next = arg$ND$6$1.value;
        minToNext = tsp2[distance$accessorSymbol](element0$, next);
        minToPrev = tsp2[distance$accessorSymbol](element0$, prev);
        tToNext = tsp2[distance$accessorSymbol](t, next);
        tToPrev = tsp2[distance$accessorSymbol](t, prev);
        tmp1 = tToPrev - minToPrev;
        tmp2 = tToNext - minToNext;
        scrut1 = tmp1 < tmp2;
        if (scrut1 === true) {
          return globalThis.Object.freeze([
            prev,
            tToPrev,
            element0$,
            element1$
          ])
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          next,
          tToNext
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
choose = function choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return globalThis.Object.freeze([
      testChoice,
      test
    ])
  }
  return globalThis.Object.freeze([
    choice,
    minDist
  ]);
};
findMinDist = function findMinDist(tsp2, cycle1, t, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](cycle1, tmp);
      if (scrut === true) {
        return min
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop = function loop(tsp2, cycle1, cycle_next, t) {
  loopLabel: while (true) {
    let doNext, min, min_prev, min_next, minToNext, minToPrev, tToNext, tToPrev, scrut, arg$ND$6$, tmp, arg$ND$5$, arg$ND$6$1, tmp1, tmp2;
    if (t instanceof tsp2.NULL.class) {
      return runtime.Unit
    } else if (t instanceof tsp2.ND.class) {
      arg$ND$6$ = t.next;
      doNext = arg$ND$6$.value;
      tmp = tsp2[distance$accessorSymbol](t, cycle1);
      min = findMinDist(tsp2, cycle1, t, cycle1, tmp, cycle_next.value);
      if (min instanceof tsp2.ND.class) {
        arg$ND$5$ = min.prev;
        arg$ND$6$1 = min.next;
        min_prev = arg$ND$5$.value;
        min_next = arg$ND$6$1.value;
        minToNext = tsp2[distance$accessorSymbol](min, min_next);
        minToPrev = tsp2[distance$accessorSymbol](min, min_prev);
        tToNext = tsp2[distance$accessorSymbol](t, min_next);
        tToPrev = tsp2[distance$accessorSymbol](t, min_prev);
        tmp1 = tToPrev - minToPrev;
        tmp2 = tToNext - minToNext;
        scrut = tmp1 < tmp2;
        if (scrut === true) {
          tsp2[link$accessorSymbol](min_prev, t);
          tsp2[link$accessorSymbol](t, min);
          t = doNext;
          continue loopLabel
        }
        tsp2[link$accessorSymbol](min, t);
        tsp2[link$accessorSymbol](t, min_next);
        t = doNext;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
rev = function rev(tsp2, back, tmp) {
  loopLabel: while (true) {
    let tmp1, arg$ND$6$;
    if (tmp instanceof tsp2.NULL.class) {
      return runtime.Unit
    } else if (tmp instanceof tsp2.ND.class) {
      let receiver, arg$ND$5$;
      arg$ND$6$ = tmp.next;
      tmp1 = arg$ND$6$.value;
      arg$ND$6$.value = back;
      receiver = tsp2;
      if (back instanceof receiver.ND.class) {
        arg$ND$5$ = back.prev;
        arg$ND$5$.value = tmp;
        back = tmp;
        tmp = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
mkTree = function mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  return build_mkTree_mkTree(1, tsp2, rand, n, min_x, max_x, min, max, undefined)
};
mkTree1 = function mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  return build_mkTree_mkTree(2, tsp2, rand, n, min_y, max_y, min, max, undefined)
};
drand48 = function drand48(tsp2, rand) {
  let tmp, scale;
  tmp = runtime.safeCall(rand());
  scale = 1.0 / 2147483647.0;
  return scale * tmp
};
median = function median(tsp2, rand, min, max, n) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, inlinedVal, scale;
  tmp17 = runtime.safeCall(rand());
  scale = 1.0 / 2147483647.0;
  inlinedVal = scale * tmp17;
  scrut = inlinedVal > 0.5;
  if (scrut === true) {
    let inlinedVal1;
    tmp = 162754.79141900392083592475 - 1.0;
    tmp1 = 2.0 * tmp;
    tmp2 = inlinedVal - 0.5;
    tmp3 = tmp1 * tmp2;
    tmp4 = tmp3 / 162754.79141900392083592475;
    tmp5 = 1.0 - tmp4;
    inlinedVal1 = runtime.safeCall(globalThis.Math.log(tmp5));
    tmp6 = inlinedVal1 / 12.0;
  } else {
    let inlinedVal1;
    tmp7 = 162754.79141900392083592475 - 1.0;
    tmp8 = 2.0 * tmp7;
    tmp9 = tmp8 * inlinedVal;
    tmp10 = tmp9 / 162754.79141900392083592475;
    tmp11 = 1.0 - tmp10;
    inlinedVal1 = runtime.safeCall(globalThis.Math.log(tmp11));
    tmp12 = inlinedVal1 / 12.0;
    tmp6 = - tmp12;
  }
  tmp13 = tmp6 + 1.0;
  tmp14 = max - min;
  tmp15 = tmp13 * tmp14;
  tmp16 = tmp15 / 2.0;
  return min + tmp16
};
uniform = function uniform(tsp2, rand, min, max) {
  let tmp, tmp1, tmp2, inlinedVal, scale;
  tmp2 = runtime.safeCall(rand());
  scale = 1.0 / 2147483647.0;
  inlinedVal = scale * tmp2;
  tmp = max - min;
  tmp1 = inlinedVal * tmp;
  return min + tmp1
};
build = function build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  return build_mkTree_mkTree(0, tsp2, rand, n, dir, min_x, min_y, max_x, max_y)
};
lambda$ = (undefined, function (tsp2, seedRef) {
  return () => {
    return lambda(tsp2, seedRef)
  }
});
lambda = (undefined, function (tsp2, seedRef) {
  let seed, inlinedVal, test, scrut, tmp, tmp1, inlinedVal1, inlinedVal2, tmp2, tmp3, inlinedVal3, tmp4;
  seed = seedRef.value;
  tmp3 = seed / 44488;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp3));
  tmp4 = seed / 44488;
  inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp4));
  tmp2 = 44488 * inlinedVal3;
  inlinedVal2 = seed - tmp2;
  tmp = 48271 * inlinedVal2;
  tmp1 = 3399 * inlinedVal1;
  test = tmp - tmp1;
  scrut = test > 0;
  if (scrut === true) {
    inlinedVal = test;
  } else {
    inlinedVal = test + 2147483647;
  }
  seedRef.value = inlinedVal;
  return seedRef.value
});
(class tsp {
  static {
    tsp1 = this
  }
  static get [link$accessorSymbol]() { return tsp.#link; }
  static get [sameNd$accessorSymbol]() { return tsp.#sameNd; }
  static get [distance$accessorSymbol]() { return tsp.#distance; }
  static {
    tsp.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        tsp.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class NULL {
      static {
        new this
      }
      constructor() {
        tsp.NULL = this;
        Object.defineProperty(this, "class", {
          value: NULL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NULL"];
    });
    tsp.ND = function ND(left, right, x, y, sz, prev, next) {
      return globalThis.Object.freeze(new ND.class(left, right, x, y, sz, prev, next));
    };
    (class ND {
      static {
        tsp.ND.class = this
      }
      constructor(left, right, x, y, sz, prev, next) {
        this.left = left;
        this.right = right;
        this.x = x;
        this.y = y;
        this.sz = sz;
        this.prev = prev;
        this.next = next;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ND", ["left", "right", "x", "y", "sz", "prev", "next"]];
    });
    (class X_AXIS {
      static {
        new this
      }
      constructor() {
        tsp.X_AXIS = this;
        Object.defineProperty(this, "class", {
          value: X_AXIS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X_AXIS"];
    });
    (class Y_AXIS {
      static {
        new this
      }
      constructor() {
        tsp.Y_AXIS = this;
        Object.defineProperty(this, "class", {
          value: Y_AXIS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Y_AXIS"];
    });
  }
  static #sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static #ln(x) {
    return runtime.safeCall(globalThis.Math.log(x))
  }
  static #intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  }
  static #intMod(a, b) {
    let tmp, tmp1;
    tmp = tsp.#intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static #chk(seed) {
    let scrut, scrut1;
    scrut = seed <= 0;
    if (scrut === true) {
      return 1
    }
    scrut1 = seed > 2147483646;
    if (scrut1 === true) {
      return 2147483646
    }
    return seed;
  }
  static #random_(seed) {
    let hi, lo, test, scrut, tmp, tmp1;
    hi = tsp.#intDiv(seed, 44488);
    lo = tsp.#intMod(seed, 44488);
    tmp = 48271 * lo;
    tmp1 = 3399 * hi;
    test = tmp - tmp1;
    scrut = test > 0;
    if (scrut === true) {
      return test
    }
    return test + 2147483647;
  }
  static #mkRandom(seed) {
    let seedRef, tmp;
    tmp = tsp.#chk(seed);
    seedRef = new tsp.Ref.class(tmp);
    return lambda$(tsp, seedRef)
  }
  static #norm(s) {
    let scale;
    scale = 1.0 / 2147483647.0;
    return scale * s
  }
  static #mkNode(l, r, x, y, sz) {
    let tmp, tmp1;
    tmp = new tsp.Ref.class(tsp.NULL);
    tmp1 = new tsp.Ref.class(tsp.NULL);
    return tsp.ND(l, r, x, y, sz, tmp, tmp1)
  }
  static #buildTree(n, dir, min_x, min_y, max_x, max_y) {
    let rand;
    rand = tsp.#mkRandom(314);
    return build_mkTree_mkTree(0, tsp, rand, n, dir, min_x, min_y, max_x, max_y)
  }
  static #setPrev(nd, x) {
    let arg$ND$5$;
    if (nd instanceof tsp.ND.class) {
      arg$ND$5$ = nd.prev;
      arg$ND$5$.value = x;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #setNext(nd, x) {
    let arg$ND$6$;
    if (nd instanceof tsp.ND.class) {
      arg$ND$6$ = nd.next;
      arg$ND$6$.value = x;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #link(a, b) {
    let arg$ND$6$, arg$ND$5$;
    if (a instanceof tsp.ND.class) {
      arg$ND$6$ = a.next;
      if (b instanceof tsp.ND.class) {
        arg$ND$5$ = b.prev;
        arg$ND$6$.value = b;
        arg$ND$5$.value = a;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sameNd(a, b) {
    let arg$ND$6$, arg$ND$6$1;
    if (a instanceof tsp.ND.class) {
      arg$ND$6$ = a.next;
      if (b instanceof tsp.ND.class) {
        arg$ND$6$1 = b.next;
        return arg$ND$6$ === arg$ND$6$1
      }
      return false;
    } else if (a instanceof tsp.NULL.class) {
      if (b instanceof tsp.NULL.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #distance(a, b) {
    let arg$ND$2$, arg$ND$3$, arg$ND$2$1, arg$ND$3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (a instanceof tsp.ND.class) {
      arg$ND$2$ = a.x;
      arg$ND$3$ = a.y;
      if (b instanceof tsp.ND.class) {
        arg$ND$2$1 = b.x;
        arg$ND$3$1 = b.y;
        tmp = arg$ND$2$ - arg$ND$2$1;
        tmp1 = arg$ND$2$ - arg$ND$2$1;
        tmp2 = tmp * tmp1;
        tmp3 = arg$ND$3$ - arg$ND$3$1;
        tmp4 = arg$ND$3$ - arg$ND$3$1;
        tmp5 = tmp3 * tmp4;
        tmp6 = tmp2 + tmp5;
        return tsp.#sqrt(tmp6)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #makeList(t) {
    let l, r, arg$ND$0$, arg$ND$1$, arg$ND$6$, tmp;
    if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    } else if (t instanceof tsp.ND.class) {
      arg$ND$0$ = t.left;
      arg$ND$1$ = t.right;
      arg$ND$6$ = t.next;
      l = tsp.#makeList(arg$ND$0$);
      r = tsp.#makeList(arg$ND$1$);
      if (l instanceof tsp.NULL.class) {
        if (r instanceof tsp.NULL.class) {
          tmp = t;
        } else if (r instanceof tsp.ND.class) {
          tsp.#setNext(arg$ND$1$, t);
          tmp = r;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (l instanceof tsp.ND.class) {
        if (r instanceof tsp.NULL.class) {
          tsp.#setNext(arg$ND$0$, t);
          tmp = l;
        } else if (r instanceof tsp.ND.class) {
          tsp.#setNext(arg$ND$1$, t);
          tsp.#setNext(arg$ND$0$, r);
          tmp = l;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      arg$ND$6$.value = tsp.NULL;
      return tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(t) {
    let arg$ND$5$, arg$ND$6$;
    if (t instanceof tsp.NULL.class) {
      return runtime.Unit
    } else if (t instanceof tsp.ND.class) {
      arg$ND$5$ = t.prev;
      arg$ND$6$ = t.next;
      tsp.#setNext(arg$ND$5$.value, tsp.NULL);
      arg$ND$5$.value = tsp.NULL;
      return rev(tsp, t, arg$ND$6$.value)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #conquer(t) {
    let cycle1, t1, arg$ND$5$, arg$ND$6$;
    if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    cycle1 = tsp.#makeList(t);
    if (cycle1 instanceof tsp.ND.class) {
      arg$ND$5$ = cycle1.prev;
      arg$ND$6$ = cycle1.next;
      t1 = arg$ND$6$.value;
      arg$ND$6$.value = cycle1;
      arg$ND$5$.value = cycle1;
      loop(tsp, cycle1, arg$ND$6$, t1);
      return cycle1
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #merge(a, b, t) {
    let scrut, n1ToN2, n1ToP2, p1ToN2, p1ToP2, minDist0, scrut1, element3$, element2$, element1$, element0$, element3$1, element2$1, element1$1, element0$1, tmp, element1$2, element0$2, element1$3, element0$3, element0$4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (a instanceof tsp.ND.class) {
      scrut = locateCycle(tsp, t, a);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        element3$ = runtime.Tuple.get(scrut, 3);
        scrut1 = locateCycle(tsp, t, b);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 4) {
          let inlinedVal, scrut2;
          element0$1 = runtime.Tuple.get(scrut1, 0);
          element1$1 = runtime.Tuple.get(scrut1, 1);
          element2$1 = runtime.Tuple.get(scrut1, 2);
          element3$1 = runtime.Tuple.get(scrut1, 3);
          n1ToN2 = tsp.#distance(element2$, element2$1);
          n1ToP2 = tsp.#distance(element2$, element0$1);
          p1ToN2 = tsp.#distance(element0$, element2$1);
          p1ToP2 = tsp.#distance(element0$, element0$1);
          tmp = element1$ + element1$1;
          minDist0 = tmp + n1ToN2;
          tmp1 = element1$ + element3$1;
          tmp2 = tmp1 + n1ToP2;
          scrut2 = tmp2 < minDist0;
          if (scrut2 === true) {
            inlinedVal = globalThis.Object.freeze([
              2,
              tmp2
            ]);
          } else {
            inlinedVal = globalThis.Object.freeze([
              1,
              minDist0
            ]);
          }
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
            let inlinedVal1, scrut3;
            element0$2 = runtime.Tuple.get(inlinedVal, 0);
            element1$2 = runtime.Tuple.get(inlinedVal, 1);
            tmp3 = element3$ + element1$1;
            tmp4 = tmp3 + p1ToN2;
            scrut3 = tmp4 < element1$2;
            if (scrut3 === true) {
              inlinedVal1 = globalThis.Object.freeze([
                3,
                tmp4
              ]);
            } else {
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2
              ]);
            }
            if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
              let inlinedVal2, scrut4;
              element0$3 = runtime.Tuple.get(inlinedVal1, 0);
              element1$3 = runtime.Tuple.get(inlinedVal1, 1);
              tmp5 = element3$ + element3$1;
              tmp6 = tmp5 + p1ToP2;
              scrut4 = tmp6 < element1$3;
              if (scrut4 === true) {
                inlinedVal2 = globalThis.Object.freeze([
                  4,
                  tmp6
                ]);
              } else {
                inlinedVal2 = globalThis.Object.freeze([
                  element0$3,
                  element1$3
                ]);
              }
              if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                element0$4 = runtime.Tuple.get(inlinedVal2, 0);
                runtime.Tuple.get(inlinedVal2, 1);
                switch (element0$4) {
                  case 1:
                    tsp.#reverse(element2$1);
                    tsp.#link(element0$, t);
                    tsp.#link(t, element0$1);
                    tsp.#link(element2$1, element2$);
                    return t;
                  case 2:
                    tsp.#link(element0$, t);
                    tsp.#link(t, element2$1);
                    tsp.#link(element0$1, element2$);
                    return t;
                  case 3:
                    tsp.#link(element0$1, t);
                    tsp.#link(t, element2$);
                    tsp.#link(element0$, element2$1);
                    return t;
                }
                tsp.#reverse(element2$);
                tsp.#link(element2$, t);
                tsp.#link(t, element2$1);
                tsp.#link(element0$1, element0$);
                return t
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
  static #tsp(t, sz) {
    let scrut, arg$ND$0$, arg$ND$1$, arg$ND$4$, tmp, tmp1;
    if (t instanceof tsp.ND.class) {
      arg$ND$0$ = t.left;
      arg$ND$1$ = t.right;
      arg$ND$4$ = t.sz;
      scrut = arg$ND$4$ <= sz;
      if (scrut === true) {
        return tsp.#conquer(t)
      }
      tmp = tsp.#tsp(arg$ND$0$, sz);
      tmp1 = tsp.#tsp(arg$ND$1$, sz);
      return tsp.#merge(tmp, tmp1, t);
    } else if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mkTree(n) {
    return tsp.#buildTree(n, tsp.X_AXIS, 0.0, 1.0, 0.0, 1.0)
  }
  static #doit(n, divideSz) {
    let tmp;
    tmp = tsp.#mkTree(n);
    return tsp.#tsp(tmp, divideSz)
  }
  static #tourLength(start) {
    let arg$ND$2$, arg$ND$3$, arg$ND$6$;
    if (start instanceof tsp.NULL.class) {
      return globalThis.Object.freeze([
        0,
        0.0
      ])
    } else if (start instanceof tsp.ND.class) {
      let tsp2, t, inlinedVal, arg$ND$6$1;
      arg$ND$2$ = start.x;
      arg$ND$3$ = start.y;
      arg$ND$6$ = start.next;
      tsp2 = tsp;
      t = arg$ND$6$.value;
      if (t instanceof tsp2.ND.class) {
        arg$ND$6$1 = t.next;
        inlinedVal = arg$ND$6$ === arg$ND$6$1;
        if (inlinedVal === true) {
          return globalThis.Object.freeze([
            1,
            0.0
          ])
        }
        return length(tsp, arg$ND$2$, arg$ND$3$, arg$ND$6$, arg$ND$6$.value, arg$ND$2$, arg$ND$3$, 1, 0.0);
      }
      return length(tsp, arg$ND$2$, arg$ND$3$, arg$ND$6$, arg$ND$6$.value, arg$ND$2$, arg$ND$3$, 1, 0.0);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp;
    tmp = tsp.#doit(255, 150);
    return tsp.#tourLength(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tsp"];
});
export { mkTree as _$_modulePrivate_$_mkTree };
export { mkTree1 as _$_modulePrivate_$_mkTree1 };
export { uniform as _$_modulePrivate_$_uniform };
export { median as _$_modulePrivate_$_median };
export { build as _$_modulePrivate_$_build };
export { drand48 as _$_modulePrivate_$_drand48 };
export { rev as _$_modulePrivate_$_rev };
export { findMinDist as _$_modulePrivate_$_findMinDist };
export { loop as _$_modulePrivate_$_loop };
export { findMin as _$_modulePrivate_$_findMin };
export { choose as _$_modulePrivate_$_choose };
export { locateCycle as _$_modulePrivate_$_locateCycle };
export { length as _$_modulePrivate_$_length };
export { dist as _$_modulePrivate_$_dist };
export { cycle as _$_modulePrivate_$_cycle };
export { tsp1 as _$_modulePrivate_$_tsp };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { build_mkTree_mkTree as _$_modulePrivate_$_build_mkTree_mkTree };
export default tsp1;
