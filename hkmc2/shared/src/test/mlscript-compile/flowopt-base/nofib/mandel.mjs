const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
import { _$_modulePrivate_$_lambda$3 as lambda$ } from "./NofibPrelude.mjs";
import { _$_modulePrivate_$_lambda$7 as lambda$1 } from "./NofibPrelude.mjs";
const comp_magnitude$accessorSymbol = globalThis.Symbol("comp_magnitude");
const comp_times$accessorSymbol = globalThis.Symbol("comp_times");
const comp_plus$accessorSymbol = globalThis.Symbol("comp_plus");
let infiniteMandel, walkIt, lscomp2, windowToViewport, lscomp1, prettyRGB, mandel1, lambda, lambda1, lambda2, lambda$2, lambda$3, lambda$4, prettyRGB$, lscomp1_lscomp2;
lscomp1_lscomp2 = function lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param7 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param7 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param7.head;
            arg$Cons$1$ = param7.tail;
            tmp = NofibPrelude.enumFromTo(1, param5);
            param7 = arg$Cons$0$;
            param8 = arg$Cons$1$;
            param9 = tmp;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp;
          if (param9 instanceof NofibPrelude.Nil.class) {
            param7 = param8;
            id = 0;
            continue loopLabel
          } else if (param9 instanceof NofibPrelude.Cons.class) {
            let inlinedVal, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
            arg$Cons$0$ = param9.head;
            arg$Cons$1$ = param9.tail;
            tmp1 = param3 - param1;
            tmp2 = arg$Cons$0$ * tmp1;
            tmp3 = tmp2 / param5;
            tmp4 = param1 + tmp3;
            tmp5 = param4 - param2;
            tmp6 = param7 * tmp5;
            tmp7 = tmp6 / param6;
            tmp8 = param2 + tmp7;
            inlinedVal = param0.Complex(tmp4, tmp8);
            tmp = lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, param7, param8, arg$Cons$1$);
            return NofibPrelude.Cons(inlinedVal, tmp)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
prettyRGB$ = function prettyRGB$(lIMIT) {
  return (s) => {
    let t;
    t = lIMIT - s;
    return globalThis.Object.freeze([
      s,
      t,
      t
    ])
  }
};
lscomp2 = function lscomp2(mandel2, x, y, x_, y_, screenX, screenY, t, t1, ls2) {
  return lscomp1_lscomp2(1, mandel2, x, y, x_, y_, screenX, screenY, t, t1, ls2)
};
prettyRGB = function prettyRGB(lIMIT, s) {
  let t;
  t = lIMIT - s;
  return globalThis.Object.freeze([
    s,
    t,
    t
  ])
};
windowToViewport = function windowToViewport(mandel2, x, y, x_, y_, screenX, screenY, s, t) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = x_ - x;
  tmp1 = s * tmp;
  tmp2 = tmp1 / screenX;
  tmp3 = x + tmp2;
  tmp4 = y_ - y;
  tmp5 = t * tmp4;
  tmp6 = tmp5 / screenY;
  tmp7 = y + tmp6;
  return mandel2.Complex(tmp3, tmp7)
};
lscomp1 = function lscomp1(mandel2, x, y, x_, y_, screenX, screenY, ls1) {
  return lscomp1_lscomp2(0, mandel2, x, y, x_, y_, screenX, screenY, ls1, undefined, undefined)
};
lambda$4 = (undefined, function (mandel2, limit, radius) {
  return (c) => {
    return lambda2(mandel2, limit, radius, c)
  }
});
lambda2 = (undefined, function (mandel2, limit, radius, c) {
  let inlinedVal, inlinedVal1;
  inlinedVal = infiniteMandel(mandel2, c);
  inlinedVal1 = NofibPrelude.Lazy(lambda$1(NofibPrelude, limit, inlinedVal));
  return walkIt(mandel2, radius, inlinedVal1)
});
walkIt = function walkIt(mandel2, radius, ls) {
  let arg$LzCons$0$, arg$LzCons$1$, tmp, inlinedVal;
  if (ls instanceof NofibPrelude.Lazy.class) {
    inlinedVal = ls.get();
    if (inlinedVal instanceof NofibPrelude.LzNil.class) {
      return 0
    } else if (inlinedVal instanceof NofibPrelude.LzCons.class) {
      let inlinedVal1, tmp1;
      arg$LzCons$0$ = inlinedVal.head;
      arg$LzCons$1$ = inlinedVal.tail;
      tmp1 = mandel2[comp_magnitude$accessorSymbol](arg$LzCons$0$);
      inlinedVal1 = tmp1 > radius;
      if (inlinedVal1 === true) {
        return 0
      }
      tmp = walkIt(mandel2, radius, arg$LzCons$1$);
      return 1 + tmp;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$3 = (undefined, function (mandel2, c) {
  return (z) => {
    let tmp;
    tmp = mandel2[comp_times$accessorSymbol](z, z);
    return mandel2[comp_plus$accessorSymbol](tmp, c)
  }
});
lambda = (undefined, function (mandel2, c, z) {
  let tmp;
  tmp = mandel2[comp_times$accessorSymbol](z, z);
  return mandel2[comp_plus$accessorSymbol](tmp, c)
});
lambda$2 = (undefined, function (mandel2, c) {
  return () => {
    return lambda1(mandel2, c)
  }
});
lambda1 = (undefined, function (mandel2, c) {
  let tmp, f, inlinedVal;
  tmp = infiniteMandel(mandel2, c);
  f = lambda$3(mandel2, c);
  inlinedVal = NofibPrelude.Lazy(lambda$(NofibPrelude, f, tmp));
  return NofibPrelude.LzCons(c, inlinedVal)
});
infiniteMandel = function infiniteMandel(mandel2, c) {
  return NofibPrelude.Lazy(lambda$2(mandel2, c))
};
(class mandel {
  static {
    mandel1 = this
  }
  static get [comp_magnitude$accessorSymbol]() { return mandel.#comp_magnitude; }
  static get [comp_times$accessorSymbol]() { return mandel.#comp_times; }
  static get [comp_plus$accessorSymbol]() { return mandel.#comp_plus; }
  static {
    mandel.Pixmap = function Pixmap(a, b, c, d) {
      return globalThis.Object.freeze(new Pixmap.class(a, b, c, d));
    };
    (class Pixmap {
      static {
        mandel.Pixmap.class = this
      }
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Pixmap", ["a", "b", "c", "d"]];
    });
    mandel.Complex = function Complex(r, i) {
      return globalThis.Object.freeze(new Complex.class(r, i));
    };
    (class Complex {
      static {
        mandel.Complex.class = this
      }
      constructor(r, i) {
        this.r = r;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Complex", ["r", "i"]];
    });
  }
  static #createPixmap(width, height, max, colours) {
    return mandel.Pixmap(width, height, max, colours)
  }
  static #comp_magnitude(c) {
    let arg$Complex$0$, arg$Complex$1$, tmp, tmp1, tmp2;
    if (c instanceof mandel.Complex.class) {
      arg$Complex$0$ = c.r;
      arg$Complex$1$ = c.i;
      tmp = arg$Complex$0$ * arg$Complex$0$;
      tmp1 = arg$Complex$1$ * arg$Complex$1$;
      tmp2 = tmp + tmp1;
      return runtime.safeCall(globalThis.Math.sqrt(tmp2))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #comp_times(x, y) {
    let arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        tmp = arg$Complex$0$ * arg$Complex$0$1;
        tmp1 = arg$Complex$1$ * arg$Complex$1$1;
        tmp2 = tmp - tmp1;
        tmp3 = arg$Complex$0$ * arg$Complex$1$1;
        tmp4 = arg$Complex$1$ * arg$Complex$0$1;
        tmp5 = tmp3 + tmp4;
        return mandel.Complex(tmp2, tmp5)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #comp_plus(x, y) {
    let arg$Complex$0$, arg$Complex$1$, arg$Complex$0$1, arg$Complex$1$1, tmp, tmp1;
    if (x instanceof mandel.Complex.class) {
      arg$Complex$0$ = x.r;
      arg$Complex$1$ = x.i;
      if (y instanceof mandel.Complex.class) {
        arg$Complex$0$1 = y.r;
        arg$Complex$1$1 = y.i;
        tmp = arg$Complex$0$ + arg$Complex$0$1;
        tmp1 = arg$Complex$1$ + arg$Complex$1$1;
        return mandel.Complex(tmp, tmp1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mandel(c) {
    return infiniteMandel(mandel, c)
  }
  static #diverge(cmplx, radius) {
    let tmp;
    tmp = mandel.#comp_magnitude(cmplx);
    return tmp > radius
  }
  static #whenDiverge(limit, radius, c) {
    let tmp, inlinedVal;
    tmp = mandel.#mandel(c);
    inlinedVal = NofibPrelude.Lazy(lambda$1(NofibPrelude, limit, tmp));
    return walkIt(mandel, radius, inlinedVal)
  }
  static #parallelMandel(mat, limit, radius) {
    return NofibPrelude.map(lambda$4(mandel, limit, radius), mat)
  }
  static #mandelset(x, y, x_, y_, screenX, screenY, lIMIT) {
    let result, tmp, tmp1, tmp2, tmp3, tmp4, prettyRGB$here, inlinedVal, inlinedVal1;
    tmp = NofibPrelude.enumFromTo(1, screenY);
    inlinedVal = lscomp1_lscomp2(0, mandel, x, y, x_, y_, screenX, screenY, tmp, undefined, undefined);
    tmp1 = x_ - x;
    tmp2 = y_ - y;
    inlinedVal1 = runtime.safeCall(globalThis.Math.max(tmp1, tmp2));
    tmp3 = inlinedVal1 / 2;
    result = mandel.#parallelMandel(inlinedVal, lIMIT, tmp3);
    prettyRGB$here = prettyRGB$(lIMIT);
    tmp4 = NofibPrelude.map(prettyRGB$here, result);
    return mandel.#createPixmap(screenX, screenY, lIMIT, tmp4)
  }
  static #testMandel_nofib(dummy) {
    let minx, miny;
    minx = - 2.0;
    miny = - 2.0;
    return mandel.#mandelset(minx, miny, 2.0, 2.0, 25, 25, 75)
  }
  static main() {
    return mandel.#testMandel_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel"];
});
export { infiniteMandel as _$_modulePrivate_$_infiniteMandel };
export { walkIt as _$_modulePrivate_$_walkIt };
export { lscomp2 as _$_modulePrivate_$_lscomp2 };
export { windowToViewport as _$_modulePrivate_$_windowToViewport };
export { lscomp1 as _$_modulePrivate_$_lscomp1 };
export { prettyRGB as _$_modulePrivate_$_prettyRGB };
export { mandel1 as _$_modulePrivate_$_mandel };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda$2 as _$_modulePrivate_$_lambda$ };
export { lambda$3 as _$_modulePrivate_$_lambda$1 };
export { lambda$4 as _$_modulePrivate_$_lambda$2 };
export { prettyRGB$ as _$_modulePrivate_$_prettyRGB$ };
export { lscomp1_lscomp2 as _$_modulePrivate_$_lscomp1_lscomp2 };
export default mandel1;
