const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const doo$accessorSymbol = globalThis.Symbol("doo");
const map_n_vector$accessorSymbol = globalThis.Symbol("map_n_vector");
const every_n$accessorSymbol = globalThis.Symbol("every_n");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let enqueue, push_t, enqueue1, can_push_down, push_down, can_push_left, push_right, push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, push_up, loopPow, cf_right, cf_down, cf_up, cf_left, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1;
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, arg$Matrix$0$, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal1, arg$Matrix$0$1, inlinedVal2, scrut10;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp6 = width - 1;
        scrut6 = element0$ == tmp6;
        if (scrut6 === true) {
          tmp7 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp8 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp8);
              tmp9 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp9 = m2;
          }
          tmp7 = tmp9;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp10 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp11 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(element1$);
              inlinedVal5 = inlinedVal4.at(tmp11);
              tmp12 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp12 = m2;
          }
          tmp10 = tmp12;
        }
        tmp13 = height - 1;
        scrut8 = element1$ == tmp13;
        if (scrut8 === true) {
          tmp14 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp15 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp15);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp16 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp16 = m2;
          }
          tmp14 = tmp16;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp17 = m1;
        } else {
          let tmp23, inlinedVal3;
          tmp23 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp23 > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$2;
            tmp18 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$2 = h.a;
              inlinedVal4 = arg$Matrix$0$2.at(tmp18);
              inlinedVal5 = inlinedVal4.at(element0$);
              tmp19 = inlinedVal5;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp19 = m2;
          }
          tmp17 = tmp19;
        }
        tmp22 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal1 = tmp22 > 0;
        if (inlinedVal1 === true) {
          tmp20 = 0;
        } else {
          tmp20 = m2;
        }
        scrut10 = tmp7 < tmp10;
        if (scrut10 === true) {
          let inlinedVal3, scrut11;
          scrut11 = tmp7 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp7 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp7 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp7;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        } else {
          let inlinedVal3, scrut11;
          scrut11 = tmp10 < tmp14;
          if (scrut11 === true) {
            let inlinedVal4, scrut12;
            scrut12 = tmp10 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp10 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp10;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          } else {
            let inlinedVal4, scrut12;
            scrut12 = tmp14 < tmp17;
            if (scrut12 === true) {
              let inlinedVal5, scrut13;
              scrut13 = tmp14 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp14;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            } else {
              let inlinedVal5, scrut13;
              scrut13 = tmp17 < tmp20;
              if (scrut13 === true) {
                inlinedVal5 = tmp17;
              } else {
                inlinedVal5 = tmp20;
              }
              inlinedVal4 = inlinedVal5;
            }
            inlinedVal3 = inlinedVal4;
          }
          inlinedVal2 = inlinedVal3;
        }
        tmp21 = 1 + inlinedVal2;
        if (h instanceof ratioRegions3.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$1 = h.a;
          inlinedVal3 = arg$Matrix$0$1.at(element1$);
          inlinedVal3[element0$] = tmp21;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        let inlinedVal1, inlinedVal2;
        arg$Matrix$0$ = e.a;
        inlinedVal1 = arg$Matrix$0$.at(element1$);
        inlinedVal2 = inlinedVal1.at(element0$);
        inlinedVal = inlinedVal2 == 0;
        switch (inlinedVal) {
          case false:
            return enqueue1(ratioRegions2, h, marked, q, element1$, element0$);
          case true:
            return runtime.Unit;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
lambda$30 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  return (x) => {
    return lambda17(ratioRegions2, height, width, c_right, y, x)
  }
});
lambda17 = (undefined, function (ratioRegions2, height, width, c_right, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal;
  tmp8 = height / 4;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp = y >= inlinedVal;
  if (tmp === true) {
    let tmp9, inlinedVal1;
    tmp2 = 3 * height;
    tmp9 = tmp2 / 4;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp9));
    tmp1 = y < inlinedVal1;
    if (tmp1 === true) {
      let tmp10, inlinedVal2;
      tmp10 = width / 4;
      inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
      tmp3 = inlinedVal2 - 1;
      tmp4 = x == tmp3;
      if (tmp4 === false) {
        let tmp11, inlinedVal3;
        tmp6 = 3 * width;
        tmp11 = tmp6 / 4;
        inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp11));
        tmp7 = inlinedVal3 - 1;
        tmp5 = x == tmp7;
        if (tmp5 === true) {
          let arg$Matrix$0$;
          if (c_right instanceof ratioRegions2.Matrix.class) {
            let inlinedVal4;
            arg$Matrix$0$ = c_right.a;
            inlinedVal4 = arg$Matrix$0$.at(y);
            inlinedVal4[x] = 1;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        {
          let arg$Matrix$0$;
          if (c_right instanceof ratioRegions2.Matrix.class) {
            let inlinedVal4;
            arg$Matrix$0$ = c_right.a;
            inlinedVal4 = arg$Matrix$0$.at(y);
            inlinedVal4[x] = 128;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      {
        let arg$Matrix$0$;
        if (c_right instanceof ratioRegions2.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$ = c_right.a;
          inlinedVal3 = arg$Matrix$0$.at(y);
          inlinedVal3[x] = 1;
          return runtime.Unit
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    {
      let arg$Matrix$0$;
      if (c_right instanceof ratioRegions2.Matrix.class) {
        let inlinedVal2;
        arg$Matrix$0$ = c_right.a;
        inlinedVal2 = arg$Matrix$0$.at(y);
        inlinedVal2[x] = 128;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  {
    let arg$Matrix$0$;
    if (c_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = c_right.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal1[x] = 128;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
});
lambda$28 = (undefined, function (ratioRegions2, height, width, c_right) {
  return (y) => {
    return lambda18(ratioRegions2, height, width, c_right, y)
  }
});
lambda$29 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  return (x) => {
    return lambda19(ratioRegions2, height, width, c_down, y, x)
  }
});
lambda19 = (undefined, function (ratioRegions2, height, width, c_down, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal;
  tmp8 = width / 4;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp = x >= inlinedVal;
  if (tmp === true) {
    let tmp9, inlinedVal1;
    tmp2 = 3 * width;
    tmp9 = tmp2 / 4;
    inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp9));
    tmp1 = x < inlinedVal1;
    if (tmp1 === true) {
      let tmp10, inlinedVal2;
      tmp10 = height / 4;
      inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp10));
      tmp3 = inlinedVal2 - 1;
      tmp4 = y == tmp3;
      if (tmp4 === false) {
        let tmp11, inlinedVal3;
        tmp6 = 3 * height;
        tmp11 = tmp6 / 4;
        inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp11));
        tmp7 = inlinedVal3 - 1;
        tmp5 = y == tmp7;
        if (tmp5 === true) {
          let arg$Matrix$0$;
          if (c_down instanceof ratioRegions2.Matrix.class) {
            let inlinedVal4;
            arg$Matrix$0$ = c_down.a;
            inlinedVal4 = arg$Matrix$0$.at(y);
            inlinedVal4[x] = 1;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        {
          let arg$Matrix$0$;
          if (c_down instanceof ratioRegions2.Matrix.class) {
            let inlinedVal4;
            arg$Matrix$0$ = c_down.a;
            inlinedVal4 = arg$Matrix$0$.at(y);
            inlinedVal4[x] = 128;
            return runtime.Unit
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      {
        let arg$Matrix$0$;
        if (c_down instanceof ratioRegions2.Matrix.class) {
          let inlinedVal3;
          arg$Matrix$0$ = c_down.a;
          inlinedVal3 = arg$Matrix$0$.at(y);
          inlinedVal3[x] = 1;
          return runtime.Unit
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    {
      let arg$Matrix$0$;
      if (c_down instanceof ratioRegions2.Matrix.class) {
        let inlinedVal2;
        arg$Matrix$0$ = c_down.a;
        inlinedVal2 = arg$Matrix$0$.at(y);
        inlinedVal2[x] = 128;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  {
    let arg$Matrix$0$;
    if (c_down instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = c_down.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal1[x] = 128;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
});
lambda$27 = (undefined, function (ratioRegions2, height, width, c_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$29(ratioRegions2, height, width, c_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda18 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$30(ratioRegions2, height, width, c_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda$26 = (undefined, function (ratioRegions2, h, marked, m1, y) {
  return (x) => {
    return lambda1(ratioRegions2, h, marked, m1, y, x)
  }
});
lambda1 = (undefined, function (ratioRegions2, h, marked, m1, y, x) {
  let arg$Matrix$0$, arg$Matrix$0$1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$1 = h.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal[x] = m1;
    if (marked instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = marked.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal1[x] = false;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$24 = (undefined, function (ratioRegions2, width, h, marked, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$26(ratioRegions2, h, marked, m1, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$25 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y) {
  return (x) => {
    return lambda2(ratioRegions2, w, f_t, h, marked, v, q, tail, y, x)
  }
});
lambda2 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y, x) {
  let tmp, tmp1, inlinedVal;
  tmp1 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp1 > 0;
  if (inlinedVal === true) {
    let arg$Matrix$0$;
    if (h instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1, inlinedVal2;
      arg$Matrix$0$ = h.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal2 = inlinedVal1.at(x);
      tmp = inlinedVal2 > 1;
      if (tmp === true) {
        return enqueue(ratioRegions2, h, marked, q, tail, y, x, 1)
      }
      return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return runtime.Unit;
});
lambda$23 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$25(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
enqueue = function enqueue(ratioRegions2, h, marked, q, tail, y, x, value) {
  let scrut, scrut1, arg$QCons$1$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arg$Matrix$0$;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$ = h.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal1 = inlinedVal.at(x);
    scrut = value < inlinedVal1;
    if (scrut === true) {
      let arg$Matrix$0$1, arg$Matrix$0$2;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal2;
        arg$Matrix$0$2 = h.a;
        inlinedVal2 = arg$Matrix$0$2.at(y);
        inlinedVal2[x] = value;
        if (marked instanceof ratioRegions2.Matrix.class) {
          let inlinedVal3, inlinedVal4;
          arg$Matrix$0$1 = marked.a;
          inlinedVal3 = arg$Matrix$0$1.at(y);
          inlinedVal4 = inlinedVal3.at(x);
          switch (inlinedVal4) {
            case false:
              {
                let arg$Matrix$0$3;
                if (marked instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal5;
                  arg$Matrix$0$3 = marked.a;
                  inlinedVal5 = arg$Matrix$0$3.at(y);
                  inlinedVal5[x] = true;
                  scrut1 = tail.value;
                  if (scrut1 instanceof ratioRegions2.QNil.class) {
                    tmp = globalThis.Object.freeze([
                      x,
                      y
                    ]);
                    tmp1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
                    tmp2 = ratioRegions2.QCons(tmp, tmp1);
                    tail.value = tmp2;
                    q.value = tail.value;
                    return runtime.Unit
                  } else if (scrut1 instanceof ratioRegions2.QCons.class) {
                    arg$QCons$1$ = scrut1.rest;
                    tmp3 = globalThis.Object.freeze([
                      x,
                      y
                    ]);
                    tmp4 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
                    tmp5 = ratioRegions2.QCons(tmp3, tmp4);
                    arg$QCons$1$.value = tmp5;
                    tail.value = arg$QCons$1$.value;
                    return runtime.Unit
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            case true:
              return runtime.Unit;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return runtime.Unit;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$22 = (undefined, function (ratioRegions2, h, e, m1, y) {
  return (x) => {
    return lambda3(ratioRegions2, h, e, m1, y, x)
  }
});
lambda3 = (undefined, function (ratioRegions2, h, e, m1, y, x) {
  let inlinedVal, arg$Matrix$0$;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal1, inlinedVal2;
    arg$Matrix$0$ = e.a;
    inlinedVal1 = arg$Matrix$0$.at(y);
    inlinedVal2 = inlinedVal1.at(x);
    inlinedVal = inlinedVal2 == 0;
    if (inlinedVal === false) {
      let arg$Matrix$0$1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(x);
        return inlinedVal4 == m1
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    return true;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$17 = (undefined, function (ratioRegions2, width, h, e, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$22(ratioRegions2, h, e, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$16 = (undefined, function (ratioRegions2, q) {
  return (k) => {
    return lambda4(ratioRegions2, q, k)
  }
});
lambda$21 = (undefined, function (ratioRegions2, marked, y) {
  return (x) => {
    return lambda5(ratioRegions2, marked, y, x)
  }
});
lambda5 = (undefined, function (ratioRegions2, marked, y, x) {
  let arg$Matrix$0$;
  if (marked instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$ = marked.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal[x] = false;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$15 = (undefined, function (ratioRegions2, width, marked) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$21(ratioRegions2, marked, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$20 = (undefined, function (ratioRegions2, h, e, marked, q, y) {
  return (x) => {
    return lambda6(ratioRegions2, h, e, marked, q, y, x)
  }
});
lambda6 = (undefined, function (ratioRegions2, h, e, marked, q, y, x) {
  let inlinedVal, arg$Matrix$0$;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal1, inlinedVal2;
    arg$Matrix$0$ = e.a;
    inlinedVal1 = arg$Matrix$0$.at(y);
    inlinedVal2 = inlinedVal1.at(x);
    inlinedVal = inlinedVal2 == 0;
    switch (inlinedVal) {
      case false:
        return enqueue1(ratioRegions2, h, marked, q, y, x);
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$14 = (undefined, function (ratioRegions2, width, h, e, marked, q) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$20(ratioRegions2, h, e, marked, q, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$19 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (p) => {
    return lambda7(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p)
  }
});
lambda7 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      tmp = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (tmp === false) {
        tmp1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
        if (tmp1 === false) {
          tmp2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
          if (tmp2 === false) {
            tmp3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
            if (tmp3 === false) {
              tmp4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
              if (tmp4 === false) {
                return can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$)
              }
              return true;
            }
            return true;
          }
          return true;
        }
        return true;
      }
      return true;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$13 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (ps) => {
    let p;
    p = lambda$19(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
    return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
  }
});
lambda$18 = (undefined, function (ratioRegions2, marked) {
  return (p) => {
    return lambda8(ratioRegions2, marked, p)
  }
});
lambda8 = (undefined, function (ratioRegions2, marked, p) {
  let arg$Matrix$0$, element0$, element1$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    runtime.Tuple.get(p, 0);
    element1$ = runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      runtime.Tuple.get(p, 1);
      if (marked instanceof ratioRegions2.Matrix.class) {
        let inlinedVal;
        arg$Matrix$0$ = marked.a;
        inlinedVal = arg$Matrix$0$.at(element1$);
        inlinedVal[element0$] = false;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda4 = (undefined, function (ratioRegions2, q, k) {
  let x;
  x = ratioRegions2.Nil;
  q[k] = x;
  return runtime.Unit
});
lambda$12 = (undefined, function (ratioRegions2, f_t, e, y) {
  return (x) => {
    return lambda9(ratioRegions2, f_t, e, y, x)
  }
});
lambda9 = (undefined, function (ratioRegions2, f_t, e, y, x) {
  let arg$Matrix$0$, arg$Matrix$0$1;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$1 = e.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal[x] = 0;
    if (f_t instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = f_t.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal1[x] = 0;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$9 = (undefined, function (ratioRegions2, width, f_t, e) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$12(ratioRegions2, f_t, e, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$11 = (undefined, function (ratioRegions2, f_right, y) {
  return (x) => {
    return lambda10(ratioRegions2, f_right, y, x)
  }
});
lambda10 = (undefined, function (ratioRegions2, f_right, y, x) {
  let arg$Matrix$0$;
  if (f_right instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$ = f_right.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal[x] = 0;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (ratioRegions2, width, f_right) {
  return (y) => {
    return lambda11(ratioRegions2, width, f_right, y)
  }
});
lambda$10 = (undefined, function (ratioRegions2, f_down, y) {
  return (x) => {
    return lambda12(ratioRegions2, f_down, y, x)
  }
});
lambda12 = (undefined, function (ratioRegions2, f_down, y, x) {
  let arg$Matrix$0$;
  if (f_down instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$ = f_down.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal[x] = 0;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (ratioRegions2, width, f_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$10(ratioRegions2, f_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$6 = (undefined, function (ratioRegions2, width, e) {
  return (y) => {
    return lambda13(ratioRegions2, width, e, y)
  }
});
lambda$5 = (undefined, function (ratioRegions2, height, e) {
  return (x) => {
    return lambda14(ratioRegions2, height, e, x)
  }
});
enqueue1 = function enqueue(ratioRegions2, h, marked, q, y, x) {
  let tmp, arg$Matrix$0$;
  if (marked instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$ = marked.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal1 = inlinedVal.at(x);
    switch (inlinedVal1) {
      case false:
        {
          let inlinedVal2, inlinedVal3, arg$Matrix$0$1, arg$Matrix$0$2;
          if (h instanceof ratioRegions2.Matrix.class) {
            let inlinedVal4, inlinedVal5;
            arg$Matrix$0$2 = h.a;
            inlinedVal4 = arg$Matrix$0$2.at(y);
            inlinedVal5 = inlinedVal4.at(x);
            tmp = globalThis.Object.freeze([
              x,
              y
            ]);
            if (h instanceof ratioRegions2.Matrix.class) {
              let arg$Matrix$0$3, inlinedVal6, inlinedVal7;
              arg$Matrix$0$1 = h.a;
              inlinedVal6 = arg$Matrix$0$1.at(y);
              inlinedVal7 = inlinedVal6.at(x);
              inlinedVal2 = q.at(inlinedVal7);
              inlinedVal3 = ratioRegions2.Cons(tmp, inlinedVal2);
              q[inlinedVal5] = inlinedVal3;
              if (marked instanceof ratioRegions2.Matrix.class) {
                let inlinedVal8;
                arg$Matrix$0$3 = marked.a;
                inlinedVal8 = arg$Matrix$0$3.at(y);
                inlinedVal8[x] = true;
                return runtime.Unit
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cf_t = function cf_t(ratioRegions2, w, f_t, v, y, x) {
  let tmp, arg$Matrix$0$, arg$Matrix$0$1;
  if (w instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$1 = w.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal1 = inlinedVal.at(x);
    tmp = v * inlinedVal1;
    if (f_t instanceof ratioRegions2.Matrix.class) {
      let inlinedVal2, inlinedVal3;
      arg$Matrix$0$ = f_t.a;
      inlinedVal2 = arg$Matrix$0$.at(y);
      inlinedVal3 = inlinedVal2.at(x);
      return tmp - inlinedVal3
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
can_push_right = function can_push_right(ratioRegions2, c_right, width, f_right, h, e, y, x) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = width - 1;
  tmp1 = x < tmp;
  if (tmp1 === true) {
    let inlinedVal, arg$Matrix$0$;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1, inlinedVal2;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal2 = inlinedVal1.at(x);
      inlinedVal = inlinedVal2 == 0;
      switch (inlinedVal) {
        case false:
          {
            let tmp4, inlinedVal3;
            tmp4 = cf_right(ratioRegions2, c_right, f_right, y, x);
            inlinedVal3 = tmp4 > 0;
            if (inlinedVal3 === true) {
              let arg$Matrix$0$1, arg$Matrix$0$2;
              if (h instanceof ratioRegions2.Matrix.class) {
                let inlinedVal4, inlinedVal5;
                arg$Matrix$0$2 = h.a;
                inlinedVal4 = arg$Matrix$0$2.at(y);
                inlinedVal5 = inlinedVal4.at(x);
                tmp2 = x + 1;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal6, inlinedVal7;
                  arg$Matrix$0$1 = h.a;
                  inlinedVal6 = arg$Matrix$0$1.at(y);
                  inlinedVal7 = inlinedVal6.at(tmp2);
                  tmp3 = inlinedVal7 + 1;
                  return inlinedVal5 == tmp3
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            return false;
          }
        case true:
          return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return false;
};
can_push_left = function can_push_left(ratioRegions2, c_right, f_right, h, e, y, x) {
  let tmp, tmp1, tmp2;
  tmp = x > 0;
  if (tmp === true) {
    let inlinedVal, arg$Matrix$0$;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1, inlinedVal2;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal2 = inlinedVal1.at(x);
      inlinedVal = inlinedVal2 == 0;
      switch (inlinedVal) {
        case false:
          {
            let tmp3, inlinedVal3;
            tmp3 = cf_left(ratioRegions2, c_right, f_right, y, x);
            inlinedVal3 = tmp3 > 0;
            if (inlinedVal3 === true) {
              let arg$Matrix$0$1, arg$Matrix$0$2;
              if (h instanceof ratioRegions2.Matrix.class) {
                let inlinedVal4, inlinedVal5;
                arg$Matrix$0$2 = h.a;
                inlinedVal4 = arg$Matrix$0$2.at(y);
                inlinedVal5 = inlinedVal4.at(x);
                tmp1 = x - 1;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal6, inlinedVal7;
                  arg$Matrix$0$1 = h.a;
                  inlinedVal6 = arg$Matrix$0$1.at(y);
                  inlinedVal7 = inlinedVal6.at(tmp1);
                  tmp2 = inlinedVal7 + 1;
                  return inlinedVal5 == tmp2
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            return false;
          }
        case true:
          return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return false;
};
can_push_down = function can_push_down(ratioRegions2, c_down, height, f_down, h, e, y, x) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = height - 1;
  tmp1 = y < tmp;
  if (tmp1 === true) {
    let inlinedVal, arg$Matrix$0$;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1, inlinedVal2;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal2 = inlinedVal1.at(x);
      inlinedVal = inlinedVal2 == 0;
      switch (inlinedVal) {
        case false:
          {
            let tmp4, inlinedVal3;
            tmp4 = cf_down(ratioRegions2, c_down, f_down, y, x);
            inlinedVal3 = tmp4 > 0;
            if (inlinedVal3 === true) {
              let arg$Matrix$0$1, arg$Matrix$0$2;
              if (h instanceof ratioRegions2.Matrix.class) {
                let inlinedVal4, inlinedVal5;
                arg$Matrix$0$2 = h.a;
                inlinedVal4 = arg$Matrix$0$2.at(y);
                inlinedVal5 = inlinedVal4.at(x);
                tmp2 = y + 1;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal6, inlinedVal7;
                  arg$Matrix$0$1 = h.a;
                  inlinedVal6 = arg$Matrix$0$1.at(tmp2);
                  inlinedVal7 = inlinedVal6.at(x);
                  tmp3 = inlinedVal7 + 1;
                  return inlinedVal5 == tmp3
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            return false;
          }
        case true:
          return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return false;
};
can_push_up = function can_push_up(ratioRegions2, c_down, f_down, h, e, y, x) {
  let tmp, tmp1, tmp2;
  tmp = y > 0;
  if (tmp === true) {
    let inlinedVal, arg$Matrix$0$;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1, inlinedVal2;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal2 = inlinedVal1.at(x);
      inlinedVal = inlinedVal2 == 0;
      switch (inlinedVal) {
        case false:
          {
            let tmp3, inlinedVal3;
            tmp3 = cf_up(ratioRegions2, c_down, f_down, y, x);
            inlinedVal3 = tmp3 > 0;
            if (inlinedVal3 === true) {
              let arg$Matrix$0$1, arg$Matrix$0$2;
              if (h instanceof ratioRegions2.Matrix.class) {
                let inlinedVal4, inlinedVal5;
                arg$Matrix$0$2 = h.a;
                inlinedVal4 = arg$Matrix$0$2.at(y);
                inlinedVal5 = inlinedVal4.at(x);
                tmp1 = y - 1;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal6, inlinedVal7;
                  arg$Matrix$0$1 = h.a;
                  inlinedVal6 = arg$Matrix$0$1.at(tmp1);
                  inlinedVal7 = inlinedVal6.at(x);
                  tmp2 = inlinedVal7 + 1;
                  return inlinedVal5 == tmp2
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            return false;
          }
        case true:
          return false;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return false;
};
can_push_t = function can_push_t(ratioRegions2, w, f_t, h, e, v, y, x) {
  let inlinedVal, arg$Matrix$0$;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal1, inlinedVal2;
    arg$Matrix$0$ = e.a;
    inlinedVal1 = arg$Matrix$0$.at(y);
    inlinedVal2 = inlinedVal1.at(x);
    inlinedVal = inlinedVal2 == 0;
    switch (inlinedVal) {
      case false:
        {
          let tmp, inlinedVal3;
          tmp = cf_t(ratioRegions2, w, f_t, v, y, x);
          inlinedVal3 = tmp > 0;
          if (inlinedVal3 === true) {
            let arg$Matrix$0$1;
            if (h instanceof ratioRegions2.Matrix.class) {
              let inlinedVal4, inlinedVal5;
              arg$Matrix$0$1 = h.a;
              inlinedVal4 = arg$Matrix$0$1.at(y);
              inlinedVal5 = inlinedVal4.at(x);
              return inlinedVal5 == 1
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          return false;
        }
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
can_lift = function can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal, arg$Matrix$0$;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal1, inlinedVal2;
    arg$Matrix$0$ = e.a;
    inlinedVal1 = arg$Matrix$0$.at(y);
    inlinedVal2 = inlinedVal1.at(x);
    inlinedVal = inlinedVal2 == 0;
    switch (inlinedVal) {
      case false:
        tmp = width - 1;
        scrut = x == tmp;
        if (scrut === true) {
          let arg$Matrix$0$1;
          if (h instanceof ratioRegions2.Matrix.class) {
            let inlinedVal3, inlinedVal4;
            arg$Matrix$0$1 = h.a;
            inlinedVal3 = arg$Matrix$0$1.at(y);
            inlinedVal4 = inlinedVal3.at(x);
            tmp1 = inlinedVal4 <= m1;
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          let tmp14, inlinedVal3;
          tmp14 = cf_right(ratioRegions2, c_right, f_right, y, x);
          inlinedVal3 = tmp14 > 0;
          switch (inlinedVal3) {
            case false:
              tmp2 = true;
              break;
            case true:
              {
                let arg$Matrix$0$1, arg$Matrix$0$2;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal4, inlinedVal5;
                  arg$Matrix$0$2 = h.a;
                  inlinedVal4 = arg$Matrix$0$2.at(y);
                  inlinedVal5 = inlinedVal4.at(x);
                  tmp3 = x + 1;
                  if (h instanceof ratioRegions2.Matrix.class) {
                    let inlinedVal6, inlinedVal7;
                    arg$Matrix$0$1 = h.a;
                    inlinedVal6 = arg$Matrix$0$1.at(y);
                    inlinedVal7 = inlinedVal6.at(tmp3);
                    tmp2 = inlinedVal5 <= inlinedVal7;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              }
              break;
            default:
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          tmp1 = tmp2;
        }
        if (tmp1 === true) {
          scrut1 = x == 0;
          if (scrut1 === true) {
            let arg$Matrix$0$1;
            if (h instanceof ratioRegions2.Matrix.class) {
              let inlinedVal3, inlinedVal4;
              arg$Matrix$0$1 = h.a;
              inlinedVal3 = arg$Matrix$0$1.at(y);
              inlinedVal4 = inlinedVal3.at(x);
              tmp4 = inlinedVal4 <= m1;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            let tmp14, inlinedVal3;
            tmp14 = cf_left(ratioRegions2, c_right, f_right, y, x);
            inlinedVal3 = tmp14 > 0;
            switch (inlinedVal3) {
              case false:
                tmp5 = true;
                break;
              case true:
                {
                  let arg$Matrix$0$1, arg$Matrix$0$2;
                  if (h instanceof ratioRegions2.Matrix.class) {
                    let inlinedVal4, inlinedVal5;
                    arg$Matrix$0$2 = h.a;
                    inlinedVal4 = arg$Matrix$0$2.at(y);
                    inlinedVal5 = inlinedVal4.at(x);
                    tmp6 = x - 1;
                    if (h instanceof ratioRegions2.Matrix.class) {
                      let inlinedVal6, inlinedVal7;
                      arg$Matrix$0$1 = h.a;
                      inlinedVal6 = arg$Matrix$0$1.at(y);
                      inlinedVal7 = inlinedVal6.at(tmp6);
                      tmp5 = inlinedVal5 <= inlinedVal7;
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                }
                break;
              default:
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            tmp4 = tmp5;
          }
          if (tmp4 === true) {
            tmp7 = height - 1;
            scrut2 = y == tmp7;
            if (scrut2 === true) {
              let arg$Matrix$0$1;
              if (h instanceof ratioRegions2.Matrix.class) {
                let inlinedVal3, inlinedVal4;
                arg$Matrix$0$1 = h.a;
                inlinedVal3 = arg$Matrix$0$1.at(y);
                inlinedVal4 = inlinedVal3.at(x);
                tmp8 = inlinedVal4 <= m1;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              let tmp14, inlinedVal3;
              tmp14 = cf_down(ratioRegions2, c_down, f_down, y, x);
              inlinedVal3 = tmp14 > 0;
              switch (inlinedVal3) {
                case false:
                  tmp9 = true;
                  break;
                case true:
                  {
                    let arg$Matrix$0$1, arg$Matrix$0$2;
                    if (h instanceof ratioRegions2.Matrix.class) {
                      let inlinedVal4, inlinedVal5;
                      arg$Matrix$0$2 = h.a;
                      inlinedVal4 = arg$Matrix$0$2.at(y);
                      inlinedVal5 = inlinedVal4.at(x);
                      tmp10 = y + 1;
                      if (h instanceof ratioRegions2.Matrix.class) {
                        let inlinedVal6, inlinedVal7;
                        arg$Matrix$0$1 = h.a;
                        inlinedVal6 = arg$Matrix$0$1.at(tmp10);
                        inlinedVal7 = inlinedVal6.at(x);
                        tmp9 = inlinedVal5 <= inlinedVal7;
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  }
                  break;
                default:
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              tmp8 = tmp9;
            }
            if (tmp8 === true) {
              scrut3 = y == 0;
              if (scrut3 === true) {
                let arg$Matrix$0$1;
                if (h instanceof ratioRegions2.Matrix.class) {
                  let inlinedVal3, inlinedVal4;
                  arg$Matrix$0$1 = h.a;
                  inlinedVal3 = arg$Matrix$0$1.at(y);
                  inlinedVal4 = inlinedVal3.at(x);
                  tmp11 = inlinedVal4 <= m1;
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                let tmp14, inlinedVal3;
                tmp14 = cf_up(ratioRegions2, c_down, f_down, y, x);
                inlinedVal3 = tmp14 > 0;
                switch (inlinedVal3) {
                  case false:
                    tmp12 = true;
                    break;
                  case true:
                    {
                      let arg$Matrix$0$1, arg$Matrix$0$2;
                      if (h instanceof ratioRegions2.Matrix.class) {
                        let inlinedVal4, inlinedVal5;
                        arg$Matrix$0$2 = h.a;
                        inlinedVal4 = arg$Matrix$0$2.at(y);
                        inlinedVal5 = inlinedVal4.at(x);
                        tmp13 = y - 1;
                        if (h instanceof ratioRegions2.Matrix.class) {
                          let inlinedVal6, inlinedVal7;
                          arg$Matrix$0$1 = h.a;
                          inlinedVal6 = arg$Matrix$0$1.at(tmp13);
                          inlinedVal7 = inlinedVal6.at(x);
                          tmp12 = inlinedVal5 <= inlinedVal7;
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    }
                    break;
                  default:
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                tmp11 = tmp12;
              }
              if (tmp11 === true) {
                let tmp14, inlinedVal3;
                tmp14 = cf_t(ratioRegions2, w, f_t, v, y, x);
                inlinedVal3 = tmp14 > 0;
                switch (inlinedVal3) {
                  case false:
                    return true;
                  case true:
                    {
                      let arg$Matrix$0$1;
                      if (h instanceof ratioRegions2.Matrix.class) {
                        let inlinedVal4, inlinedVal5;
                        arg$Matrix$0$1 = h.a;
                        inlinedVal4 = arg$Matrix$0$1.at(y);
                        inlinedVal5 = inlinedVal4.at(x);
                        return inlinedVal5 == 0
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
              return false;
            }
            return false;
          }
          return false;
        }
        return false;
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
push_right = function push_right(ratioRegions2, c_right, f_right, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, inlinedVal1, inlinedVal2, arg$Matrix$0$, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal3, inlinedVal4, inlinedVal5;
    arg$Matrix$0$6 = e.a;
    inlinedVal3 = arg$Matrix$0$6.at(y);
    inlinedVal4 = inlinedVal3.at(x);
    tmp = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal5 = inlinedVal4 < 0;
    if (inlinedVal5 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal6, scrut;
      scrut = inlinedVal4 < tmp;
      if (scrut === true) {
        inlinedVal6 = inlinedVal4;
      } else {
        inlinedVal6 = tmp;
      }
      inlinedVal = inlinedVal6;
    }
    if (f_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal6, inlinedVal7;
      arg$Matrix$0$5 = f_right.a;
      inlinedVal6 = arg$Matrix$0$5.at(y);
      inlinedVal7 = inlinedVal6.at(x);
      tmp1 = inlinedVal7 + inlinedVal;
      if (f_right instanceof ratioRegions2.Matrix.class) {
        let inlinedVal8;
        arg$Matrix$0$4 = f_right.a;
        inlinedVal8 = arg$Matrix$0$4.at(y);
        inlinedVal8[x] = tmp1;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal9, inlinedVal10, inlinedVal11;
          arg$Matrix$0$3 = e.a;
          inlinedVal9 = arg$Matrix$0$3.at(y);
          inlinedVal10 = inlinedVal9.at(x);
          inlinedVal11 = inlinedVal10 < 0;
          if (inlinedVal11 === true) {
            inlinedVal1 = inlinedVal10;
          } else {
            inlinedVal1 = inlinedVal10 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal12;
            arg$Matrix$0$2 = e.a;
            inlinedVal12 = arg$Matrix$0$2.at(y);
            inlinedVal12[x] = inlinedVal1;
            tmp2 = x + 1;
            tmp3 = x + 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              let inlinedVal13, inlinedVal14, inlinedVal15;
              arg$Matrix$0$1 = e.a;
              inlinedVal13 = arg$Matrix$0$1.at(y);
              inlinedVal14 = inlinedVal13.at(tmp3);
              inlinedVal15 = inlinedVal14 < 0;
              if (inlinedVal15 === true) {
                inlinedVal2 = inlinedVal14;
              } else {
                inlinedVal2 = inlinedVal14 + inlinedVal;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                let inlinedVal16;
                arg$Matrix$0$ = e.a;
                inlinedVal16 = arg$Matrix$0$.at(y);
                inlinedVal16[tmp2] = inlinedVal2;
                tmp4 = x + 1;
                return enqueue1(ratioRegions2, h, marked, q, y, tmp4)
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
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
push_left = function push_left(ratioRegions2, c_right, f_right, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, arg$Matrix$0$, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal3, inlinedVal4, inlinedVal5;
    arg$Matrix$0$6 = e.a;
    inlinedVal3 = arg$Matrix$0$6.at(y);
    inlinedVal4 = inlinedVal3.at(x);
    tmp = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal5 = inlinedVal4 < 0;
    if (inlinedVal5 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal6, scrut;
      scrut = inlinedVal4 < tmp;
      if (scrut === true) {
        inlinedVal6 = inlinedVal4;
      } else {
        inlinedVal6 = tmp;
      }
      inlinedVal = inlinedVal6;
    }
    tmp1 = x - 1;
    tmp2 = x - 1;
    if (f_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal6, inlinedVal7;
      arg$Matrix$0$5 = f_right.a;
      inlinedVal6 = arg$Matrix$0$5.at(y);
      inlinedVal7 = inlinedVal6.at(tmp2);
      tmp3 = inlinedVal7 - inlinedVal;
      if (f_right instanceof ratioRegions2.Matrix.class) {
        let inlinedVal8;
        arg$Matrix$0$4 = f_right.a;
        inlinedVal8 = arg$Matrix$0$4.at(y);
        inlinedVal8[tmp1] = tmp3;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal9, inlinedVal10, inlinedVal11;
          arg$Matrix$0$3 = e.a;
          inlinedVal9 = arg$Matrix$0$3.at(y);
          inlinedVal10 = inlinedVal9.at(x);
          inlinedVal11 = inlinedVal10 < 0;
          if (inlinedVal11 === true) {
            inlinedVal1 = inlinedVal10;
          } else {
            inlinedVal1 = inlinedVal10 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal12;
            arg$Matrix$0$2 = e.a;
            inlinedVal12 = arg$Matrix$0$2.at(y);
            inlinedVal12[x] = inlinedVal1;
            tmp4 = x - 1;
            tmp5 = x - 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              let inlinedVal13, inlinedVal14, inlinedVal15;
              arg$Matrix$0$1 = e.a;
              inlinedVal13 = arg$Matrix$0$1.at(y);
              inlinedVal14 = inlinedVal13.at(tmp5);
              inlinedVal15 = inlinedVal14 < 0;
              if (inlinedVal15 === true) {
                inlinedVal2 = inlinedVal14;
              } else {
                inlinedVal2 = inlinedVal14 + inlinedVal;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                let inlinedVal16;
                arg$Matrix$0$ = e.a;
                inlinedVal16 = arg$Matrix$0$.at(y);
                inlinedVal16[tmp4] = inlinedVal2;
                tmp6 = x - 1;
                return enqueue1(ratioRegions2, h, marked, q, y, tmp6)
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
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
push_down = function push_down(ratioRegions2, c_down, f_down, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, inlinedVal1, inlinedVal2, arg$Matrix$0$, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal3, inlinedVal4, inlinedVal5;
    arg$Matrix$0$6 = e.a;
    inlinedVal3 = arg$Matrix$0$6.at(y);
    inlinedVal4 = inlinedVal3.at(x);
    tmp = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal5 = inlinedVal4 < 0;
    if (inlinedVal5 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal6, scrut;
      scrut = inlinedVal4 < tmp;
      if (scrut === true) {
        inlinedVal6 = inlinedVal4;
      } else {
        inlinedVal6 = tmp;
      }
      inlinedVal = inlinedVal6;
    }
    if (f_down instanceof ratioRegions2.Matrix.class) {
      let inlinedVal6, inlinedVal7;
      arg$Matrix$0$5 = f_down.a;
      inlinedVal6 = arg$Matrix$0$5.at(y);
      inlinedVal7 = inlinedVal6.at(x);
      tmp1 = inlinedVal7 + inlinedVal;
      if (f_down instanceof ratioRegions2.Matrix.class) {
        let inlinedVal8;
        arg$Matrix$0$4 = f_down.a;
        inlinedVal8 = arg$Matrix$0$4.at(y);
        inlinedVal8[x] = tmp1;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal9, inlinedVal10, inlinedVal11;
          arg$Matrix$0$3 = e.a;
          inlinedVal9 = arg$Matrix$0$3.at(y);
          inlinedVal10 = inlinedVal9.at(x);
          inlinedVal11 = inlinedVal10 < 0;
          if (inlinedVal11 === true) {
            inlinedVal1 = inlinedVal10;
          } else {
            inlinedVal1 = inlinedVal10 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal12;
            arg$Matrix$0$2 = e.a;
            inlinedVal12 = arg$Matrix$0$2.at(y);
            inlinedVal12[x] = inlinedVal1;
            tmp2 = y + 1;
            tmp3 = y + 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              let inlinedVal13, inlinedVal14, inlinedVal15;
              arg$Matrix$0$1 = e.a;
              inlinedVal13 = arg$Matrix$0$1.at(tmp3);
              inlinedVal14 = inlinedVal13.at(x);
              inlinedVal15 = inlinedVal14 < 0;
              if (inlinedVal15 === true) {
                inlinedVal2 = inlinedVal14;
              } else {
                inlinedVal2 = inlinedVal14 + inlinedVal;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                let inlinedVal16;
                arg$Matrix$0$ = e.a;
                inlinedVal16 = arg$Matrix$0$.at(tmp2);
                inlinedVal16[x] = inlinedVal2;
                tmp4 = y + 1;
                return enqueue1(ratioRegions2, h, marked, q, tmp4, x)
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
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
push_up = function push_up(ratioRegions2, c_down, f_down, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, arg$Matrix$0$, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal3, inlinedVal4, inlinedVal5;
    arg$Matrix$0$6 = e.a;
    inlinedVal3 = arg$Matrix$0$6.at(y);
    inlinedVal4 = inlinedVal3.at(x);
    tmp = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal5 = inlinedVal4 < 0;
    if (inlinedVal5 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal6, scrut;
      scrut = inlinedVal4 < tmp;
      if (scrut === true) {
        inlinedVal6 = inlinedVal4;
      } else {
        inlinedVal6 = tmp;
      }
      inlinedVal = inlinedVal6;
    }
    tmp1 = y - 1;
    tmp2 = y - 1;
    if (f_down instanceof ratioRegions2.Matrix.class) {
      let inlinedVal6, inlinedVal7;
      arg$Matrix$0$5 = f_down.a;
      inlinedVal6 = arg$Matrix$0$5.at(tmp2);
      inlinedVal7 = inlinedVal6.at(x);
      tmp3 = inlinedVal7 - inlinedVal;
      if (f_down instanceof ratioRegions2.Matrix.class) {
        let inlinedVal8;
        arg$Matrix$0$4 = f_down.a;
        inlinedVal8 = arg$Matrix$0$4.at(tmp1);
        inlinedVal8[x] = tmp3;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal9, inlinedVal10, inlinedVal11;
          arg$Matrix$0$3 = e.a;
          inlinedVal9 = arg$Matrix$0$3.at(y);
          inlinedVal10 = inlinedVal9.at(x);
          inlinedVal11 = inlinedVal10 < 0;
          if (inlinedVal11 === true) {
            inlinedVal1 = inlinedVal10;
          } else {
            inlinedVal1 = inlinedVal10 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal12;
            arg$Matrix$0$2 = e.a;
            inlinedVal12 = arg$Matrix$0$2.at(y);
            inlinedVal12[x] = inlinedVal1;
            tmp4 = y - 1;
            tmp5 = y - 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              let inlinedVal13, inlinedVal14, inlinedVal15;
              arg$Matrix$0$1 = e.a;
              inlinedVal13 = arg$Matrix$0$1.at(tmp5);
              inlinedVal14 = inlinedVal13.at(x);
              inlinedVal15 = inlinedVal14 < 0;
              if (inlinedVal15 === true) {
                inlinedVal2 = inlinedVal14;
              } else {
                inlinedVal2 = inlinedVal14 + inlinedVal;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                let inlinedVal16;
                arg$Matrix$0$ = e.a;
                inlinedVal16 = arg$Matrix$0$.at(tmp4);
                inlinedVal16[x] = inlinedVal2;
                tmp6 = y - 1;
                return enqueue1(ratioRegions2, h, marked, q, tmp6, x)
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
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
push_t = function push_t(ratioRegions2, w, f_t, e, v, y, x) {
  let tmp, tmp1, inlinedVal, inlinedVal1, arg$Matrix$0$, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2, inlinedVal3, inlinedVal4;
    arg$Matrix$0$4 = e.a;
    inlinedVal2 = arg$Matrix$0$4.at(y);
    inlinedVal3 = inlinedVal2.at(x);
    tmp = cf_t(ratioRegions2, w, f_t, v, y, x);
    inlinedVal4 = inlinedVal3 < 0;
    if (inlinedVal4 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal5, scrut;
      scrut = inlinedVal3 < tmp;
      if (scrut === true) {
        inlinedVal5 = inlinedVal3;
      } else {
        inlinedVal5 = tmp;
      }
      inlinedVal = inlinedVal5;
    }
    if (f_t instanceof ratioRegions2.Matrix.class) {
      let inlinedVal5, inlinedVal6;
      arg$Matrix$0$3 = f_t.a;
      inlinedVal5 = arg$Matrix$0$3.at(y);
      inlinedVal6 = inlinedVal5.at(x);
      tmp1 = inlinedVal6 + inlinedVal;
      if (f_t instanceof ratioRegions2.Matrix.class) {
        let inlinedVal7;
        arg$Matrix$0$2 = f_t.a;
        inlinedVal7 = arg$Matrix$0$2.at(y);
        inlinedVal7[x] = tmp1;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal8, inlinedVal9, inlinedVal10;
          arg$Matrix$0$1 = e.a;
          inlinedVal8 = arg$Matrix$0$1.at(y);
          inlinedVal9 = inlinedVal8.at(x);
          inlinedVal10 = inlinedVal9 < 0;
          if (inlinedVal10 === true) {
            inlinedVal1 = inlinedVal9;
          } else {
            inlinedVal1 = inlinedVal9 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal11;
            arg$Matrix$0$ = e.a;
            inlinedVal11 = arg$Matrix$0$.at(y);
            inlinedVal11[x] = inlinedVal1;
            return runtime.Unit
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
relabel = function relabel(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, marked, m1, v) {
  let q, tail, lambda$here, lambda$here1, ratioRegions3, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q1, tail1, inlinedVal;
  q = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  lambda$here = lambda$24(ratioRegions2, width, h, marked, m1);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$23(ratioRegions2, w, width, f_t, h, marked, v, q, tail);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  ratioRegions3 = ratioRegions2;
  c_right1 = c_right;
  c_down1 = c_down;
  height1 = height;
  width1 = width;
  f_right1 = f_right;
  f_down1 = f_down;
  h1 = h;
  marked1 = marked;
  q1 = q;
  tail1 = tail;
  inlinedLbl: {
    loopLabel: while (true) {
      let value, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, ratioRegions4, scrut;
      ratioRegions4 = ratioRegions3;
      scrut = q1.value;
      if (scrut instanceof ratioRegions4.QNil.class) {
        inlinedVal = runtime.Unit;
        break inlinedLbl
      }
      {
        let ratioRegions5, receiver, scrut1, arg$QCons$0$, arg$QCons$1$, element0$, element1$, arg$Matrix$0$;
        ratioRegions5 = ratioRegions3;
        scrut1 = q1.value;
        if (scrut1 instanceof ratioRegions5.QCons.class) {
          let ratioRegions6, element1$1, element0$1, arg$Matrix$0$1, scrut2;
          arg$QCons$0$ = scrut1.head;
          arg$QCons$1$ = scrut1.rest;
          if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
            runtime.Tuple.get(arg$QCons$0$, 0);
            element1$1 = runtime.Tuple.get(arg$QCons$0$, 1);
            if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
              element0$1 = runtime.Tuple.get(arg$QCons$0$, 0);
              runtime.Tuple.get(arg$QCons$0$, 1);
              if (marked1 instanceof ratioRegions5.Matrix.class) {
                let inlinedVal1;
                arg$Matrix$0$1 = marked1.a;
                inlinedVal1 = arg$Matrix$0$1.at(element1$1);
                inlinedVal1[element0$1] = false;
                q1.value = arg$QCons$1$.value;
                ratioRegions6 = ratioRegions3;
                scrut2 = q1.value;
                if (scrut2 instanceof ratioRegions6.QNil.class) {
                  tail1.value = ratioRegions3.QNil;
                } else {
                  if (false === true) {
                    tail1.value = ratioRegions3.QNil;
                  }
                }
                if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
                  element0$ = runtime.Tuple.get(arg$QCons$0$, 0);
                  runtime.Tuple.get(arg$QCons$0$, 1);
                  if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
                    runtime.Tuple.get(arg$QCons$0$, 0);
                    element1$ = runtime.Tuple.get(arg$QCons$0$, 1);
                    receiver = ratioRegions3;
                    if (h1 instanceof receiver.Matrix.class) {
                      let inlinedVal2, inlinedVal3;
                      arg$Matrix$0$ = h1.a;
                      inlinedVal2 = arg$Matrix$0$.at(element1$);
                      inlinedVal3 = inlinedVal2.at(element0$);
                      value = inlinedVal3 + 1;
                      tmp = element0$ > 0;
                      if (tmp === true) {
                        let tmp17, inlinedVal4;
                        tmp2 = element0$ - 1;
                        tmp17 = cf_right(ratioRegions3, c_right1, f_right1, element1$, tmp2);
                        inlinedVal4 = tmp17 > 0;
                        tmp1 = inlinedVal4;
                      } else {
                        tmp1 = false;
                      }
                      if (tmp1 === true) {
                        tmp3 = element0$ - 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, element1$, tmp3, value);
                      }
                      tmp4 = width1 - 1;
                      tmp5 = element0$ < tmp4;
                      if (tmp5 === true) {
                        let tmp17, inlinedVal4;
                        tmp7 = element0$ + 1;
                        tmp17 = cf_left(ratioRegions3, c_right1, f_right1, element1$, tmp7);
                        inlinedVal4 = tmp17 > 0;
                        tmp6 = inlinedVal4;
                      } else {
                        tmp6 = false;
                      }
                      if (tmp6 === true) {
                        tmp8 = element0$ + 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, element1$, tmp8, value);
                      }
                      tmp9 = element1$ > 0;
                      if (tmp9 === true) {
                        let tmp17, inlinedVal4;
                        tmp11 = element1$ - 1;
                        tmp17 = cf_down(ratioRegions3, c_down1, f_down1, tmp11, element0$);
                        inlinedVal4 = tmp17 > 0;
                        tmp10 = inlinedVal4;
                      } else {
                        tmp10 = false;
                      }
                      if (tmp10 === true) {
                        tmp12 = element1$ - 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, tmp12, element0$, value);
                      }
                      tmp13 = height1 - 1;
                      tmp14 = element1$ < tmp13;
                      if (tmp14 === true) {
                        let tmp17, inlinedVal4;
                        tmp15 = element1$ + 1;
                        tmp17 = cf_up(ratioRegions3, c_down1, f_down1, tmp15, element0$);
                        inlinedVal4 = tmp17 > 0;
                        if (inlinedVal4 === true) {
                          tmp16 = element1$ + 1;
                          enqueue(ratioRegions3, h1, marked1, q1, tail1, tmp16, element0$, value);
                          continue loopLabel
                        }
                        continue loopLabel;
                      }
                      continue loopLabel;
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
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  return inlinedVal
};
lambda11 = (undefined, function (ratioRegions2, width, f_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$11(ratioRegions2, f_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda13 = (undefined, function (ratioRegions2, width, e, y) {
  let tmp, arg$Matrix$0$, arg$Matrix$0$1;
  tmp = width - 1;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$1 = e.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal[tmp] = -1;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(y);
      inlinedVal1[0] = -1;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda14 = (undefined, function (ratioRegions2, height, e, x) {
  let tmp, arg$Matrix$0$, arg$Matrix$0$1;
  tmp = height - 1;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal;
    arg$Matrix$0$1 = e.a;
    inlinedVal = arg$Matrix$0$1.at(tmp);
    inlinedVal[x] = -1;
    if (e instanceof ratioRegions2.Matrix.class) {
      let inlinedVal1;
      arg$Matrix$0$ = e.a;
      inlinedVal1 = arg$Matrix$0$.at(0);
      inlinedVal1[x] = -1;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$4 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda15(ratioRegions2, h, m1, y, x)
  }
});
lambda15 = (undefined, function (ratioRegions2, h, m1, y, x) {
  let arg$Matrix$0$;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$ = h.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal1 = inlinedVal.at(x);
    return inlinedVal1 == m1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$4(ratioRegions2, h, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$2 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda16(ratioRegions2, h, m1, y, x)
  }
});
lambda16 = (undefined, function (ratioRegions2, h, m1, y, x) {
  let tmp, arg$Matrix$0$;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$ = h.a;
    inlinedVal = arg$Matrix$0$.at(y);
    inlinedVal1 = inlinedVal.at(x);
    tmp = inlinedVal1 == m1;
    switch (tmp) {
      case false:
        return true;
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$2(ratioRegions2, h, m1, y);
    return ratioRegions2[map_n_vector$accessorSymbol](width, lambda$here)
  }
});
loopPow = function loopPow(ratioRegions2, i, c) {
  loopLabel: while (true) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = i == 0;
    if (inlinedVal === true) {
      return c
    }
    tmp = i - 1;
    tmp1 = c + c;
    i = tmp;
    c = tmp1;
    continue loopLabel;
  }
};
cf_right = function cf_right(ratioRegions2, c_right, f_right, y, x) {
  let arg$Matrix$0$, arg$Matrix$0$1;
  if (c_right instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$1 = c_right.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal1 = inlinedVal.at(x);
    if (f_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal2, inlinedVal3;
      arg$Matrix$0$ = f_right.a;
      inlinedVal2 = arg$Matrix$0$.at(y);
      inlinedVal3 = inlinedVal2.at(x);
      return inlinedVal1 - inlinedVal3
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cf_left = function cf_left(ratioRegions2, c_right, f_right, y, x) {
  let tmp, tmp1, arg$Matrix$0$, arg$Matrix$0$1;
  tmp = x - 1;
  if (c_right instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$1 = c_right.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal1 = inlinedVal.at(tmp);
    tmp1 = x - 1;
    if (f_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal2, inlinedVal3;
      arg$Matrix$0$ = f_right.a;
      inlinedVal2 = arg$Matrix$0$.at(y);
      inlinedVal3 = inlinedVal2.at(tmp1);
      return inlinedVal1 + inlinedVal3
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cf_down = function cf_down(ratioRegions2, c_down, f_down, y, x) {
  let arg$Matrix$0$, arg$Matrix$0$1;
  if (c_down instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$1 = c_down.a;
    inlinedVal = arg$Matrix$0$1.at(y);
    inlinedVal1 = inlinedVal.at(x);
    if (f_down instanceof ratioRegions2.Matrix.class) {
      let inlinedVal2, inlinedVal3;
      arg$Matrix$0$ = f_down.a;
      inlinedVal2 = arg$Matrix$0$.at(y);
      inlinedVal3 = inlinedVal2.at(x);
      return inlinedVal1 - inlinedVal3
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
cf_up = function cf_up(ratioRegions2, c_down, f_down, y, x) {
  let tmp, tmp1, arg$Matrix$0$, arg$Matrix$0$1;
  tmp = y - 1;
  if (c_down instanceof ratioRegions2.Matrix.class) {
    let inlinedVal, inlinedVal1;
    arg$Matrix$0$1 = c_down.a;
    inlinedVal = arg$Matrix$0$1.at(tmp);
    inlinedVal1 = inlinedVal.at(x);
    tmp1 = y - 1;
    if (f_down instanceof ratioRegions2.Matrix.class) {
      let inlinedVal2, inlinedVal3;
      arg$Matrix$0$ = f_down.a;
      inlinedVal2 = arg$Matrix$0$.at(tmp1);
      inlinedVal3 = inlinedVal2.at(x);
      return inlinedVal1 + inlinedVal3
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (ratioRegions2, n, a) {
  return (i) => {
    return lambda(ratioRegions2, n, a, i)
  }
});
lambda = (undefined, function (ratioRegions2, n, a, i) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    let tmp, arr, i1, n1, x, inlinedVal;
    tmp = [];
    arr = tmp;
    i1 = 0;
    n1 = n;
    x = a;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp1;
        scrut1 = i1 == n1;
        if (scrut1 === true) {
          inlinedVal = arr;
          break inlinedLbl
        }
        arr[i1] = x;
        tmp1 = i1 + 1;
        i1 = tmp1;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
(class ratioRegions {
  static {
    ratioRegions1 = this
  }
  static get [listExists$tailrec$accessorSymbol]() { return ratioRegions.#listExists$tailrec; }
  static get [doo$accessorSymbol]() { return ratioRegions.#doo; }
  static get [map_n_vector$accessorSymbol]() { return ratioRegions.#map_n_vector; }
  static get [every_n$accessorSymbol]() { return ratioRegions.#every_n; }
  static {
    ratioRegions.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        ratioRegions.Cons.class = this
      }
      constructor(head, tail) {
        this.head = head;
        this.tail = tail;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cons", ["head", "tail"]];
    });
    (class Nil {
      static {
        new this
      }
      constructor() {
        ratioRegions.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    ratioRegions.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        ratioRegions.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    ratioRegions.Matrix = function Matrix(a) {
      return globalThis.Object.freeze(new Matrix.class(a));
    };
    (class Matrix {
      static {
        ratioRegions.Matrix.class = this
      }
      constructor(a) {
        this.a = a;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Matrix", ["a"]];
    });
    ratioRegions.PInt = function PInt(n) {
      return globalThis.Object.freeze(new PInt.class(n));
    };
    (class PInt {
      static {
        ratioRegions.PInt.class = this
      }
      constructor(n) {
        this.n = n;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PInt", ["n"]];
    });
    ratioRegions.PString = function PString(s) {
      return globalThis.Object.freeze(new PString.class(s));
    };
    (class PString {
      static {
        ratioRegions.PString.class = this
      }
      constructor(s) {
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PString", ["s"]];
    });
    (class QNil {
      static {
        new this
      }
      constructor() {
        ratioRegions.QNil = this;
        Object.defineProperty(this, "class", {
          value: QNil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "QNil"];
    });
    ratioRegions.QCons = function QCons(head, rest) {
      return globalThis.Object.freeze(new QCons.class(head, rest));
    };
    (class QCons {
      static {
        ratioRegions.QCons.class = this
      }
      constructor(head, rest) {
        this.head = head;
        this.rest = rest;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "QCons", ["head", "rest"]];
    });
  }
  static #listExists$tailrec(p, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof ratioRegions.Nil.class) {
        return false
      } else if (l instanceof ratioRegions.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(p(arg$Cons$0$));
        if (tmp === false) {
          l = arg$Cons$1$;
          continue loopLabel
        }
        return true;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #listApp$tailrec(f, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$;
      if (l instanceof ratioRegions.Nil.class) {
        return runtime.Unit
      } else if (l instanceof ratioRegions.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        runtime.safeCall(f(arg$Cons$0$));
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #listApp(f) {
    return (l) => {
      return ratioRegions.#listApp$tailrec(f, l)
    }
  }
  static #listExists(p) {
    return (l) => {
      return ratioRegions.#listExists$tailrec(p, l)
    }
  }
  static #fillArray(arr, i, n, x) {
    loopLabel: while (true) {
      let scrut, tmp;
      scrut = i == n;
      if (scrut === true) {
        return arr
      }
      arr[i] = x;
      tmp = i + 1;
      i = tmp;
      continue loopLabel;
    }
  }
  static #array_alloc(n, init) {
    let tmp;
    tmp = [];
    return ratioRegions.#fillArray(tmp, 0, n, init)
  }
  static #intToString(n) {
    return ""
  }
  static #intMin(a, b) {
    let scrut;
    scrut = a < b;
    if (scrut === true) {
      return a
    }
    return b;
  }
  static #not_(b) {
    switch (b) {
      case false:
        return true;
      case true:
        return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  static #print_(s) {
    return runtime.Unit
  }
  static #doo(max, f) {
    let max1, f1, i, inlinedVal;
    max1 = max;
    f1 = f;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp;
        scrut = i >= max1;
        if (scrut === true) {
          inlinedVal = runtime.Unit;
          break inlinedLbl
        }
        runtime.safeCall(f1(i));
        tmp = i + 1;
        i = tmp;
        continue loopLabel;
      }
    }
    return inlinedVal
  }
  static #zero(x) {
    return x == 0
  }
  static #cons(x, xs) {
    return ratioRegions.Cons(x, xs)
  }
  static #make_vector(n, init) {
    let scrut;
    scrut = n > 0;
    if (scrut === true) {
      return ratioRegions.#array_alloc(n, init)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vector_length(v) {
    return v.length
  }
  static #vector_ref(v, i) {
    return v.at(i)
  }
  static #vector_set(v, i, x) {
    v[i] = x;
    return runtime.Unit
  }
  static #map_n_vector(n, f) {
    let scrut, arr, tmp;
    scrut = n > 0;
    if (scrut === true) {
      let n1, f1, arr1, i;
      tmp = runtime.safeCall(f(0));
      arr = ratioRegions.#array_alloc(n, tmp);
      n1 = n;
      f1 = f;
      arr1 = arr;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp1, tmp2;
          scrut1 = i < n1;
          if (scrut1 === true) {
            tmp1 = runtime.safeCall(f1(i));
            arr1[i] = tmp1;
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      return arr
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #string_length(s) {
    return s.length
  }
  static #string_ref(s, i) {
    return s.at(i)
  }
  static #write_char(c) {
    return runtime.Unit
  }
  static #modulo(a, b) {
    let tmp, tmp1, tmp2;
    tmp = a / b;
    tmp1 = ratioRegions.#floor(tmp);
    tmp2 = b * tmp1;
    return a - tmp2
  }
  static #quotient(a, b) {
    let tmp;
    tmp = a / b;
    return ratioRegions.#floor(tmp)
  }
  static #for_each(l, f) {
    return ratioRegions.#listApp(f)(l)
  }
  static #negative(x) {
    return x < 0
  }
  static #positive(x) {
    return x > 0
  }
  static #min(l) {
    let arg$Cons$0$, arg$Cons$1$;
    if (l instanceof ratioRegions.Cons.class) {
      let ratioRegions2, l1, min, inlinedVal;
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      ratioRegions2 = ratioRegions;
      l1 = arg$Cons$1$;
      min = arg$Cons$0$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l1 instanceof ratioRegions2.Nil.class) {
            inlinedVal = min;
            break inlinedLbl
          } else if (l1 instanceof ratioRegions2.Cons.class) {
            let inlinedVal1, scrut;
            arg$Cons$0$1 = l1.head;
            arg$Cons$1$1 = l1.tail;
            scrut = min < arg$Cons$0$1;
            if (scrut === true) {
              inlinedVal1 = min;
            } else {
              inlinedVal1 = arg$Cons$0$1;
            }
            l1 = arg$Cons$1$1;
            min = inlinedVal1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #every_n(n, p) {
    let n1, p1, i, inlinedVal;
    n1 = n;
    p1 = p;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let tmp, tmp1, tmp2;
        tmp = i >= n1;
        if (tmp === false) {
          tmp1 = runtime.safeCall(p1(i));
          if (tmp1 === true) {
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          inlinedVal = false;
          break inlinedLbl;
        }
        inlinedVal = true;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #some(l, p) {
    return ratioRegions.#listExists(p)(l)
  }
  static #some_vector(v, p) {
    let v1, p1, i, inlinedVal;
    v1 = v;
    p1 = p;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let tmp, tmp1, tmp2, inlinedVal1;
        inlinedVal1 = v1.length;
        tmp = i < inlinedVal1;
        if (tmp === true) {
          let inlinedVal2;
          inlinedVal2 = v1.at(i);
          tmp1 = runtime.safeCall(p1(inlinedVal2));
          if (tmp1 === false) {
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          inlinedVal = true;
          break inlinedLbl;
        }
        inlinedVal = false;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #px(p) {
    let element0$;
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      element0$ = runtime.Tuple.get(p, 0);
      runtime.Tuple.get(p, 1);
      return element0$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #py(p) {
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      return runtime.Tuple.get(p, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #make_matrix(m, n, a) {
    let tmp, lambda$here;
    lambda$here = lambda$(ratioRegions, n, a);
    tmp = ratioRegions.#map_n_vector(m, lambda$here);
    return ratioRegions.Matrix(tmp)
  }
  static #matrix_rows(mat) {
    let arg$Matrix$0$;
    if (mat instanceof ratioRegions.Matrix.class) {
      arg$Matrix$0$ = mat.a;
      return ratioRegions.#vector_length(arg$Matrix$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrix_columns(mat) {
    let arg$Matrix$0$, tmp;
    if (mat instanceof ratioRegions.Matrix.class) {
      arg$Matrix$0$ = mat.a;
      tmp = ratioRegions.#vector_ref(arg$Matrix$0$, 0);
      return ratioRegions.#vector_length(tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrix_ref(mat, i, j) {
    let arg$Matrix$0$, tmp;
    if (mat instanceof ratioRegions.Matrix.class) {
      arg$Matrix$0$ = mat.a;
      tmp = ratioRegions.#vector_ref(arg$Matrix$0$, i);
      return ratioRegions.#vector_ref(tmp, j)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #matrix_set(mat, i, j, x) {
    let arg$Matrix$0$, tmp;
    if (mat instanceof ratioRegions.Matrix.class) {
      arg$Matrix$0$ = mat.a;
      tmp = ratioRegions.#vector_ref(arg$Matrix$0$, i);
      return ratioRegions.#vector_set(tmp, j, x)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #pormat(control_string, values) {
    let ratioRegions2, control_string1, i, values1, inlinedVal;
    ratioRegions2 = ratioRegions;
    control_string1 = control_string;
    i = 0;
    values1 = values;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal1;
        inlinedVal1 = control_string1.length;
        tmp = i == inlinedVal1;
        switch (tmp) {
          case false:
            {
              let inlinedVal2;
              inlinedVal2 = control_string1.at(i);
              scrut = inlinedVal2 == "~";
              if (scrut === true) {
                let inlinedVal3;
                tmp1 = i + 1;
                inlinedVal3 = control_string1.at(tmp1);
                scrut1 = inlinedVal3 == "s";
                if (scrut1 === true) {
                  if (values1 instanceof ratioRegions2.Cons.class) {
                    arg$Cons$0$ = values1.head;
                    arg$Cons$1$ = values1.tail;
                    if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                      tmp2 = i + 2;
                      i = tmp2;
                      values1 = arg$Cons$1$;
                      continue loopLabel
                    }
                    scrut2 = inlinedVal3 == "a";
                    if (scrut2 === true) {
                      if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                        tmp5 = i + 2;
                        i = tmp5;
                        values1 = arg$Cons$1$;
                        continue loopLabel
                      }
                    }
                    scrut3 = inlinedVal3 == "%";
                    if (scrut3 === true) {
                      tmp3 = i + 2;
                      i = tmp3;
                      continue loopLabel
                    }
                    tmp4 = i + 1;
                    i = tmp4;
                    continue loopLabel;
                  }
                  scrut3 = inlinedVal3 == "%";
                  if (scrut3 === true) {
                    tmp6 = i + 2;
                    i = tmp6;
                    continue loopLabel
                  }
                  tmp7 = i + 1;
                  i = tmp7;
                  continue loopLabel;
                }
                scrut2 = inlinedVal3 == "a";
                if (scrut2 === true) {
                  if (values1 instanceof ratioRegions2.Cons.class) {
                    arg$Cons$0$ = values1.head;
                    arg$Cons$1$ = values1.tail;
                    if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                      tmp10 = i + 2;
                      i = tmp10;
                      values1 = arg$Cons$1$;
                      continue loopLabel
                    }
                  }
                }
                scrut3 = inlinedVal3 == "%";
                if (scrut3 === true) {
                  tmp8 = i + 2;
                  i = tmp8;
                  continue loopLabel
                }
                tmp9 = i + 1;
                i = tmp9;
                continue loopLabel;
              }
              tmp11 = i + 1;
              i = tmp11;
              continue loopLabel;
            }
          case true:
            inlinedVal = runtime.Unit;
            break inlinedLbl;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
  }
  static #positive_min(x, y) {
    let scrut;
    scrut = ratioRegions.#negative(x);
    if (scrut === true) {
      return y
    }
    return ratioRegions.#intMin(x, y);
  }
  static #positive_minus(x, y) {
    let scrut;
    scrut = ratioRegions.#negative(x);
    if (scrut === true) {
      return x
    }
    return x - y;
  }
  static #positive_plus(x, y) {
    let scrut;
    scrut = ratioRegions.#negative(x);
    if (scrut === true) {
      return x
    }
    return x + y;
  }
  static #rao_ratio_region(c_right, c_down, w, lg_max_v) {
    let height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, ratioRegions2, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, lg_v, v_max, inlinedVal;
    height = ratioRegions.#matrix_rows(w);
    width = ratioRegions.#matrix_columns(w);
    tmp = width - 1;
    f_right = ratioRegions.#make_matrix(height, tmp, 0);
    tmp1 = height - 1;
    f_down = ratioRegions.#make_matrix(tmp1, width, 0);
    f_t = ratioRegions.#make_matrix(height, width, 0);
    h = ratioRegions.#make_matrix(height, width, 0);
    e = ratioRegions.#make_matrix(height, width, 0);
    marked = ratioRegions.#make_matrix(height, width, false);
    tmp2 = height * width;
    m1 = tmp2 + 2;
    tmp3 = 2 * height;
    tmp4 = tmp3 * width;
    m2 = tmp4 + 2;
    tmp5 = 2 * height;
    tmp6 = tmp5 * width;
    tmp7 = tmp6 + 3;
    q = ratioRegions.#make_vector(tmp7, ratioRegions.Nil);
    ratioRegions2 = ratioRegions;
    c_right1 = c_right;
    c_down1 = c_down;
    w1 = w;
    height1 = height;
    width1 = width;
    f_right1 = f_right;
    f_down1 = f_down;
    f_t1 = f_t;
    h1 = h;
    e1 = e;
    marked1 = marked;
    m11 = m1;
    m21 = m2;
    q1 = q;
    lg_v = lg_max_v;
    v_max = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let v, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, inlinedVal1;
        inlinedVal1 = lg_v < 0;
        if (inlinedVal1 === true) {
          let inlinedVal2, pushes, lifts, relabels, tmp19, tmp20, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m12, m22, q2, v1, pushes1, lifts1, relabels1, i, p, lambda$here5;
          tmp8 = ratioRegions2.PInt(v_max);
          tmp9 = ratioRegions2.Cons(tmp8, ratioRegions2.Nil);
          ratioRegions2.#pormat("V-MAX=~s~%", tmp9);
          tmp10 = v_max + 1;
          lambda$here = lambda$9(ratioRegions2, width1, f_t1, e1);
          ratioRegions2.#doo(height1, lambda$here);
          lambda$here1 = lambda$8(ratioRegions2, width1, f_right1);
          ratioRegions2.#doo(height1, lambda$here1);
          tmp19 = height1 - 1;
          lambda$here2 = lambda$7(ratioRegions2, width1, f_down1);
          ratioRegions2.#doo(tmp19, lambda$here2);
          lambda$here3 = lambda$6(ratioRegions2, width1, e1);
          ratioRegions2.#doo(height1, lambda$here3);
          tmp20 = width1 - 1;
          lambda$here4 = lambda$5(ratioRegions2, height1, e1);
          ratioRegions2.#doo(tmp20, lambda$here4);
          pushes = new ratioRegions2.Ref.class(0);
          lifts = new ratioRegions2.Ref.class(0);
          relabels = new ratioRegions2.Ref.class(0);
          ratioRegions3 = ratioRegions2;
          c_right2 = c_right1;
          c_down2 = c_down1;
          w2 = w1;
          height2 = height1;
          width2 = width1;
          f_right2 = f_right1;
          f_down2 = f_down1;
          f_t2 = f_t1;
          h2 = h1;
          e2 = e1;
          marked2 = marked1;
          m12 = m11;
          m22 = m21;
          q2 = q1;
          v1 = tmp10;
          pushes1 = pushes;
          lifts1 = lifts;
          relabels1 = relabels;
          i = 0;
          p = false;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, lambda$here6, lambda$here7, lambda$here8, lambda$here9, lambda$here10, inlinedVal3, inlinedVal4, tmp66, tmp67, inlinedVal5;
              tmp66 = i / 6;
              inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp66));
              tmp67 = 6 * inlinedVal5;
              inlinedVal3 = i - tmp67;
              inlinedVal4 = inlinedVal3 == 0;
              if (inlinedVal4 === true) {
                let inlinedVal6;
                switch (p) {
                  case false:
                    inlinedVal6 = true;
                    break;
                  case true:
                    inlinedVal6 = false;
                    break;
                  default:
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                tmp21 = inlinedVal6;
              } else {
                tmp21 = false;
              }
              if (tmp21 === true) {
                relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked2, m12, v1);
                tmp22 = relabels1.value + 1;
                relabels1.value = tmp22;
                lambda$here6 = lambda$17(ratioRegions3, width2, h2, e2, m12);
                scrut = ratioRegions3.#every_n(height2, lambda$here6);
                if (scrut === true) {
                  tmp23 = ratioRegions3.PInt(pushes1.value);
                  scrut1 = pushes1.value == 1;
                  if (scrut1 === true) {
                    tmp24 = "";
                  } else {
                    tmp24 = "es";
                  }
                  tmp25 = ratioRegions3.PString(tmp24);
                  tmp26 = ratioRegions3.PInt(lifts1.value);
                  scrut2 = lifts1.value == 1;
                  if (scrut2 === true) {
                    tmp27 = "";
                  } else {
                    tmp27 = "s";
                  }
                  tmp28 = ratioRegions3.PString(tmp27);
                  tmp29 = ratioRegions3.PInt(relabels1.value);
                  scrut3 = relabels1.value == 1;
                  if (scrut3 === true) {
                    tmp30 = "";
                  } else {
                    tmp30 = "s";
                  }
                  tmp31 = ratioRegions3.PString(tmp30);
                  tmp32 = ratioRegions3.PInt(i);
                  scrut4 = i == 1;
                  if (scrut4 === true) {
                    tmp33 = "";
                  } else {
                    tmp33 = "s";
                  }
                  tmp34 = ratioRegions3.PString(tmp33);
                  tmp35 = ratioRegions3.Cons(tmp34, ratioRegions3.Nil);
                  tmp36 = ratioRegions3.Cons(tmp32, tmp35);
                  tmp37 = ratioRegions3.Cons(tmp31, tmp36);
                  tmp38 = ratioRegions3.Cons(tmp29, tmp37);
                  tmp39 = ratioRegions3.Cons(tmp28, tmp38);
                  tmp40 = ratioRegions3.Cons(tmp26, tmp39);
                  tmp41 = ratioRegions3.Cons(tmp25, tmp40);
                  tmp42 = ratioRegions3.Cons(tmp23, tmp41);
                  ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp42);
                  break inlinedLbl1
                }
                {
                  let inlinedVal6;
                  inlinedVal6 = q2.length;
                  lambda$here7 = lambda$16(ratioRegions3, q2);
                  ratioRegions3.#doo(inlinedVal6, lambda$here7);
                  lambda$here8 = lambda$15(ratioRegions3, width2, marked2);
                  ratioRegions3.#doo(height2, lambda$here8);
                  lambda$here9 = lambda$14(ratioRegions3, width2, h2, e2, marked2, q2);
                  ratioRegions3.#doo(height2, lambda$here9);
                  p = true;
                  continue loopLabel1;
                }
              }
              lambda$here10 = lambda$13(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
              scrut5 = ratioRegions3.#some_vector(q2, lambda$here10);
              if (scrut5 === true) {
                let inlinedVal6, ratioRegions4, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked3, m13, m23, q3, v2, pushes2, lifts2, k;
                inlinedVal6 = q2.length;
                tmp43 = inlinedVal6 - 1;
                ratioRegions4 = ratioRegions3;
                c_right3 = c_right2;
                c_down3 = c_down2;
                w3 = w2;
                height3 = height2;
                width3 = width2;
                f_right3 = f_right2;
                f_down3 = f_down2;
                f_t3 = f_t2;
                h3 = h2;
                e3 = e2;
                marked3 = marked2;
                m13 = m12;
                m23 = m22;
                q3 = q2;
                v2 = v1;
                pushes2 = pushes1;
                lifts2 = lifts1;
                k = tmp43;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let tmp68, inlinedVal7;
                    inlinedVal7 = k < 0;
                    switch (inlinedVal7) {
                      case false:
                        {
                          let inlinedVal8, x, f, f1;
                          inlinedVal8 = q3.at(k);
                          x = ratioRegions4.Nil;
                          q3[k] = x;
                          f = lambda$18(ratioRegions4, marked3);
                          ratioRegions4.#listApp$tailrec(f, inlinedVal8);
                          f1 = rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions4, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked3, m13, m23, q3, v2, pushes2, lifts2);
                          ratioRegions4.#listApp$tailrec(f1, inlinedVal8);
                          tmp68 = k - 1;
                          k = tmp68;
                          continue loopLabel2;
                        }
                      case true:
                        break inlinedLbl2;
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                tmp44 = i + 1;
                i = tmp44;
                p = false;
                continue loopLabel1
              }
              relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked2, m12, v1);
              tmp45 = relabels1.value + 1;
              relabels1.value = tmp45;
              tmp46 = ratioRegions3.PInt(pushes1.value);
              scrut6 = pushes1.value == 1;
              if (scrut6 === true) {
                tmp47 = "";
              } else {
                tmp47 = "es";
              }
              tmp48 = ratioRegions3.PString(tmp47);
              tmp49 = ratioRegions3.PInt(lifts1.value);
              scrut7 = lifts1.value == 1;
              if (scrut7 === true) {
                tmp50 = "";
              } else {
                tmp50 = "s";
              }
              tmp51 = ratioRegions3.PString(tmp50);
              tmp52 = ratioRegions3.PInt(relabels1.value);
              scrut8 = relabels1.value == 1;
              if (scrut8 === true) {
                tmp53 = "";
              } else {
                tmp53 = "s";
              }
              tmp54 = ratioRegions3.PString(tmp53);
              tmp55 = ratioRegions3.PInt(i);
              scrut9 = i == 1;
              if (scrut9 === true) {
                tmp56 = "";
              } else {
                tmp56 = "s";
              }
              tmp57 = ratioRegions3.PString(tmp56);
              tmp58 = ratioRegions3.Cons(tmp57, ratioRegions3.Nil);
              tmp59 = ratioRegions3.Cons(tmp55, tmp58);
              tmp60 = ratioRegions3.Cons(tmp54, tmp59);
              tmp61 = ratioRegions3.Cons(tmp52, tmp60);
              tmp62 = ratioRegions3.Cons(tmp51, tmp61);
              tmp63 = ratioRegions3.Cons(tmp49, tmp62);
              tmp64 = ratioRegions3.Cons(tmp48, tmp63);
              tmp65 = ratioRegions3.Cons(tmp46, tmp64);
              ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp65);
              break inlinedLbl1;
            }
          }
          lambda$here5 = lambda$1(ratioRegions2, width1, h1, m11);
          inlinedVal2 = ratioRegions2.#map_n_vector(height1, lambda$here5);
          inlinedVal = inlinedVal2;
          break inlinedLbl
        }
        {
          let inlinedVal2, pushes, lifts, relabels, tmp19, tmp20, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m12, m22, q2, v1, pushes1, lifts1, relabels1, i, p, lambda$here5;
          tmp11 = loopPow(ratioRegions2, lg_v, 1);
          v = v_max + tmp11;
          tmp12 = ratioRegions2.PInt(lg_v);
          tmp13 = ratioRegions2.PInt(v_max);
          tmp14 = ratioRegions2.PInt(v);
          tmp15 = ratioRegions2.Cons(tmp14, ratioRegions2.Nil);
          tmp16 = ratioRegions2.Cons(tmp13, tmp15);
          tmp17 = ratioRegions2.Cons(tmp12, tmp16);
          ratioRegions2.#pormat("LG-V=~s, V-MAX=~s, V=~s~%", tmp17);
          lambda$here = lambda$9(ratioRegions2, width1, f_t1, e1);
          ratioRegions2.#doo(height1, lambda$here);
          lambda$here1 = lambda$8(ratioRegions2, width1, f_right1);
          ratioRegions2.#doo(height1, lambda$here1);
          tmp19 = height1 - 1;
          lambda$here2 = lambda$7(ratioRegions2, width1, f_down1);
          ratioRegions2.#doo(tmp19, lambda$here2);
          lambda$here3 = lambda$6(ratioRegions2, width1, e1);
          ratioRegions2.#doo(height1, lambda$here3);
          tmp20 = width1 - 1;
          lambda$here4 = lambda$5(ratioRegions2, height1, e1);
          ratioRegions2.#doo(tmp20, lambda$here4);
          pushes = new ratioRegions2.Ref.class(0);
          lifts = new ratioRegions2.Ref.class(0);
          relabels = new ratioRegions2.Ref.class(0);
          ratioRegions3 = ratioRegions2;
          c_right2 = c_right1;
          c_down2 = c_down1;
          w2 = w1;
          height2 = height1;
          width2 = width1;
          f_right2 = f_right1;
          f_down2 = f_down1;
          f_t2 = f_t1;
          h2 = h1;
          e2 = e1;
          marked2 = marked1;
          m12 = m11;
          m22 = m21;
          q2 = q1;
          v1 = v;
          pushes1 = pushes;
          lifts1 = lifts;
          relabels1 = relabels;
          i = 0;
          p = false;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, lambda$here6, lambda$here7, lambda$here8, lambda$here9, lambda$here10, inlinedVal3, inlinedVal4, tmp66, tmp67, inlinedVal5;
              tmp66 = i / 6;
              inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp66));
              tmp67 = 6 * inlinedVal5;
              inlinedVal3 = i - tmp67;
              inlinedVal4 = inlinedVal3 == 0;
              if (inlinedVal4 === true) {
                let inlinedVal6;
                switch (p) {
                  case false:
                    inlinedVal6 = true;
                    break;
                  case true:
                    inlinedVal6 = false;
                    break;
                  default:
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                }
                tmp21 = inlinedVal6;
              } else {
                tmp21 = false;
              }
              if (tmp21 === true) {
                relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked2, m12, v1);
                tmp22 = relabels1.value + 1;
                relabels1.value = tmp22;
                lambda$here6 = lambda$17(ratioRegions3, width2, h2, e2, m12);
                scrut = ratioRegions3.#every_n(height2, lambda$here6);
                if (scrut === true) {
                  tmp23 = ratioRegions3.PInt(pushes1.value);
                  scrut1 = pushes1.value == 1;
                  if (scrut1 === true) {
                    tmp24 = "";
                  } else {
                    tmp24 = "es";
                  }
                  tmp25 = ratioRegions3.PString(tmp24);
                  tmp26 = ratioRegions3.PInt(lifts1.value);
                  scrut2 = lifts1.value == 1;
                  if (scrut2 === true) {
                    tmp27 = "";
                  } else {
                    tmp27 = "s";
                  }
                  tmp28 = ratioRegions3.PString(tmp27);
                  tmp29 = ratioRegions3.PInt(relabels1.value);
                  scrut3 = relabels1.value == 1;
                  if (scrut3 === true) {
                    tmp30 = "";
                  } else {
                    tmp30 = "s";
                  }
                  tmp31 = ratioRegions3.PString(tmp30);
                  tmp32 = ratioRegions3.PInt(i);
                  scrut4 = i == 1;
                  if (scrut4 === true) {
                    tmp33 = "";
                  } else {
                    tmp33 = "s";
                  }
                  tmp34 = ratioRegions3.PString(tmp33);
                  tmp35 = ratioRegions3.Cons(tmp34, ratioRegions3.Nil);
                  tmp36 = ratioRegions3.Cons(tmp32, tmp35);
                  tmp37 = ratioRegions3.Cons(tmp31, tmp36);
                  tmp38 = ratioRegions3.Cons(tmp29, tmp37);
                  tmp39 = ratioRegions3.Cons(tmp28, tmp38);
                  tmp40 = ratioRegions3.Cons(tmp26, tmp39);
                  tmp41 = ratioRegions3.Cons(tmp25, tmp40);
                  tmp42 = ratioRegions3.Cons(tmp23, tmp41);
                  ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp42);
                  break inlinedLbl1
                }
                {
                  let inlinedVal6;
                  inlinedVal6 = q2.length;
                  lambda$here7 = lambda$16(ratioRegions3, q2);
                  ratioRegions3.#doo(inlinedVal6, lambda$here7);
                  lambda$here8 = lambda$15(ratioRegions3, width2, marked2);
                  ratioRegions3.#doo(height2, lambda$here8);
                  lambda$here9 = lambda$14(ratioRegions3, width2, h2, e2, marked2, q2);
                  ratioRegions3.#doo(height2, lambda$here9);
                  p = true;
                  continue loopLabel1;
                }
              }
              lambda$here10 = lambda$13(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
              scrut5 = ratioRegions3.#some_vector(q2, lambda$here10);
              if (scrut5 === true) {
                let inlinedVal6, ratioRegions4, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked3, m13, m23, q3, v2, pushes2, lifts2, k;
                inlinedVal6 = q2.length;
                tmp43 = inlinedVal6 - 1;
                ratioRegions4 = ratioRegions3;
                c_right3 = c_right2;
                c_down3 = c_down2;
                w3 = w2;
                height3 = height2;
                width3 = width2;
                f_right3 = f_right2;
                f_down3 = f_down2;
                f_t3 = f_t2;
                h3 = h2;
                e3 = e2;
                marked3 = marked2;
                m13 = m12;
                m23 = m22;
                q3 = q2;
                v2 = v1;
                pushes2 = pushes1;
                lifts2 = lifts1;
                k = tmp43;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let tmp68, inlinedVal7;
                    inlinedVal7 = k < 0;
                    switch (inlinedVal7) {
                      case false:
                        {
                          let inlinedVal8, x, f, f1;
                          inlinedVal8 = q3.at(k);
                          x = ratioRegions4.Nil;
                          q3[k] = x;
                          f = lambda$18(ratioRegions4, marked3);
                          ratioRegions4.#listApp$tailrec(f, inlinedVal8);
                          f1 = rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions4, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked3, m13, m23, q3, v2, pushes2, lifts2);
                          ratioRegions4.#listApp$tailrec(f1, inlinedVal8);
                          tmp68 = k - 1;
                          k = tmp68;
                          continue loopLabel2;
                        }
                      case true:
                        break inlinedLbl2;
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                tmp44 = i + 1;
                i = tmp44;
                p = false;
                continue loopLabel1
              }
              relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked2, m12, v1);
              tmp45 = relabels1.value + 1;
              relabels1.value = tmp45;
              tmp46 = ratioRegions3.PInt(pushes1.value);
              scrut6 = pushes1.value == 1;
              if (scrut6 === true) {
                tmp47 = "";
              } else {
                tmp47 = "es";
              }
              tmp48 = ratioRegions3.PString(tmp47);
              tmp49 = ratioRegions3.PInt(lifts1.value);
              scrut7 = lifts1.value == 1;
              if (scrut7 === true) {
                tmp50 = "";
              } else {
                tmp50 = "s";
              }
              tmp51 = ratioRegions3.PString(tmp50);
              tmp52 = ratioRegions3.PInt(relabels1.value);
              scrut8 = relabels1.value == 1;
              if (scrut8 === true) {
                tmp53 = "";
              } else {
                tmp53 = "s";
              }
              tmp54 = ratioRegions3.PString(tmp53);
              tmp55 = ratioRegions3.PInt(i);
              scrut9 = i == 1;
              if (scrut9 === true) {
                tmp56 = "";
              } else {
                tmp56 = "s";
              }
              tmp57 = ratioRegions3.PString(tmp56);
              tmp58 = ratioRegions3.Cons(tmp57, ratioRegions3.Nil);
              tmp59 = ratioRegions3.Cons(tmp55, tmp58);
              tmp60 = ratioRegions3.Cons(tmp54, tmp59);
              tmp61 = ratioRegions3.Cons(tmp52, tmp60);
              tmp62 = ratioRegions3.Cons(tmp51, tmp61);
              tmp63 = ratioRegions3.Cons(tmp49, tmp62);
              tmp64 = ratioRegions3.Cons(tmp48, tmp63);
              tmp65 = ratioRegions3.Cons(tmp46, tmp64);
              ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp65);
              break inlinedLbl1;
            }
          }
          tmp18 = lg_v - 1;
          lambda$here5 = lambda$3(ratioRegions2, width1, h1, m11);
          inlinedVal2 = ratioRegions2.#every_n(height1, lambda$here5);
          if (inlinedVal2 === true) {
            lg_v = tmp18;
            v_max = v;
            continue loopLabel
          }
          lg_v = tmp18;
          v_max = v_max;
          continue loopLabel;
        }
      }
    }
    return inlinedVal
  }
  static #doit(n) {
    let c_right, c_down, tmp, tmp1, tmp2, tmp3, lambda$here, lambda$here1, m1, m2, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, init, ratioRegions2, c_right1, c_down1, w, height, width, f_right, f_down, f_t, h, e, marked, m11, m21, q, lg_v, v_max, inlinedVal6, arg$Matrix$0$, arg$Matrix$0$1, tmp12, lambda$here2, tmp13, lambda$here3, tmp14, lambda$here4, tmp15, lambda$here5, tmp16, lambda$here6, tmp17, lambda$here7, scrut;
    tmp = n - 1;
    c_right = ratioRegions.#make_matrix(n, tmp, -1);
    tmp1 = n - 1;
    c_down = ratioRegions.#make_matrix(tmp1, n, -1);
    lambda$here = lambda$28(ratioRegions, n, n, c_right);
    ratioRegions.#doo(n, lambda$here);
    tmp2 = n - 1;
    lambda$here1 = lambda$27(ratioRegions, n, n, c_down);
    ratioRegions.#doo(tmp2, lambda$here1);
    tmp3 = ratioRegions.#make_matrix(n, n, 1);
    if (tmp3 instanceof ratioRegions1.Matrix.class) {
      let inlinedVal7;
      arg$Matrix$0$ = tmp3.a;
      inlinedVal7 = arg$Matrix$0$.length;
      if (tmp3 instanceof ratioRegions1.Matrix.class) {
        let inlinedVal8, inlinedVal9;
        arg$Matrix$0$1 = tmp3.a;
        inlinedVal8 = arg$Matrix$0$1.at(0);
        inlinedVal9 = inlinedVal8.length;
        tmp4 = inlinedVal9 - 1;
        lambda$here2 = lambda$(ratioRegions1, tmp4, 0);
        tmp12 = ratioRegions1.#map_n_vector(inlinedVal7, lambda$here2);
        inlinedVal = ratioRegions1.Matrix(tmp12);
        tmp5 = inlinedVal7 - 1;
        lambda$here3 = lambda$(ratioRegions1, inlinedVal9, 0);
        tmp13 = ratioRegions1.#map_n_vector(tmp5, lambda$here3);
        inlinedVal1 = ratioRegions1.Matrix(tmp13);
        lambda$here4 = lambda$(ratioRegions1, inlinedVal9, 0);
        tmp14 = ratioRegions1.#map_n_vector(inlinedVal7, lambda$here4);
        inlinedVal2 = ratioRegions1.Matrix(tmp14);
        lambda$here5 = lambda$(ratioRegions1, inlinedVal9, 0);
        tmp15 = ratioRegions1.#map_n_vector(inlinedVal7, lambda$here5);
        inlinedVal3 = ratioRegions1.Matrix(tmp15);
        lambda$here6 = lambda$(ratioRegions1, inlinedVal9, 0);
        tmp16 = ratioRegions1.#map_n_vector(inlinedVal7, lambda$here6);
        inlinedVal4 = ratioRegions1.Matrix(tmp16);
        lambda$here7 = lambda$(ratioRegions1, inlinedVal9, false);
        tmp17 = ratioRegions1.#map_n_vector(inlinedVal7, lambda$here7);
        inlinedVal5 = ratioRegions1.Matrix(tmp17);
        tmp6 = inlinedVal7 * inlinedVal9;
        m1 = tmp6 + 2;
        tmp7 = 2 * inlinedVal7;
        tmp8 = tmp7 * inlinedVal9;
        m2 = tmp8 + 2;
        tmp9 = 2 * inlinedVal7;
        tmp10 = tmp9 * inlinedVal9;
        tmp11 = tmp10 + 3;
        init = ratioRegions1.Nil;
        scrut = tmp11 > 0;
        if (scrut === true) {
          let tmp18, arr, i, n1, x, inlinedVal10;
          tmp18 = [];
          arr = tmp18;
          i = 0;
          n1 = tmp11;
          x = init;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut1, tmp19;
              scrut1 = i == n1;
              if (scrut1 === true) {
                inlinedVal10 = arr;
                break inlinedLbl
              }
              arr[i] = x;
              tmp19 = i + 1;
              i = tmp19;
              continue loopLabel;
            }
          }
          ratioRegions2 = ratioRegions1;
          c_right1 = c_right;
          c_down1 = c_down;
          w = tmp3;
          height = inlinedVal7;
          width = inlinedVal9;
          f_right = inlinedVal;
          f_down = inlinedVal1;
          f_t = inlinedVal2;
          h = inlinedVal3;
          e = inlinedVal4;
          marked = inlinedVal5;
          m11 = m1;
          m21 = m2;
          q = inlinedVal10;
          lg_v = 15;
          v_max = 0;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let v, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal11;
              inlinedVal11 = lg_v < 0;
              if (inlinedVal11 === true) {
                let inlinedVal12, pushes, lifts, relabels, tmp30, tmp31, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i1, p, lambda$here13;
                tmp19 = ratioRegions2.PInt(v_max);
                tmp20 = ratioRegions2.Cons(tmp19, ratioRegions2.Nil);
                ratioRegions2.#pormat("V-MAX=~s~%", tmp20);
                tmp21 = v_max + 1;
                lambda$here8 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here8);
                lambda$here9 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here9);
                tmp30 = height - 1;
                lambda$here10 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp30, lambda$here10);
                lambda$here11 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here11);
                tmp31 = width - 1;
                lambda$here12 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp31, lambda$here12);
                pushes = new ratioRegions2.Ref.class(0);
                lifts = new ratioRegions2.Ref.class(0);
                relabels = new ratioRegions2.Ref.class(0);
                ratioRegions3 = ratioRegions2;
                c_right2 = c_right1;
                c_down2 = c_down1;
                w1 = w;
                height1 = height;
                width1 = width;
                f_right1 = f_right;
                f_down1 = f_down;
                f_t1 = f_t;
                h1 = h;
                e1 = e;
                marked1 = marked;
                m12 = m11;
                m22 = m21;
                q1 = q;
                v1 = tmp21;
                pushes1 = pushes;
                lifts1 = lifts;
                relabels1 = relabels;
                i1 = 0;
                p = false;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, lambda$here14, lambda$here15, lambda$here16, lambda$here17, lambda$here18, inlinedVal13, inlinedVal14, tmp77, tmp78, inlinedVal15;
                    tmp77 = i1 / 6;
                    inlinedVal15 = runtime.safeCall(globalThis.Math.floor(tmp77));
                    tmp78 = 6 * inlinedVal15;
                    inlinedVal13 = i1 - tmp78;
                    inlinedVal14 = inlinedVal13 == 0;
                    if (inlinedVal14 === true) {
                      let inlinedVal16;
                      switch (p) {
                        case false:
                          inlinedVal16 = true;
                          break;
                        case true:
                          inlinedVal16 = false;
                          break;
                        default:
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp32 = inlinedVal16;
                    } else {
                      tmp32 = false;
                    }
                    if (tmp32 === true) {
                      relabel(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp33 = relabels1.value + 1;
                      relabels1.value = tmp33;
                      lambda$here14 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here14);
                      if (scrut1 === true) {
                        tmp34 = ratioRegions3.PInt(pushes1.value);
                        scrut2 = pushes1.value == 1;
                        if (scrut2 === true) {
                          tmp35 = "";
                        } else {
                          tmp35 = "es";
                        }
                        tmp36 = ratioRegions3.PString(tmp35);
                        tmp37 = ratioRegions3.PInt(lifts1.value);
                        scrut3 = lifts1.value == 1;
                        if (scrut3 === true) {
                          tmp38 = "";
                        } else {
                          tmp38 = "s";
                        }
                        tmp39 = ratioRegions3.PString(tmp38);
                        tmp40 = ratioRegions3.PInt(relabels1.value);
                        scrut4 = relabels1.value == 1;
                        if (scrut4 === true) {
                          tmp41 = "";
                        } else {
                          tmp41 = "s";
                        }
                        tmp42 = ratioRegions3.PString(tmp41);
                        tmp43 = ratioRegions3.PInt(i1);
                        scrut5 = i1 == 1;
                        if (scrut5 === true) {
                          tmp44 = "";
                        } else {
                          tmp44 = "s";
                        }
                        tmp45 = ratioRegions3.PString(tmp44);
                        tmp46 = ratioRegions3.Cons(tmp45, ratioRegions3.Nil);
                        tmp47 = ratioRegions3.Cons(tmp43, tmp46);
                        tmp48 = ratioRegions3.Cons(tmp42, tmp47);
                        tmp49 = ratioRegions3.Cons(tmp40, tmp48);
                        tmp50 = ratioRegions3.Cons(tmp39, tmp49);
                        tmp51 = ratioRegions3.Cons(tmp37, tmp50);
                        tmp52 = ratioRegions3.Cons(tmp36, tmp51);
                        tmp53 = ratioRegions3.Cons(tmp34, tmp52);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp53);
                        break inlinedLbl2
                      }
                      {
                        let inlinedVal16;
                        inlinedVal16 = q1.length;
                        lambda$here15 = lambda$16(ratioRegions3, q1);
                        ratioRegions3.#doo(inlinedVal16, lambda$here15);
                        lambda$here16 = lambda$15(ratioRegions3, width1, marked1);
                        ratioRegions3.#doo(height1, lambda$here16);
                        lambda$here17 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
                        ratioRegions3.#doo(height1, lambda$here17);
                        p = true;
                        continue loopLabel2;
                      }
                    }
                    lambda$here18 = lambda$13(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                    scrut6 = ratioRegions3.#some_vector(q1, lambda$here18);
                    if (scrut6 === true) {
                      let inlinedVal16, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal16 = q1.length;
                      tmp54 = inlinedVal16 - 1;
                      ratioRegions4 = ratioRegions3;
                      c_right3 = c_right2;
                      c_down3 = c_down2;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked2 = marked1;
                      m13 = m12;
                      m23 = m22;
                      q2 = q1;
                      v2 = v1;
                      pushes2 = pushes1;
                      lifts2 = lifts1;
                      k = tmp54;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let tmp79, inlinedVal17;
                          inlinedVal17 = k < 0;
                          switch (inlinedVal17) {
                            case false:
                              {
                                let inlinedVal18, x1, f, f1;
                                inlinedVal18 = q2.at(k);
                                x1 = ratioRegions4.Nil;
                                q2[k] = x1;
                                f = lambda$18(ratioRegions4, marked2);
                                ratioRegions4.#listApp$tailrec(f, inlinedVal18);
                                f1 = doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                ratioRegions4.#listApp$tailrec(f1, inlinedVal18);
                                tmp79 = k - 1;
                                k = tmp79;
                                continue loopLabel3;
                              }
                            case true:
                              break inlinedLbl3;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp55 = i1 + 1;
                      i1 = tmp55;
                      p = false;
                      continue loopLabel2
                    }
                    relabel(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp56 = relabels1.value + 1;
                    relabels1.value = tmp56;
                    tmp57 = ratioRegions3.PInt(pushes1.value);
                    scrut7 = pushes1.value == 1;
                    if (scrut7 === true) {
                      tmp58 = "";
                    } else {
                      tmp58 = "es";
                    }
                    tmp59 = ratioRegions3.PString(tmp58);
                    tmp60 = ratioRegions3.PInt(lifts1.value);
                    scrut8 = lifts1.value == 1;
                    if (scrut8 === true) {
                      tmp61 = "";
                    } else {
                      tmp61 = "s";
                    }
                    tmp62 = ratioRegions3.PString(tmp61);
                    tmp63 = ratioRegions3.PInt(relabels1.value);
                    scrut9 = relabels1.value == 1;
                    if (scrut9 === true) {
                      tmp64 = "";
                    } else {
                      tmp64 = "s";
                    }
                    tmp65 = ratioRegions3.PString(tmp64);
                    tmp66 = ratioRegions3.PInt(i1);
                    scrut10 = i1 == 1;
                    if (scrut10 === true) {
                      tmp67 = "";
                    } else {
                      tmp67 = "s";
                    }
                    tmp68 = ratioRegions3.PString(tmp67);
                    tmp69 = ratioRegions3.Cons(tmp68, ratioRegions3.Nil);
                    tmp70 = ratioRegions3.Cons(tmp66, tmp69);
                    tmp71 = ratioRegions3.Cons(tmp65, tmp70);
                    tmp72 = ratioRegions3.Cons(tmp63, tmp71);
                    tmp73 = ratioRegions3.Cons(tmp62, tmp72);
                    tmp74 = ratioRegions3.Cons(tmp60, tmp73);
                    tmp75 = ratioRegions3.Cons(tmp59, tmp74);
                    tmp76 = ratioRegions3.Cons(tmp57, tmp75);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp76);
                    break inlinedLbl2;
                  }
                }
                lambda$here13 = lambda$1(ratioRegions2, width, h, m11);
                inlinedVal12 = ratioRegions2.#map_n_vector(height, lambda$here13);
                inlinedVal6 = inlinedVal12;
                break inlinedLbl1
              }
              {
                let inlinedVal12, pushes, lifts, relabels, tmp30, tmp31, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i1, p, lambda$here13;
                tmp22 = loopPow(ratioRegions2, lg_v, 1);
                v = v_max + tmp22;
                tmp23 = ratioRegions2.PInt(lg_v);
                tmp24 = ratioRegions2.PInt(v_max);
                tmp25 = ratioRegions2.PInt(v);
                tmp26 = ratioRegions2.Cons(tmp25, ratioRegions2.Nil);
                tmp27 = ratioRegions2.Cons(tmp24, tmp26);
                tmp28 = ratioRegions2.Cons(tmp23, tmp27);
                ratioRegions2.#pormat("LG-V=~s, V-MAX=~s, V=~s~%", tmp28);
                lambda$here8 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here8);
                lambda$here9 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here9);
                tmp30 = height - 1;
                lambda$here10 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp30, lambda$here10);
                lambda$here11 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here11);
                tmp31 = width - 1;
                lambda$here12 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp31, lambda$here12);
                pushes = new ratioRegions2.Ref.class(0);
                lifts = new ratioRegions2.Ref.class(0);
                relabels = new ratioRegions2.Ref.class(0);
                ratioRegions3 = ratioRegions2;
                c_right2 = c_right1;
                c_down2 = c_down1;
                w1 = w;
                height1 = height;
                width1 = width;
                f_right1 = f_right;
                f_down1 = f_down;
                f_t1 = f_t;
                h1 = h;
                e1 = e;
                marked1 = marked;
                m12 = m11;
                m22 = m21;
                q1 = q;
                v1 = v;
                pushes1 = pushes;
                lifts1 = lifts;
                relabels1 = relabels;
                i1 = 0;
                p = false;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, lambda$here14, lambda$here15, lambda$here16, lambda$here17, lambda$here18, inlinedVal13, inlinedVal14, tmp77, tmp78, inlinedVal15;
                    tmp77 = i1 / 6;
                    inlinedVal15 = runtime.safeCall(globalThis.Math.floor(tmp77));
                    tmp78 = 6 * inlinedVal15;
                    inlinedVal13 = i1 - tmp78;
                    inlinedVal14 = inlinedVal13 == 0;
                    if (inlinedVal14 === true) {
                      let inlinedVal16;
                      switch (p) {
                        case false:
                          inlinedVal16 = true;
                          break;
                        case true:
                          inlinedVal16 = false;
                          break;
                        default:
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp32 = inlinedVal16;
                    } else {
                      tmp32 = false;
                    }
                    if (tmp32 === true) {
                      relabel(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp33 = relabels1.value + 1;
                      relabels1.value = tmp33;
                      lambda$here14 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here14);
                      if (scrut1 === true) {
                        tmp34 = ratioRegions3.PInt(pushes1.value);
                        scrut2 = pushes1.value == 1;
                        if (scrut2 === true) {
                          tmp35 = "";
                        } else {
                          tmp35 = "es";
                        }
                        tmp36 = ratioRegions3.PString(tmp35);
                        tmp37 = ratioRegions3.PInt(lifts1.value);
                        scrut3 = lifts1.value == 1;
                        if (scrut3 === true) {
                          tmp38 = "";
                        } else {
                          tmp38 = "s";
                        }
                        tmp39 = ratioRegions3.PString(tmp38);
                        tmp40 = ratioRegions3.PInt(relabels1.value);
                        scrut4 = relabels1.value == 1;
                        if (scrut4 === true) {
                          tmp41 = "";
                        } else {
                          tmp41 = "s";
                        }
                        tmp42 = ratioRegions3.PString(tmp41);
                        tmp43 = ratioRegions3.PInt(i1);
                        scrut5 = i1 == 1;
                        if (scrut5 === true) {
                          tmp44 = "";
                        } else {
                          tmp44 = "s";
                        }
                        tmp45 = ratioRegions3.PString(tmp44);
                        tmp46 = ratioRegions3.Cons(tmp45, ratioRegions3.Nil);
                        tmp47 = ratioRegions3.Cons(tmp43, tmp46);
                        tmp48 = ratioRegions3.Cons(tmp42, tmp47);
                        tmp49 = ratioRegions3.Cons(tmp40, tmp48);
                        tmp50 = ratioRegions3.Cons(tmp39, tmp49);
                        tmp51 = ratioRegions3.Cons(tmp37, tmp50);
                        tmp52 = ratioRegions3.Cons(tmp36, tmp51);
                        tmp53 = ratioRegions3.Cons(tmp34, tmp52);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp53);
                        break inlinedLbl2
                      }
                      {
                        let inlinedVal16;
                        inlinedVal16 = q1.length;
                        lambda$here15 = lambda$16(ratioRegions3, q1);
                        ratioRegions3.#doo(inlinedVal16, lambda$here15);
                        lambda$here16 = lambda$15(ratioRegions3, width1, marked1);
                        ratioRegions3.#doo(height1, lambda$here16);
                        lambda$here17 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
                        ratioRegions3.#doo(height1, lambda$here17);
                        p = true;
                        continue loopLabel2;
                      }
                    }
                    lambda$here18 = lambda$13(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                    scrut6 = ratioRegions3.#some_vector(q1, lambda$here18);
                    if (scrut6 === true) {
                      let inlinedVal16, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal16 = q1.length;
                      tmp54 = inlinedVal16 - 1;
                      ratioRegions4 = ratioRegions3;
                      c_right3 = c_right2;
                      c_down3 = c_down2;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked2 = marked1;
                      m13 = m12;
                      m23 = m22;
                      q2 = q1;
                      v2 = v1;
                      pushes2 = pushes1;
                      lifts2 = lifts1;
                      k = tmp54;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let tmp79, inlinedVal17;
                          inlinedVal17 = k < 0;
                          switch (inlinedVal17) {
                            case false:
                              {
                                let inlinedVal18, x1, f, f1;
                                inlinedVal18 = q2.at(k);
                                x1 = ratioRegions4.Nil;
                                q2[k] = x1;
                                f = lambda$18(ratioRegions4, marked2);
                                ratioRegions4.#listApp$tailrec(f, inlinedVal18);
                                f1 = doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                ratioRegions4.#listApp$tailrec(f1, inlinedVal18);
                                tmp79 = k - 1;
                                k = tmp79;
                                continue loopLabel3;
                              }
                            case true:
                              break inlinedLbl3;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp55 = i1 + 1;
                      i1 = tmp55;
                      p = false;
                      continue loopLabel2
                    }
                    relabel(ratioRegions3, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp56 = relabels1.value + 1;
                    relabels1.value = tmp56;
                    tmp57 = ratioRegions3.PInt(pushes1.value);
                    scrut7 = pushes1.value == 1;
                    if (scrut7 === true) {
                      tmp58 = "";
                    } else {
                      tmp58 = "es";
                    }
                    tmp59 = ratioRegions3.PString(tmp58);
                    tmp60 = ratioRegions3.PInt(lifts1.value);
                    scrut8 = lifts1.value == 1;
                    if (scrut8 === true) {
                      tmp61 = "";
                    } else {
                      tmp61 = "s";
                    }
                    tmp62 = ratioRegions3.PString(tmp61);
                    tmp63 = ratioRegions3.PInt(relabels1.value);
                    scrut9 = relabels1.value == 1;
                    if (scrut9 === true) {
                      tmp64 = "";
                    } else {
                      tmp64 = "s";
                    }
                    tmp65 = ratioRegions3.PString(tmp64);
                    tmp66 = ratioRegions3.PInt(i1);
                    scrut10 = i1 == 1;
                    if (scrut10 === true) {
                      tmp67 = "";
                    } else {
                      tmp67 = "s";
                    }
                    tmp68 = ratioRegions3.PString(tmp67);
                    tmp69 = ratioRegions3.Cons(tmp68, ratioRegions3.Nil);
                    tmp70 = ratioRegions3.Cons(tmp66, tmp69);
                    tmp71 = ratioRegions3.Cons(tmp65, tmp70);
                    tmp72 = ratioRegions3.Cons(tmp63, tmp71);
                    tmp73 = ratioRegions3.Cons(tmp62, tmp72);
                    tmp74 = ratioRegions3.Cons(tmp60, tmp73);
                    tmp75 = ratioRegions3.Cons(tmp59, tmp74);
                    tmp76 = ratioRegions3.Cons(tmp57, tmp75);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp76);
                    break inlinedLbl2;
                  }
                }
                tmp29 = lg_v - 1;
                lambda$here13 = lambda$3(ratioRegions2, width, h, m11);
                inlinedVal12 = ratioRegions2.#every_n(height, lambda$here13);
                if (inlinedVal12 === true) {
                  lg_v = tmp29;
                  v_max = v;
                  continue loopLabel1
                }
                lg_v = tmp29;
                v_max = v_max;
                continue loopLabel1;
              }
            }
          }
          return inlinedVal6
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, tmp, lambda$here2, tmp1, lambda$here3, tmp2, lambda$here4, m1, m2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, init, ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m11, m21, q, lg_v, v_max, inlinedVal9, arg$Matrix$0$, arg$Matrix$0$1, tmp11, lambda$here5, tmp12, lambda$here6, tmp13, lambda$here7, tmp14, lambda$here8, tmp15, lambda$here9, tmp16, lambda$here10, scrut;
    lambda$here2 = lambda$(ratioRegions1, 4, -1);
    tmp = ratioRegions1.#map_n_vector(5, lambda$here2);
    inlinedVal = ratioRegions1.Matrix(tmp);
    lambda$here3 = lambda$(ratioRegions1, 5, -1);
    tmp1 = ratioRegions1.#map_n_vector(4, lambda$here3);
    inlinedVal1 = ratioRegions1.Matrix(tmp1);
    lambda$here = lambda$28(ratioRegions1, 5, 5, inlinedVal);
    ratioRegions1.#doo(5, lambda$here);
    lambda$here1 = lambda$27(ratioRegions1, 5, 5, inlinedVal1);
    ratioRegions1.#doo(4, lambda$here1);
    lambda$here4 = lambda$(ratioRegions1, 5, 1);
    tmp2 = ratioRegions1.#map_n_vector(5, lambda$here4);
    inlinedVal2 = ratioRegions1.Matrix(tmp2);
    if (inlinedVal2 instanceof ratioRegions1.Matrix.class) {
      let inlinedVal10;
      arg$Matrix$0$ = inlinedVal2.a;
      inlinedVal10 = arg$Matrix$0$.length;
      if (inlinedVal2 instanceof ratioRegions1.Matrix.class) {
        let inlinedVal11, inlinedVal12;
        arg$Matrix$0$1 = inlinedVal2.a;
        inlinedVal11 = arg$Matrix$0$1.at(0);
        inlinedVal12 = inlinedVal11.length;
        tmp3 = inlinedVal12 - 1;
        lambda$here5 = lambda$(ratioRegions1, tmp3, 0);
        tmp11 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here5);
        inlinedVal3 = ratioRegions1.Matrix(tmp11);
        tmp4 = inlinedVal10 - 1;
        lambda$here6 = lambda$(ratioRegions1, inlinedVal12, 0);
        tmp12 = ratioRegions1.#map_n_vector(tmp4, lambda$here6);
        inlinedVal4 = ratioRegions1.Matrix(tmp12);
        lambda$here7 = lambda$(ratioRegions1, inlinedVal12, 0);
        tmp13 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here7);
        inlinedVal5 = ratioRegions1.Matrix(tmp13);
        lambda$here8 = lambda$(ratioRegions1, inlinedVal12, 0);
        tmp14 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here8);
        inlinedVal6 = ratioRegions1.Matrix(tmp14);
        lambda$here9 = lambda$(ratioRegions1, inlinedVal12, 0);
        tmp15 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here9);
        inlinedVal7 = ratioRegions1.Matrix(tmp15);
        lambda$here10 = lambda$(ratioRegions1, inlinedVal12, false);
        tmp16 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here10);
        inlinedVal8 = ratioRegions1.Matrix(tmp16);
        tmp5 = inlinedVal10 * inlinedVal12;
        m1 = tmp5 + 2;
        tmp6 = 2 * inlinedVal10;
        tmp7 = tmp6 * inlinedVal12;
        m2 = tmp7 + 2;
        tmp8 = 2 * inlinedVal10;
        tmp9 = tmp8 * inlinedVal12;
        tmp10 = tmp9 + 3;
        init = ratioRegions1.Nil;
        scrut = tmp10 > 0;
        if (scrut === true) {
          let tmp17, arr, i, n, x, inlinedVal13;
          tmp17 = [];
          arr = tmp17;
          i = 0;
          n = tmp10;
          x = init;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut1, tmp18;
              scrut1 = i == n;
              if (scrut1 === true) {
                inlinedVal13 = arr;
                break inlinedLbl
              }
              arr[i] = x;
              tmp18 = i + 1;
              i = tmp18;
              continue loopLabel;
            }
          }
          ratioRegions2 = ratioRegions1;
          c_right = inlinedVal;
          c_down = inlinedVal1;
          w = inlinedVal2;
          height = inlinedVal10;
          width = inlinedVal12;
          f_right = inlinedVal3;
          f_down = inlinedVal4;
          f_t = inlinedVal5;
          h = inlinedVal6;
          e = inlinedVal7;
          marked = inlinedVal8;
          m11 = m1;
          m21 = m2;
          q = inlinedVal13;
          lg_v = 15;
          v_max = 0;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let v, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, inlinedVal14;
              inlinedVal14 = lg_v < 0;
              if (inlinedVal14 === true) {
                let inlinedVal15, pushes, lifts, relabels, tmp29, tmp30, lambda$here11, lambda$here12, lambda$here13, lambda$here14, lambda$here15, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i1, p, lambda$here16;
                tmp18 = ratioRegions2.PInt(v_max);
                tmp19 = ratioRegions2.Cons(tmp18, ratioRegions2.Nil);
                ratioRegions2.#pormat("V-MAX=~s~%", tmp19);
                tmp20 = v_max + 1;
                lambda$here11 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here11);
                lambda$here12 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here12);
                tmp29 = height - 1;
                lambda$here13 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp29, lambda$here13);
                lambda$here14 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here14);
                tmp30 = width - 1;
                lambda$here15 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp30, lambda$here15);
                pushes = new ratioRegions2.Ref.class(0);
                lifts = new ratioRegions2.Ref.class(0);
                relabels = new ratioRegions2.Ref.class(0);
                ratioRegions3 = ratioRegions2;
                c_right1 = c_right;
                c_down1 = c_down;
                w1 = w;
                height1 = height;
                width1 = width;
                f_right1 = f_right;
                f_down1 = f_down;
                f_t1 = f_t;
                h1 = h;
                e1 = e;
                marked1 = marked;
                m12 = m11;
                m22 = m21;
                q1 = q;
                v1 = tmp20;
                pushes1 = pushes;
                lifts1 = lifts;
                relabels1 = relabels;
                i1 = 0;
                p = false;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, lambda$here17, lambda$here18, lambda$here19, lambda$here20, lambda$here21, inlinedVal16, inlinedVal17, tmp76, tmp77, inlinedVal18;
                    tmp76 = i1 / 6;
                    inlinedVal18 = runtime.safeCall(globalThis.Math.floor(tmp76));
                    tmp77 = 6 * inlinedVal18;
                    inlinedVal16 = i1 - tmp77;
                    inlinedVal17 = inlinedVal16 == 0;
                    if (inlinedVal17 === true) {
                      let inlinedVal19;
                      switch (p) {
                        case false:
                          inlinedVal19 = true;
                          break;
                        case true:
                          inlinedVal19 = false;
                          break;
                        default:
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp31 = inlinedVal19;
                    } else {
                      tmp31 = false;
                    }
                    if (tmp31 === true) {
                      relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp32 = relabels1.value + 1;
                      relabels1.value = tmp32;
                      lambda$here17 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here17);
                      if (scrut1 === true) {
                        tmp33 = ratioRegions3.PInt(pushes1.value);
                        scrut2 = pushes1.value == 1;
                        if (scrut2 === true) {
                          tmp34 = "";
                        } else {
                          tmp34 = "es";
                        }
                        tmp35 = ratioRegions3.PString(tmp34);
                        tmp36 = ratioRegions3.PInt(lifts1.value);
                        scrut3 = lifts1.value == 1;
                        if (scrut3 === true) {
                          tmp37 = "";
                        } else {
                          tmp37 = "s";
                        }
                        tmp38 = ratioRegions3.PString(tmp37);
                        tmp39 = ratioRegions3.PInt(relabels1.value);
                        scrut4 = relabels1.value == 1;
                        if (scrut4 === true) {
                          tmp40 = "";
                        } else {
                          tmp40 = "s";
                        }
                        tmp41 = ratioRegions3.PString(tmp40);
                        tmp42 = ratioRegions3.PInt(i1);
                        scrut5 = i1 == 1;
                        if (scrut5 === true) {
                          tmp43 = "";
                        } else {
                          tmp43 = "s";
                        }
                        tmp44 = ratioRegions3.PString(tmp43);
                        tmp45 = ratioRegions3.Cons(tmp44, ratioRegions3.Nil);
                        tmp46 = ratioRegions3.Cons(tmp42, tmp45);
                        tmp47 = ratioRegions3.Cons(tmp41, tmp46);
                        tmp48 = ratioRegions3.Cons(tmp39, tmp47);
                        tmp49 = ratioRegions3.Cons(tmp38, tmp48);
                        tmp50 = ratioRegions3.Cons(tmp36, tmp49);
                        tmp51 = ratioRegions3.Cons(tmp35, tmp50);
                        tmp52 = ratioRegions3.Cons(tmp33, tmp51);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp52);
                        break inlinedLbl2
                      }
                      {
                        let inlinedVal19;
                        inlinedVal19 = q1.length;
                        lambda$here18 = lambda$16(ratioRegions3, q1);
                        ratioRegions3.#doo(inlinedVal19, lambda$here18);
                        lambda$here19 = lambda$15(ratioRegions3, width1, marked1);
                        ratioRegions3.#doo(height1, lambda$here19);
                        lambda$here20 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
                        ratioRegions3.#doo(height1, lambda$here20);
                        p = true;
                        continue loopLabel2;
                      }
                    }
                    lambda$here21 = lambda$13(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                    scrut6 = ratioRegions3.#some_vector(q1, lambda$here21);
                    if (scrut6 === true) {
                      let inlinedVal19, ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal19 = q1.length;
                      tmp53 = inlinedVal19 - 1;
                      ratioRegions4 = ratioRegions3;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked2 = marked1;
                      m13 = m12;
                      m23 = m22;
                      q2 = q1;
                      v2 = v1;
                      pushes2 = pushes1;
                      lifts2 = lifts1;
                      k = tmp53;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let tmp78, inlinedVal20;
                          inlinedVal20 = k < 0;
                          switch (inlinedVal20) {
                            case false:
                              {
                                let inlinedVal21, x1, f, f1;
                                inlinedVal21 = q2.at(k);
                                x1 = ratioRegions4.Nil;
                                q2[k] = x1;
                                f = lambda$18(ratioRegions4, marked2);
                                ratioRegions4.#listApp$tailrec(f, inlinedVal21);
                                f1 = main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                ratioRegions4.#listApp$tailrec(f1, inlinedVal21);
                                tmp78 = k - 1;
                                k = tmp78;
                                continue loopLabel3;
                              }
                            case true:
                              break inlinedLbl3;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp54 = i1 + 1;
                      i1 = tmp54;
                      p = false;
                      continue loopLabel2
                    }
                    relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp55 = relabels1.value + 1;
                    relabels1.value = tmp55;
                    tmp56 = ratioRegions3.PInt(pushes1.value);
                    scrut7 = pushes1.value == 1;
                    if (scrut7 === true) {
                      tmp57 = "";
                    } else {
                      tmp57 = "es";
                    }
                    tmp58 = ratioRegions3.PString(tmp57);
                    tmp59 = ratioRegions3.PInt(lifts1.value);
                    scrut8 = lifts1.value == 1;
                    if (scrut8 === true) {
                      tmp60 = "";
                    } else {
                      tmp60 = "s";
                    }
                    tmp61 = ratioRegions3.PString(tmp60);
                    tmp62 = ratioRegions3.PInt(relabels1.value);
                    scrut9 = relabels1.value == 1;
                    if (scrut9 === true) {
                      tmp63 = "";
                    } else {
                      tmp63 = "s";
                    }
                    tmp64 = ratioRegions3.PString(tmp63);
                    tmp65 = ratioRegions3.PInt(i1);
                    scrut10 = i1 == 1;
                    if (scrut10 === true) {
                      tmp66 = "";
                    } else {
                      tmp66 = "s";
                    }
                    tmp67 = ratioRegions3.PString(tmp66);
                    tmp68 = ratioRegions3.Cons(tmp67, ratioRegions3.Nil);
                    tmp69 = ratioRegions3.Cons(tmp65, tmp68);
                    tmp70 = ratioRegions3.Cons(tmp64, tmp69);
                    tmp71 = ratioRegions3.Cons(tmp62, tmp70);
                    tmp72 = ratioRegions3.Cons(tmp61, tmp71);
                    tmp73 = ratioRegions3.Cons(tmp59, tmp72);
                    tmp74 = ratioRegions3.Cons(tmp58, tmp73);
                    tmp75 = ratioRegions3.Cons(tmp56, tmp74);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp75);
                    break inlinedLbl2;
                  }
                }
                lambda$here16 = lambda$1(ratioRegions2, width, h, m11);
                inlinedVal15 = ratioRegions2.#map_n_vector(height, lambda$here16);
                inlinedVal9 = inlinedVal15;
                break inlinedLbl1
              }
              {
                let inlinedVal15, pushes, lifts, relabels, tmp29, tmp30, lambda$here11, lambda$here12, lambda$here13, lambda$here14, lambda$here15, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i1, p, lambda$here16;
                tmp21 = loopPow(ratioRegions2, lg_v, 1);
                v = v_max + tmp21;
                tmp22 = ratioRegions2.PInt(lg_v);
                tmp23 = ratioRegions2.PInt(v_max);
                tmp24 = ratioRegions2.PInt(v);
                tmp25 = ratioRegions2.Cons(tmp24, ratioRegions2.Nil);
                tmp26 = ratioRegions2.Cons(tmp23, tmp25);
                tmp27 = ratioRegions2.Cons(tmp22, tmp26);
                ratioRegions2.#pormat("LG-V=~s, V-MAX=~s, V=~s~%", tmp27);
                lambda$here11 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here11);
                lambda$here12 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here12);
                tmp29 = height - 1;
                lambda$here13 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp29, lambda$here13);
                lambda$here14 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here14);
                tmp30 = width - 1;
                lambda$here15 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp30, lambda$here15);
                pushes = new ratioRegions2.Ref.class(0);
                lifts = new ratioRegions2.Ref.class(0);
                relabels = new ratioRegions2.Ref.class(0);
                ratioRegions3 = ratioRegions2;
                c_right1 = c_right;
                c_down1 = c_down;
                w1 = w;
                height1 = height;
                width1 = width;
                f_right1 = f_right;
                f_down1 = f_down;
                f_t1 = f_t;
                h1 = h;
                e1 = e;
                marked1 = marked;
                m12 = m11;
                m22 = m21;
                q1 = q;
                v1 = v;
                pushes1 = pushes;
                lifts1 = lifts;
                relabels1 = relabels;
                i1 = 0;
                p = false;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, scrut9, scrut10, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, lambda$here17, lambda$here18, lambda$here19, lambda$here20, lambda$here21, inlinedVal16, inlinedVal17, tmp76, tmp77, inlinedVal18;
                    tmp76 = i1 / 6;
                    inlinedVal18 = runtime.safeCall(globalThis.Math.floor(tmp76));
                    tmp77 = 6 * inlinedVal18;
                    inlinedVal16 = i1 - tmp77;
                    inlinedVal17 = inlinedVal16 == 0;
                    if (inlinedVal17 === true) {
                      let inlinedVal19;
                      switch (p) {
                        case false:
                          inlinedVal19 = true;
                          break;
                        case true:
                          inlinedVal19 = false;
                          break;
                        default:
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp31 = inlinedVal19;
                    } else {
                      tmp31 = false;
                    }
                    if (tmp31 === true) {
                      relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp32 = relabels1.value + 1;
                      relabels1.value = tmp32;
                      lambda$here17 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here17);
                      if (scrut1 === true) {
                        tmp33 = ratioRegions3.PInt(pushes1.value);
                        scrut2 = pushes1.value == 1;
                        if (scrut2 === true) {
                          tmp34 = "";
                        } else {
                          tmp34 = "es";
                        }
                        tmp35 = ratioRegions3.PString(tmp34);
                        tmp36 = ratioRegions3.PInt(lifts1.value);
                        scrut3 = lifts1.value == 1;
                        if (scrut3 === true) {
                          tmp37 = "";
                        } else {
                          tmp37 = "s";
                        }
                        tmp38 = ratioRegions3.PString(tmp37);
                        tmp39 = ratioRegions3.PInt(relabels1.value);
                        scrut4 = relabels1.value == 1;
                        if (scrut4 === true) {
                          tmp40 = "";
                        } else {
                          tmp40 = "s";
                        }
                        tmp41 = ratioRegions3.PString(tmp40);
                        tmp42 = ratioRegions3.PInt(i1);
                        scrut5 = i1 == 1;
                        if (scrut5 === true) {
                          tmp43 = "";
                        } else {
                          tmp43 = "s";
                        }
                        tmp44 = ratioRegions3.PString(tmp43);
                        tmp45 = ratioRegions3.Cons(tmp44, ratioRegions3.Nil);
                        tmp46 = ratioRegions3.Cons(tmp42, tmp45);
                        tmp47 = ratioRegions3.Cons(tmp41, tmp46);
                        tmp48 = ratioRegions3.Cons(tmp39, tmp47);
                        tmp49 = ratioRegions3.Cons(tmp38, tmp48);
                        tmp50 = ratioRegions3.Cons(tmp36, tmp49);
                        tmp51 = ratioRegions3.Cons(tmp35, tmp50);
                        tmp52 = ratioRegions3.Cons(tmp33, tmp51);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp52);
                        break inlinedLbl2
                      }
                      {
                        let inlinedVal19;
                        inlinedVal19 = q1.length;
                        lambda$here18 = lambda$16(ratioRegions3, q1);
                        ratioRegions3.#doo(inlinedVal19, lambda$here18);
                        lambda$here19 = lambda$15(ratioRegions3, width1, marked1);
                        ratioRegions3.#doo(height1, lambda$here19);
                        lambda$here20 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
                        ratioRegions3.#doo(height1, lambda$here20);
                        p = true;
                        continue loopLabel2;
                      }
                    }
                    lambda$here21 = lambda$13(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                    scrut6 = ratioRegions3.#some_vector(q1, lambda$here21);
                    if (scrut6 === true) {
                      let inlinedVal19, ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal19 = q1.length;
                      tmp53 = inlinedVal19 - 1;
                      ratioRegions4 = ratioRegions3;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked2 = marked1;
                      m13 = m12;
                      m23 = m22;
                      q2 = q1;
                      v2 = v1;
                      pushes2 = pushes1;
                      lifts2 = lifts1;
                      k = tmp53;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let tmp78, inlinedVal20;
                          inlinedVal20 = k < 0;
                          switch (inlinedVal20) {
                            case false:
                              {
                                let inlinedVal21, x1, f, f1;
                                inlinedVal21 = q2.at(k);
                                x1 = ratioRegions4.Nil;
                                q2[k] = x1;
                                f = lambda$18(ratioRegions4, marked2);
                                ratioRegions4.#listApp$tailrec(f, inlinedVal21);
                                f1 = main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                ratioRegions4.#listApp$tailrec(f1, inlinedVal21);
                                tmp78 = k - 1;
                                k = tmp78;
                                continue loopLabel3;
                              }
                            case true:
                              break inlinedLbl3;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp54 = i1 + 1;
                      i1 = tmp54;
                      p = false;
                      continue loopLabel2
                    }
                    relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp55 = relabels1.value + 1;
                    relabels1.value = tmp55;
                    tmp56 = ratioRegions3.PInt(pushes1.value);
                    scrut7 = pushes1.value == 1;
                    if (scrut7 === true) {
                      tmp57 = "";
                    } else {
                      tmp57 = "es";
                    }
                    tmp58 = ratioRegions3.PString(tmp57);
                    tmp59 = ratioRegions3.PInt(lifts1.value);
                    scrut8 = lifts1.value == 1;
                    if (scrut8 === true) {
                      tmp60 = "";
                    } else {
                      tmp60 = "s";
                    }
                    tmp61 = ratioRegions3.PString(tmp60);
                    tmp62 = ratioRegions3.PInt(relabels1.value);
                    scrut9 = relabels1.value == 1;
                    if (scrut9 === true) {
                      tmp63 = "";
                    } else {
                      tmp63 = "s";
                    }
                    tmp64 = ratioRegions3.PString(tmp63);
                    tmp65 = ratioRegions3.PInt(i1);
                    scrut10 = i1 == 1;
                    if (scrut10 === true) {
                      tmp66 = "";
                    } else {
                      tmp66 = "s";
                    }
                    tmp67 = ratioRegions3.PString(tmp66);
                    tmp68 = ratioRegions3.Cons(tmp67, ratioRegions3.Nil);
                    tmp69 = ratioRegions3.Cons(tmp65, tmp68);
                    tmp70 = ratioRegions3.Cons(tmp64, tmp69);
                    tmp71 = ratioRegions3.Cons(tmp62, tmp70);
                    tmp72 = ratioRegions3.Cons(tmp61, tmp71);
                    tmp73 = ratioRegions3.Cons(tmp59, tmp72);
                    tmp74 = ratioRegions3.Cons(tmp58, tmp73);
                    tmp75 = ratioRegions3.Cons(tmp56, tmp74);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp75);
                    break inlinedLbl2;
                  }
                }
                tmp28 = lg_v - 1;
                lambda$here16 = lambda$3(ratioRegions2, width, h, m11);
                inlinedVal15 = ratioRegions2.#every_n(height, lambda$here16);
                if (inlinedVal15 === true) {
                  lg_v = tmp28;
                  v_max = v;
                  continue loopLabel1
                }
                lg_v = tmp28;
                v_max = v_max;
                continue loopLabel1;
              }
            }
          }
          return inlinedVal9
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ratioRegions"];
});
export { enqueue as _$_modulePrivate_$_enqueue };
export { push_t as _$_modulePrivate_$_push_t };
export { enqueue1 as _$_modulePrivate_$_enqueue1 };
export { can_push_down as _$_modulePrivate_$_can_push_down };
export { push_down as _$_modulePrivate_$_push_down };
export { can_push_left as _$_modulePrivate_$_can_push_left };
export { push_right as _$_modulePrivate_$_push_right };
export { push_left as _$_modulePrivate_$_push_left };
export { relabel as _$_modulePrivate_$_relabel };
export { cf_t as _$_modulePrivate_$_cf_t };
export { can_lift as _$_modulePrivate_$_can_lift };
export { can_push_t as _$_modulePrivate_$_can_push_t };
export { can_push_up as _$_modulePrivate_$_can_push_up };
export { can_push_right as _$_modulePrivate_$_can_push_right };
export { push_up as _$_modulePrivate_$_push_up };
export { loopPow as _$_modulePrivate_$_loopPow };
export { cf_right as _$_modulePrivate_$_cf_right };
export { cf_down as _$_modulePrivate_$_cf_down };
export { cf_up as _$_modulePrivate_$_cf_up };
export { cf_left as _$_modulePrivate_$_cf_left };
export { ratioRegions1 as _$_modulePrivate_$_ratioRegions };
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
export { lambda14 as _$_modulePrivate_$_lambda14 };
export { lambda15 as _$_modulePrivate_$_lambda15 };
export { lambda16 as _$_modulePrivate_$_lambda16 };
export { lambda17 as _$_modulePrivate_$_lambda17 };
export { lambda18 as _$_modulePrivate_$_lambda18 };
export { lambda19 as _$_modulePrivate_$_lambda19 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { lambda$9 as _$_modulePrivate_$_lambda$9 };
export { lambda$10 as _$_modulePrivate_$_lambda$10 };
export { lambda$11 as _$_modulePrivate_$_lambda$11 };
export { lambda$12 as _$_modulePrivate_$_lambda$12 };
export { lambda$13 as _$_modulePrivate_$_lambda$13 };
export { lambda$14 as _$_modulePrivate_$_lambda$14 };
export { lambda$15 as _$_modulePrivate_$_lambda$15 };
export { lambda$16 as _$_modulePrivate_$_lambda$16 };
export { lambda$17 as _$_modulePrivate_$_lambda$17 };
export { lambda$18 as _$_modulePrivate_$_lambda$18 };
export { lambda$19 as _$_modulePrivate_$_lambda$19 };
export { lambda$20 as _$_modulePrivate_$_lambda$20 };
export { lambda$21 as _$_modulePrivate_$_lambda$21 };
export { lambda$22 as _$_modulePrivate_$_lambda$22 };
export { lambda$23 as _$_modulePrivate_$_lambda$23 };
export { lambda$24 as _$_modulePrivate_$_lambda$24 };
export { lambda$25 as _$_modulePrivate_$_lambda$25 };
export { lambda$26 as _$_modulePrivate_$_lambda$26 };
export { lambda$27 as _$_modulePrivate_$_lambda$27 };
export { lambda$28 as _$_modulePrivate_$_lambda$28 };
export { lambda$29 as _$_modulePrivate_$_lambda$29 };
export { lambda$30 as _$_modulePrivate_$_lambda$30 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export default ratioRegions1;
