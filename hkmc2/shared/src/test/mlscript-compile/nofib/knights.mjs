const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let go, lscomp2, lscomp1, lscomp21, lscomp11, find, logTen, lscomp, lscomp3, lscomp4, lscomp22, lscomp12, pp, strToInt, argsOk, all_digits, knights1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, lambda25, lambda26, lambda27, lambda28, lambda29, lambda30, lambda$, lambda$1, lambda$2, lscomp2$, lscomp1$, lambda$3, lscomp2$1, lambda$4, lscomp1$1, lambda$5, lambda$6, lambda$7, lambda$8, lscomp$, lambda$9, lambda$10, lambda$11, lambda$12, lscomp1$2, lscomp2$2, lambda$13, lambda$14, lambda$15, lambda$16, lambda$17, showChessSet_inst_0_1_tsni, printBoard_inst_0_1_2_tsni, spaces_inst_0_1_2_3_tsni, replicate_inst_0_1_2_3_4_tsni, spaces_inst_0_1_2_5_tsni, replicate_inst_0_1_2_5_4_tsni, spaces_inst_0_1_2_6_tsni, replicate_inst_0_1_2_6_4_tsni, spaces_inst_0_1_2_7_tsni, replicate_inst_0_1_2_7_4_tsni, spaces_inst_0_1_2_8_tsni, replicate_inst_0_1_2_8_4_tsni, spaces_inst_0_1_2_9_tsni, replicate_inst_0_1_2_9_4_tsni, spaces_inst_0_1_2_10_tsni, replicate_inst_0_1_2_10_4_tsni, append_inst_0_1_2_11_tsni, append_inst_0_1_2_12_tsni, append_inst_0_1_2_13_tsni, append_inst_0_1_2_14_tsni, append_inst_0_1_2_15_tsni, append_inst_0_1_2_16_tsni, append_inst_0_1_2_17_tsni, append_inst_0_1_2_18_tsni, append_inst_0_1_2_19_tsni, append_inst_0_1_2_20_tsni, append_inst_0_1_2_21_tsni, append_inst_0_1_2_22_tsni, append_inst_0_1_2_23_tsni, append_inst_0_1_2_24_tsni, append_inst_0_1_2_25_tsni, append_inst_0_1_2_26_tsni, lscomp2$_inst_27_tsni, lambda_inst_27_tsni, lambda$_inst_27_tsni, enumFromTo_inst_27_28_tsni, lscomp1$_inst_29_30_tsni, lscomp2$_inst_29_30_tsni, lambda_inst_29_30_tsni, lambda$_inst_29_30_tsni, enumFromTo_inst_29_30_28_tsni, deadEnd_inst_31_32_tsni, possibleMoves_inst_31_32_33_tsni, lambda$_inst_34_35_tsni, deadEnd_inst_34_35_32_tsni, possibleMoves_inst_34_35_32_33_tsni, lscomp_inst_36_tsni, lambda_inst_36_tsni, possibleMoves_inst_36_37_tsni, lscomp_inst_38_tsni, lambda$_inst_38_tsni, possibleMoves_inst_38_37_tsni, lambda_inst_39_tsni, lambda$_inst_39_tsni, possibleMoves_inst_39_37_tsni, spaces_inst_40_3_tsni, replicate_inst_40_3_4_tsni, spaces_inst_40_5_tsni, replicate_inst_40_5_4_tsni, spaces_inst_40_6_tsni, replicate_inst_40_6_4_tsni, spaces_inst_40_7_tsni, replicate_inst_40_7_4_tsni, spaces_inst_40_8_tsni, replicate_inst_40_8_4_tsni, spaces_inst_40_9_tsni, replicate_inst_40_9_4_tsni, spaces_inst_40_10_tsni, replicate_inst_40_10_4_tsni, possibleMoves_inst_42_33_tsni, possibleMoves_inst_43_44_tsni, lscomp$_inst_43_44_45_tsni, allDescend_inst_46_47_tsni, possibleMoves_inst_46_47_44_tsni, lscomp$_inst_46_47_44_45_tsni, lscomp_inst_46_48_tsni, lambda_inst_46_48_tsni, lambda$_inst_46_48_tsni, possibleMoves_inst_46_48_37_tsni, map_inst_46_47_49_tsni, descAndNo_inst_50_51_tsni, lscomp_inst_50_51_48_tsni, lambda_inst_50_51_48_tsni, lambda$_inst_50_51_48_tsni, possibleMoves_inst_50_51_48_37_tsni, allDescend_inst_50_51_47_tsni, possibleMoves_inst_50_51_47_44_tsni, lscomp$_inst_50_51_47_44_45_tsni, map_inst_50_51_47_49_tsni, lambda_inst_50_51_48_52_tsni, lambda_inst_53_54_tsni, lambda$_inst_53_54_35_tsni, deadEnd_inst_53_54_35_32_tsni, possibleMoves_inst_53_54_35_32_33_tsni, singleDescend_inst_53_55_tsni, descAndNo_inst_53_55_51_tsni, allDescend_inst_53_55_51_47_tsni, possibleMoves_inst_53_55_51_47_44_tsni, lscomp$_inst_53_55_51_47_44_45_tsni, lscomp_inst_53_55_51_48_tsni, lambda_inst_53_55_51_48_tsni, lambda$_inst_53_55_51_48_tsni, possibleMoves_inst_53_55_51_48_37_tsni, map_inst_53_55_51_47_49_tsni, lambda_inst_53_55_51_48_52_tsni, descAndNo_inst_53_56_tsni, lscomp_inst_53_56_48_tsni, lambda_inst_53_56_48_tsni, lambda$_inst_53_56_48_tsni, possibleMoves_inst_53_56_48_37_tsni, allDescend_inst_53_56_47_tsni, possibleMoves_inst_53_56_47_44_tsni, lscomp$_inst_53_56_47_44_45_tsni, map_inst_53_56_47_49_tsni, printBoard_inst_57_2_tsni, spaces_inst_57_2_10_tsni, replicate_inst_57_2_10_4_tsni, spaces_inst_57_2_9_tsni, replicate_inst_57_2_9_4_tsni, spaces_inst_57_2_8_tsni, replicate_inst_57_2_8_4_tsni, spaces_inst_57_2_7_tsni, replicate_inst_57_2_7_4_tsni, spaces_inst_57_2_6_tsni, replicate_inst_57_2_6_4_tsni, spaces_inst_57_2_5_tsni, replicate_inst_57_2_5_4_tsni, spaces_inst_57_2_3_tsni, replicate_inst_57_2_3_4_tsni, lscomp1$_inst_58_59_tsni, lscomp2$_inst_58_59_tsni, lambda_inst_58_59_tsni, lambda$_inst_58_59_tsni, enumFromTo_inst_58_59_28_tsni, enumFromTo_inst_58_60_tsni, descendents_inst_61_62_tsni, descAndNo_inst_61_62_56_tsni, allDescend_inst_61_62_56_47_tsni, possibleMoves_inst_61_62_56_47_44_tsni, lscomp$_inst_61_62_56_47_44_45_tsni, lscomp_inst_61_62_56_48_tsni, lambda_inst_61_62_56_48_tsni, lambda$_inst_61_62_56_48_tsni, possibleMoves_inst_61_62_56_48_37_tsni, map_inst_61_62_56_47_49_tsni, singleDescend_inst_61_62_55_tsni, descAndNo_inst_61_62_55_51_tsni, lscomp_inst_61_62_55_51_48_tsni, lambda_inst_61_62_55_51_48_tsni, lambda$_inst_61_62_55_51_48_tsni, possibleMoves_inst_61_62_55_51_48_37_tsni, allDescend_inst_61_62_55_51_47_tsni, possibleMoves_inst_61_62_55_51_47_44_tsni, lscomp$_inst_61_62_55_51_47_44_45_tsni, map_inst_61_62_55_51_47_49_tsni, lambda_inst_61_62_55_51_48_52_tsni, lambda_inst_61_62_54_tsni, lambda$_inst_61_62_54_35_tsni, deadEnd_inst_61_62_54_35_32_tsni, possibleMoves_inst_61_62_54_35_32_33_tsni, root_inst_63_64_tsni, lscomp1$_inst_63_64_59_tsni, lscomp2$_inst_63_64_59_tsni, lambda_inst_63_64_59_tsni, lambda$_inst_63_64_59_tsni, enumFromTo_inst_63_64_59_28_tsni, enumFromTo_inst_63_64_60_tsni, grow_inst_63_65_tsni, descendents_inst_63_65_62_tsni, lambda_inst_63_65_62_54_tsni, lambda$_inst_63_65_62_54_35_tsni, deadEnd_inst_63_65_62_54_35_32_tsni, possibleMoves_inst_63_65_62_54_35_32_33_tsni, singleDescend_inst_63_65_62_55_tsni, descAndNo_inst_63_65_62_55_51_tsni, allDescend_inst_63_65_62_55_51_47_tsni, possibleMoves_inst_63_65_62_55_51_47_44_tsni, lscomp$_inst_63_65_62_55_51_47_44_45_tsni, lscomp_inst_63_65_62_55_51_48_tsni, lambda_inst_63_65_62_55_51_48_tsni, lambda$_inst_63_65_62_55_51_48_tsni, possibleMoves_inst_63_65_62_55_51_48_37_tsni, map_inst_63_65_62_55_51_47_49_tsni, lambda_inst_63_65_62_55_51_48_52_tsni, descAndNo_inst_63_65_62_56_tsni, lscomp_inst_63_65_62_56_48_tsni, lambda_inst_63_65_62_56_48_tsni, lambda$_inst_63_65_62_56_48_tsni, possibleMoves_inst_63_65_62_56_48_37_tsni, allDescend_inst_63_65_62_56_47_tsni, possibleMoves_inst_63_65_62_56_47_44_tsni, lscomp$_inst_63_65_62_56_47_44_45_tsni, map_inst_63_65_62_56_47_49_tsni, depthSearch_inst_63_66_tsni, lambda_inst_63_66_tsni, lambda$_inst_63_66_tsni, lambda_inst_63_66_67_tsni, pp_inst_63_68_tsni, showChessSet_inst_63_68_1_tsni, printBoard_inst_63_68_1_2_tsni, spaces_inst_63_68_1_2_10_tsni, replicate_inst_63_68_1_2_10_4_tsni, spaces_inst_63_68_1_2_9_tsni, replicate_inst_63_68_1_2_9_4_tsni, spaces_inst_63_68_1_2_8_tsni, replicate_inst_63_68_1_2_8_4_tsni, spaces_inst_63_68_1_2_7_tsni, replicate_inst_63_68_1_2_7_4_tsni, spaces_inst_63_68_1_2_6_tsni, replicate_inst_63_68_1_2_6_4_tsni, spaces_inst_63_68_1_2_5_tsni, replicate_inst_63_68_1_2_5_4_tsni, spaces_inst_63_68_1_2_3_tsni, replicate_inst_63_68_1_2_3_4_tsni, append_inst_63_68_1_2_21_tsni, append_inst_63_68_1_2_14_tsni, append_inst_63_68_1_2_16_tsni, append_inst_63_68_1_2_11_tsni, append_inst_63_68_1_2_15_tsni, append_inst_63_68_1_2_13_tsni, append_inst_63_68_1_2_20_tsni, append_inst_63_68_1_2_12_tsni, append_inst_63_68_1_2_18_tsni, append_inst_63_68_1_2_19_tsni, append_inst_63_68_1_2_17_tsni, append_inst_63_68_1_2_23_tsni, append_inst_63_68_1_2_24_tsni, append_inst_63_68_1_2_26_tsni, append_inst_63_68_1_2_22_tsni, append_inst_63_68_1_2_25_tsni, take_lz_inst_63_69_tsni, printTour_inst_70_71_tsni, pp_inst_70_71_68_tsni, showChessSet_inst_70_71_68_1_tsni, printBoard_inst_70_71_68_1_2_tsni, spaces_inst_70_71_68_1_2_3_tsni, replicate_inst_70_71_68_1_2_3_4_tsni, spaces_inst_70_71_68_1_2_5_tsni, replicate_inst_70_71_68_1_2_5_4_tsni, spaces_inst_70_71_68_1_2_6_tsni, replicate_inst_70_71_68_1_2_6_4_tsni, spaces_inst_70_71_68_1_2_7_tsni, replicate_inst_70_71_68_1_2_7_4_tsni, spaces_inst_70_71_68_1_2_8_tsni, replicate_inst_70_71_68_1_2_8_4_tsni, spaces_inst_70_71_68_1_2_9_tsni, replicate_inst_70_71_68_1_2_9_4_tsni, spaces_inst_70_71_68_1_2_10_tsni, replicate_inst_70_71_68_1_2_10_4_tsni, append_inst_70_71_68_1_2_11_tsni, append_inst_70_71_68_1_2_12_tsni, append_inst_70_71_68_1_2_13_tsni, append_inst_70_71_68_1_2_14_tsni, append_inst_70_71_68_1_2_15_tsni, append_inst_70_71_68_1_2_16_tsni, append_inst_70_71_68_1_2_17_tsni, append_inst_70_71_68_1_2_18_tsni, append_inst_70_71_68_1_2_19_tsni, append_inst_70_71_68_1_2_20_tsni, append_inst_70_71_68_1_2_21_tsni, append_inst_70_71_68_1_2_22_tsni, append_inst_70_71_68_1_2_23_tsni, append_inst_70_71_68_1_2_24_tsni, append_inst_70_71_68_1_2_25_tsni, append_inst_70_71_68_1_2_26_tsni, take_lz_inst_70_71_69_tsni, depthSearch_inst_70_71_66_tsni, lambda_inst_70_71_66_tsni, lambda$_inst_70_71_66_tsni, lambda_inst_70_71_66_67_tsni, grow_inst_70_71_65_tsni, descendents_inst_70_71_65_62_tsni, descAndNo_inst_70_71_65_62_56_tsni, allDescend_inst_70_71_65_62_56_47_tsni, possibleMoves_inst_70_71_65_62_56_47_44_tsni, lscomp$_inst_70_71_65_62_56_47_44_45_tsni, lscomp_inst_70_71_65_62_56_48_tsni, lambda_inst_70_71_65_62_56_48_tsni, lambda$_inst_70_71_65_62_56_48_tsni, possibleMoves_inst_70_71_65_62_56_48_37_tsni, map_inst_70_71_65_62_56_47_49_tsni, singleDescend_inst_70_71_65_62_55_tsni, descAndNo_inst_70_71_65_62_55_51_tsni, lscomp_inst_70_71_65_62_55_51_48_tsni, lambda_inst_70_71_65_62_55_51_48_tsni, lambda$_inst_70_71_65_62_55_51_48_tsni, possibleMoves_inst_70_71_65_62_55_51_48_37_tsni, allDescend_inst_70_71_65_62_55_51_47_tsni, possibleMoves_inst_70_71_65_62_55_51_47_44_tsni, lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni, map_inst_70_71_65_62_55_51_47_49_tsni, lambda_inst_70_71_65_62_55_51_48_52_tsni, lambda_inst_70_71_65_62_54_tsni, lambda$_inst_70_71_65_62_54_35_tsni, deadEnd_inst_70_71_65_62_54_35_32_tsni, possibleMoves_inst_70_71_65_62_54_35_32_33_tsni, root_inst_70_71_64_tsni, lscomp1$_inst_70_71_64_59_tsni, lscomp2$_inst_70_71_64_59_tsni, lambda_inst_70_71_64_59_tsni, lambda$_inst_70_71_64_59_tsni, enumFromTo_inst_70_71_64_59_28_tsni, enumFromTo_inst_70_71_64_60_tsni, testKnights_nofib_inst_72_73_tsni, printTour_inst_72_73_71_tsni, root_inst_72_73_71_64_tsni, lscomp1$_inst_72_73_71_64_59_tsni, lscomp2$_inst_72_73_71_64_59_tsni, lambda_inst_72_73_71_64_59_tsni, lambda$_inst_72_73_71_64_59_tsni, enumFromTo_inst_72_73_71_64_59_28_tsni, enumFromTo_inst_72_73_71_64_60_tsni, grow_inst_72_73_71_65_tsni, descendents_inst_72_73_71_65_62_tsni, lambda_inst_72_73_71_65_62_54_tsni, lambda$_inst_72_73_71_65_62_54_35_tsni, deadEnd_inst_72_73_71_65_62_54_35_32_tsni, possibleMoves_inst_72_73_71_65_62_54_35_32_33_tsni, singleDescend_inst_72_73_71_65_62_55_tsni, descAndNo_inst_72_73_71_65_62_55_51_tsni, allDescend_inst_72_73_71_65_62_55_51_47_tsni, possibleMoves_inst_72_73_71_65_62_55_51_47_44_tsni, lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni, lscomp_inst_72_73_71_65_62_55_51_48_tsni, lambda_inst_72_73_71_65_62_55_51_48_tsni, lambda$_inst_72_73_71_65_62_55_51_48_tsni, possibleMoves_inst_72_73_71_65_62_55_51_48_37_tsni, map_inst_72_73_71_65_62_55_51_47_49_tsni, lambda_inst_72_73_71_65_62_55_51_48_52_tsni, descAndNo_inst_72_73_71_65_62_56_tsni, lscomp_inst_72_73_71_65_62_56_48_tsni, lambda_inst_72_73_71_65_62_56_48_tsni, lambda$_inst_72_73_71_65_62_56_48_tsni, possibleMoves_inst_72_73_71_65_62_56_48_37_tsni, allDescend_inst_72_73_71_65_62_56_47_tsni, possibleMoves_inst_72_73_71_65_62_56_47_44_tsni, lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni, map_inst_72_73_71_65_62_56_47_49_tsni, depthSearch_inst_72_73_71_66_tsni, lambda_inst_72_73_71_66_tsni, lambda$_inst_72_73_71_66_tsni, lambda_inst_72_73_71_66_67_tsni, pp_inst_72_73_71_68_tsni, showChessSet_inst_72_73_71_68_1_tsni, printBoard_inst_72_73_71_68_1_2_tsni, spaces_inst_72_73_71_68_1_2_10_tsni, replicate_inst_72_73_71_68_1_2_10_4_tsni, spaces_inst_72_73_71_68_1_2_9_tsni, replicate_inst_72_73_71_68_1_2_9_4_tsni, spaces_inst_72_73_71_68_1_2_8_tsni, replicate_inst_72_73_71_68_1_2_8_4_tsni, spaces_inst_72_73_71_68_1_2_7_tsni, replicate_inst_72_73_71_68_1_2_7_4_tsni, spaces_inst_72_73_71_68_1_2_6_tsni, replicate_inst_72_73_71_68_1_2_6_4_tsni, spaces_inst_72_73_71_68_1_2_5_tsni, replicate_inst_72_73_71_68_1_2_5_4_tsni, spaces_inst_72_73_71_68_1_2_3_tsni, replicate_inst_72_73_71_68_1_2_3_4_tsni, append_inst_72_73_71_68_1_2_21_tsni, append_inst_72_73_71_68_1_2_14_tsni, append_inst_72_73_71_68_1_2_16_tsni, append_inst_72_73_71_68_1_2_11_tsni, append_inst_72_73_71_68_1_2_15_tsni, append_inst_72_73_71_68_1_2_13_tsni, append_inst_72_73_71_68_1_2_20_tsni, append_inst_72_73_71_68_1_2_12_tsni, append_inst_72_73_71_68_1_2_18_tsni, append_inst_72_73_71_68_1_2_19_tsni, append_inst_72_73_71_68_1_2_17_tsni, append_inst_72_73_71_68_1_2_23_tsni, append_inst_72_73_71_68_1_2_24_tsni, append_inst_72_73_71_68_1_2_26_tsni, append_inst_72_73_71_68_1_2_22_tsni, append_inst_72_73_71_68_1_2_25_tsni, take_lz_inst_72_73_71_69_tsni, append_inst_72_73_71_68_74_tsni, append_inst_72_73_71_68_75_tsni, append_inst_72_73_71_68_76_tsni, append_inst_72_73_71_68_77_tsni, append_inst_0_74_tsni, lscomp$_inst_31_32_33_45_tsni, lscomp$_inst_34_35_32_33_45_tsni, lscomp$_inst_36_37_45_tsni, lscomp$_inst_38_37_45_tsni, lscomp$_inst_39_37_45_tsni, append_inst_40_22_tsni, append_inst_40_20_tsni, append_inst_40_23_tsni, append_inst_40_24_tsni, append_inst_40_12_tsni, append_inst_40_26_tsni, append_inst_40_25_tsni, lscomp$_inst_41_45_tsni, lscomp$_inst_42_33_45_tsni, map_inst_43_49_tsni, lscomp$_inst_46_48_37_45_tsni, lscomp$_inst_50_51_48_37_45_tsni, lscomp_inst_50_78_tsni, lscomp$_inst_53_54_35_32_33_45_tsni, lscomp$_inst_53_55_51_48_37_45_tsni, lscomp_inst_53_55_78_tsni, lscomp$_inst_53_56_48_37_45_tsni, append_inst_57_2_25_tsni, append_inst_57_2_26_tsni, append_inst_57_2_12_tsni, append_inst_57_2_24_tsni, append_inst_57_2_23_tsni, append_inst_57_2_20_tsni, append_inst_57_2_22_tsni, lscomp$_inst_61_62_56_48_37_45_tsni, lscomp$_inst_61_62_55_51_48_37_45_tsni, lscomp_inst_61_62_55_78_tsni, lscomp$_inst_61_62_54_35_32_33_45_tsni, lscomp$_inst_63_65_62_54_35_32_33_45_tsni, lscomp$_inst_63_65_62_55_51_48_37_45_tsni, lscomp_inst_63_65_62_55_78_tsni, lscomp$_inst_63_65_62_56_48_37_45_tsni, append_inst_63_68_74_tsni, append_inst_70_71_68_74_tsni, lscomp$_inst_70_71_65_62_56_48_37_45_tsni, lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni, lscomp_inst_70_71_65_62_55_78_tsni, lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni, lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni, lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni, lscomp_inst_72_73_71_65_62_55_78_tsni, lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni, nofibListToString_inst_72_79_tsni, match_xs_arm_Cons_inst_0_74_tsni, match_ls_arm_Cons_inst_31_32_33_45_tsni, match_ls_arm_Cons_inst_34_35_32_33_45_tsni, match_ls_arm_Cons_inst_36_37_45_tsni, match_ls_arm_Cons_inst_38_37_45_tsni, match_ls_arm_Cons_inst_39_37_45_tsni, match_ls_arm_Cons_inst_41_45_tsni, match_ls_arm_Cons_inst_42_33_45_tsni, match_ls_arm_Cons_inst_43_44_45_tsni, match_ls_arm_Cons_inst_46_47_44_45_tsni, match_ls_arm_Cons_inst_46_48_37_45_tsni, match_ls_arm_Cons_inst_50_51_48_37_45_tsni, match_ls_arm_Cons_inst_50_51_47_44_45_tsni, match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni, match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni, match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni, match_ls_arm_Cons_inst_53_56_48_37_45_tsni, match_ls_arm_Cons_inst_53_56_47_44_45_tsni, match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni, match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni, match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni, match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni, match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni, match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni, match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni, match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni, match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni, match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni, match_xs_arm_Cons_inst_63_68_74_tsni, match_xs_arm_Nil_inst_63_68_tsni, match_xs_arm_Cons_inst_70_71_68_74_tsni, match_xs_arm_Nil_inst_70_71_68_tsni, match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni, match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni, match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni, match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni, match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni, match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni, match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni, match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni, match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni, match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni, match_xs_arm_Cons_inst_72_73_71_68_74_tsni, match_xs_arm_Nil_inst_72_73_71_68_tsni, match_ls_arm_Cons_inst_72_79_tsni;
match_xs_arm_Cons_inst_0_74_tsni = (undefined, function (ys, _deforest_Cons_head_inst_0_74_tsni, _deforest_Cons_tail_inst_0_74_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_74_tsni;
  param1 = _deforest_Cons_tail_inst_0_74_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_74_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_31_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_31_32_33_45_tsni, _deforest_Cons_tail_inst_31_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_31_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_31_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_31_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_31_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_34_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_34_35_32_33_45_tsni, _deforest_Cons_tail_inst_34_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_34_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_34_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_34_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_34_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_36_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_36_37_45_tsni, _deforest_Cons_tail_inst_36_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_36_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_36_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_36_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_36_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_38_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_38_37_45_tsni, _deforest_Cons_tail_inst_38_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_38_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_38_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_38_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_38_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_39_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_39_37_45_tsni, _deforest_Cons_tail_inst_39_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_39_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_39_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_39_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_39_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_41_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_41_45_tsni, _deforest_Cons_tail_inst_41_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_41_45_tsni;
  param1 = _deforest_Cons_tail_inst_41_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_41_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_41_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_42_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_42_33_45_tsni, _deforest_Cons_tail_inst_42_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_42_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_42_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_42_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_42_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_43_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_43_44_45_tsni, _deforest_Cons_tail_inst_43_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_43_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_43_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_43_49_tsni(f, xs);
      return NofibPrelude.Cons(tmp1, tmp2)
    }
  } else {
    return lscomp$_inst_43_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_46_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_46_47_44_45_tsni, _deforest_Cons_tail_inst_46_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_46_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_46_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_46_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_46_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_46_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_46_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_46_48_37_45_tsni, _deforest_Cons_tail_inst_46_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_46_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_46_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_46_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_46_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_50_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_50_51_48_37_45_tsni, _deforest_Cons_tail_inst_50_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_50_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_50_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_50_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_50_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_50_51_47_44_45_tsni, _deforest_Cons_tail_inst_50_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_50_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_50_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_50_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_50_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_50_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_53_54_35_32_33_45_tsni, _deforest_Cons_tail_inst_53_54_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_53_54_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_53_54_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_53_54_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_53_55_51_47_44_45_tsni, _deforest_Cons_tail_inst_53_55_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_53_55_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_53_55_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_53_55_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_53_55_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_53_55_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_53_55_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_53_55_51_48_37_45_tsni, _deforest_Cons_tail_inst_53_55_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_53_55_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_53_55_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_53_55_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_53_55_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_53_56_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_53_56_48_37_45_tsni, _deforest_Cons_tail_inst_53_56_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_53_56_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_53_56_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_53_56_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_53_56_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_53_56_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_53_56_47_44_45_tsni, _deforest_Cons_tail_inst_53_56_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_53_56_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_53_56_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_53_56_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_53_56_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_53_56_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_53_56_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_61_62_56_47_44_45_tsni, _deforest_Cons_tail_inst_61_62_56_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_61_62_56_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_61_62_56_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_61_62_56_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_61_62_56_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_61_62_56_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_61_62_56_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_61_62_56_48_37_45_tsni, _deforest_Cons_tail_inst_61_62_56_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_61_62_56_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_61_62_56_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_61_62_56_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_61_62_56_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_61_62_55_51_48_37_45_tsni, _deforest_Cons_tail_inst_61_62_55_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_61_62_55_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_61_62_55_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_61_62_55_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_61_62_55_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_61_62_55_51_47_44_45_tsni, _deforest_Cons_tail_inst_61_62_55_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_61_62_55_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_61_62_55_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_61_62_55_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_61_62_55_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_61_62_55_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_61_62_55_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_61_62_54_35_32_33_45_tsni, _deforest_Cons_tail_inst_61_62_54_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_61_62_54_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_61_62_54_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_61_62_54_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_61_62_54_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_63_65_62_54_35_32_33_45_tsni, _deforest_Cons_tail_inst_63_65_62_54_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_63_65_62_54_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_63_65_62_54_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_63_65_62_54_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_63_65_62_54_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_63_65_62_55_51_47_44_45_tsni, _deforest_Cons_tail_inst_63_65_62_55_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_63_65_62_55_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_63_65_62_55_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_63_65_62_55_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_63_65_62_55_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_63_65_62_55_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_63_65_62_55_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_63_65_62_55_51_48_37_45_tsni, _deforest_Cons_tail_inst_63_65_62_55_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_63_65_62_55_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_63_65_62_55_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_63_65_62_55_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_63_65_62_55_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_63_65_62_56_48_37_45_tsni, _deforest_Cons_tail_inst_63_65_62_56_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_63_65_62_56_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_63_65_62_56_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_63_65_62_56_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_63_65_62_56_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_63_65_62_56_47_44_45_tsni, _deforest_Cons_tail_inst_63_65_62_56_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_63_65_62_56_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_63_65_62_56_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_63_65_62_56_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_63_65_62_56_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_63_65_62_56_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_63_65_62_56_47_44_45_tsni(board, t)
  }
});
match_xs_arm_Cons_inst_63_68_74_tsni = (undefined, function (ys, _deforest_Cons_head_inst_63_68_74_tsni, _deforest_Cons_tail_inst_63_68_74_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_63_68_74_tsni;
  param1 = _deforest_Cons_tail_inst_63_68_74_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_63_68_74_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_63_68_tsni = (undefined, function () {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_70_71_68_74_tsni = (undefined, function (ys, _deforest_Cons_head_inst_70_71_68_74_tsni, _deforest_Cons_tail_inst_70_71_68_74_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_70_71_68_74_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_68_74_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_70_71_68_74_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_70_71_68_tsni = (undefined, function () {
  return NofibPrelude.Nil
});
match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_70_71_65_62_56_47_44_45_tsni, _deforest_Cons_tail_inst_70_71_65_62_56_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_70_71_65_62_56_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_65_62_56_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_70_71_65_62_56_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_70_71_65_62_56_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_70_71_65_62_56_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_70_71_65_62_56_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_70_71_65_62_56_48_37_45_tsni, _deforest_Cons_tail_inst_70_71_65_62_56_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_70_71_65_62_56_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_65_62_56_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_70_71_65_62_56_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_70_71_65_62_56_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_70_71_65_62_55_51_48_37_45_tsni, _deforest_Cons_tail_inst_70_71_65_62_55_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_70_71_65_62_55_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_65_62_55_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_70_71_65_62_55_51_47_44_45_tsni, _deforest_Cons_tail_inst_70_71_65_62_55_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_70_71_65_62_55_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_65_62_55_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_70_71_65_62_55_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_70_71_65_62_55_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_70_71_65_62_54_35_32_33_45_tsni, _deforest_Cons_tail_inst_70_71_65_62_54_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_70_71_65_62_54_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_70_71_65_62_54_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_72_73_71_65_62_54_35_32_33_45_tsni, _deforest_Cons_tail_inst_72_73_71_65_62_54_35_32_33_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_72_73_71_65_62_54_35_32_33_45_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_65_62_54_35_32_33_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_72_73_71_65_62_55_51_47_44_45_tsni, _deforest_Cons_tail_inst_72_73_71_65_62_55_51_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_72_73_71_65_62_55_51_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_65_62_55_51_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_72_73_71_65_62_55_51_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_72_73_71_65_62_55_51_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_72_73_71_65_62_55_51_48_37_45_tsni, _deforest_Cons_tail_inst_72_73_71_65_62_55_51_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_72_73_71_65_62_55_51_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_65_62_55_51_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_72_73_71_65_62_56_48_37_45_tsni, _deforest_Cons_tail_inst_72_73_71_65_62_56_48_37_45_tsni) {
  let param0, param1, x, t, scrut, tmp;
  param0 = _deforest_Cons_head_inst_72_73_71_65_62_56_48_37_45_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_65_62_56_48_37_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni(board, t);
    return NofibPrelude.Cons(x, tmp)
  } else {
    return lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni(board, t)
  }
});
match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni = (undefined, function (board, _deforest_Cons_head_inst_72_73_71_65_62_56_47_44_45_tsni, _deforest_Cons_tail_inst_72_73_71_65_62_56_47_44_45_tsni) {
  let param0, param1, x, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_72_73_71_65_62_56_47_44_45_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_65_62_56_47_44_45_tsni;
  x = param0;
  t = param1;
  scrut = knights1.canMove(board, x);
  if (scrut === true) {
    tmp = lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni(board, t);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      let param01, param11, x1, xs, tmp1, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs = param11;
      tmp1 = runtime.safeCall(f(x1));
      tmp2 = map_inst_72_73_71_65_62_56_47_49_tsni(f, xs);
      _deforest_Cons_head1 = tmp1;
      _deforest_Cons_tail1 = tmp2;
      return () => {
        let param02, param12, x2, t1, tmp3;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        x2 = param02;
        t1 = param12;
        tmp3 = runtime.safeCall(lambda_inst_72_73_71_65_62_56_48_tsni(x2, t1));
        return NofibPrelude.lazy(tmp3)
      }
    }
  } else {
    return lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni(board, t)
  }
});
match_xs_arm_Cons_inst_72_73_71_68_74_tsni = (undefined, function (ys, _deforest_Cons_head_inst_72_73_71_68_74_tsni, _deforest_Cons_tail_inst_72_73_71_68_74_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_72_73_71_68_74_tsni;
  param1 = _deforest_Cons_tail_inst_72_73_71_68_74_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_72_73_71_68_74_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return () => {
    return match_ls_arm_Cons_inst_72_79_tsni(_deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Nil_inst_72_73_71_68_tsni = (undefined, function () {
  return () => {
    return ""
  }
});
match_ls_arm_Cons_inst_72_79_tsni = (undefined, function (_deforest_Cons_head_inst_72_79_tsni, _deforest_Cons_tail_inst_72_79_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_72_79_tsni;
  param1 = _deforest_Cons_tail_inst_72_79_tsni;
  h = param0;
  t = param1;
  tmp = nofibListToString_inst_72_79_tsni(t);
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
          return match_xs_arm_Cons_inst_0_74_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
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
          throw globalThis.Error("printBoard empty list error")
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
                arr = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_0_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_0_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_0_74_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_0_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_0_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
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
              arr2 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_0_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_0_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_0_74_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_0_1_2_tsni(s, tmp47, tmp48);
                return append_inst_0_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
              arr4 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_0_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_0_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_0_74_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_0_1_2_tsni(s, tmp67, tmp68);
                return append_inst_0_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
            arr6 = globalThis.Object.freeze([
              i,
              j
            ]);
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_0_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_0_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_0_74_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_0_1_2_tsni(s, tmp79, tmp80);
              return append_inst_0_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error")
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
        return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      return match_xs_arm_Cons_inst_0_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
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
    return NofibPrelude.lazy(lambda20)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h1 = param0;
    t1 = param1;
    tmp = enumFromTo_inst_29_30_28_tsni(1, sze);
    return lscomp2$_inst_29_30_tsni(sze, h1, t1, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
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
deadEnd_inst_31_32_tsni = function deadEnd_inst_31_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_31_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_31_32_33_tsni = function possibleMoves_inst_31_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_31_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_31_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lambda$_inst_34_35_tsni = function lambda$_inst_34_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_34_35_32_tsni(tmp1)
};
deadEnd_inst_34_35_32_tsni = function deadEnd_inst_34_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_34_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_34_35_32_33_tsni = function possibleMoves_inst_34_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_34_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_34_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp_inst_36_tsni = function lscomp_inst_36_tsni(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda13)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda_inst_36_tsni(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_36_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$10(x, t)
  }
});
possibleMoves_inst_36_37_tsni = function possibleMoves_inst_36_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_36_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_36_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp_inst_38_tsni = function lscomp_inst_38_tsni(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda13)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda14(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_38_tsni = function lambda$_inst_38_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_38_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_38_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_38_37_tsni = function possibleMoves_inst_38_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_38_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_38_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lambda_inst_39_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_39_tsni(x, t)
  }
});
lambda$_inst_39_tsni = function lambda$_inst_39_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_39_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp3(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_39_37_tsni = function possibleMoves_inst_39_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_39_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_39_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
spaces_inst_40_3_tsni = function spaces_inst_40_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_3_4_tsni(tmp3, " ")
};
replicate_inst_40_3_4_tsni = function replicate_inst_40_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_22_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_5_tsni = function spaces_inst_40_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_5_4_tsni(tmp3, " ")
};
replicate_inst_40_5_4_tsni = function replicate_inst_40_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_20_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_6_tsni = function spaces_inst_40_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_6_4_tsni(tmp3, " ")
};
replicate_inst_40_6_4_tsni = function replicate_inst_40_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_23_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_7_tsni = function spaces_inst_40_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_7_4_tsni(tmp3, " ")
};
replicate_inst_40_7_4_tsni = function replicate_inst_40_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_24_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_8_tsni = function spaces_inst_40_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_8_4_tsni(tmp3, " ")
};
replicate_inst_40_8_4_tsni = function replicate_inst_40_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_12_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_9_tsni = function spaces_inst_40_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_9_4_tsni(tmp3, " ")
};
replicate_inst_40_9_4_tsni = function replicate_inst_40_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_26_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_40_10_tsni = function spaces_inst_40_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_40_10_4_tsni(tmp3, " ")
};
replicate_inst_40_10_4_tsni = function replicate_inst_40_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_40_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_40_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
possibleMoves_inst_42_33_tsni = function possibleMoves_inst_42_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_42_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_42_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
possibleMoves_inst_43_44_tsni = function possibleMoves_inst_43_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return NofibPrelude.Nil
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_43_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_43_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_43_44_45_tsni = function lscomp$_inst_43_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
allDescend_inst_46_47_tsni = function allDescend_inst_46_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_46_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_46_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_46_47_44_tsni = function possibleMoves_inst_46_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_46_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_46_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_46_47_44_45_tsni = function lscomp$_inst_46_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_46_48_tsni = function lscomp_inst_46_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_46_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_46_48_tsni(x, t)
  }
});
lambda$_inst_46_48_tsni = function lambda$_inst_46_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_46_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_46_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_46_48_37_tsni = function possibleMoves_inst_46_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_46_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_46_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_46_47_49_tsni = function map_inst_46_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
descAndNo_inst_50_51_tsni = function descAndNo_inst_50_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_50_51_47_tsni(board);
  return lscomp_inst_50_51_48_tsni(tmp)
};
lscomp_inst_50_51_48_tsni = function lscomp_inst_50_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_50_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_50_51_48_tsni(x, t)
  }
});
lambda$_inst_50_51_48_tsni = function lambda$_inst_50_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_50_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_50_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_50_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_50_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_50_51_48_37_tsni = function possibleMoves_inst_50_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_50_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_50_51_47_tsni = function allDescend_inst_50_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_50_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_50_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_50_51_47_44_tsni = function possibleMoves_inst_50_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_50_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_50_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_50_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_50_51_47_44_45_tsni = function lscomp$_inst_50_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_50_51_47_49_tsni = function map_inst_50_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_50_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
lambda_inst_53_54_tsni = (undefined, function (board) {
  return () => {
    return lambda$_inst_53_54_35_tsni(board)
  }
});
lambda$_inst_53_54_35_tsni = function lambda$_inst_53_54_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_53_54_35_32_tsni(tmp1)
};
deadEnd_inst_53_54_35_32_tsni = function deadEnd_inst_53_54_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_53_54_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_53_54_35_32_33_tsni = function possibleMoves_inst_53_54_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_53_54_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_53_54_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_53_55_tsni = function singleDescend_inst_53_55_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_53_55_51_tsni(board);
  return lscomp_inst_53_55_78_tsni(tmp)
};
descAndNo_inst_53_55_51_tsni = function descAndNo_inst_53_55_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_53_55_51_47_tsni(board);
  return lscomp_inst_53_55_51_48_tsni(tmp)
};
allDescend_inst_53_55_51_47_tsni = function allDescend_inst_53_55_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_53_55_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_53_55_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_53_55_51_47_44_tsni = function possibleMoves_inst_53_55_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_53_55_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_53_55_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_53_55_51_47_44_45_tsni = function lscomp$_inst_53_55_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_53_55_51_48_tsni = function lscomp_inst_53_55_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_53_55_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_53_55_51_48_tsni(x, t)
  }
});
lambda$_inst_53_55_51_48_tsni = function lambda$_inst_53_55_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_53_55_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_53_55_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_53_55_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_53_55_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_53_55_51_48_37_tsni = function possibleMoves_inst_53_55_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_53_55_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_53_55_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_53_55_51_47_49_tsni = function map_inst_53_55_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_53_55_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_53_56_tsni = function descAndNo_inst_53_56_tsni(board) {
  let tmp;
  tmp = allDescend_inst_53_56_47_tsni(board);
  return lscomp_inst_53_56_48_tsni(tmp)
};
lscomp_inst_53_56_48_tsni = function lscomp_inst_53_56_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_53_56_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_53_56_48_tsni(x, t)
  }
});
lambda$_inst_53_56_48_tsni = function lambda$_inst_53_56_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_53_56_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_53_56_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_53_56_48_37_tsni = function possibleMoves_inst_53_56_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_53_56_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_53_56_47_tsni = function allDescend_inst_53_56_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_53_56_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_53_56_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_53_56_47_44_tsni = function possibleMoves_inst_53_56_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_53_56_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_53_56_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_53_56_47_44_45_tsni = function lscomp$_inst_53_56_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_53_56_47_49_tsni = function map_inst_53_56_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
printBoard_inst_57_2_tsni = function printBoard_inst_57_2_tsni(s, n, xs) {
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
        tmp3 = spaces_inst_57_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_57_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_57_2_22_tsni(tmp3, tmp5);
        return NofibPrelude.Cons("*", tmp6)
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_57_2_tsni(s, tmp9, NofibPrelude.Nil);
          return NofibPrelude.append(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error")
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
          tmp16 = printBoard_inst_57_2_tsni(s, tmp15, xs1);
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
              tmp22 = spaces_inst_57_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_57_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_57_2_20_tsni(tmp22, tmp24);
              return NofibPrelude.append(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_57_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_57_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_57_2_23_tsni(tmp28, tmp31);
                return NofibPrelude.Cons("*", tmp32)
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_57_2_tsni(s, tmp35, tmp36);
                  return NofibPrelude.append(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_57_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_57_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_57_2_24_tsni(tmp40, tmp43);
              return NofibPrelude.Cons("*", tmp44)
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_57_2_tsni(s, tmp47, tmp48);
                return NofibPrelude.append(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
            tmp54 = spaces_inst_57_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_57_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_57_2_12_tsni(tmp54, tmp56);
            return NofibPrelude.append(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_57_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_57_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_57_2_26_tsni(tmp60, tmp63);
              return NofibPrelude.Cons("*", tmp64)
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_57_2_tsni(s, tmp67, tmp68);
                return NofibPrelude.append(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_57_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = globalThis.Object.freeze([
              i,
              j
            ]);
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_57_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_57_2_25_tsni(tmp72, tmp75);
            return NofibPrelude.Cons("*", tmp76)
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_57_2_tsni(s, tmp79, tmp80);
              return NofibPrelude.append(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error")
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
spaces_inst_57_2_10_tsni = function spaces_inst_57_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_10_4_tsni(tmp3, " ")
};
replicate_inst_57_2_10_4_tsni = function replicate_inst_57_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_25_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_9_tsni = function spaces_inst_57_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_9_4_tsni(tmp3, " ")
};
replicate_inst_57_2_9_4_tsni = function replicate_inst_57_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_26_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_8_tsni = function spaces_inst_57_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_8_4_tsni(tmp3, " ")
};
replicate_inst_57_2_8_4_tsni = function replicate_inst_57_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_12_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_7_tsni = function spaces_inst_57_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_7_4_tsni(tmp3, " ")
};
replicate_inst_57_2_7_4_tsni = function replicate_inst_57_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_24_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_6_tsni = function spaces_inst_57_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_6_4_tsni(tmp3, " ")
};
replicate_inst_57_2_6_4_tsni = function replicate_inst_57_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_23_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_5_tsni = function spaces_inst_57_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_5_4_tsni(tmp3, " ")
};
replicate_inst_57_2_5_4_tsni = function replicate_inst_57_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_20_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
spaces_inst_57_2_3_tsni = function spaces_inst_57_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_57_2_3_4_tsni(tmp3, " ")
};
replicate_inst_57_2_3_4_tsni = function replicate_inst_57_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_2_22_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lscomp1$_inst_58_59_tsni = function lscomp1$_inst_58_59_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_58_59_tsni = function lscomp2$_inst_58_59_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_58_59_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_58_59_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_58_59_tsni = function lambda$_inst_58_59_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
  tmp = lscomp2$_inst_58_59_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_58_59_28_tsni = function enumFromTo_inst_58_59_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_59_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_58_59_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_58_59_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_58_60_tsni = function enumFromTo_inst_58_60_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_60_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_58_59_28_tsni(1, sze);
      return lscomp2$_inst_58_59_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda20)
    }
  }
};
descendents_inst_61_62_tsni = function descendents_inst_61_62_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1;
  tmp = knights.canJumpFirst(board);
  lambda$this = runtime.safeCall(lambda_inst_61_62_54_tsni(board));
  scrut3 = runtime.short_and(tmp, lambda$this);
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda16)
  } else {
    tmp1 = singleDescend_inst_61_62_55_tsni(board);
    singles = tmp1;
    tmp2 = NofibPrelude.listLen(singles);
    scrut = tmp2;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp3 = descAndNo_inst_61_62_56_tsni(board);
      tmp4 = knights.quickSortIntChessSet(tmp3);
      tmp5 = NofibPrelude.map_lz(NofibPrelude.snd, tmp4);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this1 = runtime.safeCall(lambda17(h));
            tmp6 = NofibPrelude.lazy(lambda$this1);
          } else {
            throw globalThis.Error("unreachable")
          }
        } else {
          throw globalThis.Error("unreachable")
        }
        tmp5 = tmp6;
      } else {
        tmp5 = NofibPrelude.lazy(lambda19);
      }
    }
    res = tmp5;
    return res
  }
};
descAndNo_inst_61_62_56_tsni = function descAndNo_inst_61_62_56_tsni(board) {
  let tmp;
  tmp = allDescend_inst_61_62_56_47_tsni(board);
  return lscomp_inst_61_62_56_48_tsni(tmp)
};
allDescend_inst_61_62_56_47_tsni = function allDescend_inst_61_62_56_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_61_62_56_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_61_62_56_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_61_62_56_47_44_tsni = function possibleMoves_inst_61_62_56_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_61_62_56_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_61_62_56_47_44_45_tsni = function lscomp$_inst_61_62_56_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_61_62_56_48_tsni = function lscomp_inst_61_62_56_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_61_62_56_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_61_62_56_48_tsni(x, t)
  }
});
lambda$_inst_61_62_56_48_tsni = function lambda$_inst_61_62_56_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_61_62_56_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_61_62_56_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_61_62_56_48_37_tsni = function possibleMoves_inst_61_62_56_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_56_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_61_62_56_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_61_62_56_47_49_tsni = function map_inst_61_62_56_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_61_62_55_tsni = function singleDescend_inst_61_62_55_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_61_62_55_51_tsni(board);
  return lscomp_inst_61_62_55_78_tsni(tmp)
};
descAndNo_inst_61_62_55_51_tsni = function descAndNo_inst_61_62_55_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_61_62_55_51_47_tsni(board);
  return lscomp_inst_61_62_55_51_48_tsni(tmp)
};
lscomp_inst_61_62_55_51_48_tsni = function lscomp_inst_61_62_55_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_61_62_55_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_61_62_55_51_48_tsni(x, t)
  }
});
lambda$_inst_61_62_55_51_48_tsni = function lambda$_inst_61_62_55_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_61_62_55_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_61_62_55_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_61_62_55_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_61_62_55_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_61_62_55_51_48_37_tsni = function possibleMoves_inst_61_62_55_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_61_62_55_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_61_62_55_51_47_tsni = function allDescend_inst_61_62_55_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_61_62_55_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_61_62_55_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_61_62_55_51_47_44_tsni = function possibleMoves_inst_61_62_55_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_61_62_55_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_61_62_55_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_61_62_55_51_47_44_45_tsni = function lscomp$_inst_61_62_55_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_61_62_55_51_47_49_tsni = function map_inst_61_62_55_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_61_62_55_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
lambda_inst_61_62_54_tsni = (undefined, function (board) {
  return () => {
    return lambda$_inst_61_62_54_35_tsni(board)
  }
});
lambda$_inst_61_62_54_35_tsni = function lambda$_inst_61_62_54_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_61_62_54_35_32_tsni(tmp1)
};
deadEnd_inst_61_62_54_35_32_tsni = function deadEnd_inst_61_62_54_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_61_62_54_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_61_62_54_35_32_33_tsni = function possibleMoves_inst_61_62_54_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_61_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_61_62_54_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
root_inst_63_64_tsni = function root_inst_63_64_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_63_64_60_tsni(1, sze);
  tmp4 = lscomp1$_inst_63_64_59_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda22);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_63_64_59_tsni = function lscomp1$_inst_63_64_59_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_63_64_59_tsni = function lscomp2$_inst_63_64_59_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_63_64_59_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_63_64_59_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_63_64_59_tsni = function lambda$_inst_63_64_59_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
  tmp = lscomp2$_inst_63_64_59_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_63_64_59_28_tsni = function enumFromTo_inst_63_64_59_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_63_64_59_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_63_64_59_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_63_64_59_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_63_64_60_tsni = function enumFromTo_inst_63_64_60_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_63_64_60_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_63_64_59_28_tsni(1, sze);
      return lscomp2$_inst_63_64_59_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda20)
    }
  }
};
grow_inst_63_65_tsni = function grow_inst_63_65_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_63_65_62_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
descendents_inst_63_65_62_tsni = function descendents_inst_63_65_62_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1;
  tmp = knights.canJumpFirst(board);
  lambda$this = runtime.safeCall(lambda_inst_63_65_62_54_tsni(board));
  scrut3 = runtime.short_and(tmp, lambda$this);
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda16)
  } else {
    tmp1 = singleDescend_inst_63_65_62_55_tsni(board);
    singles = tmp1;
    tmp2 = NofibPrelude.listLen(singles);
    scrut = tmp2;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp3 = descAndNo_inst_63_65_62_56_tsni(board);
      tmp4 = knights.quickSortIntChessSet(tmp3);
      tmp5 = NofibPrelude.map_lz(NofibPrelude.snd, tmp4);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this1 = runtime.safeCall(lambda17(h));
            tmp6 = NofibPrelude.lazy(lambda$this1);
          } else {
            throw globalThis.Error("unreachable")
          }
        } else {
          throw globalThis.Error("unreachable")
        }
        tmp5 = tmp6;
      } else {
        tmp5 = NofibPrelude.lazy(lambda19);
      }
    }
    res = tmp5;
    return res
  }
};
lambda_inst_63_65_62_54_tsni = (undefined, function (board) {
  return () => {
    return lambda$_inst_63_65_62_54_35_tsni(board)
  }
});
lambda$_inst_63_65_62_54_35_tsni = function lambda$_inst_63_65_62_54_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_63_65_62_54_35_32_tsni(tmp1)
};
deadEnd_inst_63_65_62_54_35_32_tsni = function deadEnd_inst_63_65_62_54_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_63_65_62_54_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_63_65_62_54_35_32_33_tsni = function possibleMoves_inst_63_65_62_54_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_63_65_62_54_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_63_65_62_55_tsni = function singleDescend_inst_63_65_62_55_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_63_65_62_55_51_tsni(board);
  return lscomp_inst_63_65_62_55_78_tsni(tmp)
};
descAndNo_inst_63_65_62_55_51_tsni = function descAndNo_inst_63_65_62_55_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_63_65_62_55_51_47_tsni(board);
  return lscomp_inst_63_65_62_55_51_48_tsni(tmp)
};
allDescend_inst_63_65_62_55_51_47_tsni = function allDescend_inst_63_65_62_55_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_63_65_62_55_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_63_65_62_55_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_63_65_62_55_51_47_44_tsni = function possibleMoves_inst_63_65_62_55_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_63_65_62_55_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_63_65_62_55_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_63_65_62_55_51_47_44_45_tsni = function lscomp$_inst_63_65_62_55_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_63_65_62_55_51_48_tsni = function lscomp_inst_63_65_62_55_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_63_65_62_55_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_63_65_62_55_51_48_tsni(x, t)
  }
});
lambda$_inst_63_65_62_55_51_48_tsni = function lambda$_inst_63_65_62_55_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_63_65_62_55_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_63_65_62_55_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_63_65_62_55_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_63_65_62_55_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_63_65_62_55_51_48_37_tsni = function possibleMoves_inst_63_65_62_55_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_63_65_62_55_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_63_65_62_55_51_47_49_tsni = function map_inst_63_65_62_55_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_63_65_62_55_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_63_65_62_56_tsni = function descAndNo_inst_63_65_62_56_tsni(board) {
  let tmp;
  tmp = allDescend_inst_63_65_62_56_47_tsni(board);
  return lscomp_inst_63_65_62_56_48_tsni(tmp)
};
lscomp_inst_63_65_62_56_48_tsni = function lscomp_inst_63_65_62_56_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_63_65_62_56_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_63_65_62_56_48_tsni(x, t)
  }
});
lambda$_inst_63_65_62_56_48_tsni = function lambda$_inst_63_65_62_56_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_63_65_62_56_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_63_65_62_56_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_63_65_62_56_48_37_tsni = function possibleMoves_inst_63_65_62_56_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_63_65_62_56_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_63_65_62_56_47_tsni = function allDescend_inst_63_65_62_56_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_63_65_62_56_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_63_65_62_56_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_63_65_62_56_47_44_tsni = function possibleMoves_inst_63_65_62_56_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_63_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_63_65_62_56_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_63_65_62_56_47_44_45_tsni = function lscomp$_inst_63_65_62_56_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_63_65_62_56_47_49_tsni = function map_inst_63_65_62_56_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_63_66_tsni = function depthSearch_inst_63_66_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_63_66_67_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_63_66_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_63_66_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_63_66_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_63_66_tsni(q, growFn, finFn)
  }
});
lambda$_inst_63_66_tsni = function lambda$_inst_63_66_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_63_66_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_63_69_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_63_68_1_tsni(y);
        tmp10 = pp_inst_63_68_tsni(xs);
        tmp11 = append_inst_63_68_74_tsni(tmp9, tmp10);
        tmp12 = NofibPrelude.append(tmp8, tmp11);
        tmp13 = NofibPrelude.append(tmp7, tmp12);
        return NofibPrelude.append(tmp5, tmp13)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
lambda_inst_63_66_67_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_63_68_tsni()
    }
  }
});
pp_inst_63_68_tsni = function pp_inst_63_68_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_63_68_1_tsni = function showChessSet_inst_63_68_1_tsni(b) {
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
    return printBoard_inst_63_68_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
printBoard_inst_63_68_1_2_tsni = function printBoard_inst_63_68_1_2_tsni(s, n, xs) {
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
        tmp3 = spaces_inst_63_68_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_63_68_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_63_68_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_63_68_74_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_63_68_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_63_68_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error")
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
          tmp16 = printBoard_inst_63_68_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_63_68_1_2_16_tsni(tmp14, tmp16);
          return append_inst_63_68_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_63_68_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_63_68_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_63_68_1_2_20_tsni(tmp22, tmp24);
              return append_inst_63_68_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_63_68_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_63_68_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_63_68_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_63_68_74_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_63_68_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_63_68_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_63_68_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_63_68_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_63_68_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_63_68_74_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_63_68_1_2_tsni(s, tmp47, tmp48);
                return append_inst_63_68_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
            tmp54 = spaces_inst_63_68_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_63_68_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_63_68_1_2_12_tsni(tmp54, tmp56);
            return append_inst_63_68_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_63_68_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_63_68_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_63_68_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_63_68_74_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_63_68_1_2_tsni(s, tmp67, tmp68);
                return append_inst_63_68_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_63_68_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = globalThis.Object.freeze([
              i,
              j
            ]);
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_63_68_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_63_68_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_63_68_74_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_63_68_1_2_tsni(s, tmp79, tmp80);
              return append_inst_63_68_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error")
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
spaces_inst_63_68_1_2_10_tsni = function spaces_inst_63_68_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_10_4_tsni = function replicate_inst_63_68_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_9_tsni = function spaces_inst_63_68_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_9_4_tsni = function replicate_inst_63_68_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_8_tsni = function spaces_inst_63_68_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_8_4_tsni = function replicate_inst_63_68_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_7_tsni = function spaces_inst_63_68_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_7_4_tsni = function replicate_inst_63_68_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_6_tsni = function spaces_inst_63_68_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_6_4_tsni = function replicate_inst_63_68_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_5_tsni = function spaces_inst_63_68_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_5_4_tsni = function replicate_inst_63_68_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_63_68_1_2_3_tsni = function spaces_inst_63_68_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_63_68_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_63_68_1_2_3_4_tsni = function replicate_inst_63_68_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_68_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_68_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_63_68_1_2_21_tsni = function append_inst_63_68_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_14_tsni = function append_inst_63_68_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_16_tsni = function append_inst_63_68_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_11_tsni = function append_inst_63_68_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_15_tsni = function append_inst_63_68_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_13_tsni = function append_inst_63_68_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_20_tsni = function append_inst_63_68_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_12_tsni = function append_inst_63_68_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_18_tsni = function append_inst_63_68_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_19_tsni = function append_inst_63_68_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_17_tsni = function append_inst_63_68_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_63_68_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_63_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_63_68_1_2_23_tsni = function append_inst_63_68_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_24_tsni = function append_inst_63_68_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_26_tsni = function append_inst_63_68_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_22_tsni = function append_inst_63_68_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_63_68_1_2_25_tsni = function append_inst_63_68_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_63_69_tsni = function take_lz_inst_63_69_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_63_68_tsni()
    }
  }
};
printTour_inst_70_71_tsni = function printTour_inst_70_71_tsni(ss) {
  let scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2;
  scrut = NofibPrelude.map(lambda25, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_70_71_64_tsni(size);
        tmp1 = depthSearch_inst_70_71_66_tsni(tmp, grow_inst_70_71_65_tsni, knights.isFinished);
        tmp2 = take_lz_inst_70_71_69_tsni(number, tmp1);
        return pp_inst_70_71_68_tsni(tmp2)
      } else {
        throw globalThis.Error("printTour error")
      }
    } else {
      throw globalThis.Error("printTour error")
    }
  } else {
    throw globalThis.Error("printTour error")
  }
};
pp_inst_70_71_68_tsni = function pp_inst_70_71_68_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_70_71_68_1_tsni = function showChessSet_inst_70_71_68_1_tsni(b) {
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
    return printBoard_inst_70_71_68_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
printBoard_inst_70_71_68_1_2_tsni = function printBoard_inst_70_71_68_1_2_tsni(s, n, xs) {
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
        tmp3 = spaces_inst_70_71_68_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_70_71_68_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_70_71_68_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head4 = "*";
        _deforest_Cons_tail4 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_70_71_68_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_70_71_68_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error")
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
          tmp16 = printBoard_inst_70_71_68_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_70_71_68_1_2_16_tsni(tmp14, tmp16);
          return append_inst_70_71_68_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_70_71_68_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_70_71_68_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_70_71_68_1_2_20_tsni(tmp22, tmp24);
              return append_inst_70_71_68_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_70_71_68_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_70_71_68_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_70_71_68_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head3 = "*";
                _deforest_Cons_tail3 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_70_71_68_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_70_71_68_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_70_71_68_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_70_71_68_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_70_71_68_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_70_71_68_1_2_tsni(s, tmp47, tmp48);
                return append_inst_70_71_68_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
            tmp54 = spaces_inst_70_71_68_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_70_71_68_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_70_71_68_1_2_12_tsni(tmp54, tmp56);
            return append_inst_70_71_68_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_70_71_68_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_70_71_68_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_70_71_68_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head = "*";
              _deforest_Cons_tail = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_70_71_68_1_2_tsni(s, tmp67, tmp68);
                return append_inst_70_71_68_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_70_71_68_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = globalThis.Object.freeze([
              i,
              j
            ]);
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_70_71_68_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_70_71_68_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head1 = "*";
            _deforest_Cons_tail1 = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_70_71_68_1_2_tsni(s, tmp79, tmp80);
              return append_inst_70_71_68_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error")
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
spaces_inst_70_71_68_1_2_3_tsni = function spaces_inst_70_71_68_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_3_4_tsni = function replicate_inst_70_71_68_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_5_tsni = function spaces_inst_70_71_68_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_5_4_tsni = function replicate_inst_70_71_68_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_6_tsni = function spaces_inst_70_71_68_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_6_4_tsni = function replicate_inst_70_71_68_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_7_tsni = function spaces_inst_70_71_68_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_7_4_tsni = function replicate_inst_70_71_68_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_8_tsni = function spaces_inst_70_71_68_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_8_4_tsni = function replicate_inst_70_71_68_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_9_tsni = function spaces_inst_70_71_68_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_9_4_tsni = function replicate_inst_70_71_68_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_70_71_68_1_2_10_tsni = function spaces_inst_70_71_68_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_70_71_68_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_70_71_68_1_2_10_4_tsni = function replicate_inst_70_71_68_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_71_68_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_71_68_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_70_71_68_1_2_11_tsni = function append_inst_70_71_68_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_12_tsni = function append_inst_70_71_68_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_13_tsni = function append_inst_70_71_68_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_14_tsni = function append_inst_70_71_68_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_15_tsni = function append_inst_70_71_68_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_16_tsni = function append_inst_70_71_68_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_17_tsni = function append_inst_70_71_68_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_18_tsni = function append_inst_70_71_68_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_19_tsni = function append_inst_70_71_68_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_20_tsni = function append_inst_70_71_68_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_21_tsni = function append_inst_70_71_68_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_71_68_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_70_71_68_1_2_22_tsni = function append_inst_70_71_68_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_23_tsni = function append_inst_70_71_68_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_24_tsni = function append_inst_70_71_68_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_25_tsni = function append_inst_70_71_68_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_1_2_26_tsni = function append_inst_70_71_68_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_70_71_69_tsni = function take_lz_inst_70_71_69_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_70_71_68_tsni()
    }
  }
};
depthSearch_inst_70_71_66_tsni = function depthSearch_inst_70_71_66_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_70_71_66_67_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_70_71_66_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_70_71_66_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_70_71_66_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_70_71_66_tsni(q, growFn, finFn)
  }
});
lambda$_inst_70_71_66_tsni = function lambda$_inst_70_71_66_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_70_71_66_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_70_71_69_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_70_71_68_1_tsni(y);
        tmp10 = pp_inst_70_71_68_tsni(xs);
        tmp11 = append_inst_70_71_68_74_tsni(tmp9, tmp10);
        tmp12 = NofibPrelude.append(tmp8, tmp11);
        tmp13 = NofibPrelude.append(tmp7, tmp12);
        return NofibPrelude.append(tmp5, tmp13)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
lambda_inst_70_71_66_67_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_70_71_68_tsni()
    }
  }
});
grow_inst_70_71_65_tsni = function grow_inst_70_71_65_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_70_71_65_62_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
descendents_inst_70_71_65_62_tsni = function descendents_inst_70_71_65_62_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1;
  tmp = knights.canJumpFirst(board);
  lambda$this = runtime.safeCall(lambda_inst_70_71_65_62_54_tsni(board));
  scrut3 = runtime.short_and(tmp, lambda$this);
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda16)
  } else {
    tmp1 = singleDescend_inst_70_71_65_62_55_tsni(board);
    singles = tmp1;
    tmp2 = NofibPrelude.listLen(singles);
    scrut = tmp2;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp3 = descAndNo_inst_70_71_65_62_56_tsni(board);
      tmp4 = knights.quickSortIntChessSet(tmp3);
      tmp5 = NofibPrelude.map_lz(NofibPrelude.snd, tmp4);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this1 = runtime.safeCall(lambda17(h));
            tmp6 = NofibPrelude.lazy(lambda$this1);
          } else {
            throw globalThis.Error("unreachable")
          }
        } else {
          throw globalThis.Error("unreachable")
        }
        tmp5 = tmp6;
      } else {
        tmp5 = NofibPrelude.lazy(lambda19);
      }
    }
    res = tmp5;
    return res
  }
};
descAndNo_inst_70_71_65_62_56_tsni = function descAndNo_inst_70_71_65_62_56_tsni(board) {
  let tmp;
  tmp = allDescend_inst_70_71_65_62_56_47_tsni(board);
  return lscomp_inst_70_71_65_62_56_48_tsni(tmp)
};
allDescend_inst_70_71_65_62_56_47_tsni = function allDescend_inst_70_71_65_62_56_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_70_71_65_62_56_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_70_71_65_62_56_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_70_71_65_62_56_47_44_tsni = function possibleMoves_inst_70_71_65_62_56_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_70_71_65_62_56_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_70_71_65_62_56_47_44_45_tsni = function lscomp$_inst_70_71_65_62_56_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_70_71_65_62_56_48_tsni = function lscomp_inst_70_71_65_62_56_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_70_71_65_62_56_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_70_71_65_62_56_48_tsni(x, t)
  }
});
lambda$_inst_70_71_65_62_56_48_tsni = function lambda$_inst_70_71_65_62_56_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_70_71_65_62_56_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_70_71_65_62_56_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_70_71_65_62_56_48_37_tsni = function possibleMoves_inst_70_71_65_62_56_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_70_71_65_62_56_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_70_71_65_62_56_47_49_tsni = function map_inst_70_71_65_62_56_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
singleDescend_inst_70_71_65_62_55_tsni = function singleDescend_inst_70_71_65_62_55_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_70_71_65_62_55_51_tsni(board);
  return lscomp_inst_70_71_65_62_55_78_tsni(tmp)
};
descAndNo_inst_70_71_65_62_55_51_tsni = function descAndNo_inst_70_71_65_62_55_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_70_71_65_62_55_51_47_tsni(board);
  return lscomp_inst_70_71_65_62_55_51_48_tsni(tmp)
};
lscomp_inst_70_71_65_62_55_51_48_tsni = function lscomp_inst_70_71_65_62_55_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_70_71_65_62_55_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_70_71_65_62_55_51_48_tsni(x, t)
  }
});
lambda$_inst_70_71_65_62_55_51_48_tsni = function lambda$_inst_70_71_65_62_55_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_70_71_65_62_55_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_70_71_65_62_55_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_70_71_65_62_55_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_70_71_65_62_55_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_70_71_65_62_55_51_48_37_tsni = function possibleMoves_inst_70_71_65_62_55_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_70_71_65_62_55_51_47_tsni = function allDescend_inst_70_71_65_62_55_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_70_71_65_62_55_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_70_71_65_62_55_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_70_71_65_62_55_51_47_44_tsni = function possibleMoves_inst_70_71_65_62_55_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_70_71_65_62_55_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni = function lscomp$_inst_70_71_65_62_55_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_70_71_65_62_55_51_47_49_tsni = function map_inst_70_71_65_62_55_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_70_71_65_62_55_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
lambda_inst_70_71_65_62_54_tsni = (undefined, function (board) {
  return () => {
    return lambda$_inst_70_71_65_62_54_35_tsni(board)
  }
});
lambda$_inst_70_71_65_62_54_35_tsni = function lambda$_inst_70_71_65_62_54_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_70_71_65_62_54_35_32_tsni(tmp1)
};
deadEnd_inst_70_71_65_62_54_35_32_tsni = function deadEnd_inst_70_71_65_62_54_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_70_71_65_62_54_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_70_71_65_62_54_35_32_33_tsni = function possibleMoves_inst_70_71_65_62_54_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_70_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
root_inst_70_71_64_tsni = function root_inst_70_71_64_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_70_71_64_60_tsni(1, sze);
  tmp4 = lscomp1$_inst_70_71_64_59_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda22);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_70_71_64_59_tsni = function lscomp1$_inst_70_71_64_59_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_70_71_64_59_tsni = function lscomp2$_inst_70_71_64_59_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_70_71_64_59_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_70_71_64_59_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_70_71_64_59_tsni = function lambda$_inst_70_71_64_59_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
  tmp = lscomp2$_inst_70_71_64_59_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_70_71_64_59_28_tsni = function enumFromTo_inst_70_71_64_59_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_70_71_64_59_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_70_71_64_59_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_70_71_64_59_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_70_71_64_60_tsni = function enumFromTo_inst_70_71_64_60_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_70_71_64_60_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_70_71_64_59_28_tsni(1, sze);
      return lscomp2$_inst_70_71_64_59_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda20)
    }
  }
};
testKnights_nofib_inst_72_73_tsni = function testKnights_nofib_inst_72_73_tsni(ss) {
  let usageString, scrut;
  usageString = "\nUsage: knights <board size> <no solutions> \n";
  scrut = argsOk(ss);
  if (scrut === true) {
    return printTour_inst_72_73_71_tsni(ss)
  } else {
    throw globalThis.Error(usageString)
  }
};
printTour_inst_72_73_71_tsni = function printTour_inst_72_73_71_tsni(ss) {
  let scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2;
  scrut = NofibPrelude.map(lambda25, ss);
  if (scrut instanceof NofibPrelude.Cons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    size = param0;
    if (param1 instanceof NofibPrelude.Cons.class) {
      param01 = param1.head;
      param11 = param1.tail;
      number = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        tmp = root_inst_72_73_71_64_tsni(size);
        tmp1 = depthSearch_inst_72_73_71_66_tsni(tmp, grow_inst_72_73_71_65_tsni, knights.isFinished);
        tmp2 = take_lz_inst_72_73_71_69_tsni(number, tmp1);
        return pp_inst_72_73_71_68_tsni(tmp2)
      } else {
        throw globalThis.Error("printTour error")
      }
    } else {
      throw globalThis.Error("printTour error")
    }
  } else {
    throw globalThis.Error("printTour error")
  }
};
root_inst_72_73_71_64_tsni = function root_inst_72_73_71_64_tsni(sze) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
  tmp = sze * sze;
  tmp1 = 1 - tmp;
  tmp2 = NofibPrelude.repeat(tmp1);
  tmp3 = enumFromTo_inst_72_73_71_64_60_tsni(1, sze);
  tmp4 = lscomp1$_inst_72_73_71_64_59_tsni(sze, tmp3);
  tmp5 = sze * sze;
  tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
  tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
  tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
  tmp9 = NofibPrelude.lazy(lambda22);
  return NofibPrelude.append_lz_lz(tmp8, tmp9)
};
lscomp1$_inst_72_73_71_64_59_tsni = function lscomp1$_inst_72_73_71_64_59_tsni(sze, ls) {
  return runtime.safeCall(ls(sze))
};
lscomp2$_inst_72_73_71_64_59_tsni = function lscomp2$_inst_72_73_71_64_59_tsni(sze, h1, t1, ls) {
  return runtime.safeCall(ls(sze, h1, t1))
};
lambda_inst_72_73_71_64_59_tsni = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$_inst_72_73_71_64_59_tsni(sze, h1, t1, h2, t2)
  }
});
lambda$_inst_72_73_71_64_59_tsni = function lambda$_inst_72_73_71_64_59_tsni(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
  tmp = lscomp2$_inst_72_73_71_64_59_tsni(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_inst_72_73_71_64_59_28_tsni = function enumFromTo_inst_72_73_71_64_59_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_72_73_71_64_59_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze, h1, t1) => {
      let param0, param1, h2, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h2 = param0;
      t2 = param1;
      tmp2 = runtime.safeCall(lambda_inst_72_73_71_64_59_tsni(sze, h1, t1, h2, t2));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (sze, h1, t1) => {
      return lscomp1$_inst_72_73_71_64_59_tsni(sze, t1)
    }
  }
};
enumFromTo_inst_72_73_71_64_60_tsni = function enumFromTo_inst_72_73_71_64_60_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_72_73_71_64_60_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (sze) => {
      let param0, param1, h1, t1, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      h1 = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_72_73_71_64_59_28_tsni(1, sze);
      return lscomp2$_inst_72_73_71_64_59_tsni(sze, h1, t1, tmp2)
    }
  } else {
    return (sze) => {
      return NofibPrelude.lazy(lambda20)
    }
  }
};
grow_inst_72_73_71_65_tsni = function grow_inst_72_73_71_65_tsni(x_y) {
  let first1, first0, x, y, tmp, tmp1, tmp2;
  if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
    first0 = runtime.Tuple.get(x_y, 0);
    first1 = runtime.Tuple.get(x_y, 1);
    x = first0;
    y = first1;
    tmp = x + 1;
    tmp1 = NofibPrelude.repeat(tmp);
    tmp2 = descendents_inst_72_73_71_65_62_tsni(y);
    return NofibPrelude.zip_lz_lz(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
descendents_inst_72_73_71_65_62_tsni = function descendents_inst_72_73_71_65_62_tsni(board) {
  let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1;
  tmp = knights.canJumpFirst(board);
  lambda$this = runtime.safeCall(lambda_inst_72_73_71_65_62_54_tsni(board));
  scrut3 = runtime.short_and(tmp, lambda$this);
  if (scrut3 === true) {
    return NofibPrelude.lazy(lambda16)
  } else {
    tmp1 = singleDescend_inst_72_73_71_65_62_55_tsni(board);
    singles = tmp1;
    tmp2 = NofibPrelude.listLen(singles);
    scrut = tmp2;
    scrut2 = scrut === 0;
    if (scrut2 === true) {
      tmp3 = descAndNo_inst_72_73_71_65_62_56_tsni(board);
      tmp4 = knights.quickSortIntChessSet(tmp3);
      tmp5 = NofibPrelude.map_lz(NofibPrelude.snd, tmp4);
    } else {
      scrut1 = scrut === 1;
      if (scrut1 === true) {
        if (singles instanceof NofibPrelude.Cons.class) {
          param0 = singles.head;
          param1 = singles.tail;
          h = param0;
          if (param1 instanceof NofibPrelude.Nil.class) {
            lambda$this1 = runtime.safeCall(lambda17(h));
            tmp6 = NofibPrelude.lazy(lambda$this1);
          } else {
            throw globalThis.Error("unreachable")
          }
        } else {
          throw globalThis.Error("unreachable")
        }
        tmp5 = tmp6;
      } else {
        tmp5 = NofibPrelude.lazy(lambda19);
      }
    }
    res = tmp5;
    return res
  }
};
lambda_inst_72_73_71_65_62_54_tsni = (undefined, function (board) {
  return () => {
    return lambda$_inst_72_73_71_65_62_54_35_tsni(board)
  }
});
lambda$_inst_72_73_71_65_62_54_35_tsni = function lambda$_inst_72_73_71_65_62_54_35_tsni(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_72_73_71_65_62_54_35_32_tsni(tmp1)
};
deadEnd_inst_72_73_71_65_62_54_35_32_tsni = function deadEnd_inst_72_73_71_65_62_54_35_32_tsni(board) {
  let tmp, tmp1;
  tmp = possibleMoves_inst_72_73_71_65_62_54_35_32_33_tsni(board);
  tmp1 = NofibPrelude.listLen(tmp);
  return tmp1 === 0
};
possibleMoves_inst_72_73_71_65_62_54_35_32_33_tsni = function possibleMoves_inst_72_73_71_65_62_54_35_32_33_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_54_35_32_33_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
singleDescend_inst_72_73_71_65_62_55_tsni = function singleDescend_inst_72_73_71_65_62_55_tsni(board) {
  let tmp;
  tmp = descAndNo_inst_72_73_71_65_62_55_51_tsni(board);
  return lscomp_inst_72_73_71_65_62_55_78_tsni(tmp)
};
descAndNo_inst_72_73_71_65_62_55_51_tsni = function descAndNo_inst_72_73_71_65_62_55_51_tsni(board) {
  let tmp;
  tmp = allDescend_inst_72_73_71_65_62_55_51_47_tsni(board);
  return lscomp_inst_72_73_71_65_62_55_51_48_tsni(tmp)
};
allDescend_inst_72_73_71_65_62_55_51_47_tsni = function allDescend_inst_72_73_71_65_62_55_51_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_72_73_71_65_62_55_51_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_72_73_71_65_62_55_51_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_72_73_71_65_62_55_51_47_44_tsni = function possibleMoves_inst_72_73_71_65_62_55_51_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda_inst_72_73_71_65_62_55_51_48_52_tsni)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni = function lscomp$_inst_72_73_71_65_62_55_51_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_72_73_71_65_62_55_51_48_tsni = function lscomp_inst_72_73_71_65_62_55_51_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_72_73_71_65_62_55_51_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_72_73_71_65_62_55_51_48_tsni(x, t)
  }
});
lambda$_inst_72_73_71_65_62_55_51_48_tsni = function lambda$_inst_72_73_71_65_62_55_51_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_LzCons_head, _deforest_LzCons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_72_73_71_65_62_55_51_48_37_tsni(tmp);
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
      tmp4 = lscomp_inst_72_73_71_65_62_55_78_tsni(t1);
      return NofibPrelude.Cons(x1, tmp4)
    } else {
      return lscomp_inst_72_73_71_65_62_55_78_tsni(t1)
    }
  };
  tmp3 = lscomp_inst_72_73_71_65_62_55_51_48_tsni(t);
  _deforest_LzCons_head = arr;
  _deforest_LzCons_tail = tmp3;
  return () => {
    let param0, param1;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    return runtime.safeCall(param0(param1))
  }
};
possibleMoves_inst_72_73_71_65_62_55_51_48_37_tsni = function possibleMoves_inst_72_73_71_65_62_55_51_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_55_51_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
map_inst_72_73_71_65_62_55_51_47_49_tsni = function map_inst_72_73_71_65_62_55_51_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda_inst_72_73_71_65_62_55_51_48_52_tsni = (undefined, function () {
  return () => {
    return NofibPrelude.Nil
  }
});
descAndNo_inst_72_73_71_65_62_56_tsni = function descAndNo_inst_72_73_71_65_62_56_tsni(board) {
  let tmp;
  tmp = allDescend_inst_72_73_71_65_62_56_47_tsni(board);
  return lscomp_inst_72_73_71_65_62_56_48_tsni(tmp)
};
lscomp_inst_72_73_71_65_62_56_48_tsni = function lscomp_inst_72_73_71_65_62_56_48_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda_inst_72_73_71_65_62_56_48_tsni = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_72_73_71_65_62_56_48_tsni(x, t)
  }
});
lambda$_inst_72_73_71_65_62_56_48_tsni = function lambda$_inst_72_73_71_65_62_56_48_tsni(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_72_73_71_65_62_56_48_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_72_73_71_65_62_56_48_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
possibleMoves_inst_72_73_71_65_62_56_48_37_tsni = function possibleMoves_inst_72_73_71_65_62_56_48_37_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return NofibPrelude.Nil
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_48_37_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
allDescend_inst_72_73_71_65_62_56_47_tsni = function allDescend_inst_72_73_71_65_62_56_47_tsni(board) {
  let tmp, lambda$this;
  tmp = possibleMoves_inst_72_73_71_65_62_56_47_44_tsni(board);
  lambda$this = runtime.safeCall(lambda12(board));
  return map_inst_72_73_71_65_62_56_47_49_tsni(lambda$this, tmp)
};
possibleMoves_inst_72_73_71_65_62_56_47_44_tsni = function possibleMoves_inst_72_73_71_65_62_56_47_44_tsni(board) {
  let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
  _deforest_Cons_head7 = knights.RD;
  _deforest_Cons_tail7 = (board1) => {
    return (f) => {
      return () => {
        return NofibPrelude.lazy(lambda13)
      }
    }
  };
  tmp = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = knights.RU;
  _deforest_Cons_tail6 = tmp;
  tmp1 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = knights.LD;
  _deforest_Cons_tail5 = tmp1;
  tmp2 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = knights.LU;
  _deforest_Cons_tail4 = tmp2;
  tmp3 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = knights.DR;
  _deforest_Cons_tail3 = tmp3;
  tmp4 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = knights.DL;
  _deforest_Cons_tail2 = tmp4;
  tmp5 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = knights.UR;
  _deforest_Cons_tail1 = tmp5;
  tmp6 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = knights.UL;
  _deforest_Cons_tail = tmp6;
  tmp7 = (board1) => {
    return match_ls_arm_Cons_inst_72_73_71_65_62_56_47_44_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
  };
  tmp8 = lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni(board, tmp7);
  res = tmp8;
  return res
};
lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni = function lscomp$_inst_72_73_71_65_62_56_47_44_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_72_73_71_65_62_56_47_49_tsni = function map_inst_72_73_71_65_62_56_47_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
depthSearch_inst_72_73_71_66_tsni = function depthSearch_inst_72_73_71_66_tsni(q, growFn, finFn) {
  let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  scrut1 = knights.emptyQueue_lz(q);
  if (scrut1 === true) {
    return NofibPrelude.lazy(lambda_inst_72_73_71_66_67_tsni)
  } else {
    tmp = knights.inquireFront_lz(q);
    scrut = runtime.safeCall(finFn(tmp));
    if (scrut === true) {
      tmp1 = runtime.safeCall(lambda_inst_72_73_71_66_tsni(q, growFn, finFn));
      return NofibPrelude.lazy(tmp1)
    } else {
      tmp2 = knights.inquireFront_lz(q);
      tmp3 = runtime.safeCall(growFn(tmp2));
      tmp4 = knights.removeFront_lz(q);
      tmp5 = knights.addAllFront_lz(tmp3, tmp4);
      return depthSearch_inst_72_73_71_66_tsni(tmp5, growFn, finFn)
    }
  }
};
lambda_inst_72_73_71_66_tsni = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$_inst_72_73_71_66_tsni(q, growFn, finFn)
  }
});
lambda$_inst_72_73_71_66_tsni = function lambda$_inst_72_73_71_66_tsni(q, growFn, finFn) {
  let tmp, tmp1, tmp2, _deforest_LzCons_head, _deforest_LzCons_tail;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = depthSearch_inst_72_73_71_66_tsni(tmp1, growFn, finFn);
  _deforest_LzCons_head = tmp;
  _deforest_LzCons_tail = tmp2;
  return (n) => {
    let param0, param1, h, t, tmp3, tmp4, _deforest_Cons_head, _deforest_Cons_tail;
    param0 = _deforest_LzCons_head;
    param1 = _deforest_LzCons_tail;
    h = param0;
    t = param1;
    tmp3 = n - 1;
    tmp4 = take_lz_inst_72_73_71_69_tsni(tmp3, t);
    _deforest_Cons_head = h;
    _deforest_Cons_tail = tmp4;
    return () => {
      let param01, param11, first1, first0, x, y, xs, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        x = first0;
        y = first1;
        xs = param11;
        tmp5 = NofibPrelude.nofibStringToList("\nKnights tour with ");
        tmp6 = NofibPrelude.stringOfInt(x);
        tmp7 = NofibPrelude.nofibStringToList(tmp6);
        tmp8 = NofibPrelude.nofibStringToList(" backtracking moves\n");
        tmp9 = showChessSet_inst_72_73_71_68_1_tsni(y);
        tmp10 = pp_inst_72_73_71_68_tsni(xs);
        tmp11 = append_inst_72_73_71_68_74_tsni(tmp9, tmp10);
        tmp12 = append_inst_72_73_71_68_76_tsni(tmp8, tmp11);
        tmp13 = append_inst_72_73_71_68_77_tsni(tmp7, tmp12);
        return append_inst_72_73_71_68_75_tsni(tmp5, tmp13)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  }
};
lambda_inst_72_73_71_66_67_tsni = (undefined, function () {
  return (n) => {
    return () => {
      return match_xs_arm_Nil_inst_72_73_71_68_tsni()
    }
  }
});
pp_inst_72_73_71_68_tsni = function pp_inst_72_73_71_68_tsni(xs) {
  return runtime.safeCall(xs())
};
showChessSet_inst_72_73_71_68_1_tsni = function showChessSet_inst_72_73_71_68_1_tsni(b) {
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
    return printBoard_inst_72_73_71_68_1_2_tsni(sze, 1, sortedTrail)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
printBoard_inst_72_73_71_68_1_2_tsni = function printBoard_inst_72_73_71_68_1_2_tsni(s, n, xs) {
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
        tmp3 = spaces_inst_72_73_71_68_1_2_3_tsni(tmp2, 1);
        tmp4 = n + 1;
        tmp5 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp4, NofibPrelude.Nil);
        tmp6 = append_inst_72_73_71_68_1_2_22_tsni(tmp3, tmp5);
        _deforest_Cons_head1 = "*";
        _deforest_Cons_tail1 = tmp6;
        return (ys) => {
          return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      } else {
        tmp7 = NofibPrelude.intMod(n, s);
        scrut6 = tmp7 === 0;
        if (scrut6 === true) {
          tmp8 = NofibPrelude.nofibStringToList("*\n");
          tmp9 = n + 1;
          tmp10 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp9, NofibPrelude.Nil);
          return append_inst_72_73_71_68_1_2_21_tsni(tmp8, tmp10)
        } else {
          throw globalThis.Error("printBoard empty list error")
        }
      }
    }
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
          tmp16 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp15, xs1);
          tmp17 = append_inst_72_73_71_68_1_2_16_tsni(tmp14, tmp16);
          return append_inst_72_73_71_68_1_2_15_tsni(tmp13, tmp17)
        } else {
          scrut2 = i === n;
          if (scrut2 === true) {
            tmp18 = NofibPrelude.intMod(n, s);
            scrut3 = tmp18 != 0;
            if (scrut3 === true) {
              tmp19 = NofibPrelude.stringOfInt(j);
              tmp20 = NofibPrelude.nofibStringToList(tmp19);
              tmp21 = s * s;
              tmp22 = spaces_inst_72_73_71_68_1_2_5_tsni(tmp21, j);
              tmp23 = n + 1;
              tmp24 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp23, xs1);
              tmp25 = append_inst_72_73_71_68_1_2_20_tsni(tmp22, tmp24);
              return append_inst_72_73_71_68_1_2_18_tsni(tmp20, tmp25)
            } else {
              tmp26 = NofibPrelude.intMod(n, s);
              scrut1 = tmp26 != 0;
              if (scrut1 === true) {
                tmp27 = s * s;
                tmp28 = spaces_inst_72_73_71_68_1_2_6_tsni(tmp27, 1);
                tmp29 = n + 1;
                arr = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp30 = NofibPrelude.Cons(arr, xs1);
                tmp31 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp29, tmp30);
                tmp32 = append_inst_72_73_71_68_1_2_23_tsni(tmp28, tmp31);
                _deforest_Cons_head4 = "*";
                _deforest_Cons_tail4 = tmp32;
                return (ys) => {
                  return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys, _deforest_Cons_head4, _deforest_Cons_tail4)
                }
              } else {
                tmp33 = NofibPrelude.intMod(n, s);
                scrut = tmp33 === 0;
                if (scrut === true) {
                  tmp34 = NofibPrelude.nofibStringToList("*\n");
                  tmp35 = n + 1;
                  arr1 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp36 = NofibPrelude.Cons(arr1, xs1);
                  tmp37 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp35, tmp36);
                  return append_inst_72_73_71_68_1_2_19_tsni(tmp34, tmp37)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
                }
              }
            }
          } else {
            tmp38 = NofibPrelude.intMod(n, s);
            scrut1 = tmp38 != 0;
            if (scrut1 === true) {
              tmp39 = s * s;
              tmp40 = spaces_inst_72_73_71_68_1_2_7_tsni(tmp39, 1);
              tmp41 = n + 1;
              arr2 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp42 = NofibPrelude.Cons(arr2, xs1);
              tmp43 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp41, tmp42);
              tmp44 = append_inst_72_73_71_68_1_2_24_tsni(tmp40, tmp43);
              _deforest_Cons_head3 = "*";
              _deforest_Cons_tail3 = tmp44;
              return (ys) => {
                return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys, _deforest_Cons_head3, _deforest_Cons_tail3)
              }
            } else {
              tmp45 = NofibPrelude.intMod(n, s);
              scrut = tmp45 === 0;
              if (scrut === true) {
                tmp46 = NofibPrelude.nofibStringToList("*\n");
                tmp47 = n + 1;
                arr3 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp48 = NofibPrelude.Cons(arr3, xs1);
                tmp49 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp47, tmp48);
                return append_inst_72_73_71_68_1_2_17_tsni(tmp46, tmp49)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
            tmp54 = spaces_inst_72_73_71_68_1_2_8_tsni(tmp53, j);
            tmp55 = n + 1;
            tmp56 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp55, xs1);
            tmp57 = append_inst_72_73_71_68_1_2_12_tsni(tmp54, tmp56);
            return append_inst_72_73_71_68_1_2_13_tsni(tmp52, tmp57)
          } else {
            tmp58 = NofibPrelude.intMod(n, s);
            scrut1 = tmp58 != 0;
            if (scrut1 === true) {
              tmp59 = s * s;
              tmp60 = spaces_inst_72_73_71_68_1_2_9_tsni(tmp59, 1);
              tmp61 = n + 1;
              arr4 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp62 = NofibPrelude.Cons(arr4, xs1);
              tmp63 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp61, tmp62);
              tmp64 = append_inst_72_73_71_68_1_2_26_tsni(tmp60, tmp63);
              _deforest_Cons_head2 = "*";
              _deforest_Cons_tail2 = tmp64;
              return (ys) => {
                return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys, _deforest_Cons_head2, _deforest_Cons_tail2)
              }
            } else {
              tmp65 = NofibPrelude.intMod(n, s);
              scrut = tmp65 === 0;
              if (scrut === true) {
                tmp66 = NofibPrelude.nofibStringToList("*\n");
                tmp67 = n + 1;
                arr5 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp68 = NofibPrelude.Cons(arr5, xs1);
                tmp69 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp67, tmp68);
                return append_inst_72_73_71_68_1_2_11_tsni(tmp66, tmp69)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
              }
            }
          }
        } else {
          tmp70 = NofibPrelude.intMod(n, s);
          scrut1 = tmp70 != 0;
          if (scrut1 === true) {
            tmp71 = s * s;
            tmp72 = spaces_inst_72_73_71_68_1_2_10_tsni(tmp71, 1);
            tmp73 = n + 1;
            arr6 = globalThis.Object.freeze([
              i,
              j
            ]);
            tmp74 = NofibPrelude.Cons(arr6, xs1);
            tmp75 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp73, tmp74);
            tmp76 = append_inst_72_73_71_68_1_2_25_tsni(tmp72, tmp75);
            _deforest_Cons_head = "*";
            _deforest_Cons_tail = tmp76;
            return (ys) => {
              return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
            }
          } else {
            tmp77 = NofibPrelude.intMod(n, s);
            scrut = tmp77 === 0;
            if (scrut === true) {
              tmp78 = NofibPrelude.nofibStringToList("*\n");
              tmp79 = n + 1;
              arr7 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp80 = NofibPrelude.Cons(arr7, xs1);
              tmp81 = printBoard_inst_72_73_71_68_1_2_tsni(s, tmp79, tmp80);
              return append_inst_72_73_71_68_1_2_14_tsni(tmp78, tmp81)
            } else {
              throw globalThis.Error("printBoard non-empty list error")
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
spaces_inst_72_73_71_68_1_2_10_tsni = function spaces_inst_72_73_71_68_1_2_10_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_10_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_10_4_tsni = function replicate_inst_72_73_71_68_1_2_10_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_10_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_25_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_9_tsni = function spaces_inst_72_73_71_68_1_2_9_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_9_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_9_4_tsni = function replicate_inst_72_73_71_68_1_2_9_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_9_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_26_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_8_tsni = function spaces_inst_72_73_71_68_1_2_8_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_8_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_8_4_tsni = function replicate_inst_72_73_71_68_1_2_8_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_8_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_12_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_7_tsni = function spaces_inst_72_73_71_68_1_2_7_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_7_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_7_4_tsni = function replicate_inst_72_73_71_68_1_2_7_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_7_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_24_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_6_tsni = function spaces_inst_72_73_71_68_1_2_6_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_6_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_6_4_tsni = function replicate_inst_72_73_71_68_1_2_6_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_6_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_23_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_5_tsni = function spaces_inst_72_73_71_68_1_2_5_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_5_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_5_4_tsni = function replicate_inst_72_73_71_68_1_2_5_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_5_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_20_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
spaces_inst_72_73_71_68_1_2_3_tsni = function spaces_inst_72_73_71_68_1_2_3_tsni(s, y) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = logTen(s);
  tmp1 = logTen(y);
  tmp2 = tmp - tmp1;
  tmp3 = tmp2 + 1;
  return replicate_inst_72_73_71_68_1_2_3_4_tsni(tmp3, " ")
};
replicate_inst_72_73_71_68_1_2_3_4_tsni = function replicate_inst_72_73_71_68_1_2_3_4_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_73_71_68_1_2_3_4_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_73_71_68_1_2_22_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
append_inst_72_73_71_68_1_2_21_tsni = function append_inst_72_73_71_68_1_2_21_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_21_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_14_tsni = function append_inst_72_73_71_68_1_2_14_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_14_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_16_tsni = function append_inst_72_73_71_68_1_2_16_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_16_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_11_tsni = function append_inst_72_73_71_68_1_2_11_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_11_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_15_tsni = function append_inst_72_73_71_68_1_2_15_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_15_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_13_tsni = function append_inst_72_73_71_68_1_2_13_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_13_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_20_tsni = function append_inst_72_73_71_68_1_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_12_tsni = function append_inst_72_73_71_68_1_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_18_tsni = function append_inst_72_73_71_68_1_2_18_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_18_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_19_tsni = function append_inst_72_73_71_68_1_2_19_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_19_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_17_tsni = function append_inst_72_73_71_68_1_2_17_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_1_2_17_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_72_73_71_68_74_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_1_2_23_tsni = function append_inst_72_73_71_68_1_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_24_tsni = function append_inst_72_73_71_68_1_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_26_tsni = function append_inst_72_73_71_68_1_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_22_tsni = function append_inst_72_73_71_68_1_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_1_2_25_tsni = function append_inst_72_73_71_68_1_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_72_73_71_69_tsni = function take_lz_inst_72_73_71_69_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return () => {
      return match_xs_arm_Nil_inst_72_73_71_68_tsni()
    }
  }
};
append_inst_72_73_71_68_74_tsni = function append_inst_72_73_71_68_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_72_73_71_68_75_tsni = function append_inst_72_73_71_68_75_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_75_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_72_79_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_76_tsni = function append_inst_72_73_71_68_76_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_76_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_72_79_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_72_73_71_68_77_tsni = function append_inst_72_73_71_68_77_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_72_73_71_68_77_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return () => {
      return match_ls_arm_Cons_inst_72_79_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_0_74_tsni = function append_inst_0_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_31_32_33_45_tsni = function lscomp$_inst_31_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_34_35_32_33_45_tsni = function lscomp$_inst_34_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_36_37_45_tsni = function lscomp$_inst_36_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_38_37_45_tsni = function lscomp$_inst_38_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_39_37_45_tsni = function lscomp$_inst_39_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_40_22_tsni = function append_inst_40_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_20_tsni = function append_inst_40_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_23_tsni = function append_inst_40_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_24_tsni = function append_inst_40_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_12_tsni = function append_inst_40_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_26_tsni = function append_inst_40_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_40_25_tsni = function append_inst_40_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_41_45_tsni = function lscomp$_inst_41_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_42_33_45_tsni = function lscomp$_inst_42_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
map_inst_43_49_tsni = function map_inst_43_49_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp$_inst_46_48_37_45_tsni = function lscomp$_inst_46_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_50_51_48_37_45_tsni = function lscomp$_inst_50_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_50_78_tsni = function lscomp_inst_50_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_53_54_35_32_33_45_tsni = function lscomp$_inst_53_54_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_53_55_51_48_37_45_tsni = function lscomp$_inst_53_55_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_53_55_78_tsni = function lscomp_inst_53_55_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_53_56_48_37_45_tsni = function lscomp$_inst_53_56_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_57_2_25_tsni = function append_inst_57_2_25_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_26_tsni = function append_inst_57_2_26_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_12_tsni = function append_inst_57_2_12_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_24_tsni = function append_inst_57_2_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_23_tsni = function append_inst_57_2_23_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_20_tsni = function append_inst_57_2_20_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_57_2_22_tsni = function append_inst_57_2_22_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_61_62_56_48_37_45_tsni = function lscomp$_inst_61_62_56_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_61_62_55_51_48_37_45_tsni = function lscomp$_inst_61_62_55_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_61_62_55_78_tsni = function lscomp_inst_61_62_55_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_61_62_54_35_32_33_45_tsni = function lscomp$_inst_61_62_54_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_63_65_62_54_35_32_33_45_tsni = function lscomp$_inst_63_65_62_54_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_63_65_62_55_51_48_37_45_tsni = function lscomp$_inst_63_65_62_55_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_63_65_62_55_78_tsni = function lscomp_inst_63_65_62_55_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_63_65_62_56_48_37_45_tsni = function lscomp$_inst_63_65_62_56_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
append_inst_63_68_74_tsni = function append_inst_63_68_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_71_68_74_tsni = function append_inst_70_71_68_74_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lscomp$_inst_70_71_65_62_56_48_37_45_tsni = function lscomp$_inst_70_71_65_62_56_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni = function lscomp$_inst_70_71_65_62_55_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_70_71_65_62_55_78_tsni = function lscomp_inst_70_71_65_62_55_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni = function lscomp$_inst_70_71_65_62_54_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni = function lscomp$_inst_72_73_71_65_62_54_35_32_33_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni = function lscomp$_inst_72_73_71_65_62_55_51_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
lscomp_inst_72_73_71_65_62_55_78_tsni = function lscomp_inst_72_73_71_65_62_55_78_tsni(ls) {
  let scrut;
  scrut = NofibPrelude.force(ls);
  return runtime.safeCall(scrut())
};
lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni = function lscomp$_inst_72_73_71_65_62_56_48_37_45_tsni(board, ls) {
  return runtime.safeCall(ls(board))
};
nofibListToString_inst_72_79_tsni = function nofibListToString_inst_72_79_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda$17 = function lambda$(b) {
  return b
};
lambda27 = (undefined, function (b) {
  return () => {
    return lambda$17(b)
  }
});
lambda26 = (undefined, function (a, b) {
  let tmp, lambda$this;
  tmp = knights1.myIsDigit(a);
  lambda$this = runtime.safeCall(lambda27(b));
  return runtime.short_and(tmp, lambda$this)
});
all_digits = function all_digits(s) {
  return NofibPrelude.foldr(lambda26, true, s)
};
lambda$16 = function lambda$(b) {
  return b
};
lambda30 = (undefined, function (b) {
  return () => {
    return lambda$16(b)
  }
});
lambda29 = (undefined, function (a, b) {
  let tmp, lambda$this;
  tmp = all_digits(a);
  lambda$this = runtime.safeCall(lambda30(b));
  return runtime.short_and(tmp, lambda$this)
});
lambda$15 = function lambda$(ss) {
  return NofibPrelude.foldr(lambda29, true, ss)
};
lambda28 = (undefined, function (ss) {
  return () => {
    return lambda$15(ss)
  }
});
argsOk = function argsOk(ss) {
  let tmp, tmp1, lambda$this;
  tmp = NofibPrelude.listLen(ss);
  tmp1 = tmp === 2;
  lambda$this = runtime.safeCall(lambda28(ss));
  return runtime.short_and(tmp1, lambda$this)
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pp = function pp(xs) {
  let param0, param1, first1, first0, x, y, xs1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8;
  if (xs instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      xs1 = param1;
      tmp = NofibPrelude.nofibStringToList("\nKnights tour with ");
      tmp1 = NofibPrelude.stringOfInt(x);
      tmp2 = NofibPrelude.nofibStringToList(tmp1);
      tmp3 = NofibPrelude.nofibStringToList(" backtracking moves\n");
      tmp4 = showChessSet_inst_0_1_tsni(y);
      tmp5 = pp(xs1);
      tmp6 = append_inst_0_74_tsni(tmp4, tmp5);
      tmp7 = NofibPrelude.append(tmp3, tmp6);
      tmp8 = NofibPrelude.append(tmp2, tmp7);
      return NofibPrelude.append(tmp, tmp8)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda25 = (undefined, function (x) {
  return strToInt(0, x)
});
lambda23 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$14 = function lambda$(q, growFn, finFn) {
  let tmp, tmp1, tmp2;
  tmp = knights1.inquireFront_lz(q);
  tmp1 = knights1.removeFront_lz(q);
  tmp2 = knights1.depthSearch(tmp1, growFn, finFn);
  return NofibPrelude.LzCons(tmp, tmp2)
};
lambda24 = (undefined, function (q, growFn, finFn) {
  return () => {
    return lambda$14(q, growFn, finFn)
  }
});
lambda20 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$13 = function lambda$(sze, h1, t1, h2, t2) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    h1,
    h2
  ]);
  tmp = lscomp2$2(sze, h1, t1, t2);
  return NofibPrelude.LzCons(arr, tmp)
};
lambda21 = (undefined, function (sze, h1, t1, h2, t2) {
  return () => {
    return lambda$13(sze, h1, t1, h2, t2)
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
    tmp = runtime.safeCall(lambda21(sze, h1, t1, h2, t2));
    return NofibPrelude.lazy(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
    return NofibPrelude.lazy(lambda20)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h1 = param0;
    t1 = param1;
    tmp = enumFromTo_inst_27_28_tsni(1, sze);
    return lscomp2$_inst_27_tsni(sze, h1, t1, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp12 = function lscomp1(sze) {
  return (ls) => {
    return lscomp1$_inst_29_30_tsni(sze, ls)
  }
};
lambda22 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$12 = function lambda$(board) {
  let tmp, tmp1;
  tmp = knights1.firstPiece(board);
  tmp1 = knights1.addPiece(tmp, board);
  return deadEnd_inst_31_32_tsni(tmp1)
};
lambda15 = (undefined, function (board) {
  return () => {
    return lambda$_inst_34_35_tsni(board)
  }
});
lambda16 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda18 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$11 = function lambda$(h) {
  let tmp;
  tmp = NofibPrelude.lazy(lambda18);
  return NofibPrelude.LzCons(h, tmp)
};
lambda17 = (undefined, function (h) {
  return () => {
    return lambda$11(h)
  }
});
lambda19 = (undefined, function () {
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
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda13 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$10 = function lambda$(x, t) {
  let tmp, tmp1, tmp2, arr, tmp3;
  tmp = knights1.deleteFirst(x);
  tmp1 = possibleMoves_inst_36_37_tsni(tmp);
  tmp2 = NofibPrelude.listLen(tmp1);
  arr = globalThis.Object.freeze([
    tmp2,
    x
  ]);
  tmp3 = lscomp_inst_36_tsni(t);
  return NofibPrelude.LzCons(arr, tmp3)
};
lambda14 = (undefined, function (x, t) {
  return () => {
    return lambda$_inst_38_tsni(x, t)
  }
});
lscomp3 = function lscomp(ls) {
  let param0, param1, x, t, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.lazy(lambda13)
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    x = param0;
    t = param1;
    tmp = runtime.safeCall(lambda_inst_39_tsni(x, t));
    return NofibPrelude.lazy(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$9 = function lambda$(board, b) {
  return knights1.moveKnight(board, b)
};
lambda12 = (undefined, function (board) {
  return (b) => {
    return lambda$9(board, b)
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(board) {
  return (ls) => {
    return lscomp$(board, ls)
  }
};
lambda$8 = function lambda$(board) {
  return knights1.canJumpFirst(board)
};
lambda11 = (undefined, function (board) {
  return () => {
    return lambda$8(board)
  }
});
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
    throw globalThis.Error("Tile not used")
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$7 = function lambda$(ts_) {
  return knights1.myLast(ts_)
};
lambda10 = (undefined, function (ts_) {
  return () => {
    return lambda$7(ts_)
  }
});
lambda$6 = function lambda$(t) {
  return t
};
lambda9 = (undefined, function (t) {
  return () => {
    return lambda$6(t)
  }
});
lambda3 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda4 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$5 = function lambda$(x, h, t) {
  let tmp;
  tmp = lscomp1$1(x, t);
  return NofibPrelude.LzCons(h, tmp)
};
lambda5 = (undefined, function (x, h, t) {
  return () => {
    return lambda$5(x, h, t)
  }
});
lscomp1$1 = function lscomp1$(x, ls) {
  let scrut, param0, param1, h, t, scrut1, lambda$this;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.lazy(lambda4)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    scrut1 = knights1.intChessSetComp(h, x);
    if (scrut1 === true) {
      lambda$this = runtime.safeCall(lambda5(x, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      return lscomp1$1(x, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp11 = function lscomp1(x) {
  return (ls) => {
    return lscomp1$1(x, ls)
  }
};
lambda6 = (undefined, function () {
  return NofibPrelude.LzNil
});
lambda$4 = function lambda$(x, h, t) {
  let tmp;
  tmp = lscomp2$1(x, t);
  return NofibPrelude.LzCons(h, tmp)
};
lambda7 = (undefined, function (x, h, t) {
  return () => {
    return lambda$4(x, h, t)
  }
});
lscomp2$1 = function lscomp2$(x, ls) {
  let scrut, param0, param1, h, t, scrut1, tmp, lambda$this;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.lazy(lambda6)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = knights1.intChessSetComp(h, x);
    scrut1 = ! tmp;
    if (scrut1 === true) {
      lambda$this = runtime.safeCall(lambda7(x, h, t));
      return NofibPrelude.lazy(lambda$this)
    } else {
      return lscomp2$1(x, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp21 = function lscomp2(x) {
  return (ls) => {
    return lscomp2$1(x, ls)
  }
};
lambda$3 = function lambda$(x, xs) {
  let tmp, tmp1;
  tmp = lscomp2$1(x, xs);
  tmp1 = knights1.quickSortIntChessSet(tmp);
  return NofibPrelude.LzCons(x, tmp1)
};
lambda8 = (undefined, function (x, xs) {
  return () => {
    return lambda$3(x, xs)
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
    scrut = ! tmp;
    if (scrut === true) {
      tmp1 = lscomp2$(x, t);
      return NofibPrelude.Cons(h, tmp1)
    } else {
      return lscomp2$(x, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$2 = function lambda$(b, d) {
  return b < d
};
lambda2 = (undefined, function (b, d) {
  return () => {
    return lambda$2(b, d)
  }
});
lambda$1 = function lambda$(a, b, c, d) {
  let tmp, lambda$this;
  tmp = a === c;
  lambda$this = runtime.safeCall(lambda2(b, d));
  return runtime.short_and(tmp, lambda$this)
};
lambda1 = (undefined, function (a, b, c, d) {
  return () => {
    return lambda$1(a, b, c, d)
  }
});
lambda$ = function lambda$(c) {
  let tmp;
  tmp = runtime.safeCall(c.codePointAt(0));
  return tmp <= 57
};
lambda = (undefined, function (c) {
  return () => {
    return lambda$(c)
  }
});
(class knights {
  static {
    knights1 = knights;
    this.createQueue = NofibPrelude.Nil;
    this.Board = function Board(a, b, c, d) {
      return globalThis.Object.freeze(new Board.class(a, b, c, d));
    };
    Object.defineProperty(this.Board, "class", {
      enumerable: true,
      value: class Board {
        constructor(a, b, c, d) {
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Board", ["a", "b", "c", "d"]]; 
      }
    });
    this.Direction = class Direction {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Direction"]; 
    };
    const UL$class = class UL extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: UL
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UL"]; 
    };
    this.UL = globalThis.Object.freeze(new UL$class);
    const UR$class = class UR extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: UR
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "UR"]; 
    };
    this.UR = globalThis.Object.freeze(new UR$class);
    const DL$class = class DL extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: DL
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DL"]; 
    };
    this.DL = globalThis.Object.freeze(new DL$class);
    const DR$class = class DR extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: DR
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "DR"]; 
    };
    this.DR = globalThis.Object.freeze(new DR$class);
    const LU$class = class LU extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LU
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LU"]; 
    };
    this.LU = globalThis.Object.freeze(new LU$class);
    const LD$class = class LD extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: LD
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "LD"]; 
    };
    this.LD = globalThis.Object.freeze(new LD$class);
    const RU$class = class RU extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: RU
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RU"]; 
    };
    this.RU = globalThis.Object.freeze(new RU$class);
    const RD$class = class RD extends knights.Direction {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: RD
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "RD"]; 
    };
    this.RD = globalThis.Object.freeze(new RD$class);
  }
  static myIsDigit(c) {
    let tmp, tmp1, lambda$this;
    tmp = runtime.safeCall(c.codePointAt(0));
    tmp1 = tmp >= 48;
    lambda$this = runtime.safeCall(lambda(c));
    return runtime.short_and(tmp1, lambda$this)
  } 
  static intintComp(a_b, c_d) {
    let first1, first0, a, b, first11, first01, c, d, tmp, lambda$this;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      first0 = runtime.Tuple.get(a_b, 0);
      first1 = runtime.Tuple.get(a_b, 1);
      a = first0;
      b = first1;
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        first01 = runtime.Tuple.get(c_d, 0);
        first11 = runtime.Tuple.get(c_d, 1);
        c = first01;
        d = first11;
        tmp = a < c;
        lambda$this = runtime.safeCall(lambda1(a, b, c, d));
        return runtime.short_or(tmp, lambda$this)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static intChessSetComp(a_b, c_d) {
    let first1, first0, a, b, first11, first01, c, d;
    if (runtime.Tuple.isArrayLike(a_b) && a_b.length === 2) {
      first0 = runtime.Tuple.get(a_b, 0);
      first1 = runtime.Tuple.get(a_b, 1);
      a = first0;
      b = first1;
      if (runtime.Tuple.isArrayLike(c_d) && c_d.length === 2) {
        first01 = runtime.Tuple.get(c_d, 0);
        first11 = runtime.Tuple.get(c_d, 1);
        c = first01;
        d = first11;
        return a < c
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static myLast(a_t) {
    let param0, param1, a, t;
    if (a_t instanceof NofibPrelude.Cons.class) {
      param0 = a_t.head;
      param1 = a_t.tail;
      a = param0;
      t = param1;
      return go(a, t)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static quickSortIntChessSet(xs) {
    let scrut, param0, param1, x, xs1, tmp, tmp1, tmp2, tmp3;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return NofibPrelude.lazy(lambda3)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      xs1 = param1;
      tmp = lscomp1$1(x, xs1);
      tmp1 = knights.quickSortIntChessSet(tmp);
      tmp2 = runtime.safeCall(lambda8(x, xs1));
      tmp3 = NofibPrelude.lazy(tmp2);
      return NofibPrelude.append_lz_lz(tmp1, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static sizeQueue(xs) {
    return NofibPrelude.listLen(xs)
  } 
  static emptyQueue(x) {
    return NofibPrelude.listEq(x, NofibPrelude.Nil)
  } 
  static removeBack(xs) {
    let param0, param1, x, xs1, x1, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        x = param0;
        xs1 = param1;
        tmp = knights.removeBack(xs1);
        return NofibPrelude.Cons(x, tmp)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static removeFront(xs) {
    let param0, param1, h, t;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static inquireBack(xs) {
    let param0, param1, x, xs1, x1;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return x1
      } else {
        x = param0;
        xs1 = param1;
        return knights.inquireBack(xs1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static inquireFront(h_t) {
    return NofibPrelude.head(h_t)
  } 
  static addAllBack(list, q) {
    return NofibPrelude.append(q, list)
  } 
  static addAllFront(list, q) {
    return NofibPrelude.append(list, q)
  } 
  static addBack(x, q) {
    let tmp;
    tmp = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return NofibPrelude.append(q, tmp)
  } 
  static addFront(x, q) {
    return NofibPrelude.Cons(x, q)
  } 
  static createBoard(x, t) {
    let tmp, tmp1, lambda$this;
    lambda$this = runtime.safeCall(lambda9(t));
    tmp = NofibPrelude.lazy(lambda$this);
    tmp1 = NofibPrelude.Cons(t, NofibPrelude.Nil);
    return runtime.safeCall(knights.Board(x, 1, tmp, tmp1))
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static noPieces(b) {
    let param0, param1, param2, param3, n;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      n = param1;
      return n
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addPiece(t, b) {
    let param0, param1, param2, param3, s, n, f, ts, tmp, tmp1;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = n + 1;
      tmp1 = NofibPrelude.Cons(t, ts);
      return runtime.safeCall(knights.Board(s, tmp, f, tmp1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static deleteFirst(b) {
    let param0, param1, param2, param3, s, n, f, ts, ts_, tmp, tmp1, tmp2, lambda$this;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      s = param0;
      n = param1;
      f = param2;
      ts = param3;
      tmp = knights.myInit(ts);
      ts_ = tmp;
      tmp1 = n - 1;
      lambda$this = runtime.safeCall(lambda10(ts_));
      tmp2 = NofibPrelude.lazy(lambda$this);
      return runtime.safeCall(knights.Board(s, tmp1, tmp2, ts_))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static positionPiece(x, b) {
    let param0, param1, param2, param3, n, ts, tmp;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      n = param1;
      ts = param3;
      tmp = n - x;
      return NofibPrelude.atIndex(tmp, ts)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static lastPiece(b) {
    let param0, param1, param2, param3, param01, param11, t, ts;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      if (param3 instanceof NofibPrelude.Cons.class) {
        param01 = param3.head;
        param11 = param3.tail;
        t = param01;
        ts = param11;
        return t
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static firstPiece(b) {
    let param0, param1, param2, param3, f;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      f = param2;
      return NofibPrelude.force(f)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static pieceAtTile(x, b) {
    let param0, param1, param2, param3, ts;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      ts = param3;
      return find(x, ts)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static tup2InList(y, xs) {
    let param0, param1, x, xs1, scrut;
    if (xs instanceof NofibPrelude.Nil.class) {
      return false
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      x = param0;
      xs1 = param1;
      scrut = NofibPrelude.eqTup2(y, x);
      if (scrut === true) {
        return true
      } else {
        return knights.tup2InList(y, xs1)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static isSquareFree(x, b) {
    let param0, param1, param2, param3, ts, tmp;
    if (b instanceof knights.Board.class) {
      param0 = b.a;
      param1 = b.b;
      param2 = b.c;
      param3 = b.d;
      ts = param3;
      tmp = knights.tup2InList(x, ts);
      return ! tmp
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static assignMoveNo(t, size, z) {
    let param0, param1, first1, first0, x, y, t1, tmp, tmp1, tmp2, arr, tmp3, tmp4;
    if (t instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x = first0;
        y = first1;
        t1 = param1;
        tmp = y - 1;
        tmp1 = tmp * size;
        tmp2 = tmp1 + x;
        arr = globalThis.Object.freeze([
          tmp2,
          z
        ]);
        tmp3 = z - 1;
        tmp4 = knights.assignMoveNo(t1, size, tmp3);
        return NofibPrelude.Cons(arr, tmp4)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static spaces(s, y) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = logTen(s);
    tmp1 = logTen(y);
    tmp2 = tmp - tmp1;
    tmp3 = tmp2 + 1;
    return NofibPrelude.replicate(tmp3, " ")
  } 
  static printBoard(s, n, xs) {
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
          tmp3 = spaces_inst_40_3_tsni(tmp2, 1);
          tmp4 = n + 1;
          tmp5 = knights.printBoard(s, tmp4, NofibPrelude.Nil);
          tmp6 = append_inst_40_22_tsni(tmp3, tmp5);
          return NofibPrelude.Cons("*", tmp6)
        } else {
          tmp7 = NofibPrelude.intMod(n, s);
          scrut6 = tmp7 === 0;
          if (scrut6 === true) {
            tmp8 = NofibPrelude.nofibStringToList("*\n");
            tmp9 = n + 1;
            tmp10 = knights.printBoard(s, tmp9, NofibPrelude.Nil);
            return NofibPrelude.append(tmp8, tmp10)
          } else {
            throw globalThis.Error("printBoard empty list error")
          }
        }
      }
    } else if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
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
            tmp16 = knights.printBoard(s, tmp15, xs1);
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
                tmp22 = spaces_inst_40_5_tsni(tmp21, j);
                tmp23 = n + 1;
                tmp24 = knights.printBoard(s, tmp23, xs1);
                tmp25 = append_inst_40_20_tsni(tmp22, tmp24);
                return NofibPrelude.append(tmp20, tmp25)
              } else {
                tmp26 = NofibPrelude.intMod(n, s);
                scrut1 = tmp26 != 0;
                if (scrut1 === true) {
                  tmp27 = s * s;
                  tmp28 = spaces_inst_40_6_tsni(tmp27, 1);
                  tmp29 = n + 1;
                  arr = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp30 = NofibPrelude.Cons(arr, xs1);
                  tmp31 = knights.printBoard(s, tmp29, tmp30);
                  tmp32 = append_inst_40_23_tsni(tmp28, tmp31);
                  return NofibPrelude.Cons("*", tmp32)
                } else {
                  tmp33 = NofibPrelude.intMod(n, s);
                  scrut = tmp33 === 0;
                  if (scrut === true) {
                    tmp34 = NofibPrelude.nofibStringToList("*\n");
                    tmp35 = n + 1;
                    arr1 = globalThis.Object.freeze([
                      i,
                      j
                    ]);
                    tmp36 = NofibPrelude.Cons(arr1, xs1);
                    tmp37 = knights.printBoard(s, tmp35, tmp36);
                    return NofibPrelude.append(tmp34, tmp37)
                  } else {
                    throw globalThis.Error("printBoard non-empty list error")
                  }
                }
              }
            } else {
              tmp38 = NofibPrelude.intMod(n, s);
              scrut1 = tmp38 != 0;
              if (scrut1 === true) {
                tmp39 = s * s;
                tmp40 = spaces_inst_40_7_tsni(tmp39, 1);
                tmp41 = n + 1;
                arr2 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp42 = NofibPrelude.Cons(arr2, xs1);
                tmp43 = knights.printBoard(s, tmp41, tmp42);
                tmp44 = append_inst_40_24_tsni(tmp40, tmp43);
                return NofibPrelude.Cons("*", tmp44)
              } else {
                tmp45 = NofibPrelude.intMod(n, s);
                scrut = tmp45 === 0;
                if (scrut === true) {
                  tmp46 = NofibPrelude.nofibStringToList("*\n");
                  tmp47 = n + 1;
                  arr3 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp48 = NofibPrelude.Cons(arr3, xs1);
                  tmp49 = knights.printBoard(s, tmp47, tmp48);
                  return NofibPrelude.append(tmp46, tmp49)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
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
              tmp54 = spaces_inst_40_8_tsni(tmp53, j);
              tmp55 = n + 1;
              tmp56 = knights.printBoard(s, tmp55, xs1);
              tmp57 = append_inst_40_12_tsni(tmp54, tmp56);
              return NofibPrelude.append(tmp52, tmp57)
            } else {
              tmp58 = NofibPrelude.intMod(n, s);
              scrut1 = tmp58 != 0;
              if (scrut1 === true) {
                tmp59 = s * s;
                tmp60 = spaces_inst_40_9_tsni(tmp59, 1);
                tmp61 = n + 1;
                arr4 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp62 = NofibPrelude.Cons(arr4, xs1);
                tmp63 = knights.printBoard(s, tmp61, tmp62);
                tmp64 = append_inst_40_26_tsni(tmp60, tmp63);
                return NofibPrelude.Cons("*", tmp64)
              } else {
                tmp65 = NofibPrelude.intMod(n, s);
                scrut = tmp65 === 0;
                if (scrut === true) {
                  tmp66 = NofibPrelude.nofibStringToList("*\n");
                  tmp67 = n + 1;
                  arr5 = globalThis.Object.freeze([
                    i,
                    j
                  ]);
                  tmp68 = NofibPrelude.Cons(arr5, xs1);
                  tmp69 = knights.printBoard(s, tmp67, tmp68);
                  return NofibPrelude.append(tmp66, tmp69)
                } else {
                  throw globalThis.Error("printBoard non-empty list error")
                }
              }
            }
          } else {
            tmp70 = NofibPrelude.intMod(n, s);
            scrut1 = tmp70 != 0;
            if (scrut1 === true) {
              tmp71 = s * s;
              tmp72 = spaces_inst_40_10_tsni(tmp71, 1);
              tmp73 = n + 1;
              arr6 = globalThis.Object.freeze([
                i,
                j
              ]);
              tmp74 = NofibPrelude.Cons(arr6, xs1);
              tmp75 = knights.printBoard(s, tmp73, tmp74);
              tmp76 = append_inst_40_25_tsni(tmp72, tmp75);
              return NofibPrelude.Cons("*", tmp76)
            } else {
              tmp77 = NofibPrelude.intMod(n, s);
              scrut = tmp77 === 0;
              if (scrut === true) {
                tmp78 = NofibPrelude.nofibStringToList("*\n");
                tmp79 = n + 1;
                arr7 = globalThis.Object.freeze([
                  i,
                  j
                ]);
                tmp80 = NofibPrelude.Cons(arr7, xs1);
                tmp81 = knights.printBoard(s, tmp79, tmp80);
                return NofibPrelude.append(tmp78, tmp81)
              } else {
                throw globalThis.Error("printBoard non-empty list error")
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
  static move(d, x_y) {
    let first1, first0, x, y, tmp, tmp1, arr, tmp2, tmp3, arr1, tmp4, tmp5, arr2, tmp6, tmp7, arr3, tmp8, tmp9, arr4, tmp10, tmp11, arr5, tmp12, tmp13, arr6, tmp14, tmp15, arr7;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      if (d instanceof knights.UL.class) {
        tmp = x - 1;
        tmp1 = y - 2;
        arr = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        return arr
      } else if (d instanceof knights.UR.class) {
        tmp2 = x + 1;
        tmp3 = y - 2;
        arr1 = globalThis.Object.freeze([
          tmp2,
          tmp3
        ]);
        return arr1
      } else if (d instanceof knights.DL.class) {
        tmp4 = x - 1;
        tmp5 = y + 2;
        arr2 = globalThis.Object.freeze([
          tmp4,
          tmp5
        ]);
        return arr2
      } else if (d instanceof knights.DR.class) {
        tmp6 = x + 1;
        tmp7 = y + 2;
        arr3 = globalThis.Object.freeze([
          tmp6,
          tmp7
        ]);
        return arr3
      } else if (d instanceof knights.LU.class) {
        tmp8 = x - 2;
        tmp9 = y - 1;
        arr4 = globalThis.Object.freeze([
          tmp8,
          tmp9
        ]);
        return arr4
      } else if (d instanceof knights.LD.class) {
        tmp10 = x - 2;
        tmp11 = y + 1;
        arr5 = globalThis.Object.freeze([
          tmp10,
          tmp11
        ]);
        return arr5
      } else if (d instanceof knights.RU.class) {
        tmp12 = x + 2;
        tmp13 = y - 1;
        arr6 = globalThis.Object.freeze([
          tmp12,
          tmp13
        ]);
        return arr6
      } else if (d instanceof knights.RD.class) {
        tmp14 = x + 2;
        tmp15 = y + 1;
        arr7 = globalThis.Object.freeze([
          tmp14,
          tmp15
        ]);
        return arr7
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static startTour(st, size) {
    let scrut, tmp;
    tmp = NofibPrelude.intMod(size, 2);
    scrut = tmp === 0;
    if (scrut === true) {
      return knights.createBoard(size, st)
    } else {
      throw globalThis.Error("Tour doesnt exist for odd size board")
    }
  } 
  static moveKnight(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.addPiece(tmp1, board)
  } 
  static canMoveTo(x_y, board) {
    let first1, first0, x, y, sze, res, scrut, scrut1, scrut2, scrut3, scrut4, tmp, tmp1;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      tmp = knights.sizeBoard(board);
      sze = tmp;
      scrut = x >= 1;
      if (scrut === true) {
        scrut1 = x <= sze;
        if (scrut1 === true) {
          scrut2 = y >= 1;
          if (scrut2 === true) {
            scrut3 = y <= sze;
            if (scrut3 === true) {
              scrut4 = knights.isSquareFree(x_y, board);
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
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static canMove(board, dir) {
    let tmp, tmp1;
    tmp = knights.lastPiece(board);
    tmp1 = knights.move(dir, tmp);
    return knights.canMoveTo(tmp1, board)
  } 
  static canJumpFirst(board) {
    let tmp, tmp1;
    tmp = knights.firstPiece(board);
    tmp1 = knights.deleteFirst(board);
    return knights.canMoveTo(tmp, tmp1)
  } 
  static tourFinished(board) {
    let sze, tmp, tmp1, tmp2, tmp3, lambda$this;
    tmp = knights.sizeBoard(board);
    sze = tmp;
    tmp1 = knights.noPieces(board);
    tmp2 = sze * sze;
    tmp3 = tmp1 === tmp2;
    lambda$this = runtime.safeCall(lambda11(board));
    return runtime.short_and(tmp3, lambda$this)
  } 
  static possibleMoves(board) {
    let res, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7;
    _deforest_Cons_head7 = knights.RD;
    _deforest_Cons_tail7 = (board1) => {
      return NofibPrelude.Nil
    };
    tmp = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = knights.RU;
    _deforest_Cons_tail6 = tmp;
    tmp1 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = knights.LD;
    _deforest_Cons_tail5 = tmp1;
    tmp2 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = knights.LU;
    _deforest_Cons_tail4 = tmp2;
    tmp3 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = knights.DR;
    _deforest_Cons_tail3 = tmp3;
    tmp4 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = knights.DL;
    _deforest_Cons_tail2 = tmp4;
    tmp5 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = knights.UR;
    _deforest_Cons_tail1 = tmp5;
    tmp6 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = knights.UL;
    _deforest_Cons_tail = tmp6;
    tmp7 = (board1) => {
      return match_ls_arm_Cons_inst_41_45_tsni(board1, _deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp8 = lscomp$_inst_41_45_tsni(board, tmp7);
    res = tmp8;
    return res
  } 
  static deadEnd(board) {
    let tmp, tmp1;
    tmp = possibleMoves_inst_42_33_tsni(board);
    tmp1 = NofibPrelude.listLen(tmp);
    return tmp1 === 0
  } 
  static allDescend(board) {
    let tmp, lambda$this;
    tmp = possibleMoves_inst_43_44_tsni(board);
    lambda$this = runtime.safeCall(lambda12(board));
    return map_inst_43_49_tsni(lambda$this, tmp)
  } 
  static descAndNo(board) {
    let tmp;
    tmp = allDescend_inst_46_47_tsni(board);
    return lscomp_inst_46_48_tsni(tmp)
  } 
  static singleDescend(board) {
    let tmp;
    tmp = descAndNo_inst_50_51_tsni(board);
    return lscomp_inst_50_78_tsni(tmp)
  } 
  static descendents(board) {
    let singles, scrut, res, scrut1, param0, param1, h, scrut2, scrut3, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, lambda$this1;
    tmp = knights.canJumpFirst(board);
    lambda$this = runtime.safeCall(lambda_inst_53_54_tsni(board));
    scrut3 = runtime.short_and(tmp, lambda$this);
    if (scrut3 === true) {
      return NofibPrelude.lazy(lambda16)
    } else {
      tmp1 = singleDescend_inst_53_55_tsni(board);
      singles = tmp1;
      tmp2 = NofibPrelude.listLen(singles);
      scrut = tmp2;
      scrut2 = scrut === 0;
      if (scrut2 === true) {
        tmp3 = descAndNo_inst_53_56_tsni(board);
        tmp4 = knights.quickSortIntChessSet(tmp3);
        tmp5 = NofibPrelude.map_lz(NofibPrelude.snd, tmp4);
      } else {
        scrut1 = scrut === 1;
        if (scrut1 === true) {
          if (singles instanceof NofibPrelude.Cons.class) {
            param0 = singles.head;
            param1 = singles.tail;
            h = param0;
            if (param1 instanceof NofibPrelude.Nil.class) {
              lambda$this1 = runtime.safeCall(lambda17(h));
              tmp6 = NofibPrelude.lazy(lambda$this1);
            } else {
              throw globalThis.Error("unreachable")
            }
          } else {
            throw globalThis.Error("unreachable")
          }
          tmp5 = tmp6;
        } else {
          tmp5 = NofibPrelude.lazy(lambda19);
        }
      }
      res = tmp5;
      return res
    }
  } 
  static showChessSet(b) {
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
      return printBoard_inst_57_2_tsni(sze, 1, sortedTrail)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static root(sze) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9;
    tmp = sze * sze;
    tmp1 = 1 - tmp;
    tmp2 = NofibPrelude.repeat(tmp1);
    tmp3 = enumFromTo_inst_58_60_tsni(1, sze);
    tmp4 = lscomp1$_inst_58_59_tsni(sze, tmp3);
    tmp5 = sze * sze;
    tmp6 = NofibPrelude.replicate_lz(tmp5, sze);
    tmp7 = NofibPrelude.zipWith_lz_lz(knights.startTour, tmp4, tmp6);
    tmp8 = NofibPrelude.zip_lz_lz(tmp2, tmp7);
    tmp9 = NofibPrelude.lazy(lambda22);
    return NofibPrelude.append_lz_lz(tmp8, tmp9)
  } 
  static grow(x_y) {
    let first1, first0, x, y, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      tmp = x + 1;
      tmp1 = NofibPrelude.repeat(tmp);
      tmp2 = descendents_inst_61_62_tsni(y);
      return NofibPrelude.zip_lz_lz(tmp1, tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static isFinished(x_y) {
    let first1, first0, x, y;
    if (runtime.Tuple.isArrayLike(x_y) && x_y.length === 2) {
      first0 = runtime.Tuple.get(x_y, 0);
      first1 = runtime.Tuple.get(x_y, 1);
      x = first0;
      y = first1;
      return knights.tourFinished(y)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static emptyQueue_lz(x) {
    let scrut;
    scrut = NofibPrelude.force(x);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return true
    } else {
      return false
    }
  } 
  static removeFront_lz(xs) {
    let scrut, param0, param1, h, t;
    scrut = NofibPrelude.force(xs);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      return t
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static inquireFront_lz(h_t) {
    let scrut, param0, param1, h, t;
    scrut = NofibPrelude.force(h_t);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      h = param0;
      t = param1;
      return h
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addAllFront_lz(list, q) {
    return NofibPrelude.append_lz_lz(list, q)
  } 
  static depthSearch(q, growFn, finFn) {
    let scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    scrut1 = knights.emptyQueue_lz(q);
    if (scrut1 === true) {
      return NofibPrelude.lazy(lambda23)
    } else {
      tmp = knights.inquireFront_lz(q);
      scrut = runtime.safeCall(finFn(tmp));
      if (scrut === true) {
        tmp1 = runtime.safeCall(lambda24(q, growFn, finFn));
        return NofibPrelude.lazy(tmp1)
      } else {
        tmp2 = knights.inquireFront_lz(q);
        tmp3 = runtime.safeCall(growFn(tmp2));
        tmp4 = knights.removeFront_lz(q);
        tmp5 = knights.addAllFront_lz(tmp3, tmp4);
        return knights.depthSearch(tmp5, growFn, finFn)
      }
    }
  } 
  static printTour(ss) {
    let scrut, param0, param1, size, param01, param11, number, tmp, tmp1, tmp2;
    scrut = NofibPrelude.map(lambda25, ss);
    if (scrut instanceof NofibPrelude.Cons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      size = param0;
      if (param1 instanceof NofibPrelude.Cons.class) {
        param01 = param1.head;
        param11 = param1.tail;
        number = param01;
        if (param11 instanceof NofibPrelude.Nil.class) {
          tmp = root_inst_63_64_tsni(size);
          tmp1 = depthSearch_inst_63_66_tsni(tmp, grow_inst_63_65_tsni, knights.isFinished);
          tmp2 = take_lz_inst_63_69_tsni(number, tmp1);
          return pp_inst_63_68_tsni(tmp2)
        } else {
          throw globalThis.Error("printTour error")
        }
      } else {
        throw globalThis.Error("printTour error")
      }
    } else {
      throw globalThis.Error("printTour error")
    }
  } 
  static testKnights_nofib(ss) {
    let usageString, scrut;
    usageString = "\nUsage: knights <board size> <no solutions> \n";
    scrut = argsOk(ss);
    if (scrut === true) {
      return printTour_inst_70_71_tsni(ss)
    } else {
      throw globalThis.Error(usageString)
    }
  } 
  static main() {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = NofibPrelude.nofibStringToList("8");
    tmp1 = NofibPrelude.nofibStringToList("1");
    tmp2 = NofibPrelude.Cons(tmp1, NofibPrelude.Nil);
    tmp3 = NofibPrelude.Cons(tmp, tmp2);
    tmp4 = testKnights_nofib_inst_72_73_tsni(tmp3);
    return nofibListToString_inst_72_79_tsni(tmp4)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "knights"]; 
});
let knights = knights1; export default knights;
