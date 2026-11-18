const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const link$accessorSymbol = globalThis.Symbol("link");
const sameNd$accessorSymbol = globalThis.Symbol("sameNd");
const distance$accessorSymbol = globalThis.Symbol("distance");
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const conquer$accessorSymbol = globalThis.Symbol("conquer");
let tsp1, main_lambda$_lambda$lambda, main_lambda$$lambda$, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2, main_main_tsp$tsp$main_tsp$tsp, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup42, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup21, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup43, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker2, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker1, main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker3, main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker;
main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker = function main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  switch (id) {
    case 0:
      {
        let inlinedVal, scrut, tmp;
        tmp = param2 / 2;
        inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
        scrut = inlinedVal == 0;
        if (scrut === true) {
          return param0.NULL
        }
        {
          let tmp1, tmp2, inlinedVal1, tmp3, tmp4, tmp5, inlinedVal2, scale, inlinedVal3, inlinedVal4, inlinedVal5, scrut1, tmp6, inlinedVal6, scrut2, tmp7, inlinedVal7, scrut3, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, inlinedVal8, scale1;
          tmp25 = runtime.safeCall(param1());
          scale1 = 1.0 / 2147483647.0;
          inlinedVal8 = scale1 * tmp25;
          scrut3 = inlinedVal8 > 0.5;
          if (scrut3 === true) {
            let inlinedVal9;
            tmp8 = 162754.79141900392083592475 - 1.0;
            tmp9 = 2.0 * tmp8;
            tmp10 = inlinedVal8 - 0.5;
            tmp11 = tmp9 * tmp10;
            tmp12 = tmp11 / 162754.79141900392083592475;
            tmp13 = 1.0 - tmp12;
            inlinedVal9 = runtime.safeCall(globalThis.Math.log(tmp13));
            tmp14 = inlinedVal9 / 12.0;
          } else {
            let inlinedVal9;
            tmp15 = 162754.79141900392083592475 - 1.0;
            tmp16 = 2.0 * tmp15;
            tmp17 = tmp16 * inlinedVal8;
            tmp18 = tmp17 / 162754.79141900392083592475;
            tmp19 = 1.0 - tmp18;
            inlinedVal9 = runtime.safeCall(globalThis.Math.log(tmp19));
            tmp20 = inlinedVal9 / 12.0;
            tmp14 = - tmp20;
          }
          tmp21 = tmp14 + 1.0;
          tmp22 = param5 - param3;
          tmp23 = tmp21 * tmp22;
          tmp24 = tmp23 / 2.0;
          inlinedVal7 = param3 + tmp24;
          tmp6 = inlinedVal / 2;
          inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp6));
          scrut1 = inlinedVal5 == 0;
          if (scrut1 === true) {
            inlinedVal3 = param0.NULL;
          } else {
            let inlinedVal9;
            inlinedVal9 = main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(1, param0, param1, param3, param4, inlinedVal5, inlinedVal7, param6, undefined, undefined, undefined);
            inlinedVal3 = inlinedVal9;
          }
          tmp7 = inlinedVal / 2;
          inlinedVal6 = runtime.safeCall(globalThis.Math.floor(tmp7));
          scrut2 = inlinedVal6 == 0;
          if (scrut2 === true) {
            inlinedVal4 = param0.NULL;
          } else {
            let inlinedVal9;
            inlinedVal9 = main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(1, param0, param1, inlinedVal7, param4, inlinedVal6, param5, param6, undefined, undefined, undefined);
            inlinedVal4 = inlinedVal9;
          }
          tmp5 = runtime.safeCall(param1());
          scale = 1.0 / 2147483647.0;
          inlinedVal2 = scale * tmp5;
          tmp3 = param6 - param4;
          tmp4 = inlinedVal2 * tmp3;
          inlinedVal1 = param4 + tmp4;
          tmp1 = new param0.Ref.class(param0.NULL);
          tmp2 = new param0.Ref.class(param0.NULL);
          return param0.ND(inlinedVal3, inlinedVal4, inlinedVal7, inlinedVal1, inlinedVal, tmp1, tmp2);
        }
      }
    case 1:
      {
        let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, inlinedVal1, scale, inlinedVal2, scrut, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, inlinedVal3, scale1;
        tmp22 = runtime.safeCall(param1());
        scale1 = 1.0 / 2147483647.0;
        inlinedVal3 = scale1 * tmp22;
        scrut = inlinedVal3 > 0.5;
        if (scrut === true) {
          let inlinedVal4;
          tmp5 = 162754.79141900392083592475 - 1.0;
          tmp6 = 2.0 * tmp5;
          tmp7 = inlinedVal3 - 0.5;
          tmp8 = tmp6 * tmp7;
          tmp9 = tmp8 / 162754.79141900392083592475;
          tmp10 = 1.0 - tmp9;
          inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp10));
          tmp11 = inlinedVal4 / 12.0;
        } else {
          let inlinedVal4;
          tmp12 = 162754.79141900392083592475 - 1.0;
          tmp13 = 2.0 * tmp12;
          tmp14 = tmp13 * inlinedVal3;
          tmp15 = tmp14 / 162754.79141900392083592475;
          tmp16 = 1.0 - tmp15;
          inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp16));
          tmp17 = inlinedVal4 / 12.0;
          tmp11 = - tmp17;
        }
        tmp18 = tmp11 + 1.0;
        tmp19 = param6 - param5;
        tmp20 = tmp18 * tmp19;
        tmp21 = tmp20 / 2.0;
        inlinedVal2 = param5 + tmp21;
        param8 = main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(0, param0, param1, param4, param2, param3, param5, inlinedVal2, undefined, undefined, undefined);
        param9 = main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(0, param0, param1, param4, param2, param3, inlinedVal2, param6, undefined, undefined, undefined);
        tmp4 = runtime.safeCall(param1());
        scale = 1.0 / 2147483647.0;
        inlinedVal1 = scale * tmp4;
        tmp2 = param3 - param2;
        tmp3 = inlinedVal1 * tmp2;
        inlinedVal = param2 + tmp3;
        tmp = new param0.Ref.class(param0.NULL);
        tmp1 = new param0.Ref.class(param0.NULL);
        return param0.ND(param8, param9, inlinedVal, inlinedVal2, param4, tmp, tmp1);
      }
  }
};
main_lambda$_lambda$lambda = function main_lambda$_lambda$lambda(seedRef) {
  let seed, inlinedVal, test, scrut, tmp, tmp1, inlinedVal1, inlinedVal2, tmp2, tmp3, inlinedVal3, tmp4;
  seed = seedRef.value;
  tmp3 = seed / 44488;
  inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp3));
  tmp4 = seed / 44488;
  inlinedVal3 = runtime.safeCall(globalThis.Math.floor(tmp4));
  tmp2 = 44488 * inlinedVal3;
  inlinedVal2 = seed - tmp2;
  tmp = 48271 * inlinedVal2;
  tmp1 = 3399 * inlinedVal1;
  test = tmp - tmp1;
  scrut = test > 0;
  if (scrut === true) {
    inlinedVal = test;
  } else {
    inlinedVal = test + 2147483647;
  }
  seedRef.value = inlinedVal;
  return seedRef.value
};
main_lambda$$lambda$ = function main_lambda$$lambda$(seedRef) {
  return () => {
    return main_lambda$_lambda$lambda(seedRef)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker3(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker3 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
  let scrut;
  fv_n1ToN2 = tsp1[distance$accessorSymbol](fv_n1, tup4_2);
  fv_n1ToP2 = tsp1[distance$accessorSymbol](fv_n1, tup4_0);
  fv_p1ToN2 = tsp1[distance$accessorSymbol](fv_p1, tup4_2);
  fv_p1ToP2 = tsp1[distance$accessorSymbol](fv_p1, tup4_0);
  fv_tmp = fv_tToP1 + tup4_1;
  fv_minDist0 = fv_tmp + fv_n1ToN2;
  fv_tmp1 = fv_tToP1 + tup4_3;
  fv_tmp2 = fv_tmp1 + fv_n1ToP2;
  scrut = fv_tmp2 < fv_minDist0;
  if (scrut === true) {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_tmp2;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp2;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (2 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (2 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (2 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
  {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_minDist0;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_minDist0;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (1 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (1 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (1 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker1(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker1 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
  if (tup2_0 instanceof fv_tsp.ND.class) {
    fv_arg$ND$5$ = tup2_0.prev;
    fv_arg$ND$6$ = tup2_0.next;
    fv_prev = fv_arg$ND$5$.value;
    fv_next = fv_arg$ND$6$.value;
    fv_minToNext = fv_tsp[distance$accessorSymbol](tup2_0, fv_next);
    fv_minToPrev = fv_tsp[distance$accessorSymbol](tup2_0, fv_prev);
    fv_tToNext = fv_tsp[distance$accessorSymbol](fv_t, fv_next);
    fv_tToPrev = fv_tsp[distance$accessorSymbol](fv_t, fv_prev);
    fv_tmp = fv_tToPrev - fv_minToPrev;
    fv_tmp1 = fv_tToNext - fv_minToNext;
    fv_scrut = fv_tmp < fv_tmp1;
    if (fv_scrut === true) {
      return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, t, inlinedVal, arg$ND$6$, tmp;
  tsp2 = tsp1;
  t = fv_t;
  if (fv_b instanceof tsp2.ND.class) {
    let tsp3, t1, start, min, minDist, tmp1, inlinedVal1;
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    tsp3 = tsp1;
    t1 = fv_t;
    start = fv_b;
    min = fv_b;
    minDist = tmp;
    tmp1 = arg$ND$6$.value;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, test, scrut1, arg$ND$6$1;
        if (tmp1 instanceof tsp3.ND.class) {
          arg$ND$6$1 = tmp1.next;
          scrut = tsp3[sameNd$accessorSymbol](start, tmp1);
          if (scrut === true) {
            inlinedVal1 = main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2(min, minDist);
            break inlinedLbl
          }
          test = tsp3[distance$accessorSymbol](t1, tmp1);
          scrut1 = test < minDist;
          if (scrut1 === true) {
            min = tmp1;
            minDist = test;
            tmp1 = arg$ND$6$1.value;
            continue loopLabel
          }
          tmp1 = arg$ND$6$1.value;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal = inlinedVal1(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
  if (tup2_0 instanceof fv_tsp.ND.class) {
    fv_arg$ND$5$ = tup2_0.prev;
    fv_arg$ND$6$ = tup2_0.next;
    fv_prev = fv_arg$ND$5$.value;
    fv_next = fv_arg$ND$6$.value;
    fv_minToNext = fv_tsp[distance$accessorSymbol](tup2_0, fv_next);
    fv_minToPrev = fv_tsp[distance$accessorSymbol](tup2_0, fv_prev);
    fv_tToNext = fv_tsp[distance$accessorSymbol](fv_t, fv_next);
    fv_tToPrev = fv_tsp[distance$accessorSymbol](fv_t, fv_prev);
    fv_tmp = fv_tToPrev - fv_minToPrev;
    fv_tmp1 = fv_tToNext - fv_minToNext;
    fv_scrut = fv_tmp < fv_tmp1;
    if (fv_scrut === true) {
      return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp$main_tsp$tsp = function main_main_tsp$tsp$main_tsp$tsp(t, sz) {
  let scrut, arg$ND$0$, arg$ND$1$, arg$ND$4$, tmp, tmp1;
  if (t instanceof tsp1.ND.class) {
    arg$ND$0$ = t.left;
    arg$ND$1$ = t.right;
    arg$ND$4$ = t.sz;
    scrut = arg$ND$4$ <= sz;
    if (scrut === true) {
      return tsp1[conquer$accessorSymbol](t)
    }
    {
      let b, t1;
      tmp = main_main_tsp$tsp$main_tsp$tsp(arg$ND$0$, sz);
      tmp1 = main_main_tsp$tsp$main_tsp$tsp(arg$ND$1$, sz);
      b = tmp1;
      t1 = t;
      if (tmp instanceof tsp1.ND.class) {
        let tsp2, t2, inlinedVal, arg$ND$6$, tmp2;
        tsp2 = tsp1;
        t2 = t;
        if (tmp instanceof tsp2.ND.class) {
          let tsp3, t3, start, min, minDist, tmp3, inlinedVal1;
          arg$ND$6$ = tmp.next;
          tmp2 = tsp1[distance$accessorSymbol](t, tmp);
          tsp3 = tsp1;
          t3 = t;
          start = tmp;
          min = tmp;
          minDist = tmp2;
          tmp3 = arg$ND$6$.value;
          inlinedLbl: {
            loopLabel: while (true) {
              let scrut1, test, scrut2, arg$ND$6$1;
              if (tmp3 instanceof tsp3.ND.class) {
                arg$ND$6$1 = tmp3.next;
                scrut1 = tsp3[sameNd$accessorSymbol](start, tmp3);
                if (scrut1 === true) {
                  inlinedVal1 = main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2(min, minDist);
                  break inlinedLbl
                }
                test = tsp3[distance$accessorSymbol](t3, tmp3);
                scrut2 = test < minDist;
                if (scrut2 === true) {
                  min = tmp3;
                  minDist = test;
                  tmp3 = arg$ND$6$1.value;
                  continue loopLabel
                }
                tmp3 = arg$ND$6$1.value;
                continue loopLabel;
              }
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
          }
          inlinedVal = inlinedVal1(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t2, undefined, undefined, undefined, undefined);
          return inlinedVal(t1, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  } else if (t instanceof tsp1.NULL.class) {
    return tsp1.NULL
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker2(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker2 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
  let scrut;
  fv_n1ToN2 = tsp1[distance$accessorSymbol](fv_n1, tup4_2);
  fv_n1ToP2 = tsp1[distance$accessorSymbol](fv_n1, tup4_0);
  fv_p1ToN2 = tsp1[distance$accessorSymbol](fv_p1, tup4_2);
  fv_p1ToP2 = tsp1[distance$accessorSymbol](fv_p1, tup4_0);
  fv_tmp = fv_tToP1 + tup4_1;
  fv_minDist0 = fv_tmp + fv_n1ToN2;
  fv_tmp1 = fv_tToP1 + tup4_3;
  fv_tmp2 = fv_tmp1 + fv_n1ToP2;
  scrut = fv_tmp2 < fv_minDist0;
  if (scrut === true) {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_tmp2;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp2;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (2 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (2 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (2 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
  {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_minDist0;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_minDist0;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (1 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (1 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (1 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup42 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker1 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
  let scrut;
  fv_n1ToN2 = tsp1[distance$accessorSymbol](fv_n1, tup4_2);
  fv_n1ToP2 = tsp1[distance$accessorSymbol](fv_n1, tup4_0);
  fv_p1ToN2 = tsp1[distance$accessorSymbol](fv_p1, tup4_2);
  fv_p1ToP2 = tsp1[distance$accessorSymbol](fv_p1, tup4_0);
  fv_tmp = fv_tToP1 + tup4_1;
  fv_minDist0 = fv_tmp + fv_n1ToN2;
  fv_tmp1 = fv_tToP1 + tup4_3;
  fv_tmp2 = fv_tmp1 + fv_n1ToP2;
  scrut = fv_tmp2 < fv_minDist0;
  if (scrut === true) {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_tmp2;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp2;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (2 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (2 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (2 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
  {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_minDist0;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_minDist0;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (1 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (1 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (1 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup21 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
  if (tup2_0 instanceof fv_tsp.ND.class) {
    fv_arg$ND$5$ = tup2_0.prev;
    fv_arg$ND$6$ = tup2_0.next;
    fv_prev = fv_arg$ND$5$.value;
    fv_next = fv_arg$ND$6$.value;
    fv_minToNext = fv_tsp[distance$accessorSymbol](tup2_0, fv_next);
    fv_minToPrev = fv_tsp[distance$accessorSymbol](tup2_0, fv_prev);
    fv_tToNext = fv_tsp[distance$accessorSymbol](fv_t, fv_next);
    fv_tToPrev = fv_tsp[distance$accessorSymbol](fv_t, fv_prev);
    fv_tmp = fv_tToPrev - fv_minToPrev;
    fv_tmp1 = fv_tToNext - fv_minToNext;
    fv_scrut = fv_tmp < fv_tmp1;
    if (fv_scrut === true) {
      return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup42(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup43(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup41 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, t, inlinedVal, arg$ND$6$, tmp;
  tsp2 = tsp1;
  t = fv_t;
  if (fv_b instanceof tsp2.ND.class) {
    let tsp3, t1, start, min, minDist, tmp1, inlinedVal1;
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    tsp3 = tsp1;
    t1 = fv_t;
    start = fv_b;
    min = fv_b;
    minDist = tmp;
    tmp1 = arg$ND$6$.value;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, test, scrut1, arg$ND$6$1;
        if (tmp1 instanceof tsp3.ND.class) {
          arg$ND$6$1 = tmp1.next;
          scrut = tsp3[sameNd$accessorSymbol](start, tmp1);
          if (scrut === true) {
            inlinedVal1 = main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2$main_tsp_merge_locateCycle$scrut_tup21(min, minDist);
            break inlinedLbl
          }
          test = tsp3[distance$accessorSymbol](t1, tmp1);
          scrut1 = test < minDist;
          if (scrut1 === true) {
            min = tmp1;
            minDist = test;
            tmp1 = arg$ND$6$1.value;
            continue loopLabel
          }
          tmp1 = arg$ND$6$1.value;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    inlinedVal = inlinedVal1(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup43 = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker = function main_main_tsp$tsp_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4_main_tsp_merge_locateCycle$scrut_tup2_main_tsp_merge$scrut_tup4$main_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
  let scrut;
  fv_n1ToN2 = tsp1[distance$accessorSymbol](fv_n1, tup4_2);
  fv_n1ToP2 = tsp1[distance$accessorSymbol](fv_n1, tup4_0);
  fv_p1ToN2 = tsp1[distance$accessorSymbol](fv_p1, tup4_2);
  fv_p1ToP2 = tsp1[distance$accessorSymbol](fv_p1, tup4_0);
  fv_tmp = fv_tToP1 + tup4_1;
  fv_minDist0 = fv_tmp + fv_n1ToN2;
  fv_tmp1 = fv_tToP1 + tup4_3;
  fv_tmp2 = fv_tmp1 + fv_n1ToP2;
  scrut = fv_tmp2 < fv_minDist0;
  if (scrut === true) {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_tmp2;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp2;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (2 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (2 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (2 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
  {
    let fv_tmp5, fv_tmp6, scrut1;
    fv_tmp5 = fv_tToN1 + tup4_1;
    fv_tmp6 = fv_tmp5 + fv_p1ToN2;
    scrut1 = fv_tmp6 < fv_minDist0;
    if (scrut1 === true) {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_tmp6;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (3 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (3 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (3 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
    {
      let fv_tmp7, fv_tmp8, scrut2;
      fv_tmp7 = fv_tToN1 + tup4_3;
      fv_tmp8 = fv_tmp7 + fv_p1ToP2;
      scrut2 = fv_tmp8 < fv_minDist0;
      if (scrut2 === true) {
        if (4 === 1) {
          tsp1[reverse$accessorSymbol](tup4_2);
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_0);
          tsp1[link$accessorSymbol](tup4_2, fv_n1);
          return fv_t
        } else if (4 === 2) {
          tsp1[link$accessorSymbol](fv_p1, fv_t);
          tsp1[link$accessorSymbol](fv_t, tup4_2);
          tsp1[link$accessorSymbol](tup4_0, fv_n1);
          return fv_t
        } else if (4 === 3) {
          tsp1[link$accessorSymbol](tup4_0, fv_t);
          tsp1[link$accessorSymbol](fv_t, fv_n1);
          tsp1[link$accessorSymbol](fv_p1, tup4_2);
          return fv_t
        }
        tsp1[reverse$accessorSymbol](fv_n1);
        tsp1[link$accessorSymbol](fv_n1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_p1);
        return fv_t;
      }
      if (1 === 1) {
        tsp1[reverse$accessorSymbol](tup4_2);
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_0);
        tsp1[link$accessorSymbol](tup4_2, fv_n1);
        return fv_t
      } else if (1 === 2) {
        tsp1[link$accessorSymbol](fv_p1, fv_t);
        tsp1[link$accessorSymbol](fv_t, tup4_2);
        tsp1[link$accessorSymbol](tup4_0, fv_n1);
        return fv_t
      } else if (1 === 3) {
        tsp1[link$accessorSymbol](tup4_0, fv_t);
        tsp1[link$accessorSymbol](fv_t, fv_n1);
        tsp1[link$accessorSymbol](fv_p1, tup4_2);
        return fv_t
      }
      tsp1[reverse$accessorSymbol](fv_n1);
      tsp1[link$accessorSymbol](fv_n1, fv_t);
      tsp1[link$accessorSymbol](fv_t, tup4_2);
      tsp1[link$accessorSymbol](tup4_0, fv_p1);
      return fv_t;
    }
  }
};
(class tsp {
  static {
    tsp1 = this
  }
  static get [link$accessorSymbol]() { return tsp.#link; }
  static get [sameNd$accessorSymbol]() { return tsp.#sameNd; }
  static get [distance$accessorSymbol]() { return tsp.#distance; }
  static get [reverse$accessorSymbol]() { return tsp.#reverse; }
  static get [conquer$accessorSymbol]() { return tsp.#conquer; }
  static {
    tsp.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        tsp.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class NULL {
      static {
        new this
      }
      constructor() {
        tsp.NULL = this;
        Object.defineProperty(this, "class", {
          value: NULL
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NULL"];
    });
    tsp.ND = function ND(left, right, x, y, sz, prev, next) {
      return globalThis.Object.freeze(new ND.class(left, right, x, y, sz, prev, next));
    };
    (class ND {
      static {
        tsp.ND.class = this
      }
      constructor(left, right, x, y, sz, prev, next) {
        this.left = left;
        this.right = right;
        this.x = x;
        this.y = y;
        this.sz = sz;
        this.prev = prev;
        this.next = next;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ND", ["left", "right", "x", "y", "sz", "prev", "next"]];
    });
    (class X_AXIS {
      static {
        new this
      }
      constructor() {
        tsp.X_AXIS = this;
        Object.defineProperty(this, "class", {
          value: X_AXIS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "X_AXIS"];
    });
    (class Y_AXIS {
      static {
        new this
      }
      constructor() {
        tsp.Y_AXIS = this;
        Object.defineProperty(this, "class", {
          value: Y_AXIS
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Y_AXIS"];
    });
  }
  static #sqrt(x) {
    return runtime.safeCall(globalThis.Math.sqrt(x))
  }
  static #setNext(nd, x) {
    let arg$ND$6$;
    if (nd instanceof tsp.ND.class) {
      arg$ND$6$ = nd.next;
      arg$ND$6$.value = x;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #link(a, b) {
    let arg$ND$6$, arg$ND$5$;
    if (a instanceof tsp.ND.class) {
      arg$ND$6$ = a.next;
      if (b instanceof tsp.ND.class) {
        arg$ND$5$ = b.prev;
        arg$ND$6$.value = b;
        arg$ND$5$.value = a;
        return runtime.Unit
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sameNd(a, b) {
    let arg$ND$6$, arg$ND$6$1;
    if (a instanceof tsp.ND.class) {
      arg$ND$6$ = a.next;
      if (b instanceof tsp.ND.class) {
        arg$ND$6$1 = b.next;
        return arg$ND$6$ === arg$ND$6$1
      }
      return false;
    } else if (a instanceof tsp.NULL.class) {
      if (b instanceof tsp.NULL.class) {
        return true
      }
      return false;
    }
    return false;
  }
  static #distance(a, b) {
    let arg$ND$2$, arg$ND$3$, arg$ND$2$1, arg$ND$3$1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (a instanceof tsp.ND.class) {
      arg$ND$2$ = a.x;
      arg$ND$3$ = a.y;
      if (b instanceof tsp.ND.class) {
        arg$ND$2$1 = b.x;
        arg$ND$3$1 = b.y;
        tmp = arg$ND$2$ - arg$ND$2$1;
        tmp1 = arg$ND$2$ - arg$ND$2$1;
        tmp2 = tmp * tmp1;
        tmp3 = arg$ND$3$ - arg$ND$3$1;
        tmp4 = arg$ND$3$ - arg$ND$3$1;
        tmp5 = tmp3 * tmp4;
        tmp6 = tmp2 + tmp5;
        return tsp.#sqrt(tmp6)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #makeList(t) {
    let l, r, arg$ND$0$, arg$ND$1$, arg$ND$6$, tmp;
    if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    } else if (t instanceof tsp.ND.class) {
      arg$ND$0$ = t.left;
      arg$ND$1$ = t.right;
      arg$ND$6$ = t.next;
      l = tsp.#makeList(arg$ND$0$);
      r = tsp.#makeList(arg$ND$1$);
      if (l instanceof tsp.NULL.class) {
        if (r instanceof tsp.NULL.class) {
          tmp = t;
        } else if (r instanceof tsp.ND.class) {
          tsp.#setNext(arg$ND$1$, t);
          tmp = r;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else if (l instanceof tsp.ND.class) {
        if (r instanceof tsp.NULL.class) {
          tsp.#setNext(arg$ND$0$, t);
          tmp = l;
        } else if (r instanceof tsp.ND.class) {
          tsp.#setNext(arg$ND$1$, t);
          tsp.#setNext(arg$ND$0$, r);
          tmp = l;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      arg$ND$6$.value = tsp.NULL;
      return tmp
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #reverse(t) {
    let arg$ND$5$, arg$ND$6$;
    if (t instanceof tsp.NULL.class) {
      return runtime.Unit
    } else if (t instanceof tsp.ND.class) {
      let tsp2, back, tmp, inlinedVal;
      arg$ND$5$ = t.prev;
      arg$ND$6$ = t.next;
      tsp.#setNext(arg$ND$5$.value, tsp.NULL);
      arg$ND$5$.value = tsp.NULL;
      tsp2 = tsp;
      back = t;
      tmp = arg$ND$6$.value;
      inlinedLbl: {
        loopLabel: while (true) {
          let tmp1, arg$ND$6$1;
          if (tmp instanceof tsp2.NULL.class) {
            inlinedVal = runtime.Unit;
            break inlinedLbl
          } else if (tmp instanceof tsp2.ND.class) {
            let receiver, arg$ND$5$1;
            arg$ND$6$1 = tmp.next;
            tmp1 = arg$ND$6$1.value;
            arg$ND$6$1.value = back;
            receiver = tsp2;
            if (back instanceof receiver.ND.class) {
              arg$ND$5$1 = back.prev;
              arg$ND$5$1.value = tmp;
              back = tmp;
              tmp = tmp1;
              continue loopLabel
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #conquer(t) {
    let cycle, t1, arg$ND$5$, arg$ND$6$;
    if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    cycle = tsp.#makeList(t);
    if (cycle instanceof tsp.ND.class) {
      let tsp2, cycle1, cycle_next, t2;
      arg$ND$5$ = cycle.prev;
      arg$ND$6$ = cycle.next;
      t1 = arg$ND$6$.value;
      arg$ND$6$.value = cycle;
      arg$ND$5$.value = cycle;
      tsp2 = tsp;
      cycle1 = cycle;
      cycle_next = arg$ND$6$;
      t2 = t1;
      inlinedLbl: {
        loopLabel: while (true) {
          let doNext, min_prev, min_next, minToNext, minToPrev, tToNext, tToPrev, scrut, arg$ND$6$1, tmp, arg$ND$5$1, arg$ND$6$2, tmp1, tmp2;
          if (t2 instanceof tsp2.NULL.class) {
            break inlinedLbl
          } else if (t2 instanceof tsp2.ND.class) {
            let tsp3, cycle2, t3, min, minDist, tmp3, inlinedVal;
            arg$ND$6$1 = t2.next;
            doNext = arg$ND$6$1.value;
            tmp = tsp2.#distance(t2, cycle1);
            tsp3 = tsp2;
            cycle2 = cycle1;
            t3 = t2;
            min = cycle1;
            minDist = tmp;
            tmp3 = cycle_next.value;
            inlinedLbl1: {
              loopLabel1: while (true) {
                let scrut1, test, scrut2, arg$ND$6$3;
                if (tmp3 instanceof tsp3.ND.class) {
                  arg$ND$6$3 = tmp3.next;
                  scrut1 = tsp3.#sameNd(cycle2, tmp3);
                  if (scrut1 === true) {
                    inlinedVal = min;
                    break inlinedLbl1
                  }
                  test = tsp3.#distance(t3, tmp3);
                  scrut2 = test < minDist;
                  if (scrut2 === true) {
                    min = tmp3;
                    minDist = test;
                    tmp3 = arg$ND$6$3.value;
                    continue loopLabel1
                  }
                  tmp3 = arg$ND$6$3.value;
                  continue loopLabel1;
                }
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
              }
            }
            if (inlinedVal instanceof tsp2.ND.class) {
              arg$ND$5$1 = inlinedVal.prev;
              arg$ND$6$2 = inlinedVal.next;
              min_prev = arg$ND$5$1.value;
              min_next = arg$ND$6$2.value;
              minToNext = tsp2.#distance(inlinedVal, min_next);
              minToPrev = tsp2.#distance(inlinedVal, min_prev);
              tToNext = tsp2.#distance(t2, min_next);
              tToPrev = tsp2.#distance(t2, min_prev);
              tmp1 = tToPrev - minToPrev;
              tmp2 = tToNext - minToNext;
              scrut = tmp1 < tmp2;
              if (scrut === true) {
                tsp2.#link(min_prev, t2);
                tsp2.#link(t2, inlinedVal);
                t2 = doNext;
                continue loopLabel
              }
              tsp2.#link(inlinedVal, t2);
              tsp2.#link(t2, min_next);
              t2 = doNext;
              continue loopLabel;
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return cycle
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #tourLength(start) {
    let arg$ND$2$, arg$ND$3$, arg$ND$6$;
    if (start instanceof tsp.NULL.class) {
      return globalThis.Object.freeze([
        0,
        0.0
      ])
    } else if (start instanceof tsp.ND.class) {
      let tsp2, t, inlinedVal, arg$ND$6$1;
      arg$ND$2$ = start.x;
      arg$ND$3$ = start.y;
      arg$ND$6$ = start.next;
      tsp2 = tsp;
      t = arg$ND$6$.value;
      if (t instanceof tsp2.ND.class) {
        arg$ND$6$1 = t.next;
        inlinedVal = arg$ND$6$ === arg$ND$6$1;
      } else {
        inlinedVal = false;
      }
      if (inlinedVal === true) {
        return globalThis.Object.freeze([
          1,
          0.0
        ])
      }
      {
        let tsp3, x, y, next, t1, px, py, n, len, inlinedVal1;
        tsp3 = tsp;
        x = arg$ND$2$;
        y = arg$ND$3$;
        next = arg$ND$6$;
        t1 = arg$ND$6$.value;
        px = arg$ND$2$;
        py = arg$ND$3$;
        n = 1;
        len = 0.0;
        inlinedLbl: {
          loopLabel: while (true) {
            let arg$ND$2$1, arg$ND$3$1, arg$ND$6$2, tmp, tmp1, tmp2, tmp3;
            if (t1 instanceof tsp3.NULL.class) {
              let dx, dy, tmp4, tmp5, tmp6, inlinedVal2;
              dx = px - x;
              dy = py - y;
              tmp4 = dx * dx;
              tmp5 = dy * dy;
              tmp6 = tmp4 + tmp5;
              inlinedVal2 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
              tmp = len + inlinedVal2;
              inlinedVal1 = globalThis.Object.freeze([
                n,
                tmp
              ]);
              break inlinedLbl
            } else if (t1 instanceof tsp3.ND.class) {
              let tsp4, inlinedVal2, arg$ND$6$3;
              arg$ND$2$1 = t1.x;
              arg$ND$3$1 = t1.y;
              arg$ND$6$2 = t1.next;
              tsp4 = tsp3;
              if (t1 instanceof tsp4.ND.class) {
                arg$ND$6$3 = t1.next;
                inlinedVal2 = next === arg$ND$6$3;
              } else {
                inlinedVal2 = false;
              }
              if (inlinedVal2 === true) {
                let dx, dy, tmp4, tmp5, tmp6, inlinedVal3;
                dx = px - arg$ND$2$1;
                dy = py - arg$ND$3$1;
                tmp4 = dx * dx;
                tmp5 = dy * dy;
                tmp6 = tmp4 + tmp5;
                inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
                tmp1 = len + inlinedVal3;
                inlinedVal1 = globalThis.Object.freeze([
                  n,
                  tmp1
                ]);
                break inlinedLbl
              }
              {
                let dx, dy, tmp4, tmp5, tmp6, inlinedVal3;
                tmp2 = n + 1;
                dx = px - arg$ND$2$1;
                dy = py - arg$ND$3$1;
                tmp4 = dx * dx;
                tmp5 = dy * dy;
                tmp6 = tmp4 + tmp5;
                inlinedVal3 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
                tmp3 = len + inlinedVal3;
                t1 = arg$ND$6$2.value;
                px = arg$ND$2$1;
                py = arg$ND$3$1;
                n = tmp2;
                len = tmp3;
                continue loopLabel;
              }
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
        }
        return inlinedVal1;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, inlinedVal, seedRef, scrut, inlinedVal1;
    if (false === true) {
      inlinedVal1 = 1;
    } else if (false === true) {
      inlinedVal1 = 2147483646;
    } else {
      inlinedVal1 = 314;
    }
    seedRef = new tsp1.Ref.class(inlinedVal1);
    scrut = 255 == 0;
    if (scrut === true) {
      inlinedVal = tsp1.NULL;
    } else {
      let fv_rand, inlinedVal2;
      fv_rand = main_lambda$$lambda$(seedRef);
      inlinedVal2 = main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$mkTree_main_main_buildTree_build$dir_X_AXIS$main_buildTree_build$dir_X_AXIS$worker(1, tsp1, fv_rand, 0.0, 0.0, 255, 1.0, 1.0, undefined, undefined, undefined);
      inlinedVal = inlinedVal2;
    }
    tmp = main_main_tsp$tsp$main_tsp$tsp(inlinedVal, 150);
    return tsp.#tourLength(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tsp"];
});
export default tsp1;
