const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const array_alloc$accessorSymbol = globalThis.Symbol("array_alloc");
const intMin$accessorSymbol = globalThis.Symbol("intMin");
const doo$accessorSymbol = globalThis.Symbol("doo");
const vector_ref$accessorSymbol = globalThis.Symbol("vector_ref");
const vector_set$accessorSymbol = globalThis.Symbol("vector_set");
const map_n_vector$accessorSymbol = globalThis.Symbol("map_n_vector");
const negative$accessorSymbol = globalThis.Symbol("negative");
const min$accessorSymbol = globalThis.Symbol("min");
const every_n$accessorSymbol = globalThis.Symbol("every_n");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let enqueue, enqueue1, can_push_down, can_push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, cf_right, cf_down, cf_up, cf_left, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5, main_doit_make_matrix_lambda$_lambda$lambda, main_doit_make_matrix_lambda$$lambda$, main_doit_make_matrix_lambda$_lambda$lambda1, main_doit_make_matrix_lambda$$lambda$1, main_doit_make_matrix_lambda$_lambda$lambda2, main_doit_make_matrix_lambda$$lambda$2, doit_make_matrix_lambda$_lambda$lambda, doit_make_matrix_lambda$$lambda$, doit_make_matrix_lambda$_lambda$lambda1, doit_make_matrix_lambda$$lambda$1, doit_make_matrix_lambda$_lambda$lambda2, doit_make_matrix_lambda$$lambda$2, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda, doit_rao_ratio_region_make_matrix_lambda$$lambda$, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1, doit_rao_ratio_region_make_matrix_lambda$$lambda$1, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2, doit_rao_ratio_region_make_matrix_lambda$$lambda$2, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3, doit_rao_ratio_region_make_matrix_lambda$$lambda$3, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4, doit_rao_ratio_region_make_matrix_lambda$$lambda$4, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5, doit_rao_ratio_region_make_matrix_lambda$$lambda$5, rao_ratio_region_make_matrix_lambda$_lambda$lambda, rao_ratio_region_make_matrix_lambda$$lambda$, rao_ratio_region_make_matrix_lambda$_lambda$lambda1, rao_ratio_region_make_matrix_lambda$$lambda$1, rao_ratio_region_make_matrix_lambda$_lambda$lambda2, rao_ratio_region_make_matrix_lambda$$lambda$2, rao_ratio_region_make_matrix_lambda$_lambda$lambda3, rao_ratio_region_make_matrix_lambda$$lambda$3, rao_ratio_region_make_matrix_lambda$_lambda$lambda4, rao_ratio_region_make_matrix_lambda$$lambda$4, rao_ratio_region_make_matrix_lambda$_lambda$lambda5, rao_ratio_region_make_matrix_lambda$$lambda$5, make_matrix_lambda$_lambda$lambda, make_matrix_lambda$$lambda$;
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$ = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1 = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions2, n, a)
  }
};
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2 = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions2, n, a)
  }
};
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3 = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions2, n, a)
  }
};
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4 = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions2, n, a)
  }
};
main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 = function main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5 = function main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions2, n, a)
  }
};
main_doit_make_matrix_lambda$_lambda$lambda = function main_doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_make_matrix_lambda$$lambda$ = function main_doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
main_doit_make_matrix_lambda$_lambda$lambda1 = function main_doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_make_matrix_lambda$$lambda$1 = function main_doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_make_matrix_lambda$_lambda$lambda1(ratioRegions2, n, a)
  }
};
main_doit_make_matrix_lambda$_lambda$lambda2 = function main_doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_make_matrix_lambda$$lambda$2 = function main_doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return main_doit_make_matrix_lambda$_lambda$lambda2(ratioRegions2, n, a)
  }
};
doit_make_matrix_lambda$_lambda$lambda = function doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_make_matrix_lambda$$lambda$ = function doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
doit_make_matrix_lambda$_lambda$lambda1 = function doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_make_matrix_lambda$$lambda$1 = function doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_make_matrix_lambda$_lambda$lambda1(ratioRegions2, n, a)
  }
};
doit_make_matrix_lambda$_lambda$lambda2 = function doit_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_make_matrix_lambda$$lambda$2 = function doit_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_make_matrix_lambda$_lambda$lambda2(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$ = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$1 = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$2 = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$3 = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$4 = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions2, n, a)
  }
};
doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 = function doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_make_matrix_lambda$$lambda$5 = function doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$ = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda1 = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$1 = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda2 = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$2 = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda3 = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$3 = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda4 = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$4 = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions2, n, a)
  }
};
rao_ratio_region_make_matrix_lambda$_lambda$lambda5 = function rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_make_matrix_lambda$$lambda$5 = function rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions2, n, a)
  }
};
make_matrix_lambda$_lambda$lambda = function make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
make_matrix_lambda$$lambda$ = function make_matrix_lambda$$lambda$(ratioRegions2, n, a) {
  return () => {
    return make_matrix_lambda$_lambda$lambda(ratioRegions2, n, a)
  }
};
lambda$30 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  return (x) => {
    return lambda18(ratioRegions2, height, width, c_right, y, x)
  }
});
lambda18 = (undefined, function (ratioRegions2, height, width, c_right, y, x) {
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
lambda$28 = (undefined, function (ratioRegions2, height, width, c_right) {
  return (y) => {
    return lambda19(ratioRegions2, height, width, c_right, y)
  }
});
lambda$29 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  return (x) => {
    return lambda20(ratioRegions2, height, width, c_down, y, x)
  }
});
lambda20 = (undefined, function (ratioRegions2, height, width, c_down, y, x) {
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
lambda$27 = (undefined, function (ratioRegions2, height, width, c_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$29(ratioRegions2, height, width, c_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda19 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$30(ratioRegions2, height, width, c_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda$26 = (undefined, function (ratioRegions2, h, marked, m1, y) {
  return (x) => {
    return lambda(ratioRegions2, h, marked, m1, y, x)
  }
});
lambda = (undefined, function (ratioRegions2, h, marked, m1, y, x) {
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
lambda$24 = (undefined, function (ratioRegions2, width, h, marked, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$26(ratioRegions2, h, marked, m1, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$25 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y) {
  return (x) => {
    return lambda1(ratioRegions2, w, f_t, h, marked, v, q, tail, y, x)
  }
});
lambda1 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y, x) {
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
lambda$23 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$25(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
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
lambda$22 = (undefined, function (ratioRegions2, h, e, m1, y) {
  return (x) => {
    return lambda2(ratioRegions2, h, e, m1, y, x)
  }
});
lambda2 = (undefined, function (ratioRegions2, h, e, m1, y, x) {
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
lambda$16 = (undefined, function (ratioRegions2, width, h, e, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$22(ratioRegions2, h, e, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$15 = (undefined, function (ratioRegions2, q) {
  return (k) => {
    return lambda3(ratioRegions2, q, k)
  }
});
lambda$21 = (undefined, function (ratioRegions2, marked, y) {
  return (x) => {
    return lambda4(ratioRegions2, marked, y, x)
  }
});
lambda4 = (undefined, function (ratioRegions2, marked, y, x) {
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
lambda$14 = (undefined, function (ratioRegions2, width, marked) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$21(ratioRegions2, marked, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$20 = (undefined, function (ratioRegions2, h, e, marked, q, y) {
  return (x) => {
    return lambda5(ratioRegions2, h, e, marked, q, y, x)
  }
});
lambda5 = (undefined, function (ratioRegions2, h, e, marked, q, y, x) {
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
lambda$13 = (undefined, function (ratioRegions2, width, h, e, marked, q) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$20(ratioRegions2, h, e, marked, q, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$19 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (p) => {
    return lambda6(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p)
  }
});
lambda6 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p) {
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
lambda$12 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (ps) => {
    return lambda7(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, ps)
  }
});
lambda$18 = (undefined, function (ratioRegions2, marked) {
  return (p) => {
    return lambda8(ratioRegions2, marked, p)
  }
});
lambda$17 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return lambda9(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
});
lambda8 = (undefined, function (ratioRegions2, marked, p) {
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
lambda9 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, inlinedVal1, arg$Matrix$0$, tmp6, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        let ratioRegions3, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal2, inlinedVal3, inlinedVal4, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6, arg$Matrix$0$7;
        tmp = pushes.value + 1;
        pushes.value = tmp;
        ratioRegions3 = ratioRegions2;
        if (e instanceof ratioRegions3.Matrix.class) {
          let inlinedVal5, inlinedVal6, inlinedVal7;
          arg$Matrix$0$1 = e.a;
          inlinedVal5 = arg$Matrix$0$1.at(element1$);
          inlinedVal6 = inlinedVal5.at(element0$);
          tmp7 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal7 = inlinedVal6 < 0;
          if (inlinedVal7 === true) {
            inlinedVal2 = tmp7;
          } else {
            let inlinedVal8, scrut6;
            scrut6 = inlinedVal6 < tmp7;
            if (scrut6 === true) {
              inlinedVal8 = inlinedVal6;
            } else {
              inlinedVal8 = tmp7;
            }
            inlinedVal2 = inlinedVal8;
          }
          if (f_right instanceof ratioRegions3.Matrix.class) {
            let inlinedVal8, inlinedVal9;
            arg$Matrix$0$2 = f_right.a;
            inlinedVal8 = arg$Matrix$0$2.at(element1$);
            inlinedVal9 = inlinedVal8.at(element0$);
            tmp8 = inlinedVal9 + inlinedVal2;
            if (f_right instanceof ratioRegions3.Matrix.class) {
              let inlinedVal10;
              arg$Matrix$0$3 = f_right.a;
              inlinedVal10 = arg$Matrix$0$3.at(element1$);
              inlinedVal10[element0$] = tmp8;
              if (e instanceof ratioRegions3.Matrix.class) {
                let inlinedVal11, inlinedVal12, inlinedVal13;
                arg$Matrix$0$4 = e.a;
                inlinedVal11 = arg$Matrix$0$4.at(element1$);
                inlinedVal12 = inlinedVal11.at(element0$);
                inlinedVal13 = inlinedVal12 < 0;
                if (inlinedVal13 === true) {
                  inlinedVal3 = inlinedVal12;
                } else {
                  inlinedVal3 = inlinedVal12 - inlinedVal2;
                }
                if (e instanceof ratioRegions3.Matrix.class) {
                  let inlinedVal14;
                  arg$Matrix$0$5 = e.a;
                  inlinedVal14 = arg$Matrix$0$5.at(element1$);
                  inlinedVal14[element0$] = inlinedVal3;
                  tmp9 = element0$ + 1;
                  tmp10 = element0$ + 1;
                  if (e instanceof ratioRegions3.Matrix.class) {
                    let inlinedVal15, inlinedVal16, inlinedVal17;
                    arg$Matrix$0$6 = e.a;
                    inlinedVal15 = arg$Matrix$0$6.at(element1$);
                    inlinedVal16 = inlinedVal15.at(tmp10);
                    inlinedVal17 = inlinedVal16 < 0;
                    if (inlinedVal17 === true) {
                      inlinedVal4 = inlinedVal16;
                    } else {
                      inlinedVal4 = inlinedVal16 + inlinedVal2;
                    }
                    if (e instanceof ratioRegions3.Matrix.class) {
                      let inlinedVal18;
                      arg$Matrix$0$7 = e.a;
                      inlinedVal18 = arg$Matrix$0$7.at(element1$);
                      inlinedVal18[tmp9] = inlinedVal4;
                      tmp11 = element0$ + 1;
                      enqueue1(ratioRegions2, h, marked, q, element1$, tmp11);
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
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
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        let ratioRegions3, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal2, inlinedVal3, inlinedVal4, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6, arg$Matrix$0$7;
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        ratioRegions3 = ratioRegions2;
        if (e instanceof ratioRegions3.Matrix.class) {
          let inlinedVal5, inlinedVal6, inlinedVal7;
          arg$Matrix$0$1 = e.a;
          inlinedVal5 = arg$Matrix$0$1.at(element1$);
          inlinedVal6 = inlinedVal5.at(element0$);
          tmp7 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal7 = inlinedVal6 < 0;
          if (inlinedVal7 === true) {
            inlinedVal2 = tmp7;
          } else {
            let inlinedVal8, scrut6;
            scrut6 = inlinedVal6 < tmp7;
            if (scrut6 === true) {
              inlinedVal8 = inlinedVal6;
            } else {
              inlinedVal8 = tmp7;
            }
            inlinedVal2 = inlinedVal8;
          }
          tmp8 = element0$ - 1;
          tmp9 = element0$ - 1;
          if (f_right instanceof ratioRegions3.Matrix.class) {
            let inlinedVal8, inlinedVal9;
            arg$Matrix$0$2 = f_right.a;
            inlinedVal8 = arg$Matrix$0$2.at(element1$);
            inlinedVal9 = inlinedVal8.at(tmp9);
            tmp10 = inlinedVal9 - inlinedVal2;
            if (f_right instanceof ratioRegions3.Matrix.class) {
              let inlinedVal10;
              arg$Matrix$0$3 = f_right.a;
              inlinedVal10 = arg$Matrix$0$3.at(element1$);
              inlinedVal10[tmp8] = tmp10;
              if (e instanceof ratioRegions3.Matrix.class) {
                let inlinedVal11, inlinedVal12, inlinedVal13;
                arg$Matrix$0$4 = e.a;
                inlinedVal11 = arg$Matrix$0$4.at(element1$);
                inlinedVal12 = inlinedVal11.at(element0$);
                inlinedVal13 = inlinedVal12 < 0;
                if (inlinedVal13 === true) {
                  inlinedVal3 = inlinedVal12;
                } else {
                  inlinedVal3 = inlinedVal12 - inlinedVal2;
                }
                if (e instanceof ratioRegions3.Matrix.class) {
                  let inlinedVal14;
                  arg$Matrix$0$5 = e.a;
                  inlinedVal14 = arg$Matrix$0$5.at(element1$);
                  inlinedVal14[element0$] = inlinedVal3;
                  tmp11 = element0$ - 1;
                  tmp12 = element0$ - 1;
                  if (e instanceof ratioRegions3.Matrix.class) {
                    let inlinedVal15, inlinedVal16, inlinedVal17;
                    arg$Matrix$0$6 = e.a;
                    inlinedVal15 = arg$Matrix$0$6.at(element1$);
                    inlinedVal16 = inlinedVal15.at(tmp12);
                    inlinedVal17 = inlinedVal16 < 0;
                    if (inlinedVal17 === true) {
                      inlinedVal4 = inlinedVal16;
                    } else {
                      inlinedVal4 = inlinedVal16 + inlinedVal2;
                    }
                    if (e instanceof ratioRegions3.Matrix.class) {
                      let inlinedVal18;
                      arg$Matrix$0$7 = e.a;
                      inlinedVal18 = arg$Matrix$0$7.at(element1$);
                      inlinedVal18[tmp11] = inlinedVal4;
                      tmp13 = element0$ - 1;
                      enqueue1(ratioRegions2, h, marked, q, element1$, tmp13);
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
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
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        let ratioRegions3, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal2, inlinedVal3, inlinedVal4, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6, arg$Matrix$0$7;
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        ratioRegions3 = ratioRegions2;
        if (e instanceof ratioRegions3.Matrix.class) {
          let inlinedVal5, inlinedVal6, inlinedVal7;
          arg$Matrix$0$1 = e.a;
          inlinedVal5 = arg$Matrix$0$1.at(element1$);
          inlinedVal6 = inlinedVal5.at(element0$);
          tmp7 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal7 = inlinedVal6 < 0;
          if (inlinedVal7 === true) {
            inlinedVal2 = tmp7;
          } else {
            let inlinedVal8, scrut6;
            scrut6 = inlinedVal6 < tmp7;
            if (scrut6 === true) {
              inlinedVal8 = inlinedVal6;
            } else {
              inlinedVal8 = tmp7;
            }
            inlinedVal2 = inlinedVal8;
          }
          if (f_down instanceof ratioRegions3.Matrix.class) {
            let inlinedVal8, inlinedVal9;
            arg$Matrix$0$2 = f_down.a;
            inlinedVal8 = arg$Matrix$0$2.at(element1$);
            inlinedVal9 = inlinedVal8.at(element0$);
            tmp8 = inlinedVal9 + inlinedVal2;
            if (f_down instanceof ratioRegions3.Matrix.class) {
              let inlinedVal10;
              arg$Matrix$0$3 = f_down.a;
              inlinedVal10 = arg$Matrix$0$3.at(element1$);
              inlinedVal10[element0$] = tmp8;
              if (e instanceof ratioRegions3.Matrix.class) {
                let inlinedVal11, inlinedVal12, inlinedVal13;
                arg$Matrix$0$4 = e.a;
                inlinedVal11 = arg$Matrix$0$4.at(element1$);
                inlinedVal12 = inlinedVal11.at(element0$);
                inlinedVal13 = inlinedVal12 < 0;
                if (inlinedVal13 === true) {
                  inlinedVal3 = inlinedVal12;
                } else {
                  inlinedVal3 = inlinedVal12 - inlinedVal2;
                }
                if (e instanceof ratioRegions3.Matrix.class) {
                  let inlinedVal14;
                  arg$Matrix$0$5 = e.a;
                  inlinedVal14 = arg$Matrix$0$5.at(element1$);
                  inlinedVal14[element0$] = inlinedVal3;
                  tmp9 = element1$ + 1;
                  tmp10 = element1$ + 1;
                  if (e instanceof ratioRegions3.Matrix.class) {
                    let inlinedVal15, inlinedVal16, inlinedVal17;
                    arg$Matrix$0$6 = e.a;
                    inlinedVal15 = arg$Matrix$0$6.at(tmp10);
                    inlinedVal16 = inlinedVal15.at(element0$);
                    inlinedVal17 = inlinedVal16 < 0;
                    if (inlinedVal17 === true) {
                      inlinedVal4 = inlinedVal16;
                    } else {
                      inlinedVal4 = inlinedVal16 + inlinedVal2;
                    }
                    if (e instanceof ratioRegions3.Matrix.class) {
                      let inlinedVal18;
                      arg$Matrix$0$7 = e.a;
                      inlinedVal18 = arg$Matrix$0$7.at(tmp9);
                      inlinedVal18[element0$] = inlinedVal4;
                      tmp11 = element1$ + 1;
                      enqueue1(ratioRegions2, h, marked, q, tmp11, element0$);
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
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
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        let ratioRegions3, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Matrix$0$1, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, tmp14, scrut6, arg$Matrix$0$5, tmp15, arg$Matrix$0$6, tmp16, scrut7, arg$Matrix$0$7, tmp17;
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        ratioRegions3 = ratioRegions2;
        if (e instanceof ratioRegions3.Matrix.class) {
          let inlinedVal7, inlinedVal8, inlinedVal9;
          arg$Matrix$0$1 = e.a;
          inlinedVal7 = arg$Matrix$0$1.at(element1$);
          inlinedVal8 = inlinedVal7.at(element0$);
          tmp7 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal9 = inlinedVal8 < 0;
          if (inlinedVal9 === true) {
            inlinedVal2 = tmp7;
          } else {
            let inlinedVal10, scrut8;
            scrut8 = inlinedVal8 < tmp7;
            if (scrut8 === true) {
              inlinedVal10 = inlinedVal8;
            } else {
              inlinedVal10 = tmp7;
            }
            inlinedVal2 = inlinedVal10;
          }
          tmp8 = element1$ - 1;
          tmp9 = element1$ - 1;
          if (f_down instanceof ratioRegions3.Matrix.class) {
            let inlinedVal10, inlinedVal11;
            arg$Matrix$0$2 = f_down.a;
            inlinedVal10 = arg$Matrix$0$2.at(tmp9);
            inlinedVal11 = inlinedVal10.at(element0$);
            tmp10 = inlinedVal11 - inlinedVal2;
            if (f_down instanceof ratioRegions3.Matrix.class) {
              let inlinedVal12;
              arg$Matrix$0$3 = f_down.a;
              inlinedVal12 = arg$Matrix$0$3.at(tmp8);
              inlinedVal12[element0$] = tmp10;
              if (e instanceof ratioRegions3.Matrix.class) {
                arg$Matrix$0$4 = e.a;
                tmp14 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, element1$);
                inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp14, element0$);
                scrut6 = ratioRegions2[negative$accessorSymbol](inlinedVal3);
                if (scrut6 === true) {
                  inlinedVal4 = inlinedVal3;
                } else {
                  inlinedVal4 = inlinedVal3 - inlinedVal2;
                }
                if (e instanceof ratioRegions3.Matrix.class) {
                  arg$Matrix$0$5 = e.a;
                  tmp15 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$5, element1$);
                  ratioRegions2[vector_set$accessorSymbol](tmp15, element0$, inlinedVal4);
                  tmp11 = element1$ - 1;
                  tmp12 = element1$ - 1;
                  if (e instanceof ratioRegions3.Matrix.class) {
                    arg$Matrix$0$6 = e.a;
                    tmp16 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$6, tmp12);
                    inlinedVal5 = ratioRegions2[vector_ref$accessorSymbol](tmp16, element0$);
                    scrut7 = ratioRegions2[negative$accessorSymbol](inlinedVal5);
                    if (scrut7 === true) {
                      inlinedVal6 = inlinedVal5;
                    } else {
                      inlinedVal6 = inlinedVal5 + inlinedVal2;
                    }
                    if (e instanceof ratioRegions3.Matrix.class) {
                      arg$Matrix$0$7 = e.a;
                      tmp17 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$7, tmp11);
                      ratioRegions2[vector_set$accessorSymbol](tmp17, element0$, inlinedVal6);
                      tmp13 = element1$ - 1;
                      enqueue1(ratioRegions2, h, marked, q, tmp13, element0$);
                    } else {
                      throw globalThis.Object.freeze(new globalThis.Error("match error"))
                    }
                  } else {
                    throw globalThis.Object.freeze(new globalThis.Error("match error"))
                  }
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
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
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        let ratioRegions3, tmp7, tmp8, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Matrix$0$1, tmp9, scrut6, arg$Matrix$0$2, tmp10, arg$Matrix$0$3, tmp11, arg$Matrix$0$4, tmp12, scrut7, arg$Matrix$0$5, tmp13;
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        ratioRegions3 = ratioRegions2;
        if (e instanceof ratioRegions3.Matrix.class) {
          arg$Matrix$0$1 = e.a;
          tmp9 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, element1$);
          inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp9, element0$);
          tmp7 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
          scrut6 = ratioRegions2[negative$accessorSymbol](inlinedVal2);
          if (scrut6 === true) {
            inlinedVal3 = tmp7;
          } else {
            inlinedVal3 = ratioRegions2[intMin$accessorSymbol](inlinedVal2, tmp7);
          }
          if (f_t instanceof ratioRegions3.Matrix.class) {
            arg$Matrix$0$2 = f_t.a;
            tmp10 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, element1$);
            inlinedVal4 = ratioRegions2[vector_ref$accessorSymbol](tmp10, element0$);
            tmp8 = inlinedVal4 + inlinedVal3;
            if (f_t instanceof ratioRegions3.Matrix.class) {
              arg$Matrix$0$3 = f_t.a;
              tmp11 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$3, element1$);
              ratioRegions2[vector_set$accessorSymbol](tmp11, element0$, tmp8);
              if (e instanceof ratioRegions3.Matrix.class) {
                arg$Matrix$0$4 = e.a;
                tmp12 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, element1$);
                inlinedVal5 = ratioRegions2[vector_ref$accessorSymbol](tmp12, element0$);
                scrut7 = ratioRegions2[negative$accessorSymbol](inlinedVal5);
                if (scrut7 === true) {
                  inlinedVal6 = inlinedVal5;
                } else {
                  inlinedVal6 = inlinedVal5 - inlinedVal3;
                }
                if (e instanceof ratioRegions3.Matrix.class) {
                  arg$Matrix$0$5 = e.a;
                  tmp13 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$5, element1$);
                  ratioRegions2[vector_set$accessorSymbol](tmp13, element0$, inlinedVal6);
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
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
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        let ratioRegions3, scrut6, scrut7, scrut8, scrut9, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal2, arg$Matrix$0$1, tmp30;
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        ratioRegions3 = ratioRegions2;
        tmp7 = width - 1;
        scrut6 = element0$ == tmp7;
        if (scrut6 === true) {
          tmp8 = m1;
        } else {
          let tmp31, inlinedVal3;
          tmp31 = cf_right(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp31 > 0;
          if (inlinedVal3 === true) {
            let inlinedVal4, arg$Matrix$0$2, tmp32;
            tmp9 = element0$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              arg$Matrix$0$2 = h.a;
              tmp32 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, element1$);
              inlinedVal4 = ratioRegions2[vector_ref$accessorSymbol](tmp32, tmp9);
              tmp10 = inlinedVal4;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp10 = m2;
          }
          tmp8 = tmp10;
        }
        scrut7 = element0$ == 0;
        if (scrut7 === true) {
          tmp11 = m1;
        } else {
          let tmp31, inlinedVal3;
          tmp31 = cf_left(ratioRegions2, c_right, f_right, element1$, element0$);
          inlinedVal3 = tmp31 > 0;
          if (inlinedVal3 === true) {
            let inlinedVal4, arg$Matrix$0$2, tmp32;
            tmp12 = element0$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              arg$Matrix$0$2 = h.a;
              tmp32 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, element1$);
              inlinedVal4 = ratioRegions2[vector_ref$accessorSymbol](tmp32, tmp12);
              tmp13 = inlinedVal4;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp13 = m2;
          }
          tmp11 = tmp13;
        }
        tmp14 = height - 1;
        scrut8 = element1$ == tmp14;
        if (scrut8 === true) {
          tmp15 = m1;
        } else {
          let tmp31, inlinedVal3;
          tmp31 = cf_down(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp31 > 0;
          if (inlinedVal3 === true) {
            let inlinedVal4, arg$Matrix$0$2, tmp32;
            tmp16 = element1$ + 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              arg$Matrix$0$2 = h.a;
              tmp32 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, tmp16);
              inlinedVal4 = ratioRegions2[vector_ref$accessorSymbol](tmp32, element0$);
              tmp17 = inlinedVal4;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp17 = m2;
          }
          tmp15 = tmp17;
        }
        scrut9 = element1$ == 0;
        if (scrut9 === true) {
          tmp18 = m1;
        } else {
          let tmp31, inlinedVal3;
          tmp31 = cf_up(ratioRegions2, c_down, f_down, element1$, element0$);
          inlinedVal3 = tmp31 > 0;
          if (inlinedVal3 === true) {
            let inlinedVal4, arg$Matrix$0$2, tmp32;
            tmp19 = element1$ - 1;
            if (h instanceof ratioRegions3.Matrix.class) {
              arg$Matrix$0$2 = h.a;
              tmp32 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, tmp19);
              inlinedVal4 = ratioRegions2[vector_ref$accessorSymbol](tmp32, element0$);
              tmp20 = inlinedVal4;
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          } else {
            tmp20 = m2;
          }
          tmp18 = tmp20;
        }
        tmp29 = cf_t(ratioRegions2, w, f_t, v, element1$, element0$);
        inlinedVal2 = tmp29 > 0;
        if (inlinedVal2 === true) {
          tmp21 = 0;
        } else {
          tmp21 = m2;
        }
        tmp22 = ratioRegions2.Cons(tmp21, ratioRegions2.Nil);
        tmp23 = ratioRegions2.Cons(tmp18, tmp22);
        tmp24 = ratioRegions2.Cons(tmp15, tmp23);
        tmp25 = ratioRegions2.Cons(tmp11, tmp24);
        tmp26 = ratioRegions2.Cons(tmp8, tmp25);
        tmp27 = ratioRegions2[min$accessorSymbol](tmp26);
        tmp28 = 1 + tmp27;
        if (h instanceof ratioRegions3.Matrix.class) {
          arg$Matrix$0$1 = h.a;
          tmp30 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, element1$);
          ratioRegions2[vector_set$accessorSymbol](tmp30, element0$, tmp28);
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
      if (e instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$ = e.a;
        tmp6 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, element1$);
        inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp6, element0$);
        inlinedVal1 = inlinedVal == 0;
        switch (inlinedVal1) {
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
lambda3 = (undefined, function (ratioRegions2, q, k) {
  let x;
  x = ratioRegions2.Nil;
  q[k] = x;
  return runtime.Unit
});
lambda7 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, ps) {
  let p;
  p = lambda$19(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
  return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
});
lambda$11 = (undefined, function (ratioRegions2, f_t, e, y) {
  return (x) => {
    return lambda10(ratioRegions2, f_t, e, y, x)
  }
});
lambda10 = (undefined, function (ratioRegions2, f_t, e, y, x) {
  let arg$Matrix$0$, tmp, arg$Matrix$0$1, tmp1;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$1 = e.a;
    tmp1 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
    ratioRegions2[vector_set$accessorSymbol](tmp1, x, 0);
    if (f_t instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$ = f_t.a;
      tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
      return ratioRegions2[vector_set$accessorSymbol](tmp, x, 0)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (ratioRegions2, width, f_t, e) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$11(ratioRegions2, f_t, e, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$10 = (undefined, function (ratioRegions2, f_right, y) {
  return (x) => {
    return lambda11(ratioRegions2, f_right, y, x)
  }
});
lambda11 = (undefined, function (ratioRegions2, f_right, y, x) {
  let arg$Matrix$0$, tmp;
  if (f_right instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = f_right.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    return ratioRegions2[vector_set$accessorSymbol](tmp, x, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (ratioRegions2, width, f_right) {
  return (y) => {
    return lambda12(ratioRegions2, width, f_right, y)
  }
});
lambda$9 = (undefined, function (ratioRegions2, f_down, y) {
  return (x) => {
    return lambda13(ratioRegions2, f_down, y, x)
  }
});
lambda13 = (undefined, function (ratioRegions2, f_down, y, x) {
  let arg$Matrix$0$, tmp;
  if (f_down instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = f_down.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    return ratioRegions2[vector_set$accessorSymbol](tmp, x, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$6 = (undefined, function (ratioRegions2, width, f_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$9(ratioRegions2, f_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$5 = (undefined, function (ratioRegions2, width, e) {
  return (y) => {
    return lambda14(ratioRegions2, width, e, y)
  }
});
lambda$4 = (undefined, function (ratioRegions2, height, e) {
  return (x) => {
    return lambda15(ratioRegions2, height, e, x)
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
relabel = function relabel(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, marked, m1, v) {
  let q, tail, lambda$here, lambda$here1, ratioRegions3, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q1, tail1, inlinedVal;
  q = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  lambda$here = lambda$24(ratioRegions2, width, h, marked, m1);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$23(ratioRegions2, w, width, f_t, h, marked, v, q, tail);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  ratioRegions3 = ratioRegions2;
  c_right1 = c_right;
  c_down1 = c_down;
  height1 = height;
  width1 = width;
  f_right1 = f_right;
  f_down1 = f_down;
  h1 = h;
  marked1 = marked;
  q1 = q;
  tail1 = tail;
  inlinedLbl: {
    loopLabel: while (true) {
      let value, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, ratioRegions4, scrut;
      ratioRegions4 = ratioRegions3;
      scrut = q1.value;
      if (scrut instanceof ratioRegions4.QNil.class) {
        inlinedVal = runtime.Unit;
        break inlinedLbl
      }
      {
        let ratioRegions5, receiver, inlinedVal1, scrut1, arg$QCons$0$, arg$QCons$1$, element0$, element1$, arg$Matrix$0$, tmp17;
        ratioRegions5 = ratioRegions3;
        scrut1 = q1.value;
        if (scrut1 instanceof ratioRegions5.QCons.class) {
          let ratioRegions6, element1$1, element0$1, arg$Matrix$0$1, tmp18, scrut2;
          arg$QCons$0$ = scrut1.head;
          arg$QCons$1$ = scrut1.rest;
          if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
            runtime.Tuple.get(arg$QCons$0$, 0);
            element1$1 = runtime.Tuple.get(arg$QCons$0$, 1);
            if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
              element0$1 = runtime.Tuple.get(arg$QCons$0$, 0);
              runtime.Tuple.get(arg$QCons$0$, 1);
              if (marked1 instanceof ratioRegions5.Matrix.class) {
                arg$Matrix$0$1 = marked1.a;
                tmp18 = ratioRegions3[vector_ref$accessorSymbol](arg$Matrix$0$1, element1$1);
                ratioRegions3[vector_set$accessorSymbol](tmp18, element0$1, false);
                q1.value = arg$QCons$1$.value;
                ratioRegions6 = ratioRegions3;
                scrut2 = q1.value;
                if (scrut2 instanceof ratioRegions6.QNil.class) {
                  tail1.value = ratioRegions3.QNil;
                } else {
                  if (false === true) {
                    tail1.value = ratioRegions3.QNil;
                  }
                }
                if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
                  element0$ = runtime.Tuple.get(arg$QCons$0$, 0);
                  runtime.Tuple.get(arg$QCons$0$, 1);
                  if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
                    runtime.Tuple.get(arg$QCons$0$, 0);
                    element1$ = runtime.Tuple.get(arg$QCons$0$, 1);
                    receiver = ratioRegions3;
                    if (h1 instanceof receiver.Matrix.class) {
                      arg$Matrix$0$ = h1.a;
                      tmp17 = ratioRegions3[vector_ref$accessorSymbol](arg$Matrix$0$, element1$);
                      inlinedVal1 = ratioRegions3[vector_ref$accessorSymbol](tmp17, element0$);
                      value = inlinedVal1 + 1;
                      tmp = element0$ > 0;
                      if (tmp === true) {
                        let tmp19, inlinedVal2;
                        tmp2 = element0$ - 1;
                        tmp19 = cf_right(ratioRegions3, c_right1, f_right1, element1$, tmp2);
                        inlinedVal2 = tmp19 > 0;
                        tmp1 = inlinedVal2;
                      } else {
                        tmp1 = false;
                      }
                      if (tmp1 === true) {
                        tmp3 = element0$ - 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, element1$, tmp3, value);
                      }
                      tmp4 = width1 - 1;
                      tmp5 = element0$ < tmp4;
                      if (tmp5 === true) {
                        let tmp19, inlinedVal2;
                        tmp7 = element0$ + 1;
                        tmp19 = cf_left(ratioRegions3, c_right1, f_right1, element1$, tmp7);
                        inlinedVal2 = tmp19 > 0;
                        tmp6 = inlinedVal2;
                      } else {
                        tmp6 = false;
                      }
                      if (tmp6 === true) {
                        tmp8 = element0$ + 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, element1$, tmp8, value);
                      }
                      tmp9 = element1$ > 0;
                      if (tmp9 === true) {
                        let tmp19, inlinedVal2;
                        tmp11 = element1$ - 1;
                        tmp19 = cf_down(ratioRegions3, c_down1, f_down1, tmp11, element0$);
                        inlinedVal2 = tmp19 > 0;
                        tmp10 = inlinedVal2;
                      } else {
                        tmp10 = false;
                      }
                      if (tmp10 === true) {
                        tmp12 = element1$ - 1;
                        enqueue(ratioRegions3, h1, marked1, q1, tail1, tmp12, element0$, value);
                      }
                      tmp13 = height1 - 1;
                      tmp14 = element1$ < tmp13;
                      if (tmp14 === true) {
                        let tmp19, inlinedVal2;
                        tmp15 = element1$ + 1;
                        tmp19 = cf_up(ratioRegions3, c_down1, f_down1, tmp15, element0$);
                        inlinedVal2 = tmp19 > 0;
                        if (inlinedVal2 === true) {
                          tmp16 = element1$ + 1;
                          enqueue(ratioRegions3, h1, marked1, q1, tail1, tmp16, element0$, value);
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
              throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
  }
  return inlinedVal
};
lambda12 = (undefined, function (ratioRegions2, width, f_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$10(ratioRegions2, f_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda14 = (undefined, function (ratioRegions2, width, e, y) {
  let tmp, arg$Matrix$0$, tmp1, arg$Matrix$0$1, tmp2;
  tmp = width - 1;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$1 = e.a;
    tmp2 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
    ratioRegions2[vector_set$accessorSymbol](tmp2, tmp, -1);
    if (e instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$ = e.a;
      tmp1 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
      return ratioRegions2[vector_set$accessorSymbol](tmp1, 0, -1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda15 = (undefined, function (ratioRegions2, height, e, x) {
  let tmp, arg$Matrix$0$, tmp1, arg$Matrix$0$1, tmp2;
  tmp = height - 1;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$1 = e.a;
    tmp2 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, tmp);
    ratioRegions2[vector_set$accessorSymbol](tmp2, x, -1);
    if (e instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$ = e.a;
      tmp1 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, 0);
      return ratioRegions2[vector_set$accessorSymbol](tmp1, x, -1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda16(ratioRegions2, h, m1, y, x)
  }
});
lambda16 = (undefined, function (ratioRegions2, h, m1, y, x) {
  let inlinedVal, arg$Matrix$0$, tmp;
  if (h instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = h.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp, x);
    return inlinedVal == m1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$2 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$3(ratioRegions2, h, m1, y);
    return ratioRegions2[every_n$accessorSymbol](width, lambda$here)
  }
});
lambda$1 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda17(ratioRegions2, h, m1, y, x)
  }
});
lambda17 = (undefined, function (ratioRegions2, h, m1, y, x) {
  let tmp, inlinedVal, arg$Matrix$0$, tmp1;
  if (h instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = h.a;
    tmp1 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp1, x);
    tmp = inlinedVal == m1;
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
lambda$ = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$1(ratioRegions2, h, m1, y);
    return ratioRegions2[map_n_vector$accessorSymbol](width, lambda$here)
  }
});
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
(class ratioRegions {
  static {
    ratioRegions1 = this
  }
  static get [listExists$tailrec$accessorSymbol]() { return ratioRegions.#listExists$tailrec; }
  static get [array_alloc$accessorSymbol]() { return ratioRegions.#array_alloc; }
  static get [intMin$accessorSymbol]() { return ratioRegions.#intMin; }
  static get [doo$accessorSymbol]() { return ratioRegions.#doo; }
  static get [vector_ref$accessorSymbol]() { return ratioRegions.#vector_ref; }
  static get [vector_set$accessorSymbol]() { return ratioRegions.#vector_set; }
  static get [map_n_vector$accessorSymbol]() { return ratioRegions.#map_n_vector; }
  static get [negative$accessorSymbol]() { return ratioRegions.#negative; }
  static get [min$accessorSymbol]() { return ratioRegions.#min; }
  static get [every_n$accessorSymbol]() { return ratioRegions.#every_n; }
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
  static #array_alloc(n, init) {
    let tmp;
    tmp = [];
    return ratioRegions.#fillArray(tmp, 0, n, init)
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
  static #make_vector(n, init) {
    let scrut;
    scrut = n > 0;
    if (scrut === true) {
      return ratioRegions.#array_alloc(n, init)
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
      let n1, f1, arr1, i;
      tmp = runtime.safeCall(f(0));
      arr = ratioRegions.#array_alloc(n, tmp);
      n1 = n;
      f1 = f;
      arr1 = arr;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp1, tmp2;
          scrut1 = i < n1;
          if (scrut1 === true) {
            tmp1 = runtime.safeCall(f1(i));
            arr1[i] = tmp1;
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
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
      let ratioRegions2, l1, min, inlinedVal;
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      ratioRegions2 = ratioRegions;
      l1 = arg$Cons$1$;
      min = arg$Cons$0$;
      inlinedLbl: {
        loopLabel: while (true) {
          let arg$Cons$0$1, arg$Cons$1$1;
          if (l1 instanceof ratioRegions2.Nil.class) {
            inlinedVal = min;
            break inlinedLbl
          } else if (l1 instanceof ratioRegions2.Cons.class) {
            let inlinedVal1, scrut;
            arg$Cons$0$1 = l1.head;
            arg$Cons$1$1 = l1.tail;
            scrut = min < arg$Cons$0$1;
            if (scrut === true) {
              inlinedVal1 = min;
            } else {
              inlinedVal1 = arg$Cons$0$1;
            }
            l1 = arg$Cons$1$1;
            min = inlinedVal1;
            continue loopLabel
          }
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
      }
      return inlinedVal
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #every_n(n, p) {
    let n1, p1, i, inlinedVal;
    n1 = n;
    p1 = p;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let tmp, tmp1, tmp2;
        tmp = i >= n1;
        if (tmp === false) {
          tmp1 = runtime.safeCall(p1(i));
          if (tmp1 === true) {
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          inlinedVal = false;
          break inlinedLbl;
        }
        inlinedVal = true;
        break inlinedLbl;
      }
    }
    return inlinedVal
  }
  static #some(l, p) {
    return ratioRegions.#listExists(p)(l)
  }
  static #some_vector(v, p) {
    let v1, p1, i, inlinedVal;
    v1 = v;
    p1 = p;
    i = 0;
    inlinedLbl: {
      loopLabel: while (true) {
        let tmp, tmp1, tmp2, inlinedVal1;
        inlinedVal1 = v1.length;
        tmp = i < inlinedVal1;
        if (tmp === true) {
          let inlinedVal2;
          inlinedVal2 = v1.at(i);
          tmp1 = runtime.safeCall(p1(inlinedVal2));
          if (tmp1 === false) {
            tmp2 = i + 1;
            i = tmp2;
            continue loopLabel
          }
          inlinedVal = true;
          break inlinedLbl;
        }
        inlinedVal = false;
        break inlinedLbl;
      }
    }
    return inlinedVal
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
    let scrut, arr;
    scrut = m > 0;
    if (scrut === true) {
      let n1, f, arr1, i, inlinedVal;
      inlinedVal = make_matrix_lambda$_lambda$lambda(ratioRegions, n, a);
      arr = ratioRegions1.#array_alloc(m, inlinedVal);
      n1 = m;
      f = make_matrix_lambda$$lambda$(ratioRegions, n, a);
      arr1 = arr;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut1, tmp, tmp1;
          scrut1 = i < n1;
          if (scrut1 === true) {
            tmp = runtime.safeCall(f());
            arr1[i] = tmp;
            tmp1 = i + 1;
            i = tmp1;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      return ratioRegions.Matrix(arr)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
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
    let ratioRegions2, control_string1, i, values1, inlinedVal;
    ratioRegions2 = ratioRegions;
    control_string1 = control_string;
    i = 0;
    values1 = values;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal1;
        inlinedVal1 = control_string1.length;
        tmp = i == inlinedVal1;
        switch (tmp) {
          case false:
            {
              let inlinedVal2;
              inlinedVal2 = control_string1.at(i);
              scrut = inlinedVal2 == "~";
              if (scrut === true) {
                let inlinedVal3;
                tmp1 = i + 1;
                inlinedVal3 = control_string1.at(tmp1);
                scrut1 = inlinedVal3 == "s";
                if (scrut1 === true) {
                  if (values1 instanceof ratioRegions2.Cons.class) {
                    arg$Cons$0$ = values1.head;
                    arg$Cons$1$ = values1.tail;
                    if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                      tmp2 = i + 2;
                      i = tmp2;
                      values1 = arg$Cons$1$;
                      continue loopLabel
                    }
                    scrut2 = inlinedVal3 == "a";
                    if (scrut2 === true) {
                      if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                        tmp5 = i + 2;
                        i = tmp5;
                        values1 = arg$Cons$1$;
                        continue loopLabel
                      }
                    }
                    scrut3 = inlinedVal3 == "%";
                    if (scrut3 === true) {
                      tmp3 = i + 2;
                      i = tmp3;
                      continue loopLabel
                    }
                    tmp4 = i + 1;
                    i = tmp4;
                    continue loopLabel;
                  }
                  scrut3 = inlinedVal3 == "%";
                  if (scrut3 === true) {
                    tmp6 = i + 2;
                    i = tmp6;
                    continue loopLabel
                  }
                  tmp7 = i + 1;
                  i = tmp7;
                  continue loopLabel;
                }
                scrut2 = inlinedVal3 == "a";
                if (scrut2 === true) {
                  if (values1 instanceof ratioRegions2.Cons.class) {
                    arg$Cons$0$ = values1.head;
                    arg$Cons$1$ = values1.tail;
                    if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                      tmp10 = i + 2;
                      i = tmp10;
                      values1 = arg$Cons$1$;
                      continue loopLabel
                    }
                  }
                }
                scrut3 = inlinedVal3 == "%";
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
            inlinedVal = runtime.Unit;
            break inlinedLbl;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
    }
    return inlinedVal
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
    let height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, ratioRegions2, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, scrut, arr, scrut1, arr1, scrut2, arr2, scrut3, arr3, scrut4, arr4, scrut5, arr5;
    height = ratioRegions.#matrix_rows(w);
    width = ratioRegions.#matrix_columns(w);
    tmp = width - 1;
    scrut5 = height > 0;
    if (scrut5 === true) {
      let n, f, arr6, i, inlinedVal7;
      inlinedVal7 = rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions1, tmp, 0);
      arr5 = ratioRegions1.#array_alloc(height, inlinedVal7);
      n = height;
      f = rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions1, tmp, 0);
      arr6 = arr5;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut6, tmp8, tmp9;
          scrut6 = i < n;
          if (scrut6 === true) {
            tmp8 = runtime.safeCall(f());
            arr6[i] = tmp8;
            tmp9 = i + 1;
            i = tmp9;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      inlinedVal1 = ratioRegions1.Matrix(arr5);
      f_right = inlinedVal1;
      tmp1 = height - 1;
      scrut4 = tmp1 > 0;
      if (scrut4 === true) {
        let n1, f1, arr7, i1, inlinedVal8;
        inlinedVal8 = rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions1, width, 0);
        arr4 = ratioRegions1.#array_alloc(tmp1, inlinedVal8);
        n1 = tmp1;
        f1 = rao_ratio_region_make_matrix_lambda$$lambda$1(ratioRegions1, width, 0);
        arr7 = arr4;
        i1 = 1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut6, tmp8, tmp9;
            scrut6 = i1 < n1;
            if (scrut6 === true) {
              tmp8 = runtime.safeCall(f1());
              arr7[i1] = tmp8;
              tmp9 = i1 + 1;
              i1 = tmp9;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        }
        inlinedVal2 = ratioRegions1.Matrix(arr4);
        f_down = inlinedVal2;
        scrut3 = height > 0;
        if (scrut3 === true) {
          let n2, f2, arr8, i2, inlinedVal9;
          inlinedVal9 = rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions1, width, 0);
          arr3 = ratioRegions1.#array_alloc(height, inlinedVal9);
          n2 = height;
          f2 = rao_ratio_region_make_matrix_lambda$$lambda$2(ratioRegions1, width, 0);
          arr8 = arr3;
          i2 = 1;
          inlinedLbl2: {
            loopLabel2: while (true) {
              let scrut6, tmp8, tmp9;
              scrut6 = i2 < n2;
              if (scrut6 === true) {
                tmp8 = runtime.safeCall(f2());
                arr8[i2] = tmp8;
                tmp9 = i2 + 1;
                i2 = tmp9;
                continue loopLabel2
              }
              break inlinedLbl2;
            }
          }
          inlinedVal3 = ratioRegions1.Matrix(arr3);
          f_t = inlinedVal3;
          scrut2 = height > 0;
          if (scrut2 === true) {
            let n3, f3, arr9, i3, inlinedVal10;
            inlinedVal10 = rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions1, width, 0);
            arr2 = ratioRegions1.#array_alloc(height, inlinedVal10);
            n3 = height;
            f3 = rao_ratio_region_make_matrix_lambda$$lambda$3(ratioRegions1, width, 0);
            arr9 = arr2;
            i3 = 1;
            inlinedLbl3: {
              loopLabel3: while (true) {
                let scrut6, tmp8, tmp9;
                scrut6 = i3 < n3;
                if (scrut6 === true) {
                  tmp8 = runtime.safeCall(f3());
                  arr9[i3] = tmp8;
                  tmp9 = i3 + 1;
                  i3 = tmp9;
                  continue loopLabel3
                }
                break inlinedLbl3;
              }
            }
            inlinedVal4 = ratioRegions1.Matrix(arr2);
            h = inlinedVal4;
            scrut1 = height > 0;
            if (scrut1 === true) {
              let n4, f4, arr10, i4, inlinedVal11;
              inlinedVal11 = rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions1, width, 0);
              arr1 = ratioRegions1.#array_alloc(height, inlinedVal11);
              n4 = height;
              f4 = rao_ratio_region_make_matrix_lambda$$lambda$4(ratioRegions1, width, 0);
              arr10 = arr1;
              i4 = 1;
              inlinedLbl4: {
                loopLabel4: while (true) {
                  let scrut6, tmp8, tmp9;
                  scrut6 = i4 < n4;
                  if (scrut6 === true) {
                    tmp8 = runtime.safeCall(f4());
                    arr10[i4] = tmp8;
                    tmp9 = i4 + 1;
                    i4 = tmp9;
                    continue loopLabel4
                  }
                  break inlinedLbl4;
                }
              }
              inlinedVal5 = ratioRegions1.Matrix(arr1);
              e = inlinedVal5;
              scrut = height > 0;
              if (scrut === true) {
                let n5, f5, arr11, i5, inlinedVal12;
                inlinedVal12 = rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions1, width, false);
                arr = ratioRegions1.#array_alloc(height, inlinedVal12);
                n5 = height;
                f5 = rao_ratio_region_make_matrix_lambda$$lambda$5(ratioRegions1, width, false);
                arr11 = arr;
                i5 = 1;
                inlinedLbl5: {
                  loopLabel5: while (true) {
                    let scrut6, tmp8, tmp9;
                    scrut6 = i5 < n5;
                    if (scrut6 === true) {
                      tmp8 = runtime.safeCall(f5());
                      arr11[i5] = tmp8;
                      tmp9 = i5 + 1;
                      i5 = tmp9;
                      continue loopLabel5
                    }
                    break inlinedLbl5;
                  }
                }
                inlinedVal6 = ratioRegions1.Matrix(arr);
                tmp2 = height * width;
                m1 = tmp2 + 2;
                tmp3 = 2 * height;
                tmp4 = tmp3 * width;
                m2 = tmp4 + 2;
                tmp5 = 2 * height;
                tmp6 = tmp5 * width;
                tmp7 = tmp6 + 3;
                q = ratioRegions.#make_vector(tmp7, ratioRegions.Nil);
                ratioRegions2 = ratioRegions;
                c_right1 = c_right;
                c_down1 = c_down;
                w1 = w;
                height1 = height;
                width1 = width;
                f_right1 = f_right;
                f_down1 = f_down;
                f_t1 = f_t;
                h1 = h;
                e1 = e;
                marked = inlinedVal6;
                m11 = m1;
                m21 = m2;
                q1 = q;
                lg_v = lg_max_v;
                v_max = 0;
                inlinedLbl6: {
                  loopLabel6: while (true) {
                    let v, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, inlinedVal13;
                    inlinedVal13 = lg_v < 0;
                    if (inlinedVal13 === true) {
                      let inlinedVal14, lambda$here, pushes, lifts, relabels, tmp18, tmp19, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5, ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i6, p, ratioRegions4, control_string, i7, values;
                      tmp8 = ratioRegions2.PInt(undefined);
                      tmp9 = ratioRegions2.Cons(tmp8, ratioRegions2.Nil);
                      ratioRegions4 = ratioRegions1;
                      control_string = "V-MAX=~s~%";
                      i7 = 0;
                      values = tmp9;
                      inlinedLbl7: {
                        loopLabel7: while (true) {
                          let scrut6, scrut7, scrut8, tmp20, tmp21, arg$Cons$0$, arg$Cons$1$, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal15;
                          inlinedVal15 = control_string.length;
                          tmp20 = i7 == inlinedVal15;
                          switch (tmp20) {
                            case false:
                              {
                                let inlinedVal16;
                                inlinedVal16 = control_string.at(i7);
                                scrut6 = inlinedVal16 == "~";
                                if (scrut6 === true) {
                                  let inlinedVal17;
                                  tmp21 = i7 + 1;
                                  inlinedVal17 = control_string.at(tmp21);
                                  scrut7 = inlinedVal17 == "s";
                                  if (scrut7 === true) {
                                    if (values instanceof ratioRegions4.Cons.class) {
                                      arg$Cons$0$ = values.head;
                                      arg$Cons$1$ = values.tail;
                                      if (arg$Cons$0$ instanceof ratioRegions4.PInt.class) {
                                        tmp22 = i7 + 2;
                                        i7 = tmp22;
                                        values = arg$Cons$1$;
                                        continue loopLabel7
                                      }
                                      scrut8 = inlinedVal17 == "%";
                                      if (scrut8 === true) {
                                        tmp23 = i7 + 2;
                                        i7 = tmp23;
                                        continue loopLabel7
                                      }
                                      tmp24 = i7 + 1;
                                      i7 = tmp24;
                                      continue loopLabel7;
                                    }
                                    scrut8 = inlinedVal17 == "%";
                                    if (scrut8 === true) {
                                      tmp25 = i7 + 2;
                                      i7 = tmp25;
                                      continue loopLabel7
                                    }
                                    tmp26 = i7 + 1;
                                    i7 = tmp26;
                                    continue loopLabel7;
                                  }
                                  scrut8 = inlinedVal17 == "%";
                                  if (scrut8 === true) {
                                    tmp27 = i7 + 2;
                                    i7 = tmp27;
                                    continue loopLabel7
                                  }
                                  tmp28 = i7 + 1;
                                  i7 = tmp28;
                                  continue loopLabel7;
                                }
                                tmp29 = i7 + 1;
                                i7 = tmp29;
                                continue loopLabel7;
                              }
                            case true:
                              break inlinedLbl7;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      tmp10 = v_max + 1;
                      lambda$here1 = lambda$8(ratioRegions2, width1, f_t1, e1);
                      ratioRegions2.#doo(height1, lambda$here1);
                      lambda$here2 = lambda$7(ratioRegions2, width1, f_right1);
                      ratioRegions2.#doo(height1, lambda$here2);
                      tmp18 = height1 - 1;
                      lambda$here3 = lambda$6(ratioRegions2, width1, f_down1);
                      ratioRegions2.#doo(tmp18, lambda$here3);
                      lambda$here4 = lambda$5(ratioRegions2, width1, e1);
                      ratioRegions2.#doo(height1, lambda$here4);
                      tmp19 = width1 - 1;
                      lambda$here5 = lambda$4(ratioRegions2, height1, e1);
                      ratioRegions2.#doo(tmp19, lambda$here5);
                      pushes = new ratioRegions2.Ref.class(0);
                      lifts = new ratioRegions2.Ref.class(0);
                      relabels = new ratioRegions2.Ref.class(0);
                      ratioRegions3 = ratioRegions2;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked1 = marked;
                      m12 = m11;
                      m22 = m21;
                      q2 = q1;
                      v1 = tmp10;
                      pushes1 = pushes;
                      lifts1 = lifts;
                      relabels1 = relabels;
                      i6 = 0;
                      p = false;
                      inlinedLbl8: {
                        loopLabel8: while (true) {
                          let scrut6, scrut7, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda$here6, lambda$here7, lambda$here8, lambda$here9, lambda$here10, inlinedVal15, inlinedVal16, tmp57, tmp58, tmp59;
                          tmp57 = i6 / 6;
                          tmp58 = ratioRegions3.#floor(tmp57);
                          tmp59 = 6 * tmp58;
                          inlinedVal15 = i6 - tmp59;
                          inlinedVal16 = inlinedVal15 == 0;
                          if (inlinedVal16 === true) {
                            let inlinedVal17;
                            switch (p) {
                              case false:
                                inlinedVal17 = true;
                                break;
                              case true:
                                inlinedVal17 = false;
                                break;
                              default:
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            tmp20 = inlinedVal17;
                          } else {
                            tmp20 = false;
                          }
                          if (tmp20 === true) {
                            relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                            tmp21 = relabels1.value + 1;
                            relabels1.value = tmp21;
                            lambda$here6 = lambda$16(ratioRegions3, width2, h2, e2, m12);
                            scrut6 = ratioRegions3.#every_n(height2, lambda$here6);
                            if (scrut6 === true) {
                              tmp22 = ratioRegions3.PInt(undefined);
                              tmp23 = ratioRegions3.PString(undefined);
                              tmp24 = ratioRegions3.PInt(undefined);
                              tmp25 = ratioRegions3.PString(undefined);
                              tmp26 = ratioRegions3.PInt(undefined);
                              tmp27 = ratioRegions3.PString(undefined);
                              tmp28 = ratioRegions3.PInt(undefined);
                              tmp29 = ratioRegions3.PString(undefined);
                              tmp30 = ratioRegions3.Cons(tmp29, ratioRegions3.Nil);
                              tmp31 = ratioRegions3.Cons(tmp28, tmp30);
                              tmp32 = ratioRegions3.Cons(tmp27, tmp31);
                              tmp33 = ratioRegions3.Cons(tmp26, tmp32);
                              tmp34 = ratioRegions3.Cons(tmp25, tmp33);
                              tmp35 = ratioRegions3.Cons(tmp24, tmp34);
                              tmp36 = ratioRegions3.Cons(tmp23, tmp35);
                              tmp37 = ratioRegions3.Cons(tmp22, tmp36);
                              ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp37);
                              break inlinedLbl8
                            }
                            {
                              let inlinedVal17;
                              inlinedVal17 = q2.length;
                              lambda$here7 = lambda$15(ratioRegions3, q2);
                              ratioRegions3.#doo(inlinedVal17, lambda$here7);
                              lambda$here8 = lambda$14(ratioRegions3, width2, marked1);
                              ratioRegions3.#doo(height2, lambda$here8);
                              lambda$here9 = lambda$13(ratioRegions3, width2, h2, e2, marked1, q2);
                              ratioRegions3.#doo(height2, lambda$here9);
                              p = true;
                              continue loopLabel8;
                            }
                          }
                          lambda$here10 = lambda$12(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                          scrut7 = ratioRegions3.#some_vector(q2, lambda$here10);
                          if (scrut7 === true) {
                            let inlinedVal17, ratioRegions5, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                            inlinedVal17 = q2.length;
                            tmp38 = inlinedVal17 - 1;
                            ratioRegions5 = ratioRegions3;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w3 = w2;
                            height3 = height2;
                            width3 = width2;
                            f_right3 = f_right2;
                            f_down3 = f_down2;
                            f_t3 = f_t2;
                            h3 = h2;
                            e3 = e2;
                            marked2 = marked1;
                            m13 = m12;
                            m23 = m22;
                            q3 = q2;
                            v2 = v1;
                            pushes2 = pushes1;
                            lifts2 = lifts1;
                            k = tmp38;
                            inlinedLbl9: {
                              loopLabel9: while (true) {
                                let tmp60, inlinedVal18;
                                inlinedVal18 = k < 0;
                                switch (inlinedVal18) {
                                  case false:
                                    {
                                      let inlinedVal19, x, f6, f7;
                                      inlinedVal19 = q3.at(k);
                                      x = ratioRegions5.Nil;
                                      q3[k] = x;
                                      f6 = lambda$18(ratioRegions5, marked2);
                                      ratioRegions5.#listApp$tailrec(f6, inlinedVal19);
                                      f7 = lambda$17(ratioRegions5, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                      ratioRegions5.#listApp$tailrec(f7, inlinedVal19);
                                      tmp60 = k - 1;
                                      k = tmp60;
                                      continue loopLabel9;
                                    }
                                  case true:
                                    break inlinedLbl9;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp39 = i6 + 1;
                            i6 = tmp39;
                            p = false;
                            continue loopLabel8
                          }
                          relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                          tmp40 = relabels1.value + 1;
                          relabels1.value = tmp40;
                          tmp41 = ratioRegions3.PInt(undefined);
                          tmp42 = ratioRegions3.PString(undefined);
                          tmp43 = ratioRegions3.PInt(undefined);
                          tmp44 = ratioRegions3.PString(undefined);
                          tmp45 = ratioRegions3.PInt(undefined);
                          tmp46 = ratioRegions3.PString(undefined);
                          tmp47 = ratioRegions3.PInt(undefined);
                          tmp48 = ratioRegions3.PString(undefined);
                          tmp49 = ratioRegions3.Cons(tmp48, ratioRegions3.Nil);
                          tmp50 = ratioRegions3.Cons(tmp47, tmp49);
                          tmp51 = ratioRegions3.Cons(tmp46, tmp50);
                          tmp52 = ratioRegions3.Cons(tmp45, tmp51);
                          tmp53 = ratioRegions3.Cons(tmp44, tmp52);
                          tmp54 = ratioRegions3.Cons(tmp43, tmp53);
                          tmp55 = ratioRegions3.Cons(tmp42, tmp54);
                          tmp56 = ratioRegions3.Cons(tmp41, tmp55);
                          ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp56);
                          break inlinedLbl8;
                        }
                      }
                      lambda$here = lambda$(ratioRegions2, width1, h1, m11);
                      inlinedVal14 = ratioRegions2.#map_n_vector(height1, lambda$here);
                      inlinedVal = inlinedVal14;
                      break inlinedLbl6
                    }
                    {
                      let i6, c, inlinedVal14, inlinedVal15, lambda$here, pushes, lifts, relabels, tmp18, tmp19, lambda$here1, lambda$here2, lambda$here3, lambda$here4, lambda$here5, ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i7, p, ratioRegions4, control_string, i8, values;
                      i6 = lg_v;
                      c = 1;
                      inlinedLbl7: {
                        loopLabel7: while (true) {
                          let tmp20, tmp21, inlinedVal16;
                          inlinedVal16 = i6 == 0;
                          if (inlinedVal16 === true) {
                            inlinedVal14 = c;
                            break inlinedLbl7
                          }
                          tmp20 = i6 - 1;
                          tmp21 = c + c;
                          i6 = tmp20;
                          c = tmp21;
                          continue loopLabel7;
                        }
                      }
                      v = v_max + inlinedVal14;
                      tmp11 = ratioRegions2.PInt(undefined);
                      tmp12 = ratioRegions2.PInt(undefined);
                      tmp13 = ratioRegions2.PInt(undefined);
                      tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
                      tmp15 = ratioRegions2.Cons(tmp12, tmp14);
                      tmp16 = ratioRegions2.Cons(tmp11, tmp15);
                      ratioRegions4 = ratioRegions1;
                      control_string = "LG-V=~s, V-MAX=~s, V=~s~%";
                      i8 = 0;
                      values = tmp16;
                      inlinedLbl8: {
                        loopLabel8: while (true) {
                          let scrut6, scrut7, scrut8, tmp20, tmp21, arg$Cons$0$, arg$Cons$1$, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, inlinedVal16;
                          inlinedVal16 = control_string.length;
                          tmp20 = i8 == inlinedVal16;
                          switch (tmp20) {
                            case false:
                              {
                                let inlinedVal17;
                                inlinedVal17 = control_string.at(i8);
                                scrut6 = inlinedVal17 == "~";
                                if (scrut6 === true) {
                                  let inlinedVal18;
                                  tmp21 = i8 + 1;
                                  inlinedVal18 = control_string.at(tmp21);
                                  scrut7 = inlinedVal18 == "s";
                                  if (scrut7 === true) {
                                    if (values instanceof ratioRegions4.Cons.class) {
                                      arg$Cons$0$ = values.head;
                                      arg$Cons$1$ = values.tail;
                                      if (arg$Cons$0$ instanceof ratioRegions4.PInt.class) {
                                        tmp22 = i8 + 2;
                                        i8 = tmp22;
                                        values = arg$Cons$1$;
                                        continue loopLabel8
                                      }
                                      scrut8 = inlinedVal18 == "%";
                                      if (scrut8 === true) {
                                        tmp23 = i8 + 2;
                                        i8 = tmp23;
                                        continue loopLabel8
                                      }
                                      tmp24 = i8 + 1;
                                      i8 = tmp24;
                                      continue loopLabel8;
                                    }
                                    scrut8 = inlinedVal18 == "%";
                                    if (scrut8 === true) {
                                      tmp25 = i8 + 2;
                                      i8 = tmp25;
                                      continue loopLabel8
                                    }
                                    tmp26 = i8 + 1;
                                    i8 = tmp26;
                                    continue loopLabel8;
                                  }
                                  scrut8 = inlinedVal18 == "%";
                                  if (scrut8 === true) {
                                    tmp27 = i8 + 2;
                                    i8 = tmp27;
                                    continue loopLabel8
                                  }
                                  tmp28 = i8 + 1;
                                  i8 = tmp28;
                                  continue loopLabel8;
                                }
                                tmp29 = i8 + 1;
                                i8 = tmp29;
                                continue loopLabel8;
                              }
                            case true:
                              break inlinedLbl8;
                          }
                          throw globalThis.Object.freeze(new globalThis.Error("match error"));
                        }
                      }
                      lambda$here1 = lambda$8(ratioRegions2, width1, f_t1, e1);
                      ratioRegions2.#doo(height1, lambda$here1);
                      lambda$here2 = lambda$7(ratioRegions2, width1, f_right1);
                      ratioRegions2.#doo(height1, lambda$here2);
                      tmp18 = height1 - 1;
                      lambda$here3 = lambda$6(ratioRegions2, width1, f_down1);
                      ratioRegions2.#doo(tmp18, lambda$here3);
                      lambda$here4 = lambda$5(ratioRegions2, width1, e1);
                      ratioRegions2.#doo(height1, lambda$here4);
                      tmp19 = width1 - 1;
                      lambda$here5 = lambda$4(ratioRegions2, height1, e1);
                      ratioRegions2.#doo(tmp19, lambda$here5);
                      pushes = new ratioRegions2.Ref.class(0);
                      lifts = new ratioRegions2.Ref.class(0);
                      relabels = new ratioRegions2.Ref.class(0);
                      ratioRegions3 = ratioRegions2;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w2 = w1;
                      height2 = height1;
                      width2 = width1;
                      f_right2 = f_right1;
                      f_down2 = f_down1;
                      f_t2 = f_t1;
                      h2 = h1;
                      e2 = e1;
                      marked1 = marked;
                      m12 = m11;
                      m22 = m21;
                      q2 = q1;
                      v1 = v;
                      pushes1 = pushes;
                      lifts1 = lifts;
                      relabels1 = relabels;
                      i7 = 0;
                      p = false;
                      inlinedLbl9: {
                        loopLabel9: while (true) {
                          let scrut6, scrut7, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda$here6, lambda$here7, lambda$here8, lambda$here9, lambda$here10, inlinedVal16, inlinedVal17, tmp57, tmp58, tmp59;
                          tmp57 = i7 / 6;
                          tmp58 = ratioRegions3.#floor(tmp57);
                          tmp59 = 6 * tmp58;
                          inlinedVal16 = i7 - tmp59;
                          inlinedVal17 = inlinedVal16 == 0;
                          if (inlinedVal17 === true) {
                            let inlinedVal18;
                            switch (p) {
                              case false:
                                inlinedVal18 = true;
                                break;
                              case true:
                                inlinedVal18 = false;
                                break;
                              default:
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            tmp20 = inlinedVal18;
                          } else {
                            tmp20 = false;
                          }
                          if (tmp20 === true) {
                            relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                            tmp21 = relabels1.value + 1;
                            relabels1.value = tmp21;
                            lambda$here6 = lambda$16(ratioRegions3, width2, h2, e2, m12);
                            scrut6 = ratioRegions3.#every_n(height2, lambda$here6);
                            if (scrut6 === true) {
                              tmp22 = ratioRegions3.PInt(undefined);
                              tmp23 = ratioRegions3.PString(undefined);
                              tmp24 = ratioRegions3.PInt(undefined);
                              tmp25 = ratioRegions3.PString(undefined);
                              tmp26 = ratioRegions3.PInt(undefined);
                              tmp27 = ratioRegions3.PString(undefined);
                              tmp28 = ratioRegions3.PInt(undefined);
                              tmp29 = ratioRegions3.PString(undefined);
                              tmp30 = ratioRegions3.Cons(tmp29, ratioRegions3.Nil);
                              tmp31 = ratioRegions3.Cons(tmp28, tmp30);
                              tmp32 = ratioRegions3.Cons(tmp27, tmp31);
                              tmp33 = ratioRegions3.Cons(tmp26, tmp32);
                              tmp34 = ratioRegions3.Cons(tmp25, tmp33);
                              tmp35 = ratioRegions3.Cons(tmp24, tmp34);
                              tmp36 = ratioRegions3.Cons(tmp23, tmp35);
                              tmp37 = ratioRegions3.Cons(tmp22, tmp36);
                              ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp37);
                              break inlinedLbl9
                            }
                            {
                              let inlinedVal18;
                              inlinedVal18 = q2.length;
                              lambda$here7 = lambda$15(ratioRegions3, q2);
                              ratioRegions3.#doo(inlinedVal18, lambda$here7);
                              lambda$here8 = lambda$14(ratioRegions3, width2, marked1);
                              ratioRegions3.#doo(height2, lambda$here8);
                              lambda$here9 = lambda$13(ratioRegions3, width2, h2, e2, marked1, q2);
                              ratioRegions3.#doo(height2, lambda$here9);
                              p = true;
                              continue loopLabel9;
                            }
                          }
                          lambda$here10 = lambda$12(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                          scrut7 = ratioRegions3.#some_vector(q2, lambda$here10);
                          if (scrut7 === true) {
                            let inlinedVal18, ratioRegions5, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                            inlinedVal18 = q2.length;
                            tmp38 = inlinedVal18 - 1;
                            ratioRegions5 = ratioRegions3;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w3 = w2;
                            height3 = height2;
                            width3 = width2;
                            f_right3 = f_right2;
                            f_down3 = f_down2;
                            f_t3 = f_t2;
                            h3 = h2;
                            e3 = e2;
                            marked2 = marked1;
                            m13 = m12;
                            m23 = m22;
                            q3 = q2;
                            v2 = v1;
                            pushes2 = pushes1;
                            lifts2 = lifts1;
                            k = tmp38;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp60, inlinedVal19;
                                inlinedVal19 = k < 0;
                                switch (inlinedVal19) {
                                  case false:
                                    {
                                      let inlinedVal20, x, f6, f7;
                                      inlinedVal20 = q3.at(k);
                                      x = ratioRegions5.Nil;
                                      q3[k] = x;
                                      f6 = lambda$18(ratioRegions5, marked2);
                                      ratioRegions5.#listApp$tailrec(f6, inlinedVal20);
                                      f7 = lambda$17(ratioRegions5, c_right3, c_down3, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                      ratioRegions5.#listApp$tailrec(f7, inlinedVal20);
                                      tmp60 = k - 1;
                                      k = tmp60;
                                      continue loopLabel10;
                                    }
                                  case true:
                                    break inlinedLbl10;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp39 = i7 + 1;
                            i7 = tmp39;
                            p = false;
                            continue loopLabel9
                          }
                          relabel(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                          tmp40 = relabels1.value + 1;
                          relabels1.value = tmp40;
                          tmp41 = ratioRegions3.PInt(undefined);
                          tmp42 = ratioRegions3.PString(undefined);
                          tmp43 = ratioRegions3.PInt(undefined);
                          tmp44 = ratioRegions3.PString(undefined);
                          tmp45 = ratioRegions3.PInt(undefined);
                          tmp46 = ratioRegions3.PString(undefined);
                          tmp47 = ratioRegions3.PInt(undefined);
                          tmp48 = ratioRegions3.PString(undefined);
                          tmp49 = ratioRegions3.Cons(tmp48, ratioRegions3.Nil);
                          tmp50 = ratioRegions3.Cons(tmp47, tmp49);
                          tmp51 = ratioRegions3.Cons(tmp46, tmp50);
                          tmp52 = ratioRegions3.Cons(tmp45, tmp51);
                          tmp53 = ratioRegions3.Cons(tmp44, tmp52);
                          tmp54 = ratioRegions3.Cons(tmp43, tmp53);
                          tmp55 = ratioRegions3.Cons(tmp42, tmp54);
                          tmp56 = ratioRegions3.Cons(tmp41, tmp55);
                          ratioRegions3.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp56);
                          break inlinedLbl9;
                        }
                      }
                      tmp17 = lg_v - 1;
                      lambda$here = lambda$2(ratioRegions2, width1, h1, m11);
                      inlinedVal15 = ratioRegions2.#every_n(height1, lambda$here);
                      if (inlinedVal15 === true) {
                        lg_v = tmp17;
                        v_max = v;
                        continue loopLabel6
                      }
                      lg_v = tmp17;
                      v_max = v_max;
                      continue loopLabel6;
                    }
                  }
                }
                return inlinedVal
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
  static #doit(n) {
    let c_right, c_down, tmp, tmp1, tmp2, lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, c_right1, c_down1, w, lg_max_v, height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, ratioRegions2, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, scrut, arr, scrut1, arr1, scrut2, arr2, scrut3, arr3, scrut4, arr4, scrut5, arr5, scrut6, arr6, scrut7, arr7, scrut8, arr8;
    tmp = n - 1;
    scrut8 = n > 0;
    if (scrut8 === true) {
      let n1, f, arr9, i, inlinedVal10;
      inlinedVal10 = doit_make_matrix_lambda$_lambda$lambda(ratioRegions1, tmp, -1);
      arr8 = ratioRegions1.#array_alloc(n, inlinedVal10);
      n1 = n;
      f = doit_make_matrix_lambda$$lambda$(ratioRegions1, tmp, -1);
      arr9 = arr8;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut9, tmp11, tmp12;
          scrut9 = i < n1;
          if (scrut9 === true) {
            tmp11 = runtime.safeCall(f());
            arr9[i] = tmp11;
            tmp12 = i + 1;
            i = tmp12;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      inlinedVal = ratioRegions1.Matrix(arr8);
      c_right = inlinedVal;
      tmp1 = n - 1;
      scrut7 = tmp1 > 0;
      if (scrut7 === true) {
        let n2, f1, arr10, i1, inlinedVal11;
        inlinedVal11 = doit_make_matrix_lambda$_lambda$lambda1(ratioRegions1, n, -1);
        arr7 = ratioRegions1.#array_alloc(tmp1, inlinedVal11);
        n2 = tmp1;
        f1 = doit_make_matrix_lambda$$lambda$1(ratioRegions1, n, -1);
        arr10 = arr7;
        i1 = 1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut9, tmp11, tmp12;
            scrut9 = i1 < n2;
            if (scrut9 === true) {
              tmp11 = runtime.safeCall(f1());
              arr10[i1] = tmp11;
              tmp12 = i1 + 1;
              i1 = tmp12;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        }
        inlinedVal1 = ratioRegions1.Matrix(arr7);
        c_down = inlinedVal1;
        lambda$here = lambda$28(ratioRegions, n, n, c_right);
        ratioRegions.#doo(n, lambda$here);
        tmp2 = n - 1;
        lambda$here1 = lambda$27(ratioRegions, n, n, inlinedVal1);
        ratioRegions.#doo(tmp2, lambda$here1);
        scrut6 = n > 0;
        if (scrut6 === true) {
          let n3, f2, arr11, i2, inlinedVal12;
          inlinedVal12 = doit_make_matrix_lambda$_lambda$lambda2(ratioRegions1, n, 1);
          arr6 = ratioRegions1.#array_alloc(n, inlinedVal12);
          n3 = n;
          f2 = doit_make_matrix_lambda$$lambda$2(ratioRegions1, n, 1);
          arr11 = arr6;
          i2 = 1;
          inlinedLbl2: {
            loopLabel2: while (true) {
              let scrut9, tmp11, tmp12;
              scrut9 = i2 < n3;
              if (scrut9 === true) {
                tmp11 = runtime.safeCall(f2());
                arr11[i2] = tmp11;
                tmp12 = i2 + 1;
                i2 = tmp12;
                continue loopLabel2
              }
              break inlinedLbl2;
            }
          }
          inlinedVal2 = ratioRegions1.Matrix(arr6);
          c_right1 = c_right;
          c_down1 = c_down;
          w = inlinedVal2;
          lg_max_v = 15;
          height = ratioRegions1.#matrix_rows(inlinedVal2);
          width = ratioRegions1.#matrix_columns(inlinedVal2);
          tmp3 = width - 1;
          scrut = height > 0;
          if (scrut === true) {
            let n4, f3, arr12, i3, inlinedVal13;
            inlinedVal13 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions1, tmp3, 0);
            arr = ratioRegions1.#array_alloc(height, inlinedVal13);
            n4 = height;
            f3 = doit_rao_ratio_region_make_matrix_lambda$$lambda$5(ratioRegions1, tmp3, 0);
            arr12 = arr;
            i3 = 1;
            inlinedLbl3: {
              loopLabel3: while (true) {
                let scrut9, tmp11, tmp12;
                scrut9 = i3 < n4;
                if (scrut9 === true) {
                  tmp11 = runtime.safeCall(f3());
                  arr12[i3] = tmp11;
                  tmp12 = i3 + 1;
                  i3 = tmp12;
                  continue loopLabel3
                }
                break inlinedLbl3;
              }
            }
            inlinedVal4 = ratioRegions1.Matrix(arr);
            f_right = inlinedVal4;
            tmp4 = height - 1;
            scrut1 = tmp4 > 0;
            if (scrut1 === true) {
              let n5, f4, arr13, i4, inlinedVal14;
              inlinedVal14 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions1, width, 0);
              arr1 = ratioRegions1.#array_alloc(tmp4, inlinedVal14);
              n5 = tmp4;
              f4 = doit_rao_ratio_region_make_matrix_lambda$$lambda$4(ratioRegions1, width, 0);
              arr13 = arr1;
              i4 = 1;
              inlinedLbl4: {
                loopLabel4: while (true) {
                  let scrut9, tmp11, tmp12;
                  scrut9 = i4 < n5;
                  if (scrut9 === true) {
                    tmp11 = runtime.safeCall(f4());
                    arr13[i4] = tmp11;
                    tmp12 = i4 + 1;
                    i4 = tmp12;
                    continue loopLabel4
                  }
                  break inlinedLbl4;
                }
              }
              inlinedVal5 = ratioRegions1.Matrix(arr1);
              f_down = inlinedVal5;
              scrut2 = height > 0;
              if (scrut2 === true) {
                let n6, f5, arr14, i5, inlinedVal15;
                inlinedVal15 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions1, width, 0);
                arr2 = ratioRegions1.#array_alloc(height, inlinedVal15);
                n6 = height;
                f5 = doit_rao_ratio_region_make_matrix_lambda$$lambda$3(ratioRegions1, width, 0);
                arr14 = arr2;
                i5 = 1;
                inlinedLbl5: {
                  loopLabel5: while (true) {
                    let scrut9, tmp11, tmp12;
                    scrut9 = i5 < n6;
                    if (scrut9 === true) {
                      tmp11 = runtime.safeCall(f5());
                      arr14[i5] = tmp11;
                      tmp12 = i5 + 1;
                      i5 = tmp12;
                      continue loopLabel5
                    }
                    break inlinedLbl5;
                  }
                }
                inlinedVal6 = ratioRegions1.Matrix(arr2);
                f_t = inlinedVal6;
                scrut3 = height > 0;
                if (scrut3 === true) {
                  let n7, f6, arr15, i6, inlinedVal16;
                  inlinedVal16 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions1, width, 0);
                  arr3 = ratioRegions1.#array_alloc(height, inlinedVal16);
                  n7 = height;
                  f6 = doit_rao_ratio_region_make_matrix_lambda$$lambda$2(ratioRegions1, width, 0);
                  arr15 = arr3;
                  i6 = 1;
                  inlinedLbl6: {
                    loopLabel6: while (true) {
                      let scrut9, tmp11, tmp12;
                      scrut9 = i6 < n7;
                      if (scrut9 === true) {
                        tmp11 = runtime.safeCall(f6());
                        arr15[i6] = tmp11;
                        tmp12 = i6 + 1;
                        i6 = tmp12;
                        continue loopLabel6
                      }
                      break inlinedLbl6;
                    }
                  }
                  inlinedVal7 = ratioRegions1.Matrix(arr3);
                  h = inlinedVal7;
                  scrut4 = height > 0;
                  if (scrut4 === true) {
                    let n8, f7, arr16, i7, inlinedVal17;
                    inlinedVal17 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions1, width, 0);
                    arr4 = ratioRegions1.#array_alloc(height, inlinedVal17);
                    n8 = height;
                    f7 = doit_rao_ratio_region_make_matrix_lambda$$lambda$1(ratioRegions1, width, 0);
                    arr16 = arr4;
                    i7 = 1;
                    inlinedLbl7: {
                      loopLabel7: while (true) {
                        let scrut9, tmp11, tmp12;
                        scrut9 = i7 < n8;
                        if (scrut9 === true) {
                          tmp11 = runtime.safeCall(f7());
                          arr16[i7] = tmp11;
                          tmp12 = i7 + 1;
                          i7 = tmp12;
                          continue loopLabel7
                        }
                        break inlinedLbl7;
                      }
                    }
                    inlinedVal8 = ratioRegions1.Matrix(arr4);
                    e = inlinedVal8;
                    scrut5 = height > 0;
                    if (scrut5 === true) {
                      let n9, f8, arr17, i8, inlinedVal18;
                      inlinedVal18 = doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions1, width, false);
                      arr5 = ratioRegions1.#array_alloc(height, inlinedVal18);
                      n9 = height;
                      f8 = doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions1, width, false);
                      arr17 = arr5;
                      i8 = 1;
                      inlinedLbl8: {
                        loopLabel8: while (true) {
                          let scrut9, tmp11, tmp12;
                          scrut9 = i8 < n9;
                          if (scrut9 === true) {
                            tmp11 = runtime.safeCall(f8());
                            arr17[i8] = tmp11;
                            tmp12 = i8 + 1;
                            i8 = tmp12;
                            continue loopLabel8
                          }
                          break inlinedLbl8;
                        }
                      }
                      inlinedVal9 = ratioRegions1.Matrix(arr5);
                      tmp5 = height * width;
                      m1 = tmp5 + 2;
                      tmp6 = 2 * height;
                      tmp7 = tmp6 * width;
                      m2 = tmp7 + 2;
                      tmp8 = 2 * height;
                      tmp9 = tmp8 * width;
                      tmp10 = tmp9 + 3;
                      q = ratioRegions1.#make_vector(tmp10, ratioRegions1.Nil);
                      ratioRegions2 = ratioRegions1;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w1 = w;
                      height1 = height;
                      width1 = width;
                      f_right1 = f_right;
                      f_down1 = f_down;
                      f_t1 = f_t;
                      h1 = h;
                      e1 = e;
                      marked = inlinedVal9;
                      m11 = m1;
                      m21 = m2;
                      q1 = q;
                      lg_v = lg_max_v;
                      v_max = 0;
                      inlinedLbl9: {
                        loopLabel9: while (true) {
                          let v, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, inlinedVal19;
                          inlinedVal19 = lg_v < 0;
                          if (inlinedVal19 === true) {
                            let inlinedVal20, lambda$here2, ratioRegions3, control_string, i9, values, pushes, lifts, relabels, tmp21, tmp22, lambda$here3, lambda$here4, lambda$here5, lambda$here6, lambda$here7, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i10, p;
                            tmp11 = ratioRegions2.PInt(undefined);
                            tmp12 = ratioRegions2.Cons(tmp11, ratioRegions2.Nil);
                            ratioRegions3 = ratioRegions1;
                            control_string = "V-MAX=~s~%";
                            i9 = 0;
                            values = tmp12;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let scrut9, scrut10, scrut11, tmp23, tmp24, arg$Cons$0$, arg$Cons$1$, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, inlinedVal21;
                                inlinedVal21 = control_string.length;
                                tmp23 = i9 == inlinedVal21;
                                switch (tmp23) {
                                  case false:
                                    {
                                      let inlinedVal22;
                                      inlinedVal22 = control_string.at(i9);
                                      scrut9 = inlinedVal22 == "~";
                                      if (scrut9 === true) {
                                        let inlinedVal23;
                                        tmp24 = i9 + 1;
                                        inlinedVal23 = control_string.at(tmp24);
                                        scrut10 = inlinedVal23 == "s";
                                        if (scrut10 === true) {
                                          if (values instanceof ratioRegions3.Cons.class) {
                                            arg$Cons$0$ = values.head;
                                            arg$Cons$1$ = values.tail;
                                            if (arg$Cons$0$ instanceof ratioRegions3.PInt.class) {
                                              tmp25 = i9 + 2;
                                              i9 = tmp25;
                                              values = arg$Cons$1$;
                                              continue loopLabel10
                                            }
                                            scrut11 = inlinedVal23 == "%";
                                            if (scrut11 === true) {
                                              tmp26 = i9 + 2;
                                              i9 = tmp26;
                                              continue loopLabel10
                                            }
                                            tmp27 = i9 + 1;
                                            i9 = tmp27;
                                            continue loopLabel10;
                                          }
                                          scrut11 = inlinedVal23 == "%";
                                          if (scrut11 === true) {
                                            tmp28 = i9 + 2;
                                            i9 = tmp28;
                                            continue loopLabel10
                                          }
                                          tmp29 = i9 + 1;
                                          i9 = tmp29;
                                          continue loopLabel10;
                                        }
                                        scrut11 = inlinedVal23 == "%";
                                        if (scrut11 === true) {
                                          tmp30 = i9 + 2;
                                          i9 = tmp30;
                                          continue loopLabel10
                                        }
                                        tmp31 = i9 + 1;
                                        i9 = tmp31;
                                        continue loopLabel10;
                                      }
                                      tmp32 = i9 + 1;
                                      i9 = tmp32;
                                      continue loopLabel10;
                                    }
                                  case true:
                                    break inlinedLbl10;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp13 = v_max + 1;
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here4);
                            tmp21 = height1 - 1;
                            lambda$here5 = lambda$6(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp21, lambda$here5);
                            lambda$here6 = lambda$5(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here6);
                            tmp22 = width1 - 1;
                            lambda$here7 = lambda$4(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp22, lambda$here7);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height2 = height1;
                            width2 = width1;
                            f_right2 = f_right1;
                            f_down2 = f_down1;
                            f_t2 = f_t1;
                            h2 = h1;
                            e2 = e1;
                            marked1 = marked;
                            m12 = m11;
                            m22 = m21;
                            q2 = q1;
                            v1 = tmp13;
                            pushes1 = pushes;
                            lifts1 = lifts;
                            relabels1 = relabels;
                            i10 = 0;
                            p = false;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let scrut9, scrut10, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal21, inlinedVal22, tmp60, tmp61, tmp62;
                                tmp60 = i10 / 6;
                                tmp61 = ratioRegions4.#floor(tmp60);
                                tmp62 = 6 * tmp61;
                                inlinedVal21 = i10 - tmp62;
                                inlinedVal22 = inlinedVal21 == 0;
                                if (inlinedVal22 === true) {
                                  let inlinedVal23;
                                  switch (p) {
                                    case false:
                                      inlinedVal23 = true;
                                      break;
                                    case true:
                                      inlinedVal23 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp23 = inlinedVal23;
                                } else {
                                  tmp23 = false;
                                }
                                if (tmp23 === true) {
                                  relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                  tmp24 = relabels1.value + 1;
                                  relabels1.value = tmp24;
                                  lambda$here8 = lambda$16(ratioRegions4, width2, h2, e2, m12);
                                  scrut9 = ratioRegions4.#every_n(height2, lambda$here8);
                                  if (scrut9 === true) {
                                    tmp25 = ratioRegions4.PInt(undefined);
                                    tmp26 = ratioRegions4.PString(undefined);
                                    tmp27 = ratioRegions4.PInt(undefined);
                                    tmp28 = ratioRegions4.PString(undefined);
                                    tmp29 = ratioRegions4.PInt(undefined);
                                    tmp30 = ratioRegions4.PString(undefined);
                                    tmp31 = ratioRegions4.PInt(undefined);
                                    tmp32 = ratioRegions4.PString(undefined);
                                    tmp33 = ratioRegions4.Cons(tmp32, ratioRegions4.Nil);
                                    tmp34 = ratioRegions4.Cons(tmp31, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp30, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp29, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp28, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp27, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp26, tmp38);
                                    tmp40 = ratioRegions4.Cons(tmp25, tmp39);
                                    ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp40);
                                    break inlinedLbl11
                                  }
                                  {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    lambda$here9 = lambda$15(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal23, lambda$here9);
                                    lambda$here10 = lambda$14(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$13(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height2, lambda$here11);
                                    p = true;
                                    continue loopLabel11;
                                  }
                                }
                                lambda$here12 = lambda$12(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                scrut10 = ratioRegions4.#some_vector(q2, lambda$here12);
                                if (scrut10 === true) {
                                  let inlinedVal23, ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                                  inlinedVal23 = q2.length;
                                  tmp41 = inlinedVal23 - 1;
                                  ratioRegions5 = ratioRegions4;
                                  c_right4 = c_right3;
                                  c_down4 = c_down3;
                                  w3 = w2;
                                  height3 = height2;
                                  width3 = width2;
                                  f_right3 = f_right2;
                                  f_down3 = f_down2;
                                  f_t3 = f_t2;
                                  h3 = h2;
                                  e3 = e2;
                                  marked2 = marked1;
                                  m13 = m12;
                                  m23 = m22;
                                  q3 = q2;
                                  v2 = v1;
                                  pushes2 = pushes1;
                                  lifts2 = lifts1;
                                  k = tmp41;
                                  inlinedLbl12: {
                                    loopLabel12: while (true) {
                                      let tmp63, inlinedVal24;
                                      inlinedVal24 = k < 0;
                                      switch (inlinedVal24) {
                                        case false:
                                          {
                                            let inlinedVal25, x, f9, f10;
                                            inlinedVal25 = q3.at(k);
                                            x = ratioRegions5.Nil;
                                            q3[k] = x;
                                            f9 = lambda$18(ratioRegions5, marked2);
                                            ratioRegions5.#listApp$tailrec(f9, inlinedVal25);
                                            f10 = lambda$17(ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                            ratioRegions5.#listApp$tailrec(f10, inlinedVal25);
                                            tmp63 = k - 1;
                                            k = tmp63;
                                            continue loopLabel12;
                                          }
                                        case true:
                                          break inlinedLbl12;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp42 = i10 + 1;
                                  i10 = tmp42;
                                  p = false;
                                  continue loopLabel11
                                }
                                relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                tmp43 = relabels1.value + 1;
                                relabels1.value = tmp43;
                                tmp44 = ratioRegions4.PInt(undefined);
                                tmp45 = ratioRegions4.PString(undefined);
                                tmp46 = ratioRegions4.PInt(undefined);
                                tmp47 = ratioRegions4.PString(undefined);
                                tmp48 = ratioRegions4.PInt(undefined);
                                tmp49 = ratioRegions4.PString(undefined);
                                tmp50 = ratioRegions4.PInt(undefined);
                                tmp51 = ratioRegions4.PString(undefined);
                                tmp52 = ratioRegions4.Cons(tmp51, ratioRegions4.Nil);
                                tmp53 = ratioRegions4.Cons(tmp50, tmp52);
                                tmp54 = ratioRegions4.Cons(tmp49, tmp53);
                                tmp55 = ratioRegions4.Cons(tmp48, tmp54);
                                tmp56 = ratioRegions4.Cons(tmp47, tmp55);
                                tmp57 = ratioRegions4.Cons(tmp46, tmp56);
                                tmp58 = ratioRegions4.Cons(tmp45, tmp57);
                                tmp59 = ratioRegions4.Cons(tmp44, tmp58);
                                ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp59);
                                break inlinedLbl11;
                              }
                            }
                            lambda$here2 = lambda$(ratioRegions2, width1, h1, m11);
                            inlinedVal20 = ratioRegions2.#map_n_vector(height1, lambda$here2);
                            inlinedVal3 = inlinedVal20;
                            break inlinedLbl9
                          }
                          {
                            let i9, c, inlinedVal20, inlinedVal21, lambda$here2, ratioRegions3, control_string, i10, values, pushes, lifts, relabels, tmp21, tmp22, lambda$here3, lambda$here4, lambda$here5, lambda$here6, lambda$here7, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i11, p;
                            i9 = lg_v;
                            c = 1;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp23, tmp24, inlinedVal22;
                                inlinedVal22 = i9 == 0;
                                if (inlinedVal22 === true) {
                                  inlinedVal20 = c;
                                  break inlinedLbl10
                                }
                                tmp23 = i9 - 1;
                                tmp24 = c + c;
                                i9 = tmp23;
                                c = tmp24;
                                continue loopLabel10;
                              }
                            }
                            v = v_max + inlinedVal20;
                            tmp14 = ratioRegions2.PInt(undefined);
                            tmp15 = ratioRegions2.PInt(undefined);
                            tmp16 = ratioRegions2.PInt(undefined);
                            tmp17 = ratioRegions2.Cons(tmp16, ratioRegions2.Nil);
                            tmp18 = ratioRegions2.Cons(tmp15, tmp17);
                            tmp19 = ratioRegions2.Cons(tmp14, tmp18);
                            ratioRegions3 = ratioRegions1;
                            control_string = "LG-V=~s, V-MAX=~s, V=~s~%";
                            i10 = 0;
                            values = tmp19;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let scrut9, scrut10, scrut11, tmp23, tmp24, arg$Cons$0$, arg$Cons$1$, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, inlinedVal22;
                                inlinedVal22 = control_string.length;
                                tmp23 = i10 == inlinedVal22;
                                switch (tmp23) {
                                  case false:
                                    {
                                      let inlinedVal23;
                                      inlinedVal23 = control_string.at(i10);
                                      scrut9 = inlinedVal23 == "~";
                                      if (scrut9 === true) {
                                        let inlinedVal24;
                                        tmp24 = i10 + 1;
                                        inlinedVal24 = control_string.at(tmp24);
                                        scrut10 = inlinedVal24 == "s";
                                        if (scrut10 === true) {
                                          if (values instanceof ratioRegions3.Cons.class) {
                                            arg$Cons$0$ = values.head;
                                            arg$Cons$1$ = values.tail;
                                            if (arg$Cons$0$ instanceof ratioRegions3.PInt.class) {
                                              tmp25 = i10 + 2;
                                              i10 = tmp25;
                                              values = arg$Cons$1$;
                                              continue loopLabel11
                                            }
                                            scrut11 = inlinedVal24 == "%";
                                            if (scrut11 === true) {
                                              tmp26 = i10 + 2;
                                              i10 = tmp26;
                                              continue loopLabel11
                                            }
                                            tmp27 = i10 + 1;
                                            i10 = tmp27;
                                            continue loopLabel11;
                                          }
                                          scrut11 = inlinedVal24 == "%";
                                          if (scrut11 === true) {
                                            tmp28 = i10 + 2;
                                            i10 = tmp28;
                                            continue loopLabel11
                                          }
                                          tmp29 = i10 + 1;
                                          i10 = tmp29;
                                          continue loopLabel11;
                                        }
                                        scrut11 = inlinedVal24 == "%";
                                        if (scrut11 === true) {
                                          tmp30 = i10 + 2;
                                          i10 = tmp30;
                                          continue loopLabel11
                                        }
                                        tmp31 = i10 + 1;
                                        i10 = tmp31;
                                        continue loopLabel11;
                                      }
                                      tmp32 = i10 + 1;
                                      i10 = tmp32;
                                      continue loopLabel11;
                                    }
                                  case true:
                                    break inlinedLbl11;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here4);
                            tmp21 = height1 - 1;
                            lambda$here5 = lambda$6(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp21, lambda$here5);
                            lambda$here6 = lambda$5(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here6);
                            tmp22 = width1 - 1;
                            lambda$here7 = lambda$4(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp22, lambda$here7);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height2 = height1;
                            width2 = width1;
                            f_right2 = f_right1;
                            f_down2 = f_down1;
                            f_t2 = f_t1;
                            h2 = h1;
                            e2 = e1;
                            marked1 = marked;
                            m12 = m11;
                            m22 = m21;
                            q2 = q1;
                            v1 = v;
                            pushes1 = pushes;
                            lifts1 = lifts;
                            relabels1 = relabels;
                            i11 = 0;
                            p = false;
                            inlinedLbl12: {
                              loopLabel12: while (true) {
                                let scrut9, scrut10, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal22, inlinedVal23, tmp60, tmp61, tmp62;
                                tmp60 = i11 / 6;
                                tmp61 = ratioRegions4.#floor(tmp60);
                                tmp62 = 6 * tmp61;
                                inlinedVal22 = i11 - tmp62;
                                inlinedVal23 = inlinedVal22 == 0;
                                if (inlinedVal23 === true) {
                                  let inlinedVal24;
                                  switch (p) {
                                    case false:
                                      inlinedVal24 = true;
                                      break;
                                    case true:
                                      inlinedVal24 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp23 = inlinedVal24;
                                } else {
                                  tmp23 = false;
                                }
                                if (tmp23 === true) {
                                  relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                  tmp24 = relabels1.value + 1;
                                  relabels1.value = tmp24;
                                  lambda$here8 = lambda$16(ratioRegions4, width2, h2, e2, m12);
                                  scrut9 = ratioRegions4.#every_n(height2, lambda$here8);
                                  if (scrut9 === true) {
                                    tmp25 = ratioRegions4.PInt(undefined);
                                    tmp26 = ratioRegions4.PString(undefined);
                                    tmp27 = ratioRegions4.PInt(undefined);
                                    tmp28 = ratioRegions4.PString(undefined);
                                    tmp29 = ratioRegions4.PInt(undefined);
                                    tmp30 = ratioRegions4.PString(undefined);
                                    tmp31 = ratioRegions4.PInt(undefined);
                                    tmp32 = ratioRegions4.PString(undefined);
                                    tmp33 = ratioRegions4.Cons(tmp32, ratioRegions4.Nil);
                                    tmp34 = ratioRegions4.Cons(tmp31, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp30, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp29, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp28, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp27, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp26, tmp38);
                                    tmp40 = ratioRegions4.Cons(tmp25, tmp39);
                                    ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp40);
                                    break inlinedLbl12
                                  }
                                  {
                                    let inlinedVal24;
                                    inlinedVal24 = q2.length;
                                    lambda$here9 = lambda$15(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal24, lambda$here9);
                                    lambda$here10 = lambda$14(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$13(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height2, lambda$here11);
                                    p = true;
                                    continue loopLabel12;
                                  }
                                }
                                lambda$here12 = lambda$12(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                scrut10 = ratioRegions4.#some_vector(q2, lambda$here12);
                                if (scrut10 === true) {
                                  let inlinedVal24, ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                                  inlinedVal24 = q2.length;
                                  tmp41 = inlinedVal24 - 1;
                                  ratioRegions5 = ratioRegions4;
                                  c_right4 = c_right3;
                                  c_down4 = c_down3;
                                  w3 = w2;
                                  height3 = height2;
                                  width3 = width2;
                                  f_right3 = f_right2;
                                  f_down3 = f_down2;
                                  f_t3 = f_t2;
                                  h3 = h2;
                                  e3 = e2;
                                  marked2 = marked1;
                                  m13 = m12;
                                  m23 = m22;
                                  q3 = q2;
                                  v2 = v1;
                                  pushes2 = pushes1;
                                  lifts2 = lifts1;
                                  k = tmp41;
                                  inlinedLbl13: {
                                    loopLabel13: while (true) {
                                      let tmp63, inlinedVal25;
                                      inlinedVal25 = k < 0;
                                      switch (inlinedVal25) {
                                        case false:
                                          {
                                            let inlinedVal26, x, f9, f10;
                                            inlinedVal26 = q3.at(k);
                                            x = ratioRegions5.Nil;
                                            q3[k] = x;
                                            f9 = lambda$18(ratioRegions5, marked2);
                                            ratioRegions5.#listApp$tailrec(f9, inlinedVal26);
                                            f10 = lambda$17(ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                            ratioRegions5.#listApp$tailrec(f10, inlinedVal26);
                                            tmp63 = k - 1;
                                            k = tmp63;
                                            continue loopLabel13;
                                          }
                                        case true:
                                          break inlinedLbl13;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp42 = i11 + 1;
                                  i11 = tmp42;
                                  p = false;
                                  continue loopLabel12
                                }
                                relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                tmp43 = relabels1.value + 1;
                                relabels1.value = tmp43;
                                tmp44 = ratioRegions4.PInt(undefined);
                                tmp45 = ratioRegions4.PString(undefined);
                                tmp46 = ratioRegions4.PInt(undefined);
                                tmp47 = ratioRegions4.PString(undefined);
                                tmp48 = ratioRegions4.PInt(undefined);
                                tmp49 = ratioRegions4.PString(undefined);
                                tmp50 = ratioRegions4.PInt(undefined);
                                tmp51 = ratioRegions4.PString(undefined);
                                tmp52 = ratioRegions4.Cons(tmp51, ratioRegions4.Nil);
                                tmp53 = ratioRegions4.Cons(tmp50, tmp52);
                                tmp54 = ratioRegions4.Cons(tmp49, tmp53);
                                tmp55 = ratioRegions4.Cons(tmp48, tmp54);
                                tmp56 = ratioRegions4.Cons(tmp47, tmp55);
                                tmp57 = ratioRegions4.Cons(tmp46, tmp56);
                                tmp58 = ratioRegions4.Cons(tmp45, tmp57);
                                tmp59 = ratioRegions4.Cons(tmp44, tmp58);
                                ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp59);
                                break inlinedLbl12;
                              }
                            }
                            tmp20 = lg_v - 1;
                            lambda$here2 = lambda$2(ratioRegions2, width1, h1, m11);
                            inlinedVal21 = ratioRegions2.#every_n(height1, lambda$here2);
                            if (inlinedVal21 === true) {
                              lg_v = tmp20;
                              v_max = v;
                              continue loopLabel9
                            }
                            lg_v = tmp20;
                            v_max = v_max;
                            continue loopLabel9;
                          }
                        }
                      }
                      return inlinedVal3
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
    let n, c_right, c_down, tmp, tmp1, lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, c_right1, c_down1, w, lg_max_v, arr, scrut, arr1, scrut1, arr2, height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, ratioRegions2, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, inlinedVal9, scrut2, arr3, scrut3, arr4, scrut4, arr5, scrut5, arr6, scrut6, arr7, scrut7, arr8;
    n = 5;
    if (true === true) {
      let n1, f, arr9, i, inlinedVal10;
      inlinedVal10 = main_doit_make_matrix_lambda$_lambda$lambda2(ratioRegions1, 4, -1);
      arr = ratioRegions1.#array_alloc(5, inlinedVal10);
      n1 = 5;
      f = main_doit_make_matrix_lambda$$lambda$2(ratioRegions1, 4, -1);
      arr9 = arr;
      i = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut8, tmp10, tmp11;
          scrut8 = i < n1;
          if (scrut8 === true) {
            tmp10 = runtime.safeCall(f());
            arr9[i] = tmp10;
            tmp11 = i + 1;
            i = tmp11;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      inlinedVal = ratioRegions1.Matrix(arr);
      c_right = inlinedVal;
      tmp = n - 1;
      scrut = tmp > 0;
      if (scrut === true) {
        let n2, f1, arr10, i1, inlinedVal11;
        inlinedVal11 = main_doit_make_matrix_lambda$_lambda$lambda1(ratioRegions1, n, -1);
        arr1 = ratioRegions1.#array_alloc(tmp, inlinedVal11);
        n2 = tmp;
        f1 = main_doit_make_matrix_lambda$$lambda$1(ratioRegions1, n, -1);
        arr10 = arr1;
        i1 = 1;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let scrut8, tmp10, tmp11;
            scrut8 = i1 < n2;
            if (scrut8 === true) {
              tmp10 = runtime.safeCall(f1());
              arr10[i1] = tmp10;
              tmp11 = i1 + 1;
              i1 = tmp11;
              continue loopLabel1
            }
            break inlinedLbl1;
          }
        }
        inlinedVal1 = ratioRegions1.Matrix(arr1);
        c_down = inlinedVal1;
        lambda$here = lambda$28(ratioRegions1, n, n, c_right);
        ratioRegions1.#doo(n, lambda$here);
        tmp1 = n - 1;
        lambda$here1 = lambda$27(ratioRegions1, n, n, inlinedVal1);
        ratioRegions1.#doo(tmp1, lambda$here1);
        scrut1 = n > 0;
        if (scrut1 === true) {
          let n3, f2, arr11, i2, inlinedVal12;
          inlinedVal12 = main_doit_make_matrix_lambda$_lambda$lambda(ratioRegions1, n, 1);
          arr2 = ratioRegions1.#array_alloc(n, inlinedVal12);
          n3 = n;
          f2 = main_doit_make_matrix_lambda$$lambda$(ratioRegions1, n, 1);
          arr11 = arr2;
          i2 = 1;
          inlinedLbl2: {
            loopLabel2: while (true) {
              let scrut8, tmp10, tmp11;
              scrut8 = i2 < n3;
              if (scrut8 === true) {
                tmp10 = runtime.safeCall(f2());
                arr11[i2] = tmp10;
                tmp11 = i2 + 1;
                i2 = tmp11;
                continue loopLabel2
              }
              break inlinedLbl2;
            }
          }
          inlinedVal2 = ratioRegions1.Matrix(arr2);
          c_right1 = c_right;
          c_down1 = c_down;
          w = inlinedVal2;
          lg_max_v = 15;
          height = ratioRegions1.#matrix_rows(inlinedVal2);
          width = ratioRegions1.#matrix_columns(inlinedVal2);
          tmp2 = width - 1;
          scrut2 = height > 0;
          if (scrut2 === true) {
            let n4, f3, arr12, i3, inlinedVal13;
            inlinedVal13 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda(ratioRegions1, tmp2, 0);
            arr3 = ratioRegions1.#array_alloc(height, inlinedVal13);
            n4 = height;
            f3 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$(ratioRegions1, tmp2, 0);
            arr12 = arr3;
            i3 = 1;
            inlinedLbl3: {
              loopLabel3: while (true) {
                let scrut8, tmp10, tmp11;
                scrut8 = i3 < n4;
                if (scrut8 === true) {
                  tmp10 = runtime.safeCall(f3());
                  arr12[i3] = tmp10;
                  tmp11 = i3 + 1;
                  i3 = tmp11;
                  continue loopLabel3
                }
                break inlinedLbl3;
              }
            }
            inlinedVal4 = ratioRegions1.Matrix(arr3);
            f_right = inlinedVal4;
            tmp3 = height - 1;
            scrut3 = tmp3 > 0;
            if (scrut3 === true) {
              let n5, f4, arr13, i4, inlinedVal14;
              inlinedVal14 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1(ratioRegions1, width, 0);
              arr4 = ratioRegions1.#array_alloc(tmp3, inlinedVal14);
              n5 = tmp3;
              f4 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1(ratioRegions1, width, 0);
              arr13 = arr4;
              i4 = 1;
              inlinedLbl4: {
                loopLabel4: while (true) {
                  let scrut8, tmp10, tmp11;
                  scrut8 = i4 < n5;
                  if (scrut8 === true) {
                    tmp10 = runtime.safeCall(f4());
                    arr13[i4] = tmp10;
                    tmp11 = i4 + 1;
                    i4 = tmp11;
                    continue loopLabel4
                  }
                  break inlinedLbl4;
                }
              }
              inlinedVal5 = ratioRegions1.Matrix(arr4);
              f_down = inlinedVal5;
              scrut4 = height > 0;
              if (scrut4 === true) {
                let n6, f5, arr14, i5, inlinedVal15;
                inlinedVal15 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2(ratioRegions1, width, 0);
                arr5 = ratioRegions1.#array_alloc(height, inlinedVal15);
                n6 = height;
                f5 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2(ratioRegions1, width, 0);
                arr14 = arr5;
                i5 = 1;
                inlinedLbl5: {
                  loopLabel5: while (true) {
                    let scrut8, tmp10, tmp11;
                    scrut8 = i5 < n6;
                    if (scrut8 === true) {
                      tmp10 = runtime.safeCall(f5());
                      arr14[i5] = tmp10;
                      tmp11 = i5 + 1;
                      i5 = tmp11;
                      continue loopLabel5
                    }
                    break inlinedLbl5;
                  }
                }
                inlinedVal6 = ratioRegions1.Matrix(arr5);
                f_t = inlinedVal6;
                scrut5 = height > 0;
                if (scrut5 === true) {
                  let n7, f6, arr15, i6, inlinedVal16;
                  inlinedVal16 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3(ratioRegions1, width, 0);
                  arr6 = ratioRegions1.#array_alloc(height, inlinedVal16);
                  n7 = height;
                  f6 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3(ratioRegions1, width, 0);
                  arr15 = arr6;
                  i6 = 1;
                  inlinedLbl6: {
                    loopLabel6: while (true) {
                      let scrut8, tmp10, tmp11;
                      scrut8 = i6 < n7;
                      if (scrut8 === true) {
                        tmp10 = runtime.safeCall(f6());
                        arr15[i6] = tmp10;
                        tmp11 = i6 + 1;
                        i6 = tmp11;
                        continue loopLabel6
                      }
                      break inlinedLbl6;
                    }
                  }
                  inlinedVal7 = ratioRegions1.Matrix(arr6);
                  h = inlinedVal7;
                  scrut6 = height > 0;
                  if (scrut6 === true) {
                    let n8, f7, arr16, i7, inlinedVal17;
                    inlinedVal17 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4(ratioRegions1, width, 0);
                    arr7 = ratioRegions1.#array_alloc(height, inlinedVal17);
                    n8 = height;
                    f7 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4(ratioRegions1, width, 0);
                    arr16 = arr7;
                    i7 = 1;
                    inlinedLbl7: {
                      loopLabel7: while (true) {
                        let scrut8, tmp10, tmp11;
                        scrut8 = i7 < n8;
                        if (scrut8 === true) {
                          tmp10 = runtime.safeCall(f7());
                          arr16[i7] = tmp10;
                          tmp11 = i7 + 1;
                          i7 = tmp11;
                          continue loopLabel7
                        }
                        break inlinedLbl7;
                      }
                    }
                    inlinedVal8 = ratioRegions1.Matrix(arr7);
                    e = inlinedVal8;
                    scrut7 = height > 0;
                    if (scrut7 === true) {
                      let n9, f8, arr17, i8, inlinedVal18;
                      inlinedVal18 = main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5(ratioRegions1, width, false);
                      arr8 = ratioRegions1.#array_alloc(height, inlinedVal18);
                      n9 = height;
                      f8 = main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5(ratioRegions1, width, false);
                      arr17 = arr8;
                      i8 = 1;
                      inlinedLbl8: {
                        loopLabel8: while (true) {
                          let scrut8, tmp10, tmp11;
                          scrut8 = i8 < n9;
                          if (scrut8 === true) {
                            tmp10 = runtime.safeCall(f8());
                            arr17[i8] = tmp10;
                            tmp11 = i8 + 1;
                            i8 = tmp11;
                            continue loopLabel8
                          }
                          break inlinedLbl8;
                        }
                      }
                      inlinedVal9 = ratioRegions1.Matrix(arr8);
                      tmp4 = height * width;
                      m1 = tmp4 + 2;
                      tmp5 = 2 * height;
                      tmp6 = tmp5 * width;
                      m2 = tmp6 + 2;
                      tmp7 = 2 * height;
                      tmp8 = tmp7 * width;
                      tmp9 = tmp8 + 3;
                      q = ratioRegions1.#make_vector(tmp9, ratioRegions1.Nil);
                      ratioRegions2 = ratioRegions1;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w1 = w;
                      height1 = height;
                      width1 = width;
                      f_right1 = f_right;
                      f_down1 = f_down;
                      f_t1 = f_t;
                      h1 = h;
                      e1 = e;
                      marked = inlinedVal9;
                      m11 = m1;
                      m21 = m2;
                      q1 = q;
                      lg_v = lg_max_v;
                      v_max = 0;
                      inlinedLbl9: {
                        loopLabel9: while (true) {
                          let v, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, inlinedVal19;
                          inlinedVal19 = lg_v < 0;
                          if (inlinedVal19 === true) {
                            let inlinedVal20, lambda$here2, ratioRegions3, control_string, i9, values, pushes, lifts, relabels, tmp20, tmp21, lambda$here3, lambda$here4, lambda$here5, lambda$here6, lambda$here7, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i10, p;
                            tmp10 = ratioRegions2.PInt(undefined);
                            tmp11 = ratioRegions2.Cons(tmp10, ratioRegions2.Nil);
                            ratioRegions3 = ratioRegions1;
                            control_string = "V-MAX=~s~%";
                            i9 = 0;
                            values = tmp11;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let scrut8, scrut9, scrut10, tmp22, tmp23, arg$Cons$0$, arg$Cons$1$, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, inlinedVal21;
                                inlinedVal21 = control_string.length;
                                tmp22 = i9 == inlinedVal21;
                                switch (tmp22) {
                                  case false:
                                    {
                                      let inlinedVal22;
                                      inlinedVal22 = control_string.at(i9);
                                      scrut8 = inlinedVal22 == "~";
                                      if (scrut8 === true) {
                                        let inlinedVal23;
                                        tmp23 = i9 + 1;
                                        inlinedVal23 = control_string.at(tmp23);
                                        scrut9 = inlinedVal23 == "s";
                                        if (scrut9 === true) {
                                          if (values instanceof ratioRegions3.Cons.class) {
                                            arg$Cons$0$ = values.head;
                                            arg$Cons$1$ = values.tail;
                                            if (arg$Cons$0$ instanceof ratioRegions3.PInt.class) {
                                              tmp24 = i9 + 2;
                                              i9 = tmp24;
                                              values = arg$Cons$1$;
                                              continue loopLabel10
                                            }
                                            scrut10 = inlinedVal23 == "%";
                                            if (scrut10 === true) {
                                              tmp25 = i9 + 2;
                                              i9 = tmp25;
                                              continue loopLabel10
                                            }
                                            tmp26 = i9 + 1;
                                            i9 = tmp26;
                                            continue loopLabel10;
                                          }
                                          scrut10 = inlinedVal23 == "%";
                                          if (scrut10 === true) {
                                            tmp27 = i9 + 2;
                                            i9 = tmp27;
                                            continue loopLabel10
                                          }
                                          tmp28 = i9 + 1;
                                          i9 = tmp28;
                                          continue loopLabel10;
                                        }
                                        scrut10 = inlinedVal23 == "%";
                                        if (scrut10 === true) {
                                          tmp29 = i9 + 2;
                                          i9 = tmp29;
                                          continue loopLabel10
                                        }
                                        tmp30 = i9 + 1;
                                        i9 = tmp30;
                                        continue loopLabel10;
                                      }
                                      tmp31 = i9 + 1;
                                      i9 = tmp31;
                                      continue loopLabel10;
                                    }
                                  case true:
                                    break inlinedLbl10;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            tmp12 = v_max + 1;
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here4);
                            tmp20 = height1 - 1;
                            lambda$here5 = lambda$6(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp20, lambda$here5);
                            lambda$here6 = lambda$5(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here6);
                            tmp21 = width1 - 1;
                            lambda$here7 = lambda$4(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp21, lambda$here7);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height2 = height1;
                            width2 = width1;
                            f_right2 = f_right1;
                            f_down2 = f_down1;
                            f_t2 = f_t1;
                            h2 = h1;
                            e2 = e1;
                            marked1 = marked;
                            m12 = m11;
                            m22 = m21;
                            q2 = q1;
                            v1 = tmp12;
                            pushes1 = pushes;
                            lifts1 = lifts;
                            relabels1 = relabels;
                            i10 = 0;
                            p = false;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let scrut8, scrut9, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal21, inlinedVal22, tmp59, tmp60, tmp61;
                                tmp59 = i10 / 6;
                                tmp60 = ratioRegions4.#floor(tmp59);
                                tmp61 = 6 * tmp60;
                                inlinedVal21 = i10 - tmp61;
                                inlinedVal22 = inlinedVal21 == 0;
                                if (inlinedVal22 === true) {
                                  let inlinedVal23;
                                  switch (p) {
                                    case false:
                                      inlinedVal23 = true;
                                      break;
                                    case true:
                                      inlinedVal23 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp22 = inlinedVal23;
                                } else {
                                  tmp22 = false;
                                }
                                if (tmp22 === true) {
                                  relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                  tmp23 = relabels1.value + 1;
                                  relabels1.value = tmp23;
                                  lambda$here8 = lambda$16(ratioRegions4, width2, h2, e2, m12);
                                  scrut8 = ratioRegions4.#every_n(height2, lambda$here8);
                                  if (scrut8 === true) {
                                    tmp24 = ratioRegions4.PInt(undefined);
                                    tmp25 = ratioRegions4.PString(undefined);
                                    tmp26 = ratioRegions4.PInt(undefined);
                                    tmp27 = ratioRegions4.PString(undefined);
                                    tmp28 = ratioRegions4.PInt(undefined);
                                    tmp29 = ratioRegions4.PString(undefined);
                                    tmp30 = ratioRegions4.PInt(undefined);
                                    tmp31 = ratioRegions4.PString(undefined);
                                    tmp32 = ratioRegions4.Cons(tmp31, ratioRegions4.Nil);
                                    tmp33 = ratioRegions4.Cons(tmp30, tmp32);
                                    tmp34 = ratioRegions4.Cons(tmp29, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp28, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp27, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp26, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp25, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp24, tmp38);
                                    ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp39);
                                    break inlinedLbl11
                                  }
                                  {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    lambda$here9 = lambda$15(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal23, lambda$here9);
                                    lambda$here10 = lambda$14(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$13(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height2, lambda$here11);
                                    p = true;
                                    continue loopLabel11;
                                  }
                                }
                                lambda$here12 = lambda$12(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                scrut9 = ratioRegions4.#some_vector(q2, lambda$here12);
                                if (scrut9 === true) {
                                  let inlinedVal23, ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                                  inlinedVal23 = q2.length;
                                  tmp40 = inlinedVal23 - 1;
                                  ratioRegions5 = ratioRegions4;
                                  c_right4 = c_right3;
                                  c_down4 = c_down3;
                                  w3 = w2;
                                  height3 = height2;
                                  width3 = width2;
                                  f_right3 = f_right2;
                                  f_down3 = f_down2;
                                  f_t3 = f_t2;
                                  h3 = h2;
                                  e3 = e2;
                                  marked2 = marked1;
                                  m13 = m12;
                                  m23 = m22;
                                  q3 = q2;
                                  v2 = v1;
                                  pushes2 = pushes1;
                                  lifts2 = lifts1;
                                  k = tmp40;
                                  inlinedLbl12: {
                                    loopLabel12: while (true) {
                                      let tmp62, inlinedVal24;
                                      inlinedVal24 = k < 0;
                                      switch (inlinedVal24) {
                                        case false:
                                          {
                                            let inlinedVal25, x, f9, f10;
                                            inlinedVal25 = q3.at(k);
                                            x = ratioRegions5.Nil;
                                            q3[k] = x;
                                            f9 = lambda$18(ratioRegions5, marked2);
                                            ratioRegions5.#listApp$tailrec(f9, inlinedVal25);
                                            f10 = lambda$17(ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                            ratioRegions5.#listApp$tailrec(f10, inlinedVal25);
                                            tmp62 = k - 1;
                                            k = tmp62;
                                            continue loopLabel12;
                                          }
                                        case true:
                                          break inlinedLbl12;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp41 = i10 + 1;
                                  i10 = tmp41;
                                  p = false;
                                  continue loopLabel11
                                }
                                relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                tmp42 = relabels1.value + 1;
                                relabels1.value = tmp42;
                                tmp43 = ratioRegions4.PInt(undefined);
                                tmp44 = ratioRegions4.PString(undefined);
                                tmp45 = ratioRegions4.PInt(undefined);
                                tmp46 = ratioRegions4.PString(undefined);
                                tmp47 = ratioRegions4.PInt(undefined);
                                tmp48 = ratioRegions4.PString(undefined);
                                tmp49 = ratioRegions4.PInt(undefined);
                                tmp50 = ratioRegions4.PString(undefined);
                                tmp51 = ratioRegions4.Cons(tmp50, ratioRegions4.Nil);
                                tmp52 = ratioRegions4.Cons(tmp49, tmp51);
                                tmp53 = ratioRegions4.Cons(tmp48, tmp52);
                                tmp54 = ratioRegions4.Cons(tmp47, tmp53);
                                tmp55 = ratioRegions4.Cons(tmp46, tmp54);
                                tmp56 = ratioRegions4.Cons(tmp45, tmp55);
                                tmp57 = ratioRegions4.Cons(tmp44, tmp56);
                                tmp58 = ratioRegions4.Cons(tmp43, tmp57);
                                ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp58);
                                break inlinedLbl11;
                              }
                            }
                            lambda$here2 = lambda$(ratioRegions2, width1, h1, m11);
                            inlinedVal20 = ratioRegions2.#map_n_vector(height1, lambda$here2);
                            inlinedVal3 = inlinedVal20;
                            break inlinedLbl9
                          }
                          {
                            let i9, c, inlinedVal20, inlinedVal21, lambda$here2, ratioRegions3, control_string, i10, values, pushes, lifts, relabels, tmp20, tmp21, lambda$here3, lambda$here4, lambda$here5, lambda$here6, lambda$here7, ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i11, p;
                            i9 = lg_v;
                            c = 1;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp22, tmp23, inlinedVal22;
                                inlinedVal22 = i9 == 0;
                                if (inlinedVal22 === true) {
                                  inlinedVal20 = c;
                                  break inlinedLbl10
                                }
                                tmp22 = i9 - 1;
                                tmp23 = c + c;
                                i9 = tmp22;
                                c = tmp23;
                                continue loopLabel10;
                              }
                            }
                            v = v_max + inlinedVal20;
                            tmp13 = ratioRegions2.PInt(undefined);
                            tmp14 = ratioRegions2.PInt(undefined);
                            tmp15 = ratioRegions2.PInt(undefined);
                            tmp16 = ratioRegions2.Cons(tmp15, ratioRegions2.Nil);
                            tmp17 = ratioRegions2.Cons(tmp14, tmp16);
                            tmp18 = ratioRegions2.Cons(tmp13, tmp17);
                            ratioRegions3 = ratioRegions1;
                            control_string = "LG-V=~s, V-MAX=~s, V=~s~%";
                            i10 = 0;
                            values = tmp18;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let scrut8, scrut9, scrut10, tmp22, tmp23, arg$Cons$0$, arg$Cons$1$, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, inlinedVal22;
                                inlinedVal22 = control_string.length;
                                tmp22 = i10 == inlinedVal22;
                                switch (tmp22) {
                                  case false:
                                    {
                                      let inlinedVal23;
                                      inlinedVal23 = control_string.at(i10);
                                      scrut8 = inlinedVal23 == "~";
                                      if (scrut8 === true) {
                                        let inlinedVal24;
                                        tmp23 = i10 + 1;
                                        inlinedVal24 = control_string.at(tmp23);
                                        scrut9 = inlinedVal24 == "s";
                                        if (scrut9 === true) {
                                          if (values instanceof ratioRegions3.Cons.class) {
                                            arg$Cons$0$ = values.head;
                                            arg$Cons$1$ = values.tail;
                                            if (arg$Cons$0$ instanceof ratioRegions3.PInt.class) {
                                              tmp24 = i10 + 2;
                                              i10 = tmp24;
                                              values = arg$Cons$1$;
                                              continue loopLabel11
                                            }
                                            scrut10 = inlinedVal24 == "%";
                                            if (scrut10 === true) {
                                              tmp25 = i10 + 2;
                                              i10 = tmp25;
                                              continue loopLabel11
                                            }
                                            tmp26 = i10 + 1;
                                            i10 = tmp26;
                                            continue loopLabel11;
                                          }
                                          scrut10 = inlinedVal24 == "%";
                                          if (scrut10 === true) {
                                            tmp27 = i10 + 2;
                                            i10 = tmp27;
                                            continue loopLabel11
                                          }
                                          tmp28 = i10 + 1;
                                          i10 = tmp28;
                                          continue loopLabel11;
                                        }
                                        scrut10 = inlinedVal24 == "%";
                                        if (scrut10 === true) {
                                          tmp29 = i10 + 2;
                                          i10 = tmp29;
                                          continue loopLabel11
                                        }
                                        tmp30 = i10 + 1;
                                        i10 = tmp30;
                                        continue loopLabel11;
                                      }
                                      tmp31 = i10 + 1;
                                      i10 = tmp31;
                                      continue loopLabel11;
                                    }
                                  case true:
                                    break inlinedLbl11;
                                }
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                              }
                            }
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here4);
                            tmp20 = height1 - 1;
                            lambda$here5 = lambda$6(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp20, lambda$here5);
                            lambda$here6 = lambda$5(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here6);
                            tmp21 = width1 - 1;
                            lambda$here7 = lambda$4(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp21, lambda$here7);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height2 = height1;
                            width2 = width1;
                            f_right2 = f_right1;
                            f_down2 = f_down1;
                            f_t2 = f_t1;
                            h2 = h1;
                            e2 = e1;
                            marked1 = marked;
                            m12 = m11;
                            m22 = m21;
                            q2 = q1;
                            v1 = v;
                            pushes1 = pushes;
                            lifts1 = lifts;
                            relabels1 = relabels;
                            i11 = 0;
                            p = false;
                            inlinedLbl12: {
                              loopLabel12: while (true) {
                                let scrut8, scrut9, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, lambda$here8, lambda$here9, lambda$here10, lambda$here11, lambda$here12, inlinedVal22, inlinedVal23, tmp59, tmp60, tmp61;
                                tmp59 = i11 / 6;
                                tmp60 = ratioRegions4.#floor(tmp59);
                                tmp61 = 6 * tmp60;
                                inlinedVal22 = i11 - tmp61;
                                inlinedVal23 = inlinedVal22 == 0;
                                if (inlinedVal23 === true) {
                                  let inlinedVal24;
                                  switch (p) {
                                    case false:
                                      inlinedVal24 = true;
                                      break;
                                    case true:
                                      inlinedVal24 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp22 = inlinedVal24;
                                } else {
                                  tmp22 = false;
                                }
                                if (tmp22 === true) {
                                  relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                  tmp23 = relabels1.value + 1;
                                  relabels1.value = tmp23;
                                  lambda$here8 = lambda$16(ratioRegions4, width2, h2, e2, m12);
                                  scrut8 = ratioRegions4.#every_n(height2, lambda$here8);
                                  if (scrut8 === true) {
                                    tmp24 = ratioRegions4.PInt(undefined);
                                    tmp25 = ratioRegions4.PString(undefined);
                                    tmp26 = ratioRegions4.PInt(undefined);
                                    tmp27 = ratioRegions4.PString(undefined);
                                    tmp28 = ratioRegions4.PInt(undefined);
                                    tmp29 = ratioRegions4.PString(undefined);
                                    tmp30 = ratioRegions4.PInt(undefined);
                                    tmp31 = ratioRegions4.PString(undefined);
                                    tmp32 = ratioRegions4.Cons(tmp31, ratioRegions4.Nil);
                                    tmp33 = ratioRegions4.Cons(tmp30, tmp32);
                                    tmp34 = ratioRegions4.Cons(tmp29, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp28, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp27, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp26, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp25, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp24, tmp38);
                                    ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", tmp39);
                                    break inlinedLbl12
                                  }
                                  {
                                    let inlinedVal24;
                                    inlinedVal24 = q2.length;
                                    lambda$here9 = lambda$15(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal24, lambda$here9);
                                    lambda$here10 = lambda$14(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$13(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height2, lambda$here11);
                                    p = true;
                                    continue loopLabel12;
                                  }
                                }
                                lambda$here12 = lambda$12(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                scrut9 = ratioRegions4.#some_vector(q2, lambda$here12);
                                if (scrut9 === true) {
                                  let inlinedVal24, ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2, k;
                                  inlinedVal24 = q2.length;
                                  tmp40 = inlinedVal24 - 1;
                                  ratioRegions5 = ratioRegions4;
                                  c_right4 = c_right3;
                                  c_down4 = c_down3;
                                  w3 = w2;
                                  height3 = height2;
                                  width3 = width2;
                                  f_right3 = f_right2;
                                  f_down3 = f_down2;
                                  f_t3 = f_t2;
                                  h3 = h2;
                                  e3 = e2;
                                  marked2 = marked1;
                                  m13 = m12;
                                  m23 = m22;
                                  q3 = q2;
                                  v2 = v1;
                                  pushes2 = pushes1;
                                  lifts2 = lifts1;
                                  k = tmp40;
                                  inlinedLbl13: {
                                    loopLabel13: while (true) {
                                      let tmp62, inlinedVal25;
                                      inlinedVal25 = k < 0;
                                      switch (inlinedVal25) {
                                        case false:
                                          {
                                            let inlinedVal26, x, f9, f10;
                                            inlinedVal26 = q3.at(k);
                                            x = ratioRegions5.Nil;
                                            q3[k] = x;
                                            f9 = lambda$18(ratioRegions5, marked2);
                                            ratioRegions5.#listApp$tailrec(f9, inlinedVal26);
                                            f10 = lambda$17(ratioRegions5, c_right4, c_down4, w3, height3, width3, f_right3, f_down3, f_t3, h3, e3, marked2, m13, m23, q3, v2, pushes2, lifts2);
                                            ratioRegions5.#listApp$tailrec(f10, inlinedVal26);
                                            tmp62 = k - 1;
                                            k = tmp62;
                                            continue loopLabel13;
                                          }
                                        case true:
                                          break inlinedLbl13;
                                      }
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                    }
                                  }
                                  tmp41 = i11 + 1;
                                  i11 = tmp41;
                                  p = false;
                                  continue loopLabel12
                                }
                                relabel(ratioRegions4, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, marked1, m12, v1);
                                tmp42 = relabels1.value + 1;
                                relabels1.value = tmp42;
                                tmp43 = ratioRegions4.PInt(undefined);
                                tmp44 = ratioRegions4.PString(undefined);
                                tmp45 = ratioRegions4.PInt(undefined);
                                tmp46 = ratioRegions4.PString(undefined);
                                tmp47 = ratioRegions4.PInt(undefined);
                                tmp48 = ratioRegions4.PString(undefined);
                                tmp49 = ratioRegions4.PInt(undefined);
                                tmp50 = ratioRegions4.PString(undefined);
                                tmp51 = ratioRegions4.Cons(tmp50, ratioRegions4.Nil);
                                tmp52 = ratioRegions4.Cons(tmp49, tmp51);
                                tmp53 = ratioRegions4.Cons(tmp48, tmp52);
                                tmp54 = ratioRegions4.Cons(tmp47, tmp53);
                                tmp55 = ratioRegions4.Cons(tmp46, tmp54);
                                tmp56 = ratioRegions4.Cons(tmp45, tmp55);
                                tmp57 = ratioRegions4.Cons(tmp44, tmp56);
                                tmp58 = ratioRegions4.Cons(tmp43, tmp57);
                                ratioRegions4.#pormat("~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", tmp58);
                                break inlinedLbl12;
                              }
                            }
                            tmp19 = lg_v - 1;
                            lambda$here2 = lambda$2(ratioRegions2, width1, h1, m11);
                            inlinedVal21 = ratioRegions2.#every_n(height1, lambda$here2);
                            if (inlinedVal21 === true) {
                              lg_v = tmp19;
                              v_max = v;
                              continue loopLabel9
                            }
                            lg_v = tmp19;
                            v_max = v_max;
                            continue loopLabel9;
                          }
                        }
                      }
                      return inlinedVal3
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
  static [definitionMetadata] = ["class", "ratioRegions"];
});
export { enqueue as _$_modulePrivate_$_enqueue };
export { enqueue1 as _$_modulePrivate_$_enqueue1 };
export { can_push_down as _$_modulePrivate_$_can_push_down };
export { can_push_left as _$_modulePrivate_$_can_push_left };
export { relabel as _$_modulePrivate_$_relabel };
export { cf_t as _$_modulePrivate_$_cf_t };
export { can_lift as _$_modulePrivate_$_can_lift };
export { can_push_t as _$_modulePrivate_$_can_push_t };
export { can_push_up as _$_modulePrivate_$_can_push_up };
export { can_push_right as _$_modulePrivate_$_can_push_right };
export { cf_right as _$_modulePrivate_$_cf_right };
export { cf_down as _$_modulePrivate_$_cf_down };
export { cf_up as _$_modulePrivate_$_cf_up };
export { cf_left as _$_modulePrivate_$_cf_left };
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
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$ as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$ };
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1 };
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2 };
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3 };
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4 };
export { main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 };
export { main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5 as _$_modulePrivate_$_main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5 };
export { main_doit_make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_make_matrix_lambda$_lambda$lambda };
export { main_doit_make_matrix_lambda$$lambda$ as _$_modulePrivate_$_main_doit_make_matrix_lambda$$lambda$ };
export { main_doit_make_matrix_lambda$_lambda$lambda1 as _$_modulePrivate_$_main_doit_make_matrix_lambda$_lambda$lambda1 };
export { main_doit_make_matrix_lambda$$lambda$1 as _$_modulePrivate_$_main_doit_make_matrix_lambda$$lambda$1 };
export { main_doit_make_matrix_lambda$_lambda$lambda2 as _$_modulePrivate_$_main_doit_make_matrix_lambda$_lambda$lambda2 };
export { main_doit_make_matrix_lambda$$lambda$2 as _$_modulePrivate_$_main_doit_make_matrix_lambda$$lambda$2 };
export { doit_make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_doit_make_matrix_lambda$_lambda$lambda };
export { doit_make_matrix_lambda$$lambda$ as _$_modulePrivate_$_doit_make_matrix_lambda$$lambda$ };
export { doit_make_matrix_lambda$_lambda$lambda1 as _$_modulePrivate_$_doit_make_matrix_lambda$_lambda$lambda1 };
export { doit_make_matrix_lambda$$lambda$1 as _$_modulePrivate_$_doit_make_matrix_lambda$$lambda$1 };
export { doit_make_matrix_lambda$_lambda$lambda2 as _$_modulePrivate_$_doit_make_matrix_lambda$_lambda$lambda2 };
export { doit_make_matrix_lambda$$lambda$2 as _$_modulePrivate_$_doit_make_matrix_lambda$$lambda$2 };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$ as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$ };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$1 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$1 };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$2 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$2 };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$3 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$3 };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$4 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$4 };
export { doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 };
export { doit_rao_ratio_region_make_matrix_lambda$$lambda$5 as _$_modulePrivate_$_doit_rao_ratio_region_make_matrix_lambda$$lambda$5 };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda };
export { rao_ratio_region_make_matrix_lambda$$lambda$ as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$ };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda1 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda1 };
export { rao_ratio_region_make_matrix_lambda$$lambda$1 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$1 };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda2 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda2 };
export { rao_ratio_region_make_matrix_lambda$$lambda$2 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$2 };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda3 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda3 };
export { rao_ratio_region_make_matrix_lambda$$lambda$3 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$3 };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda4 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda4 };
export { rao_ratio_region_make_matrix_lambda$$lambda$4 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$4 };
export { rao_ratio_region_make_matrix_lambda$_lambda$lambda5 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$_lambda$lambda5 };
export { rao_ratio_region_make_matrix_lambda$$lambda$5 as _$_modulePrivate_$_rao_ratio_region_make_matrix_lambda$$lambda$5 };
export { make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_make_matrix_lambda$_lambda$lambda };
export { make_matrix_lambda$$lambda$ as _$_modulePrivate_$_make_matrix_lambda$$lambda$ };
export default ratioRegions1;
