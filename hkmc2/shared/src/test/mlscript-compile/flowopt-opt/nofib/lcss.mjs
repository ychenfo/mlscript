const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const map$accessorSymbol = globalThis.Symbol("map");
const leave$accessorSymbol = globalThis.Symbol("leave");
const take$accessorSymbol = globalThis.Symbol("take");
const zip$accessorSymbol = globalThis.Symbol("zip");
const inList$accessorSymbol = globalThis.Symbol("inList");
const algb2$accessorSymbol = globalThis.Symbol("algb2");
const findk$accessorSymbol = globalThis.Symbol("findk");
let listcomp_fun, lcss1, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd, main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd1, main_testLCSS_nofib_lcssMain_lcss_algc$algc$worker;
main_testLCSS_nofib_lcssMain_lcss_algc$algc$worker = function main_testLCSS_nofib_lcssMain_lcss_algc$algc$worker(m, n, xs, ys, eta$0$0) {
  loopLabel: while (true) {
    let scrut, xs1, xs2, l1, l2, k, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (ys instanceof NofibPrelude.Nil.class) {
      return eta$0$0
    }
    {
      let inlinedVal, tmp7, inlinedVal1, inlinedVal2, tmp8, xss, yss, inlinedVal3, tmp9, xss1, yss1, inlinedVal4, inlinedVal5;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          scrut = lcss1[inList$accessorSymbol](arg$Cons$0$, ys);
          if (scrut === true) {
            return NofibPrelude.Cons(arg$Cons$0$, eta$0$0)
          }
          return eta$0$0;
        }
      }
      tmp7 = m / 2;
      inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp7));
      xs1 = lcss1[take$accessorSymbol](inlinedVal, xs);
      xs2 = lcss1[leave$accessorSymbol](inlinedVal, xs);
      tmp9 = listcomp_fun(ys);
      xss1 = xs1;
      yss1 = tmp9;
      inlinedLbl: {
        loopLabel1: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp10;
          if (xss1 instanceof NofibPrelude.Nil.class) {
            inlinedVal4 = lcss1[map$accessorSymbol](main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd, yss1);
            break inlinedLbl
          } else if (xss1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = xss1.head;
            arg$Cons$1$1 = xss1.tail;
            tmp10 = lcss1[algb2$accessorSymbol](arg$Cons$0$1, 0, 0, yss1);
            xss1 = arg$Cons$1$1;
            yss1 = tmp10;
            continue loopLabel1
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal1 = NofibPrelude.Cons(0, inlinedVal4);
      l1 = inlinedVal1;
      tmp = lcss1[reverse$accessorSymbol](xs2);
      tmp1 = lcss1[reverse$accessorSymbol](ys);
      tmp8 = listcomp_fun(tmp1);
      xss = tmp;
      yss = tmp8;
      inlinedLbl1: {
        loopLabel2: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1, tmp10;
          if (xss instanceof NofibPrelude.Nil.class) {
            inlinedVal3 = lcss1[map$accessorSymbol](main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd1, yss);
            break inlinedLbl1
          } else if (xss instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = xss.head;
            arg$Cons$1$1 = xss.tail;
            tmp10 = lcss1[algb2$accessorSymbol](arg$Cons$0$1, 0, 0, yss);
            xss = arg$Cons$1$1;
            yss = tmp10;
            continue loopLabel2
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      inlinedVal2 = NofibPrelude.Cons(0, inlinedVal3);
      l2 = lcss1[reverse$accessorSymbol](inlinedVal2);
      tmp2 = lcss1[zip$accessorSymbol](l1, l2);
      k = lcss1[findk$accessorSymbol](0, 0, -1, tmp2);
      tmp3 = lcss1[take$accessorSymbol](k, ys);
      tmp4 = m - inlinedVal;
      tmp5 = n - k;
      tmp6 = lcss1[leave$accessorSymbol](k, ys);
      inlinedVal5 = main_testLCSS_nofib_lcssMain_lcss_algc$algc$worker(tmp4, tmp5, xs2, tmp6, eta$0$0);
      m = inlinedVal;
      n = k;
      xs = xs1;
      ys = tmp3;
      eta$0$0 = inlinedVal5;
      continue loopLabel;
    }
  }
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    return runtime.Tuple.get(x, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd1 = function main_testLCSS_nofib_lcssMain_lcss_algc_algb_algb1_snd$snd(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    return runtime.Tuple.get(x, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
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
(class lcss {
  static {
    lcss1 = this
  }
  static get [reverse$accessorSymbol]() { return lcss.#reverse; }
  static get [map$accessorSymbol]() { return lcss.#map; }
  static get [leave$accessorSymbol]() { return lcss.#leave; }
  static get [take$accessorSymbol]() { return lcss.#take; }
  static get [zip$accessorSymbol]() { return lcss.#zip; }
  static get [inList$accessorSymbol]() { return lcss.#inList; }
  static get [algb2$accessorSymbol]() { return lcss.#algb2; }
  static get [findk$accessorSymbol]() { return lcss.#findk; }
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
  static main() {
    let tmp, tmp1, tmp2, tmp3, eta$0$0, inlinedVal;
    tmp = lcss1.#enumFromThenTo(1, 2, 60);
    tmp1 = lcss1.#enumFromThenTo(30, 31, 90);
    tmp2 = lcss1.#listLen(tmp);
    tmp3 = lcss1.#listLen(tmp1);
    eta$0$0 = NofibPrelude.Nil;
    inlinedVal = main_testLCSS_nofib_lcssMain_lcss_algc$algc$worker(tmp2, tmp3, tmp, tmp1, eta$0$0);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lcss"];
});
export default lcss1;
