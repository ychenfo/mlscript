const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const link$accessorSymbol = globalThis.Symbol("link");
const sameNd$accessorSymbol = globalThis.Symbol("sameNd");
const distance$accessorSymbol = globalThis.Symbol("distance");
const reverse$accessorSymbol = globalThis.Symbol("reverse");
const conquer$accessorSymbol = globalThis.Symbol("conquer");
let mkTree, mkTree1, uniform, median, build, drand48, rev, findMinDist, loop, findMin, choose, locateCycle, length, dist, cycle, tsp1, lambda, lambda$, main_doit_tsp_merge_choose$choose, main_doit_tsp_merge$merge, main_doit_tsp$tsp, main_doit$doit, main_doit_tsp_merge_choose$choose1, main_doit_tsp_merge_choose$choose2, main_doit_tsp_merge_locateCycle_findMin$findMin, main_doit_tsp_merge_locateCycle$locateCycle, main_doit_tsp_merge_locateCycle_findMin$findMin1, main_doit_tsp_merge_locateCycle$locateCycle1, main_doit_mkTree_buildTree_build$mkTree, main_doit_mkTree_buildTree_build$build, main_doit_mkTree_buildTree_build$mkTree1, main_doit_mkTree_buildTree$buildTree, main_doit_mkTree$mkTree, doit_mkTree_buildTree_build$mkTree, doit_mkTree_buildTree_build$build, doit_mkTree_buildTree_build$mkTree1, doit_mkTree_buildTree$buildTree, doit_mkTree$mkTree, doit_tsp_merge_locateCycle_findMin$findMin, doit_tsp_merge_locateCycle$locateCycle, doit_tsp_merge$merge, doit_tsp$tsp, doit_tsp_merge_locateCycle_findMin$findMin1, doit_tsp_merge_locateCycle$locateCycle1, doit_tsp_merge_choose$choose, doit_tsp_merge_choose$choose1, doit_tsp_merge_choose$choose2, mkTree_buildTree_build$mkTree, mkTree_buildTree_build$build, mkTree_buildTree_build$mkTree1, mkTree_buildTree$buildTree, tsp_merge_choose$choose, tsp_merge$merge, tsp_merge_choose$choose1, tsp_merge_choose$choose2, tsp_merge_locateCycle_findMin$findMin, tsp_merge_locateCycle$locateCycle, tsp_merge_locateCycle_findMin$findMin1, tsp_merge_locateCycle$locateCycle1, merge_locateCycle_findMin$findMin, merge_locateCycle$locateCycle, merge_locateCycle_findMin$findMin1, merge_locateCycle$locateCycle1, merge_choose$choose, merge_choose$choose1, merge_choose$choose2, mkTree$mkTree, mkTree$build, mkTree$build1, mkTree$mkTree1, locateCycle_findMin$findMin, main_doit_tsp_merge$scrut_tup2, main_doit_tsp_merge$scrut_rest, main_doit_tsp_merge$scrut_rest1, main_doit_tsp_merge$scrut_rest2, main_doit_tsp_merge$scrut_rest3, main_doit_tsp_merge$scrut_rest4, main_doit_tsp_merge$a_rest, main_doit_tsp_merge$scrut_tup21, main_doit_tsp_merge$scrut_tup22, main_doit_tsp_merge_locateCycle$scrut_tup2, main_doit_tsp_merge_locateCycle$scrut_rest, main_doit_tsp_merge_locateCycle$start_rest, main_doit_tsp_merge$scrut_tup4, main_doit_tsp_merge_locateCycle$scrut_tup21, main_doit_tsp_merge_locateCycle$scrut_rest1, main_doit_tsp_merge_locateCycle$start_rest1, main_doit_tsp_merge$scrut_tup41, main_doit_mkTree_buildTree_build$dir_Y_AXIS, main_doit_mkTree_buildTree_build$dir_rest, main_doit_mkTree_buildTree_build$scrut_rest, main_doit_mkTree_buildTree_build$dir_X_AXIS, doit_mkTree_buildTree_build$dir_X_AXIS, doit_mkTree_buildTree_build$dir_rest, doit_mkTree_buildTree_build$scrut_rest, doit_mkTree_buildTree_build$dir_Y_AXIS, doit_tsp_merge_locateCycle$scrut_tup2, doit_tsp_merge_locateCycle$scrut_rest, doit_tsp_merge_locateCycle$start_rest, doit_tsp_merge$scrut_tup4, doit_tsp_merge$scrut_rest, doit_tsp_merge$a_rest, doit_tsp_merge_locateCycle$scrut_tup21, doit_tsp_merge_locateCycle$scrut_rest1, doit_tsp_merge_locateCycle$start_rest1, doit_tsp_merge$scrut_tup41, doit_tsp_merge$scrut_rest1, doit_tsp_merge$scrut_tup2, doit_tsp_merge$scrut_rest2, doit_tsp_merge$scrut_tup21, doit_tsp_merge$scrut_rest3, doit_tsp_merge$scrut_tup22, doit_tsp_merge$scrut_rest4, mkTree_buildTree_build$dir_Y_AXIS, mkTree_buildTree_build$dir_rest, mkTree_buildTree_build$scrut_rest, mkTree_buildTree_build$dir_X_AXIS, tsp_merge$scrut_tup2, tsp_merge$scrut_rest, tsp_merge$scrut_rest1, tsp_merge$scrut_rest2, tsp_merge$scrut_rest3, tsp_merge$scrut_rest4, tsp_merge$a_rest, tsp_merge$scrut_tup21, tsp_merge$scrut_tup22, tsp_merge_locateCycle$scrut_tup2, tsp_merge_locateCycle$scrut_rest, tsp_merge_locateCycle$start_rest, tsp_merge$scrut_tup4, tsp_merge_locateCycle$scrut_tup21, tsp_merge_locateCycle$scrut_rest1, tsp_merge_locateCycle$start_rest1, tsp_merge$scrut_tup41, merge_locateCycle$scrut_tup2, merge_locateCycle$scrut_rest, merge_locateCycle$start_rest, merge$scrut_tup4, merge$scrut_rest, merge$a_rest, merge_locateCycle$scrut_tup21, merge_locateCycle$scrut_rest1, merge_locateCycle$start_rest1, merge$scrut_tup41, merge$scrut_rest1, merge$scrut_tup2, merge$scrut_rest2, merge$scrut_tup21, merge$scrut_rest3, merge$scrut_tup22, merge$scrut_rest4, mkTree$dir_Y_AXIS, mkTree$dir_rest, mkTree$scrut_rest, mkTree$dir_X_AXIS, mkTree$dir_Y_AXIS1, mkTree$dir_rest1, mkTree$scrut_rest1, mkTree$dir_X_AXIS1, locateCycle$scrut_tup2, locateCycle$scrut_rest, locateCycle$start_rest, locateCycle$scrut_tup2$worker, mkTree$dir_X_AXIS$worker, mkTree$dir_Y_AXIS$worker, merge$scrut_tup2$worker, merge$scrut_tup2$worker1, merge$scrut_tup2$worker2, merge$scrut_tup4$worker, merge_locateCycle$scrut_tup2$worker, merge$scrut_tup4$worker1, merge_locateCycle$scrut_tup2$worker1, tsp_merge$scrut_tup4$worker, tsp_merge_locateCycle$scrut_tup2$worker, tsp_merge$scrut_tup4$worker1, tsp_merge_locateCycle$scrut_tup2$worker1, tsp_merge$scrut_tup2$worker, tsp_merge$scrut_tup2$worker1, tsp_merge$scrut_tup2$worker2, mkTree_buildTree_build$dir_X_AXIS$worker, doit_tsp_merge$scrut_tup2$worker, doit_tsp_merge$scrut_tup2$worker1, doit_tsp_merge$scrut_tup2$worker2, doit_tsp_merge$scrut_tup4$worker, doit_tsp_merge_locateCycle$scrut_tup2$worker, doit_tsp_merge$scrut_tup4$worker1, doit_tsp_merge_locateCycle$scrut_tup2$worker1, main_doit_tsp_merge$scrut_tup4$worker, main_doit_tsp_merge_locateCycle$scrut_tup2$worker, main_doit_tsp_merge$scrut_tup4$worker1, main_doit_tsp_merge_locateCycle$scrut_tup2$worker1, main_doit_tsp_merge$scrut_tup2$worker, main_doit_tsp_merge$scrut_tup2$worker1, main_doit_tsp_merge$scrut_tup2$worker2, mkTree_mkTree$dir_X_AXIS$worker, mkTree_mkTree$dir_Y_AXIS$worker, mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker, doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker, main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker;
mkTree_mkTree$dir_X_AXIS$worker = function mkTree_mkTree$dir_X_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
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
            let param4_tmp;
            param4_tmp = param4;
            param2 = param5;
            param4 = inlinedVal;
            param5 = param6;
            param6 = param4_tmp;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let inlinedVal, scrut, tmp, inlinedVal1, scrut1, tmp1;
          param7 = median(param1, param5, param6);
          tmp1 = param4 / 2;
          inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
          scrut1 = inlinedVal1 == 0;
          if (scrut1 !== true) {
            let fv_med;
            fv_med = median(param1, param2, param5);
            mkTree_mkTree$dir_X_AXIS$worker(0, param0, param1, inlinedVal1, param3, param7, param2, fv_med, undefined);
            mkTree_mkTree$dir_X_AXIS$worker(0, param0, param1, inlinedVal1, param3, param7, fv_med, param5, undefined);
            runtime.safeCall(param1());
          }
          tmp = param4 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          scrut = inlinedVal == 0;
          if (scrut !== true) {
            let fv_med;
            fv_med = median(param1, param2, param7);
            mkTree_mkTree$dir_X_AXIS$worker(0, param0, param1, inlinedVal, param3, param6, param2, fv_med, undefined);
            mkTree_mkTree$dir_X_AXIS$worker(0, param0, param1, inlinedVal, param3, param6, fv_med, param7, undefined);
            runtime.safeCall(param1());
          }
          runtime.safeCall(param1());
          return runtime.Unit;
        }
    }
  }
};
mkTree_mkTree$dir_Y_AXIS$worker = function mkTree_mkTree$dir_Y_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
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
            let param6_tmp, param4_tmp, param1_tmp, param0_tmp;
            param6_tmp = param6;
            param4_tmp = param4;
            param1_tmp = param1;
            param0_tmp = param0;
            param0 = undefined;
            param1 = param0_tmp;
            param2 = param1_tmp;
            param4 = param5;
            param5 = inlinedVal;
            param6 = param4_tmp;
            param7 = param6_tmp;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let inlinedVal, scrut, tmp, inlinedVal1, scrut1, tmp1;
          param0 = median(param2, param3, param4);
          tmp1 = param5 / 2;
          inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
          scrut1 = inlinedVal1 == 0;
          if (scrut1 !== true) {
            let fv_med;
            fv_med = median(param2, param0, param7);
            mkTree_mkTree$dir_Y_AXIS$worker(0, param1, param2, inlinedVal1, param3, param6, param0, fv_med, undefined);
            mkTree_mkTree$dir_Y_AXIS$worker(0, param1, param2, inlinedVal1, param3, param6, fv_med, param7, undefined);
            runtime.safeCall(param2());
          }
          tmp = param5 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          scrut = inlinedVal == 0;
          if (scrut !== true) {
            let fv_med;
            fv_med = median(param2, param4, param7);
            mkTree_mkTree$dir_Y_AXIS$worker(0, param1, param2, inlinedVal, param0, param6, param4, fv_med, undefined);
            mkTree_mkTree$dir_Y_AXIS$worker(0, param1, param2, inlinedVal, param0, param6, fv_med, param7, undefined);
            runtime.safeCall(param2());
          }
          runtime.safeCall(param2());
          return runtime.Unit;
        }
    }
  }
};
mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker = function mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7) {
  loopLabel: while (true) {
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
            let param6_tmp, param4_tmp, param1_tmp, param0_tmp;
            param6_tmp = param6;
            param4_tmp = param4;
            param1_tmp = param1;
            param0_tmp = param0;
            param0 = undefined;
            param1 = param0_tmp;
            param2 = param1_tmp;
            param4 = param5;
            param5 = inlinedVal;
            param6 = param4_tmp;
            param7 = param6_tmp;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let inlinedVal, scrut, tmp, inlinedVal1, scrut1, tmp1;
          param0 = median(param2, param3, param4);
          tmp1 = param5 / 2;
          inlinedVal1 = runtime.safeCall(globalThis.Math.floor(tmp1));
          scrut1 = inlinedVal1 == 0;
          if (scrut1 !== true) {
            let fv_med;
            fv_med = median(param2, param0, param7);
            mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param1, param2, inlinedVal1, param3, param6, param0, fv_med, undefined);
            mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param1, param2, inlinedVal1, param3, param6, fv_med, param7, undefined);
            runtime.safeCall(param2());
          }
          tmp = param5 / 2;
          inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
          scrut = inlinedVal == 0;
          if (scrut !== true) {
            let fv_med;
            fv_med = median(param2, param4, param7);
            mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param1, param2, inlinedVal, param0, param6, param4, fv_med, undefined);
            mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param1, param2, inlinedVal, param0, param6, fv_med, param7, undefined);
            runtime.safeCall(param2());
          }
          runtime.safeCall(param2());
          return runtime.Unit;
        }
    }
  }
};
doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker = function doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  loopLabel: while (true) {
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
            let param5_tmp, param3_tmp;
            param5_tmp = param5;
            param3_tmp = param3;
            param2 = param4;
            param3 = param6;
            param4 = inlinedVal;
            param5 = param3_tmp;
            param6 = param5_tmp;
            param7 = undefined;
            id = 1;
            continue loopLabel;
          }
        }
      case 1:
        {
          let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, inlinedVal1, scale, inlinedVal2, inlinedVal3, inlinedVal4, scrut, tmp5, inlinedVal5, scrut1, tmp6;
          param7 = median(param1, param5, param6);
          tmp6 = param4 / 2;
          inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp6));
          scrut1 = inlinedVal5 == 0;
          if (scrut1 === true) {
            inlinedVal2 = param0.NULL;
          } else {
            let inlinedVal6;
            inlinedVal6 = doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(2, undefined, param0, param1, param7, param3, inlinedVal5, undefined, param5, param2, undefined);
            inlinedVal2 = inlinedVal6;
          }
          tmp5 = param4 / 2;
          inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp5));
          scrut = inlinedVal4 == 0;
          if (scrut === true) {
            inlinedVal3 = param0.NULL;
          } else {
            let inlinedVal6;
            inlinedVal6 = doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(2, undefined, param0, param1, param6, param3, inlinedVal4, undefined, param7, param2, undefined);
            inlinedVal3 = inlinedVal6;
          }
          tmp4 = runtime.safeCall(param1());
          scale = 1.0 / 2147483647.0;
          inlinedVal1 = scale * tmp4;
          tmp2 = param3 - param2;
          tmp3 = inlinedVal1 * tmp2;
          inlinedVal = param2 + tmp3;
          tmp = new param0.Ref.class(param0.NULL);
          tmp1 = new param0.Ref.class(param0.NULL);
          return param0.ND(inlinedVal2, inlinedVal3, param7, inlinedVal, param4, tmp, tmp1);
        }
      case 2:
        {
          let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, inlinedVal1, scale;
          param0 = median(param2, param3, param4);
          param6 = doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(0, param1, param2, param5, param7, param8, param3, param0, undefined, undefined, undefined);
          param9 = doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(0, param1, param2, param5, param7, param8, param0, param4, undefined, undefined, undefined);
          tmp4 = runtime.safeCall(param2());
          scale = 1.0 / 2147483647.0;
          inlinedVal1 = scale * tmp4;
          tmp2 = param8 - param7;
          tmp3 = inlinedVal1 * tmp2;
          inlinedVal = param7 + tmp3;
          tmp = new param1.Ref.class(param1.NULL);
          tmp1 = new param1.Ref.class(param1.NULL);
          return param1.ND(param6, param9, inlinedVal, param0, param5, tmp, tmp1);
        }
    }
  }
};
main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker = function main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(id, param0, param1, param2, param3, param4, param5, param6, param7, param8, param9) {
  loopLabel: while (true) {
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
            let param6_tmp, param4_tmp, param1_tmp, param0_tmp;
            param6_tmp = param6;
            param4_tmp = param4;
            param1_tmp = param1;
            param0_tmp = param0;
            param0 = undefined;
            param1 = param0_tmp;
            param2 = param1_tmp;
            param4 = param5;
            param5 = inlinedVal;
            param6 = param4_tmp;
            param7 = param6_tmp;
            id = 2;
            continue loopLabel;
          }
        }
      case 1:
        {
          let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, inlinedVal1, scale;
          param7 = median(param1, param5, param6);
          param8 = main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param0, param1, param4, param2, param3, param5, param7, undefined, undefined, undefined);
          param9 = main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(0, param0, param1, param4, param2, param3, param7, param6, undefined, undefined, undefined);
          tmp4 = runtime.safeCall(param1());
          scale = 1.0 / 2147483647.0;
          inlinedVal1 = scale * tmp4;
          tmp2 = param3 - param2;
          tmp3 = inlinedVal1 * tmp2;
          inlinedVal = param2 + tmp3;
          tmp = new param0.Ref.class(param0.NULL);
          tmp1 = new param0.Ref.class(param0.NULL);
          return param0.ND(param8, param9, inlinedVal, param7, param4, tmp, tmp1);
        }
      case 2:
        {
          let tmp, tmp1, inlinedVal, tmp2, tmp3, tmp4, inlinedVal1, scale, inlinedVal2, inlinedVal3, inlinedVal4, scrut, tmp5, inlinedVal5, scrut1, tmp6;
          param0 = median(param2, param3, param4);
          tmp6 = param5 / 2;
          inlinedVal5 = runtime.safeCall(globalThis.Math.floor(tmp6));
          scrut1 = inlinedVal5 == 0;
          if (scrut1 === true) {
            inlinedVal2 = param1.NULL;
          } else {
            let inlinedVal6;
            inlinedVal6 = main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(1, param1, param2, param3, param6, inlinedVal5, param0, param7, undefined, undefined, undefined);
            inlinedVal2 = inlinedVal6;
          }
          tmp5 = param5 / 2;
          inlinedVal4 = runtime.safeCall(globalThis.Math.floor(tmp5));
          scrut = inlinedVal4 == 0;
          if (scrut === true) {
            inlinedVal3 = param1.NULL;
          } else {
            let inlinedVal6;
            inlinedVal6 = main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(1, param1, param2, param0, param6, inlinedVal4, param4, param7, undefined, undefined, undefined);
            inlinedVal3 = inlinedVal6;
          }
          tmp4 = runtime.safeCall(param2());
          scale = 1.0 / 2147483647.0;
          inlinedVal1 = scale * tmp4;
          tmp2 = param7 - param6;
          tmp3 = inlinedVal1 * tmp2;
          inlinedVal = param6 + tmp3;
          tmp = new param1.Ref.class(param1.NULL);
          tmp1 = new param1.Ref.class(param1.NULL);
          return param1.ND(inlinedVal2, inlinedVal3, param0, inlinedVal, param5, tmp, tmp1);
        }
    }
  }
};
main_doit_tsp_merge_choose$choose = function main_doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
main_doit_tsp_merge$merge = function main_doit_tsp_merge$merge(a, b, t) {
  if (a instanceof tsp1.ND.class) {
    let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
    tsp2 = tsp1;
    if (a instanceof tsp2.ND.class) {
      arg$ND$6$ = a.next;
      tmp = tsp1[distance$accessorSymbol](t, a);
      scrut = main_doit_tsp_merge_locateCycle_findMin$findMin1(tsp1, t, a, a, tmp, arg$ND$6$.value);
      inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
      return inlinedVal(t, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    tmp = main_doit_tsp$tsp(arg$ND$0$, sz);
    tmp1 = main_doit_tsp$tsp(arg$ND$1$, sz);
    return main_doit_tsp_merge$merge(tmp, tmp1, t);
  } else if (t instanceof tsp1.NULL.class) {
    return tsp1.NULL
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit$doit = function main_doit$doit(n, divideSz) {
  let inlinedVal, deforest$lam;
  deforest$lam = main_doit_mkTree_buildTree_build$dir_X_AXIS();
  inlinedVal = main_doit_mkTree_buildTree$buildTree(n, deforest$lam, 0.0, 1.0, 0.0, 1.0);
  return main_doit_tsp$tsp(inlinedVal, divideSz)
};
main_doit_tsp_merge_choose$choose1 = function main_doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
main_doit_tsp_merge_choose$choose2 = function main_doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
main_doit_tsp_merge_locateCycle_findMin$findMin = function main_doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return main_doit_tsp_merge_locateCycle$scrut_tup2(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_tsp_merge_locateCycle$locateCycle = function main_doit_tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = main_doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_tsp_merge_locateCycle_findMin$findMin1 = function main_doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return main_doit_tsp_merge_locateCycle$scrut_tup21(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_tsp_merge_locateCycle$locateCycle1 = function main_doit_tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = main_doit_tsp_merge_locateCycle_findMin$findMin1(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_mkTree_buildTree_build$build = function main_doit_mkTree_buildTree_build$build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return dir(undefined, tsp2, rand, min_x, max_x, n, undefined, min_y, max_y, undefined, undefined, undefined, undefined, undefined, undefined);
};
main_doit_mkTree_buildTree_build$mkTree = function main_doit_mkTree_buildTree_build$mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  return main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(0, tsp2, rand, n, min_x, max_x, min, max, undefined, undefined, undefined)
};
main_doit_mkTree_buildTree_build$mkTree1 = function main_doit_mkTree_buildTree_build$mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  let inlinedVal, scrut, tmp;
  tmp = n / 2;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
  scrut = inlinedVal == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(1, tsp2, rand, min, min_y, inlinedVal, max, max_y, undefined, undefined, undefined);
};
main_doit_mkTree_buildTree$buildTree = function main_doit_mkTree_buildTree$buildTree(n, dir, min_x, min_y, max_x, max_y) {
  let rand, scrut, seedRef, inlinedVal;
  if (false === true) {
    inlinedVal = 1;
  } else if (false === true) {
    inlinedVal = 2147483646;
  } else {
    inlinedVal = 314;
  }
  seedRef = new tsp1.Ref.class(inlinedVal);
  rand = lambda$(seedRef);
  scrut = n == 0;
  if (scrut === true) {
    return tsp1.NULL
  }
  return dir(tsp1, rand, min_x, max_x, n, min_y, max_y, undefined, undefined, undefined);
};
main_doit_mkTree$mkTree = function main_doit_mkTree$mkTree(n) {
  let deforest$lam;
  deforest$lam = main_doit_mkTree_buildTree_build$dir_X_AXIS();
  return main_doit_mkTree_buildTree$buildTree(n, deforest$lam, 0.0, 1.0, 0.0, 1.0)
};
doit_mkTree_buildTree_build$build = function doit_mkTree_buildTree_build$build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return dir(undefined, tsp2, rand, min_y, max_y, n, undefined, min_x, max_x, undefined, undefined, undefined, undefined, undefined, undefined);
};
doit_mkTree_buildTree_build$mkTree = function doit_mkTree_buildTree_build$mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  return doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(0, tsp2, rand, n, min_x, max_x, min, max, undefined, undefined, undefined)
};
doit_mkTree_buildTree_build$mkTree1 = function doit_mkTree_buildTree_build$mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  let inlinedVal, scrut, tmp;
  tmp = n / 2;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
  scrut = inlinedVal == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(2, undefined, tsp2, rand, max, max_y, inlinedVal, undefined, min, min_y, undefined);
};
doit_mkTree_buildTree$buildTree = function doit_mkTree_buildTree$buildTree(n, dir, min_x, min_y, max_x, max_y) {
  let rand, scrut, seedRef, inlinedVal;
  if (false === true) {
    inlinedVal = 1;
  } else if (false === true) {
    inlinedVal = 2147483646;
  } else {
    inlinedVal = 314;
  }
  seedRef = new tsp1.Ref.class(inlinedVal);
  rand = lambda$(seedRef);
  scrut = n == 0;
  if (scrut === true) {
    return tsp1.NULL
  }
  return dir(undefined, tsp1, rand, min_y, max_y, n, undefined, min_x, max_x, undefined);
};
doit_mkTree$mkTree = function doit_mkTree$mkTree(n) {
  let deforest$lam;
  deforest$lam = doit_mkTree_buildTree_build$dir_X_AXIS();
  return doit_mkTree_buildTree$buildTree(n, deforest$lam, 0.0, 1.0, 0.0, 1.0)
};
doit_tsp_merge_locateCycle_findMin$findMin = function doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return doit_tsp_merge_locateCycle$scrut_tup2(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_tsp_merge_locateCycle$locateCycle = function doit_tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge$merge = function doit_tsp_merge$merge(a, b, t) {
  if (a instanceof tsp1.ND.class) {
    let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
    tsp2 = tsp1;
    if (a instanceof tsp2.ND.class) {
      arg$ND$6$ = a.next;
      tmp = tsp1[distance$accessorSymbol](t, a);
      scrut = doit_tsp_merge_locateCycle_findMin$findMin(tsp1, t, a, a, tmp, arg$ND$6$.value);
      inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
      return inlinedVal(t, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    tmp = doit_tsp$tsp(arg$ND$0$, sz);
    tmp1 = doit_tsp$tsp(arg$ND$1$, sz);
    return doit_tsp_merge$merge(tmp, tmp1, t);
  } else if (t instanceof tsp1.NULL.class) {
    return tsp1.NULL
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge_locateCycle_findMin$findMin1 = function doit_tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return doit_tsp_merge_locateCycle$scrut_tup21(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_tsp_merge_locateCycle$locateCycle1 = function doit_tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = doit_tsp_merge_locateCycle_findMin$findMin1(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge_choose$choose = function doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
doit_tsp_merge_choose$choose1 = function doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
doit_tsp_merge_choose$choose2 = function doit_tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
mkTree_buildTree_build$build = function mkTree_buildTree_build$build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return dir(undefined, tsp2, rand, min_x, max_x, n, undefined, min_y, max_y, undefined, undefined, undefined, undefined, undefined, undefined);
};
mkTree_buildTree_build$mkTree = function mkTree_buildTree_build$mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  return mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, tsp2, rand, n, min_x, max_x, min, max, undefined)
};
mkTree_buildTree_build$mkTree1 = function mkTree_buildTree_build$mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  let inlinedVal, scrut, tmp;
  tmp = n / 2;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
  scrut = inlinedVal == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  {
    let fv_med;
    fv_med = median(rand, max, max_y);
    mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, tsp2, rand, inlinedVal, min, min_y, max, fv_med, undefined);
    mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, tsp2, rand, inlinedVal, min, min_y, fv_med, max_y, undefined);
    runtime.safeCall(rand());
    return runtime.Unit;
  }
};
mkTree_buildTree$buildTree = function mkTree_buildTree$buildTree(n, dir, min_x, min_y, max_x, max_y) {
  let rand, scrut, seedRef, inlinedVal;
  if (false === true) {
    inlinedVal = 1;
  } else if (false === true) {
    inlinedVal = 2147483646;
  } else {
    inlinedVal = 314;
  }
  seedRef = new tsp1.Ref.class(inlinedVal);
  rand = lambda$(seedRef);
  scrut = n == 0;
  if (scrut === true) {
    return tsp1.NULL
  }
  return dir(tsp1, rand, min_x, max_x, n, min_y, max_y, undefined);
};
tsp_merge_choose$choose = function tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
tsp_merge$merge = function tsp_merge$merge(a, b, t) {
  if (a instanceof tsp1.ND.class) {
    let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
    tsp2 = tsp1;
    if (a instanceof tsp2.ND.class) {
      arg$ND$6$ = a.next;
      tmp = tsp1[distance$accessorSymbol](t, a);
      scrut = tsp_merge_locateCycle_findMin$findMin1(tsp1, t, a, a, tmp, arg$ND$6$.value);
      inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
      return inlinedVal(t, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
tsp_merge_choose$choose1 = function tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
tsp_merge_choose$choose2 = function tsp_merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
tsp_merge_locateCycle_findMin$findMin = function tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return tsp_merge_locateCycle$scrut_tup2(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
tsp_merge_locateCycle$locateCycle = function tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
tsp_merge_locateCycle_findMin$findMin1 = function tsp_merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return tsp_merge_locateCycle$scrut_tup21(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
tsp_merge_locateCycle$locateCycle1 = function tsp_merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = tsp_merge_locateCycle_findMin$findMin1(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge_locateCycle_findMin$findMin = function merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return merge_locateCycle$scrut_tup2(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
merge_locateCycle$locateCycle = function merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = merge_locateCycle_findMin$findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge_locateCycle_findMin$findMin1 = function merge_locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return merge_locateCycle$scrut_tup21(min, minDist)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
merge_locateCycle$locateCycle1 = function merge_locateCycle$locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = merge_locateCycle_findMin$findMin1(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge_choose$choose = function merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
merge_choose$choose1 = function merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
merge_choose$choose2 = function merge_choose$choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
mkTree$build = function mkTree$build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return dir(undefined, tsp2, rand, min_x, max_x, n, undefined, min_y, max_y, undefined, undefined, undefined, undefined, undefined, undefined);
};
mkTree$mkTree = function mkTree$mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  let inlinedVal, scrut, tmp;
  tmp = n / 2;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
  scrut = inlinedVal == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  {
    let fv_med;
    fv_med = median(rand, min_x, min);
    mkTree_mkTree$dir_X_AXIS$worker(0, tsp2, rand, inlinedVal, max_x, max, min_x, fv_med, undefined);
    mkTree_mkTree$dir_X_AXIS$worker(0, tsp2, rand, inlinedVal, max_x, max, fv_med, min, undefined);
    runtime.safeCall(rand());
    return runtime.Unit;
  }
};
mkTree$build1 = function mkTree$build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  return dir(undefined, tsp2, rand, min_x, max_x, n, undefined, min_y, max_y, undefined, undefined, undefined, undefined, undefined, undefined);
};
mkTree$mkTree1 = function mkTree$mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  let inlinedVal, scrut, tmp;
  tmp = n / 2;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp));
  scrut = inlinedVal == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  {
    let fv_med;
    fv_med = median(rand, max, max_y);
    mkTree_mkTree$dir_Y_AXIS$worker(0, tsp2, rand, inlinedVal, min, min_y, max, fv_med, undefined);
    mkTree_mkTree$dir_Y_AXIS$worker(0, tsp2, rand, inlinedVal, min, min_y, fv_med, max_y, undefined);
    runtime.safeCall(rand());
    return runtime.Unit;
  }
};
locateCycle_findMin$findMin = function locateCycle_findMin$findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return locateCycle$scrut_tup2(min)
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
main_doit_tsp_merge$scrut_tup2 = function main_doit_tsp_merge$scrut_tup2(tup2_0) {
  return (fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return main_doit_tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
main_doit_tsp_merge$scrut_tup2$worker2 = function main_doit_tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  switch (tup2_0) {
    case 1:
      tsp1[reverse$accessorSymbol](fv_n2);
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_p2);
      tsp1[link$accessorSymbol](fv_n2, fv_n1);
      return fv_t;
    case 2:
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n2);
      tsp1[link$accessorSymbol](fv_p2, fv_n1);
      return fv_t;
    case 3:
      tsp1[link$accessorSymbol](fv_p2, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n1);
      tsp1[link$accessorSymbol](fv_p1, fv_n2);
      return fv_t;
  }
  tsp1[reverse$accessorSymbol](fv_n1);
  tsp1[link$accessorSymbol](fv_n1, fv_t);
  tsp1[link$accessorSymbol](fv_t, fv_n2);
  tsp1[link$accessorSymbol](fv_p2, fv_p1);
  return fv_t
};
main_doit_tsp_merge$scrut_tup21 = function main_doit_tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) => {
    return main_doit_tsp_merge$scrut_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1)
  }
};
main_doit_tsp_merge$scrut_tup2$worker1 = function main_doit_tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToN2;
  fv_tmp1 = fv_tmp + fv_p1ToP2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    return main_doit_tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
  return main_doit_tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
};
main_doit_tsp_merge$scrut_tup22 = function main_doit_tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return main_doit_tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
main_doit_tsp_merge$scrut_tup2$worker = function main_doit_tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToP2;
  fv_tmp1 = fv_tmp + fv_p1ToN2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < fv_tmp1;
    if (scrut1 === true) {
      return main_doit_tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return main_doit_tsp_merge$scrut_tup2$worker2(3, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
  {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < tup2_1;
    if (scrut1 === true) {
      return main_doit_tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return main_doit_tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
};
main_doit_tsp_merge_locateCycle$scrut_tup2 = function main_doit_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return main_doit_tsp_merge_locateCycle$scrut_tup2$worker1(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
main_doit_tsp_merge_locateCycle$scrut_tup2$worker1 = function main_doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return main_doit_tsp_merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return main_doit_tsp_merge$scrut_tup4(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_tsp_merge$scrut_tup4 = function main_doit_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return main_doit_tsp_merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
main_doit_tsp_merge$scrut_tup4$worker1 = function main_doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
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
    return main_doit_tsp_merge$scrut_tup2$worker(2, fv_tmp2, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1)
  }
  return main_doit_tsp_merge$scrut_tup2$worker(1, fv_minDist0, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1);
};
main_doit_tsp_merge_locateCycle$scrut_tup21 = function main_doit_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return main_doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
main_doit_tsp_merge_locateCycle$scrut_tup2$worker = function main_doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return main_doit_tsp_merge$scrut_tup41(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return main_doit_tsp_merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_tsp_merge$scrut_tup41 = function main_doit_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return main_doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
main_doit_tsp_merge$scrut_tup4$worker = function main_doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
  tsp2 = tsp1;
  if (fv_b instanceof tsp2.ND.class) {
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    scrut = main_doit_tsp_merge_locateCycle_findMin$findMin(tsp1, fv_t, fv_b, fv_b, tmp, arg$ND$6$.value);
    inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_mkTree_buildTree_build$dir_Y_AXIS = function main_doit_mkTree_buildTree_build$dir_Y_AXIS() {
  return (fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y) => {
    return main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(2, fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, undefined, undefined)
  }
};
main_doit_mkTree_buildTree_build$dir_X_AXIS = function main_doit_mkTree_buildTree_build$dir_X_AXIS() {
  return (fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med, fv_tmp, fv_tmp1) => {
    return main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker(1, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med, fv_tmp, fv_tmp1)
  }
};
doit_mkTree_buildTree_build$dir_X_AXIS = function doit_mkTree_buildTree_build$dir_X_AXIS() {
  return (fv_med, fv_tsp, fv_rand, fv_min_y, fv_max_y, fv_n, fv_tmp, fv_min_x, fv_max_x, fv_tmp1) => {
    return doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(2, fv_med, fv_tsp, fv_rand, fv_min_y, fv_max_y, fv_n, fv_tmp, fv_min_x, fv_max_x, fv_tmp1)
  }
};
doit_mkTree_buildTree_build$dir_Y_AXIS = function doit_mkTree_buildTree_build$dir_Y_AXIS() {
  return (fv_tsp, fv_rand, fv_min_y, fv_max_y, fv_n, fv_min_x, fv_max_x, fv_med) => {
    return doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker(1, fv_tsp, fv_rand, fv_min_y, fv_max_y, fv_n, fv_min_x, fv_max_x, fv_med, undefined, undefined)
  }
};
doit_tsp_merge_locateCycle$scrut_tup2 = function doit_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return doit_tsp_merge_locateCycle$scrut_tup2$worker1(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
doit_tsp_merge_locateCycle$scrut_tup2$worker1 = function doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return doit_tsp_merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return doit_tsp_merge$scrut_tup4(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge$scrut_tup4 = function doit_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return doit_tsp_merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
doit_tsp_merge$scrut_tup4$worker1 = function doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
  tsp2 = tsp1;
  if (fv_b instanceof tsp2.ND.class) {
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    scrut = doit_tsp_merge_locateCycle_findMin$findMin1(tsp1, fv_t, fv_b, fv_b, tmp, arg$ND$6$.value);
    inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge_locateCycle$scrut_tup21 = function doit_tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
doit_tsp_merge_locateCycle$scrut_tup2$worker = function doit_tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return doit_tsp_merge$scrut_tup41(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return doit_tsp_merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_tsp_merge$scrut_tup41 = function doit_tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
doit_tsp_merge$scrut_tup4$worker = function doit_tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
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
    return doit_tsp_merge$scrut_tup2$worker2(2, fv_tmp2, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1)
  }
  return doit_tsp_merge$scrut_tup2$worker2(1, fv_minDist0, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1);
};
doit_tsp_merge$scrut_tup2 = function doit_tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return doit_tsp_merge$scrut_tup2$worker2(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
doit_tsp_merge$scrut_tup2$worker2 = function (tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToP2;
  fv_tmp1 = fv_tmp + fv_p1ToN2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < fv_tmp1;
    if (scrut1 === true) {
      return doit_tsp_merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return doit_tsp_merge$scrut_tup2$worker(3, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
  {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < tup2_1;
    if (scrut1 === true) {
      return doit_tsp_merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return doit_tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
};
doit_tsp_merge$scrut_tup21 = function doit_tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) => {
    return doit_tsp_merge$scrut_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1)
  }
};
doit_tsp_merge$scrut_tup2$worker1 = function (tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToN2;
  fv_tmp1 = fv_tmp + fv_p1ToP2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    return doit_tsp_merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
  return doit_tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
};
doit_tsp_merge$scrut_tup22 = function doit_tsp_merge$scrut_tup2(tup2_0) {
  return (fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return doit_tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
doit_tsp_merge$scrut_tup2$worker = function doit_tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  switch (tup2_0) {
    case 1:
      tsp1[reverse$accessorSymbol](fv_n2);
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_p2);
      tsp1[link$accessorSymbol](fv_n2, fv_n1);
      return fv_t;
    case 2:
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n2);
      tsp1[link$accessorSymbol](fv_p2, fv_n1);
      return fv_t;
    case 3:
      tsp1[link$accessorSymbol](fv_p2, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n1);
      tsp1[link$accessorSymbol](fv_p1, fv_n2);
      return fv_t;
  }
  tsp1[reverse$accessorSymbol](fv_n1);
  tsp1[link$accessorSymbol](fv_n1, fv_t);
  tsp1[link$accessorSymbol](fv_t, fv_n2);
  tsp1[link$accessorSymbol](fv_p2, fv_p1);
  return fv_t
};
mkTree_buildTree_build$dir_Y_AXIS = function mkTree_buildTree_build$dir_Y_AXIS() {
  return (fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y) => {
    return mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(1, fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y)
  }
};
mkTree_buildTree_build$dir_X_AXIS = function mkTree_buildTree_build$dir_X_AXIS() {
  return (fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med) => {
    return mkTree_buildTree_build$dir_X_AXIS$worker(fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med)
  }
};
mkTree_buildTree_build$dir_X_AXIS$worker = function mkTree_buildTree_build$dir_X_AXIS$worker(fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med) {
  fv_med = median(fv_rand, fv_min_y, fv_max_y);
  mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_x, fv_max_x, fv_min_y, fv_med, undefined);
  mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_x, fv_max_x, fv_med, fv_max_y, undefined);
  runtime.safeCall(fv_rand());
  return runtime.Unit
};
tsp_merge$scrut_tup2 = function tsp_merge$scrut_tup2(tup2_0) {
  return (fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
tsp_merge$scrut_tup2$worker2 = function tsp_merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  switch (tup2_0) {
    case 1:
      tsp1[reverse$accessorSymbol](fv_n2);
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_p2);
      tsp1[link$accessorSymbol](fv_n2, fv_n1);
      return fv_t;
    case 2:
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n2);
      tsp1[link$accessorSymbol](fv_p2, fv_n1);
      return fv_t;
    case 3:
      tsp1[link$accessorSymbol](fv_p2, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n1);
      tsp1[link$accessorSymbol](fv_p1, fv_n2);
      return fv_t;
  }
  tsp1[reverse$accessorSymbol](fv_n1);
  tsp1[link$accessorSymbol](fv_n1, fv_t);
  tsp1[link$accessorSymbol](fv_t, fv_n2);
  tsp1[link$accessorSymbol](fv_p2, fv_p1);
  return fv_t
};
tsp_merge$scrut_tup21 = function tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) => {
    return tsp_merge$scrut_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1)
  }
};
tsp_merge$scrut_tup2$worker1 = function tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToN2;
  fv_tmp1 = fv_tmp + fv_p1ToP2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    return tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
  return tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
};
tsp_merge$scrut_tup22 = function tsp_merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
tsp_merge$scrut_tup2$worker = function tsp_merge$scrut_tup2$worker(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToP2;
  fv_tmp1 = fv_tmp + fv_p1ToN2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < fv_tmp1;
    if (scrut1 === true) {
      return tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return tsp_merge$scrut_tup2$worker2(3, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
  {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < tup2_1;
    if (scrut1 === true) {
      return tsp_merge$scrut_tup2$worker2(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return tsp_merge$scrut_tup2$worker2(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
};
tsp_merge_locateCycle$scrut_tup2 = function tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return tsp_merge_locateCycle$scrut_tup2$worker1(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
tsp_merge_locateCycle$scrut_tup2$worker1 = function tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return tsp_merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return tsp_merge$scrut_tup4(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
tsp_merge$scrut_tup4 = function tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return tsp_merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
tsp_merge$scrut_tup4$worker1 = function tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
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
    return tsp_merge$scrut_tup2$worker(2, fv_tmp2, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1)
  }
  return tsp_merge$scrut_tup2$worker(1, fv_minDist0, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1);
};
tsp_merge_locateCycle$scrut_tup21 = function tsp_merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
tsp_merge_locateCycle$scrut_tup2$worker = function tsp_merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return tsp_merge$scrut_tup41(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return tsp_merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
tsp_merge$scrut_tup41 = function tsp_merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
tsp_merge$scrut_tup4$worker = function tsp_merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
  tsp2 = tsp1;
  if (fv_b instanceof tsp2.ND.class) {
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    scrut = tsp_merge_locateCycle_findMin$findMin(tsp1, fv_t, fv_b, fv_b, tmp, arg$ND$6$.value);
    inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge_locateCycle$scrut_tup2 = function merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return merge_locateCycle$scrut_tup2$worker1(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
merge_locateCycle$scrut_tup2$worker1 = function merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return merge$scrut_tup4(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return merge$scrut_tup4(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge$scrut_tup4 = function merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) => {
    return merge$scrut_tup4$worker1(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4)
  }
};
merge$scrut_tup4$worker1 = function merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_t, fv_b, fv_n1ToN2, fv_n1ToP2, fv_p1ToN2, fv_p1ToP2, fv_tmp, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tmp4) {
  let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
  tsp2 = tsp1;
  if (fv_b instanceof tsp2.ND.class) {
    arg$ND$6$ = fv_b.next;
    tmp = tsp1[distance$accessorSymbol](fv_t, fv_b);
    scrut = merge_locateCycle_findMin$findMin1(tsp1, fv_t, fv_b, fv_b, tmp, arg$ND$6$.value);
    inlinedVal = scrut(tsp1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, fv_t, undefined, undefined, undefined, undefined);
    return inlinedVal(fv_n1ToN2, tup4_2, fv_n1ToP2, fv_p1ToN2, tup4_0, fv_p1ToP2, fv_tmp, tup4_1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, tup4_3, fv_tmp4, fv_t)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge_locateCycle$scrut_tup21 = function merge_locateCycle$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
merge_locateCycle$scrut_tup2$worker = function merge_locateCycle$scrut_tup2$worker(tup2_0, tup2_1, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return merge$scrut_tup41(fv_prev, fv_tToPrev, tup2_0, tup2_1)
    }
    return merge$scrut_tup41(tup2_0, tup2_1, fv_next, fv_tToNext);
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
merge$scrut_tup41 = function merge$scrut_tup4(tup4_0, tup4_1, tup4_2, tup4_3) {
  return (fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) => {
    return merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t)
  }
};
merge$scrut_tup4$worker = function merge$scrut_tup4$worker(tup4_0, tup4_1, tup4_2, tup4_3, fv_n1ToN2, fv_n1, fv_n1ToP2, fv_p1ToN2, fv_p1, fv_p1ToP2, fv_tmp, fv_tToP1, fv_minDist0, fv_tmp1, fv_tmp2, fv_tmp3, fv_tToN1, fv_tmp4, fv_t) {
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
    return merge$scrut_tup2$worker2(2, fv_tmp2, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1)
  }
  return merge$scrut_tup2$worker2(1, fv_minDist0, fv_tmp3, fv_tToN1, tup4_1, fv_tmp4, fv_p1ToN2, tup4_3, fv_p1ToP2, tup4_2, fv_p1, fv_t, tup4_0, fv_n1);
};
merge$scrut_tup2 = function merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return merge$scrut_tup2$worker2(tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
merge$scrut_tup2$worker2 = function (tup2_0, tup2_1, fv_tmp, fv_tToN1, fv_tToP2, fv_tmp1, fv_p1ToN2, fv_tToN2, fv_p1ToP2, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToP2;
  fv_tmp1 = fv_tmp + fv_p1ToN2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < fv_tmp1;
    if (scrut1 === true) {
      return merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return merge$scrut_tup2$worker(3, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
  {
    let fv_tmp2, fv_tmp3, scrut1;
    fv_tmp2 = fv_tToN1 + fv_tToN2;
    fv_tmp3 = fv_tmp2 + fv_p1ToP2;
    scrut1 = fv_tmp3 < tup2_1;
    if (scrut1 === true) {
      return merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
    }
    return merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
  }
};
merge$scrut_tup21 = function merge$scrut_tup2(tup2_0, tup2_1) {
  return (fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) => {
    return merge$scrut_tup2$worker1(tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1)
  }
};
merge$scrut_tup2$worker1 = function (tup2_0, tup2_1, fv_element0$, fv_element1$, fv_minDist2, fv_choice2, fv_tmp, fv_tToN1, fv_tToN2, fv_tmp1, fv_p1ToP2, fv_scrut, fv_element0$1, fv_element1$1, fv_minDist, fv_choice, fv_n2, fv_p1, fv_t, fv_p2, fv_tmp2, fv_n1) {
  let scrut;
  fv_tmp = fv_tToN1 + fv_tToN2;
  fv_tmp1 = fv_tmp + fv_p1ToP2;
  scrut = fv_tmp1 < tup2_1;
  if (scrut === true) {
    return merge$scrut_tup2$worker(4, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
  return merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1);
};
merge$scrut_tup22 = function merge$scrut_tup2(tup2_0) {
  return (fv_n2, fv_p1, fv_t, fv_p2, fv_n1) => {
    return merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1)
  }
};
merge$scrut_tup2$worker = function merge$scrut_tup2$worker(tup2_0, fv_n2, fv_p1, fv_t, fv_p2, fv_n1) {
  switch (tup2_0) {
    case 1:
      tsp1[reverse$accessorSymbol](fv_n2);
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_p2);
      tsp1[link$accessorSymbol](fv_n2, fv_n1);
      return fv_t;
    case 2:
      tsp1[link$accessorSymbol](fv_p1, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n2);
      tsp1[link$accessorSymbol](fv_p2, fv_n1);
      return fv_t;
    case 3:
      tsp1[link$accessorSymbol](fv_p2, fv_t);
      tsp1[link$accessorSymbol](fv_t, fv_n1);
      tsp1[link$accessorSymbol](fv_p1, fv_n2);
      return fv_t;
  }
  tsp1[reverse$accessorSymbol](fv_n1);
  tsp1[link$accessorSymbol](fv_n1, fv_t);
  tsp1[link$accessorSymbol](fv_t, fv_n2);
  tsp1[link$accessorSymbol](fv_p2, fv_p1);
  return fv_t
};
mkTree$dir_Y_AXIS = function mkTree$dir_Y_AXIS() {
  return (fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y) => {
    return mkTree$dir_Y_AXIS$worker(fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y)
  }
};
mkTree$dir_Y_AXIS$worker = function mkTree$dir_Y_AXIS$worker(fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y) {
  fv_med = median(fv_rand, fv_min_x, fv_max_x);
  mkTree_mkTree$dir_X_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_y, fv_max_y, fv_min_x, fv_med, undefined);
  mkTree_mkTree$dir_X_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_y, fv_max_y, fv_med, fv_max_x, undefined);
  runtime.safeCall(fv_rand());
  return runtime.Unit
};
mkTree$dir_X_AXIS = function mkTree$dir_X_AXIS() {
  return (fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med) => {
    return mkTree_mkTree$dir_X_AXIS$worker(1, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med)
  }
};
mkTree$dir_Y_AXIS1 = function mkTree$dir_Y_AXIS() {
  return (fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y) => {
    return mkTree_mkTree$dir_Y_AXIS$worker(1, fv_med, fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y)
  }
};
mkTree$dir_X_AXIS1 = function mkTree$dir_X_AXIS() {
  return (fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med) => {
    return mkTree$dir_X_AXIS$worker(fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med)
  }
};
mkTree$dir_X_AXIS$worker = function mkTree$dir_X_AXIS$worker(fv_tsp, fv_rand, fv_min_x, fv_max_x, fv_n, fv_min_y, fv_max_y, fv_med) {
  fv_med = median(fv_rand, fv_min_y, fv_max_y);
  mkTree_mkTree$dir_Y_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_x, fv_max_x, fv_min_y, fv_med, undefined);
  mkTree_mkTree$dir_Y_AXIS$worker(0, fv_tsp, fv_rand, fv_n, fv_min_x, fv_max_x, fv_med, fv_max_y, undefined);
  runtime.safeCall(fv_rand());
  return runtime.Unit
};
locateCycle$scrut_tup2 = function locateCycle$scrut_tup2(tup2_0) {
  return (fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) => {
    return locateCycle$scrut_tup2$worker(tup2_0, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut)
  }
};
locateCycle$scrut_tup2$worker = function locateCycle$scrut_tup2$worker(tup2_0, fv_tsp, fv_arg$ND$5$, fv_arg$ND$6$, fv_prev, fv_next, fv_minToNext, fv_minToPrev, fv_tToNext, fv_t, fv_tToPrev, fv_tmp, fv_tmp1, fv_scrut) {
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
      return runtime.Unit
    }
    return runtime.Unit;
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_tsp_merge$scrut_rest = function main_doit_tsp_merge$scrut_rest() {
  return null
};
main_doit_tsp_merge$scrut_rest1 = function main_doit_tsp_merge$scrut_rest() {
  return null
};
main_doit_tsp_merge$scrut_rest2 = function main_doit_tsp_merge$scrut_rest() {
  return null
};
main_doit_tsp_merge$scrut_rest3 = function main_doit_tsp_merge$scrut_rest() {
  return null
};
main_doit_tsp_merge$scrut_rest4 = function main_doit_tsp_merge$scrut_rest() {
  return null
};
main_doit_tsp_merge$a_rest = function main_doit_tsp_merge$a_rest() {
  return null
};
main_doit_tsp_merge_locateCycle$scrut_rest = function main_doit_tsp_merge_locateCycle$scrut_rest() {
  return null
};
main_doit_tsp_merge_locateCycle$start_rest = function main_doit_tsp_merge_locateCycle$start_rest() {
  return null
};
main_doit_tsp_merge_locateCycle$scrut_rest1 = function main_doit_tsp_merge_locateCycle$scrut_rest() {
  return null
};
main_doit_tsp_merge_locateCycle$start_rest1 = function main_doit_tsp_merge_locateCycle$start_rest() {
  return null
};
main_doit_mkTree_buildTree_build$dir_rest = function main_doit_mkTree_buildTree_build$dir_rest() {
  return null
};
main_doit_mkTree_buildTree_build$scrut_rest = function main_doit_mkTree_buildTree_build$scrut_rest() {
  return null
};
doit_mkTree_buildTree_build$dir_rest = function doit_mkTree_buildTree_build$dir_rest() {
  return null
};
doit_mkTree_buildTree_build$scrut_rest = function doit_mkTree_buildTree_build$scrut_rest() {
  return null
};
doit_tsp_merge_locateCycle$scrut_rest = function doit_tsp_merge_locateCycle$scrut_rest() {
  return null
};
doit_tsp_merge_locateCycle$start_rest = function doit_tsp_merge_locateCycle$start_rest() {
  return null
};
doit_tsp_merge$scrut_rest = function doit_tsp_merge$scrut_rest() {
  return null
};
doit_tsp_merge$a_rest = function doit_tsp_merge$a_rest() {
  return null
};
doit_tsp_merge_locateCycle$scrut_rest1 = function doit_tsp_merge_locateCycle$scrut_rest() {
  return null
};
doit_tsp_merge_locateCycle$start_rest1 = function doit_tsp_merge_locateCycle$start_rest() {
  return null
};
doit_tsp_merge$scrut_rest1 = function doit_tsp_merge$scrut_rest() {
  return null
};
doit_tsp_merge$scrut_rest2 = function doit_tsp_merge$scrut_rest() {
  return null
};
doit_tsp_merge$scrut_rest3 = function doit_tsp_merge$scrut_rest() {
  return null
};
doit_tsp_merge$scrut_rest4 = function doit_tsp_merge$scrut_rest() {
  return null
};
mkTree_buildTree_build$dir_rest = function mkTree_buildTree_build$dir_rest() {
  return null
};
mkTree_buildTree_build$scrut_rest = function mkTree_buildTree_build$scrut_rest() {
  return null
};
tsp_merge$scrut_rest = function tsp_merge$scrut_rest() {
  return null
};
tsp_merge$scrut_rest1 = function tsp_merge$scrut_rest() {
  return null
};
tsp_merge$scrut_rest2 = function tsp_merge$scrut_rest() {
  return null
};
tsp_merge$scrut_rest3 = function tsp_merge$scrut_rest() {
  return null
};
tsp_merge$scrut_rest4 = function tsp_merge$scrut_rest() {
  return null
};
tsp_merge$a_rest = function tsp_merge$a_rest() {
  return null
};
tsp_merge_locateCycle$scrut_rest = function tsp_merge_locateCycle$scrut_rest() {
  return null
};
tsp_merge_locateCycle$start_rest = function tsp_merge_locateCycle$start_rest() {
  return null
};
tsp_merge_locateCycle$scrut_rest1 = function tsp_merge_locateCycle$scrut_rest() {
  return null
};
tsp_merge_locateCycle$start_rest1 = function tsp_merge_locateCycle$start_rest() {
  return null
};
merge_locateCycle$scrut_rest = function merge_locateCycle$scrut_rest() {
  return null
};
merge_locateCycle$start_rest = function merge_locateCycle$start_rest() {
  return null
};
merge$scrut_rest = function merge$scrut_rest() {
  return null
};
merge$a_rest = function merge$a_rest() {
  return null
};
merge_locateCycle$scrut_rest1 = function merge_locateCycle$scrut_rest() {
  return null
};
merge_locateCycle$start_rest1 = function merge_locateCycle$start_rest() {
  return null
};
merge$scrut_rest1 = function merge$scrut_rest() {
  return null
};
merge$scrut_rest2 = function merge$scrut_rest() {
  return null
};
merge$scrut_rest3 = function merge$scrut_rest() {
  return null
};
merge$scrut_rest4 = function merge$scrut_rest() {
  return null
};
mkTree$dir_rest = function mkTree$dir_rest() {
  return null
};
mkTree$scrut_rest = function mkTree$scrut_rest() {
  return null
};
mkTree$dir_rest1 = function mkTree$dir_rest() {
  return null
};
mkTree$scrut_rest1 = function mkTree$scrut_rest() {
  return null
};
locateCycle$scrut_rest = function locateCycle$scrut_rest() {
  return null
};
locateCycle$start_rest = function locateCycle$start_rest() {
  return null
};
cycle = function cycle(tsp2, next, t) {
  if (t instanceof tsp2.ND.class) {
    return runtime.Unit
  }
  return false;
};
dist = function dist(tsp2, ax, ay, bx, by) {
  let dx, dy, tmp, tmp1, tmp2;
  dx = ax - bx;
  dy = ay - by;
  tmp = dx * dx;
  tmp1 = dy * dy;
  tmp2 = tmp + tmp1;
  return runtime.safeCall(globalThis.Math.sqrt(tmp2))
};
length = function length(tsp2, x, y, next, t, px, py, n, len) {
  loopLabel: while (true) {
    let arg$ND$2$, arg$ND$3$, arg$ND$6$, tmp, tmp1, tmp2, tmp3;
    if (t instanceof tsp2.NULL.class) {
      let dx, dy, tmp4, tmp5, tmp6, inlinedVal;
      dx = px - x;
      dy = py - y;
      tmp4 = dx * dx;
      tmp5 = dy * dy;
      tmp6 = tmp4 + tmp5;
      inlinedVal = runtime.safeCall(globalThis.Math.sqrt(tmp6));
      tmp = len + inlinedVal;
      return globalThis.Object.freeze([
        n,
        tmp
      ])
    } else if (t instanceof tsp2.ND.class) {
      let tsp3, inlinedVal, arg$ND$6$1;
      arg$ND$2$ = t.x;
      arg$ND$3$ = t.y;
      arg$ND$6$ = t.next;
      tsp3 = tsp2;
      if (t instanceof tsp3.ND.class) {
        arg$ND$6$1 = t.next;
        inlinedVal = next === arg$ND$6$1;
      } else {
        inlinedVal = false;
      }
      if (inlinedVal === true) {
        let dx, dy, tmp4, tmp5, tmp6, inlinedVal1;
        dx = px - arg$ND$2$;
        dy = py - arg$ND$3$;
        tmp4 = dx * dx;
        tmp5 = dy * dy;
        tmp6 = tmp4 + tmp5;
        inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
        tmp1 = len + inlinedVal1;
        return globalThis.Object.freeze([
          n,
          tmp1
        ])
      }
      {
        let dx, dy, tmp4, tmp5, tmp6, inlinedVal1;
        tmp2 = n + 1;
        dx = px - arg$ND$2$;
        dy = py - arg$ND$3$;
        tmp4 = dx * dx;
        tmp5 = dy * dy;
        tmp6 = tmp4 + tmp5;
        inlinedVal1 = runtime.safeCall(globalThis.Math.sqrt(tmp6));
        tmp3 = len + inlinedVal1;
        t = arg$ND$6$.value;
        px = arg$ND$2$;
        py = arg$ND$3$;
        n = tmp2;
        len = tmp3;
        continue loopLabel;
      }
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
findMin = function findMin(tsp2, t, start, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](start, tmp);
      if (scrut === true) {
        return runtime.Unit
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
locateCycle = function locateCycle(tsp2, t, start) {
  let scrut, arg$ND$6$, tmp;
  if (start instanceof tsp2.ND.class) {
    arg$ND$6$ = start.next;
    tmp = tsp2[distance$accessorSymbol](t, start);
    scrut = locateCycle_findMin$findMin(tsp2, t, start, start, tmp, arg$ND$6$.value);
    return scrut(tsp2, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
choose = function choose(testChoice, test, choice, minDist) {
  let scrut;
  scrut = test < minDist;
  if (scrut === true) {
    return runtime.Unit
  }
  return runtime.Unit;
};
findMinDist = function findMinDist(tsp2, cycle1, t, min, minDist, tmp) {
  loopLabel: while (true) {
    let scrut, test, scrut1, arg$ND$6$;
    if (tmp instanceof tsp2.ND.class) {
      arg$ND$6$ = tmp.next;
      scrut = tsp2[sameNd$accessorSymbol](cycle1, tmp);
      if (scrut === true) {
        return min
      }
      test = tsp2[distance$accessorSymbol](t, tmp);
      scrut1 = test < minDist;
      if (scrut1 === true) {
        min = tmp;
        minDist = test;
        tmp = arg$ND$6$.value;
        continue loopLabel
      }
      tmp = arg$ND$6$.value;
      continue loopLabel;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop = function loop(tsp2, cycle1, cycle_next, t) {
  loopLabel: while (true) {
    let doNext, min, min_prev, min_next, minToNext, minToPrev, tToNext, tToPrev, scrut, arg$ND$6$, tmp, arg$ND$5$, arg$ND$6$1, tmp1, tmp2;
    if (t instanceof tsp2.NULL.class) {
      return runtime.Unit
    } else if (t instanceof tsp2.ND.class) {
      arg$ND$6$ = t.next;
      doNext = arg$ND$6$.value;
      tmp = tsp2[distance$accessorSymbol](t, cycle1);
      min = findMinDist(tsp2, cycle1, t, cycle1, tmp, cycle_next.value);
      if (min instanceof tsp2.ND.class) {
        arg$ND$5$ = min.prev;
        arg$ND$6$1 = min.next;
        min_prev = arg$ND$5$.value;
        min_next = arg$ND$6$1.value;
        minToNext = tsp2[distance$accessorSymbol](min, min_next);
        minToPrev = tsp2[distance$accessorSymbol](min, min_prev);
        tToNext = tsp2[distance$accessorSymbol](t, min_next);
        tToPrev = tsp2[distance$accessorSymbol](t, min_prev);
        tmp1 = tToPrev - minToPrev;
        tmp2 = tToNext - minToNext;
        scrut = tmp1 < tmp2;
        if (scrut === true) {
          tsp2[link$accessorSymbol](min_prev, t);
          tsp2[link$accessorSymbol](t, min);
          t = doNext;
          continue loopLabel
        }
        tsp2[link$accessorSymbol](min, t);
        tsp2[link$accessorSymbol](t, min_next);
        t = doNext;
        continue loopLabel;
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
rev = function rev(tsp2, back, tmp) {
  loopLabel: while (true) {
    let tmp1, arg$ND$6$;
    if (tmp instanceof tsp2.NULL.class) {
      return runtime.Unit
    } else if (tmp instanceof tsp2.ND.class) {
      let receiver, arg$ND$5$;
      arg$ND$6$ = tmp.next;
      tmp1 = arg$ND$6$.value;
      arg$ND$6$.value = back;
      receiver = tsp2;
      if (back instanceof receiver.ND.class) {
        arg$ND$5$ = back.prev;
        arg$ND$5$.value = tmp;
        back = tmp;
        tmp = tmp1;
        continue loopLabel
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
mkTree = function mkTree(tsp2, rand, n, min_x, max_x, min, max) {
  return mkTree_mkTree$dir_Y_AXIS$worker(0, tsp2, rand, n, min_x, max_x, min, max, undefined)
};
mkTree1 = function mkTree(tsp2, rand, n, min_y, max_y, min, max) {
  return mkTree_mkTree$dir_X_AXIS$worker(0, tsp2, rand, n, min_y, max_y, min, max, undefined)
};
drand48 = function drand48(tsp2, rand) {
  runtime.safeCall(rand());
  return runtime.Unit
};
median = function median(rand, min, max) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, inlinedVal, scale;
  tmp17 = runtime.safeCall(rand());
  scale = 1.0 / 2147483647.0;
  inlinedVal = scale * tmp17;
  scrut = inlinedVal > 0.5;
  if (scrut === true) {
    let inlinedVal1;
    tmp = 162754.79141900392083592475 - 1.0;
    tmp1 = 2.0 * tmp;
    tmp2 = inlinedVal - 0.5;
    tmp3 = tmp1 * tmp2;
    tmp4 = tmp3 / 162754.79141900392083592475;
    tmp5 = 1.0 - tmp4;
    inlinedVal1 = runtime.safeCall(globalThis.Math.log(tmp5));
    tmp6 = inlinedVal1 / 12.0;
  } else {
    let inlinedVal1;
    tmp7 = 162754.79141900392083592475 - 1.0;
    tmp8 = 2.0 * tmp7;
    tmp9 = tmp8 * inlinedVal;
    tmp10 = tmp9 / 162754.79141900392083592475;
    tmp11 = 1.0 - tmp10;
    inlinedVal1 = runtime.safeCall(globalThis.Math.log(tmp11));
    tmp12 = inlinedVal1 / 12.0;
    tmp6 = - tmp12;
  }
  tmp13 = tmp6 + 1.0;
  tmp14 = max - min;
  tmp15 = tmp13 * tmp14;
  tmp16 = tmp15 / 2.0;
  return min + tmp16
};
uniform = function uniform(tsp2, rand, min, max) {
  runtime.safeCall(rand());
  return runtime.Unit
};
build = function build(tsp2, rand, n, dir, min_x, min_y, max_x, max_y) {
  let scrut, med, med1;
  scrut = n == 0;
  if (scrut === true) {
    return tsp2.NULL
  }
  if (dir instanceof tsp2.X_AXIS.class) {
    med = median(rand, min_y, max_y);
    mkTree_mkTree$dir_Y_AXIS$worker(0, tsp2, rand, n, min_x, max_x, min_y, med, undefined);
    mkTree_mkTree$dir_Y_AXIS$worker(0, tsp2, rand, n, min_x, max_x, med, max_y, undefined);
    runtime.safeCall(rand());
    return runtime.Unit
  } else if (dir instanceof tsp2.Y_AXIS.class) {
    med1 = median(rand, min_x, max_x);
    mkTree_mkTree$dir_X_AXIS$worker(0, tsp2, rand, n, min_y, max_y, min_x, med1, undefined);
    mkTree_mkTree$dir_X_AXIS$worker(0, tsp2, rand, n, min_y, max_y, med1, max_x, undefined);
    runtime.safeCall(rand());
    return runtime.Unit
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
lambda$ = (undefined, function (seedRef) {
  return () => {
    return lambda(seedRef)
  }
});
lambda = (undefined, function (seedRef) {
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
});
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
    return runtime.Unit;
  }
  static #mkRandom(seed) {
    let seedRef, tmp;
    tmp = tsp.#chk(seed);
    seedRef = new tsp.Ref.class(tmp);
    return lambda$(seedRef)
  }
  static #norm(s) {
    return runtime.Unit
  }
  static #mkNode(l, r, x, y, sz) {
    return runtime.Unit
  }
  static #buildTree(n, dir, min_x, min_y, max_x, max_y) {
    let rand;
    rand = tsp.#mkRandom(314);
    return build(tsp, rand, n, dir, min_x, min_y, max_x, max_y)
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
      arg$ND$5$ = t.prev;
      arg$ND$6$ = t.next;
      tsp.#setNext(arg$ND$5$.value, tsp.NULL);
      arg$ND$5$.value = tsp.NULL;
      return rev(tsp, t, arg$ND$6$.value)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #conquer(t) {
    let cycle1, t1, arg$ND$5$, arg$ND$6$;
    if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    cycle1 = tsp.#makeList(t);
    if (cycle1 instanceof tsp.ND.class) {
      arg$ND$5$ = cycle1.prev;
      arg$ND$6$ = cycle1.next;
      t1 = arg$ND$6$.value;
      arg$ND$6$.value = cycle1;
      arg$ND$5$.value = cycle1;
      loop(tsp, cycle1, arg$ND$6$, t1);
      return cycle1
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #merge(a, b, t) {
    if (a instanceof tsp.ND.class) {
      let tsp2, inlinedVal, scrut, arg$ND$6$, tmp;
      tsp2 = tsp;
      if (a instanceof tsp2.ND.class) {
        arg$ND$6$ = a.next;
        tmp = tsp.#distance(t, a);
        scrut = merge_locateCycle_findMin$findMin(tsp, t, a, a, tmp, arg$ND$6$.value);
        inlinedVal = scrut(tsp, undefined, undefined, undefined, undefined, undefined, undefined, undefined, t, undefined, undefined, undefined, undefined);
        return inlinedVal(t, b, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
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
      tmp = tsp.#tsp(arg$ND$0$, sz);
      tmp1 = tsp.#tsp(arg$ND$1$, sz);
      return tsp_merge$merge(tmp, tmp1, t);
    } else if (t instanceof tsp.NULL.class) {
      return tsp.NULL
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #mkTree(n) {
    let deforest$lam;
    deforest$lam = mkTree_buildTree_build$dir_X_AXIS();
    return mkTree_buildTree$buildTree(n, deforest$lam, 0.0, 1.0, 0.0, 1.0)
  }
  static #doit(n, divideSz) {
    let inlinedVal, deforest$lam;
    deforest$lam = doit_mkTree_buildTree_build$dir_X_AXIS();
    inlinedVal = doit_mkTree_buildTree$buildTree(n, deforest$lam, 0.0, 1.0, 0.0, 1.0);
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
        if (inlinedVal === true) {
          return globalThis.Object.freeze([
            1,
            0.0
          ])
        }
        return length(tsp, arg$ND$2$, arg$ND$3$, arg$ND$6$, arg$ND$6$.value, arg$ND$2$, arg$ND$3$, 1, 0.0);
      }
      return length(tsp, arg$ND$2$, arg$ND$3$, arg$ND$6$, arg$ND$6$.value, arg$ND$2$, arg$ND$3$, 1, 0.0);
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let inlinedVal, inlinedVal1, deforest$lam;
    deforest$lam = main_doit_mkTree_buildTree_build$dir_X_AXIS();
    inlinedVal1 = main_doit_mkTree_buildTree$buildTree(255, deforest$lam, 0.0, 1.0, 0.0, 1.0);
    inlinedVal = main_doit_tsp$tsp(inlinedVal1, 150);
    return tsp.#tourLength(inlinedVal)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tsp"];
});
export { mkTree as _$_modulePrivate_$_mkTree };
export { mkTree1 as _$_modulePrivate_$_mkTree1 };
export { uniform as _$_modulePrivate_$_uniform };
export { median as _$_modulePrivate_$_median };
export { build as _$_modulePrivate_$_build };
export { drand48 as _$_modulePrivate_$_drand48 };
export { rev as _$_modulePrivate_$_rev };
export { findMinDist as _$_modulePrivate_$_findMinDist };
export { loop as _$_modulePrivate_$_loop };
export { findMin as _$_modulePrivate_$_findMin };
export { choose as _$_modulePrivate_$_choose };
export { locateCycle as _$_modulePrivate_$_locateCycle };
export { length as _$_modulePrivate_$_length };
export { dist as _$_modulePrivate_$_dist };
export { cycle as _$_modulePrivate_$_cycle };
export { tsp1 as _$_modulePrivate_$_tsp };
export { lambda as _$_modulePrivate_$_lambda };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { main_doit_tsp_merge_choose$choose as _$_modulePrivate_$_main_doit_tsp_merge_choose$choose };
export { main_doit_tsp_merge$merge as _$_modulePrivate_$_main_doit_tsp_merge$merge };
export { main_doit_tsp$tsp as _$_modulePrivate_$_main_doit_tsp$tsp };
export { main_doit$doit as _$_modulePrivate_$_main_doit$doit };
export { main_doit_tsp_merge_choose$choose1 as _$_modulePrivate_$_main_doit_tsp_merge_choose$choose1 };
export { main_doit_tsp_merge_choose$choose2 as _$_modulePrivate_$_main_doit_tsp_merge_choose$choose2 };
export { main_doit_tsp_merge_locateCycle_findMin$findMin as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle_findMin$findMin };
export { main_doit_tsp_merge_locateCycle$locateCycle as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$locateCycle };
export { main_doit_tsp_merge_locateCycle_findMin$findMin1 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle_findMin$findMin1 };
export { main_doit_tsp_merge_locateCycle$locateCycle1 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$locateCycle1 };
export { main_doit_mkTree_buildTree_build$mkTree as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$mkTree };
export { main_doit_mkTree_buildTree_build$build as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$build };
export { main_doit_mkTree_buildTree_build$mkTree1 as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$mkTree1 };
export { main_doit_mkTree_buildTree$buildTree as _$_modulePrivate_$_main_doit_mkTree_buildTree$buildTree };
export { main_doit_mkTree$mkTree as _$_modulePrivate_$_main_doit_mkTree$mkTree };
export { doit_mkTree_buildTree_build$mkTree as _$_modulePrivate_$_doit_mkTree_buildTree_build$mkTree };
export { doit_mkTree_buildTree_build$build as _$_modulePrivate_$_doit_mkTree_buildTree_build$build };
export { doit_mkTree_buildTree_build$mkTree1 as _$_modulePrivate_$_doit_mkTree_buildTree_build$mkTree1 };
export { doit_mkTree_buildTree$buildTree as _$_modulePrivate_$_doit_mkTree_buildTree$buildTree };
export { doit_mkTree$mkTree as _$_modulePrivate_$_doit_mkTree$mkTree };
export { doit_tsp_merge_locateCycle_findMin$findMin as _$_modulePrivate_$_doit_tsp_merge_locateCycle_findMin$findMin };
export { doit_tsp_merge_locateCycle$locateCycle as _$_modulePrivate_$_doit_tsp_merge_locateCycle$locateCycle };
export { doit_tsp_merge$merge as _$_modulePrivate_$_doit_tsp_merge$merge };
export { doit_tsp$tsp as _$_modulePrivate_$_doit_tsp$tsp };
export { doit_tsp_merge_locateCycle_findMin$findMin1 as _$_modulePrivate_$_doit_tsp_merge_locateCycle_findMin$findMin1 };
export { doit_tsp_merge_locateCycle$locateCycle1 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$locateCycle1 };
export { doit_tsp_merge_choose$choose as _$_modulePrivate_$_doit_tsp_merge_choose$choose };
export { doit_tsp_merge_choose$choose1 as _$_modulePrivate_$_doit_tsp_merge_choose$choose1 };
export { doit_tsp_merge_choose$choose2 as _$_modulePrivate_$_doit_tsp_merge_choose$choose2 };
export { mkTree_buildTree_build$mkTree as _$_modulePrivate_$_mkTree_buildTree_build$mkTree };
export { mkTree_buildTree_build$build as _$_modulePrivate_$_mkTree_buildTree_build$build };
export { mkTree_buildTree_build$mkTree1 as _$_modulePrivate_$_mkTree_buildTree_build$mkTree1 };
export { mkTree_buildTree$buildTree as _$_modulePrivate_$_mkTree_buildTree$buildTree };
export { tsp_merge_choose$choose as _$_modulePrivate_$_tsp_merge_choose$choose };
export { tsp_merge$merge as _$_modulePrivate_$_tsp_merge$merge };
export { tsp_merge_choose$choose1 as _$_modulePrivate_$_tsp_merge_choose$choose1 };
export { tsp_merge_choose$choose2 as _$_modulePrivate_$_tsp_merge_choose$choose2 };
export { tsp_merge_locateCycle_findMin$findMin as _$_modulePrivate_$_tsp_merge_locateCycle_findMin$findMin };
export { tsp_merge_locateCycle$locateCycle as _$_modulePrivate_$_tsp_merge_locateCycle$locateCycle };
export { tsp_merge_locateCycle_findMin$findMin1 as _$_modulePrivate_$_tsp_merge_locateCycle_findMin$findMin1 };
export { tsp_merge_locateCycle$locateCycle1 as _$_modulePrivate_$_tsp_merge_locateCycle$locateCycle1 };
export { merge_locateCycle_findMin$findMin as _$_modulePrivate_$_merge_locateCycle_findMin$findMin };
export { merge_locateCycle$locateCycle as _$_modulePrivate_$_merge_locateCycle$locateCycle };
export { merge_locateCycle_findMin$findMin1 as _$_modulePrivate_$_merge_locateCycle_findMin$findMin1 };
export { merge_locateCycle$locateCycle1 as _$_modulePrivate_$_merge_locateCycle$locateCycle1 };
export { merge_choose$choose as _$_modulePrivate_$_merge_choose$choose };
export { merge_choose$choose1 as _$_modulePrivate_$_merge_choose$choose1 };
export { merge_choose$choose2 as _$_modulePrivate_$_merge_choose$choose2 };
export { mkTree$mkTree as _$_modulePrivate_$_mkTree$mkTree };
export { mkTree$build as _$_modulePrivate_$_mkTree$build };
export { mkTree$build1 as _$_modulePrivate_$_mkTree$build1 };
export { mkTree$mkTree1 as _$_modulePrivate_$_mkTree$mkTree1 };
export { locateCycle_findMin$findMin as _$_modulePrivate_$_locateCycle_findMin$findMin };
export { main_doit_tsp_merge$scrut_tup2 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup2 };
export { main_doit_tsp_merge$scrut_rest as _$_modulePrivate_$_main_doit_tsp_merge$scrut_rest };
export { main_doit_tsp_merge$scrut_rest1 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_rest1 };
export { main_doit_tsp_merge$scrut_rest2 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_rest2 };
export { main_doit_tsp_merge$scrut_rest3 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_rest3 };
export { main_doit_tsp_merge$scrut_rest4 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_rest4 };
export { main_doit_tsp_merge$a_rest as _$_modulePrivate_$_main_doit_tsp_merge$a_rest };
export { main_doit_tsp_merge$scrut_tup21 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup21 };
export { main_doit_tsp_merge$scrut_tup22 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup22 };
export { main_doit_tsp_merge_locateCycle$scrut_tup2 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_tup2 };
export { main_doit_tsp_merge_locateCycle$scrut_rest as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_rest };
export { main_doit_tsp_merge_locateCycle$start_rest as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$start_rest };
export { main_doit_tsp_merge$scrut_tup4 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup4 };
export { main_doit_tsp_merge_locateCycle$scrut_tup21 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_tup21 };
export { main_doit_tsp_merge_locateCycle$scrut_rest1 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_rest1 };
export { main_doit_tsp_merge_locateCycle$start_rest1 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$start_rest1 };
export { main_doit_tsp_merge$scrut_tup41 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup41 };
export { main_doit_mkTree_buildTree_build$dir_Y_AXIS as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$dir_Y_AXIS };
export { main_doit_mkTree_buildTree_build$dir_rest as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$dir_rest };
export { main_doit_mkTree_buildTree_build$scrut_rest as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$scrut_rest };
export { main_doit_mkTree_buildTree_build$dir_X_AXIS as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$dir_X_AXIS };
export { doit_mkTree_buildTree_build$dir_X_AXIS as _$_modulePrivate_$_doit_mkTree_buildTree_build$dir_X_AXIS };
export { doit_mkTree_buildTree_build$dir_rest as _$_modulePrivate_$_doit_mkTree_buildTree_build$dir_rest };
export { doit_mkTree_buildTree_build$scrut_rest as _$_modulePrivate_$_doit_mkTree_buildTree_build$scrut_rest };
export { doit_mkTree_buildTree_build$dir_Y_AXIS as _$_modulePrivate_$_doit_mkTree_buildTree_build$dir_Y_AXIS };
export { doit_tsp_merge_locateCycle$scrut_tup2 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_tup2 };
export { doit_tsp_merge_locateCycle$scrut_rest as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_rest };
export { doit_tsp_merge_locateCycle$start_rest as _$_modulePrivate_$_doit_tsp_merge_locateCycle$start_rest };
export { doit_tsp_merge$scrut_tup4 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup4 };
export { doit_tsp_merge$scrut_rest as _$_modulePrivate_$_doit_tsp_merge$scrut_rest };
export { doit_tsp_merge$a_rest as _$_modulePrivate_$_doit_tsp_merge$a_rest };
export { doit_tsp_merge_locateCycle$scrut_tup21 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_tup21 };
export { doit_tsp_merge_locateCycle$scrut_rest1 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_rest1 };
export { doit_tsp_merge_locateCycle$start_rest1 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$start_rest1 };
export { doit_tsp_merge$scrut_tup41 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup41 };
export { doit_tsp_merge$scrut_rest1 as _$_modulePrivate_$_doit_tsp_merge$scrut_rest1 };
export { doit_tsp_merge$scrut_tup2 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup2 };
export { doit_tsp_merge$scrut_rest2 as _$_modulePrivate_$_doit_tsp_merge$scrut_rest2 };
export { doit_tsp_merge$scrut_tup21 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup21 };
export { doit_tsp_merge$scrut_rest3 as _$_modulePrivate_$_doit_tsp_merge$scrut_rest3 };
export { doit_tsp_merge$scrut_tup22 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup22 };
export { doit_tsp_merge$scrut_rest4 as _$_modulePrivate_$_doit_tsp_merge$scrut_rest4 };
export { mkTree_buildTree_build$dir_Y_AXIS as _$_modulePrivate_$_mkTree_buildTree_build$dir_Y_AXIS };
export { mkTree_buildTree_build$dir_rest as _$_modulePrivate_$_mkTree_buildTree_build$dir_rest };
export { mkTree_buildTree_build$scrut_rest as _$_modulePrivate_$_mkTree_buildTree_build$scrut_rest };
export { mkTree_buildTree_build$dir_X_AXIS as _$_modulePrivate_$_mkTree_buildTree_build$dir_X_AXIS };
export { tsp_merge$scrut_tup2 as _$_modulePrivate_$_tsp_merge$scrut_tup2 };
export { tsp_merge$scrut_rest as _$_modulePrivate_$_tsp_merge$scrut_rest };
export { tsp_merge$scrut_rest1 as _$_modulePrivate_$_tsp_merge$scrut_rest1 };
export { tsp_merge$scrut_rest2 as _$_modulePrivate_$_tsp_merge$scrut_rest2 };
export { tsp_merge$scrut_rest3 as _$_modulePrivate_$_tsp_merge$scrut_rest3 };
export { tsp_merge$scrut_rest4 as _$_modulePrivate_$_tsp_merge$scrut_rest4 };
export { tsp_merge$a_rest as _$_modulePrivate_$_tsp_merge$a_rest };
export { tsp_merge$scrut_tup21 as _$_modulePrivate_$_tsp_merge$scrut_tup21 };
export { tsp_merge$scrut_tup22 as _$_modulePrivate_$_tsp_merge$scrut_tup22 };
export { tsp_merge_locateCycle$scrut_tup2 as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_tup2 };
export { tsp_merge_locateCycle$scrut_rest as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_rest };
export { tsp_merge_locateCycle$start_rest as _$_modulePrivate_$_tsp_merge_locateCycle$start_rest };
export { tsp_merge$scrut_tup4 as _$_modulePrivate_$_tsp_merge$scrut_tup4 };
export { tsp_merge_locateCycle$scrut_tup21 as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_tup21 };
export { tsp_merge_locateCycle$scrut_rest1 as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_rest1 };
export { tsp_merge_locateCycle$start_rest1 as _$_modulePrivate_$_tsp_merge_locateCycle$start_rest1 };
export { tsp_merge$scrut_tup41 as _$_modulePrivate_$_tsp_merge$scrut_tup41 };
export { merge_locateCycle$scrut_tup2 as _$_modulePrivate_$_merge_locateCycle$scrut_tup2 };
export { merge_locateCycle$scrut_rest as _$_modulePrivate_$_merge_locateCycle$scrut_rest };
export { merge_locateCycle$start_rest as _$_modulePrivate_$_merge_locateCycle$start_rest };
export { merge$scrut_tup4 as _$_modulePrivate_$_merge$scrut_tup4 };
export { merge$scrut_rest as _$_modulePrivate_$_merge$scrut_rest };
export { merge$a_rest as _$_modulePrivate_$_merge$a_rest };
export { merge_locateCycle$scrut_tup21 as _$_modulePrivate_$_merge_locateCycle$scrut_tup21 };
export { merge_locateCycle$scrut_rest1 as _$_modulePrivate_$_merge_locateCycle$scrut_rest1 };
export { merge_locateCycle$start_rest1 as _$_modulePrivate_$_merge_locateCycle$start_rest1 };
export { merge$scrut_tup41 as _$_modulePrivate_$_merge$scrut_tup41 };
export { merge$scrut_rest1 as _$_modulePrivate_$_merge$scrut_rest1 };
export { merge$scrut_tup2 as _$_modulePrivate_$_merge$scrut_tup2 };
export { merge$scrut_rest2 as _$_modulePrivate_$_merge$scrut_rest2 };
export { merge$scrut_tup21 as _$_modulePrivate_$_merge$scrut_tup21 };
export { merge$scrut_rest3 as _$_modulePrivate_$_merge$scrut_rest3 };
export { merge$scrut_tup22 as _$_modulePrivate_$_merge$scrut_tup22 };
export { merge$scrut_rest4 as _$_modulePrivate_$_merge$scrut_rest4 };
export { mkTree$dir_Y_AXIS as _$_modulePrivate_$_mkTree$dir_Y_AXIS };
export { mkTree$dir_rest as _$_modulePrivate_$_mkTree$dir_rest };
export { mkTree$scrut_rest as _$_modulePrivate_$_mkTree$scrut_rest };
export { mkTree$dir_X_AXIS as _$_modulePrivate_$_mkTree$dir_X_AXIS };
export { mkTree$dir_Y_AXIS1 as _$_modulePrivate_$_mkTree$dir_Y_AXIS1 };
export { mkTree$dir_rest1 as _$_modulePrivate_$_mkTree$dir_rest1 };
export { mkTree$scrut_rest1 as _$_modulePrivate_$_mkTree$scrut_rest1 };
export { mkTree$dir_X_AXIS1 as _$_modulePrivate_$_mkTree$dir_X_AXIS1 };
export { locateCycle$scrut_tup2 as _$_modulePrivate_$_locateCycle$scrut_tup2 };
export { locateCycle$scrut_rest as _$_modulePrivate_$_locateCycle$scrut_rest };
export { locateCycle$start_rest as _$_modulePrivate_$_locateCycle$start_rest };
export { locateCycle$scrut_tup2$worker as _$_modulePrivate_$_locateCycle$scrut_tup2$worker };
export { mkTree$dir_X_AXIS$worker as _$_modulePrivate_$_mkTree$dir_X_AXIS$worker };
export { mkTree$dir_Y_AXIS$worker as _$_modulePrivate_$_mkTree$dir_Y_AXIS$worker };
export { merge$scrut_tup2$worker as _$_modulePrivate_$_merge$scrut_tup2$worker };
export { merge$scrut_tup2$worker1 as _$_modulePrivate_$_merge$scrut_tup2$worker1 };
export { merge$scrut_tup2$worker2 as _$_modulePrivate_$_merge$scrut_tup2$worker2 };
export { merge$scrut_tup4$worker as _$_modulePrivate_$_merge$scrut_tup4$worker };
export { merge_locateCycle$scrut_tup2$worker as _$_modulePrivate_$_merge_locateCycle$scrut_tup2$worker };
export { merge$scrut_tup4$worker1 as _$_modulePrivate_$_merge$scrut_tup4$worker1 };
export { merge_locateCycle$scrut_tup2$worker1 as _$_modulePrivate_$_merge_locateCycle$scrut_tup2$worker1 };
export { tsp_merge$scrut_tup4$worker as _$_modulePrivate_$_tsp_merge$scrut_tup4$worker };
export { tsp_merge_locateCycle$scrut_tup2$worker as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_tup2$worker };
export { tsp_merge$scrut_tup4$worker1 as _$_modulePrivate_$_tsp_merge$scrut_tup4$worker1 };
export { tsp_merge_locateCycle$scrut_tup2$worker1 as _$_modulePrivate_$_tsp_merge_locateCycle$scrut_tup2$worker1 };
export { tsp_merge$scrut_tup2$worker as _$_modulePrivate_$_tsp_merge$scrut_tup2$worker };
export { tsp_merge$scrut_tup2$worker1 as _$_modulePrivate_$_tsp_merge$scrut_tup2$worker1 };
export { tsp_merge$scrut_tup2$worker2 as _$_modulePrivate_$_tsp_merge$scrut_tup2$worker2 };
export { mkTree_buildTree_build$dir_X_AXIS$worker as _$_modulePrivate_$_mkTree_buildTree_build$dir_X_AXIS$worker };
export { doit_tsp_merge$scrut_tup2$worker as _$_modulePrivate_$_doit_tsp_merge$scrut_tup2$worker };
export { doit_tsp_merge$scrut_tup2$worker1 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup2$worker1 };
export { doit_tsp_merge$scrut_tup2$worker2 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup2$worker2 };
export { doit_tsp_merge$scrut_tup4$worker as _$_modulePrivate_$_doit_tsp_merge$scrut_tup4$worker };
export { doit_tsp_merge_locateCycle$scrut_tup2$worker as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_tup2$worker };
export { doit_tsp_merge$scrut_tup4$worker1 as _$_modulePrivate_$_doit_tsp_merge$scrut_tup4$worker1 };
export { doit_tsp_merge_locateCycle$scrut_tup2$worker1 as _$_modulePrivate_$_doit_tsp_merge_locateCycle$scrut_tup2$worker1 };
export { main_doit_tsp_merge$scrut_tup4$worker as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup4$worker };
export { main_doit_tsp_merge_locateCycle$scrut_tup2$worker as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_tup2$worker };
export { main_doit_tsp_merge$scrut_tup4$worker1 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup4$worker1 };
export { main_doit_tsp_merge_locateCycle$scrut_tup2$worker1 as _$_modulePrivate_$_main_doit_tsp_merge_locateCycle$scrut_tup2$worker1 };
export { main_doit_tsp_merge$scrut_tup2$worker as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup2$worker };
export { main_doit_tsp_merge$scrut_tup2$worker1 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup2$worker1 };
export { main_doit_tsp_merge$scrut_tup2$worker2 as _$_modulePrivate_$_main_doit_tsp_merge$scrut_tup2$worker2 };
export { mkTree_mkTree$dir_X_AXIS$worker as _$_modulePrivate_$_mkTree_mkTree$dir_X_AXIS$worker };
export { mkTree_mkTree$dir_Y_AXIS$worker as _$_modulePrivate_$_mkTree_mkTree$dir_Y_AXIS$worker };
export { mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker as _$_modulePrivate_$_mkTree_buildTree_build$mkTree_mkTree_buildTree_build$dir_Y_AXIS$worker };
export { doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker as _$_modulePrivate_$_doit_mkTree_buildTree_build$mkTree_doit_mkTree_buildTree_build$dir_Y_AXIS$worker_doit_mkTree_buildTree_build$dir_X_AXIS$worker };
export { main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker as _$_modulePrivate_$_main_doit_mkTree_buildTree_build$mkTree_main_doit_mkTree_buildTree_build$dir_X_AXIS$worker_main_doit_mkTree_buildTree_build$dir_Y_AXIS$worker };
export default tsp1;
