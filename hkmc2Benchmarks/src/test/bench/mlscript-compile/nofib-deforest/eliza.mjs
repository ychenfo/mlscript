const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let go, cons, lscomp, cons1, maybe, conj, trailingI, ans, cons2, eliza1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lscomp$, lambda$6, lambda$7, lambda$8, words_inst_0_1_tsni, leaveWhile_inst_0_1_2_tsni, lambda_inst_3_4_tsni, words_inst_3_4_1_tsni, leaveWhile_inst_3_4_1_2_tsni, take_inst_3_5_tsni, map_inst_3_6_tsni, session_inst_3_7_tsni, answer_inst_3_7_8_tsni, ans_inst_3_7_8_9_tsni, replies_inst_3_7_8_9_10_tsni, lambda_inst_3_7_8_9_10_11_tsni, lambda$_inst_3_7_8_9_10_11_12_tsni, lz_map_inst_3_7_8_9_10_11_12_13_tsni, lambda_inst_3_7_8_9_10_11_12_13_tsni, lambda$_inst_3_7_8_9_10_11_12_13_tsni, lambda_inst_3_7_8_9_10_14_tsni, lambda$_inst_3_7_8_9_10_14_15_tsni, conjug_inst_3_7_8_9_10_14_15_16_tsni, map_inst_3_7_8_9_10_14_15_16_17_tsni, conj_inst_3_7_8_9_10_14_15_16_18_tsni, lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni, ucase_inst_3_7_8_9_10_14_15_16_18_19_20_tsni, map_inst_3_7_8_9_10_14_15_16_18_19_20_21_tsni, append_inst_3_7_8_9_10_14_15_16_18_22_tsni, repeated_inst_3_7_23_tsni, filter_inst_3_24_tsni, lambda$_inst_25_26_tsni, session_inst_25_26_7_tsni, answer_inst_25_26_7_8_tsni, ans_inst_25_26_7_8_9_tsni, replies_inst_25_26_7_8_9_10_tsni, lambda_inst_25_26_7_8_9_10_14_tsni, lambda$_inst_25_26_7_8_9_10_14_15_tsni, conjug_inst_25_26_7_8_9_10_14_15_16_tsni, conj_inst_25_26_7_8_9_10_14_15_16_18_tsni, append_inst_25_26_7_8_9_10_14_15_16_18_22_tsni, lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni, ucase_inst_25_26_7_8_9_10_14_15_16_18_19_20_tsni, map_inst_25_26_7_8_9_10_14_15_16_18_19_20_21_tsni, map_inst_25_26_7_8_9_10_14_15_16_17_tsni, lambda_inst_25_26_7_8_9_10_11_tsni, lambda$_inst_25_26_7_8_9_10_11_12_tsni, lz_map_inst_25_26_7_8_9_10_11_12_13_tsni, lambda_inst_25_26_7_8_9_10_11_12_13_tsni, lambda$_inst_25_26_7_8_9_10_11_12_13_tsni, repeated_inst_25_26_7_23_tsni, filter_inst_25_26_24_tsni, map_inst_25_26_6_tsni, lambda_inst_25_26_4_tsni, words_inst_25_26_4_1_tsni, leaveWhile_inst_25_26_4_1_2_tsni, take_inst_25_26_5_tsni, replies_inst_27_10_tsni, lambda_inst_27_10_14_tsni, lambda$_inst_27_10_14_15_tsni, conjug_inst_27_10_14_15_16_tsni, conj_inst_27_10_14_15_16_18_tsni, append_inst_27_10_14_15_16_18_22_tsni, lscomp$_inst_27_10_14_15_16_18_19_tsni, ucase_inst_27_10_14_15_16_18_19_20_tsni, map_inst_27_10_14_15_16_18_19_20_21_tsni, map_inst_27_10_14_15_16_17_tsni, lambda_inst_27_10_11_tsni, lambda$_inst_27_10_11_12_tsni, lz_map_inst_27_10_11_12_13_tsni, lambda_inst_27_10_11_12_13_tsni, lambda$_inst_27_10_11_12_13_tsni, conjug_inst_28_16_tsni, map_inst_28_16_17_tsni, conj_inst_28_16_18_tsni, lscomp$_inst_28_16_18_19_tsni, ucase_inst_28_16_18_19_20_tsni, map_inst_28_16_18_19_20_21_tsni, append_inst_28_16_18_22_tsni, lambda$_inst_29_15_tsni, conjug_inst_29_15_16_tsni, conj_inst_29_15_16_18_tsni, append_inst_29_15_16_18_22_tsni, lscomp$_inst_29_15_16_18_19_tsni, ucase_inst_29_15_16_18_19_20_tsni, map_inst_29_15_16_18_19_20_21_tsni, map_inst_29_15_16_17_tsni, lz_map_inst_30_13_tsni, lambda_inst_30_13_tsni, lambda$_inst_30_13_tsni, lambda$_inst_31_12_tsni, lz_map_inst_31_12_13_tsni, lambda_inst_31_12_13_tsni, lambda$_inst_31_12_13_tsni, ucase_inst_32_20_tsni, map_inst_32_20_21_tsni, lscomp$_inst_33_34_tsni, ucase_inst_33_34_20_tsni, map_inst_33_34_20_21_tsni, lscomp$_inst_35_19_tsni, ucase_inst_35_19_20_tsni, map_inst_35_19_20_21_tsni, append_inst_35_22_tsni, leaveWhile_inst_36_2_tsni, conj_inst_37_18_tsni, append_inst_37_18_22_tsni, lscomp$_inst_37_18_19_tsni, ucase_inst_37_18_19_20_tsni, map_inst_37_18_19_20_21_tsni, map_inst_37_17_tsni, lambda_inst_38_11_tsni, lambda$_inst_38_11_12_tsni, lz_map_inst_38_11_12_13_tsni, lambda_inst_38_11_12_13_tsni, lambda$_inst_38_11_12_13_tsni, lambda_inst_38_14_tsni, lambda$_inst_38_14_15_tsni, conjug_inst_38_14_15_16_tsni, map_inst_38_14_15_16_17_tsni, conj_inst_38_14_15_16_18_tsni, lscomp$_inst_38_14_15_16_18_19_tsni, ucase_inst_38_14_15_16_18_19_20_tsni, map_inst_38_14_15_16_18_19_20_21_tsni, append_inst_38_14_15_16_18_22_tsni, ans_inst_39_9_tsni, replies_inst_39_9_10_tsni, lambda_inst_39_9_10_11_tsni, lambda$_inst_39_9_10_11_12_tsni, lz_map_inst_39_9_10_11_12_13_tsni, lambda_inst_39_9_10_11_12_13_tsni, lambda$_inst_39_9_10_11_12_13_tsni, lambda_inst_39_9_10_14_tsni, lambda$_inst_39_9_10_14_15_tsni, conjug_inst_39_9_10_14_15_16_tsni, map_inst_39_9_10_14_15_16_17_tsni, conj_inst_39_9_10_14_15_16_18_tsni, lscomp$_inst_39_9_10_14_15_16_18_19_tsni, ucase_inst_39_9_10_14_15_16_18_19_20_tsni, map_inst_39_9_10_14_15_16_18_19_20_21_tsni, append_inst_39_9_10_14_15_16_18_22_tsni, answer_inst_40_8_tsni, ans_inst_40_8_9_tsni, replies_inst_40_8_9_10_tsni, lambda_inst_40_8_9_10_14_tsni, lambda$_inst_40_8_9_10_14_15_tsni, conjug_inst_40_8_9_10_14_15_16_tsni, conj_inst_40_8_9_10_14_15_16_18_tsni, append_inst_40_8_9_10_14_15_16_18_22_tsni, lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni, ucase_inst_40_8_9_10_14_15_16_18_19_20_tsni, map_inst_40_8_9_10_14_15_16_18_19_20_21_tsni, map_inst_40_8_9_10_14_15_16_17_tsni, lambda_inst_40_8_9_10_11_tsni, lambda$_inst_40_8_9_10_11_12_tsni, lz_map_inst_40_8_9_10_11_12_13_tsni, lambda_inst_40_8_9_10_11_12_13_tsni, lambda$_inst_40_8_9_10_11_12_13_tsni, repeated_inst_40_23_tsni, lambda_inst_41_42_tsni, lambda$_inst_41_42_26_tsni, lambda_inst_41_42_26_4_tsni, words_inst_41_42_26_4_1_tsni, leaveWhile_inst_41_42_26_4_1_2_tsni, take_inst_41_42_26_5_tsni, map_inst_41_42_26_6_tsni, session_inst_41_42_26_7_tsni, answer_inst_41_42_26_7_8_tsni, ans_inst_41_42_26_7_8_9_tsni, replies_inst_41_42_26_7_8_9_10_tsni, lambda_inst_41_42_26_7_8_9_10_11_tsni, lambda$_inst_41_42_26_7_8_9_10_11_12_tsni, lz_map_inst_41_42_26_7_8_9_10_11_12_13_tsni, lambda_inst_41_42_26_7_8_9_10_11_12_13_tsni, lambda$_inst_41_42_26_7_8_9_10_11_12_13_tsni, lambda_inst_41_42_26_7_8_9_10_14_tsni, lambda$_inst_41_42_26_7_8_9_10_14_15_tsni, conjug_inst_41_42_26_7_8_9_10_14_15_16_tsni, map_inst_41_42_26_7_8_9_10_14_15_16_17_tsni, conj_inst_41_42_26_7_8_9_10_14_15_16_18_tsni, lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni, ucase_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_tsni, map_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni, append_inst_41_42_26_7_8_9_10_14_15_16_18_22_tsni, repeated_inst_41_42_26_7_23_tsni, filter_inst_41_42_26_24_tsni, enumFromTo_inst_41_43_tsni, testEliza_nofib_inst_44_45_tsni, lambda_inst_44_45_42_tsni, lambda$_inst_44_45_42_26_tsni, session_inst_44_45_42_26_7_tsni, answer_inst_44_45_42_26_7_8_tsni, ans_inst_44_45_42_26_7_8_9_tsni, replies_inst_44_45_42_26_7_8_9_10_tsni, lambda_inst_44_45_42_26_7_8_9_10_14_tsni, lambda$_inst_44_45_42_26_7_8_9_10_14_15_tsni, conjug_inst_44_45_42_26_7_8_9_10_14_15_16_tsni, conj_inst_44_45_42_26_7_8_9_10_14_15_16_18_tsni, append_inst_44_45_42_26_7_8_9_10_14_15_16_18_22_tsni, lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni, ucase_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_tsni, map_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni, map_inst_44_45_42_26_7_8_9_10_14_15_16_17_tsni, lambda_inst_44_45_42_26_7_8_9_10_11_tsni, lambda$_inst_44_45_42_26_7_8_9_10_11_12_tsni, lz_map_inst_44_45_42_26_7_8_9_10_11_12_13_tsni, lambda_inst_44_45_42_26_7_8_9_10_11_12_13_tsni, lambda$_inst_44_45_42_26_7_8_9_10_11_12_13_tsni, repeated_inst_44_45_42_26_7_23_tsni, filter_inst_44_45_42_26_24_tsni, map_inst_44_45_42_26_6_tsni, lambda_inst_44_45_42_26_4_tsni, words_inst_44_45_42_26_4_1_tsni, leaveWhile_inst_44_45_42_26_4_1_2_tsni, take_inst_44_45_42_26_5_tsni, enumFromTo_inst_44_45_43_tsni, map_inst_44_45_46_tsni, append_inst_44_45_42_26_7_47_tsni, append_inst_44_45_42_26_7_48_tsni, prefix_inst_3_7_8_9_10_11_12_49_tsni, lambda_inst_3_7_8_9_10_11_12_49_tsni, lambda$_inst_3_7_8_9_10_11_12_49_tsni, trailingI_inst_3_7_8_9_10_14_15_16_50_tsni, foldr_inst_3_7_8_9_10_14_15_16_50_51_tsni, listEq_inst_3_7_8_9_10_14_15_16_18_19_52_tsni, head_inst_3_7_8_9_10_14_15_16_18_53_tsni, head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni, listEq_inst_25_26_7_8_9_10_14_15_16_18_19_52_tsni, trailingI_inst_25_26_7_8_9_10_14_15_16_50_tsni, foldr_inst_25_26_7_8_9_10_14_15_16_50_51_tsni, prefix_inst_25_26_7_8_9_10_11_12_49_tsni, lambda_inst_25_26_7_8_9_10_11_12_49_tsni, lambda$_inst_25_26_7_8_9_10_11_12_49_tsni, head_inst_27_10_14_15_16_18_53_tsni, listEq_inst_27_10_14_15_16_18_19_52_tsni, trailingI_inst_27_10_14_15_16_50_tsni, foldr_inst_27_10_14_15_16_50_51_tsni, prefix_inst_27_10_11_12_49_tsni, lambda_inst_27_10_11_12_49_tsni, lambda$_inst_27_10_11_12_49_tsni, trailingI_inst_28_16_50_tsni, foldr_inst_28_16_50_51_tsni, listEq_inst_28_16_18_19_52_tsni, head_inst_28_16_18_53_tsni, head_inst_29_15_16_18_53_tsni, listEq_inst_29_15_16_18_19_52_tsni, trailingI_inst_29_15_16_50_tsni, foldr_inst_29_15_16_50_51_tsni, prefix_inst_30_49_tsni, lambda_inst_30_49_tsni, lambda$_inst_30_49_tsni, prefix_inst_31_12_49_tsni, lambda_inst_31_12_49_tsni, lambda$_inst_31_12_49_tsni, listEq_inst_32_52_tsni, listEq_inst_33_34_52_tsni, listEq_inst_35_19_52_tsni, head_inst_35_53_tsni, append_inst_54_tsni, head_inst_37_18_53_tsni, listEq_inst_37_18_19_52_tsni, trailingI_inst_37_50_tsni, foldr_inst_37_50_51_tsni, prefix_inst_38_11_12_49_tsni, lambda_inst_38_11_12_49_tsni, lambda$_inst_38_11_12_49_tsni, trailingI_inst_38_14_15_16_50_tsni, foldr_inst_38_14_15_16_50_51_tsni, listEq_inst_38_14_15_16_18_19_52_tsni, head_inst_38_14_15_16_18_53_tsni, prefix_inst_39_9_10_11_12_49_tsni, lambda_inst_39_9_10_11_12_49_tsni, lambda$_inst_39_9_10_11_12_49_tsni, trailingI_inst_39_9_10_14_15_16_50_tsni, foldr_inst_39_9_10_14_15_16_50_51_tsni, listEq_inst_39_9_10_14_15_16_18_19_52_tsni, head_inst_39_9_10_14_15_16_18_53_tsni, head_inst_40_8_9_10_14_15_16_18_53_tsni, listEq_inst_40_8_9_10_14_15_16_18_19_52_tsni, trailingI_inst_40_8_9_10_14_15_16_50_tsni, foldr_inst_40_8_9_10_14_15_16_50_51_tsni, prefix_inst_40_8_9_10_11_12_49_tsni, lambda_inst_40_8_9_10_11_12_49_tsni, lambda$_inst_40_8_9_10_11_12_49_tsni, prefix_inst_41_42_26_7_8_9_10_11_12_49_tsni, lambda_inst_41_42_26_7_8_9_10_11_12_49_tsni, lambda$_inst_41_42_26_7_8_9_10_11_12_49_tsni, trailingI_inst_41_42_26_7_8_9_10_14_15_16_50_tsni, foldr_inst_41_42_26_7_8_9_10_14_15_16_50_51_tsni, listEq_inst_41_42_26_7_8_9_10_14_15_16_18_19_52_tsni, head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni, map_inst_41_46_tsni, head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni, listEq_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_52_tsni, trailingI_inst_44_45_42_26_7_8_9_10_14_15_16_50_tsni, foldr_inst_44_45_42_26_7_8_9_10_14_15_16_50_51_tsni, prefix_inst_44_45_42_26_7_8_9_10_11_12_49_tsni, lambda_inst_44_45_42_26_7_8_9_10_11_12_49_tsni, lambda$_inst_44_45_42_26_7_8_9_10_11_12_49_tsni, map_inst_44_55_tsni, lambda_inst_44_56_tsni, nofibListToString_inst_44_56_57_tsni, match_xs_arm_Nil_inst_3_6_tsni, match_l_arm_Cons_inst_3_7_8_9_10_14_15_16_18_53_tsni, match_scrut_arm_Deforest_Arr_2_inst_3_7_tsni, match_l_arm_Cons_inst_25_26_7_8_9_10_14_15_16_18_53_tsni, match_scrut_arm_Deforest_Arr_2_inst_25_26_7_tsni, match_xs_arm_Nil_inst_25_26_6_tsni, match_l_arm_Cons_inst_27_10_14_15_16_18_53_tsni, match_l_arm_Cons_inst_28_16_18_53_tsni, match_l_arm_Cons_inst_29_15_16_18_53_tsni, match_l_arm_Cons_inst_35_53_tsni, match_l_arm_Cons_inst_37_18_53_tsni, match_l_arm_Cons_inst_38_14_15_16_18_53_tsni, match_l_arm_Cons_inst_39_9_10_14_15_16_18_53_tsni, match_l_arm_Cons_inst_40_8_9_10_14_15_16_18_53_tsni, match_scrut_arm_Deforest_Arr_2_inst_40_tsni, match_xs_arm_Nil_inst_41_42_26_6_tsni, match_l_arm_Cons_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni, match_scrut_arm_Deforest_Arr_2_inst_41_42_26_7_tsni, match_l_arm_Cons_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni, match_scrut_arm_Deforest_Arr_2_inst_44_45_42_26_7_tsni, match_xs_arm_Nil_inst_44_45_42_26_6_tsni, match_ls_arm_Cons_inst_44_56_57_tsni;
match_xs_arm_Nil_inst_3_6_tsni = (undefined, function (f) {
  return (f1) => {
    return (rs, prev) => {
      return NofibPrelude.Nil
    }
  }
});
match_l_arm_Cons_inst_3_7_8_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_3_7_8_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_3_7_8_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_3_7_8_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_3_7_8_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_scrut_arm_Deforest_Arr_2_inst_3_7_tsni = (undefined, function (l, ls, _deforest_Deforest_Arr_2_0_inst_3_7_tsni, _deforest_Deforest_Arr_2_1_inst_3_7_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_3_7_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_3_7_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_3_7_tsni(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
});
match_l_arm_Cons_inst_25_26_7_8_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_25_26_7_8_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_25_26_7_8_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_scrut_arm_Deforest_Arr_2_inst_25_26_7_tsni = (undefined, function (l, ls, _deforest_Deforest_Arr_2_0_inst_25_26_7_tsni, _deforest_Deforest_Arr_2_1_inst_25_26_7_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_25_26_7_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_25_26_7_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_25_26_7_tsni(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
});
match_xs_arm_Nil_inst_25_26_6_tsni = (undefined, function (f) {
  return (f1) => {
    return (rs, prev) => {
      return NofibPrelude.Nil
    }
  }
});
match_l_arm_Cons_inst_27_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_27_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_27_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_27_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_27_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_28_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_28_16_18_53_tsni, _deforest_Cons_tail_inst_28_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_28_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_28_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_29_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_29_15_16_18_53_tsni, _deforest_Cons_tail_inst_29_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_29_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_29_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_35_53_tsni = (undefined, function (_deforest_Cons_head_inst_35_53_tsni, _deforest_Cons_tail_inst_35_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_35_53_tsni;
  param1 = _deforest_Cons_tail_inst_35_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_37_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_37_18_53_tsni, _deforest_Cons_tail_inst_37_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_37_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_37_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_38_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_38_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_38_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_38_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_38_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_39_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_39_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_39_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_39_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_39_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_l_arm_Cons_inst_40_8_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_40_8_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_40_8_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_40_8_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_40_8_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_scrut_arm_Deforest_Arr_2_inst_40_tsni = (undefined, function (l, ls, _deforest_Deforest_Arr_2_0_inst_40_tsni, _deforest_Deforest_Arr_2_1_inst_40_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_40_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_40_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = eliza.session(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
});
match_xs_arm_Nil_inst_41_42_26_6_tsni = (undefined, function (f) {
  return (f1) => {
    return (rs, prev) => {
      return NofibPrelude.Nil
    }
  }
});
match_l_arm_Cons_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_scrut_arm_Deforest_Arr_2_inst_41_42_26_7_tsni = (undefined, function (l, ls, _deforest_Deforest_Arr_2_0_inst_41_42_26_7_tsni, _deforest_Deforest_Arr_2_1_inst_41_42_26_7_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_42_26_7_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_42_26_7_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_41_42_26_7_tsni(rs_, l, ls);
  tmp2 = NofibPrelude.append(tmp, tmp1);
  return NofibPrelude.append(response, tmp2)
});
match_l_arm_Cons_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni = (undefined, function (_deforest_Cons_head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni, _deforest_Cons_tail_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni) {
  let param0, param1, h, t;
  param0 = _deforest_Cons_head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni;
  h = param0;
  t = param1;
  return h
});
match_scrut_arm_Deforest_Arr_2_inst_44_45_42_26_7_tsni = (undefined, function (l, ls, _deforest_Deforest_Arr_2_0_inst_44_45_42_26_7_tsni, _deforest_Deforest_Arr_2_1_inst_44_45_42_26_7_tsni) {
  let first1, first0, response, rs_, tmp, tmp1, tmp2;
  first0 = _deforest_Deforest_Arr_2_0_inst_44_45_42_26_7_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_44_45_42_26_7_tsni;
  response = first0;
  rs_ = first1;
  tmp = NofibPrelude.nofibStringToList("\n\n");
  tmp1 = session_inst_44_45_42_26_7_tsni(rs_, l, ls);
  tmp2 = append_inst_44_45_42_26_7_47_tsni(tmp, tmp1);
  return append_inst_44_45_42_26_7_48_tsni(response, tmp2)
});
match_xs_arm_Nil_inst_44_45_42_26_6_tsni = (undefined, function (f) {
  return (f1) => {
    return (rs, prev) => {
      return () => {
        return ""
      }
    }
  }
});
match_ls_arm_Cons_inst_44_56_57_tsni = (undefined, function (_deforest_Cons_head_inst_44_56_57_tsni, _deforest_Cons_tail_inst_44_56_57_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_44_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_44_56_57_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_44_56_57_tsni(t);
  return h + tmp
});
words_inst_0_1_tsni = function words_inst_0_1_tsni(s) {
  let scrut;
  scrut = leaveWhile_inst_0_1_2_tsni(eliza1.isSpace, s);
  return runtime.safeCall(scrut())
};
leaveWhile_inst_0_1_2_tsni = function leaveWhile_inst_0_1_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_0_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = words_inst_0_1_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_3_4_tsni = (undefined, function (x) {
  let tmp;
  tmp = eliza1.trim(x);
  return words_inst_3_4_1_tsni(tmp)
});
words_inst_3_4_1_tsni = function words_inst_3_4_1_tsni(s) {
  let scrut;
  scrut = leaveWhile_inst_3_4_1_2_tsni(eliza1.isSpace, s);
  return runtime.safeCall(scrut())
};
leaveWhile_inst_3_4_1_2_tsni = function leaveWhile_inst_3_4_1_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_3_4_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = words_inst_3_4_1_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_3_5_tsni = function take_inst_3_5_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_3_6_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_3_6_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_3_5_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_3_6_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_3_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_3_7_23_tsni(rs);
              } else {
                tmp5 = answer_inst_3_7_8_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_3_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_3_6_tsni = function map_inst_3_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
session_inst_3_7_tsni = function session_inst_3_7_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_3_7_8_tsni = function answer_inst_3_7_8_tsni(st, l) {
  let scrut, first1, first0, response, kt, tmp, tmp1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = eliza.keyTabOf(st);
  scrut = ans_inst_3_7_8_9_tsni(tmp, l);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    first0 = runtime.Tuple.get(scrut, 0);
    first1 = runtime.Tuple.get(scrut, 1);
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    return (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_3_7_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans_inst_3_7_8_9_tsni = function ans_inst_3_7_8_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_3_7_8_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_3_7_8_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_3_7_8_9_10_tsni = function replies_inst_3_7_8_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_3_7_8_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_3_7_8_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_3_7_8_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_3_7_8_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_3_7_8_9_10_11_12_tsni = function lambda$_inst_3_7_8_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_3_7_8_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_3_7_8_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_3_7_8_9_10_11_12_13_tsni = function lz_map_inst_3_7_8_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_3_7_8_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_3_7_8_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_3_7_8_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_3_7_8_9_10_11_12_13_tsni = function lambda$_inst_3_7_8_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_3_7_8_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_3_7_8_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_3_7_8_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_3_7_8_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_3_7_8_9_10_14_15_tsni = function lambda$_inst_3_7_8_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_3_7_8_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_3_7_8_9_10_14_15_16_tsni = function conjug_inst_3_7_8_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_3_7_8_9_10_14_15_16_17_tsni(conj_inst_3_7_8_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_3_7_8_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_3_7_8_9_10_14_15_16_17_tsni = function map_inst_3_7_8_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_7_8_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_3_7_8_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_3_7_8_9_10_14_15_16_18_tsni = function conj_inst_3_7_8_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_3_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_3_7_8_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_3_7_8_9_10_14_15_16_18_53_tsni(tmp2)
};
lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni = function lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_3_7_8_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_3_7_8_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_3_7_8_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_3_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_3_7_8_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_3_7_8_9_10_14_15_16_18_19_20_tsni = function ucase_inst_3_7_8_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_3_7_8_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_3_7_8_9_10_14_15_16_18_19_20_21_tsni = function map_inst_3_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_3_7_8_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_3_7_8_9_10_14_15_16_18_22_tsni = function append_inst_3_7_8_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repeated_inst_3_7_23_tsni = function repeated_inst_3_7_23_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
    first0 = runtime.Tuple.get(kt_rp, 0);
    first1 = runtime.Tuple.get(kt_rp, 1);
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      tmp = globalThis.Object.freeze([
        kt,
        rp
      ]);
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = tmp;
      return (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_3_7_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_3_24_tsni = function filter_inst_3_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
lambda$_inst_25_26_tsni = function lambda$_inst_25_26_tsni(input, i) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.intMod(i, 20);
  tmp1 = take_inst_25_26_5_tsni(tmp, input);
  tmp2 = map_inst_25_26_6_tsni(lambda_inst_25_26_4_tsni, tmp1);
  tmp3 = filter_inst_25_26_24_tsni(lambda9, tmp2);
  return session_inst_25_26_7_tsni(eliza1.initial, NofibPrelude.Nil, tmp3)
};
session_inst_25_26_7_tsni = function session_inst_25_26_7_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_25_26_7_8_tsni = function answer_inst_25_26_7_8_tsni(st, l) {
  let scrut, first1, first0, response, kt, tmp, tmp1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = eliza.keyTabOf(st);
  scrut = ans_inst_25_26_7_8_9_tsni(tmp, l);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    first0 = runtime.Tuple.get(scrut, 0);
    first1 = runtime.Tuple.get(scrut, 1);
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    return (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_25_26_7_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans_inst_25_26_7_8_9_tsni = function ans_inst_25_26_7_8_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_25_26_7_8_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_25_26_7_8_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_25_26_7_8_9_10_tsni = function replies_inst_25_26_7_8_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_25_26_7_8_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_25_26_7_8_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_25_26_7_8_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_25_26_7_8_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_25_26_7_8_9_10_14_15_tsni = function lambda$_inst_25_26_7_8_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_25_26_7_8_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_25_26_7_8_9_10_14_15_16_tsni = function conjug_inst_25_26_7_8_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_25_26_7_8_9_10_14_15_16_17_tsni(conj_inst_25_26_7_8_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_25_26_7_8_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
conj_inst_25_26_7_8_9_10_14_15_16_18_tsni = function conj_inst_25_26_7_8_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_25_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_25_26_7_8_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni(tmp2)
};
append_inst_25_26_7_8_9_10_14_15_16_18_22_tsni = function append_inst_25_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni = function lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_25_26_7_8_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_25_26_7_8_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_25_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_25_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_25_26_7_8_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_25_26_7_8_9_10_14_15_16_18_19_20_tsni = function ucase_inst_25_26_7_8_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_25_26_7_8_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_25_26_7_8_9_10_14_15_16_18_19_20_21_tsni = function map_inst_25_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_25_26_7_8_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_25_26_7_8_9_10_14_15_16_17_tsni = function map_inst_25_26_7_8_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_26_7_8_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_25_26_7_8_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_25_26_7_8_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_25_26_7_8_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_25_26_7_8_9_10_11_12_tsni = function lambda$_inst_25_26_7_8_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_25_26_7_8_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_25_26_7_8_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_25_26_7_8_9_10_11_12_13_tsni = function lz_map_inst_25_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_25_26_7_8_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_25_26_7_8_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_25_26_7_8_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_25_26_7_8_9_10_11_12_13_tsni = function lambda$_inst_25_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_25_26_7_8_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_25_26_7_8_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
repeated_inst_25_26_7_23_tsni = function repeated_inst_25_26_7_23_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
    first0 = runtime.Tuple.get(kt_rp, 0);
    first1 = runtime.Tuple.get(kt_rp, 1);
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      tmp = globalThis.Object.freeze([
        kt,
        rp
      ]);
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = tmp;
      return (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_25_26_7_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_25_26_24_tsni = function filter_inst_25_26_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_25_26_6_tsni = function map_inst_25_26_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_25_26_4_tsni = (undefined, function (x) {
  let tmp;
  tmp = eliza1.trim(x);
  return words_inst_25_26_4_1_tsni(tmp)
});
words_inst_25_26_4_1_tsni = function words_inst_25_26_4_1_tsni(s) {
  let scrut;
  scrut = leaveWhile_inst_25_26_4_1_2_tsni(eliza1.isSpace, s);
  return runtime.safeCall(scrut())
};
leaveWhile_inst_25_26_4_1_2_tsni = function leaveWhile_inst_25_26_4_1_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_25_26_4_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = words_inst_25_26_4_1_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_25_26_5_tsni = function take_inst_25_26_5_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_25_26_6_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_25_26_6_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_25_26_5_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_25_26_6_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_25_26_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_25_26_7_23_tsni(rs);
              } else {
                tmp5 = answer_inst_25_26_7_8_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_25_26_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_27_10_tsni = function replies_inst_27_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_27_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_27_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_27_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_27_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_27_10_14_15_tsni = function lambda$_inst_27_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_27_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_27_10_14_15_16_tsni = function conjug_inst_27_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_27_10_14_15_16_17_tsni(conj_inst_27_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_27_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
conj_inst_27_10_14_15_16_18_tsni = function conj_inst_27_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_27_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_27_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_27_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_27_10_14_15_16_18_53_tsni(tmp2)
};
append_inst_27_10_14_15_16_18_22_tsni = function append_inst_27_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_27_10_14_15_16_18_19_tsni = function lscomp$_inst_27_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_27_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_27_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_27_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_27_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_27_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_27_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_27_10_14_15_16_18_19_20_tsni = function ucase_inst_27_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_27_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_27_10_14_15_16_18_19_20_21_tsni = function map_inst_27_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_27_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_27_10_14_15_16_17_tsni = function map_inst_27_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_27_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_27_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_27_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_27_10_11_12_tsni = function lambda$_inst_27_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_27_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_27_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_27_10_11_12_13_tsni = function lz_map_inst_27_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_27_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_27_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_27_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_27_10_11_12_13_tsni = function lambda$_inst_27_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_27_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_27_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conjug_inst_28_16_tsni = function conjug_inst_28_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_28_16_17_tsni(conj_inst_28_16_18_tsni, tmp);
  tmp2 = trailingI_inst_28_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_28_16_17_tsni = function map_inst_28_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_28_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_28_16_18_tsni = function conj_inst_28_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_28_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_28_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_28_16_18_22_tsni(tmp, tmp1);
  return head_inst_28_16_18_53_tsni(tmp2)
};
lscomp$_inst_28_16_18_19_tsni = function lscomp$_inst_28_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_28_16_18_19_20_tsni(w);
      scrut = listEq_inst_28_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_28_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_28_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_28_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_28_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_28_16_18_19_20_tsni = function ucase_inst_28_16_18_19_20_tsni(ls) {
  return map_inst_28_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_28_16_18_19_20_21_tsni = function map_inst_28_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_28_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_28_16_18_22_tsni = function append_inst_28_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda$_inst_29_15_tsni = function lambda$_inst_29_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_29_15_16_tsni(l, tmp1)
};
conjug_inst_29_15_16_tsni = function conjug_inst_29_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_29_15_16_17_tsni(conj_inst_29_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_29_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
conj_inst_29_15_16_18_tsni = function conj_inst_29_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_29_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_29_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_29_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_29_15_16_18_53_tsni(tmp2)
};
append_inst_29_15_16_18_22_tsni = function append_inst_29_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_29_15_16_18_19_tsni = function lscomp$_inst_29_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_29_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_29_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_29_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_29_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_29_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_29_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_29_15_16_18_19_20_tsni = function ucase_inst_29_15_16_18_19_20_tsni(ls) {
  return map_inst_29_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_29_15_16_18_19_20_21_tsni = function map_inst_29_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_29_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_29_15_16_17_tsni = function map_inst_29_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_29_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lz_map_inst_30_13_tsni = function lz_map_inst_30_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_30_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_30_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_30_13_tsni(f, ls)
  }
});
lambda$_inst_30_13_tsni = function lambda$_inst_30_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_30_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_30_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_31_12_tsni = function lambda$_inst_31_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_31_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_31_12_49_tsni(key, tmp)
};
lz_map_inst_31_12_13_tsni = function lz_map_inst_31_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_31_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_31_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_31_12_13_tsni(f, ls)
  }
});
lambda$_inst_31_12_13_tsni = function lambda$_inst_31_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_31_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_31_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_32_20_tsni = function ucase_inst_32_20_tsni(ls) {
  return map_inst_32_20_21_tsni(eliza.toUpper, ls)
};
map_inst_32_20_21_tsni = function map_inst_32_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_32_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_33_34_tsni = function lscomp$_inst_33_34_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_33_34_20_tsni(w);
      scrut = listEq_inst_33_34_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_33_34_tsni(w, t);
        return NofibPrelude.Cons(m, tmp1)
      } else {
        return lscomp$_inst_33_34_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_33_34_20_tsni = function ucase_inst_33_34_20_tsni(ls) {
  return map_inst_33_34_20_21_tsni(eliza.toUpper, ls)
};
map_inst_33_34_20_21_tsni = function map_inst_33_34_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_34_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_33_34_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp$_inst_35_19_tsni = function lscomp$_inst_35_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_35_19_20_tsni(w);
      scrut = listEq_inst_35_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_35_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_35_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_35_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_35_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_35_19_20_tsni = function ucase_inst_35_19_20_tsni(ls) {
  return map_inst_35_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_35_19_20_21_tsni = function map_inst_35_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_35_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_35_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_35_22_tsni = function append_inst_35_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
leaveWhile_inst_36_2_tsni = function leaveWhile_inst_36_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_36_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = eliza1.words(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_37_18_tsni = function conj_inst_37_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_37_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_37_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_37_18_22_tsni(tmp, tmp1);
  return head_inst_37_18_53_tsni(tmp2)
};
append_inst_37_18_22_tsni = function append_inst_37_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_37_18_19_tsni = function lscomp$_inst_37_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_37_18_19_20_tsni(w);
      scrut = listEq_inst_37_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_37_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_37_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_37_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_37_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_37_18_19_20_tsni = function ucase_inst_37_18_19_20_tsni(ls) {
  return map_inst_37_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_37_18_19_20_21_tsni = function map_inst_37_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_37_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_37_17_tsni = function map_inst_37_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_37_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_38_11_12_tsni(key, ls)
  }
});
lambda$_inst_38_11_12_tsni = function lambda$_inst_38_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_38_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_38_11_12_49_tsni(key, tmp)
};
lz_map_inst_38_11_12_13_tsni = function lz_map_inst_38_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_38_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_38_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_38_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_38_11_12_13_tsni = function lambda$_inst_38_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_38_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_38_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_38_14_15_tsni(key, l, x)
  }
});
lambda$_inst_38_14_15_tsni = function lambda$_inst_38_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_38_14_15_16_tsni(l, tmp1)
};
conjug_inst_38_14_15_16_tsni = function conjug_inst_38_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_38_14_15_16_17_tsni(conj_inst_38_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_38_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_38_14_15_16_17_tsni = function map_inst_38_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_38_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_38_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_38_14_15_16_18_tsni = function conj_inst_38_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_38_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_38_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_38_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_38_14_15_16_18_53_tsni(tmp2)
};
lscomp$_inst_38_14_15_16_18_19_tsni = function lscomp$_inst_38_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_38_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_38_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_38_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_38_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_38_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_38_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_38_14_15_16_18_19_20_tsni = function ucase_inst_38_14_15_16_18_19_20_tsni(ls) {
  return map_inst_38_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_38_14_15_16_18_19_20_21_tsni = function map_inst_38_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_38_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_38_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_38_14_15_16_18_22_tsni = function append_inst_38_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
ans_inst_39_9_tsni = function ans_inst_39_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_39_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_39_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_39_9_10_tsni = function replies_inst_39_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_39_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_39_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_39_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_39_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_39_9_10_11_12_tsni = function lambda$_inst_39_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_39_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_39_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_39_9_10_11_12_13_tsni = function lz_map_inst_39_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_39_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_39_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_39_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_39_9_10_11_12_13_tsni = function lambda$_inst_39_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_39_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_39_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_39_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_39_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_39_9_10_14_15_tsni = function lambda$_inst_39_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_39_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_39_9_10_14_15_16_tsni = function conjug_inst_39_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_39_9_10_14_15_16_17_tsni(conj_inst_39_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_39_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_39_9_10_14_15_16_17_tsni = function map_inst_39_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_39_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_39_9_10_14_15_16_18_tsni = function conj_inst_39_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_39_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_39_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_39_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_39_9_10_14_15_16_18_53_tsni(tmp2)
};
lscomp$_inst_39_9_10_14_15_16_18_19_tsni = function lscomp$_inst_39_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_39_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_39_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_39_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_39_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_39_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_39_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_39_9_10_14_15_16_18_19_20_tsni = function ucase_inst_39_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_39_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_39_9_10_14_15_16_18_19_20_21_tsni = function map_inst_39_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_39_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_39_9_10_14_15_16_18_22_tsni = function append_inst_39_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
answer_inst_40_8_tsni = function answer_inst_40_8_tsni(st, l) {
  let scrut, first1, first0, response, kt, tmp, tmp1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = eliza.keyTabOf(st);
  scrut = ans_inst_40_8_9_tsni(tmp, l);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    first0 = runtime.Tuple.get(scrut, 0);
    first1 = runtime.Tuple.get(scrut, 1);
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    return (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_40_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans_inst_40_8_9_tsni = function ans_inst_40_8_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_40_8_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_40_8_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_40_8_9_10_tsni = function replies_inst_40_8_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_40_8_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_40_8_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_40_8_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_40_8_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_40_8_9_10_14_15_tsni = function lambda$_inst_40_8_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_40_8_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_40_8_9_10_14_15_16_tsni = function conjug_inst_40_8_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_40_8_9_10_14_15_16_17_tsni(conj_inst_40_8_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_40_8_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
conj_inst_40_8_9_10_14_15_16_18_tsni = function conj_inst_40_8_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_40_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_40_8_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_40_8_9_10_14_15_16_18_53_tsni(tmp2)
};
append_inst_40_8_9_10_14_15_16_18_22_tsni = function append_inst_40_8_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni = function lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_40_8_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_40_8_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_40_8_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_40_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_40_8_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_40_8_9_10_14_15_16_18_19_20_tsni = function ucase_inst_40_8_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_40_8_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_40_8_9_10_14_15_16_18_19_20_21_tsni = function map_inst_40_8_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_8_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_40_8_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_40_8_9_10_14_15_16_17_tsni = function map_inst_40_8_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_8_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_40_8_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_8_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_40_8_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_40_8_9_10_11_12_tsni = function lambda$_inst_40_8_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_40_8_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_40_8_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_40_8_9_10_11_12_13_tsni = function lz_map_inst_40_8_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_40_8_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_40_8_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_40_8_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_40_8_9_10_11_12_13_tsni = function lambda$_inst_40_8_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_40_8_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_40_8_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
repeated_inst_40_23_tsni = function repeated_inst_40_23_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
    first0 = runtime.Tuple.get(kt_rp, 0);
    first1 = runtime.Tuple.get(kt_rp, 1);
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      tmp = globalThis.Object.freeze([
        kt,
        rp
      ]);
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = tmp;
      return (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_40_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_41_42_tsni = (undefined, function (input) {
  return (i) => {
    return lambda$_inst_41_42_26_tsni(input, i)
  }
});
lambda$_inst_41_42_26_tsni = function lambda$_inst_41_42_26_tsni(input, i) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.intMod(i, 20);
  tmp1 = take_inst_41_42_26_5_tsni(tmp, input);
  tmp2 = map_inst_41_42_26_6_tsni(lambda_inst_41_42_26_4_tsni, tmp1);
  tmp3 = filter_inst_41_42_26_24_tsni(lambda9, tmp2);
  return session_inst_41_42_26_7_tsni(eliza1.initial, NofibPrelude.Nil, tmp3)
};
lambda_inst_41_42_26_4_tsni = (undefined, function (x) {
  let tmp;
  tmp = eliza1.trim(x);
  return words_inst_41_42_26_4_1_tsni(tmp)
});
words_inst_41_42_26_4_1_tsni = function words_inst_41_42_26_4_1_tsni(s) {
  let scrut;
  scrut = leaveWhile_inst_41_42_26_4_1_2_tsni(eliza1.isSpace, s);
  return runtime.safeCall(scrut())
};
leaveWhile_inst_41_42_26_4_1_2_tsni = function leaveWhile_inst_41_42_26_4_1_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_41_42_26_4_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = words_inst_41_42_26_4_1_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_41_42_26_5_tsni = function take_inst_41_42_26_5_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_41_42_26_6_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_41_42_26_6_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_41_42_26_5_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_41_42_26_6_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_41_42_26_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_41_42_26_7_23_tsni(rs);
              } else {
                tmp5 = answer_inst_41_42_26_7_8_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_41_42_26_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_41_42_26_6_tsni = function map_inst_41_42_26_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
session_inst_41_42_26_7_tsni = function session_inst_41_42_26_7_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_41_42_26_7_8_tsni = function answer_inst_41_42_26_7_8_tsni(st, l) {
  let scrut, first1, first0, response, kt, tmp, tmp1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = eliza.keyTabOf(st);
  scrut = ans_inst_41_42_26_7_8_9_tsni(tmp, l);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    first0 = runtime.Tuple.get(scrut, 0);
    first1 = runtime.Tuple.get(scrut, 1);
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    return (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_41_42_26_7_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans_inst_41_42_26_7_8_9_tsni = function ans_inst_41_42_26_7_8_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_41_42_26_7_8_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_41_42_26_7_8_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_41_42_26_7_8_9_10_tsni = function replies_inst_41_42_26_7_8_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_41_42_26_7_8_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_41_42_26_7_8_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_41_42_26_7_8_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_41_42_26_7_8_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_41_42_26_7_8_9_10_11_12_tsni = function lambda$_inst_41_42_26_7_8_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_41_42_26_7_8_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_41_42_26_7_8_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_41_42_26_7_8_9_10_11_12_13_tsni = function lz_map_inst_41_42_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_41_42_26_7_8_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_41_42_26_7_8_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_41_42_26_7_8_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_41_42_26_7_8_9_10_11_12_13_tsni = function lambda$_inst_41_42_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_41_42_26_7_8_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_41_42_26_7_8_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_41_42_26_7_8_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_41_42_26_7_8_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_41_42_26_7_8_9_10_14_15_tsni = function lambda$_inst_41_42_26_7_8_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_41_42_26_7_8_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_41_42_26_7_8_9_10_14_15_16_tsni = function conjug_inst_41_42_26_7_8_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_41_42_26_7_8_9_10_14_15_16_17_tsni(conj_inst_41_42_26_7_8_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_41_42_26_7_8_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
map_inst_41_42_26_7_8_9_10_14_15_16_17_tsni = function map_inst_41_42_26_7_8_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_42_26_7_8_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_41_42_26_7_8_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
conj_inst_41_42_26_7_8_9_10_14_15_16_18_tsni = function conj_inst_41_42_26_7_8_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_41_42_26_7_8_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni(tmp2)
};
lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni = function lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_41_42_26_7_8_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_41_42_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_41_42_26_7_8_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_tsni = function ucase_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni = function map_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_41_42_26_7_8_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_41_42_26_7_8_9_10_14_15_16_18_22_tsni = function append_inst_41_42_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repeated_inst_41_42_26_7_23_tsni = function repeated_inst_41_42_26_7_23_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
    first0 = runtime.Tuple.get(kt_rp, 0);
    first1 = runtime.Tuple.get(kt_rp, 1);
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      tmp = globalThis.Object.freeze([
        kt,
        rp
      ]);
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = tmp;
      return (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_41_42_26_7_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_41_42_26_24_tsni = function filter_inst_41_42_26_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
enumFromTo_inst_41_43_tsni = function enumFromTo_inst_41_43_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_41_43_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_41_46_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testEliza_nofib_inst_44_45_tsni = function testEliza_nofib_inst_44_45_tsni(n) {
  let input, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, lambda$this;
  tmp = NofibPrelude.nofibStringToList("Are we alone?");
  tmp1 = NofibPrelude.nofibStringToList("That the Roswell event was actually an alien encounter. Do you agreed?");
  tmp2 = NofibPrelude.nofibStringToList("But why not talk about you, its more fun.");
  tmp3 = NofibPrelude.nofibStringToList("I dont ask, you do");
  tmp4 = NofibPrelude.nofibStringToList("do ray me");
  tmp5 = NofibPrelude.nofibStringToList("Nop, thats because your a computer");
  tmp6 = NofibPrelude.nofibStringToList("you dont");
  tmp7 = NofibPrelude.nofibStringToList("Oh, a paranoid computer, ehh?");
  tmp8 = NofibPrelude.nofibStringToList("Tell me about *your* mother");
  tmp9 = NofibPrelude.nofibStringToList("No, what what was she like?");
  tmp10 = NofibPrelude.nofibStringToList("I'm asking questions, not you");
  tmp11 = NofibPrelude.nofibStringToList("no");
  tmp12 = NofibPrelude.nofibStringToList("yes");
  tmp13 = NofibPrelude.nofibStringToList("but I'm not");
  tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
  tmp15 = NofibPrelude.Cons(tmp12, tmp14);
  tmp16 = NofibPrelude.Cons(tmp11, tmp15);
  tmp17 = NofibPrelude.Cons(tmp10, tmp16);
  tmp18 = NofibPrelude.Cons(tmp9, tmp17);
  tmp19 = NofibPrelude.Cons(tmp8, tmp18);
  tmp20 = NofibPrelude.Cons(tmp7, tmp19);
  tmp21 = NofibPrelude.Cons(tmp6, tmp20);
  tmp22 = NofibPrelude.Cons(tmp5, tmp21);
  tmp23 = NofibPrelude.Cons(tmp4, tmp22);
  tmp24 = NofibPrelude.Cons(tmp3, tmp23);
  tmp25 = NofibPrelude.Cons(tmp2, tmp24);
  tmp26 = NofibPrelude.Cons(tmp1, tmp25);
  tmp27 = NofibPrelude.Cons(tmp, tmp26);
  input = Predef.id(tmp27);
  tmp28 = enumFromTo_inst_44_45_43_tsni(1, n);
  lambda$this = runtime.safeCall(lambda_inst_44_45_42_tsni(input));
  return map_inst_44_45_46_tsni(lambda$this, tmp28)
};
lambda_inst_44_45_42_tsni = (undefined, function (input) {
  return (i) => {
    return lambda$_inst_44_45_42_26_tsni(input, i)
  }
});
lambda$_inst_44_45_42_26_tsni = function lambda$_inst_44_45_42_26_tsni(input, i) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.intMod(i, 20);
  tmp1 = take_inst_44_45_42_26_5_tsni(tmp, input);
  tmp2 = map_inst_44_45_42_26_6_tsni(lambda_inst_44_45_42_26_4_tsni, tmp1);
  tmp3 = filter_inst_44_45_42_26_24_tsni(lambda9, tmp2);
  return session_inst_44_45_42_26_7_tsni(eliza1.initial, NofibPrelude.Nil, tmp3)
};
session_inst_44_45_42_26_7_tsni = function session_inst_44_45_42_26_7_tsni(rs, prev, ls) {
  return runtime.safeCall(ls(rs, prev))
};
answer_inst_44_45_42_26_7_8_tsni = function answer_inst_44_45_42_26_7_8_tsni(st, l) {
  let scrut, first1, first0, response, kt, tmp, tmp1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = eliza.keyTabOf(st);
  scrut = ans_inst_44_45_42_26_7_8_9_tsni(tmp, l);
  if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
    first0 = runtime.Tuple.get(scrut, 0);
    first1 = runtime.Tuple.get(scrut, 1);
    response = first0;
    kt = first1;
    tmp1 = eliza.newKeyTab(kt, st);
    _deforest_Deforest_Arr_2_0 = response;
    _deforest_Deforest_Arr_2_1 = tmp1;
    return (l1, ls) => {
      return match_scrut_arm_Deforest_Arr_2_inst_44_45_42_26_7_tsni(l1, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans_inst_44_45_42_26_7_8_9_tsni = function ans_inst_44_45_42_26_7_8_9_tsni(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_44_45_42_26_7_8_9_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans_inst_44_45_42_26_7_8_9_tsni(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
replies_inst_44_45_42_26_7_8_9_10_tsni = function replies_inst_44_45_42_26_7_8_9_10_tsni(key, l) {
  let tmp, tmp1, lambda$this, lambda$this1;
  tmp = eliza.tails(l);
  lambda$this = runtime.safeCall(lambda_inst_44_45_42_26_7_8_9_10_11_tsni(key));
  tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
  lambda$this1 = runtime.safeCall(lambda_inst_44_45_42_26_7_8_9_10_14_tsni(key, l));
  return NofibPrelude.map_lz(lambda$this1, tmp1)
};
lambda_inst_44_45_42_26_7_8_9_10_14_tsni = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_44_45_42_26_7_8_9_10_14_15_tsni(key, l, x)
  }
});
lambda$_inst_44_45_42_26_7_8_9_10_14_15_tsni = function lambda$_inst_44_45_42_26_7_8_9_10_14_15_tsni(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_44_45_42_26_7_8_9_10_14_15_16_tsni(l, tmp1)
};
conjug_inst_44_45_42_26_7_8_9_10_14_15_16_tsni = function conjug_inst_44_45_42_26_7_8_9_10_14_15_16_tsni(d, w) {
  let tmp, tmp1, tmp2;
  tmp = maybe(d, w);
  tmp1 = map_inst_44_45_42_26_7_8_9_10_14_15_16_17_tsni(conj_inst_44_45_42_26_7_8_9_10_14_15_16_18_tsni, tmp);
  tmp2 = trailingI_inst_44_45_42_26_7_8_9_10_14_15_16_50_tsni(tmp1);
  return eliza.unwords(tmp2)
};
conj_inst_44_45_42_26_7_8_9_10_14_15_16_18_tsni = function conj_inst_44_45_42_26_7_8_9_10_14_15_16_18_tsni(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_44_45_42_26_7_8_9_10_14_15_16_18_22_tsni(tmp, tmp1);
  return head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni(tmp2)
};
append_inst_44_45_42_26_7_8_9_10_14_15_16_18_22_tsni = function append_inst_44_45_42_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni = function lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_tsni(w);
      scrut = listEq_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni(w, t);
        _deforest_Cons_head = m;
        _deforest_Cons_tail = tmp1;
        return (ys) => {
          let param01, param11, x, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          x = param01;
          xs = param11;
          tmp2 = append_inst_44_45_42_26_7_8_9_10_14_15_16_18_22_tsni(xs, ys);
          _deforest_Cons_head1 = x;
          _deforest_Cons_tail1 = tmp2;
          return () => {
            return match_l_arm_Cons_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
          }
        }
      } else {
        return lscomp$_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_tsni(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ucase_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_tsni = function ucase_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_tsni(ls) {
  return map_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(eliza.toUpper, ls)
};
map_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni = function map_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param01, param11, hx, tx, param02, param12, hy, ty, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      hx = param01;
      tx = param11;
      if (ys instanceof NofibPrelude.Cons.class) {
        param02 = ys.head;
        param12 = ys.tail;
        hy = param02;
        ty = param12;
        scrut = hx == hy;
        if (scrut === true) {
          return listEq_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_52_tsni(tx, ty)
        } else {
          return false
        }
      } else {
        return false
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      if (ys instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_44_45_42_26_7_8_9_10_14_15_16_17_tsni = function map_inst_44_45_42_26_7_8_9_10_14_15_16_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_45_42_26_7_8_9_10_14_15_16_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_44_45_42_26_7_8_9_10_14_15_16_50_51_tsni(f1, z, t);
      return runtime.safeCall(f1(h, tmp2))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1, z) => {
      return z
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_44_45_42_26_7_8_9_10_11_tsni = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_44_45_42_26_7_8_9_10_11_12_tsni(key, ls)
  }
});
lambda$_inst_44_45_42_26_7_8_9_10_11_12_tsni = function lambda$_inst_44_45_42_26_7_8_9_10_11_12_tsni(key, ls) {
  let tmp;
  tmp = lz_map_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(eliza1.ucase, ls);
  return prefix_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(key, tmp)
};
lz_map_inst_44_45_42_26_7_8_9_10_11_12_13_tsni = function lz_map_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(f, ls));
  return NofibPrelude.lazy(lambda$this)
};
lambda_inst_44_45_42_26_7_8_9_10_11_12_13_tsni = (undefined, function (f, ls) {
  return () => {
    return lambda$_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(f, ls)
  }
});
lambda$_inst_44_45_42_26_7_8_9_10_11_12_13_tsni = function lambda$_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(f, ls) {
  let param0, param1, h, t, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (x, xs) => {
      return false
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = lz_map_inst_44_45_42_26_7_8_9_10_11_12_13_tsni(f, t);
    _deforest_LzCons_head = tmp;
    _deforest_LzCons_tail = tmp1;
    return (x, xs) => {
      let param01, param11, y, ys, tmp2, lambda$this;
      param01 = _deforest_LzCons_head;
      param11 = _deforest_LzCons_tail;
      y = param01;
      ys = param11;
      tmp2 = NofibPrelude.listEq(x, y);
      lambda$this = runtime.safeCall(lambda_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(xs, ys));
      return runtime.short_and(tmp2, lambda$this)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
repeated_inst_44_45_42_26_7_23_tsni = function repeated_inst_44_45_42_26_7_23_tsni(kt_rp) {
  let first1, first0, kt, param0, param1, r, rp, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
    first0 = runtime.Tuple.get(kt_rp, 0);
    first1 = runtime.Tuple.get(kt_rp, 1);
    kt = first0;
    if (first1 instanceof NofibPrelude.Cons.class) {
      param0 = first1.head;
      param1 = first1.tail;
      r = param0;
      rp = param1;
      tmp = globalThis.Object.freeze([
        kt,
        rp
      ]);
      _deforest_Deforest_Arr_2_0 = r;
      _deforest_Deforest_Arr_2_1 = tmp;
      return (l, ls) => {
        return match_scrut_arm_Deforest_Arr_2_inst_44_45_42_26_7_tsni(l, ls, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_44_45_42_26_24_tsni = function filter_inst_44_45_42_26_24_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
map_inst_44_45_42_26_6_tsni = function map_inst_44_45_42_26_6_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_44_45_42_26_4_tsni = (undefined, function (x) {
  let tmp;
  tmp = eliza1.trim(x);
  return words_inst_44_45_42_26_4_1_tsni(tmp)
});
words_inst_44_45_42_26_4_1_tsni = function words_inst_44_45_42_26_4_1_tsni(s) {
  let scrut;
  scrut = leaveWhile_inst_44_45_42_26_4_1_2_tsni(eliza1.isSpace, s);
  return runtime.safeCall(scrut())
};
leaveWhile_inst_44_45_42_26_4_1_2_tsni = function leaveWhile_inst_44_45_42_26_4_1_2_tsni(f, ls) {
  let param0, param1, h, t, scrut, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      return leaveWhile_inst_44_45_42_26_4_1_2_tsni(f, t)
    } else {
      _deforest_Cons_head = h;
      _deforest_Cons_tail = t;
      return () => {
        let param01, param11, h2h, t2t, scrut1, first1, first0, w, s_, tmp, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        h2h = param01;
        t2t = param11;
        tmp = NofibPrelude.Cons(h2h, t2t);
        scrut1 = NofibPrelude.break_(eliza1.isSpace, tmp);
        if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
          first0 = runtime.Tuple.get(scrut1, 0);
          first1 = runtime.Tuple.get(scrut1, 1);
          w = first0;
          s_ = first1;
          tmp1 = words_inst_44_45_42_26_4_1_tsni(s_);
          return NofibPrelude.Cons(w, tmp1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_44_45_42_26_5_tsni = function take_inst_44_45_42_26_5_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_44_45_42_26_6_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_44_45_42_26_6_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_44_45_42_26_5_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        let param01, param11, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp2 = runtime.safeCall(f(x));
        tmp3 = map_inst_44_45_42_26_6_tsni(f, xs);
        _deforest_Cons_head1 = tmp2;
        _deforest_Cons_tail1 = tmp3;
        return (f1) => {
          let param02, param12, h1, t1, scrut1, tmp4, _deforest_Cons_head2, _deforest_Cons_tail2;
          param02 = _deforest_Cons_head1;
          param12 = _deforest_Cons_tail1;
          h1 = param02;
          t1 = param12;
          scrut1 = runtime.safeCall(f1(h1));
          if (scrut1 === true) {
            tmp4 = filter_inst_44_45_42_26_24_tsni(f1, t1);
            _deforest_Cons_head2 = h1;
            _deforest_Cons_tail2 = tmp4;
            return (rs, prev) => {
              let param03, param13, l, ls1, scrut2, scrut3, tmp5;
              param03 = _deforest_Cons_head2;
              param13 = _deforest_Cons_tail2;
              l = param03;
              ls1 = param13;
              scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
              if (scrut2 === true) {
                tmp5 = repeated_inst_44_45_42_26_7_23_tsni(rs);
              } else {
                tmp5 = answer_inst_44_45_42_26_7_8_tsni(rs, l);
              }
              scrut3 = tmp5;
              return runtime.safeCall(scrut3(l, ls1))
            }
          } else {
            return filter_inst_44_45_42_26_24_tsni(f1, t1)
          }
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
enumFromTo_inst_44_45_43_tsni = function enumFromTo_inst_44_45_43_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_44_45_43_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_44_45_46_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp2 = runtime.safeCall(f1(x));
        tmp3 = map_inst_44_55_tsni(f1, xs);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    }
  } else {
    return (f) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_44_45_46_tsni = function map_inst_44_45_46_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_44_45_42_26_7_47_tsni = function append_inst_44_45_42_26_7_47_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_44_45_42_26_7_47_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_44_56_57_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_44_45_42_26_7_48_tsni = function append_inst_44_45_42_26_7_48_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_44_45_42_26_7_48_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_44_56_57_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prefix_inst_3_7_8_9_10_11_12_49_tsni = function prefix_inst_3_7_8_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_3_7_8_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_3_7_8_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_3_7_8_9_10_11_12_49_tsni = function lambda$_inst_3_7_8_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_3_7_8_9_10_11_12_49_tsni(xs, ys)
};
trailingI_inst_3_7_8_9_10_14_15_16_50_tsni = function trailingI_inst_3_7_8_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_3_7_8_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_3_7_8_9_10_14_15_16_50_51_tsni = function foldr_inst_3_7_8_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_3_7_8_9_10_14_15_16_18_19_52_tsni = function listEq_inst_3_7_8_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_3_7_8_9_10_14_15_16_18_53_tsni = function head_inst_3_7_8_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni = function head_inst_25_26_7_8_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_25_26_7_8_9_10_14_15_16_18_19_52_tsni = function listEq_inst_25_26_7_8_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_25_26_7_8_9_10_14_15_16_50_tsni = function trailingI_inst_25_26_7_8_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_25_26_7_8_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_25_26_7_8_9_10_14_15_16_50_51_tsni = function foldr_inst_25_26_7_8_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_25_26_7_8_9_10_11_12_49_tsni = function prefix_inst_25_26_7_8_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_25_26_7_8_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_25_26_7_8_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_25_26_7_8_9_10_11_12_49_tsni = function lambda$_inst_25_26_7_8_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_25_26_7_8_9_10_11_12_49_tsni(xs, ys)
};
head_inst_27_10_14_15_16_18_53_tsni = function head_inst_27_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_27_10_14_15_16_18_19_52_tsni = function listEq_inst_27_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_27_10_14_15_16_50_tsni = function trailingI_inst_27_10_14_15_16_50_tsni(ls) {
  return foldr_inst_27_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_27_10_14_15_16_50_51_tsni = function foldr_inst_27_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_27_10_11_12_49_tsni = function prefix_inst_27_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_27_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_27_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_27_10_11_12_49_tsni = function lambda$_inst_27_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_27_10_11_12_49_tsni(xs, ys)
};
trailingI_inst_28_16_50_tsni = function trailingI_inst_28_16_50_tsni(ls) {
  return foldr_inst_28_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_28_16_50_51_tsni = function foldr_inst_28_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_28_16_18_19_52_tsni = function listEq_inst_28_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_28_16_18_53_tsni = function head_inst_28_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
head_inst_29_15_16_18_53_tsni = function head_inst_29_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_29_15_16_18_19_52_tsni = function listEq_inst_29_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_29_15_16_50_tsni = function trailingI_inst_29_15_16_50_tsni(ls) {
  return foldr_inst_29_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_29_15_16_50_51_tsni = function foldr_inst_29_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_30_49_tsni = function prefix_inst_30_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_30_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_30_49_tsni(xs, ys)
  }
});
lambda$_inst_30_49_tsni = function lambda$_inst_30_49_tsni(xs, ys) {
  return prefix_inst_30_49_tsni(xs, ys)
};
prefix_inst_31_12_49_tsni = function prefix_inst_31_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_31_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_31_12_49_tsni(xs, ys)
  }
});
lambda$_inst_31_12_49_tsni = function lambda$_inst_31_12_49_tsni(xs, ys) {
  return prefix_inst_31_12_49_tsni(xs, ys)
};
listEq_inst_32_52_tsni = function listEq_inst_32_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listEq_inst_33_34_52_tsni = function listEq_inst_33_34_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listEq_inst_35_19_52_tsni = function listEq_inst_35_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_35_53_tsni = function head_inst_35_53_tsni(l) {
  return runtime.safeCall(l())
};
append_inst_54_tsni = function append_inst_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_37_18_53_tsni = function head_inst_37_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_37_18_19_52_tsni = function listEq_inst_37_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_37_50_tsni = function trailingI_inst_37_50_tsni(ls) {
  return foldr_inst_37_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_37_50_51_tsni = function foldr_inst_37_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_38_11_12_49_tsni = function prefix_inst_38_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_38_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_38_11_12_49_tsni = function lambda$_inst_38_11_12_49_tsni(xs, ys) {
  return prefix_inst_38_11_12_49_tsni(xs, ys)
};
trailingI_inst_38_14_15_16_50_tsni = function trailingI_inst_38_14_15_16_50_tsni(ls) {
  return foldr_inst_38_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_38_14_15_16_50_51_tsni = function foldr_inst_38_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_38_14_15_16_18_19_52_tsni = function listEq_inst_38_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_38_14_15_16_18_53_tsni = function head_inst_38_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
prefix_inst_39_9_10_11_12_49_tsni = function prefix_inst_39_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_39_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_39_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_39_9_10_11_12_49_tsni = function lambda$_inst_39_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_39_9_10_11_12_49_tsni(xs, ys)
};
trailingI_inst_39_9_10_14_15_16_50_tsni = function trailingI_inst_39_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_39_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_39_9_10_14_15_16_50_51_tsni = function foldr_inst_39_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_39_9_10_14_15_16_18_19_52_tsni = function listEq_inst_39_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_39_9_10_14_15_16_18_53_tsni = function head_inst_39_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
head_inst_40_8_9_10_14_15_16_18_53_tsni = function head_inst_40_8_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_40_8_9_10_14_15_16_18_19_52_tsni = function listEq_inst_40_8_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_40_8_9_10_14_15_16_50_tsni = function trailingI_inst_40_8_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_40_8_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_40_8_9_10_14_15_16_50_51_tsni = function foldr_inst_40_8_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_40_8_9_10_11_12_49_tsni = function prefix_inst_40_8_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_8_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_40_8_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_40_8_9_10_11_12_49_tsni = function lambda$_inst_40_8_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_40_8_9_10_11_12_49_tsni(xs, ys)
};
prefix_inst_41_42_26_7_8_9_10_11_12_49_tsni = function prefix_inst_41_42_26_7_8_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_41_42_26_7_8_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_41_42_26_7_8_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_41_42_26_7_8_9_10_11_12_49_tsni = function lambda$_inst_41_42_26_7_8_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_41_42_26_7_8_9_10_11_12_49_tsni(xs, ys)
};
trailingI_inst_41_42_26_7_8_9_10_14_15_16_50_tsni = function trailingI_inst_41_42_26_7_8_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_41_42_26_7_8_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_41_42_26_7_8_9_10_14_15_16_50_51_tsni = function foldr_inst_41_42_26_7_8_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
listEq_inst_41_42_26_7_8_9_10_14_15_16_18_19_52_tsni = function listEq_inst_41_42_26_7_8_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni = function head_inst_41_42_26_7_8_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
map_inst_41_46_tsni = function map_inst_41_46_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni = function head_inst_44_45_42_26_7_8_9_10_14_15_16_18_53_tsni(l) {
  return runtime.safeCall(l())
};
listEq_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_52_tsni = function listEq_inst_44_45_42_26_7_8_9_10_14_15_16_18_19_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
trailingI_inst_44_45_42_26_7_8_9_10_14_15_16_50_tsni = function trailingI_inst_44_45_42_26_7_8_9_10_14_15_16_50_tsni(ls) {
  return foldr_inst_44_45_42_26_7_8_9_10_14_15_16_50_51_tsni(cons1, NofibPrelude.Nil, ls)
};
foldr_inst_44_45_42_26_7_8_9_10_14_15_16_50_51_tsni = function foldr_inst_44_45_42_26_7_8_9_10_14_15_16_50_51_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prefix_inst_44_45_42_26_7_8_9_10_11_12_49_tsni = function prefix_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(xxs, yys) {
  let param0, param1, x, xs, scrut;
  if (xxs instanceof NofibPrelude.Nil.class) {
    return true
  } else if (xxs instanceof NofibPrelude.Cons.class) {
    param0 = xxs.head;
    param1 = xxs.tail;
    x = param0;
    xs = param1;
    scrut = NofibPrelude.force(yys);
    return runtime.safeCall(scrut(x, xs))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_44_45_42_26_7_8_9_10_11_12_49_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(xs, ys)
  }
});
lambda$_inst_44_45_42_26_7_8_9_10_11_12_49_tsni = function lambda$_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(xs, ys) {
  return prefix_inst_44_45_42_26_7_8_9_10_11_12_49_tsni(xs, ys)
};
map_inst_44_55_tsni = function map_inst_44_55_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_44_56_tsni = (undefined, function (x) {
  return nofibListToString_inst_44_56_57_tsni(x)
});
nofibListToString_inst_44_56_57_tsni = function nofibListToString_inst_44_56_57_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda13 = (undefined, function (caseScrut) {
  let first1, first0, w, r, tmp;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    w = first0;
    r = first1;
    tmp = eliza1.ucase(w);
    return globalThis.Object.freeze([
      tmp,
      r
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
lambda12 = (undefined, function (x) {
  return NofibPrelude.nofibListToString(x)
});
lambda9 = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.null_(x);
  return ! tmp
});
lambda10 = (undefined, function (x) {
  let tmp;
  tmp = eliza1.trim(x);
  return words_inst_0_1_tsni(tmp)
});
lambda$8 = function lambda$(input, i) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.intMod(i, 20);
  tmp1 = take_inst_3_5_tsni(tmp, input);
  tmp2 = map_inst_3_6_tsni(lambda_inst_3_4_tsni, tmp1);
  tmp3 = filter_inst_3_24_tsni(lambda9, tmp2);
  return session_inst_3_7_tsni(eliza1.initial, NofibPrelude.Nil, tmp3)
};
lambda11 = (undefined, function (input) {
  return (i) => {
    return lambda$_inst_25_26_tsni(input, i)
  }
});
cons2 = function cons(e, r_es) {
  let first1, first0, r, es, tmp;
  if (runtime.Tuple.isArrayLike(r_es) && r_es.length === 2) {
    first0 = runtime.Tuple.get(r_es, 0);
    first1 = runtime.Tuple.get(r_es, 1);
    r = first0;
    es = first1;
    tmp = NofibPrelude.Cons(e, es);
    return globalThis.Object.freeze([
      r,
      tmp
    ])
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ans = function ans(e_es, l) {
  let param0, param1, first1, first0, key, a_as, es, scrut, param01, param11, a, as_, rs, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  if (e_es instanceof NofibPrelude.Cons.class) {
    param0 = e_es.head;
    param1 = e_es.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      key = first0;
      a_as = first1;
      es = param1;
      scrut = NofibPrelude.force(a_as);
      if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        a = param01;
        as_ = param11;
        rs = replies_inst_27_10_tsni(key, l);
        scrut1 = eliza1.null_lz(rs);
        if (scrut1 === true) {
          tmp = globalThis.Object.freeze([
            key,
            a_as
          ]);
          tmp1 = ans(es, l);
          return cons2(tmp, tmp1)
        } else {
          tmp2 = NofibPrelude.head_lz(rs);
          tmp3 = eliza1.makeResponse(a, tmp2);
          tmp4 = globalThis.Object.freeze([
            key,
            as_
          ]);
          tmp5 = NofibPrelude.Cons(tmp4, es);
          return globalThis.Object.freeze([
            tmp3,
            tmp5
          ])
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$7 = function lambda$(key, l, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.listLen(key);
  tmp1 = NofibPrelude.leave(tmp, x);
  return conjug_inst_28_16_tsni(l, tmp1)
};
lambda7 = (undefined, function (key, l) {
  return (x) => {
    return lambda$_inst_29_15_tsni(key, l, x)
  }
});
lambda$6 = function lambda$(key, ls) {
  let tmp;
  tmp = lz_map_inst_30_13_tsni(eliza1.ucase, ls);
  return prefix_inst_30_49_tsni(key, tmp)
};
lambda8 = (undefined, function (key) {
  return (ls) => {
    return lambda$_inst_31_12_tsni(key, ls)
  }
});
maybe = function maybe(d, xs) {
  let scrut;
  scrut = NofibPrelude.null_(xs);
  if (scrut === true) {
    return d
  } else {
    return xs
  }
};
lscomp$ = function lscomp$(w, ls) {
  let param0, param1, first1, first0, w_, m, t, scrut, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      w_ = first0;
      m = first1;
      t = param1;
      tmp = ucase_inst_32_20_tsni(w);
      scrut = listEq_inst_32_52_tsni(tmp, w_);
      if (scrut === true) {
        tmp1 = lscomp$(w, t);
        return NofibPrelude.Cons(m, tmp1)
      } else {
        return lscomp$(w, t)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(w) {
  return (ls) => {
    return lscomp$_inst_33_34_tsni(w, ls)
  }
};
conj = function conj(w) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = lscomp$_inst_35_19_tsni(w, eliza1.conjugates);
  _deforest_Cons_head = w;
  _deforest_Cons_tail = NofibPrelude.Nil;
  tmp1 = () => {
    return match_l_arm_Cons_inst_35_53_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = append_inst_35_22_tsni(tmp, tmp1);
  return head_inst_35_53_tsni(tmp2)
};
lambda$5 = function lambda$(xs) {
  return NofibPrelude.null_(xs)
};
lambda6 = (undefined, function (xs) {
  return () => {
    return lambda$5(xs)
  }
});
cons1 = function cons(x, xs) {
  let scrut, tmp, tmp1, tmp2, lambda$this;
  tmp = NofibPrelude.nofibStringToList("I");
  tmp1 = NofibPrelude.listEq(x, tmp);
  lambda$this = runtime.safeCall(lambda6(xs));
  scrut = runtime.short_and(tmp1, lambda$this);
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("me");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    return NofibPrelude.Cons(x, xs)
  }
};
trailingI = function trailingI(ls) {
  return NofibPrelude.foldr(cons1, NofibPrelude.Nil, ls)
};
lambda$4 = function lambda$(xs) {
  let xss, tmp, tmp1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.LzNil
  } else {
    xss = xs;
    tmp = NofibPrelude.tail(xss);
    tmp1 = eliza1.tails(tmp);
    return NofibPrelude.LzCons(xss, tmp1)
  }
};
lambda5 = (undefined, function (xs) {
  return () => {
    return lambda$4(xs)
  }
});
lambda$3 = function lambda$(xs, ys) {
  return eliza1.prefix(xs, ys)
};
lambda4 = (undefined, function (xs, ys) {
  return () => {
    return lambda$3(xs, ys)
  }
});
cons = function cons(x, xs) {
  let scrut, scrut1, tmp;
  tmp = NofibPrelude.nofibStringToList(" .!?,");
  scrut = NofibPrelude.inList(x, tmp);
  if (scrut === true) {
    scrut1 = NofibPrelude.null_(xs);
    if (scrut1 === true) {
      return NofibPrelude.Nil
    } else {
      return NofibPrelude.Cons(x, xs)
    }
  } else {
    return NofibPrelude.Cons(x, xs)
  }
};
lambda3 = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.nofibStringToList(" .!?,");
  return NofibPrelude.inList(x, tmp)
});
go = function go(ws) {
  let param0, param1, w, ws1, tmp, tmp1;
  if (ws instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ws instanceof NofibPrelude.Cons.class) {
    param0 = ws.head;
    param1 = ws.tail;
    w = param0;
    ws1 = param1;
    tmp = go(ws1);
    tmp1 = NofibPrelude.append(w, tmp);
    return NofibPrelude.Cons(" ", tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$2 = function lambda$(xs) {
  return eliza1.cycle(xs)
};
lambda2 = (undefined, function (xs) {
  return () => {
    return lambda$2(xs)
  }
});
lambda$1 = function lambda$(ys, h, t) {
  let tmp;
  tmp = eliza1.append_lz(t, ys);
  return NofibPrelude.LzCons(h, tmp)
};
lambda1 = (undefined, function (ys, h, t) {
  return () => {
    return lambda$1(ys, h, t)
  }
});
lambda$ = function lambda$(f, ls) {
  let param0, param1, h, t, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.LzNil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = runtime.safeCall(f(h));
    tmp1 = eliza1.lz_map(f, t);
    return NofibPrelude.LzCons(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda = (undefined, function (f, ls) {
  return () => {
    return lambda$(f, ls)
  }
});
globalThis.Object.freeze(class eliza {
  static {
    eliza1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    let lscomp1, prepare, lscomp2, canYou, canI, youAre, iDont, iFeel, whyDont, whyCant, areYou, iCant, iAm, you, yes, no, computer, iWant, question, name, because, sorry, dream, hello, maybe1, your, always, think, alike, friend, nokeyMsgs, oneways, bothways, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, tmp336, tmp337, tmp338, tmp339, tmp340, tmp341, tmp342, tmp343, tmp344, tmp345, tmp346, tmp347, tmp348, tmp349, tmp350, tmp351, tmp352, tmp353, _deforest_Cons_head, _deforest_Cons_tail;
    tmp = NofibPrelude.nofibStringToList("Why did you repeat yourself?");
    tmp1 = NofibPrelude.nofibStringToList("Do you expect a different answer by repeating yourself?");
    tmp2 = NofibPrelude.nofibStringToList("Come, come, elucidate your thoughts.");
    tmp3 = NofibPrelude.nofibStringToList("Please don't repeat yourself!");
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = Predef.id(tmp7);
    this.repeatMsgs = tmp8;
    tmp9 = NofibPrelude.nofibStringToList("?Don_t you believe that I can");
    tmp10 = NofibPrelude.nofibStringToList("?Perhaps you would like to be able to");
    tmp11 = NofibPrelude.nofibStringToList("?You want me to be able to");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    canYou = NofibPrelude.Cons(tmp9, tmp13);
    tmp14 = NofibPrelude.nofibStringToList("?Perhaps you don_t want to");
    tmp15 = NofibPrelude.nofibStringToList("?Do you want to be able to");
    tmp16 = NofibPrelude.Cons(tmp15, NofibPrelude.Nil);
    canI = NofibPrelude.Cons(tmp14, tmp16);
    tmp17 = NofibPrelude.nofibStringToList("?What makes you think I am");
    tmp18 = NofibPrelude.nofibStringToList("?Does it please you to believe I am");
    tmp19 = NofibPrelude.nofibStringToList("?Perhaps you would like to be");
    tmp20 = NofibPrelude.nofibStringToList("?Do you sometimes wish you were");
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp19, tmp21);
    tmp23 = NofibPrelude.Cons(tmp18, tmp22);
    youAre = NofibPrelude.Cons(tmp17, tmp23);
    tmp24 = NofibPrelude.nofibStringToList("?Don_t you really");
    tmp25 = NofibPrelude.nofibStringToList("?Why don_t you");
    tmp26 = NofibPrelude.nofibStringToList("?Do you wish to be able to");
    tmp27 = NofibPrelude.nofibStringToList("Does that trouble you?");
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(tmp26, tmp28);
    tmp30 = NofibPrelude.Cons(tmp25, tmp29);
    iDont = NofibPrelude.Cons(tmp24, tmp30);
    tmp31 = NofibPrelude.nofibStringToList("Tell me more about such feelings.");
    tmp32 = NofibPrelude.nofibStringToList("?Do you often feel");
    tmp33 = NofibPrelude.nofibStringToList("?Do you enjoy feeling");
    tmp34 = NofibPrelude.Cons(tmp33, NofibPrelude.Nil);
    tmp35 = NofibPrelude.Cons(tmp32, tmp34);
    iFeel = NofibPrelude.Cons(tmp31, tmp35);
    tmp36 = NofibPrelude.nofibStringToList("?Do you really believe I don't");
    tmp37 = NofibPrelude.nofibStringToList(".Perhaps in good time I will");
    tmp38 = NofibPrelude.nofibStringToList("?Do you want me to");
    tmp39 = NofibPrelude.Cons(tmp38, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(tmp37, tmp39);
    whyDont = NofibPrelude.Cons(tmp36, tmp40);
    tmp41 = NofibPrelude.nofibStringToList("?Do you think you should be able to");
    tmp42 = NofibPrelude.nofibStringToList("?Why can't you");
    tmp43 = NofibPrelude.Cons(tmp42, NofibPrelude.Nil);
    whyCant = NofibPrelude.Cons(tmp41, tmp43);
    tmp44 = NofibPrelude.nofibStringToList("?Why are you interested in whether or not I am");
    tmp45 = NofibPrelude.nofibStringToList("?Would you prefer if I were not");
    tmp46 = NofibPrelude.nofibStringToList("?Perhaps in your fantasies I am");
    tmp47 = NofibPrelude.Cons(tmp46, NofibPrelude.Nil);
    tmp48 = NofibPrelude.Cons(tmp45, tmp47);
    areYou = NofibPrelude.Cons(tmp44, tmp48);
    tmp49 = NofibPrelude.nofibStringToList("?How do you know you can't");
    tmp50 = NofibPrelude.nofibStringToList("Have you tried?");
    tmp51 = NofibPrelude.nofibStringToList("?Perhaps you can now");
    tmp52 = NofibPrelude.Cons(tmp51, NofibPrelude.Nil);
    tmp53 = NofibPrelude.Cons(tmp50, tmp52);
    iCant = NofibPrelude.Cons(tmp49, tmp53);
    tmp54 = NofibPrelude.nofibStringToList("?Did you come to me because you are");
    tmp55 = NofibPrelude.nofibStringToList("?How long have you been");
    tmp56 = NofibPrelude.nofibStringToList("?Do you believe it is normal to be");
    tmp57 = NofibPrelude.nofibStringToList("?Do you enjoy being");
    tmp58 = NofibPrelude.Cons(tmp57, NofibPrelude.Nil);
    tmp59 = NofibPrelude.Cons(tmp56, tmp58);
    tmp60 = NofibPrelude.Cons(tmp55, tmp59);
    iAm = NofibPrelude.Cons(tmp54, tmp60);
    tmp61 = NofibPrelude.nofibStringToList("We were discussing you --not me.");
    tmp62 = NofibPrelude.nofibStringToList("?Oh,");
    tmp63 = NofibPrelude.nofibStringToList("You're not really talking about me, are you?");
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp62, tmp64);
    you = NofibPrelude.Cons(tmp61, tmp65);
    tmp66 = NofibPrelude.nofibStringToList("You seem quite positive.");
    tmp67 = NofibPrelude.nofibStringToList("Are you Sure?");
    tmp68 = NofibPrelude.nofibStringToList("I see.");
    tmp69 = NofibPrelude.nofibStringToList("I understand.");
    tmp70 = NofibPrelude.Cons(tmp69, NofibPrelude.Nil);
    tmp71 = NofibPrelude.Cons(tmp68, tmp70);
    tmp72 = NofibPrelude.Cons(tmp67, tmp71);
    yes = NofibPrelude.Cons(tmp66, tmp72);
    tmp73 = NofibPrelude.nofibStringToList("Are you saying no just to be negative?");
    tmp74 = NofibPrelude.nofibStringToList("You are being a bit negative.");
    tmp75 = NofibPrelude.nofibStringToList("Why not?");
    tmp76 = NofibPrelude.nofibStringToList("Are you sure?");
    tmp77 = NofibPrelude.nofibStringToList("Why no?");
    tmp78 = NofibPrelude.Cons(tmp77, NofibPrelude.Nil);
    tmp79 = NofibPrelude.Cons(tmp76, tmp78);
    tmp80 = NofibPrelude.Cons(tmp75, tmp79);
    tmp81 = NofibPrelude.Cons(tmp74, tmp80);
    no = NofibPrelude.Cons(tmp73, tmp81);
    tmp82 = NofibPrelude.nofibStringToList("Do computers worry you?");
    tmp83 = NofibPrelude.nofibStringToList("Are you talking about me in particular?");
    tmp84 = NofibPrelude.nofibStringToList("Are you frightened by machines?");
    tmp85 = NofibPrelude.nofibStringToList("Why do you mention computers?");
    tmp86 = NofibPrelude.nofibStringToList("What do you think machines have to do with your problems?");
    tmp87 = NofibPrelude.nofibStringToList("Don't you think computers can help people?");
    tmp88 = NofibPrelude.nofibStringToList("What is it about machines that worries you?");
    tmp89 = NofibPrelude.Cons(tmp88, NofibPrelude.Nil);
    tmp90 = NofibPrelude.Cons(tmp87, tmp89);
    tmp91 = NofibPrelude.Cons(tmp86, tmp90);
    tmp92 = NofibPrelude.Cons(tmp85, tmp91);
    tmp93 = NofibPrelude.Cons(tmp84, tmp92);
    tmp94 = NofibPrelude.Cons(tmp83, tmp93);
    computer = NofibPrelude.Cons(tmp82, tmp94);
    tmp95 = NofibPrelude.nofibStringToList("?Why do you want");
    tmp96 = NofibPrelude.nofibStringToList("?What would it mean to you if you got");
    tmp97 = NofibPrelude.nofibStringToList("?Suppose you got");
    tmp98 = NofibPrelude.nofibStringToList("?What if you never got");
    tmp99 = NofibPrelude.nofibStringToList(".I sometimes also want");
    tmp100 = NofibPrelude.Cons(tmp99, NofibPrelude.Nil);
    tmp101 = NofibPrelude.Cons(tmp98, tmp100);
    tmp102 = NofibPrelude.Cons(tmp97, tmp101);
    tmp103 = NofibPrelude.Cons(tmp96, tmp102);
    iWant = NofibPrelude.Cons(tmp95, tmp103);
    tmp104 = NofibPrelude.nofibStringToList("Why do you ask?");
    tmp105 = NofibPrelude.nofibStringToList("Does that question interest you?");
    tmp106 = NofibPrelude.nofibStringToList("What answer would please you the most?");
    tmp107 = NofibPrelude.nofibStringToList("What do you think?");
    tmp108 = NofibPrelude.nofibStringToList("Are such questions on your mind often?");
    tmp109 = NofibPrelude.nofibStringToList("What is it that you really want to know?");
    tmp110 = NofibPrelude.nofibStringToList("Have you asked anyone else?");
    tmp111 = NofibPrelude.nofibStringToList("Have you asked such questions before?");
    tmp112 = NofibPrelude.nofibStringToList("What else comes to mind when you ask that?");
    tmp113 = NofibPrelude.Cons(tmp112, NofibPrelude.Nil);
    tmp114 = NofibPrelude.Cons(tmp111, tmp113);
    tmp115 = NofibPrelude.Cons(tmp110, tmp114);
    tmp116 = NofibPrelude.Cons(tmp109, tmp115);
    tmp117 = NofibPrelude.Cons(tmp108, tmp116);
    tmp118 = NofibPrelude.Cons(tmp107, tmp117);
    tmp119 = NofibPrelude.Cons(tmp106, tmp118);
    tmp120 = NofibPrelude.Cons(tmp105, tmp119);
    question = NofibPrelude.Cons(tmp104, tmp120);
    tmp121 = NofibPrelude.nofibStringToList("Names don't interest me.");
    tmp122 = NofibPrelude.nofibStringToList("I don't care about names --please go on.");
    tmp123 = NofibPrelude.Cons(tmp122, NofibPrelude.Nil);
    name = NofibPrelude.Cons(tmp121, tmp123);
    tmp124 = NofibPrelude.nofibStringToList("Is that the real reason?");
    tmp125 = NofibPrelude.nofibStringToList("Don't any other reasons come to mind?");
    tmp126 = NofibPrelude.nofibStringToList("Does that reason explain anything else?");
    tmp127 = NofibPrelude.nofibStringToList("What other reasons might there be?");
    tmp128 = NofibPrelude.Cons(tmp127, NofibPrelude.Nil);
    tmp129 = NofibPrelude.Cons(tmp126, tmp128);
    tmp130 = NofibPrelude.Cons(tmp125, tmp129);
    because = NofibPrelude.Cons(tmp124, tmp130);
    tmp131 = NofibPrelude.nofibStringToList("Please don't apologise!");
    tmp132 = NofibPrelude.nofibStringToList("Apologies are not necessary.");
    tmp133 = NofibPrelude.nofibStringToList("What feelings do you have when you apologise?");
    tmp134 = NofibPrelude.nofibStringToList("Don't be so defensive!");
    tmp135 = NofibPrelude.Cons(tmp134, NofibPrelude.Nil);
    tmp136 = NofibPrelude.Cons(tmp133, tmp135);
    tmp137 = NofibPrelude.Cons(tmp132, tmp136);
    sorry = NofibPrelude.Cons(tmp131, tmp137);
    tmp138 = NofibPrelude.nofibStringToList("What does that dream suggest to you?");
    tmp139 = NofibPrelude.nofibStringToList("Do you dream often?");
    tmp140 = NofibPrelude.nofibStringToList("What persons appear in your dreams?");
    tmp141 = NofibPrelude.nofibStringToList("Are you disturbed by your dreams?");
    tmp142 = NofibPrelude.Cons(tmp141, NofibPrelude.Nil);
    tmp143 = NofibPrelude.Cons(tmp140, tmp142);
    tmp144 = NofibPrelude.Cons(tmp139, tmp143);
    dream = NofibPrelude.Cons(tmp138, tmp144);
    tmp145 = NofibPrelude.nofibStringToList("How do you...please state your problem.");
    hello = NofibPrelude.Cons(tmp145, NofibPrelude.Nil);
    tmp146 = NofibPrelude.nofibStringToList("You don't seem quite certain.");
    tmp147 = NofibPrelude.nofibStringToList("Why the uncertain tone?");
    tmp148 = NofibPrelude.nofibStringToList("Can't you be more positive?");
    tmp149 = NofibPrelude.nofibStringToList("You aren't sure?");
    tmp150 = NofibPrelude.nofibStringToList("Don't you know?");
    tmp151 = NofibPrelude.Cons(tmp150, NofibPrelude.Nil);
    tmp152 = NofibPrelude.Cons(tmp149, tmp151);
    tmp153 = NofibPrelude.Cons(tmp148, tmp152);
    tmp154 = NofibPrelude.Cons(tmp147, tmp153);
    maybe1 = NofibPrelude.Cons(tmp146, tmp154);
    tmp155 = NofibPrelude.nofibStringToList("?Why are you concerned about my");
    tmp156 = NofibPrelude.nofibStringToList("?What about your own");
    tmp157 = NofibPrelude.Cons(tmp156, NofibPrelude.Nil);
    your = NofibPrelude.Cons(tmp155, tmp157);
    tmp158 = NofibPrelude.nofibStringToList("Can you think of a specific example?");
    tmp159 = NofibPrelude.nofibStringToList("When?");
    tmp160 = NofibPrelude.nofibStringToList("What are you thinking of?");
    tmp161 = NofibPrelude.nofibStringToList("Really, always?");
    tmp162 = NofibPrelude.Cons(tmp161, NofibPrelude.Nil);
    tmp163 = NofibPrelude.Cons(tmp160, tmp162);
    tmp164 = NofibPrelude.Cons(tmp159, tmp163);
    always = NofibPrelude.Cons(tmp158, tmp164);
    tmp165 = NofibPrelude.nofibStringToList("Do you really think so?");
    tmp166 = NofibPrelude.nofibStringToList("?But you are not sure you");
    tmp167 = NofibPrelude.nofibStringToList("?Do you doubt you");
    tmp168 = NofibPrelude.Cons(tmp167, NofibPrelude.Nil);
    tmp169 = NofibPrelude.Cons(tmp166, tmp168);
    think = NofibPrelude.Cons(tmp165, tmp169);
    tmp170 = NofibPrelude.nofibStringToList("In what way?");
    tmp171 = NofibPrelude.nofibStringToList("What resemblence do you see?");
    tmp172 = NofibPrelude.nofibStringToList("What does the similarity suggest to you?");
    tmp173 = NofibPrelude.nofibStringToList("What other connections do you see?");
    tmp174 = NofibPrelude.nofibStringToList("Cound there really be some connection?");
    tmp175 = NofibPrelude.nofibStringToList("How?");
    tmp176 = NofibPrelude.Cons(tmp175, NofibPrelude.Nil);
    tmp177 = NofibPrelude.Cons(tmp174, tmp176);
    tmp178 = NofibPrelude.Cons(tmp173, tmp177);
    tmp179 = NofibPrelude.Cons(tmp172, tmp178);
    tmp180 = NofibPrelude.Cons(tmp171, tmp179);
    alike = NofibPrelude.Cons(tmp170, tmp180);
    tmp181 = NofibPrelude.nofibStringToList("Why do you bring up the topic of friends?");
    tmp182 = NofibPrelude.nofibStringToList("Do your friends worry you?");
    tmp183 = NofibPrelude.nofibStringToList("Do your friends pick on you?");
    tmp184 = NofibPrelude.nofibStringToList("Are you sure you have any friends?");
    tmp185 = NofibPrelude.nofibStringToList("Do you impose on your friends?");
    tmp186 = NofibPrelude.nofibStringToList("Perhaps your love for friends worries you.");
    tmp187 = NofibPrelude.Cons(tmp186, NofibPrelude.Nil);
    tmp188 = NofibPrelude.Cons(tmp185, tmp187);
    tmp189 = NofibPrelude.Cons(tmp184, tmp188);
    tmp190 = NofibPrelude.Cons(tmp183, tmp189);
    tmp191 = NofibPrelude.Cons(tmp182, tmp190);
    friend = NofibPrelude.Cons(tmp181, tmp191);
    tmp192 = NofibPrelude.nofibStringToList("I'm not sure I understand you fully.");
    tmp193 = NofibPrelude.nofibStringToList("What does that suggest to you?");
    tmp194 = NofibPrelude.nofibStringToList("I see.");
    tmp195 = NofibPrelude.nofibStringToList("Can you elaborate on that?");
    tmp196 = NofibPrelude.nofibStringToList("Say, do you have any psychological problems?");
    tmp197 = NofibPrelude.Cons(tmp196, NofibPrelude.Nil);
    tmp198 = NofibPrelude.Cons(tmp195, tmp197);
    tmp199 = NofibPrelude.Cons(tmp194, tmp198);
    tmp200 = NofibPrelude.Cons(tmp193, tmp199);
    nokeyMsgs = NofibPrelude.Cons(tmp192, tmp200);
    tmp201 = NofibPrelude.nofibStringToList("CAN YOU");
    tmp202 = globalThis.Object.freeze([
      tmp201,
      canYou
    ]);
    tmp203 = NofibPrelude.nofibStringToList("CAN I");
    tmp204 = globalThis.Object.freeze([
      tmp203,
      canI
    ]);
    tmp205 = NofibPrelude.nofibStringToList("YOU ARE");
    tmp206 = globalThis.Object.freeze([
      tmp205,
      youAre
    ]);
    tmp207 = NofibPrelude.nofibStringToList("YOU'RE");
    tmp208 = globalThis.Object.freeze([
      tmp207,
      youAre
    ]);
    tmp209 = NofibPrelude.nofibStringToList("I DON'T");
    tmp210 = globalThis.Object.freeze([
      tmp209,
      iDont
    ]);
    tmp211 = NofibPrelude.nofibStringToList("I FEEL");
    tmp212 = globalThis.Object.freeze([
      tmp211,
      iFeel
    ]);
    tmp213 = NofibPrelude.nofibStringToList("WHY DON'T YOU");
    tmp214 = globalThis.Object.freeze([
      tmp213,
      whyDont
    ]);
    tmp215 = NofibPrelude.nofibStringToList("WHY CAN'T I");
    tmp216 = globalThis.Object.freeze([
      tmp215,
      whyCant
    ]);
    tmp217 = NofibPrelude.nofibStringToList("ARE YOU");
    tmp218 = globalThis.Object.freeze([
      tmp217,
      areYou
    ]);
    tmp219 = NofibPrelude.nofibStringToList("I CAN'T");
    tmp220 = globalThis.Object.freeze([
      tmp219,
      iCant
    ]);
    tmp221 = NofibPrelude.nofibStringToList("I AM");
    tmp222 = globalThis.Object.freeze([
      tmp221,
      iAm
    ]);
    tmp223 = NofibPrelude.nofibStringToList("I'M");
    tmp224 = globalThis.Object.freeze([
      tmp223,
      iAm
    ]);
    tmp225 = NofibPrelude.nofibStringToList("YOU");
    tmp226 = globalThis.Object.freeze([
      tmp225,
      you
    ]);
    tmp227 = NofibPrelude.nofibStringToList("YES");
    tmp228 = globalThis.Object.freeze([
      tmp227,
      yes
    ]);
    tmp229 = NofibPrelude.nofibStringToList("NO");
    tmp230 = globalThis.Object.freeze([
      tmp229,
      no
    ]);
    tmp231 = NofibPrelude.nofibStringToList("COMPUTER");
    tmp232 = globalThis.Object.freeze([
      tmp231,
      computer
    ]);
    tmp233 = NofibPrelude.nofibStringToList("COMPUTERS");
    tmp234 = globalThis.Object.freeze([
      tmp233,
      computer
    ]);
    tmp235 = NofibPrelude.nofibStringToList("I WANT");
    tmp236 = globalThis.Object.freeze([
      tmp235,
      iWant
    ]);
    tmp237 = NofibPrelude.nofibStringToList("WHAT");
    tmp238 = globalThis.Object.freeze([
      tmp237,
      question
    ]);
    tmp239 = NofibPrelude.nofibStringToList("HOW");
    tmp240 = globalThis.Object.freeze([
      tmp239,
      question
    ]);
    tmp241 = NofibPrelude.nofibStringToList("WHO");
    tmp242 = globalThis.Object.freeze([
      tmp241,
      question
    ]);
    tmp243 = NofibPrelude.nofibStringToList("WHERE");
    tmp244 = globalThis.Object.freeze([
      tmp243,
      question
    ]);
    tmp245 = NofibPrelude.nofibStringToList("WHEN");
    tmp246 = globalThis.Object.freeze([
      tmp245,
      question
    ]);
    tmp247 = NofibPrelude.nofibStringToList("NAME");
    tmp248 = globalThis.Object.freeze([
      tmp247,
      name
    ]);
    tmp249 = NofibPrelude.nofibStringToList("WHY");
    tmp250 = globalThis.Object.freeze([
      tmp249,
      question
    ]);
    tmp251 = NofibPrelude.nofibStringToList("CAUSE");
    tmp252 = globalThis.Object.freeze([
      tmp251,
      because
    ]);
    tmp253 = NofibPrelude.nofibStringToList("BECAUSE");
    tmp254 = globalThis.Object.freeze([
      tmp253,
      because
    ]);
    tmp255 = NofibPrelude.nofibStringToList("DREAM");
    tmp256 = globalThis.Object.freeze([
      tmp255,
      dream
    ]);
    tmp257 = NofibPrelude.nofibStringToList("SORRY");
    tmp258 = globalThis.Object.freeze([
      tmp257,
      sorry
    ]);
    tmp259 = NofibPrelude.nofibStringToList("HI");
    tmp260 = globalThis.Object.freeze([
      tmp259,
      hello
    ]);
    tmp261 = NofibPrelude.nofibStringToList("DREAMS");
    tmp262 = globalThis.Object.freeze([
      tmp261,
      dream
    ]);
    tmp263 = NofibPrelude.nofibStringToList("MAYBE");
    tmp264 = globalThis.Object.freeze([
      tmp263,
      maybe1
    ]);
    tmp265 = NofibPrelude.nofibStringToList("HELLO");
    tmp266 = globalThis.Object.freeze([
      tmp265,
      hello
    ]);
    tmp267 = NofibPrelude.nofibStringToList("ALWAYS");
    tmp268 = globalThis.Object.freeze([
      tmp267,
      always
    ]);
    tmp269 = NofibPrelude.nofibStringToList("YOUR");
    tmp270 = globalThis.Object.freeze([
      tmp269,
      your
    ]);
    tmp271 = NofibPrelude.nofibStringToList("ALIKE");
    tmp272 = globalThis.Object.freeze([
      tmp271,
      alike
    ]);
    tmp273 = NofibPrelude.nofibStringToList("THINK");
    tmp274 = globalThis.Object.freeze([
      tmp273,
      think
    ]);
    tmp275 = NofibPrelude.nofibStringToList("FRIENDS");
    tmp276 = globalThis.Object.freeze([
      tmp275,
      friend
    ]);
    tmp277 = NofibPrelude.nofibStringToList("FRIEND");
    tmp278 = globalThis.Object.freeze([
      tmp277,
      friend
    ]);
    tmp279 = globalThis.Object.freeze([
      NofibPrelude.Nil,
      nokeyMsgs
    ]);
    tmp280 = NofibPrelude.Cons(tmp279, NofibPrelude.Nil);
    tmp281 = NofibPrelude.Cons(tmp278, tmp280);
    tmp282 = NofibPrelude.Cons(tmp276, tmp281);
    tmp283 = NofibPrelude.Cons(tmp274, tmp282);
    tmp284 = NofibPrelude.Cons(tmp272, tmp283);
    tmp285 = NofibPrelude.Cons(tmp270, tmp284);
    tmp286 = NofibPrelude.Cons(tmp268, tmp285);
    tmp287 = NofibPrelude.Cons(tmp266, tmp286);
    tmp288 = NofibPrelude.Cons(tmp264, tmp287);
    tmp289 = NofibPrelude.Cons(tmp262, tmp288);
    tmp290 = NofibPrelude.Cons(tmp260, tmp289);
    tmp291 = NofibPrelude.Cons(tmp258, tmp290);
    tmp292 = NofibPrelude.Cons(tmp256, tmp291);
    tmp293 = NofibPrelude.Cons(tmp254, tmp292);
    tmp294 = NofibPrelude.Cons(tmp252, tmp293);
    tmp295 = NofibPrelude.Cons(tmp250, tmp294);
    tmp296 = NofibPrelude.Cons(tmp248, tmp295);
    tmp297 = NofibPrelude.Cons(tmp246, tmp296);
    tmp298 = NofibPrelude.Cons(tmp244, tmp297);
    tmp299 = NofibPrelude.Cons(tmp242, tmp298);
    tmp300 = NofibPrelude.Cons(tmp240, tmp299);
    tmp301 = NofibPrelude.Cons(tmp238, tmp300);
    tmp302 = NofibPrelude.Cons(tmp236, tmp301);
    tmp303 = NofibPrelude.Cons(tmp234, tmp302);
    tmp304 = NofibPrelude.Cons(tmp232, tmp303);
    tmp305 = NofibPrelude.Cons(tmp230, tmp304);
    tmp306 = NofibPrelude.Cons(tmp228, tmp305);
    tmp307 = NofibPrelude.Cons(tmp226, tmp306);
    tmp308 = NofibPrelude.Cons(tmp224, tmp307);
    tmp309 = NofibPrelude.Cons(tmp222, tmp308);
    tmp310 = NofibPrelude.Cons(tmp220, tmp309);
    tmp311 = NofibPrelude.Cons(tmp218, tmp310);
    tmp312 = NofibPrelude.Cons(tmp216, tmp311);
    tmp313 = NofibPrelude.Cons(tmp214, tmp312);
    tmp314 = NofibPrelude.Cons(tmp212, tmp313);
    tmp315 = NofibPrelude.Cons(tmp210, tmp314);
    tmp316 = NofibPrelude.Cons(tmp208, tmp315);
    tmp317 = NofibPrelude.Cons(tmp206, tmp316);
    tmp318 = NofibPrelude.Cons(tmp204, tmp317);
    tmp319 = NofibPrelude.Cons(tmp202, tmp318);
    tmp320 = Predef.id(tmp319);
    this.respMsgs = tmp320;
    lscomp1 = function lscomp(ls) {
      let param0, param1, first1, first0, k, rs, t, tmp354, tmp355, tmp356, tmp357;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first0 = runtime.Tuple.get(param0, 0);
          first1 = runtime.Tuple.get(param0, 1);
          k = first0;
          rs = first1;
          t = param1;
          tmp354 = eliza1.words(k);
          tmp355 = eliza1.cycle(rs);
          tmp356 = globalThis.Object.freeze([
            tmp354,
            tmp355
          ]);
          tmp357 = lscomp1(t);
          return NofibPrelude.Cons(tmp356, tmp357)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp321 = lscomp1(eliza1.respMsgs);
    tmp322 = eliza1.cycle(eliza1.repeatMsgs);
    tmp323 = globalThis.Object.freeze([
      tmp321,
      tmp322
    ]);
    this.initial = tmp323;
    prepare = function prepare(ls) {
      return NofibPrelude.map(lambda13, ls)
    };
    lscomp2 = function lscomp(ls) {
      let param0, param1, first1, first0, x, y, t, tmp354, tmp355, tmp356, tmp357, tmp358;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param0 = ls.head;
        param1 = ls.tail;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first0 = runtime.Tuple.get(param0, 0);
          first1 = runtime.Tuple.get(param0, 1);
          x = first0;
          y = first1;
          t = param1;
          tmp354 = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp355 = globalThis.Object.freeze([
            y,
            x
          ]);
          tmp356 = NofibPrelude.Cons(tmp355, NofibPrelude.Nil);
          tmp357 = NofibPrelude.Cons(tmp354, tmp356);
          tmp358 = lscomp2(t);
          return NofibPrelude.Cons(tmp357, tmp358)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp324 = NofibPrelude.nofibStringToList("me");
    tmp325 = NofibPrelude.nofibStringToList("you");
    tmp326 = globalThis.Object.freeze([
      tmp324,
      tmp325
    ]);
    _deforest_Cons_head = tmp326;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    oneways = (ys) => {
      let param0, param1, x, xs, tmp354;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp354 = append_inst_54_tsni(xs, ys);
      return NofibPrelude.Cons(x, tmp354)
    };
    tmp327 = NofibPrelude.nofibStringToList("are");
    tmp328 = NofibPrelude.nofibStringToList("am");
    tmp329 = globalThis.Object.freeze([
      tmp327,
      tmp328
    ]);
    tmp330 = NofibPrelude.nofibStringToList("we're");
    tmp331 = NofibPrelude.nofibStringToList("was");
    tmp332 = globalThis.Object.freeze([
      tmp330,
      tmp331
    ]);
    tmp333 = NofibPrelude.nofibStringToList("you");
    tmp334 = NofibPrelude.nofibStringToList("I");
    tmp335 = globalThis.Object.freeze([
      tmp333,
      tmp334
    ]);
    tmp336 = NofibPrelude.nofibStringToList("your");
    tmp337 = NofibPrelude.nofibStringToList("my");
    tmp338 = globalThis.Object.freeze([
      tmp336,
      tmp337
    ]);
    tmp339 = NofibPrelude.nofibStringToList("I've");
    tmp340 = NofibPrelude.nofibStringToList("you've");
    tmp341 = globalThis.Object.freeze([
      tmp339,
      tmp340
    ]);
    tmp342 = NofibPrelude.nofibStringToList("I'm");
    tmp343 = NofibPrelude.nofibStringToList("you're");
    tmp344 = globalThis.Object.freeze([
      tmp342,
      tmp343
    ]);
    tmp345 = NofibPrelude.Cons(tmp344, NofibPrelude.Nil);
    tmp346 = NofibPrelude.Cons(tmp341, tmp345);
    tmp347 = NofibPrelude.Cons(tmp338, tmp346);
    tmp348 = NofibPrelude.Cons(tmp335, tmp347);
    tmp349 = NofibPrelude.Cons(tmp332, tmp348);
    bothways = NofibPrelude.Cons(tmp329, tmp349);
    tmp350 = lscomp2(bothways);
    tmp351 = NofibPrelude.concat(tmp350);
    tmp352 = append_inst_54_tsni(oneways, tmp351);
    tmp353 = prepare(tmp352);
    this.conjugates = tmp353;
  }
  static toUpper(c) {
    return runtime.safeCall(c.toUpperCase())
  } 
  static lz_map(f, ls) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda(f, ls));
    return NofibPrelude.lazy(lambda$this)
  } 
  static append_lz(xs, ys) {
    let param0, param1, h, t, lambda$this;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.force(ys)
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      lambda$this = runtime.safeCall(lambda1(ys, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static cycle(xs) {
    let tmp, lambda$this;
    lambda$this = runtime.safeCall(lambda2(xs));
    tmp = NofibPrelude.lazy(lambda$this);
    return eliza.append_lz(xs, tmp)
  } 
  static isSpace(c) {
    return c === " "
  } 
  static words(s) {
    let scrut;
    scrut = leaveWhile_inst_36_2_tsni(eliza1.isSpace, s);
    return runtime.safeCall(scrut())
  } 
  static unwords(ws) {
    let param0, param1, w, ws1, tmp;
    if (ws instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ws instanceof NofibPrelude.Cons.class) {
      param0 = ws.head;
      param1 = ws.tail;
      w = param0;
      ws1 = param1;
      tmp = go(ws1);
      return NofibPrelude.append(w, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static null_lz(ls) {
    let scrut, param0, param1, h, t;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      return false
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static trim(ls) {
    let tmp;
    tmp = NofibPrelude.leaveWhile(lambda3, ls);
    return NofibPrelude.foldr(cons, NofibPrelude.Nil, tmp)
  } 
  static repeated(kt_rp) {
    let first1, first0, kt, param0, param1, r, rp, tmp;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      first0 = runtime.Tuple.get(kt_rp, 0);
      first1 = runtime.Tuple.get(kt_rp, 1);
      kt = first0;
      if (first1 instanceof NofibPrelude.Cons.class) {
        param0 = first1.head;
        param1 = first1.tail;
        r = param0;
        rp = param1;
        tmp = globalThis.Object.freeze([
          kt,
          rp
        ]);
        return globalThis.Object.freeze([
          r,
          tmp
        ])
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static newKeyTab(kt_, kt_rp) {
    let first1, first0, kt, rp;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      first0 = runtime.Tuple.get(kt_rp, 0);
      first1 = runtime.Tuple.get(kt_rp, 1);
      kt = first0;
      rp = first1;
      return globalThis.Object.freeze([
        kt_,
        rp
      ])
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static keyTabOf(kt_rp) {
    let first1, first0, kt, rp;
    if (runtime.Tuple.isArrayLike(kt_rp) && kt_rp.length === 2) {
      first0 = runtime.Tuple.get(kt_rp, 0);
      first1 = runtime.Tuple.get(kt_rp, 1);
      kt = first0;
      rp = first1;
      return kt
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static makeResponse(cs, us) {
    let param0, param1, cs_, cs_1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (cs instanceof NofibPrelude.Cons.class) {
      param0 = cs.head;
      param1 = cs.tail;
      if (param0 === "?") {
        cs_1 = param1;
        tmp = NofibPrelude.nofibStringToList(" ");
        tmp1 = NofibPrelude.nofibStringToList("?");
        tmp2 = NofibPrelude.append(us, tmp1);
        tmp3 = NofibPrelude.append(tmp, tmp2);
        return NofibPrelude.append(cs_1, tmp3)
      } else if (param0 === ".") {
        cs_ = param1;
        tmp4 = NofibPrelude.nofibStringToList(" ");
        tmp5 = NofibPrelude.nofibStringToList(".");
        tmp6 = NofibPrelude.append(us, tmp5);
        tmp7 = NofibPrelude.append(tmp4, tmp6);
        return NofibPrelude.append(cs_, tmp7)
      } else {
        return cs
      }
    } else {
      return cs
    }
  } 
  static prefix(xxs, yys) {
    let param0, param1, x, xs, scrut, param01, param11, y, ys, tmp, lambda$this;
    if (xxs instanceof NofibPrelude.Nil.class) {
      return true
    } else if (xxs instanceof NofibPrelude.Cons.class) {
      param0 = xxs.head;
      param1 = xxs.tail;
      x = param0;
      xs = param1;
      scrut = NofibPrelude.force(yys);
      if (scrut instanceof NofibPrelude.LzNil.class) {
        return false
      } else if (scrut instanceof NofibPrelude.LzCons.class) {
        param01 = scrut.head;
        param11 = scrut.tail;
        y = param01;
        ys = param11;
        tmp = NofibPrelude.listEq(x, y);
        lambda$this = runtime.safeCall(lambda4(xs, ys));
        return runtime.short_and(tmp, lambda$this)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static tails(xs) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda5(xs));
    return NofibPrelude.lazy(lambda$this)
  } 
  static ucase(ls) {
    return NofibPrelude.map(eliza.toUpper, ls)
  } 
  static conjug(d, w) {
    let tmp, tmp1, tmp2;
    tmp = maybe(d, w);
    tmp1 = map_inst_37_17_tsni(conj_inst_37_18_tsni, tmp);
    tmp2 = trailingI_inst_37_50_tsni(tmp1);
    return eliza.unwords(tmp2)
  } 
  static replies(key, l) {
    let tmp, tmp1, lambda$this, lambda$this1;
    tmp = eliza.tails(l);
    lambda$this = runtime.safeCall(lambda_inst_38_11_tsni(key));
    tmp1 = NofibPrelude.filter_lz(lambda$this, tmp);
    lambda$this1 = runtime.safeCall(lambda_inst_38_14_tsni(key, l));
    return NofibPrelude.map_lz(lambda$this1, tmp1)
  } 
  static answer(st, l) {
    let scrut, first1, first0, response, kt, tmp, tmp1;
    tmp = eliza.keyTabOf(st);
    scrut = ans_inst_39_9_tsni(tmp, l);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      response = first0;
      kt = first1;
      tmp1 = eliza.newKeyTab(kt, st);
      return globalThis.Object.freeze([
        response,
        tmp1
      ])
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static session(rs, prev, ls) {
    let param0, param1, l, ls1, scrut, scrut1, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      l = param0;
      ls1 = param1;
      scrut = NofibPrelude.listEqBy(NofibPrelude.listEq, prev, l);
      if (scrut === true) {
        tmp = repeated_inst_40_23_tsni(rs);
      } else {
        tmp = answer_inst_40_8_tsni(rs, l);
      }
      scrut1 = tmp;
      return runtime.safeCall(scrut1(l, ls1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static testEliza_nofib(n) {
    let input, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, lambda$this;
    tmp = NofibPrelude.nofibStringToList("Are we alone?");
    tmp1 = NofibPrelude.nofibStringToList("That the Roswell event was actually an alien encounter. Do you agreed?");
    tmp2 = NofibPrelude.nofibStringToList("But why not talk about you, its more fun.");
    tmp3 = NofibPrelude.nofibStringToList("I dont ask, you do");
    tmp4 = NofibPrelude.nofibStringToList("do ray me");
    tmp5 = NofibPrelude.nofibStringToList("Nop, thats because your a computer");
    tmp6 = NofibPrelude.nofibStringToList("you dont");
    tmp7 = NofibPrelude.nofibStringToList("Oh, a paranoid computer, ehh?");
    tmp8 = NofibPrelude.nofibStringToList("Tell me about *your* mother");
    tmp9 = NofibPrelude.nofibStringToList("No, what what was she like?");
    tmp10 = NofibPrelude.nofibStringToList("I'm asking questions, not you");
    tmp11 = NofibPrelude.nofibStringToList("no");
    tmp12 = NofibPrelude.nofibStringToList("yes");
    tmp13 = NofibPrelude.nofibStringToList("but I'm not");
    tmp14 = NofibPrelude.Cons(tmp13, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(tmp12, tmp14);
    tmp16 = NofibPrelude.Cons(tmp11, tmp15);
    tmp17 = NofibPrelude.Cons(tmp10, tmp16);
    tmp18 = NofibPrelude.Cons(tmp9, tmp17);
    tmp19 = NofibPrelude.Cons(tmp8, tmp18);
    tmp20 = NofibPrelude.Cons(tmp7, tmp19);
    tmp21 = NofibPrelude.Cons(tmp6, tmp20);
    tmp22 = NofibPrelude.Cons(tmp5, tmp21);
    tmp23 = NofibPrelude.Cons(tmp4, tmp22);
    tmp24 = NofibPrelude.Cons(tmp3, tmp23);
    tmp25 = NofibPrelude.Cons(tmp2, tmp24);
    tmp26 = NofibPrelude.Cons(tmp1, tmp25);
    tmp27 = NofibPrelude.Cons(tmp, tmp26);
    input = Predef.id(tmp27);
    tmp28 = enumFromTo_inst_41_43_tsni(1, n);
    lambda$this = runtime.safeCall(lambda_inst_41_42_tsni(input));
    return map_inst_41_46_tsni(lambda$this, tmp28)
  } 
  static main() {
    let tmp, tmp1;
    tmp = testEliza_nofib_inst_44_45_tsni(20);
    tmp1 = map_inst_44_55_tsni(lambda_inst_44_56_tsni, tmp);
    return runtime.safeCall(tmp1.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "eliza"]; 
});
let eliza = eliza1; export default eliza;
