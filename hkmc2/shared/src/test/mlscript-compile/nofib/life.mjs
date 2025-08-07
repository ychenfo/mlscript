import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let life1, init_inst_0_1_tsni, shiftl_inst_2_3_tsni, init_inst_2_3_1_tsni, shiftr_inst_2_4_tsni, init_inst_2_4_5_tsni, append_inst_2_3_6_tsni, shift_inst_7_8_tsni, shiftl_inst_7_8_3_tsni, init_inst_7_8_3_1_tsni, append_inst_7_8_3_6_tsni, shiftr_inst_7_8_4_tsni, init_inst_7_8_4_5_tsni, shift_inst_7_9_tsni, shiftl_inst_7_9_3_tsni, init_inst_7_9_3_1_tsni, append_inst_7_9_3_6_tsni, shiftr_inst_7_9_4_tsni, init_inst_7_9_4_5_tsni, shift_inst_7_10_tsni, shiftl_inst_7_10_3_tsni, init_inst_7_10_3_1_tsni, append_inst_7_10_3_6_tsni, shiftr_inst_7_10_4_tsni, init_inst_7_10_4_5_tsni, zip3_inst_7_8_11_tsni, zip3_inst_7_9_11_tsni, zip3_inst_7_10_11_tsni, shift_inst_12_13_tsni, shiftl_inst_12_13_3_tsni, init_inst_12_13_3_1_tsni, append_inst_12_13_3_6_tsni, shiftr_inst_12_13_4_tsni, init_inst_12_13_4_5_tsni, row_inst_12_14_tsni, shift_inst_12_14_10_tsni, shiftl_inst_12_14_10_3_tsni, init_inst_12_14_10_3_1_tsni, shiftr_inst_12_14_10_4_tsni, init_inst_12_14_10_4_5_tsni, append_inst_12_14_10_3_6_tsni, zip3_inst_12_14_10_11_tsni, shift_inst_12_14_9_tsni, shiftl_inst_12_14_9_3_tsni, init_inst_12_14_9_3_1_tsni, shiftr_inst_12_14_9_4_tsni, init_inst_12_14_9_4_5_tsni, append_inst_12_14_9_3_6_tsni, zip3_inst_12_14_9_11_tsni, shift_inst_12_14_8_tsni, shiftl_inst_12_14_8_3_tsni, init_inst_12_14_8_3_1_tsni, shiftr_inst_12_14_8_4_tsni, init_inst_12_14_8_4_5_tsni, append_inst_12_14_8_3_6_tsni, zip3_inst_12_14_8_11_tsni, zip3_inst_12_13_11_tsni, map_inst_15_16_tsni, map_inst_15_17_tsni, concat_inst_15_18_tsni, append_inst_15_18_19_tsni, copy_lz_inst_20_21_tsni, append_lz_lz_inst_20_22_tsni, gen_inst_20_23_tsni, row_inst_20_23_14_tsni, shift_inst_20_23_14_8_tsni, shiftl_inst_20_23_14_8_3_tsni, init_inst_20_23_14_8_3_1_tsni, append_inst_20_23_14_8_3_6_tsni, shiftr_inst_20_23_14_8_4_tsni, init_inst_20_23_14_8_4_5_tsni, shift_inst_20_23_14_9_tsni, shiftl_inst_20_23_14_9_3_tsni, init_inst_20_23_14_9_3_1_tsni, append_inst_20_23_14_9_3_6_tsni, shiftr_inst_20_23_14_9_4_tsni, init_inst_20_23_14_9_4_5_tsni, shift_inst_20_23_14_10_tsni, shiftl_inst_20_23_14_10_3_tsni, init_inst_20_23_14_10_3_1_tsni, append_inst_20_23_14_10_3_6_tsni, shiftr_inst_20_23_14_10_4_tsni, init_inst_20_23_14_10_4_5_tsni, zip3_inst_20_23_14_8_11_tsni, zip3_inst_20_23_14_9_11_tsni, zip3_inst_20_23_14_10_11_tsni, shift_inst_20_23_13_tsni, shiftl_inst_20_23_13_3_tsni, init_inst_20_23_13_3_1_tsni, shiftr_inst_20_23_13_4_tsni, init_inst_20_23_13_4_5_tsni, append_inst_20_23_13_3_6_tsni, zip3_inst_20_23_13_11_tsni, limit_inst_20_24_tsni, disp_inst_20_25_tsni, map_inst_20_25_17_tsni, concat_inst_20_25_18_tsni, append_inst_20_25_18_19_tsni, map_inst_20_25_16_tsni, zip_lz_nl_inst_20_26_tsni, generations_inst_27_28_tsni, disp_inst_27_28_25_tsni, map_inst_27_28_25_16_tsni, map_inst_27_28_25_17_tsni, concat_inst_27_28_25_18_tsni, append_inst_27_28_25_18_19_tsni, zip_lz_nl_inst_27_28_26_tsni, limit_inst_27_28_24_tsni, gen_inst_27_28_23_tsni, shift_inst_27_28_23_13_tsni, shiftl_inst_27_28_23_13_3_tsni, init_inst_27_28_23_13_3_1_tsni, append_inst_27_28_23_13_3_6_tsni, shiftr_inst_27_28_23_13_4_tsni, init_inst_27_28_23_13_4_5_tsni, row_inst_27_28_23_14_tsni, shift_inst_27_28_23_14_10_tsni, shiftl_inst_27_28_23_14_10_3_tsni, init_inst_27_28_23_14_10_3_1_tsni, shiftr_inst_27_28_23_14_10_4_tsni, init_inst_27_28_23_14_10_4_5_tsni, append_inst_27_28_23_14_10_3_6_tsni, zip3_inst_27_28_23_14_10_11_tsni, shift_inst_27_28_23_14_9_tsni, shiftl_inst_27_28_23_14_9_3_tsni, init_inst_27_28_23_14_9_3_1_tsni, shiftr_inst_27_28_23_14_9_4_tsni, init_inst_27_28_23_14_9_4_5_tsni, append_inst_27_28_23_14_9_3_6_tsni, zip3_inst_27_28_23_14_9_11_tsni, shift_inst_27_28_23_14_8_tsni, shiftl_inst_27_28_23_14_8_3_tsni, init_inst_27_28_23_14_8_3_1_tsni, shiftr_inst_27_28_23_14_8_4_tsni, init_inst_27_28_23_14_8_4_5_tsni, append_inst_27_28_23_14_8_3_6_tsni, zip3_inst_27_28_23_14_8_11_tsni, zip3_inst_27_28_23_13_11_tsni, append_lz_lz_inst_27_28_22_tsni, copy_lz_inst_27_28_21_tsni, testLife_nofib_inst_29_30_tsni, generations_inst_29_30_28_tsni, copy_lz_inst_29_30_28_21_tsni, append_lz_lz_inst_29_30_28_22_tsni, gen_inst_29_30_28_23_tsni, row_inst_29_30_28_23_14_tsni, shift_inst_29_30_28_23_14_8_tsni, shiftl_inst_29_30_28_23_14_8_3_tsni, init_inst_29_30_28_23_14_8_3_1_tsni, append_inst_29_30_28_23_14_8_3_6_tsni, shiftr_inst_29_30_28_23_14_8_4_tsni, init_inst_29_30_28_23_14_8_4_5_tsni, shift_inst_29_30_28_23_14_9_tsni, shiftl_inst_29_30_28_23_14_9_3_tsni, init_inst_29_30_28_23_14_9_3_1_tsni, append_inst_29_30_28_23_14_9_3_6_tsni, shiftr_inst_29_30_28_23_14_9_4_tsni, init_inst_29_30_28_23_14_9_4_5_tsni, shift_inst_29_30_28_23_14_10_tsni, shiftl_inst_29_30_28_23_14_10_3_tsni, init_inst_29_30_28_23_14_10_3_1_tsni, append_inst_29_30_28_23_14_10_3_6_tsni, shiftr_inst_29_30_28_23_14_10_4_tsni, init_inst_29_30_28_23_14_10_4_5_tsni, zip3_inst_29_30_28_23_14_8_11_tsni, zip3_inst_29_30_28_23_14_9_11_tsni, zip3_inst_29_30_28_23_14_10_11_tsni, shift_inst_29_30_28_23_13_tsni, shiftl_inst_29_30_28_23_13_3_tsni, init_inst_29_30_28_23_13_3_1_tsni, shiftr_inst_29_30_28_23_13_4_tsni, init_inst_29_30_28_23_13_4_5_tsni, append_inst_29_30_28_23_13_3_6_tsni, zip3_inst_29_30_28_23_13_11_tsni, limit_inst_29_30_28_24_tsni, disp_inst_29_30_28_25_tsni, map_inst_29_30_28_25_17_tsni, concat_inst_29_30_28_25_18_tsni, append_inst_29_30_28_25_18_19_tsni, map_inst_29_30_28_25_16_tsni, zip_lz_nl_inst_29_30_28_26_tsni, lzfy_inst_31_tsni, append_inst_0_6_tsni, zip3_inst_2_11_tsni, zipWith3_inst_7_32_tsni, elt_inst_7_33_tsni, zipWith3_inst_12_14_32_tsni, elt_inst_12_14_33_tsni, map_inst_12_34_tsni, glue_inst_15_35_tsni, append_inst_15_35_36_tsni, foldr_inst_15_37_tsni, append_inst_15_35_38_tsni, take_lz_inst_20_39_tsni, zipWith3_inst_20_23_14_32_tsni, elt_inst_20_23_14_33_tsni, map_inst_20_23_34_tsni, glue_inst_20_25_35_tsni, append_inst_20_25_35_36_tsni, foldr_inst_20_25_37_tsni, append_inst_20_25_35_38_tsni, map_inst_20_40_tsni, glue_inst_27_28_25_35_tsni, append_inst_27_28_25_35_36_tsni, foldr_inst_27_28_25_37_tsni, append_inst_27_28_25_35_38_tsni, map_inst_27_28_40_tsni, zipWith3_inst_27_28_23_14_32_tsni, elt_inst_27_28_23_14_33_tsni, map_inst_27_28_23_34_tsni, take_lz_inst_27_28_39_tsni, take_lz_inst_29_30_28_39_tsni, zipWith3_inst_29_30_28_23_14_32_tsni, elt_inst_29_30_28_23_14_33_tsni, map_inst_29_30_28_23_34_tsni, glue_inst_29_30_28_25_35_tsni, append_inst_29_30_28_25_35_36_tsni, foldr_inst_29_30_28_25_37_tsni, append_inst_29_30_28_25_35_38_tsni, map_inst_29_30_28_40_tsni, match_ls_arm_Cons_inst_31_tsni, match_xs_arm_Cons_inst_2_11_tsni, match_zs_arm_Cons_inst_2_11_tsni, match_zs_arm_Cons_inst_7_8_11_tsni, match_xs_arm_Cons_inst_7_8_11_tsni, match_zs_arm_Cons_inst_7_9_11_tsni, match_xs_arm_Cons_inst_7_9_11_tsni, match_zs_arm_Cons_inst_7_10_11_tsni, match_xs_arm_Cons_inst_7_10_11_tsni, match_xs_arm_default_inst_7_32_tsni, match_ys_arm_default_inst_7_32_tsni, match_zs_arm_default_inst_7_32_tsni, match_zs_arm_Cons_inst_12_13_11_tsni, match_xs_arm_Cons_inst_12_13_11_tsni, match_xs_arm_Cons_inst_12_14_10_11_tsni, match_zs_arm_Cons_inst_12_14_10_11_tsni, match_zs_arm_default_inst_12_14_32_tsni, match_xs_arm_Cons_inst_12_14_9_11_tsni, match_zs_arm_Cons_inst_12_14_9_11_tsni, match_ys_arm_default_inst_12_14_32_tsni, match_xs_arm_Cons_inst_12_14_8_11_tsni, match_zs_arm_Cons_inst_12_14_8_11_tsni, match_xs_arm_default_inst_12_14_32_tsni, match_xs_arm_Nil_inst_12_34_tsni, match_scrut_arm_LzCons_inst_20_39_tsni, match_zs_arm_Cons_inst_20_23_14_8_11_tsni, match_xs_arm_Cons_inst_20_23_14_8_11_tsni, match_zs_arm_Cons_inst_20_23_14_9_11_tsni, match_xs_arm_Cons_inst_20_23_14_9_11_tsni, match_zs_arm_Cons_inst_20_23_14_10_11_tsni, match_xs_arm_Cons_inst_20_23_14_10_11_tsni, match_xs_arm_default_inst_20_23_14_32_tsni, match_ys_arm_default_inst_20_23_14_32_tsni, match_zs_arm_default_inst_20_23_14_32_tsni, match_xs_arm_Cons_inst_20_23_13_11_tsni, match_zs_arm_Cons_inst_20_23_13_11_tsni, match_xs_arm_Nil_inst_20_23_34_tsni, match_ys_arm_Cons_inst_20_26_tsni, match_xs_arm_Nil_inst_20_40_tsni, match_xs_arm_Nil_inst_27_28_40_tsni, match_ys_arm_Cons_inst_27_28_26_tsni, match_zs_arm_Cons_inst_27_28_23_13_11_tsni, match_xs_arm_Cons_inst_27_28_23_13_11_tsni, match_xs_arm_Cons_inst_27_28_23_14_10_11_tsni, match_zs_arm_Cons_inst_27_28_23_14_10_11_tsni, match_zs_arm_default_inst_27_28_23_14_32_tsni, match_xs_arm_Cons_inst_27_28_23_14_9_11_tsni, match_zs_arm_Cons_inst_27_28_23_14_9_11_tsni, match_ys_arm_default_inst_27_28_23_14_32_tsni, match_xs_arm_Cons_inst_27_28_23_14_8_11_tsni, match_zs_arm_Cons_inst_27_28_23_14_8_11_tsni, match_xs_arm_default_inst_27_28_23_14_32_tsni, match_xs_arm_Nil_inst_27_28_23_34_tsni, match_scrut_arm_LzCons_inst_27_28_39_tsni, match_scrut_arm_LzCons_inst_29_30_28_39_tsni, match_zs_arm_Cons_inst_29_30_28_23_14_8_11_tsni, match_xs_arm_Cons_inst_29_30_28_23_14_8_11_tsni, match_zs_arm_Cons_inst_29_30_28_23_14_9_11_tsni, match_xs_arm_Cons_inst_29_30_28_23_14_9_11_tsni, match_zs_arm_Cons_inst_29_30_28_23_14_10_11_tsni, match_xs_arm_Cons_inst_29_30_28_23_14_10_11_tsni, match_xs_arm_default_inst_29_30_28_23_14_32_tsni, match_ys_arm_default_inst_29_30_28_23_14_32_tsni, match_zs_arm_default_inst_29_30_28_23_14_32_tsni, match_xs_arm_Cons_inst_29_30_28_23_13_11_tsni, match_zs_arm_Cons_inst_29_30_28_23_13_11_tsni, match_xs_arm_Nil_inst_29_30_28_23_34_tsni, match_ys_arm_Cons_inst_29_30_28_26_tsni, match_xs_arm_Nil_inst_29_30_28_40_tsni;
match_ls_arm_Cons_inst_31_tsni = function match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head_inst_31_tsni, _deforest_Cons_tail_inst_31_tsni) {
  let param0, param1, a, t, tmp;
  param0 = _deforest_Cons_head_inst_31_tsni;
  param1 = _deforest_Cons_tail_inst_31_tsni;
  a = param0;
  t = param1;
  tmp = lzfy_inst_31_tsni(t);
  return NofibPrelude.LzCons(a, tmp)
};
match_xs_arm_Cons_inst_2_11_tsni = function match_xs_arm_Cons_inst_2_11_tsni(ys, zs, _deforest_Cons_head_inst_2_11_tsni, _deforest_Cons_tail_inst_2_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_2_11_tsni;
  param1 = _deforest_Cons_tail_inst_2_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return NofibPrelude.Nil
  }
};
match_zs_arm_Cons_inst_2_11_tsni = function match_zs_arm_Cons_inst_2_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_2_11_tsni, _deforest_Cons_tail_inst_2_11_tsni) {
  let param0, param1, hz, tz, arr, tmp;
  param0 = _deforest_Cons_head_inst_2_11_tsni;
  param1 = _deforest_Cons_tail_inst_2_11_tsni;
  hz = param0;
  tz = param1;
  arr = [
    hx,
    hy,
    hz
  ];
  tmp = zip3_inst_2_11_tsni(tx, ty, tz);
  return NofibPrelude.Cons(arr, tmp)
};
match_zs_arm_Cons_inst_7_8_11_tsni = function match_zs_arm_Cons_inst_7_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_7_8_11_tsni, _deforest_Cons_tail_inst_7_8_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_7_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_7_8_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
};
match_xs_arm_Cons_inst_7_8_11_tsni = function match_xs_arm_Cons_inst_7_8_11_tsni(ys, zs, _deforest_Cons_head_inst_7_8_11_tsni, _deforest_Cons_tail_inst_7_8_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_7_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_8_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_7_32_tsni(f, ys1, zs1)
    }
  }
};
match_zs_arm_Cons_inst_7_9_11_tsni = function match_zs_arm_Cons_inst_7_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_7_9_11_tsni, _deforest_Cons_tail_inst_7_9_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_9_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_7_9_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
};
match_xs_arm_Cons_inst_7_9_11_tsni = function match_xs_arm_Cons_inst_7_9_11_tsni(ys, zs, _deforest_Cons_head_inst_7_9_11_tsni, _deforest_Cons_tail_inst_7_9_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_9_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_7_32_tsni(f, zs1, hx1, tx1)
    }
  }
};
match_zs_arm_Cons_inst_7_10_11_tsni = function match_zs_arm_Cons_inst_7_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_7_10_11_tsni, _deforest_Cons_tail_inst_7_10_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_7_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_10_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    tmp9 = tot > 3;
    scrut1 = tmp8 || tmp9;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_7_10_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_7_32_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Cons_inst_7_10_11_tsni = function match_xs_arm_Cons_inst_7_10_11_tsni(ys, zs, _deforest_Cons_head_inst_7_10_11_tsni, _deforest_Cons_tail_inst_7_10_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_7_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_7_10_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_7_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
};
match_xs_arm_default_inst_7_32_tsni = function match_xs_arm_default_inst_7_32_tsni(f, ys, zs) {
  return NofibPrelude.Nil
};
match_ys_arm_default_inst_7_32_tsni = function match_ys_arm_default_inst_7_32_tsni(f, zs, hx, tx) {
  return NofibPrelude.Nil
};
match_zs_arm_default_inst_7_32_tsni = function match_zs_arm_default_inst_7_32_tsni(f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_12_13_11_tsni = function match_zs_arm_Cons_inst_12_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_12_13_11_tsni, _deforest_Cons_tail_inst_12_13_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_12_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_12_14_8_tsni(0, last);
    tmp2 = shift_inst_12_14_9_tsni(0, this_);
    tmp3 = shift_inst_12_14_10_tsni(0, next);
    return zipWith3_inst_12_14_32_tsni(elt_inst_12_14_33_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_12_13_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_12_34_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Cons_inst_12_13_11_tsni = function match_xs_arm_Cons_inst_12_13_11_tsni(ys, zs, _deforest_Cons_head_inst_12_13_11_tsni, _deforest_Cons_tail_inst_12_13_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_12_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_13_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_12_34_tsni(f)
    }
  }
};
match_xs_arm_Cons_inst_12_14_10_11_tsni = function match_xs_arm_Cons_inst_12_14_10_11_tsni(ys, zs, _deforest_Cons_head_inst_12_14_10_11_tsni, _deforest_Cons_tail_inst_12_14_10_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_12_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_10_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_12_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
};
match_zs_arm_Cons_inst_12_14_10_11_tsni = function match_zs_arm_Cons_inst_12_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_12_14_10_11_tsni, _deforest_Cons_tail_inst_12_14_10_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_12_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_10_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    tmp9 = tot > 3;
    scrut1 = tmp8 || tmp9;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_12_14_10_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_12_14_32_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_zs_arm_default_inst_12_14_32_tsni = function match_zs_arm_default_inst_12_14_32_tsni(f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_12_14_9_11_tsni = function match_xs_arm_Cons_inst_12_14_9_11_tsni(ys, zs, _deforest_Cons_head_inst_12_14_9_11_tsni, _deforest_Cons_tail_inst_12_14_9_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_12_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_9_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_12_14_32_tsni(f, zs1, hx1, tx1)
    }
  }
};
match_zs_arm_Cons_inst_12_14_9_11_tsni = function match_zs_arm_Cons_inst_12_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_12_14_9_11_tsni, _deforest_Cons_tail_inst_12_14_9_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_12_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_9_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_12_14_9_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
};
match_ys_arm_default_inst_12_14_32_tsni = function match_ys_arm_default_inst_12_14_32_tsni(f, zs, hx, tx) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_12_14_8_11_tsni = function match_xs_arm_Cons_inst_12_14_8_11_tsni(ys, zs, _deforest_Cons_head_inst_12_14_8_11_tsni, _deforest_Cons_tail_inst_12_14_8_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_12_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_8_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_12_14_32_tsni(f, ys1, zs1)
    }
  }
};
match_zs_arm_Cons_inst_12_14_8_11_tsni = function match_zs_arm_Cons_inst_12_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_12_14_8_11_tsni, _deforest_Cons_tail_inst_12_14_8_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_12_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_12_14_8_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_12_14_8_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
};
match_xs_arm_default_inst_12_14_32_tsni = function match_xs_arm_default_inst_12_14_32_tsni(f, ys, zs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_12_34_tsni = function match_xs_arm_Nil_inst_12_34_tsni(f) {
  return NofibPrelude.Nil
};
match_scrut_arm_LzCons_inst_20_39_tsni = function match_scrut_arm_LzCons_inst_20_39_tsni(n, _deforest_LzCons_head_inst_20_39_tsni, _deforest_LzCons_tail_inst_20_39_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_20_39_tsni;
  param1 = _deforest_LzCons_tail_inst_20_39_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_20_39_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
};
match_zs_arm_Cons_inst_20_23_14_8_11_tsni = function match_zs_arm_Cons_inst_20_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_20_23_14_8_11_tsni, _deforest_Cons_tail_inst_20_23_14_8_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_20_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_8_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_20_23_14_8_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
};
match_xs_arm_Cons_inst_20_23_14_8_11_tsni = function match_xs_arm_Cons_inst_20_23_14_8_11_tsni(ys, zs, _deforest_Cons_head_inst_20_23_14_8_11_tsni, _deforest_Cons_tail_inst_20_23_14_8_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_20_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_8_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_20_23_14_32_tsni(f, ys1, zs1)
    }
  }
};
match_zs_arm_Cons_inst_20_23_14_9_11_tsni = function match_zs_arm_Cons_inst_20_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_20_23_14_9_11_tsni, _deforest_Cons_tail_inst_20_23_14_9_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_20_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_9_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_20_23_14_9_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
};
match_xs_arm_Cons_inst_20_23_14_9_11_tsni = function match_xs_arm_Cons_inst_20_23_14_9_11_tsni(ys, zs, _deforest_Cons_head_inst_20_23_14_9_11_tsni, _deforest_Cons_tail_inst_20_23_14_9_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_20_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_9_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_20_23_14_32_tsni(f, zs1, hx1, tx1)
    }
  }
};
match_zs_arm_Cons_inst_20_23_14_10_11_tsni = function match_zs_arm_Cons_inst_20_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_20_23_14_10_11_tsni, _deforest_Cons_tail_inst_20_23_14_10_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_20_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_10_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    tmp9 = tot > 3;
    scrut1 = tmp8 || tmp9;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_20_23_14_10_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_20_23_14_32_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Cons_inst_20_23_14_10_11_tsni = function match_xs_arm_Cons_inst_20_23_14_10_11_tsni(ys, zs, _deforest_Cons_head_inst_20_23_14_10_11_tsni, _deforest_Cons_tail_inst_20_23_14_10_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_20_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_14_10_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_20_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
};
match_xs_arm_default_inst_20_23_14_32_tsni = function match_xs_arm_default_inst_20_23_14_32_tsni(f, ys, zs) {
  return NofibPrelude.Nil
};
match_ys_arm_default_inst_20_23_14_32_tsni = function match_ys_arm_default_inst_20_23_14_32_tsni(f, zs, hx, tx) {
  return NofibPrelude.Nil
};
match_zs_arm_default_inst_20_23_14_32_tsni = function match_zs_arm_default_inst_20_23_14_32_tsni(f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_20_23_13_11_tsni = function match_xs_arm_Cons_inst_20_23_13_11_tsni(ys, zs, _deforest_Cons_head_inst_20_23_13_11_tsni, _deforest_Cons_tail_inst_20_23_13_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_20_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_13_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_20_23_34_tsni(f)
    }
  }
};
match_zs_arm_Cons_inst_20_23_13_11_tsni = function match_zs_arm_Cons_inst_20_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_20_23_13_11_tsni, _deforest_Cons_tail_inst_20_23_13_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_20_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_20_23_13_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_20_23_14_8_tsni(0, last);
    tmp2 = shift_inst_20_23_14_9_tsni(0, this_);
    tmp3 = shift_inst_20_23_14_10_tsni(0, next);
    return zipWith3_inst_20_23_14_32_tsni(elt_inst_20_23_14_33_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_20_23_13_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_20_23_34_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Nil_inst_20_23_34_tsni = function match_xs_arm_Nil_inst_20_23_34_tsni(f) {
  return NofibPrelude.Nil
};
match_ys_arm_Cons_inst_20_26_tsni = function match_ys_arm_Cons_inst_20_26_tsni(x, xs, _deforest_Cons_head_inst_20_26_tsni, _deforest_Cons_tail_inst_20_26_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_20_26_tsni;
  param1 = _deforest_Cons_tail_inst_20_26_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1, lambda;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    lambda = (undefined, function () {
      let tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
      tmp2 = NofibPrelude.nofibStringToList("nn");
      lambda1 = (undefined, function (x1) {
        let tmp6;
        tmp6 = map_inst_20_25_16_tsni(life.star, x1);
        return concat_inst_20_25_18_tsni(tmp6)
      });
      tmp3 = map_inst_20_25_17_tsni(lambda1, xss);
      lambda2 = (undefined, function (a, b) {
        let tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
        _deforest_Cons_head1 = "n";
        _deforest_Cons_tail1 = (ys1) => {
          return ys1
        };
        tmp6 = (ys1) => {
          let param01, param11, x1, xs1, tmp7;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp7 = append_inst_20_25_35_36_tsni(xs1, ys1);
          return NofibPrelude.Cons(x1, tmp7)
        };
        return glue_inst_20_25_35_tsni(tmp6, a, b)
      });
      tmp4 = foldr_inst_20_25_37_tsni(lambda2, NofibPrelude.Nil, tmp3);
      tmp5 = NofibPrelude.append(tmp2, tmp4);
      return NofibPrelude.append(genn, tmp5)
    });
    tmp1 = lambda;
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_20_26_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_20_40_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Nil_inst_20_40_tsni = function match_xs_arm_Nil_inst_20_40_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_27_28_40_tsni = function match_xs_arm_Nil_inst_27_28_40_tsni(f) {
  return NofibPrelude.Nil
};
match_ys_arm_Cons_inst_27_28_26_tsni = function match_ys_arm_Cons_inst_27_28_26_tsni(x, xs, _deforest_Cons_head_inst_27_28_26_tsni, _deforest_Cons_tail_inst_27_28_26_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_27_28_26_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_26_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1, lambda;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    lambda = (undefined, function () {
      let tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
      tmp2 = NofibPrelude.nofibStringToList("nn");
      lambda1 = (undefined, function (x1) {
        let tmp6;
        tmp6 = map_inst_27_28_25_16_tsni(life.star, x1);
        return concat_inst_27_28_25_18_tsni(tmp6)
      });
      tmp3 = map_inst_27_28_25_17_tsni(lambda1, xss);
      lambda2 = (undefined, function (a, b) {
        let tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
        _deforest_Cons_head1 = "n";
        _deforest_Cons_tail1 = (ys1) => {
          return ys1
        };
        tmp6 = (ys1) => {
          let param01, param11, x1, xs1, tmp7;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp7 = append_inst_27_28_25_35_36_tsni(xs1, ys1);
          return NofibPrelude.Cons(x1, tmp7)
        };
        return glue_inst_27_28_25_35_tsni(tmp6, a, b)
      });
      tmp4 = foldr_inst_27_28_25_37_tsni(lambda2, NofibPrelude.Nil, tmp3);
      tmp5 = NofibPrelude.append(tmp2, tmp4);
      return NofibPrelude.append(genn, tmp5)
    });
    tmp1 = lambda;
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_27_28_26_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_27_28_40_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_zs_arm_Cons_inst_27_28_23_13_11_tsni = function match_zs_arm_Cons_inst_27_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_27_28_23_13_11_tsni, _deforest_Cons_tail_inst_27_28_23_13_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_27_28_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_13_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_27_28_23_14_8_tsni(0, last);
    tmp2 = shift_inst_27_28_23_14_9_tsni(0, this_);
    tmp3 = shift_inst_27_28_23_14_10_tsni(0, next);
    return zipWith3_inst_27_28_23_14_32_tsni(elt_inst_27_28_23_14_33_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_27_28_23_13_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_27_28_23_34_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Cons_inst_27_28_23_13_11_tsni = function match_xs_arm_Cons_inst_27_28_23_13_11_tsni(ys, zs, _deforest_Cons_head_inst_27_28_23_13_11_tsni, _deforest_Cons_tail_inst_27_28_23_13_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_27_28_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_13_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_27_28_23_34_tsni(f)
    }
  }
};
match_xs_arm_Cons_inst_27_28_23_14_10_11_tsni = function match_xs_arm_Cons_inst_27_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head_inst_27_28_23_14_10_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_10_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_27_28_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_10_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_27_28_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
};
match_zs_arm_Cons_inst_27_28_23_14_10_11_tsni = function match_zs_arm_Cons_inst_27_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_27_28_23_14_10_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_10_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_27_28_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_10_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    tmp9 = tot > 3;
    scrut1 = tmp8 || tmp9;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_27_28_23_14_10_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_27_28_23_14_32_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_zs_arm_default_inst_27_28_23_14_32_tsni = function match_zs_arm_default_inst_27_28_23_14_32_tsni(f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_27_28_23_14_9_11_tsni = function match_xs_arm_Cons_inst_27_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head_inst_27_28_23_14_9_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_9_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_27_28_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_9_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_27_28_23_14_32_tsni(f, zs1, hx1, tx1)
    }
  }
};
match_zs_arm_Cons_inst_27_28_23_14_9_11_tsni = function match_zs_arm_Cons_inst_27_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_27_28_23_14_9_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_9_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_27_28_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_9_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_27_28_23_14_9_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
};
match_ys_arm_default_inst_27_28_23_14_32_tsni = function match_ys_arm_default_inst_27_28_23_14_32_tsni(f, zs, hx, tx) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_27_28_23_14_8_11_tsni = function match_xs_arm_Cons_inst_27_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head_inst_27_28_23_14_8_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_8_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_27_28_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_8_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_27_28_23_14_32_tsni(f, ys1, zs1)
    }
  }
};
match_zs_arm_Cons_inst_27_28_23_14_8_11_tsni = function match_zs_arm_Cons_inst_27_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_27_28_23_14_8_11_tsni, _deforest_Cons_tail_inst_27_28_23_14_8_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_27_28_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_27_28_23_14_8_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_27_28_23_14_8_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
};
match_xs_arm_default_inst_27_28_23_14_32_tsni = function match_xs_arm_default_inst_27_28_23_14_32_tsni(f, ys, zs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_27_28_23_34_tsni = function match_xs_arm_Nil_inst_27_28_23_34_tsni(f) {
  return NofibPrelude.Nil
};
match_scrut_arm_LzCons_inst_27_28_39_tsni = function match_scrut_arm_LzCons_inst_27_28_39_tsni(n, _deforest_LzCons_head_inst_27_28_39_tsni, _deforest_LzCons_tail_inst_27_28_39_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_27_28_39_tsni;
  param1 = _deforest_LzCons_tail_inst_27_28_39_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_27_28_39_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
};
match_scrut_arm_LzCons_inst_29_30_28_39_tsni = function match_scrut_arm_LzCons_inst_29_30_28_39_tsni(n, _deforest_LzCons_head_inst_29_30_28_39_tsni, _deforest_LzCons_tail_inst_29_30_28_39_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_29_30_28_39_tsni;
  param1 = _deforest_LzCons_tail_inst_29_30_28_39_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_29_30_28_39_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
};
match_zs_arm_Cons_inst_29_30_28_23_14_8_11_tsni = function match_zs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_29_30_28_23_14_8_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_8_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_8_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_29_30_28_23_14_8_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
};
match_xs_arm_Cons_inst_29_30_28_23_14_8_11_tsni = function match_xs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head_inst_29_30_28_23_14_8_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_8_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_8_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_8_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_29_30_28_23_14_32_tsni(f, ys1, zs1)
    }
  }
};
match_zs_arm_Cons_inst_29_30_28_23_14_9_11_tsni = function match_zs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_29_30_28_23_14_9_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_9_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_9_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_29_30_28_23_14_9_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
};
match_xs_arm_Cons_inst_29_30_28_23_14_9_11_tsni = function match_xs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head_inst_29_30_28_23_14_9_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_9_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_9_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_29_30_28_23_14_32_tsni(f, zs1, hx1, tx1)
    }
  }
};
match_zs_arm_Cons_inst_29_30_28_23_14_10_11_tsni = function match_zs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_29_30_28_23_14_10_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_10_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_10_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    tmp9 = tot > 3;
    scrut1 = tmp8 || tmp9;
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_29_30_28_23_14_10_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_29_30_28_23_14_32_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Cons_inst_29_30_28_23_14_10_11_tsni = function match_xs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head_inst_29_30_28_23_14_10_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_14_10_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_29_30_28_23_14_10_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_14_10_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_29_30_28_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
};
match_xs_arm_default_inst_29_30_28_23_14_32_tsni = function match_xs_arm_default_inst_29_30_28_23_14_32_tsni(f, ys, zs) {
  return NofibPrelude.Nil
};
match_ys_arm_default_inst_29_30_28_23_14_32_tsni = function match_ys_arm_default_inst_29_30_28_23_14_32_tsni(f, zs, hx, tx) {
  return NofibPrelude.Nil
};
match_zs_arm_default_inst_29_30_28_23_14_32_tsni = function match_zs_arm_default_inst_29_30_28_23_14_32_tsni(f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_29_30_28_23_13_11_tsni = function match_xs_arm_Cons_inst_29_30_28_23_13_11_tsni(ys, zs, _deforest_Cons_head_inst_29_30_28_23_13_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_13_11_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_29_30_28_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_13_11_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_29_30_28_23_34_tsni(f)
    }
  }
};
match_zs_arm_Cons_inst_29_30_28_23_13_11_tsni = function match_zs_arm_Cons_inst_29_30_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head_inst_29_30_28_23_13_11_tsni, _deforest_Cons_tail_inst_29_30_28_23_13_11_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_29_30_28_23_13_11_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_23_13_11_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_29_30_28_23_14_8_tsni(0, last);
    tmp2 = shift_inst_29_30_28_23_14_9_tsni(0, this_);
    tmp3 = shift_inst_29_30_28_23_14_10_tsni(0, next);
    return zipWith3_inst_29_30_28_23_14_32_tsni(elt_inst_29_30_28_23_14_33_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_29_30_28_23_13_11_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_29_30_28_23_34_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Nil_inst_29_30_28_23_34_tsni = function match_xs_arm_Nil_inst_29_30_28_23_34_tsni(f) {
  return NofibPrelude.Nil
};
match_ys_arm_Cons_inst_29_30_28_26_tsni = function match_ys_arm_Cons_inst_29_30_28_26_tsni(x, xs, _deforest_Cons_head_inst_29_30_28_26_tsni, _deforest_Cons_tail_inst_29_30_28_26_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_29_30_28_26_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_28_26_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1, lambda;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    lambda = (undefined, function () {
      let tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
      tmp2 = NofibPrelude.nofibStringToList("nn");
      lambda1 = (undefined, function (x1) {
        let tmp6;
        tmp6 = map_inst_29_30_28_25_16_tsni(life.star, x1);
        return concat_inst_29_30_28_25_18_tsni(tmp6)
      });
      tmp3 = map_inst_29_30_28_25_17_tsni(lambda1, xss);
      lambda2 = (undefined, function (a, b) {
        let tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
        _deforest_Cons_head1 = "n";
        _deforest_Cons_tail1 = (ys1) => {
          return ys1
        };
        tmp6 = (ys1) => {
          let param01, param11, x1, xs1, tmp7;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp7 = append_inst_29_30_28_25_35_36_tsni(xs1, ys1);
          return NofibPrelude.Cons(x1, tmp7)
        };
        return glue_inst_29_30_28_25_35_tsni(tmp6, a, b)
      });
      tmp4 = foldr_inst_29_30_28_25_37_tsni(lambda2, NofibPrelude.Nil, tmp3);
      tmp5 = NofibPrelude.append(tmp2, tmp4);
      return NofibPrelude.append(genn, tmp5)
    });
    tmp1 = lambda;
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_29_30_28_26_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_29_30_28_40_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
};
match_xs_arm_Nil_inst_29_30_28_40_tsni = function match_xs_arm_Nil_inst_29_30_28_40_tsni(f) {
  return NofibPrelude.Nil
};
init_inst_0_1_tsni = function init_inst_0_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_0_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_0_6_tsni(xs, ys);
        return NofibPrelude.Cons(x, tmp1)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftl_inst_2_3_tsni = function shiftl_inst_2_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_2_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return NofibPrelude.Nil
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_2_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_2_3_6_tsni(tmp, tmp1)
};
init_inst_2_3_1_tsni = function init_inst_2_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_2_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_2_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_2_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_2_4_tsni = function shiftr_inst_2_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_2_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_2_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_2_4_5_tsni = function init_inst_2_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return NofibPrelude.Nil
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_2_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_2_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_2_3_6_tsni = function append_inst_2_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shift_inst_7_8_tsni = function shift_inst_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_7_8_4_tsni(x, xs);
  tmp1 = shiftl_inst_7_8_3_tsni(x, xs);
  return zip3_inst_7_8_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_7_8_3_tsni = function shiftl_inst_7_8_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_8_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_7_32_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_7_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_7_8_3_6_tsni(tmp, tmp1)
};
init_inst_7_8_3_1_tsni = function init_inst_7_8_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_8_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_7_8_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_7_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_7_8_3_6_tsni = function append_inst_7_8_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_7_8_4_tsni = function shiftr_inst_7_8_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_8_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_7_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_7_8_4_5_tsni = function init_inst_7_8_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_7_32_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_8_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_7_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_7_9_tsni = function shift_inst_7_9_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_7_9_4_tsni(x, xs);
  tmp1 = shiftl_inst_7_9_3_tsni(x, xs);
  return zip3_inst_7_9_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_7_9_3_tsni = function shiftl_inst_7_9_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_9_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_7_32_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_7_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_7_9_3_6_tsni(tmp, tmp1)
};
init_inst_7_9_3_1_tsni = function init_inst_7_9_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_9_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_7_9_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_7_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_7_9_3_6_tsni = function append_inst_7_9_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_7_9_4_tsni = function shiftr_inst_7_9_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_9_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_7_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_7_9_4_5_tsni = function init_inst_7_9_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_7_32_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_9_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_7_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_7_10_tsni = function shift_inst_7_10_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_7_10_4_tsni(x, xs);
  tmp1 = shiftl_inst_7_10_3_tsni(x, xs);
  return zip3_inst_7_10_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_7_10_3_tsni = function shiftl_inst_7_10_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_10_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_7_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_7_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_7_10_3_6_tsni(tmp, tmp1)
};
init_inst_7_10_3_1_tsni = function init_inst_7_10_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_10_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_7_10_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_7_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_7_10_3_6_tsni = function append_inst_7_10_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_7_10_4_tsni = function shiftr_inst_7_10_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_7_10_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_7_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_7_10_4_5_tsni = function init_inst_7_10_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_7_32_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_7_10_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_7_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
zip3_inst_7_8_11_tsni = function zip3_inst_7_8_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_7_9_11_tsni = function zip3_inst_7_9_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_7_10_11_tsni = function zip3_inst_7_10_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_12_13_tsni = function shift_inst_12_13_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_12_13_4_tsni(x, xs);
  tmp1 = shiftl_inst_12_13_3_tsni(x, xs);
  return zip3_inst_12_13_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_12_13_3_tsni = function shiftl_inst_12_13_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_13_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_12_34_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_12_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_12_13_3_6_tsni(tmp, tmp1)
};
init_inst_12_13_3_1_tsni = function init_inst_12_13_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_13_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_12_13_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_12_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_12_13_3_6_tsni = function append_inst_12_13_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_12_13_4_tsni = function shiftr_inst_12_13_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_13_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_12_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_12_13_4_5_tsni = function init_inst_12_13_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_12_34_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_13_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_12_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
row_inst_12_14_tsni = function row_inst_12_14_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_12_14_10_tsni = function shift_inst_12_14_10_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_12_14_10_4_tsni(x, xs);
  tmp1 = shiftl_inst_12_14_10_3_tsni(x, xs);
  return zip3_inst_12_14_10_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_12_14_10_3_tsni = function shiftl_inst_12_14_10_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_10_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_12_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_12_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_12_14_10_3_6_tsni(tmp, tmp1)
};
init_inst_12_14_10_3_1_tsni = function init_inst_12_14_10_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_10_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_12_14_10_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_12_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_12_14_10_4_tsni = function shiftr_inst_12_14_10_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_10_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_12_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_12_14_10_4_5_tsni = function init_inst_12_14_10_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_12_14_32_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_10_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_12_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_12_14_10_3_6_tsni = function append_inst_12_14_10_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_12_14_10_11_tsni = function zip3_inst_12_14_10_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_12_14_9_tsni = function shift_inst_12_14_9_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_12_14_9_4_tsni(x, xs);
  tmp1 = shiftl_inst_12_14_9_3_tsni(x, xs);
  return zip3_inst_12_14_9_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_12_14_9_3_tsni = function shiftl_inst_12_14_9_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_9_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_12_14_32_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_12_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_12_14_9_3_6_tsni(tmp, tmp1)
};
init_inst_12_14_9_3_1_tsni = function init_inst_12_14_9_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_9_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_12_14_9_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_12_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_12_14_9_4_tsni = function shiftr_inst_12_14_9_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_9_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_12_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_12_14_9_4_5_tsni = function init_inst_12_14_9_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_12_14_32_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_9_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_12_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_12_14_9_3_6_tsni = function append_inst_12_14_9_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_12_14_9_11_tsni = function zip3_inst_12_14_9_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_12_14_8_tsni = function shift_inst_12_14_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_12_14_8_4_tsni(x, xs);
  tmp1 = shiftl_inst_12_14_8_3_tsni(x, xs);
  return zip3_inst_12_14_8_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_12_14_8_3_tsni = function shiftl_inst_12_14_8_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_8_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_12_14_32_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_12_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_12_14_8_3_6_tsni(tmp, tmp1)
};
init_inst_12_14_8_3_1_tsni = function init_inst_12_14_8_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_8_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_12_14_8_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_12_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_12_14_8_4_tsni = function shiftr_inst_12_14_8_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_12_14_8_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_12_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_12_14_8_4_5_tsni = function init_inst_12_14_8_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_12_14_32_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_12_14_8_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_12_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_12_14_8_3_6_tsni = function append_inst_12_14_8_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_12_14_8_11_tsni = function zip3_inst_12_14_8_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_12_13_11_tsni = function zip3_inst_12_13_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
map_inst_15_16_tsni = function map_inst_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_15_18_tsni(xs2);
      return append_inst_15_18_19_tsni(x1, tmp2)
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
map_inst_15_17_tsni = function map_inst_15_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_15_37_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_15_18_tsni = function concat_inst_15_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_18_19_tsni = function append_inst_15_18_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_15_18_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_15_35_38_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
copy_lz_inst_20_21_tsni = function copy_lz_inst_20_21_tsni(n, x) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = n === 0;
    if (scrut === true) {
      return (n1) => {
        return NofibPrelude.Nil
      }
    } else {
      tmp1 = n - 1;
      tmp2 = copy_lz_inst_20_21_tsni(tmp1, x);
      _deforest_LzCons_head = x;
      _deforest_LzCons_tail = tmp2;
      return (n1) => {
        return match_scrut_arm_LzCons_inst_20_39_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
append_lz_lz_inst_20_22_tsni = function append_lz_lz_inst_20_22_tsni(xs, ys) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, h, t, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.force(ys)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      tmp1 = append_lz_lz_inst_20_22_tsni(t, ys);
      _deforest_LzCons_head = h;
      _deforest_LzCons_tail = tmp1;
      return (n) => {
        return match_scrut_arm_LzCons_inst_20_39_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
gen_inst_20_23_tsni = function gen_inst_20_23_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_20_23_13_tsni(tmp, board);
  return map_inst_20_23_34_tsni(row_inst_20_23_14_tsni, tmp1)
};
row_inst_20_23_14_tsni = function row_inst_20_23_14_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_20_23_14_8_tsni = function shift_inst_20_23_14_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_20_23_14_8_4_tsni(x, xs);
  tmp1 = shiftl_inst_20_23_14_8_3_tsni(x, xs);
  return zip3_inst_20_23_14_8_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_20_23_14_8_3_tsni = function shiftl_inst_20_23_14_8_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_8_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_20_23_14_32_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_20_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_20_23_14_8_3_6_tsni(tmp, tmp1)
};
init_inst_20_23_14_8_3_1_tsni = function init_inst_20_23_14_8_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_8_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_20_23_14_8_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_20_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_20_23_14_8_3_6_tsni = function append_inst_20_23_14_8_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_20_23_14_8_4_tsni = function shiftr_inst_20_23_14_8_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_8_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_20_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_20_23_14_8_4_5_tsni = function init_inst_20_23_14_8_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_20_23_14_32_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_8_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_20_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_20_23_14_9_tsni = function shift_inst_20_23_14_9_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_20_23_14_9_4_tsni(x, xs);
  tmp1 = shiftl_inst_20_23_14_9_3_tsni(x, xs);
  return zip3_inst_20_23_14_9_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_20_23_14_9_3_tsni = function shiftl_inst_20_23_14_9_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_9_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_20_23_14_32_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_20_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_20_23_14_9_3_6_tsni(tmp, tmp1)
};
init_inst_20_23_14_9_3_1_tsni = function init_inst_20_23_14_9_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_9_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_20_23_14_9_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_20_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_20_23_14_9_3_6_tsni = function append_inst_20_23_14_9_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_20_23_14_9_4_tsni = function shiftr_inst_20_23_14_9_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_9_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_20_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_20_23_14_9_4_5_tsni = function init_inst_20_23_14_9_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_20_23_14_32_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_9_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_20_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_20_23_14_10_tsni = function shift_inst_20_23_14_10_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_20_23_14_10_4_tsni(x, xs);
  tmp1 = shiftl_inst_20_23_14_10_3_tsni(x, xs);
  return zip3_inst_20_23_14_10_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_20_23_14_10_3_tsni = function shiftl_inst_20_23_14_10_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_10_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_20_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_20_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_20_23_14_10_3_6_tsni(tmp, tmp1)
};
init_inst_20_23_14_10_3_1_tsni = function init_inst_20_23_14_10_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_10_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_20_23_14_10_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_20_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_20_23_14_10_3_6_tsni = function append_inst_20_23_14_10_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_20_23_14_10_4_tsni = function shiftr_inst_20_23_14_10_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_14_10_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_20_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_20_23_14_10_4_5_tsni = function init_inst_20_23_14_10_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_20_23_14_32_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_14_10_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_20_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
zip3_inst_20_23_14_8_11_tsni = function zip3_inst_20_23_14_8_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_20_23_14_9_11_tsni = function zip3_inst_20_23_14_9_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_20_23_14_10_11_tsni = function zip3_inst_20_23_14_10_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_20_23_13_tsni = function shift_inst_20_23_13_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_20_23_13_4_tsni(x, xs);
  tmp1 = shiftl_inst_20_23_13_3_tsni(x, xs);
  return zip3_inst_20_23_13_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_20_23_13_3_tsni = function shiftl_inst_20_23_13_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_13_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_20_23_34_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_20_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_20_23_13_3_6_tsni(tmp, tmp1)
};
init_inst_20_23_13_3_1_tsni = function init_inst_20_23_13_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_13_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_20_23_13_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_20_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_20_23_13_4_tsni = function shiftr_inst_20_23_13_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_20_23_13_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_20_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_20_23_13_4_5_tsni = function init_inst_20_23_13_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_20_23_34_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_20_23_13_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_20_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_20_23_13_3_6_tsni = function append_inst_20_23_13_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_20_23_13_11_tsni = function zip3_inst_20_23_13_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
limit_inst_20_24_tsni = function limit_inst_20_24_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_20_40_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_20_26_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda = (undefined, function () {
          return NofibPrelude.LzCons(y, xs)
        });
        tmp = NofibPrelude.lazy(lambda);
        tmp1 = limit_inst_20_24_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_20_26_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
disp_inst_20_25_tsni = function disp_inst_20_25_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
map_inst_20_25_17_tsni = function map_inst_20_25_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_25_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_20_25_37_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_20_25_18_tsni = function concat_inst_20_25_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_20_25_18_19_tsni = function append_inst_20_25_18_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_20_25_18_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_20_25_35_38_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_20_25_16_tsni = function map_inst_20_25_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_25_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_20_25_18_tsni(xs2);
      return append_inst_20_25_18_19_tsni(x1, tmp2)
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
zip_lz_nl_inst_20_26_tsni = function zip_lz_nl_inst_20_26_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_20_40_tsni(f)
    }
  }
};
generations_inst_27_28_tsni = function generations_inst_27_28_tsni(sz) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda, lambda1, lambda2;
  tmp = NofibPrelude.enumFrom(0);
  lambda = (undefined, function (i) {
    let tmp11;
    tmp11 = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp11)
  });
  tmp1 = NofibPrelude.map_lz(lambda, tmp);
  lambda1 = (undefined, function (l) {
    let tmp11, tmp12;
    tmp11 = copy_lz_inst_27_28_21_tsni(sz, 0);
    tmp12 = append_lz_lz_inst_27_28_22_tsni(l, tmp11);
    return take_lz_inst_27_28_39_tsni(sz, tmp12)
  });
  tmp2 = lambda1;
  tmp3 = life.copy_lz(sz, 0);
  tmp4 = life.copy_lz(sz, tmp3);
  tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
  tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
  tmp7 = NofibPrelude.take_lz(sz, tmp6);
  lambda2 = (undefined, function (b) {
    return gen_inst_27_28_23_tsni(sz, b)
  });
  tmp8 = NofibPrelude.iterate(lambda2, tmp7);
  tmp9 = limit_inst_27_28_24_tsni(tmp8);
  tmp10 = zip_lz_nl_inst_27_28_26_tsni(tmp1, tmp9);
  return map_inst_27_28_40_tsni(disp_inst_27_28_25_tsni, tmp10)
};
disp_inst_27_28_25_tsni = function disp_inst_27_28_25_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
map_inst_27_28_25_16_tsni = function map_inst_27_28_25_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_28_25_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_27_28_25_18_tsni(xs2);
      return append_inst_27_28_25_18_19_tsni(x1, tmp2)
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
map_inst_27_28_25_17_tsni = function map_inst_27_28_25_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_28_25_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_27_28_25_37_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_27_28_25_18_tsni = function concat_inst_27_28_25_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_27_28_25_18_19_tsni = function append_inst_27_28_25_18_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_27_28_25_18_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_27_28_25_35_38_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
zip_lz_nl_inst_27_28_26_tsni = function zip_lz_nl_inst_27_28_26_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_27_28_40_tsni(f)
    }
  }
};
limit_inst_27_28_24_tsni = function limit_inst_27_28_24_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_27_28_40_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_27_28_26_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda = (undefined, function () {
          return NofibPrelude.LzCons(y, xs)
        });
        tmp = NofibPrelude.lazy(lambda);
        tmp1 = limit_inst_27_28_24_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_27_28_26_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
gen_inst_27_28_23_tsni = function gen_inst_27_28_23_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_27_28_23_13_tsni(tmp, board);
  return map_inst_27_28_23_34_tsni(row_inst_27_28_23_14_tsni, tmp1)
};
shift_inst_27_28_23_13_tsni = function shift_inst_27_28_23_13_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_27_28_23_13_4_tsni(x, xs);
  tmp1 = shiftl_inst_27_28_23_13_3_tsni(x, xs);
  return zip3_inst_27_28_23_13_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_27_28_23_13_3_tsni = function shiftl_inst_27_28_23_13_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_13_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_27_28_23_34_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_27_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_27_28_23_13_3_6_tsni(tmp, tmp1)
};
init_inst_27_28_23_13_3_1_tsni = function init_inst_27_28_23_13_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_13_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_27_28_23_13_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_27_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_27_28_23_13_3_6_tsni = function append_inst_27_28_23_13_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_27_28_23_13_4_tsni = function shiftr_inst_27_28_23_13_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_13_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_27_28_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_27_28_23_13_4_5_tsni = function init_inst_27_28_23_13_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_27_28_23_34_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_13_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_27_28_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
row_inst_27_28_23_14_tsni = function row_inst_27_28_23_14_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_27_28_23_14_10_tsni = function shift_inst_27_28_23_14_10_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_27_28_23_14_10_4_tsni(x, xs);
  tmp1 = shiftl_inst_27_28_23_14_10_3_tsni(x, xs);
  return zip3_inst_27_28_23_14_10_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_27_28_23_14_10_3_tsni = function shiftl_inst_27_28_23_14_10_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_10_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_27_28_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_27_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_27_28_23_14_10_3_6_tsni(tmp, tmp1)
};
init_inst_27_28_23_14_10_3_1_tsni = function init_inst_27_28_23_14_10_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_10_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_27_28_23_14_10_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_27_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_27_28_23_14_10_4_tsni = function shiftr_inst_27_28_23_14_10_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_10_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_27_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_27_28_23_14_10_4_5_tsni = function init_inst_27_28_23_14_10_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_27_28_23_14_32_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_10_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_27_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_27_28_23_14_10_3_6_tsni = function append_inst_27_28_23_14_10_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_27_28_23_14_10_11_tsni = function zip3_inst_27_28_23_14_10_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_27_28_23_14_9_tsni = function shift_inst_27_28_23_14_9_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_27_28_23_14_9_4_tsni(x, xs);
  tmp1 = shiftl_inst_27_28_23_14_9_3_tsni(x, xs);
  return zip3_inst_27_28_23_14_9_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_27_28_23_14_9_3_tsni = function shiftl_inst_27_28_23_14_9_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_9_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_27_28_23_14_32_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_27_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_27_28_23_14_9_3_6_tsni(tmp, tmp1)
};
init_inst_27_28_23_14_9_3_1_tsni = function init_inst_27_28_23_14_9_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_9_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_27_28_23_14_9_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_27_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_27_28_23_14_9_4_tsni = function shiftr_inst_27_28_23_14_9_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_9_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_27_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_27_28_23_14_9_4_5_tsni = function init_inst_27_28_23_14_9_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_27_28_23_14_32_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_9_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_27_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_27_28_23_14_9_3_6_tsni = function append_inst_27_28_23_14_9_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_27_28_23_14_9_11_tsni = function zip3_inst_27_28_23_14_9_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_27_28_23_14_8_tsni = function shift_inst_27_28_23_14_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_27_28_23_14_8_4_tsni(x, xs);
  tmp1 = shiftl_inst_27_28_23_14_8_3_tsni(x, xs);
  return zip3_inst_27_28_23_14_8_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_27_28_23_14_8_3_tsni = function shiftl_inst_27_28_23_14_8_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_8_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_27_28_23_14_32_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_27_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_27_28_23_14_8_3_6_tsni(tmp, tmp1)
};
init_inst_27_28_23_14_8_3_1_tsni = function init_inst_27_28_23_14_8_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_8_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_27_28_23_14_8_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_27_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_27_28_23_14_8_4_tsni = function shiftr_inst_27_28_23_14_8_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_27_28_23_14_8_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_27_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_27_28_23_14_8_4_5_tsni = function init_inst_27_28_23_14_8_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_27_28_23_14_32_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_27_28_23_14_8_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_27_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_27_28_23_14_8_3_6_tsni = function append_inst_27_28_23_14_8_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_27_28_23_14_8_11_tsni = function zip3_inst_27_28_23_14_8_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_27_28_23_13_11_tsni = function zip3_inst_27_28_23_13_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
append_lz_lz_inst_27_28_22_tsni = function append_lz_lz_inst_27_28_22_tsni(xs, ys) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, h, t, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.force(ys)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      tmp1 = append_lz_lz_inst_27_28_22_tsni(t, ys);
      _deforest_LzCons_head = h;
      _deforest_LzCons_tail = tmp1;
      return (n) => {
        return match_scrut_arm_LzCons_inst_27_28_39_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
copy_lz_inst_27_28_21_tsni = function copy_lz_inst_27_28_21_tsni(n, x) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = n === 0;
    if (scrut === true) {
      return (n1) => {
        return NofibPrelude.Nil
      }
    } else {
      tmp1 = n - 1;
      tmp2 = copy_lz_inst_27_28_21_tsni(tmp1, x);
      _deforest_LzCons_head = x;
      _deforest_LzCons_tail = tmp2;
      return (n1) => {
        return match_scrut_arm_LzCons_inst_27_28_39_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
testLife_nofib_inst_29_30_tsni = function testLife_nofib_inst_29_30_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = generations_inst_29_30_28_tsni(n);
  tmp1 = life.last(tmp);
  tmp2 = NofibPrelude.force(tmp1);
  return NofibPrelude.listLen(tmp2)
};
generations_inst_29_30_28_tsni = function generations_inst_29_30_28_tsni(sz) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda, lambda1, lambda2;
  tmp = NofibPrelude.enumFrom(0);
  lambda = (undefined, function (i) {
    let tmp11;
    tmp11 = NofibPrelude.stringOfInt(i);
    return NofibPrelude.nofibStringToList(tmp11)
  });
  tmp1 = NofibPrelude.map_lz(lambda, tmp);
  lambda1 = (undefined, function (l) {
    let tmp11, tmp12;
    tmp11 = copy_lz_inst_29_30_28_21_tsni(sz, 0);
    tmp12 = append_lz_lz_inst_29_30_28_22_tsni(l, tmp11);
    return take_lz_inst_29_30_28_39_tsni(sz, tmp12)
  });
  tmp2 = lambda1;
  tmp3 = life.copy_lz(sz, 0);
  tmp4 = life.copy_lz(sz, tmp3);
  tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
  tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
  tmp7 = NofibPrelude.take_lz(sz, tmp6);
  lambda2 = (undefined, function (b) {
    return gen_inst_29_30_28_23_tsni(sz, b)
  });
  tmp8 = NofibPrelude.iterate(lambda2, tmp7);
  tmp9 = limit_inst_29_30_28_24_tsni(tmp8);
  tmp10 = zip_lz_nl_inst_29_30_28_26_tsni(tmp1, tmp9);
  return map_inst_29_30_28_40_tsni(disp_inst_29_30_28_25_tsni, tmp10)
};
copy_lz_inst_29_30_28_21_tsni = function copy_lz_inst_29_30_28_21_tsni(n, x) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = n === 0;
    if (scrut === true) {
      return (n1) => {
        return NofibPrelude.Nil
      }
    } else {
      tmp1 = n - 1;
      tmp2 = copy_lz_inst_29_30_28_21_tsni(tmp1, x);
      _deforest_LzCons_head = x;
      _deforest_LzCons_tail = tmp2;
      return (n1) => {
        return match_scrut_arm_LzCons_inst_29_30_28_39_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
append_lz_lz_inst_29_30_28_22_tsni = function append_lz_lz_inst_29_30_28_22_tsni(xs, ys) {
  let tmp, lambda;
  lambda = (undefined, function () {
    let scrut, param0, param1, h, t, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.force(ys)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      tmp1 = append_lz_lz_inst_29_30_28_22_tsni(t, ys);
      _deforest_LzCons_head = h;
      _deforest_LzCons_tail = tmp1;
      return (n) => {
        return match_scrut_arm_LzCons_inst_29_30_28_39_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
gen_inst_29_30_28_23_tsni = function gen_inst_29_30_28_23_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_29_30_28_23_13_tsni(tmp, board);
  return map_inst_29_30_28_23_34_tsni(row_inst_29_30_28_23_14_tsni, tmp1)
};
row_inst_29_30_28_23_14_tsni = function row_inst_29_30_28_23_14_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_29_30_28_23_14_8_tsni = function shift_inst_29_30_28_23_14_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_29_30_28_23_14_8_4_tsni(x, xs);
  tmp1 = shiftl_inst_29_30_28_23_14_8_3_tsni(x, xs);
  return zip3_inst_29_30_28_23_14_8_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_29_30_28_23_14_8_3_tsni = function shiftl_inst_29_30_28_23_14_8_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_8_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_29_30_28_23_14_32_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_29_30_28_23_14_8_3_6_tsni(tmp, tmp1)
};
init_inst_29_30_28_23_14_8_3_1_tsni = function init_inst_29_30_28_23_14_8_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_8_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_29_30_28_23_14_8_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_29_30_28_23_14_8_3_6_tsni = function append_inst_29_30_28_23_14_8_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_29_30_28_23_14_8_4_tsni = function shiftr_inst_29_30_28_23_14_8_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_8_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_29_30_28_23_14_8_4_5_tsni = function init_inst_29_30_28_23_14_8_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_29_30_28_23_14_32_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_8_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_29_30_28_23_14_8_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_29_30_28_23_14_9_tsni = function shift_inst_29_30_28_23_14_9_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_29_30_28_23_14_9_4_tsni(x, xs);
  tmp1 = shiftl_inst_29_30_28_23_14_9_3_tsni(x, xs);
  return zip3_inst_29_30_28_23_14_9_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_29_30_28_23_14_9_3_tsni = function shiftl_inst_29_30_28_23_14_9_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_9_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_29_30_28_23_14_32_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_29_30_28_23_14_9_3_6_tsni(tmp, tmp1)
};
init_inst_29_30_28_23_14_9_3_1_tsni = function init_inst_29_30_28_23_14_9_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_9_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_29_30_28_23_14_9_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_29_30_28_23_14_9_3_6_tsni = function append_inst_29_30_28_23_14_9_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_29_30_28_23_14_9_4_tsni = function shiftr_inst_29_30_28_23_14_9_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_9_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_29_30_28_23_14_9_4_5_tsni = function init_inst_29_30_28_23_14_9_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_29_30_28_23_14_32_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_9_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_29_30_28_23_14_9_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shift_inst_29_30_28_23_14_10_tsni = function shift_inst_29_30_28_23_14_10_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_29_30_28_23_14_10_4_tsni(x, xs);
  tmp1 = shiftl_inst_29_30_28_23_14_10_3_tsni(x, xs);
  return zip3_inst_29_30_28_23_14_10_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_29_30_28_23_14_10_3_tsni = function shiftl_inst_29_30_28_23_14_10_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_10_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_29_30_28_23_14_32_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_29_30_28_23_14_10_3_6_tsni(tmp, tmp1)
};
init_inst_29_30_28_23_14_10_3_1_tsni = function init_inst_29_30_28_23_14_10_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_10_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_29_30_28_23_14_10_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_29_30_28_23_14_10_3_6_tsni = function append_inst_29_30_28_23_14_10_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_29_30_28_23_14_10_4_tsni = function shiftr_inst_29_30_28_23_14_10_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_14_10_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_29_30_28_23_14_10_4_5_tsni = function init_inst_29_30_28_23_14_10_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_29_30_28_23_14_32_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_14_10_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_29_30_28_23_14_10_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
zip3_inst_29_30_28_23_14_8_11_tsni = function zip3_inst_29_30_28_23_14_8_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_29_30_28_23_14_9_11_tsni = function zip3_inst_29_30_28_23_14_9_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_29_30_28_23_14_10_11_tsni = function zip3_inst_29_30_28_23_14_10_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_29_30_28_23_13_tsni = function shift_inst_29_30_28_23_13_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_29_30_28_23_13_4_tsni(x, xs);
  tmp1 = shiftl_inst_29_30_28_23_13_3_tsni(x, xs);
  return zip3_inst_29_30_28_23_13_11_tsni(tmp, xs, tmp1)
};
shiftl_inst_29_30_28_23_13_3_tsni = function shiftl_inst_29_30_28_23_13_3_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_13_3_1_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_29_30_28_23_34_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_29_30_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_29_30_28_23_13_3_6_tsni(tmp, tmp1)
};
init_inst_29_30_28_23_13_3_1_tsni = function init_inst_29_30_28_23_13_3_1_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_13_3_1_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_29_30_28_23_13_3_6_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_29_30_28_23_13_11_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
shiftr_inst_29_30_28_23_13_4_tsni = function shiftr_inst_29_30_28_23_13_4_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_29_30_28_23_13_4_5_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_29_30_28_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_29_30_28_23_13_4_5_tsni = function init_inst_29_30_28_23_13_4_5_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_29_30_28_23_34_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_29_30_28_23_13_4_5_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_29_30_28_23_13_11_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls);
  }
};
append_inst_29_30_28_23_13_3_6_tsni = function append_inst_29_30_28_23_13_3_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_29_30_28_23_13_11_tsni = function zip3_inst_29_30_28_23_13_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
limit_inst_29_30_28_24_tsni = function limit_inst_29_30_28_24_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_29_30_28_40_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_29_30_28_26_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda = (undefined, function () {
          return NofibPrelude.LzCons(y, xs)
        });
        tmp = NofibPrelude.lazy(lambda);
        tmp1 = limit_inst_29_30_28_24_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_29_30_28_26_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
disp_inst_29_30_28_25_tsni = function disp_inst_29_30_28_25_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
map_inst_29_30_28_25_17_tsni = function map_inst_29_30_28_25_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_28_25_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_29_30_28_25_37_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_29_30_28_25_18_tsni = function concat_inst_29_30_28_25_18_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_28_25_18_19_tsni = function append_inst_29_30_28_25_18_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_29_30_28_25_18_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_29_30_28_25_35_38_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_29_30_28_25_16_tsni = function map_inst_29_30_28_25_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_28_25_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_30_28_25_18_tsni(xs2);
      return append_inst_29_30_28_25_18_19_tsni(x1, tmp2)
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
zip_lz_nl_inst_29_30_28_26_tsni = function zip_lz_nl_inst_29_30_28_26_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_29_30_28_40_tsni(f)
    }
  }
};
lzfy_inst_31_tsni = function lzfy_inst_31_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function () {
    return runtime.safeCall(ls())
  });
  tmp = lambda;
  return NofibPrelude.lazy(tmp)
};
append_inst_0_6_tsni = function append_inst_0_6_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_2_11_tsni = function zip3_inst_2_11_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zipWith3_inst_7_32_tsni = function zipWith3_inst_7_32_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_7_33_tsni = function elt_inst_7_33_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
zipWith3_inst_12_14_32_tsni = function zipWith3_inst_12_14_32_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_12_14_33_tsni = function elt_inst_12_14_33_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_12_34_tsni = function map_inst_12_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_15_35_tsni = function glue_inst_15_35_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_15_35_36_tsni(s, ys);
  return append_inst_15_35_38_tsni(xs, tmp)
};
append_inst_15_35_36_tsni = function append_inst_15_35_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_15_37_tsni = function foldr_inst_15_37_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_15_35_38_tsni = function append_inst_15_35_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_20_39_tsni = function take_lz_inst_20_39_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith3_inst_20_23_14_32_tsni = function zipWith3_inst_20_23_14_32_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_20_23_14_33_tsni = function elt_inst_20_23_14_33_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_20_23_34_tsni = function map_inst_20_23_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_20_25_35_tsni = function glue_inst_20_25_35_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_20_25_35_36_tsni(s, ys);
  return append_inst_20_25_35_38_tsni(xs, tmp)
};
append_inst_20_25_35_36_tsni = function append_inst_20_25_35_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_20_25_37_tsni = function foldr_inst_20_25_37_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_20_25_35_38_tsni = function append_inst_20_25_35_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_20_40_tsni = function map_inst_20_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_27_28_25_35_tsni = function glue_inst_27_28_25_35_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_27_28_25_35_36_tsni(s, ys);
  return append_inst_27_28_25_35_38_tsni(xs, tmp)
};
append_inst_27_28_25_35_36_tsni = function append_inst_27_28_25_35_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_27_28_25_37_tsni = function foldr_inst_27_28_25_37_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_27_28_25_35_38_tsni = function append_inst_27_28_25_35_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_27_28_40_tsni = function map_inst_27_28_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith3_inst_27_28_23_14_32_tsni = function zipWith3_inst_27_28_23_14_32_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_27_28_23_14_33_tsni = function elt_inst_27_28_23_14_33_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_27_28_23_34_tsni = function map_inst_27_28_23_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_lz_inst_27_28_39_tsni = function take_lz_inst_27_28_39_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
take_lz_inst_29_30_28_39_tsni = function take_lz_inst_29_30_28_39_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith3_inst_29_30_28_23_14_32_tsni = function zipWith3_inst_29_30_28_23_14_32_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_29_30_28_23_14_33_tsni = function elt_inst_29_30_28_23_14_33_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_29_30_28_23_34_tsni = function map_inst_29_30_28_23_34_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_29_30_28_25_35_tsni = function glue_inst_29_30_28_25_35_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_29_30_28_25_35_36_tsni(s, ys);
  return append_inst_29_30_28_25_35_38_tsni(xs, tmp)
};
append_inst_29_30_28_25_35_36_tsni = function append_inst_29_30_28_25_35_36_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_29_30_28_25_37_tsni = function foldr_inst_29_30_28_25_37_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_29_30_28_25_35_38_tsni = function append_inst_29_30_28_25_35_38_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_29_30_28_40_tsni = function map_inst_29_30_28_40_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
(class life {
  static {
    life1 = life;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Cons_head12, _deforest_Cons_tail12, _deforest_Cons_head13, _deforest_Cons_tail13, _deforest_Cons_head14, _deforest_Cons_tail14, _deforest_Cons_head15, _deforest_Cons_tail15, _deforest_Cons_head16, _deforest_Cons_tail16, _deforest_Cons_head17, _deforest_Cons_tail17, _deforest_Cons_head18, _deforest_Cons_tail18, _deforest_Cons_head19, _deforest_Cons_tail19, _deforest_Cons_head20, _deforest_Cons_tail20, _deforest_Cons_head21, _deforest_Cons_tail21, _deforest_Cons_head22, _deforest_Cons_tail22, _deforest_Cons_head23, _deforest_Cons_tail23, _deforest_Cons_head24, _deforest_Cons_tail24, _deforest_Cons_head25, _deforest_Cons_tail25, _deforest_Cons_head26, _deforest_Cons_tail26;
    lambda = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp = NofibPrelude.lazy(lambda);
    lambda1 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp1 = NofibPrelude.lazy(lambda1);
    lambda2 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp2 = NofibPrelude.lazy(lambda2);
    lambda3 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp3 = NofibPrelude.lazy(lambda3);
    lambda4 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp4 = NofibPrelude.lazy(lambda4);
    lambda5 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp5 = NofibPrelude.lazy(lambda5);
    lambda6 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp6 = NofibPrelude.lazy(lambda6);
    lambda7 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp7 = NofibPrelude.lazy(lambda7);
    lambda8 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp8 = NofibPrelude.lazy(lambda8);
    lambda9 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda9);
    lambda10 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp10 = NofibPrelude.lazy(lambda10);
    lambda11 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp11 = NofibPrelude.lazy(lambda11);
    lambda12 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp12 = NofibPrelude.lazy(lambda12);
    lambda13 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp13 = NofibPrelude.lazy(lambda13);
    _deforest_Cons_head26 = 0;
    _deforest_Cons_tail26 = () => {
      return NofibPrelude.LzNil
    };
    tmp14 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head26, _deforest_Cons_tail26)
    };
    _deforest_Cons_head25 = 1;
    _deforest_Cons_tail25 = tmp14;
    tmp15 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head25, _deforest_Cons_tail25)
    };
    _deforest_Cons_head24 = 1;
    _deforest_Cons_tail24 = tmp15;
    tmp16 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head24, _deforest_Cons_tail24)
    };
    _deforest_Cons_head23 = 1;
    _deforest_Cons_tail23 = tmp16;
    tmp17 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head23, _deforest_Cons_tail23)
    };
    _deforest_Cons_head22 = 1;
    _deforest_Cons_tail22 = tmp17;
    tmp18 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head22, _deforest_Cons_tail22)
    };
    _deforest_Cons_head21 = 1;
    _deforest_Cons_tail21 = tmp18;
    tmp19 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head21, _deforest_Cons_tail21)
    };
    _deforest_Cons_head20 = 0;
    _deforest_Cons_tail20 = tmp19;
    tmp20 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head20, _deforest_Cons_tail20)
    };
    _deforest_Cons_head19 = 1;
    _deforest_Cons_tail19 = tmp20;
    tmp21 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head19, _deforest_Cons_tail19)
    };
    _deforest_Cons_head18 = 1;
    _deforest_Cons_tail18 = tmp21;
    tmp22 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head18, _deforest_Cons_tail18)
    };
    _deforest_Cons_head17 = 1;
    _deforest_Cons_tail17 = tmp22;
    tmp23 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head17, _deforest_Cons_tail17)
    };
    _deforest_Cons_head16 = 1;
    _deforest_Cons_tail16 = tmp23;
    tmp24 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head16, _deforest_Cons_tail16)
    };
    _deforest_Cons_head15 = 1;
    _deforest_Cons_tail15 = tmp24;
    tmp25 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head15, _deforest_Cons_tail15)
    };
    _deforest_Cons_head14 = 0;
    _deforest_Cons_tail14 = tmp25;
    tmp26 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head14, _deforest_Cons_tail14)
    };
    _deforest_Cons_head13 = 1;
    _deforest_Cons_tail13 = tmp26;
    tmp27 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head13, _deforest_Cons_tail13)
    };
    _deforest_Cons_head12 = 1;
    _deforest_Cons_tail12 = tmp27;
    tmp28 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head12, _deforest_Cons_tail12)
    };
    _deforest_Cons_head11 = 1;
    _deforest_Cons_tail11 = tmp28;
    tmp29 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head11, _deforest_Cons_tail11)
    };
    _deforest_Cons_head10 = 1;
    _deforest_Cons_tail10 = tmp29;
    tmp30 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head10, _deforest_Cons_tail10)
    };
    _deforest_Cons_head9 = 1;
    _deforest_Cons_tail9 = tmp30;
    tmp31 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = 0;
    _deforest_Cons_tail8 = tmp31;
    tmp32 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = 1;
    _deforest_Cons_tail7 = tmp32;
    tmp33 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = 1;
    _deforest_Cons_tail6 = tmp33;
    tmp34 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = 1;
    _deforest_Cons_tail5 = tmp34;
    tmp35 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = 1;
    _deforest_Cons_tail4 = tmp35;
    tmp36 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = 1;
    _deforest_Cons_tail3 = tmp36;
    tmp37 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = 0;
    _deforest_Cons_tail2 = tmp37;
    tmp38 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 0;
    _deforest_Cons_tail1 = tmp38;
    tmp39 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 0;
    _deforest_Cons_tail = tmp39;
    tmp40 = () => {
      return match_ls_arm_Cons_inst_31_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp41 = lzfy_inst_31_tsni(tmp40);
    tmp42 = NofibPrelude.Cons(tmp41, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(tmp13, tmp42);
    tmp44 = NofibPrelude.Cons(tmp12, tmp43);
    tmp45 = NofibPrelude.Cons(tmp11, tmp44);
    tmp46 = NofibPrelude.Cons(tmp10, tmp45);
    tmp47 = NofibPrelude.Cons(tmp9, tmp46);
    tmp48 = NofibPrelude.Cons(tmp8, tmp47);
    tmp49 = NofibPrelude.Cons(tmp7, tmp48);
    tmp50 = NofibPrelude.Cons(tmp6, tmp49);
    tmp51 = NofibPrelude.Cons(tmp5, tmp50);
    tmp52 = NofibPrelude.Cons(tmp4, tmp51);
    tmp53 = NofibPrelude.Cons(tmp3, tmp52);
    tmp54 = NofibPrelude.Cons(tmp2, tmp53);
    tmp55 = NofibPrelude.Cons(tmp1, tmp54);
    tmp56 = NofibPrelude.Cons(tmp, tmp55);
    this.start = tmp56;
  }
  static last(a_t) {
    let go, param0, param1, a, t;
    go = function go(h, t1) {
      let param01, param11, head, t2;
      if (t1 instanceof NofibPrelude.Nil.class) {
        return h
      } else if (t1 instanceof NofibPrelude.Cons.class) {
        param01 = t1.head;
        param11 = t1.tail;
        head = param01;
        t2 = param11;
        return go(head, t2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    if (a_t instanceof NofibPrelude.Cons.class) {
      param0 = a_t.head;
      param1 = a_t.tail;
      a = param0;
      t = param1;
      return go(a, t)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static copy_lz(n, x) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, tmp1, tmp2;
      scrut = n === 0;
      if (scrut === true) {
        return NofibPrelude.LzNil
      } else {
        tmp1 = n - 1;
        tmp2 = life.copy_lz(tmp1, x);
        return NofibPrelude.LzCons(x, tmp2)
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static append_lz_lz(xs, ys) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let scrut, param0, param1, h, t, tmp1;
      scrut = NofibPrelude.force(xs);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return NofibPrelude.force(ys)
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param0 = scrut.head;
        param1 = scrut.tail;
        h = param0;
        t = param1;
        tmp1 = life.append_lz_lz(t, ys);
        return NofibPrelude.LzCons(h, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static init(ls) {
    let param0, param1, a, t, a1, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param0;
        t = param1;
        tmp = life.init(t);
        return NofibPrelude.Cons(a, tmp)
      }
    } else {
      throw globalThis.Error(ls);
    }
  } 
  static zipWith3(f, xs1, ys1, zs) {
    let param0, param1, hx, tx, param01, param11, hy, ty, param02, param12, hz, tz, tmp, tmp1;
    if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      hx = param0;
      tx = param1;
      if (ys1 instanceof NofibPrelude.Cons.class) {
        param01 = ys1.head;
        param11 = ys1.tail;
        hy = param01;
        ty = param11;
        if (zs instanceof NofibPrelude.Cons.class) {
          param02 = zs.head;
          param12 = zs.tail;
          hz = param02;
          tz = param12;
          tmp = runtime.safeCall(f(hx, hy, hz));
          tmp1 = life.zipWith3(f, tx, ty, tz);
          return NofibPrelude.Cons(tmp, tmp1)
        } else {
          return NofibPrelude.Nil
        }
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static zip3(xs2, ys2, zs1) {
    let param0, param1, hx, tx, param01, param11, hy, ty, param02, param12, hz, tz, arr, tmp;
    if (xs2 instanceof NofibPrelude.Cons.class) {
      param0 = xs2.head;
      param1 = xs2.tail;
      hx = param0;
      tx = param1;
      if (ys2 instanceof NofibPrelude.Cons.class) {
        param01 = ys2.head;
        param11 = ys2.tail;
        hy = param01;
        ty = param11;
        if (zs1 instanceof NofibPrelude.Cons.class) {
          param02 = zs1.head;
          param12 = zs1.tail;
          hz = param02;
          tz = param12;
          arr = [
            hx,
            hy,
            hz
          ];
          tmp = life.zip3(tx, ty, tz);
          return NofibPrelude.Cons(arr, tmp)
        } else {
          return NofibPrelude.Nil
        }
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static lzfy(ls1) {
    let tmp, lambda;
    lambda = (undefined, function () {
      let param0, param1, a, t, tmp1;
      if (ls1 instanceof NofibPrelude.Cons.class) {
        param0 = ls1.head;
        param1 = ls1.tail;
        a = param0;
        t = param1;
        tmp1 = life.lzfy(t);
        return NofibPrelude.LzCons(a, tmp1)
      } else {
        return NofibPrelude.LzNil
      }
    });
    tmp = lambda;
    return NofibPrelude.lazy(tmp)
  } 
  static elt(a_b_c, d_e_f, g_h_i) {
    let first2, first1, first0, a, b, c, first21, first11, first01, d, e, f1, first22, first12, first02, g, h, i, tot, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (globalThis.Array.isArray(a_b_c) && a_b_c.length === 3) {
      first0 = a_b_c[0];
      first1 = a_b_c[1];
      first2 = a_b_c[2];
      a = first0;
      b = first1;
      c = first2;
      if (globalThis.Array.isArray(d_e_f) && d_e_f.length === 3) {
        first01 = d_e_f[0];
        first11 = d_e_f[1];
        first21 = d_e_f[2];
        d = first01;
        e = first11;
        f1 = first21;
        if (globalThis.Array.isArray(g_h_i) && g_h_i.length === 3) {
          first02 = g_h_i[0];
          first12 = g_h_i[1];
          first22 = g_h_i[2];
          g = first02;
          h = first12;
          i = first22;
          tmp = a + b;
          tmp1 = tmp + c;
          tmp2 = tmp1 + d;
          tmp3 = tmp2 + f1;
          tmp4 = tmp3 + g;
          tmp5 = tmp4 + h;
          tmp6 = tmp5 + i;
          tot = tmp6;
          tmp7 = tot < 2;
          tmp8 = tot > 3;
          scrut1 = tmp7 || tmp8;
          if (scrut1 === true) {
            return 0
          } else {
            scrut = tot === 3;
            if (scrut === true) {
              return 1
            } else {
              return e
            }
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
  static shiftr(x1, xs3) {
    let tmp;
    tmp = life.init(xs3);
    return NofibPrelude.Cons(x1, tmp)
  } 
  static shiftl(x2, xs4) {
    let tmp, tmp1;
    tmp = init_inst_0_1_tsni(xs4);
    tmp1 = NofibPrelude.Cons(x2, NofibPrelude.Nil);
    return append_inst_0_6_tsni(tmp, tmp1)
  } 
  static shift(x3, xs5) {
    let tmp, tmp1;
    tmp = shiftr_inst_2_4_tsni(x3, xs5);
    tmp1 = shiftl_inst_2_3_tsni(x3, xs5);
    return zip3_inst_2_11_tsni(tmp, xs5, tmp1)
  } 
  static row(last_this_next) {
    let first2, first1, first0, last, this_, next, tmp, tmp1, tmp2;
    if (globalThis.Array.isArray(last_this_next) && last_this_next.length === 3) {
      first0 = last_this_next[0];
      first1 = last_this_next[1];
      first2 = last_this_next[2];
      last = first0;
      this_ = first1;
      next = first2;
      tmp = shift_inst_7_8_tsni(0, last);
      tmp1 = shift_inst_7_9_tsni(0, this_);
      tmp2 = shift_inst_7_10_tsni(0, next);
      return zipWith3_inst_7_32_tsni(elt_inst_7_33_tsni, tmp, tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static gen(n1, board) {
    let tmp, tmp1;
    tmp = NofibPrelude.replicate(n1, 0);
    tmp1 = shift_inst_12_13_tsni(tmp, board);
    return map_inst_12_34_tsni(row_inst_12_14_tsni, tmp1)
  } 
  static star(x4) {
    let scrut, scrut1;
    scrut1 = x4 === 0;
    if (scrut1 === true) {
      return NofibPrelude.nofibStringToList("  ")
    } else {
      scrut = x4 === 1;
      if (scrut === true) {
        return NofibPrelude.nofibStringToList(" o")
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static glue(s, xs6, ys3) {
    let tmp;
    tmp = NofibPrelude.append(s, ys3);
    return NofibPrelude.append(xs6, tmp)
  } 
  static limit(ls2) {
    let scrut, param0, param1, x5, ys4, scrut1, param01, param11, y, xs7, scrut2, tmp, tmp1, lambda;
    scrut = NofibPrelude.force(ls2);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x5 = param0;
      ys4 = param1;
      scrut1 = NofibPrelude.force(ys4);
      if (scrut1 instanceof NofibPrelude.LzCons.class) {
        param01 = scrut1.head;
        param11 = scrut1.tail;
        y = param01;
        xs7 = param11;
        scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x5, y);
        if (scrut2 === true) {
          return NofibPrelude.Cons(x5, NofibPrelude.Nil)
        } else {
          lambda = (undefined, function () {
            return NofibPrelude.LzCons(y, xs7)
          });
          tmp = NofibPrelude.lazy(lambda);
          tmp1 = life.limit(tmp);
          return NofibPrelude.Cons(x5, tmp1)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static disp(gen_xss) {
    let first1, first0, genn, xss, tmp, lambda;
    if (globalThis.Array.isArray(gen_xss) && gen_xss.length === 2) {
      first0 = gen_xss[0];
      first1 = gen_xss[1];
      genn = first0;
      xss = first1;
      lambda = (undefined, function () {
        let tmp1, tmp2, tmp3, tmp4, lambda1, lambda2;
        tmp1 = NofibPrelude.nofibStringToList("nn");
        lambda1 = (undefined, function (x5) {
          let tmp5;
          tmp5 = map_inst_15_16_tsni(life.star, x5);
          return concat_inst_15_18_tsni(tmp5)
        });
        tmp2 = map_inst_15_17_tsni(lambda1, xss);
        lambda2 = (undefined, function (a, b) {
          let tmp5, _deforest_Cons_head, _deforest_Cons_tail;
          _deforest_Cons_head = "n";
          _deforest_Cons_tail = (ys4) => {
            return ys4
          };
          tmp5 = (ys4) => {
            let param0, param1, x5, xs7, tmp6;
            param0 = _deforest_Cons_head;
            param1 = _deforest_Cons_tail;
            x5 = param0;
            xs7 = param1;
            tmp6 = append_inst_15_35_36_tsni(xs7, ys4);
            return NofibPrelude.Cons(x5, tmp6)
          };
          return glue_inst_15_35_tsni(tmp5, a, b)
        });
        tmp3 = foldr_inst_15_37_tsni(lambda2, NofibPrelude.Nil, tmp2);
        tmp4 = NofibPrelude.append(tmp1, tmp3);
        return NofibPrelude.append(genn, tmp4)
      });
      tmp = lambda;
      return NofibPrelude.lazy(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static generations(sz) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda, lambda1, lambda2;
    tmp = NofibPrelude.enumFrom(0);
    lambda = (undefined, function (i) {
      let tmp11;
      tmp11 = NofibPrelude.stringOfInt(i);
      return NofibPrelude.nofibStringToList(tmp11)
    });
    tmp1 = NofibPrelude.map_lz(lambda, tmp);
    lambda1 = (undefined, function (l) {
      let tmp11, tmp12;
      tmp11 = copy_lz_inst_20_21_tsni(sz, 0);
      tmp12 = append_lz_lz_inst_20_22_tsni(l, tmp11);
      return take_lz_inst_20_39_tsni(sz, tmp12)
    });
    tmp2 = lambda1;
    tmp3 = life.copy_lz(sz, 0);
    tmp4 = life.copy_lz(sz, tmp3);
    tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
    tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
    tmp7 = NofibPrelude.take_lz(sz, tmp6);
    lambda2 = (undefined, function (b) {
      return gen_inst_20_23_tsni(sz, b)
    });
    tmp8 = NofibPrelude.iterate(lambda2, tmp7);
    tmp9 = limit_inst_20_24_tsni(tmp8);
    tmp10 = zip_lz_nl_inst_20_26_tsni(tmp1, tmp9);
    return map_inst_20_40_tsni(disp_inst_20_25_tsni, tmp10)
  } 
  static testLife_nofib(n2) {
    let tmp, tmp1, tmp2;
    tmp = generations_inst_27_28_tsni(n2);
    tmp1 = life.last(tmp);
    tmp2 = NofibPrelude.force(tmp1);
    return NofibPrelude.listLen(tmp2)
  } 
  static main() {
    return testLife_nofib_inst_29_30_tsni(15)
  }
  static toString() { return "life"; }
});
let life = life1; export default life;
