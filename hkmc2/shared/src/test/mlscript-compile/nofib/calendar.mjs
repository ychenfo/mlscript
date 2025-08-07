import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let calendar1, map_inst_0_1_tsni, append_inst_0_2_tsni, groop_inst_3_4_tsni, groop_inst_5_6_tsni, emptyPic_inst_7_8_tsni, replicate_inst_7_8_9_tsni, zipWith_inst_7_10_tsni, monthLengths_inst_11_12_tsni, scanl_inst_11_13_tsni, map_inst_11_14_tsni, space_inst_15_16_tsni, replicate_inst_15_16_17_tsni, rjustify_inst_18_19_tsni, space_inst_18_19_16_tsni, replicate_inst_18_19_16_17_tsni, date_inst_20_21_tsni, rjustify_inst_20_21_19_tsni, space_inst_20_21_19_16_tsni, replicate_inst_20_21_19_16_17_tsni, enumFromTo_inst_20_22_tsni, space_inst_23_24_tsni, replicate_inst_23_24_17_tsni, cjustify_inst_25_26_tsni, space_inst_25_26_24_tsni, replicate_inst_25_26_24_17_tsni, block_inst_25_27_tsni, groop_inst_25_27_4_tsni, zipWith_inst_25_28_tsni, zipWith_inst_25_29_tsni, cjustify_inst_25_30_tsni, space_inst_25_30_24_tsni, replicate_inst_25_30_24_17_tsni, dates_inst_25_31_tsni, date_inst_25_31_21_tsni, rjustify_inst_25_31_21_19_tsni, space_inst_25_31_21_19_16_tsni, replicate_inst_25_31_21_19_16_17_tsni, enumFromTo_inst_25_31_22_tsni, block_inst_25_32_tsni, groop_inst_25_32_4_tsni, firstDays_inst_25_33_tsni, map_inst_25_33_14_tsni, scanl_inst_25_33_13_tsni, monthLengths_inst_25_33_12_tsni, take_inst_25_33_34_tsni, monthLengths_inst_25_35_tsni, zip3_inst_25_36_tsni, emptyPic_inst_25_37_tsni, replicate_inst_25_37_9_tsni, unlines_inst_25_38_tsni, map_inst_25_38_1_tsni, append_inst_25_38_2_tsni, cal_inst_39_40_tsni, unlines_inst_39_40_38_tsni, map_inst_39_40_38_1_tsni, append_inst_39_40_38_2_tsni, monthLengths_inst_39_40_35_tsni, firstDays_inst_39_40_33_tsni, monthLengths_inst_39_40_33_12_tsni, scanl_inst_39_40_33_13_tsni, map_inst_39_40_33_14_tsni, take_inst_39_40_33_34_tsni, block_inst_39_40_32_tsni, groop_inst_39_40_32_4_tsni, dates_inst_39_40_31_tsni, date_inst_39_40_31_21_tsni, rjustify_inst_39_40_31_21_19_tsni, space_inst_39_40_31_21_19_16_tsni, replicate_inst_39_40_31_21_19_16_17_tsni, enumFromTo_inst_39_40_31_22_tsni, cjustify_inst_39_40_30_tsni, space_inst_39_40_30_24_tsni, replicate_inst_39_40_30_24_17_tsni, zipWith_inst_39_40_29_tsni, zipWith_inst_39_40_28_tsni, block_inst_39_40_27_tsni, groop_inst_39_40_27_4_tsni, zip3_inst_39_40_36_tsni, emptyPic_inst_39_40_37_tsni, replicate_inst_39_40_37_9_tsni, cjustify_inst_39_40_26_tsni, space_inst_39_40_26_24_tsni, replicate_inst_39_40_26_24_17_tsni, enumFromTo_inst_39_41_tsni, testCalendar_nofib_inst_42_43_tsni, cal_inst_42_43_40_tsni, cjustify_inst_42_43_40_26_tsni, space_inst_42_43_40_26_24_tsni, replicate_inst_42_43_40_26_24_17_tsni, block_inst_42_43_40_27_tsni, groop_inst_42_43_40_27_4_tsni, zipWith_inst_42_43_40_28_tsni, zipWith_inst_42_43_40_29_tsni, cjustify_inst_42_43_40_30_tsni, space_inst_42_43_40_30_24_tsni, replicate_inst_42_43_40_30_24_17_tsni, dates_inst_42_43_40_31_tsni, date_inst_42_43_40_31_21_tsni, rjustify_inst_42_43_40_31_21_19_tsni, space_inst_42_43_40_31_21_19_16_tsni, replicate_inst_42_43_40_31_21_19_16_17_tsni, enumFromTo_inst_42_43_40_31_22_tsni, block_inst_42_43_40_32_tsni, groop_inst_42_43_40_32_4_tsni, firstDays_inst_42_43_40_33_tsni, map_inst_42_43_40_33_14_tsni, scanl_inst_42_43_40_33_13_tsni, monthLengths_inst_42_43_40_33_12_tsni, take_inst_42_43_40_33_34_tsni, monthLengths_inst_42_43_40_35_tsni, zip3_inst_42_43_40_36_tsni, emptyPic_inst_42_43_40_37_tsni, replicate_inst_42_43_40_37_9_tsni, unlines_inst_42_43_40_38_tsni, map_inst_42_43_40_38_1_tsni, append_inst_42_43_40_38_2_tsni, enumFromTo_inst_42_43_41_tsni, map_inst_42_43_44_tsni, concat_inst_42_43_40_38_45_tsni, append_inst_42_43_40_38_45_46_tsni, concat_inst_42_47_tsni, append_inst_42_47_46_tsni, concat_inst_0_45_tsni, append_inst_0_45_46_tsni, map_inst_3_48_tsni, map_inst_5_49_tsni, emptyPic_inst_7_50_tsni, append_inst_7_51_tsni, take_inst_11_34_tsni, append_inst_15_52_tsni, append_inst_18_19_52_tsni, append_inst_20_21_19_52_tsni, map_inst_20_53_tsni, append_inst_23_54_tsni, append_inst_25_26_54_tsni, map_inst_25_27_48_tsni, append_inst_25_55_tsni, append_inst_25_30_54_tsni, append_inst_25_56_tsni, append_inst_25_31_21_19_52_tsni, map_inst_25_31_53_tsni, map_inst_25_32_48_tsni, emptyPic_inst_25_57_tsni, emptyPic_inst_25_58_tsni, append_inst_25_59_tsni, append_inst_25_60_tsni, concat_inst_25_38_45_tsni, append_inst_25_38_45_46_tsni, concat_inst_39_40_38_45_tsni, append_inst_39_40_38_45_46_tsni, emptyPic_inst_39_40_58_tsni, emptyPic_inst_39_40_57_tsni, map_inst_39_40_32_48_tsni, append_inst_39_40_31_21_19_52_tsni, map_inst_39_40_31_53_tsni, append_inst_39_40_59_tsni, append_inst_39_40_30_54_tsni, append_inst_39_40_55_tsni, append_inst_39_40_56_tsni, map_inst_39_40_27_48_tsni, append_inst_39_40_60_tsni, append_inst_39_40_26_54_tsni, map_inst_39_44_tsni, append_inst_42_43_40_26_54_tsni, map_inst_42_43_40_27_48_tsni, append_inst_42_43_40_55_tsni, append_inst_42_43_40_30_54_tsni, append_inst_42_43_40_56_tsni, append_inst_42_43_40_31_21_19_52_tsni, map_inst_42_43_40_31_53_tsni, map_inst_42_43_40_32_48_tsni, emptyPic_inst_42_43_40_57_tsni, emptyPic_inst_42_43_40_58_tsni, append_inst_42_43_40_59_tsni, append_inst_42_43_40_60_tsni, nofibListToString_inst_42_61_tsni, match_xs_arm_Cons_inst_0_45_46_tsni, match_xs_arm_Nil_inst_7_51_tsni, match_ls_arm_Cons_inst_11_13_tsni, match_xs_arm_Cons_inst_11_14_tsni, match_xss_arm_default_inst_25_29_tsni, match_xs_arm_Nil_inst_25_55_tsni, match_xs_arm_Cons_inst_25_33_14_tsni, match_ls_arm_Cons_inst_25_33_13_tsni, match_ys_arm_default_inst_25_36_tsni, match_zs_arm_Cons_inst_25_36_tsni, match_xs_arm_Cons_inst_25_60_tsni, match_xs_arm_Cons_inst_25_38_45_46_tsni, match_xs_arm_Cons_inst_39_40_38_45_46_tsni, match_zs_arm_Cons_inst_39_40_36_tsni, match_ls_arm_Cons_inst_39_40_33_13_tsni, match_xs_arm_Cons_inst_39_40_33_14_tsni, match_ys_arm_default_inst_39_40_36_tsni, match_xs_arm_Nil_inst_39_40_55_tsni, match_xss_arm_default_inst_39_40_29_tsni, match_xs_arm_Cons_inst_39_40_60_tsni, match_xss_arm_default_inst_42_43_40_29_tsni, match_xs_arm_Nil_inst_42_43_40_55_tsni, match_xs_arm_Cons_inst_42_43_40_33_14_tsni, match_ls_arm_Cons_inst_42_43_40_33_13_tsni, match_ys_arm_default_inst_42_43_40_36_tsni, match_zs_arm_Cons_inst_42_43_40_36_tsni, match_xs_arm_Cons_inst_42_43_40_60_tsni, match_xs_arm_Cons_inst_42_43_40_38_45_46_tsni;
match_xs_arm_Cons_inst_0_45_46_tsni = function match_xs_arm_Cons_inst_0_45_46_tsni(ys, _deforest_Cons_head_inst_0_45_46_tsni, _deforest_Cons_tail_inst_0_45_46_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_45_46_tsni;
  param1 = _deforest_Cons_tail_inst_0_45_46_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_45_46_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_7_51_tsni = function match_xs_arm_Nil_inst_7_51_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_11_13_tsni = function match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head_inst_11_13_tsni, _deforest_Cons_tail_inst_11_13_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_11_13_tsni;
  param1 = _deforest_Cons_tail_inst_11_13_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_11_13_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_11_14_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_11_14_tsni = function match_xs_arm_Cons_inst_11_14_tsni(f, _deforest_Cons_head_inst_11_14_tsni, _deforest_Cons_tail_inst_11_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_11_14_tsni;
  param1 = _deforest_Cons_tail_inst_11_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_11_14_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_11_34_tsni(tmp2, t);
      return NofibPrelude.Cons(h, tmp3)
    }
  }
};
match_xss_arm_default_inst_25_29_tsni = function match_xss_arm_default_inst_25_29_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_25_55_tsni(ys)
  }
};
match_xs_arm_Nil_inst_25_55_tsni = function match_xs_arm_Nil_inst_25_55_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_25_33_14_tsni = function match_xs_arm_Cons_inst_25_33_14_tsni(f, _deforest_Cons_head_inst_25_33_14_tsni, _deforest_Cons_tail_inst_25_33_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_25_33_14_tsni;
  param1 = _deforest_Cons_tail_inst_25_33_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_25_33_14_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_25_36_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_25_33_34_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_25_33_13_tsni = function match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head_inst_25_33_13_tsni, _deforest_Cons_tail_inst_25_33_13_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_25_33_13_tsni;
  param1 = _deforest_Cons_tail_inst_25_33_13_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_25_33_13_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_25_33_14_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_25_36_tsni = function match_ys_arm_default_inst_25_36_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_25_36_tsni = function match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head_inst_25_36_tsni, _deforest_Cons_tail_inst_25_36_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_25_36_tsni;
  param1 = _deforest_Cons_tail_inst_25_36_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (title, table) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title(mn);
    tmp2 = table(fd, ml);
    return append_inst_25_56_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_25_36_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xs_arm_Cons_inst_25_60_tsni = function match_xs_arm_Cons_inst_25_60_tsni(ys, _deforest_Cons_head_inst_25_60_tsni, _deforest_Cons_tail_inst_25_60_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_25_60_tsni;
  param1 = _deforest_Cons_tail_inst_25_60_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_25_60_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_25_38_45_46_tsni = function match_xs_arm_Cons_inst_25_38_45_46_tsni(ys, _deforest_Cons_head_inst_25_38_45_46_tsni, _deforest_Cons_tail_inst_25_38_45_46_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_25_38_45_46_tsni;
  param1 = _deforest_Cons_tail_inst_25_38_45_46_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_25_38_45_46_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_39_40_38_45_46_tsni = function match_xs_arm_Cons_inst_39_40_38_45_46_tsni(ys, _deforest_Cons_head_inst_39_40_38_45_46_tsni, _deforest_Cons_tail_inst_39_40_38_45_46_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_39_40_38_45_46_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_38_45_46_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_40_38_45_46_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_zs_arm_Cons_inst_39_40_36_tsni = function match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head_inst_39_40_36_tsni, _deforest_Cons_tail_inst_39_40_36_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_39_40_36_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_36_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (title, table) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title(mn);
    tmp2 = table(fd, ml);
    return append_inst_39_40_56_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_39_40_36_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_39_40_33_13_tsni = function match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head_inst_39_40_33_13_tsni, _deforest_Cons_tail_inst_39_40_33_13_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_40_33_13_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_33_13_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_39_40_33_13_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_39_40_33_14_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_39_40_33_14_tsni = function match_xs_arm_Cons_inst_39_40_33_14_tsni(f, _deforest_Cons_head_inst_39_40_33_14_tsni, _deforest_Cons_tail_inst_39_40_33_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_40_33_14_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_33_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_39_40_33_14_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_39_40_36_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_39_40_33_34_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ys_arm_default_inst_39_40_36_tsni = function match_ys_arm_default_inst_39_40_36_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_39_40_55_tsni = function match_xs_arm_Nil_inst_39_40_55_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_39_40_29_tsni = function match_xss_arm_default_inst_39_40_29_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_39_40_55_tsni(ys)
  }
};
match_xs_arm_Cons_inst_39_40_60_tsni = function match_xs_arm_Cons_inst_39_40_60_tsni(ys, _deforest_Cons_head_inst_39_40_60_tsni, _deforest_Cons_tail_inst_39_40_60_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_39_40_60_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_60_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_40_60_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xss_arm_default_inst_42_43_40_29_tsni = function match_xss_arm_default_inst_42_43_40_29_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_42_43_40_55_tsni(ys)
  }
};
match_xs_arm_Nil_inst_42_43_40_55_tsni = function match_xs_arm_Nil_inst_42_43_40_55_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_42_43_40_33_14_tsni = function match_xs_arm_Cons_inst_42_43_40_33_14_tsni(f, _deforest_Cons_head_inst_42_43_40_33_14_tsni, _deforest_Cons_tail_inst_42_43_40_33_14_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_42_43_40_33_14_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_33_14_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_42_43_40_33_14_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_42_43_40_36_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_42_43_40_33_34_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_42_43_40_33_13_tsni = function match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head_inst_42_43_40_33_13_tsni, _deforest_Cons_tail_inst_42_43_40_33_13_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_42_43_40_33_13_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_33_13_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_42_43_40_33_13_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_42_43_40_33_14_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_42_43_40_36_tsni = function match_ys_arm_default_inst_42_43_40_36_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_42_43_40_36_tsni = function match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head_inst_42_43_40_36_tsni, _deforest_Cons_tail_inst_42_43_40_36_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_42_43_40_36_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_36_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (title, table) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title(mn);
    tmp2 = table(fd, ml);
    return append_inst_42_43_40_56_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_42_43_40_36_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xs_arm_Cons_inst_42_43_40_60_tsni = function match_xs_arm_Cons_inst_42_43_40_60_tsni(ys, _deforest_Cons_head_inst_42_43_40_60_tsni, _deforest_Cons_tail_inst_42_43_40_60_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_42_43_40_60_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_60_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_42_43_40_60_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_42_43_40_38_45_46_tsni = function match_xs_arm_Cons_inst_42_43_40_38_45_46_tsni(ys, _deforest_Cons_head_inst_42_43_40_38_45_46_tsni, _deforest_Cons_tail_inst_42_43_40_38_45_46_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_42_43_40_38_45_46_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_38_45_46_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_42_43_40_38_45_46_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = append_inst_42_47_46_tsni(xs, ys1);
    _deforest_Cons_head1 = x;
    _deforest_Cons_tail1 = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head1;
      param11 = _deforest_Cons_tail1;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_42_61_tsni(t);
      return h + tmp1
    }
  }
};
map_inst_0_1_tsni = function map_inst_0_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_45_tsni(xs2);
      return append_inst_0_45_46_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_2_tsni = function append_inst_0_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_45_46_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
groop_inst_3_4_tsni = function groop_inst_3_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_3_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_3_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
groop_inst_5_6_tsni = function groop_inst_5_6_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_5_6_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_5_49_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
emptyPic_inst_7_8_tsni = function emptyPic_inst_7_8_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_7_8_9_tsni = function replicate_inst_7_8_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, x1, xs) => {
      return (ys) => {
        return match_xs_arm_Nil_inst_7_51_tsni(ys)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_7_8_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, x1, xs) => {
      let param0, param1, y, ys, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      tmp2 = runtime.safeCall(f(x1, y));
      tmp3 = zipWith_inst_7_10_tsni(f, xs, ys);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = append_inst_7_51_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp4)
      }
    }
  }
};
zipWith_inst_7_10_tsni = function zipWith_inst_7_10_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_Nil_inst_7_51_tsni(ys)
    }
  }
};
monthLengths_inst_11_12_tsni = function monthLengths_inst_11_12_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return NofibPrelude.Nil
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_11_14_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_11_13_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_11_13_tsni = function scanl_inst_11_13_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_11_14_tsni = function map_inst_11_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
space_inst_15_16_tsni = function space_inst_15_16_tsni(n) {
  return replicate_inst_15_16_17_tsni(n, " ")
};
replicate_inst_15_16_17_tsni = function replicate_inst_15_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_15_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_15_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
rjustify_inst_18_19_tsni = function rjustify_inst_18_19_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_18_19_16_tsni(tmp1);
  return append_inst_18_19_52_tsni(tmp2, s)
};
space_inst_18_19_16_tsni = function space_inst_18_19_16_tsni(n) {
  return replicate_inst_18_19_16_17_tsni(n, " ")
};
replicate_inst_18_19_16_17_tsni = function replicate_inst_18_19_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_18_19_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_18_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
date_inst_20_21_tsni = function date_inst_20_21_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_20_21_19_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_20_21_19_tsni = function rjustify_inst_20_21_19_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_20_21_19_16_tsni(tmp1);
  return append_inst_20_21_19_52_tsni(tmp2, s)
};
space_inst_20_21_19_16_tsni = function space_inst_20_21_19_16_tsni(n) {
  return replicate_inst_20_21_19_16_17_tsni(n, " ")
};
replicate_inst_20_21_19_16_17_tsni = function replicate_inst_20_21_19_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_20_21_19_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_20_21_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_20_22_tsni = function enumFromTo_inst_20_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_20_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_20_53_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
space_inst_23_24_tsni = function space_inst_23_24_tsni(n) {
  return replicate_inst_23_24_17_tsni(n, " ")
};
replicate_inst_23_24_17_tsni = function replicate_inst_23_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_23_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_23_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
cjustify_inst_25_26_tsni = function cjustify_inst_25_26_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_25_26_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_25_26_54_tsni(tmp3, tmp6)
};
space_inst_25_26_24_tsni = function space_inst_25_26_24_tsni(n) {
  return replicate_inst_25_26_24_17_tsni(n, " ")
};
replicate_inst_25_26_24_17_tsni = function replicate_inst_25_26_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_25_26_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_25_26_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
block_inst_25_27_tsni = function block_inst_25_27_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_25_27_4_tsni(n, t);
  tmp1 = map_inst_25_27_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_25_27_4_tsni = function groop_inst_25_27_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_25_27_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_25_27_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
zipWith_inst_25_28_tsni = function zipWith_inst_25_28_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_25_28_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_25_29_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_25_55_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_25_55_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_25_29_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_25_29_tsni(f1, yss1)
    }
  }
};
zipWith_inst_25_29_tsni = function zipWith_inst_25_29_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
cjustify_inst_25_30_tsni = function cjustify_inst_25_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_25_30_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_25_30_54_tsni(tmp3, tmp6)
};
space_inst_25_30_24_tsni = function space_inst_25_30_24_tsni(n) {
  return replicate_inst_25_30_24_17_tsni(n, " ")
};
replicate_inst_25_30_24_17_tsni = function replicate_inst_25_30_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_25_30_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_25_30_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
dates_inst_25_31_tsni = function dates_inst_25_31_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_25_31_22_tsni(tmp, tmp1);
  lambda = (undefined, function (d) {
    return date_inst_25_31_21_tsni(ml, d)
  });
  return map_inst_25_31_53_tsni(lambda, tmp2)
};
date_inst_25_31_21_tsni = function date_inst_25_31_21_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_25_31_21_19_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_25_31_21_19_tsni = function rjustify_inst_25_31_21_19_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_25_31_21_19_16_tsni(tmp1);
  return append_inst_25_31_21_19_52_tsni(tmp2, s)
};
space_inst_25_31_21_19_16_tsni = function space_inst_25_31_21_19_16_tsni(n) {
  return replicate_inst_25_31_21_19_16_17_tsni(n, " ")
};
replicate_inst_25_31_21_19_16_17_tsni = function replicate_inst_25_31_21_19_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_25_31_21_19_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_25_31_21_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_25_31_22_tsni = function enumFromTo_inst_25_31_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_25_31_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_25_31_53_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_25_32_tsni = function block_inst_25_32_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_25_32_4_tsni(n, t);
  tmp1 = map_inst_25_32_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_25_32_4_tsni = function groop_inst_25_32_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_25_32_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_25_32_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
firstDays_inst_25_33_tsni = function firstDays_inst_25_33_tsni(year) {
  let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_25_33_12_tsni(year);
  lambda = (undefined, function (a, b) {
    return a + b
  });
  tmp2 = scanl_inst_25_33_13_tsni(lambda, tmp, tmp1);
  lambda1 = (undefined, function (x) {
    return NofibPrelude.intMod(x, 7)
  });
  tmp3 = map_inst_25_33_14_tsni(lambda1, tmp2);
  return take_inst_25_33_34_tsni(12, tmp3)
};
map_inst_25_33_14_tsni = function map_inst_25_33_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_25_33_13_tsni = function scanl_inst_25_33_13_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_25_33_12_tsni = function monthLengths_inst_25_33_12_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_25_36_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_25_33_14_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_25_33_13_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_25_33_34_tsni = function take_inst_25_33_34_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_25_35_tsni = function monthLengths_inst_25_35_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_25_36_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zip3_inst_25_36_tsni = function zip3_inst_25_36_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
emptyPic_inst_25_37_tsni = function emptyPic_inst_25_37_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_25_37_9_tsni = function replicate_inst_25_37_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_25_37_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_25_60_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_25_38_tsni = function unlines_inst_25_38_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_25_38_45_46_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_25_38_2_tsni(x, tmp1)
  });
  tmp = map_inst_25_38_1_tsni(lambda, ls);
  return concat_inst_25_38_45_tsni(tmp)
};
map_inst_25_38_1_tsni = function map_inst_25_38_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_38_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_25_38_45_tsni(xs2);
      return append_inst_25_38_45_46_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_25_38_2_tsni = function append_inst_25_38_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_25_38_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_25_38_45_46_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cal_inst_39_40_tsni = function cal_inst_39_40_tsni(year) {
  let body, pad, banner, entries, pic, title, months, table, side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
  banner = function banner(yr) {
    let tmp7, tmp8, tmp9, arr2, tmp10, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
    tmp7 = NofibPrelude.stringOfInt(yr);
    tmp8 = NofibPrelude.nofibStringToList(tmp7);
    tmp9 = cjustify_inst_39_40_26_tsni(75, tmp8);
    _deforest_Deforest_Arr_2_02 = 1;
    _deforest_Deforest_Arr_2_12 = 75;
    arr2 = () => {
      let first1, first0, h, w, tmp11;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      h = first0;
      w = first1;
      tmp11 = NofibPrelude.replicate(w, " ");
      return replicate_inst_39_40_37_9_tsni(h, tmp11)
    };
    tmp10 = emptyPic_inst_39_40_37_tsni(arr2);
    _deforest_Cons_head1 = tmp9;
    _deforest_Cons_tail1 = tmp10;
    return (ys) => {
      return match_xs_arm_Cons_inst_39_40_60_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  };
  body = function body(yr) {
    let tmp7, tmp8, lambda;
    tmp7 = months(yr);
    lambda = (undefined, function (x) {
      let tmp9;
      tmp9 = pic(x);
      return pad(tmp9)
    });
    tmp8 = NofibPrelude.map(lambda, tmp7);
    return block_inst_39_40_27_tsni(3, tmp8)
  };
  pic = function pic(mnfdml) {
    return runtime.safeCall(mnfdml(title, table))
  };
  pad = function pad(p) {
    let tmp7, tmp8;
    tmp7 = zipWith_inst_39_40_28_tsni(NofibPrelude.append, side, p);
    tmp8 = zipWith_inst_39_40_29_tsni(NofibPrelude.append, tmp7, side);
    return append_inst_39_40_55_tsni(tmp8, end)
  };
  title = function title(mn) {
    let tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
    tmp7 = cjustify_inst_39_40_30_tsni(21, mn);
    _deforest_Cons_head1 = tmp7;
    _deforest_Cons_tail1 = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp8;
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp8 = append_inst_39_40_56_tsni(xs, ys);
      return NofibPrelude.Cons(x, tmp8)
    }
  };
  table = function table(fd, ml) {
    let tmp7;
    tmp7 = entries(fd, ml);
    return append_inst_39_40_59_tsni(daynames, tmp7)
  };
  entries = function entries(fd, ml) {
    let tmp7;
    tmp7 = dates_inst_39_40_31_tsni(fd, ml);
    return block_inst_39_40_32_tsni(7, tmp7)
  };
  months = function months(yer) {
    let tmp7, tmp8;
    tmp7 = firstDays_inst_39_40_33_tsni(yer);
    tmp8 = monthLengths_inst_39_40_35_tsni(yer);
    return zip3_inst_39_40_36_tsni(calendar.monthNames, tmp7, tmp8)
  };
  _deforest_Deforest_Arr_2_01 = 8;
  _deforest_Deforest_Arr_2_11 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_39_40_57_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_39_40_58_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_39_40_59_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner(year);
  tmp5 = body(year);
  tmp6 = append_inst_39_40_60_tsni(tmp4, tmp5);
  return unlines_inst_39_40_38_tsni(tmp6)
};
unlines_inst_39_40_38_tsni = function unlines_inst_39_40_38_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_39_40_38_45_46_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_39_40_38_2_tsni(x, tmp1)
  });
  tmp = map_inst_39_40_38_1_tsni(lambda, ls);
  return concat_inst_39_40_38_45_tsni(tmp)
};
map_inst_39_40_38_1_tsni = function map_inst_39_40_38_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_40_38_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_40_38_45_tsni(xs2);
      return append_inst_39_40_38_45_46_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_40_38_2_tsni = function append_inst_39_40_38_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_40_38_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_40_38_45_46_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
monthLengths_inst_39_40_35_tsni = function monthLengths_inst_39_40_35_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_39_40_36_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_39_40_33_tsni = function firstDays_inst_39_40_33_tsni(year) {
  let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_39_40_33_12_tsni(year);
  lambda = (undefined, function (a, b) {
    return a + b
  });
  tmp2 = scanl_inst_39_40_33_13_tsni(lambda, tmp, tmp1);
  lambda1 = (undefined, function (x) {
    return NofibPrelude.intMod(x, 7)
  });
  tmp3 = map_inst_39_40_33_14_tsni(lambda1, tmp2);
  return take_inst_39_40_33_34_tsni(12, tmp3)
};
monthLengths_inst_39_40_33_12_tsni = function monthLengths_inst_39_40_33_12_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_39_40_36_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_39_40_33_14_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_39_40_33_13_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_39_40_33_13_tsni = function scanl_inst_39_40_33_13_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_39_40_33_14_tsni = function map_inst_39_40_33_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_39_40_33_34_tsni = function take_inst_39_40_33_34_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
block_inst_39_40_32_tsni = function block_inst_39_40_32_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_39_40_32_4_tsni(n, t);
  tmp1 = map_inst_39_40_32_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_39_40_32_4_tsni = function groop_inst_39_40_32_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_39_40_32_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_39_40_32_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_39_40_31_tsni = function dates_inst_39_40_31_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_39_40_31_22_tsni(tmp, tmp1);
  lambda = (undefined, function (d) {
    return date_inst_39_40_31_21_tsni(ml, d)
  });
  return map_inst_39_40_31_53_tsni(lambda, tmp2)
};
date_inst_39_40_31_21_tsni = function date_inst_39_40_31_21_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_39_40_31_21_19_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_39_40_31_21_19_tsni = function rjustify_inst_39_40_31_21_19_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_39_40_31_21_19_16_tsni(tmp1);
  return append_inst_39_40_31_21_19_52_tsni(tmp2, s)
};
space_inst_39_40_31_21_19_16_tsni = function space_inst_39_40_31_21_19_16_tsni(n) {
  return replicate_inst_39_40_31_21_19_16_17_tsni(n, " ")
};
replicate_inst_39_40_31_21_19_16_17_tsni = function replicate_inst_39_40_31_21_19_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_31_21_19_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_31_21_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_39_40_31_22_tsni = function enumFromTo_inst_39_40_31_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_39_40_31_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_39_40_31_53_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
cjustify_inst_39_40_30_tsni = function cjustify_inst_39_40_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_39_40_30_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_39_40_30_54_tsni(tmp3, tmp6)
};
space_inst_39_40_30_24_tsni = function space_inst_39_40_30_24_tsni(n) {
  return replicate_inst_39_40_30_24_17_tsni(n, " ")
};
replicate_inst_39_40_30_24_17_tsni = function replicate_inst_39_40_30_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_30_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_30_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
zipWith_inst_39_40_29_tsni = function zipWith_inst_39_40_29_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_39_40_28_tsni = function zipWith_inst_39_40_28_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_39_40_28_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_39_40_29_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_39_40_55_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_39_40_55_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_39_40_29_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_39_40_29_tsni(f1, yss1)
    }
  }
};
block_inst_39_40_27_tsni = function block_inst_39_40_27_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_39_40_27_4_tsni(n, t);
  tmp1 = map_inst_39_40_27_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_39_40_27_4_tsni = function groop_inst_39_40_27_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_39_40_27_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_39_40_27_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
zip3_inst_39_40_36_tsni = function zip3_inst_39_40_36_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
emptyPic_inst_39_40_37_tsni = function emptyPic_inst_39_40_37_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_39_40_37_9_tsni = function replicate_inst_39_40_37_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_37_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_39_40_60_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
cjustify_inst_39_40_26_tsni = function cjustify_inst_39_40_26_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_39_40_26_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_39_40_26_54_tsni(tmp3, tmp6)
};
space_inst_39_40_26_24_tsni = function space_inst_39_40_26_24_tsni(n) {
  return replicate_inst_39_40_26_24_17_tsni(n, " ")
};
replicate_inst_39_40_26_24_17_tsni = function replicate_inst_39_40_26_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_39_40_26_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_39_40_26_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_39_41_tsni = function enumFromTo_inst_39_41_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_39_41_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_39_44_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCalendar_nofib_inst_42_43_tsni = function testCalendar_nofib_inst_42_43_tsni(n) {
  let tmp, tmp1, lambda;
  tmp = 1993 + n;
  tmp1 = enumFromTo_inst_42_43_41_tsni(1993, tmp);
  lambda = (undefined, function (x) {
    return cal_inst_42_43_40_tsni(x)
  });
  return map_inst_42_43_44_tsni(lambda, tmp1)
};
cal_inst_42_43_40_tsni = function cal_inst_42_43_40_tsni(year) {
  let body, pad, banner, entries, pic, title, months, table, side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
  banner = function banner(yr) {
    let tmp7, tmp8, tmp9, arr2, tmp10, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Cons_head1, _deforest_Cons_tail1;
    tmp7 = NofibPrelude.stringOfInt(yr);
    tmp8 = NofibPrelude.nofibStringToList(tmp7);
    tmp9 = cjustify_inst_42_43_40_26_tsni(75, tmp8);
    _deforest_Deforest_Arr_2_02 = 1;
    _deforest_Deforest_Arr_2_12 = 75;
    arr2 = () => {
      let first1, first0, h, w, tmp11;
      first0 = _deforest_Deforest_Arr_2_02;
      first1 = _deforest_Deforest_Arr_2_12;
      h = first0;
      w = first1;
      tmp11 = NofibPrelude.replicate(w, " ");
      return replicate_inst_42_43_40_37_9_tsni(h, tmp11)
    };
    tmp10 = emptyPic_inst_42_43_40_37_tsni(arr2);
    _deforest_Cons_head1 = tmp9;
    _deforest_Cons_tail1 = tmp10;
    return (ys) => {
      return match_xs_arm_Cons_inst_42_43_40_60_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    }
  };
  body = function body(yr) {
    let tmp7, tmp8, lambda;
    tmp7 = months(yr);
    lambda = (undefined, function (x) {
      let tmp9;
      tmp9 = pic(x);
      return pad(tmp9)
    });
    tmp8 = NofibPrelude.map(lambda, tmp7);
    return block_inst_42_43_40_27_tsni(3, tmp8)
  };
  pic = function pic(mnfdml) {
    return runtime.safeCall(mnfdml(title, table))
  };
  pad = function pad(p) {
    let tmp7, tmp8;
    tmp7 = zipWith_inst_42_43_40_28_tsni(NofibPrelude.append, side, p);
    tmp8 = zipWith_inst_42_43_40_29_tsni(NofibPrelude.append, tmp7, side);
    return append_inst_42_43_40_55_tsni(tmp8, end)
  };
  title = function title(mn) {
    let tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
    tmp7 = cjustify_inst_42_43_40_30_tsni(21, mn);
    _deforest_Cons_head1 = tmp7;
    _deforest_Cons_tail1 = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp8;
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp8 = append_inst_42_43_40_56_tsni(xs, ys);
      return NofibPrelude.Cons(x, tmp8)
    }
  };
  table = function table(fd, ml) {
    let tmp7;
    tmp7 = entries(fd, ml);
    return append_inst_42_43_40_59_tsni(daynames, tmp7)
  };
  entries = function entries(fd, ml) {
    let tmp7;
    tmp7 = dates_inst_42_43_40_31_tsni(fd, ml);
    return block_inst_42_43_40_32_tsni(7, tmp7)
  };
  months = function months(yer) {
    let tmp7, tmp8;
    tmp7 = firstDays_inst_42_43_40_33_tsni(yer);
    tmp8 = monthLengths_inst_42_43_40_35_tsni(yer);
    return zip3_inst_42_43_40_36_tsni(calendar.monthNames, tmp7, tmp8)
  };
  _deforest_Deforest_Arr_2_0 = 8;
  _deforest_Deforest_Arr_2_1 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_42_43_40_57_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_01 = 1;
  _deforest_Deforest_Arr_2_11 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_42_43_40_58_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_42_43_40_59_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner(year);
  tmp5 = body(year);
  tmp6 = append_inst_42_43_40_60_tsni(tmp4, tmp5);
  return unlines_inst_42_43_40_38_tsni(tmp6)
};
cjustify_inst_42_43_40_26_tsni = function cjustify_inst_42_43_40_26_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_42_43_40_26_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_42_43_40_26_54_tsni(tmp3, tmp6)
};
space_inst_42_43_40_26_24_tsni = function space_inst_42_43_40_26_24_tsni(n) {
  return replicate_inst_42_43_40_26_24_17_tsni(n, " ")
};
replicate_inst_42_43_40_26_24_17_tsni = function replicate_inst_42_43_40_26_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_43_40_26_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_43_40_26_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
block_inst_42_43_40_27_tsni = function block_inst_42_43_40_27_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_42_43_40_27_4_tsni(n, t);
  tmp1 = map_inst_42_43_40_27_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_42_43_40_27_4_tsni = function groop_inst_42_43_40_27_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_42_43_40_27_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_42_43_40_27_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
zipWith_inst_42_43_40_28_tsni = function zipWith_inst_42_43_40_28_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_42_43_40_28_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_42_43_40_29_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_42_43_40_55_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_42_43_40_55_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_42_43_40_29_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_42_43_40_29_tsni(f1, yss1)
    }
  }
};
zipWith_inst_42_43_40_29_tsni = function zipWith_inst_42_43_40_29_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
cjustify_inst_42_43_40_30_tsni = function cjustify_inst_42_43_40_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_42_43_40_30_24_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_42_43_40_30_54_tsni(tmp3, tmp6)
};
space_inst_42_43_40_30_24_tsni = function space_inst_42_43_40_30_24_tsni(n) {
  return replicate_inst_42_43_40_30_24_17_tsni(n, " ")
};
replicate_inst_42_43_40_30_24_17_tsni = function replicate_inst_42_43_40_30_24_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_43_40_30_24_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_43_40_30_54_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
dates_inst_42_43_40_31_tsni = function dates_inst_42_43_40_31_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_42_43_40_31_22_tsni(tmp, tmp1);
  lambda = (undefined, function (d) {
    return date_inst_42_43_40_31_21_tsni(ml, d)
  });
  return map_inst_42_43_40_31_53_tsni(lambda, tmp2)
};
date_inst_42_43_40_31_21_tsni = function date_inst_42_43_40_31_21_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_42_43_40_31_21_19_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_42_43_40_31_21_19_tsni = function rjustify_inst_42_43_40_31_21_19_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_42_43_40_31_21_19_16_tsni(tmp1);
  return append_inst_42_43_40_31_21_19_52_tsni(tmp2, s)
};
space_inst_42_43_40_31_21_19_16_tsni = function space_inst_42_43_40_31_21_19_16_tsni(n) {
  return replicate_inst_42_43_40_31_21_19_16_17_tsni(n, " ")
};
replicate_inst_42_43_40_31_21_19_16_17_tsni = function replicate_inst_42_43_40_31_21_19_16_17_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_43_40_31_21_19_16_17_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_43_40_31_21_19_52_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_42_43_40_31_22_tsni = function enumFromTo_inst_42_43_40_31_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_42_43_40_31_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_42_43_40_31_53_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_42_43_40_32_tsni = function block_inst_42_43_40_32_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_42_43_40_32_4_tsni(n, t);
  tmp1 = map_inst_42_43_40_32_48_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_42_43_40_32_4_tsni = function groop_inst_42_43_40_32_4_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_42_43_40_32_4_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_42_43_40_32_48_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
firstDays_inst_42_43_40_33_tsni = function firstDays_inst_42_43_40_33_tsni(year) {
  let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_42_43_40_33_12_tsni(year);
  lambda = (undefined, function (a, b) {
    return a + b
  });
  tmp2 = scanl_inst_42_43_40_33_13_tsni(lambda, tmp, tmp1);
  lambda1 = (undefined, function (x) {
    return NofibPrelude.intMod(x, 7)
  });
  tmp3 = map_inst_42_43_40_33_14_tsni(lambda1, tmp2);
  return take_inst_42_43_40_33_34_tsni(12, tmp3)
};
map_inst_42_43_40_33_14_tsni = function map_inst_42_43_40_33_14_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_42_43_40_33_13_tsni = function scanl_inst_42_43_40_33_13_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_42_43_40_33_12_tsni = function monthLengths_inst_42_43_40_33_12_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_42_43_40_36_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_42_43_40_33_14_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_42_43_40_33_13_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_42_43_40_33_34_tsni = function take_inst_42_43_40_33_34_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_42_43_40_35_tsni = function monthLengths_inst_42_43_40_35_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_42_43_40_36_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zip3_inst_42_43_40_36_tsni = function zip3_inst_42_43_40_36_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
emptyPic_inst_42_43_40_37_tsni = function emptyPic_inst_42_43_40_37_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_42_43_40_37_9_tsni = function replicate_inst_42_43_40_37_9_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_43_40_37_9_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_42_43_40_60_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_42_43_40_38_tsni = function unlines_inst_42_43_40_38_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_42_43_40_38_45_46_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_42_43_40_38_2_tsni(x, tmp1)
  });
  tmp = map_inst_42_43_40_38_1_tsni(lambda, ls);
  return concat_inst_42_43_40_38_45_tsni(tmp)
};
map_inst_42_43_40_38_1_tsni = function map_inst_42_43_40_38_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_42_43_40_38_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_42_43_40_38_45_tsni(xs2);
      return append_inst_42_43_40_38_45_46_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_42_43_40_38_2_tsni = function append_inst_42_43_40_38_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_42_43_40_38_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_42_43_40_38_45_46_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
enumFromTo_inst_42_43_41_tsni = function enumFromTo_inst_42_43_41_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_42_43_41_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_42_43_44_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x1, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs1 = param11;
        tmp4 = concat_inst_42_47_tsni(xs1);
        return append_inst_42_47_46_tsni(x1, tmp4)
      }
    }
  } else {
    return (f) => {
      return () => {
        return () => {
          return ""
        }
      }
    }
  }
};
map_inst_42_43_44_tsni = function map_inst_42_43_44_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_42_43_40_38_45_tsni = function concat_inst_42_43_40_38_45_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_42_43_40_38_45_46_tsni = function append_inst_42_43_40_38_45_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_42_47_tsni = function concat_inst_42_47_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_42_47_46_tsni = function append_inst_42_47_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_0_45_tsni = function concat_inst_0_45_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_45_46_tsni = function append_inst_0_45_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_3_48_tsni = function map_inst_3_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_5_49_tsni = function map_inst_5_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_7_50_tsni = function emptyPic_inst_7_50_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_7_51_tsni = function append_inst_7_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_inst_11_34_tsni = function take_inst_11_34_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
append_inst_15_52_tsni = function append_inst_15_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_18_19_52_tsni = function append_inst_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_20_21_19_52_tsni = function append_inst_20_21_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_20_53_tsni = function map_inst_20_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_23_54_tsni = function append_inst_23_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_26_54_tsni = function append_inst_25_26_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_25_27_48_tsni = function map_inst_25_27_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_25_55_tsni = function append_inst_25_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_30_54_tsni = function append_inst_25_30_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_56_tsni = function append_inst_25_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_31_21_19_52_tsni = function append_inst_25_31_21_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_25_31_53_tsni = function map_inst_25_31_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_25_32_48_tsni = function map_inst_25_32_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_25_57_tsni = function emptyPic_inst_25_57_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_25_58_tsni = function emptyPic_inst_25_58_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_25_59_tsni = function append_inst_25_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_25_60_tsni = function append_inst_25_60_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_25_38_45_tsni = function concat_inst_25_38_45_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_25_38_45_46_tsni = function append_inst_25_38_45_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_39_40_38_45_tsni = function concat_inst_39_40_38_45_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_40_38_45_46_tsni = function append_inst_39_40_38_45_46_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_39_40_58_tsni = function emptyPic_inst_39_40_58_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_39_40_57_tsni = function emptyPic_inst_39_40_57_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_39_40_32_48_tsni = function map_inst_39_40_32_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_39_40_31_21_19_52_tsni = function append_inst_39_40_31_21_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_40_31_53_tsni = function map_inst_39_40_31_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_39_40_59_tsni = function append_inst_39_40_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_30_54_tsni = function append_inst_39_40_30_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_55_tsni = function append_inst_39_40_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_56_tsni = function append_inst_39_40_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_40_27_48_tsni = function map_inst_39_40_27_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_39_40_60_tsni = function append_inst_39_40_60_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_39_40_26_54_tsni = function append_inst_39_40_26_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_44_tsni = function map_inst_39_44_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_42_43_40_26_54_tsni = function append_inst_42_43_40_26_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_42_43_40_27_48_tsni = function map_inst_42_43_40_27_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_42_43_40_55_tsni = function append_inst_42_43_40_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_43_40_30_54_tsni = function append_inst_42_43_40_30_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_43_40_56_tsni = function append_inst_42_43_40_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_43_40_31_21_19_52_tsni = function append_inst_42_43_40_31_21_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_42_43_40_31_53_tsni = function map_inst_42_43_40_31_53_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_42_43_40_32_48_tsni = function map_inst_42_43_40_32_48_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_42_43_40_57_tsni = function emptyPic_inst_42_43_40_57_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_42_43_40_58_tsni = function emptyPic_inst_42_43_40_58_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_42_43_40_59_tsni = function append_inst_42_43_40_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_43_40_60_tsni = function append_inst_42_43_40_60_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_42_61_tsni = function nofibListToString_inst_42_61_tsni(ls) {
  return runtime.safeCall(ls())
};
(class calendar {
  static {
    calendar1 = calendar;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp7, tmp15);
    tmp17 = NofibPrelude.Cons(tmp6, tmp16);
    tmp18 = NofibPrelude.Cons(tmp5, tmp17);
    tmp19 = NofibPrelude.Cons(tmp4, tmp18);
    tmp20 = NofibPrelude.Cons(tmp3, tmp19);
    tmp21 = NofibPrelude.Cons(tmp2, tmp20);
    tmp22 = NofibPrelude.Cons(tmp1, tmp21);
    tmp23 = NofibPrelude.Cons(tmp, tmp22);
    this.monthNames = tmp23;
  }
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = "\n";
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      tmp1 = (ys) => {
        return match_xs_arm_Cons_inst_0_45_46_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return append_inst_0_2_tsni(x, tmp1)
    });
    tmp = map_inst_0_1_tsni(lambda, ls);
    return concat_inst_0_45_tsni(tmp)
  } 
  static height(p) {
    return NofibPrelude.listLen(p)
  } 
  static width(p1) {
    let tmp;
    tmp = NofibPrelude.head(p1);
    return NofibPrelude.listLen(tmp)
  } 
  static stack(ls1) {
    let lambda;
    lambda = (undefined, function (a, b) {
      return NofibPrelude.append(a, b)
    });
    return NofibPrelude.foldr1(lambda, ls1)
  } 
  static spread(ls2) {
    let lambda;
    lambda = (undefined, function (a, b) {
      let lambda1;
      lambda1 = (undefined, function (a1, b1) {
        return NofibPrelude.append(a1, b1)
      });
      return NofibPrelude.zipWith(lambda1, a, b)
    });
    return NofibPrelude.foldr1(lambda, ls2)
  } 
  static emptyPic(hw) {
    let first1, first0, h, w, tmp;
    if (globalThis.Array.isArray(hw) && hw.length === 2) {
      first0 = hw[0];
      first1 = hw[1];
      h = first0;
      w = first1;
      tmp = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      tmp = NofibPrelude.take(n, xs);
      tmp1 = NofibPrelude.drop(n, xs);
      tmp2 = calendar.groop(n, tmp1);
      return NofibPrelude.Cons(tmp, tmp2)
    }
  } 
  static block(n1, t) {
    let tmp, tmp1;
    tmp = groop_inst_3_4_tsni(n1, t);
    tmp1 = map_inst_3_48_tsni(calendar.spread, tmp);
    return calendar.stack(tmp1)
  } 
  static blockT(n2, t1) {
    let tmp, tmp1;
    tmp = groop_inst_5_6_tsni(n2, t1);
    tmp1 = map_inst_5_49_tsni(calendar.stack, tmp);
    return calendar.stack(tmp1)
  } 
  static lframe(mn, p2) {
    let first1, first0, m, n3, h, w, tmp, tmp1, tmp2, arr, tmp3, tmp4, tmp5, arr1, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    if (globalThis.Array.isArray(mn) && mn.length === 2) {
      first0 = mn[0];
      first1 = mn[1];
      m = first0;
      n3 = first1;
      tmp = calendar.height(p2);
      h = tmp;
      tmp1 = calendar.width(p2);
      w = tmp1;
      tmp2 = n3 - w;
      _deforest_Deforest_Arr_2_0 = h;
      _deforest_Deforest_Arr_2_1 = tmp2;
      arr = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_0;
        first11 = _deforest_Deforest_Arr_2_1;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return replicate_inst_7_8_9_tsni(h1, tmp7)
      };
      tmp3 = emptyPic_inst_7_8_tsni(arr);
      tmp4 = zipWith_inst_7_10_tsni(NofibPrelude.append, p2, tmp3);
      tmp5 = m - h;
      _deforest_Deforest_Arr_2_01 = tmp5;
      _deforest_Deforest_Arr_2_11 = n3;
      arr1 = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return NofibPrelude.replicate(h1, tmp7)
      };
      tmp6 = emptyPic_inst_7_50_tsni(arr1);
      return append_inst_7_51_tsni(tmp4, tmp6)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static leap(year) {
    let scrut, tmp, tmp1, tmp2;
    tmp = NofibPrelude.intMod(year, 100);
    scrut = tmp == 0;
    if (scrut === true) {
      tmp1 = NofibPrelude.intMod(year, 400);
      return tmp1 == 0
    } else {
      tmp2 = NofibPrelude.intMod(year, 4);
      return tmp2 == 0
    }
  } 
  static monthLengths(year1) {
    let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.leap(year1);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    feb = tmp;
    tmp1 = NofibPrelude.Cons(31, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(30, tmp1);
    tmp3 = NofibPrelude.Cons(31, tmp2);
    tmp4 = NofibPrelude.Cons(30, tmp3);
    tmp5 = NofibPrelude.Cons(31, tmp4);
    tmp6 = NofibPrelude.Cons(31, tmp5);
    tmp7 = NofibPrelude.Cons(30, tmp6);
    tmp8 = NofibPrelude.Cons(31, tmp7);
    tmp9 = NofibPrelude.Cons(30, tmp8);
    tmp10 = NofibPrelude.Cons(31, tmp9);
    tmp11 = NofibPrelude.Cons(feb, tmp10);
    return NofibPrelude.Cons(31, tmp11)
  } 
  static jan1st(year2) {
    let last, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = year2 - 1;
    last = tmp;
    tmp1 = NofibPrelude.intDiv(last, 4);
    tmp2 = year2 + tmp1;
    tmp3 = NofibPrelude.intDiv(last, 100);
    tmp4 = tmp2 - tmp3;
    tmp5 = NofibPrelude.intDiv(last, 400);
    tmp6 = tmp4 + tmp5;
    return NofibPrelude.intMod(tmp6, 7)
  } 
  static firstDays(year3) {
    let tmp, tmp1, tmp2, tmp3, lambda, lambda1;
    tmp = calendar.jan1st(year3);
    tmp1 = monthLengths_inst_11_12_tsni(year3);
    lambda = (undefined, function (a, b) {
      return a + b
    });
    tmp2 = scanl_inst_11_13_tsni(lambda, tmp, tmp1);
    lambda1 = (undefined, function (x) {
      return NofibPrelude.intMod(x, 7)
    });
    tmp3 = map_inst_11_14_tsni(lambda1, tmp2);
    return take_inst_11_34_tsni(12, tmp3)
  } 
  static space(n3) {
    return NofibPrelude.replicate(n3, " ")
  } 
  static ljustify(n4, s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    tmp1 = n4 - tmp;
    tmp2 = calendar.space(tmp1);
    return NofibPrelude.append(s, tmp2)
  } 
  static rjustify(n5, s1) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s1);
    tmp1 = n5 - tmp;
    tmp2 = space_inst_15_16_tsni(tmp1);
    return append_inst_15_52_tsni(tmp2, s1)
  } 
  static date(ml, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = d < 1;
    tmp1 = ml < d;
    scrut = tmp || tmp1;
    if (scrut === true) {
      tmp2 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
    } else {
      tmp3 = NofibPrelude.stringOfInt(d);
      tmp4 = NofibPrelude.nofibStringToList(tmp3);
      tmp5 = rjustify_inst_18_19_tsni(3, tmp4);
      return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
    }
  } 
  static dates(fd, ml1) {
    let tmp, tmp1, tmp2, lambda;
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = enumFromTo_inst_20_22_tsni(tmp, tmp1);
    lambda = (undefined, function (d1) {
      return date_inst_20_21_tsni(ml1, d1)
    });
    return map_inst_20_53_tsni(lambda, tmp2)
  } 
  static cjustify(n6, s2) {
    let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = NofibPrelude.listLen(s2);
    tmp1 = n6 - tmp;
    m = tmp1;
    tmp2 = NofibPrelude.intDiv(m, 2);
    halfm = tmp2;
    tmp3 = space_inst_23_24_tsni(halfm);
    tmp4 = m - halfm;
    tmp5 = calendar.space(tmp4);
    tmp6 = NofibPrelude.append(s2, tmp5);
    return append_inst_23_54_tsni(tmp3, tmp6)
  } 
  static cal(year4) {
    let body, pad, banner, entries, pic, title, months, table, side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
    banner = function banner(yr) {
      let tmp7, tmp8, tmp9, arr2, tmp10, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Cons_head1, _deforest_Cons_tail1;
      tmp7 = NofibPrelude.stringOfInt(yr);
      tmp8 = NofibPrelude.nofibStringToList(tmp7);
      tmp9 = cjustify_inst_25_26_tsni(75, tmp8);
      _deforest_Deforest_Arr_2_02 = 1;
      _deforest_Deforest_Arr_2_12 = 75;
      arr2 = () => {
        let first1, first0, h, w, tmp11;
        first0 = _deforest_Deforest_Arr_2_02;
        first1 = _deforest_Deforest_Arr_2_12;
        h = first0;
        w = first1;
        tmp11 = NofibPrelude.replicate(w, " ");
        return replicate_inst_25_37_9_tsni(h, tmp11)
      };
      tmp10 = emptyPic_inst_25_37_tsni(arr2);
      _deforest_Cons_head1 = tmp9;
      _deforest_Cons_tail1 = tmp10;
      return (ys) => {
        return match_xs_arm_Cons_inst_25_60_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    };
    body = function body(yr) {
      let tmp7, tmp8, lambda;
      tmp7 = months(yr);
      lambda = (undefined, function (x) {
        let tmp9;
        tmp9 = pic(x);
        return pad(tmp9)
      });
      tmp8 = NofibPrelude.map(lambda, tmp7);
      return block_inst_25_27_tsni(3, tmp8)
    };
    pic = function pic(mnfdml) {
      return runtime.safeCall(mnfdml(title, table))
    };
    pad = function pad(p3) {
      let tmp7, tmp8;
      tmp7 = zipWith_inst_25_28_tsni(NofibPrelude.append, side, p3);
      tmp8 = zipWith_inst_25_29_tsni(NofibPrelude.append, tmp7, side);
      return append_inst_25_55_tsni(tmp8, end)
    };
    title = function title(mn1) {
      let tmp7, _deforest_Cons_head1, _deforest_Cons_tail1;
      tmp7 = cjustify_inst_25_30_tsni(21, mn1);
      _deforest_Cons_head1 = tmp7;
      _deforest_Cons_tail1 = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x, xs1, tmp8;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp8 = append_inst_25_56_tsni(xs1, ys);
        return NofibPrelude.Cons(x, tmp8)
      }
    };
    table = function table(fd1, ml2) {
      let tmp7;
      tmp7 = entries(fd1, ml2);
      return append_inst_25_59_tsni(daynames, tmp7)
    };
    entries = function entries(fd1, ml2) {
      let tmp7;
      tmp7 = dates_inst_25_31_tsni(fd1, ml2);
      return block_inst_25_32_tsni(7, tmp7)
    };
    months = function months(yer) {
      let tmp7, tmp8;
      tmp7 = firstDays_inst_25_33_tsni(yer);
      tmp8 = monthLengths_inst_25_35_tsni(yer);
      return zip3_inst_25_36_tsni(calendar.monthNames, tmp7, tmp8)
    };
    _deforest_Deforest_Arr_2_0 = 8;
    _deforest_Deforest_Arr_2_1 = 2;
    arr = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      h = first0;
      w = first1;
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp = emptyPic_inst_25_57_tsni(arr);
    side = tmp;
    _deforest_Deforest_Arr_2_01 = 1;
    _deforest_Deforest_Arr_2_11 = 25;
    arr1 = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      h = first0;
      w = first1;
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp1 = emptyPic_inst_25_58_tsni(arr1);
    end = tmp1;
    tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
    _deforest_Cons_head = tmp2;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp3 = (ys) => {
      let param0, param1, x, xs1, tmp7;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp7 = append_inst_25_59_tsni(xs1, ys);
      return NofibPrelude.Cons(x, tmp7)
    };
    daynames = tmp3;
    tmp4 = banner(year4);
    tmp5 = body(year4);
    tmp6 = append_inst_25_60_tsni(tmp4, tmp5);
    return unlines_inst_25_38_tsni(tmp6)
  } 
  static testCalendar_nofib(n7) {
    let tmp, tmp1, lambda;
    tmp = 1993 + n7;
    tmp1 = enumFromTo_inst_39_41_tsni(1993, tmp);
    lambda = (undefined, function (x) {
      return cal_inst_39_40_tsni(x)
    });
    return map_inst_39_44_tsni(lambda, tmp1)
  } 
  static main() {
    let tmp, tmp1;
    tmp = testCalendar_nofib_inst_42_43_tsni(0);
    tmp1 = concat_inst_42_47_tsni(tmp);
    return nofibListToString_inst_42_61_tsni(tmp1)
  }
  static toString() { return "calendar"; }
});
let calendar = calendar1; export default calendar;
