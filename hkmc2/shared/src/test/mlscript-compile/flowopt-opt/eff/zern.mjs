const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const dotimes$accessorSymbol = globalThis.Symbol("dotimes");
const chkSize$accessorSymbol = globalThis.Symbol("chkSize");
let zern1, lambda$, lambda$1, main_ztest_zern_mulsv_unop_lambda$_lambda$lambda, main_ztest_zern_mulsv_unop_lambda$$lambda$, main_ztest_zern_mpadd_binop_lambda$_lambda$lambda, main_ztest_zern_mpadd_binop_lambda$$lambda$, main_ztest_zern_mpadd_binop$binop, main_ztest_zern_mpadd$mpadd, main_ztest_zern_cisv_unop_lambda$_lambda$lambda, main_ztest_zern_cisv_unop_lambda$$lambda$, main_ztest_zern_cisv_unop_lambda$_lambda$lambda1, main_ztest_zern_cisv_unop_lambda$$lambda$1, main_ztest_lambda$_lambda_lambda$_lambda$lambda, main_ztest_lambda$_lambda_lambda$$lambda$, main_ztest_lambda$_lambda$lambda, main_ztest_lambda$$lambda$, main_ztest_lambda$$lambda$1, main_ztest_array_mkArray_lambda$$lambda$, main_ztest_array_mkArray_lambda$$lambda$1, main_ztest_array_mkArray_lambda$$lambda$2, ztest_array_mkArray_lambda$$lambda$, ztest_array_mkArray_lambda$$lambda$1, ztest_array_mkArray_lambda$$lambda$2, ztest_lambda$$lambda$, ztest_lambda$_lambda_lambda$_lambda$lambda, ztest_lambda$_lambda_lambda$$lambda$, ztest_lambda$_lambda$lambda, ztest_lambda$$lambda$1, ztest_zern_cisv_unop_lambda$_lambda$lambda, ztest_zern_cisv_unop_lambda$$lambda$, ztest_zern_cisv_unop_lambda$_lambda$lambda1, ztest_zern_cisv_unop_lambda$$lambda$1, ztest_zern_mpadd_binop_lambda$_lambda$lambda, ztest_zern_mpadd_binop_lambda$$lambda$, ztest_zern_mpadd_binop$binop, ztest_zern_mpadd$mpadd, ztest_zern_mulsv_unop_lambda$_lambda$lambda, ztest_zern_mulsv_unop_lambda$$lambda$, zern_mulsv_unop_lambda$_lambda$lambda, zern_mulsv_unop_lambda$$lambda$, zern_mpadd_binop_lambda$_lambda$lambda, zern_mpadd_binop_lambda$$lambda$, zern_mpadd_binop$binop, zern_mpadd$mpadd, zern_cisv_unop_lambda$_lambda$lambda, zern_cisv_unop_lambda$$lambda$, zern_cisv_unop_lambda$_lambda$lambda1, zern_cisv_unop_lambda$$lambda$1, mpadd_binop_lambda$_lambda$lambda, mpadd_binop_lambda$$lambda$, cisv_unop_lambda$_lambda$lambda, cisv_unop_lambda$$lambda$, cisv_unop_lambda$_lambda$lambda1, cisv_unop_lambda$$lambda$1, mulsv_unop_lambda$_lambda$lambda, mulsv_unop_lambda$$lambda$, unop_lambda$_lambda$lambda, unop_lambda$$lambda$, binop_lambda$_lambda$lambda, binop_lambda$$lambda$, array_mkArray_lambda$$lambda$, mkArray_lambda$$lambda$, ztest_lambda$_lambda_tabulateCM$tabulateCM, ztest_lambda$_lambda_tabulateRM$tabulateRM, main_ztest_lambda$_lambda_tabulateRM$tabulateRM, main_ztest_lambda$_lambda_tabulateCM$tabulateCM;
main_ztest_zern_mulsv_unop_lambda$_lambda$lambda = function main_ztest_zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_ztest_zern_mulsv_unop_lambda$$lambda$ = function main_ztest_zern_mulsv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_ztest_zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
main_ztest_zern_mpadd_binop_lambda$_lambda$lambda = function main_ztest_zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
main_ztest_zern_mpadd_binop_lambda$$lambda$ = function main_ztest_zern_mpadd_binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return main_ztest_zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
main_ztest_zern_mpadd_binop$binop = function main_ztest_zern_mpadd_binop$binop(d, s1, s2, f) {
  let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
  if (d instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = d.data_;
    arg$Arr2$3$ = d.nelts;
    if (s1 instanceof zern1.Arr2.class) {
      arg$Arr2$0$1 = s1.data_;
      if (s2 instanceof zern1.Arr2.class) {
        arg$Arr2$0$2 = s2.data_;
        lambda$here = main_ztest_zern_mpadd_binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
        return zern1[dotimes$accessorSymbol](arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_ztest_zern_mpadd$mpadd = function main_ztest_zern_mpadd$mpadd(dst) {
  return (sf, src) => {
    let lambda$here;
    lambda$here = lambda$1(sf);
    return main_ztest_zern_mpadd_binop$binop(dst, dst, src, lambda$here)
  }
};
main_ztest_zern_cisv_unop_lambda$_lambda$lambda = function main_ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_ztest_zern_cisv_unop_lambda$$lambda$ = function main_ztest_zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
main_ztest_zern_cisv_unop_lambda$_lambda$lambda1 = function main_ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
main_ztest_zern_cisv_unop_lambda$$lambda$1 = function main_ztest_zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return main_ztest_zern_cisv_unop_lambda$_lambda$lambda1(f, dst, src, ix)
  }
};
main_ztest_lambda$_lambda_lambda$_lambda$lambda = function main_ztest_lambda$_lambda_lambda$_lambda$lambda(r, c) {
  let tmp, tmp1;
  tmp = 128 * r;
  tmp1 = tmp + c;
  return 0.01 * tmp1
};
main_ztest_lambda$_lambda_lambda$$lambda$ = function main_ztest_lambda$_lambda_lambda$$lambda$() {
  return (r, c) => {
    return main_ztest_lambda$_lambda_lambda$_lambda$lambda(r, c)
  }
};
main_ztest_lambda$_lambda$lambda = function main_ztest_lambda$_lambda$lambda(zern2) {
  let lambda$here, t, inlinedVal;
  t = zern2.RowMajor;
  if (t instanceof zern2.RowMajor.class) {
    inlinedVal = main_ztest_lambda$_lambda_tabulateRM$tabulateRM;
  } else if (t instanceof zern2.ColMajor.class) {
    inlinedVal = main_ztest_lambda$_lambda_tabulateCM$tabulateCM;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  lambda$here = main_ztest_lambda$_lambda_lambda$$lambda$();
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
};
main_ztest_lambda$$lambda$ = function main_ztest_lambda$$lambda$(zern2) {
  return () => {
    return main_ztest_lambda$_lambda$lambda(zern2)
  }
};
main_ztest_lambda$$lambda$1 = function main_ztest_lambda$$lambda$() {
  return (x) => {
    return 1 + x
  }
};
main_ztest_array_mkArray_lambda$$lambda$ = function main_ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
main_ztest_array_mkArray_lambda$$lambda$1 = function main_ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
main_ztest_array_mkArray_lambda$$lambda$2 = function main_ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
ztest_array_mkArray_lambda$$lambda$ = function ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
ztest_array_mkArray_lambda$$lambda$1 = function ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
ztest_array_mkArray_lambda$$lambda$2 = function ztest_array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
ztest_lambda$$lambda$ = function ztest_lambda$$lambda$() {
  return (x) => {
    return 1 + x
  }
};
ztest_lambda$_lambda_lambda$_lambda$lambda = function ztest_lambda$_lambda_lambda$_lambda$lambda(r, c) {
  let tmp, tmp1;
  tmp = 128 * r;
  tmp1 = tmp + c;
  return 0.01 * tmp1
};
ztest_lambda$_lambda_lambda$$lambda$ = function ztest_lambda$_lambda_lambda$$lambda$() {
  return (r, c) => {
    return ztest_lambda$_lambda_lambda$_lambda$lambda(r, c)
  }
};
ztest_lambda$_lambda$lambda = function ztest_lambda$_lambda$lambda(zern2) {
  let lambda$here, t, inlinedVal;
  t = zern2.RowMajor;
  if (t instanceof zern2.RowMajor.class) {
    inlinedVal = ztest_lambda$_lambda_tabulateRM$tabulateRM;
  } else if (t instanceof zern2.ColMajor.class) {
    inlinedVal = ztest_lambda$_lambda_tabulateCM$tabulateCM;
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
  lambda$here = ztest_lambda$_lambda_lambda$$lambda$();
  return runtime.safeCall(inlinedVal(128, 128, lambda$here))
};
ztest_lambda$$lambda$1 = function ztest_lambda$$lambda$(zern2) {
  return () => {
    return ztest_lambda$_lambda$lambda(zern2)
  }
};
ztest_zern_cisv_unop_lambda$_lambda$lambda = function ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
ztest_zern_cisv_unop_lambda$$lambda$ = function ztest_zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
ztest_zern_cisv_unop_lambda$_lambda$lambda1 = function ztest_zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
ztest_zern_cisv_unop_lambda$$lambda$1 = function ztest_zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return ztest_zern_cisv_unop_lambda$_lambda$lambda1(f, dst, src, ix)
  }
};
ztest_zern_mpadd_binop_lambda$_lambda$lambda = function ztest_zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
ztest_zern_mpadd_binop_lambda$$lambda$ = function ztest_zern_mpadd_binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return ztest_zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
ztest_zern_mpadd_binop$binop = function ztest_zern_mpadd_binop$binop(d, s1, s2, f) {
  let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
  if (d instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = d.data_;
    arg$Arr2$3$ = d.nelts;
    if (s1 instanceof zern1.Arr2.class) {
      arg$Arr2$0$1 = s1.data_;
      if (s2 instanceof zern1.Arr2.class) {
        arg$Arr2$0$2 = s2.data_;
        lambda$here = ztest_zern_mpadd_binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
        return zern1[dotimes$accessorSymbol](arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
ztest_zern_mpadd$mpadd = function ztest_zern_mpadd$mpadd(dst) {
  return (sf, src) => {
    let lambda$here;
    lambda$here = lambda$1(sf);
    return ztest_zern_mpadd_binop$binop(dst, dst, src, lambda$here)
  }
};
ztest_zern_mulsv_unop_lambda$_lambda$lambda = function ztest_zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
ztest_zern_mulsv_unop_lambda$$lambda$ = function ztest_zern_mulsv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return ztest_zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
zern_mulsv_unop_lambda$_lambda$lambda = function zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
zern_mulsv_unop_lambda$$lambda$ = function zern_mulsv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return zern_mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
zern_mpadd_binop_lambda$_lambda$lambda = function zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
zern_mpadd_binop_lambda$$lambda$ = function zern_mpadd_binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return zern_mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
zern_mpadd_binop$binop = function zern_mpadd_binop$binop(d, s1, s2, f) {
  let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
  if (d instanceof zern1.Arr2.class) {
    arg$Arr2$0$ = d.data_;
    arg$Arr2$3$ = d.nelts;
    if (s1 instanceof zern1.Arr2.class) {
      arg$Arr2$0$1 = s1.data_;
      if (s2 instanceof zern1.Arr2.class) {
        arg$Arr2$0$2 = s2.data_;
        lambda$here = zern_mpadd_binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
        return zern1[dotimes$accessorSymbol](arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
zern_mpadd$mpadd = function zern_mpadd$mpadd(dst) {
  return (sf, src) => {
    let lambda$here;
    lambda$here = lambda$1(sf);
    return zern_mpadd_binop$binop(dst, dst, src, lambda$here)
  }
};
zern_cisv_unop_lambda$_lambda$lambda = function zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
zern_cisv_unop_lambda$$lambda$ = function zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
zern_cisv_unop_lambda$_lambda$lambda1 = function zern_cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
zern_cisv_unop_lambda$$lambda$1 = function zern_cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return zern_cisv_unop_lambda$_lambda$lambda1(f, dst, src, ix)
  }
};
mpadd_binop_lambda$_lambda$lambda = function mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
mpadd_binop_lambda$$lambda$ = function mpadd_binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return mpadd_binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
cisv_unop_lambda$_lambda$lambda = function cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
cisv_unop_lambda$$lambda$ = function cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return cisv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
cisv_unop_lambda$_lambda$lambda1 = function cisv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
cisv_unop_lambda$$lambda$1 = function cisv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return cisv_unop_lambda$_lambda$lambda1(f, dst, src, ix)
  }
};
mulsv_unop_lambda$_lambda$lambda = function mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
mulsv_unop_lambda$$lambda$ = function mulsv_unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return mulsv_unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
unop_lambda$_lambda$lambda = function unop_lambda$_lambda$lambda(f, dst, src, ix) {
  let tmp, inlinedVal;
  inlinedVal = src.at(ix);
  tmp = runtime.safeCall(f(inlinedVal));
  dst[ix] = tmp;
  return runtime.Unit
};
unop_lambda$$lambda$ = function unop_lambda$$lambda$(f, dst, src) {
  return (ix) => {
    return unop_lambda$_lambda$lambda(f, dst, src, ix)
  }
};
binop_lambda$_lambda$lambda = function binop_lambda$_lambda$lambda(f, dst, src1, src2, ix) {
  let tmp, inlinedVal, inlinedVal1;
  inlinedVal = src1.at(ix);
  inlinedVal1 = src2.at(ix);
  tmp = runtime.safeCall(f(inlinedVal, inlinedVal1));
  dst[ix] = tmp;
  return runtime.Unit
};
binop_lambda$$lambda$ = function binop_lambda$$lambda$(f, dst, src1, src2) {
  return (ix) => {
    return binop_lambda$_lambda$lambda(f, dst, src1, src2, ix)
  }
};
array_mkArray_lambda$$lambda$ = function array_mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
mkArray_lambda$$lambda$ = function mkArray_lambda$$lambda$(v, arr) {
  return (ix) => {
    arr[ix] = v;
    return runtime.Unit
  }
};
ztest_lambda$_lambda_tabulateCM$tabulateCM = function ztest_lambda$_lambda_tabulateCM$tabulateCM(nrows, ncols, f) {
  let nelts, arr, delta, id, param1, param2, param3, param4, param5, param6, param7, param8, tmp, arr1, i, n, x, inlinedVal;
  nelts = zern1[chkSize$accessorSymbol](nrows, ncols);
  tmp = [];
  arr1 = tmp;
  i = 0;
  n = nelts;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp1;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal = arr1;
        break inlinedLbl
      }
      arr1[i] = x;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  arr = inlinedVal;
  delta = nelts - 1;
  id = 1;
  param1 = nrows;
  param2 = ncols;
  param3 = f;
  param4 = inlinedVal;
  param5 = delta;
  param6 = 0;
  param7 = 0;
  param8 = 0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      switch (id) {
        case 0:
          {
            let scrut;
            scrut = param7 < param2;
            if (scrut === true) {
              param6 = 0;
              id = 1;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        case 1:
          {
            let scrut, tmp1, tmp2, tmp3, tmp4, tmp5;
            scrut = param6 < param1;
            if (scrut === true) {
              tmp1 = runtime.safeCall(param3(param6, param7));
              param4[param8] = tmp1;
              tmp2 = param6 + 1;
              tmp3 = param8 + param2;
              param6 = tmp2;
              param8 = tmp3;
              id = 1;
              continue loopLabel1
            }
            tmp4 = param7 + 1;
            tmp5 = param8 - param5;
            param6 = 0;
            param7 = tmp4;
            param8 = tmp5;
            id = 0;
            continue loopLabel1;
          }
      }
    }
  }
  return zern1.Arr2(arr, undefined, undefined, undefined)
};
ztest_lambda$_lambda_tabulateRM$tabulateRM = function ztest_lambda$_lambda_tabulateRM$tabulateRM(nrows, ncols, f) {
  let nelts, arr, id, param1, param2, param3, param4, param5, param6, param7, tmp, arr1, i, n, x, inlinedVal;
  nelts = zern1[chkSize$accessorSymbol](nrows, ncols);
  tmp = [];
  arr1 = tmp;
  i = 0;
  n = nelts;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp1;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal = arr1;
        break inlinedLbl
      }
      arr1[i] = x;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  arr = inlinedVal;
  id = 1;
  param1 = nrows;
  param2 = ncols;
  param3 = f;
  param4 = inlinedVal;
  param5 = 0;
  param6 = 0;
  param7 = 0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      switch (id) {
        case 0:
          {
            let scrut;
            scrut = param5 < param1;
            if (scrut === true) {
              param6 = 0;
              id = 1;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        case 1:
          {
            let scrut, tmp1, tmp2, tmp3, tmp4;
            scrut = param6 < param2;
            if (scrut === true) {
              tmp1 = runtime.safeCall(param3(param5, param6));
              param4[param7] = tmp1;
              tmp2 = param6 + 1;
              tmp3 = param7 + 1;
              param6 = tmp2;
              param7 = tmp3;
              id = 1;
              continue loopLabel1
            }
            tmp4 = param5 + 1;
            param5 = tmp4;
            param6 = 0;
            id = 0;
            continue loopLabel1;
          }
      }
    }
  }
  return zern1.Arr2(arr, undefined, undefined, undefined)
};
main_ztest_lambda$_lambda_tabulateRM$tabulateRM = function main_ztest_lambda$_lambda_tabulateRM$tabulateRM(nrows, ncols, f) {
  let nelts, arr, id, param1, param2, param3, param4, param5, param6, param7, tmp, arr1, i, n, x, inlinedVal;
  nelts = zern1[chkSize$accessorSymbol](nrows, ncols);
  tmp = [];
  arr1 = tmp;
  i = 0;
  n = nelts;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp1;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal = arr1;
        break inlinedLbl
      }
      arr1[i] = x;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  arr = inlinedVal;
  id = 1;
  param1 = nrows;
  param2 = ncols;
  param3 = f;
  param4 = inlinedVal;
  param5 = 0;
  param6 = 0;
  param7 = 0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      switch (id) {
        case 0:
          {
            let scrut;
            scrut = param5 < param1;
            if (scrut === true) {
              param6 = 0;
              id = 1;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        case 1:
          {
            let scrut, tmp1, tmp2, tmp3, tmp4;
            scrut = param6 < param2;
            if (scrut === true) {
              tmp1 = runtime.safeCall(param3(param5, param6));
              param4[param7] = tmp1;
              tmp2 = param6 + 1;
              tmp3 = param7 + 1;
              param6 = tmp2;
              param7 = tmp3;
              id = 1;
              continue loopLabel1
            }
            tmp4 = param5 + 1;
            param5 = tmp4;
            param6 = 0;
            id = 0;
            continue loopLabel1;
          }
      }
    }
  }
  return zern1.Arr2(arr, undefined, undefined, undefined)
};
main_ztest_lambda$_lambda_tabulateCM$tabulateCM = function main_ztest_lambda$_lambda_tabulateCM$tabulateCM(nrows, ncols, f) {
  let nelts, arr, delta, id, param1, param2, param3, param4, param5, param6, param7, param8, tmp, arr1, i, n, x, inlinedVal;
  nelts = zern1[chkSize$accessorSymbol](nrows, ncols);
  tmp = [];
  arr1 = tmp;
  i = 0;
  n = nelts;
  x = 0.0;
  inlinedLbl: {
    loopLabel: while (true) {
      let scrut, tmp1;
      scrut = i == n;
      if (scrut === true) {
        inlinedVal = arr1;
        break inlinedLbl
      }
      arr1[i] = x;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel;
    }
  }
  arr = inlinedVal;
  delta = nelts - 1;
  id = 1;
  param1 = nrows;
  param2 = ncols;
  param3 = f;
  param4 = inlinedVal;
  param5 = delta;
  param6 = 0;
  param7 = 0;
  param8 = 0;
  inlinedLbl1: {
    loopLabel1: while (true) {
      switch (id) {
        case 0:
          {
            let scrut;
            scrut = param7 < param2;
            if (scrut === true) {
              param6 = 0;
              id = 1;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        case 1:
          {
            let scrut, tmp1, tmp2, tmp3, tmp4, tmp5;
            scrut = param6 < param1;
            if (scrut === true) {
              tmp1 = runtime.safeCall(param3(param6, param7));
              param4[param8] = tmp1;
              tmp2 = param6 + 1;
              tmp3 = param8 + param2;
              param6 = tmp2;
              param8 = tmp3;
              id = 1;
              continue loopLabel1
            }
            tmp4 = param7 + 1;
            tmp5 = param8 - param5;
            param6 = 0;
            param7 = tmp4;
            param8 = tmp5;
            id = 0;
            continue loopLabel1;
          }
      }
    }
  }
  return zern1.Arr2(arr, undefined, undefined, undefined)
};
lambda$1 = (undefined, function (sf) {
  return (vdst, vsrc) => {
    let tmp;
    tmp = sf * vsrc;
    return vdst + tmp
  }
});
lambda$ = (undefined, function (sf) {
  return (vsrc) => {
    return sf * vsrc
  }
});
(class zern {
  static {
    zern1 = this
  }
  static get [dotimes$accessorSymbol]() { return zern.#dotimes; }
  static get [chkSize$accessorSymbol]() { return zern.#chkSize; }
  static {
    zern.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        zern.Cons.class = this
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
        zern.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    zern.Arr2 = function Arr2(data_, nrows, ncols, nelts) {
      return globalThis.Object.freeze(new Arr2.class(data_, nrows, ncols, nelts));
    };
    (class Arr2 {
      static {
        zern.Arr2.class = this
      }
      constructor(data_, nrows, ncols, nelts) {
        this.data_ = data_;
        this.nrows = nrows;
        this.ncols = ncols;
        this.nelts = nelts;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Arr2", ["data_", "nrows", "ncols", "nelts"]];
    });
    (class RowMajor {
      static {
        new this
      }
      constructor() {
        zern.RowMajor = this;
        Object.defineProperty(this, "class", {
          value: RowMajor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RowMajor"];
    });
    (class ColMajor {
      static {
        new this
      }
      constructor() {
        zern.ColMajor = this;
        Object.defineProperty(this, "class", {
          value: ColMajor
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ColMajor"];
    });
  }
  static #listPairApp$tailrec(f, l1, l2) {
    loopLabel: while (true) {
      let arg$Cons$0$, arg$Cons$1$, arg$Cons$0$1, arg$Cons$1$1;
      if (l1 instanceof zern.Cons.class) {
        arg$Cons$0$ = l1.head;
        arg$Cons$1$ = l1.tail;
        if (l2 instanceof zern.Cons.class) {
          arg$Cons$0$1 = l2.head;
          arg$Cons$1$1 = l2.tail;
          runtime.safeCall(f(arg$Cons$0$, arg$Cons$0$1));
          l1 = arg$Cons$1$;
          l2 = arg$Cons$1$1;
          continue loopLabel
        }
        return runtime.Unit;
      }
      return runtime.Unit;
    }
  }
  static #sin(x) {
    return runtime.safeCall(globalThis.Math.sin(x))
  }
  static #cos(x) {
    return runtime.safeCall(globalThis.Math.cos(x))
  }
  static #real(i) {
    return i
  }
  static #listHd(l) {
    if (l instanceof zern.Cons.class) {
      return l.head
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listTl(l) {
    if (l instanceof zern.Cons.class) {
      return l.tail
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #listPairApp(f) {
    return (l1, l2) => {
      return zern.#listPairApp$tailrec(f, l1, l2)
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
  static #unsafeUpdate(a, i, x) {
    a[i] = x;
    return runtime.Unit
  }
  static #unsafeSub(a, i) {
    return a.at(i)
  }
  static #mkRawArray(n) {
    let tmp;
    tmp = [];
    return zern.#fillArray(tmp, 0, n, 0.0)
  }
  static #dotimes(n) {
    return (f) => {
      let n1, f1, k, inlinedVal;
      n1 = n;
      f1 = f;
      k = 0;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, tmp;
          scrut = k >= n1;
          if (scrut === true) {
            inlinedVal = runtime.Unit;
            break inlinedLbl
          }
          runtime.safeCall(f1(k));
          tmp = k + 1;
          k = tmp;
          continue loopLabel;
        }
      }
      return inlinedVal
    }
  }
  static #mkArray(n, v) {
    let arr, lambda$here;
    arr = zern.#mkRawArray(n);
    lambda$here = mkArray_lambda$$lambda$(v, arr);
    zern.#dotimes(n)(lambda$here);
    return arr
  }
  static #ltu(i, limit) {
    let tmp;
    tmp = i >= 0;
    if (tmp === true) {
      return i < limit
    }
    return false;
  }
  static #unsafeIndex(arr, i, j) {
    let arg$Arr2$2$, tmp;
    if (arr instanceof zern.Arr2.class) {
      arg$Arr2$2$ = arr.ncols;
      tmp = i * arg$Arr2$2$;
      return tmp + j
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #index(arr, i, j) {
    let arg$Arr2$1$, arg$Arr2$2$, tmp, tmp1;
    if (arr instanceof zern.Arr2.class) {
      arg$Arr2$1$ = arr.nrows;
      arg$Arr2$2$ = arr.ncols;
      tmp = zern.#ltu(i, arg$Arr2$1$);
      if (tmp === true) {
        tmp1 = zern.#ltu(j, arg$Arr2$2$);
        if (tmp1 === true) {
          return zern.#unsafeIndex(arr, i, j)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #max_length() {
    return 16777216
  }
  static #chkSize(nrows, ncols) {
    let n, scrut, tmp, tmp1, tmp2;
    tmp = nrows > 0;
    if (tmp === true) {
      tmp1 = ncols > 0;
      if (tmp1 === true) {
        n = nrows * ncols;
        tmp2 = zern.#max_length();
        scrut = n <= tmp2;
        if (scrut === true) {
          return n
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #array(nrows, ncols, v) {
    let nelts, lambda$here, tmp, arr, i, n, x, inlinedVal;
    nelts = zern.#chkSize(nrows, ncols);
    tmp = [];
    arr = tmp;
    i = 0;
    n = nelts;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp1;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp1 = i + 1;
        i = tmp1;
        continue loopLabel;
      }
    }
    lambda$here = array_mkArray_lambda$$lambda$(v, inlinedVal);
    zern1.#dotimes(nelts)(lambda$here);
    return zern.Arr2(inlinedVal, nrows, ncols, nelts)
  }
  static #tabulateRM(nrows, ncols, f) {
    let nelts, arr, id, param1, param2, param3, param4, param5, param6, param7;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    id = 1;
    param1 = nrows;
    param2 = ncols;
    param3 = f;
    param4 = arr;
    param5 = 0;
    param6 = 0;
    param7 = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        switch (id) {
          case 0:
            {
              let scrut;
              scrut = param5 < param1;
              if (scrut === true) {
                param6 = 0;
                id = 1;
                continue loopLabel
              }
              break inlinedLbl;
            }
          case 1:
            {
              let scrut, tmp, tmp1, tmp2, tmp3;
              scrut = param6 < param2;
              if (scrut === true) {
                tmp = runtime.safeCall(param3(param5, param6));
                param4[param7] = tmp;
                tmp1 = param6 + 1;
                tmp2 = param7 + 1;
                param6 = tmp1;
                param7 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = param5 + 1;
              param5 = tmp3;
              param6 = 0;
              id = 0;
              continue loopLabel;
            }
        }
      }
    }
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #tabulateCM(nrows, ncols, f) {
    let nelts, arr, delta, id, param1, param2, param3, param4, param5, param6, param7, param8;
    nelts = zern.#chkSize(nrows, ncols);
    arr = zern.#mkRawArray(nelts);
    delta = nelts - 1;
    id = 1;
    param1 = nrows;
    param2 = ncols;
    param3 = f;
    param4 = arr;
    param5 = delta;
    param6 = 0;
    param7 = 0;
    param8 = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        switch (id) {
          case 0:
            {
              let scrut;
              scrut = param7 < param2;
              if (scrut === true) {
                param6 = 0;
                id = 1;
                continue loopLabel
              }
              break inlinedLbl;
            }
          case 1:
            {
              let scrut, tmp, tmp1, tmp2, tmp3, tmp4;
              scrut = param6 < param1;
              if (scrut === true) {
                tmp = runtime.safeCall(param3(param6, param7));
                param4[param8] = tmp;
                tmp1 = param6 + 1;
                tmp2 = param8 + param2;
                param6 = tmp1;
                param8 = tmp2;
                id = 1;
                continue loopLabel
              }
              tmp3 = param7 + 1;
              tmp4 = param8 - param5;
              param6 = 0;
              param7 = tmp3;
              param8 = tmp4;
              id = 0;
              continue loopLabel;
            }
        }
      }
    }
    return zern.Arr2(arr, nrows, ncols, nelts)
  }
  static #tabulate(t) {
    if (t instanceof zern.RowMajor.class) {
      return zern.#tabulateRM
    } else if (t instanceof zern.ColMajor.class) {
      return zern.#tabulateCM
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #sub(a, i, j) {
    let arg$Arr2$0$, tmp;
    if (a instanceof zern.Arr2.class) {
      arg$Arr2$0$ = a.data_;
      tmp = zern.#index(a, i, j);
      return zern.#unsafeSub(arg$Arr2$0$, tmp)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #binop(d, s1, s2, f) {
    let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
    if (d instanceof zern.Arr2.class) {
      arg$Arr2$0$ = d.data_;
      arg$Arr2$3$ = d.nelts;
      if (s1 instanceof zern.Arr2.class) {
        arg$Arr2$0$1 = s1.data_;
        if (s2 instanceof zern.Arr2.class) {
          arg$Arr2$0$2 = s2.data_;
          lambda$here = binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
          return zern.#dotimes(arg$Arr2$3$)(lambda$here)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #unop(d, s, f) {
    let arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here;
    if (d instanceof zern.Arr2.class) {
      arg$Arr2$0$ = d.data_;
      arg$Arr2$3$ = d.nelts;
      if (s instanceof zern.Arr2.class) {
        arg$Arr2$0$1 = s.data_;
        lambda$here = unop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1);
        return zern.#dotimes(arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #collect(n) {
    return (f) => {
      let l, zern2, f1, n1, l1, inlinedVal;
      l = zern.Nil;
      zern2 = zern;
      f1 = f;
      n1 = n;
      l1 = l;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut, tmp, tmp1, tmp2;
          scrut = n1 == 0;
          if (scrut === true) {
            inlinedVal = l1;
            break inlinedLbl
          }
          tmp = n1 - 1;
          tmp1 = runtime.safeCall(f1(n1));
          tmp2 = zern2.Cons(tmp1, l1);
          n1 = tmp;
          l1 = tmp2;
          continue loopLabel;
        }
      }
      return inlinedVal
    }
  }
  static #ncoefs() {
    return 15
  }
  static #nx() {
    return 128
  }
  static #ny() {
    return zern.#nx()
  }
  static #mulsv(dst, sf, a) {
    let f, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here;
    f = lambda$(sf);
    if (dst instanceof zern1.Arr2.class) {
      arg$Arr2$0$ = dst.data_;
      arg$Arr2$3$ = dst.nelts;
      if (a instanceof zern1.Arr2.class) {
        arg$Arr2$0$1 = a.data_;
        lambda$here = mulsv_unop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1);
        return zern1.#dotimes(arg$Arr2$3$)(lambda$here)
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #cisv(a, rpart, ipart) {
    let f, f1, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here, arg$Arr2$0$2, arg$Arr2$3$1, arg$Arr2$0$3, lambda$here1;
    f = zern.#cos;
    if (rpart instanceof zern1.Arr2.class) {
      arg$Arr2$0$2 = rpart.data_;
      arg$Arr2$3$1 = rpart.nelts;
      if (a instanceof zern1.Arr2.class) {
        arg$Arr2$0$3 = a.data_;
        lambda$here1 = cisv_unop_lambda$$lambda$(f, arg$Arr2$0$2, arg$Arr2$0$3);
        zern1.#dotimes(arg$Arr2$3$1)(lambda$here1);
        f1 = zern.#sin;
        if (ipart instanceof zern1.Arr2.class) {
          arg$Arr2$0$ = ipart.data_;
          arg$Arr2$3$ = ipart.nelts;
          if (a instanceof zern1.Arr2.class) {
            arg$Arr2$0$1 = a.data_;
            lambda$here = cisv_unop_lambda$$lambda$1(f1, arg$Arr2$0$, arg$Arr2$0$1);
            zern1.#dotimes(arg$Arr2$3$)(lambda$here);
            return globalThis.Object.freeze([
              rpart,
              ipart
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
  static #mpadd(dst) {
    return (sf, src) => {
      let f, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, arg$Arr2$0$2, lambda$here;
      f = lambda$1(sf);
      if (dst instanceof zern1.Arr2.class) {
        arg$Arr2$0$ = dst.data_;
        arg$Arr2$3$ = dst.nelts;
        if (dst instanceof zern1.Arr2.class) {
          arg$Arr2$0$1 = dst.data_;
          if (src instanceof zern1.Arr2.class) {
            arg$Arr2$0$2 = src.data_;
            lambda$here = mpadd_binop_lambda$$lambda$(f, arg$Arr2$0$, arg$Arr2$0$1, arg$Arr2$0$2);
            return zern1.#dotimes(arg$Arr2$3$)(lambda$here)
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
  }
  static #zern(dst, rpart, ipart, coefs, zerns) {
    let tmp, tmp1, tmp2, tmp3, tmp4, f, f1, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here, arg$Arr2$0$2, arg$Arr2$3$1, arg$Arr2$0$3, lambda$here1, f2, arg$Arr2$0$4, arg$Arr2$3$2, arg$Arr2$0$5, lambda$here2;
    tmp = zern.#listHd(coefs);
    tmp1 = zern.#listHd(zerns);
    f2 = lambda$(tmp);
    if (dst instanceof zern1.Arr2.class) {
      arg$Arr2$0$4 = dst.data_;
      arg$Arr2$3$2 = dst.nelts;
      if (tmp1 instanceof zern1.Arr2.class) {
        arg$Arr2$0$5 = tmp1.data_;
        lambda$here2 = zern_mulsv_unop_lambda$$lambda$(f2, arg$Arr2$0$4, arg$Arr2$0$5);
        zern1.#dotimes(arg$Arr2$3$2)(lambda$here2);
        tmp2 = zern_mpadd$mpadd(dst);
        tmp3 = zern.#listTl(coefs);
        tmp4 = zern.#listTl(zerns);
        zern.#listPairApp(tmp2)(tmp3, tmp4);
        f = zern1.#cos;
        if (rpart instanceof zern1.Arr2.class) {
          arg$Arr2$0$ = rpart.data_;
          arg$Arr2$3$ = rpart.nelts;
          if (dst instanceof zern1.Arr2.class) {
            arg$Arr2$0$1 = dst.data_;
            lambda$here = zern_cisv_unop_lambda$$lambda$1(f, arg$Arr2$0$, arg$Arr2$0$1);
            zern1.#dotimes(arg$Arr2$3$)(lambda$here);
            f1 = zern1.#sin;
            if (ipart instanceof zern1.Arr2.class) {
              arg$Arr2$0$2 = ipart.data_;
              arg$Arr2$3$1 = ipart.nelts;
              if (dst instanceof zern1.Arr2.class) {
                arg$Arr2$0$3 = dst.data_;
                lambda$here1 = zern_cisv_unop_lambda$$lambda$(f1, arg$Arr2$0$2, arg$Arr2$0$3);
                zern1.#dotimes(arg$Arr2$3$1)(lambda$here1);
                return globalThis.Object.freeze([
                  rpart,
                  ipart
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
  static #ztest() {
    let coefs, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, element0$, lambda$here, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, f, inlinedVal7, nelts, lambda$here1, tmp8, nelts1, lambda$here2, tmp9, nelts2, lambda$here3, tmp10, arr, i, n, x, inlinedVal8, arr1, i1, n1, x1, inlinedVal9, arr2, i2, n2, x2, inlinedVal10, l, zern2, f1, n3, l1, inlinedVal11;
    tmp = zern.#ny();
    tmp1 = zern.#nx();
    nelts2 = zern1.#chkSize(tmp, tmp1);
    tmp10 = [];
    arr = tmp10;
    i = 0;
    n = nelts2;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp11;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal8 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp11 = i + 1;
        i = tmp11;
        continue loopLabel;
      }
    }
    lambda$here3 = ztest_array_mkArray_lambda$$lambda$(0.0, inlinedVal8);
    zern1.#dotimes(nelts2)(lambda$here3);
    inlinedVal = zern1.Arr2(inlinedVal8, undefined, undefined, nelts2);
    tmp2 = zern.#ny();
    tmp3 = zern.#nx();
    nelts1 = zern1.#chkSize(tmp2, tmp3);
    tmp9 = [];
    arr1 = tmp9;
    i1 = 0;
    n1 = nelts1;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut, tmp11;
        scrut = i1 == n1;
        if (scrut === true) {
          inlinedVal9 = arr1;
          break inlinedLbl1
        }
        arr1[i1] = x1;
        tmp11 = i1 + 1;
        i1 = tmp11;
        continue loopLabel1;
      }
    }
    lambda$here2 = ztest_array_mkArray_lambda$$lambda$1(0.0, inlinedVal9);
    zern1.#dotimes(nelts1)(lambda$here2);
    inlinedVal1 = zern1.Arr2(inlinedVal9, tmp2, tmp3, nelts1);
    tmp4 = zern.#ny();
    tmp5 = zern.#nx();
    nelts = zern1.#chkSize(tmp4, tmp5);
    tmp8 = [];
    arr2 = tmp8;
    i2 = 0;
    n2 = nelts;
    x2 = 0.0;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut, tmp11;
        scrut = i2 == n2;
        if (scrut === true) {
          inlinedVal10 = arr2;
          break inlinedLbl2
        }
        arr2[i2] = x2;
        tmp11 = i2 + 1;
        i2 = tmp11;
        continue loopLabel2;
      }
    }
    lambda$here1 = ztest_array_mkArray_lambda$$lambda$2(0.0, inlinedVal10);
    zern1.#dotimes(nelts)(lambda$here1);
    inlinedVal2 = zern1.Arr2(inlinedVal10, undefined, undefined, nelts);
    tmp6 = zern.#ncoefs();
    lambda$here = ztest_lambda$$lambda$();
    coefs = zern.#collect(tmp6)(lambda$here);
    tmp7 = zern.#ncoefs();
    l = zern1.Nil;
    zern2 = zern1;
    f1 = ztest_lambda$$lambda$1(zern);
    n3 = tmp7;
    l1 = l;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut, tmp11, tmp12, tmp13;
        scrut = n3 == 0;
        if (scrut === true) {
          inlinedVal11 = l1;
          break inlinedLbl3
        }
        tmp11 = n3 - 1;
        tmp12 = runtime.safeCall(f1());
        tmp13 = zern2.Cons(tmp12, l1);
        n3 = tmp11;
        l1 = tmp13;
        continue loopLabel3;
      }
    }
    if (coefs instanceof zern1.Cons.class) {
      inlinedVal3 = coefs.head;
      if (inlinedVal11 instanceof zern1.Cons.class) {
        let f2, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here4;
        inlinedVal4 = inlinedVal11.head;
        f2 = lambda$(inlinedVal3);
        if (inlinedVal instanceof zern1.Arr2.class) {
          arg$Arr2$0$ = inlinedVal.data_;
          arg$Arr2$3$ = inlinedVal.nelts;
          if (inlinedVal4 instanceof zern1.Arr2.class) {
            arg$Arr2$0$1 = inlinedVal4.data_;
            lambda$here4 = ztest_zern_mulsv_unop_lambda$$lambda$(f2, arg$Arr2$0$, arg$Arr2$0$1);
            zern1.#dotimes(arg$Arr2$3$)(lambda$here4);
            if (coefs instanceof zern1.Cons.class) {
              inlinedVal5 = coefs.tail;
              if (inlinedVal11 instanceof zern1.Cons.class) {
                let f3, f4, arg$Arr2$0$2, arg$Arr2$3$1, arg$Arr2$0$3, lambda$here5, arg$Arr2$0$4, arg$Arr2$3$2, arg$Arr2$0$5, lambda$here6;
                inlinedVal6 = inlinedVal11.tail;
                f = ztest_zern_mpadd$mpadd(inlinedVal);
                zern1.#listPairApp$tailrec(f, inlinedVal5, inlinedVal6);
                f3 = zern1.#cos;
                if (inlinedVal1 instanceof zern1.Arr2.class) {
                  arg$Arr2$0$2 = inlinedVal1.data_;
                  arg$Arr2$3$1 = inlinedVal1.nelts;
                  if (inlinedVal instanceof zern1.Arr2.class) {
                    arg$Arr2$0$3 = inlinedVal.data_;
                    lambda$here5 = ztest_zern_cisv_unop_lambda$$lambda$(f3, arg$Arr2$0$2, arg$Arr2$0$3);
                    zern1.#dotimes(arg$Arr2$3$1)(lambda$here5);
                    f4 = zern1.#sin;
                    if (inlinedVal2 instanceof zern1.Arr2.class) {
                      arg$Arr2$0$4 = inlinedVal2.data_;
                      arg$Arr2$3$2 = inlinedVal2.nelts;
                      if (inlinedVal instanceof zern1.Arr2.class) {
                        arg$Arr2$0$5 = inlinedVal.data_;
                        lambda$here6 = ztest_zern_cisv_unop_lambda$$lambda$1(f4, arg$Arr2$0$4, arg$Arr2$0$5);
                        zern1.#dotimes(arg$Arr2$3$2)(lambda$here6);
                        inlinedVal7 = globalThis.Object.freeze([
                          inlinedVal1,
                          inlinedVal2
                        ]);
                        if (runtime.Tuple.isArrayLike(inlinedVal7) && inlinedVal7.length === 2) {
                          element0$ = runtime.Tuple.get(inlinedVal7, 0);
                          return zern.#sub(element0$, 0, 1)
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
  static main() {
    let coefs, element0$, lambda$here, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, nelts, lambda$here1, tmp, nelts1, lambda$here2, tmp1, nelts2, lambda$here3, tmp2, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, f, inlinedVal8, arr, i, n, x, inlinedVal9, arr1, i1, n1, x1, inlinedVal10, arr2, i2, n2, x2, inlinedVal11, l, zern2, f1, n3, l1, inlinedVal12;
    nelts = zern1.#chkSize(128, 128);
    tmp = [];
    arr = tmp;
    i = 0;
    n = nelts;
    x = 0.0;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, tmp3;
        scrut = i == n;
        if (scrut === true) {
          inlinedVal9 = arr;
          break inlinedLbl
        }
        arr[i] = x;
        tmp3 = i + 1;
        i = tmp3;
        continue loopLabel;
      }
    }
    lambda$here1 = main_ztest_array_mkArray_lambda$$lambda$2(0.0, inlinedVal9);
    zern1.#dotimes(nelts)(lambda$here1);
    inlinedVal = zern1.Arr2(inlinedVal9, undefined, undefined, nelts);
    inlinedVal1 = 128;
    nelts1 = zern1.#chkSize(128, 128);
    tmp1 = [];
    arr1 = tmp1;
    i1 = 0;
    n1 = nelts1;
    x1 = 0.0;
    inlinedLbl1: {
      loopLabel1: while (true) {
        let scrut, tmp3;
        scrut = i1 == n1;
        if (scrut === true) {
          inlinedVal10 = arr1;
          break inlinedLbl1
        }
        arr1[i1] = x1;
        tmp3 = i1 + 1;
        i1 = tmp3;
        continue loopLabel1;
      }
    }
    lambda$here2 = main_ztest_array_mkArray_lambda$$lambda$1(0.0, inlinedVal10);
    zern1.#dotimes(nelts1)(lambda$here2);
    inlinedVal2 = zern1.Arr2(inlinedVal10, inlinedVal1, 128, nelts1);
    nelts2 = zern1.#chkSize(128, 128);
    tmp2 = [];
    arr2 = tmp2;
    i2 = 0;
    n2 = nelts2;
    x2 = 0.0;
    inlinedLbl2: {
      loopLabel2: while (true) {
        let scrut, tmp3;
        scrut = i2 == n2;
        if (scrut === true) {
          inlinedVal11 = arr2;
          break inlinedLbl2
        }
        arr2[i2] = x2;
        tmp3 = i2 + 1;
        i2 = tmp3;
        continue loopLabel2;
      }
    }
    lambda$here3 = main_ztest_array_mkArray_lambda$$lambda$(0.0, inlinedVal11);
    zern1.#dotimes(nelts2)(lambda$here3);
    inlinedVal3 = zern1.Arr2(inlinedVal11, undefined, undefined, nelts2);
    lambda$here = main_ztest_lambda$$lambda$1();
    coefs = zern1.#collect(15)(lambda$here);
    l = zern1.Nil;
    zern2 = zern1;
    f1 = main_ztest_lambda$$lambda$(zern1);
    n3 = 15;
    l1 = l;
    inlinedLbl3: {
      loopLabel3: while (true) {
        let scrut, tmp3, tmp4, tmp5;
        scrut = n3 == 0;
        if (scrut === true) {
          inlinedVal12 = l1;
          break inlinedLbl3
        }
        tmp3 = n3 - 1;
        tmp4 = runtime.safeCall(f1());
        tmp5 = zern2.Cons(tmp4, l1);
        n3 = tmp3;
        l1 = tmp5;
        continue loopLabel3;
      }
    }
    if (coefs instanceof zern1.Cons.class) {
      inlinedVal4 = coefs.head;
      if (inlinedVal12 instanceof zern1.Cons.class) {
        let f2, arg$Arr2$0$, arg$Arr2$3$, arg$Arr2$0$1, lambda$here4;
        inlinedVal5 = inlinedVal12.head;
        f2 = lambda$(inlinedVal4);
        if (inlinedVal instanceof zern1.Arr2.class) {
          arg$Arr2$0$ = inlinedVal.data_;
          arg$Arr2$3$ = inlinedVal.nelts;
          if (inlinedVal5 instanceof zern1.Arr2.class) {
            arg$Arr2$0$1 = inlinedVal5.data_;
            lambda$here4 = main_ztest_zern_mulsv_unop_lambda$$lambda$(f2, arg$Arr2$0$, arg$Arr2$0$1);
            zern1.#dotimes(arg$Arr2$3$)(lambda$here4);
            if (coefs instanceof zern1.Cons.class) {
              inlinedVal6 = coefs.tail;
              if (inlinedVal12 instanceof zern1.Cons.class) {
                let f3, f4, arg$Arr2$0$2, arg$Arr2$3$1, arg$Arr2$0$3, lambda$here5, arg$Arr2$0$4, arg$Arr2$3$2, arg$Arr2$0$5, lambda$here6;
                inlinedVal7 = inlinedVal12.tail;
                f = main_ztest_zern_mpadd$mpadd(inlinedVal);
                zern1.#listPairApp$tailrec(f, inlinedVal6, inlinedVal7);
                f3 = zern1.#cos;
                if (inlinedVal2 instanceof zern1.Arr2.class) {
                  arg$Arr2$0$2 = inlinedVal2.data_;
                  arg$Arr2$3$1 = inlinedVal2.nelts;
                  if (inlinedVal instanceof zern1.Arr2.class) {
                    arg$Arr2$0$3 = inlinedVal.data_;
                    lambda$here5 = main_ztest_zern_cisv_unop_lambda$$lambda$1(f3, arg$Arr2$0$2, arg$Arr2$0$3);
                    zern1.#dotimes(arg$Arr2$3$1)(lambda$here5);
                    f4 = zern1.#sin;
                    if (inlinedVal3 instanceof zern1.Arr2.class) {
                      arg$Arr2$0$4 = inlinedVal3.data_;
                      arg$Arr2$3$2 = inlinedVal3.nelts;
                      if (inlinedVal instanceof zern1.Arr2.class) {
                        arg$Arr2$0$5 = inlinedVal.data_;
                        lambda$here6 = main_ztest_zern_cisv_unop_lambda$$lambda$(f4, arg$Arr2$0$4, arg$Arr2$0$5);
                        zern1.#dotimes(arg$Arr2$3$2)(lambda$here6);
                        inlinedVal8 = globalThis.Object.freeze([
                          inlinedVal2,
                          inlinedVal3
                        ]);
                        if (runtime.Tuple.isArrayLike(inlinedVal8) && inlinedVal8.length === 2) {
                          let arg$Arr2$0$6, tmp3;
                          element0$ = runtime.Tuple.get(inlinedVal8, 0);
                          if (element0$ instanceof zern1.Arr2.class) {
                            arg$Arr2$0$6 = element0$.data_;
                            tmp3 = zern1.#index(element0$, 0, 1);
                            return arg$Arr2$0$6.at(tmp3)
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
  static [definitionMetadata] = ["class", "zern"];
});
export { zern1 as _$_modulePrivate_$_zern };
export { lambda$ as _$_modulePrivate_$_lambda$ };
export { lambda$1 as _$_modulePrivate_$_lambda$1 };
export { main_ztest_zern_mulsv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_zern_mulsv_unop_lambda$_lambda$lambda };
export { main_ztest_zern_mulsv_unop_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_zern_mulsv_unop_lambda$$lambda$ };
export { main_ztest_zern_mpadd_binop_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_zern_mpadd_binop_lambda$_lambda$lambda };
export { main_ztest_zern_mpadd_binop_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_zern_mpadd_binop_lambda$$lambda$ };
export { main_ztest_zern_mpadd_binop$binop as _$_modulePrivate_$_main_ztest_zern_mpadd_binop$binop };
export { main_ztest_zern_mpadd$mpadd as _$_modulePrivate_$_main_ztest_zern_mpadd$mpadd };
export { main_ztest_zern_cisv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_zern_cisv_unop_lambda$_lambda$lambda };
export { main_ztest_zern_cisv_unop_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_zern_cisv_unop_lambda$$lambda$ };
export { main_ztest_zern_cisv_unop_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_ztest_zern_cisv_unop_lambda$_lambda$lambda1 };
export { main_ztest_zern_cisv_unop_lambda$$lambda$1 as _$_modulePrivate_$_main_ztest_zern_cisv_unop_lambda$$lambda$1 };
export { main_ztest_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_lambda$_lambda_lambda$_lambda$lambda };
export { main_ztest_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_lambda$_lambda_lambda$$lambda$ };
export { main_ztest_lambda$_lambda$lambda as _$_modulePrivate_$_main_ztest_lambda$_lambda$lambda };
export { main_ztest_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_lambda$$lambda$ };
export { main_ztest_lambda$$lambda$1 as _$_modulePrivate_$_main_ztest_lambda$$lambda$1 };
export { main_ztest_array_mkArray_lambda$$lambda$ as _$_modulePrivate_$_main_ztest_array_mkArray_lambda$$lambda$ };
export { main_ztest_array_mkArray_lambda$$lambda$1 as _$_modulePrivate_$_main_ztest_array_mkArray_lambda$$lambda$1 };
export { main_ztest_array_mkArray_lambda$$lambda$2 as _$_modulePrivate_$_main_ztest_array_mkArray_lambda$$lambda$2 };
export { ztest_array_mkArray_lambda$$lambda$ as _$_modulePrivate_$_ztest_array_mkArray_lambda$$lambda$ };
export { ztest_array_mkArray_lambda$$lambda$1 as _$_modulePrivate_$_ztest_array_mkArray_lambda$$lambda$1 };
export { ztest_array_mkArray_lambda$$lambda$2 as _$_modulePrivate_$_ztest_array_mkArray_lambda$$lambda$2 };
export { ztest_lambda$$lambda$ as _$_modulePrivate_$_ztest_lambda$$lambda$ };
export { ztest_lambda$_lambda_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_lambda$_lambda_lambda$_lambda$lambda };
export { ztest_lambda$_lambda_lambda$$lambda$ as _$_modulePrivate_$_ztest_lambda$_lambda_lambda$$lambda$ };
export { ztest_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_lambda$_lambda$lambda };
export { ztest_lambda$$lambda$1 as _$_modulePrivate_$_ztest_lambda$$lambda$1 };
export { ztest_zern_cisv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_zern_cisv_unop_lambda$_lambda$lambda };
export { ztest_zern_cisv_unop_lambda$$lambda$ as _$_modulePrivate_$_ztest_zern_cisv_unop_lambda$$lambda$ };
export { ztest_zern_cisv_unop_lambda$_lambda$lambda1 as _$_modulePrivate_$_ztest_zern_cisv_unop_lambda$_lambda$lambda1 };
export { ztest_zern_cisv_unop_lambda$$lambda$1 as _$_modulePrivate_$_ztest_zern_cisv_unop_lambda$$lambda$1 };
export { ztest_zern_mpadd_binop_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_zern_mpadd_binop_lambda$_lambda$lambda };
export { ztest_zern_mpadd_binop_lambda$$lambda$ as _$_modulePrivate_$_ztest_zern_mpadd_binop_lambda$$lambda$ };
export { ztest_zern_mpadd_binop$binop as _$_modulePrivate_$_ztest_zern_mpadd_binop$binop };
export { ztest_zern_mpadd$mpadd as _$_modulePrivate_$_ztest_zern_mpadd$mpadd };
export { ztest_zern_mulsv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_ztest_zern_mulsv_unop_lambda$_lambda$lambda };
export { ztest_zern_mulsv_unop_lambda$$lambda$ as _$_modulePrivate_$_ztest_zern_mulsv_unop_lambda$$lambda$ };
export { zern_mulsv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_zern_mulsv_unop_lambda$_lambda$lambda };
export { zern_mulsv_unop_lambda$$lambda$ as _$_modulePrivate_$_zern_mulsv_unop_lambda$$lambda$ };
export { zern_mpadd_binop_lambda$_lambda$lambda as _$_modulePrivate_$_zern_mpadd_binop_lambda$_lambda$lambda };
export { zern_mpadd_binop_lambda$$lambda$ as _$_modulePrivate_$_zern_mpadd_binop_lambda$$lambda$ };
export { zern_mpadd_binop$binop as _$_modulePrivate_$_zern_mpadd_binop$binop };
export { zern_mpadd$mpadd as _$_modulePrivate_$_zern_mpadd$mpadd };
export { zern_cisv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_zern_cisv_unop_lambda$_lambda$lambda };
export { zern_cisv_unop_lambda$$lambda$ as _$_modulePrivate_$_zern_cisv_unop_lambda$$lambda$ };
export { zern_cisv_unop_lambda$_lambda$lambda1 as _$_modulePrivate_$_zern_cisv_unop_lambda$_lambda$lambda1 };
export { zern_cisv_unop_lambda$$lambda$1 as _$_modulePrivate_$_zern_cisv_unop_lambda$$lambda$1 };
export { mpadd_binop_lambda$_lambda$lambda as _$_modulePrivate_$_mpadd_binop_lambda$_lambda$lambda };
export { mpadd_binop_lambda$$lambda$ as _$_modulePrivate_$_mpadd_binop_lambda$$lambda$ };
export { cisv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_cisv_unop_lambda$_lambda$lambda };
export { cisv_unop_lambda$$lambda$ as _$_modulePrivate_$_cisv_unop_lambda$$lambda$ };
export { cisv_unop_lambda$_lambda$lambda1 as _$_modulePrivate_$_cisv_unop_lambda$_lambda$lambda1 };
export { cisv_unop_lambda$$lambda$1 as _$_modulePrivate_$_cisv_unop_lambda$$lambda$1 };
export { mulsv_unop_lambda$_lambda$lambda as _$_modulePrivate_$_mulsv_unop_lambda$_lambda$lambda };
export { mulsv_unop_lambda$$lambda$ as _$_modulePrivate_$_mulsv_unop_lambda$$lambda$ };
export { unop_lambda$_lambda$lambda as _$_modulePrivate_$_unop_lambda$_lambda$lambda };
export { unop_lambda$$lambda$ as _$_modulePrivate_$_unop_lambda$$lambda$ };
export { binop_lambda$_lambda$lambda as _$_modulePrivate_$_binop_lambda$_lambda$lambda };
export { binop_lambda$$lambda$ as _$_modulePrivate_$_binop_lambda$$lambda$ };
export { array_mkArray_lambda$$lambda$ as _$_modulePrivate_$_array_mkArray_lambda$$lambda$ };
export { mkArray_lambda$$lambda$ as _$_modulePrivate_$_mkArray_lambda$$lambda$ };
export { ztest_lambda$_lambda_tabulateCM$tabulateCM as _$_modulePrivate_$_ztest_lambda$_lambda_tabulateCM$tabulateCM };
export { ztest_lambda$_lambda_tabulateRM$tabulateRM as _$_modulePrivate_$_ztest_lambda$_lambda_tabulateRM$tabulateRM };
export { main_ztest_lambda$_lambda_tabulateRM$tabulateRM as _$_modulePrivate_$_main_ztest_lambda$_lambda_tabulateRM$tabulateRM };
export { main_ztest_lambda$_lambda_tabulateCM$tabulateCM as _$_modulePrivate_$_main_ztest_lambda$_lambda_tabulateCM$tabulateCM };
export default zern1;
