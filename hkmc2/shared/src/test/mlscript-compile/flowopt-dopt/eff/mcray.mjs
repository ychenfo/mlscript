const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const within$accessorSymbol = globalThis.Symbol("within");
const rgbAdd$accessorSymbol = globalThis.Symbol("rgbAdd");
const toByte$accessorSymbol = globalThis.Symbol("toByte");
const vec3Add$accessorSymbol = globalThis.Symbol("vec3Add");
const vec3Sub$accessorSymbol = globalThis.Symbol("vec3Sub");
const vec3Scale$accessorSymbol = globalThis.Symbol("vec3Scale");
const vec3Dot$accessorSymbol = globalThis.Symbol("vec3Dot");
const vec3RandomPointInSphere$accessorSymbol = globalThis.Symbol("vec3RandomPointInSphere");
const getEmission$accessorSymbol = globalThis.Symbol("getEmission");
const getHitInfo$accessorSymbol = globalThis.Symbol("getHitInfo");
const closer$accessorSymbol = globalThis.Symbol("closer");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
let hitTest1, trace, mcray1, lambda, lambda$, lambda$1, lambda$2, hitTest1$, lambda$3, lambda$4, main_test_rayTracer_traceRay_lambda$_lambda_trace$trace, main_test_rayTracer_traceRay_lambda$$lambda$, main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$, main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel, main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda, main_test_rayTracer_aaPixelToRGB_lambda$$lambda$, main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma, main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1, main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$, main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1, main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$, main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda, main_test_buildScene_makeScene_lambertian_lambda$$lambda$, main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest11, main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$1, main_test_buildScene_makeScene_metal_lambda$_lambda$lambda, main_test_buildScene_makeScene_metal_lambda$$lambda$, main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest12, main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$2, main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1, main_test_buildScene_makeScene_lambertian_lambda$$lambda$1, rayTracer_traceRay_lambda$_lambda_trace$trace, traceRay_lambda$_lambda_trace$trace, lambda_trace$trace, lambda$_lambda_trace$trace, main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2, main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil, main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons, main_test_rayTracer_colorFromRGBWithGamma$c_tup3, main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2, main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21, main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2, main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2, main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2, main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21, main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None, main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some, main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2, main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker, main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker, main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker;
main_test_rayTracer_traceRay_lambda$_lambda_trace$trace = function main_test_rayTracer_traceRay_lambda$_lambda_trace$trace(mcray2, world, minMaxT, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let inlinedVal;
    if (world instanceof mcray2.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, minMaxT));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$, element1$1, tmp, tmp1;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          element1$ = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 3) {
            let tmp2, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            element1$1 = runtime.Tuple.get(element1$, 1);
            tmp = element1$1 + 1.0;
            tmp1 = 0.5 * tmp;
            tmp2 = 1.0 - tmp1;
            fv_tmp = tmp2 * 1.0;
            fv_tmp1 = tmp2 * 1.0;
            fv_tmp2 = tmp2 * 1.0;
            fv_tmp3 = tmp1 * 0.5;
            fv_tmp4 = tmp1 * 0.7;
            fv_tmp5 = tmp1 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        return scrut1(mcray2, arg$ObjHit$0$, undefined, undefined, depth, undefined, world, minMaxT)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_test_rayTracer_traceRay_lambda$$lambda$ = function main_test_rayTracer_traceRay_lambda$$lambda$(mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return main_test_rayTracer_traceRay_lambda$_lambda_trace$trace(mcray2, world, minMaxT, ray, maxDepth)
  }
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, scrut, tmp2, tmp3, element2$, element1$, element0$, tmp4, tmp5, tmp6, scale, element2$1, element1$1, element0$1, tmp7, tmp8, tmp9, element2$2, element1$2, element0$2, scale1, x, tmp10, inlinedVal4, tmp11, tmp12, inlinedVal5;
  scale1 = 1.0 / 2147483647.0;
  x = rng.value;
  tmp10 = x * 48271;
  tmp11 = tmp10 / 2147483647;
  inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp11));
  tmp12 = 2147483647 * inlinedVal5;
  inlinedVal4 = tmp10 - tmp12;
  rng.value = inlinedVal4;
  inlinedVal = scale1 * inlinedVal4;
  tmp = r1 + inlinedVal;
  if (runtime.Tuple.isArrayLike(vvec) && vvec.length === 3) {
    element0$1 = runtime.Tuple.get(vvec, 0);
    element1$1 = runtime.Tuple.get(vvec, 1);
    element2$1 = runtime.Tuple.get(vvec, 2);
    tmp7 = tmp * element0$1;
    tmp8 = tmp * element1$1;
    tmp9 = tmp * element2$1;
    if (runtime.Tuple.isArrayLike(ulcDir) && ulcDir.length === 3) {
      let fv_tmp, fv_tmp1, fv_tmp2, x1, tmp13, inlinedVal6, tmp14, tmp15, inlinedVal7;
      element0$2 = runtime.Tuple.get(ulcDir, 0);
      element1$2 = runtime.Tuple.get(ulcDir, 1);
      element2$2 = runtime.Tuple.get(ulcDir, 2);
      fv_tmp = element0$2 + tmp7;
      fv_tmp1 = element1$2 + tmp8;
      fv_tmp2 = element2$2 + tmp9;
      scale = 1.0 / 2147483647.0;
      x1 = rng.value;
      tmp13 = x1 * 48271;
      tmp14 = tmp13 / 2147483647;
      inlinedVal7 = runtime.safeCall(globalThis.Math.floor(tmp14));
      tmp15 = 2147483647 * inlinedVal7;
      inlinedVal6 = tmp13 - tmp15;
      rng.value = inlinedVal6;
      inlinedVal1 = scale * inlinedVal6;
      tmp1 = c1 + inlinedVal1;
      if (runtime.Tuple.isArrayLike(hvec) && hvec.length === 3) {
        let inlinedVal8, inlinedVal9, fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal10;
        element0$ = runtime.Tuple.get(hvec, 0);
        element1$ = runtime.Tuple.get(hvec, 1);
        element2$ = runtime.Tuple.get(hvec, 2);
        tmp4 = tmp1 * element0$;
        tmp5 = tmp1 * element1$;
        tmp6 = tmp1 * element2$;
        fv_tmp3 = fv_tmp + tmp4;
        fv_tmp4 = fv_tmp1 + tmp5;
        fv_tmp5 = fv_tmp2 + tmp6;
        inlinedVal10 = globalThis.Object.freeze([
          fv_tmp3,
          fv_tmp4,
          fv_tmp5
        ]);
        inlinedVal8 = mcray1[vec3Dot$accessorSymbol](inlinedVal10, inlinedVal10);
        inlinedVal9 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal8));
        scrut = inlinedVal9 < 0.0001;
        if (scrut === true) {
          let inlinedVal11;
          inlinedVal11 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal3 = main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2(inlinedVal11);
        } else {
          tmp2 = 1.0 / inlinedVal9;
          tmp3 = mcray1[vec3Scale$accessorSymbol](tmp2, inlinedVal10);
          inlinedVal3 = main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2(tmp3);
        }
        inlinedVal2 = inlinedVal3();
        return globalThis.Object.freeze([
          pos,
          inlinedVal2
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel = function main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, cam) {
  return (r, c) => {
    return main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c)
  }
};
main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker = function main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c) {
  let ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
  if (cam instanceof mcray1.Cam.class) {
    let f;
    arg$Cam$2$ = cam.ns;
    arg$Cam$3$ = cam.pos;
    arg$Cam$4$ = cam.ulc;
    arg$Cam$5$ = cam.hvec;
    arg$Cam$6$ = cam.vvec;
    ulcDir = mcray1[vec3Sub$accessorSymbol](arg$Cam$4$, arg$Cam$3$);
    f = main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go = function main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil()
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(n, f, tmp1);
  return main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons(tmp, tmp2);
};
main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda = function main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda(mcray2, trace1, rfp, scale, r, c) {
  let tmp, inlinedVal, f, inlinedVal1, element2$, element1$, element0$, tmp1, tmp2, tmp3;
  inlinedVal = globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ]);
  tmp = runtime.safeCall(rfp(r, c));
  f = lambda$4(mcray2, trace1);
  inlinedVal1 = tmp(inlinedVal, undefined, f);
  if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
    element0$ = runtime.Tuple.get(inlinedVal1, 0);
    element1$ = runtime.Tuple.get(inlinedVal1, 1);
    element2$ = runtime.Tuple.get(inlinedVal1, 2);
    tmp1 = scale * element0$;
    tmp2 = scale * element1$;
    tmp3 = scale * element2$;
    return main_test_rayTracer_colorFromRGBWithGamma$c_tup3(tmp1, tmp2, tmp3)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_rayTracer_aaPixelToRGB_lambda$$lambda$ = function main_test_rayTracer_aaPixelToRGB_lambda$$lambda$(mcray2, trace1, rfp, scale) {
  return (r, c) => {
    return main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda(mcray2, trace1, rfp, scale, r, c)
  }
};
main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma = function main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma(c) {
  return c()
};
main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1 = function main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element0$ = runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    q = mcray2[vec3Sub$accessorSymbol](element0$, center);
    tmp = mcray2[vec3Dot$accessorSymbol](element1$, q);
    b = 2.0 * tmp;
    tmp1 = mcray2[vec3Dot$accessorSymbol](q, q);
    c = tmp1 - rSq;
    tmp2 = b * b;
    tmp3 = 4.0 * c;
    disc = tmp2 - tmp3;
    scrut = disc < 0.0;
    if (scrut === true) {
      return mcray2.Miss
    }
    {
      let inlinedVal;
      tmp4 = - b;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      tmp5 = tmp4 - inlinedVal;
      t = 0.5 * tmp5;
      scrut1 = mcray2[within$accessorSymbol](t, minMaxT);
      if (scrut1 === true) {
        let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, tmp7, tmp8, tmp9, element1$3, element0$3;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let element2$2, element1$4, element0$4, tmp10, tmp11, tmp12, element2$3, element1$5, element0$5;
          element0$3 = runtime.Tuple.get(ray, 0);
          element1$3 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$3) && element1$3.length === 3) {
            element0$4 = runtime.Tuple.get(element1$3, 0);
            element1$4 = runtime.Tuple.get(element1$3, 1);
            element2$2 = runtime.Tuple.get(element1$3, 2);
            tmp10 = t * element0$4;
            tmp11 = t * element1$4;
            tmp12 = t * element2$2;
            if (runtime.Tuple.isArrayLike(element0$3) && element0$3.length === 3) {
              let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal1;
              element0$5 = runtime.Tuple.get(element0$3, 0);
              element1$5 = runtime.Tuple.get(element0$3, 1);
              element2$3 = runtime.Tuple.get(element0$3, 2);
              fv_tmp = element0$5 + tmp10;
              fv_tmp1 = element1$5 + tmp11;
              fv_tmp2 = element2$3 + tmp12;
              inlinedVal1 = globalThis.Object.freeze([
                fv_tmp,
                fv_tmp1,
                fv_tmp2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$1 = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$ = runtime.Tuple.get(inlinedVal1, 2);
                if (runtime.Tuple.isArrayLike(center) && center.length === 3) {
                  let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal2;
                  element0$2 = runtime.Tuple.get(center, 0);
                  element1$2 = runtime.Tuple.get(center, 1);
                  element2$1 = runtime.Tuple.get(center, 2);
                  tmp7 = element0$1 - element0$2;
                  tmp8 = element1$1 - element1$2;
                  tmp9 = element2$ - element2$1;
                  fv_tmp3 = invR * tmp7;
                  fv_tmp4 = invR * tmp8;
                  fv_tmp5 = invR * tmp9;
                  inlinedVal2 = globalThis.Object.freeze([
                    fv_tmp3,
                    fv_tmp4,
                    fv_tmp5
                  ]);
                  tmp6 = mcray2.MatHit(t, inlinedVal1, inlinedVal2, material);
                  return mcray2.ObjHit(tmp6)
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
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$ = function main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let element2$, element1$1, element0$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, element2$1, element1$2, element0$1, tmp8, tmp9, tmp10, element2$2, element1$3, element0$2;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp5 = mcray1[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp6 = 2.0 * tmp5;
      tmp7 = - tmp6;
      if (runtime.Tuple.isArrayLike(arg$MatHit$2$) && arg$MatHit$2$.length === 3) {
        element0$1 = runtime.Tuple.get(arg$MatHit$2$, 0);
        element1$2 = runtime.Tuple.get(arg$MatHit$2$, 1);
        element2$1 = runtime.Tuple.get(arg$MatHit$2$, 2);
        tmp8 = tmp7 * element0$1;
        tmp9 = tmp7 * element1$2;
        tmp10 = tmp7 * element2$1;
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 3) {
          let fv_tmp, fv_tmp1, fv_tmp2;
          element0$2 = runtime.Tuple.get(element1$, 0);
          element1$3 = runtime.Tuple.get(element1$, 1);
          element2$2 = runtime.Tuple.get(element1$, 2);
          fv_tmp = element0$2 + tmp8;
          fv_tmp1 = element1$3 + tmp9;
          fv_tmp2 = element2$2 + tmp10;
          tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
            let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal;
            element0$ = runtime.Tuple.get(tmp, 0);
            element1$1 = runtime.Tuple.get(tmp, 1);
            element2$ = runtime.Tuple.get(tmp, 2);
            tmp2 = fuzz * element0$;
            tmp3 = fuzz * element1$1;
            tmp4 = fuzz * element2$;
            fv_tmp3 = fv_tmp + tmp2;
            fv_tmp4 = fv_tmp1 + tmp3;
            fv_tmp5 = fv_tmp2 + tmp4;
            inlinedVal = globalThis.Object.freeze([
              fv_tmp3,
              fv_tmp4,
              fv_tmp5
            ]);
            tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
            scrut = tmp1 <= 0.0;
            if (scrut === true) {
              return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None()
            }
            {
              let Some_value, inlinedVal1, inlinedVal2, inlinedVal3, scrut1, tmp11, tmp12, inlinedVal4, inlinedVal5;
              inlinedVal4 = mcray1[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
              inlinedVal5 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal4));
              scrut1 = inlinedVal5 < 0.0001;
              if (scrut1 === true) {
                let inlinedVal6;
                inlinedVal6 = globalThis.Object.freeze([
                  0.0,
                  0.0,
                  0.0
                ]);
                inlinedVal3 = main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(inlinedVal6);
              } else {
                tmp11 = 1.0 / inlinedVal5;
                tmp12 = mcray1[vec3Scale$accessorSymbol](tmp11, inlinedVal);
                inlinedVal3 = main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tmp12);
              }
              inlinedVal2 = inlinedVal3();
              inlinedVal1 = globalThis.Object.freeze([
                arg$MatHit$1$,
                inlinedVal2
              ]);
              Some_value = main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(albedo, inlinedVal1);
              return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value);
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
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1;
  if (hit instanceof mcray2.MatHit.class) {
    let Some_value, inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp2, tmp3, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray1[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(inlinedVal5);
    } else {
      tmp2 = 1.0 / inlinedVal4;
      tmp3 = mcray1[vec3Scale$accessorSymbol](tmp2, tmp1);
      inlinedVal2 = main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tmp3);
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = globalThis.Object.freeze([
      arg$MatHit$1$,
      inlinedVal1
    ]);
    Some_value = main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(albedo, inlinedVal);
    return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1 = function main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element0$ = runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    q = mcray2[vec3Sub$accessorSymbol](element0$, center);
    tmp = mcray2[vec3Dot$accessorSymbol](element1$, q);
    b = 2.0 * tmp;
    tmp1 = mcray2[vec3Dot$accessorSymbol](q, q);
    c = tmp1 - rSq;
    tmp2 = b * b;
    tmp3 = 4.0 * c;
    disc = tmp2 - tmp3;
    scrut = disc < 0.0;
    if (scrut === true) {
      return mcray2.Miss
    }
    {
      let inlinedVal;
      tmp4 = - b;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      tmp5 = tmp4 - inlinedVal;
      t = 0.5 * tmp5;
      scrut1 = mcray2[within$accessorSymbol](t, minMaxT);
      if (scrut1 === true) {
        let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, tmp7, tmp8, tmp9, element1$3, element0$3;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let element2$2, element1$4, element0$4, tmp10, tmp11, tmp12, element2$3, element1$5, element0$5;
          element0$3 = runtime.Tuple.get(ray, 0);
          element1$3 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$3) && element1$3.length === 3) {
            element0$4 = runtime.Tuple.get(element1$3, 0);
            element1$4 = runtime.Tuple.get(element1$3, 1);
            element2$2 = runtime.Tuple.get(element1$3, 2);
            tmp10 = t * element0$4;
            tmp11 = t * element1$4;
            tmp12 = t * element2$2;
            if (runtime.Tuple.isArrayLike(element0$3) && element0$3.length === 3) {
              let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal1;
              element0$5 = runtime.Tuple.get(element0$3, 0);
              element1$5 = runtime.Tuple.get(element0$3, 1);
              element2$3 = runtime.Tuple.get(element0$3, 2);
              fv_tmp = element0$5 + tmp10;
              fv_tmp1 = element1$5 + tmp11;
              fv_tmp2 = element2$3 + tmp12;
              inlinedVal1 = globalThis.Object.freeze([
                fv_tmp,
                fv_tmp1,
                fv_tmp2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$1 = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$ = runtime.Tuple.get(inlinedVal1, 2);
                if (runtime.Tuple.isArrayLike(center) && center.length === 3) {
                  let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal2;
                  element0$2 = runtime.Tuple.get(center, 0);
                  element1$2 = runtime.Tuple.get(center, 1);
                  element2$1 = runtime.Tuple.get(center, 2);
                  tmp7 = element0$1 - element0$2;
                  tmp8 = element1$1 - element1$2;
                  tmp9 = element2$ - element2$1;
                  fv_tmp3 = invR * tmp7;
                  fv_tmp4 = invR * tmp8;
                  fv_tmp5 = invR * tmp9;
                  inlinedVal2 = globalThis.Object.freeze([
                    fv_tmp3,
                    fv_tmp4,
                    fv_tmp5
                  ]);
                  tmp6 = mcray2.MatHit(t, inlinedVal1, inlinedVal2, material);
                  return mcray2.ObjHit(tmp6)
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
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$ = function main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1;
  if (hit instanceof mcray2.MatHit.class) {
    let Some_value, inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp2, tmp3, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray1[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(inlinedVal5);
    } else {
      tmp2 = 1.0 / inlinedVal4;
      tmp3 = mcray1[vec3Scale$accessorSymbol](tmp2, tmp1);
      inlinedVal2 = main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tmp3);
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = globalThis.Object.freeze([
      arg$MatHit$1$,
      inlinedVal1
    ]);
    Some_value = main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(albedo, inlinedVal);
    return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$ = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest11 = function main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element0$ = runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    q = mcray2[vec3Sub$accessorSymbol](element0$, center);
    tmp = mcray2[vec3Dot$accessorSymbol](element1$, q);
    b = 2.0 * tmp;
    tmp1 = mcray2[vec3Dot$accessorSymbol](q, q);
    c = tmp1 - rSq;
    tmp2 = b * b;
    tmp3 = 4.0 * c;
    disc = tmp2 - tmp3;
    scrut = disc < 0.0;
    if (scrut === true) {
      return mcray2.Miss
    }
    {
      let inlinedVal;
      tmp4 = - b;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      tmp5 = tmp4 - inlinedVal;
      t = 0.5 * tmp5;
      scrut1 = mcray2[within$accessorSymbol](t, minMaxT);
      if (scrut1 === true) {
        let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, tmp7, tmp8, tmp9, element1$3, element0$3;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let element2$2, element1$4, element0$4, tmp10, tmp11, tmp12, element2$3, element1$5, element0$5;
          element0$3 = runtime.Tuple.get(ray, 0);
          element1$3 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$3) && element1$3.length === 3) {
            element0$4 = runtime.Tuple.get(element1$3, 0);
            element1$4 = runtime.Tuple.get(element1$3, 1);
            element2$2 = runtime.Tuple.get(element1$3, 2);
            tmp10 = t * element0$4;
            tmp11 = t * element1$4;
            tmp12 = t * element2$2;
            if (runtime.Tuple.isArrayLike(element0$3) && element0$3.length === 3) {
              let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal1;
              element0$5 = runtime.Tuple.get(element0$3, 0);
              element1$5 = runtime.Tuple.get(element0$3, 1);
              element2$3 = runtime.Tuple.get(element0$3, 2);
              fv_tmp = element0$5 + tmp10;
              fv_tmp1 = element1$5 + tmp11;
              fv_tmp2 = element2$3 + tmp12;
              inlinedVal1 = globalThis.Object.freeze([
                fv_tmp,
                fv_tmp1,
                fv_tmp2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$1 = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$ = runtime.Tuple.get(inlinedVal1, 2);
                if (runtime.Tuple.isArrayLike(center) && center.length === 3) {
                  let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal2;
                  element0$2 = runtime.Tuple.get(center, 0);
                  element1$2 = runtime.Tuple.get(center, 1);
                  element2$1 = runtime.Tuple.get(center, 2);
                  tmp7 = element0$1 - element0$2;
                  tmp8 = element1$1 - element1$2;
                  tmp9 = element2$ - element2$1;
                  fv_tmp3 = invR * tmp7;
                  fv_tmp4 = invR * tmp8;
                  fv_tmp5 = invR * tmp9;
                  inlinedVal2 = globalThis.Object.freeze([
                    fv_tmp3,
                    fv_tmp4,
                    fv_tmp5
                  ]);
                  tmp6 = mcray2.MatHit(t, inlinedVal1, inlinedVal2, material);
                  return mcray2.ObjHit(tmp6)
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
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$1 = function main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest11(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
main_test_buildScene_makeScene_metal_lambda$_lambda$lambda = function main_test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let element2$, element1$1, element0$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, element2$1, element1$2, element0$1, tmp8, tmp9, tmp10, element2$2, element1$3, element0$2;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp5 = mcray1[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp6 = 2.0 * tmp5;
      tmp7 = - tmp6;
      if (runtime.Tuple.isArrayLike(arg$MatHit$2$) && arg$MatHit$2$.length === 3) {
        element0$1 = runtime.Tuple.get(arg$MatHit$2$, 0);
        element1$2 = runtime.Tuple.get(arg$MatHit$2$, 1);
        element2$1 = runtime.Tuple.get(arg$MatHit$2$, 2);
        tmp8 = tmp7 * element0$1;
        tmp9 = tmp7 * element1$2;
        tmp10 = tmp7 * element2$1;
        if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 3) {
          let fv_tmp, fv_tmp1, fv_tmp2;
          element0$2 = runtime.Tuple.get(element1$, 0);
          element1$3 = runtime.Tuple.get(element1$, 1);
          element2$2 = runtime.Tuple.get(element1$, 2);
          fv_tmp = element0$2 + tmp8;
          fv_tmp1 = element1$3 + tmp9;
          fv_tmp2 = element2$2 + tmp10;
          tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
            let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal;
            element0$ = runtime.Tuple.get(tmp, 0);
            element1$1 = runtime.Tuple.get(tmp, 1);
            element2$ = runtime.Tuple.get(tmp, 2);
            tmp2 = fuzz * element0$;
            tmp3 = fuzz * element1$1;
            tmp4 = fuzz * element2$;
            fv_tmp3 = fv_tmp + tmp2;
            fv_tmp4 = fv_tmp1 + tmp3;
            fv_tmp5 = fv_tmp2 + tmp4;
            inlinedVal = globalThis.Object.freeze([
              fv_tmp3,
              fv_tmp4,
              fv_tmp5
            ]);
            tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
            scrut = tmp1 <= 0.0;
            if (scrut === true) {
              return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None()
            }
            {
              let Some_value, inlinedVal1, inlinedVal2, inlinedVal3, scrut1, tmp11, tmp12, inlinedVal4, inlinedVal5;
              inlinedVal4 = mcray1[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
              inlinedVal5 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal4));
              scrut1 = inlinedVal5 < 0.0001;
              if (scrut1 === true) {
                let inlinedVal6;
                inlinedVal6 = globalThis.Object.freeze([
                  0.0,
                  0.0,
                  0.0
                ]);
                inlinedVal3 = main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(inlinedVal6);
              } else {
                tmp11 = 1.0 / inlinedVal5;
                tmp12 = mcray1[vec3Scale$accessorSymbol](tmp11, inlinedVal);
                inlinedVal3 = main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tmp12);
              }
              inlinedVal2 = inlinedVal3();
              inlinedVal1 = globalThis.Object.freeze([
                arg$MatHit$1$,
                inlinedVal2
              ]);
              Some_value = main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(albedo, inlinedVal1);
              return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value);
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
main_test_buildScene_makeScene_metal_lambda$$lambda$ = function main_test_buildScene_makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest12 = function main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element0$ = runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    q = mcray2[vec3Sub$accessorSymbol](element0$, center);
    tmp = mcray2[vec3Dot$accessorSymbol](element1$, q);
    b = 2.0 * tmp;
    tmp1 = mcray2[vec3Dot$accessorSymbol](q, q);
    c = tmp1 - rSq;
    tmp2 = b * b;
    tmp3 = 4.0 * c;
    disc = tmp2 - tmp3;
    scrut = disc < 0.0;
    if (scrut === true) {
      return mcray2.Miss
    }
    {
      let inlinedVal;
      tmp4 = - b;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(disc));
      tmp5 = tmp4 - inlinedVal;
      t = 0.5 * tmp5;
      scrut1 = mcray2[within$accessorSymbol](t, minMaxT);
      if (scrut1 === true) {
        let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, tmp7, tmp8, tmp9, element1$3, element0$3;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let element2$2, element1$4, element0$4, tmp10, tmp11, tmp12, element2$3, element1$5, element0$5;
          element0$3 = runtime.Tuple.get(ray, 0);
          element1$3 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$3) && element1$3.length === 3) {
            element0$4 = runtime.Tuple.get(element1$3, 0);
            element1$4 = runtime.Tuple.get(element1$3, 1);
            element2$2 = runtime.Tuple.get(element1$3, 2);
            tmp10 = t * element0$4;
            tmp11 = t * element1$4;
            tmp12 = t * element2$2;
            if (runtime.Tuple.isArrayLike(element0$3) && element0$3.length === 3) {
              let fv_tmp, fv_tmp1, fv_tmp2, inlinedVal1;
              element0$5 = runtime.Tuple.get(element0$3, 0);
              element1$5 = runtime.Tuple.get(element0$3, 1);
              element2$3 = runtime.Tuple.get(element0$3, 2);
              fv_tmp = element0$5 + tmp10;
              fv_tmp1 = element1$5 + tmp11;
              fv_tmp2 = element2$3 + tmp12;
              inlinedVal1 = globalThis.Object.freeze([
                fv_tmp,
                fv_tmp1,
                fv_tmp2
              ]);
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 3) {
                element0$1 = runtime.Tuple.get(inlinedVal1, 0);
                element1$1 = runtime.Tuple.get(inlinedVal1, 1);
                element2$ = runtime.Tuple.get(inlinedVal1, 2);
                if (runtime.Tuple.isArrayLike(center) && center.length === 3) {
                  let fv_tmp3, fv_tmp4, fv_tmp5, inlinedVal2;
                  element0$2 = runtime.Tuple.get(center, 0);
                  element1$2 = runtime.Tuple.get(center, 1);
                  element2$1 = runtime.Tuple.get(center, 2);
                  tmp7 = element0$1 - element0$2;
                  tmp8 = element1$1 - element1$2;
                  tmp9 = element2$ - element2$1;
                  fv_tmp3 = invR * tmp7;
                  fv_tmp4 = invR * tmp8;
                  fv_tmp5 = invR * tmp9;
                  inlinedVal2 = globalThis.Object.freeze([
                    fv_tmp3,
                    fv_tmp4,
                    fv_tmp5
                  ]);
                  tmp6 = mcray2.MatHit(t, inlinedVal1, inlinedVal2, material);
                  return mcray2.ObjHit(tmp6)
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
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$2 = function main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest12(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 = function main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1;
  if (hit instanceof mcray2.MatHit.class) {
    let Some_value, inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp2, tmp3, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray1[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21(inlinedVal5);
    } else {
      tmp2 = 1.0 / inlinedVal4;
      tmp3 = mcray1[vec3Scale$accessorSymbol](tmp2, tmp1);
      inlinedVal2 = main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21(tmp3);
    }
    inlinedVal1 = inlinedVal2();
    inlinedVal = globalThis.Object.freeze([
      arg$MatHit$1$,
      inlinedVal1
    ]);
    Some_value = main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(albedo, inlinedVal);
    return main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
rayTracer_traceRay_lambda$_lambda_trace$trace = function rayTracer_traceRay_lambda$_lambda_trace$trace(mcray2, world, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, undefined));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let tmp5, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            runtime.Tuple.get(element1$1, 2);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = 1.0 - tmp4;
            fv_tmp = tmp5 * 1.0;
            fv_tmp1 = tmp5 * 1.0;
            fv_tmp2 = tmp5 * 1.0;
            fv_tmp3 = tmp4 * 0.5;
            fv_tmp4 = tmp4 * 0.7;
            fv_tmp5 = tmp4 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, element2$2, element1$3, element0$3, tmp3, tmp4, tmp5;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = rayTracer_traceRay_lambda$_lambda_trace$trace(mcray2, world, element1$, tmp1);
            if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 3) {
              element0$2 = runtime.Tuple.get(element0$, 0);
              element1$2 = runtime.Tuple.get(element0$, 1);
              element2$1 = runtime.Tuple.get(element0$, 2);
              if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 3) {
                element0$3 = runtime.Tuple.get(tmp2, 0);
                element1$3 = runtime.Tuple.get(tmp2, 1);
                element2$2 = runtime.Tuple.get(tmp2, 2);
                tmp3 = element0$2 * element0$3;
                tmp4 = element1$2 * element1$3;
                tmp5 = element2$1 * element2$2;
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
                  let fv_tmp, fv_tmp1, fv_tmp2;
                  element0$1 = runtime.Tuple.get(tmp, 0);
                  element1$1 = runtime.Tuple.get(tmp, 1);
                  element2$ = runtime.Tuple.get(tmp, 2);
                  fv_tmp = element0$1 + tmp3;
                  fv_tmp1 = element1$1 + tmp4;
                  fv_tmp2 = element2$ + tmp5;
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
traceRay_lambda$_lambda_trace$trace = function traceRay_lambda$_lambda_trace$trace(mcray2, world, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, undefined));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let tmp5, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            runtime.Tuple.get(element1$1, 2);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = 1.0 - tmp4;
            fv_tmp = tmp5 * 1.0;
            fv_tmp1 = tmp5 * 1.0;
            fv_tmp2 = tmp5 * 1.0;
            fv_tmp3 = tmp4 * 0.5;
            fv_tmp4 = tmp4 * 0.7;
            fv_tmp5 = tmp4 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, element2$2, element1$3, element0$3, tmp3, tmp4, tmp5;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = traceRay_lambda$_lambda_trace$trace(mcray2, world, element1$, tmp1);
            if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 3) {
              element0$2 = runtime.Tuple.get(element0$, 0);
              element1$2 = runtime.Tuple.get(element0$, 1);
              element2$1 = runtime.Tuple.get(element0$, 2);
              if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 3) {
                element0$3 = runtime.Tuple.get(tmp2, 0);
                element1$3 = runtime.Tuple.get(tmp2, 1);
                element2$2 = runtime.Tuple.get(tmp2, 2);
                tmp3 = element0$2 * element0$3;
                tmp4 = element1$2 * element1$3;
                tmp5 = element2$1 * element2$2;
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
                  let fv_tmp, fv_tmp1, fv_tmp2;
                  element0$1 = runtime.Tuple.get(tmp, 0);
                  element1$1 = runtime.Tuple.get(tmp, 1);
                  element2$ = runtime.Tuple.get(tmp, 2);
                  fv_tmp = element0$1 + tmp3;
                  fv_tmp1 = element1$1 + tmp4;
                  fv_tmp2 = element2$ + tmp5;
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda_trace$trace = function lambda_trace$trace(mcray2, world, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, undefined));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let tmp5, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            runtime.Tuple.get(element1$1, 2);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = 1.0 - tmp4;
            fv_tmp = tmp5 * 1.0;
            fv_tmp1 = tmp5 * 1.0;
            fv_tmp2 = tmp5 * 1.0;
            fv_tmp3 = tmp4 * 0.5;
            fv_tmp4 = tmp4 * 0.7;
            fv_tmp5 = tmp4 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, element2$2, element1$3, element0$3, tmp3, tmp4, tmp5;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = lambda_trace$trace(mcray2, world, element1$, tmp1);
            if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 3) {
              element0$2 = runtime.Tuple.get(element0$, 0);
              element1$2 = runtime.Tuple.get(element0$, 1);
              element2$1 = runtime.Tuple.get(element0$, 2);
              if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 3) {
                element0$3 = runtime.Tuple.get(tmp2, 0);
                element1$3 = runtime.Tuple.get(tmp2, 1);
                element2$2 = runtime.Tuple.get(tmp2, 2);
                tmp3 = element0$2 * element0$3;
                tmp4 = element1$2 * element1$3;
                tmp5 = element2$1 * element2$2;
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
                  let fv_tmp, fv_tmp1, fv_tmp2;
                  element0$1 = runtime.Tuple.get(tmp, 0);
                  element1$1 = runtime.Tuple.get(tmp, 1);
                  element2$ = runtime.Tuple.get(tmp, 2);
                  fv_tmp = element0$1 + tmp3;
                  fv_tmp1 = element1$1 + tmp4;
                  fv_tmp2 = element2$ + tmp5;
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$_lambda_trace$trace = function lambda$_lambda_trace$trace(mcray2, world, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, undefined));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let tmp5, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            runtime.Tuple.get(element1$1, 2);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = 1.0 - tmp4;
            fv_tmp = tmp5 * 1.0;
            fv_tmp1 = tmp5 * 1.0;
            fv_tmp2 = tmp5 * 1.0;
            fv_tmp3 = tmp4 * 0.5;
            fv_tmp4 = tmp4 * 0.7;
            fv_tmp5 = tmp4 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, element2$2, element1$3, element0$3, tmp3, tmp4, tmp5;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = lambda$_lambda_trace$trace(mcray2, world, element1$, tmp1);
            if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 3) {
              element0$2 = runtime.Tuple.get(element0$, 0);
              element1$2 = runtime.Tuple.get(element0$, 1);
              element2$1 = runtime.Tuple.get(element0$, 2);
              if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 3) {
                element0$3 = runtime.Tuple.get(tmp2, 0);
                element1$3 = runtime.Tuple.get(tmp2, 1);
                element2$2 = runtime.Tuple.get(tmp2, 2);
                tmp3 = element0$2 * element0$3;
                tmp4 = element1$2 * element1$3;
                tmp5 = element2$1 * element2$2;
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
                  let fv_tmp, fv_tmp1, fv_tmp2;
                  element0$1 = runtime.Tuple.get(tmp, 0);
                  element1$1 = runtime.Tuple.get(tmp, 1);
                  element2$ = runtime.Tuple.get(tmp, 2);
                  fv_tmp = element0$1 + tmp3;
                  fv_tmp1 = element1$1 + tmp4;
                  fv_tmp2 = element2$ + tmp5;
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2 = function main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil = function main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil() {
  return (fv_init, fv_tmp, fv_f) => {
    return fv_init
  }
};
main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons = function main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons(Cons_head, Cons_tail) {
  return (fv_init, fv_tmp, fv_f) => {
    fv_tmp = runtime.safeCall(fv_f(Cons_head, fv_init));
    return Cons_tail(fv_tmp, undefined, fv_f)
  }
};
main_test_rayTracer_colorFromRGBWithGamma$c_tup3 = function main_test_rayTracer_colorFromRGBWithGamma$c_tup3(tup3_0, tup3_1, tup3_2) {
  return () => {
    return main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker(tup3_0, tup3_1, tup3_2)
  }
};
main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker = function main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker(tup3_0, tup3_1, tup3_2) {
  let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
  inlinedVal5 = runtime.safeCall(globalThis.Math.sqrt(tup3_0));
  inlinedVal = mcray1[toByte$accessorSymbol](inlinedVal5);
  inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(tup3_1));
  inlinedVal1 = mcray1[toByte$accessorSymbol](inlinedVal4);
  inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(tup3_2));
  inlinedVal2 = mcray1[toByte$accessorSymbol](inlinedVal3);
  return globalThis.Object.freeze([
    inlinedVal,
    inlinedVal1,
    inlinedVal2
  ])
};
main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2 = function main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21 = function main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22 = function main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 = function main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 = function main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21 = function main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2(tup2_1) {
  return () => {
    return tup2_1
  }
};
main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None = function main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None() {
  return (fv_mcray, fv_hit, fv_tmp, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT) => {
    return fv_mcray[getEmission$accessorSymbol](fv_hit)
  }
};
main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some = function main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some(Some_value) {
  return (fv_mcray, fv_hit, fv_tmp, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT) => {
    return Some_value(fv_tmp, fv_mcray, fv_hit, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT)
  }
};
main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2 = function main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_mcray, fv_hit, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT) => {
    return main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_mcray, fv_hit, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT)
  }
};
main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker = function main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_mcray, fv_hit, fv_tmp1, fv_depth, fv_tmp2, fv_world, fv_minMaxT) {
  let element2$, element1$, element0$, element2$1, element1$1, element0$1, element2$2, element1$2, element0$2, tmp, tmp1, tmp2;
  fv_tmp = fv_mcray[getEmission$accessorSymbol](fv_hit);
  fv_tmp1 = fv_depth - 1;
  fv_tmp2 = main_test_rayTracer_traceRay_lambda$_lambda_trace$trace(fv_mcray, fv_world, fv_minMaxT, tup2_1, fv_tmp1);
  if (runtime.Tuple.isArrayLike(tup2_0) && tup2_0.length === 3) {
    element0$1 = runtime.Tuple.get(tup2_0, 0);
    element1$1 = runtime.Tuple.get(tup2_0, 1);
    element2$1 = runtime.Tuple.get(tup2_0, 2);
    if (runtime.Tuple.isArrayLike(fv_tmp2) && fv_tmp2.length === 3) {
      element0$2 = runtime.Tuple.get(fv_tmp2, 0);
      element1$2 = runtime.Tuple.get(fv_tmp2, 1);
      element2$2 = runtime.Tuple.get(fv_tmp2, 2);
      tmp = element0$1 * element0$2;
      tmp1 = element1$1 * element1$2;
      tmp2 = element2$1 * element2$2;
      if (runtime.Tuple.isArrayLike(fv_tmp) && fv_tmp.length === 3) {
        let fv_tmp3, fv_tmp4, fv_tmp5;
        element0$ = runtime.Tuple.get(fv_tmp, 0);
        element1$ = runtime.Tuple.get(fv_tmp, 1);
        element2$ = runtime.Tuple.get(fv_tmp, 2);
        fv_tmp3 = element0$ + tmp;
        fv_tmp4 = element1$ + tmp1;
        fv_tmp5 = element2$ + tmp2;
        return globalThis.Object.freeze([
          fv_tmp3,
          fv_tmp4,
          fv_tmp5
        ])
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
trace = function trace(mcray2, world, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2;
  scrut = depth <= 0;
  if (scrut === true) {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  {
    let receiver, inlinedVal;
    receiver = mcray2;
    if (world instanceof receiver.Obj.class) {
      inlinedVal = runtime.safeCall(world.hit(ray, undefined));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let tmp5, fv_tmp, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8;
            runtime.Tuple.get(element1$1, 0);
            element1$2 = runtime.Tuple.get(element1$1, 1);
            runtime.Tuple.get(element1$1, 2);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = 1.0 - tmp4;
            fv_tmp = tmp5 * 1.0;
            fv_tmp1 = tmp5 * 1.0;
            fv_tmp2 = tmp5 * 1.0;
            fv_tmp3 = tmp4 * 0.5;
            fv_tmp4 = tmp4 * 0.7;
            fv_tmp5 = tmp4 * 1.0;
            fv_tmp6 = fv_tmp + fv_tmp3;
            fv_tmp7 = fv_tmp1 + fv_tmp4;
            fv_tmp8 = fv_tmp2 + fv_tmp5;
            return globalThis.Object.freeze([
              fv_tmp6,
              fv_tmp7,
              fv_tmp8
            ])
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let element2$, element1$1, element0$1, element2$1, element1$2, element0$2, element2$2, element1$3, element0$3, tmp3, tmp4, tmp5;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = trace(mcray2, world, element1$, tmp1);
            if (runtime.Tuple.isArrayLike(element0$) && element0$.length === 3) {
              element0$2 = runtime.Tuple.get(element0$, 0);
              element1$2 = runtime.Tuple.get(element0$, 1);
              element2$1 = runtime.Tuple.get(element0$, 2);
              if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 3) {
                element0$3 = runtime.Tuple.get(tmp2, 0);
                element1$3 = runtime.Tuple.get(tmp2, 1);
                element2$2 = runtime.Tuple.get(tmp2, 2);
                tmp3 = element0$2 * element0$3;
                tmp4 = element1$2 * element1$3;
                tmp5 = element2$1 * element2$2;
                if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
                  let fv_tmp, fv_tmp1, fv_tmp2;
                  element0$1 = runtime.Tuple.get(tmp, 0);
                  element1$1 = runtime.Tuple.get(tmp, 1);
                  element2$ = runtime.Tuple.get(tmp, 2);
                  fv_tmp = element0$1 + tmp3;
                  fv_tmp1 = element1$1 + tmp4;
                  fv_tmp2 = element2$ + tmp5;
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
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$4 = (undefined, function (mcray2, trace1) {
  return (ray, c1) => {
    let tmp;
    tmp = runtime.safeCall(trace1(ray));
    return mcray2[rgbAdd$accessorSymbol](c1, tmp)
  }
});
lambda$3 = (undefined, function (mcray2, ray, minMaxT) {
  return (obj, mhit) => {
    return lambda(mcray2, ray, minMaxT, obj, mhit)
  }
});
lambda = (undefined, function (mcray2, ray, minMaxT, obj, mhit) {
  let inlinedVal;
  if (obj instanceof mcray2.Obj.class) {
    inlinedVal = runtime.safeCall(obj.hit(ray, minMaxT));
    return mcray2[closer$accessorSymbol](mhit, inlinedVal)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
hitTest1$ = function hitTest1$(mcray2, objs) {
  return (ray, minMaxT) => {
    return hitTest1(mcray2, objs, ray, minMaxT)
  }
};
hitTest1 = function hitTest1(mcray2, objs, ray, minMaxT) {
  let f, init;
  f = lambda$3(mcray2, ray, minMaxT);
  init = mcray2.Miss;
  return mcray2[listFoldl$tailrec$accessorSymbol](f, init, objs)
};
lambda$2 = (undefined, function (mcray2) {
  return (ray, minMaxT) => {
    return mcray2.Miss
  }
});
lambda$1 = (undefined, function () {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
lambda$ = (undefined, function () {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
(class mcray {
  static {
    mcray1 = this
  }
  static get [listFoldl$tailrec$accessorSymbol]() { return mcray.#listFoldl$tailrec; }
  static get [within$accessorSymbol]() { return mcray.#within; }
  static get [rgbAdd$accessorSymbol]() { return mcray.#rgbAdd; }
  static get [toByte$accessorSymbol]() { return mcray.#toByte; }
  static get [vec3Add$accessorSymbol]() { return mcray.#vec3Add; }
  static get [vec3Sub$accessorSymbol]() { return mcray.#vec3Sub; }
  static get [vec3Scale$accessorSymbol]() { return mcray.#vec3Scale; }
  static get [vec3Dot$accessorSymbol]() { return mcray.#vec3Dot; }
  static get [vec3RandomPointInSphere$accessorSymbol]() { return mcray.#vec3RandomPointInSphere; }
  static get [getEmission$accessorSymbol]() { return mcray.#getEmission; }
  static get [getHitInfo$accessorSymbol]() { return mcray.#getHitInfo; }
  static get [closer$accessorSymbol]() { return mcray.#closer; }
  static {
    mcray.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        mcray.Cons.class = this
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
        mcray.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    mcray.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        mcray.Some.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Some", ["value"]];
    });
    (class None {
      static {
        new this
      }
      constructor() {
        mcray.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    mcray.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        mcray.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    mcray.MatHit = function MatHit(t, pt, norm, material) {
      return globalThis.Object.freeze(new MatHit.class(t, pt, norm, material));
    };
    (class MatHit {
      static {
        mcray.MatHit.class = this
      }
      constructor(t, pt, norm, material) {
        this.t = t;
        this.pt = pt;
        this.norm = norm;
        this.material = material;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "MatHit", ["t", "pt", "norm", "material"]];
    });
    mcray.Material = function Material(emit, scatter) {
      return globalThis.Object.freeze(new Material.class(emit, scatter));
    };
    (class Material {
      static {
        mcray.Material.class = this
      }
      constructor(emit, scatter) {
        this.emit = emit;
        this.scatter = scatter;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Material", ["emit", "scatter"]];
    });
    (class Miss {
      static {
        new this
      }
      constructor() {
        mcray.Miss = this;
        Object.defineProperty(this, "class", {
          value: Miss
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Miss"];
    });
    mcray.ObjHit = function ObjHit(hit) {
      return globalThis.Object.freeze(new ObjHit.class(hit));
    };
    (class ObjHit {
      static {
        mcray.ObjHit.class = this
      }
      constructor(hit) {
        this.hit = hit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ObjHit", ["hit"]];
    });
    mcray.Obj = function Obj(hit) {
      return globalThis.Object.freeze(new Obj.class(hit));
    };
    (class Obj {
      static {
        mcray.Obj.class = this
      }
      constructor(hit) {
        this.hit = hit;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Obj", ["hit"]];
    });
    mcray.Img = function Img(wid, ht, pixels) {
      return globalThis.Object.freeze(new Img.class(wid, ht, pixels));
    };
    (class Img {
      static {
        mcray.Img.class = this
      }
      constructor(wid, ht, pixels) {
        this.wid = wid;
        this.ht = ht;
        this.pixels = pixels;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Img", ["wid", "ht", "pixels"]];
    });
    mcray.Cam = function Cam(wid, ht, ns, pos, ulc, hvec, vvec) {
      return globalThis.Object.freeze(new Cam.class(wid, ht, ns, pos, ulc, hvec, vvec));
    };
    (class Cam {
      static {
        mcray.Cam.class = this
      }
      constructor(wid, ht, ns, pos, ulc, hvec, vvec) {
        this.wid = wid;
        this.ht = ht;
        this.ns = ns;
        this.pos = pos;
        this.ulc = ulc;
        this.hvec = hvec;
        this.vvec = vvec;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Cam", ["wid", "ht", "ns", "pos", "ulc", "hvec", "vvec"]];
    });
  }
  static #listFoldl$tailrec(f, init, l) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, tmp;
      if (l instanceof mcray.Nil.class) {
        return init
      } else if (l instanceof mcray.Cons.class) {
        arg$Cons$0$ = l.head;
        arg$Cons$1$ = l.tail;
        tmp = runtime.safeCall(f(arg$Cons$0$, init));
        init = tmp;
        l = arg$Cons$1$;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #floor(x) {
    return runtime.safeCall(globalThis.Math.floor(x))
  }
  static #real(x) {
    return x
  }
  static #intMod(a, b) {
    let tmp, tmp1, tmp2;
    tmp = a / b;
    tmp1 = mcray.#floor(tmp);
    tmp2 = b * tmp1;
    return a - tmp2
  }
  static #gen32(rng) {
    let x, x1, tmp;
    x = rng.value;
    tmp = x * 48271;
    x1 = mcray.#intMod(tmp, 2147483647);
    rng.value = x1;
    return x1
  }
  static #rand(rng) {
    let scale, tmp, tmp1;
    scale = 1.0 / 2147483647.0;
    tmp = mcray.#gen32(rng);
    tmp1 = mcray.#real(tmp);
    return scale * tmp1
  }
  static #within(t, minMax) {
    let element1$, element0$, tmp;
    if (runtime.Tuple.isArrayLike(minMax) && minMax.length === 2) {
      element0$ = runtime.Tuple.get(minMax, 0);
      element1$ = runtime.Tuple.get(minMax, 1);
      tmp = element0$ <= t;
      if (tmp === true) {
        return t <= element1$
      }
      return false;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rgbAdd(c1, c2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c1) && c1.length === 3) {
      element0$ = runtime.Tuple.get(c1, 0);
      element1$ = runtime.Tuple.get(c1, 1);
      element2$ = runtime.Tuple.get(c1, 2);
      if (runtime.Tuple.isArrayLike(c2) && c2.length === 3) {
        element0$1 = runtime.Tuple.get(c2, 0);
        element1$1 = runtime.Tuple.get(c2, 1);
        element2$1 = runtime.Tuple.get(c2, 2);
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
  static #toByte(f) {
    let f1, scrut, scrut1, tmp;
    tmp = f * 255.99;
    f1 = mcray.#floor(tmp);
    scrut = f1 <= 0;
    if (scrut === true) {
      return 0
    }
    scrut1 = 255 <= f1;
    if (scrut1 === true) {
      return 255
    }
    return f1;
  }
  static #vec3Add(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
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
  static #vec3Sub(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
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
  static #vec3Scale(s, v) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(v) && v.length === 3) {
      element0$ = runtime.Tuple.get(v, 0);
      element1$ = runtime.Tuple.get(v, 1);
      element2$ = runtime.Tuple.get(v, 2);
      tmp = s * element0$;
      tmp1 = s * element1$;
      tmp2 = s * element2$;
      return globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Dot(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
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
  static #vec3Cross(v1, v2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (runtime.Tuple.isArrayLike(v1) && v1.length === 3) {
      element0$ = runtime.Tuple.get(v1, 0);
      element1$ = runtime.Tuple.get(v1, 1);
      element2$ = runtime.Tuple.get(v1, 2);
      if (runtime.Tuple.isArrayLike(v2) && v2.length === 3) {
        element0$1 = runtime.Tuple.get(v2, 0);
        element1$1 = runtime.Tuple.get(v2, 1);
        element2$1 = runtime.Tuple.get(v2, 2);
        tmp = element1$ * element2$1;
        tmp1 = element2$ * element1$1;
        tmp2 = tmp - tmp1;
        tmp3 = element2$ * element0$1;
        tmp4 = element0$ * element2$1;
        tmp5 = tmp3 - tmp4;
        tmp6 = element0$ * element1$1;
        tmp7 = element1$ * element0$1;
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
  static #vec3RandomPointInSphere(rng) {
    loopLabel: while (true) {
      let pt, scrut, tmp, tmp1, tmp2, tmp3;
      tmp = mcray.#rand(rng);
      tmp1 = mcray.#rand(rng);
      tmp2 = mcray.#rand(rng);
      pt = globalThis.Object.freeze([
        tmp,
        tmp1,
        tmp2
      ]);
      tmp3 = mcray.#vec3Dot(pt, pt);
      scrut = tmp3 < 1.0;
      if (scrut === true) {
        return pt
      }
      continue loopLabel;
    }
  }
  static #getEmission(hit) {
    let arg$MatHit$3$;
    if (hit instanceof mcray.MatHit.class) {
      arg$MatHit$3$ = hit.material;
      if (arg$MatHit$3$ instanceof mcray.Material.class) {
        return runtime.safeCall(arg$MatHit$3$.emit())
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getHitInfo(hit, ray) {
    let arg$MatHit$3$;
    if (hit instanceof mcray.MatHit.class) {
      arg$MatHit$3$ = hit.material;
      if (arg$MatHit$3$ instanceof mcray.Material.class) {
        return runtime.safeCall(arg$MatHit$3$.scatter(ray, hit))
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #objectEmpty() {
    let lambda$here;
    lambda$here = lambda$2(mcray);
    return mcray.Obj(lambda$here)
  }
  static #closer(maybeHit1, maybeHit2) {
    let scrut, arg$ObjHit$0$, arg$MatHit$0$, arg$ObjHit$0$1, arg$MatHit$0$1;
    if (maybeHit1 instanceof mcray.Miss.class) {
      return maybeHit2
    }
    if (maybeHit2 instanceof mcray.Miss.class) {
      return maybeHit1
    }
    if (maybeHit1 instanceof mcray.ObjHit.class) {
      arg$ObjHit$0$ = maybeHit1.hit;
      if (arg$ObjHit$0$ instanceof mcray.MatHit.class) {
        arg$MatHit$0$ = arg$ObjHit$0$.t;
        if (maybeHit2 instanceof mcray.ObjHit.class) {
          arg$ObjHit$0$1 = maybeHit2.hit;
          if (arg$ObjHit$0$1 instanceof mcray.MatHit.class) {
            arg$MatHit$0$1 = arg$ObjHit$0$1.t;
            scrut = arg$MatHit$0$ <= arg$MatHit$0$1;
            if (scrut === true) {
              return maybeHit1
            }
            return maybeHit2;
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #fromList(objs) {
    let arg$Cons$0$, arg$Cons$1$, hitTest1$here;
    if (objs instanceof mcray.Nil.class) {
      return mcray.#objectEmpty()
    }
    if (objs instanceof mcray.Cons.class) {
      arg$Cons$0$ = objs.head;
      arg$Cons$1$ = objs.tail;
      if (arg$Cons$1$ instanceof mcray.Nil.class) {
        return arg$Cons$0$
      }
    }
    hitTest1$here = hitTest1$(mcray, objs);
    return mcray.Obj(hitTest1$here);
  }
  static #makePixelRenderer(toRGB, cvt) {
    return (r, c) => {
      let tmp;
      tmp = runtime.safeCall(toRGB(r, c));
      return runtime.safeCall(cvt(tmp))
    }
  }
  static #foreachPixel(cam, pr) {
    let arg$Cam$0$, arg$Cam$1$, tmp;
    if (cam instanceof mcray.Cam.class) {
      let colors, id, param0, param1, param2, param3, param4, param5, inlinedVal;
      arg$Cam$0$ = cam.wid;
      arg$Cam$1$ = cam.ht;
      tmp = arg$Cam$1$ - 1;
      colors = mcray.Nil;
      id = 0;
      param0 = mcray;
      param1 = pr;
      param2 = arg$Cam$0$;
      param3 = tmp;
      param4 = colors;
      param5 = undefined;
      inlinedLbl: {
        loopLabel: while (true) {
          switch (id) {
            case 0:
              {
                let scrut, tmp1, tmp2;
                scrut = param3 < 0;
                if (scrut === true) {
                  inlinedVal = param4;
                  break inlinedLbl
                }
                {
                  let param4_tmp;
                  tmp1 = param3 - 1;
                  tmp2 = param2 - 1;
                  param4_tmp = param4;
                  param3 = tmp1;
                  param4 = tmp2;
                  param5 = param4_tmp;
                  id = 1;
                  continue loopLabel;
                }
              }
            case 1:
              {
                let scrut, tmp1, tmp2, tmp3;
                scrut = param4 < 0;
                if (scrut === true) {
                  param4 = param5;
                  id = 0;
                  continue loopLabel
                }
                tmp1 = param4 - 1;
                tmp2 = runtime.safeCall(param1(param3, param4));
                tmp3 = param0.Cons(tmp2, param5);
                param4 = tmp1;
                param5 = tmp3;
                id = 1;
                continue loopLabel;
              }
          }
        }
      }
      return mcray.Img(arg$Cam$0$, arg$Cam$1$, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let rng, rng1, cam, tmp, inlinedVal, inlinedVal1, pw, aspect, theta, flen, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, scrut, tmp7, tmp8, element2$, element1$, element0$, inlinedVal7, scrut1, tmp9, tmp10, inlinedVal8, scrut2, tmp11, tmp12, element2$1, element1$1, element0$1, tmp13, tmp14, tmp15, element2$2, element1$2, element0$2, element2$3, element1$3, element0$3, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, mcray2, rng2, x, z, objs, inlinedVal16, lambda$here, lambda$here1, rSq, invR, hitTest1$here, lambda$here2, lambda$here3, rSq1, invR1, hitTest1$here1, lambda$here4, lambda$here5, rSq2, invR2, hitTest1$here2, inlinedVal17, inlinedVal18, fv_element0$, fv_element1$, fv_element2$, fv_tmp, fv_tmp1, fv_tmp2, inlinedVal19;
    rng = new mcray.Ref.class(1234567);
    rng1 = rng;
    tmp = globalThis.Object.freeze([
      13.0,
      2.0,
      3.0
    ]);
    if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
      fv_element0$ = runtime.Tuple.get(tmp, 0);
      fv_element1$ = runtime.Tuple.get(tmp, 1);
      fv_element2$ = runtime.Tuple.get(tmp, 2);
      fv_tmp = 0.0 - fv_element0$;
      fv_tmp1 = 0.0 - fv_element1$;
      fv_tmp2 = 0.0 - fv_element2$;
      inlinedVal19 = globalThis.Object.freeze([
        fv_tmp,
        fv_tmp1,
        fv_tmp2
      ]);
      inlinedVal17 = mcray1.#vec3Dot(inlinedVal19, inlinedVal19);
      inlinedVal18 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal17));
      scrut = inlinedVal18 < 0.0001;
      if (scrut === true) {
        let inlinedVal20;
        inlinedVal20 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal6 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22(inlinedVal20);
      } else {
        tmp7 = 1.0 / inlinedVal18;
        tmp8 = mcray1.#vec3Scale(tmp7, inlinedVal19);
        inlinedVal6 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22(tmp8);
      }
      inlinedVal2 = inlinedVal6();
      if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
        let inlinedVal20, inlinedVal21, inlinedVal22, inlinedVal23, fv_tmp3, fv_tmp4, fv_tmp5, fv_tmp6, fv_tmp7, fv_tmp8, fv_tmp9, fv_tmp10, fv_tmp11, inlinedVal24;
        element0$ = runtime.Tuple.get(inlinedVal2, 0);
        element1$ = runtime.Tuple.get(inlinedVal2, 1);
        element2$ = runtime.Tuple.get(inlinedVal2, 2);
        fv_tmp3 = element1$ * 0.0;
        fv_tmp4 = element2$ * 1.0;
        fv_tmp5 = fv_tmp3 - fv_tmp4;
        fv_tmp6 = element2$ * 0.0;
        fv_tmp7 = element0$ * 0.0;
        fv_tmp8 = fv_tmp6 - fv_tmp7;
        fv_tmp9 = element0$ * 1.0;
        fv_tmp10 = element1$ * 0.0;
        fv_tmp11 = fv_tmp9 - fv_tmp10;
        inlinedVal24 = globalThis.Object.freeze([
          fv_tmp5,
          fv_tmp8,
          fv_tmp11
        ]);
        inlinedVal20 = mcray1.#vec3Dot(inlinedVal24, inlinedVal24);
        inlinedVal21 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal20));
        scrut1 = inlinedVal21 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal25;
          inlinedVal25 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal7 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21(inlinedVal25);
        } else {
          tmp9 = 1.0 / inlinedVal21;
          tmp10 = mcray1.#vec3Scale(tmp9, inlinedVal24);
          inlinedVal7 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21(tmp10);
        }
        inlinedVal3 = inlinedVal7();
        tmp1 = mcray1.#vec3Cross(inlinedVal3, inlinedVal2);
        inlinedVal22 = mcray1.#vec3Dot(tmp1, tmp1);
        inlinedVal23 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal22));
        scrut2 = inlinedVal23 < 0.0001;
        if (scrut2 === true) {
          let inlinedVal25;
          inlinedVal25 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal8 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2(inlinedVal25);
        } else {
          tmp11 = 1.0 / inlinedVal23;
          tmp12 = mcray1.#vec3Scale(tmp11, tmp1);
          inlinedVal8 = main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2(tmp12);
        }
        inlinedVal4 = inlinedVal8();
        pw = 2.0 / 3;
        aspect = 2 / 3;
        tmp2 = 3.14159265358979323846 * 30.0;
        theta = tmp2 / 180.0;
        tmp3 = 0.5 * theta;
        inlinedVal5 = runtime.safeCall(globalThis.Math.tan(tmp3));
        flen = 1.0 / inlinedVal5;
        if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 3) {
          element0$1 = runtime.Tuple.get(inlinedVal2, 0);
          element1$1 = runtime.Tuple.get(inlinedVal2, 1);
          element2$1 = runtime.Tuple.get(inlinedVal2, 2);
          tmp13 = flen * element0$1;
          tmp14 = flen * element1$1;
          tmp15 = flen * element2$1;
          if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 3) {
            let fv_tmp12, fv_tmp13, fv_tmp14;
            element0$2 = runtime.Tuple.get(tmp, 0);
            element1$2 = runtime.Tuple.get(tmp, 1);
            element2$2 = runtime.Tuple.get(tmp, 2);
            fv_tmp12 = element0$2 + tmp13;
            fv_tmp13 = element1$2 + tmp14;
            fv_tmp14 = element2$2 + tmp15;
            if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 3) {
              let tmp29, tmp30, trace1, minMaxT, inlinedVal25, rfp, scrut3, arg$Cam$2$, tmp31, fv_tmp15, fv_tmp16, fv_tmp17, fv_element0$1, fv_element1$1, fv_element2$1, fv_tmp18, fv_tmp19, fv_tmp20, inlinedVal26;
              element0$3 = runtime.Tuple.get(inlinedVal4, 0);
              element1$3 = runtime.Tuple.get(inlinedVal4, 1);
              element2$3 = runtime.Tuple.get(inlinedVal4, 2);
              tmp16 = aspect * element0$3;
              tmp17 = aspect * element1$3;
              tmp18 = aspect * element2$3;
              fv_tmp15 = fv_tmp12 + tmp16;
              fv_tmp16 = fv_tmp13 + tmp17;
              fv_tmp17 = fv_tmp14 + tmp18;
              if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 3) {
                fv_element0$1 = runtime.Tuple.get(inlinedVal3, 0);
                fv_element1$1 = runtime.Tuple.get(inlinedVal3, 1);
                fv_element2$1 = runtime.Tuple.get(inlinedVal3, 2);
                fv_tmp18 = fv_tmp15 - fv_element0$1;
                fv_tmp19 = fv_tmp16 - fv_element1$1;
                fv_tmp20 = fv_tmp17 - fv_element2$1;
                inlinedVal26 = globalThis.Object.freeze([
                  fv_tmp18,
                  fv_tmp19,
                  fv_tmp20
                ]);
                tmp4 = mcray1.#vec3Scale(pw, inlinedVal3);
                tmp5 = - pw;
                tmp6 = mcray1.#vec3Scale(tmp5, inlinedVal4);
                inlinedVal = mcray1.Cam(3, 2, 5, tmp, inlinedVal26, tmp4, tmp6);
                cam = inlinedVal;
                tmp19 = - 1000.0;
                tmp20 = globalThis.Object.freeze([
                  0.0,
                  tmp19,
                  0.0
                ]);
                inlinedVal9 = globalThis.Object.freeze([
                  0.5,
                  0.5,
                  0.5
                ]);
                lambda$here = lambda$();
                lambda$here1 = main_test_buildScene_makeScene_lambertian_lambda$$lambda$1(mcray1, rng, inlinedVal9);
                inlinedVal10 = mcray1.Material(lambda$here, lambda$here1);
                rSq = 1000.0 * 1000.0;
                invR = 1.0 / 1000.0;
                hitTest1$here = main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$2(mcray1, tmp20, inlinedVal10, rSq, invR);
                inlinedVal11 = mcray1.Obj(hitTest1$here);
                tmp21 = globalThis.Object.freeze([
                  4.0,
                  1.0,
                  0.0
                ]);
                tmp22 = globalThis.Object.freeze([
                  0.7,
                  0.6,
                  0.5
                ]);
                lambda$here2 = lambda$1();
                lambda$here3 = main_test_buildScene_makeScene_metal_lambda$$lambda$(mcray1, rng, tmp22, 0.0);
                inlinedVal12 = mcray1.Material(lambda$here2, lambda$here3);
                rSq1 = 1.0 * 1.0;
                invR1 = 1.0 / 1.0;
                hitTest1$here1 = main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$1(mcray1, tmp21, inlinedVal12, rSq1, invR1);
                inlinedVal13 = mcray1.Obj(hitTest1$here1);
                tmp23 = - 4.0;
                tmp24 = globalThis.Object.freeze([
                  tmp23,
                  1.0,
                  0.0
                ]);
                tmp25 = globalThis.Object.freeze([
                  0.4,
                  0.2,
                  0.1
                ]);
                lambda$here4 = lambda$();
                lambda$here5 = main_test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray1, rng, tmp25);
                inlinedVal14 = mcray1.Material(lambda$here4, lambda$here5);
                rSq2 = 1.0 * 1.0;
                invR2 = 1.0 / 1.0;
                hitTest1$here2 = main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$(mcray1, tmp24, inlinedVal14, rSq2, invR2);
                inlinedVal15 = mcray1.Obj(hitTest1$here2);
                tmp26 = mcray1.Cons(inlinedVal15, mcray1.Nil);
                tmp27 = mcray1.Cons(inlinedVal13, tmp26);
                tmp28 = mcray1.Cons(inlinedVal11, tmp27);
                mcray2 = mcray1;
                rng2 = rng;
                x = -11;
                z = -11;
                objs = tmp28;
                inlinedLbl: {
                  loopLabel: while (true) {
                    let scrut4, scrut5, tmp32, tmp33, tmp34;
                    scrut4 = z < 11;
                    if (scrut4 === true) {
                      let x1, z1, c, scrut6, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, scale, scale1, scale2, rSq3, invR3, hitTest1$here3, x2, tmp50, x3, tmp51, x4, tmp52, inlinedVal31, inlinedVal32, inlinedVal33, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, inlinedVal34, inlinedVal35, inlinedVal36;
                      tmp32 = z + 1;
                      scale = 1.0 / 2147483647.0;
                      x4 = rng2.value;
                      tmp52 = x4 * 48271;
                      tmp57 = tmp52 / 2147483647;
                      inlinedVal34 = runtime.safeCall(globalThis.Math.floor(tmp57));
                      tmp58 = 2147483647 * inlinedVal34;
                      inlinedVal31 = tmp52 - tmp58;
                      rng2.value = inlinedVal31;
                      inlinedVal27 = scale * inlinedVal31;
                      scale1 = 1.0 / 2147483647.0;
                      x3 = rng2.value;
                      tmp51 = x3 * 48271;
                      tmp55 = tmp51 / 2147483647;
                      inlinedVal35 = runtime.safeCall(globalThis.Math.floor(tmp55));
                      tmp56 = 2147483647 * inlinedVal35;
                      inlinedVal32 = tmp51 - tmp56;
                      rng2.value = inlinedVal32;
                      inlinedVal28 = scale1 * inlinedVal32;
                      tmp35 = 0.9 * inlinedVal28;
                      x1 = x + tmp35;
                      scale2 = 1.0 / 2147483647.0;
                      x2 = rng2.value;
                      tmp50 = x2 * 48271;
                      tmp53 = tmp50 / 2147483647;
                      inlinedVal36 = runtime.safeCall(globalThis.Math.floor(tmp53));
                      tmp54 = 2147483647 * inlinedVal36;
                      inlinedVal33 = tmp50 - tmp54;
                      rng2.value = inlinedVal33;
                      inlinedVal29 = scale2 * inlinedVal33;
                      tmp36 = 0.9 * inlinedVal29;
                      z1 = z + tmp36;
                      c = globalThis.Object.freeze([
                        x1,
                        0.2,
                        z1
                      ]);
                      scrut6 = inlinedVal27 < 0.8;
                      if (scrut6 === true) {
                        let inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, inlinedVal43, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here6, lambda$here7, x5, tmp59, x6, tmp60, x7, tmp61, x8, tmp62, x9, tmp63, x10, tmp64, inlinedVal44, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48, inlinedVal49, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, inlinedVal54, inlinedVal55;
                        scale3 = 1.0 / 2147483647.0;
                        x10 = rng2.value;
                        tmp64 = x10 * 48271;
                        tmp75 = tmp64 / 2147483647;
                        inlinedVal50 = runtime.safeCall(globalThis.Math.floor(tmp75));
                        tmp76 = 2147483647 * inlinedVal50;
                        inlinedVal44 = tmp64 - tmp76;
                        rng2.value = inlinedVal44;
                        inlinedVal37 = scale3 * inlinedVal44;
                        scale4 = 1.0 / 2147483647.0;
                        x9 = rng2.value;
                        tmp63 = x9 * 48271;
                        tmp73 = tmp63 / 2147483647;
                        inlinedVal51 = runtime.safeCall(globalThis.Math.floor(tmp73));
                        tmp74 = 2147483647 * inlinedVal51;
                        inlinedVal45 = tmp63 - tmp74;
                        rng2.value = inlinedVal45;
                        inlinedVal38 = scale4 * inlinedVal45;
                        tmp37 = inlinedVal37 * inlinedVal38;
                        scale5 = 1.0 / 2147483647.0;
                        x8 = rng2.value;
                        tmp62 = x8 * 48271;
                        tmp71 = tmp62 / 2147483647;
                        inlinedVal52 = runtime.safeCall(globalThis.Math.floor(tmp71));
                        tmp72 = 2147483647 * inlinedVal52;
                        inlinedVal46 = tmp62 - tmp72;
                        rng2.value = inlinedVal46;
                        inlinedVal39 = scale5 * inlinedVal46;
                        scale6 = 1.0 / 2147483647.0;
                        x7 = rng2.value;
                        tmp61 = x7 * 48271;
                        tmp69 = tmp61 / 2147483647;
                        inlinedVal53 = runtime.safeCall(globalThis.Math.floor(tmp69));
                        tmp70 = 2147483647 * inlinedVal53;
                        inlinedVal47 = tmp61 - tmp70;
                        rng2.value = inlinedVal47;
                        inlinedVal40 = scale6 * inlinedVal47;
                        tmp38 = inlinedVal39 * inlinedVal40;
                        scale7 = 1.0 / 2147483647.0;
                        x6 = rng2.value;
                        tmp60 = x6 * 48271;
                        tmp67 = tmp60 / 2147483647;
                        inlinedVal54 = runtime.safeCall(globalThis.Math.floor(tmp67));
                        tmp68 = 2147483647 * inlinedVal54;
                        inlinedVal48 = tmp60 - tmp68;
                        rng2.value = inlinedVal48;
                        inlinedVal41 = scale7 * inlinedVal48;
                        scale8 = 1.0 / 2147483647.0;
                        x5 = rng2.value;
                        tmp59 = x5 * 48271;
                        tmp65 = tmp59 / 2147483647;
                        inlinedVal55 = runtime.safeCall(globalThis.Math.floor(tmp65));
                        tmp66 = 2147483647 * inlinedVal55;
                        inlinedVal49 = tmp59 - tmp66;
                        rng2.value = inlinedVal49;
                        inlinedVal42 = scale8 * inlinedVal49;
                        tmp39 = inlinedVal41 * inlinedVal42;
                        tmp40 = globalThis.Object.freeze([
                          tmp37,
                          tmp38,
                          tmp39
                        ]);
                        lambda$here6 = lambda$();
                        lambda$here7 = main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray1, rng2, tmp40);
                        inlinedVal43 = mcray1.Material(lambda$here6, lambda$here7);
                        tmp41 = inlinedVal43;
                      } else {
                        let inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, scale3, scale4, scale5, scale6, lambda$here6, lambda$here7, x5, tmp59, x6, tmp60, x7, tmp61, x8, tmp62, inlinedVal42, inlinedVal43, inlinedVal44, inlinedVal45, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, inlinedVal46, inlinedVal47, inlinedVal48, inlinedVal49;
                        scale3 = 1.0 / 2147483647.0;
                        x8 = rng2.value;
                        tmp62 = x8 * 48271;
                        tmp69 = tmp62 / 2147483647;
                        inlinedVal46 = runtime.safeCall(globalThis.Math.floor(tmp69));
                        tmp70 = 2147483647 * inlinedVal46;
                        inlinedVal42 = tmp62 - tmp70;
                        rng2.value = inlinedVal42;
                        inlinedVal37 = scale3 * inlinedVal42;
                        tmp42 = 1.0 + inlinedVal37;
                        tmp43 = 0.5 * tmp42;
                        scale4 = 1.0 / 2147483647.0;
                        x7 = rng2.value;
                        tmp61 = x7 * 48271;
                        tmp67 = tmp61 / 2147483647;
                        inlinedVal47 = runtime.safeCall(globalThis.Math.floor(tmp67));
                        tmp68 = 2147483647 * inlinedVal47;
                        inlinedVal43 = tmp61 - tmp68;
                        rng2.value = inlinedVal43;
                        inlinedVal38 = scale4 * inlinedVal43;
                        tmp44 = 1.0 + inlinedVal38;
                        tmp45 = 0.5 * tmp44;
                        scale5 = 1.0 / 2147483647.0;
                        x6 = rng2.value;
                        tmp60 = x6 * 48271;
                        tmp65 = tmp60 / 2147483647;
                        inlinedVal48 = runtime.safeCall(globalThis.Math.floor(tmp65));
                        tmp66 = 2147483647 * inlinedVal48;
                        inlinedVal44 = tmp60 - tmp66;
                        rng2.value = inlinedVal44;
                        inlinedVal39 = scale5 * inlinedVal44;
                        tmp46 = 1.0 + inlinedVal39;
                        tmp47 = 0.5 * tmp46;
                        tmp48 = globalThis.Object.freeze([
                          tmp43,
                          tmp45,
                          tmp47
                        ]);
                        scale6 = 1.0 / 2147483647.0;
                        x5 = rng2.value;
                        tmp59 = x5 * 48271;
                        tmp63 = tmp59 / 2147483647;
                        inlinedVal49 = runtime.safeCall(globalThis.Math.floor(tmp63));
                        tmp64 = 2147483647 * inlinedVal49;
                        inlinedVal45 = tmp59 - tmp64;
                        rng2.value = inlinedVal45;
                        inlinedVal40 = scale6 * inlinedVal45;
                        tmp49 = 0.5 * inlinedVal40;
                        lambda$here6 = lambda$1();
                        lambda$here7 = main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray1, rng2, tmp48, tmp49);
                        inlinedVal41 = mcray1.Material(lambda$here6, lambda$here7);
                        tmp41 = inlinedVal41;
                      }
                      rSq3 = 0.2 * 0.2;
                      invR3 = 1.0 / 0.2;
                      hitTest1$here3 = main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$(mcray1, c, tmp41, rSq3, invR3);
                      inlinedVal30 = mcray1.Obj(hitTest1$here3);
                      tmp33 = mcray2.Cons(inlinedVal30, objs);
                      z = tmp32;
                      objs = tmp33;
                      continue loopLabel
                    }
                    scrut5 = x < 11;
                    if (scrut5 === true) {
                      tmp34 = x + 1;
                      x = tmp34;
                      z = -11;
                      continue loopLabel
                    }
                    inlinedVal16 = objs;
                    break inlinedLbl;
                  }
                }
                inlinedVal1 = mcray1.#fromList(inlinedVal16);
                inlinedVal25 = 1.0 / 0.0;
                minMaxT = globalThis.Object.freeze([
                  0.001,
                  inlinedVal25
                ]);
                trace1 = main_test_rayTracer_traceRay_lambda$$lambda$(mcray1, inlinedVal1, 20, minMaxT);
                if (cam instanceof mcray1.Cam.class) {
                  arg$Cam$2$ = cam.ns;
                  rfp = main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng1, cam);
                  scrut3 = arg$Cam$2$ == 0;
                  if (scrut3 === true) {
                    tmp31 = 1.0;
                  } else {
                    tmp31 = 1.0 / arg$Cam$2$;
                  }
                  tmp29 = main_test_rayTracer_aaPixelToRGB_lambda$$lambda$(mcray1, trace1, rfp, tmp31);
                  tmp30 = mcray1.#makePixelRenderer(tmp29, main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma);
                  return mcray1.#foreachPixel(cam, tmp30)
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
  static [definitionMetadata] = ["class", "mcray"];
});
export { hitTest1 as _$_modulePrivate_$_hitTest1 };
export { trace as _$_modulePrivate_$_trace };
export { mcray1 as _$_modulePrivate_$_mcray };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { hitTest1$ as _$_modulePrivate_$_hitTest1$ };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { main_test_rayTracer_traceRay_lambda$_lambda_trace$trace as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_lambda_trace$trace };
export { main_test_rayTracer_traceRay_lambda$$lambda$ as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$$lambda$ };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_lambda$_lambda$lambda };
export { main_test_rayTracer_aaPixelToRGB_lambda$$lambda$ as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_lambda$$lambda$ };
export { main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma as _$_modulePrivate_$_main_test_rayTracer_colorFromRGBWithGamma$colorFromRGBWithGamma };
export { main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$_hitTest1$hitTest1 };
export { main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_sphereMake_hitTest1$$hitTest1$ };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1 as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest1 };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$ as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$ };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$ };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest11 as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest11 };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$1 };
export { main_test_buildScene_makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$$lambda$ };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest12 as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$_hitTest1$hitTest12 };
export { main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$2 as _$_modulePrivate_$_main_test_buildScene_makeScene_sphereMake_hitTest1$$hitTest1$2 };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 };
export { rayTracer_traceRay_lambda$_lambda_trace$trace as _$_modulePrivate_$_rayTracer_traceRay_lambda$_lambda_trace$trace };
export { traceRay_lambda$_lambda_trace$trace as _$_modulePrivate_$_traceRay_lambda$_lambda_trace$trace };
export { lambda_trace$trace as _$_modulePrivate_$_lambda_trace$trace };
export { lambda$_lambda_trace$trace as _$_modulePrivate_$_lambda$_lambda_trace$trace };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay_rayMake_vec3Normalize$scrut_tup2 };
export { main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Nil };
export { main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_lambda$_lambda_listFoldl$l_Cons };
export { main_test_rayTracer_colorFromRGBWithGamma$c_tup3 as _$_modulePrivate_$_main_test_rayTracer_colorFromRGBWithGamma$c_tup3 };
export { main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_buildScene_cameraMake_vec3Normalize$scrut_tup2 };
export { main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21 as _$_modulePrivate_$_main_test_buildScene_cameraMake_vec3Normalize$scrut_tup21 };
export { main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22 as _$_modulePrivate_$_main_test_buildScene_cameraMake_vec3Normalize$scrut_tup22 };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 };
export { main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$_lambda_rayMake_vec3Normalize$scrut_tup2 };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda_rayMake_vec3Normalize$scrut_tup21 };
export { main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_None };
export { main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_lambda_trace$scrut_Some };
export { main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2 as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2 };
export { main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_lambda_trace$arg$Some$0$_tup2$worker };
export { main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker as _$_modulePrivate_$_main_test_rayTracer_colorFromRGBWithGamma$c_tup3$worker };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export default mcray1;
