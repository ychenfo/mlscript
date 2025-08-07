import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let primetest1, break__inst_0_1_tsni, divMod_inst_2_3_tsni, chop_inst_4_5_tsni, divMod_inst_4_5_3_tsni, divMod_inst_6_7_tsni, chop_inst_8_9_tsni, divMod_inst_8_9_3_tsni, splitAt_lz_inst_8_10_tsni, uniform_inst_8_11_tsni, map_inst_8_11_12_tsni, random_inst_13_14_tsni, uniform_inst_13_14_11_tsni, map_inst_13_14_11_12_tsni, splitAt_lz_inst_13_14_10_tsni, chop_inst_13_14_9_tsni, divMod_inst_13_14_9_3_tsni, findKQ_inst_15_16_tsni, divMod_inst_15_16_7_tsni, singleTest_inst_15_17_tsni, random_inst_15_17_14_tsni, chop_inst_15_17_14_9_tsni, divMod_inst_15_17_14_9_3_tsni, splitAt_lz_inst_15_17_14_10_tsni, uniform_inst_15_17_14_11_tsni, map_inst_15_17_14_11_12_tsni, multiTest_inst_18_19_tsni, singleTest_inst_18_19_17_tsni, random_inst_18_19_17_14_tsni, uniform_inst_18_19_17_14_11_tsni, map_inst_18_19_17_14_11_12_tsni, splitAt_lz_inst_18_19_17_14_10_tsni, chop_inst_18_19_17_14_9_tsni, divMod_inst_18_19_17_14_9_3_tsni, findKQ_inst_18_19_16_tsni, divMod_inst_18_19_16_7_tsni, doLine_inst_20_21_tsni, multiTest_inst_20_21_19_tsni, findKQ_inst_20_21_19_16_tsni, divMod_inst_20_21_19_16_7_tsni, singleTest_inst_20_21_19_17_tsni, random_inst_20_21_19_17_14_tsni, chop_inst_20_21_19_17_14_9_tsni, divMod_inst_20_21_19_17_14_9_3_tsni, splitAt_lz_inst_20_21_19_17_14_10_tsni, uniform_inst_20_21_19_17_14_11_tsni, map_inst_20_21_19_17_14_11_12_tsni, doInput_inst_22_23_tsni, doLine_inst_22_23_21_tsni, multiTest_inst_22_23_21_19_tsni, singleTest_inst_22_23_21_19_17_tsni, random_inst_22_23_21_19_17_14_tsni, uniform_inst_22_23_21_19_17_14_11_tsni, map_inst_22_23_21_19_17_14_11_12_tsni, splitAt_lz_inst_22_23_21_19_17_14_10_tsni, chop_inst_22_23_21_19_17_14_9_tsni, divMod_inst_22_23_21_19_17_14_9_3_tsni, findKQ_inst_22_23_21_19_16_tsni, divMod_inst_22_23_21_19_16_7_tsni, lines_inst_24_25_tsni, break__inst_24_25_1_tsni, process_inst_24_26_tsni, doInput_inst_24_26_23_tsni, doLine_inst_24_26_23_21_tsni, multiTest_inst_24_26_23_21_19_tsni, findKQ_inst_24_26_23_21_19_16_tsni, divMod_inst_24_26_23_21_19_16_7_tsni, singleTest_inst_24_26_23_21_19_17_tsni, random_inst_24_26_23_21_19_17_14_tsni, chop_inst_24_26_23_21_19_17_14_9_tsni, divMod_inst_24_26_23_21_19_17_14_9_3_tsni, splitAt_lz_inst_24_26_23_21_19_17_14_10_tsni, uniform_inst_24_26_23_21_19_17_14_11_tsni, map_inst_24_26_23_21_19_17_14_11_12_tsni, testPrimetest_nofib_inst_27_28_tsni, process_inst_27_28_26_tsni, doInput_inst_27_28_26_23_tsni, doLine_inst_27_28_26_23_21_tsni, multiTest_inst_27_28_26_23_21_19_tsni, singleTest_inst_27_28_26_23_21_19_17_tsni, random_inst_27_28_26_23_21_19_17_14_tsni, uniform_inst_27_28_26_23_21_19_17_14_11_tsni, map_inst_27_28_26_23_21_19_17_14_11_12_tsni, splitAt_lz_inst_27_28_26_23_21_19_17_14_10_tsni, chop_inst_27_28_26_23_21_19_17_14_9_tsni, divMod_inst_27_28_26_23_21_19_17_14_9_3_tsni, findKQ_inst_27_28_26_23_21_19_16_tsni, divMod_inst_27_28_26_23_21_19_16_7_tsni, lines_inst_27_28_25_tsni, break__inst_27_28_25_1_tsni, makeNumber_inst_8_29_tsni, foldl_inst_8_29_30_tsni, makeNumber_inst_13_14_29_tsni, foldl_inst_13_14_29_30_tsni, makeNumber_inst_15_17_14_29_tsni, foldl_inst_15_17_14_29_30_tsni, singleTestX_inst_15_17_31_tsni, makeNumber_inst_18_19_17_14_29_tsni, foldl_inst_18_19_17_14_29_30_tsni, singleTestX_inst_18_19_17_31_tsni, makeNumber_inst_20_21_19_17_14_29_tsni, foldl_inst_20_21_19_17_14_29_30_tsni, singleTestX_inst_20_21_19_17_31_tsni, makeNumber_inst_22_23_21_19_17_14_29_tsni, foldl_inst_22_23_21_19_17_14_29_30_tsni, singleTestX_inst_22_23_21_19_17_31_tsni, makeNumber_inst_24_26_23_21_19_17_14_29_tsni, foldl_inst_24_26_23_21_19_17_14_29_30_tsni, singleTestX_inst_24_26_23_21_19_17_31_tsni, int_val_of_string_inst_24_26_23_21_32_tsni, makeNumber_inst_27_28_26_23_21_19_17_14_29_tsni, foldl_inst_27_28_26_23_21_19_17_14_29_30_tsni, singleTestX_inst_27_28_26_23_21_19_17_31_tsni, int_val_of_string_inst_27_28_26_23_21_32_tsni, match_s__rest_inst_0_tsni, match_s__rest_inst_24_25_tsni, match_s__rest_inst_27_28_25_tsni, match_xs_arm_Cons_inst_8_29_30_tsni, match_xs_arm_Nil_inst_8_29_30_tsni, match_xs_arm_Cons_inst_13_14_29_30_tsni, match_xs_arm_Nil_inst_13_14_29_30_tsni, match_xs_arm_Cons_inst_15_17_14_29_30_tsni, match_xs_arm_Nil_inst_15_17_14_29_30_tsni, match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni, match_xs_arm_Nil_inst_18_19_17_14_29_30_tsni, match_scrut_arm_Deforest_Arr_2_inst_18_tsni, match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni, match_xs_arm_Nil_inst_20_21_19_17_14_29_30_tsni, match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni, match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni, match_xs_arm_Nil_inst_22_23_21_19_17_14_29_30_tsni, match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni, match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni, match_xs_arm_Nil_inst_24_26_23_21_19_17_14_29_30_tsni, match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni, match_l_arm_Nil_inst_24_26_23_21_32_tsni, match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni, match_xs_arm_Nil_inst_27_28_26_23_21_19_17_14_29_30_tsni, match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni, match_l_arm_Nil_inst_27_28_26_23_21_32_tsni;
match_s__rest_inst_0_tsni = function match_s__rest_inst_0_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_s__rest_inst_24_25_tsni = function match_s__rest_inst_24_25_tsni(l, tmp) {
  let tt, _deforest_Cons_head, _deforest_Cons_tail;
  tt = tmp;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tt;
  return (state) => {
    let param0, param1, l1, ls, lambda;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    l1 = param0;
    ls = param1;
    lambda = (undefined, function (state1) {
      return doInput_inst_24_26_23_tsni(state1, ls)
    });
    return doLine_inst_24_26_23_21_tsni(l1, lambda, state)
  }
};
match_s__rest_inst_27_28_25_tsni = function match_s__rest_inst_27_28_25_tsni(l, tmp) {
  let tt, _deforest_Cons_head, _deforest_Cons_tail;
  tt = tmp;
  _deforest_Cons_head = l;
  _deforest_Cons_tail = tt;
  return (state) => {
    let param0, param1, l1, ls, lambda;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    l1 = param0;
    ls = param1;
    lambda = (undefined, function (state1) {
      return doInput_inst_27_28_26_23_tsni(state1, ls)
    });
    return doLine_inst_27_28_26_23_21_tsni(l1, lambda, state)
  }
};
match_xs_arm_Cons_inst_8_29_30_tsni = function match_xs_arm_Cons_inst_8_29_30_tsni(f, a, _deforest_Cons_head_inst_8_29_30_tsni, _deforest_Cons_tail_inst_8_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_8_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_8_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_8_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_8_29_30_tsni = function match_xs_arm_Nil_inst_8_29_30_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_13_14_29_30_tsni = function match_xs_arm_Cons_inst_13_14_29_30_tsni(f, a, _deforest_Cons_head_inst_13_14_29_30_tsni, _deforest_Cons_tail_inst_13_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_13_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_13_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_13_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_13_14_29_30_tsni = function match_xs_arm_Nil_inst_13_14_29_30_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_15_17_14_29_30_tsni = function match_xs_arm_Cons_inst_15_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_15_17_14_29_30_tsni, _deforest_Cons_tail_inst_15_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_15_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_15_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_15_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_15_17_14_29_30_tsni = function match_xs_arm_Nil_inst_15_17_14_29_30_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni = function match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_18_19_17_14_29_30_tsni, _deforest_Cons_tail_inst_18_19_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_18_19_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_18_19_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_18_19_17_14_29_30_tsni = function match_xs_arm_Nil_inst_18_19_17_14_29_30_tsni(f, a) {
  return a
};
match_scrut_arm_Deforest_Arr_2_inst_18_tsni = function match_scrut_arm_Deforest_Arr_2_inst_18_tsni(cont, _deforest_Deforest_Arr_2_0_inst_18_tsni, _deforest_Deforest_Arr_2_1_inst_18_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_18_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
};
match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni = function match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_20_21_19_17_14_29_30_tsni, _deforest_Cons_tail_inst_20_21_19_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_20_21_19_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_20_21_19_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_20_21_19_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_20_21_19_17_14_29_30_tsni = function match_xs_arm_Nil_inst_20_21_19_17_14_29_30_tsni(f, a) {
  return a
};
match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni = function match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni(cont, _deforest_Deforest_Arr_2_0_inst_20_21_tsni, _deforest_Deforest_Arr_2_1_inst_20_21_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_20_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_20_21_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
};
match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni = function match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_22_23_21_19_17_14_29_30_tsni, _deforest_Cons_tail_inst_22_23_21_19_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_22_23_21_19_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_22_23_21_19_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_22_23_21_19_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_22_23_21_19_17_14_29_30_tsni = function match_xs_arm_Nil_inst_22_23_21_19_17_14_29_30_tsni(f, a) {
  return a
};
match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni = function match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni(cont, _deforest_Deforest_Arr_2_0_inst_22_23_21_tsni, _deforest_Deforest_Arr_2_1_inst_22_23_21_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_22_23_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_22_23_21_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
};
match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni = function match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_24_26_23_21_19_17_14_29_30_tsni, _deforest_Cons_tail_inst_24_26_23_21_19_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_24_26_23_21_19_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_24_26_23_21_19_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_24_26_23_21_19_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_24_26_23_21_19_17_14_29_30_tsni = function match_xs_arm_Nil_inst_24_26_23_21_19_17_14_29_30_tsni(f, a) {
  return a
};
match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni = function match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_0_inst_24_26_23_21_tsni, _deforest_Deforest_Arr_2_1_inst_24_26_23_21_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_24_26_23_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_24_26_23_21_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
};
match_l_arm_Nil_inst_24_26_23_21_32_tsni = function match_l_arm_Nil_inst_24_26_23_21_32_tsni(f, a) {
  return a
};
match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni = function match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head_inst_27_28_26_23_21_19_17_14_29_30_tsni, _deforest_Cons_tail_inst_27_28_26_23_21_19_17_14_29_30_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_27_28_26_23_21_19_17_14_29_30_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_26_23_21_19_17_14_29_30_tsni;
  h = param0;
  t = param1;
  tmp = runtime.safeCall(f(a, h));
  return foldl_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, tmp, t)
};
match_xs_arm_Nil_inst_27_28_26_23_21_19_17_14_29_30_tsni = function match_xs_arm_Nil_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a) {
  return a
};
match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni = function match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_0_inst_27_28_26_23_21_tsni, _deforest_Deforest_Arr_2_1_inst_27_28_26_23_21_tsni) {
  let first1, first0, t, rs_, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_27_28_26_23_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_27_28_26_23_21_tsni;
  t = first0;
  rs_ = first1;
  if (t === true) {
    tmp = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Probably prime", tmp)
  } else {
    tmp1 = runtime.safeCall(cont(rs_));
    return NofibPrelude.Cons("Composite", tmp1)
  }
};
match_l_arm_Nil_inst_27_28_26_23_21_32_tsni = function match_l_arm_Nil_inst_27_28_26_23_21_32_tsni(f, a) {
  return a
};
break__inst_0_1_tsni = function break__inst_0_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_0_tsni(l, tmp2)
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
        return match_s__rest_inst_0_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_0_1_tsni(p, xs);
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
divMod_inst_2_3_tsni = function divMod_inst_2_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
chop_inst_4_5_tsni = function chop_inst_4_5_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_4_5_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_4_5_3_tsni = function divMod_inst_4_5_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
divMod_inst_6_7_tsni = function divMod_inst_6_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
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
chop_inst_8_9_tsni = function chop_inst_8_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_8_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_8_9_3_tsni = function divMod_inst_8_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_8_10_tsni = function splitAt_lz_inst_8_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_8_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_8_29_tsni(65536, tmp2);
    arr1 = [
      tmp3,
      rs2
    ];
    return arr1
  };
  return arr
};
uniform_inst_8_11_tsni = function uniform_inst_8_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_8_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_8_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
          tmp2 = uniform_inst_8_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_8_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_8_11_12_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_8_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
map_inst_8_11_12_tsni = function map_inst_8_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_8_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_8_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_8_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
random_inst_13_14_tsni = function random_inst_13_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_13_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_13_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_13_14_11_tsni = function uniform_inst_13_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_13_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_13_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
          tmp2 = uniform_inst_13_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_13_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_13_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_13_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
map_inst_13_14_11_12_tsni = function map_inst_13_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_13_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_13_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_13_14_10_tsni = function splitAt_lz_inst_13_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_13_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_13_14_29_tsni(65536, tmp2);
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
chop_inst_13_14_9_tsni = function chop_inst_13_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_13_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_13_14_9_3_tsni = function divMod_inst_13_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_15_16_tsni = function findKQ_inst_15_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_15_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_15_16_7_tsni = function divMod_inst_15_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
singleTest_inst_15_17_tsni = function singleTest_inst_15_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_15_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_15_17_14_tsni = function random_inst_15_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_15_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_15_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_15_17_14_9_tsni = function chop_inst_15_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_15_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_15_17_14_9_3_tsni = function divMod_inst_15_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_15_17_14_10_tsni = function splitAt_lz_inst_15_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_15_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_15_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_15_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
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
uniform_inst_15_17_14_11_tsni = function uniform_inst_15_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_15_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_15_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
          tmp2 = uniform_inst_15_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_15_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_15_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_15_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
map_inst_15_17_14_11_12_tsni = function map_inst_15_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_15_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_15_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
multiTest_inst_18_19_tsni = function multiTest_inst_18_19_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_01 = true;
      _deforest_Deforest_Arr_2_11 = rs1;
      arr1 = (cont) => {
        return match_scrut_arm_Deforest_Arr_2_inst_18_tsni(cont, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr1
    } else {
      tmp3 = findKQ_inst_18_19_16_tsni(n);
      scrut1 = singleTest_inst_18_19_17_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_18_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest(k, rs)
  }
};
singleTest_inst_18_19_17_tsni = function singleTest_inst_18_19_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_18_19_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_18_19_17_14_tsni = function random_inst_18_19_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_18_19_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_18_19_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_18_19_17_14_11_tsni = function uniform_inst_18_19_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_18_19_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
          tmp2 = uniform_inst_18_19_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_18_19_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
map_inst_18_19_17_14_11_12_tsni = function map_inst_18_19_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_18_19_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_18_19_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_18_19_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_18_19_17_14_10_tsni = function splitAt_lz_inst_18_19_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_18_19_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_18_19_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_18_19_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_18_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
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
chop_inst_18_19_17_14_9_tsni = function chop_inst_18_19_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_18_19_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_18_19_17_14_9_3_tsni = function divMod_inst_18_19_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_18_19_16_tsni = function findKQ_inst_18_19_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_18_19_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_18_19_16_7_tsni = function divMod_inst_18_19_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
doLine_inst_20_21_tsni = function doLine_inst_20_21_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_20_21_19_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_20_21_19_tsni = function multiTest_inst_20_21_19_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_01 = true;
      _deforest_Deforest_Arr_2_11 = rs1;
      arr1 = (cont) => {
        return match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni(cont, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr1
    } else {
      tmp3 = findKQ_inst_20_21_19_16_tsni(n);
      scrut1 = singleTest_inst_20_21_19_17_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest(k, rs)
  }
};
findKQ_inst_20_21_19_16_tsni = function findKQ_inst_20_21_19_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_20_21_19_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_20_21_19_16_7_tsni = function divMod_inst_20_21_19_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
singleTest_inst_20_21_19_17_tsni = function singleTest_inst_20_21_19_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_20_21_19_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_20_21_19_17_14_tsni = function random_inst_20_21_19_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_20_21_19_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_20_21_19_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_20_21_19_17_14_9_tsni = function chop_inst_20_21_19_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_20_21_19_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_20_21_19_17_14_9_3_tsni = function divMod_inst_20_21_19_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_20_21_19_17_14_10_tsni = function splitAt_lz_inst_20_21_19_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_20_21_19_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_20_21_19_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_20_21_19_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_20_21_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
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
uniform_inst_20_21_19_17_14_11_tsni = function uniform_inst_20_21_19_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_20_21_19_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
          tmp2 = uniform_inst_20_21_19_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_20_21_19_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
map_inst_20_21_19_17_14_11_12_tsni = function map_inst_20_21_19_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_21_19_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_20_21_19_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_20_21_19_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
doInput_inst_22_23_tsni = function doInput_inst_22_23_tsni(state, lls) {
  let param0, param1, l, ls, lambda;
  if (lls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (lls instanceof NofibPrelude.Cons.class) {
    param0 = lls.head;
    param1 = lls.tail;
    l = param0;
    ls = param1;
    lambda = (undefined, function (state1) {
      return doInput_inst_22_23_tsni(state1, ls)
    });
    return doLine_inst_22_23_21_tsni(l, lambda, state)
  } else {
    throw new globalThis.Error("match error");
  }
};
doLine_inst_22_23_21_tsni = function doLine_inst_22_23_21_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = primetest.int_val_of_string(cs);
  n = tmp;
  scrut = multiTest_inst_22_23_21_19_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_22_23_21_19_tsni = function multiTest_inst_22_23_21_19_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_01 = true;
      _deforest_Deforest_Arr_2_11 = rs1;
      arr1 = (cont) => {
        return match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni(cont, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr1
    } else {
      tmp3 = findKQ_inst_22_23_21_19_16_tsni(n);
      scrut1 = singleTest_inst_22_23_21_19_17_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest(k, rs)
  }
};
singleTest_inst_22_23_21_19_17_tsni = function singleTest_inst_22_23_21_19_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_22_23_21_19_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_22_23_21_19_17_14_tsni = function random_inst_22_23_21_19_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_22_23_21_19_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_22_23_21_19_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_22_23_21_19_17_14_11_tsni = function uniform_inst_22_23_21_19_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_22_23_21_19_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
          tmp2 = uniform_inst_22_23_21_19_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_22_23_21_19_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
map_inst_22_23_21_19_17_14_11_12_tsni = function map_inst_22_23_21_19_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_22_23_21_19_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_22_23_21_19_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_22_23_21_19_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_22_23_21_19_17_14_10_tsni = function splitAt_lz_inst_22_23_21_19_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_22_23_21_19_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_22_23_21_19_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_22_23_21_19_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_22_23_21_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
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
chop_inst_22_23_21_19_17_14_9_tsni = function chop_inst_22_23_21_19_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_22_23_21_19_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_22_23_21_19_17_14_9_3_tsni = function divMod_inst_22_23_21_19_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_22_23_21_19_16_tsni = function findKQ_inst_22_23_21_19_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_22_23_21_19_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_22_23_21_19_16_7_tsni = function divMod_inst_22_23_21_19_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
lines_inst_24_25_tsni = function lines_inst_24_25_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  lambda = (undefined, function (x) {
    return x == "|"
  });
  scrut = break__inst_24_25_1_tsni(lambda, s);
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
break__inst_24_25_1_tsni = function break__inst_24_25_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      (f, a) => {
        return match_l_arm_Nil_inst_24_26_23_21_32_tsni(f, a)
      },
      (l) => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_24_25_tsni(l, tmp2)
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
        tmp2 = lines_inst_24_25_tsni(s__);
        return match_s__rest_inst_24_25_tsni(l, tmp2)
      };
      arr1 = [
        (f, a) => {
          return match_l_arm_Nil_inst_24_26_23_21_32_tsni(f, a)
        },
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_24_25_1_tsni(p, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = ys;
        tmp1 = (f, a) => {
          let param01, param11, h, t, tmp2, tmp3, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          h = param01;
          t = param11;
          tmp2 = 10 * a;
          tmp3 = primetest.int_val_of_char(h);
          tmp4 = tmp2 + tmp3;
          return f(t, tmp4)
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
process_inst_24_26_tsni = function process_inst_24_26_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_24_26_23_tsni(tmp, process_arg1)
};
doInput_inst_24_26_23_tsni = function doInput_inst_24_26_23_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
doLine_inst_24_26_23_21_tsni = function doLine_inst_24_26_23_21_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = int_val_of_string_inst_24_26_23_21_32_tsni(cs);
  n = tmp;
  scrut = multiTest_inst_24_26_23_21_19_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_24_26_23_21_19_tsni = function multiTest_inst_24_26_23_21_19_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_01 = true;
      _deforest_Deforest_Arr_2_11 = rs1;
      arr1 = (cont) => {
        return match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr1
    } else {
      tmp3 = findKQ_inst_24_26_23_21_19_16_tsni(n);
      scrut1 = singleTest_inst_24_26_23_21_19_17_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest(k, rs)
  }
};
findKQ_inst_24_26_23_21_19_16_tsni = function findKQ_inst_24_26_23_21_19_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_24_26_23_21_19_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_24_26_23_21_19_16_7_tsni = function divMod_inst_24_26_23_21_19_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
singleTest_inst_24_26_23_21_19_17_tsni = function singleTest_inst_24_26_23_21_19_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_24_26_23_21_19_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_24_26_23_21_19_17_14_tsni = function random_inst_24_26_23_21_19_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_24_26_23_21_19_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_24_26_23_21_19_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
chop_inst_24_26_23_21_19_17_14_9_tsni = function chop_inst_24_26_23_21_19_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_24_26_23_21_19_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_24_26_23_21_19_17_14_9_3_tsni = function divMod_inst_24_26_23_21_19_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
splitAt_lz_inst_24_26_23_21_19_17_14_10_tsni = function splitAt_lz_inst_24_26_23_21_19_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_24_26_23_21_19_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_24_26_23_21_19_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_24_26_23_21_19_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_24_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
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
uniform_inst_24_26_23_21_19_17_14_11_tsni = function uniform_inst_24_26_23_21_19_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail = (f, a) => {
          return match_xs_arm_Nil_inst_24_26_23_21_19_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
          tmp2 = uniform_inst_24_26_23_21_19_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_24_26_23_21_19_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head2 = t;
          _deforest_Cons_tail2 = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
map_inst_24_26_23_21_19_17_14_11_12_tsni = function map_inst_24_26_23_21_19_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_26_23_21_19_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_24_26_23_21_19_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_24_26_23_21_19_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testPrimetest_nofib_inst_27_28_tsni = function testPrimetest_nofib_inst_27_28_tsni(d) {
  let cts, tmp, tmp1;
  tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
  cts = tmp;
  tmp1 = lines_inst_27_28_25_tsni(cts);
  return process_inst_27_28_26_tsni(tmp1)
};
process_inst_27_28_26_tsni = function process_inst_27_28_26_tsni(process_arg1) {
  let tmp;
  tmp = primetest.randomInts(111, 47);
  return doInput_inst_27_28_26_23_tsni(tmp, process_arg1)
};
doInput_inst_27_28_26_23_tsni = function doInput_inst_27_28_26_23_tsni(state, lls) {
  return runtime.safeCall(lls(state))
};
doLine_inst_27_28_26_23_21_tsni = function doLine_inst_27_28_26_23_21_tsni(cs, cont, rs) {
  let n, scrut, tmp;
  tmp = int_val_of_string_inst_27_28_26_23_21_32_tsni(cs);
  n = tmp;
  scrut = multiTest_inst_27_28_26_23_21_19_tsni(100, rs, n);
  return runtime.safeCall(scrut(cont))
};
multiTest_inst_27_28_26_23_21_19_tsni = function multiTest_inst_27_28_26_23_21_19_tsni(k, rs, n) {
  let mTest, scrut, tmp, tmp1, tmp2, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  mTest = function mTest(k1, rs1) {
    let scrut1, scrut2, arr1, tmp3, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    scrut2 = k1 == 0;
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_01 = true;
      _deforest_Deforest_Arr_2_11 = rs1;
      arr1 = (cont) => {
        return match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return arr1
    } else {
      tmp3 = findKQ_inst_27_28_26_23_21_19_16_tsni(n);
      scrut1 = singleTest_inst_27_28_26_23_21_19_17_tsni(n, tmp3, rs1);
      return runtime.safeCall(scrut1(mTest, k1))
    }
  };
  tmp = n <= 1;
  tmp1 = primetest.even(n);
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = n == 2;
    _deforest_Deforest_Arr_2_0 = tmp2;
    _deforest_Deforest_Arr_2_1 = rs;
    arr = (cont) => {
      return match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else {
    return mTest(k, rs)
  }
};
singleTest_inst_27_28_26_23_21_19_17_tsni = function singleTest_inst_27_28_26_23_21_19_17_tsni(n, kq, rs) {
  let scrut, tmp;
  tmp = n - 2;
  scrut = random_inst_27_28_26_23_21_19_17_14_tsni(tmp, rs);
  return runtime.safeCall(scrut(n, kq))
};
random_inst_27_28_26_23_21_19_17_14_tsni = function random_inst_27_28_26_23_21_19_17_14_tsni(n, rs) {
  let ns, scrut, tmp, tmp1;
  tmp = chop_inst_27_28_26_23_21_19_17_14_9_tsni(65536, n);
  ns = tmp;
  tmp1 = NofibPrelude.listLen(ns);
  scrut = splitAt_lz_inst_27_28_26_23_21_19_17_14_10_tsni(tmp1, rs);
  return runtime.safeCall(scrut(ns))
};
uniform_inst_27_28_26_23_21_19_17_14_11_tsni = function uniform_inst_27_28_26_23_21_19_17_14_11_tsni(nns, rrs) {
  let param0, param1, n, ns, param01, param11, r, rs, t, scrut, n1, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
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
        _deforest_Cons_tail2 = (f, a) => {
          return match_xs_arm_Nil_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a)
        };
        return (f, a) => {
          return match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head2, _deforest_Cons_tail2)
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
          tmp2 = uniform_inst_27_28_26_23_21_19_17_14_11_tsni(ns, rs);
          _deforest_Cons_head1 = t;
          _deforest_Cons_tail1 = tmp2;
          return (f, a) => {
            return match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          lambda = (undefined, function (x) {
            return NofibPrelude.intMod(x, 65536)
          });
          tmp3 = map_inst_27_28_26_23_21_19_17_14_11_12_tsni(lambda, rs);
          _deforest_Cons_head = t;
          _deforest_Cons_tail = tmp3;
          return (f, a) => {
            return match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a, _deforest_Cons_head, _deforest_Cons_tail)
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
map_inst_27_28_26_23_21_19_17_14_11_12_tsni = function map_inst_27_28_26_23_21_19_17_14_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_28_26_23_21_19_17_14_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, a) => {
      return match_xs_arm_Cons_inst_27_28_26_23_21_19_17_14_29_30_tsni(f1, a, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, a) => {
      return match_xs_arm_Nil_inst_27_28_26_23_21_19_17_14_29_30_tsni(f1, a)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
splitAt_lz_inst_27_28_26_23_21_19_17_14_10_tsni = function splitAt_lz_inst_27_28_26_23_21_19_17_14_10_tsni(n, ls) {
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
    tmp2 = uniform_inst_27_28_26_23_21_19_17_14_11_tsni(ns, rs1);
    tmp3 = makeNumber_inst_27_28_26_23_21_19_17_14_29_tsni(65536, tmp2);
    _deforest_Deforest_Arr_2_01 = tmp3;
    _deforest_Deforest_Arr_2_11 = rs2;
    arr1 = (n1, kq) => {
      let first11, first01, x, rs_, tmp4, tmp5, arr2, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first01 = _deforest_Deforest_Arr_2_01;
      first11 = _deforest_Deforest_Arr_2_11;
      x = first01;
      rs_ = first11;
      tmp4 = 2 + x;
      tmp5 = singleTestX_inst_27_28_26_23_21_19_17_31_tsni(n1, kq, tmp4);
      _deforest_Deforest_Arr_2_02 = tmp5;
      _deforest_Deforest_Arr_2_12 = rs_;
      arr2 = (mTest, k) => {
        let first12, first02, t, rs_1, tmp6, arr3, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13;
        first02 = _deforest_Deforest_Arr_2_02;
        first12 = _deforest_Deforest_Arr_2_12;
        t = first02;
        rs_1 = first12;
        if (t === true) {
          tmp6 = k - 1;
          return mTest(tmp6, rs_1)
        } else {
          _deforest_Deforest_Arr_2_03 = false;
          _deforest_Deforest_Arr_2_13 = rs_1;
          arr3 = (cont) => {
            return match_scrut_arm_Deforest_Arr_2_inst_27_28_26_23_21_tsni(cont, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
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
chop_inst_27_28_26_23_21_19_17_14_9_tsni = function chop_inst_27_28_26_23_21_19_17_14_9_tsni(b, n) {
  let chop_;
  chop_ = function chop_(a, n1) {
    let scrut;
    scrut = divMod_inst_27_28_26_23_21_19_17_14_9_3_tsni(n1, b);
    return runtime.safeCall(scrut(chop_, a, n1))
  };
  return chop_(NofibPrelude.Nil, n)
};
divMod_inst_27_28_26_23_21_19_17_14_9_3_tsni = function divMod_inst_27_28_26_23_21_19_17_14_9_3_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (chop_, a1, n) => {
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
      return chop_(tmp2, q)
    }
  };
  return arr
};
findKQ_inst_27_28_26_23_21_19_16_tsni = function findKQ_inst_27_28_26_23_21_19_16_tsni(n) {
  let f, tmp;
  f = function f(k, q) {
    let scrut;
    scrut = divMod_inst_27_28_26_23_21_19_16_7_tsni(q, 2);
    return runtime.safeCall(scrut(f, k, q))
  };
  tmp = n - 1;
  return f(0, tmp)
};
divMod_inst_27_28_26_23_21_19_16_7_tsni = function divMod_inst_27_28_26_23_21_19_16_7_tsni(a, b) {
  let tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.intDiv(a, b);
  tmp1 = NofibPrelude.intMod(a, b);
  _deforest_Deforest_Arr_2_0 = tmp;
  _deforest_Deforest_Arr_2_1 = tmp1;
  arr = (f, k, q) => {
    let first1, first0, d, r, scrut, tmp2, arr1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    d = first0;
    r = first1;
    scrut = r == 0;
    if (scrut === true) {
      tmp2 = k + 1;
      return f(tmp2, d)
    } else {
      _deforest_Deforest_Arr_2_01 = k;
      _deforest_Deforest_Arr_2_11 = q;
      arr1 = (square, witness, n, x) => {
        let first11, first01, k1, q1, scrut1, param0, param1, t, ts, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        k1 = first01;
        q1 = first11;
        tmp3 = primetest.powerMod(x, q1, n);
        tmp4 = NofibPrelude.iterate(square, tmp3);
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
          tmp9 = witness(ts);
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
lines_inst_27_28_25_tsni = function lines_inst_27_28_25_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  lambda = (undefined, function (x) {
    return x == "|"
  });
  scrut = break__inst_27_28_25_1_tsni(lambda, s);
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
break__inst_27_28_25_1_tsni = function break__inst_27_28_25_1_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      (f, a) => {
        return match_l_arm_Nil_inst_27_28_26_23_21_32_tsni(f, a)
      },
      (l) => {
        let tmp2;
        tmp2 = (state) => {
          return NofibPrelude.Nil
        };
        return match_s__rest_inst_27_28_25_tsni(l, tmp2)
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
        tmp2 = lines_inst_27_28_25_tsni(s__);
        return match_s__rest_inst_27_28_25_tsni(l, tmp2)
      };
      arr1 = [
        (f, a) => {
          return match_l_arm_Nil_inst_27_28_26_23_21_32_tsni(f, a)
        },
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_27_28_25_1_tsni(p, xs);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        ys = first0;
        zs = first1;
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = ys;
        tmp1 = (f, a) => {
          let param01, param11, h, t, tmp2, tmp3, tmp4;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          h = param01;
          t = param11;
          tmp2 = 10 * a;
          tmp3 = primetest.int_val_of_char(h);
          tmp4 = tmp2 + tmp3;
          return f(t, tmp4)
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
makeNumber_inst_8_29_tsni = function makeNumber_inst_8_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_8_29_30_tsni(lambda, 0, ls)
};
foldl_inst_8_29_30_tsni = function foldl_inst_8_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_13_14_29_tsni = function makeNumber_inst_13_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_13_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_13_14_29_30_tsni = function foldl_inst_13_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
makeNumber_inst_15_17_14_29_tsni = function makeNumber_inst_15_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_15_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_15_17_14_29_30_tsni = function foldl_inst_15_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_15_17_31_tsni = function singleTestX_inst_15_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
makeNumber_inst_18_19_17_14_29_tsni = function makeNumber_inst_18_19_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_18_19_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_18_19_17_14_29_30_tsni = function foldl_inst_18_19_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_18_19_17_31_tsni = function singleTestX_inst_18_19_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
makeNumber_inst_20_21_19_17_14_29_tsni = function makeNumber_inst_20_21_19_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_20_21_19_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_20_21_19_17_14_29_30_tsni = function foldl_inst_20_21_19_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_20_21_19_17_31_tsni = function singleTestX_inst_20_21_19_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
makeNumber_inst_22_23_21_19_17_14_29_tsni = function makeNumber_inst_22_23_21_19_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_22_23_21_19_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_22_23_21_19_17_14_29_30_tsni = function foldl_inst_22_23_21_19_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_22_23_21_19_17_31_tsni = function singleTestX_inst_22_23_21_19_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
makeNumber_inst_24_26_23_21_19_17_14_29_tsni = function makeNumber_inst_24_26_23_21_19_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_24_26_23_21_19_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_24_26_23_21_19_17_14_29_30_tsni = function foldl_inst_24_26_23_21_19_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_24_26_23_21_19_17_31_tsni = function singleTestX_inst_24_26_23_21_19_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
int_val_of_string_inst_24_26_23_21_32_tsni = function int_val_of_string_inst_24_26_23_21_32_tsni(s) {
  let f;
  f = function f(l, a) {
    return runtime.safeCall(l(f, a))
  };
  return f(s, 0)
};
makeNumber_inst_27_28_26_23_21_19_17_14_29_tsni = function makeNumber_inst_27_28_26_23_21_19_17_14_29_tsni(b, ls) {
  let lambda;
  lambda = (undefined, function (a, x) {
    let tmp;
    tmp = a * b;
    return tmp + x
  });
  return foldl_inst_27_28_26_23_21_19_17_14_29_30_tsni(lambda, 0, ls)
};
foldl_inst_27_28_26_23_21_19_17_14_29_30_tsni = function foldl_inst_27_28_26_23_21_19_17_14_29_30_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
singleTestX_inst_27_28_26_23_21_19_17_31_tsni = function singleTestX_inst_27_28_26_23_21_19_17_31_tsni(n, kq, x) {
  let square, witness;
  square = function square(x1) {
    let tmp;
    tmp = x1 * x1;
    return NofibPrelude.intMod(tmp, n)
  };
  witness = function witness(ls) {
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
          return witness(ts)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  return runtime.safeCall(kq(square, witness, n, x))
};
int_val_of_string_inst_27_28_26_23_21_32_tsni = function int_val_of_string_inst_27_28_26_23_21_32_tsni(s) {
  let f;
  f = function f(l, a) {
    return runtime.safeCall(l(f, a))
  };
  return f(s, 0)
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
    let f;
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
        tmp1 = primetest.int_val_of_char(h);
        tmp2 = tmp + tmp1;
        return f(t, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
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
    let scrut, first1, first0, l, s_, lambda;
    lambda = (undefined, function (x2) {
      return x2 == "|"
    });
    scrut = break__inst_0_1_tsni(lambda, s1);
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
    let lambda;
    lambda = (undefined, function (a, x2) {
      let tmp;
      tmp = a * b;
      return tmp + x2
    });
    return NofibPrelude.foldl(lambda, 0, ls1)
  } 
  static chop(b1, n) {
    let chop_;
    chop_ = function chop_(a, n1) {
      let scrut;
      scrut = divMod_inst_2_3_tsni(n1, b1);
      return runtime.safeCall(scrut(chop_, a, n1))
    };
    return chop_(NofibPrelude.Nil, n)
  } 
  static powerMod(a, b2, m) {
    let f, a_, scrut, tmp;
    f = function f(a1, b3, c) {
      let g, scrut1;
      g = function g(a2, b4) {
        let scrut2, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
        scrut2 = primetest.even(b4);
        if (scrut2 === true) {
          tmp1 = a2 * a2;
          tmp2 = NofibPrelude.intMod(tmp1, m);
          tmp3 = NofibPrelude.intDiv(b4, 2);
          return g(tmp2, tmp3)
        } else {
          tmp4 = b4 - 1;
          tmp5 = a2 * c;
          tmp6 = NofibPrelude.intMod(tmp5, m);
          return f(a2, tmp4, tmp6)
        }
      };
      scrut1 = b3 == 0;
      if (scrut1 === true) {
        return c
      } else {
        return g(a1, b3)
      }
    };
    scrut = b2 == 0;
    if (scrut === true) {
      return 1
    } else {
      a_ = NofibPrelude.intMod(a, m);
      tmp = b2 - 1;
      return f(a_, tmp, a_)
    }
  } 
  static log2(x2) {
    let tmp;
    tmp = chop_inst_4_5_tsni(2, x2);
    return NofibPrelude.listLen(tmp)
  } 
  static rands(s11, s2) {
    let k, s1_, s1__, scrut, k_, s2_, s2__, scrut1, z, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, lambda, lambda1;
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
      lambda = (undefined, function () {
        let tmp15, tmp16;
        tmp15 = z + 2147483562;
        tmp16 = primetest.rands(s1__, s2__);
        return NofibPrelude.LzCons(tmp15, tmp16)
      });
      return NofibPrelude.lazy(lambda)
    } else {
      lambda1 = (undefined, function () {
        let tmp15;
        tmp15 = primetest.rands(s1__, s2__);
        return NofibPrelude.LzCons(z, tmp15)
      });
      return NofibPrelude.lazy(lambda1)
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
    let f, tmp;
    f = function f(k, q) {
      let scrut;
      scrut = divMod_inst_6_7_tsni(q, 2);
      return runtime.safeCall(scrut(f, k, q))
    };
    tmp = n1 - 1;
    return f(0, tmp)
  } 
  static uniform(nns, rrs) {
    let param0, param1, n2, ns, param01, param11, r, rs, t, scrut, n3, r1, rs1, tmp, tmp1, tmp2, tmp3, lambda;
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
            lambda = (undefined, function (x3) {
              return NofibPrelude.intMod(x3, 65536)
            });
            tmp3 = NofibPrelude.map(lambda, rs);
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
    tmp = chop_inst_8_9_tsni(65536, n2);
    ns = tmp;
    tmp1 = NofibPrelude.listLen(ns);
    scrut = splitAt_lz_inst_8_10_tsni(tmp1, rs);
    return runtime.safeCall(scrut(ns))
  } 
  static singleTestX(n3, kq, x3) {
    let square, witness, first1, first0, k, q, scrut, param0, param1, t, ts, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    square = function square(x4) {
      let tmp7;
      tmp7 = x4 * x4;
      return NofibPrelude.intMod(tmp7, n3)
    };
    witness = function witness(ls2) {
      let param01, param11, t1, ts1, scrut1, scrut2, tmp7;
      if (ls2 instanceof NofibPrelude.Nil.class) {
        return false
      } else if (ls2 instanceof NofibPrelude.Cons.class) {
        param01 = ls2.head;
        param11 = ls2.tail;
        t1 = param01;
        ts1 = param11;
        tmp7 = n3 - 1;
        scrut2 = t1 == tmp7;
        if (scrut2 === true) {
          return true
        } else {
          scrut1 = t1 == 1;
          if (scrut1 === true) {
            return false
          } else {
            return witness(ts1)
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (globalThis.Array.isArray(kq) && kq.length === 2) {
      first0 = kq[0];
      first1 = kq[1];
      k = first0;
      q = first1;
      tmp = primetest.powerMod(x3, q, n3);
      tmp1 = NofibPrelude.iterate(square, tmp);
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
        tmp6 = witness(ts);
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
    scrut = random_inst_13_14_tsni(tmp, rs1);
    return runtime.safeCall(scrut(n4, kq1))
  } 
  static multiTest(k, rs2, n5) {
    let mTest, scrut, tmp, tmp1, tmp2, arr;
    mTest = function mTest(k1, rs3) {
      let scrut1, scrut2, arr1, tmp3;
      scrut2 = k1 == 0;
      if (scrut2 === true) {
        arr1 = [
          true,
          rs3
        ];
        return arr1
      } else {
        tmp3 = findKQ_inst_15_16_tsni(n5);
        scrut1 = singleTest_inst_15_17_tsni(n5, tmp3, rs3);
        return runtime.safeCall(scrut1(mTest, k1))
      }
    };
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
      return mTest(k, rs2)
    }
  } 
  static doLine(cs, cont, rs3) {
    let n6, scrut, tmp;
    tmp = primetest.int_val_of_string(cs);
    n6 = tmp;
    scrut = multiTest_inst_18_19_tsni(100, rs3, n6);
    return runtime.safeCall(scrut(cont))
  } 
  static doInput(state, lls) {
    let param0, param1, l, ls2, lambda;
    if (lls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (lls instanceof NofibPrelude.Cons.class) {
      param0 = lls.head;
      param1 = lls.tail;
      l = param0;
      ls2 = param1;
      lambda = (undefined, function (state1) {
        return primetest.doInput(state1, ls2)
      });
      return doLine_inst_20_21_tsni(l, lambda, state)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static process(process_arg1) {
    let tmp;
    tmp = primetest.randomInts(111, 47);
    return doInput_inst_22_23_tsni(tmp, process_arg1)
  } 
  static testPrimetest_nofib(d) {
    let cts, tmp, tmp1;
    tmp = NofibPrelude.nofibStringToList("24|48|47|1317|8901");
    cts = tmp;
    tmp1 = lines_inst_24_25_tsni(cts);
    return process_inst_24_26_tsni(tmp1)
  } 
  static main() {
    let tmp;
    tmp = testPrimetest_nofib_inst_27_28_tsni(0);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "primetest"; }
});
let primetest = primetest1; export default primetest;
