import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lastpiece1, compareIntInt_inst_0_1_tsni, compareIntInt_inst_2_3_tsni, mapLookup_inst_4_5_tsni, compareIntInt_inst_4_5_1_tsni, insert_inst_6_7_tsni, compareIntInt_inst_6_7_3_tsni, check_inst_8_9_tsni, mapLookup_inst_8_9_5_tsni, compareIntInt_inst_8_9_5_1_tsni, extend_inst_8_10_tsni, insert_inst_8_10_7_tsni, compareIntInt_inst_8_10_7_3_tsni, extend_inst_11_12_tsni, insert_inst_11_12_7_tsni, compareIntInt_inst_11_12_7_3_tsni, extend_maybe_inst_11_13_tsni, extend_inst_11_13_10_tsni, insert_inst_11_13_10_7_tsni, compareIntInt_inst_11_13_10_7_3_tsni, check_inst_11_13_9_tsni, mapLookup_inst_11_13_9_5_tsni, compareIntInt_inst_11_13_9_5_1_tsni, check_inst_14_15_tsni, mapLookup_inst_14_15_5_tsni, compareIntInt_inst_14_15_5_1_tsni, pickOne_inst_14_16_tsni, fit_inst_14_17_tsni, extend_maybe_inst_14_17_13_tsni, check_inst_14_17_13_9_tsni, mapLookup_inst_14_17_13_9_5_tsni, compareIntInt_inst_14_17_13_9_5_1_tsni, extend_inst_14_17_13_10_tsni, insert_inst_14_17_13_10_7_tsni, compareIntInt_inst_14_17_13_10_7_3_tsni, extend_inst_14_17_12_tsni, insert_inst_14_17_12_7_tsni, compareIntInt_inst_14_17_12_7_3_tsni, check_inst_18_15_tsni, mapLookup_inst_18_15_5_tsni, compareIntInt_inst_18_15_5_1_tsni, pickOne_inst_18_16_tsni, fit_inst_18_17_tsni, extend_maybe_inst_18_17_13_tsni, check_inst_18_17_13_9_tsni, mapLookup_inst_18_17_13_9_5_tsni, compareIntInt_inst_18_17_13_9_5_1_tsni, extend_inst_18_17_13_10_tsni, insert_inst_18_17_13_10_7_tsni, compareIntInt_inst_18_17_13_10_7_3_tsni, extend_inst_18_17_12_tsni, insert_inst_18_17_12_7_tsni, compareIntInt_inst_18_17_12_7_3_tsni, displayBoard_inst_19_20_tsni, map_inst_19_20_21_tsni, enumFromTo_inst_19_20_22_tsni, map_inst_19_20_23_tsni, enumFromTo_inst_19_20_24_tsni, check_inst_19_20_25_tsni, mapLookup_inst_19_20_25_5_tsni, compareIntInt_inst_19_20_25_5_1_tsni, map_inst_19_26_tsni, check_inst_27_25_tsni, mapLookup_inst_27_25_5_tsni, compareIntInt_inst_27_25_5_1_tsni, enumFromTo_inst_27_24_tsni, map_inst_27_23_tsni, enumFromTo_inst_27_22_tsni, map_inst_27_21_tsni, fit_inst_28_29_tsni, extend_maybe_inst_28_29_13_tsni, check_inst_28_29_13_9_tsni, mapLookup_inst_28_29_13_9_5_tsni, compareIntInt_inst_28_29_13_9_5_1_tsni, extend_inst_28_29_13_10_tsni, insert_inst_28_29_13_10_7_tsni, compareIntInt_inst_28_29_13_10_7_3_tsni, extend_inst_28_29_12_tsni, insert_inst_28_29_12_7_tsni, compareIntInt_inst_28_29_12_7_3_tsni, search_inst_28_30_tsni, tryy_inst_28_30_tsni, fit_inst_28_30_17_tsni, extend_inst_28_30_17_12_tsni, insert_inst_28_30_17_12_7_tsni, compareIntInt_inst_28_30_17_12_7_3_tsni, extend_maybe_inst_28_30_17_13_tsni, extend_inst_28_30_17_13_10_tsni, insert_inst_28_30_17_13_10_7_tsni, compareIntInt_inst_28_30_17_13_10_7_3_tsni, check_inst_28_30_17_13_9_tsni, mapLookup_inst_28_30_17_13_9_5_tsni, compareIntInt_inst_28_30_17_13_9_5_1_tsni, pickOne_inst_28_30_16_tsni, check_inst_28_30_15_tsni, mapLookup_inst_28_30_15_5_tsni, compareIntInt_inst_28_30_15_5_1_tsni, display_inst_28_31_tsni, map_inst_28_31_26_tsni, displayBoard_inst_28_31_20_tsni, check_inst_28_31_20_25_tsni, mapLookup_inst_28_31_20_25_5_tsni, compareIntInt_inst_28_31_20_25_5_1_tsni, enumFromTo_inst_28_31_20_24_tsni, map_inst_28_31_20_23_tsni, enumFromTo_inst_28_31_20_22_tsni, map_inst_28_31_20_21_tsni, testLastPiece_nofib_inst_32_33_tsni, display_inst_32_33_31_tsni, displayBoard_inst_32_33_31_20_tsni, map_inst_32_33_31_20_21_tsni, enumFromTo_inst_32_33_31_20_22_tsni, map_inst_32_33_31_20_23_tsni, enumFromTo_inst_32_33_31_20_24_tsni, check_inst_32_33_31_20_25_tsni, mapLookup_inst_32_33_31_20_25_5_tsni, compareIntInt_inst_32_33_31_20_25_5_1_tsni, map_inst_32_33_31_26_tsni, search_inst_32_33_30_tsni, tryy_inst_32_33_30_tsni, check_inst_32_33_30_15_tsni, mapLookup_inst_32_33_30_15_5_tsni, compareIntInt_inst_32_33_30_15_5_1_tsni, pickOne_inst_32_33_30_16_tsni, fit_inst_32_33_30_17_tsni, extend_maybe_inst_32_33_30_17_13_tsni, check_inst_32_33_30_17_13_9_tsni, mapLookup_inst_32_33_30_17_13_9_5_tsni, compareIntInt_inst_32_33_30_17_13_9_5_1_tsni, extend_inst_32_33_30_17_13_10_tsni, insert_inst_32_33_30_17_13_10_7_tsni, compareIntInt_inst_32_33_30_17_13_10_7_3_tsni, extend_inst_32_33_30_17_12_tsni, insert_inst_32_33_30_17_12_7_tsni, compareIntInt_inst_32_33_30_17_12_7_3_tsni, fit_inst_32_33_29_tsni, extend_inst_32_33_29_12_tsni, insert_inst_32_33_29_12_7_tsni, compareIntInt_inst_32_33_29_12_7_3_tsni, extend_maybe_inst_32_33_29_13_tsni, extend_inst_32_33_29_13_10_tsni, insert_inst_32_33_29_13_10_7_tsni, compareIntInt_inst_32_33_29_13_10_7_3_tsni, check_inst_32_33_29_13_9_tsni, mapLookup_inst_32_33_29_13_9_5_tsni, compareIntInt_inst_32_33_29_13_9_5_1_tsni, printDoc_inst_32_33_34_tsni, append_inst_32_33_34_35_tsni, append_inst_32_33_34_36_tsni, mapMaybe_inst_14_37_tsni, mapMaybe_inst_18_37_tsni, vcat_inst_19_20_38_tsni, foldr_inst_19_20_38_39_tsni, hcat_inst_19_20_40_tsni, foldr_inst_19_20_40_41_tsni, vcat_inst_19_42_tsni, foldr_inst_19_42_39_tsni, vcat_inst_19_43_tsni, foldr_inst_19_43_39_tsni, hcat_inst_27_40_tsni, foldr_inst_27_40_41_tsni, vcat_inst_27_38_tsni, foldr_inst_27_38_39_tsni, addIntInt_inst_28_29_44_tsni, fromSome_inst_28_45_tsni, mapMaybe_inst_28_30_37_tsni, vcat_inst_28_31_43_tsni, foldr_inst_28_31_43_39_tsni, vcat_inst_28_31_42_tsni, foldr_inst_28_31_42_39_tsni, hcat_inst_28_31_20_40_tsni, foldr_inst_28_31_20_40_41_tsni, vcat_inst_28_31_20_38_tsni, foldr_inst_28_31_20_38_39_tsni, vcat_inst_32_33_31_20_38_tsni, foldr_inst_32_33_31_20_38_39_tsni, hcat_inst_32_33_31_20_40_tsni, foldr_inst_32_33_31_20_40_41_tsni, vcat_inst_32_33_31_42_tsni, foldr_inst_32_33_31_42_39_tsni, vcat_inst_32_33_31_43_tsni, foldr_inst_32_33_31_43_39_tsni, mapMaybe_inst_32_33_30_37_tsni, fromSome_inst_32_33_45_tsni, addIntInt_inst_32_33_29_44_tsni, nofibListToString_inst_32_46_tsni, match_scrut_arm_LT_inst_0_tsni, match_scrut_arm_GT_inst_0_tsni, match_scrut_arm_LT_inst_2_tsni, match_scrut_arm_GT_inst_2_tsni, match_scrut_arm_GT_inst_4_5_tsni, match_scrut_arm_LT_inst_4_5_tsni, match_scrut_arm_GT_inst_6_7_tsni, match_scrut_arm_LT_inst_6_7_tsni, match_scrut_arm_LT_inst_8_9_5_tsni, match_scrut_arm_GT_inst_8_9_5_tsni, match_scrut_arm_LT_inst_8_10_7_tsni, match_scrut_arm_GT_inst_8_10_7_tsni, match_scrut_arm_LT_inst_11_12_7_tsni, match_scrut_arm_GT_inst_11_12_7_tsni, match_scrut_arm_GT_inst_11_13_10_7_tsni, match_scrut_arm_LT_inst_11_13_10_7_tsni, match_scrut_arm_GT_inst_11_13_9_5_tsni, match_scrut_arm_LT_inst_11_13_9_5_tsni, match_scrut_arm_None_inst_11_tsni, match_scrut_arm_LT_inst_14_15_5_tsni, match_scrut_arm_GT_inst_14_15_5_tsni, match_scrut_arm_LT_inst_14_17_13_9_5_tsni, match_scrut_arm_GT_inst_14_17_13_9_5_tsni, match_scrut_arm_LT_inst_14_17_13_10_7_tsni, match_scrut_arm_GT_inst_14_17_13_10_7_tsni, match_scrut_arm_None_inst_14_17_tsni, match_scrut_arm_GT_inst_14_17_12_7_tsni, match_scrut_arm_LT_inst_14_17_12_7_tsni, match_scrut_arm_LT_inst_18_15_5_tsni, match_scrut_arm_GT_inst_18_15_5_tsni, match_scrut_arm_LT_inst_18_17_13_9_5_tsni, match_scrut_arm_GT_inst_18_17_13_9_5_tsni, match_scrut_arm_LT_inst_18_17_13_10_7_tsni, match_scrut_arm_GT_inst_18_17_13_10_7_tsni, match_scrut_arm_None_inst_18_17_tsni, match_scrut_arm_GT_inst_18_17_12_7_tsni, match_scrut_arm_LT_inst_18_17_12_7_tsni, match_scrut_arm_GT_inst_19_20_25_5_tsni, match_scrut_arm_LT_inst_19_20_25_5_tsni, match_xs_arm_Cons_inst_19_42_39_tsni, match_scrut_arm_LT_inst_27_25_5_tsni, match_scrut_arm_GT_inst_27_25_5_tsni, match_scrut_arm_LT_inst_28_29_13_9_5_tsni, match_scrut_arm_GT_inst_28_29_13_9_5_tsni, match_scrut_arm_LT_inst_28_29_13_10_7_tsni, match_scrut_arm_GT_inst_28_29_13_10_7_tsni, match_scrut_arm_None_inst_28_29_tsni, match_scrut_arm_GT_inst_28_29_12_7_tsni, match_scrut_arm_LT_inst_28_29_12_7_tsni, match_os_arm_Cons_inst_28_29_tsni, match_orow_ocol_arm_Deforest_Arr_2_inst_28_29_44_tsni, match_scrut_arm_LT_inst_28_30_17_12_7_tsni, match_scrut_arm_GT_inst_28_30_17_12_7_tsni, match_scrut_arm_GT_inst_28_30_17_13_10_7_tsni, match_scrut_arm_LT_inst_28_30_17_13_10_7_tsni, match_scrut_arm_GT_inst_28_30_17_13_9_5_tsni, match_scrut_arm_LT_inst_28_30_17_13_9_5_tsni, match_scrut_arm_None_inst_28_30_17_tsni, match_scrut_arm_GT_inst_28_30_15_5_tsni, match_scrut_arm_LT_inst_28_30_15_5_tsni, match_xs_arm_Cons_inst_28_31_42_39_tsni, match_scrut_arm_LT_inst_28_31_20_25_5_tsni, match_scrut_arm_GT_inst_28_31_20_25_5_tsni, match_scrut_arm_GT_inst_32_33_31_20_25_5_tsni, match_scrut_arm_LT_inst_32_33_31_20_25_5_tsni, match_xs_arm_Cons_inst_32_33_31_42_39_tsni, match_scrut_arm_LT_inst_32_33_30_15_5_tsni, match_scrut_arm_GT_inst_32_33_30_15_5_tsni, match_scrut_arm_LT_inst_32_33_30_17_13_9_5_tsni, match_scrut_arm_GT_inst_32_33_30_17_13_9_5_tsni, match_scrut_arm_LT_inst_32_33_30_17_13_10_7_tsni, match_scrut_arm_GT_inst_32_33_30_17_13_10_7_tsni, match_scrut_arm_None_inst_32_33_30_17_tsni, match_scrut_arm_GT_inst_32_33_30_17_12_7_tsni, match_scrut_arm_LT_inst_32_33_30_17_12_7_tsni, match_scrut_arm_LT_inst_32_33_29_12_7_tsni, match_scrut_arm_GT_inst_32_33_29_12_7_tsni, match_scrut_arm_GT_inst_32_33_29_13_10_7_tsni, match_scrut_arm_LT_inst_32_33_29_13_10_7_tsni, match_scrut_arm_GT_inst_32_33_29_13_9_5_tsni, match_scrut_arm_LT_inst_32_33_29_13_9_5_tsni, match_scrut_arm_None_inst_32_33_29_tsni, match_os_arm_Cons_inst_32_33_29_tsni, match_orow_ocol_arm_Deforest_Arr_2_inst_32_33_29_44_tsni, match_ls_arm_Cons_inst_32_46_tsni;
match_scrut_arm_LT_inst_0_tsni = function match_scrut_arm_LT_inst_0_tsni(k, x, l, r) {
  return lastpiece.mapLookup(k, l)
};
match_scrut_arm_GT_inst_0_tsni = function match_scrut_arm_GT_inst_0_tsni(k, x, l, r) {
  return lastpiece.mapLookup(k, r)
};
match_scrut_arm_LT_inst_2_tsni = function match_scrut_arm_LT_inst_2_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = lastpiece.insert(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_2_tsni = function match_scrut_arm_GT_inst_2_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = lastpiece.insert(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_GT_inst_4_5_tsni = function match_scrut_arm_GT_inst_4_5_tsni(k, x, l, r) {
  return mapLookup_inst_4_5_tsni(k, r)
};
match_scrut_arm_LT_inst_4_5_tsni = function match_scrut_arm_LT_inst_4_5_tsni(k, x, l, r) {
  return mapLookup_inst_4_5_tsni(k, l)
};
match_scrut_arm_GT_inst_6_7_tsni = function match_scrut_arm_GT_inst_6_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_6_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_6_7_tsni = function match_scrut_arm_LT_inst_6_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_6_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_LT_inst_8_9_5_tsni = function match_scrut_arm_LT_inst_8_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_8_9_5_tsni(k, l)
};
match_scrut_arm_GT_inst_8_9_5_tsni = function match_scrut_arm_GT_inst_8_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_8_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_8_10_7_tsni = function match_scrut_arm_LT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_8_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_8_10_7_tsni = function match_scrut_arm_GT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_8_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_11_12_7_tsni = function match_scrut_arm_LT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_11_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_11_12_7_tsni = function match_scrut_arm_GT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_11_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_GT_inst_11_13_10_7_tsni = function match_scrut_arm_GT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_11_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_11_13_10_7_tsni = function match_scrut_arm_LT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_11_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_11_13_9_5_tsni = function match_scrut_arm_GT_inst_11_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_11_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_11_13_9_5_tsni = function match_scrut_arm_LT_inst_11_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_11_13_9_5_tsni(k, l)
};
match_scrut_arm_None_inst_11_tsni = function match_scrut_arm_None_inst_11_tsni(sq, id, os) {
  return NofibPrelude.None
};
match_scrut_arm_LT_inst_14_15_5_tsni = function match_scrut_arm_LT_inst_14_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_14_15_5_tsni(k, l)
};
match_scrut_arm_GT_inst_14_15_5_tsni = function match_scrut_arm_GT_inst_14_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_14_15_5_tsni(k, r)
};
match_scrut_arm_LT_inst_14_17_13_9_5_tsni = function match_scrut_arm_LT_inst_14_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_14_17_13_9_5_tsni(k, l)
};
match_scrut_arm_GT_inst_14_17_13_9_5_tsni = function match_scrut_arm_GT_inst_14_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_14_17_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_14_17_13_10_7_tsni = function match_scrut_arm_LT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_14_17_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_14_17_13_10_7_tsni = function match_scrut_arm_GT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_14_17_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_None_inst_14_17_tsni = function match_scrut_arm_None_inst_14_17_tsni(sq, id, os) {
  return (sq1, se, ps) => {
    return NofibPrelude.None
  }
};
match_scrut_arm_GT_inst_14_17_12_7_tsni = function match_scrut_arm_GT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_14_17_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_14_17_12_7_tsni = function match_scrut_arm_LT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_14_17_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_LT_inst_18_15_5_tsni = function match_scrut_arm_LT_inst_18_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_18_15_5_tsni(k, l)
};
match_scrut_arm_GT_inst_18_15_5_tsni = function match_scrut_arm_GT_inst_18_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_18_15_5_tsni(k, r)
};
match_scrut_arm_LT_inst_18_17_13_9_5_tsni = function match_scrut_arm_LT_inst_18_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_18_17_13_9_5_tsni(k, l)
};
match_scrut_arm_GT_inst_18_17_13_9_5_tsni = function match_scrut_arm_GT_inst_18_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_18_17_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_18_17_13_10_7_tsni = function match_scrut_arm_LT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_18_17_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_18_17_13_10_7_tsni = function match_scrut_arm_GT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_18_17_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_None_inst_18_17_tsni = function match_scrut_arm_None_inst_18_17_tsni(sq, id, os) {
  return (sq1, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_18_37_tsni(f, t)
    }
  }
};
match_scrut_arm_GT_inst_18_17_12_7_tsni = function match_scrut_arm_GT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_18_17_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_18_17_12_7_tsni = function match_scrut_arm_LT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_18_17_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_19_20_25_5_tsni = function match_scrut_arm_GT_inst_19_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_19_20_25_5_tsni(k, r)
};
match_scrut_arm_LT_inst_19_20_25_5_tsni = function match_scrut_arm_LT_inst_19_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_19_20_25_5_tsni(k, l)
};
match_xs_arm_Cons_inst_19_42_39_tsni = function match_xs_arm_Cons_inst_19_42_39_tsni(f, z, _deforest_Cons_head_inst_19_42_39_tsni, _deforest_Cons_tail_inst_19_42_39_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_19_42_39_tsni;
  param1 = _deforest_Cons_tail_inst_19_42_39_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_19_42_39_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_scrut_arm_LT_inst_27_25_5_tsni = function match_scrut_arm_LT_inst_27_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_27_25_5_tsni(k, l)
};
match_scrut_arm_GT_inst_27_25_5_tsni = function match_scrut_arm_GT_inst_27_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_27_25_5_tsni(k, r)
};
match_scrut_arm_LT_inst_28_29_13_9_5_tsni = function match_scrut_arm_LT_inst_28_29_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_29_13_9_5_tsni(k, l)
};
match_scrut_arm_GT_inst_28_29_13_9_5_tsni = function match_scrut_arm_GT_inst_28_29_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_29_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_28_29_13_10_7_tsni = function match_scrut_arm_LT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_29_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_28_29_13_10_7_tsni = function match_scrut_arm_GT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_29_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_None_inst_28_29_tsni = function match_scrut_arm_None_inst_28_29_tsni(sq, id, os) {
  return () => {
    throw new globalThis.Error("match error");
  }
};
match_scrut_arm_GT_inst_28_29_12_7_tsni = function match_scrut_arm_GT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_29_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_28_29_12_7_tsni = function match_scrut_arm_LT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_29_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_os_arm_Cons_inst_28_29_tsni = function match_os_arm_Cons_inst_28_29_tsni(bd, sq, id, _deforest_Cons_head_inst_28_29_tsni, _deforest_Cons_tail_inst_28_29_tsni) {
  let param0, param1, o, os, scrut, tmp;
  param0 = _deforest_Cons_head_inst_28_29_tsni;
  param1 = _deforest_Cons_tail_inst_28_29_tsni;
  o = param0;
  os = param1;
  tmp = addIntInt_inst_28_29_44_tsni(sq, o);
  scrut = extend_maybe_inst_28_29_13_tsni(bd, tmp, id);
  return runtime.safeCall(scrut(sq, id, os))
};
match_orow_ocol_arm_Deforest_Arr_2_inst_28_29_44_tsni = function match_orow_ocol_arm_Deforest_Arr_2_inst_28_29_44_tsni(row, col, _deforest_Deforest_Arr_2_0_inst_28_29_44_tsni, _deforest_Deforest_Arr_2_1_inst_28_29_44_tsni) {
  let first1, first0, orow, ocol, tmp, tmp1, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_28_29_44_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_28_29_44_tsni;
  orow = first0;
  ocol = first1;
  tmp = row + orow;
  tmp1 = col + ocol;
  arr = [
    tmp,
    tmp1
  ];
  return arr
};
match_scrut_arm_LT_inst_28_30_17_12_7_tsni = function match_scrut_arm_LT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_30_17_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_28_30_17_12_7_tsni = function match_scrut_arm_GT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_30_17_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_GT_inst_28_30_17_13_10_7_tsni = function match_scrut_arm_GT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_30_17_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_28_30_17_13_10_7_tsni = function match_scrut_arm_LT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_28_30_17_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_28_30_17_13_9_5_tsni = function match_scrut_arm_GT_inst_28_30_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_30_17_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_28_30_17_13_9_5_tsni = function match_scrut_arm_LT_inst_28_30_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_30_17_13_9_5_tsni(k, l)
};
match_scrut_arm_None_inst_28_30_17_tsni = function match_scrut_arm_None_inst_28_30_17_tsni(sq, id, os) {
  return (sq1, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_28_30_37_tsni(f, t)
    }
  }
};
match_scrut_arm_GT_inst_28_30_15_5_tsni = function match_scrut_arm_GT_inst_28_30_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_30_15_5_tsni(k, r)
};
match_scrut_arm_LT_inst_28_30_15_5_tsni = function match_scrut_arm_LT_inst_28_30_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_30_15_5_tsni(k, l)
};
match_xs_arm_Cons_inst_28_31_42_39_tsni = function match_xs_arm_Cons_inst_28_31_42_39_tsni(f, z, _deforest_Cons_head_inst_28_31_42_39_tsni, _deforest_Cons_tail_inst_28_31_42_39_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_28_31_42_39_tsni;
  param1 = _deforest_Cons_tail_inst_28_31_42_39_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_28_31_42_39_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_scrut_arm_LT_inst_28_31_20_25_5_tsni = function match_scrut_arm_LT_inst_28_31_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_31_20_25_5_tsni(k, l)
};
match_scrut_arm_GT_inst_28_31_20_25_5_tsni = function match_scrut_arm_GT_inst_28_31_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_28_31_20_25_5_tsni(k, r)
};
match_scrut_arm_GT_inst_32_33_31_20_25_5_tsni = function match_scrut_arm_GT_inst_32_33_31_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_31_20_25_5_tsni(k, r)
};
match_scrut_arm_LT_inst_32_33_31_20_25_5_tsni = function match_scrut_arm_LT_inst_32_33_31_20_25_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_31_20_25_5_tsni(k, l)
};
match_xs_arm_Cons_inst_32_33_31_42_39_tsni = function match_xs_arm_Cons_inst_32_33_31_42_39_tsni(f, z, _deforest_Cons_head_inst_32_33_31_42_39_tsni, _deforest_Cons_tail_inst_32_33_31_42_39_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_32_33_31_42_39_tsni;
  param1 = _deforest_Cons_tail_inst_32_33_31_42_39_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_32_33_31_42_39_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_scrut_arm_LT_inst_32_33_30_15_5_tsni = function match_scrut_arm_LT_inst_32_33_30_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_30_15_5_tsni(k, l)
};
match_scrut_arm_GT_inst_32_33_30_15_5_tsni = function match_scrut_arm_GT_inst_32_33_30_15_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_30_15_5_tsni(k, r)
};
match_scrut_arm_LT_inst_32_33_30_17_13_9_5_tsni = function match_scrut_arm_LT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_30_17_13_9_5_tsni(k, l)
};
match_scrut_arm_GT_inst_32_33_30_17_13_9_5_tsni = function match_scrut_arm_GT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_30_17_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_32_33_30_17_13_10_7_tsni = function match_scrut_arm_LT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_30_17_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_32_33_30_17_13_10_7_tsni = function match_scrut_arm_GT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_30_17_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_None_inst_32_33_30_17_tsni = function match_scrut_arm_None_inst_32_33_30_17_tsni(sq, id, os) {
  return (sq1, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_32_33_30_37_tsni(f, t)
    }
  }
};
match_scrut_arm_GT_inst_32_33_30_17_12_7_tsni = function match_scrut_arm_GT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_30_17_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_32_33_30_17_12_7_tsni = function match_scrut_arm_LT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_30_17_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_LT_inst_32_33_29_12_7_tsni = function match_scrut_arm_LT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_29_12_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_32_33_29_12_7_tsni = function match_scrut_arm_GT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_29_12_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_GT_inst_32_33_29_13_10_7_tsni = function match_scrut_arm_GT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_29_13_10_7_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
};
match_scrut_arm_LT_inst_32_33_29_13_10_7_tsni = function match_scrut_arm_LT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_32_33_29_13_10_7_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
};
match_scrut_arm_GT_inst_32_33_29_13_9_5_tsni = function match_scrut_arm_GT_inst_32_33_29_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_29_13_9_5_tsni(k, r)
};
match_scrut_arm_LT_inst_32_33_29_13_9_5_tsni = function match_scrut_arm_LT_inst_32_33_29_13_9_5_tsni(k, x, l, r) {
  return mapLookup_inst_32_33_29_13_9_5_tsni(k, l)
};
match_scrut_arm_None_inst_32_33_29_tsni = function match_scrut_arm_None_inst_32_33_29_tsni(sq, id, os) {
  return () => {
    throw new globalThis.Error("match error");
  }
};
match_os_arm_Cons_inst_32_33_29_tsni = function match_os_arm_Cons_inst_32_33_29_tsni(bd, sq, id, _deforest_Cons_head_inst_32_33_29_tsni, _deforest_Cons_tail_inst_32_33_29_tsni) {
  let param0, param1, o, os, scrut, tmp;
  param0 = _deforest_Cons_head_inst_32_33_29_tsni;
  param1 = _deforest_Cons_tail_inst_32_33_29_tsni;
  o = param0;
  os = param1;
  tmp = addIntInt_inst_32_33_29_44_tsni(sq, o);
  scrut = extend_maybe_inst_32_33_29_13_tsni(bd, tmp, id);
  return runtime.safeCall(scrut(sq, id, os))
};
match_orow_ocol_arm_Deforest_Arr_2_inst_32_33_29_44_tsni = function match_orow_ocol_arm_Deforest_Arr_2_inst_32_33_29_44_tsni(row, col, _deforest_Deforest_Arr_2_0_inst_32_33_29_44_tsni, _deforest_Deforest_Arr_2_1_inst_32_33_29_44_tsni) {
  let first1, first0, orow, ocol, tmp, tmp1, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_32_33_29_44_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_32_33_29_44_tsni;
  orow = first0;
  ocol = first1;
  tmp = row + orow;
  tmp1 = col + ocol;
  arr = [
    tmp,
    tmp1
  ];
  return arr
};
match_ls_arm_Cons_inst_32_46_tsni = function match_ls_arm_Cons_inst_32_46_tsni(_deforest_Cons_head_inst_32_46_tsni, _deforest_Cons_tail_inst_32_46_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_32_46_tsni;
  param1 = _deforest_Cons_tail_inst_32_46_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_32_46_tsni(t);
  return h + tmp
};
compareIntInt_inst_0_1_tsni = function compareIntInt_inst_0_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_0_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_0_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_0_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_0_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                return runtime.safeCall(NofibPrelude.Some(x))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_2_3_tsni = function compareIntInt_inst_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_2_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_2_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_2_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_2_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapLookup_inst_4_5_tsni = function mapLookup_inst_4_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return NofibPrelude.None
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_4_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_4_5_1_tsni = function compareIntInt_inst_4_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_4_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_4_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_4_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_4_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                return runtime.safeCall(NofibPrelude.Some(x))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
insert_inst_6_7_tsni = function insert_inst_6_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_6_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_6_7_3_tsni = function compareIntInt_inst_6_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_6_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_6_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_6_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_6_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_8_9_tsni = function check_inst_8_9_tsni(bd, sq) {
  return mapLookup_inst_8_9_5_tsni(sq, bd)
};
mapLookup_inst_8_9_5_tsni = function mapLookup_inst_8_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp;
      tmp = extend_inst_8_10_tsni(bd, sq, id);
      return runtime.safeCall(NofibPrelude.Some(tmp))
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_8_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_8_9_5_1_tsni = function compareIntInt_inst_8_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_8_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_8_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_8_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_8_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return NofibPrelude.None
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_8_10_tsni = function extend_inst_8_10_tsni(bd, sq, id) {
  return insert_inst_8_10_7_tsni(sq, id, bd)
};
insert_inst_8_10_7_tsni = function insert_inst_8_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_8_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_8_10_7_3_tsni = function compareIntInt_inst_8_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_8_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_11_12_tsni = function extend_inst_11_12_tsni(bd, sq, id) {
  return insert_inst_11_12_7_tsni(sq, id, bd)
};
insert_inst_11_12_7_tsni = function insert_inst_11_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_11_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_11_12_7_3_tsni = function compareIntInt_inst_11_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_11_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_11_13_tsni = function extend_maybe_inst_11_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_11_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_11_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_11_13_10_tsni = function extend_inst_11_13_10_tsni(bd, sq, id) {
  return insert_inst_11_13_10_7_tsni(sq, id, bd)
};
insert_inst_11_13_10_7_tsni = function insert_inst_11_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_11_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_11_13_10_7_3_tsni = function compareIntInt_inst_11_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_11_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_11_13_9_tsni = function check_inst_11_13_9_tsni(bd, sq) {
  return mapLookup_inst_11_13_9_5_tsni(sq, bd)
};
mapLookup_inst_11_13_9_5_tsni = function mapLookup_inst_11_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_11_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return lastpiece.fit(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_11_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_11_13_9_5_1_tsni = function compareIntInt_inst_11_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_11_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_11_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_11_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_11_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_11_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_14_15_tsni = function check_inst_14_15_tsni(bd, sq) {
  return mapLookup_inst_14_15_5_tsni(sq, bd)
};
mapLookup_inst_14_15_5_tsni = function mapLookup_inst_14_15_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let lscomp1, choices, scrut1, ss, tmp, tmp1, lambda;
      lscomp1 = function lscomp1(ls) {
        return runtime.safeCall(ls(lscomp1, sey))
      };
      tmp = pickOne_inst_14_16_tsni(ps);
      tmp1 = lscomp1(tmp);
      choices = tmp1;
      lambda = (undefined, function (x1) {
        return lastpiece.tryy(row_col, sey, bd, x1)
      });
      scrut1 = mapMaybe_inst_14_37_tsni(lambda, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return runtime.safeCall(lastpiece.Choose(ss))
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_14_15_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_14_15_5_1_tsni = function compareIntInt_inst_14_15_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_14_15_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_14_15_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_14_15_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_14_15_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (row_col, sey, bd, ps) => {
                  let param0, tmp, tmp1;
                  param0 = _deforest_Some_x;
                  tmp = lastpiece.next(row_col);
                  tmp1 = lastpiece.flip(sey);
                  return lastpiece.search(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pickOne_inst_14_16_tsni = function pickOne_inst_14_16_tsni(xs) {
  let go, lambda;
  go = function go(f, xs1) {
    let param0, param1, x, xs2, tmp, arr, tmp1, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return (lscomp1, sey) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(f(xs2));
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp;
      arr = (lscomp1, sey, param11) => {
        let lscomp2, first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (first0 instanceof lastpiece.P.class) {
          param01 = first0.i;
          param12 = first0.a;
          param2 = first0.b;
          id = param01;
          ms = param12;
          fs = param2;
          ps = first1;
          ls = param11;
          lscomp2 = function lscomp2(ls2) {
            let param02, param13, os, ls1, arr1, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
            if (ls2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(ls)
            } else if (ls2 instanceof NofibPrelude.Cons.class) {
              param02 = ls2.head;
              param13 = ls2.tail;
              os = param02;
              ls1 = param13;
              arr1 = [
                id,
                os,
                ps
              ];
              tmp3 = lscomp2(ls1);
              _deforest_Cons_head1 = arr1;
              _deforest_Cons_tail1 = tmp3;
              return (f1) => {
                let param03, param14, h, t, scrut, param04, a, tmp4;
                param03 = _deforest_Cons_head1;
                param14 = _deforest_Cons_tail1;
                h = param03;
                t = param14;
                scrut = runtime.safeCall(f1(h));
                if (scrut instanceof NofibPrelude.None.class) {
                  return mapMaybe_inst_14_37_tsni(f1, t)
                } else if (scrut instanceof NofibPrelude.Some.class) {
                  param04 = scrut.x;
                  a = param04;
                  tmp4 = mapMaybe_inst_14_37_tsni(f1, t);
                  return NofibPrelude.Cons(a, tmp4)
                } else {
                  throw new globalThis.Error("match error");
                }
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          if (sey instanceof lastpiece.Male.class) {
            tmp2 = ms;
          } else {
            tmp2 = fs;
          }
          return lscomp2(tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lambda1 = (undefined, function (p) {
        let tmp2;
        tmp2 = runtime.safeCall(f(p));
        return NofibPrelude.Cons(x, tmp2)
      });
      tmp1 = go(lambda1, xs2);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp1;
      return (lscomp1, sey) => {
        let param01, param11;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        return runtime.safeCall(param01(lscomp1, sey, param11))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return x
  });
  return go(lambda, xs)
};
fit_inst_14_17_tsni = function fit_inst_14_17_tsni(bd, sq, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_14_17_12_tsni(bd, sq, id);
    _deforest_Some_x = tmp;
    return (sq1, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq1);
      tmp3 = lastpiece.flip(se);
      tmp4 = lastpiece.search(tmp2, tmp3, bd1, ps);
      return runtime.safeCall(NofibPrelude.Some(tmp4))
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq, o);
    scrut = extend_maybe_inst_14_17_13_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq, id, os1))
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_14_17_13_tsni = function extend_maybe_inst_14_17_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_14_17_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_14_17_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_14_17_13_9_tsni = function check_inst_14_17_13_9_tsni(bd, sq) {
  return mapLookup_inst_14_17_13_9_5_tsni(sq, bd)
};
mapLookup_inst_14_17_13_9_5_tsni = function mapLookup_inst_14_17_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_14_17_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_14_17_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_14_17_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_14_17_13_9_5_1_tsni = function compareIntInt_inst_14_17_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_14_17_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_14_17_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_14_17_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_14_17_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_14_17_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_14_17_13_10_tsni = function extend_inst_14_17_13_10_tsni(bd, sq, id) {
  return insert_inst_14_17_13_10_7_tsni(sq, id, bd)
};
insert_inst_14_17_13_10_7_tsni = function insert_inst_14_17_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_14_17_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_14_17_13_10_7_3_tsni = function compareIntInt_inst_14_17_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_14_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_14_17_12_tsni = function extend_inst_14_17_12_tsni(bd, sq, id) {
  return insert_inst_14_17_12_7_tsni(sq, id, bd)
};
insert_inst_14_17_12_7_tsni = function insert_inst_14_17_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_14_17_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_14_17_12_7_3_tsni = function compareIntInt_inst_14_17_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_14_17_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_18_15_tsni = function check_inst_18_15_tsni(bd, sq) {
  return mapLookup_inst_18_15_5_tsni(sq, bd)
};
mapLookup_inst_18_15_5_tsni = function mapLookup_inst_18_15_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let lscomp1, choices, scrut1, ss, tmp, tmp1, lambda;
      lscomp1 = function lscomp1(ls) {
        return runtime.safeCall(ls(lscomp1, sey))
      };
      tmp = pickOne_inst_18_16_tsni(ps);
      tmp1 = lscomp1(tmp);
      choices = tmp1;
      lambda = (undefined, function (x1) {
        return lastpiece.tryy(row_col, sey, bd, x1)
      });
      scrut1 = mapMaybe_inst_18_37_tsni(lambda, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return runtime.safeCall(lastpiece.Choose(ss))
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_18_15_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_18_15_5_1_tsni = function compareIntInt_inst_18_15_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_18_15_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_18_15_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_18_15_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_18_15_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (row_col, sey, bd, ps) => {
                  let param0, tmp, tmp1;
                  param0 = _deforest_Some_x;
                  tmp = lastpiece.next(row_col);
                  tmp1 = lastpiece.flip(sey);
                  return lastpiece.search(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pickOne_inst_18_16_tsni = function pickOne_inst_18_16_tsni(xs) {
  let go, lambda;
  go = function go(f, xs1) {
    let param0, param1, x, xs2, tmp, arr, tmp1, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return (lscomp1, sey) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(f(xs2));
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp;
      arr = (lscomp1, sey, param11) => {
        let lscomp2, first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (first0 instanceof lastpiece.P.class) {
          param01 = first0.i;
          param12 = first0.a;
          param2 = first0.b;
          id = param01;
          ms = param12;
          fs = param2;
          ps = first1;
          ls = param11;
          lscomp2 = function lscomp2(ls2) {
            let param02, param13, os, ls1, arr1, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
            if (ls2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(ls)
            } else if (ls2 instanceof NofibPrelude.Cons.class) {
              param02 = ls2.head;
              param13 = ls2.tail;
              os = param02;
              ls1 = param13;
              _deforest_Deforest_Arr_3_0 = id;
              _deforest_Deforest_Arr_3_1 = os;
              _deforest_Deforest_Arr_3_2 = ps;
              arr1 = (sq, se, bd) => {
                let first2, first11, first01, id1, os1, ps1, scrut;
                first01 = _deforest_Deforest_Arr_3_0;
                first11 = _deforest_Deforest_Arr_3_1;
                first2 = _deforest_Deforest_Arr_3_2;
                id1 = first01;
                os1 = first11;
                ps1 = first2;
                scrut = fit_inst_18_17_tsni(bd, sq, id1, os1);
                return runtime.safeCall(scrut(sq, se, ps1))
              };
              tmp3 = lscomp2(ls1);
              _deforest_Cons_head1 = arr1;
              _deforest_Cons_tail1 = tmp3;
              return (f1) => {
                let param03, param14, h, t, scrut;
                param03 = _deforest_Cons_head1;
                param14 = _deforest_Cons_tail1;
                h = param03;
                t = param14;
                scrut = runtime.safeCall(f1(h));
                return runtime.safeCall(scrut(f1, t))
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          if (sey instanceof lastpiece.Male.class) {
            tmp2 = ms;
          } else {
            tmp2 = fs;
          }
          return lscomp2(tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lambda1 = (undefined, function (p) {
        let tmp2;
        tmp2 = runtime.safeCall(f(p));
        return NofibPrelude.Cons(x, tmp2)
      });
      tmp1 = go(lambda1, xs2);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp1;
      return (lscomp1, sey) => {
        let param01, param11;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        return runtime.safeCall(param01(lscomp1, sey, param11))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return x
  });
  return go(lambda, xs)
};
fit_inst_18_17_tsni = function fit_inst_18_17_tsni(bd, sq, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_18_17_12_tsni(bd, sq, id);
    _deforest_Some_x = tmp;
    return (sq1, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq1);
      tmp3 = lastpiece.flip(se);
      tmp4 = lastpiece.search(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_18_37_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq, o);
    scrut = extend_maybe_inst_18_17_13_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq, id, os1))
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_18_17_13_tsni = function extend_maybe_inst_18_17_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_18_17_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_18_17_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_18_17_13_9_tsni = function check_inst_18_17_13_9_tsni(bd, sq) {
  return mapLookup_inst_18_17_13_9_5_tsni(sq, bd)
};
mapLookup_inst_18_17_13_9_5_tsni = function mapLookup_inst_18_17_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_18_17_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_18_17_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_18_17_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_18_17_13_9_5_1_tsni = function compareIntInt_inst_18_17_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_18_17_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_18_17_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_18_17_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_18_17_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_18_17_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_18_17_13_10_tsni = function extend_inst_18_17_13_10_tsni(bd, sq, id) {
  return insert_inst_18_17_13_10_7_tsni(sq, id, bd)
};
insert_inst_18_17_13_10_7_tsni = function insert_inst_18_17_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_18_17_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_18_17_13_10_7_3_tsni = function compareIntInt_inst_18_17_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_18_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_18_17_12_tsni = function extend_inst_18_17_12_tsni(bd, sq, id) {
  return insert_inst_18_17_12_7_tsni(sq, id, bd)
};
insert_inst_18_17_12_7_tsni = function insert_inst_18_17_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_18_17_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_18_17_12_7_3_tsni = function compareIntInt_inst_18_17_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_18_17_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
displayBoard_inst_19_20_tsni = function displayBoard_inst_19_20_tsni(bd) {
  let row, sq, tmp, tmp1, tmp2, tmp3;
  sq = function sq(n, col) {
    let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = col;
    arr = (cd) => {
      let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(cd) && cd.length === 2) {
        first01 = cd[0];
        first11 = cd[1];
        c = first01;
        d = first11;
        scrut4 = a > c;
        if (scrut4 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_GT_inst_19_20_25_5_tsni(k, x, l, r)
          }
        } else {
          scrut3 = a < c;
          if (scrut3 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_LT_inst_19_20_25_5_tsni(k, x, l, r)
            }
          } else {
            scrut2 = b > d;
            if (scrut2 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_GT_inst_19_20_25_5_tsni(k, x, l, r)
              }
            } else {
              scrut1 = b < d;
              if (scrut1 === true) {
                return (k, x, l, r) => {
                  return match_scrut_arm_LT_inst_19_20_25_5_tsni(k, x, l, r)
                }
              } else {
                return (k, x, l, r) => {
                  let _deforest_Some_x;
                  _deforest_Some_x = x;
                  return () => {
                    let param0, id;
                    param0 = _deforest_Some_x;
                    id = param0;
                    return lastpiece.char(id)
                  }
                }
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    scrut = check_inst_19_20_25_tsni(bd, arr);
    return runtime.safeCall(scrut())
  };
  row = function row(n) {
    let tmp4, tmp5, lambda;
    tmp4 = enumFromTo_inst_19_20_24_tsni(1, lastpiece.maxCol);
    lambda = (undefined, function (col) {
      return sq(n, col)
    });
    tmp5 = map_inst_19_20_23_tsni(lambda, tmp4);
    return hcat_inst_19_20_40_tsni(tmp5)
  };
  tmp = enumFromTo_inst_19_20_22_tsni(1, lastpiece.maxCol);
  tmp1 = map_inst_19_20_21_tsni(row, tmp);
  tmp2 = vcat_inst_19_20_38_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
map_inst_19_20_21_tsni = function map_inst_19_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_19_20_22_tsni = function enumFromTo_inst_19_20_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_19_20_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_19_20_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_19_20_38_39_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_19_20_23_tsni = function map_inst_19_20_23_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_19_20_24_tsni = function enumFromTo_inst_19_20_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_19_20_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_19_20_23_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_19_20_40_41_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
check_inst_19_20_25_tsni = function check_inst_19_20_25_tsni(bd, sq) {
  return mapLookup_inst_19_20_25_5_tsni(sq, bd)
};
mapLookup_inst_19_20_25_5_tsni = function mapLookup_inst_19_20_25_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece.char(".")
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_19_20_25_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_19_20_25_5_1_tsni = function compareIntInt_inst_19_20_25_5_1_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
map_inst_19_26_tsni = function map_inst_19_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_19_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_19_43_39_tsni(f1, z, t);
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
check_inst_27_25_tsni = function check_inst_27_25_tsni(bd, sq) {
  return mapLookup_inst_27_25_5_tsni(sq, bd)
};
mapLookup_inst_27_25_5_tsni = function mapLookup_inst_27_25_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece.char(".")
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_27_25_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_27_25_5_1_tsni = function compareIntInt_inst_27_25_5_1_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_27_24_tsni = function enumFromTo_inst_27_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_27_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_27_23_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_27_40_41_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_27_23_tsni = function map_inst_27_23_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_27_22_tsni = function enumFromTo_inst_27_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_27_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_27_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_27_38_39_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_27_21_tsni = function map_inst_27_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
fit_inst_28_29_tsni = function fit_inst_28_29_tsni(bd, sq, id, os) {
  return runtime.safeCall(os(bd, sq, id))
};
extend_maybe_inst_28_29_13_tsni = function extend_maybe_inst_28_29_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_28_29_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_28_29_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_28_29_13_9_tsni = function check_inst_28_29_13_9_tsni(bd, sq) {
  return mapLookup_inst_28_29_13_9_5_tsni(sq, bd)
};
mapLookup_inst_28_29_13_9_5_tsni = function mapLookup_inst_28_29_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_28_29_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_28_29_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_29_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_29_13_9_5_1_tsni = function compareIntInt_inst_28_29_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_28_29_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_28_29_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_28_29_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_28_29_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_28_29_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_28_29_13_10_tsni = function extend_inst_28_29_13_10_tsni(bd, sq, id) {
  return insert_inst_28_29_13_10_7_tsni(sq, id, bd)
};
insert_inst_28_29_13_10_7_tsni = function insert_inst_28_29_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_29_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_29_13_10_7_3_tsni = function compareIntInt_inst_28_29_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_28_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_28_29_12_tsni = function extend_inst_28_29_12_tsni(bd, sq, id) {
  return insert_inst_28_29_12_7_tsni(sq, id, bd)
};
insert_inst_28_29_12_7_tsni = function insert_inst_28_29_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_29_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_29_12_7_3_tsni = function compareIntInt_inst_28_29_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_28_29_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
search_inst_28_30_tsni = function search_inst_28_30_tsni(row_col, sey, bd, ps) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, arr, tmp2, _deforest_Soln_b;
  if (globalThis.Array.isArray(row_col) && row_col.length === 2) {
    first0 = row_col[0];
    first1 = row_col[1];
    row = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp3 = NofibPrelude.nofibStringToList("Success!");
        tmp4 = lastpiece.text(tmp3);
        tmp5 = displayBoard_inst_28_31_20_tsni(bd1);
        tmp6 = lastpiece.nest(2, tmp5);
        _deforest_Cons_head1 = tmp6;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp7 = (f, z) => {
          return match_xs_arm_Cons_inst_28_31_42_39_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp4;
        _deforest_Cons_tail = tmp7;
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_28_31_42_39_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_28_31_42_tsni(tmp8)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row + 1;
        arr = [
          tmp1,
          1
        ];
        tmp2 = lastpiece.flip(sey);
        return search_inst_28_30_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_28_30_15_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
tryy_inst_28_30_tsni = function tryy_inst_28_30_tsni(sq, se, bd, id_is_ps) {
  return runtime.safeCall(id_is_ps(sq, se, bd))
};
fit_inst_28_30_17_tsni = function fit_inst_28_30_17_tsni(bd, sq, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_28_30_17_12_tsni(bd, sq, id);
    _deforest_Some_x = tmp;
    return (sq1, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq1);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_28_30_tsni(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_28_30_37_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq, o);
    scrut = extend_maybe_inst_28_30_17_13_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq, id, os1))
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_28_30_17_12_tsni = function extend_inst_28_30_17_12_tsni(bd, sq, id) {
  return insert_inst_28_30_17_12_7_tsni(sq, id, bd)
};
insert_inst_28_30_17_12_7_tsni = function insert_inst_28_30_17_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_30_17_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_30_17_12_7_3_tsni = function compareIntInt_inst_28_30_17_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_28_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_28_30_17_13_tsni = function extend_maybe_inst_28_30_17_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_28_30_17_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_28_30_17_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_28_30_17_13_10_tsni = function extend_inst_28_30_17_13_10_tsni(bd, sq, id) {
  return insert_inst_28_30_17_13_10_7_tsni(sq, id, bd)
};
insert_inst_28_30_17_13_10_7_tsni = function insert_inst_28_30_17_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_30_17_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_30_17_13_10_7_3_tsni = function compareIntInt_inst_28_30_17_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_28_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_28_30_17_13_9_tsni = function check_inst_28_30_17_13_9_tsni(bd, sq) {
  return mapLookup_inst_28_30_17_13_9_5_tsni(sq, bd)
};
mapLookup_inst_28_30_17_13_9_5_tsni = function mapLookup_inst_28_30_17_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_28_30_17_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_28_30_17_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_30_17_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_30_17_13_9_5_1_tsni = function compareIntInt_inst_28_30_17_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_28_30_17_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_28_30_17_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_28_30_17_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_28_30_17_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_28_30_17_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pickOne_inst_28_30_16_tsni = function pickOne_inst_28_30_16_tsni(xs) {
  let go, lambda;
  go = function go(f, xs1) {
    let param0, param1, x, xs2, tmp, arr, tmp1, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return (lscomp1, sey) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(f(xs2));
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp;
      arr = (lscomp1, sey, param11) => {
        let lscomp2, first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (first0 instanceof lastpiece.P.class) {
          param01 = first0.i;
          param12 = first0.a;
          param2 = first0.b;
          id = param01;
          ms = param12;
          fs = param2;
          ps = first1;
          ls = param11;
          lscomp2 = function lscomp2(ls2) {
            let param02, param13, os, ls1, arr1, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
            if (ls2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(ls)
            } else if (ls2 instanceof NofibPrelude.Cons.class) {
              param02 = ls2.head;
              param13 = ls2.tail;
              os = param02;
              ls1 = param13;
              _deforest_Deforest_Arr_3_0 = id;
              _deforest_Deforest_Arr_3_1 = os;
              _deforest_Deforest_Arr_3_2 = ps;
              arr1 = (sq, se, bd) => {
                let first2, first11, first01, id1, os1, ps1, scrut;
                first01 = _deforest_Deforest_Arr_3_0;
                first11 = _deforest_Deforest_Arr_3_1;
                first2 = _deforest_Deforest_Arr_3_2;
                id1 = first01;
                os1 = first11;
                ps1 = first2;
                scrut = fit_inst_28_30_17_tsni(bd, sq, id1, os1);
                return runtime.safeCall(scrut(sq, se, ps1))
              };
              tmp3 = lscomp2(ls1);
              _deforest_Cons_head1 = arr1;
              _deforest_Cons_tail1 = tmp3;
              return (f1) => {
                let param03, param14, h, t, scrut;
                param03 = _deforest_Cons_head1;
                param14 = _deforest_Cons_tail1;
                h = param03;
                t = param14;
                scrut = runtime.safeCall(f1(h));
                return runtime.safeCall(scrut(f1, t))
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          if (sey instanceof lastpiece.Male.class) {
            tmp2 = ms;
          } else {
            tmp2 = fs;
          }
          return lscomp2(tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lambda1 = (undefined, function (p) {
        let tmp2;
        tmp2 = runtime.safeCall(f(p));
        return NofibPrelude.Cons(x, tmp2)
      });
      tmp1 = go(lambda1, xs2);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp1;
      return (lscomp1, sey) => {
        let param01, param11;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        return runtime.safeCall(param01(lscomp1, sey, param11))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return x
  });
  return go(lambda, xs)
};
check_inst_28_30_15_tsni = function check_inst_28_30_15_tsni(bd, sq) {
  return mapLookup_inst_28_30_15_5_tsni(sq, bd)
};
mapLookup_inst_28_30_15_5_tsni = function mapLookup_inst_28_30_15_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let lscomp1, choices, scrut1, ss, tmp, tmp1, lambda, _deforest_Choose_s, _deforest_Fail_b, _deforest_Fail_s;
      lscomp1 = function lscomp1(ls) {
        return runtime.safeCall(ls(lscomp1, sey))
      };
      tmp = pickOne_inst_28_30_16_tsni(ps);
      tmp1 = lscomp1(tmp);
      choices = tmp1;
      lambda = (undefined, function (x1) {
        return tryy_inst_28_30_tsni(row_col, sey, bd, x1)
      });
      scrut1 = mapMaybe_inst_28_30_37_tsni(lambda, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        _deforest_Fail_b = bd;
        _deforest_Fail_s = row_col;
        return () => {
          let param01, param11, bd1, first1, first0, row, col;
          param01 = _deforest_Fail_b;
          param11 = _deforest_Fail_s;
          bd1 = param01;
          if (globalThis.Array.isArray(param11) && param11.length === 2) {
            first0 = param11[0];
            first1 = param11[1];
            row = first0;
            col = first1;
            return lastpiece.Empty
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        ss = scrut1;
        _deforest_Choose_s = ss;
        return () => {
          let param01, ss1, tmp2;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp2 = map_inst_28_31_26_tsni(display_inst_28_31_tsni, ss1);
          return vcat_inst_28_31_43_tsni(tmp2)
        }
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_30_15_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_30_15_5_1_tsni = function compareIntInt_inst_28_30_15_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_28_30_15_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_28_30_15_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_28_30_15_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_28_30_15_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (row_col, sey, bd, ps) => {
                  let param0, tmp, tmp1;
                  param0 = _deforest_Some_x;
                  tmp = lastpiece.next(row_col);
                  tmp1 = lastpiece.flip(sey);
                  return search_inst_28_30_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
display_inst_28_31_tsni = function display_inst_28_31_tsni(s) {
  return runtime.safeCall(s())
};
map_inst_28_31_26_tsni = function map_inst_28_31_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_31_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_28_31_43_39_tsni(f1, z, t);
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
displayBoard_inst_28_31_20_tsni = function displayBoard_inst_28_31_20_tsni(bd) {
  let row, sq, tmp, tmp1, tmp2, tmp3;
  sq = function sq(n, col) {
    let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = col;
    arr = (cd) => {
      let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(cd) && cd.length === 2) {
        first01 = cd[0];
        first11 = cd[1];
        c = first01;
        d = first11;
        scrut4 = a > c;
        if (scrut4 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_GT_inst_28_31_20_25_5_tsni(k, x, l, r)
          }
        } else {
          scrut3 = a < c;
          if (scrut3 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_LT_inst_28_31_20_25_5_tsni(k, x, l, r)
            }
          } else {
            scrut2 = b > d;
            if (scrut2 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_GT_inst_28_31_20_25_5_tsni(k, x, l, r)
              }
            } else {
              scrut1 = b < d;
              if (scrut1 === true) {
                return (k, x, l, r) => {
                  return match_scrut_arm_LT_inst_28_31_20_25_5_tsni(k, x, l, r)
                }
              } else {
                return (k, x, l, r) => {
                  let _deforest_Some_x;
                  _deforest_Some_x = x;
                  return () => {
                    let param0, id;
                    param0 = _deforest_Some_x;
                    id = param0;
                    return lastpiece.char(id)
                  }
                }
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    scrut = check_inst_28_31_20_25_tsni(bd, arr);
    return runtime.safeCall(scrut())
  };
  row = function row(n) {
    let tmp4, tmp5, lambda;
    tmp4 = enumFromTo_inst_28_31_20_24_tsni(1, lastpiece.maxCol);
    lambda = (undefined, function (col) {
      return sq(n, col)
    });
    tmp5 = map_inst_28_31_20_23_tsni(lambda, tmp4);
    return hcat_inst_28_31_20_40_tsni(tmp5)
  };
  tmp = enumFromTo_inst_28_31_20_22_tsni(1, lastpiece.maxCol);
  tmp1 = map_inst_28_31_20_21_tsni(row, tmp);
  tmp2 = vcat_inst_28_31_20_38_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
check_inst_28_31_20_25_tsni = function check_inst_28_31_20_25_tsni(bd, sq) {
  return mapLookup_inst_28_31_20_25_5_tsni(sq, bd)
};
mapLookup_inst_28_31_20_25_5_tsni = function mapLookup_inst_28_31_20_25_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece.char(".")
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_28_31_20_25_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_28_31_20_25_5_1_tsni = function compareIntInt_inst_28_31_20_25_5_1_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_28_31_20_24_tsni = function enumFromTo_inst_28_31_20_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_28_31_20_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_28_31_20_23_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_28_31_20_40_41_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_28_31_20_23_tsni = function map_inst_28_31_20_23_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_28_31_20_22_tsni = function enumFromTo_inst_28_31_20_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_28_31_20_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_28_31_20_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_28_31_20_38_39_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_28_31_20_21_tsni = function map_inst_28_31_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
testLastPiece_nofib_inst_32_33_tsni = function testLastPiece_nofib_inst_32_33_tsni() {
  let initialBoard, solutions, arr, arr1, arr2, tmp, tmp1, tmp2, tmp3, arr3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  arr = [
    1,
    1
  ];
  _deforest_Deforest_Arr_2_01 = 1;
  _deforest_Deforest_Arr_2_11 = 0;
  arr1 = (row, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_32_33_29_44_tsni(row, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 1;
  arr2 = (row, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_32_33_29_44_tsni(row, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Cons_head1 = arr2;
  _deforest_Cons_tail1 = (bd, sq, id) => {
    let tmp6, _deforest_Some_x;
    tmp6 = extend_inst_32_33_29_12_tsni(bd, sq, id);
    _deforest_Some_x = tmp6;
    return () => {
      let param0, x;
      param0 = _deforest_Some_x;
      x = param0;
      return x
    }
  };
  tmp = (bd, sq, id) => {
    return match_os_arm_Cons_inst_32_33_29_tsni(bd, sq, id, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = arr1;
  _deforest_Cons_tail = tmp;
  tmp1 = (bd, sq, id) => {
    return match_os_arm_Cons_inst_32_33_29_tsni(bd, sq, id, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = fit_inst_32_33_29_tsni(lastpiece.emptyBoard, arr, "a", tmp1);
  tmp3 = fromSome_inst_32_33_45_tsni(tmp2);
  initialBoard = tmp3;
  arr3 = [
    1,
    2
  ];
  tmp4 = search_inst_32_33_30_tsni(arr3, lastpiece.Female, initialBoard, lastpiece.initialPieces);
  solutions = tmp4;
  tmp5 = display_inst_32_33_31_tsni(solutions);
  return printDoc_inst_32_33_34_tsni(tmp5)
};
display_inst_32_33_31_tsni = function display_inst_32_33_31_tsni(s) {
  return runtime.safeCall(s())
};
displayBoard_inst_32_33_31_20_tsni = function displayBoard_inst_32_33_31_20_tsni(bd) {
  let row, sq, tmp, tmp1, tmp2, tmp3;
  sq = function sq(n, col) {
    let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = n;
    _deforest_Deforest_Arr_2_1 = col;
    arr = (cd) => {
      let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(cd) && cd.length === 2) {
        first01 = cd[0];
        first11 = cd[1];
        c = first01;
        d = first11;
        scrut4 = a > c;
        if (scrut4 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_GT_inst_32_33_31_20_25_5_tsni(k, x, l, r)
          }
        } else {
          scrut3 = a < c;
          if (scrut3 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_LT_inst_32_33_31_20_25_5_tsni(k, x, l, r)
            }
          } else {
            scrut2 = b > d;
            if (scrut2 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_GT_inst_32_33_31_20_25_5_tsni(k, x, l, r)
              }
            } else {
              scrut1 = b < d;
              if (scrut1 === true) {
                return (k, x, l, r) => {
                  return match_scrut_arm_LT_inst_32_33_31_20_25_5_tsni(k, x, l, r)
                }
              } else {
                return (k, x, l, r) => {
                  let _deforest_Some_x;
                  _deforest_Some_x = x;
                  return () => {
                    let param0, id;
                    param0 = _deforest_Some_x;
                    id = param0;
                    return lastpiece.char(id)
                  }
                }
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    scrut = check_inst_32_33_31_20_25_tsni(bd, arr);
    return runtime.safeCall(scrut())
  };
  row = function row(n) {
    let tmp4, tmp5, lambda;
    tmp4 = enumFromTo_inst_32_33_31_20_24_tsni(1, lastpiece.maxCol);
    lambda = (undefined, function (col) {
      return sq(n, col)
    });
    tmp5 = map_inst_32_33_31_20_23_tsni(lambda, tmp4);
    return hcat_inst_32_33_31_20_40_tsni(tmp5)
  };
  tmp = enumFromTo_inst_32_33_31_20_22_tsni(1, lastpiece.maxCol);
  tmp1 = map_inst_32_33_31_20_21_tsni(row, tmp);
  tmp2 = vcat_inst_32_33_31_20_38_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
map_inst_32_33_31_20_21_tsni = function map_inst_32_33_31_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_32_33_31_20_22_tsni = function enumFromTo_inst_32_33_31_20_22_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_32_33_31_20_22_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_32_33_31_20_21_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_32_33_31_20_38_39_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
map_inst_32_33_31_20_23_tsni = function map_inst_32_33_31_20_23_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_32_33_31_20_24_tsni = function enumFromTo_inst_32_33_31_20_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_32_33_31_20_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_32_33_31_20_23_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_32_33_31_20_40_41_tsni(f1, z, t);
        return runtime.safeCall(f1(h, tmp4))
      }
    }
  } else {
    return (f) => {
      return (f1, z) => {
        return z
      }
    }
  }
};
check_inst_32_33_31_20_25_tsni = function check_inst_32_33_31_20_25_tsni(bd, sq) {
  return mapLookup_inst_32_33_31_20_25_5_tsni(sq, bd)
};
mapLookup_inst_32_33_31_20_25_5_tsni = function mapLookup_inst_32_33_31_20_25_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece.char(".")
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_31_20_25_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_31_20_25_5_1_tsni = function compareIntInt_inst_32_33_31_20_25_5_1_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
map_inst_32_33_31_26_tsni = function map_inst_32_33_31_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_33_31_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_32_33_31_43_39_tsni(f1, z, t);
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
search_inst_32_33_30_tsni = function search_inst_32_33_30_tsni(row_col, sey, bd, ps) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, arr, tmp2, _deforest_Soln_b;
  if (globalThis.Array.isArray(row_col) && row_col.length === 2) {
    first0 = row_col[0];
    first1 = row_col[1];
    row = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp3 = NofibPrelude.nofibStringToList("Success!");
        tmp4 = lastpiece.text(tmp3);
        tmp5 = displayBoard_inst_32_33_31_20_tsni(bd1);
        tmp6 = lastpiece.nest(2, tmp5);
        _deforest_Cons_head1 = tmp6;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp7 = (f, z) => {
          return match_xs_arm_Cons_inst_32_33_31_42_39_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp4;
        _deforest_Cons_tail = tmp7;
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_32_33_31_42_39_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_32_33_31_42_tsni(tmp8)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row + 1;
        arr = [
          tmp1,
          1
        ];
        tmp2 = lastpiece.flip(sey);
        return search_inst_32_33_30_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_32_33_30_15_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
tryy_inst_32_33_30_tsni = function tryy_inst_32_33_30_tsni(sq, se, bd, id_is_ps) {
  return runtime.safeCall(id_is_ps(sq, se, bd))
};
check_inst_32_33_30_15_tsni = function check_inst_32_33_30_15_tsni(bd, sq) {
  return mapLookup_inst_32_33_30_15_5_tsni(sq, bd)
};
mapLookup_inst_32_33_30_15_5_tsni = function mapLookup_inst_32_33_30_15_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let lscomp1, choices, scrut1, ss, tmp, tmp1, lambda, _deforest_Fail_b, _deforest_Fail_s, _deforest_Choose_s;
      lscomp1 = function lscomp1(ls) {
        return runtime.safeCall(ls(lscomp1, sey))
      };
      tmp = pickOne_inst_32_33_30_16_tsni(ps);
      tmp1 = lscomp1(tmp);
      choices = tmp1;
      lambda = (undefined, function (x1) {
        return tryy_inst_32_33_30_tsni(row_col, sey, bd, x1)
      });
      scrut1 = mapMaybe_inst_32_33_30_37_tsni(lambda, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        _deforest_Fail_b = bd;
        _deforest_Fail_s = row_col;
        return () => {
          let param01, param11, bd1, first1, first0, row, col;
          param01 = _deforest_Fail_b;
          param11 = _deforest_Fail_s;
          bd1 = param01;
          if (globalThis.Array.isArray(param11) && param11.length === 2) {
            first0 = param11[0];
            first1 = param11[1];
            row = first0;
            col = first1;
            return lastpiece.Empty
          } else {
            throw new globalThis.Error("match error");
          }
        }
      } else {
        ss = scrut1;
        _deforest_Choose_s = ss;
        return () => {
          let param01, ss1, tmp2;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp2 = map_inst_32_33_31_26_tsni(display_inst_32_33_31_tsni, ss1);
          return vcat_inst_32_33_31_43_tsni(tmp2)
        }
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_30_15_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_30_15_5_1_tsni = function compareIntInt_inst_32_33_30_15_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_32_33_30_15_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_32_33_30_15_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_32_33_30_15_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_32_33_30_15_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (row_col, sey, bd, ps) => {
                  let param0, tmp, tmp1;
                  param0 = _deforest_Some_x;
                  tmp = lastpiece.next(row_col);
                  tmp1 = lastpiece.flip(sey);
                  return search_inst_32_33_30_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
pickOne_inst_32_33_30_16_tsni = function pickOne_inst_32_33_30_16_tsni(xs) {
  let go, lambda;
  go = function go(f, xs1) {
    let param0, param1, x, xs2, tmp, arr, tmp1, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return (lscomp1, sey) => {
        return (f1) => {
          return NofibPrelude.Nil
        }
      }
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs2 = param1;
      tmp = runtime.safeCall(f(xs2));
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp;
      arr = (lscomp1, sey, param11) => {
        let lscomp2, first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        if (first0 instanceof lastpiece.P.class) {
          param01 = first0.i;
          param12 = first0.a;
          param2 = first0.b;
          id = param01;
          ms = param12;
          fs = param2;
          ps = first1;
          ls = param11;
          lscomp2 = function lscomp2(ls2) {
            let param02, param13, os, ls1, arr1, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
            if (ls2 instanceof NofibPrelude.Nil.class) {
              return lscomp1(ls)
            } else if (ls2 instanceof NofibPrelude.Cons.class) {
              param02 = ls2.head;
              param13 = ls2.tail;
              os = param02;
              ls1 = param13;
              _deforest_Deforest_Arr_3_0 = id;
              _deforest_Deforest_Arr_3_1 = os;
              _deforest_Deforest_Arr_3_2 = ps;
              arr1 = (sq, se, bd) => {
                let first2, first11, first01, id1, os1, ps1, scrut;
                first01 = _deforest_Deforest_Arr_3_0;
                first11 = _deforest_Deforest_Arr_3_1;
                first2 = _deforest_Deforest_Arr_3_2;
                id1 = first01;
                os1 = first11;
                ps1 = first2;
                scrut = fit_inst_32_33_30_17_tsni(bd, sq, id1, os1);
                return runtime.safeCall(scrut(sq, se, ps1))
              };
              tmp3 = lscomp2(ls1);
              _deforest_Cons_head1 = arr1;
              _deforest_Cons_tail1 = tmp3;
              return (f1) => {
                let param03, param14, h, t, scrut;
                param03 = _deforest_Cons_head1;
                param14 = _deforest_Cons_tail1;
                h = param03;
                t = param14;
                scrut = runtime.safeCall(f1(h));
                return runtime.safeCall(scrut(f1, t))
              }
            } else {
              throw new globalThis.Error("match error");
            }
          };
          if (sey instanceof lastpiece.Male.class) {
            tmp2 = ms;
          } else {
            tmp2 = fs;
          }
          return lscomp2(tmp2)
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lambda1 = (undefined, function (p) {
        let tmp2;
        tmp2 = runtime.safeCall(f(p));
        return NofibPrelude.Cons(x, tmp2)
      });
      tmp1 = go(lambda1, xs2);
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = tmp1;
      return (lscomp1, sey) => {
        let param01, param11;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        return runtime.safeCall(param01(lscomp1, sey, param11))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  lambda = (undefined, function (x) {
    return x
  });
  return go(lambda, xs)
};
fit_inst_32_33_30_17_tsni = function fit_inst_32_33_30_17_tsni(bd, sq, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_32_33_30_17_12_tsni(bd, sq, id);
    _deforest_Some_x = tmp;
    return (sq1, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq1);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_32_33_30_tsni(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_32_33_30_37_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq, o);
    scrut = extend_maybe_inst_32_33_30_17_13_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq, id, os1))
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_32_33_30_17_13_tsni = function extend_maybe_inst_32_33_30_17_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_32_33_30_17_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_32_33_30_17_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_32_33_30_17_13_9_tsni = function check_inst_32_33_30_17_13_9_tsni(bd, sq) {
  return mapLookup_inst_32_33_30_17_13_9_5_tsni(sq, bd)
};
mapLookup_inst_32_33_30_17_13_9_5_tsni = function mapLookup_inst_32_33_30_17_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_32_33_30_17_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_32_33_30_17_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_30_17_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_30_17_13_9_5_1_tsni = function compareIntInt_inst_32_33_30_17_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_32_33_30_17_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_32_33_30_17_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_32_33_30_17_13_10_tsni = function extend_inst_32_33_30_17_13_10_tsni(bd, sq, id) {
  return insert_inst_32_33_30_17_13_10_7_tsni(sq, id, bd)
};
insert_inst_32_33_30_17_13_10_7_tsni = function insert_inst_32_33_30_17_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_30_17_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_30_17_13_10_7_3_tsni = function compareIntInt_inst_32_33_30_17_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_32_33_30_17_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_32_33_30_17_12_tsni = function extend_inst_32_33_30_17_12_tsni(bd, sq, id) {
  return insert_inst_32_33_30_17_12_7_tsni(sq, id, bd)
};
insert_inst_32_33_30_17_12_7_tsni = function insert_inst_32_33_30_17_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_30_17_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_30_17_12_7_3_tsni = function compareIntInt_inst_32_33_30_17_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_32_33_30_17_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fit_inst_32_33_29_tsni = function fit_inst_32_33_29_tsni(bd, sq, id, os) {
  return runtime.safeCall(os(bd, sq, id))
};
extend_inst_32_33_29_12_tsni = function extend_inst_32_33_29_12_tsni(bd, sq, id) {
  return insert_inst_32_33_29_12_7_tsni(sq, id, bd)
};
insert_inst_32_33_29_12_7_tsni = function insert_inst_32_33_29_12_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_29_12_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_29_12_7_3_tsni = function compareIntInt_inst_32_33_29_12_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_32_33_29_12_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_maybe_inst_32_33_29_13_tsni = function extend_maybe_inst_32_33_29_13_tsni(bd, sq, id) {
  let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (globalThis.Array.isArray(sq) && sq.length === 2) {
    first0 = sq[0];
    first1 = sq[1];
    row = first0;
    col = first1;
    tmp = row > lastpiece.maxRow;
    tmp1 = col < 1;
    tmp2 = tmp || tmp1;
    tmp3 = col > lastpiece.maxCol;
    scrut1 = tmp2 || tmp3;
    if (scrut1 === true) {
      return (sq1, id1, os) => {
        return match_scrut_arm_None_inst_32_33_29_tsni(sq1, id1, os)
      }
    } else {
      scrut = check_inst_32_33_29_13_9_tsni(bd, sq);
      return runtime.safeCall(scrut(bd, sq, id))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
extend_inst_32_33_29_13_10_tsni = function extend_inst_32_33_29_13_10_tsni(bd, sq, id) {
  return insert_inst_32_33_29_13_10_7_tsni(sq, id, bd)
};
insert_inst_32_33_29_13_10_7_tsni = function insert_inst_32_33_29_13_10_7_tsni(kx, x, m) {
  let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return runtime.safeCall(lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip))
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    sz = param0;
    ky = param1;
    y = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_29_13_10_7_3_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_29_13_10_7_3_tsni = function compareIntInt_inst_32_33_29_13_10_7_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_32_33_29_13_10_7_tsni(kx, x, sz, ky, y, l, r)
              }
            } else {
              return (kx, x, sz, ky, y, l, r) => {
                return runtime.safeCall(lastpiece.Bin(sz, kx, x, l, r))
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
check_inst_32_33_29_13_9_tsni = function check_inst_32_33_29_13_9_tsni(bd, sq) {
  return mapLookup_inst_32_33_29_13_9_5_tsni(sq, bd)
};
mapLookup_inst_32_33_29_13_9_5_tsni = function mapLookup_inst_32_33_29_13_9_5_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_32_33_29_13_10_tsni(bd, sq, id);
      _deforest_Some_x = tmp;
      return (sq1, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_32_33_29_tsni(bd1, sq1, id1, os)
      }
    }
  } else if (m instanceof lastpiece.Bin.class) {
    param0 = m.i;
    param1 = m.k;
    param2 = m.v;
    param3 = m.l;
    param4 = m.r;
    kx = param1;
    x = param2;
    l = param3;
    r = param4;
    scrut = compareIntInt_inst_32_33_29_13_9_5_1_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw new globalThis.Error("match error");
  }
};
compareIntInt_inst_32_33_29_13_9_5_1_tsni = function compareIntInt_inst_32_33_29_13_9_5_1_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (globalThis.Array.isArray(ab) && ab.length === 2) {
    first0 = ab[0];
    first1 = ab[1];
    a = first0;
    b = first1;
    if (globalThis.Array.isArray(cd) && cd.length === 2) {
      first01 = cd[0];
      first11 = cd[1];
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_32_33_29_13_9_5_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_32_33_29_13_9_5_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_32_33_29_13_9_5_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_32_33_29_13_9_5_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq1, id1, os) => {
                    return match_scrut_arm_None_inst_32_33_29_tsni(sq1, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
printDoc_inst_32_33_34_tsni = function printDoc_inst_32_33_34_tsni(d) {
  let put, done, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  put = function put(k, next) {
    let param0, s, s1, c, _deforest_Cons_head1, _deforest_Cons_tail1;
    if (k instanceof lastpiece.Chr.class) {
      param0 = k.c;
      c = param0;
      _deforest_Cons_head1 = c;
      _deforest_Cons_tail1 = next;
      return () => {
        return match_ls_arm_Cons_inst_32_46_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
      }
    } else if (k instanceof lastpiece.Str.class) {
      param0 = k.s;
      s1 = param0;
      return append_inst_32_33_34_36_tsni(s1, next)
    } else if (k instanceof lastpiece.PStr.class) {
      param0 = k.s;
      s = param0;
      return append_inst_32_33_34_35_tsni(s, next)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = () => {
    return ""
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_32_46_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  done = tmp;
  return lastpiece.fullRender(lastpiece.ZigZagMode, 200, 1.5, put, done, d)
};
append_inst_32_33_34_35_tsni = function append_inst_32_33_34_35_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_34_35_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_46_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_32_33_34_36_tsni = function append_inst_32_33_34_36_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_33_34_36_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_32_46_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapMaybe_inst_14_37_tsni = function mapMaybe_inst_14_37_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
mapMaybe_inst_18_37_tsni = function mapMaybe_inst_18_37_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
vcat_inst_19_20_38_tsni = function vcat_inst_19_20_38_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_19_20_38_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_19_20_38_39_tsni = function foldr_inst_19_20_38_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hcat_inst_19_20_40_tsni = function hcat_inst_19_20_40_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Beside(p, false, q))
  });
  tmp = foldr_inst_19_20_40_41_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceHoriz(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_19_20_40_41_tsni = function foldr_inst_19_20_40_41_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_19_42_tsni = function vcat_inst_19_42_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_19_42_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_19_42_39_tsni = function foldr_inst_19_42_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_19_43_tsni = function vcat_inst_19_43_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_19_43_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_19_43_39_tsni = function foldr_inst_19_43_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hcat_inst_27_40_tsni = function hcat_inst_27_40_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Beside(p, false, q))
  });
  tmp = foldr_inst_27_40_41_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceHoriz(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_27_40_41_tsni = function foldr_inst_27_40_41_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_27_38_tsni = function vcat_inst_27_38_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_27_38_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_27_38_39_tsni = function foldr_inst_27_38_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
addIntInt_inst_28_29_44_tsni = function addIntInt_inst_28_29_44_tsni(row_col, orow_ocol) {
  let first1, first0, row, col;
  if (globalThis.Array.isArray(row_col) && row_col.length === 2) {
    first0 = row_col[0];
    first1 = row_col[1];
    row = first0;
    col = first1;
    return runtime.safeCall(orow_ocol(row, col))
  } else {
    throw new globalThis.Error("match error");
  }
};
fromSome_inst_28_45_tsni = function fromSome_inst_28_45_tsni(s) {
  return runtime.safeCall(s())
};
mapMaybe_inst_28_30_37_tsni = function mapMaybe_inst_28_30_37_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
vcat_inst_28_31_43_tsni = function vcat_inst_28_31_43_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_28_31_43_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_28_31_43_39_tsni = function foldr_inst_28_31_43_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_28_31_42_tsni = function vcat_inst_28_31_42_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_28_31_42_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_28_31_42_39_tsni = function foldr_inst_28_31_42_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hcat_inst_28_31_20_40_tsni = function hcat_inst_28_31_20_40_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Beside(p, false, q))
  });
  tmp = foldr_inst_28_31_20_40_41_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceHoriz(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_28_31_20_40_41_tsni = function foldr_inst_28_31_20_40_41_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_28_31_20_38_tsni = function vcat_inst_28_31_20_38_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_28_31_20_38_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_28_31_20_38_39_tsni = function foldr_inst_28_31_20_38_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_32_33_31_20_38_tsni = function vcat_inst_32_33_31_20_38_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_32_33_31_20_38_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_32_33_31_20_38_39_tsni = function foldr_inst_32_33_31_20_38_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hcat_inst_32_33_31_20_40_tsni = function hcat_inst_32_33_31_20_40_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Beside(p, false, q))
  });
  tmp = foldr_inst_32_33_31_20_40_41_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceHoriz(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_32_33_31_20_40_41_tsni = function foldr_inst_32_33_31_20_40_41_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_32_33_31_42_tsni = function vcat_inst_32_33_31_42_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_32_33_31_42_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_32_33_31_42_39_tsni = function foldr_inst_32_33_31_42_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
vcat_inst_32_33_31_43_tsni = function vcat_inst_32_33_31_43_tsni(ls) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (p, q) {
    return runtime.safeCall(lastpiece.Above(p, false, q))
  });
  tmp = foldr_inst_32_33_31_43_39_tsni(lambda, lastpiece.Empty, ls);
  tmp1 = lastpiece.reduceVert(tmp);
  return NofibPrelude.snd(tmp1)
};
foldr_inst_32_33_31_43_39_tsni = function foldr_inst_32_33_31_43_39_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
mapMaybe_inst_32_33_30_37_tsni = function mapMaybe_inst_32_33_30_37_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
fromSome_inst_32_33_45_tsni = function fromSome_inst_32_33_45_tsni(s) {
  return runtime.safeCall(s())
};
addIntInt_inst_32_33_29_44_tsni = function addIntInt_inst_32_33_29_44_tsni(row_col, orow_ocol) {
  let first1, first0, row, col;
  if (globalThis.Array.isArray(row_col) && row_col.length === 2) {
    first0 = row_col[0];
    first1 = row_col[1];
    row = first0;
    col = first1;
    return runtime.safeCall(orow_ocol(row, col))
  } else {
    throw new globalThis.Error("match error");
  }
};
nofibListToString_inst_32_46_tsni = function nofibListToString_inst_32_46_tsni(ls) {
  return runtime.safeCall(ls())
};
(class lastpiece {
  static {
    lastpiece1 = lastpiece;
    let arr, arr1, arr2, arr3, tmp, tmp1, tmp2, tmp3, arr4, tmp4, arr5, tmp5, arr6, tmp6, arr7, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr8, arr9, arr10, arr11, tmp14, tmp15, tmp16, tmp17, tmp18, arr12, arr13, arr14, arr15, tmp19, tmp20, tmp21, tmp22, arr16, arr17, arr18, tmp23, arr19, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, arr20, arr21, arr22, arr23, tmp31, tmp32, tmp33, tmp34, arr24, arr25, arr26, tmp35, arr27, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, arr28, arr29, arr30, arr31, tmp43, tmp44, tmp45, tmp46, arr32, arr33, arr34, arr35, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, arr36, arr37, arr38, tmp54, arr39, tmp55, tmp56, tmp57, tmp58, tmp59, arr40, arr41, arr42, arr43, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, arr44, arr45, arr46, arr47, tmp66, tmp67, tmp68, tmp69, arr48, arr49, arr50, tmp70, arr51, tmp71, tmp72, tmp73, tmp74, tmp75, arr52, tmp76, arr53, arr54, arr55, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, arr56, arr57, arr58, arr59, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, arr60, arr61, arr62, arr63, tmp90, tmp91, tmp92, tmp93, arr64, arr65, arr66, tmp94, arr67, tmp95, tmp96, tmp97, tmp98, arr68, arr69, arr70, arr71, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, arr72, arr73, tmp106, arr74, tmp107, arr75, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, arr76, arr77, arr78, arr79, tmp114, tmp115, tmp116, tmp117, arr80, tmp118, arr81, tmp119, arr82, tmp120, arr83, tmp121, tmp122, tmp123, tmp124, arr84, arr85, arr86, arr87, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, arr88, arr89, tmp132, arr90, tmp133, arr91, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, arr92, arr93, arr94, arr95, tmp140, tmp141, tmp142, tmp143, arr96, tmp144, arr97, tmp145, arr98, tmp146, arr99, tmp147, tmp148, tmp149, tmp150, arr100, arr101, arr102, arr103, tmp151, tmp152, tmp153, tmp154, arr104, arr105, tmp155, arr106, tmp156, arr107, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, arr108, arr109, arr110, arr111, tmp166, tmp167, tmp168, tmp169, arr112, tmp170, arr113, tmp171, arr114, tmp172, arr115, tmp173, tmp174, tmp175, tmp176, arr116, arr117, arr118, arr119, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, arr120, arr121, arr122, arr123, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, arr124, arr125, arr126, tmp190, tmp191, tmp192, arr127, tmp193, arr128, tmp194, arr129, tmp195, tmp196, tmp197, tmp198, tmp199, arr130, arr131, arr132, tmp200, tmp201, tmp202, arr133, tmp203, arr134, tmp204, arr135, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, arr136, arr137, arr138, tmp211, tmp212, tmp213, arr139, tmp214, arr140, tmp215, arr141, tmp216, tmp217, tmp218, tmp219, tmp220, arr142, arr143, arr144, tmp221, tmp222, tmp223, tmp224, tmp225, arr145, arr146, arr147, tmp226, tmp227, tmp228, arr148, tmp229, arr149, arr150, tmp230, tmp231, tmp232, tmp233, arr151, arr152, arr153, tmp234, tmp235, tmp236, arr154, arr155, arr156, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, arr157, arr158, arr159, tmp245, tmp246, tmp247, arr160, arr161, tmp248, arr162, tmp249, tmp250, tmp251, arr163, arr164, arr165, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, arr166, arr167, arr168, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279;
    const GT$class = class GT {
      constructor() {}
      toString() { return "GT"; }
    };
    this.GT = new GT$class;
    this.GT.class = GT$class;
    const LT$class = class LT {
      constructor() {}
      toString() { return "LT"; }
    };
    this.LT = new LT$class;
    this.LT.class = LT$class;
    const EQ$class = class EQ {
      constructor() {}
      toString() { return "EQ"; }
    };
    this.EQ = new EQ$class;
    this.EQ.class = EQ$class;
    this.Map = class Map {
      constructor() {}
      toString() { return "Map"; }
    };
    const Tip$class = class Tip extends lastpiece.Map {
      constructor() {
        super();
      }
      toString() { return "Tip"; }
    };
    this.Tip = new Tip$class;
    this.Tip.class = Tip$class;
    this.Bin = function Bin(i1, k1, v1, l1, r1) {
      return new Bin.class(i1, k1, v1, l1, r1);
    };
    this.Bin.class = class Bin extends lastpiece.Map {
      constructor(i, k, v, l, r) {
        super();
        this.i = i;
        this.k = k;
        this.v = v;
        this.l = l;
        this.r = r;
      }
      toString() { return "Bin(" + runtime.render(this.i) + ", " + runtime.render(this.k) + ", " + runtime.render(this.v) + ", " + runtime.render(this.l) + ", " + runtime.render(this.r) + ")"; }
    };
    this.P = function P(i1, a1, b1) {
      return new P.class(i1, a1, b1);
    };
    this.P.class = class P {
      constructor(i, a, b) {
        this.i = i;
        this.a = a;
        this.b = b;
      }
      toString() { return "P(" + runtime.render(this.i) + ", " + runtime.render(this.a) + ", " + runtime.render(this.b) + ")"; }
    };
    this.S = class S {
      constructor() {}
      toString() { return "S"; }
    };
    const Male$class = class Male extends lastpiece.S {
      constructor() {
        super();
      }
      toString() { return "Male"; }
    };
    this.Male = new Male$class;
    this.Male.class = Male$class;
    const Female$class = class Female extends lastpiece.S {
      constructor() {
        super();
      }
      toString() { return "Female"; }
    };
    this.Female = new Female$class;
    this.Female.class = Female$class;
    this.Solution = class Solution {
      constructor() {}
      toString() { return "Solution"; }
    };
    this.Soln = function Soln(b1) {
      return new Soln.class(b1);
    };
    this.Soln.class = class Soln extends lastpiece.Solution {
      constructor(b) {
        super();
        this.b = b;
      }
      toString() { return "Soln(" + runtime.render(this.b) + ")"; }
    };
    this.Choose = function Choose(s1) {
      return new Choose.class(s1);
    };
    this.Choose.class = class Choose extends lastpiece.Solution {
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return "Choose(" + runtime.render(this.s) + ")"; }
    };
    this.Fail = function Fail(b1, s1) {
      return new Fail.class(b1, s1);
    };
    this.Fail.class = class Fail extends lastpiece.Solution {
      constructor(b, s) {
        super();
        this.b = b;
        this.s = s;
      }
      toString() { return "Fail(" + runtime.render(this.b) + ", " + runtime.render(this.s) + ")"; }
    };
    this.maxRow = 8;
    this.maxCol = 8;
    this.emptyBoard = lastpiece.Tip;
    arr = [
      0,
      1
    ];
    arr1 = [
      1,
      1
    ];
    arr2 = [
      2,
      1
    ];
    arr3 = [
      2,
      2
    ];
    tmp = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(arr2, tmp);
    tmp2 = NofibPrelude.Cons(arr1, tmp1);
    tmp3 = NofibPrelude.Cons(arr, tmp2);
    arr4 = [
      1,
      0
    ];
    tmp4 = - 1;
    arr5 = [
      1,
      tmp4
    ];
    tmp5 = - 2;
    arr6 = [
      1,
      tmp5
    ];
    tmp6 = - 2;
    arr7 = [
      2,
      tmp6
    ];
    tmp7 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
    tmp8 = NofibPrelude.Cons(arr6, tmp7);
    tmp9 = NofibPrelude.Cons(arr5, tmp8);
    tmp10 = NofibPrelude.Cons(arr4, tmp9);
    tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    tmp12 = NofibPrelude.Cons(tmp3, tmp11);
    tmp13 = runtime.safeCall(lastpiece.P("n", tmp12, NofibPrelude.Nil));
    this.nPiece = tmp13;
    arr8 = [
      0,
      1
    ];
    arr9 = [
      1,
      0
    ];
    arr10 = [
      2,
      0
    ];
    arr11 = [
      3,
      0
    ];
    tmp14 = NofibPrelude.Cons(arr11, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(arr10, tmp14);
    tmp16 = NofibPrelude.Cons(arr9, tmp15);
    tmp17 = NofibPrelude.Cons(arr8, tmp16);
    tmp18 = NofibPrelude.Cons(tmp17, NofibPrelude.Nil);
    arr12 = [
      0,
      1
    ];
    arr13 = [
      0,
      2
    ];
    arr14 = [
      0,
      3
    ];
    arr15 = [
      1,
      3
    ];
    tmp19 = NofibPrelude.Cons(arr15, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(arr14, tmp19);
    tmp21 = NofibPrelude.Cons(arr13, tmp20);
    tmp22 = NofibPrelude.Cons(arr12, tmp21);
    arr16 = [
      1,
      0
    ];
    arr17 = [
      2,
      0
    ];
    arr18 = [
      3,
      0
    ];
    tmp23 = - 1;
    arr19 = [
      3,
      tmp23
    ];
    tmp24 = NofibPrelude.Cons(arr19, NofibPrelude.Nil);
    tmp25 = NofibPrelude.Cons(arr18, tmp24);
    tmp26 = NofibPrelude.Cons(arr17, tmp25);
    tmp27 = NofibPrelude.Cons(arr16, tmp26);
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(tmp22, tmp28);
    tmp30 = runtime.safeCall(lastpiece.P("m", tmp18, tmp29));
    this.mPiece = tmp30;
    arr20 = [
      0,
      1
    ];
    arr21 = [
      0,
      2
    ];
    arr22 = [
      0,
      3
    ];
    arr23 = [
      1,
      2
    ];
    tmp31 = NofibPrelude.Cons(arr23, NofibPrelude.Nil);
    tmp32 = NofibPrelude.Cons(arr22, tmp31);
    tmp33 = NofibPrelude.Cons(arr21, tmp32);
    tmp34 = NofibPrelude.Cons(arr20, tmp33);
    arr24 = [
      1,
      0
    ];
    arr25 = [
      2,
      0
    ];
    arr26 = [
      3,
      0
    ];
    tmp35 = - 1;
    arr27 = [
      2,
      tmp35
    ];
    tmp36 = NofibPrelude.Cons(arr27, NofibPrelude.Nil);
    tmp37 = NofibPrelude.Cons(arr26, tmp36);
    tmp38 = NofibPrelude.Cons(arr25, tmp37);
    tmp39 = NofibPrelude.Cons(arr24, tmp38);
    tmp40 = NofibPrelude.Cons(tmp39, NofibPrelude.Nil);
    tmp41 = NofibPrelude.Cons(tmp34, tmp40);
    tmp42 = - 1;
    arr28 = [
      1,
      tmp42
    ];
    arr29 = [
      1,
      0
    ];
    arr30 = [
      1,
      1
    ];
    arr31 = [
      1,
      2
    ];
    tmp43 = NofibPrelude.Cons(arr31, NofibPrelude.Nil);
    tmp44 = NofibPrelude.Cons(arr30, tmp43);
    tmp45 = NofibPrelude.Cons(arr29, tmp44);
    tmp46 = NofibPrelude.Cons(arr28, tmp45);
    arr32 = [
      1,
      0
    ];
    arr33 = [
      2,
      0
    ];
    arr34 = [
      3,
      0
    ];
    arr35 = [
      1,
      1
    ];
    tmp47 = NofibPrelude.Cons(arr35, NofibPrelude.Nil);
    tmp48 = NofibPrelude.Cons(arr34, tmp47);
    tmp49 = NofibPrelude.Cons(arr33, tmp48);
    tmp50 = NofibPrelude.Cons(arr32, tmp49);
    tmp51 = NofibPrelude.Cons(tmp50, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(tmp46, tmp51);
    tmp53 = runtime.safeCall(lastpiece.P("l", tmp41, tmp52));
    this.lPiece = tmp53;
    arr36 = [
      0,
      1
    ];
    arr37 = [
      1,
      0
    ];
    arr38 = [
      2,
      0
    ];
    tmp54 = - 1;
    arr39 = [
      2,
      tmp54
    ];
    tmp55 = NofibPrelude.Cons(arr39, NofibPrelude.Nil);
    tmp56 = NofibPrelude.Cons(arr38, tmp55);
    tmp57 = NofibPrelude.Cons(arr37, tmp56);
    tmp58 = NofibPrelude.Cons(arr36, tmp57);
    tmp59 = NofibPrelude.Cons(tmp58, NofibPrelude.Nil);
    arr40 = [
      1,
      0
    ];
    arr41 = [
      1,
      1
    ];
    arr42 = [
      1,
      2
    ];
    arr43 = [
      2,
      2
    ];
    tmp60 = NofibPrelude.Cons(arr43, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(arr42, tmp60);
    tmp62 = NofibPrelude.Cons(arr41, tmp61);
    tmp63 = NofibPrelude.Cons(arr40, tmp62);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = runtime.safeCall(lastpiece.P("k", tmp59, tmp64));
    this.kPiece = tmp65;
    arr44 = [
      0,
      1
    ];
    arr45 = [
      0,
      2
    ];
    arr46 = [
      0,
      3
    ];
    arr47 = [
      1,
      1
    ];
    tmp66 = NofibPrelude.Cons(arr47, NofibPrelude.Nil);
    tmp67 = NofibPrelude.Cons(arr46, tmp66);
    tmp68 = NofibPrelude.Cons(arr45, tmp67);
    tmp69 = NofibPrelude.Cons(arr44, tmp68);
    arr48 = [
      1,
      0
    ];
    arr49 = [
      2,
      0
    ];
    arr50 = [
      3,
      0
    ];
    tmp70 = - 1;
    arr51 = [
      1,
      tmp70
    ];
    tmp71 = NofibPrelude.Cons(arr51, NofibPrelude.Nil);
    tmp72 = NofibPrelude.Cons(arr50, tmp71);
    tmp73 = NofibPrelude.Cons(arr49, tmp72);
    tmp74 = NofibPrelude.Cons(arr48, tmp73);
    tmp75 = - 2;
    arr52 = [
      1,
      tmp75
    ];
    tmp76 = - 1;
    arr53 = [
      1,
      tmp76
    ];
    arr54 = [
      1,
      0
    ];
    arr55 = [
      1,
      1
    ];
    tmp77 = NofibPrelude.Cons(arr55, NofibPrelude.Nil);
    tmp78 = NofibPrelude.Cons(arr54, tmp77);
    tmp79 = NofibPrelude.Cons(arr53, tmp78);
    tmp80 = NofibPrelude.Cons(arr52, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp74, tmp81);
    tmp83 = NofibPrelude.Cons(tmp69, tmp82);
    arr56 = [
      1,
      0
    ];
    arr57 = [
      2,
      0
    ];
    arr58 = [
      3,
      0
    ];
    arr59 = [
      2,
      2
    ];
    tmp84 = NofibPrelude.Cons(arr59, NofibPrelude.Nil);
    tmp85 = NofibPrelude.Cons(arr58, tmp84);
    tmp86 = NofibPrelude.Cons(arr57, tmp85);
    tmp87 = NofibPrelude.Cons(arr56, tmp86);
    tmp88 = NofibPrelude.Cons(tmp87, NofibPrelude.Nil);
    tmp89 = runtime.safeCall(lastpiece.P("j", tmp83, tmp88));
    this.jPiece = tmp89;
    arr60 = [
      1,
      0
    ];
    arr61 = [
      2,
      0
    ];
    arr62 = [
      2,
      1
    ];
    arr63 = [
      3,
      1
    ];
    tmp90 = NofibPrelude.Cons(arr63, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(arr62, tmp90);
    tmp92 = NofibPrelude.Cons(arr61, tmp91);
    tmp93 = NofibPrelude.Cons(arr60, tmp92);
    arr64 = [
      0,
      1
    ];
    arr65 = [
      0,
      2
    ];
    arr66 = [
      1,
      0
    ];
    tmp94 = - 1;
    arr67 = [
      1,
      tmp94
    ];
    tmp95 = NofibPrelude.Cons(arr67, NofibPrelude.Nil);
    tmp96 = NofibPrelude.Cons(arr66, tmp95);
    tmp97 = NofibPrelude.Cons(arr65, tmp96);
    tmp98 = NofibPrelude.Cons(arr64, tmp97);
    arr68 = [
      1,
      0
    ];
    arr69 = [
      1,
      1
    ];
    arr70 = [
      2,
      1
    ];
    arr71 = [
      3,
      1
    ];
    tmp99 = NofibPrelude.Cons(arr71, NofibPrelude.Nil);
    tmp100 = NofibPrelude.Cons(arr70, tmp99);
    tmp101 = NofibPrelude.Cons(arr69, tmp100);
    tmp102 = NofibPrelude.Cons(arr68, tmp101);
    tmp103 = NofibPrelude.Cons(tmp102, NofibPrelude.Nil);
    tmp104 = NofibPrelude.Cons(tmp98, tmp103);
    tmp105 = NofibPrelude.Cons(tmp93, tmp104);
    arr72 = [
      0,
      1
    ];
    arr73 = [
      1,
      0
    ];
    tmp106 = - 1;
    arr74 = [
      1,
      tmp106
    ];
    tmp107 = - 2;
    arr75 = [
      1,
      tmp107
    ];
    tmp108 = NofibPrelude.Cons(arr75, NofibPrelude.Nil);
    tmp109 = NofibPrelude.Cons(arr74, tmp108);
    tmp110 = NofibPrelude.Cons(arr73, tmp109);
    tmp111 = NofibPrelude.Cons(arr72, tmp110);
    tmp112 = NofibPrelude.Cons(tmp111, NofibPrelude.Nil);
    tmp113 = runtime.safeCall(lastpiece.P("i", tmp105, tmp112));
    this.iPiece = tmp113;
    arr76 = [
      0,
      1
    ];
    arr77 = [
      1,
      1
    ];
    arr78 = [
      1,
      2
    ];
    arr79 = [
      2,
      2
    ];
    tmp114 = NofibPrelude.Cons(arr79, NofibPrelude.Nil);
    tmp115 = NofibPrelude.Cons(arr78, tmp114);
    tmp116 = NofibPrelude.Cons(arr77, tmp115);
    tmp117 = NofibPrelude.Cons(arr76, tmp116);
    arr80 = [
      1,
      0
    ];
    tmp118 = - 1;
    arr81 = [
      1,
      tmp118
    ];
    tmp119 = - 1;
    arr82 = [
      2,
      tmp119
    ];
    tmp120 = - 2;
    arr83 = [
      2,
      tmp120
    ];
    tmp121 = NofibPrelude.Cons(arr83, NofibPrelude.Nil);
    tmp122 = NofibPrelude.Cons(arr82, tmp121);
    tmp123 = NofibPrelude.Cons(arr81, tmp122);
    tmp124 = NofibPrelude.Cons(arr80, tmp123);
    arr84 = [
      1,
      0
    ];
    arr85 = [
      1,
      1
    ];
    arr86 = [
      2,
      1
    ];
    arr87 = [
      2,
      2
    ];
    tmp125 = NofibPrelude.Cons(arr87, NofibPrelude.Nil);
    tmp126 = NofibPrelude.Cons(arr86, tmp125);
    tmp127 = NofibPrelude.Cons(arr85, tmp126);
    tmp128 = NofibPrelude.Cons(arr84, tmp127);
    tmp129 = NofibPrelude.Cons(tmp128, NofibPrelude.Nil);
    tmp130 = NofibPrelude.Cons(tmp124, tmp129);
    tmp131 = NofibPrelude.Cons(tmp117, tmp130);
    arr88 = [
      0,
      1
    ];
    arr89 = [
      1,
      0
    ];
    tmp132 = - 1;
    arr90 = [
      1,
      tmp132
    ];
    tmp133 = - 1;
    arr91 = [
      2,
      tmp133
    ];
    tmp134 = NofibPrelude.Cons(arr91, NofibPrelude.Nil);
    tmp135 = NofibPrelude.Cons(arr90, tmp134);
    tmp136 = NofibPrelude.Cons(arr89, tmp135);
    tmp137 = NofibPrelude.Cons(arr88, tmp136);
    tmp138 = NofibPrelude.Cons(tmp137, NofibPrelude.Nil);
    tmp139 = runtime.safeCall(lastpiece.P("h", tmp131, tmp138));
    this.hPiece = tmp139;
    arr92 = [
      0,
      1
    ];
    arr93 = [
      1,
      1
    ];
    arr94 = [
      1,
      2
    ];
    arr95 = [
      1,
      3
    ];
    tmp140 = NofibPrelude.Cons(arr95, NofibPrelude.Nil);
    tmp141 = NofibPrelude.Cons(arr94, tmp140);
    tmp142 = NofibPrelude.Cons(arr93, tmp141);
    tmp143 = NofibPrelude.Cons(arr92, tmp142);
    arr96 = [
      1,
      0
    ];
    tmp144 = - 1;
    arr97 = [
      1,
      tmp144
    ];
    tmp145 = - 1;
    arr98 = [
      2,
      tmp145
    ];
    tmp146 = - 1;
    arr99 = [
      3,
      tmp146
    ];
    tmp147 = NofibPrelude.Cons(arr99, NofibPrelude.Nil);
    tmp148 = NofibPrelude.Cons(arr98, tmp147);
    tmp149 = NofibPrelude.Cons(arr97, tmp148);
    tmp150 = NofibPrelude.Cons(arr96, tmp149);
    arr100 = [
      0,
      1
    ];
    arr101 = [
      0,
      2
    ];
    arr102 = [
      1,
      2
    ];
    arr103 = [
      1,
      3
    ];
    tmp151 = NofibPrelude.Cons(arr103, NofibPrelude.Nil);
    tmp152 = NofibPrelude.Cons(arr102, tmp151);
    tmp153 = NofibPrelude.Cons(arr101, tmp152);
    tmp154 = NofibPrelude.Cons(arr100, tmp153);
    arr104 = [
      1,
      0
    ];
    arr105 = [
      2,
      0
    ];
    tmp155 = - 1;
    arr106 = [
      2,
      tmp155
    ];
    tmp156 = - 1;
    arr107 = [
      3,
      tmp156
    ];
    tmp157 = NofibPrelude.Cons(arr107, NofibPrelude.Nil);
    tmp158 = NofibPrelude.Cons(arr106, tmp157);
    tmp159 = NofibPrelude.Cons(arr105, tmp158);
    tmp160 = NofibPrelude.Cons(arr104, tmp159);
    tmp161 = NofibPrelude.Cons(tmp160, NofibPrelude.Nil);
    tmp162 = NofibPrelude.Cons(tmp154, tmp161);
    tmp163 = NofibPrelude.Cons(tmp150, tmp162);
    tmp164 = NofibPrelude.Cons(tmp143, tmp163);
    tmp165 = runtime.safeCall(lastpiece.P("g", NofibPrelude.Nil, tmp164));
    this.gPiece = tmp165;
    arr108 = [
      0,
      1
    ];
    arr109 = [
      1,
      1
    ];
    arr110 = [
      2,
      1
    ];
    arr111 = [
      3,
      1
    ];
    tmp166 = NofibPrelude.Cons(arr111, NofibPrelude.Nil);
    tmp167 = NofibPrelude.Cons(arr110, tmp166);
    tmp168 = NofibPrelude.Cons(arr109, tmp167);
    tmp169 = NofibPrelude.Cons(arr108, tmp168);
    arr112 = [
      1,
      0
    ];
    tmp170 = - 1;
    arr113 = [
      1,
      tmp170
    ];
    tmp171 = - 2;
    arr114 = [
      1,
      tmp171
    ];
    tmp172 = - 3;
    arr115 = [
      1,
      tmp172
    ];
    tmp173 = NofibPrelude.Cons(arr115, NofibPrelude.Nil);
    tmp174 = NofibPrelude.Cons(arr114, tmp173);
    tmp175 = NofibPrelude.Cons(arr113, tmp174);
    tmp176 = NofibPrelude.Cons(arr112, tmp175);
    arr116 = [
      1,
      0
    ];
    arr117 = [
      2,
      0
    ];
    arr118 = [
      3,
      0
    ];
    arr119 = [
      3,
      1
    ];
    tmp177 = NofibPrelude.Cons(arr119, NofibPrelude.Nil);
    tmp178 = NofibPrelude.Cons(arr118, tmp177);
    tmp179 = NofibPrelude.Cons(arr117, tmp178);
    tmp180 = NofibPrelude.Cons(arr116, tmp179);
    tmp181 = NofibPrelude.Cons(tmp180, NofibPrelude.Nil);
    tmp182 = NofibPrelude.Cons(tmp176, tmp181);
    tmp183 = NofibPrelude.Cons(tmp169, tmp182);
    arr120 = [
      0,
      1
    ];
    arr121 = [
      0,
      2
    ];
    arr122 = [
      0,
      3
    ];
    arr123 = [
      1,
      0
    ];
    tmp184 = NofibPrelude.Cons(arr123, NofibPrelude.Nil);
    tmp185 = NofibPrelude.Cons(arr122, tmp184);
    tmp186 = NofibPrelude.Cons(arr121, tmp185);
    tmp187 = NofibPrelude.Cons(arr120, tmp186);
    tmp188 = NofibPrelude.Cons(tmp187, NofibPrelude.Nil);
    tmp189 = runtime.safeCall(lastpiece.P("f", tmp183, tmp188));
    this.fPiece = tmp189;
    arr124 = [
      0,
      1
    ];
    arr125 = [
      1,
      1
    ];
    arr126 = [
      1,
      2
    ];
    tmp190 = NofibPrelude.Cons(arr126, NofibPrelude.Nil);
    tmp191 = NofibPrelude.Cons(arr125, tmp190);
    tmp192 = NofibPrelude.Cons(arr124, tmp191);
    arr127 = [
      1,
      0
    ];
    tmp193 = - 1;
    arr128 = [
      1,
      tmp193
    ];
    tmp194 = - 1;
    arr129 = [
      2,
      tmp194
    ];
    tmp195 = NofibPrelude.Cons(arr129, NofibPrelude.Nil);
    tmp196 = NofibPrelude.Cons(arr128, tmp195);
    tmp197 = NofibPrelude.Cons(arr127, tmp196);
    tmp198 = NofibPrelude.Cons(tmp197, NofibPrelude.Nil);
    tmp199 = NofibPrelude.Cons(tmp192, tmp198);
    arr130 = [
      0,
      1
    ];
    arr131 = [
      1,
      1
    ];
    arr132 = [
      1,
      2
    ];
    tmp200 = NofibPrelude.Cons(arr132, NofibPrelude.Nil);
    tmp201 = NofibPrelude.Cons(arr131, tmp200);
    tmp202 = NofibPrelude.Cons(arr130, tmp201);
    arr133 = [
      1,
      0
    ];
    tmp203 = - 1;
    arr134 = [
      1,
      tmp203
    ];
    tmp204 = - 1;
    arr135 = [
      2,
      tmp204
    ];
    tmp205 = NofibPrelude.Cons(arr135, NofibPrelude.Nil);
    tmp206 = NofibPrelude.Cons(arr134, tmp205);
    tmp207 = NofibPrelude.Cons(arr133, tmp206);
    tmp208 = NofibPrelude.Cons(tmp207, NofibPrelude.Nil);
    tmp209 = NofibPrelude.Cons(tmp202, tmp208);
    tmp210 = runtime.safeCall(lastpiece.P("e", tmp199, tmp209));
    this.ePiece = tmp210;
    arr136 = [
      0,
      1
    ];
    arr137 = [
      1,
      1
    ];
    arr138 = [
      2,
      1
    ];
    tmp211 = NofibPrelude.Cons(arr138, NofibPrelude.Nil);
    tmp212 = NofibPrelude.Cons(arr137, tmp211);
    tmp213 = NofibPrelude.Cons(arr136, tmp212);
    arr139 = [
      1,
      0
    ];
    tmp214 = - 1;
    arr140 = [
      1,
      tmp214
    ];
    tmp215 = - 2;
    arr141 = [
      1,
      tmp215
    ];
    tmp216 = NofibPrelude.Cons(arr141, NofibPrelude.Nil);
    tmp217 = NofibPrelude.Cons(arr140, tmp216);
    tmp218 = NofibPrelude.Cons(arr139, tmp217);
    tmp219 = NofibPrelude.Cons(tmp218, NofibPrelude.Nil);
    tmp220 = NofibPrelude.Cons(tmp213, tmp219);
    arr142 = [
      1,
      0
    ];
    arr143 = [
      2,
      0
    ];
    arr144 = [
      2,
      1
    ];
    tmp221 = NofibPrelude.Cons(arr144, NofibPrelude.Nil);
    tmp222 = NofibPrelude.Cons(arr143, tmp221);
    tmp223 = NofibPrelude.Cons(arr142, tmp222);
    tmp224 = NofibPrelude.Cons(tmp223, NofibPrelude.Nil);
    tmp225 = runtime.safeCall(lastpiece.P("d", tmp220, tmp224));
    this.dPiece = tmp225;
    arr145 = [
      0,
      1
    ];
    arr146 = [
      0,
      2
    ];
    arr147 = [
      1,
      1
    ];
    tmp226 = NofibPrelude.Cons(arr147, NofibPrelude.Nil);
    tmp227 = NofibPrelude.Cons(arr146, tmp226);
    tmp228 = NofibPrelude.Cons(arr145, tmp227);
    arr148 = [
      1,
      0
    ];
    tmp229 = - 1;
    arr149 = [
      1,
      tmp229
    ];
    arr150 = [
      2,
      0
    ];
    tmp230 = NofibPrelude.Cons(arr150, NofibPrelude.Nil);
    tmp231 = NofibPrelude.Cons(arr149, tmp230);
    tmp232 = NofibPrelude.Cons(arr148, tmp231);
    tmp233 = - 1;
    arr151 = [
      1,
      tmp233
    ];
    arr152 = [
      1,
      0
    ];
    arr153 = [
      1,
      1
    ];
    tmp234 = NofibPrelude.Cons(arr153, NofibPrelude.Nil);
    tmp235 = NofibPrelude.Cons(arr152, tmp234);
    tmp236 = NofibPrelude.Cons(arr151, tmp235);
    arr154 = [
      1,
      0
    ];
    arr155 = [
      1,
      1
    ];
    arr156 = [
      2,
      0
    ];
    tmp237 = NofibPrelude.Cons(arr156, NofibPrelude.Nil);
    tmp238 = NofibPrelude.Cons(arr155, tmp237);
    tmp239 = NofibPrelude.Cons(arr154, tmp238);
    tmp240 = NofibPrelude.Cons(tmp239, NofibPrelude.Nil);
    tmp241 = NofibPrelude.Cons(tmp236, tmp240);
    tmp242 = NofibPrelude.Cons(tmp232, tmp241);
    tmp243 = NofibPrelude.Cons(tmp228, tmp242);
    tmp244 = runtime.safeCall(lastpiece.P("c", NofibPrelude.Nil, tmp243));
    this.cPiece = tmp244;
    arr157 = [
      0,
      1
    ];
    arr158 = [
      0,
      2
    ];
    arr159 = [
      1,
      2
    ];
    tmp245 = NofibPrelude.Cons(arr159, NofibPrelude.Nil);
    tmp246 = NofibPrelude.Cons(arr158, tmp245);
    tmp247 = NofibPrelude.Cons(arr157, tmp246);
    arr160 = [
      1,
      0
    ];
    arr161 = [
      2,
      0
    ];
    tmp248 = - 1;
    arr162 = [
      2,
      tmp248
    ];
    tmp249 = NofibPrelude.Cons(arr162, NofibPrelude.Nil);
    tmp250 = NofibPrelude.Cons(arr161, tmp249);
    tmp251 = NofibPrelude.Cons(arr160, tmp250);
    arr163 = [
      0,
      1
    ];
    arr164 = [
      1,
      0
    ];
    arr165 = [
      2,
      0
    ];
    tmp252 = NofibPrelude.Cons(arr165, NofibPrelude.Nil);
    tmp253 = NofibPrelude.Cons(arr164, tmp252);
    tmp254 = NofibPrelude.Cons(arr163, tmp253);
    tmp255 = NofibPrelude.Cons(tmp254, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(tmp251, tmp255);
    tmp257 = NofibPrelude.Cons(tmp247, tmp256);
    arr166 = [
      1,
      0
    ];
    arr167 = [
      1,
      1
    ];
    arr168 = [
      1,
      2
    ];
    tmp258 = NofibPrelude.Cons(arr168, NofibPrelude.Nil);
    tmp259 = NofibPrelude.Cons(arr167, tmp258);
    tmp260 = NofibPrelude.Cons(arr166, tmp259);
    tmp261 = NofibPrelude.Cons(tmp260, NofibPrelude.Nil);
    tmp262 = runtime.safeCall(lastpiece.P("b", tmp257, tmp261));
    this.bPiece = tmp262;
    tmp263 = NofibPrelude.Cons(lastpiece.nPiece, NofibPrelude.Nil);
    tmp264 = NofibPrelude.Cons(lastpiece.mPiece, tmp263);
    tmp265 = NofibPrelude.Cons(lastpiece.lPiece, tmp264);
    tmp266 = NofibPrelude.Cons(lastpiece.kPiece, tmp265);
    tmp267 = NofibPrelude.Cons(lastpiece.jPiece, tmp266);
    tmp268 = NofibPrelude.Cons(lastpiece.iPiece, tmp267);
    tmp269 = NofibPrelude.Cons(lastpiece.hPiece, tmp268);
    tmp270 = NofibPrelude.Cons(lastpiece.gPiece, tmp269);
    tmp271 = NofibPrelude.Cons(lastpiece.fPiece, tmp270);
    tmp272 = NofibPrelude.Cons(lastpiece.ePiece, tmp271);
    tmp273 = NofibPrelude.Cons(lastpiece.dPiece, tmp272);
    tmp274 = NofibPrelude.Cons(lastpiece.cPiece, tmp273);
    tmp275 = NofibPrelude.Cons(lastpiece.bPiece, tmp274);
    this.initialPieces = tmp275;
    this.Mode = class Mode {
      constructor() {}
      toString() { return "Mode"; }
    };
    const PageMode$class = class PageMode extends lastpiece.Mode {
      constructor() {
        super();
      }
      toString() { return "PageMode"; }
    };
    this.PageMode = new PageMode$class;
    this.PageMode.class = PageMode$class;
    const ZigZagMode$class = class ZigZagMode extends lastpiece.Mode {
      constructor() {
        super();
      }
      toString() { return "ZigZagMode"; }
    };
    this.ZigZagMode = new ZigZagMode$class;
    this.ZigZagMode.class = ZigZagMode$class;
    const LeftMode$class = class LeftMode extends lastpiece.Mode {
      constructor() {
        super();
      }
      toString() { return "LeftMode"; }
    };
    this.LeftMode = new LeftMode$class;
    this.LeftMode.class = LeftMode$class;
    const OneLineMode$class = class OneLineMode extends lastpiece.Mode {
      constructor() {
        super();
      }
      toString() { return "OneLineMode"; }
    };
    this.OneLineMode = new OneLineMode$class;
    this.OneLineMode.class = OneLineMode$class;
    this.TextDetails = class TextDetails {
      constructor() {}
      toString() { return "TextDetails"; }
    };
    this.Chr = function Chr(c1) {
      return new Chr.class(c1);
    };
    this.Chr.class = class Chr extends lastpiece.TextDetails {
      constructor(c) {
        super();
        this.c = c;
      }
      toString() { return "Chr(" + runtime.render(this.c) + ")"; }
    };
    this.Str = function Str(s1) {
      return new Str.class(s1);
    };
    this.Str.class = class Str extends lastpiece.TextDetails {
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return "Str(" + runtime.render(this.s) + ")"; }
    };
    this.PStr = function PStr(s1) {
      return new PStr.class(s1);
    };
    this.PStr.class = class PStr extends lastpiece.TextDetails {
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return "PStr(" + runtime.render(this.s) + ")"; }
    };
    this.AnnotDetails = class AnnotDetails {
      constructor() {}
      toString() { return "AnnotDetails"; }
    };
    const AnnotStart$class = class AnnotStart extends lastpiece.AnnotDetails {
      constructor() {
        super();
      }
      toString() { return "AnnotStart"; }
    };
    this.AnnotStart = new AnnotStart$class;
    this.AnnotStart.class = AnnotStart$class;
    const AnnotEnd$class = class AnnotEnd extends lastpiece.AnnotDetails {
      constructor() {
        super();
      }
      toString() { return "AnnotEnd"; }
    };
    this.AnnotEnd = new AnnotEnd$class;
    this.AnnotEnd.class = AnnotEnd$class;
    this.NoAnnot = function NoAnnot(t1, i1) {
      return new NoAnnot.class(t1, i1);
    };
    this.NoAnnot.class = class NoAnnot extends lastpiece.AnnotDetails {
      constructor(t, i) {
        super();
        this.t = t;
        this.i = i;
      }
      toString() { return "NoAnnot(" + runtime.render(this.t) + ", " + runtime.render(this.i) + ")"; }
    };
    this.IsEmptyy = class IsEmptyy {
      constructor() {}
      toString() { return "IsEmptyy"; }
    };
    const IsEmpty$class = class IsEmpty extends lastpiece.IsEmptyy {
      constructor() {
        super();
      }
      toString() { return "IsEmpty"; }
    };
    this.IsEmpty = new IsEmpty$class;
    this.IsEmpty.class = IsEmpty$class;
    const NotEmpty$class = class NotEmpty extends lastpiece.IsEmptyy {
      constructor() {
        super();
      }
      toString() { return "NotEmpty"; }
    };
    this.NotEmpty = new NotEmpty$class;
    this.NotEmpty.class = NotEmpty$class;
    this.Doc = class Doc {
      constructor() {}
      toString() { return "Doc"; }
    };
    const Empty$class = class Empty extends lastpiece.Doc {
      constructor() {
        super();
      }
      toString() { return "Empty"; }
    };
    this.Empty = new Empty$class;
    this.Empty.class = Empty$class;
    const NoDoc$class = class NoDoc extends lastpiece.Doc {
      constructor() {
        super();
      }
      toString() { return "NoDoc"; }
    };
    this.NoDoc = new NoDoc$class;
    this.NoDoc.class = NoDoc$class;
    this.NilAbove = function NilAbove(d1) {
      return new NilAbove.class(d1);
    };
    this.NilAbove.class = class NilAbove extends lastpiece.Doc {
      constructor(d) {
        super();
        this.d = d;
      }
      toString() { return "NilAbove(" + runtime.render(this.d) + ")"; }
    };
    this.TextBeside = function TextBeside(a1, d1) {
      return new TextBeside.class(a1, d1);
    };
    this.TextBeside.class = class TextBeside extends lastpiece.Doc {
      constructor(a, d) {
        super();
        this.a = a;
        this.d = d;
      }
      toString() { return "TextBeside(" + runtime.render(this.a) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Nest = function Nest(i1, d1) {
      return new Nest.class(i1, d1);
    };
    this.Nest.class = class Nest extends lastpiece.Doc {
      constructor(i, d) {
        super();
        this.i = i;
        this.d = d;
      }
      toString() { return "Nest(" + runtime.render(this.i) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Union = function Union(d11, d21) {
      return new Union.class(d11, d21);
    };
    this.Union.class = class Union extends lastpiece.Doc {
      constructor(d1, d2) {
        super();
        this.d1 = d1;
        this.d2 = d2;
      }
      toString() { return "Union(" + runtime.render(this.d1) + ", " + runtime.render(this.d2) + ")"; }
    };
    this.Beside = function Beside(d11, b1, d21) {
      return new Beside.class(d11, b1, d21);
    };
    this.Beside.class = class Beside extends lastpiece.Doc {
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return "Beside(" + runtime.render(this.d1) + ", " + runtime.render(this.b) + ", " + runtime.render(this.d2) + ")"; }
    };
    this.Above = function Above(d11, b1, d21) {
      return new Above.class(d11, b1, d21);
    };
    this.Above.class = class Above extends lastpiece.Doc {
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return "Above(" + runtime.render(this.d1) + ", " + runtime.render(this.b) + ", " + runtime.render(this.d2) + ")"; }
    };
    tmp276 = runtime.safeCall(lastpiece.Chr(" "));
    tmp277 = lastpiece.NoAnnot(tmp276, 1);
    this.spaceText = tmp277;
    tmp278 = runtime.safeCall(lastpiece.Chr("\n"));
    tmp279 = lastpiece.NoAnnot(tmp278, 1);
    this.nlText = tmp279;
  }
  static isSome(x) {
    if (x instanceof NofibPrelude.Some.class) {
      return true
    } else {
      return false
    }
  } 
  static mapMaybe(f, ls) {
    let param0, param1, h, t, scrut, param01, a, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      scrut = runtime.safeCall(f(h));
      if (scrut instanceof NofibPrelude.None.class) {
        return lastpiece.mapMaybe(f, t)
      } else if (scrut instanceof NofibPrelude.Some.class) {
        param01 = scrut.x;
        a = param01;
        tmp = lastpiece.mapMaybe(f, t);
        return NofibPrelude.Cons(a, tmp)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static compareIntInt(ab, cd) {
    let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
    if (globalThis.Array.isArray(ab) && ab.length === 2) {
      first0 = ab[0];
      first1 = ab[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(cd) && cd.length === 2) {
        first01 = cd[0];
        first11 = cd[1];
        c = first01;
        d = first11;
        scrut3 = a > c;
        if (scrut3 === true) {
          return lastpiece.GT
        } else {
          scrut2 = a < c;
          if (scrut2 === true) {
            return lastpiece.LT
          } else {
            scrut1 = b > d;
            if (scrut1 === true) {
              return lastpiece.GT
            } else {
              scrut = b < d;
              if (scrut === true) {
                return lastpiece.LT
              } else {
                return lastpiece.EQ
              }
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static mapLookup(k, m) {
    let param0, param1, param2, param3, param4, kx, x1, l, r, scrut;
    if (m instanceof lastpiece.Tip.class) {
      return NofibPrelude.None
    } else if (m instanceof lastpiece.Bin.class) {
      param0 = m.i;
      param1 = m.k;
      param2 = m.v;
      param3 = m.l;
      param4 = m.r;
      kx = param1;
      x1 = param2;
      l = param3;
      r = param4;
      scrut = compareIntInt_inst_0_1_tsni(k, kx);
      return runtime.safeCall(scrut(k, x1, l, r))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static size(p) {
    let param0, param1, param2, param3, param4, sz;
    if (p instanceof lastpiece.Tip.class) {
      return 0
    } else if (p instanceof lastpiece.Bin.class) {
      param0 = p.i;
      param1 = p.k;
      param2 = p.v;
      param3 = p.l;
      param4 = p.r;
      sz = param0;
      return sz
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bin(k1, x1, l, r) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lastpiece.size(l);
    tmp1 = lastpiece.size(r);
    tmp2 = tmp + tmp1;
    tmp3 = tmp2 + 1;
    return runtime.safeCall(lastpiece.Bin(tmp3, k1, x1, l, r))
  } 
  static singleL(k11, x11, t1, r1) {
    let param0, param1, param2, param3, param4, k2, x2, t2, t3, tmp;
    if (r1 instanceof lastpiece.Bin.class) {
      param0 = r1.i;
      param1 = r1.k;
      param2 = r1.v;
      param3 = r1.l;
      param4 = r1.r;
      k2 = param1;
      x2 = param2;
      t2 = param3;
      t3 = param4;
      tmp = lastpiece.bin(k11, x11, t1, t2);
      return lastpiece.bin(k2, x2, tmp, t3)
    } else {
      throw globalThis.Error("singleL Tip");
    }
  } 
  static singleR(k12, x12, l1, t3) {
    let param0, param1, param2, param3, param4, k2, x2, t11, t2, tmp;
    if (l1 instanceof lastpiece.Bin.class) {
      param0 = l1.i;
      param1 = l1.k;
      param2 = l1.v;
      param3 = l1.l;
      param4 = l1.r;
      k2 = param1;
      x2 = param2;
      t11 = param3;
      t2 = param4;
      tmp = lastpiece.bin(k12, x12, t2, t3);
      return lastpiece.bin(k2, x2, t11, tmp)
    } else {
      throw globalThis.Error("singleR Tip");
    }
  } 
  static doubleL(k13, x13, t11, r2) {
    let param0, param1, param2, param3, param4, k2, x2, param01, param11, param21, param31, param41, k3, x3, t2, t31, t4, tmp, tmp1;
    if (r2 instanceof lastpiece.Bin.class) {
      param0 = r2.i;
      param1 = r2.k;
      param2 = r2.v;
      param3 = r2.l;
      param4 = r2.r;
      k2 = param1;
      x2 = param2;
      if (param3 instanceof lastpiece.Bin.class) {
        param01 = param3.i;
        param11 = param3.k;
        param21 = param3.v;
        param31 = param3.l;
        param41 = param3.r;
        k3 = param11;
        x3 = param21;
        t2 = param31;
        t31 = param41;
        t4 = param4;
        tmp = lastpiece.bin(k13, x13, t11, t2);
        tmp1 = lastpiece.bin(k2, x2, t31, t4);
        return lastpiece.bin(k3, x3, tmp, tmp1)
      } else {
        throw globalThis.Error("doubleL Tip");
      }
    } else {
      throw globalThis.Error("doubleL Tip");
    }
  } 
  static doubleR(k14, x14, l2, t4) {
    let param0, param1, param2, param3, param4, k2, x2, t12, param01, param11, param21, param31, param41, k3, x3, t2, t31, tmp, tmp1;
    if (l2 instanceof lastpiece.Bin.class) {
      param0 = l2.i;
      param1 = l2.k;
      param2 = l2.v;
      param3 = l2.l;
      param4 = l2.r;
      k2 = param1;
      x2 = param2;
      t12 = param3;
      if (param4 instanceof lastpiece.Bin.class) {
        param01 = param4.i;
        param11 = param4.k;
        param21 = param4.v;
        param31 = param4.l;
        param41 = param4.r;
        k3 = param11;
        x3 = param21;
        t2 = param31;
        t31 = param41;
        tmp = lastpiece.bin(k2, x2, t12, t2);
        tmp1 = lastpiece.bin(k14, x14, t31, t4);
        return lastpiece.bin(k3, x3, tmp, tmp1)
      } else {
        throw globalThis.Error("doubleR Tip");
      }
    } else {
      throw globalThis.Error("doubleR Tip");
    }
  } 
  static rotateL(k2, x2, l3, r3) {
    let param0, param1, param2, param3, param4, ly, ry, scrut, tmp, tmp1, tmp2;
    if (r3 instanceof lastpiece.Bin.class) {
      param0 = r3.i;
      param1 = r3.k;
      param2 = r3.v;
      param3 = r3.l;
      param4 = r3.r;
      ly = param3;
      ry = param4;
      tmp = lastpiece.size(ly);
      tmp1 = lastpiece.size(ry);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleL(k2, x2, l3, r3)
      } else {
        return lastpiece.doubleL(k2, x2, l3, r3)
      }
    } else {
      throw globalThis.Error("rotateL Tip");
    }
  } 
  static rotateR(k3, x3, l4, r4) {
    let param0, param1, param2, param3, param4, ly, ry, scrut, tmp, tmp1, tmp2;
    if (l4 instanceof lastpiece.Bin.class) {
      param0 = l4.i;
      param1 = l4.k;
      param2 = l4.v;
      param3 = l4.l;
      param4 = l4.r;
      ly = param3;
      ry = param4;
      tmp = lastpiece.size(ry);
      tmp1 = lastpiece.size(ly);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleR(k3, x3, l4, r4)
      } else {
        return lastpiece.doubleR(k3, x3, l4, r4)
      }
    } else {
      throw globalThis.Error("rotateR Tip");
    }
  } 
  static balance(k4, x4, l5, r5) {
    let sizeL, sizeR, sizeX, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = lastpiece.size(l5);
    sizeL = tmp;
    tmp1 = lastpiece.size(r5);
    sizeR = tmp1;
    tmp2 = sizeL + sizeR;
    tmp3 = tmp2 + 1;
    sizeX = tmp3;
    tmp4 = sizeL + sizeR;
    scrut2 = tmp4 <= 1;
    if (scrut2 === true) {
      return runtime.safeCall(lastpiece.Bin(sizeX, k4, x4, l5, r5))
    } else {
      tmp5 = 4 * sizeL;
      scrut1 = sizeR >= tmp5;
      if (scrut1 === true) {
        return lastpiece.rotateL(k4, x4, l5, r5)
      } else {
        tmp6 = 4 * sizeR;
        scrut = sizeL >= tmp6;
        if (scrut === true) {
          return lastpiece.rotateR(k4, x4, l5, r5)
        } else {
          return runtime.safeCall(lastpiece.Bin(sizeX, k4, x4, l5, r5))
        }
      }
    }
  } 
  static insert(kx, x5, m1) {
    let param0, param1, param2, param3, param4, sz, ky, y, l6, r6, scrut;
    if (m1 instanceof lastpiece.Tip.class) {
      return runtime.safeCall(lastpiece.Bin(1, kx, x5, lastpiece.Tip, lastpiece.Tip))
    } else if (m1 instanceof lastpiece.Bin.class) {
      param0 = m1.i;
      param1 = m1.k;
      param2 = m1.v;
      param3 = m1.l;
      param4 = m1.r;
      sz = param0;
      ky = param1;
      y = param2;
      l6 = param3;
      r6 = param4;
      scrut = compareIntInt_inst_2_3_tsni(kx, ky);
      return runtime.safeCall(scrut(kx, x5, sz, ky, y, l6, r6))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static indent(n) {
    let scrut, tmp, tmp1;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      tmp = n - 1;
      tmp1 = lastpiece.indent(tmp);
      return NofibPrelude.Cons(" ", tmp1)
    }
  } 
  static flip(s) {
    if (s instanceof lastpiece.Male.class) {
      return lastpiece.Female
    } else if (s instanceof lastpiece.Female.class) {
      return lastpiece.Male
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addIntInt(row_col, orow_ocol) {
    let first1, first0, row, col, first11, first01, orow, ocol, tmp, tmp1, arr;
    if (globalThis.Array.isArray(row_col) && row_col.length === 2) {
      first0 = row_col[0];
      first1 = row_col[1];
      row = first0;
      col = first1;
      if (globalThis.Array.isArray(orow_ocol) && orow_ocol.length === 2) {
        first01 = orow_ocol[0];
        first11 = orow_ocol[1];
        orow = first01;
        ocol = first11;
        tmp = row + orow;
        tmp1 = col + ocol;
        arr = [
          tmp,
          tmp1
        ];
        return arr
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static next(row_col1) {
    let first1, first0, row, col, tmp, arr;
    if (globalThis.Array.isArray(row_col1) && row_col1.length === 2) {
      first0 = row_col1[0];
      first1 = row_col1[1];
      row = first0;
      col = first1;
      tmp = col + 1;
      arr = [
        row,
        tmp
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static check(bd, sq) {
    return mapLookup_inst_4_5_tsni(sq, bd)
  } 
  static extend(bd1, sq1, id) {
    return insert_inst_6_7_tsni(sq1, id, bd1)
  } 
  static extend_maybe(bd2, sq2, id1) {
    let first1, first0, row, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(sq2) && sq2.length === 2) {
      first0 = sq2[0];
      first1 = sq2[1];
      row = first0;
      col = first1;
      tmp = row > lastpiece.maxRow;
      tmp1 = col < 1;
      tmp2 = tmp || tmp1;
      tmp3 = col > lastpiece.maxCol;
      scrut1 = tmp2 || tmp3;
      if (scrut1 === true) {
        return NofibPrelude.None
      } else {
        scrut = check_inst_8_9_tsni(bd2, sq2);
        return runtime.safeCall(scrut(bd2, sq2, id1))
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pickOne(xs) {
    let go, lambda;
    go = function go(f1, xs1) {
      let param0, param1, x6, xs2, tmp, arr, tmp1, lambda1;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (xs1 instanceof NofibPrelude.Cons.class) {
        param0 = xs1.head;
        param1 = xs1.tail;
        x6 = param0;
        xs2 = param1;
        tmp = runtime.safeCall(f1(xs2));
        arr = [
          x6,
          tmp
        ];
        lambda1 = (undefined, function (p1) {
          let tmp2;
          tmp2 = runtime.safeCall(f1(p1));
          return NofibPrelude.Cons(x6, tmp2)
        });
        tmp1 = go(lambda1, xs2);
        return NofibPrelude.Cons(arr, tmp1)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lambda = (undefined, function (x6) {
      return x6
    });
    return go(lambda, xs)
  } 
  static fit(bd3, sq3, id2, os) {
    let param0, param1, o, os1, scrut, tmp, tmp1;
    if (os instanceof NofibPrelude.Nil.class) {
      tmp = extend_inst_11_12_tsni(bd3, sq3, id2);
      return runtime.safeCall(NofibPrelude.Some(tmp))
    } else if (os instanceof NofibPrelude.Cons.class) {
      param0 = os.head;
      param1 = os.tail;
      o = param0;
      os1 = param1;
      tmp1 = lastpiece.addIntInt(sq3, o);
      scrut = extend_maybe_inst_11_13_tsni(bd3, tmp1, id2);
      return runtime.safeCall(scrut(sq3, id2, os1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tryy(sq4, se, bd4, id_is_ps) {
    let first2, first1, first0, id3, os1, ps, scrut;
    if (globalThis.Array.isArray(id_is_ps) && id_is_ps.length === 3) {
      first0 = id_is_ps[0];
      first1 = id_is_ps[1];
      first2 = id_is_ps[2];
      id3 = first0;
      os1 = first1;
      ps = first2;
      scrut = fit_inst_14_17_tsni(bd4, sq4, id3, os1);
      return runtime.safeCall(scrut(sq4, se, ps))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static search(row_col2, sey, bd5, ps) {
    let first1, first0, row, col, scrut, scrut1, tmp, tmp1, arr, tmp2;
    if (globalThis.Array.isArray(row_col2) && row_col2.length === 2) {
      first0 = row_col2[0];
      first1 = row_col2[1];
      row = first0;
      col = first1;
      if (ps instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(lastpiece.Soln(bd5))
      } else {
        tmp = lastpiece.maxCol + 1;
        scrut1 = col === tmp;
        if (scrut1 === true) {
          tmp1 = row + 1;
          arr = [
            tmp1,
            1
          ];
          tmp2 = lastpiece.flip(sey);
          return lastpiece.search(arr, tmp2, bd5, ps)
        } else {
          scrut = check_inst_18_15_tsni(bd5, row_col2);
          return runtime.safeCall(scrut(row_col2, sey, bd5, ps))
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static annotSize(p1) {
    let param0, param1, l6;
    if (p1 instanceof lastpiece.NoAnnot.class) {
      param0 = p1.t;
      param1 = p1.i;
      l6 = param1;
      return l6
    } else {
      return 0
    }
  } 
  static display(s1) {
    let param0, param1, bd6, first1, first0, row, col, ss, bd7, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
    if (s1 instanceof lastpiece.Soln.class) {
      param0 = s1.b;
      bd7 = param0;
      tmp = NofibPrelude.nofibStringToList("Success!");
      tmp1 = lastpiece.text(tmp);
      tmp2 = displayBoard_inst_19_20_tsni(bd7);
      tmp3 = lastpiece.nest(2, tmp2);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = (f1, z) => {
        return z
      };
      tmp4 = (f1, z) => {
        return match_xs_arm_Cons_inst_19_42_39_tsni(f1, z, _deforest_Cons_head1, _deforest_Cons_tail1)
      };
      _deforest_Cons_head = tmp1;
      _deforest_Cons_tail = tmp4;
      tmp5 = (f1, z) => {
        return match_xs_arm_Cons_inst_19_42_39_tsni(f1, z, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return vcat_inst_19_42_tsni(tmp5)
    } else if (s1 instanceof lastpiece.Choose.class) {
      param0 = s1.s;
      ss = param0;
      tmp6 = map_inst_19_26_tsni(lastpiece.display, ss);
      return vcat_inst_19_43_tsni(tmp6)
    } else if (s1 instanceof lastpiece.Fail.class) {
      param0 = s1.b;
      param1 = s1.s;
      bd6 = param0;
      if (globalThis.Array.isArray(param1) && param1.length === 2) {
        first0 = param1[0];
        first1 = param1[1];
        row = first0;
        col = first1;
        return lastpiece.Empty
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static displayBoard(bd6) {
    let row, sq5, tmp, tmp1, tmp2, tmp3;
    sq5 = function sq(n1, col) {
      let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = n1;
      _deforest_Deforest_Arr_2_1 = col;
      arr = (cd1) => {
        let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        b = first1;
        if (globalThis.Array.isArray(cd1) && cd1.length === 2) {
          first01 = cd1[0];
          first11 = cd1[1];
          c = first01;
          d = first11;
          scrut4 = a > c;
          if (scrut4 === true) {
            return (k5, x6, l6, r6) => {
              return match_scrut_arm_GT_inst_27_25_5_tsni(k5, x6, l6, r6)
            }
          } else {
            scrut3 = a < c;
            if (scrut3 === true) {
              return (k5, x6, l6, r6) => {
                return match_scrut_arm_LT_inst_27_25_5_tsni(k5, x6, l6, r6)
              }
            } else {
              scrut2 = b > d;
              if (scrut2 === true) {
                return (k5, x6, l6, r6) => {
                  return match_scrut_arm_GT_inst_27_25_5_tsni(k5, x6, l6, r6)
                }
              } else {
                scrut1 = b < d;
                if (scrut1 === true) {
                  return (k5, x6, l6, r6) => {
                    return match_scrut_arm_LT_inst_27_25_5_tsni(k5, x6, l6, r6)
                  }
                } else {
                  return (k5, x6, l6, r6) => {
                    let _deforest_Some_x;
                    _deforest_Some_x = x6;
                    return () => {
                      let param0, id3;
                      param0 = _deforest_Some_x;
                      id3 = param0;
                      return lastpiece.char(id3)
                    }
                  }
                }
              }
            }
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      scrut = check_inst_27_25_tsni(bd6, arr);
      return runtime.safeCall(scrut())
    };
    row = function row(n1) {
      let tmp4, tmp5, lambda;
      tmp4 = enumFromTo_inst_27_24_tsni(1, lastpiece.maxCol);
      lambda = (undefined, function (col) {
        return sq5(n1, col)
      });
      tmp5 = map_inst_27_23_tsni(lambda, tmp4);
      return hcat_inst_27_40_tsni(tmp5)
    };
    tmp = enumFromTo_inst_27_22_tsni(1, lastpiece.maxCol);
    tmp1 = map_inst_27_21_tsni(row, tmp);
    tmp2 = vcat_inst_27_38_tsni(tmp1);
    tmp3 = lastpiece.text(NofibPrelude.Nil);
    return lastpiece.above_(tmp2, false, tmp3)
  } 
  static eliminateEmpty(cons, p2, g, q) {
    let first1, first0, q1, tmp, arr;
    if (p2 instanceof lastpiece.Empty.class) {
      return q
    } else {
      if (globalThis.Array.isArray(q) && q.length === 2) {
        first0 = q[0];
        first1 = q[1];
        if (first0 instanceof lastpiece.NotEmpty.class) {
          q1 = first1;
          tmp = runtime.safeCall(cons(p2, g, q1));
        } else if (first0 instanceof lastpiece.IsEmpty.class) {
          tmp = p2;
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
      arr = [
        lastpiece.NotEmpty,
        tmp
      ];
      return arr
    }
  } 
  static reduceVert(doc) {
    let param0, param1, param2, p3, g1, q1, tmp, tmp1, tmp2, arr, lambda;
    if (doc instanceof lastpiece.Above.class) {
      param0 = doc.d1;
      param1 = doc.b;
      param2 = doc.d2;
      p3 = param0;
      g1 = param1;
      q1 = param2;
      tmp = lastpiece.reduceVert(p3);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceVert(q1);
      lambda = (undefined, function (a, b, c) {
        return runtime.safeCall(lastpiece.Above(a, b, c))
      });
      return lastpiece.eliminateEmpty(lambda, tmp1, g1, tmp2)
    } else {
      arr = [
        lastpiece.NotEmpty,
        doc
      ];
      return arr
    }
  } 
  static vcat(ls1) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (p3, q1) {
      return runtime.safeCall(lastpiece.Above(p3, false, q1))
    });
    tmp = NofibPrelude.foldr(lambda, lastpiece.Empty, ls1);
    tmp1 = lastpiece.reduceVert(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static text(s2) {
    let sl, tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s2);
    sl = tmp;
    tmp1 = runtime.safeCall(lastpiece.Str(s2));
    tmp2 = lastpiece.NoAnnot(tmp1, sl);
    return lastpiece.TextBeside(tmp2, lastpiece.Empty)
  } 
  static char(c) {
    let tmp, tmp1;
    tmp = runtime.safeCall(lastpiece.Chr(c));
    tmp1 = lastpiece.NoAnnot(tmp, 1);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static reduceHoriz(doc1) {
    let param0, param1, param2, p3, g1, q1, tmp, tmp1, tmp2, arr, lambda;
    if (doc1 instanceof lastpiece.Beside.class) {
      param0 = doc1.d1;
      param1 = doc1.b;
      param2 = doc1.d2;
      p3 = param0;
      g1 = param1;
      q1 = param2;
      tmp = lastpiece.reduceHoriz(p3);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceHoriz(q1);
      lambda = (undefined, function (a, b, c1) {
        return runtime.safeCall(lastpiece.Beside(a, b, c1))
      });
      return lastpiece.eliminateEmpty(lambda, tmp1, g1, tmp2)
    } else {
      arr = [
        lastpiece.NotEmpty,
        doc1
      ];
      return arr
    }
  } 
  static hcat(ls2) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (p3, q1) {
      return runtime.safeCall(lastpiece.Beside(p3, false, q1))
    });
    tmp = NofibPrelude.foldr(lambda, lastpiece.Empty, ls2);
    tmp1 = lastpiece.reduceHoriz(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static above_(p3, g1, q1) {
    if (q1 instanceof lastpiece.Empty.class) {
      return p3
    } else {
      if (g1 instanceof lastpiece.Empty.class) {
        return q1
      } else {
        return runtime.safeCall(lastpiece.Above(p3, g1, q1))
      }
    }
  } 
  static nest(k5, p4) {
    let tmp;
    tmp = lastpiece.reduceDoc(p4);
    return lastpiece.mkNest(k5, tmp)
  } 
  static mkNest(k6, p5) {
    let scrut, param0, param1, k15, p11, tmp;
    if (p5 instanceof lastpiece.Nest.class) {
      param0 = p5.i;
      param1 = p5.d;
      k15 = param0;
      p11 = param1;
      tmp = k6 + k15;
      return lastpiece.mkNest(tmp, p11)
    } else if (p5 instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p5 instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else {
      scrut = k6 === 0;
      if (scrut === true) {
        return p5
      } else {
        return lastpiece.Nest(k6, p5)
      }
    }
  } 
  static reduceDoc(p6) {
    let param0, param1, param2, p11, g2, q2, p12, g3, q3, tmp, tmp1;
    if (p6 instanceof lastpiece.Beside.class) {
      param0 = p6.d1;
      param1 = p6.b;
      param2 = p6.d2;
      p12 = param0;
      g3 = param1;
      q3 = param2;
      tmp = lastpiece.reduceDoc(q3);
      return lastpiece.beside(p12, g3, tmp)
    } else if (p6 instanceof lastpiece.Above.class) {
      param0 = p6.d1;
      param1 = p6.b;
      param2 = p6.d2;
      p11 = param0;
      g2 = param1;
      q2 = param2;
      tmp1 = lastpiece.reduceDoc(q2);
      return lastpiece.above(p11, g2, tmp1)
    } else {
      return p6
    }
  } 
  static beside(p7, g2, q2) {
    let param0, param1, t, p11, rest, p12, param2, p13, g11, q11, scrut, k7, p14, p15, p21, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (p7 instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p7 instanceof lastpiece.Union.class) {
      param0 = p7.d1;
      param1 = p7.d2;
      p15 = param0;
      p21 = param1;
      tmp = lastpiece.beside(p15, g2, q2);
      tmp1 = lastpiece.beside(p21, g2, q2);
      return lastpiece.Union(tmp, tmp1)
    } else if (p7 instanceof lastpiece.Empty.class) {
      return q2
    } else if (p7 instanceof lastpiece.Nest.class) {
      param0 = p7.i;
      param1 = p7.d;
      k7 = param0;
      p14 = param1;
      tmp2 = lastpiece.beside(p14, g2, q2);
      return lastpiece.Nest(k7, tmp2)
    } else if (p7 instanceof lastpiece.Beside.class) {
      param0 = p7.d1;
      param1 = p7.b;
      param2 = p7.d2;
      p13 = param0;
      g11 = param1;
      q11 = param2;
      scrut = g11 === g2;
      if (scrut === true) {
        tmp3 = lastpiece.beside(q11, g2, q2);
        return lastpiece.beside(p13, g11, tmp3)
      } else {
        tmp4 = runtime.safeCall(lastpiece.Beside(p13, g11, q11));
        tmp5 = lastpiece.reduceDoc(tmp4);
        return lastpiece.beside(tmp5, g2, q2)
      }
    } else if (p7 instanceof lastpiece.Above.class) {
      param0 = p7.d1;
      param1 = p7.b;
      param2 = p7.d2;
      tmp6 = lastpiece.reduceDoc(p7);
      return lastpiece.beside(tmp6, g2, q2)
    } else if (p7 instanceof lastpiece.NilAbove.class) {
      param0 = p7.d;
      p12 = param0;
      tmp7 = lastpiece.beside(p12, g2, q2);
      return runtime.safeCall(lastpiece.NilAbove(tmp7))
    } else if (p7 instanceof lastpiece.TextBeside.class) {
      param0 = p7.a;
      param1 = p7.d;
      t = param0;
      p11 = param1;
      if (p11 instanceof lastpiece.Empty.class) {
        tmp8 = lastpiece.nilBeside(g2, q2);
      } else {
        tmp8 = lastpiece.beside(p11, g2, q2);
      }
      rest = tmp8;
      return lastpiece.TextBeside(t, rest)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static above(p8, g3, q3) {
    let param0, param1, param2, p11, g11, q11, tmp, tmp1, tmp2, tmp3;
    if (p8 instanceof lastpiece.Above.class) {
      param0 = p8.d1;
      param1 = p8.b;
      param2 = p8.d2;
      p11 = param0;
      g11 = param1;
      q11 = param2;
      tmp = lastpiece.above(q11, g3, q3);
      return lastpiece.above(p11, g11, tmp)
    } else if (p8 instanceof lastpiece.Beside.class) {
      param0 = p8.d1;
      param1 = p8.b;
      param2 = p8.d2;
      tmp1 = lastpiece.reduceDoc(p8);
      tmp2 = lastpiece.reduceDoc(q3);
      return lastpiece.aboveNest(tmp1, g3, 0, tmp2)
    } else {
      tmp3 = lastpiece.reduceDoc(q3);
      return lastpiece.aboveNest(p8, g3, 0, tmp3)
    }
  } 
  static nilBeside(g4, p9) {
    let param0, param1, p11;
    if (p9 instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else if (p9 instanceof lastpiece.Nest.class) {
      param0 = p9.i;
      param1 = p9.d;
      p11 = param1;
      return lastpiece.nilBeside(g4, p11)
    } else {
      if (g4 === true) {
        return lastpiece.TextBeside(lastpiece.spaceText, p9)
      } else {
        return p9
      }
    }
  } 
  static aboveNest(p10, g5, k7, q4) {
    let param0, param1, param2, s3, p11, k15, rest, p12, k16, p13, p14, p21, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (p10 instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p10 instanceof lastpiece.Union.class) {
      param0 = p10.d1;
      param1 = p10.d2;
      p14 = param0;
      p21 = param1;
      tmp = lastpiece.aboveNest(p14, g5, k7, q4);
      tmp1 = lastpiece.aboveNest(p21, g5, k7, q4);
      return lastpiece.Union(tmp, tmp1)
    } else if (p10 instanceof lastpiece.Empty.class) {
      return lastpiece.mkNest(k7, q4)
    } else if (p10 instanceof lastpiece.Nest.class) {
      param0 = p10.i;
      param1 = p10.d;
      k16 = param0;
      p13 = param1;
      tmp2 = k7 - k16;
      tmp3 = lastpiece.aboveNest(p13, g5, tmp2, q4);
      return lastpiece.Nest(k16, tmp3)
    } else if (p10 instanceof lastpiece.NilAbove.class) {
      param0 = p10.d;
      p12 = param0;
      tmp4 = lastpiece.aboveNest(p12, g5, k7, q4);
      return runtime.safeCall(lastpiece.NilAbove(tmp4))
    } else if (p10 instanceof lastpiece.TextBeside.class) {
      param0 = p10.a;
      param1 = p10.d;
      s3 = param0;
      p11 = param1;
      tmp5 = lastpiece.annotSize(s3);
      tmp6 = k7 - tmp5;
      k15 = tmp6;
      if (p11 instanceof lastpiece.Empty.class) {
        tmp7 = lastpiece.nilAboveNest(g5, k15, q4);
      } else {
        tmp7 = lastpiece.aboveNest(p11, g5, k15, q4);
      }
      rest = tmp7;
      return lastpiece.TextBeside(s3, rest)
    } else if (p10 instanceof lastpiece.Above.class) {
      param0 = p10.d1;
      param1 = p10.b;
      param2 = p10.d2;
      throw globalThis.Error("aboveNest Above");
    } else if (p10 instanceof lastpiece.Beside.class) {
      param0 = p10.d1;
      param1 = p10.b;
      param2 = p10.d2;
      throw globalThis.Error("aboveNest Beside");
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static nilAboveNest(g6, k8, q5) {
    let scrut, scrut1, param0, param1, k15, q11, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (q5 instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else if (q5 instanceof lastpiece.Nest.class) {
      param0 = q5.i;
      param1 = q5.d;
      k15 = param0;
      q11 = param1;
      tmp = k8 + k15;
      return lastpiece.nilAboveNest(g6, tmp, q11)
    } else {
      scrut = Predef.not(g6);
      if (scrut === true) {
        scrut1 = k8 > 0;
        if (scrut1 === true) {
          tmp1 = lastpiece.indent(k8);
          tmp2 = runtime.safeCall(lastpiece.Str(tmp1));
          tmp3 = lastpiece.NoAnnot(tmp2, k8);
          return lastpiece.TextBeside(tmp3, q5)
        } else {
          tmp4 = lastpiece.mkNest(k8, q5);
          return runtime.safeCall(lastpiece.NilAbove(tmp4))
        }
      } else {
        tmp5 = lastpiece.mkNest(k8, q5);
        return runtime.safeCall(lastpiece.NilAbove(tmp5))
      }
    }
  } 
  static printDoc(d) {
    let put, done, tmp;
    put = function put(k9, next) {
      let param0, s3, s4, c1;
      if (k9 instanceof lastpiece.Chr.class) {
        param0 = k9.c;
        c1 = param0;
        return NofibPrelude.Cons(c1, next)
      } else if (k9 instanceof lastpiece.Str.class) {
        param0 = k9.s;
        s4 = param0;
        return NofibPrelude.append(s4, next)
      } else if (k9 instanceof lastpiece.PStr.class) {
        param0 = k9.s;
        s3 = param0;
        return NofibPrelude.append(s3, next)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    done = tmp;
    return lastpiece.fullRender(lastpiece.ZigZagMode, 200, 1.5, put, done, d)
  } 
  static fullRender(m2, l6, r6, txt, a, b) {
    let annTxt;
    annTxt = function annTxt(p11, x6) {
      let param0, param1, s3;
      if (p11 instanceof lastpiece.NoAnnot.class) {
        param0 = p11.t;
        param1 = p11.i;
        s3 = param0;
        return runtime.safeCall(txt(s3, x6))
      } else {
        return x6
      }
    };
    return lastpiece.fullRenderAnn(m2, l6, r6, annTxt, a, b)
  } 
  static ceiling(x6) {
    return runtime.safeCall(globalThis.Math.ceil(x6))
  } 
  static fullRenderAnn(m3, lineLen, ribbons, txt1, rest, doc2) {
    let ribbonLen, bestLineLen, doc11, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda;
    if (m3 instanceof lastpiece.OneLineMode.class) {
      tmp = lastpiece.reduceDoc(doc2);
      lambda = (undefined, function (a1, b1) {
        return b1
      });
      return lastpiece.easyDisplay(lastpiece.spaceText, lambda, txt1, rest, tmp)
    } else if (m3 instanceof lastpiece.LeftMode.class) {
      tmp1 = lastpiece.reduceDoc(doc2);
      return lastpiece.easyDisplay(lastpiece.nlText, lastpiece.first, txt1, rest, tmp1)
    } else {
      tmp2 = lineLen / ribbons;
      tmp3 = lastpiece.ceiling(tmp2);
      ribbonLen = tmp3;
      if (m3 instanceof lastpiece.ZigZagMode.class) {
        tmp4 = 2147483647;
      } else {
        tmp4 = lineLen;
      }
      bestLineLen = tmp4;
      tmp5 = lastpiece.reduceDoc(doc2);
      tmp6 = lastpiece.best(bestLineLen, ribbonLen, tmp5);
      doc11 = tmp6;
      return lastpiece.displayDoc(m3, lineLen, ribbonLen, txt1, rest, doc11)
    }
  } 
  static easyDisplay(nlSpaceText, choose, txt2, end, x7) {
    let lay;
    lay = function lay(x8) {
      let param0, param1, param2, s3, p11, p12, p13, p14, q6, tmp, tmp1, tmp2;
      if (x8 instanceof lastpiece.NoDoc.class) {
        throw globalThis.Error("easyDisplay: NoDoc");
      } else if (x8 instanceof lastpiece.Union.class) {
        param0 = x8.d1;
        param1 = x8.d2;
        p14 = param0;
        q6 = param1;
        tmp = runtime.safeCall(choose(p14, q6));
        return lay(tmp)
      } else if (x8 instanceof lastpiece.Nest.class) {
        param0 = x8.i;
        param1 = x8.d;
        p13 = param1;
        return lay(p13)
      } else if (x8 instanceof lastpiece.Empty.class) {
        return end
      } else if (x8 instanceof lastpiece.NilAbove.class) {
        param0 = x8.d;
        p12 = param0;
        tmp1 = lay(p12);
        return runtime.safeCall(txt2(nlSpaceText, tmp1))
      } else if (x8 instanceof lastpiece.TextBeside.class) {
        param0 = x8.a;
        param1 = x8.d;
        s3 = param0;
        p11 = param1;
        tmp2 = lay(p11);
        return runtime.safeCall(txt2(s3, tmp2))
      } else if (x8 instanceof lastpiece.Above.class) {
        param0 = x8.d1;
        param1 = x8.b;
        param2 = x8.d2;
        throw globalThis.Error("easyDisplay Above");
      } else if (x8 instanceof lastpiece.Beside.class) {
        param0 = x8.d1;
        param1 = x8.b;
        param2 = x8.d2;
        throw globalThis.Error("easyDisplay Beside");
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return lay(x7)
  } 
  static displayDoc(m4, pageWidth, ribbonWidth, txt3, end1, doc3) {
    let lay, gapWidth, shift, tmp, tmp1;
    lay = function lay(k9, docc) {
      let lay2, lay1, param0, param1, s3, p11, scrut, scrut1, p12, k15, p13, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17;
      lay2 = function lay2(k10, param) {
        let param01, param11, p14, s4, p15, p16, tmp18, tmp19, tmp20, tmp21;
        if (param instanceof lastpiece.NilAbove.class) {
          param01 = param.d;
          p16 = param01;
          tmp18 = lay(k10, p16);
          return runtime.safeCall(txt3(lastpiece.nlText, tmp18))
        } else if (param instanceof lastpiece.TextBeside.class) {
          param01 = param.a;
          param11 = param.d;
          s4 = param01;
          p15 = param11;
          tmp19 = lastpiece.annotSize(s4);
          tmp20 = k10 + tmp19;
          tmp21 = lay2(tmp20, p15);
          return runtime.safeCall(txt3(s4, tmp21))
        } else if (param instanceof lastpiece.Nest.class) {
          param01 = param.i;
          param11 = param.d;
          p14 = param11;
          return lay2(k10, p14)
        } else if (param instanceof lastpiece.Empty.class) {
          return end1
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lay1 = function lay1(k10, s4, p14) {
        let r7, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24;
        tmp18 = lastpiece.annotSize(s4);
        tmp19 = k10 + tmp18;
        r7 = tmp19;
        tmp20 = lastpiece.indent(k10);
        tmp21 = runtime.safeCall(lastpiece.Str(tmp20));
        tmp22 = lastpiece.NoAnnot(tmp21, k10);
        tmp23 = lay2(r7, p14);
        tmp24 = runtime.safeCall(txt3(s4, tmp23));
        return runtime.safeCall(txt3(tmp22, tmp24))
      };
      if (docc instanceof lastpiece.Nest.class) {
        param0 = docc.i;
        param1 = docc.d;
        k15 = param0;
        p13 = param1;
        tmp2 = k9 + k15;
        return lay(tmp2, p13)
      } else if (docc instanceof lastpiece.Empty.class) {
        return end1
      } else if (docc instanceof lastpiece.NilAbove.class) {
        param0 = docc.d;
        p12 = param0;
        tmp3 = lay(k9, p12);
        return runtime.safeCall(txt3(lastpiece.nlText, tmp3))
      } else if (docc instanceof lastpiece.TextBeside.class) {
        param0 = docc.a;
        param1 = docc.d;
        s3 = param0;
        p11 = param1;
        if (m4 instanceof lastpiece.ZigZagMode.class) {
          scrut1 = k9 >= gapWidth;
          if (scrut1 === true) {
            tmp4 = NofibPrelude.replicate(shift, "/");
            tmp5 = runtime.safeCall(lastpiece.Str(tmp4));
            tmp6 = lastpiece.NoAnnot(tmp5, shift);
            tmp7 = k9 - shift;
            tmp8 = lay1(tmp7, s3, p11);
            tmp9 = runtime.safeCall(txt3(lastpiece.nlText, tmp8));
            tmp10 = runtime.safeCall(txt3(tmp6, tmp9));
            return runtime.safeCall(txt3(lastpiece.nlText, tmp10))
          } else {
            scrut = k9 < 0;
            if (scrut === true) {
              tmp11 = NofibPrelude.replicate(shift, "|");
              tmp12 = runtime.safeCall(lastpiece.Str(tmp11));
              tmp13 = lastpiece.NoAnnot(tmp12, shift);
              tmp14 = k9 + shift;
              tmp15 = lay1(tmp14, s3, p11);
              tmp16 = runtime.safeCall(txt3(lastpiece.nlText, tmp15));
              tmp17 = runtime.safeCall(txt3(tmp13, tmp16));
              return runtime.safeCall(txt3(lastpiece.nlText, tmp17))
            } else {
              return lay1(k9, s3, p11)
            }
          }
        } else {
          return lay1(k9, s3, p11)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = pageWidth - ribbonWidth;
    gapWidth = tmp;
    tmp1 = NofibPrelude.intDiv(gapWidth, 2);
    shift = tmp1;
    return lay(0, doc3)
  } 
  static best(w0, r7, doc4) {
    let get, get1;
    get = function get(r8, w, docc) {
      let param0, param1, param2, p11, q6, k9, p12, s3, p13, p14, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (docc instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (docc instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (docc instanceof lastpiece.NilAbove.class) {
        param0 = docc.d;
        p14 = param0;
        tmp = get(r8, w, p14);
        return runtime.safeCall(lastpiece.NilAbove(tmp))
      } else if (docc instanceof lastpiece.TextBeside.class) {
        param0 = docc.a;
        param1 = docc.d;
        s3 = param0;
        p13 = param1;
        tmp1 = lastpiece.annotSize(s3);
        tmp2 = get1(r8, w, tmp1, p13);
        return lastpiece.TextBeside(s3, tmp2)
      } else if (docc instanceof lastpiece.Nest.class) {
        param0 = docc.i;
        param1 = docc.d;
        k9 = param0;
        p12 = param1;
        tmp3 = w - k9;
        tmp4 = get(r8, tmp3, p12);
        return lastpiece.Nest(k9, tmp4)
      } else if (docc instanceof lastpiece.Union.class) {
        param0 = docc.d1;
        param1 = docc.d2;
        p11 = param0;
        q6 = param1;
        tmp5 = get(r8, w, p11);
        tmp6 = get(r8, w, q6);
        return lastpiece.nicest(w, r8, tmp5, tmp6)
      } else if (docc instanceof lastpiece.Above.class) {
        param0 = docc.d1;
        param1 = docc.b;
        param2 = docc.d2;
        throw globalThis.Error("best get Above");
      } else if (docc instanceof lastpiece.Beside.class) {
        param0 = docc.d1;
        param1 = docc.b;
        param2 = docc.d2;
        throw globalThis.Error("best get Beside");
      } else {
        throw new globalThis.Error("match error");
      }
    };
    get1 = function get1(r8, w, sl, p11) {
      let param0, param1, param2, p12, q6, p13, s3, p14, p15, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (p11 instanceof lastpiece.Empty.class) {
        return lastpiece.Empty
      } else if (p11 instanceof lastpiece.NoDoc.class) {
        return lastpiece.NoDoc
      } else if (p11 instanceof lastpiece.NilAbove.class) {
        param0 = p11.d;
        p15 = param0;
        tmp = w - sl;
        tmp1 = get(r8, tmp, p15);
        return runtime.safeCall(lastpiece.NilAbove(tmp1))
      } else if (p11 instanceof lastpiece.TextBeside.class) {
        param0 = p11.a;
        param1 = p11.d;
        s3 = param0;
        p14 = param1;
        tmp2 = lastpiece.annotSize(s3);
        tmp3 = sl + tmp2;
        tmp4 = get1(r8, w, tmp3, p14);
        return lastpiece.TextBeside(s3, tmp4)
      } else if (p11 instanceof lastpiece.Nest.class) {
        param0 = p11.i;
        param1 = p11.d;
        p13 = param1;
        return get1(r8, w, sl, p13)
      } else if (p11 instanceof lastpiece.Union.class) {
        param0 = p11.d1;
        param1 = p11.d2;
        p12 = param0;
        q6 = param1;
        tmp5 = get1(r8, w, sl, p12);
        tmp6 = get1(r8, w, sl, q6);
        return lastpiece.nicest1(w, r8, sl, tmp5, tmp6)
      } else if (p11 instanceof lastpiece.Above.class) {
        param0 = p11.d1;
        param1 = p11.b;
        param2 = p11.d2;
        throw globalThis.Error("best get1 Above");
      } else if (p11 instanceof lastpiece.Beside.class) {
        param0 = p11.d1;
        param1 = p11.b;
        param2 = p11.d2;
        throw globalThis.Error("best get1 Beside");
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return get(r7, w0, doc4)
  } 
  static nonEmptySet(doc5) {
    let param0, param1, param2, p11, p12;
    if (doc5 instanceof lastpiece.NoDoc.class) {
      return false
    } else if (doc5 instanceof lastpiece.Union.class) {
      param0 = doc5.d1;
      param1 = doc5.d2;
      return true
    } else if (doc5 instanceof lastpiece.Empty.class) {
      return true
    } else if (doc5 instanceof lastpiece.NilAbove.class) {
      param0 = doc5.d;
      return true
    } else if (doc5 instanceof lastpiece.TextBeside.class) {
      param0 = doc5.a;
      param1 = doc5.d;
      p12 = param1;
      return lastpiece.nonEmptySet(p12)
    } else if (doc5 instanceof lastpiece.Nest.class) {
      param0 = doc5.i;
      param1 = doc5.d;
      p11 = param1;
      return lastpiece.nonEmptySet(p11)
    } else if (doc5 instanceof lastpiece.Above.class) {
      param0 = doc5.d1;
      param1 = doc5.b;
      param2 = doc5.d2;
      throw globalThis.Error("nonEmptySet Above");
    } else if (doc5 instanceof lastpiece.Beside.class) {
      param0 = doc5.d1;
      param1 = doc5.b;
      param2 = doc5.d2;
      throw globalThis.Error("nonEmptySet Beside");
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static fits(n1, param) {
    let param0, param1, param2, s3, p11, scrut, tmp, tmp1;
    scrut = n1 < 0;
    if (scrut === true) {
      return false
    } else {
      if (param instanceof lastpiece.NoDoc.class) {
        return false
      } else if (param instanceof lastpiece.Empty.class) {
        return true
      } else if (param instanceof lastpiece.NilAbove.class) {
        param0 = param.d;
        return true
      } else if (param instanceof lastpiece.TextBeside.class) {
        param0 = param.a;
        param1 = param.d;
        s3 = param0;
        p11 = param1;
        tmp = lastpiece.annotSize(s3);
        tmp1 = n1 - tmp;
        return lastpiece.fits(tmp1, p11)
      } else if (param instanceof lastpiece.Above.class) {
        param0 = param.d1;
        param1 = param.b;
        param2 = param.d2;
        throw globalThis.Error("fits Above");
      } else if (param instanceof lastpiece.Beside.class) {
        param0 = param.d1;
        param1 = param.b;
        param2 = param.d2;
        throw globalThis.Error("fits Beside");
      } else if (param instanceof lastpiece.Union.class) {
        param0 = param.d1;
        param1 = param.d2;
        throw globalThis.Error("fits Union");
      } else if (param instanceof lastpiece.Nest.class) {
        param0 = param.i;
        param1 = param.d;
        throw globalThis.Error("fits Nest");
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static first(p11, q6) {
    let scrut;
    scrut = lastpiece.nonEmptySet(p11);
    if (scrut === true) {
      return p11
    } else {
      return q6
    }
  } 
  static nicest1(w, r8, sl, p12, q7) {
    let scrut, tmp, tmp1;
    tmp = NofibPrelude.min(w, r8);
    tmp1 = tmp - sl;
    scrut = lastpiece.fits(tmp1, p12);
    if (scrut === true) {
      return p12
    } else {
      return q7
    }
  } 
  static nicest(w1, r9, p13, q8) {
    return lastpiece.nicest1(w1, r9, 0, p13, q8)
  } 
  static testLastPiece_nofib() {
    let initialBoard, solutions, arr, arr1, arr2, tmp, tmp1, tmp2, tmp3, arr3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    arr = [
      1,
      1
    ];
    _deforest_Deforest_Arr_2_0 = 1;
    _deforest_Deforest_Arr_2_1 = 0;
    arr1 = (row, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_28_29_44_tsni(row, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Deforest_Arr_2_01 = 1;
    _deforest_Deforest_Arr_2_11 = 1;
    arr2 = (row, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_28_29_44_tsni(row, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    _deforest_Cons_head1 = arr2;
    _deforest_Cons_tail1 = (bd7, sq5, id3) => {
      let tmp6, _deforest_Some_x;
      tmp6 = extend_inst_28_29_12_tsni(bd7, sq5, id3);
      _deforest_Some_x = tmp6;
      return () => {
        let param0, x8;
        param0 = _deforest_Some_x;
        x8 = param0;
        return x8
      }
    };
    tmp = (bd7, sq5, id3) => {
      return match_os_arm_Cons_inst_28_29_tsni(bd7, sq5, id3, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr1;
    _deforest_Cons_tail = tmp;
    tmp1 = (bd7, sq5, id3) => {
      return match_os_arm_Cons_inst_28_29_tsni(bd7, sq5, id3, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp2 = fit_inst_28_29_tsni(lastpiece.emptyBoard, arr, "a", tmp1);
    tmp3 = fromSome_inst_28_45_tsni(tmp2);
    initialBoard = tmp3;
    arr3 = [
      1,
      2
    ];
    tmp4 = search_inst_28_30_tsni(arr3, lastpiece.Female, initialBoard, lastpiece.initialPieces);
    solutions = tmp4;
    tmp5 = display_inst_28_31_tsni(solutions);
    return lastpiece.printDoc(tmp5)
  } 
  static main() {
    let tmp;
    tmp = testLastPiece_nofib_inst_32_33_tsni();
    return nofibListToString_inst_32_46_tsni(tmp)
  }
  static toString() { return "lastpiece"; }
});
let lastpiece = lastpiece1; export default lastpiece;
