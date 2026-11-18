const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../Runtime.mjs";
import Predef from "./../../Predef.mjs";
let getBw1, get, tardis1, lambda, lambda1, lambda2, getBw1$, get$, lambda$, lambda$1, main_go_fix$fix, main_go_bind$bind, main_go_bind$scrut_tup3, main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_go_lambda$_lambda_bind$scrut_tup3, main_go_fix$scrut_tup3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike, main_main_go$frames_Nil_main_go_getPast$getPast$main_go_getPast$getPast, main_main_go$frames_Nil$main_go$frames_Nil, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike1, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$, main_main_go$frames_Cons$main_go$frames_Cons, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$1, main_main_go$frames_Cons$main_go$frames_Cons1, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws11, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$1, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score11, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$_lambda$lambda, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$$lambda$, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$2, main_main_go$frames_Cons$main_go$frames_Cons2, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws12, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$2, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score12, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$2, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda2, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$2, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda2, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$2, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike2, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$3, main_main_go$frames_Cons$main_go$frames_Cons3, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws13, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$3, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score13, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike3, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$4, main_main_go$frames_Cons$main_go$frames_Cons4, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws14, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$4, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score14, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$4, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda4, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$4, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda4, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$4, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike4, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$5, main_main_go$frames_Cons$main_go$frames_Cons5, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws15, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$5, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score15, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$5, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$1, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare1, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$6, main_main_go$frames_Cons$main_go$frames_Cons6, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws16, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$6, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score16, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$6, main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$7, main_main_go$frames_Cons$main_go$frames_Cons7, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws17, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$7, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score17, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$7, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda5, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$5, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda5, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$5, main_score1$_score1$score1, main_score1$$score1$, main_throws1$_throws1$throws1, main_throws1$$throws1$, main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$1, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$2, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$3, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$4, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$5, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$6, main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$7, main_main_go$lambda$$main_go$lambda$, main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_main_go_lambda$_lambda_pure$pure$main_go_lambda$_lambda_pure$pure, main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda, main_main_go$frames_Nil_main_go_lambda$$lambda$$main_go_lambda$$lambda$, main_initialBw$initialBw, main_go_bind$scrut_tup3$worker, main_go_fix$scrut_tup3$worker, main_go_lambda$_lambda_bind$scrut_tup3$worker, main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_go_bind$scrut_tup3$worker1, main_go_bind$bind$worker, main_go_fix$fix$worker, main_initialBw$initialBw$worker, main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind$worker, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3$worker, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3$worker, main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker, main_main_go$frames_Cons$main_go$frames_Cons$worker, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker, main_main_go$frames_Cons$main_go$frames_Cons$worker1, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker1, main_main_go$frames_Cons$main_go$frames_Cons$worker2, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker2, main_main_go$frames_Cons$main_go$frames_Cons$worker3, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker3, main_main_go$frames_Cons$main_go$frames_Cons$worker4, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker4, main_main_go$frames_Cons$main_go$frames_Cons$worker5, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker5, main_main_go$frames_Cons$main_go$frames_Cons$worker6, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker6, main_main_go$frames_Cons$main_go$frames_Cons$worker7, main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker7, main_main_go$frames_Nil_main_go_getPast$getPast_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker;
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$ = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$ = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(fv_score, fv_nextThrows);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(fv_score, fv_nextThrows);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Nil_main_go_getPast$getPast_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker = function main_main_go$frames_Nil_main_go_getPast$getPast_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  return fv_scrut(fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, tup3_1)
};
main_main_go$frames_Nil_main_go_getPast$getPast$main_go_getPast$getPast = function main_main_go$frames_Nil_main_go_getPast$getPast$main_go_getPast$getPast(bw, fw) {
  return (eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17) => {
    return main_main_go$frames_Nil_main_go_getPast$getPast_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker(fw, bw, fw, eta$0$6, eta$0$7, eta$0$8, eta$0$9, eta$0$10, eta$0$11, eta$0$12, eta$0$13, eta$0$14, eta$0$15, eta$0$16, eta$0$17)
  }
};
main_main_go$frames_Nil$main_go$frames_Nil = function main_main_go$frames_Nil$main_go$frames_Nil() {
  return (fv_tardis, fv_finalFrameScore, fv_lambda$here) => {
    fv_lambda$here = main_main_go$frames_Nil_main_go_lambda$$lambda$$main_go_lambda$$lambda$(fv_tardis, fv_finalFrameScore);
    return main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind(main_main_go$frames_Nil_main_go_getPast$getPast$main_go_getPast$getPast)(fv_lambda$here)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda1(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$1(fv_score, fv_nextThrows);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$1(fv_score, fv_nextThrows);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker7 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$ = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker7(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker7(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker7 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$ = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$ = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$ = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$ = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda(score, nextThrows, firstThrow)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(Spare_firstThrow) {
  return (fv_score, fv_nextThrows, fv_lambda$here) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$(fv_score, fv_nextThrows, Spare_firstThrow);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$(fv_score, fv_nextThrows, Spare_firstThrow);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker6 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$1(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$1(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker6(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons1 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker6(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker6 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$1(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$1(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws11 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws11(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score11 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score11(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$_lambda$lambda = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$_lambda$lambda(score, secondThrow, firstThrow) {
  let tmp, lambda$here;
  tmp = globalThis.Object.freeze([
    firstThrow,
    secondThrow
  ]);
  lambda$here = lambda$(score, secondThrow, firstThrow);
  return globalThis.Object.freeze([
    lambda$here,
    tmp
  ])
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$$lambda$ = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$$lambda$(score, secondThrow, firstThrow) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$_lambda$lambda(score, secondThrow, firstThrow)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(Frame_firstThrow, Frame_secondThrow) {
  return (fv_score, fv_lambda$here) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$$lambda$(fv_score, Frame_secondThrow, Frame_firstThrow);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame_lambda$$lambda$(fv_score, Frame_secondThrow, Frame_firstThrow);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker5 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$2(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$2(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(arg$Cons$0$, nextThrows, undefined)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$2 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker5(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons2 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker5(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker5 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$2(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$2(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws12 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$2 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws12(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score12 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$2 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score12(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda2 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$2 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda2(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda2 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$2(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$2 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda2(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike2 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$2(fv_score, fv_nextThrows);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$2(fv_score, fv_nextThrows);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker4 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$3(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$3(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_13, inlinedVal2, f1, score, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(arg$Cons$0$, undefined)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$3 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker4(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons3 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker4(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker4 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$3(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$3(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws13 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$3 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws13(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score13 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$3 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score13(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda3(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$3(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda3(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$3(fv_score, fv_nextThrows);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$3(fv_score, fv_nextThrows);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker3 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$4(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$4(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$4 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker3(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons4 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker3(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker3 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$4(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$4(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws14 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$4 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws14(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score14 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$4 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score14(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda4 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$4 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda4(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda4 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$4(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$4 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda4(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike4 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike() {
  return (fv_lambda$here, fv_score, fv_nextThrows) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$4(fv_score, fv_nextThrows);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$4(fv_score, fv_nextThrows);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker2 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$5(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$5(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$5 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker2(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons5 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker2(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker2 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$5(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$5(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws15 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$5 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws15(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score15 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$5 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score15(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    return tmp1 + element0$
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$_lambda$lambda1(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda(score, nextThrows, firstThrow) {
  let tmp, tmp1, lambda$here;
  tmp = 10 - firstThrow;
  tmp1 = globalThis.Object.freeze([
    firstThrow,
    tmp
  ]);
  lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda_lambda$$lambda$1(score, nextThrows);
  return globalThis.Object.freeze([
    lambda$here,
    tmp1
  ])
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$(score, nextThrows, firstThrow) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$_lambda$lambda1(score, nextThrows, firstThrow)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare1 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(Spare_firstThrow) {
  return (fv_score, fv_nextThrows, fv_lambda$here) => {
    return (eta$0$0, eta$0$1) => {
      return (eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8) => {
        let tup3_0;
        fv_lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$1(fv_score, fv_nextThrows, Spare_firstThrow);
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare_lambda$$lambda$1(fv_score, fv_nextThrows, Spare_firstThrow);
        return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, eta$0$0, eta$0$1, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8)
      }
    }
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker1 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$6(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$6(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(undefined, arg$Cons$0$, nextThrows)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$6 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker1(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons6 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker1(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker1 = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$6(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$6(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws16 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$6 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws16(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score16 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$6 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score16(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1) {
  let r, tup3_1, r1, tup3_11, inlinedVal, tardis3, score1, arg$Cons$0$, tmp;
  r = new tardis1.Ref.class(tardis1.None);
  tup3_1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$7(p);
  r1 = new tardis1.Ref.class(tardis1.None);
  tup3_11 = getBw1$(tardis1, r1);
  tardis3 = tardis2;
  score1 = main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$7(p);
  if (eta$0$1 instanceof tardis3.Cons.class) {
    let r2, tup3_12, inlinedVal1, r3, tup3_0, tup3_13, inlinedVal2, f1, score, nextThrows, eta$0$01, eta$0$11, eta$1$0, eta$1$1, eta$1$2, eta$1$3, eta$1$4, eta$1$5, eta$1$6, eta$1$7, eta$1$8, inlinedVal3;
    arg$Cons$0$ = eta$0$1.head;
    tmp = tardis2.Cons(score1, eta$0$1);
    r2 = new tardis1.Ref.class(tardis1.None);
    tup3_12 = getBw1$(tardis1, r2);
    r3 = new tardis1.Ref.class(tardis1.None);
    tup3_0 = getBw1$(tardis1, r3);
    tup3_13 = getBw1$(tardis1, r3);
    f1 = f;
    score = arg$Cons$0$;
    nextThrows = getBw1$(tardis1, r3);
    eta$0$01 = eta$0$0;
    eta$0$11 = tmp;
    eta$1$0 = undefined;
    eta$1$1 = undefined;
    eta$1$2 = undefined;
    eta$1$3 = undefined;
    eta$1$4 = undefined;
    eta$1$5 = undefined;
    eta$1$6 = undefined;
    eta$1$7 = r3;
    eta$1$8 = getBw1$(tardis1, r3);
    inlinedVal3 = f(arg$Cons$0$, nextThrows, undefined)(eta$0$0, tmp)(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r3, eta$1$8);
    inlinedVal2 = inlinedVal3;
    inlinedVal1 = inlinedVal3(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_12);
    inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1, tup3_11);
    return inlinedVal(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r, tup3_1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$7 = function main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, f) {
  return (p) => {
    return (eta$0$0, eta$0$1) => {
      return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda$worker(tardis2, f, p, eta$0$0, eta$0$1)
    }
  }
};
main_main_go$frames_Cons$main_go$frames_Cons7 = function main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail) {
  return (fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) => {
    return main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore)
  }
};
main_main_go$frames_Cons$main_go$frames_Cons$worker = function main_main_go$frames_Cons$main_go$frames_Cons$worker(Cons_head, Cons_tail, fv_lambda$here, fv_tardis, fv_tmp, fv_lambda$here1, fv_finalFrameScore) {
  fv_lambda$here = main_main_go$frames_Cons_main_go_lambda$$lambda$$main_go_lambda$$lambda$7(fv_tardis, Cons_head);
  fv_tmp = main_go_fix$fix(fv_lambda$here);
  fv_lambda$here1 = main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$7(fv_tardis, fv_finalFrameScore, Cons_tail);
  return main_go_bind$bind(fv_tmp)(fv_lambda$here1)
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws17 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$7 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$$throws1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_throws1$_throws1$throws17(p)
  }
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score17 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$7 = function main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$$score1$(p) {
  return () => {
    return main_main_go$frames_Cons_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_score1$_score1$score17(p)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3(tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker(tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3$worker(tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = undefined;
  fv_element1$ = undefined;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = undefined;
  fv_x = undefined;
  fv_callPrefix = runtime.safeCall(fv_f(undefined));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      undefined,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3(tup3_0, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3$worker(tup3_0, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3$worker = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3$worker(tup3_0, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = undefined;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = undefined;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3_main_go_bind$scrut_tup3$main_go_bind$scrut_tup3(tup3_2)
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3$worker = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3_main_go_fix$scrut_tup3$main_go_fix$scrut_tup3(tup3_0, tup3_2)
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda5 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, tmp2, tmp3, tmp4, element1$, element0$;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + 10;
  tmp2 = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp2) && tmp2.length === 2) {
    element0$ = runtime.Tuple.get(tmp2, 0);
    runtime.Tuple.get(tmp2, 1);
    tmp3 = tmp1 + element0$;
    tmp4 = runtime.safeCall(nextThrows());
    if (runtime.Tuple.isArrayLike(tmp4) && tmp4.length === 2) {
      runtime.Tuple.get(tmp4, 0);
      element1$ = runtime.Tuple.get(tmp4, 1);
      return tmp3 + element1$
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$5 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$(score, nextThrows) {
  return () => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$_lambda$lambda5(score, nextThrows)
  }
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda5 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda(score, nextThrows) {
  let tmp, tmp1, lambda$here, element0$;
  tmp = runtime.safeCall(nextThrows());
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    tmp1 = globalThis.Object.freeze([
      10,
      element0$
    ]);
    lambda$here = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda_lambda$$lambda$5(score, nextThrows);
    return globalThis.Object.freeze([
      lambda$here,
      tmp1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$5 = function main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$(score, nextThrows) {
  return (_) => {
    return main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$_lambda$lambda5(score, nextThrows)
  }
};
main_score1$_score1$score1 = function main_score1$_score1$score1(p) {
  let tmp, element0$;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    element0$ = runtime.Tuple.get(tmp, 0);
    runtime.Tuple.get(tmp, 1);
    return runtime.safeCall(element0$())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_score1$$score1$ = function main_score1$$score1$(p) {
  return () => {
    return main_score1$_score1$score1(p)
  }
};
main_throws1$_throws1$throws1 = function main_throws1$_throws1$throws1(p) {
  let tmp;
  tmp = runtime.safeCall(p(runtime.Unit));
  if (runtime.Tuple.isArrayLike(tmp) && tmp.length === 2) {
    runtime.Tuple.get(tmp, 0);
    return runtime.Tuple.get(tmp, 1)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_throws1$$throws1$ = function main_throws1$$throws1$(p) {
  return () => {
    return main_throws1$_throws1$throws1(p)
  }
};
main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind = function main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind$worker = function main_main_go$frames_Nil_main_go_bind$bind$main_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$ = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(tardis2, finalFrameScore, undefined)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$1 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$2 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$3 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$4 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$5 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$6 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$7 = function main_main_go$frames_Cons_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$lambda$$main_go$lambda$ = function main_main_go$lambda$$main_go$lambda$(tardis2, finalFrameScore, fs) {
  return (_) => {
    return fs(undefined, tardis2, undefined, undefined, finalFrameScore)
  }
};
main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_main_go_lambda$_lambda_pure$pure$main_go_lambda$_lambda_pure$pure = function main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_main_go_lambda$_lambda_pure$pure$main_go_lambda$_lambda_pure$pure(a) {
  return (bw, fw) => {
    return (eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8) => {
      return main_go_bind$scrut_tup3$worker(a, bw, fw, eta$0$0, eta$0$1, eta$0$2, eta$0$3, eta$0$4, eta$0$5, eta$0$6, eta$0$7, eta$0$8)
    }
  }
};
main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda = function main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores) {
  let arg$Cons$0$, tmp, lambda$here;
  if (scores instanceof tardis2.Cons.class) {
    arg$Cons$0$ = scores.head;
    lambda$here = lambda$1(finalFrameScore, arg$Cons$0$);
    tmp = tardis2.Cons(lambda$here, scores);
    return main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda_main_go_lambda$_lambda_pure$pure$main_go_lambda$_lambda_pure$pure(tmp)
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_main_go$frames_Nil_main_go_lambda$$lambda$$main_go_lambda$$lambda$ = function main_main_go$frames_Nil_main_go_lambda$$lambda$$main_go_lambda$$lambda$(tardis2, finalFrameScore) {
  return (scores) => {
    return main_main_go$frames_Nil_main_go_lambda$$lambda$_main_go_lambda$_lambda$lambda$main_go_lambda$_lambda$lambda(tardis2, finalFrameScore, scores)
  }
};
main_initialBw$initialBw = function main_initialBw$initialBw(lastFrame) {
  return () => {
    return main_initialBw$initialBw$worker(lastFrame)
  }
};
main_initialBw$initialBw$worker = function main_initialBw$initialBw$worker(lastFrame) {
  let arg$LStrike$0$;
  if (lastFrame instanceof tardis1.LStrike.class) {
    arg$LStrike$0$ = lastFrame.bonus1;
    return globalThis.Object.freeze([
      10,
      arg$LStrike$0$
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_fix$fix = function main_go_fix$fix(f) {
  return (bw, fw) => {
    return main_go_fix$fix$worker(f, bw, fw)
  }
};
main_go_fix$fix$worker = function main_go_fix$fix$worker(f, bw, fw) {
  let r, scrut, callPrefix, get$here;
  r = new tardis1.Ref.class(tardis1.None);
  get$here = get$(tardis1, r);
  callPrefix = runtime.safeCall(f(get$here));
  scrut = runtime.safeCall(callPrefix(bw, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_go_bind$bind = function main_go_bind$bind(m) {
  return (f) => {
    return (bw, fw) => {
      return main_go_bind$bind$worker(m, f, bw, fw)
    }
  }
};
main_go_bind$bind$worker = function main_go_bind$bind$worker(m, f, bw, fw) {
  let r, scrut, getBw1$here;
  r = new tardis1.Ref.class(tardis1.None);
  getBw1$here = getBw1$(tardis1, r);
  scrut = runtime.safeCall(m(getBw1$here, fw));
  return scrut(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r)
};
main_go_bind$scrut_tup3 = function main_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) => {
    return main_go_bind$scrut_tup3$worker1(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r)
  }
};
main_go_bind$scrut_tup3$worker1 = function main_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw2, fv_x, fv_callPrefix, fv_f, fv_scrut, fv_bw, fv_element0$1, fv_element1$1, fv_element2$1, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw2 = tup3_1;
  fv_x = tup3_0;
  fv_callPrefix = runtime.safeCall(fv_f(tup3_0));
  fv_scrut = runtime.safeCall(fv_callPrefix(fv_bw, tup3_2));
  if (runtime.Tuple.isArrayLike(fv_scrut) && fv_scrut.length === 3) {
    fv_element0$1 = runtime.Tuple.get(fv_scrut, 0);
    fv_element1$1 = runtime.Tuple.get(fv_scrut, 1);
    fv_element2$1 = runtime.Tuple.get(fv_scrut, 2);
    fv_fw2 = fv_element2$1;
    fv_bw1 = fv_element1$1;
    fv_x1 = fv_element0$1;
    fv_tmp = tardis1.Some(fv_element1$1);
    fv_r.value = fv_tmp;
    return globalThis.Object.freeze([
      fv_element0$1,
      tup3_1,
      fv_element2$1
    ])
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3 = function main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker = function main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_go_lambda$_lambda_bind$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_go_lambda$_lambda_bind$scrut_tup3 = function main_go_lambda$_lambda_bind$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) => {
    return main_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2)
  }
};
main_go_lambda$_lambda_bind$scrut_tup3$worker = function main_go_lambda$_lambda_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return main_go_fix$scrut_tup3(tup3_0, fv_bw2, tup3_2)
};
main_go_fix$scrut_tup3 = function main_go_fix$scrut_tup3(tup3_0, tup3_1, tup3_2) {
  return (fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) => {
    return main_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r)
  }
};
main_go_fix$scrut_tup3$worker = function main_go_fix$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw1, fv_bw1, fv_x, fv_tmp, fv_r) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw1 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x = tup3_0;
  fv_tmp = tardis1.Some(tup3_0);
  fv_r.value = fv_tmp;
  return main_go_bind$scrut_tup3(tup3_0, tup3_1, tup3_2)
};
main_go_bind$scrut_tup3$worker = function main_go_bind$scrut_tup3$worker(tup3_0, tup3_1, tup3_2, fv_element0$, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp, fv_r, fv_bw2) {
  fv_element0$ = tup3_0;
  fv_element1$ = tup3_1;
  fv_element2$ = tup3_2;
  fv_fw2 = tup3_2;
  fv_bw1 = tup3_1;
  fv_x1 = tup3_0;
  fv_tmp = tardis1.Some(tup3_1);
  fv_r.value = fv_tmp;
  return globalThis.Object.freeze([
    tup3_0,
    fv_bw2,
    tup3_2
  ])
};
lambda$1 = (undefined, function (finalFrameScore, score) {
  return () => {
    let tmp;
    tmp = runtime.safeCall(score());
    return finalFrameScore + tmp
  }
});
lambda$ = (undefined, function (score, secondThrow, firstThrow) {
  return () => {
    return lambda(score, secondThrow, firstThrow)
  }
});
lambda = (undefined, function (score, secondThrow, firstThrow) {
  let tmp, tmp1;
  tmp = runtime.safeCall(score());
  tmp1 = tmp + firstThrow;
  return tmp1 + secondThrow
});
lambda1 = (undefined, function () {
  return 0
});
lambda2 = (undefined, function (th) {
  return runtime.safeCall(th())
});
get$ = function get$(tardis2, r) {
  return (a) => {
    return get(tardis2, r, a)
  }
};
get = function get(tardis2, r, a) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value(a))
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
getBw1$ = function getBw1$(tardis2, r) {
  return () => {
    return getBw1(tardis2, r)
  }
};
getBw1 = function getBw1(tardis2, r) {
  let scrut;
  scrut = r.value;
  if (scrut instanceof tardis2.Some.class) {
    return runtime.safeCall(scrut.value())
  }
  throw globalThis.Object.freeze(new globalThis.Error("match error"));
};
(class tardis {
  static {
    tardis1 = this
  }
  static {
    tardis.Cons = function Cons(head, tail) {
      return globalThis.Object.freeze(new Cons.class(head, tail));
    };
    (class Cons {
      static {
        tardis.Cons.class = this
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
        tardis.Nil = this;
        Object.defineProperty(this, "class", {
          value: Nil
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nil"];
    });
    tardis.Some = function Some(value) {
      return globalThis.Object.freeze(new Some.class(value));
    };
    (class Some {
      static {
        tardis.Some.class = this
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
        tardis.None = this;
        Object.defineProperty(this, "class", {
          value: None
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "None"];
    });
    tardis.Ref = function Ref(value) {
      return globalThis.Object.freeze(new Ref.class(value));
    };
    (class Ref {
      static {
        tardis.Ref.class = this
      }
      constructor(value) {
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Ref", ["value"]];
    });
    (class Strike {
      static {
        new this
      }
      constructor() {
        tardis.Strike = this;
        Object.defineProperty(this, "class", {
          value: Strike
        });
        globalThis.Object.freeze(this);
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Strike"];
    });
    tardis.Spare = function Spare(firstThrow) {
      return globalThis.Object.freeze(new Spare.class(firstThrow));
    };
    (class Spare {
      static {
        tardis.Spare.class = this
      }
      constructor(firstThrow) {
        this.firstThrow = firstThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Spare", ["firstThrow"]];
    });
    tardis.Frame = function Frame(firstThrow, secondThrow) {
      return globalThis.Object.freeze(new Frame.class(firstThrow, secondThrow));
    };
    (class Frame {
      static {
        tardis.Frame.class = this
      }
      constructor(firstThrow, secondThrow) {
        this.firstThrow = firstThrow;
        this.secondThrow = secondThrow;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Frame", ["firstThrow", "secondThrow"]];
    });
    tardis.LStrike = function LStrike(bonus1, bonus2) {
      return globalThis.Object.freeze(new LStrike.class(bonus1, bonus2));
    };
    (class LStrike {
      static {
        tardis.LStrike.class = this
      }
      constructor(bonus1, bonus2) {
        this.bonus1 = bonus1;
        this.bonus2 = bonus2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LStrike", ["bonus1", "bonus2"]];
    });
    tardis.LSpare = function LSpare(bonus1, throw1) {
      return globalThis.Object.freeze(new LSpare.class(bonus1, throw1));
    };
    (class LSpare {
      static {
        tardis.LSpare.class = this
      }
      constructor(bonus1, throw1) {
        this.bonus1 = bonus1;
        this.throw1 = throw1;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LSpare", ["bonus1", "throw1"]];
    });
    tardis.LFrame = function LFrame(throw1, throw2) {
      return globalThis.Object.freeze(new LFrame.class(throw1, throw2));
    };
    (class LFrame {
      static {
        tardis.LFrame.class = this
      }
      constructor(throw1, throw2) {
        this.throw1 = throw1;
        this.throw2 = throw2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LFrame", ["throw1", "throw2"]];
    });
    tardis.Game = function Game(frames, lastFrame) {
      return globalThis.Object.freeze(new Game.class(frames, lastFrame));
    };
    (class Game {
      static {
        tardis.Game.class = this
      }
      constructor(frames, lastFrame) {
        this.frames = frames;
        this.lastFrame = lastFrame;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Game", ["frames", "lastFrame"]];
    });
  }
  static #map$tailrec(f, l) {
    let arg$Cons$0$, arg$Cons$1$, tmp, tmp1;
    if (l instanceof tardis.Nil.class) {
      return tardis.Nil
    } else if (l instanceof tardis.Cons.class) {
      arg$Cons$0$ = l.head;
      arg$Cons$1$ = l.tail;
      tmp = runtime.safeCall(f(arg$Cons$0$));
      tmp1 = tardis.#map$tailrec(f, arg$Cons$1$);
      return tardis.Cons(tmp, tmp1)
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  static main() {
    let tmp, Cons_head, Cons_tail, Cons_head1, Cons_tail1, Cons_head2, Cons_tail2, Cons_head3, Cons_tail3, Cons_head4, Cons_tail4, Cons_head5, Cons_tail5, Cons_head6, Cons_tail6, Cons_head7, Cons_tail7, fv_initialFw, fv_element0$, Cons_tail8, f, bw, inlinedVal, r, inlinedVal1, r1, p, r2, tup3_1, inlinedVal2, inlinedVal3, arg$LStrike$0$, arg$LStrike$1$, tmp1;
    Cons_head = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike();
    Cons_tail = main_main_go$frames_Nil$main_go$frames_Nil();
    Cons_head1 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike1();
    Cons_tail1 = main_main_go$frames_Cons$main_go$frames_Cons(Cons_head, Cons_tail);
    Cons_head2 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare(7);
    Cons_tail2 = main_main_go$frames_Cons$main_go$frames_Cons1(Cons_head1, Cons_tail1);
    Cons_head3 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Frame(8, 1);
    Cons_tail3 = main_main_go$frames_Cons$main_go$frames_Cons2(Cons_head2, Cons_tail2);
    Cons_head4 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike2();
    Cons_tail4 = main_main_go$frames_Cons$main_go$frames_Cons3(Cons_head3, Cons_tail3);
    Cons_head5 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike3();
    Cons_tail5 = main_main_go$frames_Cons$main_go$frames_Cons4(Cons_head4, Cons_tail4);
    Cons_head6 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike4();
    Cons_tail6 = main_main_go$frames_Cons$main_go$frames_Cons5(Cons_head5, Cons_tail5);
    Cons_head7 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare$main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Spare1(9);
    Cons_tail7 = main_main_go$frames_Cons$main_go$frames_Cons6(Cons_head6, Cons_tail6);
    tmp = tardis.LStrike(10, 10);
    fv_initialFw = undefined;
    fv_element0$ = undefined;
    if (tmp instanceof tardis1.LStrike.class) {
      let r3, tup3_11, inlinedVal4, tardis2, score1, arg$Cons$0$, tmp2;
      arg$LStrike$0$ = tmp.bonus1;
      arg$LStrike$1$ = tmp.bonus2;
      tmp1 = 10 + arg$LStrike$0$;
      inlinedVal3 = tmp1 + arg$LStrike$1$;
      fv_initialFw = tardis1.Cons(lambda1, tardis1.Nil);
      Cons_tail8 = main_main_go$frames_Cons$main_go$frames_Cons7(Cons_head7, Cons_tail7);
      f = main_main_go$lambda$$main_go$lambda$(tardis1, inlinedVal3, Cons_tail8);
      bw = main_initialBw$initialBw(tmp);
      r = new tardis1.Ref.class(tardis1.None);
      r1 = new tardis1.Ref.class(tardis1.None);
      p = get$(tardis1, r1);
      r2 = new tardis1.Ref.class(tardis1.None);
      tup3_1 = main_throws1$$throws1$(p);
      r3 = new tardis1.Ref.class(tardis1.None);
      tup3_11 = getBw1$(tardis1, r3);
      tardis2 = tardis1;
      score1 = main_score1$$score1$(p);
      if (fv_initialFw instanceof tardis2.Cons.class) {
        let r4, r5, fv_nextThrows, tup3_12, fv_tmp, tup3_0, tup3_13, fv_bw2, inlinedVal5, tup3_01, tup3_14, tup3_2, fv_tmp1, fv_r, fv_bw21, inlinedVal6, tup3_02, tup3_15, tup3_21, fv_element0$1, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp2, fv_r1, fv_bw22, inlinedVal7;
        arg$Cons$0$ = fv_initialFw.head;
        tmp2 = tardis1.Cons(score1, fv_initialFw);
        r4 = new tardis1.Ref.class(tardis1.None);
        r5 = new tardis1.Ref.class(tardis1.None);
        fv_nextThrows = getBw1$(tardis1, r5);
        tup3_12 = getBw1$(tardis1, r);
        fv_tmp = undefined;
        fv_tmp = tardis1.Some(tup3_12);
        r5.value = fv_tmp;
        tup3_0 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$5(arg$Cons$0$, fv_nextThrows);
        tup3_13 = getBw1$(tardis1, r5);
        fv_bw2 = getBw1$(tardis1, r4);
        tup3_01 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_lambda$$lambda$5(arg$Cons$0$, fv_nextThrows);
        tup3_14 = getBw1$(tardis1, r5);
        tup3_2 = tmp2;
        fv_tmp1 = undefined;
        fv_r = r4;
        fv_bw21 = getBw1$(tardis1, r4);
        fv_tmp1 = tardis1.Some(tup3_14);
        r4.value = fv_tmp1;
        inlinedVal6 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3(tup3_01, fv_bw21, tmp2);
        inlinedVal5 = inlinedVal6;
        tup3_02 = tup3_01;
        tup3_15 = fv_bw21;
        tup3_21 = tmp2;
        fv_element0$1 = undefined;
        fv_element1$ = undefined;
        fv_element2$ = undefined;
        fv_fw2 = undefined;
        fv_bw1 = undefined;
        fv_x1 = undefined;
        fv_tmp2 = undefined;
        fv_r1 = r3;
        fv_bw22 = tup3_11;
        inlinedLbl: {
          inlinedVal7 = main_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda$f_Strike_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_pure$pure_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_lambda$_lambda_bind$scrut_tup3_main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$main_go_lambda$_lambda_lambda$_lambda_bind$scrut_tup3$worker(tup3_02, tup3_15, tup3_21, fv_element0$1, fv_element1$, fv_element2$, fv_fw2, fv_bw1, fv_x1, fv_tmp2, fv_r1, fv_bw22);
          break inlinedLbl;
        }
        inlinedVal4 = inlinedVal7;
        inlinedVal2 = inlinedVal4(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r2, tup3_1);
        inlinedVal1 = inlinedVal2(undefined, undefined, undefined, undefined, undefined, undefined, undefined, r1);
        inlinedVal = inlinedVal1(undefined, undefined, undefined, undefined, undefined, undefined, undefined, f, undefined, bw, undefined, undefined, undefined, undefined, undefined, undefined, undefined, r);
        if (runtime.Tuple.isArrayLike(inlinedVal) && inlinedVal.length === 3) {
          fv_element0$ = runtime.Tuple.get(inlinedVal, 0);
          runtime.Tuple.get(inlinedVal, 1);
          runtime.Tuple.get(inlinedVal, 2);
          return tardis1.#map$tailrec(lambda2, fv_element0$)
        }
        throw globalThis.Object.freeze(new globalThis.Error("match error"));
      }
      throw globalThis.Object.freeze(new globalThis.Error("match error"));
    }
    throw globalThis.Object.freeze(new globalThis.Error("match error"));
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "tardis"];
});
export default tardis1;
