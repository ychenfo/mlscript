import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let f, chop_, g, f1, f2, square, witness, mTest, primetest1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda$, chop_$, f$, g$, lambda$1, lambda$2, witness$, square$, mTest$, lambda$3, doInput_inst_0_tsni, lambda_inst_0_tsni, doLine_inst_0_1_tsni, multiTest_inst_0_1_2_tsni, mTest$_inst_0_1_2_3_tsni, singleTest_inst_0_1_2_3_4_tsni, random_inst_0_1_2_3_4_5_tsni, uniform_inst_0_1_2_3_4_5_6_tsni, map_inst_0_1_2_3_4_5_6_7_tsni, splitAt_lz_inst_0_1_2_3_4_5_8_tsni, chop_inst_0_1_2_3_4_5_9_tsni, chop_$_inst_0_1_2_3_4_5_9_10_tsni, divMod_inst_0_1_2_3_4_5_9_10_11_tsni, findKQ_inst_0_1_2_3_12_tsni, f_inst_0_1_2_3_12_13_tsni, divMod_inst_0_1_2_3_12_13_14_tsni, doInput_inst_15_tsni, lambda$_inst_15_tsni, doLine_inst_15_1_tsni, multiTest_inst_15_1_2_tsni, mTest$_inst_15_1_2_3_tsni, singleTest_inst_15_1_2_3_4_tsni, random_inst_15_1_2_3_4_5_tsni, uniform_inst_15_1_2_3_4_5_6_tsni, map_inst_15_1_2_3_4_5_6_7_tsni, splitAt_lz_inst_15_1_2_3_4_5_8_tsni, chop_inst_15_1_2_3_4_5_9_tsni, chop_$_inst_15_1_2_3_4_5_9_10_tsni, divMod_inst_15_1_2_3_4_5_9_10_11_tsni, findKQ_inst_15_1_2_3_12_tsni, f_inst_15_1_2_3_12_13_tsni, divMod_inst_15_1_2_3_12_13_14_tsni, findKQ_inst_16_12_tsni, f_inst_16_12_13_tsni, divMod_inst_16_12_13_14_tsni, singleTest_inst_16_4_tsni, random_inst_16_4_5_tsni, chop_inst_16_4_5_9_tsni, chop_$_inst_16_4_5_9_10_tsni, divMod_inst_16_4_5_9_10_11_tsni, splitAt_lz_inst_16_4_5_8_tsni, uniform_inst_16_4_5_6_tsni, map_inst_16_4_5_6_7_tsni, mTest$_inst_17_18_tsni, singleTest_inst_17_18_4_tsni, random_inst_17_18_4_5_tsni, uniform_inst_17_18_4_5_6_tsni, map_inst_17_18_4_5_6_7_tsni, splitAt_lz_inst_17_18_4_5_8_tsni, chop_inst_17_18_4_5_9_tsni, chop_$_inst_17_18_4_5_9_10_tsni, divMod_inst_17_18_4_5_9_10_11_tsni, findKQ_inst_17_18_12_tsni, f_inst_17_18_12_13_tsni, divMod_inst_17_18_12_13_14_tsni, divMod_inst_19_14_tsni, divMod_inst_20_11_tsni, chop_$_inst_21_22_tsni, divMod_inst_21_22_11_tsni, break__inst_23_24_tsni, chop_$_inst_25_10_tsni, divMod_inst_25_10_11_tsni, chop_inst_26_27_tsni, chop_$_inst_26_27_10_tsni, divMod_inst_26_27_10_11_tsni, f_inst_28_13_tsni, divMod_inst_28_13_14_tsni, chop_inst_29_9_tsni, chop_$_inst_29_9_10_tsni, divMod_inst_29_9_10_11_tsni, splitAt_lz_inst_29_8_tsni, uniform_inst_29_6_tsni, map_inst_29_6_7_tsni, random_inst_30_5_tsni, uniform_inst_30_5_6_tsni, map_inst_30_5_6_7_tsni, splitAt_lz_inst_30_5_8_tsni, chop_inst_30_5_9_tsni, chop_$_inst_30_5_9_10_tsni, divMod_inst_30_5_9_10_11_tsni, mTest$_inst_31_3_tsni, singleTest_inst_31_3_4_tsni, random_inst_31_3_4_5_tsni, uniform_inst_31_3_4_5_6_tsni, map_inst_31_3_4_5_6_7_tsni, splitAt_lz_inst_31_3_4_5_8_tsni, chop_inst_31_3_4_5_9_tsni, chop_$_inst_31_3_4_5_9_10_tsni, divMod_inst_31_3_4_5_9_10_11_tsni, findKQ_inst_31_3_12_tsni, f_inst_31_3_12_13_tsni, divMod_inst_31_3_12_13_14_tsni, multiTest_inst_32_2_tsni, mTest$_inst_32_2_3_tsni, findKQ_inst_32_2_3_12_tsni, f_inst_32_2_3_12_13_tsni, divMod_inst_32_2_3_12_13_14_tsni, singleTest_inst_32_2_3_4_tsni, random_inst_32_2_3_4_5_tsni, chop_inst_32_2_3_4_5_9_tsni, chop_$_inst_32_2_3_4_5_9_10_tsni, divMod_inst_32_2_3_4_5_9_10_11_tsni, splitAt_lz_inst_32_2_3_4_5_8_tsni, uniform_inst_32_2_3_4_5_6_tsni, map_inst_32_2_3_4_5_6_7_tsni, lambda_inst_33_tsni, lambda$_inst_33_tsni, doLine_inst_33_1_tsni, multiTest_inst_33_1_2_tsni, mTest$_inst_33_1_2_3_tsni, singleTest_inst_33_1_2_3_4_tsni, random_inst_33_1_2_3_4_5_tsni, uniform_inst_33_1_2_3_4_5_6_tsni, map_inst_33_1_2_3_4_5_6_7_tsni, splitAt_lz_inst_33_1_2_3_4_5_8_tsni, chop_inst_33_1_2_3_4_5_9_tsni, chop_$_inst_33_1_2_3_4_5_9_10_tsni, divMod_inst_33_1_2_3_4_5_9_10_11_tsni, findKQ_inst_33_1_2_3_12_tsni, f_inst_33_1_2_3_12_13_tsni, divMod_inst_33_1_2_3_12_13_14_tsni, doInput_inst_34_35_tsni, lambda_inst_34_35_tsni, lambda$_inst_34_35_tsni, doLine_inst_34_35_1_tsni, multiTest_inst_34_35_1_2_tsni, mTest$_inst_34_35_1_2_3_tsni, findKQ_inst_34_35_1_2_3_12_tsni, f_inst_34_35_1_2_3_12_13_tsni, divMod_inst_34_35_1_2_3_12_13_14_tsni, singleTest_inst_34_35_1_2_3_4_tsni, random_inst_34_35_1_2_3_4_5_tsni, chop_inst_34_35_1_2_3_4_5_9_tsni, chop_$_inst_34_35_1_2_3_4_5_9_10_tsni, divMod_inst_34_35_1_2_3_4_5_9_10_11_tsni, splitAt_lz_inst_34_35_1_2_3_4_5_8_tsni, uniform_inst_34_35_1_2_3_4_5_6_tsni, map_inst_34_35_1_2_3_4_5_6_7_tsni, lines_inst_36_37_tsni, break__inst_36_37_24_tsni, process_inst_36_38_tsni, doInput_inst_36_38_35_tsni, lambda_inst_36_38_35_tsni, lambda$_inst_36_38_35_tsni, doLine_inst_36_38_35_1_tsni, multiTest_inst_36_38_35_1_2_tsni, mTest$_inst_36_38_35_1_2_3_tsni, singleTest_inst_36_38_35_1_2_3_4_tsni, random_inst_36_38_35_1_2_3_4_5_tsni, uniform_inst_36_38_35_1_2_3_4_5_6_tsni, map_inst_36_38_35_1_2_3_4_5_6_7_tsni, splitAt_lz_inst_36_38_35_1_2_3_4_5_8_tsni, chop_inst_36_38_35_1_2_3_4_5_9_tsni, chop_$_inst_36_38_35_1_2_3_4_5_9_10_tsni, divMod_inst_36_38_35_1_2_3_4_5_9_10_11_tsni, findKQ_inst_36_38_35_1_2_3_12_tsni, f_inst_36_38_35_1_2_3_12_13_tsni, divMod_inst_36_38_35_1_2_3_12_13_14_tsni, testPrimetest_nofib_inst_39_40_tsni, process_inst_39_40_38_tsni, doInput_inst_39_40_38_35_tsni, lambda_inst_39_40_38_35_tsni, lambda$_inst_39_40_38_35_tsni, doLine_inst_39_40_38_35_1_tsni, multiTest_inst_39_40_38_35_1_2_tsni, mTest$_inst_39_40_38_35_1_2_3_tsni, findKQ_inst_39_40_38_35_1_2_3_12_tsni, f_inst_39_40_38_35_1_2_3_12_13_tsni, divMod_inst_39_40_38_35_1_2_3_12_13_14_tsni, singleTest_inst_39_40_38_35_1_2_3_4_tsni, random_inst_39_40_38_35_1_2_3_4_5_tsni, chop_inst_39_40_38_35_1_2_3_4_5_9_tsni, chop_$_inst_39_40_38_35_1_2_3_4_5_9_10_tsni, divMod_inst_39_40_38_35_1_2_3_4_5_9_10_11_tsni, splitAt_lz_inst_39_40_38_35_1_2_3_4_5_8_tsni, uniform_inst_39_40_38_35_1_2_3_4_5_6_tsni, map_inst_39_40_38_35_1_2_3_4_5_6_7_tsni, lines_inst_39_40_37_tsni, break__inst_39_40_37_24_tsni, makeNumber_inst_0_1_2_3_4_5_41_tsni, foldl_inst_0_1_2_3_4_5_41_42_tsni, singleTestX_inst_0_1_2_3_4_43_tsni, makeNumber_inst_15_1_2_3_4_5_41_tsni, foldl_inst_15_1_2_3_4_5_41_42_tsni, singleTestX_inst_15_1_2_3_4_43_tsni, makeNumber_inst_16_4_5_41_tsni, foldl_inst_16_4_5_41_42_tsni, singleTestX_inst_16_4_43_tsni, makeNumber_inst_17_18_4_5_41_tsni, foldl_inst_17_18_4_5_41_42_tsni, singleTestX_inst_17_18_4_43_tsni, makeNumber_inst_29_41_tsni, foldl_inst_29_41_42_tsni, makeNumber_inst_30_5_41_tsni, foldl_inst_30_5_41_42_tsni, makeNumber_inst_31_3_4_5_41_tsni, foldl_inst_31_3_4_5_41_42_tsni, singleTestX_inst_31_3_4_43_tsni, makeNumber_inst_32_2_3_4_5_41_tsni, foldl_inst_32_2_3_4_5_41_42_tsni, singleTestX_inst_32_2_3_4_43_tsni, makeNumber_inst_33_1_2_3_4_5_41_tsni, foldl_inst_33_1_2_3_4_5_41_42_tsni, singleTestX_inst_33_1_2_3_4_43_tsni, makeNumber_inst_34_35_1_2_3_4_5_41_tsni, foldl_inst_34_35_1_2_3_4_5_41_42_tsni, singleTestX_inst_34_35_1_2_3_4_43_tsni, makeNumber_inst_36_38_35_1_2_3_4_5_41_tsni, foldl_inst_36_38_35_1_2_3_4_5_41_42_tsni, singleTestX_inst_36_38_35_1_2_3_4_43_tsni, int_val_of_string_inst_36_38_35_1_44_tsni, f_inst_36_38_35_1_44_45_tsni, makeNumber_inst_39_40_38_35_1_2_3_4_5_41_tsni, foldl_inst_39_40_38_35_1_2_3_4_5_41_42_tsni, singleTestX_inst_39_40_38_35_1_2_3_4_43_tsni, int_val_of_string_inst_39_40_38_35_1_44_tsni, f_inst_39_40_38_35_1_44_45_tsni, match_s__rest_inst_23_tsni, match_s__rest_inst_36_37_tsni, match_s__rest_inst_39_40_37_tsni, match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_0_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni, match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_15_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_15_1_tsni, match_xs_arm_Cons_inst_16_4_5_41_42_tsni, match_xs_arm_Nil_inst_16_4_5_41_42_tsni, match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni, match_xs_arm_Nil_inst_17_18_4_5_41_42_tsni, match_xs_arm_Cons_inst_29_41_42_tsni, match_xs_arm_Nil_inst_29_41_42_tsni, match_xs_arm_Cons_inst_30_5_41_42_tsni, match_xs_arm_Nil_inst_30_5_41_42_tsni, match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_31_3_4_5_41_42_tsni, match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_32_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_32_tsni, match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_33_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_33_1_tsni, match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_34_35_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_34_35_1_tsni, match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_36_38_35_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_36_38_35_1_tsni, match_l_arm_Nil_inst_36_38_35_1_44_45_tsni, match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni, match_xs_arm_Nil_inst_39_40_38_35_1_2_3_4_5_41_42_tsni, match_scrut_arm_Deforest_Arr_2_inst_39_40_38_35_1_tsni, match_l_arm_Nil_inst_39_40_38_35_1_44_45_tsni;
match_s__rest_inst_23_tsni = function match_s__rest_inst_23_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_s__rest_inst_36_37_tsni = function match_s__rest_inst_36_37_tsni(l, tmp) {
  let tt, _deforest_Cons_head, _deforest_Cons_tail;
  tt = tmp;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tt;
  return (state) => {
    let param0, param1, l1, ls, lambda$this;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    l1 = param0;
    ls = param1;
    lambda$this = runtime.safeCall(lambda_inst_36_38_35_tsni(ls));
    return doLine_inst_36_38_35_1_tsni(l1, lambda$this, state)
  }
};
match_s__rest_inst_39_40_37_tsni = function match_s__rest_inst_39_40_37_tsni(l, tmp) {
  let tt, _deforest_Cons_head, _deforest_Cons_tail;
  tt = tmp;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tt;
  return (state) => {
    let param0, param1, l1, ls, lambda$this;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    l1 = param0;
    ls = param1;
    lambda$this = runtime.safeCall(lambda_inst_39_40_38_35_tsni(ls));
    return doLine_inst_39_40_38_35_1_tsni(l1, lambda$this, state)
  }
};
match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_0_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_0_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_0_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_0_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_0_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_0_1_tsni, _deforest_Deforest_Arr_2_1_inst_0_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_0_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_0_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_15_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_15_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_15_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_15_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_15_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_15_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_15_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_15_1_tsni, _deforest_Deforest_Arr_2_1_inst_15_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_xs_arm_Cons_inst_16_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_16_4_5_41_42_tsni, _deforest_Cons_tail_inst_16_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_16_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_16_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_16_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_16_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_17_18_4_5_41_42_tsni, _deforest_Cons_tail_inst_17_18_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_17_18_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_17_18_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_17_18_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_17_18_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_xs_arm_Cons_inst_29_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_29_41_42_tsni, _deforest_Cons_tail_inst_29_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_29_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_29_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_29_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_29_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_xs_arm_Cons_inst_30_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_30_5_41_42_tsni, _deforest_Cons_tail_inst_30_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_30_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_30_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_30_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_30_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_31_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_31_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_31_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_31_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_31_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_31_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_32_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_32_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_32_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_32_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_32_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_32_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_32_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_32_tsni, _deforest_Deforest_Arr_2_1_inst_32_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_32_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_32_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_33_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_33_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_33_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_33_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_33_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_33_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_33_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_33_1_tsni, _deforest_Deforest_Arr_2_1_inst_33_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_33_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_33_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_34_35_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_34_35_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_34_35_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_34_35_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_34_35_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_34_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_34_35_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_34_35_1_tsni, _deforest_Deforest_Arr_2_1_inst_34_35_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_34_35_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_34_35_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_36_38_35_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_36_38_35_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_36_38_35_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_36_38_35_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_36_38_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_36_38_35_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_36_38_35_1_tsni, _deforest_Deforest_Arr_2_1_inst_36_38_35_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_36_38_35_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_36_38_35_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_l_arm_Nil_inst_36_38_35_1_44_45_tsni = (undefined, function (a) {
  return a
});
match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a, _deforest_Cons_head_inst_39_40_38_35_1_2_3_4_5_41_42_tsni, _deforest_Cons_tail_inst_39_40_38_35_1_2_3_4_5_41_42_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_39_40_38_35_1_2_3_4_5_41_42_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_38_35_1_2_3_4_5_41_42_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f3(a, h));
  return foldl_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, tmp, t)
});
match_xs_arm_Nil_inst_39_40_38_35_1_2_3_4_5_41_42_tsni = (undefined, function (f3, a) {
  return a
});
match_scrut_arm_Deforest_Arr_2_inst_39_40_38_35_1_tsni = (undefined, function (cont, _deforest_Deforest_Arr_2_0_inst_39_40_38_35_1_tsni, _deforest_Deforest_Arr_2_1_inst_39_40_38_35_1_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_39_40_38_35_1_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_39_40_38_35_1_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
});
match_l_arm_Nil_inst_39_40_38_35_1_44_45_tsni = (undefined, function (a) {
  return a
});
doInput_inst_0_tsni = function doInput_inst_0_tsni(state, lls) {
  let param0, param1, l, ls, lambda$this;
  if (lls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (lls instanceof NofibPrelude.Cons.class) {
    param0 = lls.head;
    param1 = lls.tail;
    l = param0;
    ls = param1;
    lambda$this = runtime.safeCall(lambda_inst_0_tsni(ls));
    return doLine_inst_0_1_tsni(l, lambda$this, state)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_0_tsni = (undefined, function (ls) {
  return (state) => {
    return lambda$3(ls, state)
  }
});
doLine_inst_0_1_tsni = function doLine_inst_0_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_0_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_0_1_2_tsni = function multiTest_inst_0_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_0_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_0_1_2_3_tsni = function mTest$_inst_0_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_0_1_2_3_12_tsni(n);
    scrut = singleTest_inst_0_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_0_1_2_3_4_tsni = function singleTest_inst_0_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_0_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_0_1_2_3_4_5_tsni = function random_inst_0_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_0_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_0_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_0_1_2_3_4_5_6_tsni = function uniform_inst_0_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_0_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_0_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_0_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_0_1_2_3_4_5_6_7_tsni = function map_inst_0_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_0_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_0_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_0_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_0_1_2_3_4_5_8_tsni = function splitAt_lz_inst_0_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_0_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_0_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_0_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_0_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_0_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_0_1_2_3_4_5_9_tsni = function chop_inst_0_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_0_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_0_1_2_3_4_5_9_10_tsni = function chop_$_inst_0_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_0_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_0_1_2_3_4_5_9_10_11_tsni = function divMod_inst_0_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_0_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_0_1_2_3_12_tsni = function findKQ_inst_0_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_0_1_2_3_12_13_tsni(0, tmp)
};
f_inst_0_1_2_3_12_13_tsni = function f_inst_0_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_0_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_0_1_2_3_12_13_14_tsni = function divMod_inst_0_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_0_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
doInput_inst_15_tsni = function doInput_inst_15_tsni(state, lls) {
  let param0, param1, l, ls, lambda$this;
  if (lls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (lls instanceof NofibPrelude.Cons.class) {
    param0 = lls.head;
    param1 = lls.tail;
    l = param0;
    ls = param1;
    lambda$this = runtime.safeCall(lambda5(ls));
    return doLine_inst_15_1_tsni(l, lambda$this, state)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_15_tsni = function lambda$_inst_15_tsni(ls, state) {
  return doInput_inst_15_tsni(state, ls)
};
doLine_inst_15_1_tsni = function doLine_inst_15_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_15_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_15_1_2_tsni = function multiTest_inst_15_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_15_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_15_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_15_1_2_3_tsni = function mTest$_inst_15_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_15_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_15_1_2_3_12_tsni(n);
    scrut = singleTest_inst_15_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_15_1_2_3_4_tsni = function singleTest_inst_15_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_15_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_15_1_2_3_4_5_tsni = function random_inst_15_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_15_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_15_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_15_1_2_3_4_5_6_tsni = function uniform_inst_15_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_15_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_15_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_15_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_15_1_2_3_4_5_6_7_tsni = function map_inst_15_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_15_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_15_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_15_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_15_1_2_3_4_5_8_tsni = function splitAt_lz_inst_15_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_15_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_15_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_15_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_15_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_15_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_15_1_2_3_4_5_9_tsni = function chop_inst_15_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_15_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_15_1_2_3_4_5_9_10_tsni = function chop_$_inst_15_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_15_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_15_1_2_3_4_5_9_10_11_tsni = function divMod_inst_15_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_15_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_15_1_2_3_12_tsni = function findKQ_inst_15_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_15_1_2_3_12_13_tsni(0, tmp)
};
f_inst_15_1_2_3_12_13_tsni = function f_inst_15_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_15_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_15_1_2_3_12_13_14_tsni = function divMod_inst_15_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_15_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
findKQ_inst_16_12_tsni = function findKQ_inst_16_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_16_12_13_tsni(0, tmp)
};
f_inst_16_12_13_tsni = function f_inst_16_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_16_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_16_12_13_14_tsni = function divMod_inst_16_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_16_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
singleTest_inst_16_4_tsni = function singleTest_inst_16_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_16_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_16_4_5_tsni = function random_inst_16_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_16_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_16_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_16_4_5_9_tsni = function chop_inst_16_4_5_9_tsni(b, n) {
  return chop_$_inst_16_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_16_4_5_9_10_tsni = function chop_$_inst_16_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_16_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_16_4_5_9_10_11_tsni = function divMod_inst_16_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_16_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_16_4_5_8_tsni = function splitAt_lz_inst_16_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_16_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_16_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_16_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$(n2, tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_16_4_5_6_tsni = function uniform_inst_16_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f3, a) => {
          return match_xs_arm_Nil_inst_16_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_16_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_16_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_16_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_16_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_16_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_16_4_5_6_7_tsni = function map_inst_16_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_16_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_16_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_16_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mTest$_inst_17_18_tsni = function mTest$_inst_17_18_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp;
  scrut1 = k == 0;
  if (scrut1 === true) {
    arr = [
      true,
      rs
    ];
    return arr
  } else {
    tmp = findKQ_inst_17_18_12_tsni(n);
    scrut = singleTest_inst_17_18_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_17_18_4_tsni = function singleTest_inst_17_18_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_17_18_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_17_18_4_5_tsni = function random_inst_17_18_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_17_18_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_17_18_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_17_18_4_5_6_tsni = function uniform_inst_17_18_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_17_18_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_17_18_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_17_18_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_17_18_4_5_6_7_tsni = function map_inst_17_18_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_17_18_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_17_18_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_17_18_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_17_18_4_5_8_tsni = function splitAt_lz_inst_17_18_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_17_18_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_17_18_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_17_18_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_17_18_tsni(n2, tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_17_18_4_5_9_tsni = function chop_inst_17_18_4_5_9_tsni(b, n) {
  return chop_$_inst_17_18_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_17_18_4_5_9_10_tsni = function chop_$_inst_17_18_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_17_18_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_17_18_4_5_9_10_11_tsni = function divMod_inst_17_18_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_17_18_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_17_18_12_tsni = function findKQ_inst_17_18_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_17_18_12_13_tsni(0, tmp)
};
f_inst_17_18_12_13_tsni = function f_inst_17_18_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_17_18_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_17_18_12_13_14_tsni = function divMod_inst_17_18_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_17_18_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
divMod_inst_19_14_tsni = function divMod_inst_19_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f2(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
divMod_inst_20_11_tsni = function divMod_inst_20_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$(b1, tmp2, q)
    }
  };
  return arr
};
chop_$_inst_21_22_tsni = function chop_$_inst_21_22_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_21_22_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_21_22_11_tsni = function divMod_inst_21_22_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_21_22_tsni(b1, tmp2, q)
    }
  };
  return arr
};
break__inst_23_24_tsni = function break__inst_23_24_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_23_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = primetest.lines(s__);
        return match_s__rest_inst_23_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_23_24_tsni(p, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        tmp1 = NofibPrelude.Cons(x, ys);
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
chop_$_inst_25_10_tsni = function chop_$_inst_25_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_25_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_25_10_11_tsni = function divMod_inst_25_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_25_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
chop_inst_26_27_tsni = function chop_inst_26_27_tsni(b, n) {
  return chop_$_inst_26_27_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_26_27_10_tsni = function chop_$_inst_26_27_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_26_27_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_26_27_10_11_tsni = function divMod_inst_26_27_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_26_27_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
f_inst_28_13_tsni = function f_inst_28_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_28_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_28_13_14_tsni = function divMod_inst_28_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_28_13_tsni(tmp2, d)
    } else {
      arr1 = [
        k,
        q
      ];
      return arr1
    }
  };
  return arr
};
chop_inst_29_9_tsni = function chop_inst_29_9_tsni(b, n) {
  return chop_$_inst_29_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_29_9_10_tsni = function chop_$_inst_29_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_29_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_29_9_10_11_tsni = function divMod_inst_29_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_29_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_29_8_tsni = function splitAt_lz_inst_29_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_29_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_29_41_tsni(65536, tmp2);
    arr1 = [
      tmp3,
      rs2
    ];
    return arr1
  };
  return arr
};
uniform_inst_29_6_tsni = function uniform_inst_29_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f3, a) => {
          return match_xs_arm_Nil_inst_29_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_29_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_29_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_29_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_29_6_7_tsni(lambda4, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_29_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_29_6_7_tsni = function map_inst_29_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_29_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_29_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_29_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
random_inst_30_5_tsni = function random_inst_30_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_30_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_30_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_30_5_6_tsni = function uniform_inst_30_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_30_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_30_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_30_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_30_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_30_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_30_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_30_5_6_7_tsni = function map_inst_30_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_30_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_30_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_30_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_30_5_8_tsni = function splitAt_lz_inst_30_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_30_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_30_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = primetest.singleTestX(n1, kq, tmp4);
      arr2 = [
        tmp5,
        rs_
      ];
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_30_5_9_tsni = function chop_inst_30_5_9_tsni(b, n) {
  return chop_$_inst_30_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_30_5_9_10_tsni = function chop_$_inst_30_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_30_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_30_5_9_10_11_tsni = function divMod_inst_30_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_30_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
mTest$_inst_31_3_tsni = function mTest$_inst_31_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp;
  scrut1 = k == 0;
  if (scrut1 === true) {
    arr = [
      true,
      rs
    ];
    return arr
  } else {
    tmp = findKQ_inst_31_3_12_tsni(n);
    scrut = singleTest_inst_31_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_31_3_4_tsni = function singleTest_inst_31_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_31_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_31_3_4_5_tsni = function random_inst_31_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_31_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_31_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_31_3_4_5_6_tsni = function uniform_inst_31_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_31_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_31_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_31_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_31_3_4_5_6_7_tsni = function map_inst_31_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_31_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_31_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_31_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_31_3_4_5_8_tsni = function splitAt_lz_inst_31_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_31_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_31_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_31_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_31_3_tsni(n2, tmp6, rs_1)
        } else {
          arr3 = [
            false,
            rs_1
          ];
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_31_3_4_5_9_tsni = function chop_inst_31_3_4_5_9_tsni(b, n) {
  return chop_$_inst_31_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_31_3_4_5_9_10_tsni = function chop_$_inst_31_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_31_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_31_3_4_5_9_10_11_tsni = function divMod_inst_31_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_31_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_31_3_12_tsni = function findKQ_inst_31_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_31_3_12_13_tsni(0, tmp)
};
f_inst_31_3_12_13_tsni = function f_inst_31_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_31_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_31_3_12_13_14_tsni = function divMod_inst_31_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_31_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
multiTest_inst_32_2_tsni = function multiTest_inst_32_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_32_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_32_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_32_2_3_tsni = function mTest$_inst_32_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_32_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_32_2_3_12_tsni(n);
    scrut = singleTest_inst_32_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
findKQ_inst_32_2_3_12_tsni = function findKQ_inst_32_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_32_2_3_12_13_tsni(0, tmp)
};
f_inst_32_2_3_12_13_tsni = function f_inst_32_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_32_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_32_2_3_12_13_14_tsni = function divMod_inst_32_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_32_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
singleTest_inst_32_2_3_4_tsni = function singleTest_inst_32_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_32_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_32_2_3_4_5_tsni = function random_inst_32_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_32_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_32_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_32_2_3_4_5_9_tsni = function chop_inst_32_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_32_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_32_2_3_4_5_9_10_tsni = function chop_$_inst_32_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_32_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_32_2_3_4_5_9_10_11_tsni = function divMod_inst_32_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_32_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_32_2_3_4_5_8_tsni = function splitAt_lz_inst_32_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_32_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_32_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_32_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_32_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_32_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_32_2_3_4_5_6_tsni = function uniform_inst_32_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f3, a) => {
          return match_xs_arm_Nil_inst_32_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_32_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_32_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_32_2_3_4_5_6_7_tsni = function map_inst_32_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_32_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_32_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_32_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_33_tsni = (undefined, function (ls) {
  return (state) => {
    return lambda$_inst_33_tsni(ls, state)
  }
});
lambda$_inst_33_tsni = function lambda$_inst_33_tsni(ls, state) {
  return primetest1.doInput(state, ls)
};
doLine_inst_33_1_tsni = function doLine_inst_33_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_33_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_33_1_2_tsni = function multiTest_inst_33_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_33_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_33_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_33_1_2_3_tsni = function mTest$_inst_33_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_33_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_33_1_2_3_12_tsni(n);
    scrut = singleTest_inst_33_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_33_1_2_3_4_tsni = function singleTest_inst_33_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_33_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_33_1_2_3_4_5_tsni = function random_inst_33_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_33_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_33_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_33_1_2_3_4_5_6_tsni = function uniform_inst_33_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_33_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_33_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_33_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_33_1_2_3_4_5_6_7_tsni = function map_inst_33_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_33_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_33_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_33_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_33_1_2_3_4_5_8_tsni = function splitAt_lz_inst_33_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_33_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_33_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_33_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_33_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_33_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_33_1_2_3_4_5_9_tsni = function chop_inst_33_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_33_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_33_1_2_3_4_5_9_10_tsni = function chop_$_inst_33_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_33_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_33_1_2_3_4_5_9_10_11_tsni = function divMod_inst_33_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_33_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_33_1_2_3_12_tsni = function findKQ_inst_33_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_33_1_2_3_12_13_tsni(0, tmp)
};
f_inst_33_1_2_3_12_13_tsni = function f_inst_33_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_33_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_33_1_2_3_12_13_14_tsni = function divMod_inst_33_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_33_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
doInput_inst_34_35_tsni = function doInput_inst_34_35_tsni(state, lls) {
  let param0, param1, l, ls, lambda$this;
  if (lls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (lls instanceof NofibPrelude.Cons.class) {
    param0 = lls.head;
    param1 = lls.tail;
    l = param0;
    ls = param1;
    lambda$this = runtime.safeCall(lambda_inst_34_35_tsni(ls));
    return doLine_inst_34_35_1_tsni(l, lambda$this, state)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_34_35_tsni = (undefined, function (ls) {
  return (state) => {
    return lambda$_inst_34_35_tsni(ls, state)
  }
});
lambda$_inst_34_35_tsni = function lambda$_inst_34_35_tsni(ls, state) {
  return doInput_inst_34_35_tsni(state, ls)
};
doLine_inst_34_35_1_tsni = function doLine_inst_34_35_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_34_35_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_34_35_1_2_tsni = function multiTest_inst_34_35_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_34_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_34_35_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_34_35_1_2_3_tsni = function mTest$_inst_34_35_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_34_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_34_35_1_2_3_12_tsni(n);
    scrut = singleTest_inst_34_35_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
findKQ_inst_34_35_1_2_3_12_tsni = function findKQ_inst_34_35_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_34_35_1_2_3_12_13_tsni(0, tmp)
};
f_inst_34_35_1_2_3_12_13_tsni = function f_inst_34_35_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_34_35_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_34_35_1_2_3_12_13_14_tsni = function divMod_inst_34_35_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_34_35_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
singleTest_inst_34_35_1_2_3_4_tsni = function singleTest_inst_34_35_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_34_35_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_34_35_1_2_3_4_5_tsni = function random_inst_34_35_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_34_35_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_34_35_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_34_35_1_2_3_4_5_9_tsni = function chop_inst_34_35_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_34_35_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_34_35_1_2_3_4_5_9_10_tsni = function chop_$_inst_34_35_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_34_35_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_34_35_1_2_3_4_5_9_10_11_tsni = function divMod_inst_34_35_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_34_35_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_34_35_1_2_3_4_5_8_tsni = function splitAt_lz_inst_34_35_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_34_35_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_34_35_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_34_35_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_34_35_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_34_35_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_34_35_1_2_3_4_5_6_tsni = function uniform_inst_34_35_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f3, a) => {
          return match_xs_arm_Nil_inst_34_35_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_34_35_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_34_35_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_34_35_1_2_3_4_5_6_7_tsni = function map_inst_34_35_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_34_35_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_34_35_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_34_35_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_36_37_tsni = function lines_inst_36_37_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_36_37_24_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_36_37_24_tsni = function break__inst_36_37_24_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      (a) => {
        return match_l_arm_Nil_inst_36_38_35_1_44_45_tsni(a)
      },
      (l) => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_36_37_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_36_37_tsni(s__);
        return match_s__rest_inst_36_37_tsni(l, tmp2)
      };
      arr1 = [
        (a) => {
          return match_l_arm_Nil_inst_36_38_35_1_44_45_tsni(a)
        },
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_36_37_24_tsni(p, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = ys;
        tmp1 = (a) => {
          let param01, param11, h, t, tmp2, tmp3, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          h = param01;
          t = param11;
          tmp2 = 10 * a;
          tmp3 = primetest1.int_val_of_char(h);
          tmp4 = tmp2 + tmp3;
          return f_inst_36_38_35_1_44_45_tsni(t, tmp4)
        };
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
process_inst_36_38_tsni = function process_inst_36_38_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_36_38_35_tsni(tmp, process_arg1)
};
doInput_inst_36_38_35_tsni = function doInput_inst_36_38_35_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
lambda_inst_36_38_35_tsni = (undefined, function (ls) {
  return (state) => {
    return lambda$_inst_36_38_35_tsni(ls, state)
  }
});
lambda$_inst_36_38_35_tsni = function lambda$_inst_36_38_35_tsni(ls, state) {
  return doInput_inst_36_38_35_tsni(state, ls)
};
doLine_inst_36_38_35_1_tsni = function doLine_inst_36_38_35_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = int_val_of_string_inst_36_38_35_1_44_tsni(cs);
  n = tmp;
  scrut = multiTest_inst_36_38_35_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_36_38_35_1_2_tsni = function multiTest_inst_36_38_35_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_36_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_36_38_35_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_36_38_35_1_2_3_tsni = function mTest$_inst_36_38_35_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_36_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_36_38_35_1_2_3_12_tsni(n);
    scrut = singleTest_inst_36_38_35_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
singleTest_inst_36_38_35_1_2_3_4_tsni = function singleTest_inst_36_38_35_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_36_38_35_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_36_38_35_1_2_3_4_5_tsni = function random_inst_36_38_35_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_36_38_35_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_36_38_35_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_36_38_35_1_2_3_4_5_6_tsni = function uniform_inst_36_38_35_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head2 = tmp;
        _deforest_Cons_tail2 = (f3, a) => {
          return match_xs_arm_Nil_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_36_38_35_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_36_38_35_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_36_38_35_1_2_3_4_5_6_7_tsni = function map_inst_36_38_35_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_36_38_35_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_36_38_35_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_36_38_35_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_36_38_35_1_2_3_4_5_8_tsni = function splitAt_lz_inst_36_38_35_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_36_38_35_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_36_38_35_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_36_38_35_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_36_38_35_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_36_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
chop_inst_36_38_35_1_2_3_4_5_9_tsni = function chop_inst_36_38_35_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_36_38_35_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_36_38_35_1_2_3_4_5_9_10_tsni = function chop_$_inst_36_38_35_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_36_38_35_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_36_38_35_1_2_3_4_5_9_10_11_tsni = function divMod_inst_36_38_35_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_36_38_35_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
findKQ_inst_36_38_35_1_2_3_12_tsni = function findKQ_inst_36_38_35_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_36_38_35_1_2_3_12_13_tsni(0, tmp)
};
f_inst_36_38_35_1_2_3_12_13_tsni = function f_inst_36_38_35_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_36_38_35_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_36_38_35_1_2_3_12_13_14_tsni = function divMod_inst_36_38_35_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_36_38_35_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
testPrimetest_nofib_inst_39_40_tsni = function testPrimetest_nofib_inst_39_40_tsni(d) {
  let cts, tmp, tmp1;
  tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
  cts = tmp;
  tmp1 = lines_inst_39_40_37_tsni(cts);
  return process_inst_39_40_38_tsni(tmp1)
};
process_inst_39_40_38_tsni = function process_inst_39_40_38_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_39_40_38_35_tsni(tmp, process_arg1)
};
doInput_inst_39_40_38_35_tsni = function doInput_inst_39_40_38_35_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
lambda_inst_39_40_38_35_tsni = (undefined, function (ls) {
  return (state) => {
    return lambda$_inst_39_40_38_35_tsni(ls, state)
  }
});
lambda$_inst_39_40_38_35_tsni = function lambda$_inst_39_40_38_35_tsni(ls, state) {
  return doInput_inst_39_40_38_35_tsni(state, ls)
};
doLine_inst_39_40_38_35_1_tsni = function doLine_inst_39_40_38_35_1_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = int_val_of_string_inst_39_40_38_35_1_44_tsni(cs);
  n = tmp;
  scrut = multiTest_inst_39_40_38_35_1_2_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_39_40_38_35_1_2_tsni = function multiTest_inst_39_40_38_35_1_2_tsni(k, rs, n) {
  let scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_39_40_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest$_inst_39_40_38_35_1_2_3_tsni(n, k, rs)
  }
};
mTest$_inst_39_40_38_35_1_2_3_tsni = function mTest$_inst_39_40_38_35_1_2_3_tsni(n, k, rs) {
  let scrut, scrut1, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut1 = k == 0;
  if (scrut1 === true) {
    _deforest_Deforest_Arr_2_0 = true;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_39_40_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    tmp = findKQ_inst_39_40_38_35_1_2_3_12_tsni(n);
    scrut = singleTest_inst_39_40_38_35_1_2_3_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
findKQ_inst_39_40_38_35_1_2_3_12_tsni = function findKQ_inst_39_40_38_35_1_2_3_12_tsni(n) {
  let tmp;
  tmp = n - 1;
  return f_inst_39_40_38_35_1_2_3_12_13_tsni(0, tmp)
};
f_inst_39_40_38_35_1_2_3_12_13_tsni = function f_inst_39_40_38_35_1_2_3_12_13_tsni(k, q) {
  let scrut;
  scrut = divMod_inst_39_40_38_35_1_2_3_12_13_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
divMod_inst_39_40_38_35_1_2_3_12_13_14_tsni = function divMod_inst_39_40_38_35_1_2_3_12_13_14_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f_inst_39_40_38_35_1_2_3_12_13_tsni(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, square$this;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        square$this = runtime.safeCall(square(n));
        tmp4 = NofibPrelude.iterate(square$this, tmp3);
        scrut1 = NofibPrelude.take_lz(k1, tmp4);
        if (scrut1 instanceof NofibPrelude.Cons.class) {
          param0 = scrut1.head;
          param1 = scrut1.tail;
          t = param0;
          ts = param1;
          tmp5 = t == 1;
          tmp6 = n - 1;
          tmp7 = t == tmp6;
          tmp8 = tmp5 || tmp7;
          tmp9 = witness$(n, ts);
          return tmp8 || tmp9
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return arr1
    }
  };
  return arr
};
singleTest_inst_39_40_38_35_1_2_3_4_tsni = function singleTest_inst_39_40_38_35_1_2_3_4_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_39_40_38_35_1_2_3_4_5_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_39_40_38_35_1_2_3_4_5_tsni = function random_inst_39_40_38_35_1_2_3_4_5_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_39_40_38_35_1_2_3_4_5_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_39_40_38_35_1_2_3_4_5_8_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_39_40_38_35_1_2_3_4_5_9_tsni = function chop_inst_39_40_38_35_1_2_3_4_5_9_tsni(b, n) {
  return chop_$_inst_39_40_38_35_1_2_3_4_5_9_10_tsni(b, NofibPrelude.Nil, n)
};
chop_$_inst_39_40_38_35_1_2_3_4_5_9_10_tsni = function chop_$_inst_39_40_38_35_1_2_3_4_5_9_10_tsni(b, a, n) {
  let scrut;
  scrut = divMod_inst_39_40_38_35_1_2_3_4_5_9_10_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
divMod_inst_39_40_38_35_1_2_3_4_5_9_10_11_tsni = function divMod_inst_39_40_38_35_1_2_3_4_5_9_10_11_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (a1, n, b1) => {
    let first1, first0, q, r, scrut, tmp2;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    q = first0;
    r = first1;
    scrut = n == 0;
    if (scrut === true) {
      return a1
    } else {
      tmp2 = NofibPrelude.Cons(r, a1);
      return chop_$_inst_39_40_38_35_1_2_3_4_5_9_10_tsni(b1, tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_39_40_38_35_1_2_3_4_5_8_tsni = function splitAt_lz_inst_39_40_38_35_1_2_3_4_5_8_tsni(n, ls) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.take_lz(n, ls);
  tmp1 = NofibPrelude.drop_lz(n, ls);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (ns) => {
    let first1, first0, rs1, rs2, tmp2, tmp3, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    rs1 = first0;
    rs2 = first1;
    tmp2 = uniform_inst_39_40_38_35_1_2_3_4_5_6_tsni(ns, rs1);
    tmp3 = makeNumber_inst_39_40_38_35_1_2_3_4_5_41_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_39_40_38_35_1_2_3_4_43_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (k, n2) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest$_inst_39_40_38_35_1_2_3_tsni(n2, tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_39_40_38_35_1_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return arr3
        }
      };
      return arr2
    };
    return arr1
  };
  return arr
};
uniform_inst_39_40_38_35_1_2_3_4_5_6_tsni = function uniform_inst_39_40_38_35_1_2_3_4_5_6_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (nns instanceof NofibPrelude.Cons.class) {
    param0 = nns.head;
    param1 = nns.tail;
    n1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r1 = param01;
        rs1 = param11;
        tmp = NofibPrelude.intMod(r1, n1);
        _deforest_Cons_head = tmp;
        _deforest_Cons_tail = (f3, a) => {
          return match_xs_arm_Nil_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, a)
        };
        return (f3, a) => {
          return match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        n = param0;
        ns = param1;
        throw new globalThis.Error("match error");
      }
    } else {
      n = param0;
      ns = param1;
      if (rrs instanceof NofibPrelude.Cons.class) {
        param01 = rrs.head;
        param11 = rrs.tail;
        r = param01;
        rs = param11;
        tmp1 = n + 1;
        t = NofibPrelude.intMod(r, tmp1);
        scrut = t == n;
        if (scrut === true) {
          tmp2 = uniform_inst_39_40_38_35_1_2_3_4_5_6_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          tmp3 = map_inst_39_40_38_35_1_2_3_4_5_6_7_tsni(lambda4, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f3, a) => {
            return match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, a, _deforest_Cons_head2, _deforest_Cons_tail2)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_40_38_35_1_2_3_4_5_6_7_tsni = function map_inst_39_40_38_35_1_2_3_4_5_6_7_tsni(f3, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f3(x));
    tmp1 = map_inst_39_40_38_35_1_2_3_4_5_6_7_tsni(f3, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f4, a) => {
      return match_xs_arm_Cons_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f4, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f4, a) => {
      return match_xs_arm_Nil_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f4, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_39_40_37_tsni = function lines_inst_39_40_37_tsni(s) {
  let scrut, first1, first0, l, s_;
  scrut = break__inst_39_40_37_24_tsni(lambda, s);
  if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
    first0 = scrut[0];
    first1 = scrut[1];
    l = first0;
    s_ = first1;
    return runtime.safeCall(s_(l))
  } else {
    throw new globalThis.Error("match error");
  }
};
break__inst_39_40_37_24_tsni = function break__inst_39_40_37_24_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      (a) => {
        return match_l_arm_Nil_inst_39_40_38_35_1_44_45_tsni(a)
      },
      (l) => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_39_40_37_tsni(l, tmp2)
      }
    ];
    return arr
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    scrut1 = runtime.safeCall(p(x));
    if (scrut1 === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = xs;
      tmp = (l) => {
        let param01, param11, s__, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        s__ = param11;
        tmp2 = lines_inst_39_40_37_tsni(s__);
        return match_s__rest_inst_39_40_37_tsni(l, tmp2)
      };
      arr1 = [
        (a) => {
          return match_l_arm_Nil_inst_39_40_38_35_1_44_45_tsni(a)
        },
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_39_40_37_24_tsni(p, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = ys;
        tmp1 = (a) => {
          let param01, param11, h, t, tmp2, tmp3, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          h = param01;
          t = param11;
          tmp2 = 10 * a;
          tmp3 = primetest1.int_val_of_char(h);
          tmp4 = tmp2 + tmp3;
          return f_inst_39_40_38_35_1_44_45_tsni(t, tmp4)
        };
        arr2 = [
          tmp1,
          zs
        ];
        return arr2
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
makeNumber_inst_0_1_2_3_4_5_41_tsni = function makeNumber_inst_0_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_0_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_0_1_2_3_4_5_41_42_tsni = function foldl_inst_0_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_0_1_2_3_4_43_tsni = function singleTestX_inst_0_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_15_1_2_3_4_5_41_tsni = function makeNumber_inst_15_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_15_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_15_1_2_3_4_5_41_42_tsni = function foldl_inst_15_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_15_1_2_3_4_43_tsni = function singleTestX_inst_15_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_16_4_5_41_tsni = function makeNumber_inst_16_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_16_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_16_4_5_41_42_tsni = function foldl_inst_16_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_16_4_43_tsni = function singleTestX_inst_16_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_17_18_4_5_41_tsni = function makeNumber_inst_17_18_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_17_18_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_17_18_4_5_41_42_tsni = function foldl_inst_17_18_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_17_18_4_43_tsni = function singleTestX_inst_17_18_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_29_41_tsni = function makeNumber_inst_29_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_29_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_29_41_42_tsni = function foldl_inst_29_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
makeNumber_inst_30_5_41_tsni = function makeNumber_inst_30_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_30_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_30_5_41_42_tsni = function foldl_inst_30_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
makeNumber_inst_31_3_4_5_41_tsni = function makeNumber_inst_31_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_31_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_31_3_4_5_41_42_tsni = function foldl_inst_31_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_31_3_4_43_tsni = function singleTestX_inst_31_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_32_2_3_4_5_41_tsni = function makeNumber_inst_32_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_32_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_32_2_3_4_5_41_42_tsni = function foldl_inst_32_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_32_2_3_4_43_tsni = function singleTestX_inst_32_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_33_1_2_3_4_5_41_tsni = function makeNumber_inst_33_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_33_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_33_1_2_3_4_5_41_42_tsni = function foldl_inst_33_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_33_1_2_3_4_43_tsni = function singleTestX_inst_33_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_34_35_1_2_3_4_5_41_tsni = function makeNumber_inst_34_35_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_34_35_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_34_35_1_2_3_4_5_41_42_tsni = function foldl_inst_34_35_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_34_35_1_2_3_4_43_tsni = function singleTestX_inst_34_35_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
makeNumber_inst_36_38_35_1_2_3_4_5_41_tsni = function makeNumber_inst_36_38_35_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_36_38_35_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_36_38_35_1_2_3_4_5_41_42_tsni = function foldl_inst_36_38_35_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_36_38_35_1_2_3_4_43_tsni = function singleTestX_inst_36_38_35_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
int_val_of_string_inst_36_38_35_1_44_tsni = function int_val_of_string_inst_36_38_35_1_44_tsni(s) {
  return f_inst_36_38_35_1_44_45_tsni(s, 0)
};
f_inst_36_38_35_1_44_45_tsni = function f_inst_36_38_35_1_44_45_tsni(l, a) {
  return runtime.safeCall(l(a))
};
makeNumber_inst_39_40_38_35_1_2_3_4_5_41_tsni = function makeNumber_inst_39_40_38_35_1_2_3_4_5_41_tsni(b, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(b));
  return foldl_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(lambda$this, 0, ls)
};
foldl_inst_39_40_38_35_1_2_3_4_5_41_42_tsni = function foldl_inst_39_40_38_35_1_2_3_4_5_41_42_tsni(f3, a, xs) {
  return runtime.safeCall(xs(f3, a))
};
singleTestX_inst_39_40_38_35_1_2_3_4_43_tsni = function singleTestX_inst_39_40_38_35_1_2_3_4_43_tsni(n, kq, x) {
  return runtime.safeCall(kq(n, x))
};
int_val_of_string_inst_39_40_38_35_1_44_tsni = function int_val_of_string_inst_39_40_38_35_1_44_tsni(s) {
  return f_inst_39_40_38_35_1_44_45_tsni(s, 0)
};
f_inst_39_40_38_35_1_44_45_tsni = function f_inst_39_40_38_35_1_44_45_tsni(l, a) {
  return runtime.safeCall(l(a))
};
lambda$3 = function lambda$(ls, state) {
  return doInput_inst_0_tsni(state, ls)
};
lambda5 = (undefined, function (ls) {
  return (state) => {
    return lambda$_inst_15_tsni(ls, state)
  }
});
mTest$ = function mTest$(n, k, rs) {
  let scrut, scrut1, arr, tmp;
  scrut1 = k == 0;
  if (scrut1 === true) {
    arr = [
      true,
      rs
    ];
    return arr
  } else {
    tmp = findKQ_inst_16_12_tsni(n);
    scrut = singleTest_inst_16_4_tsni(n, tmp, rs);
    return runtime.safeCall(scrut(k, n))
  }
};
mTest = function mTest(n) {
  return (k, rs) => {
    return mTest$_inst_17_18_tsni(n, k, rs)
  }
};
square$ = function square$(n, x) {
  let tmp;
  tmp = x * x;
  return NofibPrelude.intMod(tmp, n)
};
square = function square(n) {
  return (x) => {
    return square$(n, x)
  }
};
witness$ = function witness$(n, ls) {
  let param0, param1, t, ts, scrut, scrut1, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return false
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    t = param0;
    ts = param1;
    tmp = n - 1;
    scrut1 = t == tmp;
    if (scrut1 === true) {
      return true
    } else {
      scrut = t == 1;
      if (scrut === true) {
        return false
      } else {
        return witness$(n, ts)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
witness = function witness(n) {
  return (ls) => {
    return witness$(n, ls)
  }
};
lambda4 = (undefined, function (x) {
  return NofibPrelude.intMod(x, 65536)
});
f2 = function f(k, q) {
  let scrut;
  scrut = divMod_inst_19_14_tsni(q, 2);
  return runtime.safeCall(scrut(k, q))
};
lambda$2 = function lambda$(s1__, s2__, z) {
  let tmp, tmp1;
  tmp = z + 2147483562;
  tmp1 = primetest1.rands(s1__, s2__);
  return NofibPrelude.LzCons(tmp, tmp1)
};
lambda2 = (undefined, function (s1__, s2__, z) {
  return () => {
    return lambda$2(s1__, s2__, z)
  }
});
lambda$1 = function lambda$(s1__, s2__, z) {
  let tmp;
  tmp = primetest1.rands(s1__, s2__);
  return NofibPrelude.LzCons(z, tmp)
};
lambda3 = (undefined, function (s1__, s2__, z) {
  return () => {
    return lambda$1(s1__, s2__, z)
  }
});
g$ = function g$(m, c, a, b) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut = primetest1.even(b);
  if (scrut === true) {
    tmp = a * a;
    tmp1 = NofibPrelude.intMod(tmp, m);
    tmp2 = NofibPrelude.intDiv(b, 2);
    return g$(m, c, tmp1, tmp2)
  } else {
    tmp3 = b - 1;
    tmp4 = a * c;
    tmp5 = NofibPrelude.intMod(tmp4, m);
    return f$(m, a, tmp3, tmp5)
  }
};
g = function g(m, c) {
  return (a, b) => {
    return g$(m, c, a, b)
  }
};
f$ = function f$(m, a, b, c) {
  let scrut;
  scrut = b == 0;
  if (scrut === true) {
    return c
  } else {
    return g$(m, c, a, b)
  }
};
f1 = function f(m) {
  return (a, b, c) => {
    return f$(m, a, b, c)
  }
};
chop_$ = function chop_$(b, a, n) {
  let scrut;
  scrut = divMod_inst_20_11_tsni(n, b);
  return runtime.safeCall(scrut(a, n, b))
};
chop_ = function chop_(b) {
  return (a, n) => {
    return chop_$_inst_21_22_tsni(b, a, n)
  }
};
lambda$ = function lambda$(b, a, x) {
  let tmp;
  tmp = a * b;
  return tmp + x
};
lambda1 = (undefined, function (b) {
  return (a, x) => {
    return lambda$(b, a, x)
  }
});
lambda = (undefined, function (x) {
  return x == "|"
});
f = function f(l, a) {
  let param0, param1, h, t, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return a
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    h = param0;
    t = param1;
    tmp = 10 * a;
    tmp1 = primetest1.int_val_of_char(h);
    tmp2 = tmp + tmp1;
    return f(t, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
(class primetest {
  static {
    primetest1 = primetest;
  }
  static even(x) {
    let tmp;
    tmp = NofibPrelude.intMod(x, 2);
    return tmp == 0
  } 
  static int_val_of_char(x1) {
    let tmp;
    tmp = NofibPrelude.int_of_char(x1);
    return tmp - 48
  } 
  static int_val_of_string(s) {
    return f(s, 0)
  } 
  static break_(p, ls) {
    let param0, param1, x2, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2;
    if (ls instanceof NofibPrelude.Nil.class) {
      arr = [
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ];
      return arr
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x2 = param0;
      xs = param1;
      scrut1 = runtime.safeCall(p(x2));
      if (scrut1 === true) {
        tmp = NofibPrelude.Cons(x2, xs);
        arr1 = [
          NofibPrelude.Nil,
          tmp
        ];
        return arr1
      } else {
        scrut = primetest.break_(p, xs);
        if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
          first0 = scrut[0];
          first1 = scrut[1];
          ys = first0;
          zs = first1;
          tmp1 = NofibPrelude.Cons(x2, ys);
          arr2 = [
            tmp1,
            zs
          ];
          return arr2
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lines(s1) {
    let scrut, first1, first0, l, s_;
    scrut = break__inst_23_24_tsni(lambda, s1);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      l = first0;
      s_ = first1;
      return runtime.safeCall(s_(l))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static makeNumber(b, ls1) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda1(b));
    return NofibPrelude.foldl(lambda$this, 0, ls1)
  } 
  static chop(b1, n) {
    return chop_$_inst_25_10_tsni(b1, NofibPrelude.Nil, n)
  } 
  static powerMod(a, b2, m) {
    let a_, scrut, tmp;
    scrut = b2 == 0;
    if (scrut === true) {
      return 1
    } else {
      a_ = NofibPrelude.intMod(a, m);
      tmp = b2 - 1;
      return f$(m, a_, tmp, a_)
    }
  } 
  static log2(x2) {
    let tmp;
    tmp = chop_inst_26_27_tsni(2, x2);
    return NofibPrelude.listLen(tmp)
  } 
  static rands(s11, s2) {
    let k, s1_, s1__, scrut, k_, s2_, s2__, scrut1, z, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda$this, lambda$this1;
    tmp = NofibPrelude.intDiv(s11, 53668);
    k = tmp;
    tmp1 = k * 53668;
    tmp2 = s11 - tmp1;
    tmp3 = 40014 * tmp2;
    tmp4 = k * 12211;
    tmp5 = tmp3 - tmp4;
    s1_ = tmp5;
    scrut = s1_ < 0;
    if (scrut === true) {
      tmp6 = s1_ + 2147483563;
    } else {
      tmp6 = s1_;
    }
    s1__ = tmp6;
    tmp7 = NofibPrelude.intDiv(s2, 52774);
    k_ = tmp7;
    tmp8 = k_ * 52774;
    tmp9 = s2 - tmp8;
    tmp10 = 40692 * tmp9;
    tmp11 = k_ * 3791;
    tmp12 = tmp10 - tmp11;
    s2_ = tmp12;
    scrut1 = s2_ < 0;
    if (scrut1 === true) {
      tmp13 = s2_ + 2147483399;
    } else {
      tmp13 = s2_;
    }
    s2__ = tmp13;
    tmp14 = s1__ - s2__;
    z = tmp14;
    scrut2 = z < 1;
    if (scrut2 === true) {
      lambda$this = runtime.safeCall(lambda2(s1__, s2__, z));
      return NofibPrelude.lazy(lambda$this)
    } else {
      lambda$this1 = runtime.safeCall(lambda3(s1__, s2__, z));
      return NofibPrelude.lazy(lambda$this1)
    }
  } 
  static randomInts(s12, s21) {
    let scrut, scrut1, scrut2, scrut3;
    scrut = 1 <= s12;
    if (scrut === true) {
      scrut1 = s12 <= 2147483562;
      if (scrut1 === true) {
        scrut2 = 1 <= s21;
        if (scrut2 === true) {
          scrut3 = s21 <= 2147483398;
          if (scrut3 === true) {
            return primetest.rands(s12, s21)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static findKQ(n1) {
    let tmp;
    tmp = n1 - 1;
    return f_inst_28_13_tsni(0, tmp)
  } 
  static uniform(nns, rrs) {
    let param0, param1, n2, ns, param01, param11, r, rs, t, scrut, n3, r1, rs1, tmp, tmp1, tmp2, tmp3;
    if (nns instanceof NofibPrelude.Cons.class) {
      param0 = nns.head;
      param1 = nns.tail;
      n3 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        if (rrs instanceof NofibPrelude.Cons.class) {
          param01 = rrs.head;
          param11 = rrs.tail;
          r1 = param01;
          rs1 = param11;
          tmp = NofibPrelude.intMod(r1, n3);
          return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
        } else {
          n2 = param0;
          ns = param1;
          throw new globalThis.Error("match error");
        }
      } else {
        n2 = param0;
        ns = param1;
        if (rrs instanceof NofibPrelude.Cons.class) {
          param01 = rrs.head;
          param11 = rrs.tail;
          r = param01;
          rs = param11;
          tmp1 = n2 + 1;
          t = NofibPrelude.intMod(r, tmp1);
          scrut = t == n2;
          if (scrut === true) {
            tmp2 = primetest.uniform(ns, rs);
            return NofibPrelude.Cons(t, tmp2)
          } else {
            tmp3 = NofibPrelude.map(lambda4, rs);
            return NofibPrelude.Cons(t, tmp3)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static random(n2, rs) {
    let ns, scrut, tmp, tmp1;
    tmp = chop_inst_29_9_tsni(65536, n2);
    ns = tmp;
    tmp1 = NofibPrelude.listLen(ns);
    scrut = splitAt_lz_inst_29_8_tsni(tmp1, rs);
    return runtime.safeCall(scrut(ns))
  } 
  static singleTestX(n3, kq, x3) {
    let first1, first0, k, q, scrut, param0, param1, t, ts, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, square$this;
    if (globalThis.Array.isArray(kq) && kq.length === 2) {
      first0 = kq[0];
      first1 = kq[1];
      k = first0;
      q = first1;
      tmp = primetest.powerMod(x3, q, n3);
      square$this = runtime.safeCall(square(n3));
      tmp1 = NofibPrelude.iterate(square$this, tmp);
      scrut = NofibPrelude.take_lz(k, tmp1);
      if (scrut instanceof NofibPrelude.Cons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        t = param0;
        ts = param1;
        tmp2 = t == 1;
        tmp3 = n3 - 1;
        tmp4 = t == tmp3;
        tmp5 = tmp2 || tmp4;
        tmp6 = witness$(n3, ts);
        return tmp5 || tmp6
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static singleTest(n4, kq1, rs1) {
    let scrut, tmp;
    tmp = n4 - 2;
    scrut = random_inst_30_5_tsni(tmp, rs1);
    return runtime.safeCall(scrut(n4, kq1))
  } 
  static multiTest(k, rs2, n5) {
    let scrut, tmp, tmp1, tmp2, arr;
    tmp = n5 <= 1;
    tmp1 = primetest.even(n5);
    scrut = tmp || tmp1;
    if (scrut === true) {
      tmp2 = n5 == 2;
      arr = [
        tmp2,
        rs2
      ];
      return arr
    } else {
      return mTest$_inst_31_3_tsni(n5, k, rs2)
    }
  } 
  static doLine(cs, cont, rs3) {
    let n6, scrut, tmp;
    tmp = primetest.int_val_of_string(cs);
    n6 = tmp;
    scrut = multiTest_inst_32_2_tsni(100, rs3, n6);
    return runtime.safeCall(scrut(cont))
  } 
  static doInput(state, lls) {
    let param0, param1, l, ls2, lambda$this;
    if (lls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (lls instanceof NofibPrelude.Cons.class) {
      param0 = lls.head;
      param1 = lls.tail;
      l = param0;
      ls2 = param1;
      lambda$this = runtime.safeCall(lambda_inst_33_tsni(ls2));
      return doLine_inst_33_1_tsni(l, lambda$this, state)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static process(process_arg1) {
    let tmp;
    tmp = primetest.randomInts(111, 47);
    return doInput_inst_34_35_tsni(tmp, process_arg1)
  } 
  static testPrimetest_nofib(d) {
    let cts, tmp, tmp1;
    tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
    cts = tmp;
    tmp1 = lines_inst_36_37_tsni(cts);
    return process_inst_36_38_tsni(tmp1)
  } 
  static main() {
    let tmp;
    tmp = testPrimetest_nofib_inst_39_40_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "primetest"; }
});
let primetest = primetest1; export default primetest;
