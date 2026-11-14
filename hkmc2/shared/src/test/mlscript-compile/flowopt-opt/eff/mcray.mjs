const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const within$accessorSymbol = globalThis.Symbol("within");
const rgbAdd$accessorSymbol = globalThis.Symbol("rgbAdd");
const rgbModulate$accessorSymbol = globalThis.Symbol("rgbModulate");
const rgbScale$accessorSymbol = globalThis.Symbol("rgbScale");
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
let go, hitTest1, hitTest11, trace, mcray1, lambda, lambda1, lambda$, hitTest1$, lambda$1, hitTest1$1, lambda$2, lambda$3, main_buildScene_makeScene_lambertian_lambda$_lambda$lambda, main_buildScene_makeScene_lambertian_lambda$$lambda$, main_buildScene_makeScene_lambertian_lambda$$lambda$1, main_buildScene_makeScene_metal_lambda$$lambda$, main_buildScene_makeScene_lambertian_lambda$_lambda$lambda1, main_buildScene_makeScene_lambertian_lambda$$lambda$2, main_buildScene_makeScene_lambertian_lambda$$lambda$3, main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$, main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$, main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda, main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$1, main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay, main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$, main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel, main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, main_rayTracer_traceRay_lambda$_trace$trace, main_rayTracer_traceRay_lambda$$lambda$, rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go, aaPixelToRGB_raysForPixel_listTabulate_go$go, raysForPixel_listTabulate_go$go, main_buildScene_makeScene_metal_lambda$_lambda$lambda, main_buildScene_makeScene_metal_lambda$$lambda$1, main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda, main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$1, main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker;
main_buildScene_makeScene_lambertian_lambda$_lambda$lambda = function main_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
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
main_buildScene_makeScene_lambertian_lambda$$lambda$ = function main_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_buildScene_makeScene_lambertian_lambda$$lambda$1 = function main_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_buildScene_makeScene_metal_lambda$$lambda$ = function main_buildScene_makeScene_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 = function main_buildScene_makeScene_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
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
main_buildScene_makeScene_lambertian_lambda$$lambda$2 = function main_buildScene_makeScene_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_buildScene_makeScene_lambertian_lambda$_lambda$lambda1(mcray2, rng, albedo, hit)
  }
};
main_buildScene_makeScene_lambertian_lambda$$lambda$3 = function main_buildScene_makeScene_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$ = function main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$ = function main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$() {
  return () => {
    return globalThis.Object.freeze([
      0.0,
      0.0,
      0.0
    ])
  }
};
main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda = function main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit) {
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
main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$1 = function main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$(mcray2, rng, albedo) {
  return (ray, hit) => {
    return main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda(mcray2, rng, albedo, hit)
  }
};
main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay = function main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
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
main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ = function main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir) {
  return () => {
    return main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay(mcray2, rng, hvec, vvec, pos, r1, c1, ulcDir)
  }
};
main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel = function main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, cam) {
  return (r, c) => {
    return main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c)
  }
};
main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker = function main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker(rng, cam, r, c) {
  let ulcDir, arg$Cam$2$, arg$Cam$3$, arg$Cam$4$, arg$Cam$5$, arg$Cam$6$;
  if (cam instanceof mcray1.Cam.class) {
    let f;
    arg$Cam$2$ = cam.ns;
    arg$Cam$3$ = cam.pos;
    arg$Cam$4$ = cam.ulc;
    arg$Cam$5$ = cam.hvec;
    arg$Cam$6$ = cam.vvec;
    ulcDir = mcray1[vec3Sub$accessorSymbol](arg$Cam$4$, arg$Cam$3$);
    f = main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$(mcray1, rng, arg$Cam$5$, arg$Cam$6$, arg$Cam$3$, r, c, ulcDir);
    return main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray1, arg$Cam$2$, f, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go = function main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, i) {
  let scrut, tmp, tmp1, tmp2;
  scrut = i >= n;
  if (scrut === true) {
    return mcray2.Nil
  }
  tmp = runtime.safeCall(f());
  tmp1 = i + 1;
  tmp2 = main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go(mcray2, n, f, tmp1);
  return mcray2.Cons(tmp, tmp2);
};
main_rayTracer_traceRay_lambda$_trace$trace = function main_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, depth) {
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
                tmp1 = main_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, element1$, tmp);
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
main_rayTracer_traceRay_lambda$$lambda$ = function main_rayTracer_traceRay_lambda$$lambda$(mcray2, world, maxDepth, minMaxT) {
  return (ray) => {
    return main_rayTracer_traceRay_lambda$_trace$trace(mcray2, world, minMaxT, ray, maxDepth)
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
main_buildScene_makeScene_metal_lambda$_lambda$lambda = function main_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
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
main_buildScene_makeScene_metal_lambda$$lambda$1 = function main_buildScene_makeScene_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_buildScene_makeScene_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda = function main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit) {
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
main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$1 = function main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$(mcray2, rng, albedo, fuzz) {
  return (ray, hit) => {
    return main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda(mcray2, rng, albedo, fuzz, ray, hit)
  }
};
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
lambda$3 = (undefined, function (mcray2, trace1) {
  return (ray, c1) => {
    let tmp;
    tmp = runtime.safeCall(trace1(ray));
    return mcray2[rgbAdd$accessorSymbol](c1, tmp)
  }
});
lambda$2 = (undefined, function (mcray2, trace1, rfp, scale) {
  return (r, c) => {
    return lambda1(mcray2, trace1, rfp, scale, r, c)
  }
});
lambda1 = (undefined, function (mcray2, trace1, rfp, scale, r, c) {
  let tmp, inlinedVal, f, inlinedVal1;
  inlinedVal = globalThis.Object.freeze([
    0.0,
    0.0,
    0.0
  ]);
  tmp = runtime.safeCall(rfp(r, c));
  f = lambda$3(mcray2, trace1);
  inlinedVal1 = mcray2[listFoldl$tailrec$accessorSymbol](f, inlinedVal, tmp);
  return mcray2[rgbScale$accessorSymbol](scale, inlinedVal1)
});
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
lambda$1 = (undefined, function (mcray2, ray, minMaxT) {
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
  f = lambda$1(mcray2, ray, minMaxT);
  init = mcray2.Miss;
  return mcray2[listFoldl$tailrec$accessorSymbol](f, init, objs)
};
lambda$ = (undefined, function (mcray2) {
  return (ray, minMaxT) => {
    return mcray2.Miss
  }
});
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
  static get [within$accessorSymbol]() { return mcray.#within; }
  static get [rgbAdd$accessorSymbol]() { return mcray.#rgbAdd; }
  static get [rgbModulate$accessorSymbol]() { return mcray.#rgbModulate; }
  static get [rgbScale$accessorSymbol]() { return mcray.#rgbScale; }
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
  static #rgbWhite() {
    return globalThis.Object.freeze([
      1.0,
      1.0,
      1.0
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
  static #objectEmpty() {
    let lambda$here;
    lambda$here = lambda$(mcray);
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
  static main() {
    let rng, element1$, element0$, inlinedVal, cam, tmp, tmp1, inlinedVal1, inlinedVal2, inlinedVal3, pw, aspect, theta, flen, imgCenter, ulc, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, scrut, tmp13, tmp14, inlinedVal9, scrut1, tmp15, tmp16, inlinedVal10, scrut2, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, mcray2, rng1, x, z, objs, inlinedVal11, inlinedVal12, inlinedVal13, inlinedVal14, inlinedVal15, inlinedVal16, inlinedVal17, inlinedVal18, lambda$here, lambda$here1, rSq, invR, hitTest1$here, lambda$here2, lambda$here3, rSq1, invR1, hitTest1$here1, lambda$here4, lambda$here5, rSq2, invR2, hitTest1$here2, inlinedVal19, inlinedVal20;
    rng = new mcray.Ref.class(1234567);
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
    inlinedVal19 = mcray1.#vec3Dot(tmp2, tmp2);
    inlinedVal20 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal19));
    scrut = inlinedVal20 < 0.0001;
    if (scrut === true) {
      let inlinedVal21;
      inlinedVal21 = globalThis.Object.freeze([
        0.0,
        0.0,
        0.0
      ]);
      inlinedVal8 = globalThis.Object.freeze([
        0.0,
        inlinedVal21
      ]);
    } else {
      tmp13 = 1.0 / inlinedVal20;
      tmp14 = mcray1.#vec3Scale(tmp13, tmp2);
      inlinedVal8 = globalThis.Object.freeze([
        inlinedVal20,
        tmp14
      ]);
    }
    if (runtime.Tuple.isArrayLike(inlinedVal8) && inlinedVal8.length === 2) {
      let inlinedVal21, inlinedVal22;
      inlinedVal4 = runtime.Tuple.get(inlinedVal8, 1);
      tmp3 = mcray1.#vec3Cross(inlinedVal4, tmp1);
      inlinedVal21 = mcray1.#vec3Dot(tmp3, tmp3);
      inlinedVal22 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal21));
      scrut1 = inlinedVal22 < 0.0001;
      if (scrut1 === true) {
        let inlinedVal23;
        inlinedVal23 = globalThis.Object.freeze([
          0.0,
          0.0,
          0.0
        ]);
        inlinedVal9 = globalThis.Object.freeze([
          0.0,
          inlinedVal23
        ]);
      } else {
        tmp15 = 1.0 / inlinedVal22;
        tmp16 = mcray1.#vec3Scale(tmp15, tmp3);
        inlinedVal9 = globalThis.Object.freeze([
          inlinedVal22,
          tmp16
        ]);
      }
      if (runtime.Tuple.isArrayLike(inlinedVal9) && inlinedVal9.length === 2) {
        let inlinedVal23, inlinedVal24;
        inlinedVal5 = runtime.Tuple.get(inlinedVal9, 1);
        tmp4 = mcray1.#vec3Cross(inlinedVal5, inlinedVal4);
        inlinedVal23 = mcray1.#vec3Dot(tmp4, tmp4);
        inlinedVal24 = runtime.safeCall(globalThis.Math.sqrt(inlinedVal23));
        scrut2 = inlinedVal24 < 0.0001;
        if (scrut2 === true) {
          let inlinedVal25;
          inlinedVal25 = globalThis.Object.freeze([
            0.0,
            0.0,
            0.0
          ]);
          inlinedVal10 = globalThis.Object.freeze([
            0.0,
            inlinedVal25
          ]);
        } else {
          tmp17 = 1.0 / inlinedVal24;
          tmp18 = mcray1.#vec3Scale(tmp17, tmp4);
          inlinedVal10 = globalThis.Object.freeze([
            inlinedVal24,
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
          inlinedVal12 = globalThis.Object.freeze([
            0.5,
            0.5,
            0.5
          ]);
          lambda$here = main_buildScene_makeScene_lambertian_lambda$$lambda$1();
          lambda$here1 = main_buildScene_makeScene_lambertian_lambda$$lambda$(mcray1, rng, inlinedVal12);
          inlinedVal13 = mcray1.Material(lambda$here, lambda$here1);
          rSq = 1000.0 * 1000.0;
          invR = 1.0 / 1000.0;
          hitTest1$here = hitTest1$1(mcray1, tmp20, inlinedVal13, rSq, invR);
          inlinedVal14 = mcray1.Obj(hitTest1$here);
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
          lambda$here2 = main_buildScene_makeScene_metal_lambda$$lambda$();
          lambda$here3 = main_buildScene_makeScene_metal_lambda$$lambda$1(mcray1, rng, tmp22, 0.0);
          inlinedVal15 = mcray1.Material(lambda$here2, lambda$here3);
          rSq1 = 1.0 * 1.0;
          invR1 = 1.0 / 1.0;
          hitTest1$here1 = hitTest1$1(mcray1, tmp21, inlinedVal15, rSq1, invR1);
          inlinedVal16 = mcray1.Obj(hitTest1$here1);
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
          lambda$here4 = main_buildScene_makeScene_lambertian_lambda$$lambda$3();
          lambda$here5 = main_buildScene_makeScene_lambertian_lambda$$lambda$2(mcray1, rng, tmp25);
          inlinedVal17 = mcray1.Material(lambda$here4, lambda$here5);
          rSq2 = 1.0 * 1.0;
          invR2 = 1.0 / 1.0;
          hitTest1$here2 = hitTest1$1(mcray1, tmp24, inlinedVal17, rSq2, invR2);
          inlinedVal18 = mcray1.Obj(hitTest1$here2);
          tmp26 = mcray1.Cons(inlinedVal18, mcray1.Nil);
          tmp27 = mcray1.Cons(inlinedVal16, tmp26);
          tmp28 = mcray1.Cons(inlinedVal14, tmp27);
          mcray2 = mcray1;
          rng1 = rng;
          x = -11;
          z = -11;
          objs = tmp28;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut3, scrut4, tmp29, tmp30, tmp31;
              scrut3 = z < 11;
              if (scrut3 === true) {
                let inlinedVal25, x1, z1, c, scrut5, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, inlinedVal26, inlinedVal27, inlinedVal28, scale, scale1, scale2, x2, tmp46, x3, tmp47, x4, tmp48, inlinedVal29, inlinedVal30, inlinedVal31, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, inlinedVal32, inlinedVal33, inlinedVal34;
                tmp29 = z + 1;
                scale = 1.0 / 2147483647.0;
                x4 = rng1.value;
                tmp48 = x4 * 48271;
                tmp53 = tmp48 / 2147483647;
                inlinedVal32 = runtime.safeCall(globalThis.Math.floor(tmp53));
                tmp54 = 2147483647 * inlinedVal32;
                inlinedVal29 = tmp48 - tmp54;
                rng1.value = inlinedVal29;
                inlinedVal26 = scale * inlinedVal29;
                scale1 = 1.0 / 2147483647.0;
                x3 = rng1.value;
                tmp47 = x3 * 48271;
                tmp51 = tmp47 / 2147483647;
                inlinedVal33 = runtime.safeCall(globalThis.Math.floor(tmp51));
                tmp52 = 2147483647 * inlinedVal33;
                inlinedVal30 = tmp47 - tmp52;
                rng1.value = inlinedVal30;
                inlinedVal27 = scale1 * inlinedVal30;
                tmp32 = 0.9 * inlinedVal27;
                x1 = x + tmp32;
                scale2 = 1.0 / 2147483647.0;
                x2 = rng1.value;
                tmp46 = x2 * 48271;
                tmp49 = tmp46 / 2147483647;
                inlinedVal34 = runtime.safeCall(globalThis.Math.floor(tmp49));
                tmp50 = 2147483647 * inlinedVal34;
                inlinedVal31 = tmp46 - tmp50;
                rng1.value = inlinedVal31;
                inlinedVal28 = scale2 * inlinedVal31;
                tmp33 = 0.9 * inlinedVal28;
                z1 = z + tmp33;
                c = globalThis.Object.freeze([
                  x1,
                  0.2,
                  z1
                ]);
                scrut5 = inlinedVal26 < 0.8;
                if (scrut5 === true) {
                  let inlinedVal35, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, inlinedVal41, inlinedVal42, scale3, scale4, scale5, scale6, scale7, scale8, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, tmp55, x6, tmp56, x7, tmp57, x8, tmp58, x9, tmp59, x10, tmp60, inlinedVal43, inlinedVal44, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, inlinedVal49, inlinedVal50, inlinedVal51, inlinedVal52, inlinedVal53, inlinedVal54;
                  scale3 = 1.0 / 2147483647.0;
                  x10 = rng1.value;
                  tmp60 = x10 * 48271;
                  tmp71 = tmp60 / 2147483647;
                  inlinedVal49 = runtime.safeCall(globalThis.Math.floor(tmp71));
                  tmp72 = 2147483647 * inlinedVal49;
                  inlinedVal43 = tmp60 - tmp72;
                  rng1.value = inlinedVal43;
                  inlinedVal35 = scale3 * inlinedVal43;
                  scale4 = 1.0 / 2147483647.0;
                  x9 = rng1.value;
                  tmp59 = x9 * 48271;
                  tmp69 = tmp59 / 2147483647;
                  inlinedVal50 = runtime.safeCall(globalThis.Math.floor(tmp69));
                  tmp70 = 2147483647 * inlinedVal50;
                  inlinedVal44 = tmp59 - tmp70;
                  rng1.value = inlinedVal44;
                  inlinedVal36 = scale4 * inlinedVal44;
                  tmp34 = inlinedVal35 * inlinedVal36;
                  scale5 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp58 = x8 * 48271;
                  tmp67 = tmp58 / 2147483647;
                  inlinedVal51 = runtime.safeCall(globalThis.Math.floor(tmp67));
                  tmp68 = 2147483647 * inlinedVal51;
                  inlinedVal45 = tmp58 - tmp68;
                  rng1.value = inlinedVal45;
                  inlinedVal37 = scale5 * inlinedVal45;
                  scale6 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp57 = x7 * 48271;
                  tmp65 = tmp57 / 2147483647;
                  inlinedVal52 = runtime.safeCall(globalThis.Math.floor(tmp65));
                  tmp66 = 2147483647 * inlinedVal52;
                  inlinedVal46 = tmp57 - tmp66;
                  rng1.value = inlinedVal46;
                  inlinedVal38 = scale6 * inlinedVal46;
                  tmp35 = inlinedVal37 * inlinedVal38;
                  scale7 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp56 = x6 * 48271;
                  tmp63 = tmp56 / 2147483647;
                  inlinedVal53 = runtime.safeCall(globalThis.Math.floor(tmp63));
                  tmp64 = 2147483647 * inlinedVal53;
                  inlinedVal47 = tmp56 - tmp64;
                  rng1.value = inlinedVal47;
                  inlinedVal39 = scale7 * inlinedVal47;
                  scale8 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp55 = x5 * 48271;
                  tmp61 = tmp55 / 2147483647;
                  inlinedVal54 = runtime.safeCall(globalThis.Math.floor(tmp61));
                  tmp62 = 2147483647 * inlinedVal54;
                  inlinedVal48 = tmp55 - tmp62;
                  rng1.value = inlinedVal48;
                  inlinedVal40 = scale8 * inlinedVal48;
                  tmp36 = inlinedVal39 * inlinedVal40;
                  tmp37 = globalThis.Object.freeze([
                    tmp34,
                    tmp35,
                    tmp36
                  ]);
                  lambda$here6 = main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$();
                  lambda$here7 = main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$1(mcray1, rng1, tmp37);
                  inlinedVal41 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal41, rSq3, invR3);
                  inlinedVal42 = mcray1.Obj(hitTest1$here3);
                  inlinedVal25 = inlinedVal42;
                } else {
                  let inlinedVal35, inlinedVal36, inlinedVal37, inlinedVal38, inlinedVal39, inlinedVal40, scale3, scale4, scale5, scale6, lambda$here6, lambda$here7, rSq3, invR3, hitTest1$here3, x5, tmp55, x6, tmp56, x7, tmp57, x8, tmp58, inlinedVal41, inlinedVal42, inlinedVal43, inlinedVal44, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, inlinedVal45, inlinedVal46, inlinedVal47, inlinedVal48;
                  scale3 = 1.0 / 2147483647.0;
                  x8 = rng1.value;
                  tmp58 = x8 * 48271;
                  tmp65 = tmp58 / 2147483647;
                  inlinedVal45 = runtime.safeCall(globalThis.Math.floor(tmp65));
                  tmp66 = 2147483647 * inlinedVal45;
                  inlinedVal41 = tmp58 - tmp66;
                  rng1.value = inlinedVal41;
                  inlinedVal35 = scale3 * inlinedVal41;
                  tmp38 = 1.0 + inlinedVal35;
                  tmp39 = 0.5 * tmp38;
                  scale4 = 1.0 / 2147483647.0;
                  x7 = rng1.value;
                  tmp57 = x7 * 48271;
                  tmp63 = tmp57 / 2147483647;
                  inlinedVal46 = runtime.safeCall(globalThis.Math.floor(tmp63));
                  tmp64 = 2147483647 * inlinedVal46;
                  inlinedVal42 = tmp57 - tmp64;
                  rng1.value = inlinedVal42;
                  inlinedVal36 = scale4 * inlinedVal42;
                  tmp40 = 1.0 + inlinedVal36;
                  tmp41 = 0.5 * tmp40;
                  scale5 = 1.0 / 2147483647.0;
                  x6 = rng1.value;
                  tmp56 = x6 * 48271;
                  tmp61 = tmp56 / 2147483647;
                  inlinedVal47 = runtime.safeCall(globalThis.Math.floor(tmp61));
                  tmp62 = 2147483647 * inlinedVal47;
                  inlinedVal43 = tmp56 - tmp62;
                  rng1.value = inlinedVal43;
                  inlinedVal37 = scale5 * inlinedVal43;
                  tmp42 = 1.0 + inlinedVal37;
                  tmp43 = 0.5 * tmp42;
                  tmp44 = globalThis.Object.freeze([
                    tmp39,
                    tmp41,
                    tmp43
                  ]);
                  scale6 = 1.0 / 2147483647.0;
                  x5 = rng1.value;
                  tmp55 = x5 * 48271;
                  tmp59 = tmp55 / 2147483647;
                  inlinedVal48 = runtime.safeCall(globalThis.Math.floor(tmp59));
                  tmp60 = 2147483647 * inlinedVal48;
                  inlinedVal44 = tmp55 - tmp60;
                  rng1.value = inlinedVal44;
                  inlinedVal38 = scale6 * inlinedVal44;
                  tmp45 = 0.5 * inlinedVal38;
                  lambda$here6 = main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$();
                  lambda$here7 = main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$1(mcray1, rng1, tmp44, tmp45);
                  inlinedVal39 = mcray1.Material(lambda$here6, lambda$here7);
                  rSq3 = 0.2 * 0.2;
                  invR3 = 1.0 / 0.2;
                  hitTest1$here3 = hitTest1$1(mcray1, c, inlinedVal39, rSq3, invR3);
                  inlinedVal40 = mcray1.Obj(hitTest1$here3);
                  inlinedVal25 = inlinedVal40;
                }
                tmp30 = mcray2.Cons(inlinedVal25, objs);
                z = tmp29;
                objs = tmp30;
                continue loopLabel
              }
              scrut4 = x < 11;
              if (scrut4 === true) {
                tmp31 = x + 1;
                x = tmp31;
                z = -11;
                continue loopLabel
              }
              inlinedVal11 = objs;
              break inlinedLbl;
            }
          }
          inlinedVal3 = mcray1.#fromList(inlinedVal11);
          inlinedVal = globalThis.Object.freeze([
            cam,
            inlinedVal3
          ]);
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
            let tmp29, trace1, inlinedVal25, minMaxT, inlinedVal26, rfp, scrut3, arg$Cam$2$, tmp30;
            element0$ = runtime.Tuple.get(inlinedVal, 0);
            element1$ = runtime.Tuple.get(inlinedVal, 1);
            inlinedVal26 = 1.0 / 0.0;
            minMaxT = globalThis.Object.freeze([
              0.001,
              inlinedVal26
            ]);
            trace1 = main_rayTracer_traceRay_lambda$$lambda$(mcray1, element1$, 20, minMaxT);
            if (element0$ instanceof mcray1.Cam.class) {
              arg$Cam$2$ = element0$.ns;
              rfp = main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel(rng, element0$);
              scrut3 = arg$Cam$2$ == 0;
              if (scrut3 === true) {
                inlinedVal25 = lambda$2(mcray1, trace1, rfp, 1.0);
              } else {
                tmp30 = 1.0 / arg$Cam$2$;
                inlinedVal25 = lambda$2(mcray1, trace1, rfp, tmp30);
              }
              tmp29 = mcray1.#makePixelRenderer(inlinedVal25, mcray1.#colorFromRGBWithGamma);
              return mcray1.#foreachPixel(element0$, tmp29)
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
export { hitTest1 as _$_modulePrivate_$_hitTest1 };
export { hitTest11 as _$_modulePrivate_$_hitTest11 };
export { trace as _$_modulePrivate_$_trace };
export { mcray1 as _$_modulePrivate_$_mcray };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda1 as _$_modulePrivate_$_lambda1 };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { hitTest1$ as _$_modulePrivate_$_hitTest1$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { hitTest1$1 as _$_modulePrivate_$_hitTest1$1 };
export { lambda$2 as _$_modulePrivate_$_lambda$2 };
export { lambda$3 as _$_modulePrivate_$_lambda$3 };
export { main_buildScene_makeScene_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$_lambda$lambda };
export { main_buildScene_makeScene_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$$lambda$ };
export { main_buildScene_makeScene_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$$lambda$1 };
export { main_buildScene_makeScene_metal_lambda$$lambda$ as _$_modulePrivate_$_main_buildScene_makeScene_metal_lambda$$lambda$ };
export { main_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$_lambda$lambda1 };
export { main_buildScene_makeScene_lambertian_lambda$$lambda$2 as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$$lambda$2 };
export { main_buildScene_makeScene_lambertian_lambda$$lambda$3 as _$_modulePrivate_$_main_buildScene_makeScene_lambertian_lambda$$lambda$3 };
export { main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$ as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$ };
export { main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$ as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$ };
export { main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_lambertian_lambda$_lambda$lambda };
export { main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$1 as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_lambertian_lambda$$lambda$1 };
export { main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay as _$_modulePrivate_$_main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$_mkRay$mkRay };
export { main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ as _$_modulePrivate_$_main_rayTracer_aaPixelToRGB_raysForPixel_mkRay$$mkRay$ };
export { main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel as _$_modulePrivate_$_main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel };
export { main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_main_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { main_rayTracer_traceRay_lambda$_trace$trace as _$_modulePrivate_$_main_rayTracer_traceRay_lambda$_trace$trace };
export { main_rayTracer_traceRay_lambda$$lambda$ as _$_modulePrivate_$_main_rayTracer_traceRay_lambda$$lambda$ };
export { rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_rayTracer_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { aaPixelToRGB_raysForPixel_listTabulate_go$go as _$_modulePrivate_$_aaPixelToRGB_raysForPixel_listTabulate_go$go };
export { raysForPixel_listTabulate_go$go as _$_modulePrivate_$_raysForPixel_listTabulate_go$go };
export { main_buildScene_makeScene_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_buildScene_makeScene_metal_lambda$_lambda$lambda };
export { main_buildScene_makeScene_metal_lambda$$lambda$1 as _$_modulePrivate_$_main_buildScene_makeScene_metal_lambda$$lambda$1 };
export { main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_metal_lambda$_lambda$lambda };
export { main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$1 as _$_modulePrivate_$_main_buildScene_makeScene_randomSphere_metal_lambda$$lambda$1 };
export { main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker as _$_modulePrivate_$_main_rayTracer_aaPixelToRGB_raysForPixel$raysForPixel$worker };
export default mcray1;
