const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
const floor$accessorSymbol = globalThis.Symbol("floor");
const array_alloc$accessorSymbol = globalThis.Symbol("array_alloc");
const intMin$accessorSymbol = globalThis.Symbol("intMin");
const doo$accessorSymbol = globalThis.Symbol("doo");
const vector_ref$accessorSymbol = globalThis.Symbol("vector_ref");
const vector_set$accessorSymbol = globalThis.Symbol("vector_set");
const negative$accessorSymbol = globalThis.Symbol("negative");
const listApp$tailrec$accessorSymbol = globalThis.Symbol("listApp$tailrec");
const listExists$tailrec$accessorSymbol = globalThis.Symbol("listExists$tailrec");
let loop, init, loop1, loop2, loop3, loop4, enqueue, loop5, isNull, dequeue, loopK, push_t, loop6, ef_t, enqueue1, can_push_down, push_down, can_push_left, push_right, push_left, relabel, cf_t, can_lift, can_push_t, can_push_up, can_push_right, push_up, lift, loopPow, loop7, min_cut, ef_up, ef_right, cf_right, cf_down, ef_left, min_cut_includes_every_edge_to_t, cf_up, preflow_push, cf_left, ef_down, ratioRegions1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda31, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lambda$9, lambda$10, lambda$11, lambda$12, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, lambda$18, lambda$19, lambda$20, lambda$21, lambda$22, lambda$23, lambda$24, lambda$25, lambda$26, lambda$27, lambda$28, lambda$29, lambda$30, lambda$31, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$1, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$2, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$3, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$4, main_doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5, main_doit_rao_ratio_region_make_matrix_lambda$$lambda$5, main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda, main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$, main_doit_make_matrix_lambda$_lambda$lambda, main_doit_make_matrix_lambda$$lambda$, main_doit_make_matrix_lambda$_lambda$lambda1, main_doit_make_matrix_lambda$$lambda$1, main_doit_make_matrix_lambda$_lambda$lambda2, main_doit_make_matrix_lambda$$lambda$2, doit_make_matrix_lambda$_lambda$lambda, doit_make_matrix_lambda$$lambda$, doit_make_matrix_lambda$_lambda$lambda1, doit_make_matrix_lambda$$lambda$1, doit_make_matrix_lambda$_lambda$lambda2, doit_make_matrix_lambda$$lambda$2, doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda, doit_rao_ratio_region_loop_min_cut_lambda$$lambda$, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda, doit_rao_ratio_region_make_matrix_lambda$$lambda$, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda1, doit_rao_ratio_region_make_matrix_lambda$$lambda$1, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda2, doit_rao_ratio_region_make_matrix_lambda$$lambda$2, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda3, doit_rao_ratio_region_make_matrix_lambda$$lambda$3, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda4, doit_rao_ratio_region_make_matrix_lambda$$lambda$4, doit_rao_ratio_region_make_matrix_lambda$_lambda$lambda5, doit_rao_ratio_region_make_matrix_lambda$$lambda$5, rao_ratio_region_make_matrix_lambda$_lambda$lambda, rao_ratio_region_make_matrix_lambda$$lambda$, rao_ratio_region_make_matrix_lambda$_lambda$lambda1, rao_ratio_region_make_matrix_lambda$$lambda$1, rao_ratio_region_make_matrix_lambda$_lambda$lambda2, rao_ratio_region_make_matrix_lambda$$lambda$2, rao_ratio_region_make_matrix_lambda$_lambda$lambda3, rao_ratio_region_make_matrix_lambda$$lambda$3, rao_ratio_region_make_matrix_lambda$_lambda$lambda4, rao_ratio_region_make_matrix_lambda$$lambda$4, rao_ratio_region_make_matrix_lambda$_lambda$lambda5, rao_ratio_region_make_matrix_lambda$$lambda$5, rao_ratio_region_loop_min_cut_lambda$_lambda$lambda, rao_ratio_region_loop_min_cut_lambda$$lambda$, make_matrix_lambda$_lambda$lambda, make_matrix_lambda$$lambda$, lambda$_lambda$lambda, loop_min_cut_lambda$_lambda$lambda, loop_min_cut_lambda$$lambda$, min_cut_lambda$_lambda$lambda, min_cut_lambda$$lambda$, lambda$_lambda$lambda1, main_doit_rao_ratio_region_loop_loop$loop, doit_rao_ratio_region_loop_loop$loop, rao_ratio_region_loop_loop$loop, loop_loop$loop;
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
main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda = function main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ = function main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width, h, m1) {
  return (y) => {
    return main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y)
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
doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda = function doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ = function doit_rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width, h, m1) {
  return (y) => {
    return doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y)
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
rao_ratio_region_loop_min_cut_lambda$_lambda$lambda = function rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
rao_ratio_region_loop_min_cut_lambda$$lambda$ = function rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width, h, m1) {
  return (y) => {
    return rao_ratio_region_loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y)
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
lambda$_lambda$lambda = function lambda$_lambda$lambda(ratioRegions2, n, a) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop_min_cut_lambda$_lambda$lambda = function loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop_min_cut_lambda$$lambda$ = function loop_min_cut_lambda$$lambda$(ratioRegions2, width, h, m1) {
  return (y) => {
    return loop_min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y)
  }
};
min_cut_lambda$_lambda$lambda = function min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
min_cut_lambda$$lambda$ = function min_cut_lambda$$lambda$(ratioRegions2, width, h, m1) {
  return (y) => {
    return min_cut_lambda$_lambda$lambda(ratioRegions2, width, h, m1, y)
  }
};
lambda$_lambda$lambda1 = function lambda$_lambda$lambda(ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_doit_rao_ratio_region_loop_loop$loop = function main_doit_rao_ratio_region_loop_loop$loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp5 = i + 2;
                i = tmp5;
                continue loopLabel
              }
              tmp6 = i + 1;
              i = tmp6;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
              }
            }
            scrut3 = inlinedVal2 == "%";
            if (scrut3 === true) {
              tmp7 = i + 2;
              i = tmp7;
              continue loopLabel
            }
            tmp8 = i + 1;
            i = tmp8;
            continue loopLabel;
          }
          tmp9 = i + 1;
          i = tmp9;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
doit_rao_ratio_region_loop_loop$loop = function doit_rao_ratio_region_loop_loop$loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp5 = i + 2;
                i = tmp5;
                continue loopLabel
              }
              tmp6 = i + 1;
              i = tmp6;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
              }
            }
            scrut3 = inlinedVal2 == "%";
            if (scrut3 === true) {
              tmp7 = i + 2;
              i = tmp7;
              continue loopLabel
            }
            tmp8 = i + 1;
            i = tmp8;
            continue loopLabel;
          }
          tmp9 = i + 1;
          i = tmp9;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
rao_ratio_region_loop_loop$loop = function rao_ratio_region_loop_loop$loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp5 = i + 2;
                i = tmp5;
                continue loopLabel
              }
              tmp6 = i + 1;
              i = tmp6;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
              }
            }
            scrut3 = inlinedVal2 == "%";
            if (scrut3 === true) {
              tmp7 = i + 2;
              i = tmp7;
              continue loopLabel
            }
            tmp8 = i + 1;
            i = tmp8;
            continue loopLabel;
          }
          tmp9 = i + 1;
          i = tmp9;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
loop_loop$loop = function loop_loop$loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp5 = i + 2;
                i = tmp5;
                continue loopLabel
              }
              tmp6 = i + 1;
              i = tmp6;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
              }
            }
            scrut3 = inlinedVal2 == "%";
            if (scrut3 === true) {
              tmp7 = i + 2;
              i = tmp7;
              continue loopLabel
            }
            tmp8 = i + 1;
            i = tmp8;
            continue loopLabel;
          }
          tmp9 = i + 1;
          i = tmp9;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$31 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  return (x) => {
    return lambda28(ratioRegions2, height, width, c_right, y, x)
  }
});
lambda28 = (undefined, function (ratioRegions2, height, width, c_right, y, x) {
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
lambda$29 = (undefined, function (ratioRegions2, height, width, c_right) {
  return (y) => {
    return lambda29(ratioRegions2, height, width, c_right, y)
  }
});
lambda$30 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  return (x) => {
    return lambda30(ratioRegions2, height, width, c_down, y, x)
  }
});
lambda30 = (undefined, function (ratioRegions2, height, width, c_down, y, x) {
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
lambda$28 = (undefined, function (ratioRegions2, height, width, c_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$30(ratioRegions2, height, width, c_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda29 = (undefined, function (ratioRegions2, height, width, c_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$31(ratioRegions2, height, width, c_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda31 = (undefined, function (ratioRegions2, height, width, c_down, y) {
  let lambda$here;
  lambda$here = lambda$30(ratioRegions2, height, width, c_down, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda$27 = (undefined, function (ratioRegions2, h, marked, m1, y) {
  return (x) => {
    return lambda1(ratioRegions2, h, marked, m1, y, x)
  }
});
lambda1 = (undefined, function (ratioRegions2, h, marked, m1, y, x) {
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
lambda$25 = (undefined, function (ratioRegions2, width, h, marked, m1) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$27(ratioRegions2, h, marked, m1, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$26 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y) {
  return (x) => {
    return lambda3(ratioRegions2, w, f_t, h, marked, v, q, tail, y, x)
  }
});
lambda3 = (undefined, function (ratioRegions2, w, f_t, h, marked, v, q, tail, y, x) {
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
lambda$24 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$26(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
isNull = function isNull(ratioRegions2, q) {
  let scrut;
  scrut = q.value;
  if (scrut instanceof ratioRegions2.QNil.class) {
    return true
  }
  return false;
};
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
dequeue = function dequeue(ratioRegions2, marked, q, tail) {
  let scrut, arg$QCons$0$, arg$QCons$1$;
  scrut = q.value;
  if (scrut instanceof ratioRegions2.QCons.class) {
    let ratioRegions3, scrut1, arg$Matrix$0$, element0$, element1$;
    arg$QCons$0$ = scrut.head;
    arg$QCons$1$ = scrut.rest;
    if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
      runtime.Tuple.get(arg$QCons$0$, 0);
      element1$ = runtime.Tuple.get(arg$QCons$0$, 1);
      if (runtime.Tuple.isArrayLike(arg$QCons$0$) && arg$QCons$0$.length === 2) {
        element0$ = runtime.Tuple.get(arg$QCons$0$, 0);
        runtime.Tuple.get(arg$QCons$0$, 1);
        if (marked instanceof ratioRegions2.Matrix.class) {
          let inlinedVal;
          arg$Matrix$0$ = marked.a;
          inlinedVal = arg$Matrix$0$.at(element1$);
          inlinedVal[element0$] = false;
          q.value = arg$QCons$1$.value;
          ratioRegions3 = ratioRegions2;
          scrut1 = q.value;
          if (scrut1 instanceof ratioRegions3.QNil.class) {
            tail.value = ratioRegions2.QNil;
            return arg$QCons$0$
          }
          return arg$QCons$0$;
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop5 = function loop(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q, tail) {
  loopLabel: while (true) {
    let p, value, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, ratioRegions3, scrut;
    ratioRegions3 = ratioRegions2;
    scrut = q.value;
    if (scrut instanceof ratioRegions3.QNil.class) {
      return runtime.Unit
    }
    {
      let receiver, arg$Matrix$0$, element1$, element0$;
      p = dequeue(ratioRegions2, marked, q, tail);
      if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
        element0$ = runtime.Tuple.get(p, 0);
        runtime.Tuple.get(p, 1);
        if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
          runtime.Tuple.get(p, 0);
          element1$ = runtime.Tuple.get(p, 1);
          receiver = ratioRegions2;
          if (h instanceof receiver.Matrix.class) {
            let inlinedVal, inlinedVal1;
            arg$Matrix$0$ = h.a;
            inlinedVal = arg$Matrix$0$.at(element1$);
            inlinedVal1 = inlinedVal.at(element0$);
            value = inlinedVal1 + 1;
            tmp = element0$ > 0;
            if (tmp === true) {
              let tmp17, inlinedVal2;
              tmp2 = element0$ - 1;
              tmp17 = cf_right(ratioRegions2, c_right, f_right, element1$, tmp2);
              inlinedVal2 = tmp17 > 0;
              tmp1 = inlinedVal2;
            } else {
              tmp1 = false;
            }
            if (tmp1 === true) {
              tmp3 = element0$ - 1;
              enqueue(ratioRegions2, h, marked, q, tail, element1$, tmp3, value);
            }
            tmp4 = width - 1;
            tmp5 = element0$ < tmp4;
            if (tmp5 === true) {
              let tmp17, inlinedVal2;
              tmp7 = element0$ + 1;
              tmp17 = cf_left(ratioRegions2, c_right, f_right, element1$, tmp7);
              inlinedVal2 = tmp17 > 0;
              tmp6 = inlinedVal2;
            } else {
              tmp6 = false;
            }
            if (tmp6 === true) {
              tmp8 = element0$ + 1;
              enqueue(ratioRegions2, h, marked, q, tail, element1$, tmp8, value);
            }
            tmp9 = element1$ > 0;
            if (tmp9 === true) {
              let tmp17, inlinedVal2;
              tmp11 = element1$ - 1;
              tmp17 = cf_down(ratioRegions2, c_down, f_down, tmp11, element0$);
              inlinedVal2 = tmp17 > 0;
              tmp10 = inlinedVal2;
            } else {
              tmp10 = false;
            }
            if (tmp10 === true) {
              tmp12 = element1$ - 1;
              enqueue(ratioRegions2, h, marked, q, tail, tmp12, element0$, value);
            }
            tmp13 = height - 1;
            tmp14 = element1$ < tmp13;
            if (tmp14 === true) {
              let tmp17, inlinedVal2;
              tmp15 = element1$ + 1;
              tmp17 = cf_up(ratioRegions2, c_down, f_down, tmp15, element0$);
              inlinedVal2 = tmp17 > 0;
              if (inlinedVal2 === true) {
                tmp16 = element1$ + 1;
                enqueue(ratioRegions2, h, marked, q, tail, tmp16, element0$, value);
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
  }
};
lambda2 = (undefined, function (ratioRegions2, width, h, marked, m1, y) {
  let lambda$here;
  lambda$here = lambda$27(ratioRegions2, h, marked, m1, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda4 = (undefined, function (ratioRegions2, w, width, f_t, h, marked, v, q, tail, y) {
  let lambda$here;
  lambda$here = lambda$26(ratioRegions2, w, f_t, h, marked, v, q, tail, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda$23 = (undefined, function (ratioRegions2, h, e, m1, y) {
  return (x) => {
    return lambda5(ratioRegions2, h, e, m1, y, x)
  }
});
lambda5 = (undefined, function (ratioRegions2, h, e, m1, y, x) {
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
lambda$17 = (undefined, function (ratioRegions2, width, h, e, m1) {
  return (y) => {
    return lambda6(ratioRegions2, width, h, e, m1, y)
  }
});
lambda$16 = (undefined, function (ratioRegions2, q) {
  return (k) => {
    return lambda7(ratioRegions2, q, k)
  }
});
lambda$22 = (undefined, function (ratioRegions2, marked, y) {
  return (x) => {
    return lambda8(ratioRegions2, marked, y, x)
  }
});
lambda8 = (undefined, function (ratioRegions2, marked, y, x) {
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
lambda$15 = (undefined, function (ratioRegions2, width, marked) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$22(ratioRegions2, marked, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$21 = (undefined, function (ratioRegions2, h, e, marked, q, y) {
  return (x) => {
    return lambda10(ratioRegions2, h, e, marked, q, y, x)
  }
});
lambda10 = (undefined, function (ratioRegions2, h, e, marked, q, y, x) {
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
lambda$14 = (undefined, function (ratioRegions2, width, h, e, marked, q) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$21(ratioRegions2, h, e, marked, q, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$20 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (p) => {
    return lambda12(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p)
  }
});
lambda12 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, p) {
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
lambda$13 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v) {
  return (ps) => {
    return lambda13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, ps)
  }
});
lambda$19 = (undefined, function (ratioRegions2, marked) {
  return (p) => {
    return lambda14(ratioRegions2, marked, p)
  }
});
lambda$18 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts) {
  return (p) => {
    return lambda15(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p)
  }
});
lambda14 = (undefined, function (ratioRegions2, marked, p) {
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
lambda15 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, p) {
  let scrut, scrut1, scrut2, scrut3, scrut4, scrut5, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, inlinedVal, inlinedVal1, arg$Matrix$0$, tmp6, element1$, element0$;
  if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
    element0$ = runtime.Tuple.get(p, 0);
    runtime.Tuple.get(p, 1);
    if (runtime.Tuple.isArrayLike(p) && p.length === 2) {
      runtime.Tuple.get(p, 0);
      element1$ = runtime.Tuple.get(p, 1);
      scrut = can_push_right(ratioRegions2, c_right, width, f_right, h, e, element1$, element0$);
      if (scrut === true) {
        tmp = pushes.value + 1;
        pushes.value = tmp;
        push_right(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut1 = can_push_left(ratioRegions2, c_right, f_right, h, e, element1$, element0$);
      if (scrut1 === true) {
        tmp1 = pushes.value + 1;
        pushes.value = tmp1;
        push_left(ratioRegions2, c_right, f_right, h, e, marked, q, element1$, element0$);
      }
      scrut2 = can_push_down(ratioRegions2, c_down, height, f_down, h, e, element1$, element0$);
      if (scrut2 === true) {
        tmp2 = pushes.value + 1;
        pushes.value = tmp2;
        push_down(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut3 = can_push_up(ratioRegions2, c_down, f_down, h, e, element1$, element0$);
      if (scrut3 === true) {
        tmp3 = pushes.value + 1;
        pushes.value = tmp3;
        push_up(ratioRegions2, c_down, f_down, h, e, marked, q, element1$, element0$);
      }
      scrut4 = can_push_t(ratioRegions2, w, f_t, h, e, v, element1$, element0$);
      if (scrut4 === true) {
        tmp4 = pushes.value + 1;
        pushes.value = tmp4;
        push_t(ratioRegions2, w, f_t, e, v, element1$, element0$);
      }
      scrut5 = can_lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, element1$, element0$);
      if (scrut5 === true) {
        tmp5 = lifts.value + 1;
        lifts.value = tmp5;
        lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, element1$, element0$);
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
lambda6 = (undefined, function (ratioRegions2, width, h, e, m1, y) {
  let p;
  p = lambda$23(ratioRegions2, h, e, m1, y);
  return loop2(width, p, 0)
});
lambda7 = (undefined, function (ratioRegions2, q, k) {
  let x;
  x = ratioRegions2.Nil;
  q[k] = x;
  return runtime.Unit
});
lambda9 = (undefined, function (ratioRegions2, width, marked, y) {
  let lambda$here;
  lambda$here = lambda$22(ratioRegions2, marked, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda11 = (undefined, function (ratioRegions2, width, h, e, marked, q, y) {
  let lambda$here;
  lambda$here = lambda$21(ratioRegions2, h, e, marked, q, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda13 = (undefined, function (ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v, ps) {
  let p;
  p = lambda$20(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
  return ratioRegions2[listExists$tailrec$accessorSymbol](p, ps)
});
loopK = function loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, k) {
  loopLabel: while (true) {
    let tmp, inlinedVal;
    inlinedVal = k < 0;
    switch (inlinedVal) {
      case false:
        {
          let inlinedVal1, x, f, f1;
          inlinedVal1 = q.at(k);
          x = ratioRegions2.Nil;
          q[k] = x;
          f = lambda$19(ratioRegions2, marked);
          ratioRegions2[listApp$tailrec$accessorSymbol](f, inlinedVal1);
          f1 = lambda$18(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts);
          ratioRegions2[listApp$tailrec$accessorSymbol](f1, inlinedVal1);
          tmp = k - 1;
          k = tmp;
          continue loopLabel;
        }
      case true:
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$12 = (undefined, function (ratioRegions2, f_t, e, y) {
  return (x) => {
    return lambda16(ratioRegions2, f_t, e, y, x)
  }
});
lambda16 = (undefined, function (ratioRegions2, f_t, e, y, x) {
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
lambda$9 = (undefined, function (ratioRegions2, width, f_t, e) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$12(ratioRegions2, f_t, e, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$11 = (undefined, function (ratioRegions2, f_right, y) {
  return (x) => {
    return lambda18(ratioRegions2, f_right, y, x)
  }
});
lambda18 = (undefined, function (ratioRegions2, f_right, y, x) {
  let arg$Matrix$0$, tmp;
  if (f_right instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = f_right.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    return ratioRegions2[vector_set$accessorSymbol](tmp, x, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$8 = (undefined, function (ratioRegions2, width, f_right) {
  return (y) => {
    return lambda19(ratioRegions2, width, f_right, y)
  }
});
lambda$10 = (undefined, function (ratioRegions2, f_down, y) {
  return (x) => {
    return lambda20(ratioRegions2, f_down, y, x)
  }
});
lambda20 = (undefined, function (ratioRegions2, f_down, y, x) {
  let arg$Matrix$0$, tmp;
  if (f_down instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = f_down.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    return ratioRegions2[vector_set$accessorSymbol](tmp, x, 0)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$7 = (undefined, function (ratioRegions2, width, f_down) {
  return (y) => {
    let lambda$here;
    lambda$here = lambda$10(ratioRegions2, f_down, y);
    return ratioRegions2[doo$accessorSymbol](width, lambda$here)
  }
});
lambda$6 = (undefined, function (ratioRegions2, width, e) {
  return (y) => {
    return lambda22(ratioRegions2, width, e, y)
  }
});
lambda$5 = (undefined, function (ratioRegions2, height, e) {
  return (x) => {
    return lambda23(ratioRegions2, height, e, x)
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
ef_t = function ef_t(ratioRegions2, w, f_t, v, y, x) {
  let tmp;
  tmp = cf_t(ratioRegions2, w, f_t, v, y, x);
  return tmp > 0
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
push_right = function push_right(ratioRegions2, c_right, f_right, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, arg$Matrix$0$, tmp5, scrut, arg$Matrix$0$1, tmp6, arg$Matrix$0$2, arg$Matrix$0$3, arg$Matrix$0$4, arg$Matrix$0$5, arg$Matrix$0$6;
  if (e instanceof ratioRegions2.Matrix.class) {
    let inlinedVal4, inlinedVal5, inlinedVal6;
    arg$Matrix$0$6 = e.a;
    inlinedVal4 = arg$Matrix$0$6.at(y);
    inlinedVal5 = inlinedVal4.at(x);
    tmp = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal6 = inlinedVal5 < 0;
    if (inlinedVal6 === true) {
      inlinedVal = tmp;
    } else {
      let inlinedVal7, scrut1;
      scrut1 = inlinedVal5 < tmp;
      if (scrut1 === true) {
        inlinedVal7 = inlinedVal5;
      } else {
        inlinedVal7 = tmp;
      }
      inlinedVal = inlinedVal7;
    }
    if (f_right instanceof ratioRegions2.Matrix.class) {
      let inlinedVal7, inlinedVal8;
      arg$Matrix$0$5 = f_right.a;
      inlinedVal7 = arg$Matrix$0$5.at(y);
      inlinedVal8 = inlinedVal7.at(x);
      tmp1 = inlinedVal8 + inlinedVal;
      if (f_right instanceof ratioRegions2.Matrix.class) {
        let inlinedVal9;
        arg$Matrix$0$4 = f_right.a;
        inlinedVal9 = arg$Matrix$0$4.at(y);
        inlinedVal9[x] = tmp1;
        if (e instanceof ratioRegions2.Matrix.class) {
          let inlinedVal10, inlinedVal11, inlinedVal12;
          arg$Matrix$0$3 = e.a;
          inlinedVal10 = arg$Matrix$0$3.at(y);
          inlinedVal11 = inlinedVal10.at(x);
          inlinedVal12 = inlinedVal11 < 0;
          if (inlinedVal12 === true) {
            inlinedVal1 = inlinedVal11;
          } else {
            inlinedVal1 = inlinedVal11 - inlinedVal;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            let inlinedVal13;
            arg$Matrix$0$2 = e.a;
            inlinedVal13 = arg$Matrix$0$2.at(y);
            inlinedVal13[x] = inlinedVal1;
            tmp2 = x + 1;
            tmp3 = x + 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              arg$Matrix$0$1 = e.a;
              tmp6 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
              inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp6, tmp3);
              scrut = ratioRegions2[negative$accessorSymbol](inlinedVal2);
              if (scrut === true) {
                inlinedVal3 = inlinedVal2;
              } else {
                inlinedVal3 = inlinedVal2 + inlinedVal;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                arg$Matrix$0$ = e.a;
                tmp5 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
                ratioRegions2[vector_set$accessorSymbol](tmp5, tmp2, inlinedVal3);
                tmp4 = x + 1;
                return enqueue1(ratioRegions2, h, marked, q, y, tmp4)
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
};
push_left = function push_left(ratioRegions2, c_right, f_right, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Matrix$0$, tmp7, scrut, arg$Matrix$0$1, tmp8, arg$Matrix$0$2, tmp9, scrut1, arg$Matrix$0$3, tmp10, arg$Matrix$0$4, tmp11, arg$Matrix$0$5, tmp12, scrut2, arg$Matrix$0$6, tmp13;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$6 = e.a;
    tmp13 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$6, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp13, x);
    tmp = cf_left(ratioRegions2, c_right, f_right, y, x);
    scrut2 = ratioRegions2[negative$accessorSymbol](inlinedVal);
    if (scrut2 === true) {
      inlinedVal1 = tmp;
    } else {
      inlinedVal1 = ratioRegions2[intMin$accessorSymbol](inlinedVal, tmp);
    }
    tmp1 = x - 1;
    tmp2 = x - 1;
    if (f_right instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$5 = f_right.a;
      tmp12 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$5, y);
      inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp12, tmp2);
      tmp3 = inlinedVal2 - inlinedVal1;
      if (f_right instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$4 = f_right.a;
        tmp11 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, y);
        ratioRegions2[vector_set$accessorSymbol](tmp11, tmp1, tmp3);
        if (e instanceof ratioRegions2.Matrix.class) {
          arg$Matrix$0$3 = e.a;
          tmp10 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$3, y);
          inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp10, x);
          scrut1 = ratioRegions2[negative$accessorSymbol](inlinedVal3);
          if (scrut1 === true) {
            inlinedVal4 = inlinedVal3;
          } else {
            inlinedVal4 = inlinedVal3 - inlinedVal1;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            arg$Matrix$0$2 = e.a;
            tmp9 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, y);
            ratioRegions2[vector_set$accessorSymbol](tmp9, x, inlinedVal4);
            tmp4 = x - 1;
            tmp5 = x - 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              arg$Matrix$0$1 = e.a;
              tmp8 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
              inlinedVal5 = ratioRegions2[vector_ref$accessorSymbol](tmp8, tmp5);
              scrut = ratioRegions2[negative$accessorSymbol](inlinedVal5);
              if (scrut === true) {
                inlinedVal6 = inlinedVal5;
              } else {
                inlinedVal6 = inlinedVal5 + inlinedVal1;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                arg$Matrix$0$ = e.a;
                tmp7 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
                ratioRegions2[vector_set$accessorSymbol](tmp7, tmp4, inlinedVal6);
                tmp6 = x - 1;
                return enqueue1(ratioRegions2, h, marked, q, y, tmp6)
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
};
push_down = function push_down(ratioRegions2, c_down, f_down, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Matrix$0$, tmp5, scrut, arg$Matrix$0$1, tmp6, arg$Matrix$0$2, tmp7, scrut1, arg$Matrix$0$3, tmp8, arg$Matrix$0$4, tmp9, arg$Matrix$0$5, tmp10, scrut2, arg$Matrix$0$6, tmp11;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$6 = e.a;
    tmp11 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$6, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp11, x);
    tmp = cf_down(ratioRegions2, c_down, f_down, y, x);
    scrut2 = ratioRegions2[negative$accessorSymbol](inlinedVal);
    if (scrut2 === true) {
      inlinedVal1 = tmp;
    } else {
      inlinedVal1 = ratioRegions2[intMin$accessorSymbol](inlinedVal, tmp);
    }
    if (f_down instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$5 = f_down.a;
      tmp10 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$5, y);
      inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp10, x);
      tmp1 = inlinedVal2 + inlinedVal1;
      if (f_down instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$4 = f_down.a;
        tmp9 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, y);
        ratioRegions2[vector_set$accessorSymbol](tmp9, x, tmp1);
        if (e instanceof ratioRegions2.Matrix.class) {
          arg$Matrix$0$3 = e.a;
          tmp8 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$3, y);
          inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp8, x);
          scrut1 = ratioRegions2[negative$accessorSymbol](inlinedVal3);
          if (scrut1 === true) {
            inlinedVal4 = inlinedVal3;
          } else {
            inlinedVal4 = inlinedVal3 - inlinedVal1;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            arg$Matrix$0$2 = e.a;
            tmp7 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, y);
            ratioRegions2[vector_set$accessorSymbol](tmp7, x, inlinedVal4);
            tmp2 = y + 1;
            tmp3 = y + 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              arg$Matrix$0$1 = e.a;
              tmp6 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, tmp3);
              inlinedVal5 = ratioRegions2[vector_ref$accessorSymbol](tmp6, x);
              scrut = ratioRegions2[negative$accessorSymbol](inlinedVal5);
              if (scrut === true) {
                inlinedVal6 = inlinedVal5;
              } else {
                inlinedVal6 = inlinedVal5 + inlinedVal1;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                arg$Matrix$0$ = e.a;
                tmp5 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, tmp2);
                ratioRegions2[vector_set$accessorSymbol](tmp5, x, inlinedVal6);
                tmp4 = y + 1;
                return enqueue1(ratioRegions2, h, marked, q, tmp4, x)
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
};
push_up = function push_up(ratioRegions2, c_down, f_down, h, e, marked, q, y, x) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, arg$Matrix$0$, tmp7, scrut, arg$Matrix$0$1, tmp8, arg$Matrix$0$2, tmp9, scrut1, arg$Matrix$0$3, tmp10, arg$Matrix$0$4, tmp11, arg$Matrix$0$5, tmp12, scrut2, arg$Matrix$0$6, tmp13;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$6 = e.a;
    tmp13 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$6, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp13, x);
    tmp = cf_up(ratioRegions2, c_down, f_down, y, x);
    scrut2 = ratioRegions2[negative$accessorSymbol](inlinedVal);
    if (scrut2 === true) {
      inlinedVal1 = tmp;
    } else {
      inlinedVal1 = ratioRegions2[intMin$accessorSymbol](inlinedVal, tmp);
    }
    tmp1 = y - 1;
    tmp2 = y - 1;
    if (f_down instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$5 = f_down.a;
      tmp12 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$5, tmp2);
      inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp12, x);
      tmp3 = inlinedVal2 - inlinedVal1;
      if (f_down instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$4 = f_down.a;
        tmp11 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, tmp1);
        ratioRegions2[vector_set$accessorSymbol](tmp11, x, tmp3);
        if (e instanceof ratioRegions2.Matrix.class) {
          arg$Matrix$0$3 = e.a;
          tmp10 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$3, y);
          inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp10, x);
          scrut1 = ratioRegions2[negative$accessorSymbol](inlinedVal3);
          if (scrut1 === true) {
            inlinedVal4 = inlinedVal3;
          } else {
            inlinedVal4 = inlinedVal3 - inlinedVal1;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            arg$Matrix$0$2 = e.a;
            tmp9 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, y);
            ratioRegions2[vector_set$accessorSymbol](tmp9, x, inlinedVal4);
            tmp4 = y - 1;
            tmp5 = y - 1;
            if (e instanceof ratioRegions2.Matrix.class) {
              arg$Matrix$0$1 = e.a;
              tmp8 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, tmp5);
              inlinedVal5 = ratioRegions2[vector_ref$accessorSymbol](tmp8, x);
              scrut = ratioRegions2[negative$accessorSymbol](inlinedVal5);
              if (scrut === true) {
                inlinedVal6 = inlinedVal5;
              } else {
                inlinedVal6 = inlinedVal5 + inlinedVal1;
              }
              if (e instanceof ratioRegions2.Matrix.class) {
                arg$Matrix$0$ = e.a;
                tmp7 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, tmp4);
                ratioRegions2[vector_set$accessorSymbol](tmp7, x, inlinedVal6);
                tmp6 = y - 1;
                return enqueue1(ratioRegions2, h, marked, q, tmp6, x)
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
};
push_t = function push_t(ratioRegions2, w, f_t, e, v, y, x) {
  let tmp, tmp1, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, arg$Matrix$0$, tmp2, scrut, arg$Matrix$0$1, tmp3, arg$Matrix$0$2, tmp4, arg$Matrix$0$3, tmp5, scrut1, arg$Matrix$0$4, tmp6;
  if (e instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$4 = e.a;
    tmp6 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$4, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp6, x);
    tmp = cf_t(ratioRegions2, w, f_t, v, y, x);
    scrut1 = ratioRegions2[negative$accessorSymbol](inlinedVal);
    if (scrut1 === true) {
      inlinedVal1 = tmp;
    } else {
      inlinedVal1 = ratioRegions2[intMin$accessorSymbol](inlinedVal, tmp);
    }
    if (f_t instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$3 = f_t.a;
      tmp5 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$3, y);
      inlinedVal2 = ratioRegions2[vector_ref$accessorSymbol](tmp5, x);
      tmp1 = inlinedVal2 + inlinedVal1;
      if (f_t instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$2 = f_t.a;
        tmp4 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$2, y);
        ratioRegions2[vector_set$accessorSymbol](tmp4, x, tmp1);
        if (e instanceof ratioRegions2.Matrix.class) {
          arg$Matrix$0$1 = e.a;
          tmp3 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
          inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp3, x);
          scrut = ratioRegions2[negative$accessorSymbol](inlinedVal3);
          if (scrut === true) {
            inlinedVal4 = inlinedVal3;
          } else {
            inlinedVal4 = inlinedVal3 - inlinedVal1;
          }
          if (e instanceof ratioRegions2.Matrix.class) {
            arg$Matrix$0$ = e.a;
            tmp2 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
            return ratioRegions2[vector_set$accessorSymbol](tmp2, x, inlinedVal4)
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
lift = function lift(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, m1, m2, v, y, x) {
  let scrut, scrut1, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, inlinedVal, arg$Matrix$0$, tmp21, arg$Cons$0$, arg$Cons$1$, tmp22, inlinedVal1;
  tmp = width - 1;
  scrut = x == tmp;
  if (scrut === true) {
    tmp1 = m1;
  } else {
    let tmp23, inlinedVal2;
    tmp23 = cf_right(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp23 > 0;
    if (inlinedVal2 === true) {
      let inlinedVal3, arg$Matrix$0$1, tmp24;
      tmp2 = x + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$1 = h.a;
        tmp24 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
        inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp24, tmp2);
        tmp3 = inlinedVal3;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp3 = m2;
    }
    tmp1 = tmp3;
  }
  scrut1 = x == 0;
  if (scrut1 === true) {
    tmp4 = m1;
  } else {
    let tmp23, inlinedVal2;
    tmp23 = cf_left(ratioRegions2, c_right, f_right, y, x);
    inlinedVal2 = tmp23 > 0;
    if (inlinedVal2 === true) {
      let inlinedVal3, arg$Matrix$0$1, tmp24;
      tmp5 = x - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$1 = h.a;
        tmp24 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, y);
        inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp24, tmp5);
        tmp6 = inlinedVal3;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp6 = m2;
    }
    tmp4 = tmp6;
  }
  tmp7 = height - 1;
  scrut2 = y == tmp7;
  if (scrut2 === true) {
    tmp8 = m1;
  } else {
    let tmp23, inlinedVal2;
    tmp23 = cf_down(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp23 > 0;
    if (inlinedVal2 === true) {
      let inlinedVal3, arg$Matrix$0$1, tmp24;
      tmp9 = y + 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$1 = h.a;
        tmp24 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, tmp9);
        inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp24, x);
        tmp10 = inlinedVal3;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp10 = m2;
    }
    tmp8 = tmp10;
  }
  scrut3 = y == 0;
  if (scrut3 === true) {
    tmp11 = m1;
  } else {
    let tmp23, inlinedVal2;
    tmp23 = cf_up(ratioRegions2, c_down, f_down, y, x);
    inlinedVal2 = tmp23 > 0;
    if (inlinedVal2 === true) {
      let inlinedVal3, arg$Matrix$0$1, tmp24;
      tmp12 = y - 1;
      if (h instanceof ratioRegions2.Matrix.class) {
        arg$Matrix$0$1 = h.a;
        tmp24 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$1, tmp12);
        inlinedVal3 = ratioRegions2[vector_ref$accessorSymbol](tmp24, x);
        tmp13 = inlinedVal3;
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      tmp13 = m2;
    }
    tmp11 = tmp13;
  }
  tmp22 = cf_t(ratioRegions2, w, f_t, v, y, x);
  inlinedVal1 = tmp22 > 0;
  if (inlinedVal1 === true) {
    tmp14 = 0;
  } else {
    tmp14 = m2;
  }
  tmp15 = ratioRegions2.Cons(tmp14, ratioRegions2.Nil);
  tmp16 = ratioRegions2.Cons(tmp11, tmp15);
  tmp17 = ratioRegions2.Cons(tmp8, tmp16);
  tmp18 = ratioRegions2.Cons(tmp4, tmp17);
  tmp19 = ratioRegions2.Cons(tmp1, tmp18);
  if (tmp19 instanceof ratioRegions2.Cons.class) {
    arg$Cons$0$ = tmp19.head;
    arg$Cons$1$ = tmp19.tail;
    inlinedVal = loop1(ratioRegions2, arg$Cons$1$, arg$Cons$0$);
    tmp20 = 1 + inlinedVal;
    if (h instanceof ratioRegions2.Matrix.class) {
      arg$Matrix$0$ = h.a;
      tmp21 = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
      return ratioRegions2[vector_set$accessorSymbol](tmp21, x, tmp20)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
relabel = function relabel(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, marked, m1, v) {
  let q, tail, lambda$here, lambda$here1;
  q = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
  lambda$here = lambda$25(ratioRegions2, width, h, marked, m1);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q, tail);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  return loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q, tail)
};
loop6 = function loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, relabels, i, p) {
  loopLabel: while (true) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, lambda$here, lambda$here1, lambda$here2, inlinedVal, inlinedVal1, tmp37, tmp38, tmp39;
    tmp37 = i / 6;
    tmp38 = ratioRegions2[floor$accessorSymbol](tmp37);
    tmp39 = 6 * tmp38;
    inlinedVal = i - tmp39;
    inlinedVal1 = inlinedVal == 0;
    if (inlinedVal1 === true) {
      let inlinedVal2;
      switch (p) {
        case false:
          inlinedVal2 = true;
          break;
        case true:
          inlinedVal2 = false;
          break;
        default:
          throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      tmp = inlinedVal2;
    } else {
      tmp = false;
    }
    if (tmp === true) {
      let p1, inlinedVal2, q1, tail, lambda$here3, lambda$here4;
      q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
      lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
      ratioRegions2[doo$accessorSymbol](height, lambda$here3);
      lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
      ratioRegions2[doo$accessorSymbol](height, lambda$here4);
      loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
      tmp1 = relabels.value + 1;
      relabels.value = tmp1;
      p1 = lambda$17(ratioRegions2, width, h, e, m1);
      inlinedVal2 = loop2(height, p1, 0);
      if (inlinedVal2 === true) {
        tmp2 = ratioRegions2.PInt(undefined);
        tmp3 = ratioRegions2.PString(undefined);
        tmp4 = ratioRegions2.PInt(undefined);
        tmp5 = ratioRegions2.PString(undefined);
        tmp6 = ratioRegions2.PInt(undefined);
        tmp7 = ratioRegions2.PString(undefined);
        tmp8 = ratioRegions2.PInt(undefined);
        tmp9 = ratioRegions2.PString(undefined);
        tmp10 = ratioRegions2.Cons(tmp9, ratioRegions2.Nil);
        tmp11 = ratioRegions2.Cons(tmp8, tmp10);
        tmp12 = ratioRegions2.Cons(tmp7, tmp11);
        tmp13 = ratioRegions2.Cons(tmp6, tmp12);
        tmp14 = ratioRegions2.Cons(tmp5, tmp13);
        tmp15 = ratioRegions2.Cons(tmp4, tmp14);
        tmp16 = ratioRegions2.Cons(tmp3, tmp15);
        tmp17 = ratioRegions2.Cons(tmp2, tmp16);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp17)
      }
      {
        let inlinedVal3;
        inlinedVal3 = q.length;
        lambda$here = lambda$16(ratioRegions2, q);
        ratioRegions2[doo$accessorSymbol](inlinedVal3, lambda$here);
        lambda$here1 = lambda$15(ratioRegions2, width, marked);
        ratioRegions2[doo$accessorSymbol](height, lambda$here1);
        lambda$here2 = lambda$14(ratioRegions2, width, h, e, marked, q);
        ratioRegions2[doo$accessorSymbol](height, lambda$here2);
        p = true;
        continue loopLabel;
      }
    }
    {
      let v1, p1, i1, inlinedVal2;
      v1 = q;
      p1 = lambda$13(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, m1, v);
      i1 = 0;
      inlinedLbl: {
        loopLabel1: while (true) {
          let tmp40, tmp41, tmp42, inlinedVal3;
          inlinedVal3 = v1.length;
          tmp40 = i1 < inlinedVal3;
          if (tmp40 === true) {
            let inlinedVal4;
            inlinedVal4 = v1.at(i1);
            tmp41 = runtime.safeCall(p1(inlinedVal4));
            if (tmp41 === false) {
              tmp42 = i1 + 1;
              i1 = tmp42;
              continue loopLabel1
            }
            inlinedVal2 = true;
            break inlinedLbl;
          }
          inlinedVal2 = false;
          break inlinedLbl;
        }
      }
      if (inlinedVal2 === true) {
        let inlinedVal3;
        inlinedVal3 = q.length;
        tmp18 = inlinedVal3 - 1;
        loopK(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v, pushes, lifts, tmp18);
        tmp19 = i + 1;
        i = tmp19;
        p = false;
        continue loopLabel
      }
      {
        let q1, tail, lambda$here3, lambda$here4;
        q1 = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        tail = new ratioRegions2.Ref.class(ratioRegions2.QNil);
        lambda$here3 = lambda$25(ratioRegions2, width, h, marked, m1);
        ratioRegions2[doo$accessorSymbol](height, lambda$here3);
        lambda$here4 = lambda$24(ratioRegions2, w, width, f_t, h, marked, v, q1, tail);
        ratioRegions2[doo$accessorSymbol](height, lambda$here4);
        loop5(ratioRegions2, c_right, c_down, height, width, f_right, f_down, h, marked, q1, tail);
        tmp20 = relabels.value + 1;
        relabels.value = tmp20;
        tmp21 = ratioRegions2.PInt(undefined);
        tmp22 = ratioRegions2.PString(undefined);
        tmp23 = ratioRegions2.PInt(undefined);
        tmp24 = ratioRegions2.PString(undefined);
        tmp25 = ratioRegions2.PInt(undefined);
        tmp26 = ratioRegions2.PString(undefined);
        tmp27 = ratioRegions2.PInt(undefined);
        tmp28 = ratioRegions2.PString(undefined);
        tmp29 = ratioRegions2.Cons(tmp28, ratioRegions2.Nil);
        tmp30 = ratioRegions2.Cons(tmp27, tmp29);
        tmp31 = ratioRegions2.Cons(tmp26, tmp30);
        tmp32 = ratioRegions2.Cons(tmp25, tmp31);
        tmp33 = ratioRegions2.Cons(tmp24, tmp32);
        tmp34 = ratioRegions2.Cons(tmp23, tmp33);
        tmp35 = ratioRegions2.Cons(tmp22, tmp34);
        tmp36 = ratioRegions2.Cons(tmp21, tmp35);
        return loop4(ratioRegions2, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp36);
      }
    }
  }
};
lambda17 = (undefined, function (ratioRegions2, width, f_t, e, y) {
  let lambda$here;
  lambda$here = lambda$12(ratioRegions2, f_t, e, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda19 = (undefined, function (ratioRegions2, width, f_right, y) {
  let tmp, lambda$here;
  tmp = width - 1;
  lambda$here = lambda$11(ratioRegions2, f_right, y);
  return ratioRegions2[doo$accessorSymbol](tmp, lambda$here)
});
lambda21 = (undefined, function (ratioRegions2, width, f_down, y) {
  let lambda$here;
  lambda$here = lambda$10(ratioRegions2, f_down, y);
  return ratioRegions2[doo$accessorSymbol](width, lambda$here)
});
lambda22 = (undefined, function (ratioRegions2, width, e, y) {
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
lambda23 = (undefined, function (ratioRegions2, height, e, x) {
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
lambda$4 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda24(ratioRegions2, h, m1, y, x)
  }
});
lambda24 = (undefined, function (ratioRegions2, h, m1, y, x) {
  let inlinedVal, arg$Matrix$0$, tmp;
  if (h instanceof ratioRegions2.Matrix.class) {
    arg$Matrix$0$ = h.a;
    tmp = ratioRegions2[vector_ref$accessorSymbol](arg$Matrix$0$, y);
    inlinedVal = ratioRegions2[vector_ref$accessorSymbol](tmp, x);
    return inlinedVal == m1
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
lambda$3 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    return lambda25(ratioRegions2, width, h, m1, y)
  }
});
lambda25 = (undefined, function (ratioRegions2, width, h, m1, y) {
  let p;
  p = lambda$4(ratioRegions2, h, m1, y);
  return loop2(width, p, 0)
});
lambda$2 = (undefined, function (ratioRegions2, h, m1, y) {
  return (x) => {
    return lambda26(ratioRegions2, h, m1, y, x)
  }
});
lambda26 = (undefined, function (ratioRegions2, h, m1, y, x) {
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
lambda$1 = (undefined, function (ratioRegions2, width, h, m1) {
  return (y) => {
    return lambda$_lambda$lambda1(ratioRegions2, width, h, m1, y)
  }
});
lambda27 = (undefined, function (ratioRegions2, width, h, m1, y) {
  let scrut, arr;
  scrut = width > 0;
  if (scrut === true) {
    let inlinedVal, n, f, arr1, i;
    inlinedVal = lambda26(ratioRegions2, h, m1, y, 0);
    arr = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
    n = width;
    f = lambda$2(ratioRegions2, h, m1, y);
    arr1 = arr;
    i = 1;
    inlinedLbl: {
      loopLabel: while (true) {
        let scrut1, tmp, tmp1;
        scrut1 = i < n;
        if (scrut1 === true) {
          tmp = runtime.safeCall(f(i));
          arr1[i] = tmp;
          tmp1 = i + 1;
          i = tmp1;
          continue loopLabel
        }
        break inlinedLbl;
      }
    }
    return arr
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
loopPow = function loopPow(ratioRegions2, i, c) {
  loopLabel: while (true) {
    let tmp, tmp1, inlinedVal;
    inlinedVal = i == 0;
    if (inlinedVal === true) {
      return c
    }
    tmp = i - 1;
    tmp1 = c + c;
    i = tmp;
    c = tmp1;
    continue loopLabel;
  }
};
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
ef_right = function ef_right(ratioRegions2, c_right, f_right, y, x) {
  let tmp;
  tmp = cf_right(ratioRegions2, c_right, f_right, y, x);
  return tmp > 0
};
ef_left = function ef_left(ratioRegions2, c_right, f_right, y, x) {
  let tmp;
  tmp = cf_left(ratioRegions2, c_right, f_right, y, x);
  return tmp > 0
};
ef_down = function ef_down(ratioRegions2, c_down, f_down, y, x) {
  let tmp;
  tmp = cf_down(ratioRegions2, c_down, f_down, y, x);
  return tmp > 0
};
ef_up = function ef_up(ratioRegions2, c_down, f_down, y, x) {
  let tmp;
  tmp = cf_up(ratioRegions2, c_down, f_down, y, x);
  return tmp > 0
};
preflow_push = function preflow_push(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, v) {
  let pushes, lifts, relabels, tmp, tmp1, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, relabels1, i, p, inlinedVal;
  lambda$here = lambda$9(ratioRegions2, width, f_t, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here);
  lambda$here1 = lambda$8(ratioRegions2, width, f_right);
  ratioRegions2[doo$accessorSymbol](height, lambda$here1);
  tmp = height - 1;
  lambda$here2 = lambda$7(ratioRegions2, width, f_down);
  ratioRegions2[doo$accessorSymbol](tmp, lambda$here2);
  lambda$here3 = lambda$6(ratioRegions2, width, e);
  ratioRegions2[doo$accessorSymbol](height, lambda$here3);
  tmp1 = width - 1;
  lambda$here4 = lambda$5(ratioRegions2, height, e);
  ratioRegions2[doo$accessorSymbol](tmp1, lambda$here4);
  pushes = new ratioRegions2.Ref.class(0);
  lifts = new ratioRegions2.Ref.class(0);
  relabels = new ratioRegions2.Ref.class(0);
  ratioRegions3 = ratioRegions2;
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
  marked1 = marked;
  m11 = m1;
  m21 = m2;
  q1 = q;
  v1 = v;
  pushes1 = pushes;
  lifts1 = lifts;
  relabels1 = relabels;
  i = 0;
  p = false;
  inlinedLbl: {
    loopLabel: while (true) {
      let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, lambda$here5, lambda$here6, lambda$here7, inlinedVal1, inlinedVal2, tmp39, tmp40, tmp41;
      tmp39 = i / 6;
      tmp40 = ratioRegions3[floor$accessorSymbol](tmp39);
      tmp41 = 6 * tmp40;
      inlinedVal1 = i - tmp41;
      inlinedVal2 = inlinedVal1 == 0;
      if (inlinedVal2 === true) {
        let inlinedVal3;
        switch (p) {
          case false:
            inlinedVal3 = true;
            break;
          case true:
            inlinedVal3 = false;
            break;
          default:
            throw globalThis.Object.freeze(new globalThis.Error("match error"));
        }
        tmp2 = inlinedVal3;
      } else {
        tmp2 = false;
      }
      if (tmp2 === true) {
        let p1, inlinedVal3, q2, tail, lambda$here8, lambda$here9;
        q2 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
        tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
        lambda$here8 = lambda$25(ratioRegions3, width1, h1, marked1, m11);
        ratioRegions3[doo$accessorSymbol](height1, lambda$here8);
        lambda$here9 = lambda$24(ratioRegions3, w1, width1, f_t1, h1, marked1, v1, q2, tail);
        ratioRegions3[doo$accessorSymbol](height1, lambda$here9);
        loop5(ratioRegions3, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q2, tail);
        tmp3 = relabels1.value + 1;
        relabels1.value = tmp3;
        p1 = lambda$17(ratioRegions3, width1, h1, e1, m11);
        inlinedVal3 = loop2(height1, p1, 0);
        if (inlinedVal3 === true) {
          tmp4 = ratioRegions.PInt(undefined);
          tmp5 = ratioRegions.PString(undefined);
          tmp6 = ratioRegions.PInt(undefined);
          tmp7 = ratioRegions.PString(undefined);
          tmp8 = ratioRegions.PInt(undefined);
          tmp9 = ratioRegions.PString(undefined);
          tmp10 = ratioRegions.PInt(undefined);
          tmp11 = ratioRegions.PString(undefined);
          tmp12 = ratioRegions3.Cons(tmp11, ratioRegions3.Nil);
          tmp13 = ratioRegions3.Cons(tmp10, tmp12);
          tmp14 = ratioRegions3.Cons(tmp9, tmp13);
          tmp15 = ratioRegions3.Cons(tmp8, tmp14);
          tmp16 = ratioRegions3.Cons(tmp7, tmp15);
          tmp17 = ratioRegions3.Cons(tmp6, tmp16);
          tmp18 = ratioRegions3.Cons(tmp5, tmp17);
          tmp19 = ratioRegions3.Cons(tmp4, tmp18);
          inlinedVal = loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp19);
          break inlinedLbl
        }
        {
          let inlinedVal4;
          inlinedVal4 = q1.length;
          lambda$here5 = lambda$16(ratioRegions3, q1);
          ratioRegions3[doo$accessorSymbol](inlinedVal4, lambda$here5);
          lambda$here6 = lambda$15(ratioRegions3, width1, marked1);
          ratioRegions3[doo$accessorSymbol](height1, lambda$here6);
          lambda$here7 = lambda$14(ratioRegions3, width1, h1, e1, marked1, q1);
          ratioRegions3[doo$accessorSymbol](height1, lambda$here7);
          p = true;
          continue loopLabel;
        }
      }
      {
        let v2, p1, i1, inlinedVal3;
        v2 = q1;
        p1 = lambda$13(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m11, v1);
        i1 = 0;
        inlinedLbl1: {
          loopLabel1: while (true) {
            let tmp42, tmp43, tmp44, inlinedVal4;
            inlinedVal4 = v2.length;
            tmp42 = i1 < inlinedVal4;
            if (tmp42 === true) {
              let inlinedVal5;
              inlinedVal5 = v2.at(i1);
              tmp43 = runtime.safeCall(p1(inlinedVal5));
              if (tmp43 === false) {
                tmp44 = i1 + 1;
                i1 = tmp44;
                continue loopLabel1
              }
              inlinedVal3 = true;
              break inlinedLbl1;
            }
            inlinedVal3 = false;
            break inlinedLbl1;
          }
        }
        if (inlinedVal3 === true) {
          let inlinedVal4;
          inlinedVal4 = q1.length;
          tmp20 = inlinedVal4 - 1;
          loopK(ratioRegions3, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, tmp20);
          tmp21 = i + 1;
          i = tmp21;
          p = false;
          continue loopLabel
        }
        {
          let q2, tail, lambda$here8, lambda$here9;
          q2 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
          tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
          lambda$here8 = lambda$25(ratioRegions3, width1, h1, marked1, m11);
          ratioRegions3[doo$accessorSymbol](height1, lambda$here8);
          lambda$here9 = lambda$24(ratioRegions3, w1, width1, f_t1, h1, marked1, v1, q2, tail);
          ratioRegions3[doo$accessorSymbol](height1, lambda$here9);
          loop5(ratioRegions3, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q2, tail);
          tmp22 = relabels1.value + 1;
          relabels1.value = tmp22;
          tmp23 = ratioRegions.PInt(undefined);
          tmp24 = ratioRegions.PString(undefined);
          tmp25 = ratioRegions.PInt(undefined);
          tmp26 = ratioRegions.PString(undefined);
          tmp27 = ratioRegions.PInt(undefined);
          tmp28 = ratioRegions.PString(undefined);
          tmp29 = ratioRegions.PInt(undefined);
          tmp30 = ratioRegions.PString(undefined);
          tmp31 = ratioRegions3.Cons(tmp30, ratioRegions3.Nil);
          tmp32 = ratioRegions3.Cons(tmp29, tmp31);
          tmp33 = ratioRegions3.Cons(tmp28, tmp32);
          tmp34 = ratioRegions3.Cons(tmp27, tmp33);
          tmp35 = ratioRegions3.Cons(tmp26, tmp34);
          tmp36 = ratioRegions3.Cons(tmp25, tmp35);
          tmp37 = ratioRegions3.Cons(tmp24, tmp36);
          tmp38 = ratioRegions3.Cons(tmp23, tmp37);
          inlinedVal = loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp38);
          break inlinedLbl;
        }
      }
    }
  }
  return inlinedVal
};
min_cut_includes_every_edge_to_t = function min_cut_includes_every_edge_to_t(ratioRegions2, height, width, h, m1) {
  let p;
  p = lambda$3(ratioRegions2, width, h, m1);
  return loop2(height, p, 0)
};
min_cut = function min_cut(ratioRegions2, height, width, h, m1) {
  let f, scrut, arr;
  f = min_cut_lambda$$lambda$(ratioRegions2, width, h, m1);
  scrut = height > 0;
  if (scrut === true) {
    let n, f1, arr1, i, scrut1, arr2;
    scrut1 = width > 0;
    if (scrut1 === true) {
      let inlinedVal, n1, f2, arr3, i1;
      inlinedVal = lambda26(ratioRegions2, h, m1, 0, 0);
      arr2 = ratioRegions2[array_alloc$accessorSymbol](width, inlinedVal);
      n1 = width;
      f2 = lambda$2(ratioRegions2, h, m1, 0);
      arr3 = arr2;
      i1 = 1;
      inlinedLbl: {
        loopLabel: while (true) {
          let scrut2, tmp, tmp1;
          scrut2 = i1 < n1;
          if (scrut2 === true) {
            tmp = runtime.safeCall(f2(i1));
            arr3[i1] = tmp;
            tmp1 = i1 + 1;
            i1 = tmp1;
            continue loopLabel
          }
          break inlinedLbl;
        }
      }
      arr = ratioRegions2[array_alloc$accessorSymbol](height, arr2);
      n = height;
      f1 = f;
      arr1 = arr;
      i = 1;
      inlinedLbl1: {
        loopLabel1: while (true) {
          let scrut2, tmp, tmp1;
          scrut2 = i < n;
          if (scrut2 === true) {
            tmp = runtime.safeCall(f1(i));
            arr1[i] = tmp;
            tmp1 = i + 1;
            i = tmp1;
            continue loopLabel1
          }
          break inlinedLbl1;
        }
      }
      return arr
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
loop7 = function loop(ratioRegions2, c_right, c_down, w, height, width, f_right, f_down, f_t, h, e, marked, m1, m2, q, lg_v, v_max) {
  loopLabel: while (true) {
    let v, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal;
    inlinedVal = lg_v < 0;
    if (inlinedVal === true) {
      let ratioRegions3, ratioRegions4, height1, f, scrut, arr, pushes, lifts, relabels, tmp10, tmp11, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions5, c_right1, c_down1, w1, height2, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, relabels1, i, p;
      tmp = ratioRegions2.PInt(undefined);
      tmp1 = ratioRegions2.Cons(tmp, ratioRegions2.Nil);
      loop_loop$loop(ratioRegions2, "V-MAX=~s~%", 0, tmp1);
      tmp2 = v_max + 1;
      ratioRegions3 = ratioRegions2;
      lambda$here = lambda$9(ratioRegions3, width, f_t, e);
      ratioRegions3[doo$accessorSymbol](height, lambda$here);
      lambda$here1 = lambda$8(ratioRegions3, width, f_right);
      ratioRegions3[doo$accessorSymbol](height, lambda$here1);
      tmp10 = height - 1;
      lambda$here2 = lambda$7(ratioRegions3, width, f_down);
      ratioRegions3[doo$accessorSymbol](tmp10, lambda$here2);
      lambda$here3 = lambda$6(ratioRegions3, width, e);
      ratioRegions3[doo$accessorSymbol](height, lambda$here3);
      tmp11 = width - 1;
      lambda$here4 = lambda$5(ratioRegions3, height, e);
      ratioRegions3[doo$accessorSymbol](tmp11, lambda$here4);
      pushes = new ratioRegions3.Ref.class(0);
      lifts = new ratioRegions3.Ref.class(0);
      relabels = new ratioRegions3.Ref.class(0);
      ratioRegions5 = ratioRegions3;
      c_right1 = c_right;
      c_down1 = c_down;
      w1 = w;
      height2 = height;
      width1 = width;
      f_right1 = f_right;
      f_down1 = f_down;
      f_t1 = f_t;
      h1 = h;
      e1 = e;
      marked1 = marked;
      m11 = m1;
      m21 = m2;
      q1 = q;
      v1 = tmp2;
      pushes1 = pushes;
      lifts1 = lifts;
      relabels1 = relabels;
      i = 0;
      p = false;
      inlinedLbl: {
        loopLabel1: while (true) {
          let tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, lambda$here5, lambda$here6, lambda$here7, inlinedVal1, inlinedVal2, tmp49, tmp50, tmp51;
          tmp49 = i / 6;
          tmp50 = ratioRegions5[floor$accessorSymbol](tmp49);
          tmp51 = 6 * tmp50;
          inlinedVal1 = i - tmp51;
          inlinedVal2 = inlinedVal1 == 0;
          if (inlinedVal2 === true) {
            let inlinedVal3;
            switch (p) {
              case false:
                inlinedVal3 = true;
                break;
              case true:
                inlinedVal3 = false;
                break;
              default:
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            tmp12 = inlinedVal3;
          } else {
            tmp12 = false;
          }
          if (tmp12 === true) {
            let p1, inlinedVal3, q2, tail, lambda$here8, lambda$here9;
            q2 = new ratioRegions5.Ref.class(ratioRegions5.QNil);
            tail = new ratioRegions5.Ref.class(ratioRegions5.QNil);
            lambda$here8 = lambda$25(ratioRegions5, width1, h1, marked1, m11);
            ratioRegions5[doo$accessorSymbol](height2, lambda$here8);
            lambda$here9 = lambda$24(ratioRegions5, w1, width1, f_t1, h1, marked1, v1, q2, tail);
            ratioRegions5[doo$accessorSymbol](height2, lambda$here9);
            loop5(ratioRegions5, c_right1, c_down1, height2, width1, f_right1, f_down1, h1, marked1, q2, tail);
            tmp13 = relabels1.value + 1;
            relabels1.value = tmp13;
            p1 = lambda$17(ratioRegions5, width1, h1, e1, m11);
            inlinedVal3 = loop2(height2, p1, 0);
            if (inlinedVal3 === true) {
              tmp14 = ratioRegions.PInt(undefined);
              tmp15 = ratioRegions.PString(undefined);
              tmp16 = ratioRegions.PInt(undefined);
              tmp17 = ratioRegions.PString(undefined);
              tmp18 = ratioRegions.PInt(undefined);
              tmp19 = ratioRegions.PString(undefined);
              tmp20 = ratioRegions.PInt(undefined);
              tmp21 = ratioRegions.PString(undefined);
              tmp22 = ratioRegions5.Cons(tmp21, ratioRegions5.Nil);
              tmp23 = ratioRegions5.Cons(tmp20, tmp22);
              tmp24 = ratioRegions5.Cons(tmp19, tmp23);
              tmp25 = ratioRegions5.Cons(tmp18, tmp24);
              tmp26 = ratioRegions5.Cons(tmp17, tmp25);
              tmp27 = ratioRegions5.Cons(tmp16, tmp26);
              tmp28 = ratioRegions5.Cons(tmp15, tmp27);
              tmp29 = ratioRegions5.Cons(tmp14, tmp28);
              loop4(ratioRegions5, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp29);
              break inlinedLbl
            }
            {
              let inlinedVal4;
              inlinedVal4 = q1.length;
              lambda$here5 = lambda$16(ratioRegions5, q1);
              ratioRegions5[doo$accessorSymbol](inlinedVal4, lambda$here5);
              lambda$here6 = lambda$15(ratioRegions5, width1, marked1);
              ratioRegions5[doo$accessorSymbol](height2, lambda$here6);
              lambda$here7 = lambda$14(ratioRegions5, width1, h1, e1, marked1, q1);
              ratioRegions5[doo$accessorSymbol](height2, lambda$here7);
              p = true;
              continue loopLabel1;
            }
          }
          {
            let v2, p1, i1, inlinedVal3;
            v2 = q1;
            p1 = lambda$13(ratioRegions5, c_right1, c_down1, w1, height2, width1, f_right1, f_down1, f_t1, h1, e1, m11, v1);
            i1 = 0;
            inlinedLbl1: {
              loopLabel2: while (true) {
                let tmp52, tmp53, tmp54, inlinedVal4;
                inlinedVal4 = v2.length;
                tmp52 = i1 < inlinedVal4;
                if (tmp52 === true) {
                  let inlinedVal5;
                  inlinedVal5 = v2.at(i1);
                  tmp53 = runtime.safeCall(p1(inlinedVal5));
                  if (tmp53 === false) {
                    tmp54 = i1 + 1;
                    i1 = tmp54;
                    continue loopLabel2
                  }
                  inlinedVal3 = true;
                  break inlinedLbl1;
                }
                inlinedVal3 = false;
                break inlinedLbl1;
              }
            }
            if (inlinedVal3 === true) {
              let inlinedVal4;
              inlinedVal4 = q1.length;
              tmp30 = inlinedVal4 - 1;
              loopK(ratioRegions5, c_right1, c_down1, w1, height2, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, tmp30);
              tmp31 = i + 1;
              i = tmp31;
              p = false;
              continue loopLabel1
            }
            {
              let q2, tail, lambda$here8, lambda$here9;
              q2 = new ratioRegions5.Ref.class(ratioRegions5.QNil);
              tail = new ratioRegions5.Ref.class(ratioRegions5.QNil);
              lambda$here8 = lambda$25(ratioRegions5, width1, h1, marked1, m11);
              ratioRegions5[doo$accessorSymbol](height2, lambda$here8);
              lambda$here9 = lambda$24(ratioRegions5, w1, width1, f_t1, h1, marked1, v1, q2, tail);
              ratioRegions5[doo$accessorSymbol](height2, lambda$here9);
              loop5(ratioRegions5, c_right1, c_down1, height2, width1, f_right1, f_down1, h1, marked1, q2, tail);
              tmp32 = relabels1.value + 1;
              relabels1.value = tmp32;
              tmp33 = ratioRegions.PInt(undefined);
              tmp34 = ratioRegions.PString(undefined);
              tmp35 = ratioRegions.PInt(undefined);
              tmp36 = ratioRegions.PString(undefined);
              tmp37 = ratioRegions.PInt(undefined);
              tmp38 = ratioRegions.PString(undefined);
              tmp39 = ratioRegions.PInt(undefined);
              tmp40 = ratioRegions.PString(undefined);
              tmp41 = ratioRegions5.Cons(tmp40, ratioRegions5.Nil);
              tmp42 = ratioRegions5.Cons(tmp39, tmp41);
              tmp43 = ratioRegions5.Cons(tmp38, tmp42);
              tmp44 = ratioRegions5.Cons(tmp37, tmp43);
              tmp45 = ratioRegions5.Cons(tmp36, tmp44);
              tmp46 = ratioRegions5.Cons(tmp35, tmp45);
              tmp47 = ratioRegions5.Cons(tmp34, tmp46);
              tmp48 = ratioRegions5.Cons(tmp33, tmp47);
              loop4(ratioRegions5, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp48);
              break inlinedLbl;
            }
          }
        }
      }
      ratioRegions4 = ratioRegions2;
      height1 = height;
      f = loop_min_cut_lambda$$lambda$(ratioRegions4, width, h, m1);
      scrut = height > 0;
      if (scrut === true) {
        let n, f1, arr1, i1, scrut1, arr2;
        scrut1 = width > 0;
        if (scrut1 === true) {
          let inlinedVal1, n1, f2, arr3, i2;
          inlinedVal1 = lambda26(ratioRegions4, h, m1, 0, 0);
          arr2 = ratioRegions4[array_alloc$accessorSymbol](width, inlinedVal1);
          n1 = width;
          f2 = lambda$2(ratioRegions4, h, m1, 0);
          arr3 = arr2;
          i2 = 1;
          inlinedLbl1: {
            loopLabel2: while (true) {
              let scrut2, tmp12, tmp13;
              scrut2 = i2 < n1;
              if (scrut2 === true) {
                tmp12 = runtime.safeCall(f2(i2));
                arr3[i2] = tmp12;
                tmp13 = i2 + 1;
                i2 = tmp13;
                continue loopLabel2
              }
              break inlinedLbl1;
            }
          }
          arr = ratioRegions4[array_alloc$accessorSymbol](height1, arr2);
          n = height1;
          f1 = f;
          arr1 = arr;
          i1 = 1;
          inlinedLbl2: {
            loopLabel3: while (true) {
              let scrut2, tmp12, tmp13;
              scrut2 = i1 < n;
              if (scrut2 === true) {
                tmp12 = runtime.safeCall(f1(i1));
                arr1[i1] = tmp12;
                tmp13 = i1 + 1;
                i1 = tmp13;
                continue loopLabel3
              }
              break inlinedLbl2;
            }
          }
          return arr
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    {
      let p, inlinedVal1, i, c, inlinedVal2, ratioRegions3, pushes, lifts, relabels, tmp10, tmp11, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions4, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, relabels1, i1, p1;
      i = lg_v;
      c = 1;
      inlinedLbl: {
        loopLabel1: while (true) {
          let tmp12, tmp13, inlinedVal3;
          inlinedVal3 = i == 0;
          if (inlinedVal3 === true) {
            inlinedVal2 = c;
            break inlinedLbl
          }
          tmp12 = i - 1;
          tmp13 = c + c;
          i = tmp12;
          c = tmp13;
          continue loopLabel1;
        }
      }
      v = v_max + inlinedVal2;
      tmp3 = ratioRegions2.PInt(undefined);
      tmp4 = ratioRegions2.PInt(undefined);
      tmp5 = ratioRegions2.PInt(undefined);
      tmp6 = ratioRegions2.Cons(tmp5, ratioRegions2.Nil);
      tmp7 = ratioRegions2.Cons(tmp4, tmp6);
      tmp8 = ratioRegions2.Cons(tmp3, tmp7);
      loop_loop$loop(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp8);
      ratioRegions3 = ratioRegions2;
      lambda$here = lambda$9(ratioRegions3, width, f_t, e);
      ratioRegions3[doo$accessorSymbol](height, lambda$here);
      lambda$here1 = lambda$8(ratioRegions3, width, f_right);
      ratioRegions3[doo$accessorSymbol](height, lambda$here1);
      tmp10 = height - 1;
      lambda$here2 = lambda$7(ratioRegions3, width, f_down);
      ratioRegions3[doo$accessorSymbol](tmp10, lambda$here2);
      lambda$here3 = lambda$6(ratioRegions3, width, e);
      ratioRegions3[doo$accessorSymbol](height, lambda$here3);
      tmp11 = width - 1;
      lambda$here4 = lambda$5(ratioRegions3, height, e);
      ratioRegions3[doo$accessorSymbol](tmp11, lambda$here4);
      pushes = new ratioRegions3.Ref.class(0);
      lifts = new ratioRegions3.Ref.class(0);
      relabels = new ratioRegions3.Ref.class(0);
      ratioRegions4 = ratioRegions3;
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
      marked1 = marked;
      m11 = m1;
      m21 = m2;
      q1 = q;
      v1 = v;
      pushes1 = pushes;
      lifts1 = lifts;
      relabels1 = relabels;
      i1 = 0;
      p1 = false;
      inlinedLbl1: {
        loopLabel2: while (true) {
          let tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, lambda$here5, lambda$here6, lambda$here7, inlinedVal3, inlinedVal4, tmp49, tmp50, tmp51;
          tmp49 = i1 / 6;
          tmp50 = ratioRegions4[floor$accessorSymbol](tmp49);
          tmp51 = 6 * tmp50;
          inlinedVal3 = i1 - tmp51;
          inlinedVal4 = inlinedVal3 == 0;
          if (inlinedVal4 === true) {
            let inlinedVal5;
            switch (p1) {
              case false:
                inlinedVal5 = true;
                break;
              case true:
                inlinedVal5 = false;
                break;
              default:
                throw globalThis.Object.freeze(new globalThis.Error("match error"));
            }
            tmp12 = inlinedVal5;
          } else {
            tmp12 = false;
          }
          if (tmp12 === true) {
            let p2, inlinedVal5, q2, tail, lambda$here8, lambda$here9;
            q2 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
            tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
            lambda$here8 = lambda$25(ratioRegions4, width1, h1, marked1, m11);
            ratioRegions4[doo$accessorSymbol](height1, lambda$here8);
            lambda$here9 = lambda$24(ratioRegions4, w1, width1, f_t1, h1, marked1, v1, q2, tail);
            ratioRegions4[doo$accessorSymbol](height1, lambda$here9);
            loop5(ratioRegions4, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q2, tail);
            tmp13 = relabels1.value + 1;
            relabels1.value = tmp13;
            p2 = lambda$17(ratioRegions4, width1, h1, e1, m11);
            inlinedVal5 = loop2(height1, p2, 0);
            if (inlinedVal5 === true) {
              tmp14 = ratioRegions.PInt(undefined);
              tmp15 = ratioRegions.PString(undefined);
              tmp16 = ratioRegions.PInt(undefined);
              tmp17 = ratioRegions.PString(undefined);
              tmp18 = ratioRegions.PInt(undefined);
              tmp19 = ratioRegions.PString(undefined);
              tmp20 = ratioRegions.PInt(undefined);
              tmp21 = ratioRegions.PString(undefined);
              tmp22 = ratioRegions4.Cons(tmp21, ratioRegions4.Nil);
              tmp23 = ratioRegions4.Cons(tmp20, tmp22);
              tmp24 = ratioRegions4.Cons(tmp19, tmp23);
              tmp25 = ratioRegions4.Cons(tmp18, tmp24);
              tmp26 = ratioRegions4.Cons(tmp17, tmp25);
              tmp27 = ratioRegions4.Cons(tmp16, tmp26);
              tmp28 = ratioRegions4.Cons(tmp15, tmp27);
              tmp29 = ratioRegions4.Cons(tmp14, tmp28);
              loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp29);
              break inlinedLbl1
            }
            {
              let inlinedVal6;
              inlinedVal6 = q1.length;
              lambda$here5 = lambda$16(ratioRegions4, q1);
              ratioRegions4[doo$accessorSymbol](inlinedVal6, lambda$here5);
              lambda$here6 = lambda$15(ratioRegions4, width1, marked1);
              ratioRegions4[doo$accessorSymbol](height1, lambda$here6);
              lambda$here7 = lambda$14(ratioRegions4, width1, h1, e1, marked1, q1);
              ratioRegions4[doo$accessorSymbol](height1, lambda$here7);
              p1 = true;
              continue loopLabel2;
            }
          }
          {
            let v2, p2, i2, inlinedVal5;
            v2 = q1;
            p2 = lambda$13(ratioRegions4, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, m11, v1);
            i2 = 0;
            inlinedLbl2: {
              loopLabel3: while (true) {
                let tmp52, tmp53, tmp54, inlinedVal6;
                inlinedVal6 = v2.length;
                tmp52 = i2 < inlinedVal6;
                if (tmp52 === true) {
                  let inlinedVal7;
                  inlinedVal7 = v2.at(i2);
                  tmp53 = runtime.safeCall(p2(inlinedVal7));
                  if (tmp53 === false) {
                    tmp54 = i2 + 1;
                    i2 = tmp54;
                    continue loopLabel3
                  }
                  inlinedVal5 = true;
                  break inlinedLbl2;
                }
                inlinedVal5 = false;
                break inlinedLbl2;
              }
            }
            if (inlinedVal5 === true) {
              let inlinedVal6;
              inlinedVal6 = q1.length;
              tmp30 = inlinedVal6 - 1;
              loopK(ratioRegions4, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked1, m11, m21, q1, v1, pushes1, lifts1, tmp30);
              tmp31 = i1 + 1;
              i1 = tmp31;
              p1 = false;
              continue loopLabel2
            }
            {
              let q2, tail, lambda$here8, lambda$here9;
              q2 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
              tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
              lambda$here8 = lambda$25(ratioRegions4, width1, h1, marked1, m11);
              ratioRegions4[doo$accessorSymbol](height1, lambda$here8);
              lambda$here9 = lambda$24(ratioRegions4, w1, width1, f_t1, h1, marked1, v1, q2, tail);
              ratioRegions4[doo$accessorSymbol](height1, lambda$here9);
              loop5(ratioRegions4, c_right1, c_down1, height1, width1, f_right1, f_down1, h1, marked1, q2, tail);
              tmp32 = relabels1.value + 1;
              relabels1.value = tmp32;
              tmp33 = ratioRegions.PInt(undefined);
              tmp34 = ratioRegions.PString(undefined);
              tmp35 = ratioRegions.PInt(undefined);
              tmp36 = ratioRegions.PString(undefined);
              tmp37 = ratioRegions.PInt(undefined);
              tmp38 = ratioRegions.PString(undefined);
              tmp39 = ratioRegions.PInt(undefined);
              tmp40 = ratioRegions.PString(undefined);
              tmp41 = ratioRegions4.Cons(tmp40, ratioRegions4.Nil);
              tmp42 = ratioRegions4.Cons(tmp39, tmp41);
              tmp43 = ratioRegions4.Cons(tmp38, tmp42);
              tmp44 = ratioRegions4.Cons(tmp37, tmp43);
              tmp45 = ratioRegions4.Cons(tmp36, tmp44);
              tmp46 = ratioRegions4.Cons(tmp35, tmp45);
              tmp47 = ratioRegions4.Cons(tmp34, tmp46);
              tmp48 = ratioRegions4.Cons(tmp33, tmp47);
              loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp48);
              break inlinedLbl1;
            }
          }
        }
      }
      tmp9 = lg_v - 1;
      p = lambda$3(ratioRegions2, width, h, m1);
      inlinedVal1 = loop2(height, p, 0);
      if (inlinedVal1 === true) {
        lg_v = tmp9;
        v_max = v;
        continue loopLabel
      }
      lg_v = tmp9;
      v_max = v_max;
      continue loopLabel;
    }
  }
};
loop4 = function loop(ratioRegions2, control_string, i, values) {
  loopLabel: while (true) {
    let scrut, scrut1, scrut2, scrut3, tmp, tmp1, arg$Cons$0$, arg$Cons$1$, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, inlinedVal;
    inlinedVal = control_string.length;
    tmp = i == inlinedVal;
    switch (tmp) {
      case false:
        {
          let inlinedVal1;
          inlinedVal1 = control_string.at(i);
          scrut = inlinedVal1 == "~";
          if (scrut === true) {
            let inlinedVal2;
            tmp1 = i + 1;
            inlinedVal2 = control_string.at(tmp1);
            scrut1 = inlinedVal2 == "s";
            if (scrut1 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PInt.class) {
                  tmp2 = i + 2;
                  i = tmp2;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
                scrut2 = inlinedVal2 == "a";
                if (scrut2 === true) {
                  if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                    tmp5 = i + 2;
                    i = tmp5;
                    values = arg$Cons$1$;
                    continue loopLabel
                  }
                }
                scrut3 = inlinedVal2 == "%";
                if (scrut3 === true) {
                  tmp3 = i + 2;
                  i = tmp3;
                  continue loopLabel
                }
                tmp4 = i + 1;
                i = tmp4;
                continue loopLabel;
              }
              scrut3 = inlinedVal2 == "%";
              if (scrut3 === true) {
                tmp6 = i + 2;
                i = tmp6;
                continue loopLabel
              }
              tmp7 = i + 1;
              i = tmp7;
              continue loopLabel;
            }
            scrut2 = inlinedVal2 == "a";
            if (scrut2 === true) {
              if (values instanceof ratioRegions2.Cons.class) {
                arg$Cons$0$ = values.head;
                arg$Cons$1$ = values.tail;
                if (arg$Cons$0$ instanceof ratioRegions2.PString.class) {
                  tmp10 = i + 2;
                  i = tmp10;
                  values = arg$Cons$1$;
                  continue loopLabel
                }
              }
            }
            scrut3 = inlinedVal2 == "%";
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
        return runtime.Unit;
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
lambda$ = (undefined, function (ratioRegions2, n, a) {
  return (i) => {
    return lambda$_lambda$lambda(ratioRegions2, n, a)
  }
});
lambda = (undefined, function (ratioRegions2, n, a, i) {
  let scrut;
  scrut = n > 0;
  if (scrut === true) {
    return ratioRegions2[array_alloc$accessorSymbol](n, a)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
});
loop3 = function loop(ratioRegions2, v, p, i) {
  loopLabel: while (true) {
    let tmp, tmp1, tmp2, inlinedVal;
    inlinedVal = v.length;
    tmp = i < inlinedVal;
    if (tmp === true) {
      let inlinedVal1;
      inlinedVal1 = v.at(i);
      tmp1 = runtime.safeCall(p(inlinedVal1));
      if (tmp1 === false) {
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel
      }
      return true;
    }
    return false;
  }
};
loop2 = function loop(n, p, i) {
  loopLabel: while (true) {
    let tmp, tmp1, tmp2;
    tmp = i >= n;
    if (tmp === false) {
      tmp1 = runtime.safeCall(p(i));
      if (tmp1 === true) {
        tmp2 = i + 1;
        i = tmp2;
        continue loopLabel
      }
      return false;
    }
    return true;
  }
};
loop1 = function loop(ratioRegions2, l, min) {
  loopLabel: while (true) {
    let arg$Cons$0$, arg$Cons$1$;
    if (l instanceof ratioRegions2.Nil.class) {
      return min
    } else if (l instanceof ratioRegions2.Cons.class) {
      let inlinedVal, scrut;
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      scrut = min < arg$Cons$0$;
      if (scrut === true) {
        inlinedVal = min;
      } else {
        inlinedVal = arg$Cons$0$;
      }
      l = arg$Cons$1$;
      min = inlinedVal;
      continue loopLabel
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
};
init = function init(ratioRegions2, n, f, arr, i) {
  loopLabel: while (true) {
    let scrut, tmp, tmp1;
    scrut = i < n;
    if (scrut === true) {
      tmp = runtime.safeCall(f(i));
      arr[i] = tmp;
      tmp1 = i + 1;
      i = tmp1;
      continue loopLabel
    }
    return runtime.Unit;
  }
};
loop = function loop(max, f, i) {
  loopLabel: while (true) {
    let scrut, tmp;
    scrut = i >= max;
    if (scrut === true) {
      return runtime.Unit
    }
    runtime.safeCall(f(i));
    tmp = i + 1;
    i = tmp;
    continue loopLabel;
  }
};
(class ratioRegions {
  static {
    ratioRegions1 = this
  }
  static get [listExists$tailrec$accessorSymbol]() { return ratioRegions.#listExists$tailrec; }
  static get [listApp$tailrec$accessorSymbol]() { return ratioRegions.#listApp$tailrec; }
  static get [floor$accessorSymbol]() { return ratioRegions.#floor; }
  static get [array_alloc$accessorSymbol]() { return ratioRegions.#array_alloc; }
  static get [intMin$accessorSymbol]() { return ratioRegions.#intMin; }
  static get [doo$accessorSymbol]() { return ratioRegions.#doo; }
  static get [vector_ref$accessorSymbol]() { return ratioRegions.#vector_ref; }
  static get [vector_set$accessorSymbol]() { return ratioRegions.#vector_set; }
  static get [negative$accessorSymbol]() { return ratioRegions.#negative; }
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
  static #array_alloc(n, init1) {
    let tmp;
    tmp = [];
    return ratioRegions.#fillArray(tmp, 0, n, init1)
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
  static #make_vector(n, init1) {
    let scrut;
    scrut = n > 0;
    if (scrut === true) {
      return ratioRegions.#array_alloc(n, init1)
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
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      return loop1(ratioRegions, arg$Cons$1$, arg$Cons$0$)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static #every_n(n, p) {
    return loop2(n, p, 0)
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
    return loop4(ratioRegions, control_string, 0, values)
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
    let height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, inlinedVal, inlinedVal1, inlinedVal2, inlinedVal3, inlinedVal4, inlinedVal5, ratioRegions2, c_right1, c_down1, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal6, scrut, arr, scrut1, arr1, scrut2, arr2, scrut3, arr3, scrut4, arr4, scrut5, arr5;
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
      inlinedVal = ratioRegions1.Matrix(arr5);
      f_right = inlinedVal;
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
        inlinedVal1 = ratioRegions1.Matrix(arr4);
        f_down = inlinedVal1;
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
          inlinedVal2 = ratioRegions1.Matrix(arr3);
          f_t = inlinedVal2;
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
            inlinedVal3 = ratioRegions1.Matrix(arr2);
            h = inlinedVal3;
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
              inlinedVal4 = ratioRegions1.Matrix(arr1);
              e = inlinedVal4;
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
                inlinedVal5 = ratioRegions1.Matrix(arr);
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
                marked = inlinedVal5;
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
                      let ratioRegions3, height2, pushes, lifts, relabels, tmp18, tmp19, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions4, c_right2, c_down2, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i6, p, f6, scrut6, arr12;
                      tmp8 = ratioRegions.PInt(undefined);
                      tmp9 = ratioRegions2.Cons(tmp8, ratioRegions2.Nil);
                      rao_ratio_region_loop_loop$loop(ratioRegions2, "V-MAX=~s~%", 0, tmp9);
                      tmp10 = v_max + 1;
                      lambda$here = lambda$9(ratioRegions2, width1, f_t1, e1);
                      ratioRegions2.#doo(height1, lambda$here);
                      lambda$here1 = lambda$8(ratioRegions2, width1, f_right1);
                      ratioRegions2.#doo(height1, lambda$here1);
                      tmp18 = height1 - 1;
                      lambda$here2 = lambda$7(ratioRegions2, width1, f_down1);
                      ratioRegions2.#doo(tmp18, lambda$here2);
                      lambda$here3 = lambda$6(ratioRegions2, width1, e1);
                      ratioRegions2.#doo(height1, lambda$here3);
                      tmp19 = width1 - 1;
                      lambda$here4 = lambda$5(ratioRegions2, height1, e1);
                      ratioRegions2.#doo(tmp19, lambda$here4);
                      pushes = new ratioRegions2.Ref.class(0);
                      lifts = new ratioRegions2.Ref.class(0);
                      relabels = new ratioRegions2.Ref.class(0);
                      ratioRegions4 = ratioRegions2;
                      c_right2 = c_right1;
                      c_down2 = c_down1;
                      w2 = w1;
                      height3 = height1;
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
                      inlinedLbl7: {
                        loopLabel7: while (true) {
                          let tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda$here5, lambda$here6, lambda$here7, inlinedVal14, inlinedVal15, tmp57, tmp58, tmp59;
                          tmp57 = i6 / 6;
                          tmp58 = ratioRegions4.#floor(tmp57);
                          tmp59 = 6 * tmp58;
                          inlinedVal14 = i6 - tmp59;
                          inlinedVal15 = inlinedVal14 == 0;
                          if (inlinedVal15 === true) {
                            let inlinedVal16;
                            switch (p) {
                              case false:
                                inlinedVal16 = true;
                                break;
                              case true:
                                inlinedVal16 = false;
                                break;
                              default:
                                throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            tmp20 = inlinedVal16;
                          } else {
                            tmp20 = false;
                          }
                          if (tmp20 === true) {
                            let p1, inlinedVal16, q3, tail, lambda$here8, lambda$here9;
                            q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                            tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                            lambda$here8 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                            ratioRegions4.#doo(height3, lambda$here8);
                            lambda$here9 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                            ratioRegions4.#doo(height3, lambda$here9);
                            loop5(ratioRegions4, c_right2, c_down2, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                            tmp21 = relabels1.value + 1;
                            relabels1.value = tmp21;
                            p1 = lambda$17(ratioRegions4, width2, h2, e2, m12);
                            inlinedVal16 = loop2(height3, p1, 0);
                            if (inlinedVal16 === true) {
                              tmp22 = ratioRegions.PInt(undefined);
                              tmp23 = ratioRegions.PString(undefined);
                              tmp24 = ratioRegions.PInt(undefined);
                              tmp25 = ratioRegions.PString(undefined);
                              tmp26 = ratioRegions.PInt(undefined);
                              tmp27 = ratioRegions.PString(undefined);
                              tmp28 = ratioRegions.PInt(undefined);
                              tmp29 = ratioRegions.PString(undefined);
                              tmp30 = ratioRegions4.Cons(tmp29, ratioRegions4.Nil);
                              tmp31 = ratioRegions4.Cons(tmp28, tmp30);
                              tmp32 = ratioRegions4.Cons(tmp27, tmp31);
                              tmp33 = ratioRegions4.Cons(tmp26, tmp32);
                              tmp34 = ratioRegions4.Cons(tmp25, tmp33);
                              tmp35 = ratioRegions4.Cons(tmp24, tmp34);
                              tmp36 = ratioRegions4.Cons(tmp23, tmp35);
                              tmp37 = ratioRegions4.Cons(tmp22, tmp36);
                              loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp37);
                              break inlinedLbl7
                            }
                            {
                              let inlinedVal17;
                              inlinedVal17 = q2.length;
                              lambda$here5 = lambda$16(ratioRegions4, q2);
                              ratioRegions4.#doo(inlinedVal17, lambda$here5);
                              lambda$here6 = lambda$15(ratioRegions4, width2, marked1);
                              ratioRegions4.#doo(height3, lambda$here6);
                              lambda$here7 = lambda$14(ratioRegions4, width2, h2, e2, marked1, q2);
                              ratioRegions4.#doo(height3, lambda$here7);
                              p = true;
                              continue loopLabel7;
                            }
                          }
                          {
                            let v2, p1, i7, inlinedVal16;
                            v2 = q2;
                            p1 = lambda$13(ratioRegions4, c_right2, c_down2, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                            i7 = 0;
                            inlinedLbl8: {
                              loopLabel8: while (true) {
                                let tmp60, tmp61, tmp62, inlinedVal17;
                                inlinedVal17 = v2.length;
                                tmp60 = i7 < inlinedVal17;
                                if (tmp60 === true) {
                                  let inlinedVal18;
                                  inlinedVal18 = v2.at(i7);
                                  tmp61 = runtime.safeCall(p1(inlinedVal18));
                                  if (tmp61 === false) {
                                    tmp62 = i7 + 1;
                                    i7 = tmp62;
                                    continue loopLabel8
                                  }
                                  inlinedVal16 = true;
                                  break inlinedLbl8;
                                }
                                inlinedVal16 = false;
                                break inlinedLbl8;
                              }
                            }
                            if (inlinedVal16 === true) {
                              let inlinedVal17;
                              inlinedVal17 = q2.length;
                              tmp38 = inlinedVal17 - 1;
                              loopK(ratioRegions4, c_right2, c_down2, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp38);
                              tmp39 = i6 + 1;
                              i6 = tmp39;
                              p = false;
                              continue loopLabel7
                            }
                            {
                              let q3, tail, lambda$here8, lambda$here9;
                              q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                              tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                              lambda$here8 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                              ratioRegions4.#doo(height3, lambda$here8);
                              lambda$here9 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                              ratioRegions4.#doo(height3, lambda$here9);
                              loop5(ratioRegions4, c_right2, c_down2, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                              tmp40 = relabels1.value + 1;
                              relabels1.value = tmp40;
                              tmp41 = ratioRegions.PInt(undefined);
                              tmp42 = ratioRegions.PString(undefined);
                              tmp43 = ratioRegions.PInt(undefined);
                              tmp44 = ratioRegions.PString(undefined);
                              tmp45 = ratioRegions.PInt(undefined);
                              tmp46 = ratioRegions.PString(undefined);
                              tmp47 = ratioRegions.PInt(undefined);
                              tmp48 = ratioRegions.PString(undefined);
                              tmp49 = ratioRegions4.Cons(tmp48, ratioRegions4.Nil);
                              tmp50 = ratioRegions4.Cons(tmp47, tmp49);
                              tmp51 = ratioRegions4.Cons(tmp46, tmp50);
                              tmp52 = ratioRegions4.Cons(tmp45, tmp51);
                              tmp53 = ratioRegions4.Cons(tmp44, tmp52);
                              tmp54 = ratioRegions4.Cons(tmp43, tmp53);
                              tmp55 = ratioRegions4.Cons(tmp42, tmp54);
                              tmp56 = ratioRegions4.Cons(tmp41, tmp55);
                              loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp56);
                              break inlinedLbl7;
                            }
                          }
                        }
                      }
                      ratioRegions3 = ratioRegions2;
                      height2 = height1;
                      f6 = rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width1, h1, m11);
                      scrut6 = height1 > 0;
                      if (scrut6 === true) {
                        let n6, f7, arr13, i7, scrut7, arr14;
                        scrut7 = width1 > 0;
                        if (scrut7 === true) {
                          let inlinedVal14, n7, f8, arr15, i8;
                          inlinedVal14 = lambda26(ratioRegions2, h1, m11, 0, 0);
                          arr14 = ratioRegions2.#array_alloc(width1, inlinedVal14);
                          n7 = width1;
                          f8 = lambda$2(ratioRegions2, h1, m11, 0);
                          arr15 = arr14;
                          i8 = 1;
                          inlinedLbl8: {
                            loopLabel8: while (true) {
                              let scrut8, tmp20, tmp21;
                              scrut8 = i8 < n7;
                              if (scrut8 === true) {
                                tmp20 = runtime.safeCall(f8(i8));
                                arr15[i8] = tmp20;
                                tmp21 = i8 + 1;
                                i8 = tmp21;
                                continue loopLabel8
                              }
                              break inlinedLbl8;
                            }
                          }
                          arr12 = ratioRegions3.#array_alloc(height2, arr14);
                          n6 = height2;
                          f7 = f6;
                          arr13 = arr12;
                          i7 = 1;
                          inlinedLbl9: {
                            loopLabel9: while (true) {
                              let scrut8, tmp20, tmp21;
                              scrut8 = i7 < n6;
                              if (scrut8 === true) {
                                tmp20 = runtime.safeCall(f7(i7));
                                arr13[i7] = tmp20;
                                tmp21 = i7 + 1;
                                i7 = tmp21;
                                continue loopLabel9
                              }
                              break inlinedLbl9;
                            }
                          }
                          inlinedVal6 = arr12;
                          break inlinedLbl6
                        }
                        throw globalThis.Object.freeze(new globalThis.Error("match error"));
                      }
                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                    }
                    {
                      let p, inlinedVal14, i6, c, inlinedVal15, pushes, lifts, relabels, tmp18, tmp19, lambda$here, lambda$here1, lambda$here2, lambda$here3, lambda$here4, ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i7, p1;
                      i6 = lg_v;
                      c = 1;
                      inlinedLbl7: {
                        loopLabel7: while (true) {
                          let tmp20, tmp21, inlinedVal16;
                          inlinedVal16 = i6 == 0;
                          if (inlinedVal16 === true) {
                            inlinedVal15 = c;
                            break inlinedLbl7
                          }
                          tmp20 = i6 - 1;
                          tmp21 = c + c;
                          i6 = tmp20;
                          c = tmp21;
                          continue loopLabel7;
                        }
                      }
                      v = v_max + inlinedVal15;
                      tmp11 = ratioRegions.PInt(undefined);
                      tmp12 = ratioRegions.PInt(undefined);
                      tmp13 = ratioRegions.PInt(undefined);
                      tmp14 = ratioRegions2.Cons(tmp13, ratioRegions2.Nil);
                      tmp15 = ratioRegions2.Cons(tmp12, tmp14);
                      tmp16 = ratioRegions2.Cons(tmp11, tmp15);
                      rao_ratio_region_loop_loop$loop(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp16);
                      lambda$here = lambda$9(ratioRegions2, width1, f_t1, e1);
                      ratioRegions2.#doo(height1, lambda$here);
                      lambda$here1 = lambda$8(ratioRegions2, width1, f_right1);
                      ratioRegions2.#doo(height1, lambda$here1);
                      tmp18 = height1 - 1;
                      lambda$here2 = lambda$7(ratioRegions2, width1, f_down1);
                      ratioRegions2.#doo(tmp18, lambda$here2);
                      lambda$here3 = lambda$6(ratioRegions2, width1, e1);
                      ratioRegions2.#doo(height1, lambda$here3);
                      tmp19 = width1 - 1;
                      lambda$here4 = lambda$5(ratioRegions2, height1, e1);
                      ratioRegions2.#doo(tmp19, lambda$here4);
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
                      p1 = false;
                      inlinedLbl8: {
                        loopLabel8: while (true) {
                          let tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda$here5, lambda$here6, lambda$here7, inlinedVal16, inlinedVal17, tmp57, tmp58, tmp59;
                          tmp57 = i7 / 6;
                          tmp58 = ratioRegions3.#floor(tmp57);
                          tmp59 = 6 * tmp58;
                          inlinedVal16 = i7 - tmp59;
                          inlinedVal17 = inlinedVal16 == 0;
                          if (inlinedVal17 === true) {
                            let inlinedVal18;
                            switch (p1) {
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
                            let p2, inlinedVal18, q3, tail, lambda$here8, lambda$here9;
                            q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                            tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                            lambda$here8 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                            ratioRegions3.#doo(height2, lambda$here8);
                            lambda$here9 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                            ratioRegions3.#doo(height2, lambda$here9);
                            loop5(ratioRegions3, c_right2, c_down2, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                            tmp21 = relabels1.value + 1;
                            relabels1.value = tmp21;
                            p2 = lambda$17(ratioRegions3, width2, h2, e2, m12);
                            inlinedVal18 = loop2(height2, p2, 0);
                            if (inlinedVal18 === true) {
                              tmp22 = ratioRegions.PInt(undefined);
                              tmp23 = ratioRegions.PString(undefined);
                              tmp24 = ratioRegions.PInt(undefined);
                              tmp25 = ratioRegions.PString(undefined);
                              tmp26 = ratioRegions.PInt(undefined);
                              tmp27 = ratioRegions.PString(undefined);
                              tmp28 = ratioRegions.PInt(undefined);
                              tmp29 = ratioRegions.PString(undefined);
                              tmp30 = ratioRegions3.Cons(tmp29, ratioRegions3.Nil);
                              tmp31 = ratioRegions3.Cons(tmp28, tmp30);
                              tmp32 = ratioRegions3.Cons(tmp27, tmp31);
                              tmp33 = ratioRegions3.Cons(tmp26, tmp32);
                              tmp34 = ratioRegions3.Cons(tmp25, tmp33);
                              tmp35 = ratioRegions3.Cons(tmp24, tmp34);
                              tmp36 = ratioRegions3.Cons(tmp23, tmp35);
                              tmp37 = ratioRegions3.Cons(tmp22, tmp36);
                              loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp37);
                              break inlinedLbl8
                            }
                            {
                              let inlinedVal19;
                              inlinedVal19 = q2.length;
                              lambda$here5 = lambda$16(ratioRegions3, q2);
                              ratioRegions3.#doo(inlinedVal19, lambda$here5);
                              lambda$here6 = lambda$15(ratioRegions3, width2, marked1);
                              ratioRegions3.#doo(height2, lambda$here6);
                              lambda$here7 = lambda$14(ratioRegions3, width2, h2, e2, marked1, q2);
                              ratioRegions3.#doo(height2, lambda$here7);
                              p1 = true;
                              continue loopLabel8;
                            }
                          }
                          {
                            let v2, p2, i8, inlinedVal18;
                            v2 = q2;
                            p2 = lambda$13(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                            i8 = 0;
                            inlinedLbl9: {
                              loopLabel9: while (true) {
                                let tmp60, tmp61, tmp62, inlinedVal19;
                                inlinedVal19 = v2.length;
                                tmp60 = i8 < inlinedVal19;
                                if (tmp60 === true) {
                                  let inlinedVal20;
                                  inlinedVal20 = v2.at(i8);
                                  tmp61 = runtime.safeCall(p2(inlinedVal20));
                                  if (tmp61 === false) {
                                    tmp62 = i8 + 1;
                                    i8 = tmp62;
                                    continue loopLabel9
                                  }
                                  inlinedVal18 = true;
                                  break inlinedLbl9;
                                }
                                inlinedVal18 = false;
                                break inlinedLbl9;
                              }
                            }
                            if (inlinedVal18 === true) {
                              let inlinedVal19;
                              inlinedVal19 = q2.length;
                              tmp38 = inlinedVal19 - 1;
                              loopK(ratioRegions3, c_right2, c_down2, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp38);
                              tmp39 = i7 + 1;
                              i7 = tmp39;
                              p1 = false;
                              continue loopLabel8
                            }
                            {
                              let q3, tail, lambda$here8, lambda$here9;
                              q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                              tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                              lambda$here8 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                              ratioRegions3.#doo(height2, lambda$here8);
                              lambda$here9 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                              ratioRegions3.#doo(height2, lambda$here9);
                              loop5(ratioRegions3, c_right2, c_down2, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                              tmp40 = relabels1.value + 1;
                              relabels1.value = tmp40;
                              tmp41 = ratioRegions.PInt(undefined);
                              tmp42 = ratioRegions.PString(undefined);
                              tmp43 = ratioRegions.PInt(undefined);
                              tmp44 = ratioRegions.PString(undefined);
                              tmp45 = ratioRegions.PInt(undefined);
                              tmp46 = ratioRegions.PString(undefined);
                              tmp47 = ratioRegions.PInt(undefined);
                              tmp48 = ratioRegions.PString(undefined);
                              tmp49 = ratioRegions3.Cons(tmp48, ratioRegions3.Nil);
                              tmp50 = ratioRegions3.Cons(tmp47, tmp49);
                              tmp51 = ratioRegions3.Cons(tmp46, tmp50);
                              tmp52 = ratioRegions3.Cons(tmp45, tmp51);
                              tmp53 = ratioRegions3.Cons(tmp44, tmp52);
                              tmp54 = ratioRegions3.Cons(tmp43, tmp53);
                              tmp55 = ratioRegions3.Cons(tmp42, tmp54);
                              tmp56 = ratioRegions3.Cons(tmp41, tmp55);
                              loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp56);
                              break inlinedLbl8;
                            }
                          }
                        }
                      }
                      tmp17 = lg_v - 1;
                      p = lambda$3(ratioRegions2, width1, h1, m11);
                      inlinedVal14 = loop2(height1, p, 0);
                      if (inlinedVal14 === true) {
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
                return inlinedVal6
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
    let c_right, c_down, tmp, tmp1, tmp2, lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, c_right1, c_down1, w, lg_max_v, height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, ratioRegions2, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal9, scrut, arr, scrut1, arr1, scrut2, arr2, scrut3, arr3, scrut4, arr4, scrut5, arr5, scrut6, arr6, scrut7, arr7, scrut8, arr8;
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
        lambda$here = lambda$29(ratioRegions, n, n, c_right);
        ratioRegions.#doo(n, lambda$here);
        tmp2 = n - 1;
        lambda$here1 = lambda$28(ratioRegions, n, n, inlinedVal1);
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
            inlinedVal3 = ratioRegions1.Matrix(arr);
            f_right = inlinedVal3;
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
              inlinedVal4 = ratioRegions1.Matrix(arr1);
              f_down = inlinedVal4;
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
                inlinedVal5 = ratioRegions1.Matrix(arr2);
                f_t = inlinedVal5;
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
                  inlinedVal6 = ratioRegions1.Matrix(arr3);
                  h = inlinedVal6;
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
                    inlinedVal7 = ratioRegions1.Matrix(arr4);
                    e = inlinedVal7;
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
                      inlinedVal8 = ratioRegions1.Matrix(arr5);
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
                      marked = inlinedVal8;
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
                            let ratioRegions3, height2, pushes, lifts, relabels, tmp21, tmp22, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i9, p, f9, scrut9, arr18;
                            tmp11 = ratioRegions.PInt(undefined);
                            tmp12 = ratioRegions2.Cons(tmp11, ratioRegions2.Nil);
                            doit_rao_ratio_region_loop_loop$loop(ratioRegions2, "V-MAX=~s~%", 0, tmp12);
                            tmp13 = v_max + 1;
                            lambda$here2 = lambda$9(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here2);
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            tmp21 = height1 - 1;
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp21, lambda$here4);
                            lambda$here5 = lambda$6(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here5);
                            tmp22 = width1 - 1;
                            lambda$here6 = lambda$5(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp22, lambda$here6);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height3 = height1;
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
                            i9 = 0;
                            p = false;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, lambda$here7, lambda$here8, lambda$here9, inlinedVal20, inlinedVal21, tmp60, tmp61, tmp62;
                                tmp60 = i9 / 6;
                                tmp61 = ratioRegions4.#floor(tmp60);
                                tmp62 = 6 * tmp61;
                                inlinedVal20 = i9 - tmp62;
                                inlinedVal21 = inlinedVal20 == 0;
                                if (inlinedVal21 === true) {
                                  let inlinedVal22;
                                  switch (p) {
                                    case false:
                                      inlinedVal22 = true;
                                      break;
                                    case true:
                                      inlinedVal22 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp23 = inlinedVal22;
                                } else {
                                  tmp23 = false;
                                }
                                if (tmp23 === true) {
                                  let p1, inlinedVal22, q3, tail, lambda$here10, lambda$here11;
                                  q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                  tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                  lambda$here10 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                                  ratioRegions4.#doo(height3, lambda$here10);
                                  lambda$here11 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                  ratioRegions4.#doo(height3, lambda$here11);
                                  loop5(ratioRegions4, c_right3, c_down3, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                  tmp24 = relabels1.value + 1;
                                  relabels1.value = tmp24;
                                  p1 = lambda$17(ratioRegions4, width2, h2, e2, m12);
                                  inlinedVal22 = loop2(height3, p1, 0);
                                  if (inlinedVal22 === true) {
                                    tmp25 = ratioRegions.PInt(undefined);
                                    tmp26 = ratioRegions.PString(undefined);
                                    tmp27 = ratioRegions.PInt(undefined);
                                    tmp28 = ratioRegions.PString(undefined);
                                    tmp29 = ratioRegions.PInt(undefined);
                                    tmp30 = ratioRegions.PString(undefined);
                                    tmp31 = ratioRegions.PInt(undefined);
                                    tmp32 = ratioRegions.PString(undefined);
                                    tmp33 = ratioRegions4.Cons(tmp32, ratioRegions4.Nil);
                                    tmp34 = ratioRegions4.Cons(tmp31, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp30, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp29, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp28, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp27, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp26, tmp38);
                                    tmp40 = ratioRegions4.Cons(tmp25, tmp39);
                                    loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp40);
                                    break inlinedLbl10
                                  }
                                  {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    lambda$here7 = lambda$16(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal23, lambda$here7);
                                    lambda$here8 = lambda$15(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height3, lambda$here8);
                                    lambda$here9 = lambda$14(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height3, lambda$here9);
                                    p = true;
                                    continue loopLabel10;
                                  }
                                }
                                {
                                  let v2, p1, i10, inlinedVal22;
                                  v2 = q2;
                                  p1 = lambda$13(ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                  i10 = 0;
                                  inlinedLbl11: {
                                    loopLabel11: while (true) {
                                      let tmp63, tmp64, tmp65, inlinedVal23;
                                      inlinedVal23 = v2.length;
                                      tmp63 = i10 < inlinedVal23;
                                      if (tmp63 === true) {
                                        let inlinedVal24;
                                        inlinedVal24 = v2.at(i10);
                                        tmp64 = runtime.safeCall(p1(inlinedVal24));
                                        if (tmp64 === false) {
                                          tmp65 = i10 + 1;
                                          i10 = tmp65;
                                          continue loopLabel11
                                        }
                                        inlinedVal22 = true;
                                        break inlinedLbl11;
                                      }
                                      inlinedVal22 = false;
                                      break inlinedLbl11;
                                    }
                                  }
                                  if (inlinedVal22 === true) {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    tmp41 = inlinedVal23 - 1;
                                    loopK(ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp41);
                                    tmp42 = i9 + 1;
                                    i9 = tmp42;
                                    p = false;
                                    continue loopLabel10
                                  }
                                  {
                                    let q3, tail, lambda$here10, lambda$here11;
                                    q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                    tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                    lambda$here10 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                                    ratioRegions4.#doo(height3, lambda$here10);
                                    lambda$here11 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                    ratioRegions4.#doo(height3, lambda$here11);
                                    loop5(ratioRegions4, c_right3, c_down3, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                    tmp43 = relabels1.value + 1;
                                    relabels1.value = tmp43;
                                    tmp44 = ratioRegions.PInt(undefined);
                                    tmp45 = ratioRegions.PString(undefined);
                                    tmp46 = ratioRegions.PInt(undefined);
                                    tmp47 = ratioRegions.PString(undefined);
                                    tmp48 = ratioRegions.PInt(undefined);
                                    tmp49 = ratioRegions.PString(undefined);
                                    tmp50 = ratioRegions.PInt(undefined);
                                    tmp51 = ratioRegions.PString(undefined);
                                    tmp52 = ratioRegions4.Cons(tmp51, ratioRegions4.Nil);
                                    tmp53 = ratioRegions4.Cons(tmp50, tmp52);
                                    tmp54 = ratioRegions4.Cons(tmp49, tmp53);
                                    tmp55 = ratioRegions4.Cons(tmp48, tmp54);
                                    tmp56 = ratioRegions4.Cons(tmp47, tmp55);
                                    tmp57 = ratioRegions4.Cons(tmp46, tmp56);
                                    tmp58 = ratioRegions4.Cons(tmp45, tmp57);
                                    tmp59 = ratioRegions4.Cons(tmp44, tmp58);
                                    loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp59);
                                    break inlinedLbl10;
                                  }
                                }
                              }
                            }
                            ratioRegions3 = ratioRegions2;
                            height2 = height1;
                            f9 = doit_rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width1, h1, m11);
                            scrut9 = height1 > 0;
                            if (scrut9 === true) {
                              let n10, f10, arr19, i10, scrut10, arr20;
                              scrut10 = width1 > 0;
                              if (scrut10 === true) {
                                let inlinedVal20, n11, f11, arr21, i11;
                                inlinedVal20 = lambda26(ratioRegions2, h1, m11, 0, 0);
                                arr20 = ratioRegions2.#array_alloc(width1, inlinedVal20);
                                n11 = width1;
                                f11 = lambda$2(ratioRegions2, h1, m11, 0);
                                arr21 = arr20;
                                i11 = 1;
                                inlinedLbl11: {
                                  loopLabel11: while (true) {
                                    let scrut11, tmp23, tmp24;
                                    scrut11 = i11 < n11;
                                    if (scrut11 === true) {
                                      tmp23 = runtime.safeCall(f11(i11));
                                      arr21[i11] = tmp23;
                                      tmp24 = i11 + 1;
                                      i11 = tmp24;
                                      continue loopLabel11
                                    }
                                    break inlinedLbl11;
                                  }
                                }
                                arr18 = ratioRegions3.#array_alloc(height2, arr20);
                                n10 = height2;
                                f10 = f9;
                                arr19 = arr18;
                                i10 = 1;
                                inlinedLbl12: {
                                  loopLabel12: while (true) {
                                    let scrut11, tmp23, tmp24;
                                    scrut11 = i10 < n10;
                                    if (scrut11 === true) {
                                      tmp23 = runtime.safeCall(f10(i10));
                                      arr19[i10] = tmp23;
                                      tmp24 = i10 + 1;
                                      i10 = tmp24;
                                      continue loopLabel12
                                    }
                                    break inlinedLbl12;
                                  }
                                }
                                inlinedVal9 = arr18;
                                break inlinedLbl9
                              }
                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          {
                            let p, inlinedVal20, i9, c, inlinedVal21, pushes, lifts, relabels, tmp21, tmp22, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i10, p1;
                            i9 = lg_v;
                            c = 1;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp23, tmp24, inlinedVal22;
                                inlinedVal22 = i9 == 0;
                                if (inlinedVal22 === true) {
                                  inlinedVal21 = c;
                                  break inlinedLbl10
                                }
                                tmp23 = i9 - 1;
                                tmp24 = c + c;
                                i9 = tmp23;
                                c = tmp24;
                                continue loopLabel10;
                              }
                            }
                            v = v_max + inlinedVal21;
                            tmp14 = ratioRegions.PInt(undefined);
                            tmp15 = ratioRegions.PInt(undefined);
                            tmp16 = ratioRegions.PInt(undefined);
                            tmp17 = ratioRegions2.Cons(tmp16, ratioRegions2.Nil);
                            tmp18 = ratioRegions2.Cons(tmp15, tmp17);
                            tmp19 = ratioRegions2.Cons(tmp14, tmp18);
                            doit_rao_ratio_region_loop_loop$loop(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp19);
                            lambda$here2 = lambda$9(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here2);
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            tmp21 = height1 - 1;
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp21, lambda$here4);
                            lambda$here5 = lambda$6(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here5);
                            tmp22 = width1 - 1;
                            lambda$here6 = lambda$5(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp22, lambda$here6);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions3 = ratioRegions2;
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
                            i10 = 0;
                            p1 = false;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, lambda$here7, lambda$here8, lambda$here9, inlinedVal22, inlinedVal23, tmp60, tmp61, tmp62;
                                tmp60 = i10 / 6;
                                tmp61 = ratioRegions3.#floor(tmp60);
                                tmp62 = 6 * tmp61;
                                inlinedVal22 = i10 - tmp62;
                                inlinedVal23 = inlinedVal22 == 0;
                                if (inlinedVal23 === true) {
                                  let inlinedVal24;
                                  switch (p1) {
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
                                  let p2, inlinedVal24, q3, tail, lambda$here10, lambda$here11;
                                  q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                  tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                  lambda$here10 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                                  ratioRegions3.#doo(height2, lambda$here10);
                                  lambda$here11 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                  ratioRegions3.#doo(height2, lambda$here11);
                                  loop5(ratioRegions3, c_right3, c_down3, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                  tmp24 = relabels1.value + 1;
                                  relabels1.value = tmp24;
                                  p2 = lambda$17(ratioRegions3, width2, h2, e2, m12);
                                  inlinedVal24 = loop2(height2, p2, 0);
                                  if (inlinedVal24 === true) {
                                    tmp25 = ratioRegions.PInt(undefined);
                                    tmp26 = ratioRegions.PString(undefined);
                                    tmp27 = ratioRegions.PInt(undefined);
                                    tmp28 = ratioRegions.PString(undefined);
                                    tmp29 = ratioRegions.PInt(undefined);
                                    tmp30 = ratioRegions.PString(undefined);
                                    tmp31 = ratioRegions.PInt(undefined);
                                    tmp32 = ratioRegions.PString(undefined);
                                    tmp33 = ratioRegions3.Cons(tmp32, ratioRegions3.Nil);
                                    tmp34 = ratioRegions3.Cons(tmp31, tmp33);
                                    tmp35 = ratioRegions3.Cons(tmp30, tmp34);
                                    tmp36 = ratioRegions3.Cons(tmp29, tmp35);
                                    tmp37 = ratioRegions3.Cons(tmp28, tmp36);
                                    tmp38 = ratioRegions3.Cons(tmp27, tmp37);
                                    tmp39 = ratioRegions3.Cons(tmp26, tmp38);
                                    tmp40 = ratioRegions3.Cons(tmp25, tmp39);
                                    loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp40);
                                    break inlinedLbl11
                                  }
                                  {
                                    let inlinedVal25;
                                    inlinedVal25 = q2.length;
                                    lambda$here7 = lambda$16(ratioRegions3, q2);
                                    ratioRegions3.#doo(inlinedVal25, lambda$here7);
                                    lambda$here8 = lambda$15(ratioRegions3, width2, marked1);
                                    ratioRegions3.#doo(height2, lambda$here8);
                                    lambda$here9 = lambda$14(ratioRegions3, width2, h2, e2, marked1, q2);
                                    ratioRegions3.#doo(height2, lambda$here9);
                                    p1 = true;
                                    continue loopLabel11;
                                  }
                                }
                                {
                                  let v2, p2, i11, inlinedVal24;
                                  v2 = q2;
                                  p2 = lambda$13(ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                  i11 = 0;
                                  inlinedLbl12: {
                                    loopLabel12: while (true) {
                                      let tmp63, tmp64, tmp65, inlinedVal25;
                                      inlinedVal25 = v2.length;
                                      tmp63 = i11 < inlinedVal25;
                                      if (tmp63 === true) {
                                        let inlinedVal26;
                                        inlinedVal26 = v2.at(i11);
                                        tmp64 = runtime.safeCall(p2(inlinedVal26));
                                        if (tmp64 === false) {
                                          tmp65 = i11 + 1;
                                          i11 = tmp65;
                                          continue loopLabel12
                                        }
                                        inlinedVal24 = true;
                                        break inlinedLbl12;
                                      }
                                      inlinedVal24 = false;
                                      break inlinedLbl12;
                                    }
                                  }
                                  if (inlinedVal24 === true) {
                                    let inlinedVal25;
                                    inlinedVal25 = q2.length;
                                    tmp41 = inlinedVal25 - 1;
                                    loopK(ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp41);
                                    tmp42 = i10 + 1;
                                    i10 = tmp42;
                                    p1 = false;
                                    continue loopLabel11
                                  }
                                  {
                                    let q3, tail, lambda$here10, lambda$here11;
                                    q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                    tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                    lambda$here10 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                                    ratioRegions3.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                    ratioRegions3.#doo(height2, lambda$here11);
                                    loop5(ratioRegions3, c_right3, c_down3, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                    tmp43 = relabels1.value + 1;
                                    relabels1.value = tmp43;
                                    tmp44 = ratioRegions.PInt(undefined);
                                    tmp45 = ratioRegions.PString(undefined);
                                    tmp46 = ratioRegions.PInt(undefined);
                                    tmp47 = ratioRegions.PString(undefined);
                                    tmp48 = ratioRegions.PInt(undefined);
                                    tmp49 = ratioRegions.PString(undefined);
                                    tmp50 = ratioRegions.PInt(undefined);
                                    tmp51 = ratioRegions.PString(undefined);
                                    tmp52 = ratioRegions3.Cons(tmp51, ratioRegions3.Nil);
                                    tmp53 = ratioRegions3.Cons(tmp50, tmp52);
                                    tmp54 = ratioRegions3.Cons(tmp49, tmp53);
                                    tmp55 = ratioRegions3.Cons(tmp48, tmp54);
                                    tmp56 = ratioRegions3.Cons(tmp47, tmp55);
                                    tmp57 = ratioRegions3.Cons(tmp46, tmp56);
                                    tmp58 = ratioRegions3.Cons(tmp45, tmp57);
                                    tmp59 = ratioRegions3.Cons(tmp44, tmp58);
                                    loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp59);
                                    break inlinedLbl11;
                                  }
                                }
                              }
                            }
                            tmp20 = lg_v - 1;
                            p = lambda$3(ratioRegions2, width1, h1, m11);
                            inlinedVal20 = loop2(height1, p, 0);
                            if (inlinedVal20 === true) {
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
                      return inlinedVal9
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
    let n, c_right, c_down, tmp, tmp1, lambda$here, lambda$here1, inlinedVal, inlinedVal1, inlinedVal2, c_right1, c_down1, w, lg_max_v, arr, scrut, arr1, scrut1, arr2, height, width, f_right, f_down, f_t, h, e, m1, m2, q, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, inlinedVal3, inlinedVal4, inlinedVal5, inlinedVal6, inlinedVal7, inlinedVal8, ratioRegions2, c_right2, c_down2, w1, height1, width1, f_right1, f_down1, f_t1, h1, e1, marked, m11, m21, q1, lg_v, v_max, inlinedVal9, scrut2, arr3, scrut3, arr4, scrut4, arr5, scrut5, arr6, scrut6, arr7, scrut7, arr8;
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
        lambda$here = lambda$29(ratioRegions1, n, n, c_right);
        ratioRegions1.#doo(n, lambda$here);
        tmp1 = n - 1;
        lambda$here1 = lambda$28(ratioRegions1, n, n, inlinedVal1);
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
            inlinedVal3 = ratioRegions1.Matrix(arr3);
            f_right = inlinedVal3;
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
              inlinedVal4 = ratioRegions1.Matrix(arr4);
              f_down = inlinedVal4;
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
                inlinedVal5 = ratioRegions1.Matrix(arr5);
                f_t = inlinedVal5;
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
                  inlinedVal6 = ratioRegions1.Matrix(arr6);
                  h = inlinedVal6;
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
                    inlinedVal7 = ratioRegions1.Matrix(arr7);
                    e = inlinedVal7;
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
                      inlinedVal8 = ratioRegions1.Matrix(arr8);
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
                      marked = inlinedVal8;
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
                            let ratioRegions3, height2, pushes, lifts, relabels, tmp20, tmp21, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i9, p, f9, scrut8, arr18;
                            tmp10 = ratioRegions.PInt(undefined);
                            tmp11 = ratioRegions2.Cons(tmp10, ratioRegions2.Nil);
                            main_doit_rao_ratio_region_loop_loop$loop(ratioRegions2, "V-MAX=~s~%", 0, tmp11);
                            tmp12 = v_max + 1;
                            lambda$here2 = lambda$9(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here2);
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            tmp20 = height1 - 1;
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp20, lambda$here4);
                            lambda$here5 = lambda$6(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here5);
                            tmp21 = width1 - 1;
                            lambda$here6 = lambda$5(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp21, lambda$here6);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions4 = ratioRegions2;
                            c_right3 = c_right2;
                            c_down3 = c_down2;
                            w2 = w1;
                            height3 = height1;
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
                            i9 = 0;
                            p = false;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, lambda$here7, lambda$here8, lambda$here9, inlinedVal20, inlinedVal21, tmp59, tmp60, tmp61;
                                tmp59 = i9 / 6;
                                tmp60 = ratioRegions4.#floor(tmp59);
                                tmp61 = 6 * tmp60;
                                inlinedVal20 = i9 - tmp61;
                                inlinedVal21 = inlinedVal20 == 0;
                                if (inlinedVal21 === true) {
                                  let inlinedVal22;
                                  switch (p) {
                                    case false:
                                      inlinedVal22 = true;
                                      break;
                                    case true:
                                      inlinedVal22 = false;
                                      break;
                                    default:
                                      throw globalThis.Object.freeze(new globalThis.Error("match error"));
                                  }
                                  tmp22 = inlinedVal22;
                                } else {
                                  tmp22 = false;
                                }
                                if (tmp22 === true) {
                                  let p1, inlinedVal22, q3, tail, lambda$here10, lambda$here11;
                                  q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                  tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                  lambda$here10 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                                  ratioRegions4.#doo(height3, lambda$here10);
                                  lambda$here11 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                  ratioRegions4.#doo(height3, lambda$here11);
                                  loop5(ratioRegions4, c_right3, c_down3, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                  tmp23 = relabels1.value + 1;
                                  relabels1.value = tmp23;
                                  p1 = lambda$17(ratioRegions4, width2, h2, e2, m12);
                                  inlinedVal22 = loop2(height3, p1, 0);
                                  if (inlinedVal22 === true) {
                                    tmp24 = ratioRegions.PInt(undefined);
                                    tmp25 = ratioRegions.PString(undefined);
                                    tmp26 = ratioRegions.PInt(undefined);
                                    tmp27 = ratioRegions.PString(undefined);
                                    tmp28 = ratioRegions.PInt(undefined);
                                    tmp29 = ratioRegions.PString(undefined);
                                    tmp30 = ratioRegions.PInt(undefined);
                                    tmp31 = ratioRegions.PString(undefined);
                                    tmp32 = ratioRegions4.Cons(tmp31, ratioRegions4.Nil);
                                    tmp33 = ratioRegions4.Cons(tmp30, tmp32);
                                    tmp34 = ratioRegions4.Cons(tmp29, tmp33);
                                    tmp35 = ratioRegions4.Cons(tmp28, tmp34);
                                    tmp36 = ratioRegions4.Cons(tmp27, tmp35);
                                    tmp37 = ratioRegions4.Cons(tmp26, tmp36);
                                    tmp38 = ratioRegions4.Cons(tmp25, tmp37);
                                    tmp39 = ratioRegions4.Cons(tmp24, tmp38);
                                    loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp39);
                                    break inlinedLbl10
                                  }
                                  {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    lambda$here7 = lambda$16(ratioRegions4, q2);
                                    ratioRegions4.#doo(inlinedVal23, lambda$here7);
                                    lambda$here8 = lambda$15(ratioRegions4, width2, marked1);
                                    ratioRegions4.#doo(height3, lambda$here8);
                                    lambda$here9 = lambda$14(ratioRegions4, width2, h2, e2, marked1, q2);
                                    ratioRegions4.#doo(height3, lambda$here9);
                                    p = true;
                                    continue loopLabel10;
                                  }
                                }
                                {
                                  let v2, p1, i10, inlinedVal22;
                                  v2 = q2;
                                  p1 = lambda$13(ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                  i10 = 0;
                                  inlinedLbl11: {
                                    loopLabel11: while (true) {
                                      let tmp62, tmp63, tmp64, inlinedVal23;
                                      inlinedVal23 = v2.length;
                                      tmp62 = i10 < inlinedVal23;
                                      if (tmp62 === true) {
                                        let inlinedVal24;
                                        inlinedVal24 = v2.at(i10);
                                        tmp63 = runtime.safeCall(p1(inlinedVal24));
                                        if (tmp63 === false) {
                                          tmp64 = i10 + 1;
                                          i10 = tmp64;
                                          continue loopLabel11
                                        }
                                        inlinedVal22 = true;
                                        break inlinedLbl11;
                                      }
                                      inlinedVal22 = false;
                                      break inlinedLbl11;
                                    }
                                  }
                                  if (inlinedVal22 === true) {
                                    let inlinedVal23;
                                    inlinedVal23 = q2.length;
                                    tmp40 = inlinedVal23 - 1;
                                    loopK(ratioRegions4, c_right3, c_down3, w2, height3, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp40);
                                    tmp41 = i9 + 1;
                                    i9 = tmp41;
                                    p = false;
                                    continue loopLabel10
                                  }
                                  {
                                    let q3, tail, lambda$here10, lambda$here11;
                                    q3 = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                    tail = new ratioRegions4.Ref.class(ratioRegions4.QNil);
                                    lambda$here10 = lambda$25(ratioRegions4, width2, h2, marked1, m12);
                                    ratioRegions4.#doo(height3, lambda$here10);
                                    lambda$here11 = lambda$24(ratioRegions4, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                    ratioRegions4.#doo(height3, lambda$here11);
                                    loop5(ratioRegions4, c_right3, c_down3, height3, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                    tmp42 = relabels1.value + 1;
                                    relabels1.value = tmp42;
                                    tmp43 = ratioRegions.PInt(undefined);
                                    tmp44 = ratioRegions.PString(undefined);
                                    tmp45 = ratioRegions.PInt(undefined);
                                    tmp46 = ratioRegions.PString(undefined);
                                    tmp47 = ratioRegions.PInt(undefined);
                                    tmp48 = ratioRegions.PString(undefined);
                                    tmp49 = ratioRegions.PInt(undefined);
                                    tmp50 = ratioRegions.PString(undefined);
                                    tmp51 = ratioRegions4.Cons(tmp50, ratioRegions4.Nil);
                                    tmp52 = ratioRegions4.Cons(tmp49, tmp51);
                                    tmp53 = ratioRegions4.Cons(tmp48, tmp52);
                                    tmp54 = ratioRegions4.Cons(tmp47, tmp53);
                                    tmp55 = ratioRegions4.Cons(tmp46, tmp54);
                                    tmp56 = ratioRegions4.Cons(tmp45, tmp55);
                                    tmp57 = ratioRegions4.Cons(tmp44, tmp56);
                                    tmp58 = ratioRegions4.Cons(tmp43, tmp57);
                                    loop4(ratioRegions4, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp58);
                                    break inlinedLbl10;
                                  }
                                }
                              }
                            }
                            ratioRegions3 = ratioRegions2;
                            height2 = height1;
                            f9 = main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$(ratioRegions2, width1, h1, m11);
                            scrut8 = height1 > 0;
                            if (scrut8 === true) {
                              let n10, f10, arr19, i10, scrut9, arr20;
                              scrut9 = width1 > 0;
                              if (scrut9 === true) {
                                let inlinedVal20, n11, f11, arr21, i11;
                                inlinedVal20 = lambda26(ratioRegions2, h1, m11, 0, 0);
                                arr20 = ratioRegions2.#array_alloc(width1, inlinedVal20);
                                n11 = width1;
                                f11 = lambda$2(ratioRegions2, h1, m11, 0);
                                arr21 = arr20;
                                i11 = 1;
                                inlinedLbl11: {
                                  loopLabel11: while (true) {
                                    let scrut10, tmp22, tmp23;
                                    scrut10 = i11 < n11;
                                    if (scrut10 === true) {
                                      tmp22 = runtime.safeCall(f11(i11));
                                      arr21[i11] = tmp22;
                                      tmp23 = i11 + 1;
                                      i11 = tmp23;
                                      continue loopLabel11
                                    }
                                    break inlinedLbl11;
                                  }
                                }
                                arr18 = ratioRegions3.#array_alloc(height2, arr20);
                                n10 = height2;
                                f10 = f9;
                                arr19 = arr18;
                                i10 = 1;
                                inlinedLbl12: {
                                  loopLabel12: while (true) {
                                    let scrut10, tmp22, tmp23;
                                    scrut10 = i10 < n10;
                                    if (scrut10 === true) {
                                      tmp22 = runtime.safeCall(f10(i10));
                                      arr19[i10] = tmp22;
                                      tmp23 = i10 + 1;
                                      i10 = tmp23;
                                      continue loopLabel12
                                    }
                                    break inlinedLbl12;
                                  }
                                }
                                inlinedVal9 = arr18;
                                break inlinedLbl9
                              }
                              throw globalThis.Object.freeze(new globalThis.Error("match error"));
                            }
                            throw globalThis.Object.freeze(new globalThis.Error("match error"));
                          }
                          {
                            let p, inlinedVal20, i9, c, inlinedVal21, pushes, lifts, relabels, tmp20, tmp21, lambda$here2, lambda$here3, lambda$here4, lambda$here5, lambda$here6, ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, relabels1, i10, p1;
                            i9 = lg_v;
                            c = 1;
                            inlinedLbl10: {
                              loopLabel10: while (true) {
                                let tmp22, tmp23, inlinedVal22;
                                inlinedVal22 = i9 == 0;
                                if (inlinedVal22 === true) {
                                  inlinedVal21 = c;
                                  break inlinedLbl10
                                }
                                tmp22 = i9 - 1;
                                tmp23 = c + c;
                                i9 = tmp22;
                                c = tmp23;
                                continue loopLabel10;
                              }
                            }
                            v = v_max + inlinedVal21;
                            tmp13 = ratioRegions.PInt(undefined);
                            tmp14 = ratioRegions.PInt(undefined);
                            tmp15 = ratioRegions.PInt(undefined);
                            tmp16 = ratioRegions2.Cons(tmp15, ratioRegions2.Nil);
                            tmp17 = ratioRegions2.Cons(tmp14, tmp16);
                            tmp18 = ratioRegions2.Cons(tmp13, tmp17);
                            main_doit_rao_ratio_region_loop_loop$loop(ratioRegions2, "LG-V=~s, V-MAX=~s, V=~s~%", 0, tmp18);
                            lambda$here2 = lambda$9(ratioRegions2, width1, f_t1, e1);
                            ratioRegions2.#doo(height1, lambda$here2);
                            lambda$here3 = lambda$8(ratioRegions2, width1, f_right1);
                            ratioRegions2.#doo(height1, lambda$here3);
                            tmp20 = height1 - 1;
                            lambda$here4 = lambda$7(ratioRegions2, width1, f_down1);
                            ratioRegions2.#doo(tmp20, lambda$here4);
                            lambda$here5 = lambda$6(ratioRegions2, width1, e1);
                            ratioRegions2.#doo(height1, lambda$here5);
                            tmp21 = width1 - 1;
                            lambda$here6 = lambda$5(ratioRegions2, height1, e1);
                            ratioRegions2.#doo(tmp21, lambda$here6);
                            pushes = new ratioRegions2.Ref.class(0);
                            lifts = new ratioRegions2.Ref.class(0);
                            relabels = new ratioRegions2.Ref.class(0);
                            ratioRegions3 = ratioRegions2;
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
                            i10 = 0;
                            p1 = false;
                            inlinedLbl11: {
                              loopLabel11: while (true) {
                                let tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, lambda$here7, lambda$here8, lambda$here9, inlinedVal22, inlinedVal23, tmp59, tmp60, tmp61;
                                tmp59 = i10 / 6;
                                tmp60 = ratioRegions3.#floor(tmp59);
                                tmp61 = 6 * tmp60;
                                inlinedVal22 = i10 - tmp61;
                                inlinedVal23 = inlinedVal22 == 0;
                                if (inlinedVal23 === true) {
                                  let inlinedVal24;
                                  switch (p1) {
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
                                  let p2, inlinedVal24, q3, tail, lambda$here10, lambda$here11;
                                  q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                  tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                  lambda$here10 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                                  ratioRegions3.#doo(height2, lambda$here10);
                                  lambda$here11 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                  ratioRegions3.#doo(height2, lambda$here11);
                                  loop5(ratioRegions3, c_right3, c_down3, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                  tmp23 = relabels1.value + 1;
                                  relabels1.value = tmp23;
                                  p2 = lambda$17(ratioRegions3, width2, h2, e2, m12);
                                  inlinedVal24 = loop2(height2, p2, 0);
                                  if (inlinedVal24 === true) {
                                    tmp24 = ratioRegions.PInt(undefined);
                                    tmp25 = ratioRegions.PString(undefined);
                                    tmp26 = ratioRegions.PInt(undefined);
                                    tmp27 = ratioRegions.PString(undefined);
                                    tmp28 = ratioRegions.PInt(undefined);
                                    tmp29 = ratioRegions.PString(undefined);
                                    tmp30 = ratioRegions.PInt(undefined);
                                    tmp31 = ratioRegions.PString(undefined);
                                    tmp32 = ratioRegions3.Cons(tmp31, ratioRegions3.Nil);
                                    tmp33 = ratioRegions3.Cons(tmp30, tmp32);
                                    tmp34 = ratioRegions3.Cons(tmp29, tmp33);
                                    tmp35 = ratioRegions3.Cons(tmp28, tmp34);
                                    tmp36 = ratioRegions3.Cons(tmp27, tmp35);
                                    tmp37 = ratioRegions3.Cons(tmp26, tmp36);
                                    tmp38 = ratioRegions3.Cons(tmp25, tmp37);
                                    tmp39 = ratioRegions3.Cons(tmp24, tmp38);
                                    loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a, terminated early~%", 0, tmp39);
                                    break inlinedLbl11
                                  }
                                  {
                                    let inlinedVal25;
                                    inlinedVal25 = q2.length;
                                    lambda$here7 = lambda$16(ratioRegions3, q2);
                                    ratioRegions3.#doo(inlinedVal25, lambda$here7);
                                    lambda$here8 = lambda$15(ratioRegions3, width2, marked1);
                                    ratioRegions3.#doo(height2, lambda$here8);
                                    lambda$here9 = lambda$14(ratioRegions3, width2, h2, e2, marked1, q2);
                                    ratioRegions3.#doo(height2, lambda$here9);
                                    p1 = true;
                                    continue loopLabel11;
                                  }
                                }
                                {
                                  let v2, p2, i11, inlinedVal24;
                                  v2 = q2;
                                  p2 = lambda$13(ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, m12, v1);
                                  i11 = 0;
                                  inlinedLbl12: {
                                    loopLabel12: while (true) {
                                      let tmp62, tmp63, tmp64, inlinedVal25;
                                      inlinedVal25 = v2.length;
                                      tmp62 = i11 < inlinedVal25;
                                      if (tmp62 === true) {
                                        let inlinedVal26;
                                        inlinedVal26 = v2.at(i11);
                                        tmp63 = runtime.safeCall(p2(inlinedVal26));
                                        if (tmp63 === false) {
                                          tmp64 = i11 + 1;
                                          i11 = tmp64;
                                          continue loopLabel12
                                        }
                                        inlinedVal24 = true;
                                        break inlinedLbl12;
                                      }
                                      inlinedVal24 = false;
                                      break inlinedLbl12;
                                    }
                                  }
                                  if (inlinedVal24 === true) {
                                    let inlinedVal25;
                                    inlinedVal25 = q2.length;
                                    tmp40 = inlinedVal25 - 1;
                                    loopK(ratioRegions3, c_right3, c_down3, w2, height2, width2, f_right2, f_down2, f_t2, h2, e2, marked1, m12, m22, q2, v1, pushes1, lifts1, tmp40);
                                    tmp41 = i10 + 1;
                                    i10 = tmp41;
                                    p1 = false;
                                    continue loopLabel11
                                  }
                                  {
                                    let q3, tail, lambda$here10, lambda$here11;
                                    q3 = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                    tail = new ratioRegions3.Ref.class(ratioRegions3.QNil);
                                    lambda$here10 = lambda$25(ratioRegions3, width2, h2, marked1, m12);
                                    ratioRegions3.#doo(height2, lambda$here10);
                                    lambda$here11 = lambda$24(ratioRegions3, w2, width2, f_t2, h2, marked1, v1, q3, tail);
                                    ratioRegions3.#doo(height2, lambda$here11);
                                    loop5(ratioRegions3, c_right3, c_down3, height2, width2, f_right2, f_down2, h2, marked1, q3, tail);
                                    tmp42 = relabels1.value + 1;
                                    relabels1.value = tmp42;
                                    tmp43 = ratioRegions.PInt(undefined);
                                    tmp44 = ratioRegions.PString(undefined);
                                    tmp45 = ratioRegions.PInt(undefined);
                                    tmp46 = ratioRegions.PString(undefined);
                                    tmp47 = ratioRegions.PInt(undefined);
                                    tmp48 = ratioRegions.PString(undefined);
                                    tmp49 = ratioRegions.PInt(undefined);
                                    tmp50 = ratioRegions.PString(undefined);
                                    tmp51 = ratioRegions3.Cons(tmp50, ratioRegions3.Nil);
                                    tmp52 = ratioRegions3.Cons(tmp49, tmp51);
                                    tmp53 = ratioRegions3.Cons(tmp48, tmp52);
                                    tmp54 = ratioRegions3.Cons(tmp47, tmp53);
                                    tmp55 = ratioRegions3.Cons(tmp46, tmp54);
                                    tmp56 = ratioRegions3.Cons(tmp45, tmp55);
                                    tmp57 = ratioRegions3.Cons(tmp44, tmp56);
                                    tmp58 = ratioRegions3.Cons(tmp43, tmp57);
                                    loop4(ratioRegions3, "~s push~a, ~s lift~a, ~s relabel~a, ~s wave~a~%", 0, tmp58);
                                    break inlinedLbl11;
                                  }
                                }
                              }
                            }
                            tmp19 = lg_v - 1;
                            p = lambda$3(ratioRegions2, width1, h1, m11);
                            inlinedVal20 = loop2(height1, p, 0);
                            if (inlinedVal20 === true) {
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
                      return inlinedVal9
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
export { loop as _$_modulePrivate_$_loop };
export { init as _$_modulePrivate_$_init };
export { loop1 as _$_modulePrivate_$_loop1 };
export { loop2 as _$_modulePrivate_$_loop2 };
export { loop3 as _$_modulePrivate_$_loop3 };
export { loop4 as _$_modulePrivate_$_loop4 };
export { enqueue as _$_modulePrivate_$_enqueue };
export { loop5 as _$_modulePrivate_$_loop5 };
export { isNull as _$_modulePrivate_$_isNull };
export { dequeue as _$_modulePrivate_$_dequeue };
export { loopK as _$_modulePrivate_$_loopK };
export { push_t as _$_modulePrivate_$_push_t };
export { loop6 as _$_modulePrivate_$_loop6 };
export { ef_t as _$_modulePrivate_$_ef_t };
export { enqueue1 as _$_modulePrivate_$_enqueue1 };
export { can_push_down as _$_modulePrivate_$_can_push_down };
export { push_down as _$_modulePrivate_$_push_down };
export { can_push_left as _$_modulePrivate_$_can_push_left };
export { push_right as _$_modulePrivate_$_push_right };
export { push_left as _$_modulePrivate_$_push_left };
export { relabel as _$_modulePrivate_$_relabel };
export { cf_t as _$_modulePrivate_$_cf_t };
export { can_lift as _$_modulePrivate_$_can_lift };
export { can_push_t as _$_modulePrivate_$_can_push_t };
export { can_push_up as _$_modulePrivate_$_can_push_up };
export { can_push_right as _$_modulePrivate_$_can_push_right };
export { push_up as _$_modulePrivate_$_push_up };
export { lift as _$_modulePrivate_$_lift };
export { loopPow as _$_modulePrivate_$_loopPow };
export { loop7 as _$_modulePrivate_$_loop7 };
export { min_cut as _$_modulePrivate_$_min_cut };
export { ef_up as _$_modulePrivate_$_ef_up };
export { ef_right as _$_modulePrivate_$_ef_right };
export { cf_right as _$_modulePrivate_$_cf_right };
export { cf_down as _$_modulePrivate_$_cf_down };
export { ef_left as _$_modulePrivate_$_ef_left };
export { min_cut_includes_every_edge_to_t as _$_modulePrivate_$_min_cut_includes_every_edge_to_t };
export { cf_up as _$_modulePrivate_$_cf_up };
export { preflow_push as _$_modulePrivate_$_preflow_push };
export { cf_left as _$_modulePrivate_$_cf_left };
export { ef_down as _$_modulePrivate_$_ef_down };
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
export { lambda21 as _$_modulePrivate_$_lambda21 };
export { lambda22 as _$_modulePrivate_$_lambda22 };
export { lambda23 as _$_modulePrivate_$_lambda23 };
export { lambda24 as _$_modulePrivate_$_lambda24 };
export { lambda25 as _$_modulePrivate_$_lambda25 };
export { lambda26 as _$_modulePrivate_$_lambda26 };
export { lambda27 as _$_modulePrivate_$_lambda27 };
export { lambda28 as _$_modulePrivate_$_lambda28 };
export { lambda29 as _$_modulePrivate_$_lambda29 };
export { lambda30 as _$_modulePrivate_$_lambda30 };
export { lambda31 as _$_modulePrivate_$_lambda31 };
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
export { lambda$31 as _$_modulePrivate_$_lambda$31 };
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
export { main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda };
export { main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ };
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
export { doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda as _$_modulePrivate_$_doit_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda };
export { doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ as _$_modulePrivate_$_doit_rao_ratio_region_loop_min_cut_lambda$$lambda$ };
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
export { rao_ratio_region_loop_min_cut_lambda$_lambda$lambda as _$_modulePrivate_$_rao_ratio_region_loop_min_cut_lambda$_lambda$lambda };
export { rao_ratio_region_loop_min_cut_lambda$$lambda$ as _$_modulePrivate_$_rao_ratio_region_loop_min_cut_lambda$$lambda$ };
export { make_matrix_lambda$_lambda$lambda as _$_modulePrivate_$_make_matrix_lambda$_lambda$lambda };
export { make_matrix_lambda$$lambda$ as _$_modulePrivate_$_make_matrix_lambda$$lambda$ };
export { lambda$_lambda$lambda as _$_modulePrivate_$_lambda$_lambda$lambda };
export { loop_min_cut_lambda$_lambda$lambda as _$_modulePrivate_$_loop_min_cut_lambda$_lambda$lambda };
export { loop_min_cut_lambda$$lambda$ as _$_modulePrivate_$_loop_min_cut_lambda$$lambda$ };
export { min_cut_lambda$_lambda$lambda as _$_modulePrivate_$_min_cut_lambda$_lambda$lambda };
export { min_cut_lambda$$lambda$ as _$_modulePrivate_$_min_cut_lambda$$lambda$ };
export { lambda$_lambda$lambda1 as _$_modulePrivate_$_lambda$_lambda$lambda1 };
export { main_doit_rao_ratio_region_loop_loop$loop as _$_modulePrivate_$_main_doit_rao_ratio_region_loop_loop$loop };
export { doit_rao_ratio_region_loop_loop$loop as _$_modulePrivate_$_doit_rao_ratio_region_loop_loop$loop };
export { rao_ratio_region_loop_loop$loop as _$_modulePrivate_$_rao_ratio_region_loop_loop$loop };
export { loop_loop$loop as _$_modulePrivate_$_loop_loop$loop };
export default ratioRegions1;
