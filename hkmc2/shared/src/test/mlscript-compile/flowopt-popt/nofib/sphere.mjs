const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
const map$accessorSymbol = globalThis.Symbol("map");
const enumFromTo$accessorSymbol = globalThis.Symbol("enumFromTo");
const foldr$accessorSymbol = globalThis.Symbol("foldr");
const vecadd$accessorSymbol = globalThis.Symbol("vecadd");
const vecsub$accessorSymbol = globalThis.Symbol("vecsub");
const vecmult$accessorSymbol = globalThis.Symbol("vecmult");
const vecnorm$accessorSymbol = globalThis.Symbol("vecnorm");
const vecscale$accessorSymbol = globalThis.Symbol("vecscale");
const vecdot$accessorSymbol = globalThis.Symbol("vecdot");
const is_zerovector$accessorSymbol = globalThis.Symbol("is_zerovector");
const sphereintersect$accessorSymbol = globalThis.Symbol("sphereintersect");
const trace$accessorSymbol = globalThis.Symbol("trace");
const refractray$accessorSymbol = globalThis.Symbol("refractray");
let lscomp, lscomp1, lscomp2, lscomp3, lscomp4, lscomp5, lscomp6, lscomp7, f, sphmap, sphere1, main_testSphere_nofib_run_hash_lambda$_lambda$lambda, main_testSphere_nofib_run_hash_lambda$$lambda$, main_testSphere_nofib_run_ray_lscomp1_lscomp2$lscomp1_lscomp2, main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray, main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray$lightray, main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$$lambda$, main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray_shadowed_trace_f$f, main_testSphere_nofib_run_snd$snd;
main_testSphere_nofib_run_hash_lambda$_lambda$lambda = function main_testSphere_nofib_run_hash_lambda$_lambda$lambda(rgb, acc) {
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
};
main_testSphere_nofib_run_hash_lambda$$lambda$ = function main_testSphere_nofib_run_hash_lambda$$lambda$() {
  return (rgb, acc) => {
    return main_testSphere_nofib_run_hash_lambda$_lambda$lambda(rgb, acc)
  }
};
main_testSphere_nofib_run_ray_lscomp1_lscomp2$lscomp1_lscomp2 = function main_testSphere_nofib_run_ray_lscomp1_lscomp2$lscomp1_lscomp2(id, param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param6 instanceof NofibPrelude.Nil.class) {
            return NofibPrelude.Nil
          } else if (param6 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$ = param6.head;
            arg$Cons$1$ = param6.tail;
            tmp = param1 - 1;
            tmp1 = param0[enumFromTo$accessorSymbol](0, tmp);
            param6 = arg$Cons$0$;
            param7 = arg$Cons$1$;
            param8 = tmp1;
            id = 1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
          if (param8 instanceof NofibPrelude.Nil.class) {
            param6 = param7;
            id = 0;
            continue loopLabel
          } else if (param8 instanceof NofibPrelude.Cons.class) {
            let spheres, inlinedVal, pos, scrut, scrut1, element0$, element2$, element1$, element0$1, tmp2, tmp3, tmp4, tmp5, tmp6;
            arg$Cons$0$ = param8.head;
            arg$Cons$1$ = param8.tail;
            spheres = param0.testspheres;
            pos = sphere1.lookfrom;
            tmp2 = sphere1[vecscale$accessorSymbol](param3, param6);
            tmp3 = sphere1[vecadd$accessorSymbol](param4, tmp2);
            tmp4 = sphere1[vecscale$accessorSymbol](param5, arg$Cons$0$);
            tmp5 = sphere1[vecadd$accessorSymbol](tmp3, tmp4);
            scrut = sphere1[vecnorm$accessorSymbol](tmp5);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              element0$ = runtime.Tuple.get(scrut, 0);
              scrut1 = sphere1[trace$accessorSymbol](spheres, pos, element0$);
              if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
                element0$1 = runtime.Tuple.get(scrut1, 0);
                element1$ = runtime.Tuple.get(scrut1, 1);
                element2$ = runtime.Tuple.get(scrut1, 2);
                if (element0$1 === true) {
                  let inlinedVal1;
                  tmp6 = globalThis.Object.freeze([
                    1.0,
                    1.0,
                    1.0
                  ]);
                  inlinedVal1 = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(0, param2, element2$, pos, element0$, element1$, tmp6, undefined, undefined);
                  inlinedVal = inlinedVal1;
                } else {
                  inlinedVal = sphere1.background;
                }
                tmp = globalThis.Object.freeze([
                  undefined,
                  inlinedVal
                ]);
                tmp1 = main_testSphere_nofib_run_ray_lscomp1_lscomp2$lscomp1_lscomp2(1, param0, param1, param2, param3, param4, param5, param6, param7, arg$Cons$1$);
                return NofibPrelude.Cons(tmp, tmp1)
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
main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray = function main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let hitpos, ambientlight, amb, refl, simple, trintensity, scrut, reflsurf, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, element1$, element0$, tmp7, lambda$here, inlinedVal, inlinedVal1, inlinedVal2;
          tmp = sphere1[vecscale$accessorSymbol](param3, param4);
          hitpos = sphere1[vecadd$accessorSymbol](param2, tmp);
          ambientlight = globalThis.Object.freeze([
            1.0,
            1.0,
            1.0
          ]);
          if (param1 instanceof sphere1.Sphere.class) {
            let tmp8, tmp9, tmp10, inlinedVal3, inlinedVal4, arg$Cons$0$, tmp11, tmp12, inlinedVal5, inlinedVal6, arg$Cons$0$1, tmp13, arg$Sphere$0$, arg$Sphere$1$, tmp14, tmp15, tmp16, tmp17, tmp18, inlinedVal7, inlinedVal8, arg$Cons$0$2;
            inlinedVal = param1.surface;
            tmp16 = lscomp(sphere1, inlinedVal);
            tmp17 = globalThis.Object.freeze([
              0.0,
              0.0,
              0.0
            ]);
            tmp18 = NofibPrelude.Cons(tmp17, undefined);
            if (tmp16 instanceof NofibPrelude.Nil.class) {
              inlinedVal7 = tmp18;
            } else if (tmp16 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$2 = tmp16.head;
              inlinedVal7 = NofibPrelude.Cons(arg$Cons$0$2, undefined);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal7 instanceof NofibPrelude.Cons.class) {
              inlinedVal8 = inlinedVal7.head;
              amb = sphere1[vecmult$accessorSymbol](ambientlight, inlinedVal8);
              if (param1 instanceof sphere1.Sphere.class) {
                arg$Sphere$0$ = param1.pos;
                arg$Sphere$1$ = param1.radius;
                tmp14 = sphere1[vecsub$accessorSymbol](hitpos, arg$Sphere$0$);
                tmp15 = 1 / arg$Sphere$1$;
                inlinedVal1 = sphere1[vecscale$accessorSymbol](tmp14, tmp15);
                tmp1 = sphere1[vecdot$accessorSymbol](param3, inlinedVal1);
                tmp2 = 2.0 * tmp1;
                tmp3 = - tmp2;
                tmp4 = sphere1[vecscale$accessorSymbol](inlinedVal1, tmp3);
                refl = sphere1[vecadd$accessorSymbol](param3, tmp4);
                lambda$here = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$$lambda$(sphere1, hitpos, inlinedVal, inlinedVal1, refl);
                tmp5 = sphere1[map$accessorSymbol](lambda$here, param0);
                tmp13 = globalThis.Object.freeze([
                  0.0,
                  0.0,
                  0.0
                ]);
                inlinedVal2 = sphere1[foldr$accessorSymbol](sphere1[vecadd$accessorSymbol], tmp13, tmp5);
                tmp11 = lscomp5(sphere1, inlinedVal);
                tmp12 = NofibPrelude.Cons(0.0, undefined);
                if (tmp11 instanceof NofibPrelude.Nil.class) {
                  inlinedVal5 = tmp12;
                } else if (tmp11 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$1 = tmp11.head;
                  inlinedVal5 = NofibPrelude.Cons(arg$Cons$0$1, undefined);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal5 instanceof NofibPrelude.Cons.class) {
                  inlinedVal6 = inlinedVal5.head;
                  simple = sphere1[vecadd$accessorSymbol](amb, inlinedVal2);
                  tmp8 = lscomp7(sphere1, inlinedVal);
                  tmp9 = globalThis.Object.freeze([
                    1.0,
                    1.0,
                    1.0
                  ]);
                  tmp10 = NofibPrelude.Cons(tmp9, undefined);
                  if (tmp8 instanceof NofibPrelude.Nil.class) {
                    inlinedVal3 = tmp10;
                  } else if (tmp8 instanceof NofibPrelude.Cons.class) {
                    arg$Cons$0$ = tmp8.head;
                    inlinedVal3 = NofibPrelude.Cons(arg$Cons$0$, undefined);
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                  if (inlinedVal3 instanceof NofibPrelude.Cons.class) {
                    inlinedVal4 = inlinedVal3.head;
                    trintensity = sphere1[vecscale$accessorSymbol](inlinedVal4, inlinedVal6);
                    scrut = inlinedVal6 < sphere1.epsilon;
                    if (scrut === true) {
                      tmp6 = globalThis.Object.freeze([
                        false,
                        simple
                      ]);
                    } else {
                      let tmp19, tmp20, inlinedVal9, inlinedVal10, arg$Cons$0$3;
                      tmp19 = lscomp6(sphere1, inlinedVal);
                      tmp20 = NofibPrelude.Cons(1.0, undefined);
                      if (tmp19 instanceof NofibPrelude.Nil.class) {
                        if (tmp20 instanceof NofibPrelude.Cons.class) {
                          inlinedVal10 = tmp20.head;
                          tmp6 = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(1, param0, simple, hitpos, param3, inlinedVal10, trintensity, param5, inlinedVal1);
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                      } else if (tmp19 instanceof NofibPrelude.Cons.class) {
                        arg$Cons$0$3 = tmp19.head;
                        inlinedVal9 = NofibPrelude.Cons(arg$Cons$0$3, undefined);
                        inlinedVal10 = inlinedVal9.head;
                        tmp6 = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(1, param0, simple, hitpos, param3, inlinedVal10, trintensity, param5, inlinedVal1);
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                    }
                    if (runtime.Tuple.isArrayLike(tmp6) && tmp6.length === 2) {
                      let tmp19, tmp20, inlinedVal9, inlinedVal10, arg$Cons$0$3, tmp21, tmp22, tmp23, inlinedVal11, inlinedVal12, arg$Cons$0$4;
                      element0$ = runtime.Tuple.get(tmp6, 0);
                      element1$ = runtime.Tuple.get(tmp6, 1);
                      tmp21 = lscomp2(sphere1, inlinedVal);
                      tmp22 = globalThis.Object.freeze([
                        0.0,
                        0.0,
                        0.0
                      ]);
                      tmp23 = NofibPrelude.Cons(tmp22, undefined);
                      if (tmp21 instanceof NofibPrelude.Nil.class) {
                        inlinedVal11 = tmp23;
                      } else if (tmp21 instanceof NofibPrelude.Cons.class) {
                        arg$Cons$0$4 = tmp21.head;
                        inlinedVal11 = NofibPrelude.Cons(arg$Cons$0$4, undefined);
                      } else {
                        throw globalThis.Object.freeze(new globalThis.Error("match error"))
                      }
                      if (inlinedVal11 instanceof NofibPrelude.Cons.class) {
                        inlinedVal12 = inlinedVal11.head;
                        tmp19 = lscomp4(sphere1, inlinedVal);
                        tmp20 = NofibPrelude.Cons(0.0, undefined);
                        if (tmp19 instanceof NofibPrelude.Nil.class) {
                          inlinedVal9 = tmp20;
                        } else if (tmp19 instanceof NofibPrelude.Cons.class) {
                          arg$Cons$0$3 = tmp19.head;
                          inlinedVal9 = NofibPrelude.Cons(arg$Cons$0$3, undefined);
                        } else {
                          throw globalThis.Object.freeze(new globalThis.Error("match error"))
                        }
                        if (inlinedVal9 instanceof NofibPrelude.Cons.class) {
                          inlinedVal10 = inlinedVal9.head;
                          reflsurf = sphere1[vecscale$accessorSymbol](inlinedVal12, inlinedVal10);
                          if (element0$ === true) {
                            tmp7 = sphere1[vecadd$accessorSymbol](trintensity, reflsurf);
                          } else {
                            tmp7 = reflsurf;
                          }
                          scrut1 = sphere1[is_zerovector$accessorSymbol](tmp7);
                          if (scrut1 === true) {
                            return element1$
                          }
                          {
                            let param0_tmp;
                            param0_tmp = param0;
                            id = 2;
                            param0 = hitpos;
                            param1 = refl;
                            param2 = param0_tmp;
                            param3 = tmp7;
                            param4 = param5;
                            param5 = element1$;
                            param6 = undefined;
                            param7 = undefined;
                            continue loopLabel;
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
      case 1:
        {
          let newcontrib, scrut, nearpos, scrut1, scrut2, element1$, tmp, element2$, element1$1, element0$, tmp1, tmp2, tmp3;
          newcontrib = sphere1[vecmult$accessorSymbol](param5, param6);
          scrut = sphere1[refractray$accessorSymbol](param4, param3, param7);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            element1$ = runtime.Tuple.get(scrut, 1);
            tmp = sphere1[vecscale$accessorSymbol](element1$, sphere1.epsilon);
            nearpos = sphere1[vecadd$accessorSymbol](param2, tmp);
            scrut1 = sphere1[trace$accessorSymbol](sphere1.testspheres, nearpos, element1$);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 3) {
              element0$ = runtime.Tuple.get(scrut1, 0);
              element1$1 = runtime.Tuple.get(scrut1, 1);
              element2$ = runtime.Tuple.get(scrut1, 2);
              if (element0$ === true) {
                tmp1 = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(0, param0, element2$, nearpos, element1$, element1$1, newcontrib, undefined, undefined);
              } else {
                tmp1 = sphere1.background;
              }
              scrut2 = sphere1[is_zerovector$accessorSymbol](newcontrib);
              if (scrut2 === true) {
                return globalThis.Object.freeze([
                  false,
                  param1
                ])
              }
              tmp2 = sphere1[vecmult$accessorSymbol](tmp1, param5);
              tmp3 = sphere1[vecadd$accessorSymbol](tmp2, param1);
              return globalThis.Object.freeze([
                false,
                tmp3
              ]);
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 2:
        {
          let newcontrib, nearpos, scrut, scrut1, tmp, element2$, element1$, element0$, tmp1, tmp2;
          newcontrib = sphere1[vecmult$accessorSymbol](param3, param4);
          tmp = sphere1[vecscale$accessorSymbol](param1, sphere1.epsilon);
          nearpos = sphere1[vecadd$accessorSymbol](param0, tmp);
          scrut = sphere1[trace$accessorSymbol](sphere1.testspheres, nearpos, param1);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 3) {
            element0$ = runtime.Tuple.get(scrut, 0);
            element1$ = runtime.Tuple.get(scrut, 1);
            element2$ = runtime.Tuple.get(scrut, 2);
            if (element0$ === true) {
              tmp1 = main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray$shade_transmitray_reflectray(0, param2, element2$, nearpos, param1, element1$, newcontrib, undefined, undefined);
            } else {
              tmp1 = sphere1.background;
            }
            scrut1 = sphere1[is_zerovector$accessorSymbol](newcontrib);
            if (scrut1 === true) {
              return param5
            }
            tmp2 = sphere1[vecmult$accessorSymbol](tmp1, param3);
            return sphere1[vecadd$accessorSymbol](param5, tmp2);
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
    }
  }
};
main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray$lightray = function main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray$lightray(l, pos, norm, refl, surf) {
  let cosangle, scrut, cosalpha, diffcont, scrut1, cosalpha1, diffcont1, scrut2, element0$, element1$, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, arg$Point$0$, arg$Directional$0$, tmp8, tmp9;
  if (l instanceof sphere1.Directional.class) {
    let inlinedVal1;
    arg$Directional$0$ = l.x;
    tmp8 = sphere1[vecnorm$accessorSymbol](arg$Directional$0$);
    if (runtime.Tuple.isArrayLike(tmp8) && tmp8.length === 2) {
      inlinedVal1 = runtime.Tuple.get(tmp8, 0);
      inlinedVal = globalThis.Object.freeze([
        inlinedVal1,
        sphere1.infinity
      ]);
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else if (l instanceof sphere1.Point.class) {
    arg$Point$0$ = l.x;
    tmp9 = sphere1[vecsub$accessorSymbol](arg$Point$0$, pos);
    inlinedVal = sphere1[vecnorm$accessorSymbol](tmp9);
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
    let inlinedVal1, inlinedVal2, scrut3, element0$2, tmp10, tmp11, spheres, inlinedVal3, dists, scrut4;
    element0$ = runtime.Tuple.get(inlinedVal, 0);
    cosangle = sphere1[vecdot$accessorSymbol](element0$, norm);
    if (l instanceof sphere1.Directional.class) {
      inlinedVal1 = l.y;
    } else if (l instanceof sphere1.Point.class) {
      inlinedVal1 = l.y;
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
    tmp10 = sphere1[vecscale$accessorSymbol](element0$, sphere1.epsilon);
    tmp11 = sphere1[vecadd$accessorSymbol](pos, tmp10);
    spheres = sphere1.testspheres;
    dists = sphmap(sphere1, tmp11, element0$, spheres);
    if (dists instanceof NofibPrelude.Nil.class) {
      let inlinedVal4;
      if (spheres instanceof NofibPrelude.Cons.class) {
        inlinedVal4 = spheres.head;
        inlinedVal3 = globalThis.Object.freeze([
          false,
          sphere1.infinity,
          inlinedVal4
        ]);
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      let inlinedVal4, inlinedVal5;
      if (dists instanceof NofibPrelude.Cons.class) {
        inlinedVal4 = dists.head;
        if (dists instanceof NofibPrelude.Cons.class) {
          inlinedVal5 = dists.tail;
          scrut4 = sphere1[foldr$accessorSymbol](main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray_shadowed_trace_f$f, inlinedVal4, inlinedVal5);
          if (runtime.Tuple.isArrayLike(scrut4) && scrut4.length === 2) {
            inlinedVal3 = globalThis.Object.freeze([
              true,
              undefined,
              undefined
            ]);
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
    if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
      element0$2 = runtime.Tuple.get(inlinedVal3, 0);
      scrut3 = ! element0$2;
      if (scrut3 === true) {
        inlinedVal2 = globalThis.Object.freeze([
          false,
          inlinedVal1
        ]);
      } else {
        inlinedVal2 = globalThis.Object.freeze([
          true,
          inlinedVal1
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
        element0$1 = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        if (element0$1 === true) {
          return globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ])
        }
        {
          let tmp12, tmp13, inlinedVal4, inlinedVal5, arg$Cons$0$, tmp14, tmp15, tmp16, inlinedVal6, inlinedVal7, arg$Cons$0$1;
          tmp14 = lscomp1(sphere1, surf);
          tmp15 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          tmp16 = NofibPrelude.Cons(tmp15, undefined);
          if (tmp14 instanceof NofibPrelude.Nil.class) {
            inlinedVal6 = tmp16;
          } else if (tmp14 instanceof NofibPrelude.Cons.class) {
            arg$Cons$0$1 = tmp14.head;
            inlinedVal6 = NofibPrelude.Cons(arg$Cons$0$1, undefined);
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
          if (inlinedVal6 instanceof NofibPrelude.Cons.class) {
            inlinedVal7 = inlinedVal6.head;
            tmp12 = lscomp3(sphere1, surf);
            tmp13 = NofibPrelude.Cons(8.0, undefined);
            if (tmp12 instanceof NofibPrelude.Nil.class) {
              inlinedVal4 = tmp13;
            } else if (tmp12 instanceof NofibPrelude.Cons.class) {
              arg$Cons$0$ = tmp12.head;
              inlinedVal4 = NofibPrelude.Cons(arg$Cons$0$, undefined);
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
            if (inlinedVal4 instanceof NofibPrelude.Cons.class) {
              inlinedVal5 = inlinedVal4.head;
              scrut = cosangle <= 0.0;
              if (scrut === true) {
                let tmp17, tmp18, tmp19, inlinedVal8, inlinedVal9, arg$Cons$0$2;
                tmp17 = lscomp7(sphere1, surf);
                tmp18 = globalThis.Object.freeze([
                  1.0,
                  1.0,
                  1.0
                ]);
                tmp19 = NofibPrelude.Cons(tmp18, undefined);
                if (tmp17 instanceof NofibPrelude.Nil.class) {
                  inlinedVal8 = tmp19;
                } else if (tmp17 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = tmp17.head;
                  inlinedVal8 = NofibPrelude.Cons(arg$Cons$0$2, undefined);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal8 instanceof NofibPrelude.Cons.class) {
                  inlinedVal9 = inlinedVal8.head;
                  tmp = sphere1[vecdot$accessorSymbol](refl, element0$);
                  cosalpha = - tmp;
                  tmp1 = - cosangle;
                  tmp2 = sphere1[vecscale$accessorSymbol](inlinedVal7, tmp1);
                  diffcont = sphere1[vecmult$accessorSymbol](tmp2, element1$);
                  scrut1 = cosalpha <= 0.0;
                  if (scrut1 === true) {
                    tmp3 = globalThis.Object.freeze([
                      0.0,
                      0.0,
                      0.0
                    ]);
                    return sphere1[vecadd$accessorSymbol](diffcont, tmp3)
                  }
                  {
                    let inlinedVal10;
                    inlinedVal10 = runtime.safeCall(globalThis.Math.pow(cosalpha, inlinedVal5));
                    tmp4 = sphere1[vecscale$accessorSymbol](inlinedVal9, inlinedVal10);
                    tmp3 = sphere1[vecmult$accessorSymbol](tmp4, element1$);
                    return sphere1[vecadd$accessorSymbol](diffcont, tmp3);
                  }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
              {
                let tmp17, tmp18, tmp19, inlinedVal8, inlinedVal9, arg$Cons$0$2;
                tmp17 = lscomp2(sphere1, surf);
                tmp18 = globalThis.Object.freeze([
                  0.0,
                  0.0,
                  0.0
                ]);
                tmp19 = NofibPrelude.Cons(tmp18, undefined);
                if (tmp17 instanceof NofibPrelude.Nil.class) {
                  inlinedVal8 = tmp19;
                } else if (tmp17 instanceof NofibPrelude.Cons.class) {
                  arg$Cons$0$2 = tmp17.head;
                  inlinedVal8 = NofibPrelude.Cons(arg$Cons$0$2, undefined);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
                if (inlinedVal8 instanceof NofibPrelude.Cons.class) {
                  inlinedVal9 = inlinedVal8.head;
                  cosalpha1 = sphere1[vecdot$accessorSymbol](refl, element0$);
                  tmp5 = sphere1[vecscale$accessorSymbol](inlinedVal7, cosangle);
                  diffcont1 = sphere1[vecmult$accessorSymbol](tmp5, element1$);
                  scrut2 = cosalpha1 < 0.0;
                  if (scrut2 === true) {
                    tmp6 = globalThis.Object.freeze([
                      0.0,
                      0.0,
                      0.0
                    ]);
                    return sphere1[vecadd$accessorSymbol](diffcont1, tmp6)
                  }
                  {
                    let inlinedVal10;
                    inlinedVal10 = runtime.safeCall(globalThis.Math.pow(cosalpha1, inlinedVal5));
                    tmp7 = sphere1[vecscale$accessorSymbol](inlinedVal9, inlinedVal10);
                    tmp6 = sphere1[vecmult$accessorSymbol](tmp7, element1$);
                    return sphere1[vecadd$accessorSymbol](diffcont1, tmp6);
                  }
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
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
main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$$lambda$ = function main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$$lambda$(sphere2, hitpos, surf, norm, refl) {
  return (l) => {
    return main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray$lightray(l, hitpos, norm, refl, surf)
  }
};
main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray_shadowed_trace_f$f = function main_testSphere_nofib_run_ray_lscomp1_lscomp2_tracepixel_shade_shade_transmitray_reflectray_lambda$_lightray_shadowed_trace_f$f(d1s1, d2s2) {
  let scrut, element0$, element0$1;
  if (runtime.Tuple.isArrayLike(d1s1) && d1s1.length === 2) {
    element0$ = runtime.Tuple.get(d1s1, 0);
    if (runtime.Tuple.isArrayLike(d2s2) && d2s2.length === 2) {
      element0$1 = runtime.Tuple.get(d2s2, 0);
      scrut = element0$ < element0$1;
      if (scrut === true) {
        return globalThis.Object.freeze([
          element0$,
          undefined
        ])
      }
      return globalThis.Object.freeze([
        element0$1,
        undefined
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_testSphere_nofib_run_snd$snd = function main_testSphere_nofib_run_snd$snd(x) {
  if (runtime.Tuple.isArrayLike(x) && x.length === 2) {
    return runtime.Tuple.get(x, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
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
sphmap = function sphmap(sphere2, pos, dir, xss) {
  loopLabel: while (true) {
    let scrut, arg$Cons$0$, arg$Cons$1$, element1$, element0$, tmp, tmp1;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xss.head;
      arg$Cons$1$ = xss.tail;
      scrut = sphere2[sphereintersect$accessorSymbol](pos, dir, arg$Cons$0$);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        if (element0$ === true) {
          tmp = globalThis.Object.freeze([
            element1$,
            arg$Cons$0$
          ]);
          tmp1 = sphmap(sphere2, pos, dir, arg$Cons$1$);
          return NofibPrelude.Cons(tmp, tmp1)
        }
        xss = arg$Cons$1$;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp7 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Body$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Body.class) {
        arg$Body$0$ = arg$Cons$0$.v;
        tmp = lscomp7(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Body$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp6 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Refract$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Refract.class) {
        arg$Refract$0$ = arg$Cons$0$.v;
        tmp = lscomp6(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Refract$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp5 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Transmit$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Transmit.class) {
        arg$Transmit$0$ = arg$Cons$0$.v;
        tmp = lscomp5(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Transmit$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp4 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Reflect$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Reflect.class) {
        arg$Reflect$0$ = arg$Cons$0$.v;
        tmp = lscomp4(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Reflect$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp3 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specpow$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specpow.class) {
        arg$Specpow$0$ = arg$Cons$0$.v;
        tmp = lscomp3(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Specpow$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp2 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Specular$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Specular.class) {
        arg$Specular$0$ = arg$Cons$0$.v;
        tmp = lscomp2(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Specular$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp1 = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Diffuse$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Diffuse.class) {
        arg$Diffuse$0$ = arg$Cons$0$.v;
        tmp = lscomp1(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Diffuse$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lscomp = function lscomp(sphere2, ls) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$, arg$Ambient$0$, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = ls.head;
      arg$Cons$1$ = ls.tail;
      if (arg$Cons$0$ instanceof sphere2.Ambient.class) {
        arg$Ambient$0$ = arg$Cons$0$.v;
        tmp = lscomp(sphere2, arg$Cons$1$);
        return NofibPrelude.Cons(arg$Ambient$0$, tmp)
      }
      ls = arg$Cons$1$;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
(class sphere {
  static {
    sphere1 = this
  }
  static get [map$accessorSymbol]() { return sphere.#map; }
  static get [enumFromTo$accessorSymbol]() { return sphere.#enumFromTo; }
  static get [foldr$accessorSymbol]() { return sphere.#foldr; }
  static get [vecadd$accessorSymbol]() { return sphere.#vecadd; }
  static get [vecsub$accessorSymbol]() { return sphere.#vecsub; }
  static get [vecmult$accessorSymbol]() { return sphere.#vecmult; }
  static get [vecnorm$accessorSymbol]() { return sphere.#vecnorm; }
  static get [vecscale$accessorSymbol]() { return sphere.#vecscale; }
  static get [vecdot$accessorSymbol]() { return sphere.#vecdot; }
  static get [is_zerovector$accessorSymbol]() { return sphere.#is_zerovector; }
  static get [sphereintersect$accessorSymbol]() { return sphere.#sphereintersect; }
  static get [trace$accessorSymbol]() { return sphere.#trace; }
  static get [refractray$accessorSymbol]() { return sphere.#refractray; }
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
  static #head(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tail(l) {
    if (l instanceof NofibPrelude.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #map(f1, xs) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      arg$Cons$0$ = xs.head;
      arg$Cons$1$ = xs.tail;
      tmp = runtime.safeCall(f1(arg$Cons$0$));
      tmp1 = sphere.#map(f1, arg$Cons$1$);
      return NofibPrelude.Cons(tmp, tmp1)
    } else if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #enumFromTo(a, b) {
    let scrut, tmp, tmp1;
    scrut = a <= b;
    if (scrut === true) {
      tmp = a + 1;
      tmp1 = sphere.#enumFromTo(tmp, b);
      return NofibPrelude.Cons(a, tmp1)
    }
    return NofibPrelude.Nil;
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
  static #null_(ls) {
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    }
    return false;
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
  static #vecnorm(xyz) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(xyz) && xyz.length === 3) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(xyz, 0);
      element1$ = runtime.Tuple.get(xyz, 1);
      element2$ = runtime.Tuple.get(xyz, 2);
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
      return globalThis.Object.freeze([
        tmp8,
        inlinedVal
      ])
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
  static #veccross(x1, x2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(x1) && x1.length === 3) {
      element0$ = runtime.Tuple.get(x1, 0);
      element1$ = runtime.Tuple.get(x1, 1);
      element2$ = runtime.Tuple.get(x1, 2);
      if (runtime.Tuple.isArrayLike(x2) && x2.length === 3) {
        element0$1 = runtime.Tuple.get(x2, 0);
        element1$1 = runtime.Tuple.get(x2, 1);
        element2$1 = runtime.Tuple.get(x2, 2);
        tmp = element1$ * element2$1;
        tmp1 = element1$1 * element2$;
        tmp2 = tmp - tmp1;
        tmp3 = element2$ * element0$1;
        tmp4 = element2$1 * element0$;
        tmp5 = tmp3 - tmp4;
        tmp6 = element0$ * element1$1;
        tmp7 = element0$1 * element1$;
        tmp8 = tmp6 - tmp7;
        return globalThis.Object.freeze([
          tmp2,
          tmp5,
          tmp8
        ])
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
  static #sphereintersect(pos, dir, sp) {
    let m, bm, m2, disc, slo, shi, scrut, scrut1, scrut2, arg$Sphere$0$, arg$Sphere$1$, tmp, tmp1, tmp2, tmp3, tmp4;
    if (sp instanceof sphere.Sphere.class) {
      let inlinedVal, inlinedVal1;
      arg$Sphere$0$ = sp.pos;
      arg$Sphere$1$ = sp.radius;
      m = sphere.#vecsub(pos, arg$Sphere$0$);
      bm = sphere.#vecdot(m, dir);
      m2 = sphere.#vecdot(m, m);
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
        return globalThis.Object.freeze([
          false,
          0.0
        ])
      }
      scrut1 = slo < 0.0;
      if (scrut1 === true) {
        scrut2 = shi < 0.0;
        if (scrut2 === true) {
          return globalThis.Object.freeze([
            false,
            0.0
          ])
        }
        return globalThis.Object.freeze([
          true,
          shi
        ]);
      }
      return globalThis.Object.freeze([
        true,
        slo
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #trace(spheres, pos, dir) {
    let dists, scrut, scrut1, tmp, element1$, element0$, tmp1, tmp2;
    dists = sphmap(sphere, pos, dir, spheres);
    scrut = sphere.#null_(dists);
    if (scrut === true) {
      tmp = sphere.#head(spheres);
      return globalThis.Object.freeze([
        false,
        sphere.infinity,
        tmp
      ])
    }
    tmp1 = sphere.#head(dists);
    tmp2 = sphere.#tail(dists);
    scrut1 = sphere.#foldr(f, tmp1, tmp2);
    if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
      element0$ = runtime.Tuple.get(scrut1, 0);
      element1$ = runtime.Tuple.get(scrut1, 1);
      return globalThis.Object.freeze([
        true,
        element0$,
        element1$
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #refractray(newindex, olddir, innorm) {
    let dotp, scrut, disc, t, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, element2$, element1$, element0$, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    tmp = sphere.#vecdot(olddir, innorm);
    dotp = - tmp;
    scrut = dotp < 0.0;
    if (scrut === true) {
      tmp1 = - 1.0;
      tmp2 = sphere.#vecscale(innorm, tmp1);
      tmp3 = - dotp;
      tmp4 = 1.0 / newindex;
      tmp5 = globalThis.Object.freeze([
        tmp2,
        tmp3,
        tmp4
      ]);
    } else {
      tmp5 = globalThis.Object.freeze([
        innorm,
        dotp,
        newindex
      ]);
    }
    if (runtime.Tuple.isArrayLike(tmp5) && tmp5.length === 3) {
      let inlinedVal;
      element0$ = runtime.Tuple.get(tmp5, 0);
      element1$ = runtime.Tuple.get(tmp5, 1);
      element2$ = runtime.Tuple.get(tmp5, 2);
      tmp6 = element2$ * element2$;
      tmp7 = element1$ * element1$;
      tmp8 = 1.0 - tmp7;
      tmp9 = tmp6 * tmp8;
      disc = 1.0 - tmp9;
      tmp10 = element2$ * element1$;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      t = tmp10 - inlinedVal;
      scrut1 = disc < 0.0;
      if (scrut1 === true) {
        tmp11 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        return globalThis.Object.freeze([
          true,
          tmp11
        ])
      }
      tmp12 = sphere.#vecscale(element0$, t);
      tmp13 = sphere.#vecscale(olddir, element2$);
      tmp14 = sphere.#vecadd(tmp12, tmp13);
      return globalThis.Object.freeze([
        false,
        tmp14
      ]);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, inlinedVal, lights, element2$, element1$, element0$, tmp1, lookfrom, lookat, vup, fov, inlinedVal1, initfirstray, scrut, magx, magy, scrnx, scrny, firstray, scrut1, scrut2, element1$1, element0$1, element0$2, element0$3, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda$here, inlinedVal2;
    lights = sphere1.testlights;
    lookfrom = sphere1.lookfrom;
    lookat = sphere1.lookat;
    vup = sphere1.vup;
    fov = sphere1.fov;
    initfirstray = sphere1.#vecsub(lookat, lookfrom);
    scrut = sphere1.#vecnorm(initfirstray);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      element0$1 = runtime.Tuple.get(scrut, 0);
      element1$1 = runtime.Tuple.get(scrut, 1);
      tmp2 = sphere1.#veccross(element0$1, vup);
      scrut2 = sphere1.#vecnorm(tmp2);
      if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
        element0$2 = runtime.Tuple.get(scrut2, 0);
        tmp3 = sphere1.#veccross(element0$2, element0$1);
        scrut1 = sphere1.#vecnorm(tmp3);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          let inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, tmp15, tmp16;
          element0$3 = runtime.Tuple.get(scrut1, 0);
          tmp4 = 2.0 * element1$1;
          tmp5 = fov / 2;
          tmp15 = tmp5 * sphere1.pi;
          inlinedVal5 = tmp15 / 180.0;
          inlinedVal3 = runtime.safeCall(globalThis.Math.tan(inlinedVal5));
          tmp6 = tmp4 * inlinedVal3;
          magx = tmp6 / 30;
          tmp7 = 2.0 * element1$1;
          tmp8 = fov / 2;
          tmp16 = tmp8 * sphere1.pi;
          inlinedVal6 = tmp16 / 180.0;
          inlinedVal4 = runtime.safeCall(globalThis.Math.tan(inlinedVal6));
          tmp9 = tmp7 * inlinedVal4;
          magy = tmp9 / 30;
          scrnx = sphere1.#vecscale(element0$2, magx);
          scrny = sphere1.#vecscale(element0$3, magy);
          tmp10 = 0.5 * 30;
          tmp11 = sphere1.#vecscale(scrnx, tmp10);
          tmp12 = 0.5 * 30;
          tmp13 = sphere1.#vecscale(scrny, tmp12);
          tmp14 = sphere1.#vecadd(tmp11, tmp13);
          firstray = sphere1.#vecsub(initfirstray, tmp14);
          inlinedVal1 = globalThis.Object.freeze([
            firstray,
            scrnx,
            scrny
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
            element0$ = runtime.Tuple.get(inlinedVal1, 0);
            element1$ = runtime.Tuple.get(inlinedVal1, 1);
            element2$ = runtime.Tuple.get(inlinedVal1, 2);
            tmp1 = sphere1.#enumFromTo(0, 29);
            inlinedVal = main_testSphere_nofib_run_ray_lscomp1_lscomp2$lscomp1_lscomp2(0, sphere1, 30, lights, element1$, element0$, element2$, tmp1, undefined, undefined);
            tmp = sphere1.#map(main_testSphere_nofib_run_snd$snd, inlinedVal);
            inlinedVal2 = runtime.safeCall(globalThis.BigInt(0));
            lambda$here = main_testSphere_nofib_run_hash_lambda$$lambda$();
            return sphere1.#foldr(lambda$here, inlinedVal2, tmp)
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
