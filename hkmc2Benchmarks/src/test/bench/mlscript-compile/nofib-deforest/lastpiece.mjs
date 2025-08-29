const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let go, lscomp2, lscomp1, row, sq, put, annTxt, lay, lay2, lay1, lay3, get, get1, lastpiece1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$, lambda$1, lambda$2, lambda$3, lscomp1$, lscomp2$, row$, lambda$4, sq$, annTxt$, lay$, lay$1, lay1$, lay2$, check_inst_0_1_tsni, mapLookup_inst_0_1_2_tsni, compareIntInt_inst_0_1_2_3_tsni, sq$_inst_4_5_tsni, check_inst_4_5_1_tsni, mapLookup_inst_4_5_1_2_tsni, compareIntInt_inst_4_5_1_2_3_tsni, sq$_inst_6_7_tsni, check_inst_6_7_1_tsni, mapLookup_inst_6_7_1_2_tsni, compareIntInt_inst_6_7_1_2_3_tsni, lambda$_inst_8_9_tsni, sq$_inst_8_9_7_tsni, check_inst_8_9_7_1_tsni, mapLookup_inst_8_9_7_1_2_tsni, compareIntInt_inst_8_9_7_1_2_3_tsni, lambda_inst_10_11_tsni, lambda$_inst_10_11_9_tsni, sq$_inst_10_11_9_7_tsni, check_inst_10_11_9_7_1_tsni, mapLookup_inst_10_11_9_7_1_2_tsni, compareIntInt_inst_10_11_9_7_1_2_3_tsni, enumFromTo_inst_10_12_tsni, hcat_inst_10_13_tsni, reduceHoriz_inst_10_13_14_tsni, eliminateEmpty_inst_10_13_14_15_tsni, map_inst_10_16_tsni, row$_inst_17_18_tsni, hcat_inst_17_18_13_tsni, reduceHoriz_inst_17_18_13_14_tsni, eliminateEmpty_inst_17_18_13_14_15_tsni, map_inst_17_18_16_tsni, lambda_inst_17_18_11_tsni, lambda$_inst_17_18_11_9_tsni, sq$_inst_17_18_11_9_7_tsni, check_inst_17_18_11_9_7_1_tsni, mapLookup_inst_17_18_11_9_7_1_2_tsni, compareIntInt_inst_17_18_11_9_7_1_2_3_tsni, enumFromTo_inst_17_18_12_tsni, search_inst_19_tsni, lambda_inst_19_tsni, tryy_inst_19_tsni, check_inst_19_20_tsni, mapLookup_inst_19_20_2_tsni, compareIntInt_inst_19_20_2_3_tsni, pickOne_inst_19_21_tsni, go_inst_19_21_22_tsni, fit_inst_19_23_tsni, extend_maybe_inst_19_23_24_tsni, check_inst_19_23_24_25_tsni, mapLookup_inst_19_23_24_25_2_tsni, compareIntInt_inst_19_23_24_25_2_3_tsni, extend_inst_19_23_24_26_tsni, insert_inst_19_23_24_26_27_tsni, compareIntInt_inst_19_23_24_26_27_28_tsni, extend_inst_19_23_29_tsni, insert_inst_19_23_29_27_tsni, compareIntInt_inst_19_23_29_27_28_tsni, lscomp1$_inst_19_30_tsni, lscomp2$_inst_19_30_tsni, search_inst_31_tsni, lambda$_inst_31_tsni, tryy_inst_31_tsni, check_inst_31_20_tsni, mapLookup_inst_31_20_2_tsni, compareIntInt_inst_31_20_2_3_tsni, pickOne_inst_31_21_tsni, go_inst_31_21_22_tsni, fit_inst_31_23_tsni, extend_maybe_inst_31_23_24_tsni, check_inst_31_23_24_25_tsni, mapLookup_inst_31_23_24_25_2_tsni, compareIntInt_inst_31_23_24_25_2_3_tsni, extend_inst_31_23_24_26_tsni, insert_inst_31_23_24_26_27_tsni, compareIntInt_inst_31_23_24_26_27_28_tsni, extend_inst_31_23_29_tsni, insert_inst_31_23_29_27_tsni, compareIntInt_inst_31_23_29_27_28_tsni, lscomp1$_inst_31_30_tsni, lscomp2$_inst_31_30_tsni, compareIntInt_inst_32_3_tsni, compareIntInt_inst_33_28_tsni, mapLookup_inst_34_2_tsni, compareIntInt_inst_34_2_3_tsni, insert_inst_35_27_tsni, compareIntInt_inst_35_27_28_tsni, check_inst_36_25_tsni, mapLookup_inst_36_25_2_tsni, compareIntInt_inst_36_25_2_3_tsni, extend_inst_36_26_tsni, insert_inst_36_26_27_tsni, compareIntInt_inst_36_26_27_28_tsni, extend_inst_37_29_tsni, insert_inst_37_29_27_tsni, compareIntInt_inst_37_29_27_28_tsni, extend_maybe_inst_37_24_tsni, extend_inst_37_24_26_tsni, insert_inst_37_24_26_27_tsni, compareIntInt_inst_37_24_26_27_28_tsni, check_inst_37_24_25_tsni, mapLookup_inst_37_24_25_2_tsni, compareIntInt_inst_37_24_25_2_3_tsni, search_inst_38_tsni, lambda_inst_38_tsni, lambda$_inst_38_tsni, check_inst_38_20_tsni, mapLookup_inst_38_20_2_tsni, compareIntInt_inst_38_20_2_3_tsni, pickOne_inst_38_21_tsni, go_inst_38_21_22_tsni, fit_inst_38_23_tsni, extend_maybe_inst_38_23_24_tsni, check_inst_38_23_24_25_tsni, mapLookup_inst_38_23_24_25_2_tsni, compareIntInt_inst_38_23_24_25_2_3_tsni, extend_inst_38_23_24_26_tsni, insert_inst_38_23_24_26_27_tsni, compareIntInt_inst_38_23_24_26_27_28_tsni, extend_inst_38_23_29_tsni, insert_inst_38_23_29_27_tsni, compareIntInt_inst_38_23_29_27_28_tsni, lscomp1$_inst_38_30_tsni, lscomp2$_inst_38_30_tsni, lambda_inst_39_tsni, lambda$_inst_39_tsni, tryy_inst_39_tsni, check_inst_39_20_tsni, mapLookup_inst_39_20_2_tsni, compareIntInt_inst_39_20_2_3_tsni, pickOne_inst_39_21_tsni, go_inst_39_21_22_tsni, fit_inst_39_23_tsni, extend_maybe_inst_39_23_24_tsni, check_inst_39_23_24_25_tsni, mapLookup_inst_39_23_24_25_2_tsni, compareIntInt_inst_39_23_24_25_2_3_tsni, extend_inst_39_23_24_26_tsni, insert_inst_39_23_24_26_27_tsni, compareIntInt_inst_39_23_24_26_27_28_tsni, extend_inst_39_23_29_tsni, insert_inst_39_23_29_27_tsni, compareIntInt_inst_39_23_29_27_28_tsni, lscomp1$_inst_39_30_tsni, lscomp2$_inst_39_30_tsni, displayBoard_inst_40_41_tsni, vcat_inst_40_41_42_tsni, reduceVert_inst_40_41_42_43_tsni, eliminateEmpty_inst_40_41_42_43_44_tsni, map_inst_40_41_45_tsni, row_inst_40_41_46_tsni, row$_inst_40_41_46_18_tsni, hcat_inst_40_41_46_18_13_tsni, reduceHoriz_inst_40_41_46_18_13_14_tsni, eliminateEmpty_inst_40_41_46_18_13_14_15_tsni, map_inst_40_41_46_18_16_tsni, lambda_inst_40_41_46_18_11_tsni, lambda$_inst_40_41_46_18_11_9_tsni, sq$_inst_40_41_46_18_11_9_7_tsni, check_inst_40_41_46_18_11_9_7_1_tsni, mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni, compareIntInt_inst_40_41_46_18_11_9_7_1_2_3_tsni, enumFromTo_inst_40_41_46_18_12_tsni, enumFromTo_inst_40_41_47_tsni, vcat_inst_40_48_tsni, reduceVert_inst_40_48_43_tsni, eliminateEmpty_inst_40_48_43_44_tsni, vcat_inst_40_49_tsni, reduceVert_inst_40_49_43_tsni, eliminateEmpty_inst_40_49_43_44_tsni, map_inst_40_50_tsni, row_inst_51_46_tsni, row$_inst_51_46_18_tsni, lambda_inst_51_46_18_11_tsni, lambda$_inst_51_46_18_11_9_tsni, sq$_inst_51_46_18_11_9_7_tsni, check_inst_51_46_18_11_9_7_1_tsni, mapLookup_inst_51_46_18_11_9_7_1_2_tsni, compareIntInt_inst_51_46_18_11_9_7_1_2_3_tsni, enumFromTo_inst_51_46_18_12_tsni, hcat_inst_51_46_18_13_tsni, reduceHoriz_inst_51_46_18_13_14_tsni, eliminateEmpty_inst_51_46_18_13_14_15_tsni, map_inst_51_46_18_16_tsni, enumFromTo_inst_51_47_tsni, vcat_inst_51_42_tsni, reduceVert_inst_51_42_43_tsni, eliminateEmpty_inst_51_42_43_44_tsni, map_inst_51_45_tsni, reduceVert_inst_52_43_tsni, eliminateEmpty_inst_52_43_44_tsni, reduceHoriz_inst_53_14_tsni, eliminateEmpty_inst_53_14_15_tsni, fit_inst_54_55_tsni, extend_maybe_inst_54_55_24_tsni, check_inst_54_55_24_25_tsni, mapLookup_inst_54_55_24_25_2_tsni, compareIntInt_inst_54_55_24_25_2_3_tsni, extend_inst_54_55_24_26_tsni, insert_inst_54_55_24_26_27_tsni, compareIntInt_inst_54_55_24_26_27_28_tsni, extend_inst_54_55_29_tsni, insert_inst_54_55_29_27_tsni, compareIntInt_inst_54_55_29_27_28_tsni, search_inst_54_56_tsni, lambda_inst_54_56_tsni, lambda$_inst_54_56_tsni, tryy_inst_54_56_tsni, fit_inst_54_56_23_tsni, extend_inst_54_56_23_29_tsni, insert_inst_54_56_23_29_27_tsni, compareIntInt_inst_54_56_23_29_27_28_tsni, extend_maybe_inst_54_56_23_24_tsni, extend_inst_54_56_23_24_26_tsni, insert_inst_54_56_23_24_26_27_tsni, compareIntInt_inst_54_56_23_24_26_27_28_tsni, check_inst_54_56_23_24_25_tsni, mapLookup_inst_54_56_23_24_25_2_tsni, compareIntInt_inst_54_56_23_24_25_2_3_tsni, lscomp1$_inst_54_56_30_tsni, lscomp2$_inst_54_56_30_tsni, pickOne_inst_54_56_21_tsni, go_inst_54_56_21_22_tsni, check_inst_54_56_20_tsni, mapLookup_inst_54_56_20_2_tsni, compareIntInt_inst_54_56_20_2_3_tsni, display_inst_54_57_tsni, vcat_inst_54_57_49_tsni, reduceVert_inst_54_57_49_43_tsni, eliminateEmpty_inst_54_57_49_43_44_tsni, map_inst_54_57_50_tsni, vcat_inst_54_57_48_tsni, reduceVert_inst_54_57_48_43_tsni, eliminateEmpty_inst_54_57_48_43_44_tsni, displayBoard_inst_54_57_41_tsni, row_inst_54_57_41_46_tsni, row$_inst_54_57_41_46_18_tsni, lambda_inst_54_57_41_46_18_11_tsni, lambda$_inst_54_57_41_46_18_11_9_tsni, sq$_inst_54_57_41_46_18_11_9_7_tsni, check_inst_54_57_41_46_18_11_9_7_1_tsni, mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni, compareIntInt_inst_54_57_41_46_18_11_9_7_1_2_3_tsni, enumFromTo_inst_54_57_41_46_18_12_tsni, hcat_inst_54_57_41_46_18_13_tsni, reduceHoriz_inst_54_57_41_46_18_13_14_tsni, eliminateEmpty_inst_54_57_41_46_18_13_14_15_tsni, map_inst_54_57_41_46_18_16_tsni, enumFromTo_inst_54_57_41_47_tsni, vcat_inst_54_57_41_42_tsni, reduceVert_inst_54_57_41_42_43_tsni, eliminateEmpty_inst_54_57_41_42_43_44_tsni, map_inst_54_57_41_45_tsni, testLastPiece_nofib_inst_58_59_tsni, display_inst_58_59_57_tsni, displayBoard_inst_58_59_57_41_tsni, vcat_inst_58_59_57_41_42_tsni, reduceVert_inst_58_59_57_41_42_43_tsni, eliminateEmpty_inst_58_59_57_41_42_43_44_tsni, map_inst_58_59_57_41_45_tsni, row_inst_58_59_57_41_46_tsni, row$_inst_58_59_57_41_46_18_tsni, hcat_inst_58_59_57_41_46_18_13_tsni, reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni, eliminateEmpty_inst_58_59_57_41_46_18_13_14_15_tsni, map_inst_58_59_57_41_46_18_16_tsni, lambda_inst_58_59_57_41_46_18_11_tsni, lambda$_inst_58_59_57_41_46_18_11_9_tsni, sq$_inst_58_59_57_41_46_18_11_9_7_tsni, check_inst_58_59_57_41_46_18_11_9_7_1_tsni, mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni, compareIntInt_inst_58_59_57_41_46_18_11_9_7_1_2_3_tsni, enumFromTo_inst_58_59_57_41_46_18_12_tsni, enumFromTo_inst_58_59_57_41_47_tsni, vcat_inst_58_59_57_48_tsni, reduceVert_inst_58_59_57_48_43_tsni, eliminateEmpty_inst_58_59_57_48_43_44_tsni, vcat_inst_58_59_57_49_tsni, reduceVert_inst_58_59_57_49_43_tsni, eliminateEmpty_inst_58_59_57_49_43_44_tsni, map_inst_58_59_57_50_tsni, search_inst_58_59_56_tsni, lambda_inst_58_59_56_tsni, lambda$_inst_58_59_56_tsni, tryy_inst_58_59_56_tsni, check_inst_58_59_56_20_tsni, mapLookup_inst_58_59_56_20_2_tsni, compareIntInt_inst_58_59_56_20_2_3_tsni, pickOne_inst_58_59_56_21_tsni, go_inst_58_59_56_21_22_tsni, fit_inst_58_59_56_23_tsni, extend_maybe_inst_58_59_56_23_24_tsni, check_inst_58_59_56_23_24_25_tsni, mapLookup_inst_58_59_56_23_24_25_2_tsni, compareIntInt_inst_58_59_56_23_24_25_2_3_tsni, extend_inst_58_59_56_23_24_26_tsni, insert_inst_58_59_56_23_24_26_27_tsni, compareIntInt_inst_58_59_56_23_24_26_27_28_tsni, extend_inst_58_59_56_23_29_tsni, insert_inst_58_59_56_23_29_27_tsni, compareIntInt_inst_58_59_56_23_29_27_28_tsni, lscomp1$_inst_58_59_56_30_tsni, lscomp2$_inst_58_59_56_30_tsni, fit_inst_58_59_55_tsni, extend_inst_58_59_55_29_tsni, insert_inst_58_59_55_29_27_tsni, compareIntInt_inst_58_59_55_29_27_28_tsni, extend_maybe_inst_58_59_55_24_tsni, extend_inst_58_59_55_24_26_tsni, insert_inst_58_59_55_24_26_27_tsni, compareIntInt_inst_58_59_55_24_26_27_28_tsni, check_inst_58_59_55_24_25_tsni, mapLookup_inst_58_59_55_24_25_2_tsni, compareIntInt_inst_58_59_55_24_25_2_3_tsni, printDoc_inst_58_59_60_tsni, put_inst_58_59_60_61_tsni, append_inst_58_59_60_61_62_tsni, append_inst_58_59_60_61_63_tsni, foldr_inst_10_13_64_tsni, foldr_inst_17_18_13_64_tsni, mapMaybe_inst_19_65_tsni, mapMaybe_inst_31_65_tsni, mapMaybe_inst_38_65_tsni, mapMaybe_inst_39_65_tsni, foldr_inst_40_41_42_66_tsni, foldr_inst_40_41_46_18_13_64_tsni, foldr_inst_40_48_66_tsni, foldr_inst_40_49_66_tsni, foldr_inst_51_46_18_13_64_tsni, foldr_inst_51_42_66_tsni, addIntInt_inst_54_55_67_tsni, fromSome_inst_54_68_tsni, mapMaybe_inst_54_56_65_tsni, foldr_inst_54_57_49_66_tsni, foldr_inst_54_57_48_66_tsni, foldr_inst_54_57_41_46_18_13_64_tsni, foldr_inst_54_57_41_42_66_tsni, foldr_inst_58_59_57_41_42_66_tsni, foldr_inst_58_59_57_41_46_18_13_64_tsni, foldr_inst_58_59_57_48_66_tsni, foldr_inst_58_59_57_49_66_tsni, mapMaybe_inst_58_59_56_65_tsni, fromSome_inst_58_59_68_tsni, addIntInt_inst_58_59_55_67_tsni, nofibListToString_inst_58_69_tsni, match_scrut_arm_LT_inst_0_1_2_tsni, match_scrut_arm_GT_inst_0_1_2_tsni, match_scrut_arm_GT_inst_4_5_1_2_tsni, match_scrut_arm_LT_inst_4_5_1_2_tsni, match_scrut_arm_GT_inst_6_7_1_2_tsni, match_scrut_arm_LT_inst_6_7_1_2_tsni, match_scrut_arm_LT_inst_8_9_7_1_2_tsni, match_scrut_arm_GT_inst_8_9_7_1_2_tsni, match_scrut_arm_GT_inst_10_11_9_7_1_2_tsni, match_scrut_arm_LT_inst_10_11_9_7_1_2_tsni, match_first0_arm_NotEmpty_inst_10_13_14_15_tsni, match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni, match_scrut_arm_LT_inst_17_18_11_9_7_1_2_tsni, match_scrut_arm_GT_inst_17_18_11_9_7_1_2_tsni, match_scrut_arm_LT_inst_19_20_2_tsni, match_scrut_arm_GT_inst_19_20_2_tsni, match_scrut_arm_LT_inst_19_23_24_25_2_tsni, match_scrut_arm_GT_inst_19_23_24_25_2_tsni, match_scrut_arm_LT_inst_19_23_24_26_27_tsni, match_scrut_arm_GT_inst_19_23_24_26_27_tsni, match_scrut_arm_None_inst_19_23_tsni, match_scrut_arm_GT_inst_19_23_29_27_tsni, match_scrut_arm_LT_inst_19_23_29_27_tsni, match_scrut_arm_LT_inst_31_20_2_tsni, match_scrut_arm_GT_inst_31_20_2_tsni, match_scrut_arm_LT_inst_31_23_24_25_2_tsni, match_scrut_arm_GT_inst_31_23_24_25_2_tsni, match_scrut_arm_LT_inst_31_23_24_26_27_tsni, match_scrut_arm_GT_inst_31_23_24_26_27_tsni, match_scrut_arm_None_inst_31_23_tsni, match_scrut_arm_GT_inst_31_23_29_27_tsni, match_scrut_arm_LT_inst_31_23_29_27_tsni, match_scrut_arm_LT_inst_32_tsni, match_scrut_arm_GT_inst_32_tsni, match_scrut_arm_LT_inst_33_tsni, match_scrut_arm_GT_inst_33_tsni, match_scrut_arm_GT_inst_34_2_tsni, match_scrut_arm_LT_inst_34_2_tsni, match_scrut_arm_GT_inst_35_27_tsni, match_scrut_arm_LT_inst_35_27_tsni, match_scrut_arm_LT_inst_36_25_2_tsni, match_scrut_arm_GT_inst_36_25_2_tsni, match_scrut_arm_LT_inst_36_26_27_tsni, match_scrut_arm_GT_inst_36_26_27_tsni, match_scrut_arm_LT_inst_37_29_27_tsni, match_scrut_arm_GT_inst_37_29_27_tsni, match_scrut_arm_GT_inst_37_24_26_27_tsni, match_scrut_arm_LT_inst_37_24_26_27_tsni, match_scrut_arm_GT_inst_37_24_25_2_tsni, match_scrut_arm_LT_inst_37_24_25_2_tsni, match_scrut_arm_None_inst_37_tsni, match_scrut_arm_LT_inst_38_20_2_tsni, match_scrut_arm_GT_inst_38_20_2_tsni, match_scrut_arm_LT_inst_38_23_24_25_2_tsni, match_scrut_arm_GT_inst_38_23_24_25_2_tsni, match_scrut_arm_LT_inst_38_23_24_26_27_tsni, match_scrut_arm_GT_inst_38_23_24_26_27_tsni, match_scrut_arm_None_inst_38_23_tsni, match_scrut_arm_GT_inst_38_23_29_27_tsni, match_scrut_arm_LT_inst_38_23_29_27_tsni, match_scrut_arm_LT_inst_39_20_2_tsni, match_scrut_arm_GT_inst_39_20_2_tsni, match_scrut_arm_LT_inst_39_23_24_25_2_tsni, match_scrut_arm_GT_inst_39_23_24_25_2_tsni, match_scrut_arm_LT_inst_39_23_24_26_27_tsni, match_scrut_arm_GT_inst_39_23_24_26_27_tsni, match_scrut_arm_None_inst_39_23_tsni, match_scrut_arm_GT_inst_39_23_29_27_tsni, match_scrut_arm_LT_inst_39_23_29_27_tsni, match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni, match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni, match_scrut_arm_LT_inst_40_41_46_18_11_9_7_1_2_tsni, match_scrut_arm_GT_inst_40_41_46_18_11_9_7_1_2_tsni, match_first0_arm_NotEmpty_inst_40_48_43_44_tsni, match_xs_arm_Cons_inst_40_48_66_tsni, match_first0_arm_NotEmpty_inst_40_49_43_44_tsni, match_scrut_arm_GT_inst_51_46_18_11_9_7_1_2_tsni, match_scrut_arm_LT_inst_51_46_18_11_9_7_1_2_tsni, match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni, match_first0_arm_NotEmpty_inst_51_42_43_44_tsni, match_first0_arm_NotEmpty_inst_52_43_44_tsni, match_first0_arm_NotEmpty_inst_53_14_15_tsni, match_scrut_arm_LT_inst_54_55_24_25_2_tsni, match_scrut_arm_GT_inst_54_55_24_25_2_tsni, match_scrut_arm_LT_inst_54_55_24_26_27_tsni, match_scrut_arm_GT_inst_54_55_24_26_27_tsni, match_scrut_arm_None_inst_54_55_tsni, match_scrut_arm_GT_inst_54_55_29_27_tsni, match_scrut_arm_LT_inst_54_55_29_27_tsni, match_os_arm_Cons_inst_54_55_tsni, match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni, match_scrut_arm_LT_inst_54_56_23_29_27_tsni, match_scrut_arm_GT_inst_54_56_23_29_27_tsni, match_scrut_arm_GT_inst_54_56_23_24_26_27_tsni, match_scrut_arm_LT_inst_54_56_23_24_26_27_tsni, match_scrut_arm_GT_inst_54_56_23_24_25_2_tsni, match_scrut_arm_LT_inst_54_56_23_24_25_2_tsni, match_scrut_arm_None_inst_54_56_23_tsni, match_scrut_arm_GT_inst_54_56_20_2_tsni, match_scrut_arm_LT_inst_54_56_20_2_tsni, match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni, match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni, match_xs_arm_Cons_inst_54_57_48_66_tsni, match_scrut_arm_GT_inst_54_57_41_46_18_11_9_7_1_2_tsni, match_scrut_arm_LT_inst_54_57_41_46_18_11_9_7_1_2_tsni, match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni, match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni, match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni, match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni, match_scrut_arm_LT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni, match_scrut_arm_GT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni, match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni, match_xs_arm_Cons_inst_58_59_57_48_66_tsni, match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni, match_scrut_arm_LT_inst_58_59_56_20_2_tsni, match_scrut_arm_GT_inst_58_59_56_20_2_tsni, match_scrut_arm_LT_inst_58_59_56_23_24_25_2_tsni, match_scrut_arm_GT_inst_58_59_56_23_24_25_2_tsni, match_scrut_arm_LT_inst_58_59_56_23_24_26_27_tsni, match_scrut_arm_GT_inst_58_59_56_23_24_26_27_tsni, match_scrut_arm_None_inst_58_59_56_23_tsni, match_scrut_arm_GT_inst_58_59_56_23_29_27_tsni, match_scrut_arm_LT_inst_58_59_56_23_29_27_tsni, match_scrut_arm_LT_inst_58_59_55_29_27_tsni, match_scrut_arm_GT_inst_58_59_55_29_27_tsni, match_scrut_arm_GT_inst_58_59_55_24_26_27_tsni, match_scrut_arm_LT_inst_58_59_55_24_26_27_tsni, match_scrut_arm_GT_inst_58_59_55_24_25_2_tsni, match_scrut_arm_LT_inst_58_59_55_24_25_2_tsni, match_scrut_arm_None_inst_58_59_55_tsni, match_os_arm_Cons_inst_58_59_55_tsni, match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni, match_ls_arm_Cons_inst_58_69_tsni;
match_scrut_arm_LT_inst_0_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_0_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_0_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_0_1_2_tsni(k, r)
});
match_scrut_arm_GT_inst_4_5_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_4_5_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_4_5_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_4_5_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_6_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_6_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_6_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_6_7_1_2_tsni(k, l)
});
match_scrut_arm_LT_inst_8_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_8_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_8_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_8_9_7_1_2_tsni(k, r)
});
match_scrut_arm_GT_inst_10_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_10_11_9_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_10_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_10_11_9_7_1_2_tsni(k, l)
});
match_first0_arm_NotEmpty_inst_10_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_10_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_LT_inst_17_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_17_18_11_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_17_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_17_18_11_9_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_19_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_19_20_2_tsni(k, l)
});
match_scrut_arm_GT_inst_19_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_19_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_19_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_19_23_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_19_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_19_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_19_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_19_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_19_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_19_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_19_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return NofibPrelude.None
  }
});
match_scrut_arm_GT_inst_19_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_19_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_19_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_19_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_LT_inst_31_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_31_20_2_tsni(k, l)
});
match_scrut_arm_GT_inst_31_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_31_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_31_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_31_23_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_31_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_31_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_31_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_31_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_31_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_31_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_31_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return NofibPrelude.None
  }
});
match_scrut_arm_GT_inst_31_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_31_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_31_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_31_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_LT_inst_32_tsni = (undefined, function (k, x, l, r) {
  return lastpiece.mapLookup(k, l)
});
match_scrut_arm_GT_inst_32_tsni = (undefined, function (k, x, l, r) {
  return lastpiece.mapLookup(k, r)
});
match_scrut_arm_LT_inst_33_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = lastpiece.insert(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_33_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = lastpiece.insert(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_GT_inst_34_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_34_2_tsni(k, r)
});
match_scrut_arm_LT_inst_34_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_34_2_tsni(k, l)
});
match_scrut_arm_GT_inst_35_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_35_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_35_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_35_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_LT_inst_36_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_36_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_36_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_36_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_36_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_36_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_36_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_36_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_37_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_37_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_37_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_37_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_GT_inst_37_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_37_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_37_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_37_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_37_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_37_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_37_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_37_24_25_2_tsni(k, l)
});
match_scrut_arm_None_inst_37_tsni = (undefined, function (sq1, id, os) {
  return NofibPrelude.None
});
match_scrut_arm_LT_inst_38_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_38_20_2_tsni(k, l)
});
match_scrut_arm_GT_inst_38_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_38_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_38_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_38_23_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_38_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_38_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_38_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_38_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_38_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_38_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_38_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return NofibPrelude.None
  }
});
match_scrut_arm_GT_inst_38_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_38_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_38_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_38_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_LT_inst_39_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_39_20_2_tsni(k, l)
});
match_scrut_arm_GT_inst_39_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_39_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_39_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_39_23_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_39_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_39_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_39_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_39_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_39_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_39_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_39_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_39_65_tsni(f, t)
    }
  }
});
match_scrut_arm_GT_inst_39_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_39_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_39_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_39_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_LT_inst_40_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_40_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(k, r)
});
match_first0_arm_NotEmpty_inst_40_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_40_48_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_xs_arm_Cons_inst_40_48_66_tsni = (undefined, function (f, z, _deforest_Cons_head_inst_40_48_66_tsni, _deforest_Cons_tail_inst_40_48_66_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_40_48_66_tsni;
  param1 = _deforest_Cons_tail_inst_40_48_66_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_40_48_66_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
});
match_first0_arm_NotEmpty_inst_40_49_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_40_49_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_GT_inst_51_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_51_46_18_11_9_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_51_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_51_46_18_11_9_7_1_2_tsni(k, l)
});
match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_51_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_51_42_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_52_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_52_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_53_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_53_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_LT_inst_54_55_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_55_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_54_55_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_55_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_54_55_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_55_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_54_55_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_55_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_54_55_tsni = (undefined, function (sq1, id, os) {
  return () => {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_GT_inst_54_55_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_55_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_54_55_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_55_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_os_arm_Cons_inst_54_55_tsni = (undefined, function (bd, sq1, id, _deforest_Cons_head_inst_54_55_tsni, _deforest_Cons_tail_inst_54_55_tsni) {
  let param0, param1, o, os, scrut, tmp;
  param0 = _deforest_Cons_head_inst_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_54_55_tsni;
  o = param0;
  os = param1;
  tmp = addIntInt_inst_54_55_67_tsni(sq1, o);
  scrut = extend_maybe_inst_54_55_24_tsni(bd, tmp, id);
  return runtime.safeCall(scrut(sq1, id, os))
});
match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni = (undefined, function (row1, col, _deforest_Deforest_Arr_2_0_inst_54_55_67_tsni, _deforest_Deforest_Arr_2_1_inst_54_55_67_tsni) {
  let first1, first0, orow, ocol, tmp, tmp1, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_54_55_67_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_54_55_67_tsni;
  orow = first0;
  ocol = first1;
  tmp = row1 + orow;
  tmp1 = col + ocol;
  arr = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return arr
});
match_scrut_arm_LT_inst_54_56_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_56_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_54_56_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_56_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_GT_inst_54_56_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_56_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_54_56_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_54_56_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_54_56_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_56_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_54_56_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_56_23_24_25_2_tsni(k, l)
});
match_scrut_arm_None_inst_54_56_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_54_56_65_tsni(f, t)
    }
  }
});
match_scrut_arm_GT_inst_54_56_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_56_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_54_56_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_56_20_2_tsni(k, l)
});
match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_xs_arm_Cons_inst_54_57_48_66_tsni = (undefined, function (f, z, _deforest_Cons_head_inst_54_57_48_66_tsni, _deforest_Cons_tail_inst_54_57_48_66_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_54_57_48_66_tsni;
  param1 = _deforest_Cons_tail_inst_54_57_48_66_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_54_57_48_66_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
});
match_scrut_arm_GT_inst_54_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_54_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, l)
});
match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_LT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, r)
});
match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_xs_arm_Cons_inst_58_59_57_48_66_tsni = (undefined, function (f, z, _deforest_Cons_head_inst_58_59_57_48_66_tsni, _deforest_Cons_tail_inst_58_59_57_48_66_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_58_59_57_48_66_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_57_48_66_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_58_59_57_48_66_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
});
match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, arr;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  arr = globalThis.Object.freeze([
    (cons1, p1, g1, first11) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni(cons1, p1, g1, first11)
    },
    tmp
  ]);
  return arr
});
match_scrut_arm_LT_inst_58_59_56_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_56_20_2_tsni(k, l)
});
match_scrut_arm_GT_inst_58_59_56_20_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_56_20_2_tsni(k, r)
});
match_scrut_arm_LT_inst_58_59_56_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_56_23_24_25_2_tsni(k, l)
});
match_scrut_arm_GT_inst_58_59_56_23_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_56_23_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_58_59_56_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_56_23_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_58_59_56_23_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_56_23_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_None_inst_58_59_56_23_tsni = (undefined, function (sq1, id, os) {
  return (sq2, se, ps) => {
    return (f, t) => {
      return mapMaybe_inst_58_59_56_65_tsni(f, t)
    }
  }
});
match_scrut_arm_GT_inst_58_59_56_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_56_23_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_58_59_56_23_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_56_23_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_LT_inst_58_59_55_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_55_29_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_58_59_55_29_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_55_29_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_GT_inst_58_59_55_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_55_24_26_27_tsni(kx, x, r);
  return lastpiece.balance(ky, y, l, tmp)
});
match_scrut_arm_LT_inst_58_59_55_24_26_27_tsni = (undefined, function (kx, x, sz, ky, y, l, r) {
  let tmp;
  tmp = insert_inst_58_59_55_24_26_27_tsni(kx, x, l);
  return lastpiece.balance(ky, y, tmp, r)
});
match_scrut_arm_GT_inst_58_59_55_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_55_24_25_2_tsni(k, r)
});
match_scrut_arm_LT_inst_58_59_55_24_25_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_55_24_25_2_tsni(k, l)
});
match_scrut_arm_None_inst_58_59_55_tsni = (undefined, function (sq1, id, os) {
  return () => {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_os_arm_Cons_inst_58_59_55_tsni = (undefined, function (bd, sq1, id, _deforest_Cons_head_inst_58_59_55_tsni, _deforest_Cons_tail_inst_58_59_55_tsni) {
  let param0, param1, o, os, scrut, tmp;
  param0 = _deforest_Cons_head_inst_58_59_55_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_55_tsni;
  o = param0;
  os = param1;
  tmp = addIntInt_inst_58_59_55_67_tsni(sq1, o);
  scrut = extend_maybe_inst_58_59_55_24_tsni(bd, tmp, id);
  return runtime.safeCall(scrut(sq1, id, os))
});
match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni = (undefined, function (row1, col, _deforest_Deforest_Arr_2_0_inst_58_59_55_67_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_55_67_tsni) {
  let first1, first0, orow, ocol, tmp, tmp1, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_55_67_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_55_67_tsni;
  orow = first0;
  ocol = first1;
  tmp = row1 + orow;
  tmp1 = col + ocol;
  arr = globalThis.Object.freeze([
    tmp,
    tmp1
  ]);
  return arr
});
match_ls_arm_Cons_inst_58_69_tsni = (undefined, function (_deforest_Cons_head_inst_58_69_tsni, _deforest_Cons_tail_inst_58_69_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_58_69_tsni;
  param1 = _deforest_Cons_tail_inst_58_69_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_58_69_tsni(t);
  return h + tmp
});
check_inst_0_1_tsni = function check_inst_0_1_tsni(bd, sq1) {
  return mapLookup_inst_0_1_2_tsni(sq1, bd)
};
mapLookup_inst_0_1_2_tsni = function mapLookup_inst_0_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_0_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_0_1_2_3_tsni = function compareIntInt_inst_0_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
sq$_inst_4_5_tsni = function sq$_inst_4_5_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_4_5_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_4_5_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_4_5_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_4_5_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_4_5_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_4_5_1_tsni = function check_inst_4_5_1_tsni(bd, sq1) {
  return mapLookup_inst_4_5_1_2_tsni(sq1, bd)
};
mapLookup_inst_4_5_1_2_tsni = function mapLookup_inst_4_5_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_4_5_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_4_5_1_2_3_tsni = function compareIntInt_inst_4_5_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
sq$_inst_6_7_tsni = function sq$_inst_6_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_6_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_6_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_6_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_6_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_6_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_6_7_1_tsni = function check_inst_6_7_1_tsni(bd, sq1) {
  return mapLookup_inst_6_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_6_7_1_2_tsni = function mapLookup_inst_6_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_6_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_6_7_1_2_3_tsni = function compareIntInt_inst_6_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
lambda$_inst_8_9_tsni = function lambda$_inst_8_9_tsni(bd, n, col) {
  return sq$_inst_8_9_7_tsni(bd, n, col)
};
sq$_inst_8_9_7_tsni = function sq$_inst_8_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_8_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_8_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_8_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_8_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_8_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_8_9_7_1_tsni = function check_inst_8_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_8_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_8_9_7_1_2_tsni = function mapLookup_inst_8_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_8_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_8_9_7_1_2_3_tsni = function compareIntInt_inst_8_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
lambda_inst_10_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_10_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_10_11_9_tsni = function lambda$_inst_10_11_9_tsni(bd, n, col) {
  return sq$_inst_10_11_9_7_tsni(bd, n, col)
};
sq$_inst_10_11_9_7_tsni = function sq$_inst_10_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_10_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_10_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_10_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_10_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_10_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_10_11_9_7_1_tsni = function check_inst_10_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_10_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_10_11_9_7_1_2_tsni = function mapLookup_inst_10_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_10_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_10_11_9_7_1_2_3_tsni = function compareIntInt_inst_10_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_10_12_tsni = function enumFromTo_inst_10_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_10_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_10_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_10_13_64_tsni(f1, z, t);
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
hcat_inst_10_13_tsni = function hcat_inst_10_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_10_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_10_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_10_13_14_tsni = function reduceHoriz_inst_10_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_10_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_10_13_14_tsni(q);
    return eliminateEmpty_inst_10_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_10_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_10_13_14_15_tsni = function eliminateEmpty_inst_10_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_10_16_tsni = function map_inst_10_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
row$_inst_17_18_tsni = function row$_inst_17_18_tsni(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_17_18_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_17_18_11_tsni(bd, n));
  tmp1 = map_inst_17_18_16_tsni(lambda$this, tmp);
  return hcat_inst_17_18_13_tsni(tmp1)
};
hcat_inst_17_18_13_tsni = function hcat_inst_17_18_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_17_18_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_17_18_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_17_18_13_14_tsni = function reduceHoriz_inst_17_18_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_17_18_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_17_18_13_14_tsni(q);
    return eliminateEmpty_inst_17_18_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_17_18_13_14_15_tsni = function eliminateEmpty_inst_17_18_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_17_18_16_tsni = function map_inst_17_18_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_17_18_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_17_18_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_17_18_11_9_tsni = function lambda$_inst_17_18_11_9_tsni(bd, n, col) {
  return sq$_inst_17_18_11_9_7_tsni(bd, n, col)
};
sq$_inst_17_18_11_9_7_tsni = function sq$_inst_17_18_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_17_18_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_17_18_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_17_18_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_17_18_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_17_18_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_17_18_11_9_7_1_tsni = function check_inst_17_18_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_17_18_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_17_18_11_9_7_1_2_tsni = function mapLookup_inst_17_18_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_17_18_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_17_18_11_9_7_1_2_3_tsni = function compareIntInt_inst_17_18_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_17_18_12_tsni = function enumFromTo_inst_17_18_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_17_18_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_17_18_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_17_18_13_64_tsni(f1, z, t);
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
search_inst_19_tsni = function search_inst_19_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(lastpiece.Soln(bd))
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        arr = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp2 = lastpiece.flip(sey);
        return search_inst_19_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_19_20_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_19_tsni = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$3(row_col, sey, bd, x)
  }
});
tryy_inst_19_tsni = function tryy_inst_19_tsni(sq1, se, bd, id_is_ps) {
  let first2, first1, first0, id, os, ps, scrut;
  if (runtime.Tuple.isArrayLike(id_is_ps) && id_is_ps.length === 3) {
    first0 = runtime.Tuple.get(id_is_ps, 0);
    first1 = runtime.Tuple.get(id_is_ps, 1);
    first2 = runtime.Tuple.get(id_is_ps, 2);
    id = first0;
    os = first1;
    ps = first2;
    scrut = fit_inst_19_23_tsni(bd, sq1, id, os);
    return runtime.safeCall(scrut(sq1, se, ps))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_19_20_tsni = function check_inst_19_20_tsni(bd, sq1) {
  return mapLookup_inst_19_20_2_tsni(sq1, bd)
};
mapLookup_inst_19_20_2_tsni = function mapLookup_inst_19_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this;
      tmp = pickOne_inst_19_21_tsni(ps);
      tmp1 = lscomp1$_inst_19_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_19_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_19_65_tsni(lambda$this, choices);
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
    scrut = compareIntInt_inst_19_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_19_20_2_3_tsni = function compareIntInt_inst_19_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_19_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_19_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_19_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_19_20_2_tsni(k, x, l, r)
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
                  return search_inst_19_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_19_21_tsni = function pickOne_inst_19_21_tsni(xs) {
  return go_inst_19_21_22_tsni(lambda3, xs)
};
go_inst_19_21_22_tsni = function go_inst_19_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_19_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_19_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_19_23_tsni = function fit_inst_19_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_19_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_19_tsni(tmp2, tmp3, bd1, ps);
      return runtime.safeCall(NofibPrelude.Some(tmp4))
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_19_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_19_23_24_tsni = function extend_maybe_inst_19_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_19_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_19_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_19_23_24_25_tsni = function check_inst_19_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_19_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_19_23_24_25_2_tsni = function mapLookup_inst_19_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_19_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_19_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_19_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_19_23_24_25_2_3_tsni = function compareIntInt_inst_19_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_19_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_19_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_19_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_19_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_19_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_19_23_24_26_tsni = function extend_inst_19_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_19_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_19_23_24_26_27_tsni = function insert_inst_19_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_19_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_19_23_24_26_27_28_tsni = function compareIntInt_inst_19_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_19_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_19_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_19_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_19_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_19_23_29_tsni = function extend_inst_19_23_29_tsni(bd, sq1, id) {
  return insert_inst_19_23_29_27_tsni(sq1, id, bd)
};
insert_inst_19_23_29_27_tsni = function insert_inst_19_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_19_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_19_23_29_27_28_tsni = function compareIntInt_inst_19_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_19_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_19_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_19_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_19_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_19_30_tsni = function lscomp1$_inst_19_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_19_30_tsni = function lscomp2$_inst_19_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_19_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    arr = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp = lscomp2$_inst_19_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      if (scrut instanceof NofibPrelude.None.class) {
        return mapMaybe_inst_19_65_tsni(f, t)
      } else if (scrut instanceof NofibPrelude.Some.class) {
        param02 = scrut.x;
        a = param02;
        tmp1 = mapMaybe_inst_19_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
search_inst_31_tsni = function search_inst_31_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(lastpiece.Soln(bd))
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        arr = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp2 = lastpiece.flip(sey);
        return search_inst_31_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_31_20_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_31_tsni = function lambda$_inst_31_tsni(row_col, sey, bd, x) {
  return tryy_inst_31_tsni(row_col, sey, bd, x)
};
tryy_inst_31_tsni = function tryy_inst_31_tsni(sq1, se, bd, id_is_ps) {
  let first2, first1, first0, id, os, ps, scrut;
  if (runtime.Tuple.isArrayLike(id_is_ps) && id_is_ps.length === 3) {
    first0 = runtime.Tuple.get(id_is_ps, 0);
    first1 = runtime.Tuple.get(id_is_ps, 1);
    first2 = runtime.Tuple.get(id_is_ps, 2);
    id = first0;
    os = first1;
    ps = first2;
    scrut = fit_inst_31_23_tsni(bd, sq1, id, os);
    return runtime.safeCall(scrut(sq1, se, ps))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_31_20_tsni = function check_inst_31_20_tsni(bd, sq1) {
  return mapLookup_inst_31_20_2_tsni(sq1, bd)
};
mapLookup_inst_31_20_2_tsni = function mapLookup_inst_31_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this;
      tmp = pickOne_inst_31_21_tsni(ps);
      tmp1 = lscomp1$_inst_31_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda4(row_col, sey, bd));
      scrut1 = mapMaybe_inst_31_65_tsni(lambda$this, choices);
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
    scrut = compareIntInt_inst_31_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_31_20_2_3_tsni = function compareIntInt_inst_31_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_31_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_31_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_31_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_31_20_2_tsni(k, x, l, r)
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
                  return search_inst_31_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_31_21_tsni = function pickOne_inst_31_21_tsni(xs) {
  return go_inst_31_21_22_tsni(lambda3, xs)
};
go_inst_31_21_22_tsni = function go_inst_31_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_31_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_31_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_31_23_tsni = function fit_inst_31_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_31_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_31_tsni(tmp2, tmp3, bd1, ps);
      return runtime.safeCall(NofibPrelude.Some(tmp4))
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_31_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_31_23_24_tsni = function extend_maybe_inst_31_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_31_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_31_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_31_23_24_25_tsni = function check_inst_31_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_31_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_31_23_24_25_2_tsni = function mapLookup_inst_31_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_31_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_31_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_31_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_31_23_24_25_2_3_tsni = function compareIntInt_inst_31_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_31_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_31_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_31_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_31_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_31_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_31_23_24_26_tsni = function extend_inst_31_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_31_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_31_23_24_26_27_tsni = function insert_inst_31_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_31_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_31_23_24_26_27_28_tsni = function compareIntInt_inst_31_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_31_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_31_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_31_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_31_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_31_23_29_tsni = function extend_inst_31_23_29_tsni(bd, sq1, id) {
  return insert_inst_31_23_29_27_tsni(sq1, id, bd)
};
insert_inst_31_23_29_27_tsni = function insert_inst_31_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_31_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_31_23_29_27_28_tsni = function compareIntInt_inst_31_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_31_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_31_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_31_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_31_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_31_30_tsni = function lscomp1$_inst_31_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_31_30_tsni = function lscomp2$_inst_31_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_31_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    arr = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp = lscomp2$_inst_31_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      if (scrut instanceof NofibPrelude.None.class) {
        return mapMaybe_inst_31_65_tsni(f, t)
      } else if (scrut instanceof NofibPrelude.Some.class) {
        param02 = scrut.x;
        a = param02;
        tmp1 = mapMaybe_inst_31_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_32_3_tsni = function compareIntInt_inst_32_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_32_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_32_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_32_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_32_tsni(k, x, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_33_28_tsni = function compareIntInt_inst_33_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_33_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_33_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_33_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_33_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapLookup_inst_34_2_tsni = function mapLookup_inst_34_2_tsni(k, m) {
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
    scrut = compareIntInt_inst_34_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_34_2_3_tsni = function compareIntInt_inst_34_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_34_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_34_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_34_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_34_2_tsni(k, x, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
insert_inst_35_27_tsni = function insert_inst_35_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_35_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_35_27_28_tsni = function compareIntInt_inst_35_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_35_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_35_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_35_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_35_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_36_25_tsni = function check_inst_36_25_tsni(bd, sq1) {
  return mapLookup_inst_36_25_2_tsni(sq1, bd)
};
mapLookup_inst_36_25_2_tsni = function mapLookup_inst_36_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp;
      tmp = extend_inst_36_26_tsni(bd, sq1, id);
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
    scrut = compareIntInt_inst_36_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_36_25_2_3_tsni = function compareIntInt_inst_36_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_36_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_36_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_36_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_36_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_36_26_tsni = function extend_inst_36_26_tsni(bd, sq1, id) {
  return insert_inst_36_26_27_tsni(sq1, id, bd)
};
insert_inst_36_26_27_tsni = function insert_inst_36_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_36_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_36_26_27_28_tsni = function compareIntInt_inst_36_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_36_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_36_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_36_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_36_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_37_29_tsni = function extend_inst_37_29_tsni(bd, sq1, id) {
  return insert_inst_37_29_27_tsni(sq1, id, bd)
};
insert_inst_37_29_27_tsni = function insert_inst_37_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_37_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_37_29_27_28_tsni = function compareIntInt_inst_37_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_37_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_37_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_37_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_37_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_37_24_tsni = function extend_maybe_inst_37_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_37_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_37_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_37_24_26_tsni = function extend_inst_37_24_26_tsni(bd, sq1, id) {
  return insert_inst_37_24_26_27_tsni(sq1, id, bd)
};
insert_inst_37_24_26_27_tsni = function insert_inst_37_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_37_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_37_24_26_27_28_tsni = function compareIntInt_inst_37_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_37_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_37_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_37_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_37_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_37_24_25_tsni = function check_inst_37_24_25_tsni(bd, sq1) {
  return mapLookup_inst_37_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_37_24_25_2_tsni = function mapLookup_inst_37_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_37_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return lastpiece.fit(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_37_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_37_24_25_2_3_tsni = function compareIntInt_inst_37_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_37_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_37_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_37_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_37_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_37_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
search_inst_38_tsni = function search_inst_38_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(lastpiece.Soln(bd))
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        arr = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp2 = lastpiece.flip(sey);
        return search_inst_38_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_38_20_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_tsni = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$_inst_38_tsni(row_col, sey, bd, x)
  }
});
lambda$_inst_38_tsni = function lambda$_inst_38_tsni(row_col, sey, bd, x) {
  return lastpiece1.tryy(row_col, sey, bd, x)
};
check_inst_38_20_tsni = function check_inst_38_20_tsni(bd, sq1) {
  return mapLookup_inst_38_20_2_tsni(sq1, bd)
};
mapLookup_inst_38_20_2_tsni = function mapLookup_inst_38_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this;
      tmp = pickOne_inst_38_21_tsni(ps);
      tmp1 = lscomp1$_inst_38_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_38_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_38_65_tsni(lambda$this, choices);
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
    scrut = compareIntInt_inst_38_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_38_20_2_3_tsni = function compareIntInt_inst_38_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_38_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_38_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_38_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_38_20_2_tsni(k, x, l, r)
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
                  return search_inst_38_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_38_21_tsni = function pickOne_inst_38_21_tsni(xs) {
  return go_inst_38_21_22_tsni(lambda3, xs)
};
go_inst_38_21_22_tsni = function go_inst_38_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_38_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_38_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_38_23_tsni = function fit_inst_38_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_38_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_38_tsni(tmp2, tmp3, bd1, ps);
      return runtime.safeCall(NofibPrelude.Some(tmp4))
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_38_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_38_23_24_tsni = function extend_maybe_inst_38_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_38_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_38_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_38_23_24_25_tsni = function check_inst_38_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_38_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_38_23_24_25_2_tsni = function mapLookup_inst_38_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_38_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_38_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_38_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_38_23_24_25_2_3_tsni = function compareIntInt_inst_38_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_38_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_38_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_38_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_38_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_38_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_38_23_24_26_tsni = function extend_inst_38_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_38_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_38_23_24_26_27_tsni = function insert_inst_38_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_38_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_38_23_24_26_27_28_tsni = function compareIntInt_inst_38_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_38_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_38_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_38_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_38_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_38_23_29_tsni = function extend_inst_38_23_29_tsni(bd, sq1, id) {
  return insert_inst_38_23_29_27_tsni(sq1, id, bd)
};
insert_inst_38_23_29_27_tsni = function insert_inst_38_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_38_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_38_23_29_27_28_tsni = function compareIntInt_inst_38_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_38_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_38_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_38_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_38_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_38_30_tsni = function lscomp1$_inst_38_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_38_30_tsni = function lscomp2$_inst_38_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_38_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    arr = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp = lscomp2$_inst_38_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      if (scrut instanceof NofibPrelude.None.class) {
        return mapMaybe_inst_38_65_tsni(f, t)
      } else if (scrut instanceof NofibPrelude.Some.class) {
        param02 = scrut.x;
        a = param02;
        tmp1 = mapMaybe_inst_38_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp1)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_39_tsni = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$_inst_39_tsni(row_col, sey, bd, x)
  }
});
lambda$_inst_39_tsni = function lambda$_inst_39_tsni(row_col, sey, bd, x) {
  return tryy_inst_39_tsni(row_col, sey, bd, x)
};
tryy_inst_39_tsni = function tryy_inst_39_tsni(sq1, se, bd, id_is_ps) {
  return runtime.safeCall(id_is_ps(sq1, se, bd))
};
check_inst_39_20_tsni = function check_inst_39_20_tsni(bd, sq1) {
  return mapLookup_inst_39_20_2_tsni(sq1, bd)
};
mapLookup_inst_39_20_2_tsni = function mapLookup_inst_39_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this;
      tmp = pickOne_inst_39_21_tsni(ps);
      tmp1 = lscomp1$_inst_39_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_39_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_39_65_tsni(lambda$this, choices);
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
    scrut = compareIntInt_inst_39_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_39_20_2_3_tsni = function compareIntInt_inst_39_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_39_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_39_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_39_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_39_20_2_tsni(k, x, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_39_21_tsni = function pickOne_inst_39_21_tsni(xs) {
  return go_inst_39_21_22_tsni(lambda3, xs)
};
go_inst_39_21_22_tsni = function go_inst_39_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_39_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_39_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_39_23_tsni = function fit_inst_39_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_39_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = lastpiece.search(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_39_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_39_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_39_23_24_tsni = function extend_maybe_inst_39_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_39_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_39_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_39_23_24_25_tsni = function check_inst_39_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_39_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_39_23_24_25_2_tsni = function mapLookup_inst_39_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_39_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_39_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_39_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_39_23_24_25_2_3_tsni = function compareIntInt_inst_39_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_39_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_39_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_39_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_39_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_39_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_39_23_24_26_tsni = function extend_inst_39_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_39_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_39_23_24_26_27_tsni = function insert_inst_39_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_39_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_39_23_24_26_27_28_tsni = function compareIntInt_inst_39_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_39_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_39_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_39_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_39_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_39_23_29_tsni = function extend_inst_39_23_29_tsni(bd, sq1, id) {
  return insert_inst_39_23_29_27_tsni(sq1, id, bd)
};
insert_inst_39_23_29_27_tsni = function insert_inst_39_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_39_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_39_23_29_27_28_tsni = function compareIntInt_inst_39_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_39_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_39_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_39_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_39_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_39_30_tsni = function lscomp1$_inst_39_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_39_30_tsni = function lscomp2$_inst_39_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_39_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    _deforest_Deforest_Arr_3_0 = id;
    _deforest_Deforest_Arr_3_1 = os;
    _deforest_Deforest_Arr_3_2 = ps;
    arr = (sq1, se, bd) => {
      let first2, first1, first0, id1, os1, ps1, scrut;
      first0 = _deforest_Deforest_Arr_3_0;
      first1 = _deforest_Deforest_Arr_3_1;
      first2 = _deforest_Deforest_Arr_3_2;
      id1 = first0;
      os1 = first1;
      ps1 = first2;
      scrut = fit_inst_39_23_tsni(bd, sq1, id1, os1);
      return runtime.safeCall(scrut(sq1, se, ps1))
    };
    tmp = lscomp2$_inst_39_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      return runtime.safeCall(scrut(f, t))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
displayBoard_inst_40_41_tsni = function displayBoard_inst_40_41_tsni(bd) {
  let tmp, tmp1, tmp2, tmp3, row$this;
  tmp = enumFromTo_inst_40_41_47_tsni(1, lastpiece.maxCol);
  row$this = runtime.safeCall(row_inst_40_41_46_tsni(bd));
  tmp1 = map_inst_40_41_45_tsni(row$this, tmp);
  tmp2 = vcat_inst_40_41_42_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
vcat_inst_40_41_42_tsni = function vcat_inst_40_41_42_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_40_41_42_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_40_41_42_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_40_41_42_43_tsni = function reduceVert_inst_40_41_42_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_40_41_42_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_40_41_42_43_tsni(q);
    return eliminateEmpty_inst_40_41_42_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_40_41_42_43_44_tsni = function eliminateEmpty_inst_40_41_42_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_40_41_45_tsni = function map_inst_40_41_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
row_inst_40_41_46_tsni = function row_inst_40_41_46_tsni(bd) {
  return (n) => {
    return row$_inst_40_41_46_18_tsni(bd, n)
  }
};
row$_inst_40_41_46_18_tsni = function row$_inst_40_41_46_18_tsni(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_40_41_46_18_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_40_41_46_18_11_tsni(bd, n));
  tmp1 = map_inst_40_41_46_18_16_tsni(lambda$this, tmp);
  return hcat_inst_40_41_46_18_13_tsni(tmp1)
};
hcat_inst_40_41_46_18_13_tsni = function hcat_inst_40_41_46_18_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_40_41_46_18_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_40_41_46_18_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_40_41_46_18_13_14_tsni = function reduceHoriz_inst_40_41_46_18_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_40_41_46_18_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_40_41_46_18_13_14_tsni(q);
    return eliminateEmpty_inst_40_41_46_18_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_40_41_46_18_13_14_15_tsni = function eliminateEmpty_inst_40_41_46_18_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_40_41_46_18_16_tsni = function map_inst_40_41_46_18_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_40_41_46_18_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_40_41_46_18_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_40_41_46_18_11_9_tsni = function lambda$_inst_40_41_46_18_11_9_tsni(bd, n, col) {
  return sq$_inst_40_41_46_18_11_9_7_tsni(bd, n, col)
};
sq$_inst_40_41_46_18_11_9_7_tsni = function sq$_inst_40_41_46_18_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_40_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_40_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_40_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_40_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_40_41_46_18_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_40_41_46_18_11_9_7_1_tsni = function check_inst_40_41_46_18_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni = function mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_40_41_46_18_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_40_41_46_18_11_9_7_1_2_3_tsni = function compareIntInt_inst_40_41_46_18_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_40_41_46_18_12_tsni = function enumFromTo_inst_40_41_46_18_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_40_41_46_18_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_40_41_46_18_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_40_41_46_18_13_64_tsni(f1, z, t);
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
enumFromTo_inst_40_41_47_tsni = function enumFromTo_inst_40_41_47_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_40_41_47_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_40_41_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_40_41_42_66_tsni(f1, z, t);
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
vcat_inst_40_48_tsni = function vcat_inst_40_48_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_40_48_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_40_48_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_40_48_43_tsni = function reduceVert_inst_40_48_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_40_48_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_40_48_43_tsni(q);
    return eliminateEmpty_inst_40_48_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_40_48_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_40_48_43_44_tsni = function eliminateEmpty_inst_40_48_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
vcat_inst_40_49_tsni = function vcat_inst_40_49_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_40_49_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_40_49_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_40_49_43_tsni = function reduceVert_inst_40_49_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_40_49_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_40_49_43_tsni(q);
    return eliminateEmpty_inst_40_49_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_40_49_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_40_49_43_44_tsni = function eliminateEmpty_inst_40_49_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_40_50_tsni = function map_inst_40_50_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_50_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_40_49_66_tsni(f1, z, t);
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
row_inst_51_46_tsni = function row_inst_51_46_tsni(bd) {
  return (n) => {
    return row$_inst_51_46_18_tsni(bd, n)
  }
};
row$_inst_51_46_18_tsni = function row$_inst_51_46_18_tsni(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_51_46_18_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_51_46_18_11_tsni(bd, n));
  tmp1 = map_inst_51_46_18_16_tsni(lambda$this, tmp);
  return hcat_inst_51_46_18_13_tsni(tmp1)
};
lambda_inst_51_46_18_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_51_46_18_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_51_46_18_11_9_tsni = function lambda$_inst_51_46_18_11_9_tsni(bd, n, col) {
  return sq$_inst_51_46_18_11_9_7_tsni(bd, n, col)
};
sq$_inst_51_46_18_11_9_7_tsni = function sq$_inst_51_46_18_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_51_46_18_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_51_46_18_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_51_46_18_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_51_46_18_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_51_46_18_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_51_46_18_11_9_7_1_tsni = function check_inst_51_46_18_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_51_46_18_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_51_46_18_11_9_7_1_2_tsni = function mapLookup_inst_51_46_18_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_51_46_18_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_51_46_18_11_9_7_1_2_3_tsni = function compareIntInt_inst_51_46_18_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_51_46_18_12_tsni = function enumFromTo_inst_51_46_18_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_46_18_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_51_46_18_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_51_46_18_13_64_tsni(f1, z, t);
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
hcat_inst_51_46_18_13_tsni = function hcat_inst_51_46_18_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_51_46_18_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_51_46_18_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_51_46_18_13_14_tsni = function reduceHoriz_inst_51_46_18_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_51_46_18_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_51_46_18_13_14_tsni(q);
    return eliminateEmpty_inst_51_46_18_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_51_46_18_13_14_15_tsni = function eliminateEmpty_inst_51_46_18_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_51_46_18_16_tsni = function map_inst_51_46_18_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_51_47_tsni = function enumFromTo_inst_51_47_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_47_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_51_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_51_42_66_tsni(f1, z, t);
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
vcat_inst_51_42_tsni = function vcat_inst_51_42_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_51_42_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_51_42_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_51_42_43_tsni = function reduceVert_inst_51_42_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_51_42_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_51_42_43_tsni(q);
    return eliminateEmpty_inst_51_42_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_51_42_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_51_42_43_44_tsni = function eliminateEmpty_inst_51_42_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_51_45_tsni = function map_inst_51_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
reduceVert_inst_52_43_tsni = function reduceVert_inst_52_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_52_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_52_43_tsni(q);
    return eliminateEmpty_inst_52_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_52_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_52_43_44_tsni = function eliminateEmpty_inst_52_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
reduceHoriz_inst_53_14_tsni = function reduceHoriz_inst_53_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_53_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_53_14_tsni(q);
    return eliminateEmpty_inst_53_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_53_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_53_14_15_tsni = function eliminateEmpty_inst_53_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
fit_inst_54_55_tsni = function fit_inst_54_55_tsni(bd, sq1, id, os) {
  return runtime.safeCall(os(bd, sq1, id))
};
extend_maybe_inst_54_55_24_tsni = function extend_maybe_inst_54_55_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_54_55_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_54_55_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_54_55_24_25_tsni = function check_inst_54_55_24_25_tsni(bd, sq1) {
  return mapLookup_inst_54_55_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_54_55_24_25_2_tsni = function mapLookup_inst_54_55_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_54_55_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_54_55_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_54_55_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_55_24_25_2_3_tsni = function compareIntInt_inst_54_55_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_54_55_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_54_55_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_54_55_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_54_55_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_54_55_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_54_55_24_26_tsni = function extend_inst_54_55_24_26_tsni(bd, sq1, id) {
  return insert_inst_54_55_24_26_27_tsni(sq1, id, bd)
};
insert_inst_54_55_24_26_27_tsni = function insert_inst_54_55_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_54_55_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_55_24_26_27_28_tsni = function compareIntInt_inst_54_55_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_54_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_54_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_54_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_54_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_54_55_29_tsni = function extend_inst_54_55_29_tsni(bd, sq1, id) {
  return insert_inst_54_55_29_27_tsni(sq1, id, bd)
};
insert_inst_54_55_29_27_tsni = function insert_inst_54_55_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_54_55_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_55_29_27_28_tsni = function compareIntInt_inst_54_55_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_54_55_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_54_55_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_54_55_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_54_55_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
search_inst_54_56_tsni = function search_inst_54_56_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2, _deforest_Soln_b;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp3 = NofibPrelude.nofibStringToList("Success!");
        tmp4 = lastpiece.text(tmp3);
        tmp5 = displayBoard_inst_54_57_41_tsni(bd1);
        tmp6 = lastpiece.nest(2, tmp5);
        _deforest_Cons_head1 = tmp6;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp7 = (f, z) => {
          return match_xs_arm_Cons_inst_54_57_48_66_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp4;
        _deforest_Cons_tail = tmp7;
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_54_57_48_66_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_54_57_48_tsni(tmp8)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        arr = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp2 = lastpiece.flip(sey);
        return search_inst_54_56_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_54_56_20_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_54_56_tsni = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$_inst_54_56_tsni(row_col, sey, bd, x)
  }
});
lambda$_inst_54_56_tsni = function lambda$_inst_54_56_tsni(row_col, sey, bd, x) {
  return tryy_inst_54_56_tsni(row_col, sey, bd, x)
};
tryy_inst_54_56_tsni = function tryy_inst_54_56_tsni(sq1, se, bd, id_is_ps) {
  return runtime.safeCall(id_is_ps(sq1, se, bd))
};
fit_inst_54_56_23_tsni = function fit_inst_54_56_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_54_56_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_54_56_tsni(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_54_56_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_54_56_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_54_56_23_29_tsni = function extend_inst_54_56_23_29_tsni(bd, sq1, id) {
  return insert_inst_54_56_23_29_27_tsni(sq1, id, bd)
};
insert_inst_54_56_23_29_27_tsni = function insert_inst_54_56_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_54_56_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_56_23_29_27_28_tsni = function compareIntInt_inst_54_56_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_54_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_54_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_54_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_54_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_54_56_23_24_tsni = function extend_maybe_inst_54_56_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_54_56_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_54_56_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_54_56_23_24_26_tsni = function extend_inst_54_56_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_54_56_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_54_56_23_24_26_27_tsni = function insert_inst_54_56_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_54_56_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_56_23_24_26_27_28_tsni = function compareIntInt_inst_54_56_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_54_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_54_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_54_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_54_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_54_56_23_24_25_tsni = function check_inst_54_56_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_54_56_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_54_56_23_24_25_2_tsni = function mapLookup_inst_54_56_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_54_56_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_54_56_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_54_56_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_56_23_24_25_2_3_tsni = function compareIntInt_inst_54_56_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_54_56_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_54_56_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_54_56_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_54_56_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_54_56_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_54_56_30_tsni = function lscomp1$_inst_54_56_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_54_56_30_tsni = function lscomp2$_inst_54_56_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_54_56_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    _deforest_Deforest_Arr_3_0 = id;
    _deforest_Deforest_Arr_3_1 = os;
    _deforest_Deforest_Arr_3_2 = ps;
    arr = (sq1, se, bd) => {
      let first2, first1, first0, id1, os1, ps1, scrut;
      first0 = _deforest_Deforest_Arr_3_0;
      first1 = _deforest_Deforest_Arr_3_1;
      first2 = _deforest_Deforest_Arr_3_2;
      id1 = first0;
      os1 = first1;
      ps1 = first2;
      scrut = fit_inst_54_56_23_tsni(bd, sq1, id1, os1);
      return runtime.safeCall(scrut(sq1, se, ps1))
    };
    tmp = lscomp2$_inst_54_56_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      return runtime.safeCall(scrut(f, t))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_54_56_21_tsni = function pickOne_inst_54_56_21_tsni(xs) {
  return go_inst_54_56_21_22_tsni(lambda3, xs)
};
go_inst_54_56_21_22_tsni = function go_inst_54_56_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_54_56_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_54_56_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_54_56_20_tsni = function check_inst_54_56_20_tsni(bd, sq1) {
  return mapLookup_inst_54_56_20_2_tsni(sq1, bd)
};
mapLookup_inst_54_56_20_2_tsni = function mapLookup_inst_54_56_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this, _deforest_Choose_s, _deforest_Fail_b, _deforest_Fail_s;
      tmp = pickOne_inst_54_56_21_tsni(ps);
      tmp1 = lscomp1$_inst_54_56_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_54_56_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_54_56_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        _deforest_Fail_b = bd;
        _deforest_Fail_s = row_col;
        return () => {
          let param01, param11, bd1, first1, first0, row1, col;
          param01 = _deforest_Fail_b;
          param11 = _deforest_Fail_s;
          bd1 = param01;
          if (runtime.Tuple.isArrayLike(param11) && param11.length === 2) {
            first0 = runtime.Tuple.get(param11, 0);
            first1 = runtime.Tuple.get(param11, 1);
            row1 = first0;
            col = first1;
            return lastpiece.Empty
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        ss = scrut1;
        _deforest_Choose_s = ss;
        return () => {
          let param01, ss1, tmp2;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp2 = map_inst_54_57_50_tsni(display_inst_54_57_tsni, ss1);
          return vcat_inst_54_57_49_tsni(tmp2)
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
    scrut = compareIntInt_inst_54_56_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_56_20_2_3_tsni = function compareIntInt_inst_54_56_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_54_56_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_54_56_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_54_56_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_54_56_20_2_tsni(k, x, l, r)
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
                  return search_inst_54_56_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
display_inst_54_57_tsni = function display_inst_54_57_tsni(s) {
  return runtime.safeCall(s())
};
vcat_inst_54_57_49_tsni = function vcat_inst_54_57_49_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_54_57_49_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_54_57_49_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_54_57_49_43_tsni = function reduceVert_inst_54_57_49_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_54_57_49_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_54_57_49_43_tsni(q);
    return eliminateEmpty_inst_54_57_49_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_54_57_49_43_44_tsni = function eliminateEmpty_inst_54_57_49_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_54_57_50_tsni = function map_inst_54_57_50_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_54_57_50_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_54_57_49_66_tsni(f1, z, t);
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
vcat_inst_54_57_48_tsni = function vcat_inst_54_57_48_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_54_57_48_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_54_57_48_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_54_57_48_43_tsni = function reduceVert_inst_54_57_48_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_54_57_48_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_54_57_48_43_tsni(q);
    return eliminateEmpty_inst_54_57_48_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_54_57_48_43_44_tsni = function eliminateEmpty_inst_54_57_48_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
displayBoard_inst_54_57_41_tsni = function displayBoard_inst_54_57_41_tsni(bd) {
  let tmp, tmp1, tmp2, tmp3, row$this;
  tmp = enumFromTo_inst_54_57_41_47_tsni(1, lastpiece.maxCol);
  row$this = runtime.safeCall(row_inst_54_57_41_46_tsni(bd));
  tmp1 = map_inst_54_57_41_45_tsni(row$this, tmp);
  tmp2 = vcat_inst_54_57_41_42_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
row_inst_54_57_41_46_tsni = function row_inst_54_57_41_46_tsni(bd) {
  return (n) => {
    return row$_inst_54_57_41_46_18_tsni(bd, n)
  }
};
row$_inst_54_57_41_46_18_tsni = function row$_inst_54_57_41_46_18_tsni(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_54_57_41_46_18_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_54_57_41_46_18_11_tsni(bd, n));
  tmp1 = map_inst_54_57_41_46_18_16_tsni(lambda$this, tmp);
  return hcat_inst_54_57_41_46_18_13_tsni(tmp1)
};
lambda_inst_54_57_41_46_18_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_54_57_41_46_18_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_54_57_41_46_18_11_9_tsni = function lambda$_inst_54_57_41_46_18_11_9_tsni(bd, n, col) {
  return sq$_inst_54_57_41_46_18_11_9_7_tsni(bd, n, col)
};
sq$_inst_54_57_41_46_18_11_9_7_tsni = function sq$_inst_54_57_41_46_18_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_54_57_41_46_18_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_54_57_41_46_18_11_9_7_1_tsni = function check_inst_54_57_41_46_18_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni = function mapLookup_inst_54_57_41_46_18_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_54_57_41_46_18_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_54_57_41_46_18_11_9_7_1_2_3_tsni = function compareIntInt_inst_54_57_41_46_18_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_54_57_41_46_18_12_tsni = function enumFromTo_inst_54_57_41_46_18_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_57_41_46_18_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_54_57_41_46_18_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_54_57_41_46_18_13_64_tsni(f1, z, t);
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
hcat_inst_54_57_41_46_18_13_tsni = function hcat_inst_54_57_41_46_18_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_54_57_41_46_18_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_54_57_41_46_18_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_54_57_41_46_18_13_14_tsni = function reduceHoriz_inst_54_57_41_46_18_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_54_57_41_46_18_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_54_57_41_46_18_13_14_tsni(q);
    return eliminateEmpty_inst_54_57_41_46_18_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_54_57_41_46_18_13_14_15_tsni = function eliminateEmpty_inst_54_57_41_46_18_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_54_57_41_46_18_16_tsni = function map_inst_54_57_41_46_18_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
enumFromTo_inst_54_57_41_47_tsni = function enumFromTo_inst_54_57_41_47_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_57_41_47_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_54_57_41_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_54_57_41_42_66_tsni(f1, z, t);
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
vcat_inst_54_57_41_42_tsni = function vcat_inst_54_57_41_42_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_54_57_41_42_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_54_57_41_42_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_54_57_41_42_43_tsni = function reduceVert_inst_54_57_41_42_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_54_57_41_42_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_54_57_41_42_43_tsni(q);
    return eliminateEmpty_inst_54_57_41_42_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_54_57_41_42_43_44_tsni = function eliminateEmpty_inst_54_57_41_42_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_54_57_41_45_tsni = function map_inst_54_57_41_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
testLastPiece_nofib_inst_58_59_tsni = function testLastPiece_nofib_inst_58_59_tsni() {
  let initialBoard, solutions, arr, arr1, arr2, tmp, tmp1, tmp2, tmp3, arr3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  arr = globalThis.Object.freeze([
    1,
    1
  ]);
  _deforest_Deforest_Arr_2_01 = 1;
  _deforest_Deforest_Arr_2_11 = 0;
  arr1 = (row1, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 1;
  arr2 = (row1, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Cons_head1 = arr2;
  _deforest_Cons_tail1 = (bd, sq1, id) => {
    let tmp6, _deforest_Some_x;
    tmp6 = extend_inst_58_59_55_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp6;
    return () => {
      let param0, x;
      param0 = _deforest_Some_x;
      x = param0;
      return x
    }
  };
  tmp = (bd, sq1, id) => {
    return match_os_arm_Cons_inst_58_59_55_tsni(bd, sq1, id, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = arr1;
  _deforest_Cons_tail = tmp;
  tmp1 = (bd, sq1, id) => {
    return match_os_arm_Cons_inst_58_59_55_tsni(bd, sq1, id, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp2 = fit_inst_58_59_55_tsni(lastpiece.emptyBoard, arr, "a", tmp1);
  tmp3 = fromSome_inst_58_59_68_tsni(tmp2);
  initialBoard = tmp3;
  arr3 = globalThis.Object.freeze([
    1,
    2
  ]);
  tmp4 = search_inst_58_59_56_tsni(arr3, lastpiece.Female, initialBoard, lastpiece.initialPieces);
  solutions = tmp4;
  tmp5 = display_inst_58_59_57_tsni(solutions);
  return printDoc_inst_58_59_60_tsni(tmp5)
};
display_inst_58_59_57_tsni = function display_inst_58_59_57_tsni(s) {
  return runtime.safeCall(s())
};
displayBoard_inst_58_59_57_41_tsni = function displayBoard_inst_58_59_57_41_tsni(bd) {
  let tmp, tmp1, tmp2, tmp3, row$this;
  tmp = enumFromTo_inst_58_59_57_41_47_tsni(1, lastpiece.maxCol);
  row$this = runtime.safeCall(row_inst_58_59_57_41_46_tsni(bd));
  tmp1 = map_inst_58_59_57_41_45_tsni(row$this, tmp);
  tmp2 = vcat_inst_58_59_57_41_42_tsni(tmp1);
  tmp3 = lastpiece.text(NofibPrelude.Nil);
  return lastpiece.above_(tmp2, false, tmp3)
};
vcat_inst_58_59_57_41_42_tsni = function vcat_inst_58_59_57_41_42_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_58_59_57_41_42_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_58_59_57_41_42_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_58_59_57_41_42_43_tsni = function reduceVert_inst_58_59_57_41_42_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_58_59_57_41_42_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_58_59_57_41_42_43_tsni(q);
    return eliminateEmpty_inst_58_59_57_41_42_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_58_59_57_41_42_43_44_tsni = function eliminateEmpty_inst_58_59_57_41_42_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_58_59_57_41_45_tsni = function map_inst_58_59_57_41_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
row_inst_58_59_57_41_46_tsni = function row_inst_58_59_57_41_46_tsni(bd) {
  return (n) => {
    return row$_inst_58_59_57_41_46_18_tsni(bd, n)
  }
};
row$_inst_58_59_57_41_46_18_tsni = function row$_inst_58_59_57_41_46_18_tsni(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_58_59_57_41_46_18_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_58_59_57_41_46_18_11_tsni(bd, n));
  tmp1 = map_inst_58_59_57_41_46_18_16_tsni(lambda$this, tmp);
  return hcat_inst_58_59_57_41_46_18_13_tsni(tmp1)
};
hcat_inst_58_59_57_41_46_18_13_tsni = function hcat_inst_58_59_57_41_46_18_13_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_58_59_57_41_46_18_13_64_tsni(lambda9, lastpiece.Empty, ls);
  tmp1 = reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni = function reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Beside.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceHoriz_inst_58_59_57_41_46_18_13_14_tsni(q);
    return eliminateEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(lambda8, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_58_59_57_41_46_18_13_14_15_tsni = function eliminateEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_58_59_57_41_46_18_16_tsni = function map_inst_58_59_57_41_46_18_16_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_58_59_57_41_46_18_11_tsni = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_58_59_57_41_46_18_11_9_tsni(bd, n, col)
  }
});
lambda$_inst_58_59_57_41_46_18_11_9_tsni = function lambda$_inst_58_59_57_41_46_18_11_9_tsni(bd, n, col) {
  return sq$_inst_58_59_57_41_46_18_11_9_7_tsni(bd, n, col)
};
sq$_inst_58_59_57_41_46_18_11_9_7_tsni = function sq$_inst_58_59_57_41_46_18_11_9_7_tsni(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_58_59_57_41_46_18_11_9_7_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
check_inst_58_59_57_41_46_18_11_9_7_1_tsni = function check_inst_58_59_57_41_46_18_11_9_7_1_tsni(bd, sq1) {
  return mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(sq1, bd)
};
mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni = function mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return () => {
      return lastpiece1.char(".")
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
    scrut = compareIntInt_inst_58_59_57_41_46_18_11_9_7_1_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_57_41_46_18_11_9_7_1_2_3_tsni = function compareIntInt_inst_58_59_57_41_46_18_11_9_7_1_2_3_tsni(ab, cd) {
  return runtime.safeCall(ab(cd))
};
enumFromTo_inst_58_59_57_41_46_18_12_tsni = function enumFromTo_inst_58_59_57_41_46_18_12_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_59_57_41_46_18_12_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_58_59_57_41_46_18_16_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_58_59_57_41_46_18_13_64_tsni(f1, z, t);
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
enumFromTo_inst_58_59_57_41_47_tsni = function enumFromTo_inst_58_59_57_41_47_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_59_57_41_47_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_58_59_57_41_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (f1, z) => {
        let param01, param11, h, t, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        h = param01;
        t = param11;
        tmp4 = foldr_inst_58_59_57_41_42_66_tsni(f1, z, t);
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
vcat_inst_58_59_57_48_tsni = function vcat_inst_58_59_57_48_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_58_59_57_48_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_58_59_57_48_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_58_59_57_48_43_tsni = function reduceVert_inst_58_59_57_48_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_58_59_57_48_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_58_59_57_48_43_tsni(q);
    return eliminateEmpty_inst_58_59_57_48_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_58_59_57_48_43_44_tsni = function eliminateEmpty_inst_58_59_57_48_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
vcat_inst_58_59_57_49_tsni = function vcat_inst_58_59_57_49_tsni(ls) {
  let tmp, tmp1;
  tmp = foldr_inst_58_59_57_49_66_tsni(lambda7, lastpiece.Empty, ls);
  tmp1 = reduceVert_inst_58_59_57_49_43_tsni(tmp);
  return NofibPrelude.snd(tmp1)
};
reduceVert_inst_58_59_57_49_43_tsni = function reduceVert_inst_58_59_57_49_43_tsni(doc) {
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
  if (doc instanceof lastpiece.Above.class) {
    param0 = doc.d1;
    param1 = doc.b;
    param2 = doc.d2;
    p = param0;
    g = param1;
    q = param2;
    tmp = reduceVert_inst_58_59_57_49_43_tsni(p);
    tmp1 = NofibPrelude.snd(tmp);
    tmp2 = reduceVert_inst_58_59_57_49_43_tsni(q);
    return eliminateEmpty_inst_58_59_57_49_43_44_tsni(lambda6, tmp1, g, tmp2)
  } else {
    arr = globalThis.Object.freeze([
      (cons, p1, g1, first1) => {
        return match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni(cons, p1, g1, first1)
      },
      doc
    ]);
    return arr
  }
};
eliminateEmpty_inst_58_59_57_49_43_44_tsni = function eliminateEmpty_inst_58_59_57_49_43_44_tsni(cons, p, g, q) {
  let first1, first0;
  if (p instanceof lastpiece.Empty.class) {
    return q
  } else {
    if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
      first0 = runtime.Tuple.get(q, 0);
      first1 = runtime.Tuple.get(q, 1);
      return runtime.safeCall(first0(cons, p, g, first1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
map_inst_58_59_57_50_tsni = function map_inst_58_59_57_50_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_57_50_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_58_59_57_49_66_tsni(f1, z, t);
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
search_inst_58_59_56_tsni = function search_inst_58_59_56_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2, _deforest_Soln_b;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp3 = NofibPrelude.nofibStringToList("Success!");
        tmp4 = lastpiece.text(tmp3);
        tmp5 = displayBoard_inst_58_59_57_41_tsni(bd1);
        tmp6 = lastpiece.nest(2, tmp5);
        _deforest_Cons_head1 = tmp6;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp7 = (f, z) => {
          return match_xs_arm_Cons_inst_58_59_57_48_66_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp4;
        _deforest_Cons_tail = tmp7;
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_58_59_57_48_66_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_58_59_57_48_tsni(tmp8)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        arr = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp2 = lastpiece.flip(sey);
        return search_inst_58_59_56_tsni(arr, tmp2, bd, ps)
      } else {
        scrut = check_inst_58_59_56_20_tsni(bd, row_col);
        return runtime.safeCall(scrut(row_col, sey, bd, ps))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_58_59_56_tsni = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$_inst_58_59_56_tsni(row_col, sey, bd, x)
  }
});
lambda$_inst_58_59_56_tsni = function lambda$_inst_58_59_56_tsni(row_col, sey, bd, x) {
  return tryy_inst_58_59_56_tsni(row_col, sey, bd, x)
};
tryy_inst_58_59_56_tsni = function tryy_inst_58_59_56_tsni(sq1, se, bd, id_is_ps) {
  return runtime.safeCall(id_is_ps(sq1, se, bd))
};
check_inst_58_59_56_20_tsni = function check_inst_58_59_56_20_tsni(bd, sq1) {
  return mapLookup_inst_58_59_56_20_2_tsni(sq1, bd)
};
mapLookup_inst_58_59_56_20_2_tsni = function mapLookup_inst_58_59_56_20_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (row_col, sey, bd, ps) => {
      let choices, scrut1, ss, tmp, tmp1, lambda$this, _deforest_Fail_b, _deforest_Fail_s, _deforest_Choose_s;
      tmp = pickOne_inst_58_59_56_21_tsni(ps);
      tmp1 = lscomp1$_inst_58_59_56_30_tsni(sey, tmp);
      choices = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_58_59_56_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_58_59_56_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        _deforest_Fail_b = bd;
        _deforest_Fail_s = row_col;
        return () => {
          let param01, param11, bd1, first1, first0, row1, col;
          param01 = _deforest_Fail_b;
          param11 = _deforest_Fail_s;
          bd1 = param01;
          if (runtime.Tuple.isArrayLike(param11) && param11.length === 2) {
            first0 = runtime.Tuple.get(param11, 0);
            first1 = runtime.Tuple.get(param11, 1);
            row1 = first0;
            col = first1;
            return lastpiece.Empty
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        ss = scrut1;
        _deforest_Choose_s = ss;
        return () => {
          let param01, ss1, tmp2;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp2 = map_inst_58_59_57_50_tsni(display_inst_58_59_57_tsni, ss1);
          return vcat_inst_58_59_57_49_tsni(tmp2)
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
    scrut = compareIntInt_inst_58_59_56_20_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_56_20_2_3_tsni = function compareIntInt_inst_58_59_56_20_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_58_59_56_20_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_58_59_56_20_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_58_59_56_20_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_58_59_56_20_2_tsni(k, x, l, r)
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
                  return search_inst_58_59_56_tsni(tmp, tmp1, bd, ps)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pickOne_inst_58_59_56_21_tsni = function pickOne_inst_58_59_56_21_tsni(xs) {
  return go_inst_58_59_56_21_22_tsni(lambda3, xs)
};
go_inst_58_59_56_21_22_tsni = function go_inst_58_59_56_21_22_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (sey) => {
      return (f1) => {
        return NofibPrelude.Nil
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    _deforest_Deforest_Arr_2_0 = x;
    _deforest_Deforest_Arr_2_1 = tmp;
    arr = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp2;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param12 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param12;
        fs = param2;
        ps = first1;
        ls = param11;
        if (sey instanceof lastpiece1.Male.class) {
          tmp2 = ms;
        } else {
          tmp2 = fs;
        }
        return lscomp2$_inst_58_59_56_30_tsni(sey, id, ps, ls, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go_inst_58_59_56_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp1;
    return (sey) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(param11, sey))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_58_59_56_23_tsni = function fit_inst_58_59_56_23_tsni(bd, sq1, id, os) {
  let param0, param1, o, os1, scrut, tmp, tmp1, _deforest_Some_x;
  if (os instanceof NofibPrelude.Nil.class) {
    tmp = extend_inst_58_59_56_23_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp;
    return (sq2, se, ps) => {
      let param01, bd1, tmp2, tmp3, tmp4, _deforest_Some_x1;
      param01 = _deforest_Some_x;
      bd1 = param01;
      tmp2 = lastpiece.next(sq2);
      tmp3 = lastpiece.flip(se);
      tmp4 = search_inst_58_59_56_tsni(tmp2, tmp3, bd1, ps);
      _deforest_Some_x1 = tmp4;
      return (f, t) => {
        let param02, a, tmp5;
        param02 = _deforest_Some_x1;
        a = param02;
        tmp5 = mapMaybe_inst_58_59_56_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp5)
      }
    }
  } else if (os instanceof NofibPrelude.Cons.class) {
    param0 = os.head;
    param1 = os.tail;
    o = param0;
    os1 = param1;
    tmp1 = lastpiece.addIntInt(sq1, o);
    scrut = extend_maybe_inst_58_59_56_23_24_tsni(bd, tmp1, id);
    return runtime.safeCall(scrut(sq1, id, os1))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_58_59_56_23_24_tsni = function extend_maybe_inst_58_59_56_23_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_58_59_56_23_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_58_59_56_23_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_58_59_56_23_24_25_tsni = function check_inst_58_59_56_23_24_25_tsni(bd, sq1) {
  return mapLookup_inst_58_59_56_23_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_58_59_56_23_24_25_2_tsni = function mapLookup_inst_58_59_56_23_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_58_59_56_23_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_58_59_56_23_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_58_59_56_23_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_56_23_24_25_2_3_tsni = function compareIntInt_inst_58_59_56_23_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_58_59_56_23_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_58_59_56_23_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_58_59_56_23_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_58_59_56_23_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_58_59_56_23_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_58_59_56_23_24_26_tsni = function extend_inst_58_59_56_23_24_26_tsni(bd, sq1, id) {
  return insert_inst_58_59_56_23_24_26_27_tsni(sq1, id, bd)
};
insert_inst_58_59_56_23_24_26_27_tsni = function insert_inst_58_59_56_23_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_58_59_56_23_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_56_23_24_26_27_28_tsni = function compareIntInt_inst_58_59_56_23_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_58_59_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_58_59_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_58_59_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_58_59_56_23_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_58_59_56_23_29_tsni = function extend_inst_58_59_56_23_29_tsni(bd, sq1, id) {
  return insert_inst_58_59_56_23_29_27_tsni(sq1, id, bd)
};
insert_inst_58_59_56_23_29_27_tsni = function insert_inst_58_59_56_23_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_58_59_56_23_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_56_23_29_27_28_tsni = function compareIntInt_inst_58_59_56_23_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_58_59_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_58_59_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_58_59_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_58_59_56_23_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_58_59_56_30_tsni = function lscomp1$_inst_58_59_56_30_tsni(sey, ls) {
  return runtime.safeCall(ls(sey))
};
lscomp2$_inst_58_59_56_30_tsni = function lscomp2$_inst_58_59_56_30_tsni(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_58_59_56_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    _deforest_Deforest_Arr_3_0 = id;
    _deforest_Deforest_Arr_3_1 = os;
    _deforest_Deforest_Arr_3_2 = ps;
    arr = (sq1, se, bd) => {
      let first2, first1, first0, id1, os1, ps1, scrut;
      first0 = _deforest_Deforest_Arr_3_0;
      first1 = _deforest_Deforest_Arr_3_1;
      first2 = _deforest_Deforest_Arr_3_2;
      id1 = first0;
      os1 = first1;
      ps1 = first2;
      scrut = fit_inst_58_59_56_23_tsni(bd, sq1, id1, os1);
      return runtime.safeCall(scrut(sq1, se, ps1))
    };
    tmp = lscomp2$_inst_58_59_56_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, h, t, scrut;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f(h));
      return runtime.safeCall(scrut(f, t))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fit_inst_58_59_55_tsni = function fit_inst_58_59_55_tsni(bd, sq1, id, os) {
  return runtime.safeCall(os(bd, sq1, id))
};
extend_inst_58_59_55_29_tsni = function extend_inst_58_59_55_29_tsni(bd, sq1, id) {
  return insert_inst_58_59_55_29_27_tsni(sq1, id, bd)
};
insert_inst_58_59_55_29_27_tsni = function insert_inst_58_59_55_29_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_58_59_55_29_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_55_29_27_28_tsni = function compareIntInt_inst_58_59_55_29_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_58_59_55_29_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_58_59_55_29_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_58_59_55_29_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_58_59_55_29_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_maybe_inst_58_59_55_24_tsni = function extend_maybe_inst_58_59_55_24_tsni(bd, sq1, id) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
  if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
    first0 = runtime.Tuple.get(sq1, 0);
    first1 = runtime.Tuple.get(sq1, 1);
    row1 = first0;
    col = first1;
    tmp = row1 > lastpiece.maxRow;
    lambda$this = runtime.safeCall(lambda(col));
    tmp1 = runtime.short_or(tmp, lambda$this);
    lambda$this1 = runtime.safeCall(lambda1(col));
    scrut1 = runtime.short_or(tmp1, lambda$this1);
    if (scrut1 === true) {
      return (sq2, id1, os) => {
        return match_scrut_arm_None_inst_58_59_55_tsni(sq2, id1, os)
      }
    } else {
      scrut = check_inst_58_59_55_24_25_tsni(bd, sq1);
      return runtime.safeCall(scrut(bd, sq1, id))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
extend_inst_58_59_55_24_26_tsni = function extend_inst_58_59_55_24_26_tsni(bd, sq1, id) {
  return insert_inst_58_59_55_24_26_27_tsni(sq1, id, bd)
};
insert_inst_58_59_55_24_26_27_tsni = function insert_inst_58_59_55_24_26_27_tsni(kx, x, m) {
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
    scrut = compareIntInt_inst_58_59_55_24_26_27_28_tsni(kx, ky);
    return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_55_24_26_27_28_tsni = function compareIntInt_inst_58_59_55_24_26_27_28_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (kx, x, sz, ky, y, l, r) => {
          return match_scrut_arm_GT_inst_58_59_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (kx, x, sz, ky, y, l, r) => {
            return match_scrut_arm_LT_inst_58_59_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (kx, x, sz, ky, y, l, r) => {
              return match_scrut_arm_GT_inst_58_59_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (kx, x, sz, ky, y, l, r) => {
                return match_scrut_arm_LT_inst_58_59_55_24_26_27_tsni(kx, x, sz, ky, y, l, r)
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
check_inst_58_59_55_24_25_tsni = function check_inst_58_59_55_24_25_tsni(bd, sq1) {
  return mapLookup_inst_58_59_55_24_25_2_tsni(sq1, bd)
};
mapLookup_inst_58_59_55_24_25_2_tsni = function mapLookup_inst_58_59_55_24_25_2_tsni(k, m) {
  let param0, param1, param2, param3, param4, kx, x, l, r, scrut;
  if (m instanceof lastpiece.Tip.class) {
    return (bd, sq1, id) => {
      let tmp, _deforest_Some_x;
      tmp = extend_inst_58_59_55_24_26_tsni(bd, sq1, id);
      _deforest_Some_x = tmp;
      return (sq2, id1, os) => {
        let param01, bd1;
        param01 = _deforest_Some_x;
        bd1 = param01;
        return fit_inst_58_59_55_tsni(bd1, sq2, id1, os)
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
    scrut = compareIntInt_inst_58_59_55_24_25_2_3_tsni(k, kx);
    return runtime.safeCall(scrut(k, x, l, r))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
compareIntInt_inst_58_59_55_24_25_2_3_tsni = function compareIntInt_inst_58_59_55_24_25_2_3_tsni(ab, cd) {
  let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
  if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
    first0 = runtime.Tuple.get(ab, 0);
    first1 = runtime.Tuple.get(ab, 1);
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut3 = a > c;
      if (scrut3 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_58_59_55_24_25_2_tsni(k, x, l, r)
        }
      } else {
        scrut2 = a < c;
        if (scrut2 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_58_59_55_24_25_2_tsni(k, x, l, r)
          }
        } else {
          scrut1 = b > d;
          if (scrut1 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_58_59_55_24_25_2_tsni(k, x, l, r)
            }
          } else {
            scrut = b < d;
            if (scrut === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_58_59_55_24_25_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return (bd, sq1, id) => {
                  let param0;
                  param0 = _deforest_Some_x;
                  return (sq2, id1, os) => {
                    return match_scrut_arm_None_inst_58_59_55_tsni(sq2, id1, os)
                  }
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
printDoc_inst_58_59_60_tsni = function printDoc_inst_58_59_60_tsni(d) {
  let done, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = () => {
    return ""
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_58_69_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
  done = tmp;
  return lastpiece.fullRender(lastpiece.ZigZagMode, 200, 1.5, put_inst_58_59_60_61_tsni, done, d)
};
put_inst_58_59_60_61_tsni = function put_inst_58_59_60_61_tsni(k, next) {
  let param0, s, s1, c, _deforest_Cons_head, _deforest_Cons_tail;
  if (k instanceof lastpiece1.Chr.class) {
    param0 = k.c;
    c = param0;
    _deforest_Cons_head = c;
    _deforest_Cons_tail = next;
    return () => {
      return match_ls_arm_Cons_inst_58_69_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else if (k instanceof lastpiece1.Str.class) {
    param0 = k.s;
    s1 = param0;
    return append_inst_58_59_60_61_62_tsni(s1, next)
  } else if (k instanceof lastpiece1.PStr.class) {
    param0 = k.s;
    s = param0;
    return append_inst_58_59_60_61_63_tsni(s, next)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_58_59_60_61_62_tsni = function append_inst_58_59_60_61_62_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_59_60_61_62_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_58_69_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_58_59_60_61_63_tsni = function append_inst_58_59_60_61_63_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_59_60_61_63_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_58_69_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
foldr_inst_10_13_64_tsni = function foldr_inst_10_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_17_18_13_64_tsni = function foldr_inst_17_18_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
mapMaybe_inst_19_65_tsni = function mapMaybe_inst_19_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
mapMaybe_inst_31_65_tsni = function mapMaybe_inst_31_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
mapMaybe_inst_38_65_tsni = function mapMaybe_inst_38_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
mapMaybe_inst_39_65_tsni = function mapMaybe_inst_39_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
foldr_inst_40_41_42_66_tsni = function foldr_inst_40_41_42_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_40_41_46_18_13_64_tsni = function foldr_inst_40_41_46_18_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_40_48_66_tsni = function foldr_inst_40_48_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_40_49_66_tsni = function foldr_inst_40_49_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_51_46_18_13_64_tsni = function foldr_inst_51_46_18_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_51_42_66_tsni = function foldr_inst_51_42_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
addIntInt_inst_54_55_67_tsni = function addIntInt_inst_54_55_67_tsni(row_col, orow_ocol) {
  let first1, first0, row1, col;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    return runtime.safeCall(orow_ocol(row1, col))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
fromSome_inst_54_68_tsni = function fromSome_inst_54_68_tsni(s) {
  return runtime.safeCall(s())
};
mapMaybe_inst_54_56_65_tsni = function mapMaybe_inst_54_56_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
foldr_inst_54_57_49_66_tsni = function foldr_inst_54_57_49_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_54_57_48_66_tsni = function foldr_inst_54_57_48_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_54_57_41_46_18_13_64_tsni = function foldr_inst_54_57_41_46_18_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_54_57_41_42_66_tsni = function foldr_inst_54_57_41_42_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_58_59_57_41_42_66_tsni = function foldr_inst_58_59_57_41_42_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_58_59_57_41_46_18_13_64_tsni = function foldr_inst_58_59_57_41_46_18_13_64_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_58_59_57_48_66_tsni = function foldr_inst_58_59_57_48_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_58_59_57_49_66_tsni = function foldr_inst_58_59_57_49_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
mapMaybe_inst_58_59_56_65_tsni = function mapMaybe_inst_58_59_56_65_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
fromSome_inst_58_59_68_tsni = function fromSome_inst_58_59_68_tsni(s) {
  return runtime.safeCall(s())
};
addIntInt_inst_58_59_55_67_tsni = function addIntInt_inst_58_59_55_67_tsni(row_col, orow_ocol) {
  let first1, first0, row1, col;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    return runtime.safeCall(orow_ocol(row1, col))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
nofibListToString_inst_58_69_tsni = function nofibListToString_inst_58_69_tsni(ls) {
  return runtime.safeCall(ls())
};
get = function get(r, w, docc) {
  let param0, param1, param2, p, q, k, p1, s, p2, p3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (docc instanceof lastpiece1.Empty.class) {
    return lastpiece1.Empty
  } else if (docc instanceof lastpiece1.NoDoc.class) {
    return lastpiece1.NoDoc
  } else if (docc instanceof lastpiece1.NilAbove.class) {
    param0 = docc.d;
    p3 = param0;
    tmp = get(r, w, p3);
    return runtime.safeCall(lastpiece1.NilAbove(tmp))
  } else if (docc instanceof lastpiece1.TextBeside.class) {
    param0 = docc.a;
    param1 = docc.d;
    s = param0;
    p2 = param1;
    tmp1 = lastpiece1.annotSize(s);
    tmp2 = get1(r, w, tmp1, p2);
    return lastpiece1.TextBeside(s, tmp2)
  } else if (docc instanceof lastpiece1.Nest.class) {
    param0 = docc.i;
    param1 = docc.d;
    k = param0;
    p1 = param1;
    tmp3 = w - k;
    tmp4 = get(r, tmp3, p1);
    return lastpiece1.Nest(k, tmp4)
  } else if (docc instanceof lastpiece1.Union.class) {
    param0 = docc.d1;
    param1 = docc.d2;
    p = param0;
    q = param1;
    tmp5 = get(r, w, p);
    tmp6 = get(r, w, q);
    return lastpiece1.nicest(w, r, tmp5, tmp6)
  } else if (docc instanceof lastpiece1.Above.class) {
    param0 = docc.d1;
    param1 = docc.b;
    param2 = docc.d2;
    throw globalThis.Error("best get Above")
  } else if (docc instanceof lastpiece1.Beside.class) {
    param0 = docc.d1;
    param1 = docc.b;
    param2 = docc.d2;
    throw globalThis.Error("best get Beside")
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
get1 = function get1(r, w, sl, p) {
  let param0, param1, param2, p1, q, p2, s, p3, p4, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (p instanceof lastpiece1.Empty.class) {
    return lastpiece1.Empty
  } else if (p instanceof lastpiece1.NoDoc.class) {
    return lastpiece1.NoDoc
  } else if (p instanceof lastpiece1.NilAbove.class) {
    param0 = p.d;
    p4 = param0;
    tmp = w - sl;
    tmp1 = get(r, tmp, p4);
    return runtime.safeCall(lastpiece1.NilAbove(tmp1))
  } else if (p instanceof lastpiece1.TextBeside.class) {
    param0 = p.a;
    param1 = p.d;
    s = param0;
    p3 = param1;
    tmp2 = lastpiece1.annotSize(s);
    tmp3 = sl + tmp2;
    tmp4 = get1(r, w, tmp3, p3);
    return lastpiece1.TextBeside(s, tmp4)
  } else if (p instanceof lastpiece1.Nest.class) {
    param0 = p.i;
    param1 = p.d;
    p2 = param1;
    return get1(r, w, sl, p2)
  } else if (p instanceof lastpiece1.Union.class) {
    param0 = p.d1;
    param1 = p.d2;
    p1 = param0;
    q = param1;
    tmp5 = get1(r, w, sl, p1);
    tmp6 = get1(r, w, sl, q);
    return lastpiece1.nicest1(w, r, sl, tmp5, tmp6)
  } else if (p instanceof lastpiece1.Above.class) {
    param0 = p.d1;
    param1 = p.b;
    param2 = p.d2;
    throw globalThis.Error("best get1 Above")
  } else if (p instanceof lastpiece1.Beside.class) {
    param0 = p.d1;
    param1 = p.b;
    param2 = p.d2;
    throw globalThis.Error("best get1 Beside")
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lay2$ = function lay2$(m, txt, end, gapWidth, shift, k, param) {
  let param0, param1, p, s, p1, p2, tmp, tmp1, tmp2, tmp3;
  if (param instanceof lastpiece1.NilAbove.class) {
    param0 = param.d;
    p2 = param0;
    tmp = lay$1(m, txt, end, gapWidth, shift, k, p2);
    return runtime.safeCall(txt(lastpiece1.nlText, tmp))
  } else if (param instanceof lastpiece1.TextBeside.class) {
    param0 = param.a;
    param1 = param.d;
    s = param0;
    p1 = param1;
    tmp1 = lastpiece1.annotSize(s);
    tmp2 = k + tmp1;
    tmp3 = lay2$(m, txt, end, gapWidth, shift, tmp2, p1);
    return runtime.safeCall(txt(s, tmp3))
  } else if (param instanceof lastpiece1.Nest.class) {
    param0 = param.i;
    param1 = param.d;
    p = param1;
    return lay2$(m, txt, end, gapWidth, shift, k, p)
  } else if (param instanceof lastpiece1.Empty.class) {
    return end
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lay2 = function lay2(m, txt, end, gapWidth, shift) {
  return (k, param) => {
    return lay2$(m, txt, end, gapWidth, shift, k, param)
  }
};
lay1$ = function lay1$(m, txt, end, gapWidth, shift, k, s, p) {
  let r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = lastpiece1.annotSize(s);
  tmp1 = k + tmp;
  r = tmp1;
  tmp2 = lastpiece1.indent(k);
  tmp3 = runtime.safeCall(lastpiece1.Str(tmp2));
  tmp4 = lastpiece1.NoAnnot(tmp3, k);
  tmp5 = lay2$(m, txt, end, gapWidth, shift, r, p);
  tmp6 = runtime.safeCall(txt(s, tmp5));
  return runtime.safeCall(txt(tmp4, tmp6))
};
lay1 = function lay1(m, txt, end, gapWidth, shift) {
  return (k, s, p) => {
    return lay1$(m, txt, end, gapWidth, shift, k, s, p)
  }
};
lay$1 = function lay$(m, txt, end, gapWidth, shift, k, docc) {
  let param0, param1, s, p, scrut, scrut1, p1, k1, p2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15;
  if (docc instanceof lastpiece1.Nest.class) {
    param0 = docc.i;
    param1 = docc.d;
    k1 = param0;
    p2 = param1;
    tmp = k + k1;
    return lay$1(m, txt, end, gapWidth, shift, tmp, p2)
  } else if (docc instanceof lastpiece1.Empty.class) {
    return end
  } else if (docc instanceof lastpiece1.NilAbove.class) {
    param0 = docc.d;
    p1 = param0;
    tmp1 = lay$1(m, txt, end, gapWidth, shift, k, p1);
    return runtime.safeCall(txt(lastpiece1.nlText, tmp1))
  } else if (docc instanceof lastpiece1.TextBeside.class) {
    param0 = docc.a;
    param1 = docc.d;
    s = param0;
    p = param1;
    if (m instanceof lastpiece1.ZigZagMode.class) {
      scrut1 = k >= gapWidth;
      if (scrut1 === true) {
        tmp2 = NofibPrelude.replicate(shift, "/");
        tmp3 = runtime.safeCall(lastpiece1.Str(tmp2));
        tmp4 = lastpiece1.NoAnnot(tmp3, shift);
        tmp5 = k - shift;
        tmp6 = lay1$(m, txt, end, gapWidth, shift, tmp5, s, p);
        tmp7 = runtime.safeCall(txt(lastpiece1.nlText, tmp6));
        tmp8 = runtime.safeCall(txt(tmp4, tmp7));
        return runtime.safeCall(txt(lastpiece1.nlText, tmp8))
      } else {
        scrut = k < 0;
        if (scrut === true) {
          tmp9 = NofibPrelude.replicate(shift, "|");
          tmp10 = runtime.safeCall(lastpiece1.Str(tmp9));
          tmp11 = lastpiece1.NoAnnot(tmp10, shift);
          tmp12 = k + shift;
          tmp13 = lay1$(m, txt, end, gapWidth, shift, tmp12, s, p);
          tmp14 = runtime.safeCall(txt(lastpiece1.nlText, tmp13));
          tmp15 = runtime.safeCall(txt(tmp11, tmp14));
          return runtime.safeCall(txt(lastpiece1.nlText, tmp15))
        } else {
          return lay1$(m, txt, end, gapWidth, shift, k, s, p)
        }
      }
    } else {
      return lay1$(m, txt, end, gapWidth, shift, k, s, p)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lay3 = function lay(m, txt, end, gapWidth, shift) {
  return (k, docc) => {
    return lay$1(m, txt, end, gapWidth, shift, k, docc)
  }
};
lay$ = function lay$(nlSpaceText, choose, txt, end, x) {
  let param0, param1, param2, s, p, p1, p2, p3, q, tmp, tmp1, tmp2;
  if (x instanceof lastpiece1.NoDoc.class) {
    throw globalThis.Error("easyDisplay: NoDoc")
  } else if (x instanceof lastpiece1.Union.class) {
    param0 = x.d1;
    param1 = x.d2;
    p3 = param0;
    q = param1;
    tmp = runtime.safeCall(choose(p3, q));
    return lay$(nlSpaceText, choose, txt, end, tmp)
  } else if (x instanceof lastpiece1.Nest.class) {
    param0 = x.i;
    param1 = x.d;
    p2 = param1;
    return lay$(nlSpaceText, choose, txt, end, p2)
  } else if (x instanceof lastpiece1.Empty.class) {
    return end
  } else if (x instanceof lastpiece1.NilAbove.class) {
    param0 = x.d;
    p1 = param0;
    tmp1 = lay$(nlSpaceText, choose, txt, end, p1);
    return runtime.safeCall(txt(nlSpaceText, tmp1))
  } else if (x instanceof lastpiece1.TextBeside.class) {
    param0 = x.a;
    param1 = x.d;
    s = param0;
    p = param1;
    tmp2 = lay$(nlSpaceText, choose, txt, end, p);
    return runtime.safeCall(txt(s, tmp2))
  } else if (x instanceof lastpiece1.Above.class) {
    param0 = x.d1;
    param1 = x.b;
    param2 = x.d2;
    throw globalThis.Error("easyDisplay Above")
  } else if (x instanceof lastpiece1.Beside.class) {
    param0 = x.d1;
    param1 = x.b;
    param2 = x.d2;
    throw globalThis.Error("easyDisplay Beside")
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lay = function lay(nlSpaceText, choose, txt, end) {
  return (x) => {
    return lay$(nlSpaceText, choose, txt, end, x)
  }
};
lambda10 = (undefined, function (a, b) {
  return b
});
annTxt$ = function annTxt$(txt, p, x) {
  let param0, param1, s;
  if (p instanceof lastpiece1.NoAnnot.class) {
    param0 = p.t;
    param1 = p.i;
    s = param0;
    return runtime.safeCall(txt(s, x))
  } else {
    return x
  }
};
annTxt = function annTxt(txt) {
  return (p, x) => {
    return annTxt$(txt, p, x)
  }
};
put = function put(k, next) {
  let param0, s, s1, c;
  if (k instanceof lastpiece1.Chr.class) {
    param0 = k.c;
    c = param0;
    return NofibPrelude.Cons(c, next)
  } else if (k instanceof lastpiece1.Str.class) {
    param0 = k.s;
    s1 = param0;
    return NofibPrelude.append(s1, next)
  } else if (k instanceof lastpiece1.PStr.class) {
    param0 = k.s;
    s = param0;
    return NofibPrelude.append(s, next)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda9 = (undefined, function (p, q) {
  return runtime.safeCall(lastpiece1.Beside(p, false, q))
});
lambda8 = (undefined, function (a, b, c) {
  return runtime.safeCall(lastpiece1.Beside(a, b, c))
});
lambda7 = (undefined, function (p, q) {
  return runtime.safeCall(lastpiece1.Above(p, false, q))
});
lambda6 = (undefined, function (a, b, c) {
  return runtime.safeCall(lastpiece1.Above(a, b, c))
});
sq$ = function sq$(bd, n, col) {
  let scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  arr = (cd) => {
    let first1, first0, a, b, first11, first01, c, d, scrut1, scrut2, scrut3, scrut4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    a = first0;
    b = first1;
    if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
      first01 = runtime.Tuple.get(cd, 0);
      first11 = runtime.Tuple.get(cd, 1);
      c = first01;
      d = first11;
      scrut4 = a > c;
      if (scrut4 === true) {
        return (k, x, l, r) => {
          return match_scrut_arm_GT_inst_0_1_2_tsni(k, x, l, r)
        }
      } else {
        scrut3 = a < c;
        if (scrut3 === true) {
          return (k, x, l, r) => {
            return match_scrut_arm_LT_inst_0_1_2_tsni(k, x, l, r)
          }
        } else {
          scrut2 = b > d;
          if (scrut2 === true) {
            return (k, x, l, r) => {
              return match_scrut_arm_GT_inst_0_1_2_tsni(k, x, l, r)
            }
          } else {
            scrut1 = b < d;
            if (scrut1 === true) {
              return (k, x, l, r) => {
                return match_scrut_arm_LT_inst_0_1_2_tsni(k, x, l, r)
              }
            } else {
              return (k, x, l, r) => {
                let _deforest_Some_x;
                _deforest_Some_x = x;
                return () => {
                  let param0, id;
                  param0 = _deforest_Some_x;
                  id = param0;
                  return lastpiece1.char(id)
                }
              }
            }
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  };
  scrut = check_inst_0_1_tsni(bd, arr);
  return runtime.safeCall(scrut())
};
sq = function sq(bd) {
  return (n, col) => {
    return sq$_inst_4_5_tsni(bd, n, col)
  }
};
lambda$4 = function lambda$(bd, n, col) {
  return sq$_inst_6_7_tsni(bd, n, col)
};
lambda5 = (undefined, function (bd, n) {
  return (col) => {
    return lambda$_inst_8_9_tsni(bd, n, col)
  }
});
row$ = function row$(bd, n) {
  let tmp, tmp1, lambda$this;
  tmp = enumFromTo_inst_10_12_tsni(1, lastpiece1.maxCol);
  lambda$this = runtime.safeCall(lambda_inst_10_11_tsni(bd, n));
  tmp1 = map_inst_10_16_tsni(lambda$this, tmp);
  return hcat_inst_10_13_tsni(tmp1)
};
row = function row(bd) {
  return (n) => {
    return row$_inst_17_18_tsni(bd, n)
  }
};
lscomp2$ = function lscomp2$(sey, id, ps, ls, ls2) {
  let param0, param1, os, ls1, arr, tmp;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    arr = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp = lscomp2$(sey, id, ps, ls, ls1);
    return NofibPrelude.Cons(arr, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2 = function lscomp2(sey, id, ps, ls) {
  return (ls2) => {
    return lscomp2$(sey, id, ps, ls, ls2)
  }
};
lscomp1$ = function lscomp1$(sey, ls) {
  let param0, param1, first1, first0, param01, param11, param2, id, ms, fs, ps, ls1, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      if (first0 instanceof lastpiece1.P.class) {
        param01 = first0.i;
        param11 = first0.a;
        param2 = first0.b;
        id = param01;
        ms = param11;
        fs = param2;
        ps = first1;
        ls1 = param1;
        if (sey instanceof lastpiece1.Male.class) {
          tmp = ms;
        } else {
          tmp = fs;
        }
        return lscomp2$(sey, id, ps, ls1, tmp)
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
lscomp1 = function lscomp1(sey) {
  return (ls) => {
    return lscomp1$(sey, ls)
  }
};
lambda$3 = function lambda$(row_col, sey, bd, x) {
  return tryy_inst_19_tsni(row_col, sey, bd, x)
};
lambda4 = (undefined, function (row_col, sey, bd) {
  return (x) => {
    return lambda$_inst_31_tsni(row_col, sey, bd, x)
  }
});
lambda$2 = function lambda$(f, x, p) {
  let tmp;
  tmp = runtime.safeCall(f(p));
  return NofibPrelude.Cons(x, tmp)
};
lambda2 = (undefined, function (f, x) {
  return (p) => {
    return lambda$2(f, x, p)
  }
});
go = function go(f, xs) {
  let param0, param1, x, xs1, tmp, arr, tmp1, lambda$this;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    arr = globalThis.Object.freeze([
      x,
      tmp
    ]);
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp1 = go(lambda$this, xs1);
    return NofibPrelude.Cons(arr, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda3 = (undefined, function (x) {
  return x
});
lambda$1 = function lambda$(col) {
  return col < 1
};
lambda = (undefined, function (col) {
  return () => {
    return lambda$1(col)
  }
});
lambda$ = function lambda$(col) {
  return col > lastpiece1.maxCol
};
lambda1 = (undefined, function (col) {
  return () => {
    return lambda$(col)
  }
});
(class lastpiece {
  static {
    lastpiece1 = lastpiece;
    let arr, arr1, arr2, arr3, tmp, tmp1, tmp2, tmp3, arr4, tmp4, arr5, tmp5, arr6, tmp6, arr7, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, arr8, arr9, arr10, arr11, tmp14, tmp15, tmp16, tmp17, tmp18, arr12, arr13, arr14, arr15, tmp19, tmp20, tmp21, tmp22, arr16, arr17, arr18, tmp23, arr19, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, arr20, arr21, arr22, arr23, tmp31, tmp32, tmp33, tmp34, arr24, arr25, arr26, tmp35, arr27, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, arr28, arr29, arr30, arr31, tmp43, tmp44, tmp45, tmp46, arr32, arr33, arr34, arr35, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, arr36, arr37, arr38, tmp54, arr39, tmp55, tmp56, tmp57, tmp58, tmp59, arr40, arr41, arr42, arr43, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, arr44, arr45, arr46, arr47, tmp66, tmp67, tmp68, tmp69, arr48, arr49, arr50, tmp70, arr51, tmp71, tmp72, tmp73, tmp74, tmp75, arr52, tmp76, arr53, arr54, arr55, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, arr56, arr57, arr58, arr59, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, arr60, arr61, arr62, arr63, tmp90, tmp91, tmp92, tmp93, arr64, arr65, arr66, tmp94, arr67, tmp95, tmp96, tmp97, tmp98, arr68, arr69, arr70, arr71, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, arr72, arr73, tmp106, arr74, tmp107, arr75, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, arr76, arr77, arr78, arr79, tmp114, tmp115, tmp116, tmp117, arr80, tmp118, arr81, tmp119, arr82, tmp120, arr83, tmp121, tmp122, tmp123, tmp124, arr84, arr85, arr86, arr87, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, arr88, arr89, tmp132, arr90, tmp133, arr91, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, arr92, arr93, arr94, arr95, tmp140, tmp141, tmp142, tmp143, arr96, tmp144, arr97, tmp145, arr98, tmp146, arr99, tmp147, tmp148, tmp149, tmp150, arr100, arr101, arr102, arr103, tmp151, tmp152, tmp153, tmp154, arr104, arr105, tmp155, arr106, tmp156, arr107, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, arr108, arr109, arr110, arr111, tmp166, tmp167, tmp168, tmp169, arr112, tmp170, arr113, tmp171, arr114, tmp172, arr115, tmp173, tmp174, tmp175, tmp176, arr116, arr117, arr118, arr119, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, arr120, arr121, arr122, arr123, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, arr124, arr125, arr126, tmp190, tmp191, tmp192, arr127, tmp193, arr128, tmp194, arr129, tmp195, tmp196, tmp197, tmp198, tmp199, arr130, arr131, arr132, tmp200, tmp201, tmp202, arr133, tmp203, arr134, tmp204, arr135, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, arr136, arr137, arr138, tmp211, tmp212, tmp213, arr139, tmp214, arr140, tmp215, arr141, tmp216, tmp217, tmp218, tmp219, tmp220, arr142, arr143, arr144, tmp221, tmp222, tmp223, tmp224, tmp225, arr145, arr146, arr147, tmp226, tmp227, tmp228, arr148, tmp229, arr149, arr150, tmp230, tmp231, tmp232, tmp233, arr151, arr152, arr153, tmp234, tmp235, tmp236, arr154, arr155, arr156, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, arr157, arr158, arr159, tmp245, tmp246, tmp247, arr160, arr161, tmp248, arr162, tmp249, tmp250, tmp251, arr163, arr164, arr165, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, arr166, arr167, arr168, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279;
    const GT$class = class GT {
      constructor() {
        Object.defineProperty(this, "class", {
          value: GT
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"]; 
    };
    this.GT = globalThis.Object.freeze(new GT$class);
    const LT$class = class LT {
      constructor() {
        Object.defineProperty(this, "class", {
          value: LT
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"]; 
    };
    this.LT = globalThis.Object.freeze(new LT$class);
    const EQ$class = class EQ {
      constructor() {
        Object.defineProperty(this, "class", {
          value: EQ
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"]; 
    };
    this.EQ = globalThis.Object.freeze(new EQ$class);
    this.Map = class Map {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Map"]; 
    };
    const Tip$class = class Tip extends lastpiece.Map {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Tip
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"]; 
    };
    this.Tip = globalThis.Object.freeze(new Tip$class);
    this.Bin = function Bin(i, k, v, l, r) {
      return globalThis.Object.freeze(new Bin.class(i, k, v, l, r));
    };
    Object.defineProperty(this.Bin, "class", {
      enumerable: true,
      value: class Bin extends lastpiece.Map {
        constructor(i, k, v, l, r) {
          super();
          this.i = i;
          this.k = k;
          this.v = v;
          this.l = l;
          this.r = r;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Bin", ["i", "k", "v", "l", "r"]]; 
      }
    });
    this.P = function P(i, a, b) {
      return globalThis.Object.freeze(new P.class(i, a, b));
    };
    Object.defineProperty(this.P, "class", {
      enumerable: true,
      value: class P {
        constructor(i, a, b) {
          this.i = i;
          this.a = a;
          this.b = b;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "P", ["i", "a", "b"]]; 
      }
    });
    this.S = class S {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "S"]; 
    };
    const Male$class = class Male extends lastpiece.S {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Male
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Male"]; 
    };
    this.Male = globalThis.Object.freeze(new Male$class);
    const Female$class = class Female extends lastpiece.S {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Female
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Female"]; 
    };
    this.Female = globalThis.Object.freeze(new Female$class);
    this.Solution = class Solution {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Solution"]; 
    };
    this.Soln = function Soln(b) {
      return globalThis.Object.freeze(new Soln.class(b));
    };
    Object.defineProperty(this.Soln, "class", {
      enumerable: true,
      value: class Soln extends lastpiece.Solution {
        constructor(b) {
          super();
          this.b = b;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Soln", ["b"]]; 
      }
    });
    this.Choose = function Choose(s) {
      return globalThis.Object.freeze(new Choose.class(s));
    };
    Object.defineProperty(this.Choose, "class", {
      enumerable: true,
      value: class Choose extends lastpiece.Solution {
        constructor(s) {
          super();
          this.s = s;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Choose", ["s"]]; 
      }
    });
    this.Fail = function Fail(b, s) {
      return globalThis.Object.freeze(new Fail.class(b, s));
    };
    Object.defineProperty(this.Fail, "class", {
      enumerable: true,
      value: class Fail extends lastpiece.Solution {
        constructor(b, s) {
          super();
          this.b = b;
          this.s = s;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Fail", ["b", "s"]]; 
      }
    });
    this.maxRow = 8;
    this.maxCol = 8;
    this.emptyBoard = lastpiece.Tip;
    arr = globalThis.Object.freeze([
      0,
      1
    ]);
    arr1 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr2 = globalThis.Object.freeze([
      2,
      1
    ]);
    arr3 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp = NofibPrelude.Cons(arr3, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(arr2, tmp);
    tmp2 = NofibPrelude.Cons(arr1, tmp1);
    tmp3 = NofibPrelude.Cons(arr, tmp2);
    arr4 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp4 = - 1;
    arr5 = globalThis.Object.freeze([
      1,
      tmp4
    ]);
    tmp5 = - 2;
    arr6 = globalThis.Object.freeze([
      1,
      tmp5
    ]);
    tmp6 = - 2;
    arr7 = globalThis.Object.freeze([
      2,
      tmp6
    ]);
    tmp7 = NofibPrelude.Cons(arr7, NofibPrelude.Nil);
    tmp8 = NofibPrelude.Cons(arr6, tmp7);
    tmp9 = NofibPrelude.Cons(arr5, tmp8);
    tmp10 = NofibPrelude.Cons(arr4, tmp9);
    tmp11 = NofibPrelude.Cons(tmp10, NofibPrelude.Nil);
    tmp12 = NofibPrelude.Cons(tmp3, tmp11);
    tmp13 = runtime.safeCall(lastpiece.P("n", tmp12, NofibPrelude.Nil));
    this.nPiece = tmp13;
    arr8 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr9 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr10 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr11 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp14 = NofibPrelude.Cons(arr11, NofibPrelude.Nil);
    tmp15 = NofibPrelude.Cons(arr10, tmp14);
    tmp16 = NofibPrelude.Cons(arr9, tmp15);
    tmp17 = NofibPrelude.Cons(arr8, tmp16);
    tmp18 = NofibPrelude.Cons(tmp17, NofibPrelude.Nil);
    arr12 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr13 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr14 = globalThis.Object.freeze([
      0,
      3
    ]);
    arr15 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp19 = NofibPrelude.Cons(arr15, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(arr14, tmp19);
    tmp21 = NofibPrelude.Cons(arr13, tmp20);
    tmp22 = NofibPrelude.Cons(arr12, tmp21);
    arr16 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr17 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr18 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp23 = - 1;
    arr19 = globalThis.Object.freeze([
      3,
      tmp23
    ]);
    tmp24 = NofibPrelude.Cons(arr19, NofibPrelude.Nil);
    tmp25 = NofibPrelude.Cons(arr18, tmp24);
    tmp26 = NofibPrelude.Cons(arr17, tmp25);
    tmp27 = NofibPrelude.Cons(arr16, tmp26);
    tmp28 = NofibPrelude.Cons(tmp27, NofibPrelude.Nil);
    tmp29 = NofibPrelude.Cons(tmp22, tmp28);
    tmp30 = runtime.safeCall(lastpiece.P("m", tmp18, tmp29));
    this.mPiece = tmp30;
    arr20 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr21 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr22 = globalThis.Object.freeze([
      0,
      3
    ]);
    arr23 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp31 = NofibPrelude.Cons(arr23, NofibPrelude.Nil);
    tmp32 = NofibPrelude.Cons(arr22, tmp31);
    tmp33 = NofibPrelude.Cons(arr21, tmp32);
    tmp34 = NofibPrelude.Cons(arr20, tmp33);
    arr24 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr25 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr26 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp35 = - 1;
    arr27 = globalThis.Object.freeze([
      2,
      tmp35
    ]);
    tmp36 = NofibPrelude.Cons(arr27, NofibPrelude.Nil);
    tmp37 = NofibPrelude.Cons(arr26, tmp36);
    tmp38 = NofibPrelude.Cons(arr25, tmp37);
    tmp39 = NofibPrelude.Cons(arr24, tmp38);
    tmp40 = NofibPrelude.Cons(tmp39, NofibPrelude.Nil);
    tmp41 = NofibPrelude.Cons(tmp34, tmp40);
    tmp42 = - 1;
    arr28 = globalThis.Object.freeze([
      1,
      tmp42
    ]);
    arr29 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr30 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr31 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp43 = NofibPrelude.Cons(arr31, NofibPrelude.Nil);
    tmp44 = NofibPrelude.Cons(arr30, tmp43);
    tmp45 = NofibPrelude.Cons(arr29, tmp44);
    tmp46 = NofibPrelude.Cons(arr28, tmp45);
    arr32 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr33 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr34 = globalThis.Object.freeze([
      3,
      0
    ]);
    arr35 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp47 = NofibPrelude.Cons(arr35, NofibPrelude.Nil);
    tmp48 = NofibPrelude.Cons(arr34, tmp47);
    tmp49 = NofibPrelude.Cons(arr33, tmp48);
    tmp50 = NofibPrelude.Cons(arr32, tmp49);
    tmp51 = NofibPrelude.Cons(tmp50, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(tmp46, tmp51);
    tmp53 = runtime.safeCall(lastpiece.P("l", tmp41, tmp52));
    this.lPiece = tmp53;
    arr36 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr37 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr38 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp54 = - 1;
    arr39 = globalThis.Object.freeze([
      2,
      tmp54
    ]);
    tmp55 = NofibPrelude.Cons(arr39, NofibPrelude.Nil);
    tmp56 = NofibPrelude.Cons(arr38, tmp55);
    tmp57 = NofibPrelude.Cons(arr37, tmp56);
    tmp58 = NofibPrelude.Cons(arr36, tmp57);
    tmp59 = NofibPrelude.Cons(tmp58, NofibPrelude.Nil);
    arr40 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr41 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr42 = globalThis.Object.freeze([
      1,
      2
    ]);
    arr43 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp60 = NofibPrelude.Cons(arr43, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(arr42, tmp60);
    tmp62 = NofibPrelude.Cons(arr41, tmp61);
    tmp63 = NofibPrelude.Cons(arr40, tmp62);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = runtime.safeCall(lastpiece.P("k", tmp59, tmp64));
    this.kPiece = tmp65;
    arr44 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr45 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr46 = globalThis.Object.freeze([
      0,
      3
    ]);
    arr47 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp66 = NofibPrelude.Cons(arr47, NofibPrelude.Nil);
    tmp67 = NofibPrelude.Cons(arr46, tmp66);
    tmp68 = NofibPrelude.Cons(arr45, tmp67);
    tmp69 = NofibPrelude.Cons(arr44, tmp68);
    arr48 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr49 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr50 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp70 = - 1;
    arr51 = globalThis.Object.freeze([
      1,
      tmp70
    ]);
    tmp71 = NofibPrelude.Cons(arr51, NofibPrelude.Nil);
    tmp72 = NofibPrelude.Cons(arr50, tmp71);
    tmp73 = NofibPrelude.Cons(arr49, tmp72);
    tmp74 = NofibPrelude.Cons(arr48, tmp73);
    tmp75 = - 2;
    arr52 = globalThis.Object.freeze([
      1,
      tmp75
    ]);
    tmp76 = - 1;
    arr53 = globalThis.Object.freeze([
      1,
      tmp76
    ]);
    arr54 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr55 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp77 = NofibPrelude.Cons(arr55, NofibPrelude.Nil);
    tmp78 = NofibPrelude.Cons(arr54, tmp77);
    tmp79 = NofibPrelude.Cons(arr53, tmp78);
    tmp80 = NofibPrelude.Cons(arr52, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp74, tmp81);
    tmp83 = NofibPrelude.Cons(tmp69, tmp82);
    arr56 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr57 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr58 = globalThis.Object.freeze([
      3,
      0
    ]);
    arr59 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp84 = NofibPrelude.Cons(arr59, NofibPrelude.Nil);
    tmp85 = NofibPrelude.Cons(arr58, tmp84);
    tmp86 = NofibPrelude.Cons(arr57, tmp85);
    tmp87 = NofibPrelude.Cons(arr56, tmp86);
    tmp88 = NofibPrelude.Cons(tmp87, NofibPrelude.Nil);
    tmp89 = runtime.safeCall(lastpiece.P("j", tmp83, tmp88));
    this.jPiece = tmp89;
    arr60 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr61 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr62 = globalThis.Object.freeze([
      2,
      1
    ]);
    arr63 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp90 = NofibPrelude.Cons(arr63, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(arr62, tmp90);
    tmp92 = NofibPrelude.Cons(arr61, tmp91);
    tmp93 = NofibPrelude.Cons(arr60, tmp92);
    arr64 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr65 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr66 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp94 = - 1;
    arr67 = globalThis.Object.freeze([
      1,
      tmp94
    ]);
    tmp95 = NofibPrelude.Cons(arr67, NofibPrelude.Nil);
    tmp96 = NofibPrelude.Cons(arr66, tmp95);
    tmp97 = NofibPrelude.Cons(arr65, tmp96);
    tmp98 = NofibPrelude.Cons(arr64, tmp97);
    arr68 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr69 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr70 = globalThis.Object.freeze([
      2,
      1
    ]);
    arr71 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp99 = NofibPrelude.Cons(arr71, NofibPrelude.Nil);
    tmp100 = NofibPrelude.Cons(arr70, tmp99);
    tmp101 = NofibPrelude.Cons(arr69, tmp100);
    tmp102 = NofibPrelude.Cons(arr68, tmp101);
    tmp103 = NofibPrelude.Cons(tmp102, NofibPrelude.Nil);
    tmp104 = NofibPrelude.Cons(tmp98, tmp103);
    tmp105 = NofibPrelude.Cons(tmp93, tmp104);
    arr72 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr73 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp106 = - 1;
    arr74 = globalThis.Object.freeze([
      1,
      tmp106
    ]);
    tmp107 = - 2;
    arr75 = globalThis.Object.freeze([
      1,
      tmp107
    ]);
    tmp108 = NofibPrelude.Cons(arr75, NofibPrelude.Nil);
    tmp109 = NofibPrelude.Cons(arr74, tmp108);
    tmp110 = NofibPrelude.Cons(arr73, tmp109);
    tmp111 = NofibPrelude.Cons(arr72, tmp110);
    tmp112 = NofibPrelude.Cons(tmp111, NofibPrelude.Nil);
    tmp113 = runtime.safeCall(lastpiece.P("i", tmp105, tmp112));
    this.iPiece = tmp113;
    arr76 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr77 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr78 = globalThis.Object.freeze([
      1,
      2
    ]);
    arr79 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp114 = NofibPrelude.Cons(arr79, NofibPrelude.Nil);
    tmp115 = NofibPrelude.Cons(arr78, tmp114);
    tmp116 = NofibPrelude.Cons(arr77, tmp115);
    tmp117 = NofibPrelude.Cons(arr76, tmp116);
    arr80 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp118 = - 1;
    arr81 = globalThis.Object.freeze([
      1,
      tmp118
    ]);
    tmp119 = - 1;
    arr82 = globalThis.Object.freeze([
      2,
      tmp119
    ]);
    tmp120 = - 2;
    arr83 = globalThis.Object.freeze([
      2,
      tmp120
    ]);
    tmp121 = NofibPrelude.Cons(arr83, NofibPrelude.Nil);
    tmp122 = NofibPrelude.Cons(arr82, tmp121);
    tmp123 = NofibPrelude.Cons(arr81, tmp122);
    tmp124 = NofibPrelude.Cons(arr80, tmp123);
    arr84 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr85 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr86 = globalThis.Object.freeze([
      2,
      1
    ]);
    arr87 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp125 = NofibPrelude.Cons(arr87, NofibPrelude.Nil);
    tmp126 = NofibPrelude.Cons(arr86, tmp125);
    tmp127 = NofibPrelude.Cons(arr85, tmp126);
    tmp128 = NofibPrelude.Cons(arr84, tmp127);
    tmp129 = NofibPrelude.Cons(tmp128, NofibPrelude.Nil);
    tmp130 = NofibPrelude.Cons(tmp124, tmp129);
    tmp131 = NofibPrelude.Cons(tmp117, tmp130);
    arr88 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr89 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp132 = - 1;
    arr90 = globalThis.Object.freeze([
      1,
      tmp132
    ]);
    tmp133 = - 1;
    arr91 = globalThis.Object.freeze([
      2,
      tmp133
    ]);
    tmp134 = NofibPrelude.Cons(arr91, NofibPrelude.Nil);
    tmp135 = NofibPrelude.Cons(arr90, tmp134);
    tmp136 = NofibPrelude.Cons(arr89, tmp135);
    tmp137 = NofibPrelude.Cons(arr88, tmp136);
    tmp138 = NofibPrelude.Cons(tmp137, NofibPrelude.Nil);
    tmp139 = runtime.safeCall(lastpiece.P("h", tmp131, tmp138));
    this.hPiece = tmp139;
    arr92 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr93 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr94 = globalThis.Object.freeze([
      1,
      2
    ]);
    arr95 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp140 = NofibPrelude.Cons(arr95, NofibPrelude.Nil);
    tmp141 = NofibPrelude.Cons(arr94, tmp140);
    tmp142 = NofibPrelude.Cons(arr93, tmp141);
    tmp143 = NofibPrelude.Cons(arr92, tmp142);
    arr96 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp144 = - 1;
    arr97 = globalThis.Object.freeze([
      1,
      tmp144
    ]);
    tmp145 = - 1;
    arr98 = globalThis.Object.freeze([
      2,
      tmp145
    ]);
    tmp146 = - 1;
    arr99 = globalThis.Object.freeze([
      3,
      tmp146
    ]);
    tmp147 = NofibPrelude.Cons(arr99, NofibPrelude.Nil);
    tmp148 = NofibPrelude.Cons(arr98, tmp147);
    tmp149 = NofibPrelude.Cons(arr97, tmp148);
    tmp150 = NofibPrelude.Cons(arr96, tmp149);
    arr100 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr101 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr102 = globalThis.Object.freeze([
      1,
      2
    ]);
    arr103 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp151 = NofibPrelude.Cons(arr103, NofibPrelude.Nil);
    tmp152 = NofibPrelude.Cons(arr102, tmp151);
    tmp153 = NofibPrelude.Cons(arr101, tmp152);
    tmp154 = NofibPrelude.Cons(arr100, tmp153);
    arr104 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr105 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp155 = - 1;
    arr106 = globalThis.Object.freeze([
      2,
      tmp155
    ]);
    tmp156 = - 1;
    arr107 = globalThis.Object.freeze([
      3,
      tmp156
    ]);
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
    arr108 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr109 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr110 = globalThis.Object.freeze([
      2,
      1
    ]);
    arr111 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp166 = NofibPrelude.Cons(arr111, NofibPrelude.Nil);
    tmp167 = NofibPrelude.Cons(arr110, tmp166);
    tmp168 = NofibPrelude.Cons(arr109, tmp167);
    tmp169 = NofibPrelude.Cons(arr108, tmp168);
    arr112 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp170 = - 1;
    arr113 = globalThis.Object.freeze([
      1,
      tmp170
    ]);
    tmp171 = - 2;
    arr114 = globalThis.Object.freeze([
      1,
      tmp171
    ]);
    tmp172 = - 3;
    arr115 = globalThis.Object.freeze([
      1,
      tmp172
    ]);
    tmp173 = NofibPrelude.Cons(arr115, NofibPrelude.Nil);
    tmp174 = NofibPrelude.Cons(arr114, tmp173);
    tmp175 = NofibPrelude.Cons(arr113, tmp174);
    tmp176 = NofibPrelude.Cons(arr112, tmp175);
    arr116 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr117 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr118 = globalThis.Object.freeze([
      3,
      0
    ]);
    arr119 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp177 = NofibPrelude.Cons(arr119, NofibPrelude.Nil);
    tmp178 = NofibPrelude.Cons(arr118, tmp177);
    tmp179 = NofibPrelude.Cons(arr117, tmp178);
    tmp180 = NofibPrelude.Cons(arr116, tmp179);
    tmp181 = NofibPrelude.Cons(tmp180, NofibPrelude.Nil);
    tmp182 = NofibPrelude.Cons(tmp176, tmp181);
    tmp183 = NofibPrelude.Cons(tmp169, tmp182);
    arr120 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr121 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr122 = globalThis.Object.freeze([
      0,
      3
    ]);
    arr123 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp184 = NofibPrelude.Cons(arr123, NofibPrelude.Nil);
    tmp185 = NofibPrelude.Cons(arr122, tmp184);
    tmp186 = NofibPrelude.Cons(arr121, tmp185);
    tmp187 = NofibPrelude.Cons(arr120, tmp186);
    tmp188 = NofibPrelude.Cons(tmp187, NofibPrelude.Nil);
    tmp189 = runtime.safeCall(lastpiece.P("f", tmp183, tmp188));
    this.fPiece = tmp189;
    arr124 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr125 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr126 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp190 = NofibPrelude.Cons(arr126, NofibPrelude.Nil);
    tmp191 = NofibPrelude.Cons(arr125, tmp190);
    tmp192 = NofibPrelude.Cons(arr124, tmp191);
    arr127 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp193 = - 1;
    arr128 = globalThis.Object.freeze([
      1,
      tmp193
    ]);
    tmp194 = - 1;
    arr129 = globalThis.Object.freeze([
      2,
      tmp194
    ]);
    tmp195 = NofibPrelude.Cons(arr129, NofibPrelude.Nil);
    tmp196 = NofibPrelude.Cons(arr128, tmp195);
    tmp197 = NofibPrelude.Cons(arr127, tmp196);
    tmp198 = NofibPrelude.Cons(tmp197, NofibPrelude.Nil);
    tmp199 = NofibPrelude.Cons(tmp192, tmp198);
    arr130 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr131 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr132 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp200 = NofibPrelude.Cons(arr132, NofibPrelude.Nil);
    tmp201 = NofibPrelude.Cons(arr131, tmp200);
    tmp202 = NofibPrelude.Cons(arr130, tmp201);
    arr133 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp203 = - 1;
    arr134 = globalThis.Object.freeze([
      1,
      tmp203
    ]);
    tmp204 = - 1;
    arr135 = globalThis.Object.freeze([
      2,
      tmp204
    ]);
    tmp205 = NofibPrelude.Cons(arr135, NofibPrelude.Nil);
    tmp206 = NofibPrelude.Cons(arr134, tmp205);
    tmp207 = NofibPrelude.Cons(arr133, tmp206);
    tmp208 = NofibPrelude.Cons(tmp207, NofibPrelude.Nil);
    tmp209 = NofibPrelude.Cons(tmp202, tmp208);
    tmp210 = runtime.safeCall(lastpiece.P("e", tmp199, tmp209));
    this.ePiece = tmp210;
    arr136 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr137 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr138 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp211 = NofibPrelude.Cons(arr138, NofibPrelude.Nil);
    tmp212 = NofibPrelude.Cons(arr137, tmp211);
    tmp213 = NofibPrelude.Cons(arr136, tmp212);
    arr139 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp214 = - 1;
    arr140 = globalThis.Object.freeze([
      1,
      tmp214
    ]);
    tmp215 = - 2;
    arr141 = globalThis.Object.freeze([
      1,
      tmp215
    ]);
    tmp216 = NofibPrelude.Cons(arr141, NofibPrelude.Nil);
    tmp217 = NofibPrelude.Cons(arr140, tmp216);
    tmp218 = NofibPrelude.Cons(arr139, tmp217);
    tmp219 = NofibPrelude.Cons(tmp218, NofibPrelude.Nil);
    tmp220 = NofibPrelude.Cons(tmp213, tmp219);
    arr142 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr143 = globalThis.Object.freeze([
      2,
      0
    ]);
    arr144 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp221 = NofibPrelude.Cons(arr144, NofibPrelude.Nil);
    tmp222 = NofibPrelude.Cons(arr143, tmp221);
    tmp223 = NofibPrelude.Cons(arr142, tmp222);
    tmp224 = NofibPrelude.Cons(tmp223, NofibPrelude.Nil);
    tmp225 = runtime.safeCall(lastpiece.P("d", tmp220, tmp224));
    this.dPiece = tmp225;
    arr145 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr146 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr147 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp226 = NofibPrelude.Cons(arr147, NofibPrelude.Nil);
    tmp227 = NofibPrelude.Cons(arr146, tmp226);
    tmp228 = NofibPrelude.Cons(arr145, tmp227);
    arr148 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp229 = - 1;
    arr149 = globalThis.Object.freeze([
      1,
      tmp229
    ]);
    arr150 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp230 = NofibPrelude.Cons(arr150, NofibPrelude.Nil);
    tmp231 = NofibPrelude.Cons(arr149, tmp230);
    tmp232 = NofibPrelude.Cons(arr148, tmp231);
    tmp233 = - 1;
    arr151 = globalThis.Object.freeze([
      1,
      tmp233
    ]);
    arr152 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr153 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp234 = NofibPrelude.Cons(arr153, NofibPrelude.Nil);
    tmp235 = NofibPrelude.Cons(arr152, tmp234);
    tmp236 = NofibPrelude.Cons(arr151, tmp235);
    arr154 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr155 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr156 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp237 = NofibPrelude.Cons(arr156, NofibPrelude.Nil);
    tmp238 = NofibPrelude.Cons(arr155, tmp237);
    tmp239 = NofibPrelude.Cons(arr154, tmp238);
    tmp240 = NofibPrelude.Cons(tmp239, NofibPrelude.Nil);
    tmp241 = NofibPrelude.Cons(tmp236, tmp240);
    tmp242 = NofibPrelude.Cons(tmp232, tmp241);
    tmp243 = NofibPrelude.Cons(tmp228, tmp242);
    tmp244 = runtime.safeCall(lastpiece.P("c", NofibPrelude.Nil, tmp243));
    this.cPiece = tmp244;
    arr157 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr158 = globalThis.Object.freeze([
      0,
      2
    ]);
    arr159 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp245 = NofibPrelude.Cons(arr159, NofibPrelude.Nil);
    tmp246 = NofibPrelude.Cons(arr158, tmp245);
    tmp247 = NofibPrelude.Cons(arr157, tmp246);
    arr160 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr161 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp248 = - 1;
    arr162 = globalThis.Object.freeze([
      2,
      tmp248
    ]);
    tmp249 = NofibPrelude.Cons(arr162, NofibPrelude.Nil);
    tmp250 = NofibPrelude.Cons(arr161, tmp249);
    tmp251 = NofibPrelude.Cons(arr160, tmp250);
    arr163 = globalThis.Object.freeze([
      0,
      1
    ]);
    arr164 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr165 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp252 = NofibPrelude.Cons(arr165, NofibPrelude.Nil);
    tmp253 = NofibPrelude.Cons(arr164, tmp252);
    tmp254 = NofibPrelude.Cons(arr163, tmp253);
    tmp255 = NofibPrelude.Cons(tmp254, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(tmp251, tmp255);
    tmp257 = NofibPrelude.Cons(tmp247, tmp256);
    arr166 = globalThis.Object.freeze([
      1,
      0
    ]);
    arr167 = globalThis.Object.freeze([
      1,
      1
    ]);
    arr168 = globalThis.Object.freeze([
      1,
      2
    ]);
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
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Mode"]; 
    };
    const PageMode$class = class PageMode extends lastpiece.Mode {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PageMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PageMode"]; 
    };
    this.PageMode = globalThis.Object.freeze(new PageMode$class);
    const ZigZagMode$class = class ZigZagMode extends lastpiece.Mode {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: ZigZagMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZigZagMode"]; 
    };
    this.ZigZagMode = globalThis.Object.freeze(new ZigZagMode$class);
    const LeftMode$class = class LeftMode extends lastpiece.Mode {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LeftMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftMode"]; 
    };
    this.LeftMode = globalThis.Object.freeze(new LeftMode$class);
    const OneLineMode$class = class OneLineMode extends lastpiece.Mode {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: OneLineMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OneLineMode"]; 
    };
    this.OneLineMode = globalThis.Object.freeze(new OneLineMode$class);
    this.TextDetails = class TextDetails {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextDetails"]; 
    };
    this.Chr = function Chr(c) {
      return globalThis.Object.freeze(new Chr.class(c));
    };
    Object.defineProperty(this.Chr, "class", {
      enumerable: true,
      value: class Chr extends lastpiece.TextDetails {
        constructor(c) {
          super();
          this.c = c;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Chr", ["c"]]; 
      }
    });
    this.Str = function Str(s) {
      return globalThis.Object.freeze(new Str.class(s));
    };
    Object.defineProperty(this.Str, "class", {
      enumerable: true,
      value: class Str extends lastpiece.TextDetails {
        constructor(s) {
          super();
          this.s = s;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Str", ["s"]]; 
      }
    });
    this.PStr = function PStr(s) {
      return globalThis.Object.freeze(new PStr.class(s));
    };
    Object.defineProperty(this.PStr, "class", {
      enumerable: true,
      value: class PStr extends lastpiece.TextDetails {
        constructor(s) {
          super();
          this.s = s;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "PStr", ["s"]]; 
      }
    });
    this.AnnotDetails = class AnnotDetails {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "AnnotDetails"]; 
    };
    const AnnotStart$class = class AnnotStart extends lastpiece.AnnotDetails {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: AnnotStart
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotStart"]; 
    };
    this.AnnotStart = globalThis.Object.freeze(new AnnotStart$class);
    const AnnotEnd$class = class AnnotEnd extends lastpiece.AnnotDetails {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: AnnotEnd
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotEnd"]; 
    };
    this.AnnotEnd = globalThis.Object.freeze(new AnnotEnd$class);
    this.NoAnnot = function NoAnnot(t, i) {
      return globalThis.Object.freeze(new NoAnnot.class(t, i));
    };
    Object.defineProperty(this.NoAnnot, "class", {
      enumerable: true,
      value: class NoAnnot extends lastpiece.AnnotDetails {
        constructor(t, i) {
          super();
          this.t = t;
          this.i = i;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "NoAnnot", ["t", "i"]]; 
      }
    });
    this.IsEmptyy = class IsEmptyy {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IsEmptyy"]; 
    };
    const IsEmpty$class = class IsEmpty extends lastpiece.IsEmptyy {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: IsEmpty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IsEmpty"]; 
    };
    this.IsEmpty = globalThis.Object.freeze(new IsEmpty$class);
    const NotEmpty$class = class NotEmpty extends lastpiece.IsEmptyy {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: NotEmpty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NotEmpty"]; 
    };
    this.NotEmpty = globalThis.Object.freeze(new NotEmpty$class);
    this.Doc = class Doc {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Doc"]; 
    };
    const Empty$class = class Empty extends lastpiece.Doc {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Empty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"]; 
    };
    this.Empty = globalThis.Object.freeze(new Empty$class);
    const NoDoc$class = class NoDoc extends lastpiece.Doc {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: NoDoc
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NoDoc"]; 
    };
    this.NoDoc = globalThis.Object.freeze(new NoDoc$class);
    this.NilAbove = function NilAbove(d) {
      return globalThis.Object.freeze(new NilAbove.class(d));
    };
    Object.defineProperty(this.NilAbove, "class", {
      enumerable: true,
      value: class NilAbove extends lastpiece.Doc {
        constructor(d) {
          super();
          this.d = d;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "NilAbove", ["d"]]; 
      }
    });
    this.TextBeside = function TextBeside(a, d) {
      return globalThis.Object.freeze(new TextBeside.class(a, d));
    };
    Object.defineProperty(this.TextBeside, "class", {
      enumerable: true,
      value: class TextBeside extends lastpiece.Doc {
        constructor(a, d) {
          super();
          this.a = a;
          this.d = d;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "TextBeside", ["a", "d"]]; 
      }
    });
    this.Nest = function Nest(i, d) {
      return globalThis.Object.freeze(new Nest.class(i, d));
    };
    Object.defineProperty(this.Nest, "class", {
      enumerable: true,
      value: class Nest extends lastpiece.Doc {
        constructor(i, d) {
          super();
          this.i = i;
          this.d = d;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Nest", ["i", "d"]]; 
      }
    });
    this.Union = function Union(d1, d2) {
      return globalThis.Object.freeze(new Union.class(d1, d2));
    };
    Object.defineProperty(this.Union, "class", {
      enumerable: true,
      value: class Union extends lastpiece.Doc {
        constructor(d1, d2) {
          super();
          this.d1 = d1;
          this.d2 = d2;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Union", ["d1", "d2"]]; 
      }
    });
    this.Beside = function Beside(d1, b, d2) {
      return globalThis.Object.freeze(new Beside.class(d1, b, d2));
    };
    Object.defineProperty(this.Beside, "class", {
      enumerable: true,
      value: class Beside extends lastpiece.Doc {
        constructor(d1, b, d2) {
          super();
          this.d1 = d1;
          this.b = b;
          this.d2 = d2;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Beside", ["d1", "b", "d2"]]; 
      }
    });
    this.Above = function Above(d1, b, d2) {
      return globalThis.Object.freeze(new Above.class(d1, b, d2));
    };
    Object.defineProperty(this.Above, "class", {
      enumerable: true,
      value: class Above extends lastpiece.Doc {
        constructor(d1, b, d2) {
          super();
          this.d1 = d1;
          this.b = b;
          this.d2 = d2;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Above", ["d1", "b", "d2"]]; 
      }
    });
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
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static compareIntInt(ab, cd) {
    let first1, first0, a, b, first11, first01, c, d, scrut, scrut1, scrut2, scrut3;
    if (runtime.Tuple.isArrayLike(ab) && ab.length === 2) {
      first0 = runtime.Tuple.get(ab, 0);
      first1 = runtime.Tuple.get(ab, 1);
      a = first0;
      b = first1;
      if (runtime.Tuple.isArrayLike(cd) && cd.length === 2) {
        first01 = runtime.Tuple.get(cd, 0);
        first11 = runtime.Tuple.get(cd, 1);
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
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static mapLookup(k, m) {
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
      scrut = compareIntInt_inst_32_3_tsni(k, kx);
      return runtime.safeCall(scrut(k, x, l, r))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static bin(k, x, l, r) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = lastpiece.size(l);
    tmp1 = lastpiece.size(r);
    tmp2 = tmp + tmp1;
    tmp3 = tmp2 + 1;
    return runtime.safeCall(lastpiece.Bin(tmp3, k, x, l, r))
  } 
  static singleL(k1, x1, t1, r) {
    let param0, param1, param2, param3, param4, k2, x2, t2, t3, tmp;
    if (r instanceof lastpiece.Bin.class) {
      param0 = r.i;
      param1 = r.k;
      param2 = r.v;
      param3 = r.l;
      param4 = r.r;
      k2 = param1;
      x2 = param2;
      t2 = param3;
      t3 = param4;
      tmp = lastpiece.bin(k1, x1, t1, t2);
      return lastpiece.bin(k2, x2, tmp, t3)
    } else {
      throw globalThis.Error("singleL Tip")
    }
  } 
  static singleR(k1, x1, l, t3) {
    let param0, param1, param2, param3, param4, k2, x2, t1, t2, tmp;
    if (l instanceof lastpiece.Bin.class) {
      param0 = l.i;
      param1 = l.k;
      param2 = l.v;
      param3 = l.l;
      param4 = l.r;
      k2 = param1;
      x2 = param2;
      t1 = param3;
      t2 = param4;
      tmp = lastpiece.bin(k1, x1, t2, t3);
      return lastpiece.bin(k2, x2, t1, tmp)
    } else {
      throw globalThis.Error("singleR Tip")
    }
  } 
  static doubleL(k1, x1, t1, r) {
    let param0, param1, param2, param3, param4, k2, x2, param01, param11, param21, param31, param41, k3, x3, t2, t3, t4, tmp, tmp1;
    if (r instanceof lastpiece.Bin.class) {
      param0 = r.i;
      param1 = r.k;
      param2 = r.v;
      param3 = r.l;
      param4 = r.r;
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
        t3 = param41;
        t4 = param4;
        tmp = lastpiece.bin(k1, x1, t1, t2);
        tmp1 = lastpiece.bin(k2, x2, t3, t4);
        return lastpiece.bin(k3, x3, tmp, tmp1)
      } else {
        throw globalThis.Error("doubleL Tip")
      }
    } else {
      throw globalThis.Error("doubleL Tip")
    }
  } 
  static doubleR(k1, x1, l, t4) {
    let param0, param1, param2, param3, param4, k2, x2, t1, param01, param11, param21, param31, param41, k3, x3, t2, t3, tmp, tmp1;
    if (l instanceof lastpiece.Bin.class) {
      param0 = l.i;
      param1 = l.k;
      param2 = l.v;
      param3 = l.l;
      param4 = l.r;
      k2 = param1;
      x2 = param2;
      t1 = param3;
      if (param4 instanceof lastpiece.Bin.class) {
        param01 = param4.i;
        param11 = param4.k;
        param21 = param4.v;
        param31 = param4.l;
        param41 = param4.r;
        k3 = param11;
        x3 = param21;
        t2 = param31;
        t3 = param41;
        tmp = lastpiece.bin(k2, x2, t1, t2);
        tmp1 = lastpiece.bin(k1, x1, t3, t4);
        return lastpiece.bin(k3, x3, tmp, tmp1)
      } else {
        throw globalThis.Error("doubleR Tip")
      }
    } else {
      throw globalThis.Error("doubleR Tip")
    }
  } 
  static rotateL(k, x, l, r) {
    let param0, param1, param2, param3, param4, ly, ry, scrut, tmp, tmp1, tmp2;
    if (r instanceof lastpiece.Bin.class) {
      param0 = r.i;
      param1 = r.k;
      param2 = r.v;
      param3 = r.l;
      param4 = r.r;
      ly = param3;
      ry = param4;
      tmp = lastpiece.size(ly);
      tmp1 = lastpiece.size(ry);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleL(k, x, l, r)
      } else {
        return lastpiece.doubleL(k, x, l, r)
      }
    } else {
      throw globalThis.Error("rotateL Tip")
    }
  } 
  static rotateR(k, x, l, r) {
    let param0, param1, param2, param3, param4, ly, ry, scrut, tmp, tmp1, tmp2;
    if (l instanceof lastpiece.Bin.class) {
      param0 = l.i;
      param1 = l.k;
      param2 = l.v;
      param3 = l.l;
      param4 = l.r;
      ly = param3;
      ry = param4;
      tmp = lastpiece.size(ry);
      tmp1 = lastpiece.size(ly);
      tmp2 = 2 * tmp1;
      scrut = tmp < tmp2;
      if (scrut === true) {
        return lastpiece.singleR(k, x, l, r)
      } else {
        return lastpiece.doubleR(k, x, l, r)
      }
    } else {
      throw globalThis.Error("rotateR Tip")
    }
  } 
  static balance(k, x, l, r) {
    let sizeL, sizeR, sizeX, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = lastpiece.size(l);
    sizeL = tmp;
    tmp1 = lastpiece.size(r);
    sizeR = tmp1;
    tmp2 = sizeL + sizeR;
    tmp3 = tmp2 + 1;
    sizeX = tmp3;
    tmp4 = sizeL + sizeR;
    scrut2 = tmp4 <= 1;
    if (scrut2 === true) {
      return runtime.safeCall(lastpiece.Bin(sizeX, k, x, l, r))
    } else {
      tmp5 = 4 * sizeL;
      scrut1 = sizeR >= tmp5;
      if (scrut1 === true) {
        return lastpiece.rotateL(k, x, l, r)
      } else {
        tmp6 = 4 * sizeR;
        scrut = sizeL >= tmp6;
        if (scrut === true) {
          return lastpiece.rotateR(k, x, l, r)
        } else {
          return runtime.safeCall(lastpiece.Bin(sizeX, k, x, l, r))
        }
      }
    }
  } 
  static insert(kx, x, m) {
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
      scrut = compareIntInt_inst_33_28_tsni(kx, ky);
      return runtime.safeCall(scrut(kx, x, sz, ky, y, l, r))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addIntInt(row_col, orow_ocol) {
    let first1, first0, row1, col, first11, first01, orow, ocol, tmp, tmp1, arr;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      first0 = runtime.Tuple.get(row_col, 0);
      first1 = runtime.Tuple.get(row_col, 1);
      row1 = first0;
      col = first1;
      if (runtime.Tuple.isArrayLike(orow_ocol) && orow_ocol.length === 2) {
        first01 = runtime.Tuple.get(orow_ocol, 0);
        first11 = runtime.Tuple.get(orow_ocol, 1);
        orow = first01;
        ocol = first11;
        tmp = row1 + orow;
        tmp1 = col + ocol;
        arr = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        return arr
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static next(row_col) {
    let first1, first0, row1, col, tmp, arr;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      first0 = runtime.Tuple.get(row_col, 0);
      first1 = runtime.Tuple.get(row_col, 1);
      row1 = first0;
      col = first1;
      tmp = col + 1;
      arr = globalThis.Object.freeze([
        row1,
        tmp
      ]);
      return arr
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static check(bd, sq1) {
    return mapLookup_inst_34_2_tsni(sq1, bd)
  } 
  static extend(bd, sq1, id) {
    return insert_inst_35_27_tsni(sq1, id, bd)
  } 
  static extend_maybe(bd, sq1, id) {
    let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, lambda$this, lambda$this1;
    if (runtime.Tuple.isArrayLike(sq1) && sq1.length === 2) {
      first0 = runtime.Tuple.get(sq1, 0);
      first1 = runtime.Tuple.get(sq1, 1);
      row1 = first0;
      col = first1;
      tmp = row1 > lastpiece.maxRow;
      lambda$this = runtime.safeCall(lambda(col));
      tmp1 = runtime.short_or(tmp, lambda$this);
      lambda$this1 = runtime.safeCall(lambda1(col));
      scrut1 = runtime.short_or(tmp1, lambda$this1);
      if (scrut1 === true) {
        return NofibPrelude.None
      } else {
        scrut = check_inst_36_25_tsni(bd, sq1);
        return runtime.safeCall(scrut(bd, sq1, id))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static pickOne(xs) {
    return go(lambda3, xs)
  } 
  static fit(bd, sq1, id, os) {
    let param0, param1, o, os1, scrut, tmp, tmp1;
    if (os instanceof NofibPrelude.Nil.class) {
      tmp = extend_inst_37_29_tsni(bd, sq1, id);
      return runtime.safeCall(NofibPrelude.Some(tmp))
    } else if (os instanceof NofibPrelude.Cons.class) {
      param0 = os.head;
      param1 = os.tail;
      o = param0;
      os1 = param1;
      tmp1 = lastpiece.addIntInt(sq1, o);
      scrut = extend_maybe_inst_37_24_tsni(bd, tmp1, id);
      return runtime.safeCall(scrut(sq1, id, os1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static tryy(sq1, se, bd, id_is_ps) {
    let first2, first1, first0, id, os, ps, scrut;
    if (runtime.Tuple.isArrayLike(id_is_ps) && id_is_ps.length === 3) {
      first0 = runtime.Tuple.get(id_is_ps, 0);
      first1 = runtime.Tuple.get(id_is_ps, 1);
      first2 = runtime.Tuple.get(id_is_ps, 2);
      id = first0;
      os = first1;
      ps = first2;
      scrut = fit_inst_38_23_tsni(bd, sq1, id, os);
      return runtime.safeCall(scrut(sq1, se, ps))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static search(row_col, sey, bd, ps) {
    let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, arr, tmp2;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      first0 = runtime.Tuple.get(row_col, 0);
      first1 = runtime.Tuple.get(row_col, 1);
      row1 = first0;
      col = first1;
      if (ps instanceof NofibPrelude.Nil.class) {
        return runtime.safeCall(lastpiece.Soln(bd))
      } else {
        tmp = lastpiece.maxCol + 1;
        scrut1 = col === tmp;
        if (scrut1 === true) {
          tmp1 = row1 + 1;
          arr = globalThis.Object.freeze([
            tmp1,
            1
          ]);
          tmp2 = lastpiece.flip(sey);
          return lastpiece.search(arr, tmp2, bd, ps)
        } else {
          scrut = check_inst_39_20_tsni(bd, row_col);
          return runtime.safeCall(scrut(row_col, sey, bd, ps))
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static annotSize(p) {
    let param0, param1, l;
    if (p instanceof lastpiece.NoAnnot.class) {
      param0 = p.t;
      param1 = p.i;
      l = param1;
      return l
    } else {
      return 0
    }
  } 
  static display(s) {
    let param0, param1, bd, first1, first0, row1, col, ss, bd1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
    if (s instanceof lastpiece.Soln.class) {
      param0 = s.b;
      bd1 = param0;
      tmp = NofibPrelude.nofibStringToList("Success!");
      tmp1 = lastpiece.text(tmp);
      tmp2 = displayBoard_inst_40_41_tsni(bd1);
      tmp3 = lastpiece.nest(2, tmp2);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = (f, z) => {
        return z
      };
      tmp4 = (f, z) => {
        return match_xs_arm_Cons_inst_40_48_66_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
      };
      _deforest_Cons_head = tmp1;
      _deforest_Cons_tail = tmp4;
      tmp5 = (f, z) => {
        return match_xs_arm_Cons_inst_40_48_66_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
      };
      return vcat_inst_40_48_tsni(tmp5)
    } else if (s instanceof lastpiece.Choose.class) {
      param0 = s.s;
      ss = param0;
      tmp6 = map_inst_40_50_tsni(lastpiece.display, ss);
      return vcat_inst_40_49_tsni(tmp6)
    } else if (s instanceof lastpiece.Fail.class) {
      param0 = s.b;
      param1 = s.s;
      bd = param0;
      if (runtime.Tuple.isArrayLike(param1) && param1.length === 2) {
        first0 = runtime.Tuple.get(param1, 0);
        first1 = runtime.Tuple.get(param1, 1);
        row1 = first0;
        col = first1;
        return lastpiece.Empty
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static displayBoard(bd) {
    let tmp, tmp1, tmp2, tmp3, row$this;
    tmp = enumFromTo_inst_51_47_tsni(1, lastpiece.maxCol);
    row$this = runtime.safeCall(row_inst_51_46_tsni(bd));
    tmp1 = map_inst_51_45_tsni(row$this, tmp);
    tmp2 = vcat_inst_51_42_tsni(tmp1);
    tmp3 = lastpiece.text(NofibPrelude.Nil);
    return lastpiece.above_(tmp2, false, tmp3)
  } 
  static eliminateEmpty(cons, p, g, q) {
    let first1, first0, q1, tmp, arr;
    if (p instanceof lastpiece.Empty.class) {
      return q
    } else {
      if (runtime.Tuple.isArrayLike(q) && q.length === 2) {
        first0 = runtime.Tuple.get(q, 0);
        first1 = runtime.Tuple.get(q, 1);
        if (first0 instanceof lastpiece.NotEmpty.class) {
          q1 = first1;
          tmp = runtime.safeCall(cons(p, g, q1));
        } else if (first0 instanceof lastpiece.IsEmpty.class) {
          tmp = p;
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
      arr = globalThis.Object.freeze([
        lastpiece.NotEmpty,
        tmp
      ]);
      return arr
    }
  } 
  static reduceVert(doc) {
    let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
    if (doc instanceof lastpiece.Above.class) {
      param0 = doc.d1;
      param1 = doc.b;
      param2 = doc.d2;
      p = param0;
      g = param1;
      q = param2;
      tmp = lastpiece.reduceVert(p);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceVert(q);
      return lastpiece.eliminateEmpty(lambda6, tmp1, g, tmp2)
    } else {
      arr = globalThis.Object.freeze([
        lastpiece.NotEmpty,
        doc
      ]);
      return arr
    }
  } 
  static vcat(ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.foldr(lambda7, lastpiece.Empty, ls);
    tmp1 = reduceVert_inst_52_43_tsni(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static text(s) {
    let sl, tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    sl = tmp;
    tmp1 = runtime.safeCall(lastpiece.Str(s));
    tmp2 = lastpiece.NoAnnot(tmp1, sl);
    return lastpiece.TextBeside(tmp2, lastpiece.Empty)
  } 
  static char(c) {
    let tmp, tmp1;
    tmp = runtime.safeCall(lastpiece.Chr(c));
    tmp1 = lastpiece.NoAnnot(tmp, 1);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static reduceHoriz(doc) {
    let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, arr;
    if (doc instanceof lastpiece.Beside.class) {
      param0 = doc.d1;
      param1 = doc.b;
      param2 = doc.d2;
      p = param0;
      g = param1;
      q = param2;
      tmp = lastpiece.reduceHoriz(p);
      tmp1 = NofibPrelude.snd(tmp);
      tmp2 = lastpiece.reduceHoriz(q);
      return lastpiece.eliminateEmpty(lambda8, tmp1, g, tmp2)
    } else {
      arr = globalThis.Object.freeze([
        lastpiece.NotEmpty,
        doc
      ]);
      return arr
    }
  } 
  static hcat(ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.foldr(lambda9, lastpiece.Empty, ls);
    tmp1 = reduceHoriz_inst_53_14_tsni(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static above_(p, g, q) {
    if (q instanceof lastpiece.Empty.class) {
      return p
    } else {
      if (g instanceof lastpiece.Empty.class) {
        return q
      } else {
        return runtime.safeCall(lastpiece.Above(p, g, q))
      }
    }
  } 
  static nest(k, p) {
    let tmp;
    tmp = lastpiece.reduceDoc(p);
    return lastpiece.mkNest(k, tmp)
  } 
  static mkNest(k, p) {
    let scrut, param0, param1, k1, p1, tmp;
    if (p instanceof lastpiece.Nest.class) {
      param0 = p.i;
      param1 = p.d;
      k1 = param0;
      p1 = param1;
      tmp = k + k1;
      return lastpiece.mkNest(tmp, p1)
    } else if (p instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else {
      scrut = k === 0;
      if (scrut === true) {
        return p
      } else {
        return lastpiece.Nest(k, p)
      }
    }
  } 
  static reduceDoc(p) {
    let param0, param1, param2, p1, g, q, p11, g1, q1, tmp, tmp1;
    if (p instanceof lastpiece.Beside.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      p11 = param0;
      g1 = param1;
      q1 = param2;
      tmp = lastpiece.reduceDoc(q1);
      return lastpiece.beside(p11, g1, tmp)
    } else if (p instanceof lastpiece.Above.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      p1 = param0;
      g = param1;
      q = param2;
      tmp1 = lastpiece.reduceDoc(q);
      return lastpiece.above(p1, g, tmp1)
    } else {
      return p
    }
  } 
  static beside(p, g, q) {
    let param0, param1, t, p1, rest, p11, param2, p12, g1, q1, scrut, k, p13, p14, p2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
    if (p instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p instanceof lastpiece.Union.class) {
      param0 = p.d1;
      param1 = p.d2;
      p14 = param0;
      p2 = param1;
      tmp = lastpiece.beside(p14, g, q);
      tmp1 = lastpiece.beside(p2, g, q);
      return lastpiece.Union(tmp, tmp1)
    } else if (p instanceof lastpiece.Empty.class) {
      return q
    } else if (p instanceof lastpiece.Nest.class) {
      param0 = p.i;
      param1 = p.d;
      k = param0;
      p13 = param1;
      tmp2 = lastpiece.beside(p13, g, q);
      return lastpiece.Nest(k, tmp2)
    } else if (p instanceof lastpiece.Beside.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      p12 = param0;
      g1 = param1;
      q1 = param2;
      scrut = g1 === g;
      if (scrut === true) {
        tmp3 = lastpiece.beside(q1, g, q);
        return lastpiece.beside(p12, g1, tmp3)
      } else {
        tmp4 = runtime.safeCall(lastpiece.Beside(p12, g1, q1));
        tmp5 = lastpiece.reduceDoc(tmp4);
        return lastpiece.beside(tmp5, g, q)
      }
    } else if (p instanceof lastpiece.Above.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      tmp6 = lastpiece.reduceDoc(p);
      return lastpiece.beside(tmp6, g, q)
    } else if (p instanceof lastpiece.NilAbove.class) {
      param0 = p.d;
      p11 = param0;
      tmp7 = lastpiece.beside(p11, g, q);
      return runtime.safeCall(lastpiece.NilAbove(tmp7))
    } else if (p instanceof lastpiece.TextBeside.class) {
      param0 = p.a;
      param1 = p.d;
      t = param0;
      p1 = param1;
      if (p1 instanceof lastpiece.Empty.class) {
        tmp8 = lastpiece.nilBeside(g, q);
      } else {
        tmp8 = lastpiece.beside(p1, g, q);
      }
      rest = tmp8;
      return lastpiece.TextBeside(t, rest)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static above(p, g, q) {
    let param0, param1, param2, p1, g1, q1, tmp, tmp1, tmp2, tmp3;
    if (p instanceof lastpiece.Above.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      p1 = param0;
      g1 = param1;
      q1 = param2;
      tmp = lastpiece.above(q1, g, q);
      return lastpiece.above(p1, g1, tmp)
    } else if (p instanceof lastpiece.Beside.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      tmp1 = lastpiece.reduceDoc(p);
      tmp2 = lastpiece.reduceDoc(q);
      return lastpiece.aboveNest(tmp1, g, 0, tmp2)
    } else {
      tmp3 = lastpiece.reduceDoc(q);
      return lastpiece.aboveNest(p, g, 0, tmp3)
    }
  } 
  static nilBeside(g, p) {
    let param0, param1, p1;
    if (p instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else if (p instanceof lastpiece.Nest.class) {
      param0 = p.i;
      param1 = p.d;
      p1 = param1;
      return lastpiece.nilBeside(g, p1)
    } else {
      if (g === true) {
        return lastpiece.TextBeside(lastpiece.spaceText, p)
      } else {
        return p
      }
    }
  } 
  static aboveNest(p, g, k, q) {
    let param0, param1, param2, s, p1, k1, rest, p11, k11, p12, p13, p2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (p instanceof lastpiece.NoDoc.class) {
      return lastpiece.NoDoc
    } else if (p instanceof lastpiece.Union.class) {
      param0 = p.d1;
      param1 = p.d2;
      p13 = param0;
      p2 = param1;
      tmp = lastpiece.aboveNest(p13, g, k, q);
      tmp1 = lastpiece.aboveNest(p2, g, k, q);
      return lastpiece.Union(tmp, tmp1)
    } else if (p instanceof lastpiece.Empty.class) {
      return lastpiece.mkNest(k, q)
    } else if (p instanceof lastpiece.Nest.class) {
      param0 = p.i;
      param1 = p.d;
      k11 = param0;
      p12 = param1;
      tmp2 = k - k11;
      tmp3 = lastpiece.aboveNest(p12, g, tmp2, q);
      return lastpiece.Nest(k11, tmp3)
    } else if (p instanceof lastpiece.NilAbove.class) {
      param0 = p.d;
      p11 = param0;
      tmp4 = lastpiece.aboveNest(p11, g, k, q);
      return runtime.safeCall(lastpiece.NilAbove(tmp4))
    } else if (p instanceof lastpiece.TextBeside.class) {
      param0 = p.a;
      param1 = p.d;
      s = param0;
      p1 = param1;
      tmp5 = lastpiece.annotSize(s);
      tmp6 = k - tmp5;
      k1 = tmp6;
      if (p1 instanceof lastpiece.Empty.class) {
        tmp7 = lastpiece.nilAboveNest(g, k1, q);
      } else {
        tmp7 = lastpiece.aboveNest(p1, g, k1, q);
      }
      rest = tmp7;
      return lastpiece.TextBeside(s, rest)
    } else if (p instanceof lastpiece.Above.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      throw globalThis.Error("aboveNest Above")
    } else if (p instanceof lastpiece.Beside.class) {
      param0 = p.d1;
      param1 = p.b;
      param2 = p.d2;
      throw globalThis.Error("aboveNest Beside")
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static nilAboveNest(g, k, q) {
    let scrut, scrut1, param0, param1, k1, q1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (q instanceof lastpiece.Empty.class) {
      return lastpiece.Empty
    } else if (q instanceof lastpiece.Nest.class) {
      param0 = q.i;
      param1 = q.d;
      k1 = param0;
      q1 = param1;
      tmp = k + k1;
      return lastpiece.nilAboveNest(g, tmp, q1)
    } else {
      scrut = ! g;
      if (scrut === true) {
        scrut1 = k > 0;
        if (scrut1 === true) {
          tmp1 = lastpiece.indent(k);
          tmp2 = runtime.safeCall(lastpiece.Str(tmp1));
          tmp3 = lastpiece.NoAnnot(tmp2, k);
          return lastpiece.TextBeside(tmp3, q)
        } else {
          tmp4 = lastpiece.mkNest(k, q);
          return runtime.safeCall(lastpiece.NilAbove(tmp4))
        }
      } else {
        tmp5 = lastpiece.mkNest(k, q);
        return runtime.safeCall(lastpiece.NilAbove(tmp5))
      }
    }
  } 
  static printDoc(d) {
    let done, tmp;
    tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
    done = tmp;
    return lastpiece.fullRender(lastpiece.ZigZagMode, 200, 1.5, put, done, d)
  } 
  static fullRender(m, l, r, txt, a, b) {
    let annTxt$this;
    annTxt$this = runtime.safeCall(annTxt(txt));
    return lastpiece.fullRenderAnn(m, l, r, annTxt$this, a, b)
  } 
  static ceiling(x) {
    return runtime.safeCall(globalThis.Math.ceil(x))
  } 
  static fullRenderAnn(m, lineLen, ribbons, txt, rest, doc) {
    let ribbonLen, bestLineLen, doc1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    if (m instanceof lastpiece.OneLineMode.class) {
      tmp = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.spaceText, lambda10, txt, rest, tmp)
    } else if (m instanceof lastpiece.LeftMode.class) {
      tmp1 = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.nlText, lastpiece.first, txt, rest, tmp1)
    } else {
      tmp2 = lineLen / ribbons;
      tmp3 = lastpiece.ceiling(tmp2);
      ribbonLen = tmp3;
      if (m instanceof lastpiece.ZigZagMode.class) {
        tmp4 = 2147483647;
      } else {
        tmp4 = lineLen;
      }
      bestLineLen = tmp4;
      tmp5 = lastpiece.reduceDoc(doc);
      tmp6 = lastpiece.best(bestLineLen, ribbonLen, tmp5);
      doc1 = tmp6;
      return lastpiece.displayDoc(m, lineLen, ribbonLen, txt, rest, doc1)
    }
  } 
  static easyDisplay(nlSpaceText, choose, txt, end, x) {
    return lay$(nlSpaceText, choose, txt, end, x)
  } 
  static displayDoc(m, pageWidth, ribbonWidth, txt, end, doc) {
    let gapWidth, shift, tmp, tmp1;
    tmp = pageWidth - ribbonWidth;
    gapWidth = tmp;
    tmp1 = NofibPrelude.intDiv(gapWidth, 2);
    shift = tmp1;
    return lay$1(m, txt, end, gapWidth, shift, 0, doc)
  } 
  static best(w0, r, doc) {
    return get(r, w0, doc)
  } 
  static nonEmptySet(doc) {
    let param0, param1, param2, p, p1;
    if (doc instanceof lastpiece.NoDoc.class) {
      return false
    } else if (doc instanceof lastpiece.Union.class) {
      param0 = doc.d1;
      param1 = doc.d2;
      return true
    } else if (doc instanceof lastpiece.Empty.class) {
      return true
    } else if (doc instanceof lastpiece.NilAbove.class) {
      param0 = doc.d;
      return true
    } else if (doc instanceof lastpiece.TextBeside.class) {
      param0 = doc.a;
      param1 = doc.d;
      p1 = param1;
      return lastpiece.nonEmptySet(p1)
    } else if (doc instanceof lastpiece.Nest.class) {
      param0 = doc.i;
      param1 = doc.d;
      p = param1;
      return lastpiece.nonEmptySet(p)
    } else if (doc instanceof lastpiece.Above.class) {
      param0 = doc.d1;
      param1 = doc.b;
      param2 = doc.d2;
      throw globalThis.Error("nonEmptySet Above")
    } else if (doc instanceof lastpiece.Beside.class) {
      param0 = doc.d1;
      param1 = doc.b;
      param2 = doc.d2;
      throw globalThis.Error("nonEmptySet Beside")
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static fits(n, param) {
    let param0, param1, param2, s, p, scrut, tmp, tmp1;
    scrut = n < 0;
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
        s = param0;
        p = param1;
        tmp = lastpiece.annotSize(s);
        tmp1 = n - tmp;
        return lastpiece.fits(tmp1, p)
      } else if (param instanceof lastpiece.Above.class) {
        param0 = param.d1;
        param1 = param.b;
        param2 = param.d2;
        throw globalThis.Error("fits Above")
      } else if (param instanceof lastpiece.Beside.class) {
        param0 = param.d1;
        param1 = param.b;
        param2 = param.d2;
        throw globalThis.Error("fits Beside")
      } else if (param instanceof lastpiece.Union.class) {
        param0 = param.d1;
        param1 = param.d2;
        throw globalThis.Error("fits Union")
      } else if (param instanceof lastpiece.Nest.class) {
        param0 = param.i;
        param1 = param.d;
        throw globalThis.Error("fits Nest")
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } 
  static first(p, q) {
    let scrut;
    scrut = lastpiece.nonEmptySet(p);
    if (scrut === true) {
      return p
    } else {
      return q
    }
  } 
  static nicest1(w, r, sl, p, q) {
    let scrut, tmp, tmp1;
    tmp = NofibPrelude.min(w, r);
    tmp1 = tmp - sl;
    scrut = lastpiece.fits(tmp1, p);
    if (scrut === true) {
      return p
    } else {
      return q
    }
  } 
  static nicest(w, r, p, q) {
    return lastpiece.nicest1(w, r, 0, p, q)
  } 
  static testLastPiece_nofib() {
    let initialBoard, solutions, arr, arr1, arr2, tmp, tmp1, tmp2, tmp3, arr3, tmp4, tmp5, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    arr = globalThis.Object.freeze([
      1,
      1
    ]);
    _deforest_Deforest_Arr_2_0 = 1;
    _deforest_Deforest_Arr_2_1 = 0;
    arr1 = (row1, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Deforest_Arr_2_01 = 1;
    _deforest_Deforest_Arr_2_11 = 1;
    arr2 = (row1, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    _deforest_Cons_head1 = arr2;
    _deforest_Cons_tail1 = (bd, sq1, id) => {
      let tmp6, _deforest_Some_x;
      tmp6 = extend_inst_54_55_29_tsni(bd, sq1, id);
      _deforest_Some_x = tmp6;
      return () => {
        let param0, x;
        param0 = _deforest_Some_x;
        x = param0;
        return x
      }
    };
    tmp = (bd, sq1, id) => {
      return match_os_arm_Cons_inst_54_55_tsni(bd, sq1, id, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr1;
    _deforest_Cons_tail = tmp;
    tmp1 = (bd, sq1, id) => {
      return match_os_arm_Cons_inst_54_55_tsni(bd, sq1, id, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp2 = fit_inst_54_55_tsni(lastpiece.emptyBoard, arr, "a", tmp1);
    tmp3 = fromSome_inst_54_68_tsni(tmp2);
    initialBoard = tmp3;
    arr3 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp4 = search_inst_54_56_tsni(arr3, lastpiece.Female, initialBoard, lastpiece.initialPieces);
    solutions = tmp4;
    tmp5 = display_inst_54_57_tsni(solutions);
    return lastpiece.printDoc(tmp5)
  } 
  static main() {
    let tmp;
    tmp = testLastPiece_nofib_inst_58_59_tsni();
    return nofibListToString_inst_58_69_tsni(tmp)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "lastpiece"]; 
});
let lastpiece = lastpiece1; export default lastpiece;
