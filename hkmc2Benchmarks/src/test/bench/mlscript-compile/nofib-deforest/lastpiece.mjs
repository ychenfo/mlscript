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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_10_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_scrut_arm_LT_inst_40_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_40_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_40_41_46_18_11_9_7_1_2_tsni(k, r)
});
match_first0_arm_NotEmpty_inst_40_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_40_48_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_40_49_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_scrut_arm_GT_inst_51_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_51_46_18_11_9_7_1_2_tsni(k, r)
});
match_scrut_arm_LT_inst_51_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_51_46_18_11_9_7_1_2_tsni(k, l)
});
match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_51_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_51_42_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_52_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_52_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_53_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_53_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let first1, first0, orow, ocol, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_54_55_67_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_54_55_67_tsni;
  orow = first0;
  ocol = first1;
  tmp = row1 + orow;
  tmp1 = col + ocol;
  return globalThis.Object.freeze([
    tmp,
    tmp1
  ])
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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
});
match_scrut_arm_LT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, l)
});
match_scrut_arm_GT_inst_58_59_57_41_46_18_11_9_7_1_2_tsni = (undefined, function (k, x, l, r) {
  return mapLookup_inst_58_59_57_41_46_18_11_9_7_1_2_tsni(k, r)
});
match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni = (undefined, function (cons, p, g, first1) {
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let q1, tmp, lambda11;
  q1 = first1;
  tmp = runtime.safeCall(cons(p, g, q1));
  lambda11 = (cons1, p1, g1, first11) => {
    return match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni(cons1, p1, g1, first11)
  };
  return globalThis.Object.freeze([
    lambda11,
    tmp
  ])
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
  let first1, first0, orow, ocol, tmp, tmp1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_55_67_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_55_67_tsni;
  orow = first0;
  ocol = first1;
  tmp = row1 + orow;
  tmp1 = col + ocol;
  return globalThis.Object.freeze([
    tmp,
    tmp1
  ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_4_5_1_tsni(bd, tmp);
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_6_7_1_tsni(bd, tmp);
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_8_9_7_1_tsni(bd, tmp);
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_10_11_9_7_1_tsni(bd, tmp);
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_10_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_17_18_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_17_18_11_9_7_1_tsni(bd, tmp);
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
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return lastpiece.Soln(bd)
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        tmp2 = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp3 = lastpiece.flip(sey);
        return search_inst_19_tsni(tmp2, tmp3, bd, ps)
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
      let choices, scrut1, ss, tmp, lambda$this;
      tmp = pickOne_inst_19_21_tsni(ps);
      choices = lscomp1$_inst_19_30_tsni(sey, tmp);
      lambda$this = runtime.safeCall(lambda_inst_19_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_19_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return lastpiece.Choose(ss)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_19_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_19_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
      return NofibPrelude.Some(tmp4)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_19_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    tmp = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp1 = lscomp2$_inst_19_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp2;
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
        tmp2 = mapMaybe_inst_19_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp2)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
search_inst_31_tsni = function search_inst_31_tsni(row_col, sey, bd, ps) {
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return lastpiece.Soln(bd)
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        tmp2 = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp3 = lastpiece.flip(sey);
        return search_inst_31_tsni(tmp2, tmp3, bd, ps)
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
      let choices, scrut1, ss, tmp, lambda$this;
      tmp = pickOne_inst_31_21_tsni(ps);
      choices = lscomp1$_inst_31_30_tsni(sey, tmp);
      lambda$this = runtime.safeCall(lambda4(row_col, sey, bd));
      scrut1 = mapMaybe_inst_31_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return lastpiece.Choose(ss)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_31_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_31_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
      return NofibPrelude.Some(tmp4)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_31_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    tmp = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp1 = lscomp2$_inst_31_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp2;
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
        tmp2 = mapMaybe_inst_31_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp2)
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
                return NofibPrelude.Some(x)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
                return NofibPrelude.Some(x)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
      return NofibPrelude.Some(tmp)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      return lastpiece.Soln(bd)
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        tmp2 = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp3 = lastpiece.flip(sey);
        return search_inst_38_tsni(tmp2, tmp3, bd, ps)
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
      let choices, scrut1, ss, tmp, lambda$this;
      tmp = pickOne_inst_38_21_tsni(ps);
      choices = lscomp1$_inst_38_30_tsni(sey, tmp);
      lambda$this = runtime.safeCall(lambda_inst_38_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_38_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return lastpiece.Choose(ss)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_38_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_38_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
      return NofibPrelude.Some(tmp4)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$_inst_38_30_tsni(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    tmp = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp1 = lscomp2$_inst_38_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param01, param11, h, t, scrut, param02, a, tmp2;
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
        tmp2 = mapMaybe_inst_38_65_tsni(f, t);
        return NofibPrelude.Cons(a, tmp2)
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
      let choices, scrut1, ss, tmp, lambda$this;
      tmp = pickOne_inst_39_21_tsni(ps);
      choices = lscomp1$_inst_39_30_tsni(sey, tmp);
      lambda$this = runtime.safeCall(lambda_inst_39_tsni(row_col, sey, bd));
      scrut1 = mapMaybe_inst_39_65_tsni(lambda$this, choices);
      if (scrut1 instanceof NofibPrelude.Nil.class) {
        return lastpiece.Fail(bd, row_col)
      } else {
        ss = scrut1;
        return lastpiece.Choose(ss)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_39_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_39_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
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
    tmp = (sq1, se, bd) => {
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
    tmp1 = lscomp2$_inst_39_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_40_41_42_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_40_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_40_41_46_18_11_9_7_1_tsni(bd, tmp);
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_40_48_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_40_49_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_51_46_18_11_9_7_1_tsni(bd, tmp);
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_51_46_18_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_51_42_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_52_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_53_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Soln_b;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp4 = NofibPrelude.nofibStringToList("Success!");
        tmp5 = lastpiece.text(tmp4);
        tmp6 = displayBoard_inst_54_57_41_tsni(bd1);
        tmp7 = lastpiece.nest(2, tmp6);
        _deforest_Cons_head1 = tmp7;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_54_57_48_66_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp5;
        _deforest_Cons_tail = tmp8;
        tmp9 = (f, z) => {
          return match_xs_arm_Cons_inst_54_57_48_66_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_54_57_48_tsni(tmp9)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        tmp2 = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp3 = lastpiece.flip(sey);
        return search_inst_54_56_tsni(tmp2, tmp3, bd, ps)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
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
    tmp = (sq1, se, bd) => {
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
    tmp1 = lscomp2$_inst_54_56_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_54_56_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_54_56_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
      let choices, scrut1, ss, tmp, lambda$this, _deforest_Fail_b, _deforest_Fail_s, _deforest_Choose_s;
      tmp = pickOne_inst_54_56_21_tsni(ps);
      choices = lscomp1$_inst_54_56_30_tsni(sey, tmp);
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
          let param01, ss1, tmp1;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp1 = map_inst_54_57_50_tsni(display_inst_54_57_tsni, ss1);
          return vcat_inst_54_57_49_tsni(tmp1)
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_54_57_49_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_54_57_48_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_54_57_41_46_18_11_9_7_1_tsni(bd, tmp);
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_54_57_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_54_57_41_42_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let initialBoard, solutions, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  tmp = globalThis.Object.freeze([
    1,
    1
  ]);
  _deforest_Deforest_Arr_2_01 = 1;
  _deforest_Deforest_Arr_2_11 = 0;
  tmp1 = (row1, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
  };
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 1;
  tmp2 = (row1, col) => {
    return match_orow_ocol_arm_Deforest_Arr_2_inst_58_59_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  _deforest_Cons_head1 = tmp2;
  _deforest_Cons_tail1 = (bd, sq1, id) => {
    let tmp8, _deforest_Some_x;
    tmp8 = extend_inst_58_59_55_29_tsni(bd, sq1, id);
    _deforest_Some_x = tmp8;
    return () => {
      let param0, x;
      param0 = _deforest_Some_x;
      x = param0;
      return x
    }
  };
  tmp3 = (bd, sq1, id) => {
    return match_os_arm_Cons_inst_58_59_55_tsni(bd, sq1, id, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = tmp1;
  _deforest_Cons_tail = tmp3;
  tmp4 = (bd, sq1, id) => {
    return match_os_arm_Cons_inst_58_59_55_tsni(bd, sq1, id, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp5 = fit_inst_58_59_55_tsni(lastpiece.emptyBoard, tmp, "a", tmp4);
  initialBoard = fromSome_inst_58_59_68_tsni(tmp5);
  tmp6 = globalThis.Object.freeze([
    1,
    2
  ]);
  solutions = search_inst_58_59_56_tsni(tmp6, lastpiece.Female, initialBoard, lastpiece.initialPieces);
  tmp7 = display_inst_58_59_57_tsni(solutions);
  return printDoc_inst_58_59_60_tsni(tmp7)
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_41_42_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_41_46_18_13_14_15_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_58_59_57_41_46_18_11_9_7_1_tsni(bd, tmp);
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_48_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let param0, param1, param2, p, g, q, tmp, tmp1, tmp2, lambda11;
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
    lambda11 = (cons, p1, g1, first1) => {
      return match_first0_arm_NotEmpty_inst_58_59_57_49_43_44_tsni(cons, p1, g1, first1)
    };
    return globalThis.Object.freeze([
      lambda11,
      doc
    ])
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
  let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3, _deforest_Soln_b;
  if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
    first0 = runtime.Tuple.get(row_col, 0);
    first1 = runtime.Tuple.get(row_col, 1);
    row1 = first0;
    col = first1;
    if (ps instanceof NofibPrelude.Nil.class) {
      _deforest_Soln_b = bd;
      return () => {
        let param0, bd1, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Soln_b;
        bd1 = param0;
        tmp4 = NofibPrelude.nofibStringToList("Success!");
        tmp5 = lastpiece.text(tmp4);
        tmp6 = displayBoard_inst_58_59_57_41_tsni(bd1);
        tmp7 = lastpiece.nest(2, tmp6);
        _deforest_Cons_head1 = tmp7;
        _deforest_Cons_tail1 = (f, z) => {
          return z
        };
        tmp8 = (f, z) => {
          return match_xs_arm_Cons_inst_58_59_57_48_66_tsni(f, z, _deforest_Cons_head1, _deforest_Cons_tail1)
        };
        _deforest_Cons_head = tmp5;
        _deforest_Cons_tail = tmp8;
        tmp9 = (f, z) => {
          return match_xs_arm_Cons_inst_58_59_57_48_66_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
        };
        return vcat_inst_58_59_57_48_tsni(tmp9)
      }
    } else {
      tmp = lastpiece.maxCol + 1;
      scrut1 = col === tmp;
      if (scrut1 === true) {
        tmp1 = row1 + 1;
        tmp2 = globalThis.Object.freeze([
          tmp1,
          1
        ]);
        tmp3 = lastpiece.flip(sey);
        return search_inst_58_59_56_tsni(tmp2, tmp3, bd, ps)
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
      let choices, scrut1, ss, tmp, lambda$this, _deforest_Fail_b, _deforest_Fail_s, _deforest_Choose_s;
      tmp = pickOne_inst_58_59_56_21_tsni(ps);
      choices = lscomp1$_inst_58_59_56_30_tsni(sey, tmp);
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
          let param01, ss1, tmp1;
          param01 = _deforest_Choose_s;
          ss1 = param01;
          tmp1 = map_inst_58_59_57_50_tsni(display_inst_58_59_57_tsni, ss1);
          return vcat_inst_58_59_57_49_tsni(tmp1)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
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
    tmp1 = (param11, sey) => {
      let first1, first0, param01, param12, param2, id, ms, fs, ps, ls, tmp3;
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
          tmp3 = ms;
        } else {
          tmp3 = fs;
        }
        return lscomp2$_inst_58_59_56_30_tsni(sey, id, ps, ls, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go_inst_58_59_56_21_22_tsni(lambda$this, xs1);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let param0, param1, os, ls1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
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
    tmp = (sq1, se, bd) => {
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
    tmp1 = lscomp2$_inst_58_59_56_30_tsni(sey, id, ps, ls, ls1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
    return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
                return lastpiece.Bin(sz, kx, x, l, r)
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
  let done, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = () => {
    return ""
  };
  done = () => {
    return match_ls_arm_Cons_inst_58_69_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  };
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
    return lastpiece1.NilAbove(tmp)
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
    return lastpiece1.NilAbove(tmp1)
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
  let r, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = lastpiece1.annotSize(s);
  r = k + tmp;
  tmp1 = lastpiece1.indent(k);
  tmp2 = lastpiece1.Str(tmp1);
  tmp3 = lastpiece1.NoAnnot(tmp2, k);
  tmp4 = lay2$(m, txt, end, gapWidth, shift, r, p);
  tmp5 = runtime.safeCall(txt(s, tmp4));
  return runtime.safeCall(txt(tmp3, tmp5))
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
        tmp3 = lastpiece1.Str(tmp2);
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
          tmp10 = lastpiece1.Str(tmp9);
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
  return lastpiece1.Beside(p, false, q)
});
lambda8 = (undefined, function (a, b, c) {
  return lastpiece1.Beside(a, b, c)
});
lambda7 = (undefined, function (p, q) {
  return lastpiece1.Above(p, false, q)
});
lambda6 = (undefined, function (a, b, c) {
  return lastpiece1.Above(a, b, c)
});
sq$ = function sq$(bd, n, col) {
  let scrut, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = n;
  _deforest_Deforest_Arr_2_1 = col;
  tmp = (cd) => {
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
  scrut = check_inst_0_1_tsni(bd, tmp);
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
  let param0, param1, os, ls1, tmp, tmp1;
  if (ls2 instanceof NofibPrelude.Nil.class) {
    return lscomp1$(sey, ls)
  } else if (ls2 instanceof NofibPrelude.Cons.class) {
    param0 = ls2.head;
    param1 = ls2.tail;
    os = param0;
    ls1 = param1;
    tmp = globalThis.Object.freeze([
      id,
      os,
      ps
    ]);
    tmp1 = lscomp2$(sey, id, ps, ls, ls1);
    return NofibPrelude.Cons(tmp, tmp1)
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
  let param0, param1, x, xs1, tmp, tmp1, tmp2, lambda$this;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(xs1));
    tmp1 = globalThis.Object.freeze([
      x,
      tmp
    ]);
    lambda$this = runtime.safeCall(lambda2(f, x));
    tmp2 = go(lambda$this, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
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
globalThis.Object.freeze(class lastpiece {
  static {
    lastpiece1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216, tmp217, tmp218, tmp219, tmp220, tmp221, tmp222, tmp223, tmp224, tmp225, tmp226, tmp227, tmp228, tmp229, tmp230, tmp231, tmp232, tmp233, tmp234, tmp235, tmp236, tmp237, tmp238, tmp239, tmp240, tmp241, tmp242, tmp243, tmp244, tmp245, tmp246, tmp247, tmp248, tmp249, tmp250, tmp251, tmp252, tmp253, tmp254, tmp255, tmp256, tmp257, tmp258, tmp259, tmp260, tmp261, tmp262, tmp263, tmp264, tmp265, tmp266, tmp267, tmp268, tmp269, tmp270, tmp271, tmp272, tmp273, tmp274, tmp275, tmp276, tmp277, tmp278, tmp279, tmp280, tmp281, tmp282, tmp283, tmp284, tmp285, tmp286, tmp287, tmp288, tmp289, tmp290, tmp291, tmp292, tmp293, tmp294, tmp295, tmp296, tmp297, tmp298, tmp299, tmp300, tmp301, tmp302, tmp303, tmp304, tmp305, tmp306, tmp307, tmp308, tmp309, tmp310, tmp311, tmp312, tmp313, tmp314, tmp315, tmp316, tmp317, tmp318, tmp319, tmp320, tmp321, tmp322, tmp323, tmp324, tmp325, tmp326, tmp327, tmp328, tmp329, tmp330, tmp331, tmp332, tmp333, tmp334, tmp335, tmp336, tmp337, tmp338, tmp339, tmp340, tmp341, tmp342, tmp343, tmp344, tmp345, tmp346, tmp347, tmp348, tmp349, tmp350, tmp351, tmp352, tmp353, tmp354, tmp355, tmp356, tmp357, tmp358, tmp359, tmp360, tmp361, tmp362, tmp363, tmp364, tmp365, tmp366, tmp367, tmp368, tmp369, tmp370, tmp371, tmp372, tmp373, tmp374, tmp375, tmp376, tmp377, tmp378, tmp379, tmp380, tmp381, tmp382, tmp383, tmp384, tmp385, tmp386, tmp387, tmp388, tmp389, tmp390, tmp391, tmp392, tmp393, tmp394, tmp395, tmp396, tmp397, tmp398, tmp399, tmp400, tmp401, tmp402, tmp403, tmp404, tmp405, tmp406, tmp407, tmp408, tmp409, tmp410, tmp411, tmp412, tmp413, tmp414, tmp415, tmp416, tmp417, tmp418, tmp419, tmp420, tmp421, tmp422, tmp423, tmp424, tmp425, tmp426, tmp427, tmp428, tmp429, tmp430, tmp431, tmp432, tmp433, tmp434, tmp435, tmp436, tmp437, tmp438, tmp439, tmp440, tmp441, tmp442, tmp443, tmp444, tmp445, tmp446, tmp447, tmp448;
    globalThis.Object.freeze(class GT {
      static {
        lastpiece.GT = globalThis.Object.freeze(new this)
      }
      constructor() {
        Object.defineProperty(this, "class", {
          value: GT
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "GT"]; 
    });
    globalThis.Object.freeze(class LT {
      static {
        lastpiece.LT = globalThis.Object.freeze(new this)
      }
      constructor() {
        Object.defineProperty(this, "class", {
          value: LT
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LT"]; 
    });
    globalThis.Object.freeze(class EQ {
      static {
        lastpiece.EQ = globalThis.Object.freeze(new this)
      }
      constructor() {
        Object.defineProperty(this, "class", {
          value: EQ
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "EQ"]; 
    });
    globalThis.Object.freeze(class Map {
      static {
        lastpiece.Map = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Map"]; 
    });
    globalThis.Object.freeze(class Tip extends lastpiece.Map {
      static {
        lastpiece.Tip = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Tip
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Tip"]; 
    });
    this.Bin = function Bin(i, k, v, l, r) {
      return globalThis.Object.freeze(new Bin.class(i, k, v, l, r));
    };
    globalThis.Object.freeze(class Bin extends lastpiece.Map {
      static {
        lastpiece.Bin.class = this
      }
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
    });
    this.P = function P(i, a, b) {
      return globalThis.Object.freeze(new P.class(i, a, b));
    };
    globalThis.Object.freeze(class P {
      static {
        lastpiece.P.class = this
      }
      constructor(i, a, b) {
        this.i = i;
        this.a = a;
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "P", ["i", "a", "b"]]; 
    });
    globalThis.Object.freeze(class S {
      static {
        lastpiece.S = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "S"]; 
    });
    globalThis.Object.freeze(class Male extends lastpiece.S {
      static {
        lastpiece.Male = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Male
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Male"]; 
    });
    globalThis.Object.freeze(class Female extends lastpiece.S {
      static {
        lastpiece.Female = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Female
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Female"]; 
    });
    globalThis.Object.freeze(class Solution {
      static {
        lastpiece.Solution = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Solution"]; 
    });
    this.Soln = function Soln(b) {
      return globalThis.Object.freeze(new Soln.class(b));
    };
    globalThis.Object.freeze(class Soln extends lastpiece.Solution {
      static {
        lastpiece.Soln.class = this
      }
      constructor(b) {
        super();
        this.b = b;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Soln", ["b"]]; 
    });
    this.Choose = function Choose(s) {
      return globalThis.Object.freeze(new Choose.class(s));
    };
    globalThis.Object.freeze(class Choose extends lastpiece.Solution {
      static {
        lastpiece.Choose.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Choose", ["s"]]; 
    });
    this.Fail = function Fail(b, s) {
      return globalThis.Object.freeze(new Fail.class(b, s));
    };
    globalThis.Object.freeze(class Fail extends lastpiece.Solution {
      static {
        lastpiece.Fail.class = this
      }
      constructor(b, s) {
        super();
        this.b = b;
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Fail", ["b", "s"]]; 
    });
    this.maxRow = 8;
    this.maxCol = 8;
    this.emptyBoard = lastpiece.Tip;
    tmp = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp1 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp2 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp3 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp4 = NofibPrelude.Cons(tmp3, NofibPrelude.Nil);
    tmp5 = NofibPrelude.Cons(tmp2, tmp4);
    tmp6 = NofibPrelude.Cons(tmp1, tmp5);
    tmp7 = NofibPrelude.Cons(tmp, tmp6);
    tmp8 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp9 = - 1;
    tmp10 = globalThis.Object.freeze([
      1,
      tmp9
    ]);
    tmp11 = - 2;
    tmp12 = globalThis.Object.freeze([
      1,
      tmp11
    ]);
    tmp13 = - 2;
    tmp14 = globalThis.Object.freeze([
      2,
      tmp13
    ]);
    tmp15 = NofibPrelude.Cons(tmp14, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(tmp12, tmp15);
    tmp17 = NofibPrelude.Cons(tmp10, tmp16);
    tmp18 = NofibPrelude.Cons(tmp8, tmp17);
    tmp19 = NofibPrelude.Cons(tmp18, NofibPrelude.Nil);
    tmp20 = NofibPrelude.Cons(tmp7, tmp19);
    tmp21 = lastpiece.P("n", tmp20, NofibPrelude.Nil);
    this.nPiece = tmp21;
    tmp22 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp23 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp24 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp25 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp26 = NofibPrelude.Cons(tmp25, NofibPrelude.Nil);
    tmp27 = NofibPrelude.Cons(tmp24, tmp26);
    tmp28 = NofibPrelude.Cons(tmp23, tmp27);
    tmp29 = NofibPrelude.Cons(tmp22, tmp28);
    tmp30 = NofibPrelude.Cons(tmp29, NofibPrelude.Nil);
    tmp31 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp32 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp33 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp34 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp35 = NofibPrelude.Cons(tmp34, NofibPrelude.Nil);
    tmp36 = NofibPrelude.Cons(tmp33, tmp35);
    tmp37 = NofibPrelude.Cons(tmp32, tmp36);
    tmp38 = NofibPrelude.Cons(tmp31, tmp37);
    tmp39 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp40 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp41 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp42 = - 1;
    tmp43 = globalThis.Object.freeze([
      3,
      tmp42
    ]);
    tmp44 = NofibPrelude.Cons(tmp43, NofibPrelude.Nil);
    tmp45 = NofibPrelude.Cons(tmp41, tmp44);
    tmp46 = NofibPrelude.Cons(tmp40, tmp45);
    tmp47 = NofibPrelude.Cons(tmp39, tmp46);
    tmp48 = NofibPrelude.Cons(tmp47, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(tmp38, tmp48);
    tmp50 = lastpiece.P("m", tmp30, tmp49);
    this.mPiece = tmp50;
    tmp51 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp52 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp53 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp54 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp55 = NofibPrelude.Cons(tmp54, NofibPrelude.Nil);
    tmp56 = NofibPrelude.Cons(tmp53, tmp55);
    tmp57 = NofibPrelude.Cons(tmp52, tmp56);
    tmp58 = NofibPrelude.Cons(tmp51, tmp57);
    tmp59 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp60 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp61 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp62 = - 1;
    tmp63 = globalThis.Object.freeze([
      2,
      tmp62
    ]);
    tmp64 = NofibPrelude.Cons(tmp63, NofibPrelude.Nil);
    tmp65 = NofibPrelude.Cons(tmp61, tmp64);
    tmp66 = NofibPrelude.Cons(tmp60, tmp65);
    tmp67 = NofibPrelude.Cons(tmp59, tmp66);
    tmp68 = NofibPrelude.Cons(tmp67, NofibPrelude.Nil);
    tmp69 = NofibPrelude.Cons(tmp58, tmp68);
    tmp70 = - 1;
    tmp71 = globalThis.Object.freeze([
      1,
      tmp70
    ]);
    tmp72 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp73 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp74 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp75 = NofibPrelude.Cons(tmp74, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(tmp73, tmp75);
    tmp77 = NofibPrelude.Cons(tmp72, tmp76);
    tmp78 = NofibPrelude.Cons(tmp71, tmp77);
    tmp79 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp80 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp81 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp82 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp83 = NofibPrelude.Cons(tmp82, NofibPrelude.Nil);
    tmp84 = NofibPrelude.Cons(tmp81, tmp83);
    tmp85 = NofibPrelude.Cons(tmp80, tmp84);
    tmp86 = NofibPrelude.Cons(tmp79, tmp85);
    tmp87 = NofibPrelude.Cons(tmp86, NofibPrelude.Nil);
    tmp88 = NofibPrelude.Cons(tmp78, tmp87);
    tmp89 = lastpiece.P("l", tmp69, tmp88);
    this.lPiece = tmp89;
    tmp90 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp91 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp92 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp93 = - 1;
    tmp94 = globalThis.Object.freeze([
      2,
      tmp93
    ]);
    tmp95 = NofibPrelude.Cons(tmp94, NofibPrelude.Nil);
    tmp96 = NofibPrelude.Cons(tmp92, tmp95);
    tmp97 = NofibPrelude.Cons(tmp91, tmp96);
    tmp98 = NofibPrelude.Cons(tmp90, tmp97);
    tmp99 = NofibPrelude.Cons(tmp98, NofibPrelude.Nil);
    tmp100 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp101 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp102 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp103 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp104 = NofibPrelude.Cons(tmp103, NofibPrelude.Nil);
    tmp105 = NofibPrelude.Cons(tmp102, tmp104);
    tmp106 = NofibPrelude.Cons(tmp101, tmp105);
    tmp107 = NofibPrelude.Cons(tmp100, tmp106);
    tmp108 = NofibPrelude.Cons(tmp107, NofibPrelude.Nil);
    tmp109 = lastpiece.P("k", tmp99, tmp108);
    this.kPiece = tmp109;
    tmp110 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp111 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp112 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp113 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp114 = NofibPrelude.Cons(tmp113, NofibPrelude.Nil);
    tmp115 = NofibPrelude.Cons(tmp112, tmp114);
    tmp116 = NofibPrelude.Cons(tmp111, tmp115);
    tmp117 = NofibPrelude.Cons(tmp110, tmp116);
    tmp118 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp119 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp120 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp121 = - 1;
    tmp122 = globalThis.Object.freeze([
      1,
      tmp121
    ]);
    tmp123 = NofibPrelude.Cons(tmp122, NofibPrelude.Nil);
    tmp124 = NofibPrelude.Cons(tmp120, tmp123);
    tmp125 = NofibPrelude.Cons(tmp119, tmp124);
    tmp126 = NofibPrelude.Cons(tmp118, tmp125);
    tmp127 = - 2;
    tmp128 = globalThis.Object.freeze([
      1,
      tmp127
    ]);
    tmp129 = - 1;
    tmp130 = globalThis.Object.freeze([
      1,
      tmp129
    ]);
    tmp131 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp132 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp133 = NofibPrelude.Cons(tmp132, NofibPrelude.Nil);
    tmp134 = NofibPrelude.Cons(tmp131, tmp133);
    tmp135 = NofibPrelude.Cons(tmp130, tmp134);
    tmp136 = NofibPrelude.Cons(tmp128, tmp135);
    tmp137 = NofibPrelude.Cons(tmp136, NofibPrelude.Nil);
    tmp138 = NofibPrelude.Cons(tmp126, tmp137);
    tmp139 = NofibPrelude.Cons(tmp117, tmp138);
    tmp140 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp141 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp142 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp143 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp144 = NofibPrelude.Cons(tmp143, NofibPrelude.Nil);
    tmp145 = NofibPrelude.Cons(tmp142, tmp144);
    tmp146 = NofibPrelude.Cons(tmp141, tmp145);
    tmp147 = NofibPrelude.Cons(tmp140, tmp146);
    tmp148 = NofibPrelude.Cons(tmp147, NofibPrelude.Nil);
    tmp149 = lastpiece.P("j", tmp139, tmp148);
    this.jPiece = tmp149;
    tmp150 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp151 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp152 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp153 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp154 = NofibPrelude.Cons(tmp153, NofibPrelude.Nil);
    tmp155 = NofibPrelude.Cons(tmp152, tmp154);
    tmp156 = NofibPrelude.Cons(tmp151, tmp155);
    tmp157 = NofibPrelude.Cons(tmp150, tmp156);
    tmp158 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp159 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp160 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp161 = - 1;
    tmp162 = globalThis.Object.freeze([
      1,
      tmp161
    ]);
    tmp163 = NofibPrelude.Cons(tmp162, NofibPrelude.Nil);
    tmp164 = NofibPrelude.Cons(tmp160, tmp163);
    tmp165 = NofibPrelude.Cons(tmp159, tmp164);
    tmp166 = NofibPrelude.Cons(tmp158, tmp165);
    tmp167 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp168 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp169 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp170 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp171 = NofibPrelude.Cons(tmp170, NofibPrelude.Nil);
    tmp172 = NofibPrelude.Cons(tmp169, tmp171);
    tmp173 = NofibPrelude.Cons(tmp168, tmp172);
    tmp174 = NofibPrelude.Cons(tmp167, tmp173);
    tmp175 = NofibPrelude.Cons(tmp174, NofibPrelude.Nil);
    tmp176 = NofibPrelude.Cons(tmp166, tmp175);
    tmp177 = NofibPrelude.Cons(tmp157, tmp176);
    tmp178 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp179 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp180 = - 1;
    tmp181 = globalThis.Object.freeze([
      1,
      tmp180
    ]);
    tmp182 = - 2;
    tmp183 = globalThis.Object.freeze([
      1,
      tmp182
    ]);
    tmp184 = NofibPrelude.Cons(tmp183, NofibPrelude.Nil);
    tmp185 = NofibPrelude.Cons(tmp181, tmp184);
    tmp186 = NofibPrelude.Cons(tmp179, tmp185);
    tmp187 = NofibPrelude.Cons(tmp178, tmp186);
    tmp188 = NofibPrelude.Cons(tmp187, NofibPrelude.Nil);
    tmp189 = lastpiece.P("i", tmp177, tmp188);
    this.iPiece = tmp189;
    tmp190 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp191 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp192 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp193 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp194 = NofibPrelude.Cons(tmp193, NofibPrelude.Nil);
    tmp195 = NofibPrelude.Cons(tmp192, tmp194);
    tmp196 = NofibPrelude.Cons(tmp191, tmp195);
    tmp197 = NofibPrelude.Cons(tmp190, tmp196);
    tmp198 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp199 = - 1;
    tmp200 = globalThis.Object.freeze([
      1,
      tmp199
    ]);
    tmp201 = - 1;
    tmp202 = globalThis.Object.freeze([
      2,
      tmp201
    ]);
    tmp203 = - 2;
    tmp204 = globalThis.Object.freeze([
      2,
      tmp203
    ]);
    tmp205 = NofibPrelude.Cons(tmp204, NofibPrelude.Nil);
    tmp206 = NofibPrelude.Cons(tmp202, tmp205);
    tmp207 = NofibPrelude.Cons(tmp200, tmp206);
    tmp208 = NofibPrelude.Cons(tmp198, tmp207);
    tmp209 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp210 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp211 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp212 = globalThis.Object.freeze([
      2,
      2
    ]);
    tmp213 = NofibPrelude.Cons(tmp212, NofibPrelude.Nil);
    tmp214 = NofibPrelude.Cons(tmp211, tmp213);
    tmp215 = NofibPrelude.Cons(tmp210, tmp214);
    tmp216 = NofibPrelude.Cons(tmp209, tmp215);
    tmp217 = NofibPrelude.Cons(tmp216, NofibPrelude.Nil);
    tmp218 = NofibPrelude.Cons(tmp208, tmp217);
    tmp219 = NofibPrelude.Cons(tmp197, tmp218);
    tmp220 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp221 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp222 = - 1;
    tmp223 = globalThis.Object.freeze([
      1,
      tmp222
    ]);
    tmp224 = - 1;
    tmp225 = globalThis.Object.freeze([
      2,
      tmp224
    ]);
    tmp226 = NofibPrelude.Cons(tmp225, NofibPrelude.Nil);
    tmp227 = NofibPrelude.Cons(tmp223, tmp226);
    tmp228 = NofibPrelude.Cons(tmp221, tmp227);
    tmp229 = NofibPrelude.Cons(tmp220, tmp228);
    tmp230 = NofibPrelude.Cons(tmp229, NofibPrelude.Nil);
    tmp231 = lastpiece.P("h", tmp219, tmp230);
    this.hPiece = tmp231;
    tmp232 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp233 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp234 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp235 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp236 = NofibPrelude.Cons(tmp235, NofibPrelude.Nil);
    tmp237 = NofibPrelude.Cons(tmp234, tmp236);
    tmp238 = NofibPrelude.Cons(tmp233, tmp237);
    tmp239 = NofibPrelude.Cons(tmp232, tmp238);
    tmp240 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp241 = - 1;
    tmp242 = globalThis.Object.freeze([
      1,
      tmp241
    ]);
    tmp243 = - 1;
    tmp244 = globalThis.Object.freeze([
      2,
      tmp243
    ]);
    tmp245 = - 1;
    tmp246 = globalThis.Object.freeze([
      3,
      tmp245
    ]);
    tmp247 = NofibPrelude.Cons(tmp246, NofibPrelude.Nil);
    tmp248 = NofibPrelude.Cons(tmp244, tmp247);
    tmp249 = NofibPrelude.Cons(tmp242, tmp248);
    tmp250 = NofibPrelude.Cons(tmp240, tmp249);
    tmp251 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp252 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp253 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp254 = globalThis.Object.freeze([
      1,
      3
    ]);
    tmp255 = NofibPrelude.Cons(tmp254, NofibPrelude.Nil);
    tmp256 = NofibPrelude.Cons(tmp253, tmp255);
    tmp257 = NofibPrelude.Cons(tmp252, tmp256);
    tmp258 = NofibPrelude.Cons(tmp251, tmp257);
    tmp259 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp260 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp261 = - 1;
    tmp262 = globalThis.Object.freeze([
      2,
      tmp261
    ]);
    tmp263 = - 1;
    tmp264 = globalThis.Object.freeze([
      3,
      tmp263
    ]);
    tmp265 = NofibPrelude.Cons(tmp264, NofibPrelude.Nil);
    tmp266 = NofibPrelude.Cons(tmp262, tmp265);
    tmp267 = NofibPrelude.Cons(tmp260, tmp266);
    tmp268 = NofibPrelude.Cons(tmp259, tmp267);
    tmp269 = NofibPrelude.Cons(tmp268, NofibPrelude.Nil);
    tmp270 = NofibPrelude.Cons(tmp258, tmp269);
    tmp271 = NofibPrelude.Cons(tmp250, tmp270);
    tmp272 = NofibPrelude.Cons(tmp239, tmp271);
    tmp273 = lastpiece.P("g", NofibPrelude.Nil, tmp272);
    this.gPiece = tmp273;
    tmp274 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp275 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp276 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp277 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp278 = NofibPrelude.Cons(tmp277, NofibPrelude.Nil);
    tmp279 = NofibPrelude.Cons(tmp276, tmp278);
    tmp280 = NofibPrelude.Cons(tmp275, tmp279);
    tmp281 = NofibPrelude.Cons(tmp274, tmp280);
    tmp282 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp283 = - 1;
    tmp284 = globalThis.Object.freeze([
      1,
      tmp283
    ]);
    tmp285 = - 2;
    tmp286 = globalThis.Object.freeze([
      1,
      tmp285
    ]);
    tmp287 = - 3;
    tmp288 = globalThis.Object.freeze([
      1,
      tmp287
    ]);
    tmp289 = NofibPrelude.Cons(tmp288, NofibPrelude.Nil);
    tmp290 = NofibPrelude.Cons(tmp286, tmp289);
    tmp291 = NofibPrelude.Cons(tmp284, tmp290);
    tmp292 = NofibPrelude.Cons(tmp282, tmp291);
    tmp293 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp294 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp295 = globalThis.Object.freeze([
      3,
      0
    ]);
    tmp296 = globalThis.Object.freeze([
      3,
      1
    ]);
    tmp297 = NofibPrelude.Cons(tmp296, NofibPrelude.Nil);
    tmp298 = NofibPrelude.Cons(tmp295, tmp297);
    tmp299 = NofibPrelude.Cons(tmp294, tmp298);
    tmp300 = NofibPrelude.Cons(tmp293, tmp299);
    tmp301 = NofibPrelude.Cons(tmp300, NofibPrelude.Nil);
    tmp302 = NofibPrelude.Cons(tmp292, tmp301);
    tmp303 = NofibPrelude.Cons(tmp281, tmp302);
    tmp304 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp305 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp306 = globalThis.Object.freeze([
      0,
      3
    ]);
    tmp307 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp308 = NofibPrelude.Cons(tmp307, NofibPrelude.Nil);
    tmp309 = NofibPrelude.Cons(tmp306, tmp308);
    tmp310 = NofibPrelude.Cons(tmp305, tmp309);
    tmp311 = NofibPrelude.Cons(tmp304, tmp310);
    tmp312 = NofibPrelude.Cons(tmp311, NofibPrelude.Nil);
    tmp313 = lastpiece.P("f", tmp303, tmp312);
    this.fPiece = tmp313;
    tmp314 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp315 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp316 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp317 = NofibPrelude.Cons(tmp316, NofibPrelude.Nil);
    tmp318 = NofibPrelude.Cons(tmp315, tmp317);
    tmp319 = NofibPrelude.Cons(tmp314, tmp318);
    tmp320 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp321 = - 1;
    tmp322 = globalThis.Object.freeze([
      1,
      tmp321
    ]);
    tmp323 = - 1;
    tmp324 = globalThis.Object.freeze([
      2,
      tmp323
    ]);
    tmp325 = NofibPrelude.Cons(tmp324, NofibPrelude.Nil);
    tmp326 = NofibPrelude.Cons(tmp322, tmp325);
    tmp327 = NofibPrelude.Cons(tmp320, tmp326);
    tmp328 = NofibPrelude.Cons(tmp327, NofibPrelude.Nil);
    tmp329 = NofibPrelude.Cons(tmp319, tmp328);
    tmp330 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp331 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp332 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp333 = NofibPrelude.Cons(tmp332, NofibPrelude.Nil);
    tmp334 = NofibPrelude.Cons(tmp331, tmp333);
    tmp335 = NofibPrelude.Cons(tmp330, tmp334);
    tmp336 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp337 = - 1;
    tmp338 = globalThis.Object.freeze([
      1,
      tmp337
    ]);
    tmp339 = - 1;
    tmp340 = globalThis.Object.freeze([
      2,
      tmp339
    ]);
    tmp341 = NofibPrelude.Cons(tmp340, NofibPrelude.Nil);
    tmp342 = NofibPrelude.Cons(tmp338, tmp341);
    tmp343 = NofibPrelude.Cons(tmp336, tmp342);
    tmp344 = NofibPrelude.Cons(tmp343, NofibPrelude.Nil);
    tmp345 = NofibPrelude.Cons(tmp335, tmp344);
    tmp346 = lastpiece.P("e", tmp329, tmp345);
    this.ePiece = tmp346;
    tmp347 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp348 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp349 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp350 = NofibPrelude.Cons(tmp349, NofibPrelude.Nil);
    tmp351 = NofibPrelude.Cons(tmp348, tmp350);
    tmp352 = NofibPrelude.Cons(tmp347, tmp351);
    tmp353 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp354 = - 1;
    tmp355 = globalThis.Object.freeze([
      1,
      tmp354
    ]);
    tmp356 = - 2;
    tmp357 = globalThis.Object.freeze([
      1,
      tmp356
    ]);
    tmp358 = NofibPrelude.Cons(tmp357, NofibPrelude.Nil);
    tmp359 = NofibPrelude.Cons(tmp355, tmp358);
    tmp360 = NofibPrelude.Cons(tmp353, tmp359);
    tmp361 = NofibPrelude.Cons(tmp360, NofibPrelude.Nil);
    tmp362 = NofibPrelude.Cons(tmp352, tmp361);
    tmp363 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp364 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp365 = globalThis.Object.freeze([
      2,
      1
    ]);
    tmp366 = NofibPrelude.Cons(tmp365, NofibPrelude.Nil);
    tmp367 = NofibPrelude.Cons(tmp364, tmp366);
    tmp368 = NofibPrelude.Cons(tmp363, tmp367);
    tmp369 = NofibPrelude.Cons(tmp368, NofibPrelude.Nil);
    tmp370 = lastpiece.P("d", tmp362, tmp369);
    this.dPiece = tmp370;
    tmp371 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp372 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp373 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp374 = NofibPrelude.Cons(tmp373, NofibPrelude.Nil);
    tmp375 = NofibPrelude.Cons(tmp372, tmp374);
    tmp376 = NofibPrelude.Cons(tmp371, tmp375);
    tmp377 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp378 = - 1;
    tmp379 = globalThis.Object.freeze([
      1,
      tmp378
    ]);
    tmp380 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp381 = NofibPrelude.Cons(tmp380, NofibPrelude.Nil);
    tmp382 = NofibPrelude.Cons(tmp379, tmp381);
    tmp383 = NofibPrelude.Cons(tmp377, tmp382);
    tmp384 = - 1;
    tmp385 = globalThis.Object.freeze([
      1,
      tmp384
    ]);
    tmp386 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp387 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp388 = NofibPrelude.Cons(tmp387, NofibPrelude.Nil);
    tmp389 = NofibPrelude.Cons(tmp386, tmp388);
    tmp390 = NofibPrelude.Cons(tmp385, tmp389);
    tmp391 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp392 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp393 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp394 = NofibPrelude.Cons(tmp393, NofibPrelude.Nil);
    tmp395 = NofibPrelude.Cons(tmp392, tmp394);
    tmp396 = NofibPrelude.Cons(tmp391, tmp395);
    tmp397 = NofibPrelude.Cons(tmp396, NofibPrelude.Nil);
    tmp398 = NofibPrelude.Cons(tmp390, tmp397);
    tmp399 = NofibPrelude.Cons(tmp383, tmp398);
    tmp400 = NofibPrelude.Cons(tmp376, tmp399);
    tmp401 = lastpiece.P("c", NofibPrelude.Nil, tmp400);
    this.cPiece = tmp401;
    tmp402 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp403 = globalThis.Object.freeze([
      0,
      2
    ]);
    tmp404 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp405 = NofibPrelude.Cons(tmp404, NofibPrelude.Nil);
    tmp406 = NofibPrelude.Cons(tmp403, tmp405);
    tmp407 = NofibPrelude.Cons(tmp402, tmp406);
    tmp408 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp409 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp410 = - 1;
    tmp411 = globalThis.Object.freeze([
      2,
      tmp410
    ]);
    tmp412 = NofibPrelude.Cons(tmp411, NofibPrelude.Nil);
    tmp413 = NofibPrelude.Cons(tmp409, tmp412);
    tmp414 = NofibPrelude.Cons(tmp408, tmp413);
    tmp415 = globalThis.Object.freeze([
      0,
      1
    ]);
    tmp416 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp417 = globalThis.Object.freeze([
      2,
      0
    ]);
    tmp418 = NofibPrelude.Cons(tmp417, NofibPrelude.Nil);
    tmp419 = NofibPrelude.Cons(tmp416, tmp418);
    tmp420 = NofibPrelude.Cons(tmp415, tmp419);
    tmp421 = NofibPrelude.Cons(tmp420, NofibPrelude.Nil);
    tmp422 = NofibPrelude.Cons(tmp414, tmp421);
    tmp423 = NofibPrelude.Cons(tmp407, tmp422);
    tmp424 = globalThis.Object.freeze([
      1,
      0
    ]);
    tmp425 = globalThis.Object.freeze([
      1,
      1
    ]);
    tmp426 = globalThis.Object.freeze([
      1,
      2
    ]);
    tmp427 = NofibPrelude.Cons(tmp426, NofibPrelude.Nil);
    tmp428 = NofibPrelude.Cons(tmp425, tmp427);
    tmp429 = NofibPrelude.Cons(tmp424, tmp428);
    tmp430 = NofibPrelude.Cons(tmp429, NofibPrelude.Nil);
    tmp431 = lastpiece.P("b", tmp423, tmp430);
    this.bPiece = tmp431;
    tmp432 = NofibPrelude.Cons(lastpiece.nPiece, NofibPrelude.Nil);
    tmp433 = NofibPrelude.Cons(lastpiece.mPiece, tmp432);
    tmp434 = NofibPrelude.Cons(lastpiece.lPiece, tmp433);
    tmp435 = NofibPrelude.Cons(lastpiece.kPiece, tmp434);
    tmp436 = NofibPrelude.Cons(lastpiece.jPiece, tmp435);
    tmp437 = NofibPrelude.Cons(lastpiece.iPiece, tmp436);
    tmp438 = NofibPrelude.Cons(lastpiece.hPiece, tmp437);
    tmp439 = NofibPrelude.Cons(lastpiece.gPiece, tmp438);
    tmp440 = NofibPrelude.Cons(lastpiece.fPiece, tmp439);
    tmp441 = NofibPrelude.Cons(lastpiece.ePiece, tmp440);
    tmp442 = NofibPrelude.Cons(lastpiece.dPiece, tmp441);
    tmp443 = NofibPrelude.Cons(lastpiece.cPiece, tmp442);
    tmp444 = NofibPrelude.Cons(lastpiece.bPiece, tmp443);
    this.initialPieces = tmp444;
    globalThis.Object.freeze(class Mode {
      static {
        lastpiece.Mode = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Mode"]; 
    });
    globalThis.Object.freeze(class PageMode extends lastpiece.Mode {
      static {
        lastpiece.PageMode = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: PageMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "PageMode"]; 
    });
    globalThis.Object.freeze(class ZigZagMode extends lastpiece.Mode {
      static {
        lastpiece.ZigZagMode = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: ZigZagMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "ZigZagMode"]; 
    });
    globalThis.Object.freeze(class LeftMode extends lastpiece.Mode {
      static {
        lastpiece.LeftMode = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LeftMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LeftMode"]; 
    });
    globalThis.Object.freeze(class OneLineMode extends lastpiece.Mode {
      static {
        lastpiece.OneLineMode = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: OneLineMode
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "OneLineMode"]; 
    });
    globalThis.Object.freeze(class TextDetails {
      static {
        lastpiece.TextDetails = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextDetails"]; 
    });
    this.Chr = function Chr(c) {
      return globalThis.Object.freeze(new Chr.class(c));
    };
    globalThis.Object.freeze(class Chr extends lastpiece.TextDetails {
      static {
        lastpiece.Chr.class = this
      }
      constructor(c) {
        super();
        this.c = c;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Chr", ["c"]]; 
    });
    this.Str = function Str(s) {
      return globalThis.Object.freeze(new Str.class(s));
    };
    globalThis.Object.freeze(class Str extends lastpiece.TextDetails {
      static {
        lastpiece.Str.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Str", ["s"]]; 
    });
    this.PStr = function PStr(s) {
      return globalThis.Object.freeze(new PStr.class(s));
    };
    globalThis.Object.freeze(class PStr extends lastpiece.TextDetails {
      static {
        lastpiece.PStr.class = this
      }
      constructor(s) {
        super();
        this.s = s;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "PStr", ["s"]]; 
    });
    globalThis.Object.freeze(class AnnotDetails {
      static {
        lastpiece.AnnotDetails = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "AnnotDetails"]; 
    });
    globalThis.Object.freeze(class AnnotStart extends lastpiece.AnnotDetails {
      static {
        lastpiece.AnnotStart = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: AnnotStart
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotStart"]; 
    });
    globalThis.Object.freeze(class AnnotEnd extends lastpiece.AnnotDetails {
      static {
        lastpiece.AnnotEnd = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: AnnotEnd
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "AnnotEnd"]; 
    });
    this.NoAnnot = function NoAnnot(t, i) {
      return globalThis.Object.freeze(new NoAnnot.class(t, i));
    };
    globalThis.Object.freeze(class NoAnnot extends lastpiece.AnnotDetails {
      static {
        lastpiece.NoAnnot.class = this
      }
      constructor(t, i) {
        super();
        this.t = t;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NoAnnot", ["t", "i"]]; 
    });
    globalThis.Object.freeze(class IsEmptyy {
      static {
        lastpiece.IsEmptyy = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "IsEmptyy"]; 
    });
    globalThis.Object.freeze(class IsEmpty extends lastpiece.IsEmptyy {
      static {
        lastpiece.IsEmpty = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: IsEmpty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "IsEmpty"]; 
    });
    globalThis.Object.freeze(class NotEmpty extends lastpiece.IsEmptyy {
      static {
        lastpiece.NotEmpty = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: NotEmpty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NotEmpty"]; 
    });
    globalThis.Object.freeze(class Doc {
      static {
        lastpiece.Doc = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Doc"]; 
    });
    globalThis.Object.freeze(class Empty extends lastpiece.Doc {
      static {
        lastpiece.Empty = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Empty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"]; 
    });
    globalThis.Object.freeze(class NoDoc extends lastpiece.Doc {
      static {
        lastpiece.NoDoc = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: NoDoc
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "NoDoc"]; 
    });
    this.NilAbove = function NilAbove(d) {
      return globalThis.Object.freeze(new NilAbove.class(d));
    };
    globalThis.Object.freeze(class NilAbove extends lastpiece.Doc {
      static {
        lastpiece.NilAbove.class = this
      }
      constructor(d) {
        super();
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NilAbove", ["d"]]; 
    });
    this.TextBeside = function TextBeside(a, d) {
      return globalThis.Object.freeze(new TextBeside.class(a, d));
    };
    globalThis.Object.freeze(class TextBeside extends lastpiece.Doc {
      static {
        lastpiece.TextBeside.class = this
      }
      constructor(a, d) {
        super();
        this.a = a;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "TextBeside", ["a", "d"]]; 
    });
    this.Nest = function Nest(i, d) {
      return globalThis.Object.freeze(new Nest.class(i, d));
    };
    globalThis.Object.freeze(class Nest extends lastpiece.Doc {
      static {
        lastpiece.Nest.class = this
      }
      constructor(i, d) {
        super();
        this.i = i;
        this.d = d;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Nest", ["i", "d"]]; 
    });
    this.Union = function Union(d1, d2) {
      return globalThis.Object.freeze(new Union.class(d1, d2));
    };
    globalThis.Object.freeze(class Union extends lastpiece.Doc {
      static {
        lastpiece.Union.class = this
      }
      constructor(d1, d2) {
        super();
        this.d1 = d1;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Union", ["d1", "d2"]]; 
    });
    this.Beside = function Beside(d1, b, d2) {
      return globalThis.Object.freeze(new Beside.class(d1, b, d2));
    };
    globalThis.Object.freeze(class Beside extends lastpiece.Doc {
      static {
        lastpiece.Beside.class = this
      }
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Beside", ["d1", "b", "d2"]]; 
    });
    this.Above = function Above(d1, b, d2) {
      return globalThis.Object.freeze(new Above.class(d1, b, d2));
    };
    globalThis.Object.freeze(class Above extends lastpiece.Doc {
      static {
        lastpiece.Above.class = this
      }
      constructor(d1, b, d2) {
        super();
        this.d1 = d1;
        this.b = b;
        this.d2 = d2;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Above", ["d1", "b", "d2"]]; 
    });
    tmp445 = lastpiece.Chr(" ");
    tmp446 = lastpiece.NoAnnot(tmp445, 1);
    this.spaceText = tmp446;
    tmp447 = lastpiece.Chr("\n");
    tmp448 = lastpiece.NoAnnot(tmp447, 1);
    this.nlText = tmp448;
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
    return lastpiece.Bin(tmp3, k, x, l, r)
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
    let sizeL, sizeR, sizeX, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3;
    sizeL = lastpiece.size(l);
    sizeR = lastpiece.size(r);
    tmp = sizeL + sizeR;
    sizeX = tmp + 1;
    tmp1 = sizeL + sizeR;
    scrut2 = tmp1 <= 1;
    if (scrut2 === true) {
      return lastpiece.Bin(sizeX, k, x, l, r)
    } else {
      tmp2 = 4 * sizeL;
      scrut1 = sizeR >= tmp2;
      if (scrut1 === true) {
        return lastpiece.rotateL(k, x, l, r)
      } else {
        tmp3 = 4 * sizeR;
        scrut = sizeL >= tmp3;
        if (scrut === true) {
          return lastpiece.rotateR(k, x, l, r)
        } else {
          return lastpiece.Bin(sizeX, k, x, l, r)
        }
      }
    }
  } 
  static insert(kx, x, m) {
    let param0, param1, param2, param3, param4, sz, ky, y, l, r, scrut;
    if (m instanceof lastpiece.Tip.class) {
      return lastpiece.Bin(1, kx, x, lastpiece.Tip, lastpiece.Tip)
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
    let first1, first0, row1, col, first11, first01, orow, ocol, tmp, tmp1;
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
        return globalThis.Object.freeze([
          tmp,
          tmp1
        ])
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static next(row_col) {
    let first1, first0, row1, col, tmp;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      first0 = runtime.Tuple.get(row_col, 0);
      first1 = runtime.Tuple.get(row_col, 1);
      row1 = first0;
      col = first1;
      tmp = col + 1;
      return globalThis.Object.freeze([
        row1,
        tmp
      ])
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
      return NofibPrelude.Some(tmp)
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
    let first1, first0, row1, col, scrut, scrut1, tmp, tmp1, tmp2, tmp3;
    if (runtime.Tuple.isArrayLike(row_col) && row_col.length === 2) {
      first0 = runtime.Tuple.get(row_col, 0);
      first1 = runtime.Tuple.get(row_col, 1);
      row1 = first0;
      col = first1;
      if (ps instanceof NofibPrelude.Nil.class) {
        return lastpiece.Soln(bd)
      } else {
        tmp = lastpiece.maxCol + 1;
        scrut1 = col === tmp;
        if (scrut1 === true) {
          tmp1 = row1 + 1;
          tmp2 = globalThis.Object.freeze([
            tmp1,
            1
          ]);
          tmp3 = lastpiece.flip(sey);
          return lastpiece.search(tmp2, tmp3, bd, ps)
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
    let first1, first0, q1, tmp;
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
      return globalThis.Object.freeze([
        lastpiece.NotEmpty,
        tmp
      ])
    }
  } 
  static reduceVert(doc) {
    let param0, param1, param2, p, g, q, tmp, tmp1, tmp2;
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
      return globalThis.Object.freeze([
        lastpiece.NotEmpty,
        doc
      ])
    }
  } 
  static vcat(ls) {
    let tmp, tmp1;
    tmp = NofibPrelude.foldr(lambda7, lastpiece.Empty, ls);
    tmp1 = reduceVert_inst_52_43_tsni(tmp);
    return NofibPrelude.snd(tmp1)
  } 
  static text(s) {
    let sl, tmp, tmp1;
    sl = NofibPrelude.listLen(s);
    tmp = lastpiece.Str(s);
    tmp1 = lastpiece.NoAnnot(tmp, sl);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static char(c) {
    let tmp, tmp1;
    tmp = lastpiece.Chr(c);
    tmp1 = lastpiece.NoAnnot(tmp, 1);
    return lastpiece.TextBeside(tmp1, lastpiece.Empty)
  } 
  static reduceHoriz(doc) {
    let param0, param1, param2, p, g, q, tmp, tmp1, tmp2;
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
      return globalThis.Object.freeze([
        lastpiece.NotEmpty,
        doc
      ])
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
        return lastpiece.Above(p, g, q)
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
        tmp4 = lastpiece.Beside(p12, g1, q1);
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
      return lastpiece.NilAbove(tmp7)
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
    let param0, param1, param2, s, p1, k1, rest, p11, k11, p12, p13, p2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
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
      return lastpiece.NilAbove(tmp4)
    } else if (p instanceof lastpiece.TextBeside.class) {
      param0 = p.a;
      param1 = p.d;
      s = param0;
      p1 = param1;
      tmp5 = lastpiece.annotSize(s);
      k1 = k - tmp5;
      if (p1 instanceof lastpiece.Empty.class) {
        tmp6 = lastpiece.nilAboveNest(g, k1, q);
      } else {
        tmp6 = lastpiece.aboveNest(p1, g, k1, q);
      }
      rest = tmp6;
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
          tmp2 = lastpiece.Str(tmp1);
          tmp3 = lastpiece.NoAnnot(tmp2, k);
          return lastpiece.TextBeside(tmp3, q)
        } else {
          tmp4 = lastpiece.mkNest(k, q);
          return lastpiece.NilAbove(tmp4)
        }
      } else {
        tmp5 = lastpiece.mkNest(k, q);
        return lastpiece.NilAbove(tmp5)
      }
    }
  } 
  static printDoc(d) {
    let done;
    done = NofibPrelude.Cons("\n", NofibPrelude.Nil);
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
    let ribbonLen, bestLineLen, doc1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (m instanceof lastpiece.OneLineMode.class) {
      tmp = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.spaceText, lambda10, txt, rest, tmp)
    } else if (m instanceof lastpiece.LeftMode.class) {
      tmp1 = lastpiece.reduceDoc(doc);
      return lastpiece.easyDisplay(lastpiece.nlText, lastpiece.first, txt, rest, tmp1)
    } else {
      tmp2 = lineLen / ribbons;
      ribbonLen = lastpiece.ceiling(tmp2);
      if (m instanceof lastpiece.ZigZagMode.class) {
        tmp3 = 2147483647;
      } else {
        tmp3 = lineLen;
      }
      bestLineLen = tmp3;
      tmp4 = lastpiece.reduceDoc(doc);
      doc1 = lastpiece.best(bestLineLen, ribbonLen, tmp4);
      return lastpiece.displayDoc(m, lineLen, ribbonLen, txt, rest, doc1)
    }
  } 
  static easyDisplay(nlSpaceText, choose, txt, end, x) {
    return lay$(nlSpaceText, choose, txt, end, x)
  } 
  static displayDoc(m, pageWidth, ribbonWidth, txt, end, doc) {
    let gapWidth, shift;
    gapWidth = pageWidth - ribbonWidth;
    shift = NofibPrelude.intDiv(gapWidth, 2);
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
    let initialBoard, solutions, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    tmp = globalThis.Object.freeze([
      1,
      1
    ]);
    _deforest_Deforest_Arr_2_0 = 1;
    _deforest_Deforest_Arr_2_1 = 0;
    tmp1 = (row1, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    _deforest_Deforest_Arr_2_01 = 1;
    _deforest_Deforest_Arr_2_11 = 1;
    tmp2 = (row1, col) => {
      return match_orow_ocol_arm_Deforest_Arr_2_inst_54_55_67_tsni(row1, col, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
    };
    _deforest_Cons_head1 = tmp2;
    _deforest_Cons_tail1 = (bd, sq1, id) => {
      let tmp8, _deforest_Some_x;
      tmp8 = extend_inst_54_55_29_tsni(bd, sq1, id);
      _deforest_Some_x = tmp8;
      return () => {
        let param0, x;
        param0 = _deforest_Some_x;
        x = param0;
        return x
      }
    };
    tmp3 = (bd, sq1, id) => {
      return match_os_arm_Cons_inst_54_55_tsni(bd, sq1, id, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp3;
    tmp4 = (bd, sq1, id) => {
      return match_os_arm_Cons_inst_54_55_tsni(bd, sq1, id, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp5 = fit_inst_54_55_tsni(lastpiece.emptyBoard, tmp, "a", tmp4);
    initialBoard = fromSome_inst_54_68_tsni(tmp5);
    tmp6 = globalThis.Object.freeze([
      1,
      2
    ]);
    solutions = search_inst_54_56_tsni(tmp6, lastpiece.Female, initialBoard, lastpiece.initialPieces);
    tmp7 = display_inst_54_57_tsni(solutions);
    return lastpiece.printDoc(tmp7)
  } 
  static main() {
    let tmp;
    tmp = testLastPiece_nofib_inst_58_59_tsni();
    return nofibListToString_inst_58_69_tsni(tmp)
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "lastpiece"]; 
});
let lastpiece = lastpiece1; export default lastpiece;
