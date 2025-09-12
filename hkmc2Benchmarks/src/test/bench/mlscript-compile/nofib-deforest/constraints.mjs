const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let f1, lscomp1, next, f2, f3, lscomp2, lscomp11, lscomp21, f4, lscomp12, f5, f7, f6, lscomp13, f8, constraints1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda12, lambda13, lambda$, lambda$1, f1$, lambda$2, lambda$3, lambda$4, next$, lscomp1$, lambda$5, f2$, lambda$6, f3$, lscomp1$1, lambda$7, lscomp1$2, lscomp2$, f4$, lambda$8, lambda$9, lambda$10, try__inst_0_1_tsni, search_inst_0_1_2_tsni, mkTree_inst_0_1_2_3_tsni, next_inst_0_1_2_3_4_tsni, next$_inst_0_1_2_3_4_5_tsni, enumFromTo_inst_0_1_2_3_4_5_6_tsni, lscomp1$_inst_0_1_2_3_4_5_7_tsni, prune_inst_0_1_2_8_tsni, filterTree_inst_0_1_2_8_9_tsni, foldTree_inst_0_1_2_8_9_10_tsni, lambda_inst_0_1_2_8_9_10_tsni, lambda$_inst_0_1_2_8_9_10_tsni, map_inst_0_1_2_8_9_10_11_tsni, leaves_inst_0_1_2_12_tsni, map_inst_0_1_2_12_13_tsni, filter_inst_0_1_2_14_tsni, lambda$_inst_15_16_tsni, try__inst_15_16_1_tsni, search_inst_15_16_1_2_tsni, filter_inst_15_16_1_2_14_tsni, leaves_inst_15_16_1_2_12_tsni, map_inst_15_16_1_2_12_13_tsni, prune_inst_15_16_1_2_8_tsni, filterTree_inst_15_16_1_2_8_9_tsni, foldTree_inst_15_16_1_2_8_9_10_tsni, lambda_inst_15_16_1_2_8_9_10_tsni, lambda$_inst_15_16_1_2_8_9_10_tsni, map_inst_15_16_1_2_8_9_10_11_tsni, mkTree_inst_15_16_1_2_3_tsni, next_inst_15_16_1_2_3_4_tsni, next$_inst_15_16_1_2_3_4_5_tsni, enumFromTo_inst_15_16_1_2_3_4_5_6_tsni, lscomp1$_inst_15_16_1_2_3_4_5_7_tsni, map_inst_17_18_tsni, map_inst_19_20_tsni, cacheChecks_inst_21_tsni, lambda_inst_21_tsni, fillTable_inst_21_22_tsni, lscomp1$_inst_21_22_23_tsni, enumFromTo_inst_21_22_23_24_tsni, lscomp2$_inst_21_22_23_25_tsni, enumFromTo_inst_21_22_26_tsni, cacheChecks_inst_27_tsni, lambda$_inst_27_tsni, fillTable_inst_27_22_tsni, lscomp1$_inst_27_22_23_tsni, enumFromTo_inst_27_22_23_24_tsni, lscomp2$_inst_27_22_23_25_tsni, enumFromTo_inst_27_22_26_tsni, f5_inst_29_30_tsni, lambda$_inst_31_32_tsni, f5_inst_31_32_30_tsni, enumFromTo_inst_33_24_tsni, lscomp1$_inst_34_35_tsni, enumFromTo_inst_34_35_24_tsni, enumFromTo_inst_36_37_tsni, lscomp1$_inst_38_39_tsni, enumFromTo_inst_38_39_37_tsni, earliestInconsistency_inst_40_41_tsni, filter_inst_40_41_42_tsni, f3$_inst_43_44_tsni, earliestInconsistency_inst_43_44_41_tsni, filter_inst_43_44_41_42_tsni, earliestInconsistency_inst_45_46_tsni, filter_inst_45_46_42_tsni, f2$_inst_47_48_tsni, earliestInconsistency_inst_47_48_46_tsni, filter_inst_47_48_46_42_tsni, enumFromTo_inst_49_6_tsni, next$_inst_50_5_tsni, enumFromTo_inst_50_5_6_tsni, foldTree_inst_51_10_tsni, lambda_inst_51_10_tsni, lambda$_inst_51_10_tsni, map_inst_51_10_11_tsni, filterTree_inst_52_9_tsni, foldTree_inst_52_9_10_tsni, lambda_inst_52_9_10_tsni, lambda$_inst_52_9_10_tsni, map_inst_52_9_10_11_tsni, map_inst_53_13_tsni, next_inst_54_4_tsni, next$_inst_54_4_5_tsni, enumFromTo_inst_54_4_5_6_tsni, lscomp1$_inst_54_4_5_7_tsni, filter_inst_55_42_tsni, f2_inst_56_57_tsni, f2$_inst_56_57_48_tsni, earliestInconsistency_inst_56_57_48_46_tsni, filter_inst_56_57_48_46_42_tsni, mkTree_inst_58_59_tsni, next_inst_58_59_4_tsni, next$_inst_58_59_4_5_tsni, enumFromTo_inst_58_59_4_5_6_tsni, lscomp1$_inst_58_59_4_5_7_tsni, labelInconsistencies_inst_58_60_tsni, f2_inst_58_60_57_tsni, f2$_inst_58_60_57_48_tsni, earliestInconsistency_inst_58_60_57_48_46_tsni, filter_inst_58_60_57_48_46_42_tsni, initTree_inst_58_59_61_tsni, lambda_inst_58_59_61_tsni, lambda$_inst_58_59_61_tsni, map_inst_58_59_61_62_tsni, prune_inst_58_63_tsni, filterTree_inst_58_63_9_tsni, foldTree_inst_58_63_9_10_tsni, lambda_inst_58_63_9_10_tsni, lambda$_inst_58_63_9_10_tsni, map_inst_58_63_9_10_11_tsni, mapTree_inst_58_60_64_tsni, lambda_inst_58_60_64_tsni, lambda$_inst_58_60_64_tsni, map_inst_58_60_64_65_tsni, f1_inst_58_63_9_66_tsni, f1$_inst_58_63_9_66_67_tsni, filter_inst_58_63_9_66_67_68_tsni, leaves_inst_58_69_tsni, map_inst_58_69_13_tsni, mapTree_inst_58_70_tsni, lambda_inst_58_70_tsni, lambda$_inst_58_70_tsni, mkTree_inst_71_3_tsni, next_inst_71_3_4_tsni, next$_inst_71_3_4_5_tsni, enumFromTo_inst_71_3_4_5_6_tsni, lscomp1$_inst_71_3_4_5_7_tsni, prune_inst_71_8_tsni, filterTree_inst_71_8_9_tsni, foldTree_inst_71_8_9_10_tsni, lambda_inst_71_8_9_10_tsni, lambda$_inst_71_8_9_10_tsni, map_inst_71_8_9_10_11_tsni, leaves_inst_71_12_tsni, map_inst_71_12_13_tsni, filter_inst_71_14_tsni, f3_inst_72_73_tsni, f3$_inst_72_73_44_tsni, earliestInconsistency_inst_72_73_44_41_tsni, filter_inst_72_73_44_41_42_tsni, lscomp1$_inst_74_75_tsni, enumFromTo_inst_74_75_37_tsni, enumFromTo_inst_74_76_tsni, lscomp1$_inst_77_23_tsni, enumFromTo_inst_77_23_24_tsni, enumFromTo_inst_77_26_tsni, lscomp2$_inst_77_23_25_tsni, lambda_inst_78_79_tsni, lambda$_inst_78_79_32_tsni, f5_inst_78_79_32_30_tsni, lambda_inst_80_tsni, lambda$_inst_80_tsni, fillTable_inst_80_22_tsni, lscomp1$_inst_80_22_23_tsni, enumFromTo_inst_80_22_23_24_tsni, lscomp2$_inst_80_22_23_25_tsni, enumFromTo_inst_80_22_26_tsni, emptyTable_inst_81_82_tsni, lscomp1$_inst_81_82_75_tsni, enumFromTo_inst_81_82_75_37_tsni, enumFromTo_inst_81_82_76_tsni, cacheChecks_inst_81_83_tsni, lambda_inst_81_83_tsni, lambda$_inst_81_83_tsni, fillTable_inst_81_83_22_tsni, lscomp1$_inst_81_83_22_23_tsni, enumFromTo_inst_81_83_22_23_24_tsni, enumFromTo_inst_81_83_22_26_tsni, lscomp2$_inst_81_83_22_23_25_tsni, lookupCache_inst_81_84_tsni, lambda_inst_81_84_79_tsni, lambda$_inst_81_84_79_32_tsni, f5_inst_81_84_79_32_30_tsni, map_inst_81_83_85_tsni, mapTree_inst_81_84_86_tsni, lambda_inst_81_84_86_tsni, lambda$_inst_81_84_86_tsni, map_inst_81_84_86_65_tsni, f7_inst_87_88_tsni, map_inst_87_88_20_tsni, f6_inst_89_90_tsni, map_inst_89_90_18_tsni, bt_inst_91_92_tsni, f3_inst_91_92_73_tsni, f3$_inst_91_92_73_44_tsni, earliestInconsistency_inst_91_92_73_44_41_tsni, filter_inst_91_92_73_44_41_42_tsni, bj_inst_91_93_tsni, f6_inst_91_93_90_tsni, map_inst_91_93_90_18_tsni, mapTree_inst_91_92_94_tsni, lambda_inst_91_92_94_tsni, lambda$_inst_91_92_94_tsni, map_inst_91_92_94_65_tsni, checkComplete_inst_91_92_73_44_95_tsni, checkComplete_inst_91_92_73_44_96_tsni, bt_inst_97_98_tsni, f3_inst_97_98_73_tsni, f3$_inst_97_98_73_44_tsni, earliestInconsistency_inst_97_98_73_44_41_tsni, filter_inst_97_98_73_44_41_42_tsni, bj__inst_97_99_tsni, f7_inst_97_99_88_tsni, map_inst_97_99_88_20_tsni, mapTree_inst_97_98_94_tsni, lambda_inst_97_98_94_tsni, lambda$_inst_97_98_94_tsni, map_inst_97_98_94_65_tsni, checkComplete_inst_97_98_73_44_95_tsni, checkComplete_inst_97_98_73_44_96_tsni, emptyTable_inst_100_101_tsni, lscomp1$_inst_100_101_75_tsni, enumFromTo_inst_100_101_75_37_tsni, enumFromTo_inst_100_101_76_tsni, cacheChecks_inst_100_102_tsni, lambda_inst_100_102_tsni, lambda$_inst_100_102_tsni, fillTable_inst_100_102_22_tsni, lscomp1$_inst_100_102_22_23_tsni, enumFromTo_inst_100_102_22_23_24_tsni, enumFromTo_inst_100_102_22_26_tsni, lscomp2$_inst_100_102_22_23_25_tsni, lookupCache_inst_100_103_tsni, lambda_inst_100_103_79_tsni, lambda$_inst_100_103_79_32_tsni, f5_inst_100_103_79_32_30_tsni, map_inst_100_102_85_tsni, mapTree_inst_100_103_86_tsni, lambda_inst_100_103_86_tsni, lambda$_inst_100_103_86_tsni, map_inst_100_103_86_65_tsni, search_inst_104_2_tsni, filter_inst_104_2_14_tsni, leaves_inst_104_2_12_tsni, map_inst_104_2_12_13_tsni, prune_inst_104_2_8_tsni, filterTree_inst_104_2_8_9_tsni, foldTree_inst_104_2_8_9_10_tsni, lambda_inst_104_2_8_9_10_tsni, lambda$_inst_104_2_8_9_10_tsni, map_inst_104_2_8_9_10_11_tsni, mkTree_inst_104_2_3_tsni, next_inst_104_2_3_4_tsni, next$_inst_104_2_3_4_5_tsni, enumFromTo_inst_104_2_3_4_5_6_tsni, lscomp1$_inst_104_2_3_4_5_7_tsni, fc_inst_105_106_tsni, lookupCache_inst_105_106_103_tsni, lambda_inst_105_106_103_79_tsni, lambda$_inst_105_106_103_79_32_tsni, f5_inst_105_106_103_79_32_30_tsni, mapTree_inst_105_106_103_86_tsni, lambda_inst_105_106_103_86_tsni, lambda$_inst_105_106_103_86_tsni, map_inst_105_106_103_86_65_tsni, cacheChecks_inst_105_106_102_tsni, lambda_inst_105_106_102_tsni, lambda$_inst_105_106_102_tsni, fillTable_inst_105_106_102_22_tsni, lscomp1$_inst_105_106_102_22_23_tsni, enumFromTo_inst_105_106_102_22_23_24_tsni, lscomp2$_inst_105_106_102_22_23_25_tsni, enumFromTo_inst_105_106_102_22_26_tsni, map_inst_105_106_102_85_tsni, emptyTable_inst_105_106_101_tsni, lscomp1$_inst_105_106_101_75_tsni, enumFromTo_inst_105_106_101_75_37_tsni, enumFromTo_inst_105_106_101_76_tsni, bjbt__inst_105_107_tsni, bj__inst_105_107_99_tsni, f7_inst_105_107_99_88_tsni, map_inst_105_107_99_88_20_tsni, bt_inst_105_107_98_tsni, f3_inst_105_107_98_73_tsni, f3$_inst_105_107_98_73_44_tsni, earliestInconsistency_inst_105_107_98_73_44_41_tsni, filter_inst_105_107_98_73_44_41_42_tsni, mapTree_inst_105_107_98_94_tsni, lambda_inst_105_107_98_94_tsni, lambda$_inst_105_107_98_94_tsni, checkComplete_inst_105_107_98_73_44_96_tsni, checkComplete_inst_105_107_98_73_44_95_tsni, map_inst_105_107_98_94_65_tsni, bjbt_inst_105_108_tsni, bj_inst_105_108_93_tsni, f6_inst_105_108_93_90_tsni, map_inst_105_108_93_90_18_tsni, bt_inst_105_108_92_tsni, f3_inst_105_108_92_73_tsni, f3$_inst_105_108_92_73_44_tsni, earliestInconsistency_inst_105_108_92_73_44_41_tsni, filter_inst_105_108_92_73_44_41_42_tsni, mapTree_inst_105_108_92_94_tsni, lambda_inst_105_108_92_94_tsni, lambda$_inst_105_108_92_94_tsni, checkComplete_inst_105_108_92_73_44_96_tsni, checkComplete_inst_105_108_92_73_44_95_tsni, map_inst_105_108_92_94_65_tsni, bm_inst_105_109_tsni, lookupCache_inst_105_109_84_tsni, lambda_inst_105_109_84_79_tsni, lambda$_inst_105_109_84_79_32_tsni, f5_inst_105_109_84_79_32_30_tsni, mapTree_inst_105_109_84_86_tsni, lambda_inst_105_109_84_86_tsni, lambda$_inst_105_109_84_86_tsni, map_inst_105_109_84_86_65_tsni, cacheChecks_inst_105_109_83_tsni, lambda_inst_105_109_83_tsni, lambda$_inst_105_109_83_tsni, fillTable_inst_105_109_83_22_tsni, lscomp1$_inst_105_109_83_22_23_tsni, enumFromTo_inst_105_109_83_22_23_24_tsni, lscomp2$_inst_105_109_83_22_23_25_tsni, enumFromTo_inst_105_109_83_22_26_tsni, map_inst_105_109_83_85_tsni, emptyTable_inst_105_109_82_tsni, lscomp1$_inst_105_109_82_75_tsni, enumFromTo_inst_105_109_82_75_37_tsni, enumFromTo_inst_105_109_82_76_tsni, bt_inst_105_110_tsni, f3_inst_105_110_73_tsni, f3$_inst_105_110_73_44_tsni, earliestInconsistency_inst_105_110_73_44_41_tsni, filter_inst_105_110_73_44_41_42_tsni, lambda_inst_105_111_tsni, lambda$_inst_105_111_16_tsni, try__inst_105_111_16_1_tsni, search_inst_105_111_16_1_2_tsni, mkTree_inst_105_111_16_1_2_3_tsni, next_inst_105_111_16_1_2_3_4_tsni, next$_inst_105_111_16_1_2_3_4_5_tsni, enumFromTo_inst_105_111_16_1_2_3_4_5_6_tsni, lscomp1$_inst_105_111_16_1_2_3_4_5_7_tsni, prune_inst_105_111_16_1_2_8_tsni, filterTree_inst_105_111_16_1_2_8_9_tsni, foldTree_inst_105_111_16_1_2_8_9_10_tsni, lambda_inst_105_111_16_1_2_8_9_10_tsni, lambda$_inst_105_111_16_1_2_8_9_10_tsni, map_inst_105_111_16_1_2_8_9_10_11_tsni, leaves_inst_105_111_16_1_2_12_tsni, map_inst_105_111_16_1_2_12_13_tsni, filter_inst_105_111_16_1_2_14_tsni, testConstraints_nofib_inst_112_113_tsni, lambda_inst_112_113_111_tsni, lambda$_inst_112_113_111_16_tsni, try__inst_112_113_111_16_1_tsni, search_inst_112_113_111_16_1_2_tsni, filter_inst_112_113_111_16_1_2_14_tsni, leaves_inst_112_113_111_16_1_2_12_tsni, map_inst_112_113_111_16_1_2_12_13_tsni, prune_inst_112_113_111_16_1_2_8_tsni, filterTree_inst_112_113_111_16_1_2_8_9_tsni, foldTree_inst_112_113_111_16_1_2_8_9_10_tsni, lambda_inst_112_113_111_16_1_2_8_9_10_tsni, lambda$_inst_112_113_111_16_1_2_8_9_10_tsni, map_inst_112_113_111_16_1_2_8_9_10_11_tsni, mkTree_inst_112_113_111_16_1_2_3_tsni, next_inst_112_113_111_16_1_2_3_4_tsni, next$_inst_112_113_111_16_1_2_3_4_5_tsni, enumFromTo_inst_112_113_111_16_1_2_3_4_5_6_tsni, lscomp1$_inst_112_113_111_16_1_2_3_4_5_7_tsni, bt_inst_112_113_110_tsni, f3_inst_112_113_110_73_tsni, f3$_inst_112_113_110_73_44_tsni, earliestInconsistency_inst_112_113_110_73_44_41_tsni, filter_inst_112_113_110_73_44_41_42_tsni, bm_inst_112_113_109_tsni, emptyTable_inst_112_113_109_82_tsni, lscomp1$_inst_112_113_109_82_75_tsni, enumFromTo_inst_112_113_109_82_75_37_tsni, enumFromTo_inst_112_113_109_82_76_tsni, cacheChecks_inst_112_113_109_83_tsni, lambda_inst_112_113_109_83_tsni, lambda$_inst_112_113_109_83_tsni, fillTable_inst_112_113_109_83_22_tsni, lscomp1$_inst_112_113_109_83_22_23_tsni, enumFromTo_inst_112_113_109_83_22_23_24_tsni, enumFromTo_inst_112_113_109_83_22_26_tsni, lscomp2$_inst_112_113_109_83_22_23_25_tsni, lookupCache_inst_112_113_109_84_tsni, lambda_inst_112_113_109_84_79_tsni, lambda$_inst_112_113_109_84_79_32_tsni, f5_inst_112_113_109_84_79_32_30_tsni, map_inst_112_113_109_83_85_tsni, mapTree_inst_112_113_109_84_86_tsni, lambda_inst_112_113_109_84_86_tsni, lambda$_inst_112_113_109_84_86_tsni, map_inst_112_113_109_84_86_65_tsni, bjbt_inst_112_113_108_tsni, bt_inst_112_113_108_92_tsni, f3_inst_112_113_108_92_73_tsni, f3$_inst_112_113_108_92_73_44_tsni, earliestInconsistency_inst_112_113_108_92_73_44_41_tsni, filter_inst_112_113_108_92_73_44_41_42_tsni, bj_inst_112_113_108_93_tsni, f6_inst_112_113_108_93_90_tsni, map_inst_112_113_108_93_90_18_tsni, mapTree_inst_112_113_108_92_94_tsni, lambda_inst_112_113_108_92_94_tsni, lambda$_inst_112_113_108_92_94_tsni, map_inst_112_113_108_92_94_65_tsni, checkComplete_inst_112_113_108_92_73_44_95_tsni, checkComplete_inst_112_113_108_92_73_44_96_tsni, bjbt__inst_112_113_107_tsni, bt_inst_112_113_107_98_tsni, f3_inst_112_113_107_98_73_tsni, f3$_inst_112_113_107_98_73_44_tsni, earliestInconsistency_inst_112_113_107_98_73_44_41_tsni, filter_inst_112_113_107_98_73_44_41_42_tsni, bj__inst_112_113_107_99_tsni, f7_inst_112_113_107_99_88_tsni, map_inst_112_113_107_99_88_20_tsni, mapTree_inst_112_113_107_98_94_tsni, lambda_inst_112_113_107_98_94_tsni, lambda$_inst_112_113_107_98_94_tsni, map_inst_112_113_107_98_94_65_tsni, checkComplete_inst_112_113_107_98_73_44_95_tsni, checkComplete_inst_112_113_107_98_73_44_96_tsni, fc_inst_112_113_106_tsni, emptyTable_inst_112_113_106_101_tsni, lscomp1$_inst_112_113_106_101_75_tsni, enumFromTo_inst_112_113_106_101_75_37_tsni, enumFromTo_inst_112_113_106_101_76_tsni, cacheChecks_inst_112_113_106_102_tsni, lambda_inst_112_113_106_102_tsni, lambda$_inst_112_113_106_102_tsni, fillTable_inst_112_113_106_102_22_tsni, lscomp1$_inst_112_113_106_102_22_23_tsni, enumFromTo_inst_112_113_106_102_22_23_24_tsni, enumFromTo_inst_112_113_106_102_22_26_tsni, lscomp2$_inst_112_113_106_102_22_23_25_tsni, lookupCache_inst_112_113_106_103_tsni, lambda_inst_112_113_106_103_79_tsni, lambda$_inst_112_113_106_103_79_32_tsni, f5_inst_112_113_106_103_79_32_30_tsni, map_inst_112_113_106_102_85_tsni, mapTree_inst_112_113_106_103_86_tsni, lambda_inst_112_113_106_103_86_tsni, lambda$_inst_112_113_106_103_86_tsni, map_inst_112_113_106_103_86_65_tsni, initTree_inst_0_1_2_3_61_tsni, lambda_inst_0_1_2_3_61_tsni, lambda$_inst_0_1_2_3_61_tsni, map_inst_0_1_2_3_61_62_tsni, f1_inst_0_1_2_8_9_66_tsni, f1$_inst_0_1_2_8_9_66_67_tsni, filter_inst_0_1_2_8_9_66_67_68_tsni, concat_inst_0_1_2_12_114_tsni, map_inst_0_1_2_115_tsni, map_inst_15_16_1_2_115_tsni, concat_inst_15_16_1_2_12_114_tsni, f1_inst_15_16_1_2_8_9_66_tsni, f1$_inst_15_16_1_2_8_9_66_67_tsni, filter_inst_15_16_1_2_8_9_66_67_68_tsni, initTree_inst_15_16_1_2_3_61_tsni, lambda_inst_15_16_1_2_3_61_tsni, lambda$_inst_15_16_1_2_3_61_tsni, map_inst_15_16_1_2_3_61_62_tsni, combine_inst_17_116_tsni, combine_inst_19_117_tsni, zipWith_inst_21_22_118_tsni, lambda_inst_21_22_119_tsni, lambda$_inst_21_22_119_120_tsni, zipWith_inst_21_22_119_120_121_tsni, f4_inst_21_22_119_120_122_tsni, f4$_inst_21_22_119_120_122_123_tsni, zipWith_inst_27_22_118_tsni, lambda_inst_27_22_119_tsni, lambda$_inst_27_22_119_120_tsni, zipWith_inst_27_22_119_120_121_tsni, f4_inst_27_22_119_120_122_tsni, f4$_inst_27_22_119_120_122_123_tsni, checkComplete_inst_28_124_tsni, complete_inst_28_124_125_tsni, maxLevel_inst_28_124_125_126_tsni, checkComplete_inst_29_30_124_tsni, complete_inst_29_30_124_125_tsni, maxLevel_inst_29_30_124_125_126_tsni, checkComplete_inst_31_32_30_124_tsni, complete_inst_31_32_30_124_125_tsni, maxLevel_inst_31_32_30_124_125_126_tsni, lscomp2$_inst_33_25_tsni, lscomp2$_inst_34_35_25_tsni, lscomp2_inst_36_127_tsni, lscomp2_inst_38_39_127_tsni, lscomp1$_inst_49_7_tsni, lscomp1$_inst_50_5_7_tsni, f1_inst_51_66_tsni, f1$_inst_51_66_67_tsni, filter_inst_51_66_67_68_tsni, f1_inst_52_9_66_tsni, f1$_inst_52_9_66_67_tsni, filter_inst_52_9_66_67_68_tsni, concat_inst_53_114_tsni, initTree_inst_54_61_tsni, lambda_inst_54_61_tsni, lambda$_inst_54_61_tsni, map_inst_54_61_62_tsni, map_inst_58_70_65_tsni, concat_inst_58_69_114_tsni, initTree_inst_71_3_61_tsni, lambda_inst_71_3_61_tsni, lambda$_inst_71_3_61_tsni, map_inst_71_3_61_62_tsni, f1_inst_71_8_9_66_tsni, f1$_inst_71_8_9_66_67_tsni, filter_inst_71_8_9_66_67_68_tsni, concat_inst_71_12_114_tsni, map_inst_71_115_tsni, lscomp2_inst_74_75_127_tsni, zipWith_inst_77_118_tsni, lambda_inst_77_119_tsni, lambda$_inst_77_119_120_tsni, zipWith_inst_77_119_120_121_tsni, f4_inst_77_119_120_122_tsni, f4$_inst_77_119_120_122_123_tsni, checkComplete_inst_78_79_32_30_124_tsni, complete_inst_78_79_32_30_124_125_tsni, maxLevel_inst_78_79_32_30_124_125_126_tsni, zipWith_inst_80_22_118_tsni, lambda_inst_80_22_119_tsni, lambda$_inst_80_22_119_120_tsni, zipWith_inst_80_22_119_120_121_tsni, f4_inst_80_22_119_120_122_tsni, f4$_inst_80_22_119_120_122_123_tsni, lscomp2_inst_81_82_75_127_tsni, zipWith_inst_81_83_22_118_tsni, lambda_inst_81_83_22_119_tsni, lambda$_inst_81_83_22_119_120_tsni, zipWith_inst_81_83_22_119_120_121_tsni, f4_inst_81_83_22_119_120_122_tsni, f4$_inst_81_83_22_119_120_122_123_tsni, checkComplete_inst_81_84_79_32_30_124_tsni, complete_inst_81_84_79_32_30_124_125_tsni, maxLevel_inst_81_84_79_32_30_124_125_126_tsni, mapTree_inst_81_128_tsni, lambda_inst_81_128_tsni, lambda$_inst_81_128_tsni, fst_inst_81_129_tsni, map_inst_81_128_65_tsni, combine_inst_87_88_117_tsni, combine_inst_89_90_116_tsni, combine_inst_91_93_90_116_tsni, foldTree_inst_91_93_130_tsni, lambda_inst_91_93_130_tsni, lambda$_inst_91_93_130_tsni, map_inst_91_93_130_11_tsni, combine_inst_97_99_88_117_tsni, foldTree_inst_97_99_131_tsni, lambda_inst_97_99_131_tsni, lambda$_inst_97_99_131_tsni, map_inst_97_99_131_11_tsni, lscomp2_inst_100_101_75_127_tsni, zipWith_inst_100_102_22_118_tsni, lambda_inst_100_102_22_119_tsni, lambda$_inst_100_102_22_119_120_tsni, zipWith_inst_100_102_22_119_120_121_tsni, f4_inst_100_102_22_119_120_122_tsni, f4$_inst_100_102_22_119_120_122_123_tsni, checkComplete_inst_100_103_79_32_30_124_tsni, complete_inst_100_103_79_32_30_124_125_tsni, maxLevel_inst_100_103_79_32_30_124_125_126_tsni, domainWipeout_inst_100_132_tsni, mapTree_inst_100_132_133_tsni, lambda_inst_100_132_133_tsni, lambda$_inst_100_132_133_tsni, map_inst_100_132_133_65_tsni, f8_inst_100_132_134_tsni, map_inst_104_2_115_tsni, concat_inst_104_2_12_114_tsni, f1_inst_104_2_8_9_66_tsni, f1$_inst_104_2_8_9_66_67_tsni, filter_inst_104_2_8_9_66_67_68_tsni, initTree_inst_104_2_3_61_tsni, lambda_inst_104_2_3_61_tsni, lambda$_inst_104_2_3_61_tsni, map_inst_104_2_3_61_62_tsni, checkComplete_inst_105_106_103_79_32_30_124_tsni, complete_inst_105_106_103_79_32_30_124_125_tsni, maxLevel_inst_105_106_103_79_32_30_124_125_126_tsni, domainWipeout_inst_105_106_132_tsni, mapTree_inst_105_106_132_133_tsni, lambda_inst_105_106_132_133_tsni, lambda$_inst_105_106_132_133_tsni, f8_inst_105_106_132_134_tsni, map_inst_105_106_132_133_65_tsni, zipWith_inst_105_106_102_22_118_tsni, lambda_inst_105_106_102_22_119_tsni, lambda$_inst_105_106_102_22_119_120_tsni, zipWith_inst_105_106_102_22_119_120_121_tsni, f4_inst_105_106_102_22_119_120_122_tsni, f4$_inst_105_106_102_22_119_120_122_123_tsni, lscomp2_inst_105_106_101_75_127_tsni, combine_inst_105_107_99_88_117_tsni, foldTree_inst_105_107_99_131_tsni, lambda_inst_105_107_99_131_tsni, lambda$_inst_105_107_99_131_tsni, map_inst_105_107_99_131_11_tsni, combine_inst_105_108_93_90_116_tsni, foldTree_inst_105_108_93_130_tsni, lambda_inst_105_108_93_130_tsni, lambda$_inst_105_108_93_130_tsni, map_inst_105_108_93_130_11_tsni, checkComplete_inst_105_109_84_79_32_30_124_tsni, complete_inst_105_109_84_79_32_30_124_125_tsni, maxLevel_inst_105_109_84_79_32_30_124_125_126_tsni, mapTree_inst_105_109_128_tsni, lambda_inst_105_109_128_tsni, lambda$_inst_105_109_128_tsni, map_inst_105_109_128_65_tsni, fst_inst_105_109_129_tsni, zipWith_inst_105_109_83_22_118_tsni, lambda_inst_105_109_83_22_119_tsni, lambda$_inst_105_109_83_22_119_120_tsni, zipWith_inst_105_109_83_22_119_120_121_tsni, f4_inst_105_109_83_22_119_120_122_tsni, f4$_inst_105_109_83_22_119_120_122_123_tsni, lscomp2_inst_105_109_82_75_127_tsni, initTree_inst_105_111_16_1_2_3_61_tsni, lambda_inst_105_111_16_1_2_3_61_tsni, lambda$_inst_105_111_16_1_2_3_61_tsni, map_inst_105_111_16_1_2_3_61_62_tsni, f1_inst_105_111_16_1_2_8_9_66_tsni, f1$_inst_105_111_16_1_2_8_9_66_67_tsni, filter_inst_105_111_16_1_2_8_9_66_67_68_tsni, concat_inst_105_111_16_1_2_12_114_tsni, map_inst_105_111_16_1_2_115_tsni, map_inst_105_135_tsni, map_inst_112_113_111_16_1_2_115_tsni, concat_inst_112_113_111_16_1_2_12_114_tsni, f1_inst_112_113_111_16_1_2_8_9_66_tsni, f1$_inst_112_113_111_16_1_2_8_9_66_67_tsni, filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni, initTree_inst_112_113_111_16_1_2_3_61_tsni, lambda_inst_112_113_111_16_1_2_3_61_tsni, lambda$_inst_112_113_111_16_1_2_3_61_tsni, map_inst_112_113_111_16_1_2_3_61_62_tsni, map_inst_112_113_135_tsni, lscomp2_inst_112_113_109_82_75_127_tsni, zipWith_inst_112_113_109_83_22_118_tsni, lambda_inst_112_113_109_83_22_119_tsni, lambda$_inst_112_113_109_83_22_119_120_tsni, zipWith_inst_112_113_109_83_22_119_120_121_tsni, f4_inst_112_113_109_83_22_119_120_122_tsni, f4$_inst_112_113_109_83_22_119_120_122_123_tsni, checkComplete_inst_112_113_109_84_79_32_30_124_tsni, complete_inst_112_113_109_84_79_32_30_124_125_tsni, maxLevel_inst_112_113_109_84_79_32_30_124_125_126_tsni, mapTree_inst_112_113_109_128_tsni, lambda_inst_112_113_109_128_tsni, lambda$_inst_112_113_109_128_tsni, fst_inst_112_113_109_129_tsni, map_inst_112_113_109_128_65_tsni, combine_inst_112_113_108_93_90_116_tsni, foldTree_inst_112_113_108_93_130_tsni, lambda_inst_112_113_108_93_130_tsni, lambda$_inst_112_113_108_93_130_tsni, map_inst_112_113_108_93_130_11_tsni, combine_inst_112_113_107_99_88_117_tsni, foldTree_inst_112_113_107_99_131_tsni, lambda_inst_112_113_107_99_131_tsni, lambda$_inst_112_113_107_99_131_tsni, map_inst_112_113_107_99_131_11_tsni, lscomp2_inst_112_113_106_101_75_127_tsni, zipWith_inst_112_113_106_102_22_118_tsni, lambda_inst_112_113_106_102_22_119_tsni, lambda$_inst_112_113_106_102_22_119_120_tsni, zipWith_inst_112_113_106_102_22_119_120_121_tsni, f4_inst_112_113_106_102_22_119_120_122_tsni, f4$_inst_112_113_106_102_22_119_120_122_123_tsni, checkComplete_inst_112_113_106_103_79_32_30_124_tsni, complete_inst_112_113_106_103_79_32_30_124_125_tsni, maxLevel_inst_112_113_106_103_79_32_30_124_125_126_tsni, domainWipeout_inst_112_113_106_132_tsni, mapTree_inst_112_113_106_132_133_tsni, lambda_inst_112_113_106_132_133_tsni, lambda$_inst_112_113_106_132_133_tsni, map_inst_112_113_106_132_133_65_tsni, f8_inst_112_113_106_132_134_tsni, match_scrut_rest_inst_40_tsni, match_scrut_rest_inst_43_44_tsni, match_scrut_rest_inst_72_73_44_tsni, match_scrut_rest_inst_91_92_73_44_tsni, match_scrut_rest_inst_97_98_73_44_tsni, match_scrut_rest_inst_105_107_98_73_44_tsni, match_scrut_rest_inst_105_108_92_73_44_tsni, match_scrut_rest_inst_105_110_73_44_tsni, match_scrut_rest_inst_112_113_110_73_44_tsni, match_scrut_rest_inst_112_113_108_92_73_44_tsni, match_scrut_rest_inst_112_113_107_98_73_44_tsni, match_xs_arm_Nil_inst_0_1_2_3_61_62_tsni, match_xs_arm_Nil_inst_15_16_1_2_3_61_62_tsni, match_scrut_arm_default_inst_40_tsni, match_scrut_arm_default_inst_43_44_tsni, match_xs_arm_Nil_inst_54_61_62_tsni, match_xs_arm_Nil_inst_58_59_61_62_tsni, match_xs_arm_Nil_inst_71_3_61_62_tsni, match_scrut_arm_default_inst_72_73_44_tsni, match_x_arm_Deforest_Arr_2_inst_81_129_tsni, match_scrut_arm_default_inst_91_92_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_91_93_90_tsni, match_first1_arm_Known_inst_91_93_90_tsni, match_first1_arm_Unknown_inst_91_93_90_tsni, match_scrut_arm_default_inst_97_98_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_97_99_88_tsni, match_first1_arm_Known_inst_97_99_88_tsni, match_first1_arm_Unknown_inst_97_99_88_tsni, match_tp2_arm_Deforest_Arr_2_inst_100_132_134_tsni, match_first0_arm_Deforest_Arr_2_inst_100_132_134_tsni, match_xs_arm_Nil_inst_104_2_3_61_62_tsni, match_tp2_arm_Deforest_Arr_2_inst_105_106_132_134_tsni, match_first0_arm_Deforest_Arr_2_inst_105_106_132_134_tsni, match_scrut_arm_default_inst_105_107_98_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_105_107_99_88_tsni, match_first1_arm_Known_inst_105_107_99_88_tsni, match_first1_arm_Unknown_inst_105_107_99_88_tsni, match_scrut_arm_default_inst_105_108_92_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_105_108_93_90_tsni, match_first1_arm_Known_inst_105_108_93_90_tsni, match_first1_arm_Unknown_inst_105_108_93_90_tsni, match_x_arm_Deforest_Arr_2_inst_105_109_129_tsni, match_scrut_arm_default_inst_105_110_73_44_tsni, match_xs_arm_Nil_inst_105_111_16_1_2_3_61_62_tsni, match_xs_arm_Cons_inst_105_135_tsni, match_xs_arm_Nil_inst_112_113_111_16_1_2_3_61_62_tsni, match_xs_arm_Cons_inst_112_113_135_tsni, match_scrut_arm_default_inst_112_113_110_73_44_tsni, match_x_arm_Deforest_Arr_2_inst_112_113_109_129_tsni, match_scrut_arm_default_inst_112_113_108_92_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_112_113_108_93_90_tsni, match_first1_arm_Known_inst_112_113_108_93_90_tsni, match_first1_arm_Unknown_inst_112_113_108_93_90_tsni, match_scrut_arm_default_inst_112_113_107_98_73_44_tsni, match_tp2_arm_Deforest_Arr_2_inst_112_113_107_99_88_tsni, match_first1_arm_Known_inst_112_113_107_99_88_tsni, match_first1_arm_Unknown_inst_112_113_107_99_88_tsni, match_tp2_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni, match_first0_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni;
match_scrut_rest_inst_40_tsni = function match_scrut_rest_inst_40_tsni(s, tmp) {
  let arr;
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
match_scrut_rest_inst_43_44_tsni = function match_scrut_rest_inst_43_44_tsni(s, tmp) {
  let arr;
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
match_scrut_rest_inst_72_73_44_tsni = function match_scrut_rest_inst_72_73_44_tsni(s, tmp) {
  let arr;
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
match_scrut_rest_inst_91_92_73_44_tsni = function match_scrut_rest_inst_91_92_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_91_93_90_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_scrut_rest_inst_97_98_73_44_tsni = function match_scrut_rest_inst_97_98_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_97_99_88_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_scrut_rest_inst_105_107_98_73_44_tsni = function match_scrut_rest_inst_105_107_98_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_105_107_99_88_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_scrut_rest_inst_105_108_92_73_44_tsni = function match_scrut_rest_inst_105_108_92_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_105_108_93_90_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_scrut_rest_inst_105_110_73_44_tsni = function match_scrut_rest_inst_105_110_73_44_tsni(s, tmp) {
  let arr;
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
match_scrut_rest_inst_112_113_110_73_44_tsni = function match_scrut_rest_inst_112_113_110_73_44_tsni(s, tmp) {
  let arr;
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
match_scrut_rest_inst_112_113_108_92_73_44_tsni = function match_scrut_rest_inst_112_113_108_92_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_112_113_108_93_90_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_scrut_rest_inst_112_113_107_98_73_44_tsni = function match_scrut_rest_inst_112_113_107_98_73_44_tsni(s, tmp) {
  let arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  _deforest_Deforest_Arr_2_0 = s;
  _deforest_Deforest_Arr_2_1 = tmp;
  arr = (chs) => {
    return match_tp2_arm_Deforest_Arr_2_inst_112_113_107_99_88_tsni(chs, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
  };
  return arr
};
match_xs_arm_Nil_inst_0_1_2_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_15_16_1_2_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_scrut_arm_default_inst_40_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = constraints1.checkComplete(csp, s);
  return match_scrut_rest_inst_40_tsni(s, tmp)
});
match_scrut_arm_default_inst_43_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = constraints1.checkComplete(csp, s);
  return match_scrut_rest_inst_43_44_tsni(s, tmp)
});
match_xs_arm_Nil_inst_54_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_58_59_61_62_tsni = (undefined, function (f) {
  return (f9) => {
    return (f10) => {
      return (f11) => {
        return (f12) => {
          return NofibPrelude.Nil
        }
      }
    }
  }
});
match_xs_arm_Nil_inst_71_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_scrut_arm_default_inst_72_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = constraints1.checkComplete(csp, s);
  return match_scrut_rest_inst_72_73_44_tsni(s, tmp)
});
match_x_arm_Deforest_Arr_2_inst_81_129_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_81_129_tsni, _deforest_Deforest_Arr_2_1_inst_81_129_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_81_129_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_81_129_tsni;
  f = first0;
  s = first1;
  return f
});
match_scrut_arm_default_inst_91_92_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_91_92_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_91_92_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_91_93_90_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_91_93_90_tsni, _deforest_Deforest_Arr_2_1_inst_91_93_90_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_91_93_90_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_91_93_90_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_91_93_90_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_91_93_90_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_91_93_90_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_91_93_90_tsni = (undefined, function (chs, a, a1) {
  let tmp, tmp1, tmp2, arr;
  tmp = map_inst_91_93_90_18_tsni(constraints1.label, chs);
  tmp1 = combine_inst_91_93_90_116_tsni(tmp, NofibPrelude.Nil);
  tmp2 = constraints1.Known(tmp1);
  arr = globalThis.Object.freeze([
    a,
    tmp2
  ]);
  return constraints1.Node(arr, chs)
});
match_scrut_arm_default_inst_97_98_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_97_98_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_97_98_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_97_99_88_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_97_99_88_tsni, _deforest_Deforest_Arr_2_1_inst_97_99_88_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_97_99_88_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_97_99_88_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_97_99_88_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_97_99_88_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_97_99_88_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_97_99_88_tsni = (undefined, function (chs, a, a1) {
  let cs_, scrut, tmp, tmp1, arr, arr1;
  tmp = map_inst_97_99_88_20_tsni(constraints1.label, chs);
  tmp1 = combine_inst_97_99_88_117_tsni(tmp, NofibPrelude.Nil);
  cs_ = constraints1.Known(tmp1);
  scrut = constraints1.knownConflict(cs_);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr1, chs)
  }
});
match_tp2_arm_Deforest_Arr_2_inst_100_132_134_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_100_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_100_132_134_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_100_132_134_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_100_132_134_tsni;
  return runtime.safeCall(first0(first1))
});
match_first0_arm_Deforest_Arr_2_inst_100_132_134_tsni = (undefined, function (first1, _deforest_Deforest_Arr_2_0_inst_100_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_100_132_134_tsni) {
  let first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_100_132_134_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_100_132_134_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  tmp = lscomp13(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints1.collect(tmp2);
    tmp1 = constraints1.Known(tmp3);
  }
  cs_ = tmp1;
  arr = globalThis.Object.freeze([
    as_,
    cs_
  ]);
  return arr
});
match_xs_arm_Nil_inst_104_2_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_tp2_arm_Deforest_Arr_2_inst_105_106_132_134_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_105_106_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_105_106_132_134_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_105_106_132_134_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_105_106_132_134_tsni;
  return runtime.safeCall(first0(first1))
});
match_first0_arm_Deforest_Arr_2_inst_105_106_132_134_tsni = (undefined, function (first1, _deforest_Deforest_Arr_2_0_inst_105_106_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_105_106_132_134_tsni) {
  let first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_105_106_132_134_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_105_106_132_134_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  tmp = lscomp13(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints1.collect(tmp2);
    tmp1 = constraints1.Known(tmp3);
  }
  cs_ = tmp1;
  arr = globalThis.Object.freeze([
    as_,
    cs_
  ]);
  return arr
});
match_scrut_arm_default_inst_105_107_98_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_105_107_98_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_105_107_98_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_105_107_99_88_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_105_107_99_88_tsni, _deforest_Deforest_Arr_2_1_inst_105_107_99_88_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_105_107_99_88_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_105_107_99_88_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_105_107_99_88_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_105_107_99_88_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_105_107_99_88_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_105_107_99_88_tsni = (undefined, function (chs, a, a1) {
  let cs_, scrut, tmp, tmp1, arr, arr1;
  tmp = map_inst_105_107_99_88_20_tsni(constraints1.label, chs);
  tmp1 = combine_inst_105_107_99_88_117_tsni(tmp, NofibPrelude.Nil);
  cs_ = constraints1.Known(tmp1);
  scrut = constraints1.knownConflict(cs_);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr1, chs)
  }
});
match_scrut_arm_default_inst_105_108_92_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_105_108_92_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_105_108_92_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_105_108_93_90_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_105_108_93_90_tsni, _deforest_Deforest_Arr_2_1_inst_105_108_93_90_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_105_108_93_90_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_105_108_93_90_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_105_108_93_90_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_105_108_93_90_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_105_108_93_90_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_105_108_93_90_tsni = (undefined, function (chs, a, a1) {
  let tmp, tmp1, tmp2, arr;
  tmp = map_inst_105_108_93_90_18_tsni(constraints1.label, chs);
  tmp1 = combine_inst_105_108_93_90_116_tsni(tmp, NofibPrelude.Nil);
  tmp2 = constraints1.Known(tmp1);
  arr = globalThis.Object.freeze([
    a,
    tmp2
  ]);
  return constraints1.Node(arr, chs)
});
match_x_arm_Deforest_Arr_2_inst_105_109_129_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_105_109_129_tsni, _deforest_Deforest_Arr_2_1_inst_105_109_129_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_105_109_129_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_105_109_129_tsni;
  f = first0;
  s = first1;
  return f
});
match_scrut_arm_default_inst_105_110_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = constraints1.checkComplete(csp, s);
  return match_scrut_rest_inst_105_110_73_44_tsni(s, tmp)
});
match_xs_arm_Nil_inst_105_111_16_1_2_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_105_135_tsni = (undefined, function (f, _deforest_Cons_head_inst_105_135_tsni, _deforest_Cons_tail_inst_105_135_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_105_135_tsni;
  param1 = _deforest_Cons_tail_inst_105_135_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_105_135_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Nil_inst_112_113_111_16_1_2_3_61_62_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_112_113_135_tsni = (undefined, function (f, _deforest_Cons_head_inst_112_113_135_tsni, _deforest_Cons_tail_inst_112_113_135_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_112_113_135_tsni;
  param1 = _deforest_Cons_tail_inst_112_113_135_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_112_113_135_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_scrut_arm_default_inst_112_113_110_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = constraints1.checkComplete(csp, s);
  return match_scrut_rest_inst_112_113_110_73_44_tsni(s, tmp)
});
match_x_arm_Deforest_Arr_2_inst_112_113_109_129_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_112_113_109_129_tsni, _deforest_Deforest_Arr_2_1_inst_112_113_109_129_tsni) {
  let first1, first0, f, s;
  first0 = _deforest_Deforest_Arr_2_0_inst_112_113_109_129_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_112_113_109_129_tsni;
  f = first0;
  s = first1;
  return f
});
match_scrut_arm_default_inst_112_113_108_92_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_112_113_108_92_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_112_113_108_92_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_112_113_108_93_90_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_112_113_108_93_90_tsni, _deforest_Deforest_Arr_2_1_inst_112_113_108_93_90_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_112_113_108_93_90_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_112_113_108_93_90_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_112_113_108_93_90_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_112_113_108_93_90_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_112_113_108_93_90_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_112_113_108_93_90_tsni = (undefined, function (chs, a, a1) {
  let tmp, tmp1, tmp2, arr;
  tmp = map_inst_112_113_108_93_90_18_tsni(constraints1.label, chs);
  tmp1 = combine_inst_112_113_108_93_90_116_tsni(tmp, NofibPrelude.Nil);
  tmp2 = constraints1.Known(tmp1);
  arr = globalThis.Object.freeze([
    a,
    tmp2
  ]);
  return constraints1.Node(arr, chs)
});
match_scrut_arm_default_inst_112_113_107_98_73_44_tsni = (undefined, function (s, csp) {
  let tmp;
  tmp = checkComplete_inst_112_113_107_98_73_44_96_tsni(csp, s);
  return match_scrut_rest_inst_112_113_107_98_73_44_tsni(s, tmp)
});
match_tp2_arm_Deforest_Arr_2_inst_112_113_107_99_88_tsni = (undefined, function (chs, _deforest_Deforest_Arr_2_0_inst_112_113_107_99_88_tsni, _deforest_Deforest_Arr_2_1_inst_112_113_107_99_88_tsni) {
  let first1, first0, a, a1;
  first0 = _deforest_Deforest_Arr_2_0_inst_112_113_107_99_88_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_112_113_107_99_88_tsni;
  a1 = first0;
  a = first0;
  return runtime.safeCall(first1(chs, a, a1))
});
match_first1_arm_Known_inst_112_113_107_99_88_tsni = (undefined, function (chs, a, a1, _deforest_Known_vs_inst_112_113_107_99_88_tsni) {
  let param0, cs, tmp, arr;
  param0 = _deforest_Known_vs_inst_112_113_107_99_88_tsni;
  cs = param0;
  tmp = constraints1.Known(cs);
  arr = globalThis.Object.freeze([
    a1,
    tmp
  ]);
  return constraints1.Node(arr, chs)
});
match_first1_arm_Unknown_inst_112_113_107_99_88_tsni = (undefined, function (chs, a, a1) {
  let cs_, scrut, tmp, tmp1, arr, arr1;
  tmp = map_inst_112_113_107_99_88_20_tsni(constraints1.label, chs);
  tmp1 = combine_inst_112_113_107_99_88_117_tsni(tmp, NofibPrelude.Nil);
  cs_ = constraints1.Known(tmp1);
  scrut = constraints1.knownConflict(cs_);
  if (scrut === true) {
    arr = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr, NofibPrelude.Nil)
  } else {
    arr1 = globalThis.Object.freeze([
      a,
      cs_
    ]);
    return constraints1.Node(arr1, chs)
  }
});
match_tp2_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_112_113_106_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_112_113_106_132_134_tsni) {
  let first1, first0;
  first0 = _deforest_Deforest_Arr_2_0_inst_112_113_106_132_134_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_112_113_106_132_134_tsni;
  return runtime.safeCall(first0(first1))
});
match_first0_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni = (undefined, function (first1, _deforest_Deforest_Arr_2_0_inst_112_113_106_132_134_tsni, _deforest_Deforest_Arr_2_1_inst_112_113_106_132_134_tsni) {
  let first11, first0, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  first0 = _deforest_Deforest_Arr_2_0_inst_112_113_106_132_134_tsni;
  first11 = _deforest_Deforest_Arr_2_1_inst_112_113_106_132_134_tsni;
  as_ = first0;
  cs = first11;
  tbl = first1;
  tmp = lscomp13(tbl);
  wipedDomains = tmp;
  scrut = NofibPrelude.null_(wipedDomains);
  if (scrut === true) {
    tmp1 = cs;
  } else {
    tmp2 = NofibPrelude.head(wipedDomains);
    tmp3 = constraints1.collect(tmp2);
    tmp1 = constraints1.Known(tmp3);
  }
  cs_ = tmp1;
  arr = globalThis.Object.freeze([
    as_,
    cs_
  ]);
  return arr
});
try__inst_0_1_tsni = function try__inst_0_1_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = constraints.queens(n);
  tmp1 = search_inst_0_1_2_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_0_1_2_tsni = function search_inst_0_1_2_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = mkTree_inst_0_1_2_3_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  tmp2 = prune_inst_0_1_2_8_tsni(lambda8, tmp1);
  tmp3 = leaves_inst_0_1_2_12_tsni(tmp2);
  tmp4 = filter_inst_0_1_2_14_tsni(lambda9, tmp3);
  return map_inst_0_1_2_115_tsni(NofibPrelude.fst, tmp4)
};
mkTree_inst_0_1_2_3_tsni = function mkTree_inst_0_1_2_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_0_1_2_3_4_tsni(vars, vals));
    return initTree_inst_0_1_2_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_0_1_2_3_4_tsni = function next_inst_0_1_2_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_0_1_2_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_0_1_2_3_4_5_tsni = function next$_inst_0_1_2_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_0_1_2_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_0_1_2_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_0_1_2_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_0_1_2_3_4_5_6_tsni = function enumFromTo_inst_0_1_2_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_2_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_0_1_2_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_0_1_2_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_0_1_2_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_0_1_2_3_4_5_7_tsni = function lscomp1$_inst_0_1_2_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
prune_inst_0_1_2_8_tsni = function prune_inst_0_1_2_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_0_1_2_8_9_tsni(lambda$this, t)
};
filterTree_inst_0_1_2_8_9_tsni = function filterTree_inst_0_1_2_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_0_1_2_8_9_66_tsni(p));
  return foldTree_inst_0_1_2_8_9_10_tsni(f1$this, t)
};
foldTree_inst_0_1_2_8_9_10_tsni = function foldTree_inst_0_1_2_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_0_1_2_8_9_10_tsni(f));
    tmp = map_inst_0_1_2_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_0_1_2_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_0_1_2_8_9_10_tsni(f, x)
  }
});
lambda$_inst_0_1_2_8_9_10_tsni = function lambda$_inst_0_1_2_8_9_10_tsni(f, x) {
  return foldTree_inst_0_1_2_8_9_10_tsni(f, x)
};
map_inst_0_1_2_8_9_10_11_tsni = function map_inst_0_1_2_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_2_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_0_1_2_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_0_1_2_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_0_1_2_12_tsni = function leaves_inst_0_1_2_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_0_1_2_12_13_tsni(leaves_inst_0_1_2_12_tsni, cs);
      return concat_inst_0_1_2_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_0_1_2_12_13_tsni = function map_inst_0_1_2_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_0_1_2_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_2_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_0_1_2_14_tsni = function filter_inst_0_1_2_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_0_1_2_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_0_1_2_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_0_1_2_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_15_16_tsni = function lambda$_inst_15_16_tsni(n, x) {
  return try__inst_15_16_1_tsni(n, x)
};
try__inst_15_16_1_tsni = function try__inst_15_16_1_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = constraints.queens(n);
  tmp1 = search_inst_15_16_1_2_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_15_16_1_2_tsni = function search_inst_15_16_1_2_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = mkTree_inst_15_16_1_2_3_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  tmp2 = prune_inst_15_16_1_2_8_tsni(lambda8, tmp1);
  tmp3 = leaves_inst_15_16_1_2_12_tsni(tmp2);
  tmp4 = filter_inst_15_16_1_2_14_tsni(lambda9, tmp3);
  return map_inst_15_16_1_2_115_tsni(NofibPrelude.fst, tmp4)
};
filter_inst_15_16_1_2_14_tsni = function filter_inst_15_16_1_2_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_15_16_1_2_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_15_16_1_2_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_15_16_1_2_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_15_16_1_2_12_tsni = function leaves_inst_15_16_1_2_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_15_16_1_2_12_13_tsni(leaves_inst_15_16_1_2_12_tsni, cs);
      return concat_inst_15_16_1_2_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_15_16_1_2_12_13_tsni = function map_inst_15_16_1_2_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_1_2_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_15_16_1_2_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prune_inst_15_16_1_2_8_tsni = function prune_inst_15_16_1_2_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_15_16_1_2_8_9_tsni(lambda$this, t)
};
filterTree_inst_15_16_1_2_8_9_tsni = function filterTree_inst_15_16_1_2_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_15_16_1_2_8_9_66_tsni(p));
  return foldTree_inst_15_16_1_2_8_9_10_tsni(f1$this, t)
};
foldTree_inst_15_16_1_2_8_9_10_tsni = function foldTree_inst_15_16_1_2_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_15_16_1_2_8_9_10_tsni(f));
    tmp = map_inst_15_16_1_2_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_15_16_1_2_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_15_16_1_2_8_9_10_tsni(f, x)
  }
});
lambda$_inst_15_16_1_2_8_9_10_tsni = function lambda$_inst_15_16_1_2_8_9_10_tsni(f, x) {
  return foldTree_inst_15_16_1_2_8_9_10_tsni(f, x)
};
map_inst_15_16_1_2_8_9_10_11_tsni = function map_inst_15_16_1_2_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_15_16_1_2_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_15_16_1_2_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_15_16_1_2_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mkTree_inst_15_16_1_2_3_tsni = function mkTree_inst_15_16_1_2_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_15_16_1_2_3_4_tsni(vars, vals));
    return initTree_inst_15_16_1_2_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_15_16_1_2_3_4_tsni = function next_inst_15_16_1_2_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_15_16_1_2_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_15_16_1_2_3_4_5_tsni = function next$_inst_15_16_1_2_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_15_16_1_2_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_15_16_1_2_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_15_16_1_2_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_15_16_1_2_3_4_5_6_tsni = function enumFromTo_inst_15_16_1_2_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_15_16_1_2_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_15_16_1_2_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_15_16_1_2_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_15_16_1_2_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_15_16_1_2_3_4_5_7_tsni = function lscomp1$_inst_15_16_1_2_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
map_inst_17_18_tsni = function map_inst_17_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_17_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_17_116_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_19_20_tsni = function map_inst_19_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_19_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_19_117_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
cacheChecks_inst_21_tsni = function cacheChecks_inst_21_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    arr = globalThis.Object.freeze([
      s,
      tbl
    ]);
    tmp = runtime.safeCall(lambda_inst_21_tsni(csp, tbl, s));
    tmp1 = NofibPrelude.map(tmp, cs);
    return constraints.Node(arr, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_21_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$9(csp, tbl, s, x)
  }
});
fillTable_inst_21_22_tsni = function fillTable_inst_21_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_21_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_21_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_21_22_119_tsni(var_, val_, rel));
        return zipWith_inst_21_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_21_22_23_tsni = function lscomp1$_inst_21_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_21_22_23_24_tsni = function enumFromTo_inst_21_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_21_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_21_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_21_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_21_22_23_25_tsni = function lscomp2$_inst_21_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
enumFromTo_inst_21_22_26_tsni = function enumFromTo_inst_21_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_21_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_21_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_21_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_21_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_21_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
cacheChecks_inst_27_tsni = function cacheChecks_inst_27_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    arr = globalThis.Object.freeze([
      s,
      tbl
    ]);
    tmp = runtime.safeCall(lambda12(csp, tbl, s));
    tmp1 = NofibPrelude.map(tmp, cs);
    return constraints.Node(arr, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_27_tsni = function lambda$_inst_27_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_27_22_tsni(s, csp, tmp);
  return cacheChecks_inst_27_tsni(csp, tmp1, x)
};
fillTable_inst_27_22_tsni = function fillTable_inst_27_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_27_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_27_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_27_22_119_tsni(var_, val_, rel));
        return zipWith_inst_27_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_27_22_23_tsni = function lscomp1$_inst_27_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_27_22_23_24_tsni = function enumFromTo_inst_27_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_27_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_27_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_27_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_27_22_23_25_tsni = function lscomp2$_inst_27_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
enumFromTo_inst_27_22_26_tsni = function enumFromTo_inst_27_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_27_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_27_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_27_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_27_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_27_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
f5_inst_29_30_tsni = function f5_inst_29_30_tsni(csp, tp) {
  let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(tp) && tp.length === 2) {
    first0 = runtime.Tuple.get(tp, 0);
    first1 = runtime.Tuple.get(tp, 1);
    if (first0 instanceof NofibPrelude.Nil.class) {
      tbl1 = first1;
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        constraints1.Unknown
      ]);
      arr1 = globalThis.Object.freeze([
        arr,
        tbl1
      ]);
      return arr1
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      a = param0;
      as_ = param1;
      tbl = first1;
      tmp = constraints1.value(a);
      tmp1 = tmp - 1;
      tmp2 = NofibPrelude.head(tbl);
      tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
      tableEntry = tmp3;
      scrut = tableEntry === constraints1.Unknown;
      if (scrut === true) {
        _deforest_Cons_head = a;
        _deforest_Cons_tail = as_;
        tmp4 = () => {
          let param01, param11, param02, param12, v, t;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          if (param01 instanceof constraints.Assign.class) {
            param02 = param01.varr;
            param12 = param01.value;
            v = param02;
            t = param11;
            return v
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        };
        tmp5 = checkComplete_inst_29_30_124_tsni(csp, tmp4);
      } else {
        tmp5 = tableEntry;
      }
      cs = tmp5;
      tmp6 = NofibPrelude.Cons(a, as_);
      arr2 = globalThis.Object.freeze([
        tmp6,
        cs
      ]);
      arr3 = globalThis.Object.freeze([
        arr2,
        tbl
      ]);
      return arr3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_31_32_tsni = function lambda$_inst_31_32_tsni(csp, x) {
  return f5_inst_31_32_30_tsni(csp, x)
};
f5_inst_31_32_30_tsni = function f5_inst_31_32_30_tsni(csp, tp) {
  let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(tp) && tp.length === 2) {
    first0 = runtime.Tuple.get(tp, 0);
    first1 = runtime.Tuple.get(tp, 1);
    if (first0 instanceof NofibPrelude.Nil.class) {
      tbl1 = first1;
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        constraints1.Unknown
      ]);
      arr1 = globalThis.Object.freeze([
        arr,
        tbl1
      ]);
      return arr1
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      a = param0;
      as_ = param1;
      tbl = first1;
      tmp = constraints1.value(a);
      tmp1 = tmp - 1;
      tmp2 = NofibPrelude.head(tbl);
      tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
      tableEntry = tmp3;
      scrut = tableEntry === constraints1.Unknown;
      if (scrut === true) {
        _deforest_Cons_head = a;
        _deforest_Cons_tail = as_;
        tmp4 = () => {
          let param01, param11, param02, param12, v, t;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          if (param01 instanceof constraints.Assign.class) {
            param02 = param01.varr;
            param12 = param01.value;
            v = param02;
            t = param11;
            return v
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        };
        tmp5 = checkComplete_inst_31_32_30_124_tsni(csp, tmp4);
      } else {
        tmp5 = tableEntry;
      }
      cs = tmp5;
      tmp6 = NofibPrelude.Cons(a, as_);
      arr2 = globalThis.Object.freeze([
        tmp6,
        cs
      ]);
      arr3 = globalThis.Object.freeze([
        arr2,
        tbl
      ]);
      return arr3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
enumFromTo_inst_33_24_tsni = function enumFromTo_inst_33_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_33_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      arr = globalThis.Object.freeze([
        varrr,
        valll
      ]);
      tmp2 = lscomp2$_inst_33_25_tsni(varrr, t2);
      return NofibPrelude.Cons(arr, tmp2)
    }
  } else {
    return (varrr) => {
      return NofibPrelude.Nil
    }
  }
};
lscomp1$_inst_34_35_tsni = function lscomp1$_inst_34_35_tsni(vals, ls) {
  let param0, param1, varrr, t1, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    varrr = param0;
    t1 = param1;
    tmp = enumFromTo_inst_34_35_24_tsni(1, vals);
    tmp1 = lscomp2$_inst_34_35_25_tsni(varrr, tmp);
    tmp2 = lscomp1$_inst_34_35_tsni(vals, t1);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
enumFromTo_inst_34_35_24_tsni = function enumFromTo_inst_34_35_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_34_35_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      arr = globalThis.Object.freeze([
        varrr,
        valll
      ]);
      tmp2 = lscomp2$_inst_34_35_25_tsni(varrr, t2);
      return NofibPrelude.Cons(arr, tmp2)
    }
  } else {
    return (varrr) => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_36_37_tsni = function enumFromTo_inst_36_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_36_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_36_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
lscomp1$_inst_38_39_tsni = function lscomp1$_inst_38_39_tsni(vals, ls) {
  let param0, param1, n, t1, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    n = param0;
    t1 = param1;
    tmp = enumFromTo_inst_38_39_37_tsni(1, vals);
    tmp1 = lscomp2_inst_38_39_127_tsni(tmp);
    tmp2 = lscomp1$_inst_38_39_tsni(vals, t1);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
enumFromTo_inst_38_39_37_tsni = function enumFromTo_inst_38_39_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_38_39_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_38_39_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
earliestInconsistency_inst_40_41_tsni = function earliestInconsistency_inst_40_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_40_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_40_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_40_41_42_tsni = function filter_inst_40_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_40_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_40_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = constraints1.Known(tmp4);
          return match_scrut_rest_inst_40_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_40_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f3$_inst_43_44_tsni = function f3$_inst_43_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_43_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_43_44_41_tsni = function earliestInconsistency_inst_43_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_43_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_43_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_43_44_41_42_tsni = function filter_inst_43_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_43_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_43_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = constraints1.Known(tmp4);
          return match_scrut_rest_inst_43_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_43_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
earliestInconsistency_inst_45_46_tsni = function earliestInconsistency_inst_45_46_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_45_46_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_45_46_42_tsni = function filter_inst_45_46_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_45_46_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = globalThis.Object.freeze([
          tmp1,
          tmp2
        ]);
        return NofibPrelude.Some(arr)
      }
    } else {
      return filter_inst_45_46_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f2$_inst_47_48_tsni = function f2$_inst_47_48_tsni(csp, s) {
  let tmp, arr;
  tmp = earliestInconsistency_inst_47_48_46_tsni(csp, s);
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
earliestInconsistency_inst_47_48_46_tsni = function earliestInconsistency_inst_47_48_46_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_47_48_46_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_47_48_46_42_tsni = function filter_inst_47_48_46_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_47_48_46_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = globalThis.Object.freeze([
          tmp1,
          tmp2
        ]);
        return NofibPrelude.Some(arr)
      }
    } else {
      return filter_inst_47_48_46_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
enumFromTo_inst_49_6_tsni = function enumFromTo_inst_49_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_49_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_49_7_tsni(ss, t1);
      return NofibPrelude.Cons(tmp5, tmp6)
    }
  } else {
    return (ss) => {
      return NofibPrelude.Nil
    }
  }
};
next$_inst_50_5_tsni = function next$_inst_50_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_50_5_6_tsni(1, vals);
    return lscomp1$_inst_50_5_7_tsni(ss, tmp1)
  } else {
    return NofibPrelude.Nil
  }
};
enumFromTo_inst_50_5_6_tsni = function enumFromTo_inst_50_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_50_5_7_tsni(ss, t1);
      return NofibPrelude.Cons(tmp5, tmp6)
    }
  } else {
    return (ss) => {
      return NofibPrelude.Nil
    }
  }
};
foldTree_inst_51_10_tsni = function foldTree_inst_51_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_51_10_tsni(f));
    tmp = map_inst_51_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_51_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_51_10_tsni(f, x)
  }
});
lambda$_inst_51_10_tsni = function lambda$_inst_51_10_tsni(f, x) {
  return foldTree_inst_51_10_tsni(f, x)
};
map_inst_51_10_11_tsni = function map_inst_51_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_51_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_51_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_51_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filterTree_inst_52_9_tsni = function filterTree_inst_52_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_52_9_66_tsni(p));
  return foldTree_inst_52_9_10_tsni(f1$this, t)
};
foldTree_inst_52_9_10_tsni = function foldTree_inst_52_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_52_9_10_tsni(f));
    tmp = map_inst_52_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_52_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_52_9_10_tsni(f, x)
  }
});
lambda$_inst_52_9_10_tsni = function lambda$_inst_52_9_10_tsni(f, x) {
  return foldTree_inst_52_9_10_tsni(f, x)
};
map_inst_52_9_10_11_tsni = function map_inst_52_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_52_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_52_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_52_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_53_13_tsni = function map_inst_53_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_53_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_53_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_54_4_tsni = function next_inst_54_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_54_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_54_4_5_tsni = function next$_inst_54_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_54_4_5_6_tsni(1, vals);
    return lscomp1$_inst_54_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_54_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_54_4_5_6_tsni = function enumFromTo_inst_54_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_54_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_54_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_54_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_54_4_5_7_tsni = function lscomp1$_inst_54_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
filter_inst_55_42_tsni = function filter_inst_55_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_55_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = globalThis.Object.freeze([
          tmp1,
          tmp2
        ]);
        return NofibPrelude.Some(arr)
      }
    } else {
      return filter_inst_55_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f2_inst_56_57_tsni = function f2_inst_56_57_tsni(csp) {
  return (s) => {
    return f2$_inst_56_57_48_tsni(csp, s)
  }
};
f2$_inst_56_57_48_tsni = function f2$_inst_56_57_48_tsni(csp, s) {
  let tmp, arr;
  tmp = earliestInconsistency_inst_56_57_48_46_tsni(csp, s);
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
earliestInconsistency_inst_56_57_48_46_tsni = function earliestInconsistency_inst_56_57_48_46_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_56_57_48_46_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_56_57_48_46_42_tsni = function filter_inst_56_57_48_46_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_56_57_48_46_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = globalThis.Object.freeze([
          tmp1,
          tmp2
        ]);
        return NofibPrelude.Some(arr)
      }
    } else {
      return filter_inst_56_57_48_46_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mkTree_inst_58_59_tsni = function mkTree_inst_58_59_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_58_59_4_tsni(vars, vals));
    return initTree_inst_58_59_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_58_59_4_tsni = function next_inst_58_59_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_58_59_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_58_59_4_5_tsni = function next$_inst_58_59_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_58_59_4_5_6_tsni(1, vals);
    return lscomp1$_inst_58_59_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_58_59_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_58_59_4_5_6_tsni = function enumFromTo_inst_58_59_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_58_59_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_58_59_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8, _deforest_Cons_head2, _deforest_Cons_tail2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_58_59_61_62_tsni(f, xs);
        _deforest_Cons_head2 = tmp7;
        _deforest_Cons_tail2 = tmp8;
        return (f9) => {
          let _deforest_Cons_head3, _deforest_Cons_tail3;
          param01 = _deforest_Cons_head2;
          param11 = _deforest_Cons_tail2;
          x = param01;
          xs = param11;
          tmp7 = runtime.safeCall(f9(x));
          tmp8 = map_inst_58_60_64_65_tsni(f9, xs);
          _deforest_Cons_head3 = tmp7;
          _deforest_Cons_tail3 = tmp8;
          return (f10) => {
            let _deforest_Cons_head4, _deforest_Cons_tail4;
            param01 = _deforest_Cons_head3;
            param11 = _deforest_Cons_tail3;
            x = param01;
            xs = param11;
            tmp7 = runtime.safeCall(f10(x));
            tmp8 = map_inst_58_63_9_10_11_tsni(f10, xs);
            _deforest_Cons_head4 = tmp7;
            _deforest_Cons_tail4 = tmp8;
            return (f11) => {
              let param02, param12, h, t, scrut1, tmp9, _deforest_Cons_head5, _deforest_Cons_tail5;
              param02 = _deforest_Cons_head4;
              param12 = _deforest_Cons_tail4;
              h = param02;
              t = param12;
              scrut1 = runtime.safeCall(f11(h));
              if (scrut1 === true) {
                tmp9 = filter_inst_58_63_9_66_67_68_tsni(f11, t);
                _deforest_Cons_head5 = h;
                _deforest_Cons_tail5 = tmp9;
                return (f12) => {
                  param01 = _deforest_Cons_head5;
                  param11 = _deforest_Cons_tail5;
                  x = param01;
                  xs = param11;
                  tmp7 = runtime.safeCall(f12(x));
                  tmp8 = map_inst_58_70_65_tsni(f12, xs);
                  return NofibPrelude.Cons(tmp7, tmp8)
                }
              } else {
                return filter_inst_58_63_9_66_67_68_tsni(f11, t)
              }
            }
          }
        }
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_58_59_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_58_59_4_5_7_tsni = function lscomp1$_inst_58_59_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
labelInconsistencies_inst_58_60_tsni = function labelInconsistencies_inst_58_60_tsni(csp, t) {
  let f2$this;
  f2$this = runtime.safeCall(f2_inst_58_60_57_tsni(csp));
  return mapTree_inst_58_60_64_tsni(f2$this, t)
};
f2_inst_58_60_57_tsni = function f2_inst_58_60_57_tsni(csp) {
  return (s) => {
    return f2$_inst_58_60_57_48_tsni(csp, s)
  }
};
f2$_inst_58_60_57_48_tsni = function f2$_inst_58_60_57_48_tsni(csp, s) {
  let tmp, arr;
  tmp = earliestInconsistency_inst_58_60_57_48_46_tsni(csp, s);
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
earliestInconsistency_inst_58_60_57_48_46_tsni = function earliestInconsistency_inst_58_60_57_48_46_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.None
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_58_60_57_48_46_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_58_60_57_48_46_42_tsni = function filter_inst_58_60_57_48_46_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return NofibPrelude.None
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_58_60_57_48_46_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        arr = globalThis.Object.freeze([
          tmp1,
          tmp2
        ]);
        return NofibPrelude.Some(arr)
      }
    } else {
      return filter_inst_58_60_57_48_46_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
initTree_inst_58_59_61_tsni = function initTree_inst_58_59_61_tsni(f, x) {
  let tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_58_59_61_tsni(f));
  tmp1 = map_inst_58_59_61_62_tsni(lambda$this, tmp);
  _deforest_Node_lab = x;
  _deforest_Node_children = tmp1;
  return (f9) => {
    let param0, param1, l, c, tmp2, tmp3, lambda$this1, _deforest_Node_lab1, _deforest_Node_children1;
    param0 = _deforest_Node_lab;
    param1 = _deforest_Node_children;
    l = param0;
    c = param1;
    tmp2 = runtime.safeCall(f9(l));
    lambda$this1 = runtime.safeCall(lambda_inst_58_60_64_tsni(f9));
    tmp3 = map_inst_58_60_64_65_tsni(lambda$this1, c);
    _deforest_Node_lab1 = tmp2;
    _deforest_Node_children1 = tmp3;
    return (f10) => {
      let param01, param11, l1, c1, tmp4, lambda$this2;
      param01 = _deforest_Node_lab1;
      param11 = _deforest_Node_children1;
      l1 = param01;
      c1 = param11;
      lambda$this2 = runtime.safeCall(lambda_inst_58_63_9_10_tsni(f10));
      tmp4 = map_inst_58_63_9_10_11_tsni(lambda$this2, c1);
      return runtime.safeCall(f10(l1, tmp4))
    }
  }
};
lambda_inst_58_59_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_58_59_61_tsni(f, y)
  }
});
lambda$_inst_58_59_61_tsni = function lambda$_inst_58_59_61_tsni(f, y) {
  return initTree_inst_58_59_61_tsni(f, y)
};
map_inst_58_59_61_62_tsni = function map_inst_58_59_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
prune_inst_58_63_tsni = function prune_inst_58_63_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_58_63_9_tsni(lambda$this, t)
};
filterTree_inst_58_63_9_tsni = function filterTree_inst_58_63_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_58_63_9_66_tsni(p));
  return foldTree_inst_58_63_9_10_tsni(f1$this, t)
};
foldTree_inst_58_63_9_10_tsni = function foldTree_inst_58_63_9_10_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_58_63_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_58_63_9_10_tsni(f, x)
  }
});
lambda$_inst_58_63_9_10_tsni = function lambda$_inst_58_63_9_10_tsni(f, x) {
  return foldTree_inst_58_63_9_10_tsni(f, x)
};
map_inst_58_63_9_10_11_tsni = function map_inst_58_63_9_10_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
mapTree_inst_58_60_64_tsni = function mapTree_inst_58_60_64_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_58_60_64_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_58_60_64_tsni(f, x)
  }
});
lambda$_inst_58_60_64_tsni = function lambda$_inst_58_60_64_tsni(f, x) {
  return mapTree_inst_58_60_64_tsni(f, x)
};
map_inst_58_60_64_65_tsni = function map_inst_58_60_64_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f1_inst_58_63_9_66_tsni = function f1_inst_58_63_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_58_63_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_58_63_9_66_67_tsni = function f1$_inst_58_63_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_58_63_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_58_63_9_66_67_68_tsni = function filter_inst_58_63_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
leaves_inst_58_69_tsni = function leaves_inst_58_69_tsni(t) {
  return runtime.safeCall(t())
};
map_inst_58_69_13_tsni = function map_inst_58_69_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_58_69_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_58_69_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_58_70_tsni = function mapTree_inst_58_70_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_58_70_tsni(f));
    tmp1 = map_inst_58_70_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return () => {
      let param01, param11, cs, leaf, tmp2;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      leaf = param01;
      if (param11 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
      } else {
        cs = param11;
        tmp2 = map_inst_58_69_13_tsni(leaves_inst_58_69_tsni, cs);
        return concat_inst_58_69_114_tsni(tmp2)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_58_70_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_58_70_tsni(f, x)
  }
});
lambda$_inst_58_70_tsni = function lambda$_inst_58_70_tsni(f, x) {
  return mapTree_inst_58_70_tsni(f, x)
};
mkTree_inst_71_3_tsni = function mkTree_inst_71_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_71_3_4_tsni(vars, vals));
    return initTree_inst_71_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_71_3_4_tsni = function next_inst_71_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_71_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_71_3_4_5_tsni = function next$_inst_71_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_71_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_71_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_71_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_71_3_4_5_6_tsni = function enumFromTo_inst_71_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_71_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_71_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_71_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_71_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_71_3_4_5_7_tsni = function lscomp1$_inst_71_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
prune_inst_71_8_tsni = function prune_inst_71_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_71_8_9_tsni(lambda$this, t)
};
filterTree_inst_71_8_9_tsni = function filterTree_inst_71_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_71_8_9_66_tsni(p));
  return foldTree_inst_71_8_9_10_tsni(f1$this, t)
};
foldTree_inst_71_8_9_10_tsni = function foldTree_inst_71_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_71_8_9_10_tsni(f));
    tmp = map_inst_71_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_71_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_71_8_9_10_tsni(f, x)
  }
});
lambda$_inst_71_8_9_10_tsni = function lambda$_inst_71_8_9_10_tsni(f, x) {
  return foldTree_inst_71_8_9_10_tsni(f, x)
};
map_inst_71_8_9_10_11_tsni = function map_inst_71_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_71_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_71_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_71_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_71_12_tsni = function leaves_inst_71_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_71_12_13_tsni(leaves_inst_71_12_tsni, cs);
      return concat_inst_71_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_71_12_13_tsni = function map_inst_71_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_71_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_71_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_71_14_tsni = function filter_inst_71_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_71_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_71_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_71_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f3_inst_72_73_tsni = function f3_inst_72_73_tsni(csp) {
  return (s) => {
    return f3$_inst_72_73_44_tsni(csp, s)
  }
};
f3$_inst_72_73_44_tsni = function f3$_inst_72_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_72_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_72_73_44_41_tsni = function earliestInconsistency_inst_72_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_72_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_72_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_72_73_44_41_42_tsni = function filter_inst_72_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_72_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_72_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = constraints1.Known(tmp4);
          return match_scrut_rest_inst_72_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_72_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_74_75_tsni = function lscomp1$_inst_74_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_74_75_37_tsni = function enumFromTo_inst_74_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_74_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_74_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_74_76_tsni = function enumFromTo_inst_74_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_74_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_74_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_74_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_74_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
lscomp1$_inst_77_23_tsni = function lscomp1$_inst_77_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_77_23_24_tsni = function enumFromTo_inst_77_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_77_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_77_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_77_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_77_26_tsni = function enumFromTo_inst_77_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_77_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_77_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_77_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_77_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_77_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_77_23_25_tsni = function lscomp2$_inst_77_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lambda_inst_78_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_78_79_32_tsni(csp, x)
  }
});
lambda$_inst_78_79_32_tsni = function lambda$_inst_78_79_32_tsni(csp, x) {
  return f5_inst_78_79_32_30_tsni(csp, x)
};
f5_inst_78_79_32_30_tsni = function f5_inst_78_79_32_30_tsni(csp, tp) {
  let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(tp) && tp.length === 2) {
    first0 = runtime.Tuple.get(tp, 0);
    first1 = runtime.Tuple.get(tp, 1);
    if (first0 instanceof NofibPrelude.Nil.class) {
      tbl1 = first1;
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        constraints1.Unknown
      ]);
      arr1 = globalThis.Object.freeze([
        arr,
        tbl1
      ]);
      return arr1
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      a = param0;
      as_ = param1;
      tbl = first1;
      tmp = constraints1.value(a);
      tmp1 = tmp - 1;
      tmp2 = NofibPrelude.head(tbl);
      tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
      tableEntry = tmp3;
      scrut = tableEntry === constraints1.Unknown;
      if (scrut === true) {
        _deforest_Cons_head = a;
        _deforest_Cons_tail = as_;
        tmp4 = () => {
          let param01, param11, param02, param12, v, t;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          if (param01 instanceof constraints.Assign.class) {
            param02 = param01.varr;
            param12 = param01.value;
            v = param02;
            t = param11;
            return v
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        };
        tmp5 = checkComplete_inst_78_79_32_30_124_tsni(csp, tmp4);
      } else {
        tmp5 = tableEntry;
      }
      cs = tmp5;
      tmp6 = NofibPrelude.Cons(a, as_);
      arr2 = globalThis.Object.freeze([
        tmp6,
        cs
      ]);
      arr3 = globalThis.Object.freeze([
        arr2,
        tbl
      ]);
      return arr3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_80_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_80_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_80_tsni = function lambda$_inst_80_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_80_22_tsni(s, csp, tmp);
  return constraints1.cacheChecks(csp, tmp1, x)
};
fillTable_inst_80_22_tsni = function fillTable_inst_80_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_80_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_80_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_80_22_119_tsni(var_, val_, rel));
        return zipWith_inst_80_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_80_22_23_tsni = function lscomp1$_inst_80_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_80_22_23_24_tsni = function enumFromTo_inst_80_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_80_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_80_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_80_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_80_22_23_25_tsni = function lscomp2$_inst_80_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
enumFromTo_inst_80_22_26_tsni = function enumFromTo_inst_80_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_80_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_80_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_80_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_80_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_80_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
emptyTable_inst_81_82_tsni = function emptyTable_inst_81_82_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_81_82_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_81_82_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_81_82_75_tsni = function lscomp1$_inst_81_82_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_81_82_75_37_tsni = function enumFromTo_inst_81_82_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_81_82_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_81_82_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_81_82_76_tsni = function enumFromTo_inst_81_82_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_81_82_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_81_82_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_81_82_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_81_82_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_81_83_tsni = function cacheChecks_inst_81_83_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = globalThis.Object.freeze([
          NofibPrelude.Nil,
          constraints1.Unknown
        ]);
        _deforest_Deforest_Arr_2_02 = arr1;
        _deforest_Deforest_Arr_2_12 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_81_129_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_81_84_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = globalThis.Object.freeze([
          tmp8,
          cs1
        ]);
        _deforest_Deforest_Arr_2_01 = arr3;
        _deforest_Deforest_Arr_2_11 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_81_129_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_81_83_tsni(csp, tbl, s));
    tmp1 = map_inst_81_83_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_81_84_86_tsni(f));
      tmp3 = map_inst_81_84_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_81_128_tsni(f9));
        tmp3 = map_inst_81_128_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_81_83_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_81_83_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_81_83_tsni = function lambda$_inst_81_83_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_81_83_22_tsni(s, csp, tmp);
  return cacheChecks_inst_81_83_tsni(csp, tmp1, x)
};
fillTable_inst_81_83_22_tsni = function fillTable_inst_81_83_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_81_83_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_81_83_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_81_83_22_119_tsni(var_, val_, rel));
        return zipWith_inst_81_83_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_81_83_22_23_tsni = function lscomp1$_inst_81_83_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_81_83_22_23_24_tsni = function enumFromTo_inst_81_83_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_81_83_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_81_83_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_81_83_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_81_83_22_26_tsni = function enumFromTo_inst_81_83_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_81_83_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_81_83_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_81_83_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_81_83_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_81_83_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_81_83_22_23_25_tsni = function lscomp2$_inst_81_83_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lookupCache_inst_81_84_tsni = function lookupCache_inst_81_84_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_81_84_79_tsni(csp));
  return mapTree_inst_81_84_86_tsni(lambda$this, t)
};
lambda_inst_81_84_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_81_84_79_32_tsni(csp, x)
  }
});
lambda$_inst_81_84_79_32_tsni = function lambda$_inst_81_84_79_32_tsni(csp, x) {
  return f5_inst_81_84_79_32_30_tsni(csp, x)
};
f5_inst_81_84_79_32_30_tsni = function f5_inst_81_84_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
map_inst_81_83_85_tsni = function map_inst_81_83_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_81_83_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_81_84_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_81_128_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_81_84_86_tsni = function mapTree_inst_81_84_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_81_84_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_81_84_86_tsni(f, x)
  }
});
lambda$_inst_81_84_86_tsni = function lambda$_inst_81_84_86_tsni(f, x) {
  return mapTree_inst_81_84_86_tsni(f, x)
};
map_inst_81_84_86_65_tsni = function map_inst_81_84_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f7_inst_87_88_tsni = function f7_inst_87_88_tsni(tp2, chs) {
  let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    first0 = runtime.Tuple.get(tp2, 0);
    first1 = runtime.Tuple.get(tp2, 1);
    a1 = first0;
    a = first0;
    if (first1 instanceof constraints1.Known.class) {
      param0 = first1.vs;
      cs = param0;
      tmp = constraints1.Known(cs);
      arr = globalThis.Object.freeze([
        a1,
        tmp
      ]);
      return constraints1.Node(arr, chs)
    } else if (first1 instanceof constraints1.Unknown.class) {
      tmp1 = map_inst_87_88_20_tsni(constraints1.label, chs);
      tmp2 = combine_inst_87_88_117_tsni(tmp1, NofibPrelude.Nil);
      cs_ = constraints1.Known(tmp2);
      scrut = constraints1.knownConflict(cs_);
      if (scrut === true) {
        arr1 = globalThis.Object.freeze([
          a,
          cs_
        ]);
        return constraints1.Node(arr1, NofibPrelude.Nil)
      } else {
        arr2 = globalThis.Object.freeze([
          a,
          cs_
        ]);
        return constraints1.Node(arr2, chs)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_87_88_20_tsni = function map_inst_87_88_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_87_88_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_87_88_117_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f6_inst_89_90_tsni = function f6_inst_89_90_tsni(tp2, chs) {
  let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    first0 = runtime.Tuple.get(tp2, 0);
    first1 = runtime.Tuple.get(tp2, 1);
    a1 = first0;
    a = first0;
    if (first1 instanceof constraints1.Known.class) {
      param0 = first1.vs;
      cs = param0;
      tmp = constraints1.Known(cs);
      arr = globalThis.Object.freeze([
        a1,
        tmp
      ]);
      return constraints1.Node(arr, chs)
    } else if (first1 instanceof constraints1.Unknown.class) {
      tmp1 = map_inst_89_90_18_tsni(constraints1.label, chs);
      tmp2 = combine_inst_89_90_116_tsni(tmp1, NofibPrelude.Nil);
      tmp3 = constraints1.Known(tmp2);
      arr1 = globalThis.Object.freeze([
        a,
        tmp3
      ]);
      return constraints1.Node(arr1, chs)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_89_90_18_tsni = function map_inst_89_90_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_89_90_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_89_90_116_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bt_inst_91_92_tsni = function bt_inst_91_92_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_91_92_73_tsni(csp));
  return mapTree_inst_91_92_94_tsni(f3$this, t)
};
f3_inst_91_92_73_tsni = function f3_inst_91_92_73_tsni(csp) {
  return (s) => {
    return f3$_inst_91_92_73_44_tsni(csp, s)
  }
};
f3$_inst_91_92_73_44_tsni = function f3$_inst_91_92_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_91_92_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_91_92_73_44_41_tsni = function earliestInconsistency_inst_91_92_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_91_92_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_91_92_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_91_92_73_44_41_42_tsni = function filter_inst_91_92_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_91_92_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_91_92_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_91_93_90_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_91_92_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_91_92_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bj_inst_91_93_tsni = function bj_inst_91_93_tsni(csp, t) {
  return foldTree_inst_91_93_130_tsni(f6_inst_91_93_90_tsni, t)
};
f6_inst_91_93_90_tsni = function f6_inst_91_93_90_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_91_93_90_18_tsni = function map_inst_91_93_90_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_91_93_90_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_91_93_90_116_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_91_92_94_tsni = function mapTree_inst_91_92_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_91_92_94_tsni(f));
    tmp1 = map_inst_91_92_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_91_93_130_tsni(f9));
      tmp2 = map_inst_91_93_130_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_91_92_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_91_92_94_tsni(f, x)
  }
});
lambda$_inst_91_92_94_tsni = function lambda$_inst_91_92_94_tsni(f, x) {
  return mapTree_inst_91_92_94_tsni(f, x)
};
map_inst_91_92_94_65_tsni = function map_inst_91_92_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_91_92_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_91_93_130_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
checkComplete_inst_91_92_73_44_95_tsni = function checkComplete_inst_91_92_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_91_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_91_93_90_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_91_92_73_44_96_tsni = function checkComplete_inst_91_92_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_91_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_91_93_90_tsni(chs, a, a1)
    }
  }
};
bt_inst_97_98_tsni = function bt_inst_97_98_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_97_98_73_tsni(csp));
  return mapTree_inst_97_98_94_tsni(f3$this, t)
};
f3_inst_97_98_73_tsni = function f3_inst_97_98_73_tsni(csp) {
  return (s) => {
    return f3$_inst_97_98_73_44_tsni(csp, s)
  }
};
f3$_inst_97_98_73_44_tsni = function f3$_inst_97_98_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_97_98_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_97_98_73_44_41_tsni = function earliestInconsistency_inst_97_98_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_97_98_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_97_98_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_97_98_73_44_41_42_tsni = function filter_inst_97_98_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_97_98_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_97_98_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_97_99_88_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_97_98_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_97_98_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bj__inst_97_99_tsni = function bj__inst_97_99_tsni(csp, t) {
  return foldTree_inst_97_99_131_tsni(f7_inst_97_99_88_tsni, t)
};
f7_inst_97_99_88_tsni = function f7_inst_97_99_88_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_97_99_88_20_tsni = function map_inst_97_99_88_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_97_99_88_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_97_99_88_117_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_97_98_94_tsni = function mapTree_inst_97_98_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_97_98_94_tsni(f));
    tmp1 = map_inst_97_98_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_97_99_131_tsni(f9));
      tmp2 = map_inst_97_99_131_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_97_98_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_97_98_94_tsni(f, x)
  }
});
lambda$_inst_97_98_94_tsni = function lambda$_inst_97_98_94_tsni(f, x) {
  return mapTree_inst_97_98_94_tsni(f, x)
};
map_inst_97_98_94_65_tsni = function map_inst_97_98_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_97_98_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_97_99_131_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
checkComplete_inst_97_98_73_44_95_tsni = function checkComplete_inst_97_98_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_97_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_97_99_88_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_97_98_73_44_96_tsni = function checkComplete_inst_97_98_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_97_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_97_99_88_tsni(chs, a, a1)
    }
  }
};
emptyTable_inst_100_101_tsni = function emptyTable_inst_100_101_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_100_101_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_100_101_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_100_101_75_tsni = function lscomp1$_inst_100_101_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_100_101_75_37_tsni = function enumFromTo_inst_100_101_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_100_101_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_100_101_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_100_101_76_tsni = function enumFromTo_inst_100_101_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_100_101_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_100_101_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_100_101_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_100_101_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_100_102_tsni = function cacheChecks_inst_100_102_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_04 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_14 = constraints1.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_100_132_134_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr1;
        _deforest_Deforest_Arr_2_13 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_100_132_134_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_100_103_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_02 = tmp8;
        _deforest_Deforest_Arr_2_12 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_100_132_134_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr3;
        _deforest_Deforest_Arr_2_11 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_100_132_134_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_100_102_tsni(csp, tbl, s));
    tmp1 = map_inst_100_102_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_100_103_86_tsni(f));
      tmp3 = map_inst_100_103_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_100_132_133_tsni(f9));
        tmp3 = map_inst_100_132_133_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_100_102_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_100_102_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_100_102_tsni = function lambda$_inst_100_102_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_100_102_22_tsni(s, csp, tmp);
  return cacheChecks_inst_100_102_tsni(csp, tmp1, x)
};
fillTable_inst_100_102_22_tsni = function fillTable_inst_100_102_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_100_102_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_100_102_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_100_102_22_119_tsni(var_, val_, rel));
        return zipWith_inst_100_102_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_100_102_22_23_tsni = function lscomp1$_inst_100_102_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_100_102_22_23_24_tsni = function enumFromTo_inst_100_102_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_100_102_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_100_102_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_100_102_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_100_102_22_26_tsni = function enumFromTo_inst_100_102_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_100_102_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_100_102_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_100_102_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_100_102_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_100_102_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_100_102_22_23_25_tsni = function lscomp2$_inst_100_102_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lookupCache_inst_100_103_tsni = function lookupCache_inst_100_103_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_100_103_79_tsni(csp));
  return mapTree_inst_100_103_86_tsni(lambda$this, t)
};
lambda_inst_100_103_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_100_103_79_32_tsni(csp, x)
  }
});
lambda$_inst_100_103_79_32_tsni = function lambda$_inst_100_103_79_32_tsni(csp, x) {
  return f5_inst_100_103_79_32_30_tsni(csp, x)
};
f5_inst_100_103_79_32_30_tsni = function f5_inst_100_103_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
map_inst_100_102_85_tsni = function map_inst_100_102_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_100_102_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_100_103_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_100_132_133_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_100_103_86_tsni = function mapTree_inst_100_103_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_100_103_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_100_103_86_tsni(f, x)
  }
});
lambda$_inst_100_103_86_tsni = function lambda$_inst_100_103_86_tsni(f, x) {
  return mapTree_inst_100_103_86_tsni(f, x)
};
map_inst_100_103_86_65_tsni = function map_inst_100_103_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
search_inst_104_2_tsni = function search_inst_104_2_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = mkTree_inst_104_2_3_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  tmp2 = prune_inst_104_2_8_tsni(lambda8, tmp1);
  tmp3 = leaves_inst_104_2_12_tsni(tmp2);
  tmp4 = filter_inst_104_2_14_tsni(lambda9, tmp3);
  return map_inst_104_2_115_tsni(NofibPrelude.fst, tmp4)
};
filter_inst_104_2_14_tsni = function filter_inst_104_2_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_104_2_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_104_2_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_104_2_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_104_2_12_tsni = function leaves_inst_104_2_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_104_2_12_13_tsni(leaves_inst_104_2_12_tsni, cs);
      return concat_inst_104_2_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_104_2_12_13_tsni = function map_inst_104_2_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_104_2_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_104_2_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prune_inst_104_2_8_tsni = function prune_inst_104_2_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_104_2_8_9_tsni(lambda$this, t)
};
filterTree_inst_104_2_8_9_tsni = function filterTree_inst_104_2_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_104_2_8_9_66_tsni(p));
  return foldTree_inst_104_2_8_9_10_tsni(f1$this, t)
};
foldTree_inst_104_2_8_9_10_tsni = function foldTree_inst_104_2_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_104_2_8_9_10_tsni(f));
    tmp = map_inst_104_2_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_104_2_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_104_2_8_9_10_tsni(f, x)
  }
});
lambda$_inst_104_2_8_9_10_tsni = function lambda$_inst_104_2_8_9_10_tsni(f, x) {
  return foldTree_inst_104_2_8_9_10_tsni(f, x)
};
map_inst_104_2_8_9_10_11_tsni = function map_inst_104_2_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_104_2_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_104_2_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_104_2_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mkTree_inst_104_2_3_tsni = function mkTree_inst_104_2_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_104_2_3_4_tsni(vars, vals));
    return initTree_inst_104_2_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_104_2_3_4_tsni = function next_inst_104_2_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_104_2_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_104_2_3_4_5_tsni = function next$_inst_104_2_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_104_2_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_104_2_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_104_2_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_104_2_3_4_5_6_tsni = function enumFromTo_inst_104_2_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_104_2_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_104_2_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_104_2_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_104_2_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_104_2_3_4_5_7_tsni = function lscomp1$_inst_104_2_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
fc_inst_105_106_tsni = function fc_inst_105_106_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_105_106_101_tsni(csp);
  tmp1 = cacheChecks_inst_105_106_102_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_105_106_103_tsni(csp, tmp1);
  return domainWipeout_inst_105_106_132_tsni(csp, tmp2)
};
lookupCache_inst_105_106_103_tsni = function lookupCache_inst_105_106_103_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_105_106_103_79_tsni(csp));
  return mapTree_inst_105_106_103_86_tsni(lambda$this, t)
};
lambda_inst_105_106_103_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_105_106_103_79_32_tsni(csp, x)
  }
});
lambda$_inst_105_106_103_79_32_tsni = function lambda$_inst_105_106_103_79_32_tsni(csp, x) {
  return f5_inst_105_106_103_79_32_30_tsni(csp, x)
};
f5_inst_105_106_103_79_32_30_tsni = function f5_inst_105_106_103_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
mapTree_inst_105_106_103_86_tsni = function mapTree_inst_105_106_103_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_106_103_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_106_103_86_tsni(f, x)
  }
});
lambda$_inst_105_106_103_86_tsni = function lambda$_inst_105_106_103_86_tsni(f, x) {
  return mapTree_inst_105_106_103_86_tsni(f, x)
};
map_inst_105_106_103_86_65_tsni = function map_inst_105_106_103_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_105_106_102_tsni = function cacheChecks_inst_105_106_102_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_02 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_12 = constraints1.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_105_106_132_134_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_105_106_132_134_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_105_106_103_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_04 = tmp8;
        _deforest_Deforest_Arr_2_14 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_105_106_132_134_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr3;
        _deforest_Deforest_Arr_2_13 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_105_106_132_134_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_105_106_102_tsni(csp, tbl, s));
    tmp1 = map_inst_105_106_102_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_105_106_103_86_tsni(f));
      tmp3 = map_inst_105_106_103_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_105_106_132_133_tsni(f9));
        tmp3 = map_inst_105_106_132_133_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_106_102_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_105_106_102_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_105_106_102_tsni = function lambda$_inst_105_106_102_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_105_106_102_22_tsni(s, csp, tmp);
  return cacheChecks_inst_105_106_102_tsni(csp, tmp1, x)
};
fillTable_inst_105_106_102_22_tsni = function fillTable_inst_105_106_102_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_105_106_102_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_105_106_102_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_105_106_102_22_119_tsni(var_, val_, rel));
        return zipWith_inst_105_106_102_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_105_106_102_22_23_tsni = function lscomp1$_inst_105_106_102_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_105_106_102_22_23_24_tsni = function enumFromTo_inst_105_106_102_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_106_102_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_105_106_102_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_105_106_102_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_105_106_102_22_23_25_tsni = function lscomp2$_inst_105_106_102_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
enumFromTo_inst_105_106_102_22_26_tsni = function enumFromTo_inst_105_106_102_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_106_102_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_105_106_102_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_105_106_102_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_105_106_102_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_105_106_102_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_105_106_102_85_tsni = function map_inst_105_106_102_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_106_102_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_105_106_103_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_105_106_132_133_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
emptyTable_inst_105_106_101_tsni = function emptyTable_inst_105_106_101_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_105_106_101_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_105_106_101_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_105_106_101_75_tsni = function lscomp1$_inst_105_106_101_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_105_106_101_75_37_tsni = function enumFromTo_inst_105_106_101_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_106_101_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_105_106_101_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_105_106_101_76_tsni = function enumFromTo_inst_105_106_101_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_106_101_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_105_106_101_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_105_106_101_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_105_106_101_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
bjbt__inst_105_107_tsni = function bjbt__inst_105_107_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_105_107_98_tsni(csp, t);
  return bj__inst_105_107_99_tsni(csp, tmp)
};
bj__inst_105_107_99_tsni = function bj__inst_105_107_99_tsni(csp, t) {
  return foldTree_inst_105_107_99_131_tsni(f7_inst_105_107_99_88_tsni, t)
};
f7_inst_105_107_99_88_tsni = function f7_inst_105_107_99_88_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_105_107_99_88_20_tsni = function map_inst_105_107_99_88_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_107_99_88_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_105_107_99_88_117_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bt_inst_105_107_98_tsni = function bt_inst_105_107_98_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_105_107_98_73_tsni(csp));
  return mapTree_inst_105_107_98_94_tsni(f3$this, t)
};
f3_inst_105_107_98_73_tsni = function f3_inst_105_107_98_73_tsni(csp) {
  return (s) => {
    return f3$_inst_105_107_98_73_44_tsni(csp, s)
  }
};
f3$_inst_105_107_98_73_44_tsni = function f3$_inst_105_107_98_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_105_107_98_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_105_107_98_73_44_41_tsni = function earliestInconsistency_inst_105_107_98_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_105_107_98_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_105_107_98_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_105_107_98_73_44_41_42_tsni = function filter_inst_105_107_98_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_105_107_98_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_105_107_98_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_105_107_99_88_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_105_107_98_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_105_107_98_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_105_107_98_94_tsni = function mapTree_inst_105_107_98_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_105_107_98_94_tsni(f));
    tmp1 = map_inst_105_107_98_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_105_107_99_131_tsni(f9));
      tmp2 = map_inst_105_107_99_131_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_107_98_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_107_98_94_tsni(f, x)
  }
});
lambda$_inst_105_107_98_94_tsni = function lambda$_inst_105_107_98_94_tsni(f, x) {
  return mapTree_inst_105_107_98_94_tsni(f, x)
};
checkComplete_inst_105_107_98_73_44_96_tsni = function checkComplete_inst_105_107_98_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_105_107_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_105_107_99_88_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_105_107_98_73_44_95_tsni = function checkComplete_inst_105_107_98_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_105_107_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_105_107_99_88_tsni(chs, a, a1)
    }
  }
};
map_inst_105_107_98_94_65_tsni = function map_inst_105_107_98_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_107_98_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_105_107_99_131_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bjbt_inst_105_108_tsni = function bjbt_inst_105_108_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_105_108_92_tsni(csp, t);
  return bj_inst_105_108_93_tsni(csp, tmp)
};
bj_inst_105_108_93_tsni = function bj_inst_105_108_93_tsni(csp, t) {
  return foldTree_inst_105_108_93_130_tsni(f6_inst_105_108_93_90_tsni, t)
};
f6_inst_105_108_93_90_tsni = function f6_inst_105_108_93_90_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_105_108_93_90_18_tsni = function map_inst_105_108_93_90_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_108_93_90_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_105_108_93_90_116_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bt_inst_105_108_92_tsni = function bt_inst_105_108_92_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_105_108_92_73_tsni(csp));
  return mapTree_inst_105_108_92_94_tsni(f3$this, t)
};
f3_inst_105_108_92_73_tsni = function f3_inst_105_108_92_73_tsni(csp) {
  return (s) => {
    return f3$_inst_105_108_92_73_44_tsni(csp, s)
  }
};
f3$_inst_105_108_92_73_44_tsni = function f3$_inst_105_108_92_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_105_108_92_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_105_108_92_73_44_41_tsni = function earliestInconsistency_inst_105_108_92_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_105_108_92_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_105_108_92_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_105_108_92_73_44_41_42_tsni = function filter_inst_105_108_92_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_105_108_92_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_105_108_92_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_105_108_93_90_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_105_108_92_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_105_108_92_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_105_108_92_94_tsni = function mapTree_inst_105_108_92_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_105_108_92_94_tsni(f));
    tmp1 = map_inst_105_108_92_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_105_108_93_130_tsni(f9));
      tmp2 = map_inst_105_108_93_130_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_108_92_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_108_92_94_tsni(f, x)
  }
});
lambda$_inst_105_108_92_94_tsni = function lambda$_inst_105_108_92_94_tsni(f, x) {
  return mapTree_inst_105_108_92_94_tsni(f, x)
};
checkComplete_inst_105_108_92_73_44_96_tsni = function checkComplete_inst_105_108_92_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_105_108_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_105_108_93_90_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_105_108_92_73_44_95_tsni = function checkComplete_inst_105_108_92_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_105_108_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_105_108_93_90_tsni(chs, a, a1)
    }
  }
};
map_inst_105_108_92_94_65_tsni = function map_inst_105_108_92_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_108_92_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_105_108_93_130_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bm_inst_105_109_tsni = function bm_inst_105_109_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_105_109_82_tsni(csp);
  tmp1 = cacheChecks_inst_105_109_83_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_105_109_84_tsni(csp, tmp1);
  return mapTree_inst_105_109_128_tsni(fst_inst_105_109_129_tsni, tmp2)
};
lookupCache_inst_105_109_84_tsni = function lookupCache_inst_105_109_84_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_105_109_84_79_tsni(csp));
  return mapTree_inst_105_109_84_86_tsni(lambda$this, t)
};
lambda_inst_105_109_84_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_105_109_84_79_32_tsni(csp, x)
  }
});
lambda$_inst_105_109_84_79_32_tsni = function lambda$_inst_105_109_84_79_32_tsni(csp, x) {
  return f5_inst_105_109_84_79_32_30_tsni(csp, x)
};
f5_inst_105_109_84_79_32_30_tsni = function f5_inst_105_109_84_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
mapTree_inst_105_109_84_86_tsni = function mapTree_inst_105_109_84_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_109_84_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_109_84_86_tsni(f, x)
  }
});
lambda$_inst_105_109_84_86_tsni = function lambda$_inst_105_109_84_86_tsni(f, x) {
  return mapTree_inst_105_109_84_86_tsni(f, x)
};
map_inst_105_109_84_86_65_tsni = function map_inst_105_109_84_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
cacheChecks_inst_105_109_83_tsni = function cacheChecks_inst_105_109_83_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = globalThis.Object.freeze([
          NofibPrelude.Nil,
          constraints1.Unknown
        ]);
        _deforest_Deforest_Arr_2_01 = arr1;
        _deforest_Deforest_Arr_2_11 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_105_109_129_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_105_109_84_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = globalThis.Object.freeze([
          tmp8,
          cs1
        ]);
        _deforest_Deforest_Arr_2_02 = arr3;
        _deforest_Deforest_Arr_2_12 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_105_109_129_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_105_109_83_tsni(csp, tbl, s));
    tmp1 = map_inst_105_109_83_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_105_109_84_86_tsni(f));
      tmp3 = map_inst_105_109_84_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_105_109_128_tsni(f9));
        tmp3 = map_inst_105_109_128_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_109_83_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_105_109_83_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_105_109_83_tsni = function lambda$_inst_105_109_83_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_105_109_83_22_tsni(s, csp, tmp);
  return cacheChecks_inst_105_109_83_tsni(csp, tmp1, x)
};
fillTable_inst_105_109_83_22_tsni = function fillTable_inst_105_109_83_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_105_109_83_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_105_109_83_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_105_109_83_22_119_tsni(var_, val_, rel));
        return zipWith_inst_105_109_83_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_105_109_83_22_23_tsni = function lscomp1$_inst_105_109_83_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_105_109_83_22_23_24_tsni = function enumFromTo_inst_105_109_83_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_109_83_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_105_109_83_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_105_109_83_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_105_109_83_22_23_25_tsni = function lscomp2$_inst_105_109_83_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
enumFromTo_inst_105_109_83_22_26_tsni = function enumFromTo_inst_105_109_83_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_109_83_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_105_109_83_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_105_109_83_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_105_109_83_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_105_109_83_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
map_inst_105_109_83_85_tsni = function map_inst_105_109_83_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_109_83_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_105_109_84_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_105_109_128_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
emptyTable_inst_105_109_82_tsni = function emptyTable_inst_105_109_82_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_105_109_82_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_105_109_82_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_105_109_82_75_tsni = function lscomp1$_inst_105_109_82_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_105_109_82_75_37_tsni = function enumFromTo_inst_105_109_82_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_109_82_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_105_109_82_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_105_109_82_76_tsni = function enumFromTo_inst_105_109_82_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_109_82_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_105_109_82_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_105_109_82_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_105_109_82_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
bt_inst_105_110_tsni = function bt_inst_105_110_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_105_110_73_tsni(csp));
  return constraints.mapTree(f3$this, t)
};
f3_inst_105_110_73_tsni = function f3_inst_105_110_73_tsni(csp) {
  return (s) => {
    return f3$_inst_105_110_73_44_tsni(csp, s)
  }
};
f3$_inst_105_110_73_44_tsni = function f3$_inst_105_110_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_105_110_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_105_110_73_44_41_tsni = function earliestInconsistency_inst_105_110_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_105_110_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_105_110_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_105_110_73_44_41_42_tsni = function filter_inst_105_110_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_105_110_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_105_110_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = constraints1.Known(tmp4);
          return match_scrut_rest_inst_105_110_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_105_110_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_111_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_105_111_16_tsni(n, x)
  }
});
lambda$_inst_105_111_16_tsni = function lambda$_inst_105_111_16_tsni(n, x) {
  return try__inst_105_111_16_1_tsni(n, x)
};
try__inst_105_111_16_1_tsni = function try__inst_105_111_16_1_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = constraints.queens(n);
  tmp1 = search_inst_105_111_16_1_2_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_105_111_16_1_2_tsni = function search_inst_105_111_16_1_2_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = mkTree_inst_105_111_16_1_2_3_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  tmp2 = prune_inst_105_111_16_1_2_8_tsni(lambda8, tmp1);
  tmp3 = leaves_inst_105_111_16_1_2_12_tsni(tmp2);
  tmp4 = filter_inst_105_111_16_1_2_14_tsni(lambda9, tmp3);
  return map_inst_105_111_16_1_2_115_tsni(NofibPrelude.fst, tmp4)
};
mkTree_inst_105_111_16_1_2_3_tsni = function mkTree_inst_105_111_16_1_2_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_105_111_16_1_2_3_4_tsni(vars, vals));
    return initTree_inst_105_111_16_1_2_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_105_111_16_1_2_3_4_tsni = function next_inst_105_111_16_1_2_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_105_111_16_1_2_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_105_111_16_1_2_3_4_5_tsni = function next$_inst_105_111_16_1_2_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_105_111_16_1_2_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_105_111_16_1_2_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_105_111_16_1_2_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_105_111_16_1_2_3_4_5_6_tsni = function enumFromTo_inst_105_111_16_1_2_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_105_111_16_1_2_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_105_111_16_1_2_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_105_111_16_1_2_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_105_111_16_1_2_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_105_111_16_1_2_3_4_5_7_tsni = function lscomp1$_inst_105_111_16_1_2_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
prune_inst_105_111_16_1_2_8_tsni = function prune_inst_105_111_16_1_2_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_105_111_16_1_2_8_9_tsni(lambda$this, t)
};
filterTree_inst_105_111_16_1_2_8_9_tsni = function filterTree_inst_105_111_16_1_2_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_105_111_16_1_2_8_9_66_tsni(p));
  return foldTree_inst_105_111_16_1_2_8_9_10_tsni(f1$this, t)
};
foldTree_inst_105_111_16_1_2_8_9_10_tsni = function foldTree_inst_105_111_16_1_2_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_105_111_16_1_2_8_9_10_tsni(f));
    tmp = map_inst_105_111_16_1_2_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_105_111_16_1_2_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_111_16_1_2_8_9_10_tsni(f, x)
  }
});
lambda$_inst_105_111_16_1_2_8_9_10_tsni = function lambda$_inst_105_111_16_1_2_8_9_10_tsni(f, x) {
  return foldTree_inst_105_111_16_1_2_8_9_10_tsni(f, x)
};
map_inst_105_111_16_1_2_8_9_10_11_tsni = function map_inst_105_111_16_1_2_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_111_16_1_2_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_105_111_16_1_2_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_105_111_16_1_2_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_105_111_16_1_2_12_tsni = function leaves_inst_105_111_16_1_2_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_105_111_16_1_2_12_13_tsni(leaves_inst_105_111_16_1_2_12_tsni, cs);
      return concat_inst_105_111_16_1_2_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_105_111_16_1_2_12_13_tsni = function map_inst_105_111_16_1_2_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_105_111_16_1_2_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_105_111_16_1_2_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_105_111_16_1_2_14_tsni = function filter_inst_105_111_16_1_2_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_105_111_16_1_2_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_105_111_16_1_2_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_105_111_16_1_2_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
testConstraints_nofib_inst_112_113_tsni = function testConstraints_nofib_inst_112_113_tsni(n) {
  let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
  _deforest_Cons_head4 = fc_inst_112_113_106_tsni;
  _deforest_Cons_tail4 = (f) => {
    return NofibPrelude.Nil
  };
  tmp = (f) => {
    return match_xs_arm_Cons_inst_112_113_135_tsni(f, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = bjbt__inst_112_113_107_tsni;
  _deforest_Cons_tail3 = tmp;
  tmp1 = (f) => {
    return match_xs_arm_Cons_inst_112_113_135_tsni(f, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = bjbt_inst_112_113_108_tsni;
  _deforest_Cons_tail2 = tmp1;
  tmp2 = (f) => {
    return match_xs_arm_Cons_inst_112_113_135_tsni(f, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = bm_inst_112_113_109_tsni;
  _deforest_Cons_tail1 = tmp2;
  tmp3 = (f) => {
    return match_xs_arm_Cons_inst_112_113_135_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = bt_inst_112_113_110_tsni;
  _deforest_Cons_tail = tmp3;
  tmp4 = (f) => {
    return match_xs_arm_Cons_inst_112_113_135_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
  };
  lambda$this = runtime.safeCall(lambda_inst_112_113_111_tsni(n));
  return map_inst_112_113_135_tsni(lambda$this, tmp4)
};
lambda_inst_112_113_111_tsni = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_112_113_111_16_tsni(n, x)
  }
});
lambda$_inst_112_113_111_16_tsni = function lambda$_inst_112_113_111_16_tsni(n, x) {
  return try__inst_112_113_111_16_1_tsni(n, x)
};
try__inst_112_113_111_16_1_tsni = function try__inst_112_113_111_16_1_tsni(n, algorithm) {
  let tmp, tmp1;
  tmp = constraints.queens(n);
  tmp1 = search_inst_112_113_111_16_1_2_tsni(algorithm, tmp);
  return NofibPrelude.listLen(tmp1)
};
search_inst_112_113_111_16_1_2_tsni = function search_inst_112_113_111_16_1_2_tsni(labeler, csp) {
  let tmp, tmp1, tmp2, tmp3, tmp4;
  tmp = mkTree_inst_112_113_111_16_1_2_3_tsni(csp);
  tmp1 = runtime.safeCall(labeler(csp, tmp));
  tmp2 = prune_inst_112_113_111_16_1_2_8_tsni(lambda8, tmp1);
  tmp3 = leaves_inst_112_113_111_16_1_2_12_tsni(tmp2);
  tmp4 = filter_inst_112_113_111_16_1_2_14_tsni(lambda9, tmp3);
  return map_inst_112_113_111_16_1_2_115_tsni(NofibPrelude.fst, tmp4)
};
filter_inst_112_113_111_16_1_2_14_tsni = function filter_inst_112_113_111_16_1_2_14_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_112_113_111_16_1_2_14_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (f9) => {
        let param01, param11, x, xs, tmp1, tmp2;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = runtime.safeCall(f9(x));
        tmp2 = map_inst_112_113_111_16_1_2_115_tsni(f9, xs);
        return NofibPrelude.Cons(tmp1, tmp2)
      }
    } else {
      return filter_inst_112_113_111_16_1_2_14_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
leaves_inst_112_113_111_16_1_2_12_tsni = function leaves_inst_112_113_111_16_1_2_12_tsni(t) {
  let param0, param1, cs, leaf, tmp;
  if (t instanceof constraints.Node.class) {
    param0 = t.lab;
    param1 = t.children;
    leaf = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
    } else {
      cs = param1;
      tmp = map_inst_112_113_111_16_1_2_12_13_tsni(leaves_inst_112_113_111_16_1_2_12_tsni, cs);
      return concat_inst_112_113_111_16_1_2_12_114_tsni(tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_112_113_111_16_1_2_12_13_tsni = function map_inst_112_113_111_16_1_2_12_13_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_111_16_1_2_12_13_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_112_113_111_16_1_2_12_114_tsni(xs2);
      return NofibPrelude.append(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prune_inst_112_113_111_16_1_2_8_tsni = function prune_inst_112_113_111_16_1_2_8_tsni(p, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda3(p));
  return filterTree_inst_112_113_111_16_1_2_8_9_tsni(lambda$this, t)
};
filterTree_inst_112_113_111_16_1_2_8_9_tsni = function filterTree_inst_112_113_111_16_1_2_8_9_tsni(p, t) {
  let f1$this;
  f1$this = runtime.safeCall(f1_inst_112_113_111_16_1_2_8_9_66_tsni(p));
  return foldTree_inst_112_113_111_16_1_2_8_9_10_tsni(f1$this, t)
};
foldTree_inst_112_113_111_16_1_2_8_9_10_tsni = function foldTree_inst_112_113_111_16_1_2_8_9_10_tsni(f, n) {
  let param0, param1, l, c, tmp, lambda$this;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    lambda$this = runtime.safeCall(lambda_inst_112_113_111_16_1_2_8_9_10_tsni(f));
    tmp = map_inst_112_113_111_16_1_2_8_9_10_11_tsni(lambda$this, c);
    return runtime.safeCall(f(l, tmp))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_112_113_111_16_1_2_8_9_10_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_111_16_1_2_8_9_10_tsni(f, x)
  }
});
lambda$_inst_112_113_111_16_1_2_8_9_10_tsni = function lambda$_inst_112_113_111_16_1_2_8_9_10_tsni(f, x) {
  return foldTree_inst_112_113_111_16_1_2_8_9_10_tsni(f, x)
};
map_inst_112_113_111_16_1_2_8_9_10_11_tsni = function map_inst_112_113_111_16_1_2_8_9_10_11_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_111_16_1_2_8_9_10_11_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let param01, param11, h, t, scrut, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      scrut = runtime.safeCall(f9(h));
      if (scrut === true) {
        tmp2 = filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni(f9, t);
        return NofibPrelude.Cons(h, tmp2)
      } else {
        return filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni(f9, t)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mkTree_inst_112_113_111_16_1_2_3_tsni = function mkTree_inst_112_113_111_16_1_2_3_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, next$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    next$this = runtime.safeCall(next_inst_112_113_111_16_1_2_3_4_tsni(vars, vals));
    return initTree_inst_112_113_111_16_1_2_3_61_tsni(next$this, NofibPrelude.Nil)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
next_inst_112_113_111_16_1_2_3_4_tsni = function next_inst_112_113_111_16_1_2_3_4_tsni(vars, vals) {
  return (ss) => {
    return next$_inst_112_113_111_16_1_2_3_4_5_tsni(vars, vals, ss)
  }
};
next$_inst_112_113_111_16_1_2_3_4_5_tsni = function next$_inst_112_113_111_16_1_2_3_4_5_tsni(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_112_113_111_16_1_2_3_4_5_6_tsni(1, vals);
    return lscomp1$_inst_112_113_111_16_1_2_3_4_5_7_tsni(ss, tmp1)
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_112_113_111_16_1_2_3_61_62_tsni(f)
    }
  }
};
enumFromTo_inst_112_113_111_16_1_2_3_4_5_6_tsni = function enumFromTo_inst_112_113_111_16_1_2_3_4_5_6_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_111_16_1_2_3_4_5_6_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (ss) => {
      let param0, param1, j, t1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      j = param0;
      t1 = param1;
      tmp2 = constraints1.maxLevel(ss);
      tmp3 = tmp2 + 1;
      tmp4 = constraints1.Assign(tmp3, j);
      tmp5 = NofibPrelude.Cons(tmp4, ss);
      tmp6 = lscomp1$_inst_112_113_111_16_1_2_3_4_5_7_tsni(ss, t1);
      _deforest_Cons_head1 = tmp5;
      _deforest_Cons_tail1 = tmp6;
      return (f) => {
        let param01, param11, x, xs, tmp7, tmp8;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x = param01;
        xs = param11;
        tmp7 = runtime.safeCall(f(x));
        tmp8 = map_inst_112_113_111_16_1_2_3_61_62_tsni(f, xs);
        return NofibPrelude.Cons(tmp7, tmp8)
      }
    }
  } else {
    return (ss) => {
      return (f) => {
        return match_xs_arm_Nil_inst_112_113_111_16_1_2_3_61_62_tsni(f)
      }
    }
  }
};
lscomp1$_inst_112_113_111_16_1_2_3_4_5_7_tsni = function lscomp1$_inst_112_113_111_16_1_2_3_4_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
bt_inst_112_113_110_tsni = function bt_inst_112_113_110_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_112_113_110_73_tsni(csp));
  return constraints.mapTree(f3$this, t)
};
f3_inst_112_113_110_73_tsni = function f3_inst_112_113_110_73_tsni(csp) {
  return (s) => {
    return f3$_inst_112_113_110_73_44_tsni(csp, s)
  }
};
f3$_inst_112_113_110_73_44_tsni = function f3$_inst_112_113_110_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_112_113_110_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_112_113_110_73_44_41_tsni = function earliestInconsistency_inst_112_113_110_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_112_113_110_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_112_113_110_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_112_113_110_73_44_41_42_tsni = function filter_inst_112_113_110_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_112_113_110_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_112_113_110_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          tmp5 = constraints1.Known(tmp4);
          return match_scrut_rest_inst_112_113_110_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_112_113_110_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bm_inst_112_113_109_tsni = function bm_inst_112_113_109_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_112_113_109_82_tsni(csp);
  tmp1 = cacheChecks_inst_112_113_109_83_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_112_113_109_84_tsni(csp, tmp1);
  return mapTree_inst_112_113_109_128_tsni(fst_inst_112_113_109_129_tsni, tmp2)
};
emptyTable_inst_112_113_109_82_tsni = function emptyTable_inst_112_113_109_82_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_112_113_109_82_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_112_113_109_82_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_112_113_109_82_75_tsni = function lscomp1$_inst_112_113_109_82_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_112_113_109_82_75_37_tsni = function enumFromTo_inst_112_113_109_82_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_109_82_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_112_113_109_82_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_112_113_109_82_76_tsni = function enumFromTo_inst_112_113_109_82_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_109_82_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_112_113_109_82_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_112_113_109_82_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_112_113_109_82_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_112_113_109_83_tsni = function cacheChecks_inst_112_113_109_83_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        arr1 = globalThis.Object.freeze([
          NofibPrelude.Nil,
          constraints1.Unknown
        ]);
        _deforest_Deforest_Arr_2_02 = arr1;
        _deforest_Deforest_Arr_2_12 = tbl2;
        arr2 = () => {
          return match_x_arm_Deforest_Arr_2_inst_112_113_109_129_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_112_113_109_84_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        arr3 = globalThis.Object.freeze([
          tmp8,
          cs1
        ]);
        _deforest_Deforest_Arr_2_01 = arr3;
        _deforest_Deforest_Arr_2_11 = tbl1;
        arr4 = () => {
          return match_x_arm_Deforest_Arr_2_inst_112_113_109_129_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_112_113_109_83_tsni(csp, tbl, s));
    tmp1 = map_inst_112_113_109_83_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_112_113_109_84_86_tsni(f));
      tmp3 = map_inst_112_113_109_84_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_112_113_109_128_tsni(f9));
        tmp3 = map_inst_112_113_109_128_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_112_113_109_83_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_112_113_109_83_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_112_113_109_83_tsni = function lambda$_inst_112_113_109_83_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_112_113_109_83_22_tsni(s, csp, tmp);
  return cacheChecks_inst_112_113_109_83_tsni(csp, tmp1, x)
};
fillTable_inst_112_113_109_83_22_tsni = function fillTable_inst_112_113_109_83_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_112_113_109_83_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_112_113_109_83_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_112_113_109_83_22_119_tsni(var_, val_, rel));
        return zipWith_inst_112_113_109_83_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_112_113_109_83_22_23_tsni = function lscomp1$_inst_112_113_109_83_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_112_113_109_83_22_23_24_tsni = function enumFromTo_inst_112_113_109_83_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_109_83_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_112_113_109_83_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_112_113_109_83_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_112_113_109_83_22_26_tsni = function enumFromTo_inst_112_113_109_83_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_109_83_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_112_113_109_83_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_112_113_109_83_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_112_113_109_83_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_112_113_109_83_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_112_113_109_83_22_23_25_tsni = function lscomp2$_inst_112_113_109_83_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lookupCache_inst_112_113_109_84_tsni = function lookupCache_inst_112_113_109_84_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_112_113_109_84_79_tsni(csp));
  return mapTree_inst_112_113_109_84_86_tsni(lambda$this, t)
};
lambda_inst_112_113_109_84_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_112_113_109_84_79_32_tsni(csp, x)
  }
});
lambda$_inst_112_113_109_84_79_32_tsni = function lambda$_inst_112_113_109_84_79_32_tsni(csp, x) {
  return f5_inst_112_113_109_84_79_32_30_tsni(csp, x)
};
f5_inst_112_113_109_84_79_32_30_tsni = function f5_inst_112_113_109_84_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
map_inst_112_113_109_83_85_tsni = function map_inst_112_113_109_83_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_109_83_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_112_113_109_84_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_112_113_109_128_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_112_113_109_84_86_tsni = function mapTree_inst_112_113_109_84_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_109_84_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_109_84_86_tsni(f, x)
  }
});
lambda$_inst_112_113_109_84_86_tsni = function lambda$_inst_112_113_109_84_86_tsni(f, x) {
  return mapTree_inst_112_113_109_84_86_tsni(f, x)
};
map_inst_112_113_109_84_86_65_tsni = function map_inst_112_113_109_84_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
bjbt_inst_112_113_108_tsni = function bjbt_inst_112_113_108_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_112_113_108_92_tsni(csp, t);
  return bj_inst_112_113_108_93_tsni(csp, tmp)
};
bt_inst_112_113_108_92_tsni = function bt_inst_112_113_108_92_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_112_113_108_92_73_tsni(csp));
  return mapTree_inst_112_113_108_92_94_tsni(f3$this, t)
};
f3_inst_112_113_108_92_73_tsni = function f3_inst_112_113_108_92_73_tsni(csp) {
  return (s) => {
    return f3$_inst_112_113_108_92_73_44_tsni(csp, s)
  }
};
f3$_inst_112_113_108_92_73_44_tsni = function f3$_inst_112_113_108_92_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_112_113_108_92_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_112_113_108_92_73_44_41_tsni = function earliestInconsistency_inst_112_113_108_92_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_112_113_108_92_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_112_113_108_92_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_112_113_108_92_73_44_41_42_tsni = function filter_inst_112_113_108_92_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_112_113_108_92_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_112_113_108_92_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_112_113_108_93_90_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_112_113_108_92_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_112_113_108_92_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bj_inst_112_113_108_93_tsni = function bj_inst_112_113_108_93_tsni(csp, t) {
  return foldTree_inst_112_113_108_93_130_tsni(f6_inst_112_113_108_93_90_tsni, t)
};
f6_inst_112_113_108_93_90_tsni = function f6_inst_112_113_108_93_90_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_112_113_108_93_90_18_tsni = function map_inst_112_113_108_93_90_18_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_108_93_90_18_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_112_113_108_93_90_116_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_112_113_108_92_94_tsni = function mapTree_inst_112_113_108_92_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_112_113_108_92_94_tsni(f));
    tmp1 = map_inst_112_113_108_92_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_112_113_108_93_130_tsni(f9));
      tmp2 = map_inst_112_113_108_93_130_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_112_113_108_92_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_108_92_94_tsni(f, x)
  }
});
lambda$_inst_112_113_108_92_94_tsni = function lambda$_inst_112_113_108_92_94_tsni(f, x) {
  return mapTree_inst_112_113_108_92_94_tsni(f, x)
};
map_inst_112_113_108_92_94_65_tsni = function map_inst_112_113_108_92_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_108_92_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_112_113_108_93_130_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
checkComplete_inst_112_113_108_92_73_44_95_tsni = function checkComplete_inst_112_113_108_92_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_112_113_108_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_112_113_108_93_90_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_112_113_108_92_73_44_96_tsni = function checkComplete_inst_112_113_108_92_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_112_113_108_93_90_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_112_113_108_93_90_tsni(chs, a, a1)
    }
  }
};
bjbt__inst_112_113_107_tsni = function bjbt__inst_112_113_107_tsni(csp, t) {
  let tmp;
  tmp = bt_inst_112_113_107_98_tsni(csp, t);
  return bj__inst_112_113_107_99_tsni(csp, tmp)
};
bt_inst_112_113_107_98_tsni = function bt_inst_112_113_107_98_tsni(csp, t) {
  let f3$this;
  f3$this = runtime.safeCall(f3_inst_112_113_107_98_73_tsni(csp));
  return mapTree_inst_112_113_107_98_94_tsni(f3$this, t)
};
f3_inst_112_113_107_98_73_tsni = function f3_inst_112_113_107_98_73_tsni(csp) {
  return (s) => {
    return f3$_inst_112_113_107_98_73_44_tsni(csp, s)
  }
};
f3$_inst_112_113_107_98_73_44_tsni = function f3$_inst_112_113_107_98_73_44_tsni(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_112_113_107_98_73_44_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
earliestInconsistency_inst_112_113_107_98_73_44_41_tsni = function earliestInconsistency_inst_112_113_107_98_73_44_41_tsni(csp, aas) {
  let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    if (aas instanceof NofibPrelude.Nil.class) {
      return (s, csp1) => {
        return match_scrut_arm_default_inst_112_113_107_98_73_44_tsni(s, csp1)
      }
    } else if (aas instanceof NofibPrelude.Cons.class) {
      param01 = aas.head;
      param11 = aas.tail;
      a = param01;
      as_ = param11;
      tmp = NofibPrelude.reverse(as_);
      lambda$this = runtime.safeCall(lambda5(rel, a));
      scrut = filter_inst_112_113_107_98_73_44_41_42_tsni(lambda$this, tmp);
      return runtime.safeCall(scrut(a))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
filter_inst_112_113_107_98_73_44_41_42_tsni = function filter_inst_112_113_107_98_73_44_41_42_tsni(f, ls) {
  let param0, param1, h, t, scrut, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (a) => {
      return (s, csp) => {
        return match_scrut_arm_default_inst_112_113_107_98_73_44_tsni(s, csp)
      }
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = runtime.safeCall(f(h));
    if (scrut === true) {
      tmp = filter_inst_112_113_107_98_73_44_41_42_tsni(f, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp;
      return (a) => {
        let param01, param11, b, tmp1, tmp2, arr, _deforest_Some_x, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        b = param01;
        tmp1 = constraints.level(a);
        tmp2 = constraints.level(b);
        _deforest_Deforest_Arr_2_0 = tmp1;
        _deforest_Deforest_Arr_2_1 = tmp2;
        arr = (s, csp) => {
          let first1, first0, a1, b1, tmp3, tmp4, tmp5, _deforest_Known_vs;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          a1 = first0;
          b1 = first1;
          tmp3 = NofibPrelude.Cons(b1, NofibPrelude.Nil);
          tmp4 = NofibPrelude.Cons(a1, tmp3);
          _deforest_Known_vs = tmp4;
          tmp5 = (chs, a2, a3) => {
            return match_first1_arm_Known_inst_112_113_107_99_88_tsni(chs, a2, a3, _deforest_Known_vs)
          };
          return match_scrut_rest_inst_112_113_107_98_73_44_tsni(s, tmp5)
        };
        _deforest_Some_x = arr;
        return (s, csp) => {
          let param02;
          param02 = _deforest_Some_x;
          return runtime.safeCall(param02(s, csp))
        }
      }
    } else {
      return filter_inst_112_113_107_98_73_44_41_42_tsni(f, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
bj__inst_112_113_107_99_tsni = function bj__inst_112_113_107_99_tsni(csp, t) {
  return foldTree_inst_112_113_107_99_131_tsni(f7_inst_112_113_107_99_88_tsni, t)
};
f7_inst_112_113_107_99_88_tsni = function f7_inst_112_113_107_99_88_tsni(tp2, chs) {
  return runtime.safeCall(tp2(chs))
};
map_inst_112_113_107_99_88_20_tsni = function map_inst_112_113_107_99_88_20_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_107_99_88_20_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (acc) => {
      let param01, param11, first1, first0, s, param02, cs, css, scrut, tmp2, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first0 = runtime.Tuple.get(param01, 0);
        first1 = runtime.Tuple.get(param01, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param02 = first1.vs;
          cs = param02;
          css = param11;
          tmp2 = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp2, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp3 = NofibPrelude.union(cs, acc);
            return combine_inst_112_113_107_99_88_117_tsni(css, tmp3)
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (acc) => {
      return acc
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_112_113_107_98_94_tsni = function mapTree_inst_112_113_107_98_94_tsni(f, n) {
  let param0, param1, l, c, tmp, tmp1, lambda$this, _deforest_Node_lab, _deforest_Node_children;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    l = param0;
    c = param1;
    tmp = runtime.safeCall(f(l));
    lambda$this = runtime.safeCall(lambda_inst_112_113_107_98_94_tsni(f));
    tmp1 = map_inst_112_113_107_98_94_65_tsni(lambda$this, c);
    _deforest_Node_lab = tmp;
    _deforest_Node_children = tmp1;
    return (f9) => {
      let param01, param11, l1, c1, tmp2, lambda$this1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l1 = param01;
      c1 = param11;
      lambda$this1 = runtime.safeCall(lambda_inst_112_113_107_99_131_tsni(f9));
      tmp2 = map_inst_112_113_107_99_131_11_tsni(lambda$this1, c1);
      return runtime.safeCall(f9(l1, tmp2))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_112_113_107_98_94_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_107_98_94_tsni(f, x)
  }
});
lambda$_inst_112_113_107_98_94_tsni = function lambda$_inst_112_113_107_98_94_tsni(f, x) {
  return mapTree_inst_112_113_107_98_94_tsni(f, x)
};
map_inst_112_113_107_98_94_65_tsni = function map_inst_112_113_107_98_94_65_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_107_98_94_65_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_112_113_107_99_131_11_tsni(f9, xs1);
      return NofibPrelude.Cons(tmp, tmp1)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
checkComplete_inst_112_113_107_98_73_44_95_tsni = function checkComplete_inst_112_113_107_98_73_44_95_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_112_113_107_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_112_113_107_99_88_tsni(chs, a, a1)
    }
  }
};
checkComplete_inst_112_113_107_98_73_44_96_tsni = function checkComplete_inst_112_113_107_98_73_44_96_tsni(csp, s) {
  let scrut, _deforest_Known_vs;
  scrut = constraints.complete(csp, s);
  if (scrut === true) {
    _deforest_Known_vs = NofibPrelude.Nil;
    return (chs, a, a1) => {
      return match_first1_arm_Known_inst_112_113_107_99_88_tsni(chs, a, a1, _deforest_Known_vs)
    }
  } else {
    return (chs, a, a1) => {
      return match_first1_arm_Unknown_inst_112_113_107_99_88_tsni(chs, a, a1)
    }
  }
};
fc_inst_112_113_106_tsni = function fc_inst_112_113_106_tsni(csp, t) {
  let tmp, tmp1, tmp2;
  tmp = emptyTable_inst_112_113_106_101_tsni(csp);
  tmp1 = cacheChecks_inst_112_113_106_102_tsni(csp, tmp, t);
  tmp2 = lookupCache_inst_112_113_106_103_tsni(csp, tmp1);
  return domainWipeout_inst_112_113_106_132_tsni(csp, tmp2)
};
emptyTable_inst_112_113_106_101_tsni = function emptyTable_inst_112_113_106_101_tsni(csp) {
  let param0, param1, param2, vars, vals, rel, tmp, tmp1;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    tmp = enumFromTo_inst_112_113_106_101_76_tsni(1, vars);
    tmp1 = lscomp1$_inst_112_113_106_101_75_tsni(vals, tmp);
    return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$_inst_112_113_106_101_75_tsni = function lscomp1$_inst_112_113_106_101_75_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_112_113_106_101_75_37_tsni = function enumFromTo_inst_112_113_106_101_75_37_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_106_101_75_37_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param0, param1, m, t2, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      m = param0;
      t2 = param1;
      tmp2 = lscomp2_inst_112_113_106_101_75_127_tsni(t2);
      return NofibPrelude.Cons(constraints1.Unknown, tmp2)
    }
  } else {
    return () => {
      return NofibPrelude.Nil
    }
  }
};
enumFromTo_inst_112_113_106_101_76_tsni = function enumFromTo_inst_112_113_106_101_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_106_101_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, n, t1, tmp2, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      n = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_112_113_106_101_75_37_tsni(1, vals);
      tmp3 = lscomp2_inst_112_113_106_101_75_127_tsni(tmp2);
      tmp4 = lscomp1$_inst_112_113_106_101_75_tsni(vals, t1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  } else {
    return (vals) => {
      return NofibPrelude.Nil
    }
  }
};
cacheChecks_inst_112_113_106_102_tsni = function cacheChecks_inst_112_113_106_102_tsni(csp, tbl, n) {
  let param0, param1, s, cs, arr, tmp, tmp1, _deforest_Node_lab, _deforest_Node_children, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (n instanceof constraints.Node.class) {
    param0 = n.lab;
    param1 = n.children;
    s = param0;
    cs = param1;
    _deforest_Deforest_Arr_2_0 = s;
    _deforest_Deforest_Arr_2_1 = tbl;
    arr = (csp1) => {
      let first1, first0, param01, param11, a, as_, tbl1, tableEntry, cs1, scrut, tbl2, arr1, arr2, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, arr3, arr4, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      if (first0 instanceof NofibPrelude.Nil.class) {
        tbl2 = first1;
        _deforest_Deforest_Arr_2_04 = NofibPrelude.Nil;
        _deforest_Deforest_Arr_2_14 = constraints1.Unknown;
        arr1 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni(first11, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        _deforest_Deforest_Arr_2_03 = arr1;
        _deforest_Deforest_Arr_2_13 = tbl2;
        arr2 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
        };
        return arr2
      } else if (first0 instanceof NofibPrelude.Cons.class) {
        param01 = first0.head;
        param11 = first0.tail;
        a = param01;
        as_ = param11;
        tbl1 = first1;
        tmp2 = constraints1.value(a);
        tmp3 = tmp2 - 1;
        tmp4 = NofibPrelude.head(tbl1);
        tmp5 = NofibPrelude.atIndex(tmp3, tmp4);
        tableEntry = tmp5;
        scrut = tableEntry === constraints1.Unknown;
        if (scrut === true) {
          _deforest_Cons_head = a;
          _deforest_Cons_tail = as_;
          tmp6 = () => {
            let param02, param12, param03, param13, v, t;
            param02 = _deforest_Cons_head;
            param12 = _deforest_Cons_tail;
            if (param02 instanceof constraints.Assign.class) {
              param03 = param02.varr;
              param13 = param02.value;
              v = param03;
              t = param12;
              return v
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          };
          tmp7 = checkComplete_inst_112_113_106_103_79_32_30_124_tsni(csp1, tmp6);
        } else {
          tmp7 = tableEntry;
        }
        cs1 = tmp7;
        tmp8 = NofibPrelude.Cons(a, as_);
        _deforest_Deforest_Arr_2_02 = tmp8;
        _deforest_Deforest_Arr_2_12 = cs1;
        arr3 = (first11) => {
          return match_first0_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni(first11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        _deforest_Deforest_Arr_2_01 = arr3;
        _deforest_Deforest_Arr_2_11 = tbl1;
        arr4 = () => {
          return match_tp2_arm_Deforest_Arr_2_inst_112_113_106_132_134_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr4
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    };
    tmp = runtime.safeCall(lambda_inst_112_113_106_102_tsni(csp, tbl, s));
    tmp1 = map_inst_112_113_106_102_85_tsni(tmp, cs);
    _deforest_Node_lab = arr;
    _deforest_Node_children = tmp1;
    return (f) => {
      let param01, param11, l, c, tmp2, tmp3, lambda$this, _deforest_Node_lab1, _deforest_Node_children1;
      param01 = _deforest_Node_lab;
      param11 = _deforest_Node_children;
      l = param01;
      c = param11;
      tmp2 = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda_inst_112_113_106_103_86_tsni(f));
      tmp3 = map_inst_112_113_106_103_86_65_tsni(lambda$this, c);
      _deforest_Node_lab1 = tmp2;
      _deforest_Node_children1 = tmp3;
      return (f9) => {
        param01 = _deforest_Node_lab1;
        param11 = _deforest_Node_children1;
        l = param01;
        c = param11;
        tmp2 = runtime.safeCall(f9(l));
        lambda$this = runtime.safeCall(lambda_inst_112_113_106_132_133_tsni(f9));
        tmp3 = map_inst_112_113_106_132_133_65_tsni(lambda$this, c);
        return constraints.Node(tmp2, tmp3)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_112_113_106_102_tsni = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_112_113_106_102_tsni(csp, tbl, s, x)
  }
});
lambda$_inst_112_113_106_102_tsni = function lambda$_inst_112_113_106_102_tsni(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_112_113_106_102_22_tsni(s, csp, tmp);
  return cacheChecks_inst_112_113_106_102_tsni(csp, tmp1, x)
};
fillTable_inst_112_113_106_102_22_tsni = function fillTable_inst_112_113_106_102_22_tsni(s, csp, tbl) {
  let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
  if (s instanceof NofibPrelude.Nil.class) {
    return tbl
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    if (param0 instanceof constraints.Assign.class) {
      param01 = param0.varr;
      param11 = param0.value;
      var_ = param01;
      val_ = param11;
      as_ = param1;
      if (csp instanceof constraints.CSP.class) {
        param02 = csp.vars;
        param12 = csp.vals;
        param2 = csp.rel;
        vars = param02;
        vals = param12;
        rel = param2;
        tmp = var_ + 1;
        tmp1 = enumFromTo_inst_112_113_106_102_22_26_tsni(tmp, vars);
        tmp2 = lscomp1$_inst_112_113_106_102_22_23_tsni(vals, tmp1);
        lambda$this = runtime.safeCall(lambda_inst_112_113_106_102_22_119_tsni(var_, val_, rel));
        return zipWith_inst_112_113_106_102_22_118_tsni(lambda$this, tbl, tmp2)
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
lscomp1$_inst_112_113_106_102_22_23_tsni = function lscomp1$_inst_112_113_106_102_22_23_tsni(vals, ls) {
  return runtime.safeCall(ls(vals))
};
enumFromTo_inst_112_113_106_102_22_23_24_tsni = function enumFromTo_inst_112_113_106_102_22_23_24_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_106_102_22_23_24_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (varrr) => {
      let param0, param1, valll, t2, arr, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      valll = param0;
      t2 = param1;
      _deforest_Deforest_Arr_2_0 = varrr;
      _deforest_Deforest_Arr_2_1 = valll;
      arr = (cs, var_, val_, rel) => {
        let first1, first0, varr, vall, scrut1, scrut2, tmp3, tmp4, tmp5, tmp6, tmp7;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        varr = first0;
        vall = first1;
        scrut1 = cs === constraints1.Unknown;
        if (scrut1 === true) {
          tmp3 = constraints1.Assign(var_, val_);
          tmp4 = constraints1.Assign(varr, vall);
          tmp5 = runtime.safeCall(rel(tmp3, tmp4));
          scrut2 = ! tmp5;
          if (scrut2 === true) {
            tmp6 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
            tmp7 = NofibPrelude.Cons(var_, tmp6);
            return constraints1.Known(tmp7)
          } else {
            return cs
          }
        } else {
          return cs
        }
      };
      tmp2 = lscomp2$_inst_112_113_106_102_22_23_25_tsni(varrr, t2);
      _deforest_Cons_head1 = arr;
      _deforest_Cons_tail1 = tmp2;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp3, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp3 = runtime.safeCall(f(x, y));
        tmp4 = zipWith_inst_112_113_106_102_22_119_120_121_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp3, tmp4)
      }
    }
  } else {
    return (varrr) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
enumFromTo_inst_112_113_106_102_22_26_tsni = function enumFromTo_inst_112_113_106_102_22_26_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_112_113_106_102_22_26_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (vals) => {
      let param0, param1, varrr, t1, tmp2, tmp3, tmp4, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      varrr = param0;
      t1 = param1;
      tmp2 = enumFromTo_inst_112_113_106_102_22_23_24_tsni(1, vals);
      tmp3 = lscomp2$_inst_112_113_106_102_22_23_25_tsni(varrr, tmp2);
      tmp4 = lscomp1$_inst_112_113_106_102_22_23_tsni(vals, t1);
      _deforest_Cons_head1 = tmp3;
      _deforest_Cons_tail1 = tmp4;
      return (f, x, xs) => {
        let param01, param11, y, ys, tmp5, tmp6;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        y = param01;
        ys = param11;
        tmp5 = runtime.safeCall(f(x, y));
        tmp6 = zipWith_inst_112_113_106_102_22_118_tsni(f, xs, ys);
        return NofibPrelude.Cons(tmp5, tmp6)
      }
    }
  } else {
    return (vals) => {
      return (f, x, xs) => {
        return NofibPrelude.Nil
      }
    }
  }
};
lscomp2$_inst_112_113_106_102_22_23_25_tsni = function lscomp2$_inst_112_113_106_102_22_23_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lookupCache_inst_112_113_106_103_tsni = function lookupCache_inst_112_113_106_103_tsni(csp, t) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda_inst_112_113_106_103_79_tsni(csp));
  return mapTree_inst_112_113_106_103_86_tsni(lambda$this, t)
};
lambda_inst_112_113_106_103_79_tsni = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_112_113_106_103_79_32_tsni(csp, x)
  }
});
lambda$_inst_112_113_106_103_79_32_tsni = function lambda$_inst_112_113_106_103_79_32_tsni(csp, x) {
  return f5_inst_112_113_106_103_79_32_30_tsni(csp, x)
};
f5_inst_112_113_106_103_79_32_30_tsni = function f5_inst_112_113_106_103_79_32_30_tsni(csp, tp) {
  return runtime.safeCall(tp(csp))
};
map_inst_112_113_106_102_85_tsni = function map_inst_112_113_106_102_85_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_112_113_106_102_85_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f9) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f9(x));
      tmp1 = map_inst_112_113_106_103_86_65_tsni(f9, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return (f10) => {
        param0 = _deforest_Cons_head1;
        param1 = _deforest_Cons_tail1;
        x = param0;
        xs1 = param1;
        tmp = runtime.safeCall(f10(x));
        tmp1 = map_inst_112_113_106_132_133_65_tsni(f10, xs1);
        return NofibPrelude.Cons(tmp, tmp1)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f9) => {
      return (f10) => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_112_113_106_103_86_tsni = function mapTree_inst_112_113_106_103_86_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_106_103_86_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_106_103_86_tsni(f, x)
  }
});
lambda$_inst_112_113_106_103_86_tsni = function lambda$_inst_112_113_106_103_86_tsni(f, x) {
  return mapTree_inst_112_113_106_103_86_tsni(f, x)
};
map_inst_112_113_106_103_86_65_tsni = function map_inst_112_113_106_103_86_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
initTree_inst_0_1_2_3_61_tsni = function initTree_inst_0_1_2_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_0_1_2_3_61_tsni(f));
  tmp1 = map_inst_0_1_2_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_0_1_2_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_0_1_2_3_61_tsni(f, y)
  }
});
lambda$_inst_0_1_2_3_61_tsni = function lambda$_inst_0_1_2_3_61_tsni(f, y) {
  return initTree_inst_0_1_2_3_61_tsni(f, y)
};
map_inst_0_1_2_3_61_62_tsni = function map_inst_0_1_2_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f1_inst_0_1_2_8_9_66_tsni = function f1_inst_0_1_2_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_0_1_2_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_0_1_2_8_9_66_67_tsni = function f1$_inst_0_1_2_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_0_1_2_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_0_1_2_8_9_66_67_68_tsni = function filter_inst_0_1_2_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_0_1_2_12_114_tsni = function concat_inst_0_1_2_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_0_1_2_115_tsni = function map_inst_0_1_2_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_15_16_1_2_115_tsni = function map_inst_15_16_1_2_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_15_16_1_2_12_114_tsni = function concat_inst_15_16_1_2_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
f1_inst_15_16_1_2_8_9_66_tsni = function f1_inst_15_16_1_2_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_15_16_1_2_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_15_16_1_2_8_9_66_67_tsni = function f1$_inst_15_16_1_2_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_15_16_1_2_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_15_16_1_2_8_9_66_67_68_tsni = function filter_inst_15_16_1_2_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
initTree_inst_15_16_1_2_3_61_tsni = function initTree_inst_15_16_1_2_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_15_16_1_2_3_61_tsni(f));
  tmp1 = map_inst_15_16_1_2_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_15_16_1_2_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_15_16_1_2_3_61_tsni(f, y)
  }
});
lambda$_inst_15_16_1_2_3_61_tsni = function lambda$_inst_15_16_1_2_3_61_tsni(f, y) {
  return initTree_inst_15_16_1_2_3_61_tsni(f, y)
};
map_inst_15_16_1_2_3_61_62_tsni = function map_inst_15_16_1_2_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_17_116_tsni = function combine_inst_17_116_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_19_117_tsni = function combine_inst_19_117_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
zipWith_inst_21_22_118_tsni = function zipWith_inst_21_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_21_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_21_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_21_22_119_120_tsni = function lambda$_inst_21_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_21_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_21_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_21_22_119_120_121_tsni = function zipWith_inst_21_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_21_22_119_120_122_tsni = function f4_inst_21_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_21_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_21_22_119_120_122_123_tsni = function f4$_inst_21_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
zipWith_inst_27_22_118_tsni = function zipWith_inst_27_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_27_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_27_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_27_22_119_120_tsni = function lambda$_inst_27_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_27_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_27_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_27_22_119_120_121_tsni = function zipWith_inst_27_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_27_22_119_120_122_tsni = function f4_inst_27_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_27_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_27_22_119_120_122_123_tsni = function f4$_inst_27_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_28_124_tsni = function checkComplete_inst_28_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_28_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_28_124_125_tsni = function complete_inst_28_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_28_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_28_124_125_126_tsni = function maxLevel_inst_28_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
checkComplete_inst_29_30_124_tsni = function checkComplete_inst_29_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_29_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_29_30_124_125_tsni = function complete_inst_29_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_29_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_29_30_124_125_126_tsni = function maxLevel_inst_29_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
checkComplete_inst_31_32_30_124_tsni = function checkComplete_inst_31_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_31_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_31_32_30_124_125_tsni = function complete_inst_31_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_31_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_31_32_30_124_125_126_tsni = function maxLevel_inst_31_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2$_inst_33_25_tsni = function lscomp2$_inst_33_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lscomp2$_inst_34_35_25_tsni = function lscomp2$_inst_34_35_25_tsni(varrr, ls) {
  return runtime.safeCall(ls(varrr))
};
lscomp2_inst_36_127_tsni = function lscomp2_inst_36_127_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp2_inst_38_39_127_tsni = function lscomp2_inst_38_39_127_tsni(ls) {
  return runtime.safeCall(ls())
};
lscomp1$_inst_49_7_tsni = function lscomp1$_inst_49_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
lscomp1$_inst_50_5_7_tsni = function lscomp1$_inst_50_5_7_tsni(ss, ls) {
  return runtime.safeCall(ls(ss))
};
f1_inst_51_66_tsni = function f1_inst_51_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_51_66_67_tsni(p, a, cs)
  }
};
f1$_inst_51_66_67_tsni = function f1$_inst_51_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_51_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_51_66_67_68_tsni = function filter_inst_51_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
f1_inst_52_9_66_tsni = function f1_inst_52_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_52_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_52_9_66_67_tsni = function f1$_inst_52_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_52_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_52_9_66_67_68_tsni = function filter_inst_52_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_53_114_tsni = function concat_inst_53_114_tsni(ls) {
  return runtime.safeCall(ls())
};
initTree_inst_54_61_tsni = function initTree_inst_54_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_54_61_tsni(f));
  tmp1 = map_inst_54_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_54_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_54_61_tsni(f, y)
  }
});
lambda$_inst_54_61_tsni = function lambda$_inst_54_61_tsni(f, y) {
  return initTree_inst_54_61_tsni(f, y)
};
map_inst_54_61_62_tsni = function map_inst_54_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_58_70_65_tsni = function map_inst_58_70_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_58_69_114_tsni = function concat_inst_58_69_114_tsni(ls) {
  return runtime.safeCall(ls())
};
initTree_inst_71_3_61_tsni = function initTree_inst_71_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_71_3_61_tsni(f));
  tmp1 = map_inst_71_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_71_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_71_3_61_tsni(f, y)
  }
});
lambda$_inst_71_3_61_tsni = function lambda$_inst_71_3_61_tsni(f, y) {
  return initTree_inst_71_3_61_tsni(f, y)
};
map_inst_71_3_61_62_tsni = function map_inst_71_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f1_inst_71_8_9_66_tsni = function f1_inst_71_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_71_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_71_8_9_66_67_tsni = function f1$_inst_71_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_71_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_71_8_9_66_67_68_tsni = function filter_inst_71_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_71_12_114_tsni = function concat_inst_71_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_71_115_tsni = function map_inst_71_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp2_inst_74_75_127_tsni = function lscomp2_inst_74_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_77_118_tsni = function zipWith_inst_77_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_77_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_77_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_77_119_120_tsni = function lambda$_inst_77_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_77_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_77_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_77_119_120_121_tsni = function zipWith_inst_77_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_77_119_120_122_tsni = function f4_inst_77_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_77_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_77_119_120_122_123_tsni = function f4$_inst_77_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_78_79_32_30_124_tsni = function checkComplete_inst_78_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_78_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_78_79_32_30_124_125_tsni = function complete_inst_78_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_78_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_78_79_32_30_124_125_126_tsni = function maxLevel_inst_78_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_80_22_118_tsni = function zipWith_inst_80_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_80_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_80_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_80_22_119_120_tsni = function lambda$_inst_80_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_80_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_80_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_80_22_119_120_121_tsni = function zipWith_inst_80_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_80_22_119_120_122_tsni = function f4_inst_80_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_80_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_80_22_119_120_122_123_tsni = function f4$_inst_80_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
lscomp2_inst_81_82_75_127_tsni = function lscomp2_inst_81_82_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_81_83_22_118_tsni = function zipWith_inst_81_83_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_81_83_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_81_83_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_81_83_22_119_120_tsni = function lambda$_inst_81_83_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_81_83_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_81_83_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_81_83_22_119_120_121_tsni = function zipWith_inst_81_83_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_81_83_22_119_120_122_tsni = function f4_inst_81_83_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_81_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_81_83_22_119_120_122_123_tsni = function f4$_inst_81_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_81_84_79_32_30_124_tsni = function checkComplete_inst_81_84_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_81_84_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_81_84_79_32_30_124_125_tsni = function complete_inst_81_84_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_81_84_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_81_84_79_32_30_124_125_126_tsni = function maxLevel_inst_81_84_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_81_128_tsni = function mapTree_inst_81_128_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_81_128_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_81_128_tsni(f, x)
  }
});
lambda$_inst_81_128_tsni = function lambda$_inst_81_128_tsni(f, x) {
  return mapTree_inst_81_128_tsni(f, x)
};
fst_inst_81_129_tsni = function fst_inst_81_129_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_81_128_65_tsni = function map_inst_81_128_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_87_88_117_tsni = function combine_inst_87_88_117_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_89_90_116_tsni = function combine_inst_89_90_116_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
combine_inst_91_93_90_116_tsni = function combine_inst_91_93_90_116_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_91_93_130_tsni = function foldTree_inst_91_93_130_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_91_93_130_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_91_93_130_tsni(f, x)
  }
});
lambda$_inst_91_93_130_tsni = function lambda$_inst_91_93_130_tsni(f, x) {
  return foldTree_inst_91_93_130_tsni(f, x)
};
map_inst_91_93_130_11_tsni = function map_inst_91_93_130_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_97_99_88_117_tsni = function combine_inst_97_99_88_117_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_97_99_131_tsni = function foldTree_inst_97_99_131_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_97_99_131_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_97_99_131_tsni(f, x)
  }
});
lambda$_inst_97_99_131_tsni = function lambda$_inst_97_99_131_tsni(f, x) {
  return foldTree_inst_97_99_131_tsni(f, x)
};
map_inst_97_99_131_11_tsni = function map_inst_97_99_131_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp2_inst_100_101_75_127_tsni = function lscomp2_inst_100_101_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_100_102_22_118_tsni = function zipWith_inst_100_102_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_100_102_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_100_102_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_100_102_22_119_120_tsni = function lambda$_inst_100_102_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_100_102_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_100_102_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_100_102_22_119_120_121_tsni = function zipWith_inst_100_102_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_100_102_22_119_120_122_tsni = function f4_inst_100_102_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_100_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_100_102_22_119_120_122_123_tsni = function f4$_inst_100_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_100_103_79_32_30_124_tsni = function checkComplete_inst_100_103_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_100_103_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_100_103_79_32_30_124_125_tsni = function complete_inst_100_103_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_100_103_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_100_103_79_32_30_124_125_126_tsni = function maxLevel_inst_100_103_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_100_132_tsni = function domainWipeout_inst_100_132_tsni(csp, t) {
  let param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    return mapTree_inst_100_132_133_tsni(f8_inst_100_132_134_tsni, t)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_100_132_133_tsni = function mapTree_inst_100_132_133_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_100_132_133_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_100_132_133_tsni(f, x)
  }
});
lambda$_inst_100_132_133_tsni = function lambda$_inst_100_132_133_tsni(f, x) {
  return mapTree_inst_100_132_133_tsni(f, x)
};
map_inst_100_132_133_65_tsni = function map_inst_100_132_133_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f8_inst_100_132_134_tsni = function f8_inst_100_132_134_tsni(tp2) {
  return runtime.safeCall(tp2())
};
map_inst_104_2_115_tsni = function map_inst_104_2_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_104_2_12_114_tsni = function concat_inst_104_2_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
f1_inst_104_2_8_9_66_tsni = function f1_inst_104_2_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_104_2_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_104_2_8_9_66_67_tsni = function f1$_inst_104_2_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_104_2_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_104_2_8_9_66_67_68_tsni = function filter_inst_104_2_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
initTree_inst_104_2_3_61_tsni = function initTree_inst_104_2_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_104_2_3_61_tsni(f));
  tmp1 = map_inst_104_2_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_104_2_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_104_2_3_61_tsni(f, y)
  }
});
lambda$_inst_104_2_3_61_tsni = function lambda$_inst_104_2_3_61_tsni(f, y) {
  return initTree_inst_104_2_3_61_tsni(f, y)
};
map_inst_104_2_3_61_62_tsni = function map_inst_104_2_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_105_106_103_79_32_30_124_tsni = function checkComplete_inst_105_106_103_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_105_106_103_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_105_106_103_79_32_30_124_125_tsni = function complete_inst_105_106_103_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_105_106_103_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_105_106_103_79_32_30_124_125_126_tsni = function maxLevel_inst_105_106_103_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_105_106_132_tsni = function domainWipeout_inst_105_106_132_tsni(csp, t) {
  let param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    return mapTree_inst_105_106_132_133_tsni(f8_inst_105_106_132_134_tsni, t)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_105_106_132_133_tsni = function mapTree_inst_105_106_132_133_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_106_132_133_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_106_132_133_tsni(f, x)
  }
});
lambda$_inst_105_106_132_133_tsni = function lambda$_inst_105_106_132_133_tsni(f, x) {
  return mapTree_inst_105_106_132_133_tsni(f, x)
};
f8_inst_105_106_132_134_tsni = function f8_inst_105_106_132_134_tsni(tp2) {
  return runtime.safeCall(tp2())
};
map_inst_105_106_132_133_65_tsni = function map_inst_105_106_132_133_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith_inst_105_106_102_22_118_tsni = function zipWith_inst_105_106_102_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_105_106_102_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_105_106_102_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_105_106_102_22_119_120_tsni = function lambda$_inst_105_106_102_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_105_106_102_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_105_106_102_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_105_106_102_22_119_120_121_tsni = function zipWith_inst_105_106_102_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_105_106_102_22_119_120_122_tsni = function f4_inst_105_106_102_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_105_106_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_105_106_102_22_119_120_122_123_tsni = function f4$_inst_105_106_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
lscomp2_inst_105_106_101_75_127_tsni = function lscomp2_inst_105_106_101_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
combine_inst_105_107_99_88_117_tsni = function combine_inst_105_107_99_88_117_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_105_107_99_131_tsni = function foldTree_inst_105_107_99_131_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_107_99_131_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_107_99_131_tsni(f, x)
  }
});
lambda$_inst_105_107_99_131_tsni = function lambda$_inst_105_107_99_131_tsni(f, x) {
  return foldTree_inst_105_107_99_131_tsni(f, x)
};
map_inst_105_107_99_131_11_tsni = function map_inst_105_107_99_131_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_105_108_93_90_116_tsni = function combine_inst_105_108_93_90_116_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_105_108_93_130_tsni = function foldTree_inst_105_108_93_130_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_108_93_130_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_108_93_130_tsni(f, x)
  }
});
lambda$_inst_105_108_93_130_tsni = function lambda$_inst_105_108_93_130_tsni(f, x) {
  return foldTree_inst_105_108_93_130_tsni(f, x)
};
map_inst_105_108_93_130_11_tsni = function map_inst_105_108_93_130_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
checkComplete_inst_105_109_84_79_32_30_124_tsni = function checkComplete_inst_105_109_84_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_105_109_84_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_105_109_84_79_32_30_124_125_tsni = function complete_inst_105_109_84_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_105_109_84_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_105_109_84_79_32_30_124_125_126_tsni = function maxLevel_inst_105_109_84_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_105_109_128_tsni = function mapTree_inst_105_109_128_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_105_109_128_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_105_109_128_tsni(f, x)
  }
});
lambda$_inst_105_109_128_tsni = function lambda$_inst_105_109_128_tsni(f, x) {
  return mapTree_inst_105_109_128_tsni(f, x)
};
map_inst_105_109_128_65_tsni = function map_inst_105_109_128_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
fst_inst_105_109_129_tsni = function fst_inst_105_109_129_tsni(x) {
  return runtime.safeCall(x())
};
zipWith_inst_105_109_83_22_118_tsni = function zipWith_inst_105_109_83_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_105_109_83_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_105_109_83_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_105_109_83_22_119_120_tsni = function lambda$_inst_105_109_83_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_105_109_83_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_105_109_83_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_105_109_83_22_119_120_121_tsni = function zipWith_inst_105_109_83_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_105_109_83_22_119_120_122_tsni = function f4_inst_105_109_83_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_105_109_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_105_109_83_22_119_120_122_123_tsni = function f4$_inst_105_109_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
lscomp2_inst_105_109_82_75_127_tsni = function lscomp2_inst_105_109_82_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
initTree_inst_105_111_16_1_2_3_61_tsni = function initTree_inst_105_111_16_1_2_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_105_111_16_1_2_3_61_tsni(f));
  tmp1 = map_inst_105_111_16_1_2_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_105_111_16_1_2_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_105_111_16_1_2_3_61_tsni(f, y)
  }
});
lambda$_inst_105_111_16_1_2_3_61_tsni = function lambda$_inst_105_111_16_1_2_3_61_tsni(f, y) {
  return initTree_inst_105_111_16_1_2_3_61_tsni(f, y)
};
map_inst_105_111_16_1_2_3_61_62_tsni = function map_inst_105_111_16_1_2_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f1_inst_105_111_16_1_2_8_9_66_tsni = function f1_inst_105_111_16_1_2_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_105_111_16_1_2_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_105_111_16_1_2_8_9_66_67_tsni = function f1$_inst_105_111_16_1_2_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_105_111_16_1_2_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_105_111_16_1_2_8_9_66_67_68_tsni = function filter_inst_105_111_16_1_2_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
concat_inst_105_111_16_1_2_12_114_tsni = function concat_inst_105_111_16_1_2_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
map_inst_105_111_16_1_2_115_tsni = function map_inst_105_111_16_1_2_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_105_135_tsni = function map_inst_105_135_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_112_113_111_16_1_2_115_tsni = function map_inst_112_113_111_16_1_2_115_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_112_113_111_16_1_2_12_114_tsni = function concat_inst_112_113_111_16_1_2_12_114_tsni(ls) {
  return runtime.safeCall(ls())
};
f1_inst_112_113_111_16_1_2_8_9_66_tsni = function f1_inst_112_113_111_16_1_2_8_9_66_tsni(p) {
  return (a, cs) => {
    return f1$_inst_112_113_111_16_1_2_8_9_66_67_tsni(p, a, cs)
  }
};
f1$_inst_112_113_111_16_1_2_8_9_66_67_tsni = function f1$_inst_112_113_111_16_1_2_8_9_66_67_tsni(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni = function filter_inst_112_113_111_16_1_2_8_9_66_67_68_tsni(f, ls) {
  return runtime.safeCall(ls(f))
};
initTree_inst_112_113_111_16_1_2_3_61_tsni = function initTree_inst_112_113_111_16_1_2_3_61_tsni(f, x) {
  let tmp, tmp1, lambda$this;
  tmp = runtime.safeCall(f(x));
  lambda$this = runtime.safeCall(lambda_inst_112_113_111_16_1_2_3_61_tsni(f));
  tmp1 = map_inst_112_113_111_16_1_2_3_61_62_tsni(lambda$this, tmp);
  return constraints.Node(x, tmp1)
};
lambda_inst_112_113_111_16_1_2_3_61_tsni = (undefined, function (f) {
  return (y) => {
    return lambda$_inst_112_113_111_16_1_2_3_61_tsni(f, y)
  }
});
lambda$_inst_112_113_111_16_1_2_3_61_tsni = function lambda$_inst_112_113_111_16_1_2_3_61_tsni(f, y) {
  return initTree_inst_112_113_111_16_1_2_3_61_tsni(f, y)
};
map_inst_112_113_111_16_1_2_3_61_62_tsni = function map_inst_112_113_111_16_1_2_3_61_62_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_112_113_135_tsni = function map_inst_112_113_135_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp2_inst_112_113_109_82_75_127_tsni = function lscomp2_inst_112_113_109_82_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_112_113_109_83_22_118_tsni = function zipWith_inst_112_113_109_83_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_112_113_109_83_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_112_113_109_83_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_112_113_109_83_22_119_120_tsni = function lambda$_inst_112_113_109_83_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_112_113_109_83_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_112_113_109_83_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_112_113_109_83_22_119_120_121_tsni = function zipWith_inst_112_113_109_83_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_112_113_109_83_22_119_120_122_tsni = function f4_inst_112_113_109_83_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_112_113_109_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_112_113_109_83_22_119_120_122_123_tsni = function f4$_inst_112_113_109_83_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_112_113_109_84_79_32_30_124_tsni = function checkComplete_inst_112_113_109_84_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_112_113_109_84_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_112_113_109_84_79_32_30_124_125_tsni = function complete_inst_112_113_109_84_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_112_113_109_84_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_112_113_109_84_79_32_30_124_125_126_tsni = function maxLevel_inst_112_113_109_84_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
mapTree_inst_112_113_109_128_tsni = function mapTree_inst_112_113_109_128_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_109_128_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_109_128_tsni(f, x)
  }
});
lambda$_inst_112_113_109_128_tsni = function lambda$_inst_112_113_109_128_tsni(f, x) {
  return mapTree_inst_112_113_109_128_tsni(f, x)
};
fst_inst_112_113_109_129_tsni = function fst_inst_112_113_109_129_tsni(x) {
  return runtime.safeCall(x())
};
map_inst_112_113_109_128_65_tsni = function map_inst_112_113_109_128_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_112_113_108_93_90_116_tsni = function combine_inst_112_113_108_93_90_116_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_112_113_108_93_130_tsni = function foldTree_inst_112_113_108_93_130_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_108_93_130_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_108_93_130_tsni(f, x)
  }
});
lambda$_inst_112_113_108_93_130_tsni = function lambda$_inst_112_113_108_93_130_tsni(f, x) {
  return foldTree_inst_112_113_108_93_130_tsni(f, x)
};
map_inst_112_113_108_93_130_11_tsni = function map_inst_112_113_108_93_130_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
combine_inst_112_113_107_99_88_117_tsni = function combine_inst_112_113_107_99_88_117_tsni(ls, acc) {
  return runtime.safeCall(ls(acc))
};
foldTree_inst_112_113_107_99_131_tsni = function foldTree_inst_112_113_107_99_131_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_107_99_131_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_107_99_131_tsni(f, x)
  }
});
lambda$_inst_112_113_107_99_131_tsni = function lambda$_inst_112_113_107_99_131_tsni(f, x) {
  return foldTree_inst_112_113_107_99_131_tsni(f, x)
};
map_inst_112_113_107_99_131_11_tsni = function map_inst_112_113_107_99_131_11_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lscomp2_inst_112_113_106_101_75_127_tsni = function lscomp2_inst_112_113_106_101_75_127_tsni(ls) {
  return runtime.safeCall(ls())
};
zipWith_inst_112_113_106_102_22_118_tsni = function zipWith_inst_112_113_106_102_22_118_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
lambda_inst_112_113_106_102_22_119_tsni = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$_inst_112_113_106_102_22_119_120_tsni(var_, val_, rel, x, y)
  }
});
lambda$_inst_112_113_106_102_22_119_120_tsni = function lambda$_inst_112_113_106_102_22_119_120_tsni(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4_inst_112_113_106_102_22_119_120_122_tsni(var_, val_, rel));
  return zipWith_inst_112_113_106_102_22_119_120_121_tsni(f4$this, x, y)
};
zipWith_inst_112_113_106_102_22_119_120_121_tsni = function zipWith_inst_112_113_106_102_22_119_120_121_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return NofibPrelude.Nil
  }
};
f4_inst_112_113_106_102_22_119_120_122_tsni = function f4_inst_112_113_106_102_22_119_120_122_tsni(var_, val_, rel) {
  return (cs, varval) => {
    return f4$_inst_112_113_106_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval)
  }
};
f4$_inst_112_113_106_102_22_119_120_122_123_tsni = function f4$_inst_112_113_106_102_22_119_120_122_123_tsni(var_, val_, rel, cs, varval) {
  return runtime.safeCall(varval(cs, var_, val_, rel))
};
checkComplete_inst_112_113_106_103_79_32_30_124_tsni = function checkComplete_inst_112_113_106_103_79_32_30_124_tsni(csp, s) {
  let scrut;
  scrut = complete_inst_112_113_106_103_79_32_30_124_125_tsni(csp, s);
  if (scrut === true) {
    return constraints.Known(NofibPrelude.Nil)
  } else {
    return constraints.Unknown
  }
};
complete_inst_112_113_106_103_79_32_30_124_125_tsni = function complete_inst_112_113_106_103_79_32_30_124_125_tsni(csp, s) {
  let param0, param1, param2, v, tmp;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    v = param0;
    tmp = maxLevel_inst_112_113_106_103_79_32_30_124_125_126_tsni(s);
    return tmp == v
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
maxLevel_inst_112_113_106_103_79_32_30_124_125_126_tsni = function maxLevel_inst_112_113_106_103_79_32_30_124_125_126_tsni(ls) {
  return runtime.safeCall(ls())
};
domainWipeout_inst_112_113_106_132_tsni = function domainWipeout_inst_112_113_106_132_tsni(csp, t) {
  let param0, param1, param2, vars, vals, rel;
  if (csp instanceof constraints.CSP.class) {
    param0 = csp.vars;
    param1 = csp.vals;
    param2 = csp.rel;
    vars = param0;
    vals = param1;
    rel = param2;
    return mapTree_inst_112_113_106_132_133_tsni(f8_inst_112_113_106_132_134_tsni, t)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
mapTree_inst_112_113_106_132_133_tsni = function mapTree_inst_112_113_106_132_133_tsni(f, n) {
  return runtime.safeCall(n(f))
};
lambda_inst_112_113_106_132_133_tsni = (undefined, function (f) {
  return (x) => {
    return lambda$_inst_112_113_106_132_133_tsni(f, x)
  }
});
lambda$_inst_112_113_106_132_133_tsni = function lambda$_inst_112_113_106_132_133_tsni(f, x) {
  return mapTree_inst_112_113_106_132_133_tsni(f, x)
};
map_inst_112_113_106_132_133_65_tsni = function map_inst_112_113_106_132_133_65_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
f8_inst_112_113_106_132_134_tsni = function f8_inst_112_113_106_132_134_tsni(tp2) {
  return runtime.safeCall(tp2())
};
lambda$10 = function lambda$(n, x) {
  return try__inst_0_1_tsni(n, x)
};
lambda13 = (undefined, function (n) {
  return (x) => {
    return lambda$_inst_15_16_tsni(n, x)
  }
});
lscomp13 = function lscomp1(ls) {
  let param0, param1, vs, t1, scrut, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    vs = param0;
    t1 = param1;
    scrut = NofibPrelude.all(constraints1.knownConflict, vs);
    if (scrut === true) {
      tmp = lscomp13(t1);
      return NofibPrelude.Cons(vs, tmp)
    } else {
      return lscomp13(t1)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f8 = function f8(tp2) {
  let first1, first0, first11, first01, as_, cs, tbl, wipedDomains, cs_, scrut, tmp, tmp1, tmp2, tmp3, arr;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    first0 = runtime.Tuple.get(tp2, 0);
    first1 = runtime.Tuple.get(tp2, 1);
    if (runtime.Tuple.isArrayLike(first0) && first0.length === 2) {
      first01 = runtime.Tuple.get(first0, 0);
      first11 = runtime.Tuple.get(first0, 1);
      as_ = first01;
      cs = first11;
      tbl = first1;
      tmp = lscomp13(tbl);
      wipedDomains = tmp;
      scrut = NofibPrelude.null_(wipedDomains);
      if (scrut === true) {
        tmp1 = cs;
      } else {
        tmp2 = NofibPrelude.head(wipedDomains);
        tmp3 = constraints1.collect(tmp2);
        tmp1 = constraints1.Known(tmp3);
      }
      cs_ = tmp1;
      arr = globalThis.Object.freeze([
        as_,
        cs_
      ]);
      return arr
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f6 = function f6(tp2, chs) {
  let first1, first0, a, a1, param0, cs, tmp, arr, tmp1, tmp2, tmp3, arr1;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    first0 = runtime.Tuple.get(tp2, 0);
    first1 = runtime.Tuple.get(tp2, 1);
    a1 = first0;
    a = first0;
    if (first1 instanceof constraints1.Known.class) {
      param0 = first1.vs;
      cs = param0;
      tmp = constraints1.Known(cs);
      arr = globalThis.Object.freeze([
        a1,
        tmp
      ]);
      return constraints1.Node(arr, chs)
    } else if (first1 instanceof constraints1.Unknown.class) {
      tmp1 = map_inst_17_18_tsni(constraints1.label, chs);
      tmp2 = combine_inst_17_116_tsni(tmp1, NofibPrelude.Nil);
      tmp3 = constraints1.Known(tmp2);
      arr1 = globalThis.Object.freeze([
        a,
        tmp3
      ]);
      return constraints1.Node(arr1, chs)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f7 = function f7(tp2, chs) {
  let first1, first0, a, cs_, scrut, a1, param0, cs, tmp, arr, tmp1, tmp2, arr1, arr2;
  if (runtime.Tuple.isArrayLike(tp2) && tp2.length === 2) {
    first0 = runtime.Tuple.get(tp2, 0);
    first1 = runtime.Tuple.get(tp2, 1);
    a1 = first0;
    a = first0;
    if (first1 instanceof constraints1.Known.class) {
      param0 = first1.vs;
      cs = param0;
      tmp = constraints1.Known(cs);
      arr = globalThis.Object.freeze([
        a1,
        tmp
      ]);
      return constraints1.Node(arr, chs)
    } else if (first1 instanceof constraints1.Unknown.class) {
      tmp1 = map_inst_19_20_tsni(constraints1.label, chs);
      tmp2 = combine_inst_19_117_tsni(tmp1, NofibPrelude.Nil);
      cs_ = constraints1.Known(tmp2);
      scrut = constraints1.knownConflict(cs_);
      if (scrut === true) {
        arr1 = globalThis.Object.freeze([
          a,
          cs_
        ]);
        return constraints1.Node(arr1, NofibPrelude.Nil)
      } else {
        arr2 = globalThis.Object.freeze([
          a,
          cs_
        ]);
        return constraints1.Node(arr2, chs)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$9 = function lambda$(csp, tbl, s, x) {
  let tmp, tmp1;
  tmp = NofibPrelude.tail(tbl);
  tmp1 = fillTable_inst_21_22_tsni(s, csp, tmp);
  return cacheChecks_inst_21_tsni(csp, tmp1, x)
};
lambda12 = (undefined, function (csp, tbl, s) {
  return (x) => {
    return lambda$_inst_27_tsni(csp, tbl, s, x)
  }
});
f5 = function f5(csp, tp) {
  let first1, first0, param0, param1, a, as_, tbl, tableEntry, cs, scrut, tbl1, arr, arr1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, arr2, arr3, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(tp) && tp.length === 2) {
    first0 = runtime.Tuple.get(tp, 0);
    first1 = runtime.Tuple.get(tp, 1);
    if (first0 instanceof NofibPrelude.Nil.class) {
      tbl1 = first1;
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        constraints1.Unknown
      ]);
      arr1 = globalThis.Object.freeze([
        arr,
        tbl1
      ]);
      return arr1
    } else if (first0 instanceof NofibPrelude.Cons.class) {
      param0 = first0.head;
      param1 = first0.tail;
      a = param0;
      as_ = param1;
      tbl = first1;
      tmp = constraints1.value(a);
      tmp1 = tmp - 1;
      tmp2 = NofibPrelude.head(tbl);
      tmp3 = NofibPrelude.atIndex(tmp1, tmp2);
      tableEntry = tmp3;
      scrut = tableEntry === constraints1.Unknown;
      if (scrut === true) {
        _deforest_Cons_head = a;
        _deforest_Cons_tail = as_;
        tmp4 = () => {
          let param01, param11, param02, param12, v, t;
          param01 = _deforest_Cons_head;
          param11 = _deforest_Cons_tail;
          if (param01 instanceof constraints.Assign.class) {
            param02 = param01.varr;
            param12 = param01.value;
            v = param02;
            t = param11;
            return v
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        };
        tmp5 = checkComplete_inst_28_124_tsni(csp, tmp4);
      } else {
        tmp5 = tableEntry;
      }
      cs = tmp5;
      tmp6 = NofibPrelude.Cons(a, as_);
      arr2 = globalThis.Object.freeze([
        tmp6,
        cs
      ]);
      arr3 = globalThis.Object.freeze([
        arr2,
        tbl
      ]);
      return arr3
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$8 = function lambda$(csp, x) {
  return f5_inst_29_30_tsni(csp, x)
};
lambda11 = (undefined, function (csp) {
  return (x) => {
    return lambda$_inst_31_32_tsni(csp, x)
  }
});
f4$ = function f4$(var_, val_, rel, cs, varval) {
  let first1, first0, varr, vall, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4;
  if (runtime.Tuple.isArrayLike(varval) && varval.length === 2) {
    first0 = runtime.Tuple.get(varval, 0);
    first1 = runtime.Tuple.get(varval, 1);
    varr = first0;
    vall = first1;
    scrut = cs === constraints1.Unknown;
    if (scrut === true) {
      tmp = constraints1.Assign(var_, val_);
      tmp1 = constraints1.Assign(varr, vall);
      tmp2 = runtime.safeCall(rel(tmp, tmp1));
      scrut1 = ! tmp2;
      if (scrut1 === true) {
        tmp3 = NofibPrelude.Cons(varr, NofibPrelude.Nil);
        tmp4 = NofibPrelude.Cons(var_, tmp3);
        return constraints1.Known(tmp4)
      } else {
        return cs
      }
    } else {
      return cs
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
f4 = function f4(var_, val_, rel) {
  return (cs, varval) => {
    return f4$(var_, val_, rel, cs, varval)
  }
};
lscomp2$ = function lscomp2$(varrr, ls) {
  let param0, param1, valll, t2, arr, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    valll = param0;
    t2 = param1;
    arr = globalThis.Object.freeze([
      varrr,
      valll
    ]);
    tmp = lscomp2$(varrr, t2);
    return NofibPrelude.Cons(arr, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp21 = function lscomp2(varrr) {
  return (ls) => {
    return lscomp2$(varrr, ls)
  }
};
lscomp1$2 = function lscomp1$(vals, ls) {
  let param0, param1, varrr, t1, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    varrr = param0;
    t1 = param1;
    tmp = enumFromTo_inst_33_24_tsni(1, vals);
    tmp1 = lscomp2$_inst_33_25_tsni(varrr, tmp);
    tmp2 = lscomp1$2(vals, t1);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp12 = function lscomp1(vals) {
  return (ls) => {
    return lscomp1$_inst_34_35_tsni(vals, ls)
  }
};
lambda$7 = function lambda$(var_, val_, rel, x, y) {
  let f4$this;
  f4$this = runtime.safeCall(f4(var_, val_, rel));
  return NofibPrelude.zipWith(f4$this, x, y)
};
lambda10 = (undefined, function (var_, val_, rel) {
  return (x, y) => {
    return lambda$7(var_, val_, rel, x, y)
  }
});
lscomp2 = function lscomp2(ls) {
  let param0, param1, m, t2, tmp;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    m = param0;
    t2 = param1;
    tmp = lscomp2(t2);
    return NofibPrelude.Cons(constraints1.Unknown, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1$1 = function lscomp1$(vals, ls) {
  let param0, param1, n, t1, tmp, tmp1, tmp2;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    n = param0;
    t1 = param1;
    tmp = enumFromTo_inst_36_37_tsni(1, vals);
    tmp1 = lscomp2_inst_36_127_tsni(tmp);
    tmp2 = lscomp1$1(vals, t1);
    return NofibPrelude.Cons(tmp1, tmp2)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp11 = function lscomp1(vals) {
  return (ls) => {
    return lscomp1$_inst_38_39_tsni(vals, ls)
  }
};
f3$ = function f3$(csp, s) {
  let scrut;
  scrut = earliestInconsistency_inst_40_41_tsni(csp, s);
  return runtime.safeCall(scrut(s, csp))
};
f3 = function f3(csp) {
  return (s) => {
    return f3$_inst_43_44_tsni(csp, s)
  }
};
lambda8 = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.snd(x);
  return constraints1.knownConflict(tmp)
});
lambda9 = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.snd(x);
  return constraints1.knownSolution(tmp)
});
lambda6 = (undefined, function (x) {
  let tmp, tmp1;
  tmp = NofibPrelude.snd(x);
  tmp1 = tmp === NofibPrelude.None;
  return ! tmp1
});
lambda$6 = function lambda$(csp, x) {
  return constraints1.complete(csp, x)
};
lambda7 = (undefined, function (csp) {
  return (x) => {
    return lambda$6(csp, x)
  }
});
f2$ = function f2$(csp, s) {
  let tmp, arr;
  tmp = earliestInconsistency_inst_45_46_tsni(csp, s);
  arr = globalThis.Object.freeze([
    s,
    tmp
  ]);
  return arr
};
f2 = function f2(csp) {
  return (s) => {
    return f2$_inst_47_48_tsni(csp, s)
  }
};
lambda$5 = function lambda$(rel, a, x) {
  let tmp;
  tmp = runtime.safeCall(rel(a, x));
  return ! tmp
};
lambda5 = (undefined, function (rel, a) {
  return (x) => {
    return lambda$5(rel, a, x)
  }
});
lscomp1$ = function lscomp1$(ss, ls) {
  let param0, param1, j, t1, tmp, tmp1, tmp2, tmp3, tmp4;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    j = param0;
    t1 = param1;
    tmp = constraints1.maxLevel(ss);
    tmp1 = tmp + 1;
    tmp2 = constraints1.Assign(tmp1, j);
    tmp3 = NofibPrelude.Cons(tmp2, ss);
    tmp4 = lscomp1$(ss, t1);
    return NofibPrelude.Cons(tmp3, tmp4)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1 = function lscomp1(ss) {
  return (ls) => {
    return lscomp1$(ss, ls)
  }
};
next$ = function next$(vars, vals, ss) {
  let scrut, tmp, tmp1;
  tmp = constraints1.maxLevel(ss);
  scrut = tmp < vars;
  if (scrut === true) {
    tmp1 = enumFromTo_inst_49_6_tsni(1, vals);
    return lscomp1$_inst_49_7_tsni(ss, tmp1)
  } else {
    return NofibPrelude.Nil
  }
};
next = function next(vars, vals) {
  return (ss) => {
    return next$_inst_50_5_tsni(vars, vals, ss)
  }
};
lambda$4 = function lambda$(f, y) {
  return constraints1.initTree(f, y)
};
lambda4 = (undefined, function (f) {
  return (y) => {
    return lambda$4(f, y)
  }
});
lambda$3 = function lambda$(p, x) {
  let tmp;
  tmp = runtime.safeCall(p(x));
  return ! tmp
};
lambda3 = (undefined, function (p) {
  return (x) => {
    return lambda$3(p, x)
  }
});
lambda$2 = function lambda$(p, x) {
  let tmp;
  tmp = constraints1.label(x);
  return runtime.safeCall(p(tmp))
};
lambda2 = (undefined, function (p) {
  return (x) => {
    return lambda$2(p, x)
  }
});
f1$ = function f1$(p, a, cs) {
  let tmp, lambda$this;
  lambda$this = runtime.safeCall(lambda2(p));
  tmp = NofibPrelude.filter(lambda$this, cs);
  return constraints1.Node(a, tmp)
};
f1 = function f1(p) {
  return (a, cs) => {
    return f1$(p, a, cs)
  }
};
lambda$1 = function lambda$(f, x) {
  return constraints1.foldTree(f, x)
};
lambda1 = (undefined, function (f) {
  return (x) => {
    return lambda$1(f, x)
  }
});
lambda$ = function lambda$(f, x) {
  return constraints1.mapTree(f, x)
};
lambda = (undefined, function (f) {
  return (x) => {
    return lambda$(f, x)
  }
});
globalThis.Object.freeze(class constraints {
  static {
    constraints1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    this.Assign = function Assign(varr, value) {
      return globalThis.Object.freeze(new Assign.class(varr, value));
    };
    globalThis.Object.freeze(class Assign {
      static {
        constraints.Assign.class = this
      }
      constructor(varr, value) {
        this.varr = varr;
        this.value = value;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Assign", ["varr", "value"]]; 
    });
    this.CSP = function CSP(vars, vals, rel) {
      return globalThis.Object.freeze(new CSP.class(vars, vals, rel));
    };
    globalThis.Object.freeze(class CSP {
      static {
        constraints.CSP.class = this
      }
      constructor(vars, vals, rel) {
        this.vars = vars;
        this.vals = vals;
        this.rel = rel;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "CSP", ["vars", "vals", "rel"]]; 
    });
    this.Node = function Node(lab, children) {
      return globalThis.Object.freeze(new Node.class(lab, children));
    };
    globalThis.Object.freeze(class Node {
      static {
        constraints.Node.class = this
      }
      constructor(lab, children) {
        this.lab = lab;
        this.children = children;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Node", ["lab", "children"]]; 
    });
    globalThis.Object.freeze(class ConflictSet {
      static {
        constraints.ConflictSet = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "ConflictSet"]; 
    });
    this.Known = function Known(vs) {
      return globalThis.Object.freeze(new Known.class(vs));
    };
    globalThis.Object.freeze(class Known extends constraints.ConflictSet {
      static {
        constraints.Known.class = this
      }
      constructor(vs) {
        super();
        this.vs = vs;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Known", ["vs"]]; 
    });
    globalThis.Object.freeze(class Unknown extends constraints.ConflictSet {
      static {
        constraints.Unknown = globalThis.Object.freeze(new this)
      }
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Unknown
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Unknown"]; 
    });
  }
  static qsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return constraints.qpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static qpart(le, x, ls, rlt, rge, r) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = constraints.rqsort(le, rge, r);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return constraints.rqsort(le, rlt, tmp1)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le(x, y));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rge);
        return constraints.qpart(le, x, ys, rlt, tmp2, r)
      } else {
        tmp3 = NofibPrelude.Cons(y, rlt);
        return constraints.qpart(le, x, ys, tmp3, rge, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rqsort(le, ls, r) {
    let param0, param1, x, xs, x1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return r
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      x1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(x1, r)
      } else {
        x = param0;
        xs = param1;
        return constraints.rqpart(le, x, xs, NofibPrelude.Nil, NofibPrelude.Nil, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rqpart(le, x, ls, rle, rgt, r) {
    let param0, param1, y, ys, scrut, tmp, tmp1, tmp2, tmp3;
    if (ls instanceof NofibPrelude.Nil.class) {
      tmp = constraints.qsort(le, rgt, r);
      tmp1 = NofibPrelude.Cons(x, tmp);
      return constraints.rqsort(le, rle, tmp1)
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      y = param0;
      ys = param1;
      scrut = runtime.safeCall(le(y, x));
      if (scrut === true) {
        tmp2 = NofibPrelude.Cons(y, rle);
        return constraints.rqpart(le, x, ys, tmp2, rgt, r)
      } else {
        tmp3 = NofibPrelude.Cons(y, rgt);
        return constraints.rqpart(le, x, ys, rle, tmp3, r)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static level(a) {
    let param0, param1, v;
    if (a instanceof constraints.Assign.class) {
      param0 = a.varr;
      param1 = a.value;
      v = param0;
      return v
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static value(a) {
    let param0, param1, v;
    if (a instanceof constraints.Assign.class) {
      param0 = a.varr;
      param1 = a.value;
      v = param1;
      return v
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static maxLevel(ls) {
    let param0, param1, param01, param11, v, t;
    if (ls instanceof NofibPrelude.Nil.class) {
      return 0
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        v = param01;
        t = param1;
        return v
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static complete(csp, s) {
    let param0, param1, param2, v, tmp;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      v = param0;
      tmp = constraints.maxLevel(s);
      return tmp == v
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static safe(as1, as2) {
    let param0, param1, i, m, param01, param11, j, n, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (as1 instanceof constraints.Assign.class) {
      param0 = as1.varr;
      param1 = as1.value;
      i = param0;
      m = param1;
      if (as2 instanceof constraints.Assign.class) {
        param01 = as2.varr;
        param11 = as2.value;
        j = param01;
        n = param11;
        tmp = m == n;
        scrut = ! tmp;
        if (scrut === true) {
          tmp1 = i - j;
          tmp2 = NofibPrelude.abs(tmp1);
          tmp3 = m - n;
          tmp4 = NofibPrelude.abs(tmp3);
          tmp5 = tmp2 == tmp4;
          scrut1 = ! tmp5;
          if (scrut1 === true) {
            return true
          } else {
            return false
          }
        } else {
          return false
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static queens(n) {
    return constraints.CSP(n, n, constraints.safe)
  } 
  static label(n) {
    let param0, param1, l;
    if (n instanceof constraints.Node.class) {
      param0 = n.lab;
      param1 = n.children;
      l = param0;
      return l
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static mapTree(f, n) {
    let param0, param1, l, c, tmp, tmp1, lambda$this;
    if (n instanceof constraints.Node.class) {
      param0 = n.lab;
      param1 = n.children;
      l = param0;
      c = param1;
      tmp = runtime.safeCall(f(l));
      lambda$this = runtime.safeCall(lambda(f));
      tmp1 = NofibPrelude.map(lambda$this, c);
      return constraints.Node(tmp, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static foldTree(f, n) {
    let param0, param1, l, c, tmp, lambda$this;
    if (n instanceof constraints.Node.class) {
      param0 = n.lab;
      param1 = n.children;
      l = param0;
      c = param1;
      lambda$this = runtime.safeCall(lambda1(f));
      tmp = NofibPrelude.map(lambda$this, c);
      return runtime.safeCall(f(l, tmp))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static filterTree(p, t) {
    let f1$this;
    f1$this = runtime.safeCall(f1_inst_51_66_tsni(p));
    return foldTree_inst_51_10_tsni(f1$this, t)
  } 
  static prune(p, t) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda3(p));
    return filterTree_inst_52_9_tsni(lambda$this, t)
  } 
  static leaves(t) {
    let param0, param1, cs, leaf, tmp;
    if (t instanceof constraints.Node.class) {
      param0 = t.lab;
      param1 = t.children;
      leaf = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Cons(leaf, NofibPrelude.Nil)
      } else {
        cs = param1;
        tmp = map_inst_53_13_tsni(constraints.leaves, cs);
        return concat_inst_53_114_tsni(tmp)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static initTree(f, x) {
    let tmp, tmp1, lambda$this;
    tmp = runtime.safeCall(f(x));
    lambda$this = runtime.safeCall(lambda4(f));
    tmp1 = NofibPrelude.map(lambda$this, tmp);
    return constraints.Node(x, tmp1)
  } 
  static mkTree(csp) {
    let param0, param1, param2, vars, vals, rel, next$this;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      next$this = runtime.safeCall(next_inst_54_4_tsni(vars, vals));
      return initTree_inst_54_61_tsni(next$this, NofibPrelude.Nil)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static earliestInconsistency(csp, aas) {
    let param0, param1, param2, vars, vals, rel, param01, param11, a, as_, scrut, tmp, lambda$this;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      if (aas instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.None
      } else if (aas instanceof NofibPrelude.Cons.class) {
        param01 = aas.head;
        param11 = aas.tail;
        a = param01;
        as_ = param11;
        tmp = NofibPrelude.reverse(as_);
        lambda$this = runtime.safeCall(lambda5(rel, a));
        scrut = filter_inst_55_42_tsni(lambda$this, tmp);
        return runtime.safeCall(scrut(a))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static labelInconsistencies(csp, t) {
    let f2$this;
    f2$this = runtime.safeCall(f2_inst_56_57_tsni(csp));
    return constraints.mapTree(f2$this, t)
  } 
  static btsolver0(csp) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
    tmp = mkTree_inst_58_59_tsni(csp);
    tmp1 = labelInconsistencies_inst_58_60_tsni(csp, tmp);
    tmp2 = prune_inst_58_63_tsni(lambda6, tmp1);
    tmp3 = mapTree_inst_58_70_tsni(NofibPrelude.fst, tmp2);
    tmp4 = leaves_inst_58_69_tsni(tmp3);
    lambda$this = runtime.safeCall(lambda7(csp));
    return NofibPrelude.filter(lambda$this, tmp4)
  } 
  static knownConflict(c) {
    let param0, param01, param1, a, as_;
    if (c instanceof constraints.Known.class) {
      param0 = c.vs;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param1 = param0.tail;
        a = param01;
        as_ = param1;
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static knownSolution(c) {
    let param0;
    if (c instanceof constraints.Known.class) {
      param0 = c.vs;
      if (param0 instanceof NofibPrelude.Nil.class) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } 
  static checkComplete(csp, s) {
    let scrut;
    scrut = constraints.complete(csp, s);
    if (scrut === true) {
      return constraints.Known(NofibPrelude.Nil)
    } else {
      return constraints.Unknown
    }
  } 
  static search(labeler, csp) {
    let tmp, tmp1, tmp2, tmp3, tmp4;
    tmp = mkTree_inst_71_3_tsni(csp);
    tmp1 = runtime.safeCall(labeler(csp, tmp));
    tmp2 = prune_inst_71_8_tsni(lambda8, tmp1);
    tmp3 = leaves_inst_71_12_tsni(tmp2);
    tmp4 = filter_inst_71_14_tsni(lambda9, tmp3);
    return map_inst_71_115_tsni(NofibPrelude.fst, tmp4)
  } 
  static bt(csp, t) {
    let f3$this;
    f3$this = runtime.safeCall(f3_inst_72_73_tsni(csp));
    return constraints.mapTree(f3$this, t)
  } 
  static emptyTable(csp) {
    let param0, param1, param2, vars, vals, rel, tmp, tmp1;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      tmp = enumFromTo_inst_74_76_tsni(1, vars);
      tmp1 = lscomp1$_inst_74_75_tsni(vals, tmp);
      return NofibPrelude.Cons(NofibPrelude.Nil, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static fillTable(s, csp, tbl) {
    let param0, param1, param01, param11, var_, val_, as_, param02, param12, param2, vars, vals, rel, tmp, tmp1, tmp2, lambda$this;
    if (s instanceof NofibPrelude.Nil.class) {
      return tbl
    } else if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      if (param0 instanceof constraints.Assign.class) {
        param01 = param0.varr;
        param11 = param0.value;
        var_ = param01;
        val_ = param11;
        as_ = param1;
        if (csp instanceof constraints.CSP.class) {
          param02 = csp.vars;
          param12 = csp.vals;
          param2 = csp.rel;
          vars = param02;
          vals = param12;
          rel = param2;
          tmp = var_ + 1;
          tmp1 = enumFromTo_inst_77_26_tsni(tmp, vars);
          tmp2 = lscomp1$_inst_77_23_tsni(vals, tmp1);
          lambda$this = runtime.safeCall(lambda_inst_77_119_tsni(var_, val_, rel));
          return zipWith_inst_77_118_tsni(lambda$this, tbl, tmp2)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static lookupCache(csp, t) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda_inst_78_79_tsni(csp));
    return constraints.mapTree(lambda$this, t)
  } 
  static cacheChecks(csp, tbl, n) {
    let param0, param1, s, cs, arr, tmp, tmp1;
    if (n instanceof constraints.Node.class) {
      param0 = n.lab;
      param1 = n.children;
      s = param0;
      cs = param1;
      arr = globalThis.Object.freeze([
        s,
        tbl
      ]);
      tmp = runtime.safeCall(lambda_inst_80_tsni(csp, tbl, s));
      tmp1 = NofibPrelude.map(tmp, cs);
      return constraints.Node(arr, tmp1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static bm(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = emptyTable_inst_81_82_tsni(csp);
    tmp1 = cacheChecks_inst_81_83_tsni(csp, tmp, t);
    tmp2 = lookupCache_inst_81_84_tsni(csp, tmp1);
    return mapTree_inst_81_128_tsni(fst_inst_81_129_tsni, tmp2)
  } 
  static combine(ls, acc) {
    let param0, param1, first1, first0, s, param01, cs, css, scrut, tmp, tmp1;
    if (ls instanceof NofibPrelude.Nil.class) {
      return acc
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        s = first0;
        if (first1 instanceof constraints.Known.class) {
          param01 = first1.vs;
          cs = param01;
          css = param1;
          tmp = constraints.maxLevel(s);
          scrut = NofibPrelude.notElem(tmp, cs);
          if (scrut === true) {
            return cs
          } else {
            tmp1 = NofibPrelude.union(cs, acc);
            return constraints.combine(css, tmp1)
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
  } 
  static bj_(csp, t) {
    return constraints.foldTree(f7_inst_87_88_tsni, t)
  } 
  static bj(csp, t) {
    return constraints.foldTree(f6_inst_89_90_tsni, t)
  } 
  static bjbt(csp, t) {
    let tmp;
    tmp = bt_inst_91_92_tsni(csp, t);
    return bj_inst_91_93_tsni(csp, tmp)
  } 
  static bjbt_(csp, t) {
    let tmp;
    tmp = bt_inst_97_98_tsni(csp, t);
    return bj__inst_97_99_tsni(csp, tmp)
  } 
  static collect(ls) {
    let param0, param1, param01, cs, css, tmp;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (param0 instanceof constraints.Known.class) {
        param01 = param0.vs;
        cs = param01;
        css = param1;
        tmp = constraints.collect(css);
        return NofibPrelude.union(cs, tmp)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static domainWipeout(csp, t) {
    let param0, param1, param2, vars, vals, rel;
    if (csp instanceof constraints.CSP.class) {
      param0 = csp.vars;
      param1 = csp.vals;
      param2 = csp.rel;
      vars = param0;
      vals = param1;
      rel = param2;
      return constraints.mapTree(f8, t)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static fc(csp, t) {
    let tmp, tmp1, tmp2;
    tmp = emptyTable_inst_100_101_tsni(csp);
    tmp1 = cacheChecks_inst_100_102_tsni(csp, tmp, t);
    tmp2 = lookupCache_inst_100_103_tsni(csp, tmp1);
    return domainWipeout_inst_100_132_tsni(csp, tmp2)
  } 
  static try_(n, algorithm) {
    let tmp, tmp1;
    tmp = constraints.queens(n);
    tmp1 = search_inst_104_2_tsni(algorithm, tmp);
    return NofibPrelude.listLen(tmp1)
  } 
  static testConstraints_nofib(n) {
    let tmp, tmp1, tmp2, tmp3, tmp4, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4;
    _deforest_Cons_head4 = fc_inst_105_106_tsni;
    _deforest_Cons_tail4 = (f) => {
      return NofibPrelude.Nil
    };
    tmp = (f) => {
      return match_xs_arm_Cons_inst_105_135_tsni(f, _deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = bjbt__inst_105_107_tsni;
    _deforest_Cons_tail3 = tmp;
    tmp1 = (f) => {
      return match_xs_arm_Cons_inst_105_135_tsni(f, _deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = bjbt_inst_105_108_tsni;
    _deforest_Cons_tail2 = tmp1;
    tmp2 = (f) => {
      return match_xs_arm_Cons_inst_105_135_tsni(f, _deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = bm_inst_105_109_tsni;
    _deforest_Cons_tail1 = tmp2;
    tmp3 = (f) => {
      return match_xs_arm_Cons_inst_105_135_tsni(f, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = bt_inst_105_110_tsni;
    _deforest_Cons_tail = tmp3;
    tmp4 = (f) => {
      return match_xs_arm_Cons_inst_105_135_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    };
    lambda$this = runtime.safeCall(lambda_inst_105_111_tsni(n));
    return map_inst_105_135_tsni(lambda$this, tmp4)
  } 
  static main() {
    let tmp;
    tmp = testConstraints_nofib_inst_112_113_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "constraints"]; 
});
let constraints = constraints1; export default constraints;
