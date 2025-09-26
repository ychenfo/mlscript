const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let award, atleast, awards1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, award$, lambda$1, atleast$, lambda$2, findallawards_inst_0_1_tsni, lambda_inst_0_1_2_tsni, findawards_inst_0_1_2_3_tsni, awards_inst_0_1_2_3_4_tsni, perms_inst_0_1_2_3_4_5_tsni, map_inst_0_1_2_3_4_5_6_tsni, award$_inst_0_1_2_3_4_7_tsni, sort_inst_0_1_2_3_4_7_8_tsni, qsort_inst_0_1_2_3_4_7_8_9_tsni, qpart_inst_0_1_2_3_4_7_8_9_tsni, rqsort_inst_0_1_2_3_4_7_8_9_tsni, rqpart_inst_0_1_2_3_4_7_8_9_tsni, award$_inst_0_1_2_3_4_10_tsni, sort_inst_0_1_2_3_4_10_8_tsni, qsort_inst_0_1_2_3_4_10_8_9_tsni, qpart_inst_0_1_2_3_4_10_8_9_tsni, rqsort_inst_0_1_2_3_4_10_8_9_tsni, rqpart_inst_0_1_2_3_4_10_8_9_tsni, award$_inst_0_1_2_3_4_11_tsni, sort_inst_0_1_2_3_4_11_8_tsni, qsort_inst_0_1_2_3_4_11_8_9_tsni, qpart_inst_0_1_2_3_4_11_8_9_tsni, rqsort_inst_0_1_2_3_4_11_8_9_tsni, rqpart_inst_0_1_2_3_4_11_8_9_tsni, map_inst_0_1_2_3_4_10_12_tsni, map_inst_0_1_2_3_4_7_12_tsni, append_inst_0_1_2_3_4_13_tsni, lambda_inst_0_1_2_3_4_10_14_tsni, lambda$_inst_0_1_2_3_4_10_14_15_tsni, map_inst_0_1_2_3_4_11_12_tsni, lambda_inst_0_1_2_3_4_11_14_tsni, lambda$_inst_0_1_2_3_4_11_14_15_tsni, append_inst_0_1_2_3_4_16_tsni, lambda_inst_0_1_2_3_4_7_14_tsni, lambda$_inst_0_1_2_3_4_7_14_15_tsni, findawards_inst_17_3_tsni, awards_inst_17_3_4_tsni, perms_inst_17_3_4_5_tsni, map_inst_17_3_4_5_6_tsni, award$_inst_17_3_4_7_tsni, sort_inst_17_3_4_7_8_tsni, qsort_inst_17_3_4_7_8_9_tsni, qpart_inst_17_3_4_7_8_9_tsni, rqsort_inst_17_3_4_7_8_9_tsni, rqpart_inst_17_3_4_7_8_9_tsni, award$_inst_17_3_4_10_tsni, sort_inst_17_3_4_10_8_tsni, qsort_inst_17_3_4_10_8_9_tsni, qpart_inst_17_3_4_10_8_9_tsni, rqsort_inst_17_3_4_10_8_9_tsni, rqpart_inst_17_3_4_10_8_9_tsni, award$_inst_17_3_4_11_tsni, sort_inst_17_3_4_11_8_tsni, qsort_inst_17_3_4_11_8_9_tsni, qpart_inst_17_3_4_11_8_9_tsni, rqsort_inst_17_3_4_11_8_9_tsni, rqpart_inst_17_3_4_11_8_9_tsni, map_inst_17_3_4_10_12_tsni, map_inst_17_3_4_7_12_tsni, append_inst_17_3_4_13_tsni, lambda_inst_17_3_4_10_14_tsni, lambda$_inst_17_3_4_10_14_15_tsni, map_inst_17_3_4_11_12_tsni, lambda_inst_17_3_4_11_14_tsni, lambda$_inst_17_3_4_11_14_15_tsni, append_inst_17_3_4_16_tsni, lambda_inst_17_3_4_7_14_tsni, lambda$_inst_17_3_4_7_14_15_tsni, sort_inst_18_8_tsni, qsort_inst_18_8_9_tsni, qpart_inst_18_8_9_tsni, rqsort_inst_18_8_9_tsni, rqpart_inst_18_8_9_tsni, award$_inst_19_20_tsni, sort_inst_19_20_8_tsni, qsort_inst_19_20_8_9_tsni, qpart_inst_19_20_8_9_tsni, rqsort_inst_19_20_8_9_tsni, rqpart_inst_19_20_8_9_tsni, map_inst_21_6_tsni, perms_inst_22_5_tsni, map_inst_22_5_6_tsni, award$_inst_22_7_tsni, sort_inst_22_7_8_tsni, qsort_inst_22_7_8_9_tsni, qpart_inst_22_7_8_9_tsni, rqsort_inst_22_7_8_9_tsni, rqpart_inst_22_7_8_9_tsni, award$_inst_22_10_tsni, sort_inst_22_10_8_tsni, qsort_inst_22_10_8_9_tsni, qpart_inst_22_10_8_9_tsni, rqsort_inst_22_10_8_9_tsni, rqpart_inst_22_10_8_9_tsni, award$_inst_22_11_tsni, sort_inst_22_11_8_tsni, qsort_inst_22_11_8_9_tsni, qpart_inst_22_11_8_9_tsni, rqsort_inst_22_11_8_9_tsni, rqpart_inst_22_11_8_9_tsni, map_inst_22_10_12_tsni, map_inst_22_7_12_tsni, awards_inst_23_4_tsni, award$_inst_23_4_11_tsni, sort_inst_23_4_11_8_tsni, qsort_inst_23_4_11_8_9_tsni, qpart_inst_23_4_11_8_9_tsni, rqsort_inst_23_4_11_8_9_tsni, rqpart_inst_23_4_11_8_9_tsni, award$_inst_23_4_10_tsni, sort_inst_23_4_10_8_tsni, qsort_inst_23_4_10_8_9_tsni, qpart_inst_23_4_10_8_9_tsni, rqsort_inst_23_4_10_8_9_tsni, rqpart_inst_23_4_10_8_9_tsni, map_inst_23_4_10_12_tsni, award$_inst_23_4_7_tsni, sort_inst_23_4_7_8_tsni, qsort_inst_23_4_7_8_9_tsni, qpart_inst_23_4_7_8_9_tsni, rqsort_inst_23_4_7_8_9_tsni, rqpart_inst_23_4_7_8_9_tsni, map_inst_23_4_7_12_tsni, perms_inst_23_4_5_tsni, map_inst_23_4_5_6_tsni, map_inst_23_4_11_12_tsni, append_inst_23_4_13_tsni, append_inst_23_4_16_tsni, lambda_inst_23_4_7_14_tsni, lambda$_inst_23_4_7_14_15_tsni, lambda_inst_23_4_10_14_tsni, lambda$_inst_23_4_10_14_15_tsni, lambda_inst_23_4_11_14_tsni, lambda$_inst_23_4_11_14_15_tsni, lambda_inst_24_2_tsni, findawards_inst_24_2_3_tsni, awards_inst_24_2_3_4_tsni, award$_inst_24_2_3_4_11_tsni, sort_inst_24_2_3_4_11_8_tsni, qsort_inst_24_2_3_4_11_8_9_tsni, qpart_inst_24_2_3_4_11_8_9_tsni, rqsort_inst_24_2_3_4_11_8_9_tsni, rqpart_inst_24_2_3_4_11_8_9_tsni, award$_inst_24_2_3_4_10_tsni, sort_inst_24_2_3_4_10_8_tsni, qsort_inst_24_2_3_4_10_8_9_tsni, qpart_inst_24_2_3_4_10_8_9_tsni, rqsort_inst_24_2_3_4_10_8_9_tsni, rqpart_inst_24_2_3_4_10_8_9_tsni, map_inst_24_2_3_4_10_12_tsni, award$_inst_24_2_3_4_7_tsni, sort_inst_24_2_3_4_7_8_tsni, qsort_inst_24_2_3_4_7_8_9_tsni, qpart_inst_24_2_3_4_7_8_9_tsni, rqsort_inst_24_2_3_4_7_8_9_tsni, rqpart_inst_24_2_3_4_7_8_9_tsni, map_inst_24_2_3_4_7_12_tsni, perms_inst_24_2_3_4_5_tsni, map_inst_24_2_3_4_5_6_tsni, map_inst_24_2_3_4_11_12_tsni, append_inst_24_2_3_4_13_tsni, append_inst_24_2_3_4_16_tsni, lambda_inst_24_2_3_4_7_14_tsni, lambda$_inst_24_2_3_4_7_14_15_tsni, lambda_inst_24_2_3_4_10_14_tsni, lambda$_inst_24_2_3_4_10_14_15_tsni, lambda_inst_24_2_3_4_11_14_tsni, lambda$_inst_24_2_3_4_11_14_15_tsni, lambda_inst_25_26_tsni, findallawards_inst_25_26_1_tsni, lambda_inst_25_26_1_2_tsni, findawards_inst_25_26_1_2_3_tsni, awards_inst_25_26_1_2_3_4_tsni, award$_inst_25_26_1_2_3_4_11_tsni, sort_inst_25_26_1_2_3_4_11_8_tsni, qsort_inst_25_26_1_2_3_4_11_8_9_tsni, qpart_inst_25_26_1_2_3_4_11_8_9_tsni, rqsort_inst_25_26_1_2_3_4_11_8_9_tsni, rqpart_inst_25_26_1_2_3_4_11_8_9_tsni, award$_inst_25_26_1_2_3_4_10_tsni, sort_inst_25_26_1_2_3_4_10_8_tsni, qsort_inst_25_26_1_2_3_4_10_8_9_tsni, qpart_inst_25_26_1_2_3_4_10_8_9_tsni, rqsort_inst_25_26_1_2_3_4_10_8_9_tsni, rqpart_inst_25_26_1_2_3_4_10_8_9_tsni, map_inst_25_26_1_2_3_4_10_12_tsni, award$_inst_25_26_1_2_3_4_7_tsni, sort_inst_25_26_1_2_3_4_7_8_tsni, qsort_inst_25_26_1_2_3_4_7_8_9_tsni, qpart_inst_25_26_1_2_3_4_7_8_9_tsni, rqsort_inst_25_26_1_2_3_4_7_8_9_tsni, rqpart_inst_25_26_1_2_3_4_7_8_9_tsni, map_inst_25_26_1_2_3_4_7_12_tsni, perms_inst_25_26_1_2_3_4_5_tsni, map_inst_25_26_1_2_3_4_5_6_tsni, map_inst_25_26_1_2_3_4_11_12_tsni, append_inst_25_26_1_2_3_4_13_tsni, append_inst_25_26_1_2_3_4_16_tsni, lambda_inst_25_26_1_2_3_4_7_14_tsni, lambda$_inst_25_26_1_2_3_4_7_14_15_tsni, lambda_inst_25_26_1_2_3_4_10_14_tsni, lambda$_inst_25_26_1_2_3_4_10_14_15_tsni, lambda_inst_25_26_1_2_3_4_11_14_tsni, lambda$_inst_25_26_1_2_3_4_11_14_15_tsni, enumFromTo_inst_25_27_tsni, testAwards_nofib_inst_28_29_tsni, lambda_inst_28_29_26_tsni, findallawards_inst_28_29_26_1_tsni, lambda_inst_28_29_26_1_2_tsni, findawards_inst_28_29_26_1_2_3_tsni, awards_inst_28_29_26_1_2_3_4_tsni, perms_inst_28_29_26_1_2_3_4_5_tsni, map_inst_28_29_26_1_2_3_4_5_6_tsni, award$_inst_28_29_26_1_2_3_4_7_tsni, sort_inst_28_29_26_1_2_3_4_7_8_tsni, qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni, qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni, rqsort_inst_28_29_26_1_2_3_4_7_8_9_tsni, rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni, award$_inst_28_29_26_1_2_3_4_10_tsni, sort_inst_28_29_26_1_2_3_4_10_8_tsni, qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni, qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni, rqsort_inst_28_29_26_1_2_3_4_10_8_9_tsni, rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni, award$_inst_28_29_26_1_2_3_4_11_tsni, sort_inst_28_29_26_1_2_3_4_11_8_tsni, qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni, qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni, rqsort_inst_28_29_26_1_2_3_4_11_8_9_tsni, rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni, map_inst_28_29_26_1_2_3_4_10_12_tsni, map_inst_28_29_26_1_2_3_4_7_12_tsni, append_inst_28_29_26_1_2_3_4_13_tsni, lambda_inst_28_29_26_1_2_3_4_10_14_tsni, lambda$_inst_28_29_26_1_2_3_4_10_14_15_tsni, map_inst_28_29_26_1_2_3_4_11_12_tsni, lambda_inst_28_29_26_1_2_3_4_11_14_tsni, lambda$_inst_28_29_26_1_2_3_4_11_14_15_tsni, append_inst_28_29_26_1_2_3_4_16_tsni, lambda_inst_28_29_26_1_2_3_4_7_14_tsni, lambda$_inst_28_29_26_1_2_3_4_7_14_15_tsni, enumFromTo_inst_28_29_27_tsni, append_inst_0_1_2_3_4_5_30_tsni, append_inst_17_3_4_5_30_tsni, map_inst_18_12_tsni, map_inst_19_20_12_tsni, append_inst_21_30_tsni, append_inst_22_5_30_tsni, map_inst_22_11_12_tsni, append_inst_22_13_tsni, append_inst_22_16_tsni, append_inst_23_4_5_30_tsni, append_inst_24_2_3_4_5_30_tsni, append_inst_25_26_1_2_3_4_5_30_tsni, map_inst_25_31_tsni, append_inst_28_29_26_1_2_3_4_5_30_tsni, map_inst_28_29_31_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni, match_scrut_arm_Cons_inst_0_1_2_3_tsni, match_head__arm_Deforest_Arr_2_inst_0_1_2_3_tsni, match_xs_arm_Cons_inst_17_3_4_7_12_tsni, match_xs_arm_Cons_inst_17_3_4_10_12_tsni, match_xs_arm_Cons_inst_17_3_4_11_12_tsni, match_scrut_arm_Cons_inst_17_3_tsni, match_head__arm_Deforest_Arr_2_inst_17_3_tsni, match_xs_arm_Cons_inst_18_12_tsni, match_xs_arm_Cons_inst_19_20_12_tsni, match_xs_arm_Cons_inst_22_7_12_tsni, match_xs_arm_Cons_inst_22_10_12_tsni, match_xs_arm_Cons_inst_22_11_12_tsni, match_xs_arm_Cons_inst_23_4_11_12_tsni, match_xs_arm_Cons_inst_23_4_10_12_tsni, match_xs_arm_Cons_inst_23_4_7_12_tsni, match_scrut_arm_Cons_inst_23_tsni, match_head__arm_Deforest_Arr_2_inst_23_tsni, match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni, match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni, match_scrut_arm_Cons_inst_24_2_3_tsni, match_head__arm_Deforest_Arr_2_inst_24_2_3_tsni, match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni, match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni, match_scrut_arm_Cons_inst_25_26_1_2_3_tsni, match_head__arm_Deforest_Arr_2_inst_25_26_1_2_3_tsni, match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni, match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni, match_scrut_arm_Cons_inst_28_29_26_1_2_3_tsni, match_head__arm_Deforest_Arr_2_inst_28_29_26_1_2_3_tsni;
match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_0_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_0_1_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_0_1_2_3_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_0_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_0_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_0_1_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_0_1_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_0_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_0_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_0_1_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_0_1_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_scrut_arm_Cons_inst_0_1_2_3_tsni = (undefined, function (scores, _deforest_Cons_head_inst_0_1_2_3_tsni, _deforest_Cons_tail_inst_0_1_2_3_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_0_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_0_1_2_3_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_0_1_2_3_tsni, _deforest_Deforest_Arr_2_1_inst_0_1_2_3_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_1_2_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_1_2_3_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = findawards_inst_0_1_2_3_tsni(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_17_3_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_17_3_4_7_12_tsni, _deforest_Cons_tail_inst_17_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_17_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_17_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_17_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_17_3_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_17_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_17_3_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_17_3_4_10_12_tsni, _deforest_Cons_tail_inst_17_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_17_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_17_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_17_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_17_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_17_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_17_3_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_17_3_4_11_12_tsni, _deforest_Cons_tail_inst_17_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_17_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_17_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_17_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_17_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_scrut_arm_Cons_inst_17_3_tsni = (undefined, function (scores, _deforest_Cons_head_inst_17_3_tsni, _deforest_Cons_tail_inst_17_3_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_17_3_tsni;
  param1 = _deforest_Cons_tail_inst_17_3_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_17_3_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_17_3_tsni, _deforest_Deforest_Arr_2_1_inst_17_3_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_17_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_17_3_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = findawards_inst_17_3_tsni(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_18_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_18_12_tsni, _deforest_Cons_tail_inst_18_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_18_12_tsni;
  param1 = _deforest_Cons_tail_inst_18_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_18_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Cons_inst_19_20_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_19_20_12_tsni, _deforest_Cons_tail_inst_19_20_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_19_20_12_tsni;
  param1 = _deforest_Cons_tail_inst_19_20_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_19_20_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Cons_inst_22_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_22_7_12_tsni, _deforest_Cons_tail_inst_22_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_22_16_tsni(xs1, ys);
    return NofibPrelude.Cons(x1, tmp2)
  }
});
match_xs_arm_Cons_inst_22_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_22_10_12_tsni, _deforest_Cons_tail_inst_22_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_22_13_tsni(xs1, ys);
    return NofibPrelude.Cons(x1, tmp2)
  }
});
match_xs_arm_Cons_inst_22_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_22_11_12_tsni, _deforest_Cons_tail_inst_22_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_22_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_11_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Cons_inst_23_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_23_4_11_12_tsni, _deforest_Cons_tail_inst_23_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_23_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_23_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_23_4_10_12_tsni, _deforest_Cons_tail_inst_23_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_23_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_23_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_23_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_23_4_7_12_tsni, _deforest_Cons_tail_inst_23_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_23_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_23_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_scrut_arm_Cons_inst_23_tsni = (undefined, function (scores, _deforest_Cons_head_inst_23_tsni, _deforest_Cons_tail_inst_23_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_23_tsni;
  param1 = _deforest_Cons_tail_inst_23_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_23_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_23_tsni, _deforest_Deforest_Arr_2_1_inst_23_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = awards.findawards(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_24_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_24_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_24_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_24_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_24_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_24_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_24_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_24_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_24_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_24_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_24_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_24_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_24_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_24_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_24_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_24_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_24_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_24_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_24_2_3_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_24_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_scrut_arm_Cons_inst_24_2_3_tsni = (undefined, function (scores, _deforest_Cons_head_inst_24_2_3_tsni, _deforest_Cons_tail_inst_24_2_3_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_24_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_24_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_24_2_3_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_24_2_3_tsni, _deforest_Deforest_Arr_2_1_inst_24_2_3_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_24_2_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_24_2_3_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = findawards_inst_24_2_3_tsni(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_25_26_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_25_26_1_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_25_26_1_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_25_26_1_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_25_26_1_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_25_26_1_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_25_26_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_25_26_1_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_25_26_1_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_25_26_1_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_25_26_1_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_25_26_1_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_25_26_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_25_26_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_25_26_1_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_25_26_1_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_25_26_1_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_25_26_1_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_25_26_1_2_3_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_25_26_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_scrut_arm_Cons_inst_25_26_1_2_3_tsni = (undefined, function (scores, _deforest_Cons_head_inst_25_26_1_2_3_tsni, _deforest_Cons_tail_inst_25_26_1_2_3_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_25_26_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_25_26_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_25_26_1_2_3_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_25_26_1_2_3_tsni, _deforest_Deforest_Arr_2_1_inst_25_26_1_2_3_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_25_26_1_2_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_25_26_1_2_3_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = findawards_inst_25_26_1_2_3_tsni(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_28_29_26_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_28_29_26_1_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_28_29_26_1_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_28_29_26_1_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_28_29_26_1_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_28_29_26_1_2_3_4_16_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_28_29_26_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_28_29_26_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_28_29_26_1_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_28_29_26_1_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_28_29_26_1_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_28_29_26_1_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_28_29_26_1_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_28_29_26_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
});
match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_28_29_26_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_28_29_26_1_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_28_29_26_1_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_28_29_26_1_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_28_29_26_1_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_28_29_26_1_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_scrut_arm_Cons_inst_28_29_26_1_2_3_tsni = (undefined, function (scores, _deforest_Cons_head_inst_28_29_26_1_2_3_tsni, _deforest_Cons_tail_inst_28_29_26_1_2_3_tsni) {
  let param0, param1, head_, tail_;
  param0 = _deforest_Cons_head_inst_28_29_26_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_28_29_26_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  return runtime.safeCall(head_(scores))
});
match_head__arm_Deforest_Arr_2_inst_28_29_26_1_2_3_tsni = (undefined, function (scores, _deforest_Deforest_Arr_2_0_inst_28_29_26_1_2_3_tsni, _deforest_Deforest_Arr_2_1_inst_28_29_26_1_2_3_tsni) {
  let first1, first0, award1, first11, first01, sum_, perm, tmp, tmp1, tmp2, tmp3;
  first0 = _deforest_Deforest_Arr_2_0_inst_28_29_26_1_2_3_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_28_29_26_1_2_3_tsni;
  award1 = first0;
  if (runtime.Tuple.isArrayLike(first1) && first1.length === 2) {
    first01 = runtime.Tuple.get(first1, 0);
    first11 = runtime.Tuple.get(first1, 1);
    sum_ = first01;
    perm = first11;
    tmp = globalThis.Object.freeze([
      sum_,
      perm
    ]);
    tmp1 = globalThis.Object.freeze([
      award1,
      tmp
    ]);
    tmp2 = awards.listDiff(scores, perm);
    tmp3 = findawards_inst_28_29_26_1_2_3_tsni(tmp2);
    return NofibPrelude.Cons(tmp1, tmp3)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findallawards_inst_0_1_tsni = function findallawards_inst_0_1_tsni(competitors) {
  return NofibPrelude.map(lambda_inst_0_1_2_tsni, competitors)
};
lambda_inst_0_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    name = first0;
    scores = first1;
    tmp = findawards_inst_0_1_2_3_tsni(scores);
    return globalThis.Object.freeze([
      name,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findawards_inst_0_1_2_3_tsni = function findawards_inst_0_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_0_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_0_1_2_3_4_tsni = function awards_inst_0_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_0_1_2_3_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_0_1_2_3_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_0_1_2_3_4_7_14_tsni(name));
    return map_inst_0_1_2_3_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_0_1_2_3_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_0_1_2_3_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_0_1_2_3_4_10_14_tsni(name));
    return map_inst_0_1_2_3_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_0_1_2_3_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_0_1_2_3_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_0_1_2_3_4_11_14_tsni(name));
    return map_inst_0_1_2_3_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_0_1_2_3_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_0_1_2_3_4_13_tsni(tmp4, tmp6);
  return append_inst_0_1_2_3_4_16_tsni(tmp2, tmp7)
};
perms_inst_0_1_2_3_4_5_tsni = function perms_inst_0_1_2_3_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_0_1_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_0_1_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_0_1_2_3_4_5_tsni(m, ns);
        return append_inst_0_1_2_3_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_0_1_2_3_4_5_6_tsni = function map_inst_0_1_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_0_1_2_3_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_0_1_2_3_4_7_tsni = function award$_inst_0_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_7_8_tsni = function sort_inst_0_1_2_3_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_0_1_2_3_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_0_1_2_3_4_7_8_9_tsni = function qsort_inst_0_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_0_1_2_3_4_7_8_9_tsni = function qpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_0_1_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_0_1_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_0_1_2_3_4_7_8_9_tsni = function rqsort_inst_0_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_0_1_2_3_4_7_8_9_tsni = function rqpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_0_1_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_0_1_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_0_1_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_0_1_2_3_4_10_tsni = function award$_inst_0_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_10_8_tsni = function sort_inst_0_1_2_3_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_0_1_2_3_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_0_1_2_3_4_10_8_9_tsni = function qsort_inst_0_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_0_1_2_3_4_10_8_9_tsni = function qpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_0_1_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_0_1_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_0_1_2_3_4_10_8_9_tsni = function rqsort_inst_0_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_0_1_2_3_4_10_8_9_tsni = function rqpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_0_1_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_0_1_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_0_1_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_0_1_2_3_4_11_tsni = function award$_inst_0_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_11_8_tsni = function sort_inst_0_1_2_3_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_0_1_2_3_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_0_1_2_3_4_11_8_9_tsni = function qsort_inst_0_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_0_1_2_3_4_11_8_9_tsni = function qpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_0_1_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_0_1_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_0_1_2_3_4_11_8_9_tsni = function rqsort_inst_0_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_0_1_2_3_4_11_8_9_tsni = function rqpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_0_1_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_0_1_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_0_1_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_0_1_2_3_4_10_12_tsni = function map_inst_0_1_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_0_1_2_3_4_7_12_tsni = function map_inst_0_1_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_2_3_4_13_tsni = function append_inst_0_1_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_0_1_2_3_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_0_1_2_3_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_0_1_2_3_4_10_14_15_tsni = function lambda$_inst_0_1_2_3_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_0_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
map_inst_0_1_2_3_4_11_12_tsni = function map_inst_0_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_0_1_2_3_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_0_1_2_3_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_0_1_2_3_4_11_14_15_tsni = function lambda$_inst_0_1_2_3_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_0_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
append_inst_0_1_2_3_4_16_tsni = function append_inst_0_1_2_3_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_0_1_2_3_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_0_1_2_3_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_0_1_2_3_4_7_14_15_tsni = function lambda$_inst_0_1_2_3_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_0_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
findawards_inst_17_3_tsni = function findawards_inst_17_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_17_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_17_3_4_tsni = function awards_inst_17_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_17_3_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_17_3_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_17_3_4_7_14_tsni(name));
    return map_inst_17_3_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_17_3_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_17_3_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_17_3_4_10_14_tsni(name));
    return map_inst_17_3_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_17_3_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_17_3_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_17_3_4_11_14_tsni(name));
    return map_inst_17_3_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_17_3_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_17_3_4_13_tsni(tmp4, tmp6);
  return append_inst_17_3_4_16_tsni(tmp2, tmp7)
};
perms_inst_17_3_4_5_tsni = function perms_inst_17_3_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_17_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_17_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_17_3_4_5_tsni(m, ns);
        return append_inst_17_3_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_17_3_4_5_6_tsni = function map_inst_17_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_17_3_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_17_3_4_7_tsni = function award$_inst_17_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_17_3_4_7_8_tsni = function sort_inst_17_3_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_17_3_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_17_3_4_7_8_9_tsni = function qsort_inst_17_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_17_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_17_3_4_7_8_9_tsni = function qpart_inst_17_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_17_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_17_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_17_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_17_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_17_3_4_7_8_9_tsni = function rqsort_inst_17_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_17_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_17_3_4_7_8_9_tsni = function rqpart_inst_17_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_17_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_17_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_17_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_17_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_17_3_4_10_tsni = function award$_inst_17_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_17_3_4_10_8_tsni = function sort_inst_17_3_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_17_3_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_17_3_4_10_8_9_tsni = function qsort_inst_17_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_17_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_17_3_4_10_8_9_tsni = function qpart_inst_17_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_17_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_17_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_17_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_17_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_17_3_4_10_8_9_tsni = function rqsort_inst_17_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_17_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_17_3_4_10_8_9_tsni = function rqpart_inst_17_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_17_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_17_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_17_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_17_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_17_3_4_11_tsni = function award$_inst_17_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_17_3_4_11_8_tsni = function sort_inst_17_3_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_17_3_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_17_3_4_11_8_9_tsni = function qsort_inst_17_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_17_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_17_3_4_11_8_9_tsni = function qpart_inst_17_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_17_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_17_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_17_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_17_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_17_3_4_11_8_9_tsni = function rqsort_inst_17_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_17_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_17_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_17_3_4_11_8_9_tsni = function rqpart_inst_17_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_17_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_17_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_17_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_17_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_17_3_4_10_12_tsni = function map_inst_17_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_17_3_4_7_12_tsni = function map_inst_17_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_17_3_4_13_tsni = function append_inst_17_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_17_3_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_17_3_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_17_3_4_10_14_15_tsni = function lambda$_inst_17_3_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_17_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
map_inst_17_3_4_11_12_tsni = function map_inst_17_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_17_3_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_17_3_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_17_3_4_11_14_15_tsni = function lambda$_inst_17_3_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_17_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
append_inst_17_3_4_16_tsni = function append_inst_17_3_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_17_3_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_17_3_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_17_3_4_7_14_15_tsni = function lambda$_inst_17_3_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_17_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
sort_inst_18_8_tsni = function sort_inst_18_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return NofibPrelude.Nil
  };
  return qsort_inst_18_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_18_8_9_tsni = function qsort_inst_18_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_18_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_18_8_9_tsni = function qpart_inst_18_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_18_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_18_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_18_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_18_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_18_8_9_tsni = function rqsort_inst_18_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_18_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_18_8_9_tsni = function rqpart_inst_18_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_18_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_18_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_18_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_18_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_19_20_tsni = function award$_inst_19_20_tsni(sumscores, name_threshold) {
  let first1, first0, name, threshold, tmp, tmp1, lambda$this;
  if (runtime.Tuple.isArrayLike(name_threshold) && name_threshold.length === 2) {
    first0 = runtime.Tuple.get(name_threshold, 0);
    first1 = runtime.Tuple.get(name_threshold, 1);
    name = first0;
    threshold = first1;
    tmp = atleast$(sumscores, threshold);
    tmp1 = sort_inst_19_20_8_tsni(tmp);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_19_20_12_tsni(lambda$this, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
sort_inst_19_20_8_tsni = function sort_inst_19_20_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return NofibPrelude.Nil
  };
  return qsort_inst_19_20_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_19_20_8_9_tsni = function qsort_inst_19_20_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_19_20_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_19_20_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_19_20_8_9_tsni = function qpart_inst_19_20_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_19_20_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_19_20_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_19_20_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_19_20_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_19_20_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_19_20_8_9_tsni = function rqsort_inst_19_20_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_19_20_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_19_20_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_19_20_8_9_tsni = function rqpart_inst_19_20_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_19_20_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_19_20_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_19_20_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_19_20_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_19_20_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_21_6_tsni = function map_inst_21_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_21_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
perms_inst_22_5_tsni = function perms_inst_22_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_22_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_22_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_22_5_tsni(m, ns);
        return append_inst_22_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_22_5_6_tsni = function map_inst_22_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_22_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_22_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_22_7_tsni = function award$_inst_22_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_7_8_tsni = function sort_inst_22_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_22_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_22_7_8_9_tsni = function qsort_inst_22_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_22_7_8_9_tsni = function qpart_inst_22_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_22_7_8_9_tsni = function rqsort_inst_22_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_22_7_8_9_tsni = function rqpart_inst_22_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_22_10_tsni = function award$_inst_22_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_10_8_tsni = function sort_inst_22_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_22_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_22_10_8_9_tsni = function qsort_inst_22_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_22_10_8_9_tsni = function qpart_inst_22_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_22_10_8_9_tsni = function rqsort_inst_22_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_22_10_8_9_tsni = function rqpart_inst_22_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_22_11_tsni = function award$_inst_22_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_11_8_tsni = function sort_inst_22_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return NofibPrelude.Nil
  };
  return qsort_inst_22_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_22_11_8_9_tsni = function qsort_inst_22_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_22_11_8_9_tsni = function qpart_inst_22_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_22_11_8_9_tsni = function rqsort_inst_22_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_22_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_22_11_8_9_tsni = function rqpart_inst_22_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_22_10_12_tsni = function map_inst_22_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_22_7_12_tsni = function map_inst_22_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
awards_inst_23_4_tsni = function awards_inst_23_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_23_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_23_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_23_4_7_14_tsni(name));
    return map_inst_23_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_23_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_23_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_23_4_10_14_tsni(name));
    return map_inst_23_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_23_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_23_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_23_4_11_14_tsni(name));
    return map_inst_23_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_23_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_23_4_13_tsni(tmp4, tmp6);
  return append_inst_23_4_16_tsni(tmp2, tmp7)
};
award$_inst_23_4_11_tsni = function award$_inst_23_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_4_11_8_tsni = function sort_inst_23_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_23_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_23_4_11_8_9_tsni = function qsort_inst_23_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_23_4_11_8_9_tsni = function qpart_inst_23_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_23_4_11_8_9_tsni = function rqsort_inst_23_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_23_4_11_8_9_tsni = function rqpart_inst_23_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_23_4_10_tsni = function award$_inst_23_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_4_10_8_tsni = function sort_inst_23_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_23_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_23_4_10_8_9_tsni = function qsort_inst_23_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_23_4_10_8_9_tsni = function qpart_inst_23_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_23_4_10_8_9_tsni = function rqsort_inst_23_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_23_4_10_8_9_tsni = function rqpart_inst_23_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_23_4_10_12_tsni = function map_inst_23_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_23_4_7_tsni = function award$_inst_23_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_4_7_8_tsni = function sort_inst_23_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_23_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_23_4_7_8_9_tsni = function qsort_inst_23_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_23_4_7_8_9_tsni = function qpart_inst_23_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_23_4_7_8_9_tsni = function rqsort_inst_23_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_23_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_23_4_7_8_9_tsni = function rqpart_inst_23_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_23_4_7_12_tsni = function map_inst_23_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_23_4_5_tsni = function perms_inst_23_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_23_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_23_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_23_4_5_tsni(m, ns);
        return append_inst_23_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_23_4_5_6_tsni = function map_inst_23_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_23_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_23_4_11_12_tsni = function map_inst_23_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_23_4_13_tsni = function append_inst_23_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_23_4_16_tsni = function append_inst_23_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_23_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_23_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_23_4_7_14_15_tsni = function lambda$_inst_23_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_23_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_23_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_23_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_23_4_10_14_15_tsni = function lambda$_inst_23_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_23_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_23_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_23_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_23_4_11_14_15_tsni = function lambda$_inst_23_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_23_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_24_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    name = first0;
    scores = first1;
    tmp = findawards_inst_24_2_3_tsni(scores);
    return globalThis.Object.freeze([
      name,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findawards_inst_24_2_3_tsni = function findawards_inst_24_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_24_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_24_2_3_4_tsni = function awards_inst_24_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_24_2_3_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_24_2_3_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_24_2_3_4_7_14_tsni(name));
    return map_inst_24_2_3_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_24_2_3_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_24_2_3_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_24_2_3_4_10_14_tsni(name));
    return map_inst_24_2_3_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_24_2_3_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_24_2_3_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_24_2_3_4_11_14_tsni(name));
    return map_inst_24_2_3_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_24_2_3_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_24_2_3_4_13_tsni(tmp4, tmp6);
  return append_inst_24_2_3_4_16_tsni(tmp2, tmp7)
};
award$_inst_24_2_3_4_11_tsni = function award$_inst_24_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_24_2_3_4_11_8_tsni = function sort_inst_24_2_3_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_24_2_3_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_24_2_3_4_11_8_9_tsni = function qsort_inst_24_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_24_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_24_2_3_4_11_8_9_tsni = function qpart_inst_24_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_24_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_24_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_24_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_24_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_24_2_3_4_11_8_9_tsni = function rqsort_inst_24_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_24_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_24_2_3_4_11_8_9_tsni = function rqpart_inst_24_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_24_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_24_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_24_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_24_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_24_2_3_4_10_tsni = function award$_inst_24_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_24_2_3_4_10_8_tsni = function sort_inst_24_2_3_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_24_2_3_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_24_2_3_4_10_8_9_tsni = function qsort_inst_24_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_24_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_24_2_3_4_10_8_9_tsni = function qpart_inst_24_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_24_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_24_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_24_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_24_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_24_2_3_4_10_8_9_tsni = function rqsort_inst_24_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_24_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_24_2_3_4_10_8_9_tsni = function rqpart_inst_24_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_24_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_24_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_24_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_24_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_24_2_3_4_10_12_tsni = function map_inst_24_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_24_2_3_4_7_tsni = function award$_inst_24_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_24_2_3_4_7_8_tsni = function sort_inst_24_2_3_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_24_2_3_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_24_2_3_4_7_8_9_tsni = function qsort_inst_24_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_24_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_24_2_3_4_7_8_9_tsni = function qpart_inst_24_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_24_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_24_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_24_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_24_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_24_2_3_4_7_8_9_tsni = function rqsort_inst_24_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_24_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_24_2_3_4_7_8_9_tsni = function rqpart_inst_24_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_24_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_24_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_24_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_24_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_24_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_24_2_3_4_7_12_tsni = function map_inst_24_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_24_2_3_4_5_tsni = function perms_inst_24_2_3_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_24_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_24_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_24_2_3_4_5_tsni(m, ns);
        return append_inst_24_2_3_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_24_2_3_4_5_6_tsni = function map_inst_24_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_24_2_3_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_24_2_3_4_11_12_tsni = function map_inst_24_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_24_2_3_4_13_tsni = function append_inst_24_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_24_2_3_4_16_tsni = function append_inst_24_2_3_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_24_2_3_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_24_2_3_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_24_2_3_4_7_14_15_tsni = function lambda$_inst_24_2_3_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_24_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_24_2_3_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_24_2_3_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_24_2_3_4_10_14_15_tsni = function lambda$_inst_24_2_3_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_24_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_24_2_3_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_24_2_3_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_24_2_3_4_11_14_15_tsni = function lambda$_inst_24_2_3_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_24_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_25_26_tsni = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  return findallawards_inst_25_26_1_tsni(tmp1)
});
findallawards_inst_25_26_1_tsni = function findallawards_inst_25_26_1_tsni(competitors) {
  return NofibPrelude.map(lambda_inst_25_26_1_2_tsni, competitors)
};
lambda_inst_25_26_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    name = first0;
    scores = first1;
    tmp = findawards_inst_25_26_1_2_3_tsni(scores);
    return globalThis.Object.freeze([
      name,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findawards_inst_25_26_1_2_3_tsni = function findawards_inst_25_26_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_25_26_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_25_26_1_2_3_4_tsni = function awards_inst_25_26_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_25_26_1_2_3_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_25_26_1_2_3_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_25_26_1_2_3_4_7_14_tsni(name));
    return map_inst_25_26_1_2_3_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_25_26_1_2_3_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_25_26_1_2_3_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_25_26_1_2_3_4_10_14_tsni(name));
    return map_inst_25_26_1_2_3_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_25_26_1_2_3_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_25_26_1_2_3_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_25_26_1_2_3_4_11_14_tsni(name));
    return map_inst_25_26_1_2_3_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_25_26_1_2_3_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_25_26_1_2_3_4_13_tsni(tmp4, tmp6);
  return append_inst_25_26_1_2_3_4_16_tsni(tmp2, tmp7)
};
award$_inst_25_26_1_2_3_4_11_tsni = function award$_inst_25_26_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_25_26_1_2_3_4_11_8_tsni = function sort_inst_25_26_1_2_3_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_25_26_1_2_3_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_25_26_1_2_3_4_11_8_9_tsni = function qsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_25_26_1_2_3_4_11_8_9_tsni = function qpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_25_26_1_2_3_4_11_8_9_tsni = function rqsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_25_26_1_2_3_4_11_8_9_tsni = function rqpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_25_26_1_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_25_26_1_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_25_26_1_2_3_4_10_tsni = function award$_inst_25_26_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_25_26_1_2_3_4_10_8_tsni = function sort_inst_25_26_1_2_3_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_25_26_1_2_3_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_25_26_1_2_3_4_10_8_9_tsni = function qsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_25_26_1_2_3_4_10_8_9_tsni = function qpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_25_26_1_2_3_4_10_8_9_tsni = function rqsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_25_26_1_2_3_4_10_8_9_tsni = function rqpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_25_26_1_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_25_26_1_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_25_26_1_2_3_4_10_12_tsni = function map_inst_25_26_1_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_25_26_1_2_3_4_7_tsni = function award$_inst_25_26_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_25_26_1_2_3_4_7_8_tsni = function sort_inst_25_26_1_2_3_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_25_26_1_2_3_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_25_26_1_2_3_4_7_8_9_tsni = function qsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_25_26_1_2_3_4_7_8_9_tsni = function qpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_25_26_1_2_3_4_7_8_9_tsni = function rqsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_25_26_1_2_3_4_7_8_9_tsni = function rqpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_25_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_25_26_1_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_25_26_1_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_25_26_1_2_3_4_7_12_tsni = function map_inst_25_26_1_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_25_26_1_2_3_4_5_tsni = function perms_inst_25_26_1_2_3_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_25_26_1_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_25_26_1_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_25_26_1_2_3_4_5_tsni(m, ns);
        return append_inst_25_26_1_2_3_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_25_26_1_2_3_4_5_6_tsni = function map_inst_25_26_1_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_26_1_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_25_26_1_2_3_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_25_26_1_2_3_4_11_12_tsni = function map_inst_25_26_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_25_26_1_2_3_4_13_tsni = function append_inst_25_26_1_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_26_1_2_3_4_16_tsni = function append_inst_25_26_1_2_3_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_25_26_1_2_3_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_25_26_1_2_3_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_25_26_1_2_3_4_7_14_15_tsni = function lambda$_inst_25_26_1_2_3_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_25_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_25_26_1_2_3_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_25_26_1_2_3_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_25_26_1_2_3_4_10_14_15_tsni = function lambda$_inst_25_26_1_2_3_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_25_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
lambda_inst_25_26_1_2_3_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_25_26_1_2_3_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_25_26_1_2_3_4_11_14_15_tsni = function lambda$_inst_25_26_1_2_3_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_25_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
enumFromTo_inst_25_27_tsni = function enumFromTo_inst_25_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_25_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_25_31_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testAwards_nofib_inst_28_29_tsni = function testAwards_nofib_inst_28_29_tsni(n) {
  let tmp;
  tmp = enumFromTo_inst_28_29_27_tsni(1, n);
  return map_inst_28_29_31_tsni(lambda_inst_28_29_26_tsni, tmp)
};
lambda_inst_28_29_26_tsni = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  return findallawards_inst_28_29_26_1_tsni(tmp1)
});
findallawards_inst_28_29_26_1_tsni = function findallawards_inst_28_29_26_1_tsni(competitors) {
  return NofibPrelude.map(lambda_inst_28_29_26_1_2_tsni, competitors)
};
lambda_inst_28_29_26_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    name = first0;
    scores = first1;
    tmp = findawards_inst_28_29_26_1_2_3_tsni(scores);
    return globalThis.Object.freeze([
      name,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findawards_inst_28_29_26_1_2_3_tsni = function findawards_inst_28_29_26_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_28_29_26_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_28_29_26_1_2_3_4_tsni = function awards_inst_28_29_26_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_28_29_26_1_2_3_4_5_tsni(3, scores);
  sumscores = NofibPrelude.map(lambda11, tmp);
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  tmp1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_28_29_26_1_2_3_4_7_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_28_29_26_1_2_3_4_7_14_tsni(name));
    return map_inst_28_29_26_1_2_3_4_7_12_tsni(lambda$this, tmp9)
  };
  tmp2 = award$_inst_28_29_26_1_2_3_4_7_tsni(sumscores, tmp1);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  tmp3 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_28_29_26_1_2_3_4_10_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_28_29_26_1_2_3_4_10_14_tsni(name));
    return map_inst_28_29_26_1_2_3_4_10_12_tsni(lambda$this, tmp9)
  };
  tmp4 = award$_inst_28_29_26_1_2_3_4_10_tsni(sumscores, tmp3);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  tmp5 = (sumscores1) => {
    let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp8 = atleast$(sumscores1, threshold);
    tmp9 = sort_inst_28_29_26_1_2_3_4_11_8_tsni(tmp8);
    lambda$this = runtime.safeCall(lambda_inst_28_29_26_1_2_3_4_11_14_tsni(name));
    return map_inst_28_29_26_1_2_3_4_11_12_tsni(lambda$this, tmp9)
  };
  tmp6 = award$_inst_28_29_26_1_2_3_4_11_tsni(sumscores, tmp5);
  tmp7 = append_inst_28_29_26_1_2_3_4_13_tsni(tmp4, tmp6);
  return append_inst_28_29_26_1_2_3_4_16_tsni(tmp2, tmp7)
};
perms_inst_28_29_26_1_2_3_4_5_tsni = function perms_inst_28_29_26_1_2_3_4_5_tsni(m, nns) {
  let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (nns instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = m == 1;
    if (scrut === true) {
      return NofibPrelude.map(lambda7, nns)
    } else {
      if (nns instanceof NofibPrelude.Cons.class) {
        param0 = nns.head;
        param1 = nns.tail;
        n = param0;
        ns = param1;
        tmp = m - 1;
        tmp1 = perms_inst_28_29_26_1_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_28_29_26_1_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_28_29_26_1_2_3_4_5_tsni(m, ns);
        return append_inst_28_29_26_1_2_3_4_5_30_tsni(tmp2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
map_inst_28_29_26_1_2_3_4_5_6_tsni = function map_inst_28_29_26_1_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_29_26_1_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_28_29_26_1_2_3_4_5_30_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_28_29_26_1_2_3_4_7_tsni = function award$_inst_28_29_26_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_28_29_26_1_2_3_4_7_8_tsni = function sort_inst_28_29_26_1_2_3_4_7_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni = function qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni = function qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_28_29_26_1_2_3_4_7_8_9_tsni = function rqsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni = function rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_28_29_26_1_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_28_29_26_1_2_3_4_10_tsni = function award$_inst_28_29_26_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_28_29_26_1_2_3_4_10_8_tsni = function sort_inst_28_29_26_1_2_3_4_10_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (ys) => {
      return ys
    }
  };
  return qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni = function qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni = function qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_28_29_26_1_2_3_4_10_8_9_tsni = function rqsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni = function rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_28_29_26_1_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award$_inst_28_29_26_1_2_3_4_11_tsni = function award$_inst_28_29_26_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_28_29_26_1_2_3_4_11_8_tsni = function sort_inst_28_29_26_1_2_3_4_11_8_tsni(l) {
  let lambda14;
  lambda14 = (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  };
  return qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(lambda6, l, lambda14)
};
qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni = function qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni = function qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqsort_inst_28_29_26_1_2_3_4_11_8_9_tsni = function rqsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, ls, r) {
  let param0, param1, x, xs, x1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return r
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Cons_head = x1;
      _deforest_Cons_tail = r;
      return (f) => {
        return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni = function rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_28_29_26_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_28_29_26_1_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_28_29_26_1_2_3_4_10_12_tsni = function map_inst_28_29_26_1_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_28_29_26_1_2_3_4_7_12_tsni = function map_inst_28_29_26_1_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_28_29_26_1_2_3_4_13_tsni = function append_inst_28_29_26_1_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_28_29_26_1_2_3_4_10_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_28_29_26_1_2_3_4_10_14_15_tsni(name, ps)
  }
});
lambda$_inst_28_29_26_1_2_3_4_10_14_15_tsni = function lambda$_inst_28_29_26_1_2_3_4_10_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_28_29_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
map_inst_28_29_26_1_2_3_4_11_12_tsni = function map_inst_28_29_26_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_28_29_26_1_2_3_4_11_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_28_29_26_1_2_3_4_11_14_15_tsni(name, ps)
  }
});
lambda$_inst_28_29_26_1_2_3_4_11_14_15_tsni = function lambda$_inst_28_29_26_1_2_3_4_11_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_28_29_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
append_inst_28_29_26_1_2_3_4_16_tsni = function append_inst_28_29_26_1_2_3_4_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_28_29_26_1_2_3_4_7_14_tsni = (undefined, function (name) {
  return (ps) => {
    return lambda$_inst_28_29_26_1_2_3_4_7_14_15_tsni(name, ps)
  }
});
lambda$_inst_28_29_26_1_2_3_4_7_14_15_tsni = function lambda$_inst_28_29_26_1_2_3_4_7_14_15_tsni(name, ps) {
  let _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = name;
  _deforest_Deforest_Arr_2_1 = ps;
  return (scores) => {
    return match_head__arm_Deforest_Arr_2_inst_28_29_26_1_2_3_tsni(scores, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  }
};
enumFromTo_inst_28_29_27_tsni = function enumFromTo_inst_28_29_27_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_28_29_27_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_28_29_31_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
append_inst_0_1_2_3_4_5_30_tsni = function append_inst_0_1_2_3_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_17_3_4_5_30_tsni = function append_inst_17_3_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_18_12_tsni = function map_inst_18_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_19_20_12_tsni = function map_inst_19_20_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_21_30_tsni = function append_inst_21_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_5_30_tsni = function append_inst_22_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_22_11_12_tsni = function map_inst_22_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_22_13_tsni = function append_inst_22_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_16_tsni = function append_inst_22_16_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_23_4_5_30_tsni = function append_inst_23_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_24_2_3_4_5_30_tsni = function append_inst_24_2_3_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_26_1_2_3_4_5_30_tsni = function append_inst_25_26_1_2_3_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_25_31_tsni = function map_inst_25_31_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_28_29_26_1_2_3_4_5_30_tsni = function append_inst_28_29_26_1_2_3_4_5_30_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_28_29_31_tsni = function map_inst_28_29_31_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda13 = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  return findallawards_inst_0_1_tsni(tmp1)
});
lambda12 = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    name = first0;
    scores = first1;
    tmp = findawards_inst_17_3_tsni(scores);
    return globalThis.Object.freeze([
      name,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
lambda$2 = function lambda$(threshold, caseScrut) {
  let first1, first0, sum_, p;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    sum_ = first0;
    p = first1;
    return sum_ >= threshold
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda9 = (undefined, function (threshold) {
  return (caseScrut) => {
    return lambda$2(threshold, caseScrut)
  }
});
atleast$ = function atleast$(sumscores, threshold) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda9(threshold));
  return NofibPrelude.filter(lambda$this, sumscores)
};
atleast = function atleast(sumscores) {
  return (threshold) => {
    return atleast$(sumscores, threshold)
  }
};
lambda$1 = function lambda$(name, ps) {
  return globalThis.Object.freeze([
    name,
    ps
  ])
};
lambda10 = (undefined, function (name) {
  return (ps) => {
    return lambda$1(name, ps)
  }
});
award$ = function award$(sumscores, name_threshold) {
  let first1, first0, name, threshold, tmp, tmp1, lambda$this;
  if (runtime.Tuple.isArrayLike(name_threshold) && name_threshold.length === 2) {
    first0 = runtime.Tuple.get(name_threshold, 0);
    first1 = runtime.Tuple.get(name_threshold, 1);
    name = first0;
    threshold = first1;
    tmp = atleast$(sumscores, threshold);
    tmp1 = sort_inst_18_8_tsni(tmp);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_18_12_tsni(lambda$this, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
award = function award(sumscores) {
  return (name_threshold) => {
    return award$_inst_19_20_tsni(sumscores, name_threshold)
  }
};
lambda11 = (undefined, function (p) {
  let tmp;
  tmp = NofibPrelude.sum(p);
  return globalThis.Object.freeze([
    tmp,
    p
  ])
});
lambda7 = (undefined, function (x) {
  return NofibPrelude.Cons(x, NofibPrelude.Nil)
});
lambda$ = function lambda$(n, x) {
  return NofibPrelude.Cons(n, x)
};
lambda8 = (undefined, function (n) {
  return (x) => {
    return lambda$(n, x)
  }
});
lambda1 = (undefined, function (a, b) {
  return a < b
});
lambda2 = (undefined, function (a, b) {
  return a > b
});
lambda3 = (undefined, function (a, b) {
  return a < b
});
lambda4 = (undefined, function (a, b) {
  return a > b
});
lambda5 = (undefined, function (a, b) {
  return NofibPrelude.ltList(a, b, lambda3, lambda4)
});
lambda6 = (undefined, function (a, b) {
  return NofibPrelude.ltTup2(a, b, lambda1, lambda2, lambda5)
});
lambda = (undefined, function (x, y) {
  return x == y
});
globalThis.Object.freeze(class awards {
  static {
    awards1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static delete_(xs, e) {
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls) {
    return NofibPrelude.foldl(awards.delete_, a, ls)
  } 
  static qsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return awards.qpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static qpart(le, x, ys, rlt, rge, r) {
    let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3;
    if (ys instanceof NofibPrelude.Nil.class) {
      tmp = awards.rqsort(le, rge, r);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return awards.rqsort(le, rlt, tmp1)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param0 = ys.head;
      param1 = ys.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(le(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return awards.qpart(le, x, ys1, rlt, tmp2, r)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return awards.qpart(le, x, ys1, tmp3, rge, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rqsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return awards.rqpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rqpart(le, x, yss, rle, rgt, r) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (yss instanceof NofibPrelude.Nil.class) {
      tmp = awards.qsort(le, rgt, r);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return awards.qsort(le, rle, tmp1)
    } else if (yss instanceof NofibPrelude.Cons.class) {
      param0 = yss.head;
      param1 = yss.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le(y, x));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return awards.rqpart(le, x, ys, tmp2, rgt, r)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return awards.rqpart(le, x, ys, rle, tmp3, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static sort(l) {
    return awards.qsort(lambda6, l, NofibPrelude.Nil)
  } 
  static perms(m, nns) {
    let param0, param1, n, ns, scrut, tmp, tmp1, tmp2, tmp3, lambda$this;
    if (nns instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      scrut = m == 1;
      if (scrut === true) {
        return NofibPrelude.map(lambda7, nns)
      } else {
        if (nns instanceof NofibPrelude.Cons.class) {
          param0 = nns.head;
          param1 = nns.tail;
          n = param0;
          ns = param1;
          tmp = m - 1;
          tmp1 = awards.perms(tmp, ns);
          lambda$this = runtime.safeCall(lambda8(n));
          tmp2 = map_inst_21_6_tsni(lambda$this, tmp1);
          tmp3 = awards.perms(m, ns);
          return append_inst_21_30_tsni(tmp2, tmp3)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } 
  static awards(scores) {
    let sumscores, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
    tmp = perms_inst_22_5_tsni(3, scores);
    sumscores = NofibPrelude.map(lambda11, tmp);
    _deforest_Deforest_Arr_2_0 = "Gold";
    _deforest_Deforest_Arr_2_1 = 70;
    tmp1 = (sumscores1) => {
      let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      name = first0;
      threshold = first1;
      tmp8 = atleast$(sumscores1, threshold);
      tmp9 = sort_inst_22_7_8_tsni(tmp8);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_22_7_12_tsni(lambda$this, tmp9)
    };
    tmp2 = award$_inst_22_7_tsni(sumscores, tmp1);
    _deforest_Deforest_Arr_2_01 = "Silver";
    _deforest_Deforest_Arr_2_11 = 60;
    tmp3 = (sumscores1) => {
      let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      name = first0;
      threshold = first1;
      tmp8 = atleast$(sumscores1, threshold);
      tmp9 = sort_inst_22_10_8_tsni(tmp8);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_22_10_12_tsni(lambda$this, tmp9)
    };
    tmp4 = award$_inst_22_10_tsni(sumscores, tmp3);
    _deforest_Deforest_Arr_2_02 = "Bronze";
    _deforest_Deforest_Arr_2_12 = 50;
    tmp5 = (sumscores1) => {
      let first1, first0, name, threshold, tmp8, tmp9, lambda$this;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      name = first0;
      threshold = first1;
      tmp8 = atleast$(sumscores1, threshold);
      tmp9 = sort_inst_22_11_8_tsni(tmp8);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_22_11_12_tsni(lambda$this, tmp9)
    };
    tmp6 = award$_inst_22_11_tsni(sumscores, tmp5);
    tmp7 = append_inst_22_13_tsni(tmp4, tmp6);
    return append_inst_22_16_tsni(tmp2, tmp7)
  } 
  static findawards(scores) {
    let scrut;
    scrut = awards_inst_23_4_tsni(scores);
    return runtime.safeCall(scrut(scores))
  } 
  static findallawards(competitors) {
    return NofibPrelude.map(lambda_inst_24_2_tsni, competitors)
  } 
  static competitors(i) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.list(35, 27, 40, i, 34, 21);
    tmp1 = globalThis.Object.freeze([
      "Simon",
      tmp
    ]);
    tmp2 = NofibPrelude.list(23, 19, 45, i, 17, 10, 5, 8, 14);
    tmp3 = globalThis.Object.freeze([
      "Hans",
      tmp2
    ]);
    tmp4 = NofibPrelude.list(1, 18, i, 20, 21, 19, 34, 8, 16, 21);
    tmp5 = globalThis.Object.freeze([
      "Phil",
      tmp4
    ]);
    tmp6 = NofibPrelude.list(9, 23, 17, 54, i, 41, 9, 18, 14);
    tmp7 = globalThis.Object.freeze([
      "Kevin",
      tmp6
    ]);
    return NofibPrelude.list(tmp1, tmp3, tmp5, tmp7)
  } 
  static testAwards_nofib(n) {
    let tmp;
    tmp = enumFromTo_inst_25_27_tsni(1, n);
    return map_inst_25_31_tsni(lambda_inst_25_26_tsni, tmp)
  } 
  static main() {
    return testAwards_nofib_inst_28_29_tsni(100)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "awards"]; 
});
let awards = awards1; export default awards;
