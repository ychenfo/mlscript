const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const link$accessorSymbol = globalThis.Symbol("link");
const sameNd$accessorSymbol = globalThis.Symbol("sameNd");
const distance$accessorSymbol = globalThis.Symbol("distance");
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const conquer$accessorSymbol = globalThis.Symbol("conquer");
let locateCycle, tsp1, build_mkTree_mkTree, main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree, main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda, main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$, doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda, doit_mkTree_buildTree_mkRandom_lambda$$lambda$, doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree, mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree, mkTree_buildTree_mkRandom_lambda$_lambda$lambda, mkTree_buildTree_mkRandom_lambda$$lambda$, buildTree_mkRandom_lambda$_lambda$lambda, buildTree_mkRandom_lambda$$lambda$, buildTree_build_mkTree_mkTree$build_mkTree_mkTree, mkRandom_lambda$_lambda$lambda, mkRandom_lambda$$lambda$, main_doit_tsp$tsp, doit_tsp$tsp;
main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree = function main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param7 - param5;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param5 + tmp25;
            tmp = main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, inlinedVal2, undefined);
            tmp1 = main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, inlinedVal2, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, inlinedVal2, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param6 - param4;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param4 + tmp25;
            tmp2 = main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, inlinedVal2, undefined);
            tmp3 = main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, inlinedVal2, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, inlinedVal2, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda = function main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef) {
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
main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$ = function main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef) {
  return () => {
    return main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef)
  }
};
doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda = function doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef) {
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
doit_mkTree_buildTree_mkRandom_lambda$$lambda$ = function doit_mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef) {
  return () => {
    return doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef)
  }
};
doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree = function doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param7 - param5;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param5 + tmp25;
            tmp = doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, inlinedVal2, undefined);
            tmp1 = doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, inlinedVal2, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, inlinedVal2, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param6 - param4;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param4 + tmp25;
            tmp2 = doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, inlinedVal2, undefined);
            tmp3 = doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, inlinedVal2, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, inlinedVal2, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree = function mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param7 - param5;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param5 + tmp25;
            tmp = mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, inlinedVal2, undefined);
            tmp1 = mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, inlinedVal2, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, inlinedVal2, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param6 - param4;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param4 + tmp25;
            tmp2 = mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, inlinedVal2, undefined);
            tmp3 = mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, inlinedVal2, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, inlinedVal2, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
mkTree_buildTree_mkRandom_lambda$_lambda$lambda = function mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef) {
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
mkTree_buildTree_mkRandom_lambda$$lambda$ = function mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef) {
  return () => {
    return mkTree_buildTree_mkRandom_lambda$_lambda$lambda(seedRef)
  }
};
buildTree_mkRandom_lambda$_lambda$lambda = function buildTree_mkRandom_lambda$_lambda$lambda(seedRef) {
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
buildTree_mkRandom_lambda$$lambda$ = function buildTree_mkRandom_lambda$$lambda$(seedRef) {
  return () => {
    return buildTree_mkRandom_lambda$_lambda$lambda(seedRef)
  }
};
buildTree_build_mkTree_mkTree$build_mkTree_mkTree = function buildTree_build_mkTree_mkTree$build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param7 - param5;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param5 + tmp25;
            tmp = buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, inlinedVal2, undefined);
            tmp1 = buildTree_build_mkTree_mkTree$build_mkTree_mkTree(1, param0, param1, param2, param4, param6, inlinedVal2, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, inlinedVal2, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param6 - param4;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param4 + tmp25;
            tmp2 = buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, inlinedVal2, undefined);
            tmp3 = buildTree_build_mkTree_mkTree$build_mkTree_mkTree(2, param0, param1, param2, param5, param7, inlinedVal2, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, inlinedVal2, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
mkRandom_lambda$_lambda$lambda = function mkRandom_lambda$_lambda$lambda(seedRef) {
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
mkRandom_lambda$$lambda$ = function mkRandom_lambda$$lambda$(seedRef) {
  return () => {
    return mkRandom_lambda$_lambda$lambda(seedRef)
  }
};
main_doit_tsp$tsp = function main_doit_tsp$tsp(t, sz) {
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
      let scrut1, n1ToN2, n1ToP2, p1ToN2, p1ToP2, minDist0, scrut2, element3$, element2$, element1$, element0$, element3$1, element2$1, element1$1, element0$1, tmp2, element1$2, element0$2, element1$3, element0$3, element0$4, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      tmp = main_doit_tsp$tsp(arg$ND$0$, sz);
      tmp1 = main_doit_tsp$tsp(arg$ND$1$, sz);
      if (tmp instanceof tsp1.ND.class) {
        scrut1 = locateCycle(tsp1, t, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 4) {
          element0$ = runtime.Tuple.get(scrut1, 0);
          element1$ = runtime.Tuple.get(scrut1, 1);
          element2$ = runtime.Tuple.get(scrut1, 2);
          element3$ = runtime.Tuple.get(scrut1, 3);
          scrut2 = locateCycle(tsp1, t, tmp1);
          if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 4) {
            let inlinedVal, scrut3;
            element0$1 = runtime.Tuple.get(scrut2, 0);
            element1$1 = runtime.Tuple.get(scrut2, 1);
            element2$1 = runtime.Tuple.get(scrut2, 2);
            element3$1 = runtime.Tuple.get(scrut2, 3);
            n1ToN2 = tsp1[distance$accessorSymbol](element2$, element2$1);
            n1ToP2 = tsp1[distance$accessorSymbol](element2$, element0$1);
            p1ToN2 = tsp1[distance$accessorSymbol](element0$, element2$1);
            p1ToP2 = tsp1[distance$accessorSymbol](element0$, element0$1);
            tmp2 = element1$ + element1$1;
            minDist0 = tmp2 + n1ToN2;
            tmp3 = element1$ + element3$1;
            tmp4 = tmp3 + n1ToP2;
            scrut3 = tmp4 < minDist0;
            if (scrut3 === true) {
              inlinedVal = globalThis.Object.freeze([
                2,
                tmp4
              ]);
            } else {
              inlinedVal = globalThis.Object.freeze([
                1,
                minDist0
              ]);
            }
            if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
              let inlinedVal1, scrut4;
              element0$2 = runtime.Tuple.get(inlinedVal, 0);
              element1$2 = runtime.Tuple.get(inlinedVal, 1);
              tmp5 = element3$ + element1$1;
              tmp6 = tmp5 + p1ToN2;
              scrut4 = tmp6 < element1$2;
              if (scrut4 === true) {
                inlinedVal1 = globalThis.Object.freeze([
                  3,
                  tmp6
                ]);
              } else {
                inlinedVal1 = globalThis.Object.freeze([
                  element0$2,
                  element1$2
                ]);
              }
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
                let inlinedVal2, scrut5;
                element0$3 = runtime.Tuple.get(inlinedVal1, 0);
                element1$3 = runtime.Tuple.get(inlinedVal1, 1);
                tmp7 = element3$ + element3$1;
                tmp8 = tmp7 + p1ToP2;
                scrut5 = tmp8 < element1$3;
                if (scrut5 === true) {
                  inlinedVal2 = globalThis.Object.freeze([
                    4,
                    tmp8
                  ]);
                } else {
                  inlinedVal2 = globalThis.Object.freeze([
                    element0$3,
                    element1$3
                  ]);
                }
                if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                  element0$4 = runtime.Tuple.get(inlinedVal2, 0);
                  switch (element0$4) {
                    case 1:
                      tsp1[reverse$accessorSymbol](element2$1);
                      tsp1[link$accessorSymbol](element0$, t);
                      tsp1[link$accessorSymbol](t, element0$1);
                      tsp1[link$accessorSymbol](element2$1, element2$);
                      return t;
                    case 2:
                      tsp1[link$accessorSymbol](element0$, t);
                      tsp1[link$accessorSymbol](t, element2$1);
                      tsp1[link$accessorSymbol](element0$1, element2$);
                      return t;
                    case 3:
                      tsp1[link$accessorSymbol](element0$1, t);
                      tsp1[link$accessorSymbol](t, element2$);
                      tsp1[link$accessorSymbol](element0$, element2$1);
                      return t;
                  }
                  tsp1[reverse$accessorSymbol](element2$);
                  tsp1[link$accessorSymbol](element2$, t);
                  tsp1[link$accessorSymbol](t, element2$1);
                  tsp1[link$accessorSymbol](element0$1, element0$);
                  return t
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
  } else if (t instanceof tsp1.NULL.class) {
    return tsp1.NULL
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp$tsp = function doit_tsp$tsp(t, sz) {
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
      let scrut1, n1ToN2, n1ToP2, p1ToN2, p1ToP2, minDist0, scrut2, element3$, element2$, element1$, element0$, element3$1, element2$1, element1$1, element0$1, tmp2, element1$2, element0$2, element1$3, element0$3, element0$4, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
      tmp = doit_tsp$tsp(arg$ND$0$, sz);
      tmp1 = doit_tsp$tsp(arg$ND$1$, sz);
      if (tmp instanceof tsp1.ND.class) {
        scrut1 = locateCycle(tsp1, t, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 4) {
          element0$ = runtime.Tuple.get(scrut1, 0);
          element1$ = runtime.Tuple.get(scrut1, 1);
          element2$ = runtime.Tuple.get(scrut1, 2);
          element3$ = runtime.Tuple.get(scrut1, 3);
          scrut2 = locateCycle(tsp1, t, tmp1);
          if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 4) {
            let inlinedVal, scrut3;
            element0$1 = runtime.Tuple.get(scrut2, 0);
            element1$1 = runtime.Tuple.get(scrut2, 1);
            element2$1 = runtime.Tuple.get(scrut2, 2);
            element3$1 = runtime.Tuple.get(scrut2, 3);
            n1ToN2 = tsp1[distance$accessorSymbol](element2$, element2$1);
            n1ToP2 = tsp1[distance$accessorSymbol](element2$, element0$1);
            p1ToN2 = tsp1[distance$accessorSymbol](element0$, element2$1);
            p1ToP2 = tsp1[distance$accessorSymbol](element0$, element0$1);
            tmp2 = element1$ + element1$1;
            minDist0 = tmp2 + n1ToN2;
            tmp3 = element1$ + element3$1;
            tmp4 = tmp3 + n1ToP2;
            scrut3 = tmp4 < minDist0;
            if (scrut3 === true) {
              inlinedVal = globalThis.Object.freeze([
                2,
                tmp4
              ]);
            } else {
              inlinedVal = globalThis.Object.freeze([
                1,
                minDist0
              ]);
            }
            if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
              let inlinedVal1, scrut4;
              element0$2 = runtime.Tuple.get(inlinedVal, 0);
              element1$2 = runtime.Tuple.get(inlinedVal, 1);
              tmp5 = element3$ + element1$1;
              tmp6 = tmp5 + p1ToN2;
              scrut4 = tmp6 < element1$2;
              if (scrut4 === true) {
                inlinedVal1 = globalThis.Object.freeze([
                  3,
                  tmp6
                ]);
              } else {
                inlinedVal1 = globalThis.Object.freeze([
                  element0$2,
                  element1$2
                ]);
              }
              if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
                let inlinedVal2, scrut5;
                element0$3 = runtime.Tuple.get(inlinedVal1, 0);
                element1$3 = runtime.Tuple.get(inlinedVal1, 1);
                tmp7 = element3$ + element3$1;
                tmp8 = tmp7 + p1ToP2;
                scrut5 = tmp8 < element1$3;
                if (scrut5 === true) {
                  inlinedVal2 = globalThis.Object.freeze([
                    4,
                    tmp8
                  ]);
                } else {
                  inlinedVal2 = globalThis.Object.freeze([
                    element0$3,
                    element1$3
                  ]);
                }
                if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                  element0$4 = runtime.Tuple.get(inlinedVal2, 0);
                  switch (element0$4) {
                    case 1:
                      tsp1[reverse$accessorSymbol](element2$1);
                      tsp1[link$accessorSymbol](element0$, t);
                      tsp1[link$accessorSymbol](t, element0$1);
                      tsp1[link$accessorSymbol](element2$1, element2$);
                      return t;
                    case 2:
                      tsp1[link$accessorSymbol](element0$, t);
                      tsp1[link$accessorSymbol](t, element2$1);
                      tsp1[link$accessorSymbol](element0$1, element2$);
                      return t;
                    case 3:
                      tsp1[link$accessorSymbol](element0$1, t);
                      tsp1[link$accessorSymbol](t, element2$);
                      tsp1[link$accessorSymbol](element0$, element2$1);
                      return t;
                  }
                  tsp1[reverse$accessorSymbol](element2$);
                  tsp1[link$accessorSymbol](element2$, t);
                  tsp1[link$accessorSymbol](t, element2$1);
                  tsp1[link$accessorSymbol](element0$1, element0$);
                  return t
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
  } else if (t instanceof tsp1.NULL.class) {
    return tsp1.NULL
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
build_mkTree_mkTree = function build_mkTree_mkTree(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
    switch (id) {
      case 0:
        {
          let scrut, tmp, tmp1, tmp2, tmp3;
          scrut = param2 == 0;
          if (scrut === true) {
            return param0.NULL
          }
          if (param3 instanceof param0.X_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param7 - param5;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param5 + tmp25;
            tmp = build_mkTree_mkTree(1, param0, param1, param2, param4, param6, param5, inlinedVal2, undefined);
            tmp1 = build_mkTree_mkTree(1, param0, param1, param2, param4, param6, inlinedVal2, param7, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param6 - param4;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param4 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp, tmp1, inlinedVal, inlinedVal2, param2, tmp4, tmp5)
          } else if (param3 instanceof param0.Y_AXIS.class) {
            let tmp4, tmp5, inlinedVal, tmp6, tmp7, tmp8, inlinedVal1, scale, inlinedVal2, scrut1, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, inlinedVal3, scale1;
            tmp26 = runtime.safeCall(param1());
            scale1 = 1.0 / 2147483647.0;
            inlinedVal3 = scale1 * tmp26;
            scrut1 = inlinedVal3 > 0.5;
            if (scrut1 === true) {
              let inlinedVal4;
              tmp9 = 162754.79141900392083592475 - 1.0;
              tmp10 = 2.0 * tmp9;
              tmp11 = inlinedVal3 - 0.5;
              tmp12 = tmp10 * tmp11;
              tmp13 = tmp12 / 162754.79141900392083592475;
              tmp14 = 1.0 - tmp13;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp14));
              tmp15 = inlinedVal4 / 12.0;
            } else {
              let inlinedVal4;
              tmp16 = 162754.79141900392083592475 - 1.0;
              tmp17 = 2.0 * tmp16;
              tmp18 = tmp17 * inlinedVal3;
              tmp19 = tmp18 / 162754.79141900392083592475;
              tmp20 = 1.0 - tmp19;
              inlinedVal4 = runtime.safeCall(globalThis.Math.log(tmp20));
              tmp21 = inlinedVal4 / 12.0;
              tmp15 = - tmp21;
            }
            tmp22 = tmp15 + 1.0;
            tmp23 = param6 - param4;
            tmp24 = tmp22 * tmp23;
            tmp25 = tmp24 / 2.0;
            inlinedVal2 = param4 + tmp25;
            tmp2 = build_mkTree_mkTree(2, param0, param1, param2, param5, param7, param4, inlinedVal2, undefined);
            tmp3 = build_mkTree_mkTree(2, param0, param1, param2, param5, param7, inlinedVal2, param6, undefined);
            tmp8 = runtime.safeCall(param1());
            scale = 1.0 / 2147483647.0;
            inlinedVal1 = scale * tmp8;
            tmp6 = param7 - param5;
            tmp7 = inlinedVal1 * tmp6;
            inlinedVal = param5 + tmp7;
            tmp4 = new param0.Ref.class(param0.NULL);
            tmp5 = new param0.Ref.class(param0.NULL);
            return param0.ND(tmp2, tmp3, inlinedVal2, inlinedVal, param2, tmp4, tmp5)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      case 1:
        {
          let param6_tmp, param5_tmp, param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param6_tmp = param6;
          param5_tmp = param5;
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.Y_AXIS;
          param4 = param3_tmp;
          param5 = param4_tmp;
          param6 = param5_tmp;
          param7 = param6_tmp;
          id = 0;
          continue loopLabel;
        }
      case 2:
        {
          let param4_tmp, param3_tmp, inlinedVal, tmp;
          tmp = param2 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          param4_tmp = param4;
          param3_tmp = param3;
          param2 = inlinedVal;
          param3 = param0.X_AXIS;
          param4 = param5;
          param5 = param6;
          param6 = param3_tmp;
          param7 = param4_tmp;
          id = 0;
          continue loopLabel;
        }
    }
  }
};
locateCycle = function locateCycle(tsp2, t, start) {
  let prev, next, minToNext, minToPrev, tToNext, tToPrev, scrut, arg$ND$6$, element1$, element0$, arg$ND$5$, arg$ND$6$1, tmp, tmp1, tmp2;
  if (start instanceof tsp2.ND.class) {
    let tsp3, t1, start1, min, minDist, tmp3, inlinedVal;
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    tsp3 = tsp2;
    t1 = t;
    start1 = start;
    min = start;
    minDist = tmp;
    tmp3 = arg$ND$6$.value;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, test, scrut2, arg$ND$6$2;
        if (tmp3 instanceof tsp3.ND.class) {
          arg$ND$6$2 = tmp3.next;
          scrut1 = tsp3[sameNd$accessorSymbol](start1, tmp3);
          if (scrut1 === true) {
            inlinedVal = globalThis.Object.freeze([
              min,
              minDist
            ]);
            break inlinedLbl
          }
          test = tsp3[distance$accessorSymbol](t1, tmp3);
          scrut2 = test < minDist;
          if (scrut2 === true) {
            min = tmp3;
            minDist = test;
            tmp3 = arg$ND$6$2.value;
            continue loopLabel
          }
          tmp3 = arg$ND$6$2.value;
          continue loopLabel;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
      element0$ = runtime.Tuple.get(inlinedVal, 0);
      element1$ = runtime.Tuple.get(inlinedVal, 1);
      if (element0$ instanceof tsp2.ND.class) {
        arg$ND$5$ = element0$.prev;
        arg$ND$6$1 = element0$.next;
        prev = arg$ND$5$.value;
        next = arg$ND$6$1.value;
        minToNext = tsp2[distance$accessorSymbol](element0$, next);
        minToPrev = tsp2[distance$accessorSymbol](element0$, prev);
        tToNext = tsp2[distance$accessorSymbol](t, next);
        tToPrev = tsp2[distance$accessorSymbol](t, prev);
        tmp1 = tToPrev - minToPrev;
        tmp2 = tToNext - minToNext;
        scrut = tmp1 < tmp2;
        if (scrut === true) {
          return globalThis.Object.freeze([
            prev,
            tToPrev,
            element0$,
            element1$
          ])
        }
        return globalThis.Object.freeze([
          element0$,
          element1$,
          next,
          tToNext
        ]);
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #ln(x) {
    return runtime.safeCall(globalThis.Math.log(x))
  }
  static #intDiv(a, b) {
    let tmp;
    tmp = a / b;
    return runtime.safeCall(globalThis.Math.floor(tmp))
  }
  static #intMod(a, b) {
    let tmp, tmp1;
    tmp = tsp.#intDiv(a, b);
    tmp1 = b * tmp;
    return a - tmp1
  }
  static #chk(seed) {
    let scrut, scrut1;
    scrut = seed <= 0;
    if (scrut === true) {
      return 1
    }
    scrut1 = seed > 2147483646;
    if (scrut1 === true) {
      return 2147483646
    }
    return seed;
  }
  static #random_(seed) {
    let hi, lo, test, scrut, tmp, tmp1;
    hi = tsp.#intDiv(seed, 44488);
    lo = tsp.#intMod(seed, 44488);
    tmp = 48271 * lo;
    tmp1 = 3399 * hi;
    test = tmp - tmp1;
    scrut = test > 0;
    if (scrut === true) {
      return test
    }
    return test + 2147483647;
  }
  static #mkRandom(seed) {
    let seedRef, tmp;
    tmp = tsp.#chk(seed);
    seedRef = new tsp.Ref.class(tmp);
    return mkRandom_lambda$$lambda$(seedRef)
  }
  static #norm(s) {
    let scale;
    scale = 1.0 / 2147483647.0;
    return scale * s
  }
  static #mkNode(l, r, x, y, sz) {
    let tmp, tmp1;
    tmp = new tsp.Ref.class(tsp.NULL);
    tmp1 = new tsp.Ref.class(tsp.NULL);
    return tsp.ND(l, r, x, y, sz, tmp, tmp1)
  }
  static #buildTree(n, dir, min_x, min_y, max_x, max_y) {
    let rand, seedRef, inlinedVal;
    if (false === true) {
      inlinedVal = 1;
    } else if (false === true) {
      inlinedVal = 2147483646;
    } else {
      inlinedVal = 314;
    }
    seedRef = new tsp1.Ref.class(inlinedVal);
    rand = buildTree_mkRandom_lambda$$lambda$(seedRef);
    return buildTree_build_mkTree_mkTree$build_mkTree_mkTree(0, tsp, rand, n, dir, min_x, min_y, max_x, max_y)
  }
  static #setPrev(nd, x) {
    let arg$ND$5$;
    if (nd instanceof tsp.ND.class) {
      arg$ND$5$ = nd.prev;
      arg$ND$5$.value = x;
      return runtime.Unit
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
  static #merge(a, b, t) {
    let scrut, n1ToN2, n1ToP2, p1ToN2, p1ToP2, minDist0, scrut1, element3$, element2$, element1$, element0$, element3$1, element2$1, element1$1, element0$1, tmp, element1$2, element0$2, element1$3, element0$3, element0$4, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (a instanceof tsp.ND.class) {
      scrut = locateCycle(tsp, t, a);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 4) {
        element0$ = runtime.Tuple.get(scrut, 0);
        element1$ = runtime.Tuple.get(scrut, 1);
        element2$ = runtime.Tuple.get(scrut, 2);
        element3$ = runtime.Tuple.get(scrut, 3);
        scrut1 = locateCycle(tsp, t, b);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 4) {
          let inlinedVal, scrut2;
          element0$1 = runtime.Tuple.get(scrut1, 0);
          element1$1 = runtime.Tuple.get(scrut1, 1);
          element2$1 = runtime.Tuple.get(scrut1, 2);
          element3$1 = runtime.Tuple.get(scrut1, 3);
          n1ToN2 = tsp.#distance(element2$, element2$1);
          n1ToP2 = tsp.#distance(element2$, element0$1);
          p1ToN2 = tsp.#distance(element0$, element2$1);
          p1ToP2 = tsp.#distance(element0$, element0$1);
          tmp = element1$ + element1$1;
          minDist0 = tmp + n1ToN2;
          tmp1 = element1$ + element3$1;
          tmp2 = tmp1 + n1ToP2;
          scrut2 = tmp2 < minDist0;
          if (scrut2 === true) {
            inlinedVal = globalThis.Object.freeze([
              2,
              tmp2
            ]);
          } else {
            inlinedVal = globalThis.Object.freeze([
              1,
              minDist0
            ]);
          }
          if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
            let inlinedVal1, scrut3;
            element0$2 = runtime.Tuple.get(inlinedVal, 0);
            element1$2 = runtime.Tuple.get(inlinedVal, 1);
            tmp3 = element3$ + element1$1;
            tmp4 = tmp3 + p1ToN2;
            scrut3 = tmp4 < element1$2;
            if (scrut3 === true) {
              inlinedVal1 = globalThis.Object.freeze([
                3,
                tmp4
              ]);
            } else {
              inlinedVal1 = globalThis.Object.freeze([
                element0$2,
                element1$2
              ]);
            }
            if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
              let inlinedVal2, scrut4;
              element0$3 = runtime.Tuple.get(inlinedVal1, 0);
              element1$3 = runtime.Tuple.get(inlinedVal1, 1);
              tmp5 = element3$ + element3$1;
              tmp6 = tmp5 + p1ToP2;
              scrut4 = tmp6 < element1$3;
              if (scrut4 === true) {
                inlinedVal2 = globalThis.Object.freeze([
                  4,
                  tmp6
                ]);
              } else {
                inlinedVal2 = globalThis.Object.freeze([
                  element0$3,
                  element1$3
                ]);
              }
              if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                element0$4 = runtime.Tuple.get(inlinedVal2, 0);
                switch (element0$4) {
                  case 1:
                    tsp.#reverse(element2$1);
                    tsp.#link(element0$, t);
                    tsp.#link(t, element0$1);
                    tsp.#link(element2$1, element2$);
                    return t;
                  case 2:
                    tsp.#link(element0$, t);
                    tsp.#link(t, element2$1);
                    tsp.#link(element0$1, element2$);
                    return t;
                  case 3:
                    tsp.#link(element0$1, t);
                    tsp.#link(t, element2$);
                    tsp.#link(element0$, element2$1);
                    return t;
                }
                tsp.#reverse(element2$);
                tsp.#link(element2$, t);
                tsp.#link(t, element2$1);
                tsp.#link(element0$1, element0$);
                return t
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
  static #tsp(t, sz) {
    let scrut, arg$ND$0$, arg$ND$1$, arg$ND$4$, tmp, tmp1;
    if (t instanceof tsp.ND.class) {
      arg$ND$0$ = t.left;
      arg$ND$1$ = t.right;
      arg$ND$4$ = t.sz;
      scrut = arg$ND$4$ <= sz;
      if (scrut === true) {
        return tsp.#conquer(t)
      }
      {
        let scrut1, n1ToN2, n1ToP2, p1ToN2, p1ToP2, minDist0, scrut2, element3$, element2$, element1$, element0$, element3$1, element2$1, element1$1, element0$1, tmp2, element1$2, element0$2, element1$3, element0$3, element0$4, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
        tmp = tsp.#tsp(arg$ND$0$, sz);
        tmp1 = tsp.#tsp(arg$ND$1$, sz);
        if (tmp instanceof tsp1.ND.class) {
          scrut1 = locateCycle(tsp1, t, tmp);
          if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 4) {
            element0$ = runtime.Tuple.get(scrut1, 0);
            element1$ = runtime.Tuple.get(scrut1, 1);
            element2$ = runtime.Tuple.get(scrut1, 2);
            element3$ = runtime.Tuple.get(scrut1, 3);
            scrut2 = locateCycle(tsp1, t, tmp1);
            if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 4) {
              let inlinedVal, scrut3;
              element0$1 = runtime.Tuple.get(scrut2, 0);
              element1$1 = runtime.Tuple.get(scrut2, 1);
              element2$1 = runtime.Tuple.get(scrut2, 2);
              element3$1 = runtime.Tuple.get(scrut2, 3);
              n1ToN2 = tsp1.#distance(element2$, element2$1);
              n1ToP2 = tsp1.#distance(element2$, element0$1);
              p1ToN2 = tsp1.#distance(element0$, element2$1);
              p1ToP2 = tsp1.#distance(element0$, element0$1);
              tmp2 = element1$ + element1$1;
              minDist0 = tmp2 + n1ToN2;
              tmp3 = element1$ + element3$1;
              tmp4 = tmp3 + n1ToP2;
              scrut3 = tmp4 < minDist0;
              if (scrut3 === true) {
                inlinedVal = globalThis.Object.freeze([
                  2,
                  tmp4
                ]);
              } else {
                inlinedVal = globalThis.Object.freeze([
                  1,
                  minDist0
                ]);
              }
              if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 2) {
                let inlinedVal1, scrut4;
                element0$2 = runtime.Tuple.get(inlinedVal, 0);
                element1$2 = runtime.Tuple.get(inlinedVal, 1);
                tmp5 = element3$ + element1$1;
                tmp6 = tmp5 + p1ToN2;
                scrut4 = tmp6 < element1$2;
                if (scrut4 === true) {
                  inlinedVal1 = globalThis.Object.freeze([
                    3,
                    tmp6
                  ]);
                } else {
                  inlinedVal1 = globalThis.Object.freeze([
                    element0$2,
                    element1$2
                  ]);
                }
                if (runtime.Tuple.isArrayLike(inlinedVal1) && inlinedVal1.length === 2) {
                  let inlinedVal2, scrut5;
                  element0$3 = runtime.Tuple.get(inlinedVal1, 0);
                  element1$3 = runtime.Tuple.get(inlinedVal1, 1);
                  tmp7 = element3$ + element3$1;
                  tmp8 = tmp7 + p1ToP2;
                  scrut5 = tmp8 < element1$3;
                  if (scrut5 === true) {
                    inlinedVal2 = globalThis.Object.freeze([
                      4,
                      tmp8
                    ]);
                  } else {
                    inlinedVal2 = globalThis.Object.freeze([
                      element0$3,
                      element1$3
                    ]);
                  }
                  if (runtime.Tuple.isArrayLike(inlinedVal2) && inlinedVal2.length === 2) {
                    element0$4 = runtime.Tuple.get(inlinedVal2, 0);
                    switch (element0$4) {
                      case 1:
                        tsp1.#reverse(element2$1);
                        tsp1.#link(element0$, t);
                        tsp1.#link(t, element0$1);
                        tsp1.#link(element2$1, element2$);
                        return t;
                      case 2:
                        tsp1.#link(element0$, t);
                        tsp1.#link(t, element2$1);
                        tsp1.#link(element0$1, element2$);
                        return t;
                      case 3:
                        tsp1.#link(element0$1, t);
                        tsp1.#link(t, element2$);
                        tsp1.#link(element0$, element2$1);
                        return t;
                    }
                    tsp1.#reverse(element2$);
                    tsp1.#link(element2$, t);
                    tsp1.#link(t, element2$1);
                    tsp1.#link(element0$1, element0$);
                    return t
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
    } else if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mkTree(n) {
    let dir, rand, seedRef, inlinedVal;
    dir = tsp.X_AXIS;
    if (false === true) {
      inlinedVal = 1;
    } else if (false === true) {
      inlinedVal = 2147483646;
    } else {
      inlinedVal = 314;
    }
    seedRef = new tsp1.Ref.class(inlinedVal);
    rand = mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef);
    return mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(0, tsp1, rand, n, dir, 0.0, 1.0, 0.0, 1.0)
  }
  static #doit(n, divideSz) {
    let dir, inlinedVal, rand, seedRef, inlinedVal1;
    dir = tsp1.X_AXIS;
    if (false === true) {
      inlinedVal1 = 1;
    } else if (false === true) {
      inlinedVal1 = 2147483646;
    } else {
      inlinedVal1 = 314;
    }
    seedRef = new tsp1.Ref.class(inlinedVal1);
    rand = doit_mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef);
    inlinedVal = doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(0, tsp1, rand, n, dir, 0.0, 1.0, 0.0, 1.0);
    return doit_tsp$tsp(inlinedVal, divideSz)
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
    let inlinedVal, dir, inlinedVal1, rand, seedRef, inlinedVal2;
    dir = tsp1.X_AXIS;
    if (false === true) {
      inlinedVal2 = 1;
    } else if (false === true) {
      inlinedVal2 = 2147483646;
    } else {
      inlinedVal2 = 314;
    }
    seedRef = new tsp1.Ref.class(inlinedVal2);
    rand = main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$(seedRef);
    inlinedVal1 = main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree(0, tsp1, rand, 255, dir, 0.0, 1.0, 0.0, 1.0);
    inlinedVal = main_doit_tsp$tsp(inlinedVal1, 150);
    return tsp.#tourLength(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tsp"];
});
export { locateCycle as _$_modulePrivate_$_locateCycle };
export { tsp1 as _$_modulePrivate_$_tsp };
export { build_mkTree_mkTree as _$_modulePrivate_$_build_mkTree_mkTree };
export { main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree as _$_modulePrivate_$_main_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree };
export { main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda };
export { main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$ as _$_modulePrivate_$_main_doit_mkTree_buildTree_mkRandom_lambda$$lambda$ };
export { doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda as _$_modulePrivate_$_doit_mkTree_buildTree_mkRandom_lambda$_lambda$lambda };
export { doit_mkTree_buildTree_mkRandom_lambda$$lambda$ as _$_modulePrivate_$_doit_mkTree_buildTree_mkRandom_lambda$$lambda$ };
export { doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree as _$_modulePrivate_$_doit_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree };
export { mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree as _$_modulePrivate_$_mkTree_buildTree_build_mkTree_mkTree$build_mkTree_mkTree };
export { mkTree_buildTree_mkRandom_lambda$_lambda$lambda as _$_modulePrivate_$_mkTree_buildTree_mkRandom_lambda$_lambda$lambda };
export { mkTree_buildTree_mkRandom_lambda$$lambda$ as _$_modulePrivate_$_mkTree_buildTree_mkRandom_lambda$$lambda$ };
export { buildTree_mkRandom_lambda$_lambda$lambda as _$_modulePrivate_$_buildTree_mkRandom_lambda$_lambda$lambda };
export { buildTree_mkRandom_lambda$$lambda$ as _$_modulePrivate_$_buildTree_mkRandom_lambda$$lambda$ };
export { buildTree_build_mkTree_mkTree$build_mkTree_mkTree as _$_modulePrivate_$_buildTree_build_mkTree_mkTree$build_mkTree_mkTree };
export { mkRandom_lambda$_lambda$lambda as _$_modulePrivate_$_mkRandom_lambda$_lambda$lambda };
export { mkRandom_lambda$$lambda$ as _$_modulePrivate_$_mkRandom_lambda$$lambda$ };
export { main_doit_tsp$tsp as _$_modulePrivate_$_main_doit_tsp$tsp };
export { doit_tsp$tsp as _$_modulePrivate_$_doit_tsp$tsp };
export default tsp1;
