const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const intMod$accessorSymbol = globalThis.Symbol("intMod");
const within$accessorSymbol = globalThis.Symbol("within");
const rgbAdd$accessorSymbol = globalThis.Symbol("rgbAdd");
const rgbModulate$accessorSymbol = globalThis.Symbol("rgbModulate");
const rgbScale$accessorSymbol = globalThis.Symbol("rgbScale");
const toByte$accessorSymbol = globalThis.Symbol("toByte");
const vec3Add$accessorSymbol = globalThis.Symbol("vec3Add");
const vec3Sub$accessorSymbol = globalThis.Symbol("vec3Sub");
const vec3Scale$accessorSymbol = globalThis.Symbol("vec3Scale");
const vec3Dot$accessorSymbol = globalThis.Symbol("vec3Dot");
const vec3RandomPointInSphere$accessorSymbol = globalThis.Symbol("vec3RandomPointInSphere");
const getEmission$accessorSymbol = globalThis.Symbol("getEmission");
const getHitInfo$accessorSymbol = globalThis.Symbol("getHitInfo");
const closer$accessorSymbol = globalThis.Symbol("closer");
const rayToRGB$accessorSymbol = globalThis.Symbol("rayToRGB");
const listFoldl$tailrec$accessorSymbol = globalThis.Symbol("listFoldl$tailrec");
let go, cvt, hitTest1, hitTest11, colLp, rowLp, mkRay, trace, lp, mcray1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, hitTest1$, lambda$5, hitTest1$1, mkRay$, lambda$6, lambda$7, lambda$8, rowLp_colLp, main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$, main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda, main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1, main_test_buildScene_makeScene_lambertian_lambda$$lambda$, main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda, main_test_buildScene_makeScene_lambertian_lambda$$lambda$1, main_test_buildScene_makeScene_metal_lambda$$lambda$, main_test_buildScene_makeScene_lambertian_lambda$$lambda$2, main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1, main_test_buildScene_makeScene_lambertian_lambda$$lambda$3, test_buildScene_makeScene_lambertian_lambda$_lambda$lambda, test_buildScene_makeScene_lambertian_lambda$$lambda$, test_buildScene_makeScene_lambertian_lambda$$lambda$1, test_buildScene_makeScene_metal_lambda$$lambda$, test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1, test_buildScene_makeScene_lambertian_lambda$$lambda$2, test_buildScene_makeScene_lambertian_lambda$$lambda$3, test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda, test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$, test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1, test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$, test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$, test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel, buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$, buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$, buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda, buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1, buildScene_makeScene_lambertian_lambda$$lambda$, buildScene_makeScene_lambertian_lambda$_lambda$lambda, buildScene_makeScene_lambertian_lambda$$lambda$1, buildScene_makeScene_metal_lambda$$lambda$, buildScene_makeScene_lambertian_lambda$$lambda$2, buildScene_makeScene_lambertian_lambda$_lambda$lambda1, buildScene_makeScene_lambertian_lambda$$lambda$3, makeScene_lambertian_lambda$_lambda$lambda, makeScene_lambertian_lambda$$lambda$, makeScene_lambertian_lambda$$lambda$1, makeScene_metal_lambda$$lambda$, makeScene_lambertian_lambda$_lambda$lambda1, makeScene_lambertian_lambda$$lambda$2, makeScene_lambertian_lambda$$lambda$3, makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda, makeScene_lp_randomSphere_lambertian_lambda$$lambda$, makeScene_lp_randomSphere_lambertian_lambda$$lambda$1, makeScene_lp_randomSphere_metal_lambda$$lambda$, randomSphere_lambertian_lambda$_lambda$lambda, randomSphere_lambertian_lambda$$lambda$, randomSphere_lambertian_lambda$$lambda$1, randomSphere_metal_lambda$$lambda$, rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$, rayTracer_aaPixelToRGB_raysForPixel$raysForPixel, aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, aaPixelToRGB_raysForPixel_mkRay$$mkRay$, aaPixelToRGB_raysForPixel$raysForPixel, raysForPixel_mkRay$_mkRay$mkRay, raysForPixel_mkRay$$mkRay$, metal_lambda$$lambda$, lambertian_lambda$$lambda$, lambertian_lambda$_lambda$lambda, lambertian_lambda$$lambda$1, lambda$_lambda$lambda, mkRay$_mkRay$mkRay, lp_randomSphere_metal_lambda$$lambda$, lp_randomSphere_lambertian_lambda$$lambda$, lp_randomSphere_lambertian_lambda$_lambda$lambda, lp_randomSphere_lambertian_lambda$$lambda$1, main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, main_test_rayTracer_traceRay_lambda$_trace$trace, main_test_rayTracer_traceRay_lambda$$lambda$, test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, test_rayTracer_traceRay_lambda$_trace$trace, test_rayTracer_traceRay_lambda$$lambda$, rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, aaPixelToRGB_raysForPixel_listTabulate_go$go, raysForPixel_listTabulate_go$go, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda, main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1, main_test_buildScene_makeScene_metal_lambda$_lambda$lambda, main_test_buildScene_makeScene_metal_lambda$$lambda$1, test_buildScene_makeScene_metal_lambda$_lambda$lambda, test_buildScene_makeScene_metal_lambda$$lambda$1, test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda, test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1, buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda, buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1, buildScene_makeScene_metal_lambda$_lambda$lambda, buildScene_makeScene_metal_lambda$$lambda$1, makeScene_metal_lambda$_lambda$lambda, makeScene_metal_lambda$$lambda$1, makeScene_lp_randomSphere_metal_lambda$_lambda$lambda, makeScene_lp_randomSphere_metal_lambda$$lambda$1, randomSphere_metal_lambda$_lambda$lambda, randomSphere_metal_lambda$$lambda$1, metal_lambda$_lambda$lambda, metal_lambda$$lambda$1, lambda$_lambda$lambda1, lp_randomSphere_metal_lambda$_lambda$lambda, lp_randomSphere_metal_lambda$$lambda$1, aaPixelToRGB_raysForPixel$raysForPixel$worker, rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker, test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker, main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker;
main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
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
    f = main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray1, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 = function main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$ = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_test_buildScene_makeScene_metal_lambda$$lambda$ = function main_test_buildScene_makeScene_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$2 = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 = function main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lambertian_lambda$$lambda$3 = function main_test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
test_buildScene_makeScene_lambertian_lambda$_lambda$lambda = function test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_buildScene_makeScene_lambertian_lambda$$lambda$ = function test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
test_buildScene_makeScene_lambertian_lambda$$lambda$1 = function test_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
test_buildScene_makeScene_metal_lambda$$lambda$ = function test_buildScene_makeScene_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 = function test_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_buildScene_makeScene_lambertian_lambda$$lambda$2 = function test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
test_buildScene_makeScene_lambertian_lambda$$lambda$3 = function test_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda = function test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ = function test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 = function test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ = function test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel = function test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, cam) {
  return (r, c) => {
    return test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c)
  }
};
test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker = function test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c) {
  let ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
  if (cam instanceof mcray1.Cam.class) {
    let f;
    arg$Cam$2$ = cam.ns;
    arg$Cam$3$ = cam.pos;
    arg$Cam$4$ = cam.ulc;
    arg$Cam$5$ = cam.hvec;
    arg$Cam$6$ = cam.vvec;
    ulcDir = mcray1[vec3Sub$accessorSymbol](arg$Cam$4$, arg$Cam$3$);
    f = test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray1, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ = function buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ = function buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda = function buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 = function buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
buildScene_makeScene_lambertian_lambda$$lambda$ = function buildScene_makeScene_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
buildScene_makeScene_lambertian_lambda$_lambda$lambda = function buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_lambertian_lambda$$lambda$1 = function buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
buildScene_makeScene_metal_lambda$$lambda$ = function buildScene_makeScene_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
buildScene_makeScene_lambertian_lambda$$lambda$2 = function buildScene_makeScene_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
buildScene_makeScene_lambertian_lambda$_lambda$lambda1 = function buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_lambertian_lambda$$lambda$3 = function buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return buildScene_makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
makeScene_lambertian_lambda$_lambda$lambda = function makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
makeScene_lambertian_lambda$$lambda$ = function makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
makeScene_lambertian_lambda$$lambda$1 = function makeScene_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
makeScene_metal_lambda$$lambda$ = function makeScene_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
makeScene_lambertian_lambda$_lambda$lambda1 = function makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
makeScene_lambertian_lambda$$lambda$2 = function makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
makeScene_lambertian_lambda$$lambda$3 = function makeScene_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda = function makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
makeScene_lp_randomSphere_lambertian_lambda$$lambda$ = function makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 = function makeScene_lp_randomSphere_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
makeScene_lp_randomSphere_metal_lambda$$lambda$ = function makeScene_lp_randomSphere_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
randomSphere_lambertian_lambda$_lambda$lambda = function randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
randomSphere_lambertian_lambda$$lambda$ = function randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
randomSphere_lambertian_lambda$$lambda$1 = function randomSphere_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
randomSphere_metal_lambda$$lambda$ = function randomSphere_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
rayTracer_aaPixelToRGB_raysForPixel$raysForPixel = function rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, cam) {
  return (r, c) => {
    return rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c)
  }
};
rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker = function rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c) {
  let ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
  if (cam instanceof mcray1.Cam.class) {
    let f;
    arg$Cam$2$ = cam.ns;
    arg$Cam$3$ = cam.pos;
    arg$Cam$4$ = cam.ulc;
    arg$Cam$5$ = cam.hvec;
    arg$Cam$6$ = cam.vvec;
    ulcDir = mcray1[vec3Sub$accessorSymbol](arg$Cam$4$, arg$Cam$3$);
    f = rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray1, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
aaPixelToRGB_raysForPixel$raysForPixel = function aaPixelToRGB_raysForPixel$raysForPixel(rng, cam) {
  return (r, c) => {
    return aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c)
  }
};
aaPixelToRGB_raysForPixel$raysForPixel$worker = function aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c) {
  let ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
  if (cam instanceof mcray1.Cam.class) {
    let f;
    arg$Cam$2$ = cam.ns;
    arg$Cam$3$ = cam.pos;
    arg$Cam$4$ = cam.ulc;
    arg$Cam$5$ = cam.hvec;
    arg$Cam$6$ = cam.vvec;
    ulcDir = mcray1[vec3Sub$accessorSymbol](arg$Cam$4$, arg$Cam$3$);
    f = aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray1, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
raysForPixel_mkRay$_mkRay$mkRay = function raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
raysForPixel_mkRay$$mkRay$ = function raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
metal_lambda$$lambda$ = function metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
lambertian_lambda$$lambda$ = function lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
lambertian_lambda$_lambda$lambda = function lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambertian_lambda$$lambda$1 = function lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
lambda$_lambda$lambda = function lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
mkRay$_mkRay$mkRay = function mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lp_randomSphere_metal_lambda$$lambda$ = function lp_randomSphere_metal_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
lp_randomSphere_lambertian_lambda$$lambda$ = function lp_randomSphere_lambertian_lambda$$lambda$() {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
lp_randomSphere_lambertian_lambda$_lambda$lambda = function lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lp_randomSphere_lambertian_lambda$$lambda$1 = function lp_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return lp_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go = function main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
main_test_rayTracer_traceRay_lambda$_trace$trace = function main_test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, depth) {
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
      inlinedVal = runtime.safeCall(world.hit(ray, minMaxT));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4, tmp5;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let inlinedVal1, tmp6, tmp7, tmp8;
            element1$2 = runtime.Tuple.get(element1$1, 1);
            inlinedVal1 = globalThis.Object.freeze([
              1.0,
              1.0,
              1.0
            ]);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = globalThis.Object.freeze([
              0.5,
              0.7,
              1.0
            ]);
            tmp6 = 1.0 - tmp4;
            tmp7 = mcray1[rgbScale$accessorSymbol](tmp6, inlinedVal1);
            tmp8 = mcray1[rgbScale$accessorSymbol](tmp4, tmp5);
            return mcray1[rgbAdd$accessorSymbol](tmp7, tmp8)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          let arg$MatHit$3$;
          if (arg$ObjHit$0$ instanceof mcray1.MatHit.class) {
            arg$MatHit$3$ = arg$ObjHit$0$.material;
            if (arg$MatHit$3$ instanceof mcray1.Material.class) {
              return runtime.safeCall(arg$MatHit$3$.emit())
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let inlinedVal1, arg$MatHit$3$;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            if (arg$ObjHit$0$ instanceof mcray1.MatHit.class) {
              arg$MatHit$3$ = arg$ObjHit$0$.material;
              if (arg$MatHit$3$ instanceof mcray1.Material.class) {
                inlinedVal1 = runtime.safeCall(arg$MatHit$3$.emit());
                tmp = depth - 1;
                tmp1 = main_test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, element1$, tmp);
                tmp2 = mcray2[rgbModulate$accessorSymbol](element0$, tmp1);
                return mcray2[rgbAdd$accessorSymbol](inlinedVal1, tmp2)
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
main_test_rayTracer_traceRay_lambda$$lambda$ = function main_test_rayTracer_traceRay_lambda$$lambda$(mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return main_test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, maxDepth)
  }
};
test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go = function test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
test_rayTracer_traceRay_lambda$_trace$trace = function test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, depth) {
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
      inlinedVal = runtime.safeCall(world.hit(ray, minMaxT));
      if (inlinedVal instanceof mcray2.Miss.class) {
        let element1$1, element1$2, tmp3, tmp4, tmp5;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          element1$1 = runtime.Tuple.get(ray, 1);
          if (runtime.Tuple.isArrayLike(element1$1) && element1$1.length === 3) {
            let inlinedVal1, tmp6, tmp7, tmp8;
            element1$2 = runtime.Tuple.get(element1$1, 1);
            inlinedVal1 = globalThis.Object.freeze([
              1.0,
              1.0,
              1.0
            ]);
            tmp3 = element1$2 + 1.0;
            tmp4 = 0.5 * tmp3;
            tmp5 = globalThis.Object.freeze([
              0.5,
              0.7,
              1.0
            ]);
            tmp6 = 1.0 - tmp4;
            tmp7 = mcray1[rgbScale$accessorSymbol](tmp6, inlinedVal1);
            tmp8 = mcray1[rgbScale$accessorSymbol](tmp4, tmp5);
            return mcray1[rgbAdd$accessorSymbol](tmp7, tmp8)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          let arg$MatHit$3$;
          if (arg$ObjHit$0$ instanceof mcray1.MatHit.class) {
            arg$MatHit$3$ = arg$ObjHit$0$.material;
            if (arg$MatHit$3$ instanceof mcray1.Material.class) {
              return runtime.safeCall(arg$MatHit$3$.emit())
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            let inlinedVal1, arg$MatHit$3$;
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            if (arg$ObjHit$0$ instanceof mcray1.MatHit.class) {
              arg$MatHit$3$ = arg$ObjHit$0$.material;
              if (arg$MatHit$3$ instanceof mcray1.Material.class) {
                inlinedVal1 = runtime.safeCall(arg$MatHit$3$.emit());
                tmp = depth - 1;
                tmp1 = test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, element1$, tmp);
                tmp2 = mcray2[rgbModulate$accessorSymbol](element0$, tmp1);
                return mcray2[rgbAdd$accessorSymbol](inlinedVal1, tmp2)
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
test_rayTracer_traceRay_lambda$$lambda$ = function test_rayTracer_traceRay_lambda$$lambda$(mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return test_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, maxDepth)
  }
};
rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go = function rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
aaPixelToRGB_raysForPixel_listTabulate_go$go = function aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
raysForPixel_listTabulate_go$go = function raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 = function main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
main_test_buildScene_makeScene_metal_lambda$_lambda$lambda = function main_test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_test_buildScene_makeScene_metal_lambda$$lambda$1 = function main_test_buildScene_makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
test_buildScene_makeScene_metal_lambda$_lambda$lambda = function test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_buildScene_makeScene_metal_lambda$$lambda$1 = function test_buildScene_makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return test_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda = function test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 = function test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda = function buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 = function buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
buildScene_makeScene_metal_lambda$_lambda$lambda = function buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
buildScene_makeScene_metal_lambda$$lambda$1 = function buildScene_makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
makeScene_metal_lambda$_lambda$lambda = function makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
makeScene_metal_lambda$$lambda$1 = function makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
makeScene_lp_randomSphere_metal_lambda$_lambda$lambda = function makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
makeScene_lp_randomSphere_metal_lambda$$lambda$1 = function makeScene_lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return makeScene_lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
randomSphere_metal_lambda$_lambda$lambda = function randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
randomSphere_metal_lambda$$lambda$1 = function randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
metal_lambda$_lambda$lambda = function metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
metal_lambda$$lambda$1 = function metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
lambda$_lambda$lambda1 = function lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lp_randomSphere_metal_lambda$_lambda$lambda = function lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lp_randomSphere_metal_lambda$$lambda$1 = function lp_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return lp_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
rowLp_colLp = function rowLp_colLp(id, param0, param1, param2, param3, param4, param5) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1;
          scrut = param3 < 0;
          if (scrut === true) {
            return param4
          }
          {
            let param4_tmp;
            tmp = param3 - 1;
            tmp1 = param2 - 1;
            param4_tmp = param4;
            param3 = tmp;
            param4 = tmp1;
            param5 = param4_tmp;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let scrut, tmp, tmp1, tmp2;
          scrut = param4 < 0;
          if (scrut === true) {
            param4 = param5;
            id = 0;
            continue loopLabel
          }
          tmp = param4 - 1;
          tmp1 = runtime.safeCall(param1(param3, param4));
          tmp2 = param0.Cons(tmp1, param5);
          param4 = tmp;
          param5 = tmp2;
          id = 1;
          continue loopLabel;
        }
    }
  }
};
lp = function lp(mcray2, rng, x, z, objs) {
  loopLabel: while (true) {
    let scrut, scrut1, tmp, tmp1, tmp2;
    scrut = z < 11;
    if (scrut === true) {
      let inlinedVal, x1, z1, c, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, inlinedVal1, inlinedVal2, inlinedVal3, scale, scale1, scale2, x2, x11, tmp17, x3, x12, tmp18, x4, x13, tmp19;
      tmp = z + 1;
      scale = 1.0 / 2147483647.0;
      x4 = rng.value;
      tmp19 = x4 * 48271;
      x13 = mcray1[intMod$accessorSymbol](tmp19, 2147483647);
      rng.value = x13;
      inlinedVal1 = scale * x13;
      scale1 = 1.0 / 2147483647.0;
      x3 = rng.value;
      tmp18 = x3 * 48271;
      x12 = mcray1[intMod$accessorSymbol](tmp18, 2147483647);
      rng.value = x12;
      inlinedVal2 = scale1 * x12;
      tmp3 = 0.9 * inlinedVal2;
      x1 = x + tmp3;
      scale2 = 1.0 / 2147483647.0;
      x2 = rng.value;
      tmp17 = x2 * 48271;
      x11 = mcray1[intMod$accessorSymbol](tmp17, 2147483647);
      rng.value = x11;
      inlinedVal3 = scale2 * x11;
      tmp4 = 0.9 * inlinedVal3;
      z1 = z + tmp4;
      c = globalThis.Object.freeze([
        x1,
        0.2,
        z1
      ]);
      scrut2 = inlinedVal1 < 0.8;
      if (scrut2 === true) {
        let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here, lambda$here1, rSq, invR, hitTest1$here, x5, x14, tmp20, x6, x15, tmp21, x7, x16, tmp22, x8, x17, tmp23, x9, x18, tmp24, x10, x19, tmp25;
        scale3 = 1.0 / 2147483647.0;
        x10 = rng.value;
        tmp25 = x10 * 48271;
        x19 = mcray1[intMod$accessorSymbol](tmp25, 2147483647);
        rng.value = x19;
        inlinedVal4 = scale3 * x19;
        scale4 = 1.0 / 2147483647.0;
        x9 = rng.value;
        tmp24 = x9 * 48271;
        x18 = mcray1[intMod$accessorSymbol](tmp24, 2147483647);
        rng.value = x18;
        inlinedVal5 = scale4 * x18;
        tmp5 = inlinedVal4 * inlinedVal5;
        scale5 = 1.0 / 2147483647.0;
        x8 = rng.value;
        tmp23 = x8 * 48271;
        x17 = mcray1[intMod$accessorSymbol](tmp23, 2147483647);
        rng.value = x17;
        inlinedVal6 = scale5 * x17;
        scale6 = 1.0 / 2147483647.0;
        x7 = rng.value;
        tmp22 = x7 * 48271;
        x16 = mcray1[intMod$accessorSymbol](tmp22, 2147483647);
        rng.value = x16;
        inlinedVal7 = scale6 * x16;
        tmp6 = inlinedVal6 * inlinedVal7;
        scale7 = 1.0 / 2147483647.0;
        x6 = rng.value;
        tmp21 = x6 * 48271;
        x15 = mcray1[intMod$accessorSymbol](tmp21, 2147483647);
        rng.value = x15;
        inlinedVal8 = scale7 * x15;
        scale8 = 1.0 / 2147483647.0;
        x5 = rng.value;
        tmp20 = x5 * 48271;
        x14 = mcray1[intMod$accessorSymbol](tmp20, 2147483647);
        rng.value = x14;
        inlinedVal9 = scale8 * x14;
        tmp7 = inlinedVal8 * inlinedVal9;
        tmp8 = globalThis.Object.freeze([
          tmp5,
          tmp6,
          tmp7
        ]);
        lambda$here = lp_randomSphere_lambertian_lambda$$lambda$();
        lambda$here1 = lp_randomSphere_lambertian_lambda$$lambda$1(mcray1, rng, tmp8);
        inlinedVal10 = mcray1.Material(lambda$here, lambda$here1);
        rSq = 0.2 * 0.2;
        invR = 1.0 / 0.2;
        hitTest1$here = hitTest1$1(mcray1, c, inlinedVal10, rSq, invR);
        inlinedVal11 = mcray1.Obj(hitTest1$here);
        inlinedVal = inlinedVal11;
      } else {
        let inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, scale3, scale4, scale5, scale6, lambda$here, lambda$here1, rSq, invR, hitTest1$here, x5, x14, tmp20, x6, x15, tmp21, x7, x16, tmp22, x8, x17, tmp23;
        scale3 = 1.0 / 2147483647.0;
        x8 = rng.value;
        tmp23 = x8 * 48271;
        x17 = mcray1[intMod$accessorSymbol](tmp23, 2147483647);
        rng.value = x17;
        inlinedVal4 = scale3 * x17;
        tmp9 = 1.0 + inlinedVal4;
        tmp10 = 0.5 * tmp9;
        scale4 = 1.0 / 2147483647.0;
        x7 = rng.value;
        tmp22 = x7 * 48271;
        x16 = mcray1[intMod$accessorSymbol](tmp22, 2147483647);
        rng.value = x16;
        inlinedVal5 = scale4 * x16;
        tmp11 = 1.0 + inlinedVal5;
        tmp12 = 0.5 * tmp11;
        scale5 = 1.0 / 2147483647.0;
        x6 = rng.value;
        tmp21 = x6 * 48271;
        x15 = mcray1[intMod$accessorSymbol](tmp21, 2147483647);
        rng.value = x15;
        inlinedVal6 = scale5 * x15;
        tmp13 = 1.0 + inlinedVal6;
        tmp14 = 0.5 * tmp13;
        tmp15 = globalThis.Object.freeze([
          tmp10,
          tmp12,
          tmp14
        ]);
        scale6 = 1.0 / 2147483647.0;
        x5 = rng.value;
        tmp20 = x5 * 48271;
        x14 = mcray1[intMod$accessorSymbol](tmp20, 2147483647);
        rng.value = x14;
        inlinedVal7 = scale6 * x14;
        tmp16 = 0.5 * inlinedVal7;
        lambda$here = lp_randomSphere_metal_lambda$$lambda$();
        lambda$here1 = lp_randomSphere_metal_lambda$$lambda$1(mcray1, rng, tmp15, tmp16);
        inlinedVal8 = mcray1.Material(lambda$here, lambda$here1);
        rSq = 0.2 * 0.2;
        invR = 1.0 / 0.2;
        hitTest1$here = hitTest1$1(mcray1, c, inlinedVal8, rSq, invR);
        inlinedVal9 = mcray1.Obj(hitTest1$here);
        inlinedVal = inlinedVal9;
      }
      tmp1 = mcray2.Cons(inlinedVal, objs);
      z = tmp;
      objs = tmp1;
      continue loopLabel
    }
    scrut1 = x < 11;
    if (scrut1 === true) {
      tmp2 = x + 1;
      x = tmp2;
      z = -11;
      continue loopLabel
    }
    return objs;
  }
};
lambda$8 = (undefined, function (mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return trace(mcray2, world, minMaxT, ray, maxDepth)
  }
});
trace = function trace(mcray2, world, minMaxT, ray, depth) {
  let scrut, scrut1, arg$ObjHit$0$, arg$Some$0$, element1$, element0$, tmp, tmp1, tmp2, tmp3;
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
      inlinedVal = runtime.safeCall(world.hit(ray, minMaxT));
      if (inlinedVal instanceof mcray2.Miss.class) {
        return mcray2[rayToRGB$accessorSymbol](ray)
      } else if (inlinedVal instanceof mcray2.ObjHit.class) {
        arg$ObjHit$0$ = inlinedVal.hit;
        scrut1 = mcray2[getHitInfo$accessorSymbol](arg$ObjHit$0$, ray);
        if (scrut1 instanceof mcray2.None.class) {
          return mcray2[getEmission$accessorSymbol](arg$ObjHit$0$)
        } else if (scrut1 instanceof mcray2.Some.class) {
          arg$Some$0$ = scrut1.value;
          if (runtime.Tuple.isArrayLike(arg$Some$0$) && arg$Some$0$.length === 2) {
            element0$ = runtime.Tuple.get(arg$Some$0$, 0);
            element1$ = runtime.Tuple.get(arg$Some$0$, 1);
            tmp = mcray2[getEmission$accessorSymbol](arg$ObjHit$0$);
            tmp1 = depth - 1;
            tmp2 = trace(mcray2, world, minMaxT, element1$, tmp1);
            tmp3 = mcray2[rgbModulate$accessorSymbol](element0$, tmp2);
            return mcray2[rgbAdd$accessorSymbol](tmp, tmp3)
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
lambda8 = (undefined, function (mcray2, world, maxDepth, minMaxT, ray) {
  return trace(mcray2, world, minMaxT, ray, maxDepth)
});
lambda$7 = (undefined, function (mcray2, trace1) {
  return (ray, c1) => {
    let tmp;
    tmp = runtime.safeCall(trace1(ray));
    return mcray2[rgbAdd$accessorSymbol](c1, tmp)
  }
});
lambda6 = (undefined, function (mcray2, trace1, ray, c1) {
  let tmp;
  tmp = runtime.safeCall(trace1(ray));
  return mcray2[rgbAdd$accessorSymbol](c1, tmp)
});
lambda$6 = (undefined, function (mcray2, trace1, rfp, scale) {
  return (r, c) => {
    return lambda7(mcray2, trace1, rfp, scale, r, c)
  }
});
lambda7 = (undefined, function (mcray2, trace1, rfp, scale, r, c) {
  let tmp, inlinedVal, f, inlinedVal1;
  inlinedVal = globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ]);
  tmp = runtime.safeCall(rfp(r, c));
  f = lambda$7(mcray2, trace1);
  inlinedVal1 = mcray2[listFoldl$tailrec$accessorSymbol](f, inlinedVal, tmp);
  return mcray2[rgbScale$accessorSymbol](scale, inlinedVal1)
});
mkRay$ = function mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return (i) => {
    return mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
mkRay = function mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir, i) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, tmp2, scale, tmp3, scale1, inlinedVal4, x, tmp4, x1, tmp5, inlinedVal5, inlinedVal6, inlinedVal7, scrut, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11;
  scale1 = 1.0 / 2147483647.0;
  x1 = rng.value;
  tmp5 = x1 * 48271;
  tmp10 = tmp5 / 2147483647;
  inlinedVal8 = runtime.safeCall(globalThis.Math.floor(tmp10));
  tmp11 = 2147483647 * inlinedVal8;
  inlinedVal5 = tmp5 - tmp11;
  rng.value = inlinedVal5;
  inlinedVal = scale1 * inlinedVal5;
  tmp = r1 + inlinedVal;
  tmp3 = mcray2[vec3Scale$accessorSymbol](tmp, vvec);
  inlinedVal1 = mcray2[vec3Add$accessorSymbol](ulcDir, tmp3);
  scale = 1.0 / 2147483647.0;
  x = rng.value;
  tmp4 = x * 48271;
  tmp8 = tmp4 / 2147483647;
  inlinedVal9 = runtime.safeCall(globalThis.Math.floor(tmp8));
  tmp9 = 2147483647 * inlinedVal9;
  inlinedVal6 = tmp4 - tmp9;
  rng.value = inlinedVal6;
  inlinedVal2 = scale * inlinedVal6;
  tmp1 = c1 + inlinedVal2;
  tmp2 = mcray2[vec3Scale$accessorSymbol](tmp1, hvec);
  inlinedVal3 = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp2);
  inlinedVal10 = mcray2[vec3Dot$accessorSymbol](inlinedVal3, inlinedVal3);
  inlinedVal11 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal10));
  scrut = inlinedVal11 < 0.0001;
  if (scrut === true) {
    let inlinedVal12;
    inlinedVal12 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    inlinedVal7 = globalThis.Object.freeze([
      0.0,
      inlinedVal12
    ]);
  } else {
    tmp6 = 1.0 / inlinedVal11;
    tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, inlinedVal3);
    inlinedVal7 = globalThis.Object.freeze([
      inlinedVal11,
      tmp7
    ]);
  }
  if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
    inlinedVal4 = runtime.Tuple.get(inlinedVal7, 1);
    return globalThis.Object.freeze([
      pos,
      inlinedVal4
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rowLp = function rowLp(mcray2, pr, wid, r, colors) {
  return rowLp_colLp(0, mcray2, pr, wid, r, colors, undefined)
};
colLp = function colLp(mcray2, pr, wid, r, c, colors) {
  return rowLp_colLp(1, mcray2, pr, wid, r, c, colors)
};
hitTest1$1 = function hitTest1$(mcray2, center, material, rSq, invR) {
  return (ray, minMaxT) => {
    return hitTest11(mcray2, center, material, rSq, invR, ray, minMaxT)
  }
};
hitTest11 = function hitTest1(mcray2, center, material, rSq, invR, ray, minMaxT) {
  let q, b, c, disc, scrut, t, scrut1, element1$, element0$, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
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
        let element1$1, element0$1;
        if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
          let inlinedVal1, tmp9;
          element0$1 = runtime.Tuple.get(ray, 0);
          element1$1 = runtime.Tuple.get(ray, 1);
          tmp9 = mcray2[vec3Scale$accessorSymbol](t, element1$1);
          inlinedVal1 = mcray2[vec3Add$accessorSymbol](element0$1, tmp9);
          tmp6 = mcray2[vec3Sub$accessorSymbol](inlinedVal1, center);
          tmp7 = mcray2[vec3Scale$accessorSymbol](invR, tmp6);
          tmp8 = mcray2.MatHit(t, inlinedVal1, tmp7, material);
          return mcray2.ObjHit(tmp8)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      return mcray2.Miss;
    }
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$5 = (undefined, function (mcray2, ray, minMaxT) {
  return (obj, mhit) => {
    return lambda5(mcray2, ray, minMaxT, obj, mhit)
  }
});
lambda5 = (undefined, function (mcray2, ray, minMaxT, obj, mhit) {
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
  f = lambda$5(mcray2, ray, minMaxT);
  init = mcray2.Miss;
  return mcray2[listFoldl$tailrec$accessorSymbol](f, init, objs)
};
lambda$4 = (undefined, function (mcray2) {
  return (ray, minMaxT) => {
    return mcray2.Miss
  }
});
lambda4 = (undefined, function (mcray2, ray, minMaxT) {
  return mcray2.Miss
});
lambda$3 = (undefined, function (mcray2) {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
lambda$2 = (undefined, function (mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return lambda$_lambda$lambda1(mcray2, rng, albedo, fuzz, ray, hit)
  }
});
lambda2 = (undefined, function (mcray2, hit) {
  return globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ])
});
lambda3 = (undefined, function (mcray2, rng, albedo, fuzz, ray, hit) {
  let scrut, element1$, arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
    runtime.Tuple.get(ray, 0);
    element1$ = runtime.Tuple.get(ray, 1);
    if (hit instanceof mcray2.MatHit.class) {
      let inlinedVal, tmp3, tmp4, tmp5, tmp6, inlinedVal1, tmp7;
      arg$MatHit$1$ = hit.pt;
      arg$MatHit$2$ = hit.norm;
      tmp4 = mcray2[vec3Dot$accessorSymbol](element1$, arg$MatHit$2$);
      tmp5 = 2.0 * tmp4;
      tmp6 = - tmp5;
      tmp7 = mcray2[vec3Scale$accessorSymbol](tmp6, arg$MatHit$2$);
      inlinedVal1 = mcray2[vec3Add$accessorSymbol](element1$, tmp7);
      tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
      tmp3 = mcray2[vec3Scale$accessorSymbol](fuzz, tmp);
      inlinedVal = mcray2[vec3Add$accessorSymbol](inlinedVal1, tmp3);
      tmp1 = mcray2[vec3Dot$accessorSymbol](inlinedVal, arg$MatHit$2$);
      scrut = tmp1 <= 0.0;
      if (scrut === true) {
        return mcray2.None
      }
      {
        let inlinedVal2, inlinedVal3, inlinedVal4, scrut1, tmp8, tmp9, inlinedVal5, inlinedVal6;
        inlinedVal5 = mcray2[vec3Dot$accessorSymbol](inlinedVal, inlinedVal);
        inlinedVal6 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal5));
        scrut1 = inlinedVal6 < 0.0001;
        if (scrut1 === true) {
          let inlinedVal7;
          inlinedVal7 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal4 = globalThis.Object.freeze([
            0.0,
            inlinedVal7
          ]);
        } else {
          tmp8 = 1.0 / inlinedVal6;
          tmp9 = mcray2[vec3Scale$accessorSymbol](tmp8, inlinedVal);
          inlinedVal4 = globalThis.Object.freeze([
            inlinedVal6,
            tmp9
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
          inlinedVal3 = runtime.Tuple.get(inlinedVal4, 1);
          inlinedVal2 = globalThis.Object.freeze([
            arg$MatHit$1$,
            inlinedVal3
          ]);
          tmp2 = globalThis.Object.freeze([
            albedo,
            inlinedVal2
          ]);
          return mcray2.Some(tmp2)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$1 = (undefined, function (mcray2) {
  return (hit) => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
});
lambda$ = (undefined, function (mcray2, rng, albedo) {
  return (ray, hit) => {
    return lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
});
lambda = (undefined, function (mcray2, hit) {
  return globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ])
});
lambda1 = (undefined, function (mcray2, rng, albedo, ray, hit) {
  let arg$MatHit$1$, arg$MatHit$2$, tmp, tmp1, tmp2;
  if (hit instanceof mcray2.MatHit.class) {
    let inlinedVal, inlinedVal1, inlinedVal2, scrut, tmp3, tmp4, inlinedVal3, inlinedVal4;
    arg$MatHit$1$ = hit.pt;
    arg$MatHit$2$ = hit.norm;
    tmp = mcray2[vec3RandomPointInSphere$accessorSymbol](rng);
    tmp1 = mcray2[vec3Add$accessorSymbol](arg$MatHit$2$, tmp);
    inlinedVal3 = mcray2[vec3Dot$accessorSymbol](tmp1, tmp1);
    inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal3));
    scrut = inlinedVal4 < 0.0001;
    if (scrut === true) {
      let inlinedVal5;
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal2 = globalThis.Object.freeze([
        0.0,
        inlinedVal5
      ]);
    } else {
      tmp3 = 1.0 / inlinedVal4;
      tmp4 = mcray2[vec3Scale$accessorSymbol](tmp3, tmp1);
      inlinedVal2 = globalThis.Object.freeze([
        inlinedVal4,
        tmp4
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
      inlinedVal1 = runtime.Tuple.get(inlinedVal2, 1);
      inlinedVal = globalThis.Object.freeze([
        arg$MatHit$1$,
        inlinedVal1
      ]);
      tmp2 = globalThis.Object.freeze([
        albedo,
        inlinedVal
      ]);
      return mcray2.Some(tmp2)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
cvt = function cvt(mcray2, f) {
  let inlinedVal;
  inlinedVal = runtime.safeCall(globalThis.Math.sqrt(f));
  return mcray2[toByte$accessorSymbol](inlinedVal)
};
go = function go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f(i));
  tmp1 = i + 1;
  tmp2 = go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
(class mcray {
  static {
    mcray1 = this
  }
  static get [listFoldl$tailrec$accessorSymbol]() { return mcray.#listFoldl$tailrec; }
  static get [intMod$accessorSymbol]() { return mcray.#intMod; }
  static get [within$accessorSymbol]() { return mcray.#within; }
  static get [rgbAdd$accessorSymbol]() { return mcray.#rgbAdd; }
  static get [rgbModulate$accessorSymbol]() { return mcray.#rgbModulate; }
  static get [rgbScale$accessorSymbol]() { return mcray.#rgbScale; }
  static get [toByte$accessorSymbol]() { return mcray.#toByte; }
  static get [vec3Add$accessorSymbol]() { return mcray.#vec3Add; }
  static get [vec3Sub$accessorSymbol]() { return mcray.#vec3Sub; }
  static get [vec3Scale$accessorSymbol]() { return mcray.#vec3Scale; }
  static get [vec3Dot$accessorSymbol]() { return mcray.#vec3Dot; }
  static get [vec3RandomPointInSphere$accessorSymbol]() { return mcray.#vec3RandomPointInSphere; }
  static get [getEmission$accessorSymbol]() { return mcray.#getEmission; }
  static get [getHitInfo$accessorSymbol]() { return mcray.#getHitInfo; }
  static get [closer$accessorSymbol]() { return mcray.#closer; }
  static get [rayToRGB$accessorSymbol]() { return mcray.#rayToRGB; }
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
  static #listFoldl(f) {
    return (init) => {
      return (l) => {
        return mcray.#listFoldl$tailrec(f, init, l)
      }
    }
  }
  static #listTabulate(n, f) {
    return go(mcray, n, f, 0)
  }
  static #posInf() {
    return 1.0 / 0.0
  }
  static #pi() {
    return 3.14159265358979323846
  }
  static #sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static #tan(x) {
    return runtime.safeCall(globalThis.Math.tan(x))
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
  static #rgbModulate(c1, c2) {
    let element2$, element1$, element0$, element2$1, element1$1, element0$1, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c1) && c1.length === 3) {
      element0$ = runtime.Tuple.get(c1, 0);
      element1$ = runtime.Tuple.get(c1, 1);
      element2$ = runtime.Tuple.get(c1, 2);
      if (runtime.Tuple.isArrayLike(c2) && c2.length === 3) {
        element0$1 = runtime.Tuple.get(c2, 0);
        element1$1 = runtime.Tuple.get(c2, 1);
        element2$1 = runtime.Tuple.get(c2, 2);
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
  static #rgbScale(s, c) {
    let element2$, element1$, element0$, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(c) && c.length === 3) {
      element0$ = runtime.Tuple.get(c, 0);
      element1$ = runtime.Tuple.get(c, 1);
      element2$ = runtime.Tuple.get(c, 2);
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
  static #rgbLerp(c1, t, c2) {
    let tmp, tmp1, tmp2;
    tmp = 1.0 - t;
    tmp1 = mcray.#rgbScale(tmp, c1);
    tmp2 = mcray.#rgbScale(t, c2);
    return mcray.#rgbAdd(tmp1, tmp2)
  }
  static #rgbBlack() {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
  static #rgbWhite() {
    return globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
    ])
  }
  static #rgbGray(v) {
    return globalThis.Object.freeze([
      v,
      v,
      v
    ])
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
  static #colorFromRGBWithGamma(c) {
    let element2$, element1$, element0$;
    if (runtime.Tuple.isArrayLike(c) && c.length === 3) {
      let inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5;
      element0$ = runtime.Tuple.get(c, 0);
      element1$ = runtime.Tuple.get(c, 1);
      element2$ = runtime.Tuple.get(c, 2);
      inlinedVal5 = runtime.safeCall(globalThis.Math.sqrt(element0$));
      inlinedVal = mcray.#toByte(inlinedVal5);
      inlinedVal4 = runtime.safeCall(globalThis.Math.sqrt(element1$));
      inlinedVal1 = mcray.#toByte(inlinedVal4);
      inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(element2$));
      inlinedVal2 = mcray.#toByte(inlinedVal3);
      return globalThis.Object.freeze([
        inlinedVal,
        inlinedVal1,
        inlinedVal2
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #epsilon() {
    return 0.0001
  }
  static #vec3Zero() {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
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
  static #vec3Adds(v1, s, v2) {
    let tmp;
    tmp = mcray.#vec3Scale(s, v2);
    return mcray.#vec3Add(v1, tmp)
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
  static #vec3LengthSq(v) {
    return mcray.#vec3Dot(v, v)
  }
  static #vec3Length(v) {
    let tmp;
    tmp = mcray.#vec3LengthSq(v);
    return mcray.#sqrt(tmp)
  }
  static #vec3LengthAndDir(v) {
    let l, scrut, tmp, tmp1, tmp2, tmp3;
    l = mcray.#vec3Length(v);
    tmp = mcray.#epsilon();
    scrut = l < tmp;
    if (scrut === true) {
      tmp1 = mcray.#vec3Zero();
      return globalThis.Object.freeze([
        0.0,
        tmp1
      ])
    }
    tmp2 = 1.0 / l;
    tmp3 = mcray.#vec3Scale(tmp2, v);
    return globalThis.Object.freeze([
      l,
      tmp3
    ]);
  }
  static #vec3Normalize(v) {
    let scrut;
    scrut = mcray.#vec3LengthAndDir(v);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      return runtime.Tuple.get(scrut, 1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #vec3Reflect(v, n) {
    let tmp, tmp1, tmp2;
    tmp = mcray.#vec3Dot(v, n);
    tmp1 = 2.0 * tmp;
    tmp2 = - tmp1;
    return mcray.#vec3Adds(v, tmp2, n)
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
  static #rayMake(origin, dir) {
    let inlinedVal, inlinedVal1, scrut, tmp, tmp1, inlinedVal2, tmp2;
    tmp2 = mcray1.#vec3LengthSq(dir);
    inlinedVal2 = mcray1.#sqrt(tmp2);
    scrut = inlinedVal2 < 0.0001;
    if (scrut === true) {
      let inlinedVal3;
      inlinedVal3 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal1 = globalThis.Object.freeze([
        0.0,
        inlinedVal3
      ]);
    } else {
      tmp = 1.0 / inlinedVal2;
      tmp1 = mcray1.#vec3Scale(tmp, dir);
      inlinedVal1 = globalThis.Object.freeze([
        inlinedVal2,
        tmp1
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
      inlinedVal = runtime.Tuple.get(inlinedVal1, 1);
      return globalThis.Object.freeze([
        origin,
        inlinedVal
      ])
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rayEval(ray, t) {
    let element1$, element0$;
    if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
      element0$ = runtime.Tuple.get(ray, 0);
      element1$ = runtime.Tuple.get(ray, 1);
      return mcray.#vec3Adds(element0$, t, element1$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #getEmission(hit) {
    let arg$MatHit$3$;
    if (hit instanceof mcray.MatHit.class) {
      arg$MatHit$3$ = hit.material;
      if (arg$MatHit$3$ instanceof mcray.Material.class) {
        return runtime.safeCall(arg$MatHit$3$.emit(hit))
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
  static #lambertian(rng, albedo) {
    let lambda$here, lambda$here1;
    lambda$here = lambertian_lambda$$lambda$();
    lambda$here1 = lambertian_lambda$$lambda$1(mcray, rng, albedo);
    return mcray.Material(lambda$here, lambda$here1)
  }
  static #metal(rng, albedo, fuzz) {
    let lambda$here, lambda$here1;
    lambda$here = metal_lambda$$lambda$();
    lambda$here1 = metal_lambda$$lambda$1(mcray, rng, albedo, fuzz);
    return mcray.Material(lambda$here, lambda$here1)
  }
  static #hitTest(obj, ray, minMaxT) {
    if (obj instanceof mcray.Obj.class) {
      return runtime.safeCall(obj.hit(ray, minMaxT))
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #objectEmpty() {
    let lambda$here;
    lambda$here = lambda$4(mcray);
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
  static #sphereMake(center, radius, material) {
    let rSq, invR, hitTest1$here;
    rSq = radius * radius;
    invR = 1.0 / radius;
    hitTest1$here = hitTest1$1(mcray, center, material, rSq, invR);
    return mcray.Obj(hitTest1$here)
  }
  static #cameraMake(wid, ht, ns, pos, lookAt, up, fov) {
    let pw, aspect, theta, flen, imgCenter, ulc, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, scrut, tmp16, tmp17, inlinedVal4, scrut1, tmp18, tmp19, inlinedVal5, scrut2, tmp20, tmp21, inlinedVal6, tmp22;
    tmp = mcray.#vec3Sub(lookAt, pos);
    tmp22 = mcray1.#vec3LengthSq(tmp);
    inlinedVal6 = mcray1.#sqrt(tmp22);
    scrut2 = inlinedVal6 < 0.0001;
    if (scrut2 === true) {
      let inlinedVal7;
      inlinedVal7 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal5 = globalThis.Object.freeze([
        0.0,
        inlinedVal7
      ]);
    } else {
      tmp20 = 1.0 / inlinedVal6;
      tmp21 = mcray1.#vec3Scale(tmp20, tmp);
      inlinedVal5 = globalThis.Object.freeze([
        inlinedVal6,
        tmp21
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal5) && inlinedVal5.length === 2) {
      let inlinedVal7, tmp23;
      inlinedVal = runtime.Tuple.get(inlinedVal5, 1);
      tmp1 = mcray.#vec3Cross(inlinedVal, up);
      tmp23 = mcray1.#vec3LengthSq(tmp1);
      inlinedVal7 = mcray1.#sqrt(tmp23);
      scrut1 = inlinedVal7 < 0.0001;
      if (scrut1 === true) {
        let inlinedVal8;
        inlinedVal8 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal4 = globalThis.Object.freeze([
          0.0,
          inlinedVal8
        ]);
      } else {
        tmp18 = 1.0 / inlinedVal7;
        tmp19 = mcray1.#vec3Scale(tmp18, tmp1);
        inlinedVal4 = globalThis.Object.freeze([
          inlinedVal7,
          tmp19
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal4) && inlinedVal4.length === 2) {
        let inlinedVal8, tmp24;
        inlinedVal1 = runtime.Tuple.get(inlinedVal4, 1);
        tmp2 = mcray.#vec3Cross(inlinedVal1, inlinedVal);
        tmp24 = mcray1.#vec3LengthSq(tmp2);
        inlinedVal8 = mcray1.#sqrt(tmp24);
        scrut = inlinedVal8 < 0.0001;
        if (scrut === true) {
          let inlinedVal9;
          inlinedVal9 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal3 = globalThis.Object.freeze([
            0.0,
            inlinedVal9
          ]);
        } else {
          tmp16 = 1.0 / inlinedVal8;
          tmp17 = mcray1.#vec3Scale(tmp16, tmp2);
          inlinedVal3 = globalThis.Object.freeze([
            inlinedVal8,
            tmp17
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal3) && inlinedVal3.length === 2) {
          inlinedVal2 = runtime.Tuple.get(inlinedVal3, 1);
          tmp3 = mcray.#real(wid);
          pw = 2.0 / tmp3;
          tmp4 = mcray.#real(ht);
          tmp5 = mcray.#real(wid);
          aspect = tmp4 / tmp5;
          tmp6 = mcray.#pi();
          tmp7 = tmp6 * fov;
          theta = tmp7 / 180.0;
          tmp8 = 0.5 * theta;
          tmp9 = mcray.#tan(tmp8);
          flen = 1.0 / tmp9;
          tmp10 = mcray.#vec3Scale(flen, inlinedVal);
          imgCenter = mcray.#vec3Add(pos, tmp10);
          tmp11 = mcray.#vec3Scale(aspect, inlinedVal2);
          tmp12 = mcray.#vec3Add(imgCenter, tmp11);
          ulc = mcray.#vec3Sub(tmp12, inlinedVal1);
          tmp13 = mcray.#vec3Scale(pw, inlinedVal1);
          tmp14 = - pw;
          tmp15 = mcray.#vec3Scale(tmp14, inlinedVal2);
          return mcray.Cam(wid, ht, ns, pos, ulc, tmp13, tmp15)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #makePixelRenderer(toRGB, cvt1) {
    return (r, c) => {
      let tmp;
      tmp = runtime.safeCall(toRGB(r, c));
      return runtime.safeCall(cvt1(tmp))
    }
  }
  static #foreachPixel(cam, pr) {
    let arg$Cam$0$, arg$Cam$1$, tmp;
    if (cam instanceof mcray.Cam.class) {
      let colors, inlinedVal;
      arg$Cam$0$ = cam.wid;
      arg$Cam$1$ = cam.ht;
      tmp = arg$Cam$1$ - 1;
      colors = mcray.Nil;
      inlinedVal = rowLp_colLp(0, mcray, pr, arg$Cam$0$, tmp, colors, undefined);
      return mcray.Img(arg$Cam$0$, arg$Cam$1$, inlinedVal)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #rayToRGB(ray) {
    let element1$, element1$1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(ray) && ray.length === 2) {
      runtime.Tuple.get(ray, 0);
      element1$ = runtime.Tuple.get(ray, 1);
      if (runtime.Tuple.isArrayLike(element1$) && element1$.length === 3) {
        runtime.Tuple.get(element1$, 0);
        element1$1 = runtime.Tuple.get(element1$, 1);
        runtime.Tuple.get(element1$, 2);
        tmp = mcray.#rgbWhite();
        tmp1 = element1$1 + 1.0;
        tmp2 = 0.5 * tmp1;
        tmp3 = globalThis.Object.freeze([
          0.5,
          0.7,
          1.0
        ]);
        return mcray.#rgbLerp(tmp, tmp2, tmp3)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #raysForPixel(rng, cam) {
    return (r, c) => {
      let r1, c1, ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
      if (cam instanceof mcray.Cam.class) {
        let f;
        arg$Cam$2$ = cam.ns;
        arg$Cam$3$ = cam.pos;
        arg$Cam$4$ = cam.ulc;
        arg$Cam$5$ = cam.hvec;
        arg$Cam$6$ = cam.vvec;
        r1 = mcray.#real(r);
        c1 = mcray.#real(c);
        ulcDir = mcray.#vec3Sub(arg$Cam$4$, arg$Cam$3$);
        f = raysForPixel_mkRay$$mkRay$(mcray, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r1, c1, ulcDir);
        return raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #aaPixelToRGB(rng, cam, trace1) {
    let rfp, scrut, arg$Cam$2$, tmp, tmp1;
    if (cam instanceof mcray.Cam.class) {
      arg$Cam$2$ = cam.ns;
      rfp = aaPixelToRGB_raysForPixel$raysForPixel(rng, cam);
      scrut = arg$Cam$2$ == 0;
      if (scrut === true) {
        return lambda$6(mcray, trace1, rfp, 1.0)
      }
      tmp1 = mcray.#real(arg$Cam$2$);
      tmp = 1.0 / tmp1;
      return lambda$6(mcray, trace1, rfp, tmp);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #traceRay(world, maxDepth) {
    let minMaxT, tmp;
    tmp = mcray.#posInf();
    minMaxT = globalThis.Object.freeze([
      0.001,
      tmp
    ]);
    return lambda$8(mcray, world, maxDepth, minMaxT)
  }
  static #rayTracer(rng, cam, world) {
    let tmp, tmp1, inlinedVal, rfp, scrut, arg$Cam$2$, tmp2;
    tmp = mcray.#traceRay(world, 20);
    if (cam instanceof mcray1.Cam.class) {
      arg$Cam$2$ = cam.ns;
      rfp = rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, cam);
      scrut = arg$Cam$2$ == 0;
      if (scrut === true) {
        inlinedVal = lambda$6(mcray1, tmp, rfp, 1.0);
      } else {
        tmp2 = 1.0 / arg$Cam$2$;
        inlinedVal = lambda$6(mcray1, tmp, rfp, tmp2);
      }
      tmp1 = mcray.#makePixelRenderer(inlinedVal, mcray.#colorFromRGBWithGamma);
      return mcray.#foreachPixel(cam, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #randomSphere(rng, x, z) {
    let chooseMat, x1, z1, c, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27;
    chooseMat = mcray.#rand(rng);
    tmp = mcray.#real(x);
    tmp1 = mcray.#rand(rng);
    tmp2 = 0.9 * tmp1;
    x1 = tmp + tmp2;
    tmp3 = mcray.#real(z);
    tmp4 = mcray.#rand(rng);
    tmp5 = 0.9 * tmp4;
    z1 = tmp3 + tmp5;
    c = globalThis.Object.freeze([
      x1,
      0.2,
      z1
    ]);
    scrut = chooseMat < 0.8;
    if (scrut === true) {
      let inlinedVal, lambda$here, lambda$here1;
      tmp6 = mcray.#rand(rng);
      tmp7 = mcray.#rand(rng);
      tmp8 = tmp6 * tmp7;
      tmp9 = mcray.#rand(rng);
      tmp10 = mcray.#rand(rng);
      tmp11 = tmp9 * tmp10;
      tmp12 = mcray.#rand(rng);
      tmp13 = mcray.#rand(rng);
      tmp14 = tmp12 * tmp13;
      tmp15 = globalThis.Object.freeze([
        tmp8,
        tmp11,
        tmp14
      ]);
      lambda$here = randomSphere_lambertian_lambda$$lambda$1();
      lambda$here1 = randomSphere_lambertian_lambda$$lambda$(mcray1, rng, tmp15);
      inlinedVal = mcray1.Material(lambda$here, lambda$here1);
      return mcray.#sphereMake(c, 0.2, inlinedVal)
    }
    {
      let inlinedVal, lambda$here, lambda$here1;
      tmp16 = mcray.#rand(rng);
      tmp17 = 1.0 + tmp16;
      tmp18 = 0.5 * tmp17;
      tmp19 = mcray.#rand(rng);
      tmp20 = 1.0 + tmp19;
      tmp21 = 0.5 * tmp20;
      tmp22 = mcray.#rand(rng);
      tmp23 = 1.0 + tmp22;
      tmp24 = 0.5 * tmp23;
      tmp25 = globalThis.Object.freeze([
        tmp18,
        tmp21,
        tmp24
      ]);
      tmp26 = mcray.#rand(rng);
      tmp27 = 0.5 * tmp26;
      lambda$here = randomSphere_metal_lambda$$lambda$();
      lambda$here1 = randomSphere_metal_lambda$$lambda$1(mcray1, rng, tmp25, tmp27);
      inlinedVal = mcray1.Material(lambda$here, lambda$here1);
      return mcray.#sphereMake(c, 0.2, inlinedVal);
    }
  }
  static #makeScene(rng) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal, inlinedVal1, inlinedVal2, mcray2, rng1, x, z, objs, inlinedVal3, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5;
    tmp = - 1000.0;
    tmp1 = globalThis.Object.freeze([
      0.0,
      tmp,
      0.0
    ]);
    tmp2 = mcray.#rgbGray(0.5);
    lambda$here4 = makeScene_lambertian_lambda$$lambda$1();
    lambda$here5 = makeScene_lambertian_lambda$$lambda$(mcray1, rng, tmp2);
    inlinedVal = mcray1.Material(lambda$here4, lambda$here5);
    tmp3 = mcray.#sphereMake(tmp1, 1000.0, inlinedVal);
    tmp4 = globalThis.Object.freeze([
      4.0,
      1.0,
      0.0
    ]);
    tmp5 = globalThis.Object.freeze([
      0.7,
      0.6,
      0.5
    ]);
    lambda$here2 = makeScene_metal_lambda$$lambda$();
    lambda$here3 = makeScene_metal_lambda$$lambda$1(mcray1, rng, tmp5, 0.0);
    inlinedVal1 = mcray1.Material(lambda$here2, lambda$here3);
    tmp6 = mcray.#sphereMake(tmp4, 1.0, inlinedVal1);
    tmp7 = - 4.0;
    tmp8 = globalThis.Object.freeze([
      tmp7,
      1.0,
      0.0
    ]);
    tmp9 = globalThis.Object.freeze([
      0.4,
      0.2,
      0.1
    ]);
    lambda$here = makeScene_lambertian_lambda$$lambda$3();
    lambda$here1 = makeScene_lambertian_lambda$$lambda$2(mcray1, rng, tmp9);
    inlinedVal2 = mcray1.Material(lambda$here, lambda$here1);
    tmp10 = mcray.#sphereMake(tmp8, 1.0, inlinedVal2);
    tmp11 = mcray.Cons(tmp10, mcray.Nil);
    tmp12 = mcray.Cons(tmp6, tmp11);
    tmp13 = mcray.Cons(tmp3, tmp12);
    mcray2 = mcray;
    rng1 = rng;
    x = -11;
    z = -11;
    objs = tmp13;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, tmp14, tmp15, tmp16;
        scrut = z < 11;
        if (scrut === true) {
          let inlinedVal4, x1, z1, c, scrut2, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, inlinedVal5, inlinedVal6, inlinedVal7, scale, scale1, scale2, x2, x11, tmp31, x3, x12, tmp32, x4, x13, tmp33;
          tmp14 = z + 1;
          scale = 1.0 / 2147483647.0;
          x4 = rng1.value;
          tmp33 = x4 * 48271;
          x13 = mcray1.#intMod(tmp33, 2147483647);
          rng1.value = x13;
          inlinedVal5 = scale * x13;
          scale1 = 1.0 / 2147483647.0;
          x3 = rng1.value;
          tmp32 = x3 * 48271;
          x12 = mcray1.#intMod(tmp32, 2147483647);
          rng1.value = x12;
          inlinedVal6 = scale1 * x12;
          tmp17 = 0.9 * inlinedVal6;
          x1 = x + tmp17;
          scale2 = 1.0 / 2147483647.0;
          x2 = rng1.value;
          tmp31 = x2 * 48271;
          x11 = mcray1.#intMod(tmp31, 2147483647);
          rng1.value = x11;
          inlinedVal7 = scale2 * x11;
          tmp18 = 0.9 * inlinedVal7;
          z1 = z + tmp18;
          c = globalThis.Object.freeze([
            x1,
            0.2,
            z1
          ]);
          scrut2 = inlinedVal5 < 0.8;
          if (scrut2 === true) {
            let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here6, lambda$here7, rSq, invR, hitTest1$here, x5, x14, tmp34, x6, x15, tmp35, x7, x16, tmp36, x8, x17, tmp37, x9, x18, tmp38, x10, x19, tmp39;
            scale3 = 1.0 / 2147483647.0;
            x10 = rng1.value;
            tmp39 = x10 * 48271;
            x19 = mcray1.#intMod(tmp39, 2147483647);
            rng1.value = x19;
            inlinedVal8 = scale3 * x19;
            scale4 = 1.0 / 2147483647.0;
            x9 = rng1.value;
            tmp38 = x9 * 48271;
            x18 = mcray1.#intMod(tmp38, 2147483647);
            rng1.value = x18;
            inlinedVal9 = scale4 * x18;
            tmp19 = inlinedVal8 * inlinedVal9;
            scale5 = 1.0 / 2147483647.0;
            x8 = rng1.value;
            tmp37 = x8 * 48271;
            x17 = mcray1.#intMod(tmp37, 2147483647);
            rng1.value = x17;
            inlinedVal10 = scale5 * x17;
            scale6 = 1.0 / 2147483647.0;
            x7 = rng1.value;
            tmp36 = x7 * 48271;
            x16 = mcray1.#intMod(tmp36, 2147483647);
            rng1.value = x16;
            inlinedVal11 = scale6 * x16;
            tmp20 = inlinedVal10 * inlinedVal11;
            scale7 = 1.0 / 2147483647.0;
            x6 = rng1.value;
            tmp35 = x6 * 48271;
            x15 = mcray1.#intMod(tmp35, 2147483647);
            rng1.value = x15;
            inlinedVal12 = scale7 * x15;
            scale8 = 1.0 / 2147483647.0;
            x5 = rng1.value;
            tmp34 = x5 * 48271;
            x14 = mcray1.#intMod(tmp34, 2147483647);
            rng1.value = x14;
            inlinedVal13 = scale8 * x14;
            tmp21 = inlinedVal12 * inlinedVal13;
            tmp22 = globalThis.Object.freeze([
              tmp19,
              tmp20,
              tmp21
            ]);
            lambda$here6 = makeScene_lp_randomSphere_lambertian_lambda$$lambda$1();
            lambda$here7 = makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray1, rng1, tmp22);
            inlinedVal14 = mcray1.Material(lambda$here6, lambda$here7);
            rSq = 0.2 * 0.2;
            invR = 1.0 / 0.2;
            hitTest1$here = hitTest1$1(mcray1, c, inlinedVal14, rSq, invR);
            inlinedVal15 = mcray1.Obj(hitTest1$here);
            inlinedVal4 = inlinedVal15;
          } else {
            let inlinedVal8, inlinedVal9, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, scale3, scale4, scale5, scale6, lambda$here6, lambda$here7, rSq, invR, hitTest1$here, x5, x14, tmp34, x6, x15, tmp35, x7, x16, tmp36, x8, x17, tmp37;
            scale3 = 1.0 / 2147483647.0;
            x8 = rng1.value;
            tmp37 = x8 * 48271;
            x17 = mcray1.#intMod(tmp37, 2147483647);
            rng1.value = x17;
            inlinedVal8 = scale3 * x17;
            tmp23 = 1.0 + inlinedVal8;
            tmp24 = 0.5 * tmp23;
            scale4 = 1.0 / 2147483647.0;
            x7 = rng1.value;
            tmp36 = x7 * 48271;
            x16 = mcray1.#intMod(tmp36, 2147483647);
            rng1.value = x16;
            inlinedVal9 = scale4 * x16;
            tmp25 = 1.0 + inlinedVal9;
            tmp26 = 0.5 * tmp25;
            scale5 = 1.0 / 2147483647.0;
            x6 = rng1.value;
            tmp35 = x6 * 48271;
            x15 = mcray1.#intMod(tmp35, 2147483647);
            rng1.value = x15;
            inlinedVal10 = scale5 * x15;
            tmp27 = 1.0 + inlinedVal10;
            tmp28 = 0.5 * tmp27;
            tmp29 = globalThis.Object.freeze([
              tmp24,
              tmp26,
              tmp28
            ]);
            scale6 = 1.0 / 2147483647.0;
            x5 = rng1.value;
            tmp34 = x5 * 48271;
            x14 = mcray1.#intMod(tmp34, 2147483647);
            rng1.value = x14;
            inlinedVal11 = scale6 * x14;
            tmp30 = 0.5 * inlinedVal11;
            lambda$here6 = makeScene_lp_randomSphere_metal_lambda$$lambda$();
            lambda$here7 = makeScene_lp_randomSphere_metal_lambda$$lambda$1(mcray1, rng1, tmp29, tmp30);
            inlinedVal12 = mcray1.Material(lambda$here6, lambda$here7);
            rSq = 0.2 * 0.2;
            invR = 1.0 / 0.2;
            hitTest1$here = hitTest1$1(mcray1, c, inlinedVal12, rSq, invR);
            inlinedVal13 = mcray1.Obj(hitTest1$here);
            inlinedVal4 = inlinedVal13;
          }
          tmp15 = mcray2.Cons(inlinedVal4, objs);
          z = tmp14;
          objs = tmp15;
          continue loopLabel
        }
        scrut1 = x < 11;
        if (scrut1 === true) {
          tmp16 = x + 1;
          x = tmp16;
          z = -11;
          continue loopLabel
        }
        inlinedVal3 = objs;
        break inlinedLbl;
      }
    }
    return mcray.#fromList(inlinedVal3)
  }
  static #buildScene(rng, wid, ht, ns) {
    let cam, tmp, tmp1, tmp2, inlinedVal, inlinedVal1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, mcray2, rng1, x, z, objs, inlinedVal9, lambda$here, lambda$here1, rSq, invR, hitTest1$here, lambda$here2, lambda$here3, rSq1, invR1, hitTest1$here1, lambda$here4, lambda$here5, rSq2, invR2, hitTest1$here2, pw, aspect, theta, flen, imgCenter, ulc, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, inlinedVal10, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, scrut, tmp24, tmp25, inlinedVal15, scrut1, tmp26, tmp27, inlinedVal16, scrut2, tmp28, tmp29, inlinedVal17, tmp30;
    tmp = globalThis.Object.freeze([
      13.0,
      2.0,
      3.0
    ]);
    tmp1 = mcray.#vec3Zero();
    tmp2 = globalThis.Object.freeze([
      0.0,
      1.0,
      0.0
    ]);
    tmp13 = mcray1.#vec3Sub(tmp1, tmp);
    tmp30 = mcray1.#vec3LengthSq(tmp13);
    inlinedVal17 = mcray1.#sqrt(tmp30);
    scrut = inlinedVal17 < 0.0001;
    if (scrut === true) {
      let inlinedVal18;
      inlinedVal18 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal14 = globalThis.Object.freeze([
        0.0,
        inlinedVal18
      ]);
    } else {
      tmp24 = 1.0 / inlinedVal17;
      tmp25 = mcray1.#vec3Scale(tmp24, tmp13);
      inlinedVal14 = globalThis.Object.freeze([
        inlinedVal17,
        tmp25
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal14) && inlinedVal14.length === 2) {
      let inlinedVal18, tmp31;
      inlinedVal10 = runtime.Tuple.get(inlinedVal14, 1);
      tmp14 = mcray1.#vec3Cross(inlinedVal10, tmp2);
      tmp31 = mcray1.#vec3LengthSq(tmp14);
      inlinedVal18 = mcray1.#sqrt(tmp31);
      scrut1 = inlinedVal18 < 0.0001;
      if (scrut1 === true) {
        let inlinedVal19;
        inlinedVal19 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal15 = globalThis.Object.freeze([
          0.0,
          inlinedVal19
        ]);
      } else {
        tmp26 = 1.0 / inlinedVal18;
        tmp27 = mcray1.#vec3Scale(tmp26, tmp14);
        inlinedVal15 = globalThis.Object.freeze([
          inlinedVal18,
          tmp27
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal15) && inlinedVal15.length === 2) {
        let inlinedVal19, tmp32;
        inlinedVal11 = runtime.Tuple.get(inlinedVal15, 1);
        tmp15 = mcray1.#vec3Cross(inlinedVal11, inlinedVal10);
        tmp32 = mcray1.#vec3LengthSq(tmp15);
        inlinedVal19 = mcray1.#sqrt(tmp32);
        scrut2 = inlinedVal19 < 0.0001;
        if (scrut2 === true) {
          let inlinedVal20;
          inlinedVal20 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal16 = globalThis.Object.freeze([
            0.0,
            inlinedVal20
          ]);
        } else {
          tmp28 = 1.0 / inlinedVal19;
          tmp29 = mcray1.#vec3Scale(tmp28, tmp15);
          inlinedVal16 = globalThis.Object.freeze([
            inlinedVal19,
            tmp29
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal16) && inlinedVal16.length === 2) {
          inlinedVal12 = runtime.Tuple.get(inlinedVal16, 1);
          pw = 2.0 / wid;
          aspect = ht / wid;
          tmp16 = 3.14159265358979323846 * 30.0;
          theta = tmp16 / 180.0;
          tmp17 = 0.5 * theta;
          inlinedVal13 = runtime.safeCall(globalThis.Math.tan(tmp17));
          flen = 1.0 / inlinedVal13;
          tmp18 = mcray1.#vec3Scale(flen, inlinedVal10);
          imgCenter = mcray1.#vec3Add(tmp, tmp18);
          tmp19 = mcray1.#vec3Scale(aspect, inlinedVal12);
          tmp20 = mcray1.#vec3Add(imgCenter, tmp19);
          ulc = mcray1.#vec3Sub(tmp20, inlinedVal11);
          tmp21 = mcray1.#vec3Scale(pw, inlinedVal11);
          tmp22 = - pw;
          tmp23 = mcray1.#vec3Scale(tmp22, inlinedVal12);
          inlinedVal = mcray1.Cam(wid, ht, ns, tmp, ulc, tmp21, tmp23);
          cam = inlinedVal;
          tmp3 = - 1000.0;
          tmp4 = globalThis.Object.freeze([
            0.0,
            tmp3,
            0.0
          ]);
          inlinedVal2 = globalThis.Object.freeze([
            0.5,
            0.5,
            0.5
          ]);
          lambda$here = buildScene_makeScene_lambertian_lambda$$lambda$2();
          lambda$here1 = buildScene_makeScene_lambertian_lambda$$lambda$3(mcray1, rng, inlinedVal2);
          inlinedVal3 = mcray1.Material(lambda$here, lambda$here1);
          rSq = 1000.0 * 1000.0;
          invR = 1.0 / 1000.0;
          hitTest1$here = hitTest1$1(mcray1, tmp4, inlinedVal3, rSq, invR);
          inlinedVal4 = mcray1.Obj(hitTest1$here);
          tmp5 = globalThis.Object.freeze([
            4.0,
            1.0,
            0.0
          ]);
          tmp6 = globalThis.Object.freeze([
            0.7,
            0.6,
            0.5
          ]);
          lambda$here2 = buildScene_makeScene_metal_lambda$$lambda$();
          lambda$here3 = buildScene_makeScene_metal_lambda$$lambda$1(mcray1, rng, tmp6, 0.0);
          inlinedVal5 = mcray1.Material(lambda$here2, lambda$here3);
          rSq1 = 1.0 * 1.0;
          invR1 = 1.0 / 1.0;
          hitTest1$here1 = hitTest1$1(mcray1, tmp5, inlinedVal5, rSq1, invR1);
          inlinedVal6 = mcray1.Obj(hitTest1$here1);
          tmp7 = - 4.0;
          tmp8 = globalThis.Object.freeze([
            tmp7,
            1.0,
            0.0
          ]);
          tmp9 = globalThis.Object.freeze([
            0.4,
            0.2,
            0.1
          ]);
          lambda$here4 = buildScene_makeScene_lambertian_lambda$$lambda$();
          lambda$here5 = buildScene_makeScene_lambertian_lambda$$lambda$1(mcray1, rng, tmp9);
          inlinedVal7 = mcray1.Material(lambda$here4, lambda$here5);
          rSq2 = 1.0 * 1.0;
          invR2 = 1.0 / 1.0;
          hitTest1$here2 = hitTest1$1(mcray1, tmp8, inlinedVal7, rSq2, invR2);
          inlinedVal8 = mcray1.Obj(hitTest1$here2);
          tmp10 = mcray1.Cons(inlinedVal8, mcray1.Nil);
          tmp11 = mcray1.Cons(inlinedVal6, tmp10);
          tmp12 = mcray1.Cons(inlinedVal4, tmp11);
          mcray2 = mcray1;
          rng1 = rng;
          x = -11;
          z = -11;
          objs = tmp12;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut3, scrut4, tmp33, tmp34, tmp35;
              scrut3 = z < 11;
              if (scrut3 === true) {
                let inlinedVal20, x1, z1, c, scrut5, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, inlinedVal21, inlinedVal22, inlinedVal23, scale, scale1, scale2, x2, x11, tmp50, x3, x12, tmp51, x4, x13, tmp52;
                tmp33 = z + 1;
                scale = 1.0 / 2147483647.0;
                x4 = rng1.value;
                tmp52 = x4 * 48271;
                x13 = mcray1.#intMod(tmp52, 2147483647);
                rng1.value = x13;
                inlinedVal21 = scale * x13;
                scale1 = 1.0 / 2147483647.0;
                x3 = rng1.value;
                tmp51 = x3 * 48271;
                x12 = mcray1.#intMod(tmp51, 2147483647);
                rng1.value = x12;
                inlinedVal22 = scale1 * x12;
                tmp36 = 0.9 * inlinedVal22;
                x1 = x + tmp36;
                scale2 = 1.0 / 2147483647.0;
                x2 = rng1.value;
                tmp50 = x2 * 48271;
                x11 = mcray1.#intMod(tmp50, 2147483647);
                rng1.value = x11;
                inlinedVal23 = scale2 * x11;
                tmp37 = 0.9 * inlinedVal23;
                z1 = z + tmp37;
                c = globalThis.Object.freeze([
                  x1,
                  0.2,
                  z1
                ]);
                scrut5 = inlinedVal21 < 0.8;
                if (scrut5 === true) {
                  let inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, x14, tmp53, x6, x15, tmp54, x7, x16, tmp55, x8, x17, tmp56, x9, x18, tmp57, x10, x19, tmp58;
                  scale3 = 1.0 / 2147483647.0;
                  x10 = rng1.value;
                  tmp58 = x10 * 48271;
                  x19 = mcray1.#intMod(tmp58, 2147483647);
                  rng1.value = x19;
                  inlinedVal24 = scale3 * x19;
                  scale4 = 1.0 / 2147483647.0;
                  x9 = rng1.value;
                  tmp57 = x9 * 48271;
                  x18 = mcray1.#intMod(tmp57, 2147483647);
                  rng1.value = x18;
                  inlinedVal25 = scale4 * x18;
                  tmp38 = inlinedVal24 * inlinedVal25;
                  scale5 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp56 = x8 * 48271;
                  x17 = mcray1.#intMod(tmp56, 2147483647);
                  rng1.value = x17;
                  inlinedVal26 = scale5 * x17;
                  scale6 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp55 = x7 * 48271;
                  x16 = mcray1.#intMod(tmp55, 2147483647);
                  rng1.value = x16;
                  inlinedVal27 = scale6 * x16;
                  tmp39 = inlinedVal26 * inlinedVal27;
                  scale7 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp54 = x6 * 48271;
                  x15 = mcray1.#intMod(tmp54, 2147483647);
                  rng1.value = x15;
                  inlinedVal28 = scale7 * x15;
                  scale8 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp53 = x5 * 48271;
                  x14 = mcray1.#intMod(tmp53, 2147483647);
                  rng1.value = x14;
                  inlinedVal29 = scale8 * x14;
                  tmp40 = inlinedVal28 * inlinedVal29;
                  tmp41 = globalThis.Object.freeze([
                    tmp38,
                    tmp39,
                    tmp40
                  ]);
                  lambda$here6 = buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$();
                  lambda$here7 = buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1(mcray1, rng1, tmp41);
                  inlinedVal30 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal30, rSq3, invR3);
                  inlinedVal31 = mcray1.Obj(hitTest1$here3);
                  inlinedVal20 = inlinedVal31;
                } else {
                  let inlinedVal24, inlinedVal25, inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, scale3, scale4, scale5, scale6, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, x14, tmp53, x6, x15, tmp54, x7, x16, tmp55, x8, x17, tmp56;
                  scale3 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp56 = x8 * 48271;
                  x17 = mcray1.#intMod(tmp56, 2147483647);
                  rng1.value = x17;
                  inlinedVal24 = scale3 * x17;
                  tmp42 = 1.0 + inlinedVal24;
                  tmp43 = 0.5 * tmp42;
                  scale4 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp55 = x7 * 48271;
                  x16 = mcray1.#intMod(tmp55, 2147483647);
                  rng1.value = x16;
                  inlinedVal25 = scale4 * x16;
                  tmp44 = 1.0 + inlinedVal25;
                  tmp45 = 0.5 * tmp44;
                  scale5 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp54 = x6 * 48271;
                  x15 = mcray1.#intMod(tmp54, 2147483647);
                  rng1.value = x15;
                  inlinedVal26 = scale5 * x15;
                  tmp46 = 1.0 + inlinedVal26;
                  tmp47 = 0.5 * tmp46;
                  tmp48 = globalThis.Object.freeze([
                    tmp43,
                    tmp45,
                    tmp47
                  ]);
                  scale6 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp53 = x5 * 48271;
                  x14 = mcray1.#intMod(tmp53, 2147483647);
                  rng1.value = x14;
                  inlinedVal27 = scale6 * x14;
                  tmp49 = 0.5 * inlinedVal27;
                  lambda$here6 = buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$();
                  lambda$here7 = buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1(mcray1, rng1, tmp48, tmp49);
                  inlinedVal28 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal28, rSq3, invR3);
                  inlinedVal29 = mcray1.Obj(hitTest1$here3);
                  inlinedVal20 = inlinedVal29;
                }
                tmp34 = mcray2.Cons(inlinedVal20, objs);
                z = tmp33;
                objs = tmp34;
                continue loopLabel
              }
              scrut4 = x < 11;
              if (scrut4 === true) {
                tmp35 = x + 1;
                x = tmp35;
                z = -11;
                continue loopLabel
              }
              inlinedVal9 = objs;
              break inlinedLbl;
            }
          }
          inlinedVal1 = mcray1.#fromList(inlinedVal9);
          return globalThis.Object.freeze([
            cam,
            inlinedVal1
          ])
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #test(rng, wid, ht, ns) {
    let element1$, element0$, inlinedVal, cam, tmp, tmp1, inlinedVal1, inlinedVal2, inlinedVal3, pw, aspect, theta, flen, imgCenter, ulc, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, scrut, tmp13, tmp14, inlinedVal9, scrut1, tmp15, tmp16, inlinedVal10, scrut2, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, mcray2, rng1, x, z, objs, inlinedVal18, lambda$here, lambda$here1, rSq, invR, hitTest1$here, lambda$here2, lambda$here3, rSq1, invR1, hitTest1$here1, lambda$here4, lambda$here5, rSq2, invR2, hitTest1$here2, inlinedVal19, tmp29;
    tmp = globalThis.Object.freeze([
      13.0,
      2.0,
      3.0
    ]);
    inlinedVal1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp1 = globalThis.Object.freeze([
      0.0,
      1.0,
      0.0
    ]);
    tmp2 = mcray1.#vec3Sub(inlinedVal1, tmp);
    tmp29 = mcray1.#vec3LengthSq(tmp2);
    inlinedVal19 = mcray1.#sqrt(tmp29);
    scrut = inlinedVal19 < 0.0001;
    if (scrut === true) {
      let inlinedVal20;
      inlinedVal20 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal8 = globalThis.Object.freeze([
        0.0,
        inlinedVal20
      ]);
    } else {
      tmp13 = 1.0 / inlinedVal19;
      tmp14 = mcray1.#vec3Scale(tmp13, tmp2);
      inlinedVal8 = globalThis.Object.freeze([
        inlinedVal19,
        tmp14
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal8) && inlinedVal8.length === 2) {
      let inlinedVal20, tmp30;
      inlinedVal4 = runtime.Tuple.get(inlinedVal8, 1);
      tmp3 = mcray1.#vec3Cross(inlinedVal4, tmp1);
      tmp30 = mcray1.#vec3LengthSq(tmp3);
      inlinedVal20 = mcray1.#sqrt(tmp30);
      scrut1 = inlinedVal20 < 0.0001;
      if (scrut1 === true) {
        let inlinedVal21;
        inlinedVal21 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal9 = globalThis.Object.freeze([
          0.0,
          inlinedVal21
        ]);
      } else {
        tmp15 = 1.0 / inlinedVal20;
        tmp16 = mcray1.#vec3Scale(tmp15, tmp3);
        inlinedVal9 = globalThis.Object.freeze([
          inlinedVal20,
          tmp16
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal9) && inlinedVal9.length === 2) {
        let inlinedVal21, tmp31;
        inlinedVal5 = runtime.Tuple.get(inlinedVal9, 1);
        tmp4 = mcray1.#vec3Cross(inlinedVal5, inlinedVal4);
        tmp31 = mcray1.#vec3LengthSq(tmp4);
        inlinedVal21 = mcray1.#sqrt(tmp31);
        scrut2 = inlinedVal21 < 0.0001;
        if (scrut2 === true) {
          let inlinedVal22;
          inlinedVal22 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal10 = globalThis.Object.freeze([
            0.0,
            inlinedVal22
          ]);
        } else {
          tmp17 = 1.0 / inlinedVal21;
          tmp18 = mcray1.#vec3Scale(tmp17, tmp4);
          inlinedVal10 = globalThis.Object.freeze([
            inlinedVal21,
            tmp18
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal10) && inlinedVal10.length === 2) {
          inlinedVal6 = runtime.Tuple.get(inlinedVal10, 1);
          pw = 2.0 / wid;
          aspect = ht / wid;
          tmp5 = 3.14159265358979323846 * 30.0;
          theta = tmp5 / 180.0;
          tmp6 = 0.5 * theta;
          inlinedVal7 = runtime.safeCall(globalThis.Math.tan(tmp6));
          flen = 1.0 / inlinedVal7;
          tmp7 = mcray1.#vec3Scale(flen, inlinedVal4);
          imgCenter = mcray1.#vec3Add(tmp, tmp7);
          tmp8 = mcray1.#vec3Scale(aspect, inlinedVal6);
          tmp9 = mcray1.#vec3Add(imgCenter, tmp8);
          ulc = mcray1.#vec3Sub(tmp9, inlinedVal5);
          tmp10 = mcray1.#vec3Scale(pw, inlinedVal5);
          tmp11 = - pw;
          tmp12 = mcray1.#vec3Scale(tmp11, inlinedVal6);
          inlinedVal2 = mcray1.Cam(wid, ht, ns, tmp, ulc, tmp10, tmp12);
          cam = inlinedVal2;
          tmp19 = - 1000.0;
          tmp20 = globalThis.Object.freeze([
            0.0,
            tmp19,
            0.0
          ]);
          inlinedVal11 = globalThis.Object.freeze([
            0.5,
            0.5,
            0.5
          ]);
          lambda$here = test_buildScene_makeScene_lambertian_lambda$$lambda$1();
          lambda$here1 = test_buildScene_makeScene_lambertian_lambda$$lambda$(mcray1, rng, inlinedVal11);
          inlinedVal12 = mcray1.Material(lambda$here, lambda$here1);
          rSq = 1000.0 * 1000.0;
          invR = 1.0 / 1000.0;
          hitTest1$here = hitTest1$1(mcray1, tmp20, inlinedVal12, rSq, invR);
          inlinedVal13 = mcray1.Obj(hitTest1$here);
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
          lambda$here2 = test_buildScene_makeScene_metal_lambda$$lambda$();
          lambda$here3 = test_buildScene_makeScene_metal_lambda$$lambda$1(mcray1, rng, tmp22, 0.0);
          inlinedVal14 = mcray1.Material(lambda$here2, lambda$here3);
          rSq1 = 1.0 * 1.0;
          invR1 = 1.0 / 1.0;
          hitTest1$here1 = hitTest1$1(mcray1, tmp21, inlinedVal14, rSq1, invR1);
          inlinedVal15 = mcray1.Obj(hitTest1$here1);
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
          lambda$here4 = test_buildScene_makeScene_lambertian_lambda$$lambda$3();
          lambda$here5 = test_buildScene_makeScene_lambertian_lambda$$lambda$2(mcray1, rng, tmp25);
          inlinedVal16 = mcray1.Material(lambda$here4, lambda$here5);
          rSq2 = 1.0 * 1.0;
          invR2 = 1.0 / 1.0;
          hitTest1$here2 = hitTest1$1(mcray1, tmp24, inlinedVal16, rSq2, invR2);
          inlinedVal17 = mcray1.Obj(hitTest1$here2);
          tmp26 = mcray1.Cons(inlinedVal17, mcray1.Nil);
          tmp27 = mcray1.Cons(inlinedVal15, tmp26);
          tmp28 = mcray1.Cons(inlinedVal13, tmp27);
          mcray2 = mcray1;
          rng1 = rng;
          x = -11;
          z = -11;
          objs = tmp28;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut3, scrut4, tmp32, tmp33, tmp34;
              scrut3 = z < 11;
              if (scrut3 === true) {
                let inlinedVal22, x1, z1, c, scrut5, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, inlinedVal23, inlinedVal24, inlinedVal25, scale, scale1, scale2, x2, x11, tmp49, x3, x12, tmp50, x4, x13, tmp51;
                tmp32 = z + 1;
                scale = 1.0 / 2147483647.0;
                x4 = rng1.value;
                tmp51 = x4 * 48271;
                x13 = mcray1.#intMod(tmp51, 2147483647);
                rng1.value = x13;
                inlinedVal23 = scale * x13;
                scale1 = 1.0 / 2147483647.0;
                x3 = rng1.value;
                tmp50 = x3 * 48271;
                x12 = mcray1.#intMod(tmp50, 2147483647);
                rng1.value = x12;
                inlinedVal24 = scale1 * x12;
                tmp35 = 0.9 * inlinedVal24;
                x1 = x + tmp35;
                scale2 = 1.0 / 2147483647.0;
                x2 = rng1.value;
                tmp49 = x2 * 48271;
                x11 = mcray1.#intMod(tmp49, 2147483647);
                rng1.value = x11;
                inlinedVal25 = scale2 * x11;
                tmp36 = 0.9 * inlinedVal25;
                z1 = z + tmp36;
                c = globalThis.Object.freeze([
                  x1,
                  0.2,
                  z1
                ]);
                scrut5 = inlinedVal23 < 0.8;
                if (scrut5 === true) {
                  let inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32, inlinedVal33, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, x14, tmp52, x6, x15, tmp53, x7, x16, tmp54, x8, x17, tmp55, x9, x18, tmp56, x10, x19, tmp57;
                  scale3 = 1.0 / 2147483647.0;
                  x10 = rng1.value;
                  tmp57 = x10 * 48271;
                  x19 = mcray1.#intMod(tmp57, 2147483647);
                  rng1.value = x19;
                  inlinedVal26 = scale3 * x19;
                  scale4 = 1.0 / 2147483647.0;
                  x9 = rng1.value;
                  tmp56 = x9 * 48271;
                  x18 = mcray1.#intMod(tmp56, 2147483647);
                  rng1.value = x18;
                  inlinedVal27 = scale4 * x18;
                  tmp37 = inlinedVal26 * inlinedVal27;
                  scale5 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp55 = x8 * 48271;
                  x17 = mcray1.#intMod(tmp55, 2147483647);
                  rng1.value = x17;
                  inlinedVal28 = scale5 * x17;
                  scale6 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp54 = x7 * 48271;
                  x16 = mcray1.#intMod(tmp54, 2147483647);
                  rng1.value = x16;
                  inlinedVal29 = scale6 * x16;
                  tmp38 = inlinedVal28 * inlinedVal29;
                  scale7 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp53 = x6 * 48271;
                  x15 = mcray1.#intMod(tmp53, 2147483647);
                  rng1.value = x15;
                  inlinedVal30 = scale7 * x15;
                  scale8 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp52 = x5 * 48271;
                  x14 = mcray1.#intMod(tmp52, 2147483647);
                  rng1.value = x14;
                  inlinedVal31 = scale8 * x14;
                  tmp39 = inlinedVal30 * inlinedVal31;
                  tmp40 = globalThis.Object.freeze([
                    tmp37,
                    tmp38,
                    tmp39
                  ]);
                  lambda$here6 = test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1();
                  lambda$here7 = test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$(mcray1, rng1, tmp40);
                  inlinedVal32 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal32, rSq3, invR3);
                  inlinedVal33 = mcray1.Obj(hitTest1$here3);
                  inlinedVal22 = inlinedVal33;
                } else {
                  let inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, scale3, scale4, scale5, scale6, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, x14, tmp52, x6, x15, tmp53, x7, x16, tmp54, x8, x17, tmp55;
                  scale3 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp55 = x8 * 48271;
                  x17 = mcray1.#intMod(tmp55, 2147483647);
                  rng1.value = x17;
                  inlinedVal26 = scale3 * x17;
                  tmp41 = 1.0 + inlinedVal26;
                  tmp42 = 0.5 * tmp41;
                  scale4 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp54 = x7 * 48271;
                  x16 = mcray1.#intMod(tmp54, 2147483647);
                  rng1.value = x16;
                  inlinedVal27 = scale4 * x16;
                  tmp43 = 1.0 + inlinedVal27;
                  tmp44 = 0.5 * tmp43;
                  scale5 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp53 = x6 * 48271;
                  x15 = mcray1.#intMod(tmp53, 2147483647);
                  rng1.value = x15;
                  inlinedVal28 = scale5 * x15;
                  tmp45 = 1.0 + inlinedVal28;
                  tmp46 = 0.5 * tmp45;
                  tmp47 = globalThis.Object.freeze([
                    tmp42,
                    tmp44,
                    tmp46
                  ]);
                  scale6 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp52 = x5 * 48271;
                  x14 = mcray1.#intMod(tmp52, 2147483647);
                  rng1.value = x14;
                  inlinedVal29 = scale6 * x14;
                  tmp48 = 0.5 * inlinedVal29;
                  lambda$here6 = test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$();
                  lambda$here7 = test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1(mcray1, rng1, tmp47, tmp48);
                  inlinedVal30 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal30, rSq3, invR3);
                  inlinedVal31 = mcray1.Obj(hitTest1$here3);
                  inlinedVal22 = inlinedVal31;
                }
                tmp33 = mcray2.Cons(inlinedVal22, objs);
                z = tmp32;
                objs = tmp33;
                continue loopLabel
              }
              scrut4 = x < 11;
              if (scrut4 === true) {
                tmp34 = x + 1;
                x = tmp34;
                z = -11;
                continue loopLabel
              }
              inlinedVal18 = objs;
              break inlinedLbl;
            }
          }
          inlinedVal3 = mcray1.#fromList(inlinedVal18);
          inlinedVal = globalThis.Object.freeze([
            cam,
            inlinedVal3
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
            let tmp32, trace1, inlinedVal22, minMaxT, inlinedVal23, rfp, scrut3, arg$Cam$2$, tmp33;
            element0$ = runtime.Tuple.get(inlinedVal, 0);
            element1$ = runtime.Tuple.get(inlinedVal, 1);
            inlinedVal23 = 1.0 / 0.0;
            minMaxT = globalThis.Object.freeze([
              0.001,
              inlinedVal23
            ]);
            trace1 = test_rayTracer_traceRay_lambda$$lambda$(mcray1, element1$, 20, minMaxT);
            if (element0$ instanceof mcray1.Cam.class) {
              arg$Cam$2$ = element0$.ns;
              rfp = test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, element0$);
              scrut3 = arg$Cam$2$ == 0;
              if (scrut3 === true) {
                inlinedVal22 = lambda$6(mcray1, trace1, rfp, 1.0);
              } else {
                tmp33 = 1.0 / arg$Cam$2$;
                inlinedVal22 = lambda$6(mcray1, trace1, rfp, tmp33);
              }
              tmp32 = mcray1.#makePixelRenderer(inlinedVal22, mcray1.#colorFromRGBWithGamma);
              return mcray1.#foreachPixel(element0$, tmp32)
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
  static main() {
    let rng, rng1, element1$, element0$, inlinedVal, cam, tmp, tmp1, inlinedVal1, inlinedVal2, inlinedVal3, pw, aspect, theta, flen, imgCenter, ulc, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, scrut, tmp13, tmp14, inlinedVal9, scrut1, tmp15, tmp16, inlinedVal10, scrut2, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, mcray2, rng2, x, z, objs, inlinedVal18, lambda$here, lambda$here1, rSq, invR, hitTest1$here, lambda$here2, lambda$here3, rSq1, invR1, hitTest1$here1, lambda$here4, lambda$here5, rSq2, invR2, hitTest1$here2, inlinedVal19, tmp29;
    rng = new mcray.Ref.class(1234567);
    rng1 = rng;
    tmp = globalThis.Object.freeze([
      13.0,
      2.0,
      3.0
    ]);
    inlinedVal1 = globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ]);
    tmp1 = globalThis.Object.freeze([
      0.0,
      1.0,
      0.0
    ]);
    tmp2 = mcray1.#vec3Sub(inlinedVal1, tmp);
    tmp29 = mcray1.#vec3LengthSq(tmp2);
    inlinedVal19 = mcray1.#sqrt(tmp29);
    scrut = inlinedVal19 < 0.0001;
    if (scrut === true) {
      let inlinedVal20;
      inlinedVal20 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal8 = globalThis.Object.freeze([
        0.0,
        inlinedVal20
      ]);
    } else {
      tmp13 = 1.0 / inlinedVal19;
      tmp14 = mcray1.#vec3Scale(tmp13, tmp2);
      inlinedVal8 = globalThis.Object.freeze([
        inlinedVal19,
        tmp14
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal8) && inlinedVal8.length === 2) {
      let inlinedVal20, tmp30;
      inlinedVal4 = runtime.Tuple.get(inlinedVal8, 1);
      tmp3 = mcray1.#vec3Cross(inlinedVal4, tmp1);
      tmp30 = mcray1.#vec3LengthSq(tmp3);
      inlinedVal20 = mcray1.#sqrt(tmp30);
      scrut1 = inlinedVal20 < 0.0001;
      if (scrut1 === true) {
        let inlinedVal21;
        inlinedVal21 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal9 = globalThis.Object.freeze([
          0.0,
          inlinedVal21
        ]);
      } else {
        tmp15 = 1.0 / inlinedVal20;
        tmp16 = mcray1.#vec3Scale(tmp15, tmp3);
        inlinedVal9 = globalThis.Object.freeze([
          inlinedVal20,
          tmp16
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal9) && inlinedVal9.length === 2) {
        let inlinedVal21, tmp31;
        inlinedVal5 = runtime.Tuple.get(inlinedVal9, 1);
        tmp4 = mcray1.#vec3Cross(inlinedVal5, inlinedVal4);
        tmp31 = mcray1.#vec3LengthSq(tmp4);
        inlinedVal21 = mcray1.#sqrt(tmp31);
        scrut2 = inlinedVal21 < 0.0001;
        if (scrut2 === true) {
          let inlinedVal22;
          inlinedVal22 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal10 = globalThis.Object.freeze([
            0.0,
            inlinedVal22
          ]);
        } else {
          tmp17 = 1.0 / inlinedVal21;
          tmp18 = mcray1.#vec3Scale(tmp17, tmp4);
          inlinedVal10 = globalThis.Object.freeze([
            inlinedVal21,
            tmp18
          ]);
        }
        if (runtime.Tuple.isArrayLike(inlinedVal10) && inlinedVal10.length === 2) {
          inlinedVal6 = runtime.Tuple.get(inlinedVal10, 1);
          pw = 2.0 / 3;
          aspect = 2 / 3;
          tmp5 = 3.14159265358979323846 * 30.0;
          theta = tmp5 / 180.0;
          tmp6 = 0.5 * theta;
          inlinedVal7 = runtime.safeCall(globalThis.Math.tan(tmp6));
          flen = 1.0 / inlinedVal7;
          tmp7 = mcray1.#vec3Scale(flen, inlinedVal4);
          imgCenter = mcray1.#vec3Add(tmp, tmp7);
          tmp8 = mcray1.#vec3Scale(aspect, inlinedVal6);
          tmp9 = mcray1.#vec3Add(imgCenter, tmp8);
          ulc = mcray1.#vec3Sub(tmp9, inlinedVal5);
          tmp10 = mcray1.#vec3Scale(pw, inlinedVal5);
          tmp11 = - pw;
          tmp12 = mcray1.#vec3Scale(tmp11, inlinedVal6);
          inlinedVal2 = mcray1.Cam(3, 2, 5, tmp, ulc, tmp10, tmp12);
          cam = inlinedVal2;
          tmp19 = - 1000.0;
          tmp20 = globalThis.Object.freeze([
            0.0,
            tmp19,
            0.0
          ]);
          inlinedVal11 = globalThis.Object.freeze([
            0.5,
            0.5,
            0.5
          ]);
          lambda$here = main_test_buildScene_makeScene_lambertian_lambda$$lambda$2();
          lambda$here1 = main_test_buildScene_makeScene_lambertian_lambda$$lambda$3(mcray1, rng, inlinedVal11);
          inlinedVal12 = mcray1.Material(lambda$here, lambda$here1);
          rSq = 1000.0 * 1000.0;
          invR = 1.0 / 1000.0;
          hitTest1$here = hitTest1$1(mcray1, tmp20, inlinedVal12, rSq, invR);
          inlinedVal13 = mcray1.Obj(hitTest1$here);
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
          lambda$here2 = main_test_buildScene_makeScene_metal_lambda$$lambda$();
          lambda$here3 = main_test_buildScene_makeScene_metal_lambda$$lambda$1(mcray1, rng, tmp22, 0.0);
          inlinedVal14 = mcray1.Material(lambda$here2, lambda$here3);
          rSq1 = 1.0 * 1.0;
          invR1 = 1.0 / 1.0;
          hitTest1$here1 = hitTest1$1(mcray1, tmp21, inlinedVal14, rSq1, invR1);
          inlinedVal15 = mcray1.Obj(hitTest1$here1);
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
          lambda$here4 = main_test_buildScene_makeScene_lambertian_lambda$$lambda$();
          lambda$here5 = main_test_buildScene_makeScene_lambertian_lambda$$lambda$1(mcray1, rng, tmp25);
          inlinedVal16 = mcray1.Material(lambda$here4, lambda$here5);
          rSq2 = 1.0 * 1.0;
          invR2 = 1.0 / 1.0;
          hitTest1$here2 = hitTest1$1(mcray1, tmp24, inlinedVal16, rSq2, invR2);
          inlinedVal17 = mcray1.Obj(hitTest1$here2);
          tmp26 = mcray1.Cons(inlinedVal17, mcray1.Nil);
          tmp27 = mcray1.Cons(inlinedVal15, tmp26);
          tmp28 = mcray1.Cons(inlinedVal13, tmp27);
          mcray2 = mcray1;
          rng2 = rng;
          x = -11;
          z = -11;
          objs = tmp28;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut3, scrut4, tmp32, tmp33, tmp34;
              scrut3 = z < 11;
              if (scrut3 === true) {
                let inlinedVal22, x1, z1, c, scrut5, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, inlinedVal23, inlinedVal24, inlinedVal25, scale, scale1, scale2, x2, x11, tmp49, x3, x12, tmp50, x4, x13, tmp51;
                tmp32 = z + 1;
                scale = 1.0 / 2147483647.0;
                x4 = rng2.value;
                tmp51 = x4 * 48271;
                x13 = mcray1.#intMod(tmp51, 2147483647);
                rng2.value = x13;
                inlinedVal23 = scale * x13;
                scale1 = 1.0 / 2147483647.0;
                x3 = rng2.value;
                tmp50 = x3 * 48271;
                x12 = mcray1.#intMod(tmp50, 2147483647);
                rng2.value = x12;
                inlinedVal24 = scale1 * x12;
                tmp35 = 0.9 * inlinedVal24;
                x1 = x + tmp35;
                scale2 = 1.0 / 2147483647.0;
                x2 = rng2.value;
                tmp49 = x2 * 48271;
                x11 = mcray1.#intMod(tmp49, 2147483647);
                rng2.value = x11;
                inlinedVal25 = scale2 * x11;
                tmp36 = 0.9 * inlinedVal25;
                z1 = z + tmp36;
                c = globalThis.Object.freeze([
                  x1,
                  0.2,
                  z1
                ]);
                scrut5 = inlinedVal23 < 0.8;
                if (scrut5 === true) {
                  let inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, inlinedVal32, inlinedVal33, scale3, tmp52, scale4, tmp53, scale5, tmp54, scale6, tmp55, scale7, tmp56, tmp57, scale8, tmp58, tmp59, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3;
                  scale3 = 1.0 / 2147483647.0;
                  tmp52 = mcray1.#gen32(rng2);
                  inlinedVal26 = scale3 * tmp52;
                  scale4 = 1.0 / 2147483647.0;
                  tmp53 = mcray1.#gen32(rng2);
                  inlinedVal27 = scale4 * tmp53;
                  tmp37 = inlinedVal26 * inlinedVal27;
                  scale5 = 1.0 / 2147483647.0;
                  tmp54 = mcray1.#gen32(rng2);
                  inlinedVal28 = scale5 * tmp54;
                  scale6 = 1.0 / 2147483647.0;
                  tmp55 = mcray1.#gen32(rng2);
                  inlinedVal29 = scale6 * tmp55;
                  tmp38 = inlinedVal28 * inlinedVal29;
                  scale7 = 1.0 / 2147483647.0;
                  tmp56 = mcray1.#gen32(rng2);
                  tmp57 = mcray1.#real(tmp56);
                  inlinedVal30 = scale7 * tmp57;
                  scale8 = 1.0 / 2147483647.0;
                  tmp58 = mcray1.#gen32(rng2);
                  tmp59 = mcray1.#real(tmp58);
                  inlinedVal31 = scale8 * tmp59;
                  tmp39 = inlinedVal30 * inlinedVal31;
                  tmp40 = globalThis.Object.freeze([
                    tmp37,
                    tmp38,
                    tmp39
                  ]);
                  lambda$here6 = main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$();
                  lambda$here7 = main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1(mcray1, rng2, tmp40);
                  inlinedVal32 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal32, rSq3, invR3);
                  inlinedVal33 = mcray1.Obj(hitTest1$here3);
                  inlinedVal22 = inlinedVal33;
                } else {
                  let inlinedVal26, inlinedVal27, inlinedVal28, inlinedVal29, inlinedVal30, inlinedVal31, scale3, tmp52, tmp53, scale4, tmp54, tmp55, scale5, tmp56, tmp57, scale6, tmp58, tmp59, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3;
                  scale3 = 1.0 / 2147483647.0;
                  tmp52 = mcray1.#gen32(rng2);
                  tmp53 = mcray1.#real(tmp52);
                  inlinedVal26 = scale3 * tmp53;
                  tmp41 = 1.0 + inlinedVal26;
                  tmp42 = 0.5 * tmp41;
                  scale4 = 1.0 / 2147483647.0;
                  tmp54 = mcray1.#gen32(rng2);
                  tmp55 = mcray1.#real(tmp54);
                  inlinedVal27 = scale4 * tmp55;
                  tmp43 = 1.0 + inlinedVal27;
                  tmp44 = 0.5 * tmp43;
                  scale5 = 1.0 / 2147483647.0;
                  tmp56 = mcray1.#gen32(rng2);
                  tmp57 = mcray1.#real(tmp56);
                  inlinedVal28 = scale5 * tmp57;
                  tmp45 = 1.0 + inlinedVal28;
                  tmp46 = 0.5 * tmp45;
                  tmp47 = globalThis.Object.freeze([
                    tmp42,
                    tmp44,
                    tmp46
                  ]);
                  scale6 = 1.0 / 2147483647.0;
                  tmp58 = mcray1.#gen32(rng2);
                  tmp59 = mcray1.#real(tmp58);
                  inlinedVal29 = scale6 * tmp59;
                  tmp48 = 0.5 * inlinedVal29;
                  lambda$here6 = main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$();
                  lambda$here7 = main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1(mcray1, rng2, tmp47, tmp48);
                  inlinedVal30 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal30, rSq3, invR3);
                  inlinedVal31 = mcray1.Obj(hitTest1$here3);
                  inlinedVal22 = inlinedVal31;
                }
                tmp33 = mcray2.Cons(inlinedVal22, objs);
                z = tmp32;
                objs = tmp33;
                continue loopLabel
              }
              scrut4 = x < 11;
              if (scrut4 === true) {
                tmp34 = x + 1;
                x = tmp34;
                z = -11;
                continue loopLabel
              }
              inlinedVal18 = objs;
              break inlinedLbl;
            }
          }
          inlinedVal3 = mcray1.#fromList(inlinedVal18);
          inlinedVal = globalThis.Object.freeze([
            cam,
            inlinedVal3
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
            let tmp32, trace1, inlinedVal22, minMaxT, inlinedVal23, rfp, scrut3, arg$Cam$2$, tmp33;
            element0$ = runtime.Tuple.get(inlinedVal, 0);
            element1$ = runtime.Tuple.get(inlinedVal, 1);
            inlinedVal23 = 1.0 / 0.0;
            minMaxT = globalThis.Object.freeze([
              0.001,
              inlinedVal23
            ]);
            trace1 = main_test_rayTracer_traceRay_lambda$$lambda$(mcray1, element1$, 20, minMaxT);
            if (element0$ instanceof mcray1.Cam.class) {
              arg$Cam$2$ = element0$.ns;
              rfp = main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng1, element0$);
              scrut3 = arg$Cam$2$ == 0;
              if (scrut3 === true) {
                inlinedVal22 = lambda$6(mcray1, trace1, rfp, 1.0);
              } else {
                tmp33 = 1.0 / arg$Cam$2$;
                inlinedVal22 = lambda$6(mcray1, trace1, rfp, tmp33);
              }
              tmp32 = mcray1.#makePixelRenderer(inlinedVal22, mcray1.#colorFromRGBWithGamma);
              return mcray1.#foreachPixel(element0$, tmp32)
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
export { go as _$_modulePrivate_$_go };
export { cvt as _$_modulePrivate_$_cvt };
export { hitTest1 as _$_modulePrivate_$_hitTest1 };
export { hitTest11 as _$_modulePrivate_$_hitTest11 };
export { colLp as _$_modulePrivate_$_colLp };
export { rowLp as _$_modulePrivate_$_rowLp };
export { mkRay as _$_modulePrivate_$_mkRay };
export { trace as _$_modulePrivate_$_trace };
export { lp as _$_modulePrivate_$_lp };
export { mcray1 as _$_modulePrivate_$_mcray };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda2 as _$_modulePrivate_$_lambda2 };
export { lambda3 as _$_modulePrivate_$_lambda3 };
export { lambda4 as _$_modulePrivate_$_lambda4 };
export { lambda5 as _$_modulePrivate_$_lambda5 };
export { lambda6 as _$_modulePrivate_$_lambda6 };
export { lambda7 as _$_modulePrivate_$_lambda7 };
export { lambda8 as _$_modulePrivate_$_lambda8 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { lambda$4 as _$_modulePrivate_$_lambda$4 };
export { hitTest1$ as _$_modulePrivate_$_hitTest1$ };
export { lambda$5 as _$_modulePrivate_$_lambda$5 };
export { hitTest1$1 as _$_modulePrivate_$_hitTest1$1 };
export { mkRay$ as _$_modulePrivate_$_mkRay$ };
export { lambda$6 as _$_modulePrivate_$_lambda$6 };
export { lambda$7 as _$_modulePrivate_$_lambda$7 };
export { lambda$8 as _$_modulePrivate_$_lambda$8 };
export { rowLp_colLp as _$_modulePrivate_$_rowLp_colLp };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$ };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$1 };
export { main_test_buildScene_makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$$lambda$ };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$2 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$2 };
export { main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 };
export { main_test_buildScene_makeScene_lambertian_lambda$$lambda$3 as _$_modulePrivate_$_main_test_buildScene_makeScene_lambertian_lambda$$lambda$3 };
export { test_buildScene_makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda };
export { test_buildScene_makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$$lambda$ };
export { test_buildScene_makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$$lambda$1 };
export { test_buildScene_makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_test_buildScene_makeScene_metal_lambda$$lambda$ };
export { test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 };
export { test_buildScene_makeScene_lambertian_lambda$$lambda$2 as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$$lambda$2 };
export { test_buildScene_makeScene_lambertian_lambda$$lambda$3 as _$_modulePrivate_$_test_buildScene_makeScene_lambertian_lambda$$lambda$3 };
export { test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ };
export { test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 };
export { test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ };
export { test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_test_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel };
export { buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$ };
export { buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ };
export { buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 };
export { buildScene_makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$$lambda$ };
export { buildScene_makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$_lambda$lambda };
export { buildScene_makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$$lambda$1 };
export { buildScene_makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_buildScene_makeScene_metal_lambda$$lambda$ };
export { buildScene_makeScene_lambertian_lambda$$lambda$2 as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$$lambda$2 };
export { buildScene_makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 };
export { buildScene_makeScene_lambertian_lambda$$lambda$3 as _$_modulePrivate_$_buildScene_makeScene_lambertian_lambda$$lambda$3 };
export { makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_makeScene_lambertian_lambda$_lambda$lambda };
export { makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_makeScene_lambertian_lambda$$lambda$ };
export { makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_makeScene_lambertian_lambda$$lambda$1 };
export { makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_makeScene_metal_lambda$$lambda$ };
export { makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_makeScene_lambertian_lambda$_lambda$lambda1 };
export { makeScene_lambertian_lambda$$lambda$2 as _$_modulePrivate_$_makeScene_lambertian_lambda$$lambda$2 };
export { makeScene_lambertian_lambda$$lambda$3 as _$_modulePrivate_$_makeScene_lambertian_lambda$$lambda$3 };
export { makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_makeScene_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { makeScene_lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_makeScene_lp_randomSphere_lambertian_lambda$$lambda$ };
export { makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_makeScene_lp_randomSphere_lambertian_lambda$$lambda$1 };
export { makeScene_lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_makeScene_lp_randomSphere_metal_lambda$$lambda$ };
export { randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_randomSphere_lambertian_lambda$_lambda$lambda };
export { randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_randomSphere_lambertian_lambda$$lambda$ };
export { randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_randomSphere_lambertian_lambda$$lambda$1 };
export { randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_randomSphere_metal_lambda$$lambda$ };
export { rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { rayTracer_aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel };
export { aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_aaPixelToRGB_raysForPixel$raysForPixel };
export { raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_raysForPixel_mkRay$_mkRay$mkRay };
export { raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_raysForPixel_mkRay$$mkRay$ };
export { metal_lambda$$lambda$ as _$_modulePrivate_$_metal_lambda$$lambda$ };
export { lambertian_lambda$$lambda$ as _$_modulePrivate_$_lambertian_lambda$$lambda$ };
export { lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_lambertian_lambda$_lambda$lambda };
export { lambertian_lambda$$lambda$1 as _$_modulePrivate_$_lambertian_lambda$$lambda$1 };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { mkRay$_mkRay$mkRay as _$_modulePrivate_$_mkRay$_mkRay$mkRay };
export { lp_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_lp_randomSphere_metal_lambda$$lambda$ };
export { lp_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_lp_randomSphere_lambertian_lambda$$lambda$ };
export { lp_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_lp_randomSphere_lambertian_lambda$_lambda$lambda };
export { lp_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_lp_randomSphere_lambertian_lambda$$lambda$1 };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { main_test_rayTracer_traceRay_lambda$_trace$trace as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$_trace$trace };
export { main_test_rayTracer_traceRay_lambda$$lambda$ as _$_modulePrivate_$_main_test_rayTracer_traceRay_lambda$$lambda$ };
export { test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_test_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { test_rayTracer_traceRay_lambda$_trace$trace as _$_modulePrivate_$_test_rayTracer_traceRay_lambda$_trace$trace };
export { test_rayTracer_traceRay_lambda$$lambda$ as _$_modulePrivate_$_test_rayTracer_traceRay_lambda$$lambda$ };
export { rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { raysForPixel_listTabulate_go$go as _$_modulePrivate_$_raysForPixel_listTabulate_go$go };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 };
export { main_test_buildScene_makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$_lambda$lambda };
export { main_test_buildScene_makeScene_metal_lambda$$lambda$1 as _$_modulePrivate_$_main_test_buildScene_makeScene_metal_lambda$$lambda$1 };
export { test_buildScene_makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_test_buildScene_makeScene_metal_lambda$_lambda$lambda };
export { test_buildScene_makeScene_metal_lambda$$lambda$1 as _$_modulePrivate_$_test_buildScene_makeScene_metal_lambda$$lambda$1 };
export { test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda };
export { test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_test_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 };
export { buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda };
export { buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_buildScene_makeScene_lp_randomSphere_metal_lambda$$lambda$1 };
export { buildScene_makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_buildScene_makeScene_metal_lambda$_lambda$lambda };
export { buildScene_makeScene_metal_lambda$$lambda$1 as _$_modulePrivate_$_buildScene_makeScene_metal_lambda$$lambda$1 };
export { makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_makeScene_metal_lambda$_lambda$lambda };
export { makeScene_metal_lambda$$lambda$1 as _$_modulePrivate_$_makeScene_metal_lambda$$lambda$1 };
export { makeScene_lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_makeScene_lp_randomSphere_metal_lambda$_lambda$lambda };
export { makeScene_lp_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_makeScene_lp_randomSphere_metal_lambda$$lambda$1 };
export { randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_randomSphere_metal_lambda$_lambda$lambda };
export { randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_randomSphere_metal_lambda$$lambda$1 };
export { metal_lambda$_lambda$lambda as _$_modulePrivate_$_metal_lambda$_lambda$lambda };
export { metal_lambda$$lambda$1 as _$_modulePrivate_$_metal_lambda$$lambda$1 };
export { lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$lambda1 };
export { lp_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_lp_randomSphere_metal_lambda$_lambda$lambda };
export { lp_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_lp_randomSphere_metal_lambda$$lambda$1 };
export { aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export { rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export { test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export { main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_main_test_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export default mcray1;
