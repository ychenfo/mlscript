const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_r as r } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_l as l } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$ as lambda$ } from "./NofibPrelude.mjs";
let listcomp_fun, lcss1, lambda, lambda1, lambda2, lambda$1;
lambda2 = (undefined, function (x) {
  return x
});
lambda$1 = (undefined, function (x) {
  return (t) => {
    return NofibPrelude.Cons(x, t)
  }
});
lambda1 = (undefined, function (x, t) {
  return NofibPrelude.Cons(x, t)
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
(class lcss {
  static {
    lcss1 = this
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
        return NofibPrelude.map(NofibPrelude.snd, yss)
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
    let scrut, xs1, xs2, l1, k, arg$Cons$0$, arg$Cons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (ys instanceof NofibPrelude.Nil.class) {
      return lambda
    }
    {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, f, g, tmp8;
      if (xs instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = xs.head;
        arg$Cons$1$ = xs.tail;
        if (arg$Cons$1$ instanceof NofibPrelude.Nil.class) {
          scrut = NofibPrelude.inList(arg$Cons$0$, ys);
          if (scrut === true) {
            return lambda$1(arg$Cons$0$)
          }
          return lambda2;
        }
      }
      tmp8 = m / 2;
      inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp8));
      xs1 = NofibPrelude.take(inlinedVal, xs);
      xs2 = NofibPrelude.leave(inlinedVal, xs);
      l1 = lcss.#algb(xs1, ys);
      inlinedVal1 = r(NofibPrelude, NofibPrelude.Nil, xs2);
      inlinedVal2 = r(NofibPrelude, NofibPrelude.Nil, ys);
      tmp = lcss.#algb(inlinedVal1, inlinedVal2);
      inlinedVal3 = r(NofibPrelude, NofibPrelude.Nil, tmp);
      tmp1 = NofibPrelude.zip(l1, inlinedVal3);
      k = lcss.#findk(0, 0, -1, tmp1);
      tmp2 = NofibPrelude.take(k, ys);
      tmp3 = lcss.#algc(inlinedVal, k, xs1, tmp2);
      tmp4 = m - inlinedVal;
      tmp5 = n - k;
      tmp6 = NofibPrelude.leave(k, ys);
      tmp7 = lcss.#algc(tmp4, tmp5, xs2, tmp6);
      f = tmp3;
      g = tmp7;
      return lambda$(f, g);
    }
  }
  static #lcss(xs, ys) {
    let baseCall, inlinedVal, inlinedVal1;
    inlinedVal = l(NofibPrelude, xs, 0);
    inlinedVal1 = l(NofibPrelude, ys, 0);
    baseCall = lcss.#algc(inlinedVal, inlinedVal1, xs, ys);
    return runtime.safeCall(baseCall(NofibPrelude.Nil))
  }
  static #lcssMain(a, b, c, d, e, f) {
    let tmp, tmp1;
    tmp = NofibPrelude.enumFromThenTo(a, b, c);
    tmp1 = NofibPrelude.enumFromThenTo(d, e, f);
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
export { listcomp_fun as _$_modulePrivate_$_listcomp_fun };
export { lcss1 as _$_modulePrivate_$_lcss };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda$1 as _$_modulePrivate_$_lambda$ };
export default lcss1;
