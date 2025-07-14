import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cryptarithm21, map_inst_0_tsni, map_inst_1_tsni, bind_inst_2_tsni, map_inst_2_3_tsni, bind_inst_4_tsni, map_inst_4_3_tsni, bind_inst_5_tsni, map_inst_5_3_tsni, bind_inst_6_tsni, map_inst_6_3_tsni, concat_inst_6_7_tsni, append_inst_6_7_8_tsni, mapM_inst_9_tsni, bind_inst_9_10_tsni, map_inst_9_10_3_tsni, return__inst_9_11_tsni, bind_inst_9_12_tsni, map_inst_9_12_3_tsni, concat_inst_9_10_7_tsni, append_inst_9_10_7_8_tsni, select_inst_13_tsni, lookup_inst_13_14_tsni, permute_inst_13_15_tsni, bind_inst_13_15_2_tsni, map_inst_13_15_2_3_tsni, bind_inst_13_15_16_tsni, map_inst_13_15_16_3_tsni, concat_inst_13_15_16_7_tsni, append_inst_13_15_16_7_8_tsni, bind_inst_13_15_17_tsni, map_inst_13_15_17_3_tsni, concat_inst_13_15_17_7_tsni, append_inst_13_15_17_7_8_tsni, return__inst_13_15_18_tsni, put_inst_13_15_19_tsni, lift_inst_13_15_20_tsni, map_inst_13_15_20_21_tsni, concat_inst_13_15_20_22_tsni, append_inst_13_15_20_22_8_tsni, map_inst_13_15_23_tsni, bind_inst_13_4_tsni, map_inst_13_4_3_tsni, return__inst_13_24_tsni, concat_inst_13_15_2_7_tsni, append_inst_13_15_2_7_8_tsni, concat_inst_13_4_7_tsni, append_inst_13_4_7_8_tsni, return__inst_25_tsni, unlines_inst_26_tsni, map_inst_26_0_tsni, append_inst_26_27_tsni, map_inst_28_tsni, concat_inst_29_tsni, append_inst_29_8_tsni, execStateT_inst_30_tsni, map_inst_30_1_tsni, concat_inst_30_31_tsni, append_inst_30_31_8_tsni, solve_inst_32_tsni, select_inst_32_13_tsni, bind_inst_32_13_4_tsni, map_inst_32_13_4_3_tsni, permute_inst_32_13_15_tsni, lift_inst_32_13_15_20_tsni, map_inst_32_13_15_20_21_tsni, map_inst_32_13_15_23_tsni, bind_inst_32_13_15_17_tsni, map_inst_32_13_15_17_3_tsni, put_inst_32_13_15_19_tsni, return__inst_32_13_15_18_tsni, bind_inst_32_13_15_16_tsni, map_inst_32_13_15_16_3_tsni, concat_inst_32_13_15_20_22_tsni, append_inst_32_13_15_20_22_8_tsni, concat_inst_32_13_15_17_7_tsni, append_inst_32_13_15_17_7_8_tsni, bind_inst_32_13_15_2_tsni, map_inst_32_13_15_2_3_tsni, concat_inst_32_13_15_16_7_tsni, append_inst_32_13_15_16_7_8_tsni, concat_inst_32_13_15_2_7_tsni, append_inst_32_13_15_2_7_8_tsni, return__inst_32_13_24_tsni, lookup_inst_32_13_14_tsni, mapM_inst_32_9_tsni, bind_inst_32_9_12_tsni, map_inst_32_9_12_3_tsni, bind_inst_32_9_10_tsni, map_inst_32_9_10_3_tsni, concat_inst_32_9_10_7_tsni, append_inst_32_9_10_7_8_tsni, return__inst_32_9_11_tsni, concat_inst_32_13_4_7_tsni, append_inst_32_13_4_7_8_tsni, bind_inst_32_6_tsni, map_inst_32_6_3_tsni, return__inst_32_33_tsni, select_inst_32_34_tsni, bind_inst_32_34_4_tsni, map_inst_32_34_4_3_tsni, permute_inst_32_34_15_tsni, lift_inst_32_34_15_20_tsni, map_inst_32_34_15_20_21_tsni, map_inst_32_34_15_23_tsni, bind_inst_32_34_15_17_tsni, map_inst_32_34_15_17_3_tsni, put_inst_32_34_15_19_tsni, return__inst_32_34_15_18_tsni, bind_inst_32_34_15_16_tsni, map_inst_32_34_15_16_3_tsni, concat_inst_32_34_15_20_22_tsni, append_inst_32_34_15_20_22_8_tsni, concat_inst_32_34_15_17_7_tsni, append_inst_32_34_15_17_7_8_tsni, bind_inst_32_34_15_2_tsni, map_inst_32_34_15_2_3_tsni, concat_inst_32_34_15_16_7_tsni, append_inst_32_34_15_16_7_8_tsni, concat_inst_32_34_15_2_7_tsni, append_inst_32_34_15_2_7_8_tsni, return__inst_32_34_24_tsni, lookup_inst_32_34_14_tsni, bind_inst_32_35_tsni, map_inst_32_35_3_tsni, guard_inst_32_36_tsni, bind_inst_32_37_tsni, map_inst_32_37_3_tsni, concat_inst_32_34_4_7_tsni, append_inst_32_34_4_7_8_tsni, concat_inst_32_35_7_tsni, append_inst_32_35_7_8_tsni, bind_inst_32_5_tsni, map_inst_32_5_3_tsni, concat_inst_32_6_7_tsni, append_inst_32_6_7_8_tsni, return__inst_32_25_tsni, concat_inst_32_37_7_tsni, append_inst_32_37_7_8_tsni, return__inst_32_38_tsni, puzzle_inst_39_tsni, solve_inst_39_32_tsni, bind_inst_39_32_5_tsni, map_inst_39_32_5_3_tsni, bind_inst_39_32_37_tsni, map_inst_39_32_37_3_tsni, concat_inst_39_32_37_7_tsni, append_inst_39_32_37_7_8_tsni, bind_inst_39_32_35_tsni, map_inst_39_32_35_3_tsni, concat_inst_39_32_35_7_tsni, append_inst_39_32_35_7_8_tsni, guard_inst_39_32_36_tsni, select_inst_39_32_34_tsni, lookup_inst_39_32_34_14_tsni, permute_inst_39_32_34_15_tsni, bind_inst_39_32_34_15_2_tsni, map_inst_39_32_34_15_2_3_tsni, bind_inst_39_32_34_15_16_tsni, map_inst_39_32_34_15_16_3_tsni, concat_inst_39_32_34_15_16_7_tsni, append_inst_39_32_34_15_16_7_8_tsni, bind_inst_39_32_34_15_17_tsni, map_inst_39_32_34_15_17_3_tsni, concat_inst_39_32_34_15_17_7_tsni, append_inst_39_32_34_15_17_7_8_tsni, return__inst_39_32_34_15_18_tsni, put_inst_39_32_34_15_19_tsni, lift_inst_39_32_34_15_20_tsni, map_inst_39_32_34_15_20_21_tsni, concat_inst_39_32_34_15_20_22_tsni, append_inst_39_32_34_15_20_22_8_tsni, map_inst_39_32_34_15_23_tsni, bind_inst_39_32_34_4_tsni, map_inst_39_32_34_4_3_tsni, return__inst_39_32_34_24_tsni, concat_inst_39_32_34_15_2_7_tsni, append_inst_39_32_34_15_2_7_8_tsni, concat_inst_39_32_34_4_7_tsni, append_inst_39_32_34_4_7_8_tsni, bind_inst_39_32_6_tsni, map_inst_39_32_6_3_tsni, concat_inst_39_32_6_7_tsni, append_inst_39_32_6_7_8_tsni, return__inst_39_32_33_tsni, mapM_inst_39_32_9_tsni, bind_inst_39_32_9_10_tsni, map_inst_39_32_9_10_3_tsni, return__inst_39_32_9_11_tsni, bind_inst_39_32_9_12_tsni, map_inst_39_32_9_12_3_tsni, concat_inst_39_32_9_10_7_tsni, append_inst_39_32_9_10_7_8_tsni, select_inst_39_32_13_tsni, lookup_inst_39_32_13_14_tsni, permute_inst_39_32_13_15_tsni, bind_inst_39_32_13_15_2_tsni, map_inst_39_32_13_15_2_3_tsni, bind_inst_39_32_13_15_16_tsni, map_inst_39_32_13_15_16_3_tsni, concat_inst_39_32_13_15_16_7_tsni, append_inst_39_32_13_15_16_7_8_tsni, bind_inst_39_32_13_15_17_tsni, map_inst_39_32_13_15_17_3_tsni, concat_inst_39_32_13_15_17_7_tsni, append_inst_39_32_13_15_17_7_8_tsni, return__inst_39_32_13_15_18_tsni, put_inst_39_32_13_15_19_tsni, lift_inst_39_32_13_15_20_tsni, map_inst_39_32_13_15_20_21_tsni, concat_inst_39_32_13_15_20_22_tsni, append_inst_39_32_13_15_20_22_8_tsni, map_inst_39_32_13_15_23_tsni, bind_inst_39_32_13_4_tsni, map_inst_39_32_13_4_3_tsni, return__inst_39_32_13_24_tsni, concat_inst_39_32_13_15_2_7_tsni, append_inst_39_32_13_15_2_7_8_tsni, concat_inst_39_32_13_4_7_tsni, append_inst_39_32_13_4_7_8_tsni, return__inst_39_32_25_tsni, execStateT_inst_39_30_tsni, map_inst_39_30_1_tsni, return__inst_39_32_38_tsni, concat_inst_39_30_31_tsni, append_inst_39_30_31_8_tsni, lookup_inst_39_40_tsni, concat_inst_39_29_tsni, append_inst_39_29_8_tsni, unlines_inst_39_26_tsni, map_inst_39_26_0_tsni, append_inst_39_26_27_tsni, map_inst_39_28_tsni, testCryptarithm2_nofib_inst_41_tsni, puzzle_inst_41_39_tsni, unlines_inst_41_39_26_tsni, map_inst_41_39_26_0_tsni, append_inst_41_39_26_27_tsni, map_inst_41_39_28_tsni, concat_inst_41_39_29_tsni, append_inst_41_39_29_8_tsni, lookup_inst_41_39_40_tsni, execStateT_inst_41_39_30_tsni, map_inst_41_39_30_1_tsni, concat_inst_41_39_30_31_tsni, append_inst_41_39_30_31_8_tsni, solve_inst_41_39_32_tsni, select_inst_41_39_32_13_tsni, bind_inst_41_39_32_13_4_tsni, map_inst_41_39_32_13_4_3_tsni, permute_inst_41_39_32_13_15_tsni, lift_inst_41_39_32_13_15_20_tsni, map_inst_41_39_32_13_15_20_21_tsni, map_inst_41_39_32_13_15_23_tsni, bind_inst_41_39_32_13_15_17_tsni, map_inst_41_39_32_13_15_17_3_tsni, put_inst_41_39_32_13_15_19_tsni, return__inst_41_39_32_13_15_18_tsni, bind_inst_41_39_32_13_15_16_tsni, map_inst_41_39_32_13_15_16_3_tsni, concat_inst_41_39_32_13_15_20_22_tsni, append_inst_41_39_32_13_15_20_22_8_tsni, concat_inst_41_39_32_13_15_17_7_tsni, append_inst_41_39_32_13_15_17_7_8_tsni, bind_inst_41_39_32_13_15_2_tsni, map_inst_41_39_32_13_15_2_3_tsni, concat_inst_41_39_32_13_15_16_7_tsni, append_inst_41_39_32_13_15_16_7_8_tsni, concat_inst_41_39_32_13_15_2_7_tsni, append_inst_41_39_32_13_15_2_7_8_tsni, return__inst_41_39_32_13_24_tsni, lookup_inst_41_39_32_13_14_tsni, mapM_inst_41_39_32_9_tsni, bind_inst_41_39_32_9_12_tsni, map_inst_41_39_32_9_12_3_tsni, bind_inst_41_39_32_9_10_tsni, map_inst_41_39_32_9_10_3_tsni, concat_inst_41_39_32_9_10_7_tsni, append_inst_41_39_32_9_10_7_8_tsni, return__inst_41_39_32_9_11_tsni, concat_inst_41_39_32_13_4_7_tsni, append_inst_41_39_32_13_4_7_8_tsni, bind_inst_41_39_32_6_tsni, map_inst_41_39_32_6_3_tsni, return__inst_41_39_32_33_tsni, select_inst_41_39_32_34_tsni, bind_inst_41_39_32_34_4_tsni, map_inst_41_39_32_34_4_3_tsni, permute_inst_41_39_32_34_15_tsni, lift_inst_41_39_32_34_15_20_tsni, map_inst_41_39_32_34_15_20_21_tsni, map_inst_41_39_32_34_15_23_tsni, bind_inst_41_39_32_34_15_17_tsni, map_inst_41_39_32_34_15_17_3_tsni, put_inst_41_39_32_34_15_19_tsni, return__inst_41_39_32_34_15_18_tsni, bind_inst_41_39_32_34_15_16_tsni, map_inst_41_39_32_34_15_16_3_tsni, concat_inst_41_39_32_34_15_20_22_tsni, append_inst_41_39_32_34_15_20_22_8_tsni, concat_inst_41_39_32_34_15_17_7_tsni, append_inst_41_39_32_34_15_17_7_8_tsni, bind_inst_41_39_32_34_15_2_tsni, map_inst_41_39_32_34_15_2_3_tsni, concat_inst_41_39_32_34_15_16_7_tsni, append_inst_41_39_32_34_15_16_7_8_tsni, concat_inst_41_39_32_34_15_2_7_tsni, append_inst_41_39_32_34_15_2_7_8_tsni, return__inst_41_39_32_34_24_tsni, lookup_inst_41_39_32_34_14_tsni, bind_inst_41_39_32_35_tsni, map_inst_41_39_32_35_3_tsni, guard_inst_41_39_32_36_tsni, bind_inst_41_39_32_37_tsni, map_inst_41_39_32_37_3_tsni, concat_inst_41_39_32_34_4_7_tsni, append_inst_41_39_32_34_4_7_8_tsni, concat_inst_41_39_32_35_7_tsni, append_inst_41_39_32_35_7_8_tsni, bind_inst_41_39_32_5_tsni, map_inst_41_39_32_5_3_tsni, concat_inst_41_39_32_6_7_tsni, append_inst_41_39_32_6_7_8_tsni, return__inst_41_39_32_25_tsni, concat_inst_41_39_32_37_7_tsni, append_inst_41_39_32_37_7_8_tsni, return__inst_41_39_32_38_tsni, concat_inst_42_tsni, concat_inst_31_tsni, concat_inst_2_7_tsni, concat_inst_4_7_tsni, concat_inst_5_7_tsni, runStateT_inst_5_43_tsni, runStateT_inst_9_10_44_tsni, concat_inst_9_12_7_tsni, runStateT_inst_9_12_44_tsni, append_inst_9_12_7_8_tsni, runStateT_inst_13_15_2_44_tsni, runStateT_inst_13_15_16_44_tsni, runStateT_inst_13_15_17_44_tsni, runStateT_inst_13_15_17_43_tsni, runStateT_inst_13_15_16_43_tsni, listDiff_inst_13_15_45_tsni, foldl_inst_13_15_45_46_tsni, runStateT_inst_13_4_44_tsni, runStateT_inst_9_12_43_tsni, concat_inst_26_42_tsni, append_inst_26_42_8_tsni, append_inst_47_tsni, listDiff_inst_32_13_15_45_tsni, foldl_inst_32_13_15_45_46_tsni, runStateT_inst_32_13_15_17_43_tsni, runStateT_inst_32_13_15_17_44_tsni, runStateT_inst_32_13_15_16_43_tsni, runStateT_inst_32_13_15_16_44_tsni, runStateT_inst_32_13_15_2_44_tsni, runStateT_inst_32_13_4_44_tsni, concat_inst_32_9_12_7_tsni, runStateT_inst_32_9_12_44_tsni, append_inst_32_9_12_7_8_tsni, runStateT_inst_32_9_10_44_tsni, runStateT_inst_32_9_12_43_tsni, runStateT_inst_32_6_44_tsni, listDiff_inst_32_34_15_45_tsni, foldl_inst_32_34_15_45_46_tsni, runStateT_inst_32_34_15_17_43_tsni, runStateT_inst_32_34_15_17_44_tsni, runStateT_inst_32_34_15_16_43_tsni, runStateT_inst_32_34_15_16_44_tsni, runStateT_inst_32_34_15_2_44_tsni, runStateT_inst_32_34_4_44_tsni, runStateT_inst_32_35_43_tsni, runStateT_inst_32_37_43_tsni, runStateT_inst_32_37_44_tsni, concat_inst_32_5_7_tsni, runStateT_inst_32_5_43_tsni, runStateT_inst_32_5_44_tsni, append_inst_32_5_7_8_tsni, concat_inst_39_32_5_7_tsni, runStateT_inst_39_32_5_44_tsni, append_inst_39_32_5_7_8_tsni, runStateT_inst_39_32_37_44_tsni, runStateT_inst_39_32_35_43_tsni, runStateT_inst_39_32_34_15_2_44_tsni, runStateT_inst_39_32_34_15_16_44_tsni, runStateT_inst_39_32_34_15_17_44_tsni, runStateT_inst_39_32_34_15_17_43_tsni, runStateT_inst_39_32_34_15_16_43_tsni, listDiff_inst_39_32_34_15_45_tsni, foldl_inst_39_32_34_15_45_46_tsni, runStateT_inst_39_32_34_4_44_tsni, runStateT_inst_39_32_37_43_tsni, runStateT_inst_39_32_5_43_tsni, runStateT_inst_39_32_6_44_tsni, runStateT_inst_39_32_9_10_44_tsni, concat_inst_39_32_9_12_7_tsni, runStateT_inst_39_32_9_12_44_tsni, append_inst_39_32_9_12_7_8_tsni, runStateT_inst_39_32_13_15_2_44_tsni, runStateT_inst_39_32_13_15_16_44_tsni, runStateT_inst_39_32_13_15_17_44_tsni, runStateT_inst_39_32_13_15_17_43_tsni, runStateT_inst_39_32_13_15_16_43_tsni, listDiff_inst_39_32_13_15_45_tsni, foldl_inst_39_32_13_15_45_46_tsni, runStateT_inst_39_32_13_4_44_tsni, runStateT_inst_39_32_9_12_43_tsni, fromSome_inst_39_48_tsni, append_inst_39_47_tsni, concat_inst_39_26_42_tsni, append_inst_39_26_42_8_tsni, concat_inst_41_39_26_42_tsni, append_inst_41_39_26_42_8_tsni, append_inst_41_39_47_tsni, fromSome_inst_41_39_48_tsni, listDiff_inst_41_39_32_13_15_45_tsni, foldl_inst_41_39_32_13_15_45_46_tsni, runStateT_inst_41_39_32_13_15_17_43_tsni, runStateT_inst_41_39_32_13_15_17_44_tsni, runStateT_inst_41_39_32_13_15_16_43_tsni, runStateT_inst_41_39_32_13_15_16_44_tsni, runStateT_inst_41_39_32_13_15_2_44_tsni, runStateT_inst_41_39_32_13_4_44_tsni, concat_inst_41_39_32_9_12_7_tsni, runStateT_inst_41_39_32_9_12_44_tsni, append_inst_41_39_32_9_12_7_8_tsni, runStateT_inst_41_39_32_9_10_44_tsni, runStateT_inst_41_39_32_9_12_43_tsni, runStateT_inst_41_39_32_6_44_tsni, listDiff_inst_41_39_32_34_15_45_tsni, foldl_inst_41_39_32_34_15_45_46_tsni, runStateT_inst_41_39_32_34_15_17_43_tsni, runStateT_inst_41_39_32_34_15_17_44_tsni, runStateT_inst_41_39_32_34_15_16_43_tsni, runStateT_inst_41_39_32_34_15_16_44_tsni, runStateT_inst_41_39_32_34_15_2_44_tsni, runStateT_inst_41_39_32_34_4_44_tsni, runStateT_inst_41_39_32_35_43_tsni, runStateT_inst_41_39_32_37_43_tsni, runStateT_inst_41_39_32_37_44_tsni, concat_inst_41_39_32_5_7_tsni, runStateT_inst_41_39_32_5_43_tsni, runStateT_inst_41_39_32_5_44_tsni, append_inst_41_39_32_5_7_8_tsni, match_scrut_rest_inst__tsni, match_scrut_rest_inst_39_tsni, match_scrut_rest_inst_41_39_tsni, match_m_arm_StateT_inst_5_43_tsni, match_xs_arm_Cons_inst_5_3_tsni, match_xs_arm_Nil_inst_5_3_tsni, match_m_arm_StateT_inst_13_4_44_tsni, match_xs_arm_Cons_inst_13_4_7_8_tsni, match_xs_arm_Nil_inst_13_4_7_8_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_9_12_tsni, match_xs_arm_Cons_inst_26_42_8_tsni, match_m_arm_StateT_inst_32_13_4_44_tsni, match_xs_arm_Cons_inst_32_13_4_7_8_tsni, match_xs_arm_Nil_inst_32_13_4_7_8_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_32_9_12_tsni, match_m_arm_StateT_inst_32_34_4_44_tsni, match_xs_arm_Cons_inst_32_34_4_7_8_tsni, match_xs_arm_Nil_inst_32_34_4_7_8_tsni, match_m_arm_StateT_inst_32_35_43_tsni, match_xs_arm_Nil_inst_32_35_3_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_32_37_tsni, match_m_arm_StateT_inst_32_5_43_tsni, match_xs_arm_Cons_inst_32_5_3_tsni, match_xs_arm_Nil_inst_32_5_3_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_32_5_tsni, match_m_arm_StateT_inst_39_32_35_43_tsni, match_xs_arm_Nil_inst_39_32_35_3_tsni, match_m_arm_StateT_inst_39_32_34_4_44_tsni, match_xs_arm_Cons_inst_39_32_34_4_7_8_tsni, match_xs_arm_Nil_inst_39_32_34_4_7_8_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_39_32_37_tsni, match_m_arm_StateT_inst_39_32_5_43_tsni, match_xs_arm_Cons_inst_39_32_5_3_tsni, match_xs_arm_Nil_inst_39_32_5_3_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_39_32_5_tsni, match_m_arm_StateT_inst_39_32_13_4_44_tsni, match_xs_arm_Cons_inst_39_32_13_4_7_8_tsni, match_xs_arm_Nil_inst_39_32_13_4_7_8_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_39_32_9_12_tsni, match_xs_arm_Cons_inst_39_26_42_8_tsni, match_xs_arm_Cons_inst_41_39_26_42_8_tsni, match_m_arm_StateT_inst_41_39_32_13_4_44_tsni, match_xs_arm_Cons_inst_41_39_32_13_4_7_8_tsni, match_xs_arm_Nil_inst_41_39_32_13_4_7_8_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_9_12_tsni, match_m_arm_StateT_inst_41_39_32_34_4_44_tsni, match_xs_arm_Cons_inst_41_39_32_34_4_7_8_tsni, match_xs_arm_Nil_inst_41_39_32_34_4_7_8_tsni, match_m_arm_StateT_inst_41_39_32_35_43_tsni, match_xs_arm_Nil_inst_41_39_32_35_3_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_37_tsni, match_m_arm_StateT_inst_41_39_32_5_43_tsni, match_xs_arm_Cons_inst_41_39_32_5_3_tsni, match_xs_arm_Nil_inst_41_39_32_5_3_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_5_tsni;
match_scrut_rest_inst__tsni = function match_scrut_rest_inst__tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = cryptarithm2.lookup(c, env);
    return NofibPrelude.fromSome(tmp11)
  };
  look = look1;
  expand1 = function expand(ls) {
    let lambda3;
    lambda3 = (undefined, function (a, b) {
      let tmp11, tmp12;
      tmp11 = a * 10;
      tmp12 = runtime.safeCall(look(b));
      return tmp11 + tmp12
    });
    return NofibPrelude.foldl(lambda3, 0, ls)
  };
  expand = expand1;
  lambda = (undefined, function (xs) {
    return runtime.safeCall(expand(xs))
  });
  tmp2 = NofibPrelude.map(lambda, top);
  tmp3 = NofibPrelude.sum(tmp2);
  topVal = tmp3;
  tmp4 = runtime.safeCall(expand(bot));
  botVal = tmp4;
  tmp5 = concat_inst_29_tsni(top);
  tmp6 = append_inst_47_tsni(tmp5, bot);
  lambda1 = (undefined, function (x, y) {
    return x === y
  });
  tmp7 = NofibPrelude.nubBy(lambda1, tmp6);
  tmp8 = NofibPrelude.listLen(tmp7);
  scrut1 = tmp8 > 10;
  if (scrut1 === true) {
    throw globalThis.Error("error");
  } else {
    scrut = topVal != botVal;
    if (scrut === true) {
      throw globalThis.Error("error");
    } else {
      lambda2 = (undefined, function (caseScrut) {
        let first1, first0, c, i, tmp11, tmp12, tmp13, tmp14;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          c = first0;
          i = first1;
          tmp11 = NofibPrelude.nofibStringToList(" => ");
          tmp12 = NofibPrelude.stringOfInt(i);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.append(tmp11, tmp13);
          return NofibPrelude.Cons(c, tmp14)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp9 = lambda2;
      tmp10 = map_inst_28_tsni(tmp9, env);
      return unlines_inst_26_tsni(tmp10)
    }
  }
};
match_scrut_rest_inst_39_tsni = function match_scrut_rest_inst_39_tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = lookup_inst_39_40_tsni(c, env);
    return fromSome_inst_39_48_tsni(tmp11)
  };
  look = look1;
  expand1 = function expand(ls) {
    let lambda3;
    lambda3 = (undefined, function (a, b) {
      let tmp11, tmp12;
      tmp11 = a * 10;
      tmp12 = runtime.safeCall(look(b));
      return tmp11 + tmp12
    });
    return NofibPrelude.foldl(lambda3, 0, ls)
  };
  expand = expand1;
  lambda = (undefined, function (xs) {
    return runtime.safeCall(expand(xs))
  });
  tmp2 = NofibPrelude.map(lambda, top);
  tmp3 = NofibPrelude.sum(tmp2);
  topVal = tmp3;
  tmp4 = runtime.safeCall(expand(bot));
  botVal = tmp4;
  tmp5 = concat_inst_39_29_tsni(top);
  tmp6 = append_inst_39_47_tsni(tmp5, bot);
  lambda1 = (undefined, function (x, y) {
    return x === y
  });
  tmp7 = NofibPrelude.nubBy(lambda1, tmp6);
  tmp8 = NofibPrelude.listLen(tmp7);
  scrut1 = tmp8 > 10;
  if (scrut1 === true) {
    throw globalThis.Error("error");
  } else {
    scrut = topVal != botVal;
    if (scrut === true) {
      throw globalThis.Error("error");
    } else {
      lambda2 = (undefined, function (caseScrut) {
        let first1, first0, c, i, tmp11, tmp12, tmp13, tmp14;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          c = first0;
          i = first1;
          tmp11 = NofibPrelude.nofibStringToList(" => ");
          tmp12 = NofibPrelude.stringOfInt(i);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.append(tmp11, tmp13);
          return NofibPrelude.Cons(c, tmp14)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp9 = lambda2;
      tmp10 = map_inst_39_28_tsni(tmp9, env);
      return unlines_inst_39_26_tsni(tmp10)
    }
  }
};
match_scrut_rest_inst_41_39_tsni = function match_scrut_rest_inst_41_39_tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = lookup_inst_41_39_40_tsni(c, env);
    return fromSome_inst_41_39_48_tsni(tmp11)
  };
  look = look1;
  expand1 = function expand(ls) {
    let lambda3;
    lambda3 = (undefined, function (a, b) {
      let tmp11, tmp12;
      tmp11 = a * 10;
      tmp12 = runtime.safeCall(look(b));
      return tmp11 + tmp12
    });
    return NofibPrelude.foldl(lambda3, 0, ls)
  };
  expand = expand1;
  lambda = (undefined, function (xs) {
    return runtime.safeCall(expand(xs))
  });
  tmp2 = NofibPrelude.map(lambda, top);
  tmp3 = NofibPrelude.sum(tmp2);
  topVal = tmp3;
  tmp4 = runtime.safeCall(expand(bot));
  botVal = tmp4;
  tmp5 = concat_inst_41_39_29_tsni(top);
  tmp6 = append_inst_41_39_47_tsni(tmp5, bot);
  lambda1 = (undefined, function (x, y) {
    return x === y
  });
  tmp7 = NofibPrelude.nubBy(lambda1, tmp6);
  tmp8 = NofibPrelude.listLen(tmp7);
  scrut1 = tmp8 > 10;
  if (scrut1 === true) {
    throw globalThis.Error("error");
  } else {
    scrut = topVal != botVal;
    if (scrut === true) {
      throw globalThis.Error("error");
    } else {
      lambda2 = (undefined, function (caseScrut) {
        let first1, first0, c, i, tmp11, tmp12, tmp13, tmp14;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          c = first0;
          i = first1;
          tmp11 = NofibPrelude.nofibStringToList(" => ");
          tmp12 = NofibPrelude.stringOfInt(i);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.append(tmp11, tmp13);
          return NofibPrelude.Cons(c, tmp14)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp9 = lambda2;
      tmp10 = map_inst_41_39_28_tsni(tmp9, env);
      return unlines_inst_41_39_26_tsni(tmp10)
    }
  }
};
match_m_arm_StateT_inst_5_43_tsni = function match_m_arm_StateT_inst_5_43_tsni(s, _deforest_StateT_run_inst_5_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_5_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_5_3_tsni = function match_xs_arm_Cons_inst_5_3_tsni(f, _deforest_Cons_head_inst_5_3_tsni, _deforest_Cons_tail_inst_5_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_5_3_tsni;
  param1 = _deforest_Cons_tail_inst_5_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_5_3_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_5_7_tsni(xs1);
    return NofibPrelude.append(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_5_3_tsni = function match_xs_arm_Nil_inst_5_3_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_m_arm_StateT_inst_13_4_44_tsni = function match_m_arm_StateT_inst_13_4_44_tsni(s, _deforest_StateT_run_inst_13_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_13_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_13_4_7_8_tsni = function match_xs_arm_Cons_inst_13_4_7_8_tsni(ys, _deforest_Cons_head_inst_13_4_7_8_tsni, _deforest_Cons_tail_inst_13_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_13_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_13_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_13_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_9_12_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_9_12_7_tsni(xs2);
      return append_inst_9_12_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_13_4_7_8_tsni = function match_xs_arm_Nil_inst_13_4_7_8_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_9_12_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_9_12_tsni(f, _deforest_Deforest_Arr_2_0_inst_9_12_tsni, _deforest_Deforest_Arr_2_1_inst_9_12_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_9_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_9_12_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_9_12_44_tsni(tmp, ss)
};
match_xs_arm_Cons_inst_26_42_8_tsni = function match_xs_arm_Cons_inst_26_42_8_tsni(ys, _deforest_Cons_head_inst_26_42_8_tsni, _deforest_Cons_tail_inst_26_42_8_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_26_42_8_tsni;
  param1 = _deforest_Cons_tail_inst_26_42_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_26_42_8_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_m_arm_StateT_inst_32_13_4_44_tsni = function match_m_arm_StateT_inst_32_13_4_44_tsni(s, _deforest_StateT_run_inst_32_13_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_32_13_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_32_13_4_7_8_tsni = function match_xs_arm_Cons_inst_32_13_4_7_8_tsni(ys, _deforest_Cons_head_inst_32_13_4_7_8_tsni, _deforest_Cons_tail_inst_32_13_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_32_13_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_32_13_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_32_13_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_32_9_12_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_32_9_12_7_tsni(xs2);
      return append_inst_32_9_12_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_32_13_4_7_8_tsni = function match_xs_arm_Nil_inst_32_13_4_7_8_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_32_9_12_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0_inst_32_9_12_tsni, _deforest_Deforest_Arr_2_1_inst_32_9_12_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_32_9_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_32_9_12_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_32_9_12_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_32_34_4_44_tsni = function match_m_arm_StateT_inst_32_34_4_44_tsni(s, _deforest_StateT_run_inst_32_34_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_32_34_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_32_34_4_7_8_tsni = function match_xs_arm_Cons_inst_32_34_4_7_8_tsni(ys, _deforest_Cons_head_inst_32_34_4_7_8_tsni, _deforest_Cons_tail_inst_32_34_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_32_34_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_32_34_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_32_34_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_32_37_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_32_37_7_tsni(xs2);
      return append_inst_32_37_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_32_34_4_7_8_tsni = function match_xs_arm_Nil_inst_32_34_4_7_8_tsni(ys) {
  return ys
};
match_m_arm_StateT_inst_32_35_43_tsni = function match_m_arm_StateT_inst_32_35_43_tsni(s, _deforest_StateT_run_inst_32_35_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_32_35_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_32_35_3_tsni = function match_xs_arm_Nil_inst_32_35_3_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_32_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_32_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_32_37_tsni, _deforest_Deforest_Arr_2_1_inst_32_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_32_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_32_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_32_37_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_32_5_43_tsni = function match_m_arm_StateT_inst_32_5_43_tsni(s, _deforest_StateT_run_inst_32_5_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_32_5_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_32_5_3_tsni = function match_xs_arm_Cons_inst_32_5_3_tsni(f, _deforest_Cons_head_inst_32_5_3_tsni, _deforest_Cons_tail_inst_32_5_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_32_5_3_tsni;
  param1 = _deforest_Cons_tail_inst_32_5_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_32_5_3_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_32_5_7_tsni(xs1);
    return append_inst_32_5_7_8_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_32_5_3_tsni = function match_xs_arm_Nil_inst_32_5_3_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_32_5_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_32_5_tsni(f, _deforest_Deforest_Arr_2_0_inst_32_5_tsni, _deforest_Deforest_Arr_2_1_inst_32_5_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_32_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_32_5_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_32_5_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_39_32_35_43_tsni = function match_m_arm_StateT_inst_39_32_35_43_tsni(s, _deforest_StateT_run_inst_39_32_35_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_39_32_35_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_39_32_35_3_tsni = function match_xs_arm_Nil_inst_39_32_35_3_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_m_arm_StateT_inst_39_32_34_4_44_tsni = function match_m_arm_StateT_inst_39_32_34_4_44_tsni(s, _deforest_StateT_run_inst_39_32_34_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_39_32_34_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_39_32_34_4_7_8_tsni = function match_xs_arm_Cons_inst_39_32_34_4_7_8_tsni(ys, _deforest_Cons_head_inst_39_32_34_4_7_8_tsni, _deforest_Cons_tail_inst_39_32_34_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_32_34_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_39_32_34_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_32_34_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_39_32_37_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_39_32_37_7_tsni(xs2);
      return append_inst_39_32_37_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_39_32_34_4_7_8_tsni = function match_xs_arm_Nil_inst_39_32_34_4_7_8_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_39_32_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_39_32_37_tsni, _deforest_Deforest_Arr_2_1_inst_39_32_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_39_32_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_39_32_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_39_32_37_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_39_32_5_43_tsni = function match_m_arm_StateT_inst_39_32_5_43_tsni(s, _deforest_StateT_run_inst_39_32_5_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_39_32_5_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_39_32_5_3_tsni = function match_xs_arm_Cons_inst_39_32_5_3_tsni(f, _deforest_Cons_head_inst_39_32_5_3_tsni, _deforest_Cons_tail_inst_39_32_5_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_32_5_3_tsni;
  param1 = _deforest_Cons_tail_inst_39_32_5_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_39_32_5_3_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_39_32_5_7_tsni(xs1);
    return append_inst_39_32_5_7_8_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_39_32_5_3_tsni = function match_xs_arm_Nil_inst_39_32_5_3_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_39_32_5_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0_inst_39_32_5_tsni, _deforest_Deforest_Arr_2_1_inst_39_32_5_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_39_32_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_39_32_5_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_39_32_5_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_39_32_13_4_44_tsni = function match_m_arm_StateT_inst_39_32_13_4_44_tsni(s, _deforest_StateT_run_inst_39_32_13_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_39_32_13_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_39_32_13_4_7_8_tsni = function match_xs_arm_Cons_inst_39_32_13_4_7_8_tsni(ys, _deforest_Cons_head_inst_39_32_13_4_7_8_tsni, _deforest_Cons_tail_inst_39_32_13_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_32_13_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_39_32_13_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_32_13_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_39_32_9_12_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_39_32_9_12_7_tsni(xs2);
      return append_inst_39_32_9_12_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_39_32_13_4_7_8_tsni = function match_xs_arm_Nil_inst_39_32_13_4_7_8_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_39_32_9_12_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0_inst_39_32_9_12_tsni, _deforest_Deforest_Arr_2_1_inst_39_32_9_12_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_39_32_9_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_39_32_9_12_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_39_32_9_12_44_tsni(tmp, ss)
};
match_xs_arm_Cons_inst_39_26_42_8_tsni = function match_xs_arm_Cons_inst_39_26_42_8_tsni(ys, _deforest_Cons_head_inst_39_26_42_8_tsni, _deforest_Cons_tail_inst_39_26_42_8_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_39_26_42_8_tsni;
  param1 = _deforest_Cons_tail_inst_39_26_42_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_26_42_8_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_41_39_26_42_8_tsni = function match_xs_arm_Cons_inst_41_39_26_42_8_tsni(ys, _deforest_Cons_head_inst_41_39_26_42_8_tsni, _deforest_Cons_tail_inst_41_39_26_42_8_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_41_39_26_42_8_tsni;
  param1 = _deforest_Cons_tail_inst_41_39_26_42_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_41_39_26_42_8_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_m_arm_StateT_inst_41_39_32_13_4_44_tsni = function match_m_arm_StateT_inst_41_39_32_13_4_44_tsni(s, _deforest_StateT_run_inst_41_39_32_13_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_41_39_32_13_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_41_39_32_13_4_7_8_tsni = function match_xs_arm_Cons_inst_41_39_32_13_4_7_8_tsni(ys, _deforest_Cons_head_inst_41_39_32_13_4_7_8_tsni, _deforest_Cons_tail_inst_41_39_32_13_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_41_39_32_13_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_41_39_32_13_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_41_39_32_13_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_41_39_32_9_12_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_41_39_32_9_12_7_tsni(xs2);
      return append_inst_41_39_32_9_12_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_41_39_32_13_4_7_8_tsni = function match_xs_arm_Nil_inst_41_39_32_13_4_7_8_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_9_12_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0_inst_41_39_32_9_12_tsni, _deforest_Deforest_Arr_2_1_inst_41_39_32_9_12_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_39_32_9_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_39_32_9_12_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_41_39_32_9_12_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_41_39_32_34_4_44_tsni = function match_m_arm_StateT_inst_41_39_32_34_4_44_tsni(s, _deforest_StateT_run_inst_41_39_32_34_4_44_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_41_39_32_34_4_44_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_41_39_32_34_4_7_8_tsni = function match_xs_arm_Cons_inst_41_39_32_34_4_7_8_tsni(ys, _deforest_Cons_head_inst_41_39_32_34_4_7_8_tsni, _deforest_Cons_tail_inst_41_39_32_34_4_7_8_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_41_39_32_34_4_7_8_tsni;
  param1 = _deforest_Cons_tail_inst_41_39_32_34_4_7_8_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_41_39_32_34_4_7_8_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_41_39_32_37_3_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_41_39_32_37_7_tsni(xs2);
      return append_inst_41_39_32_37_7_8_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_41_39_32_34_4_7_8_tsni = function match_xs_arm_Nil_inst_41_39_32_34_4_7_8_tsni(ys) {
  return ys
};
match_m_arm_StateT_inst_41_39_32_35_43_tsni = function match_m_arm_StateT_inst_41_39_32_35_43_tsni(s, _deforest_StateT_run_inst_41_39_32_35_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_41_39_32_35_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_41_39_32_35_3_tsni = function match_xs_arm_Nil_inst_41_39_32_35_3_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_41_39_32_37_tsni, _deforest_Deforest_Arr_2_1_inst_41_39_32_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_39_32_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_39_32_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_41_39_32_37_44_tsni(tmp, ss)
};
match_m_arm_StateT_inst_41_39_32_5_43_tsni = function match_m_arm_StateT_inst_41_39_32_5_43_tsni(s, _deforest_StateT_run_inst_41_39_32_5_43_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_41_39_32_5_43_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_41_39_32_5_3_tsni = function match_xs_arm_Cons_inst_41_39_32_5_3_tsni(f, _deforest_Cons_head_inst_41_39_32_5_3_tsni, _deforest_Cons_tail_inst_41_39_32_5_3_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_41_39_32_5_3_tsni;
  param1 = _deforest_Cons_tail_inst_41_39_32_5_3_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_41_39_32_5_3_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_41_39_32_5_7_tsni(xs1);
    return append_inst_41_39_32_5_7_8_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_41_39_32_5_3_tsni = function match_xs_arm_Nil_inst_41_39_32_5_3_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_5_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0_inst_41_39_32_5_tsni, _deforest_Deforest_Arr_2_1_inst_41_39_32_5_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_39_32_5_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_39_32_5_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_41_39_32_5_44_tsni(tmp, ss)
};
map_inst_0_tsni = function map_inst_0_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_42_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_1_tsni = function map_inst_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_31_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_2_tsni = function bind_inst_2_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_2_3_tsni(tmp1, tmp2);
    return concat_inst_2_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_2_3_tsni = function map_inst_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_2_7_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_4_tsni = function bind_inst_4_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_4_3_tsni(tmp1, tmp2);
    return concat_inst_4_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_4_3_tsni = function map_inst_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_4_7_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_5_tsni = function bind_inst_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_5_43_tsni(m, s);
    tmp3 = map_inst_5_3_tsni(tmp1, tmp2);
    return concat_inst_5_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_5_3_tsni = function map_inst_5_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_6_tsni = function bind_inst_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_6_3_tsni(tmp1, tmp2);
    return concat_inst_6_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_5_43_tsni(s, _deforest_StateT_run)
  }
};
map_inst_6_3_tsni = function map_inst_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_6_7_tsni(xs2);
      return append_inst_6_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_5_3_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_6_7_tsni = function concat_inst_6_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_6_7_8_tsni = function append_inst_6_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_6_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_5_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_9_tsni = function mapM_inst_9_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return return__inst_9_11_tsni(tmp2)
      });
      return bind_inst_9_10_tsni(r, lambda2)
    });
    return bind_inst_9_12_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_9_10_tsni = function bind_inst_9_10_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_9_10_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_9_10_3_tsni(tmp1, tmp2);
    return concat_inst_9_10_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_9_10_3_tsni = function map_inst_9_10_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_9_10_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_9_10_7_tsni(xs2);
      return append_inst_9_10_7_8_tsni(x1, tmp2)
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
return__inst_9_11_tsni = function return__inst_9_11_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail;
    arr = [
      a,
      s
    ];
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_9_10_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_9_12_7_8_tsni(xs, ys1);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_9_12_tsni = function bind_inst_9_12_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_9_12_43_tsni(m, s);
    tmp3 = map_inst_9_12_3_tsni(tmp1, tmp2);
    return concat_inst_9_12_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_9_12_3_tsni = function map_inst_9_12_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_9_10_7_tsni = function concat_inst_9_10_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_9_10_7_8_tsni = function append_inst_9_10_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
select_inst_13_tsni = function select_inst_13_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_13_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_13_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_13_14_tsni = function lookup_inst_13_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_13_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_13_24_tsni(r)
        }
      } else {
        return lookup_inst_13_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_13_15_tsni = function permute_inst_13_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_13_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_13_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_13_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_13_15_18_tsni(i)
        });
        return bind_inst_13_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_13_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_13_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_13_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_13_15_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_13_15_2_tsni = function bind_inst_13_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_13_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_13_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_13_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_13_15_2_3_tsni = function map_inst_13_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_13_15_2_7_tsni(xs2);
      return append_inst_13_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_13_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_13_15_16_tsni = function bind_inst_13_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_13_15_16_43_tsni(m, s);
    tmp3 = map_inst_13_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_13_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_13_15_16_3_tsni = function map_inst_13_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_13_15_16_7_tsni = function concat_inst_13_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_15_16_7_8_tsni = function append_inst_13_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_13_15_17_tsni = function bind_inst_13_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_13_15_17_43_tsni(m, s);
    tmp3 = map_inst_13_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_13_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_13_15_17_3_tsni = function map_inst_13_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_13_15_17_7_tsni = function concat_inst_13_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_15_17_7_8_tsni = function append_inst_13_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_13_15_18_tsni = function return__inst_13_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_13_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_13_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_13_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_13_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
put_inst_13_15_19_tsni = function put_inst_13_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_13_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_13_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_13_15_17_7_tsni(xs1);
        return append_inst_13_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_13_15_20_tsni = function lift_inst_13_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_13_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_13_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_13_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_13_15_16_7_tsni(xs2);
            return append_inst_13_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_13_15_20_21_tsni(lambda1, ls);
    return concat_inst_13_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_13_15_20_21_tsni = function map_inst_13_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_13_15_20_22_tsni = function concat_inst_13_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_15_20_22_8_tsni = function append_inst_13_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_13_15_23_tsni = function map_inst_13_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_13_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_13_15_20_22_tsni(xs2);
        return append_inst_13_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_13_4_tsni = function bind_inst_13_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_13_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_13_4_3_tsni(tmp1, tmp2);
    return concat_inst_13_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_13_4_3_tsni = function map_inst_13_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_13_4_7_tsni(xs2);
      return append_inst_13_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_13_24_tsni = function return__inst_13_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_13_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_13_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_13_15_2_7_tsni = function concat_inst_13_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_15_2_7_8_tsni = function append_inst_13_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_13_4_7_tsni = function concat_inst_13_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_4_7_8_tsni = function append_inst_13_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_25_tsni = function return__inst_25_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a1, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a1 = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a1));
      return cryptarithm2.runStateT(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_5_3_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_5_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_5_43_tsni(s, _deforest_StateT_run)
  }
};
unlines_inst_26_tsni = function unlines_inst_26_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_26_42_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_26_27_tsni(x, tmp1)
  });
  tmp = map_inst_26_0_tsni(lambda, ls);
  return concat_inst_26_42_tsni(tmp)
};
map_inst_26_0_tsni = function map_inst_26_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_26_27_tsni = function append_inst_26_27_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_26_27_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_26_42_8_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_28_tsni = function map_inst_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_26_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_26_42_tsni(xs2);
        return append_inst_26_42_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_29_tsni = function concat_inst_29_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_29_tsni(xs);
    return append_inst_29_8_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_29_8_tsni = function append_inst_29_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_29_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_47_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
execStateT_inst_30_tsni = function execStateT_inst_30_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_30_1_tsni(tmp, tmp1);
  return concat_inst_30_31_tsni(tmp2)
};
map_inst_30_1_tsni = function map_inst_30_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_31_tsni(xs2);
      return append_inst_30_31_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (top, bot) => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_30_31_tsni = function concat_inst_30_31_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_31_8_tsni = function append_inst_30_31_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
solve_inst_32_tsni = function solve_inst_32_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_32_25_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_32_9_tsni(select_inst_32_13_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_32_33_tsni(tmp3)
      });
      tmp = bind_inst_32_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_32_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_32_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_32_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_32_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_32_37_tsni(tmp2, tmp3)
    });
    return bind_inst_32_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_32_38_tsni(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
select_inst_32_13_tsni = function select_inst_32_13_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_32_13_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_32_13_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_32_13_4_tsni = function bind_inst_32_13_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_13_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_13_4_3_tsni(tmp1, tmp2);
    return concat_inst_32_13_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_13_4_3_tsni = function map_inst_32_13_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_13_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_13_4_7_tsni(xs2);
      return append_inst_32_13_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_32_13_15_tsni = function permute_inst_32_13_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_32_13_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_32_13_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_32_13_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_32_13_15_18_tsni(i)
        });
        return bind_inst_32_13_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_32_13_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_32_13_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_32_13_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_32_13_15_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_32_13_15_20_tsni = function lift_inst_32_13_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_32_13_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_32_13_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_32_13_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_32_13_15_16_7_tsni(xs2);
            return append_inst_32_13_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_32_13_15_20_21_tsni(lambda1, ls);
    return concat_inst_32_13_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_13_15_20_21_tsni = function map_inst_32_13_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_32_13_15_23_tsni = function map_inst_32_13_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_13_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_32_13_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_32_13_15_20_22_tsni(xs2);
        return append_inst_32_13_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_32_13_15_17_tsni = function bind_inst_32_13_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_13_15_17_43_tsni(m, s);
    tmp3 = map_inst_32_13_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_32_13_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_13_15_17_3_tsni = function map_inst_32_13_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_32_13_15_19_tsni = function put_inst_32_13_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_32_13_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_32_13_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_32_13_15_17_7_tsni(xs1);
        return append_inst_32_13_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
return__inst_32_13_15_18_tsni = function return__inst_32_13_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_32_13_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_32_13_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_32_13_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_32_13_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_32_13_15_16_tsni = function bind_inst_32_13_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_13_15_16_43_tsni(m, s);
    tmp3 = map_inst_32_13_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_32_13_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_13_15_16_3_tsni = function map_inst_32_13_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_32_13_15_20_22_tsni = function concat_inst_32_13_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_13_15_20_22_8_tsni = function append_inst_32_13_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_32_13_15_17_7_tsni = function concat_inst_32_13_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_13_15_17_7_8_tsni = function append_inst_32_13_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_32_13_15_2_tsni = function bind_inst_32_13_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_13_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_13_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_32_13_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_32_13_15_2_3_tsni = function map_inst_32_13_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_13_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_13_15_2_7_tsni(xs2);
      return append_inst_32_13_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_32_13_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_32_13_15_16_7_tsni = function concat_inst_32_13_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_13_15_16_7_8_tsni = function append_inst_32_13_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_32_13_15_2_7_tsni = function concat_inst_32_13_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_13_15_2_7_8_tsni = function append_inst_32_13_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_32_13_24_tsni = function return__inst_32_13_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_32_13_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_32_13_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_32_13_14_tsni = function lookup_inst_32_13_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_32_13_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_32_13_24_tsni(r)
        }
      } else {
        return lookup_inst_32_13_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_32_9_tsni = function mapM_inst_32_9_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return return__inst_32_9_11_tsni(tmp2)
      });
      return bind_inst_32_9_10_tsni(r, lambda2)
    });
    return bind_inst_32_9_12_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_32_9_12_tsni = function bind_inst_32_9_12_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_9_12_43_tsni(m, s);
    tmp3 = map_inst_32_9_12_3_tsni(tmp1, tmp2);
    return concat_inst_32_9_12_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_32_9_12_3_tsni = function map_inst_32_9_12_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_32_9_10_tsni = function bind_inst_32_9_10_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_9_10_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_9_10_3_tsni(tmp1, tmp2);
    return concat_inst_32_9_10_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_9_10_3_tsni = function map_inst_32_9_10_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_9_10_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_9_10_7_tsni(xs2);
      return append_inst_32_9_10_7_8_tsni(x1, tmp2)
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
concat_inst_32_9_10_7_tsni = function concat_inst_32_9_10_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_9_10_7_8_tsni = function append_inst_32_9_10_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_32_9_11_tsni = function return__inst_32_9_11_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail;
    arr = [
      a,
      s
    ];
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_32_9_10_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_32_9_12_7_8_tsni(xs, ys1);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
concat_inst_32_13_4_7_tsni = function concat_inst_32_13_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_13_4_7_8_tsni = function append_inst_32_13_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_32_6_tsni = function bind_inst_32_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_6_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_6_3_tsni(tmp1, tmp2);
    return concat_inst_32_6_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
map_inst_32_6_3_tsni = function map_inst_32_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_6_7_tsni(xs2);
      return append_inst_32_6_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_32_5_3_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_32_33_tsni = function return__inst_32_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_32_6_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_32_5_3_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
select_inst_32_34_tsni = function select_inst_32_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_32_34_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_32_34_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_32_34_4_tsni = function bind_inst_32_34_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_34_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_34_4_3_tsni(tmp1, tmp2);
    return concat_inst_32_34_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_34_4_3_tsni = function map_inst_32_34_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_34_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_34_4_7_tsni(xs2);
      return append_inst_32_34_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return (ys) => {
            return ys
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_32_34_15_tsni = function permute_inst_32_34_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_32_34_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_32_34_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_32_34_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_32_34_15_18_tsni(i)
        });
        return bind_inst_32_34_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_32_34_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_32_34_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_32_34_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_32_34_15_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_32_34_15_20_tsni = function lift_inst_32_34_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_32_34_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_32_34_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_32_34_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_32_34_15_16_7_tsni(xs2);
            return append_inst_32_34_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_32_34_15_20_21_tsni(lambda1, ls);
    return concat_inst_32_34_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_34_15_20_21_tsni = function map_inst_32_34_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_32_34_15_23_tsni = function map_inst_32_34_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_34_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_32_34_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_32_34_15_20_22_tsni(xs2);
        return append_inst_32_34_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_32_34_15_17_tsni = function bind_inst_32_34_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_34_15_17_43_tsni(m, s);
    tmp3 = map_inst_32_34_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_32_34_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_34_15_17_3_tsni = function map_inst_32_34_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_32_34_15_19_tsni = function put_inst_32_34_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_32_34_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_32_34_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_32_34_15_17_7_tsni(xs1);
        return append_inst_32_34_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
return__inst_32_34_15_18_tsni = function return__inst_32_34_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_32_34_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_32_34_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_32_34_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_32_34_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_32_34_15_16_tsni = function bind_inst_32_34_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_34_15_16_43_tsni(m, s);
    tmp3 = map_inst_32_34_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_32_34_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_34_15_16_3_tsni = function map_inst_32_34_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_32_34_15_20_22_tsni = function concat_inst_32_34_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_34_15_20_22_8_tsni = function append_inst_32_34_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_32_34_15_17_7_tsni = function concat_inst_32_34_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_34_15_17_7_8_tsni = function append_inst_32_34_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_32_34_15_2_tsni = function bind_inst_32_34_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_32_34_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_32_34_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_32_34_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_32_34_15_2_3_tsni = function map_inst_32_34_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_34_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_34_15_2_7_tsni(xs2);
      return append_inst_32_34_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_32_34_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_32_34_15_16_7_tsni = function concat_inst_32_34_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_34_15_16_7_8_tsni = function append_inst_32_34_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_32_34_15_2_7_tsni = function concat_inst_32_34_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_34_15_2_7_8_tsni = function append_inst_32_34_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_32_34_24_tsni = function return__inst_32_34_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_32_34_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_32_34_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_32_34_14_tsni = function lookup_inst_32_34_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_32_34_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_32_34_24_tsni(r)
        }
      } else {
        return lookup_inst_32_34_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_32_35_tsni = function bind_inst_32_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_35_43_tsni(m, s);
    tmp3 = map_inst_32_35_3_tsni(tmp1, tmp2);
    return concat_inst_32_35_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_35_3_tsni = function map_inst_32_35_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
guard_inst_32_36_tsni = function guard_inst_32_36_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (f) => {
        return match_xs_arm_Nil_inst_32_35_3_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_32_35_3_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_32_35_7_tsni(xs1);
          return append_inst_32_35_7_8_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_32_35_43_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_32_35_3_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_32_35_43_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_32_37_tsni = function bind_inst_32_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_37_43_tsni(m, s);
    tmp3 = map_inst_32_37_3_tsni(tmp1, tmp2);
    return concat_inst_32_37_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_32_37_3_tsni = function map_inst_32_37_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_32_34_4_7_tsni = function concat_inst_32_34_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_34_4_7_8_tsni = function append_inst_32_34_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_32_35_7_tsni = function concat_inst_32_35_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_35_7_8_tsni = function append_inst_32_35_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_32_35_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_32_37_7_8_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_32_5_7_8_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_32_5_tsni = function bind_inst_32_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_32_5_43_tsni(m, s);
    tmp3 = map_inst_32_5_3_tsni(tmp1, tmp2);
    return concat_inst_32_5_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_32_5_3_tsni = function map_inst_32_5_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_32_6_7_tsni = function concat_inst_32_6_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_6_7_8_tsni = function append_inst_32_6_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_32_25_tsni = function return__inst_32_25_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_32_5_3_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_32_5_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_32_37_7_tsni = function concat_inst_32_37_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_37_7_8_tsni = function append_inst_32_37_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_32_38_tsni = function return__inst_32_38_tsni(a) {
  let lambda;
  lambda = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = () => {
      let first1, first0, a1, s1, _deforest_Cons_head, _deforest_Cons_tail;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a1 = first0;
      s1 = first1;
      _deforest_Cons_head = s1;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = append_inst_30_31_8_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst__tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
puzzle_inst_39_tsni = function puzzle_inst_39_tsni(top, bot) {
  let solution, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_39_32_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_39_30_tsni(solution, tmp5);
  return runtime.safeCall(scrut(top, bot))
};
solve_inst_39_32_tsni = function solve_inst_39_32_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_39_32_25_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_39_32_9_tsni(select_inst_39_32_13_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_39_32_33_tsni(tmp3)
      });
      tmp = bind_inst_39_32_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_39_32_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_39_32_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_39_32_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_39_32_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_39_32_37_tsni(tmp2, tmp3)
    });
    return bind_inst_39_32_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_39_32_38_tsni(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
bind_inst_39_32_5_tsni = function bind_inst_39_32_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_5_43_tsni(m, s);
    tmp3 = map_inst_39_32_5_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_5_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_39_32_5_3_tsni = function map_inst_39_32_5_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_39_32_37_tsni = function bind_inst_39_32_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_37_43_tsni(m, s);
    tmp3 = map_inst_39_32_37_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_37_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_37_3_tsni = function map_inst_39_32_37_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_37_7_tsni = function concat_inst_39_32_37_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_37_7_8_tsni = function append_inst_39_32_37_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_39_32_35_tsni = function bind_inst_39_32_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_35_43_tsni(m, s);
    tmp3 = map_inst_39_32_35_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_35_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_35_3_tsni = function map_inst_39_32_35_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_35_7_tsni = function concat_inst_39_32_35_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_35_7_8_tsni = function append_inst_39_32_35_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_32_35_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_39_32_37_7_8_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_39_32_5_7_8_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
guard_inst_39_32_36_tsni = function guard_inst_39_32_36_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (f) => {
        return match_xs_arm_Nil_inst_39_32_35_3_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_39_32_35_3_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_39_32_35_7_tsni(xs1);
          return append_inst_39_32_35_7_8_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_39_32_35_43_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_39_32_35_3_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_39_32_35_43_tsni(s, _deforest_StateT_run1)
    }
  }
};
select_inst_39_32_34_tsni = function select_inst_39_32_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_39_32_34_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_39_32_34_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_39_32_34_14_tsni = function lookup_inst_39_32_34_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_39_32_34_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_39_32_34_24_tsni(r)
        }
      } else {
        return lookup_inst_39_32_34_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_39_32_34_15_tsni = function permute_inst_39_32_34_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_39_32_34_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_39_32_34_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_39_32_34_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_39_32_34_15_18_tsni(i)
        });
        return bind_inst_39_32_34_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_39_32_34_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_39_32_34_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_39_32_34_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_39_32_34_15_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_39_32_34_15_2_tsni = function bind_inst_39_32_34_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_34_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_34_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_34_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_39_32_34_15_2_3_tsni = function map_inst_39_32_34_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_34_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_34_15_2_7_tsni(xs2);
      return append_inst_39_32_34_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_39_32_34_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_39_32_34_15_16_tsni = function bind_inst_39_32_34_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_34_15_16_43_tsni(m, s);
    tmp3 = map_inst_39_32_34_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_34_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_34_15_16_3_tsni = function map_inst_39_32_34_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_34_15_16_7_tsni = function concat_inst_39_32_34_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_34_15_16_7_8_tsni = function append_inst_39_32_34_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_39_32_34_15_17_tsni = function bind_inst_39_32_34_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_34_15_17_43_tsni(m, s);
    tmp3 = map_inst_39_32_34_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_34_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_34_15_17_3_tsni = function map_inst_39_32_34_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_34_15_17_7_tsni = function concat_inst_39_32_34_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_34_15_17_7_8_tsni = function append_inst_39_32_34_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_39_32_34_15_18_tsni = function return__inst_39_32_34_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_39_32_34_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_39_32_34_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_39_32_34_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_39_32_34_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
put_inst_39_32_34_15_19_tsni = function put_inst_39_32_34_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_39_32_34_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_39_32_34_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_39_32_34_15_17_7_tsni(xs1);
        return append_inst_39_32_34_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_39_32_34_15_20_tsni = function lift_inst_39_32_34_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_34_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_39_32_34_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_39_32_34_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_39_32_34_15_16_7_tsni(xs2);
            return append_inst_39_32_34_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_39_32_34_15_20_21_tsni(lambda1, ls);
    return concat_inst_39_32_34_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_34_15_20_21_tsni = function map_inst_39_32_34_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_34_15_20_22_tsni = function concat_inst_39_32_34_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_34_15_20_22_8_tsni = function append_inst_39_32_34_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_32_34_15_23_tsni = function map_inst_39_32_34_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_34_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_32_34_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_39_32_34_15_20_22_tsni(xs2);
        return append_inst_39_32_34_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_39_32_34_4_tsni = function bind_inst_39_32_34_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_34_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_34_4_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_34_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_34_4_3_tsni = function map_inst_39_32_34_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_34_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_34_4_7_tsni(xs2);
      return append_inst_39_32_34_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return (ys) => {
            return ys
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_39_32_34_24_tsni = function return__inst_39_32_34_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_39_32_34_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_39_32_34_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_39_32_34_15_2_7_tsni = function concat_inst_39_32_34_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_34_15_2_7_8_tsni = function append_inst_39_32_34_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_39_32_34_4_7_tsni = function concat_inst_39_32_34_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_34_4_7_8_tsni = function append_inst_39_32_34_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_39_32_6_tsni = function bind_inst_39_32_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_6_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_6_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_6_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
map_inst_39_32_6_3_tsni = function map_inst_39_32_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_6_7_tsni(xs2);
      return append_inst_39_32_6_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_39_32_5_3_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_39_32_6_7_tsni = function concat_inst_39_32_6_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_6_7_8_tsni = function append_inst_39_32_6_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_39_32_33_tsni = function return__inst_39_32_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_39_32_6_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_39_32_5_3_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
mapM_inst_39_32_9_tsni = function mapM_inst_39_32_9_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return return__inst_39_32_9_11_tsni(tmp2)
      });
      return bind_inst_39_32_9_10_tsni(r, lambda2)
    });
    return bind_inst_39_32_9_12_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_39_32_9_10_tsni = function bind_inst_39_32_9_10_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_9_10_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_9_10_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_9_10_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_9_10_3_tsni = function map_inst_39_32_9_10_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_9_10_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_9_10_7_tsni(xs2);
      return append_inst_39_32_9_10_7_8_tsni(x1, tmp2)
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
return__inst_39_32_9_11_tsni = function return__inst_39_32_9_11_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail;
    arr = [
      a,
      s
    ];
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_39_32_9_10_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_39_32_9_12_7_8_tsni(xs, ys1);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_39_32_9_12_tsni = function bind_inst_39_32_9_12_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_9_12_43_tsni(m, s);
    tmp3 = map_inst_39_32_9_12_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_9_12_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_39_32_9_12_3_tsni = function map_inst_39_32_9_12_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_9_10_7_tsni = function concat_inst_39_32_9_10_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_9_10_7_8_tsni = function append_inst_39_32_9_10_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
select_inst_39_32_13_tsni = function select_inst_39_32_13_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_39_32_13_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_39_32_13_4_tsni(cryptarithm2.get, tmp)
};
lookup_inst_39_32_13_14_tsni = function lookup_inst_39_32_13_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_39_32_13_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_39_32_13_24_tsni(r)
        }
      } else {
        return lookup_inst_39_32_13_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_39_32_13_15_tsni = function permute_inst_39_32_13_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_39_32_13_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_39_32_13_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_39_32_13_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_39_32_13_15_18_tsni(i)
        });
        return bind_inst_39_32_13_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_39_32_13_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_39_32_13_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_39_32_13_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_39_32_13_15_2_tsni(cryptarithm2.get, tmp)
};
bind_inst_39_32_13_15_2_tsni = function bind_inst_39_32_13_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_13_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_13_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_13_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_39_32_13_15_2_3_tsni = function map_inst_39_32_13_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_13_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_13_15_2_7_tsni(xs2);
      return append_inst_39_32_13_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_39_32_13_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_39_32_13_15_16_tsni = function bind_inst_39_32_13_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_13_15_16_43_tsni(m, s);
    tmp3 = map_inst_39_32_13_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_13_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_13_15_16_3_tsni = function map_inst_39_32_13_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_13_15_16_7_tsni = function concat_inst_39_32_13_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_13_15_16_7_8_tsni = function append_inst_39_32_13_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_39_32_13_15_17_tsni = function bind_inst_39_32_13_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_39_32_13_15_17_43_tsni(m, s);
    tmp3 = map_inst_39_32_13_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_13_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_13_15_17_3_tsni = function map_inst_39_32_13_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_13_15_17_7_tsni = function concat_inst_39_32_13_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_13_15_17_7_8_tsni = function append_inst_39_32_13_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_39_32_13_15_18_tsni = function return__inst_39_32_13_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_39_32_13_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_39_32_13_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_39_32_13_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_39_32_13_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
put_inst_39_32_13_15_19_tsni = function put_inst_39_32_13_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_39_32_13_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_39_32_13_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_39_32_13_15_17_7_tsni(xs1);
        return append_inst_39_32_13_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
lift_inst_39_32_13_15_20_tsni = function lift_inst_39_32_13_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_13_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_39_32_13_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_39_32_13_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_39_32_13_15_16_7_tsni(xs2);
            return append_inst_39_32_13_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_39_32_13_15_20_21_tsni(lambda1, ls);
    return concat_inst_39_32_13_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_13_15_20_21_tsni = function map_inst_39_32_13_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_39_32_13_15_20_22_tsni = function concat_inst_39_32_13_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_13_15_20_22_8_tsni = function append_inst_39_32_13_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_39_32_13_15_23_tsni = function map_inst_39_32_13_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_13_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_32_13_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_39_32_13_15_20_22_tsni(xs2);
        return append_inst_39_32_13_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_39_32_13_4_tsni = function bind_inst_39_32_13_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_39_32_13_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_39_32_13_4_3_tsni(tmp1, tmp2);
    return concat_inst_39_32_13_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_39_32_13_4_3_tsni = function map_inst_39_32_13_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_32_13_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_32_13_4_7_tsni(xs2);
      return append_inst_39_32_13_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_39_32_13_24_tsni = function return__inst_39_32_13_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_39_32_13_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_39_32_13_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_39_32_13_15_2_7_tsni = function concat_inst_39_32_13_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_13_15_2_7_8_tsni = function append_inst_39_32_13_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_39_32_13_4_7_tsni = function concat_inst_39_32_13_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_32_13_4_7_8_tsni = function append_inst_39_32_13_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_39_32_25_tsni = function return__inst_39_32_25_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_39_32_5_3_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_39_32_5_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_39_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
execStateT_inst_39_30_tsni = function execStateT_inst_39_30_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_39_30_1_tsni(tmp, tmp1);
  return concat_inst_39_30_31_tsni(tmp2)
};
map_inst_39_30_1_tsni = function map_inst_39_30_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_30_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_39_30_31_tsni(xs2);
      return append_inst_39_30_31_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (top, bot) => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_39_32_38_tsni = function return__inst_39_32_38_tsni(a) {
  let lambda;
  lambda = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = () => {
      let first1, first0, a1, s1, _deforest_Cons_head, _deforest_Cons_tail;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a1 = first0;
      s1 = first1;
      _deforest_Cons_head = s1;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = append_inst_39_30_31_8_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst_39_tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
concat_inst_39_30_31_tsni = function concat_inst_39_30_31_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_30_31_8_tsni = function append_inst_39_30_31_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lookup_inst_39_40_tsni = function lookup_inst_39_40_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return () => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return () => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return x1
        }
      } else {
        return lookup_inst_39_40_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_39_29_tsni = function concat_inst_39_29_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_39_29_tsni(xs);
    return append_inst_39_29_8_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_39_29_8_tsni = function append_inst_39_29_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_29_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_39_47_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unlines_inst_39_26_tsni = function unlines_inst_39_26_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_39_26_42_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_39_26_27_tsni(x, tmp1)
  });
  tmp = map_inst_39_26_0_tsni(lambda, ls);
  return concat_inst_39_26_42_tsni(tmp)
};
map_inst_39_26_0_tsni = function map_inst_39_26_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_39_26_27_tsni = function append_inst_39_26_27_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_39_26_27_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_39_26_42_8_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_39_28_tsni = function map_inst_39_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_39_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_39_26_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_39_26_42_tsni(xs2);
        return append_inst_39_26_42_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
testCryptarithm2_nofib_inst_41_tsni = function testCryptarithm2_nofib_inst_41_tsni(n) {
  let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
  tmp = NofibPrelude.nofibStringToList("THIRTY");
  tmp1 = NofibPrelude.nofibStringToList("TWELVE");
  tmp2 = NofibPrelude.nofibStringToList("TWELVE");
  tmp3 = NofibPrelude.nofibStringToList("TWELVE");
  tmp4 = NofibPrelude.nofibStringToList("TWELVE");
  tmp5 = NofibPrelude.nofibStringToList("TWELVE");
  scrut = n > 999999;
  if (scrut === true) {
    tmp6 = NofibPrelude.nofibStringToList("1");
  } else {
    tmp6 = NofibPrelude.Nil;
  }
  tmp7 = NofibPrelude.append(tmp5, tmp6);
  tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
  tmp9 = NofibPrelude.Cons(tmp4, tmp8);
  tmp10 = NofibPrelude.Cons(tmp3, tmp9);
  tmp11 = NofibPrelude.Cons(tmp2, tmp10);
  tmp12 = NofibPrelude.Cons(tmp1, tmp11);
  tmp13 = NofibPrelude.Cons(tmp, tmp12);
  args = tmp13;
  tmp14 = NofibPrelude.nofibStringToList("NINETY");
  return puzzle_inst_41_39_tsni(args, tmp14)
};
puzzle_inst_41_39_tsni = function puzzle_inst_41_39_tsni(top, bot) {
  let solution, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_41_39_32_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_41_39_30_tsni(solution, tmp5);
  return runtime.safeCall(scrut(top, bot))
};
unlines_inst_41_39_26_tsni = function unlines_inst_41_39_26_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_41_39_26_42_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_41_39_26_27_tsni(x, tmp1)
  });
  tmp = map_inst_41_39_26_0_tsni(lambda, ls);
  return concat_inst_41_39_26_42_tsni(tmp)
};
map_inst_41_39_26_0_tsni = function map_inst_41_39_26_0_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_41_39_26_27_tsni = function append_inst_41_39_26_27_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_39_26_27_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_41_39_26_42_8_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_41_39_28_tsni = function map_inst_41_39_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_41_39_26_0_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_41_39_26_42_tsni(xs2);
        return append_inst_41_39_26_42_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_41_39_29_tsni = function concat_inst_41_39_29_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (ys) => {
      return ys
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_41_39_29_tsni(xs);
    return append_inst_41_39_29_8_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_41_39_29_8_tsni = function append_inst_41_39_29_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_39_29_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_41_39_47_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup_inst_41_39_40_tsni = function lookup_inst_41_39_40_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return () => {
      throw new globalThis.Error("match error");
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return () => {
          let param01, x1;
          param01 = _deforest_Some_x;
          x1 = param01;
          return x1
        }
      } else {
        return lookup_inst_41_39_40_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
execStateT_inst_41_39_30_tsni = function execStateT_inst_41_39_30_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_41_39_30_1_tsni(tmp, tmp1);
  return concat_inst_41_39_30_31_tsni(tmp2)
};
map_inst_41_39_30_1_tsni = function map_inst_41_39_30_1_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_30_1_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_30_31_tsni(xs2);
      return append_inst_41_39_30_31_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (top, bot) => {
        throw new globalThis.Error("match error");
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_41_39_30_31_tsni = function concat_inst_41_39_30_31_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_30_31_8_tsni = function append_inst_41_39_30_31_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
solve_inst_41_39_32_tsni = function solve_inst_41_39_32_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_41_39_32_25_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_41_39_32_9_tsni(select_inst_41_39_32_13_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_41_39_32_33_tsni(tmp3)
      });
      tmp = bind_inst_41_39_32_6_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_41_39_32_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_41_39_32_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_41_39_32_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_41_39_32_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_41_39_32_37_tsni(tmp2, tmp3)
    });
    return bind_inst_41_39_32_5_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_41_39_32_38_tsni(cryptarithm2.Unit)
      } else {
        lambda2 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda2))
      }
    } else {
      lambda3 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda3))
    }
  } else {
    lambda4 = (undefined, function (_p) {
      return NofibPrelude.Nil
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda4))
  }
};
select_inst_41_39_32_13_tsni = function select_inst_41_39_32_13_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_41_39_32_13_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_41_39_32_13_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_41_39_32_13_4_tsni = function bind_inst_41_39_32_13_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_13_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_13_4_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_13_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_13_4_3_tsni = function map_inst_41_39_32_13_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_13_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_13_4_7_tsni(xs2);
      return append_inst_41_39_32_13_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return NofibPrelude.Nil
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_41_39_32_13_15_tsni = function permute_inst_41_39_32_13_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_41_39_32_13_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_41_39_32_13_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_41_39_32_13_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_41_39_32_13_15_18_tsni(i)
        });
        return bind_inst_41_39_32_13_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_41_39_32_13_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_41_39_32_13_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_41_39_32_13_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_41_39_32_13_15_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_41_39_32_13_15_20_tsni = function lift_inst_41_39_32_13_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_13_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_41_39_32_13_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_41_39_32_13_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_41_39_32_13_15_16_7_tsni(xs2);
            return append_inst_41_39_32_13_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_41_39_32_13_15_20_21_tsni(lambda1, ls);
    return concat_inst_41_39_32_13_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_13_15_20_21_tsni = function map_inst_41_39_32_13_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_41_39_32_13_15_23_tsni = function map_inst_41_39_32_13_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_13_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_41_39_32_13_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_41_39_32_13_15_20_22_tsni(xs2);
        return append_inst_41_39_32_13_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_41_39_32_13_15_17_tsni = function bind_inst_41_39_32_13_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_13_15_17_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_13_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_13_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_13_15_17_3_tsni = function map_inst_41_39_32_13_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_41_39_32_13_15_19_tsni = function put_inst_41_39_32_13_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_41_39_32_13_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_41_39_32_13_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_41_39_32_13_15_17_7_tsni(xs1);
        return append_inst_41_39_32_13_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
return__inst_41_39_32_13_15_18_tsni = function return__inst_41_39_32_13_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_41_39_32_13_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_41_39_32_13_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_41_39_32_13_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_41_39_32_13_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_41_39_32_13_15_16_tsni = function bind_inst_41_39_32_13_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_13_15_16_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_13_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_13_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_13_15_16_3_tsni = function map_inst_41_39_32_13_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_41_39_32_13_15_20_22_tsni = function concat_inst_41_39_32_13_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_13_15_20_22_8_tsni = function append_inst_41_39_32_13_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_32_13_15_17_7_tsni = function concat_inst_41_39_32_13_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_13_15_17_7_8_tsni = function append_inst_41_39_32_13_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_41_39_32_13_15_2_tsni = function bind_inst_41_39_32_13_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_13_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_13_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_13_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_41_39_32_13_15_2_3_tsni = function map_inst_41_39_32_13_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_13_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_13_15_2_7_tsni(xs2);
      return append_inst_41_39_32_13_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_41_39_32_13_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_41_39_32_13_15_16_7_tsni = function concat_inst_41_39_32_13_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_13_15_16_7_8_tsni = function append_inst_41_39_32_13_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_32_13_15_2_7_tsni = function concat_inst_41_39_32_13_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_13_15_2_7_8_tsni = function append_inst_41_39_32_13_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_41_39_32_13_24_tsni = function return__inst_41_39_32_13_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_9_12_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_41_39_32_13_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_41_39_32_13_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_13_4_44_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_41_39_32_13_14_tsni = function lookup_inst_41_39_32_13_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_41_39_32_13_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_41_39_32_13_24_tsni(r)
        }
      } else {
        return lookup_inst_41_39_32_13_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_41_39_32_9_tsni = function mapM_inst_41_39_32_9_tsni(f, ls) {
  let tmp, lambda;
  tmp = cryptarithm2.return_(NofibPrelude.Nil);
  lambda = (undefined, function (a, r) {
    let tmp1, lambda1;
    tmp1 = runtime.safeCall(f(a));
    lambda1 = (undefined, function (x) {
      let lambda2;
      lambda2 = (undefined, function (xs) {
        let tmp2;
        tmp2 = NofibPrelude.Cons(x, xs);
        return return__inst_41_39_32_9_11_tsni(tmp2)
      });
      return bind_inst_41_39_32_9_10_tsni(r, lambda2)
    });
    return bind_inst_41_39_32_9_12_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_41_39_32_9_12_tsni = function bind_inst_41_39_32_9_12_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_9_12_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_9_12_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_9_12_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_41_39_32_9_12_3_tsni = function map_inst_41_39_32_9_12_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_41_39_32_9_10_tsni = function bind_inst_41_39_32_9_10_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_9_10_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_9_10_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_9_10_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_9_10_3_tsni = function map_inst_41_39_32_9_10_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_9_10_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_9_10_7_tsni(xs2);
      return append_inst_41_39_32_9_10_7_8_tsni(x1, tmp2)
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
concat_inst_41_39_32_9_10_7_tsni = function concat_inst_41_39_32_9_10_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_9_10_7_8_tsni = function append_inst_41_39_32_9_10_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_41_39_32_9_11_tsni = function return__inst_41_39_32_9_11_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail;
    arr = [
      a,
      s
    ];
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_41_39_32_9_10_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_41_39_32_9_12_7_8_tsni(xs, ys1);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
concat_inst_41_39_32_13_4_7_tsni = function concat_inst_41_39_32_13_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_13_4_7_8_tsni = function append_inst_41_39_32_13_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_41_39_32_6_tsni = function bind_inst_41_39_32_6_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_6_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_6_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_6_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
map_inst_41_39_32_6_3_tsni = function map_inst_41_39_32_6_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_6_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_6_7_tsni(xs2);
      return append_inst_41_39_32_6_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_41_39_32_5_3_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_41_39_32_33_tsni = function return__inst_41_39_32_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_41_39_32_6_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_41_39_32_5_3_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
select_inst_41_39_32_34_tsni = function select_inst_41_39_32_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_41_39_32_34_14_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_41_39_32_34_4_tsni(cryptarithm2.get, tmp)
};
bind_inst_41_39_32_34_4_tsni = function bind_inst_41_39_32_34_4_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_34_4_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_34_4_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_34_4_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_34_4_3_tsni = function map_inst_41_39_32_34_4_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_34_4_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_34_4_7_tsni(xs2);
      return append_inst_41_39_32_34_4_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return () => {
          return (ys) => {
            return ys
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_41_39_32_34_15_tsni = function permute_inst_41_39_32_34_15_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let xs, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
    tmp1 = cryptarithm2.digits(st);
    xs = tmp1;
    lambda1 = (undefined, function (x) {
      let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Cons_head = x;
      _deforest_Cons_tail = (f, a) => {
        return a
      };
      tmp6 = (f, a) => {
        let param0, param1, h, t, tmp8;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        h = param0;
        t = param1;
        tmp8 = runtime.safeCall(f(a, h));
        return foldl_inst_41_39_32_34_15_45_46_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_41_39_32_34_15_45_tsni(xs, tmp6);
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = tmp7;
      arr = (c1, st1) => {
        let first1, first0, i, iss, arr1, tmp8, tmp9, tmp10, tmp11, lambda3;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        i = first0;
        iss = first1;
        arr1 = [
          c1,
          i
        ];
        tmp8 = cryptarithm2.digitEnv(st1);
        tmp9 = NofibPrelude.Cons(arr1, tmp8);
        tmp10 = cryptarithm2.Digits(iss, tmp9);
        tmp11 = put_inst_41_39_32_34_15_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_41_39_32_34_15_18_tsni(i)
        });
        return bind_inst_41_39_32_34_15_17_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_41_39_32_34_15_23_tsni(tmp2, xs);
    tmp4 = lift_inst_41_39_32_34_15_20_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_41_39_32_34_15_16_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_41_39_32_34_15_2_tsni(cryptarithm2.get, tmp)
};
lift_inst_41_39_32_34_15_20_tsni = function lift_inst_41_39_32_34_15_20_tsni(ls) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp, lambda1;
    lambda1 = (undefined, function (x) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = x;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp1 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_34_15_16_44_tsni(tmp1, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x1, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp1 = append_inst_41_39_32_34_15_20_22_8_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_41_39_32_34_15_16_3_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_41_39_32_34_15_16_7_tsni(xs2);
            return append_inst_41_39_32_34_15_16_7_8_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_41_39_32_34_15_20_21_tsni(lambda1, ls);
    return concat_inst_41_39_32_34_15_20_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_34_15_20_21_tsni = function map_inst_41_39_32_34_15_20_21_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_41_39_32_34_15_23_tsni = function map_inst_41_39_32_34_15_23_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_34_15_23_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_41_39_32_34_15_20_21_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_41_39_32_34_15_20_22_tsni(xs2);
        return append_inst_41_39_32_34_15_20_22_8_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2) => {
          return () => {
            return (ys) => {
              return ys
            }
          }
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_41_39_32_34_15_17_tsni = function bind_inst_41_39_32_34_15_17_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_34_15_17_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_34_15_17_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_34_15_17_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_34_15_17_3_tsni = function map_inst_41_39_32_34_15_17_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_41_39_32_34_15_19_tsni = function put_inst_41_39_32_34_15_19_tsni(s) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (x) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      let first1, first0, a, ss, tmp;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a = first0;
      ss = first1;
      tmp = runtime.safeCall(f(a));
      return runStateT_inst_41_39_32_34_15_17_44_tsni(tmp, ss)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return () => {
        return (ys) => {
          return ys
        }
      }
    };
    return (f) => {
      let param0, param1, x1, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp = runtime.safeCall(f(x1));
      tmp1 = map_inst_41_39_32_34_15_17_3_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_41_39_32_34_15_17_7_tsni(xs1);
        return append_inst_41_39_32_34_15_17_7_8_tsni(x2, tmp2)
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s1) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s1))
  }
};
return__inst_41_39_32_34_15_18_tsni = function return__inst_41_39_32_34_15_18_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    return (ys) => {
      let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp = append_inst_41_39_32_34_15_17_7_8_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_41_39_32_34_15_16_7_8_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_41_39_32_34_15_2_7_8_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_41_39_32_34_4_7_8_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
          }
        }
      }
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
bind_inst_41_39_32_34_15_16_tsni = function bind_inst_41_39_32_34_15_16_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_34_15_16_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_34_15_16_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_34_15_16_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_34_15_16_3_tsni = function map_inst_41_39_32_34_15_16_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_41_39_32_34_15_20_22_tsni = function concat_inst_41_39_32_34_15_20_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_34_15_20_22_8_tsni = function append_inst_41_39_32_34_15_20_22_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_32_34_15_17_7_tsni = function concat_inst_41_39_32_34_15_17_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_34_15_17_7_8_tsni = function append_inst_41_39_32_34_15_17_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_41_39_32_34_15_2_tsni = function bind_inst_41_39_32_34_15_2_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      let first1, first0, a, ss, tmp4;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a = first0;
        ss = first1;
        tmp4 = runtime.safeCall(f(a));
        return runStateT_inst_41_39_32_34_15_2_44_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_41_39_32_34_15_2_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_34_15_2_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
map_inst_41_39_32_34_15_2_3_tsni = function map_inst_41_39_32_34_15_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_41_39_32_34_15_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_41_39_32_34_15_2_7_tsni(xs2);
      return append_inst_41_39_32_34_15_2_7_8_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_41_39_32_34_4_7_8_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_41_39_32_34_15_16_7_tsni = function concat_inst_41_39_32_34_15_16_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_34_15_16_7_8_tsni = function append_inst_41_39_32_34_15_16_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_32_34_15_2_7_tsni = function concat_inst_41_39_32_34_15_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_34_15_2_7_8_tsni = function append_inst_41_39_32_34_15_2_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_41_39_32_34_24_tsni = function return__inst_41_39_32_34_24_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_41_39_32_34_4_7_8_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_41_39_32_34_4_7_8_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_34_4_44_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_41_39_32_34_14_tsni = function lookup_inst_41_39_32_34_14_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_41_39_32_34_15_tsni(c)
    }
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      v = first1;
      t1 = param1;
      scrut = k === x;
      if (scrut === true) {
        _deforest_Some_x = v;
        return (c) => {
          let param01, r;
          param01 = _deforest_Some_x;
          r = param01;
          return return__inst_41_39_32_34_24_tsni(r)
        }
      } else {
        return lookup_inst_41_39_32_34_14_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_41_39_32_35_tsni = function bind_inst_41_39_32_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_35_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_35_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_35_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_35_3_tsni = function map_inst_41_39_32_35_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
guard_inst_41_39_32_36_tsni = function guard_inst_41_39_32_36_tsni(b) {
  let lambda, lambda1, _deforest_StateT_run, _deforest_StateT_run1;
  if (b === true) {
    lambda = (undefined, function (s) {
      let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      _deforest_Deforest_Arr_2_0 = cryptarithm2.Unit;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f) => {
        let first1, first0, a, ss, tmp;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        a = first0;
        ss = first1;
        tmp = runtime.safeCall(f(a));
        return cryptarithm2.runStateT(tmp, ss)
      };
      _deforest_Cons_head = arr;
      _deforest_Cons_tail = (f) => {
        return match_xs_arm_Nil_inst_41_39_32_35_3_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_41_39_32_35_3_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_41_39_32_35_7_tsni(xs1);
          return append_inst_41_39_32_35_7_8_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_41_39_32_35_43_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_41_39_32_35_3_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_41_39_32_35_43_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_41_39_32_37_tsni = function bind_inst_41_39_32_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_37_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_37_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_37_7_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_41_39_32_37_3_tsni = function map_inst_41_39_32_37_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_41_39_32_34_4_7_tsni = function concat_inst_41_39_32_34_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_34_4_7_8_tsni = function append_inst_41_39_32_34_4_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_32_35_7_tsni = function concat_inst_41_39_32_35_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_35_7_8_tsni = function append_inst_41_39_32_35_7_8_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_39_32_35_7_8_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_41_39_32_37_7_8_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_41_39_32_5_7_8_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_41_39_32_5_tsni = function bind_inst_41_39_32_5_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_41_39_32_5_43_tsni(m, s);
    tmp3 = map_inst_41_39_32_5_3_tsni(tmp1, tmp2);
    return concat_inst_41_39_32_5_7_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_41_39_32_5_3_tsni = function map_inst_41_39_32_5_3_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_41_39_32_6_7_tsni = function concat_inst_41_39_32_6_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_6_7_8_tsni = function append_inst_41_39_32_6_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_41_39_32_25_tsni = function return__inst_41_39_32_25_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_41_39_32_5_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_41_39_32_5_3_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_41_39_32_5_3_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_41_39_32_5_43_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_41_39_32_37_7_tsni = function concat_inst_41_39_32_37_7_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_32_37_7_8_tsni = function append_inst_41_39_32_37_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_41_39_32_38_tsni = function return__inst_41_39_32_38_tsni(a) {
  let lambda;
  lambda = (undefined, function (s) {
    let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = () => {
      let first1, first0, a1, s1, _deforest_Cons_head, _deforest_Cons_tail;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      a1 = first0;
      s1 = first1;
      _deforest_Cons_head = s1;
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      return (ys) => {
        let param0, param1, x, xs, tmp, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = append_inst_41_39_30_31_8_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst_41_39_tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
concat_inst_42_tsni = function concat_inst_42_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_31_tsni = function concat_inst_31_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_2_7_tsni = function concat_inst_2_7_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_4_7_tsni = function concat_inst_4_7_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_5_7_tsni = function concat_inst_5_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_5_43_tsni = function runStateT_inst_5_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_9_10_44_tsni = function runStateT_inst_9_10_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_9_12_7_tsni = function concat_inst_9_12_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_9_12_44_tsni = function runStateT_inst_9_12_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_9_12_7_8_tsni = function append_inst_9_12_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_13_15_2_44_tsni = function runStateT_inst_13_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_13_15_16_44_tsni = function runStateT_inst_13_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_13_15_17_44_tsni = function runStateT_inst_13_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_13_15_17_43_tsni = function runStateT_inst_13_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_13_15_16_43_tsni = function runStateT_inst_13_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_13_15_45_tsni = function listDiff_inst_13_15_45_tsni(a, ls) {
  return foldl_inst_13_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_13_15_45_46_tsni = function foldl_inst_13_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_13_4_44_tsni = function runStateT_inst_13_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_9_12_43_tsni = function runStateT_inst_9_12_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_26_42_tsni = function concat_inst_26_42_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_26_42_8_tsni = function append_inst_26_42_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_47_tsni = function append_inst_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listDiff_inst_32_13_15_45_tsni = function listDiff_inst_32_13_15_45_tsni(a, ls) {
  return foldl_inst_32_13_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_32_13_15_45_46_tsni = function foldl_inst_32_13_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_32_13_15_17_43_tsni = function runStateT_inst_32_13_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_13_15_17_44_tsni = function runStateT_inst_32_13_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_13_15_16_43_tsni = function runStateT_inst_32_13_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_13_15_16_44_tsni = function runStateT_inst_32_13_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_13_15_2_44_tsni = function runStateT_inst_32_13_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_13_4_44_tsni = function runStateT_inst_32_13_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_32_9_12_7_tsni = function concat_inst_32_9_12_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_32_9_12_44_tsni = function runStateT_inst_32_9_12_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_32_9_12_7_8_tsni = function append_inst_32_9_12_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_32_9_10_44_tsni = function runStateT_inst_32_9_10_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_9_12_43_tsni = function runStateT_inst_32_9_12_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_6_44_tsni = function runStateT_inst_32_6_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_32_34_15_45_tsni = function listDiff_inst_32_34_15_45_tsni(a, ls) {
  return foldl_inst_32_34_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_32_34_15_45_46_tsni = function foldl_inst_32_34_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_32_34_15_17_43_tsni = function runStateT_inst_32_34_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_34_15_17_44_tsni = function runStateT_inst_32_34_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_34_15_16_43_tsni = function runStateT_inst_32_34_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_34_15_16_44_tsni = function runStateT_inst_32_34_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_34_15_2_44_tsni = function runStateT_inst_32_34_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_34_4_44_tsni = function runStateT_inst_32_34_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_35_43_tsni = function runStateT_inst_32_35_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_37_43_tsni = function runStateT_inst_32_37_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_37_44_tsni = function runStateT_inst_32_37_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_32_5_7_tsni = function concat_inst_32_5_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_32_5_43_tsni = function runStateT_inst_32_5_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_32_5_44_tsni = function runStateT_inst_32_5_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_32_5_7_8_tsni = function append_inst_32_5_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_39_32_5_7_tsni = function concat_inst_39_32_5_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_39_32_5_44_tsni = function runStateT_inst_39_32_5_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_39_32_5_7_8_tsni = function append_inst_39_32_5_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_39_32_37_44_tsni = function runStateT_inst_39_32_37_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_35_43_tsni = function runStateT_inst_39_32_35_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_34_15_2_44_tsni = function runStateT_inst_39_32_34_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_34_15_16_44_tsni = function runStateT_inst_39_32_34_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_34_15_17_44_tsni = function runStateT_inst_39_32_34_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_34_15_17_43_tsni = function runStateT_inst_39_32_34_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_34_15_16_43_tsni = function runStateT_inst_39_32_34_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_39_32_34_15_45_tsni = function listDiff_inst_39_32_34_15_45_tsni(a, ls) {
  return foldl_inst_39_32_34_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_39_32_34_15_45_46_tsni = function foldl_inst_39_32_34_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_39_32_34_4_44_tsni = function runStateT_inst_39_32_34_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_37_43_tsni = function runStateT_inst_39_32_37_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_5_43_tsni = function runStateT_inst_39_32_5_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_6_44_tsni = function runStateT_inst_39_32_6_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_9_10_44_tsni = function runStateT_inst_39_32_9_10_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_39_32_9_12_7_tsni = function concat_inst_39_32_9_12_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_39_32_9_12_44_tsni = function runStateT_inst_39_32_9_12_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_39_32_9_12_7_8_tsni = function append_inst_39_32_9_12_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_39_32_13_15_2_44_tsni = function runStateT_inst_39_32_13_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_13_15_16_44_tsni = function runStateT_inst_39_32_13_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_13_15_17_44_tsni = function runStateT_inst_39_32_13_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_13_15_17_43_tsni = function runStateT_inst_39_32_13_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_13_15_16_43_tsni = function runStateT_inst_39_32_13_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_39_32_13_15_45_tsni = function listDiff_inst_39_32_13_15_45_tsni(a, ls) {
  return foldl_inst_39_32_13_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_39_32_13_15_45_46_tsni = function foldl_inst_39_32_13_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_39_32_13_4_44_tsni = function runStateT_inst_39_32_13_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_39_32_9_12_43_tsni = function runStateT_inst_39_32_9_12_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
fromSome_inst_39_48_tsni = function fromSome_inst_39_48_tsni(s) {
  return runtime.safeCall(s())
};
append_inst_39_47_tsni = function append_inst_39_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_39_26_42_tsni = function concat_inst_39_26_42_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_39_26_42_8_tsni = function append_inst_39_26_42_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_41_39_26_42_tsni = function concat_inst_41_39_26_42_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_41_39_26_42_8_tsni = function append_inst_41_39_26_42_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_41_39_47_tsni = function append_inst_41_39_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
fromSome_inst_41_39_48_tsni = function fromSome_inst_41_39_48_tsni(s) {
  return runtime.safeCall(s())
};
listDiff_inst_41_39_32_13_15_45_tsni = function listDiff_inst_41_39_32_13_15_45_tsni(a, ls) {
  return foldl_inst_41_39_32_13_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_41_39_32_13_15_45_46_tsni = function foldl_inst_41_39_32_13_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_41_39_32_13_15_17_43_tsni = function runStateT_inst_41_39_32_13_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_13_15_17_44_tsni = function runStateT_inst_41_39_32_13_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_13_15_16_43_tsni = function runStateT_inst_41_39_32_13_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_13_15_16_44_tsni = function runStateT_inst_41_39_32_13_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_13_15_2_44_tsni = function runStateT_inst_41_39_32_13_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_13_4_44_tsni = function runStateT_inst_41_39_32_13_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_41_39_32_9_12_7_tsni = function concat_inst_41_39_32_9_12_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_41_39_32_9_12_44_tsni = function runStateT_inst_41_39_32_9_12_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_41_39_32_9_12_7_8_tsni = function append_inst_41_39_32_9_12_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_41_39_32_9_10_44_tsni = function runStateT_inst_41_39_32_9_10_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_9_12_43_tsni = function runStateT_inst_41_39_32_9_12_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_6_44_tsni = function runStateT_inst_41_39_32_6_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_41_39_32_34_15_45_tsni = function listDiff_inst_41_39_32_34_15_45_tsni(a, ls) {
  return foldl_inst_41_39_32_34_15_45_46_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_41_39_32_34_15_45_46_tsni = function foldl_inst_41_39_32_34_15_45_46_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_41_39_32_34_15_17_43_tsni = function runStateT_inst_41_39_32_34_15_17_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_34_15_17_44_tsni = function runStateT_inst_41_39_32_34_15_17_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_34_15_16_43_tsni = function runStateT_inst_41_39_32_34_15_16_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_34_15_16_44_tsni = function runStateT_inst_41_39_32_34_15_16_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_34_15_2_44_tsni = function runStateT_inst_41_39_32_34_15_2_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_34_4_44_tsni = function runStateT_inst_41_39_32_34_4_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_35_43_tsni = function runStateT_inst_41_39_32_35_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_37_43_tsni = function runStateT_inst_41_39_32_37_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_37_44_tsni = function runStateT_inst_41_39_32_37_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_41_39_32_5_7_tsni = function concat_inst_41_39_32_5_7_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_41_39_32_5_43_tsni = function runStateT_inst_41_39_32_5_43_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_41_39_32_5_44_tsni = function runStateT_inst_41_39_32_5_44_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_41_39_32_5_7_8_tsni = function append_inst_41_39_32_5_7_8_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
(class cryptarithm2 {
  static {
    cryptarithm21 = cryptarithm2;
    let tmp, lambda;
    const Unit$class = class Unit {
      constructor() {}
      toString() { return "Unit"; }
    };
    this.Unit = new Unit$class;
    this.Unit.class = Unit$class;
    this.StateT = function StateT(run1) {
      return new StateT.class(run1);
    };
    this.StateT.class = class StateT {
      constructor(run) {
        this.run = run;
      }
      toString() { return "StateT(" + runtime.render(this.run) + ")"; }
    };
    lambda = (undefined, function (s) {
      let arr;
      arr = [
        s,
        s
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    tmp = runtime.safeCall(cryptarithm2.StateT(lambda));
    this.get = tmp;
    this.Digits = function Digits(i1, c1) {
      return new Digits.class(i1, c1);
    };
    this.Digits.class = class Digits {
      constructor(i, c) {
        this.i = i;
        this.c = c;
      }
      toString() { return "Digits(" + runtime.render(this.i) + ", " + runtime.render(this.c) + ")"; }
    };
  }
  static unlines(ls) {
    let tmp, lambda;
    lambda = (undefined, function (x) {
      let tmp1;
      tmp1 = NofibPrelude.Cons("\n", NofibPrelude.Nil);
      return NofibPrelude.append(x, tmp1)
    });
    tmp = map_inst_0_tsni(lambda, ls);
    return concat_inst_42_tsni(tmp)
  } 
  static lookup(k, t) {
    let param0, param1, first1, first0, x, v, t1, scrut;
    if (t instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x = first0;
        v = first1;
        t1 = param1;
        scrut = k === x;
        if (scrut === true) {
          return runtime.safeCall(NofibPrelude.Some(v))
        } else {
          return cryptarithm2.lookup(k, t1)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static delete_(xs, e) {
    let lambda;
    lambda = (undefined, function (x, y) {
      return x === y
    });
    return NofibPrelude.deleteBy(lambda, e, xs)
  } 
  static listDiff(a, ls1) {
    return NofibPrelude.foldl(cryptarithm2.delete_, a, ls1)
  } 
  static runStateT(m, s) {
    let param0, run;
    if (m instanceof cryptarithm2.StateT.class) {
      param0 = m.run;
      run = param0;
      return runtime.safeCall(run(s))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bind(m1, f) {
    let tmp, lambda;
    lambda = (undefined, function (s1) {
      let tmp1, tmp2, tmp3, lambda1;
      lambda1 = (undefined, function (caseScrut) {
        let first1, first0, a1, ss, tmp4;
        if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
          first0 = caseScrut[0];
          first1 = caseScrut[1];
          a1 = first0;
          ss = first1;
          tmp4 = runtime.safeCall(f(a1));
          return cryptarithm2.runStateT(tmp4, ss)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp1 = lambda1;
      tmp2 = cryptarithm2.runStateT(m1, s1);
      tmp3 = NofibPrelude.map(tmp1, tmp2);
      return NofibPrelude.concat(tmp3)
    });
    tmp = lambda;
    return runtime.safeCall(cryptarithm2.StateT(tmp))
  } 
  static return_(a1) {
    let lambda;
    lambda = (undefined, function (s1) {
      let arr;
      arr = [
        a1,
        s1
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static mapM(f1, ls2) {
    let tmp, lambda;
    tmp = cryptarithm2.return_(NofibPrelude.Nil);
    lambda = (undefined, function (a2, r) {
      let tmp1, lambda1;
      tmp1 = runtime.safeCall(f1(a2));
      lambda1 = (undefined, function (x) {
        let lambda2;
        lambda2 = (undefined, function (xs1) {
          let tmp2;
          tmp2 = NofibPrelude.Cons(x, xs1);
          return cryptarithm2.return_(tmp2)
        });
        return cryptarithm2.bind(r, lambda2)
      });
      return cryptarithm2.bind(tmp1, lambda1)
    });
    return NofibPrelude.foldr(lambda, tmp, ls2)
  } 
  static lift(ls3) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp, lambda1;
      lambda1 = (undefined, function (x) {
        let arr;
        arr = [
          x,
          s1
        ];
        return NofibPrelude.Cons(arr, NofibPrelude.Nil)
      });
      tmp = NofibPrelude.map(lambda1, ls3);
      return NofibPrelude.concat(tmp)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static execStateT(m2, s1) {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, a2, s2;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a2 = first0;
        s2 = first1;
        return NofibPrelude.Cons(s2, NofibPrelude.Nil)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    tmp1 = cryptarithm2.runStateT(m2, s1);
    tmp2 = map_inst_1_tsni(tmp, tmp1);
    return concat_inst_31_tsni(tmp2)
  } 
  static guard(b) {
    let lambda, lambda1;
    if (b === true) {
      lambda = (undefined, function (s2) {
        let arr;
        arr = [
          cryptarithm2.Unit,
          s2
        ];
        return NofibPrelude.Cons(arr, NofibPrelude.Nil)
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda))
    } else {
      lambda1 = (undefined, function (s2) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda1))
    }
  } 
  static put(s2) {
    let lambda;
    lambda = (undefined, function (x) {
      let arr;
      arr = [
        cryptarithm2.Unit,
        s2
      ];
      return NofibPrelude.Cons(arr, NofibPrelude.Nil)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static digits(d) {
    let param0, param1, a2, b1;
    if (d instanceof cryptarithm2.Digits.class) {
      param0 = d.i;
      param1 = d.c;
      a2 = param0;
      b1 = param1;
      return a2
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static digitEnv(d1) {
    let param0, param1, a2, b1;
    if (d1 instanceof cryptarithm2.Digits.class) {
      param0 = d1.i;
      param1 = d1.c;
      a2 = param0;
      b1 = param1;
      return b1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static permute(c) {
    let tmp, lambda;
    lambda = (undefined, function (st) {
      let xs1, tmp1, tmp2, tmp3, tmp4, tmp5, lambda1, lambda2;
      tmp1 = cryptarithm2.digits(st);
      xs1 = tmp1;
      lambda1 = (undefined, function (x) {
        let tmp6, tmp7, arr;
        tmp6 = NofibPrelude.Cons(x, NofibPrelude.Nil);
        tmp7 = cryptarithm2.listDiff(xs1, tmp6);
        arr = [
          x,
          tmp7
        ];
        return arr
      });
      tmp2 = lambda1;
      tmp3 = NofibPrelude.map(tmp2, xs1);
      tmp4 = cryptarithm2.lift(tmp3);
      lambda2 = (undefined, function (iis) {
        let first1, first0, i, iss, arr, tmp6, tmp7, tmp8, tmp9, lambda3;
        if (globalThis.Array.isArray(iis) && iis.length === 2) {
          first0 = iis[0];
          first1 = iis[1];
          i = first0;
          iss = first1;
          arr = [
            c,
            i
          ];
          tmp6 = cryptarithm2.digitEnv(st);
          tmp7 = NofibPrelude.Cons(arr, tmp6);
          tmp8 = cryptarithm2.Digits(iss, tmp7);
          tmp9 = cryptarithm2.put(tmp8);
          lambda3 = (undefined, function (_p) {
            return cryptarithm2.return_(i)
          });
          return cryptarithm2.bind(tmp9, lambda3)
        } else {
          throw new globalThis.Error("match error");
        }
      });
      tmp5 = lambda2;
      return cryptarithm2.bind(tmp4, tmp5)
    });
    tmp = lambda;
    return bind_inst_2_tsni(cryptarithm2.get, tmp)
  } 
  static select(c1) {
    let tmp, lambda;
    lambda = (undefined, function (st) {
      let scrut, param0, r, tmp1;
      tmp1 = cryptarithm2.digitEnv(st);
      scrut = cryptarithm2.lookup(c1, tmp1);
      if (scrut instanceof NofibPrelude.Some.class) {
        param0 = scrut.x;
        r = param0;
        return cryptarithm2.return_(r)
      } else if (scrut instanceof NofibPrelude.None.class) {
        return cryptarithm2.permute(c1)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    return bind_inst_4_tsni(cryptarithm2.get, tmp)
  } 
  static rest(ls4) {
    let param0, param1, x, xs1;
    if (ls4 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls4 instanceof NofibPrelude.Cons.class) {
      param0 = ls4.head;
      param1 = ls4.tail;
      x = param0;
      xs1 = param1;
      return xs1
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static solve(tops, bots, carry) {
    let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
    if (bots instanceof NofibPrelude.Cons.class) {
      param0 = bots.head;
      param1 = bots.tail;
      bot = param0;
      botss = param1;
      if (tops instanceof NofibPrelude.Nil.class) {
        tmp = return__inst_25_tsni(carry);
      } else if (tops instanceof NofibPrelude.Cons.class) {
        param01 = tops.head;
        param11 = tops.tail;
        top = param01;
        tmp1 = mapM_inst_9_tsni(select_inst_13_tsni, top);
        lambda = (undefined, function (topNS) {
          let tmp2, tmp3;
          tmp2 = NofibPrelude.sum(topNS);
          tmp3 = tmp2 + carry;
          return cryptarithm2.return_(tmp3)
        });
        tmp = bind_inst_6_tsni(tmp1, lambda);
      } else {
        throw new globalThis.Error("match error");
      }
      lambda1 = (undefined, function (topN) {
        let tmp2, tmp3, lambda5;
        tmp2 = cryptarithm2.select(bot);
        lambda5 = (undefined, function (botN) {
          let tmp4, tmp5, tmp6, tmp7, lambda6;
          tmp4 = NofibPrelude.intMod(topN, 10);
          tmp5 = tmp4 === botN;
          tmp6 = cryptarithm2.guard(tmp5);
          lambda6 = (undefined, function (_s) {
            let tmp8, tmp9;
            tmp8 = cryptarithm2.rest(tops);
            tmp9 = NofibPrelude.intDiv(topN, 10);
            return cryptarithm2.solve(tmp8, botss, tmp9)
          });
          tmp7 = lambda6;
          return cryptarithm2.bind(tmp6, tmp7)
        });
        tmp3 = lambda5;
        return cryptarithm2.bind(tmp2, tmp3)
      });
      return bind_inst_5_tsni(tmp, lambda1)
    } else if (bots instanceof NofibPrelude.Nil.class) {
      if (tops instanceof NofibPrelude.Nil.class) {
        scrut = carry === 0;
        if (scrut === true) {
          return cryptarithm2.return_(cryptarithm2.Unit)
        } else {
          lambda2 = (undefined, function (_p) {
            return NofibPrelude.Nil
          });
          return runtime.safeCall(cryptarithm2.StateT(lambda2))
        }
      } else {
        lambda3 = (undefined, function (_p) {
          return NofibPrelude.Nil
        });
        return runtime.safeCall(cryptarithm2.StateT(lambda3))
      }
    } else {
      lambda4 = (undefined, function (_p) {
        return NofibPrelude.Nil
      });
      return runtime.safeCall(cryptarithm2.StateT(lambda4))
    }
  } 
  static puzzle(top, bot) {
    let solution, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = NofibPrelude.map(NofibPrelude.reverse, top);
    tmp1 = NofibPrelude.transpose(tmp);
    tmp2 = NofibPrelude.reverse(bot);
    tmp3 = solve_inst_32_tsni(tmp1, tmp2, 0);
    solution = tmp3;
    tmp4 = NofibPrelude.enumFromTo(0, 9);
    tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
    scrut = execStateT_inst_30_tsni(solution, tmp5);
    return runtime.safeCall(scrut(top, bot))
  } 
  static testCryptarithm2_nofib(n) {
    let args, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14;
    tmp = NofibPrelude.nofibStringToList("THIRTY");
    tmp1 = NofibPrelude.nofibStringToList("TWELVE");
    tmp2 = NofibPrelude.nofibStringToList("TWELVE");
    tmp3 = NofibPrelude.nofibStringToList("TWELVE");
    tmp4 = NofibPrelude.nofibStringToList("TWELVE");
    tmp5 = NofibPrelude.nofibStringToList("TWELVE");
    scrut = n > 999999;
    if (scrut === true) {
      tmp6 = NofibPrelude.nofibStringToList("1");
    } else {
      tmp6 = NofibPrelude.Nil;
    }
    tmp7 = NofibPrelude.append(tmp5, tmp6);
    tmp8 = NofibPrelude.Cons(tmp7, NofibPrelude.Nil);
    tmp9 = NofibPrelude.Cons(tmp4, tmp8);
    tmp10 = NofibPrelude.Cons(tmp3, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    tmp12 = NofibPrelude.Cons(tmp1, tmp11);
    tmp13 = NofibPrelude.Cons(tmp, tmp12);
    args = tmp13;
    tmp14 = NofibPrelude.nofibStringToList("NINETY");
    return puzzle_inst_39_tsni(args, tmp14)
  } 
  static main() {
    let tmp;
    tmp = testCryptarithm2_nofib_inst_41_tsni(1);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "cryptarithm2"; }
});
let cryptarithm2 = cryptarithm21; export default cryptarithm2;
