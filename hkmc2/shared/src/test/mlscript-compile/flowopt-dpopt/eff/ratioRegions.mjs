const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const doo$accessorSymbol = globalThis.Symbol("doo");
const map_n_vector$accessorSymbol = globalThis.Symbol("map_n_vector");
const every_n$accessorSymbol = globalThis.Symbol("every_n");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let enqueue, push_t, enqueue1, can_push_down, push_down, can_push_left, push_right, push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, push_up, cf_right, cf_down, cf_up, cf_left, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, main_lambda$_lambda$lambda, main_lambda$$lambda$, main_lambda$_lambda$lambda1, main_lambda$$lambda$1, main_lambda$_lambda$lambda2, main_lambda$$lambda$2, main_lambda$_lambda$lambda3, main_lambda$$lambda$3, main_lambda$_lambda$lambda4, main_lambda$$lambda$4, main_lambda$_lambda$lambda5, main_lambda$$lambda$5, main_lambda$_lambda$lambda6, main_lambda$$lambda$6, main_lambda$_lambda$lambda7, main_lambda$$lambda$7, main_lambda$_lambda$lambda8, main_lambda$$lambda$8, main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1;
main_lambda$_lambda$lambda = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$ = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda(n, a)
  }
};
main_lambda$_lambda$lambda1 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$1 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda1(n, a)
  }
};
main_lambda$_lambda$lambda2 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$2 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda2(n, a)
  }
};
main_lambda$_lambda$lambda3 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$3 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda3(n, a)
  }
};
main_lambda$_lambda$lambda4 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$4 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda4(n, a)
  }
};
main_lambda$_lambda$lambda5 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$5 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda5(n, a)
  }
};
main_lambda$_lambda$lambda6 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$6 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda6(n, a)
  }
};
main_lambda$_lambda$lambda7 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$7 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda7(n, a)
  }
};
main_lambda$_lambda$lambda8 = function main_lambda$_lambda$lambda(n, a) {
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
};
main_lambda$$lambda$8 = function main_lambda$$lambda$(n, a) {
  return () => {
    return main_lambda$_lambda$lambda8(n, a)
  }
};
main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda = function main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ = function main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 = function main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 = function main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
lambda$29 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  return (x) => {
    return lambda16(ratioRegions2, height, width, c_right, y, x)
  }
});
lambda16 = (undefined, function (ratioRegions2, height, width, c_right, y, x) {
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
lambda$27 = (undefined, function (ratioRegions2, height, width, c_right) {
  return (y) => {
    return lambda17(ratioRegions2, height, width, c_right, y)
  }
});
lambda$28 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  return (x) => {
    return lambda18(ratioRegions2, height, width, c_down, y, x)
  }
});
lambda18 = (undefined, function (ratioRegions2, height, width, c_down, y, x) {
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
lambda$26 = (undefined, function (ratioRegions2, height, width, c_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$28(ratioRegions2, height, width, c_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda17 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$29(ratioRegions2, height, width, c_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda$25 = (undefined, function (ratioRegions2, h, marked, m1, y) {
  return (x) => {
    return lambda(ratioRegions2, h, marked, m1, y, x)
  }
});
lambda = (undefined, function (ratioRegions2, h, marked, m1, y, x) {
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
lambda$23 = (undefined, function (ratioRegions2, width, h, marked, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$25(ratioRegions2, h, marked, m1, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$24 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y) {
  return (x) => {
    return lambda1(ratioRegions2, w, f_t, h, marked, v, q, tail, y, x)
  }
});
lambda1 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y, x) {
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
lambda$22 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$24(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
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
lambda$21 = (undefined, function (ratioRegions2, h, e, m1, y) {
  return (x) => {
    return lambda2(ratioRegions2, h, e, m1, y, x)
  }
});
lambda2 = (undefined, function (ratioRegions2, h, e, m1, y, x) {
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
lambda$16 = (undefined, function (ratioRegions2, width, h, e, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$21(ratioRegions2, h, e, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$15 = (undefined, function (ratioRegions2, q) {
  return (k) => {
    return lambda3(ratioRegions2, q, k)
  }
});
lambda$20 = (undefined, function (ratioRegions2, marked, y) {
  return (x) => {
    return lambda4(ratioRegions2, marked, y, x)
  }
});
lambda4 = (undefined, function (ratioRegions2, marked, y, x) {
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
lambda$14 = (undefined, function (ratioRegions2, width, marked) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$20(ratioRegions2, marked, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$19 = (undefined, function (ratioRegions2, h, e, marked, q, y) {
  return (x) => {
    return lambda5(ratioRegions2, h, e, marked, q, y, x)
  }
});
lambda5 = (undefined, function (ratioRegions2, h, e, marked, q, y, x) {
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
lambda$13 = (undefined, function (ratioRegions2, width, h, e, marked, q) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$19(ratioRegions2, h, e, marked, q, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$18 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (p) => {
    return lambda6(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p)
  }
});
lambda6 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p) {
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
lambda$12 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (ps) => {
    let p;
    p = lambda$18(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
    return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
  }
});
lambda$17 = (undefined, function (ratioRegions2, marked) {
  return (p) => {
    return lambda7(ratioRegions2, marked, p)
  }
});
lambda7 = (undefined, function (ratioRegions2, marked, p) {
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
lambda3 = (undefined, function (ratioRegions2, q, k) {
  let x;
  x = ratioRegions2.Nil;
  q[k] = x;
  return runtime.Unit
});
lambda$11 = (undefined, function (ratioRegions2, f_t, e, y) {
  return (x) => {
    return lambda8(ratioRegions2, f_t, e, y, x)
  }
});
lambda8 = (undefined, function (ratioRegions2, f_t, e, y, x) {
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
lambda$8 = (undefined, function (ratioRegions2, width, f_t, e) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$11(ratioRegions2, f_t, e, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$10 = (undefined, function (ratioRegions2, f_right, y) {
  return (x) => {
    return lambda9(ratioRegions2, f_right, y, x)
  }
});
lambda9 = (undefined, function (ratioRegions2, f_right, y, x) {
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
lambda$7 = (undefined, function (ratioRegions2, width, f_right) {
  return (y) => {
    return lambda10(ratioRegions2, width, f_right, y)
  }
});
lambda$9 = (undefined, function (ratioRegions2, f_down, y) {
  return (x) => {
    return lambda11(ratioRegions2, f_down, y, x)
  }
});
lambda11 = (undefined, function (ratioRegions2, f_down, y, x) {
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
lambda$6 = (undefined, function (ratioRegions2, width, f_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$9(ratioRegions2, f_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$5 = (undefined, function (ratioRegions2, width, e) {
  return (y) => {
    return lambda12(ratioRegions2, width, e, y)
  }
});
lambda$4 = (undefined, function (ratioRegions2, height, e) {
  return (x) => {
    return lambda13(ratioRegions2, height, e, x)
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
  lambda$here = lambda$23(ratioRegions2, width, h, marked, m1);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$22(ratioRegions2, w, width, f_t, h, marked, v, q, tail);
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
lambda10 = (undefined, function (ratioRegions2, width, f_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$10(ratioRegions2, f_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda12 = (undefined, function (ratioRegions2, width, e, y) {
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
lambda13 = (undefined, function (ratioRegions2, height, e, x) {
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
lambda$3 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda14(ratioRegions2, h, m1, y, x)
  }
});
lambda14 = (undefined, function (ratioRegions2, h, m1, y, x) {
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
lambda$2 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$3(ratioRegions2, h, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$1 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda15(ratioRegions2, h, m1, y, x)
  }
});
lambda15 = (undefined, function (ratioRegions2, h, m1, y, x) {
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
lambda$ = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$1(ratioRegions2, h, m1, y);
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
    let lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, m1, m2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, init, ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m11, m21, q, lg_v, v_max, inlinedVal9, arg$Matrix$0$, arg$Matrix$0$1, scrut, arr, arr1, arr2;
    if (true === true) {
      let n, f, arr3, i, tmp8, inlinedVal10, arr4, i1, n1, x, inlinedVal11;
      inlinedVal10 = main_lambda$_lambda$lambda(4, -1);
      tmp8 = [];
      arr4 = tmp8;
      i1 = 0;
      n1 = 5;
      x = inlinedVal10;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp9;
          scrut1 = i1 == n1;
          if (scrut1 === true) {
            inlinedVal11 = arr4;
            break inlinedLbl
          }
          arr4[i1] = x;
          tmp9 = i1 + 1;
          i1 = tmp9;
          continue loopLabel;
        }
      }
      arr2 = inlinedVal11;
      n = 5;
      f = main_lambda$$lambda$(4, -1);
      arr3 = inlinedVal11;
      i = 1;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut1, tmp9, tmp10;
          scrut1 = i < n;
          if (scrut1 === true) {
            tmp9 = runtime.safeCall(f());
            arr3[i] = tmp9;
            tmp10 = i + 1;
            i = tmp10;
            continue loopLabel1
          }
          break inlinedLbl1;
        }
      }
      inlinedVal = ratioRegions1.Matrix(arr2);
      if (true === true) {
        let n2, f1, arr5, i2, tmp9, inlinedVal12, arr6, i3, n3, x1, inlinedVal13;
        inlinedVal12 = main_lambda$_lambda$lambda1(5, -1);
        tmp9 = [];
        arr6 = tmp9;
        i3 = 0;
        n3 = 4;
        x1 = inlinedVal12;
        inlinedLbl2: {
          loopLabel2: while (true) {
            let scrut1, tmp10;
            scrut1 = i3 == n3;
            if (scrut1 === true) {
              inlinedVal13 = arr6;
              break inlinedLbl2
            }
            arr6[i3] = x1;
            tmp10 = i3 + 1;
            i3 = tmp10;
            continue loopLabel2;
          }
        }
        arr1 = inlinedVal13;
        n2 = 4;
        f1 = main_lambda$$lambda$1(5, -1);
        arr5 = inlinedVal13;
        i2 = 1;
        inlinedLbl3: {
          loopLabel3: while (true) {
            let scrut1, tmp10, tmp11;
            scrut1 = i2 < n2;
            if (scrut1 === true) {
              tmp10 = runtime.safeCall(f1());
              arr5[i2] = tmp10;
              tmp11 = i2 + 1;
              i2 = tmp11;
              continue loopLabel3
            }
            break inlinedLbl3;
          }
        }
        inlinedVal1 = ratioRegions1.Matrix(arr1);
        lambda$here = lambda$27(ratioRegions1, 5, 5, inlinedVal);
        ratioRegions1.#doo(5, lambda$here);
        lambda$here1 = lambda$26(ratioRegions1, 5, 5, inlinedVal1);
        ratioRegions1.#doo(4, lambda$here1);
        if (true === true) {
          let n4, f2, arr7, i4, tmp10, inlinedVal14, arr8, i5, n5, x2, inlinedVal15;
          inlinedVal14 = main_lambda$_lambda$lambda2(5, 1);
          tmp10 = [];
          arr8 = tmp10;
          i5 = 0;
          n5 = 5;
          x2 = inlinedVal14;
          inlinedLbl4: {
            loopLabel4: while (true) {
              let scrut1, tmp11;
              scrut1 = i5 == n5;
              if (scrut1 === true) {
                inlinedVal15 = arr8;
                break inlinedLbl4
              }
              arr8[i5] = x2;
              tmp11 = i5 + 1;
              i5 = tmp11;
              continue loopLabel4;
            }
          }
          arr = inlinedVal15;
          n4 = 5;
          f2 = main_lambda$$lambda$2(5, 1);
          arr7 = inlinedVal15;
          i4 = 1;
          inlinedLbl5: {
            loopLabel5: while (true) {
              let scrut1, tmp11, tmp12;
              scrut1 = i4 < n4;
              if (scrut1 === true) {
                tmp11 = runtime.safeCall(f2());
                arr7[i4] = tmp11;
                tmp12 = i4 + 1;
                i4 = tmp12;
                continue loopLabel5
              }
              break inlinedLbl5;
            }
          }
          inlinedVal2 = ratioRegions1.Matrix(arr);
          if (inlinedVal2 instanceof ratioRegions1.Matrix.class) {
            let inlinedVal16;
            arg$Matrix$0$ = inlinedVal2.a;
            inlinedVal16 = arg$Matrix$0$.length;
            if (inlinedVal2 instanceof ratioRegions1.Matrix.class) {
              let inlinedVal17, inlinedVal18, scrut1, arr9, scrut2, arr10, scrut3, arr11, scrut4, arr12, scrut5, arr13, scrut6, arr14;
              arg$Matrix$0$1 = inlinedVal2.a;
              inlinedVal17 = arg$Matrix$0$1.at(0);
              inlinedVal18 = inlinedVal17.length;
              tmp = inlinedVal18 - 1;
              scrut6 = inlinedVal16 > 0;
              if (scrut6 === true) {
                let n6, f3, arr15, i6, tmp11, inlinedVal19, arr16, i7, n7, x3, inlinedVal20;
                inlinedVal19 = main_lambda$_lambda$lambda3(tmp, 0);
                tmp11 = [];
                arr16 = tmp11;
                i7 = 0;
                n7 = inlinedVal16;
                x3 = inlinedVal19;
                inlinedLbl6: {
                  loopLabel6: while (true) {
                    let scrut7, tmp12;
                    scrut7 = i7 == n7;
                    if (scrut7 === true) {
                      inlinedVal20 = arr16;
                      break inlinedLbl6
                    }
                    arr16[i7] = x3;
                    tmp12 = i7 + 1;
                    i7 = tmp12;
                    continue loopLabel6;
                  }
                }
                arr14 = inlinedVal20;
                n6 = inlinedVal16;
                f3 = main_lambda$$lambda$3(tmp, 0);
                arr15 = inlinedVal20;
                i6 = 1;
                inlinedLbl7: {
                  loopLabel7: while (true) {
                    let scrut7, tmp12, tmp13;
                    scrut7 = i6 < n6;
                    if (scrut7 === true) {
                      tmp12 = runtime.safeCall(f3());
                      arr15[i6] = tmp12;
                      tmp13 = i6 + 1;
                      i6 = tmp13;
                      continue loopLabel7
                    }
                    break inlinedLbl7;
                  }
                }
                inlinedVal3 = ratioRegions1.Matrix(arr14);
                tmp1 = inlinedVal16 - 1;
                scrut5 = tmp1 > 0;
                if (scrut5 === true) {
                  let n8, f4, arr17, i8, tmp12, inlinedVal21, arr18, i9, n9, x4, inlinedVal22;
                  inlinedVal21 = main_lambda$_lambda$lambda4(inlinedVal18, 0);
                  tmp12 = [];
                  arr18 = tmp12;
                  i9 = 0;
                  n9 = tmp1;
                  x4 = inlinedVal21;
                  inlinedLbl8: {
                    loopLabel8: while (true) {
                      let scrut7, tmp13;
                      scrut7 = i9 == n9;
                      if (scrut7 === true) {
                        inlinedVal22 = arr18;
                        break inlinedLbl8
                      }
                      arr18[i9] = x4;
                      tmp13 = i9 + 1;
                      i9 = tmp13;
                      continue loopLabel8;
                    }
                  }
                  arr13 = inlinedVal22;
                  n8 = tmp1;
                  f4 = main_lambda$$lambda$4(inlinedVal18, 0);
                  arr17 = inlinedVal22;
                  i8 = 1;
                  inlinedLbl9: {
                    loopLabel9: while (true) {
                      let scrut7, tmp13, tmp14;
                      scrut7 = i8 < n8;
                      if (scrut7 === true) {
                        tmp13 = runtime.safeCall(f4());
                        arr17[i8] = tmp13;
                        tmp14 = i8 + 1;
                        i8 = tmp14;
                        continue loopLabel9
                      }
                      break inlinedLbl9;
                    }
                  }
                  inlinedVal4 = ratioRegions1.Matrix(arr13);
                  scrut4 = inlinedVal16 > 0;
                  if (scrut4 === true) {
                    let n10, f5, arr19, i10, tmp13, inlinedVal23, arr20, i11, n11, x5, inlinedVal24;
                    inlinedVal23 = main_lambda$_lambda$lambda5(inlinedVal18, 0);
                    tmp13 = [];
                    arr20 = tmp13;
                    i11 = 0;
                    n11 = inlinedVal16;
                    x5 = inlinedVal23;
                    inlinedLbl10: {
                      loopLabel10: while (true) {
                        let scrut7, tmp14;
                        scrut7 = i11 == n11;
                        if (scrut7 === true) {
                          inlinedVal24 = arr20;
                          break inlinedLbl10
                        }
                        arr20[i11] = x5;
                        tmp14 = i11 + 1;
                        i11 = tmp14;
                        continue loopLabel10;
                      }
                    }
                    arr12 = inlinedVal24;
                    n10 = inlinedVal16;
                    f5 = main_lambda$$lambda$5(inlinedVal18, 0);
                    arr19 = inlinedVal24;
                    i10 = 1;
                    inlinedLbl11: {
                      loopLabel11: while (true) {
                        let scrut7, tmp14, tmp15;
                        scrut7 = i10 < n10;
                        if (scrut7 === true) {
                          tmp14 = runtime.safeCall(f5());
                          arr19[i10] = tmp14;
                          tmp15 = i10 + 1;
                          i10 = tmp15;
                          continue loopLabel11
                        }
                        break inlinedLbl11;
                      }
                    }
                    inlinedVal5 = ratioRegions1.Matrix(arr12);
                    scrut3 = inlinedVal16 > 0;
                    if (scrut3 === true) {
                      let n12, f6, arr21, i12, tmp14, inlinedVal25, arr22, i13, n13, x6, inlinedVal26;
                      inlinedVal25 = main_lambda$_lambda$lambda6(inlinedVal18, 0);
                      tmp14 = [];
                      arr22 = tmp14;
                      i13 = 0;
                      n13 = inlinedVal16;
                      x6 = inlinedVal25;
                      inlinedLbl12: {
                        loopLabel12: while (true) {
                          let scrut7, tmp15;
                          scrut7 = i13 == n13;
                          if (scrut7 === true) {
                            inlinedVal26 = arr22;
                            break inlinedLbl12
                          }
                          arr22[i13] = x6;
                          tmp15 = i13 + 1;
                          i13 = tmp15;
                          continue loopLabel12;
                        }
                      }
                      arr11 = inlinedVal26;
                      n12 = inlinedVal16;
                      f6 = main_lambda$$lambda$6(inlinedVal18, 0);
                      arr21 = inlinedVal26;
                      i12 = 1;
                      inlinedLbl13: {
                        loopLabel13: while (true) {
                          let scrut7, tmp15, tmp16;
                          scrut7 = i12 < n12;
                          if (scrut7 === true) {
                            tmp15 = runtime.safeCall(f6());
                            arr21[i12] = tmp15;
                            tmp16 = i12 + 1;
                            i12 = tmp16;
                            continue loopLabel13
                          }
                          break inlinedLbl13;
                        }
                      }
                      inlinedVal6 = ratioRegions1.Matrix(arr11);
                      scrut2 = inlinedVal16 > 0;
                      if (scrut2 === true) {
                        let n14, f7, arr23, i14, tmp15, inlinedVal27, arr24, i15, n15, x7, inlinedVal28;
                        inlinedVal27 = main_lambda$_lambda$lambda7(inlinedVal18, 0);
                        tmp15 = [];
                        arr24 = tmp15;
                        i15 = 0;
                        n15 = inlinedVal16;
                        x7 = inlinedVal27;
                        inlinedLbl14: {
                          loopLabel14: while (true) {
                            let scrut7, tmp16;
                            scrut7 = i15 == n15;
                            if (scrut7 === true) {
                              inlinedVal28 = arr24;
                              break inlinedLbl14
                            }
                            arr24[i15] = x7;
                            tmp16 = i15 + 1;
                            i15 = tmp16;
                            continue loopLabel14;
                          }
                        }
                        arr10 = inlinedVal28;
                        n14 = inlinedVal16;
                        f7 = main_lambda$$lambda$7(inlinedVal18, 0);
                        arr23 = inlinedVal28;
                        i14 = 1;
                        inlinedLbl15: {
                          loopLabel15: while (true) {
                            let scrut7, tmp16, tmp17;
                            scrut7 = i14 < n14;
                            if (scrut7 === true) {
                              tmp16 = runtime.safeCall(f7());
                              arr23[i14] = tmp16;
                              tmp17 = i14 + 1;
                              i14 = tmp17;
                              continue loopLabel15
                            }
                            break inlinedLbl15;
                          }
                        }
                        inlinedVal7 = ratioRegions1.Matrix(arr10);
                        scrut1 = inlinedVal16 > 0;
                        if (scrut1 === true) {
                          let n16, f8, arr25, i16, tmp16, inlinedVal29, arr26, i17, n17, x8, inlinedVal30;
                          inlinedVal29 = main_lambda$_lambda$lambda8(inlinedVal18, false);
                          tmp16 = [];
                          arr26 = tmp16;
                          i17 = 0;
                          n17 = inlinedVal16;
                          x8 = inlinedVal29;
                          inlinedLbl16: {
                            loopLabel16: while (true) {
                              let scrut7, tmp17;
                              scrut7 = i17 == n17;
                              if (scrut7 === true) {
                                inlinedVal30 = arr26;
                                break inlinedLbl16
                              }
                              arr26[i17] = x8;
                              tmp17 = i17 + 1;
                              i17 = tmp17;
                              continue loopLabel16;
                            }
                          }
                          arr9 = inlinedVal30;
                          n16 = inlinedVal16;
                          f8 = main_lambda$$lambda$8(inlinedVal18, false);
                          arr25 = inlinedVal30;
                          i16 = 1;
                          inlinedLbl17: {
                            loopLabel17: while (true) {
                              let scrut7, tmp17, tmp18;
                              scrut7 = i16 < n16;
                              if (scrut7 === true) {
                                tmp17 = runtime.safeCall(f8());
                                arr25[i16] = tmp17;
                                tmp18 = i16 + 1;
                                i16 = tmp18;
                                continue loopLabel17
                              }
                              break inlinedLbl17;
                            }
                          }
                          inlinedVal8 = ratioRegions1.Matrix(arr9);
                          tmp2 = inlinedVal16 * inlinedVal18;
                          m1 = tmp2 + 2;
                          tmp3 = 2 * inlinedVal16;
                          tmp4 = tmp3 * inlinedVal18;
                          m2 = tmp4 + 2;
                          tmp5 = 2 * inlinedVal16;
                          tmp6 = tmp5 * inlinedVal18;
                          tmp7 = tmp6 + 3;
                          init = ratioRegions1.Nil;
                          scrut = tmp7 > 0;
                          if (scrut === true) {
                            let tmp17, arr27, i18, n18, x9, inlinedVal31;
                            tmp17 = [];
                            arr27 = tmp17;
                            i18 = 0;
                            n18 = tmp7;
                            x9 = init;
                            inlinedLbl18: {
                              loopLabel18: while (true) {
                                let scrut7, tmp18;
                                scrut7 = i18 == n18;
                                if (scrut7 === true) {
                                  inlinedVal31 = arr27;
                                  break inlinedLbl18
                                }
                                arr27[i18] = x9;
                                tmp18 = i18 + 1;
                                i18 = tmp18;
                                continue loopLabel18;
                              }
                            }
                            ratioRegions2 = ratioRegions1;
                            c_right = inlinedVal;
                            c_down = inlinedVal1;
                            w = inlinedVal2;
                            height = inlinedVal16;
                            width = inlinedVal18;
                            f_right = inlinedVal3;
                            f_down = inlinedVal4;
                            f_t = inlinedVal5;
                            h = inlinedVal6;
                            e = inlinedVal7;
                            marked = inlinedVal8;
                            m11 = m1;
                            m21 = m2;
                            q = inlinedVal31;
                            lg_v = 15;
                            v_max = 0;
                            inlinedLbl19: {
                              loopLabel19: while (true) {
                                let v, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, inlinedVal32;
                                inlinedVal32 = lg_v < 0;
                                if (inlinedVal32 === true) {
                                  let inlinedVal33, pushes, lifts, relabels, tmp28, tmp29, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i19, p, lambda$here7, ratioRegions4, control_string, i20, values;
                                  tmp18 = ratioRegions2.PInt(undefined);
                                  tmp19 = ratioRegions2.Cons(tmp18, ratioRegions2.Nil);
                                  ratioRegions4 = ratioRegions1;
                                  control_string = "V-MAX=~s~%";
                                  i20 = 0;
                                  values = tmp19;
                                  inlinedLbl20: {
                                    loopLabel20: while (true) {
                                      let scrut7, scrut8, scrut9, tmp30, tmp31, arg$Cons$0$, arg$Cons$1$, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, inlinedVal34;
                                      inlinedVal34 = control_string.length;
                                      tmp30 = i20 == inlinedVal34;
                                      switch (tmp30) {
                                        case false:
                                          {
                                            let inlinedVal35;
                                            inlinedVal35 = control_string.at(i20);
                                            scrut7 = inlinedVal35 == "~";
                                            if (scrut7 === true) {
                                              let inlinedVal36;
                                              tmp31 = i20 + 1;
                                              inlinedVal36 = control_string.at(tmp31);
                                              scrut8 = inlinedVal36 == "s";
                                              if (scrut8 === true) {
                                                if (values instanceof ratioRegions4.Cons.class) {
                                                  arg$Cons$0$ = values.head;
                                                  arg$Cons$1$ = values.tail;
                                                  if (arg$Cons$0$ instanceof ratioRegions4.PInt.class) {
                                                    tmp32 = i20 + 2;
                                                    i20 = tmp32;
                                                    values = arg$Cons$1$;
                                                    continue loopLabel20
                                                  }
                                                  scrut9 = inlinedVal36 == "%";
                                                  if (scrut9 === true) {
                                                    tmp33 = i20 + 2;
                                                    i20 = tmp33;
                                                    continue loopLabel20
                                                  }
                                                  tmp34 = i20 + 1;
                                                  i20 = tmp34;
                                                  continue loopLabel20;
                                                }
                                                scrut9 = inlinedVal36 == "%";
                                                if (scrut9 === true) {
                                                  tmp35 = i20 + 2;
                                                  i20 = tmp35;
                                                  continue loopLabel20
                                                }
                                                tmp36 = i20 + 1;
                                                i20 = tmp36;
                                                continue loopLabel20;
                                              }
                                              scrut9 = inlinedVal36 == "%";
                                              if (scrut9 === true) {
                                                tmp37 = i20 + 2;
                                                i20 = tmp37;
                                                continue loopLabel20
                                              }
                                              tmp38 = i20 + 1;
                                              i20 = tmp38;
                                              continue loopLabel20;
                                            }
                                            tmp39 = i20 + 1;
                                            i20 = tmp39;
                                            continue loopLabel20;
                                          }
                                        case true:
                                          break inlinedLbl20;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp20 = v_max + 1;
                                  lambda$here2 = lambda$8(ratioRegions2, width, f_t, e);
                                  ratioRegions2.#doo(height, lambda$here2);
                                  lambda$here3 = lambda$7(ratioRegions2, width, f_right);
                                  ratioRegions2.#doo(height, lambda$here3);
                                  tmp28 = height - 1;
                                  lambda$here4 = lambda$6(ratioRegions2, width, f_down);
                                  ratioRegions2.#doo(tmp28, lambda$here4);
                                  lambda$here5 = lambda$5(ratioRegions2, width, e);
                                  ratioRegions2.#doo(height, lambda$here5);
                                  tmp29 = width - 1;
                                  lambda$here6 = lambda$4(ratioRegions2, height, e);
                                  ratioRegions2.#doo(tmp29, lambda$here6);
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
                                  i19 = 0;
                                  p = false;
                                  inlinedLbl21: {
                                    loopLabel21: while (true) {
                                      let scrut7, scrut8, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal34, inlinedVal35, tmp67, tmp68, inlinedVal36;
                                      tmp67 = i19 / 6;
                                      inlinedVal36 = runtime.safeCall(globalThis.Math.floor(tmp67));
                                      tmp68 = 6 * inlinedVal36;
                                      inlinedVal34 = i19 - tmp68;
                                      inlinedVal35 = inlinedVal34 == 0;
                                      if (inlinedVal35 === true) {
                                        let inlinedVal37;
                                        switch (p) {
                                          case false:
                                            inlinedVal37 = true;
                                            break;
                                          case true:
                                            inlinedVal37 = false;
                                            break;
                                          default:
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                        }
                                        tmp30 = inlinedVal37;
                                      } else {
                                        tmp30 = false;
                                      }
                                      if (tmp30 === true) {
                                        relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                                        tmp31 = relabels1.value + 1;
                                        relabels1.value = tmp31;
                                        lambda$here8 = lambda$16(ratioRegions3, width1, h1, e1, m12);
                                        scrut7 = ratioRegions3.#every_n(height1, lambda$here8);
                                        if (scrut7 === true) {
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
                                          break inlinedLbl21
                                        }
                                        {
                                          let inlinedVal37;
                                          inlinedVal37 = q1.length;
                                          lambda$here9 = lambda$15(ratioRegions3, q1);
                                          ratioRegions3.#doo(inlinedVal37, lambda$here9);
                                          lambda$here10 = lambda$14(ratioRegions3, width1, marked1);
                                          ratioRegions3.#doo(height1, lambda$here10);
                                          lambda$here11 = lambda$13(ratioRegions3, width1, h1, e1, marked1, q1);
                                          ratioRegions3.#doo(height1, lambda$here11);
                                          p = true;
                                          continue loopLabel21;
                                        }
                                      }
                                      lambda$here12 = lambda$12(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                                      scrut8 = ratioRegions3.#some_vector(q1, lambda$here12);
                                      if (scrut8 === true) {
                                        let inlinedVal37, ratioRegions5, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                                        inlinedVal37 = q1.length;
                                        tmp48 = inlinedVal37 - 1;
                                        ratioRegions5 = ratioRegions3;
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
                                        inlinedLbl22: {
                                          loopLabel22: while (true) {
                                            let tmp69, inlinedVal38;
                                            inlinedVal38 = k < 0;
                                            switch (inlinedVal38) {
                                              case false:
                                                {
                                                  let inlinedVal39, x10, f9, f10;
                                                  inlinedVal39 = q2.at(k);
                                                  x10 = ratioRegions5.Nil;
                                                  q2[k] = x10;
                                                  f9 = lambda$17(ratioRegions5, marked2);
                                                  ratioRegions5.#listApp$tailrec(f9, inlinedVal39);
                                                  f10 = main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions5, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                                  ratioRegions5.#listApp$tailrec(f10, inlinedVal39);
                                                  tmp69 = k - 1;
                                                  k = tmp69;
                                                  continue loopLabel22;
                                                }
                                              case true:
                                                break inlinedLbl22;
                                            }
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                          }
                                        }
                                        tmp49 = i19 + 1;
                                        i19 = tmp49;
                                        p = false;
                                        continue loopLabel21
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
                                      break inlinedLbl21;
                                    }
                                  }
                                  lambda$here7 = lambda$(ratioRegions2, width, h, m11);
                                  inlinedVal33 = ratioRegions2.#map_n_vector(height, lambda$here7);
                                  inlinedVal9 = inlinedVal33;
                                  break inlinedLbl19
                                }
                                {
                                  let i19, c, inlinedVal33, inlinedVal34, pushes, lifts, relabels, tmp28, tmp29, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m12, m22, q1, v1, pushes1, lifts1, relabels1, i20, p, lambda$here7, ratioRegions4, control_string, i21, values;
                                  i19 = lg_v;
                                  c = 1;
                                  inlinedLbl20: {
                                    loopLabel20: while (true) {
                                      let tmp30, tmp31, inlinedVal35;
                                      inlinedVal35 = i19 == 0;
                                      if (inlinedVal35 === true) {
                                        inlinedVal33 = c;
                                        break inlinedLbl20
                                      }
                                      tmp30 = i19 - 1;
                                      tmp31 = c + c;
                                      i19 = tmp30;
                                      c = tmp31;
                                      continue loopLabel20;
                                    }
                                  }
                                  v = v_max + inlinedVal33;
                                  tmp21 = ratioRegions2.PInt(undefined);
                                  tmp22 = ratioRegions2.PInt(undefined);
                                  tmp23 = ratioRegions2.PInt(undefined);
                                  tmp24 = ratioRegions2.Cons(tmp23, ratioRegions2.Nil);
                                  tmp25 = ratioRegions2.Cons(tmp22, tmp24);
                                  tmp26 = ratioRegions2.Cons(tmp21, tmp25);
                                  ratioRegions4 = ratioRegions1;
                                  control_string = "LG-V=~s, V-MAX=~s, V=~s~%";
                                  i21 = 0;
                                  values = tmp26;
                                  inlinedLbl21: {
                                    loopLabel21: while (true) {
                                      let scrut7, scrut8, scrut9, tmp30, tmp31, arg$Cons$0$, arg$Cons$1$, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, inlinedVal35;
                                      inlinedVal35 = control_string.length;
                                      tmp30 = i21 == inlinedVal35;
                                      switch (tmp30) {
                                        case false:
                                          {
                                            let inlinedVal36;
                                            inlinedVal36 = control_string.at(i21);
                                            scrut7 = inlinedVal36 == "~";
                                            if (scrut7 === true) {
                                              let inlinedVal37;
                                              tmp31 = i21 + 1;
                                              inlinedVal37 = control_string.at(tmp31);
                                              scrut8 = inlinedVal37 == "s";
                                              if (scrut8 === true) {
                                                if (values instanceof ratioRegions4.Cons.class) {
                                                  arg$Cons$0$ = values.head;
                                                  arg$Cons$1$ = values.tail;
                                                  if (arg$Cons$0$ instanceof ratioRegions4.PInt.class) {
                                                    tmp32 = i21 + 2;
                                                    i21 = tmp32;
                                                    values = arg$Cons$1$;
                                                    continue loopLabel21
                                                  }
                                                  scrut9 = inlinedVal37 == "%";
                                                  if (scrut9 === true) {
                                                    tmp33 = i21 + 2;
                                                    i21 = tmp33;
                                                    continue loopLabel21
                                                  }
                                                  tmp34 = i21 + 1;
                                                  i21 = tmp34;
                                                  continue loopLabel21;
                                                }
                                                scrut9 = inlinedVal37 == "%";
                                                if (scrut9 === true) {
                                                  tmp35 = i21 + 2;
                                                  i21 = tmp35;
                                                  continue loopLabel21
                                                }
                                                tmp36 = i21 + 1;
                                                i21 = tmp36;
                                                continue loopLabel21;
                                              }
                                              scrut9 = inlinedVal37 == "%";
                                              if (scrut9 === true) {
                                                tmp37 = i21 + 2;
                                                i21 = tmp37;
                                                continue loopLabel21
                                              }
                                              tmp38 = i21 + 1;
                                              i21 = tmp38;
                                              continue loopLabel21;
                                            }
                                            tmp39 = i21 + 1;
                                            i21 = tmp39;
                                            continue loopLabel21;
                                          }
                                        case true:
                                          break inlinedLbl21;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  lambda$here2 = lambda$8(ratioRegions2, width, f_t, e);
                                  ratioRegions2.#doo(height, lambda$here2);
                                  lambda$here3 = lambda$7(ratioRegions2, width, f_right);
                                  ratioRegions2.#doo(height, lambda$here3);
                                  tmp28 = height - 1;
                                  lambda$here4 = lambda$6(ratioRegions2, width, f_down);
                                  ratioRegions2.#doo(tmp28, lambda$here4);
                                  lambda$here5 = lambda$5(ratioRegions2, width, e);
                                  ratioRegions2.#doo(height, lambda$here5);
                                  tmp29 = width - 1;
                                  lambda$here6 = lambda$4(ratioRegions2, height, e);
                                  ratioRegions2.#doo(tmp29, lambda$here6);
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
                                  i20 = 0;
                                  p = false;
                                  inlinedLbl22: {
                                    loopLabel22: while (true) {
                                      let scrut7, scrut8, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal35, inlinedVal36, tmp67, tmp68, inlinedVal37;
                                      tmp67 = i20 / 6;
                                      inlinedVal37 = runtime.safeCall(globalThis.Math.floor(tmp67));
                                      tmp68 = 6 * inlinedVal37;
                                      inlinedVal35 = i20 - tmp68;
                                      inlinedVal36 = inlinedVal35 == 0;
                                      if (inlinedVal36 === true) {
                                        let inlinedVal38;
                                        switch (p) {
                                          case false:
                                            inlinedVal38 = true;
                                            break;
                                          case true:
                                            inlinedVal38 = false;
                                            break;
                                          default:
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                        }
                                        tmp30 = inlinedVal38;
                                      } else {
                                        tmp30 = false;
                                      }
                                      if (tmp30 === true) {
                                        relabel(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, marked1, m12, v1);
                                        tmp31 = relabels1.value + 1;
                                        relabels1.value = tmp31;
                                        lambda$here8 = lambda$16(ratioRegions3, width1, h1, e1, m12);
                                        scrut7 = ratioRegions3.#every_n(height1, lambda$here8);
                                        if (scrut7 === true) {
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
                                          break inlinedLbl22
                                        }
                                        {
                                          let inlinedVal38;
                                          inlinedVal38 = q1.length;
                                          lambda$here9 = lambda$15(ratioRegions3, q1);
                                          ratioRegions3.#doo(inlinedVal38, lambda$here9);
                                          lambda$here10 = lambda$14(ratioRegions3, width1, marked1);
                                          ratioRegions3.#doo(height1, lambda$here10);
                                          lambda$here11 = lambda$13(ratioRegions3, width1, h1, e1, marked1, q1);
                                          ratioRegions3.#doo(height1, lambda$here11);
                                          p = true;
                                          continue loopLabel22;
                                        }
                                      }
                                      lambda$here12 = lambda$12(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m12, v1);
                                      scrut8 = ratioRegions3.#some_vector(q1, lambda$here12);
                                      if (scrut8 === true) {
                                        let inlinedVal38, ratioRegions5, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2, k;
                                        inlinedVal38 = q1.length;
                                        tmp48 = inlinedVal38 - 1;
                                        ratioRegions5 = ratioRegions3;
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
                                        inlinedLbl23: {
                                          loopLabel23: while (true) {
                                            let tmp69, inlinedVal39;
                                            inlinedVal39 = k < 0;
                                            switch (inlinedVal39) {
                                              case false:
                                                {
                                                  let inlinedVal40, x10, f9, f10;
                                                  inlinedVal40 = q2.at(k);
                                                  x10 = ratioRegions5.Nil;
                                                  q2[k] = x10;
                                                  f9 = lambda$17(ratioRegions5, marked2);
                                                  ratioRegions5.#listApp$tailrec(f9, inlinedVal40);
                                                  f10 = main_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$$main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions5, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked2, m13, m23, q2, v2, pushes2, lifts2);
                                                  ratioRegions5.#listApp$tailrec(f10, inlinedVal40);
                                                  tmp69 = k - 1;
                                                  k = tmp69;
                                                  continue loopLabel23;
                                                }
                                              case true:
                                                break inlinedLbl23;
                                            }
                                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                          }
                                        }
                                        tmp49 = i20 + 1;
                                        i20 = tmp49;
                                        p = false;
                                        continue loopLabel22
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
                                      break inlinedLbl22;
                                    }
                                  }
                                  tmp27 = lg_v - 1;
                                  lambda$here7 = lambda$2(ratioRegions2, width, h, m11);
                                  inlinedVal34 = ratioRegions2.#every_n(height, lambda$here7);
                                  if (inlinedVal34 === true) {
                                    lg_v = tmp27;
                                    v_max = v;
                                    continue loopLabel19
                                  }
                                  lg_v = tmp27;
                                  v_max = v_max;
                                  continue loopLabel19;
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ratioRegions"];
});
export default ratioRegions1;
