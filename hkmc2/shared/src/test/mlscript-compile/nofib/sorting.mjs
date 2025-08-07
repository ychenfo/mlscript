import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let sorting1, compareList_inst_0_1_tsni, gtList_inst_2_3_tsni, compareList_inst_2_3_1_tsni, compareList_inst_4_5_tsni, ltList_inst_6_7_tsni, compareList_inst_6_7_5_tsni, compareList_inst_8_9_tsni, break__inst_10_11_tsni, map_inst_12_13_tsni, append_inst_12_14_tsni, leList_inst_15_16_tsni, gtList_inst_15_16_3_tsni, compareList_inst_15_16_3_1_tsni, gtList_inst_15_17_tsni, compareList_inst_15_17_1_tsni, geList_inst_18_19_tsni, ltList_inst_18_19_7_tsni, compareList_inst_18_19_7_5_tsni, leList_inst_20_21_tsni, gtList_inst_20_21_3_tsni, compareList_inst_20_21_3_1_tsni, ltList_inst_22_23_tsni, compareList_inst_22_23_5_tsni, leList_inst_24_25_tsni, gtList_inst_24_25_3_tsni, compareList_inst_24_25_3_1_tsni, leList_inst_26_27_tsni, gtList_inst_26_27_3_tsni, compareList_inst_26_27_3_1_tsni, leList_inst_26_28_tsni, gtList_inst_26_28_3_tsni, compareList_inst_26_28_3_1_tsni, leList_inst_29_30_tsni, gtList_inst_29_30_3_tsni, compareList_inst_29_30_3_1_tsni, leList_inst_29_31_tsni, gtList_inst_29_31_3_tsni, compareList_inst_29_31_3_1_tsni, leList_inst_29_32_tsni, gtList_inst_29_32_3_tsni, compareList_inst_29_32_3_1_tsni, leList_inst_29_33_tsni, gtList_inst_29_33_3_tsni, compareList_inst_29_33_3_1_tsni, gtList_inst_34_35_tsni, compareList_inst_34_35_1_tsni, leList_inst_34_36_tsni, gtList_inst_34_36_3_tsni, compareList_inst_34_36_3_1_tsni, leList_inst_34_37_tsni, gtList_inst_34_37_3_tsni, compareList_inst_34_37_3_1_tsni, eqList_inst_34_38_tsni, compareList_inst_34_38_9_tsni, ltList_inst_34_39_tsni, compareList_inst_34_39_5_tsni, treeSort2_inst_40_41_tsni, leList_inst_40_41_28_tsni, gtList_inst_40_41_28_3_tsni, compareList_inst_40_41_28_3_1_tsni, leList_inst_40_41_27_tsni, gtList_inst_40_41_27_3_tsni, compareList_inst_40_41_27_3_1_tsni, treeSort_inst_40_42_tsni, leList_inst_40_42_25_tsni, gtList_inst_40_42_25_3_tsni, compareList_inst_40_42_25_3_1_tsni, quickerSort_inst_40_43_tsni, leList_inst_40_43_21_tsni, gtList_inst_40_43_21_3_tsni, compareList_inst_40_43_21_3_1_tsni, quickSort2_inst_40_44_tsni, geList_inst_40_44_19_tsni, ltList_inst_40_44_19_7_tsni, compareList_inst_40_44_19_7_5_tsni, quickSort_inst_40_45_tsni, gtList_inst_40_45_17_tsni, compareList_inst_40_45_17_1_tsni, leList_inst_40_45_16_tsni, gtList_inst_40_45_16_3_tsni, compareList_inst_40_45_16_3_1_tsni, mergeSort_inst_40_46_tsni, ltList_inst_40_46_39_tsni, compareList_inst_40_46_39_5_tsni, eqList_inst_40_46_38_tsni, compareList_inst_40_46_38_9_tsni, leList_inst_40_46_37_tsni, gtList_inst_40_46_37_3_tsni, compareList_inst_40_46_37_3_1_tsni, leList_inst_40_46_36_tsni, gtList_inst_40_46_36_3_tsni, compareList_inst_40_46_36_3_1_tsni, gtList_inst_40_46_35_tsni, compareList_inst_40_46_35_1_tsni, insertSort_inst_40_47_tsni, ltList_inst_40_47_23_tsni, compareList_inst_40_47_23_5_tsni, heapSort_inst_40_48_tsni, leList_inst_40_48_33_tsni, gtList_inst_40_48_33_3_tsni, compareList_inst_40_48_33_3_1_tsni, leList_inst_40_48_32_tsni, gtList_inst_40_48_32_3_tsni, compareList_inst_40_48_32_3_1_tsni, leList_inst_40_48_31_tsni, gtList_inst_40_48_31_3_tsni, compareList_inst_40_48_31_3_1_tsni, leList_inst_40_48_30_tsni, gtList_inst_40_48_30_3_tsni, compareList_inst_40_48_30_3_1_tsni, intersperse_inst_40_49_tsni, prependToAll_inst_40_49_50_tsni, lines_inst_40_51_tsni, break__inst_40_51_11_tsni, unlines_inst_40_52_tsni, map_inst_40_52_13_tsni, append_inst_40_52_14_tsni, mangle_inst_53_54_tsni, unlines_inst_53_54_52_tsni, map_inst_53_54_52_13_tsni, append_inst_53_54_52_14_tsni, lines_inst_53_54_51_tsni, break__inst_53_54_51_11_tsni, intersperse_inst_53_54_49_tsni, prependToAll_inst_53_54_49_50_tsni, heapSort_inst_53_54_48_tsni, leList_inst_53_54_48_30_tsni, gtList_inst_53_54_48_30_3_tsni, compareList_inst_53_54_48_30_3_1_tsni, leList_inst_53_54_48_31_tsni, gtList_inst_53_54_48_31_3_tsni, compareList_inst_53_54_48_31_3_1_tsni, leList_inst_53_54_48_32_tsni, gtList_inst_53_54_48_32_3_tsni, compareList_inst_53_54_48_32_3_1_tsni, leList_inst_53_54_48_33_tsni, gtList_inst_53_54_48_33_3_tsni, compareList_inst_53_54_48_33_3_1_tsni, insertSort_inst_53_54_47_tsni, ltList_inst_53_54_47_23_tsni, compareList_inst_53_54_47_23_5_tsni, mergeSort_inst_53_54_46_tsni, gtList_inst_53_54_46_35_tsni, compareList_inst_53_54_46_35_1_tsni, leList_inst_53_54_46_36_tsni, gtList_inst_53_54_46_36_3_tsni, compareList_inst_53_54_46_36_3_1_tsni, leList_inst_53_54_46_37_tsni, gtList_inst_53_54_46_37_3_tsni, compareList_inst_53_54_46_37_3_1_tsni, eqList_inst_53_54_46_38_tsni, compareList_inst_53_54_46_38_9_tsni, ltList_inst_53_54_46_39_tsni, compareList_inst_53_54_46_39_5_tsni, quickSort_inst_53_54_45_tsni, leList_inst_53_54_45_16_tsni, gtList_inst_53_54_45_16_3_tsni, compareList_inst_53_54_45_16_3_1_tsni, gtList_inst_53_54_45_17_tsni, compareList_inst_53_54_45_17_1_tsni, quickSort2_inst_53_54_44_tsni, geList_inst_53_54_44_19_tsni, ltList_inst_53_54_44_19_7_tsni, compareList_inst_53_54_44_19_7_5_tsni, quickerSort_inst_53_54_43_tsni, leList_inst_53_54_43_21_tsni, gtList_inst_53_54_43_21_3_tsni, compareList_inst_53_54_43_21_3_1_tsni, treeSort_inst_53_54_42_tsni, leList_inst_53_54_42_25_tsni, gtList_inst_53_54_42_25_3_tsni, compareList_inst_53_54_42_25_3_1_tsni, treeSort2_inst_53_54_41_tsni, leList_inst_53_54_41_27_tsni, gtList_inst_53_54_41_27_3_tsni, compareList_inst_53_54_41_27_3_1_tsni, leList_inst_53_54_41_28_tsni, gtList_inst_53_54_41_28_3_tsni, compareList_inst_53_54_41_28_3_1_tsni, concat_inst_53_54_52_55_tsni, append_inst_53_54_52_55_56_tsni, testSorting_nofib_inst_57_58_tsni, mangle_inst_57_58_54_tsni, treeSort2_inst_57_58_54_41_tsni, leList_inst_57_58_54_41_28_tsni, gtList_inst_57_58_54_41_28_3_tsni, compareList_inst_57_58_54_41_28_3_1_tsni, leList_inst_57_58_54_41_27_tsni, gtList_inst_57_58_54_41_27_3_tsni, compareList_inst_57_58_54_41_27_3_1_tsni, treeSort_inst_57_58_54_42_tsni, leList_inst_57_58_54_42_25_tsni, gtList_inst_57_58_54_42_25_3_tsni, compareList_inst_57_58_54_42_25_3_1_tsni, quickerSort_inst_57_58_54_43_tsni, leList_inst_57_58_54_43_21_tsni, gtList_inst_57_58_54_43_21_3_tsni, compareList_inst_57_58_54_43_21_3_1_tsni, quickSort2_inst_57_58_54_44_tsni, geList_inst_57_58_54_44_19_tsni, ltList_inst_57_58_54_44_19_7_tsni, compareList_inst_57_58_54_44_19_7_5_tsni, quickSort_inst_57_58_54_45_tsni, gtList_inst_57_58_54_45_17_tsni, compareList_inst_57_58_54_45_17_1_tsni, leList_inst_57_58_54_45_16_tsni, gtList_inst_57_58_54_45_16_3_tsni, compareList_inst_57_58_54_45_16_3_1_tsni, mergeSort_inst_57_58_54_46_tsni, ltList_inst_57_58_54_46_39_tsni, compareList_inst_57_58_54_46_39_5_tsni, eqList_inst_57_58_54_46_38_tsni, compareList_inst_57_58_54_46_38_9_tsni, leList_inst_57_58_54_46_37_tsni, gtList_inst_57_58_54_46_37_3_tsni, compareList_inst_57_58_54_46_37_3_1_tsni, leList_inst_57_58_54_46_36_tsni, gtList_inst_57_58_54_46_36_3_tsni, compareList_inst_57_58_54_46_36_3_1_tsni, gtList_inst_57_58_54_46_35_tsni, compareList_inst_57_58_54_46_35_1_tsni, insertSort_inst_57_58_54_47_tsni, ltList_inst_57_58_54_47_23_tsni, compareList_inst_57_58_54_47_23_5_tsni, heapSort_inst_57_58_54_48_tsni, leList_inst_57_58_54_48_33_tsni, gtList_inst_57_58_54_48_33_3_tsni, compareList_inst_57_58_54_48_33_3_1_tsni, leList_inst_57_58_54_48_32_tsni, gtList_inst_57_58_54_48_32_3_tsni, compareList_inst_57_58_54_48_32_3_1_tsni, leList_inst_57_58_54_48_31_tsni, gtList_inst_57_58_54_48_31_3_tsni, compareList_inst_57_58_54_48_31_3_1_tsni, leList_inst_57_58_54_48_30_tsni, gtList_inst_57_58_54_48_30_3_tsni, compareList_inst_57_58_54_48_30_3_1_tsni, intersperse_inst_57_58_54_49_tsni, prependToAll_inst_57_58_54_49_50_tsni, lines_inst_57_58_54_51_tsni, break__inst_57_58_54_51_11_tsni, unlines_inst_57_58_54_52_tsni, map_inst_57_58_54_52_13_tsni, append_inst_57_58_54_52_14_tsni, concat_inst_57_58_54_52_55_tsni, append_inst_57_58_54_52_55_56_tsni, concat_inst_12_55_tsni, append_inst_12_55_56_tsni, foldr_inst_40_59_tsni, concat_inst_40_52_55_tsni, append_inst_40_52_55_56_tsni, foldr_inst_53_54_59_tsni, hash_inst_53_60_tsni, foldl_inst_53_60_61_tsni, foldr_inst_57_58_54_59_tsni, hash_inst_57_58_60_tsni, foldl_inst_57_58_60_61_tsni, match_s__rest_inst_10_tsni, match_s__rest_inst_40_51_tsni, match_s__rest_inst_53_54_51_tsni, match_s__rest_inst_57_58_54_51_tsni, match_scrut_arm_default_inst_0_tsni, match_scrut_arm_GT_inst_0_tsni, match_scrut_arm_default_inst_2_3_tsni, match_scrut_arm_GT_inst_2_3_tsni, match_scrut_arm_default_inst_4_tsni, match_scrut_arm_LT_inst_4_tsni, match_scrut_arm_LT_inst_6_7_tsni, match_scrut_arm_default_inst_6_7_tsni, match_scrut_arm_default_inst_8_tsni, match_xs_arm_Cons_inst_12_55_56_tsni, match_scrut_arm_default_inst_15_16_3_tsni, match_scrut_arm_GT_inst_15_16_3_tsni, match_scrut_arm_default_inst_15_17_tsni, match_scrut_arm_GT_inst_15_17_tsni, match_scrut_arm_default_inst_18_19_7_tsni, match_scrut_arm_LT_inst_18_19_7_tsni, match_scrut_arm_default_inst_20_21_3_tsni, match_scrut_arm_GT_inst_20_21_3_tsni, match_scrut_arm_LT_inst_22_23_tsni, match_scrut_arm_default_inst_22_23_tsni, match_scrut_arm_default_inst_24_25_3_tsni, match_scrut_arm_GT_inst_24_25_3_tsni, match_scrut_arm_default_inst_26_27_3_tsni, match_scrut_arm_GT_inst_26_27_3_tsni, match_scrut_arm_default_inst_26_28_3_tsni, match_scrut_arm_GT_inst_26_28_3_tsni, match_scrut_arm_default_inst_29_30_3_tsni, match_scrut_arm_GT_inst_29_30_3_tsni, match_scrut_arm_default_inst_29_31_3_tsni, match_scrut_arm_GT_inst_29_31_3_tsni, match_scrut_arm_default_inst_29_32_3_tsni, match_scrut_arm_GT_inst_29_32_3_tsni, match_scrut_arm_default_inst_29_33_3_tsni, match_scrut_arm_GT_inst_29_33_3_tsni, match_scrut_arm_default_inst_34_35_tsni, match_scrut_arm_GT_inst_34_35_tsni, match_scrut_arm_default_inst_34_36_3_tsni, match_scrut_arm_GT_inst_34_36_3_tsni, match_scrut_arm_default_inst_34_37_3_tsni, match_scrut_arm_GT_inst_34_37_3_tsni, match_scrut_arm_default_inst_34_38_tsni, match_scrut_arm_LT_inst_34_39_tsni, match_scrut_arm_default_inst_34_39_tsni, match_xs_arm_Nil_inst_34_tsni, match_xs_arm_Cons_inst_34_tsni, match_scrut_arm_default_inst_40_41_28_3_tsni, match_scrut_arm_GT_inst_40_41_28_3_tsni, match_scrut_arm_default_inst_40_41_27_3_tsni, match_scrut_arm_GT_inst_40_41_27_3_tsni, match_scrut_arm_default_inst_40_42_25_3_tsni, match_scrut_arm_GT_inst_40_42_25_3_tsni, match_scrut_arm_default_inst_40_43_21_3_tsni, match_scrut_arm_GT_inst_40_43_21_3_tsni, match_scrut_arm_LT_inst_40_44_19_7_tsni, match_scrut_arm_default_inst_40_44_19_7_tsni, match_scrut_arm_default_inst_40_45_17_tsni, match_scrut_arm_GT_inst_40_45_17_tsni, match_scrut_arm_default_inst_40_45_16_3_tsni, match_scrut_arm_GT_inst_40_45_16_3_tsni, match_scrut_arm_default_inst_40_46_39_tsni, match_scrut_arm_LT_inst_40_46_39_tsni, match_scrut_arm_default_inst_40_46_38_tsni, match_xs_arm_Cons_inst_40_46_tsni, match_xs_arm_Nil_inst_40_46_tsni, match_scrut_arm_default_inst_40_46_37_3_tsni, match_scrut_arm_GT_inst_40_46_37_3_tsni, match_scrut_arm_default_inst_40_46_36_3_tsni, match_scrut_arm_GT_inst_40_46_36_3_tsni, match_scrut_arm_default_inst_40_46_35_tsni, match_scrut_arm_GT_inst_40_46_35_tsni, match_scrut_arm_default_inst_40_47_23_tsni, match_scrut_arm_LT_inst_40_47_23_tsni, match_scrut_arm_default_inst_40_48_33_3_tsni, match_scrut_arm_GT_inst_40_48_33_3_tsni, match_scrut_arm_default_inst_40_48_32_3_tsni, match_scrut_arm_GT_inst_40_48_32_3_tsni, match_scrut_arm_default_inst_40_48_31_3_tsni, match_scrut_arm_GT_inst_40_48_31_3_tsni, match_scrut_arm_default_inst_40_48_30_3_tsni, match_scrut_arm_GT_inst_40_48_30_3_tsni, match_xs_arm_Cons_inst_40_49_50_tsni, match_xs_arm_Nil_inst_40_59_tsni, match_xs_arm_Cons_inst_40_59_tsni, match_xs_arm_Cons_inst_40_52_55_56_tsni, match_xs_arm_Cons_inst_53_54_52_55_56_tsni, match_xs_arm_Nil_inst_53_54_59_tsni, match_xs_arm_Cons_inst_53_54_59_tsni, match_scrut_arm_default_inst_53_54_48_30_3_tsni, match_scrut_arm_GT_inst_53_54_48_30_3_tsni, match_scrut_arm_default_inst_53_54_48_31_3_tsni, match_scrut_arm_GT_inst_53_54_48_31_3_tsni, match_scrut_arm_default_inst_53_54_48_32_3_tsni, match_scrut_arm_GT_inst_53_54_48_32_3_tsni, match_scrut_arm_default_inst_53_54_48_33_3_tsni, match_scrut_arm_GT_inst_53_54_48_33_3_tsni, match_xs_arm_Cons_inst_53_54_49_50_tsni, match_scrut_arm_LT_inst_53_54_47_23_tsni, match_scrut_arm_default_inst_53_54_47_23_tsni, match_scrut_arm_default_inst_53_54_46_35_tsni, match_scrut_arm_GT_inst_53_54_46_35_tsni, match_scrut_arm_default_inst_53_54_46_36_3_tsni, match_scrut_arm_GT_inst_53_54_46_36_3_tsni, match_scrut_arm_default_inst_53_54_46_37_3_tsni, match_scrut_arm_GT_inst_53_54_46_37_3_tsni, match_scrut_arm_default_inst_53_54_46_38_tsni, match_scrut_arm_LT_inst_53_54_46_39_tsni, match_scrut_arm_default_inst_53_54_46_39_tsni, match_xs_arm_Nil_inst_53_54_46_tsni, match_xs_arm_Cons_inst_53_54_46_tsni, match_scrut_arm_default_inst_53_54_45_16_3_tsni, match_scrut_arm_GT_inst_53_54_45_16_3_tsni, match_scrut_arm_default_inst_53_54_45_17_tsni, match_scrut_arm_GT_inst_53_54_45_17_tsni, match_scrut_arm_default_inst_53_54_44_19_7_tsni, match_scrut_arm_LT_inst_53_54_44_19_7_tsni, match_scrut_arm_default_inst_53_54_43_21_3_tsni, match_scrut_arm_GT_inst_53_54_43_21_3_tsni, match_scrut_arm_default_inst_53_54_42_25_3_tsni, match_scrut_arm_GT_inst_53_54_42_25_3_tsni, match_scrut_arm_default_inst_53_54_41_27_3_tsni, match_scrut_arm_GT_inst_53_54_41_27_3_tsni, match_scrut_arm_default_inst_53_54_41_28_3_tsni, match_scrut_arm_GT_inst_53_54_41_28_3_tsni, match_scrut_arm_default_inst_57_58_54_41_28_3_tsni, match_scrut_arm_GT_inst_57_58_54_41_28_3_tsni, match_scrut_arm_default_inst_57_58_54_41_27_3_tsni, match_scrut_arm_GT_inst_57_58_54_41_27_3_tsni, match_scrut_arm_default_inst_57_58_54_42_25_3_tsni, match_scrut_arm_GT_inst_57_58_54_42_25_3_tsni, match_scrut_arm_default_inst_57_58_54_43_21_3_tsni, match_scrut_arm_GT_inst_57_58_54_43_21_3_tsni, match_scrut_arm_LT_inst_57_58_54_44_19_7_tsni, match_scrut_arm_default_inst_57_58_54_44_19_7_tsni, match_scrut_arm_default_inst_57_58_54_45_17_tsni, match_scrut_arm_GT_inst_57_58_54_45_17_tsni, match_scrut_arm_default_inst_57_58_54_45_16_3_tsni, match_scrut_arm_GT_inst_57_58_54_45_16_3_tsni, match_scrut_arm_default_inst_57_58_54_46_39_tsni, match_scrut_arm_LT_inst_57_58_54_46_39_tsni, match_scrut_arm_default_inst_57_58_54_46_38_tsni, match_xs_arm_Cons_inst_57_58_54_46_tsni, match_xs_arm_Nil_inst_57_58_54_46_tsni, match_scrut_arm_default_inst_57_58_54_46_37_3_tsni, match_scrut_arm_GT_inst_57_58_54_46_37_3_tsni, match_scrut_arm_default_inst_57_58_54_46_36_3_tsni, match_scrut_arm_GT_inst_57_58_54_46_36_3_tsni, match_scrut_arm_default_inst_57_58_54_46_35_tsni, match_scrut_arm_GT_inst_57_58_54_46_35_tsni, match_scrut_arm_default_inst_57_58_54_47_23_tsni, match_scrut_arm_LT_inst_57_58_54_47_23_tsni, match_scrut_arm_default_inst_57_58_54_48_33_3_tsni, match_scrut_arm_GT_inst_57_58_54_48_33_3_tsni, match_scrut_arm_default_inst_57_58_54_48_32_3_tsni, match_scrut_arm_GT_inst_57_58_54_48_32_3_tsni, match_scrut_arm_default_inst_57_58_54_48_31_3_tsni, match_scrut_arm_GT_inst_57_58_54_48_31_3_tsni, match_scrut_arm_default_inst_57_58_54_48_30_3_tsni, match_scrut_arm_GT_inst_57_58_54_48_30_3_tsni, match_xs_arm_Cons_inst_57_58_54_49_50_tsni, match_xs_arm_Nil_inst_57_58_54_59_tsni, match_xs_arm_Cons_inst_57_58_54_59_tsni, match_xs_arm_Cons_inst_57_58_54_52_55_56_tsni;
match_s__rest_inst_10_tsni = function match_s__rest_inst_10_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_s__rest_inst_40_51_tsni = function match_s__rest_inst_40_51_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_s__rest_inst_53_54_51_tsni = function match_s__rest_inst_53_54_51_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_s__rest_inst_57_58_54_51_tsni = function match_s__rest_inst_57_58_54_51_tsni(l, tmp) {
  let tt;
  tt = tmp;
  return NofibPrelude.Cons(l, tt)
};
match_scrut_arm_default_inst_0_tsni = function match_scrut_arm_default_inst_0_tsni() {
  return false
};
match_scrut_arm_GT_inst_0_tsni = function match_scrut_arm_GT_inst_0_tsni() {
  return true
};
match_scrut_arm_default_inst_2_3_tsni = function match_scrut_arm_default_inst_2_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_2_3_tsni = function match_scrut_arm_GT_inst_2_3_tsni() {
  return true
};
match_scrut_arm_default_inst_4_tsni = function match_scrut_arm_default_inst_4_tsni() {
  return false
};
match_scrut_arm_LT_inst_4_tsni = function match_scrut_arm_LT_inst_4_tsni() {
  return true
};
match_scrut_arm_LT_inst_6_7_tsni = function match_scrut_arm_LT_inst_6_7_tsni() {
  return true
};
match_scrut_arm_default_inst_6_7_tsni = function match_scrut_arm_default_inst_6_7_tsni() {
  return false
};
match_scrut_arm_default_inst_8_tsni = function match_scrut_arm_default_inst_8_tsni() {
  return false
};
match_xs_arm_Cons_inst_12_55_56_tsni = function match_xs_arm_Cons_inst_12_55_56_tsni(ys, _deforest_Cons_head_inst_12_55_56_tsni, _deforest_Cons_tail_inst_12_55_56_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_12_55_56_tsni;
  param1 = _deforest_Cons_tail_inst_12_55_56_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_12_55_56_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_scrut_arm_default_inst_15_16_3_tsni = function match_scrut_arm_default_inst_15_16_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_15_16_3_tsni = function match_scrut_arm_GT_inst_15_16_3_tsni() {
  return true
};
match_scrut_arm_default_inst_15_17_tsni = function match_scrut_arm_default_inst_15_17_tsni() {
  return false
};
match_scrut_arm_GT_inst_15_17_tsni = function match_scrut_arm_GT_inst_15_17_tsni() {
  return true
};
match_scrut_arm_default_inst_18_19_7_tsni = function match_scrut_arm_default_inst_18_19_7_tsni() {
  return false
};
match_scrut_arm_LT_inst_18_19_7_tsni = function match_scrut_arm_LT_inst_18_19_7_tsni() {
  return true
};
match_scrut_arm_default_inst_20_21_3_tsni = function match_scrut_arm_default_inst_20_21_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_20_21_3_tsni = function match_scrut_arm_GT_inst_20_21_3_tsni() {
  return true
};
match_scrut_arm_LT_inst_22_23_tsni = function match_scrut_arm_LT_inst_22_23_tsni() {
  return true
};
match_scrut_arm_default_inst_22_23_tsni = function match_scrut_arm_default_inst_22_23_tsni() {
  return false
};
match_scrut_arm_default_inst_24_25_3_tsni = function match_scrut_arm_default_inst_24_25_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_24_25_3_tsni = function match_scrut_arm_GT_inst_24_25_3_tsni() {
  return true
};
match_scrut_arm_default_inst_26_27_3_tsni = function match_scrut_arm_default_inst_26_27_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_26_27_3_tsni = function match_scrut_arm_GT_inst_26_27_3_tsni() {
  return true
};
match_scrut_arm_default_inst_26_28_3_tsni = function match_scrut_arm_default_inst_26_28_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_26_28_3_tsni = function match_scrut_arm_GT_inst_26_28_3_tsni() {
  return true
};
match_scrut_arm_default_inst_29_30_3_tsni = function match_scrut_arm_default_inst_29_30_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_29_30_3_tsni = function match_scrut_arm_GT_inst_29_30_3_tsni() {
  return true
};
match_scrut_arm_default_inst_29_31_3_tsni = function match_scrut_arm_default_inst_29_31_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_29_31_3_tsni = function match_scrut_arm_GT_inst_29_31_3_tsni() {
  return true
};
match_scrut_arm_default_inst_29_32_3_tsni = function match_scrut_arm_default_inst_29_32_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_29_32_3_tsni = function match_scrut_arm_GT_inst_29_32_3_tsni() {
  return true
};
match_scrut_arm_default_inst_29_33_3_tsni = function match_scrut_arm_default_inst_29_33_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_29_33_3_tsni = function match_scrut_arm_GT_inst_29_33_3_tsni() {
  return true
};
match_scrut_arm_default_inst_34_35_tsni = function match_scrut_arm_default_inst_34_35_tsni() {
  return false
};
match_scrut_arm_GT_inst_34_35_tsni = function match_scrut_arm_GT_inst_34_35_tsni() {
  return true
};
match_scrut_arm_default_inst_34_36_3_tsni = function match_scrut_arm_default_inst_34_36_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_34_36_3_tsni = function match_scrut_arm_GT_inst_34_36_3_tsni() {
  return true
};
match_scrut_arm_default_inst_34_37_3_tsni = function match_scrut_arm_default_inst_34_37_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_34_37_3_tsni = function match_scrut_arm_GT_inst_34_37_3_tsni() {
  return true
};
match_scrut_arm_default_inst_34_38_tsni = function match_scrut_arm_default_inst_34_38_tsni() {
  return false
};
match_scrut_arm_LT_inst_34_39_tsni = function match_scrut_arm_LT_inst_34_39_tsni() {
  return true
};
match_scrut_arm_default_inst_34_39_tsni = function match_scrut_arm_default_inst_34_39_tsni() {
  return false
};
match_xs_arm_Nil_inst_34_tsni = function match_xs_arm_Nil_inst_34_tsni(merge, merge_lists) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_34_tsni = function match_xs_arm_Cons_inst_34_tsni(merge, merge_lists, _deforest_Cons_head_inst_34_tsni, _deforest_Cons_tail_inst_34_tsni) {
  let param0, param1, x, xs_, tmp;
  param0 = _deforest_Cons_head_inst_34_tsni;
  param1 = _deforest_Cons_tail_inst_34_tsni;
  x = param0;
  xs_ = param1;
  tmp = merge_lists(xs_);
  return merge(x, tmp)
};
match_scrut_arm_default_inst_40_41_28_3_tsni = function match_scrut_arm_default_inst_40_41_28_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_41_28_3_tsni = function match_scrut_arm_GT_inst_40_41_28_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_41_27_3_tsni = function match_scrut_arm_default_inst_40_41_27_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_41_27_3_tsni = function match_scrut_arm_GT_inst_40_41_27_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_42_25_3_tsni = function match_scrut_arm_default_inst_40_42_25_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_42_25_3_tsni = function match_scrut_arm_GT_inst_40_42_25_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_43_21_3_tsni = function match_scrut_arm_default_inst_40_43_21_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_43_21_3_tsni = function match_scrut_arm_GT_inst_40_43_21_3_tsni() {
  return true
};
match_scrut_arm_LT_inst_40_44_19_7_tsni = function match_scrut_arm_LT_inst_40_44_19_7_tsni() {
  return true
};
match_scrut_arm_default_inst_40_44_19_7_tsni = function match_scrut_arm_default_inst_40_44_19_7_tsni() {
  return false
};
match_scrut_arm_default_inst_40_45_17_tsni = function match_scrut_arm_default_inst_40_45_17_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_45_17_tsni = function match_scrut_arm_GT_inst_40_45_17_tsni() {
  return true
};
match_scrut_arm_default_inst_40_45_16_3_tsni = function match_scrut_arm_default_inst_40_45_16_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_45_16_3_tsni = function match_scrut_arm_GT_inst_40_45_16_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_46_39_tsni = function match_scrut_arm_default_inst_40_46_39_tsni() {
  return false
};
match_scrut_arm_LT_inst_40_46_39_tsni = function match_scrut_arm_LT_inst_40_46_39_tsni() {
  return true
};
match_scrut_arm_default_inst_40_46_38_tsni = function match_scrut_arm_default_inst_40_46_38_tsni() {
  return false
};
match_xs_arm_Cons_inst_40_46_tsni = function match_xs_arm_Cons_inst_40_46_tsni(merge, merge_lists, _deforest_Cons_head_inst_40_46_tsni, _deforest_Cons_tail_inst_40_46_tsni) {
  let param0, param1, x, xs_, tmp;
  param0 = _deforest_Cons_head_inst_40_46_tsni;
  param1 = _deforest_Cons_tail_inst_40_46_tsni;
  x = param0;
  xs_ = param1;
  tmp = merge_lists(xs_);
  return merge(x, tmp)
};
match_xs_arm_Nil_inst_40_46_tsni = function match_xs_arm_Nil_inst_40_46_tsni(merge, merge_lists) {
  return NofibPrelude.Nil
};
match_scrut_arm_default_inst_40_46_37_3_tsni = function match_scrut_arm_default_inst_40_46_37_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_46_37_3_tsni = function match_scrut_arm_GT_inst_40_46_37_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_46_36_3_tsni = function match_scrut_arm_default_inst_40_46_36_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_46_36_3_tsni = function match_scrut_arm_GT_inst_40_46_36_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_46_35_tsni = function match_scrut_arm_default_inst_40_46_35_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_46_35_tsni = function match_scrut_arm_GT_inst_40_46_35_tsni() {
  return true
};
match_scrut_arm_default_inst_40_47_23_tsni = function match_scrut_arm_default_inst_40_47_23_tsni() {
  return false
};
match_scrut_arm_LT_inst_40_47_23_tsni = function match_scrut_arm_LT_inst_40_47_23_tsni() {
  return true
};
match_scrut_arm_default_inst_40_48_33_3_tsni = function match_scrut_arm_default_inst_40_48_33_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_48_33_3_tsni = function match_scrut_arm_GT_inst_40_48_33_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_48_32_3_tsni = function match_scrut_arm_default_inst_40_48_32_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_48_32_3_tsni = function match_scrut_arm_GT_inst_40_48_32_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_48_31_3_tsni = function match_scrut_arm_default_inst_40_48_31_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_48_31_3_tsni = function match_scrut_arm_GT_inst_40_48_31_3_tsni() {
  return true
};
match_scrut_arm_default_inst_40_48_30_3_tsni = function match_scrut_arm_default_inst_40_48_30_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_40_48_30_3_tsni = function match_scrut_arm_GT_inst_40_48_30_3_tsni() {
  return true
};
match_xs_arm_Cons_inst_40_49_50_tsni = function match_xs_arm_Cons_inst_40_49_50_tsni(sep, _deforest_Cons_head_inst_40_49_50_tsni, _deforest_Cons_tail_inst_40_49_50_tsni) {
  let param0, param1, x, xs_, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  param0 = _deforest_Cons_head_inst_40_49_50_tsni;
  param1 = _deforest_Cons_tail_inst_40_49_50_tsni;
  x = param0;
  xs_ = param1;
  tmp = prependToAll_inst_40_49_50_tsni(sep, xs_);
  _deforest_Cons_head1 = x;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (f, z) => {
    return match_xs_arm_Cons_inst_40_59_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = sep;
  _deforest_Cons_tail = tmp1;
  return (f, z) => {
    return match_xs_arm_Cons_inst_40_59_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_40_59_tsni = function match_xs_arm_Nil_inst_40_59_tsni(f, z) {
  return z
};
match_xs_arm_Cons_inst_40_59_tsni = function match_xs_arm_Cons_inst_40_59_tsni(f, z, _deforest_Cons_head_inst_40_59_tsni, _deforest_Cons_tail_inst_40_59_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_40_59_tsni;
  param1 = _deforest_Cons_tail_inst_40_59_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_40_59_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_xs_arm_Cons_inst_40_52_55_56_tsni = function match_xs_arm_Cons_inst_40_52_55_56_tsni(ys, _deforest_Cons_head_inst_40_52_55_56_tsni, _deforest_Cons_tail_inst_40_52_55_56_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_40_52_55_56_tsni;
  param1 = _deforest_Cons_tail_inst_40_52_55_56_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_52_55_56_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_53_54_52_55_56_tsni = function match_xs_arm_Cons_inst_53_54_52_55_56_tsni(ys, _deforest_Cons_head_inst_53_54_52_55_56_tsni, _deforest_Cons_tail_inst_53_54_52_55_56_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_53_54_52_55_56_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_52_55_56_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_53_54_52_55_56_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f, a) => {
    let param01, param11, h, t, tmp1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    tmp1 = runtime.safeCall(f(a, h));
    return foldl_inst_53_60_61_tsni(f, tmp1, t)
  }
};
match_xs_arm_Nil_inst_53_54_59_tsni = function match_xs_arm_Nil_inst_53_54_59_tsni(f, z) {
  return z
};
match_xs_arm_Cons_inst_53_54_59_tsni = function match_xs_arm_Cons_inst_53_54_59_tsni(f, z, _deforest_Cons_head_inst_53_54_59_tsni, _deforest_Cons_tail_inst_53_54_59_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_53_54_59_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_59_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_53_54_59_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_scrut_arm_default_inst_53_54_48_30_3_tsni = function match_scrut_arm_default_inst_53_54_48_30_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_48_30_3_tsni = function match_scrut_arm_GT_inst_53_54_48_30_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_48_31_3_tsni = function match_scrut_arm_default_inst_53_54_48_31_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_48_31_3_tsni = function match_scrut_arm_GT_inst_53_54_48_31_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_48_32_3_tsni = function match_scrut_arm_default_inst_53_54_48_32_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_48_32_3_tsni = function match_scrut_arm_GT_inst_53_54_48_32_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_48_33_3_tsni = function match_scrut_arm_default_inst_53_54_48_33_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_48_33_3_tsni = function match_scrut_arm_GT_inst_53_54_48_33_3_tsni() {
  return true
};
match_xs_arm_Cons_inst_53_54_49_50_tsni = function match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head_inst_53_54_49_50_tsni, _deforest_Cons_tail_inst_53_54_49_50_tsni) {
  let param0, param1, x, xs_, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  param0 = _deforest_Cons_head_inst_53_54_49_50_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_49_50_tsni;
  x = param0;
  xs_ = param1;
  tmp = prependToAll_inst_53_54_49_50_tsni(sep, xs_);
  _deforest_Cons_head1 = x;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (f, z) => {
    return match_xs_arm_Cons_inst_53_54_59_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = sep;
  _deforest_Cons_tail = tmp1;
  return (f, z) => {
    return match_xs_arm_Cons_inst_53_54_59_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_scrut_arm_LT_inst_53_54_47_23_tsni = function match_scrut_arm_LT_inst_53_54_47_23_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_47_23_tsni = function match_scrut_arm_default_inst_53_54_47_23_tsni() {
  return false
};
match_scrut_arm_default_inst_53_54_46_35_tsni = function match_scrut_arm_default_inst_53_54_46_35_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_46_35_tsni = function match_scrut_arm_GT_inst_53_54_46_35_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_46_36_3_tsni = function match_scrut_arm_default_inst_53_54_46_36_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_46_36_3_tsni = function match_scrut_arm_GT_inst_53_54_46_36_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_46_37_3_tsni = function match_scrut_arm_default_inst_53_54_46_37_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_46_37_3_tsni = function match_scrut_arm_GT_inst_53_54_46_37_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_46_38_tsni = function match_scrut_arm_default_inst_53_54_46_38_tsni() {
  return false
};
match_scrut_arm_LT_inst_53_54_46_39_tsni = function match_scrut_arm_LT_inst_53_54_46_39_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_46_39_tsni = function match_scrut_arm_default_inst_53_54_46_39_tsni() {
  return false
};
match_xs_arm_Nil_inst_53_54_46_tsni = function match_xs_arm_Nil_inst_53_54_46_tsni(merge, merge_lists) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_53_54_46_tsni = function match_xs_arm_Cons_inst_53_54_46_tsni(merge, merge_lists, _deforest_Cons_head_inst_53_54_46_tsni, _deforest_Cons_tail_inst_53_54_46_tsni) {
  let param0, param1, x, xs_, tmp;
  param0 = _deforest_Cons_head_inst_53_54_46_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_46_tsni;
  x = param0;
  xs_ = param1;
  tmp = merge_lists(xs_);
  return merge(x, tmp)
};
match_scrut_arm_default_inst_53_54_45_16_3_tsni = function match_scrut_arm_default_inst_53_54_45_16_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_45_16_3_tsni = function match_scrut_arm_GT_inst_53_54_45_16_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_45_17_tsni = function match_scrut_arm_default_inst_53_54_45_17_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_45_17_tsni = function match_scrut_arm_GT_inst_53_54_45_17_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_44_19_7_tsni = function match_scrut_arm_default_inst_53_54_44_19_7_tsni() {
  return false
};
match_scrut_arm_LT_inst_53_54_44_19_7_tsni = function match_scrut_arm_LT_inst_53_54_44_19_7_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_43_21_3_tsni = function match_scrut_arm_default_inst_53_54_43_21_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_43_21_3_tsni = function match_scrut_arm_GT_inst_53_54_43_21_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_42_25_3_tsni = function match_scrut_arm_default_inst_53_54_42_25_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_42_25_3_tsni = function match_scrut_arm_GT_inst_53_54_42_25_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_41_27_3_tsni = function match_scrut_arm_default_inst_53_54_41_27_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_41_27_3_tsni = function match_scrut_arm_GT_inst_53_54_41_27_3_tsni() {
  return true
};
match_scrut_arm_default_inst_53_54_41_28_3_tsni = function match_scrut_arm_default_inst_53_54_41_28_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_53_54_41_28_3_tsni = function match_scrut_arm_GT_inst_53_54_41_28_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_41_28_3_tsni = function match_scrut_arm_default_inst_57_58_54_41_28_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_41_28_3_tsni = function match_scrut_arm_GT_inst_57_58_54_41_28_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_41_27_3_tsni = function match_scrut_arm_default_inst_57_58_54_41_27_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_41_27_3_tsni = function match_scrut_arm_GT_inst_57_58_54_41_27_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_42_25_3_tsni = function match_scrut_arm_default_inst_57_58_54_42_25_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_42_25_3_tsni = function match_scrut_arm_GT_inst_57_58_54_42_25_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_43_21_3_tsni = function match_scrut_arm_default_inst_57_58_54_43_21_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_43_21_3_tsni = function match_scrut_arm_GT_inst_57_58_54_43_21_3_tsni() {
  return true
};
match_scrut_arm_LT_inst_57_58_54_44_19_7_tsni = function match_scrut_arm_LT_inst_57_58_54_44_19_7_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_44_19_7_tsni = function match_scrut_arm_default_inst_57_58_54_44_19_7_tsni() {
  return false
};
match_scrut_arm_default_inst_57_58_54_45_17_tsni = function match_scrut_arm_default_inst_57_58_54_45_17_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_45_17_tsni = function match_scrut_arm_GT_inst_57_58_54_45_17_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_45_16_3_tsni = function match_scrut_arm_default_inst_57_58_54_45_16_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_45_16_3_tsni = function match_scrut_arm_GT_inst_57_58_54_45_16_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_46_39_tsni = function match_scrut_arm_default_inst_57_58_54_46_39_tsni() {
  return false
};
match_scrut_arm_LT_inst_57_58_54_46_39_tsni = function match_scrut_arm_LT_inst_57_58_54_46_39_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_46_38_tsni = function match_scrut_arm_default_inst_57_58_54_46_38_tsni() {
  return false
};
match_xs_arm_Cons_inst_57_58_54_46_tsni = function match_xs_arm_Cons_inst_57_58_54_46_tsni(merge, merge_lists, _deforest_Cons_head_inst_57_58_54_46_tsni, _deforest_Cons_tail_inst_57_58_54_46_tsni) {
  let param0, param1, x, xs_, tmp;
  param0 = _deforest_Cons_head_inst_57_58_54_46_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_54_46_tsni;
  x = param0;
  xs_ = param1;
  tmp = merge_lists(xs_);
  return merge(x, tmp)
};
match_xs_arm_Nil_inst_57_58_54_46_tsni = function match_xs_arm_Nil_inst_57_58_54_46_tsni(merge, merge_lists) {
  return NofibPrelude.Nil
};
match_scrut_arm_default_inst_57_58_54_46_37_3_tsni = function match_scrut_arm_default_inst_57_58_54_46_37_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_46_37_3_tsni = function match_scrut_arm_GT_inst_57_58_54_46_37_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_46_36_3_tsni = function match_scrut_arm_default_inst_57_58_54_46_36_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_46_36_3_tsni = function match_scrut_arm_GT_inst_57_58_54_46_36_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_46_35_tsni = function match_scrut_arm_default_inst_57_58_54_46_35_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_46_35_tsni = function match_scrut_arm_GT_inst_57_58_54_46_35_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_47_23_tsni = function match_scrut_arm_default_inst_57_58_54_47_23_tsni() {
  return false
};
match_scrut_arm_LT_inst_57_58_54_47_23_tsni = function match_scrut_arm_LT_inst_57_58_54_47_23_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_48_33_3_tsni = function match_scrut_arm_default_inst_57_58_54_48_33_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_48_33_3_tsni = function match_scrut_arm_GT_inst_57_58_54_48_33_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_48_32_3_tsni = function match_scrut_arm_default_inst_57_58_54_48_32_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_48_32_3_tsni = function match_scrut_arm_GT_inst_57_58_54_48_32_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_48_31_3_tsni = function match_scrut_arm_default_inst_57_58_54_48_31_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_48_31_3_tsni = function match_scrut_arm_GT_inst_57_58_54_48_31_3_tsni() {
  return true
};
match_scrut_arm_default_inst_57_58_54_48_30_3_tsni = function match_scrut_arm_default_inst_57_58_54_48_30_3_tsni() {
  return false
};
match_scrut_arm_GT_inst_57_58_54_48_30_3_tsni = function match_scrut_arm_GT_inst_57_58_54_48_30_3_tsni() {
  return true
};
match_xs_arm_Cons_inst_57_58_54_49_50_tsni = function match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head_inst_57_58_54_49_50_tsni, _deforest_Cons_tail_inst_57_58_54_49_50_tsni) {
  let param0, param1, x, xs_, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  param0 = _deforest_Cons_head_inst_57_58_54_49_50_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_54_49_50_tsni;
  x = param0;
  xs_ = param1;
  tmp = prependToAll_inst_57_58_54_49_50_tsni(sep, xs_);
  _deforest_Cons_head1 = x;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (f, z) => {
    return match_xs_arm_Cons_inst_57_58_54_59_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = sep;
  _deforest_Cons_tail = tmp1;
  return (f, z) => {
    return match_xs_arm_Cons_inst_57_58_54_59_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_57_58_54_59_tsni = function match_xs_arm_Nil_inst_57_58_54_59_tsni(f, z) {
  return z
};
match_xs_arm_Cons_inst_57_58_54_59_tsni = function match_xs_arm_Cons_inst_57_58_54_59_tsni(f, z, _deforest_Cons_head_inst_57_58_54_59_tsni, _deforest_Cons_tail_inst_57_58_54_59_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_57_58_54_59_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_54_59_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_57_58_54_59_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
};
match_xs_arm_Cons_inst_57_58_54_52_55_56_tsni = function match_xs_arm_Cons_inst_57_58_54_52_55_56_tsni(ys, _deforest_Cons_head_inst_57_58_54_52_55_56_tsni, _deforest_Cons_tail_inst_57_58_54_52_55_56_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_57_58_54_52_55_56_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_54_52_55_56_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_57_58_54_52_55_56_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f, a) => {
    let param01, param11, h, t, tmp1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    tmp1 = runtime.safeCall(f(a, h));
    return foldl_inst_57_58_60_61_tsni(f, tmp1, t)
  }
};
compareList_inst_0_1_tsni = function compareList_inst_0_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_0_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_0_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_0_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_0_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_0_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_0_tsni()
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
gtList_inst_2_3_tsni = function gtList_inst_2_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_2_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_2_3_1_tsni = function compareList_inst_2_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_2_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_2_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_2_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_2_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_2_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_2_3_tsni()
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
compareList_inst_4_5_tsni = function compareList_inst_4_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_4_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_4_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_4_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_4_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_4_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_4_tsni()
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
ltList_inst_6_7_tsni = function ltList_inst_6_7_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_6_7_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_6_7_5_tsni = function compareList_inst_6_7_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_6_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_6_7_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_6_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_6_7_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_6_7_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_6_7_tsni()
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
compareList_inst_8_9_tsni = function compareList_inst_8_9_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return true
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_8_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_8_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_8_9_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_8_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_8_tsni()
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
break__inst_10_11_tsni = function break__inst_10_11_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_10_tsni(l, tmp2)
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
        tmp2 = sorting.lines(s__);
        return match_s__rest_inst_10_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_10_11_tsni(p, xs);
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
map_inst_12_13_tsni = function map_inst_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_12_55_tsni(xs2);
      return append_inst_12_55_56_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_12_14_tsni = function append_inst_12_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_12_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_12_55_56_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leList_inst_15_16_tsni = function leList_inst_15_16_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_15_16_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_15_16_3_tsni = function gtList_inst_15_16_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_15_16_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_15_16_3_1_tsni = function compareList_inst_15_16_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_15_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_15_16_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_15_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_15_16_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_15_16_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_15_16_3_tsni()
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
gtList_inst_15_17_tsni = function gtList_inst_15_17_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_15_17_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_15_17_1_tsni = function compareList_inst_15_17_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_15_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_15_17_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_15_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_15_17_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_15_17_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_15_17_tsni()
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
geList_inst_18_19_tsni = function geList_inst_18_19_tsni(a, b) {
  let tmp;
  tmp = ltList_inst_18_19_7_tsni(a, b);
  return Predef.not(tmp)
};
ltList_inst_18_19_7_tsni = function ltList_inst_18_19_7_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_18_19_7_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_18_19_7_5_tsni = function compareList_inst_18_19_7_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_18_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_18_19_7_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_18_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_18_19_7_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_18_19_7_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_18_19_7_tsni()
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
leList_inst_20_21_tsni = function leList_inst_20_21_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_20_21_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_20_21_3_tsni = function gtList_inst_20_21_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_20_21_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_20_21_3_1_tsni = function compareList_inst_20_21_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_20_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_20_21_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_20_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_20_21_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_20_21_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_20_21_3_tsni()
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
ltList_inst_22_23_tsni = function ltList_inst_22_23_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_22_23_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_22_23_5_tsni = function compareList_inst_22_23_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_22_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_22_23_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_22_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_22_23_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_22_23_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_22_23_tsni()
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
leList_inst_24_25_tsni = function leList_inst_24_25_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_24_25_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_24_25_3_tsni = function gtList_inst_24_25_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_24_25_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_24_25_3_1_tsni = function compareList_inst_24_25_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_24_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_24_25_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_24_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_24_25_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_24_25_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_24_25_3_tsni()
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
leList_inst_26_27_tsni = function leList_inst_26_27_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_26_27_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_26_27_3_tsni = function gtList_inst_26_27_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_26_27_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_26_27_3_1_tsni = function compareList_inst_26_27_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_26_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_26_27_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_26_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_26_27_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_26_27_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_26_27_3_tsni()
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
leList_inst_26_28_tsni = function leList_inst_26_28_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_26_28_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_26_28_3_tsni = function gtList_inst_26_28_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_26_28_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_26_28_3_1_tsni = function compareList_inst_26_28_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_26_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_26_28_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_26_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_26_28_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_26_28_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_26_28_3_tsni()
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
leList_inst_29_30_tsni = function leList_inst_29_30_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_29_30_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_29_30_3_tsni = function gtList_inst_29_30_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_29_30_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_29_30_3_1_tsni = function compareList_inst_29_30_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_29_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_29_30_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_29_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_29_30_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_29_30_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_29_30_3_tsni()
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
leList_inst_29_31_tsni = function leList_inst_29_31_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_29_31_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_29_31_3_tsni = function gtList_inst_29_31_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_29_31_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_29_31_3_1_tsni = function compareList_inst_29_31_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_29_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_29_31_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_29_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_29_31_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_29_31_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_29_31_3_tsni()
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
leList_inst_29_32_tsni = function leList_inst_29_32_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_29_32_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_29_32_3_tsni = function gtList_inst_29_32_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_29_32_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_29_32_3_1_tsni = function compareList_inst_29_32_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_29_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_29_32_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_29_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_29_32_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_29_32_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_29_32_3_tsni()
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
leList_inst_29_33_tsni = function leList_inst_29_33_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_29_33_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_29_33_3_tsni = function gtList_inst_29_33_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_29_33_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_29_33_3_1_tsni = function compareList_inst_29_33_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_29_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_29_33_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_29_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_29_33_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_29_33_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_29_33_3_tsni()
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
gtList_inst_34_35_tsni = function gtList_inst_34_35_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_34_35_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_34_35_1_tsni = function compareList_inst_34_35_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_34_35_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_34_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_34_35_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_34_35_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_34_35_tsni()
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
leList_inst_34_36_tsni = function leList_inst_34_36_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_34_36_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_34_36_3_tsni = function gtList_inst_34_36_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_34_36_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_34_36_3_1_tsni = function compareList_inst_34_36_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_34_36_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_34_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_34_36_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_34_36_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_34_36_3_tsni()
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
leList_inst_34_37_tsni = function leList_inst_34_37_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_34_37_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_34_37_3_tsni = function gtList_inst_34_37_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_34_37_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_34_37_3_1_tsni = function compareList_inst_34_37_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_34_37_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_34_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_34_37_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_34_37_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_34_37_3_tsni()
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
eqList_inst_34_38_tsni = function eqList_inst_34_38_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_34_38_9_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_34_38_9_tsni = function compareList_inst_34_38_9_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return true
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_34_38_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_38_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_34_38_9_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_34_38_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_34_38_tsni()
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
ltList_inst_34_39_tsni = function ltList_inst_34_39_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_34_39_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_34_39_5_tsni = function compareList_inst_34_39_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_34_39_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_34_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_34_39_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_34_39_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_34_39_tsni()
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
treeSort2_inst_40_41_tsni = function treeSort2_inst_40_41_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, y1, scrut1, tmp1, tmp2, tmp3, tmp4;
      if (t instanceof sorting.Tip2.class) {
        return runtime.safeCall(sorting.Twig2(x))
      } else if (t instanceof sorting.Twig2.class) {
        param0 = t.a;
        y1 = param0;
        scrut1 = leList_inst_40_41_27_tsni(x, y1);
        if (scrut1 === true) {
          tmp1 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, tmp1, sorting.Tip2))
        } else {
          tmp2 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, sorting.Tip2, tmp2))
        }
      } else if (t instanceof sorting.Branch2.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_40_41_28_tsni(x, y);
        if (scrut === true) {
          tmp3 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch2(y, tmp3, r))
        } else {
          tmp4 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch2(y, l, tmp4))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip2, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, x1, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip2.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Twig2.class) {
      param0 = t.a;
      x1 = param0;
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else if (t instanceof sorting.Branch2.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_40_41_28_tsni = function leList_inst_40_41_28_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_41_28_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_41_28_3_tsni = function gtList_inst_40_41_28_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_41_28_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_41_28_3_1_tsni = function compareList_inst_40_41_28_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_41_28_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_41_28_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_41_28_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_41_28_3_tsni()
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
leList_inst_40_41_27_tsni = function leList_inst_40_41_27_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_41_27_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_41_27_3_tsni = function gtList_inst_40_41_27_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_41_27_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_41_27_3_1_tsni = function compareList_inst_40_41_27_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_41_27_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_41_27_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_41_27_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_41_27_3_tsni()
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
treeSort_inst_40_42_tsni = function treeSort_inst_40_42_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_40_42_25_tsni(x, y);
        if (scrut === true) {
          tmp1 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch(y, tmp1, r))
        } else {
          tmp2 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch(y, l, tmp2))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_40_42_25_tsni = function leList_inst_40_42_25_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_42_25_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_42_25_3_tsni = function gtList_inst_40_42_25_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_42_25_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_42_25_3_1_tsni = function compareList_inst_40_42_25_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_42_25_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_42_25_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_42_25_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_42_25_3_tsni()
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
quickerSort_inst_40_43_tsni = function quickerSort_inst_40_43_tsni(xss) {
  let split, param0, param1, x, xs, x1;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else {
      x = param0;
      xs = param1;
      split = function split(x2, lo, hi, ys) {
        let param01, param11, y, ys_, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp = quickerSort_inst_40_43_tsni(lo);
          tmp1 = quickerSort_inst_40_43_tsni(hi);
          tmp2 = NofibPrelude.Cons(x2, tmp1);
          return NofibPrelude.append(tmp, tmp2)
        } else if (ys instanceof NofibPrelude.Cons.class) {
          param01 = ys.head;
          param11 = ys.tail;
          y = param01;
          ys_ = param11;
          scrut = leList_inst_40_43_21_tsni(y, x2);
          if (scrut === true) {
            tmp3 = NofibPrelude.Cons(y, lo);
            return split(x2, tmp3, hi, ys_)
          } else {
            tmp4 = NofibPrelude.Cons(y, hi);
            return split(x2, lo, tmp4, ys_)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return split(x, NofibPrelude.Nil, NofibPrelude.Nil, xs)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leList_inst_40_43_21_tsni = function leList_inst_40_43_21_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_43_21_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_43_21_3_tsni = function gtList_inst_40_43_21_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_43_21_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_43_21_3_1_tsni = function compareList_inst_40_43_21_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_43_21_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_43_21_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_43_21_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_43_21_3_tsni()
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
quickSort2_inst_40_44_tsni = function quickSort2_inst_40_44_tsni(xs) {
  let param0, param1, x, xs_, scrut, first1, first0, lo, hi, tmp, tmp1, tmp2, lambda;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lambda = (undefined, function (y) {
      return geList_inst_40_44_19_tsni(x, y)
    });
    scrut = sorting.partition(lambda, xs_);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      lo = first0;
      hi = first1;
      tmp = quickSort2_inst_40_44_tsni(lo);
      tmp1 = quickSort2_inst_40_44_tsni(hi);
      tmp2 = NofibPrelude.Cons(x, tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
geList_inst_40_44_19_tsni = function geList_inst_40_44_19_tsni(a, b) {
  let tmp;
  tmp = ltList_inst_40_44_19_7_tsni(a, b);
  return Predef.not(tmp)
};
ltList_inst_40_44_19_7_tsni = function ltList_inst_40_44_19_7_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_44_19_7_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_44_19_7_5_tsni = function compareList_inst_40_44_19_7_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_40_44_19_7_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_44_19_7_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_40_44_19_7_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_40_44_19_7_tsni()
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
quickSort_inst_40_45_tsni = function quickSort_inst_40_45_tsni(xs) {
  let lscomp2, lscomp1, param0, param1, x, xs_, tmp, tmp1, tmp2, tmp3, tmp4;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lscomp1 = function lscomp1(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = leList_inst_40_45_16_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp1(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp1(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lscomp2 = function lscomp2(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = gtList_inst_40_45_17_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp2(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp2(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp1(xs_);
    tmp1 = quickSort_inst_40_45_tsni(tmp);
    tmp2 = lscomp2(xs_);
    tmp3 = quickSort_inst_40_45_tsni(tmp2);
    tmp4 = NofibPrelude.Cons(x, tmp3);
    return NofibPrelude.append(tmp1, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
};
gtList_inst_40_45_17_tsni = function gtList_inst_40_45_17_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_45_17_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_45_17_1_tsni = function compareList_inst_40_45_17_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_45_17_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_45_17_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_45_17_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_45_17_tsni()
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
leList_inst_40_45_16_tsni = function leList_inst_40_45_16_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_45_16_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_45_16_3_tsni = function gtList_inst_40_45_16_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_45_16_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_45_16_3_1_tsni = function compareList_inst_40_45_16_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_45_16_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_45_16_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_45_16_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_45_16_3_tsni()
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
mergeSort_inst_40_46_tsni = function mergeSort_inst_40_46_tsni(param) {
  let runsplit, merge, merge_lists, tmp;
  runsplit = function runsplit(run, xs) {
    let param0, param1, r, rs, param01, param11, x, xs_, rs1, scrut, scrut1, scrut2, x1, xs_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
    if (run instanceof NofibPrelude.Nil.class) {
      if (xs instanceof NofibPrelude.Nil.class) {
        return (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_40_46_tsni(merge1, merge_lists1)
        }
      } else if (xs instanceof NofibPrelude.Cons.class) {
        param01 = xs.head;
        param11 = xs.tail;
        x1 = param01;
        xs_1 = param11;
        tmp1 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
        return runsplit(tmp1, xs_1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      if (xs instanceof NofibPrelude.Nil.class) {
        _deforest_Cons_head = run;
        _deforest_Cons_tail = (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_40_46_tsni(merge1, merge_lists1)
        };
        return (merge1, merge_lists1) => {
          return match_xs_arm_Cons_inst_40_46_tsni(merge1, merge_lists1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        if (run instanceof NofibPrelude.Cons.class) {
          param0 = run.head;
          param1 = run.tail;
          r = param0;
          rs = param1;
          if (xs instanceof NofibPrelude.Cons.class) {
            param01 = xs.head;
            param11 = xs.tail;
            x = param01;
            xs_ = param11;
            if (rs instanceof NofibPrelude.Nil.class) {
              scrut2 = gtList_inst_40_46_35_tsni(x, r);
              if (scrut2 === true) {
                tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r, tmp2);
                return runsplit(tmp3, xs_)
              } else {
                scrut1 = leList_inst_40_46_36_tsni(x, r);
                if (scrut1 === true) {
                  tmp4 = NofibPrelude.Cons(r, rs);
                  tmp5 = NofibPrelude.Cons(x, tmp4);
                  return runsplit(tmp5, xs_)
                } else {
                  tmp6 = NofibPrelude.Cons(r, rs);
                  tmp7 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                  tmp8 = runsplit(tmp7, xs_);
                  _deforest_Cons_head2 = tmp6;
                  _deforest_Cons_tail2 = tmp8;
                  return (merge1, merge_lists1) => {
                    return match_xs_arm_Cons_inst_40_46_tsni(merge1, merge_lists1, _deforest_Cons_head2, _deforest_Cons_tail2)
                  }
                }
              }
            } else {
              rs1 = rs;
              scrut = leList_inst_40_46_37_tsni(x, r);
              if (scrut === true) {
                tmp9 = NofibPrelude.Cons(r, rs1);
                tmp10 = NofibPrelude.Cons(x, tmp9);
                return runsplit(tmp10, xs_)
              } else {
                tmp11 = NofibPrelude.Cons(r, rs1);
                tmp12 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp13 = runsplit(tmp12, xs_);
                _deforest_Cons_head1 = tmp11;
                _deforest_Cons_tail1 = tmp13;
                return (merge1, merge_lists1) => {
                  return match_xs_arm_Cons_inst_40_46_tsni(merge1, merge_lists1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
    }
  };
  merge_lists = function merge_lists(xs) {
    return runtime.safeCall(xs(merge, merge_lists))
  };
  merge = function merge(xs, ys) {
    let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else {
      if (ys instanceof NofibPrelude.Nil.class) {
        return xs
      } else {
        if (xs instanceof NofibPrelude.Cons.class) {
          param0 = xs.head;
          param1 = xs.tail;
          x = param0;
          xs_ = param1;
          if (ys instanceof NofibPrelude.Cons.class) {
            param01 = ys.head;
            param11 = ys.tail;
            y = param01;
            ys_ = param11;
            scrut1 = eqList_inst_40_46_38_tsni(x, y);
            if (scrut1 === true) {
              tmp1 = merge(xs_, ys_);
              tmp2 = NofibPrelude.Cons(y, tmp1);
              return NofibPrelude.Cons(x, tmp2)
            } else {
              scrut = ltList_inst_40_46_39_tsni(x, y);
              if (scrut === true) {
                tmp3 = NofibPrelude.Cons(y, ys_);
                tmp4 = merge(xs_, tmp3);
                return NofibPrelude.Cons(x, tmp4)
              } else {
                tmp5 = NofibPrelude.Cons(x, xs_);
                tmp6 = merge(tmp5, ys_);
                return NofibPrelude.Cons(y, tmp6)
              }
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = runsplit(NofibPrelude.Nil, param);
  return merge_lists(tmp)
};
ltList_inst_40_46_39_tsni = function ltList_inst_40_46_39_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_46_39_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_46_39_5_tsni = function compareList_inst_40_46_39_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_40_46_39_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_46_39_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_40_46_39_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_40_46_39_tsni()
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
eqList_inst_40_46_38_tsni = function eqList_inst_40_46_38_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_46_38_9_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_46_38_9_tsni = function compareList_inst_40_46_38_9_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return true
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_46_38_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_38_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_46_38_9_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_46_38_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_40_46_38_tsni()
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
leList_inst_40_46_37_tsni = function leList_inst_40_46_37_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_46_37_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_46_37_3_tsni = function gtList_inst_40_46_37_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_46_37_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_46_37_3_1_tsni = function compareList_inst_40_46_37_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_46_37_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_46_37_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_46_37_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_46_37_3_tsni()
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
leList_inst_40_46_36_tsni = function leList_inst_40_46_36_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_46_36_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_46_36_3_tsni = function gtList_inst_40_46_36_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_46_36_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_46_36_3_1_tsni = function compareList_inst_40_46_36_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_46_36_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_46_36_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_46_36_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_46_36_3_tsni()
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
gtList_inst_40_46_35_tsni = function gtList_inst_40_46_35_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_46_35_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_46_35_1_tsni = function compareList_inst_40_46_35_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_46_35_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_46_35_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_46_35_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_46_35_tsni()
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
insertSort_inst_40_47_tsni = function insertSort_inst_40_47_tsni(xss) {
  let trins, param0, param1, x, xs, tmp;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    trins = function trins(rev, xs1, ys) {
      let param01, param11, x1, xs_, param02, param12, y, ys_, scrut, xs2, y1, ys_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          y1 = param02;
          ys_1 = param12;
          tmp1 = NofibPrelude.reverse(rev);
          tmp2 = NofibPrelude.Cons(y1, NofibPrelude.Nil);
          tmp3 = NofibPrelude.append(tmp1, tmp2);
          return trins(NofibPrelude.Nil, tmp3, ys_1)
        } else if (ys instanceof NofibPrelude.Nil.class) {
          tmp4 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp4, xs2)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp5 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp5, xs2)
        } else {
          if (xs1 instanceof NofibPrelude.Cons.class) {
            param01 = xs1.head;
            param11 = xs1.tail;
            x1 = param01;
            xs_ = param11;
            if (ys instanceof NofibPrelude.Cons.class) {
              param02 = ys.head;
              param12 = ys.tail;
              y = param02;
              ys_ = param12;
              scrut = ltList_inst_40_47_23_tsni(x1, y);
              if (scrut === true) {
                tmp6 = NofibPrelude.Cons(x1, rev);
                tmp7 = NofibPrelude.Cons(y, ys_);
                return trins(tmp6, xs_, tmp7)
              } else {
                tmp8 = NofibPrelude.reverse(rev);
                tmp9 = NofibPrelude.Cons(x1, xs_);
                tmp10 = NofibPrelude.Cons(y, tmp9);
                tmp11 = NofibPrelude.append(tmp8, tmp10);
                return trins(NofibPrelude.Nil, tmp11, ys_)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    };
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return trins(NofibPrelude.Nil, tmp, xs)
  } else {
    throw new globalThis.Error("match error");
  }
};
ltList_inst_40_47_23_tsni = function ltList_inst_40_47_23_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_47_23_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_47_23_5_tsni = function compareList_inst_40_47_23_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_40_47_23_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_47_23_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_40_47_23_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_40_47_23_tsni()
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
heapSort_inst_40_48_tsni = function heapSort_inst_40_48_tsni(xs) {
  let to_heap, clear, heap, mix, tmp;
  heap = function heap(k, xs1) {
    let param0, param1, x, xs_, tmp1, tmp2;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return sorting.Tip
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs_ = param1;
      tmp1 = k + 1;
      tmp2 = heap(tmp1, xs_);
      return to_heap(k, x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  to_heap = function to_heap(k, x, t) {
    let param0, param1, param2, y, l, r, scrut, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    if (t instanceof sorting.Tip.class) {
      return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      y = param0;
      l = param1;
      r = param2;
      scrut2 = leList_inst_40_48_30_tsni(x, y);
      if (scrut2 === true) {
        scrut3 = sorting.odd(k);
        if (scrut3 === true) {
          tmp1 = NofibPrelude.intDiv(k, 2);
          tmp2 = to_heap(tmp1, y, l);
          return runtime.safeCall(sorting.Branch(x, tmp2, r))
        } else {
          scrut1 = leList_inst_40_48_31_tsni(x, y);
          if (scrut1 === true) {
            tmp3 = NofibPrelude.intDiv(k, 2);
            tmp4 = to_heap(tmp3, y, r);
            return runtime.safeCall(sorting.Branch(x, l, tmp4))
          } else {
            scrut = sorting.odd(k);
            if (scrut === true) {
              tmp5 = NofibPrelude.intDiv(k, 2);
              tmp6 = to_heap(tmp5, x, l);
              return runtime.safeCall(sorting.Branch(y, tmp6, r))
            } else {
              tmp7 = NofibPrelude.intDiv(k, 2);
              tmp8 = to_heap(tmp7, x, r);
              return runtime.safeCall(sorting.Branch(y, l, tmp8))
            }
          }
        }
      } else {
        scrut1 = leList_inst_40_48_32_tsni(x, y);
        if (scrut1 === true) {
          tmp9 = NofibPrelude.intDiv(k, 2);
          tmp10 = to_heap(tmp9, y, r);
          return runtime.safeCall(sorting.Branch(x, l, tmp10))
        } else {
          scrut = sorting.odd(k);
          if (scrut === true) {
            tmp11 = NofibPrelude.intDiv(k, 2);
            tmp12 = to_heap(tmp11, x, l);
            return runtime.safeCall(sorting.Branch(y, tmp12, r))
          } else {
            tmp13 = NofibPrelude.intDiv(k, 2);
            tmp14 = to_heap(tmp13, x, r);
            return runtime.safeCall(sorting.Branch(y, l, tmp14))
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  clear = function clear(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = mix(l, r);
      tmp2 = clear(tmp1);
      return NofibPrelude.Cons(x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  mix = function mix(l, r) {
    let param0, param1, param2, x, l1, r1, param01, param11, param21, y, l2, r2, scrut, tmp1, tmp2, tmp3, tmp4;
    if (l instanceof sorting.Tip.class) {
      return r
    } else {
      if (r instanceof sorting.Tip.class) {
        return l
      } else {
        if (l instanceof sorting.Branch.class) {
          param0 = l.a;
          param1 = l.l;
          param2 = l.r;
          x = param0;
          l1 = param1;
          r1 = param2;
          if (r instanceof sorting.Branch.class) {
            param01 = r.a;
            param11 = r.l;
            param21 = r.r;
            y = param01;
            l2 = param11;
            r2 = param21;
            scrut = leList_inst_40_48_33_tsni(x, y);
            if (scrut === true) {
              tmp1 = mix(l1, r1);
              tmp2 = runtime.safeCall(sorting.Branch(y, l2, r2));
              return runtime.safeCall(sorting.Branch(x, tmp1, tmp2))
            } else {
              tmp3 = runtime.safeCall(sorting.Branch(x, l1, r1));
              tmp4 = mix(l2, r2);
              return runtime.safeCall(sorting.Branch(y, tmp3, tmp4))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = heap(0, xs);
  return clear(tmp)
};
leList_inst_40_48_33_tsni = function leList_inst_40_48_33_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_48_33_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_48_33_3_tsni = function gtList_inst_40_48_33_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_48_33_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_48_33_3_1_tsni = function compareList_inst_40_48_33_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_48_33_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_48_33_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_48_33_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_48_33_3_tsni()
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
leList_inst_40_48_32_tsni = function leList_inst_40_48_32_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_48_32_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_48_32_3_tsni = function gtList_inst_40_48_32_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_48_32_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_48_32_3_1_tsni = function compareList_inst_40_48_32_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_48_32_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_48_32_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_48_32_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_48_32_3_tsni()
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
leList_inst_40_48_31_tsni = function leList_inst_40_48_31_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_48_31_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_48_31_3_tsni = function gtList_inst_40_48_31_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_48_31_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_48_31_3_1_tsni = function compareList_inst_40_48_31_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_48_31_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_48_31_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_48_31_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_48_31_3_tsni()
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
leList_inst_40_48_30_tsni = function leList_inst_40_48_30_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_40_48_30_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_40_48_30_3_tsni = function gtList_inst_40_48_30_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_40_48_30_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_40_48_30_3_1_tsni = function compareList_inst_40_48_30_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_40_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_40_48_30_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_40_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_40_48_30_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_40_48_30_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_40_48_30_3_tsni()
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
intersperse_inst_40_49_tsni = function intersperse_inst_40_49_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
prependToAll_inst_40_49_50_tsni = function prependToAll_inst_40_49_50_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
lines_inst_40_51_tsni = function lines_inst_40_51_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = break__inst_40_51_11_tsni(lambda, s);
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
};
break__inst_40_51_11_tsni = function break__inst_40_51_11_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_40_51_tsni(l, tmp2)
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
        tmp2 = lines_inst_40_51_tsni(s__);
        return match_s__rest_inst_40_51_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_40_51_11_tsni(p, xs);
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
unlines_inst_40_52_tsni = function unlines_inst_40_52_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_40_52_55_56_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_40_52_14_tsni(l, tmp1)
  });
  tmp = map_inst_40_52_13_tsni(lambda, ls);
  return concat_inst_40_52_55_tsni(tmp)
};
map_inst_40_52_13_tsni = function map_inst_40_52_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_52_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_52_55_tsni(xs2);
      return append_inst_40_52_55_56_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_52_14_tsni = function append_inst_40_52_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_52_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_52_55_56_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mangle_inst_53_54_tsni = function mangle_inst_53_54_tsni(inpt) {
  let sort, tmp, tmp1;
  sort = function sort(param) {
    let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
    _deforest_Cons_head7 = treeSort2_inst_53_54_41_tsni;
    _deforest_Cons_tail7 = (sep) => {
      return (f, z) => {
        return match_xs_arm_Nil_inst_53_54_59_tsni(f, z)
      }
    };
    tmp2 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = treeSort_inst_53_54_42_tsni;
    _deforest_Cons_tail6 = tmp2;
    tmp3 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = quickerSort_inst_53_54_43_tsni;
    _deforest_Cons_tail5 = tmp3;
    tmp4 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = quickSort2_inst_53_54_44_tsni;
    _deforest_Cons_tail4 = tmp4;
    tmp5 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = quickSort_inst_53_54_45_tsni;
    _deforest_Cons_tail3 = tmp5;
    tmp6 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = mergeSort_inst_53_54_46_tsni;
    _deforest_Cons_tail2 = tmp6;
    tmp7 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = insertSort_inst_53_54_47_tsni;
    _deforest_Cons_tail1 = tmp7;
    tmp8 = (sep) => {
      return match_xs_arm_Cons_inst_53_54_49_50_tsni(sep, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = heapSort_inst_53_54_48_tsni;
    _deforest_Cons_tail = tmp8;
    tmp9 = (sep) => {
      let param0, param1, x, xs_, tmp12, _deforest_Cons_head8, _deforest_Cons_tail8;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs_ = param1;
      tmp12 = prependToAll_inst_53_54_49_50_tsni(sep, xs_);
      _deforest_Cons_head8 = x;
      _deforest_Cons_tail8 = tmp12;
      return (f, z) => {
        return match_xs_arm_Cons_inst_53_54_59_tsni(f, z, _deforest_Cons_head8, _deforest_Cons_tail8)
      }
    };
    tmp10 = intersperse_inst_53_54_49_tsni(NofibPrelude.reverse, tmp9);
    lambda = (undefined, function (f, g) {
      let lambda2;
      lambda2 = (undefined, function (x) {
        let tmp12;
        tmp12 = runtime.safeCall(g(x));
        return runtime.safeCall(f(tmp12))
      });
      return lambda2
    });
    lambda1 = (undefined, function (x) {
      return x
    });
    tmp11 = foldr_inst_53_54_59_tsni(lambda, lambda1, tmp10);
    return runtime.safeCall(tmp11(param))
  };
  tmp = lines_inst_53_54_51_tsni(inpt);
  tmp1 = sort(tmp);
  return unlines_inst_53_54_52_tsni(tmp1)
};
unlines_inst_53_54_52_tsni = function unlines_inst_53_54_52_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_53_54_52_55_56_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_53_54_52_14_tsni(l, tmp1)
  });
  tmp = map_inst_53_54_52_13_tsni(lambda, ls);
  return concat_inst_53_54_52_55_tsni(tmp)
};
map_inst_53_54_52_13_tsni = function map_inst_53_54_52_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_53_54_52_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_53_54_52_55_tsni(xs2);
      return append_inst_53_54_52_55_56_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1, a) => {
        return a
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_53_54_52_14_tsni = function append_inst_53_54_52_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_53_54_52_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_53_54_52_55_56_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lines_inst_53_54_51_tsni = function lines_inst_53_54_51_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = break__inst_53_54_51_11_tsni(lambda, s);
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
};
break__inst_53_54_51_11_tsni = function break__inst_53_54_51_11_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_53_54_51_tsni(l, tmp2)
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
        tmp2 = lines_inst_53_54_51_tsni(s__);
        return match_s__rest_inst_53_54_51_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_53_54_51_11_tsni(p, xs);
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
intersperse_inst_53_54_49_tsni = function intersperse_inst_53_54_49_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
prependToAll_inst_53_54_49_50_tsni = function prependToAll_inst_53_54_49_50_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
heapSort_inst_53_54_48_tsni = function heapSort_inst_53_54_48_tsni(xs) {
  let to_heap, clear, heap, mix, tmp;
  heap = function heap(k, xs1) {
    let param0, param1, x, xs_, tmp1, tmp2;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return sorting.Tip
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs_ = param1;
      tmp1 = k + 1;
      tmp2 = heap(tmp1, xs_);
      return to_heap(k, x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  to_heap = function to_heap(k, x, t) {
    let param0, param1, param2, y, l, r, scrut, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    if (t instanceof sorting.Tip.class) {
      return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      y = param0;
      l = param1;
      r = param2;
      scrut2 = leList_inst_53_54_48_30_tsni(x, y);
      if (scrut2 === true) {
        scrut3 = sorting.odd(k);
        if (scrut3 === true) {
          tmp1 = NofibPrelude.intDiv(k, 2);
          tmp2 = to_heap(tmp1, y, l);
          return runtime.safeCall(sorting.Branch(x, tmp2, r))
        } else {
          scrut1 = leList_inst_53_54_48_31_tsni(x, y);
          if (scrut1 === true) {
            tmp3 = NofibPrelude.intDiv(k, 2);
            tmp4 = to_heap(tmp3, y, r);
            return runtime.safeCall(sorting.Branch(x, l, tmp4))
          } else {
            scrut = sorting.odd(k);
            if (scrut === true) {
              tmp5 = NofibPrelude.intDiv(k, 2);
              tmp6 = to_heap(tmp5, x, l);
              return runtime.safeCall(sorting.Branch(y, tmp6, r))
            } else {
              tmp7 = NofibPrelude.intDiv(k, 2);
              tmp8 = to_heap(tmp7, x, r);
              return runtime.safeCall(sorting.Branch(y, l, tmp8))
            }
          }
        }
      } else {
        scrut1 = leList_inst_53_54_48_32_tsni(x, y);
        if (scrut1 === true) {
          tmp9 = NofibPrelude.intDiv(k, 2);
          tmp10 = to_heap(tmp9, y, r);
          return runtime.safeCall(sorting.Branch(x, l, tmp10))
        } else {
          scrut = sorting.odd(k);
          if (scrut === true) {
            tmp11 = NofibPrelude.intDiv(k, 2);
            tmp12 = to_heap(tmp11, x, l);
            return runtime.safeCall(sorting.Branch(y, tmp12, r))
          } else {
            tmp13 = NofibPrelude.intDiv(k, 2);
            tmp14 = to_heap(tmp13, x, r);
            return runtime.safeCall(sorting.Branch(y, l, tmp14))
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  clear = function clear(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = mix(l, r);
      tmp2 = clear(tmp1);
      return NofibPrelude.Cons(x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  mix = function mix(l, r) {
    let param0, param1, param2, x, l1, r1, param01, param11, param21, y, l2, r2, scrut, tmp1, tmp2, tmp3, tmp4;
    if (l instanceof sorting.Tip.class) {
      return r
    } else {
      if (r instanceof sorting.Tip.class) {
        return l
      } else {
        if (l instanceof sorting.Branch.class) {
          param0 = l.a;
          param1 = l.l;
          param2 = l.r;
          x = param0;
          l1 = param1;
          r1 = param2;
          if (r instanceof sorting.Branch.class) {
            param01 = r.a;
            param11 = r.l;
            param21 = r.r;
            y = param01;
            l2 = param11;
            r2 = param21;
            scrut = leList_inst_53_54_48_33_tsni(x, y);
            if (scrut === true) {
              tmp1 = mix(l1, r1);
              tmp2 = runtime.safeCall(sorting.Branch(y, l2, r2));
              return runtime.safeCall(sorting.Branch(x, tmp1, tmp2))
            } else {
              tmp3 = runtime.safeCall(sorting.Branch(x, l1, r1));
              tmp4 = mix(l2, r2);
              return runtime.safeCall(sorting.Branch(y, tmp3, tmp4))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = heap(0, xs);
  return clear(tmp)
};
leList_inst_53_54_48_30_tsni = function leList_inst_53_54_48_30_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_48_30_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_48_30_3_tsni = function gtList_inst_53_54_48_30_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_48_30_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_48_30_3_1_tsni = function compareList_inst_53_54_48_30_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_48_30_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_48_30_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_48_30_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_48_30_3_tsni()
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
leList_inst_53_54_48_31_tsni = function leList_inst_53_54_48_31_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_48_31_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_48_31_3_tsni = function gtList_inst_53_54_48_31_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_48_31_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_48_31_3_1_tsni = function compareList_inst_53_54_48_31_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_48_31_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_48_31_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_48_31_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_48_31_3_tsni()
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
leList_inst_53_54_48_32_tsni = function leList_inst_53_54_48_32_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_48_32_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_48_32_3_tsni = function gtList_inst_53_54_48_32_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_48_32_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_48_32_3_1_tsni = function compareList_inst_53_54_48_32_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_48_32_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_48_32_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_48_32_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_48_32_3_tsni()
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
leList_inst_53_54_48_33_tsni = function leList_inst_53_54_48_33_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_48_33_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_48_33_3_tsni = function gtList_inst_53_54_48_33_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_48_33_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_48_33_3_1_tsni = function compareList_inst_53_54_48_33_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_48_33_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_48_33_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_48_33_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_48_33_3_tsni()
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
insertSort_inst_53_54_47_tsni = function insertSort_inst_53_54_47_tsni(xss) {
  let trins, param0, param1, x, xs, tmp;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    trins = function trins(rev, xs1, ys) {
      let param01, param11, x1, xs_, param02, param12, y, ys_, scrut, xs2, y1, ys_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          y1 = param02;
          ys_1 = param12;
          tmp1 = NofibPrelude.reverse(rev);
          tmp2 = NofibPrelude.Cons(y1, NofibPrelude.Nil);
          tmp3 = NofibPrelude.append(tmp1, tmp2);
          return trins(NofibPrelude.Nil, tmp3, ys_1)
        } else if (ys instanceof NofibPrelude.Nil.class) {
          tmp4 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp4, xs2)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp5 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp5, xs2)
        } else {
          if (xs1 instanceof NofibPrelude.Cons.class) {
            param01 = xs1.head;
            param11 = xs1.tail;
            x1 = param01;
            xs_ = param11;
            if (ys instanceof NofibPrelude.Cons.class) {
              param02 = ys.head;
              param12 = ys.tail;
              y = param02;
              ys_ = param12;
              scrut = ltList_inst_53_54_47_23_tsni(x1, y);
              if (scrut === true) {
                tmp6 = NofibPrelude.Cons(x1, rev);
                tmp7 = NofibPrelude.Cons(y, ys_);
                return trins(tmp6, xs_, tmp7)
              } else {
                tmp8 = NofibPrelude.reverse(rev);
                tmp9 = NofibPrelude.Cons(x1, xs_);
                tmp10 = NofibPrelude.Cons(y, tmp9);
                tmp11 = NofibPrelude.append(tmp8, tmp10);
                return trins(NofibPrelude.Nil, tmp11, ys_)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    };
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return trins(NofibPrelude.Nil, tmp, xs)
  } else {
    throw new globalThis.Error("match error");
  }
};
ltList_inst_53_54_47_23_tsni = function ltList_inst_53_54_47_23_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_47_23_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_47_23_5_tsni = function compareList_inst_53_54_47_23_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_53_54_47_23_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_47_23_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_53_54_47_23_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_53_54_47_23_tsni()
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
mergeSort_inst_53_54_46_tsni = function mergeSort_inst_53_54_46_tsni(param) {
  let runsplit, merge, merge_lists, tmp;
  runsplit = function runsplit(run, xs) {
    let param0, param1, r, rs, param01, param11, x, xs_, rs1, scrut, scrut1, scrut2, x1, xs_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
    if (run instanceof NofibPrelude.Nil.class) {
      if (xs instanceof NofibPrelude.Nil.class) {
        return (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_53_54_46_tsni(merge1, merge_lists1)
        }
      } else if (xs instanceof NofibPrelude.Cons.class) {
        param01 = xs.head;
        param11 = xs.tail;
        x1 = param01;
        xs_1 = param11;
        tmp1 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
        return runsplit(tmp1, xs_1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      if (xs instanceof NofibPrelude.Nil.class) {
        _deforest_Cons_head1 = run;
        _deforest_Cons_tail1 = (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_53_54_46_tsni(merge1, merge_lists1)
        };
        return (merge1, merge_lists1) => {
          return match_xs_arm_Cons_inst_53_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        if (run instanceof NofibPrelude.Cons.class) {
          param0 = run.head;
          param1 = run.tail;
          r = param0;
          rs = param1;
          if (xs instanceof NofibPrelude.Cons.class) {
            param01 = xs.head;
            param11 = xs.tail;
            x = param01;
            xs_ = param11;
            if (rs instanceof NofibPrelude.Nil.class) {
              scrut2 = gtList_inst_53_54_46_35_tsni(x, r);
              if (scrut2 === true) {
                tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r, tmp2);
                return runsplit(tmp3, xs_)
              } else {
                scrut1 = leList_inst_53_54_46_36_tsni(x, r);
                if (scrut1 === true) {
                  tmp4 = NofibPrelude.Cons(r, rs);
                  tmp5 = NofibPrelude.Cons(x, tmp4);
                  return runsplit(tmp5, xs_)
                } else {
                  tmp6 = NofibPrelude.Cons(r, rs);
                  tmp7 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                  tmp8 = runsplit(tmp7, xs_);
                  _deforest_Cons_head = tmp6;
                  _deforest_Cons_tail = tmp8;
                  return (merge1, merge_lists1) => {
                    return match_xs_arm_Cons_inst_53_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head, _deforest_Cons_tail)
                  }
                }
              }
            } else {
              rs1 = rs;
              scrut = leList_inst_53_54_46_37_tsni(x, r);
              if (scrut === true) {
                tmp9 = NofibPrelude.Cons(r, rs1);
                tmp10 = NofibPrelude.Cons(x, tmp9);
                return runsplit(tmp10, xs_)
              } else {
                tmp11 = NofibPrelude.Cons(r, rs1);
                tmp12 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp13 = runsplit(tmp12, xs_);
                _deforest_Cons_head2 = tmp11;
                _deforest_Cons_tail2 = tmp13;
                return (merge1, merge_lists1) => {
                  return match_xs_arm_Cons_inst_53_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    }
  };
  merge_lists = function merge_lists(xs) {
    return runtime.safeCall(xs(merge, merge_lists))
  };
  merge = function merge(xs, ys) {
    let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else {
      if (ys instanceof NofibPrelude.Nil.class) {
        return xs
      } else {
        if (xs instanceof NofibPrelude.Cons.class) {
          param0 = xs.head;
          param1 = xs.tail;
          x = param0;
          xs_ = param1;
          if (ys instanceof NofibPrelude.Cons.class) {
            param01 = ys.head;
            param11 = ys.tail;
            y = param01;
            ys_ = param11;
            scrut1 = eqList_inst_53_54_46_38_tsni(x, y);
            if (scrut1 === true) {
              tmp1 = merge(xs_, ys_);
              tmp2 = NofibPrelude.Cons(y, tmp1);
              return NofibPrelude.Cons(x, tmp2)
            } else {
              scrut = ltList_inst_53_54_46_39_tsni(x, y);
              if (scrut === true) {
                tmp3 = NofibPrelude.Cons(y, ys_);
                tmp4 = merge(xs_, tmp3);
                return NofibPrelude.Cons(x, tmp4)
              } else {
                tmp5 = NofibPrelude.Cons(x, xs_);
                tmp6 = merge(tmp5, ys_);
                return NofibPrelude.Cons(y, tmp6)
              }
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = runsplit(NofibPrelude.Nil, param);
  return merge_lists(tmp)
};
gtList_inst_53_54_46_35_tsni = function gtList_inst_53_54_46_35_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_46_35_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_46_35_1_tsni = function compareList_inst_53_54_46_35_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_46_35_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_46_35_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_35_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_46_35_tsni()
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
leList_inst_53_54_46_36_tsni = function leList_inst_53_54_46_36_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_46_36_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_46_36_3_tsni = function gtList_inst_53_54_46_36_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_46_36_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_46_36_3_1_tsni = function compareList_inst_53_54_46_36_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_46_36_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_46_36_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_36_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_46_36_3_tsni()
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
leList_inst_53_54_46_37_tsni = function leList_inst_53_54_46_37_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_46_37_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_46_37_3_tsni = function gtList_inst_53_54_46_37_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_46_37_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_46_37_3_1_tsni = function compareList_inst_53_54_46_37_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_46_37_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_46_37_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_37_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_46_37_3_tsni()
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
eqList_inst_53_54_46_38_tsni = function eqList_inst_53_54_46_38_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_46_38_9_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_46_38_9_tsni = function compareList_inst_53_54_46_38_9_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return true
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_46_38_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_38_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_46_38_9_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_38_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_38_tsni()
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
ltList_inst_53_54_46_39_tsni = function ltList_inst_53_54_46_39_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_46_39_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_46_39_5_tsni = function compareList_inst_53_54_46_39_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_53_54_46_39_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_46_39_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_53_54_46_39_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_53_54_46_39_tsni()
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
quickSort_inst_53_54_45_tsni = function quickSort_inst_53_54_45_tsni(xs) {
  let lscomp2, lscomp1, param0, param1, x, xs_, tmp, tmp1, tmp2, tmp3, tmp4;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lscomp1 = function lscomp1(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = leList_inst_53_54_45_16_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp1(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp1(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lscomp2 = function lscomp2(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = gtList_inst_53_54_45_17_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp2(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp2(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp1(xs_);
    tmp1 = quickSort_inst_53_54_45_tsni(tmp);
    tmp2 = lscomp2(xs_);
    tmp3 = quickSort_inst_53_54_45_tsni(tmp2);
    tmp4 = NofibPrelude.Cons(x, tmp3);
    return NofibPrelude.append(tmp1, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
};
leList_inst_53_54_45_16_tsni = function leList_inst_53_54_45_16_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_45_16_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_45_16_3_tsni = function gtList_inst_53_54_45_16_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_45_16_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_45_16_3_1_tsni = function compareList_inst_53_54_45_16_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_45_16_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_45_16_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_45_16_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_45_16_3_tsni()
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
gtList_inst_53_54_45_17_tsni = function gtList_inst_53_54_45_17_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_45_17_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_45_17_1_tsni = function compareList_inst_53_54_45_17_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_45_17_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_45_17_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_45_17_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_45_17_tsni()
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
quickSort2_inst_53_54_44_tsni = function quickSort2_inst_53_54_44_tsni(xs) {
  let param0, param1, x, xs_, scrut, first1, first0, lo, hi, tmp, tmp1, tmp2, lambda;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lambda = (undefined, function (y) {
      return geList_inst_53_54_44_19_tsni(x, y)
    });
    scrut = sorting.partition(lambda, xs_);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      lo = first0;
      hi = first1;
      tmp = quickSort2_inst_53_54_44_tsni(lo);
      tmp1 = quickSort2_inst_53_54_44_tsni(hi);
      tmp2 = NofibPrelude.Cons(x, tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
geList_inst_53_54_44_19_tsni = function geList_inst_53_54_44_19_tsni(a, b) {
  let tmp;
  tmp = ltList_inst_53_54_44_19_7_tsni(a, b);
  return Predef.not(tmp)
};
ltList_inst_53_54_44_19_7_tsni = function ltList_inst_53_54_44_19_7_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_44_19_7_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_44_19_7_5_tsni = function compareList_inst_53_54_44_19_7_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_53_54_44_19_7_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_44_19_7_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_53_54_44_19_7_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_53_54_44_19_7_tsni()
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
quickerSort_inst_53_54_43_tsni = function quickerSort_inst_53_54_43_tsni(xss) {
  let split, param0, param1, x, xs, x1;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else {
      x = param0;
      xs = param1;
      split = function split(x2, lo, hi, ys) {
        let param01, param11, y, ys_, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp = quickerSort_inst_53_54_43_tsni(lo);
          tmp1 = quickerSort_inst_53_54_43_tsni(hi);
          tmp2 = NofibPrelude.Cons(x2, tmp1);
          return NofibPrelude.append(tmp, tmp2)
        } else if (ys instanceof NofibPrelude.Cons.class) {
          param01 = ys.head;
          param11 = ys.tail;
          y = param01;
          ys_ = param11;
          scrut = leList_inst_53_54_43_21_tsni(y, x2);
          if (scrut === true) {
            tmp3 = NofibPrelude.Cons(y, lo);
            return split(x2, tmp3, hi, ys_)
          } else {
            tmp4 = NofibPrelude.Cons(y, hi);
            return split(x2, lo, tmp4, ys_)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return split(x, NofibPrelude.Nil, NofibPrelude.Nil, xs)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leList_inst_53_54_43_21_tsni = function leList_inst_53_54_43_21_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_43_21_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_43_21_3_tsni = function gtList_inst_53_54_43_21_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_43_21_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_43_21_3_1_tsni = function compareList_inst_53_54_43_21_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_43_21_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_43_21_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_43_21_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_43_21_3_tsni()
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
treeSort_inst_53_54_42_tsni = function treeSort_inst_53_54_42_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_53_54_42_25_tsni(x, y);
        if (scrut === true) {
          tmp1 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch(y, tmp1, r))
        } else {
          tmp2 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch(y, l, tmp2))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_53_54_42_25_tsni = function leList_inst_53_54_42_25_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_42_25_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_42_25_3_tsni = function gtList_inst_53_54_42_25_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_42_25_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_42_25_3_1_tsni = function compareList_inst_53_54_42_25_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_42_25_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_42_25_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_42_25_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_42_25_3_tsni()
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
treeSort2_inst_53_54_41_tsni = function treeSort2_inst_53_54_41_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, y1, scrut1, tmp1, tmp2, tmp3, tmp4;
      if (t instanceof sorting.Tip2.class) {
        return runtime.safeCall(sorting.Twig2(x))
      } else if (t instanceof sorting.Twig2.class) {
        param0 = t.a;
        y1 = param0;
        scrut1 = leList_inst_53_54_41_27_tsni(x, y1);
        if (scrut1 === true) {
          tmp1 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, tmp1, sorting.Tip2))
        } else {
          tmp2 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, sorting.Tip2, tmp2))
        }
      } else if (t instanceof sorting.Branch2.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_53_54_41_28_tsni(x, y);
        if (scrut === true) {
          tmp3 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch2(y, tmp3, r))
        } else {
          tmp4 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch2(y, l, tmp4))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip2, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, x1, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip2.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Twig2.class) {
      param0 = t.a;
      x1 = param0;
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else if (t instanceof sorting.Branch2.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_53_54_41_27_tsni = function leList_inst_53_54_41_27_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_41_27_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_41_27_3_tsni = function gtList_inst_53_54_41_27_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_41_27_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_41_27_3_1_tsni = function compareList_inst_53_54_41_27_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_41_27_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_41_27_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_41_27_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_41_27_3_tsni()
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
leList_inst_53_54_41_28_tsni = function leList_inst_53_54_41_28_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_53_54_41_28_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_53_54_41_28_3_tsni = function gtList_inst_53_54_41_28_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_53_54_41_28_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_53_54_41_28_3_1_tsni = function compareList_inst_53_54_41_28_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_53_54_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_53_54_41_28_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_53_54_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_53_54_41_28_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_53_54_41_28_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_53_54_41_28_3_tsni()
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
concat_inst_53_54_52_55_tsni = function concat_inst_53_54_52_55_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_53_54_52_55_56_tsni = function append_inst_53_54_52_55_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
testSorting_nofib_inst_57_58_tsni = function testSorting_nofib_inst_57_58_tsni(d) {
  let f, tmp, tmp1, tmp2, tmp3;
  tmp = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/Main.hs"));
  tmp1 = runtime.safeCall(tmp.toString());
  tmp2 = NofibPrelude.nofibStringToList(tmp1);
  f = tmp2;
  tmp3 = mangle_inst_57_58_54_tsni(f);
  return hash_inst_57_58_60_tsni(tmp3)
};
mangle_inst_57_58_54_tsni = function mangle_inst_57_58_54_tsni(inpt) {
  let sort, tmp, tmp1;
  sort = function sort(param) {
    let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
    _deforest_Cons_head7 = treeSort2_inst_57_58_54_41_tsni;
    _deforest_Cons_tail7 = (sep) => {
      return (f, z) => {
        return match_xs_arm_Nil_inst_57_58_54_59_tsni(f, z)
      }
    };
    tmp2 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = treeSort_inst_57_58_54_42_tsni;
    _deforest_Cons_tail6 = tmp2;
    tmp3 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = quickerSort_inst_57_58_54_43_tsni;
    _deforest_Cons_tail5 = tmp3;
    tmp4 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = quickSort2_inst_57_58_54_44_tsni;
    _deforest_Cons_tail4 = tmp4;
    tmp5 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = quickSort_inst_57_58_54_45_tsni;
    _deforest_Cons_tail3 = tmp5;
    tmp6 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = mergeSort_inst_57_58_54_46_tsni;
    _deforest_Cons_tail2 = tmp6;
    tmp7 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = insertSort_inst_57_58_54_47_tsni;
    _deforest_Cons_tail1 = tmp7;
    tmp8 = (sep) => {
      return match_xs_arm_Cons_inst_57_58_54_49_50_tsni(sep, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = heapSort_inst_57_58_54_48_tsni;
    _deforest_Cons_tail = tmp8;
    tmp9 = (sep) => {
      let param0, param1, x, xs_, tmp12, _deforest_Cons_head8, _deforest_Cons_tail8;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs_ = param1;
      tmp12 = prependToAll_inst_57_58_54_49_50_tsni(sep, xs_);
      _deforest_Cons_head8 = x;
      _deforest_Cons_tail8 = tmp12;
      return (f, z) => {
        return match_xs_arm_Cons_inst_57_58_54_59_tsni(f, z, _deforest_Cons_head8, _deforest_Cons_tail8)
      }
    };
    tmp10 = intersperse_inst_57_58_54_49_tsni(NofibPrelude.reverse, tmp9);
    lambda = (undefined, function (f, g) {
      let lambda2;
      lambda2 = (undefined, function (x) {
        let tmp12;
        tmp12 = runtime.safeCall(g(x));
        return runtime.safeCall(f(tmp12))
      });
      return lambda2
    });
    lambda1 = (undefined, function (x) {
      return x
    });
    tmp11 = foldr_inst_57_58_54_59_tsni(lambda, lambda1, tmp10);
    return runtime.safeCall(tmp11(param))
  };
  tmp = lines_inst_57_58_54_51_tsni(inpt);
  tmp1 = sort(tmp);
  return unlines_inst_57_58_54_52_tsni(tmp1)
};
treeSort2_inst_57_58_54_41_tsni = function treeSort2_inst_57_58_54_41_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, y1, scrut1, tmp1, tmp2, tmp3, tmp4;
      if (t instanceof sorting.Tip2.class) {
        return runtime.safeCall(sorting.Twig2(x))
      } else if (t instanceof sorting.Twig2.class) {
        param0 = t.a;
        y1 = param0;
        scrut1 = leList_inst_57_58_54_41_27_tsni(x, y1);
        if (scrut1 === true) {
          tmp1 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, tmp1, sorting.Tip2))
        } else {
          tmp2 = runtime.safeCall(sorting.Twig2(x));
          return runtime.safeCall(sorting.Branch2(y1, sorting.Tip2, tmp2))
        }
      } else if (t instanceof sorting.Branch2.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_57_58_54_41_28_tsni(x, y);
        if (scrut === true) {
          tmp3 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch2(y, tmp3, r))
        } else {
          tmp4 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch2(y, l, tmp4))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip2, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, x1, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip2.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Twig2.class) {
      param0 = t.a;
      x1 = param0;
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else if (t instanceof sorting.Branch2.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_57_58_54_41_28_tsni = function leList_inst_57_58_54_41_28_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_41_28_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_41_28_3_tsni = function gtList_inst_57_58_54_41_28_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_41_28_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_41_28_3_1_tsni = function compareList_inst_57_58_54_41_28_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_41_28_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_41_28_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_41_28_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_41_28_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_41_28_3_tsni()
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
leList_inst_57_58_54_41_27_tsni = function leList_inst_57_58_54_41_27_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_41_27_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_41_27_3_tsni = function gtList_inst_57_58_54_41_27_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_41_27_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_41_27_3_1_tsni = function compareList_inst_57_58_54_41_27_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_41_27_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_41_27_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_41_27_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_41_27_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_41_27_3_tsni()
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
treeSort_inst_57_58_54_42_tsni = function treeSort_inst_57_58_54_42_tsni(param) {
  let mkTree, readTree, tmp;
  mkTree = function mkTree(innerparam) {
    let to_tree;
    to_tree = function to_tree(x, t) {
      let param0, param1, param2, y, l, r, scrut, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        y = param0;
        l = param1;
        r = param2;
        scrut = leList_inst_57_58_54_42_25_tsni(x, y);
        if (scrut === true) {
          tmp1 = to_tree(x, l);
          return runtime.safeCall(sorting.Branch(y, tmp1, r))
        } else {
          tmp2 = to_tree(x, r);
          return runtime.safeCall(sorting.Branch(y, l, tmp2))
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    return NofibPrelude.foldr(to_tree, sorting.Tip, innerparam)
  };
  readTree = function readTree(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2, tmp3;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = readTree(l);
      tmp2 = readTree(r);
      tmp3 = NofibPrelude.Cons(x, tmp2);
      return NofibPrelude.append(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  tmp = mkTree(param);
  return readTree(tmp)
};
leList_inst_57_58_54_42_25_tsni = function leList_inst_57_58_54_42_25_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_42_25_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_42_25_3_tsni = function gtList_inst_57_58_54_42_25_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_42_25_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_42_25_3_1_tsni = function compareList_inst_57_58_54_42_25_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_42_25_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_42_25_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_42_25_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_42_25_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_42_25_3_tsni()
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
quickerSort_inst_57_58_54_43_tsni = function quickerSort_inst_57_58_54_43_tsni(xss) {
  let split, param0, param1, x, xs, x1;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(x1, NofibPrelude.Nil)
    } else {
      x = param0;
      xs = param1;
      split = function split(x2, lo, hi, ys) {
        let param01, param11, y, ys_, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp = quickerSort_inst_57_58_54_43_tsni(lo);
          tmp1 = quickerSort_inst_57_58_54_43_tsni(hi);
          tmp2 = NofibPrelude.Cons(x2, tmp1);
          return NofibPrelude.append(tmp, tmp2)
        } else if (ys instanceof NofibPrelude.Cons.class) {
          param01 = ys.head;
          param11 = ys.tail;
          y = param01;
          ys_ = param11;
          scrut = leList_inst_57_58_54_43_21_tsni(y, x2);
          if (scrut === true) {
            tmp3 = NofibPrelude.Cons(y, lo);
            return split(x2, tmp3, hi, ys_)
          } else {
            tmp4 = NofibPrelude.Cons(y, hi);
            return split(x2, lo, tmp4, ys_)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return split(x, NofibPrelude.Nil, NofibPrelude.Nil, xs)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
leList_inst_57_58_54_43_21_tsni = function leList_inst_57_58_54_43_21_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_43_21_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_43_21_3_tsni = function gtList_inst_57_58_54_43_21_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_43_21_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_43_21_3_1_tsni = function compareList_inst_57_58_54_43_21_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_43_21_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_43_21_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_43_21_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_43_21_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_43_21_3_tsni()
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
quickSort2_inst_57_58_54_44_tsni = function quickSort2_inst_57_58_54_44_tsni(xs) {
  let param0, param1, x, xs_, scrut, first1, first0, lo, hi, tmp, tmp1, tmp2, lambda;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lambda = (undefined, function (y) {
      return geList_inst_57_58_54_44_19_tsni(x, y)
    });
    scrut = sorting.partition(lambda, xs_);
    if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
      first0 = scrut[0];
      first1 = scrut[1];
      lo = first0;
      hi = first1;
      tmp = quickSort2_inst_57_58_54_44_tsni(lo);
      tmp1 = quickSort2_inst_57_58_54_44_tsni(hi);
      tmp2 = NofibPrelude.Cons(x, tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
geList_inst_57_58_54_44_19_tsni = function geList_inst_57_58_54_44_19_tsni(a, b) {
  let tmp;
  tmp = ltList_inst_57_58_54_44_19_7_tsni(a, b);
  return Predef.not(tmp)
};
ltList_inst_57_58_54_44_19_7_tsni = function ltList_inst_57_58_54_44_19_7_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_44_19_7_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_44_19_7_5_tsni = function compareList_inst_57_58_54_44_19_7_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_57_58_54_44_19_7_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_44_19_7_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_44_19_7_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_57_58_54_44_19_7_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_44_19_7_tsni()
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
quickSort_inst_57_58_54_45_tsni = function quickSort_inst_57_58_54_45_tsni(xs) {
  let lscomp2, lscomp1, param0, param1, x, xs_, tmp, tmp1, tmp2, tmp3, tmp4;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    lscomp1 = function lscomp1(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = leList_inst_57_58_54_45_16_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp1(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp1(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    lscomp2 = function lscomp2(ls) {
      let param01, param11, h, t, scrut, tmp5;
      if (ls instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else if (ls instanceof NofibPrelude.Cons.class) {
        param01 = ls.head;
        param11 = ls.tail;
        h = param01;
        t = param11;
        scrut = gtList_inst_57_58_54_45_17_tsni(h, x);
        if (scrut === true) {
          tmp5 = lscomp2(t);
          return NofibPrelude.Cons(h, tmp5)
        } else {
          return lscomp2(t)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = lscomp1(xs_);
    tmp1 = quickSort_inst_57_58_54_45_tsni(tmp);
    tmp2 = lscomp2(xs_);
    tmp3 = quickSort_inst_57_58_54_45_tsni(tmp2);
    tmp4 = NofibPrelude.Cons(x, tmp3);
    return NofibPrelude.append(tmp1, tmp4)
  } else {
    throw new globalThis.Error("match error");
  }
};
gtList_inst_57_58_54_45_17_tsni = function gtList_inst_57_58_54_45_17_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_45_17_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_45_17_1_tsni = function compareList_inst_57_58_54_45_17_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_45_17_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_45_17_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_45_17_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_45_17_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_45_17_tsni()
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
leList_inst_57_58_54_45_16_tsni = function leList_inst_57_58_54_45_16_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_45_16_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_45_16_3_tsni = function gtList_inst_57_58_54_45_16_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_45_16_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_45_16_3_1_tsni = function compareList_inst_57_58_54_45_16_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_45_16_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_45_16_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_45_16_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_45_16_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_45_16_3_tsni()
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
mergeSort_inst_57_58_54_46_tsni = function mergeSort_inst_57_58_54_46_tsni(param) {
  let runsplit, merge, merge_lists, tmp;
  runsplit = function runsplit(run, xs) {
    let param0, param1, r, rs, param01, param11, x, xs_, rs1, scrut, scrut1, scrut2, x1, xs_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
    if (run instanceof NofibPrelude.Nil.class) {
      if (xs instanceof NofibPrelude.Nil.class) {
        return (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_57_58_54_46_tsni(merge1, merge_lists1)
        }
      } else if (xs instanceof NofibPrelude.Cons.class) {
        param01 = xs.head;
        param11 = xs.tail;
        x1 = param01;
        xs_1 = param11;
        tmp1 = NofibPrelude.Cons(x1, NofibPrelude.Nil);
        return runsplit(tmp1, xs_1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      if (xs instanceof NofibPrelude.Nil.class) {
        _deforest_Cons_head = run;
        _deforest_Cons_tail = (merge1, merge_lists1) => {
          return match_xs_arm_Nil_inst_57_58_54_46_tsni(merge1, merge_lists1)
        };
        return (merge1, merge_lists1) => {
          return match_xs_arm_Cons_inst_57_58_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        if (run instanceof NofibPrelude.Cons.class) {
          param0 = run.head;
          param1 = run.tail;
          r = param0;
          rs = param1;
          if (xs instanceof NofibPrelude.Cons.class) {
            param01 = xs.head;
            param11 = xs.tail;
            x = param01;
            xs_ = param11;
            if (rs instanceof NofibPrelude.Nil.class) {
              scrut2 = gtList_inst_57_58_54_46_35_tsni(x, r);
              if (scrut2 === true) {
                tmp2 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r, tmp2);
                return runsplit(tmp3, xs_)
              } else {
                scrut1 = leList_inst_57_58_54_46_36_tsni(x, r);
                if (scrut1 === true) {
                  tmp4 = NofibPrelude.Cons(r, rs);
                  tmp5 = NofibPrelude.Cons(x, tmp4);
                  return runsplit(tmp5, xs_)
                } else {
                  tmp6 = NofibPrelude.Cons(r, rs);
                  tmp7 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                  tmp8 = runsplit(tmp7, xs_);
                  _deforest_Cons_head2 = tmp6;
                  _deforest_Cons_tail2 = tmp8;
                  return (merge1, merge_lists1) => {
                    return match_xs_arm_Cons_inst_57_58_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head2, _deforest_Cons_tail2)
                  }
                }
              }
            } else {
              rs1 = rs;
              scrut = leList_inst_57_58_54_46_37_tsni(x, r);
              if (scrut === true) {
                tmp9 = NofibPrelude.Cons(r, rs1);
                tmp10 = NofibPrelude.Cons(x, tmp9);
                return runsplit(tmp10, xs_)
              } else {
                tmp11 = NofibPrelude.Cons(r, rs1);
                tmp12 = NofibPrelude.Cons(x, NofibPrelude.Nil);
                tmp13 = runsplit(tmp12, xs_);
                _deforest_Cons_head1 = tmp11;
                _deforest_Cons_tail1 = tmp13;
                return (merge1, merge_lists1) => {
                  return match_xs_arm_Cons_inst_57_58_54_46_tsni(merge1, merge_lists1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
    }
  };
  merge_lists = function merge_lists(xs) {
    return runtime.safeCall(xs(merge, merge_lists))
  };
  merge = function merge(xs, ys) {
    let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (xs instanceof NofibPrelude.Nil.class) {
      return ys
    } else {
      if (ys instanceof NofibPrelude.Nil.class) {
        return xs
      } else {
        if (xs instanceof NofibPrelude.Cons.class) {
          param0 = xs.head;
          param1 = xs.tail;
          x = param0;
          xs_ = param1;
          if (ys instanceof NofibPrelude.Cons.class) {
            param01 = ys.head;
            param11 = ys.tail;
            y = param01;
            ys_ = param11;
            scrut1 = eqList_inst_57_58_54_46_38_tsni(x, y);
            if (scrut1 === true) {
              tmp1 = merge(xs_, ys_);
              tmp2 = NofibPrelude.Cons(y, tmp1);
              return NofibPrelude.Cons(x, tmp2)
            } else {
              scrut = ltList_inst_57_58_54_46_39_tsni(x, y);
              if (scrut === true) {
                tmp3 = NofibPrelude.Cons(y, ys_);
                tmp4 = merge(xs_, tmp3);
                return NofibPrelude.Cons(x, tmp4)
              } else {
                tmp5 = NofibPrelude.Cons(x, xs_);
                tmp6 = merge(tmp5, ys_);
                return NofibPrelude.Cons(y, tmp6)
              }
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = runsplit(NofibPrelude.Nil, param);
  return merge_lists(tmp)
};
ltList_inst_57_58_54_46_39_tsni = function ltList_inst_57_58_54_46_39_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_46_39_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_46_39_5_tsni = function compareList_inst_57_58_54_46_39_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_57_58_54_46_39_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_39_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_46_39_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_57_58_54_46_39_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_39_tsni()
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
eqList_inst_57_58_54_46_38_tsni = function eqList_inst_57_58_54_46_38_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_46_38_9_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_46_38_9_tsni = function compareList_inst_57_58_54_46_38_9_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return true
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_38_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_38_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_46_38_9_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_38_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_38_tsni()
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
leList_inst_57_58_54_46_37_tsni = function leList_inst_57_58_54_46_37_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_46_37_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_46_37_3_tsni = function gtList_inst_57_58_54_46_37_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_46_37_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_46_37_3_1_tsni = function compareList_inst_57_58_54_46_37_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_37_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_46_37_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_46_37_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_37_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_46_37_3_tsni()
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
leList_inst_57_58_54_46_36_tsni = function leList_inst_57_58_54_46_36_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_46_36_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_46_36_3_tsni = function gtList_inst_57_58_54_46_36_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_46_36_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_46_36_3_1_tsni = function compareList_inst_57_58_54_46_36_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_36_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_46_36_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_46_36_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_36_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_46_36_3_tsni()
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
gtList_inst_57_58_54_46_35_tsni = function gtList_inst_57_58_54_46_35_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_46_35_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_46_35_1_tsni = function compareList_inst_57_58_54_46_35_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_46_35_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_46_35_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_46_35_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_46_35_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_46_35_tsni()
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
insertSort_inst_57_58_54_47_tsni = function insertSort_inst_57_58_54_47_tsni(xss) {
  let trins, param0, param1, x, xs, tmp;
  if (xss instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    trins = function trins(rev, xs1, ys) {
      let param01, param11, x1, xs_, param02, param12, y, ys_, scrut, xs2, y1, ys_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
      if (xs1 instanceof NofibPrelude.Nil.class) {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Cons.class) {
          param02 = ys.head;
          param12 = ys.tail;
          y1 = param02;
          ys_1 = param12;
          tmp1 = NofibPrelude.reverse(rev);
          tmp2 = NofibPrelude.Cons(y1, NofibPrelude.Nil);
          tmp3 = NofibPrelude.append(tmp1, tmp2);
          return trins(NofibPrelude.Nil, tmp3, ys_1)
        } else if (ys instanceof NofibPrelude.Nil.class) {
          tmp4 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp4, xs2)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        xs2 = xs1;
        if (ys instanceof NofibPrelude.Nil.class) {
          tmp5 = NofibPrelude.reverse(rev);
          return NofibPrelude.append(tmp5, xs2)
        } else {
          if (xs1 instanceof NofibPrelude.Cons.class) {
            param01 = xs1.head;
            param11 = xs1.tail;
            x1 = param01;
            xs_ = param11;
            if (ys instanceof NofibPrelude.Cons.class) {
              param02 = ys.head;
              param12 = ys.tail;
              y = param02;
              ys_ = param12;
              scrut = ltList_inst_57_58_54_47_23_tsni(x1, y);
              if (scrut === true) {
                tmp6 = NofibPrelude.Cons(x1, rev);
                tmp7 = NofibPrelude.Cons(y, ys_);
                return trins(tmp6, xs_, tmp7)
              } else {
                tmp8 = NofibPrelude.reverse(rev);
                tmp9 = NofibPrelude.Cons(x1, xs_);
                tmp10 = NofibPrelude.Cons(y, tmp9);
                tmp11 = NofibPrelude.append(tmp8, tmp10);
                return trins(NofibPrelude.Nil, tmp11, ys_)
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    };
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return trins(NofibPrelude.Nil, tmp, xs)
  } else {
    throw new globalThis.Error("match error");
  }
};
ltList_inst_57_58_54_47_23_tsni = function ltList_inst_57_58_54_47_23_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_47_23_5_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_47_23_5_tsni = function compareList_inst_57_58_54_47_23_5_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_LT_inst_57_58_54_47_23_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_47_23_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_47_23_5_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_LT_inst_57_58_54_47_23_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_47_23_tsni()
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
heapSort_inst_57_58_54_48_tsni = function heapSort_inst_57_58_54_48_tsni(xs) {
  let to_heap, clear, heap, mix, tmp;
  heap = function heap(k, xs1) {
    let param0, param1, x, xs_, tmp1, tmp2;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return sorting.Tip
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs_ = param1;
      tmp1 = k + 1;
      tmp2 = heap(tmp1, xs_);
      return to_heap(k, x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  to_heap = function to_heap(k, x, t) {
    let param0, param1, param2, y, l, r, scrut, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    if (t instanceof sorting.Tip.class) {
      return runtime.safeCall(sorting.Branch(x, sorting.Tip, sorting.Tip))
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      y = param0;
      l = param1;
      r = param2;
      scrut2 = leList_inst_57_58_54_48_30_tsni(x, y);
      if (scrut2 === true) {
        scrut3 = sorting.odd(k);
        if (scrut3 === true) {
          tmp1 = NofibPrelude.intDiv(k, 2);
          tmp2 = to_heap(tmp1, y, l);
          return runtime.safeCall(sorting.Branch(x, tmp2, r))
        } else {
          scrut1 = leList_inst_57_58_54_48_31_tsni(x, y);
          if (scrut1 === true) {
            tmp3 = NofibPrelude.intDiv(k, 2);
            tmp4 = to_heap(tmp3, y, r);
            return runtime.safeCall(sorting.Branch(x, l, tmp4))
          } else {
            scrut = sorting.odd(k);
            if (scrut === true) {
              tmp5 = NofibPrelude.intDiv(k, 2);
              tmp6 = to_heap(tmp5, x, l);
              return runtime.safeCall(sorting.Branch(y, tmp6, r))
            } else {
              tmp7 = NofibPrelude.intDiv(k, 2);
              tmp8 = to_heap(tmp7, x, r);
              return runtime.safeCall(sorting.Branch(y, l, tmp8))
            }
          }
        }
      } else {
        scrut1 = leList_inst_57_58_54_48_32_tsni(x, y);
        if (scrut1 === true) {
          tmp9 = NofibPrelude.intDiv(k, 2);
          tmp10 = to_heap(tmp9, y, r);
          return runtime.safeCall(sorting.Branch(x, l, tmp10))
        } else {
          scrut = sorting.odd(k);
          if (scrut === true) {
            tmp11 = NofibPrelude.intDiv(k, 2);
            tmp12 = to_heap(tmp11, x, l);
            return runtime.safeCall(sorting.Branch(y, tmp12, r))
          } else {
            tmp13 = NofibPrelude.intDiv(k, 2);
            tmp14 = to_heap(tmp13, x, r);
            return runtime.safeCall(sorting.Branch(y, l, tmp14))
          }
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  };
  clear = function clear(t) {
    let param0, param1, param2, x, l, r, tmp1, tmp2;
    if (t instanceof sorting.Tip.class) {
      return NofibPrelude.Nil
    } else if (t instanceof sorting.Branch.class) {
      param0 = t.a;
      param1 = t.l;
      param2 = t.r;
      x = param0;
      l = param1;
      r = param2;
      tmp1 = mix(l, r);
      tmp2 = clear(tmp1);
      return NofibPrelude.Cons(x, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  };
  mix = function mix(l, r) {
    let param0, param1, param2, x, l1, r1, param01, param11, param21, y, l2, r2, scrut, tmp1, tmp2, tmp3, tmp4;
    if (l instanceof sorting.Tip.class) {
      return r
    } else {
      if (r instanceof sorting.Tip.class) {
        return l
      } else {
        if (l instanceof sorting.Branch.class) {
          param0 = l.a;
          param1 = l.l;
          param2 = l.r;
          x = param0;
          l1 = param1;
          r1 = param2;
          if (r instanceof sorting.Branch.class) {
            param01 = r.a;
            param11 = r.l;
            param21 = r.r;
            y = param01;
            l2 = param11;
            r2 = param21;
            scrut = leList_inst_57_58_54_48_33_tsni(x, y);
            if (scrut === true) {
              tmp1 = mix(l1, r1);
              tmp2 = runtime.safeCall(sorting.Branch(y, l2, r2));
              return runtime.safeCall(sorting.Branch(x, tmp1, tmp2))
            } else {
              tmp3 = runtime.safeCall(sorting.Branch(x, l1, r1));
              tmp4 = mix(l2, r2);
              return runtime.safeCall(sorting.Branch(y, tmp3, tmp4))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  };
  tmp = heap(0, xs);
  return clear(tmp)
};
leList_inst_57_58_54_48_33_tsni = function leList_inst_57_58_54_48_33_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_48_33_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_48_33_3_tsni = function gtList_inst_57_58_54_48_33_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_48_33_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_48_33_3_1_tsni = function compareList_inst_57_58_54_48_33_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_33_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_48_33_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_48_33_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_48_33_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_48_33_3_tsni()
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
leList_inst_57_58_54_48_32_tsni = function leList_inst_57_58_54_48_32_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_48_32_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_48_32_3_tsni = function gtList_inst_57_58_54_48_32_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_48_32_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_48_32_3_1_tsni = function compareList_inst_57_58_54_48_32_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_32_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_48_32_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_48_32_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_48_32_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_48_32_3_tsni()
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
leList_inst_57_58_54_48_31_tsni = function leList_inst_57_58_54_48_31_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_48_31_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_48_31_3_tsni = function gtList_inst_57_58_54_48_31_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_48_31_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_48_31_3_1_tsni = function compareList_inst_57_58_54_48_31_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_31_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_48_31_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_48_31_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_48_31_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_48_31_3_tsni()
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
leList_inst_57_58_54_48_30_tsni = function leList_inst_57_58_54_48_30_tsni(a, b) {
  let tmp;
  tmp = gtList_inst_57_58_54_48_30_3_tsni(a, b);
  return Predef.not(tmp)
};
gtList_inst_57_58_54_48_30_3_tsni = function gtList_inst_57_58_54_48_30_3_tsni(a, b) {
  let scrut;
  scrut = compareList_inst_57_58_54_48_30_3_1_tsni(a, b);
  return runtime.safeCall(scrut())
};
compareList_inst_57_58_54_48_30_3_1_tsni = function compareList_inst_57_58_54_48_30_3_1_tsni(xs, ys) {
  let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      return () => {
        return match_scrut_arm_default_inst_57_58_54_48_30_3_tsni()
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs_ = param1;
    if (ys instanceof NofibPrelude.Nil.class) {
      return () => {
        return match_scrut_arm_GT_inst_57_58_54_48_30_3_tsni()
      }
    } else if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys_ = param11;
      tmp = sorting.int_of_char(x);
      tmp1 = sorting.int_of_char(y);
      scrut1 = tmp === tmp1;
      if (scrut1 === true) {
        return compareList_inst_57_58_54_48_30_3_1_tsni(xs_, ys_)
      } else {
        tmp2 = sorting.int_of_char(x);
        tmp3 = sorting.int_of_char(y);
        scrut = tmp2 < tmp3;
        if (scrut === true) {
          return () => {
            return match_scrut_arm_default_inst_57_58_54_48_30_3_tsni()
          }
        } else {
          return () => {
            return match_scrut_arm_GT_inst_57_58_54_48_30_3_tsni()
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
intersperse_inst_57_58_54_49_tsni = function intersperse_inst_57_58_54_49_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
prependToAll_inst_57_58_54_49_50_tsni = function prependToAll_inst_57_58_54_49_50_tsni(sep, xs) {
  return runtime.safeCall(xs(sep))
};
lines_inst_57_58_54_51_tsni = function lines_inst_57_58_54_51_tsni(s) {
  let scrut, first1, first0, l, s_, lambda;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    lambda = (undefined, function (x) {
      return x === "\n"
    });
    scrut = break__inst_57_58_54_51_11_tsni(lambda, s);
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
};
break__inst_57_58_54_51_11_tsni = function break__inst_57_58_54_51_11_tsni(p, ls) {
  let param0, param1, x, xs, scrut, first1, first0, ys, zs, scrut1, arr, tmp, arr1, tmp1, arr2, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    arr = [
      NofibPrelude.Nil,
      (l) => {
        let tmp2;
        tmp2 = NofibPrelude.Nil;
        return match_s__rest_inst_57_58_54_51_tsni(l, tmp2)
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
        tmp2 = lines_inst_57_58_54_51_tsni(s__);
        return match_s__rest_inst_57_58_54_51_tsni(l, tmp2)
      };
      arr1 = [
        NofibPrelude.Nil,
        tmp
      ];
      return arr1
    } else {
      scrut = break__inst_57_58_54_51_11_tsni(p, xs);
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
unlines_inst_57_58_54_52_tsni = function unlines_inst_57_58_54_52_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (l) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_57_58_54_52_55_56_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_57_58_54_52_14_tsni(l, tmp1)
  });
  tmp = map_inst_57_58_54_52_13_tsni(lambda, ls);
  return concat_inst_57_58_54_52_55_tsni(tmp)
};
map_inst_57_58_54_52_13_tsni = function map_inst_57_58_54_52_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_57_58_54_52_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_57_58_54_52_55_tsni(xs2);
      return append_inst_57_58_54_52_55_56_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1, a) => {
        return a
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_57_58_54_52_14_tsni = function append_inst_57_58_54_52_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_57_58_54_52_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_57_58_54_52_55_56_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_57_58_54_52_55_tsni = function concat_inst_57_58_54_52_55_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_57_58_54_52_55_56_tsni = function append_inst_57_58_54_52_55_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_12_55_tsni = function concat_inst_12_55_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_12_55_56_tsni = function append_inst_12_55_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_40_59_tsni = function foldr_inst_40_59_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_40_52_55_tsni = function concat_inst_40_52_55_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_52_55_56_tsni = function append_inst_40_52_55_56_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_53_54_59_tsni = function foldr_inst_53_54_59_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hash_inst_53_60_tsni = function hash_inst_53_60_tsni(str) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (acc, c) {
    let tmp2, tmp3, tmp4, tmp5;
    tmp2 = sorting.int_of_char(c);
    tmp3 = sorting.z_of_int(tmp2);
    tmp4 = sorting.z_of_int(31);
    tmp5 = acc * tmp4;
    return tmp3 + tmp5
  });
  tmp = lambda;
  tmp1 = sorting.z_of_int(0);
  return foldl_inst_53_60_61_tsni(tmp, tmp1, str)
};
foldl_inst_53_60_61_tsni = function foldl_inst_53_60_61_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
foldr_inst_57_58_54_59_tsni = function foldr_inst_57_58_54_59_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
hash_inst_57_58_60_tsni = function hash_inst_57_58_60_tsni(str) {
  let tmp, tmp1, lambda;
  lambda = (undefined, function (acc, c) {
    let tmp2, tmp3, tmp4, tmp5;
    tmp2 = sorting.int_of_char(c);
    tmp3 = sorting.z_of_int(tmp2);
    tmp4 = sorting.z_of_int(31);
    tmp5 = acc * tmp4;
    return tmp3 + tmp5
  });
  tmp = lambda;
  tmp1 = sorting.z_of_int(0);
  return foldl_inst_57_58_60_61_tsni(tmp, tmp1, str)
};
foldl_inst_57_58_60_61_tsni = function foldl_inst_57_58_60_61_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
(class sorting {
  static {
    sorting1 = sorting;
    const EQ$class = class EQ {
      constructor() {}
      toString() { return "EQ"; }
    };
    this.EQ = new EQ$class;
    this.EQ.class = EQ$class;
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
    this.Tree = class Tree {
      constructor() {}
      toString() { return "Tree"; }
    };
    const Tip$class = class Tip extends sorting.Tree {
      constructor() {
        super();
      }
      toString() { return "Tip"; }
    };
    this.Tip = new Tip$class;
    this.Tip.class = Tip$class;
    this.Branch = function Branch(a1, l1, r1) {
      return new Branch.class(a1, l1, r1);
    };
    this.Branch.class = class Branch extends sorting.Tree {
      constructor(a, l, r) {
        super();
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return "Branch(" + runtime.render(this.a) + ", " + runtime.render(this.l) + ", " + runtime.render(this.r) + ")"; }
    };
    this.Tree2 = class Tree2 {
      constructor() {}
      toString() { return "Tree2"; }
    };
    const Tip2$class = class Tip2 extends sorting.Tree2 {
      constructor() {
        super();
      }
      toString() { return "Tip2"; }
    };
    this.Tip2 = new Tip2$class;
    this.Tip2.class = Tip2$class;
    this.Twig2 = function Twig2(a1) {
      return new Twig2.class(a1);
    };
    this.Twig2.class = class Twig2 extends sorting.Tree2 {
      constructor(a) {
        super();
        this.a = a;
      }
      toString() { return "Twig2(" + runtime.render(this.a) + ")"; }
    };
    this.Branch2 = function Branch2(a1, l1, r1) {
      return new Branch2.class(a1, l1, r1);
    };
    this.Branch2.class = class Branch2 extends sorting.Tree2 {
      constructor(a, l, r) {
        super();
        this.a = a;
        this.l = l;
        this.r = r;
      }
      toString() { return "Branch2(" + runtime.render(this.a) + ", " + runtime.render(this.l) + ", " + runtime.render(this.r) + ")"; }
    };
  }
  static int_of_char(c) {
    return runtime.safeCall(c.codePointAt(0))
  } 
  static compareList(xs, ys) {
    let param0, param1, x, xs_, param01, param11, y, ys_, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    if (xs instanceof NofibPrelude.Nil.class) {
      if (ys instanceof NofibPrelude.Nil.class) {
        return sorting.EQ
      } else if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        return sorting.LT
      } else {
        throw new globalThis.Error("match error");
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs_ = param1;
      if (ys instanceof NofibPrelude.Nil.class) {
        return sorting.GT
      } else if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        y = param01;
        ys_ = param11;
        tmp = sorting.int_of_char(x);
        tmp1 = sorting.int_of_char(y);
        scrut1 = tmp === tmp1;
        if (scrut1 === true) {
          return sorting.compareList(xs_, ys_)
        } else {
          tmp2 = sorting.int_of_char(x);
          tmp3 = sorting.int_of_char(y);
          scrut = tmp2 < tmp3;
          if (scrut === true) {
            return sorting.LT
          } else {
            return sorting.GT
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static gtList(a, b) {
    let scrut;
    scrut = compareList_inst_0_1_tsni(a, b);
    return runtime.safeCall(scrut())
  } 
  static leList(a1, b1) {
    let tmp;
    tmp = gtList_inst_2_3_tsni(a1, b1);
    return Predef.not(tmp)
  } 
  static ltList(a2, b2) {
    let scrut;
    scrut = compareList_inst_4_5_tsni(a2, b2);
    return runtime.safeCall(scrut())
  } 
  static geList(a3, b3) {
    let tmp;
    tmp = ltList_inst_6_7_tsni(a3, b3);
    return Predef.not(tmp)
  } 
  static eqList(a4, b4) {
    let scrut;
    scrut = compareList_inst_8_9_tsni(a4, b4);
    return runtime.safeCall(scrut())
  } 
  static prependToAll(sep, xs1) {
    let param0, param1, x, xs_, tmp, tmp1;
    if (xs1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs1 instanceof NofibPrelude.Cons.class) {
      param0 = xs1.head;
      param1 = xs1.tail;
      x = param0;
      xs_ = param1;
      tmp = sorting.prependToAll(sep, xs_);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return NofibPrelude.Cons(sep, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static intersperse(sep1, xs2) {
    let param0, param1, x, xs_, tmp;
    if (xs2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs2 instanceof NofibPrelude.Cons.class) {
      param0 = xs2.head;
      param1 = xs2.tail;
      x = param0;
      xs_ = param1;
      tmp = sorting.prependToAll(sep1, xs_);
      return NofibPrelude.Cons(x, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lines(s) {
    let scrut, first1, first0, l, s_, lambda;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      lambda = (undefined, function (x) {
        return x === "\n"
      });
      scrut = break__inst_10_11_tsni(lambda, s);
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
  } 
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (l) {
      let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = "\n";
      _deforest_Cons_tail = (ys1) => {
        return ys1
      };
      tmp1 = (ys1) => {
        return match_xs_arm_Cons_inst_12_55_56_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return append_inst_12_14_tsni(l, tmp1)
    });
    tmp = map_inst_12_13_tsni(lambda, ls);
    return concat_inst_12_55_tsni(tmp)
  } 
  static odd(x) {
    let tmp;
    tmp = NofibPrelude.intMod(x, 2);
    return tmp === 0
  } 
  static z_of_int(x1) {
    return runtime.safeCall(globalThis.BigInt(x1))
  } 
  static hash(str) {
    let tmp, tmp1, lambda;
    lambda = (undefined, function (acc, c1) {
      let tmp2, tmp3, tmp4, tmp5;
      tmp2 = sorting.int_of_char(c1);
      tmp3 = sorting.z_of_int(tmp2);
      tmp4 = sorting.z_of_int(31);
      tmp5 = acc * tmp4;
      return tmp3 + tmp5
    });
    tmp = lambda;
    tmp1 = sorting.z_of_int(0);
    return NofibPrelude.foldl(tmp, tmp1, str)
  } 
  static quickSort(xs3) {
    let lscomp2, lscomp1, param0, param1, x2, xs_, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs3 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs3 instanceof NofibPrelude.Cons.class) {
      param0 = xs3.head;
      param1 = xs3.tail;
      x2 = param0;
      xs_ = param1;
      lscomp1 = function lscomp1(ls1) {
        let param01, param11, h, t, scrut, tmp5;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param01 = ls1.head;
          param11 = ls1.tail;
          h = param01;
          t = param11;
          scrut = leList_inst_15_16_tsni(h, x2);
          if (scrut === true) {
            tmp5 = lscomp1(t);
            return NofibPrelude.Cons(h, tmp5)
          } else {
            return lscomp1(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      lscomp2 = function lscomp2(ls1) {
        let param01, param11, h, t, scrut, tmp5;
        if (ls1 instanceof NofibPrelude.Nil.class) {
          return NofibPrelude.Nil
        } else if (ls1 instanceof NofibPrelude.Cons.class) {
          param01 = ls1.head;
          param11 = ls1.tail;
          h = param01;
          t = param11;
          scrut = gtList_inst_15_17_tsni(h, x2);
          if (scrut === true) {
            tmp5 = lscomp2(t);
            return NofibPrelude.Cons(h, tmp5)
          } else {
            return lscomp2(t)
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      tmp = lscomp1(xs_);
      tmp1 = sorting.quickSort(tmp);
      tmp2 = lscomp2(xs_);
      tmp3 = sorting.quickSort(tmp2);
      tmp4 = NofibPrelude.Cons(x2, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static select(p, x2, ts_fs) {
    let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1;
    if (globalThis.Array.isArray(ts_fs) && ts_fs.length === 2) {
      first0 = ts_fs[0];
      first1 = ts_fs[1];
      ts = first0;
      fs = first1;
      scrut = runtime.safeCall(p(x2));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x2, ts);
        arr = [
          tmp,
          fs
        ];
        return arr
      } else {
        tmp1 = NofibPrelude.Cons(x2, fs);
        arr1 = [
          ts,
          tmp1
        ];
        return arr1
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static partition(p1, xs4) {
    let arr, lambda;
    arr = [
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ];
    lambda = (undefined, function (x3, y) {
      return sorting.select(p1, x3, y)
    });
    return NofibPrelude.foldr(lambda, arr, xs4)
  } 
  static quickSort2(xs5) {
    let param0, param1, x3, xs_, scrut, first1, first0, lo, hi, tmp, tmp1, tmp2, lambda;
    if (xs5 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs5 instanceof NofibPrelude.Cons.class) {
      param0 = xs5.head;
      param1 = xs5.tail;
      x3 = param0;
      xs_ = param1;
      lambda = (undefined, function (y) {
        return geList_inst_18_19_tsni(x3, y)
      });
      scrut = sorting.partition(lambda, xs_);
      if (globalThis.Array.isArray(scrut) && scrut.length === 2) {
        first0 = scrut[0];
        first1 = scrut[1];
        lo = first0;
        hi = first1;
        tmp = sorting.quickSort2(lo);
        tmp1 = sorting.quickSort2(hi);
        tmp2 = NofibPrelude.Cons(x3, tmp1);
        return NofibPrelude.append(tmp, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickerSort(xss) {
    let split, param0, param1, x3, xs6, x4;
    if (xss instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss instanceof NofibPrelude.Cons.class) {
      param0 = xss.head;
      param1 = xss.tail;
      x4 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x4, NofibPrelude.Nil)
      } else {
        x3 = param0;
        xs6 = param1;
        split = function split(x5, lo, hi, ys1) {
          let param01, param11, y, ys_, scrut, tmp, tmp1, tmp2, tmp3, tmp4;
          if (ys1 instanceof NofibPrelude.Nil.class) {
            tmp = sorting.quickerSort(lo);
            tmp1 = sorting.quickerSort(hi);
            tmp2 = NofibPrelude.Cons(x5, tmp1);
            return NofibPrelude.append(tmp, tmp2)
          } else if (ys1 instanceof NofibPrelude.Cons.class) {
            param01 = ys1.head;
            param11 = ys1.tail;
            y = param01;
            ys_ = param11;
            scrut = leList_inst_20_21_tsni(y, x5);
            if (scrut === true) {
              tmp3 = NofibPrelude.Cons(y, lo);
              return split(x5, tmp3, hi, ys_)
            } else {
              tmp4 = NofibPrelude.Cons(y, hi);
              return split(x5, lo, tmp4, ys_)
            }
          } else {
            throw new globalThis.Error("match error");
          }
        };
        return split(x3, NofibPrelude.Nil, NofibPrelude.Nil, xs6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static insertSort(xss1) {
    let trins, param0, param1, x3, xs6, tmp;
    if (xss1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xss1 instanceof NofibPrelude.Cons.class) {
      param0 = xss1.head;
      param1 = xss1.tail;
      x3 = param0;
      xs6 = param1;
      trins = function trins(rev, xs7, ys1) {
        let param01, param11, x4, xs_, param02, param12, y, ys_, scrut, xs8, y1, ys_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
        if (xs7 instanceof NofibPrelude.Nil.class) {
          xs8 = xs7;
          if (ys1 instanceof NofibPrelude.Cons.class) {
            param02 = ys1.head;
            param12 = ys1.tail;
            y1 = param02;
            ys_1 = param12;
            tmp1 = NofibPrelude.reverse(rev);
            tmp2 = NofibPrelude.Cons(y1, NofibPrelude.Nil);
            tmp3 = NofibPrelude.append(tmp1, tmp2);
            return trins(NofibPrelude.Nil, tmp3, ys_1)
          } else if (ys1 instanceof NofibPrelude.Nil.class) {
            tmp4 = NofibPrelude.reverse(rev);
            return NofibPrelude.append(tmp4, xs8)
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          xs8 = xs7;
          if (ys1 instanceof NofibPrelude.Nil.class) {
            tmp5 = NofibPrelude.reverse(rev);
            return NofibPrelude.append(tmp5, xs8)
          } else {
            if (xs7 instanceof NofibPrelude.Cons.class) {
              param01 = xs7.head;
              param11 = xs7.tail;
              x4 = param01;
              xs_ = param11;
              if (ys1 instanceof NofibPrelude.Cons.class) {
                param02 = ys1.head;
                param12 = ys1.tail;
                y = param02;
                ys_ = param12;
                scrut = ltList_inst_22_23_tsni(x4, y);
                if (scrut === true) {
                  tmp6 = NofibPrelude.Cons(x4, rev);
                  tmp7 = NofibPrelude.Cons(y, ys_);
                  return trins(tmp6, xs_, tmp7)
                } else {
                  tmp8 = NofibPrelude.reverse(rev);
                  tmp9 = NofibPrelude.Cons(x4, xs_);
                  tmp10 = NofibPrelude.Cons(y, tmp9);
                  tmp11 = NofibPrelude.append(tmp8, tmp10);
                  return trins(NofibPrelude.Nil, tmp11, ys_)
                }
              } else {
                throw new globalThis.Error("match error");
              }
            } else {
              throw new globalThis.Error("match error");
            }
          }
        }
      };
      tmp = NofibPrelude.Cons(x3, NofibPrelude.Nil);
      return trins(NofibPrelude.Nil, tmp, xs6)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static treeSort(param) {
    let mkTree, readTree, tmp;
    mkTree = function mkTree(innerparam) {
      let to_tree;
      to_tree = function to_tree(x3, t) {
        let param0, param1, param2, y, l, r, scrut, tmp1, tmp2;
        if (t instanceof sorting.Tip.class) {
          return runtime.safeCall(sorting.Branch(x3, sorting.Tip, sorting.Tip))
        } else if (t instanceof sorting.Branch.class) {
          param0 = t.a;
          param1 = t.l;
          param2 = t.r;
          y = param0;
          l = param1;
          r = param2;
          scrut = leList_inst_24_25_tsni(x3, y);
          if (scrut === true) {
            tmp1 = to_tree(x3, l);
            return runtime.safeCall(sorting.Branch(y, tmp1, r))
          } else {
            tmp2 = to_tree(x3, r);
            return runtime.safeCall(sorting.Branch(y, l, tmp2))
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return NofibPrelude.foldr(to_tree, sorting.Tip, innerparam)
    };
    readTree = function readTree(t) {
      let param0, param1, param2, x3, l, r, tmp1, tmp2, tmp3;
      if (t instanceof sorting.Tip.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param1 = t.l;
        param2 = t.r;
        x3 = param0;
        l = param1;
        r = param2;
        tmp1 = readTree(l);
        tmp2 = readTree(r);
        tmp3 = NofibPrelude.Cons(x3, tmp2);
        return NofibPrelude.append(tmp1, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = mkTree(param);
    return readTree(tmp)
  } 
  static treeSort2(param1) {
    let mkTree, readTree, tmp;
    mkTree = function mkTree(innerparam) {
      let to_tree;
      to_tree = function to_tree(x3, t) {
        let param0, param11, param2, y, l, r, scrut, y1, scrut1, tmp1, tmp2, tmp3, tmp4;
        if (t instanceof sorting.Tip2.class) {
          return runtime.safeCall(sorting.Twig2(x3))
        } else if (t instanceof sorting.Twig2.class) {
          param0 = t.a;
          y1 = param0;
          scrut1 = leList_inst_26_27_tsni(x3, y1);
          if (scrut1 === true) {
            tmp1 = runtime.safeCall(sorting.Twig2(x3));
            return runtime.safeCall(sorting.Branch2(y1, tmp1, sorting.Tip2))
          } else {
            tmp2 = runtime.safeCall(sorting.Twig2(x3));
            return runtime.safeCall(sorting.Branch2(y1, sorting.Tip2, tmp2))
          }
        } else if (t instanceof sorting.Branch2.class) {
          param0 = t.a;
          param11 = t.l;
          param2 = t.r;
          y = param0;
          l = param11;
          r = param2;
          scrut = leList_inst_26_28_tsni(x3, y);
          if (scrut === true) {
            tmp3 = to_tree(x3, l);
            return runtime.safeCall(sorting.Branch2(y, tmp3, r))
          } else {
            tmp4 = to_tree(x3, r);
            return runtime.safeCall(sorting.Branch2(y, l, tmp4))
          }
        } else {
          throw new globalThis.Error("match error");
        }
      };
      return NofibPrelude.foldr(to_tree, sorting.Tip2, innerparam)
    };
    readTree = function readTree(t) {
      let param0, param11, param2, x3, l, r, x4, tmp1, tmp2, tmp3;
      if (t instanceof sorting.Tip2.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Twig2.class) {
        param0 = t.a;
        x4 = param0;
        return NofibPrelude.Cons(x4, NofibPrelude.Nil)
      } else if (t instanceof sorting.Branch2.class) {
        param0 = t.a;
        param11 = t.l;
        param2 = t.r;
        x3 = param0;
        l = param11;
        r = param2;
        tmp1 = readTree(l);
        tmp2 = readTree(r);
        tmp3 = NofibPrelude.Cons(x3, tmp2);
        return NofibPrelude.append(tmp1, tmp3)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    tmp = mkTree(param1);
    return readTree(tmp)
  } 
  static heapSort(xs6) {
    let to_heap, clear, heap, mix, tmp;
    heap = function heap(k, xs7) {
      let param0, param11, x3, xs_, tmp1, tmp2;
      if (xs7 instanceof NofibPrelude.Nil.class) {
        return sorting.Tip
      } else if (xs7 instanceof NofibPrelude.Cons.class) {
        param0 = xs7.head;
        param11 = xs7.tail;
        x3 = param0;
        xs_ = param11;
        tmp1 = k + 1;
        tmp2 = heap(tmp1, xs_);
        return to_heap(k, x3, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    to_heap = function to_heap(k, x3, t) {
      let param0, param11, param2, y, l, r, scrut, scrut1, scrut2, scrut3, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
      if (t instanceof sorting.Tip.class) {
        return runtime.safeCall(sorting.Branch(x3, sorting.Tip, sorting.Tip))
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param11 = t.l;
        param2 = t.r;
        y = param0;
        l = param11;
        r = param2;
        scrut2 = leList_inst_29_30_tsni(x3, y);
        if (scrut2 === true) {
          scrut3 = sorting.odd(k);
          if (scrut3 === true) {
            tmp1 = NofibPrelude.intDiv(k, 2);
            tmp2 = to_heap(tmp1, y, l);
            return runtime.safeCall(sorting.Branch(x3, tmp2, r))
          } else {
            scrut1 = leList_inst_29_31_tsni(x3, y);
            if (scrut1 === true) {
              tmp3 = NofibPrelude.intDiv(k, 2);
              tmp4 = to_heap(tmp3, y, r);
              return runtime.safeCall(sorting.Branch(x3, l, tmp4))
            } else {
              scrut = sorting.odd(k);
              if (scrut === true) {
                tmp5 = NofibPrelude.intDiv(k, 2);
                tmp6 = to_heap(tmp5, x3, l);
                return runtime.safeCall(sorting.Branch(y, tmp6, r))
              } else {
                tmp7 = NofibPrelude.intDiv(k, 2);
                tmp8 = to_heap(tmp7, x3, r);
                return runtime.safeCall(sorting.Branch(y, l, tmp8))
              }
            }
          }
        } else {
          scrut1 = leList_inst_29_32_tsni(x3, y);
          if (scrut1 === true) {
            tmp9 = NofibPrelude.intDiv(k, 2);
            tmp10 = to_heap(tmp9, y, r);
            return runtime.safeCall(sorting.Branch(x3, l, tmp10))
          } else {
            scrut = sorting.odd(k);
            if (scrut === true) {
              tmp11 = NofibPrelude.intDiv(k, 2);
              tmp12 = to_heap(tmp11, x3, l);
              return runtime.safeCall(sorting.Branch(y, tmp12, r))
            } else {
              tmp13 = NofibPrelude.intDiv(k, 2);
              tmp14 = to_heap(tmp13, x3, r);
              return runtime.safeCall(sorting.Branch(y, l, tmp14))
            }
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    };
    clear = function clear(t) {
      let param0, param11, param2, x3, l, r, tmp1, tmp2;
      if (t instanceof sorting.Tip.class) {
        return NofibPrelude.Nil
      } else if (t instanceof sorting.Branch.class) {
        param0 = t.a;
        param11 = t.l;
        param2 = t.r;
        x3 = param0;
        l = param11;
        r = param2;
        tmp1 = mix(l, r);
        tmp2 = clear(tmp1);
        return NofibPrelude.Cons(x3, tmp2)
      } else {
        throw new globalThis.Error("match error");
      }
    };
    mix = function mix(l, r) {
      let param0, param11, param2, x3, l1, r1, param01, param12, param21, y, l2, r2, scrut, tmp1, tmp2, tmp3, tmp4;
      if (l instanceof sorting.Tip.class) {
        return r
      } else {
        if (r instanceof sorting.Tip.class) {
          return l
        } else {
          if (l instanceof sorting.Branch.class) {
            param0 = l.a;
            param11 = l.l;
            param2 = l.r;
            x3 = param0;
            l1 = param11;
            r1 = param2;
            if (r instanceof sorting.Branch.class) {
              param01 = r.a;
              param12 = r.l;
              param21 = r.r;
              y = param01;
              l2 = param12;
              r2 = param21;
              scrut = leList_inst_29_33_tsni(x3, y);
              if (scrut === true) {
                tmp1 = mix(l1, r1);
                tmp2 = runtime.safeCall(sorting.Branch(y, l2, r2));
                return runtime.safeCall(sorting.Branch(x3, tmp1, tmp2))
              } else {
                tmp3 = runtime.safeCall(sorting.Branch(x3, l1, r1));
                tmp4 = mix(l2, r2);
                return runtime.safeCall(sorting.Branch(y, tmp3, tmp4))
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    };
    tmp = heap(0, xs6);
    return clear(tmp)
  } 
  static mergeSort(param2) {
    let runsplit, merge, merge_lists, tmp;
    runsplit = function runsplit(run, xs7) {
      let param0, param11, r, rs, param01, param12, x3, xs_, rs1, scrut, scrut1, scrut2, x4, xs_1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
      if (run instanceof NofibPrelude.Nil.class) {
        if (xs7 instanceof NofibPrelude.Nil.class) {
          return (merge1, merge_lists1) => {
            return match_xs_arm_Nil_inst_34_tsni(merge1, merge_lists1)
          }
        } else if (xs7 instanceof NofibPrelude.Cons.class) {
          param01 = xs7.head;
          param12 = xs7.tail;
          x4 = param01;
          xs_1 = param12;
          tmp1 = NofibPrelude.Cons(x4, NofibPrelude.Nil);
          return runsplit(tmp1, xs_1)
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        if (xs7 instanceof NofibPrelude.Nil.class) {
          _deforest_Cons_head1 = run;
          _deforest_Cons_tail1 = (merge1, merge_lists1) => {
            return match_xs_arm_Nil_inst_34_tsni(merge1, merge_lists1)
          };
          return (merge1, merge_lists1) => {
            return match_xs_arm_Cons_inst_34_tsni(merge1, merge_lists1, _deforest_Cons_head1, _deforest_Cons_tail1)
          }
        } else {
          if (run instanceof NofibPrelude.Cons.class) {
            param0 = run.head;
            param11 = run.tail;
            r = param0;
            rs = param11;
            if (xs7 instanceof NofibPrelude.Cons.class) {
              param01 = xs7.head;
              param12 = xs7.tail;
              x3 = param01;
              xs_ = param12;
              if (rs instanceof NofibPrelude.Nil.class) {
                scrut2 = gtList_inst_34_35_tsni(x3, r);
                if (scrut2 === true) {
                  tmp2 = NofibPrelude.Cons(x3, NofibPrelude.Nil);
                  tmp3 = NofibPrelude.Cons(r, tmp2);
                  return runsplit(tmp3, xs_)
                } else {
                  scrut1 = leList_inst_34_36_tsni(x3, r);
                  if (scrut1 === true) {
                    tmp4 = NofibPrelude.Cons(r, rs);
                    tmp5 = NofibPrelude.Cons(x3, tmp4);
                    return runsplit(tmp5, xs_)
                  } else {
                    tmp6 = NofibPrelude.Cons(r, rs);
                    tmp7 = NofibPrelude.Cons(x3, NofibPrelude.Nil);
                    tmp8 = runsplit(tmp7, xs_);
                    _deforest_Cons_head = tmp6;
                    _deforest_Cons_tail = tmp8;
                    return (merge1, merge_lists1) => {
                      return match_xs_arm_Cons_inst_34_tsni(merge1, merge_lists1, _deforest_Cons_head, _deforest_Cons_tail)
                    }
                  }
                }
              } else {
                rs1 = rs;
                scrut = leList_inst_34_37_tsni(x3, r);
                if (scrut === true) {
                  tmp9 = NofibPrelude.Cons(r, rs1);
                  tmp10 = NofibPrelude.Cons(x3, tmp9);
                  return runsplit(tmp10, xs_)
                } else {
                  tmp11 = NofibPrelude.Cons(r, rs1);
                  tmp12 = NofibPrelude.Cons(x3, NofibPrelude.Nil);
                  tmp13 = runsplit(tmp12, xs_);
                  _deforest_Cons_head2 = tmp11;
                  _deforest_Cons_tail2 = tmp13;
                  return (merge1, merge_lists1) => {
                    return match_xs_arm_Cons_inst_34_tsni(merge1, merge_lists1, _deforest_Cons_head2, _deforest_Cons_tail2)
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
      }
    };
    merge_lists = function merge_lists(xs7) {
      return runtime.safeCall(xs7(merge, merge_lists))
    };
    merge = function merge(xs7, ys1) {
      let param0, param11, x3, xs_, param01, param12, y, ys_, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
      if (xs7 instanceof NofibPrelude.Nil.class) {
        return ys1
      } else {
        if (ys1 instanceof NofibPrelude.Nil.class) {
          return xs7
        } else {
          if (xs7 instanceof NofibPrelude.Cons.class) {
            param0 = xs7.head;
            param11 = xs7.tail;
            x3 = param0;
            xs_ = param11;
            if (ys1 instanceof NofibPrelude.Cons.class) {
              param01 = ys1.head;
              param12 = ys1.tail;
              y = param01;
              ys_ = param12;
              scrut1 = eqList_inst_34_38_tsni(x3, y);
              if (scrut1 === true) {
                tmp1 = merge(xs_, ys_);
                tmp2 = NofibPrelude.Cons(y, tmp1);
                return NofibPrelude.Cons(x3, tmp2)
              } else {
                scrut = ltList_inst_34_39_tsni(x3, y);
                if (scrut === true) {
                  tmp3 = NofibPrelude.Cons(y, ys_);
                  tmp4 = merge(xs_, tmp3);
                  return NofibPrelude.Cons(x3, tmp4)
                } else {
                  tmp5 = NofibPrelude.Cons(x3, xs_);
                  tmp6 = merge(tmp5, ys_);
                  return NofibPrelude.Cons(y, tmp6)
                }
              }
            } else {
              throw new globalThis.Error("match error");
            }
          } else {
            throw new globalThis.Error("match error");
          }
        }
      }
    };
    tmp = runsplit(NofibPrelude.Nil, param2);
    return merge_lists(tmp)
  } 
  static mangle(inpt) {
    let sort, tmp, tmp1;
    sort = function sort(param3) {
      let tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, lambda, lambda1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
      _deforest_Cons_head7 = treeSort2_inst_40_41_tsni;
      _deforest_Cons_tail7 = (sep2) => {
        return (f, z) => {
          return match_xs_arm_Nil_inst_40_59_tsni(f, z)
        }
      };
      tmp2 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head7, _deforest_Cons_tail7)
      };
      _deforest_Cons_head6 = treeSort_inst_40_42_tsni;
      _deforest_Cons_tail6 = tmp2;
      tmp3 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head6, _deforest_Cons_tail6)
      };
      _deforest_Cons_head5 = quickerSort_inst_40_43_tsni;
      _deforest_Cons_tail5 = tmp3;
      tmp4 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head5, _deforest_Cons_tail5)
      };
      _deforest_Cons_head4 = quickSort2_inst_40_44_tsni;
      _deforest_Cons_tail4 = tmp4;
      tmp5 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head4, _deforest_Cons_tail4)
      };
      _deforest_Cons_head3 = quickSort_inst_40_45_tsni;
      _deforest_Cons_tail3 = tmp5;
      tmp6 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head3, _deforest_Cons_tail3)
      };
      _deforest_Cons_head2 = mergeSort_inst_40_46_tsni;
      _deforest_Cons_tail2 = tmp6;
      tmp7 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head2, _deforest_Cons_tail2)
      };
      _deforest_Cons_head1 = insertSort_inst_40_47_tsni;
      _deforest_Cons_tail1 = tmp7;
      tmp8 = (sep2) => {
        return match_xs_arm_Cons_inst_40_49_50_tsni(sep2, _deforest_Cons_head1, _deforest_Cons_tail1)
      };
      _deforest_Cons_head = heapSort_inst_40_48_tsni;
      _deforest_Cons_tail = tmp8;
      tmp9 = (sep2) => {
        let param0, param11, x3, xs_, tmp12, _deforest_Cons_head8, _deforest_Cons_tail8;
        param0 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x3 = param0;
        xs_ = param11;
        tmp12 = prependToAll_inst_40_49_50_tsni(sep2, xs_);
        _deforest_Cons_head8 = x3;
        _deforest_Cons_tail8 = tmp12;
        return (f, z) => {
          return match_xs_arm_Cons_inst_40_59_tsni(f, z, _deforest_Cons_head8, _deforest_Cons_tail8)
        }
      };
      tmp10 = intersperse_inst_40_49_tsni(NofibPrelude.reverse, tmp9);
      lambda = (undefined, function (f, g) {
        let lambda2;
        lambda2 = (undefined, function (x3) {
          let tmp12;
          tmp12 = runtime.safeCall(g(x3));
          return runtime.safeCall(f(tmp12))
        });
        return lambda2
      });
      lambda1 = (undefined, function (x3) {
        return x3
      });
      tmp11 = foldr_inst_40_59_tsni(lambda, lambda1, tmp10);
      return runtime.safeCall(tmp11(param3))
    };
    tmp = lines_inst_40_51_tsni(inpt);
    tmp1 = sort(tmp);
    return unlines_inst_40_52_tsni(tmp1)
  } 
  static testSorting_nofib(d) {
    let f, tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(globalThis.fs.readFileSync("hkmc2/shared/src/test/mlscript/nofib/input/Main.hs"));
    tmp1 = runtime.safeCall(tmp.toString());
    tmp2 = NofibPrelude.nofibStringToList(tmp1);
    f = tmp2;
    tmp3 = mangle_inst_53_54_tsni(f);
    return hash_inst_53_60_tsni(tmp3)
  } 
  static main() {
    return testSorting_nofib_inst_57_58_tsni(0)
  }
  static toString() { return "sorting"; }
});
let sorting = sorting1; export default sorting;
