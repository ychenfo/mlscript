const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const doo$accessorSymbol = globalThis.Symbol("doo");
const listApp$tailrec$accessorSymbol = globalThis.Symbol("listApp$tailrec");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let loop, init, loop1, loop2, loop3, loop4, enqueue, loop5, isNull, dequeue, loopK, push_t, loop6, ef_t, enqueue1, can_push_down, push_down, can_push_left, push_right, push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, push_up, lift, loopPow, loop7, min_cut, ef_up, ef_right, cf_right, cf_down, ef_left, min_cut_includes_every_edge_to_t, cf_up, preflow_push, cf_left, ef_down, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK, main_doit_rao_ratio_region_loop_preflow_push_loop$loop, main_doit_rao_ratio_region_loop_preflow_push$preflow_push, main_doit_rao_ratio_region_loop$loop, main_doit_rao_ratio_region$rao_ratio_region, main_doit$doit, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1, main_doit_rao_ratio_region_loop_preflow_push_loop$loop1, main_doit_rao_ratio_region_loop_preflow_push$preflow_push1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK, doit_rao_ratio_region_loop_preflow_push_loop$loop, doit_rao_ratio_region_loop_preflow_push$preflow_push, doit_rao_ratio_region_loop$loop, doit_rao_ratio_region$rao_ratio_region, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1, doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1, doit_rao_ratio_region_loop_preflow_push_loop$loop1, doit_rao_ratio_region_loop_preflow_push$preflow_push1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$, rao_ratio_region_loop_preflow_push_loop_loopK$loopK, rao_ratio_region_loop_preflow_push_loop$loop, rao_ratio_region_loop_preflow_push$preflow_push, rao_ratio_region_loop$loop, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1, rao_ratio_region_loop_preflow_push_loop_loopK$loopK1, rao_ratio_region_loop_preflow_push_loop$loop1, rao_ratio_region_loop_preflow_push$preflow_push1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1, loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift, loop_preflow_push_loop_loopK_lambda$_lambda$lambda, loop_preflow_push_loop_loopK_lambda$$lambda$, loop_preflow_push_loop_loopK$loopK, loop_preflow_push_loop$loop, loop_preflow_push$preflow_push, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop, loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1, loop_preflow_push_loop_loopK_lambda$_lambda$lambda1, loop_preflow_push_loop_loopK_lambda$$lambda$1, loop_preflow_push_loop_loopK$loopK1, loop_preflow_push_loop$loop1, loop_preflow_push$preflow_push1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1, preflow_push_loop_loopK_lambda$_lambda_lift$lift, preflow_push_loop_loopK_lambda$_lambda$lambda, preflow_push_loop_loopK_lambda$$lambda$, preflow_push_loop_loopK$loopK, preflow_push_loop$loop, preflow_push_loop_loopK_lambda$_lambda_lift_min$min, preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop, loop_loopK_lambda$_lambda_lift$lift, loop_loopK_lambda$_lambda$lambda, loop_loopK_lambda$$lambda$, loop_loopK$loopK, loop_loopK_lambda$_lambda_lift_min$min, loop_loopK_lambda$_lambda_lift_min_loop$loop, lift_min$min, lift_min_loop$loop, loopK_lambda$_lambda_lift$lift, loopK_lambda$_lambda$lambda, loopK_lambda$$lambda$, loopK_lambda$_lambda_lift_min$min, loopK_lambda$_lambda_lift_min_loop$loop, lambda_lift$lift, lambda_lift_min$min, lambda_lift_min_loop$loop, lambda$_lambda_lift$lift, lambda$_lambda$lambda, lambda$_lambda_lift_min$min, lambda$_lambda_lift_min_loop$loop, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1, preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons, preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest, preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest, preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, loop_loopK_lambda$_lambda_lift_min$l_Cons, loop_loopK_lambda$_lambda_lift_min$l_rest, loop_loopK_lambda$_lambda_lift_min_loop$l_Cons, loop_loopK_lambda$_lambda_lift_min_loop$l_rest, loop_loopK_lambda$_lambda_lift_min_loop$l_Nil, lift_min$l_Cons, lift_min$l_rest, lift_min_loop$l_Cons, lift_min_loop$l_rest, lift_min_loop$l_Nil, loopK_lambda$_lambda_lift_min$l_Cons, loopK_lambda$_lambda_lift_min$l_rest, loopK_lambda$_lambda_lift_min_loop$l_Cons, loopK_lambda$_lambda_lift_min_loop$l_rest, loopK_lambda$_lambda_lift_min_loop$l_Nil, lambda_lift_min$l_Cons, lambda_lift_min$l_rest, lambda_lift_min_loop$l_Cons, lambda_lift_min_loop$l_rest, lambda_lift_min_loop$l_Nil, lambda$_lambda_lift_min$l_Cons, lambda$_lambda_lift_min$l_rest, lambda$_lambda_lift_min_loop$l_Cons, lambda$_lambda_lift_min_loop$l_rest, lambda$_lambda_lift_min_loop$l_Nil, lambda$_lambda_lift_min_loop$l_Cons$worker, lambda_lift_min_loop$l_Cons$worker, loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, lift_min_loop$l_Cons$worker, loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker, main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1;
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop$loop = function main_doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
main_doit_rao_ratio_region_loop_preflow_push$preflow_push = function main_doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return main_doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
main_doit_rao_ratio_region_loop$loop = function main_doit_rao_ratio_region_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_v, v_max) {
  loopLabel: while (true) {
    let v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal;
    inlinedVal = lg_v < 0;
    if (inlinedVal === true) {
      tmp = ratioRegions2.PInt(v_max);
      tmp1 = ratioRegions2.Cons(tmp, ratioRegions2.Nil);
      loop4(ratioRegions2, "V-MAX=~s~%", 0, tmp1);
      tmp2 = v_max + 1;
      main_doit_rao_ratio_region_loop_preflow_push$preflow_push1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp2);
      return min_cut(ratioRegions2, height, width, h, m1)
    }
    {
      let p, inlinedVal1;
      tmp3 = loopPow(ratioRegions2, lg_v, 1);
      v = v_max + tmp3;
      tmp4 = ratioRegions2.PInt(lg_v);
      tmp5 = ratioRegions2.PInt(v_max);
      tmp6 = ratioRegions2.PInt(v);
      tmp7 = ratioRegions2.Cons(tmp6, ratioRegions2.Nil);
      tmp8 = ratioRegions2.Cons(tmp5, tmp7);
      tmp9 = ratioRegions2.Cons(tmp4, tmp8);
      loop4(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp9);
      main_doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v);
      tmp10 = lg_v - 1;
      p = lambda$3(ratioRegions2, width, h, m1);
      inlinedVal1 = loop2(height, p, 0);
      if (inlinedVal1 === true) {
        lg_v = tmp10;
        v_max = v;
        continue loopLabel
      }
      lg_v = tmp10;
      v_max = v_max;
      continue loopLabel;
    }
  }
};
main_doit_rao_ratio_region$rao_ratio_region = function main_doit_rao_ratio_region$rao_ratio_region(c_right, c_down, w, lg_max_v) {
  let m1, m2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, init1, scrut, arg$Matrix$0$, arg$Matrix$0$1;
  if (w instanceof ratioRegions1.Matrix.class) {
    let inlinedVal6;
    arg$Matrix$0$1 = w.a;
    inlinedVal6 = arg$Matrix$0$1.length;
    if (w instanceof ratioRegions1.Matrix.class) {
      let inlinedVal7, inlinedVal8, f, f1, f2, f3, f4, f5, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6;
      arg$Matrix$0$ = w.a;
      inlinedVal7 = arg$Matrix$0$.at(0);
      inlinedVal8 = inlinedVal7.length;
      tmp = inlinedVal8 - 1;
      f = lambda$(ratioRegions1, tmp, 0);
      scrut6 = inlinedVal6 > 0;
      if (scrut6 === true) {
        let inlinedVal9, tmp8, arr, i, n, x, inlinedVal10;
        inlinedVal9 = lambda(ratioRegions1, tmp, 0, 0);
        tmp8 = [];
        arr = tmp8;
        i = 0;
        n = inlinedVal6;
        x = inlinedVal9;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut7, tmp9;
            scrut7 = i == n;
            if (scrut7 === true) {
              inlinedVal10 = arr;
              break inlinedLbl
            }
            arr[i] = x;
            tmp9 = i + 1;
            i = tmp9;
            continue loopLabel;
          }
        }
        init(ratioRegions1, inlinedVal6, f, inlinedVal10, 1);
        inlinedVal = ratioRegions1.Matrix(inlinedVal10);
        tmp1 = inlinedVal6 - 1;
        f1 = lambda$(ratioRegions1, inlinedVal8, 0);
        scrut5 = tmp1 > 0;
        if (scrut5 === true) {
          let inlinedVal11, tmp9, arr1, i1, n1, x1, inlinedVal12;
          inlinedVal11 = lambda(ratioRegions1, inlinedVal8, 0, 0);
          tmp9 = [];
          arr1 = tmp9;
          i1 = 0;
          n1 = tmp1;
          x1 = inlinedVal11;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut7, tmp10;
              scrut7 = i1 == n1;
              if (scrut7 === true) {
                inlinedVal12 = arr1;
                break inlinedLbl1
              }
              arr1[i1] = x1;
              tmp10 = i1 + 1;
              i1 = tmp10;
              continue loopLabel1;
            }
          }
          init(ratioRegions1, tmp1, f1, inlinedVal12, 1);
          inlinedVal1 = ratioRegions1.Matrix(inlinedVal12);
          f2 = lambda$(ratioRegions1, inlinedVal8, 0);
          scrut4 = inlinedVal6 > 0;
          if (scrut4 === true) {
            let inlinedVal13, tmp10, arr2, i2, n2, x2, inlinedVal14;
            inlinedVal13 = lambda(ratioRegions1, inlinedVal8, 0, 0);
            tmp10 = [];
            arr2 = tmp10;
            i2 = 0;
            n2 = inlinedVal6;
            x2 = inlinedVal13;
            inlinedLbl2: {
              loopLabel2: while (true) {
                let scrut7, tmp11;
                scrut7 = i2 == n2;
                if (scrut7 === true) {
                  inlinedVal14 = arr2;
                  break inlinedLbl2
                }
                arr2[i2] = x2;
                tmp11 = i2 + 1;
                i2 = tmp11;
                continue loopLabel2;
              }
            }
            init(ratioRegions1, inlinedVal6, f2, inlinedVal14, 1);
            inlinedVal2 = ratioRegions1.Matrix(inlinedVal14);
            f3 = lambda$(ratioRegions1, inlinedVal8, 0);
            scrut3 = inlinedVal6 > 0;
            if (scrut3 === true) {
              let inlinedVal15, tmp11, arr3, i3, n3, x3, inlinedVal16;
              inlinedVal15 = lambda(ratioRegions1, inlinedVal8, 0, 0);
              tmp11 = [];
              arr3 = tmp11;
              i3 = 0;
              n3 = inlinedVal6;
              x3 = inlinedVal15;
              inlinedLbl3: {
                loopLabel3: while (true) {
                  let scrut7, tmp12;
                  scrut7 = i3 == n3;
                  if (scrut7 === true) {
                    inlinedVal16 = arr3;
                    break inlinedLbl3
                  }
                  arr3[i3] = x3;
                  tmp12 = i3 + 1;
                  i3 = tmp12;
                  continue loopLabel3;
                }
              }
              init(ratioRegions1, inlinedVal6, f3, inlinedVal16, 1);
              inlinedVal3 = ratioRegions1.Matrix(inlinedVal16);
              f4 = lambda$(ratioRegions1, inlinedVal8, 0);
              scrut2 = inlinedVal6 > 0;
              if (scrut2 === true) {
                let inlinedVal17, tmp12, arr4, i4, n4, x4, inlinedVal18;
                inlinedVal17 = lambda(ratioRegions1, inlinedVal8, 0, 0);
                tmp12 = [];
                arr4 = tmp12;
                i4 = 0;
                n4 = inlinedVal6;
                x4 = inlinedVal17;
                inlinedLbl4: {
                  loopLabel4: while (true) {
                    let scrut7, tmp13;
                    scrut7 = i4 == n4;
                    if (scrut7 === true) {
                      inlinedVal18 = arr4;
                      break inlinedLbl4
                    }
                    arr4[i4] = x4;
                    tmp13 = i4 + 1;
                    i4 = tmp13;
                    continue loopLabel4;
                  }
                }
                init(ratioRegions1, inlinedVal6, f4, inlinedVal18, 1);
                inlinedVal4 = ratioRegions1.Matrix(inlinedVal18);
                f5 = lambda$(ratioRegions1, inlinedVal8, false);
                scrut1 = inlinedVal6 > 0;
                if (scrut1 === true) {
                  let inlinedVal19, tmp13, arr5, i5, n5, x5, inlinedVal20;
                  inlinedVal19 = lambda(ratioRegions1, inlinedVal8, false, 0);
                  tmp13 = [];
                  arr5 = tmp13;
                  i5 = 0;
                  n5 = inlinedVal6;
                  x5 = inlinedVal19;
                  inlinedLbl5: {
                    loopLabel5: while (true) {
                      let scrut7, tmp14;
                      scrut7 = i5 == n5;
                      if (scrut7 === true) {
                        inlinedVal20 = arr5;
                        break inlinedLbl5
                      }
                      arr5[i5] = x5;
                      tmp14 = i5 + 1;
                      i5 = tmp14;
                      continue loopLabel5;
                    }
                  }
                  init(ratioRegions1, inlinedVal6, f5, inlinedVal20, 1);
                  inlinedVal5 = ratioRegions1.Matrix(inlinedVal20);
                  tmp2 = inlinedVal6 * inlinedVal8;
                  m1 = tmp2 + 2;
                  tmp3 = 2 * inlinedVal6;
                  tmp4 = tmp3 * inlinedVal8;
                  m2 = tmp4 + 2;
                  tmp5 = 2 * inlinedVal6;
                  tmp6 = tmp5 * inlinedVal8;
                  tmp7 = tmp6 + 3;
                  init1 = ratioRegions1.Nil;
                  scrut = tmp7 > 0;
                  if (scrut === true) {
                    let tmp14, arr6, i6, n6, x6, inlinedVal21;
                    tmp14 = [];
                    arr6 = tmp14;
                    i6 = 0;
                    n6 = tmp7;
                    x6 = init1;
                    inlinedLbl6: {
                      loopLabel6: while (true) {
                        let scrut7, tmp15;
                        scrut7 = i6 == n6;
                        if (scrut7 === true) {
                          inlinedVal21 = arr6;
                          break inlinedLbl6
                        }
                        arr6[i6] = x6;
                        tmp15 = i6 + 1;
                        i6 = tmp15;
                        continue loopLabel6;
                      }
                    }
                    return main_doit_rao_ratio_region_loop$loop(ratioRegions1, c_right, c_down, w, inlinedVal6, inlinedVal8, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, m1, m2, inlinedVal21, lg_max_v, 0)
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
};
main_doit$doit = function main_doit$doit(n) {
  let tmp, tmp1, tmp2, lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, f, f1, f2, scrut, scrut1, scrut2;
  tmp = n - 1;
  f = lambda$(ratioRegions1, tmp, -1);
  scrut2 = n > 0;
  if (scrut2 === true) {
    let inlinedVal3, tmp3, arr, i, n1, x, inlinedVal4;
    inlinedVal3 = lambda(ratioRegions1, tmp, -1, 0);
    tmp3 = [];
    arr = tmp3;
    i = 0;
    n1 = n;
    x = inlinedVal3;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut3, tmp4;
        scrut3 = i == n1;
        if (scrut3 === true) {
          inlinedVal4 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp4 = i + 1;
        i = tmp4;
        continue loopLabel;
      }
    }
    init(ratioRegions1, n, f, inlinedVal4, 1);
    inlinedVal = ratioRegions1.Matrix(inlinedVal4);
    tmp1 = n - 1;
    f1 = lambda$(ratioRegions1, n, -1);
    scrut1 = tmp1 > 0;
    if (scrut1 === true) {
      let inlinedVal5, tmp4, arr1, i1, n2, x1, inlinedVal6;
      inlinedVal5 = lambda(ratioRegions1, n, -1, 0);
      tmp4 = [];
      arr1 = tmp4;
      i1 = 0;
      n2 = tmp1;
      x1 = inlinedVal5;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut3, tmp5;
          scrut3 = i1 == n2;
          if (scrut3 === true) {
            inlinedVal6 = arr1;
            break inlinedLbl1
          }
          arr1[i1] = x1;
          tmp5 = i1 + 1;
          i1 = tmp5;
          continue loopLabel1;
        }
      }
      init(ratioRegions1, tmp1, f1, inlinedVal6, 1);
      inlinedVal1 = ratioRegions1.Matrix(inlinedVal6);
      lambda$here = lambda$29(ratioRegions1, n, n, inlinedVal);
      ratioRegions1[doo$accessorSymbol](n, lambda$here);
      tmp2 = n - 1;
      lambda$here1 = lambda$28(ratioRegions1, n, n, inlinedVal1);
      ratioRegions1[doo$accessorSymbol](tmp2, lambda$here1);
      f2 = lambda$(ratioRegions1, n, 1);
      scrut = n > 0;
      if (scrut === true) {
        let inlinedVal7, tmp5, arr2, i2, n3, x2, inlinedVal8;
        inlinedVal7 = lambda(ratioRegions1, n, 1, 0);
        tmp5 = [];
        arr2 = tmp5;
        i2 = 0;
        n3 = n;
        x2 = inlinedVal7;
        inlinedLbl2: {
          loopLabel2: while (true) {
            let scrut3, tmp6;
            scrut3 = i2 == n3;
            if (scrut3 === true) {
              inlinedVal8 = arr2;
              break inlinedLbl2
            }
            arr2[i2] = x2;
            tmp6 = i2 + 1;
            i2 = tmp6;
            continue loopLabel2;
          }
        }
        init(ratioRegions1, n, f2, inlinedVal8, 1);
        inlinedVal2 = ratioRegions1.Matrix(inlinedVal8);
        return main_doit_rao_ratio_region$rao_ratio_region(inlinedVal, inlinedVal1, inlinedVal2, 15)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop$loop1 = function main_doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
main_doit_rao_ratio_region_loop_preflow_push$preflow_push1 = function main_doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return main_doit_rao_ratio_region_loop_preflow_push_loop$loop1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK = function doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_rao_ratio_region_loop_preflow_push_loop$loop = function doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
doit_rao_ratio_region_loop_preflow_push$preflow_push = function doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
doit_rao_ratio_region_loop$loop = function doit_rao_ratio_region_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_v, v_max) {
  loopLabel: while (true) {
    let v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal;
    inlinedVal = lg_v < 0;
    if (inlinedVal === true) {
      tmp = ratioRegions2.PInt(v_max);
      tmp1 = ratioRegions2.Cons(tmp, ratioRegions2.Nil);
      loop4(ratioRegions2, "V-MAX=~s~%", 0, tmp1);
      tmp2 = v_max + 1;
      doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp2);
      return min_cut(ratioRegions2, height, width, h, m1)
    }
    {
      let p, inlinedVal1;
      tmp3 = loopPow(ratioRegions2, lg_v, 1);
      v = v_max + tmp3;
      tmp4 = ratioRegions2.PInt(lg_v);
      tmp5 = ratioRegions2.PInt(v_max);
      tmp6 = ratioRegions2.PInt(v);
      tmp7 = ratioRegions2.Cons(tmp6, ratioRegions2.Nil);
      tmp8 = ratioRegions2.Cons(tmp5, tmp7);
      tmp9 = ratioRegions2.Cons(tmp4, tmp8);
      loop4(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp9);
      doit_rao_ratio_region_loop_preflow_push$preflow_push1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v);
      tmp10 = lg_v - 1;
      p = lambda$3(ratioRegions2, width, h, m1);
      inlinedVal1 = loop2(height, p, 0);
      if (inlinedVal1 === true) {
        lg_v = tmp10;
        v_max = v;
        continue loopLabel
      }
      lg_v = tmp10;
      v_max = v_max;
      continue loopLabel;
    }
  }
};
doit_rao_ratio_region$rao_ratio_region = function doit_rao_ratio_region$rao_ratio_region(c_right, c_down, w, lg_max_v) {
  let m1, m2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, init1, scrut, arg$Matrix$0$, arg$Matrix$0$1;
  if (w instanceof ratioRegions1.Matrix.class) {
    let inlinedVal6;
    arg$Matrix$0$1 = w.a;
    inlinedVal6 = arg$Matrix$0$1.length;
    if (w instanceof ratioRegions1.Matrix.class) {
      let inlinedVal7, inlinedVal8, f, f1, f2, f3, f4, f5, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6;
      arg$Matrix$0$ = w.a;
      inlinedVal7 = arg$Matrix$0$.at(0);
      inlinedVal8 = inlinedVal7.length;
      tmp = inlinedVal8 - 1;
      f = lambda$(ratioRegions1, tmp, 0);
      scrut6 = inlinedVal6 > 0;
      if (scrut6 === true) {
        let inlinedVal9, tmp8, arr, i, n, x, inlinedVal10;
        inlinedVal9 = lambda(ratioRegions1, tmp, 0, 0);
        tmp8 = [];
        arr = tmp8;
        i = 0;
        n = inlinedVal6;
        x = inlinedVal9;
        inlinedLbl: {
          loopLabel: while (true) {
            let scrut7, tmp9;
            scrut7 = i == n;
            if (scrut7 === true) {
              inlinedVal10 = arr;
              break inlinedLbl
            }
            arr[i] = x;
            tmp9 = i + 1;
            i = tmp9;
            continue loopLabel;
          }
        }
        init(ratioRegions1, inlinedVal6, f, inlinedVal10, 1);
        inlinedVal = ratioRegions1.Matrix(inlinedVal10);
        tmp1 = inlinedVal6 - 1;
        f1 = lambda$(ratioRegions1, inlinedVal8, 0);
        scrut5 = tmp1 > 0;
        if (scrut5 === true) {
          let inlinedVal11, tmp9, arr1, i1, n1, x1, inlinedVal12;
          inlinedVal11 = lambda(ratioRegions1, inlinedVal8, 0, 0);
          tmp9 = [];
          arr1 = tmp9;
          i1 = 0;
          n1 = tmp1;
          x1 = inlinedVal11;
          inlinedLbl1: {
            loopLabel1: while (true) {
              let scrut7, tmp10;
              scrut7 = i1 == n1;
              if (scrut7 === true) {
                inlinedVal12 = arr1;
                break inlinedLbl1
              }
              arr1[i1] = x1;
              tmp10 = i1 + 1;
              i1 = tmp10;
              continue loopLabel1;
            }
          }
          init(ratioRegions1, tmp1, f1, inlinedVal12, 1);
          inlinedVal1 = ratioRegions1.Matrix(inlinedVal12);
          f2 = lambda$(ratioRegions1, inlinedVal8, 0);
          scrut4 = inlinedVal6 > 0;
          if (scrut4 === true) {
            let inlinedVal13, tmp10, arr2, i2, n2, x2, inlinedVal14;
            inlinedVal13 = lambda(ratioRegions1, inlinedVal8, 0, 0);
            tmp10 = [];
            arr2 = tmp10;
            i2 = 0;
            n2 = inlinedVal6;
            x2 = inlinedVal13;
            inlinedLbl2: {
              loopLabel2: while (true) {
                let scrut7, tmp11;
                scrut7 = i2 == n2;
                if (scrut7 === true) {
                  inlinedVal14 = arr2;
                  break inlinedLbl2
                }
                arr2[i2] = x2;
                tmp11 = i2 + 1;
                i2 = tmp11;
                continue loopLabel2;
              }
            }
            init(ratioRegions1, inlinedVal6, f2, inlinedVal14, 1);
            inlinedVal2 = ratioRegions1.Matrix(inlinedVal14);
            f3 = lambda$(ratioRegions1, inlinedVal8, 0);
            scrut3 = inlinedVal6 > 0;
            if (scrut3 === true) {
              let inlinedVal15, tmp11, arr3, i3, n3, x3, inlinedVal16;
              inlinedVal15 = lambda(ratioRegions1, inlinedVal8, 0, 0);
              tmp11 = [];
              arr3 = tmp11;
              i3 = 0;
              n3 = inlinedVal6;
              x3 = inlinedVal15;
              inlinedLbl3: {
                loopLabel3: while (true) {
                  let scrut7, tmp12;
                  scrut7 = i3 == n3;
                  if (scrut7 === true) {
                    inlinedVal16 = arr3;
                    break inlinedLbl3
                  }
                  arr3[i3] = x3;
                  tmp12 = i3 + 1;
                  i3 = tmp12;
                  continue loopLabel3;
                }
              }
              init(ratioRegions1, inlinedVal6, f3, inlinedVal16, 1);
              inlinedVal3 = ratioRegions1.Matrix(inlinedVal16);
              f4 = lambda$(ratioRegions1, inlinedVal8, 0);
              scrut2 = inlinedVal6 > 0;
              if (scrut2 === true) {
                let inlinedVal17, tmp12, arr4, i4, n4, x4, inlinedVal18;
                inlinedVal17 = lambda(ratioRegions1, inlinedVal8, 0, 0);
                tmp12 = [];
                arr4 = tmp12;
                i4 = 0;
                n4 = inlinedVal6;
                x4 = inlinedVal17;
                inlinedLbl4: {
                  loopLabel4: while (true) {
                    let scrut7, tmp13;
                    scrut7 = i4 == n4;
                    if (scrut7 === true) {
                      inlinedVal18 = arr4;
                      break inlinedLbl4
                    }
                    arr4[i4] = x4;
                    tmp13 = i4 + 1;
                    i4 = tmp13;
                    continue loopLabel4;
                  }
                }
                init(ratioRegions1, inlinedVal6, f4, inlinedVal18, 1);
                inlinedVal4 = ratioRegions1.Matrix(inlinedVal18);
                f5 = lambda$(ratioRegions1, inlinedVal8, false);
                scrut1 = inlinedVal6 > 0;
                if (scrut1 === true) {
                  let inlinedVal19, tmp13, arr5, i5, n5, x5, inlinedVal20;
                  inlinedVal19 = lambda(ratioRegions1, inlinedVal8, false, 0);
                  tmp13 = [];
                  arr5 = tmp13;
                  i5 = 0;
                  n5 = inlinedVal6;
                  x5 = inlinedVal19;
                  inlinedLbl5: {
                    loopLabel5: while (true) {
                      let scrut7, tmp14;
                      scrut7 = i5 == n5;
                      if (scrut7 === true) {
                        inlinedVal20 = arr5;
                        break inlinedLbl5
                      }
                      arr5[i5] = x5;
                      tmp14 = i5 + 1;
                      i5 = tmp14;
                      continue loopLabel5;
                    }
                  }
                  init(ratioRegions1, inlinedVal6, f5, inlinedVal20, 1);
                  inlinedVal5 = ratioRegions1.Matrix(inlinedVal20);
                  tmp2 = inlinedVal6 * inlinedVal8;
                  m1 = tmp2 + 2;
                  tmp3 = 2 * inlinedVal6;
                  tmp4 = tmp3 * inlinedVal8;
                  m2 = tmp4 + 2;
                  tmp5 = 2 * inlinedVal6;
                  tmp6 = tmp5 * inlinedVal8;
                  tmp7 = tmp6 + 3;
                  init1 = ratioRegions1.Nil;
                  scrut = tmp7 > 0;
                  if (scrut === true) {
                    let tmp14, arr6, i6, n6, x6, inlinedVal21;
                    tmp14 = [];
                    arr6 = tmp14;
                    i6 = 0;
                    n6 = tmp7;
                    x6 = init1;
                    inlinedLbl6: {
                      loopLabel6: while (true) {
                        let scrut7, tmp15;
                        scrut7 = i6 == n6;
                        if (scrut7 === true) {
                          inlinedVal21 = arr6;
                          break inlinedLbl6
                        }
                        arr6[i6] = x6;
                        tmp15 = i6 + 1;
                        i6 = tmp15;
                        continue loopLabel6;
                      }
                    }
                    return doit_rao_ratio_region_loop$loop(ratioRegions1, c_right, c_down, w, inlinedVal6, inlinedVal8, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, m1, m2, inlinedVal21, lg_max_v, 0)
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
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_rao_ratio_region_loop_preflow_push_loop$loop1 = function doit_rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
doit_rao_ratio_region_loop_preflow_push$preflow_push1 = function doit_rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return doit_rao_ratio_region_loop_preflow_push_loop$loop1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
rao_ratio_region_loop_preflow_push_loop_loopK$loopK = function rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
rao_ratio_region_loop_preflow_push_loop$loop = function rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
rao_ratio_region_loop_preflow_push$preflow_push = function rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
rao_ratio_region_loop$loop = function rao_ratio_region_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_v, v_max) {
  loopLabel: while (true) {
    let v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal;
    inlinedVal = lg_v < 0;
    if (inlinedVal === true) {
      tmp = ratioRegions2.PInt(v_max);
      tmp1 = ratioRegions2.Cons(tmp, ratioRegions2.Nil);
      loop4(ratioRegions2, "V-MAX=~s~%", 0, tmp1);
      tmp2 = v_max + 1;
      rao_ratio_region_loop_preflow_push$preflow_push1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp2);
      return min_cut(ratioRegions2, height, width, h, m1)
    }
    {
      let p, inlinedVal1;
      tmp3 = loopPow(ratioRegions2, lg_v, 1);
      v = v_max + tmp3;
      tmp4 = ratioRegions2.PInt(lg_v);
      tmp5 = ratioRegions2.PInt(v_max);
      tmp6 = ratioRegions2.PInt(v);
      tmp7 = ratioRegions2.Cons(tmp6, ratioRegions2.Nil);
      tmp8 = ratioRegions2.Cons(tmp5, tmp7);
      tmp9 = ratioRegions2.Cons(tmp4, tmp8);
      loop4(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp9);
      rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v);
      tmp10 = lg_v - 1;
      p = lambda$3(ratioRegions2, width, h, m1);
      inlinedVal1 = loop2(height, p, 0);
      if (inlinedVal1 === true) {
        lg_v = tmp10;
        v_max = v;
        continue loopLabel
      }
      lg_v = tmp10;
      v_max = v_max;
      continue loopLabel;
    }
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 = function rao_ratio_region_loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
rao_ratio_region_loop_preflow_push_loop$loop1 = function rao_ratio_region_loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        rao_ratio_region_loop_preflow_push_loop_loopK$loopK1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
rao_ratio_region_loop_preflow_push$preflow_push1 = function rao_ratio_region_loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return rao_ratio_region_loop_preflow_push_loop$loop1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift = function loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop_preflow_push_loop_loopK_lambda$_lambda$lambda = function loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
loop_preflow_push_loop_loopK_lambda$$lambda$ = function loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
loop_preflow_push_loop_loopK$loopK = function loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_preflow_push_loop$loop = function loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
loop_preflow_push$preflow_push = function loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 = function loop_preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
loop_preflow_push_loop_loopK_lambda$$lambda$1 = function loop_preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return loop_preflow_push_loop_loopK_lambda$_lambda$lambda1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
loop_preflow_push_loop_loopK$loopK1 = function loop_preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = loop_preflow_push_loop_loopK_lambda$$lambda$1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_preflow_push_loop$loop1 = function loop_preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        loop_preflow_push_loop_loopK$loopK1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
loop_preflow_push$preflow_push1 = function loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return loop_preflow_push_loop$loop1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
preflow_push_loop_loopK_lambda$_lambda_lift$lift = function preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
preflow_push_loop_loopK_lambda$_lambda$lambda = function preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        preflow_push_loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
preflow_push_loop_loopK_lambda$$lambda$ = function preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return preflow_push_loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
preflow_push_loop_loopK$loopK = function preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = preflow_push_loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
preflow_push_loop$loop = function preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        preflow_push_loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
preflow_push_loop_loopK_lambda$_lambda_lift_min$min = function preflow_push_loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop = function preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
loop_loopK_lambda$_lambda_lift$lift = function loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop_loopK_lambda$_lambda$lambda = function loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        loop_loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
loop_loopK_lambda$$lambda$ = function loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return loop_loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
loop_loopK$loopK = function loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = loop_loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_loopK_lambda$_lambda_lift_min$min = function loop_loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
loop_loopK_lambda$_lambda_lift_min_loop$loop = function loop_loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
lift_min$min = function lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
lift_min_loop$loop = function lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
loopK_lambda$_lambda_lift$lift = function loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loopK_lambda$_lambda$lambda = function loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        loopK_lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
loopK_lambda$$lambda$ = function loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return loopK_lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
};
loopK_lambda$_lambda_lift_min$min = function loopK_lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
loopK_lambda$_lambda_lift_min_loop$loop = function loopK_lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
lambda_lift$lift = function lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda_lift_min$min = function lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
lambda_lift_min_loop$loop = function lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
lambda$_lambda_lift$lift = function lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        lambda$_lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
lambda$_lambda_lift_min$min = function lambda$_lambda_lift_min$min(l) {
  return l(undefined, undefined, undefined, undefined)
};
lambda$_lambda_lift_min_loop$loop = function lambda$_lambda_lift_min_loop$loop(ratioRegions2, l, min) {
  return l(undefined, undefined, undefined, undefined, undefined, ratioRegions2, min)
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons = function preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
loop_loopK_lambda$_lambda_lift_min$l_Cons = function loop_loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
loop_loopK_lambda$_lambda_lift_min_loop$l_Cons = function loop_loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
loop_loopK_lambda$_lambda_lift_min_loop$l_Nil = function loop_loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
lift_min$l_Cons = function lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
lift_min_loop$l_Cons = function lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
lift_min_loop$l_Cons$worker = function lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
lift_min_loop$l_Nil = function lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
loopK_lambda$_lambda_lift_min$l_Cons = function loopK_lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
loopK_lambda$_lambda_lift_min_loop$l_Cons = function loopK_lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
loopK_lambda$_lambda_lift_min_loop$l_Cons$worker = function loopK_lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
loopK_lambda$_lambda_lift_min_loop$l_Nil = function loopK_lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
lambda_lift_min$l_Cons = function lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
lambda_lift_min_loop$l_Cons = function lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
lambda_lift_min_loop$l_Cons$worker = function lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
lambda_lift_min_loop$l_Nil = function lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
lambda$_lambda_lift_min$l_Cons = function lambda$_lambda_lift_min$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l1, fv_x) => {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, ratioRegions1, Cons_head)
  }
};
lambda$_lambda_lift_min_loop$l_Cons = function lambda$_lambda_lift_min_loop$l_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min)
  }
};
lambda$_lambda_lift_min_loop$l_Cons$worker = function lambda$_lambda_lift_min_loop$l_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) {
  let scrut;
  scrut = fv_min < Cons_head;
  if (scrut === true) {
    return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, fv_min)
  }
  return Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_ratioRegions, Cons_head);
};
lambda$_lambda_lift_min_loop$l_Nil = function lambda$_lambda_lift_min_loop$l_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_l2, fv_x, fv_tmp, fv_ratioRegions, fv_min) => {
    return fv_min
  }
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 = function main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 = function doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 = function rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 = function loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest = function preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
loop_loopK_lambda$_lambda_lift_min$l_rest = function loop_loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
loop_loopK_lambda$_lambda_lift_min_loop$l_rest = function loop_loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
lift_min$l_rest = function lift_min$l_rest() {
  return null
};
lift_min_loop$l_rest = function lift_min_loop$l_rest() {
  return null
};
loopK_lambda$_lambda_lift_min$l_rest = function loopK_lambda$_lambda_lift_min$l_rest() {
  return null
};
loopK_lambda$_lambda_lift_min_loop$l_rest = function loopK_lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
lambda_lift_min$l_rest = function lambda_lift_min$l_rest() {
  return null
};
lambda_lift_min_loop$l_rest = function lambda_lift_min_loop$l_rest() {
  return null
};
lambda$_lambda_lift_min$l_rest = function lambda$_lambda_lift_min$l_rest() {
  return null
};
lambda$_lambda_lift_min_loop$l_rest = function lambda$_lambda_lift_min_loop$l_rest() {
  return null
};
lambda$31 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  return (x) => {
    return lambda28(ratioRegions2, height, width, c_right, y, x)
  }
});
lambda28 = (undefined, function (ratioRegions2, height, width, c_right, y, x) {
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
lambda$29 = (undefined, function (ratioRegions2, height, width, c_right) {
  return (y) => {
    return lambda29(ratioRegions2, height, width, c_right, y)
  }
});
lambda$30 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  return (x) => {
    return lambda30(ratioRegions2, height, width, c_down, y, x)
  }
});
lambda30 = (undefined, function (ratioRegions2, height, width, c_down, y, x) {
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
lambda$28 = (undefined, function (ratioRegions2, height, width, c_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$30(ratioRegions2, height, width, c_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda29 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$31(ratioRegions2, height, width, c_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda31 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  let lambda$here;
  lambda$here = lambda$30(ratioRegions2, height, width, c_down, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda$27 = (undefined, function (ratioRegions2, h, marked, m1, y) {
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
lambda$25 = (undefined, function (ratioRegions2, width, h, marked, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$27(ratioRegions2, h, marked, m1, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$26 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y) {
  return (x) => {
    return lambda3(ratioRegions2, w, f_t, h, marked, v, q, tail, y, x)
  }
});
lambda3 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y, x) {
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
lambda$24 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$26(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
isNull = function isNull(ratioRegions2, q) {
  let scrut;
  scrut = q.value;
  if (scrut instanceof ratioRegions2.QNil.class) {
    return true
  }
  return false;
};
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
dequeue = function dequeue(ratioRegions2, marked, q, tail) {
  let scrut, arg$QCons$0$, arg$QCons$1$;
  scrut = q.value;
  if (scrut instanceof ratioRegions2.QCons.class) {
    let ratioRegions3, scrut1, arg$Matrix$0$, element0$, element1$;
    arg$QCons$0$ = scrut.head;
    arg$QCons$1$ = scrut.rest;
    if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
      runtime.Tuple.get(arg$QCons$0$, 0);
      element1$ = runtime.Tuple.get(arg$QCons$0$, 1);
      if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$QCons$0$, 0);
        runtime.Tuple.get(arg$QCons$0$, 1);
        if (marked instanceof ratioRegions2.Matrix.class) {
          let inlinedVal;
          arg$Matrix$0$ = marked.a;
          inlinedVal = arg$Matrix$0$.at(element1$);
          inlinedVal[element0$] = false;
          q.value = arg$QCons$1$.value;
          ratioRegions3 = ratioRegions2;
          scrut1 = q.value;
          if (scrut1 instanceof ratioRegions3.QNil.class) {
            tail.value = ratioRegions2.QNil;
            return arg$QCons$0$
          }
          return arg$QCons$0$;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop5 = function loop(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q, tail) {
  loopLabel: while (true) {
    let p, value, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, ratioRegions3, scrut;
    ratioRegions3 = ratioRegions2;
    scrut = q.value;
    if (scrut instanceof ratioRegions3.QNil.class) {
      return runtime.Unit
    }
    {
      let receiver, arg$Matrix$0$, element1$, element0$;
      p = dequeue(ratioRegions2, marked, q, tail);
      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
        element0$ = runtime.Tuple.get(p, 0);
        runtime.Tuple.get(p, 1);
        if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
          runtime.Tuple.get(p, 0);
          element1$ = runtime.Tuple.get(p, 1);
          receiver = ratioRegions2;
          if (h instanceof receiver.Matrix.class) {
            let inlinedVal, inlinedVal1;
            arg$Matrix$0$ = h.a;
            inlinedVal = arg$Matrix$0$.at(element1$);
            inlinedVal1 = inlinedVal.at(element0$);
            value = inlinedVal1 + 1;
            tmp = element0$ > 0;
            if (tmp === true) {
              let tmp17, inlinedVal2;
              tmp2 = element0$ - 1;
              tmp17 = cf_right(ratioRegions2, c_right, f_right, element1$, tmp2);
              inlinedVal2 = tmp17 > 0;
              tmp1 = inlinedVal2;
            } else {
              tmp1 = false;
            }
            if (tmp1 === true) {
              tmp3 = element0$ - 1;
              enqueue(ratioRegions2, h, marked, q, tail, element1$, tmp3, value);
            }
            tmp4 = width - 1;
            tmp5 = element0$ < tmp4;
            if (tmp5 === true) {
              let tmp17, inlinedVal2;
              tmp7 = element0$ + 1;
              tmp17 = cf_left(ratioRegions2, c_right, f_right, element1$, tmp7);
              inlinedVal2 = tmp17 > 0;
              tmp6 = inlinedVal2;
            } else {
              tmp6 = false;
            }
            if (tmp6 === true) {
              tmp8 = element0$ + 1;
              enqueue(ratioRegions2, h, marked, q, tail, element1$, tmp8, value);
            }
            tmp9 = element1$ > 0;
            if (tmp9 === true) {
              let tmp17, inlinedVal2;
              tmp11 = element1$ - 1;
              tmp17 = cf_down(ratioRegions2, c_down, f_down, tmp11, element0$);
              inlinedVal2 = tmp17 > 0;
              tmp10 = inlinedVal2;
            } else {
              tmp10 = false;
            }
            if (tmp10 === true) {
              tmp12 = element1$ - 1;
              enqueue(ratioRegions2, h, marked, q, tail, tmp12, element0$, value);
            }
            tmp13 = height - 1;
            tmp14 = element1$ < tmp13;
            if (tmp14 === true) {
              let tmp17, inlinedVal2;
              tmp15 = element1$ + 1;
              tmp17 = cf_up(ratioRegions2, c_down, f_down, tmp15, element0$);
              inlinedVal2 = tmp17 > 0;
              if (inlinedVal2 === true) {
                tmp16 = element1$ + 1;
                enqueue(ratioRegions2, h, marked, q, tail, tmp16, element0$, value);
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
  }
};
lambda2 = (undefined, function (ratioRegions2, width, h, marked, m1, y) {
  let lambda$here;
  lambda$here = lambda$27(ratioRegions2, h, marked, m1, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda4 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail, y) {
  let lambda$here;
  lambda$here = lambda$26(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda$23 = (undefined, function (ratioRegions2, h, e, m1, y) {
  return (x) => {
    return lambda5(ratioRegions2, h, e, m1, y, x)
  }
});
lambda5 = (undefined, function (ratioRegions2, h, e, m1, y, x) {
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
    let p;
    p = lambda$23(ratioRegions2, h, e, m1, y);
    return loop2(width, p, 0)
  }
});
lambda$16 = (undefined, function (ratioRegions2, q) {
  return (k) => {
    return lambda7(ratioRegions2, q, k)
  }
});
lambda$22 = (undefined, function (ratioRegions2, marked, y) {
  return (x) => {
    return lambda8(ratioRegions2, marked, y, x)
  }
});
lambda8 = (undefined, function (ratioRegions2, marked, y, x) {
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
    lambda$here = lambda$22(ratioRegions2, marked, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$21 = (undefined, function (ratioRegions2, h, e, marked, q, y) {
  return (x) => {
    return lambda10(ratioRegions2, h, e, marked, q, y, x)
  }
});
lambda10 = (undefined, function (ratioRegions2, h, e, marked, q, y, x) {
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
    lambda$here = lambda$21(ratioRegions2, h, e, marked, q, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$20 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (p) => {
    return lambda12(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p)
  }
});
lambda12 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p) {
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
    p = lambda$20(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
    return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
  }
});
lambda$19 = (undefined, function (ratioRegions2, marked) {
  return (p) => {
    return lambda14(ratioRegions2, marked, p)
  }
});
lambda$18 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return lambda$_lambda$lambda(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
});
lambda14 = (undefined, function (ratioRegions2, marked, p) {
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
lambda15 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
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
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        lambda_lift$lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
});
lambda6 = (undefined, function (ratioRegions2, width, h, e, m1, y) {
  let p;
  p = lambda$23(ratioRegions2, h, e, m1, y);
  return loop2(width, p, 0)
});
lambda7 = (undefined, function (ratioRegions2, q, k) {
  let x;
  x = ratioRegions2.Nil;
  q[k] = x;
  return runtime.Unit
});
lambda9 = (undefined, function (ratioRegions2, width, marked, y) {
  let lambda$here;
  lambda$here = lambda$22(ratioRegions2, marked, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda11 = (undefined, function (ratioRegions2, width, h, e, marked, q, y) {
  let lambda$here;
  lambda$here = lambda$21(ratioRegions2, h, e, marked, q, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda13 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, ps) {
  let p;
  p = lambda$20(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
  return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
});
loopK = function loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = loopK_lambda$$lambda$(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$12 = (undefined, function (ratioRegions2, f_t, e, y) {
  return (x) => {
    return lambda16(ratioRegions2, f_t, e, y, x)
  }
});
lambda16 = (undefined, function (ratioRegions2, f_t, e, y, x) {
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
    return lambda18(ratioRegions2, f_right, y, x)
  }
});
lambda18 = (undefined, function (ratioRegions2, f_right, y, x) {
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
    return lambda19(ratioRegions2, width, f_right, y)
  }
});
lambda$10 = (undefined, function (ratioRegions2, f_down, y) {
  return (x) => {
    return lambda20(ratioRegions2, f_down, y, x)
  }
});
lambda20 = (undefined, function (ratioRegions2, f_down, y, x) {
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
    return lambda22(ratioRegions2, width, e, y)
  }
});
lambda$5 = (undefined, function (ratioRegions2, height, e) {
  return (x) => {
    return lambda23(ratioRegions2, height, e, x)
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
ef_t = function ef_t(ratioRegions2, w, f_t, v, y, x) {
  let tmp;
  tmp = cf_t(ratioRegions2, w, f_t, v, y, x);
  return tmp > 0
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
lift = function lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, arg$Matrix$0$, tmp16, inlinedVal, inlinedVal1, scrut4;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp2);
        tmp3 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(y);
        inlinedVal4 = inlinedVal3.at(tmp5);
        tmp6 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp9);
        inlinedVal4 = inlinedVal3.at(x);
        tmp10 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp17, inlinedVal2;
    tmp17 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp17 > 0;
    if (inlinedVal2 === true) {
      let arg$Matrix$0$1;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        let inlinedVal3, inlinedVal4;
        arg$Matrix$0$1 = h.a;
        inlinedVal3 = arg$Matrix$0$1.at(tmp12);
        inlinedVal4 = inlinedVal3.at(x);
        tmp13 = inlinedVal4;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp16 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal = tmp16 > 0;
  if (inlinedVal === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  scrut4 = tmp1 < tmp4;
  if (scrut4 === true) {
    let inlinedVal2, scrut5;
    scrut5 = tmp1 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp1 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp1 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp1;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  } else {
    let inlinedVal2, scrut5;
    scrut5 = tmp4 < tmp8;
    if (scrut5 === true) {
      let inlinedVal3, scrut6;
      scrut6 = tmp4 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp4 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp4;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    } else {
      let inlinedVal3, scrut6;
      scrut6 = tmp8 < tmp11;
      if (scrut6 === true) {
        let inlinedVal4, scrut7;
        scrut7 = tmp8 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp8;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      } else {
        let inlinedVal4, scrut7;
        scrut7 = tmp11 < tmp14;
        if (scrut7 === true) {
          inlinedVal4 = tmp11;
        } else {
          inlinedVal4 = tmp14;
        }
        inlinedVal3 = inlinedVal4;
      }
      inlinedVal2 = inlinedVal3;
    }
    inlinedVal1 = inlinedVal2;
  }
  tmp15 = 1 + inlinedVal1;
  if (h instanceof ratioRegions2.Matrix.class) {
    let inlinedVal2;
    arg$Matrix$0$ = h.a;
    inlinedVal2 = arg$Matrix$0$.at(y);
    inlinedVal2[x] = tmp15;
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
relabel = function relabel(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, marked, m1, v) {
  let q, tail, lambda$here, lambda$here1;
  q = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  lambda$here = lambda$25(ratioRegions2, width, h, marked, m1);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q, tail);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  return loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q, tail)
};
loop6 = function loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp45, tmp46, inlinedVal2;
    tmp45 = i / 6;
    inlinedVal2 = runtime.safeCall(globalThis.Math.floor(tmp45));
    tmp46 = 6 * inlinedVal2;
    inlinedVal = i - tmp46;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal3;
      switch (p) {
        case false:
          inlinedVal3 = true;
          break;
        case true:
          inlinedVal3 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal3;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal3, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal3 = loop2(height, p1, 0);
      if (inlinedVal3 === true) {
        tmp2 = ratioRegions2.PInt(pushes.value);
        scrut = pushes.value == 1;
        if (scrut === true) {
          tmp3 = "";
        } else {
          tmp3 = "es";
        }
        tmp4 = ratioRegions2.PString(tmp3);
        tmp5 = ratioRegions2.PInt(lifts.value);
        scrut1 = lifts.value == 1;
        if (scrut1 === true) {
          tmp6 = "";
        } else {
          tmp6 = "s";
        }
        tmp7 = ratioRegions2.PString(tmp6);
        tmp8 = ratioRegions2.PInt(relabels.value);
        scrut2 = relabels.value == 1;
        if (scrut2 === true) {
          tmp9 = "";
        } else {
          tmp9 = "s";
        }
        tmp10 = ratioRegions2.PString(tmp9);
        tmp11 = ratioRegions2.PInt(i);
        scrut3 = i == 1;
        if (scrut3 === true) {
          tmp12 = "";
        } else {
          tmp12 = "s";
        }
        tmp13 = ratioRegions2.PString(tmp12);
        tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
        tmp15 = ratioRegions2.Cons(tmp11, tmp14);
        tmp16 = ratioRegions2.Cons(tmp10, tmp15);
        tmp17 = ratioRegions2.Cons(tmp8, tmp16);
        tmp18 = ratioRegions2.Cons(tmp7, tmp17);
        tmp19 = ratioRegions2.Cons(tmp5, tmp18);
        tmp20 = ratioRegions2.Cons(tmp4, tmp19);
        tmp21 = ratioRegions2.Cons(tmp2, tmp20);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp21)
      }
      {
        let inlinedVal4;
        inlinedVal4 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal4, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let p1, inlinedVal3;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      inlinedVal3 = loop3(ratioRegions2, q, p1, 0);
      if (inlinedVal3 === true) {
        let inlinedVal4;
        inlinedVal4 = q.length;
        tmp22 = inlinedVal4 - 1;
        loop_loopK$loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp22);
        tmp23 = i + 1;
        i = tmp23;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp24 = relabels.value + 1;
        relabels.value = tmp24;
        tmp25 = ratioRegions2.PInt(pushes.value);
        scrut4 = pushes.value == 1;
        if (scrut4 === true) {
          tmp26 = "";
        } else {
          tmp26 = "es";
        }
        tmp27 = ratioRegions2.PString(tmp26);
        tmp28 = ratioRegions2.PInt(lifts.value);
        scrut5 = lifts.value == 1;
        if (scrut5 === true) {
          tmp29 = "";
        } else {
          tmp29 = "s";
        }
        tmp30 = ratioRegions2.PString(tmp29);
        tmp31 = ratioRegions2.PInt(relabels.value);
        scrut6 = relabels.value == 1;
        if (scrut6 === true) {
          tmp32 = "";
        } else {
          tmp32 = "s";
        }
        tmp33 = ratioRegions2.PString(tmp32);
        tmp34 = ratioRegions2.PInt(i);
        scrut7 = i == 1;
        if (scrut7 === true) {
          tmp35 = "";
        } else {
          tmp35 = "s";
        }
        tmp36 = ratioRegions2.PString(tmp35);
        tmp37 = ratioRegions2.Cons(tmp36, ratioRegions2.Nil);
        tmp38 = ratioRegions2.Cons(tmp34, tmp37);
        tmp39 = ratioRegions2.Cons(tmp33, tmp38);
        tmp40 = ratioRegions2.Cons(tmp31, tmp39);
        tmp41 = ratioRegions2.Cons(tmp30, tmp40);
        tmp42 = ratioRegions2.Cons(tmp28, tmp41);
        tmp43 = ratioRegions2.Cons(tmp27, tmp42);
        tmp44 = ratioRegions2.Cons(tmp25, tmp43);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp44);
      }
    }
  }
};
lambda17 = (undefined, function (ratioRegions2, width, f_t, e, y) {
  let lambda$here;
  lambda$here = lambda$12(ratioRegions2, f_t, e, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda19 = (undefined, function (ratioRegions2, width, f_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$11(ratioRegions2, f_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda21 = (undefined, function (ratioRegions2, width, f_down, y) {
  let lambda$here;
  lambda$here = lambda$10(ratioRegions2, f_down, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda22 = (undefined, function (ratioRegions2, width, e, y) {
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
lambda23 = (undefined, function (ratioRegions2, height, e, x) {
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
    return lambda24(ratioRegions2, h, m1, y, x)
  }
});
lambda24 = (undefined, function (ratioRegions2, h, m1, y, x) {
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
    let p;
    p = lambda$4(ratioRegions2, h, m1, y);
    return loop2(width, p, 0)
  }
});
lambda25 = (undefined, function (ratioRegions2, width, h, m1, y) {
  let p;
  p = lambda$4(ratioRegions2, h, m1, y);
  return loop2(width, p, 0)
});
lambda$2 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda26(ratioRegions2, h, m1, y, x)
  }
});
lambda26 = (undefined, function (ratioRegions2, h, m1, y, x) {
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
    return lambda27(ratioRegions2, width, h, m1, y)
  }
});
lambda27 = (undefined, function (ratioRegions2, width, h, m1, y) {
  let f, scrut;
  f = lambda$2(ratioRegions2, h, m1, y);
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, tmp, arr, i, n, x, inlinedVal1;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    tmp = [];
    arr = tmp;
    i = 0;
    n = width;
    x = inlinedVal;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp1;
        scrut1 = i == n;
        if (scrut1 === true) {
          inlinedVal1 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp1 = i + 1;
        i = tmp1;
        continue loopLabel;
      }
    }
    init(ratioRegions2, width, f, inlinedVal1, 1);
    return inlinedVal1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
ef_right = function ef_right(ratioRegions2, c_right, f_right, y, x) {
  let tmp;
  tmp = cf_right(ratioRegions2, c_right, f_right, y, x);
  return tmp > 0
};
ef_left = function ef_left(ratioRegions2, c_right, f_right, y, x) {
  let tmp;
  tmp = cf_left(ratioRegions2, c_right, f_right, y, x);
  return tmp > 0
};
ef_down = function ef_down(ratioRegions2, c_down, f_down, y, x) {
  let tmp;
  tmp = cf_down(ratioRegions2, c_down, f_down, y, x);
  return tmp > 0
};
ef_up = function ef_up(ratioRegions2, c_down, f_down, y, x) {
  let tmp;
  tmp = cf_up(ratioRegions2, c_down, f_down, y, x);
  return tmp > 0
};
preflow_push = function preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  return preflow_push_loop$loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, 0, false)
};
min_cut_includes_every_edge_to_t = function min_cut_includes_every_edge_to_t(ratioRegions2, height, width, h, m1) {
  let p;
  p = lambda$3(ratioRegions2, width, h, m1);
  return loop2(height, p, 0)
};
min_cut = function min_cut(ratioRegions2, height, width, h, m1) {
  let f, scrut;
  f = lambda$1(ratioRegions2, width, h, m1);
  scrut = height > 0;
  if (scrut === true) {
    let inlinedVal, tmp, arr, i, n, x, inlinedVal1;
    inlinedVal = lambda27(ratioRegions2, width, h, m1, 0);
    tmp = [];
    arr = tmp;
    i = 0;
    n = height;
    x = inlinedVal;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp1;
        scrut1 = i == n;
        if (scrut1 === true) {
          inlinedVal1 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp1 = i + 1;
        i = tmp1;
        continue loopLabel;
      }
    }
    init(ratioRegions2, height, f, inlinedVal1, 1);
    return inlinedVal1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop7 = function loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_v, v_max) {
  loopLabel: while (true) {
    let v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal;
    inlinedVal = lg_v < 0;
    if (inlinedVal === true) {
      tmp = ratioRegions2.PInt(v_max);
      tmp1 = ratioRegions2.Cons(tmp, ratioRegions2.Nil);
      loop4(ratioRegions2, "V-MAX=~s~%", 0, tmp1);
      tmp2 = v_max + 1;
      loop_preflow_push$preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp2);
      return min_cut(ratioRegions2, height, width, h, m1)
    }
    {
      let p, inlinedVal1;
      tmp3 = loopPow(ratioRegions2, lg_v, 1);
      v = v_max + tmp3;
      tmp4 = ratioRegions2.PInt(lg_v);
      tmp5 = ratioRegions2.PInt(v_max);
      tmp6 = ratioRegions2.PInt(v);
      tmp7 = ratioRegions2.Cons(tmp6, ratioRegions2.Nil);
      tmp8 = ratioRegions2.Cons(tmp5, tmp7);
      tmp9 = ratioRegions2.Cons(tmp4, tmp8);
      loop4(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp9);
      loop_preflow_push$preflow_push1(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v);
      tmp10 = lg_v - 1;
      p = lambda$3(ratioRegions2, width, h, m1);
      inlinedVal1 = loop2(height, p, 0);
      if (inlinedVal1 === true) {
        lg_v = tmp10;
        v_max = v;
        continue loopLabel
      }
      lg_v = tmp10;
      v_max = v_max;
      continue loopLabel;
    }
  }
};
loop4 = function loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut2 = inlinedVal2 == "a";
                if (scrut2 === true) {
                  if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                    tmp5 = i + 2;
                    i = tmp5;
                    values = arg$Cons$1$;
                    continue loopLabel
                  }
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp6 = i + 2;
                i = tmp6;
                continue loopLabel
              }
              tmp7 = i + 1;
              i = tmp7;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                  tmp10 = i + 2;
                  i = tmp10;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
              }
            }
            scrut3 = inlinedVal2 == "%";
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
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
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
loop3 = function loop(ratioRegions2, v, p, i) {
  loopLabel: while (true) {
    let tmp, tmp1, tmp2, inlinedVal;
    inlinedVal = v.length;
    tmp = i < inlinedVal;
    if (tmp === true) {
      let inlinedVal1;
      inlinedVal1 = v.at(i);
      tmp1 = runtime.safeCall(p(inlinedVal1));
      if (tmp1 === false) {
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel
      }
      return true;
    }
    return false;
  }
};
loop2 = function loop(n, p, i) {
  loopLabel: while (true) {
    let tmp, tmp1, tmp2;
    tmp = i >= n;
    if (tmp === false) {
      tmp1 = runtime.safeCall(p(i));
      if (tmp1 === true) {
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel
      }
      return false;
    }
    return true;
  }
};
loop1 = function loop(ratioRegions2, l, min) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$;
    if (l instanceof ratioRegions2.Nil.class) {
      return min
    } else if (l instanceof ratioRegions2.Cons.class) {
      let inlinedVal, scrut;
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      scrut = min < arg$Cons$0$;
      if (scrut === true) {
        inlinedVal = min;
      } else {
        inlinedVal = arg$Cons$0$;
      }
      l = arg$Cons$1$;
      min = inlinedVal;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
init = function init(ratioRegions2, n, f, arr, i) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1;
    scrut = i < n;
    if (scrut === true) {
      tmp = runtime.safeCall(f(i));
      arr[i] = tmp;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel
    }
    return runtime.Unit;
  }
};
loop = function loop(max, f, i) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = i >= max;
    if (scrut === true) {
      return runtime.Unit
    }
    runtime.safeCall(f(i));
    tmp = i + 1;
    i = tmp;
    continue loopLabel;
  }
};
(class ratioRegions {
  static {
    ratioRegions1 = this
  }
  static get [listExists$tailrec$accessorSymbol]() { return ratioRegions.#listExists$tailrec; }
  static get [listApp$tailrec$accessorSymbol]() { return ratioRegions.#listApp$tailrec; }
  static get [doo$accessorSymbol]() { return ratioRegions.#doo; }
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
  static #array_alloc(n, init1) {
    let tmp;
    tmp = [];
    return ratioRegions.#fillArray(tmp, 0, n, init1)
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
  static #make_vector(n, init1) {
    let scrut;
    scrut = n > 0;
    if (scrut === true) {
      return ratioRegions.#array_alloc(n, init1)
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
      tmp = runtime.safeCall(f(0));
      arr = ratioRegions.#array_alloc(n, tmp);
      init(ratioRegions, n, f, arr, 1);
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
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      return loop1(ratioRegions, arg$Cons$1$, arg$Cons$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #every_n(n, p) {
    return loop2(n, p, 0)
  }
  static #some(l, p) {
    return ratioRegions.#listExists(p)(l)
  }
  static #some_vector(v, p) {
    return loop3(ratioRegions, v, p, 0)
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
    return loop4(ratioRegions, control_string, 0, values)
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
    let height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
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
    return rao_ratio_region_loop$loop(ratioRegions, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_max_v, 0)
  }
  static #doit(n) {
    let c_right, c_down, tmp, tmp1, tmp2, tmp3, lambda$here, lambda$here1;
    tmp = n - 1;
    c_right = ratioRegions.#make_matrix(n, tmp, -1);
    tmp1 = n - 1;
    c_down = ratioRegions.#make_matrix(tmp1, n, -1);
    lambda$here = lambda$29(ratioRegions, n, n, c_right);
    ratioRegions.#doo(n, lambda$here);
    tmp2 = n - 1;
    lambda$here1 = lambda$28(ratioRegions, n, n, c_down);
    ratioRegions.#doo(tmp2, lambda$here1);
    tmp3 = ratioRegions.#make_matrix(n, n, 1);
    return doit_rao_ratio_region$rao_ratio_region(c_right, c_down, tmp3, 15)
  }
  static main() {
    return main_doit$doit(5)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "ratioRegions"];
});
export { loop as _$_modulePrivate_$_loop };
export { init as _$_modulePrivate_$_init };
export { loop1 as _$_modulePrivate_$_loop1 };
export { loop2 as _$_modulePrivate_$_loop2 };
export { loop3 as _$_modulePrivate_$_loop3 };
export { loop4 as _$_modulePrivate_$_loop4 };
export { enqueue as _$_modulePrivate_$_enqueue };
export { loop5 as _$_modulePrivate_$_loop5 };
export { isNull as _$_modulePrivate_$_isNull };
export { dequeue as _$_modulePrivate_$_dequeue };
export { loopK as _$_modulePrivate_$_loopK };
export { push_t as _$_modulePrivate_$_push_t };
export { loop6 as _$_modulePrivate_$_loop6 };
export { ef_t as _$_modulePrivate_$_ef_t };
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
export { lift as _$_modulePrivate_$_lift };
export { loopPow as _$_modulePrivate_$_loopPow };
export { loop7 as _$_modulePrivate_$_loop7 };
export { min_cut as _$_modulePrivate_$_min_cut };
export { ef_up as _$_modulePrivate_$_ef_up };
export { ef_right as _$_modulePrivate_$_ef_right };
export { cf_right as _$_modulePrivate_$_cf_right };
export { cf_down as _$_modulePrivate_$_cf_down };
export { ef_left as _$_modulePrivate_$_ef_left };
export { min_cut_includes_every_edge_to_t as _$_modulePrivate_$_min_cut_includes_every_edge_to_t };
export { cf_up as _$_modulePrivate_$_cf_up };
export { preflow_push as _$_modulePrivate_$_preflow_push };
export { cf_left as _$_modulePrivate_$_cf_left };
export { ef_down as _$_modulePrivate_$_ef_down };
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
export { lambda20 as _$_modulePrivate_$_lambda20 };
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda24 as _$_modulePrivate_$_lambda24 };
export { lambda25 as _$_modulePrivate_$_lambda25 };
export { lambda26 as _$_modulePrivate_$_lambda26 };
export { lambda27 as _$_modulePrivate_$_lambda27 };
export { lambda28 as _$_modulePrivate_$_lambda28 };
export { lambda29 as _$_modulePrivate_$_lambda29 };
export { lambda30 as _$_modulePrivate_$_lambda30 };
export { lambda31 as _$_modulePrivate_$_lambda31 };
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
export { lambda$31 as _$_modulePrivate_$_lambda$31 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK };
export { main_doit_rao_ratio_region_loop_preflow_push_loop$loop as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop$loop };
export { main_doit_rao_ratio_region_loop_preflow_push$preflow_push as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push$preflow_push };
export { main_doit_rao_ratio_region_loop$loop as _$_modulePrivate_$_main_doit_rao_ratio_region_loop$loop };
export { main_doit_rao_ratio_region$rao_ratio_region as _$_modulePrivate_$_main_doit_rao_ratio_region$rao_ratio_region };
export { main_doit$doit as _$_modulePrivate_$_main_doit$doit };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop$loop1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop$loop1 };
export { main_doit_rao_ratio_region_loop_preflow_push$preflow_push1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push$preflow_push1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK };
export { doit_rao_ratio_region_loop_preflow_push_loop$loop as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop$loop };
export { doit_rao_ratio_region_loop_preflow_push$preflow_push as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push$preflow_push };
export { doit_rao_ratio_region_loop$loop as _$_modulePrivate_$_doit_rao_ratio_region_loop$loop };
export { doit_rao_ratio_region$rao_ratio_region as _$_modulePrivate_$_doit_rao_ratio_region$rao_ratio_region };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 };
export { doit_rao_ratio_region_loop_preflow_push_loop$loop1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop$loop1 };
export { doit_rao_ratio_region_loop_preflow_push$preflow_push1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push$preflow_push1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { rao_ratio_region_loop_preflow_push_loop_loopK$loopK as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK$loopK };
export { rao_ratio_region_loop_preflow_push_loop$loop as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop$loop };
export { rao_ratio_region_loop_preflow_push$preflow_push as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push$preflow_push };
export { rao_ratio_region_loop$loop as _$_modulePrivate_$_rao_ratio_region_loop$loop };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK$loopK1 };
export { rao_ratio_region_loop_preflow_push_loop$loop1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop$loop1 };
export { rao_ratio_region_loop_preflow_push$preflow_push1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push$preflow_push1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift };
export { loop_preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { loop_preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$$lambda$ };
export { loop_preflow_push_loop_loopK$loopK as _$_modulePrivate_$_loop_preflow_push_loop_loopK$loopK };
export { loop_preflow_push_loop$loop as _$_modulePrivate_$_loop_preflow_push_loop$loop };
export { loop_preflow_push$preflow_push as _$_modulePrivate_$_loop_preflow_push$preflow_push };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift$lift1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda$lambda1 };
export { loop_preflow_push_loop_loopK_lambda$$lambda$1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$$lambda$1 };
export { loop_preflow_push_loop_loopK$loopK1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK$loopK1 };
export { loop_preflow_push_loop$loop1 as _$_modulePrivate_$_loop_preflow_push_loop$loop1 };
export { loop_preflow_push$preflow_push1 as _$_modulePrivate_$_loop_preflow_push$preflow_push1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$min1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop1 };
export { preflow_push_loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift$lift };
export { preflow_push_loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda$lambda };
export { preflow_push_loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$$lambda$ };
export { preflow_push_loop_loopK$loopK as _$_modulePrivate_$_preflow_push_loop_loopK$loopK };
export { preflow_push_loop$loop as _$_modulePrivate_$_preflow_push_loop$loop };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min$min };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { loop_loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift$lift };
export { loop_loopK_lambda$_lambda$lambda as _$_modulePrivate_$_loop_loopK_lambda$_lambda$lambda };
export { loop_loopK_lambda$$lambda$ as _$_modulePrivate_$_loop_loopK_lambda$$lambda$ };
export { loop_loopK$loopK as _$_modulePrivate_$_loop_loopK$loopK };
export { loop_loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min$min };
export { loop_loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min_loop$loop };
export { lift_min$min as _$_modulePrivate_$_lift_min$min };
export { lift_min_loop$loop as _$_modulePrivate_$_lift_min_loop$loop };
export { loopK_lambda$_lambda_lift$lift as _$_modulePrivate_$_loopK_lambda$_lambda_lift$lift };
export { loopK_lambda$_lambda$lambda as _$_modulePrivate_$_loopK_lambda$_lambda$lambda };
export { loopK_lambda$$lambda$ as _$_modulePrivate_$_loopK_lambda$$lambda$ };
export { loopK_lambda$_lambda_lift_min$min as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min$min };
export { loopK_lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min_loop$loop };
export { lambda_lift$lift as _$_modulePrivate_$_lambda_lift$lift };
export { lambda_lift_min$min as _$_modulePrivate_$_lambda_lift_min$min };
export { lambda_lift_min_loop$loop as _$_modulePrivate_$_lambda_lift_min_loop$loop };
export { lambda$_lambda_lift$lift as _$_modulePrivate_$_lambda$_lambda_lift$lift };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { lambda$_lambda_lift_min$min as _$_modulePrivate_$_lambda$_lambda_lift_min$min };
export { lambda$_lambda_lift_min_loop$loop as _$_modulePrivate_$_lambda$_lambda_lift_min_loop$loop };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest1 };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil1 };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { loop_loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min$l_Cons };
export { loop_loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min$l_rest };
export { loop_loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { loop_loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { loop_loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { lift_min$l_Cons as _$_modulePrivate_$_lift_min$l_Cons };
export { lift_min$l_rest as _$_modulePrivate_$_lift_min$l_rest };
export { lift_min_loop$l_Cons as _$_modulePrivate_$_lift_min_loop$l_Cons };
export { lift_min_loop$l_rest as _$_modulePrivate_$_lift_min_loop$l_rest };
export { lift_min_loop$l_Nil as _$_modulePrivate_$_lift_min_loop$l_Nil };
export { loopK_lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min$l_Cons };
export { loopK_lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min$l_rest };
export { loopK_lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min_loop$l_Cons };
export { loopK_lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min_loop$l_rest };
export { loopK_lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min_loop$l_Nil };
export { lambda_lift_min$l_Cons as _$_modulePrivate_$_lambda_lift_min$l_Cons };
export { lambda_lift_min$l_rest as _$_modulePrivate_$_lambda_lift_min$l_rest };
export { lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_lambda_lift_min_loop$l_Cons };
export { lambda_lift_min_loop$l_rest as _$_modulePrivate_$_lambda_lift_min_loop$l_rest };
export { lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_lambda_lift_min_loop$l_Nil };
export { lambda$_lambda_lift_min$l_Cons as _$_modulePrivate_$_lambda$_lambda_lift_min$l_Cons };
export { lambda$_lambda_lift_min$l_rest as _$_modulePrivate_$_lambda$_lambda_lift_min$l_rest };
export { lambda$_lambda_lift_min_loop$l_Cons as _$_modulePrivate_$_lambda$_lambda_lift_min_loop$l_Cons };
export { lambda$_lambda_lift_min_loop$l_rest as _$_modulePrivate_$_lambda$_lambda_lift_min_loop$l_rest };
export { lambda$_lambda_lift_min_loop$l_Nil as _$_modulePrivate_$_lambda$_lambda_lift_min_loop$l_Nil };
export { lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_lambda_lift_min_loop$l_Cons$worker };
export { loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { lift_min_loop$l_Cons$worker as _$_modulePrivate_$_lift_min_loop$l_Cons$worker };
export { loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 as _$_modulePrivate_$_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 as _$_modulePrivate_$_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 as _$_modulePrivate_$_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker };
export { main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_preflow_push_loop_loopK_lambda$_lambda_lift_min_loop$l_Cons$worker1 };
export default ratioRegions1;
