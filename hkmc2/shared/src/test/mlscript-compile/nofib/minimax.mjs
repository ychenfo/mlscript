import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lscomp2, lscomp1, best_, board, minimax1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$, lscomp2$, lambda$1, lambda$2, lambda$3, lambda$4, best_$, lambda$5, lambda$6, lambda$7, lambda$8, board$, bestMove_inst_0_1_tsni, mise_inst_0_1_2_tsni, lambda_inst_0_1_2_tsni, lambda$_inst_0_1_2_tsni, map_inst_0_1_2_3_tsni, static_inst_0_1_4_tsni, lambda_inst_0_1_4_5_tsni, lambda$_inst_0_1_4_5_6_tsni, score_inst_0_1_4_5_6_7_tsni, map2_inst_0_1_4_5_6_7_8_tsni, map_inst_0_1_4_9_tsni, searchTree_inst_0_1_10_tsni, lambda_inst_0_1_10_11_tsni, lambda$_inst_0_1_10_11_12_tsni, newPositions_inst_0_1_10_11_12_13_tsni, map_inst_0_1_10_11_12_13_14_tsni, lscomp1_inst_0_1_10_11_12_13_15_tsni, lscomp2$_inst_0_1_10_11_12_13_15_tsni, lambda_inst_0_1_10_16_tsni, lambda$_inst_0_1_10_16_17_tsni, newPositions_inst_0_1_10_16_17_18_tsni, map_inst_0_1_10_16_17_18_14_tsni, lscomp1_inst_0_1_10_16_17_18_15_tsni, lscomp2$_inst_0_1_10_16_17_18_15_tsni, repTree_inst_0_1_10_19_tsni, lambda_inst_0_1_10_19_tsni, lambda$_inst_0_1_10_19_tsni, map_inst_0_1_10_19_20_tsni, prune_inst_0_1_10_21_tsni, lambda_inst_0_1_10_21_tsni, lambda$_inst_0_1_10_21_tsni, map_inst_0_1_10_21_22_tsni, lambda$_inst_23_24_tsni, bestMove_inst_23_24_1_tsni, searchTree_inst_23_24_1_10_tsni, repTree_inst_23_24_1_10_19_tsni, lambda_inst_23_24_1_10_19_tsni, lambda$_inst_23_24_1_10_19_tsni, map_inst_23_24_1_10_19_20_tsni, lambda_inst_23_24_1_10_16_tsni, lambda$_inst_23_24_1_10_16_17_tsni, newPositions_inst_23_24_1_10_16_17_18_tsni, lscomp1_inst_23_24_1_10_16_17_18_15_tsni, lscomp2$_inst_23_24_1_10_16_17_18_15_tsni, map_inst_23_24_1_10_16_17_18_14_tsni, lambda_inst_23_24_1_10_11_tsni, lambda$_inst_23_24_1_10_11_12_tsni, newPositions_inst_23_24_1_10_11_12_13_tsni, lscomp1_inst_23_24_1_10_11_12_13_15_tsni, lscomp2$_inst_23_24_1_10_11_12_13_15_tsni, map_inst_23_24_1_10_11_12_13_14_tsni, static_inst_23_24_1_4_tsni, map_inst_23_24_1_4_9_tsni, lambda_inst_23_24_1_4_5_tsni, lambda$_inst_23_24_1_4_5_6_tsni, score_inst_23_24_1_4_5_6_7_tsni, map2_inst_23_24_1_4_5_6_7_8_tsni, prune_inst_23_24_1_10_21_tsni, lambda_inst_23_24_1_10_21_tsni, lambda$_inst_23_24_1_10_21_tsni, map_inst_23_24_1_10_21_22_tsni, mise_inst_23_24_1_2_tsni, lambda_inst_23_24_1_2_tsni, lambda$_inst_23_24_1_2_tsni, map_inst_23_24_1_2_3_tsni, newPositions_inst_25_13_tsni, map_inst_25_13_14_tsni, lscomp1_inst_25_13_15_tsni, lscomp2$_inst_25_13_15_tsni, lambda$_inst_26_12_tsni, newPositions_inst_26_12_13_tsni, lscomp1_inst_26_12_13_15_tsni, lscomp2$_inst_26_12_13_15_tsni, map_inst_26_12_13_14_tsni, newPositions_inst_27_18_tsni, map_inst_27_18_14_tsni, lscomp1_inst_27_18_15_tsni, lscomp2$_inst_27_18_15_tsni, lambda$_inst_28_17_tsni, newPositions_inst_28_17_18_tsni, lscomp1_inst_28_17_18_15_tsni, lscomp2$_inst_28_17_18_15_tsni, map_inst_28_17_18_14_tsni, mise_inst_29_tsni, lambda_inst_29_tsni, map_inst_29_3_tsni, mise_inst_30_tsni, lambda$_inst_30_tsni, map_inst_30_3_tsni, score_inst_31_7_tsni, map2_inst_31_7_8_tsni, lambda$_inst_32_6_tsni, score_inst_32_6_7_tsni, map2_inst_32_6_7_8_tsni, lscomp1_inst_33_34_tsni, lscomp2$_inst_33_34_tsni, lscomp2$_inst_35_tsni, concat_inst_36_37_tsni, append_inst_36_37_38_tsni, map_inst_36_39_tsni, lscomp1_inst_40_15_tsni, lscomp2$_inst_40_15_tsni, map_inst_40_14_tsni, map2_inst_41_8_tsni, lambda_inst_42_5_tsni, lambda$_inst_42_5_6_tsni, score_inst_42_5_6_7_tsni, map2_inst_42_5_6_7_8_tsni, map_inst_42_9_tsni, lambda_inst_43_tsni, lambda$_inst_43_tsni, map_inst_43_3_tsni, lambda_inst_44_11_tsni, lambda$_inst_44_11_12_tsni, newPositions_inst_44_11_12_13_tsni, map_inst_44_11_12_13_14_tsni, lscomp1_inst_44_11_12_13_15_tsni, lscomp2$_inst_44_11_12_13_15_tsni, lambda_inst_44_16_tsni, lambda$_inst_44_16_17_tsni, newPositions_inst_44_16_17_18_tsni, map_inst_44_16_17_18_14_tsni, lscomp1_inst_44_16_17_18_15_tsni, lscomp2$_inst_44_16_17_18_15_tsni, repTree_inst_44_19_tsni, lambda_inst_44_19_tsni, lambda$_inst_44_19_tsni, map_inst_44_19_20_tsni, searchTree_inst_45_10_tsni, repTree_inst_45_10_19_tsni, lambda_inst_45_10_19_tsni, lambda$_inst_45_10_19_tsni, map_inst_45_10_19_20_tsni, lambda_inst_45_10_16_tsni, lambda$_inst_45_10_16_17_tsni, newPositions_inst_45_10_16_17_18_tsni, lscomp1_inst_45_10_16_17_18_15_tsni, lscomp2$_inst_45_10_16_17_18_15_tsni, map_inst_45_10_16_17_18_14_tsni, lambda_inst_45_10_11_tsni, lambda$_inst_45_10_11_12_tsni, newPositions_inst_45_10_11_12_13_tsni, lscomp1_inst_45_10_11_12_13_15_tsni, lscomp2$_inst_45_10_11_12_13_15_tsni, map_inst_45_10_11_12_13_14_tsni, static_inst_45_4_tsni, map_inst_45_4_9_tsni, lambda_inst_45_4_5_tsni, lambda$_inst_45_4_5_6_tsni, score_inst_45_4_5_6_7_tsni, map2_inst_45_4_5_6_7_8_tsni, prune_inst_45_10_21_tsni, lambda_inst_45_10_21_tsni, lambda$_inst_45_10_21_tsni, map_inst_45_10_21_22_tsni, mise_inst_45_2_tsni, lambda_inst_45_2_tsni, lambda$_inst_45_2_tsni, map_inst_45_2_3_tsni, fullBoard_inst_46_47_tsni, map_inst_46_47_39_tsni, concat_inst_46_47_37_tsni, append_inst_46_47_37_38_tsni, static_inst_46_48_tsni, map_inst_46_48_9_tsni, lambda_inst_46_48_5_tsni, lambda$_inst_46_48_5_6_tsni, score_inst_46_48_5_6_7_tsni, map2_inst_46_48_5_6_7_8_tsni, interpret_inst_46_48_49_tsni, static_inst_46_50_tsni, map_inst_46_50_9_tsni, lambda_inst_46_50_5_tsni, lambda$_inst_46_50_5_6_tsni, score_inst_46_50_5_6_7_tsni, map2_inst_46_50_5_6_7_8_tsni, interpret_inst_46_50_49_tsni, newPositions_inst_46_51_tsni, map_inst_46_51_14_tsni, lscomp1_inst_46_51_15_tsni, lscomp2$_inst_46_51_15_tsni, lambda_inst_46_52_tsni, lambda$_inst_46_52_24_tsni, bestMove_inst_46_52_24_1_tsni, mise_inst_46_52_24_1_2_tsni, lambda_inst_46_52_24_1_2_tsni, lambda$_inst_46_52_24_1_2_tsni, map_inst_46_52_24_1_2_3_tsni, static_inst_46_52_24_1_4_tsni, lambda_inst_46_52_24_1_4_5_tsni, lambda$_inst_46_52_24_1_4_5_6_tsni, score_inst_46_52_24_1_4_5_6_7_tsni, map2_inst_46_52_24_1_4_5_6_7_8_tsni, map_inst_46_52_24_1_4_9_tsni, searchTree_inst_46_52_24_1_10_tsni, lambda_inst_46_52_24_1_10_11_tsni, lambda$_inst_46_52_24_1_10_11_12_tsni, newPositions_inst_46_52_24_1_10_11_12_13_tsni, map_inst_46_52_24_1_10_11_12_13_14_tsni, lscomp1_inst_46_52_24_1_10_11_12_13_15_tsni, lscomp2$_inst_46_52_24_1_10_11_12_13_15_tsni, lambda_inst_46_52_24_1_10_16_tsni, lambda$_inst_46_52_24_1_10_16_17_tsni, newPositions_inst_46_52_24_1_10_16_17_18_tsni, map_inst_46_52_24_1_10_16_17_18_14_tsni, lscomp1_inst_46_52_24_1_10_16_17_18_15_tsni, lscomp2$_inst_46_52_24_1_10_16_17_18_15_tsni, repTree_inst_46_52_24_1_10_19_tsni, lambda_inst_46_52_24_1_10_19_tsni, lambda$_inst_46_52_24_1_10_19_tsni, map_inst_46_52_24_1_10_19_20_tsni, prune_inst_46_52_24_1_10_21_tsni, lambda_inst_46_52_24_1_10_21_tsni, lambda$_inst_46_52_24_1_10_21_tsni, map_inst_46_52_24_1_10_21_22_tsni, best_inst_46_53_tsni, best_$_inst_46_53_54_tsni, alternate_inst_55_56_tsni, best_inst_55_56_53_tsni, best_$_inst_55_56_53_54_tsni, lambda_inst_55_56_52_tsni, lambda$_inst_55_56_52_24_tsni, bestMove_inst_55_56_52_24_1_tsni, searchTree_inst_55_56_52_24_1_10_tsni, repTree_inst_55_56_52_24_1_10_19_tsni, lambda_inst_55_56_52_24_1_10_19_tsni, lambda$_inst_55_56_52_24_1_10_19_tsni, map_inst_55_56_52_24_1_10_19_20_tsni, lambda_inst_55_56_52_24_1_10_16_tsni, lambda$_inst_55_56_52_24_1_10_16_17_tsni, newPositions_inst_55_56_52_24_1_10_16_17_18_tsni, lscomp1_inst_55_56_52_24_1_10_16_17_18_15_tsni, lscomp2$_inst_55_56_52_24_1_10_16_17_18_15_tsni, map_inst_55_56_52_24_1_10_16_17_18_14_tsni, lambda_inst_55_56_52_24_1_10_11_tsni, lambda$_inst_55_56_52_24_1_10_11_12_tsni, newPositions_inst_55_56_52_24_1_10_11_12_13_tsni, lscomp1_inst_55_56_52_24_1_10_11_12_13_15_tsni, lscomp2$_inst_55_56_52_24_1_10_11_12_13_15_tsni, map_inst_55_56_52_24_1_10_11_12_13_14_tsni, static_inst_55_56_52_24_1_4_tsni, map_inst_55_56_52_24_1_4_9_tsni, lambda_inst_55_56_52_24_1_4_5_tsni, lambda$_inst_55_56_52_24_1_4_5_6_tsni, score_inst_55_56_52_24_1_4_5_6_7_tsni, map2_inst_55_56_52_24_1_4_5_6_7_8_tsni, prune_inst_55_56_52_24_1_10_21_tsni, lambda_inst_55_56_52_24_1_10_21_tsni, lambda$_inst_55_56_52_24_1_10_21_tsni, map_inst_55_56_52_24_1_10_21_22_tsni, interpret_inst_55_56_52_24_1_4_49_tsni, mise_inst_55_56_52_24_1_2_tsni, lambda_inst_55_56_52_24_1_2_tsni, lambda$_inst_55_56_52_24_1_2_tsni, map_inst_55_56_52_24_1_2_3_tsni, newPositions_inst_55_56_51_tsni, lscomp1_inst_55_56_51_15_tsni, lscomp2$_inst_55_56_51_15_tsni, map_inst_55_56_51_14_tsni, static_inst_55_56_50_tsni, lambda_inst_55_56_50_5_tsni, lambda$_inst_55_56_50_5_6_tsni, score_inst_55_56_50_5_6_7_tsni, map2_inst_55_56_50_5_6_7_8_tsni, map_inst_55_56_50_9_tsni, interpret_inst_55_56_50_49_tsni, static_inst_55_56_48_tsni, lambda_inst_55_56_48_5_tsni, lambda$_inst_55_56_48_5_6_tsni, score_inst_55_56_48_5_6_7_tsni, map2_inst_55_56_48_5_6_7_8_tsni, map_inst_55_56_48_9_tsni, interpret_inst_55_56_48_49_tsni, fullBoard_inst_55_56_47_tsni, concat_inst_55_56_47_37_tsni, append_inst_55_56_47_37_38_tsni, map_inst_55_56_47_39_tsni, map_inst_55_57_tsni, prog_inst_58_59_tsni, map_inst_58_59_57_tsni, alternate_inst_58_59_56_tsni, fullBoard_inst_58_59_56_47_tsni, map_inst_58_59_56_47_39_tsni, concat_inst_58_59_56_47_37_tsni, append_inst_58_59_56_47_37_38_tsni, static_inst_58_59_56_48_tsni, map_inst_58_59_56_48_9_tsni, lambda_inst_58_59_56_48_5_tsni, lambda$_inst_58_59_56_48_5_6_tsni, score_inst_58_59_56_48_5_6_7_tsni, map2_inst_58_59_56_48_5_6_7_8_tsni, interpret_inst_58_59_56_48_49_tsni, static_inst_58_59_56_50_tsni, map_inst_58_59_56_50_9_tsni, lambda_inst_58_59_56_50_5_tsni, lambda$_inst_58_59_56_50_5_6_tsni, score_inst_58_59_56_50_5_6_7_tsni, map2_inst_58_59_56_50_5_6_7_8_tsni, interpret_inst_58_59_56_50_49_tsni, newPositions_inst_58_59_56_51_tsni, map_inst_58_59_56_51_14_tsni, lscomp1_inst_58_59_56_51_15_tsni, lscomp2$_inst_58_59_56_51_15_tsni, lambda_inst_58_59_56_52_tsni, lambda$_inst_58_59_56_52_24_tsni, bestMove_inst_58_59_56_52_24_1_tsni, mise_inst_58_59_56_52_24_1_2_tsni, lambda_inst_58_59_56_52_24_1_2_tsni, lambda$_inst_58_59_56_52_24_1_2_tsni, map_inst_58_59_56_52_24_1_2_3_tsni, static_inst_58_59_56_52_24_1_4_tsni, lambda_inst_58_59_56_52_24_1_4_5_tsni, lambda$_inst_58_59_56_52_24_1_4_5_6_tsni, score_inst_58_59_56_52_24_1_4_5_6_7_tsni, map2_inst_58_59_56_52_24_1_4_5_6_7_8_tsni, map_inst_58_59_56_52_24_1_4_9_tsni, interpret_inst_58_59_56_52_24_1_4_49_tsni, searchTree_inst_58_59_56_52_24_1_10_tsni, lambda_inst_58_59_56_52_24_1_10_11_tsni, lambda$_inst_58_59_56_52_24_1_10_11_12_tsni, newPositions_inst_58_59_56_52_24_1_10_11_12_13_tsni, map_inst_58_59_56_52_24_1_10_11_12_13_14_tsni, lscomp1_inst_58_59_56_52_24_1_10_11_12_13_15_tsni, lscomp2$_inst_58_59_56_52_24_1_10_11_12_13_15_tsni, lambda_inst_58_59_56_52_24_1_10_16_tsni, lambda$_inst_58_59_56_52_24_1_10_16_17_tsni, newPositions_inst_58_59_56_52_24_1_10_16_17_18_tsni, map_inst_58_59_56_52_24_1_10_16_17_18_14_tsni, lscomp1_inst_58_59_56_52_24_1_10_16_17_18_15_tsni, lscomp2$_inst_58_59_56_52_24_1_10_16_17_18_15_tsni, repTree_inst_58_59_56_52_24_1_10_19_tsni, lambda_inst_58_59_56_52_24_1_10_19_tsni, lambda$_inst_58_59_56_52_24_1_10_19_tsni, map_inst_58_59_56_52_24_1_10_19_20_tsni, prune_inst_58_59_56_52_24_1_10_21_tsni, lambda_inst_58_59_56_52_24_1_10_21_tsni, lambda$_inst_58_59_56_52_24_1_10_21_tsni, map_inst_58_59_56_52_24_1_10_21_22_tsni, best_inst_58_59_56_53_tsni, best_$_inst_58_59_56_53_54_tsni, concat_inst_58_59_60_tsni, append_inst_58_59_60_38_tsni, append_inst_58_59_61_tsni, foldr_inst_0_1_2_62_tsni, map_inst_0_1_4_5_6_7_63_tsni, interpret_inst_0_1_4_49_tsni, concat_inst_0_1_10_11_12_13_64_tsni, concat_inst_0_1_10_16_17_18_64_tsni, mapTree_inst_0_1_65_tsni, lambda_inst_0_1_65_tsni, lambda$_inst_0_1_65_tsni, map_inst_0_1_65_66_tsni, concat_inst_23_24_1_10_16_17_18_64_tsni, concat_inst_23_24_1_10_11_12_13_64_tsni, interpret_inst_23_24_1_4_49_tsni, map_inst_23_24_1_4_5_6_7_63_tsni, mapTree_inst_23_24_1_65_tsni, lambda_inst_23_24_1_65_tsni, lambda$_inst_23_24_1_65_tsni, map_inst_23_24_1_65_66_tsni, foldr_inst_23_24_1_2_62_tsni, concat_inst_25_13_64_tsni, concat_inst_26_12_13_64_tsni, concat_inst_27_18_64_tsni, concat_inst_28_17_18_64_tsni, foldr_inst_29_62_tsni, foldr_inst_30_62_tsni, map_inst_31_7_63_tsni, map_inst_32_6_7_63_tsni, andd_inst_36_67_tsni, concat_inst_40_64_tsni, map_inst_41_63_tsni, map_inst_42_5_6_7_63_tsni, interpret_inst_42_49_tsni, foldr_inst_43_62_tsni, concat_inst_44_11_12_13_64_tsni, concat_inst_44_16_17_18_64_tsni, prune_inst_44_21_tsni, lambda_inst_44_21_tsni, lambda$_inst_44_21_tsni, map_inst_44_21_22_tsni, concat_inst_45_10_16_17_18_64_tsni, concat_inst_45_10_11_12_13_64_tsni, interpret_inst_45_4_49_tsni, map_inst_45_4_5_6_7_63_tsni, mapTree_inst_45_65_tsni, lambda_inst_45_65_tsni, lambda$_inst_45_65_tsni, map_inst_45_65_66_tsni, foldr_inst_45_2_62_tsni, andd_inst_46_47_67_tsni, map_inst_46_48_5_6_7_63_tsni, evaluationEq_inst_46_68_tsni, map_inst_46_50_5_6_7_63_tsni, evaluationEq_inst_46_69_tsni, concat_inst_46_51_64_tsni, foldr_inst_46_52_24_1_2_62_tsni, map_inst_46_52_24_1_4_5_6_7_63_tsni, interpret_inst_46_52_24_1_4_49_tsni, concat_inst_46_52_24_1_10_11_12_13_64_tsni, concat_inst_46_52_24_1_10_16_17_18_64_tsni, mapTree_inst_46_52_24_1_65_tsni, lambda_inst_46_52_24_1_65_tsni, lambda$_inst_46_52_24_1_65_tsni, map_inst_46_52_24_1_65_66_tsni, concat_inst_55_56_52_24_1_10_16_17_18_64_tsni, concat_inst_55_56_52_24_1_10_11_12_13_64_tsni, map_inst_55_56_52_24_1_4_5_6_7_63_tsni, mapTree_inst_55_56_52_24_1_65_tsni, lambda_inst_55_56_52_24_1_65_tsni, lambda$_inst_55_56_52_24_1_65_tsni, map_inst_55_56_52_24_1_65_66_tsni, cropTree_inst_55_56_52_24_1_70_tsni, foldr_inst_55_56_52_24_1_2_62_tsni, concat_inst_55_56_51_64_tsni, map_inst_55_56_50_5_6_7_63_tsni, evaluationEq_inst_55_56_69_tsni, map_inst_55_56_48_5_6_7_63_tsni, evaluationEq_inst_55_56_68_tsni, andd_inst_55_56_47_67_tsni, showMove_inst_55_71_tsni, concat_inst_55_60_tsni, andd_inst_58_59_56_47_67_tsni, map_inst_58_59_56_48_5_6_7_63_tsni, evaluationEq_inst_58_59_56_68_tsni, map_inst_58_59_56_50_5_6_7_63_tsni, evaluationEq_inst_58_59_56_69_tsni, concat_inst_58_59_56_51_64_tsni, foldr_inst_58_59_56_52_24_1_2_62_tsni, map_inst_58_59_56_52_24_1_4_5_6_7_63_tsni, cropTree_inst_58_59_56_52_24_1_70_tsni, concat_inst_58_59_56_52_24_1_10_11_12_13_64_tsni, concat_inst_58_59_56_52_24_1_10_16_17_18_64_tsni, mapTree_inst_58_59_56_52_24_1_65_tsni, lambda_inst_58_59_56_52_24_1_65_tsni, lambda$_inst_58_59_56_52_24_1_65_tsni, map_inst_58_59_56_52_24_1_65_66_tsni, showMove_inst_58_59_71_tsni, nofibListToString_inst_58_72_tsni, match_xs_arm_Nil_inst_0_1_4_5_6_7_63_tsni, match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni1, match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni1, match_t_arm_Branch_inst_0_1_65_tsni, match_xs_arm_Nil_inst_0_1_65_66_tsni, match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni1, match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni1, match_xs_arm_Nil_inst_23_24_1_4_5_6_7_63_tsni, match_t_arm_Branch_inst_23_24_1_65_tsni, match_xs_arm_Nil_inst_23_24_1_65_66_tsni, match_ls_arm_Cons_inst_25_13_15_tsni, match_ls_arm_Cons_inst_25_13_15_tsni1, match_ls_arm_Cons_inst_26_12_13_15_tsni, match_ls_arm_Cons_inst_26_12_13_15_tsni1, match_ls_arm_Cons_inst_27_18_15_tsni, match_ls_arm_Cons_inst_27_18_15_tsni1, match_ls_arm_Cons_inst_28_17_18_15_tsni, match_ls_arm_Cons_inst_28_17_18_15_tsni1, match_xs_arm_Nil_inst_31_7_63_tsni, match_xs_arm_Nil_inst_32_6_7_63_tsni, match_ls_arm_Cons_inst_33_34_tsni, match_ls_arm_Cons_inst_35_tsni, match_ls_arm_Cons_inst_40_15_tsni, match_ls_arm_Cons_inst_40_15_tsni1, match_xs_arm_Nil_inst_41_63_tsni, match_xs_arm_Nil_inst_42_5_6_7_63_tsni, match_ls_arm_Cons_inst_44_11_12_13_15_tsni, match_ls_arm_Cons_inst_44_11_12_13_15_tsni1, match_ls_arm_Cons_inst_44_16_17_18_15_tsni, match_ls_arm_Cons_inst_44_16_17_18_15_tsni1, match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni1, match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni1, match_xs_arm_Nil_inst_45_4_5_6_7_63_tsni, match_t_arm_Branch_inst_45_65_tsni, match_xs_arm_Nil_inst_45_65_66_tsni, match_xs_arm_Nil_inst_46_48_5_6_7_63_tsni, match_xs_arm_Nil_inst_46_50_5_6_7_63_tsni, match_ls_arm_Cons_inst_46_51_15_tsni, match_ls_arm_Cons_inst_46_51_15_tsni1, match_xs_arm_Nil_inst_46_52_24_1_4_5_6_7_63_tsni, match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni1, match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni1, match_t_arm_Branch_inst_46_52_24_1_65_tsni, match_xs_arm_Nil_inst_46_52_24_1_65_66_tsni, match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni1, match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni1, match_xs_arm_Nil_inst_55_56_52_24_1_4_5_6_7_63_tsni, match_t_arm_Branch_inst_55_56_52_24_1_65_tsni, match_xs_arm_Nil_inst_55_56_52_24_1_65_66_tsni, match_param0_arm_default_inst_55_56_52_24_1_70_tsni, match_ls_arm_Cons_inst_55_56_51_15_tsni, match_ls_arm_Cons_inst_55_56_51_15_tsni1, match_xs_arm_Nil_inst_55_56_50_5_6_7_63_tsni, match_xs_arm_Nil_inst_55_56_48_5_6_7_63_tsni, match_xs_arm_Nil_inst_55_57_tsni, match_xs_arm_Nil_inst_58_59_56_48_5_6_7_63_tsni, match_xs_arm_Nil_inst_58_59_56_50_5_6_7_63_tsni, match_ls_arm_Cons_inst_58_59_56_51_15_tsni, match_ls_arm_Cons_inst_58_59_56_51_15_tsni1, match_xs_arm_Nil_inst_58_59_56_52_24_1_4_5_6_7_63_tsni, match_param0_arm_default_inst_58_59_56_52_24_1_70_tsni, match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni, match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni1, match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni, match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni1, match_t_arm_Branch_inst_58_59_56_52_24_1_65_tsni, match_xs_arm_Nil_inst_58_59_56_52_24_1_65_66_tsni, match_xs_arm_Nil_inst_58_59_57_tsni, match_ls_arm_Cons_inst_58_72_tsni;
match_xs_arm_Nil_inst_0_1_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_0_1_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_0_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_0_1_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_0_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_0_1_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni(_deforest_Cons_head_inst_0_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_0_1_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_0_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_0_1_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_0_1_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_0_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_0_1_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_0_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_0_1_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni(_deforest_Cons_head_inst_0_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_0_1_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_0_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_0_1_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_0_1_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_t_arm_Branch_inst_0_1_65_tsni = function match_t_arm_Branch_inst_0_1_65_tsni(f, _deforest_Branch_a_inst_0_1_65_tsni, _deforest_Branch_cs_inst_0_1_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_0_1_65_tsni;
  param1 = _deforest_Branch_cs_inst_0_1_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_0_1_65_tsni(f));
  tmp1 = map_inst_0_1_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_0_1_65_66_tsni = function match_xs_arm_Nil_inst_0_1_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_23_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_23_24_1_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_23_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_23_24_1_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni(_deforest_Cons_head_inst_23_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_23_24_1_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_23_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_23_24_1_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_23_24_1_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_23_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_23_24_1_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_23_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_23_24_1_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni(_deforest_Cons_head_inst_23_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_23_24_1_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_23_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_1_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_23_24_1_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_23_24_1_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_23_24_1_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_23_24_1_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_23_24_1_65_tsni = function match_t_arm_Branch_inst_23_24_1_65_tsni(f, _deforest_Branch_a_inst_23_24_1_65_tsni, _deforest_Branch_cs_inst_23_24_1_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_23_24_1_65_tsni;
  param1 = _deforest_Branch_cs_inst_23_24_1_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_23_24_1_65_tsni(f));
  tmp1 = map_inst_23_24_1_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_23_24_1_65_66_tsni = function match_xs_arm_Nil_inst_23_24_1_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_25_13_15_tsni = function match_ls_arm_Cons_inst_25_13_15_tsni(x, xs, _deforest_Cons_head_inst_25_13_15_tsni, _deforest_Cons_tail_inst_25_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_25_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_25_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_25_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_25_13_15_tsni1 = function match_ls_arm_Cons_inst_25_13_15_tsni(_deforest_Cons_head_inst_25_13_15_tsni, _deforest_Cons_tail_inst_25_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_25_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_25_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_25_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_25_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_25_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_25_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_25_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_26_12_13_15_tsni = function match_ls_arm_Cons_inst_26_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_26_12_13_15_tsni, _deforest_Cons_tail_inst_26_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_26_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_26_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_26_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_26_12_13_15_tsni1 = function match_ls_arm_Cons_inst_26_12_13_15_tsni(_deforest_Cons_head_inst_26_12_13_15_tsni, _deforest_Cons_tail_inst_26_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_26_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_26_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_26_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_26_12_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_27_18_15_tsni = function match_ls_arm_Cons_inst_27_18_15_tsni(x, xs, _deforest_Cons_head_inst_27_18_15_tsni, _deforest_Cons_tail_inst_27_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_27_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_27_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_27_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_27_18_15_tsni1 = function match_ls_arm_Cons_inst_27_18_15_tsni(_deforest_Cons_head_inst_27_18_15_tsni, _deforest_Cons_tail_inst_27_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_27_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_27_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_27_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_27_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_27_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_27_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_27_18_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_28_17_18_15_tsni = function match_ls_arm_Cons_inst_28_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_28_17_18_15_tsni, _deforest_Cons_tail_inst_28_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_28_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_28_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_28_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_28_17_18_15_tsni1 = function match_ls_arm_Cons_inst_28_17_18_15_tsni(_deforest_Cons_head_inst_28_17_18_15_tsni, _deforest_Cons_tail_inst_28_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_28_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_28_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_28_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_28_17_18_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_31_7_63_tsni = function match_xs_arm_Nil_inst_31_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_32_6_7_63_tsni = function match_xs_arm_Nil_inst_32_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_33_34_tsni = function match_ls_arm_Cons_inst_33_34_tsni(x, xs, _deforest_Cons_head_inst_33_34_tsni, _deforest_Cons_tail_inst_33_34_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_33_34_tsni;
  param1 = _deforest_Cons_tail_inst_33_34_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_33_34_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_35_tsni = function match_ls_arm_Cons_inst_35_tsni(x, xs, _deforest_Cons_head_inst_35_tsni, _deforest_Cons_tail_inst_35_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_35_tsni;
  param1 = _deforest_Cons_tail_inst_35_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_35_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_40_15_tsni = function match_ls_arm_Cons_inst_40_15_tsni(x, xs, _deforest_Cons_head_inst_40_15_tsni, _deforest_Cons_tail_inst_40_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_40_15_tsni;
  param1 = _deforest_Cons_tail_inst_40_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_40_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_40_15_tsni1 = function match_ls_arm_Cons_inst_40_15_tsni(_deforest_Cons_head_inst_40_15_tsni, _deforest_Cons_tail_inst_40_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_40_15_tsni;
  param1 = _deforest_Cons_tail_inst_40_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_40_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_40_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_40_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_40_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_40_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_41_63_tsni = function match_xs_arm_Nil_inst_41_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_42_5_6_7_63_tsni = function match_xs_arm_Nil_inst_42_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_44_11_12_13_15_tsni = function match_ls_arm_Cons_inst_44_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_44_11_12_13_15_tsni, _deforest_Cons_tail_inst_44_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_44_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_44_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_44_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_44_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_44_11_12_13_15_tsni(_deforest_Cons_head_inst_44_11_12_13_15_tsni, _deforest_Cons_tail_inst_44_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_44_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_44_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_44_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_44_11_12_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_44_16_17_18_15_tsni = function match_ls_arm_Cons_inst_44_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_44_16_17_18_15_tsni, _deforest_Cons_tail_inst_44_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_44_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_44_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_44_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_44_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_44_16_17_18_15_tsni(_deforest_Cons_head_inst_44_16_17_18_15_tsni, _deforest_Cons_tail_inst_44_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_44_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_44_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_44_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_44_16_17_18_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_45_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_45_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_45_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_45_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_45_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni(_deforest_Cons_head_inst_45_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_45_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_45_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_45_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_45_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_45_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_45_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_45_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_45_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_45_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_45_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni(_deforest_Cons_head_inst_45_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_45_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_45_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_45_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_45_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_45_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_45_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_45_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_45_65_tsni = function match_t_arm_Branch_inst_45_65_tsni(f, _deforest_Branch_a_inst_45_65_tsni, _deforest_Branch_cs_inst_45_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_45_65_tsni;
  param1 = _deforest_Branch_cs_inst_45_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_45_65_tsni(f));
  tmp1 = map_inst_45_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_45_65_66_tsni = function match_xs_arm_Nil_inst_45_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_46_48_5_6_7_63_tsni = function match_xs_arm_Nil_inst_46_48_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_46_50_5_6_7_63_tsni = function match_xs_arm_Nil_inst_46_50_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_46_51_15_tsni = function match_ls_arm_Cons_inst_46_51_15_tsni(x, xs, _deforest_Cons_head_inst_46_51_15_tsni, _deforest_Cons_tail_inst_46_51_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_46_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_51_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_46_51_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_46_51_15_tsni1 = function match_ls_arm_Cons_inst_46_51_15_tsni(_deforest_Cons_head_inst_46_51_15_tsni, _deforest_Cons_tail_inst_46_51_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_46_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_51_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_46_51_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_51_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_51_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_51_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_46_51_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_46_52_24_1_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_46_52_24_1_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_46_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_46_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_46_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_52_24_1_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_46_52_24_1_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni(_deforest_Cons_head_inst_46_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_46_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_46_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_52_24_1_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_46_52_24_1_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_46_52_24_1_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_46_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_46_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_46_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_52_24_1_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_46_52_24_1_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni(_deforest_Cons_head_inst_46_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_46_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_46_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_46_52_24_1_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_46_52_24_1_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_46_52_24_1_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_t_arm_Branch_inst_46_52_24_1_65_tsni = function match_t_arm_Branch_inst_46_52_24_1_65_tsni(f, _deforest_Branch_a_inst_46_52_24_1_65_tsni, _deforest_Branch_cs_inst_46_52_24_1_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_46_52_24_1_65_tsni;
  param1 = _deforest_Branch_cs_inst_46_52_24_1_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_46_52_24_1_65_tsni(f));
  tmp1 = map_inst_46_52_24_1_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_46_52_24_1_65_66_tsni = function match_xs_arm_Nil_inst_46_52_24_1_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_55_56_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_55_56_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_55_56_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_52_24_1_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_55_56_52_24_1_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni(_deforest_Cons_head_inst_55_56_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_55_56_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_55_56_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_52_24_1_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_55_56_52_24_1_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_55_56_52_24_1_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_55_56_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_55_56_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_55_56_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_52_24_1_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_55_56_52_24_1_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni(_deforest_Cons_head_inst_55_56_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_55_56_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_55_56_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_52_24_1_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_55_56_52_24_1_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_55_56_52_24_1_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_55_56_52_24_1_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_55_56_52_24_1_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_55_56_52_24_1_65_tsni = function match_t_arm_Branch_inst_55_56_52_24_1_65_tsni(f, _deforest_Branch_a_inst_55_56_52_24_1_65_tsni, _deforest_Branch_cs_inst_55_56_52_24_1_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_55_56_52_24_1_65_tsni;
  param1 = _deforest_Branch_cs_inst_55_56_52_24_1_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_55_56_52_24_1_65_tsni(f));
  tmp1 = map_inst_55_56_52_24_1_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_55_56_52_24_1_65_66_tsni = function match_xs_arm_Nil_inst_55_56_52_24_1_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_param0_arm_default_inst_55_56_52_24_1_70_tsni = function match_param0_arm_default_inst_55_56_52_24_1_70_tsni(param0, param1) {
  let x, l;
  x = param0;
  l = param1;
  return minimax.Branch(x, NofibPrelude.Nil)
};
match_ls_arm_Cons_inst_55_56_51_15_tsni = function match_ls_arm_Cons_inst_55_56_51_15_tsni(x, xs, _deforest_Cons_head_inst_55_56_51_15_tsni, _deforest_Cons_tail_inst_55_56_51_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_55_56_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_51_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_55_56_51_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_55_56_51_15_tsni1 = function match_ls_arm_Cons_inst_55_56_51_15_tsni(_deforest_Cons_head_inst_55_56_51_15_tsni, _deforest_Cons_tail_inst_55_56_51_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_55_56_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_55_56_51_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_55_56_51_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_55_56_51_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_55_56_50_5_6_7_63_tsni = function match_xs_arm_Nil_inst_55_56_50_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_55_56_48_5_6_7_63_tsni = function match_xs_arm_Nil_inst_55_56_48_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_55_57_tsni = function match_xs_arm_Nil_inst_55_57_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_xs_arm_Nil_inst_58_59_56_48_5_6_7_63_tsni = function match_xs_arm_Nil_inst_58_59_56_48_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_58_59_56_50_5_6_7_63_tsni = function match_xs_arm_Nil_inst_58_59_56_50_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_58_59_56_51_15_tsni = function match_ls_arm_Cons_inst_58_59_56_51_15_tsni(x, xs, _deforest_Cons_head_inst_58_59_56_51_15_tsni, _deforest_Cons_tail_inst_58_59_56_51_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_58_59_56_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_51_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_58_59_56_51_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_58_59_56_51_15_tsni1 = function match_ls_arm_Cons_inst_58_59_56_51_15_tsni(_deforest_Cons_head_inst_58_59_56_51_15_tsni, _deforest_Cons_tail_inst_58_59_56_51_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_58_59_56_51_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_51_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_58_59_56_51_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_58_59_56_51_15_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_58_59_56_52_24_1_4_5_6_7_63_tsni = function match_xs_arm_Nil_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(f) {
  return NofibPrelude.Nil
};
match_param0_arm_default_inst_58_59_56_52_24_1_70_tsni = function match_param0_arm_default_inst_58_59_56_52_24_1_70_tsni(param0, param1) {
  let x, l;
  x = param0;
  l = param1;
  return minimax.Branch(x, NofibPrelude.Nil)
};
match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni = function match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x, xs, _deforest_Cons_head_inst_58_59_56_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_58_59_56_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_58_59_56_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_52_24_1_10_11_12_13_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni1 = function match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(_deforest_Cons_head_inst_58_59_56_52_24_1_10_11_12_13_15_tsni, _deforest_Cons_tail_inst_58_59_56_52_24_1_10_11_12_13_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_58_59_56_52_24_1_10_11_12_13_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_52_24_1_10_11_12_13_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni = function match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x, xs, _deforest_Cons_head_inst_58_59_56_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_58_59_56_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_58_59_56_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_52_24_1_10_16_17_18_15_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni1 = function match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(_deforest_Cons_head_inst_58_59_56_52_24_1_10_16_17_18_15_tsni, _deforest_Cons_tail_inst_58_59_56_52_24_1_10_16_17_18_15_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_58_59_56_52_24_1_10_16_17_18_15_tsni;
  param1 = _deforest_Cons_tail_inst_58_59_56_52_24_1_10_16_17_18_15_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x, xs, tmp2)
};
match_t_arm_Branch_inst_58_59_56_52_24_1_65_tsni = function match_t_arm_Branch_inst_58_59_56_52_24_1_65_tsni(f, _deforest_Branch_a_inst_58_59_56_52_24_1_65_tsni, _deforest_Branch_cs_inst_58_59_56_52_24_1_65_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_58_59_56_52_24_1_65_tsni;
  param1 = _deforest_Branch_cs_inst_58_59_56_52_24_1_65_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_24_1_65_tsni(f));
  tmp1 = map_inst_58_59_56_52_24_1_65_66_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_58_59_56_52_24_1_65_66_tsni = function match_xs_arm_Nil_inst_58_59_56_52_24_1_65_66_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_58_59_57_tsni = function match_xs_arm_Nil_inst_58_59_57_tsni(f) {
  return () => {
    return () => {
      return ""
    }
  }
};
match_ls_arm_Cons_inst_58_72_tsni = function match_ls_arm_Cons_inst_58_72_tsni(_deforest_Cons_head_inst_58_72_tsni, _deforest_Cons_tail_inst_58_72_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_58_72_tsni;
  param1 = _deforest_Cons_tail_inst_58_72_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_58_72_tsni(t);
  return h + tmp
};
bestMove_inst_0_1_tsni = function bestMove_inst_0_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_0_1_10_tsni(p, b);
  tmp1 = mapTree_inst_0_1_65_tsni(static_inst_0_1_4_tsni, tmp);
  tmp2 = minimax.cropTree(tmp1);
  return mise_inst_0_1_2_tsni(f, g, tmp2)
};
mise_inst_0_1_2_tsni = function mise_inst_0_1_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_0_1_2_tsni(f, g));
      tmp1 = map_inst_0_1_2_3_tsni(lambda$this, l);
      return foldr_inst_0_1_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_0_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_0_1_2_tsni(f, g, x)
  }
});
lambda$_inst_0_1_2_tsni = function lambda$_inst_0_1_2_tsni(f, g, x) {
  return mise_inst_0_1_2_tsni(g, f, x)
};
map_inst_0_1_2_3_tsni = function map_inst_0_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_0_1_2_62_tsni(f1, z, t);
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
static_inst_0_1_4_tsni = function static_inst_0_1_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_0_1_4_5_tsni(board1));
  tmp = map_inst_0_1_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_0_1_4_49_tsni(0, tmp)
};
lambda_inst_0_1_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_0_1_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_0_1_4_5_6_tsni = function lambda$_inst_0_1_4_5_6_tsni(board1, x) {
  return score_inst_0_1_4_5_6_7_tsni(board1, x)
};
score_inst_0_1_4_5_6_7_tsni = function score_inst_0_1_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_0_1_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_0_1_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_0_1_4_5_6_7_8_tsni = function map2_inst_0_1_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_0_1_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_0_1_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_0_1_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_0_1_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_0_1_4_9_tsni = function map_inst_0_1_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_0_1_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
searchTree_inst_0_1_10_tsni = function searchTree_inst_0_1_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_0_1_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_0_1_10_16_tsni(p));
  tmp = repTree_inst_0_1_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_0_1_10_21_tsni(5, tmp)
};
lambda_inst_0_1_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_0_1_10_11_12_tsni(p, x)
  }
});
lambda$_inst_0_1_10_11_12_tsni = function lambda$_inst_0_1_10_11_12_tsni(p, x) {
  return newPositions_inst_0_1_10_11_12_13_tsni(p, x)
};
newPositions_inst_0_1_10_11_12_13_tsni = function newPositions_inst_0_1_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_0_1_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_0_1_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_0_1_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_0_1_10_11_12_13_64_tsni(tmp4)
};
map_inst_0_1_10_11_12_13_14_tsni = function map_inst_0_1_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_10_11_12_13_64_tsni(xs2);
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
lscomp1_inst_0_1_10_11_12_13_15_tsni = function lscomp1_inst_0_1_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_0_1_10_11_12_13_15_tsni = function lscomp2$_inst_0_1_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_0_1_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_0_1_10_16_17_tsni(p, x)
  }
});
lambda$_inst_0_1_10_16_17_tsni = function lambda$_inst_0_1_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_0_1_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_0_1_10_16_17_18_tsni = function newPositions_inst_0_1_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_0_1_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_0_1_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_0_1_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_0_1_10_16_17_18_64_tsni(tmp4)
};
map_inst_0_1_10_16_17_18_14_tsni = function map_inst_0_1_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_10_16_17_18_64_tsni(xs2);
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
lscomp1_inst_0_1_10_16_17_18_15_tsni = function lscomp1_inst_0_1_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_0_1_10_16_17_18_15_tsni = function lscomp2$_inst_0_1_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
repTree_inst_0_1_10_19_tsni = function repTree_inst_0_1_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_0_1_10_19_tsni(f, g));
  tmp1 = map_inst_0_1_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_0_1_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_0_1_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_0_1_10_21_tsni(n));
        tmp2 = map_inst_0_1_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_0_1_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_0_1_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_0_1_10_19_tsni(f, g, x)
  }
});
lambda$_inst_0_1_10_19_tsni = function lambda$_inst_0_1_10_19_tsni(f, g, x) {
  return repTree_inst_0_1_10_19_tsni(g, f, x)
};
map_inst_0_1_10_19_20_tsni = function map_inst_0_1_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_0_1_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_0_1_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_0_1_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_0_1_10_21_tsni = function prune_inst_0_1_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_0_1_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_0_1_10_21_tsni(n, x)
  }
});
lambda$_inst_0_1_10_21_tsni = function lambda$_inst_0_1_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_0_1_10_21_tsni(tmp, x)
};
map_inst_0_1_10_21_22_tsni = function map_inst_0_1_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda$_inst_23_24_tsni = function lambda$_inst_23_24_tsni(f, g, opposition, x) {
  return bestMove_inst_23_24_1_tsni(opposition, g, f, x)
};
bestMove_inst_23_24_1_tsni = function bestMove_inst_23_24_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_23_24_1_10_tsni(p, b);
  tmp1 = mapTree_inst_23_24_1_65_tsni(static_inst_23_24_1_4_tsni, tmp);
  tmp2 = minimax.cropTree(tmp1);
  return mise_inst_23_24_1_2_tsni(f, g, tmp2)
};
searchTree_inst_23_24_1_10_tsni = function searchTree_inst_23_24_1_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_23_24_1_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_23_24_1_10_16_tsni(p));
  tmp = repTree_inst_23_24_1_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_23_24_1_10_21_tsni(5, tmp)
};
repTree_inst_23_24_1_10_19_tsni = function repTree_inst_23_24_1_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_23_24_1_10_19_tsni(f, g));
  tmp1 = map_inst_23_24_1_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a1 = a1;
      _deforest_Branch_cs1 = (f1) => {
        return match_xs_arm_Nil_inst_23_24_1_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_23_24_1_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_23_24_1_10_21_tsni(n));
        tmp2 = map_inst_23_24_1_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_23_24_1_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_23_24_1_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_23_24_1_10_19_tsni(f, g, x)
  }
});
lambda$_inst_23_24_1_10_19_tsni = function lambda$_inst_23_24_1_10_19_tsni(f, g, x) {
  return repTree_inst_23_24_1_10_19_tsni(g, f, x)
};
map_inst_23_24_1_10_19_20_tsni = function map_inst_23_24_1_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_23_24_1_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_23_24_1_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_23_24_1_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_23_24_1_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_23_24_1_10_16_17_tsni(p, x)
  }
});
lambda$_inst_23_24_1_10_16_17_tsni = function lambda$_inst_23_24_1_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_23_24_1_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_23_24_1_10_16_17_18_tsni = function newPositions_inst_23_24_1_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_23_24_1_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_23_24_1_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_23_24_1_10_16_17_18_64_tsni(tmp4)
};
lscomp1_inst_23_24_1_10_16_17_18_15_tsni = function lscomp1_inst_23_24_1_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_23_24_1_10_16_17_18_15_tsni = function lscomp2$_inst_23_24_1_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_23_24_1_10_16_17_18_14_tsni = function map_inst_23_24_1_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_23_24_1_10_16_17_18_64_tsni(xs2);
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
lambda_inst_23_24_1_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_23_24_1_10_11_12_tsni(p, x)
  }
});
lambda$_inst_23_24_1_10_11_12_tsni = function lambda$_inst_23_24_1_10_11_12_tsni(p, x) {
  return newPositions_inst_23_24_1_10_11_12_13_tsni(p, x)
};
newPositions_inst_23_24_1_10_11_12_13_tsni = function newPositions_inst_23_24_1_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_23_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_23_24_1_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_23_24_1_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_23_24_1_10_11_12_13_64_tsni(tmp4)
};
lscomp1_inst_23_24_1_10_11_12_13_15_tsni = function lscomp1_inst_23_24_1_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_23_24_1_10_11_12_13_15_tsni = function lscomp2$_inst_23_24_1_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_23_24_1_10_11_12_13_14_tsni = function map_inst_23_24_1_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_23_24_1_10_11_12_13_64_tsni(xs2);
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
static_inst_23_24_1_4_tsni = function static_inst_23_24_1_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_23_24_1_4_5_tsni(board1));
  tmp = map_inst_23_24_1_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_23_24_1_4_49_tsni(0, tmp)
};
map_inst_23_24_1_4_9_tsni = function map_inst_23_24_1_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_23_24_1_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_23_24_1_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_23_24_1_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_23_24_1_4_5_6_tsni = function lambda$_inst_23_24_1_4_5_6_tsni(board1, x) {
  return score_inst_23_24_1_4_5_6_7_tsni(board1, x)
};
score_inst_23_24_1_4_5_6_7_tsni = function score_inst_23_24_1_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_23_24_1_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_23_24_1_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_23_24_1_4_5_6_7_8_tsni = function map2_inst_23_24_1_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_23_24_1_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_23_24_1_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_23_24_1_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_23_24_1_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_23_24_1_10_21_tsni = function prune_inst_23_24_1_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_23_24_1_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_23_24_1_10_21_tsni(n, x)
  }
});
lambda$_inst_23_24_1_10_21_tsni = function lambda$_inst_23_24_1_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_23_24_1_10_21_tsni(tmp, x)
};
map_inst_23_24_1_10_21_22_tsni = function map_inst_23_24_1_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_23_24_1_2_tsni = function mise_inst_23_24_1_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_23_24_1_2_tsni(f, g));
      tmp1 = map_inst_23_24_1_2_3_tsni(lambda$this, l);
      return foldr_inst_23_24_1_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_23_24_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_23_24_1_2_tsni(f, g, x)
  }
});
lambda$_inst_23_24_1_2_tsni = function lambda$_inst_23_24_1_2_tsni(f, g, x) {
  return mise_inst_23_24_1_2_tsni(g, f, x)
};
map_inst_23_24_1_2_3_tsni = function map_inst_23_24_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_23_24_1_2_62_tsni(f1, z, t);
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
newPositions_inst_25_13_tsni = function newPositions_inst_25_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_25_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_25_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_25_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_25_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_25_13_14_tsni(lambda$this, tmp3);
  return concat_inst_25_13_64_tsni(tmp4)
};
map_inst_25_13_14_tsni = function map_inst_25_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_25_13_64_tsni(xs2);
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
lscomp1_inst_25_13_15_tsni = function lscomp1_inst_25_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_25_13_15_tsni = function lscomp2$_inst_25_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda$_inst_26_12_tsni = function lambda$_inst_26_12_tsni(p, x) {
  return newPositions_inst_26_12_13_tsni(p, x)
};
newPositions_inst_26_12_13_tsni = function newPositions_inst_26_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_26_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_26_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_26_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_26_12_13_64_tsni(tmp4)
};
lscomp1_inst_26_12_13_15_tsni = function lscomp1_inst_26_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_26_12_13_15_tsni = function lscomp2$_inst_26_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_26_12_13_14_tsni = function map_inst_26_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_26_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_26_12_13_64_tsni(xs2);
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
newPositions_inst_27_18_tsni = function newPositions_inst_27_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_27_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_27_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_27_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_27_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_27_18_14_tsni(lambda$this, tmp3);
  return concat_inst_27_18_64_tsni(tmp4)
};
map_inst_27_18_14_tsni = function map_inst_27_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_27_18_64_tsni(xs2);
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
lscomp1_inst_27_18_15_tsni = function lscomp1_inst_27_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_27_18_15_tsni = function lscomp2$_inst_27_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda$_inst_28_17_tsni = function lambda$_inst_28_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_28_17_18_tsni(tmp, x)
};
newPositions_inst_28_17_18_tsni = function newPositions_inst_28_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_28_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_28_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_28_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_28_17_18_64_tsni(tmp4)
};
lscomp1_inst_28_17_18_15_tsni = function lscomp1_inst_28_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_28_17_18_15_tsni = function lscomp2$_inst_28_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_28_17_18_14_tsni = function map_inst_28_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_28_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_28_17_18_64_tsni(xs2);
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
mise_inst_29_tsni = function mise_inst_29_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_29_tsni(f, g));
      tmp1 = map_inst_29_3_tsni(lambda$this, l);
      return foldr_inst_29_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_29_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$5(f, g, x)
  }
});
map_inst_29_3_tsni = function map_inst_29_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_29_62_tsni(f1, z, t);
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
mise_inst_30_tsni = function mise_inst_30_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda7(f, g));
      tmp1 = map_inst_30_3_tsni(lambda$this, l);
      return foldr_inst_30_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_30_tsni = function lambda$_inst_30_tsni(f, g, x) {
  return mise_inst_30_tsni(g, f, x)
};
map_inst_30_3_tsni = function map_inst_30_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_30_62_tsni(f1, z, t);
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
score_inst_31_7_tsni = function score_inst_31_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_31_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_31_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_31_7_8_tsni = function map2_inst_31_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_31_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_31_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_31_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_31_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_32_6_tsni = function lambda$_inst_32_6_tsni(board1, x) {
  return score_inst_32_6_7_tsni(board1, x)
};
score_inst_32_6_7_tsni = function score_inst_32_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_32_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_32_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_32_6_7_8_tsni = function map2_inst_32_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_32_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_32_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_32_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_32_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1_inst_33_34_tsni = function lscomp1_inst_33_34_tsni(ls) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    _deforest_Cons_head2 = 3;
    _deforest_Cons_tail2 = (x1, xs1) => {
      return lscomp1_inst_33_34_tsni(xs1)
    };
    tmp = (x1, xs1) => {
      return match_ls_arm_Cons_inst_33_34_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 2;
    _deforest_Cons_tail1 = tmp;
    tmp1 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_33_34_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 1;
    _deforest_Cons_tail = tmp1;
    tmp2 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_33_34_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return lscomp2$_inst_33_34_tsni(x, xs, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_33_34_tsni = function lscomp2$_inst_33_34_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lscomp2$_inst_35_tsni = function lscomp2$_inst_35_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_36_37_tsni = function concat_inst_36_37_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_36_37_tsni(xs);
    return append_inst_36_37_38_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_36_37_38_tsni = function append_inst_36_37_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_36_37_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_36_39_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_36_67_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_36_39_tsni = function map_inst_36_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp1_inst_40_15_tsni = function lscomp1_inst_40_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_40_15_tsni = function lscomp2$_inst_40_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_40_14_tsni = function map_inst_40_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_40_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_40_64_tsni(xs2);
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
map2_inst_41_8_tsni = function map2_inst_41_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_41_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_41_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_41_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_41_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_42_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_42_5_6_tsni(board1, x)
  }
});
lambda$_inst_42_5_6_tsni = function lambda$_inst_42_5_6_tsni(board1, x) {
  return score_inst_42_5_6_7_tsni(board1, x)
};
score_inst_42_5_6_7_tsni = function score_inst_42_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_42_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_42_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_42_5_6_7_8_tsni = function map2_inst_42_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_42_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_42_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_42_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_42_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_42_9_tsni = function map_inst_42_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_42_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_42_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_43_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_43_tsni(f, g, x)
  }
});
lambda$_inst_43_tsni = function lambda$_inst_43_tsni(f, g, x) {
  return minimax1.mise(g, f, x)
};
map_inst_43_3_tsni = function map_inst_43_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_43_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_43_62_tsni(f1, z, t);
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
lambda_inst_44_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_44_11_12_tsni(p, x)
  }
});
lambda$_inst_44_11_12_tsni = function lambda$_inst_44_11_12_tsni(p, x) {
  return newPositions_inst_44_11_12_13_tsni(p, x)
};
newPositions_inst_44_11_12_13_tsni = function newPositions_inst_44_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_44_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_44_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_44_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_44_11_12_13_64_tsni(tmp4)
};
map_inst_44_11_12_13_14_tsni = function map_inst_44_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_44_11_12_13_64_tsni(xs2);
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
lscomp1_inst_44_11_12_13_15_tsni = function lscomp1_inst_44_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_44_11_12_13_15_tsni = function lscomp2$_inst_44_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_44_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_44_16_17_tsni(p, x)
  }
});
lambda$_inst_44_16_17_tsni = function lambda$_inst_44_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_44_16_17_18_tsni(tmp, x)
};
newPositions_inst_44_16_17_18_tsni = function newPositions_inst_44_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_44_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_44_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_44_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_44_16_17_18_64_tsni(tmp4)
};
map_inst_44_16_17_18_14_tsni = function map_inst_44_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_44_16_17_18_64_tsni(xs2);
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
lscomp1_inst_44_16_17_18_15_tsni = function lscomp1_inst_44_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_44_16_17_18_15_tsni = function lscomp2$_inst_44_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
repTree_inst_44_19_tsni = function repTree_inst_44_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_44_19_tsni(f, g));
  tmp1 = map_inst_44_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      return minimax.Branch(a1, NofibPrelude.Nil)
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_44_21_tsni(n));
        tmp2 = map_inst_44_21_22_tsni(lambda$this1, l);
        return minimax.Branch(a1, tmp2)
      }
    }
  }
};
lambda_inst_44_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_44_19_tsni(f, g, x)
  }
});
lambda$_inst_44_19_tsni = function lambda$_inst_44_19_tsni(f, g, x) {
  return repTree_inst_44_19_tsni(g, f, x)
};
map_inst_44_19_20_tsni = function map_inst_44_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_44_21_22_tsni(f1, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
searchTree_inst_45_10_tsni = function searchTree_inst_45_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_45_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_45_10_16_tsni(p));
  tmp = repTree_inst_45_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_45_10_21_tsni(5, tmp)
};
repTree_inst_45_10_19_tsni = function repTree_inst_45_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_45_10_19_tsni(f, g));
  tmp1 = map_inst_45_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a1 = a1;
      _deforest_Branch_cs1 = (f1) => {
        return match_xs_arm_Nil_inst_45_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_45_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_45_10_21_tsni(n));
        tmp2 = map_inst_45_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_45_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_45_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_45_10_19_tsni(f, g, x)
  }
});
lambda$_inst_45_10_19_tsni = function lambda$_inst_45_10_19_tsni(f, g, x) {
  return repTree_inst_45_10_19_tsni(g, f, x)
};
map_inst_45_10_19_20_tsni = function map_inst_45_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_45_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_45_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_45_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_45_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_45_10_16_17_tsni(p, x)
  }
});
lambda$_inst_45_10_16_17_tsni = function lambda$_inst_45_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_45_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_45_10_16_17_18_tsni = function newPositions_inst_45_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_45_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_45_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_45_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_45_10_16_17_18_64_tsni(tmp4)
};
lscomp1_inst_45_10_16_17_18_15_tsni = function lscomp1_inst_45_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_45_10_16_17_18_15_tsni = function lscomp2$_inst_45_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_45_10_16_17_18_14_tsni = function map_inst_45_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_45_10_16_17_18_64_tsni(xs2);
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
lambda_inst_45_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_45_10_11_12_tsni(p, x)
  }
});
lambda$_inst_45_10_11_12_tsni = function lambda$_inst_45_10_11_12_tsni(p, x) {
  return newPositions_inst_45_10_11_12_13_tsni(p, x)
};
newPositions_inst_45_10_11_12_13_tsni = function newPositions_inst_45_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_45_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_45_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_45_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_45_10_11_12_13_64_tsni(tmp4)
};
lscomp1_inst_45_10_11_12_13_15_tsni = function lscomp1_inst_45_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_45_10_11_12_13_15_tsni = function lscomp2$_inst_45_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_45_10_11_12_13_14_tsni = function map_inst_45_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_45_10_11_12_13_64_tsni(xs2);
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
static_inst_45_4_tsni = function static_inst_45_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_45_4_5_tsni(board1));
  tmp = map_inst_45_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_45_4_49_tsni(0, tmp)
};
map_inst_45_4_9_tsni = function map_inst_45_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_45_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_45_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_45_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_45_4_5_6_tsni = function lambda$_inst_45_4_5_6_tsni(board1, x) {
  return score_inst_45_4_5_6_7_tsni(board1, x)
};
score_inst_45_4_5_6_7_tsni = function score_inst_45_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_45_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_45_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_45_4_5_6_7_8_tsni = function map2_inst_45_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_45_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_45_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_45_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_45_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_45_10_21_tsni = function prune_inst_45_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_45_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_45_10_21_tsni(n, x)
  }
});
lambda$_inst_45_10_21_tsni = function lambda$_inst_45_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_45_10_21_tsni(tmp, x)
};
map_inst_45_10_21_22_tsni = function map_inst_45_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_45_2_tsni = function mise_inst_45_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_45_2_tsni(f, g));
      tmp1 = map_inst_45_2_3_tsni(lambda$this, l);
      return foldr_inst_45_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_45_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_45_2_tsni(f, g, x)
  }
});
lambda$_inst_45_2_tsni = function lambda$_inst_45_2_tsni(f, g, x) {
  return mise_inst_45_2_tsni(g, f, x)
};
map_inst_45_2_3_tsni = function map_inst_45_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_45_2_62_tsni(f1, z, t);
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
fullBoard_inst_46_47_tsni = function fullBoard_inst_46_47_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_46_47_37_tsni(b);
  tmp1 = map_inst_46_47_39_tsni(lambda, tmp);
  return andd_inst_46_47_67_tsni(tmp1)
};
map_inst_46_47_39_tsni = function map_inst_46_47_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_46_47_37_tsni = function concat_inst_46_47_37_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_46_47_37_tsni(xs);
    return append_inst_46_47_37_38_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_46_47_37_38_tsni = function append_inst_46_47_37_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_46_47_37_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_46_47_39_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_46_47_67_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_46_48_tsni = function static_inst_46_48_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_46_48_5_tsni(board1));
  tmp = map_inst_46_48_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_46_48_49_tsni(0, tmp)
};
map_inst_46_48_9_tsni = function map_inst_46_48_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_48_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_46_48_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_46_48_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_46_48_5_6_tsni(board1, x)
  }
});
lambda$_inst_46_48_5_6_tsni = function lambda$_inst_46_48_5_6_tsni(board1, x) {
  return score_inst_46_48_5_6_7_tsni(board1, x)
};
score_inst_46_48_5_6_7_tsni = function score_inst_46_48_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_46_48_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_46_48_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_46_48_5_6_7_8_tsni = function map2_inst_46_48_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_46_48_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_46_48_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_46_48_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_46_48_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_46_48_49_tsni = function interpret_inst_46_48_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_46_50_tsni = function static_inst_46_50_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_46_50_5_tsni(board1));
  tmp = map_inst_46_50_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_46_50_49_tsni(0, tmp)
};
map_inst_46_50_9_tsni = function map_inst_46_50_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_50_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_46_50_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_46_50_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_46_50_5_6_tsni(board1, x)
  }
});
lambda$_inst_46_50_5_6_tsni = function lambda$_inst_46_50_5_6_tsni(board1, x) {
  return score_inst_46_50_5_6_7_tsni(board1, x)
};
score_inst_46_50_5_6_7_tsni = function score_inst_46_50_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_46_50_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_46_50_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_46_50_5_6_7_8_tsni = function map2_inst_46_50_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_46_50_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_46_50_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_46_50_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_46_50_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_46_50_49_tsni = function interpret_inst_46_50_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_46_51_tsni = function newPositions_inst_46_51_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_46_51_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_46_51_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_46_51_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_46_51_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_46_51_14_tsni(lambda$this, tmp3);
  return concat_inst_46_51_64_tsni(tmp4)
};
map_inst_46_51_14_tsni = function map_inst_46_51_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_51_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_46_51_64_tsni(xs2);
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
lscomp1_inst_46_51_15_tsni = function lscomp1_inst_46_51_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_46_51_15_tsni = function lscomp2$_inst_46_51_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_46_52_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_46_52_24_tsni(f, g, opposition, x)
  }
});
lambda$_inst_46_52_24_tsni = function lambda$_inst_46_52_24_tsni(f, g, opposition, x) {
  return bestMove_inst_46_52_24_1_tsni(opposition, g, f, x)
};
bestMove_inst_46_52_24_1_tsni = function bestMove_inst_46_52_24_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_46_52_24_1_10_tsni(p, b);
  tmp1 = mapTree_inst_46_52_24_1_65_tsni(static_inst_46_52_24_1_4_tsni, tmp);
  tmp2 = minimax.cropTree(tmp1);
  return mise_inst_46_52_24_1_2_tsni(f, g, tmp2)
};
mise_inst_46_52_24_1_2_tsni = function mise_inst_46_52_24_1_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_46_52_24_1_2_tsni(f, g));
      tmp1 = map_inst_46_52_24_1_2_3_tsni(lambda$this, l);
      return foldr_inst_46_52_24_1_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_46_52_24_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_46_52_24_1_2_tsni(f, g, x)
  }
});
lambda$_inst_46_52_24_1_2_tsni = function lambda$_inst_46_52_24_1_2_tsni(f, g, x) {
  return mise_inst_46_52_24_1_2_tsni(g, f, x)
};
map_inst_46_52_24_1_2_3_tsni = function map_inst_46_52_24_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_52_24_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_46_52_24_1_2_62_tsni(f1, z, t);
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
static_inst_46_52_24_1_4_tsni = function static_inst_46_52_24_1_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_46_52_24_1_4_5_tsni(board1));
  tmp = map_inst_46_52_24_1_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_46_52_24_1_4_49_tsni(0, tmp)
};
lambda_inst_46_52_24_1_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_46_52_24_1_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_46_52_24_1_4_5_6_tsni = function lambda$_inst_46_52_24_1_4_5_6_tsni(board1, x) {
  return score_inst_46_52_24_1_4_5_6_7_tsni(board1, x)
};
score_inst_46_52_24_1_4_5_6_7_tsni = function score_inst_46_52_24_1_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_46_52_24_1_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_46_52_24_1_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_46_52_24_1_4_5_6_7_8_tsni = function map2_inst_46_52_24_1_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_46_52_24_1_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_46_52_24_1_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_46_52_24_1_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_46_52_24_1_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_46_52_24_1_4_9_tsni = function map_inst_46_52_24_1_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_52_24_1_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_46_52_24_1_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param01 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
searchTree_inst_46_52_24_1_10_tsni = function searchTree_inst_46_52_24_1_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_46_52_24_1_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_46_52_24_1_10_16_tsni(p));
  tmp = repTree_inst_46_52_24_1_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_46_52_24_1_10_21_tsni(5, tmp)
};
lambda_inst_46_52_24_1_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_46_52_24_1_10_11_12_tsni(p, x)
  }
});
lambda$_inst_46_52_24_1_10_11_12_tsni = function lambda$_inst_46_52_24_1_10_11_12_tsni(p, x) {
  return newPositions_inst_46_52_24_1_10_11_12_13_tsni(p, x)
};
newPositions_inst_46_52_24_1_10_11_12_13_tsni = function newPositions_inst_46_52_24_1_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_46_52_24_1_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_46_52_24_1_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_46_52_24_1_10_11_12_13_64_tsni(tmp4)
};
map_inst_46_52_24_1_10_11_12_13_14_tsni = function map_inst_46_52_24_1_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_52_24_1_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_46_52_24_1_10_11_12_13_64_tsni(xs2);
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
lscomp1_inst_46_52_24_1_10_11_12_13_15_tsni = function lscomp1_inst_46_52_24_1_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_46_52_24_1_10_11_12_13_15_tsni = function lscomp2$_inst_46_52_24_1_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_46_52_24_1_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_46_52_24_1_10_16_17_tsni(p, x)
  }
});
lambda$_inst_46_52_24_1_10_16_17_tsni = function lambda$_inst_46_52_24_1_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_46_52_24_1_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_46_52_24_1_10_16_17_18_tsni = function newPositions_inst_46_52_24_1_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_46_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_46_52_24_1_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_46_52_24_1_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_46_52_24_1_10_16_17_18_64_tsni(tmp4)
};
map_inst_46_52_24_1_10_16_17_18_14_tsni = function map_inst_46_52_24_1_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_52_24_1_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_46_52_24_1_10_16_17_18_64_tsni(xs2);
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
lscomp1_inst_46_52_24_1_10_16_17_18_15_tsni = function lscomp1_inst_46_52_24_1_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_46_52_24_1_10_16_17_18_15_tsni = function lscomp2$_inst_46_52_24_1_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
repTree_inst_46_52_24_1_10_19_tsni = function repTree_inst_46_52_24_1_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_46_52_24_1_10_19_tsni(f, g));
  tmp1 = map_inst_46_52_24_1_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_46_52_24_1_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_46_52_24_1_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_46_52_24_1_10_21_tsni(n));
        tmp2 = map_inst_46_52_24_1_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_46_52_24_1_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_46_52_24_1_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_46_52_24_1_10_19_tsni(f, g, x)
  }
});
lambda$_inst_46_52_24_1_10_19_tsni = function lambda$_inst_46_52_24_1_10_19_tsni(f, g, x) {
  return repTree_inst_46_52_24_1_10_19_tsni(g, f, x)
};
map_inst_46_52_24_1_10_19_20_tsni = function map_inst_46_52_24_1_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_52_24_1_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_46_52_24_1_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_46_52_24_1_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_46_52_24_1_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_46_52_24_1_10_21_tsni = function prune_inst_46_52_24_1_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_46_52_24_1_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_46_52_24_1_10_21_tsni(n, x)
  }
});
lambda$_inst_46_52_24_1_10_21_tsni = function lambda$_inst_46_52_24_1_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_46_52_24_1_10_21_tsni(tmp, x)
};
map_inst_46_52_24_1_10_21_22_tsni = function map_inst_46_52_24_1_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_46_53_tsni = function best_inst_46_53_tsni(f, bs, ss) {
  let param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      return best_$_inst_46_53_54_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_46_53_54_tsni = function best_$_inst_46_53_54_tsni(f, b, s, ls1, ls2) {
  let param0, param1, b_, bs, param01, param11, s_, ss, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    if (ls2 instanceof NofibPrelude.Nil.class) {
      _deforest_Deforest_Arr_2_0 = b;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f1, g, opposition) => {
        let first1, first0, boardd, eval1, arr1, tmp1;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        boardd = first0;
        eval1 = first1;
        arr1 = [
          boardd,
          eval1
        ];
        tmp1 = minimax.alternate(opposition, g, f1, boardd);
        return NofibPrelude.Cons(arr1, tmp1)
      };
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    b_ = param0;
    bs = param1;
    if (ls2 instanceof NofibPrelude.Cons.class) {
      param01 = ls2.head;
      param11 = ls2.tail;
      s_ = param01;
      ss = param11;
      tmp = runtime.safeCall(f(s, s_));
      scrut = minimax1.evaluationEq(s, tmp);
      if (scrut === true) {
        return best_$_inst_46_53_54_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_46_53_54_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
alternate_inst_55_56_tsni = function alternate_inst_55_56_tsni(player, f, g, board1) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
  scrut2 = fullBoard_inst_55_56_47_tsni(board1);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_55_57_tsni(f1)
    }
  } else {
    tmp = static_inst_55_56_48_tsni(board1);
    scrut1 = evaluationEq_inst_55_56_68_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_55_57_tsni(f1)
      }
    } else {
      tmp1 = static_inst_55_56_50_tsni(board1);
      scrut = evaluationEq_inst_55_56_69_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_55_57_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_55_56_51_tsni(player, board1);
        lambda$this = runtime.safeCall(lambda_inst_55_56_52_tsni(f, g, opposition));
        scores = NofibPrelude.map(lambda$this, possibles);
        boardd_eval = best_inst_55_56_53_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
best_inst_55_56_53_tsni = function best_inst_55_56_53_tsni(f, bs, ss) {
  let param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      return best_$_inst_55_56_53_54_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_55_56_53_54_tsni = function best_$_inst_55_56_53_54_tsni(f, b, s, ls1, ls2) {
  let param0, param1, b_, bs, param01, param11, s_, ss, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    if (ls2 instanceof NofibPrelude.Nil.class) {
      _deforest_Deforest_Arr_2_0 = b;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f1, g, opposition) => {
        let first1, first0, boardd, eval1, arr1, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        boardd = first0;
        eval1 = first1;
        _deforest_Deforest_Arr_2_01 = boardd;
        _deforest_Deforest_Arr_2_11 = eval1;
        arr1 = () => {
          let first11, first01, b1, e, tmp2, tmp3, tmp4, tmp5;
          first01 = _deforest_Deforest_Arr_2_01;
          first11 = _deforest_Deforest_Arr_2_11;
          b1 = first01;
          e = first11;
          tmp2 = minimax.showEvaluation(e);
          tmp3 = NofibPrelude.nofibStringToList("\n");
          tmp4 = minimax.showBoard(b1);
          tmp5 = NofibPrelude.append(tmp3, tmp4);
          return NofibPrelude.append(tmp2, tmp5)
        };
        tmp1 = alternate_inst_55_56_tsni(opposition, g, f1, boardd);
        _deforest_Cons_head = arr1;
        _deforest_Cons_tail = tmp1;
        return (f2) => {
          let param02, param12, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
          param02 = _deforest_Cons_head;
          param12 = _deforest_Cons_tail;
          x = param02;
          xs = param12;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_55_57_tsni(f2, xs);
          _deforest_Cons_head1 = tmp2;
          _deforest_Cons_tail1 = tmp3;
          return () => {
            let param03, param13, x1, xs1, tmp4;
            param03 = _deforest_Cons_head1;
            param13 = _deforest_Cons_tail1;
            x1 = param03;
            xs1 = param13;
            tmp4 = concat_inst_55_60_tsni(xs1);
            return NofibPrelude.append(x1, tmp4)
          }
        }
      };
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    b_ = param0;
    bs = param1;
    if (ls2 instanceof NofibPrelude.Cons.class) {
      param01 = ls2.head;
      param11 = ls2.tail;
      s_ = param01;
      ss = param11;
      tmp = runtime.safeCall(f(s, s_));
      scrut = minimax1.evaluationEq(s, tmp);
      if (scrut === true) {
        return best_$_inst_55_56_53_54_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_55_56_53_54_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_55_56_52_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_55_56_52_24_tsni(f, g, opposition, x)
  }
});
lambda$_inst_55_56_52_24_tsni = function lambda$_inst_55_56_52_24_tsni(f, g, opposition, x) {
  return bestMove_inst_55_56_52_24_1_tsni(opposition, g, f, x)
};
bestMove_inst_55_56_52_24_1_tsni = function bestMove_inst_55_56_52_24_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_55_56_52_24_1_10_tsni(p, b);
  tmp1 = mapTree_inst_55_56_52_24_1_65_tsni(static_inst_55_56_52_24_1_4_tsni, tmp);
  tmp2 = cropTree_inst_55_56_52_24_1_70_tsni(tmp1);
  return mise_inst_55_56_52_24_1_2_tsni(f, g, tmp2)
};
searchTree_inst_55_56_52_24_1_10_tsni = function searchTree_inst_55_56_52_24_1_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_55_56_52_24_1_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_55_56_52_24_1_10_16_tsni(p));
  tmp = repTree_inst_55_56_52_24_1_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_55_56_52_24_1_10_21_tsni(5, tmp)
};
repTree_inst_55_56_52_24_1_10_19_tsni = function repTree_inst_55_56_52_24_1_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_55_56_52_24_1_10_19_tsni(f, g));
  tmp1 = map_inst_55_56_52_24_1_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a1 = a1;
      _deforest_Branch_cs1 = (f1) => {
        return match_xs_arm_Nil_inst_55_56_52_24_1_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_55_56_52_24_1_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_55_56_52_24_1_10_21_tsni(n));
        tmp2 = map_inst_55_56_52_24_1_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_55_56_52_24_1_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_55_56_52_24_1_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_10_19_tsni(f, g, x)
  }
});
lambda$_inst_55_56_52_24_1_10_19_tsni = function lambda$_inst_55_56_52_24_1_10_19_tsni(f, g, x) {
  return repTree_inst_55_56_52_24_1_10_19_tsni(g, f, x)
};
map_inst_55_56_52_24_1_10_19_20_tsni = function map_inst_55_56_52_24_1_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_52_24_1_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_55_56_52_24_1_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_55_56_52_24_1_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_55_56_52_24_1_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_55_56_52_24_1_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_10_16_17_tsni(p, x)
  }
});
lambda$_inst_55_56_52_24_1_10_16_17_tsni = function lambda$_inst_55_56_52_24_1_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_55_56_52_24_1_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_55_56_52_24_1_10_16_17_18_tsni = function newPositions_inst_55_56_52_24_1_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_55_56_52_24_1_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_55_56_52_24_1_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_55_56_52_24_1_10_16_17_18_64_tsni(tmp4)
};
lscomp1_inst_55_56_52_24_1_10_16_17_18_15_tsni = function lscomp1_inst_55_56_52_24_1_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_55_56_52_24_1_10_16_17_18_15_tsni = function lscomp2$_inst_55_56_52_24_1_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_55_56_52_24_1_10_16_17_18_14_tsni = function map_inst_55_56_52_24_1_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_52_24_1_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_55_56_52_24_1_10_16_17_18_64_tsni(xs2);
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
lambda_inst_55_56_52_24_1_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_10_11_12_tsni(p, x)
  }
});
lambda$_inst_55_56_52_24_1_10_11_12_tsni = function lambda$_inst_55_56_52_24_1_10_11_12_tsni(p, x) {
  return newPositions_inst_55_56_52_24_1_10_11_12_13_tsni(p, x)
};
newPositions_inst_55_56_52_24_1_10_11_12_13_tsni = function newPositions_inst_55_56_52_24_1_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_55_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_55_56_52_24_1_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_55_56_52_24_1_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_55_56_52_24_1_10_11_12_13_64_tsni(tmp4)
};
lscomp1_inst_55_56_52_24_1_10_11_12_13_15_tsni = function lscomp1_inst_55_56_52_24_1_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_55_56_52_24_1_10_11_12_13_15_tsni = function lscomp2$_inst_55_56_52_24_1_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_55_56_52_24_1_10_11_12_13_14_tsni = function map_inst_55_56_52_24_1_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_52_24_1_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_55_56_52_24_1_10_11_12_13_64_tsni(xs2);
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
static_inst_55_56_52_24_1_4_tsni = function static_inst_55_56_52_24_1_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_55_56_52_24_1_4_5_tsni(board1));
  tmp = map_inst_55_56_52_24_1_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_55_56_52_24_1_4_49_tsni(0, tmp)
};
map_inst_55_56_52_24_1_4_9_tsni = function map_inst_55_56_52_24_1_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_52_24_1_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_55_56_52_24_1_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (param03, param12) => {
          return match_param0_arm_default_inst_55_56_52_24_1_70_tsni(param03, param12)
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (param03, param12) => {
          return match_param0_arm_default_inst_55_56_52_24_1_70_tsni(param03, param12)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (param01, param11) => {
        let param02, x2, l, tmp2, tmp3;
        param02 = _deforest_Score_i;
        x2 = param02;
        l = param11;
        tmp2 = runtime.safeCall(minimax.Score(x2));
        tmp3 = NofibPrelude.map(cropTree_inst_55_56_52_24_1_70_tsni, l);
        return minimax.Branch(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_55_56_52_24_1_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_55_56_52_24_1_4_5_6_tsni = function lambda$_inst_55_56_52_24_1_4_5_6_tsni(board1, x) {
  return score_inst_55_56_52_24_1_4_5_6_7_tsni(board1, x)
};
score_inst_55_56_52_24_1_4_5_6_7_tsni = function score_inst_55_56_52_24_1_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_55_56_52_24_1_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_55_56_52_24_1_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_55_56_52_24_1_4_5_6_7_8_tsni = function map2_inst_55_56_52_24_1_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_55_56_52_24_1_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_55_56_52_24_1_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_55_56_52_24_1_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_55_56_52_24_1_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_55_56_52_24_1_10_21_tsni = function prune_inst_55_56_52_24_1_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_55_56_52_24_1_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_10_21_tsni(n, x)
  }
});
lambda$_inst_55_56_52_24_1_10_21_tsni = function lambda$_inst_55_56_52_24_1_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_55_56_52_24_1_10_21_tsni(tmp, x)
};
map_inst_55_56_52_24_1_10_21_22_tsni = function map_inst_55_56_52_24_1_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_55_56_52_24_1_4_49_tsni = function interpret_inst_55_56_52_24_1_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mise_inst_55_56_52_24_1_2_tsni = function mise_inst_55_56_52_24_1_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_55_56_52_24_1_2_tsni(f, g));
      tmp1 = map_inst_55_56_52_24_1_2_3_tsni(lambda$this, l);
      return foldr_inst_55_56_52_24_1_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_55_56_52_24_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_2_tsni(f, g, x)
  }
});
lambda$_inst_55_56_52_24_1_2_tsni = function lambda$_inst_55_56_52_24_1_2_tsni(f, g, x) {
  return mise_inst_55_56_52_24_1_2_tsni(g, f, x)
};
map_inst_55_56_52_24_1_2_3_tsni = function map_inst_55_56_52_24_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_52_24_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_55_56_52_24_1_2_62_tsni(f1, z, t);
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
newPositions_inst_55_56_51_tsni = function newPositions_inst_55_56_51_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_55_56_51_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_55_56_51_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_55_56_51_14_tsni(lambda$this, tmp3);
  return concat_inst_55_56_51_64_tsni(tmp4)
};
lscomp1_inst_55_56_51_15_tsni = function lscomp1_inst_55_56_51_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_55_56_51_15_tsni = function lscomp2$_inst_55_56_51_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_55_56_51_14_tsni = function map_inst_55_56_51_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_51_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_55_56_51_64_tsni(xs2);
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
static_inst_55_56_50_tsni = function static_inst_55_56_50_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_55_56_50_5_tsni(board1));
  tmp = map_inst_55_56_50_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_55_56_50_49_tsni(0, tmp)
};
lambda_inst_55_56_50_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_55_56_50_5_6_tsni(board1, x)
  }
});
lambda$_inst_55_56_50_5_6_tsni = function lambda$_inst_55_56_50_5_6_tsni(board1, x) {
  return score_inst_55_56_50_5_6_7_tsni(board1, x)
};
score_inst_55_56_50_5_6_7_tsni = function score_inst_55_56_50_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_55_56_50_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_55_56_50_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_55_56_50_5_6_7_8_tsni = function map2_inst_55_56_50_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_55_56_50_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_55_56_50_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_55_56_50_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_55_56_50_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_55_56_50_9_tsni = function map_inst_55_56_50_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_50_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_55_56_50_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_55_56_50_49_tsni = function interpret_inst_55_56_50_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_55_56_48_tsni = function static_inst_55_56_48_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_55_56_48_5_tsni(board1));
  tmp = map_inst_55_56_48_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_55_56_48_49_tsni(0, tmp)
};
lambda_inst_55_56_48_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_55_56_48_5_6_tsni(board1, x)
  }
});
lambda$_inst_55_56_48_5_6_tsni = function lambda$_inst_55_56_48_5_6_tsni(board1, x) {
  return score_inst_55_56_48_5_6_7_tsni(board1, x)
};
score_inst_55_56_48_5_6_7_tsni = function score_inst_55_56_48_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_55_56_48_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_55_56_48_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_55_56_48_5_6_7_8_tsni = function map2_inst_55_56_48_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_55_56_48_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_55_56_48_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_55_56_48_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_55_56_48_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_55_56_48_9_tsni = function map_inst_55_56_48_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_55_56_48_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_55_56_48_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_55_56_48_49_tsni = function interpret_inst_55_56_48_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
fullBoard_inst_55_56_47_tsni = function fullBoard_inst_55_56_47_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_55_56_47_37_tsni(b);
  tmp1 = map_inst_55_56_47_39_tsni(lambda, tmp);
  return andd_inst_55_56_47_67_tsni(tmp1)
};
concat_inst_55_56_47_37_tsni = function concat_inst_55_56_47_37_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_55_56_47_37_tsni(xs);
    return append_inst_55_56_47_37_38_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_55_56_47_37_38_tsni = function append_inst_55_56_47_37_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_55_56_47_37_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_55_56_47_39_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_55_56_47_67_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_55_56_47_39_tsni = function map_inst_55_56_47_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_55_57_tsni = function map_inst_55_57_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prog_inst_58_59_tsni = function prog_inst_58_59_tsni(input) {
  let testBoard, game, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
  tmp = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp1 = NofibPrelude.Cons(minimax.O, tmp);
  tmp2 = NofibPrelude.Cons(minimax.Empty, tmp1);
  tmp3 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp4 = NofibPrelude.Cons(minimax.X, tmp3);
  tmp5 = NofibPrelude.Cons(minimax.Empty, tmp4);
  tmp6 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
  tmp7 = NofibPrelude.Cons(minimax.Empty, tmp6);
  tmp8 = NofibPrelude.Cons(minimax.Empty, tmp7);
  tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
  tmp10 = NofibPrelude.Cons(tmp5, tmp9);
  tmp11 = NofibPrelude.Cons(tmp2, tmp10);
  testBoard = tmp11;
  tmp12 = board$(testBoard, input);
  tmp13 = alternate_inst_58_59_56_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
  game = tmp13;
  tmp14 = NofibPrelude.nofibStringToList("OXO\n");
  tmp15 = map_inst_58_59_57_tsni(showMove_inst_58_59_71_tsni, game);
  tmp16 = concat_inst_58_59_60_tsni(tmp15);
  return append_inst_58_59_61_tsni(tmp14, tmp16)
};
map_inst_58_59_57_tsni = function map_inst_58_59_57_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
alternate_inst_58_59_56_tsni = function alternate_inst_58_59_56_tsni(player, f, g, board1) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
  scrut2 = fullBoard_inst_58_59_56_47_tsni(board1);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_58_59_57_tsni(f1)
    }
  } else {
    tmp = static_inst_58_59_56_48_tsni(board1);
    scrut1 = evaluationEq_inst_58_59_56_68_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_58_59_57_tsni(f1)
      }
    } else {
      tmp1 = static_inst_58_59_56_50_tsni(board1);
      scrut = evaluationEq_inst_58_59_56_69_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_58_59_57_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_58_59_56_51_tsni(player, board1);
        lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_tsni(f, g, opposition));
        scores = NofibPrelude.map(lambda$this, possibles);
        boardd_eval = best_inst_58_59_56_53_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
fullBoard_inst_58_59_56_47_tsni = function fullBoard_inst_58_59_56_47_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_58_59_56_47_37_tsni(b);
  tmp1 = map_inst_58_59_56_47_39_tsni(lambda, tmp);
  return andd_inst_58_59_56_47_67_tsni(tmp1)
};
map_inst_58_59_56_47_39_tsni = function map_inst_58_59_56_47_39_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_58_59_56_47_37_tsni = function concat_inst_58_59_56_47_37_tsni(ls) {
  let param0, param1, x, xs, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return () => {
        return true
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    tmp = concat_inst_58_59_56_47_37_tsni(xs);
    return append_inst_58_59_56_47_37_38_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_59_56_47_37_38_tsni = function append_inst_58_59_56_47_37_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_59_56_47_37_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_58_59_56_47_39_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_58_59_56_47_67_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_58_59_56_48_tsni = function static_inst_58_59_56_48_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_48_5_tsni(board1));
  tmp = map_inst_58_59_56_48_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_58_59_56_48_49_tsni(0, tmp)
};
map_inst_58_59_56_48_9_tsni = function map_inst_58_59_56_48_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_48_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_58_59_56_48_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_58_59_56_48_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_58_59_56_48_5_6_tsni(board1, x)
  }
});
lambda$_inst_58_59_56_48_5_6_tsni = function lambda$_inst_58_59_56_48_5_6_tsni(board1, x) {
  return score_inst_58_59_56_48_5_6_7_tsni(board1, x)
};
score_inst_58_59_56_48_5_6_7_tsni = function score_inst_58_59_56_48_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_58_59_56_48_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_58_59_56_48_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_58_59_56_48_5_6_7_8_tsni = function map2_inst_58_59_56_48_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_58_59_56_48_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_58_59_56_48_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_58_59_56_48_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_58_59_56_48_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_58_59_56_48_49_tsni = function interpret_inst_58_59_56_48_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_58_59_56_50_tsni = function static_inst_58_59_56_50_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_50_5_tsni(board1));
  tmp = map_inst_58_59_56_50_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_58_59_56_50_49_tsni(0, tmp)
};
map_inst_58_59_56_50_9_tsni = function map_inst_58_59_56_50_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_50_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_58_59_56_50_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.XWin.class) {
            return true
          } else {
            return false
          }
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (y1) => {
          if (y1 instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (y) => {
        let param01, i, param02, j, scrut;
        param01 = _deforest_Score_i;
        i = param01;
        if (y instanceof minimax.Score.class) {
          param02 = y.i;
          j = param02;
          scrut = i === j;
          if (scrut === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_58_59_56_50_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_58_59_56_50_5_6_tsni(board1, x)
  }
});
lambda$_inst_58_59_56_50_5_6_tsni = function lambda$_inst_58_59_56_50_5_6_tsni(board1, x) {
  return score_inst_58_59_56_50_5_6_7_tsni(board1, x)
};
score_inst_58_59_56_50_5_6_7_tsni = function score_inst_58_59_56_50_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_58_59_56_50_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_58_59_56_50_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_58_59_56_50_5_6_7_8_tsni = function map2_inst_58_59_56_50_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_58_59_56_50_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_58_59_56_50_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_58_59_56_50_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_58_59_56_50_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_58_59_56_50_49_tsni = function interpret_inst_58_59_56_50_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_58_59_56_51_tsni = function newPositions_inst_58_59_56_51_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_58_59_56_51_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_58_59_56_51_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_58_59_56_51_14_tsni(lambda$this, tmp3);
  return concat_inst_58_59_56_51_64_tsni(tmp4)
};
map_inst_58_59_56_51_14_tsni = function map_inst_58_59_56_51_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_51_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_58_59_56_51_64_tsni(xs2);
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
lscomp1_inst_58_59_56_51_15_tsni = function lscomp1_inst_58_59_56_51_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_58_59_56_51_15_tsni = function lscomp2$_inst_58_59_56_51_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_58_59_56_52_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_tsni(f, g, opposition, x)
  }
});
lambda$_inst_58_59_56_52_24_tsni = function lambda$_inst_58_59_56_52_24_tsni(f, g, opposition, x) {
  return bestMove_inst_58_59_56_52_24_1_tsni(opposition, g, f, x)
};
bestMove_inst_58_59_56_52_24_1_tsni = function bestMove_inst_58_59_56_52_24_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_58_59_56_52_24_1_10_tsni(p, b);
  tmp1 = mapTree_inst_58_59_56_52_24_1_65_tsni(static_inst_58_59_56_52_24_1_4_tsni, tmp);
  tmp2 = cropTree_inst_58_59_56_52_24_1_70_tsni(tmp1);
  return mise_inst_58_59_56_52_24_1_2_tsni(f, g, tmp2)
};
mise_inst_58_59_56_52_24_1_2_tsni = function mise_inst_58_59_56_52_24_1_2_tsni(f, g, t) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return a
    } else {
      l = param1;
      tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
      lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_24_1_2_tsni(f, g));
      tmp1 = map_inst_58_59_56_52_24_1_2_3_tsni(lambda$this, l);
      return foldr_inst_58_59_56_52_24_1_2_62_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_58_59_56_52_24_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_2_tsni(f, g, x)
  }
});
lambda$_inst_58_59_56_52_24_1_2_tsni = function lambda$_inst_58_59_56_52_24_1_2_tsni(f, g, x) {
  return mise_inst_58_59_56_52_24_1_2_tsni(g, f, x)
};
map_inst_58_59_56_52_24_1_2_3_tsni = function map_inst_58_59_56_52_24_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_52_24_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_58_59_56_52_24_1_2_62_tsni(f1, z, t);
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
static_inst_58_59_56_52_24_1_4_tsni = function static_inst_58_59_56_52_24_1_4_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_24_1_4_5_tsni(board1));
  tmp = map_inst_58_59_56_52_24_1_4_9_tsni(lambda$this, minimax.wins);
  return interpret_inst_58_59_56_52_24_1_4_49_tsni(0, tmp)
};
lambda_inst_58_59_56_52_24_1_4_5_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_4_5_6_tsni(board1, x)
  }
});
lambda$_inst_58_59_56_52_24_1_4_5_6_tsni = function lambda$_inst_58_59_56_52_24_1_4_5_6_tsni(board1, x) {
  return score_inst_58_59_56_52_24_1_4_5_6_7_tsni(board1, x)
};
score_inst_58_59_56_52_24_1_4_5_6_7_tsni = function score_inst_58_59_56_52_24_1_4_5_6_7_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_58_59_56_52_24_1_4_5_6_7_8_tsni(lambda2, board1, win);
  tmp1 = map_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_58_59_56_52_24_1_4_5_6_7_8_tsni = function map2_inst_58_59_56_52_24_1_4_5_6_7_8_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(f1)
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    if (ys instanceof NofibPrelude.Cons.class) {
      param01 = ys.head;
      param11 = ys.tail;
      y = param01;
      ys1 = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = map2_inst_58_59_56_52_24_1_4_5_6_7_8_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_58_59_56_52_24_1_4_9_tsni = function map_inst_58_59_56_52_24_1_4_9_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_52_24_1_4_9_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11, param02, y, ls, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (param01 instanceof minimax.Score.class) {
        param02 = param01.i;
        y = param02;
        ls = param11;
        tmp2 = x1 + y;
        return interpret_inst_58_59_56_52_24_1_4_49_tsni(tmp2, ls)
      } else if (param01 instanceof minimax.XWin.class) {
        return (param03, param12) => {
          return match_param0_arm_default_inst_58_59_56_52_24_1_70_tsni(param03, param12)
        }
      } else if (param01 instanceof minimax.OWin.class) {
        return (param03, param12) => {
          return match_param0_arm_default_inst_58_59_56_52_24_1_70_tsni(param03, param12)
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      let _deforest_Score_i;
      _deforest_Score_i = x1;
      return (param01, param11) => {
        let param02, x2, l, tmp2, tmp3;
        param02 = _deforest_Score_i;
        x2 = param02;
        l = param11;
        tmp2 = runtime.safeCall(minimax.Score(x2));
        tmp3 = NofibPrelude.map(cropTree_inst_58_59_56_52_24_1_70_tsni, l);
        return minimax.Branch(tmp2, tmp3)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
interpret_inst_58_59_56_52_24_1_4_49_tsni = function interpret_inst_58_59_56_52_24_1_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
searchTree_inst_58_59_56_52_24_1_10_tsni = function searchTree_inst_58_59_56_52_24_1_10_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_24_1_10_11_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_58_59_56_52_24_1_10_16_tsni(p));
  tmp = repTree_inst_58_59_56_52_24_1_10_19_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_58_59_56_52_24_1_10_21_tsni(5, tmp)
};
lambda_inst_58_59_56_52_24_1_10_11_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_10_11_12_tsni(p, x)
  }
});
lambda$_inst_58_59_56_52_24_1_10_11_12_tsni = function lambda$_inst_58_59_56_52_24_1_10_11_12_tsni(p, x) {
  return newPositions_inst_58_59_56_52_24_1_10_11_12_13_tsni(p, x)
};
newPositions_inst_58_59_56_52_24_1_10_11_12_13_tsni = function newPositions_inst_58_59_56_52_24_1_10_11_12_13_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_11_12_13_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_58_59_56_52_24_1_10_11_12_13_14_tsni(lambda$this, tmp3);
  return concat_inst_58_59_56_52_24_1_10_11_12_13_64_tsni(tmp4)
};
map_inst_58_59_56_52_24_1_10_11_12_13_14_tsni = function map_inst_58_59_56_52_24_1_10_11_12_13_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_52_24_1_10_11_12_13_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_58_59_56_52_24_1_10_11_12_13_64_tsni(xs2);
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
lscomp1_inst_58_59_56_52_24_1_10_11_12_13_15_tsni = function lscomp1_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_58_59_56_52_24_1_10_11_12_13_15_tsni = function lscomp2$_inst_58_59_56_52_24_1_10_11_12_13_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_58_59_56_52_24_1_10_16_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_10_16_17_tsni(p, x)
  }
});
lambda$_inst_58_59_56_52_24_1_10_16_17_tsni = function lambda$_inst_58_59_56_52_24_1_10_16_17_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_58_59_56_52_24_1_10_16_17_18_tsni(tmp, x)
};
newPositions_inst_58_59_56_52_24_1_10_16_17_18_tsni = function newPositions_inst_58_59_56_52_24_1_10_16_17_18_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_58_59_56_52_24_1_10_16_17_18_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda1(piece, board1));
  tmp4 = map_inst_58_59_56_52_24_1_10_16_17_18_14_tsni(lambda$this, tmp3);
  return concat_inst_58_59_56_52_24_1_10_16_17_18_64_tsni(tmp4)
};
map_inst_58_59_56_52_24_1_10_16_17_18_14_tsni = function map_inst_58_59_56_52_24_1_10_16_17_18_14_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_52_24_1_10_16_17_18_14_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_58_59_56_52_24_1_10_16_17_18_64_tsni(xs2);
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
lscomp1_inst_58_59_56_52_24_1_10_16_17_18_15_tsni = function lscomp1_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_58_59_56_52_24_1_10_16_17_18_15_tsni = function lscomp2$_inst_58_59_56_52_24_1_10_16_17_18_15_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
repTree_inst_58_59_56_52_24_1_10_19_tsni = function repTree_inst_58_59_56_52_24_1_10_19_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_58_59_56_52_24_1_10_19_tsni(f, g));
  tmp1 = map_inst_58_59_56_52_24_1_10_19_20_tsni(lambda$this, tmp);
  _deforest_Branch_a = a;
  _deforest_Branch_cs = tmp1;
  return (n) => {
    let param0, param1, a1, l, scrut, scrut1, tmp2, lambda$this1, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
    param0 = _deforest_Branch_a;
    param1 = _deforest_Branch_cs;
    a1 = param0;
    l = param1;
    scrut1 = n === 0;
    if (scrut1 === true) {
      _deforest_Branch_a2 = a1;
      _deforest_Branch_cs2 = (f1) => {
        return match_xs_arm_Nil_inst_58_59_56_52_24_1_65_66_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_58_59_56_52_24_1_65_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_58_59_56_52_24_1_10_21_tsni(n));
        tmp2 = map_inst_58_59_56_52_24_1_10_21_22_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_58_59_56_52_24_1_65_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_58_59_56_52_24_1_10_19_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_10_19_tsni(f, g, x)
  }
});
lambda$_inst_58_59_56_52_24_1_10_19_tsni = function lambda$_inst_58_59_56_52_24_1_10_19_tsni(f, g, x) {
  return repTree_inst_58_59_56_52_24_1_10_19_tsni(g, f, x)
};
map_inst_58_59_56_52_24_1_10_19_20_tsni = function map_inst_58_59_56_52_24_1_10_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_59_56_52_24_1_10_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_58_59_56_52_24_1_10_21_22_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f2) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f2(x));
        tmp1 = map_inst_58_59_56_52_24_1_65_66_tsni(f2, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return (f2) => {
        return match_xs_arm_Nil_inst_58_59_56_52_24_1_65_66_tsni(f2)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
prune_inst_58_59_56_52_24_1_10_21_tsni = function prune_inst_58_59_56_52_24_1_10_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_58_59_56_52_24_1_10_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_10_21_tsni(n, x)
  }
});
lambda$_inst_58_59_56_52_24_1_10_21_tsni = function lambda$_inst_58_59_56_52_24_1_10_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_58_59_56_52_24_1_10_21_tsni(tmp, x)
};
map_inst_58_59_56_52_24_1_10_21_22_tsni = function map_inst_58_59_56_52_24_1_10_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_58_59_56_53_tsni = function best_inst_58_59_56_53_tsni(f, bs, ss) {
  let param0, param1, b, bs1, param01, param11, s, ss1;
  if (bs instanceof NofibPrelude.Cons.class) {
    param0 = bs.head;
    param1 = bs.tail;
    b = param0;
    bs1 = param1;
    if (ss instanceof NofibPrelude.Cons.class) {
      param01 = ss.head;
      param11 = ss.tail;
      s = param01;
      ss1 = param11;
      return best_$_inst_58_59_56_53_54_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_58_59_56_53_54_tsni = function best_$_inst_58_59_56_53_54_tsni(f, b, s, ls1, ls2) {
  let param0, param1, b_, bs, param01, param11, s_, ss, scrut, arr, tmp, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    if (ls2 instanceof NofibPrelude.Nil.class) {
      _deforest_Deforest_Arr_2_0 = b;
      _deforest_Deforest_Arr_2_1 = s;
      arr = (f1, g, opposition) => {
        let first1, first0, boardd, eval1, arr1, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        boardd = first0;
        eval1 = first1;
        _deforest_Deforest_Arr_2_01 = boardd;
        _deforest_Deforest_Arr_2_11 = eval1;
        arr1 = () => {
          let first11, first01, b1, e, tmp2, tmp3, tmp4, tmp5;
          first01 = _deforest_Deforest_Arr_2_01;
          first11 = _deforest_Deforest_Arr_2_11;
          b1 = first01;
          e = first11;
          tmp2 = minimax.showEvaluation(e);
          tmp3 = NofibPrelude.nofibStringToList("\n");
          tmp4 = minimax.showBoard(b1);
          tmp5 = NofibPrelude.append(tmp3, tmp4);
          return NofibPrelude.append(tmp2, tmp5)
        };
        tmp1 = alternate_inst_58_59_56_tsni(opposition, g, f1, boardd);
        _deforest_Cons_head = arr1;
        _deforest_Cons_tail = tmp1;
        return (f2) => {
          let param02, param12, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
          param02 = _deforest_Cons_head;
          param12 = _deforest_Cons_tail;
          x = param02;
          xs = param12;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_58_59_57_tsni(f2, xs);
          _deforest_Cons_head1 = tmp2;
          _deforest_Cons_tail1 = tmp3;
          return () => {
            let param03, param13, x1, xs1, tmp4;
            param03 = _deforest_Cons_head1;
            param13 = _deforest_Cons_tail1;
            x1 = param03;
            xs1 = param13;
            tmp4 = concat_inst_58_59_60_tsni(xs1);
            return append_inst_58_59_60_38_tsni(x1, tmp4)
          }
        }
      };
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    b_ = param0;
    bs = param1;
    if (ls2 instanceof NofibPrelude.Cons.class) {
      param01 = ls2.head;
      param11 = ls2.tail;
      s_ = param01;
      ss = param11;
      tmp = runtime.safeCall(f(s, s_));
      scrut = minimax1.evaluationEq(s, tmp);
      if (scrut === true) {
        return best_$_inst_58_59_56_53_54_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_58_59_56_53_54_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_58_59_60_tsni = function concat_inst_58_59_60_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_58_59_60_38_tsni = function append_inst_58_59_60_38_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_59_60_38_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_58_72_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_58_59_61_tsni = function append_inst_58_59_61_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_58_59_61_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_58_72_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
foldr_inst_0_1_2_62_tsni = function foldr_inst_0_1_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_0_1_4_5_6_7_63_tsni = function map_inst_0_1_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_0_1_4_49_tsni = function interpret_inst_0_1_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
concat_inst_0_1_10_11_12_13_64_tsni = function concat_inst_0_1_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_0_1_10_16_17_18_64_tsni = function concat_inst_0_1_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_0_1_65_tsni = function mapTree_inst_0_1_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_0_1_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_0_1_65_tsni(f, x)
  }
});
lambda$_inst_0_1_65_tsni = function lambda$_inst_0_1_65_tsni(f, x) {
  return mapTree_inst_0_1_65_tsni(f, x)
};
map_inst_0_1_65_66_tsni = function map_inst_0_1_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_23_24_1_10_16_17_18_64_tsni = function concat_inst_23_24_1_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_23_24_1_10_11_12_13_64_tsni = function concat_inst_23_24_1_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
interpret_inst_23_24_1_4_49_tsni = function interpret_inst_23_24_1_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_23_24_1_4_5_6_7_63_tsni = function map_inst_23_24_1_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_23_24_1_65_tsni = function mapTree_inst_23_24_1_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_23_24_1_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_23_24_1_65_tsni(f, x)
  }
});
lambda$_inst_23_24_1_65_tsni = function lambda$_inst_23_24_1_65_tsni(f, x) {
  return mapTree_inst_23_24_1_65_tsni(f, x)
};
map_inst_23_24_1_65_66_tsni = function map_inst_23_24_1_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_23_24_1_2_62_tsni = function foldr_inst_23_24_1_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_25_13_64_tsni = function concat_inst_25_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_26_12_13_64_tsni = function concat_inst_26_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_27_18_64_tsni = function concat_inst_27_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_28_17_18_64_tsni = function concat_inst_28_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
foldr_inst_29_62_tsni = function foldr_inst_29_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_30_62_tsni = function foldr_inst_30_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_31_7_63_tsni = function map_inst_31_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_32_6_7_63_tsni = function map_inst_32_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
andd_inst_36_67_tsni = function andd_inst_36_67_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_40_64_tsni = function concat_inst_40_64_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_41_63_tsni = function map_inst_41_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_42_5_6_7_63_tsni = function map_inst_42_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_42_49_tsni = function interpret_inst_42_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
foldr_inst_43_62_tsni = function foldr_inst_43_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_44_11_12_13_64_tsni = function concat_inst_44_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_44_16_17_18_64_tsni = function concat_inst_44_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
prune_inst_44_21_tsni = function prune_inst_44_21_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_44_21_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_44_21_tsni(n, x)
  }
});
lambda$_inst_44_21_tsni = function lambda$_inst_44_21_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_44_21_tsni(tmp, x)
};
map_inst_44_21_22_tsni = function map_inst_44_21_22_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_45_10_16_17_18_64_tsni = function concat_inst_45_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_45_10_11_12_13_64_tsni = function concat_inst_45_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
interpret_inst_45_4_49_tsni = function interpret_inst_45_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_45_4_5_6_7_63_tsni = function map_inst_45_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_45_65_tsni = function mapTree_inst_45_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_45_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_45_65_tsni(f, x)
  }
});
lambda$_inst_45_65_tsni = function lambda$_inst_45_65_tsni(f, x) {
  return mapTree_inst_45_65_tsni(f, x)
};
map_inst_45_65_66_tsni = function map_inst_45_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_45_2_62_tsni = function foldr_inst_45_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
andd_inst_46_47_67_tsni = function andd_inst_46_47_67_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_46_48_5_6_7_63_tsni = function map_inst_46_48_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_46_68_tsni = function evaluationEq_inst_46_68_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_46_50_5_6_7_63_tsni = function map_inst_46_50_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_46_69_tsni = function evaluationEq_inst_46_69_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_46_51_64_tsni = function concat_inst_46_51_64_tsni(ls) {
  return runtime.safeCall(ls())
};
foldr_inst_46_52_24_1_2_62_tsni = function foldr_inst_46_52_24_1_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_46_52_24_1_4_5_6_7_63_tsni = function map_inst_46_52_24_1_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_46_52_24_1_4_49_tsni = function interpret_inst_46_52_24_1_4_49_tsni(x, l) {
  return runtime.safeCall(l(x))
};
concat_inst_46_52_24_1_10_11_12_13_64_tsni = function concat_inst_46_52_24_1_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_46_52_24_1_10_16_17_18_64_tsni = function concat_inst_46_52_24_1_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_46_52_24_1_65_tsni = function mapTree_inst_46_52_24_1_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_46_52_24_1_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_46_52_24_1_65_tsni(f, x)
  }
});
lambda$_inst_46_52_24_1_65_tsni = function lambda$_inst_46_52_24_1_65_tsni(f, x) {
  return mapTree_inst_46_52_24_1_65_tsni(f, x)
};
map_inst_46_52_24_1_65_66_tsni = function map_inst_46_52_24_1_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_55_56_52_24_1_10_16_17_18_64_tsni = function concat_inst_55_56_52_24_1_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_55_56_52_24_1_10_11_12_13_64_tsni = function concat_inst_55_56_52_24_1_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_55_56_52_24_1_4_5_6_7_63_tsni = function map_inst_55_56_52_24_1_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_55_56_52_24_1_65_tsni = function mapTree_inst_55_56_52_24_1_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_55_56_52_24_1_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_55_56_52_24_1_65_tsni(f, x)
  }
});
lambda$_inst_55_56_52_24_1_65_tsni = function lambda$_inst_55_56_52_24_1_65_tsni(f, x) {
  return mapTree_inst_55_56_52_24_1_65_tsni(f, x)
};
map_inst_55_56_52_24_1_65_66_tsni = function map_inst_55_56_52_24_1_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cropTree_inst_55_56_52_24_1_70_tsni = function cropTree_inst_55_56_52_24_1_70_tsni(t) {
  let param0, param1, a;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return minimax.Branch(a, NofibPrelude.Nil)
    } else {
      return runtime.safeCall(param0(param0, param1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
foldr_inst_55_56_52_24_1_2_62_tsni = function foldr_inst_55_56_52_24_1_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_55_56_51_64_tsni = function concat_inst_55_56_51_64_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_55_56_50_5_6_7_63_tsni = function map_inst_55_56_50_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_55_56_69_tsni = function evaluationEq_inst_55_56_69_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_55_56_48_5_6_7_63_tsni = function map_inst_55_56_48_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_55_56_68_tsni = function evaluationEq_inst_55_56_68_tsni(x, y) {
  return runtime.safeCall(x(y))
};
andd_inst_55_56_47_67_tsni = function andd_inst_55_56_47_67_tsni(ls) {
  return runtime.safeCall(ls())
};
showMove_inst_55_71_tsni = function showMove_inst_55_71_tsni(m) {
  return runtime.safeCall(m())
};
concat_inst_55_60_tsni = function concat_inst_55_60_tsni(ls) {
  return runtime.safeCall(ls())
};
andd_inst_58_59_56_47_67_tsni = function andd_inst_58_59_56_47_67_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_58_59_56_48_5_6_7_63_tsni = function map_inst_58_59_56_48_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_58_59_56_68_tsni = function evaluationEq_inst_58_59_56_68_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_58_59_56_50_5_6_7_63_tsni = function map_inst_58_59_56_50_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_58_59_56_69_tsni = function evaluationEq_inst_58_59_56_69_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_58_59_56_51_64_tsni = function concat_inst_58_59_56_51_64_tsni(ls) {
  return runtime.safeCall(ls())
};
foldr_inst_58_59_56_52_24_1_2_62_tsni = function foldr_inst_58_59_56_52_24_1_2_62_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_58_59_56_52_24_1_4_5_6_7_63_tsni = function map_inst_58_59_56_52_24_1_4_5_6_7_63_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cropTree_inst_58_59_56_52_24_1_70_tsni = function cropTree_inst_58_59_56_52_24_1_70_tsni(t) {
  let param0, param1, a;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return minimax.Branch(a, NofibPrelude.Nil)
    } else {
      return runtime.safeCall(param0(param0, param1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_58_59_56_52_24_1_10_11_12_13_64_tsni = function concat_inst_58_59_56_52_24_1_10_11_12_13_64_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_58_59_56_52_24_1_10_16_17_18_64_tsni = function concat_inst_58_59_56_52_24_1_10_16_17_18_64_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_58_59_56_52_24_1_65_tsni = function mapTree_inst_58_59_56_52_24_1_65_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_58_59_56_52_24_1_65_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_58_59_56_52_24_1_65_tsni(f, x)
  }
});
lambda$_inst_58_59_56_52_24_1_65_tsni = function lambda$_inst_58_59_56_52_24_1_65_tsni(f, x) {
  return mapTree_inst_58_59_56_52_24_1_65_tsni(f, x)
};
map_inst_58_59_56_52_24_1_65_66_tsni = function map_inst_58_59_56_52_24_1_65_66_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
showMove_inst_58_59_71_tsni = function showMove_inst_58_59_71_tsni(m) {
  return runtime.safeCall(m())
};
nofibListToString_inst_58_72_tsni = function nofibListToString_inst_58_72_tsni(ls) {
  return runtime.safeCall(ls())
};
board$ = function board$(testBoard, x) {
  let scrut;
  scrut = x === "doesn't happen";
  if (scrut === true) {
    return NofibPrelude.append(testBoard, testBoard)
  } else {
    return testBoard
  }
};
board = function board(testBoard) {
  return (x) => {
    return board$(testBoard, x)
  }
};
lambda$8 = function lambda$(f, g, opposition, x) {
  return bestMove_inst_0_1_tsni(opposition, g, f, x)
};
lambda10 = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_23_24_tsni(f, g, opposition, x)
  }
});
lambda$7 = function lambda$(p, x) {
  return newPositions_inst_25_13_tsni(p, x)
};
lambda8 = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_26_12_tsni(p, x)
  }
});
lambda$6 = function lambda$(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_27_18_tsni(tmp, x)
};
lambda9 = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_28_17_tsni(p, x)
  }
});
lambda$5 = function lambda$(f, g, x) {
  return mise_inst_29_tsni(g, f, x)
};
lambda7 = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_30_tsni(f, g, x)
  }
});
best_$ = function best_$(f, b, s, ls1, ls2) {
  let param0, param1, b_, bs, param01, param11, s_, ss, scrut, arr, tmp;
  if (ls1 instanceof NofibPrelude.Nil.class) {
    if (ls2 instanceof NofibPrelude.Nil.class) {
      arr = [
        b,
        s
      ];
      return arr
    } else {
      throw new globalThis.Error("match error");
    }
  } else if (ls1 instanceof NofibPrelude.Cons.class) {
    param0 = ls1.head;
    param1 = ls1.tail;
    b_ = param0;
    bs = param1;
    if (ls2 instanceof NofibPrelude.Cons.class) {
      param01 = ls2.head;
      param11 = ls2.tail;
      s_ = param01;
      ss = param11;
      tmp = runtime.safeCall(f(s, s_));
      scrut = minimax1.evaluationEq(s, tmp);
      if (scrut === true) {
        return best_$(f, b, s, bs, ss)
      } else {
        return best_$(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_ = function best_(f) {
  return (b, s, ls1, ls2) => {
    return best_$(f, b, s, ls1, ls2)
  }
};
lambda$4 = function lambda$(n, x) {
  let tmp;
  tmp = n - 1;
  return minimax1.prune(tmp, x)
};
lambda6 = (undefined, function (n) {
  return (x) => {
    return lambda$4(n, x)
  }
});
lambda$3 = function lambda$(f, x) {
  return minimax1.mapTree(f, x)
};
lambda5 = (undefined, function (f) {
  return (x) => {
    return lambda$3(f, x)
  }
});
lambda$2 = function lambda$(f, g, x) {
  return minimax1.repTree(g, f, x)
};
lambda4 = (undefined, function (f, g) {
  return (x) => {
    return lambda$2(f, g, x)
  }
});
lambda$1 = function lambda$(board1, x) {
  return score_inst_31_7_tsni(board1, x)
};
lambda3 = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_32_6_tsni(board1, x)
  }
});
lambda2 = (undefined, function (x, y) {
  return minimax1.map2(minimax1.scorePiece, x, y)
});
lscomp2$ = function lscomp2$(x, xs, ls) {
  let param0, param1, y, ys, arr, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp1(xs)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    y = param0;
    ys = param1;
    arr = [
      x,
      y
    ];
    tmp = lscomp2$(x, xs, ys);
    return NofibPrelude.Cons(arr, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2 = function lscomp2(x, xs) {
  return (ls) => {
    return lscomp2$_inst_33_34_tsni(x, xs, ls)
  }
};
lscomp1 = function lscomp1(ls) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    xs = param1;
    _deforest_Cons_head2 = 3;
    _deforest_Cons_tail2 = (x1, xs1) => {
      return lscomp1(xs1)
    };
    tmp = (x1, xs1) => {
      return match_ls_arm_Cons_inst_35_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 2;
    _deforest_Cons_tail1 = tmp;
    tmp1 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_35_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 1;
    _deforest_Cons_tail = tmp1;
    tmp2 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_35_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return lscomp2$_inst_35_tsni(x, xs, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$ = function lambda$(piece, board1, pos) {
  return minimax1.placePiece(piece, board1, pos)
};
lambda1 = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$(piece, board1, pos)
  }
});
lambda = (undefined, function (x) {
  let tmp;
  tmp = minimax1.eqPiece(x, minimax1.Empty);
  return Predef.not(tmp)
});
(class minimax {
  static {
    minimax1 = minimax;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105;
    this.Piece = class Piece {
      constructor() {}
      toString() { return "Piece"; }
    };
    const X$class = class X extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "X"; }
    };
    this.X = new X$class;
    this.X.class = X$class;
    const O$class = class O extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "O"; }
    };
    this.O = new O$class;
    this.O.class = O$class;
    const Empty$class = class Empty extends minimax.Piece {
      constructor() {
        super();
      }
      toString() { return "Empty"; }
    };
    this.Empty = new Empty$class;
    this.Empty.class = Empty$class;
    this.Evaluation = class Evaluation {
      constructor() {}
      toString() { return "Evaluation"; }
    };
    const XWin$class = class XWin extends minimax.Evaluation {
      constructor() {
        super();
      }
      toString() { return "XWin"; }
    };
    this.XWin = new XWin$class;
    this.XWin.class = XWin$class;
    const OWin$class = class OWin extends minimax.Evaluation {
      constructor() {
        super();
      }
      toString() { return "OWin"; }
    };
    this.OWin = new OWin$class;
    this.OWin.class = OWin$class;
    this.Score = function Score(i1) {
      return new Score.class(i1);
    };
    this.Score.class = class Score extends minimax.Evaluation {
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return "Score(" + runtime.render(this.i) + ")"; }
    };
    this.Branch = function Branch(a1, cs1) {
      return new Branch.class(a1, cs1);
    };
    this.Branch.class = class Branch {
      constructor(a, cs) {
        this.a = a;
        this.cs = cs;
      }
      toString() { return "Branch(" + runtime.render(this.a) + ", " + runtime.render(this.cs) + ")"; }
    };
    tmp = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(1, tmp);
    tmp2 = NofibPrelude.Cons(1, tmp1);
    tmp3 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(0, tmp3);
    tmp5 = NofibPrelude.Cons(0, tmp4);
    tmp6 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(0, tmp6);
    tmp8 = NofibPrelude.Cons(0, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    this.win1 = tmp11;
    tmp12 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(0, tmp12);
    tmp14 = NofibPrelude.Cons(0, tmp13);
    tmp15 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp16 = NofibPrelude.Cons(1, tmp15);
    tmp17 = NofibPrelude.Cons(1, tmp16);
    tmp18 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp19 = NofibPrelude.Cons(0, tmp18);
    tmp20 = NofibPrelude.Cons(0, tmp19);
    tmp21 = NofibPrelude.Cons(tmp20, NofibPrelude.Nil);
    tmp22 = NofibPrelude.Cons(tmp17, tmp21);
    tmp23 = NofibPrelude.Cons(tmp14, tmp22);
    this.win2 = tmp23;
    tmp24 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp25 = NofibPrelude.Cons(0, tmp24);
    tmp26 = NofibPrelude.Cons(0, tmp25);
    tmp27 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp28 = NofibPrelude.Cons(0, tmp27);
    tmp29 = NofibPrelude.Cons(0, tmp28);
    tmp30 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp31 = NofibPrelude.Cons(1, tmp30);
    tmp32 = NofibPrelude.Cons(1, tmp31);
    tmp33 = NofibPrelude.Cons(tmp32, NofibPrelude.Nil);
    tmp34 = NofibPrelude.Cons(tmp29, tmp33);
    tmp35 = NofibPrelude.Cons(tmp26, tmp34);
    this.win3 = tmp35;
    tmp36 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp37 = NofibPrelude.Cons(0, tmp36);
    tmp38 = NofibPrelude.Cons(1, tmp37);
    tmp39 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp40 = NofibPrelude.Cons(0, tmp39);
    tmp41 = NofibPrelude.Cons(1, tmp40);
    tmp42 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(0, tmp42);
    tmp44 = NofibPrelude.Cons(1, tmp43);
    tmp45 = NofibPrelude.Cons(tmp44, NofibPrelude.Nil);
    tmp46 = NofibPrelude.Cons(tmp41, tmp45);
    tmp47 = NofibPrelude.Cons(tmp38, tmp46);
    this.win4 = tmp47;
    tmp48 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp49 = NofibPrelude.Cons(1, tmp48);
    tmp50 = NofibPrelude.Cons(0, tmp49);
    tmp51 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp52 = NofibPrelude.Cons(1, tmp51);
    tmp53 = NofibPrelude.Cons(0, tmp52);
    tmp54 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp55 = NofibPrelude.Cons(1, tmp54);
    tmp56 = NofibPrelude.Cons(0, tmp55);
    tmp57 = NofibPrelude.Cons(tmp56, NofibPrelude.Nil);
    tmp58 = NofibPrelude.Cons(tmp53, tmp57);
    tmp59 = NofibPrelude.Cons(tmp50, tmp58);
    this.win5 = tmp59;
    tmp60 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp61 = NofibPrelude.Cons(0, tmp60);
    tmp62 = NofibPrelude.Cons(0, tmp61);
    tmp63 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp64 = NofibPrelude.Cons(0, tmp63);
    tmp65 = NofibPrelude.Cons(0, tmp64);
    tmp66 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp67 = NofibPrelude.Cons(0, tmp66);
    tmp68 = NofibPrelude.Cons(0, tmp67);
    tmp69 = NofibPrelude.Cons(tmp68, NofibPrelude.Nil);
    tmp70 = NofibPrelude.Cons(tmp65, tmp69);
    tmp71 = NofibPrelude.Cons(tmp62, tmp70);
    this.win6 = tmp71;
    tmp72 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp73 = NofibPrelude.Cons(0, tmp72);
    tmp74 = NofibPrelude.Cons(1, tmp73);
    tmp75 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp76 = NofibPrelude.Cons(1, tmp75);
    tmp77 = NofibPrelude.Cons(0, tmp76);
    tmp78 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp79 = NofibPrelude.Cons(0, tmp78);
    tmp80 = NofibPrelude.Cons(0, tmp79);
    tmp81 = NofibPrelude.Cons(tmp80, NofibPrelude.Nil);
    tmp82 = NofibPrelude.Cons(tmp77, tmp81);
    tmp83 = NofibPrelude.Cons(tmp74, tmp82);
    this.win7 = tmp83;
    tmp84 = NofibPrelude.Cons(1, NofibPrelude.Nil);
    tmp85 = NofibPrelude.Cons(0, tmp84);
    tmp86 = NofibPrelude.Cons(0, tmp85);
    tmp87 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp88 = NofibPrelude.Cons(1, tmp87);
    tmp89 = NofibPrelude.Cons(0, tmp88);
    tmp90 = NofibPrelude.Cons(0, NofibPrelude.Nil);
    tmp91 = NofibPrelude.Cons(0, tmp90);
    tmp92 = NofibPrelude.Cons(1, tmp91);
    tmp93 = NofibPrelude.Cons(tmp92, NofibPrelude.Nil);
    tmp94 = NofibPrelude.Cons(tmp89, tmp93);
    tmp95 = NofibPrelude.Cons(tmp86, tmp94);
    this.win8 = tmp95;
    tmp96 = NofibPrelude.Cons(minimax.win8, NofibPrelude.Nil);
    tmp97 = NofibPrelude.Cons(minimax.win7, tmp96);
    tmp98 = NofibPrelude.Cons(minimax.win6, tmp97);
    tmp99 = NofibPrelude.Cons(minimax.win5, tmp98);
    tmp100 = NofibPrelude.Cons(minimax.win4, tmp99);
    tmp101 = NofibPrelude.Cons(minimax.win3, tmp100);
    tmp102 = NofibPrelude.Cons(minimax.win2, tmp101);
    tmp103 = NofibPrelude.Cons(minimax.win1, tmp102);
    this.wins = tmp103;
    tmp104 = NofibPrelude.replicate(3, minimax.Empty);
    tmp105 = NofibPrelude.replicate(3, tmp104);
    this.initialBoard = tmp105;
  }
  static andd(ls) {
    let param0, param1, b, bs, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return true
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      b = param0;
      bs = param1;
      tmp = minimax.andd(bs);
      return b && tmp
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static eqPiece(p1, p2) {
    if (p1 instanceof minimax.X.class) {
      if (p2 instanceof minimax.X.class) {
        return true
      } else {
        return false
      }
    } else if (p1 instanceof minimax.O.class) {
      if (p2 instanceof minimax.O.class) {
        return true
      } else {
        return false
      }
    } else if (p1 instanceof minimax.Empty.class) {
      if (p2 instanceof minimax.Empty.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static evaluationEq(x, y) {
    let param0, i, param01, j, scrut;
    if (x instanceof minimax.XWin.class) {
      if (y instanceof minimax.XWin.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof minimax.OWin.class) {
      if (y instanceof minimax.OWin.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof minimax.Score.class) {
      param0 = x.i;
      i = param0;
      if (y instanceof minimax.Score.class) {
        param01 = y.i;
        j = param01;
        scrut = i === j;
        if (scrut === true) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static showEvaluation(e) {
    let param0, i, tmp, tmp1, tmp2;
    if (e instanceof minimax.XWin.class) {
      return NofibPrelude.nofibStringToList("XWin")
    } else if (e instanceof minimax.OWin.class) {
      return NofibPrelude.nofibStringToList("OWin")
    } else if (e instanceof minimax.Score.class) {
      param0 = e.i;
      i = param0;
      tmp = NofibPrelude.nofibStringToList("Score ");
      tmp1 = NofibPrelude.stringOfInt(i);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      return NofibPrelude.append(tmp, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showPiece(p) {
    if (p instanceof minimax.X.class) {
      return NofibPrelude.nofibStringToList("X")
    } else if (p instanceof minimax.O.class) {
      return NofibPrelude.nofibStringToList("O")
    } else if (p instanceof minimax.Empty.class) {
      return NofibPrelude.nofibStringToList(" ")
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showRow(ps) {
    let param0, param1, p11, param01, param11, p21, param02, param12, p3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    if (ps instanceof NofibPrelude.Cons.class) {
      param0 = ps.head;
      param1 = ps.tail;
      p11 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        p21 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          p3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            tmp = minimax.showPiece(p11);
            tmp1 = NofibPrelude.nofibStringToList("|");
            tmp2 = minimax.showPiece(p21);
            tmp3 = NofibPrelude.nofibStringToList("|");
            tmp4 = minimax.showPiece(p3);
            tmp5 = NofibPrelude.append(tmp3, tmp4);
            tmp6 = NofibPrelude.append(tmp2, tmp5);
            tmp7 = NofibPrelude.append(tmp1, tmp6);
            return NofibPrelude.append(tmp, tmp7)
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
  static showBoard(rs) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    if (rs instanceof NofibPrelude.Cons.class) {
      param0 = rs.head;
      param1 = rs.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            tmp = minimax.showRow(r1);
            tmp1 = NofibPrelude.nofibStringToList("\n------\n");
            tmp2 = minimax.showRow(r2);
            tmp3 = NofibPrelude.nofibStringToList("\n------\n");
            tmp4 = minimax.showRow(r3);
            tmp5 = NofibPrelude.nofibStringToList("\n\n");
            tmp6 = NofibPrelude.append(tmp4, tmp5);
            tmp7 = NofibPrelude.append(tmp3, tmp6);
            tmp8 = NofibPrelude.append(tmp2, tmp7);
            tmp9 = NofibPrelude.append(tmp1, tmp8);
            return NofibPrelude.append(tmp, tmp9)
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
  static insert(p3, ps1, i) {
    let param0, param1, p11, param01, param11, p21, param02, param12, p31, scrut, scrut1, scrut2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (ps1 instanceof NofibPrelude.Cons.class) {
      param0 = ps1.head;
      param1 = ps1.tail;
      p11 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        p21 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          p31 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            scrut2 = i === 1;
            if (scrut2 === true) {
              tmp = NofibPrelude.Cons(p31, NofibPrelude.Nil);
              tmp1 = NofibPrelude.Cons(p21, tmp);
              return NofibPrelude.Cons(p3, tmp1)
            } else {
              scrut1 = i === 2;
              if (scrut1 === true) {
                tmp2 = NofibPrelude.Cons(p31, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(p3, tmp2);
                return NofibPrelude.Cons(p11, tmp3)
              } else {
                scrut = i === 3;
                if (scrut === true) {
                  tmp4 = NofibPrelude.Cons(p3, NofibPrelude.Nil);
                  tmp5 = NofibPrelude.Cons(p21, tmp4);
                  return NofibPrelude.Cons(p11, tmp5)
                } else {
                  throw new globalThis.Error("match error");
                }
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
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static empty_(x1, r) {
    let scrut, param0, param1, param01, param11, param02, param12, scrut1, scrut2;
    scrut2 = x1 === 1;
    if (scrut2 === true) {
      if (r instanceof NofibPrelude.Cons.class) {
        param0 = r.head;
        param1 = r.tail;
        if (param0 instanceof minimax.Empty.class) {
          if (param1 instanceof NofibPrelude.Cons.class) {
            param01 = param1.head;
            param11 = param1.tail;
            if (param11 instanceof NofibPrelude.Cons.class) {
              param02 = param11.head;
              param12 = param11.tail;
              if (param12 instanceof NofibPrelude.Nil.class) {
                return true
              } else {
                scrut1 = x1 === 2;
                if (scrut1 === true) {
                  if (param01 instanceof minimax.Empty.class) {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  } else {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    if (param02 instanceof minimax.Empty.class) {
                      return false
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                }
              }
            } else {
              scrut1 = x1 === 2;
              if (scrut1 === true) {
                if (param01 instanceof minimax.Empty.class) {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  return false
                } else {
                  return false
                }
              }
            }
          } else {
            scrut1 = x1 === 2;
            if (scrut1 === true) {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            }
          }
        } else {
          scrut1 = x1 === 2;
          if (scrut1 === true) {
            if (param1 instanceof NofibPrelude.Cons.class) {
              param01 = param1.head;
              param11 = param1.tail;
              if (param01 instanceof minimax.Empty.class) {
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param12 instanceof NofibPrelude.Nil.class) {
                    return true
                  } else {
                    scrut = x1 === 3;
                    if (scrut === true) {
                      if (param02 instanceof minimax.Empty.class) {
                        return false
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  }
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    return false
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  if (param11 instanceof NofibPrelude.Cons.class) {
                    param02 = param11.head;
                    param12 = param11.tail;
                    if (param02 instanceof minimax.Empty.class) {
                      if (param12 instanceof NofibPrelude.Nil.class) {
                        return true
                      } else {
                        return false
                      }
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              }
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                return false
              } else {
                return false
              }
            }
          } else {
            scrut = x1 === 3;
            if (scrut === true) {
              if (param1 instanceof NofibPrelude.Cons.class) {
                param01 = param1.head;
                param11 = param1.tail;
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param02 instanceof minimax.Empty.class) {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      return true
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              } else {
                return false
              }
            } else {
              return false
            }
          }
        }
      } else {
        scrut1 = x1 === 2;
        if (scrut1 === true) {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        } else {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        }
      }
    } else {
      scrut1 = x1 === 2;
      if (scrut1 === true) {
        if (r instanceof NofibPrelude.Cons.class) {
          param0 = r.head;
          param1 = r.tail;
          if (param1 instanceof NofibPrelude.Cons.class) {
            param01 = param1.head;
            param11 = param1.tail;
            if (param01 instanceof minimax.Empty.class) {
              if (param11 instanceof NofibPrelude.Cons.class) {
                param02 = param11.head;
                param12 = param11.tail;
                if (param12 instanceof NofibPrelude.Nil.class) {
                  return true
                } else {
                  scrut = x1 === 3;
                  if (scrut === true) {
                    if (param02 instanceof minimax.Empty.class) {
                      return false
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                }
              } else {
                scrut = x1 === 3;
                if (scrut === true) {
                  return false
                } else {
                  return false
                }
              }
            } else {
              scrut = x1 === 3;
              if (scrut === true) {
                if (param11 instanceof NofibPrelude.Cons.class) {
                  param02 = param11.head;
                  param12 = param11.tail;
                  if (param02 instanceof minimax.Empty.class) {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      return true
                    } else {
                      return false
                    }
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              } else {
                return false
              }
            }
          } else {
            scrut = x1 === 3;
            if (scrut === true) {
              return false
            } else {
              return false
            }
          }
        } else {
          scrut = x1 === 3;
          if (scrut === true) {
            return false
          } else {
            return false
          }
        }
      } else {
        scrut = x1 === 3;
        if (scrut === true) {
          if (r instanceof NofibPrelude.Cons.class) {
            param0 = r.head;
            param1 = r.tail;
            if (param1 instanceof NofibPrelude.Cons.class) {
              param01 = param1.head;
              param11 = param1.tail;
              if (param11 instanceof NofibPrelude.Cons.class) {
                param02 = param11.head;
                param12 = param11.tail;
                if (param02 instanceof minimax.Empty.class) {
                  if (param12 instanceof NofibPrelude.Nil.class) {
                    return true
                  } else {
                    return false
                  }
                } else {
                  return false
                }
              } else {
                return false
              }
            } else {
              return false
            }
          } else {
            return false
          }
        } else {
          return false
        }
      }
    }
  } 
  static empty(pos, board1) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x2, x3, x4;
    if (board1 instanceof NofibPrelude.Cons.class) {
      param0 = board1.head;
      param1 = board1.tail;
      r1 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        r2 = param01;
        if (param11 instanceof NofibPrelude.Cons.class) {
          param02 = param11.head;
          param12 = param11.tail;
          r3 = param02;
          if (param12 instanceof NofibPrelude.Nil.class) {
            if (globalThis.Array.isArray(pos) && pos.length === 2) {
              first0 = pos[0];
              first1 = pos[1];
              if (first0 === 1) {
                x4 = first1;
                return minimax.empty_(x4, r1)
              } else if (first0 === 2) {
                x3 = first1;
                return minimax.empty_(x3, r2)
              } else if (first0 === 3) {
                x2 = first1;
                return minimax.empty_(x2, r3)
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
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static placePiece(p4, board2, pos1) {
    let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x2, x3, x4, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
    tmp = minimax.empty(pos1, board2);
    scrut = Predef.not(tmp);
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      if (board2 instanceof NofibPrelude.Cons.class) {
        param0 = board2.head;
        param1 = board2.tail;
        r1 = param0;
        if (param1 instanceof NofibPrelude.Cons.class) {
          param01 = param1.head;
          param11 = param1.tail;
          r2 = param01;
          if (param11 instanceof NofibPrelude.Cons.class) {
            param02 = param11.head;
            param12 = param11.tail;
            r3 = param02;
            if (param12 instanceof NofibPrelude.Nil.class) {
              if (globalThis.Array.isArray(pos1) && pos1.length === 2) {
                first0 = pos1[0];
                first1 = pos1[1];
                if (first0 === 1) {
                  x4 = first1;
                  tmp1 = minimax.insert(p4, r1, x4);
                  tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                  tmp3 = NofibPrelude.Cons(r2, tmp2);
                  tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                  return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
                } else if (first0 === 2) {
                  x3 = first1;
                  tmp5 = minimax.insert(p4, r2, x3);
                  tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                  tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                  tmp8 = NofibPrelude.Cons(r1, tmp7);
                  return NofibPrelude.Cons(tmp8, NofibPrelude.Nil)
                } else if (first0 === 3) {
                  x2 = first1;
                  tmp9 = minimax.insert(p4, r3, x2);
                  tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                  tmp11 = NofibPrelude.Cons(r2, tmp10);
                  tmp12 = NofibPrelude.Cons(r1, tmp11);
                  return NofibPrelude.Cons(tmp12, NofibPrelude.Nil)
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
        } else {
          throw new globalThis.Error("match error");
        }
      } else {
        throw new globalThis.Error("match error");
      }
    }
  } 
  static fullBoard(b) {
    let tmp, tmp1;
    tmp = concat_inst_36_37_tsni(b);
    tmp1 = map_inst_36_39_tsni(lambda, tmp);
    return andd_inst_36_67_tsni(tmp1)
  } 
  static newPositions(piece, board3) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
    _deforest_Cons_head2 = 3;
    _deforest_Cons_tail2 = () => {
      return NofibPrelude.Nil
    };
    tmp = () => {
      return match_ls_arm_Cons_inst_40_15_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 2;
    _deforest_Cons_tail1 = tmp;
    tmp1 = () => {
      return match_ls_arm_Cons_inst_40_15_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 1;
    _deforest_Cons_tail = tmp1;
    tmp2 = () => {
      return match_ls_arm_Cons_inst_40_15_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp3 = lscomp1_inst_40_15_tsni(tmp2);
    lambda$this = runtime.safeCall(lambda1(piece, board3));
    tmp4 = map_inst_40_14_tsni(lambda$this, tmp3);
    return concat_inst_40_64_tsni(tmp4)
  } 
  static eval(x2) {
    let scrut, scrut1, tmp;
    scrut1 = x2 === 3;
    if (scrut1 === true) {
      return minimax.XWin
    } else {
      tmp = - 3;
      scrut = x2 === tmp;
      if (scrut === true) {
        return minimax.OWin
      } else {
        return runtime.safeCall(minimax.Score(x2))
      }
    }
  } 
  static interpret(x3, l) {
    let param0, param1, param01, y1, ls1, tmp;
    if (l instanceof NofibPrelude.Nil.class) {
      return runtime.safeCall(minimax.Score(x3))
    } else if (l instanceof NofibPrelude.Cons.class) {
      param0 = l.head;
      param1 = l.tail;
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        y1 = param01;
        ls1 = param1;
        tmp = x3 + y1;
        return minimax.interpret(tmp, ls1)
      } else if (param0 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (param0 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static scorePiece(p5, score) {
    if (p5 instanceof minimax.X.class) {
      return score
    } else if (p5 instanceof minimax.Empty.class) {
      return 0
    } else if (p5 instanceof minimax.O.class) {
      return - score
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static map2(f, xs, ys) {
    let param0, param1, x4, xs1, param01, param11, y1, ys1, tmp, tmp1;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x4 = param0;
      xs1 = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        y1 = param01;
        ys1 = param11;
        tmp = runtime.safeCall(f(x4, y1));
        tmp1 = minimax.map2(f, xs1, ys1);
        return NofibPrelude.Cons(tmp, tmp1)
      } else if (ys instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static score(board4, win) {
    let tmp, tmp1, tmp2;
    tmp = map2_inst_41_8_tsni(lambda2, board4, win);
    tmp1 = map_inst_41_63_tsni(NofibPrelude.sum, tmp);
    tmp2 = NofibPrelude.sum(tmp1);
    return minimax.eval(tmp2)
  } 
  static static(board5) {
    let tmp, lambda$this;
    lambda$this = runtime.safeCall(lambda_inst_42_5_tsni(board5));
    tmp = map_inst_42_9_tsni(lambda$this, minimax.wins);
    return interpret_inst_42_49_tsni(0, tmp)
  } 
  static repTree(f1, g, a) {
    let tmp, tmp1, lambda$this;
    tmp = runtime.safeCall(f1(a));
    lambda$this = runtime.safeCall(lambda4(f1, g));
    tmp1 = NofibPrelude.map(lambda$this, tmp);
    return minimax.Branch(a, tmp1)
  } 
  static mapTree(f2, t) {
    let param0, param1, a1, l1, tmp, tmp1, lambda$this;
    if (t instanceof minimax.Branch.class) {
      param0 = t.a;
      param1 = t.cs;
      a1 = param0;
      l1 = param1;
      tmp = runtime.safeCall(f2(a1));
      lambda$this = runtime.safeCall(lambda5(f2));
      tmp1 = NofibPrelude.map(lambda$this, l1);
      return minimax.Branch(tmp, tmp1)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static prune(n, t1) {
    let param0, param1, a1, l1, scrut, scrut1, tmp, lambda$this;
    if (t1 instanceof minimax.Branch.class) {
      param0 = t1.a;
      param1 = t1.cs;
      a1 = param0;
      l1 = param1;
      scrut1 = n === 0;
      if (scrut1 === true) {
        return minimax.Branch(a1, NofibPrelude.Nil)
      } else {
        scrut = n < 0;
        if (scrut === true) {
          throw globalThis.Error("Tree.prune: < 0");
        } else {
          lambda$this = runtime.safeCall(lambda6(n));
          tmp = NofibPrelude.map(lambda$this, l1);
          return minimax.Branch(a1, tmp)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static opposite(p6) {
    if (p6 instanceof minimax.X.class) {
      return minimax.O
    } else if (p6 instanceof minimax.O.class) {
      return minimax.X
    } else {
      throw globalThis.Error("opposite");
    }
  } 
  static best(f3, bs, ss) {
    let param0, param1, b1, bs1, param01, param11, s, ss1;
    if (bs instanceof NofibPrelude.Cons.class) {
      param0 = bs.head;
      param1 = bs.tail;
      b1 = param0;
      bs1 = param1;
      if (ss instanceof NofibPrelude.Cons.class) {
        param01 = ss.head;
        param11 = ss.tail;
        s = param01;
        ss1 = param11;
        return best_$(f3, b1, s, bs1, ss1)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static showMove(m) {
    let first1, first0, b1, e1, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(m) && m.length === 2) {
      first0 = m[0];
      first1 = m[1];
      b1 = first0;
      e1 = first1;
      tmp = minimax.showEvaluation(e1);
      tmp1 = NofibPrelude.nofibStringToList("\n");
      tmp2 = minimax.showBoard(b1);
      tmp3 = NofibPrelude.append(tmp1, tmp2);
      return NofibPrelude.append(tmp, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static max_(e1, e2) {
    let param0, x4, param01, y1, scrut;
    if (e1 instanceof minimax.XWin.class) {
      return minimax.XWin
    } else {
      if (e2 instanceof minimax.XWin.class) {
        return minimax.XWin
      } else if (e2 instanceof minimax.OWin.class) {
        return e1
      } else {
        if (e1 instanceof minimax.OWin.class) {
          return e2
        } else if (e1 instanceof minimax.Score.class) {
          param0 = e1.i;
          x4 = param0;
          if (e2 instanceof minimax.Score.class) {
            param01 = e2.i;
            y1 = param01;
            scrut = x4 > y1;
            if (scrut === true) {
              return runtime.safeCall(minimax.Score(x4))
            } else {
              return runtime.safeCall(minimax.Score(y1))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static min_(e11, e21) {
    let param0, x4, param01, y1, scrut;
    if (e11 instanceof minimax.OWin.class) {
      return minimax.OWin
    } else {
      if (e21 instanceof minimax.OWin.class) {
        return minimax.OWin
      } else if (e21 instanceof minimax.XWin.class) {
        return e11
      } else {
        if (e11 instanceof minimax.XWin.class) {
          return e21
        } else if (e11 instanceof minimax.Score.class) {
          param0 = e11.i;
          x4 = param0;
          if (e21 instanceof minimax.Score.class) {
            param01 = e21.i;
            y1 = param01;
            scrut = x4 < y1;
            if (scrut === true) {
              return runtime.safeCall(minimax.Score(x4))
            } else {
              return runtime.safeCall(minimax.Score(y1))
            }
          } else {
            throw new globalThis.Error("match error");
          }
        } else {
          throw new globalThis.Error("match error");
        }
      }
    }
  } 
  static mise(f4, g1, t2) {
    let param0, param1, l1, a1, tmp, tmp1, lambda$this;
    if (t2 instanceof minimax.Branch.class) {
      param0 = t2.a;
      param1 = t2.cs;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return a1
      } else {
        l1 = param1;
        tmp = runtime.safeCall(g1(minimax.OWin, minimax.XWin));
        lambda$this = runtime.safeCall(lambda_inst_43_tsni(f4, g1));
        tmp1 = map_inst_43_3_tsni(lambda$this, l1);
        return foldr_inst_43_62_tsni(f4, tmp, tmp1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static searchTree(p7, board6) {
    let tmp, lambda$this, lambda$this1;
    lambda$this = runtime.safeCall(lambda_inst_44_11_tsni(p7));
    lambda$this1 = runtime.safeCall(lambda_inst_44_16_tsni(p7));
    tmp = repTree_inst_44_19_tsni(lambda$this, lambda$this1, board6);
    return prune_inst_44_21_tsni(5, tmp)
  } 
  static cropTree(t3) {
    let param0, param1, x4, l1, param01, x5, l2, a1, tmp, tmp1;
    if (t3 instanceof minimax.Branch.class) {
      param0 = t3.a;
      param1 = t3.cs;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return minimax.Branch(a1, NofibPrelude.Nil)
      } else {
        if (param0 instanceof minimax.Score.class) {
          param01 = param0.i;
          x5 = param01;
          l2 = param1;
          tmp = runtime.safeCall(minimax.Score(x5));
          tmp1 = NofibPrelude.map(minimax.cropTree, l2);
          return minimax.Branch(tmp, tmp1)
        } else {
          x4 = param0;
          l1 = param1;
          return minimax.Branch(x4, NofibPrelude.Nil)
        }
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static bestMove(p8, f5, g2, b1) {
    let tmp, tmp1, tmp2;
    tmp = searchTree_inst_45_10_tsni(p8, b1);
    tmp1 = mapTree_inst_45_65_tsni(static_inst_45_4_tsni, tmp);
    tmp2 = minimax.cropTree(tmp1);
    return mise_inst_45_2_tsni(f5, g2, tmp2)
  } 
  static alternate(player, f6, g3, board7) {
    let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
    scrut2 = fullBoard_inst_46_47_tsni(board7);
    if (scrut2 === true) {
      return NofibPrelude.Nil
    } else {
      tmp = static_inst_46_48_tsni(board7);
      scrut1 = evaluationEq_inst_46_68_tsni(tmp, minimax.XWin);
      if (scrut1 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = static_inst_46_50_tsni(board7);
        scrut = evaluationEq_inst_46_69_tsni(tmp1, minimax.OWin);
        if (scrut === true) {
          return NofibPrelude.Nil
        } else {
          opposition = minimax.opposite(player);
          possibles = newPositions_inst_46_51_tsni(player, board7);
          lambda$this = runtime.safeCall(lambda_inst_46_52_tsni(f6, g3, opposition));
          scores = NofibPrelude.map(lambda$this, possibles);
          boardd_eval = best_inst_46_53_tsni(f6, possibles, scores);
          return runtime.safeCall(boardd_eval(f6, g3, opposition))
        }
      }
    }
  } 
  static prog(input) {
    let testBoard, game, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16;
    tmp = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(minimax.O, tmp);
    tmp2 = NofibPrelude.Cons(minimax.Empty, tmp1);
    tmp3 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp4 = NofibPrelude.Cons(minimax.X, tmp3);
    tmp5 = NofibPrelude.Cons(minimax.Empty, tmp4);
    tmp6 = NofibPrelude.Cons(minimax.Empty, NofibPrelude.Nil);
    tmp7 = NofibPrelude.Cons(minimax.Empty, tmp6);
    tmp8 = NofibPrelude.Cons(minimax.Empty, tmp7);
    tmp9 = NofibPrelude.Cons(tmp8, NofibPrelude.Nil);
    tmp10 = NofibPrelude.Cons(tmp5, tmp9);
    tmp11 = NofibPrelude.Cons(tmp2, tmp10);
    testBoard = tmp11;
    tmp12 = board$(testBoard, input);
    tmp13 = alternate_inst_55_56_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
    game = tmp13;
    tmp14 = NofibPrelude.nofibStringToList("OXO\n");
    tmp15 = map_inst_55_57_tsni(showMove_inst_55_71_tsni, game);
    tmp16 = concat_inst_55_60_tsni(tmp15);
    return NofibPrelude.append(tmp14, tmp16)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_58_59_tsni("180000");
    return nofibListToString_inst_58_72_tsni(tmp)
  }
  static toString() { return "minimax"; }
});
let minimax = minimax1; export default minimax;
