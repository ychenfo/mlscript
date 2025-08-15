import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let lscomp2, lscomp1, best_, board, minimax1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$, lscomp2$, lambda$1, lambda$2, lambda$3, lambda$4, best_$, lambda$5, lambda$6, lambda$7, lambda$8, board$, bestMove_inst_0_1_tsni, mise_inst_0_1_2_tsni, lambda_inst_0_1_2_tsni, lambda$_inst_0_1_2_tsni, map_inst_0_1_2_3_tsni, cropTree_inst_0_1_4_tsni, static_inst_0_1_5_tsni, lambda_inst_0_1_5_6_tsni, lambda$_inst_0_1_5_6_7_tsni, score_inst_0_1_5_6_7_8_tsni, map2_inst_0_1_5_6_7_8_9_tsni, map_inst_0_1_5_10_tsni, eval_inst_0_1_5_6_7_8_11_tsni, searchTree_inst_0_1_12_tsni, lambda_inst_0_1_12_13_tsni, lambda$_inst_0_1_12_13_14_tsni, newPositions_inst_0_1_12_13_14_15_tsni, map_inst_0_1_12_13_14_15_16_tsni, lambda_inst_0_1_12_13_14_15_17_tsni, lambda$_inst_0_1_12_13_14_15_17_18_tsni, placePiece_inst_0_1_12_13_14_15_17_18_19_tsni, lscomp1_inst_0_1_12_13_14_15_20_tsni, lscomp2$_inst_0_1_12_13_14_15_20_tsni, lambda_inst_0_1_12_21_tsni, lambda$_inst_0_1_12_21_22_tsni, newPositions_inst_0_1_12_21_22_23_tsni, map_inst_0_1_12_21_22_23_16_tsni, lambda_inst_0_1_12_21_22_23_17_tsni, lambda$_inst_0_1_12_21_22_23_17_18_tsni, placePiece_inst_0_1_12_21_22_23_17_18_19_tsni, lscomp1_inst_0_1_12_21_22_23_20_tsni, lscomp2$_inst_0_1_12_21_22_23_20_tsni, concat_inst_0_1_12_13_14_15_24_tsni, append_inst_0_1_12_13_14_15_24_25_tsni, concat_inst_0_1_12_21_22_23_24_tsni, append_inst_0_1_12_21_22_23_24_25_tsni, repTree_inst_0_1_12_26_tsni, lambda_inst_0_1_12_26_tsni, lambda$_inst_0_1_12_26_tsni, map_inst_0_1_12_26_27_tsni, prune_inst_0_1_12_28_tsni, lambda_inst_0_1_12_28_tsni, lambda$_inst_0_1_12_28_tsni, map_inst_0_1_12_28_29_tsni, lambda$_inst_30_31_tsni, bestMove_inst_30_31_1_tsni, searchTree_inst_30_31_1_12_tsni, repTree_inst_30_31_1_12_26_tsni, lambda_inst_30_31_1_12_26_tsni, lambda$_inst_30_31_1_12_26_tsni, map_inst_30_31_1_12_26_27_tsni, lambda_inst_30_31_1_12_21_tsni, lambda$_inst_30_31_1_12_21_22_tsni, newPositions_inst_30_31_1_12_21_22_23_tsni, lscomp1_inst_30_31_1_12_21_22_23_20_tsni, lscomp2$_inst_30_31_1_12_21_22_23_20_tsni, map_inst_30_31_1_12_21_22_23_16_tsni, lambda_inst_30_31_1_12_21_22_23_17_tsni, lambda$_inst_30_31_1_12_21_22_23_17_18_tsni, placePiece_inst_30_31_1_12_21_22_23_17_18_19_tsni, concat_inst_30_31_1_12_21_22_23_24_tsni, append_inst_30_31_1_12_21_22_23_24_25_tsni, lambda_inst_30_31_1_12_13_tsni, lambda$_inst_30_31_1_12_13_14_tsni, newPositions_inst_30_31_1_12_13_14_15_tsni, lscomp1_inst_30_31_1_12_13_14_15_20_tsni, lscomp2$_inst_30_31_1_12_13_14_15_20_tsni, map_inst_30_31_1_12_13_14_15_16_tsni, lambda_inst_30_31_1_12_13_14_15_17_tsni, lambda$_inst_30_31_1_12_13_14_15_17_18_tsni, placePiece_inst_30_31_1_12_13_14_15_17_18_19_tsni, concat_inst_30_31_1_12_13_14_15_24_tsni, append_inst_30_31_1_12_13_14_15_24_25_tsni, static_inst_30_31_1_5_tsni, map_inst_30_31_1_5_10_tsni, lambda_inst_30_31_1_5_6_tsni, lambda$_inst_30_31_1_5_6_7_tsni, score_inst_30_31_1_5_6_7_8_tsni, map2_inst_30_31_1_5_6_7_8_9_tsni, eval_inst_30_31_1_5_6_7_8_11_tsni, prune_inst_30_31_1_12_28_tsni, lambda_inst_30_31_1_12_28_tsni, lambda$_inst_30_31_1_12_28_tsni, map_inst_30_31_1_12_28_29_tsni, mise_inst_30_31_1_2_tsni, lambda_inst_30_31_1_2_tsni, lambda$_inst_30_31_1_2_tsni, map_inst_30_31_1_2_3_tsni, cropTree_inst_30_31_1_4_tsni, newPositions_inst_32_15_tsni, map_inst_32_15_16_tsni, lambda_inst_32_15_17_tsni, lambda$_inst_32_15_17_18_tsni, placePiece_inst_32_15_17_18_19_tsni, lscomp1_inst_32_15_20_tsni, lscomp2$_inst_32_15_20_tsni, lambda$_inst_33_14_tsni, newPositions_inst_33_14_15_tsni, lscomp1_inst_33_14_15_20_tsni, lscomp2$_inst_33_14_15_20_tsni, map_inst_33_14_15_16_tsni, lambda_inst_33_14_15_17_tsni, lambda$_inst_33_14_15_17_18_tsni, placePiece_inst_33_14_15_17_18_19_tsni, newPositions_inst_34_23_tsni, map_inst_34_23_16_tsni, lambda_inst_34_23_17_tsni, lambda$_inst_34_23_17_18_tsni, placePiece_inst_34_23_17_18_19_tsni, lscomp1_inst_34_23_20_tsni, lscomp2$_inst_34_23_20_tsni, lambda$_inst_35_22_tsni, newPositions_inst_35_22_23_tsni, lscomp1_inst_35_22_23_20_tsni, lscomp2$_inst_35_22_23_20_tsni, map_inst_35_22_23_16_tsni, lambda_inst_35_22_23_17_tsni, lambda$_inst_35_22_23_17_18_tsni, placePiece_inst_35_22_23_17_18_19_tsni, mise_inst_36_tsni, lambda_inst_36_tsni, map_inst_36_3_tsni, mise_inst_37_tsni, lambda$_inst_37_tsni, map_inst_37_3_tsni, score_inst_38_8_tsni, map2_inst_38_8_9_tsni, lambda$_inst_39_7_tsni, score_inst_39_7_8_tsni, map2_inst_39_7_8_9_tsni, lscomp2$_inst_40_tsni, concat_inst_41_42_tsni, append_inst_41_42_25_tsni, map_inst_41_43_tsni, lscomp1_inst_44_20_tsni, lscomp2$_inst_44_20_tsni, map_inst_44_16_tsni, lambda_inst_44_17_tsni, lambda$_inst_44_17_18_tsni, placePiece_inst_44_17_18_19_tsni, map2_inst_45_9_tsni, lambda_inst_46_6_tsni, lambda$_inst_46_6_7_tsni, score_inst_46_6_7_8_tsni, map2_inst_46_6_7_8_9_tsni, map_inst_46_10_tsni, eval_inst_46_6_7_8_11_tsni, lambda_inst_47_tsni, lambda$_inst_47_tsni, map_inst_47_3_tsni, lambda_inst_48_13_tsni, lambda$_inst_48_13_14_tsni, newPositions_inst_48_13_14_15_tsni, map_inst_48_13_14_15_16_tsni, lambda_inst_48_13_14_15_17_tsni, lambda$_inst_48_13_14_15_17_18_tsni, placePiece_inst_48_13_14_15_17_18_19_tsni, lscomp1_inst_48_13_14_15_20_tsni, lscomp2$_inst_48_13_14_15_20_tsni, lambda_inst_48_21_tsni, lambda$_inst_48_21_22_tsni, newPositions_inst_48_21_22_23_tsni, map_inst_48_21_22_23_16_tsni, lambda_inst_48_21_22_23_17_tsni, lambda$_inst_48_21_22_23_17_18_tsni, placePiece_inst_48_21_22_23_17_18_19_tsni, lscomp1_inst_48_21_22_23_20_tsni, lscomp2$_inst_48_21_22_23_20_tsni, concat_inst_48_13_14_15_24_tsni, append_inst_48_13_14_15_24_25_tsni, concat_inst_48_21_22_23_24_tsni, append_inst_48_21_22_23_24_25_tsni, repTree_inst_48_26_tsni, lambda_inst_48_26_tsni, lambda$_inst_48_26_tsni, map_inst_48_26_27_tsni, searchTree_inst_49_12_tsni, repTree_inst_49_12_26_tsni, lambda_inst_49_12_26_tsni, lambda$_inst_49_12_26_tsni, map_inst_49_12_26_27_tsni, lambda_inst_49_12_21_tsni, lambda$_inst_49_12_21_22_tsni, newPositions_inst_49_12_21_22_23_tsni, lscomp1_inst_49_12_21_22_23_20_tsni, lscomp2$_inst_49_12_21_22_23_20_tsni, map_inst_49_12_21_22_23_16_tsni, lambda_inst_49_12_21_22_23_17_tsni, lambda$_inst_49_12_21_22_23_17_18_tsni, placePiece_inst_49_12_21_22_23_17_18_19_tsni, concat_inst_49_12_21_22_23_24_tsni, append_inst_49_12_21_22_23_24_25_tsni, lambda_inst_49_12_13_tsni, lambda$_inst_49_12_13_14_tsni, newPositions_inst_49_12_13_14_15_tsni, lscomp1_inst_49_12_13_14_15_20_tsni, lscomp2$_inst_49_12_13_14_15_20_tsni, map_inst_49_12_13_14_15_16_tsni, lambda_inst_49_12_13_14_15_17_tsni, lambda$_inst_49_12_13_14_15_17_18_tsni, placePiece_inst_49_12_13_14_15_17_18_19_tsni, concat_inst_49_12_13_14_15_24_tsni, append_inst_49_12_13_14_15_24_25_tsni, static_inst_49_5_tsni, map_inst_49_5_10_tsni, lambda_inst_49_5_6_tsni, lambda$_inst_49_5_6_7_tsni, score_inst_49_5_6_7_8_tsni, map2_inst_49_5_6_7_8_9_tsni, eval_inst_49_5_6_7_8_11_tsni, prune_inst_49_12_28_tsni, lambda_inst_49_12_28_tsni, lambda$_inst_49_12_28_tsni, map_inst_49_12_28_29_tsni, mise_inst_49_2_tsni, lambda_inst_49_2_tsni, lambda$_inst_49_2_tsni, map_inst_49_2_3_tsni, cropTree_inst_49_4_tsni, fullBoard_inst_50_51_tsni, map_inst_50_51_43_tsni, concat_inst_50_51_42_tsni, append_inst_50_51_42_25_tsni, static_inst_50_52_tsni, map_inst_50_52_10_tsni, lambda_inst_50_52_6_tsni, lambda$_inst_50_52_6_7_tsni, score_inst_50_52_6_7_8_tsni, map2_inst_50_52_6_7_8_9_tsni, eval_inst_50_52_6_7_8_11_tsni, interpret_inst_50_52_53_tsni, static_inst_50_54_tsni, map_inst_50_54_10_tsni, lambda_inst_50_54_6_tsni, lambda$_inst_50_54_6_7_tsni, score_inst_50_54_6_7_8_tsni, map2_inst_50_54_6_7_8_9_tsni, eval_inst_50_54_6_7_8_11_tsni, interpret_inst_50_54_53_tsni, newPositions_inst_50_55_tsni, map_inst_50_55_16_tsni, lambda_inst_50_55_17_tsni, lambda$_inst_50_55_17_18_tsni, placePiece_inst_50_55_17_18_19_tsni, lscomp1_inst_50_55_20_tsni, lscomp2$_inst_50_55_20_tsni, lambda_inst_50_56_tsni, lambda$_inst_50_56_31_tsni, bestMove_inst_50_56_31_1_tsni, mise_inst_50_56_31_1_2_tsni, lambda_inst_50_56_31_1_2_tsni, lambda$_inst_50_56_31_1_2_tsni, map_inst_50_56_31_1_2_3_tsni, cropTree_inst_50_56_31_1_4_tsni, static_inst_50_56_31_1_5_tsni, lambda_inst_50_56_31_1_5_6_tsni, lambda$_inst_50_56_31_1_5_6_7_tsni, score_inst_50_56_31_1_5_6_7_8_tsni, map2_inst_50_56_31_1_5_6_7_8_9_tsni, map_inst_50_56_31_1_5_10_tsni, eval_inst_50_56_31_1_5_6_7_8_11_tsni, searchTree_inst_50_56_31_1_12_tsni, lambda_inst_50_56_31_1_12_13_tsni, lambda$_inst_50_56_31_1_12_13_14_tsni, newPositions_inst_50_56_31_1_12_13_14_15_tsni, map_inst_50_56_31_1_12_13_14_15_16_tsni, lambda_inst_50_56_31_1_12_13_14_15_17_tsni, lambda$_inst_50_56_31_1_12_13_14_15_17_18_tsni, placePiece_inst_50_56_31_1_12_13_14_15_17_18_19_tsni, lscomp1_inst_50_56_31_1_12_13_14_15_20_tsni, lscomp2$_inst_50_56_31_1_12_13_14_15_20_tsni, lambda_inst_50_56_31_1_12_21_tsni, lambda$_inst_50_56_31_1_12_21_22_tsni, newPositions_inst_50_56_31_1_12_21_22_23_tsni, map_inst_50_56_31_1_12_21_22_23_16_tsni, lambda_inst_50_56_31_1_12_21_22_23_17_tsni, lambda$_inst_50_56_31_1_12_21_22_23_17_18_tsni, placePiece_inst_50_56_31_1_12_21_22_23_17_18_19_tsni, lscomp1_inst_50_56_31_1_12_21_22_23_20_tsni, lscomp2$_inst_50_56_31_1_12_21_22_23_20_tsni, concat_inst_50_56_31_1_12_13_14_15_24_tsni, append_inst_50_56_31_1_12_13_14_15_24_25_tsni, concat_inst_50_56_31_1_12_21_22_23_24_tsni, append_inst_50_56_31_1_12_21_22_23_24_25_tsni, repTree_inst_50_56_31_1_12_26_tsni, lambda_inst_50_56_31_1_12_26_tsni, lambda$_inst_50_56_31_1_12_26_tsni, map_inst_50_56_31_1_12_26_27_tsni, prune_inst_50_56_31_1_12_28_tsni, lambda_inst_50_56_31_1_12_28_tsni, lambda$_inst_50_56_31_1_12_28_tsni, map_inst_50_56_31_1_12_28_29_tsni, best_inst_50_57_tsni, best_$_inst_50_57_58_tsni, alternate_inst_59_60_tsni, best_inst_59_60_57_tsni, best_$_inst_59_60_57_58_tsni, lambda_inst_59_60_56_tsni, lambda$_inst_59_60_56_31_tsni, bestMove_inst_59_60_56_31_1_tsni, searchTree_inst_59_60_56_31_1_12_tsni, repTree_inst_59_60_56_31_1_12_26_tsni, lambda_inst_59_60_56_31_1_12_26_tsni, lambda$_inst_59_60_56_31_1_12_26_tsni, map_inst_59_60_56_31_1_12_26_27_tsni, lambda_inst_59_60_56_31_1_12_21_tsni, lambda$_inst_59_60_56_31_1_12_21_22_tsni, newPositions_inst_59_60_56_31_1_12_21_22_23_tsni, lscomp1_inst_59_60_56_31_1_12_21_22_23_20_tsni, lscomp2$_inst_59_60_56_31_1_12_21_22_23_20_tsni, map_inst_59_60_56_31_1_12_21_22_23_16_tsni, lambda_inst_59_60_56_31_1_12_21_22_23_17_tsni, lambda$_inst_59_60_56_31_1_12_21_22_23_17_18_tsni, placePiece_inst_59_60_56_31_1_12_21_22_23_17_18_19_tsni, concat_inst_59_60_56_31_1_12_21_22_23_24_tsni, append_inst_59_60_56_31_1_12_21_22_23_24_25_tsni, lambda_inst_59_60_56_31_1_12_13_tsni, lambda$_inst_59_60_56_31_1_12_13_14_tsni, newPositions_inst_59_60_56_31_1_12_13_14_15_tsni, lscomp1_inst_59_60_56_31_1_12_13_14_15_20_tsni, lscomp2$_inst_59_60_56_31_1_12_13_14_15_20_tsni, map_inst_59_60_56_31_1_12_13_14_15_16_tsni, lambda_inst_59_60_56_31_1_12_13_14_15_17_tsni, lambda$_inst_59_60_56_31_1_12_13_14_15_17_18_tsni, placePiece_inst_59_60_56_31_1_12_13_14_15_17_18_19_tsni, concat_inst_59_60_56_31_1_12_13_14_15_24_tsni, append_inst_59_60_56_31_1_12_13_14_15_24_25_tsni, static_inst_59_60_56_31_1_5_tsni, map_inst_59_60_56_31_1_5_10_tsni, lambda_inst_59_60_56_31_1_5_6_tsni, lambda$_inst_59_60_56_31_1_5_6_7_tsni, score_inst_59_60_56_31_1_5_6_7_8_tsni, map2_inst_59_60_56_31_1_5_6_7_8_9_tsni, eval_inst_59_60_56_31_1_5_6_7_8_11_tsni, prune_inst_59_60_56_31_1_12_28_tsni, lambda_inst_59_60_56_31_1_12_28_tsni, lambda$_inst_59_60_56_31_1_12_28_tsni, map_inst_59_60_56_31_1_12_28_29_tsni, mise_inst_59_60_56_31_1_2_tsni, lambda_inst_59_60_56_31_1_2_tsni, lambda$_inst_59_60_56_31_1_2_tsni, map_inst_59_60_56_31_1_2_3_tsni, cropTree_inst_59_60_56_31_1_4_tsni, newPositions_inst_59_60_55_tsni, lscomp1_inst_59_60_55_20_tsni, lscomp2$_inst_59_60_55_20_tsni, map_inst_59_60_55_16_tsni, lambda_inst_59_60_55_17_tsni, lambda$_inst_59_60_55_17_18_tsni, placePiece_inst_59_60_55_17_18_19_tsni, static_inst_59_60_54_tsni, lambda_inst_59_60_54_6_tsni, lambda$_inst_59_60_54_6_7_tsni, score_inst_59_60_54_6_7_8_tsni, map2_inst_59_60_54_6_7_8_9_tsni, map_inst_59_60_54_10_tsni, eval_inst_59_60_54_6_7_8_11_tsni, interpret_inst_59_60_54_53_tsni, static_inst_59_60_52_tsni, lambda_inst_59_60_52_6_tsni, lambda$_inst_59_60_52_6_7_tsni, score_inst_59_60_52_6_7_8_tsni, map2_inst_59_60_52_6_7_8_9_tsni, map_inst_59_60_52_10_tsni, eval_inst_59_60_52_6_7_8_11_tsni, interpret_inst_59_60_52_53_tsni, fullBoard_inst_59_60_51_tsni, concat_inst_59_60_51_42_tsni, append_inst_59_60_51_42_25_tsni, map_inst_59_60_51_43_tsni, map_inst_59_61_tsni, prog_inst_62_63_tsni, map_inst_62_63_61_tsni, alternate_inst_62_63_60_tsni, fullBoard_inst_62_63_60_51_tsni, map_inst_62_63_60_51_43_tsni, concat_inst_62_63_60_51_42_tsni, append_inst_62_63_60_51_42_25_tsni, static_inst_62_63_60_52_tsni, map_inst_62_63_60_52_10_tsni, lambda_inst_62_63_60_52_6_tsni, lambda$_inst_62_63_60_52_6_7_tsni, score_inst_62_63_60_52_6_7_8_tsni, map2_inst_62_63_60_52_6_7_8_9_tsni, eval_inst_62_63_60_52_6_7_8_11_tsni, interpret_inst_62_63_60_52_53_tsni, static_inst_62_63_60_54_tsni, map_inst_62_63_60_54_10_tsni, lambda_inst_62_63_60_54_6_tsni, lambda$_inst_62_63_60_54_6_7_tsni, score_inst_62_63_60_54_6_7_8_tsni, map2_inst_62_63_60_54_6_7_8_9_tsni, eval_inst_62_63_60_54_6_7_8_11_tsni, interpret_inst_62_63_60_54_53_tsni, newPositions_inst_62_63_60_55_tsni, map_inst_62_63_60_55_16_tsni, lambda_inst_62_63_60_55_17_tsni, lambda$_inst_62_63_60_55_17_18_tsni, placePiece_inst_62_63_60_55_17_18_19_tsni, lscomp1_inst_62_63_60_55_20_tsni, lscomp2$_inst_62_63_60_55_20_tsni, lambda_inst_62_63_60_56_tsni, lambda$_inst_62_63_60_56_31_tsni, bestMove_inst_62_63_60_56_31_1_tsni, mise_inst_62_63_60_56_31_1_2_tsni, lambda_inst_62_63_60_56_31_1_2_tsni, lambda$_inst_62_63_60_56_31_1_2_tsni, map_inst_62_63_60_56_31_1_2_3_tsni, cropTree_inst_62_63_60_56_31_1_4_tsni, static_inst_62_63_60_56_31_1_5_tsni, lambda_inst_62_63_60_56_31_1_5_6_tsni, lambda$_inst_62_63_60_56_31_1_5_6_7_tsni, score_inst_62_63_60_56_31_1_5_6_7_8_tsni, map2_inst_62_63_60_56_31_1_5_6_7_8_9_tsni, map_inst_62_63_60_56_31_1_5_10_tsni, eval_inst_62_63_60_56_31_1_5_6_7_8_11_tsni, searchTree_inst_62_63_60_56_31_1_12_tsni, lambda_inst_62_63_60_56_31_1_12_13_tsni, lambda$_inst_62_63_60_56_31_1_12_13_14_tsni, newPositions_inst_62_63_60_56_31_1_12_13_14_15_tsni, map_inst_62_63_60_56_31_1_12_13_14_15_16_tsni, lambda_inst_62_63_60_56_31_1_12_13_14_15_17_tsni, lambda$_inst_62_63_60_56_31_1_12_13_14_15_17_18_tsni, placePiece_inst_62_63_60_56_31_1_12_13_14_15_17_18_19_tsni, lscomp1_inst_62_63_60_56_31_1_12_13_14_15_20_tsni, lscomp2$_inst_62_63_60_56_31_1_12_13_14_15_20_tsni, lambda_inst_62_63_60_56_31_1_12_21_tsni, lambda$_inst_62_63_60_56_31_1_12_21_22_tsni, newPositions_inst_62_63_60_56_31_1_12_21_22_23_tsni, map_inst_62_63_60_56_31_1_12_21_22_23_16_tsni, lambda_inst_62_63_60_56_31_1_12_21_22_23_17_tsni, lambda$_inst_62_63_60_56_31_1_12_21_22_23_17_18_tsni, placePiece_inst_62_63_60_56_31_1_12_21_22_23_17_18_19_tsni, lscomp1_inst_62_63_60_56_31_1_12_21_22_23_20_tsni, lscomp2$_inst_62_63_60_56_31_1_12_21_22_23_20_tsni, concat_inst_62_63_60_56_31_1_12_13_14_15_24_tsni, append_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni, concat_inst_62_63_60_56_31_1_12_21_22_23_24_tsni, append_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni, repTree_inst_62_63_60_56_31_1_12_26_tsni, lambda_inst_62_63_60_56_31_1_12_26_tsni, lambda$_inst_62_63_60_56_31_1_12_26_tsni, map_inst_62_63_60_56_31_1_12_26_27_tsni, prune_inst_62_63_60_56_31_1_12_28_tsni, lambda_inst_62_63_60_56_31_1_12_28_tsni, lambda$_inst_62_63_60_56_31_1_12_28_tsni, map_inst_62_63_60_56_31_1_12_28_29_tsni, best_inst_62_63_60_57_tsni, best_$_inst_62_63_60_57_58_tsni, concat_inst_62_63_64_tsni, append_inst_62_63_64_25_tsni, append_inst_62_63_65_tsni, foldr_inst_0_1_2_66_tsni, map_inst_0_1_5_6_7_8_67_tsni, interpret_inst_0_1_5_53_tsni, mapTree_inst_0_1_68_tsni, lambda_inst_0_1_68_tsni, lambda$_inst_0_1_68_tsni, map_inst_0_1_68_69_tsni, interpret_inst_30_31_1_5_53_tsni, map_inst_30_31_1_5_6_7_8_67_tsni, mapTree_inst_30_31_1_68_tsni, lambda_inst_30_31_1_68_tsni, lambda$_inst_30_31_1_68_tsni, map_inst_30_31_1_68_69_tsni, foldr_inst_30_31_1_2_66_tsni, concat_inst_32_15_24_tsni, append_inst_32_15_24_25_tsni, concat_inst_33_14_15_24_tsni, append_inst_33_14_15_24_25_tsni, concat_inst_34_23_24_tsni, append_inst_34_23_24_25_tsni, concat_inst_35_22_23_24_tsni, append_inst_35_22_23_24_25_tsni, foldr_inst_36_66_tsni, foldr_inst_37_66_tsni, map_inst_38_8_67_tsni, map_inst_39_7_8_67_tsni, andd_inst_41_70_tsni, concat_inst_44_24_tsni, append_inst_44_24_25_tsni, map_inst_45_67_tsni, map_inst_46_6_7_8_67_tsni, interpret_inst_46_53_tsni, foldr_inst_47_66_tsni, prune_inst_48_28_tsni, lambda_inst_48_28_tsni, lambda$_inst_48_28_tsni, map_inst_48_28_29_tsni, interpret_inst_49_5_53_tsni, map_inst_49_5_6_7_8_67_tsni, mapTree_inst_49_68_tsni, lambda_inst_49_68_tsni, lambda$_inst_49_68_tsni, map_inst_49_68_69_tsni, foldr_inst_49_2_66_tsni, andd_inst_50_51_70_tsni, map_inst_50_52_6_7_8_67_tsni, evaluationEq_inst_50_71_tsni, map_inst_50_54_6_7_8_67_tsni, evaluationEq_inst_50_72_tsni, concat_inst_50_55_24_tsni, append_inst_50_55_24_25_tsni, foldr_inst_50_56_31_1_2_66_tsni, map_inst_50_56_31_1_5_6_7_8_67_tsni, interpret_inst_50_56_31_1_5_53_tsni, mapTree_inst_50_56_31_1_68_tsni, lambda_inst_50_56_31_1_68_tsni, lambda$_inst_50_56_31_1_68_tsni, map_inst_50_56_31_1_68_69_tsni, interpret_inst_59_60_56_31_1_5_53_tsni, map_inst_59_60_56_31_1_5_6_7_8_67_tsni, mapTree_inst_59_60_56_31_1_68_tsni, lambda_inst_59_60_56_31_1_68_tsni, lambda$_inst_59_60_56_31_1_68_tsni, map_inst_59_60_56_31_1_68_69_tsni, foldr_inst_59_60_56_31_1_2_66_tsni, concat_inst_59_60_55_24_tsni, append_inst_59_60_55_24_25_tsni, map_inst_59_60_54_6_7_8_67_tsni, evaluationEq_inst_59_60_72_tsni, map_inst_59_60_52_6_7_8_67_tsni, evaluationEq_inst_59_60_71_tsni, andd_inst_59_60_51_70_tsni, showMove_inst_59_73_tsni, concat_inst_59_64_tsni, andd_inst_62_63_60_51_70_tsni, map_inst_62_63_60_52_6_7_8_67_tsni, evaluationEq_inst_62_63_60_71_tsni, map_inst_62_63_60_54_6_7_8_67_tsni, evaluationEq_inst_62_63_60_72_tsni, concat_inst_62_63_60_55_24_tsni, append_inst_62_63_60_55_24_25_tsni, foldr_inst_62_63_60_56_31_1_2_66_tsni, map_inst_62_63_60_56_31_1_5_6_7_8_67_tsni, interpret_inst_62_63_60_56_31_1_5_53_tsni, mapTree_inst_62_63_60_56_31_1_68_tsni, lambda_inst_62_63_60_56_31_1_68_tsni, lambda$_inst_62_63_60_56_31_1_68_tsni, map_inst_62_63_60_56_31_1_68_69_tsni, showMove_inst_62_63_73_tsni, nofibListToString_inst_62_74_tsni, match_t_arm_Branch_inst_0_1_2_tsni, match_xs_arm_Nil_inst_0_1_5_6_7_8_67_tsni, match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni, match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni, match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni1, match_xs_arm_Nil_inst_0_1_12_26_27_tsni, match_xs_arm_Cons_inst_0_1_12_26_27_tsni, match_t_arm_Branch_inst_0_1_68_tsni, match_xs_arm_Nil_inst_0_1_68_69_tsni, match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni1, match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_30_31_1_12_26_27_tsni, match_xs_arm_Cons_inst_30_31_1_12_26_27_tsni, match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_30_31_1_5_6_7_8_67_tsni, match_t_arm_Branch_inst_30_31_1_68_tsni, match_xs_arm_Nil_inst_30_31_1_68_69_tsni, match_t_arm_Branch_inst_30_31_1_2_tsni, match_xs_arm_Cons_inst_32_15_24_25_tsni, match_xs_arm_Nil_inst_32_15_24_25_tsni, match_ls_arm_Cons_inst_32_15_20_tsni, match_ls_arm_Cons_inst_32_15_20_tsni1, match_ls_arm_Cons_inst_33_14_15_20_tsni, match_ls_arm_Cons_inst_33_14_15_20_tsni1, match_xs_arm_Cons_inst_33_14_15_24_25_tsni, match_xs_arm_Nil_inst_33_14_15_24_25_tsni, match_xs_arm_Cons_inst_34_23_24_25_tsni, match_xs_arm_Nil_inst_34_23_24_25_tsni, match_ls_arm_Cons_inst_34_23_20_tsni, match_ls_arm_Cons_inst_34_23_20_tsni1, match_ls_arm_Cons_inst_35_22_23_20_tsni, match_ls_arm_Cons_inst_35_22_23_20_tsni1, match_xs_arm_Cons_inst_35_22_23_24_25_tsni, match_xs_arm_Nil_inst_35_22_23_24_25_tsni, match_xs_arm_Nil_inst_38_8_67_tsni, match_xs_arm_Nil_inst_39_7_8_67_tsni, match_ls_arm_Cons_inst_40_tsni, match_ls_arm_Cons_inst_44_20_tsni, match_ls_arm_Cons_inst_44_20_tsni1, match_xs_arm_Cons_inst_44_24_25_tsni, match_xs_arm_Nil_inst_44_24_25_tsni, match_xs_arm_Nil_inst_45_67_tsni, match_xs_arm_Nil_inst_46_6_7_8_67_tsni, match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni, match_ls_arm_Cons_inst_48_13_14_15_20_tsni, match_ls_arm_Cons_inst_48_13_14_15_20_tsni1, match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni, match_ls_arm_Cons_inst_48_21_22_23_20_tsni, match_ls_arm_Cons_inst_48_21_22_23_20_tsni1, match_xs_arm_Nil_inst_48_26_27_tsni, match_xs_arm_Cons_inst_48_26_27_tsni, match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni1, match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_49_12_26_27_tsni, match_xs_arm_Cons_inst_49_12_26_27_tsni, match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_49_5_6_7_8_67_tsni, match_t_arm_Branch_inst_49_68_tsni, match_xs_arm_Nil_inst_49_68_69_tsni, match_t_arm_Branch_inst_49_2_tsni, match_xs_arm_Nil_inst_50_52_6_7_8_67_tsni, match_xs_arm_Nil_inst_50_54_6_7_8_67_tsni, match_xs_arm_Cons_inst_50_55_24_25_tsni, match_xs_arm_Nil_inst_50_55_24_25_tsni, match_ls_arm_Cons_inst_50_55_20_tsni, match_ls_arm_Cons_inst_50_55_20_tsni1, match_t_arm_Branch_inst_50_56_31_1_2_tsni, match_xs_arm_Nil_inst_50_56_31_1_5_6_7_8_67_tsni, match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni, match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni, match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni1, match_xs_arm_Nil_inst_50_56_31_1_12_26_27_tsni, match_xs_arm_Cons_inst_50_56_31_1_12_26_27_tsni, match_t_arm_Branch_inst_50_56_31_1_68_tsni, match_xs_arm_Nil_inst_50_56_31_1_68_69_tsni, match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni1, match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_59_60_56_31_1_12_26_27_tsni, match_xs_arm_Cons_inst_59_60_56_31_1_12_26_27_tsni, match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_59_60_56_31_1_5_6_7_8_67_tsni, match_t_arm_Branch_inst_59_60_56_31_1_68_tsni, match_xs_arm_Nil_inst_59_60_56_31_1_68_69_tsni, match_t_arm_Branch_inst_59_60_56_31_1_2_tsni, match_ls_arm_Cons_inst_59_60_55_20_tsni, match_ls_arm_Cons_inst_59_60_55_20_tsni1, match_xs_arm_Cons_inst_59_60_55_24_25_tsni, match_xs_arm_Nil_inst_59_60_55_24_25_tsni, match_xs_arm_Nil_inst_59_60_54_6_7_8_67_tsni, match_xs_arm_Nil_inst_59_60_52_6_7_8_67_tsni, match_xs_arm_Nil_inst_59_61_tsni, match_xs_arm_Nil_inst_62_63_60_52_6_7_8_67_tsni, match_xs_arm_Nil_inst_62_63_60_54_6_7_8_67_tsni, match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni, match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni, match_ls_arm_Cons_inst_62_63_60_55_20_tsni, match_ls_arm_Cons_inst_62_63_60_55_20_tsni1, match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni, match_xs_arm_Nil_inst_62_63_60_56_31_1_5_6_7_8_67_tsni, match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni, match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni, match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni, match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni1, match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni, match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni, match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni, match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni1, match_xs_arm_Nil_inst_62_63_60_56_31_1_12_26_27_tsni, match_xs_arm_Cons_inst_62_63_60_56_31_1_12_26_27_tsni, match_t_arm_Branch_inst_62_63_60_56_31_1_68_tsni, match_xs_arm_Nil_inst_62_63_60_56_31_1_68_69_tsni, match_xs_arm_Nil_inst_62_63_61_tsni, match_ls_arm_Cons_inst_62_74_tsni;
match_t_arm_Branch_inst_0_1_2_tsni = function match_t_arm_Branch_inst_0_1_2_tsni(f, g, _deforest_Branch_a_inst_0_1_2_tsni, _deforest_Branch_cs_inst_0_1_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_0_1_2_tsni;
  param1 = _deforest_Branch_cs_inst_0_1_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_0_1_2_tsni(f, g));
    tmp1 = map_inst_0_1_2_3_tsni(lambda$this, l);
    return foldr_inst_0_1_2_66_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_0_1_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_0_1_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_0_1_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_0_1_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_0_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_0_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_0_1_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_0_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_0_1_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni(_deforest_Cons_head_inst_0_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_0_1_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_0_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_0_1_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_0_1_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_0_1_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_0_1_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_0_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_0_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_0_1_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_0_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_0_1_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni(_deforest_Cons_head_inst_0_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_0_1_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_0_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_0_1_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_0_1_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_0_1_12_26_27_tsni = function match_xs_arm_Nil_inst_0_1_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_0_1_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_0_1_12_26_27_tsni = function match_xs_arm_Cons_inst_0_1_12_26_27_tsni(f, _deforest_Cons_head_inst_0_1_12_26_27_tsni, _deforest_Cons_tail_inst_0_1_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_0_1_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_0_1_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_0_1_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_t_arm_Branch_inst_0_1_68_tsni = function match_t_arm_Branch_inst_0_1_68_tsni(f, _deforest_Branch_a_inst_0_1_68_tsni, _deforest_Branch_cs_inst_0_1_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_0_1_68_tsni;
  param1 = _deforest_Branch_cs_inst_0_1_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_0_1_68_tsni(f));
  tmp1 = map_inst_0_1_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_0_1_68_69_tsni = function match_xs_arm_Nil_inst_0_1_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_30_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_30_31_1_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_30_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_30_31_1_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni(_deforest_Cons_head_inst_30_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_30_31_1_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_30_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_30_31_1_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_30_31_1_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_30_31_1_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_30_31_1_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_31_1_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_30_31_1_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_30_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_30_31_1_12_26_27_tsni = function match_xs_arm_Nil_inst_30_31_1_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_30_31_1_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_30_31_1_12_26_27_tsni = function match_xs_arm_Cons_inst_30_31_1_12_26_27_tsni(f, _deforest_Cons_head_inst_30_31_1_12_26_27_tsni, _deforest_Cons_tail_inst_30_31_1_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_31_1_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_30_31_1_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_30_31_1_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_30_31_1_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_30_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_30_31_1_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_30_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_30_31_1_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni(_deforest_Cons_head_inst_30_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_30_31_1_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_30_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_30_31_1_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_30_31_1_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_30_31_1_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_30_31_1_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_30_31_1_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_30_31_1_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_30_31_1_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_30_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_30_31_1_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_30_31_1_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_30_31_1_68_tsni = function match_t_arm_Branch_inst_30_31_1_68_tsni(f, _deforest_Branch_a_inst_30_31_1_68_tsni, _deforest_Branch_cs_inst_30_31_1_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_30_31_1_68_tsni;
  param1 = _deforest_Branch_cs_inst_30_31_1_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_68_tsni(f));
  tmp1 = map_inst_30_31_1_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_30_31_1_68_69_tsni = function match_xs_arm_Nil_inst_30_31_1_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_30_31_1_2_tsni = function match_t_arm_Branch_inst_30_31_1_2_tsni(f, g, _deforest_Branch_a_inst_30_31_1_2_tsni, _deforest_Branch_cs_inst_30_31_1_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_30_31_1_2_tsni;
  param1 = _deforest_Branch_cs_inst_30_31_1_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_30_31_1_2_tsni(f, g));
    tmp1 = map_inst_30_31_1_2_3_tsni(lambda$this, l);
    return foldr_inst_30_31_1_2_66_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Cons_inst_32_15_24_25_tsni = function match_xs_arm_Cons_inst_32_15_24_25_tsni(ys, _deforest_Cons_head_inst_32_15_24_25_tsni, _deforest_Cons_tail_inst_32_15_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_32_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_32_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_32_15_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_32_15_24_25_tsni = function match_xs_arm_Nil_inst_32_15_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_32_15_20_tsni = function match_ls_arm_Cons_inst_32_15_20_tsni(x, xs, _deforest_Cons_head_inst_32_15_20_tsni, _deforest_Cons_tail_inst_32_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_32_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_32_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_32_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_32_15_20_tsni1 = function match_ls_arm_Cons_inst_32_15_20_tsni(_deforest_Cons_head_inst_32_15_20_tsni, _deforest_Cons_tail_inst_32_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_32_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_32_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_32_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_32_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_32_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_32_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_32_15_20_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_33_14_15_20_tsni = function match_ls_arm_Cons_inst_33_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_33_14_15_20_tsni, _deforest_Cons_tail_inst_33_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_33_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_33_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_33_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_33_14_15_20_tsni1 = function match_ls_arm_Cons_inst_33_14_15_20_tsni(_deforest_Cons_head_inst_33_14_15_20_tsni, _deforest_Cons_tail_inst_33_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_33_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_33_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_33_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_33_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_33_14_15_24_25_tsni = function match_xs_arm_Cons_inst_33_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_33_14_15_24_25_tsni, _deforest_Cons_tail_inst_33_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_33_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_33_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_33_14_15_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_33_14_15_24_25_tsni = function match_xs_arm_Nil_inst_33_14_15_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_34_23_24_25_tsni = function match_xs_arm_Cons_inst_34_23_24_25_tsni(ys, _deforest_Cons_head_inst_34_23_24_25_tsni, _deforest_Cons_tail_inst_34_23_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_34_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_34_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_34_23_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_34_23_24_25_tsni = function match_xs_arm_Nil_inst_34_23_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_34_23_20_tsni = function match_ls_arm_Cons_inst_34_23_20_tsni(x, xs, _deforest_Cons_head_inst_34_23_20_tsni, _deforest_Cons_tail_inst_34_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_34_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_34_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_34_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_34_23_20_tsni1 = function match_ls_arm_Cons_inst_34_23_20_tsni(_deforest_Cons_head_inst_34_23_20_tsni, _deforest_Cons_tail_inst_34_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_34_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_34_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_34_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_34_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_34_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_34_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_34_23_20_tsni(x, xs, tmp2)
};
match_ls_arm_Cons_inst_35_22_23_20_tsni = function match_ls_arm_Cons_inst_35_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_35_22_23_20_tsni, _deforest_Cons_tail_inst_35_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_35_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_35_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_35_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_35_22_23_20_tsni1 = function match_ls_arm_Cons_inst_35_22_23_20_tsni(_deforest_Cons_head_inst_35_22_23_20_tsni, _deforest_Cons_tail_inst_35_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_35_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_35_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_35_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_35_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_35_22_23_24_25_tsni = function match_xs_arm_Cons_inst_35_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_35_22_23_24_25_tsni, _deforest_Cons_tail_inst_35_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_35_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_35_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_35_22_23_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_35_22_23_24_25_tsni = function match_xs_arm_Nil_inst_35_22_23_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_38_8_67_tsni = function match_xs_arm_Nil_inst_38_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_39_7_8_67_tsni = function match_xs_arm_Nil_inst_39_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_40_tsni = function match_ls_arm_Cons_inst_40_tsni(x, xs, _deforest_Cons_head_inst_40_tsni, _deforest_Cons_tail_inst_40_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_40_tsni;
  param1 = _deforest_Cons_tail_inst_40_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_40_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_44_20_tsni = function match_ls_arm_Cons_inst_44_20_tsni(x, xs, _deforest_Cons_head_inst_44_20_tsni, _deforest_Cons_tail_inst_44_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_44_20_tsni;
  param1 = _deforest_Cons_tail_inst_44_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_44_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_44_20_tsni1 = function match_ls_arm_Cons_inst_44_20_tsni(_deforest_Cons_head_inst_44_20_tsni, _deforest_Cons_tail_inst_44_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_44_20_tsni;
  param1 = _deforest_Cons_tail_inst_44_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_44_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_44_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_44_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_44_24_25_tsni = function match_xs_arm_Cons_inst_44_24_25_tsni(ys, _deforest_Cons_head_inst_44_24_25_tsni, _deforest_Cons_tail_inst_44_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_44_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_44_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_44_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_44_24_25_tsni = function match_xs_arm_Nil_inst_44_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_45_67_tsni = function match_xs_arm_Nil_inst_45_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_46_6_7_8_67_tsni = function match_xs_arm_Nil_inst_46_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_48_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_48_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_48_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_48_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_48_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_48_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_48_13_14_15_20_tsni = function match_ls_arm_Cons_inst_48_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_48_13_14_15_20_tsni, _deforest_Cons_tail_inst_48_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_48_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_48_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_48_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_48_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_48_13_14_15_20_tsni(_deforest_Cons_head_inst_48_13_14_15_20_tsni, _deforest_Cons_tail_inst_48_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_48_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_48_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_48_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_48_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_48_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_48_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_48_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_48_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_48_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_48_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_48_21_22_23_20_tsni = function match_ls_arm_Cons_inst_48_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_48_21_22_23_20_tsni, _deforest_Cons_tail_inst_48_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_48_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_48_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_48_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_48_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_48_21_22_23_20_tsni(_deforest_Cons_head_inst_48_21_22_23_20_tsni, _deforest_Cons_tail_inst_48_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_48_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_48_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_48_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_48_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_48_26_27_tsni = function match_xs_arm_Nil_inst_48_26_27_tsni(f) {
  return (f1) => {
    return NofibPrelude.Nil
  }
};
match_xs_arm_Cons_inst_48_26_27_tsni = function match_xs_arm_Cons_inst_48_26_27_tsni(f, _deforest_Cons_head_inst_48_26_27_tsni, _deforest_Cons_tail_inst_48_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_48_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_48_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_48_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_48_28_29_tsni(f1, xs);
    return NofibPrelude.Cons(tmp, tmp1)
  }
};
match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_49_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_49_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_49_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_49_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni(_deforest_Cons_head_inst_49_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_49_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_49_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_49_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_49_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_49_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_49_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_49_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_49_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_49_12_26_27_tsni = function match_xs_arm_Nil_inst_49_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_49_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_49_12_26_27_tsni = function match_xs_arm_Cons_inst_49_12_26_27_tsni(f, _deforest_Cons_head_inst_49_12_26_27_tsni, _deforest_Cons_tail_inst_49_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_49_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_49_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_49_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_49_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_49_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_49_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_49_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni(_deforest_Cons_head_inst_49_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_49_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_49_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_49_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_49_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_49_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_49_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_49_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_49_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_49_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_49_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_49_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_49_68_tsni = function match_t_arm_Branch_inst_49_68_tsni(f, _deforest_Branch_a_inst_49_68_tsni, _deforest_Branch_cs_inst_49_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_49_68_tsni;
  param1 = _deforest_Branch_cs_inst_49_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_49_68_tsni(f));
  tmp1 = map_inst_49_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_49_68_69_tsni = function match_xs_arm_Nil_inst_49_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_49_2_tsni = function match_t_arm_Branch_inst_49_2_tsni(f, g, _deforest_Branch_a_inst_49_2_tsni, _deforest_Branch_cs_inst_49_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_49_2_tsni;
  param1 = _deforest_Branch_cs_inst_49_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_49_2_tsni(f, g));
    tmp1 = map_inst_49_2_3_tsni(lambda$this, l);
    return foldr_inst_49_2_66_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_50_52_6_7_8_67_tsni = function match_xs_arm_Nil_inst_50_52_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_50_54_6_7_8_67_tsni = function match_xs_arm_Nil_inst_50_54_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_50_55_24_25_tsni = function match_xs_arm_Cons_inst_50_55_24_25_tsni(ys, _deforest_Cons_head_inst_50_55_24_25_tsni, _deforest_Cons_tail_inst_50_55_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_50_55_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_50_55_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_50_55_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_50_55_24_25_tsni = function match_xs_arm_Nil_inst_50_55_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_50_55_20_tsni = function match_ls_arm_Cons_inst_50_55_20_tsni(x, xs, _deforest_Cons_head_inst_50_55_20_tsni, _deforest_Cons_tail_inst_50_55_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_50_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_55_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_50_55_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_50_55_20_tsni1 = function match_ls_arm_Cons_inst_50_55_20_tsni(_deforest_Cons_head_inst_50_55_20_tsni, _deforest_Cons_tail_inst_50_55_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_50_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_55_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_50_55_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_55_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_55_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_55_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_50_55_20_tsni(x, xs, tmp2)
};
match_t_arm_Branch_inst_50_56_31_1_2_tsni = function match_t_arm_Branch_inst_50_56_31_1_2_tsni(f, g, _deforest_Branch_a_inst_50_56_31_1_2_tsni, _deforest_Branch_cs_inst_50_56_31_1_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_50_56_31_1_2_tsni;
  param1 = _deforest_Branch_cs_inst_50_56_31_1_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_2_tsni(f, g));
    tmp1 = map_inst_50_56_31_1_2_3_tsni(lambda$this, l);
    return foldr_inst_50_56_31_1_2_66_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_50_56_31_1_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_50_56_31_1_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_50_56_31_1_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_50_56_31_1_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_50_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_50_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_50_56_31_1_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni(_deforest_Cons_head_inst_50_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_50_56_31_1_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_50_56_31_1_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_50_56_31_1_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_50_56_31_1_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_50_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_50_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_50_56_31_1_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni(_deforest_Cons_head_inst_50_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_50_56_31_1_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_50_56_31_1_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_50_56_31_1_12_26_27_tsni = function match_xs_arm_Nil_inst_50_56_31_1_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_50_56_31_1_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_50_56_31_1_12_26_27_tsni = function match_xs_arm_Cons_inst_50_56_31_1_12_26_27_tsni(f, _deforest_Cons_head_inst_50_56_31_1_12_26_27_tsni, _deforest_Cons_tail_inst_50_56_31_1_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_50_56_31_1_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_50_56_31_1_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_50_56_31_1_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_50_56_31_1_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_50_56_31_1_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_t_arm_Branch_inst_50_56_31_1_68_tsni = function match_t_arm_Branch_inst_50_56_31_1_68_tsni(f, _deforest_Branch_a_inst_50_56_31_1_68_tsni, _deforest_Branch_cs_inst_50_56_31_1_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_50_56_31_1_68_tsni;
  param1 = _deforest_Branch_cs_inst_50_56_31_1_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_68_tsni(f));
  tmp1 = map_inst_50_56_31_1_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_50_56_31_1_68_69_tsni = function match_xs_arm_Nil_inst_50_56_31_1_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_59_60_56_31_1_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni(_deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_59_60_56_31_1_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_59_60_56_31_1_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_59_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_59_60_56_31_1_12_26_27_tsni = function match_xs_arm_Nil_inst_59_60_56_31_1_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_59_60_56_31_1_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_59_60_56_31_1_12_26_27_tsni = function match_xs_arm_Cons_inst_59_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head_inst_59_60_56_31_1_12_26_27_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_59_60_56_31_1_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_59_60_56_31_1_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_59_60_56_31_1_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_59_60_56_31_1_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni(_deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_59_60_56_31_1_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_59_60_56_31_1_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_59_60_56_31_1_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_56_31_1_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_59_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_59_60_56_31_1_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_59_60_56_31_1_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_59_60_56_31_1_68_tsni = function match_t_arm_Branch_inst_59_60_56_31_1_68_tsni(f, _deforest_Branch_a_inst_59_60_56_31_1_68_tsni, _deforest_Branch_cs_inst_59_60_56_31_1_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_59_60_56_31_1_68_tsni;
  param1 = _deforest_Branch_cs_inst_59_60_56_31_1_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_68_tsni(f));
  tmp1 = map_inst_59_60_56_31_1_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_59_60_56_31_1_68_69_tsni = function match_xs_arm_Nil_inst_59_60_56_31_1_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_t_arm_Branch_inst_59_60_56_31_1_2_tsni = function match_t_arm_Branch_inst_59_60_56_31_1_2_tsni(f, g, _deforest_Branch_a_inst_59_60_56_31_1_2_tsni, _deforest_Branch_cs_inst_59_60_56_31_1_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_59_60_56_31_1_2_tsni;
  param1 = _deforest_Branch_cs_inst_59_60_56_31_1_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_2_tsni(f, g));
    tmp1 = map_inst_59_60_56_31_1_2_3_tsni(lambda$this, l);
    return foldr_inst_59_60_56_31_1_2_66_tsni(f, tmp, tmp1)
  }
};
match_ls_arm_Cons_inst_59_60_55_20_tsni = function match_ls_arm_Cons_inst_59_60_55_20_tsni(x, xs, _deforest_Cons_head_inst_59_60_55_20_tsni, _deforest_Cons_tail_inst_59_60_55_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_59_60_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_55_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_59_60_55_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_59_60_55_20_tsni1 = function match_ls_arm_Cons_inst_59_60_55_20_tsni(_deforest_Cons_head_inst_59_60_55_20_tsni, _deforest_Cons_tail_inst_59_60_55_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_59_60_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_55_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_59_60_55_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_59_60_55_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_59_60_55_24_25_tsni = function match_xs_arm_Cons_inst_59_60_55_24_25_tsni(ys, _deforest_Cons_head_inst_59_60_55_24_25_tsni, _deforest_Cons_tail_inst_59_60_55_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_59_60_55_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_59_60_55_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_59_60_55_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_59_60_55_24_25_tsni = function match_xs_arm_Nil_inst_59_60_55_24_25_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_59_60_54_6_7_8_67_tsni = function match_xs_arm_Nil_inst_59_60_54_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_59_60_52_6_7_8_67_tsni = function match_xs_arm_Nil_inst_59_60_52_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_59_61_tsni = function match_xs_arm_Nil_inst_59_61_tsni(f) {
  return () => {
    return NofibPrelude.Nil
  }
};
match_xs_arm_Nil_inst_62_63_60_52_6_7_8_67_tsni = function match_xs_arm_Nil_inst_62_63_60_52_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_62_63_60_54_6_7_8_67_tsni = function match_xs_arm_Nil_inst_62_63_60_54_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni = function match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni(ys, _deforest_Cons_head_inst_62_63_60_55_24_25_tsni, _deforest_Cons_tail_inst_62_63_60_55_24_25_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_62_63_60_55_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_55_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_62_63_60_55_24_25_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni = function match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_62_63_60_55_20_tsni = function match_ls_arm_Cons_inst_62_63_60_55_20_tsni(x, xs, _deforest_Cons_head_inst_62_63_60_55_20_tsni, _deforest_Cons_tail_inst_62_63_60_55_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_62_63_60_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_55_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_62_63_60_55_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_62_63_60_55_20_tsni1 = function match_ls_arm_Cons_inst_62_63_60_55_20_tsni(_deforest_Cons_head_inst_62_63_60_55_20_tsni, _deforest_Cons_tail_inst_62_63_60_55_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_62_63_60_55_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_55_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_62_63_60_55_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_62_63_60_55_20_tsni(x, xs, tmp2)
};
match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni = function match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni(f, g, _deforest_Branch_a_inst_62_63_60_56_31_1_2_tsni, _deforest_Branch_cs_inst_62_63_60_56_31_1_2_tsni) {
  let param0, param1, l, a, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_62_63_60_56_31_1_2_tsni;
  param1 = _deforest_Branch_cs_inst_62_63_60_56_31_1_2_tsni;
  a = param0;
  if (param1 instanceof NofibPrelude.Nil.class) {
    return a
  } else {
    l = param1;
    tmp = runtime.safeCall(g(minimax.OWin, minimax.XWin));
    lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_2_tsni(f, g));
    tmp1 = map_inst_62_63_60_56_31_1_2_3_tsni(lambda$this, l);
    return foldr_inst_62_63_60_56_31_1_2_66_tsni(f, tmp, tmp1)
  }
};
match_xs_arm_Nil_inst_62_63_60_56_31_1_5_6_7_8_67_tsni = function match_xs_arm_Nil_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni = function match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni = function match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x, xs, _deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni1 = function match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(_deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_20_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_13_14_15_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_13_14_15_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x, xs, tmp2)
};
match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f) => {
    return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni = function match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni = function match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x, xs, _deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, y, ys, arr, tmp;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_20_tsni;
  y = param0;
  ys = param1;
  arr = [
    x,
    y
  ];
  tmp = lscomp2$_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x, xs, ys);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni1 = function match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(_deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_20_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_20_tsni) {
  let param0, param1, x, xs, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_21_22_23_20_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_21_22_23_20_tsni;
  x = param0;
  xs = param1;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = (x1, xs1) => {
    return lscomp1_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(xs1)
  };
  tmp = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = (x1, xs1) => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return lscomp2$_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x, xs, tmp2)
};
match_xs_arm_Nil_inst_62_63_60_56_31_1_12_26_27_tsni = function match_xs_arm_Nil_inst_62_63_60_56_31_1_12_26_27_tsni(f) {
  return (f1) => {
    return (f2) => {
      return match_xs_arm_Nil_inst_62_63_60_56_31_1_68_69_tsni(f2)
    }
  }
};
match_xs_arm_Cons_inst_62_63_60_56_31_1_12_26_27_tsni = function match_xs_arm_Cons_inst_62_63_60_56_31_1_12_26_27_tsni(f, _deforest_Cons_head_inst_62_63_60_56_31_1_12_26_27_tsni, _deforest_Cons_tail_inst_62_63_60_56_31_1_12_26_27_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_62_63_60_56_31_1_12_26_27_tsni;
  param1 = _deforest_Cons_tail_inst_62_63_60_56_31_1_12_26_27_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_62_63_60_56_31_1_12_26_27_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = runtime.safeCall(f1(x));
    tmp1 = map_inst_62_63_60_56_31_1_12_28_29_tsni(f1, xs);
    _deforest_Cons_head1 = tmp;
    _deforest_Cons_tail1 = tmp1;
    return (f2) => {
      param0 = _deforest_Cons_head1;
      param1 = _deforest_Cons_tail1;
      x = param0;
      xs = param1;
      tmp = runtime.safeCall(f2(x));
      tmp1 = map_inst_62_63_60_56_31_1_68_69_tsni(f2, xs);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  }
};
match_t_arm_Branch_inst_62_63_60_56_31_1_68_tsni = function match_t_arm_Branch_inst_62_63_60_56_31_1_68_tsni(f, _deforest_Branch_a_inst_62_63_60_56_31_1_68_tsni, _deforest_Branch_cs_inst_62_63_60_56_31_1_68_tsni) {
  let param0, param1, a, l, tmp, tmp1, lambda$this;
  param0 = _deforest_Branch_a_inst_62_63_60_56_31_1_68_tsni;
  param1 = _deforest_Branch_cs_inst_62_63_60_56_31_1_68_tsni;
  a = param0;
  l = param1;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_68_tsni(f));
  tmp1 = map_inst_62_63_60_56_31_1_68_69_tsni(lambda$this, l);
  return minimax.Branch(tmp, tmp1)
};
match_xs_arm_Nil_inst_62_63_60_56_31_1_68_69_tsni = function match_xs_arm_Nil_inst_62_63_60_56_31_1_68_69_tsni(f) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_62_63_61_tsni = function match_xs_arm_Nil_inst_62_63_61_tsni(f) {
  return () => {
    return () => {
      return ""
    }
  }
};
match_ls_arm_Cons_inst_62_74_tsni = function match_ls_arm_Cons_inst_62_74_tsni(_deforest_Cons_head_inst_62_74_tsni, _deforest_Cons_tail_inst_62_74_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_62_74_tsni;
  param1 = _deforest_Cons_tail_inst_62_74_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_62_74_tsni(t);
  return h + tmp
};
bestMove_inst_0_1_tsni = function bestMove_inst_0_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_0_1_12_tsni(p, b);
  tmp1 = mapTree_inst_0_1_68_tsni(static_inst_0_1_5_tsni, tmp);
  tmp2 = cropTree_inst_0_1_4_tsni(tmp1);
  return mise_inst_0_1_2_tsni(f, g, tmp2)
};
mise_inst_0_1_2_tsni = function mise_inst_0_1_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
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
      tmp2 = foldr_inst_0_1_2_66_tsni(f1, z, t);
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
cropTree_inst_0_1_4_tsni = function cropTree_inst_0_1_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_0_1_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_0_1_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_0_1_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_0_1_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_0_1_5_tsni = function static_inst_0_1_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_0_1_5_6_tsni(board1));
  tmp = map_inst_0_1_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_0_1_5_53_tsni(0, tmp)
};
lambda_inst_0_1_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_0_1_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_0_1_5_6_7_tsni = function lambda$_inst_0_1_5_6_7_tsni(board1, x) {
  return score_inst_0_1_5_6_7_8_tsni(board1, x)
};
score_inst_0_1_5_6_7_8_tsni = function score_inst_0_1_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_0_1_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_0_1_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_0_1_5_6_7_8_11_tsni(tmp2)
};
map2_inst_0_1_5_6_7_8_9_tsni = function map2_inst_0_1_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_0_1_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_0_1_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_0_1_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_0_1_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_0_1_5_10_tsni = function map_inst_0_1_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_0_1_5_6_7_8_11_tsni = function eval_inst_0_1_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_0_1_5_53_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_0_1_12_tsni = function searchTree_inst_0_1_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_0_1_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_0_1_12_21_tsni(p));
  tmp = repTree_inst_0_1_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_0_1_12_28_tsni(5, tmp)
};
lambda_inst_0_1_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_0_1_12_13_14_tsni(p, x)
  }
});
lambda$_inst_0_1_12_13_14_tsni = function lambda$_inst_0_1_12_13_14_tsni(p, x) {
  return newPositions_inst_0_1_12_13_14_15_tsni(p, x)
};
newPositions_inst_0_1_12_13_14_15_tsni = function newPositions_inst_0_1_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_0_1_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_0_1_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_0_1_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_0_1_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_0_1_12_13_14_15_24_tsni(tmp4)
};
map_inst_0_1_12_13_14_15_16_tsni = function map_inst_0_1_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_12_13_14_15_24_tsni(xs2);
      return append_inst_0_1_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_0_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_0_1_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_0_1_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_0_1_12_13_14_15_17_18_tsni = function lambda$_inst_0_1_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_0_1_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_0_1_12_13_14_15_17_18_19_tsni = function placePiece_inst_0_1_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_0_1_12_13_14_15_20_tsni = function lscomp1_inst_0_1_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_0_1_12_13_14_15_20_tsni = function lscomp2$_inst_0_1_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_0_1_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_0_1_12_21_22_tsni(p, x)
  }
});
lambda$_inst_0_1_12_21_22_tsni = function lambda$_inst_0_1_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_0_1_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_0_1_12_21_22_23_tsni = function newPositions_inst_0_1_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_0_1_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_0_1_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_0_1_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_0_1_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_0_1_12_21_22_23_24_tsni(tmp4)
};
map_inst_0_1_12_21_22_23_16_tsni = function map_inst_0_1_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_12_21_22_23_24_tsni(xs2);
      return append_inst_0_1_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_0_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_0_1_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_0_1_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_0_1_12_21_22_23_17_18_tsni = function lambda$_inst_0_1_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_0_1_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_0_1_12_21_22_23_17_18_19_tsni = function placePiece_inst_0_1_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_0_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_0_1_12_21_22_23_20_tsni = function lscomp1_inst_0_1_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_0_1_12_21_22_23_20_tsni = function lscomp2$_inst_0_1_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_0_1_12_13_14_15_24_tsni = function concat_inst_0_1_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_1_12_13_14_15_24_25_tsni = function append_inst_0_1_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_0_1_12_21_22_23_24_tsni = function concat_inst_0_1_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_1_12_21_22_23_24_25_tsni = function append_inst_0_1_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_0_1_12_26_tsni = function repTree_inst_0_1_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_0_1_12_26_tsni(f, g));
  tmp1 = map_inst_0_1_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_0_1_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_0_1_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_0_1_12_28_tsni(n));
        tmp2 = map_inst_0_1_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_0_1_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_0_1_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_0_1_12_26_tsni(f, g, x)
  }
});
lambda$_inst_0_1_12_26_tsni = function lambda$_inst_0_1_12_26_tsni(f, g, x) {
  return repTree_inst_0_1_12_26_tsni(g, f, x)
};
map_inst_0_1_12_26_27_tsni = function map_inst_0_1_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_0_1_12_28_tsni = function prune_inst_0_1_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_0_1_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_0_1_12_28_tsni(n, x)
  }
});
lambda$_inst_0_1_12_28_tsni = function lambda$_inst_0_1_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_0_1_12_28_tsni(tmp, x)
};
map_inst_0_1_12_28_29_tsni = function map_inst_0_1_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda$_inst_30_31_tsni = function lambda$_inst_30_31_tsni(f, g, opposition, x) {
  return bestMove_inst_30_31_1_tsni(opposition, g, f, x)
};
bestMove_inst_30_31_1_tsni = function bestMove_inst_30_31_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_30_31_1_12_tsni(p, b);
  tmp1 = mapTree_inst_30_31_1_68_tsni(static_inst_30_31_1_5_tsni, tmp);
  tmp2 = cropTree_inst_30_31_1_4_tsni(tmp1);
  return mise_inst_30_31_1_2_tsni(f, g, tmp2)
};
searchTree_inst_30_31_1_12_tsni = function searchTree_inst_30_31_1_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_30_31_1_12_21_tsni(p));
  tmp = repTree_inst_30_31_1_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_30_31_1_12_28_tsni(5, tmp)
};
repTree_inst_30_31_1_12_26_tsni = function repTree_inst_30_31_1_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_12_26_tsni(f, g));
  tmp1 = map_inst_30_31_1_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_30_31_1_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_30_31_1_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_30_31_1_12_28_tsni(n));
        tmp2 = map_inst_30_31_1_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_30_31_1_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_30_31_1_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_30_31_1_12_26_tsni(f, g, x)
  }
});
lambda$_inst_30_31_1_12_26_tsni = function lambda$_inst_30_31_1_12_26_tsni(f, g, x) {
  return repTree_inst_30_31_1_12_26_tsni(g, f, x)
};
map_inst_30_31_1_12_26_27_tsni = function map_inst_30_31_1_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_30_31_1_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_30_31_1_12_21_22_tsni(p, x)
  }
});
lambda$_inst_30_31_1_12_21_22_tsni = function lambda$_inst_30_31_1_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_30_31_1_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_30_31_1_12_21_22_23_tsni = function newPositions_inst_30_31_1_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_30_31_1_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_30_31_1_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_30_31_1_12_21_22_23_24_tsni(tmp4)
};
lscomp1_inst_30_31_1_12_21_22_23_20_tsni = function lscomp1_inst_30_31_1_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_30_31_1_12_21_22_23_20_tsni = function lscomp2$_inst_30_31_1_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_30_31_1_12_21_22_23_16_tsni = function map_inst_30_31_1_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_31_1_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_31_1_12_21_22_23_24_tsni(xs2);
      return append_inst_30_31_1_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_30_31_1_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_30_31_1_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_30_31_1_12_21_22_23_17_18_tsni = function lambda$_inst_30_31_1_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_30_31_1_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_30_31_1_12_21_22_23_17_18_19_tsni = function placePiece_inst_30_31_1_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_30_31_1_12_21_22_23_24_tsni = function concat_inst_30_31_1_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_31_1_12_21_22_23_24_25_tsni = function append_inst_30_31_1_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_30_31_1_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_30_31_1_12_13_14_tsni(p, x)
  }
});
lambda$_inst_30_31_1_12_13_14_tsni = function lambda$_inst_30_31_1_12_13_14_tsni(p, x) {
  return newPositions_inst_30_31_1_12_13_14_15_tsni(p, x)
};
newPositions_inst_30_31_1_12_13_14_15_tsni = function newPositions_inst_30_31_1_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_30_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_30_31_1_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_30_31_1_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_30_31_1_12_13_14_15_24_tsni(tmp4)
};
lscomp1_inst_30_31_1_12_13_14_15_20_tsni = function lscomp1_inst_30_31_1_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_30_31_1_12_13_14_15_20_tsni = function lscomp2$_inst_30_31_1_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_30_31_1_12_13_14_15_16_tsni = function map_inst_30_31_1_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_31_1_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_30_31_1_12_13_14_15_24_tsni(xs2);
      return append_inst_30_31_1_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_30_31_1_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_30_31_1_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_30_31_1_12_13_14_15_17_18_tsni = function lambda$_inst_30_31_1_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_30_31_1_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_30_31_1_12_13_14_15_17_18_19_tsni = function placePiece_inst_30_31_1_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_30_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_30_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_30_31_1_12_13_14_15_24_tsni = function concat_inst_30_31_1_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_30_31_1_12_13_14_15_24_25_tsni = function append_inst_30_31_1_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
static_inst_30_31_1_5_tsni = function static_inst_30_31_1_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_30_31_1_5_6_tsni(board1));
  tmp = map_inst_30_31_1_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_30_31_1_5_53_tsni(0, tmp)
};
map_inst_30_31_1_5_10_tsni = function map_inst_30_31_1_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_31_1_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_30_31_1_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_30_31_1_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_30_31_1_5_6_7_tsni = function lambda$_inst_30_31_1_5_6_7_tsni(board1, x) {
  return score_inst_30_31_1_5_6_7_8_tsni(board1, x)
};
score_inst_30_31_1_5_6_7_8_tsni = function score_inst_30_31_1_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_30_31_1_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_30_31_1_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_30_31_1_5_6_7_8_11_tsni(tmp2)
};
map2_inst_30_31_1_5_6_7_8_9_tsni = function map2_inst_30_31_1_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_30_31_1_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_30_31_1_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_30_31_1_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_30_31_1_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_30_31_1_5_6_7_8_11_tsni = function eval_inst_30_31_1_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_30_31_1_5_53_tsni(tmp1, ls)
      }
    }
  }
};
prune_inst_30_31_1_12_28_tsni = function prune_inst_30_31_1_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_30_31_1_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_30_31_1_12_28_tsni(n, x)
  }
});
lambda$_inst_30_31_1_12_28_tsni = function lambda$_inst_30_31_1_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_30_31_1_12_28_tsni(tmp, x)
};
map_inst_30_31_1_12_28_29_tsni = function map_inst_30_31_1_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_30_31_1_2_tsni = function mise_inst_30_31_1_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
lambda_inst_30_31_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_30_31_1_2_tsni(f, g, x)
  }
});
lambda$_inst_30_31_1_2_tsni = function lambda$_inst_30_31_1_2_tsni(f, g, x) {
  return mise_inst_30_31_1_2_tsni(g, f, x)
};
map_inst_30_31_1_2_3_tsni = function map_inst_30_31_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_30_31_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_30_31_1_2_66_tsni(f1, z, t);
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
cropTree_inst_30_31_1_4_tsni = function cropTree_inst_30_31_1_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_30_31_1_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_30_31_1_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_30_31_1_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_30_31_1_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
newPositions_inst_32_15_tsni = function newPositions_inst_32_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_32_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_32_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_32_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_32_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_32_15_17_tsni(piece, board1));
  tmp4 = map_inst_32_15_16_tsni(lambda$this, tmp3);
  return concat_inst_32_15_24_tsni(tmp4)
};
map_inst_32_15_16_tsni = function map_inst_32_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_32_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_32_15_24_tsni(xs2);
      return append_inst_32_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_32_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_32_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_32_15_17_18_tsni = function lambda$_inst_32_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_32_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_32_15_17_18_19_tsni = function placePiece_inst_32_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_32_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_32_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_32_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_32_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_32_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_32_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_32_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_32_15_20_tsni = function lscomp1_inst_32_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_32_15_20_tsni = function lscomp2$_inst_32_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda$_inst_33_14_tsni = function lambda$_inst_33_14_tsni(p, x) {
  return newPositions_inst_33_14_15_tsni(p, x)
};
newPositions_inst_33_14_15_tsni = function newPositions_inst_33_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_33_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_33_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_33_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_33_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_33_14_15_24_tsni(tmp4)
};
lscomp1_inst_33_14_15_20_tsni = function lscomp1_inst_33_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_33_14_15_20_tsni = function lscomp2$_inst_33_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_33_14_15_16_tsni = function map_inst_33_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_33_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_33_14_15_24_tsni(xs2);
      return append_inst_33_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_33_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_33_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_33_14_15_17_18_tsni = function lambda$_inst_33_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_33_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_33_14_15_17_18_19_tsni = function placePiece_inst_33_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_33_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_33_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_33_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_33_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_33_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_33_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_33_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
newPositions_inst_34_23_tsni = function newPositions_inst_34_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_34_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_34_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_34_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_34_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_34_23_17_tsni(piece, board1));
  tmp4 = map_inst_34_23_16_tsni(lambda$this, tmp3);
  return concat_inst_34_23_24_tsni(tmp4)
};
map_inst_34_23_16_tsni = function map_inst_34_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_34_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_34_23_24_tsni(xs2);
      return append_inst_34_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_34_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_34_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_34_23_17_18_tsni = function lambda$_inst_34_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_34_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_34_23_17_18_19_tsni = function placePiece_inst_34_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_34_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_34_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_34_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_34_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_34_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_34_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_34_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_34_23_20_tsni = function lscomp1_inst_34_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_34_23_20_tsni = function lscomp2$_inst_34_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda$_inst_35_22_tsni = function lambda$_inst_35_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_35_22_23_tsni(tmp, x)
};
newPositions_inst_35_22_23_tsni = function newPositions_inst_35_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_35_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_35_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_35_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_35_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_35_22_23_24_tsni(tmp4)
};
lscomp1_inst_35_22_23_20_tsni = function lscomp1_inst_35_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_35_22_23_20_tsni = function lscomp2$_inst_35_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_35_22_23_16_tsni = function map_inst_35_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_35_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_35_22_23_24_tsni(xs2);
      return append_inst_35_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_35_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_35_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_35_22_23_17_18_tsni = function lambda$_inst_35_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_35_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_35_22_23_17_18_19_tsni = function placePiece_inst_35_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_35_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_35_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_35_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_35_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_35_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_35_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_35_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
mise_inst_36_tsni = function mise_inst_36_tsni(f, g, t) {
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
      lambda$this = runtime.safeCall(lambda_inst_36_tsni(f, g));
      tmp1 = map_inst_36_3_tsni(lambda$this, l);
      return foldr_inst_36_66_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_36_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$5(f, g, x)
  }
});
map_inst_36_3_tsni = function map_inst_36_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_36_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_36_66_tsni(f1, z, t);
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
mise_inst_37_tsni = function mise_inst_37_tsni(f, g, t) {
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
      tmp1 = map_inst_37_3_tsni(lambda$this, l);
      return foldr_inst_37_66_tsni(f, tmp, tmp1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_37_tsni = function lambda$_inst_37_tsni(f, g, x) {
  return mise_inst_37_tsni(g, f, x)
};
map_inst_37_3_tsni = function map_inst_37_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_37_66_tsni(f1, z, t);
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
score_inst_38_8_tsni = function score_inst_38_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_38_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_38_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_38_8_9_tsni = function map2_inst_38_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_38_8_67_tsni(f1)
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
      tmp1 = map2_inst_38_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_38_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_38_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_39_7_tsni = function lambda$_inst_39_7_tsni(board1, x) {
  return score_inst_39_7_8_tsni(board1, x)
};
score_inst_39_7_8_tsni = function score_inst_39_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_39_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_39_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return minimax.eval(tmp2)
};
map2_inst_39_7_8_9_tsni = function map2_inst_39_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_39_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_39_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_39_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_39_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_40_tsni = function lscomp2$_inst_40_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_41_42_tsni = function concat_inst_41_42_tsni(ls) {
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
    tmp = concat_inst_41_42_tsni(xs);
    return append_inst_41_42_25_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_41_42_25_tsni = function append_inst_41_42_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_41_42_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_41_43_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_41_70_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_41_43_tsni = function map_inst_41_43_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp1_inst_44_20_tsni = function lscomp1_inst_44_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_44_20_tsni = function lscomp2$_inst_44_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_44_16_tsni = function map_inst_44_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_44_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_44_24_tsni(xs2);
      return append_inst_44_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_44_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_44_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_44_17_18_tsni = function lambda$_inst_44_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_44_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_44_17_18_19_tsni = function placePiece_inst_44_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_44_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_44_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_44_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_44_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_44_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_44_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_44_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
map2_inst_45_9_tsni = function map2_inst_45_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_45_67_tsni(f1)
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
      tmp1 = map2_inst_45_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_45_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_45_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_46_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_46_6_7_tsni(board1, x)
  }
});
lambda$_inst_46_6_7_tsni = function lambda$_inst_46_6_7_tsni(board1, x) {
  return score_inst_46_6_7_8_tsni(board1, x)
};
score_inst_46_6_7_8_tsni = function score_inst_46_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_46_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_46_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_46_6_7_8_11_tsni(tmp2)
};
map2_inst_46_6_7_8_9_tsni = function map2_inst_46_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_46_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_46_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_46_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_46_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_46_10_tsni = function map_inst_46_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_46_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_46_6_7_8_11_tsni = function eval_inst_46_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_46_53_tsni(tmp1, ls)
      }
    }
  }
};
lambda_inst_47_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_47_tsni(f, g, x)
  }
});
lambda$_inst_47_tsni = function lambda$_inst_47_tsni(f, g, x) {
  return minimax1.mise(g, f, x)
};
map_inst_47_3_tsni = function map_inst_47_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_47_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_47_66_tsni(f1, z, t);
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
lambda_inst_48_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_48_13_14_tsni(p, x)
  }
});
lambda$_inst_48_13_14_tsni = function lambda$_inst_48_13_14_tsni(p, x) {
  return newPositions_inst_48_13_14_15_tsni(p, x)
};
newPositions_inst_48_13_14_15_tsni = function newPositions_inst_48_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_48_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_48_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_48_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_48_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_48_13_14_15_24_tsni(tmp4)
};
map_inst_48_13_14_15_16_tsni = function map_inst_48_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_48_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_48_13_14_15_24_tsni(xs2);
      return append_inst_48_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_48_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_48_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_48_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_48_13_14_15_17_18_tsni = function lambda$_inst_48_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_48_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_48_13_14_15_17_18_19_tsni = function placePiece_inst_48_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_48_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_48_13_14_15_20_tsni = function lscomp1_inst_48_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_48_13_14_15_20_tsni = function lscomp2$_inst_48_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_48_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_48_21_22_tsni(p, x)
  }
});
lambda$_inst_48_21_22_tsni = function lambda$_inst_48_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_48_21_22_23_tsni(tmp, x)
};
newPositions_inst_48_21_22_23_tsni = function newPositions_inst_48_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_48_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_48_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_48_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_48_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_48_21_22_23_24_tsni(tmp4)
};
map_inst_48_21_22_23_16_tsni = function map_inst_48_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_48_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_48_21_22_23_24_tsni(xs2);
      return append_inst_48_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_48_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_48_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_48_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_48_21_22_23_17_18_tsni = function lambda$_inst_48_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_48_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_48_21_22_23_17_18_19_tsni = function placePiece_inst_48_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_48_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_48_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_48_21_22_23_20_tsni = function lscomp1_inst_48_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_48_21_22_23_20_tsni = function lscomp2$_inst_48_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_48_13_14_15_24_tsni = function concat_inst_48_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_48_13_14_15_24_25_tsni = function append_inst_48_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_48_21_22_23_24_tsni = function concat_inst_48_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_48_21_22_23_24_25_tsni = function append_inst_48_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_48_26_tsni = function repTree_inst_48_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_48_26_tsni(f, g));
  tmp1 = map_inst_48_26_27_tsni(lambda$this, tmp);
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
        lambda$this1 = runtime.safeCall(lambda_inst_48_28_tsni(n));
        tmp2 = map_inst_48_28_29_tsni(lambda$this1, l);
        return minimax.Branch(a1, tmp2)
      }
    }
  }
};
lambda_inst_48_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_48_26_tsni(f, g, x)
  }
});
lambda$_inst_48_26_tsni = function lambda$_inst_48_26_tsni(f, g, x) {
  return repTree_inst_48_26_tsni(g, f, x)
};
map_inst_48_26_27_tsni = function map_inst_48_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
searchTree_inst_49_12_tsni = function searchTree_inst_49_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_49_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_49_12_21_tsni(p));
  tmp = repTree_inst_49_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_49_12_28_tsni(5, tmp)
};
repTree_inst_49_12_26_tsni = function repTree_inst_49_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_49_12_26_tsni(f, g));
  tmp1 = map_inst_49_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_49_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_49_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_49_12_28_tsni(n));
        tmp2 = map_inst_49_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_49_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_49_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_49_12_26_tsni(f, g, x)
  }
});
lambda$_inst_49_12_26_tsni = function lambda$_inst_49_12_26_tsni(f, g, x) {
  return repTree_inst_49_12_26_tsni(g, f, x)
};
map_inst_49_12_26_27_tsni = function map_inst_49_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_49_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_49_12_21_22_tsni(p, x)
  }
});
lambda$_inst_49_12_21_22_tsni = function lambda$_inst_49_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_49_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_49_12_21_22_23_tsni = function newPositions_inst_49_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_49_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_49_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_49_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_49_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_49_12_21_22_23_24_tsni(tmp4)
};
lscomp1_inst_49_12_21_22_23_20_tsni = function lscomp1_inst_49_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_49_12_21_22_23_20_tsni = function lscomp2$_inst_49_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_49_12_21_22_23_16_tsni = function map_inst_49_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_12_21_22_23_24_tsni(xs2);
      return append_inst_49_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_49_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_49_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_49_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_49_12_21_22_23_17_18_tsni = function lambda$_inst_49_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_49_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_49_12_21_22_23_17_18_19_tsni = function placePiece_inst_49_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_49_12_21_22_23_24_tsni = function concat_inst_49_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_12_21_22_23_24_25_tsni = function append_inst_49_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_49_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_49_12_13_14_tsni(p, x)
  }
});
lambda$_inst_49_12_13_14_tsni = function lambda$_inst_49_12_13_14_tsni(p, x) {
  return newPositions_inst_49_12_13_14_15_tsni(p, x)
};
newPositions_inst_49_12_13_14_15_tsni = function newPositions_inst_49_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_49_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_49_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_49_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_49_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_49_12_13_14_15_24_tsni(tmp4)
};
lscomp1_inst_49_12_13_14_15_20_tsni = function lscomp1_inst_49_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_49_12_13_14_15_20_tsni = function lscomp2$_inst_49_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_49_12_13_14_15_16_tsni = function map_inst_49_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_49_12_13_14_15_24_tsni(xs2);
      return append_inst_49_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_49_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_49_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_49_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_49_12_13_14_15_17_18_tsni = function lambda$_inst_49_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_49_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_49_12_13_14_15_17_18_19_tsni = function placePiece_inst_49_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_49_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_49_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_49_12_13_14_15_24_tsni = function concat_inst_49_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_49_12_13_14_15_24_25_tsni = function append_inst_49_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
static_inst_49_5_tsni = function static_inst_49_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_49_5_6_tsni(board1));
  tmp = map_inst_49_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_49_5_53_tsni(0, tmp)
};
map_inst_49_5_10_tsni = function map_inst_49_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_49_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_49_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_49_5_6_7_tsni = function lambda$_inst_49_5_6_7_tsni(board1, x) {
  return score_inst_49_5_6_7_8_tsni(board1, x)
};
score_inst_49_5_6_7_8_tsni = function score_inst_49_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_49_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_49_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_49_5_6_7_8_11_tsni(tmp2)
};
map2_inst_49_5_6_7_8_9_tsni = function map2_inst_49_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_49_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_49_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_49_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_49_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_49_5_6_7_8_11_tsni = function eval_inst_49_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_49_5_53_tsni(tmp1, ls)
      }
    }
  }
};
prune_inst_49_12_28_tsni = function prune_inst_49_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_49_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_49_12_28_tsni(n, x)
  }
});
lambda$_inst_49_12_28_tsni = function lambda$_inst_49_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_49_12_28_tsni(tmp, x)
};
map_inst_49_12_28_29_tsni = function map_inst_49_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_49_2_tsni = function mise_inst_49_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
lambda_inst_49_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_49_2_tsni(f, g, x)
  }
});
lambda$_inst_49_2_tsni = function lambda$_inst_49_2_tsni(f, g, x) {
  return mise_inst_49_2_tsni(g, f, x)
};
map_inst_49_2_3_tsni = function map_inst_49_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_49_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_49_2_66_tsni(f1, z, t);
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
cropTree_inst_49_4_tsni = function cropTree_inst_49_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_49_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_49_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_49_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_49_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
fullBoard_inst_50_51_tsni = function fullBoard_inst_50_51_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_50_51_42_tsni(b);
  tmp1 = map_inst_50_51_43_tsni(lambda, tmp);
  return andd_inst_50_51_70_tsni(tmp1)
};
map_inst_50_51_43_tsni = function map_inst_50_51_43_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_50_51_42_tsni = function concat_inst_50_51_42_tsni(ls) {
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
    tmp = concat_inst_50_51_42_tsni(xs);
    return append_inst_50_51_42_25_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_50_51_42_25_tsni = function append_inst_50_51_42_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_50_51_42_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_50_51_43_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_50_51_70_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_50_52_tsni = function static_inst_50_52_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_50_52_6_tsni(board1));
  tmp = map_inst_50_52_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_50_52_53_tsni(0, tmp)
};
map_inst_50_52_10_tsni = function map_inst_50_52_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_52_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
lambda_inst_50_52_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_50_52_6_7_tsni(board1, x)
  }
});
lambda$_inst_50_52_6_7_tsni = function lambda$_inst_50_52_6_7_tsni(board1, x) {
  return score_inst_50_52_6_7_8_tsni(board1, x)
};
score_inst_50_52_6_7_8_tsni = function score_inst_50_52_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_50_52_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_50_52_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_50_52_6_7_8_11_tsni(tmp2)
};
map2_inst_50_52_6_7_8_9_tsni = function map2_inst_50_52_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_50_52_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_50_52_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_50_52_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_50_52_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_50_52_6_7_8_11_tsni = function eval_inst_50_52_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_50_52_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_50_52_53_tsni = function interpret_inst_50_52_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_50_54_tsni = function static_inst_50_54_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_50_54_6_tsni(board1));
  tmp = map_inst_50_54_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_50_54_53_tsni(0, tmp)
};
map_inst_50_54_10_tsni = function map_inst_50_54_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_54_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
lambda_inst_50_54_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_50_54_6_7_tsni(board1, x)
  }
});
lambda$_inst_50_54_6_7_tsni = function lambda$_inst_50_54_6_7_tsni(board1, x) {
  return score_inst_50_54_6_7_8_tsni(board1, x)
};
score_inst_50_54_6_7_8_tsni = function score_inst_50_54_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_50_54_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_50_54_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_50_54_6_7_8_11_tsni(tmp2)
};
map2_inst_50_54_6_7_8_9_tsni = function map2_inst_50_54_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_50_54_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_50_54_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_50_54_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_50_54_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_50_54_6_7_8_11_tsni = function eval_inst_50_54_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_50_54_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_50_54_53_tsni = function interpret_inst_50_54_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_50_55_tsni = function newPositions_inst_50_55_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_50_55_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_50_55_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_50_55_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_50_55_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_50_55_17_tsni(piece, board1));
  tmp4 = map_inst_50_55_16_tsni(lambda$this, tmp3);
  return concat_inst_50_55_24_tsni(tmp4)
};
map_inst_50_55_16_tsni = function map_inst_50_55_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_55_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_50_55_24_tsni(xs2);
      return append_inst_50_55_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_50_55_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_50_55_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_50_55_17_18_tsni = function lambda$_inst_50_55_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_50_55_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_50_55_17_18_19_tsni = function placePiece_inst_50_55_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_50_55_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_50_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_55_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_50_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_55_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_50_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_55_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_50_55_20_tsni = function lscomp1_inst_50_55_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_50_55_20_tsni = function lscomp2$_inst_50_55_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_50_56_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_50_56_31_tsni(f, g, opposition, x)
  }
});
lambda$_inst_50_56_31_tsni = function lambda$_inst_50_56_31_tsni(f, g, opposition, x) {
  return bestMove_inst_50_56_31_1_tsni(opposition, g, f, x)
};
bestMove_inst_50_56_31_1_tsni = function bestMove_inst_50_56_31_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_50_56_31_1_12_tsni(p, b);
  tmp1 = mapTree_inst_50_56_31_1_68_tsni(static_inst_50_56_31_1_5_tsni, tmp);
  tmp2 = cropTree_inst_50_56_31_1_4_tsni(tmp1);
  return mise_inst_50_56_31_1_2_tsni(f, g, tmp2)
};
mise_inst_50_56_31_1_2_tsni = function mise_inst_50_56_31_1_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
lambda_inst_50_56_31_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_50_56_31_1_2_tsni(f, g, x)
  }
});
lambda$_inst_50_56_31_1_2_tsni = function lambda$_inst_50_56_31_1_2_tsni(f, g, x) {
  return mise_inst_50_56_31_1_2_tsni(g, f, x)
};
map_inst_50_56_31_1_2_3_tsni = function map_inst_50_56_31_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_56_31_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_50_56_31_1_2_66_tsni(f1, z, t);
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
cropTree_inst_50_56_31_1_4_tsni = function cropTree_inst_50_56_31_1_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_50_56_31_1_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_50_56_31_1_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_50_56_31_1_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_50_56_31_1_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_50_56_31_1_5_tsni = function static_inst_50_56_31_1_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_5_6_tsni(board1));
  tmp = map_inst_50_56_31_1_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_50_56_31_1_5_53_tsni(0, tmp)
};
lambda_inst_50_56_31_1_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_50_56_31_1_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_50_56_31_1_5_6_7_tsni = function lambda$_inst_50_56_31_1_5_6_7_tsni(board1, x) {
  return score_inst_50_56_31_1_5_6_7_8_tsni(board1, x)
};
score_inst_50_56_31_1_5_6_7_8_tsni = function score_inst_50_56_31_1_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_50_56_31_1_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_50_56_31_1_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_50_56_31_1_5_6_7_8_11_tsni(tmp2)
};
map2_inst_50_56_31_1_5_6_7_8_9_tsni = function map2_inst_50_56_31_1_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_50_56_31_1_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_50_56_31_1_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_50_56_31_1_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_50_56_31_1_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_50_56_31_1_5_10_tsni = function map_inst_50_56_31_1_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_56_31_1_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_50_56_31_1_5_6_7_8_11_tsni = function eval_inst_50_56_31_1_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_50_56_31_1_5_53_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_50_56_31_1_12_tsni = function searchTree_inst_50_56_31_1_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_50_56_31_1_12_21_tsni(p));
  tmp = repTree_inst_50_56_31_1_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_50_56_31_1_12_28_tsni(5, tmp)
};
lambda_inst_50_56_31_1_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_50_56_31_1_12_13_14_tsni(p, x)
  }
});
lambda$_inst_50_56_31_1_12_13_14_tsni = function lambda$_inst_50_56_31_1_12_13_14_tsni(p, x) {
  return newPositions_inst_50_56_31_1_12_13_14_15_tsni(p, x)
};
newPositions_inst_50_56_31_1_12_13_14_15_tsni = function newPositions_inst_50_56_31_1_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_50_56_31_1_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_50_56_31_1_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_50_56_31_1_12_13_14_15_24_tsni(tmp4)
};
map_inst_50_56_31_1_12_13_14_15_16_tsni = function map_inst_50_56_31_1_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_56_31_1_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_50_56_31_1_12_13_14_15_24_tsni(xs2);
      return append_inst_50_56_31_1_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_50_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_50_56_31_1_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_50_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_50_56_31_1_12_13_14_15_17_18_tsni = function lambda$_inst_50_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_50_56_31_1_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_50_56_31_1_12_13_14_15_17_18_19_tsni = function placePiece_inst_50_56_31_1_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_50_56_31_1_12_13_14_15_20_tsni = function lscomp1_inst_50_56_31_1_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_50_56_31_1_12_13_14_15_20_tsni = function lscomp2$_inst_50_56_31_1_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_50_56_31_1_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_50_56_31_1_12_21_22_tsni(p, x)
  }
});
lambda$_inst_50_56_31_1_12_21_22_tsni = function lambda$_inst_50_56_31_1_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_50_56_31_1_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_50_56_31_1_12_21_22_23_tsni = function newPositions_inst_50_56_31_1_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_50_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_50_56_31_1_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_50_56_31_1_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_50_56_31_1_12_21_22_23_24_tsni(tmp4)
};
map_inst_50_56_31_1_12_21_22_23_16_tsni = function map_inst_50_56_31_1_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_50_56_31_1_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_50_56_31_1_12_21_22_23_24_tsni(xs2);
      return append_inst_50_56_31_1_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_50_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_50_56_31_1_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_50_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_50_56_31_1_12_21_22_23_17_18_tsni = function lambda$_inst_50_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_50_56_31_1_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_50_56_31_1_12_21_22_23_17_18_19_tsni = function placePiece_inst_50_56_31_1_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_50_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_50_56_31_1_12_21_22_23_20_tsni = function lscomp1_inst_50_56_31_1_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_50_56_31_1_12_21_22_23_20_tsni = function lscomp2$_inst_50_56_31_1_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_50_56_31_1_12_13_14_15_24_tsni = function concat_inst_50_56_31_1_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_50_56_31_1_12_13_14_15_24_25_tsni = function append_inst_50_56_31_1_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_50_56_31_1_12_21_22_23_24_tsni = function concat_inst_50_56_31_1_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_50_56_31_1_12_21_22_23_24_25_tsni = function append_inst_50_56_31_1_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_50_56_31_1_12_26_tsni = function repTree_inst_50_56_31_1_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_50_56_31_1_12_26_tsni(f, g));
  tmp1 = map_inst_50_56_31_1_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_50_56_31_1_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_50_56_31_1_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_50_56_31_1_12_28_tsni(n));
        tmp2 = map_inst_50_56_31_1_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_50_56_31_1_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_50_56_31_1_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_50_56_31_1_12_26_tsni(f, g, x)
  }
});
lambda$_inst_50_56_31_1_12_26_tsni = function lambda$_inst_50_56_31_1_12_26_tsni(f, g, x) {
  return repTree_inst_50_56_31_1_12_26_tsni(g, f, x)
};
map_inst_50_56_31_1_12_26_27_tsni = function map_inst_50_56_31_1_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_50_56_31_1_12_28_tsni = function prune_inst_50_56_31_1_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_50_56_31_1_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_50_56_31_1_12_28_tsni(n, x)
  }
});
lambda$_inst_50_56_31_1_12_28_tsni = function lambda$_inst_50_56_31_1_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_50_56_31_1_12_28_tsni(tmp, x)
};
map_inst_50_56_31_1_12_28_29_tsni = function map_inst_50_56_31_1_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_50_57_tsni = function best_inst_50_57_tsni(f, bs, ss) {
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
      return best_$_inst_50_57_58_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_50_57_58_tsni = function best_$_inst_50_57_58_tsni(f, b, s, ls1, ls2) {
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
        return best_$_inst_50_57_58_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_50_57_58_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
alternate_inst_59_60_tsni = function alternate_inst_59_60_tsni(player, f, g, board1) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
  scrut2 = fullBoard_inst_59_60_51_tsni(board1);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_59_61_tsni(f1)
    }
  } else {
    tmp = static_inst_59_60_52_tsni(board1);
    scrut1 = evaluationEq_inst_59_60_71_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_61_tsni(f1)
      }
    } else {
      tmp1 = static_inst_59_60_54_tsni(board1);
      scrut = evaluationEq_inst_59_60_72_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_59_61_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_59_60_55_tsni(player, board1);
        lambda$this = runtime.safeCall(lambda_inst_59_60_56_tsni(f, g, opposition));
        scores = NofibPrelude.map(lambda$this, possibles);
        boardd_eval = best_inst_59_60_57_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
best_inst_59_60_57_tsni = function best_inst_59_60_57_tsni(f, bs, ss) {
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
      return best_$_inst_59_60_57_58_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_59_60_57_58_tsni = function best_$_inst_59_60_57_58_tsni(f, b, s, ls1, ls2) {
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
        tmp1 = alternate_inst_59_60_tsni(opposition, g, f1, boardd);
        _deforest_Cons_head = arr1;
        _deforest_Cons_tail = tmp1;
        return (f2) => {
          let param02, param12, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
          param02 = _deforest_Cons_head;
          param12 = _deforest_Cons_tail;
          x = param02;
          xs = param12;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_59_61_tsni(f2, xs);
          _deforest_Cons_head1 = tmp2;
          _deforest_Cons_tail1 = tmp3;
          return () => {
            let param03, param13, x1, xs1, tmp4;
            param03 = _deforest_Cons_head1;
            param13 = _deforest_Cons_tail1;
            x1 = param03;
            xs1 = param13;
            tmp4 = concat_inst_59_64_tsni(xs1);
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
        return best_$_inst_59_60_57_58_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_59_60_57_58_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_59_60_56_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_59_60_56_31_tsni(f, g, opposition, x)
  }
});
lambda$_inst_59_60_56_31_tsni = function lambda$_inst_59_60_56_31_tsni(f, g, opposition, x) {
  return bestMove_inst_59_60_56_31_1_tsni(opposition, g, f, x)
};
bestMove_inst_59_60_56_31_1_tsni = function bestMove_inst_59_60_56_31_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_59_60_56_31_1_12_tsni(p, b);
  tmp1 = mapTree_inst_59_60_56_31_1_68_tsni(static_inst_59_60_56_31_1_5_tsni, tmp);
  tmp2 = cropTree_inst_59_60_56_31_1_4_tsni(tmp1);
  return mise_inst_59_60_56_31_1_2_tsni(f, g, tmp2)
};
searchTree_inst_59_60_56_31_1_12_tsni = function searchTree_inst_59_60_56_31_1_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_59_60_56_31_1_12_21_tsni(p));
  tmp = repTree_inst_59_60_56_31_1_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_59_60_56_31_1_12_28_tsni(5, tmp)
};
repTree_inst_59_60_56_31_1_12_26_tsni = function repTree_inst_59_60_56_31_1_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_12_26_tsni(f, g));
  tmp1 = map_inst_59_60_56_31_1_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_59_60_56_31_1_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_59_60_56_31_1_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_59_60_56_31_1_12_28_tsni(n));
        tmp2 = map_inst_59_60_56_31_1_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a2 = a1;
        _deforest_Branch_cs2 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_59_60_56_31_1_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  }
};
lambda_inst_59_60_56_31_1_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_12_26_tsni(f, g, x)
  }
});
lambda$_inst_59_60_56_31_1_12_26_tsni = function lambda$_inst_59_60_56_31_1_12_26_tsni(f, g, x) {
  return repTree_inst_59_60_56_31_1_12_26_tsni(g, f, x)
};
map_inst_59_60_56_31_1_12_26_27_tsni = function map_inst_59_60_56_31_1_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_59_60_56_31_1_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_12_21_22_tsni(p, x)
  }
});
lambda$_inst_59_60_56_31_1_12_21_22_tsni = function lambda$_inst_59_60_56_31_1_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_59_60_56_31_1_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_59_60_56_31_1_12_21_22_23_tsni = function newPositions_inst_59_60_56_31_1_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_59_60_56_31_1_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_59_60_56_31_1_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_59_60_56_31_1_12_21_22_23_24_tsni(tmp4)
};
lscomp1_inst_59_60_56_31_1_12_21_22_23_20_tsni = function lscomp1_inst_59_60_56_31_1_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_59_60_56_31_1_12_21_22_23_20_tsni = function lscomp2$_inst_59_60_56_31_1_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_59_60_56_31_1_12_21_22_23_16_tsni = function map_inst_59_60_56_31_1_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_56_31_1_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_59_60_56_31_1_12_21_22_23_24_tsni(xs2);
      return append_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_60_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_59_60_56_31_1_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_59_60_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_59_60_56_31_1_12_21_22_23_17_18_tsni = function lambda$_inst_59_60_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_59_60_56_31_1_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_59_60_56_31_1_12_21_22_23_17_18_19_tsni = function placePiece_inst_59_60_56_31_1_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_59_60_56_31_1_12_21_22_23_24_tsni = function concat_inst_59_60_56_31_1_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_59_60_56_31_1_12_21_22_23_24_25_tsni = function append_inst_59_60_56_31_1_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_59_60_56_31_1_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_12_13_14_tsni(p, x)
  }
});
lambda$_inst_59_60_56_31_1_12_13_14_tsni = function lambda$_inst_59_60_56_31_1_12_13_14_tsni(p, x) {
  return newPositions_inst_59_60_56_31_1_12_13_14_15_tsni(p, x)
};
newPositions_inst_59_60_56_31_1_12_13_14_15_tsni = function newPositions_inst_59_60_56_31_1_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_59_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_59_60_56_31_1_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_59_60_56_31_1_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_59_60_56_31_1_12_13_14_15_24_tsni(tmp4)
};
lscomp1_inst_59_60_56_31_1_12_13_14_15_20_tsni = function lscomp1_inst_59_60_56_31_1_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_59_60_56_31_1_12_13_14_15_20_tsni = function lscomp2$_inst_59_60_56_31_1_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_59_60_56_31_1_12_13_14_15_16_tsni = function map_inst_59_60_56_31_1_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_56_31_1_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_59_60_56_31_1_12_13_14_15_24_tsni(xs2);
      return append_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_60_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_59_60_56_31_1_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_59_60_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_59_60_56_31_1_12_13_14_15_17_18_tsni = function lambda$_inst_59_60_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_59_60_56_31_1_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_59_60_56_31_1_12_13_14_15_17_18_19_tsni = function placePiece_inst_59_60_56_31_1_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
concat_inst_59_60_56_31_1_12_13_14_15_24_tsni = function concat_inst_59_60_56_31_1_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_59_60_56_31_1_12_13_14_15_24_25_tsni = function append_inst_59_60_56_31_1_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
static_inst_59_60_56_31_1_5_tsni = function static_inst_59_60_56_31_1_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_59_60_56_31_1_5_6_tsni(board1));
  tmp = map_inst_59_60_56_31_1_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_59_60_56_31_1_5_53_tsni(0, tmp)
};
map_inst_59_60_56_31_1_5_10_tsni = function map_inst_59_60_56_31_1_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_56_31_1_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_59_60_56_31_1_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_59_60_56_31_1_5_6_7_tsni = function lambda$_inst_59_60_56_31_1_5_6_7_tsni(board1, x) {
  return score_inst_59_60_56_31_1_5_6_7_8_tsni(board1, x)
};
score_inst_59_60_56_31_1_5_6_7_8_tsni = function score_inst_59_60_56_31_1_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_59_60_56_31_1_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_59_60_56_31_1_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_59_60_56_31_1_5_6_7_8_11_tsni(tmp2)
};
map2_inst_59_60_56_31_1_5_6_7_8_9_tsni = function map2_inst_59_60_56_31_1_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_59_60_56_31_1_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_59_60_56_31_1_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_59_60_56_31_1_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_60_56_31_1_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_59_60_56_31_1_5_6_7_8_11_tsni = function eval_inst_59_60_56_31_1_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_59_60_56_31_1_5_53_tsni(tmp1, ls)
      }
    }
  }
};
prune_inst_59_60_56_31_1_12_28_tsni = function prune_inst_59_60_56_31_1_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_59_60_56_31_1_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_12_28_tsni(n, x)
  }
});
lambda$_inst_59_60_56_31_1_12_28_tsni = function lambda$_inst_59_60_56_31_1_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_59_60_56_31_1_12_28_tsni(tmp, x)
};
map_inst_59_60_56_31_1_12_28_29_tsni = function map_inst_59_60_56_31_1_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mise_inst_59_60_56_31_1_2_tsni = function mise_inst_59_60_56_31_1_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
lambda_inst_59_60_56_31_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_2_tsni(f, g, x)
  }
});
lambda$_inst_59_60_56_31_1_2_tsni = function lambda$_inst_59_60_56_31_1_2_tsni(f, g, x) {
  return mise_inst_59_60_56_31_1_2_tsni(g, f, x)
};
map_inst_59_60_56_31_1_2_3_tsni = function map_inst_59_60_56_31_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_56_31_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_59_60_56_31_1_2_66_tsni(f1, z, t);
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
cropTree_inst_59_60_56_31_1_4_tsni = function cropTree_inst_59_60_56_31_1_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_59_60_56_31_1_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_59_60_56_31_1_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_59_60_56_31_1_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_59_60_56_31_1_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
newPositions_inst_59_60_55_tsni = function newPositions_inst_59_60_55_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_59_60_55_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_59_60_55_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_59_60_55_17_tsni(piece, board1));
  tmp4 = map_inst_59_60_55_16_tsni(lambda$this, tmp3);
  return concat_inst_59_60_55_24_tsni(tmp4)
};
lscomp1_inst_59_60_55_20_tsni = function lscomp1_inst_59_60_55_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_59_60_55_20_tsni = function lscomp2$_inst_59_60_55_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
map_inst_59_60_55_16_tsni = function map_inst_59_60_55_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_55_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_59_60_55_24_tsni(xs2);
      return append_inst_59_60_55_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_59_60_55_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_59_60_55_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_59_60_55_17_18_tsni = function lambda$_inst_59_60_55_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_59_60_55_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_59_60_55_17_18_19_tsni = function placePiece_inst_59_60_55_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_59_60_55_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head = tmp4;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_55_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_55_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head2 = tmp12;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_59_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_60_55_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
static_inst_59_60_54_tsni = function static_inst_59_60_54_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_59_60_54_6_tsni(board1));
  tmp = map_inst_59_60_54_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_59_60_54_53_tsni(0, tmp)
};
lambda_inst_59_60_54_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_59_60_54_6_7_tsni(board1, x)
  }
});
lambda$_inst_59_60_54_6_7_tsni = function lambda$_inst_59_60_54_6_7_tsni(board1, x) {
  return score_inst_59_60_54_6_7_8_tsni(board1, x)
};
score_inst_59_60_54_6_7_8_tsni = function score_inst_59_60_54_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_59_60_54_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_59_60_54_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_59_60_54_6_7_8_11_tsni(tmp2)
};
map2_inst_59_60_54_6_7_8_9_tsni = function map2_inst_59_60_54_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_59_60_54_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_59_60_54_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_59_60_54_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_60_54_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_59_60_54_10_tsni = function map_inst_59_60_54_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_54_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
eval_inst_59_60_54_6_7_8_11_tsni = function eval_inst_59_60_54_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_59_60_54_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_59_60_54_53_tsni = function interpret_inst_59_60_54_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_59_60_52_tsni = function static_inst_59_60_52_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_59_60_52_6_tsni(board1));
  tmp = map_inst_59_60_52_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_59_60_52_53_tsni(0, tmp)
};
lambda_inst_59_60_52_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_59_60_52_6_7_tsni(board1, x)
  }
});
lambda$_inst_59_60_52_6_7_tsni = function lambda$_inst_59_60_52_6_7_tsni(board1, x) {
  return score_inst_59_60_52_6_7_8_tsni(board1, x)
};
score_inst_59_60_52_6_7_8_tsni = function score_inst_59_60_52_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_59_60_52_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_59_60_52_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_59_60_52_6_7_8_11_tsni(tmp2)
};
map2_inst_59_60_52_6_7_8_9_tsni = function map2_inst_59_60_52_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_59_60_52_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_59_60_52_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_59_60_52_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_59_60_52_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_59_60_52_10_tsni = function map_inst_59_60_52_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_59_60_52_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
eval_inst_59_60_52_6_7_8_11_tsni = function eval_inst_59_60_52_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_59_60_52_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_59_60_52_53_tsni = function interpret_inst_59_60_52_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
fullBoard_inst_59_60_51_tsni = function fullBoard_inst_59_60_51_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_59_60_51_42_tsni(b);
  tmp1 = map_inst_59_60_51_43_tsni(lambda, tmp);
  return andd_inst_59_60_51_70_tsni(tmp1)
};
concat_inst_59_60_51_42_tsni = function concat_inst_59_60_51_42_tsni(ls) {
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
    tmp = concat_inst_59_60_51_42_tsni(xs);
    return append_inst_59_60_51_42_25_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_60_51_42_25_tsni = function append_inst_59_60_51_42_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_60_51_42_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_59_60_51_43_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_59_60_51_70_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_59_60_51_43_tsni = function map_inst_59_60_51_43_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_59_61_tsni = function map_inst_59_61_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prog_inst_62_63_tsni = function prog_inst_62_63_tsni(input) {
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
  tmp13 = alternate_inst_62_63_60_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
  game = tmp13;
  tmp14 = NofibPrelude.nofibStringToList("OXO\n");
  tmp15 = map_inst_62_63_61_tsni(showMove_inst_62_63_73_tsni, game);
  tmp16 = concat_inst_62_63_64_tsni(tmp15);
  return append_inst_62_63_65_tsni(tmp14, tmp16)
};
map_inst_62_63_61_tsni = function map_inst_62_63_61_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
alternate_inst_62_63_60_tsni = function alternate_inst_62_63_60_tsni(player, f, g, board1) {
  let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
  scrut2 = fullBoard_inst_62_63_60_51_tsni(board1);
  if (scrut2 === true) {
    return (f1) => {
      return match_xs_arm_Nil_inst_62_63_61_tsni(f1)
    }
  } else {
    tmp = static_inst_62_63_60_52_tsni(board1);
    scrut1 = evaluationEq_inst_62_63_60_71_tsni(tmp, minimax.XWin);
    if (scrut1 === true) {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_61_tsni(f1)
      }
    } else {
      tmp1 = static_inst_62_63_60_54_tsni(board1);
      scrut = evaluationEq_inst_62_63_60_72_tsni(tmp1, minimax.OWin);
      if (scrut === true) {
        return (f1) => {
          return match_xs_arm_Nil_inst_62_63_61_tsni(f1)
        }
      } else {
        opposition = minimax.opposite(player);
        possibles = newPositions_inst_62_63_60_55_tsni(player, board1);
        lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_tsni(f, g, opposition));
        scores = NofibPrelude.map(lambda$this, possibles);
        boardd_eval = best_inst_62_63_60_57_tsni(f, possibles, scores);
        return runtime.safeCall(boardd_eval(f, g, opposition))
      }
    }
  }
};
fullBoard_inst_62_63_60_51_tsni = function fullBoard_inst_62_63_60_51_tsni(b) {
  let tmp, tmp1;
  tmp = concat_inst_62_63_60_51_42_tsni(b);
  tmp1 = map_inst_62_63_60_51_43_tsni(lambda, tmp);
  return andd_inst_62_63_60_51_70_tsni(tmp1)
};
map_inst_62_63_60_51_43_tsni = function map_inst_62_63_60_51_43_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_62_63_60_51_42_tsni = function concat_inst_62_63_60_51_42_tsni(ls) {
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
    tmp = concat_inst_62_63_60_51_42_tsni(xs);
    return append_inst_62_63_60_51_42_25_tsni(x, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_62_63_60_51_42_25_tsni = function append_inst_62_63_60_51_42_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_62_63_60_51_42_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs2, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_62_63_60_51_43_tsni(f, xs2);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, b, bs, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        b = param02;
        bs = param12;
        tmp3 = andd_inst_62_63_60_51_70_tsni(bs);
        return b && tmp3
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_62_63_60_52_tsni = function static_inst_62_63_60_52_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_52_6_tsni(board1));
  tmp = map_inst_62_63_60_52_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_62_63_60_52_53_tsni(0, tmp)
};
map_inst_62_63_60_52_10_tsni = function map_inst_62_63_60_52_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_52_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
lambda_inst_62_63_60_52_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_62_63_60_52_6_7_tsni(board1, x)
  }
});
lambda$_inst_62_63_60_52_6_7_tsni = function lambda$_inst_62_63_60_52_6_7_tsni(board1, x) {
  return score_inst_62_63_60_52_6_7_8_tsni(board1, x)
};
score_inst_62_63_60_52_6_7_8_tsni = function score_inst_62_63_60_52_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_62_63_60_52_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_62_63_60_52_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_62_63_60_52_6_7_8_11_tsni(tmp2)
};
map2_inst_62_63_60_52_6_7_8_9_tsni = function map2_inst_62_63_60_52_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_62_63_60_52_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_62_63_60_52_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_62_63_60_52_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_60_52_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_62_63_60_52_6_7_8_11_tsni = function eval_inst_62_63_60_52_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_62_63_60_52_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_62_63_60_52_53_tsni = function interpret_inst_62_63_60_52_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
static_inst_62_63_60_54_tsni = function static_inst_62_63_60_54_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_54_6_tsni(board1));
  tmp = map_inst_62_63_60_54_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_62_63_60_54_53_tsni(0, tmp)
};
map_inst_62_63_60_54_10_tsni = function map_inst_62_63_60_54_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_54_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
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
lambda_inst_62_63_60_54_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_62_63_60_54_6_7_tsni(board1, x)
  }
});
lambda$_inst_62_63_60_54_6_7_tsni = function lambda$_inst_62_63_60_54_6_7_tsni(board1, x) {
  return score_inst_62_63_60_54_6_7_8_tsni(board1, x)
};
score_inst_62_63_60_54_6_7_8_tsni = function score_inst_62_63_60_54_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_62_63_60_54_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_62_63_60_54_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_62_63_60_54_6_7_8_11_tsni(tmp2)
};
map2_inst_62_63_60_54_6_7_8_9_tsni = function map2_inst_62_63_60_54_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_62_63_60_54_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_62_63_60_54_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_62_63_60_54_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_60_54_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_62_63_60_54_6_7_8_11_tsni = function eval_inst_62_63_60_54_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return (y) => {
        if (y instanceof minimax.XWin.class) {
          return true
        } else {
          return false
        }
      }
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return (y) => {
          if (y instanceof minimax.OWin.class) {
            return true
          } else {
            return false
          }
        }
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_62_63_60_54_53_tsni(tmp1, ls)
      }
    }
  }
};
interpret_inst_62_63_60_54_53_tsni = function interpret_inst_62_63_60_54_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
newPositions_inst_62_63_60_55_tsni = function newPositions_inst_62_63_60_55_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_62_63_60_55_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_62_63_60_55_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_55_17_tsni(piece, board1));
  tmp4 = map_inst_62_63_60_55_16_tsni(lambda$this, tmp3);
  return concat_inst_62_63_60_55_24_tsni(tmp4)
};
map_inst_62_63_60_55_16_tsni = function map_inst_62_63_60_55_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_55_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_62_63_60_55_24_tsni(xs2);
      return append_inst_62_63_60_55_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_62_63_60_55_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_62_63_60_55_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_62_63_60_55_17_18_tsni = function lambda$_inst_62_63_60_55_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_62_63_60_55_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_62_63_60_55_17_18_19_tsni = function placePiece_inst_62_63_60_55_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_55_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_55_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_62_63_60_55_20_tsni = function lscomp1_inst_62_63_60_55_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_62_63_60_55_20_tsni = function lscomp2$_inst_62_63_60_55_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_62_63_60_56_tsni = (undefined, function (f, g, opposition) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_tsni(f, g, opposition, x)
  }
});
lambda$_inst_62_63_60_56_31_tsni = function lambda$_inst_62_63_60_56_31_tsni(f, g, opposition, x) {
  return bestMove_inst_62_63_60_56_31_1_tsni(opposition, g, f, x)
};
bestMove_inst_62_63_60_56_31_1_tsni = function bestMove_inst_62_63_60_56_31_1_tsni(p, f, g, b) {
  let tmp, tmp1, tmp2;
  tmp = searchTree_inst_62_63_60_56_31_1_12_tsni(p, b);
  tmp1 = mapTree_inst_62_63_60_56_31_1_68_tsni(static_inst_62_63_60_56_31_1_5_tsni, tmp);
  tmp2 = cropTree_inst_62_63_60_56_31_1_4_tsni(tmp1);
  return mise_inst_62_63_60_56_31_1_2_tsni(f, g, tmp2)
};
mise_inst_62_63_60_56_31_1_2_tsni = function mise_inst_62_63_60_56_31_1_2_tsni(f, g, t) {
  return runtime.safeCall(t(f, g))
};
lambda_inst_62_63_60_56_31_1_2_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_2_tsni(f, g, x)
  }
});
lambda$_inst_62_63_60_56_31_1_2_tsni = function lambda$_inst_62_63_60_56_31_1_2_tsni(f, g, x) {
  return mise_inst_62_63_60_56_31_1_2_tsni(g, f, x)
};
map_inst_62_63_60_56_31_1_2_3_tsni = function map_inst_62_63_60_56_31_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_56_31_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_62_63_60_56_31_1_2_66_tsni(f1, z, t);
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
cropTree_inst_62_63_60_56_31_1_4_tsni = function cropTree_inst_62_63_60_56_31_1_4_tsni(t) {
  let param0, param1, x, l, param01, x1, l1, a, tmp, tmp1, _deforest_Branch_a, _deforest_Branch_cs, _deforest_Branch_a1, _deforest_Branch_cs1, _deforest_Branch_a2, _deforest_Branch_cs2;
  if (t instanceof minimax.Branch.class) {
    param0 = t.a;
    param1 = t.cs;
    a = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      _deforest_Branch_a1 = a;
      _deforest_Branch_cs1 = NofibPrelude.Nil;
      return (f, g) => {
        return match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni(f, g, _deforest_Branch_a1, _deforest_Branch_cs1)
      }
    } else {
      if (param0 instanceof minimax.Score.class) {
        param01 = param0.i;
        x1 = param01;
        l1 = param1;
        tmp = runtime.safeCall(minimax.Score(x1));
        tmp1 = NofibPrelude.map(cropTree_inst_62_63_60_56_31_1_4_tsni, l1);
        _deforest_Branch_a = tmp;
        _deforest_Branch_cs = tmp1;
        return (f, g) => {
          return match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni(f, g, _deforest_Branch_a, _deforest_Branch_cs)
        }
      } else {
        x = param0;
        l = param1;
        _deforest_Branch_a2 = x;
        _deforest_Branch_cs2 = NofibPrelude.Nil;
        return (f, g) => {
          return match_t_arm_Branch_inst_62_63_60_56_31_1_2_tsni(f, g, _deforest_Branch_a2, _deforest_Branch_cs2)
        }
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
static_inst_62_63_60_56_31_1_5_tsni = function static_inst_62_63_60_56_31_1_5_tsni(board1) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_5_6_tsni(board1));
  tmp = map_inst_62_63_60_56_31_1_5_10_tsni(lambda$this, minimax.wins);
  return interpret_inst_62_63_60_56_31_1_5_53_tsni(0, tmp)
};
lambda_inst_62_63_60_56_31_1_5_6_tsni = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_5_6_7_tsni(board1, x)
  }
});
lambda$_inst_62_63_60_56_31_1_5_6_7_tsni = function lambda$_inst_62_63_60_56_31_1_5_6_7_tsni(board1, x) {
  return score_inst_62_63_60_56_31_1_5_6_7_8_tsni(board1, x)
};
score_inst_62_63_60_56_31_1_5_6_7_8_tsni = function score_inst_62_63_60_56_31_1_5_6_7_8_tsni(board1, win) {
  let tmp, tmp1, tmp2;
  tmp = map2_inst_62_63_60_56_31_1_5_6_7_8_9_tsni(lambda2, board1, win);
  tmp1 = map_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(NofibPrelude.sum, tmp);
  tmp2 = NofibPrelude.sum(tmp1);
  return eval_inst_62_63_60_56_31_1_5_6_7_8_11_tsni(tmp2)
};
map2_inst_62_63_60_56_31_1_5_6_7_8_9_tsni = function map2_inst_62_63_60_56_31_1_5_6_7_8_9_tsni(f, xs, ys) {
  let param0, param1, x, xs1, param01, param11, y, ys1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return match_xs_arm_Nil_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(f1)
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
      tmp1 = map2_inst_62_63_60_56_31_1_5_6_7_8_9_tsni(f, xs1, ys1);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1) => {
        let param02, param12, x1, xs2, tmp2, tmp3;
        param02 = _deforest_Cons_head;
        param12 = _deforest_Cons_tail;
        x1 = param02;
        xs2 = param12;
        tmp2 = runtime.safeCall(f1(x1));
        tmp3 = map_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(f1, xs2);
        return NofibPrelude.Cons(tmp2, tmp3)
      }
    } else if (ys instanceof NofibPrelude.Nil.class) {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(f1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
map_inst_62_63_60_56_31_1_5_10_tsni = function map_inst_62_63_60_56_31_1_5_10_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_56_31_1_5_10_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (x1) => {
      let param01, param11;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      return runtime.safeCall(param01(x1, param11))
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (x1) => {
      return runtime.safeCall(minimax.Score(x1))
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
eval_inst_62_63_60_56_31_1_5_6_7_8_11_tsni = function eval_inst_62_63_60_56_31_1_5_6_7_8_11_tsni(x) {
  let scrut, scrut1, tmp, _deforest_Score_i;
  scrut1 = x === 3;
  if (scrut1 === true) {
    return (x1, param1) => {
      return minimax.XWin
    }
  } else {
    tmp = - 3;
    scrut = x === tmp;
    if (scrut === true) {
      return (x1, param1) => {
        return minimax.OWin
      }
    } else {
      _deforest_Score_i = x;
      return (x1, param1) => {
        let param0, y, ls, tmp1;
        param0 = _deforest_Score_i;
        y = param0;
        ls = param1;
        tmp1 = x1 + y;
        return interpret_inst_62_63_60_56_31_1_5_53_tsni(tmp1, ls)
      }
    }
  }
};
searchTree_inst_62_63_60_56_31_1_12_tsni = function searchTree_inst_62_63_60_56_31_1_12_tsni(p, board1) {
  let tmp, lambda$this, lambda$this1;
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_13_tsni(p));
  lambda$this1 = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_21_tsni(p));
  tmp = repTree_inst_62_63_60_56_31_1_12_26_tsni(lambda$this, lambda$this1, board1);
  return prune_inst_62_63_60_56_31_1_12_28_tsni(5, tmp)
};
lambda_inst_62_63_60_56_31_1_12_13_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_12_13_14_tsni(p, x)
  }
});
lambda$_inst_62_63_60_56_31_1_12_13_14_tsni = function lambda$_inst_62_63_60_56_31_1_12_13_14_tsni(p, x) {
  return newPositions_inst_62_63_60_56_31_1_12_13_14_15_tsni(p, x)
};
newPositions_inst_62_63_60_56_31_1_12_13_14_15_tsni = function newPositions_inst_62_63_60_56_31_1_12_13_14_15_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_13_14_15_17_tsni(piece, board1));
  tmp4 = map_inst_62_63_60_56_31_1_12_13_14_15_16_tsni(lambda$this, tmp3);
  return concat_inst_62_63_60_56_31_1_12_13_14_15_24_tsni(tmp4)
};
map_inst_62_63_60_56_31_1_12_13_14_15_16_tsni = function map_inst_62_63_60_56_31_1_12_13_14_15_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_56_31_1_12_13_14_15_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_62_63_60_56_31_1_12_13_14_15_24_tsni(xs2);
      return append_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_62_63_60_56_31_1_12_13_14_15_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_62_63_60_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_62_63_60_56_31_1_12_13_14_15_17_18_tsni = function lambda$_inst_62_63_60_56_31_1_12_13_14_15_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_62_63_60_56_31_1_12_13_14_15_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_62_63_60_56_31_1_12_13_14_15_17_18_19_tsni = function placePiece_inst_62_63_60_56_31_1_12_13_14_15_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_62_63_60_56_31_1_12_13_14_15_20_tsni = function lscomp1_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_62_63_60_56_31_1_12_13_14_15_20_tsni = function lscomp2$_inst_62_63_60_56_31_1_12_13_14_15_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
lambda_inst_62_63_60_56_31_1_12_21_tsni = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_12_21_22_tsni(p, x)
  }
});
lambda$_inst_62_63_60_56_31_1_12_21_22_tsni = function lambda$_inst_62_63_60_56_31_1_12_21_22_tsni(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_62_63_60_56_31_1_12_21_22_23_tsni(tmp, x)
};
newPositions_inst_62_63_60_56_31_1_12_21_22_23_tsni = function newPositions_inst_62_63_60_56_31_1_12_21_22_23_tsni(piece, board1) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  _deforest_Cons_head2 = 3;
  _deforest_Cons_tail2 = () => {
    return NofibPrelude.Nil
  };
  tmp = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = 2;
  _deforest_Cons_tail1 = tmp;
  tmp1 = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 1;
  _deforest_Cons_tail = tmp1;
  tmp2 = () => {
    return match_ls_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp3 = lscomp1_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(tmp2);
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_21_22_23_17_tsni(piece, board1));
  tmp4 = map_inst_62_63_60_56_31_1_12_21_22_23_16_tsni(lambda$this, tmp3);
  return concat_inst_62_63_60_56_31_1_12_21_22_23_24_tsni(tmp4)
};
map_inst_62_63_60_56_31_1_12_21_22_23_16_tsni = function map_inst_62_63_60_56_31_1_12_21_22_23_16_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_62_63_60_56_31_1_12_21_22_23_16_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_62_63_60_56_31_1_12_21_22_23_24_tsni(xs2);
      return append_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (f1) => {
        return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_26_27_tsni(f1)
      }
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_62_63_60_56_31_1_12_21_22_23_17_tsni = (undefined, function (piece, board1) {
  return (pos) => {
    return lambda$_inst_62_63_60_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos)
  }
});
lambda$_inst_62_63_60_56_31_1_12_21_22_23_17_18_tsni = function lambda$_inst_62_63_60_56_31_1_12_21_22_23_17_18_tsni(piece, board1, pos) {
  return placePiece_inst_62_63_60_56_31_1_12_21_22_23_17_18_19_tsni(piece, board1, pos)
};
placePiece_inst_62_63_60_56_31_1_12_21_22_23_17_18_19_tsni = function placePiece_inst_62_63_60_56_31_1_12_21_22_23_17_18_19_tsni(p, board1, pos) {
  let param0, param1, r1, param01, param11, r2, param02, param12, r3, first1, first0, x, x1, x2, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
  tmp = minimax.empty(pos, board1);
  scrut = Predef.not(tmp);
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys)
    }
  } else {
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
                x2 = first1;
                tmp1 = minimax.insert(p, r1, x2);
                tmp2 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp3 = NofibPrelude.Cons(r2, tmp2);
                tmp4 = NofibPrelude.Cons(tmp1, tmp3);
                _deforest_Cons_head2 = tmp4;
                _deforest_Cons_tail2 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
                }
              } else if (first0 === 2) {
                x1 = first1;
                tmp5 = minimax.insert(p, r2, x1);
                tmp6 = NofibPrelude.Cons(r3, NofibPrelude.Nil);
                tmp7 = NofibPrelude.Cons(tmp5, tmp6);
                tmp8 = NofibPrelude.Cons(r1, tmp7);
                _deforest_Cons_head1 = tmp8;
                _deforest_Cons_tail1 = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
                }
              } else if (first0 === 3) {
                x = first1;
                tmp9 = minimax.insert(p, r3, x);
                tmp10 = NofibPrelude.Cons(tmp9, NofibPrelude.Nil);
                tmp11 = NofibPrelude.Cons(r2, tmp10);
                tmp12 = NofibPrelude.Cons(r1, tmp11);
                _deforest_Cons_head = tmp12;
                _deforest_Cons_tail = (ys) => {
                  return match_xs_arm_Nil_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys)
                };
                return (ys) => {
                  return match_xs_arm_Cons_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    } else {
      throw new globalThis.Error("match error");
    }
  }
};
lscomp1_inst_62_63_60_56_31_1_12_21_22_23_20_tsni = function lscomp1_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_62_63_60_56_31_1_12_21_22_23_20_tsni = function lscomp2$_inst_62_63_60_56_31_1_12_21_22_23_20_tsni(x, xs, ls) {
  return runtime.safeCall(ls(x, xs))
};
concat_inst_62_63_60_56_31_1_12_13_14_15_24_tsni = function concat_inst_62_63_60_56_31_1_12_13_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni = function append_inst_62_63_60_56_31_1_12_13_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_62_63_60_56_31_1_12_21_22_23_24_tsni = function concat_inst_62_63_60_56_31_1_12_21_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni = function append_inst_62_63_60_56_31_1_12_21_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
repTree_inst_62_63_60_56_31_1_12_26_tsni = function repTree_inst_62_63_60_56_31_1_12_26_tsni(f, g, a) {
  let tmp, tmp1, lambda$this, _deforest_Branch_a, _deforest_Branch_cs;
  tmp = runtime.safeCall(f(a));
  lambda$this = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_26_tsni(f, g));
  tmp1 = map_inst_62_63_60_56_31_1_12_26_27_tsni(lambda$this, tmp);
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
        return match_xs_arm_Nil_inst_62_63_60_56_31_1_68_69_tsni(f1)
      };
      return (f1) => {
        return match_t_arm_Branch_inst_62_63_60_56_31_1_68_tsni(f1, _deforest_Branch_a2, _deforest_Branch_cs2)
      }
    } else {
      scrut = n < 0;
      if (scrut === true) {
        throw globalThis.Error("Tree.prune: < 0");
      } else {
        lambda$this1 = runtime.safeCall(lambda_inst_62_63_60_56_31_1_12_28_tsni(n));
        tmp2 = map_inst_62_63_60_56_31_1_12_28_29_tsni(lambda$this1, l);
        _deforest_Branch_a1 = a1;
        _deforest_Branch_cs1 = tmp2;
        return (f1) => {
          return match_t_arm_Branch_inst_62_63_60_56_31_1_68_tsni(f1, _deforest_Branch_a1, _deforest_Branch_cs1)
        }
      }
    }
  }
};
lambda_inst_62_63_60_56_31_1_12_26_tsni = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_12_26_tsni(f, g, x)
  }
});
lambda$_inst_62_63_60_56_31_1_12_26_tsni = function lambda$_inst_62_63_60_56_31_1_12_26_tsni(f, g, x) {
  return repTree_inst_62_63_60_56_31_1_12_26_tsni(g, f, x)
};
map_inst_62_63_60_56_31_1_12_26_27_tsni = function map_inst_62_63_60_56_31_1_12_26_27_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_62_63_60_56_31_1_12_28_tsni = function prune_inst_62_63_60_56_31_1_12_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_62_63_60_56_31_1_12_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_12_28_tsni(n, x)
  }
});
lambda$_inst_62_63_60_56_31_1_12_28_tsni = function lambda$_inst_62_63_60_56_31_1_12_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_62_63_60_56_31_1_12_28_tsni(tmp, x)
};
map_inst_62_63_60_56_31_1_12_28_29_tsni = function map_inst_62_63_60_56_31_1_12_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
best_inst_62_63_60_57_tsni = function best_inst_62_63_60_57_tsni(f, bs, ss) {
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
      return best_$_inst_62_63_60_57_58_tsni(f, b, s, bs1, ss1)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
best_$_inst_62_63_60_57_58_tsni = function best_$_inst_62_63_60_57_58_tsni(f, b, s, ls1, ls2) {
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
        tmp1 = alternate_inst_62_63_60_tsni(opposition, g, f1, boardd);
        _deforest_Cons_head = arr1;
        _deforest_Cons_tail = tmp1;
        return (f2) => {
          let param02, param12, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
          param02 = _deforest_Cons_head;
          param12 = _deforest_Cons_tail;
          x = param02;
          xs = param12;
          tmp2 = runtime.safeCall(f2(x));
          tmp3 = map_inst_62_63_61_tsni(f2, xs);
          _deforest_Cons_head1 = tmp2;
          _deforest_Cons_tail1 = tmp3;
          return () => {
            let param03, param13, x1, xs1, tmp4;
            param03 = _deforest_Cons_head1;
            param13 = _deforest_Cons_tail1;
            x1 = param03;
            xs1 = param13;
            tmp4 = concat_inst_62_63_64_tsni(xs1);
            return append_inst_62_63_64_25_tsni(x1, tmp4)
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
        return best_$_inst_62_63_60_57_58_tsni(f, b, s, bs, ss)
      } else {
        return best_$_inst_62_63_60_57_58_tsni(f, b_, s_, bs, ss)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
concat_inst_62_63_64_tsni = function concat_inst_62_63_64_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_62_63_64_25_tsni = function append_inst_62_63_64_25_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_62_63_64_25_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_62_74_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_62_63_65_tsni = function append_inst_62_63_65_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_62_63_65_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_62_74_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
foldr_inst_0_1_2_66_tsni = function foldr_inst_0_1_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_0_1_5_6_7_8_67_tsni = function map_inst_0_1_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_0_1_5_53_tsni = function interpret_inst_0_1_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_0_1_68_tsni = function mapTree_inst_0_1_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_0_1_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_0_1_68_tsni(f, x)
  }
});
lambda$_inst_0_1_68_tsni = function lambda$_inst_0_1_68_tsni(f, x) {
  return mapTree_inst_0_1_68_tsni(f, x)
};
map_inst_0_1_68_69_tsni = function map_inst_0_1_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_30_31_1_5_53_tsni = function interpret_inst_30_31_1_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_30_31_1_5_6_7_8_67_tsni = function map_inst_30_31_1_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_30_31_1_68_tsni = function mapTree_inst_30_31_1_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_30_31_1_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_30_31_1_68_tsni(f, x)
  }
});
lambda$_inst_30_31_1_68_tsni = function lambda$_inst_30_31_1_68_tsni(f, x) {
  return mapTree_inst_30_31_1_68_tsni(f, x)
};
map_inst_30_31_1_68_69_tsni = function map_inst_30_31_1_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_30_31_1_2_66_tsni = function foldr_inst_30_31_1_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_32_15_24_tsni = function concat_inst_32_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_32_15_24_25_tsni = function append_inst_32_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_33_14_15_24_tsni = function concat_inst_33_14_15_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_33_14_15_24_25_tsni = function append_inst_33_14_15_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_34_23_24_tsni = function concat_inst_34_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_34_23_24_25_tsni = function append_inst_34_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_35_22_23_24_tsni = function concat_inst_35_22_23_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_35_22_23_24_25_tsni = function append_inst_35_22_23_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_36_66_tsni = function foldr_inst_36_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
foldr_inst_37_66_tsni = function foldr_inst_37_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_38_8_67_tsni = function map_inst_38_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_39_7_8_67_tsni = function map_inst_39_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
andd_inst_41_70_tsni = function andd_inst_41_70_tsni(ls) {
  return runtime.safeCall(ls())
};
concat_inst_44_24_tsni = function concat_inst_44_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_44_24_25_tsni = function append_inst_44_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_45_67_tsni = function map_inst_45_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_46_6_7_8_67_tsni = function map_inst_46_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_46_53_tsni = function interpret_inst_46_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
foldr_inst_47_66_tsni = function foldr_inst_47_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
prune_inst_48_28_tsni = function prune_inst_48_28_tsni(n, t) {
  return runtime.safeCall(t(n))
};
lambda_inst_48_28_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_48_28_tsni(n, x)
  }
});
lambda$_inst_48_28_tsni = function lambda$_inst_48_28_tsni(n, x) {
  let tmp;
  tmp = n - 1;
  return prune_inst_48_28_tsni(tmp, x)
};
map_inst_48_28_29_tsni = function map_inst_48_28_29_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_49_5_53_tsni = function interpret_inst_49_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_49_5_6_7_8_67_tsni = function map_inst_49_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_49_68_tsni = function mapTree_inst_49_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_49_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_49_68_tsni(f, x)
  }
});
lambda$_inst_49_68_tsni = function lambda$_inst_49_68_tsni(f, x) {
  return mapTree_inst_49_68_tsni(f, x)
};
map_inst_49_68_69_tsni = function map_inst_49_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_49_2_66_tsni = function foldr_inst_49_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
andd_inst_50_51_70_tsni = function andd_inst_50_51_70_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_50_52_6_7_8_67_tsni = function map_inst_50_52_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_50_71_tsni = function evaluationEq_inst_50_71_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_50_54_6_7_8_67_tsni = function map_inst_50_54_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_50_72_tsni = function evaluationEq_inst_50_72_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_50_55_24_tsni = function concat_inst_50_55_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_50_55_24_25_tsni = function append_inst_50_55_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_50_56_31_1_2_66_tsni = function foldr_inst_50_56_31_1_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_50_56_31_1_5_6_7_8_67_tsni = function map_inst_50_56_31_1_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_50_56_31_1_5_53_tsni = function interpret_inst_50_56_31_1_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_50_56_31_1_68_tsni = function mapTree_inst_50_56_31_1_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_50_56_31_1_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_50_56_31_1_68_tsni(f, x)
  }
});
lambda$_inst_50_56_31_1_68_tsni = function lambda$_inst_50_56_31_1_68_tsni(f, x) {
  return mapTree_inst_50_56_31_1_68_tsni(f, x)
};
map_inst_50_56_31_1_68_69_tsni = function map_inst_50_56_31_1_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_59_60_56_31_1_5_53_tsni = function interpret_inst_59_60_56_31_1_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
map_inst_59_60_56_31_1_5_6_7_8_67_tsni = function map_inst_59_60_56_31_1_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_59_60_56_31_1_68_tsni = function mapTree_inst_59_60_56_31_1_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_59_60_56_31_1_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_59_60_56_31_1_68_tsni(f, x)
  }
});
lambda$_inst_59_60_56_31_1_68_tsni = function lambda$_inst_59_60_56_31_1_68_tsni(f, x) {
  return mapTree_inst_59_60_56_31_1_68_tsni(f, x)
};
map_inst_59_60_56_31_1_68_69_tsni = function map_inst_59_60_56_31_1_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
foldr_inst_59_60_56_31_1_2_66_tsni = function foldr_inst_59_60_56_31_1_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
concat_inst_59_60_55_24_tsni = function concat_inst_59_60_55_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_59_60_55_24_25_tsni = function append_inst_59_60_55_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_59_60_54_6_7_8_67_tsni = function map_inst_59_60_54_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_59_60_72_tsni = function evaluationEq_inst_59_60_72_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_59_60_52_6_7_8_67_tsni = function map_inst_59_60_52_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_59_60_71_tsni = function evaluationEq_inst_59_60_71_tsni(x, y) {
  return runtime.safeCall(x(y))
};
andd_inst_59_60_51_70_tsni = function andd_inst_59_60_51_70_tsni(ls) {
  return runtime.safeCall(ls())
};
showMove_inst_59_73_tsni = function showMove_inst_59_73_tsni(m) {
  return runtime.safeCall(m())
};
concat_inst_59_64_tsni = function concat_inst_59_64_tsni(ls) {
  return runtime.safeCall(ls())
};
andd_inst_62_63_60_51_70_tsni = function andd_inst_62_63_60_51_70_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_62_63_60_52_6_7_8_67_tsni = function map_inst_62_63_60_52_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_62_63_60_71_tsni = function evaluationEq_inst_62_63_60_71_tsni(x, y) {
  return runtime.safeCall(x(y))
};
map_inst_62_63_60_54_6_7_8_67_tsni = function map_inst_62_63_60_54_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
evaluationEq_inst_62_63_60_72_tsni = function evaluationEq_inst_62_63_60_72_tsni(x, y) {
  return runtime.safeCall(x(y))
};
concat_inst_62_63_60_55_24_tsni = function concat_inst_62_63_60_55_24_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_62_63_60_55_24_25_tsni = function append_inst_62_63_60_55_24_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_62_63_60_56_31_1_2_66_tsni = function foldr_inst_62_63_60_56_31_1_2_66_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
map_inst_62_63_60_56_31_1_5_6_7_8_67_tsni = function map_inst_62_63_60_56_31_1_5_6_7_8_67_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
interpret_inst_62_63_60_56_31_1_5_53_tsni = function interpret_inst_62_63_60_56_31_1_5_53_tsni(x, l) {
  return runtime.safeCall(l(x))
};
mapTree_inst_62_63_60_56_31_1_68_tsni = function mapTree_inst_62_63_60_56_31_1_68_tsni(f, t) {
  return runtime.safeCall(t(f))
};
lambda_inst_62_63_60_56_31_1_68_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_62_63_60_56_31_1_68_tsni(f, x)
  }
});
lambda$_inst_62_63_60_56_31_1_68_tsni = function lambda$_inst_62_63_60_56_31_1_68_tsni(f, x) {
  return mapTree_inst_62_63_60_56_31_1_68_tsni(f, x)
};
map_inst_62_63_60_56_31_1_68_69_tsni = function map_inst_62_63_60_56_31_1_68_69_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
showMove_inst_62_63_73_tsni = function showMove_inst_62_63_73_tsni(m) {
  return runtime.safeCall(m())
};
nofibListToString_inst_62_74_tsni = function nofibListToString_inst_62_74_tsni(ls) {
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
    return lambda$_inst_30_31_tsni(f, g, opposition, x)
  }
});
lambda$7 = function lambda$(p, x) {
  return newPositions_inst_32_15_tsni(p, x)
};
lambda8 = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_33_14_tsni(p, x)
  }
});
lambda$6 = function lambda$(p, x) {
  let tmp;
  tmp = minimax1.opposite(p);
  return newPositions_inst_34_23_tsni(tmp, x)
};
lambda9 = (undefined, function (p) {
  return (x) => {
    return lambda$_inst_35_22_tsni(p, x)
  }
});
lambda$5 = function lambda$(f, g, x) {
  return mise_inst_36_tsni(g, f, x)
};
lambda7 = (undefined, function (f, g) {
  return (x) => {
    return lambda$_inst_37_tsni(f, g, x)
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
  return score_inst_38_8_tsni(board1, x)
};
lambda3 = (undefined, function (board1) {
  return (x) => {
    return lambda$_inst_39_7_tsni(board1, x)
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
    return lscomp2$(x, xs, ls)
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
      return match_ls_arm_Cons_inst_40_tsni(x1, xs1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 2;
    _deforest_Cons_tail1 = tmp;
    tmp1 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_40_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 1;
    _deforest_Cons_tail = tmp1;
    tmp2 = (x1, xs1) => {
      return match_ls_arm_Cons_inst_40_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return lscomp2$_inst_40_tsni(x, xs, tmp2)
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
    tmp = concat_inst_41_42_tsni(b);
    tmp1 = map_inst_41_43_tsni(lambda, tmp);
    return andd_inst_41_70_tsni(tmp1)
  } 
  static newPositions(piece, board3) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2;
    _deforest_Cons_head2 = 3;
    _deforest_Cons_tail2 = () => {
      return NofibPrelude.Nil
    };
    tmp = () => {
      return match_ls_arm_Cons_inst_44_20_tsni1(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 2;
    _deforest_Cons_tail1 = tmp;
    tmp1 = () => {
      return match_ls_arm_Cons_inst_44_20_tsni1(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 1;
    _deforest_Cons_tail = tmp1;
    tmp2 = () => {
      return match_ls_arm_Cons_inst_44_20_tsni1(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp3 = lscomp1_inst_44_20_tsni(tmp2);
    lambda$this = runtime.safeCall(lambda_inst_44_17_tsni(piece, board3));
    tmp4 = map_inst_44_16_tsni(lambda$this, tmp3);
    return concat_inst_44_24_tsni(tmp4)
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
    tmp = map2_inst_45_9_tsni(lambda2, board4, win);
    tmp1 = map_inst_45_67_tsni(NofibPrelude.sum, tmp);
    tmp2 = NofibPrelude.sum(tmp1);
    return minimax.eval(tmp2)
  } 
  static static(board5) {
    let tmp, lambda$this;
    lambda$this = runtime.safeCall(lambda_inst_46_6_tsni(board5));
    tmp = map_inst_46_10_tsni(lambda$this, minimax.wins);
    return interpret_inst_46_53_tsni(0, tmp)
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
        lambda$this = runtime.safeCall(lambda_inst_47_tsni(f4, g1));
        tmp1 = map_inst_47_3_tsni(lambda$this, l1);
        return foldr_inst_47_66_tsni(f4, tmp, tmp1)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static searchTree(p7, board6) {
    let tmp, lambda$this, lambda$this1;
    lambda$this = runtime.safeCall(lambda_inst_48_13_tsni(p7));
    lambda$this1 = runtime.safeCall(lambda_inst_48_21_tsni(p7));
    tmp = repTree_inst_48_26_tsni(lambda$this, lambda$this1, board6);
    return prune_inst_48_28_tsni(5, tmp)
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
    tmp = searchTree_inst_49_12_tsni(p8, b1);
    tmp1 = mapTree_inst_49_68_tsni(static_inst_49_5_tsni, tmp);
    tmp2 = cropTree_inst_49_4_tsni(tmp1);
    return mise_inst_49_2_tsni(f5, g2, tmp2)
  } 
  static alternate(player, f6, g3, board7) {
    let opposition, possibles, scores, boardd_eval, scrut, scrut1, scrut2, tmp, tmp1, lambda$this;
    scrut2 = fullBoard_inst_50_51_tsni(board7);
    if (scrut2 === true) {
      return NofibPrelude.Nil
    } else {
      tmp = static_inst_50_52_tsni(board7);
      scrut1 = evaluationEq_inst_50_71_tsni(tmp, minimax.XWin);
      if (scrut1 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = static_inst_50_54_tsni(board7);
        scrut = evaluationEq_inst_50_72_tsni(tmp1, minimax.OWin);
        if (scrut === true) {
          return NofibPrelude.Nil
        } else {
          opposition = minimax.opposite(player);
          possibles = newPositions_inst_50_55_tsni(player, board7);
          lambda$this = runtime.safeCall(lambda_inst_50_56_tsni(f6, g3, opposition));
          scores = NofibPrelude.map(lambda$this, possibles);
          boardd_eval = best_inst_50_57_tsni(f6, possibles, scores);
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
    tmp13 = alternate_inst_59_60_tsni(minimax.X, minimax.max_, minimax.min_, tmp12);
    game = tmp13;
    tmp14 = NofibPrelude.nofibStringToList("OXO\n");
    tmp15 = map_inst_59_61_tsni(showMove_inst_59_73_tsni, game);
    tmp16 = concat_inst_59_64_tsni(tmp15);
    return NofibPrelude.append(tmp14, tmp16)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_62_63_tsni("180000");
    return nofibListToString_inst_62_74_tsni(tmp)
  }
  static toString() { return "minimax"; }
});
let minimax = minimax1; export default minimax;
