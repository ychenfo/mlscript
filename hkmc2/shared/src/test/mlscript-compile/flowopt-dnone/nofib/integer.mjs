const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../Predef.mjs";
let integer1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil1, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons1, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil1, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons1, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons2, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil2, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil3, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons3, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil3, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons3, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons4, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil4, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil5, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons5, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons4, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil4, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil5, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons5, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons6, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil6, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil7, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons7, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons6, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil6, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil7, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons7, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons8, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil8, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil9, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons9, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons8, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil8, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil9, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons9, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons10, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil10, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil11, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons11, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons10, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil10, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil11, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons11, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons12, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil12, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil13, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons13, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons12, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil12, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil13, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons13, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons14, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil14, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil15, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons15, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons14, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil14, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil15, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons15, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons16, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil16, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil17, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons17, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons16, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil16, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil17, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons17, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons18, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil18, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil19, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons19, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons18, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil18, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil19, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons19, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker1, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker1, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker2, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker3, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker2, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker3, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker4, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker5, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker4, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker5, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker6, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker7, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker6, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker7, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker8, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker9, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker8, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker9, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker10, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker11, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker10, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker11, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker12, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker13, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker12, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker13, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker14, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker15, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker14, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker15, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker16, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker17, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker16, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker17, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker18, main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker19, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker18, main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker19;
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons1(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil1();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons1(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil1();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons2(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil2();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons3(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil3();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons2(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil2();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo1(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons3(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil3();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons4(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil4();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons5(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil5();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons4(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil4();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo2(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons5(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil5();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons6(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil6();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons7(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil7();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons6(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil6();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo3(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons7(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil7();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons8(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil8();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons9(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil9();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons8(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil8();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo4(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons9(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil9();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons10(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil10();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons11(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil11();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons10(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil10();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo5(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons11(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil11();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons12(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil12();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons13(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil13();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons12(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil12();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo6(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons13(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil13();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons14(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil14();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons15(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil15();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons14(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil14();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo7(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons15(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil15();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons16(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil16();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons17(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil17();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons16(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil16();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo8(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons17(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil17();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons18(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil18();
};
main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_integerbench_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons19(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil19();
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons18(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil18();
};
main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9 = function main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo(a, t, b) {
  let scrut, tmp, tmp1, tmp2;
  scrut = a <= b;
  if (scrut === true) {
    tmp = 2 * t;
    tmp1 = tmp - a;
    tmp2 = main_testInteger_nofib_runalltests_runbench_intbench_enumFromThenTo$enumFromThenTo9(t, tmp1, b);
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons19(a, tmp2)
  }
  return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil19();
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker19(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker19 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil1 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons1 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker18(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker18 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker19(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker19 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil1 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons1 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker18(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker18 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker17(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker17 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil3 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons3 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker16(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker16 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo1(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker17(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker17 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil3 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons3 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker16(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker16 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo1(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons4 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker15(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker15 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil4 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil5 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons5 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker14(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker14 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo2(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons4 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker15(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker15 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil4 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil5 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons5 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker14(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker14 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo2(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons6 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker13(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker13 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil6 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil7 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons7 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker12(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker12 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo3(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons6 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker13(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker13 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil6 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil7 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons7 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker12(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker12 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo3(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons8 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker11(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker11 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil8 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil9 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons9 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker10(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker10 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo4(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons8 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker11(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker11 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil8 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil9 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons9 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker10(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker10 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo4(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons10 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker9(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker9 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil10 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil11 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons11 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker8(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker8 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo5(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons10 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker9(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker9 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil10 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil11 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons11 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker8(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker8 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo5(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons12 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker7(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker7 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil12 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil13 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons13 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker6(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker6 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo6(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons12 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker7(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker7 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil12 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil13 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons13 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker6(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker6 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo6(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons14 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker5(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker5 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil14 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil15 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons15 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker4(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker4 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo7(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons14 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker5(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker5 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil14 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil15 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons15 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker4(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker4 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo7(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons16 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker3(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker3 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil16 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil17 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons17 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker2(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker2 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo8(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons16 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker3(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker3 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil16 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil17 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons17 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker2(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker2 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo8(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons18 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker1 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil18 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil19 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons19 = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker = function main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_integerbench_lscomp1_enumFromThenTo$enumFromThenTo9(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons18 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker1(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker1 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) {
  let inlinedVal;
  fv_tmp = runtime.safeCall(fv_op(fv_a, Cons_head));
  inlinedVal = Cons_tail(undefined, undefined, undefined, undefined, undefined, fv_op, fv_a, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1);
  return NofibPrelude.Cons(fv_tmp, inlinedVal)
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil18 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t2, fv_b, fv_tmp, fv_op, fv_a, fv_tmp1, fv_integer, fv_bstart, fv_bstep, fv_blim, fv_t1) => {
    return fv_t1(undefined, undefined, undefined, undefined, undefined, fv_bstart, fv_bstep, undefined, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil19 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Nil() {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return NofibPrelude.Nil
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons19 = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons(Cons_head, Cons_tail) {
  return (fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) => {
    return main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op)
  }
};
main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker = function main_testInteger_nofib_runalltests_runbench_intbench_lscomp1$ls_Cons$worker(Cons_head, Cons_tail, fv_arg$Cons$0$, fv_arg$Cons$1$, fv_t1, fv_a, fv_tmp, fv_bstart, fv_bstep, fv_tmp1, fv_integer, fv_blim, fv_op) {
  fv_tmp = fv_bstart + fv_bstep;
  fv_tmp1 = main_testInteger_nofib_runalltests_runbench_intbench_lscomp1_enumFromThenTo$enumFromThenTo9(fv_bstart, fv_tmp, fv_blim);
  return fv_tmp1(undefined, undefined, undefined, undefined, undefined, fv_op, Cons_head, undefined, fv_integer, fv_bstart, fv_bstep, fv_blim, Cons_tail)
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
