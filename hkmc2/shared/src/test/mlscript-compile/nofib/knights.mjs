import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let go, lscomp2, lscomp1, lscomp21, lscomp11, find, logTen, lscomp, lscomp3, lscomp4, lscomp22, lscomp12, pp, strToInt, argsOk, all_digits, knights1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lscomp2$, lscomp1$, lambda$, lscomp2$1, lambda$1, lscomp1$1, lambda$2, lambda$3, lambda$4, lscomp$, lambda$5, lambda$6, lambda$7, lscomp1$2, lscomp2$2, lambda$8, lambda$9, showChessSet_inst_0_1_tsni, printBoard_inst_0_1_2_tsni, spaces_inst_0_1_2_3_tsni, replicate_inst_0_1_2_3_4_tsni, spaces_inst_0_1_2_5_tsni, replicate_inst_0_1_2_5_4_tsni, spaces_inst_0_1_2_6_tsni, replicate_inst_0_1_2_6_4_tsni, spaces_inst_0_1_2_7_tsni, replicate_inst_0_1_2_7_4_tsni, spaces_inst_0_1_2_8_tsni, replicate_inst_0_1_2_8_4_tsni, spaces_inst_0_1_2_9_tsni, replicate_inst_0_1_2_9_4_tsni, spaces_inst_0_1_2_10_tsni, replicate_inst_0_1_2_10_4_tsni, append_inst_0_1_2_11_tsni, append_inst_0_1_2_12_tsni, append_inst_0_1_2_13_tsni, append_inst_0_1_2_14_tsni, append_inst_0_1_2_15_tsni, append_inst_0_1_2_16_tsni, append_inst_0_1_2_17_tsni, append_inst_0_1_2_18_tsni, append_inst_0_1_2_19_tsni, append_inst_0_1_2_20_tsni, append_inst_0_1_2_21_tsni, append_inst_0_1_2_22_tsni, append_inst_0_1_2_23_tsni, append_inst_0_1_2_24_tsni, append_inst_0_1_2_25_tsni, append_inst_0_1_2_26_tsni, lscomp2$_inst_27_tsni, lambda_inst_27_tsni, lambda$_inst_27_tsni, enumFromTo_inst_27_28_tsni, lscomp1$_inst_29_30_tsni, lscomp2$_inst_29_30_tsni, lambda_inst_29_30_tsni, lambda$_inst_29_30_tsni, enumFromTo_inst_29_30_28_tsni, lscomp_inst_31_tsni, lambda_inst_31_tsni, possibleMoves_inst_31_32_tsni, lscomp_inst_33_tsni, lambda$_inst_33_tsni, possibleMoves_inst_33_32_tsni, lambda_inst_34_tsni, lambda$_inst_34_tsni, possibleMoves_inst_34_32_tsni, spaces_inst_35_3_tsni, replicate_inst_35_3_4_tsni, spaces_inst_35_5_tsni, replicate_inst_35_5_4_tsni, spaces_inst_35_6_tsni, replicate_inst_35_6_4_tsni, spaces_inst_35_7_tsni, replicate_inst_35_7_4_tsni, spaces_inst_35_8_tsni, replicate_inst_35_8_4_tsni, spaces_inst_35_9_tsni, replicate_inst_35_9_4_tsni, spaces_inst_35_10_tsni, replicate_inst_35_10_4_tsni, possibleMoves_inst_37_38_tsni, possibleMoves_inst_39_40_tsni, lscomp$_inst_39_40_41_tsni, allDescend_inst_42_43_tsni, possibleMoves_inst_42_43_40_tsni, lscomp$_inst_42_43_40_41_tsni, lscomp_inst_42_44_tsni, lambda_inst_42_44_tsni, lambda$_inst_42_44_tsni, possibleMoves_inst_42_44_32_tsni, map_inst_42_43_45_tsni, descAndNo_inst_46_47_tsni, lscomp_inst_46_47_44_tsni, lambda_inst_46_47_44_tsni, lambda$_inst_46_47_44_tsni, possibleMoves_inst_46_47_44_32_tsni, allDescend_inst_46_47_43_tsni, possibleMoves_inst_46_47_43_40_tsni, lscomp$_inst_46_47_43_40_41_tsni, map_inst_46_47_43_45_tsni, lambda_inst_46_47_44_48_tsni, deadEnd_inst_49_50_tsni, possibleMoves_inst_49_50_38_tsni, singleDescend_inst_49_51_tsni, descAndNo_inst_49_51_47_tsni, allDescend_inst_49_51_47_43_tsni, possibleMoves_inst_49_51_47_43_40_tsni, lscomp$_inst_49_51_47_43_40_41_tsni, lscomp_inst_49_51_47_44_tsni, lambda_inst_49_51_47_44_tsni, lambda$_inst_49_51_47_44_tsni, possibleMoves_inst_49_51_47_44_32_tsni, map_inst_49_51_47_43_45_tsni, lambda_inst_49_51_47_44_48_tsni, descAndNo_inst_49_52_tsni, lscomp_inst_49_52_44_tsni, lambda_inst_49_52_44_tsni, lambda$_inst_49_52_44_tsni, possibleMoves_inst_49_52_44_32_tsni, allDescend_inst_49_52_43_tsni, possibleMoves_inst_49_52_43_40_tsni, lscomp$_inst_49_52_43_40_41_tsni, map_inst_49_52_43_45_tsni, printBoard_inst_53_2_tsni, spaces_inst_53_2_10_tsni, replicate_inst_53_2_10_4_tsni, spaces_inst_53_2_9_tsni, replicate_inst_53_2_9_4_tsni, spaces_inst_53_2_8_tsni, replicate_inst_53_2_8_4_tsni, spaces_inst_53_2_7_tsni, replicate_inst_53_2_7_4_tsni, spaces_inst_53_2_6_tsni, replicate_inst_53_2_6_4_tsni, spaces_inst_53_2_5_tsni, replicate_inst_53_2_5_4_tsni, spaces_inst_53_2_3_tsni, replicate_inst_53_2_3_4_tsni, lscomp1$_inst_54_55_tsni, lscomp2$_inst_54_55_tsni, lambda_inst_54_55_tsni, lambda$_inst_54_55_tsni, enumFromTo_inst_54_55_28_tsni, enumFromTo_inst_54_56_tsni, descendents_inst_57_58_tsni, descAndNo_inst_57_58_52_tsni, allDescend_inst_57_58_52_43_tsni, possibleMoves_inst_57_58_52_43_40_tsni, lscomp$_inst_57_58_52_43_40_41_tsni, lscomp_inst_57_58_52_44_tsni, lambda_inst_57_58_52_44_tsni, lambda$_inst_57_58_52_44_tsni, possibleMoves_inst_57_58_52_44_32_tsni, map_inst_57_58_52_43_45_tsni, singleDescend_inst_57_58_51_tsni, descAndNo_inst_57_58_51_47_tsni, lscomp_inst_57_58_51_47_44_tsni, lambda_inst_57_58_51_47_44_tsni, lambda$_inst_57_58_51_47_44_tsni, possibleMoves_inst_57_58_51_47_44_32_tsni, allDescend_inst_57_58_51_47_43_tsni, possibleMoves_inst_57_58_51_47_43_40_tsni, lscomp$_inst_57_58_51_47_43_40_41_tsni, map_inst_57_58_51_47_43_45_tsni, lambda_inst_57_58_51_47_44_48_tsni, deadEnd_inst_57_58_50_tsni, possibleMoves_inst_57_58_50_38_tsni, root_inst_59_60_tsni, lscomp1$_inst_59_60_55_tsni, lscomp2$_inst_59_60_55_tsni, lambda_inst_59_60_55_tsni, lambda$_inst_59_60_55_tsni, enumFromTo_inst_59_60_55_28_tsni, enumFromTo_inst_59_60_56_tsni, grow_inst_59_61_tsni, descendents_inst_59_61_58_tsni, deadEnd_inst_59_61_58_50_tsni, possibleMoves_inst_59_61_58_50_38_tsni, singleDescend_inst_59_61_58_51_tsni, descAndNo_inst_59_61_58_51_47_tsni, allDescend_inst_59_61_58_51_47_43_tsni, possibleMoves_inst_59_61_58_51_47_43_40_tsni, lscomp$_inst_59_61_58_51_47_43_40_41_tsni, lscomp_inst_59_61_58_51_47_44_tsni, lambda_inst_59_61_58_51_47_44_tsni, lambda$_inst_59_61_58_51_47_44_tsni, possibleMoves_inst_59_61_58_51_47_44_32_tsni, map_inst_59_61_58_51_47_43_45_tsni, lambda_inst_59_61_58_51_47_44_48_tsni, descAndNo_inst_59_61_58_52_tsni, lscomp_inst_59_61_58_52_44_tsni, lambda_inst_59_61_58_52_44_tsni, lambda$_inst_59_61_58_52_44_tsni, possibleMoves_inst_59_61_58_52_44_32_tsni, allDescend_inst_59_61_58_52_43_tsni, possibleMoves_inst_59_61_58_52_43_40_tsni, lscomp$_inst_59_61_58_52_43_40_41_tsni, map_inst_59_61_58_52_43_45_tsni, depthSearch_inst_59_62_tsni, lambda_inst_59_62_tsni, lambda$_inst_59_62_tsni, lambda_inst_59_62_63_tsni, pp_inst_59_64_tsni, showChessSet_inst_59_64_1_tsni, printBoard_inst_59_64_1_2_tsni, spaces_inst_59_64_1_2_10_tsni, replicate_inst_59_64_1_2_10_4_tsni, spaces_inst_59_64_1_2_9_tsni, replicate_inst_59_64_1_2_9_4_tsni, spaces_inst_59_64_1_2_8_tsni, replicate_inst_59_64_1_2_8_4_tsni, spaces_inst_59_64_1_2_7_tsni, replicate_inst_59_64_1_2_7_4_tsni, spaces_inst_59_64_1_2_6_tsni, replicate_inst_59_64_1_2_6_4_tsni, spaces_inst_59_64_1_2_5_tsni, replicate_inst_59_64_1_2_5_4_tsni, spaces_inst_59_64_1_2_3_tsni, replicate_inst_59_64_1_2_3_4_tsni, append_inst_59_64_1_2_21_tsni, append_inst_59_64_1_2_14_tsni, append_inst_59_64_1_2_16_tsni, append_inst_59_64_1_2_11_tsni, append_inst_59_64_1_2_15_tsni, append_inst_59_64_1_2_13_tsni, append_inst_59_64_1_2_20_tsni, append_inst_59_64_1_2_12_tsni, append_inst_59_64_1_2_18_tsni, append_inst_59_64_1_2_19_tsni, append_inst_59_64_1_2_17_tsni, append_inst_59_64_1_2_23_tsni, append_inst_59_64_1_2_24_tsni, append_inst_59_64_1_2_26_tsni, append_inst_59_64_1_2_22_tsni, append_inst_59_64_1_2_25_tsni, take_lz_inst_59_65_tsni, printTour_inst_66_67_tsni, pp_inst_66_67_64_tsni, showChessSet_inst_66_67_64_1_tsni, printBoard_inst_66_67_64_1_2_tsni, spaces_inst_66_67_64_1_2_3_tsni, replicate_inst_66_67_64_1_2_3_4_tsni, spaces_inst_66_67_64_1_2_5_tsni, replicate_inst_66_67_64_1_2_5_4_tsni, spaces_inst_66_67_64_1_2_6_tsni, replicate_inst_66_67_64_1_2_6_4_tsni, spaces_inst_66_67_64_1_2_7_tsni, replicate_inst_66_67_64_1_2_7_4_tsni, spaces_inst_66_67_64_1_2_8_tsni, replicate_inst_66_67_64_1_2_8_4_tsni, spaces_inst_66_67_64_1_2_9_tsni, replicate_inst_66_67_64_1_2_9_4_tsni, spaces_inst_66_67_64_1_2_10_tsni, replicate_inst_66_67_64_1_2_10_4_tsni, append_inst_66_67_64_1_2_11_tsni, append_inst_66_67_64_1_2_12_tsni, append_inst_66_67_64_1_2_13_tsni, append_inst_66_67_64_1_2_14_tsni, append_inst_66_67_64_1_2_15_tsni, append_inst_66_67_64_1_2_16_tsni, append_inst_66_67_64_1_2_17_tsni, append_inst_66_67_64_1_2_18_tsni, append_inst_66_67_64_1_2_19_tsni, append_inst_66_67_64_1_2_20_tsni, append_inst_66_67_64_1_2_21_tsni, append_inst_66_67_64_1_2_22_tsni, append_inst_66_67_64_1_2_23_tsni, append_inst_66_67_64_1_2_24_tsni, append_inst_66_67_64_1_2_25_tsni, append_inst_66_67_64_1_2_26_tsni, take_lz_inst_66_67_65_tsni, depthSearch_inst_66_67_62_tsni, lambda_inst_66_67_62_tsni, lambda$_inst_66_67_62_tsni, lambda_inst_66_67_62_63_tsni, grow_inst_66_67_61_tsni, descendents_inst_66_67_61_58_tsni, descAndNo_inst_66_67_61_58_52_tsni, allDescend_inst_66_67_61_58_52_43_tsni, possibleMoves_inst_66_67_61_58_52_43_40_tsni, lscomp$_inst_66_67_61_58_52_43_40_41_tsni, lscomp_inst_66_67_61_58_52_44_tsni, lambda_inst_66_67_61_58_52_44_tsni, lambda$_inst_66_67_61_58_52_44_tsni, possibleMoves_inst_66_67_61_58_52_44_32_tsni, map_inst_66_67_61_58_52_43_45_tsni, singleDescend_inst_66_67_61_58_51_tsni, descAndNo_inst_66_67_61_58_51_47_tsni, lscomp_inst_66_67_61_58_51_47_44_tsni, lambda_inst_66_67_61_58_51_47_44_tsni, lambda$_inst_66_67_61_58_51_47_44_tsni, possibleMoves_inst_66_67_61_58_51_47_44_32_tsni, allDescend_inst_66_67_61_58_51_47_43_tsni, possibleMoves_inst_66_67_61_58_51_47_43_40_tsni, lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni, map_inst_66_67_61_58_51_47_43_45_tsni, lambda_inst_66_67_61_58_51_47_44_48_tsni, deadEnd_inst_66_67_61_58_50_tsni, possibleMoves_inst_66_67_61_58_50_38_tsni, root_inst_66_67_60_tsni, lscomp1$_inst_66_67_60_55_tsni, lscomp2$_inst_66_67_60_55_tsni, lambda_inst_66_67_60_55_tsni, lambda$_inst_66_67_60_55_tsni, enumFromTo_inst_66_67_60_55_28_tsni, enumFromTo_inst_66_67_60_56_tsni, testKnights_nofib_inst_68_69_tsni, printTour_inst_68_69_67_tsni, root_inst_68_69_67_60_tsni, lscomp1$_inst_68_69_67_60_55_tsni, lscomp2$_inst_68_69_67_60_55_tsni, lambda_inst_68_69_67_60_55_tsni, lambda$_inst_68_69_67_60_55_tsni, enumFromTo_inst_68_69_67_60_55_28_tsni, enumFromTo_inst_68_69_67_60_56_tsni, grow_inst_68_69_67_61_tsni, descendents_inst_68_69_67_61_58_tsni, deadEnd_inst_68_69_67_61_58_50_tsni, possibleMoves_inst_68_69_67_61_58_50_38_tsni, singleDescend_inst_68_69_67_61_58_51_tsni, descAndNo_inst_68_69_67_61_58_51_47_tsni, allDescend_inst_68_69_67_61_58_51_47_43_tsni, possibleMoves_inst_68_69_67_61_58_51_47_43_40_tsni, lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni, lscomp_inst_68_69_67_61_58_51_47_44_tsni, lambda_inst_68_69_67_61_58_51_47_44_tsni, lambda$_inst_68_69_67_61_58_51_47_44_tsni, possibleMoves_inst_68_69_67_61_58_51_47_44_32_tsni, map_inst_68_69_67_61_58_51_47_43_45_tsni, lambda_inst_68_69_67_61_58_51_47_44_48_tsni, descAndNo_inst_68_69_67_61_58_52_tsni, lscomp_inst_68_69_67_61_58_52_44_tsni, lambda_inst_68_69_67_61_58_52_44_tsni, lambda$_inst_68_69_67_61_58_52_44_tsni, possibleMoves_inst_68_69_67_61_58_52_44_32_tsni, allDescend_inst_68_69_67_61_58_52_43_tsni, possibleMoves_inst_68_69_67_61_58_52_43_40_tsni, lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni, map_inst_68_69_67_61_58_52_43_45_tsni, depthSearch_inst_68_69_67_62_tsni, lambda_inst_68_69_67_62_tsni, lambda$_inst_68_69_67_62_tsni, lambda_inst_68_69_67_62_63_tsni, pp_inst_68_69_67_64_tsni, showChessSet_inst_68_69_67_64_1_tsni, printBoard_inst_68_69_67_64_1_2_tsni, spaces_inst_68_69_67_64_1_2_10_tsni, replicate_inst_68_69_67_64_1_2_10_4_tsni, spaces_inst_68_69_67_64_1_2_9_tsni, replicate_inst_68_69_67_64_1_2_9_4_tsni, spaces_inst_68_69_67_64_1_2_8_tsni, replicate_inst_68_69_67_64_1_2_8_4_tsni, spaces_inst_68_69_67_64_1_2_7_tsni, replicate_inst_68_69_67_64_1_2_7_4_tsni, spaces_inst_68_69_67_64_1_2_6_tsni, replicate_inst_68_69_67_64_1_2_6_4_tsni, spaces_inst_68_69_67_64_1_2_5_tsni, replicate_inst_68_69_67_64_1_2_5_4_tsni, spaces_inst_68_69_67_64_1_2_3_tsni, replicate_inst_68_69_67_64_1_2_3_4_tsni, append_inst_68_69_67_64_1_2_21_tsni, append_inst_68_69_67_64_1_2_14_tsni, append_inst_68_69_67_64_1_2_16_tsni, append_inst_68_69_67_64_1_2_11_tsni, append_inst_68_69_67_64_1_2_15_tsni, append_inst_68_69_67_64_1_2_13_tsni, append_inst_68_69_67_64_1_2_20_tsni, append_inst_68_69_67_64_1_2_12_tsni, append_inst_68_69_67_64_1_2_18_tsni, append_inst_68_69_67_64_1_2_19_tsni, append_inst_68_69_67_64_1_2_17_tsni, append_inst_68_69_67_64_1_2_23_tsni, append_inst_68_69_67_64_1_2_24_tsni, append_inst_68_69_67_64_1_2_26_tsni, append_inst_68_69_67_64_1_2_22_tsni, append_inst_68_69_67_64_1_2_25_tsni, take_lz_inst_68_69_67_65_tsni, append_inst_68_69_67_64_70_tsni, append_inst_68_69_67_64_71_tsni, append_inst_68_69_67_64_72_tsni, append_inst_68_69_67_64_73_tsni, append_inst_0_70_tsni, lscomp$_inst_31_32_41_tsni, lscomp$_inst_33_32_41_tsni, lscomp$_inst_34_32_41_tsni, append_inst_35_22_tsni, append_inst_35_20_tsni, append_inst_35_23_tsni, append_inst_35_24_tsni, append_inst_35_12_tsni, append_inst_35_26_tsni, append_inst_35_25_tsni, lscomp$_inst_36_41_tsni, lscomp$_inst_37_38_41_tsni, map_inst_39_45_tsni, lscomp$_inst_42_44_32_41_tsni, lscomp$_inst_46_47_44_32_41_tsni, lscomp_inst_46_74_tsni, lscomp$_inst_49_50_38_41_tsni, lscomp$_inst_49_51_47_44_32_41_tsni, lscomp_inst_49_51_74_tsni, lscomp$_inst_49_52_44_32_41_tsni, append_inst_53_2_25_tsni, append_inst_53_2_26_tsni, append_inst_53_2_12_tsni, append_inst_53_2_24_tsni, append_inst_53_2_23_tsni, append_inst_53_2_20_tsni, append_inst_53_2_22_tsni, lscomp$_inst_57_58_52_44_32_41_tsni, lscomp$_inst_57_58_51_47_44_32_41_tsni, lscomp_inst_57_58_51_74_tsni, lscomp$_inst_57_58_50_38_41_tsni, lscomp$_inst_59_61_58_50_38_41_tsni, lscomp$_inst_59_61_58_51_47_44_32_41_tsni, lscomp_inst_59_61_58_51_74_tsni, lscomp$_inst_59_61_58_52_44_32_41_tsni, append_inst_59_64_70_tsni, append_inst_66_67_64_70_tsni, lscomp$_inst_66_67_61_58_52_44_32_41_tsni, lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni, lscomp_inst_66_67_61_58_51_74_tsni, lscomp$_inst_66_67_61_58_50_38_41_tsni, lscomp$_inst_68_69_67_61_58_50_38_41_tsni, lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni, lscomp_inst_68_69_67_61_58_51_74_tsni, lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni, nofibListToString_inst_68_75_tsni, match_xs_arm_Cons_inst_0_70_tsni, match_ls_arm_Cons_inst_31_32_41_tsni, match_ls_arm_Cons_inst_33_32_41_tsni, match_ls_arm_Cons_inst_34_32_41_tsni, match_ls_arm_Cons_inst_36_41_tsni, match_ls_arm_Cons_inst_37_38_41_tsni, match_ls_arm_Cons_inst_39_40_41_tsni, match_ls_arm_Cons_inst_42_43_40_41_tsni, match_ls_arm_Cons_inst_42_44_32_41_tsni, match_ls_arm_Cons_inst_46_47_44_32_41_tsni, match_ls_arm_Cons_inst_46_47_43_40_41_tsni, match_ls_arm_Cons_inst_49_50_38_41_tsni, match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni, match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni, match_ls_arm_Cons_inst_49_52_44_32_41_tsni, match_ls_arm_Cons_inst_49_52_43_40_41_tsni, match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni, match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni, match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni, match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni, match_ls_arm_Cons_inst_57_58_50_38_41_tsni, match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni, match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni, match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni, match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni, match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni, match_xs_arm_Cons_inst_59_64_70_tsni, match_xs_arm_Nil_inst_59_64_tsni, match_xs_arm_Cons_inst_66_67_64_70_tsni, match_xs_arm_Nil_inst_66_67_64_tsni, match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni, match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni, match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni, match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni, match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni, match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni, match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni, match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni, match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni, match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni, match_xs_arm_Cons_inst_68_69_67_64_70_tsni, match_xs_arm_Nil_inst_68_69_67_64_tsni, match_ls_arm_Cons_inst_68_75_tsni;
match_xs_arm_Cons_inst_0_70_tsni = (undefined, function (ys, _deforest_Cons_head_inst_0_70_tsni, _deforest_Cons_tail_inst_0_70_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_70_tsni;
  param1 = _deforest_Cons_tail_inst_0_70_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_70_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_31_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_31_32_41_tsni, _deforest_Cons_tail_inst_31_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_31_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_31_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_31_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_31_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_33_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_33_32_41_tsni, _deforest_Cons_tail_inst_33_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_33_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_33_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_33_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_33_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_34_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_34_32_41_tsni, _deforest_Cons_tail_inst_34_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_34_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_34_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_34_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_34_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_36_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_36_41_tsni, _deforest_Cons_tail_inst_36_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_36_41_tsni;
  param1 = _deforest_Cons_tail_inst_36_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_36_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_36_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_37_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_37_38_41_tsni, _deforest_Cons_tail_inst_37_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_37_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_37_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_37_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_37_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_39_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_39_40_41_tsni, _deforest_Cons_tail_inst_39_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_39_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_39_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_39_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_39_45_tsni(f, xs);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    return lscomp$_inst_39_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_42_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_42_43_40_41_tsni, _deforest_Cons_tail_inst_42_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_42_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_42_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_42_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_42_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_42_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_42_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_42_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_42_44_32_41_tsni, _deforest_Cons_tail_inst_42_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_42_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_42_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_42_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_42_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_46_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_46_47_44_32_41_tsni, _deforest_Cons_tail_inst_46_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_46_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_46_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_46_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_46_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_46_47_43_40_41_tsni, _deforest_Cons_tail_inst_46_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_46_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_46_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_46_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_46_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_46_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_49_50_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_49_50_38_41_tsni, _deforest_Cons_tail_inst_49_50_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_49_50_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_49_50_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_49_50_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_49_50_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_49_51_47_43_40_41_tsni, _deforest_Cons_tail_inst_49_51_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_51_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_49_51_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_49_51_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_49_51_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_49_51_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_49_51_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_49_51_47_44_32_41_tsni, _deforest_Cons_tail_inst_49_51_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_49_51_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_49_51_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_49_51_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_49_51_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_49_52_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_49_52_44_32_41_tsni, _deforest_Cons_tail_inst_49_52_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_49_52_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_49_52_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_49_52_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_49_52_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_49_52_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_49_52_43_40_41_tsni, _deforest_Cons_tail_inst_49_52_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_49_52_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_49_52_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_49_52_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_49_52_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_49_52_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_49_52_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_57_58_52_43_40_41_tsni, _deforest_Cons_tail_inst_57_58_52_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_57_58_52_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_52_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_57_58_52_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_57_58_52_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_57_58_52_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_57_58_52_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_57_58_52_44_32_41_tsni, _deforest_Cons_tail_inst_57_58_52_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_57_58_52_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_52_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_57_58_52_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_57_58_52_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_57_58_51_47_44_32_41_tsni, _deforest_Cons_tail_inst_57_58_51_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_57_58_51_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_51_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_57_58_51_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_57_58_51_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_57_58_51_47_43_40_41_tsni, _deforest_Cons_tail_inst_57_58_51_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_57_58_51_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_51_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_57_58_51_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_57_58_51_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_57_58_51_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_57_58_51_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_57_58_50_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_57_58_50_38_41_tsni, _deforest_Cons_tail_inst_57_58_50_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_57_58_50_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_57_58_50_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_57_58_50_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_57_58_50_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_59_61_58_50_38_41_tsni, _deforest_Cons_tail_inst_59_61_58_50_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_59_61_58_50_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_58_50_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_59_61_58_50_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_59_61_58_50_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_59_61_58_51_47_43_40_41_tsni, _deforest_Cons_tail_inst_59_61_58_51_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_59_61_58_51_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_58_51_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_59_61_58_51_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_59_61_58_51_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_59_61_58_51_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_59_61_58_51_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_59_61_58_51_47_44_32_41_tsni, _deforest_Cons_tail_inst_59_61_58_51_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_59_61_58_51_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_58_51_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_59_61_58_51_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_59_61_58_51_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_59_61_58_52_44_32_41_tsni, _deforest_Cons_tail_inst_59_61_58_52_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_59_61_58_52_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_58_52_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_59_61_58_52_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_59_61_58_52_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_59_61_58_52_43_40_41_tsni, _deforest_Cons_tail_inst_59_61_58_52_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_59_61_58_52_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_59_61_58_52_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_59_61_58_52_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_59_61_58_52_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_59_61_58_52_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_59_61_58_52_43_40_41_tsni(board, t)
  }
});
match_xs_arm_Cons_inst_59_64_70_tsni = (undefined, function (ys, _deforest_Cons_head_inst_59_64_70_tsni, _deforest_Cons_tail_inst_59_64_70_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_59_64_70_tsni;
  param1 = _deforest_Cons_tail_inst_59_64_70_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_59_64_70_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_59_64_tsni = (undefined, function () {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_66_67_64_70_tsni = (undefined, function (ys, _deforest_Cons_head_inst_66_67_64_70_tsni, _deforest_Cons_tail_inst_66_67_64_70_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_66_67_64_70_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_64_70_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_66_67_64_70_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_66_67_64_tsni = (undefined, function () {
  return NofibPrelude.Nil
});
match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_66_67_61_58_52_43_40_41_tsni, _deforest_Cons_tail_inst_66_67_61_58_52_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_66_67_61_58_52_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_61_58_52_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_66_67_61_58_52_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_66_67_61_58_52_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_66_67_61_58_52_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_66_67_61_58_52_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_66_67_61_58_52_44_32_41_tsni, _deforest_Cons_tail_inst_66_67_61_58_52_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_66_67_61_58_52_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_61_58_52_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_66_67_61_58_52_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_66_67_61_58_52_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_66_67_61_58_51_47_44_32_41_tsni, _deforest_Cons_tail_inst_66_67_61_58_51_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_66_67_61_58_51_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_61_58_51_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_66_67_61_58_51_47_43_40_41_tsni, _deforest_Cons_tail_inst_66_67_61_58_51_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_66_67_61_58_51_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_61_58_51_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_66_67_61_58_51_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_66_67_61_58_51_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_66_67_61_58_50_38_41_tsni, _deforest_Cons_tail_inst_66_67_61_58_50_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_66_67_61_58_50_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_66_67_61_58_50_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_66_67_61_58_50_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_66_67_61_58_50_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_68_69_67_61_58_50_38_41_tsni, _deforest_Cons_tail_inst_68_69_67_61_58_50_38_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_68_69_67_61_58_50_38_41_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_61_58_50_38_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_68_69_67_61_58_50_38_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_68_69_67_61_58_50_38_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_68_69_67_61_58_51_47_43_40_41_tsni, _deforest_Cons_tail_inst_68_69_67_61_58_51_47_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_68_69_67_61_58_51_47_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_61_58_51_47_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_68_69_67_61_58_51_47_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_68_69_67_61_58_51_47_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_68_69_67_61_58_51_47_44_32_41_tsni, _deforest_Cons_tail_inst_68_69_67_61_58_51_47_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_68_69_67_61_58_51_47_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_61_58_51_47_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_68_69_67_61_58_52_44_32_41_tsni, _deforest_Cons_tail_inst_68_69_67_61_58_52_44_32_41_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_68_69_67_61_58_52_44_32_41_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_61_58_52_44_32_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni = (undefined, function (board, _deforest_Cons_head_inst_68_69_67_61_58_52_43_40_41_tsni, _deforest_Cons_tail_inst_68_69_67_61_58_52_43_40_41_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_68_69_67_61_58_52_43_40_41_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_61_58_52_43_40_41_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_68_69_67_61_58_52_43_45_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_68_69_67_61_58_52_44_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni(board, t)
  }
});
match_xs_arm_Cons_inst_68_69_67_64_70_tsni = (undefined, function (ys, _deforest_Cons_head_inst_68_69_67_64_70_tsni, _deforest_Cons_tail_inst_68_69_67_64_70_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_68_69_67_64_70_tsni;
  param1 = _deforest_Cons_tail_inst_68_69_67_64_70_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_68_69_67_64_70_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return () => {
    return match_ls_arm_Cons_inst_68_75_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Nil_inst_68_69_67_64_tsni = (undefined, function () {
  return () => {
    return ""
  }
});
match_ls_arm_Cons_inst_68_75_tsni = (undefined, function (_deforest_Cons_head_inst_68_75_tsni, _deforest_Cons_tail_inst_68_75_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_68_75_tsni;
  param1 = _deforest_Cons_tail_inst_68_75_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_68_75_tsni(t);
  return h + tmp
});
showChessSet_inst_0_1_tsni = function showChessSet_inst_0_1_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_0_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_0_1_2_tsni = function printBoard_inst_0_1_2_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_0_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_0_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_0_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head4 = "*";
        _deforest_Cons_tail4 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_0_70_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_0_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_0_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_0_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_0_1_2_16_tsni(tmp14, tmp16);
          return append_inst_0_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_0_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_0_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_0_1_2_20_tsni(tmp22, tmp24);
              return append_inst_0_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_0_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_0_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_0_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_70_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_0_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_0_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_0_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_0_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_0_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_0_70_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_0_1_2_tsni(s, tmp47, tmp48);
                return append_inst_0_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_0_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_0_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_0_1_2_12_tsni(tmp54, tmp56);
            return append_inst_0_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_0_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_0_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_0_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_0_70_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_0_1_2_tsni(s, tmp67, tmp68);
                return append_inst_0_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_0_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_0_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_0_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_0_70_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_0_1_2_tsni(s, tmp79, tmp80);
              return append_inst_0_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
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
spaces_inst_0_1_2_3_tsni = function spaces_inst_0_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_3_4_tsni = function replicate_inst_0_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_5_tsni = function spaces_inst_0_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_5_4_tsni = function replicate_inst_0_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_6_tsni = function spaces_inst_0_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_6_4_tsni = function replicate_inst_0_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_7_tsni = function spaces_inst_0_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_7_4_tsni = function replicate_inst_0_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_8_tsni = function spaces_inst_0_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_8_4_tsni = function replicate_inst_0_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_9_tsni = function spaces_inst_0_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_9_4_tsni = function replicate_inst_0_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_0_1_2_10_tsni = function spaces_inst_0_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_0_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_0_1_2_10_4_tsni = function replicate_inst_0_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_0_1_2_11_tsni = function append_inst_0_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_12_tsni = function append_inst_0_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_13_tsni = function append_inst_0_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_14_tsni = function append_inst_0_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_15_tsni = function append_inst_0_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_16_tsni = function append_inst_0_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_17_tsni = function append_inst_0_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_18_tsni = function append_inst_0_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_19_tsni = function append_inst_0_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_20_tsni = function append_inst_0_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_21_tsni = function append_inst_0_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_2_22_tsni = function append_inst_0_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_23_tsni = function append_inst_0_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_24_tsni = function append_inst_0_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_25_tsni = function append_inst_0_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_2_26_tsni = function append_inst_0_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp2$_inst_27_tsni = function lscomp2$_inst_27_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_27_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_27_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_27_tsni = function lambda$_inst_27_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_27_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_27_28_tsni = function enumFromTo_inst_27_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_27_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_27_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$2(sze, t1)
    }
  }
};
lscomp1$_inst_29_30_tsni = function lscomp1$_inst_29_30_tsni(sze, ls) {
  let param0, param1, h1, t1, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda15)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h1 = param0;
    t1 = param1;
    tmp = enumFromTo_inst_29_30_28_tsni(1, sze);
    return lscomp2$_inst_29_30_tsni(sze, h1, t1, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2$_inst_29_30_tsni = function lscomp2$_inst_29_30_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_29_30_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_29_30_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_29_30_tsni = function lambda$_inst_29_30_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_29_30_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_29_30_28_tsni = function enumFromTo_inst_29_30_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_29_30_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_29_30_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_29_30_tsni(sze, t1)
    }
  }
};
lscomp_inst_31_tsni = function lscomp_inst_31_tsni(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda9)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda_inst_31_tsni(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_31_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$6(x, t)
  }
});
possibleMoves_inst_31_32_tsni = function possibleMoves_inst_31_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_31_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp_inst_33_tsni = function lscomp_inst_33_tsni(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda9)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda10(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$_inst_33_tsni = function lambda$_inst_33_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_33_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_33_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_33_32_tsni = function possibleMoves_inst_33_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_33_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_33_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lambda_inst_34_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_34_tsni(x, t)
  }
});
lambda$_inst_34_tsni = function lambda$_inst_34_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_34_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp3(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_34_32_tsni = function possibleMoves_inst_34_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_34_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_34_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
spaces_inst_35_3_tsni = function spaces_inst_35_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_3_4_tsni(tmp3, " ")
};
replicate_inst_35_3_4_tsni = function replicate_inst_35_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_22_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_5_tsni = function spaces_inst_35_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_5_4_tsni(tmp3, " ")
};
replicate_inst_35_5_4_tsni = function replicate_inst_35_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_20_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_6_tsni = function spaces_inst_35_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_6_4_tsni(tmp3, " ")
};
replicate_inst_35_6_4_tsni = function replicate_inst_35_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_23_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_7_tsni = function spaces_inst_35_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_7_4_tsni(tmp3, " ")
};
replicate_inst_35_7_4_tsni = function replicate_inst_35_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_24_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_8_tsni = function spaces_inst_35_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_8_4_tsni(tmp3, " ")
};
replicate_inst_35_8_4_tsni = function replicate_inst_35_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_12_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_9_tsni = function spaces_inst_35_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_9_4_tsni(tmp3, " ")
};
replicate_inst_35_9_4_tsni = function replicate_inst_35_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_26_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_35_10_tsni = function spaces_inst_35_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_35_10_4_tsni(tmp3, " ")
};
replicate_inst_35_10_4_tsni = function replicate_inst_35_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_35_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_35_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
possibleMoves_inst_37_38_tsni = function possibleMoves_inst_37_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_37_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_37_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_39_40_tsni = function possibleMoves_inst_39_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return NofibPrelude.Nil
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_39_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_39_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_39_40_41_tsni = function lscomp$_inst_39_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
allDescend_inst_42_43_tsni = function allDescend_inst_42_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_42_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_42_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_42_43_40_tsni = function possibleMoves_inst_42_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_42_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_42_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_42_43_40_41_tsni = function lscomp$_inst_42_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_42_44_tsni = function lscomp_inst_42_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_42_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_42_44_tsni(x, t)
  }
});
lambda$_inst_42_44_tsni = function lambda$_inst_42_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_42_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_42_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_42_44_32_tsni = function possibleMoves_inst_42_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_42_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_42_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_42_43_45_tsni = function map_inst_42_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
descAndNo_inst_46_47_tsni = function descAndNo_inst_46_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_46_47_43_tsni(board);
  return lscomp_inst_46_47_44_tsni(tmp)
};
lscomp_inst_46_47_44_tsni = function lscomp_inst_46_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_46_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_46_47_44_tsni(x, t)
  }
});
lambda$_inst_46_47_44_tsni = function lambda$_inst_46_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_46_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_46_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_46_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_46_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_46_47_44_32_tsni = function possibleMoves_inst_46_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_46_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_46_47_43_tsni = function allDescend_inst_46_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_46_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_46_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_46_47_43_40_tsni = function possibleMoves_inst_46_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_46_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_46_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_46_47_43_40_41_tsni = function lscomp$_inst_46_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_46_47_43_45_tsni = function map_inst_46_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_46_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
deadEnd_inst_49_50_tsni = function deadEnd_inst_49_50_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_49_50_38_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_49_50_38_tsni = function possibleMoves_inst_49_50_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_49_50_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_49_50_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_49_51_tsni = function singleDescend_inst_49_51_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_49_51_47_tsni(board);
  return lscomp_inst_49_51_74_tsni(tmp)
};
descAndNo_inst_49_51_47_tsni = function descAndNo_inst_49_51_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_49_51_47_43_tsni(board);
  return lscomp_inst_49_51_47_44_tsni(tmp)
};
allDescend_inst_49_51_47_43_tsni = function allDescend_inst_49_51_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_49_51_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_49_51_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_49_51_47_43_40_tsni = function possibleMoves_inst_49_51_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_49_51_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_49_51_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_49_51_47_43_40_41_tsni = function lscomp$_inst_49_51_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_49_51_47_44_tsni = function lscomp_inst_49_51_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_49_51_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_49_51_47_44_tsni(x, t)
  }
});
lambda$_inst_49_51_47_44_tsni = function lambda$_inst_49_51_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_49_51_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_49_51_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_49_51_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_49_51_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_49_51_47_44_32_tsni = function possibleMoves_inst_49_51_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_49_51_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_49_51_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_49_51_47_43_45_tsni = function map_inst_49_51_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_49_51_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_49_52_tsni = function descAndNo_inst_49_52_tsni(board) {
  let tmp;
  tmp = allDescend_inst_49_52_43_tsni(board);
  return lscomp_inst_49_52_44_tsni(tmp)
};
lscomp_inst_49_52_44_tsni = function lscomp_inst_49_52_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_49_52_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_49_52_44_tsni(x, t)
  }
});
lambda$_inst_49_52_44_tsni = function lambda$_inst_49_52_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_49_52_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_49_52_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_49_52_44_32_tsni = function possibleMoves_inst_49_52_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_49_52_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_49_52_43_tsni = function allDescend_inst_49_52_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_49_52_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_49_52_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_49_52_43_40_tsni = function possibleMoves_inst_49_52_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_49_52_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_49_52_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_49_52_43_40_41_tsni = function lscomp$_inst_49_52_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_49_52_43_45_tsni = function map_inst_49_52_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
printBoard_inst_53_2_tsni = function printBoard_inst_53_2_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return NofibPrelude.Nil
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_53_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_53_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_53_2_22_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_53_2_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_53_2_tsni(s, tmp15, xs1);
          tmp17 = NofibPrelude.append(tmp14, tmp16);
          return NofibPrelude.append(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_53_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_53_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_53_2_20_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_53_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_53_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_53_2_23_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_53_2_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_53_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_53_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_53_2_24_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_53_2_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_53_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_53_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_53_2_12_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_53_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_53_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_53_2_26_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_53_2_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_53_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_53_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_53_2_25_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_53_2_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
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
spaces_inst_53_2_10_tsni = function spaces_inst_53_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_10_4_tsni(tmp3, " ")
};
replicate_inst_53_2_10_4_tsni = function replicate_inst_53_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_9_tsni = function spaces_inst_53_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_9_4_tsni(tmp3, " ")
};
replicate_inst_53_2_9_4_tsni = function replicate_inst_53_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_26_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_8_tsni = function spaces_inst_53_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_8_4_tsni(tmp3, " ")
};
replicate_inst_53_2_8_4_tsni = function replicate_inst_53_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_12_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_7_tsni = function spaces_inst_53_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_7_4_tsni(tmp3, " ")
};
replicate_inst_53_2_7_4_tsni = function replicate_inst_53_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_24_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_6_tsni = function spaces_inst_53_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_6_4_tsni(tmp3, " ")
};
replicate_inst_53_2_6_4_tsni = function replicate_inst_53_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_23_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_5_tsni = function spaces_inst_53_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_5_4_tsni(tmp3, " ")
};
replicate_inst_53_2_5_4_tsni = function replicate_inst_53_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_20_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_53_2_3_tsni = function spaces_inst_53_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_53_2_3_4_tsni(tmp3, " ")
};
replicate_inst_53_2_3_4_tsni = function replicate_inst_53_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_2_22_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lscomp1$_inst_54_55_tsni = function lscomp1$_inst_54_55_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_54_55_tsni = function lscomp2$_inst_54_55_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_54_55_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_54_55_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_54_55_tsni = function lambda$_inst_54_55_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_54_55_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_54_55_28_tsni = function enumFromTo_inst_54_55_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_55_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_54_55_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_54_55_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_54_56_tsni = function enumFromTo_inst_54_56_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_56_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_54_55_28_tsni(1, sze);
      return lscomp2$_inst_54_55_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda15)
    }
  }
};
descendents_inst_57_58_tsni = function descendents_inst_57_58_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda$this;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_57_58_50_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda11)
  } else {
    tmp4 = singleDescend_inst_57_58_51_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_57_58_52_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this = runtime.safeCall(lambda12(h));
            tmp9 = NofibPrelude.lazy(lambda$this);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        tmp8 = NofibPrelude.lazy(lambda14);
      }
    }
    res = tmp8;
    return res
  }
};
descAndNo_inst_57_58_52_tsni = function descAndNo_inst_57_58_52_tsni(board) {
  let tmp;
  tmp = allDescend_inst_57_58_52_43_tsni(board);
  return lscomp_inst_57_58_52_44_tsni(tmp)
};
allDescend_inst_57_58_52_43_tsni = function allDescend_inst_57_58_52_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_57_58_52_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_57_58_52_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_57_58_52_43_40_tsni = function possibleMoves_inst_57_58_52_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_57_58_52_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_57_58_52_43_40_41_tsni = function lscomp$_inst_57_58_52_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_57_58_52_44_tsni = function lscomp_inst_57_58_52_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_57_58_52_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_57_58_52_44_tsni(x, t)
  }
});
lambda$_inst_57_58_52_44_tsni = function lambda$_inst_57_58_52_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_57_58_52_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_57_58_52_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_57_58_52_44_32_tsni = function possibleMoves_inst_57_58_52_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_52_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_57_58_52_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_57_58_52_43_45_tsni = function map_inst_57_58_52_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_57_58_51_tsni = function singleDescend_inst_57_58_51_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_57_58_51_47_tsni(board);
  return lscomp_inst_57_58_51_74_tsni(tmp)
};
descAndNo_inst_57_58_51_47_tsni = function descAndNo_inst_57_58_51_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_57_58_51_47_43_tsni(board);
  return lscomp_inst_57_58_51_47_44_tsni(tmp)
};
lscomp_inst_57_58_51_47_44_tsni = function lscomp_inst_57_58_51_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_57_58_51_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_57_58_51_47_44_tsni(x, t)
  }
});
lambda$_inst_57_58_51_47_44_tsni = function lambda$_inst_57_58_51_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_57_58_51_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_57_58_51_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_57_58_51_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_57_58_51_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_57_58_51_47_44_32_tsni = function possibleMoves_inst_57_58_51_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_57_58_51_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_57_58_51_47_43_tsni = function allDescend_inst_57_58_51_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_57_58_51_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_57_58_51_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_57_58_51_47_43_40_tsni = function possibleMoves_inst_57_58_51_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_57_58_51_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_57_58_51_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_57_58_51_47_43_40_41_tsni = function lscomp$_inst_57_58_51_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_57_58_51_47_43_45_tsni = function map_inst_57_58_51_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_57_58_51_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
deadEnd_inst_57_58_50_tsni = function deadEnd_inst_57_58_50_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_57_58_50_38_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_57_58_50_38_tsni = function possibleMoves_inst_57_58_50_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_57_58_50_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_57_58_50_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
root_inst_59_60_tsni = function root_inst_59_60_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_59_60_56_tsni(1, sze);
  tmp4 = lscomp1$_inst_59_60_55_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda17);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_59_60_55_tsni = function lscomp1$_inst_59_60_55_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_59_60_55_tsni = function lscomp2$_inst_59_60_55_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_59_60_55_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_59_60_55_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_59_60_55_tsni = function lambda$_inst_59_60_55_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_59_60_55_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_59_60_55_28_tsni = function enumFromTo_inst_59_60_55_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_60_55_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_59_60_55_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_59_60_55_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_59_60_56_tsni = function enumFromTo_inst_59_60_56_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_59_60_56_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_59_60_55_28_tsni(1, sze);
      return lscomp2$_inst_59_60_55_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda15)
    }
  }
};
grow_inst_59_61_tsni = function grow_inst_59_61_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_59_61_58_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_59_61_58_tsni = function descendents_inst_59_61_58_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda$this;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_59_61_58_50_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda11)
  } else {
    tmp4 = singleDescend_inst_59_61_58_51_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_59_61_58_52_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this = runtime.safeCall(lambda12(h));
            tmp9 = NofibPrelude.lazy(lambda$this);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        tmp8 = NofibPrelude.lazy(lambda14);
      }
    }
    res = tmp8;
    return res
  }
};
deadEnd_inst_59_61_58_50_tsni = function deadEnd_inst_59_61_58_50_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_59_61_58_50_38_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_59_61_58_50_38_tsni = function possibleMoves_inst_59_61_58_50_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_50_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_59_61_58_50_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_59_61_58_51_tsni = function singleDescend_inst_59_61_58_51_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_59_61_58_51_47_tsni(board);
  return lscomp_inst_59_61_58_51_74_tsni(tmp)
};
descAndNo_inst_59_61_58_51_47_tsni = function descAndNo_inst_59_61_58_51_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_59_61_58_51_47_43_tsni(board);
  return lscomp_inst_59_61_58_51_47_44_tsni(tmp)
};
allDescend_inst_59_61_58_51_47_43_tsni = function allDescend_inst_59_61_58_51_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_59_61_58_51_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_59_61_58_51_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_59_61_58_51_47_43_40_tsni = function possibleMoves_inst_59_61_58_51_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_59_61_58_51_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_59_61_58_51_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_59_61_58_51_47_43_40_41_tsni = function lscomp$_inst_59_61_58_51_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_59_61_58_51_47_44_tsni = function lscomp_inst_59_61_58_51_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_59_61_58_51_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_59_61_58_51_47_44_tsni(x, t)
  }
});
lambda$_inst_59_61_58_51_47_44_tsni = function lambda$_inst_59_61_58_51_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_59_61_58_51_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_59_61_58_51_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_59_61_58_51_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_59_61_58_51_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_59_61_58_51_47_44_32_tsni = function possibleMoves_inst_59_61_58_51_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_59_61_58_51_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_59_61_58_51_47_43_45_tsni = function map_inst_59_61_58_51_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_59_61_58_51_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_59_61_58_52_tsni = function descAndNo_inst_59_61_58_52_tsni(board) {
  let tmp;
  tmp = allDescend_inst_59_61_58_52_43_tsni(board);
  return lscomp_inst_59_61_58_52_44_tsni(tmp)
};
lscomp_inst_59_61_58_52_44_tsni = function lscomp_inst_59_61_58_52_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_59_61_58_52_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_59_61_58_52_44_tsni(x, t)
  }
});
lambda$_inst_59_61_58_52_44_tsni = function lambda$_inst_59_61_58_52_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_59_61_58_52_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_59_61_58_52_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_59_61_58_52_44_32_tsni = function possibleMoves_inst_59_61_58_52_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_59_61_58_52_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_59_61_58_52_43_tsni = function allDescend_inst_59_61_58_52_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_59_61_58_52_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_59_61_58_52_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_59_61_58_52_43_40_tsni = function possibleMoves_inst_59_61_58_52_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_59_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_59_61_58_52_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_59_61_58_52_43_40_41_tsni = function lscomp$_inst_59_61_58_52_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_59_61_58_52_43_45_tsni = function map_inst_59_61_58_52_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_59_62_tsni = function depthSearch_inst_59_62_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_59_62_63_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_59_62_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_59_62_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_59_62_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_59_62_tsni(q, growFn, finFn)
  }
});
lambda$_inst_59_62_tsni = function lambda$_inst_59_62_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_59_62_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_59_65_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_59_64_1_tsni(y);
        tmp10 = pp_inst_59_64_tsni(xs);
        tmp11 = append_inst_59_64_70_tsni(tmp9, tmp10);
        tmp12 = NofibPrelude.append(tmp8, tmp11);
        tmp13 = NofibPrelude.append(tmp7, tmp12);
        return NofibPrelude.append(tmp5, tmp13)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
lambda_inst_59_62_63_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_59_64_tsni()
    }
  }
});
pp_inst_59_64_tsni = function pp_inst_59_64_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_59_64_1_tsni = function showChessSet_inst_59_64_1_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_59_64_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_59_64_1_2_tsni = function printBoard_inst_59_64_1_2_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_59_64_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_59_64_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_59_64_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_59_64_70_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_59_64_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_59_64_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_59_64_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_59_64_1_2_16_tsni(tmp14, tmp16);
          return append_inst_59_64_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_59_64_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_59_64_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_59_64_1_2_20_tsni(tmp22, tmp24);
              return append_inst_59_64_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_59_64_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_59_64_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_59_64_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_59_64_70_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_59_64_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_59_64_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_59_64_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_59_64_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_59_64_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_59_64_70_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_59_64_1_2_tsni(s, tmp47, tmp48);
                return append_inst_59_64_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_59_64_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_59_64_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_59_64_1_2_12_tsni(tmp54, tmp56);
            return append_inst_59_64_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_59_64_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_59_64_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_59_64_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_59_64_70_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_59_64_1_2_tsni(s, tmp67, tmp68);
                return append_inst_59_64_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_59_64_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_59_64_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_59_64_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_59_64_70_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_59_64_1_2_tsni(s, tmp79, tmp80);
              return append_inst_59_64_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
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
spaces_inst_59_64_1_2_10_tsni = function spaces_inst_59_64_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_10_4_tsni = function replicate_inst_59_64_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_9_tsni = function spaces_inst_59_64_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_9_4_tsni = function replicate_inst_59_64_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_8_tsni = function spaces_inst_59_64_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_8_4_tsni = function replicate_inst_59_64_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_7_tsni = function spaces_inst_59_64_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_7_4_tsni = function replicate_inst_59_64_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_6_tsni = function spaces_inst_59_64_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_6_4_tsni = function replicate_inst_59_64_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_5_tsni = function spaces_inst_59_64_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_5_4_tsni = function replicate_inst_59_64_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_59_64_1_2_3_tsni = function spaces_inst_59_64_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_59_64_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_59_64_1_2_3_4_tsni = function replicate_inst_59_64_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_64_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_64_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_59_64_1_2_21_tsni = function append_inst_59_64_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_14_tsni = function append_inst_59_64_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_16_tsni = function append_inst_59_64_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_11_tsni = function append_inst_59_64_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_15_tsni = function append_inst_59_64_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_13_tsni = function append_inst_59_64_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_20_tsni = function append_inst_59_64_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_12_tsni = function append_inst_59_64_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_18_tsni = function append_inst_59_64_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_19_tsni = function append_inst_59_64_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_17_tsni = function append_inst_59_64_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_64_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_59_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_59_64_1_2_23_tsni = function append_inst_59_64_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_24_tsni = function append_inst_59_64_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_26_tsni = function append_inst_59_64_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_22_tsni = function append_inst_59_64_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_64_1_2_25_tsni = function append_inst_59_64_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_59_65_tsni = function take_lz_inst_59_65_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_59_64_tsni()
    }
  }
};
printTour_inst_66_67_tsni = function printTour_inst_66_67_tsni(ss) {
  let scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2;
  scrut = NofibPrelude.map(lambda20, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_66_67_60_tsni(size);
        tmp1 = depthSearch_inst_66_67_62_tsni(tmp, grow_inst_66_67_61_tsni, knights.isFinished);
        tmp2 = take_lz_inst_66_67_65_tsni(number, tmp1);
        return pp_inst_66_67_64_tsni(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
pp_inst_66_67_64_tsni = function pp_inst_66_67_64_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_66_67_64_1_tsni = function showChessSet_inst_66_67_64_1_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_66_67_64_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_66_67_64_1_2_tsni = function printBoard_inst_66_67_64_1_2_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_66_67_64_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_66_67_64_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_66_67_64_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head4 = "*";
        _deforest_Cons_tail4 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_66_67_64_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_66_67_64_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_66_67_64_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_66_67_64_1_2_16_tsni(tmp14, tmp16);
          return append_inst_66_67_64_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_66_67_64_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_66_67_64_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_66_67_64_1_2_20_tsni(tmp22, tmp24);
              return append_inst_66_67_64_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_66_67_64_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_66_67_64_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_66_67_64_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_66_67_64_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_66_67_64_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_66_67_64_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_66_67_64_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_66_67_64_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_66_67_64_1_2_tsni(s, tmp47, tmp48);
                return append_inst_66_67_64_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_66_67_64_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_66_67_64_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_66_67_64_1_2_12_tsni(tmp54, tmp56);
            return append_inst_66_67_64_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_66_67_64_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_66_67_64_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_66_67_64_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_66_67_64_1_2_tsni(s, tmp67, tmp68);
                return append_inst_66_67_64_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_66_67_64_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_66_67_64_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_66_67_64_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_66_67_64_1_2_tsni(s, tmp79, tmp80);
              return append_inst_66_67_64_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
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
spaces_inst_66_67_64_1_2_3_tsni = function spaces_inst_66_67_64_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_3_4_tsni = function replicate_inst_66_67_64_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_5_tsni = function spaces_inst_66_67_64_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_5_4_tsni = function replicate_inst_66_67_64_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_6_tsni = function spaces_inst_66_67_64_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_6_4_tsni = function replicate_inst_66_67_64_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_7_tsni = function spaces_inst_66_67_64_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_7_4_tsni = function replicate_inst_66_67_64_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_8_tsni = function spaces_inst_66_67_64_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_8_4_tsni = function replicate_inst_66_67_64_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_9_tsni = function spaces_inst_66_67_64_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_9_4_tsni = function replicate_inst_66_67_64_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_66_67_64_1_2_10_tsni = function spaces_inst_66_67_64_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_66_67_64_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_66_67_64_1_2_10_4_tsni = function replicate_inst_66_67_64_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_67_64_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_67_64_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_66_67_64_1_2_11_tsni = function append_inst_66_67_64_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_12_tsni = function append_inst_66_67_64_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_13_tsni = function append_inst_66_67_64_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_14_tsni = function append_inst_66_67_64_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_15_tsni = function append_inst_66_67_64_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_16_tsni = function append_inst_66_67_64_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_17_tsni = function append_inst_66_67_64_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_18_tsni = function append_inst_66_67_64_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_19_tsni = function append_inst_66_67_64_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_20_tsni = function append_inst_66_67_64_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_21_tsni = function append_inst_66_67_64_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_66_67_64_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_66_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_66_67_64_1_2_22_tsni = function append_inst_66_67_64_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_23_tsni = function append_inst_66_67_64_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_24_tsni = function append_inst_66_67_64_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_25_tsni = function append_inst_66_67_64_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_1_2_26_tsni = function append_inst_66_67_64_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_66_67_65_tsni = function take_lz_inst_66_67_65_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_66_67_64_tsni()
    }
  }
};
depthSearch_inst_66_67_62_tsni = function depthSearch_inst_66_67_62_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_66_67_62_63_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_66_67_62_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_66_67_62_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_66_67_62_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_66_67_62_tsni(q, growFn, finFn)
  }
});
lambda$_inst_66_67_62_tsni = function lambda$_inst_66_67_62_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_66_67_62_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_66_67_65_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_66_67_64_1_tsni(y);
        tmp10 = pp_inst_66_67_64_tsni(xs);
        tmp11 = append_inst_66_67_64_70_tsni(tmp9, tmp10);
        tmp12 = NofibPrelude.append(tmp8, tmp11);
        tmp13 = NofibPrelude.append(tmp7, tmp12);
        return NofibPrelude.append(tmp5, tmp13)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
lambda_inst_66_67_62_63_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_66_67_64_tsni()
    }
  }
});
grow_inst_66_67_61_tsni = function grow_inst_66_67_61_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_66_67_61_58_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_66_67_61_58_tsni = function descendents_inst_66_67_61_58_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda$this;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_66_67_61_58_50_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda11)
  } else {
    tmp4 = singleDescend_inst_66_67_61_58_51_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_66_67_61_58_52_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this = runtime.safeCall(lambda12(h));
            tmp9 = NofibPrelude.lazy(lambda$this);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        tmp8 = NofibPrelude.lazy(lambda14);
      }
    }
    res = tmp8;
    return res
  }
};
descAndNo_inst_66_67_61_58_52_tsni = function descAndNo_inst_66_67_61_58_52_tsni(board) {
  let tmp;
  tmp = allDescend_inst_66_67_61_58_52_43_tsni(board);
  return lscomp_inst_66_67_61_58_52_44_tsni(tmp)
};
allDescend_inst_66_67_61_58_52_43_tsni = function allDescend_inst_66_67_61_58_52_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_66_67_61_58_52_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_66_67_61_58_52_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_66_67_61_58_52_43_40_tsni = function possibleMoves_inst_66_67_61_58_52_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_66_67_61_58_52_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_66_67_61_58_52_43_40_41_tsni = function lscomp$_inst_66_67_61_58_52_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_66_67_61_58_52_44_tsni = function lscomp_inst_66_67_61_58_52_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_66_67_61_58_52_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_66_67_61_58_52_44_tsni(x, t)
  }
});
lambda$_inst_66_67_61_58_52_44_tsni = function lambda$_inst_66_67_61_58_52_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_66_67_61_58_52_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_66_67_61_58_52_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_66_67_61_58_52_44_32_tsni = function possibleMoves_inst_66_67_61_58_52_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_66_67_61_58_52_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_66_67_61_58_52_43_45_tsni = function map_inst_66_67_61_58_52_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_66_67_61_58_51_tsni = function singleDescend_inst_66_67_61_58_51_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_66_67_61_58_51_47_tsni(board);
  return lscomp_inst_66_67_61_58_51_74_tsni(tmp)
};
descAndNo_inst_66_67_61_58_51_47_tsni = function descAndNo_inst_66_67_61_58_51_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_66_67_61_58_51_47_43_tsni(board);
  return lscomp_inst_66_67_61_58_51_47_44_tsni(tmp)
};
lscomp_inst_66_67_61_58_51_47_44_tsni = function lscomp_inst_66_67_61_58_51_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_66_67_61_58_51_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_66_67_61_58_51_47_44_tsni(x, t)
  }
});
lambda$_inst_66_67_61_58_51_47_44_tsni = function lambda$_inst_66_67_61_58_51_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_66_67_61_58_51_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_66_67_61_58_51_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_66_67_61_58_51_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_66_67_61_58_51_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_66_67_61_58_51_47_44_32_tsni = function possibleMoves_inst_66_67_61_58_51_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_66_67_61_58_51_47_43_tsni = function allDescend_inst_66_67_61_58_51_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_66_67_61_58_51_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_66_67_61_58_51_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_66_67_61_58_51_47_43_40_tsni = function possibleMoves_inst_66_67_61_58_51_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_66_67_61_58_51_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni = function lscomp$_inst_66_67_61_58_51_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_66_67_61_58_51_47_43_45_tsni = function map_inst_66_67_61_58_51_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_66_67_61_58_51_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
deadEnd_inst_66_67_61_58_50_tsni = function deadEnd_inst_66_67_61_58_50_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_66_67_61_58_50_38_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_66_67_61_58_50_38_tsni = function possibleMoves_inst_66_67_61_58_50_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_66_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_66_67_61_58_50_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
root_inst_66_67_60_tsni = function root_inst_66_67_60_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_66_67_60_56_tsni(1, sze);
  tmp4 = lscomp1$_inst_66_67_60_55_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda17);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_66_67_60_55_tsni = function lscomp1$_inst_66_67_60_55_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_66_67_60_55_tsni = function lscomp2$_inst_66_67_60_55_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_66_67_60_55_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_66_67_60_55_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_66_67_60_55_tsni = function lambda$_inst_66_67_60_55_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_66_67_60_55_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_66_67_60_55_28_tsni = function enumFromTo_inst_66_67_60_55_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_66_67_60_55_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_66_67_60_55_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_66_67_60_55_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_66_67_60_56_tsni = function enumFromTo_inst_66_67_60_56_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_66_67_60_56_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_66_67_60_55_28_tsni(1, sze);
      return lscomp2$_inst_66_67_60_55_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda15)
    }
  }
};
testKnights_nofib_inst_68_69_tsni = function testKnights_nofib_inst_68_69_tsni(ss) {
  let usageString, scrut;
  usageString = "\nUsage: knights <board size> <no solutions> \n";
  scrut = argsOk(ss);
  if (scrut === true) {
    return printTour_inst_68_69_67_tsni(ss)
  } else {
    throw globalThis.Error(usageString);
  }
};
printTour_inst_68_69_67_tsni = function printTour_inst_68_69_67_tsni(ss) {
  let scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2;
  scrut = NofibPrelude.map(lambda20, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_68_69_67_60_tsni(size);
        tmp1 = depthSearch_inst_68_69_67_62_tsni(tmp, grow_inst_68_69_67_61_tsni, knights.isFinished);
        tmp2 = take_lz_inst_68_69_67_65_tsni(number, tmp1);
        return pp_inst_68_69_67_64_tsni(tmp2)
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } else {
    throw globalThis.Error("printTour error");
  }
};
root_inst_68_69_67_60_tsni = function root_inst_68_69_67_60_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_68_69_67_60_56_tsni(1, sze);
  tmp4 = lscomp1$_inst_68_69_67_60_55_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda17);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_68_69_67_60_55_tsni = function lscomp1$_inst_68_69_67_60_55_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_68_69_67_60_55_tsni = function lscomp2$_inst_68_69_67_60_55_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_68_69_67_60_55_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_68_69_67_60_55_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_68_69_67_60_55_tsni = function lambda$_inst_68_69_67_60_55_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$_inst_68_69_67_60_55_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_68_69_67_60_55_28_tsni = function enumFromTo_inst_68_69_67_60_55_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_68_69_67_60_55_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_68_69_67_60_55_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_68_69_67_60_55_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_68_69_67_60_56_tsni = function enumFromTo_inst_68_69_67_60_56_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_68_69_67_60_56_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_68_69_67_60_55_28_tsni(1, sze);
      return lscomp2$_inst_68_69_67_60_55_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda15)
    }
  }
};
grow_inst_68_69_67_61_tsni = function grow_inst_68_69_67_61_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
    first0 = x_y[0];
    first1 = x_y[1];
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_68_69_67_61_58_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw new globalThis.Error("match error");
  }
};
descendents_inst_68_69_67_61_58_tsni = function descendents_inst_68_69_67_61_58_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda$this;
  tmp = knights.canJumpFirst(board);
  tmp1 = knights.firstPiece(board);
  tmp2 = knights.addPiece(tmp1, board);
  tmp3 = deadEnd_inst_68_69_67_61_58_50_tsni(tmp2);
  scrut3 = tmp && tmp3;
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda11)
  } else {
    tmp4 = singleDescend_inst_68_69_67_61_58_51_tsni(board);
    singles = tmp4;
    tmp5 = NofibPrelude.listLen(singles);
    scrut = tmp5;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp6 = descAndNo_inst_68_69_67_61_58_52_tsni(board);
      tmp7 = knights.quickSortIntChessSet(tmp6);
      tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this = runtime.safeCall(lambda12(h));
            tmp9 = NofibPrelude.lazy(lambda$this);
          } else {
            throw globalThis.Error("unreachable");
          }
        } else {
          throw globalThis.Error("unreachable");
        }
        tmp8 = tmp9;
      } else {
        tmp8 = NofibPrelude.lazy(lambda14);
      }
    }
    res = tmp8;
    return res
  }
};
deadEnd_inst_68_69_67_61_58_50_tsni = function deadEnd_inst_68_69_67_61_58_50_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_68_69_67_61_58_50_38_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_68_69_67_61_58_50_38_tsni = function possibleMoves_inst_68_69_67_61_58_50_38_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_50_38_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_68_69_67_61_58_50_38_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_68_69_67_61_58_51_tsni = function singleDescend_inst_68_69_67_61_58_51_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_68_69_67_61_58_51_47_tsni(board);
  return lscomp_inst_68_69_67_61_58_51_74_tsni(tmp)
};
descAndNo_inst_68_69_67_61_58_51_47_tsni = function descAndNo_inst_68_69_67_61_58_51_47_tsni(board) {
  let tmp;
  tmp = allDescend_inst_68_69_67_61_58_51_47_43_tsni(board);
  return lscomp_inst_68_69_67_61_58_51_47_44_tsni(tmp)
};
allDescend_inst_68_69_67_61_58_51_47_43_tsni = function allDescend_inst_68_69_67_61_58_51_47_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_68_69_67_61_58_51_47_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_68_69_67_61_58_51_47_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_68_69_67_61_58_51_47_43_40_tsni = function possibleMoves_inst_68_69_67_61_58_51_47_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_68_69_67_61_58_51_47_44_48_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni = function lscomp$_inst_68_69_67_61_58_51_47_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_68_69_67_61_58_51_47_44_tsni = function lscomp_inst_68_69_67_61_58_51_47_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_68_69_67_61_58_51_47_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_68_69_67_61_58_51_47_44_tsni(x, t)
  }
});
lambda$_inst_68_69_67_61_58_51_47_44_tsni = function lambda$_inst_68_69_67_61_58_51_47_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_68_69_67_61_58_51_47_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  _deforest_Deforest_Arr_2_0 = tmp2;
  _deforest_Deforest_Arr_2_1 = x;
  arr = (param1) => {
    let first1, first0, y, x1, t1, scrut, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    y = first0;
    x1 = first1;
    t1 = param1;
    scrut = y === 1;
    if (scrut === true) {
      tmp4 = lscomp_inst_68_69_67_61_58_51_74_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_68_69_67_61_58_51_74_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_68_69_67_61_58_51_47_44_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_68_69_67_61_58_51_47_44_32_tsni = function possibleMoves_inst_68_69_67_61_58_51_47_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_51_47_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_68_69_67_61_58_51_47_43_45_tsni = function map_inst_68_69_67_61_58_51_47_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_68_69_67_61_58_51_47_44_48_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_68_69_67_61_58_52_tsni = function descAndNo_inst_68_69_67_61_58_52_tsni(board) {
  let tmp;
  tmp = allDescend_inst_68_69_67_61_58_52_43_tsni(board);
  return lscomp_inst_68_69_67_61_58_52_44_tsni(tmp)
};
lscomp_inst_68_69_67_61_58_52_44_tsni = function lscomp_inst_68_69_67_61_58_52_44_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_68_69_67_61_58_52_44_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_68_69_67_61_58_52_44_tsni(x, t)
  }
});
lambda$_inst_68_69_67_61_58_52_44_tsni = function lambda$_inst_68_69_67_61_58_52_44_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_68_69_67_61_58_52_44_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_68_69_67_61_58_52_44_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_68_69_67_61_58_52_44_32_tsni = function possibleMoves_inst_68_69_67_61_58_52_44_32_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_44_32_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_68_69_67_61_58_52_43_tsni = function allDescend_inst_68_69_67_61_58_52_43_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_68_69_67_61_58_52_43_40_tsni(board);
  lambda$this = runtime.safeCall(lambda8(board));
  return map_inst_68_69_67_61_58_52_43_45_tsni(lambda$this, tmp)
};
possibleMoves_inst_68_69_67_61_58_52_43_40_tsni = function possibleMoves_inst_68_69_67_61_58_52_43_40_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda9)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_68_69_67_61_58_52_43_40_41_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni = function lscomp$_inst_68_69_67_61_58_52_43_40_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_68_69_67_61_58_52_43_45_tsni = function map_inst_68_69_67_61_58_52_43_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_68_69_67_62_tsni = function depthSearch_inst_68_69_67_62_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_68_69_67_62_63_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_68_69_67_62_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_68_69_67_62_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_68_69_67_62_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_68_69_67_62_tsni(q, growFn, finFn)
  }
});
lambda$_inst_68_69_67_62_tsni = function lambda$_inst_68_69_67_62_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_68_69_67_62_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_68_69_67_65_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (globalThis.Array.isArray(param01) && param01.length === 2) {
        first0 = param01[0];
        first1 = param01[1];
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_68_69_67_64_1_tsni(y);
        tmp10 = pp_inst_68_69_67_64_tsni(xs);
        tmp11 = append_inst_68_69_67_64_70_tsni(tmp9, tmp10);
        tmp12 = append_inst_68_69_67_64_72_tsni(tmp8, tmp11);
        tmp13 = append_inst_68_69_67_64_73_tsni(tmp7, tmp12);
        return append_inst_68_69_67_64_71_tsni(tmp5, tmp13)
      } else {
        throw new globalThis.Error("match error");
      }
    }
  }
};
lambda_inst_68_69_67_62_63_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_68_69_67_64_tsni()
    }
  }
});
pp_inst_68_69_67_64_tsni = function pp_inst_68_69_67_64_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_68_69_67_64_1_tsni = function showChessSet_inst_68_69_67_64_1_tsni(b) {
  let param0, param1, param2, param3, sze, n, f, ts, sortedTrail, tmp, tmp1;
  if (b instanceof knights.Board.class) {
    param0 = b.a;
    param1 = b.b;
    param2 = b.c;
    param3 = b.d;
    sze = param0;
    n = param1;
    f = param2;
    ts = param3;
    tmp = knights.assignMoveNo(ts, sze, n);
    tmp1 = knights.quickSortIntInt(tmp);
    sortedTrail = tmp1;
    return printBoard_inst_68_69_67_64_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw new globalThis.Error("match error");
  }
};
printBoard_inst_68_69_67_64_1_2_tsni = function printBoard_inst_68_69_67_64_1_2_tsni(s, n, xs) {
  let param0, param1, first1, first0, i, j, xs1, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  if (xs instanceof NofibPrelude.Nil.class) {
    tmp = s * s;
    scrut8 = n > tmp;
    if (scrut8 === true) {
      return (ys) => {
        return ys
      }
    } else {
      tmp1 = NofibPrelude.intMod(n, s);
      scrut7 = tmp1 != 0;
      if (scrut7 === true) {
        tmp2 = s * s;
        tmp3 = spaces_inst_68_69_67_64_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_68_69_67_64_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_68_69_67_64_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error");
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      i = first0;
      j = first1;
      xs1 = param1;
      scrut4 = i === n;
      if (scrut4 === true) {
        tmp11 = NofibPrelude.intMod(n, s);
        scrut5 = tmp11 === 0;
        if (scrut5 === true) {
          tmp12 = NofibPrelude.stringOfInt(j);
          tmp13 = NofibPrelude.nofibStringToList(tmp12);
          tmp14 = NofibPrelude.nofibStringToList("\n");
          tmp15 = n + 1;
          tmp16 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_68_69_67_64_1_2_16_tsni(tmp14, tmp16);
          return append_inst_68_69_67_64_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_68_69_67_64_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_68_69_67_64_1_2_20_tsni(tmp22, tmp24);
              return append_inst_68_69_67_64_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_68_69_67_64_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = [
                  i,
                  j
                ];
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_68_69_67_64_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = [
                    i,
                    j
                  ];
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_68_69_67_64_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_68_69_67_64_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = [
                i,
                j
              ];
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_68_69_67_64_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = [
                  i,
                  j
                ];
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp47, tmp48);
                return append_inst_68_69_67_64_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        }
      } else {
        scrut2 = i === n;
        if (scrut2 === true) {
          tmp50 = NofibPrelude.intMod(n, s);
          scrut3 = tmp50 != 0;
          if (scrut3 === true) {
            tmp51 = NofibPrelude.stringOfInt(j);
            tmp52 = NofibPrelude.nofibStringToList(tmp51);
            tmp53 = s * s;
            tmp54 = spaces_inst_68_69_67_64_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_68_69_67_64_1_2_12_tsni(tmp54, tmp56);
            return append_inst_68_69_67_64_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_68_69_67_64_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = [
                i,
                j
              ];
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_68_69_67_64_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = [
                  i,
                  j
                ];
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp67, tmp68);
                return append_inst_68_69_67_64_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_68_69_67_64_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = [
              i,
              j
            ];
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_68_69_67_64_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = [
                i,
                j
              ];
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_68_69_67_64_1_2_tsni(s, tmp79, tmp80);
              return append_inst_68_69_67_64_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error");
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
spaces_inst_68_69_67_64_1_2_10_tsni = function spaces_inst_68_69_67_64_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_10_4_tsni = function replicate_inst_68_69_67_64_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_9_tsni = function spaces_inst_68_69_67_64_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_9_4_tsni = function replicate_inst_68_69_67_64_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_8_tsni = function spaces_inst_68_69_67_64_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_8_4_tsni = function replicate_inst_68_69_67_64_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_7_tsni = function spaces_inst_68_69_67_64_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_7_4_tsni = function replicate_inst_68_69_67_64_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_6_tsni = function spaces_inst_68_69_67_64_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_6_4_tsni = function replicate_inst_68_69_67_64_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_5_tsni = function spaces_inst_68_69_67_64_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_5_4_tsni = function replicate_inst_68_69_67_64_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_68_69_67_64_1_2_3_tsni = function spaces_inst_68_69_67_64_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_68_69_67_64_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_68_69_67_64_1_2_3_4_tsni = function replicate_inst_68_69_67_64_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_69_67_64_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_69_67_64_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_68_69_67_64_1_2_21_tsni = function append_inst_68_69_67_64_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_14_tsni = function append_inst_68_69_67_64_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_16_tsni = function append_inst_68_69_67_64_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_11_tsni = function append_inst_68_69_67_64_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_15_tsni = function append_inst_68_69_67_64_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_13_tsni = function append_inst_68_69_67_64_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_20_tsni = function append_inst_68_69_67_64_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_12_tsni = function append_inst_68_69_67_64_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_18_tsni = function append_inst_68_69_67_64_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_19_tsni = function append_inst_68_69_67_64_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_17_tsni = function append_inst_68_69_67_64_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_68_69_67_64_70_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_1_2_23_tsni = function append_inst_68_69_67_64_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_24_tsni = function append_inst_68_69_67_64_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_26_tsni = function append_inst_68_69_67_64_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_22_tsni = function append_inst_68_69_67_64_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_1_2_25_tsni = function append_inst_68_69_67_64_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_68_69_67_65_tsni = function take_lz_inst_68_69_67_65_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_68_69_67_64_tsni()
    }
  }
};
append_inst_68_69_67_64_70_tsni = function append_inst_68_69_67_64_70_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_68_69_67_64_71_tsni = function append_inst_68_69_67_64_71_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_71_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_68_75_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_72_tsni = function append_inst_68_69_67_64_72_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_72_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_68_75_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_68_69_67_64_73_tsni = function append_inst_68_69_67_64_73_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_68_69_67_64_73_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_68_75_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_70_tsni = function append_inst_0_70_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_31_32_41_tsni = function lscomp$_inst_31_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_33_32_41_tsni = function lscomp$_inst_33_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_34_32_41_tsni = function lscomp$_inst_34_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_35_22_tsni = function append_inst_35_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_20_tsni = function append_inst_35_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_23_tsni = function append_inst_35_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_24_tsni = function append_inst_35_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_12_tsni = function append_inst_35_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_26_tsni = function append_inst_35_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_25_tsni = function append_inst_35_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_36_41_tsni = function lscomp$_inst_36_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_37_38_41_tsni = function lscomp$_inst_37_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_39_45_tsni = function map_inst_39_45_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp$_inst_42_44_32_41_tsni = function lscomp$_inst_42_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_46_47_44_32_41_tsni = function lscomp$_inst_46_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_46_74_tsni = function lscomp_inst_46_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_49_50_38_41_tsni = function lscomp$_inst_49_50_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_49_51_47_44_32_41_tsni = function lscomp$_inst_49_51_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_49_51_74_tsni = function lscomp_inst_49_51_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_49_52_44_32_41_tsni = function lscomp$_inst_49_52_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_53_2_25_tsni = function append_inst_53_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_26_tsni = function append_inst_53_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_12_tsni = function append_inst_53_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_24_tsni = function append_inst_53_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_23_tsni = function append_inst_53_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_20_tsni = function append_inst_53_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_2_22_tsni = function append_inst_53_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_57_58_52_44_32_41_tsni = function lscomp$_inst_57_58_52_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_57_58_51_47_44_32_41_tsni = function lscomp$_inst_57_58_51_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_57_58_51_74_tsni = function lscomp_inst_57_58_51_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_57_58_50_38_41_tsni = function lscomp$_inst_57_58_50_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_59_61_58_50_38_41_tsni = function lscomp$_inst_59_61_58_50_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_59_61_58_51_47_44_32_41_tsni = function lscomp$_inst_59_61_58_51_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_59_61_58_51_74_tsni = function lscomp_inst_59_61_58_51_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_59_61_58_52_44_32_41_tsni = function lscomp$_inst_59_61_58_52_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_59_64_70_tsni = function append_inst_59_64_70_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_66_67_64_70_tsni = function append_inst_66_67_64_70_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_66_67_61_58_52_44_32_41_tsni = function lscomp$_inst_66_67_61_58_52_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni = function lscomp$_inst_66_67_61_58_51_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_66_67_61_58_51_74_tsni = function lscomp_inst_66_67_61_58_51_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_66_67_61_58_50_38_41_tsni = function lscomp$_inst_66_67_61_58_50_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_68_69_67_61_58_50_38_41_tsni = function lscomp$_inst_68_69_67_61_58_50_38_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni = function lscomp$_inst_68_69_67_61_58_51_47_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_68_69_67_61_58_51_74_tsni = function lscomp_inst_68_69_67_61_58_51_74_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni = function lscomp$_inst_68_69_67_61_58_52_44_32_41_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
nofibListToString_inst_68_75_tsni = function nofibListToString_inst_68_75_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda21 = (undefined, function (a, b) {
  let tmp;
  tmp = knights1.myIsDigit(a);
  return tmp && b
});
all_digits = function all_digits(s) {
  return NofibPrelude.foldr(lambda21, true, s)
};
lambda22 = (undefined, function (a, b) {
  let tmp;
  tmp = all_digits(a);
  return tmp && b
});
argsOk = function argsOk(ss) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(ss);
  tmp1 = tmp === 2;
  tmp2 = NofibPrelude.foldr(lambda22, true, ss);
  return tmp1 && tmp2
};
strToInt = function strToInt(y, xs) {
  let param0, param1, x, xs1, tmp, tmp1, tmp2, tmp3;
  if (xs instanceof NofibPrelude.Nil.class) {
    return y
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = 10 * y;
    tmp1 = runtime.safeCall(x.codePointAt(0));
    tmp2 = tmp1 - 48;
    tmp3 = tmp + tmp2;
    return strToInt(tmp3, xs1)
  } else {
    throw new globalThis.Error("match error");
  }
};
pp = function pp(xs) {
  let param0, param1, first1, first0, x, y, xs1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      x = first0;
      y = first1;
      xs1 = param1;
      tmp = NofibPrelude.nofibStringToList("\nKnights tour with ");
      tmp1 = NofibPrelude.stringOfInt(x);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      tmp3 = NofibPrelude.nofibStringToList(" backtracking moves\n");
      tmp4 = showChessSet_inst_0_1_tsni(y);
      tmp5 = pp(xs1);
      tmp6 = append_inst_0_70_tsni(tmp4, tmp5);
      tmp7 = NofibPrelude.append(tmp3, tmp6);
      tmp8 = NofibPrelude.append(tmp2, tmp7);
      return NofibPrelude.append(tmp, tmp8)
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda20 = (undefined, function (x) {
  return strToInt(0, x)
});
lambda18 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$9 = function lambda$(q, growFn, finFn) {
  let tmp, tmp1, tmp2;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = knights1.depthSearch(tmp1, growFn, finFn);
  return NofibPrelude.LzCons(tmp, tmp2)
};
lambda19 = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$9(q, growFn, finFn)
  }
});
lambda15 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$8 = function lambda$(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = [
    h1,
    h2
  ];
  tmp = lscomp2$2(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
lambda16 = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$8(sze, h1, t1, h2, t2)
  }
});
lscomp2$2 = function lscomp2$(sze, h1, t1, ls) {
  let param0, param1, h2, t2, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return lscomp1$2(sze, t1)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h2 = param0;
    t2 = param1;
    tmp = runtime.safeCall(lambda16(sze, h1, t1, h2, t2));
    return NofibPrelude.lazy(tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp22 = function lscomp2(sze, h1, t1) {
  return (ls) => {
    return lscomp2$2(sze, h1, t1, ls)
  }
};
lscomp1$2 = function lscomp1$(sze, ls) {
  let param0, param1, h1, t1, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda15)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h1 = param0;
    t1 = param1;
    tmp = enumFromTo_inst_27_28_tsni(1, sze);
    return lscomp2$_inst_27_tsni(sze, h1, t1, tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp12 = function lscomp1(sze) {
  return (ls) => {
    return lscomp1$_inst_29_30_tsni(sze, ls)
  }
};
lambda17 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda11 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda13 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$7 = function lambda$(h) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda13);
  return NofibPrelude.LzCons(h, tmp)
};
lambda12 = (undefined, function (h) {
  return () => {
    return lambda$7(h)
  }
});
lambda14 = (undefined, function () {
  return NofibPrelude.LzNil
});
lscomp4 = function lscomp(ls) {
  let scrut, param0, param1, first1, first0, y, x, t, scrut1, tmp;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.Nil
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    if (globalThis.Array.isArray(param0) && param0.length === 2) {
      first0 = param0[0];
      first1 = param0[1];
      y = first0;
      x = first1;
      t = param1;
      scrut1 = y === 1;
      if (scrut1 === true) {
        tmp = lscomp4(t);
        return NofibPrelude.Cons(x, tmp)
      } else {
        return lscomp4(t)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda9 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$6 = function lambda$(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_31_32_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = [
    tmp2,
    x
  ];
  tmp3 = lscomp_inst_31_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
lambda10 = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_33_tsni(x, t)
  }
});
lscomp3 = function lscomp(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda9)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda_inst_34_tsni(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$5 = function lambda$(board, b) {
  return knights1.moveKnight(board, b)
};
lambda8 = (undefined, function (board) {
  return (b) => {
    return lambda$5(board, b)
  }
});
lscomp$ = function lscomp$(board, ls) {
  let param0, param1, x, t, scrut, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    scrut = knights1.canMove(board, x);
    if (scrut === true) {
      tmp = lscomp$(board, t);
      return NofibPrelude.Cons(x, tmp)
    } else {
      return lscomp$(board, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp = function lscomp(board) {
  return (ls) => {
    return lscomp$(board, ls)
  }
};
logTen = function logTen(x) {
  let scrut, tmp, tmp1;
  scrut = x === 0;
  if (scrut === true) {
    return 0
  } else {
    tmp = NofibPrelude.intDiv(x, 10);
    tmp1 = logTen(tmp);
    return 1 + tmp1
  }
};
find = function find(x, xs) {
  let param0, param1, y, xs1, scrut, tmp;
  if (xs instanceof NofibPrelude.Nil.class) {
    throw globalThis.Error("Tile not used");
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    y = param0;
    xs1 = param1;
    scrut = NofibPrelude.eqTup2(x, y);
    if (scrut === true) {
      tmp = NofibPrelude.listLen(xs1);
      return 1 + tmp
    } else {
      return find(x, xs1)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda$4 = function lambda$(ts_) {
  return knights1.myLast(ts_)
};
lambda7 = (undefined, function (ts_) {
  return () => {
    return lambda$4(ts_)
  }
});
lambda$3 = function lambda$(t) {
  return t
};
lambda6 = (undefined, function (t) {
  return () => {
    return lambda$3(t)
  }
});
lambda = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda1 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$2 = function lambda$(x, h, t) {
  let tmp;
  tmp = lscomp1$1(x, t);
  return NofibPrelude.LzCons(h, tmp)
};
lambda2 = (undefined, function (x, h, t) {
  return () => {
    return lambda$2(x, h, t)
  }
});
lscomp1$1 = function lscomp1$(x, ls) {
  let scrut, param0, param1, h, t, scrut1, lambda$this;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.lazy(lambda1)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    scrut1 = knights1.intChessSetComp(h, x);
    if (scrut1 === true) {
      lambda$this = runtime.safeCall(lambda2(x, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      return lscomp1$1(x, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp11 = function lscomp1(x) {
  return (ls) => {
    return lscomp1$1(x, ls)
  }
};
lambda3 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$1 = function lambda$(x, h, t) {
  let tmp;
  tmp = lscomp2$1(x, t);
  return NofibPrelude.LzCons(h, tmp)
};
lambda4 = (undefined, function (x, h, t) {
  return () => {
    return lambda$1(x, h, t)
  }
});
lscomp2$1 = function lscomp2$(x, ls) {
  let scrut, param0, param1, h, t, scrut1, tmp, lambda$this;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.lazy(lambda3)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = knights1.intChessSetComp(h, x);
    scrut1 = Predef.not(tmp);
    if (scrut1 === true) {
      lambda$this = runtime.safeCall(lambda4(x, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      return lscomp2$1(x, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp21 = function lscomp2(x) {
  return (ls) => {
    return lscomp2$1(x, ls)
  }
};
lambda$ = function lambda$(x, xs) {
  let tmp, tmp1;
  tmp = lscomp2$1(x, xs);
  tmp1 = knights1.quickSortIntChessSet(tmp);
  return NofibPrelude.LzCons(x, tmp1)
};
lambda5 = (undefined, function (x, xs) {
  return () => {
    return lambda$(x, xs)
  }
});
lscomp1$ = function lscomp1$(x, ls) {
  let param0, param1, h, t, scrut, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = knights1.intintComp(h, x);
    if (scrut === true) {
      tmp = lscomp1$(x, t);
      return NofibPrelude.Cons(h, tmp)
    } else {
      return lscomp1$(x, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp1 = function lscomp1(x) {
  return (ls) => {
    return lscomp1$(x, ls)
  }
};
lscomp2$ = function lscomp2$(x, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = knights1.intintComp(h, x);
    scrut = Predef.not(tmp);
    if (scrut === true) {
      tmp1 = lscomp2$(x, t);
      return NofibPrelude.Cons(h, tmp1)
    } else {
      return lscomp2$(x, t)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lscomp2 = function lscomp2(x) {
  return (ls) => {
    return lscomp2$(x, ls)
  }
};
go = function go(h, t) {
  let param0, param1, head, t1;
  if (t instanceof NofibPrelude.Nil.class) {
    return h
  } else if (t instanceof NofibPrelude.Cons.class) {
    param0 = t.head;
    param1 = t.tail;
    head = param0;
    t1 = param1;
    return go(head, t1)
  } else {
    throw new globalThis.Error("match error");
  }
};
(class knights {
  static {
    knights1 = knights;
    this.createQueue = NofibPrelude.Nil;
    this.Board = function Board(a1, b1, c1, d1) {
      return new Board.class(a1, b1, c1, d1);
    };
    this.Board.class = class Board {
      constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
      }
      toString() { return "Board(" + runtime.render(this.a) + ", " + runtime.render(this.b) + ", " + runtime.render(this.c) + ", " + runtime.render(this.d) + ")"; }
    };
    this.Direction = class Direction {
      constructor() {}
      toString() { return "Direction"; }
    };
    const UL$class = class UL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UL"; }
    };
    this.UL = new UL$class;
    this.UL.class = UL$class;
    const UR$class = class UR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "UR"; }
    };
    this.UR = new UR$class;
    this.UR.class = UR$class;
    const DL$class = class DL extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DL"; }
    };
    this.DL = new DL$class;
    this.DL.class = DL$class;
    const DR$class = class DR extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "DR"; }
    };
    this.DR = new DR$class;
    this.DR.class = DR$class;
    const LU$class = class LU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LU"; }
    };
    this.LU = new LU$class;
    this.LU.class = LU$class;
    const LD$class = class LD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "LD"; }
    };
    this.LD = new LD$class;
    this.LD.class = LD$class;
    const RU$class = class RU extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RU"; }
    };
    this.RU = new RU$class;
    this.RU.class = RU$class;
    const RD$class = class RD extends knights.Direction {
      constructor() {
        super();
      }
      toString() { return "RD"; }
    };
    this.RD = new RD$class;
    this.RD.class = RD$class;
  }
  static myIsDigit(c) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    tmp2 = runtime.safeCall(c.codePointAt(0));
    tmp3 = tmp2 <= 57;
    return tmp1 && tmp3
  } 
  static intintComp(a_b, c_d) {
    let first1, first0, a, b, first11, first01, c1, d, tmp, tmp1, tmp2, tmp3;
    if (globalThis.Array.isArray(a_b) && a_b.length === 2) {
      first0 = a_b[0];
      first1 = a_b[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d) && c_d.length === 2) {
        first01 = c_d[0];
        first11 = c_d[1];
        c1 = first01;
        d = first11;
        tmp = a < c1;
        tmp1 = a === c1;
        tmp2 = b < d;
        tmp3 = tmp1 && tmp2;
        return tmp || tmp3
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static intChessSetComp(a_b1, c_d1) {
    let first1, first0, a, b, first11, first01, c1, d;
    if (globalThis.Array.isArray(a_b1) && a_b1.length === 2) {
      first0 = a_b1[0];
      first1 = a_b1[1];
      a = first0;
      b = first1;
      if (globalThis.Array.isArray(c_d1) && c_d1.length === 2) {
        first01 = c_d1[0];
        first11 = c_d1[1];
        c1 = first01;
        d = first11;
        return a < c1
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myInit(a_t) {
    let param0, param1, a, t, a1, tmp;
    if (a_t instanceof NofibPrelude.Cons.class) {
      param0 = a_t.head;
      param1 = a_t.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param0;
        t = param1;
        tmp = knights.myInit(t);
        return NofibPrelude.Cons(a, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static myLast(a_t1) {
    let param0, param1, a, t;
    if (a_t1 instanceof NofibPrelude.Cons.class) {
      param0 = a_t1.head;
      param1 = a_t1.tail;
      a = param0;
      t = param1;
      return go(a, t)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntInt(xs) {
    let param0, param1, x, xs1, tmp, tmp1, tmp2, tmp3, tmp4;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      tmp = lscomp1$(x, xs1);
      tmp1 = knights.quickSortIntInt(tmp);
      tmp2 = lscomp2$(x, xs1);
      tmp3 = knights.quickSortIntInt(tmp2);
      tmp4 = NofibPrelude.Cons(x, tmp3);
      return NofibPrelude.append(tmp1, tmp4)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static quickSortIntChessSet(xs1) {
    let scrut, param0, param1, x, xs2, tmp, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.force(xs1);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.lazy(lambda)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs2 = param1;
      tmp = lscomp1$1(x, xs2);
      tmp1 = knights.quickSortIntChessSet(tmp);
      tmp2 = runtime.safeCall(lambda5(x, xs2));
      tmp3 = NofibPrelude.lazy(tmp2);
      return NofibPrelude.append_lz_lz(tmp1, tmp3)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static sizeQueue(xs2) {
    return NofibPrelude.listLen(xs2)
  } 
  static emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  } 
  static removeBack(xs3) {
    let param0, param1, x1, xs4, x2, tmp;
    if (xs3 instanceof NofibPrelude.Cons.class) {
      param0 = xs3.head;
      param1 = xs3.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        x1 = param0;
        xs4 = param1;
        tmp = knights.removeBack(xs4);
        return NofibPrelude.Cons(x1, tmp)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static removeFront(xs4) {
    let param0, param1, h, t;
    if (xs4 instanceof NofibPrelude.Cons.class) {
      param0 = xs4.head;
      param1 = xs4.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireBack(xs5) {
    let param0, param1, x1, xs6, x2;
    if (xs5 instanceof NofibPrelude.Cons.class) {
      param0 = xs5.head;
      param1 = xs5.tail;
      x2 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x2
      } else {
        x1 = param0;
        xs6 = param1;
        return knights.inquireBack(xs6)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront(h_t) {
    return NofibPrelude.head(h_t)
  } 
  static addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  } 
  static addAllFront(list1, q1) {
    return NofibPrelude.append(list1, q1)
  } 
  static addBack(x1, q2) {
    let tmp;
    tmp = NofibPrelude.Cons(x1, NofibPrelude.Nil);
    return NofibPrelude.append(q2, tmp)
  } 
  static addFront(x2, q3) {
    return NofibPrelude.Cons(x2, q3)
  } 
  static createBoard(x3, t) {
    let tmp, tmp1, lambda$this;
    lambda$this = runtime.safeCall(lambda6(t));
    tmp = NofibPrelude.lazy(lambda$this);
    tmp1 = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return runtime.safeCall(knights.Board(x3, 1, tmp, tmp1))
  } 
  static sizeBoard(b) {
    let param0, param1, param2, param3, a;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      a = param0;
      return a
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static noPieces(b1) {
    let param0, param1, param2, param3, n;
    if (b1 instanceof knights.Board.class) {
      param0 = b1.a;
      param1 = b1.b;
      param2 = b1.c;
      param3 = b1.d;
      n = param1;
      return n
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addPiece(t1, b2) {
    let param0, param1, param2, param3, s, n, f, ts, tmp, tmp1;
    if (b2 instanceof knights.Board.class) {
      param0 = b2.a;
      param1 = b2.b;
      param2 = b2.c;
      param3 = b2.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(t1, ts);
      return runtime.safeCall(knights.Board(s, tmp, f, tmp1))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static deleteFirst(b3) {
    let param0, param1, param2, param3, s, n, f, ts, ts_, tmp, tmp1, tmp2, lambda$this;
    if (b3 instanceof knights.Board.class) {
      param0 = b3.a;
      param1 = b3.b;
      param2 = b3.c;
      param3 = b3.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = knights.myInit(ts);
      ts_ = tmp;
      tmp1 = n - 1;
      lambda$this = runtime.safeCall(lambda7(ts_));
      tmp2 = NofibPrelude.lazy(lambda$this);
      return runtime.safeCall(knights.Board(s, tmp1, tmp2, ts_))
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static positionPiece(x4, b4) {
    let param0, param1, param2, param3, n, ts, tmp;
    if (b4 instanceof knights.Board.class) {
      param0 = b4.a;
      param1 = b4.b;
      param2 = b4.c;
      param3 = b4.d;
      n = param1;
      ts = param3;
      tmp = n - x4;
      return NofibPrelude.atIndex(tmp, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static lastPiece(b5) {
    let param0, param1, param2, param3, param01, param11, t2, ts;
    if (b5 instanceof knights.Board.class) {
      param0 = b5.a;
      param1 = b5.b;
      param2 = b5.c;
      param3 = b5.d;
      if (param3 instanceof NofibPrelude.Cons.class) {
        param01 = param3.head;
        param11 = param3.tail;
        t2 = param01;
        ts = param11;
        return t2
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static firstPiece(b6) {
    let param0, param1, param2, param3, f;
    if (b6 instanceof knights.Board.class) {
      param0 = b6.a;
      param1 = b6.b;
      param2 = b6.c;
      param3 = b6.d;
      f = param2;
      return NofibPrelude.force(f)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static pieceAtTile(x5, b7) {
    let param0, param1, param2, param3, ts;
    if (b7 instanceof knights.Board.class) {
      param0 = b7.a;
      param1 = b7.b;
      param2 = b7.c;
      param3 = b7.d;
      ts = param3;
      return find(x5, ts)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static tup2InList(y, xs6) {
    let param0, param1, x6, xs7, scrut;
    if (xs6 instanceof NofibPrelude.Nil.class) {
      return false
    } else if (xs6 instanceof NofibPrelude.Cons.class) {
      param0 = xs6.head;
      param1 = xs6.tail;
      x6 = param0;
      xs7 = param1;
      scrut = NofibPrelude.eqTup2(y, x6);
      if (scrut === true) {
        return true
      } else {
        return knights.tup2InList(y, xs7)
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isSquareFree(x6, b8) {
    let param0, param1, param2, param3, ts, tmp;
    if (b8 instanceof knights.Board.class) {
      param0 = b8.a;
      param1 = b8.b;
      param2 = b8.c;
      param3 = b8.d;
      ts = param3;
      tmp = knights.tup2InList(x6, ts);
      return Predef.not(tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static assignMoveNo(t2, size, z) {
    let param0, param1, first1, first0, x7, y1, t3, tmp, tmp1, tmp2, arr, tmp3, tmp4;
    if (t2 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t2 instanceof NofibPrelude.Cons.class) {
      param0 = t2.head;
      param1 = t2.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        x7 = first0;
        y1 = first1;
        t3 = param1;
        tmp = y1 - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + x7;
        arr = [
          tmp2,
          z
        ];
        tmp3 = z - 1;
        tmp4 = knights.assignMoveNo(t3, size, tmp3);
        return NofibPrelude.Cons(arr, tmp4)
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static spaces(s, y1) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = logTen(s);
    tmp1 = logTen(y1);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  } 
  static printBoard(s1, n, xs7) {
    let param0, param1, first1, first0, i, j, xs8, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, scrut6, scrut7, scrut8, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, arr, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, arr1, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, arr2, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, arr3, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, arr4, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, arr5, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, arr6, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, arr7, tmp80, tmp81;
    if (xs7 instanceof NofibPrelude.Nil.class) {
      tmp = s1 * s1;
      scrut8 = n > tmp;
      if (scrut8 === true) {
        return NofibPrelude.Nil
      } else {
        tmp1 = NofibPrelude.intMod(n, s1);
        scrut7 = tmp1 != 0;
        if (scrut7 === true) {
          tmp2 = s1 * s1;
          tmp3 = spaces_inst_35_3_tsni(tmp2, 1);
          tmp4 = n + 1;
          tmp5 = knights.printBoard(s1, tmp4, NofibPrelude.Nil);
          tmp6 = append_inst_35_22_tsni(tmp3, tmp5);
          return NofibPrelude.Cons("*", tmp6)
        } else {
          tmp7 = NofibPrelude.intMod(n, s1);
          scrut6 = tmp7 === 0;
          if (scrut6 === true) {
            tmp8 = NofibPrelude.nofibStringToList("*\n");
            tmp9 = n + 1;
            tmp10 = knights.printBoard(s1, tmp9, NofibPrelude.Nil);
            return NofibPrelude.append(tmp8, tmp10)
          } else {
            throw globalThis.Error("printBoard empty list error");
          }
        }
      }
    } else if (xs7 instanceof NofibPrelude.Cons.class) {
      param0 = xs7.head;
      param1 = xs7.tail;
      if (globalThis.Array.isArray(param0) && param0.length === 2) {
        first0 = param0[0];
        first1 = param0[1];
        i = first0;
        j = first1;
        xs8 = param1;
        scrut4 = i === n;
        if (scrut4 === true) {
          tmp11 = NofibPrelude.intMod(n, s1);
          scrut5 = tmp11 === 0;
          if (scrut5 === true) {
            tmp12 = NofibPrelude.stringOfInt(j);
            tmp13 = NofibPrelude.nofibStringToList(tmp12);
            tmp14 = NofibPrelude.nofibStringToList("\n");
            tmp15 = n + 1;
            tmp16 = knights.printBoard(s1, tmp15, xs8);
            tmp17 = NofibPrelude.append(tmp14, tmp16);
            return NofibPrelude.append(tmp13, tmp17)
          } else {
            scrut2 = i === n;
            if (scrut2 === true) {
              tmp18 = NofibPrelude.intMod(n, s1);
              scrut3 = tmp18 != 0;
              if (scrut3 === true) {
                tmp19 = NofibPrelude.stringOfInt(j);
                tmp20 = NofibPrelude.nofibStringToList(tmp19);
                tmp21 = s1 * s1;
                tmp22 = spaces_inst_35_5_tsni(tmp21, j);
                tmp23 = n + 1;
                tmp24 = knights.printBoard(s1, tmp23, xs8);
                tmp25 = append_inst_35_20_tsni(tmp22, tmp24);
                return NofibPrelude.append(tmp20, tmp25)
              } else {
                tmp26 = NofibPrelude.intMod(n, s1);
                scrut1 = tmp26 != 0;
                if (scrut1 === true) {
                  tmp27 = s1 * s1;
                  tmp28 = spaces_inst_35_6_tsni(tmp27, 1);
                  tmp29 = n + 1;
                  arr = [
                    i,
                    j
                  ];
                  tmp30 = NofibPrelude.Cons(arr, xs8);
                  tmp31 = knights.printBoard(s1, tmp29, tmp30);
                  tmp32 = append_inst_35_23_tsni(tmp28, tmp31);
                  return NofibPrelude.Cons("*", tmp32)
                } else {
                  tmp33 = NofibPrelude.intMod(n, s1);
                  scrut = tmp33 === 0;
                  if (scrut === true) {
                    tmp34 = NofibPrelude.nofibStringToList("*\n");
                    tmp35 = n + 1;
                    arr1 = [
                      i,
                      j
                    ];
                    tmp36 = NofibPrelude.Cons(arr1, xs8);
                    tmp37 = knights.printBoard(s1, tmp35, tmp36);
                    return NofibPrelude.append(tmp34, tmp37)
                  } else {
                    throw globalThis.Error("printBoard non-empty list error");
                  }
                }
              }
            } else {
              tmp38 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp38 != 0;
              if (scrut1 === true) {
                tmp39 = s1 * s1;
                tmp40 = spaces_inst_35_7_tsni(tmp39, 1);
                tmp41 = n + 1;
                arr2 = [
                  i,
                  j
                ];
                tmp42 = NofibPrelude.Cons(arr2, xs8);
                tmp43 = knights.printBoard(s1, tmp41, tmp42);
                tmp44 = append_inst_35_24_tsni(tmp40, tmp43);
                return NofibPrelude.Cons("*", tmp44)
              } else {
                tmp45 = NofibPrelude.intMod(n, s1);
                scrut = tmp45 === 0;
                if (scrut === true) {
                  tmp46 = NofibPrelude.nofibStringToList("*\n");
                  tmp47 = n + 1;
                  arr3 = [
                    i,
                    j
                  ];
                  tmp48 = NofibPrelude.Cons(arr3, xs8);
                  tmp49 = knights.printBoard(s1, tmp47, tmp48);
                  return NofibPrelude.append(tmp46, tmp49)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          }
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp50 = NofibPrelude.intMod(n, s1);
            scrut3 = tmp50 != 0;
            if (scrut3 === true) {
              tmp51 = NofibPrelude.stringOfInt(j);
              tmp52 = NofibPrelude.nofibStringToList(tmp51);
              tmp53 = s1 * s1;
              tmp54 = spaces_inst_35_8_tsni(tmp53, j);
              tmp55 = n + 1;
              tmp56 = knights.printBoard(s1, tmp55, xs8);
              tmp57 = append_inst_35_12_tsni(tmp54, tmp56);
              return NofibPrelude.append(tmp52, tmp57)
            } else {
              tmp58 = NofibPrelude.intMod(n, s1);
              scrut1 = tmp58 != 0;
              if (scrut1 === true) {
                tmp59 = s1 * s1;
                tmp60 = spaces_inst_35_9_tsni(tmp59, 1);
                tmp61 = n + 1;
                arr4 = [
                  i,
                  j
                ];
                tmp62 = NofibPrelude.Cons(arr4, xs8);
                tmp63 = knights.printBoard(s1, tmp61, tmp62);
                tmp64 = append_inst_35_26_tsni(tmp60, tmp63);
                return NofibPrelude.Cons("*", tmp64)
              } else {
                tmp65 = NofibPrelude.intMod(n, s1);
                scrut = tmp65 === 0;
                if (scrut === true) {
                  tmp66 = NofibPrelude.nofibStringToList("*\n");
                  tmp67 = n + 1;
                  arr5 = [
                    i,
                    j
                  ];
                  tmp68 = NofibPrelude.Cons(arr5, xs8);
                  tmp69 = knights.printBoard(s1, tmp67, tmp68);
                  return NofibPrelude.append(tmp66, tmp69)
                } else {
                  throw globalThis.Error("printBoard non-empty list error");
                }
              }
            }
          } else {
            tmp70 = NofibPrelude.intMod(n, s1);
            scrut1 = tmp70 != 0;
            if (scrut1 === true) {
              tmp71 = s1 * s1;
              tmp72 = spaces_inst_35_10_tsni(tmp71, 1);
              tmp73 = n + 1;
              arr6 = [
                i,
                j
              ];
              tmp74 = NofibPrelude.Cons(arr6, xs8);
              tmp75 = knights.printBoard(s1, tmp73, tmp74);
              tmp76 = append_inst_35_25_tsni(tmp72, tmp75);
              return NofibPrelude.Cons("*", tmp76)
            } else {
              tmp77 = NofibPrelude.intMod(n, s1);
              scrut = tmp77 === 0;
              if (scrut === true) {
                tmp78 = NofibPrelude.nofibStringToList("*\n");
                tmp79 = n + 1;
                arr7 = [
                  i,
                  j
                ];
                tmp80 = NofibPrelude.Cons(arr7, xs8);
                tmp81 = knights.printBoard(s1, tmp79, tmp80);
                return NofibPrelude.append(tmp78, tmp81)
              } else {
                throw globalThis.Error("printBoard non-empty list error");
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
  static move(d, x_y) {
    let first1, first0, x7, y2, tmp, tmp1, arr, tmp2, tmp3, arr1, tmp4, tmp5, arr2, tmp6, tmp7, arr3, tmp8, tmp9, arr4, tmp10, tmp11, arr5, tmp12, tmp13, arr6, tmp14, tmp15, arr7;
    if (globalThis.Array.isArray(x_y) && x_y.length === 2) {
      first0 = x_y[0];
      first1 = x_y[1];
      x7 = first0;
      y2 = first1;
      if (d instanceof knights.UL.class) {
        tmp = x7 - 1;
        tmp1 = y2 - 2;
        arr = [
          tmp,
          tmp1
        ];
        return arr
      } else if (d instanceof knights.UR.class) {
        tmp2 = x7 + 1;
        tmp3 = y2 - 2;
        arr1 = [
          tmp2,
          tmp3
        ];
        return arr1
      } else if (d instanceof knights.DL.class) {
        tmp4 = x7 - 1;
        tmp5 = y2 + 2;
        arr2 = [
          tmp4,
          tmp5
        ];
        return arr2
      } else if (d instanceof knights.DR.class) {
        tmp6 = x7 + 1;
        tmp7 = y2 + 2;
        arr3 = [
          tmp6,
          tmp7
        ];
        return arr3
      } else if (d instanceof knights.LU.class) {
        tmp8 = x7 - 2;
        tmp9 = y2 - 1;
        arr4 = [
          tmp8,
          tmp9
        ];
        return arr4
      } else if (d instanceof knights.LD.class) {
        tmp10 = x7 - 2;
        tmp11 = y2 + 1;
        arr5 = [
          tmp10,
          tmp11
        ];
        return arr5
      } else if (d instanceof knights.RU.class) {
        tmp12 = x7 + 2;
        tmp13 = y2 - 1;
        arr6 = [
          tmp12,
          tmp13
        ];
        return arr6
      } else if (d instanceof knights.RD.class) {
        tmp14 = x7 + 2;
        tmp15 = y2 + 1;
        arr7 = [
          tmp14,
          tmp15
        ];
        return arr7
      } else {
        throw new globalThis.Error("match error");
      }
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static startTour(st, size1) {
    let scrut, tmp;
    tmp = NofibPrelude.intMod(size1, 2);
    scrut = tmp === 0;
    if (scrut === true) {
      return knights.createBoard(size1, st)
    } else {
      throw globalThis.Error("Tour doesnt exist for odd size board");
    }
  } 
  static moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.addPiece(tmp1, board)
  } 
  static canMoveTo(x_y1, board1) {
    let first1, first0, x7, y2, sze, res, scrut, scrut1, scrut2, scrut3, scrut4, tmp, tmp1;
    if (globalThis.Array.isArray(x_y1) && x_y1.length === 2) {
      first0 = x_y1[0];
      first1 = x_y1[1];
      x7 = first0;
      y2 = first1;
      tmp = knights.sizeBoard(board1);
      sze = tmp;
      scrut = x7 >= 1;
      if (scrut === true) {
        scrut1 = x7 <= sze;
        if (scrut1 === true) {
          scrut2 = y2 >= 1;
          if (scrut2 === true) {
            scrut3 = y2 <= sze;
            if (scrut3 === true) {
              scrut4 = knights.isSquareFree(x_y1, board1);
              if (scrut4 === true) {
                tmp1 = true;
              } else {
                tmp1 = false;
              }
            } else {
              tmp1 = false;
            }
          } else {
            tmp1 = false;
          }
        } else {
          tmp1 = false;
        }
      } else {
        tmp1 = false;
      }
      res = tmp1;
      return res
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static canMove(board2, dir1) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board2);
    tmp1 = knights.move(dir1, tmp);
    return knights.canMoveTo(tmp1, board2)
  } 
  static canJumpFirst(board3) {
    let tmp, tmp1;
    tmp = knights.firstPiece(board3);
    tmp1 = knights.deleteFirst(board3);
    return knights.canMoveTo(tmp, tmp1)
  } 
  static tourFinished(board4) {
    let sze, tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = knights.sizeBoard(board4);
    sze = tmp;
    tmp1 = knights.noPieces(board4);
    tmp2 = sze * sze;
    tmp3 = tmp1 === tmp2;
    tmp4 = knights.canJumpFirst(board4);
    return tmp3 && tmp4
  } 
  static possibleMoves(board5) {
    let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
    _deforest_Cons_head7 = knights.RD;
    _deforest_Cons_tail7 = (board6) => {
      return NofibPrelude.Nil
    };
    tmp = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = knights.RU;
    _deforest_Cons_tail6 = tmp;
    tmp1 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = knights.LD;
    _deforest_Cons_tail5 = tmp1;
    tmp2 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = knights.LU;
    _deforest_Cons_tail4 = tmp2;
    tmp3 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = knights.DR;
    _deforest_Cons_tail3 = tmp3;
    tmp4 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = knights.DL;
    _deforest_Cons_tail2 = tmp4;
    tmp5 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = knights.UR;
    _deforest_Cons_tail1 = tmp5;
    tmp6 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = knights.UL;
    _deforest_Cons_tail = tmp6;
    tmp7 = (board6) => {
      return match_ls_arm_Cons_inst_36_41_tsni(board6, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp8 = lscomp$_inst_36_41_tsni(board5, tmp7);
    res = tmp8;
    return res
  } 
  static deadEnd(board6) {
    let tmp, tmp1;
    tmp = possibleMoves_inst_37_38_tsni(board6);
    tmp1 = NofibPrelude.listLen(tmp);
    return tmp1 === 0
  } 
  static allDescend(board7) {
    let tmp, lambda$this;
    tmp = possibleMoves_inst_39_40_tsni(board7);
    lambda$this = runtime.safeCall(lambda8(board7));
    return map_inst_39_45_tsni(lambda$this, tmp)
  } 
  static descAndNo(board8) {
    let tmp;
    tmp = allDescend_inst_42_43_tsni(board8);
    return lscomp_inst_42_44_tsni(tmp)
  } 
  static singleDescend(board9) {
    let tmp;
    tmp = descAndNo_inst_46_47_tsni(board9);
    return lscomp_inst_46_74_tsni(tmp)
  } 
  static descendents(board10) {
    let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, lambda$this;
    tmp = knights.canJumpFirst(board10);
    tmp1 = knights.firstPiece(board10);
    tmp2 = knights.addPiece(tmp1, board10);
    tmp3 = deadEnd_inst_49_50_tsni(tmp2);
    scrut3 = tmp && tmp3;
    if (scrut3 === true) {
      return NofibPrelude.lazy(lambda11)
    } else {
      tmp4 = singleDescend_inst_49_51_tsni(board10);
      singles = tmp4;
      tmp5 = NofibPrelude.listLen(singles);
      scrut = tmp5;
      scrut2 = scrut === 0;
      if (scrut2 === true) {
        tmp6 = descAndNo_inst_49_52_tsni(board10);
        tmp7 = knights.quickSortIntChessSet(tmp6);
        tmp8 = NofibPrelude.map_lz(NofibPrelude.snd, tmp7);
      } else {
        scrut1 = scrut === 1;
        if (scrut1 === true) {
          if (singles instanceof NofibPrelude.Cons.class) {
            param0 = singles.head;
            param1 = singles.tail;
            h = param0;
            if (param1 instanceof NofibPrelude.Nil.class) {
              lambda$this = runtime.safeCall(lambda12(h));
              tmp9 = NofibPrelude.lazy(lambda$this);
            } else {
              throw globalThis.Error("unreachable");
            }
          } else {
            throw globalThis.Error("unreachable");
          }
          tmp8 = tmp9;
        } else {
          tmp8 = NofibPrelude.lazy(lambda14);
        }
      }
      res = tmp8;
      return res
    }
  } 
  static showChessSet(b9) {
    let param0, param1, param2, param3, sze, n1, f, ts, sortedTrail, tmp, tmp1;
    if (b9 instanceof knights.Board.class) {
      param0 = b9.a;
      param1 = b9.b;
      param2 = b9.c;
      param3 = b9.d;
      sze = param0;
      n1 = param1;
      f = param2;
      ts = param3;
      tmp = knights.assignMoveNo(ts, sze, n1);
      tmp1 = knights.quickSortIntInt(tmp);
      sortedTrail = tmp1;
      return printBoard_inst_53_2_tsni(sze, 1, sortedTrail)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static root(sze) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = enumFromTo_inst_54_56_tsni(1, sze);
    tmp4 = lscomp1$_inst_54_55_tsni(sze, tmp3);
    tmp5 = sze * sze;
    tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
    tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
    tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
    tmp9 = NofibPrelude.lazy(lambda17);
    return NofibPrelude.append_lz_lz(tmp8, tmp9)
  } 
  static grow(x_y2) {
    let first1, first0, x7, y2, tmp, tmp1, tmp2;
    if (globalThis.Array.isArray(x_y2) && x_y2.length === 2) {
      first0 = x_y2[0];
      first1 = x_y2[1];
      x7 = first0;
      y2 = first1;
      tmp = x7 + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = descendents_inst_57_58_tsni(y2);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static isFinished(x_y3) {
    let first1, first0, x7, y2;
    if (globalThis.Array.isArray(x_y3) && x_y3.length === 2) {
      first0 = x_y3[0];
      first1 = x_y3[1];
      x7 = first0;
      y2 = first1;
      return knights.tourFinished(y2)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static emptyQueue_lz(x7) {
    let scrut;
    scrut = NofibPrelude.force(x7);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else {
      return false
    }
  } 
  static removeFront_lz(xs8) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(xs8);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return t3
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static inquireFront_lz(h_t1) {
    let scrut, param0, param1, h, t3;
    scrut = NofibPrelude.force(h_t1);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t3 = param1;
      return h
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static addAllFront_lz(list2, q4) {
    return NofibPrelude.append_lz_lz(list2, q4)
  } 
  static depthSearch(q5, growFn, finFn) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut1 = knights.emptyQueue_lz(q5);
    if (scrut1 === true) {
      return NofibPrelude.lazy(lambda18)
    } else {
      tmp = knights.inquireFront_lz(q5);
      scrut = runtime.safeCall(finFn(tmp));
      if (scrut === true) {
        tmp1 = runtime.safeCall(lambda19(q5, growFn, finFn));
        return NofibPrelude.lazy(tmp1)
      } else {
        tmp2 = knights.inquireFront_lz(q5);
        tmp3 = runtime.safeCall(growFn(tmp2));
        tmp4 = knights.removeFront_lz(q5);
        tmp5 = knights.addAllFront_lz(tmp3, tmp4);
        return knights.depthSearch(tmp5, growFn, finFn)
      }
    }
  } 
  static printTour(ss) {
    let scrut, param0, param1, size2, param01, param11, number, tmp, tmp1, tmp2;
    scrut = NofibPrelude.map(lambda20, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      size2 = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        number = param01;
        if (param11 instanceof NofibPrelude.Nil.class) {
          tmp = root_inst_59_60_tsni(size2);
          tmp1 = depthSearch_inst_59_62_tsni(tmp, grow_inst_59_61_tsni, knights.isFinished);
          tmp2 = take_lz_inst_59_65_tsni(number, tmp1);
          return pp_inst_59_64_tsni(tmp2)
        } else {
          throw globalThis.Error("printTour error");
        }
      } else {
        throw globalThis.Error("printTour error");
      }
    } else {
      throw globalThis.Error("printTour error");
    }
  } 
  static testKnights_nofib(ss1) {
    let usageString, scrut;
    usageString = "\nUsage: knights <board size> <no solutions> \n";
    scrut = argsOk(ss1);
    if (scrut === true) {
      return printTour_inst_66_67_tsni(ss1)
    } else {
      throw globalThis.Error(usageString);
    }
  } 
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.nofibStringToList("8");
    tmp1 = NofibPrelude.nofibStringToList("1");
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    tmp4 = testKnights_nofib_inst_68_69_tsni(tmp3);
    return nofibListToString_inst_68_75_tsni(tmp4)
  }
  static toString() { return "knights"; }
});
let knights = knights1; export default knights;
