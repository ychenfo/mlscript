const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let body, pad, banner, entries, pic, title, months, table, calendar1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda$, lambda$1, table$, pad$, pic$, body$, lambda$2, cal_inst_0_1_tsni, unlines_inst_0_1_2_tsni, map_inst_0_1_2_3_tsni, lambda_inst_0_1_2_4_tsni, append_inst_0_1_2_4_5_tsni, body$_inst_0_1_6_tsni, months_inst_0_1_6_7_tsni, monthLengths_inst_0_1_6_7_8_tsni, firstDays_inst_0_1_6_7_9_tsni, monthLengths_inst_0_1_6_7_9_10_tsni, scanl_inst_0_1_6_7_9_11_tsni, map_inst_0_1_6_7_9_12_tsni, take_inst_0_1_6_7_9_13_tsni, lambda_inst_0_1_6_14_tsni, lambda$_inst_0_1_6_14_15_tsni, pic$_inst_0_1_6_14_15_16_tsni, table$_inst_0_1_6_14_15_16_17_tsni, entries_inst_0_1_6_14_15_16_17_18_tsni, block_inst_0_1_6_14_15_16_17_18_19_tsni, groop_inst_0_1_6_14_15_16_17_18_19_20_tsni, dates_inst_0_1_6_14_15_16_17_18_21_tsni, lambda_inst_0_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_0_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_0_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_0_1_6_14_15_16_17_18_21_28_tsni, title_inst_0_1_6_14_15_16_29_tsni, cjustify_inst_0_1_6_14_15_16_29_30_tsni, space_inst_0_1_6_14_15_16_29_30_31_tsni, replicate_inst_0_1_6_14_15_16_29_30_31_27_tsni, pad$_inst_0_1_6_14_15_32_tsni, zipWith_inst_0_1_6_14_15_32_33_tsni, zipWith_inst_0_1_6_14_15_32_34_tsni, zip3_inst_0_1_6_7_35_tsni, block_inst_0_1_6_36_tsni, groop_inst_0_1_6_36_20_tsni, banner_inst_0_1_37_tsni, cjustify_inst_0_1_37_38_tsni, space_inst_0_1_37_38_31_tsni, replicate_inst_0_1_37_38_31_27_tsni, emptyPic_inst_0_1_37_39_tsni, replicate_inst_0_1_37_39_40_tsni, cjustify_inst_41_38_tsni, space_inst_41_38_31_tsni, replicate_inst_41_38_31_27_tsni, pic$_inst_42_16_tsni, table$_inst_42_16_17_tsni, entries_inst_42_16_17_18_tsni, block_inst_42_16_17_18_19_tsni, groop_inst_42_16_17_18_19_20_tsni, dates_inst_42_16_17_18_21_tsni, lambda_inst_42_16_17_18_21_22_tsni, lambda$_inst_42_16_17_18_21_22_23_tsni, date_inst_42_16_17_18_21_22_23_24_tsni, rjustify_inst_42_16_17_18_21_22_23_24_25_tsni, space_inst_42_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_42_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_42_16_17_18_21_28_tsni, title_inst_42_16_29_tsni, cjustify_inst_42_16_29_30_tsni, space_inst_42_16_29_30_31_tsni, replicate_inst_42_16_29_30_31_27_tsni, pad$_inst_42_32_tsni, zipWith_inst_42_32_33_tsni, zipWith_inst_42_32_34_tsni, lambda$_inst_43_15_tsni, pad$_inst_43_15_32_tsni, zipWith_inst_43_15_32_34_tsni, zipWith_inst_43_15_32_33_tsni, pic$_inst_43_15_16_tsni, title_inst_43_15_16_29_tsni, cjustify_inst_43_15_16_29_30_tsni, space_inst_43_15_16_29_30_31_tsni, replicate_inst_43_15_16_29_30_31_27_tsni, table$_inst_43_15_16_17_tsni, entries_inst_43_15_16_17_18_tsni, dates_inst_43_15_16_17_18_21_tsni, lambda_inst_43_15_16_17_18_21_22_tsni, lambda$_inst_43_15_16_17_18_21_22_23_tsni, date_inst_43_15_16_17_18_21_22_23_24_tsni, rjustify_inst_43_15_16_17_18_21_22_23_24_25_tsni, space_inst_43_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_43_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_43_15_16_17_18_21_28_tsni, block_inst_43_15_16_17_18_19_tsni, groop_inst_43_15_16_17_18_19_20_tsni, months_inst_44_7_tsni, monthLengths_inst_44_7_8_tsni, firstDays_inst_44_7_9_tsni, monthLengths_inst_44_7_9_10_tsni, scanl_inst_44_7_9_11_tsni, map_inst_44_7_9_12_tsni, take_inst_44_7_9_13_tsni, lambda_inst_44_14_tsni, lambda$_inst_44_14_15_tsni, pic$_inst_44_14_15_16_tsni, table$_inst_44_14_15_16_17_tsni, entries_inst_44_14_15_16_17_18_tsni, block_inst_44_14_15_16_17_18_19_tsni, groop_inst_44_14_15_16_17_18_19_20_tsni, dates_inst_44_14_15_16_17_18_21_tsni, lambda_inst_44_14_15_16_17_18_21_22_tsni, lambda$_inst_44_14_15_16_17_18_21_22_23_tsni, date_inst_44_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_44_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_44_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_44_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_44_14_15_16_17_18_21_28_tsni, title_inst_44_14_15_16_29_tsni, cjustify_inst_44_14_15_16_29_30_tsni, space_inst_44_14_15_16_29_30_31_tsni, replicate_inst_44_14_15_16_29_30_31_27_tsni, pad$_inst_44_14_15_32_tsni, zipWith_inst_44_14_15_32_33_tsni, zipWith_inst_44_14_15_32_34_tsni, zip3_inst_44_7_35_tsni, block_inst_44_36_tsni, groop_inst_44_36_20_tsni, body$_inst_45_46_tsni, block_inst_45_46_36_tsni, groop_inst_45_46_36_20_tsni, lambda_inst_45_46_14_tsni, lambda$_inst_45_46_14_15_tsni, pad$_inst_45_46_14_15_32_tsni, zipWith_inst_45_46_14_15_32_34_tsni, zipWith_inst_45_46_14_15_32_33_tsni, pic$_inst_45_46_14_15_16_tsni, title_inst_45_46_14_15_16_29_tsni, cjustify_inst_45_46_14_15_16_29_30_tsni, space_inst_45_46_14_15_16_29_30_31_tsni, replicate_inst_45_46_14_15_16_29_30_31_27_tsni, table$_inst_45_46_14_15_16_17_tsni, entries_inst_45_46_14_15_16_17_18_tsni, dates_inst_45_46_14_15_16_17_18_21_tsni, lambda_inst_45_46_14_15_16_17_18_21_22_tsni, lambda$_inst_45_46_14_15_16_17_18_21_22_23_tsni, date_inst_45_46_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_45_46_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_45_46_14_15_16_17_18_21_28_tsni, block_inst_45_46_14_15_16_17_18_19_tsni, groop_inst_45_46_14_15_16_17_18_19_20_tsni, months_inst_45_46_7_tsni, firstDays_inst_45_46_7_9_tsni, map_inst_45_46_7_9_12_tsni, scanl_inst_45_46_7_9_11_tsni, monthLengths_inst_45_46_7_9_10_tsni, take_inst_45_46_7_9_13_tsni, monthLengths_inst_45_46_7_8_tsni, zip3_inst_45_46_7_35_tsni, title_inst_47_29_tsni, cjustify_inst_47_29_30_tsni, space_inst_47_29_30_31_tsni, replicate_inst_47_29_30_31_27_tsni, table$_inst_47_17_tsni, entries_inst_47_17_18_tsni, dates_inst_47_17_18_21_tsni, lambda_inst_47_17_18_21_22_tsni, lambda$_inst_47_17_18_21_22_23_tsni, date_inst_47_17_18_21_22_23_24_tsni, rjustify_inst_47_17_18_21_22_23_24_25_tsni, space_inst_47_17_18_21_22_23_24_25_26_tsni, replicate_inst_47_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_47_17_18_21_28_tsni, block_inst_47_17_18_19_tsni, groop_inst_47_17_18_19_20_tsni, pic$_inst_48_49_tsni, table$_inst_48_49_17_tsni, entries_inst_48_49_17_18_tsni, block_inst_48_49_17_18_19_tsni, groop_inst_48_49_17_18_19_20_tsni, dates_inst_48_49_17_18_21_tsni, lambda_inst_48_49_17_18_21_22_tsni, lambda$_inst_48_49_17_18_21_22_23_tsni, date_inst_48_49_17_18_21_22_23_24_tsni, rjustify_inst_48_49_17_18_21_22_23_24_25_tsni, space_inst_48_49_17_18_21_22_23_24_25_26_tsni, replicate_inst_48_49_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_48_49_17_18_21_28_tsni, title_inst_48_49_29_tsni, cjustify_inst_48_49_29_30_tsni, space_inst_48_49_29_30_31_tsni, replicate_inst_48_49_29_30_31_27_tsni, zipWith_inst_50_34_tsni, zipWith_inst_50_33_tsni, pad$_inst_51_52_tsni, zipWith_inst_51_52_33_tsni, zipWith_inst_51_52_34_tsni, cjustify_inst_53_30_tsni, space_inst_53_30_31_tsni, replicate_inst_53_30_31_27_tsni, entries_inst_54_18_tsni, block_inst_54_18_19_tsni, groop_inst_54_18_19_20_tsni, dates_inst_54_18_21_tsni, lambda_inst_54_18_21_22_tsni, lambda$_inst_54_18_21_22_23_tsni, date_inst_54_18_21_22_23_24_tsni, rjustify_inst_54_18_21_22_23_24_25_tsni, space_inst_54_18_21_22_23_24_25_26_tsni, replicate_inst_54_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_54_18_21_28_tsni, table$_inst_55_56_tsni, entries_inst_55_56_18_tsni, dates_inst_55_56_18_21_tsni, lambda_inst_55_56_18_21_22_tsni, lambda$_inst_55_56_18_21_22_23_tsni, date_inst_55_56_18_21_22_23_24_tsni, rjustify_inst_55_56_18_21_22_23_24_25_tsni, space_inst_55_56_18_21_22_23_24_25_26_tsni, replicate_inst_55_56_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_55_56_18_21_28_tsni, block_inst_55_56_18_19_tsni, groop_inst_55_56_18_19_20_tsni, dates_inst_57_21_tsni, lambda_inst_57_21_22_tsni, lambda$_inst_57_21_22_23_tsni, date_inst_57_21_22_23_24_tsni, rjustify_inst_57_21_22_23_24_25_tsni, space_inst_57_21_22_23_24_25_26_tsni, replicate_inst_57_21_22_23_24_25_26_27_tsni, enumFromTo_inst_57_21_28_tsni, block_inst_57_19_tsni, groop_inst_57_19_20_tsni, firstDays_inst_58_9_tsni, map_inst_58_9_12_tsni, scanl_inst_58_9_11_tsni, monthLengths_inst_58_9_10_tsni, take_inst_58_9_13_tsni, monthLengths_inst_58_8_tsni, date_inst_59_24_tsni, rjustify_inst_59_24_25_tsni, space_inst_59_24_25_26_tsni, replicate_inst_59_24_25_26_27_tsni, lambda$_inst_60_23_tsni, date_inst_60_23_24_tsni, rjustify_inst_60_23_24_25_tsni, space_inst_60_23_24_25_26_tsni, replicate_inst_60_23_24_25_26_27_tsni, map_inst_61_3_tsni, lambda_inst_61_4_tsni, append_inst_61_4_5_tsni, groop_inst_62_20_tsni, groop_inst_63_64_tsni, emptyPic_inst_65_66_tsni, replicate_inst_65_66_40_tsni, zipWith_inst_65_67_tsni, monthLengths_inst_68_10_tsni, scanl_inst_68_11_tsni, map_inst_68_12_tsni, space_inst_69_26_tsni, replicate_inst_69_26_27_tsni, rjustify_inst_70_25_tsni, space_inst_70_25_26_tsni, replicate_inst_70_25_26_27_tsni, lambda_inst_71_22_tsni, lambda$_inst_71_22_23_tsni, date_inst_71_22_23_24_tsni, rjustify_inst_71_22_23_24_25_tsni, space_inst_71_22_23_24_25_26_tsni, replicate_inst_71_22_23_24_25_26_27_tsni, enumFromTo_inst_71_28_tsni, space_inst_72_31_tsni, replicate_inst_72_31_27_tsni, banner_inst_73_37_tsni, cjustify_inst_73_37_38_tsni, space_inst_73_37_38_31_tsni, replicate_inst_73_37_38_31_27_tsni, body$_inst_73_6_tsni, block_inst_73_6_36_tsni, groop_inst_73_6_36_20_tsni, lambda_inst_73_6_14_tsni, lambda$_inst_73_6_14_15_tsni, pad$_inst_73_6_14_15_32_tsni, zipWith_inst_73_6_14_15_32_34_tsni, zipWith_inst_73_6_14_15_32_33_tsni, pic$_inst_73_6_14_15_16_tsni, title_inst_73_6_14_15_16_29_tsni, cjustify_inst_73_6_14_15_16_29_30_tsni, space_inst_73_6_14_15_16_29_30_31_tsni, replicate_inst_73_6_14_15_16_29_30_31_27_tsni, table$_inst_73_6_14_15_16_17_tsni, entries_inst_73_6_14_15_16_17_18_tsni, dates_inst_73_6_14_15_16_17_18_21_tsni, lambda_inst_73_6_14_15_16_17_18_21_22_tsni, lambda$_inst_73_6_14_15_16_17_18_21_22_23_tsni, date_inst_73_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_73_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_73_6_14_15_16_17_18_21_28_tsni, block_inst_73_6_14_15_16_17_18_19_tsni, groop_inst_73_6_14_15_16_17_18_19_20_tsni, months_inst_73_6_7_tsni, firstDays_inst_73_6_7_9_tsni, map_inst_73_6_7_9_12_tsni, scanl_inst_73_6_7_9_11_tsni, monthLengths_inst_73_6_7_9_10_tsni, take_inst_73_6_7_9_13_tsni, monthLengths_inst_73_6_7_8_tsni, zip3_inst_73_6_7_35_tsni, emptyPic_inst_73_37_39_tsni, replicate_inst_73_37_39_40_tsni, unlines_inst_73_2_tsni, map_inst_73_2_3_tsni, lambda_inst_73_2_4_tsni, append_inst_73_2_4_5_tsni, lambda_inst_74_75_tsni, cal_inst_74_75_1_tsni, banner_inst_74_75_1_37_tsni, cjustify_inst_74_75_1_37_38_tsni, space_inst_74_75_1_37_38_31_tsni, replicate_inst_74_75_1_37_38_31_27_tsni, body$_inst_74_75_1_6_tsni, block_inst_74_75_1_6_36_tsni, groop_inst_74_75_1_6_36_20_tsni, lambda_inst_74_75_1_6_14_tsni, lambda$_inst_74_75_1_6_14_15_tsni, pad$_inst_74_75_1_6_14_15_32_tsni, zipWith_inst_74_75_1_6_14_15_32_34_tsni, zipWith_inst_74_75_1_6_14_15_32_33_tsni, pic$_inst_74_75_1_6_14_15_16_tsni, title_inst_74_75_1_6_14_15_16_29_tsni, cjustify_inst_74_75_1_6_14_15_16_29_30_tsni, space_inst_74_75_1_6_14_15_16_29_30_31_tsni, replicate_inst_74_75_1_6_14_15_16_29_30_31_27_tsni, table$_inst_74_75_1_6_14_15_16_17_tsni, entries_inst_74_75_1_6_14_15_16_17_18_tsni, dates_inst_74_75_1_6_14_15_16_17_18_21_tsni, lambda_inst_74_75_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_74_75_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_74_75_1_6_14_15_16_17_18_21_28_tsni, block_inst_74_75_1_6_14_15_16_17_18_19_tsni, groop_inst_74_75_1_6_14_15_16_17_18_19_20_tsni, months_inst_74_75_1_6_7_tsni, firstDays_inst_74_75_1_6_7_9_tsni, map_inst_74_75_1_6_7_9_12_tsni, scanl_inst_74_75_1_6_7_9_11_tsni, monthLengths_inst_74_75_1_6_7_9_10_tsni, take_inst_74_75_1_6_7_9_13_tsni, monthLengths_inst_74_75_1_6_7_8_tsni, zip3_inst_74_75_1_6_7_35_tsni, emptyPic_inst_74_75_1_37_39_tsni, replicate_inst_74_75_1_37_39_40_tsni, unlines_inst_74_75_1_2_tsni, map_inst_74_75_1_2_3_tsni, lambda_inst_74_75_1_2_4_tsni, append_inst_74_75_1_2_4_5_tsni, enumFromTo_inst_74_76_tsni, testCalendar_nofib_inst_77_78_tsni, lambda_inst_77_78_75_tsni, cal_inst_77_78_75_1_tsni, unlines_inst_77_78_75_1_2_tsni, map_inst_77_78_75_1_2_3_tsni, lambda_inst_77_78_75_1_2_4_tsni, append_inst_77_78_75_1_2_4_5_tsni, body$_inst_77_78_75_1_6_tsni, months_inst_77_78_75_1_6_7_tsni, monthLengths_inst_77_78_75_1_6_7_8_tsni, firstDays_inst_77_78_75_1_6_7_9_tsni, monthLengths_inst_77_78_75_1_6_7_9_10_tsni, scanl_inst_77_78_75_1_6_7_9_11_tsni, map_inst_77_78_75_1_6_7_9_12_tsni, take_inst_77_78_75_1_6_7_9_13_tsni, lambda_inst_77_78_75_1_6_14_tsni, lambda$_inst_77_78_75_1_6_14_15_tsni, pic$_inst_77_78_75_1_6_14_15_16_tsni, table$_inst_77_78_75_1_6_14_15_16_17_tsni, entries_inst_77_78_75_1_6_14_15_16_17_18_tsni, block_inst_77_78_75_1_6_14_15_16_17_18_19_tsni, groop_inst_77_78_75_1_6_14_15_16_17_18_19_20_tsni, dates_inst_77_78_75_1_6_14_15_16_17_18_21_tsni, lambda_inst_77_78_75_1_6_14_15_16_17_18_21_22_tsni, lambda$_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_tsni, date_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_tsni, rjustify_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni, space_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni, replicate_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni, enumFromTo_inst_77_78_75_1_6_14_15_16_17_18_21_28_tsni, title_inst_77_78_75_1_6_14_15_16_29_tsni, cjustify_inst_77_78_75_1_6_14_15_16_29_30_tsni, space_inst_77_78_75_1_6_14_15_16_29_30_31_tsni, replicate_inst_77_78_75_1_6_14_15_16_29_30_31_27_tsni, pad$_inst_77_78_75_1_6_14_15_32_tsni, zipWith_inst_77_78_75_1_6_14_15_32_33_tsni, zipWith_inst_77_78_75_1_6_14_15_32_34_tsni, zip3_inst_77_78_75_1_6_7_35_tsni, block_inst_77_78_75_1_6_36_tsni, groop_inst_77_78_75_1_6_36_20_tsni, banner_inst_77_78_75_1_37_tsni, cjustify_inst_77_78_75_1_37_38_tsni, space_inst_77_78_75_1_37_38_31_tsni, replicate_inst_77_78_75_1_37_38_31_27_tsni, emptyPic_inst_77_78_75_1_37_39_tsni, replicate_inst_77_78_75_1_37_39_40_tsni, enumFromTo_inst_77_78_76_tsni, map_inst_77_78_79_tsni, concat_inst_77_78_75_1_2_80_tsni, append_inst_77_78_75_1_2_80_81_tsni, concat_inst_77_82_tsni, append_inst_77_82_81_tsni, concat_inst_0_1_2_80_tsni, append_inst_0_1_2_80_81_tsni, map_inst_0_1_6_14_15_16_17_18_19_83_tsni, append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_0_1_6_14_15_16_17_18_21_85_tsni, append_inst_0_1_6_14_15_16_29_30_86_tsni, append_inst_0_1_6_14_15_16_87_tsni, append_inst_0_1_6_14_15_32_88_tsni, map_inst_0_1_6_36_83_tsni, append_inst_0_1_37_38_86_tsni, append_inst_0_1_89_tsni, append_inst_0_1_6_14_15_16_17_90_tsni, emptyPic_inst_0_1_91_tsni, emptyPic_inst_0_1_92_tsni, append_inst_41_38_86_tsni, emptyPic_inst_41_39_tsni, map_inst_42_16_17_18_19_83_tsni, append_inst_42_16_17_18_21_22_23_24_25_84_tsni, map_inst_42_16_17_18_21_85_tsni, append_inst_42_16_29_30_86_tsni, append_inst_42_16_87_tsni, append_inst_42_32_88_tsni, append_inst_43_15_32_88_tsni, append_inst_43_15_16_29_30_86_tsni, append_inst_43_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_43_15_16_17_18_21_85_tsni, map_inst_43_15_16_17_18_19_83_tsni, append_inst_43_15_16_87_tsni, map_inst_44_14_15_16_17_18_19_83_tsni, append_inst_44_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_44_14_15_16_17_18_21_85_tsni, append_inst_44_14_15_16_29_30_86_tsni, append_inst_44_14_15_16_87_tsni, append_inst_44_14_15_32_88_tsni, map_inst_44_36_83_tsni, map_inst_45_46_36_83_tsni, append_inst_45_46_14_15_32_88_tsni, append_inst_45_46_14_15_16_29_30_86_tsni, append_inst_45_46_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_45_46_14_15_16_17_18_21_85_tsni, map_inst_45_46_14_15_16_17_18_19_83_tsni, append_inst_45_46_14_15_16_87_tsni, append_inst_47_29_30_86_tsni, append_inst_47_17_18_21_22_23_24_25_84_tsni, map_inst_47_17_18_21_85_tsni, map_inst_47_17_18_19_83_tsni, append_inst_47_87_tsni, map_inst_48_49_17_18_19_83_tsni, append_inst_48_49_17_18_21_22_23_24_25_84_tsni, map_inst_48_49_17_18_21_85_tsni, append_inst_48_49_29_30_86_tsni, append_inst_48_49_87_tsni, append_inst_50_88_tsni, append_inst_51_52_88_tsni, append_inst_53_30_86_tsni, map_inst_54_18_19_83_tsni, append_inst_54_18_21_22_23_24_25_84_tsni, map_inst_54_18_21_85_tsni, append_inst_55_56_18_21_22_23_24_25_84_tsni, map_inst_55_56_18_21_85_tsni, map_inst_55_56_18_19_83_tsni, append_inst_57_21_22_23_24_25_84_tsni, map_inst_57_21_85_tsni, map_inst_57_19_83_tsni, zip3_inst_58_35_tsni, append_inst_59_24_25_84_tsni, append_inst_60_23_24_25_84_tsni, concat_inst_61_80_tsni, append_inst_61_80_81_tsni, map_inst_62_83_tsni, map_inst_63_93_tsni, emptyPic_inst_65_94_tsni, append_inst_65_95_tsni, take_inst_68_13_tsni, append_inst_69_84_tsni, append_inst_70_25_84_tsni, append_inst_71_22_23_24_25_84_tsni, map_inst_71_85_tsni, append_inst_72_86_tsni, emptyPic_inst_73_92_tsni, emptyPic_inst_73_91_tsni, append_inst_73_37_38_86_tsni, map_inst_73_6_36_83_tsni, append_inst_73_6_14_15_32_88_tsni, append_inst_73_6_14_15_16_29_30_86_tsni, append_inst_73_6_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_73_6_14_15_16_17_18_21_85_tsni, map_inst_73_6_14_15_16_17_18_19_83_tsni, append_inst_73_6_14_15_16_87_tsni, append_inst_73_6_14_15_16_17_90_tsni, append_inst_73_89_tsni, concat_inst_73_2_80_tsni, append_inst_73_2_80_81_tsni, emptyPic_inst_74_75_1_92_tsni, emptyPic_inst_74_75_1_91_tsni, append_inst_74_75_1_37_38_86_tsni, map_inst_74_75_1_6_36_83_tsni, append_inst_74_75_1_6_14_15_32_88_tsni, append_inst_74_75_1_6_14_15_16_29_30_86_tsni, append_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_74_75_1_6_14_15_16_17_18_21_85_tsni, map_inst_74_75_1_6_14_15_16_17_18_19_83_tsni, append_inst_74_75_1_6_14_15_16_87_tsni, append_inst_74_75_1_6_14_15_16_17_90_tsni, append_inst_74_75_1_89_tsni, concat_inst_74_75_1_2_80_tsni, append_inst_74_75_1_2_80_81_tsni, map_inst_74_79_tsni, map_inst_77_78_75_1_6_14_15_16_17_18_19_83_tsni, append_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni, map_inst_77_78_75_1_6_14_15_16_17_18_21_85_tsni, append_inst_77_78_75_1_6_14_15_16_29_30_86_tsni, append_inst_77_78_75_1_6_14_15_16_87_tsni, append_inst_77_78_75_1_6_14_15_32_88_tsni, map_inst_77_78_75_1_6_36_83_tsni, append_inst_77_78_75_1_37_38_86_tsni, append_inst_77_78_75_1_89_tsni, append_inst_77_78_75_1_6_14_15_16_17_90_tsni, emptyPic_inst_77_78_75_1_91_tsni, emptyPic_inst_77_78_75_1_92_tsni, nofibListToString_inst_77_96_tsni, match_xs_arm_Cons_inst_0_1_2_80_81_tsni, match_zs_arm_Cons_inst_0_1_6_7_35_tsni, match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni, match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni, match_ys_arm_default_inst_0_1_6_7_35_tsni, match_xs_arm_Nil_inst_0_1_6_14_15_32_88_tsni, match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni, match_xs_arm_Cons_inst_0_1_89_tsni, match_xs_arm_Nil_inst_42_32_88_tsni, match_xss_arm_default_inst_42_32_33_tsni, match_xss_arm_default_inst_43_15_32_33_tsni, match_xs_arm_Nil_inst_43_15_32_88_tsni, match_zs_arm_Cons_inst_44_7_35_tsni, match_ls_arm_Cons_inst_44_7_9_11_tsni, match_xs_arm_Cons_inst_44_7_9_12_tsni, match_ys_arm_default_inst_44_7_35_tsni, match_xs_arm_Nil_inst_44_14_15_32_88_tsni, match_xss_arm_default_inst_44_14_15_32_33_tsni, match_xss_arm_default_inst_45_46_14_15_32_33_tsni, match_xs_arm_Nil_inst_45_46_14_15_32_88_tsni, match_xs_arm_Cons_inst_45_46_7_9_12_tsni, match_ls_arm_Cons_inst_45_46_7_9_11_tsni, match_ys_arm_default_inst_45_46_7_35_tsni, match_zs_arm_Cons_inst_45_46_7_35_tsni, match_xss_arm_default_inst_50_33_tsni, match_xs_arm_Nil_inst_50_88_tsni, match_xs_arm_Nil_inst_51_52_88_tsni, match_xss_arm_default_inst_51_52_33_tsni, match_xs_arm_Cons_inst_58_9_12_tsni, match_ls_arm_Cons_inst_58_9_11_tsni, match_ys_arm_default_inst_58_35_tsni, match_zs_arm_Cons_inst_58_35_tsni, match_xs_arm_Cons_inst_61_80_81_tsni, match_xs_arm_Nil_inst_65_95_tsni, match_ls_arm_Cons_inst_68_11_tsni, match_xs_arm_Cons_inst_68_12_tsni, match_xss_arm_default_inst_73_6_14_15_32_33_tsni, match_xs_arm_Nil_inst_73_6_14_15_32_88_tsni, match_xs_arm_Cons_inst_73_6_7_9_12_tsni, match_ls_arm_Cons_inst_73_6_7_9_11_tsni, match_ys_arm_default_inst_73_6_7_35_tsni, match_zs_arm_Cons_inst_73_6_7_35_tsni, match_xs_arm_Cons_inst_73_89_tsni, match_xs_arm_Cons_inst_73_2_80_81_tsni, match_xss_arm_default_inst_74_75_1_6_14_15_32_33_tsni, match_xs_arm_Nil_inst_74_75_1_6_14_15_32_88_tsni, match_xs_arm_Cons_inst_74_75_1_6_7_9_12_tsni, match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni, match_ys_arm_default_inst_74_75_1_6_7_35_tsni, match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni, match_xs_arm_Cons_inst_74_75_1_89_tsni, match_xs_arm_Cons_inst_74_75_1_2_80_81_tsni, match_xs_arm_Cons_inst_77_78_75_1_2_80_81_tsni, match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni, match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni, match_xs_arm_Cons_inst_77_78_75_1_6_7_9_12_tsni, match_ys_arm_default_inst_77_78_75_1_6_7_35_tsni, match_xs_arm_Nil_inst_77_78_75_1_6_14_15_32_88_tsni, match_xss_arm_default_inst_77_78_75_1_6_14_15_32_33_tsni, match_xs_arm_Cons_inst_77_78_75_1_89_tsni;
match_xs_arm_Cons_inst_0_1_2_80_81_tsni = (undefined, function (ys, _deforest_Cons_head_inst_0_1_2_80_81_tsni, _deforest_Cons_tail_inst_0_1_2_80_81_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_1_2_80_81_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_2_80_81_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_2_80_81_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_zs_arm_Cons_inst_0_1_6_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_0_1_6_7_35_tsni, _deforest_Cons_tail_inst_0_1_6_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_0_1_6_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_6_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_0_1_6_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_0_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_0_1_6_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_0_1_6_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_ls_arm_Cons_inst_0_1_6_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_0_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_0_1_6_7_9_11_tsni) {
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
});
match_xs_arm_Cons_inst_0_1_6_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_0_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_0_1_6_7_9_12_tsni) {
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
        return match_ys_arm_default_inst_0_1_6_7_35_tsni(zs, x1, xs1)
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
});
match_ys_arm_default_inst_0_1_6_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_0_1_6_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xss_arm_default_inst_0_1_6_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_0_1_6_14_15_32_88_tsni(ys)
  }
});
match_xs_arm_Cons_inst_0_1_89_tsni = (undefined, function (ys, _deforest_Cons_head_inst_0_1_89_tsni, _deforest_Cons_tail_inst_0_1_89_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_0_1_89_tsni;
  param1 = _deforest_Cons_tail_inst_0_1_89_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_0_1_89_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_42_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xss_arm_default_inst_42_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_42_32_88_tsni(ys)
  }
});
match_xss_arm_default_inst_43_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_43_15_32_88_tsni(ys)
  }
});
match_xs_arm_Nil_inst_43_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_zs_arm_Cons_inst_44_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_44_7_35_tsni, _deforest_Cons_tail_inst_44_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_44_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_44_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_44_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_44_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_44_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_44_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_ls_arm_Cons_inst_44_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_44_7_9_11_tsni, _deforest_Cons_tail_inst_44_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_44_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_44_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_44_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_44_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_44_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_44_7_9_12_tsni, _deforest_Cons_tail_inst_44_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_44_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_44_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_44_7_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_44_7_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_44_7_9_13_tsni(tmp2, t);
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
});
match_ys_arm_default_inst_44_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_44_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xss_arm_default_inst_44_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_44_14_15_32_88_tsni(ys)
  }
});
match_xss_arm_default_inst_45_46_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_45_46_14_15_32_88_tsni(ys)
  }
});
match_xs_arm_Nil_inst_45_46_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_45_46_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_45_46_7_9_12_tsni, _deforest_Cons_tail_inst_45_46_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_45_46_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_45_46_7_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_45_46_7_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_45_46_7_9_13_tsni(tmp2, t);
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
});
match_ls_arm_Cons_inst_45_46_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_45_46_7_9_11_tsni, _deforest_Cons_tail_inst_45_46_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_45_46_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_45_46_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_45_46_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_ys_arm_default_inst_45_46_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_45_46_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_45_46_7_35_tsni, _deforest_Cons_tail_inst_45_46_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_45_46_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_45_46_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_45_46_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_45_46_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_45_46_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_xss_arm_default_inst_50_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_50_88_tsni(ys)
  }
});
match_xs_arm_Nil_inst_50_88_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Nil_inst_51_52_88_tsni = (undefined, function (ys) {
  return ys
});
match_xss_arm_default_inst_51_52_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_51_52_88_tsni(ys)
  }
});
match_xs_arm_Cons_inst_58_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_58_9_12_tsni, _deforest_Cons_tail_inst_58_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_58_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_58_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_58_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_58_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_58_9_13_tsni(tmp2, t);
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
});
match_ls_arm_Cons_inst_58_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_58_9_11_tsni, _deforest_Cons_tail_inst_58_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_58_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_58_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_58_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_58_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_ys_arm_default_inst_58_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_58_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_58_35_tsni, _deforest_Cons_tail_inst_58_35_tsni) {
  let param0, param1, z, zs, arr, tmp;
  param0 = _deforest_Cons_head_inst_58_35_tsni;
  param1 = _deforest_Cons_tail_inst_58_35_tsni;
  z = param0;
  zs = param1;
  arr = globalThis.Object.freeze([
    x,
    y,
    z
  ]);
  tmp = zip3_inst_58_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_xs_arm_Cons_inst_61_80_81_tsni = (undefined, function (ys, _deforest_Cons_head_inst_61_80_81_tsni, _deforest_Cons_tail_inst_61_80_81_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_61_80_81_tsni;
  param1 = _deforest_Cons_tail_inst_61_80_81_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_61_80_81_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_65_95_tsni = (undefined, function (ys) {
  return ys
});
match_ls_arm_Cons_inst_68_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_68_11_tsni, _deforest_Cons_tail_inst_68_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_68_11_tsni;
  param1 = _deforest_Cons_tail_inst_68_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_68_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_68_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_68_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_68_12_tsni, _deforest_Cons_tail_inst_68_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_68_12_tsni;
  param1 = _deforest_Cons_tail_inst_68_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_68_12_tsni(f, xs);
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
      tmp3 = take_inst_68_13_tsni(tmp2, t);
      return NofibPrelude.Cons(h, tmp3)
    }
  }
});
match_xss_arm_default_inst_73_6_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_73_6_14_15_32_88_tsni(ys)
  }
});
match_xs_arm_Nil_inst_73_6_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_73_6_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_73_6_7_9_12_tsni, _deforest_Cons_tail_inst_73_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_73_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_73_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_73_6_7_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_73_6_7_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_73_6_7_9_13_tsni(tmp2, t);
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
});
match_ls_arm_Cons_inst_73_6_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_73_6_7_9_11_tsni, _deforest_Cons_tail_inst_73_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_73_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_73_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_73_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_73_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_ys_arm_default_inst_73_6_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_73_6_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_73_6_7_35_tsni, _deforest_Cons_tail_inst_73_6_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_73_6_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_73_6_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_73_6_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_73_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_73_6_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_73_6_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_xs_arm_Cons_inst_73_89_tsni = (undefined, function (ys, _deforest_Cons_head_inst_73_89_tsni, _deforest_Cons_tail_inst_73_89_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_73_89_tsni;
  param1 = _deforest_Cons_tail_inst_73_89_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_73_89_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_73_2_80_81_tsni = (undefined, function (ys, _deforest_Cons_head_inst_73_2_80_81_tsni, _deforest_Cons_tail_inst_73_2_80_81_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_73_2_80_81_tsni;
  param1 = _deforest_Cons_tail_inst_73_2_80_81_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_73_2_80_81_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xss_arm_default_inst_74_75_1_6_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_74_75_1_6_14_15_32_88_tsni(ys)
  }
});
match_xs_arm_Nil_inst_74_75_1_6_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_74_75_1_6_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_74_75_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_74_75_1_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_74_75_1_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_74_75_1_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_74_75_1_6_7_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_74_75_1_6_7_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_74_75_1_6_7_9_13_tsni(tmp2, t);
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
});
match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_74_75_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_74_75_1_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_74_75_1_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_74_75_1_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_74_75_1_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_74_75_1_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_ys_arm_default_inst_74_75_1_6_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_74_75_1_6_7_35_tsni, _deforest_Cons_tail_inst_74_75_1_6_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_74_75_1_6_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_74_75_1_6_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_74_75_1_6_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_74_75_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_74_75_1_6_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_74_75_1_6_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_xs_arm_Cons_inst_74_75_1_89_tsni = (undefined, function (ys, _deforest_Cons_head_inst_74_75_1_89_tsni, _deforest_Cons_tail_inst_74_75_1_89_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_74_75_1_89_tsni;
  param1 = _deforest_Cons_tail_inst_74_75_1_89_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_74_75_1_89_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_74_75_1_2_80_81_tsni = (undefined, function (ys, _deforest_Cons_head_inst_74_75_1_2_80_81_tsni, _deforest_Cons_tail_inst_74_75_1_2_80_81_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_74_75_1_2_80_81_tsni;
  param1 = _deforest_Cons_tail_inst_74_75_1_2_80_81_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_74_75_1_2_80_81_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Cons_inst_77_78_75_1_2_80_81_tsni = (undefined, function (ys, _deforest_Cons_head_inst_77_78_75_1_2_80_81_tsni, _deforest_Cons_tail_inst_77_78_75_1_2_80_81_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_77_78_75_1_2_80_81_tsni;
  param1 = _deforest_Cons_tail_inst_77_78_75_1_2_80_81_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_77_78_75_1_2_80_81_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys1) => {
    let _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp = append_inst_77_82_81_tsni(xs, ys1);
    _deforest_Cons_head1 = x;
    _deforest_Cons_tail1 = tmp;
    return () => {
      let param01, param11, h, t, tmp1;
      param01 = _deforest_Cons_head1;
      param11 = _deforest_Cons_tail1;
      h = param01;
      t = param11;
      tmp1 = nofibListToString_inst_77_96_tsni(t);
      return h + tmp1
    }
  }
});
match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni = (undefined, function (x, xs, y, ys, _deforest_Cons_head_inst_77_78_75_1_6_7_35_tsni, _deforest_Cons_tail_inst_77_78_75_1_6_7_35_tsni) {
  let param0, param1, z, zs, arr, tmp, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_77_78_75_1_6_7_35_tsni;
  param1 = _deforest_Cons_tail_inst_77_78_75_1_6_7_35_tsni;
  z = param0;
  zs = param1;
  _deforest_Deforest_Arr_3_0 = x;
  _deforest_Deforest_Arr_3_1 = y;
  _deforest_Deforest_Arr_3_2 = z;
  arr = (daynames) => {
    let first2, first1, first0, mn, fd, ml, tmp1, tmp2;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    mn = first0;
    fd = first1;
    ml = first2;
    tmp1 = title_inst_77_78_75_1_6_14_15_16_29_tsni(mn);
    tmp2 = table$_inst_77_78_75_1_6_14_15_16_17_tsni(daynames, fd, ml);
    return append_inst_77_78_75_1_6_14_15_16_87_tsni(tmp1, tmp2)
  };
  tmp = zip3_inst_77_78_75_1_6_7_35_tsni(xs, ys, zs);
  return NofibPrelude.Cons(arr, tmp)
});
match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni = (undefined, function (f, q, _deforest_Cons_head_inst_77_78_75_1_6_7_9_11_tsni, _deforest_Cons_tail_inst_77_78_75_1_6_7_9_11_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_77_78_75_1_6_7_9_11_tsni;
  param1 = _deforest_Cons_tail_inst_77_78_75_1_6_7_9_11_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(q, x));
  tmp1 = scanl_inst_77_78_75_1_6_7_9_11_tsni(f, tmp, xs);
  _deforest_Cons_head = q;
  _deforest_Cons_tail = tmp1;
  return (f1) => {
    return match_xs_arm_Cons_inst_77_78_75_1_6_7_9_12_tsni(f1, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_xs_arm_Cons_inst_77_78_75_1_6_7_9_12_tsni = (undefined, function (f, _deforest_Cons_head_inst_77_78_75_1_6_7_9_12_tsni, _deforest_Cons_tail_inst_77_78_75_1_6_7_9_12_tsni) {
  let param0, param1, x, xs, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_77_78_75_1_6_7_9_12_tsni;
  param1 = _deforest_Cons_tail_inst_77_78_75_1_6_7_9_12_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_77_78_75_1_6_7_9_12_tsni(f, xs);
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
        return match_ys_arm_default_inst_77_78_75_1_6_7_35_tsni(zs, x1, xs1)
      }
    } else {
      tmp2 = n - 1;
      tmp3 = take_inst_77_78_75_1_6_7_9_13_tsni(tmp2, t);
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
});
match_ys_arm_default_inst_77_78_75_1_6_7_35_tsni = (undefined, function (zs, x, xs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_77_78_75_1_6_14_15_32_88_tsni = (undefined, function (ys) {
  return ys
});
match_xss_arm_default_inst_77_78_75_1_6_14_15_32_33_tsni = (undefined, function (f, yss) {
  return (ys) => {
    return match_xs_arm_Nil_inst_77_78_75_1_6_14_15_32_88_tsni(ys)
  }
});
match_xs_arm_Cons_inst_77_78_75_1_89_tsni = (undefined, function (ys, _deforest_Cons_head_inst_77_78_75_1_89_tsni, _deforest_Cons_tail_inst_77_78_75_1_89_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_77_78_75_1_89_tsni;
  param1 = _deforest_Cons_tail_inst_77_78_75_1_89_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_77_78_75_1_89_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
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
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_0_1_92_tsni(arr);
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
  tmp1 = emptyPic_inst_0_1_91_tsni(arr1);
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
    tmp7 = append_inst_0_1_6_14_15_16_17_90_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_0_1_37_tsni(year);
  tmp5 = body$_inst_0_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_0_1_89_tsni(tmp4, tmp5);
  return unlines_inst_0_1_2_tsni(tmp6)
};
unlines_inst_0_1_2_tsni = function unlines_inst_0_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_0_1_2_3_tsni(lambda_inst_0_1_2_4_tsni, ls);
  return concat_inst_0_1_2_80_tsni(tmp)
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
      tmp2 = concat_inst_0_1_2_80_tsni(xs2);
      return append_inst_0_1_2_80_81_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_0_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_0_1_2_80_81_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_0_1_2_4_5_tsni(x, tmp)
});
append_inst_0_1_2_4_5_tsni = function append_inst_0_1_2_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_0_1_2_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_0_1_2_80_81_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
body$_inst_0_1_6_tsni = function body$_inst_0_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_0_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_0_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_0_1_6_36_tsni(3, tmp1)
};
months_inst_0_1_6_7_tsni = function months_inst_0_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_0_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_0_1_6_7_8_tsni(yer);
  return zip3_inst_0_1_6_7_35_tsni(calendar1.monthNames, tmp, tmp1)
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
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_0_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
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
          return match_ys_arm_default_inst_0_1_6_7_35_tsni(zs, x, xs)
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
  return runtime.safeCall(mnfdml(daynames))
};
table$_inst_0_1_6_14_15_16_17_tsni = function table$_inst_0_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_0_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_0_1_6_14_15_16_17_90_tsni(daynames, tmp)
};
entries_inst_0_1_6_14_15_16_17_18_tsni = function entries_inst_0_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_0_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_0_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_0_1_6_14_15_16_17_18_19_tsni = function block_inst_0_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_0_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_0_1_6_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
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
    tmp1 = NofibPrelude.leave(n, xs);
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
      tmp4 = map_inst_0_1_6_14_15_16_17_18_19_83_tsni(f, xs1);
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
  return map_inst_0_1_6_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
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
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
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
      tmp2 = append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
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
      tmp3 = map_inst_0_1_6_14_15_16_17_18_21_85_tsni(f, xs);
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
    tmp1 = append_inst_0_1_6_14_15_16_87_tsni(xs, ys);
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
  return append_inst_0_1_6_14_15_16_29_30_86_tsni(tmp3, tmp6)
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
      tmp2 = append_inst_0_1_6_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_0_1_6_14_15_32_tsni = function pad$_inst_0_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_0_1_6_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_0_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_0_1_6_14_15_32_88_tsni(tmp1, end)
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
            tmp2 = append_inst_0_1_6_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_0_1_6_14_15_32_88_tsni(ys1)
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
zip3_inst_0_1_6_7_35_tsni = function zip3_inst_0_1_6_7_35_tsni(xs, ys, zs) {
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
block_inst_0_1_6_36_tsni = function block_inst_0_1_6_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_0_1_6_36_20_tsni(n, t);
  tmp1 = map_inst_0_1_6_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_0_1_6_36_20_tsni = function groop_inst_0_1_6_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_0_1_6_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_0_1_6_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
banner_inst_0_1_37_tsni = function banner_inst_0_1_37_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_0_1_37_38_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = NofibPrelude.replicate(w, " ");
    return replicate_inst_0_1_37_39_40_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_0_1_37_39_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_0_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_0_1_37_38_tsni = function cjustify_inst_0_1_37_38_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_0_1_37_38_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_0_1_37_38_86_tsni(tmp3, tmp6)
};
space_inst_0_1_37_38_31_tsni = function space_inst_0_1_37_38_31_tsni(n) {
  return replicate_inst_0_1_37_38_31_27_tsni(n, " ")
};
replicate_inst_0_1_37_38_31_27_tsni = function replicate_inst_0_1_37_38_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_37_38_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_0_1_37_38_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
emptyPic_inst_0_1_37_39_tsni = function emptyPic_inst_0_1_37_39_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_0_1_37_39_40_tsni = function replicate_inst_0_1_37_39_40_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_0_1_37_39_40_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_0_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
cjustify_inst_41_38_tsni = function cjustify_inst_41_38_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_41_38_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_41_38_86_tsni(tmp3, tmp6)
};
space_inst_41_38_31_tsni = function space_inst_41_38_31_tsni(n) {
  return replicate_inst_41_38_31_27_tsni(n, " ")
};
replicate_inst_41_38_31_27_tsni = function replicate_inst_41_38_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_41_38_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_41_38_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pic$_inst_42_16_tsni = function pic$_inst_42_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
    first0 = runtime.Tuple.get(mnfdml, 0);
    first1 = runtime.Tuple.get(mnfdml, 1);
    first2 = runtime.Tuple.get(mnfdml, 2);
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_42_16_29_tsni(mn);
    tmp1 = table$_inst_42_16_17_tsni(daynames, fd, ml);
    return append_inst_42_16_87_tsni(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
table$_inst_42_16_17_tsni = function table$_inst_42_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_42_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_42_16_17_18_tsni = function entries_inst_42_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_42_16_17_18_21_tsni(fd, ml);
  return block_inst_42_16_17_18_19_tsni(7, tmp)
};
block_inst_42_16_17_18_19_tsni = function block_inst_42_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_42_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_42_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_42_16_17_18_19_20_tsni = function groop_inst_42_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_42_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_42_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_42_16_17_18_21_tsni = function dates_inst_42_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_42_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_42_16_17_18_21_22_tsni(ml));
  return map_inst_42_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_42_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_42_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_42_16_17_18_21_22_23_tsni = function lambda$_inst_42_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_42_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_42_16_17_18_21_22_23_24_tsni = function date_inst_42_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_42_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_42_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_42_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_42_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_42_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_42_16_17_18_21_22_23_24_25_26_tsni = function space_inst_42_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_42_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_42_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_42_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_42_16_17_18_21_28_tsni = function enumFromTo_inst_42_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_42_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_42_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_42_16_29_tsni = function title_inst_42_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_42_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_42_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_42_16_29_30_tsni = function cjustify_inst_42_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_42_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_42_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_42_16_29_30_31_tsni = function space_inst_42_16_29_30_31_tsni(n) {
  return replicate_inst_42_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_42_16_29_30_31_27_tsni = function replicate_inst_42_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_42_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_42_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_42_32_tsni = function pad$_inst_42_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_42_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_42_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_42_32_88_tsni(tmp1, end)
};
zipWith_inst_42_32_33_tsni = function zipWith_inst_42_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_42_32_34_tsni = function zipWith_inst_42_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_42_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_42_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_42_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_42_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_42_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_42_32_33_tsni(f1, yss1)
    }
  }
};
lambda$_inst_43_15_tsni = function lambda$_inst_43_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_43_15_16_tsni(daynames, x);
  return pad$_inst_43_15_32_tsni(side, end, tmp)
};
pad$_inst_43_15_32_tsni = function pad$_inst_43_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_43_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_43_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_43_15_32_88_tsni(tmp1, end)
};
zipWith_inst_43_15_32_34_tsni = function zipWith_inst_43_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_43_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_43_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_43_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_43_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_43_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_43_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_43_15_32_33_tsni = function zipWith_inst_43_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_43_15_16_tsni = function pic$_inst_43_15_16_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
    first0 = runtime.Tuple.get(mnfdml, 0);
    first1 = runtime.Tuple.get(mnfdml, 1);
    first2 = runtime.Tuple.get(mnfdml, 2);
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_43_15_16_29_tsni(mn);
    tmp1 = table$_inst_43_15_16_17_tsni(daynames, fd, ml);
    return append_inst_43_15_16_87_tsni(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
title_inst_43_15_16_29_tsni = function title_inst_43_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_43_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_43_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_43_15_16_29_30_tsni = function cjustify_inst_43_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_43_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_43_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_43_15_16_29_30_31_tsni = function space_inst_43_15_16_29_30_31_tsni(n) {
  return replicate_inst_43_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_43_15_16_29_30_31_27_tsni = function replicate_inst_43_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_43_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_43_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_43_15_16_17_tsni = function table$_inst_43_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_43_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_43_15_16_17_18_tsni = function entries_inst_43_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_43_15_16_17_18_21_tsni(fd, ml);
  return block_inst_43_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_43_15_16_17_18_21_tsni = function dates_inst_43_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_43_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_43_15_16_17_18_21_22_tsni(ml));
  return map_inst_43_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_43_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_43_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_43_15_16_17_18_21_22_23_tsni = function lambda$_inst_43_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_43_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_43_15_16_17_18_21_22_23_24_tsni = function date_inst_43_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_43_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_43_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_43_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_43_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_43_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_43_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_43_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_43_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_43_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_43_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_43_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_43_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_43_15_16_17_18_21_28_tsni = function enumFromTo_inst_43_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_43_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_43_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_43_15_16_17_18_19_tsni = function block_inst_43_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_43_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_43_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_43_15_16_17_18_19_20_tsni = function groop_inst_43_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_43_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_43_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_44_7_tsni = function months_inst_44_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_44_7_9_tsni(yer);
  tmp1 = monthLengths_inst_44_7_8_tsni(yer);
  return zip3_inst_44_7_35_tsni(calendar1.monthNames, tmp, tmp1)
};
monthLengths_inst_44_7_8_tsni = function monthLengths_inst_44_7_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_44_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_44_7_9_tsni = function firstDays_inst_44_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_44_7_9_10_tsni(year);
  tmp2 = scanl_inst_44_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_44_7_9_12_tsni(lambda5, tmp2);
  return take_inst_44_7_9_13_tsni(12, tmp3)
};
monthLengths_inst_44_7_9_10_tsni = function monthLengths_inst_44_7_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_44_7_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_44_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_44_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_44_7_9_11_tsni = function scanl_inst_44_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_44_7_9_12_tsni = function map_inst_44_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_44_7_9_13_tsni = function take_inst_44_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_44_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_44_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_44_14_15_tsni = function lambda$_inst_44_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_44_14_15_16_tsni(daynames, x);
  return pad$_inst_44_14_15_32_tsni(side, end, tmp)
};
pic$_inst_44_14_15_16_tsni = function pic$_inst_44_14_15_16_tsni(daynames, mnfdml) {
  return runtime.safeCall(mnfdml(daynames))
};
table$_inst_44_14_15_16_17_tsni = function table$_inst_44_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_44_14_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_44_14_15_16_17_18_tsni = function entries_inst_44_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_44_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_44_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_44_14_15_16_17_18_19_tsni = function block_inst_44_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_44_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_44_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_44_14_15_16_17_18_19_20_tsni = function groop_inst_44_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_44_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_44_14_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_44_14_15_16_17_18_21_tsni = function dates_inst_44_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_44_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_44_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_44_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_44_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_44_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_44_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_44_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_44_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_44_14_15_16_17_18_21_22_23_24_tsni = function date_inst_44_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_44_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_44_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_44_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_44_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_44_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_44_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_44_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_44_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_44_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_44_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_44_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_44_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_44_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_44_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_44_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_44_14_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_44_14_15_16_29_tsni = function title_inst_44_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_44_14_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_44_14_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_44_14_15_16_29_30_tsni = function cjustify_inst_44_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_44_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_44_14_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_44_14_15_16_29_30_31_tsni = function space_inst_44_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_44_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_44_14_15_16_29_30_31_27_tsni = function replicate_inst_44_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_44_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_44_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_44_14_15_32_tsni = function pad$_inst_44_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_44_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_44_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_44_14_15_32_88_tsni(tmp1, end)
};
zipWith_inst_44_14_15_32_33_tsni = function zipWith_inst_44_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_44_14_15_32_34_tsni = function zipWith_inst_44_14_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_44_14_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_44_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_44_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_44_14_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_44_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_44_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zip3_inst_44_7_35_tsni = function zip3_inst_44_7_35_tsni(xs, ys, zs) {
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
block_inst_44_36_tsni = function block_inst_44_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_44_36_20_tsni(n, t);
  tmp1 = map_inst_44_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_44_36_20_tsni = function groop_inst_44_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_44_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_44_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
body$_inst_45_46_tsni = function body$_inst_45_46_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_45_46_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_45_46_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_45_46_36_tsni(3, tmp1)
};
block_inst_45_46_36_tsni = function block_inst_45_46_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_45_46_36_20_tsni(n, t);
  tmp1 = map_inst_45_46_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_45_46_36_20_tsni = function groop_inst_45_46_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_45_46_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_45_46_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_45_46_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_45_46_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_45_46_14_15_tsni = function lambda$_inst_45_46_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_45_46_14_15_16_tsni(daynames, x);
  return pad$_inst_45_46_14_15_32_tsni(side, end, tmp)
};
pad$_inst_45_46_14_15_32_tsni = function pad$_inst_45_46_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_45_46_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_45_46_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_45_46_14_15_32_88_tsni(tmp1, end)
};
zipWith_inst_45_46_14_15_32_34_tsni = function zipWith_inst_45_46_14_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_45_46_14_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_45_46_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_45_46_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_45_46_14_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_45_46_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_45_46_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_45_46_14_15_32_33_tsni = function zipWith_inst_45_46_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_45_46_14_15_16_tsni = function pic$_inst_45_46_14_15_16_tsni(daynames, mnfdml) {
  return runtime.safeCall(mnfdml(daynames))
};
title_inst_45_46_14_15_16_29_tsni = function title_inst_45_46_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_45_46_14_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_45_46_14_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_45_46_14_15_16_29_30_tsni = function cjustify_inst_45_46_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_45_46_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_45_46_14_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_45_46_14_15_16_29_30_31_tsni = function space_inst_45_46_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_45_46_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_45_46_14_15_16_29_30_31_27_tsni = function replicate_inst_45_46_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_45_46_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_45_46_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_45_46_14_15_16_17_tsni = function table$_inst_45_46_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_45_46_14_15_16_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_45_46_14_15_16_17_18_tsni = function entries_inst_45_46_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_45_46_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_45_46_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_45_46_14_15_16_17_18_21_tsni = function dates_inst_45_46_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_45_46_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_45_46_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_45_46_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_45_46_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_45_46_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_45_46_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_45_46_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_45_46_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_45_46_14_15_16_17_18_21_22_23_24_tsni = function date_inst_45_46_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_45_46_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_45_46_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_45_46_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_45_46_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_45_46_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_45_46_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_45_46_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_45_46_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_45_46_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_45_46_14_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_45_46_14_15_16_17_18_19_tsni = function block_inst_45_46_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_45_46_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_45_46_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_45_46_14_15_16_17_18_19_20_tsni = function groop_inst_45_46_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_45_46_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_45_46_14_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_45_46_7_tsni = function months_inst_45_46_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_45_46_7_9_tsni(yer);
  tmp1 = monthLengths_inst_45_46_7_8_tsni(yer);
  return zip3_inst_45_46_7_35_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_45_46_7_9_tsni = function firstDays_inst_45_46_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_45_46_7_9_10_tsni(year);
  tmp2 = scanl_inst_45_46_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_45_46_7_9_12_tsni(lambda5, tmp2);
  return take_inst_45_46_7_9_13_tsni(12, tmp3)
};
map_inst_45_46_7_9_12_tsni = function map_inst_45_46_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_45_46_7_9_11_tsni = function scanl_inst_45_46_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_45_46_7_9_10_tsni = function monthLengths_inst_45_46_7_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_45_46_7_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_45_46_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_45_46_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_45_46_7_9_13_tsni = function take_inst_45_46_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_45_46_7_8_tsni = function monthLengths_inst_45_46_7_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_45_46_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zip3_inst_45_46_7_35_tsni = function zip3_inst_45_46_7_35_tsni(xs, ys, zs) {
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
title_inst_47_29_tsni = function title_inst_47_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_47_29_30_tsni(21, mn);
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
    tmp1 = append_inst_47_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_47_29_30_tsni = function cjustify_inst_47_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_47_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_47_29_30_86_tsni(tmp3, tmp6)
};
space_inst_47_29_30_31_tsni = function space_inst_47_29_30_31_tsni(n) {
  return replicate_inst_47_29_30_31_27_tsni(n, " ")
};
replicate_inst_47_29_30_31_27_tsni = function replicate_inst_47_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_47_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_47_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_47_17_tsni = function table$_inst_47_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_47_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_47_17_18_tsni = function entries_inst_47_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_47_17_18_21_tsni(fd, ml);
  return block_inst_47_17_18_19_tsni(7, tmp)
};
dates_inst_47_17_18_21_tsni = function dates_inst_47_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_47_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_47_17_18_21_22_tsni(ml));
  return map_inst_47_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_47_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_47_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_47_17_18_21_22_23_tsni = function lambda$_inst_47_17_18_21_22_23_tsni(ml, d) {
  return date_inst_47_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_47_17_18_21_22_23_24_tsni = function date_inst_47_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_47_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_47_17_18_21_22_23_24_25_tsni = function rjustify_inst_47_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_47_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_47_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_47_17_18_21_22_23_24_25_26_tsni = function space_inst_47_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_47_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_47_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_47_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_47_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_47_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_47_17_18_21_28_tsni = function enumFromTo_inst_47_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_47_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_47_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_47_17_18_19_tsni = function block_inst_47_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_47_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_47_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_47_17_18_19_20_tsni = function groop_inst_47_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_47_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_47_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
pic$_inst_48_49_tsni = function pic$_inst_48_49_tsni(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
    first0 = runtime.Tuple.get(mnfdml, 0);
    first1 = runtime.Tuple.get(mnfdml, 1);
    first2 = runtime.Tuple.get(mnfdml, 2);
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_48_49_29_tsni(mn);
    tmp1 = table$_inst_48_49_17_tsni(daynames, fd, ml);
    return append_inst_48_49_87_tsni(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
table$_inst_48_49_17_tsni = function table$_inst_48_49_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_48_49_17_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_48_49_17_18_tsni = function entries_inst_48_49_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_48_49_17_18_21_tsni(fd, ml);
  return block_inst_48_49_17_18_19_tsni(7, tmp)
};
block_inst_48_49_17_18_19_tsni = function block_inst_48_49_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_48_49_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_48_49_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_48_49_17_18_19_20_tsni = function groop_inst_48_49_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_48_49_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_48_49_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_48_49_17_18_21_tsni = function dates_inst_48_49_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_48_49_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_48_49_17_18_21_22_tsni(ml));
  return map_inst_48_49_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_48_49_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_48_49_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_48_49_17_18_21_22_23_tsni = function lambda$_inst_48_49_17_18_21_22_23_tsni(ml, d) {
  return date_inst_48_49_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_48_49_17_18_21_22_23_24_tsni = function date_inst_48_49_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_48_49_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_48_49_17_18_21_22_23_24_25_tsni = function rjustify_inst_48_49_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_48_49_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_48_49_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_48_49_17_18_21_22_23_24_25_26_tsni = function space_inst_48_49_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_48_49_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_48_49_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_48_49_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_48_49_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_48_49_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_48_49_17_18_21_28_tsni = function enumFromTo_inst_48_49_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_48_49_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_48_49_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_48_49_29_tsni = function title_inst_48_49_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_48_49_29_30_tsni(21, mn);
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
    tmp1 = append_inst_48_49_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_48_49_29_30_tsni = function cjustify_inst_48_49_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_48_49_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_48_49_29_30_86_tsni(tmp3, tmp6)
};
space_inst_48_49_29_30_31_tsni = function space_inst_48_49_29_30_31_tsni(n) {
  return replicate_inst_48_49_29_30_31_27_tsni(n, " ")
};
replicate_inst_48_49_29_30_31_27_tsni = function replicate_inst_48_49_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_48_49_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_48_49_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
zipWith_inst_50_34_tsni = function zipWith_inst_50_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_50_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_50_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_50_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_50_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_50_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_50_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_50_33_tsni = function zipWith_inst_50_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pad$_inst_51_52_tsni = function pad$_inst_51_52_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_51_52_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_51_52_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_51_52_88_tsni(tmp1, end)
};
zipWith_inst_51_52_33_tsni = function zipWith_inst_51_52_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_51_52_34_tsni = function zipWith_inst_51_52_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_51_52_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_51_52_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_51_52_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_51_52_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_51_52_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_51_52_33_tsni(f1, yss1)
    }
  }
};
cjustify_inst_53_30_tsni = function cjustify_inst_53_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_53_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_53_30_86_tsni(tmp3, tmp6)
};
space_inst_53_30_31_tsni = function space_inst_53_30_31_tsni(n) {
  return replicate_inst_53_30_31_27_tsni(n, " ")
};
replicate_inst_53_30_31_27_tsni = function replicate_inst_53_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_53_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_53_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
entries_inst_54_18_tsni = function entries_inst_54_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_54_18_21_tsni(fd, ml);
  return block_inst_54_18_19_tsni(7, tmp)
};
block_inst_54_18_19_tsni = function block_inst_54_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_54_18_19_20_tsni(n, t);
  tmp1 = map_inst_54_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_54_18_19_20_tsni = function groop_inst_54_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_54_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_54_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_54_18_21_tsni = function dates_inst_54_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_54_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_54_18_21_22_tsni(ml));
  return map_inst_54_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_54_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_54_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_54_18_21_22_23_tsni = function lambda$_inst_54_18_21_22_23_tsni(ml, d) {
  return date_inst_54_18_21_22_23_24_tsni(ml, d)
};
date_inst_54_18_21_22_23_24_tsni = function date_inst_54_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_54_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_54_18_21_22_23_24_25_tsni = function rjustify_inst_54_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_54_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_54_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_54_18_21_22_23_24_25_26_tsni = function space_inst_54_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_54_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_54_18_21_22_23_24_25_26_27_tsni = function replicate_inst_54_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_54_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_54_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_54_18_21_28_tsni = function enumFromTo_inst_54_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_54_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_54_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
table$_inst_55_56_tsni = function table$_inst_55_56_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_55_56_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
entries_inst_55_56_18_tsni = function entries_inst_55_56_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_55_56_18_21_tsni(fd, ml);
  return block_inst_55_56_18_19_tsni(7, tmp)
};
dates_inst_55_56_18_21_tsni = function dates_inst_55_56_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_55_56_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_55_56_18_21_22_tsni(ml));
  return map_inst_55_56_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_55_56_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_55_56_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_55_56_18_21_22_23_tsni = function lambda$_inst_55_56_18_21_22_23_tsni(ml, d) {
  return date_inst_55_56_18_21_22_23_24_tsni(ml, d)
};
date_inst_55_56_18_21_22_23_24_tsni = function date_inst_55_56_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_55_56_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_55_56_18_21_22_23_24_25_tsni = function rjustify_inst_55_56_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_55_56_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_55_56_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_55_56_18_21_22_23_24_25_26_tsni = function space_inst_55_56_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_55_56_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_55_56_18_21_22_23_24_25_26_27_tsni = function replicate_inst_55_56_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_55_56_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_55_56_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_55_56_18_21_28_tsni = function enumFromTo_inst_55_56_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_55_56_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_55_56_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_55_56_18_19_tsni = function block_inst_55_56_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_55_56_18_19_20_tsni(n, t);
  tmp1 = map_inst_55_56_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_55_56_18_19_20_tsni = function groop_inst_55_56_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_55_56_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_55_56_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_57_21_tsni = function dates_inst_57_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_57_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_57_21_22_tsni(ml));
  return map_inst_57_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_57_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_57_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_57_21_22_23_tsni = function lambda$_inst_57_21_22_23_tsni(ml, d) {
  return date_inst_57_21_22_23_24_tsni(ml, d)
};
date_inst_57_21_22_23_24_tsni = function date_inst_57_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_57_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_57_21_22_23_24_25_tsni = function rjustify_inst_57_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_57_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_57_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_57_21_22_23_24_25_26_tsni = function space_inst_57_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_57_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_57_21_22_23_24_25_26_27_tsni = function replicate_inst_57_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_57_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_57_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_57_21_28_tsni = function enumFromTo_inst_57_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_57_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_57_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_57_19_tsni = function block_inst_57_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_57_19_20_tsni(n, t);
  tmp1 = map_inst_57_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_57_19_20_tsni = function groop_inst_57_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_57_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_57_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
firstDays_inst_58_9_tsni = function firstDays_inst_58_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_58_9_10_tsni(year);
  tmp2 = scanl_inst_58_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_58_9_12_tsni(lambda5, tmp2);
  return take_inst_58_9_13_tsni(12, tmp3)
};
map_inst_58_9_12_tsni = function map_inst_58_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_58_9_11_tsni = function scanl_inst_58_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_58_9_10_tsni = function monthLengths_inst_58_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_58_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_58_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_58_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_58_9_13_tsni = function take_inst_58_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_58_8_tsni = function monthLengths_inst_58_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_58_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
date_inst_59_24_tsni = function date_inst_59_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_59_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_59_24_25_tsni = function rjustify_inst_59_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_59_24_25_26_tsni(tmp1);
  return append_inst_59_24_25_84_tsni(tmp2, s)
};
space_inst_59_24_25_26_tsni = function space_inst_59_24_25_26_tsni(n) {
  return replicate_inst_59_24_25_26_27_tsni(n, " ")
};
replicate_inst_59_24_25_26_27_tsni = function replicate_inst_59_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_59_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_59_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lambda$_inst_60_23_tsni = function lambda$_inst_60_23_tsni(ml, d) {
  return date_inst_60_23_24_tsni(ml, d)
};
date_inst_60_23_24_tsni = function date_inst_60_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_60_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_60_23_24_25_tsni = function rjustify_inst_60_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_60_23_24_25_26_tsni(tmp1);
  return append_inst_60_23_24_25_84_tsni(tmp2, s)
};
space_inst_60_23_24_25_26_tsni = function space_inst_60_23_24_25_26_tsni(n) {
  return replicate_inst_60_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_60_23_24_25_26_27_tsni = function replicate_inst_60_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_60_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_60_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
map_inst_61_3_tsni = function map_inst_61_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_61_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_61_80_tsni(xs2);
      return append_inst_61_80_81_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_61_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_61_80_81_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_61_4_5_tsni(x, tmp)
});
append_inst_61_4_5_tsni = function append_inst_61_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_61_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_61_80_81_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
groop_inst_62_20_tsni = function groop_inst_62_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_62_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_62_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
groop_inst_63_64_tsni = function groop_inst_63_64_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_63_64_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_63_93_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
emptyPic_inst_65_66_tsni = function emptyPic_inst_65_66_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_65_66_40_tsni = function replicate_inst_65_66_40_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (f, x1, xs) => {
      return (ys) => {
        return match_xs_arm_Nil_inst_65_95_tsni(ys)
      }
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_65_66_40_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (f, x1, xs) => {
      let param0, param1, y, ys, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      y = param0;
      ys = param1;
      tmp2 = runtime.safeCall(f(x1, y));
      tmp3 = zipWith_inst_65_67_tsni(f, xs, ys);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return (ys1) => {
        let param01, param11, x2, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x2 = param01;
        xs1 = param11;
        tmp4 = append_inst_65_95_tsni(xs1, ys1);
        return NofibPrelude.Cons(x2, tmp4)
      }
    }
  }
};
zipWith_inst_65_67_tsni = function zipWith_inst_65_67_tsni(f, xss, yss) {
  let param0, param1, x, xs;
  if (xss instanceof NofibPrelude.Cons.class) {
    param0 = xss.head;
    param1 = xss.tail;
    x = param0;
    xs = param1;
    return runtime.safeCall(yss(f, x, xs))
  } else {
    return (ys) => {
      return match_xs_arm_Nil_inst_65_95_tsni(ys)
    }
  }
};
monthLengths_inst_68_10_tsni = function monthLengths_inst_68_10_tsni(year) {
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
      return match_xs_arm_Cons_inst_68_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_68_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_68_11_tsni = function scanl_inst_68_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_68_12_tsni = function map_inst_68_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
space_inst_69_26_tsni = function space_inst_69_26_tsni(n) {
  return replicate_inst_69_26_27_tsni(n, " ")
};
replicate_inst_69_26_27_tsni = function replicate_inst_69_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_69_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_69_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
rjustify_inst_70_25_tsni = function rjustify_inst_70_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_70_25_26_tsni(tmp1);
  return append_inst_70_25_84_tsni(tmp2, s)
};
space_inst_70_25_26_tsni = function space_inst_70_25_26_tsni(n) {
  return replicate_inst_70_25_26_27_tsni(n, " ")
};
replicate_inst_70_25_26_27_tsni = function replicate_inst_70_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_70_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_70_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
lambda_inst_71_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_71_22_23_tsni(ml, d)
  }
});
lambda$_inst_71_22_23_tsni = function lambda$_inst_71_22_23_tsni(ml, d) {
  return date_inst_71_22_23_24_tsni(ml, d)
};
date_inst_71_22_23_24_tsni = function date_inst_71_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_71_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_71_22_23_24_25_tsni = function rjustify_inst_71_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_71_22_23_24_25_26_tsni(tmp1);
  return append_inst_71_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_71_22_23_24_25_26_tsni = function space_inst_71_22_23_24_25_26_tsni(n) {
  return replicate_inst_71_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_71_22_23_24_25_26_27_tsni = function replicate_inst_71_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_71_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_71_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_71_28_tsni = function enumFromTo_inst_71_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_71_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_71_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
space_inst_72_31_tsni = function space_inst_72_31_tsni(n) {
  return replicate_inst_72_31_27_tsni(n, " ")
};
replicate_inst_72_31_27_tsni = function replicate_inst_72_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_72_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_72_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
banner_inst_73_37_tsni = function banner_inst_73_37_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_73_37_38_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = NofibPrelude.replicate(w, " ");
    return replicate_inst_73_37_39_40_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_73_37_39_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_73_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_73_37_38_tsni = function cjustify_inst_73_37_38_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_73_37_38_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_73_37_38_86_tsni(tmp3, tmp6)
};
space_inst_73_37_38_31_tsni = function space_inst_73_37_38_31_tsni(n) {
  return replicate_inst_73_37_38_31_27_tsni(n, " ")
};
replicate_inst_73_37_38_31_27_tsni = function replicate_inst_73_37_38_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_73_37_38_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_73_37_38_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
body$_inst_73_6_tsni = function body$_inst_73_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_73_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_73_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_73_6_36_tsni(3, tmp1)
};
block_inst_73_6_36_tsni = function block_inst_73_6_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_73_6_36_20_tsni(n, t);
  tmp1 = map_inst_73_6_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_73_6_36_20_tsni = function groop_inst_73_6_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_73_6_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_73_6_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_73_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_73_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_73_6_14_15_tsni = function lambda$_inst_73_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_73_6_14_15_16_tsni(daynames, x);
  return pad$_inst_73_6_14_15_32_tsni(side, end, tmp)
};
pad$_inst_73_6_14_15_32_tsni = function pad$_inst_73_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_73_6_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_73_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_73_6_14_15_32_88_tsni(tmp1, end)
};
zipWith_inst_73_6_14_15_32_34_tsni = function zipWith_inst_73_6_14_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_73_6_14_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_73_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_73_6_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_73_6_14_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_73_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_73_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_73_6_14_15_32_33_tsni = function zipWith_inst_73_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_73_6_14_15_16_tsni = function pic$_inst_73_6_14_15_16_tsni(daynames, mnfdml) {
  return runtime.safeCall(mnfdml(daynames))
};
title_inst_73_6_14_15_16_29_tsni = function title_inst_73_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_73_6_14_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_73_6_14_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_73_6_14_15_16_29_30_tsni = function cjustify_inst_73_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_73_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_73_6_14_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_73_6_14_15_16_29_30_31_tsni = function space_inst_73_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_73_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_73_6_14_15_16_29_30_31_27_tsni = function replicate_inst_73_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_73_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_73_6_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_73_6_14_15_16_17_tsni = function table$_inst_73_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_73_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_73_6_14_15_16_17_90_tsni(daynames, tmp)
};
entries_inst_73_6_14_15_16_17_18_tsni = function entries_inst_73_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_73_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_73_6_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_73_6_14_15_16_17_18_21_tsni = function dates_inst_73_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_73_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_73_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_73_6_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_73_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_73_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_73_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_73_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_73_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_73_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_73_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_73_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_73_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_73_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_73_6_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_73_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_73_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_73_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_73_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_73_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_73_6_14_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_73_6_14_15_16_17_18_19_tsni = function block_inst_73_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_73_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_73_6_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_73_6_14_15_16_17_18_19_20_tsni = function groop_inst_73_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_73_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_73_6_14_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_73_6_7_tsni = function months_inst_73_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_73_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_73_6_7_8_tsni(yer);
  return zip3_inst_73_6_7_35_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_73_6_7_9_tsni = function firstDays_inst_73_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_73_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_73_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_73_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_73_6_7_9_13_tsni(12, tmp3)
};
map_inst_73_6_7_9_12_tsni = function map_inst_73_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_73_6_7_9_11_tsni = function scanl_inst_73_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_73_6_7_9_10_tsni = function monthLengths_inst_73_6_7_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_73_6_7_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_73_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_73_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_73_6_7_9_13_tsni = function take_inst_73_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_73_6_7_8_tsni = function monthLengths_inst_73_6_7_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_73_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zip3_inst_73_6_7_35_tsni = function zip3_inst_73_6_7_35_tsni(xs, ys, zs) {
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
emptyPic_inst_73_37_39_tsni = function emptyPic_inst_73_37_39_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_73_37_39_40_tsni = function replicate_inst_73_37_39_40_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_73_37_39_40_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_73_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_73_2_tsni = function unlines_inst_73_2_tsni(ls) {
  let tmp;
  tmp = map_inst_73_2_3_tsni(lambda_inst_73_2_4_tsni, ls);
  return concat_inst_73_2_80_tsni(tmp)
};
map_inst_73_2_3_tsni = function map_inst_73_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_73_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_73_2_80_tsni(xs2);
      return append_inst_73_2_80_81_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_73_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_73_2_80_81_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_73_2_4_5_tsni(x, tmp)
});
append_inst_73_2_4_5_tsni = function append_inst_73_2_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_73_2_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_73_2_80_81_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_74_75_tsni = (undefined, function (x) {
  return cal_inst_74_75_1_tsni(x)
});
cal_inst_74_75_1_tsni = function cal_inst_74_75_1_tsni(year) {
  let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Deforest_Arr_2_0 = 8;
  _deforest_Deforest_Arr_2_1 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_74_75_1_92_tsni(arr);
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
  tmp1 = emptyPic_inst_74_75_1_91_tsni(arr1);
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
    tmp7 = append_inst_74_75_1_6_14_15_16_17_90_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_74_75_1_37_tsni(year);
  tmp5 = body$_inst_74_75_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_74_75_1_89_tsni(tmp4, tmp5);
  return unlines_inst_74_75_1_2_tsni(tmp6)
};
banner_inst_74_75_1_37_tsni = function banner_inst_74_75_1_37_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_74_75_1_37_38_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = NofibPrelude.replicate(w, " ");
    return replicate_inst_74_75_1_37_39_40_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_74_75_1_37_39_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_74_75_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_74_75_1_37_38_tsni = function cjustify_inst_74_75_1_37_38_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_74_75_1_37_38_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_74_75_1_37_38_86_tsni(tmp3, tmp6)
};
space_inst_74_75_1_37_38_31_tsni = function space_inst_74_75_1_37_38_31_tsni(n) {
  return replicate_inst_74_75_1_37_38_31_27_tsni(n, " ")
};
replicate_inst_74_75_1_37_38_31_27_tsni = function replicate_inst_74_75_1_37_38_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_74_75_1_37_38_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_74_75_1_37_38_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
body$_inst_74_75_1_6_tsni = function body$_inst_74_75_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_74_75_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_74_75_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_74_75_1_6_36_tsni(3, tmp1)
};
block_inst_74_75_1_6_36_tsni = function block_inst_74_75_1_6_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_74_75_1_6_36_20_tsni(n, t);
  tmp1 = map_inst_74_75_1_6_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_74_75_1_6_36_20_tsni = function groop_inst_74_75_1_6_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_74_75_1_6_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_74_75_1_6_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
lambda_inst_74_75_1_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_74_75_1_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_74_75_1_6_14_15_tsni = function lambda$_inst_74_75_1_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_74_75_1_6_14_15_16_tsni(daynames, x);
  return pad$_inst_74_75_1_6_14_15_32_tsni(side, end, tmp)
};
pad$_inst_74_75_1_6_14_15_32_tsni = function pad$_inst_74_75_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_74_75_1_6_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_74_75_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_74_75_1_6_14_15_32_88_tsni(tmp1, end)
};
zipWith_inst_74_75_1_6_14_15_32_34_tsni = function zipWith_inst_74_75_1_6_14_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_74_75_1_6_14_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_74_75_1_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_74_75_1_6_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_74_75_1_6_14_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_74_75_1_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_74_75_1_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zipWith_inst_74_75_1_6_14_15_32_33_tsni = function zipWith_inst_74_75_1_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
pic$_inst_74_75_1_6_14_15_16_tsni = function pic$_inst_74_75_1_6_14_15_16_tsni(daynames, mnfdml) {
  return runtime.safeCall(mnfdml(daynames))
};
title_inst_74_75_1_6_14_15_16_29_tsni = function title_inst_74_75_1_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_74_75_1_6_14_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_74_75_1_6_14_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_74_75_1_6_14_15_16_29_30_tsni = function cjustify_inst_74_75_1_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_74_75_1_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_74_75_1_6_14_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_74_75_1_6_14_15_16_29_30_31_tsni = function space_inst_74_75_1_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_74_75_1_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_74_75_1_6_14_15_16_29_30_31_27_tsni = function replicate_inst_74_75_1_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_74_75_1_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_74_75_1_6_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
table$_inst_74_75_1_6_14_15_16_17_tsni = function table$_inst_74_75_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_74_75_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_74_75_1_6_14_15_16_17_90_tsni(daynames, tmp)
};
entries_inst_74_75_1_6_14_15_16_17_18_tsni = function entries_inst_74_75_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_74_75_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_74_75_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
dates_inst_74_75_1_6_14_15_16_17_18_21_tsni = function dates_inst_74_75_1_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_74_75_1_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_74_75_1_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_74_75_1_6_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_74_75_1_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_74_75_1_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_74_75_1_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_74_75_1_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_74_75_1_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_74_75_1_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_74_75_1_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_74_75_1_6_14_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
block_inst_74_75_1_6_14_15_16_17_18_19_tsni = function block_inst_74_75_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_74_75_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_74_75_1_6_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_74_75_1_6_14_15_16_17_18_19_20_tsni = function groop_inst_74_75_1_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_74_75_1_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_74_75_1_6_14_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
months_inst_74_75_1_6_7_tsni = function months_inst_74_75_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_74_75_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_74_75_1_6_7_8_tsni(yer);
  return zip3_inst_74_75_1_6_7_35_tsni(calendar1.monthNames, tmp, tmp1)
};
firstDays_inst_74_75_1_6_7_9_tsni = function firstDays_inst_74_75_1_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_74_75_1_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_74_75_1_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_74_75_1_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_74_75_1_6_7_9_13_tsni(12, tmp3)
};
map_inst_74_75_1_6_7_9_12_tsni = function map_inst_74_75_1_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
scanl_inst_74_75_1_6_7_9_11_tsni = function scanl_inst_74_75_1_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
monthLengths_inst_74_75_1_6_7_9_10_tsni = function monthLengths_inst_74_75_1_6_7_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_74_75_1_6_7_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_74_75_1_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_74_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
take_inst_74_75_1_6_7_9_13_tsni = function take_inst_74_75_1_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
monthLengths_inst_74_75_1_6_7_8_tsni = function monthLengths_inst_74_75_1_6_7_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_74_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
zip3_inst_74_75_1_6_7_35_tsni = function zip3_inst_74_75_1_6_7_35_tsni(xs, ys, zs) {
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
emptyPic_inst_74_75_1_37_39_tsni = function emptyPic_inst_74_75_1_37_39_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_74_75_1_37_39_40_tsni = function replicate_inst_74_75_1_37_39_40_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_74_75_1_37_39_40_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_74_75_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
unlines_inst_74_75_1_2_tsni = function unlines_inst_74_75_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_74_75_1_2_3_tsni(lambda_inst_74_75_1_2_4_tsni, ls);
  return concat_inst_74_75_1_2_80_tsni(tmp)
};
map_inst_74_75_1_2_3_tsni = function map_inst_74_75_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_74_75_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_74_75_1_2_80_tsni(xs2);
      return append_inst_74_75_1_2_80_81_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return NofibPrelude.Nil
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_74_75_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_74_75_1_2_80_81_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_74_75_1_2_4_5_tsni(x, tmp)
});
append_inst_74_75_1_2_4_5_tsni = function append_inst_74_75_1_2_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_74_75_1_2_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_74_75_1_2_80_81_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_74_79_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
testCalendar_nofib_inst_77_78_tsni = function testCalendar_nofib_inst_77_78_tsni(n) {
  let tmp, tmp1;
  tmp = 1993 + n;
  tmp1 = enumFromTo_inst_77_78_76_tsni(1993, tmp);
  return map_inst_77_78_79_tsni(lambda_inst_77_78_75_tsni, tmp1)
};
lambda_inst_77_78_75_tsni = (undefined, function (x) {
  return cal_inst_77_78_75_1_tsni(x)
});
cal_inst_77_78_75_1_tsni = function cal_inst_77_78_75_1_tsni(year) {
  let side, end, daynames, arr, tmp, arr1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  _deforest_Deforest_Arr_2_01 = 8;
  _deforest_Deforest_Arr_2_11 = 2;
  arr = () => {
    let first1, first0, h, w, tmp7;
    first0 = _deforest_Deforest_Arr_2_01;
    first1 = _deforest_Deforest_Arr_2_11;
    h = first0;
    w = first1;
    tmp7 = NofibPrelude.replicate(w, " ");
    return NofibPrelude.replicate(h, tmp7)
  };
  tmp = emptyPic_inst_77_78_75_1_92_tsni(arr);
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
  tmp1 = emptyPic_inst_77_78_75_1_91_tsni(arr1);
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
    tmp7 = append_inst_77_78_75_1_6_14_15_16_17_90_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp7)
  };
  daynames = tmp3;
  tmp4 = banner_inst_77_78_75_1_37_tsni(year);
  tmp5 = body$_inst_77_78_75_1_6_tsni(side, end, daynames, year);
  tmp6 = append_inst_77_78_75_1_89_tsni(tmp4, tmp5);
  return unlines_inst_77_78_75_1_2_tsni(tmp6)
};
unlines_inst_77_78_75_1_2_tsni = function unlines_inst_77_78_75_1_2_tsni(ls) {
  let tmp;
  tmp = map_inst_77_78_75_1_2_3_tsni(lambda_inst_77_78_75_1_2_4_tsni, ls);
  return concat_inst_77_78_75_1_2_80_tsni(tmp)
};
map_inst_77_78_75_1_2_3_tsni = function map_inst_77_78_75_1_2_3_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_77_78_75_1_2_3_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_77_78_75_1_2_80_tsni(xs2);
      return append_inst_77_78_75_1_2_80_81_tsni(x1, tmp2)
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return () => {
      return (ys) => {
        return ys
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_77_78_75_1_2_4_tsni = (undefined, function (x) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "\n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_77_78_75_1_2_80_81_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_77_78_75_1_2_4_5_tsni(x, tmp)
});
append_inst_77_78_75_1_2_4_5_tsni = function append_inst_77_78_75_1_2_4_5_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_77_78_75_1_2_4_5_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      return match_xs_arm_Cons_inst_77_78_75_1_2_80_81_tsni(ys1, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
body$_inst_77_78_75_1_6_tsni = function body$_inst_77_78_75_1_6_tsni(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_77_78_75_1_6_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_77_78_75_1_6_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_77_78_75_1_6_36_tsni(3, tmp1)
};
months_inst_77_78_75_1_6_7_tsni = function months_inst_77_78_75_1_6_7_tsni(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_77_78_75_1_6_7_9_tsni(yer);
  tmp1 = monthLengths_inst_77_78_75_1_6_7_8_tsni(yer);
  return zip3_inst_77_78_75_1_6_7_35_tsni(calendar1.monthNames, tmp, tmp1)
};
monthLengths_inst_77_78_75_1_6_7_8_tsni = function monthLengths_inst_77_78_75_1_6_7_8_tsni(year) {
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
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (x, xs, y, ys) => {
    return match_zs_arm_Cons_inst_77_78_75_1_6_7_35_tsni(x, xs, y, ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
firstDays_inst_77_78_75_1_6_7_9_tsni = function firstDays_inst_77_78_75_1_6_7_9_tsni(year) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = calendar.jan1st(year);
  tmp1 = monthLengths_inst_77_78_75_1_6_7_9_10_tsni(year);
  tmp2 = scanl_inst_77_78_75_1_6_7_9_11_tsni(lambda4, tmp, tmp1);
  tmp3 = map_inst_77_78_75_1_6_7_9_12_tsni(lambda5, tmp2);
  return take_inst_77_78_75_1_6_7_9_13_tsni(12, tmp3)
};
monthLengths_inst_77_78_75_1_6_7_9_10_tsni = function monthLengths_inst_77_78_75_1_6_7_9_10_tsni(year) {
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
          return match_ys_arm_default_inst_77_78_75_1_6_7_35_tsni(zs, x, xs)
        }
      }
    };
    return (f1) => {
      return match_xs_arm_Cons_inst_77_78_75_1_6_7_9_12_tsni(f1, _deforest_Cons_head12, _deforest_Cons_tail12)
    }
  };
  tmp1 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head11, _deforest_Cons_tail11)
  };
  _deforest_Cons_head10 = 30;
  _deforest_Cons_tail10 = tmp1;
  tmp2 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head10, _deforest_Cons_tail10)
  };
  _deforest_Cons_head9 = 31;
  _deforest_Cons_tail9 = tmp2;
  tmp3 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head9, _deforest_Cons_tail9)
  };
  _deforest_Cons_head8 = 30;
  _deforest_Cons_tail8 = tmp3;
  tmp4 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head8, _deforest_Cons_tail8)
  };
  _deforest_Cons_head7 = 31;
  _deforest_Cons_tail7 = tmp4;
  tmp5 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head7, _deforest_Cons_tail7)
  };
  _deforest_Cons_head6 = 31;
  _deforest_Cons_tail6 = tmp5;
  tmp6 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head6, _deforest_Cons_tail6)
  };
  _deforest_Cons_head5 = 30;
  _deforest_Cons_tail5 = tmp6;
  tmp7 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head5, _deforest_Cons_tail5)
  };
  _deforest_Cons_head4 = 31;
  _deforest_Cons_tail4 = tmp7;
  tmp8 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head4, _deforest_Cons_tail4)
  };
  _deforest_Cons_head3 = 30;
  _deforest_Cons_tail3 = tmp8;
  tmp9 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head3, _deforest_Cons_tail3)
  };
  _deforest_Cons_head2 = 31;
  _deforest_Cons_tail2 = tmp9;
  tmp10 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head2, _deforest_Cons_tail2)
  };
  _deforest_Cons_head1 = feb;
  _deforest_Cons_tail1 = tmp10;
  tmp11 = (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head1, _deforest_Cons_tail1)
  };
  _deforest_Cons_head = 31;
  _deforest_Cons_tail = tmp11;
  return (f, q) => {
    return match_ls_arm_Cons_inst_77_78_75_1_6_7_9_11_tsni(f, q, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
scanl_inst_77_78_75_1_6_7_9_11_tsni = function scanl_inst_77_78_75_1_6_7_9_11_tsni(f, q, ls) {
  return runtime.safeCall(ls(f, q))
};
map_inst_77_78_75_1_6_7_9_12_tsni = function map_inst_77_78_75_1_6_7_9_12_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_inst_77_78_75_1_6_7_9_13_tsni = function take_inst_77_78_75_1_6_7_9_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
lambda_inst_77_78_75_1_6_14_tsni = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_77_78_75_1_6_14_15_tsni(side, end, daynames, x)
  }
});
lambda$_inst_77_78_75_1_6_14_15_tsni = function lambda$_inst_77_78_75_1_6_14_15_tsni(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_77_78_75_1_6_14_15_16_tsni(daynames, x);
  return pad$_inst_77_78_75_1_6_14_15_32_tsni(side, end, tmp)
};
pic$_inst_77_78_75_1_6_14_15_16_tsni = function pic$_inst_77_78_75_1_6_14_15_16_tsni(daynames, mnfdml) {
  return runtime.safeCall(mnfdml(daynames))
};
table$_inst_77_78_75_1_6_14_15_16_17_tsni = function table$_inst_77_78_75_1_6_14_15_16_17_tsni(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_77_78_75_1_6_14_15_16_17_18_tsni(fd, ml);
  return append_inst_77_78_75_1_6_14_15_16_17_90_tsni(daynames, tmp)
};
entries_inst_77_78_75_1_6_14_15_16_17_18_tsni = function entries_inst_77_78_75_1_6_14_15_16_17_18_tsni(fd, ml) {
  let tmp;
  tmp = dates_inst_77_78_75_1_6_14_15_16_17_18_21_tsni(fd, ml);
  return block_inst_77_78_75_1_6_14_15_16_17_18_19_tsni(7, tmp)
};
block_inst_77_78_75_1_6_14_15_16_17_18_19_tsni = function block_inst_77_78_75_1_6_14_15_16_17_18_19_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_77_78_75_1_6_14_15_16_17_18_19_20_tsni(n, t);
  tmp1 = map_inst_77_78_75_1_6_14_15_16_17_18_19_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_77_78_75_1_6_14_15_16_17_18_19_20_tsni = function groop_inst_77_78_75_1_6_14_15_16_17_18_19_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_77_78_75_1_6_14_15_16_17_18_19_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_77_78_75_1_6_14_15_16_17_18_19_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
dates_inst_77_78_75_1_6_14_15_16_17_18_21_tsni = function dates_inst_77_78_75_1_6_14_15_16_17_18_21_tsni(fd, ml) {
  let tmp, tmp1, tmp2, lambda$this;
  tmp = 1 - fd;
  tmp1 = 42 - fd;
  tmp2 = enumFromTo_inst_77_78_75_1_6_14_15_16_17_18_21_28_tsni(tmp, tmp1);
  lambda$this = runtime.safeCall(lambda_inst_77_78_75_1_6_14_15_16_17_18_21_22_tsni(ml));
  return map_inst_77_78_75_1_6_14_15_16_17_18_21_85_tsni(lambda$this, tmp2)
};
lambda_inst_77_78_75_1_6_14_15_16_17_18_21_22_tsni = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_tsni(ml, d)
  }
});
lambda$_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_tsni = function lambda$_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_tsni(ml, d) {
  return date_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d)
};
date_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_tsni = function date_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_tsni(ml, d) {
  let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
  tmp = d < 1;
  lambda$this = runtime.safeCall(lambda6(ml, d));
  scrut = runtime.short_or(tmp, lambda$this);
  if (scrut === true) {
    tmp1 = NofibPrelude.nofibStringToList("   ");
    return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
  } else {
    tmp2 = NofibPrelude.stringOfInt(d);
    tmp3 = NofibPrelude.nofibStringToList(tmp2);
    tmp4 = rjustify_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni(3, tmp3);
    return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
  }
};
rjustify_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni = function rjustify_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_tsni(n, s) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  tmp2 = space_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(tmp1);
  return append_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(tmp2, s)
};
space_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni = function space_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_tsni(n) {
  return replicate_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, " ")
};
replicate_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni = function replicate_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_26_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
enumFromTo_inst_77_78_75_1_6_14_15_16_17_18_21_28_tsni = function enumFromTo_inst_77_78_75_1_6_14_15_16_17_18_21_28_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_77_78_75_1_6_14_15_16_17_18_21_28_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_77_78_75_1_6_14_15_16_17_18_21_85_tsni(f, xs);
      return NofibPrelude.Cons(tmp2, tmp3)
    }
  } else {
    return (f) => {
      return NofibPrelude.Nil
    }
  }
};
title_inst_77_78_75_1_6_14_15_16_29_tsni = function title_inst_77_78_75_1_6_14_15_16_29_tsni(mn) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = cjustify_inst_77_78_75_1_6_14_15_16_29_30_tsni(21, mn);
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
    tmp1 = append_inst_77_78_75_1_6_14_15_16_87_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  }
};
cjustify_inst_77_78_75_1_6_14_15_16_29_30_tsni = function cjustify_inst_77_78_75_1_6_14_15_16_29_30_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_77_78_75_1_6_14_15_16_29_30_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_77_78_75_1_6_14_15_16_29_30_86_tsni(tmp3, tmp6)
};
space_inst_77_78_75_1_6_14_15_16_29_30_31_tsni = function space_inst_77_78_75_1_6_14_15_16_29_30_31_tsni(n) {
  return replicate_inst_77_78_75_1_6_14_15_16_29_30_31_27_tsni(n, " ")
};
replicate_inst_77_78_75_1_6_14_15_16_29_30_31_27_tsni = function replicate_inst_77_78_75_1_6_14_15_16_29_30_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_77_78_75_1_6_14_15_16_29_30_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_77_78_75_1_6_14_15_16_29_30_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
pad$_inst_77_78_75_1_6_14_15_32_tsni = function pad$_inst_77_78_75_1_6_14_15_32_tsni(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_77_78_75_1_6_14_15_32_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_77_78_75_1_6_14_15_32_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_77_78_75_1_6_14_15_32_88_tsni(tmp1, end)
};
zipWith_inst_77_78_75_1_6_14_15_32_33_tsni = function zipWith_inst_77_78_75_1_6_14_15_32_33_tsni(f, xss, yss) {
  return runtime.safeCall(xss(f, yss))
};
zipWith_inst_77_78_75_1_6_14_15_32_34_tsni = function zipWith_inst_77_78_75_1_6_14_15_32_34_tsni(f, xss, yss) {
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
      tmp1 = zipWith_inst_77_78_75_1_6_14_15_32_34_tsni(f, xs, ys);
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
          tmp1 = zipWith_inst_77_78_75_1_6_14_15_32_33_tsni(f1, xs, ys);
          _deforest_Cons_head1 = tmp;
          _deforest_Cons_tail1 = tmp1;
          return (ys1) => {
            let param02, param12, x1, xs1, tmp2;
            param02 = _deforest_Cons_head1;
            param12 = _deforest_Cons_tail1;
            x1 = param02;
            xs1 = param12;
            tmp2 = append_inst_77_78_75_1_6_14_15_32_88_tsni(xs1, ys1);
            return NofibPrelude.Cons(x1, tmp2)
          }
        } else {
          return (ys1) => {
            return match_xs_arm_Nil_inst_77_78_75_1_6_14_15_32_88_tsni(ys1)
          }
        }
      }
    } else {
      return (f1, yss1) => {
        return match_xss_arm_default_inst_77_78_75_1_6_14_15_32_33_tsni(f1, yss1)
      }
    }
  } else {
    return (f1, yss1) => {
      return match_xss_arm_default_inst_77_78_75_1_6_14_15_32_33_tsni(f1, yss1)
    }
  }
};
zip3_inst_77_78_75_1_6_7_35_tsni = function zip3_inst_77_78_75_1_6_7_35_tsni(xs, ys, zs) {
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
block_inst_77_78_75_1_6_36_tsni = function block_inst_77_78_75_1_6_36_tsni(n, t) {
  let tmp, tmp1;
  tmp = groop_inst_77_78_75_1_6_36_20_tsni(n, t);
  tmp1 = map_inst_77_78_75_1_6_36_83_tsni(calendar.spread, tmp);
  return calendar.stack(tmp1)
};
groop_inst_77_78_75_1_6_36_20_tsni = function groop_inst_77_78_75_1_6_36_20_tsni(n, xs) {
  let tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = NofibPrelude.take(n, xs);
    tmp1 = NofibPrelude.leave(n, xs);
    tmp2 = groop_inst_77_78_75_1_6_36_20_tsni(n, tmp1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp2;
    return (f) => {
      let param0, param1, x, xs1, tmp3, tmp4;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp3 = runtime.safeCall(f(x));
      tmp4 = map_inst_77_78_75_1_6_36_83_tsni(f, xs1);
      return NofibPrelude.Cons(tmp3, tmp4)
    }
  }
};
banner_inst_77_78_75_1_37_tsni = function banner_inst_77_78_75_1_37_tsni(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_77_78_75_1_37_38_tsni(75, tmp1);
  _deforest_Deforest_Arr_2_0 = 1;
  _deforest_Deforest_Arr_2_1 = 75;
  arr = () => {
    let first1, first0, h, w, tmp4;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    h = first0;
    w = first1;
    tmp4 = NofibPrelude.replicate(w, " ");
    return replicate_inst_77_78_75_1_37_39_40_tsni(h, tmp4)
  };
  tmp3 = emptyPic_inst_77_78_75_1_37_39_tsni(arr);
  _deforest_Cons_head = tmp2;
  _deforest_Cons_tail = tmp3;
  return (ys) => {
    return match_xs_arm_Cons_inst_77_78_75_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
cjustify_inst_77_78_75_1_37_38_tsni = function cjustify_inst_77_78_75_1_37_38_tsni(n, s) {
  let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  tmp = NofibPrelude.listLen(s);
  tmp1 = n - tmp;
  m = tmp1;
  tmp2 = NofibPrelude.intDiv(m, 2);
  halfm = tmp2;
  tmp3 = space_inst_77_78_75_1_37_38_31_tsni(halfm);
  tmp4 = m - halfm;
  tmp5 = calendar.space(tmp4);
  tmp6 = NofibPrelude.append(s, tmp5);
  return append_inst_77_78_75_1_37_38_86_tsni(tmp3, tmp6)
};
space_inst_77_78_75_1_37_38_31_tsni = function space_inst_77_78_75_1_37_38_31_tsni(n) {
  return replicate_inst_77_78_75_1_37_38_31_27_tsni(n, " ")
};
replicate_inst_77_78_75_1_37_38_31_27_tsni = function replicate_inst_77_78_75_1_37_38_31_27_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_77_78_75_1_37_38_31_27_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      let param0, param1, x1, xs, tmp2;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x1 = param0;
      xs = param1;
      tmp2 = append_inst_77_78_75_1_37_38_86_tsni(xs, ys);
      return NofibPrelude.Cons(x1, tmp2)
    }
  }
};
emptyPic_inst_77_78_75_1_37_39_tsni = function emptyPic_inst_77_78_75_1_37_39_tsni(hw) {
  return runtime.safeCall(hw())
};
replicate_inst_77_78_75_1_37_39_40_tsni = function replicate_inst_77_78_75_1_37_39_40_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = n == 0;
  if (scrut === true) {
    return (ys) => {
      return ys
    }
  } else {
    tmp = n - 1;
    tmp1 = replicate_inst_77_78_75_1_37_39_40_tsni(tmp, x);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp1;
    return (ys) => {
      return match_xs_arm_Cons_inst_77_78_75_1_89_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
};
enumFromTo_inst_77_78_76_tsni = function enumFromTo_inst_77_78_76_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_inst_77_78_76_tsni(tmp, b);
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp1;
    return (f) => {
      let param0, param1, x, xs, tmp2, tmp3, _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs = param1;
      tmp2 = runtime.safeCall(f(x));
      tmp3 = map_inst_77_78_79_tsni(f, xs);
      _deforest_Cons_head1 = tmp2;
      _deforest_Cons_tail1 = tmp3;
      return () => {
        let param01, param11, x1, xs1, tmp4;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs1 = param11;
        tmp4 = concat_inst_77_82_tsni(xs1);
        return append_inst_77_82_81_tsni(x1, tmp4)
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
map_inst_77_78_79_tsni = function map_inst_77_78_79_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_77_78_75_1_2_80_tsni = function concat_inst_77_78_75_1_2_80_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_77_78_75_1_2_80_81_tsni = function append_inst_77_78_75_1_2_80_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_77_82_tsni = function concat_inst_77_82_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_77_82_81_tsni = function append_inst_77_82_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_0_1_2_80_tsni = function concat_inst_0_1_2_80_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_0_1_2_80_81_tsni = function append_inst_0_1_2_80_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_0_1_6_14_15_16_17_18_19_83_tsni = function map_inst_0_1_6_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_0_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_0_1_6_14_15_16_17_18_21_85_tsni = function map_inst_0_1_6_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_6_14_15_16_29_30_86_tsni = function append_inst_0_1_6_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_16_87_tsni = function append_inst_0_1_6_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_32_88_tsni = function append_inst_0_1_6_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_0_1_6_36_83_tsni = function map_inst_0_1_6_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_0_1_37_38_86_tsni = function append_inst_0_1_37_38_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_89_tsni = function append_inst_0_1_89_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_0_1_6_14_15_16_17_90_tsni = function append_inst_0_1_6_14_15_16_17_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_0_1_91_tsni = function emptyPic_inst_0_1_91_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_0_1_92_tsni = function emptyPic_inst_0_1_92_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_41_38_86_tsni = function append_inst_41_38_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_41_39_tsni = function emptyPic_inst_41_39_tsni(hw) {
  return runtime.safeCall(hw())
};
map_inst_42_16_17_18_19_83_tsni = function map_inst_42_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_42_16_17_18_21_22_23_24_25_84_tsni = function append_inst_42_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_42_16_17_18_21_85_tsni = function map_inst_42_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_42_16_29_30_86_tsni = function append_inst_42_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_16_87_tsni = function append_inst_42_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_42_32_88_tsni = function append_inst_42_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_43_15_32_88_tsni = function append_inst_43_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_43_15_16_29_30_86_tsni = function append_inst_43_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_43_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_43_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_43_15_16_17_18_21_85_tsni = function map_inst_43_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_43_15_16_17_18_19_83_tsni = function map_inst_43_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_43_15_16_87_tsni = function append_inst_43_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_44_14_15_16_17_18_19_83_tsni = function map_inst_44_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_44_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_44_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_44_14_15_16_17_18_21_85_tsni = function map_inst_44_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_44_14_15_16_29_30_86_tsni = function append_inst_44_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_44_14_15_16_87_tsni = function append_inst_44_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_44_14_15_32_88_tsni = function append_inst_44_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_44_36_83_tsni = function map_inst_44_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_45_46_36_83_tsni = function map_inst_45_46_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_45_46_14_15_32_88_tsni = function append_inst_45_46_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_45_46_14_15_16_29_30_86_tsni = function append_inst_45_46_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_45_46_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_45_46_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_45_46_14_15_16_17_18_21_85_tsni = function map_inst_45_46_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_45_46_14_15_16_17_18_19_83_tsni = function map_inst_45_46_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_45_46_14_15_16_87_tsni = function append_inst_45_46_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_47_29_30_86_tsni = function append_inst_47_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_47_17_18_21_22_23_24_25_84_tsni = function append_inst_47_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_47_17_18_21_85_tsni = function map_inst_47_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_47_17_18_19_83_tsni = function map_inst_47_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_47_87_tsni = function append_inst_47_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_48_49_17_18_19_83_tsni = function map_inst_48_49_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_48_49_17_18_21_22_23_24_25_84_tsni = function append_inst_48_49_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_48_49_17_18_21_85_tsni = function map_inst_48_49_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_48_49_29_30_86_tsni = function append_inst_48_49_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_48_49_87_tsni = function append_inst_48_49_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_50_88_tsni = function append_inst_50_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_51_52_88_tsni = function append_inst_51_52_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_53_30_86_tsni = function append_inst_53_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_54_18_19_83_tsni = function map_inst_54_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_54_18_21_22_23_24_25_84_tsni = function append_inst_54_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_54_18_21_85_tsni = function map_inst_54_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_55_56_18_21_22_23_24_25_84_tsni = function append_inst_55_56_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_55_56_18_21_85_tsni = function map_inst_55_56_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_55_56_18_19_83_tsni = function map_inst_55_56_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_57_21_22_23_24_25_84_tsni = function append_inst_57_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_57_21_85_tsni = function map_inst_57_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_57_19_83_tsni = function map_inst_57_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zip3_inst_58_35_tsni = function zip3_inst_58_35_tsni(xs, ys, zs) {
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
append_inst_59_24_25_84_tsni = function append_inst_59_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_60_23_24_25_84_tsni = function append_inst_60_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_61_80_tsni = function concat_inst_61_80_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_61_80_81_tsni = function append_inst_61_80_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_62_83_tsni = function map_inst_62_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_63_93_tsni = function map_inst_63_93_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
emptyPic_inst_65_94_tsni = function emptyPic_inst_65_94_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_65_95_tsni = function append_inst_65_95_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_inst_68_13_tsni = function take_inst_68_13_tsni(n, ls) {
  return runtime.safeCall(ls(n))
};
append_inst_69_84_tsni = function append_inst_69_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_70_25_84_tsni = function append_inst_70_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_71_22_23_24_25_84_tsni = function append_inst_71_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_71_85_tsni = function map_inst_71_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_72_86_tsni = function append_inst_72_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_73_92_tsni = function emptyPic_inst_73_92_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_73_91_tsni = function emptyPic_inst_73_91_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_73_37_38_86_tsni = function append_inst_73_37_38_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_73_6_36_83_tsni = function map_inst_73_6_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_73_6_14_15_32_88_tsni = function append_inst_73_6_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_73_6_14_15_16_29_30_86_tsni = function append_inst_73_6_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_73_6_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_73_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_73_6_14_15_16_17_18_21_85_tsni = function map_inst_73_6_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_73_6_14_15_16_17_18_19_83_tsni = function map_inst_73_6_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_73_6_14_15_16_87_tsni = function append_inst_73_6_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_73_6_14_15_16_17_90_tsni = function append_inst_73_6_14_15_16_17_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_73_89_tsni = function append_inst_73_89_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_73_2_80_tsni = function concat_inst_73_2_80_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_73_2_80_81_tsni = function append_inst_73_2_80_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_74_75_1_92_tsni = function emptyPic_inst_74_75_1_92_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_74_75_1_91_tsni = function emptyPic_inst_74_75_1_91_tsni(hw) {
  return runtime.safeCall(hw())
};
append_inst_74_75_1_37_38_86_tsni = function append_inst_74_75_1_37_38_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_74_75_1_6_36_83_tsni = function map_inst_74_75_1_6_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_74_75_1_6_14_15_32_88_tsni = function append_inst_74_75_1_6_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_74_75_1_6_14_15_16_29_30_86_tsni = function append_inst_74_75_1_6_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_74_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_74_75_1_6_14_15_16_17_18_21_85_tsni = function map_inst_74_75_1_6_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_74_75_1_6_14_15_16_17_18_19_83_tsni = function map_inst_74_75_1_6_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_74_75_1_6_14_15_16_87_tsni = function append_inst_74_75_1_6_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_74_75_1_6_14_15_16_17_90_tsni = function append_inst_74_75_1_6_14_15_16_17_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_74_75_1_89_tsni = function append_inst_74_75_1_89_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
concat_inst_74_75_1_2_80_tsni = function concat_inst_74_75_1_2_80_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_74_75_1_2_80_81_tsni = function append_inst_74_75_1_2_80_81_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_74_79_tsni = function map_inst_74_79_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
map_inst_77_78_75_1_6_14_15_16_17_18_19_83_tsni = function map_inst_77_78_75_1_6_14_15_16_17_18_19_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni = function append_inst_77_78_75_1_6_14_15_16_17_18_21_22_23_24_25_84_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_77_78_75_1_6_14_15_16_17_18_21_85_tsni = function map_inst_77_78_75_1_6_14_15_16_17_18_21_85_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_77_78_75_1_6_14_15_16_29_30_86_tsni = function append_inst_77_78_75_1_6_14_15_16_29_30_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_77_78_75_1_6_14_15_16_87_tsni = function append_inst_77_78_75_1_6_14_15_16_87_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_77_78_75_1_6_14_15_32_88_tsni = function append_inst_77_78_75_1_6_14_15_32_88_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_77_78_75_1_6_36_83_tsni = function map_inst_77_78_75_1_6_36_83_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
append_inst_77_78_75_1_37_38_86_tsni = function append_inst_77_78_75_1_37_38_86_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_77_78_75_1_89_tsni = function append_inst_77_78_75_1_89_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_77_78_75_1_6_14_15_16_17_90_tsni = function append_inst_77_78_75_1_6_14_15_16_17_90_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
emptyPic_inst_77_78_75_1_91_tsni = function emptyPic_inst_77_78_75_1_91_tsni(hw) {
  return runtime.safeCall(hw())
};
emptyPic_inst_77_78_75_1_92_tsni = function emptyPic_inst_77_78_75_1_92_tsni(hw) {
  return runtime.safeCall(hw())
};
nofibListToString_inst_77_96_tsni = function nofibListToString_inst_77_96_tsni(ls) {
  return runtime.safeCall(ls())
};
lambda9 = (undefined, function (x) {
  return cal_inst_0_1_tsni(x)
});
banner = function banner(yr) {
  let tmp, tmp1, tmp2, arr, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  tmp = NofibPrelude.stringOfInt(yr);
  tmp1 = NofibPrelude.nofibStringToList(tmp);
  tmp2 = cjustify_inst_41_38_tsni(75, tmp1);
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
  tmp3 = emptyPic_inst_41_39_tsni(arr);
  return NofibPrelude.Cons(tmp2, tmp3)
};
lambda$2 = function lambda$(side, end, daynames, x) {
  let tmp;
  tmp = pic$_inst_42_16_tsni(daynames, x);
  return pad$_inst_42_32_tsni(side, end, tmp)
};
lambda8 = (undefined, function (side, end, daynames) {
  return (x) => {
    return lambda$_inst_43_15_tsni(side, end, daynames, x)
  }
});
body$ = function body$(side, end, daynames, yr) {
  let tmp, tmp1, lambda$this;
  tmp = months_inst_44_7_tsni(yr);
  lambda$this = runtime.safeCall(lambda_inst_44_14_tsni(side, end, daynames));
  tmp1 = NofibPrelude.map(lambda$this, tmp);
  return block_inst_44_36_tsni(3, tmp1)
};
body = function body(side, end, daynames) {
  return (yr) => {
    return body$_inst_45_46_tsni(side, end, daynames, yr)
  }
};
pic$ = function pic$(daynames, mnfdml) {
  let first2, first1, first0, mn, fd, ml, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(mnfdml) && mnfdml.length === 3) {
    first0 = runtime.Tuple.get(mnfdml, 0);
    first1 = runtime.Tuple.get(mnfdml, 1);
    first2 = runtime.Tuple.get(mnfdml, 2);
    mn = first0;
    fd = first1;
    ml = first2;
    tmp = title_inst_47_29_tsni(mn);
    tmp1 = table$_inst_47_17_tsni(daynames, fd, ml);
    return append_inst_47_87_tsni(tmp, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
pic = function pic(daynames) {
  return (mnfdml) => {
    return pic$_inst_48_49_tsni(daynames, mnfdml)
  }
};
pad$ = function pad$(side, end, p) {
  let tmp, tmp1;
  tmp = zipWith_inst_50_34_tsni(NofibPrelude.append, side, p);
  tmp1 = zipWith_inst_50_33_tsni(NofibPrelude.append, tmp, side);
  return append_inst_50_88_tsni(tmp1, end)
};
pad = function pad(side, end) {
  return (p) => {
    return pad$_inst_51_52_tsni(side, end, p)
  }
};
title = function title(mn) {
  let tmp;
  tmp = cjustify_inst_53_30_tsni(21, mn);
  return NofibPrelude.Cons(tmp, NofibPrelude.Nil)
};
table$ = function table$(daynames, fd, ml) {
  let tmp;
  tmp = entries_inst_54_18_tsni(fd, ml);
  return NofibPrelude.append(daynames, tmp)
};
table = function table(daynames) {
  return (fd, ml) => {
    return table$_inst_55_56_tsni(daynames, fd, ml)
  }
};
entries = function entries(fd, ml) {
  let tmp;
  tmp = dates_inst_57_21_tsni(fd, ml);
  return block_inst_57_19_tsni(7, tmp)
};
months = function months(yer) {
  let tmp, tmp1;
  tmp = firstDays_inst_58_9_tsni(yer);
  tmp1 = monthLengths_inst_58_8_tsni(yer);
  return zip3_inst_58_35_tsni(calendar1.monthNames, tmp, tmp1)
};
lambda$1 = function lambda$(ml, d) {
  return date_inst_59_24_tsni(ml, d)
};
lambda7 = (undefined, function (ml) {
  return (d) => {
    return lambda$_inst_60_23_tsni(ml, d)
  }
});
lambda$ = function lambda$(ml, d) {
  return ml < d
};
lambda6 = (undefined, function (ml, d) {
  return () => {
    return lambda$(ml, d)
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
    tmp = map_inst_61_3_tsni(lambda_inst_61_4_tsni, ls);
    return concat_inst_61_80_tsni(tmp)
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
    if (runtime.Tuple.isArrayLike(hw) && hw.length === 2) {
      first0 = runtime.Tuple.get(hw, 0);
      first1 = runtime.Tuple.get(hw, 1);
      h = first0;
      w = first1;
      tmp = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static groop(n, xs) {
    let tmp, tmp1, tmp2;
    if (xs instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      tmp = NofibPrelude.take(n, xs);
      tmp1 = NofibPrelude.leave(n, xs);
      tmp2 = calendar.groop(n, tmp1);
      return NofibPrelude.Cons(tmp, tmp2)
    }
  } 
  static block(n1, t) {
    let tmp, tmp1;
    tmp = groop_inst_62_20_tsni(n1, t);
    tmp1 = map_inst_62_83_tsni(calendar.spread, tmp);
    return calendar.stack(tmp1)
  } 
  static blockT(n2, t1) {
    let tmp, tmp1;
    tmp = groop_inst_63_64_tsni(n2, t1);
    tmp1 = map_inst_63_93_tsni(calendar.stack, tmp);
    return calendar.stack(tmp1)
  } 
  static lframe(mn, p2) {
    let first1, first0, m, n3, h, w, tmp, tmp1, tmp2, arr, tmp3, tmp4, tmp5, arr1, tmp6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
    if (runtime.Tuple.isArrayLike(mn) && mn.length === 2) {
      first0 = runtime.Tuple.get(mn, 0);
      first1 = runtime.Tuple.get(mn, 1);
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
        return replicate_inst_65_66_40_tsni(h1, tmp7)
      };
      tmp3 = emptyPic_inst_65_66_tsni(arr);
      tmp4 = zipWith_inst_65_67_tsni(NofibPrelude.append, p2, tmp3);
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
      tmp6 = emptyPic_inst_65_94_tsni(arr1);
      return append_inst_65_95_tsni(tmp4, tmp6)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
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
    tmp1 = monthLengths_inst_68_10_tsni(year3);
    tmp2 = scanl_inst_68_11_tsni(lambda4, tmp, tmp1);
    tmp3 = map_inst_68_12_tsni(lambda5, tmp2);
    return take_inst_68_13_tsni(12, tmp3)
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
    tmp2 = space_inst_69_26_tsni(tmp1);
    return append_inst_69_84_tsni(tmp2, s1)
  } 
  static date(ml, d) {
    let scrut, tmp, tmp1, tmp2, tmp3, tmp4, lambda$this;
    tmp = d < 1;
    lambda$this = runtime.safeCall(lambda6(ml, d));
    scrut = runtime.short_or(tmp, lambda$this);
    if (scrut === true) {
      tmp1 = NofibPrelude.nofibStringToList("   ");
      return NofibPrelude.Cons(tmp1, NofibPrelude.Nil)
    } else {
      tmp2 = NofibPrelude.stringOfInt(d);
      tmp3 = NofibPrelude.nofibStringToList(tmp2);
      tmp4 = rjustify_inst_70_25_tsni(3, tmp3);
      return NofibPrelude.Cons(tmp4, NofibPrelude.Nil)
    }
  } 
  static dates(fd, ml1) {
    let tmp, tmp1, tmp2, lambda$this;
    tmp = 1 - fd;
    tmp1 = 42 - fd;
    tmp2 = enumFromTo_inst_71_28_tsni(tmp, tmp1);
    lambda$this = runtime.safeCall(lambda_inst_71_22_tsni(ml1));
    return map_inst_71_85_tsni(lambda$this, tmp2)
  } 
  static cjustify(n6, s2) {
    let m, halfm, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
    tmp = NofibPrelude.listLen(s2);
    tmp1 = n6 - tmp;
    m = tmp1;
    tmp2 = NofibPrelude.intDiv(m, 2);
    halfm = tmp2;
    tmp3 = space_inst_72_31_tsni(halfm);
    tmp4 = m - halfm;
    tmp5 = calendar.space(tmp4);
    tmp6 = NofibPrelude.append(s2, tmp5);
    return append_inst_72_86_tsni(tmp3, tmp6)
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
      tmp7 = NofibPrelude.replicate(w, " ");
      return NofibPrelude.replicate(h, tmp7)
    };
    tmp = emptyPic_inst_73_92_tsni(arr);
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
    tmp1 = emptyPic_inst_73_91_tsni(arr1);
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
      tmp7 = append_inst_73_6_14_15_16_17_90_tsni(xs1, ys);
      return NofibPrelude.Cons(x, tmp7)
    };
    daynames = tmp3;
    tmp4 = banner_inst_73_37_tsni(year4);
    tmp5 = body$_inst_73_6_tsni(side, end, daynames, year4);
    tmp6 = append_inst_73_89_tsni(tmp4, tmp5);
    return unlines_inst_73_2_tsni(tmp6)
  } 
  static testCalendar_nofib(n7) {
    let tmp, tmp1;
    tmp = 1993 + n7;
    tmp1 = enumFromTo_inst_74_76_tsni(1993, tmp);
    return map_inst_74_79_tsni(lambda_inst_74_75_tsni, tmp1)
  } 
  static main() {
    let tmp, tmp1;
    tmp = testCalendar_nofib_inst_77_78_tsni(0);
    tmp1 = concat_inst_77_82_tsni(tmp);
    return nofibListToString_inst_77_96_tsni(tmp1)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "calendar"]; 
});
let calendar = calendar1; export default calendar;
