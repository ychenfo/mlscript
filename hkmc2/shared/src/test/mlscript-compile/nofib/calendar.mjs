import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let body, pad, banner, entries, pic, title, months, table, calendar1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda$, table$, pad$, pic$, body$, lambda$1, cal_inst_0_1_tsni, unlines_inst_0_1_2_tsni, map_inst_0_1_2_3_tsni, lambda_inst_0_1_2_4_tsni, append_inst_0_1_2_4_5_tsni, body$_inst_0_1_6_tsni, months_inst_0_1_6_7_tsni, monthLengths_inst_0_1_6_7_8_tsni, firstDays_inst_0_1_6_7_9_tsni, monthLengths_inst_0_1_6_7_9_10_tsni, scanl_inst_0_1_6_7_9_11_tsni, map_inst_0_1_6_7_9_12_tsni, take_inst_0_1_6_7_9_13_tsni, lambda_inst_0_1_6_14_tsni, lambda$_inst_0_1_6_14_15_tsni, pic$_inst_0_1_6_14_15_16_tsni, table$_inst_0_1_6_14_15_16_17_tsni, entries_inst_0_1_6_14_15_16_17_18_tsni, block_inst_0_1_6_14_15_16_17_18_19_tsni, groop_inst_0_1_6_14_15_16_17_18_19_20_tsni, dates_inst_0_1_6_14_15_16_17_18_21_tsni, lambda_inst_0_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_0_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_0_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni, title_inst_0_1_6_14_15_16_29_tsni, cjustify_inst_0_1_6_14_15_16_29_30_tsni, space_inst_0_1_6_14_15_16_29_30_31_tsni, replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni, pad$_inst_0_1_6_14_15_32_tsni, zipWith_inst_0_1_6_14_15_32_33_tsni, zipWith_inst_0_1_6_14_15_32_34_tsni, block_inst_0_1_6_35_tsni, groop_inst_0_1_6_35_20_tsni, spread_inst_0_1_6_35_36_tsni, lambda_inst_0_1_6_35_36_37_tsni, lambda_inst_0_1_6_35_36_37_38_tsni, append_inst_0_1_6_35_36_37_38_39_tsni, banner_inst_0_1_40_tsni, cjustify_inst_0_1_40_41_tsni, space_inst_0_1_40_41_31_tsni, replicate_inst_0_1_40_41_31_27_tsni, emptyPic_inst_0_1_40_42_tsni, replicate_inst_0_1_40_42_43_tsni, replicate_inst_0_1_40_42_44_tsni, space_inst_0_1_40_41_45_tsni, replicate_inst_0_1_40_41_45_27_tsni, append_inst_0_1_40_41_46_tsni, append_inst_0_1_40_41_47_tsni, emptyPic_inst_0_1_48_tsni, replicate_inst_0_1_48_44_tsni, cjustify_inst_49_41_tsni, space_inst_49_41_31_tsni, replicate_inst_49_41_31_27_tsni, pic$_inst_50_16_tsni, table$_inst_50_16_17_tsni, entries_inst_50_16_17_18_tsni, block_inst_50_16_17_18_19_tsni, groop_inst_50_16_17_18_19_20_tsni, dates_inst_50_16_17_18_21_tsni, lambda_inst_50_16_17_18_21_22_tsni, lambda$_inst_50_16_17_18_21_22_23_tsni, date_inst_50_16_17_18_21_22_23_24_tsni, rjustify_inst_50_16_17_18_21_22_23_24_25_tsni, space_inst_50_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_50_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_50_16_17_18_21_28_tsni, title_inst_50_16_29_tsni, cjustify_inst_50_16_29_30_tsni, space_inst_50_16_29_30_31_tsni, replicate_inst_50_16_29_30_31_27_tsni, pad$_inst_50_32_tsni, zipWith_inst_50_32_33_tsni, zipWith_inst_50_32_34_tsni, lambda$_inst_51_15_tsni, pad$_inst_51_15_32_tsni, zipWith_inst_51_15_32_34_tsni, zipWith_inst_51_15_32_33_tsni, pic$_inst_51_15_16_tsni, title_inst_51_15_16_29_tsni, cjustify_inst_51_15_16_29_30_tsni, space_inst_51_15_16_29_30_31_tsni, replicate_inst_51_15_16_29_30_31_27_tsni, table$_inst_51_15_16_17_tsni, entries_inst_51_15_16_17_18_tsni, dates_inst_51_15_16_17_18_21_tsni, lambda_inst_51_15_16_17_18_21_22_tsni, lambda$_inst_51_15_16_17_18_21_22_23_tsni, date_inst_51_15_16_17_18_21_22_23_24_tsni, rjustify_inst_51_15_16_17_18_21_22_23_24_25_tsni, space_inst_51_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_51_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_51_15_16_17_18_21_28_tsni, block_inst_51_15_16_17_18_19_tsni, groop_inst_51_15_16_17_18_19_20_tsni, months_inst_52_7_tsni, monthLengths_inst_52_7_8_tsni, firstDays_inst_52_7_9_tsni, monthLengths_inst_52_7_9_10_tsni, scanl_inst_52_7_9_11_tsni, map_inst_52_7_9_12_tsni, take_inst_52_7_9_13_tsni, lambda_inst_52_14_tsni, lambda$_inst_52_14_15_tsni, pic$_inst_52_14_15_16_tsni, table$_inst_52_14_15_16_17_tsni, entries_inst_52_14_15_16_17_18_tsni, block_inst_52_14_15_16_17_18_19_tsni, groop_inst_52_14_15_16_17_18_19_20_tsni, dates_inst_52_14_15_16_17_18_21_tsni, lambda_inst_52_14_15_16_17_18_21_22_tsni, lambda$_inst_52_14_15_16_17_18_21_22_23_tsni, date_inst_52_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_52_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_52_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_52_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_52_14_15_16_17_18_21_28_tsni, title_inst_52_14_15_16_29_tsni, cjustify_inst_52_14_15_16_29_30_tsni, space_inst_52_14_15_16_29_30_31_tsni, replicate_inst_52_14_15_16_29_30_31_27_tsni, pad$_inst_52_14_15_32_tsni, zipWith_inst_52_14_15_32_33_tsni, zipWith_inst_52_14_15_32_34_tsni, block_inst_52_35_tsni, groop_inst_52_35_20_tsni, body$_inst_53_54_tsni, block_inst_53_54_35_tsni, groop_inst_53_54_35_20_tsni, lambda_inst_53_54_14_tsni, lambda$_inst_53_54_14_15_tsni, pad$_inst_53_54_14_15_32_tsni, zipWith_inst_53_54_14_15_32_34_tsni, zipWith_inst_53_54_14_15_32_33_tsni, pic$_inst_53_54_14_15_16_tsni, title_inst_53_54_14_15_16_29_tsni, cjustify_inst_53_54_14_15_16_29_30_tsni, space_inst_53_54_14_15_16_29_30_31_tsni, replicate_inst_53_54_14_15_16_29_30_31_27_tsni, table$_inst_53_54_14_15_16_17_tsni, entries_inst_53_54_14_15_16_17_18_tsni, dates_inst_53_54_14_15_16_17_18_21_tsni, lambda_inst_53_54_14_15_16_17_18_21_22_tsni, lambda$_inst_53_54_14_15_16_17_18_21_22_23_tsni, date_inst_53_54_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_53_54_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_53_54_14_15_16_17_18_21_28_tsni, block_inst_53_54_14_15_16_17_18_19_tsni, groop_inst_53_54_14_15_16_17_18_19_20_tsni, months_inst_53_54_7_tsni, firstDays_inst_53_54_7_9_tsni, map_inst_53_54_7_9_12_tsni, scanl_inst_53_54_7_9_11_tsni, monthLengths_inst_53_54_7_9_10_tsni, take_inst_53_54_7_9_13_tsni, monthLengths_inst_53_54_7_8_tsni, title_inst_55_29_tsni, cjustify_inst_55_29_30_tsni, space_inst_55_29_30_31_tsni, replicate_inst_55_29_30_31_27_tsni, table$_inst_55_17_tsni, entries_inst_55_17_18_tsni, dates_inst_55_17_18_21_tsni, lambda_inst_55_17_18_21_22_tsni, lambda$_inst_55_17_18_21_22_23_tsni, date_inst_55_17_18_21_22_23_24_tsni, rjustify_inst_55_17_18_21_22_23_24_25_tsni, space_inst_55_17_18_21_22_23_24_25_26_tsni, replicate_inst_55_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_55_17_18_21_28_tsni, block_inst_55_17_18_19_tsni, groop_inst_55_17_18_19_20_tsni, pic$_inst_56_57_tsni, table$_inst_56_57_17_tsni, entries_inst_56_57_17_18_tsni, block_inst_56_57_17_18_19_tsni, groop_inst_56_57_17_18_19_20_tsni, dates_inst_56_57_17_18_21_tsni, lambda_inst_56_57_17_18_21_22_tsni, lambda$_inst_56_57_17_18_21_22_23_tsni, date_inst_56_57_17_18_21_22_23_24_tsni, rjustify_inst_56_57_17_18_21_22_23_24_25_tsni, space_inst_56_57_17_18_21_22_23_24_25_26_tsni, replicate_inst_56_57_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_56_57_17_18_21_28_tsni, title_inst_56_57_29_tsni, cjustify_inst_56_57_29_30_tsni, space_inst_56_57_29_30_31_tsni, replicate_inst_56_57_29_30_31_27_tsni, zipWith_inst_58_34_tsni, zipWith_inst_58_33_tsni, pad$_inst_59_60_tsni, zipWith_inst_59_60_33_tsni, zipWith_inst_59_60_34_tsni, append_inst_59_60_61_tsni, cjustify_inst_62_30_tsni, space_inst_62_30_31_tsni, replicate_inst_62_30_31_27_tsni, entries_inst_63_18_tsni, block_inst_63_18_19_tsni, groop_inst_63_18_19_20_tsni, dates_inst_63_18_21_tsni, lambda_inst_63_18_21_22_tsni, lambda$_inst_63_18_21_22_23_tsni, date_inst_63_18_21_22_23_24_tsni, rjustify_inst_63_18_21_22_23_24_25_tsni, space_inst_63_18_21_22_23_24_25_26_tsni, replicate_inst_63_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_63_18_21_28_tsni, table$_inst_64_65_tsni, entries_inst_64_65_18_tsni, dates_inst_64_65_18_21_tsni, lambda_inst_64_65_18_21_22_tsni, lambda$_inst_64_65_18_21_22_23_tsni, date_inst_64_65_18_21_22_23_24_tsni, rjustify_inst_64_65_18_21_22_23_24_25_tsni, space_inst_64_65_18_21_22_23_24_25_26_tsni, replicate_inst_64_65_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_64_65_18_21_28_tsni, block_inst_64_65_18_19_tsni, groop_inst_64_65_18_19_20_tsni, dates_inst_66_21_tsni, lambda_inst_66_21_22_tsni, lambda$_inst_66_21_22_23_tsni, date_inst_66_21_22_23_24_tsni, rjustify_inst_66_21_22_23_24_25_tsni, space_inst_66_21_22_23_24_25_26_tsni, replicate_inst_66_21_22_23_24_25_26_27_tsni, enumFromTo_inst_66_21_28_tsni, block_inst_66_19_tsni, groop_inst_66_19_20_tsni, firstDays_inst_67_9_tsni, map_inst_67_9_12_tsni, scanl_inst_67_9_11_tsni, monthLengths_inst_67_9_10_tsni, take_inst_67_9_13_tsni, monthLengths_inst_67_8_tsni, date_inst_68_24_tsni, rjustify_inst_68_24_25_tsni, space_inst_68_24_25_26_tsni, replicate_inst_68_24_25_26_27_tsni, lambda$_inst_69_23_tsni, date_inst_69_23_24_tsni, rjustify_inst_69_23_24_25_tsni, space_inst_69_23_24_25_26_tsni, replicate_inst_69_23_24_25_26_27_tsni, map_inst_70_3_tsni, lambda_inst_70_4_tsni, append_inst_70_4_5_tsni, groop_inst_71_20_tsni, groop_inst_72_73_tsni, emptyPic_inst_74_75_tsni, replicate_inst_74_75_43_tsni, zipWith_inst_74_76_tsni, monthLengths_inst_77_10_tsni, scanl_inst_77_11_tsni, map_inst_77_12_tsni, space_inst_78_26_tsni, replicate_inst_78_26_27_tsni, rjustify_inst_79_25_tsni, space_inst_79_25_26_tsni, replicate_inst_79_25_26_27_tsni, lambda_inst_80_22_tsni, lambda$_inst_80_22_23_tsni, date_inst_80_22_23_24_tsni, rjustify_inst_80_22_23_24_25_tsni, space_inst_80_22_23_24_25_26_tsni, replicate_inst_80_22_23_24_25_26_27_tsni, enumFromTo_inst_80_28_tsni, space_inst_81_31_tsni, replicate_inst_81_31_27_tsni, banner_inst_82_40_tsni, cjustify_inst_82_40_41_tsni, space_inst_82_40_41_31_tsni, replicate_inst_82_40_41_31_27_tsni, body$_inst_82_6_tsni, block_inst_82_6_35_tsni, groop_inst_82_6_35_20_tsni, lambda_inst_82_6_14_tsni, lambda$_inst_82_6_14_15_tsni, pad$_inst_82_6_14_15_32_tsni, zipWith_inst_82_6_14_15_32_34_tsni, zipWith_inst_82_6_14_15_32_33_tsni, pic$_inst_82_6_14_15_16_tsni, title_inst_82_6_14_15_16_29_tsni, cjustify_inst_82_6_14_15_16_29_30_tsni, space_inst_82_6_14_15_16_29_30_31_tsni, replicate_inst_82_6_14_15_16_29_30_31_27_tsni, table$_inst_82_6_14_15_16_17_tsni, entries_inst_82_6_14_15_16_17_18_tsni, dates_inst_82_6_14_15_16_17_18_21_tsni, lambda_inst_82_6_14_15_16_17_18_21_22_tsni, lambda$_inst_82_6_14_15_16_17_18_21_22_23_tsni, date_inst_82_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_82_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_82_6_14_15_16_17_18_21_28_tsni, block_inst_82_6_14_15_16_17_18_19_tsni, groop_inst_82_6_14_15_16_17_18_19_20_tsni, months_inst_82_6_7_tsni, firstDays_inst_82_6_7_9_tsni, map_inst_82_6_7_9_12_tsni, scanl_inst_82_6_7_9_11_tsni, monthLengths_inst_82_6_7_9_10_tsni, take_inst_82_6_7_9_13_tsni, monthLengths_inst_82_6_7_8_tsni, emptyPic_inst_82_48_tsni, replicate_inst_82_48_44_tsni, emptyPic_inst_82_40_42_tsni, replicate_inst_82_40_42_43_tsni, unlines_inst_82_2_tsni, map_inst_82_2_3_tsni, lambda_inst_82_2_4_tsni, append_inst_82_2_4_5_tsni, spread_inst_82_6_35_36_tsni, lambda_inst_82_6_35_36_37_tsni, lambda_inst_82_6_35_36_37_38_tsni, append_inst_82_6_35_36_37_38_39_tsni, replicate_inst_82_40_42_44_tsni, append_inst_82_40_41_46_tsni, space_inst_82_40_41_45_tsni, replicate_inst_82_40_41_45_27_tsni, append_inst_82_40_41_47_tsni, lambda_inst_83_84_tsni, cal_inst_83_84_1_tsni, banner_inst_83_84_1_40_tsni, cjustify_inst_83_84_1_40_41_tsni, space_inst_83_84_1_40_41_31_tsni, replicate_inst_83_84_1_40_41_31_27_tsni, body$_inst_83_84_1_6_tsni, block_inst_83_84_1_6_35_tsni, groop_inst_83_84_1_6_35_20_tsni, lambda_inst_83_84_1_6_14_tsni, lambda$_inst_83_84_1_6_14_15_tsni, pad$_inst_83_84_1_6_14_15_32_tsni, zipWith_inst_83_84_1_6_14_15_32_34_tsni, zipWith_inst_83_84_1_6_14_15_32_33_tsni, pic$_inst_83_84_1_6_14_15_16_tsni, title_inst_83_84_1_6_14_15_16_29_tsni, cjustify_inst_83_84_1_6_14_15_16_29_30_tsni, space_inst_83_84_1_6_14_15_16_29_30_31_tsni, replicate_inst_83_84_1_6_14_15_16_29_30_31_27_tsni, table$_inst_83_84_1_6_14_15_16_17_tsni, entries_inst_83_84_1_6_14_15_16_17_18_tsni, dates_inst_83_84_1_6_14_15_16_17_18_21_tsni, lambda_inst_83_84_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_83_84_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_83_84_1_6_14_15_16_17_18_21_28_tsni, block_inst_83_84_1_6_14_15_16_17_18_19_tsni, groop_inst_83_84_1_6_14_15_16_17_18_19_20_tsni, months_inst_83_84_1_6_7_tsni, firstDays_inst_83_84_1_6_7_9_tsni, map_inst_83_84_1_6_7_9_12_tsni, scanl_inst_83_84_1_6_7_9_11_tsni, monthLengths_inst_83_84_1_6_7_9_10_tsni, take_inst_83_84_1_6_7_9_13_tsni, monthLengths_inst_83_84_1_6_7_8_tsni, emptyPic_inst_83_84_1_48_tsni, replicate_inst_83_84_1_48_44_tsni, emptyPic_inst_83_84_1_40_42_tsni, replicate_inst_83_84_1_40_42_43_tsni, unlines_inst_83_84_1_2_tsni, map_inst_83_84_1_2_3_tsni, lambda_inst_83_84_1_2_4_tsni, append_inst_83_84_1_2_4_5_tsni, spread_inst_83_84_1_6_35_36_tsni, lambda_inst_83_84_1_6_35_36_37_tsni, lambda_inst_83_84_1_6_35_36_37_38_tsni, append_inst_83_84_1_6_35_36_37_38_39_tsni, replicate_inst_83_84_1_40_42_44_tsni, append_inst_83_84_1_40_41_46_tsni, space_inst_83_84_1_40_41_45_tsni, replicate_inst_83_84_1_40_41_45_27_tsni, append_inst_83_84_1_40_41_47_tsni, enumFromTo_inst_83_85_tsni, testCalendar_nofib_inst_86_87_tsni, lambda_inst_86_87_84_tsni, cal_inst_86_87_84_1_tsni, unlines_inst_86_87_84_1_2_tsni, map_inst_86_87_84_1_2_3_tsni, lambda_inst_86_87_84_1_2_4_tsni, append_inst_86_87_84_1_2_4_5_tsni, body$_inst_86_87_84_1_6_tsni, months_inst_86_87_84_1_6_7_tsni, monthLengths_inst_86_87_84_1_6_7_8_tsni, firstDays_inst_86_87_84_1_6_7_9_tsni, monthLengths_inst_86_87_84_1_6_7_9_10_tsni, scanl_inst_86_87_84_1_6_7_9_11_tsni, map_inst_86_87_84_1_6_7_9_12_tsni, take_inst_86_87_84_1_6_7_9_13_tsni, lambda_inst_86_87_84_1_6_14_tsni, lambda$_inst_86_87_84_1_6_14_15_tsni, pic$_inst_86_87_84_1_6_14_15_16_tsni, table$_inst_86_87_84_1_6_14_15_16_17_tsni, entries_inst_86_87_84_1_6_14_15_16_17_18_tsni, block_inst_86_87_84_1_6_14_15_16_17_18_19_tsni, groop_inst_86_87_84_1_6_14_15_16_17_18_19_20_tsni, dates_inst_86_87_84_1_6_14_15_16_17_18_21_tsni, lambda_inst_86_87_84_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_86_87_84_1_6_14_15_16_17_18_21_28_tsni, title_inst_86_87_84_1_6_14_15_16_29_tsni, cjustify_inst_86_87_84_1_6_14_15_16_29_30_tsni, space_inst_86_87_84_1_6_14_15_16_29_30_31_tsni, replicate_inst_86_87_84_1_6_14_15_16_29_30_31_27_tsni, pad$_inst_86_87_84_1_6_14_15_32_tsni, zipWith_inst_86_87_84_1_6_14_15_32_33_tsni, zipWith_inst_86_87_84_1_6_14_15_32_34_tsni, block_inst_86_87_84_1_6_35_tsni, groop_inst_86_87_84_1_6_35_20_tsni, spread_inst_86_87_84_1_6_35_36_tsni, lambda_inst_86_87_84_1_6_35_36_37_tsni, lambda_inst_86_87_84_1_6_35_36_37_38_tsni, append_inst_86_87_84_1_6_35_36_37_38_39_tsni, banner_inst_86_87_84_1_40_tsni, cjustify_inst_86_87_84_1_40_41_tsni, space_inst_86_87_84_1_40_41_31_tsni, replicate_inst_86_87_84_1_40_41_31_27_tsni, emptyPic_inst_86_87_84_1_40_42_tsni, replicate_inst_86_87_84_1_40_42_43_tsni, replicate_inst_86_87_84_1_40_42_44_tsni, space_inst_86_87_84_1_40_41_45_tsni, replicate_inst_86_87_84_1_40_41_45_27_tsni, append_inst_86_87_84_1_40_41_46_tsni, append_inst_86_87_84_1_40_41_47_tsni, emptyPic_inst_86_87_84_1_48_tsni, replicate_inst_86_87_84_1_48_44_tsni, enumFromTo_inst_86_87_85_tsni, map_inst_86_87_88_tsni, concat_inst_86_87_84_1_2_89_tsni, append_inst_86_87_84_1_2_89_90_tsni, concat_inst_86_91_tsni, append_inst_86_91_90_tsni, concat_inst_0_1_2_89_tsni, append_inst_0_1_2_89_90_tsni, zip3_inst_0_1_6_7_92_tsni, map_inst_0_1_6_14_15_16_17_18_19_93_tsni, append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_0_1_6_14_15_16_17_18_21_95_tsni, append_inst_0_1_6_14_15_16_29_30_47_tsni, append_inst_0_1_6_14_15_16_96_tsni, append_inst_0_1_6_14_15_32_97_tsni, map_inst_0_1_6_35_93_tsni, append_inst_0_1_98_tsni, append_inst_0_1_6_14_15_16_17_99_tsni, emptyPic_inst_0_1_100_tsni, append_inst_0_1_6_14_15_32_61_tsni, append_inst_49_41_47_tsni, emptyPic_inst_49_42_tsni, map_inst_50_16_17_18_19_93_tsni, append_inst_50_16_17_18_21_22_23_24_25_94_tsni, map_inst_50_16_17_18_21_95_tsni, append_inst_50_16_29_30_47_tsni, append_inst_50_16_96_tsni, append_inst_50_32_97_tsni, append_inst_51_15_32_97_tsni, append_inst_51_15_16_29_30_47_tsni, append_inst_51_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_51_15_16_17_18_21_95_tsni, map_inst_51_15_16_17_18_19_93_tsni, append_inst_51_15_16_96_tsni, zip3_inst_52_7_92_tsni, map_inst_52_14_15_16_17_18_19_93_tsni, append_inst_52_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_52_14_15_16_17_18_21_95_tsni, append_inst_52_14_15_16_29_30_47_tsni, append_inst_52_14_15_16_96_tsni, append_inst_52_14_15_32_97_tsni, map_inst_52_35_93_tsni, map_inst_53_54_35_93_tsni, append_inst_53_54_14_15_32_97_tsni, append_inst_53_54_14_15_16_29_30_47_tsni, append_inst_53_54_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_53_54_14_15_16_17_18_21_95_tsni, map_inst_53_54_14_15_16_17_18_19_93_tsni, append_inst_53_54_14_15_16_96_tsni, zip3_inst_53_54_7_92_tsni, append_inst_55_29_30_47_tsni, append_inst_55_17_18_21_22_23_24_25_94_tsni, map_inst_55_17_18_21_95_tsni, map_inst_55_17_18_19_93_tsni, append_inst_55_96_tsni, map_inst_56_57_17_18_19_93_tsni, append_inst_56_57_17_18_21_22_23_24_25_94_tsni, map_inst_56_57_17_18_21_95_tsni, append_inst_56_57_29_30_47_tsni, append_inst_56_57_96_tsni, append_inst_58_97_tsni, append_inst_59_60_97_tsni, append_inst_59_60_101_tsni, append_inst_62_30_47_tsni, map_inst_63_18_19_93_tsni, append_inst_63_18_21_22_23_24_25_94_tsni, map_inst_63_18_21_95_tsni, append_inst_64_65_18_21_22_23_24_25_94_tsni, map_inst_64_65_18_21_95_tsni, map_inst_64_65_18_19_93_tsni, append_inst_66_21_22_23_24_25_94_tsni, map_inst_66_21_95_tsni, map_inst_66_19_93_tsni, zip3_inst_67_92_tsni, append_inst_68_24_25_94_tsni, append_inst_69_23_24_25_94_tsni, concat_inst_70_89_tsni, append_inst_70_89_90_tsni, map_inst_71_93_tsni, map_inst_72_102_tsni, emptyPic_inst_74_103_tsni, append_inst_74_104_tsni, take_inst_77_13_tsni, append_inst_78_94_tsni, append_inst_79_25_94_tsni, append_inst_80_22_23_24_25_94_tsni, map_inst_80_95_tsni, append_inst_81_47_tsni, emptyPic_inst_82_100_tsni, map_inst_82_6_35_93_tsni, append_inst_82_6_14_15_32_97_tsni, append_inst_82_6_14_15_16_29_30_47_tsni, append_inst_82_6_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_82_6_14_15_16_17_18_21_95_tsni, map_inst_82_6_14_15_16_17_18_19_93_tsni, append_inst_82_6_14_15_16_96_tsni, zip3_inst_82_6_7_92_tsni, append_inst_82_6_14_15_32_61_tsni, append_inst_82_6_14_15_16_17_99_tsni, append_inst_82_98_tsni, concat_inst_82_2_89_tsni, append_inst_82_2_89_90_tsni, emptyPic_inst_83_84_1_100_tsni, map_inst_83_84_1_6_35_93_tsni, append_inst_83_84_1_6_14_15_32_97_tsni, append_inst_83_84_1_6_14_15_16_29_30_47_tsni, append_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_83_84_1_6_14_15_16_17_18_21_95_tsni, map_inst_83_84_1_6_14_15_16_17_18_19_93_tsni, append_inst_83_84_1_6_14_15_16_96_tsni, zip3_inst_83_84_1_6_7_92_tsni, append_inst_83_84_1_6_14_15_32_61_tsni, append_inst_83_84_1_6_14_15_16_17_99_tsni, append_inst_83_84_1_98_tsni, concat_inst_83_84_1_2_89_tsni, append_inst_83_84_1_2_89_90_tsni, map_inst_83_88_tsni, zip3_inst_86_87_84_1_6_7_92_tsni, map_inst_86_87_84_1_6_14_15_16_17_18_19_93_tsni, append_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni, map_inst_86_87_84_1_6_14_15_16_17_18_21_95_tsni, append_inst_86_87_84_1_6_14_15_16_29_30_47_tsni, append_inst_86_87_84_1_6_14_15_16_96_tsni, append_inst_86_87_84_1_6_14_15_32_97_tsni, map_inst_86_87_84_1_6_35_93_tsni, append_inst_86_87_84_1_98_tsni, append_inst_86_87_84_1_6_14_15_16_17_99_tsni, emptyPic_inst_86_87_84_1_100_tsni, append_inst_86_87_84_1_6_14_15_32_61_tsni, nofibListToString_inst_86_105_tsni, match_xs_arm_Cons_inst_0_1_2_89_90_tsni, match_zs_arm_Cons_inst_0_1_6_7_92_tsni, match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni, match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni, match_ys_arm_default_inst_0_1_6_7_92_tsni, match_xs_arm_Nil_inst_0_1_6_14_15_32_97_tsni, match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni, match_xs_arm_Cons_inst_0_1_2_4_5_tsni, match_xs_arm_Cons_inst_0_1_98_tsni, match_xs_arm_Nil_inst_0_1_2_4_5_tsni, match_xs_arm_Nil_inst_50_32_97_tsni, match_xss_arm_default_inst_50_32_33_tsni, match_xss_arm_default_inst_51_15_32_33_tsni, match_xs_arm_Nil_inst_51_15_32_97_tsni, match_zs_arm_Cons_inst_52_7_92_tsni, match_ls_arm_Cons_inst_52_7_9_11_tsni, match_xs_arm_Cons_inst_52_7_9_12_tsni, match_ys_arm_default_inst_52_7_92_tsni, match_xs_arm_Nil_inst_52_14_15_32_97_tsni, match_xss_arm_default_inst_52_14_15_32_33_tsni, match_xss_arm_default_inst_53_54_14_15_32_33_tsni, match_xs_arm_Nil_inst_53_54_14_15_32_97_tsni, match_xs_arm_Cons_inst_53_54_7_9_12_tsni, match_ls_arm_Cons_inst_53_54_7_9_11_tsni, match_ys_arm_default_inst_53_54_7_92_tsni, match_zs_arm_Cons_inst_53_54_7_92_tsni, match_xss_arm_default_inst_58_33_tsni, match_xs_arm_Nil_inst_58_97_tsni, match_xs_arm_Nil_inst_59_60_97_tsni, match_xss_arm_default_inst_59_60_33_tsni, match_xs_arm_Cons_inst_67_9_12_tsni, match_ls_arm_Cons_inst_67_9_11_tsni, match_ys_arm_default_inst_67_92_tsni, match_zs_arm_Cons_inst_67_92_tsni, match_xs_arm_Cons_inst_70_89_90_tsni, match_xs_arm_Nil_inst_74_104_tsni, match_ls_arm_Cons_inst_77_11_tsni, match_xs_arm_Cons_inst_77_12_tsni, match_xss_arm_default_inst_82_6_14_15_32_33_tsni, match_xs_arm_Nil_inst_82_6_14_15_32_97_tsni, match_xs_arm_Cons_inst_82_6_7_9_12_tsni, match_ls_arm_Cons_inst_82_6_7_9_11_tsni, match_ys_arm_default_inst_82_6_7_92_tsni, match_zs_arm_Cons_inst_82_6_7_92_tsni, match_xs_arm_Cons_inst_82_98_tsni, match_xs_arm_Cons_inst_82_2_89_90_tsni, match_xs_arm_Cons_inst_82_2_4_5_tsni, match_xs_arm_Nil_inst_82_2_4_5_tsni, match_xss_arm_default_inst_83_84_1_6_14_15_32_33_tsni, match_xs_arm_Nil_inst_83_84_1_6_14_15_32_97_tsni, match_xs_arm_Cons_inst_83_84_1_6_7_9_12_tsni, match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni, match_ys_arm_default_inst_83_84_1_6_7_92_tsni, match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni, match_xs_arm_Cons_inst_83_84_1_98_tsni, match_xs_arm_Cons_inst_83_84_1_2_89_90_tsni, match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni, match_xs_arm_Nil_inst_83_84_1_2_4_5_tsni, match_xs_arm_Cons_inst_86_87_84_1_2_89_90_tsni, match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni, match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni, match_xs_arm_Cons_inst_86_87_84_1_6_7_9_12_tsni, match_ys_arm_default_inst_86_87_84_1_6_7_92_tsni, match_xs_arm_Nil_inst_86_87_84_1_6_14_15_32_97_tsni, match_xss_arm_default_inst_86_87_84_1_6_14_15_32_33_tsni, match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni, match_xs_arm_Cons_inst_86_87_84_1_98_tsni, match_xs_arm_Nil_inst_86_87_84_1_2_4_5_tsni;
match_xs_arm_Cons_inst_0_1_2_89_90_tsni = function match_xs_arm_Cons_inst_0_1_2_89_90_tsni(ys, _deforest_Cons_head_inst_0_1_2_89_90_tsni, _deforest_Cons_tail_inst_0_1_2_89_90_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_1_2_89_90_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_89_90_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_2_89_90_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_zs_arm_Cons_inst_0_1_6_7_92_tsni = function match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_0_1_6_7_92_tsni, _deforest_Cons_tail_inst_0_1_6_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_0_1_6_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_6_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_0_1_6_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni = function match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head_inst_0_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_0_1_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_0_1_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni = function match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni(f, _deforest_Cons_head_inst_0_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_0_1_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_0_1_6_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_0_1_6_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_0_1_6_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ys_arm_default_inst_0_1_6_7_92_tsni = function match_ys_arm_default_inst_0_1_6_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_0_1_6_14_15_32_97_tsni = function match_xs_arm_Nil_inst_0_1_6_14_15_32_97_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni = function match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_0_1_6_14_15_32_97_tsni(ys)
  }
};
match_xs_arm_Cons_inst_0_1_2_4_5_tsni = function match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys, _deforest_Cons_head_inst_0_1_2_4_5_tsni, _deforest_Cons_tail_inst_0_1_2_4_5_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_0_1_2_4_5_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_4_5_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_2_4_5_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    return match_xs_arm_Cons_inst_0_1_2_89_90_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_0_1_98_tsni = function match_xs_arm_Cons_inst_0_1_98_tsni(ys, _deforest_Cons_head_inst_0_1_98_tsni, _deforest_Cons_tail_inst_0_1_98_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_1_98_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_98_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_98_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_0_1_2_4_5_tsni = function match_xs_arm_Nil_inst_0_1_2_4_5_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_50_32_97_tsni = function match_xs_arm_Nil_inst_50_32_97_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_50_32_33_tsni = function match_xss_arm_default_inst_50_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_50_32_97_tsni(ys)
  }
};
match_xss_arm_default_inst_51_15_32_33_tsni = function match_xss_arm_default_inst_51_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_51_15_32_97_tsni(ys)
  }
};
match_xs_arm_Nil_inst_51_15_32_97_tsni = function match_xs_arm_Nil_inst_51_15_32_97_tsni(ys) {
  return ys
};
match_zs_arm_Cons_inst_52_7_92_tsni = function match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_52_7_92_tsni, _deforest_Cons_tail_inst_52_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_52_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_52_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_52_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_52_7_9_11_tsni = function match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head_inst_52_7_9_11_tsni, _deforest_Cons_tail_inst_52_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_52_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_52_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_52_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_52_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_52_7_9_12_tsni = function match_xs_arm_Cons_inst_52_7_9_12_tsni(f, _deforest_Cons_head_inst_52_7_9_12_tsni, _deforest_Cons_tail_inst_52_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_52_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_52_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_52_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_52_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_52_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ys_arm_default_inst_52_7_92_tsni = function match_ys_arm_default_inst_52_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_52_14_15_32_97_tsni = function match_xs_arm_Nil_inst_52_14_15_32_97_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_52_14_15_32_33_tsni = function match_xss_arm_default_inst_52_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_52_14_15_32_97_tsni(ys)
  }
};
match_xss_arm_default_inst_53_54_14_15_32_33_tsni = function match_xss_arm_default_inst_53_54_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_53_54_14_15_32_97_tsni(ys)
  }
};
match_xs_arm_Nil_inst_53_54_14_15_32_97_tsni = function match_xs_arm_Nil_inst_53_54_14_15_32_97_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_53_54_7_9_12_tsni = function match_xs_arm_Cons_inst_53_54_7_9_12_tsni(f, _deforest_Cons_head_inst_53_54_7_9_12_tsni, _deforest_Cons_tail_inst_53_54_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_53_54_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_53_54_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_53_54_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_53_54_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_53_54_7_9_11_tsni = function match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head_inst_53_54_7_9_11_tsni, _deforest_Cons_tail_inst_53_54_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_53_54_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_53_54_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_53_54_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_53_54_7_92_tsni = function match_ys_arm_default_inst_53_54_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_53_54_7_92_tsni = function match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_53_54_7_92_tsni, _deforest_Cons_tail_inst_53_54_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_53_54_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_53_54_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_53_54_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xss_arm_default_inst_58_33_tsni = function match_xss_arm_default_inst_58_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_58_97_tsni(ys)
  }
};
match_xs_arm_Nil_inst_58_97_tsni = function match_xs_arm_Nil_inst_58_97_tsni(ys) {
  return ys
};
match_xs_arm_Nil_inst_59_60_97_tsni = function match_xs_arm_Nil_inst_59_60_97_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_59_60_33_tsni = function match_xss_arm_default_inst_59_60_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_59_60_97_tsni(ys)
  }
};
match_xs_arm_Cons_inst_67_9_12_tsni = function match_xs_arm_Cons_inst_67_9_12_tsni(f, _deforest_Cons_head_inst_67_9_12_tsni, _deforest_Cons_tail_inst_67_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_67_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_67_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_67_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_67_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_67_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_67_9_11_tsni = function match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head_inst_67_9_11_tsni, _deforest_Cons_tail_inst_67_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_67_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_67_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_67_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_67_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_67_92_tsni = function match_ys_arm_default_inst_67_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_67_92_tsni = function match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_67_92_tsni, _deforest_Cons_tail_inst_67_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_67_92_tsni;
  param1 = _deforest_Cons_tail_inst_67_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_67_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xs_arm_Cons_inst_70_89_90_tsni = function match_xs_arm_Cons_inst_70_89_90_tsni(ys, _deforest_Cons_head_inst_70_89_90_tsni, _deforest_Cons_tail_inst_70_89_90_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_70_89_90_tsni;
  param1 = _deforest_Cons_tail_inst_70_89_90_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_70_89_90_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_74_104_tsni = function match_xs_arm_Nil_inst_74_104_tsni(ys) {
  return ys
};
match_ls_arm_Cons_inst_77_11_tsni = function match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head_inst_77_11_tsni, _deforest_Cons_tail_inst_77_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_77_11_tsni;
  param1 = _deforest_Cons_tail_inst_77_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_77_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_77_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_77_12_tsni = function match_xs_arm_Cons_inst_77_12_tsni(f, _deforest_Cons_head_inst_77_12_tsni, _deforest_Cons_tail_inst_77_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_77_12_tsni;
  param1 = _deforest_Cons_tail_inst_77_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_77_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return NofibPrelude.Nil
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_77_13_tsni(tmp2, t);
      return NofibPrelude.Cons(h, tmp3)
    }
  }
};
match_xss_arm_default_inst_82_6_14_15_32_33_tsni = function match_xss_arm_default_inst_82_6_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_82_6_14_15_32_97_tsni(ys)
  }
};
match_xs_arm_Nil_inst_82_6_14_15_32_97_tsni = function match_xs_arm_Nil_inst_82_6_14_15_32_97_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_82_6_7_9_12_tsni = function match_xs_arm_Cons_inst_82_6_7_9_12_tsni(f, _deforest_Cons_head_inst_82_6_7_9_12_tsni, _deforest_Cons_tail_inst_82_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_82_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_82_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_82_6_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_82_6_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_82_6_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_82_6_7_9_11_tsni = function match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head_inst_82_6_7_9_11_tsni, _deforest_Cons_tail_inst_82_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_82_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_82_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_82_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_82_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_82_6_7_92_tsni = function match_ys_arm_default_inst_82_6_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_82_6_7_92_tsni = function match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_82_6_7_92_tsni, _deforest_Cons_tail_inst_82_6_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_82_6_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_82_6_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_82_6_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xs_arm_Cons_inst_82_98_tsni = function match_xs_arm_Cons_inst_82_98_tsni(ys, _deforest_Cons_head_inst_82_98_tsni, _deforest_Cons_tail_inst_82_98_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_82_98_tsni;
  param1 = _deforest_Cons_tail_inst_82_98_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_82_98_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_82_2_89_90_tsni = function match_xs_arm_Cons_inst_82_2_89_90_tsni(ys, _deforest_Cons_head_inst_82_2_89_90_tsni, _deforest_Cons_tail_inst_82_2_89_90_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_82_2_89_90_tsni;
  param1 = _deforest_Cons_tail_inst_82_2_89_90_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_82_2_89_90_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_82_2_4_5_tsni = function match_xs_arm_Cons_inst_82_2_4_5_tsni(ys, _deforest_Cons_head_inst_82_2_4_5_tsni, _deforest_Cons_tail_inst_82_2_4_5_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_82_2_4_5_tsni;
  param1 = _deforest_Cons_tail_inst_82_2_4_5_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_82_2_4_5_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    return match_xs_arm_Cons_inst_82_2_89_90_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_82_2_4_5_tsni = function match_xs_arm_Nil_inst_82_2_4_5_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_83_84_1_6_14_15_32_33_tsni = function match_xss_arm_default_inst_83_84_1_6_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_83_84_1_6_14_15_32_97_tsni(ys)
  }
};
match_xs_arm_Nil_inst_83_84_1_6_14_15_32_97_tsni = function match_xs_arm_Nil_inst_83_84_1_6_14_15_32_97_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_83_84_1_6_7_9_12_tsni = function match_xs_arm_Cons_inst_83_84_1_6_7_9_12_tsni(f, _deforest_Cons_head_inst_83_84_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_83_84_1_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_83_84_1_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_83_84_1_6_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_83_84_1_6_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_83_84_1_6_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni = function match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head_inst_83_84_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_83_84_1_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_83_84_1_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_83_84_1_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_83_84_1_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_ys_arm_default_inst_83_84_1_6_7_92_tsni = function match_ys_arm_default_inst_83_84_1_6_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni = function match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_83_84_1_6_7_92_tsni, _deforest_Cons_tail_inst_83_84_1_6_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_83_84_1_6_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_6_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_83_84_1_6_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_xs_arm_Cons_inst_83_84_1_98_tsni = function match_xs_arm_Cons_inst_83_84_1_98_tsni(ys, _deforest_Cons_head_inst_83_84_1_98_tsni, _deforest_Cons_tail_inst_83_84_1_98_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_83_84_1_98_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_98_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_83_84_1_98_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_83_84_1_2_89_90_tsni = function match_xs_arm_Cons_inst_83_84_1_2_89_90_tsni(ys, _deforest_Cons_head_inst_83_84_1_2_89_90_tsni, _deforest_Cons_tail_inst_83_84_1_2_89_90_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_83_84_1_2_89_90_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_2_89_90_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_83_84_1_2_89_90_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni = function match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys, _deforest_Cons_head_inst_83_84_1_2_4_5_tsni, _deforest_Cons_tail_inst_83_84_1_2_4_5_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_83_84_1_2_4_5_tsni;
  param1 = _deforest_Cons_tail_inst_83_84_1_2_4_5_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_83_84_1_2_4_5_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    return match_xs_arm_Cons_inst_83_84_1_2_89_90_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Nil_inst_83_84_1_2_4_5_tsni = function match_xs_arm_Nil_inst_83_84_1_2_4_5_tsni(ys) {
  return ys
};
match_xs_arm_Cons_inst_86_87_84_1_2_89_90_tsni = function match_xs_arm_Cons_inst_86_87_84_1_2_89_90_tsni(ys, _deforest_Cons_head_inst_86_87_84_1_2_89_90_tsni, _deforest_Cons_tail_inst_86_87_84_1_2_89_90_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_86_87_84_1_2_89_90_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_2_89_90_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_86_87_84_1_2_89_90_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = append_inst_86_91_90_tsni(xs, ys1);
    _deforest_Cons_head1 = x;
    _deforest_Cons_tail1 = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head1;
      param11 = _deforest_Cons_tail1;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_86_105_tsni(t);
      return h + tmp1
    }
  }
};
match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni = function match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head_inst_86_87_84_1_6_7_92_tsni, _deforest_Cons_tail_inst_86_87_84_1_6_7_92_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_86_87_84_1_6_7_92_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_6_7_92_tsni;
  z = param0;
  zs = param1;
  arr = [
    x,
    y,
    z
  ];
  tmp = zip3_inst_86_87_84_1_6_7_92_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
};
match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni = function match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head_inst_86_87_84_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_86_87_84_1_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_86_87_84_1_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_86_87_84_1_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_86_87_84_1_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_86_87_84_1_6_7_9_12_tsni = function match_xs_arm_Cons_inst_86_87_84_1_6_7_9_12_tsni(f, _deforest_Cons_head_inst_86_87_84_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_86_87_84_1_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_86_87_84_1_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_86_87_84_1_6_7_9_12_tsni(f, xs);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = tmp1;
  return (n) => {
    let param01, param11, h, t, scrut, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    h = param01;
    t = param11;
    scrut = n <= 0;
    if (scrut === true) {
      return (zs, x1, xs1) => {
        return match_ys_arm_default_inst_86_87_84_1_6_7_92_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_86_87_84_1_6_7_9_13_tsni(tmp2, t);
      _deforest_Cons_head1 = h;
      _deforest_Cons_tail1 = tmp3;
      return (zs, x1, xs1) => {
        let param02, param12, y, ys;
        param02 = _deforest_Cons_head1;
        param12 = _deforest_Cons_tail1;
        y = param02;
        ys = param12;
        return runtime.safeCall(zs(x1, xs1, y, ys))
      }
    }
  }
};
match_ys_arm_default_inst_86_87_84_1_6_7_92_tsni = function match_ys_arm_default_inst_86_87_84_1_6_7_92_tsni(zs, x, xs) {
  return NofibPrelude.Nil
};
match_xs_arm_Nil_inst_86_87_84_1_6_14_15_32_97_tsni = function match_xs_arm_Nil_inst_86_87_84_1_6_14_15_32_97_tsni(ys) {
  return ys
};
match_xss_arm_default_inst_86_87_84_1_6_14_15_32_33_tsni = function match_xss_arm_default_inst_86_87_84_1_6_14_15_32_33_tsni(f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_86_87_84_1_6_14_15_32_97_tsni(ys)
  }
};
match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni = function match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys, _deforest_Cons_head_inst_86_87_84_1_2_4_5_tsni, _deforest_Cons_tail_inst_86_87_84_1_2_4_5_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_86_87_84_1_2_4_5_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_2_4_5_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_86_87_84_1_2_4_5_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    return match_xs_arm_Cons_inst_86_87_84_1_2_89_90_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
match_xs_arm_Cons_inst_86_87_84_1_98_tsni = function match_xs_arm_Cons_inst_86_87_84_1_98_tsni(ys, _deforest_Cons_head_inst_86_87_84_1_98_tsni, _deforest_Cons_tail_inst_86_87_84_1_98_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_86_87_84_1_98_tsni;
  param1 = _deforest_Cons_tail_inst_86_87_84_1_98_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_86_87_84_1_98_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
};
match_xs_arm_Nil_inst_86_87_84_1_2_4_5_tsni = function match_xs_arm_Nil_inst_86_87_84_1_2_4_5_tsni(ys) {
  return ys
};
cal_inst_0_1_tsni = function cal_inst_0_1_tsni(year) {
  let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  _deforest_Deforest_Arr_2_01 = 8;
  _deforest_Deforest_Arr_2_11 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = replicate_inst_0_1_48_44_tsni(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_0_1_48_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_0_1_100_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_0_1_6_14_15_16_17_99_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_0_1_40_tsni(year);
  tmp5 = body$_inst_0_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_0_1_98_tsni(tmp4, tmp5);
  return unlines_inst_0_1_2_tsni(tmp6)
};
unlines_inst_0_1_2_tsni = function unlines_inst_0_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_0_1_2_3_tsni(lambda_inst_0_1_2_4_tsni, ls);
  return concat_inst_0_1_2_89_tsni(tmp)
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
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_0_1_2_89_tsni(xs2);
      return append_inst_0_1_2_89_90_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_0_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_0_1_2_89_90_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_0_1_2_4_5_tsni(x, tmp)
});
append_inst_0_1_2_4_5_tsni = function append_inst_0_1_2_4_5_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
body$_inst_0_1_6_tsni = function body$_inst_0_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_0_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_0_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_0_1_6_35_tsni(3, tmp1)
};
months_inst_0_1_6_7_tsni = function months_inst_0_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_0_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_0_1_6_7_8_tsni(yer);
  return zip3_inst_0_1_6_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
monthLengths_inst_0_1_6_7_8_tsni = function monthLengths_inst_0_1_6_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_0_1_6_7_9_tsni = function firstDays_inst_0_1_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_0_1_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_0_1_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_0_1_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_0_1_6_7_9_13_tsni(12, tmp3)
};
monthLengths_inst_0_1_6_7_9_10_tsni = function monthLengths_inst_0_1_6_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_0_1_6_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_0_1_6_7_9_11_tsni = function scanl_inst_0_1_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_0_1_6_7_9_12_tsni = function map_inst_0_1_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_0_1_6_7_9_13_tsni = function take_inst_0_1_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_0_1_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_0_1_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_0_1_6_14_15_tsni = function lambda$_inst_0_1_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_0_1_6_14_15_16_tsni(daynames, x);
  return pad$_inst_0_1_6_14_15_32_tsni(side, end, tmp)
};
pic$_inst_0_1_6_14_15_16_tsni = function pic$_inst_0_1_6_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_0_1_6_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_0_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_0_1_6_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
table$_inst_0_1_6_14_15_16_17_tsni = function table$_inst_0_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_0_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_0_1_6_14_15_16_17_99_tsni(daynames, tmp)
};
entries_inst_0_1_6_14_15_16_17_18_tsni = function entries_inst_0_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_0_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_0_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_0_1_6_14_15_16_17_18_19_tsni = function block_inst_0_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_0_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_0_1_6_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_0_1_6_14_15_16_17_18_19_20_tsni = function groop_inst_0_1_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_0_1_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_0_1_6_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_0_1_6_14_15_16_17_18_21_tsni = function dates_inst_0_1_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_0_1_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_0_1_6_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_0_1_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_0_1_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_0_1_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_0_1_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_0_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_0_1_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_0_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_0_1_6_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_0_1_6_14_15_16_29_tsni = function title_inst_0_1_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_0_1_6_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_0_1_6_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_0_1_6_14_15_16_29_30_tsni = function cjustify_inst_0_1_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_0_1_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_0_1_6_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_0_1_6_14_15_16_29_30_31_tsni = function space_inst_0_1_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni = function replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_6_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_0_1_6_14_15_32_tsni = function pad$_inst_0_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_0_1_6_14_15_32_34_tsni(append_inst_0_1_6_14_15_32_61_tsni, side, p);
  tmp1 = zipWith_inst_0_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_0_1_6_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_0_1_6_14_15_32_33_tsni = function zipWith_inst_0_1_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_0_1_6_14_15_32_34_tsni = function zipWith_inst_0_1_6_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_0_1_6_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_0_1_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_0_1_6_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_0_1_6_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
block_inst_0_1_6_35_tsni = function block_inst_0_1_6_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_0_1_6_35_20_tsni(n, t);
  tmp1 = map_inst_0_1_6_35_93_tsni(spread_inst_0_1_6_35_36_tsni, tmp);
  return calendar.stack(tmp1)
};
groop_inst_0_1_6_35_20_tsni = function groop_inst_0_1_6_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_0_1_6_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_0_1_6_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
spread_inst_0_1_6_35_36_tsni = function spread_inst_0_1_6_35_36_tsni(ls) {
  return NofibPrelude.foldr1(lambda_inst_0_1_6_35_36_37_tsni, ls)
};
lambda_inst_0_1_6_35_36_37_tsni = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda_inst_0_1_6_35_36_37_38_tsni, a, b)
});
lambda_inst_0_1_6_35_36_37_38_tsni = (undefined, function (a, b) {
  return append_inst_0_1_6_35_36_37_38_39_tsni(a, b)
});
append_inst_0_1_6_35_36_37_38_39_tsni = function append_inst_0_1_6_35_36_37_38_39_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_6_35_36_37_38_39_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
banner_inst_0_1_40_tsni = function banner_inst_0_1_40_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_0_1_40_41_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = replicate_inst_0_1_40_42_44_tsni(w, " ");
    return replicate_inst_0_1_40_42_43_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_0_1_40_42_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_0_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_0_1_40_41_tsni = function cjustify_inst_0_1_40_41_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_0_1_40_41_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = space_inst_0_1_40_41_45_tsni(tmp4);
  tmp6 = append_inst_0_1_40_41_46_tsni(s, tmp5);
  return append_inst_0_1_40_41_47_tsni(tmp3, tmp6)
};
space_inst_0_1_40_41_31_tsni = function space_inst_0_1_40_41_31_tsni(n) {
  return replicate_inst_0_1_40_41_31_27_tsni(n, " ")
};
replicate_inst_0_1_40_41_31_27_tsni = function replicate_inst_0_1_40_41_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_40_41_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_40_41_47_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
emptyPic_inst_0_1_40_42_tsni = function emptyPic_inst_0_1_40_42_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_0_1_40_42_43_tsni = function replicate_inst_0_1_40_42_43_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_40_42_43_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_0_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
replicate_inst_0_1_40_42_44_tsni = function replicate_inst_0_1_40_42_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_0_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_40_42_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
space_inst_0_1_40_41_45_tsni = function space_inst_0_1_40_41_45_tsni(n) {
  return replicate_inst_0_1_40_41_45_27_tsni(n, " ")
};
replicate_inst_0_1_40_41_45_27_tsni = function replicate_inst_0_1_40_41_45_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_0_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_40_41_45_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_0_1_40_41_46_tsni = function append_inst_0_1_40_41_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_40_41_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_0_1_40_41_47_tsni = function append_inst_0_1_40_41_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_0_1_48_tsni = function emptyPic_inst_0_1_48_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_0_1_48_44_tsni = function replicate_inst_0_1_48_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_48_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_6_14_15_32_61_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
cjustify_inst_49_41_tsni = function cjustify_inst_49_41_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_49_41_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_49_41_47_tsni(tmp3, tmp6)
};
space_inst_49_41_31_tsni = function space_inst_49_41_31_tsni(n) {
  return replicate_inst_49_41_31_27_tsni(n, " ")
};
replicate_inst_49_41_31_27_tsni = function replicate_inst_49_41_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_49_41_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_49_41_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pic$_inst_50_16_tsni = function pic$_inst_50_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_50_16_29_tsni(mn);
    tmp1 = table$_inst_50_16_17_tsni(daynames, fd, ml);
    return append_inst_50_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
table$_inst_50_16_17_tsni = function table$_inst_50_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_50_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_50_16_17_18_tsni = function entries_inst_50_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_50_16_17_18_21_tsni(fd, ml);
  return block_inst_50_16_17_18_19_tsni(7, tmp)
};
block_inst_50_16_17_18_19_tsni = function block_inst_50_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_50_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_50_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_50_16_17_18_19_20_tsni = function groop_inst_50_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_50_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_50_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_50_16_17_18_21_tsni = function dates_inst_50_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_50_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_50_16_17_18_21_22_tsni(ml));
  return map_inst_50_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_50_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_50_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_50_16_17_18_21_22_23_tsni = function lambda$_inst_50_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_50_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_50_16_17_18_21_22_23_24_tsni = function date_inst_50_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_50_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_50_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_50_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_50_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_50_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_50_16_17_18_21_22_23_24_25_26_tsni = function space_inst_50_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_50_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_50_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_50_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_50_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_50_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_50_16_17_18_21_28_tsni = function enumFromTo_inst_50_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_50_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_50_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_50_16_29_tsni = function title_inst_50_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_50_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_50_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_50_16_29_30_tsni = function cjustify_inst_50_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_50_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_50_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_50_16_29_30_31_tsni = function space_inst_50_16_29_30_31_tsni(n) {
  return replicate_inst_50_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_50_16_29_30_31_27_tsni = function replicate_inst_50_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_50_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_50_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_50_32_tsni = function pad$_inst_50_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_50_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_50_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_50_32_97_tsni(tmp1, end)
};
zipWith_inst_50_32_33_tsni = function zipWith_inst_50_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_50_32_34_tsni = function zipWith_inst_50_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_50_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_50_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_50_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_50_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_50_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_50_32_33_tsni(f1, yss1)
    }
  }
};
lambda$_inst_51_15_tsni = function lambda$_inst_51_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_51_15_16_tsni(daynames, x);
  return pad$_inst_51_15_32_tsni(side, end, tmp)
};
pad$_inst_51_15_32_tsni = function pad$_inst_51_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_51_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_51_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_51_15_32_97_tsni(tmp1, end)
};
zipWith_inst_51_15_32_34_tsni = function zipWith_inst_51_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_51_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_51_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_51_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_51_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_51_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_51_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_51_15_32_33_tsni = function zipWith_inst_51_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_51_15_16_tsni = function pic$_inst_51_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_51_15_16_29_tsni(mn);
    tmp1 = table$_inst_51_15_16_17_tsni(daynames, fd, ml);
    return append_inst_51_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
title_inst_51_15_16_29_tsni = function title_inst_51_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_51_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_51_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_51_15_16_29_30_tsni = function cjustify_inst_51_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_51_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_51_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_51_15_16_29_30_31_tsni = function space_inst_51_15_16_29_30_31_tsni(n) {
  return replicate_inst_51_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_51_15_16_29_30_31_27_tsni = function replicate_inst_51_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_51_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_51_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_51_15_16_17_tsni = function table$_inst_51_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_51_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_51_15_16_17_18_tsni = function entries_inst_51_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_51_15_16_17_18_21_tsni(fd, ml);
  return block_inst_51_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_51_15_16_17_18_21_tsni = function dates_inst_51_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_51_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_51_15_16_17_18_21_22_tsni(ml));
  return map_inst_51_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_51_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_51_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_51_15_16_17_18_21_22_23_tsni = function lambda$_inst_51_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_51_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_51_15_16_17_18_21_22_23_24_tsni = function date_inst_51_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_51_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_51_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_51_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_51_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_51_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_51_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_51_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_51_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_51_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_51_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_51_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_51_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_51_15_16_17_18_21_28_tsni = function enumFromTo_inst_51_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_51_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_51_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_51_15_16_17_18_19_tsni = function block_inst_51_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_51_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_51_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_51_15_16_17_18_19_20_tsni = function groop_inst_51_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_51_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_51_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_52_7_tsni = function months_inst_52_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_52_7_9_tsni(yer);
  tmp1 = monthLengths_inst_52_7_8_tsni(yer);
  return zip3_inst_52_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
monthLengths_inst_52_7_8_tsni = function monthLengths_inst_52_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_52_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_52_7_9_tsni = function firstDays_inst_52_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_52_7_9_10_tsni(year);
  tmp2 = scanl_inst_52_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_52_7_9_12_tsni(lambda5, tmp2);
  return take_inst_52_7_9_13_tsni(12, tmp3)
};
monthLengths_inst_52_7_9_10_tsni = function monthLengths_inst_52_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_52_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_52_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_52_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_52_7_9_11_tsni = function scanl_inst_52_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_52_7_9_12_tsni = function map_inst_52_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_52_7_9_13_tsni = function take_inst_52_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_52_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_52_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_52_14_15_tsni = function lambda$_inst_52_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_52_14_15_16_tsni(daynames, x);
  return pad$_inst_52_14_15_32_tsni(side, end, tmp)
};
pic$_inst_52_14_15_16_tsni = function pic$_inst_52_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_52_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_52_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_52_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
table$_inst_52_14_15_16_17_tsni = function table$_inst_52_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_52_14_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_52_14_15_16_17_18_tsni = function entries_inst_52_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_52_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_52_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_52_14_15_16_17_18_19_tsni = function block_inst_52_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_52_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_52_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_52_14_15_16_17_18_19_20_tsni = function groop_inst_52_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_52_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_52_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_52_14_15_16_17_18_21_tsni = function dates_inst_52_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_52_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_52_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_52_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_52_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_52_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_52_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_52_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_52_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_52_14_15_16_17_18_21_22_23_24_tsni = function date_inst_52_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_52_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_52_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_52_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_52_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_52_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_52_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_52_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_52_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_52_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_52_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_52_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_52_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_52_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_52_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_52_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_52_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_52_14_15_16_29_tsni = function title_inst_52_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_52_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_52_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_52_14_15_16_29_30_tsni = function cjustify_inst_52_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_52_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_52_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_52_14_15_16_29_30_31_tsni = function space_inst_52_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_52_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_52_14_15_16_29_30_31_27_tsni = function replicate_inst_52_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_52_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_52_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_52_14_15_32_tsni = function pad$_inst_52_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_52_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_52_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_52_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_52_14_15_32_33_tsni = function zipWith_inst_52_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_52_14_15_32_34_tsni = function zipWith_inst_52_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_52_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_52_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_52_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_52_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_52_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_52_14_15_32_33_tsni(f1, yss1)
    }
  }
};
block_inst_52_35_tsni = function block_inst_52_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_52_35_20_tsni(n, t);
  tmp1 = map_inst_52_35_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_52_35_20_tsni = function groop_inst_52_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_52_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_52_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
body$_inst_53_54_tsni = function body$_inst_53_54_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_53_54_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_53_54_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_53_54_35_tsni(3, tmp1)
};
block_inst_53_54_35_tsni = function block_inst_53_54_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_53_54_35_20_tsni(n, t);
  tmp1 = map_inst_53_54_35_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_53_54_35_20_tsni = function groop_inst_53_54_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_53_54_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_53_54_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_53_54_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_53_54_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_53_54_14_15_tsni = function lambda$_inst_53_54_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_53_54_14_15_16_tsni(daynames, x);
  return pad$_inst_53_54_14_15_32_tsni(side, end, tmp)
};
pad$_inst_53_54_14_15_32_tsni = function pad$_inst_53_54_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_53_54_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_53_54_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_53_54_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_53_54_14_15_32_34_tsni = function zipWith_inst_53_54_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_53_54_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_53_54_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_53_54_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_53_54_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_53_54_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_53_54_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_53_54_14_15_32_33_tsni = function zipWith_inst_53_54_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_53_54_14_15_16_tsni = function pic$_inst_53_54_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_53_54_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_53_54_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_53_54_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
title_inst_53_54_14_15_16_29_tsni = function title_inst_53_54_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_53_54_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_53_54_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_53_54_14_15_16_29_30_tsni = function cjustify_inst_53_54_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_53_54_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_53_54_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_53_54_14_15_16_29_30_31_tsni = function space_inst_53_54_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_53_54_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_53_54_14_15_16_29_30_31_27_tsni = function replicate_inst_53_54_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_54_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_54_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_53_54_14_15_16_17_tsni = function table$_inst_53_54_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_53_54_14_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_53_54_14_15_16_17_18_tsni = function entries_inst_53_54_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_53_54_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_53_54_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_53_54_14_15_16_17_18_21_tsni = function dates_inst_53_54_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_53_54_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_53_54_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_53_54_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_53_54_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_53_54_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_53_54_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_53_54_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_53_54_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_53_54_14_15_16_17_18_21_22_23_24_tsni = function date_inst_53_54_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_53_54_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_53_54_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_53_54_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_53_54_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_54_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_54_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_53_54_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_53_54_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_53_54_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_53_54_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_53_54_14_15_16_17_18_19_tsni = function block_inst_53_54_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_53_54_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_53_54_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_53_54_14_15_16_17_18_19_20_tsni = function groop_inst_53_54_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_53_54_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_53_54_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_53_54_7_tsni = function months_inst_53_54_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_53_54_7_9_tsni(yer);
  tmp1 = monthLengths_inst_53_54_7_8_tsni(yer);
  return zip3_inst_53_54_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_53_54_7_9_tsni = function firstDays_inst_53_54_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_53_54_7_9_10_tsni(year);
  tmp2 = scanl_inst_53_54_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_53_54_7_9_12_tsni(lambda5, tmp2);
  return take_inst_53_54_7_9_13_tsni(12, tmp3)
};
map_inst_53_54_7_9_12_tsni = function map_inst_53_54_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_53_54_7_9_11_tsni = function scanl_inst_53_54_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_53_54_7_9_10_tsni = function monthLengths_inst_53_54_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_53_54_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_53_54_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_53_54_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_53_54_7_9_13_tsni = function take_inst_53_54_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_53_54_7_8_tsni = function monthLengths_inst_53_54_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_53_54_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
title_inst_55_29_tsni = function title_inst_55_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_55_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_55_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_55_29_30_tsni = function cjustify_inst_55_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_55_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_55_29_30_47_tsni(tmp3, tmp6)
};
space_inst_55_29_30_31_tsni = function space_inst_55_29_30_31_tsni(n) {
  return replicate_inst_55_29_30_31_27_tsni(n, " ")
};
replicate_inst_55_29_30_31_27_tsni = function replicate_inst_55_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_55_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_55_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_55_17_tsni = function table$_inst_55_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_55_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_55_17_18_tsni = function entries_inst_55_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_55_17_18_21_tsni(fd, ml);
  return block_inst_55_17_18_19_tsni(7, tmp)
};
dates_inst_55_17_18_21_tsni = function dates_inst_55_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_55_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_55_17_18_21_22_tsni(ml));
  return map_inst_55_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_55_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_55_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_55_17_18_21_22_23_tsni = function lambda$_inst_55_17_18_21_22_23_tsni(ml, d) {
  return date_inst_55_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_55_17_18_21_22_23_24_tsni = function date_inst_55_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_55_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_55_17_18_21_22_23_24_25_tsni = function rjustify_inst_55_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_55_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_55_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_55_17_18_21_22_23_24_25_26_tsni = function space_inst_55_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_55_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_55_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_55_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_55_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_55_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_55_17_18_21_28_tsni = function enumFromTo_inst_55_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_55_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_55_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_55_17_18_19_tsni = function block_inst_55_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_55_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_55_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_55_17_18_19_20_tsni = function groop_inst_55_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_55_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_55_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
pic$_inst_56_57_tsni = function pic$_inst_56_57_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_56_57_29_tsni(mn);
    tmp1 = table$_inst_56_57_17_tsni(daynames, fd, ml);
    return append_inst_56_57_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
table$_inst_56_57_17_tsni = function table$_inst_56_57_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_56_57_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_56_57_17_18_tsni = function entries_inst_56_57_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_56_57_17_18_21_tsni(fd, ml);
  return block_inst_56_57_17_18_19_tsni(7, tmp)
};
block_inst_56_57_17_18_19_tsni = function block_inst_56_57_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_56_57_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_56_57_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_56_57_17_18_19_20_tsni = function groop_inst_56_57_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_56_57_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_56_57_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_56_57_17_18_21_tsni = function dates_inst_56_57_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_56_57_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_56_57_17_18_21_22_tsni(ml));
  return map_inst_56_57_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_56_57_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_56_57_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_56_57_17_18_21_22_23_tsni = function lambda$_inst_56_57_17_18_21_22_23_tsni(ml, d) {
  return date_inst_56_57_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_56_57_17_18_21_22_23_24_tsni = function date_inst_56_57_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_56_57_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_56_57_17_18_21_22_23_24_25_tsni = function rjustify_inst_56_57_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_56_57_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_56_57_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_56_57_17_18_21_22_23_24_25_26_tsni = function space_inst_56_57_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_56_57_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_56_57_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_56_57_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_56_57_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_56_57_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_56_57_17_18_21_28_tsni = function enumFromTo_inst_56_57_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_56_57_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_56_57_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_56_57_29_tsni = function title_inst_56_57_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_56_57_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_56_57_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_56_57_29_30_tsni = function cjustify_inst_56_57_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_56_57_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_56_57_29_30_47_tsni(tmp3, tmp6)
};
space_inst_56_57_29_30_31_tsni = function space_inst_56_57_29_30_31_tsni(n) {
  return replicate_inst_56_57_29_30_31_27_tsni(n, " ")
};
replicate_inst_56_57_29_30_31_27_tsni = function replicate_inst_56_57_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_56_57_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_56_57_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
zipWith_inst_58_34_tsni = function zipWith_inst_58_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_58_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_58_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_58_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_58_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_58_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_58_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_58_33_tsni = function zipWith_inst_58_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pad$_inst_59_60_tsni = function pad$_inst_59_60_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_59_60_34_tsni(append_inst_59_60_61_tsni, side, p);
  tmp1 = zipWith_inst_59_60_33_tsni(append_inst_59_60_101_tsni, tmp, side);
  return append_inst_59_60_97_tsni(tmp1, end)
};
zipWith_inst_59_60_33_tsni = function zipWith_inst_59_60_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_59_60_34_tsni = function zipWith_inst_59_60_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_59_60_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_59_60_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_59_60_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_59_60_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_59_60_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_59_60_33_tsni(f1, yss1)
    }
  }
};
append_inst_59_60_61_tsni = function append_inst_59_60_61_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_59_60_61_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_59_60_101_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
cjustify_inst_62_30_tsni = function cjustify_inst_62_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_62_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_62_30_47_tsni(tmp3, tmp6)
};
space_inst_62_30_31_tsni = function space_inst_62_30_31_tsni(n) {
  return replicate_inst_62_30_31_27_tsni(n, " ")
};
replicate_inst_62_30_31_27_tsni = function replicate_inst_62_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_62_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_62_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
entries_inst_63_18_tsni = function entries_inst_63_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_63_18_21_tsni(fd, ml);
  return block_inst_63_18_19_tsni(7, tmp)
};
block_inst_63_18_19_tsni = function block_inst_63_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_63_18_19_20_tsni(n, t);
  tmp1 = map_inst_63_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_63_18_19_20_tsni = function groop_inst_63_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_63_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_63_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_63_18_21_tsni = function dates_inst_63_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_63_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_63_18_21_22_tsni(ml));
  return map_inst_63_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_63_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_63_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_63_18_21_22_23_tsni = function lambda$_inst_63_18_21_22_23_tsni(ml, d) {
  return date_inst_63_18_21_22_23_24_tsni(ml, d)
};
date_inst_63_18_21_22_23_24_tsni = function date_inst_63_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_63_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_63_18_21_22_23_24_25_tsni = function rjustify_inst_63_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_63_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_63_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_63_18_21_22_23_24_25_26_tsni = function space_inst_63_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_63_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_63_18_21_22_23_24_25_26_27_tsni = function replicate_inst_63_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_63_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_63_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_63_18_21_28_tsni = function enumFromTo_inst_63_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_63_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_63_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
table$_inst_64_65_tsni = function table$_inst_64_65_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_64_65_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_64_65_18_tsni = function entries_inst_64_65_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_64_65_18_21_tsni(fd, ml);
  return block_inst_64_65_18_19_tsni(7, tmp)
};
dates_inst_64_65_18_21_tsni = function dates_inst_64_65_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_64_65_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_64_65_18_21_22_tsni(ml));
  return map_inst_64_65_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_64_65_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_64_65_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_64_65_18_21_22_23_tsni = function lambda$_inst_64_65_18_21_22_23_tsni(ml, d) {
  return date_inst_64_65_18_21_22_23_24_tsni(ml, d)
};
date_inst_64_65_18_21_22_23_24_tsni = function date_inst_64_65_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_64_65_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_64_65_18_21_22_23_24_25_tsni = function rjustify_inst_64_65_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_64_65_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_64_65_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_64_65_18_21_22_23_24_25_26_tsni = function space_inst_64_65_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_64_65_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_64_65_18_21_22_23_24_25_26_27_tsni = function replicate_inst_64_65_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_64_65_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_64_65_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_64_65_18_21_28_tsni = function enumFromTo_inst_64_65_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_64_65_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_64_65_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_64_65_18_19_tsni = function block_inst_64_65_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_64_65_18_19_20_tsni(n, t);
  tmp1 = map_inst_64_65_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_64_65_18_19_20_tsni = function groop_inst_64_65_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_64_65_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_64_65_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_66_21_tsni = function dates_inst_66_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_66_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_66_21_22_tsni(ml));
  return map_inst_66_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_66_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_66_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_66_21_22_23_tsni = function lambda$_inst_66_21_22_23_tsni(ml, d) {
  return date_inst_66_21_22_23_24_tsni(ml, d)
};
date_inst_66_21_22_23_24_tsni = function date_inst_66_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_66_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_66_21_22_23_24_25_tsni = function rjustify_inst_66_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_66_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_66_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_66_21_22_23_24_25_26_tsni = function space_inst_66_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_66_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_66_21_22_23_24_25_26_27_tsni = function replicate_inst_66_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_66_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_66_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_66_21_28_tsni = function enumFromTo_inst_66_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_66_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_66_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_66_19_tsni = function block_inst_66_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_66_19_20_tsni(n, t);
  tmp1 = map_inst_66_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_66_19_20_tsni = function groop_inst_66_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_66_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_66_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
firstDays_inst_67_9_tsni = function firstDays_inst_67_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_67_9_10_tsni(year);
  tmp2 = scanl_inst_67_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_67_9_12_tsni(lambda5, tmp2);
  return take_inst_67_9_13_tsni(12, tmp3)
};
map_inst_67_9_12_tsni = function map_inst_67_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_67_9_11_tsni = function scanl_inst_67_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_67_9_10_tsni = function monthLengths_inst_67_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_67_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_67_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_67_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_67_9_13_tsni = function take_inst_67_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_67_8_tsni = function monthLengths_inst_67_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_67_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
date_inst_68_24_tsni = function date_inst_68_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_68_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_68_24_25_tsni = function rjustify_inst_68_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_68_24_25_26_tsni(tmp1);
  return append_inst_68_24_25_94_tsni(tmp2, s)
};
space_inst_68_24_25_26_tsni = function space_inst_68_24_25_26_tsni(n) {
  return replicate_inst_68_24_25_26_27_tsni(n, " ")
};
replicate_inst_68_24_25_26_27_tsni = function replicate_inst_68_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_68_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_68_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lambda$_inst_69_23_tsni = function lambda$_inst_69_23_tsni(ml, d) {
  return date_inst_69_23_24_tsni(ml, d)
};
date_inst_69_23_24_tsni = function date_inst_69_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_69_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_69_23_24_25_tsni = function rjustify_inst_69_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_69_23_24_25_26_tsni(tmp1);
  return append_inst_69_23_24_25_94_tsni(tmp2, s)
};
space_inst_69_23_24_25_26_tsni = function space_inst_69_23_24_25_26_tsni(n) {
  return replicate_inst_69_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_69_23_24_25_26_27_tsni = function replicate_inst_69_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_69_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_69_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
map_inst_70_3_tsni = function map_inst_70_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_70_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_70_89_tsni(xs2);
      return append_inst_70_89_90_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_70_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_70_89_90_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_70_4_5_tsni(x, tmp)
});
append_inst_70_4_5_tsni = function append_inst_70_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_70_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_70_89_90_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
groop_inst_71_20_tsni = function groop_inst_71_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_71_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_71_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
groop_inst_72_73_tsni = function groop_inst_72_73_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_72_73_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_72_102_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
emptyPic_inst_74_75_tsni = function emptyPic_inst_74_75_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_74_75_43_tsni = function replicate_inst_74_75_43_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, x1, xs) => {
      return (ys) => {
        return match_xs_arm_Nil_inst_74_104_tsni(ys)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_74_75_43_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, x1, xs) => {
      let param0, param1, y, ys, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      tmp2 = runtime.safeCall(f(x1, y));
      tmp3 = zipWith_inst_74_76_tsni(f, xs, ys);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = append_inst_74_104_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp4)
      }
    }
  }
};
zipWith_inst_74_76_tsni = function zipWith_inst_74_76_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_Nil_inst_74_104_tsni(ys)
    }
  }
};
monthLengths_inst_77_10_tsni = function monthLengths_inst_77_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return NofibPrelude.Nil
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_77_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_77_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_77_11_tsni = function scanl_inst_77_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_77_12_tsni = function map_inst_77_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
space_inst_78_26_tsni = function space_inst_78_26_tsni(n) {
  return replicate_inst_78_26_27_tsni(n, " ")
};
replicate_inst_78_26_27_tsni = function replicate_inst_78_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_78_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_78_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
rjustify_inst_79_25_tsni = function rjustify_inst_79_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_79_25_26_tsni(tmp1);
  return append_inst_79_25_94_tsni(tmp2, s)
};
space_inst_79_25_26_tsni = function space_inst_79_25_26_tsni(n) {
  return replicate_inst_79_25_26_27_tsni(n, " ")
};
replicate_inst_79_25_26_27_tsni = function replicate_inst_79_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_79_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_79_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lambda_inst_80_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_80_22_23_tsni(ml, d)
  }
});
lambda$_inst_80_22_23_tsni = function lambda$_inst_80_22_23_tsni(ml, d) {
  return date_inst_80_22_23_24_tsni(ml, d)
};
date_inst_80_22_23_24_tsni = function date_inst_80_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_80_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_80_22_23_24_25_tsni = function rjustify_inst_80_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_80_22_23_24_25_26_tsni(tmp1);
  return append_inst_80_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_80_22_23_24_25_26_tsni = function space_inst_80_22_23_24_25_26_tsni(n) {
  return replicate_inst_80_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_80_22_23_24_25_26_27_tsni = function replicate_inst_80_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_80_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_80_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_80_28_tsni = function enumFromTo_inst_80_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_80_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_80_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
space_inst_81_31_tsni = function space_inst_81_31_tsni(n) {
  return replicate_inst_81_31_27_tsni(n, " ")
};
replicate_inst_81_31_27_tsni = function replicate_inst_81_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_81_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_81_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
banner_inst_82_40_tsni = function banner_inst_82_40_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_82_40_41_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = replicate_inst_82_40_42_44_tsni(w, " ");
    return replicate_inst_82_40_42_43_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_82_40_42_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_82_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_82_40_41_tsni = function cjustify_inst_82_40_41_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_82_40_41_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = space_inst_82_40_41_45_tsni(tmp4);
  tmp6 = append_inst_82_40_41_46_tsni(s, tmp5);
  return append_inst_82_40_41_47_tsni(tmp3, tmp6)
};
space_inst_82_40_41_31_tsni = function space_inst_82_40_41_31_tsni(n) {
  return replicate_inst_82_40_41_31_27_tsni(n, " ")
};
replicate_inst_82_40_41_31_27_tsni = function replicate_inst_82_40_41_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_40_41_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_82_40_41_47_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_82_2_4_5_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
body$_inst_82_6_tsni = function body$_inst_82_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_82_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_82_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_82_6_35_tsni(3, tmp1)
};
block_inst_82_6_35_tsni = function block_inst_82_6_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_82_6_35_20_tsni(n, t);
  tmp1 = map_inst_82_6_35_93_tsni(spread_inst_82_6_35_36_tsni, tmp);
  return calendar.stack(tmp1)
};
groop_inst_82_6_35_20_tsni = function groop_inst_82_6_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_82_6_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_82_6_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_82_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_82_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_82_6_14_15_tsni = function lambda$_inst_82_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_82_6_14_15_16_tsni(daynames, x);
  return pad$_inst_82_6_14_15_32_tsni(side, end, tmp)
};
pad$_inst_82_6_14_15_32_tsni = function pad$_inst_82_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_82_6_14_15_32_34_tsni(append_inst_82_6_14_15_32_61_tsni, side, p);
  tmp1 = zipWith_inst_82_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_82_6_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_82_6_14_15_32_34_tsni = function zipWith_inst_82_6_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_82_6_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_82_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_82_6_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_82_6_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_82_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_82_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_82_6_14_15_32_33_tsni = function zipWith_inst_82_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_82_6_14_15_16_tsni = function pic$_inst_82_6_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_82_6_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_82_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_82_6_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
title_inst_82_6_14_15_16_29_tsni = function title_inst_82_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_82_6_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_82_6_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_82_6_14_15_16_29_30_tsni = function cjustify_inst_82_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_82_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_82_6_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_82_6_14_15_16_29_30_31_tsni = function space_inst_82_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_82_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_82_6_14_15_16_29_30_31_27_tsni = function replicate_inst_82_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_82_6_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_82_6_14_15_16_17_tsni = function table$_inst_82_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_82_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_82_6_14_15_16_17_99_tsni(daynames, tmp)
};
entries_inst_82_6_14_15_16_17_18_tsni = function entries_inst_82_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_82_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_82_6_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_82_6_14_15_16_17_18_21_tsni = function dates_inst_82_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_82_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_82_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_82_6_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_82_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_82_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_82_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_82_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_82_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_82_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_82_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_82_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_82_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_82_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_82_6_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_82_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_82_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_82_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_82_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_82_6_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_82_6_14_15_16_17_18_19_tsni = function block_inst_82_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_82_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_82_6_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_82_6_14_15_16_17_18_19_20_tsni = function groop_inst_82_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_82_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_82_6_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_82_6_7_tsni = function months_inst_82_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_82_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_82_6_7_8_tsni(yer);
  return zip3_inst_82_6_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_82_6_7_9_tsni = function firstDays_inst_82_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_82_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_82_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_82_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_82_6_7_9_13_tsni(12, tmp3)
};
map_inst_82_6_7_9_12_tsni = function map_inst_82_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_82_6_7_9_11_tsni = function scanl_inst_82_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_82_6_7_9_10_tsni = function monthLengths_inst_82_6_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_82_6_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_82_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_82_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_82_6_7_9_13_tsni = function take_inst_82_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_82_6_7_8_tsni = function monthLengths_inst_82_6_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_82_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
emptyPic_inst_82_48_tsni = function emptyPic_inst_82_48_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_82_48_44_tsni = function replicate_inst_82_48_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_48_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_82_6_14_15_32_61_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
emptyPic_inst_82_40_42_tsni = function emptyPic_inst_82_40_42_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_82_40_42_43_tsni = function replicate_inst_82_40_42_43_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_40_42_43_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_82_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_82_2_tsni = function unlines_inst_82_2_tsni(ls) {
  let tmp;
  tmp = map_inst_82_2_3_tsni(lambda_inst_82_2_4_tsni, ls);
  return concat_inst_82_2_89_tsni(tmp)
};
map_inst_82_2_3_tsni = function map_inst_82_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_82_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_82_2_89_tsni(xs2);
      return append_inst_82_2_89_90_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_82_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_82_2_89_90_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_82_2_4_5_tsni(x, tmp)
});
append_inst_82_2_4_5_tsni = function append_inst_82_2_4_5_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
spread_inst_82_6_35_36_tsni = function spread_inst_82_6_35_36_tsni(ls) {
  return NofibPrelude.foldr1(lambda_inst_82_6_35_36_37_tsni, ls)
};
lambda_inst_82_6_35_36_37_tsni = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda_inst_82_6_35_36_37_38_tsni, a, b)
});
lambda_inst_82_6_35_36_37_38_tsni = (undefined, function (a, b) {
  return append_inst_82_6_35_36_37_38_39_tsni(a, b)
});
append_inst_82_6_35_36_37_38_39_tsni = function append_inst_82_6_35_36_37_38_39_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_82_6_35_36_37_38_39_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_82_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_82_40_42_44_tsni = function replicate_inst_82_40_42_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_82_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_40_42_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_82_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_82_40_41_46_tsni = function append_inst_82_40_41_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_82_40_41_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_82_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
space_inst_82_40_41_45_tsni = function space_inst_82_40_41_45_tsni(n) {
  return replicate_inst_82_40_41_45_27_tsni(n, " ")
};
replicate_inst_82_40_41_45_27_tsni = function replicate_inst_82_40_41_45_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_82_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_82_40_41_45_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_82_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_82_40_41_47_tsni = function append_inst_82_40_41_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lambda_inst_83_84_tsni = (undefined, function (x) {
  return cal_inst_83_84_1_tsni(x)
});
cal_inst_83_84_1_tsni = function cal_inst_83_84_1_tsni(year) {
  let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Deforest_Arr_2_0 = 8;
  _deforest_Deforest_Arr_2_1 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = replicate_inst_83_84_1_48_44_tsni(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_83_84_1_48_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_01 = 1;
  _deforest_Deforest_Arr_2_11 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_83_84_1_100_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_83_84_1_6_14_15_16_17_99_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_83_84_1_40_tsni(year);
  tmp5 = body$_inst_83_84_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_83_84_1_98_tsni(tmp4, tmp5);
  return unlines_inst_83_84_1_2_tsni(tmp6)
};
banner_inst_83_84_1_40_tsni = function banner_inst_83_84_1_40_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_83_84_1_40_41_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = replicate_inst_83_84_1_40_42_44_tsni(w, " ");
    return replicate_inst_83_84_1_40_42_43_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_83_84_1_40_42_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_83_84_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_83_84_1_40_41_tsni = function cjustify_inst_83_84_1_40_41_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_83_84_1_40_41_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = space_inst_83_84_1_40_41_45_tsni(tmp4);
  tmp6 = append_inst_83_84_1_40_41_46_tsni(s, tmp5);
  return append_inst_83_84_1_40_41_47_tsni(tmp3, tmp6)
};
space_inst_83_84_1_40_41_31_tsni = function space_inst_83_84_1_40_41_31_tsni(n) {
  return replicate_inst_83_84_1_40_41_31_27_tsni(n, " ")
};
replicate_inst_83_84_1_40_41_31_27_tsni = function replicate_inst_83_84_1_40_41_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_40_41_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_83_84_1_40_41_47_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
body$_inst_83_84_1_6_tsni = function body$_inst_83_84_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_83_84_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_83_84_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_83_84_1_6_35_tsni(3, tmp1)
};
block_inst_83_84_1_6_35_tsni = function block_inst_83_84_1_6_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_83_84_1_6_35_20_tsni(n, t);
  tmp1 = map_inst_83_84_1_6_35_93_tsni(spread_inst_83_84_1_6_35_36_tsni, tmp);
  return calendar.stack(tmp1)
};
groop_inst_83_84_1_6_35_20_tsni = function groop_inst_83_84_1_6_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_83_84_1_6_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_83_84_1_6_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_83_84_1_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_83_84_1_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_83_84_1_6_14_15_tsni = function lambda$_inst_83_84_1_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_83_84_1_6_14_15_16_tsni(daynames, x);
  return pad$_inst_83_84_1_6_14_15_32_tsni(side, end, tmp)
};
pad$_inst_83_84_1_6_14_15_32_tsni = function pad$_inst_83_84_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_83_84_1_6_14_15_32_34_tsni(append_inst_83_84_1_6_14_15_32_61_tsni, side, p);
  tmp1 = zipWith_inst_83_84_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_83_84_1_6_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_83_84_1_6_14_15_32_34_tsni = function zipWith_inst_83_84_1_6_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_83_84_1_6_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_83_84_1_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_83_84_1_6_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_83_84_1_6_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_83_84_1_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_83_84_1_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_83_84_1_6_14_15_32_33_tsni = function zipWith_inst_83_84_1_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_83_84_1_6_14_15_16_tsni = function pic$_inst_83_84_1_6_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_83_84_1_6_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_83_84_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_83_84_1_6_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
title_inst_83_84_1_6_14_15_16_29_tsni = function title_inst_83_84_1_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_83_84_1_6_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_83_84_1_6_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_83_84_1_6_14_15_16_29_30_tsni = function cjustify_inst_83_84_1_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_83_84_1_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_83_84_1_6_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_83_84_1_6_14_15_16_29_30_31_tsni = function space_inst_83_84_1_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_83_84_1_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_83_84_1_6_14_15_16_29_30_31_27_tsni = function replicate_inst_83_84_1_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_83_84_1_6_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_83_84_1_6_14_15_16_17_tsni = function table$_inst_83_84_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_83_84_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_83_84_1_6_14_15_16_17_99_tsni(daynames, tmp)
};
entries_inst_83_84_1_6_14_15_16_17_18_tsni = function entries_inst_83_84_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_83_84_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_83_84_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_83_84_1_6_14_15_16_17_18_21_tsni = function dates_inst_83_84_1_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_83_84_1_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_83_84_1_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_83_84_1_6_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_83_84_1_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_83_84_1_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_83_84_1_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_83_84_1_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_83_84_1_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_83_84_1_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_83_84_1_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_83_84_1_6_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_83_84_1_6_14_15_16_17_18_19_tsni = function block_inst_83_84_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_83_84_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_83_84_1_6_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_83_84_1_6_14_15_16_17_18_19_20_tsni = function groop_inst_83_84_1_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_83_84_1_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_83_84_1_6_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_83_84_1_6_7_tsni = function months_inst_83_84_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_83_84_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_83_84_1_6_7_8_tsni(yer);
  return zip3_inst_83_84_1_6_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_83_84_1_6_7_9_tsni = function firstDays_inst_83_84_1_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_83_84_1_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_83_84_1_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_83_84_1_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_83_84_1_6_7_9_13_tsni(12, tmp3)
};
map_inst_83_84_1_6_7_9_12_tsni = function map_inst_83_84_1_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_83_84_1_6_7_9_11_tsni = function scanl_inst_83_84_1_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_83_84_1_6_7_9_10_tsni = function monthLengths_inst_83_84_1_6_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_83_84_1_6_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_83_84_1_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_83_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_83_84_1_6_7_9_13_tsni = function take_inst_83_84_1_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_83_84_1_6_7_8_tsni = function monthLengths_inst_83_84_1_6_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_83_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
emptyPic_inst_83_84_1_48_tsni = function emptyPic_inst_83_84_1_48_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_83_84_1_48_44_tsni = function replicate_inst_83_84_1_48_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_48_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_83_84_1_6_14_15_32_61_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
emptyPic_inst_83_84_1_40_42_tsni = function emptyPic_inst_83_84_1_40_42_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_83_84_1_40_42_43_tsni = function replicate_inst_83_84_1_40_42_43_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_40_42_43_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_83_84_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_83_84_1_2_tsni = function unlines_inst_83_84_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_83_84_1_2_3_tsni(lambda_inst_83_84_1_2_4_tsni, ls);
  return concat_inst_83_84_1_2_89_tsni(tmp)
};
map_inst_83_84_1_2_3_tsni = function map_inst_83_84_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_83_84_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_83_84_1_2_89_tsni(xs2);
      return append_inst_83_84_1_2_89_90_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
lambda_inst_83_84_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_83_84_1_2_89_90_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_83_84_1_2_4_5_tsni(x, tmp)
});
append_inst_83_84_1_2_4_5_tsni = function append_inst_83_84_1_2_4_5_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
spread_inst_83_84_1_6_35_36_tsni = function spread_inst_83_84_1_6_35_36_tsni(ls) {
  return NofibPrelude.foldr1(lambda_inst_83_84_1_6_35_36_37_tsni, ls)
};
lambda_inst_83_84_1_6_35_36_37_tsni = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda_inst_83_84_1_6_35_36_37_38_tsni, a, b)
});
lambda_inst_83_84_1_6_35_36_37_38_tsni = (undefined, function (a, b) {
  return append_inst_83_84_1_6_35_36_37_38_39_tsni(a, b)
});
append_inst_83_84_1_6_35_36_37_38_39_tsni = function append_inst_83_84_1_6_35_36_37_38_39_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_83_84_1_6_35_36_37_38_39_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
replicate_inst_83_84_1_40_42_44_tsni = function replicate_inst_83_84_1_40_42_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_83_84_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_40_42_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_83_84_1_40_41_46_tsni = function append_inst_83_84_1_40_41_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_83_84_1_40_41_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
space_inst_83_84_1_40_41_45_tsni = function space_inst_83_84_1_40_41_45_tsni(n) {
  return replicate_inst_83_84_1_40_41_45_27_tsni(n, " ")
};
replicate_inst_83_84_1_40_41_45_27_tsni = function replicate_inst_83_84_1_40_41_45_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_83_84_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_83_84_1_40_41_45_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_83_84_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_83_84_1_40_41_47_tsni = function append_inst_83_84_1_40_41_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
enumFromTo_inst_83_85_tsni = function enumFromTo_inst_83_85_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_83_85_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_83_88_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCalendar_nofib_inst_86_87_tsni = function testCalendar_nofib_inst_86_87_tsni(n) {
  let tmp, tmp1;
  tmp = 1993 + n;
  tmp1 = enumFromTo_inst_86_87_85_tsni(1993, tmp);
  return map_inst_86_87_88_tsni(lambda_inst_86_87_84_tsni, tmp1)
};
lambda_inst_86_87_84_tsni = (undefined, function (x) {
  return cal_inst_86_87_84_1_tsni(x)
});
cal_inst_86_87_84_1_tsni = function cal_inst_86_87_84_1_tsni(year) {
  let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  _deforest_Deforest_Arr_2_01 = 8;
  _deforest_Deforest_Arr_2_11 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = replicate_inst_86_87_84_1_48_44_tsni(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_86_87_84_1_48_tsni(arr);
  side = tmp;
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 25;
  arr1 = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp1 = emptyPic_inst_86_87_84_1_100_tsni(arr1);
  end = tmp1;
  tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp3 = (ys) => {
    let param0, param1, x, xs, tmp7;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp7 = append_inst_86_87_84_1_6_14_15_16_17_99_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_86_87_84_1_40_tsni(year);
  tmp5 = body$_inst_86_87_84_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_86_87_84_1_98_tsni(tmp4, tmp5);
  return unlines_inst_86_87_84_1_2_tsni(tmp6)
};
unlines_inst_86_87_84_1_2_tsni = function unlines_inst_86_87_84_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_86_87_84_1_2_3_tsni(lambda_inst_86_87_84_1_2_4_tsni, ls);
  return concat_inst_86_87_84_1_2_89_tsni(tmp)
};
map_inst_86_87_84_1_2_3_tsni = function map_inst_86_87_84_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_86_87_84_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_86_87_84_1_2_89_tsni(xs2);
      return append_inst_86_87_84_1_2_89_90_tsni(x1, tmp2)
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
lambda_inst_86_87_84_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_86_87_84_1_2_89_90_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_86_87_84_1_2_4_5_tsni(x, tmp)
});
append_inst_86_87_84_1_2_4_5_tsni = function append_inst_86_87_84_1_2_4_5_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
body$_inst_86_87_84_1_6_tsni = function body$_inst_86_87_84_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_86_87_84_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_86_87_84_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_86_87_84_1_6_35_tsni(3, tmp1)
};
months_inst_86_87_84_1_6_7_tsni = function months_inst_86_87_84_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_86_87_84_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_86_87_84_1_6_7_8_tsni(yer);
  return zip3_inst_86_87_84_1_6_7_92_tsni(calendar1.monthNames, tmp, tmp1)
};
monthLengths_inst_86_87_84_1_6_7_8_tsni = function monthLengths_inst_86_87_84_1_6_7_8_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (x, xs, y, ys) => {
    return NofibPrelude.Nil
  };
  tmp1 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_86_87_84_1_6_7_92_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_86_87_84_1_6_7_9_tsni = function firstDays_inst_86_87_84_1_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_86_87_84_1_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_86_87_84_1_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_86_87_84_1_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_86_87_84_1_6_7_9_13_tsni(12, tmp3)
};
monthLengths_inst_86_87_84_1_6_7_9_10_tsni = function monthLengths_inst_86_87_84_1_6_7_9_10_tsni(year) {
  let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11;
  scrut = calendar.leap(year);
  if (scrut === true) {
    tmp = 29;
  } else {
    tmp = 28;
  }
  feb = tmp;
  _deforest_Cons_head11 = 31;
  _deforest_Cons_tail11 = (f, q) => {
    let _deforest_Cons_head12, _deforest_Cons_tail12;
    _deforest_Cons_head12 = q;
    _deforest_Cons_tail12 = (f1) => {
      return (n) => {
        return (zs, x, xs) => {
          return match_ys_arm_default_inst_86_87_84_1_6_7_92_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_86_87_84_1_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_86_87_84_1_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_86_87_84_1_6_7_9_11_tsni = function scanl_inst_86_87_84_1_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_86_87_84_1_6_7_9_12_tsni = function map_inst_86_87_84_1_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_86_87_84_1_6_7_9_13_tsni = function take_inst_86_87_84_1_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_86_87_84_1_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_86_87_84_1_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_86_87_84_1_6_14_15_tsni = function lambda$_inst_86_87_84_1_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_86_87_84_1_6_14_15_16_tsni(daynames, x);
  return pad$_inst_86_87_84_1_6_14_15_32_tsni(side, end, tmp)
};
pic$_inst_86_87_84_1_6_14_15_16_tsni = function pic$_inst_86_87_84_1_6_14_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_86_87_84_1_6_14_15_16_29_tsni(mn);
    tmp1 = table$_inst_86_87_84_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_86_87_84_1_6_14_15_16_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
table$_inst_86_87_84_1_6_14_15_16_17_tsni = function table$_inst_86_87_84_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_86_87_84_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_86_87_84_1_6_14_15_16_17_99_tsni(daynames, tmp)
};
entries_inst_86_87_84_1_6_14_15_16_17_18_tsni = function entries_inst_86_87_84_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_86_87_84_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_86_87_84_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_86_87_84_1_6_14_15_16_17_18_19_tsni = function block_inst_86_87_84_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_86_87_84_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_86_87_84_1_6_14_15_16_17_18_19_93_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_86_87_84_1_6_14_15_16_17_18_19_20_tsni = function groop_inst_86_87_84_1_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_86_87_84_1_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_86_87_84_1_6_14_15_16_17_18_19_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_86_87_84_1_6_14_15_16_17_18_21_tsni = function dates_inst_86_87_84_1_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_86_87_84_1_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_86_87_84_1_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_86_87_84_1_6_14_15_16_17_18_21_95_tsni(lambda$this, tmp2)
};
lambda_inst_86_87_84_1_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = d < 1;
  tmp1 = ml < d;
  scrut = tmp || tmp1;
  if (scrut === true) {
    tmp2 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
  } else {
    tmp3 = NofibPrelude.stringOfInt(d);
    tmp4 = NofibPrelude.nofibStringToList(tmp3);
    tmp5 = rjustify_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp4);
    return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
  }
};
rjustify_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(tmp2, s)
};
space_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_86_87_84_1_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_86_87_84_1_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_86_87_84_1_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_86_87_84_1_6_14_15_16_17_18_21_95_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_86_87_84_1_6_14_15_16_29_tsni = function title_inst_86_87_84_1_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_86_87_84_1_6_14_15_16_29_30_tsni(21, mn);
  _deforest_Cons_head = tmp;
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  return (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_86_87_84_1_6_14_15_16_96_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_86_87_84_1_6_14_15_16_29_30_tsni = function cjustify_inst_86_87_84_1_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_86_87_84_1_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_86_87_84_1_6_14_15_16_29_30_47_tsni(tmp3, tmp6)
};
space_inst_86_87_84_1_6_14_15_16_29_30_31_tsni = function space_inst_86_87_84_1_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_86_87_84_1_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_86_87_84_1_6_14_15_16_29_30_31_27_tsni = function replicate_inst_86_87_84_1_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_86_87_84_1_6_14_15_16_29_30_47_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_86_87_84_1_6_14_15_32_tsni = function pad$_inst_86_87_84_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_86_87_84_1_6_14_15_32_34_tsni(append_inst_86_87_84_1_6_14_15_32_61_tsni, side, p);
  tmp1 = zipWith_inst_86_87_84_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_86_87_84_1_6_14_15_32_97_tsni(tmp1, end)
};
zipWith_inst_86_87_84_1_6_14_15_32_33_tsni = function zipWith_inst_86_87_84_1_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_86_87_84_1_6_14_15_32_34_tsni = function zipWith_inst_86_87_84_1_6_14_15_32_34_tsni(f, xss, yss) {
  let param0, param1, x, xs, param01, param11, y, ys, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    if (yss instanceof NofibPrelude.Cons.class) {
      param01 = yss.head;
      param11 = yss.tail;
      y = param01;
      ys = param11;
      tmp = runtime.safeCall(f(x, y));
      tmp1 = zipWith_inst_86_87_84_1_6_14_15_32_34_tsni(f, xs, ys);
      _deforest_Cons_head = tmp;
      _deforest_Cons_tail = tmp1;
      return (f1, yss1) => {
        let _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x = param0;
        xs = param1;
        if (yss1 instanceof NofibPrelude.Cons.class) {
          param01 = yss1.head;
          param11 = yss1.tail;
          y = param01;
          ys = param11;
          tmp = runtime.safeCall(f1(x, y));
          tmp1 = zipWith_inst_86_87_84_1_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_86_87_84_1_6_14_15_32_97_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_86_87_84_1_6_14_15_32_97_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_86_87_84_1_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_86_87_84_1_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
block_inst_86_87_84_1_6_35_tsni = function block_inst_86_87_84_1_6_35_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_86_87_84_1_6_35_20_tsni(n, t);
  tmp1 = map_inst_86_87_84_1_6_35_93_tsni(spread_inst_86_87_84_1_6_35_36_tsni, tmp);
  return calendar.stack(tmp1)
};
groop_inst_86_87_84_1_6_35_20_tsni = function groop_inst_86_87_84_1_6_35_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.drop(n, xs);
    tmp2 = groop_inst_86_87_84_1_6_35_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_86_87_84_1_6_35_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
spread_inst_86_87_84_1_6_35_36_tsni = function spread_inst_86_87_84_1_6_35_36_tsni(ls) {
  return NofibPrelude.foldr1(lambda_inst_86_87_84_1_6_35_36_37_tsni, ls)
};
lambda_inst_86_87_84_1_6_35_36_37_tsni = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda_inst_86_87_84_1_6_35_36_37_38_tsni, a, b)
});
lambda_inst_86_87_84_1_6_35_36_37_38_tsni = (undefined, function (a, b) {
  return append_inst_86_87_84_1_6_35_36_37_38_39_tsni(a, b)
});
append_inst_86_87_84_1_6_35_36_37_38_39_tsni = function append_inst_86_87_84_1_6_35_36_37_38_39_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_86_87_84_1_6_35_36_37_38_39_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
banner_inst_86_87_84_1_40_tsni = function banner_inst_86_87_84_1_40_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_86_87_84_1_40_41_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = replicate_inst_86_87_84_1_40_42_44_tsni(w, " ");
    return replicate_inst_86_87_84_1_40_42_43_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_86_87_84_1_40_42_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_86_87_84_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_86_87_84_1_40_41_tsni = function cjustify_inst_86_87_84_1_40_41_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_86_87_84_1_40_41_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = space_inst_86_87_84_1_40_41_45_tsni(tmp4);
  tmp6 = append_inst_86_87_84_1_40_41_46_tsni(s, tmp5);
  return append_inst_86_87_84_1_40_41_47_tsni(tmp3, tmp6)
};
space_inst_86_87_84_1_40_41_31_tsni = function space_inst_86_87_84_1_40_41_31_tsni(n) {
  return replicate_inst_86_87_84_1_40_41_31_27_tsni(n, " ")
};
replicate_inst_86_87_84_1_40_41_31_27_tsni = function replicate_inst_86_87_84_1_40_41_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_40_41_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_86_87_84_1_40_41_47_tsni(xs, ys);
      _deforest_Cons_head1 = x1;
      _deforest_Cons_tail1 = tmp2;
      return (ys1) => {
        return match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys1, _deforest_Cons_head1, _deforest_Cons_tail1)
      }
    }
  }
};
emptyPic_inst_86_87_84_1_40_42_tsni = function emptyPic_inst_86_87_84_1_40_42_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_86_87_84_1_40_42_43_tsni = function replicate_inst_86_87_84_1_40_42_43_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_40_42_43_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_86_87_84_1_98_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
replicate_inst_86_87_84_1_40_42_44_tsni = function replicate_inst_86_87_84_1_40_42_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_86_87_84_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_40_42_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
space_inst_86_87_84_1_40_41_45_tsni = function space_inst_86_87_84_1_40_41_45_tsni(n) {
  return replicate_inst_86_87_84_1_40_41_45_27_tsni(n, " ")
};
replicate_inst_86_87_84_1_40_41_45_27_tsni = function replicate_inst_86_87_84_1_40_41_45_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return match_xs_arm_Nil_inst_86_87_84_1_2_4_5_tsni(ys)
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_40_41_45_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
append_inst_86_87_84_1_40_41_46_tsni = function append_inst_86_87_84_1_40_41_46_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_86_87_84_1_40_41_46_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_86_87_84_1_2_4_5_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw new globalThis.Error("match error");
  }
};
append_inst_86_87_84_1_40_41_47_tsni = function append_inst_86_87_84_1_40_41_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_86_87_84_1_48_tsni = function emptyPic_inst_86_87_84_1_48_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_86_87_84_1_48_44_tsni = function replicate_inst_86_87_84_1_48_44_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_86_87_84_1_48_44_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_86_87_84_1_6_14_15_32_61_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_86_87_85_tsni = function enumFromTo_inst_86_87_85_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_86_87_85_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_86_87_88_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x1, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs1 = param11;
        tmp4 = concat_inst_86_91_tsni(xs1);
        return append_inst_86_91_90_tsni(x1, tmp4)
      }
    }
  } else {
    return (f) => {
      return () => {
        return () => {
          return ""
        }
      }
    }
  }
};
map_inst_86_87_88_tsni = function map_inst_86_87_88_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_86_87_84_1_2_89_tsni = function concat_inst_86_87_84_1_2_89_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_86_87_84_1_2_89_90_tsni = function append_inst_86_87_84_1_2_89_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_86_91_tsni = function concat_inst_86_91_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_86_91_90_tsni = function append_inst_86_91_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_0_1_2_89_tsni = function concat_inst_0_1_2_89_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_1_2_89_90_tsni = function append_inst_0_1_2_89_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_0_1_6_7_92_tsni = function zip3_inst_0_1_6_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
map_inst_0_1_6_14_15_16_17_18_19_93_tsni = function map_inst_0_1_6_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_0_1_6_14_15_16_17_18_21_95_tsni = function map_inst_0_1_6_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_6_14_15_16_29_30_47_tsni = function append_inst_0_1_6_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_16_96_tsni = function append_inst_0_1_6_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_32_97_tsni = function append_inst_0_1_6_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_0_1_6_35_93_tsni = function map_inst_0_1_6_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_98_tsni = function append_inst_0_1_98_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_16_17_99_tsni = function append_inst_0_1_6_14_15_16_17_99_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_0_1_100_tsni = function emptyPic_inst_0_1_100_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_0_1_6_14_15_32_61_tsni = function append_inst_0_1_6_14_15_32_61_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_49_41_47_tsni = function append_inst_49_41_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_49_42_tsni = function emptyPic_inst_49_42_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_50_16_17_18_19_93_tsni = function map_inst_50_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_50_16_17_18_21_22_23_24_25_94_tsni = function append_inst_50_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_50_16_17_18_21_95_tsni = function map_inst_50_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_50_16_29_30_47_tsni = function append_inst_50_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_50_16_96_tsni = function append_inst_50_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_50_32_97_tsni = function append_inst_50_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_15_32_97_tsni = function append_inst_51_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_15_16_29_30_47_tsni = function append_inst_51_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_51_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_51_15_16_17_18_21_95_tsni = function map_inst_51_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_51_15_16_17_18_19_93_tsni = function map_inst_51_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_51_15_16_96_tsni = function append_inst_51_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_52_7_92_tsni = function zip3_inst_52_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
map_inst_52_14_15_16_17_18_19_93_tsni = function map_inst_52_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_52_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_52_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_52_14_15_16_17_18_21_95_tsni = function map_inst_52_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_52_14_15_16_29_30_47_tsni = function append_inst_52_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_14_15_16_96_tsni = function append_inst_52_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_52_14_15_32_97_tsni = function append_inst_52_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_52_35_93_tsni = function map_inst_52_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_53_54_35_93_tsni = function map_inst_53_54_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_53_54_14_15_32_97_tsni = function append_inst_53_54_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_54_14_15_16_29_30_47_tsni = function append_inst_53_54_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_54_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_53_54_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_53_54_14_15_16_17_18_21_95_tsni = function map_inst_53_54_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_53_54_14_15_16_17_18_19_93_tsni = function map_inst_53_54_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_53_54_14_15_16_96_tsni = function append_inst_53_54_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_53_54_7_92_tsni = function zip3_inst_53_54_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
append_inst_55_29_30_47_tsni = function append_inst_55_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_55_17_18_21_22_23_24_25_94_tsni = function append_inst_55_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_55_17_18_21_95_tsni = function map_inst_55_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_55_17_18_19_93_tsni = function map_inst_55_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_55_96_tsni = function append_inst_55_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_56_57_17_18_19_93_tsni = function map_inst_56_57_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_56_57_17_18_21_22_23_24_25_94_tsni = function append_inst_56_57_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_56_57_17_18_21_95_tsni = function map_inst_56_57_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_56_57_29_30_47_tsni = function append_inst_56_57_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_56_57_96_tsni = function append_inst_56_57_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_58_97_tsni = function append_inst_58_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_60_97_tsni = function append_inst_59_60_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_59_60_101_tsni = function append_inst_59_60_101_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_62_30_47_tsni = function append_inst_62_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_63_18_19_93_tsni = function map_inst_63_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_63_18_21_22_23_24_25_94_tsni = function append_inst_63_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_63_18_21_95_tsni = function map_inst_63_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_64_65_18_21_22_23_24_25_94_tsni = function append_inst_64_65_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_64_65_18_21_95_tsni = function map_inst_64_65_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_64_65_18_19_93_tsni = function map_inst_64_65_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_66_21_22_23_24_25_94_tsni = function append_inst_66_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_66_21_95_tsni = function map_inst_66_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_66_19_93_tsni = function map_inst_66_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zip3_inst_67_92_tsni = function zip3_inst_67_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
append_inst_68_24_25_94_tsni = function append_inst_68_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_69_23_24_25_94_tsni = function append_inst_69_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_70_89_tsni = function concat_inst_70_89_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_70_89_90_tsni = function append_inst_70_89_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_71_93_tsni = function map_inst_71_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_72_102_tsni = function map_inst_72_102_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_74_103_tsni = function emptyPic_inst_74_103_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_74_104_tsni = function append_inst_74_104_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_inst_77_13_tsni = function take_inst_77_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
append_inst_78_94_tsni = function append_inst_78_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_79_25_94_tsni = function append_inst_79_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_80_22_23_24_25_94_tsni = function append_inst_80_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_80_95_tsni = function map_inst_80_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_81_47_tsni = function append_inst_81_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_82_100_tsni = function emptyPic_inst_82_100_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_82_6_35_93_tsni = function map_inst_82_6_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_82_6_14_15_32_97_tsni = function append_inst_82_6_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_82_6_14_15_16_29_30_47_tsni = function append_inst_82_6_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_82_6_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_82_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_82_6_14_15_16_17_18_21_95_tsni = function map_inst_82_6_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_82_6_14_15_16_17_18_19_93_tsni = function map_inst_82_6_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_82_6_14_15_16_96_tsni = function append_inst_82_6_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_82_6_7_92_tsni = function zip3_inst_82_6_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
append_inst_82_6_14_15_32_61_tsni = function append_inst_82_6_14_15_32_61_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_82_6_14_15_16_17_99_tsni = function append_inst_82_6_14_15_16_17_99_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_82_98_tsni = function append_inst_82_98_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_82_2_89_tsni = function concat_inst_82_2_89_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_82_2_89_90_tsni = function append_inst_82_2_89_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_83_84_1_100_tsni = function emptyPic_inst_83_84_1_100_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_83_84_1_6_35_93_tsni = function map_inst_83_84_1_6_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_83_84_1_6_14_15_32_97_tsni = function append_inst_83_84_1_6_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_83_84_1_6_14_15_16_29_30_47_tsni = function append_inst_83_84_1_6_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_83_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_83_84_1_6_14_15_16_17_18_21_95_tsni = function map_inst_83_84_1_6_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_83_84_1_6_14_15_16_17_18_19_93_tsni = function map_inst_83_84_1_6_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_83_84_1_6_14_15_16_96_tsni = function append_inst_83_84_1_6_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_83_84_1_6_7_92_tsni = function zip3_inst_83_84_1_6_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
append_inst_83_84_1_6_14_15_32_61_tsni = function append_inst_83_84_1_6_14_15_32_61_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_83_84_1_6_14_15_16_17_99_tsni = function append_inst_83_84_1_6_14_15_16_17_99_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_83_84_1_98_tsni = function append_inst_83_84_1_98_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_83_84_1_2_89_tsni = function concat_inst_83_84_1_2_89_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_83_84_1_2_89_90_tsni = function append_inst_83_84_1_2_89_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_83_88_tsni = function map_inst_83_88_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zip3_inst_86_87_84_1_6_7_92_tsni = function zip3_inst_86_87_84_1_6_7_92_tsni(xs, ys, zs) {
  let param0, param1, x, xs1;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(zs, x, xs1))
  } else {
    return NofibPrelude.Nil
  }
};
map_inst_86_87_84_1_6_14_15_16_17_18_19_93_tsni = function map_inst_86_87_84_1_6_14_15_16_17_18_19_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni = function append_inst_86_87_84_1_6_14_15_16_17_18_21_22_23_24_25_94_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_86_87_84_1_6_14_15_16_17_18_21_95_tsni = function map_inst_86_87_84_1_6_14_15_16_17_18_21_95_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_86_87_84_1_6_14_15_16_29_30_47_tsni = function append_inst_86_87_84_1_6_14_15_16_29_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_86_87_84_1_6_14_15_16_96_tsni = function append_inst_86_87_84_1_6_14_15_16_96_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_86_87_84_1_6_14_15_32_97_tsni = function append_inst_86_87_84_1_6_14_15_32_97_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_86_87_84_1_6_35_93_tsni = function map_inst_86_87_84_1_6_35_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_86_87_84_1_98_tsni = function append_inst_86_87_84_1_98_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_86_87_84_1_6_14_15_16_17_99_tsni = function append_inst_86_87_84_1_6_14_15_16_17_99_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_86_87_84_1_100_tsni = function emptyPic_inst_86_87_84_1_100_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_86_87_84_1_6_14_15_32_61_tsni = function append_inst_86_87_84_1_6_14_15_32_61_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
nofibListToString_inst_86_105_tsni = function nofibListToString_inst_86_105_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda8 = (undefined, function (x) {
  return cal_inst_0_1_tsni(x)
});
banner = function banner(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_49_41_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp4)
  };
  tmp3 = emptyPic_inst_49_42_tsni(arr);
  return NofibPrelude.Cons(tmp2, tmp3)
};
lambda$1 = function lambda$(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_50_16_tsni(daynames, x);
  return pad$_inst_50_32_tsni(side, end, tmp)
};
lambda7 = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_51_15_tsni(side, end, daynames, x)
  }
});
body$ = function body$(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_52_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_52_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_52_35_tsni(3, tmp1)
};
body = function body(side, end, daynames) {
  return (yr) => {
    return body$_inst_53_54_tsni(side, end, daynames, yr)
  }
};
pic$ = function pic$(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (globalThis.Array.isArray(mnfdml) && mnfdml.length === 3) {
    first0 = mnfdml[0];
    first1 = mnfdml[1];
    first2 = mnfdml[2];
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_55_29_tsni(mn);
    tmp1 = table$_inst_55_17_tsni(daynames, fd, ml);
    return append_inst_55_96_tsni(tmp, tmp1)
  } else {
    throw new globalThis.Error("match error");
  }
};
pic = function pic(daynames) {
  return (mnfdml) => {
    return pic$_inst_56_57_tsni(daynames, mnfdml)
  }
};
pad$ = function pad$(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_58_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_58_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_58_97_tsni(tmp1, end)
};
pad = function pad(side, end) {
  return (p) => {
    return pad$_inst_59_60_tsni(side, end, p)
  }
};
title = function title(mn) {
  let tmp;
  tmp = cjustify_inst_62_30_tsni(21, mn);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
};
table$ = function table$(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_63_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
table = function table(daynames) {
  return (fd, ml) => {
    return table$_inst_64_65_tsni(daynames, fd, ml)
  }
};
entries = function entries(fd, ml) {
  let tmp;
  tmp = dates_inst_66_21_tsni(fd, ml);
  return block_inst_66_19_tsni(7, tmp)
};
months = function months(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_67_9_tsni(yer);
  tmp1 = monthLengths_inst_67_8_tsni(yer);
  return zip3_inst_67_92_tsni(calendar1.monthNames, tmp, tmp1)
};
lambda$ = function lambda$(ml, d) {
  return date_inst_68_24_tsni(ml, d)
};
lambda6 = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_69_23_tsni(ml, d)
  }
});
lambda4 = (undefined, function (a, b) {
  return a + b
});
lambda5 = (undefined, function (x) {
  return NofibPrelude.intMod(x, 7)
});
lambda3 = (undefined, function (a, b) {
  return NofibPrelude.append(a, b)
});
lambda2 = (undefined, function (a, b) {
  return NofibPrelude.zipWith(lambda3, a, b)
});
lambda1 = (undefined, function (a, b) {
  return NofibPrelude.append(a, b)
});
lambda = (undefined, function (x) {
  let tmp;
  tmp = NofibPrelude.Cons("\n", NofibPrelude.Nil);
  return NofibPrelude.append(x, tmp)
});
(class calendar {
  static {
    calendar1 = calendar;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23;
    tmp = NofibPrelude.nofibStringToList("January");
    tmp1 = NofibPrelude.nofibStringToList("February");
    tmp2 = NofibPrelude.nofibStringToList("March");
    tmp3 = NofibPrelude.nofibStringToList("April");
    tmp4 = NofibPrelude.nofibStringToList("May");
    tmp5 = NofibPrelude.nofibStringToList("June");
    tmp6 = NofibPrelude.nofibStringToList("July");
    tmp7 = NofibPrelude.nofibStringToList("August");
    tmp8 = NofibPrelude.nofibStringToList("September");
    tmp9 = NofibPrelude.nofibStringToList("October");
    tmp10 = NofibPrelude.nofibStringToList("November");
    tmp11 = NofibPrelude.nofibStringToList("December");
    tmp12 = NofibPrelude.Cons(tmp11, NofibPrelude.Nil);
    tmp13 = NofibPrelude.Cons(tmp10, tmp12);
    tmp14 = NofibPrelude.Cons(tmp9, tmp13);
    tmp15 = NofibPrelude.Cons(tmp8, tmp14);
    tmp16 = NofibPrelude.Cons(tmp7, tmp15);
    tmp17 = NofibPrelude.Cons(tmp6, tmp16);
    tmp18 = NofibPrelude.Cons(tmp5, tmp17);
    tmp19 = NofibPrelude.Cons(tmp4, tmp18);
    tmp20 = NofibPrelude.Cons(tmp3, tmp19);
    tmp21 = NofibPrelude.Cons(tmp2, tmp20);
    tmp22 = NofibPrelude.Cons(tmp1, tmp21);
    tmp23 = NofibPrelude.Cons(tmp, tmp22);
    this.monthNames = tmp23;
  }
  static unlines(ls) {
    let tmp;
    tmp = map_inst_70_3_tsni(lambda_inst_70_4_tsni, ls);
    return concat_inst_70_89_tsni(tmp)
  } 
  static height(p) {
    return NofibPrelude.listLen(p)
  } 
  static width(p1) {
    let tmp;
    tmp = NofibPrelude.head(p1);
    return NofibPrelude.listLen(tmp)
  } 
  static stack(ls1) {
    return NofibPrelude.foldr1(lambda1, ls1)
  } 
  static spread(ls2) {
    return NofibPrelude.foldr1(lambda2, ls2)
  } 
  static emptyPic(hw) {
    let first1, first0, h, w, tmp;
    if (globalThis.Array.isArray(hw) && hw.length === 2) {
      first0 = hw[0];
      first1 = hw[1];
      h = first0;
      w = first1;
      tmp = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      tmp = NofibPrelude.take(n, xs);
      tmp1 = NofibPrelude.drop(n, xs);
      tmp2 = calendar.groop(n, tmp1);
      return NofibPrelude.Cons(tmp, tmp2)
    }
  } 
  static block(n1, t) {
    let tmp, tmp1;
    tmp = groop_inst_71_20_tsni(n1, t);
    tmp1 = map_inst_71_93_tsni(calendar.spread, tmp);
    return calendar.stack(tmp1)
  } 
  static blockT(n2, t1) {
    let tmp, tmp1;
    tmp = groop_inst_72_73_tsni(n2, t1);
    tmp1 = map_inst_72_102_tsni(calendar.stack, tmp);
    return calendar.stack(tmp1)
  } 
  static lframe(mn, p2) {
    let first1, first0, m, n3, h, w, tmp, tmp1, tmp2, arr, tmp3, tmp4, tmp5, arr1, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    if (globalThis.Array.isArray(mn) && mn.length === 2) {
      first0 = mn[0];
      first1 = mn[1];
      m = first0;
      n3 = first1;
      tmp = calendar.height(p2);
      h = tmp;
      tmp1 = calendar.width(p2);
      w = tmp1;
      tmp2 = n3 - w;
      _deforest_Deforest_Arr_2_0 = h;
      _deforest_Deforest_Arr_2_1 = tmp2;
      arr = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_0;
        first11 = _deforest_Deforest_Arr_2_1;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return replicate_inst_74_75_43_tsni(h1, tmp7)
      };
      tmp3 = emptyPic_inst_74_75_tsni(arr);
      tmp4 = zipWith_inst_74_76_tsni(NofibPrelude.append, p2, tmp3);
      tmp5 = m - h;
      _deforest_Deforest_Arr_2_01 = tmp5;
      _deforest_Deforest_Arr_2_11 = n3;
      arr1 = () => {
        let first11, first01, h1, w1, tmp7;
        first01 = _deforest_Deforest_Arr_2_01;
        first11 = _deforest_Deforest_Arr_2_11;
        h1 = first01;
        w1 = first11;
        tmp7 = NofibPrelude.replicate(w1, " ");
        return NofibPrelude.replicate(h1, tmp7)
      };
      tmp6 = emptyPic_inst_74_103_tsni(arr1);
      return append_inst_74_104_tsni(tmp4, tmp6)
    } else {
      throw new globalThis.Error("match error");
    }
  } 
  static leap(year) {
    let scrut, tmp, tmp1, tmp2;
    tmp = NofibPrelude.intMod(year, 100);
    scrut = tmp == 0;
    if (scrut === true) {
      tmp1 = NofibPrelude.intMod(year, 400);
      return tmp1 == 0
    } else {
      tmp2 = NofibPrelude.intMod(year, 4);
      return tmp2 == 0
    }
  } 
  static monthLengths(year1) {
    let feb, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11;
    scrut = calendar.leap(year1);
    if (scrut === true) {
      tmp = 29;
    } else {
      tmp = 28;
    }
    feb = tmp;
    tmp1 = NofibPrelude.Cons(31, NofibPrelude.Nil);
    tmp2 = NofibPrelude.Cons(30, tmp1);
    tmp3 = NofibPrelude.Cons(31, tmp2);
    tmp4 = NofibPrelude.Cons(30, tmp3);
    tmp5 = NofibPrelude.Cons(31, tmp4);
    tmp6 = NofibPrelude.Cons(31, tmp5);
    tmp7 = NofibPrelude.Cons(30, tmp6);
    tmp8 = NofibPrelude.Cons(31, tmp7);
    tmp9 = NofibPrelude.Cons(30, tmp8);
    tmp10 = NofibPrelude.Cons(31, tmp9);
    tmp11 = NofibPrelude.Cons(feb, tmp10);
    return NofibPrelude.Cons(31, tmp11)
  } 
  static jan1st(year2) {
    let last, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = year2 - 1;
    last = tmp;
    tmp1 = NofibPrelude.intDiv(last, 4);
    tmp2 = year2 + tmp1;
    tmp3 = NofibPrelude.intDiv(last, 100);
    tmp4 = tmp2 - tmp3;
    tmp5 = NofibPrelude.intDiv(last, 400);
    tmp6 = tmp4 + tmp5;
    return NofibPrelude.intMod(tmp6, 7)
  } 
  static firstDays(year3) {
    let tmp, tmp1, tmp2, tmp3;
    tmp = calendar.jan1st(year3);
    tmp1 = monthLengths_inst_77_10_tsni(year3);
    tmp2 = scanl_inst_77_11_tsni(lambda4, tmp, tmp1);
    tmp3 = map_inst_77_12_tsni(lambda5, tmp2);
    return take_inst_77_13_tsni(12, tmp3)
  } 
  static space(n3) {
    return NofibPrelude.replicate(n3, " ")
  } 
  static ljustify(n4, s) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s);
    tmp1 = n4 - tmp;
    tmp2 = calendar.space(tmp1);
    return NofibPrelude.append(s, tmp2)
  } 
  static rjustify(n5, s1) {
    let tmp, tmp1, tmp2;
    tmp = NofibPrelude.listLen(s1);
    tmp1 = n5 - tmp;
    tmp2 = space_inst_78_26_tsni(tmp1);
    return append_inst_78_94_tsni(tmp2, s1)
  } 
  static date(ml, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = d < 1;
    tmp1 = ml < d;
    scrut = tmp || tmp1;
    if (scrut === true) {
      tmp2 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp2, NofibPrelude.Nil)
    } else {
      tmp3 = NofibPrelude.stringOfInt(d);
      tmp4 = NofibPrelude.nofibStringToList(tmp3);
      tmp5 = rjustify_inst_79_25_tsni(3, tmp4);
      return NofibPrelude.Cons(tmp5, NofibPrelude.Nil)
    }
  } 
  static dates(fd, ml1) {
    let tmp, tmp1, tmp2, lambda$this;
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = enumFromTo_inst_80_28_tsni(tmp, tmp1);
    lambda$this = runtime.safeCall(lambda_inst_80_22_tsni(ml1));
    return map_inst_80_95_tsni(lambda$this, tmp2)
  } 
  static cjustify(n6, s2) {
    let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = NofibPrelude.listLen(s2);
    tmp1 = n6 - tmp;
    m = tmp1;
    tmp2 = NofibPrelude.intDiv(m, 2);
    halfm = tmp2;
    tmp3 = space_inst_81_31_tsni(halfm);
    tmp4 = m - halfm;
    tmp5 = calendar.space(tmp4);
    tmp6 = NofibPrelude.append(s2, tmp5);
    return append_inst_81_47_tsni(tmp3, tmp6)
  } 
  static cal(year4) {
    let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
    _deforest_Deforest_Arr_2_0 = 8;
    _deforest_Deforest_Arr_2_1 = 2;
    arr = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      h = first0;
      w = first1;
      tmp7 = replicate_inst_82_48_44_tsni(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp = emptyPic_inst_82_48_tsni(arr);
    side = tmp;
    _deforest_Deforest_Arr_2_01 = 1;
    _deforest_Deforest_Arr_2_11 = 25;
    arr1 = () => {
      let first1, first0, h, w, tmp7;
      first0 = _deforest_Deforest_Arr_2_01;
      first1 = _deforest_Deforest_Arr_2_11;
      h = first0;
      w = first1;
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp1 = emptyPic_inst_82_100_tsni(arr1);
    end = tmp1;
    tmp2 = NofibPrelude.nofibStringToList(" Su Mo Tu We Th Fr Sa");
    _deforest_Cons_head = tmp2;
    _deforest_Cons_tail = (ys) => {
      return ys
    };
    tmp3 = (ys) => {
      let param0, param1, x, xs1, tmp7;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp7 = append_inst_82_6_14_15_16_17_99_tsni(xs1, ys);
      return NofibPrelude.Cons(x, tmp7)
    };
    daynames = tmp3;
    tmp4 = banner_inst_82_40_tsni(year4);
    tmp5 = body$_inst_82_6_tsni(side, end, daynames, year4);
    tmp6 = append_inst_82_98_tsni(tmp4, tmp5);
    return unlines_inst_82_2_tsni(tmp6)
  } 
  static testCalendar_nofib(n7) {
    let tmp, tmp1;
    tmp = 1993 + n7;
    tmp1 = enumFromTo_inst_83_85_tsni(1993, tmp);
    return map_inst_83_88_tsni(lambda_inst_83_84_tsni, tmp1)
  } 
  static main() {
    let tmp, tmp1;
    tmp = testCalendar_nofib_inst_86_87_tsni(0);
    tmp1 = concat_inst_86_91_tsni(tmp);
    return nofibListToString_inst_86_105_tsni(tmp1)
  }
  static toString() { return "calendar"; }
});
let calendar = calendar1; export default calendar;
