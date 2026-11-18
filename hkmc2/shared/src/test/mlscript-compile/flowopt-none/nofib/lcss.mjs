const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
let listcomp_fun, lcss1, lambda, lambda1, lambda$, lambda$1;
lambda1 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (x) {
  return (t) => {
    return NofibPrelude.Cons(x, t)
  }
});
lambda = (undefined, function (x) {
  return x
});
listcomp_fun = function listcomp_fun(listcomp_fun_para) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (listcomp_fun_para instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = listcomp_fun_para.head;
    arg$Cons$1$ = listcomp_fun_para.tail;
    tmp = globalThis.Object.freeze([
      arg$Cons$0$,
      0
    ]);
    tmp1 = listcomp_fun(arg$Cons$1$);
    return NofibPrelude.Cons(tmp, tmp1)
  } else if (listcomp_fun_para instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (f, g) {
  return (x) => {
    let tmp;
    tmp = runtime.safeCall(g(x));
    return runtime.safeCall(f(tmp))
  }
});
(class lcss {
  static {
    lcss1 = this
  }
  static #compose(f, g) {
    return lambda$(f, g)
  }
  static #snd(x) {
    if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
      runtime.Tuple.get(x, 0);
      return runtime.Tuple.get(x, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(l) {
    let l$_, l1, inlinedVal;
    l$_ = NofibPrelude.Nil;
    l1 = l;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$0$, arg$Cons$1$, tmp;
        if (l1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$ = l1.head;
          arg$Cons$1$ = l1.tail;
          tmp = NofibPrelude.Cons(arg$Cons$0$, l$_);
          l$_ = tmp;
          l1 = arg$Cons$1$;
          continue loopLabel
        }
        inlinedVal = l$_;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #map(f, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = lcss.#map(f, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listLen(ls) {
    let ls1, a, inlinedVal;
    ls1 = ls;
    a = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let arg$Cons$1$, tmp;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          inlinedVal = a;
          break inlinedLbl
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          arg$Cons$1$ = ls1.tail;
          tmp = a + 1;
          ls1 = arg$Cons$1$;
          a = tmp;
          continue loopLabel
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #enumFromThenTo(a, t, b) {
    let scrut, tmp, tmp1, tmp2;
    scrut = a <= b;
    if (scrut === true) {
      tmp = 2 * t;
      tmp1 = tmp - a;
      tmp2 = lcss.#enumFromThenTo(t, tmp1, b);
      return NofibPrelude.Cons(a, tmp2)
    }
    return NofibPrelude.Nil;
  }
  static #leave(n, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$1$, tmp;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$1$ = ls.tail;
        scrut = n <= 0;
        if (scrut === true) {
          return ls
        }
        tmp = n - 1;
        n = tmp;
        ls = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
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
      tmp1 = lcss.#take(tmp, arg$Cons$1$);
      return NofibPrelude.Cons(arg$Cons$0$, tmp1);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #zip(xs, ys) {
    let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      if (ys instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$1 = ys.head;
        arg$Cons$1$1 = ys.tail;
        tmp = globalThis.Object.freeze([
          arg$Cons$0$,
          arg$Cons$0$1
        ]);
        tmp1 = lcss.#zip(arg$Cons$1$, arg$Cons$1$1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
      return NofibPrelude.Nil;
    }
    return NofibPrelude.Nil;
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
  static #algb2(x, k0j1, k1j1, yss) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2;
    if (yss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (yss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = yss.head;
      arg$Cons$1$ = yss.tail;
      if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
        element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
        scrut = x == element0$;
        if (scrut === true) {
          tmp = k0j1 + 1;
        } else {
          let inlinedVal;
          inlinedVal = runtime.safeCall(globalThis.Math.max(k1j1, element1$));
          tmp = inlinedVal;
        }
        tmp1 = globalThis.Object.freeze([
          element0$,
          tmp
        ]);
        tmp2 = lcss.#algb2(x, element1$, tmp, arg$Cons$1$);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #algb1(xss, yss) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (xss instanceof NofibPrelude.Nil.class) {
        return lcss.#map(lcss.#snd, yss)
      } else if (xss instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xss.head;
        arg$Cons$1$ = xss.tail;
        tmp = lcss.#algb2(arg$Cons$0$, 0, 0, yss);
        xss = arg$Cons$1$;
        yss = tmp;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #algb(xs, ys) {
    let tmp, tmp1;
    tmp = listcomp_fun(ys);
    tmp1 = lcss.#algb1(xs, tmp);
    return NofibPrelude.Cons(0, tmp1)
  }
  static #findk(k, km, m, ls) {
    loopLabel: while (true) {
      let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
      if (ls instanceof NofibPrelude.Nil.class) {
        return km
      } else if (ls instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = ls.head;
        arg$Cons$1$ = ls.tail;
        if (runtime.Tuple.isArrayLike(arg$Cons$0$) && arg$Cons$0$.length === 2) {
          element0$ = runtime.Tuple.get(arg$Cons$0$, 0);
          element1$ = runtime.Tuple.get(arg$Cons$0$, 1);
          tmp = element0$ + element1$;
          scrut = tmp >= m;
          if (scrut === true) {
            let k_tmp;
            tmp1 = k + 1;
            tmp2 = element0$ + element1$;
            k_tmp = k;
            k = tmp1;
            km = k_tmp;
            m = tmp2;
            ls = arg$Cons$1$;
            continue loopLabel
          }
          tmp3 = k + 1;
          k = tmp3;
          ls = arg$Cons$1$;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #algc(m, n, xs, ys) {
    let scrut, xs1, xs2, l1, l2, k, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (ys instanceof NofibPrelude.Nil.class) {
      return lambda
    }
    {
      let inlinedVal, tmp10;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          scrut = lcss.#inList(arg$Cons$0$, ys);
          if (scrut === true) {
            return lambda$1(arg$Cons$0$)
          }
          return lambda1;
        }
      }
      tmp10 = m / 2;
      inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp10));
      xs1 = lcss.#take(inlinedVal, xs);
      xs2 = lcss.#leave(inlinedVal, xs);
      l1 = lcss.#algb(xs1, ys);
      tmp = lcss.#reverse(xs2);
      tmp1 = lcss.#reverse(ys);
      tmp2 = lcss.#algb(tmp, tmp1);
      l2 = lcss.#reverse(tmp2);
      tmp3 = lcss.#zip(l1, l2);
      k = lcss.#findk(0, 0, -1, tmp3);
      tmp4 = lcss.#take(k, ys);
      tmp5 = lcss.#algc(inlinedVal, k, xs1, tmp4);
      tmp6 = m - inlinedVal;
      tmp7 = n - k;
      tmp8 = lcss.#leave(k, ys);
      tmp9 = lcss.#algc(tmp6, tmp7, xs2, tmp8);
      return lcss.#compose(tmp5, tmp9);
    }
  }
  static #lcss(xs, ys) {
    let tmp, tmp1, baseCall;
    tmp = lcss.#listLen(xs);
    tmp1 = lcss.#listLen(ys);
    baseCall = lcss.#algc(tmp, tmp1, xs, ys);
    return runtime.safeCall(baseCall(NofibPrelude.Nil))
  }
  static #lcssMain(a, b, c, d, e, f) {
    let tmp, tmp1;
    tmp = lcss.#enumFromThenTo(a, b, c);
    tmp1 = lcss.#enumFromThenTo(d, e, f);
    return lcss.#lcss(tmp, tmp1)
  }
  static #testLCSS_nofib(d) {
    return lcss.#lcssMain(1, 2, 60, 30, 31, 90)
  }
  static main() {
    let tmp;
    tmp = lcss.#testLCSS_nofib(0);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lcss"];
});
export default lcss1;
