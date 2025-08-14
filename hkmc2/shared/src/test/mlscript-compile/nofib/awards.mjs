import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let award, atleast, awards1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, award$, lambda$1, atleast$, lambda$2, findallawards_inst_0_1_tsni, lambda_inst_0_1_2_tsni, findawards_inst_0_1_2_3_tsni, awards_inst_0_1_2_3_4_tsni, perms_inst_0_1_2_3_4_5_tsni, map_inst_0_1_2_3_4_5_6_tsni, award$_inst_0_1_2_3_4_7_tsni, sort_inst_0_1_2_3_4_7_8_tsni, qsort_inst_0_1_2_3_4_7_8_9_tsni, qpart_inst_0_1_2_3_4_7_8_9_tsni, rqsort_inst_0_1_2_3_4_7_8_9_tsni, rqpart_inst_0_1_2_3_4_7_8_9_tsni, award$_inst_0_1_2_3_4_10_tsni, sort_inst_0_1_2_3_4_10_8_tsni, qsort_inst_0_1_2_3_4_10_8_9_tsni, qpart_inst_0_1_2_3_4_10_8_9_tsni, rqsort_inst_0_1_2_3_4_10_8_9_tsni, rqpart_inst_0_1_2_3_4_10_8_9_tsni, award$_inst_0_1_2_3_4_11_tsni, sort_inst_0_1_2_3_4_11_8_tsni, qsort_inst_0_1_2_3_4_11_8_9_tsni, qpart_inst_0_1_2_3_4_11_8_9_tsni, rqsort_inst_0_1_2_3_4_11_8_9_tsni, rqpart_inst_0_1_2_3_4_11_8_9_tsni, map_inst_0_1_2_3_4_10_12_tsni, map_inst_0_1_2_3_4_7_12_tsni, append_inst_0_1_2_3_4_13_tsni, map_inst_0_1_2_3_4_11_12_tsni, append_inst_0_1_2_3_4_14_tsni, findawards_inst_15_3_tsni, awards_inst_15_3_4_tsni, perms_inst_15_3_4_5_tsni, map_inst_15_3_4_5_6_tsni, award$_inst_15_3_4_7_tsni, sort_inst_15_3_4_7_8_tsni, qsort_inst_15_3_4_7_8_9_tsni, qpart_inst_15_3_4_7_8_9_tsni, rqsort_inst_15_3_4_7_8_9_tsni, rqpart_inst_15_3_4_7_8_9_tsni, award$_inst_15_3_4_10_tsni, sort_inst_15_3_4_10_8_tsni, qsort_inst_15_3_4_10_8_9_tsni, qpart_inst_15_3_4_10_8_9_tsni, rqsort_inst_15_3_4_10_8_9_tsni, rqpart_inst_15_3_4_10_8_9_tsni, award$_inst_15_3_4_11_tsni, sort_inst_15_3_4_11_8_tsni, qsort_inst_15_3_4_11_8_9_tsni, qpart_inst_15_3_4_11_8_9_tsni, rqsort_inst_15_3_4_11_8_9_tsni, rqpart_inst_15_3_4_11_8_9_tsni, map_inst_15_3_4_10_12_tsni, map_inst_15_3_4_7_12_tsni, append_inst_15_3_4_13_tsni, map_inst_15_3_4_11_12_tsni, append_inst_15_3_4_14_tsni, sort_inst_16_8_tsni, qsort_inst_16_8_9_tsni, qpart_inst_16_8_9_tsni, rqsort_inst_16_8_9_tsni, rqpart_inst_16_8_9_tsni, award$_inst_17_18_tsni, sort_inst_17_18_8_tsni, qsort_inst_17_18_8_9_tsni, qpart_inst_17_18_8_9_tsni, rqsort_inst_17_18_8_9_tsni, rqpart_inst_17_18_8_9_tsni, map_inst_19_6_tsni, perms_inst_20_5_tsni, map_inst_20_5_6_tsni, award$_inst_20_7_tsni, sort_inst_20_7_8_tsni, qsort_inst_20_7_8_9_tsni, qpart_inst_20_7_8_9_tsni, rqsort_inst_20_7_8_9_tsni, rqpart_inst_20_7_8_9_tsni, award$_inst_20_10_tsni, sort_inst_20_10_8_tsni, qsort_inst_20_10_8_9_tsni, qpart_inst_20_10_8_9_tsni, rqsort_inst_20_10_8_9_tsni, rqpart_inst_20_10_8_9_tsni, award$_inst_20_11_tsni, sort_inst_20_11_8_tsni, qsort_inst_20_11_8_9_tsni, qpart_inst_20_11_8_9_tsni, rqsort_inst_20_11_8_9_tsni, rqpart_inst_20_11_8_9_tsni, map_inst_20_10_12_tsni, map_inst_20_7_12_tsni, awards_inst_21_4_tsni, award$_inst_21_4_11_tsni, sort_inst_21_4_11_8_tsni, qsort_inst_21_4_11_8_9_tsni, qpart_inst_21_4_11_8_9_tsni, rqsort_inst_21_4_11_8_9_tsni, rqpart_inst_21_4_11_8_9_tsni, award$_inst_21_4_10_tsni, sort_inst_21_4_10_8_tsni, qsort_inst_21_4_10_8_9_tsni, qpart_inst_21_4_10_8_9_tsni, rqsort_inst_21_4_10_8_9_tsni, rqpart_inst_21_4_10_8_9_tsni, map_inst_21_4_10_12_tsni, award$_inst_21_4_7_tsni, sort_inst_21_4_7_8_tsni, qsort_inst_21_4_7_8_9_tsni, qpart_inst_21_4_7_8_9_tsni, rqsort_inst_21_4_7_8_9_tsni, rqpart_inst_21_4_7_8_9_tsni, map_inst_21_4_7_12_tsni, perms_inst_21_4_5_tsni, map_inst_21_4_5_6_tsni, map_inst_21_4_11_12_tsni, append_inst_21_4_13_tsni, append_inst_21_4_14_tsni, lambda_inst_22_2_tsni, findawards_inst_22_2_3_tsni, awards_inst_22_2_3_4_tsni, award$_inst_22_2_3_4_11_tsni, sort_inst_22_2_3_4_11_8_tsni, qsort_inst_22_2_3_4_11_8_9_tsni, qpart_inst_22_2_3_4_11_8_9_tsni, rqsort_inst_22_2_3_4_11_8_9_tsni, rqpart_inst_22_2_3_4_11_8_9_tsni, award$_inst_22_2_3_4_10_tsni, sort_inst_22_2_3_4_10_8_tsni, qsort_inst_22_2_3_4_10_8_9_tsni, qpart_inst_22_2_3_4_10_8_9_tsni, rqsort_inst_22_2_3_4_10_8_9_tsni, rqpart_inst_22_2_3_4_10_8_9_tsni, map_inst_22_2_3_4_10_12_tsni, award$_inst_22_2_3_4_7_tsni, sort_inst_22_2_3_4_7_8_tsni, qsort_inst_22_2_3_4_7_8_9_tsni, qpart_inst_22_2_3_4_7_8_9_tsni, rqsort_inst_22_2_3_4_7_8_9_tsni, rqpart_inst_22_2_3_4_7_8_9_tsni, map_inst_22_2_3_4_7_12_tsni, perms_inst_22_2_3_4_5_tsni, map_inst_22_2_3_4_5_6_tsni, map_inst_22_2_3_4_11_12_tsni, append_inst_22_2_3_4_13_tsni, append_inst_22_2_3_4_14_tsni, lambda_inst_23_24_tsni, findallawards_inst_23_24_1_tsni, lambda_inst_23_24_1_2_tsni, findawards_inst_23_24_1_2_3_tsni, awards_inst_23_24_1_2_3_4_tsni, award$_inst_23_24_1_2_3_4_11_tsni, sort_inst_23_24_1_2_3_4_11_8_tsni, qsort_inst_23_24_1_2_3_4_11_8_9_tsni, qpart_inst_23_24_1_2_3_4_11_8_9_tsni, rqsort_inst_23_24_1_2_3_4_11_8_9_tsni, rqpart_inst_23_24_1_2_3_4_11_8_9_tsni, award$_inst_23_24_1_2_3_4_10_tsni, sort_inst_23_24_1_2_3_4_10_8_tsni, qsort_inst_23_24_1_2_3_4_10_8_9_tsni, qpart_inst_23_24_1_2_3_4_10_8_9_tsni, rqsort_inst_23_24_1_2_3_4_10_8_9_tsni, rqpart_inst_23_24_1_2_3_4_10_8_9_tsni, map_inst_23_24_1_2_3_4_10_12_tsni, award$_inst_23_24_1_2_3_4_7_tsni, sort_inst_23_24_1_2_3_4_7_8_tsni, qsort_inst_23_24_1_2_3_4_7_8_9_tsni, qpart_inst_23_24_1_2_3_4_7_8_9_tsni, rqsort_inst_23_24_1_2_3_4_7_8_9_tsni, rqpart_inst_23_24_1_2_3_4_7_8_9_tsni, map_inst_23_24_1_2_3_4_7_12_tsni, perms_inst_23_24_1_2_3_4_5_tsni, map_inst_23_24_1_2_3_4_5_6_tsni, map_inst_23_24_1_2_3_4_11_12_tsni, append_inst_23_24_1_2_3_4_13_tsni, append_inst_23_24_1_2_3_4_14_tsni, enumFromTo_inst_23_25_tsni, testAwards_nofib_inst_26_27_tsni, enumFromTo_inst_26_27_25_tsni, lambda_inst_26_27_24_tsni, findallawards_inst_26_27_24_1_tsni, lambda_inst_26_27_24_1_2_tsni, findawards_inst_26_27_24_1_2_3_tsni, awards_inst_26_27_24_1_2_3_4_tsni, perms_inst_26_27_24_1_2_3_4_5_tsni, map_inst_26_27_24_1_2_3_4_5_6_tsni, award$_inst_26_27_24_1_2_3_4_7_tsni, sort_inst_26_27_24_1_2_3_4_7_8_tsni, qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni, qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni, rqsort_inst_26_27_24_1_2_3_4_7_8_9_tsni, rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni, award$_inst_26_27_24_1_2_3_4_10_tsni, sort_inst_26_27_24_1_2_3_4_10_8_tsni, qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni, qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni, rqsort_inst_26_27_24_1_2_3_4_10_8_9_tsni, rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni, award$_inst_26_27_24_1_2_3_4_11_tsni, sort_inst_26_27_24_1_2_3_4_11_8_tsni, qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni, qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni, rqsort_inst_26_27_24_1_2_3_4_11_8_9_tsni, rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni, map_inst_26_27_24_1_2_3_4_10_12_tsni, map_inst_26_27_24_1_2_3_4_7_12_tsni, append_inst_26_27_24_1_2_3_4_13_tsni, map_inst_26_27_24_1_2_3_4_11_12_tsni, append_inst_26_27_24_1_2_3_4_14_tsni, append_inst_0_1_2_3_4_5_28_tsni, append_inst_15_3_4_5_28_tsni, map_inst_16_12_tsni, map_inst_17_18_12_tsni, append_inst_19_28_tsni, append_inst_20_5_28_tsni, map_inst_20_11_12_tsni, append_inst_20_13_tsni, append_inst_20_14_tsni, append_inst_21_4_5_28_tsni, append_inst_22_2_3_4_5_28_tsni, append_inst_23_24_1_2_3_4_5_28_tsni, map_inst_23_29_tsni, map_inst_26_27_29_tsni, append_inst_26_27_24_1_2_3_4_5_28_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni, match_scrut_arm_Cons_inst_0_1_2_3_tsni, match_xs_arm_Cons_inst_15_3_4_7_12_tsni, match_xs_arm_Cons_inst_15_3_4_10_12_tsni, match_xs_arm_Cons_inst_15_3_4_11_12_tsni, match_scrut_arm_Cons_inst_15_3_tsni, match_xs_arm_Cons_inst_16_12_tsni, match_xs_arm_Cons_inst_17_18_12_tsni, match_xs_arm_Cons_inst_20_7_12_tsni, match_xs_arm_Cons_inst_20_10_12_tsni, match_xs_arm_Cons_inst_20_11_12_tsni, match_xs_arm_Cons_inst_21_4_11_12_tsni, match_xs_arm_Cons_inst_21_4_10_12_tsni, match_xs_arm_Cons_inst_21_4_7_12_tsni, match_scrut_arm_Cons_inst_21_tsni, match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni, match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni, match_scrut_arm_Cons_inst_22_2_3_tsni, match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni, match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni, match_scrut_arm_Cons_inst_23_24_1_2_3_tsni, match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni, match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni, match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni, match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni;
match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni = function match_xs_arm_Cons_inst_0_1_2_3_4_7_12_tsni(f, _deforest_Cons_head_inst_0_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_7_12_tsni) {
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
    tmp2 = append_inst_0_1_2_3_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_0_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni = function match_xs_arm_Cons_inst_0_1_2_3_4_10_12_tsni(f, _deforest_Cons_head_inst_0_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_10_12_tsni) {
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
};
match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni = function match_xs_arm_Cons_inst_0_1_2_3_4_11_12_tsni(f, _deforest_Cons_head_inst_0_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_11_12_tsni) {
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
};
match_scrut_arm_Cons_inst_0_1_2_3_tsni = function match_scrut_arm_Cons_inst_0_1_2_3_tsni(scores, _deforest_Cons_head_inst_0_1_2_3_tsni, _deforest_Cons_tail_inst_0_1_2_3_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_0_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = findawards_inst_0_1_2_3_tsni(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_15_3_4_7_12_tsni = function match_xs_arm_Cons_inst_15_3_4_7_12_tsni(f, _deforest_Cons_head_inst_15_3_4_7_12_tsni, _deforest_Cons_tail_inst_15_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_15_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_15_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_15_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_15_3_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_15_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_15_3_4_10_12_tsni = function match_xs_arm_Cons_inst_15_3_4_10_12_tsni(f, _deforest_Cons_head_inst_15_3_4_10_12_tsni, _deforest_Cons_tail_inst_15_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_15_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_15_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_15_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_15_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_15_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_15_3_4_11_12_tsni = function match_xs_arm_Cons_inst_15_3_4_11_12_tsni(f, _deforest_Cons_head_inst_15_3_4_11_12_tsni, _deforest_Cons_tail_inst_15_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_15_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_15_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_15_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_15_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_scrut_arm_Cons_inst_15_3_tsni = function match_scrut_arm_Cons_inst_15_3_tsni(scores, _deforest_Cons_head_inst_15_3_tsni, _deforest_Cons_tail_inst_15_3_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_15_3_tsni;
  param1 = _deforest_Cons_tail_inst_15_3_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = findawards_inst_15_3_tsni(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_16_12_tsni = function match_xs_arm_Cons_inst_16_12_tsni(f, _deforest_Cons_head_inst_16_12_tsni, _deforest_Cons_tail_inst_16_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_16_12_tsni;
  param1 = _deforest_Cons_tail_inst_16_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_16_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Cons_inst_17_18_12_tsni = function match_xs_arm_Cons_inst_17_18_12_tsni(f, _deforest_Cons_head_inst_17_18_12_tsni, _deforest_Cons_tail_inst_17_18_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_17_18_12_tsni;
  param1 = _deforest_Cons_tail_inst_17_18_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_17_18_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Cons_inst_20_7_12_tsni = function match_xs_arm_Cons_inst_20_7_12_tsni(f, _deforest_Cons_head_inst_20_7_12_tsni, _deforest_Cons_tail_inst_20_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_20_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_20_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_20_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_20_14_tsni(xs1, ys);
    return NofibPrelude.Cons(x1, tmp2)
  }
};
match_xs_arm_Cons_inst_20_10_12_tsni = function match_xs_arm_Cons_inst_20_10_12_tsni(f, _deforest_Cons_head_inst_20_10_12_tsni, _deforest_Cons_tail_inst_20_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_20_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_20_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_20_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_20_13_tsni(xs1, ys);
    return NofibPrelude.Cons(x1, tmp2)
  }
};
match_xs_arm_Cons_inst_20_11_12_tsni = function match_xs_arm_Cons_inst_20_11_12_tsni(f, _deforest_Cons_head_inst_20_11_12_tsni, _deforest_Cons_tail_inst_20_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_20_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_20_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_20_11_12_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
};
match_xs_arm_Cons_inst_21_4_11_12_tsni = function match_xs_arm_Cons_inst_21_4_11_12_tsni(f, _deforest_Cons_head_inst_21_4_11_12_tsni, _deforest_Cons_tail_inst_21_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_21_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_21_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_21_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_21_4_10_12_tsni = function match_xs_arm_Cons_inst_21_4_10_12_tsni(f, _deforest_Cons_head_inst_21_4_10_12_tsni, _deforest_Cons_tail_inst_21_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_21_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_21_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_21_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_21_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_21_4_7_12_tsni = function match_xs_arm_Cons_inst_21_4_7_12_tsni(f, _deforest_Cons_head_inst_21_4_7_12_tsni, _deforest_Cons_tail_inst_21_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_21_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_21_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_21_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_21_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_21_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_scrut_arm_Cons_inst_21_tsni = function match_scrut_arm_Cons_inst_21_tsni(scores, _deforest_Cons_head_inst_21_tsni, _deforest_Cons_tail_inst_21_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_21_tsni;
  param1 = _deforest_Cons_tail_inst_21_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = awards.findawards(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni = function match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni(f, _deforest_Cons_head_inst_22_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_22_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_22_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni = function match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni(f, _deforest_Cons_head_inst_22_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_22_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_22_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_22_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni = function match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni(f, _deforest_Cons_head_inst_22_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_22_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_22_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_22_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_22_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_22_2_3_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_22_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_scrut_arm_Cons_inst_22_2_3_tsni = function match_scrut_arm_Cons_inst_22_2_3_tsni(scores, _deforest_Cons_head_inst_22_2_3_tsni, _deforest_Cons_tail_inst_22_2_3_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_22_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_22_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = findawards_inst_22_2_3_tsni(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni = function match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head_inst_23_24_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_23_24_1_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_24_1_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_24_1_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_23_24_1_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni = function match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head_inst_23_24_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_23_24_1_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_24_1_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_24_1_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_23_24_1_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_23_24_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni = function match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head_inst_23_24_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_23_24_1_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_24_1_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_23_24_1_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_23_24_1_2_3_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_23_24_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_scrut_arm_Cons_inst_23_24_1_2_3_tsni = function match_scrut_arm_Cons_inst_23_24_1_2_3_tsni(scores, _deforest_Cons_head_inst_23_24_1_2_3_tsni, _deforest_Cons_tail_inst_23_24_1_2_3_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_23_24_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = findawards_inst_23_24_1_2_3_tsni(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni = function match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head_inst_26_27_24_1_2_3_4_7_12_tsni, _deforest_Cons_tail_inst_26_27_24_1_2_3_4_7_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_26_27_24_1_2_3_4_7_12_tsni;
  param1 = _deforest_Cons_tail_inst_26_27_24_1_2_3_4_7_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_26_27_24_1_2_3_4_7_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_26_27_24_1_2_3_4_14_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni = function match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head_inst_26_27_24_1_2_3_4_10_12_tsni, _deforest_Cons_tail_inst_26_27_24_1_2_3_4_10_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_26_27_24_1_2_3_4_10_12_tsni;
  param1 = _deforest_Cons_tail_inst_26_27_24_1_2_3_4_10_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_26_27_24_1_2_3_4_10_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (ys) => {
    let param01, param11, x1, xs1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = append_inst_26_27_24_1_2_3_4_13_tsni(xs1, ys);
    _deforest_Cons_head1 = x1;
    _deforest_Cons_tail1 = tmp2;
    return (scores) => {
      return match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni(scores, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  }
};
match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni = function match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head_inst_26_27_24_1_2_3_4_11_12_tsni, _deforest_Cons_tail_inst_26_27_24_1_2_3_4_11_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_26_27_24_1_2_3_4_11_12_tsni;
  param1 = _deforest_Cons_tail_inst_26_27_24_1_2_3_4_11_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_26_27_24_1_2_3_4_11_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (scores) => {
    return match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni(scores, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni = function match_scrut_arm_Cons_inst_26_27_24_1_2_3_tsni(scores, _deforest_Cons_head_inst_26_27_24_1_2_3_tsni, _deforest_Cons_tail_inst_26_27_24_1_2_3_tsni) {
  let param0, param1, head_, tail_, first1, first0, award1, first11, first01, sum_, perm, arr, arr1, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_26_27_24_1_2_3_tsni;
  param1 = _deforest_Cons_tail_inst_26_27_24_1_2_3_tsni;
  head_ = param0;
  tail_ = param1;
  if (globalThis.Array.isArray(head_) && head_.length === 2) {
    first0 = head_[0];
    first1 = head_[1];
    award1 = first0;
    if (globalThis.Array.isArray(first1) && first1.length === 2) {
      first01 = first1[0];
      first11 = first1[1];
      sum_ = first01;
      perm = first11;
      arr = [
        sum_,
        perm
      ];
      arr1 = [
        award1,
        arr
      ];
      tmp = awards.listDiff(scores, perm);
      tmp1 = findawards_inst_26_27_24_1_2_3_tsni(tmp);
      return NofibPrelude.Cons(arr1, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
findallawards_inst_0_1_tsni = function findallawards_inst_0_1_tsni(competitors) {
  let tmp;
  tmp = lambda_inst_0_1_2_tsni;
  return NofibPrelude.map(tmp, competitors)
};
lambda_inst_0_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    name = first0;
    scores = first1;
    tmp = findawards_inst_0_1_2_3_tsni(scores);
    arr = [
      name,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
findawards_inst_0_1_2_3_tsni = function findawards_inst_0_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_0_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_0_1_2_3_4_tsni = function awards_inst_0_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_0_1_2_3_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_0_1_2_3_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_0_1_2_3_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_0_1_2_3_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_0_1_2_3_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_0_1_2_3_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_0_1_2_3_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_0_1_2_3_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_0_1_2_3_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_0_1_2_3_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_0_1_2_3_4_13_tsni(tmp3, tmp4);
  return append_inst_0_1_2_3_4_14_tsni(tmp2, tmp5)
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
        return append_inst_0_1_2_3_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
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
      tmp2 = append_inst_0_1_2_3_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_0_1_2_3_4_7_tsni = function award$_inst_0_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_7_8_tsni = function sort_inst_0_1_2_3_4_7_8_tsni(l) {
  return qsort_inst_0_1_2_3_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
  }
};
award$_inst_0_1_2_3_4_10_tsni = function award$_inst_0_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_10_8_tsni = function sort_inst_0_1_2_3_4_10_8_tsni(l) {
  return qsort_inst_0_1_2_3_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
  }
};
award$_inst_0_1_2_3_4_11_tsni = function award$_inst_0_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_0_1_2_3_4_11_8_tsni = function sort_inst_0_1_2_3_4_11_8_tsni(l) {
  return qsort_inst_0_1_2_3_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
    throw new globalThis.Error("match error");
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
map_inst_0_1_2_3_4_11_12_tsni = function map_inst_0_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_2_3_4_14_tsni = function append_inst_0_1_2_3_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
findawards_inst_15_3_tsni = function findawards_inst_15_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_15_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_15_3_4_tsni = function awards_inst_15_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_15_3_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_15_3_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_15_3_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_15_3_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_15_3_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_15_3_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_15_3_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_15_3_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_15_3_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_15_3_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_15_3_4_13_tsni(tmp3, tmp4);
  return append_inst_15_3_4_14_tsni(tmp2, tmp5)
};
perms_inst_15_3_4_5_tsni = function perms_inst_15_3_4_5_tsni(m, nns) {
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
        tmp1 = perms_inst_15_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_15_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_15_3_4_5_tsni(m, ns);
        return append_inst_15_3_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_15_3_4_5_6_tsni = function map_inst_15_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_15_3_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_15_3_4_7_tsni = function award$_inst_15_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_15_3_4_7_8_tsni = function sort_inst_15_3_4_7_8_tsni(l) {
  return qsort_inst_15_3_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_15_3_4_7_8_9_tsni = function qsort_inst_15_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_15_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_15_3_4_7_8_9_tsni = function qpart_inst_15_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_15_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_15_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_15_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_15_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_15_3_4_7_8_9_tsni = function rqsort_inst_15_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_15_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_15_3_4_7_8_9_tsni = function rqpart_inst_15_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_15_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_15_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_15_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_15_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_15_3_4_10_tsni = function award$_inst_15_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_15_3_4_10_8_tsni = function sort_inst_15_3_4_10_8_tsni(l) {
  return qsort_inst_15_3_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_15_3_4_10_8_9_tsni = function qsort_inst_15_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_15_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_15_3_4_10_8_9_tsni = function qpart_inst_15_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_15_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_15_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_15_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_15_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_15_3_4_10_8_9_tsni = function rqsort_inst_15_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_15_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_15_3_4_10_8_9_tsni = function rqpart_inst_15_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_15_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_15_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_15_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_15_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_15_3_4_11_tsni = function award$_inst_15_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_15_3_4_11_8_tsni = function sort_inst_15_3_4_11_8_tsni(l) {
  return qsort_inst_15_3_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
};
qsort_inst_15_3_4_11_8_9_tsni = function qsort_inst_15_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_15_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_15_3_4_11_8_9_tsni = function qpart_inst_15_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_15_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_15_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_15_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_15_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_15_3_4_11_8_9_tsni = function rqsort_inst_15_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_15_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_15_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_15_3_4_11_8_9_tsni = function rqpart_inst_15_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_15_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_15_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_15_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_15_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_15_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_15_3_4_10_12_tsni = function map_inst_15_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_15_3_4_7_12_tsni = function map_inst_15_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_15_3_4_13_tsni = function append_inst_15_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_15_3_4_11_12_tsni = function map_inst_15_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_15_3_4_14_tsni = function append_inst_15_3_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
sort_inst_16_8_tsni = function sort_inst_16_8_tsni(l) {
  return qsort_inst_16_8_9_tsni(lambda1, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_16_8_9_tsni = function qsort_inst_16_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_16_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_16_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_16_8_9_tsni = function qpart_inst_16_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_16_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_16_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_16_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_16_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_16_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_16_8_9_tsni = function rqsort_inst_16_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_16_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_16_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_16_8_9_tsni = function rqpart_inst_16_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_16_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_16_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_16_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_16_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_16_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_17_18_tsni = function award$_inst_17_18_tsni(sumscores, name_threshold) {
  let first1, first0, name, threshold, tmp, tmp1, lambda$this;
  if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
    first0 = name_threshold[0];
    first1 = name_threshold[1];
    name = first0;
    threshold = first1;
    tmp = atleast$(sumscores, threshold);
    tmp1 = sort_inst_17_18_8_tsni(tmp);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_17_18_12_tsni(lambda$this, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
sort_inst_17_18_8_tsni = function sort_inst_17_18_8_tsni(l) {
  return qsort_inst_17_18_8_9_tsni(lambda1, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_17_18_8_9_tsni = function qsort_inst_17_18_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_17_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_17_18_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_17_18_8_9_tsni = function qpart_inst_17_18_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_17_18_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_17_18_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_17_18_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_17_18_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_17_18_8_9_tsni = function rqsort_inst_17_18_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_17_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_17_18_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_17_18_8_9_tsni = function rqpart_inst_17_18_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_17_18_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_17_18_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_17_18_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_17_18_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_17_18_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_19_6_tsni = function map_inst_19_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_19_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_19_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
perms_inst_20_5_tsni = function perms_inst_20_5_tsni(m, nns) {
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
        tmp1 = perms_inst_20_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_20_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_20_5_tsni(m, ns);
        return append_inst_20_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_20_5_6_tsni = function map_inst_20_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_20_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_20_7_tsni = function award$_inst_20_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_20_7_8_tsni = function sort_inst_20_7_8_tsni(l) {
  return qsort_inst_20_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_20_7_8_9_tsni = function qsort_inst_20_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_20_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_20_7_8_9_tsni = function qpart_inst_20_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_20_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_20_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_20_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_20_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_20_7_8_9_tsni = function rqsort_inst_20_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_20_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_20_7_8_9_tsni = function rqpart_inst_20_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_20_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_20_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_20_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_20_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_20_10_tsni = function award$_inst_20_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_20_10_8_tsni = function sort_inst_20_10_8_tsni(l) {
  return qsort_inst_20_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_20_10_8_9_tsni = function qsort_inst_20_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_20_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_20_10_8_9_tsni = function qpart_inst_20_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_20_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_20_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_20_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_20_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_20_10_8_9_tsni = function rqsort_inst_20_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_20_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_20_10_8_9_tsni = function rqpart_inst_20_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_20_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_20_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_20_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_20_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_20_11_tsni = function award$_inst_20_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_20_11_8_tsni = function sort_inst_20_11_8_tsni(l) {
  return qsort_inst_20_11_8_9_tsni(lambda1, l, (f) => {
    return NofibPrelude.Nil
  })
};
qsort_inst_20_11_8_9_tsni = function qsort_inst_20_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_20_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_20_11_8_9_tsni = function qpart_inst_20_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_20_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_20_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_20_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_20_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_20_11_8_9_tsni = function rqsort_inst_20_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_20_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_20_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_20_11_8_9_tsni = function rqpart_inst_20_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_20_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_20_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_20_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_20_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_20_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_20_10_12_tsni = function map_inst_20_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_20_7_12_tsni = function map_inst_20_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
awards_inst_21_4_tsni = function awards_inst_21_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_21_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_21_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_21_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_21_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_21_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_21_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_21_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_21_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_21_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_21_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_21_4_13_tsni(tmp3, tmp4);
  return append_inst_21_4_14_tsni(tmp2, tmp5)
};
award$_inst_21_4_11_tsni = function award$_inst_21_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_21_4_11_8_tsni = function sort_inst_21_4_11_8_tsni(l) {
  return qsort_inst_21_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
};
qsort_inst_21_4_11_8_9_tsni = function qsort_inst_21_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_21_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_21_4_11_8_9_tsni = function qpart_inst_21_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_21_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_21_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_21_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_21_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_21_4_11_8_9_tsni = function rqsort_inst_21_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_21_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_21_4_11_8_9_tsni = function rqpart_inst_21_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_21_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_21_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_21_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_21_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_21_4_10_tsni = function award$_inst_21_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_21_4_10_8_tsni = function sort_inst_21_4_10_8_tsni(l) {
  return qsort_inst_21_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_21_4_10_8_9_tsni = function qsort_inst_21_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_21_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_21_4_10_8_9_tsni = function qpart_inst_21_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_21_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_21_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_21_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_21_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_21_4_10_8_9_tsni = function rqsort_inst_21_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_21_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_21_4_10_8_9_tsni = function rqpart_inst_21_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_21_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_21_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_21_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_21_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_21_4_10_12_tsni = function map_inst_21_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_21_4_7_tsni = function award$_inst_21_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_21_4_7_8_tsni = function sort_inst_21_4_7_8_tsni(l) {
  return qsort_inst_21_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_21_4_7_8_9_tsni = function qsort_inst_21_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_21_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_21_4_7_8_9_tsni = function qpart_inst_21_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_21_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_21_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_21_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_21_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_21_4_7_8_9_tsni = function rqsort_inst_21_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_21_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_21_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_21_4_7_8_9_tsni = function rqpart_inst_21_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_21_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_21_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_21_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_21_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_21_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_21_4_7_12_tsni = function map_inst_21_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_21_4_5_tsni = function perms_inst_21_4_5_tsni(m, nns) {
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
        tmp1 = perms_inst_21_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_21_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_21_4_5_tsni(m, ns);
        return append_inst_21_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_21_4_5_6_tsni = function map_inst_21_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_21_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_21_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_21_4_11_12_tsni = function map_inst_21_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_21_4_13_tsni = function append_inst_21_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_4_14_tsni = function append_inst_21_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_22_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    name = first0;
    scores = first1;
    tmp = findawards_inst_22_2_3_tsni(scores);
    arr = [
      name,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
findawards_inst_22_2_3_tsni = function findawards_inst_22_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_22_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_22_2_3_4_tsni = function awards_inst_22_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_22_2_3_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_22_2_3_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_22_2_3_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_22_2_3_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_22_2_3_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_22_2_3_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_22_2_3_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_22_2_3_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_22_2_3_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_22_2_3_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_22_2_3_4_13_tsni(tmp3, tmp4);
  return append_inst_22_2_3_4_14_tsni(tmp2, tmp5)
};
award$_inst_22_2_3_4_11_tsni = function award$_inst_22_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_2_3_4_11_8_tsni = function sort_inst_22_2_3_4_11_8_tsni(l) {
  return qsort_inst_22_2_3_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
};
qsort_inst_22_2_3_4_11_8_9_tsni = function qsort_inst_22_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_22_2_3_4_11_8_9_tsni = function qpart_inst_22_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_22_2_3_4_11_8_9_tsni = function rqsort_inst_22_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_22_2_3_4_11_8_9_tsni = function rqpart_inst_22_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_22_2_3_4_10_tsni = function award$_inst_22_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_2_3_4_10_8_tsni = function sort_inst_22_2_3_4_10_8_tsni(l) {
  return qsort_inst_22_2_3_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_22_2_3_4_10_8_9_tsni = function qsort_inst_22_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_22_2_3_4_10_8_9_tsni = function qpart_inst_22_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_22_2_3_4_10_8_9_tsni = function rqsort_inst_22_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_22_2_3_4_10_8_9_tsni = function rqpart_inst_22_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_22_2_3_4_10_12_tsni = function map_inst_22_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_22_2_3_4_7_tsni = function award$_inst_22_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_22_2_3_4_7_8_tsni = function sort_inst_22_2_3_4_7_8_tsni(l) {
  return qsort_inst_22_2_3_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_22_2_3_4_7_8_9_tsni = function qsort_inst_22_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_22_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_22_2_3_4_7_8_9_tsni = function qpart_inst_22_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_22_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_22_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_22_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_22_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_22_2_3_4_7_8_9_tsni = function rqsort_inst_22_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_22_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_22_2_3_4_7_8_9_tsni = function rqpart_inst_22_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_22_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_22_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_22_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_22_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_22_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_22_2_3_4_7_12_tsni = function map_inst_22_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_22_2_3_4_5_tsni = function perms_inst_22_2_3_4_5_tsni(m, nns) {
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
        tmp1 = perms_inst_22_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_22_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_22_2_3_4_5_tsni(m, ns);
        return append_inst_22_2_3_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_22_2_3_4_5_6_tsni = function map_inst_22_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_22_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_22_2_3_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_22_2_3_4_11_12_tsni = function map_inst_22_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_22_2_3_4_13_tsni = function append_inst_22_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_2_3_4_14_tsni = function append_inst_22_2_3_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_23_24_tsni = (undefined, function (x) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  tmp2 = findallawards_inst_23_24_1_tsni(tmp1);
  return Predef.print(tmp2)
});
findallawards_inst_23_24_1_tsni = function findallawards_inst_23_24_1_tsni(competitors) {
  let tmp;
  tmp = lambda_inst_23_24_1_2_tsni;
  return NofibPrelude.map(tmp, competitors)
};
lambda_inst_23_24_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    name = first0;
    scores = first1;
    tmp = findawards_inst_23_24_1_2_3_tsni(scores);
    arr = [
      name,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
findawards_inst_23_24_1_2_3_tsni = function findawards_inst_23_24_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_23_24_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_23_24_1_2_3_4_tsni = function awards_inst_23_24_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_23_24_1_2_3_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_02 = "Gold";
  _deforest_Deforest_Arr_2_12 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_23_24_1_2_3_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_23_24_1_2_3_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_23_24_1_2_3_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_23_24_1_2_3_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_23_24_1_2_3_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_23_24_1_2_3_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_0 = "Bronze";
  _deforest_Deforest_Arr_2_1 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_23_24_1_2_3_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_23_24_1_2_3_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_23_24_1_2_3_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_23_24_1_2_3_4_13_tsni(tmp3, tmp4);
  return append_inst_23_24_1_2_3_4_14_tsni(tmp2, tmp5)
};
award$_inst_23_24_1_2_3_4_11_tsni = function award$_inst_23_24_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_24_1_2_3_4_11_8_tsni = function sort_inst_23_24_1_2_3_4_11_8_tsni(l) {
  return qsort_inst_23_24_1_2_3_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
};
qsort_inst_23_24_1_2_3_4_11_8_9_tsni = function qsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_23_24_1_2_3_4_11_8_9_tsni = function qpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_23_24_1_2_3_4_11_8_9_tsni = function rqsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_23_24_1_2_3_4_11_8_9_tsni = function rqpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_24_1_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_24_1_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_23_24_1_2_3_4_10_tsni = function award$_inst_23_24_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_24_1_2_3_4_10_8_tsni = function sort_inst_23_24_1_2_3_4_10_8_tsni(l) {
  return qsort_inst_23_24_1_2_3_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_23_24_1_2_3_4_10_8_9_tsni = function qsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_23_24_1_2_3_4_10_8_9_tsni = function qpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_23_24_1_2_3_4_10_8_9_tsni = function rqsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_23_24_1_2_3_4_10_8_9_tsni = function rqpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_24_1_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_24_1_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_24_1_2_3_4_10_12_tsni = function map_inst_23_24_1_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
award$_inst_23_24_1_2_3_4_7_tsni = function award$_inst_23_24_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_23_24_1_2_3_4_7_8_tsni = function sort_inst_23_24_1_2_3_4_7_8_tsni(l) {
  return qsort_inst_23_24_1_2_3_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_23_24_1_2_3_4_7_8_9_tsni = function qsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_23_24_1_2_3_4_7_8_9_tsni = function qpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_23_24_1_2_3_4_7_8_9_tsni = function rqsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_23_24_1_2_3_4_7_8_9_tsni = function rqpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_23_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_23_24_1_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_23_24_1_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_24_1_2_3_4_7_12_tsni = function map_inst_23_24_1_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
perms_inst_23_24_1_2_3_4_5_tsni = function perms_inst_23_24_1_2_3_4_5_tsni(m, nns) {
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
        tmp1 = perms_inst_23_24_1_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_23_24_1_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_23_24_1_2_3_4_5_tsni(m, ns);
        return append_inst_23_24_1_2_3_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_23_24_1_2_3_4_5_6_tsni = function map_inst_23_24_1_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_23_24_1_2_3_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_23_24_1_2_3_4_11_12_tsni = function map_inst_23_24_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_23_24_1_2_3_4_13_tsni = function append_inst_23_24_1_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_23_24_1_2_3_4_14_tsni = function append_inst_23_24_1_2_3_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
enumFromTo_inst_23_25_tsni = function enumFromTo_inst_23_25_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_23_25_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_23_29_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testAwards_nofib_inst_26_27_tsni = function testAwards_nofib_inst_26_27_tsni(n) {
  let tmp, tmp1;
  tmp = lambda_inst_26_27_24_tsni;
  tmp1 = enumFromTo_inst_26_27_25_tsni(1, n);
  return map_inst_26_27_29_tsni(tmp, tmp1)
};
enumFromTo_inst_26_27_25_tsni = function enumFromTo_inst_26_27_25_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_26_27_25_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_26_27_29_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
lambda_inst_26_27_24_tsni = (undefined, function (x) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  tmp2 = findallawards_inst_26_27_24_1_tsni(tmp1);
  return Predef.print(tmp2)
});
findallawards_inst_26_27_24_1_tsni = function findallawards_inst_26_27_24_1_tsni(competitors) {
  let tmp;
  tmp = lambda_inst_26_27_24_1_2_tsni;
  return NofibPrelude.map(tmp, competitors)
};
lambda_inst_26_27_24_1_2_tsni = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    name = first0;
    scores = first1;
    tmp = findawards_inst_26_27_24_1_2_3_tsni(scores);
    arr = [
      name,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
findawards_inst_26_27_24_1_2_3_tsni = function findawards_inst_26_27_24_1_2_3_tsni(scores) {
  let scrut;
  scrut = awards_inst_26_27_24_1_2_3_4_tsni(scores);
  return runtime.safeCall(scrut(scores))
};
awards_inst_26_27_24_1_2_3_4_tsni = function awards_inst_26_27_24_1_2_3_4_tsni(scores) {
  let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  tmp = perms_inst_26_27_24_1_2_3_4_5_tsni(3, scores);
  tmp1 = NofibPrelude.map(lambda11, tmp);
  sumscores = tmp1;
  _deforest_Deforest_Arr_2_0 = "Gold";
  _deforest_Deforest_Arr_2_1 = 70;
  arr = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_26_27_24_1_2_3_4_7_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_26_27_24_1_2_3_4_7_12_tsni(lambda$this, tmp7)
  };
  tmp2 = award$_inst_26_27_24_1_2_3_4_7_tsni(sumscores, arr);
  _deforest_Deforest_Arr_2_01 = "Silver";
  _deforest_Deforest_Arr_2_11 = 60;
  arr1 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_26_27_24_1_2_3_4_10_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_26_27_24_1_2_3_4_10_12_tsni(lambda$this, tmp7)
  };
  tmp3 = award$_inst_26_27_24_1_2_3_4_10_tsni(sumscores, arr1);
  _deforest_Deforest_Arr_2_02 = "Bronze";
  _deforest_Deforest_Arr_2_12 = 50;
  arr2 = (sumscores1) => {
    let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
    first0 = _deforest_Deforest_Arr_2_02;
    first1 = _deforest_Deforest_Arr_2_12;
    name = first0;
    threshold = first1;
    tmp6 = atleast$(sumscores1, threshold);
    tmp7 = sort_inst_26_27_24_1_2_3_4_11_8_tsni(tmp6);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_26_27_24_1_2_3_4_11_12_tsni(lambda$this, tmp7)
  };
  tmp4 = award$_inst_26_27_24_1_2_3_4_11_tsni(sumscores, arr2);
  tmp5 = append_inst_26_27_24_1_2_3_4_13_tsni(tmp3, tmp4);
  return append_inst_26_27_24_1_2_3_4_14_tsni(tmp2, tmp5)
};
perms_inst_26_27_24_1_2_3_4_5_tsni = function perms_inst_26_27_24_1_2_3_4_5_tsni(m, nns) {
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
        tmp1 = perms_inst_26_27_24_1_2_3_4_5_tsni(tmp, ns);
        lambda$this = runtime.safeCall(lambda8(n));
        tmp2 = map_inst_26_27_24_1_2_3_4_5_6_tsni(lambda$this, tmp1);
        tmp3 = perms_inst_26_27_24_1_2_3_4_5_tsni(m, ns);
        return append_inst_26_27_24_1_2_3_4_5_28_tsni(tmp2, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
map_inst_26_27_24_1_2_3_4_5_6_tsni = function map_inst_26_27_24_1_2_3_4_5_6_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_27_24_1_2_3_4_5_6_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = append_inst_26_27_24_1_2_3_4_5_28_tsni(xs2, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_26_27_24_1_2_3_4_7_tsni = function award$_inst_26_27_24_1_2_3_4_7_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_26_27_24_1_2_3_4_7_8_tsni = function sort_inst_26_27_24_1_2_3_4_7_8_tsni(l) {
  return qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni = function qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni = function qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_26_27_24_1_2_3_4_7_8_9_tsni = function rqsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni = function rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_7_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_26_27_24_1_2_3_4_7_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_26_27_24_1_2_3_4_10_tsni = function award$_inst_26_27_24_1_2_3_4_10_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_26_27_24_1_2_3_4_10_8_tsni = function sort_inst_26_27_24_1_2_3_4_10_8_tsni(l) {
  return qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(lambda1, l, (f) => {
    return (ys) => {
      return ys
    }
  })
};
qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni = function qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni = function qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_26_27_24_1_2_3_4_10_8_9_tsni = function rqsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni = function rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_10_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_26_27_24_1_2_3_4_10_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
award$_inst_26_27_24_1_2_3_4_11_tsni = function award$_inst_26_27_24_1_2_3_4_11_tsni(sumscores, name_threshold) {
  return runtime.safeCall(name_threshold(sumscores))
};
sort_inst_26_27_24_1_2_3_4_11_8_tsni = function sort_inst_26_27_24_1_2_3_4_11_8_tsni(l) {
  return qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(lambda1, l, (f) => {
    return (scores) => {
      return NofibPrelude.Nil
    }
  })
};
qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni = function qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni = function qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, ys, rlt, rge, r) {
  let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (ys instanceof NofibPrelude.Nil.class) {
    tmp = rqsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, rge, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return rqsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, rlt, tmp1)
  } else if (ys instanceof NofibPrelude.Cons.class) {
    param0 = ys.head;
    param1 = ys.tail;
    y = param0;
    ys1 = param1;
    scrut = runtime.safeCall(le(x, y));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rge);
      return qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, ys1, rlt, tmp2, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rlt);
      return qpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, ys1, tmp3, rge, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqsort_inst_26_27_24_1_2_3_4_11_8_9_tsni = function rqsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, ls, r) {
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
        return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      x = param0;
      xs = param1;
      return rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni = function rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, yss, rle, rgt, r) {
  let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail;
  if (yss instanceof NofibPrelude.Nil.class) {
    tmp = qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, rgt, r);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_26_27_24_1_2_3_4_11_12_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return qsort_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, rle, tmp1)
  } else if (yss instanceof NofibPrelude.Cons.class) {
    param0 = yss.head;
    param1 = yss.tail;
    y = param0;
    ys = param1;
    scrut = runtime.safeCall(le(y, x));
    if (scrut === true) {
      tmp2 = NofibPrelude.Cons(y, rle);
      return rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, ys, tmp2, rgt, r)
    } else {
      tmp3 = NofibPrelude.Cons(y, rgt);
      return rqpart_inst_26_27_24_1_2_3_4_11_8_9_tsni(le, x, ys, rle, tmp3, r)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_26_27_24_1_2_3_4_10_12_tsni = function map_inst_26_27_24_1_2_3_4_10_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_26_27_24_1_2_3_4_7_12_tsni = function map_inst_26_27_24_1_2_3_4_7_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_26_27_24_1_2_3_4_13_tsni = function append_inst_26_27_24_1_2_3_4_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_26_27_24_1_2_3_4_11_12_tsni = function map_inst_26_27_24_1_2_3_4_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_26_27_24_1_2_3_4_14_tsni = function append_inst_26_27_24_1_2_3_4_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_3_4_5_28_tsni = function append_inst_0_1_2_3_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_15_3_4_5_28_tsni = function append_inst_15_3_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_16_12_tsni = function map_inst_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_17_18_12_tsni = function map_inst_17_18_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_19_28_tsni = function append_inst_19_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_5_28_tsni = function append_inst_20_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_20_11_12_tsni = function map_inst_20_11_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_20_13_tsni = function append_inst_20_13_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_14_tsni = function append_inst_20_14_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_21_4_5_28_tsni = function append_inst_21_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_22_2_3_4_5_28_tsni = function append_inst_22_2_3_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_23_24_1_2_3_4_5_28_tsni = function append_inst_23_24_1_2_3_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_23_29_tsni = function map_inst_23_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_26_27_29_tsni = function map_inst_26_27_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_26_27_24_1_2_3_4_5_28_tsni = function append_inst_26_27_24_1_2_3_4_5_28_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda13 = (undefined, function (x) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.intMod(x, 100);
  tmp1 = awards1.competitors(tmp);
  tmp2 = findallawards_inst_0_1_tsni(tmp1);
  return Predef.print(tmp2)
});
lambda12 = (undefined, function (caseScrut) {
  let first1, first0, name, scores, tmp, arr;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    name = first0;
    scores = first1;
    tmp = findawards_inst_15_3_tsni(scores);
    arr = [
      name,
      tmp
    ];
    return arr
  } else {
    throw new globalThis.Error("match error");
  }
});
lambda$2 = function lambda$(threshold, caseScrut) {
  let first1, first0, sum_, p;
  if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
    first0 = caseScrut[0];
    first1 = caseScrut[1];
    sum_ = first0;
    p = first1;
    return sum_ >= threshold
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda9 = (undefined, function (threshold) {
  return (caseScrut) => {
    return lambda$2(threshold, caseScrut)
  }
});
atleast$ = function atleast$(sumscores, threshold) {
  let tmp;
  tmp = runtime.safeCall(lambda9(threshold));
  return NofibPrelude.filter(tmp, sumscores)
};
atleast = function atleast(sumscores) {
  return (threshold) => {
    return atleast$(sumscores, threshold)
  }
};
lambda$1 = function lambda$(name, ps) {
  let arr;
  arr = [
    name,
    ps
  ];
  return arr
};
lambda10 = (undefined, function (name) {
  return (ps) => {
    return lambda$1(name, ps)
  }
});
award$ = function award$(sumscores, name_threshold) {
  let first1, first0, name, threshold, tmp, tmp1, lambda$this;
  if (globalThis.Array.isArray(name_threshold) && name_threshold.length === 2) {
    first0 = name_threshold[0];
    first1 = name_threshold[1];
    name = first0;
    threshold = first1;
    tmp = atleast$(sumscores, threshold);
    tmp1 = sort_inst_16_8_tsni(tmp);
    lambda$this = runtime.safeCall(lambda10(name));
    return map_inst_16_12_tsni(lambda$this, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
award = function award(sumscores) {
  return (name_threshold) => {
    return award$_inst_17_18_tsni(sumscores, name_threshold)
  }
};
lambda11 = (undefined, function (p) {
  let tmp, arr;
  tmp = NofibPrelude.sum(p);
  arr = [
    tmp,
    p
  ];
  return arr
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
lambda2 = (undefined, function (a, b) {
  return a < b
});
lambda3 = (undefined, function (a, b) {
  return a > b
});
lambda5 = (undefined, function (a, b) {
  return a < b
});
lambda6 = (undefined, function (a, b) {
  return a > b
});
lambda4 = (undefined, function (a, b) {
  return NofibPrelude.ltList(a, b, lambda5, lambda6)
});
lambda1 = (undefined, function (a, b) {
  return NofibPrelude.ltTup2(a, b, lambda2, lambda3, lambda4)
});
lambda = (undefined, function (x, y) {
  return x == y
});
(class awards {
  static {
    awards1 = awards;
  }
  static delete_(xs, e) {
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls) {
    return NofibPrelude.foldl(awards.delete_, a, ls)
  } 
  static qsort(le, ls1, r) {
    let param0, param1, x, xs1, x1;
    if (ls1 instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls1 instanceof NofibPrelude.Cons.class) {
      param0 = ls1.head;
      param1 = ls1.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs1 = param1;
        return awards.qpart(le, x, xs1, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static qpart(le1, x, ys, rlt, rge, r1) {
    let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3;
    if (ys instanceof NofibPrelude.Nil.class) {
      tmp = awards.rqsort(le1, rge, r1);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return awards.rqsort(le1, rlt, tmp1)
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param0 = ys.head;
      param1 = ys.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(le1(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return awards.qpart(le1, x, ys1, rlt, tmp2, r1)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return awards.qpart(le1, x, ys1, tmp3, rge, r1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqsort(le2, ls2, r2) {
    let param0, param1, x1, xs1, x2;
    if (ls2 instanceof NofibPrelude.Nil.class) {
      return r2
    } else if (ls2 instanceof NofibPrelude.Cons.class) {
      param0 = ls2.head;
      param1 = ls2.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x2, r2)
      } else {
        x1 = param0;
        xs1 = param1;
        return awards.rqpart(le2, x1, xs1, NofibPrelude.Nil, NofibPrelude.Nil, r2)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static rqpart(le3, x1, yss, rle, rgt, r3) {
    let param0, param1, y, ys1, scrut, tmp, tmp1, tmp2, tmp3;
    if (yss instanceof NofibPrelude.Nil.class) {
      tmp = awards.qsort(le3, rgt, r3);
      tmp1 = NofibPrelude.Cons(x1, tmp);
      return awards.qsort(le3, rle, tmp1)
    } else if (yss instanceof NofibPrelude.Cons.class) {
      param0 = yss.head;
      param1 = yss.tail;
      y = param0;
      ys1 = param1;
      scrut = runtime.safeCall(le3(y, x1));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return awards.rqpart(le3, x1, ys1, tmp2, rgt, r3)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return awards.rqpart(le3, x1, ys1, rle, tmp3, r3)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sort(l) {
    return awards.qsort(lambda1, l, NofibPrelude.Nil)
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
          tmp2 = map_inst_19_6_tsni(lambda$this, tmp1);
          tmp3 = awards.perms(m, ns);
          return append_inst_19_28_tsni(tmp2, tmp3)
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static awards(scores) {
    let sumscores, tmp, tmp1, arr, tmp2, arr1, tmp3, arr2, tmp4, tmp5, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
    tmp = perms_inst_20_5_tsni(3, scores);
    tmp1 = NofibPrelude.map(lambda11, tmp);
    sumscores = tmp1;
    _deforest_Deforest_Arr_2_0 = "Gold";
    _deforest_Deforest_Arr_2_1 = 70;
    arr = (sumscores1) => {
      let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      name = first0;
      threshold = first1;
      tmp6 = atleast$(sumscores1, threshold);
      tmp7 = sort_inst_20_7_8_tsni(tmp6);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_20_7_12_tsni(lambda$this, tmp7)
    };
    tmp2 = award$_inst_20_7_tsni(sumscores, arr);
    _deforest_Deforest_Arr_2_01 = "Silver";
    _deforest_Deforest_Arr_2_11 = 60;
    arr1 = (sumscores1) => {
      let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      name = first0;
      threshold = first1;
      tmp6 = atleast$(sumscores1, threshold);
      tmp7 = sort_inst_20_10_8_tsni(tmp6);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_20_10_12_tsni(lambda$this, tmp7)
    };
    tmp3 = award$_inst_20_10_tsni(sumscores, arr1);
    _deforest_Deforest_Arr_2_02 = "Bronze";
    _deforest_Deforest_Arr_2_12 = 50;
    arr2 = (sumscores1) => {
      let first1, first0, name, threshold, tmp6, tmp7, lambda$this;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      name = first0;
      threshold = first1;
      tmp6 = atleast$(sumscores1, threshold);
      tmp7 = sort_inst_20_11_8_tsni(tmp6);
      lambda$this = runtime.safeCall(lambda10(name));
      return map_inst_20_11_12_tsni(lambda$this, tmp7)
    };
    tmp4 = award$_inst_20_11_tsni(sumscores, arr2);
    tmp5 = append_inst_20_13_tsni(tmp3, tmp4);
    return append_inst_20_14_tsni(tmp2, tmp5)
  } 
  static findawards(scores1) {
    let scrut;
    scrut = awards_inst_21_4_tsni(scores1);
    return runtime.safeCall(scrut(scores1))
  } 
  static findallawards(competitors) {
    let tmp;
    tmp = lambda_inst_22_2_tsni;
    return NofibPrelude.map(tmp, competitors)
  } 
  static competitors(i) {
    let tmp, arr, tmp1, arr1, tmp2, arr2, tmp3, arr3;
    tmp = NofibPrelude.list(35, 27, 40, i, 34, 21);
    arr = [
      "Simon",
      tmp
    ];
    tmp1 = NofibPrelude.list(23, 19, 45, i, 17, 10, 5, 8, 14);
    arr1 = [
      "Hans",
      tmp1
    ];
    tmp2 = NofibPrelude.list(1, 18, i, 20, 21, 19, 34, 8, 16, 21);
    arr2 = [
      "Phil",
      tmp2
    ];
    tmp3 = NofibPrelude.list(9, 23, 17, 54, i, 41, 9, 18, 14);
    arr3 = [
      "Kevin",
      tmp3
    ];
    return NofibPrelude.list(arr, arr1, arr2, arr3)
  } 
  static testAwards_nofib(n) {
    let tmp, tmp1;
    tmp = lambda_inst_23_24_tsni;
    tmp1 = enumFromTo_inst_23_25_tsni(1, n);
    return map_inst_23_29_tsni(tmp, tmp1)
  } 
  static main() {
    return testAwards_nofib_inst_26_27_tsni(100)
  }
  static toString() { return "awards"; }
});
let awards = awards1; export default awards;
