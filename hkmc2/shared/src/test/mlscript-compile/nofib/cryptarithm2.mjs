import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let cryptarithm21, map_inst_0_1_tsni, append_inst_0_2_tsni, map_inst_3_4_tsni, bind_inst_5_6_tsni, map_inst_5_6_4_tsni, return__inst_5_7_tsni, bind_inst_5_8_tsni, map_inst_5_8_4_tsni, concat_inst_5_6_9_tsni, append_inst_5_6_9_10_tsni, map_inst_11_12_tsni, map_inst_13_14_tsni, lift_inst_15_16_tsni, map_inst_15_16_12_tsni, map_inst_15_17_tsni, bind_inst_15_18_tsni, map_inst_15_18_4_tsni, put_inst_15_19_tsni, return__inst_15_20_tsni, bind_inst_15_21_tsni, map_inst_15_21_4_tsni, concat_inst_15_16_22_tsni, append_inst_15_16_22_10_tsni, concat_inst_15_18_9_tsni, append_inst_15_18_9_10_tsni, bind_inst_15_23_tsni, map_inst_15_23_4_tsni, concat_inst_15_21_9_tsni, append_inst_15_21_9_10_tsni, lookup_inst_24_25_tsni, permute_inst_24_26_tsni, bind_inst_24_26_23_tsni, map_inst_24_26_23_4_tsni, bind_inst_24_26_21_tsni, map_inst_24_26_21_4_tsni, concat_inst_24_26_21_9_tsni, append_inst_24_26_21_9_10_tsni, bind_inst_24_26_18_tsni, map_inst_24_26_18_4_tsni, concat_inst_24_26_18_9_tsni, append_inst_24_26_18_9_10_tsni, return__inst_24_26_20_tsni, put_inst_24_26_19_tsni, lift_inst_24_26_16_tsni, map_inst_24_26_16_12_tsni, concat_inst_24_26_16_22_tsni, append_inst_24_26_16_22_10_tsni, map_inst_24_26_17_tsni, bind_inst_24_27_tsni, map_inst_24_27_4_tsni, return__inst_24_28_tsni, concat_inst_24_26_23_9_tsni, append_inst_24_26_23_9_10_tsni, select_inst_29_30_tsni, bind_inst_29_30_27_tsni, map_inst_29_30_27_4_tsni, permute_inst_29_30_26_tsni, lift_inst_29_30_26_16_tsni, map_inst_29_30_26_16_12_tsni, map_inst_29_30_26_17_tsni, bind_inst_29_30_26_18_tsni, map_inst_29_30_26_18_4_tsni, put_inst_29_30_26_19_tsni, return__inst_29_30_26_20_tsni, bind_inst_29_30_26_21_tsni, map_inst_29_30_26_21_4_tsni, concat_inst_29_30_26_16_22_tsni, append_inst_29_30_26_16_22_10_tsni, concat_inst_29_30_26_18_9_tsni, append_inst_29_30_26_18_9_10_tsni, bind_inst_29_30_26_23_tsni, map_inst_29_30_26_23_4_tsni, concat_inst_29_30_26_21_9_tsni, append_inst_29_30_26_21_9_10_tsni, concat_inst_29_30_26_23_9_tsni, append_inst_29_30_26_23_9_10_tsni, return__inst_29_30_28_tsni, lookup_inst_29_30_25_tsni, mapM_inst_29_31_tsni, bind_inst_29_31_8_tsni, map_inst_29_31_8_4_tsni, bind_inst_29_31_6_tsni, map_inst_29_31_6_4_tsni, concat_inst_29_31_6_9_tsni, append_inst_29_31_6_9_10_tsni, return__inst_29_31_7_tsni, concat_inst_29_30_27_9_tsni, append_inst_29_30_27_9_10_tsni, bind_inst_29_32_tsni, map_inst_29_32_4_tsni, return__inst_29_33_tsni, select_inst_29_34_tsni, bind_inst_29_34_27_tsni, map_inst_29_34_27_4_tsni, permute_inst_29_34_26_tsni, lift_inst_29_34_26_16_tsni, map_inst_29_34_26_16_12_tsni, map_inst_29_34_26_17_tsni, bind_inst_29_34_26_18_tsni, map_inst_29_34_26_18_4_tsni, put_inst_29_34_26_19_tsni, return__inst_29_34_26_20_tsni, bind_inst_29_34_26_21_tsni, map_inst_29_34_26_21_4_tsni, concat_inst_29_34_26_16_22_tsni, append_inst_29_34_26_16_22_10_tsni, concat_inst_29_34_26_18_9_tsni, append_inst_29_34_26_18_9_10_tsni, bind_inst_29_34_26_23_tsni, map_inst_29_34_26_23_4_tsni, concat_inst_29_34_26_21_9_tsni, append_inst_29_34_26_21_9_10_tsni, concat_inst_29_34_26_23_9_tsni, append_inst_29_34_26_23_9_10_tsni, return__inst_29_34_28_tsni, lookup_inst_29_34_25_tsni, bind_inst_29_35_tsni, map_inst_29_35_4_tsni, guard_inst_29_36_tsni, bind_inst_29_37_tsni, map_inst_29_37_4_tsni, concat_inst_29_34_27_9_tsni, append_inst_29_34_27_9_10_tsni, concat_inst_29_35_9_tsni, append_inst_29_35_9_10_tsni, bind_inst_29_38_tsni, map_inst_29_38_4_tsni, concat_inst_29_32_9_tsni, append_inst_29_32_9_10_tsni, return__inst_29_39_tsni, concat_inst_29_37_9_tsni, append_inst_29_37_9_10_tsni, solve_inst_40_41_tsni, bind_inst_40_41_38_tsni, map_inst_40_41_38_4_tsni, bind_inst_40_41_37_tsni, map_inst_40_41_37_4_tsni, concat_inst_40_41_37_9_tsni, append_inst_40_41_37_9_10_tsni, bind_inst_40_41_35_tsni, map_inst_40_41_35_4_tsni, concat_inst_40_41_35_9_tsni, append_inst_40_41_35_9_10_tsni, guard_inst_40_41_36_tsni, select_inst_40_41_34_tsni, lookup_inst_40_41_34_25_tsni, permute_inst_40_41_34_26_tsni, bind_inst_40_41_34_26_23_tsni, map_inst_40_41_34_26_23_4_tsni, bind_inst_40_41_34_26_21_tsni, map_inst_40_41_34_26_21_4_tsni, concat_inst_40_41_34_26_21_9_tsni, append_inst_40_41_34_26_21_9_10_tsni, bind_inst_40_41_34_26_18_tsni, map_inst_40_41_34_26_18_4_tsni, concat_inst_40_41_34_26_18_9_tsni, append_inst_40_41_34_26_18_9_10_tsni, return__inst_40_41_34_26_20_tsni, put_inst_40_41_34_26_19_tsni, lift_inst_40_41_34_26_16_tsni, map_inst_40_41_34_26_16_12_tsni, concat_inst_40_41_34_26_16_22_tsni, append_inst_40_41_34_26_16_22_10_tsni, map_inst_40_41_34_26_17_tsni, bind_inst_40_41_34_27_tsni, map_inst_40_41_34_27_4_tsni, return__inst_40_41_34_28_tsni, concat_inst_40_41_34_26_23_9_tsni, append_inst_40_41_34_26_23_9_10_tsni, concat_inst_40_41_34_27_9_tsni, append_inst_40_41_34_27_9_10_tsni, bind_inst_40_41_32_tsni, map_inst_40_41_32_4_tsni, concat_inst_40_41_32_9_tsni, append_inst_40_41_32_9_10_tsni, return__inst_40_41_33_tsni, mapM_inst_40_41_31_tsni, bind_inst_40_41_31_6_tsni, map_inst_40_41_31_6_4_tsni, return__inst_40_41_31_7_tsni, bind_inst_40_41_31_8_tsni, map_inst_40_41_31_8_4_tsni, concat_inst_40_41_31_6_9_tsni, append_inst_40_41_31_6_9_10_tsni, select_inst_40_41_30_tsni, lookup_inst_40_41_30_25_tsni, permute_inst_40_41_30_26_tsni, bind_inst_40_41_30_26_23_tsni, map_inst_40_41_30_26_23_4_tsni, bind_inst_40_41_30_26_21_tsni, map_inst_40_41_30_26_21_4_tsni, concat_inst_40_41_30_26_21_9_tsni, append_inst_40_41_30_26_21_9_10_tsni, bind_inst_40_41_30_26_18_tsni, map_inst_40_41_30_26_18_4_tsni, concat_inst_40_41_30_26_18_9_tsni, append_inst_40_41_30_26_18_9_10_tsni, return__inst_40_41_30_26_20_tsni, put_inst_40_41_30_26_19_tsni, lift_inst_40_41_30_26_16_tsni, map_inst_40_41_30_26_16_12_tsni, concat_inst_40_41_30_26_16_22_tsni, append_inst_40_41_30_26_16_22_10_tsni, map_inst_40_41_30_26_17_tsni, bind_inst_40_41_30_27_tsni, map_inst_40_41_30_27_4_tsni, return__inst_40_41_30_28_tsni, concat_inst_40_41_30_26_23_9_tsni, append_inst_40_41_30_26_23_9_10_tsni, concat_inst_40_41_30_27_9_tsni, append_inst_40_41_30_27_9_10_tsni, return__inst_40_41_39_tsni, execStateT_inst_40_42_tsni, map_inst_40_42_14_tsni, return__inst_40_41_43_tsni, concat_inst_40_42_44_tsni, append_inst_40_42_44_10_tsni, lookup_inst_40_45_tsni, concat_inst_40_46_tsni, append_inst_40_46_10_tsni, unlines_inst_40_47_tsni, map_inst_40_47_1_tsni, append_inst_40_47_2_tsni, map_inst_40_48_tsni, puzzle_inst_49_50_tsni, unlines_inst_49_50_47_tsni, map_inst_49_50_47_1_tsni, append_inst_49_50_47_2_tsni, map_inst_49_50_48_tsni, concat_inst_49_50_46_tsni, append_inst_49_50_46_10_tsni, lookup_inst_49_50_45_tsni, execStateT_inst_49_50_42_tsni, map_inst_49_50_42_14_tsni, concat_inst_49_50_42_44_tsni, append_inst_49_50_42_44_10_tsni, solve_inst_49_50_41_tsni, select_inst_49_50_41_30_tsni, bind_inst_49_50_41_30_27_tsni, map_inst_49_50_41_30_27_4_tsni, permute_inst_49_50_41_30_26_tsni, lift_inst_49_50_41_30_26_16_tsni, map_inst_49_50_41_30_26_16_12_tsni, map_inst_49_50_41_30_26_17_tsni, bind_inst_49_50_41_30_26_18_tsni, map_inst_49_50_41_30_26_18_4_tsni, put_inst_49_50_41_30_26_19_tsni, return__inst_49_50_41_30_26_20_tsni, bind_inst_49_50_41_30_26_21_tsni, map_inst_49_50_41_30_26_21_4_tsni, concat_inst_49_50_41_30_26_16_22_tsni, append_inst_49_50_41_30_26_16_22_10_tsni, concat_inst_49_50_41_30_26_18_9_tsni, append_inst_49_50_41_30_26_18_9_10_tsni, bind_inst_49_50_41_30_26_23_tsni, map_inst_49_50_41_30_26_23_4_tsni, concat_inst_49_50_41_30_26_21_9_tsni, append_inst_49_50_41_30_26_21_9_10_tsni, concat_inst_49_50_41_30_26_23_9_tsni, append_inst_49_50_41_30_26_23_9_10_tsni, return__inst_49_50_41_30_28_tsni, lookup_inst_49_50_41_30_25_tsni, mapM_inst_49_50_41_31_tsni, bind_inst_49_50_41_31_8_tsni, map_inst_49_50_41_31_8_4_tsni, bind_inst_49_50_41_31_6_tsni, map_inst_49_50_41_31_6_4_tsni, concat_inst_49_50_41_31_6_9_tsni, append_inst_49_50_41_31_6_9_10_tsni, return__inst_49_50_41_31_7_tsni, concat_inst_49_50_41_30_27_9_tsni, append_inst_49_50_41_30_27_9_10_tsni, bind_inst_49_50_41_32_tsni, map_inst_49_50_41_32_4_tsni, return__inst_49_50_41_33_tsni, select_inst_49_50_41_34_tsni, bind_inst_49_50_41_34_27_tsni, map_inst_49_50_41_34_27_4_tsni, permute_inst_49_50_41_34_26_tsni, lift_inst_49_50_41_34_26_16_tsni, map_inst_49_50_41_34_26_16_12_tsni, map_inst_49_50_41_34_26_17_tsni, bind_inst_49_50_41_34_26_18_tsni, map_inst_49_50_41_34_26_18_4_tsni, put_inst_49_50_41_34_26_19_tsni, return__inst_49_50_41_34_26_20_tsni, bind_inst_49_50_41_34_26_21_tsni, map_inst_49_50_41_34_26_21_4_tsni, concat_inst_49_50_41_34_26_16_22_tsni, append_inst_49_50_41_34_26_16_22_10_tsni, concat_inst_49_50_41_34_26_18_9_tsni, append_inst_49_50_41_34_26_18_9_10_tsni, bind_inst_49_50_41_34_26_23_tsni, map_inst_49_50_41_34_26_23_4_tsni, concat_inst_49_50_41_34_26_21_9_tsni, append_inst_49_50_41_34_26_21_9_10_tsni, concat_inst_49_50_41_34_26_23_9_tsni, append_inst_49_50_41_34_26_23_9_10_tsni, return__inst_49_50_41_34_28_tsni, lookup_inst_49_50_41_34_25_tsni, bind_inst_49_50_41_35_tsni, map_inst_49_50_41_35_4_tsni, guard_inst_49_50_41_36_tsni, bind_inst_49_50_41_37_tsni, map_inst_49_50_41_37_4_tsni, concat_inst_49_50_41_34_27_9_tsni, append_inst_49_50_41_34_27_9_10_tsni, concat_inst_49_50_41_35_9_tsni, append_inst_49_50_41_35_9_10_tsni, bind_inst_49_50_41_38_tsni, map_inst_49_50_41_38_4_tsni, concat_inst_49_50_41_32_9_tsni, append_inst_49_50_41_32_9_10_tsni, return__inst_49_50_41_39_tsni, concat_inst_49_50_41_37_9_tsni, append_inst_49_50_41_37_9_10_tsni, return__inst_49_50_41_43_tsni, testCryptarithm2_nofib_inst_51_52_tsni, puzzle_inst_51_52_50_tsni, solve_inst_51_52_50_41_tsni, bind_inst_51_52_50_41_38_tsni, map_inst_51_52_50_41_38_4_tsni, bind_inst_51_52_50_41_37_tsni, map_inst_51_52_50_41_37_4_tsni, concat_inst_51_52_50_41_37_9_tsni, append_inst_51_52_50_41_37_9_10_tsni, bind_inst_51_52_50_41_35_tsni, map_inst_51_52_50_41_35_4_tsni, concat_inst_51_52_50_41_35_9_tsni, append_inst_51_52_50_41_35_9_10_tsni, guard_inst_51_52_50_41_36_tsni, select_inst_51_52_50_41_34_tsni, lookup_inst_51_52_50_41_34_25_tsni, permute_inst_51_52_50_41_34_26_tsni, bind_inst_51_52_50_41_34_26_23_tsni, map_inst_51_52_50_41_34_26_23_4_tsni, bind_inst_51_52_50_41_34_26_21_tsni, map_inst_51_52_50_41_34_26_21_4_tsni, concat_inst_51_52_50_41_34_26_21_9_tsni, append_inst_51_52_50_41_34_26_21_9_10_tsni, bind_inst_51_52_50_41_34_26_18_tsni, map_inst_51_52_50_41_34_26_18_4_tsni, concat_inst_51_52_50_41_34_26_18_9_tsni, append_inst_51_52_50_41_34_26_18_9_10_tsni, return__inst_51_52_50_41_34_26_20_tsni, put_inst_51_52_50_41_34_26_19_tsni, lift_inst_51_52_50_41_34_26_16_tsni, map_inst_51_52_50_41_34_26_16_12_tsni, concat_inst_51_52_50_41_34_26_16_22_tsni, append_inst_51_52_50_41_34_26_16_22_10_tsni, map_inst_51_52_50_41_34_26_17_tsni, bind_inst_51_52_50_41_34_27_tsni, map_inst_51_52_50_41_34_27_4_tsni, return__inst_51_52_50_41_34_28_tsni, concat_inst_51_52_50_41_34_26_23_9_tsni, append_inst_51_52_50_41_34_26_23_9_10_tsni, concat_inst_51_52_50_41_34_27_9_tsni, append_inst_51_52_50_41_34_27_9_10_tsni, bind_inst_51_52_50_41_32_tsni, map_inst_51_52_50_41_32_4_tsni, concat_inst_51_52_50_41_32_9_tsni, append_inst_51_52_50_41_32_9_10_tsni, return__inst_51_52_50_41_33_tsni, mapM_inst_51_52_50_41_31_tsni, bind_inst_51_52_50_41_31_6_tsni, map_inst_51_52_50_41_31_6_4_tsni, return__inst_51_52_50_41_31_7_tsni, bind_inst_51_52_50_41_31_8_tsni, map_inst_51_52_50_41_31_8_4_tsni, concat_inst_51_52_50_41_31_6_9_tsni, append_inst_51_52_50_41_31_6_9_10_tsni, select_inst_51_52_50_41_30_tsni, lookup_inst_51_52_50_41_30_25_tsni, permute_inst_51_52_50_41_30_26_tsni, bind_inst_51_52_50_41_30_26_23_tsni, map_inst_51_52_50_41_30_26_23_4_tsni, bind_inst_51_52_50_41_30_26_21_tsni, map_inst_51_52_50_41_30_26_21_4_tsni, concat_inst_51_52_50_41_30_26_21_9_tsni, append_inst_51_52_50_41_30_26_21_9_10_tsni, bind_inst_51_52_50_41_30_26_18_tsni, map_inst_51_52_50_41_30_26_18_4_tsni, concat_inst_51_52_50_41_30_26_18_9_tsni, append_inst_51_52_50_41_30_26_18_9_10_tsni, return__inst_51_52_50_41_30_26_20_tsni, put_inst_51_52_50_41_30_26_19_tsni, lift_inst_51_52_50_41_30_26_16_tsni, map_inst_51_52_50_41_30_26_16_12_tsni, concat_inst_51_52_50_41_30_26_16_22_tsni, append_inst_51_52_50_41_30_26_16_22_10_tsni, map_inst_51_52_50_41_30_26_17_tsni, bind_inst_51_52_50_41_30_27_tsni, map_inst_51_52_50_41_30_27_4_tsni, return__inst_51_52_50_41_30_28_tsni, concat_inst_51_52_50_41_30_26_23_9_tsni, append_inst_51_52_50_41_30_26_23_9_10_tsni, concat_inst_51_52_50_41_30_27_9_tsni, append_inst_51_52_50_41_30_27_9_10_tsni, return__inst_51_52_50_41_39_tsni, execStateT_inst_51_52_50_42_tsni, map_inst_51_52_50_42_14_tsni, return__inst_51_52_50_41_43_tsni, concat_inst_51_52_50_42_44_tsni, append_inst_51_52_50_42_44_10_tsni, lookup_inst_51_52_50_45_tsni, concat_inst_51_52_50_46_tsni, append_inst_51_52_50_46_10_tsni, unlines_inst_51_52_50_47_tsni, map_inst_51_52_50_47_1_tsni, append_inst_51_52_50_47_2_tsni, map_inst_51_52_50_48_tsni, concat_inst_0_53_tsni, append_inst_0_53_10_tsni, concat_inst_3_9_tsni, runStateT_inst_5_6_54_tsni, concat_inst_5_8_9_tsni, runStateT_inst_5_8_54_tsni, append_inst_5_8_9_10_tsni, concat_inst_11_22_tsni, append_inst_11_22_10_tsni, concat_inst_13_44_tsni, append_inst_13_44_10_tsni, listDiff_inst_15_55_tsni, foldl_inst_15_55_56_tsni, runStateT_inst_15_18_57_tsni, runStateT_inst_15_18_54_tsni, runStateT_inst_15_21_57_tsni, runStateT_inst_15_21_54_tsni, concat_inst_15_23_9_tsni, runStateT_inst_15_23_54_tsni, append_inst_15_23_9_10_tsni, runStateT_inst_24_26_23_54_tsni, runStateT_inst_24_26_21_54_tsni, runStateT_inst_24_26_18_54_tsni, runStateT_inst_24_26_18_57_tsni, runStateT_inst_24_26_21_57_tsni, listDiff_inst_24_26_55_tsni, foldl_inst_24_26_55_56_tsni, concat_inst_24_27_9_tsni, runStateT_inst_24_27_54_tsni, append_inst_24_27_9_10_tsni, listDiff_inst_29_30_26_55_tsni, foldl_inst_29_30_26_55_56_tsni, runStateT_inst_29_30_26_18_57_tsni, runStateT_inst_29_30_26_18_54_tsni, runStateT_inst_29_30_26_21_57_tsni, runStateT_inst_29_30_26_21_54_tsni, runStateT_inst_29_30_26_23_54_tsni, runStateT_inst_29_30_27_54_tsni, concat_inst_29_31_8_9_tsni, runStateT_inst_29_31_8_54_tsni, append_inst_29_31_8_9_10_tsni, runStateT_inst_29_31_6_54_tsni, runStateT_inst_29_31_8_57_tsni, runStateT_inst_29_32_54_tsni, listDiff_inst_29_34_26_55_tsni, foldl_inst_29_34_26_55_56_tsni, runStateT_inst_29_34_26_18_57_tsni, runStateT_inst_29_34_26_18_54_tsni, runStateT_inst_29_34_26_21_57_tsni, runStateT_inst_29_34_26_21_54_tsni, runStateT_inst_29_34_26_23_54_tsni, runStateT_inst_29_34_27_54_tsni, runStateT_inst_29_35_57_tsni, runStateT_inst_29_37_57_tsni, runStateT_inst_29_37_54_tsni, concat_inst_29_38_9_tsni, runStateT_inst_29_38_57_tsni, runStateT_inst_29_38_54_tsni, append_inst_29_38_9_10_tsni, concat_inst_40_41_38_9_tsni, runStateT_inst_40_41_38_54_tsni, append_inst_40_41_38_9_10_tsni, runStateT_inst_40_41_37_54_tsni, runStateT_inst_40_41_35_57_tsni, runStateT_inst_40_41_34_26_23_54_tsni, runStateT_inst_40_41_34_26_21_54_tsni, runStateT_inst_40_41_34_26_18_54_tsni, runStateT_inst_40_41_34_26_18_57_tsni, runStateT_inst_40_41_34_26_21_57_tsni, listDiff_inst_40_41_34_26_55_tsni, foldl_inst_40_41_34_26_55_56_tsni, runStateT_inst_40_41_34_27_54_tsni, runStateT_inst_40_41_37_57_tsni, runStateT_inst_40_41_38_57_tsni, runStateT_inst_40_41_32_54_tsni, runStateT_inst_40_41_31_6_54_tsni, concat_inst_40_41_31_8_9_tsni, runStateT_inst_40_41_31_8_54_tsni, append_inst_40_41_31_8_9_10_tsni, runStateT_inst_40_41_30_26_23_54_tsni, runStateT_inst_40_41_30_26_21_54_tsni, runStateT_inst_40_41_30_26_18_54_tsni, runStateT_inst_40_41_30_26_18_57_tsni, runStateT_inst_40_41_30_26_21_57_tsni, listDiff_inst_40_41_30_26_55_tsni, foldl_inst_40_41_30_26_55_56_tsni, runStateT_inst_40_41_30_27_54_tsni, runStateT_inst_40_41_31_8_57_tsni, fromSome_inst_40_58_tsni, append_inst_40_59_tsni, concat_inst_40_47_53_tsni, append_inst_40_47_53_10_tsni, concat_inst_49_50_47_53_tsni, append_inst_49_50_47_53_10_tsni, append_inst_49_50_59_tsni, fromSome_inst_49_50_58_tsni, listDiff_inst_49_50_41_30_26_55_tsni, foldl_inst_49_50_41_30_26_55_56_tsni, runStateT_inst_49_50_41_30_26_18_57_tsni, runStateT_inst_49_50_41_30_26_18_54_tsni, runStateT_inst_49_50_41_30_26_21_57_tsni, runStateT_inst_49_50_41_30_26_21_54_tsni, runStateT_inst_49_50_41_30_26_23_54_tsni, runStateT_inst_49_50_41_30_27_54_tsni, concat_inst_49_50_41_31_8_9_tsni, runStateT_inst_49_50_41_31_8_54_tsni, append_inst_49_50_41_31_8_9_10_tsni, runStateT_inst_49_50_41_31_6_54_tsni, runStateT_inst_49_50_41_31_8_57_tsni, runStateT_inst_49_50_41_32_54_tsni, listDiff_inst_49_50_41_34_26_55_tsni, foldl_inst_49_50_41_34_26_55_56_tsni, runStateT_inst_49_50_41_34_26_18_57_tsni, runStateT_inst_49_50_41_34_26_18_54_tsni, runStateT_inst_49_50_41_34_26_21_57_tsni, runStateT_inst_49_50_41_34_26_21_54_tsni, runStateT_inst_49_50_41_34_26_23_54_tsni, runStateT_inst_49_50_41_34_27_54_tsni, runStateT_inst_49_50_41_35_57_tsni, runStateT_inst_49_50_41_37_57_tsni, runStateT_inst_49_50_41_37_54_tsni, concat_inst_49_50_41_38_9_tsni, runStateT_inst_49_50_41_38_57_tsni, runStateT_inst_49_50_41_38_54_tsni, append_inst_49_50_41_38_9_10_tsni, concat_inst_51_52_50_41_38_9_tsni, runStateT_inst_51_52_50_41_38_54_tsni, append_inst_51_52_50_41_38_9_10_tsni, runStateT_inst_51_52_50_41_37_54_tsni, runStateT_inst_51_52_50_41_35_57_tsni, runStateT_inst_51_52_50_41_34_26_23_54_tsni, runStateT_inst_51_52_50_41_34_26_21_54_tsni, runStateT_inst_51_52_50_41_34_26_18_54_tsni, runStateT_inst_51_52_50_41_34_26_18_57_tsni, runStateT_inst_51_52_50_41_34_26_21_57_tsni, listDiff_inst_51_52_50_41_34_26_55_tsni, foldl_inst_51_52_50_41_34_26_55_56_tsni, runStateT_inst_51_52_50_41_34_27_54_tsni, runStateT_inst_51_52_50_41_37_57_tsni, runStateT_inst_51_52_50_41_38_57_tsni, runStateT_inst_51_52_50_41_32_54_tsni, runStateT_inst_51_52_50_41_31_6_54_tsni, concat_inst_51_52_50_41_31_8_9_tsni, runStateT_inst_51_52_50_41_31_8_54_tsni, append_inst_51_52_50_41_31_8_9_10_tsni, runStateT_inst_51_52_50_41_30_26_23_54_tsni, runStateT_inst_51_52_50_41_30_26_21_54_tsni, runStateT_inst_51_52_50_41_30_26_18_54_tsni, runStateT_inst_51_52_50_41_30_26_18_57_tsni, runStateT_inst_51_52_50_41_30_26_21_57_tsni, listDiff_inst_51_52_50_41_30_26_55_tsni, foldl_inst_51_52_50_41_30_26_55_56_tsni, runStateT_inst_51_52_50_41_30_27_54_tsni, runStateT_inst_51_52_50_41_31_8_57_tsni, fromSome_inst_51_52_50_58_tsni, append_inst_51_52_50_59_tsni, concat_inst_51_52_50_47_53_tsni, append_inst_51_52_50_47_53_10_tsni, match_scrut_rest_inst_40_tsni, match_scrut_rest_inst_49_50_tsni, match_scrut_rest_inst_51_52_50_tsni, match_xs_arm_Cons_inst_0_53_10_tsni, match_m_arm_StateT_inst_24_27_54_tsni, match_xs_arm_Cons_inst_24_27_9_10_tsni, match_xs_arm_Nil_inst_24_27_9_10_tsni, match_m_arm_StateT_inst_29_30_27_54_tsni, match_xs_arm_Cons_inst_29_30_27_9_10_tsni, match_xs_arm_Nil_inst_29_30_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_29_31_8_tsni, match_m_arm_StateT_inst_29_34_27_54_tsni, match_xs_arm_Cons_inst_29_34_27_9_10_tsni, match_xs_arm_Nil_inst_29_34_27_9_10_tsni, match_m_arm_StateT_inst_29_35_57_tsni, match_xs_arm_Nil_inst_29_35_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_29_37_tsni, match_m_arm_StateT_inst_29_38_57_tsni, match_xs_arm_Cons_inst_29_38_4_tsni, match_xs_arm_Nil_inst_29_38_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_29_38_tsni, match_m_arm_StateT_inst_40_41_35_57_tsni, match_xs_arm_Nil_inst_40_41_35_4_tsni, match_m_arm_StateT_inst_40_41_34_27_54_tsni, match_xs_arm_Cons_inst_40_41_34_27_9_10_tsni, match_xs_arm_Nil_inst_40_41_34_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_40_41_37_tsni, match_m_arm_StateT_inst_40_41_38_57_tsni, match_xs_arm_Cons_inst_40_41_38_4_tsni, match_xs_arm_Nil_inst_40_41_38_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_40_41_38_tsni, match_m_arm_StateT_inst_40_41_30_27_54_tsni, match_xs_arm_Cons_inst_40_41_30_27_9_10_tsni, match_xs_arm_Nil_inst_40_41_30_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_40_41_31_8_tsni, match_xs_arm_Cons_inst_40_47_53_10_tsni, match_xs_arm_Cons_inst_49_50_47_53_10_tsni, match_m_arm_StateT_inst_49_50_41_30_27_54_tsni, match_xs_arm_Cons_inst_49_50_41_30_27_9_10_tsni, match_xs_arm_Nil_inst_49_50_41_30_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_31_8_tsni, match_m_arm_StateT_inst_49_50_41_34_27_54_tsni, match_xs_arm_Cons_inst_49_50_41_34_27_9_10_tsni, match_xs_arm_Nil_inst_49_50_41_34_27_9_10_tsni, match_m_arm_StateT_inst_49_50_41_35_57_tsni, match_xs_arm_Nil_inst_49_50_41_35_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_37_tsni, match_m_arm_StateT_inst_49_50_41_38_57_tsni, match_xs_arm_Cons_inst_49_50_41_38_4_tsni, match_xs_arm_Nil_inst_49_50_41_38_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_38_tsni, match_m_arm_StateT_inst_51_52_50_41_35_57_tsni, match_xs_arm_Nil_inst_51_52_50_41_35_4_tsni, match_m_arm_StateT_inst_51_52_50_41_34_27_54_tsni, match_xs_arm_Cons_inst_51_52_50_41_34_27_9_10_tsni, match_xs_arm_Nil_inst_51_52_50_41_34_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_37_tsni, match_m_arm_StateT_inst_51_52_50_41_38_57_tsni, match_xs_arm_Cons_inst_51_52_50_41_38_4_tsni, match_xs_arm_Nil_inst_51_52_50_41_38_4_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_38_tsni, match_m_arm_StateT_inst_51_52_50_41_30_27_54_tsni, match_xs_arm_Cons_inst_51_52_50_41_30_27_9_10_tsni, match_xs_arm_Nil_inst_51_52_50_41_30_27_9_10_tsni, match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_31_8_tsni, match_xs_arm_Cons_inst_51_52_50_47_53_10_tsni;
match_scrut_rest_inst_40_tsni = function match_scrut_rest_inst_40_tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = lookup_inst_40_45_tsni(c, env);
    return fromSome_inst_40_58_tsni(tmp11)
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
  tmp5 = concat_inst_40_46_tsni(top);
  tmp6 = append_inst_40_59_tsni(tmp5, bot);
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
      tmp10 = map_inst_40_48_tsni(tmp9, env);
      return unlines_inst_40_47_tsni(tmp10)
    }
  }
};
match_scrut_rest_inst_49_50_tsni = function match_scrut_rest_inst_49_50_tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = lookup_inst_49_50_45_tsni(c, env);
    return fromSome_inst_49_50_58_tsni(tmp11)
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
  tmp5 = concat_inst_49_50_46_tsni(top);
  tmp6 = append_inst_49_50_59_tsni(tmp5, bot);
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
      tmp10 = map_inst_49_50_48_tsni(tmp9, env);
      return unlines_inst_49_50_47_tsni(tmp10)
    }
  }
};
match_scrut_rest_inst_51_52_50_tsni = function match_scrut_rest_inst_51_52_50_tsni(top, bot, tmp) {
  let answer, env, look, expand, topVal, botVal, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, look1, expand1, lambda, lambda1, lambda2;
  answer = tmp;
  tmp1 = cryptarithm2.digitEnv(answer);
  env = tmp1;
  look1 = function look(c) {
    let tmp11;
    tmp11 = lookup_inst_51_52_50_45_tsni(c, env);
    return fromSome_inst_51_52_50_58_tsni(tmp11)
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
  tmp5 = concat_inst_51_52_50_46_tsni(top);
  tmp6 = append_inst_51_52_50_59_tsni(tmp5, bot);
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
      tmp10 = map_inst_51_52_50_48_tsni(tmp9, env);
      return unlines_inst_51_52_50_47_tsni(tmp10)
    }
  }
};
match_xs_arm_Cons_inst_0_53_10_tsni = function match_xs_arm_Cons_inst_0_53_10_tsni(ys, _deforest_Cons_head_inst_0_53_10_tsni, _deforest_Cons_tail_inst_0_53_10_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_53_10_tsni;
  param1 = _deforest_Cons_tail_inst_0_53_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_53_10_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_m_arm_StateT_inst_24_27_54_tsni = function match_m_arm_StateT_inst_24_27_54_tsni(s, _deforest_StateT_run_inst_24_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_24_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_24_27_9_10_tsni = function match_xs_arm_Cons_inst_24_27_9_10_tsni(ys, _deforest_Cons_head_inst_24_27_9_10_tsni, _deforest_Cons_tail_inst_24_27_9_10_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_24_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_24_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_24_27_9_10_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_24_27_9_10_tsni = function match_xs_arm_Nil_inst_24_27_9_10_tsni(ys) {
  return ys
};
match_m_arm_StateT_inst_29_30_27_54_tsni = function match_m_arm_StateT_inst_29_30_27_54_tsni(s, _deforest_StateT_run_inst_29_30_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_29_30_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_29_30_27_9_10_tsni = function match_xs_arm_Cons_inst_29_30_27_9_10_tsni(ys, _deforest_Cons_head_inst_29_30_27_9_10_tsni, _deforest_Cons_tail_inst_29_30_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_30_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_29_30_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_29_30_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_29_31_8_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_29_31_8_9_tsni(xs2);
      return append_inst_29_31_8_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_29_30_27_9_10_tsni = function match_xs_arm_Nil_inst_29_30_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_29_31_8_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_29_31_8_tsni(f, _deforest_Deforest_Arr_2_0_inst_29_31_8_tsni, _deforest_Deforest_Arr_2_1_inst_29_31_8_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_29_31_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_29_31_8_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_29_31_8_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_29_34_27_54_tsni = function match_m_arm_StateT_inst_29_34_27_54_tsni(s, _deforest_StateT_run_inst_29_34_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_29_34_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_29_34_27_9_10_tsni = function match_xs_arm_Cons_inst_29_34_27_9_10_tsni(ys, _deforest_Cons_head_inst_29_34_27_9_10_tsni, _deforest_Cons_tail_inst_29_34_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_34_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_29_34_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_29_34_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_29_37_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_29_37_9_tsni(xs2);
      return append_inst_29_37_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_29_34_27_9_10_tsni = function match_xs_arm_Nil_inst_29_34_27_9_10_tsni(ys) {
  return ys
};
match_m_arm_StateT_inst_29_35_57_tsni = function match_m_arm_StateT_inst_29_35_57_tsni(s, _deforest_StateT_run_inst_29_35_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_29_35_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_29_35_4_tsni = function match_xs_arm_Nil_inst_29_35_4_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_29_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_29_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_29_37_tsni, _deforest_Deforest_Arr_2_1_inst_29_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_29_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_29_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_29_37_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_29_38_57_tsni = function match_m_arm_StateT_inst_29_38_57_tsni(s, _deforest_StateT_run_inst_29_38_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_29_38_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_29_38_4_tsni = function match_xs_arm_Cons_inst_29_38_4_tsni(f, _deforest_Cons_head_inst_29_38_4_tsni, _deforest_Cons_tail_inst_29_38_4_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_29_38_4_tsni;
  param1 = _deforest_Cons_tail_inst_29_38_4_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_29_38_4_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_29_38_9_tsni(xs1);
    return append_inst_29_38_9_10_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_29_38_4_tsni = function match_xs_arm_Nil_inst_29_38_4_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_29_38_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_29_38_tsni(f, _deforest_Deforest_Arr_2_0_inst_29_38_tsni, _deforest_Deforest_Arr_2_1_inst_29_38_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_29_38_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_29_38_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_29_38_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_40_41_35_57_tsni = function match_m_arm_StateT_inst_40_41_35_57_tsni(s, _deforest_StateT_run_inst_40_41_35_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_40_41_35_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_40_41_35_4_tsni = function match_xs_arm_Nil_inst_40_41_35_4_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_m_arm_StateT_inst_40_41_34_27_54_tsni = function match_m_arm_StateT_inst_40_41_34_27_54_tsni(s, _deforest_StateT_run_inst_40_41_34_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_40_41_34_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_40_41_34_27_9_10_tsni = function match_xs_arm_Cons_inst_40_41_34_27_9_10_tsni(ys, _deforest_Cons_head_inst_40_41_34_27_9_10_tsni, _deforest_Cons_tail_inst_40_41_34_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_40_41_34_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_40_41_34_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_41_34_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_40_41_37_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_40_41_37_9_tsni(xs2);
      return append_inst_40_41_37_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_40_41_34_27_9_10_tsni = function match_xs_arm_Nil_inst_40_41_34_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_40_41_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_40_41_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_40_41_37_tsni, _deforest_Deforest_Arr_2_1_inst_40_41_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_40_41_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_40_41_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_40_41_37_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_40_41_38_57_tsni = function match_m_arm_StateT_inst_40_41_38_57_tsni(s, _deforest_StateT_run_inst_40_41_38_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_40_41_38_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_40_41_38_4_tsni = function match_xs_arm_Cons_inst_40_41_38_4_tsni(f, _deforest_Cons_head_inst_40_41_38_4_tsni, _deforest_Cons_tail_inst_40_41_38_4_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_40_41_38_4_tsni;
  param1 = _deforest_Cons_tail_inst_40_41_38_4_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_40_41_38_4_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_40_41_38_9_tsni(xs1);
    return append_inst_40_41_38_9_10_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_40_41_38_4_tsni = function match_xs_arm_Nil_inst_40_41_38_4_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_40_41_38_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_40_41_38_tsni(f, _deforest_Deforest_Arr_2_0_inst_40_41_38_tsni, _deforest_Deforest_Arr_2_1_inst_40_41_38_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_40_41_38_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_40_41_38_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_40_41_38_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_40_41_30_27_54_tsni = function match_m_arm_StateT_inst_40_41_30_27_54_tsni(s, _deforest_StateT_run_inst_40_41_30_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_40_41_30_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_40_41_30_27_9_10_tsni = function match_xs_arm_Cons_inst_40_41_30_27_9_10_tsni(ys, _deforest_Cons_head_inst_40_41_30_27_9_10_tsni, _deforest_Cons_tail_inst_40_41_30_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_40_41_30_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_40_41_30_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_41_30_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_40_41_31_8_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_40_41_31_8_9_tsni(xs2);
      return append_inst_40_41_31_8_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_40_41_30_27_9_10_tsni = function match_xs_arm_Nil_inst_40_41_30_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_40_41_31_8_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_40_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0_inst_40_41_31_8_tsni, _deforest_Deforest_Arr_2_1_inst_40_41_31_8_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_40_41_31_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_40_41_31_8_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_40_41_31_8_54_tsni(tmp, ss)
};
match_xs_arm_Cons_inst_40_47_53_10_tsni = function match_xs_arm_Cons_inst_40_47_53_10_tsni(ys, _deforest_Cons_head_inst_40_47_53_10_tsni, _deforest_Cons_tail_inst_40_47_53_10_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_40_47_53_10_tsni;
  param1 = _deforest_Cons_tail_inst_40_47_53_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_47_53_10_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_49_50_47_53_10_tsni = function match_xs_arm_Cons_inst_49_50_47_53_10_tsni(ys, _deforest_Cons_head_inst_49_50_47_53_10_tsni, _deforest_Cons_tail_inst_49_50_47_53_10_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_49_50_47_53_10_tsni;
  param1 = _deforest_Cons_tail_inst_49_50_47_53_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_49_50_47_53_10_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_m_arm_StateT_inst_49_50_41_30_27_54_tsni = function match_m_arm_StateT_inst_49_50_41_30_27_54_tsni(s, _deforest_StateT_run_inst_49_50_41_30_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_49_50_41_30_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_49_50_41_30_27_9_10_tsni = function match_xs_arm_Cons_inst_49_50_41_30_27_9_10_tsni(ys, _deforest_Cons_head_inst_49_50_41_30_27_9_10_tsni, _deforest_Cons_tail_inst_49_50_41_30_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_50_41_30_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_49_50_41_30_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_49_50_41_30_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_49_50_41_31_8_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_49_50_41_31_8_9_tsni(xs2);
      return append_inst_49_50_41_31_8_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_49_50_41_30_27_9_10_tsni = function match_xs_arm_Nil_inst_49_50_41_30_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_31_8_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0_inst_49_50_41_31_8_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_41_31_8_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_41_31_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_41_31_8_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_49_50_41_31_8_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_49_50_41_34_27_54_tsni = function match_m_arm_StateT_inst_49_50_41_34_27_54_tsni(s, _deforest_StateT_run_inst_49_50_41_34_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_49_50_41_34_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_49_50_41_34_27_9_10_tsni = function match_xs_arm_Cons_inst_49_50_41_34_27_9_10_tsni(ys, _deforest_Cons_head_inst_49_50_41_34_27_9_10_tsni, _deforest_Cons_tail_inst_49_50_41_34_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_50_41_34_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_49_50_41_34_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_49_50_41_34_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_49_50_41_37_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_49_50_41_37_9_tsni(xs2);
      return append_inst_49_50_41_37_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_49_50_41_34_27_9_10_tsni = function match_xs_arm_Nil_inst_49_50_41_34_27_9_10_tsni(ys) {
  return ys
};
match_m_arm_StateT_inst_49_50_41_35_57_tsni = function match_m_arm_StateT_inst_49_50_41_35_57_tsni(s, _deforest_StateT_run_inst_49_50_41_35_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_49_50_41_35_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_49_50_41_35_4_tsni = function match_xs_arm_Nil_inst_49_50_41_35_4_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_49_50_41_37_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_41_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_41_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_41_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_49_50_41_37_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_49_50_41_38_57_tsni = function match_m_arm_StateT_inst_49_50_41_38_57_tsni(s, _deforest_StateT_run_inst_49_50_41_38_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_49_50_41_38_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_49_50_41_38_4_tsni = function match_xs_arm_Cons_inst_49_50_41_38_4_tsni(f, _deforest_Cons_head_inst_49_50_41_38_4_tsni, _deforest_Cons_tail_inst_49_50_41_38_4_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_50_41_38_4_tsni;
  param1 = _deforest_Cons_tail_inst_49_50_41_38_4_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_49_50_41_38_4_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_49_50_41_38_9_tsni(xs1);
    return append_inst_49_50_41_38_9_10_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_49_50_41_38_4_tsni = function match_xs_arm_Nil_inst_49_50_41_38_4_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_38_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0_inst_49_50_41_38_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_41_38_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_41_38_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_41_38_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_49_50_41_38_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_51_52_50_41_35_57_tsni = function match_m_arm_StateT_inst_51_52_50_41_35_57_tsni(s, _deforest_StateT_run_inst_51_52_50_41_35_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_51_52_50_41_35_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Nil_inst_51_52_50_41_35_4_tsni = function match_xs_arm_Nil_inst_51_52_50_41_35_4_tsni(f) {
  return () => {
    return (ys) => {
      return ys
    }
  }
};
match_m_arm_StateT_inst_51_52_50_41_34_27_54_tsni = function match_m_arm_StateT_inst_51_52_50_41_34_27_54_tsni(s, _deforest_StateT_run_inst_51_52_50_41_34_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_51_52_50_41_34_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_51_52_50_41_34_27_9_10_tsni = function match_xs_arm_Cons_inst_51_52_50_41_34_27_9_10_tsni(ys, _deforest_Cons_head_inst_51_52_50_41_34_27_9_10_tsni, _deforest_Cons_tail_inst_51_52_50_41_34_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_51_52_50_41_34_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_51_52_50_41_34_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_51_52_50_41_34_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_51_52_50_41_37_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_51_52_50_41_37_9_tsni(xs2);
      return append_inst_51_52_50_41_37_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_51_52_50_41_34_27_9_10_tsni = function match_xs_arm_Nil_inst_51_52_50_41_34_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_37_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0_inst_51_52_50_41_37_tsni, _deforest_Deforest_Arr_2_1_inst_51_52_50_41_37_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_52_50_41_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_51_52_50_41_37_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_51_52_50_41_37_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_51_52_50_41_38_57_tsni = function match_m_arm_StateT_inst_51_52_50_41_38_57_tsni(s, _deforest_StateT_run_inst_51_52_50_41_38_57_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_51_52_50_41_38_57_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_51_52_50_41_38_4_tsni = function match_xs_arm_Cons_inst_51_52_50_41_38_4_tsni(f, _deforest_Cons_head_inst_51_52_50_41_38_4_tsni, _deforest_Cons_tail_inst_51_52_50_41_38_4_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_51_52_50_41_38_4_tsni;
  param1 = _deforest_Cons_tail_inst_51_52_50_41_38_4_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_51_52_50_41_38_4_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return () => {
    let param01, param11, x1, xs1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp2 = concat_inst_51_52_50_41_38_9_tsni(xs1);
    return append_inst_51_52_50_41_38_9_10_tsni(x1, tmp2)
  }
};
match_xs_arm_Nil_inst_51_52_50_41_38_4_tsni = function match_xs_arm_Nil_inst_51_52_50_41_38_4_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_38_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0_inst_51_52_50_41_38_tsni, _deforest_Deforest_Arr_2_1_inst_51_52_50_41_38_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_52_50_41_38_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_51_52_50_41_38_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_51_52_50_41_38_54_tsni(tmp, ss)
};
match_m_arm_StateT_inst_51_52_50_41_30_27_54_tsni = function match_m_arm_StateT_inst_51_52_50_41_30_27_54_tsni(s, _deforest_StateT_run_inst_51_52_50_41_30_27_54_tsni) {
  let param0, run;
  param0 = _deforest_StateT_run_inst_51_52_50_41_30_27_54_tsni;
  run = param0;
  return runtime.safeCall(run(s))
};
match_xs_arm_Cons_inst_51_52_50_41_30_27_9_10_tsni = function match_xs_arm_Cons_inst_51_52_50_41_30_27_9_10_tsni(ys, _deforest_Cons_head_inst_51_52_50_41_30_27_9_10_tsni, _deforest_Cons_tail_inst_51_52_50_41_30_27_9_10_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_51_52_50_41_30_27_9_10_tsni;
  param1 = _deforest_Cons_tail_inst_51_52_50_41_30_27_9_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_51_52_50_41_30_27_9_10_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_51_52_50_41_31_8_4_tsni(f, xs1);
    _deforest_Cons_head1 = tmp1;
    _deforest_Cons_tail1 = tmp2;
    return () => {
      let param02, param12, x2, xs2, tmp3;
      param02 = _deforest_Cons_head1;
      param12 = _deforest_Cons_tail1;
      x2 = param02;
      xs2 = param12;
      tmp3 = concat_inst_51_52_50_41_31_8_9_tsni(xs2);
      return append_inst_51_52_50_41_31_8_9_10_tsni(x2, tmp3)
    }
  }
};
match_xs_arm_Nil_inst_51_52_50_41_30_27_9_10_tsni = function match_xs_arm_Nil_inst_51_52_50_41_30_27_9_10_tsni(ys) {
  return ys
};
match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_31_8_tsni = function match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0_inst_51_52_50_41_31_8_tsni, _deforest_Deforest_Arr_2_1_inst_51_52_50_41_31_8_tsni) {
  let first1, first0, a, ss, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_51_52_50_41_31_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_51_52_50_41_31_8_tsni;
  a = first0;
  ss = first1;
  tmp = runtime.safeCall(f(a));
  return runStateT_inst_51_52_50_41_31_8_54_tsni(tmp, ss)
};
match_xs_arm_Cons_inst_51_52_50_47_53_10_tsni = function match_xs_arm_Cons_inst_51_52_50_47_53_10_tsni(ys, _deforest_Cons_head_inst_51_52_50_47_53_10_tsni, _deforest_Cons_tail_inst_51_52_50_47_53_10_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_51_52_50_47_53_10_tsni;
  param1 = _deforest_Cons_tail_inst_51_52_50_47_53_10_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_51_52_50_47_53_10_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
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
      tmp2 = concat_inst_0_53_tsni(xs2);
      return append_inst_0_53_10_tsni(x1, tmp2)
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
      return match_xs_arm_Cons_inst_0_53_10_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_3_4_tsni = function map_inst_3_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_3_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_3_9_tsni(xs2);
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
bind_inst_5_6_tsni = function bind_inst_5_6_tsni(m, f) {
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
        return runStateT_inst_5_6_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_5_6_4_tsni(tmp1, tmp2);
    return concat_inst_5_6_9_tsni(tmp3)
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
map_inst_5_6_4_tsni = function map_inst_5_6_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_6_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_5_6_9_tsni(xs2);
      return append_inst_5_6_9_10_tsni(x1, tmp2)
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
return__inst_5_7_tsni = function return__inst_5_7_tsni(a) {
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
      tmp = append_inst_5_6_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_5_8_9_10_tsni(xs, ys1);
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
bind_inst_5_8_tsni = function bind_inst_5_8_tsni(m, f) {
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
        return runStateT_inst_5_8_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_5_8_4_tsni(tmp1, tmp2);
    return concat_inst_5_8_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_5_8_4_tsni = function map_inst_5_8_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_5_8_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_5_8_9_tsni(xs2);
      return append_inst_5_8_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_5_6_9_tsni = function concat_inst_5_6_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_5_6_9_10_tsni = function append_inst_5_6_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_11_12_tsni = function map_inst_11_12_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_11_12_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_11_22_tsni(xs2);
      return append_inst_11_22_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_13_14_tsni = function map_inst_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_13_44_tsni(xs2);
      return append_inst_13_44_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lift_inst_15_16_tsni = function lift_inst_15_16_tsni(ls) {
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
        return runStateT_inst_15_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_15_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_15_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_15_21_9_tsni(xs2);
            return append_inst_15_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_15_16_12_tsni(lambda1, ls);
    return concat_inst_15_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_15_16_12_tsni = function map_inst_15_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
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
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_15_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_15_16_22_tsni(xs2);
        return append_inst_15_16_22_10_tsni(x1, tmp2)
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
bind_inst_15_18_tsni = function bind_inst_15_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_15_18_57_tsni(m, s);
    tmp3 = map_inst_15_18_4_tsni(tmp1, tmp2);
    return concat_inst_15_18_9_tsni(tmp3)
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
map_inst_15_18_4_tsni = function map_inst_15_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_15_19_tsni = function put_inst_15_19_tsni(s) {
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
      return runStateT_inst_15_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_15_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_15_18_9_tsni(xs1);
        return append_inst_15_18_9_10_tsni(x2, tmp2)
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
return__inst_15_20_tsni = function return__inst_15_20_tsni(a) {
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
      tmp = append_inst_15_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_15_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_15_23_9_10_tsni(xs, ys2);
          return NofibPrelude.Cons(x, tmp)
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
bind_inst_15_21_tsni = function bind_inst_15_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_15_21_57_tsni(m, s);
    tmp3 = map_inst_15_21_4_tsni(tmp1, tmp2);
    return concat_inst_15_21_9_tsni(tmp3)
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
map_inst_15_21_4_tsni = function map_inst_15_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_15_16_22_tsni = function concat_inst_15_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_16_22_10_tsni = function append_inst_15_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_15_18_9_tsni = function concat_inst_15_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_18_9_10_tsni = function append_inst_15_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_15_23_tsni = function bind_inst_15_23_tsni(m, f) {
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
        return runStateT_inst_15_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_15_23_4_tsni(tmp1, tmp2);
    return concat_inst_15_23_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_15_23_4_tsni = function map_inst_15_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_15_23_9_tsni(xs2);
      return append_inst_15_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_15_21_9_tsni = function concat_inst_15_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_15_21_9_10_tsni = function append_inst_15_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lookup_inst_24_25_tsni = function lookup_inst_24_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_24_26_tsni(c)
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
          return return__inst_24_28_tsni(r)
        }
      } else {
        return lookup_inst_24_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_24_26_tsni = function permute_inst_24_26_tsni(c) {
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
        return foldl_inst_24_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_24_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_24_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_24_26_20_tsni(i)
        });
        return bind_inst_24_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_24_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_24_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_24_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_24_26_23_tsni(cryptarithm2.get, tmp)
};
bind_inst_24_26_23_tsni = function bind_inst_24_26_23_tsni(m, f) {
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
        return runStateT_inst_24_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_24_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_24_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_24_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_24_26_23_4_tsni = function map_inst_24_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_24_26_23_9_tsni(xs2);
      return append_inst_24_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_24_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_24_26_21_tsni = function bind_inst_24_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_24_26_21_57_tsni(m, s);
    tmp3 = map_inst_24_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_24_26_21_9_tsni(tmp3)
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
map_inst_24_26_21_4_tsni = function map_inst_24_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_24_26_21_9_tsni = function concat_inst_24_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_24_26_21_9_10_tsni = function append_inst_24_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_24_26_18_tsni = function bind_inst_24_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_24_26_18_57_tsni(m, s);
    tmp3 = map_inst_24_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_24_26_18_9_tsni(tmp3)
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
map_inst_24_26_18_4_tsni = function map_inst_24_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_24_26_18_9_tsni = function concat_inst_24_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_24_26_18_9_10_tsni = function append_inst_24_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_24_26_20_tsni = function return__inst_24_26_20_tsni(a) {
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
      tmp = append_inst_24_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_24_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_24_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_24_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
put_inst_24_26_19_tsni = function put_inst_24_26_19_tsni(s) {
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
      return runStateT_inst_24_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_24_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_24_26_18_9_tsni(xs1);
        return append_inst_24_26_18_9_10_tsni(x2, tmp2)
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
lift_inst_24_26_16_tsni = function lift_inst_24_26_16_tsni(ls) {
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
        return runStateT_inst_24_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_24_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_24_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_24_26_21_9_tsni(xs2);
            return append_inst_24_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_24_26_16_12_tsni(lambda1, ls);
    return concat_inst_24_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_24_26_16_12_tsni = function map_inst_24_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_24_26_16_22_tsni = function concat_inst_24_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_24_26_16_22_10_tsni = function append_inst_24_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_24_26_17_tsni = function map_inst_24_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_24_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_24_26_16_22_tsni(xs2);
        return append_inst_24_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_24_27_tsni = function bind_inst_24_27_tsni(m, f) {
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
        return runStateT_inst_24_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_24_27_4_tsni(tmp1, tmp2);
    return concat_inst_24_27_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_24_27_4_tsni = function map_inst_24_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_24_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_24_27_9_tsni(xs2);
      return append_inst_24_27_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_24_28_tsni = function return__inst_24_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail;
    arr = [
      a,
      s
    ];
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_24_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_24_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_24_27_54_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_24_26_23_9_tsni = function concat_inst_24_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_24_26_23_9_10_tsni = function append_inst_24_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
select_inst_29_30_tsni = function select_inst_29_30_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_29_30_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_29_30_27_tsni(cryptarithm2.get, tmp)
};
bind_inst_29_30_27_tsni = function bind_inst_29_30_27_tsni(m, f) {
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
        return runStateT_inst_29_30_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_30_27_4_tsni(tmp1, tmp2);
    return concat_inst_29_30_27_9_tsni(tmp3)
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
map_inst_29_30_27_4_tsni = function map_inst_29_30_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_30_27_9_tsni(xs2);
      return append_inst_29_30_27_9_10_tsni(x1, tmp2)
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
permute_inst_29_30_26_tsni = function permute_inst_29_30_26_tsni(c) {
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
        return foldl_inst_29_30_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_29_30_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_29_30_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_29_30_26_20_tsni(i)
        });
        return bind_inst_29_30_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_29_30_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_29_30_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_29_30_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_29_30_26_23_tsni(cryptarithm2.get, tmp)
};
lift_inst_29_30_26_16_tsni = function lift_inst_29_30_26_16_tsni(ls) {
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
        return runStateT_inst_29_30_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_29_30_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_29_30_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_29_30_26_21_9_tsni(xs2);
            return append_inst_29_30_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_29_30_26_16_12_tsni(lambda1, ls);
    return concat_inst_29_30_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_29_30_26_16_12_tsni = function map_inst_29_30_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_29_30_26_17_tsni = function map_inst_29_30_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_29_30_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_29_30_26_16_22_tsni(xs2);
        return append_inst_29_30_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_29_30_26_18_tsni = function bind_inst_29_30_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_30_26_18_57_tsni(m, s);
    tmp3 = map_inst_29_30_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_29_30_26_18_9_tsni(tmp3)
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
map_inst_29_30_26_18_4_tsni = function map_inst_29_30_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_29_30_26_19_tsni = function put_inst_29_30_26_19_tsni(s) {
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
      return runStateT_inst_29_30_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_29_30_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_29_30_26_18_9_tsni(xs1);
        return append_inst_29_30_26_18_9_10_tsni(x2, tmp2)
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
return__inst_29_30_26_20_tsni = function return__inst_29_30_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_29_30_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_29_30_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_29_30_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_29_30_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
bind_inst_29_30_26_21_tsni = function bind_inst_29_30_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_30_26_21_57_tsni(m, s);
    tmp3 = map_inst_29_30_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_29_30_26_21_9_tsni(tmp3)
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
map_inst_29_30_26_21_4_tsni = function map_inst_29_30_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_29_30_26_16_22_tsni = function concat_inst_29_30_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_26_16_22_10_tsni = function append_inst_29_30_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_30_26_18_9_tsni = function concat_inst_29_30_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_26_18_9_10_tsni = function append_inst_29_30_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_29_30_26_23_tsni = function bind_inst_29_30_26_23_tsni(m, f) {
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
        return runStateT_inst_29_30_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_30_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_29_30_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_29_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_29_30_26_23_4_tsni = function map_inst_29_30_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_30_26_23_9_tsni(xs2);
      return append_inst_29_30_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_29_30_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_29_30_26_21_9_tsni = function concat_inst_29_30_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_26_21_9_10_tsni = function append_inst_29_30_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_30_26_23_9_tsni = function concat_inst_29_30_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_26_23_9_10_tsni = function append_inst_29_30_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_29_30_28_tsni = function return__inst_29_30_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_29_30_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_29_30_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_29_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_29_30_25_tsni = function lookup_inst_29_30_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_29_30_26_tsni(c)
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
          return return__inst_29_30_28_tsni(r)
        }
      } else {
        return lookup_inst_29_30_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_29_31_tsni = function mapM_inst_29_31_tsni(f, ls) {
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
        return return__inst_29_31_7_tsni(tmp2)
      });
      return bind_inst_29_31_6_tsni(r, lambda2)
    });
    return bind_inst_29_31_8_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_29_31_8_tsni = function bind_inst_29_31_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_31_8_57_tsni(m, s);
    tmp3 = map_inst_29_31_8_4_tsni(tmp1, tmp2);
    return concat_inst_29_31_8_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_29_31_8_4_tsni = function map_inst_29_31_8_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_29_31_6_tsni = function bind_inst_29_31_6_tsni(m, f) {
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
        return runStateT_inst_29_31_6_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_31_6_4_tsni(tmp1, tmp2);
    return concat_inst_29_31_6_9_tsni(tmp3)
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
map_inst_29_31_6_4_tsni = function map_inst_29_31_6_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_31_6_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_31_6_9_tsni(xs2);
      return append_inst_29_31_6_9_10_tsni(x1, tmp2)
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
concat_inst_29_31_6_9_tsni = function concat_inst_29_31_6_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_31_6_9_10_tsni = function append_inst_29_31_6_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_29_31_7_tsni = function return__inst_29_31_7_tsni(a) {
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
      tmp = append_inst_29_31_6_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_29_31_8_9_10_tsni(xs, ys1);
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
concat_inst_29_30_27_9_tsni = function concat_inst_29_30_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_27_9_10_tsni = function append_inst_29_30_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_29_32_tsni = function bind_inst_29_32_tsni(m, f) {
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
        return runStateT_inst_29_32_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_32_4_tsni(tmp1, tmp2);
    return concat_inst_29_32_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_29_38_57_tsni(s, _deforest_StateT_run)
  }
};
map_inst_29_32_4_tsni = function map_inst_29_32_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_32_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_32_9_tsni(xs2);
      return append_inst_29_32_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_29_38_4_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_29_33_tsni = function return__inst_29_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_29_32_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_29_38_4_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
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
select_inst_29_34_tsni = function select_inst_29_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_29_34_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_29_34_27_tsni(cryptarithm2.get, tmp)
};
bind_inst_29_34_27_tsni = function bind_inst_29_34_27_tsni(m, f) {
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
        return runStateT_inst_29_34_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_34_27_4_tsni(tmp1, tmp2);
    return concat_inst_29_34_27_9_tsni(tmp3)
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
map_inst_29_34_27_4_tsni = function map_inst_29_34_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_34_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_34_27_9_tsni(xs2);
      return append_inst_29_34_27_9_10_tsni(x1, tmp2)
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
permute_inst_29_34_26_tsni = function permute_inst_29_34_26_tsni(c) {
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
        return foldl_inst_29_34_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_29_34_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_29_34_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_29_34_26_20_tsni(i)
        });
        return bind_inst_29_34_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_29_34_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_29_34_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_29_34_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_29_34_26_23_tsni(cryptarithm2.get, tmp)
};
lift_inst_29_34_26_16_tsni = function lift_inst_29_34_26_16_tsni(ls) {
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
        return runStateT_inst_29_34_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_29_34_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_29_34_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_29_34_26_21_9_tsni(xs2);
            return append_inst_29_34_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_29_34_26_16_12_tsni(lambda1, ls);
    return concat_inst_29_34_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_29_34_26_16_12_tsni = function map_inst_29_34_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_29_34_26_17_tsni = function map_inst_29_34_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_34_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_29_34_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_29_34_26_16_22_tsni(xs2);
        return append_inst_29_34_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_29_34_26_18_tsni = function bind_inst_29_34_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_34_26_18_57_tsni(m, s);
    tmp3 = map_inst_29_34_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_29_34_26_18_9_tsni(tmp3)
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
map_inst_29_34_26_18_4_tsni = function map_inst_29_34_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_29_34_26_19_tsni = function put_inst_29_34_26_19_tsni(s) {
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
      return runStateT_inst_29_34_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_29_34_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_29_34_26_18_9_tsni(xs1);
        return append_inst_29_34_26_18_9_10_tsni(x2, tmp2)
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
return__inst_29_34_26_20_tsni = function return__inst_29_34_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_29_34_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_29_34_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_29_34_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_29_34_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
bind_inst_29_34_26_21_tsni = function bind_inst_29_34_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_34_26_21_57_tsni(m, s);
    tmp3 = map_inst_29_34_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_29_34_26_21_9_tsni(tmp3)
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
map_inst_29_34_26_21_4_tsni = function map_inst_29_34_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_29_34_26_16_22_tsni = function concat_inst_29_34_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_34_26_16_22_10_tsni = function append_inst_29_34_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_34_26_18_9_tsni = function concat_inst_29_34_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_34_26_18_9_10_tsni = function append_inst_29_34_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_29_34_26_23_tsni = function bind_inst_29_34_26_23_tsni(m, f) {
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
        return runStateT_inst_29_34_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_29_34_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_29_34_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_29_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_29_34_26_23_4_tsni = function map_inst_29_34_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_34_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_34_26_23_9_tsni(xs2);
      return append_inst_29_34_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_29_34_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_29_34_26_21_9_tsni = function concat_inst_29_34_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_34_26_21_9_10_tsni = function append_inst_29_34_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_34_26_23_9_tsni = function concat_inst_29_34_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_34_26_23_9_10_tsni = function append_inst_29_34_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_29_34_28_tsni = function return__inst_29_34_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_29_34_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_29_34_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_29_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_29_34_25_tsni = function lookup_inst_29_34_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_29_34_26_tsni(c)
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
          return return__inst_29_34_28_tsni(r)
        }
      } else {
        return lookup_inst_29_34_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_29_35_tsni = function bind_inst_29_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_35_57_tsni(m, s);
    tmp3 = map_inst_29_35_4_tsni(tmp1, tmp2);
    return concat_inst_29_35_9_tsni(tmp3)
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
map_inst_29_35_4_tsni = function map_inst_29_35_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
guard_inst_29_36_tsni = function guard_inst_29_36_tsni(b) {
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
        return match_xs_arm_Nil_inst_29_35_4_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_29_35_4_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_29_35_9_tsni(xs1);
          return append_inst_29_35_9_10_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_29_35_57_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_29_35_4_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_29_35_57_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_29_37_tsni = function bind_inst_29_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_37_57_tsni(m, s);
    tmp3 = map_inst_29_37_4_tsni(tmp1, tmp2);
    return concat_inst_29_37_9_tsni(tmp3)
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
map_inst_29_37_4_tsni = function map_inst_29_37_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_29_34_27_9_tsni = function concat_inst_29_34_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_34_27_9_10_tsni = function append_inst_29_34_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_29_35_9_tsni = function concat_inst_29_35_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_35_9_10_tsni = function append_inst_29_35_9_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_29_35_9_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_29_37_9_10_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_29_38_9_10_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_29_38_tsni = function bind_inst_29_38_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_29_38_57_tsni(m, s);
    tmp3 = map_inst_29_38_4_tsni(tmp1, tmp2);
    return concat_inst_29_38_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_29_38_4_tsni = function map_inst_29_38_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_29_32_9_tsni = function concat_inst_29_32_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_32_9_10_tsni = function append_inst_29_32_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_29_39_tsni = function return__inst_29_39_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_29_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_29_38_4_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_29_38_4_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_29_38_57_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_29_37_9_tsni = function concat_inst_29_37_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_37_9_10_tsni = function append_inst_29_37_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
solve_inst_40_41_tsni = function solve_inst_40_41_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_40_41_39_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_40_41_31_tsni(select_inst_40_41_30_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_40_41_33_tsni(tmp3)
      });
      tmp = bind_inst_40_41_32_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_40_41_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_40_41_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_40_41_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_40_41_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_40_41_37_tsni(tmp2, tmp3)
    });
    return bind_inst_40_41_38_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_40_41_43_tsni(cryptarithm2.Unit)
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
bind_inst_40_41_38_tsni = function bind_inst_40_41_38_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_38_57_tsni(m, s);
    tmp3 = map_inst_40_41_38_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_38_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_40_41_38_4_tsni = function map_inst_40_41_38_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_40_41_37_tsni = function bind_inst_40_41_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_37_57_tsni(m, s);
    tmp3 = map_inst_40_41_37_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_37_9_tsni(tmp3)
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
map_inst_40_41_37_4_tsni = function map_inst_40_41_37_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_37_9_tsni = function concat_inst_40_41_37_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_37_9_10_tsni = function append_inst_40_41_37_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_40_41_35_tsni = function bind_inst_40_41_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_35_57_tsni(m, s);
    tmp3 = map_inst_40_41_35_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_35_9_tsni(tmp3)
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
map_inst_40_41_35_4_tsni = function map_inst_40_41_35_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_35_9_tsni = function concat_inst_40_41_35_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_35_9_10_tsni = function append_inst_40_41_35_9_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_41_35_9_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_40_41_37_9_10_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_40_41_38_9_10_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
guard_inst_40_41_36_tsni = function guard_inst_40_41_36_tsni(b) {
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
        return match_xs_arm_Nil_inst_40_41_35_4_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_40_41_35_4_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_40_41_35_9_tsni(xs1);
          return append_inst_40_41_35_9_10_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_40_41_35_57_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_40_41_35_4_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_40_41_35_57_tsni(s, _deforest_StateT_run1)
    }
  }
};
select_inst_40_41_34_tsni = function select_inst_40_41_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_40_41_34_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_40_41_34_27_tsni(cryptarithm2.get, tmp)
};
lookup_inst_40_41_34_25_tsni = function lookup_inst_40_41_34_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_40_41_34_26_tsni(c)
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
          return return__inst_40_41_34_28_tsni(r)
        }
      } else {
        return lookup_inst_40_41_34_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_40_41_34_26_tsni = function permute_inst_40_41_34_26_tsni(c) {
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
        return foldl_inst_40_41_34_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_40_41_34_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_40_41_34_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_40_41_34_26_20_tsni(i)
        });
        return bind_inst_40_41_34_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_40_41_34_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_40_41_34_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_40_41_34_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_40_41_34_26_23_tsni(cryptarithm2.get, tmp)
};
bind_inst_40_41_34_26_23_tsni = function bind_inst_40_41_34_26_23_tsni(m, f) {
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
        return runStateT_inst_40_41_34_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_34_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_34_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_40_41_34_26_23_4_tsni = function map_inst_40_41_34_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_34_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_34_26_23_9_tsni(xs2);
      return append_inst_40_41_34_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_40_41_34_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_40_41_34_26_21_tsni = function bind_inst_40_41_34_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_34_26_21_57_tsni(m, s);
    tmp3 = map_inst_40_41_34_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_34_26_21_9_tsni(tmp3)
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
map_inst_40_41_34_26_21_4_tsni = function map_inst_40_41_34_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_34_26_21_9_tsni = function concat_inst_40_41_34_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_34_26_21_9_10_tsni = function append_inst_40_41_34_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_40_41_34_26_18_tsni = function bind_inst_40_41_34_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_34_26_18_57_tsni(m, s);
    tmp3 = map_inst_40_41_34_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_34_26_18_9_tsni(tmp3)
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
map_inst_40_41_34_26_18_4_tsni = function map_inst_40_41_34_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_34_26_18_9_tsni = function concat_inst_40_41_34_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_34_26_18_9_10_tsni = function append_inst_40_41_34_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_40_41_34_26_20_tsni = function return__inst_40_41_34_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_40_41_34_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_40_41_34_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_40_41_34_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_40_41_34_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
put_inst_40_41_34_26_19_tsni = function put_inst_40_41_34_26_19_tsni(s) {
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
      return runStateT_inst_40_41_34_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_40_41_34_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_40_41_34_26_18_9_tsni(xs1);
        return append_inst_40_41_34_26_18_9_10_tsni(x2, tmp2)
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
lift_inst_40_41_34_26_16_tsni = function lift_inst_40_41_34_26_16_tsni(ls) {
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
        return runStateT_inst_40_41_34_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_40_41_34_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_40_41_34_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_40_41_34_26_21_9_tsni(xs2);
            return append_inst_40_41_34_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_40_41_34_26_16_12_tsni(lambda1, ls);
    return concat_inst_40_41_34_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_40_41_34_26_16_12_tsni = function map_inst_40_41_34_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_34_26_16_22_tsni = function concat_inst_40_41_34_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_34_26_16_22_10_tsni = function append_inst_40_41_34_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_40_41_34_26_17_tsni = function map_inst_40_41_34_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_34_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_40_41_34_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_40_41_34_26_16_22_tsni(xs2);
        return append_inst_40_41_34_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_40_41_34_27_tsni = function bind_inst_40_41_34_27_tsni(m, f) {
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
        return runStateT_inst_40_41_34_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_34_27_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_34_27_9_tsni(tmp3)
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
map_inst_40_41_34_27_4_tsni = function map_inst_40_41_34_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_34_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_34_27_9_tsni(xs2);
      return append_inst_40_41_34_27_9_10_tsni(x1, tmp2)
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
return__inst_40_41_34_28_tsni = function return__inst_40_41_34_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_40_41_34_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_40_41_34_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_40_41_34_26_23_9_tsni = function concat_inst_40_41_34_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_34_26_23_9_10_tsni = function append_inst_40_41_34_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_40_41_34_27_9_tsni = function concat_inst_40_41_34_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_34_27_9_10_tsni = function append_inst_40_41_34_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_40_41_32_tsni = function bind_inst_40_41_32_tsni(m, f) {
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
        return runStateT_inst_40_41_32_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_32_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_32_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
map_inst_40_41_32_4_tsni = function map_inst_40_41_32_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_32_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_32_9_tsni(xs2);
      return append_inst_40_41_32_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_40_41_38_4_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_40_41_32_9_tsni = function concat_inst_40_41_32_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_32_9_10_tsni = function append_inst_40_41_32_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_40_41_33_tsni = function return__inst_40_41_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_40_41_32_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_40_41_38_4_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
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
mapM_inst_40_41_31_tsni = function mapM_inst_40_41_31_tsni(f, ls) {
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
        return return__inst_40_41_31_7_tsni(tmp2)
      });
      return bind_inst_40_41_31_6_tsni(r, lambda2)
    });
    return bind_inst_40_41_31_8_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_40_41_31_6_tsni = function bind_inst_40_41_31_6_tsni(m, f) {
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
        return runStateT_inst_40_41_31_6_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_31_6_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_31_6_9_tsni(tmp3)
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
map_inst_40_41_31_6_4_tsni = function map_inst_40_41_31_6_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_31_6_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_31_6_9_tsni(xs2);
      return append_inst_40_41_31_6_9_10_tsni(x1, tmp2)
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
return__inst_40_41_31_7_tsni = function return__inst_40_41_31_7_tsni(a) {
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
      tmp = append_inst_40_41_31_6_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_40_41_31_8_9_10_tsni(xs, ys1);
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
bind_inst_40_41_31_8_tsni = function bind_inst_40_41_31_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_31_8_57_tsni(m, s);
    tmp3 = map_inst_40_41_31_8_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_31_8_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_40_41_31_8_4_tsni = function map_inst_40_41_31_8_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_31_6_9_tsni = function concat_inst_40_41_31_6_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_31_6_9_10_tsni = function append_inst_40_41_31_6_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
select_inst_40_41_30_tsni = function select_inst_40_41_30_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_40_41_30_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_40_41_30_27_tsni(cryptarithm2.get, tmp)
};
lookup_inst_40_41_30_25_tsni = function lookup_inst_40_41_30_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_40_41_30_26_tsni(c)
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
          return return__inst_40_41_30_28_tsni(r)
        }
      } else {
        return lookup_inst_40_41_30_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_40_41_30_26_tsni = function permute_inst_40_41_30_26_tsni(c) {
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
        return foldl_inst_40_41_30_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_40_41_30_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_40_41_30_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_40_41_30_26_20_tsni(i)
        });
        return bind_inst_40_41_30_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_40_41_30_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_40_41_30_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_40_41_30_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_40_41_30_26_23_tsni(cryptarithm2.get, tmp)
};
bind_inst_40_41_30_26_23_tsni = function bind_inst_40_41_30_26_23_tsni(m, f) {
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
        return runStateT_inst_40_41_30_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_30_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_30_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_40_41_30_26_23_4_tsni = function map_inst_40_41_30_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_30_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_30_26_23_9_tsni(xs2);
      return append_inst_40_41_30_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_40_41_30_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_40_41_30_26_21_tsni = function bind_inst_40_41_30_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_30_26_21_57_tsni(m, s);
    tmp3 = map_inst_40_41_30_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_30_26_21_9_tsni(tmp3)
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
map_inst_40_41_30_26_21_4_tsni = function map_inst_40_41_30_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_30_26_21_9_tsni = function concat_inst_40_41_30_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_30_26_21_9_10_tsni = function append_inst_40_41_30_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_40_41_30_26_18_tsni = function bind_inst_40_41_30_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_40_41_30_26_18_57_tsni(m, s);
    tmp3 = map_inst_40_41_30_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_30_26_18_9_tsni(tmp3)
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
map_inst_40_41_30_26_18_4_tsni = function map_inst_40_41_30_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_30_26_18_9_tsni = function concat_inst_40_41_30_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_30_26_18_9_10_tsni = function append_inst_40_41_30_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_40_41_30_26_20_tsni = function return__inst_40_41_30_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_40_41_30_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_40_41_30_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_40_41_30_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_40_41_30_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
put_inst_40_41_30_26_19_tsni = function put_inst_40_41_30_26_19_tsni(s) {
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
      return runStateT_inst_40_41_30_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_40_41_30_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_40_41_30_26_18_9_tsni(xs1);
        return append_inst_40_41_30_26_18_9_10_tsni(x2, tmp2)
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
lift_inst_40_41_30_26_16_tsni = function lift_inst_40_41_30_26_16_tsni(ls) {
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
        return runStateT_inst_40_41_30_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_40_41_30_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_40_41_30_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_40_41_30_26_21_9_tsni(xs2);
            return append_inst_40_41_30_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_40_41_30_26_16_12_tsni(lambda1, ls);
    return concat_inst_40_41_30_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_40_41_30_26_16_12_tsni = function map_inst_40_41_30_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_40_41_30_26_16_22_tsni = function concat_inst_40_41_30_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_30_26_16_22_10_tsni = function append_inst_40_41_30_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_40_41_30_26_17_tsni = function map_inst_40_41_30_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_30_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_40_41_30_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_40_41_30_26_16_22_tsni(xs2);
        return append_inst_40_41_30_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_40_41_30_27_tsni = function bind_inst_40_41_30_27_tsni(m, f) {
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
        return runStateT_inst_40_41_30_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_40_41_30_27_4_tsni(tmp1, tmp2);
    return concat_inst_40_41_30_27_9_tsni(tmp3)
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
map_inst_40_41_30_27_4_tsni = function map_inst_40_41_30_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_41_30_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_41_30_27_9_tsni(xs2);
      return append_inst_40_41_30_27_9_10_tsni(x1, tmp2)
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
return__inst_40_41_30_28_tsni = function return__inst_40_41_30_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_40_41_30_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_40_41_30_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_40_41_30_26_23_9_tsni = function concat_inst_40_41_30_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_30_26_23_9_10_tsni = function append_inst_40_41_30_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_40_41_30_27_9_tsni = function concat_inst_40_41_30_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_41_30_27_9_10_tsni = function append_inst_40_41_30_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_40_41_39_tsni = function return__inst_40_41_39_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_40_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_40_41_38_4_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_40_41_38_4_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_40_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
execStateT_inst_40_42_tsni = function execStateT_inst_40_42_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_40_42_14_tsni(tmp, tmp1);
  return concat_inst_40_42_44_tsni(tmp2)
};
map_inst_40_42_14_tsni = function map_inst_40_42_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_42_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_42_44_tsni(xs2);
      return append_inst_40_42_44_10_tsni(x1, tmp2)
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
return__inst_40_41_43_tsni = function return__inst_40_41_43_tsni(a) {
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
        tmp = append_inst_40_42_44_10_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst_40_tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
concat_inst_40_42_44_tsni = function concat_inst_40_42_44_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_42_44_10_tsni = function append_inst_40_42_44_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lookup_inst_40_45_tsni = function lookup_inst_40_45_tsni(k, t) {
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
        return lookup_inst_40_45_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_40_46_tsni = function concat_inst_40_46_tsni(ls) {
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
    tmp = concat_inst_40_46_tsni(xs);
    return append_inst_40_46_10_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_40_46_10_tsni = function append_inst_40_46_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_46_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_40_59_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unlines_inst_40_47_tsni = function unlines_inst_40_47_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_40_47_53_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_40_47_2_tsni(x, tmp1)
  });
  tmp = map_inst_40_47_1_tsni(lambda, ls);
  return concat_inst_40_47_53_tsni(tmp)
};
map_inst_40_47_1_tsni = function map_inst_40_47_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_40_47_2_tsni = function append_inst_40_47_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_47_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_40_47_53_10_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_40_48_tsni = function map_inst_40_48_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_48_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_40_47_1_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_40_47_53_tsni(xs2);
        return append_inst_40_47_53_10_tsni(x1, tmp2)
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
puzzle_inst_49_50_tsni = function puzzle_inst_49_50_tsni(top, bot) {
  let solution, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_49_50_41_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_49_50_42_tsni(solution, tmp5);
  return runtime.safeCall(scrut(top, bot))
};
unlines_inst_49_50_47_tsni = function unlines_inst_49_50_47_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_49_50_47_53_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_49_50_47_2_tsni(x, tmp1)
  });
  tmp = map_inst_49_50_47_1_tsni(lambda, ls);
  return concat_inst_49_50_47_53_tsni(tmp)
};
map_inst_49_50_47_1_tsni = function map_inst_49_50_47_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_49_50_47_2_tsni = function append_inst_49_50_47_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_49_50_47_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_49_50_47_53_10_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_49_50_48_tsni = function map_inst_49_50_48_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_48_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_49_50_47_1_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_49_50_47_53_tsni(xs2);
        return append_inst_49_50_47_53_10_tsni(x1, tmp2)
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
concat_inst_49_50_46_tsni = function concat_inst_49_50_46_tsni(ls) {
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
    tmp = concat_inst_49_50_46_tsni(xs);
    return append_inst_49_50_46_10_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_49_50_46_10_tsni = function append_inst_49_50_46_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_49_50_46_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_49_50_59_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lookup_inst_49_50_45_tsni = function lookup_inst_49_50_45_tsni(k, t) {
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
        return lookup_inst_49_50_45_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
execStateT_inst_49_50_42_tsni = function execStateT_inst_49_50_42_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_49_50_42_14_tsni(tmp, tmp1);
  return concat_inst_49_50_42_44_tsni(tmp2)
};
map_inst_49_50_42_14_tsni = function map_inst_49_50_42_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_42_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_42_44_tsni(xs2);
      return append_inst_49_50_42_44_10_tsni(x1, tmp2)
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
concat_inst_49_50_42_44_tsni = function concat_inst_49_50_42_44_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_42_44_10_tsni = function append_inst_49_50_42_44_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
solve_inst_49_50_41_tsni = function solve_inst_49_50_41_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_49_50_41_39_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_49_50_41_31_tsni(select_inst_49_50_41_30_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_49_50_41_33_tsni(tmp3)
      });
      tmp = bind_inst_49_50_41_32_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_49_50_41_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_49_50_41_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_49_50_41_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_49_50_41_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_49_50_41_37_tsni(tmp2, tmp3)
    });
    return bind_inst_49_50_41_38_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_49_50_41_43_tsni(cryptarithm2.Unit)
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
select_inst_49_50_41_30_tsni = function select_inst_49_50_41_30_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_49_50_41_30_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_49_50_41_30_27_tsni(cryptarithm2.get, tmp)
};
bind_inst_49_50_41_30_27_tsni = function bind_inst_49_50_41_30_27_tsni(m, f) {
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
        return runStateT_inst_49_50_41_30_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_30_27_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_30_27_9_tsni(tmp3)
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
map_inst_49_50_41_30_27_4_tsni = function map_inst_49_50_41_30_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_30_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_30_27_9_tsni(xs2);
      return append_inst_49_50_41_30_27_9_10_tsni(x1, tmp2)
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
permute_inst_49_50_41_30_26_tsni = function permute_inst_49_50_41_30_26_tsni(c) {
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
        return foldl_inst_49_50_41_30_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_49_50_41_30_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_49_50_41_30_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_49_50_41_30_26_20_tsni(i)
        });
        return bind_inst_49_50_41_30_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_49_50_41_30_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_49_50_41_30_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_49_50_41_30_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_49_50_41_30_26_23_tsni(cryptarithm2.get, tmp)
};
lift_inst_49_50_41_30_26_16_tsni = function lift_inst_49_50_41_30_26_16_tsni(ls) {
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
        return runStateT_inst_49_50_41_30_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_49_50_41_30_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_49_50_41_30_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_49_50_41_30_26_21_9_tsni(xs2);
            return append_inst_49_50_41_30_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_49_50_41_30_26_16_12_tsni(lambda1, ls);
    return concat_inst_49_50_41_30_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_49_50_41_30_26_16_12_tsni = function map_inst_49_50_41_30_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_49_50_41_30_26_17_tsni = function map_inst_49_50_41_30_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_30_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_49_50_41_30_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_49_50_41_30_26_16_22_tsni(xs2);
        return append_inst_49_50_41_30_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_49_50_41_30_26_18_tsni = function bind_inst_49_50_41_30_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_30_26_18_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_30_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_30_26_18_9_tsni(tmp3)
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
map_inst_49_50_41_30_26_18_4_tsni = function map_inst_49_50_41_30_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_49_50_41_30_26_19_tsni = function put_inst_49_50_41_30_26_19_tsni(s) {
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
      return runStateT_inst_49_50_41_30_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_49_50_41_30_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_49_50_41_30_26_18_9_tsni(xs1);
        return append_inst_49_50_41_30_26_18_9_10_tsni(x2, tmp2)
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
return__inst_49_50_41_30_26_20_tsni = function return__inst_49_50_41_30_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_49_50_41_30_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_49_50_41_30_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_49_50_41_30_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_49_50_41_30_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
bind_inst_49_50_41_30_26_21_tsni = function bind_inst_49_50_41_30_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_30_26_21_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_30_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_30_26_21_9_tsni(tmp3)
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
map_inst_49_50_41_30_26_21_4_tsni = function map_inst_49_50_41_30_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_49_50_41_30_26_16_22_tsni = function concat_inst_49_50_41_30_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_30_26_16_22_10_tsni = function append_inst_49_50_41_30_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_41_30_26_18_9_tsni = function concat_inst_49_50_41_30_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_30_26_18_9_10_tsni = function append_inst_49_50_41_30_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_49_50_41_30_26_23_tsni = function bind_inst_49_50_41_30_26_23_tsni(m, f) {
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
        return runStateT_inst_49_50_41_30_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_30_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_30_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_49_50_41_30_26_23_4_tsni = function map_inst_49_50_41_30_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_30_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_30_26_23_9_tsni(xs2);
      return append_inst_49_50_41_30_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_49_50_41_30_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_49_50_41_30_26_21_9_tsni = function concat_inst_49_50_41_30_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_30_26_21_9_10_tsni = function append_inst_49_50_41_30_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_41_30_26_23_9_tsni = function concat_inst_49_50_41_30_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_30_26_23_9_10_tsni = function append_inst_49_50_41_30_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_49_50_41_30_28_tsni = function return__inst_49_50_41_30_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_49_50_41_30_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_49_50_41_30_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_49_50_41_30_25_tsni = function lookup_inst_49_50_41_30_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_49_50_41_30_26_tsni(c)
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
          return return__inst_49_50_41_30_28_tsni(r)
        }
      } else {
        return lookup_inst_49_50_41_30_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
mapM_inst_49_50_41_31_tsni = function mapM_inst_49_50_41_31_tsni(f, ls) {
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
        return return__inst_49_50_41_31_7_tsni(tmp2)
      });
      return bind_inst_49_50_41_31_6_tsni(r, lambda2)
    });
    return bind_inst_49_50_41_31_8_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_49_50_41_31_8_tsni = function bind_inst_49_50_41_31_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_31_8_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_31_8_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_31_8_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_49_50_41_31_8_4_tsni = function map_inst_49_50_41_31_8_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_49_50_41_31_6_tsni = function bind_inst_49_50_41_31_6_tsni(m, f) {
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
        return runStateT_inst_49_50_41_31_6_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_31_6_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_31_6_9_tsni(tmp3)
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
map_inst_49_50_41_31_6_4_tsni = function map_inst_49_50_41_31_6_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_31_6_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_31_6_9_tsni(xs2);
      return append_inst_49_50_41_31_6_9_10_tsni(x1, tmp2)
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
concat_inst_49_50_41_31_6_9_tsni = function concat_inst_49_50_41_31_6_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_31_6_9_10_tsni = function append_inst_49_50_41_31_6_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_49_50_41_31_7_tsni = function return__inst_49_50_41_31_7_tsni(a) {
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
      tmp = append_inst_49_50_41_31_6_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_49_50_41_31_8_9_10_tsni(xs, ys1);
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
concat_inst_49_50_41_30_27_9_tsni = function concat_inst_49_50_41_30_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_30_27_9_10_tsni = function append_inst_49_50_41_30_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_49_50_41_32_tsni = function bind_inst_49_50_41_32_tsni(m, f) {
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
        return runStateT_inst_49_50_41_32_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_32_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_32_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
map_inst_49_50_41_32_4_tsni = function map_inst_49_50_41_32_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_32_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_32_9_tsni(xs2);
      return append_inst_49_50_41_32_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_49_50_41_38_4_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
return__inst_49_50_41_33_tsni = function return__inst_49_50_41_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_49_50_41_32_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_49_50_41_38_4_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
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
select_inst_49_50_41_34_tsni = function select_inst_49_50_41_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_49_50_41_34_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_49_50_41_34_27_tsni(cryptarithm2.get, tmp)
};
bind_inst_49_50_41_34_27_tsni = function bind_inst_49_50_41_34_27_tsni(m, f) {
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
        return runStateT_inst_49_50_41_34_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_34_27_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_34_27_9_tsni(tmp3)
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
map_inst_49_50_41_34_27_4_tsni = function map_inst_49_50_41_34_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_34_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_34_27_9_tsni(xs2);
      return append_inst_49_50_41_34_27_9_10_tsni(x1, tmp2)
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
permute_inst_49_50_41_34_26_tsni = function permute_inst_49_50_41_34_26_tsni(c) {
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
        return foldl_inst_49_50_41_34_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_49_50_41_34_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_49_50_41_34_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_49_50_41_34_26_20_tsni(i)
        });
        return bind_inst_49_50_41_34_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_49_50_41_34_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_49_50_41_34_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_49_50_41_34_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_49_50_41_34_26_23_tsni(cryptarithm2.get, tmp)
};
lift_inst_49_50_41_34_26_16_tsni = function lift_inst_49_50_41_34_26_16_tsni(ls) {
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
        return runStateT_inst_49_50_41_34_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_49_50_41_34_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_49_50_41_34_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_49_50_41_34_26_21_9_tsni(xs2);
            return append_inst_49_50_41_34_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_49_50_41_34_26_16_12_tsni(lambda1, ls);
    return concat_inst_49_50_41_34_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_49_50_41_34_26_16_12_tsni = function map_inst_49_50_41_34_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_49_50_41_34_26_17_tsni = function map_inst_49_50_41_34_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_34_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_49_50_41_34_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_49_50_41_34_26_16_22_tsni(xs2);
        return append_inst_49_50_41_34_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_49_50_41_34_26_18_tsni = function bind_inst_49_50_41_34_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_34_26_18_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_34_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_34_26_18_9_tsni(tmp3)
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
map_inst_49_50_41_34_26_18_4_tsni = function map_inst_49_50_41_34_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
put_inst_49_50_41_34_26_19_tsni = function put_inst_49_50_41_34_26_19_tsni(s) {
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
      return runStateT_inst_49_50_41_34_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_49_50_41_34_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_49_50_41_34_26_18_9_tsni(xs1);
        return append_inst_49_50_41_34_26_18_9_10_tsni(x2, tmp2)
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
return__inst_49_50_41_34_26_20_tsni = function return__inst_49_50_41_34_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_49_50_41_34_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_49_50_41_34_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_49_50_41_34_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_49_50_41_34_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
bind_inst_49_50_41_34_26_21_tsni = function bind_inst_49_50_41_34_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_34_26_21_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_34_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_34_26_21_9_tsni(tmp3)
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
map_inst_49_50_41_34_26_21_4_tsni = function map_inst_49_50_41_34_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_49_50_41_34_26_16_22_tsni = function concat_inst_49_50_41_34_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_34_26_16_22_10_tsni = function append_inst_49_50_41_34_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_41_34_26_18_9_tsni = function concat_inst_49_50_41_34_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_34_26_18_9_10_tsni = function append_inst_49_50_41_34_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_49_50_41_34_26_23_tsni = function bind_inst_49_50_41_34_26_23_tsni(m, f) {
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
        return runStateT_inst_49_50_41_34_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_49_50_41_34_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_34_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_49_50_41_34_26_23_4_tsni = function map_inst_49_50_41_34_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_50_41_34_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_50_41_34_26_23_9_tsni(xs2);
      return append_inst_49_50_41_34_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_49_50_41_34_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_49_50_41_34_26_21_9_tsni = function concat_inst_49_50_41_34_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_34_26_21_9_10_tsni = function append_inst_49_50_41_34_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_41_34_26_23_9_tsni = function concat_inst_49_50_41_34_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_34_26_23_9_10_tsni = function append_inst_49_50_41_34_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_49_50_41_34_28_tsni = function return__inst_49_50_41_34_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_49_50_41_34_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_49_50_41_34_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
lookup_inst_49_50_41_34_25_tsni = function lookup_inst_49_50_41_34_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_49_50_41_34_26_tsni(c)
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
          return return__inst_49_50_41_34_28_tsni(r)
        }
      } else {
        return lookup_inst_49_50_41_34_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_49_50_41_35_tsni = function bind_inst_49_50_41_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_35_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_35_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_35_9_tsni(tmp3)
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
map_inst_49_50_41_35_4_tsni = function map_inst_49_50_41_35_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
guard_inst_49_50_41_36_tsni = function guard_inst_49_50_41_36_tsni(b) {
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
        return match_xs_arm_Nil_inst_49_50_41_35_4_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_49_50_41_35_4_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_49_50_41_35_9_tsni(xs1);
          return append_inst_49_50_41_35_9_10_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_49_50_41_35_57_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_49_50_41_35_4_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_49_50_41_35_57_tsni(s, _deforest_StateT_run1)
    }
  }
};
bind_inst_49_50_41_37_tsni = function bind_inst_49_50_41_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_37_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_37_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_37_9_tsni(tmp3)
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
map_inst_49_50_41_37_4_tsni = function map_inst_49_50_41_37_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_49_50_41_34_27_9_tsni = function concat_inst_49_50_41_34_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_34_27_9_10_tsni = function append_inst_49_50_41_34_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_41_35_9_tsni = function concat_inst_49_50_41_35_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_35_9_10_tsni = function append_inst_49_50_41_35_9_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_49_50_41_35_9_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_49_50_41_37_9_10_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_49_50_41_38_9_10_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_49_50_41_38_tsni = function bind_inst_49_50_41_38_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_49_50_41_38_57_tsni(m, s);
    tmp3 = map_inst_49_50_41_38_4_tsni(tmp1, tmp2);
    return concat_inst_49_50_41_38_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_49_50_41_38_4_tsni = function map_inst_49_50_41_38_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_49_50_41_32_9_tsni = function concat_inst_49_50_41_32_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_32_9_10_tsni = function append_inst_49_50_41_32_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_49_50_41_39_tsni = function return__inst_49_50_41_39_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_49_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_49_50_41_38_4_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_49_50_41_38_4_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_49_50_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_49_50_41_37_9_tsni = function concat_inst_49_50_41_37_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_41_37_9_10_tsni = function append_inst_49_50_41_37_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_49_50_41_43_tsni = function return__inst_49_50_41_43_tsni(a) {
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
        tmp = append_inst_49_50_42_44_10_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst_49_50_tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
testCryptarithm2_nofib_inst_51_52_tsni = function testCryptarithm2_nofib_inst_51_52_tsni(n) {
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
  return puzzle_inst_51_52_50_tsni(args, tmp14)
};
puzzle_inst_51_52_50_tsni = function puzzle_inst_51_52_50_tsni(top, bot) {
  let solution, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.map(NofibPrelude.reverse, top);
  tmp1 = NofibPrelude.transpose(tmp);
  tmp2 = NofibPrelude.reverse(bot);
  tmp3 = solve_inst_51_52_50_41_tsni(tmp1, tmp2, 0);
  solution = tmp3;
  tmp4 = NofibPrelude.enumFromTo(0, 9);
  tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
  scrut = execStateT_inst_51_52_50_42_tsni(solution, tmp5);
  return runtime.safeCall(scrut(top, bot))
};
solve_inst_51_52_50_41_tsni = function solve_inst_51_52_50_41_tsni(tops, bots, carry) {
  let scrut, param0, param1, bot, botss, param01, param11, top, tmp, tmp1, lambda, lambda1, lambda2, lambda3, lambda4;
  if (bots instanceof NofibPrelude.Cons.class) {
    param0 = bots.head;
    param1 = bots.tail;
    bot = param0;
    botss = param1;
    if (tops instanceof NofibPrelude.Nil.class) {
      tmp = return__inst_51_52_50_41_39_tsni(carry);
    } else if (tops instanceof NofibPrelude.Cons.class) {
      param01 = tops.head;
      param11 = tops.tail;
      top = param01;
      tmp1 = mapM_inst_51_52_50_41_31_tsni(select_inst_51_52_50_41_30_tsni, top);
      lambda = (undefined, function (topNS) {
        let tmp2, tmp3;
        tmp2 = NofibPrelude.sum(topNS);
        tmp3 = tmp2 + carry;
        return return__inst_51_52_50_41_33_tsni(tmp3)
      });
      tmp = bind_inst_51_52_50_41_32_tsni(tmp1, lambda);
    } else {
      throw new globalThis.Error("match error");
    }
    lambda1 = (undefined, function (topN) {
      let tmp2, tmp3, lambda5;
      tmp2 = select_inst_51_52_50_41_34_tsni(bot);
      lambda5 = (undefined, function (botN) {
        let tmp4, tmp5, tmp6, tmp7, lambda6;
        tmp4 = NofibPrelude.intMod(topN, 10);
        tmp5 = tmp4 === botN;
        tmp6 = guard_inst_51_52_50_41_36_tsni(tmp5);
        lambda6 = (undefined, function (_s) {
          let tmp8, tmp9;
          tmp8 = cryptarithm2.rest(tops);
          tmp9 = NofibPrelude.intDiv(topN, 10);
          return solve_inst_51_52_50_41_tsni(tmp8, botss, tmp9)
        });
        tmp7 = lambda6;
        return bind_inst_51_52_50_41_35_tsni(tmp6, tmp7)
      });
      tmp3 = lambda5;
      return bind_inst_51_52_50_41_37_tsni(tmp2, tmp3)
    });
    return bind_inst_51_52_50_41_38_tsni(tmp, lambda1)
  } else if (bots instanceof NofibPrelude.Nil.class) {
    if (tops instanceof NofibPrelude.Nil.class) {
      scrut = carry === 0;
      if (scrut === true) {
        return return__inst_51_52_50_41_43_tsni(cryptarithm2.Unit)
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
bind_inst_51_52_50_41_38_tsni = function bind_inst_51_52_50_41_38_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_38_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_38_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_38_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_51_52_50_41_38_4_tsni = function map_inst_51_52_50_41_38_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bind_inst_51_52_50_41_37_tsni = function bind_inst_51_52_50_41_37_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_37_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_37_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_37_9_tsni(tmp3)
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
map_inst_51_52_50_41_37_4_tsni = function map_inst_51_52_50_41_37_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_37_9_tsni = function concat_inst_51_52_50_41_37_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_37_9_10_tsni = function append_inst_51_52_50_41_37_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_51_52_50_41_35_tsni = function bind_inst_51_52_50_41_35_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_35_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_35_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_35_9_tsni(tmp3)
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
map_inst_51_52_50_41_35_4_tsni = function map_inst_51_52_50_41_35_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_35_9_tsni = function concat_inst_51_52_50_41_35_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_35_9_10_tsni = function append_inst_51_52_50_41_35_9_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_51_52_50_41_35_9_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_51_52_50_41_37_9_10_tsni(xs1, ys1);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = append_inst_51_52_50_41_38_9_10_tsni(xs1, ys2);
        return NofibPrelude.Cons(x, tmp)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
guard_inst_51_52_50_41_36_tsni = function guard_inst_51_52_50_41_36_tsni(b) {
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
        return match_xs_arm_Nil_inst_51_52_50_41_35_4_tsni(f)
      };
      return (f) => {
        let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        tmp = runtime.safeCall(f(x));
        tmp1 = map_inst_51_52_50_41_35_4_tsni(f, xs);
        _deforest_Cons_head1 = tmp;
        _deforest_Cons_tail1 = tmp1;
        return () => {
          let param01, param11, x1, xs1, tmp2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x1 = param01;
          xs1 = param11;
          tmp2 = concat_inst_51_52_50_41_35_9_tsni(xs1);
          return append_inst_51_52_50_41_35_9_10_tsni(x1, tmp2)
        }
      }
    });
    _deforest_StateT_run = lambda;
    return (s) => {
      return match_m_arm_StateT_inst_51_52_50_41_35_57_tsni(s, _deforest_StateT_run)
    }
  } else {
    lambda1 = (undefined, function (s) {
      return (f) => {
        return match_xs_arm_Nil_inst_51_52_50_41_35_4_tsni(f)
      }
    });
    _deforest_StateT_run1 = lambda1;
    return (s) => {
      return match_m_arm_StateT_inst_51_52_50_41_35_57_tsni(s, _deforest_StateT_run1)
    }
  }
};
select_inst_51_52_50_41_34_tsni = function select_inst_51_52_50_41_34_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_51_52_50_41_34_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_51_52_50_41_34_27_tsni(cryptarithm2.get, tmp)
};
lookup_inst_51_52_50_41_34_25_tsni = function lookup_inst_51_52_50_41_34_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_51_52_50_41_34_26_tsni(c)
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
          return return__inst_51_52_50_41_34_28_tsni(r)
        }
      } else {
        return lookup_inst_51_52_50_41_34_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_51_52_50_41_34_26_tsni = function permute_inst_51_52_50_41_34_26_tsni(c) {
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
        return foldl_inst_51_52_50_41_34_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_51_52_50_41_34_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_51_52_50_41_34_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_51_52_50_41_34_26_20_tsni(i)
        });
        return bind_inst_51_52_50_41_34_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_51_52_50_41_34_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_51_52_50_41_34_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_51_52_50_41_34_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_51_52_50_41_34_26_23_tsni(cryptarithm2.get, tmp)
};
bind_inst_51_52_50_41_34_26_23_tsni = function bind_inst_51_52_50_41_34_26_23_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_34_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_34_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_34_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_51_52_50_41_34_26_23_4_tsni = function map_inst_51_52_50_41_34_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_34_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_34_26_23_9_tsni(xs2);
      return append_inst_51_52_50_41_34_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_51_52_50_41_34_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_51_52_50_41_34_26_21_tsni = function bind_inst_51_52_50_41_34_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_34_26_21_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_34_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_34_26_21_9_tsni(tmp3)
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
map_inst_51_52_50_41_34_26_21_4_tsni = function map_inst_51_52_50_41_34_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_34_26_21_9_tsni = function concat_inst_51_52_50_41_34_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_34_26_21_9_10_tsni = function append_inst_51_52_50_41_34_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_51_52_50_41_34_26_18_tsni = function bind_inst_51_52_50_41_34_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_34_26_18_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_34_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_34_26_18_9_tsni(tmp3)
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
map_inst_51_52_50_41_34_26_18_4_tsni = function map_inst_51_52_50_41_34_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_34_26_18_9_tsni = function concat_inst_51_52_50_41_34_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_34_26_18_9_10_tsni = function append_inst_51_52_50_41_34_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_51_52_50_41_34_26_20_tsni = function return__inst_51_52_50_41_34_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_51_52_50_41_34_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_51_52_50_41_34_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_51_52_50_41_34_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_51_52_50_41_34_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
put_inst_51_52_50_41_34_26_19_tsni = function put_inst_51_52_50_41_34_26_19_tsni(s) {
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
      return runStateT_inst_51_52_50_41_34_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_51_52_50_41_34_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_51_52_50_41_34_26_18_9_tsni(xs1);
        return append_inst_51_52_50_41_34_26_18_9_10_tsni(x2, tmp2)
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
lift_inst_51_52_50_41_34_26_16_tsni = function lift_inst_51_52_50_41_34_26_16_tsni(ls) {
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
        return runStateT_inst_51_52_50_41_34_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_51_52_50_41_34_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_51_52_50_41_34_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_51_52_50_41_34_26_21_9_tsni(xs2);
            return append_inst_51_52_50_41_34_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_51_52_50_41_34_26_16_12_tsni(lambda1, ls);
    return concat_inst_51_52_50_41_34_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_51_52_50_41_34_26_16_12_tsni = function map_inst_51_52_50_41_34_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_34_26_16_22_tsni = function concat_inst_51_52_50_41_34_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_34_26_16_22_10_tsni = function append_inst_51_52_50_41_34_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_51_52_50_41_34_26_17_tsni = function map_inst_51_52_50_41_34_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_34_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_52_50_41_34_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_51_52_50_41_34_26_16_22_tsni(xs2);
        return append_inst_51_52_50_41_34_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_51_52_50_41_34_27_tsni = function bind_inst_51_52_50_41_34_27_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_34_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_34_27_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_34_27_9_tsni(tmp3)
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
map_inst_51_52_50_41_34_27_4_tsni = function map_inst_51_52_50_41_34_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_34_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_34_27_9_tsni(xs2);
      return append_inst_51_52_50_41_34_27_9_10_tsni(x1, tmp2)
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
return__inst_51_52_50_41_34_28_tsni = function return__inst_51_52_50_41_34_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_37_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_51_52_50_41_34_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_51_52_50_41_34_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_34_27_54_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_51_52_50_41_34_26_23_9_tsni = function concat_inst_51_52_50_41_34_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_34_26_23_9_10_tsni = function append_inst_51_52_50_41_34_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_51_52_50_41_34_27_9_tsni = function concat_inst_51_52_50_41_34_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_34_27_9_10_tsni = function append_inst_51_52_50_41_34_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_51_52_50_41_32_tsni = function bind_inst_51_52_50_41_32_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_32_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_32_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_32_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
map_inst_51_52_50_41_32_4_tsni = function map_inst_51_52_50_41_32_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_32_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_32_9_tsni(xs2);
      return append_inst_51_52_50_41_32_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_51_52_50_41_38_4_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_51_52_50_41_32_9_tsni = function concat_inst_51_52_50_41_32_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_32_9_10_tsni = function append_inst_51_52_50_41_32_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_51_52_50_41_33_tsni = function return__inst_51_52_50_41_33_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_51_52_50_41_32_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (f) => {
        return match_xs_arm_Cons_inst_51_52_50_41_38_4_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
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
mapM_inst_51_52_50_41_31_tsni = function mapM_inst_51_52_50_41_31_tsni(f, ls) {
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
        return return__inst_51_52_50_41_31_7_tsni(tmp2)
      });
      return bind_inst_51_52_50_41_31_6_tsni(r, lambda2)
    });
    return bind_inst_51_52_50_41_31_8_tsni(tmp1, lambda1)
  });
  return NofibPrelude.foldr(lambda, tmp, ls)
};
bind_inst_51_52_50_41_31_6_tsni = function bind_inst_51_52_50_41_31_6_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_31_6_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_31_6_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_31_6_9_tsni(tmp3)
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
map_inst_51_52_50_41_31_6_4_tsni = function map_inst_51_52_50_41_31_6_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_31_6_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_31_6_9_tsni(xs2);
      return append_inst_51_52_50_41_31_6_9_10_tsni(x1, tmp2)
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
return__inst_51_52_50_41_31_7_tsni = function return__inst_51_52_50_41_31_7_tsni(a) {
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
      tmp = append_inst_51_52_50_41_31_6_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_51_52_50_41_31_8_9_10_tsni(xs, ys1);
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
bind_inst_51_52_50_41_31_8_tsni = function bind_inst_51_52_50_41_31_8_tsni(m, f) {
  let tmp, lambda;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_31_8_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_31_8_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_31_8_9_tsni(tmp3)
  });
  tmp = lambda;
  return runtime.safeCall(cryptarithm2.StateT(tmp))
};
map_inst_51_52_50_41_31_8_4_tsni = function map_inst_51_52_50_41_31_8_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_31_6_9_tsni = function concat_inst_51_52_50_41_31_6_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_31_6_9_10_tsni = function append_inst_51_52_50_41_31_6_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
select_inst_51_52_50_41_30_tsni = function select_inst_51_52_50_41_30_tsni(c) {
  let tmp, lambda;
  lambda = (undefined, function (st) {
    let scrut, tmp1;
    tmp1 = cryptarithm2.digitEnv(st);
    scrut = lookup_inst_51_52_50_41_30_25_tsni(c, tmp1);
    return runtime.safeCall(scrut(c))
  });
  tmp = lambda;
  return bind_inst_51_52_50_41_30_27_tsni(cryptarithm2.get, tmp)
};
lookup_inst_51_52_50_41_30_25_tsni = function lookup_inst_51_52_50_41_30_25_tsni(k, t) {
  let param0, param1, first1, first0, x, v, t1, scrut, _deforest_Some_x;
  if (t instanceof NofibPrelude.Nil.class) {
    return (c) => {
      return permute_inst_51_52_50_41_30_26_tsni(c)
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
          return return__inst_51_52_50_41_30_28_tsni(r)
        }
      } else {
        return lookup_inst_51_52_50_41_30_25_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
permute_inst_51_52_50_41_30_26_tsni = function permute_inst_51_52_50_41_30_26_tsni(c) {
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
        return foldl_inst_51_52_50_41_30_26_55_56_tsni(f, tmp8, t)
      };
      tmp7 = listDiff_inst_51_52_50_41_30_26_55_tsni(xs, tmp6);
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
        tmp11 = put_inst_51_52_50_41_30_26_19_tsni(tmp10);
        lambda3 = (undefined, function (_p) {
          return return__inst_51_52_50_41_30_26_20_tsni(i)
        });
        return bind_inst_51_52_50_41_30_26_18_tsni(tmp11, lambda3)
      };
      return arr
    });
    tmp2 = lambda1;
    tmp3 = map_inst_51_52_50_41_30_26_17_tsni(tmp2, xs);
    tmp4 = lift_inst_51_52_50_41_30_26_16_tsni(tmp3);
    lambda2 = (undefined, function (iis) {
      return runtime.safeCall(iis(c, st))
    });
    tmp5 = lambda2;
    return bind_inst_51_52_50_41_30_26_21_tsni(tmp4, tmp5)
  });
  tmp = lambda;
  return bind_inst_51_52_50_41_30_26_23_tsni(cryptarithm2.get, tmp)
};
bind_inst_51_52_50_41_30_26_23_tsni = function bind_inst_51_52_50_41_30_26_23_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_30_26_23_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_30_26_23_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_30_26_23_9_tsni(tmp3)
  });
  tmp = lambda;
  _deforest_StateT_run = tmp;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
map_inst_51_52_50_41_30_26_23_4_tsni = function map_inst_51_52_50_41_30_26_23_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_30_26_23_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_30_26_23_9_tsni(xs2);
      return append_inst_51_52_50_41_30_26_23_9_10_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return match_xs_arm_Nil_inst_51_52_50_41_30_27_9_10_tsni(ys)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
bind_inst_51_52_50_41_30_26_21_tsni = function bind_inst_51_52_50_41_30_26_21_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_30_26_21_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_30_26_21_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_30_26_21_9_tsni(tmp3)
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
map_inst_51_52_50_41_30_26_21_4_tsni = function map_inst_51_52_50_41_30_26_21_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_30_26_21_9_tsni = function concat_inst_51_52_50_41_30_26_21_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_30_26_21_9_10_tsni = function append_inst_51_52_50_41_30_26_21_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
bind_inst_51_52_50_41_30_26_18_tsni = function bind_inst_51_52_50_41_30_26_18_tsni(m, f) {
  let tmp, lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let tmp1, tmp2, tmp3, lambda1;
    lambda1 = (undefined, function (caseScrut) {
      return runtime.safeCall(caseScrut(f))
    });
    tmp1 = lambda1;
    tmp2 = runStateT_inst_51_52_50_41_30_26_18_57_tsni(m, s);
    tmp3 = map_inst_51_52_50_41_30_26_18_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_30_26_18_9_tsni(tmp3)
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
map_inst_51_52_50_41_30_26_18_4_tsni = function map_inst_51_52_50_41_30_26_18_4_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_30_26_18_9_tsni = function concat_inst_51_52_50_41_30_26_18_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_30_26_18_9_10_tsni = function append_inst_51_52_50_41_30_26_18_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_51_52_50_41_30_26_20_tsni = function return__inst_51_52_50_41_30_26_20_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
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
      tmp = append_inst_51_52_50_41_30_26_18_9_10_tsni(xs, ys);
      _deforest_Cons_head1 = x;
      _deforest_Cons_tail1 = tmp;
      return (ys1) => {
        let _deforest_Cons_head2, _deforest_Cons_tail2;
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs = param1;
        tmp = append_inst_51_52_50_41_30_26_21_9_10_tsni(xs, ys1);
        _deforest_Cons_head2 = x;
        _deforest_Cons_tail2 = tmp;
        return (ys2) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param0 = _deforest_Cons_head2;
          param1 = _deforest_Cons_tail2;
          x = param0;
          xs = param1;
          tmp = append_inst_51_52_50_41_30_26_23_9_10_tsni(xs, ys2);
          _deforest_Cons_head3 = x;
          _deforest_Cons_tail3 = tmp;
          return (ys3) => {
            return match_xs_arm_Cons_inst_51_52_50_41_30_27_9_10_tsni(ys3, _deforest_Cons_head3, _deforest_Cons_tail3)
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
put_inst_51_52_50_41_30_26_19_tsni = function put_inst_51_52_50_41_30_26_19_tsni(s) {
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
      return runStateT_inst_51_52_50_41_30_26_18_54_tsni(tmp, ss)
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
      tmp1 = map_inst_51_52_50_41_30_26_18_4_tsni(f, xs);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x2, xs1, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp2 = concat_inst_51_52_50_41_30_26_18_9_tsni(xs1);
        return append_inst_51_52_50_41_30_26_18_9_10_tsni(x2, tmp2)
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
lift_inst_51_52_50_41_30_26_16_tsni = function lift_inst_51_52_50_41_30_26_16_tsni(ls) {
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
        return runStateT_inst_51_52_50_41_30_26_21_54_tsni(tmp1, ss)
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
        tmp1 = append_inst_51_52_50_41_30_26_16_22_10_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp1;
        return (f) => {
          let param01, param11, x2, xs1, tmp2, tmp3, _deforest_Cons_head2, _deforest_Cons_tail2;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          x2 = param01;
          xs1 = param11;
          tmp2 = runtime.safeCall(f(x2));
          tmp3 = map_inst_51_52_50_41_30_26_21_4_tsni(f, xs1);
          _deforest_Cons_head2 = tmp2;
          _deforest_Cons_tail2 = tmp3;
          return () => {
            let param02, param12, x3, xs2, tmp4;
            param02 = _deforest_Cons_head2;
            param12 = _deforest_Cons_tail2;
            x3 = param02;
            xs2 = param12;
            tmp4 = concat_inst_51_52_50_41_30_26_21_9_tsni(xs2);
            return append_inst_51_52_50_41_30_26_21_9_10_tsni(x3, tmp4)
          }
        }
      }
    });
    tmp = map_inst_51_52_50_41_30_26_16_12_tsni(lambda1, ls);
    return concat_inst_51_52_50_41_30_26_16_22_tsni(tmp)
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    let param0, run;
    param0 = _deforest_StateT_run;
    run = param0;
    return runtime.safeCall(run(s))
  }
};
map_inst_51_52_50_41_30_26_16_12_tsni = function map_inst_51_52_50_41_30_26_16_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_51_52_50_41_30_26_16_22_tsni = function concat_inst_51_52_50_41_30_26_16_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_30_26_16_22_10_tsni = function append_inst_51_52_50_41_30_26_16_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_51_52_50_41_30_26_17_tsni = function map_inst_51_52_50_41_30_26_17_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_30_26_17_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_52_50_41_30_26_16_12_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_51_52_50_41_30_26_16_22_tsni(xs2);
        return append_inst_51_52_50_41_30_26_16_22_10_tsni(x1, tmp2)
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
bind_inst_51_52_50_41_30_27_tsni = function bind_inst_51_52_50_41_30_27_tsni(m, f) {
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
        return runStateT_inst_51_52_50_41_30_27_54_tsni(tmp4, ss)
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp1 = lambda1;
    tmp2 = cryptarithm2.runStateT(m, s);
    tmp3 = map_inst_51_52_50_41_30_27_4_tsni(tmp1, tmp2);
    return concat_inst_51_52_50_41_30_27_9_tsni(tmp3)
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
map_inst_51_52_50_41_30_27_4_tsni = function map_inst_51_52_50_41_30_27_4_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_41_30_27_4_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_41_30_27_9_tsni(xs2);
      return append_inst_51_52_50_41_30_27_9_10_tsni(x1, tmp2)
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
return__inst_51_52_50_41_30_28_tsni = function return__inst_51_52_50_41_30_28_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_31_8_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (ys) => {
      return match_xs_arm_Nil_inst_51_52_50_41_30_27_9_10_tsni(ys)
    };
    return (ys) => {
      return match_xs_arm_Cons_inst_51_52_50_41_30_27_9_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_30_27_54_tsni(s, _deforest_StateT_run)
  }
};
concat_inst_51_52_50_41_30_26_23_9_tsni = function concat_inst_51_52_50_41_30_26_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_30_26_23_9_10_tsni = function append_inst_51_52_50_41_30_26_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_51_52_50_41_30_27_9_tsni = function concat_inst_51_52_50_41_30_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_41_30_27_9_10_tsni = function append_inst_51_52_50_41_30_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
return__inst_51_52_50_41_39_tsni = function return__inst_51_52_50_41_39_tsni(a) {
  let lambda, _deforest_StateT_run;
  lambda = (undefined, function (s) {
    let arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    _deforest_Deforest_Arr_2_0 = a;
    _deforest_Deforest_Arr_2_1 = s;
    arr = (f) => {
      return match_caseScrut_arm_Deforest_Arr_2_inst_51_52_50_41_38_tsni(f, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = (f) => {
      return match_xs_arm_Nil_inst_51_52_50_41_38_4_tsni(f)
    };
    return (f) => {
      return match_xs_arm_Cons_inst_51_52_50_41_38_4_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  });
  _deforest_StateT_run = lambda;
  return (s) => {
    return match_m_arm_StateT_inst_51_52_50_41_38_57_tsni(s, _deforest_StateT_run)
  }
};
execStateT_inst_51_52_50_42_tsni = function execStateT_inst_51_52_50_42_tsni(m, s) {
  let tmp, tmp1, tmp2, lambda;
  lambda = (undefined, function (caseScrut) {
    return runtime.safeCall(caseScrut())
  });
  tmp = lambda;
  tmp1 = cryptarithm2.runStateT(m, s);
  tmp2 = map_inst_51_52_50_42_14_tsni(tmp, tmp1);
  return concat_inst_51_52_50_42_44_tsni(tmp2)
};
map_inst_51_52_50_42_14_tsni = function map_inst_51_52_50_42_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_42_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_51_52_50_42_44_tsni(xs2);
      return append_inst_51_52_50_42_44_10_tsni(x1, tmp2)
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
return__inst_51_52_50_41_43_tsni = function return__inst_51_52_50_41_43_tsni(a) {
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
        tmp = append_inst_51_52_50_42_44_10_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp;
        return (top, bot) => {
          let param01, param11, a2, tmp1;
          param01 = _deforest_Cons_head1;
          param11 = _deforest_Cons_tail1;
          a2 = param01;
          tmp1 = a2;
          return match_scrut_rest_inst_51_52_50_tsni(top, bot, tmp1)
        }
      }
    };
    return NofibPrelude.Cons(arr, NofibPrelude.Nil)
  });
  return runtime.safeCall(cryptarithm2.StateT(lambda))
};
concat_inst_51_52_50_42_44_tsni = function concat_inst_51_52_50_42_44_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_42_44_10_tsni = function append_inst_51_52_50_42_44_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lookup_inst_51_52_50_45_tsni = function lookup_inst_51_52_50_45_tsni(k, t) {
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
        return lookup_inst_51_52_50_45_tsni(k, t1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_51_52_50_46_tsni = function concat_inst_51_52_50_46_tsni(ls) {
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
    tmp = concat_inst_51_52_50_46_tsni(xs);
    return append_inst_51_52_50_46_10_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_51_52_50_46_10_tsni = function append_inst_51_52_50_46_10_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_51_52_50_46_10_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_51_52_50_59_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
unlines_inst_51_52_50_47_tsni = function unlines_inst_51_52_50_47_tsni(ls) {
  let tmp, lambda;
  lambda = (undefined, function (x) {
    let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Cons_head = "\n";
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_51_52_50_47_53_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return append_inst_51_52_50_47_2_tsni(x, tmp1)
  });
  tmp = map_inst_51_52_50_47_1_tsni(lambda, ls);
  return concat_inst_51_52_50_47_53_tsni(tmp)
};
map_inst_51_52_50_47_1_tsni = function map_inst_51_52_50_47_1_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_51_52_50_47_2_tsni = function append_inst_51_52_50_47_2_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_51_52_50_47_2_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_51_52_50_47_53_10_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_51_52_50_48_tsni = function map_inst_51_52_50_48_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_52_50_48_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_51_52_50_47_1_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_51_52_50_47_53_tsni(xs2);
        return append_inst_51_52_50_47_53_10_tsni(x1, tmp2)
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
concat_inst_0_53_tsni = function concat_inst_0_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_53_10_tsni = function append_inst_0_53_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_3_9_tsni = function concat_inst_3_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_5_6_54_tsni = function runStateT_inst_5_6_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_5_8_9_tsni = function concat_inst_5_8_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_5_8_54_tsni = function runStateT_inst_5_8_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_5_8_9_10_tsni = function append_inst_5_8_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_11_22_tsni = function concat_inst_11_22_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_11_22_10_tsni = function append_inst_11_22_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_13_44_tsni = function concat_inst_13_44_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_13_44_10_tsni = function append_inst_13_44_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listDiff_inst_15_55_tsni = function listDiff_inst_15_55_tsni(a, ls) {
  return foldl_inst_15_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_15_55_56_tsni = function foldl_inst_15_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_15_18_57_tsni = function runStateT_inst_15_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_15_18_54_tsni = function runStateT_inst_15_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_15_21_57_tsni = function runStateT_inst_15_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_15_21_54_tsni = function runStateT_inst_15_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_15_23_9_tsni = function concat_inst_15_23_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_15_23_54_tsni = function runStateT_inst_15_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_15_23_9_10_tsni = function append_inst_15_23_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_24_26_23_54_tsni = function runStateT_inst_24_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_24_26_21_54_tsni = function runStateT_inst_24_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_24_26_18_54_tsni = function runStateT_inst_24_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_24_26_18_57_tsni = function runStateT_inst_24_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_24_26_21_57_tsni = function runStateT_inst_24_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_24_26_55_tsni = function listDiff_inst_24_26_55_tsni(a, ls) {
  return foldl_inst_24_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_24_26_55_56_tsni = function foldl_inst_24_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
concat_inst_24_27_9_tsni = function concat_inst_24_27_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_24_27_54_tsni = function runStateT_inst_24_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_24_27_9_10_tsni = function append_inst_24_27_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
listDiff_inst_29_30_26_55_tsni = function listDiff_inst_29_30_26_55_tsni(a, ls) {
  return foldl_inst_29_30_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_29_30_26_55_56_tsni = function foldl_inst_29_30_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_29_30_26_18_57_tsni = function runStateT_inst_29_30_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_30_26_18_54_tsni = function runStateT_inst_29_30_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_30_26_21_57_tsni = function runStateT_inst_29_30_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_30_26_21_54_tsni = function runStateT_inst_29_30_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_30_26_23_54_tsni = function runStateT_inst_29_30_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_30_27_54_tsni = function runStateT_inst_29_30_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_29_31_8_9_tsni = function concat_inst_29_31_8_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_29_31_8_54_tsni = function runStateT_inst_29_31_8_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_29_31_8_9_10_tsni = function append_inst_29_31_8_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_29_31_6_54_tsni = function runStateT_inst_29_31_6_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_31_8_57_tsni = function runStateT_inst_29_31_8_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_32_54_tsni = function runStateT_inst_29_32_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_29_34_26_55_tsni = function listDiff_inst_29_34_26_55_tsni(a, ls) {
  return foldl_inst_29_34_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_29_34_26_55_56_tsni = function foldl_inst_29_34_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_29_34_26_18_57_tsni = function runStateT_inst_29_34_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_34_26_18_54_tsni = function runStateT_inst_29_34_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_34_26_21_57_tsni = function runStateT_inst_29_34_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_34_26_21_54_tsni = function runStateT_inst_29_34_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_34_26_23_54_tsni = function runStateT_inst_29_34_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_34_27_54_tsni = function runStateT_inst_29_34_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_35_57_tsni = function runStateT_inst_29_35_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_37_57_tsni = function runStateT_inst_29_37_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_37_54_tsni = function runStateT_inst_29_37_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_29_38_9_tsni = function concat_inst_29_38_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_29_38_57_tsni = function runStateT_inst_29_38_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_29_38_54_tsni = function runStateT_inst_29_38_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_29_38_9_10_tsni = function append_inst_29_38_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_40_41_38_9_tsni = function concat_inst_40_41_38_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_40_41_38_54_tsni = function runStateT_inst_40_41_38_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_40_41_38_9_10_tsni = function append_inst_40_41_38_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_40_41_37_54_tsni = function runStateT_inst_40_41_37_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_35_57_tsni = function runStateT_inst_40_41_35_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_34_26_23_54_tsni = function runStateT_inst_40_41_34_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_34_26_21_54_tsni = function runStateT_inst_40_41_34_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_34_26_18_54_tsni = function runStateT_inst_40_41_34_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_34_26_18_57_tsni = function runStateT_inst_40_41_34_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_34_26_21_57_tsni = function runStateT_inst_40_41_34_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_40_41_34_26_55_tsni = function listDiff_inst_40_41_34_26_55_tsni(a, ls) {
  return foldl_inst_40_41_34_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_40_41_34_26_55_56_tsni = function foldl_inst_40_41_34_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_40_41_34_27_54_tsni = function runStateT_inst_40_41_34_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_37_57_tsni = function runStateT_inst_40_41_37_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_38_57_tsni = function runStateT_inst_40_41_38_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_32_54_tsni = function runStateT_inst_40_41_32_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_31_6_54_tsni = function runStateT_inst_40_41_31_6_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_40_41_31_8_9_tsni = function concat_inst_40_41_31_8_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_40_41_31_8_54_tsni = function runStateT_inst_40_41_31_8_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_40_41_31_8_9_10_tsni = function append_inst_40_41_31_8_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_40_41_30_26_23_54_tsni = function runStateT_inst_40_41_30_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_30_26_21_54_tsni = function runStateT_inst_40_41_30_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_30_26_18_54_tsni = function runStateT_inst_40_41_30_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_30_26_18_57_tsni = function runStateT_inst_40_41_30_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_30_26_21_57_tsni = function runStateT_inst_40_41_30_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_40_41_30_26_55_tsni = function listDiff_inst_40_41_30_26_55_tsni(a, ls) {
  return foldl_inst_40_41_30_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_40_41_30_26_55_56_tsni = function foldl_inst_40_41_30_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_40_41_30_27_54_tsni = function runStateT_inst_40_41_30_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_40_41_31_8_57_tsni = function runStateT_inst_40_41_31_8_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
fromSome_inst_40_58_tsni = function fromSome_inst_40_58_tsni(s) {
  return runtime.safeCall(s())
};
append_inst_40_59_tsni = function append_inst_40_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_40_47_53_tsni = function concat_inst_40_47_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_40_47_53_10_tsni = function append_inst_40_47_53_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_49_50_47_53_tsni = function concat_inst_49_50_47_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_50_47_53_10_tsni = function append_inst_49_50_47_53_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_49_50_59_tsni = function append_inst_49_50_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
fromSome_inst_49_50_58_tsni = function fromSome_inst_49_50_58_tsni(s) {
  return runtime.safeCall(s())
};
listDiff_inst_49_50_41_30_26_55_tsni = function listDiff_inst_49_50_41_30_26_55_tsni(a, ls) {
  return foldl_inst_49_50_41_30_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_49_50_41_30_26_55_56_tsni = function foldl_inst_49_50_41_30_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_49_50_41_30_26_18_57_tsni = function runStateT_inst_49_50_41_30_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_30_26_18_54_tsni = function runStateT_inst_49_50_41_30_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_30_26_21_57_tsni = function runStateT_inst_49_50_41_30_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_30_26_21_54_tsni = function runStateT_inst_49_50_41_30_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_30_26_23_54_tsni = function runStateT_inst_49_50_41_30_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_30_27_54_tsni = function runStateT_inst_49_50_41_30_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_49_50_41_31_8_9_tsni = function concat_inst_49_50_41_31_8_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_49_50_41_31_8_54_tsni = function runStateT_inst_49_50_41_31_8_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_49_50_41_31_8_9_10_tsni = function append_inst_49_50_41_31_8_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_49_50_41_31_6_54_tsni = function runStateT_inst_49_50_41_31_6_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_31_8_57_tsni = function runStateT_inst_49_50_41_31_8_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_32_54_tsni = function runStateT_inst_49_50_41_32_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_49_50_41_34_26_55_tsni = function listDiff_inst_49_50_41_34_26_55_tsni(a, ls) {
  return foldl_inst_49_50_41_34_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_49_50_41_34_26_55_56_tsni = function foldl_inst_49_50_41_34_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_49_50_41_34_26_18_57_tsni = function runStateT_inst_49_50_41_34_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_34_26_18_54_tsni = function runStateT_inst_49_50_41_34_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_34_26_21_57_tsni = function runStateT_inst_49_50_41_34_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_34_26_21_54_tsni = function runStateT_inst_49_50_41_34_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_34_26_23_54_tsni = function runStateT_inst_49_50_41_34_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_34_27_54_tsni = function runStateT_inst_49_50_41_34_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_35_57_tsni = function runStateT_inst_49_50_41_35_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_37_57_tsni = function runStateT_inst_49_50_41_37_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_37_54_tsni = function runStateT_inst_49_50_41_37_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_49_50_41_38_9_tsni = function concat_inst_49_50_41_38_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_49_50_41_38_57_tsni = function runStateT_inst_49_50_41_38_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_49_50_41_38_54_tsni = function runStateT_inst_49_50_41_38_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_49_50_41_38_9_10_tsni = function append_inst_49_50_41_38_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_51_52_50_41_38_9_tsni = function concat_inst_51_52_50_41_38_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_51_52_50_41_38_54_tsni = function runStateT_inst_51_52_50_41_38_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_51_52_50_41_38_9_10_tsni = function append_inst_51_52_50_41_38_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_51_52_50_41_37_54_tsni = function runStateT_inst_51_52_50_41_37_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_35_57_tsni = function runStateT_inst_51_52_50_41_35_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_34_26_23_54_tsni = function runStateT_inst_51_52_50_41_34_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_34_26_21_54_tsni = function runStateT_inst_51_52_50_41_34_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_34_26_18_54_tsni = function runStateT_inst_51_52_50_41_34_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_34_26_18_57_tsni = function runStateT_inst_51_52_50_41_34_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_34_26_21_57_tsni = function runStateT_inst_51_52_50_41_34_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_51_52_50_41_34_26_55_tsni = function listDiff_inst_51_52_50_41_34_26_55_tsni(a, ls) {
  return foldl_inst_51_52_50_41_34_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_51_52_50_41_34_26_55_56_tsni = function foldl_inst_51_52_50_41_34_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_51_52_50_41_34_27_54_tsni = function runStateT_inst_51_52_50_41_34_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_37_57_tsni = function runStateT_inst_51_52_50_41_37_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_38_57_tsni = function runStateT_inst_51_52_50_41_38_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_32_54_tsni = function runStateT_inst_51_52_50_41_32_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_31_6_54_tsni = function runStateT_inst_51_52_50_41_31_6_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
concat_inst_51_52_50_41_31_8_9_tsni = function concat_inst_51_52_50_41_31_8_9_tsni(ls) {
  return runtime.safeCall(ls())
};
runStateT_inst_51_52_50_41_31_8_54_tsni = function runStateT_inst_51_52_50_41_31_8_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
append_inst_51_52_50_41_31_8_9_10_tsni = function append_inst_51_52_50_41_31_8_9_10_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
runStateT_inst_51_52_50_41_30_26_23_54_tsni = function runStateT_inst_51_52_50_41_30_26_23_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_30_26_21_54_tsni = function runStateT_inst_51_52_50_41_30_26_21_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_30_26_18_54_tsni = function runStateT_inst_51_52_50_41_30_26_18_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_30_26_18_57_tsni = function runStateT_inst_51_52_50_41_30_26_18_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_30_26_21_57_tsni = function runStateT_inst_51_52_50_41_30_26_21_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
listDiff_inst_51_52_50_41_30_26_55_tsni = function listDiff_inst_51_52_50_41_30_26_55_tsni(a, ls) {
  return foldl_inst_51_52_50_41_30_26_55_56_tsni(cryptarithm2.delete_, a, ls)
};
foldl_inst_51_52_50_41_30_26_55_56_tsni = function foldl_inst_51_52_50_41_30_26_55_56_tsni(f, a, xs) {
  return runtime.safeCall(xs(f, a))
};
runStateT_inst_51_52_50_41_30_27_54_tsni = function runStateT_inst_51_52_50_41_30_27_54_tsni(m, s) {
  return runtime.safeCall(m(s))
};
runStateT_inst_51_52_50_41_31_8_57_tsni = function runStateT_inst_51_52_50_41_31_8_57_tsni(m, s) {
  return runtime.safeCall(m(s))
};
fromSome_inst_51_52_50_58_tsni = function fromSome_inst_51_52_50_58_tsni(s) {
  return runtime.safeCall(s())
};
append_inst_51_52_50_59_tsni = function append_inst_51_52_50_59_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_51_52_50_47_53_tsni = function concat_inst_51_52_50_47_53_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_51_52_50_47_53_10_tsni = function append_inst_51_52_50_47_53_10_tsni(xs, ys) {
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
      let tmp1, _deforest_Cons_head, _deforest_Cons_tail;
      _deforest_Cons_head = "\n";
      _deforest_Cons_tail = (ys) => {
        return ys
      };
      tmp1 = (ys) => {
        return match_xs_arm_Cons_inst_0_53_10_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return append_inst_0_2_tsni(x, tmp1)
    });
    tmp = map_inst_0_1_tsni(lambda, ls);
    return concat_inst_0_53_tsni(tmp)
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
      tmp3 = map_inst_3_4_tsni(tmp1, tmp2);
      return concat_inst_3_9_tsni(tmp3)
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
          return return__inst_5_7_tsni(tmp2)
        });
        return bind_inst_5_6_tsni(r, lambda2)
      });
      return bind_inst_5_8_tsni(tmp1, lambda1)
    });
    return NofibPrelude.foldr(lambda, tmp, ls2)
  } 
  static lift(ls3) {
    let lambda;
    lambda = (undefined, function (s1) {
      let tmp, lambda1;
      lambda1 = (undefined, function (x) {
        let arr, _deforest_Cons_head, _deforest_Cons_tail;
        arr = [
          x,
          s1
        ];
        _deforest_Cons_head = arr;
        _deforest_Cons_tail = (ys) => {
          return ys
        };
        return (ys) => {
          let param0, param1, x1, xs1, tmp1;
          param0 = _deforest_Cons_head;
          param1 = _deforest_Cons_tail;
          x1 = param0;
          xs1 = param1;
          tmp1 = append_inst_11_22_10_tsni(xs1, ys);
          return NofibPrelude.Cons(x1, tmp1)
        }
      });
      tmp = map_inst_11_12_tsni(lambda1, ls3);
      return concat_inst_11_22_tsni(tmp)
    });
    return runtime.safeCall(cryptarithm2.StateT(lambda))
  } 
  static execStateT(m2, s1) {
    let tmp, tmp1, tmp2, lambda;
    lambda = (undefined, function (caseScrut) {
      let first1, first0, a2, s2, _deforest_Cons_head, _deforest_Cons_tail;
      if (globalThis.Array.isArray(caseScrut) && caseScrut.length === 2) {
        first0 = caseScrut[0];
        first1 = caseScrut[1];
        a2 = first0;
        s2 = first1;
        _deforest_Cons_head = s2;
        _deforest_Cons_tail = (ys) => {
          return ys
        };
        return (ys) => {
          let param0, param1, x, xs1, tmp3;
          param0 = _deforest_Cons_head;
          param1 = _deforest_Cons_tail;
          x = param0;
          xs1 = param1;
          tmp3 = append_inst_13_44_10_tsni(xs1, ys);
          return NofibPrelude.Cons(x, tmp3)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    });
    tmp = lambda;
    tmp1 = cryptarithm2.runStateT(m2, s1);
    tmp2 = map_inst_13_14_tsni(tmp, tmp1);
    return concat_inst_13_44_tsni(tmp2)
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
        let tmp6, tmp7, arr, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (f2, a2) => {
          return a2
        };
        tmp6 = (f2, a2) => {
          let param0, param1, h, t1, tmp8;
          param0 = _deforest_Cons_head;
          param1 = _deforest_Cons_tail;
          h = param0;
          t1 = param1;
          tmp8 = runtime.safeCall(f2(a2, h));
          return foldl_inst_15_55_56_tsni(f2, tmp8, t1)
        };
        tmp7 = listDiff_inst_15_55_tsni(xs1, tmp6);
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
          tmp11 = put_inst_15_19_tsni(tmp10);
          lambda3 = (undefined, function (_p) {
            return return__inst_15_20_tsni(i)
          });
          return bind_inst_15_18_tsni(tmp11, lambda3)
        };
        return arr
      });
      tmp2 = lambda1;
      tmp3 = map_inst_15_17_tsni(tmp2, xs1);
      tmp4 = lift_inst_15_16_tsni(tmp3);
      lambda2 = (undefined, function (iis) {
        return runtime.safeCall(iis(c, st))
      });
      tmp5 = lambda2;
      return bind_inst_15_21_tsni(tmp4, tmp5)
    });
    tmp = lambda;
    return bind_inst_15_23_tsni(cryptarithm2.get, tmp)
  } 
  static select(c1) {
    let tmp, lambda;
    lambda = (undefined, function (st) {
      let scrut, tmp1;
      tmp1 = cryptarithm2.digitEnv(st);
      scrut = lookup_inst_24_25_tsni(c1, tmp1);
      return runtime.safeCall(scrut(c1))
    });
    tmp = lambda;
    return bind_inst_24_27_tsni(cryptarithm2.get, tmp)
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
        tmp = return__inst_29_39_tsni(carry);
      } else if (tops instanceof NofibPrelude.Cons.class) {
        param01 = tops.head;
        param11 = tops.tail;
        top = param01;
        tmp1 = mapM_inst_29_31_tsni(select_inst_29_30_tsni, top);
        lambda = (undefined, function (topNS) {
          let tmp2, tmp3;
          tmp2 = NofibPrelude.sum(topNS);
          tmp3 = tmp2 + carry;
          return return__inst_29_33_tsni(tmp3)
        });
        tmp = bind_inst_29_32_tsni(tmp1, lambda);
      } else {
        throw new globalThis.Error("match error");
      }
      lambda1 = (undefined, function (topN) {
        let tmp2, tmp3, lambda5;
        tmp2 = select_inst_29_34_tsni(bot);
        lambda5 = (undefined, function (botN) {
          let tmp4, tmp5, tmp6, tmp7, lambda6;
          tmp4 = NofibPrelude.intMod(topN, 10);
          tmp5 = tmp4 === botN;
          tmp6 = guard_inst_29_36_tsni(tmp5);
          lambda6 = (undefined, function (_s) {
            let tmp8, tmp9;
            tmp8 = cryptarithm2.rest(tops);
            tmp9 = NofibPrelude.intDiv(topN, 10);
            return cryptarithm2.solve(tmp8, botss, tmp9)
          });
          tmp7 = lambda6;
          return bind_inst_29_35_tsni(tmp6, tmp7)
        });
        tmp3 = lambda5;
        return bind_inst_29_37_tsni(tmp2, tmp3)
      });
      return bind_inst_29_38_tsni(tmp, lambda1)
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
    tmp3 = solve_inst_40_41_tsni(tmp1, tmp2, 0);
    solution = tmp3;
    tmp4 = NofibPrelude.enumFromTo(0, 9);
    tmp5 = cryptarithm2.Digits(tmp4, NofibPrelude.Nil);
    scrut = execStateT_inst_40_42_tsni(solution, tmp5);
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
    return puzzle_inst_49_50_tsni(args, tmp14)
  } 
  static main() {
    let tmp;
    tmp = testCryptarithm2_nofib_inst_51_52_tsni(1);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return "cryptarithm2"; }
});
let cryptarithm2 = cryptarithm21; export default cryptarithm2;
