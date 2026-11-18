const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const vecadd$accessorSymbol = globalThis.Symbol("vecadd");
const vecsub$accessorSymbol = globalThis.Symbol("vecsub");
const vecmult$accessorSymbol = globalThis.Symbol("vecmult");
const vecscale$accessorSymbol = globalThis.Symbol("vecscale");
const vecdot$accessorSymbol = globalThis.Symbol("vecdot");
const is_zerovector$accessorSymbol = globalThis.Symbol("is_zerovector");
let f, sphere1, lambda, lambda$, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect1, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_map$map, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda$lambda, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$$lambda$, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$vecadd, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_lscomp$lscomp, main_testSphere_nofib_run_ray_enumFromTo$enumFromTo, main_testSphere_nofib_run_snd$snd, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup31, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Cons, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Nil, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_head$l_Cons, main_testSphere_nofib_run_ray_lscomp1$ls1_Nil, main_testSphere_nofib_run_map$xs_Cons, main_testSphere_nofib_run_snd$x_tup2, main_testSphere_nofib_run_hash_foldr$xs_Cons, main_testSphere_nofib_run_map$xs_Cons$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker1, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker1, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractray$matchIdent_17_tup3$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker1, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2$worker, main_testSphere_nofib_run_ray_enumFromTo$enumFromTo$worker, main_testSphere_nofib_run_ray_lscomp1_enumFromTo$enumFromTo$worker, main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker;
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9, param10) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let trintensity, scrut, tmp, tmp1, tmp2, tmp3, lambda$here, tmp4, tmp5, ys, inlinedVal, inlinedVal1, tmp6, ys1, inlinedVal2, inlinedVal3, tmp7, inlinedVal4, element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp8, tmp9, tmp10, arg$Sphere$0$, arg$Sphere$1$, tmp11, tmp12, tmp13, ys2, inlinedVal5, inlinedVal6, arg$Sphere$2$, element2$2, element1$2, element0$2, element2$3, element1$3, element0$3, tmp14, tmp15, tmp16;
          if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
            element0$3 = runtime.Tuple.get(param3, 0);
            element1$3 = runtime.Tuple.get(param3, 1);
            element2$3 = runtime.Tuple.get(param3, 2);
            tmp14 = param4 * element0$3;
            tmp15 = param4 * element1$3;
            tmp16 = param4 * element2$3;
            if (runtime.Tuple.isArrayLike(param2) && param2.length === 3) {
              let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal7;
              element0$2 = runtime.Tuple.get(param2, 0);
              element1$2 = runtime.Tuple.get(param2, 1);
              element2$2 = runtime.Tuple.get(param2, 2);
              fv_tmp = element0$2 + tmp14;
              fv_tmp1 = element1$2 + tmp15;
              fv_tmp2 = element2$2 + tmp16;
              inlinedVal7 = globalThis.Object.freeze([
                fv_tmp,
                fv_tmp1,
                fv_tmp2
              ]);
              if (param1 instanceof sphere1.Sphere.class) {
                let fv_element0$, fv_element1$, fv_element2$, fv_tmp3, fv_tmp4, fv_tmp5;
                arg$Sphere$2$ = param1.surface;
                tmp12 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_lscomp$lscomp(sphere1, arg$Sphere$2$);
                tmp13 = globalThis.Object.freeze([
                  0.0,
                  0.0,
                  0.0
                ]);
                ys2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_head$l_Cons(tmp13);
                inlinedVal5 = tmp12(ys2);
                inlinedVal6 = inlinedVal5();
                if (runtime.Tuple.isArrayLike(inlinedVal6) && inlinedVal6.length === 3) {
                  fv_element0$ = runtime.Tuple.get(inlinedVal6, 0);
                  fv_element1$ = runtime.Tuple.get(inlinedVal6, 1);
                  fv_element2$ = runtime.Tuple.get(inlinedVal6, 2);
                  fv_tmp3 = 1.0 * fv_element0$;
                  fv_tmp4 = 1.0 * fv_element1$;
                  fv_tmp5 = 1.0 * fv_element2$;
                  if (param1 instanceof sphere1.Sphere.class) {
                    let element2$4, element1$4, element0$4, element2$5, element1$5, element0$5, tmp17, tmp18, tmp19;
                    arg$Sphere$0$ = param1.pos;
                    arg$Sphere$1$ = param1.radius;
                    if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 3) {
                      element0$4 = runtime.Tuple.get(inlinedVal7, 0);
                      element1$4 = runtime.Tuple.get(inlinedVal7, 1);
                      element2$4 = runtime.Tuple.get(inlinedVal7, 2);
                      if (runtime.Tuple.isArrayLike(arg$Sphere$0$) && arg$Sphere$0$.length === 3) {
                        let fv_tmp6, fv_tmp7, fv_tmp8, inlinedVal8;
                        element0$5 = runtime.Tuple.get(arg$Sphere$0$, 0);
                        element1$5 = runtime.Tuple.get(arg$Sphere$0$, 1);
                        element2$5 = runtime.Tuple.get(arg$Sphere$0$, 2);
                        tmp17 = element0$4 - element0$5;
                        tmp18 = element1$4 - element1$5;
                        tmp19 = element2$4 - element2$5;
                        tmp11 = 1 / arg$Sphere$1$;
                        fv_tmp6 = tmp11 * tmp17;
                        fv_tmp7 = tmp11 * tmp18;
                        fv_tmp8 = tmp11 * tmp19;
                        inlinedVal8 = globalThis.Object.freeze([
                          fv_tmp6,
                          fv_tmp7,
                          fv_tmp8
                        ]);
                        tmp = sphere1[vecdot$accessorSymbol](param3, inlinedVal8);
                        tmp1 = 2.0 * tmp;
                        tmp2 = - tmp1;
                        if (runtime.Tuple.isArrayLike(inlinedVal8) && inlinedVal8.length === 3) {
                          element0$1 = runtime.Tuple.get(inlinedVal8, 0);
                          element1$1 = runtime.Tuple.get(inlinedVal8, 1);
                          element2$1 = runtime.Tuple.get(inlinedVal8, 2);
                          tmp8 = tmp2 * element0$1;
                          tmp9 = tmp2 * element1$1;
                          tmp10 = tmp2 * element2$1;
                          if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
                            let fv_tmp9, fv_tmp10, fv_tmp11, inlinedVal9, fv_element0$1, fv_element1$1, fv_element2$1, fv_tmp12, fv_tmp13, fv_tmp14, inlinedVal10;
                            element0$ = runtime.Tuple.get(param3, 0);
                            element1$ = runtime.Tuple.get(param3, 1);
                            element2$ = runtime.Tuple.get(param3, 2);
                            fv_tmp9 = element0$ + tmp8;
                            fv_tmp10 = element1$ + tmp9;
                            fv_tmp11 = element2$ + tmp10;
                            inlinedVal9 = globalThis.Object.freeze([
                              fv_tmp9,
                              fv_tmp10,
                              fv_tmp11
                            ]);
                            lambda$here = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$$lambda$(inlinedVal7, arg$Sphere$2$, inlinedVal8, inlinedVal9);
                            tmp3 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_map$map(lambda$here, param0);
                            tmp7 = globalThis.Object.freeze([
                              0.0,
                              0.0,
                              0.0
                            ]);
                            inlinedVal4 = tmp3(main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$vecadd, tmp7);
                            tmp6 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_lscomp$lscomp(sphere1, arg$Sphere$2$);
                            ys1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_head$l_Cons(0.0);
                            inlinedVal2 = tmp6(ys1);
                            inlinedVal3 = inlinedVal2();
                            if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
                              fv_element0$1 = runtime.Tuple.get(inlinedVal4, 0);
                              fv_element1$1 = runtime.Tuple.get(inlinedVal4, 1);
                              fv_element2$1 = runtime.Tuple.get(inlinedVal4, 2);
                              fv_tmp12 = fv_tmp3 + fv_element0$1;
                              fv_tmp13 = fv_tmp4 + fv_element1$1;
                              fv_tmp14 = fv_tmp5 + fv_element2$1;
                              inlinedVal10 = globalThis.Object.freeze([
                                fv_tmp12,
                                fv_tmp13,
                                fv_tmp14
                              ]);
                              tmp4 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_lscomp$lscomp(sphere1, arg$Sphere$2$);
                              tmp5 = globalThis.Object.freeze([
                                1.0,
                                1.0,
                                1.0
                              ]);
                              ys = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_head$l_Cons(tmp5);
                              inlinedVal = tmp4(ys);
                              inlinedVal1 = inlinedVal();
                              trintensity = sphere1[vecscale$accessorSymbol](inlinedVal1, inlinedVal3);
                              scrut = inlinedVal3 < sphere1.epsilon;
                              if (scrut === true) {
                                let param5_tmp, param0_tmp;
                                param5_tmp = param5;
                                param0_tmp = param0;
                                param0 = false;
                                param1 = inlinedVal10;
                                param2 = arg$Sphere$2$;
                                param3 = undefined;
                                param4 = undefined;
                                param5 = trintensity;
                                param6 = undefined;
                                param7 = inlinedVal7;
                                param8 = inlinedVal9;
                                param9 = param0_tmp;
                                param10 = param5_tmp;
                                id = 1;
                                continue loopLabel
                              }
                              {
                                let inlinedVal11, newcontrib, inlinedVal12, dotp, scrut1, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, ys3, inlinedVal13, inlinedVal14;
                                tmp25 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_lscomp$lscomp(sphere1, arg$Sphere$2$);
                                ys3 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_head$l_Cons(1.0);
                                inlinedVal13 = tmp25(ys3);
                                inlinedVal14 = inlinedVal13();
                                newcontrib = sphere1[vecmult$accessorSymbol](trintensity, param5);
                                tmp20 = sphere1[vecdot$accessorSymbol](param3, inlinedVal8);
                                dotp = - tmp20;
                                scrut1 = dotp < 0.0;
                                if (scrut1 === true) {
                                  let inlinedVal15;
                                  tmp21 = - 1.0;
                                  tmp22 = sphere1[vecscale$accessorSymbol](inlinedVal8, tmp21);
                                  tmp23 = - dotp;
                                  tmp24 = 1.0 / inlinedVal14;
                                  inlinedVal15 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractray$matchIdent_17_tup3$worker(tmp22, tmp23, tmp24, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, param3);
                                  inlinedVal12 = inlinedVal15;
                                } else {
                                  let inlinedVal15;
                                  inlinedVal15 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractray$matchIdent_17_tup3$worker(inlinedVal8, dotp, inlinedVal14, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, param3);
                                  inlinedVal12 = inlinedVal15;
                                }
                                inlinedVal11 = inlinedVal12(inlinedVal7, undefined, param0, newcontrib, undefined, inlinedVal10, trintensity);
                                return inlinedVal11(arg$Sphere$2$, undefined, undefined, trintensity, undefined, inlinedVal7, inlinedVal9, param0, param5);
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
      case 1:
        {
          let tmp, ys, inlinedVal, inlinedVal1, tmp1, tmp2, ys1, inlinedVal2, inlinedVal3;
          tmp1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_lscomp$lscomp(sphere1, param2);
          tmp2 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          ys1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_head$l_Cons(tmp2);
          inlinedVal2 = tmp1(ys1);
          inlinedVal3 = inlinedVal2();
          tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_lscomp$lscomp(sphere1, param2);
          ys = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_head$l_Cons(0.0);
          inlinedVal = tmp(ys);
          inlinedVal1 = inlinedVal();
          param3 = sphere1[vecscale$accessorSymbol](inlinedVal3, inlinedVal1);
          if (param0 === true) {
            param4 = sphere1[vecadd$accessorSymbol](param5, param3);
          } else {
            param4 = param3;
          }
          param6 = sphere1[is_zerovector$accessorSymbol](param4);
          if (param6 === true) {
            return param1
          }
          {
            let newcontrib, a, spheres, element2$, element1$, element0$, tmp3, tmp4, tmp5, element2$1, element1$1, element0$1, scrut, element1$2, element0$2;
            newcontrib = sphere1[vecmult$accessorSymbol](param4, param10);
            a = sphere1.epsilon;
            if (runtime.Tuple.isArrayLike(param8) && param8.length === 3) {
              element0$ = runtime.Tuple.get(param8, 0);
              element1$ = runtime.Tuple.get(param8, 1);
              element2$ = runtime.Tuple.get(param8, 2);
              tmp3 = a * element0$;
              tmp4 = a * element1$;
              tmp5 = a * element2$;
              if (runtime.Tuple.isArrayLike(param7) && param7.length === 3) {
                let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal4, inlinedVal5, scrut1, arg$Cons$0$, arg$Cons$1$;
                element0$1 = runtime.Tuple.get(param7, 0);
                element1$1 = runtime.Tuple.get(param7, 1);
                element2$1 = runtime.Tuple.get(param7, 2);
                fv_tmp = element0$1 + tmp3;
                fv_tmp1 = element1$1 + tmp4;
                fv_tmp2 = element2$1 + tmp5;
                inlinedVal4 = globalThis.Object.freeze([
                  fv_tmp,
                  fv_tmp1,
                  fv_tmp2
                ]);
                spheres = sphere1.testspheres;
                if (spheres instanceof NofibPrelude.Nil.class) {
                  let tup3_1, arg$Cons$0$1;
                  if (spheres instanceof NofibPrelude.Cons.class) {
                    let param4_tmp, param1_tmp;
                    arg$Cons$0$1 = spheres.head;
                    tup3_1 = sphere1.infinity;
                    param4_tmp = param4;
                    param1_tmp = param1;
                    param0 = false;
                    param1 = tup3_1;
                    param2 = arg$Cons$0$1;
                    param3 = undefined;
                    param4 = param9;
                    param5 = inlinedVal4;
                    param6 = param8;
                    param7 = newcontrib;
                    param8 = undefined;
                    param9 = param1_tmp;
                    param10 = param4_tmp;
                    id = 2;
                    continue loopLabel
                  }
                  throw globalThis.Object.freeze(new globalThis.Error("match error"));
                } else if (spheres instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$ = spheres.head;
                  arg$Cons$1$ = spheres.tail;
                  scrut1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect1(inlinedVal4, param8, arg$Cons$0$);
                  inlinedVal5 = scrut1(undefined, arg$Cons$0$, inlinedVal4, param8, arg$Cons$1$);
                  if (inlinedVal5 instanceof NofibPrelude.Nil.class) {
                    let tup3_1, arg$Cons$0$1;
                    if (spheres instanceof NofibPrelude.Cons.class) {
                      let param4_tmp, param1_tmp;
                      arg$Cons$0$1 = spheres.head;
                      tup3_1 = sphere1.infinity;
                      param4_tmp = param4;
                      param1_tmp = param1;
                      param0 = false;
                      param1 = tup3_1;
                      param2 = arg$Cons$0$1;
                      param3 = undefined;
                      param4 = param9;
                      param5 = inlinedVal4;
                      param6 = param8;
                      param7 = newcontrib;
                      param8 = undefined;
                      param9 = param1_tmp;
                      param10 = param4_tmp;
                      id = 2;
                      continue loopLabel
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                  {
                    let arg$Cons$0$1, arg$Cons$1$1;
                    if (inlinedVal5 instanceof NofibPrelude.Cons.class) {
                      arg$Cons$0$1 = inlinedVal5.head;
                      if (inlinedVal5 instanceof NofibPrelude.Cons.class) {
                        arg$Cons$1$1 = inlinedVal5.tail;
                        scrut = sphere1[foldr$accessorSymbol](f, arg$Cons$0$1, arg$Cons$1$1);
                        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                          let param4_tmp, param1_tmp;
                          element0$2 = runtime.Tuple.get(scrut, 0);
                          element1$2 = runtime.Tuple.get(scrut, 1);
                          param4_tmp = param4;
                          param1_tmp = param1;
                          param0 = true;
                          param1 = element0$2;
                          param2 = element1$2;
                          param3 = undefined;
                          param4 = param9;
                          param5 = inlinedVal4;
                          param6 = param8;
                          param7 = newcontrib;
                          param8 = undefined;
                          param9 = param1_tmp;
                          param10 = param4_tmp;
                          id = 2;
                          continue loopLabel
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    throw globalThis.Object.freeze(new globalThis.Error("match error"));
                  }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
      case 2:
        if (param0 === true) {
          param3 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(0, param4, param2, param5, param6, param1, param7, undefined, undefined, undefined, undefined, undefined);
        } else {
          param3 = sphere1.background;
        }
        param8 = sphere1[is_zerovector$accessorSymbol](param7);
        if (param8 === true) {
          return param9
        }
        {
          let element2$, element1$, element0$, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp, tmp1, tmp2;
          if (runtime.Tuple.isArrayLike(param3) && param3.length === 3) {
            element0$1 = runtime.Tuple.get(param3, 0);
            element1$1 = runtime.Tuple.get(param3, 1);
            element2$1 = runtime.Tuple.get(param3, 2);
            if (runtime.Tuple.isArrayLike(param10) && param10.length === 3) {
              element0$2 = runtime.Tuple.get(param10, 0);
              element1$2 = runtime.Tuple.get(param10, 1);
              element2$2 = runtime.Tuple.get(param10, 2);
              tmp = element0$1 * element0$2;
              tmp1 = element1$1 * element1$2;
              tmp2 = element2$1 * element2$2;
              if (runtime.Tuple.isArrayLike(param9) && param9.length === 3) {
                let fv_tmp, fv_tmp1, fv_tmp2;
                element0$ = runtime.Tuple.get(param9, 0);
                element1$ = runtime.Tuple.get(param9, 1);
                element2$ = runtime.Tuple.get(param9, 2);
                fv_tmp = element0$ + tmp;
                fv_tmp1 = element1$ + tmp1;
                fv_tmp2 = element2$ + tmp2;
                return globalThis.Object.freeze([
                  fv_tmp,
                  fv_tmp1,
                  fv_tmp2
                ])
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect(pos, dir, sp) {
  let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (sp instanceof sphere1.Sphere.class) {
    let inlinedVal, inlinedVal1;
    arg$Sphere$0$ = sp.pos;
    arg$Sphere$1$ = sp.radius;
    m = sphere1[vecsub$accessorSymbol](pos, arg$Sphere$0$);
    bm = sphere1[vecdot$accessorSymbol](m, dir);
    m2 = sphere1[vecdot$accessorSymbol](m, m);
    tmp = bm * bm;
    tmp1 = tmp - m2;
    tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
    disc = tmp1 + tmp2;
    tmp3 = - bm;
    inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
    slo = tmp3 - inlinedVal;
    tmp4 = - bm;
    inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(disc));
    shi = tmp4 + inlinedVal1;
    scrut = disc < 0.0;
    if (scrut === true) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2(false, 0.0)
    }
    scrut1 = slo < 0.0;
    if (scrut1 === true) {
      scrut2 = shi < 0.0;
      if (scrut2 === true) {
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2(false, 0.0)
      }
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2(true, shi);
    }
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2(true, slo);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect(pos, dir, sp) {
  let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (sp instanceof sphere1.Sphere.class) {
    let inlinedVal, inlinedVal1;
    arg$Sphere$0$ = sp.pos;
    arg$Sphere$1$ = sp.radius;
    m = sphere1[vecsub$accessorSymbol](pos, arg$Sphere$0$);
    bm = sphere1[vecdot$accessorSymbol](m, dir);
    m2 = sphere1[vecdot$accessorSymbol](m, m);
    tmp = bm * bm;
    tmp1 = tmp - m2;
    tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
    disc = tmp1 + tmp2;
    tmp3 = - bm;
    inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
    slo = tmp3 - inlinedVal;
    tmp4 = - bm;
    inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(disc));
    shi = tmp4 + inlinedVal1;
    scrut = disc < 0.0;
    if (scrut === true) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(false, 0.0)
    }
    scrut1 = slo < 0.0;
    if (scrut1 === true) {
      scrut2 = shi < 0.0;
      if (scrut2 === true) {
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(false, 0.0)
      }
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(true, shi);
    }
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(true, slo);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect1 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect(pos, dir, sp) {
  let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (sp instanceof sphere1.Sphere.class) {
    let inlinedVal, inlinedVal1;
    arg$Sphere$0$ = sp.pos;
    arg$Sphere$1$ = sp.radius;
    m = sphere1[vecsub$accessorSymbol](pos, arg$Sphere$0$);
    bm = sphere1[vecdot$accessorSymbol](m, dir);
    m2 = sphere1[vecdot$accessorSymbol](m, m);
    tmp = bm * bm;
    tmp1 = tmp - m2;
    tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
    disc = tmp1 + tmp2;
    tmp3 = - bm;
    inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
    slo = tmp3 - inlinedVal;
    tmp4 = - bm;
    inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(disc));
    shi = tmp4 + inlinedVal1;
    scrut = disc < 0.0;
    if (scrut === true) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21(false, 0.0)
    }
    scrut1 = slo < 0.0;
    if (scrut1 === true) {
      scrut2 = shi < 0.0;
      if (scrut2 === true) {
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21(false, 0.0)
      }
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21(true, shi);
    }
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21(true, slo);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Reflect$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Reflect.class) {
        arg$Reflect$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Cons(arg$Reflect$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specular$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specular.class) {
        arg$Specular$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Cons(arg$Specular$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Refract$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Refract.class) {
        arg$Refract$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Cons(arg$Refract$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Body$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Body.class) {
        arg$Body$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Cons(arg$Body$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Transmit$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Transmit.class) {
        arg$Transmit$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Cons(arg$Transmit$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_map$map = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_map$map(f1, xs) {
  let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
  if (xs instanceof NofibPrelude.Cons.class) {
    arg$Cons$0$ = xs.head;
    arg$Cons$1$ = xs.tail;
    tmp = runtime.safeCall(f1(arg$Cons$0$));
    tmp1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_map$map(f1, arg$Cons$1$);
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Cons(tmp, tmp1)
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Nil()
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda$lambda = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda$lambda(hitpos, surf, norm, refl, l) {
  let arg$Point$0$, arg$Directional$0$;
  if (l instanceof sphere1.Directional.class) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    arg$Directional$0$ = l.x;
    if (runtime.Tuple.isArrayLike(arg$Directional$0$) && arg$Directional$0$.length === 3) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(arg$Directional$0$, 0);
      element1$ = runtime.Tuple.get(arg$Directional$0$, 1);
      element2$ = runtime.Tuple.get(arg$Directional$0$, 2);
      tmp = element0$ * element0$;
      tmp1 = element1$ * element1$;
      tmp2 = tmp + tmp1;
      tmp3 = element2$ * element2$;
      tmp4 = tmp2 + tmp3;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(tmp4));
      tmp5 = element0$ / inlinedVal;
      tmp6 = element1$ / inlinedVal;
      tmp7 = element2$ / inlinedVal;
      tmp8 = globalThis.Object.freeze([
        tmp5,
        tmp6,
        tmp7
      ]);
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker1(tmp8, undefined, norm, l, hitpos, surf, undefined, undefined, refl, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  } else if (l instanceof sphere1.Point.class) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    arg$Point$0$ = l.x;
    if (runtime.Tuple.isArrayLike(arg$Point$0$) && arg$Point$0$.length === 3) {
      element0$ = runtime.Tuple.get(arg$Point$0$, 0);
      element1$ = runtime.Tuple.get(arg$Point$0$, 1);
      element2$ = runtime.Tuple.get(arg$Point$0$, 2);
      if (runtime.Tuple.isArrayLike(hitpos) && hitpos.length === 3) {
        let fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8, inlinedVal;
        element0$1 = runtime.Tuple.get(hitpos, 0);
        element1$1 = runtime.Tuple.get(hitpos, 1);
        element2$1 = runtime.Tuple.get(hitpos, 2);
        tmp = element0$ - element0$1;
        tmp1 = element1$ - element1$1;
        tmp2 = element2$ - element2$1;
        fv_tmp = tmp * tmp;
        fv_tmp1 = tmp1 * tmp1;
        fv_tmp2 = fv_tmp + fv_tmp1;
        fv_tmp3 = tmp2 * tmp2;
        fv_tmp4 = fv_tmp2 + fv_tmp3;
        inlinedVal = runtime.safeCall(globalThis.Math.sqrt(fv_tmp4));
        fv_tmp5 = tmp / inlinedVal;
        fv_tmp6 = tmp1 / inlinedVal;
        fv_tmp7 = tmp2 / inlinedVal;
        fv_tmp8 = globalThis.Object.freeze([
          fv_tmp5,
          fv_tmp6,
          fv_tmp7
        ]);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker1(fv_tmp8, undefined, norm, l, hitpos, surf, undefined, undefined, refl, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$$lambda$ = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$$lambda$(hitpos, surf, norm, refl) {
  return (l) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda$lambda(hitpos, surf, norm, refl, l)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect(pos, dir, sp) {
  let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (sp instanceof sphere1.Sphere.class) {
    let inlinedVal, inlinedVal1;
    arg$Sphere$0$ = sp.pos;
    arg$Sphere$1$ = sp.radius;
    m = sphere1[vecsub$accessorSymbol](pos, arg$Sphere$0$);
    bm = sphere1[vecdot$accessorSymbol](m, dir);
    m2 = sphere1[vecdot$accessorSymbol](m, m);
    tmp = bm * bm;
    tmp1 = tmp - m2;
    tmp2 = arg$Sphere$1$ * arg$Sphere$1$;
    disc = tmp1 + tmp2;
    tmp3 = - bm;
    inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
    slo = tmp3 - inlinedVal;
    tmp4 = - bm;
    inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(disc));
    shi = tmp4 + inlinedVal1;
    scrut = disc < 0.0;
    if (scrut === true) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2(false, 0.0)
    }
    scrut1 = slo < 0.0;
    if (scrut1 === true) {
      scrut2 = shi < 0.0;
      if (scrut2 === true) {
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2(false, 0.0)
      }
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2(true, shi);
    }
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2(true, slo);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Diffuse$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Diffuse.class) {
        arg$Diffuse$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Cons(arg$Diffuse$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specpow$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specpow.class) {
        arg$Specpow$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Cons(arg$Specpow$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Body$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Body.class) {
        arg$Body$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Cons(arg$Body$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specular$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specular.class) {
        arg$Specular$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Cons(arg$Specular$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$vecadd = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$vecadd(a1, a2) {
  return a1(undefined, undefined, undefined, undefined, undefined, undefined, a2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_lscomp$lscomp = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_lscomp$lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Ambient$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Nil()
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Ambient.class) {
        arg$Ambient$0$ = arg$Cons$0$.v;
        tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_lscomp$lscomp(sphere2, arg$Cons$1$);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Cons(arg$Ambient$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_enumFromTo$enumFromTo$worker = function main_testSphere_nofib_run_ray_lscomp1_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_head, spheres, pos, element2$, element1$, element0$, tmp1, tmp2, tmp3, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp4, tmp5, tmp6;
    tmp = a + 1;
    spheres = eta$0$0.testspheres;
    pos = sphere1.lookfrom;
    if (runtime.Tuple.isArrayLike(eta$0$3) && eta$0$3.length === 3) {
      element0$ = runtime.Tuple.get(eta$0$3, 0);
      element1$ = runtime.Tuple.get(eta$0$3, 1);
      element2$ = runtime.Tuple.get(eta$0$3, 2);
      tmp1 = eta$0$12 * element0$;
      tmp2 = eta$0$12 * element1$;
      tmp3 = eta$0$12 * element2$;
      if (runtime.Tuple.isArrayLike(eta$0$4) && eta$0$4.length === 3) {
        let fv_tmp, fv_tmp1, fv_tmp2;
        element0$1 = runtime.Tuple.get(eta$0$4, 0);
        element1$1 = runtime.Tuple.get(eta$0$4, 1);
        element2$1 = runtime.Tuple.get(eta$0$4, 2);
        fv_tmp = element0$1 + tmp1;
        fv_tmp1 = element1$1 + tmp2;
        fv_tmp2 = element2$1 + tmp3;
        if (runtime.Tuple.isArrayLike(eta$0$5) && eta$0$5.length === 3) {
          let fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8, fv_tmp9, fv_tmp10, fv_tmp11, fv_tmp12, fv_tmp13, fv_tmp14, inlinedVal, inlinedVal1, scrut1, element1$3, element0$3, inlinedVal2, scrut2, arg$Cons$0$, arg$Cons$1$, inlinedVal3;
          element0$2 = runtime.Tuple.get(eta$0$5, 0);
          element1$2 = runtime.Tuple.get(eta$0$5, 1);
          element2$2 = runtime.Tuple.get(eta$0$5, 2);
          tmp4 = a * element0$2;
          tmp5 = a * element1$2;
          tmp6 = a * element2$2;
          fv_tmp3 = fv_tmp + tmp4;
          fv_tmp4 = fv_tmp1 + tmp5;
          fv_tmp5 = fv_tmp2 + tmp6;
          fv_tmp6 = fv_tmp3 * fv_tmp3;
          fv_tmp7 = fv_tmp4 * fv_tmp4;
          fv_tmp8 = fv_tmp6 + fv_tmp7;
          fv_tmp9 = fv_tmp5 * fv_tmp5;
          fv_tmp10 = fv_tmp8 + fv_tmp9;
          inlinedVal = runtime.safeCall(globalThis.Math.sqrt(fv_tmp10));
          fv_tmp11 = fv_tmp3 / inlinedVal;
          fv_tmp12 = fv_tmp4 / inlinedVal;
          fv_tmp13 = fv_tmp5 / inlinedVal;
          fv_tmp14 = globalThis.Object.freeze([
            fv_tmp11,
            fv_tmp12,
            fv_tmp13
          ]);
          if (spheres instanceof NofibPrelude.Nil.class) {
            let tup3_1, arg$Cons$0$1;
            if (spheres instanceof NofibPrelude.Cons.class) {
              let fv_tmp15, inlinedVal4;
              arg$Cons$0$1 = spheres.head;
              tup3_1 = sphere1.infinity;
              if (false === true) {
                let inlinedVal5;
                fv_tmp15 = globalThis.Object.freeze([
                  1.0,
                  1.0,
                  1.0
                ]);
                inlinedVal5 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(0, eta$0$2, arg$Cons$0$1, pos, fv_tmp14, tup3_1, fv_tmp15, undefined, undefined, undefined, undefined, undefined);
                inlinedVal4 = inlinedVal5;
              } else {
                inlinedVal4 = sphere1.background;
              }
              inlinedVal1 = inlinedVal4;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else if (spheres instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = spheres.head;
            arg$Cons$1$ = spheres.tail;
            scrut2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect(pos, fv_tmp14, arg$Cons$0$);
            inlinedVal2 = scrut2(undefined, arg$Cons$0$, pos, fv_tmp14, arg$Cons$1$);
            if (inlinedVal2 instanceof NofibPrelude.Nil.class) {
              let tup3_1, arg$Cons$0$1;
              if (spheres instanceof NofibPrelude.Cons.class) {
                let fv_tmp15, inlinedVal4;
                arg$Cons$0$1 = spheres.head;
                tup3_1 = sphere1.infinity;
                if (false === true) {
                  let inlinedVal5;
                  fv_tmp15 = globalThis.Object.freeze([
                    1.0,
                    1.0,
                    1.0
                  ]);
                  inlinedVal5 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(0, eta$0$2, arg$Cons$0$1, pos, fv_tmp14, tup3_1, fv_tmp15, undefined, undefined, undefined, undefined, undefined);
                  inlinedVal4 = inlinedVal5;
                } else {
                  inlinedVal4 = sphere1.background;
                }
                inlinedVal1 = inlinedVal4;
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              let arg$Cons$0$1, arg$Cons$1$1;
              if (inlinedVal2 instanceof NofibPrelude.Cons.class) {
                arg$Cons$0$1 = inlinedVal2.head;
                if (inlinedVal2 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$1$1 = inlinedVal2.tail;
                  scrut1 = sphere1[foldr$accessorSymbol](f, arg$Cons$0$1, arg$Cons$1$1);
                  if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
                    let fv_tmp15, inlinedVal4;
                    element0$3 = runtime.Tuple.get(scrut1, 0);
                    element1$3 = runtime.Tuple.get(scrut1, 1);
                    if (true === true) {
                      let inlinedVal5;
                      fv_tmp15 = globalThis.Object.freeze([
                        1.0,
                        1.0,
                        1.0
                      ]);
                      inlinedVal5 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(0, eta$0$2, element1$3, pos, fv_tmp14, element0$3, fv_tmp15, undefined, undefined, undefined, undefined, undefined);
                      inlinedVal4 = inlinedVal5;
                    } else {
                      inlinedVal4 = sphere1.background;
                    }
                    inlinedVal1 = inlinedVal4;
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          inlinedVal3 = main_testSphere_nofib_run_ray_lscomp1_enumFromTo$enumFromTo$worker(tmp, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, undefined, undefined, undefined, undefined, undefined, eta$0$12, undefined, undefined, undefined);
          Cons_head = main_testSphere_nofib_run_snd$x_tup2(inlinedVal1);
          return main_testSphere_nofib_run_map$xs_Cons(Cons_head, inlinedVal3)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  return eta$0$6(undefined, undefined, undefined, undefined, undefined, eta$0$1, undefined, eta$0$0, eta$0$2, eta$0$3, eta$0$4, eta$0$5);
};
main_testSphere_nofib_run_ray_enumFromTo$enumFromTo = function main_testSphere_nofib_run_ray_enumFromTo$enumFromTo(a, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11) => {
    return main_testSphere_nofib_run_ray_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11)
  }
};
main_testSphere_nofib_run_ray_enumFromTo$enumFromTo$worker = function main_testSphere_nofib_run_ray_enumFromTo$enumFromTo$worker(a, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11) {
  let scrut, tmp;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = a + 1;
    Cons_tail = main_testSphere_nofib_run_ray_enumFromTo$enumFromTo(tmp, b);
    fv_tmp = eta$0$5 - 1;
    return main_testSphere_nofib_run_ray_lscomp1_enumFromTo$enumFromTo$worker(0, fv_tmp, eta$0$7, eta$0$5, eta$0$8, eta$0$9, eta$0$10, eta$0$11, Cons_tail, undefined, undefined, undefined, undefined, undefined, a, undefined, undefined, undefined)
  }
  return main_testSphere_nofib_run_ray_lscomp1$ls1_Nil()(eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11);
};
main_testSphere_nofib_run_snd$snd = function main_testSphere_nofib_run_snd$snd(x) {
  return x(undefined, undefined, undefined, undefined)
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) {
  if (tup2_0 === true) {
    let inlinedVal, scrut, arg$Cons$0$, arg$Cons$1$;
    fv_tmp = globalThis.Object.freeze([
      tup2_1,
      fv_x
    ]);
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.Nil;
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      inlinedVal = scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      return scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker1(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker1 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) {
  if (tup2_0 === true) {
    let inlinedVal, scrut, arg$Cons$0$, arg$Cons$1$;
    fv_tmp = globalThis.Object.freeze([
      tup2_1,
      fv_x
    ]);
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.Nil;
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      inlinedVal = scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      return scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_tmp, fv_lights, fv_nearpos, fv_newdir, fv_newcontrib, fv_scrut, fv_colour, fv_intens) {
  if (tup3_0 === true) {
    let inlinedVal;
    inlinedVal = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(0, fv_lights, tup3_2, fv_nearpos, fv_newdir, tup3_1, fv_newcontrib, undefined, undefined, undefined, undefined, undefined);
    fv_tmp = inlinedVal;
  } else {
    fv_tmp = sphere1.background;
  }
  fv_scrut = sphere1[is_zerovector$accessorSymbol](fv_newcontrib);
  if (fv_scrut === true) {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2(false, fv_colour)
  }
  {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(fv_tmp) && fv_tmp.length === 3) {
      element0$ = runtime.Tuple.get(fv_tmp, 0);
      element1$ = runtime.Tuple.get(fv_tmp, 1);
      element2$ = runtime.Tuple.get(fv_tmp, 2);
      if (runtime.Tuple.isArrayLike(fv_intens) && fv_intens.length === 3) {
        let fv_element0$, fv_element1$, fv_element2$, fv_tmp1, fv_tmp2, fv_tmp3, inlinedVal;
        element0$1 = runtime.Tuple.get(fv_intens, 0);
        element1$1 = runtime.Tuple.get(fv_intens, 1);
        element2$1 = runtime.Tuple.get(fv_intens, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = element2$ * element2$1;
        if (runtime.Tuple.isArrayLike(fv_colour) && fv_colour.length === 3) {
          fv_element0$ = runtime.Tuple.get(fv_colour, 0);
          fv_element1$ = runtime.Tuple.get(fv_colour, 1);
          fv_element2$ = runtime.Tuple.get(fv_colour, 2);
          fv_tmp1 = tmp + fv_element0$;
          fv_tmp2 = tmp1 + fv_element1$;
          fv_tmp3 = tmp2 + fv_element2$;
          inlinedVal = globalThis.Object.freeze([
            fv_tmp1,
            fv_tmp2,
            fv_tmp3
          ]);
          return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2(false, inlinedVal)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractray$matchIdent_17_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractray$matchIdent_17_tup3$worker(tup3_0, tup3_1, tup3_2, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_disc, fv_tmp4, fv_t, fv_scrut, fv_tmp5, fv_olddir) {
  let inlinedVal;
  fv_tmp = tup3_2 * tup3_2;
  fv_tmp1 = tup3_1 * tup3_1;
  fv_tmp2 = 1.0 - fv_tmp1;
  fv_tmp3 = fv_tmp * fv_tmp2;
  fv_disc = 1.0 - fv_tmp3;
  fv_tmp4 = tup3_2 * tup3_1;
  inlinedVal = runtime.safeCall(globalThis.Math.sqrt(fv_disc));
  fv_t = fv_tmp4 - inlinedVal;
  fv_scrut = fv_disc < 0.0;
  if (fv_scrut === true) {
    fv_tmp5 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2(fv_tmp5)
  }
  {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, element2$1, element1$1, element0$1, tmp3, tmp4, tmp5;
    if (runtime.Tuple.isArrayLike(tup3_0) && tup3_0.length === 3) {
      element0$1 = runtime.Tuple.get(tup3_0, 0);
      element1$1 = runtime.Tuple.get(tup3_0, 1);
      element2$1 = runtime.Tuple.get(tup3_0, 2);
      tmp3 = fv_t * element0$1;
      tmp4 = fv_t * element1$1;
      tmp5 = fv_t * element2$1;
      if (runtime.Tuple.isArrayLike(fv_olddir) && fv_olddir.length === 3) {
        let fv_tmp6, fv_tmp7, fv_tmp8, inlinedVal1;
        element0$ = runtime.Tuple.get(fv_olddir, 0);
        element1$ = runtime.Tuple.get(fv_olddir, 1);
        element2$ = runtime.Tuple.get(fv_olddir, 2);
        tmp = tup3_2 * element0$;
        tmp1 = tup3_2 * element1$;
        tmp2 = tup3_2 * element2$;
        fv_tmp6 = tmp3 + tmp;
        fv_tmp7 = tmp4 + tmp1;
        fv_tmp8 = tmp5 + tmp2;
        inlinedVal1 = globalThis.Object.freeze([
          fv_tmp6,
          fv_tmp7,
          fv_tmp8
        ]);
        return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2(inlinedVal1)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2(tup2_1) {
  return (fv_pos, fv_tmp, fv_lights, fv_newcontrib, fv_scrut, fv_colour, fv_intens) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2$worker(tup2_1, fv_pos, fv_tmp, fv_lights, fv_newcontrib, fv_scrut, fv_colour, fv_intens)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup2$worker(tup2_1, fv_pos, fv_tmp, fv_lights, fv_newcontrib, fv_scrut, fv_colour, fv_intens) {
  let a, spheres, scrut, element1$, element0$, element2$, element1$1, element0$1, element2$1, element1$2, element0$2, tmp, tmp1, tmp2;
  a = sphere1.epsilon;
  if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 3) {
    element0$2 = runtime.Tuple.get(tup2_1, 0);
    element1$2 = runtime.Tuple.get(tup2_1, 1);
    element2$1 = runtime.Tuple.get(tup2_1, 2);
    tmp = a * element0$2;
    tmp1 = a * element1$2;
    tmp2 = a * element2$1;
    if (runtime.Tuple.isArrayLike(fv_pos) && fv_pos.length === 3) {
      let fv_tmp1, fv_tmp2, fv_tmp3, inlinedVal, inlinedVal1, scrut1, arg$Cons$0$, arg$Cons$1$;
      element0$1 = runtime.Tuple.get(fv_pos, 0);
      element1$1 = runtime.Tuple.get(fv_pos, 1);
      element2$ = runtime.Tuple.get(fv_pos, 2);
      fv_tmp1 = element0$1 + tmp;
      fv_tmp2 = element1$1 + tmp1;
      fv_tmp3 = element2$ + tmp2;
      inlinedVal = globalThis.Object.freeze([
        fv_tmp1,
        fv_tmp2,
        fv_tmp3
      ]);
      spheres = sphere1.testspheres;
      if (spheres instanceof NofibPrelude.Nil.class) {
        let tup3_1, arg$Cons$0$1;
        if (spheres instanceof NofibPrelude.Cons.class) {
          arg$Cons$0$1 = spheres.head;
          tup3_1 = sphere1.infinity;
          return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(false, tup3_1, arg$Cons$0$1, fv_tmp, fv_lights, inlinedVal, tup2_1, fv_newcontrib, fv_scrut, fv_colour, fv_intens)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (spheres instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = spheres.head;
        arg$Cons$1$ = spheres.tail;
        scrut1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect(inlinedVal, tup2_1, arg$Cons$0$);
        inlinedVal1 = scrut1(undefined, arg$Cons$0$, inlinedVal, tup2_1, arg$Cons$1$);
        if (inlinedVal1 instanceof NofibPrelude.Nil.class) {
          let tup3_1, arg$Cons$0$1;
          if (spheres instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = spheres.head;
            tup3_1 = sphere1.infinity;
            return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(false, tup3_1, arg$Cons$0$1, fv_tmp, fv_lights, inlinedVal, tup2_1, fv_newcontrib, fv_scrut, fv_colour, fv_intens)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = inlinedVal1.head;
            if (inlinedVal1 instanceof NofibPrelude.Cons.class) {
              arg$Cons$1$1 = inlinedVal1.tail;
              scrut = sphere1[foldr$accessorSymbol](f, arg$Cons$0$1, arg$Cons$1$1);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                element0$ = runtime.Tuple.get(scrut, 0);
                element1$ = runtime.Tuple.get(scrut, 1);
                return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(true, element0$, element1$, fv_tmp, fv_lights, inlinedVal, tup2_1, fv_newcontrib, fv_scrut, fv_colour, fv_intens)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup21 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) {
  if (tup2_0 === true) {
    let inlinedVal, scrut, arg$Cons$0$, arg$Cons$1$;
    fv_tmp = globalThis.Object.freeze([
      tup2_1,
      fv_x
    ]);
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.Nil;
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect1(fv_pos, fv_dir, arg$Cons$0$);
      inlinedVal = scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_trace_sphmap_sphereintersect$sphereintersect1(fv_pos, fv_dir, arg$Cons$0$);
      return scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_reflectsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_specularsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2(tup2_0, tup2_1) {
  return (fv_surf, fv_reflsurf, fv_tmp, fv_trintensity, fv_scrut, fv_hitpos, fv_refl, fv_lights, fv_contrib) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$shade_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$matchIdent_1_tup2$worker_main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade$scrut_tup3$worker(1, tup2_0, tup2_1, fv_surf, fv_reflsurf, fv_tmp, fv_trintensity, fv_scrut, fv_hitpos, fv_refl, fv_lights, fv_contrib)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_refractsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_bodysurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_transmitsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Cons(Cons_head, Cons_tail) {
  return (fv_f, fv_z) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_f, fv_z);
    return runtime.safeCall(fv_f(Cons_head, inlinedVal))
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_foldr$xs_Nil() {
  return (fv_f, fv_z) => {
    return fv_z
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker1 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker(tup2_0, fv_cosangle, fv_norm, fv_l, fv_pos, fv_surf, fv_scrut, fv_tmp, fv_refl, fv_cosalpha, fv_tmp1, fv_scrut1, fv_tmp2, fv_cosalpha1, fv_scrut2, fv_tmp3) {
  let inlinedVal, inlinedVal1, a, spheres, inlinedVal2, element2$, element1$, element0$, tmp, tmp1, tmp2, element2$1, element1$1, element0$1, scrut, arg$Point$1$, arg$Directional$1$;
  fv_cosangle = sphere1[vecdot$accessorSymbol](tup2_0, fv_norm);
  if (fv_l instanceof sphere1.Directional.class) {
    arg$Directional$1$ = fv_l.y;
    inlinedVal = arg$Directional$1$;
  } else if (fv_l instanceof sphere1.Point.class) {
    arg$Point$1$ = fv_l.y;
    inlinedVal = arg$Point$1$;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  a = sphere1.epsilon;
  if (runtime.Tuple.isArrayLike(tup2_0) && tup2_0.length === 3) {
    element0$ = runtime.Tuple.get(tup2_0, 0);
    element1$ = runtime.Tuple.get(tup2_0, 1);
    element2$ = runtime.Tuple.get(tup2_0, 2);
    tmp = a * element0$;
    tmp1 = a * element1$;
    tmp2 = a * element2$;
    if (runtime.Tuple.isArrayLike(fv_pos) && fv_pos.length === 3) {
      let fv_tmp4, fv_tmp5, fv_tmp6, inlinedVal3, inlinedVal4, scrut1, arg$Cons$0$, arg$Cons$1$;
      element0$1 = runtime.Tuple.get(fv_pos, 0);
      element1$1 = runtime.Tuple.get(fv_pos, 1);
      element2$1 = runtime.Tuple.get(fv_pos, 2);
      fv_tmp4 = element0$1 + tmp;
      fv_tmp5 = element1$1 + tmp1;
      fv_tmp6 = element2$1 + tmp2;
      inlinedVal3 = globalThis.Object.freeze([
        fv_tmp4,
        fv_tmp5,
        fv_tmp6
      ]);
      spheres = sphere1.testspheres;
      if (spheres instanceof NofibPrelude.Nil.class) {
        if (spheres instanceof NofibPrelude.Cons.class) {
          inlinedVal2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3(false);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (spheres instanceof NofibPrelude.Cons.class) {
        arg$Cons$0$ = spheres.head;
        arg$Cons$1$ = spheres.tail;
        scrut1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect(inlinedVal3, tup2_0, arg$Cons$0$);
        inlinedVal4 = scrut1(undefined, arg$Cons$0$, inlinedVal3, tup2_0, arg$Cons$1$);
        if (inlinedVal4 instanceof NofibPrelude.Nil.class) {
          if (spheres instanceof NofibPrelude.Cons.class) {
            inlinedVal2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3(false);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        } else {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (inlinedVal4 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = inlinedVal4.head;
            if (inlinedVal4 instanceof NofibPrelude.Cons.class) {
              arg$Cons$1$1 = inlinedVal4.tail;
              scrut = sphere1[foldr$accessorSymbol](f, arg$Cons$0$1, arg$Cons$1$1);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                runtime.Tuple.get(scrut, 0);
                runtime.Tuple.get(scrut, 1);
                inlinedVal2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3(true);
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      inlinedVal1 = inlinedVal2(undefined, inlinedVal);
      return inlinedVal1(fv_surf, fv_scrut, fv_cosangle, fv_tmp, fv_refl, tup2_0, fv_cosalpha, fv_tmp1, fv_scrut1, fv_tmp2, fv_cosalpha1, fv_scrut2, fv_tmp3)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_x, fv_pos, fv_dir, fv_xs) {
  if (tup2_0 === true) {
    let inlinedVal, scrut, arg$Cons$0$, arg$Cons$1$;
    fv_tmp = globalThis.Object.freeze([
      tup2_1,
      fv_x
    ]);
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      inlinedVal = NofibPrelude.Nil;
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      inlinedVal = scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$);
      return NofibPrelude.Cons(fv_tmp, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  {
    let scrut, arg$Cons$0$, arg$Cons$1$;
    if (fv_xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (fv_xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = fv_xs.head;
      arg$Cons$1$ = fv_xs.tail;
      scrut = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed_trace_sphmap_sphereintersect$sphereintersect(fv_pos, fv_dir, arg$Cons$0$);
      return scrut(undefined, arg$Cons$0$, fv_pos, fv_dir, arg$Cons$1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3(tup3_0) {
  return (fv_scrut, fv_lcolour) => {
    return (eta$0$5, eta$0$7, eta$0$8, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$17, eta$0$18, eta$0$23, eta$0$26, eta$0$27) => {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3$worker(tup3_0, fv_scrut, fv_lcolour, eta$0$5, eta$0$7, eta$0$8, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$17, eta$0$18, eta$0$23, eta$0$26, eta$0$27)
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_shadowed$scrut_tup3$worker(tup3_0, fv_scrut, fv_lcolour, eta$0$5, eta$0$7, eta$0$8, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$17, eta$0$18, eta$0$23, eta$0$26, eta$0$27) {
  fv_scrut = ! tup3_0;
  if (fv_scrut === true) {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker(false, fv_lcolour, eta$0$5, eta$0$7, eta$0$8, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$17, eta$0$18, eta$0$23, eta$0$26, eta$0$27)
  }
  return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker(true, fv_lcolour, eta$0$5, eta$0$7, eta$0$8, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$17, eta$0$18, eta$0$23, eta$0$26, eta$0$27);
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray$scrut_tup2$worker(tup2_0, tup2_1, fv_surf, fv_scrut, fv_cosangle, fv_tmp, fv_refl, fv_ldir, fv_cosalpha, fv_tmp1, fv_scrut1, fv_tmp2, fv_cosalpha1, fv_scrut2, fv_tmp3) {
  if (tup2_0 === true) {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3(0.0, 0.0, 0.0)
  }
  {
    let tmp, ys, inlinedVal, inlinedVal1, tmp1, tmp2, ys1, inlinedVal2, inlinedVal3;
    tmp1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_lscomp$lscomp(sphere1, fv_surf);
    tmp2 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    ys1 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_head$l_Cons(tmp2);
    inlinedVal2 = tmp1(ys1);
    inlinedVal3 = inlinedVal2();
    tmp = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_lscomp$lscomp(sphere1, fv_surf);
    ys = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_head$l_Cons(8.0);
    inlinedVal = tmp(ys);
    inlinedVal1 = inlinedVal();
    fv_scrut = fv_cosangle <= 0.0;
    if (fv_scrut === true) {
      let element2$, element1$, element0$, tmp3, tmp4, tmp5, tmp6, tmp7, ys2, inlinedVal4, inlinedVal5;
      tmp6 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_lscomp$lscomp(sphere1, fv_surf);
      tmp7 = globalThis.Object.freeze([
        1.0,
        1.0,
        1.0
      ]);
      ys2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_head$l_Cons(tmp7);
      inlinedVal4 = tmp6(ys2);
      inlinedVal5 = inlinedVal4();
      fv_tmp = sphere1[vecdot$accessorSymbol](fv_refl, fv_ldir);
      fv_cosalpha = - fv_tmp;
      fv_tmp1 = - fv_cosangle;
      if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
        let fv_element0$, fv_element1$, fv_element2$, fv_tmp4, fv_tmp5, fv_tmp6;
        element0$ = runtime.Tuple.get(inlinedVal3, 0);
        element1$ = runtime.Tuple.get(inlinedVal3, 1);
        element2$ = runtime.Tuple.get(inlinedVal3, 2);
        tmp3 = fv_tmp1 * element0$;
        tmp4 = fv_tmp1 * element1$;
        tmp5 = fv_tmp1 * element2$;
        if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 3) {
          fv_element0$ = runtime.Tuple.get(tup2_1, 0);
          fv_element1$ = runtime.Tuple.get(tup2_1, 1);
          fv_element2$ = runtime.Tuple.get(tup2_1, 2);
          fv_tmp4 = tmp3 * fv_element0$;
          fv_tmp5 = tmp4 * fv_element1$;
          fv_tmp6 = tmp5 * fv_element2$;
          fv_scrut1 = fv_cosalpha <= 0.0;
          if (fv_scrut1 === true) {
            return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3(0.0, 0.0, 0.0)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_tmp4, undefined, fv_tmp5, undefined, fv_tmp6)
          }
          {
            let inlinedVal6, element2$1, element1$1, element0$1, tmp8, tmp9, tmp10;
            inlinedVal6 = runtime.safeCall(globalThis.Math.pow(fv_cosalpha, inlinedVal1));
            if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 3) {
              let fv_element0$1, fv_element1$1, fv_element2$1, fv_tmp7, fv_tmp8, fv_tmp9;
              element0$1 = runtime.Tuple.get(inlinedVal5, 0);
              element1$1 = runtime.Tuple.get(inlinedVal5, 1);
              element2$1 = runtime.Tuple.get(inlinedVal5, 2);
              tmp8 = inlinedVal6 * element0$1;
              tmp9 = inlinedVal6 * element1$1;
              tmp10 = inlinedVal6 * element2$1;
              if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 3) {
                fv_element0$1 = runtime.Tuple.get(tup2_1, 0);
                fv_element1$1 = runtime.Tuple.get(tup2_1, 1);
                fv_element2$1 = runtime.Tuple.get(tup2_1, 2);
                fv_tmp7 = tmp8 * fv_element0$1;
                fv_tmp8 = tmp9 * fv_element1$1;
                fv_tmp9 = tmp10 * fv_element2$1;
                return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3(fv_tmp7, fv_tmp8, fv_tmp9)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_tmp4, undefined, fv_tmp5, undefined, fv_tmp6)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let element2$, element1$, element0$, tmp3, tmp4, tmp5, tmp6, tmp7, ys2, inlinedVal4, inlinedVal5;
      tmp6 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_lscomp$lscomp(sphere1, fv_surf);
      tmp7 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      ys2 = main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_head$l_Cons(tmp7);
      inlinedVal4 = tmp6(ys2);
      inlinedVal5 = inlinedVal4();
      fv_cosalpha1 = sphere1[vecdot$accessorSymbol](fv_refl, fv_ldir);
      if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
        let fv_element0$, fv_element1$, fv_element2$, fv_tmp4, fv_tmp5, fv_tmp6;
        element0$ = runtime.Tuple.get(inlinedVal3, 0);
        element1$ = runtime.Tuple.get(inlinedVal3, 1);
        element2$ = runtime.Tuple.get(inlinedVal3, 2);
        tmp3 = fv_cosangle * element0$;
        tmp4 = fv_cosangle * element1$;
        tmp5 = fv_cosangle * element2$;
        if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 3) {
          fv_element0$ = runtime.Tuple.get(tup2_1, 0);
          fv_element1$ = runtime.Tuple.get(tup2_1, 1);
          fv_element2$ = runtime.Tuple.get(tup2_1, 2);
          fv_tmp4 = tmp3 * fv_element0$;
          fv_tmp5 = tmp4 * fv_element1$;
          fv_tmp6 = tmp5 * fv_element2$;
          fv_scrut2 = fv_cosalpha1 < 0.0;
          if (fv_scrut2 === true) {
            return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup31(0.0, 0.0, 0.0)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_tmp4, undefined, fv_tmp5, undefined, fv_tmp6)
          }
          {
            let inlinedVal6, element2$1, element1$1, element0$1, tmp8, tmp9, tmp10;
            inlinedVal6 = runtime.safeCall(globalThis.Math.pow(fv_cosalpha1, inlinedVal1));
            if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 3) {
              let fv_element0$1, fv_element1$1, fv_element2$1, fv_tmp7, fv_tmp8, fv_tmp9;
              element0$1 = runtime.Tuple.get(inlinedVal5, 0);
              element1$1 = runtime.Tuple.get(inlinedVal5, 1);
              element2$1 = runtime.Tuple.get(inlinedVal5, 2);
              tmp8 = inlinedVal6 * element0$1;
              tmp9 = inlinedVal6 * element1$1;
              tmp10 = inlinedVal6 * element2$1;
              if (runtime.Tuple.isArrayLike(tup2_1) && tup2_1.length === 3) {
                fv_element0$1 = runtime.Tuple.get(tup2_1, 0);
                fv_element1$1 = runtime.Tuple.get(tup2_1, 1);
                fv_element2$1 = runtime.Tuple.get(tup2_1, 2);
                fv_tmp7 = tmp8 * fv_element0$1;
                fv_tmp8 = tmp9 * fv_element1$1;
                fv_tmp9 = tmp10 * fv_element2$1;
                return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup31(fv_tmp7, fv_tmp8, fv_tmp9)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_tmp4, undefined, fv_tmp5, undefined, fv_tmp6)
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_diffusesurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specpowsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_bodysurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15) => {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15)
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker1 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15) {
  fv_tmp = fv_x1 + tup3_0;
  fv_tmp1 = fv_y1 + tup3_1;
  fv_tmp2 = fv_z1 + tup3_2;
  return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker(fv_tmp, fv_tmp1, fv_tmp2, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15)
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_specularsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup31 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15) => {
      return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15)
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_lambda$_lambda_lightray_vecadd$a2_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z2, fv_y2, fv_x2, fv_tmp, fv_x1, fv_tmp1, fv_y1, fv_tmp2, fv_z1, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15) {
  fv_tmp = fv_x1 + tup3_0;
  fv_tmp1 = fv_y1 + tup3_1;
  fv_tmp2 = fv_z1 + tup3_2;
  return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker(fv_tmp, fv_tmp1, fv_tmp2, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15)
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3 = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_z1, fv_y1, fv_x1, fv_a2, fv_element0$1, fv_element1$1, fv_element2$1, fv_z2, fv_y2, fv_x2, fv_tmp, fv_tmp1, fv_tmp2) => {
    return main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z1, fv_y1, fv_x1, fv_a2, fv_element0$1, fv_element1$1, fv_element2$1, fv_z2, fv_y2, fv_x2, fv_tmp, fv_tmp1, fv_tmp2)
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_vecsum_vecadd$a1_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_z1, fv_y1, fv_x1, fv_a2, fv_element0$1, fv_element1$1, fv_element2$1, fv_z2, fv_y2, fv_x2, fv_tmp, fv_tmp1, fv_tmp2) {
  if (runtime.Tuple.isArrayLike(fv_a2) && fv_a2.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_a2, 0);
    fv_element1$1 = runtime.Tuple.get(fv_a2, 1);
    fv_element2$1 = runtime.Tuple.get(fv_a2, 2);
    fv_tmp = tup3_0 + fv_element0$1;
    fv_tmp1 = tup3_1 + fv_element1$1;
    fv_tmp2 = tup3_2 + fv_element2$1;
    return globalThis.Object.freeze([
      fv_tmp,
      fv_tmp1,
      fv_tmp2
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Cons(Cons_head, Cons_tail) {
  return (fv_ys) => {
    return () => {
      return Cons_head
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Nil = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_append$xs_Nil() {
  return (fv_ys) => {
    return () => {
      return fv_ys()
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_head$l_Cons = function main_testSphere_nofib_run_ray_lscomp1_f_tracepixel_shade_ambientsurf_head$l_Cons(Cons_head) {
  return () => {
    return Cons_head
  }
};
main_testSphere_nofib_run_ray_lscomp1$ls1_Nil = function main_testSphere_nofib_run_ray_lscomp1$ls1_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_i, fv_tmp, fv_winsize, fv_tmp1, fv_sphere, fv_lights, fv_scrnx, fv_firstray, fv_scrny) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6) => {
        return eta$1$0
      }
    }
  }
};
main_testSphere_nofib_run_map$xs_Cons = function main_testSphere_nofib_run_map$xs_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) => {
    return main_testSphere_nofib_run_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1)
  }
};
main_testSphere_nofib_run_map$xs_Cons$worker = function main_testSphere_nofib_run_map$xs_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_xs, fv_x, fv_tmp, fv_f, fv_tmp1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_f(Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_f, undefined);
  return main_testSphere_nofib_run_hash_foldr$xs_Cons(fv_tmp, inlinedVal)
};
main_testSphere_nofib_run_snd$x_tup2 = function main_testSphere_nofib_run_snd$x_tup2(tup2_1) {
  return (fv_element0$, fv_element1$, fv_s, fv_f) => {
    return tup2_1
  }
};
main_testSphere_nofib_run_hash_foldr$xs_Cons = function main_testSphere_nofib_run_hash_foldr$xs_Cons(Cons_head, Cons_tail) {
  return (fv_z, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t, fv_h, fv_tmp, fv_f) => {
    let inlinedVal;
    inlinedVal = Cons_tail(fv_z, undefined, undefined, undefined, undefined, undefined, fv_f);
    return runtime.safeCall(fv_f(Cons_head, inlinedVal))
  }
};
lambda$ = (undefined, function () {
  return (rgb, acc) => {
    return lambda(rgb, acc)
  }
});
lambda = (undefined, function (rgb, acc) {
  let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4;
  if (runtime.Tuple.isArrayLike(rgb) && rgb.length === 3) {
    let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, tmp5, inlinedVal6, tmp6, inlinedVal7, tmp7, inlinedVal8;
    element0$ = runtime.Tuple.get(rgb, 0);
    element1$ = runtime.Tuple.get(rgb, 1);
    element2$ = runtime.Tuple.get(rgb, 2);
    tmp7 = 255 * element0$;
    inlinedVal8 = runtime.safeCall(globalThis.Math.round(tmp7));
    inlinedVal3 = runtime.safeCall(globalThis.BigInt(inlinedVal8));
    tmp6 = 255 * element1$;
    inlinedVal7 = runtime.safeCall(globalThis.Math.round(tmp6));
    inlinedVal4 = runtime.safeCall(globalThis.BigInt(inlinedVal7));
    inlinedVal = runtime.safeCall(globalThis.BigInt(7));
    tmp = inlinedVal4 * inlinedVal;
    tmp1 = inlinedVal3 + tmp;
    tmp5 = 255 * element2$;
    inlinedVal6 = runtime.safeCall(globalThis.Math.round(tmp5));
    inlinedVal5 = runtime.safeCall(globalThis.BigInt(inlinedVal6));
    inlinedVal1 = runtime.safeCall(globalThis.BigInt(23));
    tmp2 = inlinedVal5 * inlinedVal1;
    tmp3 = tmp1 + tmp2;
    inlinedVal2 = runtime.safeCall(globalThis.BigInt(61));
    tmp4 = acc * inlinedVal2;
    return tmp3 + tmp4
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
f = function f(d1s1, d2s2) {
  let scrut, element1$, element0$, element1$1, element0$1;
  if (runtime.Tuple.isArrayLike(d1s1) && d1s1.length === 2) {
    element0$ = runtime.Tuple.get(d1s1, 0);
    element1$ = runtime.Tuple.get(d1s1, 1);
    if (runtime.Tuple.isArrayLike(d2s2) && d2s2.length === 2) {
      element0$1 = runtime.Tuple.get(d2s2, 0);
      element1$1 = runtime.Tuple.get(d2s2, 1);
      scrut = element0$ < element0$1;
      if (scrut === true) {
        return globalThis.Object.freeze([
          element0$,
          element1$
        ])
      }
      return globalThis.Object.freeze([
        element0$1,
        element1$1
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class sphere {
  static {
    sphere1 = this
  }
  static get [foldr$accessorSymbol]() { return sphere.#foldr; }
  static get [vecadd$accessorSymbol]() { return sphere.#vecadd; }
  static get [vecsub$accessorSymbol]() { return sphere.#vecsub; }
  static get [vecmult$accessorSymbol]() { return sphere.#vecmult; }
  static get [vecscale$accessorSymbol]() { return sphere.#vecscale; }
  static get [vecdot$accessorSymbol]() { return sphere.#vecdot; }
  static get [is_zerovector$accessorSymbol]() { return sphere.#is_zerovector; }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68;
    sphere.pi = globalThis.Math.PI;
    sphere.epsilon = 0.000001;
    sphere.infinity = 100000000.0;
    sphere.Directional = function Directional(x, y) {
      return globalThis.Object.freeze(new Directional.class(x, y));
    };
    (class Directional {
      static {
        sphere.Directional.class = this
      }
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Directional", ["x", "y"]];
    });
    sphere.Point = function Point(x, y) {
      return globalThis.Object.freeze(new Point.class(x, y));
    };
    (class Point {
      static {
        sphere.Point.class = this
      }
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Point", ["x", "y"]];
    });
    sphere.Ambient = function Ambient(v) {
      return globalThis.Object.freeze(new Ambient.class(v));
    };
    (class Ambient {
      static {
        sphere.Ambient.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ambient", ["v"]];
    });
    sphere.Diffuse = function Diffuse(v) {
      return globalThis.Object.freeze(new Diffuse.class(v));
    };
    (class Diffuse {
      static {
        sphere.Diffuse.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Diffuse", ["v"]];
    });
    sphere.Specular = function Specular(v) {
      return globalThis.Object.freeze(new Specular.class(v));
    };
    (class Specular {
      static {
        sphere.Specular.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specular", ["v"]];
    });
    sphere.Specpow = function Specpow(v) {
      return globalThis.Object.freeze(new Specpow.class(v));
    };
    (class Specpow {
      static {
        sphere.Specpow.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Specpow", ["v"]];
    });
    sphere.Reflect = function Reflect(v) {
      return globalThis.Object.freeze(new Reflect.class(v));
    };
    (class Reflect {
      static {
        sphere.Reflect.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Reflect", ["v"]];
    });
    sphere.Transmit = function Transmit(v) {
      return globalThis.Object.freeze(new Transmit.class(v));
    };
    (class Transmit {
      static {
        sphere.Transmit.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Transmit", ["v"]];
    });
    sphere.Refract = function Refract(v) {
      return globalThis.Object.freeze(new Refract.class(v));
    };
    (class Refract {
      static {
        sphere.Refract.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Refract", ["v"]];
    });
    sphere.Body = function Body(v) {
      return globalThis.Object.freeze(new Body.class(v));
    };
    (class Body {
      static {
        sphere.Body.class = this
      }
      constructor(v) {
        this.v = v;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Body", ["v"]];
    });
    sphere.Sphere = function Sphere(pos, radius, surface) {
      return globalThis.Object.freeze(new Sphere.class(pos, radius, surface));
    };
    (class Sphere {
      static {
        sphere.Sphere.class = this
      }
      constructor(pos, radius, surface) {
        this.pos = pos;
        this.radius = radius;
        this.surface = surface;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Sphere", ["pos", "radius", "surface"]];
    });
    tmp = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    sphere.lookat = tmp;
    tmp1 = globalThis.Object.freeze([
      0.0,
      0.0,
      1.0
    ]);
    sphere.vup = tmp1;
    sphere.fov = 45.0;
    tmp2 = globalThis.Object.freeze([
      0.035,
      0.0325,
      0.025
    ]);
    tmp3 = sphere.Ambient(tmp2);
    tmp4 = globalThis.Object.freeze([
      0.5,
      0.45,
      0.35
    ]);
    tmp5 = sphere.Diffuse(tmp4);
    tmp6 = globalThis.Object.freeze([
      0.8,
      0.8,
      0.8
    ]);
    tmp7 = sphere.Specular(tmp6);
    tmp8 = sphere.Specpow(3.0);
    tmp9 = sphere.Reflect(0.5);
    tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
    tmp11 = NofibPrelude.Cons(tmp8, tmp10);
    tmp12 = NofibPrelude.Cons(tmp7, tmp11);
    tmp13 = NofibPrelude.Cons(tmp5, tmp12);
    tmp14 = NofibPrelude.Cons(tmp3, tmp13);
    sphere.s2 = tmp14;
    tmp15 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp16 = sphere.Sphere(tmp15, 0.5, sphere.s2);
    tmp17 = globalThis.Object.freeze([
      0.272166,
      0.272166,
      0.544331
    ]);
    tmp18 = sphere.Sphere(tmp17, 0.166667, sphere.s2);
    tmp19 = globalThis.Object.freeze([
      0.643951,
      0.172546,
      0.0
    ]);
    tmp20 = sphere.Sphere(tmp19, 0.166667, sphere.s2);
    tmp21 = globalThis.Object.freeze([
      0.172546,
      0.643951,
      0.0
    ]);
    tmp22 = sphere.Sphere(tmp21, 0.166667, sphere.s2);
    tmp23 = - 0.371785;
    tmp24 = globalThis.Object.freeze([
      tmp23,
      0.0996195,
      0.544331
    ]);
    tmp25 = sphere.Sphere(tmp24, 0.166667, sphere.s2);
    tmp26 = - 0.471405;
    tmp27 = globalThis.Object.freeze([
      tmp26,
      0.471405,
      0.0
    ]);
    tmp28 = sphere.Sphere(tmp27, 0.166667, sphere.s2);
    tmp29 = - 0.643951;
    tmp30 = - 0.172546;
    tmp31 = globalThis.Object.freeze([
      tmp29,
      tmp30,
      0.0
    ]);
    tmp32 = sphere.Sphere(tmp31, 0.166667, sphere.s2);
    tmp33 = - 0.371785;
    tmp34 = globalThis.Object.freeze([
      0.0996195,
      tmp33,
      0.544331
    ]);
    tmp35 = sphere.Sphere(tmp34, 0.166667, sphere.s2);
    tmp36 = - 0.172546;
    tmp37 = - 0.643951;
    tmp38 = globalThis.Object.freeze([
      tmp36,
      tmp37,
      0.0
    ]);
    tmp39 = sphere.Sphere(tmp38, 0.166667, sphere.s2);
    tmp40 = - 0.471405;
    tmp41 = globalThis.Object.freeze([
      0.471405,
      tmp40,
      0.0
    ]);
    tmp42 = sphere.Sphere(tmp41, 0.166667, sphere.s2);
    tmp43 = NofibPrelude.Cons(tmp42, NofibPrelude.Nil);
    tmp44 = NofibPrelude.Cons(tmp39, tmp43);
    tmp45 = NofibPrelude.Cons(tmp35, tmp44);
    tmp46 = NofibPrelude.Cons(tmp32, tmp45);
    tmp47 = NofibPrelude.Cons(tmp28, tmp46);
    tmp48 = NofibPrelude.Cons(tmp25, tmp47);
    tmp49 = NofibPrelude.Cons(tmp22, tmp48);
    tmp50 = NofibPrelude.Cons(tmp20, tmp49);
    tmp51 = NofibPrelude.Cons(tmp18, tmp50);
    tmp52 = NofibPrelude.Cons(tmp16, tmp51);
    sphere.testspheres = tmp52;
    tmp53 = globalThis.Object.freeze([
      4.0,
      3.0,
      2.0
    ]);
    tmp54 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp55 = sphere.Point(tmp53, tmp54);
    tmp56 = - 4.0;
    tmp57 = globalThis.Object.freeze([
      1.0,
      tmp56,
      4.0
    ]);
    tmp58 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp59 = sphere.Point(tmp57, tmp58);
    tmp60 = - 3.0;
    tmp61 = globalThis.Object.freeze([
      tmp60,
      1.0,
      5.0
    ]);
    tmp62 = globalThis.Object.freeze([
      0.288675,
      0.288675,
      0.288675
    ]);
    tmp63 = sphere.Point(tmp61, tmp62);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp59, tmp64);
    tmp66 = NofibPrelude.Cons(tmp55, tmp65);
    sphere.testlights = tmp66;
    tmp67 = globalThis.Object.freeze([
      2.1,
      1.3,
      1.7
    ]);
    sphere.lookfrom = tmp67;
    tmp68 = globalThis.Object.freeze([
      0.078,
      0.361,
      0.753
    ]);
    sphere.background = tmp68;
  }
  static #foldr(f1, z, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp;
    if (xs instanceof NofibPrelude.Nil.class) {
      return z
    } else if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = sphere.#foldr(f1, z, arg$Cons$1$);
      return runtime.safeCall(f1(arg$Cons$0$, tmp))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecadd(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ + element0$1;
        tmp1 = element1$ + element1$1;
        tmp2 = element2$ + element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecsub(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ - element0$1;
        tmp1 = element1$ - element1$1;
        tmp2 = element2$ - element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecmult(a1, a2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(a1) && a1.length === 3) {
      element0$ = runtime.Tuple.get(a1, 0);
      element1$ = runtime.Tuple.get(a1, 1);
      element2$ = runtime.Tuple.get(a1, 2);
      if (runtime.Tuple.isArrayLike(a2) && a2.length === 3) {
        element0$1 = runtime.Tuple.get(a2, 0);
        element1$1 = runtime.Tuple.get(a2, 1);
        element2$1 = runtime.Tuple.get(a2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = element2$ * element2$1;
        return globalThis.Object.freeze([
          tmp,
          tmp1,
          tmp2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecscale(xyz, a) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
      tmp = a * element0$;
      tmp1 = a * element1$;
      tmp2 = a * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vecdot(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
        tmp = element0$ * element0$1;
        tmp1 = element1$ * element1$1;
        tmp2 = tmp + tmp1;
        tmp3 = element2$ * element2$1;
        return tmp2 + tmp3
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #is_zerovector(x) {
    let element2$, element1$, element0$, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(x) && x.length === 3) {
      element0$ = runtime.Tuple.get(x, 0);
      element1$ = runtime.Tuple.get(x, 1);
      element2$ = runtime.Tuple.get(x, 2);
      tmp = element0$ < sphere.epsilon;
      if (tmp === true) {
        tmp1 = element1$ < sphere.epsilon;
        if (tmp1 === true) {
          return element2$ < sphere.epsilon
        }
        return false;
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let inlinedVal, lights, lookfrom, lookat, vup, fov, initfirstray, element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, inlinedVal1, f1;
    lights = sphere1.testlights;
    lookfrom = sphere1.lookfrom;
    lookat = sphere1.lookat;
    vup = sphere1.vup;
    fov = sphere1.fov;
    initfirstray = sphere1.#vecsub(lookat, lookfrom);
    if (runtime.Tuple.isArrayLike(initfirstray) && initfirstray.length === 3) {
      let inlinedVal2, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
      element0$ = runtime.Tuple.get(initfirstray, 0);
      element1$ = runtime.Tuple.get(initfirstray, 1);
      element2$ = runtime.Tuple.get(initfirstray, 2);
      tmp = element0$ * element0$;
      tmp1 = element1$ * element1$;
      tmp2 = tmp + tmp1;
      tmp3 = element2$ * element2$;
      tmp4 = tmp2 + tmp3;
      inlinedVal2 = runtime.safeCall(globalThis.Math.sqrt(tmp4));
      tmp5 = element0$ / inlinedVal2;
      tmp6 = element1$ / inlinedVal2;
      tmp7 = element2$ / inlinedVal2;
      tmp8 = globalThis.Object.freeze([
        tmp5,
        tmp6,
        tmp7
      ]);
      if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 3) {
        element0$1 = runtime.Tuple.get(tmp8, 0);
        element1$1 = runtime.Tuple.get(tmp8, 1);
        element2$1 = runtime.Tuple.get(tmp8, 2);
        if (runtime.Tuple.isArrayLike(vup) && vup.length === 3) {
          let fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8, inlinedVal3, element2$3, element1$3, element0$3, element2$4, element1$4, element0$4, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26;
          element0$2 = runtime.Tuple.get(vup, 0);
          element1$2 = runtime.Tuple.get(vup, 1);
          element2$2 = runtime.Tuple.get(vup, 2);
          tmp9 = element1$1 * element2$2;
          tmp10 = element1$2 * element2$1;
          tmp11 = tmp9 - tmp10;
          tmp12 = element2$1 * element0$2;
          tmp13 = element2$2 * element0$1;
          tmp14 = tmp12 - tmp13;
          tmp15 = element0$1 * element1$2;
          tmp16 = element0$2 * element1$1;
          tmp17 = tmp15 - tmp16;
          fv_tmp = tmp11 * tmp11;
          fv_tmp1 = tmp14 * tmp14;
          fv_tmp2 = fv_tmp + fv_tmp1;
          fv_tmp3 = tmp17 * tmp17;
          fv_tmp4 = fv_tmp2 + fv_tmp3;
          inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(fv_tmp4));
          fv_tmp5 = tmp11 / inlinedVal3;
          fv_tmp6 = tmp14 / inlinedVal3;
          fv_tmp7 = tmp17 / inlinedVal3;
          fv_tmp8 = globalThis.Object.freeze([
            fv_tmp5,
            fv_tmp6,
            fv_tmp7
          ]);
          if (runtime.Tuple.isArrayLike(fv_tmp8) && fv_tmp8.length === 3) {
            element0$3 = runtime.Tuple.get(fv_tmp8, 0);
            element1$3 = runtime.Tuple.get(fv_tmp8, 1);
            element2$3 = runtime.Tuple.get(fv_tmp8, 2);
            if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 3) {
              let fv_tmp9, fv_tmp10, fv_tmp11, fv_tmp12, fv_tmp13, fv_tmp14, fv_tmp15, fv_tmp16, inlinedVal4, fv_tmp17, fv_tmp18, fv_tmp19, fv_magx, fv_tmp20, fv_tmp21, fv_tmp22, fv_magy, fv_scrnx, fv_tmp23, fv_tmp24, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, element2$5, element1$5, element0$5, element2$6, element1$6, element0$6, tmp27, tmp28, tmp29, element2$7, element1$7, element0$7, tmp30, tmp31, tmp32, tmp33, tmp34, fv_tmp25, fv_tmp26, fv_tmp27, inlinedVal9;
              element0$4 = runtime.Tuple.get(tmp8, 0);
              element1$4 = runtime.Tuple.get(tmp8, 1);
              element2$4 = runtime.Tuple.get(tmp8, 2);
              tmp18 = element1$3 * element2$4;
              tmp19 = element1$4 * element2$3;
              tmp20 = tmp18 - tmp19;
              tmp21 = element2$3 * element0$4;
              tmp22 = element2$4 * element0$3;
              tmp23 = tmp21 - tmp22;
              tmp24 = element0$3 * element1$4;
              tmp25 = element0$4 * element1$3;
              tmp26 = tmp24 - tmp25;
              fv_tmp9 = tmp20 * tmp20;
              fv_tmp10 = tmp23 * tmp23;
              fv_tmp11 = fv_tmp9 + fv_tmp10;
              fv_tmp12 = tmp26 * tmp26;
              fv_tmp13 = fv_tmp11 + fv_tmp12;
              inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(fv_tmp13));
              fv_tmp14 = tmp20 / inlinedVal4;
              fv_tmp15 = tmp23 / inlinedVal4;
              fv_tmp16 = tmp26 / inlinedVal4;
              fv_tmp17 = 2.0 * inlinedVal2;
              fv_tmp18 = fov / 2;
              tmp34 = fv_tmp18 * sphere1.pi;
              inlinedVal5 = tmp34 / 180.0;
              inlinedVal6 = runtime.safeCall(globalThis.Math.tan(inlinedVal5));
              fv_tmp19 = fv_tmp17 * inlinedVal6;
              fv_magx = fv_tmp19 / 30;
              fv_tmp20 = 2.0 * inlinedVal2;
              fv_tmp21 = fov / 2;
              tmp33 = fv_tmp21 * sphere1.pi;
              inlinedVal7 = tmp33 / 180.0;
              inlinedVal8 = runtime.safeCall(globalThis.Math.tan(inlinedVal7));
              fv_tmp22 = fv_tmp20 * inlinedVal8;
              fv_magy = fv_tmp22 / 30;
              fv_scrnx = sphere1.#vecscale(fv_tmp8, fv_magx);
              fv_tmp25 = fv_magy * fv_tmp14;
              fv_tmp26 = fv_magy * fv_tmp15;
              fv_tmp27 = fv_magy * fv_tmp16;
              inlinedVal9 = globalThis.Object.freeze([
                fv_tmp25,
                fv_tmp26,
                fv_tmp27
              ]);
              fv_tmp23 = 0.5 * 30;
              if (runtime.Tuple.isArrayLike(fv_scrnx) && fv_scrnx.length === 3) {
                element0$7 = runtime.Tuple.get(fv_scrnx, 0);
                element1$7 = runtime.Tuple.get(fv_scrnx, 1);
                element2$7 = runtime.Tuple.get(fv_scrnx, 2);
                tmp30 = fv_tmp23 * element0$7;
                tmp31 = fv_tmp23 * element1$7;
                tmp32 = fv_tmp23 * element2$7;
                fv_tmp24 = 0.5 * 30;
                if (runtime.Tuple.isArrayLike(inlinedVal9) && inlinedVal9.length === 3) {
                  let fv_tmp28, fv_tmp29, fv_tmp30;
                  element0$6 = runtime.Tuple.get(inlinedVal9, 0);
                  element1$6 = runtime.Tuple.get(inlinedVal9, 1);
                  element2$6 = runtime.Tuple.get(inlinedVal9, 2);
                  tmp27 = fv_tmp24 * element0$6;
                  tmp28 = fv_tmp24 * element1$6;
                  tmp29 = fv_tmp24 * element2$6;
                  fv_tmp28 = tmp30 + tmp27;
                  fv_tmp29 = tmp31 + tmp28;
                  fv_tmp30 = tmp32 + tmp29;
                  if (runtime.Tuple.isArrayLike(initfirstray) && initfirstray.length === 3) {
                    let fv_tmp31, fv_tmp32, fv_tmp33, inlinedVal10, inlinedVal11;
                    element0$5 = runtime.Tuple.get(initfirstray, 0);
                    element1$5 = runtime.Tuple.get(initfirstray, 1);
                    element2$5 = runtime.Tuple.get(initfirstray, 2);
                    fv_tmp31 = element0$5 - fv_tmp28;
                    fv_tmp32 = element1$5 - fv_tmp29;
                    fv_tmp33 = element2$5 - fv_tmp30;
                    inlinedVal10 = globalThis.Object.freeze([
                      fv_tmp31,
                      fv_tmp32,
                      fv_tmp33
                    ]);
                    inlinedVal11 = main_testSphere_nofib_run_ray_enumFromTo$enumFromTo$worker(0, 29, undefined, undefined, undefined, undefined, undefined, 30, undefined, sphere1, lights, fv_scrnx, inlinedVal10, inlinedVal9);
                    inlinedVal = inlinedVal11(undefined, undefined, undefined, undefined, undefined, main_testSphere_nofib_run_snd$snd, undefined);
                    inlinedVal1 = runtime.safeCall(globalThis.BigInt(0));
                    f1 = lambda$();
                    return inlinedVal(inlinedVal1, undefined, undefined, undefined, undefined, undefined, f1)
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
  static [definitionMetadata] = ["class", "sphere"];
});
export default sphere1;
