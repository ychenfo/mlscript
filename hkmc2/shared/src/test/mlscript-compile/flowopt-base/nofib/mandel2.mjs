const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const equalp$accessorSymbol = globalThis.Symbol("equalp");
const check_radius$accessorSymbol = globalThis.Symbol("check_radius");
let check_line, mandel21;
check_line = function check_line(mandel22, col1, y1, x1, x2, y2, xcyc, xdyd) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(xcyc) && xcyc.length === 2) {
      element0$ = runtime.Tuple.get(xcyc, 0);
      element1$ = runtime.Tuple.get(xcyc, 1);
      if (runtime.Tuple.isArrayLike(xdyd) && xdyd.length === 2) {
        element0$1 = runtime.Tuple.get(xdyd, 0);
        element1$1 = runtime.Tuple.get(xdyd, 1);
        scrut = mandel22[equalp$accessorSymbol](xdyd, mandel22.right);
        if (scrut === true) {
          tmp = element0$ >= x2;
        } else {
          scrut1 = mandel22[equalp$accessorSymbol](xdyd, mandel22.down);
          if (scrut1 === true) {
            tmp = element1$ <= y2;
          } else {
            scrut2 = mandel22[equalp$accessorSymbol](xdyd, mandel22.left);
            if (scrut2 === true) {
              tmp = element0$ <= x1;
            } else {
              tmp = element1$ >= y1;
            }
          }
        }
        if (tmp === true) {
          return true
        }
        {
          let inlinedVal, element1$2, element0$2;
          if (runtime.Tuple.isArrayLike(xcyc) && xcyc.length === 2) {
            let inlinedVal1, inlinedVal2, tmp6, tmp7;
            element0$2 = runtime.Tuple.get(xcyc, 0);
            element1$2 = runtime.Tuple.get(xcyc, 1);
            tmp7 = element0$2 * mandel22.delta_p;
            inlinedVal1 = mandel22.pmn + tmp7;
            tmp6 = element1$2 * mandel22.delta_q;
            inlinedVal2 = mandel22.qmn + tmp6;
            inlinedVal = mandel22[check_radius$accessorSymbol](inlinedVal1, inlinedVal2, 0, 0.0, 0.0);
            tmp1 = inlinedVal == col1;
            scrut3 = ! tmp1;
            if (scrut3 === true) {
              return false
            }
            tmp2 = element0$ + element0$1;
            tmp3 = element1$ + element1$1;
            tmp4 = globalThis.Object.freeze([
              tmp2,
              tmp3
            ]);
            tmp5 = globalThis.Object.freeze([
              element0$1,
              element1$1
            ]);
            xcyc = tmp4;
            xdyd = tmp5;
            continue loopLabel;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class mandel2 {
  static {
    mandel21 = this
  }
  static get [equalp$accessorSymbol]() { return mandel2.#equalp; }
  static get [check_radius$accessorSymbol]() { return mandel2.#check_radius; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    (class MandTree {
      static {
        mandel2.MandTree = this
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MandTree"];
    });
    mandel2.NS = function NS(l, r) {
      return globalThis.Object.freeze(new NS.class(l, r));
    };
    (class NS extends mandel2.MandTree {
      static {
        mandel2.NS.class = this
      }
      constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NS", ["l", "r"]];
    });
    mandel2.EW = function EW(l, r) {
      return globalThis.Object.freeze(new EW.class(l, r));
    };
    (class EW extends mandel2.MandTree {
      static {
        mandel2.EW.class = this
      }
      constructor(l, r) {
        super();
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "EW", ["l", "r"]];
    });
    mandel2.Leaf = function Leaf(colour) {
      return globalThis.Object.freeze(new Leaf.class(colour));
    };
    (class Leaf extends mandel2.MandTree {
      static {
        mandel2.Leaf.class = this
      }
      constructor(colour) {
        super();
        this.colour = colour;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Leaf", ["colour"]];
    });
    mandel2.size = 200;
    tmp = - 2.25;
    mandel2.pmn = tmp;
    mandel2.pmx = 0.75;
    tmp1 = - 1.5;
    mandel2.qmn = tmp1;
    mandel2.qmx = 1.5;
    mandel2.m = 20;
    mandel2.num_cols = 26;
    tmp2 = mandel2.pmx - mandel2.pmn;
    tmp3 = mandel2.size - 1;
    tmp4 = tmp2 / tmp3;
    mandel2.delta_p = tmp4;
    tmp5 = mandel2.qmx - mandel2.qmn;
    tmp6 = mandel2.size - 1;
    tmp7 = tmp5 / tmp6;
    mandel2.delta_q = tmp7;
    tmp8 = globalThis.Object.freeze([
      0,
      -1
    ]);
    mandel2.up = tmp8;
    tmp9 = globalThis.Object.freeze([
      0,
      1
    ]);
    mandel2.down = tmp9;
    tmp10 = globalThis.Object.freeze([
      -1,
      0
    ]);
    mandel2.left = tmp10;
    tmp11 = globalThis.Object.freeze([
      1,
      0
    ]);
    mandel2.right = tmp11;
  }
  static #equalp(p1, p2) {
    let scrut, scrut1, element1$, element0$, element1$1, element0$1;
    if (runtime.Tuple.isArrayLike(p1) && p1.length === 2) {
      element0$ = runtime.Tuple.get(p1, 0);
      element1$ = runtime.Tuple.get(p1, 1);
      if (runtime.Tuple.isArrayLike(p2) && p2.length === 2) {
        element0$1 = runtime.Tuple.get(p2, 0);
        element1$1 = runtime.Tuple.get(p2, 1);
        scrut = element0$ == element0$1;
        if (scrut === true) {
          scrut1 = element1$ == element1$1;
          if (scrut1 === true) {
            return true
          }
          return false;
        }
        return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #np(x) {
    let tmp;
    tmp = x * mandel2.delta_p;
    return mandel2.pmn + tmp
  }
  static #nq(y) {
    let tmp;
    tmp = y * mandel2.delta_q;
    return mandel2.qmn + tmp
  }
  static #radius(x, y) {
    let tmp, tmp1;
    tmp = x * x;
    tmp1 = y * y;
    return tmp + tmp1
  }
  static #new_x(x, y, p) {
    let tmp, tmp1, tmp2;
    tmp = x * x;
    tmp1 = y * y;
    tmp2 = tmp - tmp1;
    return tmp2 + p
  }
  static #new_y(x, y, q) {
    let tmp, tmp1;
    tmp = 2.0 * x;
    tmp1 = tmp * y;
    return tmp1 + q
  }
  static #finite(t) {
    let scrut, scrut1, scrut2, scrut3, arg$EW$0$, arg$EW$1$, arg$NS$0$, arg$NS$1$, arg$Leaf$0$;
    if (t instanceof mandel2.Leaf.class) {
      arg$Leaf$0$ = t.colour;
      return arg$Leaf$0$ == arg$Leaf$0$
    } else if (t instanceof mandel2.NS.class) {
      arg$NS$0$ = t.l;
      arg$NS$1$ = t.r;
      scrut = mandel2.#finite(arg$NS$0$);
      if (scrut === true) {
        scrut1 = mandel2.#finite(arg$NS$1$);
        if (scrut1 === true) {
          return true
        }
        return false;
      }
      return false;
    } else if (t instanceof mandel2.EW.class) {
      arg$EW$0$ = t.l;
      arg$EW$1$ = t.r;
      scrut2 = mandel2.#finite(arg$EW$0$);
      if (scrut2 === true) {
        scrut3 = mandel2.#finite(arg$EW$1$);
        if (scrut3 === true) {
          return true
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #check_radius(p, q, k, x, y) {
    loopLabel: while (true) {
      let xn, yn, r, kp, scrut, scrut1;
      xn = mandel2.#new_x(x, y, p);
      yn = mandel2.#new_y(x, y, q);
      r = mandel2.#radius(xn, yn);
      kp = k + 1;
      scrut = kp == mandel2.num_cols;
      if (scrut === true) {
        return 0
      }
      scrut1 = r > mandel2.m;
      if (scrut1 === true) {
        return kp
      }
      k = kp;
      x = xn;
      y = yn;
      continue loopLabel;
    }
  }
  static #point_colour(xy) {
    let element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(xy) && xy.length === 2) {
      element0$ = runtime.Tuple.get(xy, 0);
      element1$ = runtime.Tuple.get(xy, 1);
      tmp = mandel2.#np(element0$);
      tmp1 = mandel2.#nq(element1$);
      return mandel2.#check_radius(tmp, tmp1, 0, 0.0, 0.0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #check_perim(x1y1, x2y2) {
    let col1, scrut, col2, col3, col4, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    col1 = mandel2.#point_colour(x1y1);
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      element0$ = runtime.Tuple.get(x1y1, 0);
      element1$ = runtime.Tuple.get(x1y1, 1);
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        element0$1 = runtime.Tuple.get(x2y2, 0);
        element1$1 = runtime.Tuple.get(x2y2, 1);
        scrut = mandel2.#equalp(x1y1, x2y2);
        if (scrut === true) {
          return col1
        }
        tmp = globalThis.Object.freeze([
          element0$1,
          element1$
        ]);
        col2 = mandel2.#point_colour(tmp);
        col3 = mandel2.#point_colour(x2y2);
        tmp1 = globalThis.Object.freeze([
          element0$,
          element1$1
        ]);
        col4 = mandel2.#point_colour(tmp1);
        scrut1 = col1 == col2;
        if (scrut1 === true) {
          scrut3 = col1 == col3;
          if (scrut3 === true) {
            scrut2 = col1 == col4;
            if (scrut2 === true) {
              tmp2 = element0$ + 1;
              tmp3 = globalThis.Object.freeze([
                tmp2,
                element1$
              ]);
              scrut4 = check_line(mandel2, col1, element1$, element0$, element0$1, element1$1, tmp3, mandel2.right);
              if (scrut4 === true) {
                tmp4 = element1$ + 1;
                tmp5 = globalThis.Object.freeze([
                  element0$1,
                  tmp4
                ]);
                scrut7 = check_line(mandel2, col1, element1$, element0$, element0$1, element1$1, tmp5, mandel2.down);
                if (scrut7 === true) {
                  tmp6 = element0$1 - 1;
                  tmp7 = globalThis.Object.freeze([
                    tmp6,
                    element1$1
                  ]);
                  scrut6 = check_line(mandel2, col1, element1$, element0$, element0$1, element1$1, tmp7, mandel2.left);
                  if (scrut6 === true) {
                    tmp8 = element1$1 - 1;
                    tmp9 = globalThis.Object.freeze([
                      element0$,
                      tmp8
                    ]);
                    scrut5 = check_line(mandel2, col1, element1$, element0$, element0$1, element1$1, tmp9, mandel2.up);
                    if (scrut5 === true) {
                      return col1
                    }
                    return -1;
                  }
                  return -1;
                }
                return -1;
              }
              return -1;
            }
            return -1;
          }
          return -1;
        }
        return -1;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #build_tree(x1y1, x2y2) {
    let rec_col, scrut, scrut1, nsp2, nsp3, ewp2, ewp3, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
      element0$ = runtime.Tuple.get(x1y1, 0);
      element1$ = runtime.Tuple.get(x1y1, 1);
      if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
        element0$1 = runtime.Tuple.get(x2y2, 0);
        element1$1 = runtime.Tuple.get(x2y2, 1);
        rec_col = mandel2.#check_perim(x1y1, x2y2);
        tmp = rec_col == -1;
        scrut = ! tmp;
        if (scrut === true) {
          return mandel2.Leaf(rec_col)
        }
        {
          let inlinedVal, inlinedVal1, tmp12, tmp13;
          tmp1 = element0$1 - element0$;
          tmp2 = element1$1 - element1$;
          scrut1 = tmp1 >= tmp2;
          if (scrut1 === true) {
            tmp3 = "NS";
          } else {
            tmp3 = "EW";
          }
          tmp4 = element0$1 + element0$;
          tmp13 = tmp4 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp13));
          tmp5 = element1$1 + element1$;
          tmp12 = tmp5 / 2;
          inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp12));
          nsp2 = globalThis.Object.freeze([
            inlinedVal,
            element1$1
          ]);
          tmp6 = inlinedVal + 1;
          nsp3 = globalThis.Object.freeze([
            tmp6,
            element1$
          ]);
          ewp2 = globalThis.Object.freeze([
            element0$1,
            inlinedVal1
          ]);
          tmp7 = inlinedVal1 + 1;
          ewp3 = globalThis.Object.freeze([
            element0$,
            tmp7
          ]);
          scrut2 = tmp3 == "NS";
          if (scrut2 === true) {
            tmp8 = mandel2.#build_tree(x1y1, nsp2);
            tmp9 = mandel2.#build_tree(nsp3, x2y2);
            return mandel2.NS(tmp8, tmp9)
          }
          tmp10 = mandel2.#build_tree(x1y1, ewp2);
          tmp11 = mandel2.#build_tree(ewp3, x2y2);
          return mandel2.EW(tmp10, tmp11);
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #testMandel2_nofib(n) {
    let tmp, tmp1, tmp2, a, inlinedVal, tmp3;
    tmp = globalThis.Object.freeze([
      0,
      0
    ]);
    a = mandel2.size;
    tmp3 = a / 2;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
    tmp1 = globalThis.Object.freeze([
      mandel2.size,
      inlinedVal
    ]);
    tmp2 = mandel2.#build_tree(tmp, tmp1);
    return mandel2.#finite(tmp2)
  }
  static main() {
    return mandel2.#testMandel2_nofib(0)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel2"];
});
export { check_line as _$_modulePrivate_$_check_line };
export { mandel21 as _$_modulePrivate_$_mandel2 };
export default mandel21;
