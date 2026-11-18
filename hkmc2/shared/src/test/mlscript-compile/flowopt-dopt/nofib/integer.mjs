const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
let integer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker1, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker1, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker2, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker3, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker3, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker4, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker4, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker5, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker5, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker6, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker6, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker7, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker7, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker8, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker8, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker9, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker9, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9;
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker9(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker9 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker9(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker9 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker9(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker8(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker8 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker8(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker8 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker8(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker7(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker7 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker7(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker7 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker7(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker6(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker6 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker6(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker6 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker6(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker5(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker5 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker5(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker5 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker5(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker4(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker4 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker4(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker4 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker4(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker3(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker3 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker3(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker3 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker3(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker2(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker2 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker2(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker2 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker2(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker1(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker1 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker1(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker1 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker1(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let fv_tmp, inlinedVal;
    tmp = 2 * t;
    tmp1 = tmp - a;
    fv_tmp = runtime.safeCall(eta$0$5(eta$0$6, a));
    inlinedVal = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(t, tmp1, b, undefined, undefined, undefined, undefined, undefined, eta$0$5, eta$0$6, undefined, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12);
    return NofibPrelude.Cons(fv_tmp, inlinedVal)
  }
  return eta$0$12(undefined, undefined, undefined, undefined, undefined, eta$0$9, eta$0$10, undefined, eta$0$8, eta$0$11, eta$0$5);
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo$worker(a, t, b, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    let Cons_tail, fv_tmp;
    tmp = 2 * t;
    tmp1 = tmp - a;
    Cons_tail = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    fv_tmp = eta$0$5 + eta$0$6;
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo$worker(eta$0$5, fv_tmp, eta$0$9, undefined, undefined, undefined, undefined, undefined, eta$0$10, a, undefined, eta$0$8, eta$0$5, eta$0$6, eta$0$9, Cons_tail)
  }
  return NofibPrelude.Nil;
};
lambda = (undefined, function (a, b) {
  return a + b
});
lambda1 = (undefined, function (a, b) {
  return a + b
});
lambda2 = (undefined, function (a, b) {
  return a - b
});
lambda3 = (undefined, function (a, b) {
  return a - b
});
lambda4 = (undefined, function (a, b) {
  return a * b
});
lambda5 = (undefined, function (a, b) {
  return a * b
});
lambda6 = (undefined, function (a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
});
lambda7 = (undefined, function (a, b) {
  let tmp;
  tmp = a / b;
  return runtime.safeCall(globalThis.Math.floor(tmp))
});
lambda8 = (undefined, function (a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
});
lambda9 = (undefined, function (a, b) {
  let tmp, inlinedVal, tmp1;
  tmp1 = a / b;
  inlinedVal = runtime.safeCall(globalThis.Math.floor(tmp1));
  tmp = b * inlinedVal;
  return a - tmp
});
lambda10 = (undefined, function (a, b) {
  return a == b
});
lambda11 = (undefined, function (a, b) {
  return a == b
});
lambda12 = (undefined, function (a, b) {
  return a < b
});
lambda13 = (undefined, function (a, b) {
  return a < b
});
lambda14 = (undefined, function (a, b) {
  return a <= b
});
lambda15 = (undefined, function (a, b) {
  return a <= b
});
lambda16 = (undefined, function (a, b) {
  return a > b
});
lambda17 = (undefined, function (a, b) {
  return a > b
});
lambda18 = (undefined, function (a, b) {
  return a >= b
});
lambda19 = (undefined, function (a, b) {
  return a >= b
});
(class integer {
  static {
    integer1 = this
  }
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, inlinedVal;
    tmp = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(-2100000000, -1399999999, 2100000000);
    tmp(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda1);
    tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(-2100000000, -1399999999, 2100000000);
    tmp1(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda);
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1(-2100000000, -1399999999, 2100000000);
    tmp2(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda3);
    tmp3 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1(-2100000000, -1399999999, 2100000000);
    tmp3(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda2);
    tmp4 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2(-2100000000, -1399999999, 2100000000);
    tmp4(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda5);
    tmp5 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2(-2100000000, -1399999999, 2100000000);
    tmp5(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda4);
    tmp6 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3(-2100000000, -1399999999, 2100000000);
    tmp6(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda7);
    tmp7 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3(-2100000000, -1399999999, 2100000000);
    tmp7(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda6);
    tmp8 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4(-2100000000, -1399999999, 2100000000);
    tmp8(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda9);
    tmp9 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4(-2100000000, -1399999999, 2100000000);
    tmp9(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda8);
    tmp10 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5(-2100000000, -1399999999, 2100000000);
    tmp10(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda11);
    tmp11 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5(-2100000000, -1399999999, 2100000000);
    tmp11(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda10);
    tmp12 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6(-2100000000, -1399999999, 2100000000);
    tmp12(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda13);
    tmp13 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6(-2100000000, -1399999999, 2100000000);
    tmp13(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda12);
    tmp14 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7(-2100000000, -1399999999, 2100000000);
    tmp14(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda15);
    tmp15 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7(-2100000000, -1399999999, 2100000000);
    tmp15(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda14);
    tmp16 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8(-2100000000, -1399999999, 2100000000);
    tmp16(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda17);
    tmp17 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8(-2100000000, -1399999999, 2100000000);
    tmp17(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda16);
    tmp18 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9(-2100000000, -1399999999, 2100000000);
    tmp18(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda19);
    tmp19 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9(-2100000000, -1399999999, 2100000000);
    inlinedVal = tmp19(undefined, undefined, undefined, undefined, undefined, -2100000000, 700000001, undefined, integer1, 2100000000, lambda18);
    return runtime.safeCall(inlinedVal.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "integer"];
});
export default integer1;
