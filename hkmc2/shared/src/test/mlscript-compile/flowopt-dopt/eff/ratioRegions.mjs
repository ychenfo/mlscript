const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const doo$accessorSymbol = globalThis.Symbol("doo");
const map_n_vector$accessorSymbol = globalThis.Symbol("map_n_vector");
const every_n$accessorSymbol = globalThis.Symbol("every_n");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let enqueue, push_t, enqueue1, can_push_down, push_down, can_push_left, push_right, push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, push_up, cf_right, cf_down, cf_up, cf_left, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1;
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
lambda$ = (undefined, function (n, a) {
  return (i) => {
    return lambda(n, a)
  }
});
lambda = (undefined, function (n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    let tmp, arr, i, n1, x, inlinedVal;
    tmp = [];
    arr = tmp;
    i = 0;
    n1 = n;
    x = a;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp1;
        scrut1 = i == n1;
        if (scrut1 === true) {
          inlinedVal = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp1 = i + 1;
        i = tmp1;
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
  static main() {
    let lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, tmp, lambda$here2, tmp1, lambda$here3, tmp2, lambda$here4, m1, m2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, init, ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m11, m21, q, lg_v, v_max, inlinedVal9, arg$Matrix$0$, arg$Matrix$0$1, tmp11, lambda$here5, tmp12, lambda$here6, tmp13, lambda$here7, tmp14, lambda$here8, tmp15, lambda$here9, tmp16, lambda$here10, scrut;
    lambda$here2 = lambda$(4, -1);
    tmp = ratioRegions1.#map_n_vector(5, lambda$here2);
    inlinedVal = ratioRegions1.Matrix(tmp);
    lambda$here3 = lambda$(5, -1);
    tmp1 = ratioRegions1.#map_n_vector(4, lambda$here3);
    inlinedVal1 = ratioRegions1.Matrix(tmp1);
    lambda$here = lambda$28(ratioRegions1, 5, 5, inlinedVal);
    ratioRegions1.#doo(5, lambda$here);
    lambda$here1 = lambda$27(ratioRegions1, 5, 5, inlinedVal1);
    ratioRegions1.#doo(4, lambda$here1);
    lambda$here4 = lambda$(5, 1);
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
        lambda$here5 = lambda$(tmp3, 0);
        tmp11 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here5);
        inlinedVal3 = ratioRegions1.Matrix(tmp11);
        tmp4 = inlinedVal10 - 1;
        lambda$here6 = lambda$(inlinedVal12, 0);
        tmp12 = ratioRegions1.#map_n_vector(tmp4, lambda$here6);
        inlinedVal4 = ratioRegions1.Matrix(tmp12);
        lambda$here7 = lambda$(inlinedVal12, 0);
        tmp13 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here7);
        inlinedVal5 = ratioRegions1.Matrix(tmp13);
        lambda$here8 = lambda$(inlinedVal12, 0);
        tmp14 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here8);
        inlinedVal6 = ratioRegions1.Matrix(tmp14);
        lambda$here9 = lambda$(inlinedVal12, 0);
        tmp15 = ratioRegions1.#map_n_vector(inlinedVal10, lambda$here9);
        inlinedVal7 = ratioRegions1.Matrix(tmp15);
        lambda$here10 = lambda$(inlinedVal12, false);
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
              let v, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, inlinedVal14;
              inlinedVal14 = lg_v < 0;
              if (inlinedVal14 === true) {
                let inlinedVal15, pushes, lifts, relabels, tmp28, tmp29, lambda$here11, lambda$here12, lambda$here13, lambda$here14, lambda$here15, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i1, p, lambda$here16;
                tmp18 = ratioRegions2.PInt(undefined);
                tmp19 = ratioRegions2.Cons(tmp18, ratioRegions2.Nil);
                ratioRegions2.#pormat("V-MAX=~s~%", tmp19);
                tmp20 = v_max + 1;
                lambda$here11 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here11);
                lambda$here12 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here12);
                tmp28 = height - 1;
                lambda$here13 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp28, lambda$here13);
                lambda$here14 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here14);
                tmp29 = width - 1;
                lambda$here15 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp29, lambda$here15);
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
                    let scrut1, scrut2, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, lambda$here17, lambda$here18, lambda$here19, lambda$here20, lambda$here21, inlinedVal16, inlinedVal17, tmp67, tmp68, inlinedVal18;
                    tmp67 = i1 / 6;
                    inlinedVal18 = runtime.safeCall(globalThis.Math.floor(tmp67));
                    tmp68 = 6 * inlinedVal18;
                    inlinedVal16 = i1 - tmp68;
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
                      tmp30 = inlinedVal19;
                    } else {
                      tmp30 = false;
                    }
                    if (tmp30 === true) {
                      relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp31 = relabels1.value + 1;
                      relabels1.value = tmp31;
                      lambda$here17 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here17);
                      if (scrut1 === true) {
                        tmp32 = ratioRegions3.PInt(undefined);
                        tmp33 = ratioRegions3.PString(undefined);
                        tmp34 = ratioRegions3.PInt(undefined);
                        tmp35 = ratioRegions3.PString(undefined);
                        tmp36 = ratioRegions3.PInt(undefined);
                        tmp37 = ratioRegions3.PString(undefined);
                        tmp38 = ratioRegions3.PInt(undefined);
                        tmp39 = ratioRegions3.PString(undefined);
                        tmp40 = ratioRegions3.Cons(tmp39, ratioRegions3.Nil);
                        tmp41 = ratioRegions3.Cons(tmp38, tmp40);
                        tmp42 = ratioRegions3.Cons(tmp37, tmp41);
                        tmp43 = ratioRegions3.Cons(tmp36, tmp42);
                        tmp44 = ratioRegions3.Cons(tmp35, tmp43);
                        tmp45 = ratioRegions3.Cons(tmp34, tmp44);
                        tmp46 = ratioRegions3.Cons(tmp33, tmp45);
                        tmp47 = ratioRegions3.Cons(tmp32, tmp46);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp47);
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
                    scrut2 = ratioRegions3.#some_vector(q1, lambda$here21);
                    if (scrut2 === true) {
                      let inlinedVal19, ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal19 = q1.length;
                      tmp48 = inlinedVal19 - 1;
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
                      k = tmp48;
                      inlinedLbl3: {
                        loopLabel3: while (true) {
                          let tmp69, inlinedVal20;
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
                                tmp69 = k - 1;
                                k = tmp69;
                                continue loopLabel3;
                              }
                            case true:
                              break inlinedLbl3;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp49 = i1 + 1;
                      i1 = tmp49;
                      p = false;
                      continue loopLabel2
                    }
                    relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp50 = relabels1.value + 1;
                    relabels1.value = tmp50;
                    tmp51 = ratioRegions3.PInt(undefined);
                    tmp52 = ratioRegions3.PString(undefined);
                    tmp53 = ratioRegions3.PInt(undefined);
                    tmp54 = ratioRegions3.PString(undefined);
                    tmp55 = ratioRegions3.PInt(undefined);
                    tmp56 = ratioRegions3.PString(undefined);
                    tmp57 = ratioRegions3.PInt(undefined);
                    tmp58 = ratioRegions3.PString(undefined);
                    tmp59 = ratioRegions3.Cons(tmp58, ratioRegions3.Nil);
                    tmp60 = ratioRegions3.Cons(tmp57, tmp59);
                    tmp61 = ratioRegions3.Cons(tmp56, tmp60);
                    tmp62 = ratioRegions3.Cons(tmp55, tmp61);
                    tmp63 = ratioRegions3.Cons(tmp54, tmp62);
                    tmp64 = ratioRegions3.Cons(tmp53, tmp63);
                    tmp65 = ratioRegions3.Cons(tmp52, tmp64);
                    tmp66 = ratioRegions3.Cons(tmp51, tmp65);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp66);
                    break inlinedLbl2;
                  }
                }
                lambda$here16 = lambda$1(ratioRegions2, width, h, m11);
                inlinedVal15 = ratioRegions2.#map_n_vector(height, lambda$here16);
                inlinedVal9 = inlinedVal15;
                break inlinedLbl1
              }
              {
                let i1, c, inlinedVal15, inlinedVal16, pushes, lifts, relabels, tmp28, tmp29, lambda$here11, lambda$here12, lambda$here13, lambda$here14, lambda$here15, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i2, p, lambda$here16;
                i1 = lg_v;
                c = 1;
                inlinedLbl2: {
                  loopLabel2: while (true) {
                    let tmp30, tmp31, inlinedVal17;
                    inlinedVal17 = i1 == 0;
                    if (inlinedVal17 === true) {
                      inlinedVal15 = c;
                      break inlinedLbl2
                    }
                    tmp30 = i1 - 1;
                    tmp31 = c + c;
                    i1 = tmp30;
                    c = tmp31;
                    continue loopLabel2;
                  }
                }
                v = v_max + inlinedVal15;
                tmp21 = ratioRegions2.PInt(undefined);
                tmp22 = ratioRegions2.PInt(undefined);
                tmp23 = ratioRegions2.PInt(undefined);
                tmp24 = ratioRegions2.Cons(tmp23, ratioRegions2.Nil);
                tmp25 = ratioRegions2.Cons(tmp22, tmp24);
                tmp26 = ratioRegions2.Cons(tmp21, tmp25);
                ratioRegions2.#pormat("LG-V=~s, V-MAX=~s, V=~s~%", tmp26);
                lambda$here11 = lambda$9(ratioRegions2, width, f_t, e);
                ratioRegions2.#doo(height, lambda$here11);
                lambda$here12 = lambda$8(ratioRegions2, width, f_right);
                ratioRegions2.#doo(height, lambda$here12);
                tmp28 = height - 1;
                lambda$here13 = lambda$7(ratioRegions2, width, f_down);
                ratioRegions2.#doo(tmp28, lambda$here13);
                lambda$here14 = lambda$6(ratioRegions2, width, e);
                ratioRegions2.#doo(height, lambda$here14);
                tmp29 = width - 1;
                lambda$here15 = lambda$5(ratioRegions2, height, e);
                ratioRegions2.#doo(tmp29, lambda$here15);
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
                i2 = 0;
                p = false;
                inlinedLbl3: {
                  loopLabel3: while (true) {
                    let scrut1, scrut2, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, lambda$here17, lambda$here18, lambda$here19, lambda$here20, lambda$here21, inlinedVal17, inlinedVal18, tmp67, tmp68, inlinedVal19;
                    tmp67 = i2 / 6;
                    inlinedVal19 = runtime.safeCall(globalThis.Math.floor(tmp67));
                    tmp68 = 6 * inlinedVal19;
                    inlinedVal17 = i2 - tmp68;
                    inlinedVal18 = inlinedVal17 == 0;
                    if (inlinedVal18 === true) {
                      let inlinedVal20;
                      switch (p) {
                        case false:
                          inlinedVal20 = true;
                          break;
                        case true:
                          inlinedVal20 = false;
                          break;
                        default:
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      tmp30 = inlinedVal20;
                    } else {
                      tmp30 = false;
                    }
                    if (tmp30 === true) {
                      relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                      tmp31 = relabels1.value + 1;
                      relabels1.value = tmp31;
                      lambda$here17 = lambda$17(ratioRegions3, width1, h1, e1, m12);
                      scrut1 = ratioRegions3.#every_n(height1, lambda$here17);
                      if (scrut1 === true) {
                        tmp32 = ratioRegions3.PInt(undefined);
                        tmp33 = ratioRegions3.PString(undefined);
                        tmp34 = ratioRegions3.PInt(undefined);
                        tmp35 = ratioRegions3.PString(undefined);
                        tmp36 = ratioRegions3.PInt(undefined);
                        tmp37 = ratioRegions3.PString(undefined);
                        tmp38 = ratioRegions3.PInt(undefined);
                        tmp39 = ratioRegions3.PString(undefined);
                        tmp40 = ratioRegions3.Cons(tmp39, ratioRegions3.Nil);
                        tmp41 = ratioRegions3.Cons(tmp38, tmp40);
                        tmp42 = ratioRegions3.Cons(tmp37, tmp41);
                        tmp43 = ratioRegions3.Cons(tmp36, tmp42);
                        tmp44 = ratioRegions3.Cons(tmp35, tmp43);
                        tmp45 = ratioRegions3.Cons(tmp34, tmp44);
                        tmp46 = ratioRegions3.Cons(tmp33, tmp45);
                        tmp47 = ratioRegions3.Cons(tmp32, tmp46);
                        ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp47);
                        break inlinedLbl3
                      }
                      {
                        let inlinedVal20;
                        inlinedVal20 = q1.length;
                        lambda$here18 = lambda$16(ratioRegions3, q1);
                        ratioRegions3.#doo(inlinedVal20, lambda$here18);
                        lambda$here19 = lambda$15(ratioRegions3, width1, marked1);
                        ratioRegions3.#doo(height1, lambda$here19);
                        lambda$here20 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
                        ratioRegions3.#doo(height1, lambda$here20);
                        p = true;
                        continue loopLabel3;
                      }
                    }
                    lambda$here21 = lambda$13(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                    scrut2 = ratioRegions3.#some_vector(q1, lambda$here21);
                    if (scrut2 === true) {
                      let inlinedVal20, ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                      inlinedVal20 = q1.length;
                      tmp48 = inlinedVal20 - 1;
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
                      k = tmp48;
                      inlinedLbl4: {
                        loopLabel4: while (true) {
                          let tmp69, inlinedVal21;
                          inlinedVal21 = k < 0;
                          switch (inlinedVal21) {
                            case false:
                              {
                                let inlinedVal22, x1, f, f1;
                                inlinedVal22 = q2.at(k);
                                x1 = ratioRegions4.Nil;
                                q2[k] = x1;
                                f = lambda$18(ratioRegions4, marked2);
                                ratioRegions4.#listApp$tailrec(f, inlinedVal22);
                                f1 = main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions4, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                ratioRegions4.#listApp$tailrec(f1, inlinedVal22);
                                tmp69 = k - 1;
                                k = tmp69;
                                continue loopLabel4;
                              }
                            case true:
                              break inlinedLbl4;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp49 = i2 + 1;
                      i2 = tmp49;
                      p = false;
                      continue loopLabel3
                    }
                    relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                    tmp50 = relabels1.value + 1;
                    relabels1.value = tmp50;
                    tmp51 = ratioRegions3.PInt(undefined);
                    tmp52 = ratioRegions3.PString(undefined);
                    tmp53 = ratioRegions3.PInt(undefined);
                    tmp54 = ratioRegions3.PString(undefined);
                    tmp55 = ratioRegions3.PInt(undefined);
                    tmp56 = ratioRegions3.PString(undefined);
                    tmp57 = ratioRegions3.PInt(undefined);
                    tmp58 = ratioRegions3.PString(undefined);
                    tmp59 = ratioRegions3.Cons(tmp58, ratioRegions3.Nil);
                    tmp60 = ratioRegions3.Cons(tmp57, tmp59);
                    tmp61 = ratioRegions3.Cons(tmp56, tmp60);
                    tmp62 = ratioRegions3.Cons(tmp55, tmp61);
                    tmp63 = ratioRegions3.Cons(tmp54, tmp62);
                    tmp64 = ratioRegions3.Cons(tmp53, tmp63);
                    tmp65 = ratioRegions3.Cons(tmp52, tmp64);
                    tmp66 = ratioRegions3.Cons(tmp51, tmp65);
                    ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp66);
                    break inlinedLbl3;
                  }
                }
                tmp27 = lg_v - 1;
                lambda$here16 = lambda$3(ratioRegions2, width, h, m11);
                inlinedVal16 = ratioRegions2.#every_n(height, lambda$here16);
                if (inlinedVal16 === true) {
                  lg_v = tmp27;
                  v_max = v;
                  continue loopLabel1
                }
                lg_v = tmp27;
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
export default ratioRegions1;
