const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const equalp$accessorSymbol = globalThis.Symbol("equalp");
const check_radius$accessorSymbol = globalThis.Symbol("check_radius");
let check_line, mandel21, main_testMandel2_nofib_build_tree$build_tree, main_testMandel2_nofib_finite$t_Leaf, main_testMandel2_nofib_finite$t_NS, main_testMandel2_nofib_finite$t_EW, main_testMandel2_nofib_finite$t_EW$worker, main_testMandel2_nofib_finite$t_NS$worker;
main_testMandel2_nofib_build_tree$build_tree = function main_testMandel2_nofib_build_tree$build_tree(x1y1, x2y2) {
  let scrut, scrut1, nsp2, nsp3, ewp2, ewp3, scrut2, element1$, element0$, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
  if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
    element0$ = runtime.Tuple.get(x1y1, 0);
    element1$ = runtime.Tuple.get(x1y1, 1);
    if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
      let inlinedVal, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, element1$2, element0$2, element1$3, element0$3, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, inlinedVal1, element1$4, element0$4;
      element0$1 = runtime.Tuple.get(x2y2, 0);
      element1$1 = runtime.Tuple.get(x2y2, 1);
      if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
        let inlinedVal2, inlinedVal3, tmp20, tmp21;
        element0$4 = runtime.Tuple.get(x1y1, 0);
        element1$4 = runtime.Tuple.get(x1y1, 1);
        tmp21 = element0$4 * mandel21.delta_p;
        inlinedVal2 = mandel21.pmn + tmp21;
        tmp20 = element1$4 * mandel21.delta_q;
        inlinedVal3 = mandel21.qmn + tmp20;
        inlinedVal1 = mandel21[check_radius$accessorSymbol](inlinedVal2, inlinedVal3, 0, 0.0, 0.0);
        if (runtime.Tuple.isArrayLike(x1y1) && x1y1.length === 2) {
          element0$2 = runtime.Tuple.get(x1y1, 0);
          element1$2 = runtime.Tuple.get(x1y1, 1);
          if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
            element0$3 = runtime.Tuple.get(x2y2, 0);
            element1$3 = runtime.Tuple.get(x2y2, 1);
            scrut3 = mandel21[equalp$accessorSymbol](x1y1, x2y2);
            if (scrut3 === true) {
              inlinedVal = inlinedVal1;
            } else {
              let inlinedVal4, element1$5, element0$5, inlinedVal5, inlinedVal6, inlinedVal7, tmp22, tmp23;
              tmp23 = element0$3 * mandel21.delta_p;
              inlinedVal6 = mandel21.pmn + tmp23;
              tmp22 = element1$2 * mandel21.delta_q;
              inlinedVal7 = mandel21.qmn + tmp22;
              inlinedVal5 = mandel21[check_radius$accessorSymbol](inlinedVal6, inlinedVal7, 0, 0.0, 0.0);
              if (runtime.Tuple.isArrayLike(x2y2) && x2y2.length === 2) {
                let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, tmp24, tmp25, tmp26, tmp27;
                element0$5 = runtime.Tuple.get(x2y2, 0);
                element1$5 = runtime.Tuple.get(x2y2, 1);
                tmp27 = element0$5 * mandel21.delta_p;
                inlinedVal8 = mandel21.pmn + tmp27;
                tmp26 = element1$5 * mandel21.delta_q;
                inlinedVal9 = mandel21.qmn + tmp26;
                inlinedVal4 = mandel21[check_radius$accessorSymbol](inlinedVal8, inlinedVal9, 0, 0.0, 0.0);
                tmp25 = element0$2 * mandel21.delta_p;
                inlinedVal11 = mandel21.pmn + tmp25;
                tmp24 = element1$3 * mandel21.delta_q;
                inlinedVal12 = mandel21.qmn + tmp24;
                inlinedVal10 = mandel21[check_radius$accessorSymbol](inlinedVal11, inlinedVal12, 0, 0.0, 0.0);
                scrut4 = inlinedVal1 == inlinedVal5;
                if (scrut4 === true) {
                  scrut6 = inlinedVal1 == inlinedVal4;
                  if (scrut6 === true) {
                    scrut5 = inlinedVal1 == inlinedVal10;
                    if (scrut5 === true) {
                      tmp12 = element0$2 + 1;
                      tmp13 = globalThis.Object.freeze([
                        tmp12,
                        element1$2
                      ]);
                      scrut7 = check_line(mandel21, inlinedVal1, element1$2, element0$2, element0$3, element1$3, tmp13, mandel21.right);
                      if (scrut7 === true) {
                        tmp14 = element1$2 + 1;
                        tmp15 = globalThis.Object.freeze([
                          element0$3,
                          tmp14
                        ]);
                        scrut10 = check_line(mandel21, inlinedVal1, element1$2, element0$2, element0$3, element1$3, tmp15, mandel21.down);
                        if (scrut10 === true) {
                          tmp16 = element0$3 - 1;
                          tmp17 = globalThis.Object.freeze([
                            tmp16,
                            element1$3
                          ]);
                          scrut9 = check_line(mandel21, inlinedVal1, element1$2, element0$2, element0$3, element1$3, tmp17, mandel21.left);
                          if (scrut9 === true) {
                            tmp18 = element1$3 - 1;
                            tmp19 = globalThis.Object.freeze([
                              element0$2,
                              tmp18
                            ]);
                            scrut8 = check_line(mandel21, inlinedVal1, element1$2, element0$2, element0$3, element1$3, tmp19, mandel21.up);
                            if (scrut8 === true) {
                              inlinedVal = inlinedVal1;
                            } else {
                              inlinedVal = -1;
                            }
                          } else {
                            inlinedVal = -1;
                          }
                        } else {
                          inlinedVal = -1;
                        }
                      } else {
                        inlinedVal = -1;
                      }
                    } else {
                      inlinedVal = -1;
                    }
                  } else {
                    inlinedVal = -1;
                  }
                } else {
                  inlinedVal = -1;
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
            tmp = inlinedVal == -1;
            scrut = ! tmp;
            if (scrut === true) {
              return main_testMandel2_nofib_finite$t_Leaf(inlinedVal)
            }
            {
              let inlinedVal4, inlinedVal5, tmp22, tmp23;
              tmp1 = element0$1 - element0$;
              tmp2 = element1$1 - element1$;
              scrut1 = tmp1 >= tmp2;
              if (scrut1 === true) {
                tmp3 = "NS";
              } else {
                tmp3 = "EW";
              }
              tmp4 = element0$1 + element0$;
              tmp23 = tmp4 / 2;
              inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp23));
              tmp5 = element1$1 + element1$;
              tmp22 = tmp5 / 2;
              inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp22));
              nsp2 = globalThis.Object.freeze([
                inlinedVal4,
                element1$1
              ]);
              tmp6 = inlinedVal4 + 1;
              nsp3 = globalThis.Object.freeze([
                tmp6,
                element1$
              ]);
              ewp2 = globalThis.Object.freeze([
                element0$1,
                inlinedVal5
              ]);
              tmp7 = inlinedVal5 + 1;
              ewp3 = globalThis.Object.freeze([
                element0$,
                tmp7
              ]);
              scrut2 = tmp3 == "NS";
              if (scrut2 === true) {
                tmp8 = main_testMandel2_nofib_build_tree$build_tree(x1y1, nsp2);
                tmp9 = main_testMandel2_nofib_build_tree$build_tree(nsp3, x2y2);
                return main_testMandel2_nofib_finite$t_NS(tmp8, tmp9)
              }
              tmp10 = main_testMandel2_nofib_build_tree$build_tree(x1y1, ewp2);
              tmp11 = main_testMandel2_nofib_build_tree$build_tree(ewp3, x2y2);
              return main_testMandel2_nofib_finite$t_EW(tmp10, tmp11);
            }
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
};
main_testMandel2_nofib_finite$t_Leaf = function main_testMandel2_nofib_finite$t_Leaf(Leaf_colour) {
  return (fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3) => {
    return Leaf_colour == Leaf_colour
  }
};
main_testMandel2_nofib_finite$t_NS = function main_testMandel2_nofib_finite$t_NS(NS_l, NS_r) {
  return (fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3) => {
    return main_testMandel2_nofib_finite$t_NS$worker(NS_l, NS_r, fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3)
  }
};
main_testMandel2_nofib_finite$t_NS$worker = function main_testMandel2_nofib_finite$t_NS$worker(NS_l, NS_r, fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3) {
  let inlinedVal;
  inlinedVal = NS_l(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  if (inlinedVal === true) {
    let inlinedVal1;
    inlinedVal1 = NS_r(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (inlinedVal1 === true) {
      return true
    }
    return false;
  }
  return false;
};
main_testMandel2_nofib_finite$t_EW = function main_testMandel2_nofib_finite$t_EW(EW_l, EW_r) {
  return (fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3) => {
    return main_testMandel2_nofib_finite$t_EW$worker(EW_l, EW_r, fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3)
  }
};
main_testMandel2_nofib_finite$t_EW$worker = function main_testMandel2_nofib_finite$t_EW$worker(EW_l, EW_r, fv_arg$Leaf$0$, fv_c, fv_arg$NS$0$, fv_arg$NS$1$, fv_t2, fv_t1, fv_scrut, fv_scrut1, fv_arg$EW$0$, fv_arg$EW$1$, fv_t21, fv_t11, fv_scrut2, fv_scrut3) {
  let inlinedVal;
  inlinedVal = EW_l(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  if (inlinedVal === true) {
    let inlinedVal1;
    inlinedVal1 = EW_r(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
    if (inlinedVal1 === true) {
      return true
    }
    return false;
  }
  return false;
};
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
    mandel2.NS = function NS(l, r) {
      return globalThis.Object.freeze(new NS.class(l, r));
    };
    (class NS {
      static {
        mandel2.NS.class = this
      }
      constructor(l, r) {
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NS", ["l", "r"]];
    });
    mandel2.EW = function EW(l, r) {
      return globalThis.Object.freeze(new EW.class(l, r));
    };
    (class EW {
      static {
        mandel2.EW.class = this
      }
      constructor(l, r) {
        this.l = l;
        this.r = r;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "EW", ["l", "r"]];
    });
    mandel2.Leaf = function Leaf(colour) {
      return globalThis.Object.freeze(new Leaf.class(colour));
    };
    (class Leaf {
      static {
        mandel2.Leaf.class = this
      }
      constructor(colour) {
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
  static main() {
    let tmp, tmp1, tmp2, a, inlinedVal, tmp3;
    tmp = globalThis.Object.freeze([
      0,
      0
    ]);
    a = mandel21.size;
    tmp3 = a / 2;
    inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp3));
    tmp1 = globalThis.Object.freeze([
      mandel21.size,
      inlinedVal
    ]);
    tmp2 = main_testMandel2_nofib_build_tree$build_tree(tmp, tmp1);
    return tmp2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "mandel2"];
});
export default mandel21;
