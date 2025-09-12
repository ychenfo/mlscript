const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let go, lscomp, lscomp2, lscomp1, tryy, cichelli1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda$, lambda$1, lscomp$, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lscomp2$, lambda$9, lambda$10, tryy$, findhash__inst_0_tsni, lambda_inst_0_tsni, lambda$_inst_0_tsni, lambda_inst_0_tsni1, lambda$_inst_0_tsni1, lambda_inst_0_tsni2, lambda$_inst_0_tsni2, lambda_inst_0_tsni3, lambda$_inst_0_tsni3, assocm_inst_0_1_tsni, hinsert_inst_0_2_tsni, lscomp1_inst_0_3_tsni, lambda_inst_0_3_tsni, lambda$_inst_0_3_tsni, lscomp2$_inst_0_3_tsni, lambda_inst_0_3_tsni1, lambda$_inst_0_3_tsni1, enumFromTo_lz_inst_0_3_4_tsni, lambda_inst_0_3_4_tsni, lambda$_inst_0_3_4_tsni, enumFromTo_lz_inst_0_5_tsni, lambda_inst_0_5_tsni, lambda$_inst_0_5_tsni, findhash__inst_6_7_tsni, tryy$_inst_6_7_tsni, lambda_inst_6_7_tsni, lambda$_inst_6_7_tsni, lambda_inst_6_7_tsni1, lambda$_inst_6_7_tsni1, lambda_inst_6_7_tsni2, lambda$_inst_6_7_tsni2, lambda_inst_6_7_tsni3, lambda$_inst_6_7_tsni3, lscomp1_inst_6_7_3_tsni, lambda_inst_6_7_3_tsni, lambda$_inst_6_7_3_tsni, lscomp2$_inst_6_7_3_tsni, lambda_inst_6_7_3_tsni1, lambda$_inst_6_7_3_tsni1, enumFromTo_lz_inst_6_7_3_4_tsni, lambda_inst_6_7_3_4_tsni, lambda$_inst_6_7_3_4_tsni, enumFromTo_lz_inst_6_7_5_tsni, lambda_inst_6_7_5_tsni, lambda$_inst_6_7_5_tsni, hinsert_inst_6_7_2_tsni, assocm_inst_6_7_1_tsni, findhash__inst_8_tsni, tryy$_inst_8_tsni, lambda_inst_8_tsni, lambda$_inst_8_tsni, lambda_inst_8_tsni1, lambda$_inst_8_tsni1, lambda_inst_8_tsni2, lambda$_inst_8_tsni2, lambda_inst_8_tsni3, assocm_inst_8_1_tsni, hinsert_inst_8_2_tsni, lscomp1_inst_8_3_tsni, lambda_inst_8_3_tsni, lambda$_inst_8_3_tsni, lscomp2$_inst_8_3_tsni, lambda_inst_8_3_tsni1, lambda$_inst_8_3_tsni1, enumFromTo_lz_inst_8_3_4_tsni, lambda_inst_8_3_4_tsni, lambda$_inst_8_3_4_tsni, enumFromTo_lz_inst_8_5_tsni, lambda_inst_8_5_tsni, lambda$_inst_8_5_tsni, findhash__inst_9_tsni, tryy$_inst_9_tsni, lambda_inst_9_tsni, lambda$_inst_9_tsni, lambda_inst_9_tsni1, lambda$_inst_9_tsni1, lambda_inst_9_tsni2, lambda$_inst_9_tsni2, lambda$_inst_9_tsni3, assocm_inst_9_1_tsni, hinsert_inst_9_2_tsni, lscomp1_inst_9_3_tsni, lambda_inst_9_3_tsni, lambda$_inst_9_3_tsni, lscomp2$_inst_9_3_tsni, lambda_inst_9_3_tsni1, lambda$_inst_9_3_tsni1, enumFromTo_lz_inst_9_3_4_tsni, lambda_inst_9_3_4_tsni, lambda$_inst_9_3_4_tsni, enumFromTo_lz_inst_9_5_tsni, lambda_inst_9_5_tsni, lambda$_inst_9_5_tsni, lscomp1_inst_10_tsni, lambda_inst_10_tsni, lscomp2$_inst_10_tsni, lambda_inst_10_tsni1, lambda$_inst_10_tsni, enumFromTo_lz_inst_10_4_tsni, lambda_inst_10_4_tsni, lambda$_inst_10_4_tsni, lscomp1_inst_11_tsni, lambda$_inst_11_tsni, lscomp2$_inst_11_tsni, lambda_inst_11_tsni, lambda$_inst_11_tsni1, enumFromTo_lz_inst_11_4_tsni, lambda_inst_11_4_tsni, lambda$_inst_11_4_tsni, lambda_inst_12_tsni, lambda$_inst_12_tsni, lscomp2$_inst_12_tsni, lambda_inst_12_tsni1, lambda$_inst_12_tsni1, enumFromTo_lz_inst_12_4_tsni, lambda_inst_12_4_tsni, lambda$_inst_12_4_tsni, findhash__inst_13_tsni, tryy$_inst_13_tsni, lambda_inst_13_tsni, lambda$_inst_13_tsni, lambda_inst_13_tsni1, lambda$_inst_13_tsni1, lambda_inst_13_tsni2, lambda_inst_13_tsni3, lambda$_inst_13_tsni2, assocm_inst_13_1_tsni, hinsert_inst_13_2_tsni, lscomp1_inst_13_3_tsni, lambda_inst_13_3_tsni, lambda$_inst_13_3_tsni, lscomp2$_inst_13_3_tsni, lambda_inst_13_3_tsni1, lambda$_inst_13_3_tsni1, enumFromTo_lz_inst_13_3_4_tsni, lambda_inst_13_3_4_tsni, lambda$_inst_13_3_4_tsni, enumFromTo_lz_inst_13_5_tsni, lambda_inst_13_5_tsni, lambda$_inst_13_5_tsni, findhash__inst_14_tsni, tryy$_inst_14_tsni, lambda_inst_14_tsni, lambda$_inst_14_tsni, lambda_inst_14_tsni1, lambda$_inst_14_tsni1, lambda$_inst_14_tsni2, lambda_inst_14_tsni2, lambda$_inst_14_tsni3, assocm_inst_14_1_tsni, hinsert_inst_14_2_tsni, lscomp1_inst_14_3_tsni, lambda_inst_14_3_tsni, lambda$_inst_14_3_tsni, lscomp2$_inst_14_3_tsni, lambda_inst_14_3_tsni1, lambda$_inst_14_3_tsni1, enumFromTo_lz_inst_14_3_4_tsni, lambda_inst_14_3_4_tsni, lambda$_inst_14_3_4_tsni, enumFromTo_lz_inst_14_5_tsni, lambda_inst_14_5_tsni, lambda$_inst_14_5_tsni, findhash__inst_15_tsni, tryy$_inst_15_tsni, lambda_inst_15_tsni, lambda$_inst_15_tsni, lambda_inst_15_tsni1, lambda_inst_15_tsni2, lambda$_inst_15_tsni1, lambda_inst_15_tsni3, lambda$_inst_15_tsni2, assocm_inst_15_1_tsni, hinsert_inst_15_2_tsni, lscomp1_inst_15_3_tsni, lambda_inst_15_3_tsni, lambda$_inst_15_3_tsni, lscomp2$_inst_15_3_tsni, lambda_inst_15_3_tsni1, lambda$_inst_15_3_tsni1, enumFromTo_lz_inst_15_3_4_tsni, lambda_inst_15_3_4_tsni, lambda$_inst_15_3_4_tsni, enumFromTo_lz_inst_15_5_tsni, lambda_inst_15_5_tsni, lambda$_inst_15_5_tsni, findhash__inst_16_tsni, tryy$_inst_16_tsni, lambda_inst_16_tsni, lambda$_inst_16_tsni, lambda$_inst_16_tsni1, lambda_inst_16_tsni1, lambda$_inst_16_tsni2, lambda_inst_16_tsni2, lambda$_inst_16_tsni3, assocm_inst_16_1_tsni, hinsert_inst_16_2_tsni, lscomp1_inst_16_3_tsni, lambda_inst_16_3_tsni, lambda$_inst_16_3_tsni, lscomp2$_inst_16_3_tsni, lambda_inst_16_3_tsni1, lambda$_inst_16_3_tsni1, enumFromTo_lz_inst_16_3_4_tsni, lambda_inst_16_3_4_tsni, lambda$_inst_16_3_4_tsni, enumFromTo_lz_inst_16_5_tsni, lambda_inst_16_5_tsni, lambda$_inst_16_5_tsni, findhash__inst_17_tsni, tryy$_inst_17_tsni, lambda_inst_17_tsni, lambda_inst_17_tsni1, lambda$_inst_17_tsni, lambda_inst_17_tsni2, lambda$_inst_17_tsni1, lambda_inst_17_tsni3, lambda$_inst_17_tsni2, assocm_inst_17_1_tsni, hinsert_inst_17_2_tsni, lscomp1_inst_17_3_tsni, lambda_inst_17_3_tsni, lambda$_inst_17_3_tsni, lscomp2$_inst_17_3_tsni, lambda_inst_17_3_tsni1, lambda$_inst_17_3_tsni1, enumFromTo_lz_inst_17_3_4_tsni, lambda_inst_17_3_4_tsni, lambda$_inst_17_3_4_tsni, enumFromTo_lz_inst_17_5_tsni, lambda_inst_17_5_tsni, lambda$_inst_17_5_tsni, findhash__inst_18_tsni, tryy$_inst_18_tsni, lambda$_inst_18_tsni, lambda_inst_18_tsni, lambda$_inst_18_tsni1, lambda_inst_18_tsni1, lambda$_inst_18_tsni2, lambda_inst_18_tsni2, lambda$_inst_18_tsni3, assocm_inst_18_1_tsni, hinsert_inst_18_2_tsni, lscomp1_inst_18_3_tsni, lambda_inst_18_3_tsni, lambda$_inst_18_3_tsni, lscomp2$_inst_18_3_tsni, lambda_inst_18_3_tsni1, lambda$_inst_18_3_tsni1, enumFromTo_lz_inst_18_3_4_tsni, lambda_inst_18_3_4_tsni, lambda$_inst_18_3_4_tsni, enumFromTo_lz_inst_18_5_tsni, lambda_inst_18_5_tsni, lambda$_inst_18_5_tsni, ends_inst_19_20_tsni, lambda$_inst_21_22_tsni, ends_inst_21_22_20_tsni, concat_inst_23_tsni, append_inst_23_24_tsni, map_inst_25_tsni, ends_inst_26_tsni, attribkeys_inst_27_tsni, map_inst_27_28_tsni, lambda_inst_27_29_tsni, ends_inst_30_31_tsni, lambda_inst_30_32_tsni, lambda$_inst_30_32_22_tsni, ends_inst_30_32_22_20_tsni, partition__inst_30_33_tsni, lambda_inst_30_33_34_tsni, lambda$_inst_30_33_34_35_tsni, select_inst_30_33_34_35_36_tsni, blocked__inst_37_38_tsni, partition__inst_37_38_33_tsni, lambda_inst_37_38_33_34_tsni, lambda$_inst_37_38_33_34_35_tsni, select_inst_37_38_33_34_35_36_tsni, lambda_inst_37_38_32_tsni, lambda$_inst_37_38_32_22_tsni, ends_inst_37_38_32_22_20_tsni, ends_inst_37_38_31_tsni, tryy$_inst_39_tsni, lambda_inst_39_tsni, lambda$_inst_39_tsni, lambda_inst_39_tsni1, lambda$_inst_39_tsni1, lambda_inst_39_tsni2, lambda$_inst_39_tsni2, lambda_inst_39_tsni3, lambda$_inst_39_tsni3, assocm_inst_39_1_tsni, hinsert_inst_39_2_tsni, lscomp1_inst_39_3_tsni, lambda_inst_39_3_tsni, lambda$_inst_39_3_tsni, lscomp2$_inst_39_3_tsni, lambda_inst_39_3_tsni1, lambda$_inst_39_3_tsni1, enumFromTo_lz_inst_39_3_4_tsni, lambda_inst_39_3_4_tsni, lambda$_inst_39_3_4_tsni, enumFromTo_lz_inst_39_5_tsni, lambda_inst_39_5_tsni, lambda$_inst_39_5_tsni, findhash__inst_40_41_tsni, tryy$_inst_40_41_tsni, lambda_inst_40_41_tsni, lambda$_inst_40_41_tsni, lambda_inst_40_41_tsni1, lambda$_inst_40_41_tsni1, lambda_inst_40_41_tsni2, lambda$_inst_40_41_tsni2, lambda_inst_40_41_tsni3, lambda$_inst_40_41_tsni3, lscomp1_inst_40_41_3_tsni, lambda_inst_40_41_3_tsni, lambda$_inst_40_41_3_tsni, lscomp2$_inst_40_41_3_tsni, lambda_inst_40_41_3_tsni1, lambda$_inst_40_41_3_tsni1, enumFromTo_lz_inst_40_41_3_4_tsni, lambda_inst_40_41_3_4_tsni, lambda$_inst_40_41_3_4_tsni, enumFromTo_lz_inst_40_41_5_tsni, lambda_inst_40_41_5_tsni, lambda$_inst_40_41_5_tsni, hinsert_inst_40_41_2_tsni, assocm_inst_40_41_1_tsni, take_inst_42_43_tsni, append_inst_42_44_tsni, blocked_inst_42_45_tsni, blocked__inst_42_45_38_tsni, ends_inst_42_45_38_31_tsni, lambda_inst_42_45_38_32_tsni, lambda$_inst_42_45_38_32_22_tsni, ends_inst_42_45_38_32_22_20_tsni, partition__inst_42_45_38_33_tsni, lambda_inst_42_45_38_33_34_tsni, lambda$_inst_42_45_38_33_34_35_tsni, select_inst_42_45_38_33_34_35_36_tsni, findhash_inst_42_46_tsni, findhash__inst_42_46_41_tsni, tryy$_inst_42_46_41_tsni, lambda_inst_42_46_41_tsni, lambda$_inst_42_46_41_tsni, lambda_inst_42_46_41_tsni1, lambda$_inst_42_46_41_tsni1, lambda_inst_42_46_41_tsni2, lambda$_inst_42_46_41_tsni2, lambda_inst_42_46_41_tsni3, lambda$_inst_42_46_41_tsni3, assocm_inst_42_46_41_1_tsni, hinsert_inst_42_46_41_2_tsni, lscomp1_inst_42_46_41_3_tsni, lambda_inst_42_46_41_3_tsni, lambda$_inst_42_46_41_3_tsni, lscomp2$_inst_42_46_41_3_tsni, lambda_inst_42_46_41_3_tsni1, lambda$_inst_42_46_41_3_tsni1, enumFromTo_lz_inst_42_46_41_3_4_tsni, lambda_inst_42_46_41_3_4_tsni, lambda$_inst_42_46_41_3_4_tsni, enumFromTo_lz_inst_42_46_41_5_tsni, lambda_inst_42_46_41_5_tsni, lambda$_inst_42_46_41_5_tsni, append_inst_42_45_38_47_tsni, cichelli__inst_48_49_tsni, findhash_inst_48_49_46_tsni, findhash__inst_48_49_46_41_tsni, tryy$_inst_48_49_46_41_tsni, lambda_inst_48_49_46_41_tsni, lambda$_inst_48_49_46_41_tsni, lambda_inst_48_49_46_41_tsni1, lambda$_inst_48_49_46_41_tsni1, lambda_inst_48_49_46_41_tsni2, lambda$_inst_48_49_46_41_tsni2, lambda_inst_48_49_46_41_tsni3, lambda$_inst_48_49_46_41_tsni3, lscomp1_inst_48_49_46_41_3_tsni, lambda_inst_48_49_46_41_3_tsni, lambda$_inst_48_49_46_41_3_tsni, lscomp2$_inst_48_49_46_41_3_tsni, lambda_inst_48_49_46_41_3_tsni1, lambda$_inst_48_49_46_41_3_tsni1, enumFromTo_lz_inst_48_49_46_41_3_4_tsni, lambda_inst_48_49_46_41_3_4_tsni, lambda$_inst_48_49_46_41_3_4_tsni, enumFromTo_lz_inst_48_49_46_41_5_tsni, lambda_inst_48_49_46_41_5_tsni, lambda$_inst_48_49_46_41_5_tsni, hinsert_inst_48_49_46_41_2_tsni, assocm_inst_48_49_46_41_1_tsni, blocked_inst_48_49_45_tsni, blocked__inst_48_49_45_38_tsni, partition__inst_48_49_45_38_33_tsni, lambda_inst_48_49_45_38_33_34_tsni, lambda$_inst_48_49_45_38_33_34_35_tsni, select_inst_48_49_45_38_33_34_35_36_tsni, lambda_inst_48_49_45_38_32_tsni, lambda$_inst_48_49_45_38_32_22_tsni, ends_inst_48_49_45_38_32_22_20_tsni, ends_inst_48_49_45_38_31_tsni, append_inst_48_49_45_38_47_tsni, append_inst_48_49_44_tsni, take_inst_48_49_43_tsni, prog_inst_50_51_tsni, cichelli__inst_50_51_49_tsni, take_inst_50_51_49_43_tsni, append_inst_50_51_49_44_tsni, blocked_inst_50_51_49_45_tsni, blocked__inst_50_51_49_45_38_tsni, ends_inst_50_51_49_45_38_31_tsni, lambda_inst_50_51_49_45_38_32_tsni, lambda$_inst_50_51_49_45_38_32_22_tsni, ends_inst_50_51_49_45_38_32_22_20_tsni, partition__inst_50_51_49_45_38_33_tsni, lambda_inst_50_51_49_45_38_33_34_tsni, lambda$_inst_50_51_49_45_38_33_34_35_tsni, select_inst_50_51_49_45_38_33_34_35_36_tsni, findhash_inst_50_51_49_46_tsni, findhash__inst_50_51_49_46_41_tsni, tryy$_inst_50_51_49_46_41_tsni, lambda_inst_50_51_49_46_41_tsni, lambda$_inst_50_51_49_46_41_tsni, lambda_inst_50_51_49_46_41_tsni1, lambda$_inst_50_51_49_46_41_tsni1, lambda_inst_50_51_49_46_41_tsni2, lambda$_inst_50_51_49_46_41_tsni2, lambda_inst_50_51_49_46_41_tsni3, lambda$_inst_50_51_49_46_41_tsni3, assocm_inst_50_51_49_46_41_1_tsni, hinsert_inst_50_51_49_46_41_2_tsni, lscomp1_inst_50_51_49_46_41_3_tsni, lambda_inst_50_51_49_46_41_3_tsni, lambda$_inst_50_51_49_46_41_3_tsni, lscomp2$_inst_50_51_49_46_41_3_tsni, lambda_inst_50_51_49_46_41_3_tsni1, lambda$_inst_50_51_49_46_41_3_tsni1, enumFromTo_lz_inst_50_51_49_46_41_3_4_tsni, lambda_inst_50_51_49_46_41_3_4_tsni, lambda$_inst_50_51_49_46_41_3_4_tsni, enumFromTo_lz_inst_50_51_49_46_41_5_tsni, lambda_inst_50_51_49_46_41_5_tsni, lambda$_inst_50_51_49_46_41_5_tsni, append_inst_50_51_49_45_38_47_tsni, hash_inst_0_52_tsni, hash_inst_6_7_52_tsni, hash_inst_8_52_tsni, append_inst_8_53_tsni, hash_inst_9_52_tsni, append_inst_9_53_tsni, hash_inst_13_52_tsni, append_inst_13_53_tsni, hash_inst_14_52_tsni, append_inst_14_53_tsni, hash_inst_15_52_tsni, append_inst_15_53_tsni, hash_inst_16_52_tsni, append_inst_16_53_tsni, hash_inst_17_52_tsni, append_inst_17_53_tsni, hash_inst_18_52_tsni, append_inst_18_53_tsni, subset_inst_19_54_tsni, all_inst_19_54_55_tsni, subset_inst_21_22_54_tsni, all_inst_21_22_54_55_tsni, histo_inst_56_tsni, foldr_inst_56_57_tsni, union_inst_30_58_tsni, lscomp$_inst_30_58_59_tsni, subset_inst_30_32_22_54_tsni, all_inst_30_32_22_54_55_tsni, append_inst_30_47_tsni, append_inst_37_38_47_tsni, subset_inst_37_38_32_22_54_tsni, all_inst_37_38_32_22_54_55_tsni, union_inst_37_38_58_tsni, lscomp$_inst_37_38_58_59_tsni, hash_inst_39_52_tsni, append_inst_39_53_tsni, inList_inst_40_41_2_60_tsni, maxm_inst_40_41_2_61_tsni, minm_inst_40_41_2_62_tsni, hash_inst_40_41_52_tsni, append_inst_40_41_53_tsni, attribkeys_inst_42_63_tsni, map_inst_42_63_28_tsni, union_inst_42_45_38_58_tsni, lscomp$_inst_42_45_38_58_59_tsni, subset_inst_42_45_38_32_22_54_tsni, all_inst_42_45_38_32_22_54_55_tsni, hash_inst_42_46_41_52_tsni, append_inst_42_46_41_53_tsni, minm_inst_42_46_41_2_62_tsni, maxm_inst_42_46_41_2_61_tsni, inList_inst_42_46_41_2_60_tsni, inList_inst_48_49_46_41_2_60_tsni, maxm_inst_48_49_46_41_2_61_tsni, minm_inst_48_49_46_41_2_62_tsni, hash_inst_48_49_46_41_52_tsni, append_inst_48_49_46_41_53_tsni, subset_inst_48_49_45_38_32_22_54_tsni, all_inst_48_49_45_38_32_22_54_55_tsni, union_inst_48_49_45_38_58_tsni, lscomp$_inst_48_49_45_38_58_59_tsni, attribkeys_inst_48_49_63_tsni, map_inst_48_49_63_28_tsni, attribkeys_inst_50_51_49_63_tsni, map_inst_50_51_49_63_28_tsni, union_inst_50_51_49_45_38_58_tsni, lscomp$_inst_50_51_49_45_38_58_59_tsni, subset_inst_50_51_49_45_38_32_22_54_tsni, all_inst_50_51_49_45_38_32_22_54_55_tsni, hash_inst_50_51_49_46_41_52_tsni, append_inst_50_51_49_46_41_53_tsni, minm_inst_50_51_49_46_41_2_62_tsni, maxm_inst_50_51_49_46_41_2_61_tsni, inList_inst_50_51_49_46_41_2_60_tsni, match_first0_arm_None_inst_0_tsni, match_first0_arm_None_inst_6_7_tsni, match_first0_arm_None_inst_8_tsni, match_xs_arm_Cons_inst_8_53_tsni, match_xs_arm_Nil_inst_8_53_tsni, match_first0_arm_None_inst_9_tsni, match_xs_arm_Cons_inst_9_53_tsni, match_xs_arm_Nil_inst_9_53_tsni, match_first0_arm_None_inst_13_tsni, match_xs_arm_Cons_inst_13_53_tsni, match_xs_arm_Nil_inst_13_53_tsni, match_first0_arm_None_inst_14_tsni, match_xs_arm_Cons_inst_14_53_tsni, match_xs_arm_Nil_inst_14_53_tsni, match_first0_arm_None_inst_15_tsni, match_xs_arm_Cons_inst_15_53_tsni, match_xs_arm_Nil_inst_15_53_tsni, match_first0_arm_None_inst_16_tsni, match_xs_arm_Cons_inst_16_53_tsni, match_xs_arm_Nil_inst_16_53_tsni, match_first0_arm_None_inst_17_tsni, match_xs_arm_Cons_inst_17_53_tsni, match_xs_arm_Nil_inst_17_53_tsni, match_first0_arm_None_inst_18_tsni, match_xs_arm_Cons_inst_18_53_tsni, match_xs_arm_Nil_inst_18_53_tsni, match_ls_arm_Cons_inst_19_54_55_tsni, match_ls_arm_Cons_inst_21_22_54_55_tsni, match_xs_arm_Nil_inst_56_57_tsni, match_xs_arm_Cons_inst_56_57_tsni, match_xs_arm_Cons_inst_23_24_tsni, match_ls_arm_Cons_inst_30_58_59_tsni, match_ls_arm_Cons_inst_30_32_22_54_55_tsni, match_ls_arm_Cons_inst_37_38_32_22_54_55_tsni, match_ls_arm_Cons_inst_37_38_58_59_tsni, match_first0_arm_None_inst_39_tsni, match_xs_arm_Cons_inst_39_53_tsni, match_xs_arm_Nil_inst_39_53_tsni, match_scrut_arm_Some_inst_40_41_tsni, match_hh_arm_H_inst_40_41_2_tsni, match_ls_arm_Cons_inst_40_41_2_60_tsni, match_x_arm_Some_inst_40_41_2_61_tsni, match_x_arm_Some_inst_40_41_2_62_tsni, match_scrut_arm_None_inst_40_41_tsni, match_xs_arm_Nil_inst_40_41_53_tsni, match_xs_arm_Cons_inst_40_41_53_tsni, match_first0_arm_None_inst_40_41_tsni, match_ls_arm_Nil_inst_40_41_2_60_tsni, match_x_arm_None_inst_40_41_2_61_tsni, match_x_arm_None_inst_40_41_2_62_tsni, match_xs_arm_Nil_inst_42_63_28_tsni, match_xs_arm_Cons_inst_42_63_28_tsni, match_ls_arm_Cons_inst_42_45_38_58_59_tsni, match_ls_arm_Cons_inst_42_45_38_32_22_54_55_tsni, match_first0_arm_None_inst_42_46_41_tsni, match_scrut_arm_None_inst_42_46_41_tsni, match_scrut_arm_Some_inst_42_46_41_tsni, match_xs_arm_Cons_inst_42_46_41_53_tsni, match_xs_arm_Nil_inst_42_46_41_53_tsni, match_hh_arm_H_inst_42_46_41_2_tsni, match_x_arm_Some_inst_42_46_41_2_62_tsni, match_x_arm_Some_inst_42_46_41_2_61_tsni, match_ls_arm_Cons_inst_42_46_41_2_60_tsni, match_x_arm_None_inst_42_46_41_2_62_tsni, match_x_arm_None_inst_42_46_41_2_61_tsni, match_ls_arm_Nil_inst_42_46_41_2_60_tsni, match_ks_arm_Cons_inst_42_46_41_tsni, match_scrut_arm_Some_inst_48_49_46_41_tsni, match_hh_arm_H_inst_48_49_46_41_2_tsni, match_ls_arm_Cons_inst_48_49_46_41_2_60_tsni, match_x_arm_Some_inst_48_49_46_41_2_61_tsni, match_x_arm_Some_inst_48_49_46_41_2_62_tsni, match_scrut_arm_None_inst_48_49_46_41_tsni, match_xs_arm_Nil_inst_48_49_46_41_53_tsni, match_xs_arm_Cons_inst_48_49_46_41_53_tsni, match_first0_arm_None_inst_48_49_46_41_tsni, match_ls_arm_Nil_inst_48_49_46_41_2_60_tsni, match_x_arm_None_inst_48_49_46_41_2_61_tsni, match_x_arm_None_inst_48_49_46_41_2_62_tsni, match_ls_arm_Cons_inst_48_49_45_38_32_22_54_55_tsni, match_ls_arm_Cons_inst_48_49_45_38_58_59_tsni, match_ks_arm_Cons_inst_48_49_46_41_tsni, match_xs_arm_Cons_inst_48_49_63_28_tsni, match_xs_arm_Nil_inst_48_49_63_28_tsni, match_xs_arm_Nil_inst_50_51_49_63_28_tsni, match_xs_arm_Cons_inst_50_51_49_63_28_tsni, match_ls_arm_Cons_inst_50_51_49_45_38_58_59_tsni, match_ls_arm_Cons_inst_50_51_49_45_38_32_22_54_55_tsni, match_first0_arm_None_inst_50_51_49_46_41_tsni, match_scrut_arm_None_inst_50_51_49_46_41_tsni, match_scrut_arm_Some_inst_50_51_49_46_41_tsni, match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni, match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni, match_hh_arm_H_inst_50_51_49_46_41_2_tsni, match_x_arm_Some_inst_50_51_49_46_41_2_62_tsni, match_x_arm_Some_inst_50_51_49_46_41_2_61_tsni, match_ls_arm_Cons_inst_50_51_49_46_41_2_60_tsni, match_x_arm_None_inst_50_51_49_46_41_2_62_tsni, match_x_arm_None_inst_50_51_49_46_41_2_61_tsni, match_ls_arm_Nil_inst_50_51_49_46_41_2_60_tsni, match_ks_arm_Cons_inst_50_51_49_46_41_tsni;
match_first0_arm_None_inst_0_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_0_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_0_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_0_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_0_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_0_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_first0_arm_None_inst_6_7_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_6_7_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_6_7_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_6_7_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_6_7_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_6_7_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_first0_arm_None_inst_8_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_8_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_8_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_8_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_8_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_8_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_8_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_8_53_tsni, _deforest_Cons_tail_inst_8_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_8_53_tsni;
  param1 = _deforest_Cons_tail_inst_8_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_8_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_8_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_9_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda6(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_9_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_9_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_9_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_9_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_9_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_9_53_tsni, _deforest_Cons_tail_inst_9_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_9_53_tsni;
  param1 = _deforest_Cons_tail_inst_9_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_9_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_9_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_13_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_13_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_13_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_13_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_13_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_13_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_13_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_13_53_tsni, _deforest_Cons_tail_inst_13_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_13_53_tsni;
  param1 = _deforest_Cons_tail_inst_13_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_13_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_13_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_14_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_14_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda9(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_14_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_14_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_14_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_14_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_14_53_tsni, _deforest_Cons_tail_inst_14_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_14_53_tsni;
  param1 = _deforest_Cons_tail_inst_14_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_14_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_14_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_15_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_15_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_15_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_15_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_15_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_15_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_15_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_15_53_tsni, _deforest_Cons_tail_inst_15_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_53_tsni;
  param1 = _deforest_Cons_tail_inst_15_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_15_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_15_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_16_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_16_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_16_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_16_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_16_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda10(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_16_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_16_53_tsni, _deforest_Cons_tail_inst_16_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_16_53_tsni;
  param1 = _deforest_Cons_tail_inst_16_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_16_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_16_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_17_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_17_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_17_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_17_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_17_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_17_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_17_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_17_53_tsni, _deforest_Cons_tail_inst_17_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_17_53_tsni;
  param1 = _deforest_Cons_tail_inst_17_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_17_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_17_53_tsni = (undefined, function (ys) {
  return ys
});
match_first0_arm_None_inst_18_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_18_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_18_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_18_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_18_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_18_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_18_53_tsni, _deforest_Cons_tail_inst_18_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_18_53_tsni;
  param1 = _deforest_Cons_tail_inst_18_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_18_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_18_53_tsni = (undefined, function (ys) {
  return ys
});
match_ls_arm_Cons_inst_19_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_19_54_55_tsni, _deforest_Cons_tail_inst_19_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_19_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_19_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_19_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_21_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_21_22_54_55_tsni, _deforest_Cons_tail_inst_21_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_21_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_21_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_21_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_xs_arm_Nil_inst_56_57_tsni = (undefined, function (f, z) {
  return z
});
match_xs_arm_Cons_inst_56_57_tsni = (undefined, function (f, z, _deforest_Cons_head_inst_56_57_tsni, _deforest_Cons_tail_inst_56_57_tsni) {
  let param0, param1, h, t, tmp;
  param0 = _deforest_Cons_head_inst_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_56_57_tsni;
  h = param0;
  t = param1;
  tmp = foldr_inst_56_57_tsni(f, z, t);
  return runtime.safeCall(f(h, tmp))
});
match_xs_arm_Cons_inst_23_24_tsni = (undefined, function (ys, _deforest_Cons_head_inst_23_24_tsni, _deforest_Cons_tail_inst_23_24_tsni) {
  let param0, param1, x, xs, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_Cons_head_inst_23_24_tsni;
  param1 = _deforest_Cons_tail_inst_23_24_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_23_24_tsni(xs, ys);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (f, z) => {
    return match_xs_arm_Cons_inst_56_57_tsni(f, z, _deforest_Cons_head, _deforest_Cons_tail)
  }
});
match_ls_arm_Cons_inst_30_58_59_tsni = (undefined, function (xs, _deforest_Cons_head_inst_30_58_59_tsni, _deforest_Cons_tail_inst_30_58_59_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_30_58_59_tsni;
  param1 = _deforest_Cons_tail_inst_30_58_59_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_30_58_59_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_30_58_59_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_30_32_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_30_32_22_54_55_tsni, _deforest_Cons_tail_inst_30_32_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_30_32_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_30_32_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_30_32_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_37_38_32_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_37_38_32_22_54_55_tsni, _deforest_Cons_tail_inst_37_38_32_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_37_38_32_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_37_38_32_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_37_38_32_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_37_38_58_59_tsni = (undefined, function (xs, _deforest_Cons_head_inst_37_38_58_59_tsni, _deforest_Cons_tail_inst_37_38_58_59_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_37_38_58_59_tsni;
  param1 = _deforest_Cons_tail_inst_37_38_58_59_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_37_38_58_59_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_37_38_58_59_tsni(xs, t)
  }
});
match_first0_arm_None_inst_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_39_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_39_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_39_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_39_53_tsni, _deforest_Cons_tail_inst_39_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_39_53_tsni;
  param1 = _deforest_Cons_tail_inst_39_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_39_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_39_53_tsni = (undefined, function (ys) {
  return ys
});
match_scrut_arm_Some_inst_40_41_tsni = (undefined, function (newCharAssocs, ks, _deforest_Some_x_inst_40_41_tsni) {
  let param0, newKeyHashSet;
  param0 = _deforest_Some_x_inst_40_41_tsni;
  newKeyHashSet = param0;
  return findhash__inst_40_41_tsni(newKeyHashSet, newCharAssocs, ks)
});
match_hh_arm_H_inst_40_41_2_tsni = (undefined, function (h, _deforest_H_f_inst_40_41_2_tsni, _deforest_H_s_inst_40_41_2_tsni, _deforest_H_ls_inst_40_41_2_tsni) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x, _deforest_H_f, _deforest_H_s, _deforest_H_ls, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Some_x1, _deforest_Some_x2;
  param0 = _deforest_H_f_inst_40_41_2_tsni;
  param1 = _deforest_H_s_inst_40_41_2_tsni;
  param2 = _deforest_H_ls_inst_40_41_2_tsni;
  lo = param0;
  hi = param1;
  hs = param2;
  tmp = minm_inst_40_41_2_62_tsni(lo, h);
  lo_ = tmp;
  tmp1 = maxm_inst_40_41_2_61_tsni(hi, h);
  hi_ = tmp1;
  tmp2 = inList_inst_40_41_2_60_tsni(h, hs);
  lambda$this = runtime.safeCall(lambda5(lo_, hi_));
  scrut = runtime.short_or(tmp2, lambda$this);
  if (scrut === true) {
    return (newCharAssocs, ks) => {
      return match_scrut_arm_None_inst_40_41_tsni(newCharAssocs, ks)
    }
  } else {
    _deforest_Some_x2 = lo_;
    tmp3 = (y) => {
      return match_x_arm_Some_inst_40_41_2_62_tsni(y, _deforest_Some_x2)
    };
    _deforest_Some_x1 = hi_;
    tmp4 = (y) => {
      return match_x_arm_Some_inst_40_41_2_61_tsni(y, _deforest_Some_x1)
    };
    _deforest_Cons_head = h;
    _deforest_Cons_tail = hs;
    tmp5 = (x) => {
      return match_ls_arm_Cons_inst_40_41_2_60_tsni(x, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_H_f = tmp3;
    _deforest_H_s = tmp4;
    _deforest_H_ls = tmp5;
    tmp6 = (h1) => {
      return match_hh_arm_H_inst_40_41_2_tsni(h1, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
    };
    _deforest_Some_x = tmp6;
    return (newCharAssocs, ks) => {
      return match_scrut_arm_Some_inst_40_41_tsni(newCharAssocs, ks, _deforest_Some_x)
    }
  }
});
match_ls_arm_Cons_inst_40_41_2_60_tsni = (undefined, function (x, _deforest_Cons_head_inst_40_41_2_60_tsni, _deforest_Cons_tail_inst_40_41_2_60_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_40_41_2_60_tsni;
  param1 = _deforest_Cons_tail_inst_40_41_2_60_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_40_41_2_60_tsni(x, t)
  }
});
match_x_arm_Some_inst_40_41_2_61_tsni = (undefined, function (y, _deforest_Some_x_inst_40_41_2_61_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_40_41_2_61_tsni;
  x = param0;
  return NofibPrelude.max(x, y)
});
match_x_arm_Some_inst_40_41_2_62_tsni = (undefined, function (y, _deforest_Some_x_inst_40_41_2_62_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_40_41_2_62_tsni;
  x = param0;
  return NofibPrelude.min(x, y)
});
match_scrut_arm_None_inst_40_41_tsni = (undefined, function (newCharAssocs, ks) {
  return cichelli1.NotEver(1)
});
match_xs_arm_Nil_inst_40_41_53_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_40_41_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_40_41_53_tsni, _deforest_Cons_tail_inst_40_41_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_40_41_53_tsni;
  param1 = _deforest_Cons_tail_inst_40_41_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_40_41_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_first0_arm_None_inst_40_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_40_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_40_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_40_41_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_40_41_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_40_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Nil_inst_40_41_2_60_tsni = (undefined, function (x) {
  return false
});
match_x_arm_None_inst_40_41_2_61_tsni = (undefined, function (y) {
  return y
});
match_x_arm_None_inst_40_41_2_62_tsni = (undefined, function (y) {
  return y
});
match_xs_arm_Nil_inst_42_63_28_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_42_63_28_tsni = (undefined, function (f, _deforest_Cons_head_inst_42_63_28_tsni, _deforest_Cons_tail_inst_42_63_28_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_42_63_28_tsni;
  param1 = _deforest_Cons_tail_inst_42_63_28_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_42_63_28_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_ls_arm_Cons_inst_42_45_38_58_59_tsni = (undefined, function (xs, _deforest_Cons_head_inst_42_45_38_58_59_tsni, _deforest_Cons_tail_inst_42_45_38_58_59_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_42_45_38_58_59_tsni;
  param1 = _deforest_Cons_tail_inst_42_45_38_58_59_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_42_45_38_58_59_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_42_45_38_58_59_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_42_45_38_32_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_42_45_38_32_22_54_55_tsni, _deforest_Cons_tail_inst_42_45_38_32_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_42_45_38_32_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_42_45_38_32_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_42_45_38_32_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_first0_arm_None_inst_42_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_42_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_42_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_42_46_41_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_42_46_41_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_42_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_None_inst_42_46_41_tsni = (undefined, function (newCharAssocs, ks) {
  return cichelli1.NotEver(1)
});
match_scrut_arm_Some_inst_42_46_41_tsni = (undefined, function (newCharAssocs, ks, _deforest_Some_x_inst_42_46_41_tsni) {
  let param0, newKeyHashSet;
  param0 = _deforest_Some_x_inst_42_46_41_tsni;
  newKeyHashSet = param0;
  return findhash__inst_42_46_41_tsni(newKeyHashSet, newCharAssocs, ks)
});
match_xs_arm_Cons_inst_42_46_41_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_42_46_41_53_tsni, _deforest_Cons_tail_inst_42_46_41_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_42_46_41_53_tsni;
  param1 = _deforest_Cons_tail_inst_42_46_41_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_42_46_41_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_42_46_41_53_tsni = (undefined, function (ys) {
  return ys
});
match_hh_arm_H_inst_42_46_41_2_tsni = (undefined, function (h, _deforest_H_f_inst_42_46_41_2_tsni, _deforest_H_s_inst_42_46_41_2_tsni, _deforest_H_ls_inst_42_46_41_2_tsni) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x, _deforest_H_f, _deforest_H_s, _deforest_H_ls, _deforest_Some_x1, _deforest_Some_x2, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_H_f_inst_42_46_41_2_tsni;
  param1 = _deforest_H_s_inst_42_46_41_2_tsni;
  param2 = _deforest_H_ls_inst_42_46_41_2_tsni;
  lo = param0;
  hi = param1;
  hs = param2;
  tmp = minm_inst_42_46_41_2_62_tsni(lo, h);
  lo_ = tmp;
  tmp1 = maxm_inst_42_46_41_2_61_tsni(hi, h);
  hi_ = tmp1;
  tmp2 = inList_inst_42_46_41_2_60_tsni(h, hs);
  lambda$this = runtime.safeCall(lambda5(lo_, hi_));
  scrut = runtime.short_or(tmp2, lambda$this);
  if (scrut === true) {
    return (newCharAssocs, ks) => {
      return match_scrut_arm_None_inst_42_46_41_tsni(newCharAssocs, ks)
    }
  } else {
    _deforest_Some_x1 = lo_;
    tmp3 = (y) => {
      return match_x_arm_Some_inst_42_46_41_2_62_tsni(y, _deforest_Some_x1)
    };
    _deforest_Some_x2 = hi_;
    tmp4 = (y) => {
      return match_x_arm_Some_inst_42_46_41_2_61_tsni(y, _deforest_Some_x2)
    };
    _deforest_Cons_head = h;
    _deforest_Cons_tail = hs;
    tmp5 = (x) => {
      return match_ls_arm_Cons_inst_42_46_41_2_60_tsni(x, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_H_f = tmp3;
    _deforest_H_s = tmp4;
    _deforest_H_ls = tmp5;
    tmp6 = (h1) => {
      return match_hh_arm_H_inst_42_46_41_2_tsni(h1, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
    };
    _deforest_Some_x = tmp6;
    return (newCharAssocs, ks) => {
      return match_scrut_arm_Some_inst_42_46_41_tsni(newCharAssocs, ks, _deforest_Some_x)
    }
  }
});
match_x_arm_Some_inst_42_46_41_2_62_tsni = (undefined, function (y, _deforest_Some_x_inst_42_46_41_2_62_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_42_46_41_2_62_tsni;
  x = param0;
  return NofibPrelude.min(x, y)
});
match_x_arm_Some_inst_42_46_41_2_61_tsni = (undefined, function (y, _deforest_Some_x_inst_42_46_41_2_61_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_42_46_41_2_61_tsni;
  x = param0;
  return NofibPrelude.max(x, y)
});
match_ls_arm_Cons_inst_42_46_41_2_60_tsni = (undefined, function (x, _deforest_Cons_head_inst_42_46_41_2_60_tsni, _deforest_Cons_tail_inst_42_46_41_2_60_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_42_46_41_2_60_tsni;
  param1 = _deforest_Cons_tail_inst_42_46_41_2_60_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_42_46_41_2_60_tsni(x, t)
  }
});
match_x_arm_None_inst_42_46_41_2_62_tsni = (undefined, function (y) {
  return y
});
match_x_arm_None_inst_42_46_41_2_61_tsni = (undefined, function (y) {
  return y
});
match_ls_arm_Nil_inst_42_46_41_2_60_tsni = (undefined, function (x) {
  return false
});
match_ks_arm_Cons_inst_42_46_41_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_42_46_41_tsni, _deforest_Cons_tail_inst_42_46_41_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_42_46_41_tsni;
  param1 = _deforest_Cons_tail_inst_42_46_41_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tmp = assocm_inst_42_46_41_1_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_Some_inst_48_49_46_41_tsni = (undefined, function (newCharAssocs, ks, _deforest_Some_x_inst_48_49_46_41_tsni) {
  let param0, newKeyHashSet;
  param0 = _deforest_Some_x_inst_48_49_46_41_tsni;
  newKeyHashSet = param0;
  return findhash__inst_48_49_46_41_tsni(newKeyHashSet, newCharAssocs, ks)
});
match_hh_arm_H_inst_48_49_46_41_2_tsni = (undefined, function (h, _deforest_H_f_inst_48_49_46_41_2_tsni, _deforest_H_s_inst_48_49_46_41_2_tsni, _deforest_H_ls_inst_48_49_46_41_2_tsni) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x, _deforest_H_f, _deforest_H_s, _deforest_H_ls, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Some_x1, _deforest_Some_x2;
  param0 = _deforest_H_f_inst_48_49_46_41_2_tsni;
  param1 = _deforest_H_s_inst_48_49_46_41_2_tsni;
  param2 = _deforest_H_ls_inst_48_49_46_41_2_tsni;
  lo = param0;
  hi = param1;
  hs = param2;
  tmp = minm_inst_48_49_46_41_2_62_tsni(lo, h);
  lo_ = tmp;
  tmp1 = maxm_inst_48_49_46_41_2_61_tsni(hi, h);
  hi_ = tmp1;
  tmp2 = inList_inst_48_49_46_41_2_60_tsni(h, hs);
  lambda$this = runtime.safeCall(lambda5(lo_, hi_));
  scrut = runtime.short_or(tmp2, lambda$this);
  if (scrut === true) {
    return (newCharAssocs, ks) => {
      return match_scrut_arm_None_inst_48_49_46_41_tsni(newCharAssocs, ks)
    }
  } else {
    _deforest_Some_x2 = lo_;
    tmp3 = (y) => {
      return match_x_arm_Some_inst_48_49_46_41_2_62_tsni(y, _deforest_Some_x2)
    };
    _deforest_Some_x1 = hi_;
    tmp4 = (y) => {
      return match_x_arm_Some_inst_48_49_46_41_2_61_tsni(y, _deforest_Some_x1)
    };
    _deforest_Cons_head = h;
    _deforest_Cons_tail = hs;
    tmp5 = (x) => {
      return match_ls_arm_Cons_inst_48_49_46_41_2_60_tsni(x, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_H_f = tmp3;
    _deforest_H_s = tmp4;
    _deforest_H_ls = tmp5;
    tmp6 = (h1) => {
      return match_hh_arm_H_inst_48_49_46_41_2_tsni(h1, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
    };
    _deforest_Some_x = tmp6;
    return (newCharAssocs, ks) => {
      return match_scrut_arm_Some_inst_48_49_46_41_tsni(newCharAssocs, ks, _deforest_Some_x)
    }
  }
});
match_ls_arm_Cons_inst_48_49_46_41_2_60_tsni = (undefined, function (x, _deforest_Cons_head_inst_48_49_46_41_2_60_tsni, _deforest_Cons_tail_inst_48_49_46_41_2_60_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_48_49_46_41_2_60_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_46_41_2_60_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_48_49_46_41_2_60_tsni(x, t)
  }
});
match_x_arm_Some_inst_48_49_46_41_2_61_tsni = (undefined, function (y, _deforest_Some_x_inst_48_49_46_41_2_61_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_48_49_46_41_2_61_tsni;
  x = param0;
  return NofibPrelude.max(x, y)
});
match_x_arm_Some_inst_48_49_46_41_2_62_tsni = (undefined, function (y, _deforest_Some_x_inst_48_49_46_41_2_62_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_48_49_46_41_2_62_tsni;
  x = param0;
  return NofibPrelude.min(x, y)
});
match_scrut_arm_None_inst_48_49_46_41_tsni = (undefined, function (newCharAssocs, ks) {
  return cichelli1.NotEver(1)
});
match_xs_arm_Nil_inst_48_49_46_41_53_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_48_49_46_41_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_48_49_46_41_53_tsni, _deforest_Cons_tail_inst_48_49_46_41_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_48_49_46_41_53_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_46_41_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_48_49_46_41_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_first0_arm_None_inst_48_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_48_49_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_48_49_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_48_49_46_41_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_48_49_46_41_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_48_49_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Nil_inst_48_49_46_41_2_60_tsni = (undefined, function (x) {
  return false
});
match_x_arm_None_inst_48_49_46_41_2_61_tsni = (undefined, function (y) {
  return y
});
match_x_arm_None_inst_48_49_46_41_2_62_tsni = (undefined, function (y) {
  return y
});
match_ls_arm_Cons_inst_48_49_45_38_32_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_48_49_45_38_32_22_54_55_tsni, _deforest_Cons_tail_inst_48_49_45_38_32_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_48_49_45_38_32_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_45_38_32_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_48_49_45_38_32_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_48_49_45_38_58_59_tsni = (undefined, function (xs, _deforest_Cons_head_inst_48_49_45_38_58_59_tsni, _deforest_Cons_tail_inst_48_49_45_38_58_59_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_48_49_45_38_58_59_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_45_38_58_59_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_48_49_45_38_58_59_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_48_49_45_38_58_59_tsni(xs, t)
  }
});
match_ks_arm_Cons_inst_48_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_48_49_46_41_tsni, _deforest_Cons_tail_inst_48_49_46_41_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_48_49_46_41_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_46_41_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tmp = assocm_inst_48_49_46_41_1_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_48_49_63_28_tsni = (undefined, function (f, _deforest_Cons_head_inst_48_49_63_28_tsni, _deforest_Cons_tail_inst_48_49_63_28_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_48_49_63_28_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_63_28_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_48_49_63_28_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Nil_inst_48_49_63_28_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_50_51_49_63_28_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_50_51_49_63_28_tsni = (undefined, function (f, _deforest_Cons_head_inst_50_51_49_63_28_tsni, _deforest_Cons_tail_inst_50_51_49_63_28_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_50_51_49_63_28_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_63_28_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_50_51_49_63_28_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_ls_arm_Cons_inst_50_51_49_45_38_58_59_tsni = (undefined, function (xs, _deforest_Cons_head_inst_50_51_49_45_38_58_59_tsni, _deforest_Cons_tail_inst_50_51_49_45_38_58_59_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_50_51_49_45_38_58_59_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_45_38_58_59_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_50_51_49_45_38_58_59_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_50_51_49_45_38_58_59_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_50_51_49_45_38_32_22_54_55_tsni = (undefined, function (p, _deforest_Cons_head_inst_50_51_49_45_38_32_22_54_55_tsni, _deforest_Cons_tail_inst_50_51_49_45_38_32_22_54_55_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_50_51_49_45_38_32_22_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_45_38_32_22_54_55_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_50_51_49_45_38_32_22_54_55_tsni(p, t)
  } else {
    return false
  }
});
match_first0_arm_None_inst_50_51_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_50_51_49_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_50_51_49_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_50_51_49_46_41_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_50_51_49_46_41_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_50_51_49_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_None_inst_50_51_49_46_41_tsni = (undefined, function (newCharAssocs, ks) {
  return cichelli1.NotEver(1)
});
match_scrut_arm_Some_inst_50_51_49_46_41_tsni = (undefined, function (newCharAssocs, ks, _deforest_Some_x_inst_50_51_49_46_41_tsni) {
  let param0, newKeyHashSet;
  param0 = _deforest_Some_x_inst_50_51_49_46_41_tsni;
  newKeyHashSet = param0;
  return findhash__inst_50_51_49_46_41_tsni(newKeyHashSet, newCharAssocs, ks)
});
match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni = (undefined, function (ys, _deforest_Cons_head_inst_50_51_49_46_41_53_tsni, _deforest_Cons_tail_inst_50_51_49_46_41_53_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_50_51_49_46_41_53_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_46_41_53_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_50_51_49_46_41_53_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni = (undefined, function (ys) {
  return ys
});
match_hh_arm_H_inst_50_51_49_46_41_2_tsni = (undefined, function (h, _deforest_H_f_inst_50_51_49_46_41_2_tsni, _deforest_H_s_inst_50_51_49_46_41_2_tsni, _deforest_H_ls_inst_50_51_49_46_41_2_tsni) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x, _deforest_H_f, _deforest_H_s, _deforest_H_ls, _deforest_Some_x1, _deforest_Some_x2, _deforest_Cons_head, _deforest_Cons_tail;
  param0 = _deforest_H_f_inst_50_51_49_46_41_2_tsni;
  param1 = _deforest_H_s_inst_50_51_49_46_41_2_tsni;
  param2 = _deforest_H_ls_inst_50_51_49_46_41_2_tsni;
  lo = param0;
  hi = param1;
  hs = param2;
  tmp = minm_inst_50_51_49_46_41_2_62_tsni(lo, h);
  lo_ = tmp;
  tmp1 = maxm_inst_50_51_49_46_41_2_61_tsni(hi, h);
  hi_ = tmp1;
  tmp2 = inList_inst_50_51_49_46_41_2_60_tsni(h, hs);
  lambda$this = runtime.safeCall(lambda5(lo_, hi_));
  scrut = runtime.short_or(tmp2, lambda$this);
  if (scrut === true) {
    return (newCharAssocs, ks) => {
      return match_scrut_arm_None_inst_50_51_49_46_41_tsni(newCharAssocs, ks)
    }
  } else {
    _deforest_Some_x1 = lo_;
    tmp3 = (y) => {
      return match_x_arm_Some_inst_50_51_49_46_41_2_62_tsni(y, _deforest_Some_x1)
    };
    _deforest_Some_x2 = hi_;
    tmp4 = (y) => {
      return match_x_arm_Some_inst_50_51_49_46_41_2_61_tsni(y, _deforest_Some_x2)
    };
    _deforest_Cons_head = h;
    _deforest_Cons_tail = hs;
    tmp5 = (x) => {
      return match_ls_arm_Cons_inst_50_51_49_46_41_2_60_tsni(x, _deforest_Cons_head, _deforest_Cons_tail)
    };
    _deforest_H_f = tmp3;
    _deforest_H_s = tmp4;
    _deforest_H_ls = tmp5;
    tmp6 = (h1) => {
      return match_hh_arm_H_inst_50_51_49_46_41_2_tsni(h1, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
    };
    _deforest_Some_x = tmp6;
    return (newCharAssocs, ks) => {
      return match_scrut_arm_Some_inst_50_51_49_46_41_tsni(newCharAssocs, ks, _deforest_Some_x)
    }
  }
});
match_x_arm_Some_inst_50_51_49_46_41_2_62_tsni = (undefined, function (y, _deforest_Some_x_inst_50_51_49_46_41_2_62_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_50_51_49_46_41_2_62_tsni;
  x = param0;
  return NofibPrelude.min(x, y)
});
match_x_arm_Some_inst_50_51_49_46_41_2_61_tsni = (undefined, function (y, _deforest_Some_x_inst_50_51_49_46_41_2_61_tsni) {
  let param0, x;
  param0 = _deforest_Some_x_inst_50_51_49_46_41_2_61_tsni;
  x = param0;
  return NofibPrelude.max(x, y)
});
match_ls_arm_Cons_inst_50_51_49_46_41_2_60_tsni = (undefined, function (x, _deforest_Cons_head_inst_50_51_49_46_41_2_60_tsni, _deforest_Cons_tail_inst_50_51_49_46_41_2_60_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_50_51_49_46_41_2_60_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_46_41_2_60_tsni;
  h = param0;
  t = param1;
  scrut = x === h;
  if (scrut === true) {
    return true
  } else {
    return inList_inst_50_51_49_46_41_2_60_tsni(x, t)
  }
});
match_x_arm_None_inst_50_51_49_46_41_2_62_tsni = (undefined, function (y) {
  return y
});
match_x_arm_None_inst_50_51_49_46_41_2_61_tsni = (undefined, function (y) {
  return y
});
match_ls_arm_Nil_inst_50_51_49_46_41_2_60_tsni = (undefined, function (x) {
  return false
});
match_ks_arm_Cons_inst_50_51_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_50_51_49_46_41_tsni, _deforest_Cons_tail_inst_50_51_49_46_41_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_50_51_49_46_41_tsni;
  param1 = _deforest_Cons_tail_inst_50_51_49_46_41_tsni;
  if (param0 instanceof cichelli.K.class) {
    param01 = param0.s;
    param11 = param0.c1;
    param2 = param0.c2;
    param3 = param0.i;
    s = param01;
    a = param11;
    z = param2;
    n = param3;
    ks = param1;
    tmp = assocm_inst_50_51_49_46_41_1_tsni(a, charAssocs);
    tmp1 = cichelli.assocm(z, charAssocs);
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = tmp1;
    arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1) => {
      let first1, first0;
      first0 = _deforest_Deforest_Arr_2_0;
      first1 = _deforest_Deforest_Arr_2_1;
      return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks1, first1))
    };
    scrut = arr;
    return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks))
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
findhash__inst_0_tsni = function findhash__inst_0_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_0_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_0_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_0_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_0_tsni = function lambda$_inst_0_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_0_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_0_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_0_tsni1 = function lambda$_inst_0_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_0_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_0_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_0_tsni2 = function lambda$_inst_0_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    tmp = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(arr, tmp);
    return tryy$(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_0_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_0_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_0_tsni3 = function lambda$_inst_0_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_0_1_tsni = function assocm_inst_0_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_0_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$(keyHashSet, charAssocs, s, a, z1, n, ks, NofibPrelude.Nil)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_0_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_0_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_0_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_0_2_tsni = function hinsert_inst_0_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_0_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_0_3_tsni = function lscomp1_inst_0_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_0_3_tsni(ls1)
  }
});
lambda$_inst_0_3_tsni = function lambda$_inst_0_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_0_3_tsni = function lscomp2$_inst_0_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_0_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_0_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_0_3_tsni1 = function lambda$_inst_0_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_0_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_0_3_4_tsni = function enumFromTo_lz_inst_0_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_0_3_4_tsni(a, b)
  }
});
lambda$_inst_0_3_4_tsni = function lambda$_inst_0_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_0_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_0_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_0_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_0_5_tsni = function enumFromTo_lz_inst_0_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_0_5_tsni(a, b)
  }
});
lambda$_inst_0_5_tsni = function lambda$_inst_0_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_0_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_0_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_0_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_6_7_tsni = function findhash__inst_6_7_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_6_7_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_6_7_tsni = function tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.append(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_6_7_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_6_7_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_6_7_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_6_7_tsni = function lambda$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_6_7_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_6_7_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_6_7_tsni1 = function lambda$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_6_7_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_6_7_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_6_7_tsni2 = function lambda$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    tmp = NofibPrelude.Cons(arr1, NofibPrelude.Nil);
    tmp1 = NofibPrelude.Cons(arr, tmp);
    return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_6_7_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_6_7_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_6_7_tsni3 = function lambda$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lscomp1_inst_6_7_3_tsni = function lscomp1_inst_6_7_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_6_7_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_6_7_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_6_7_3_tsni(ls1)
  }
});
lambda$_inst_6_7_3_tsni = function lambda$_inst_6_7_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_6_7_3_tsni = function lscomp2$_inst_6_7_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_6_7_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_6_7_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_6_7_3_tsni1 = function lambda$_inst_6_7_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_6_7_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_6_7_3_4_tsni = function enumFromTo_lz_inst_6_7_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_6_7_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_6_7_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_6_7_3_4_tsni(a, b)
  }
});
lambda$_inst_6_7_3_4_tsni = function lambda$_inst_6_7_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_6_7_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_6_7_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_6_7_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_6_7_5_tsni = function enumFromTo_lz_inst_6_7_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_6_7_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_6_7_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_6_7_5_tsni(a, b)
  }
});
lambda$_inst_6_7_5_tsni = function lambda$_inst_6_7_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_6_7_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_6_7_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_6_7_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
hinsert_inst_6_7_2_tsni = function hinsert_inst_6_7_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_6_7_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assocm_inst_6_7_1_tsni = function assocm_inst_6_7_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, NofibPrelude.Nil)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_6_7_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
findhash__inst_8_tsni = function findhash__inst_8_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_8_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_8_tsni = function tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_8_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_8_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_8_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_8_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_8_tsni = function lambda$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_8_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_8_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_8_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_8_tsni1 = function lambda$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_8_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_8_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_8_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_8_tsni2 = function lambda$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_8_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_8_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_8_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_8_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$10(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
assocm_inst_8_1_tsni = function assocm_inst_8_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_8_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_8_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_8_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_8_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_8_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_8_2_tsni = function hinsert_inst_8_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_8_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_8_3_tsni = function lscomp1_inst_8_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_8_3_tsni(ls1)
  }
});
lambda$_inst_8_3_tsni = function lambda$_inst_8_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_8_3_tsni = function lscomp2$_inst_8_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_8_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_8_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_8_3_tsni1 = function lambda$_inst_8_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_8_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_8_3_4_tsni = function enumFromTo_lz_inst_8_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_8_3_4_tsni(a, b)
  }
});
lambda$_inst_8_3_4_tsni = function lambda$_inst_8_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_8_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_8_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_8_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_8_5_tsni = function enumFromTo_lz_inst_8_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_8_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_8_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_8_5_tsni(a, b)
  }
});
lambda$_inst_8_5_tsni = function lambda$_inst_8_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_8_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_8_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_8_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_9_tsni = function findhash__inst_9_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_9_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_9_tsni = function tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_9_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_9_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_9_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_9_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_9_tsni = function lambda$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_9_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_9_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_9_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_9_tsni1 = function lambda$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_9_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_9_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_9_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_9_tsni2 = function lambda$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_9_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_9_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_9_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_9_tsni3 = function lambda$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_9_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_9_1_tsni = function assocm_inst_9_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_9_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_9_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_9_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_9_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_9_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_9_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_9_2_tsni = function hinsert_inst_9_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_9_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_9_3_tsni = function lscomp1_inst_9_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_9_3_tsni(ls1)
  }
});
lambda$_inst_9_3_tsni = function lambda$_inst_9_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_9_3_tsni = function lscomp2$_inst_9_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_9_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_9_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_9_3_tsni1 = function lambda$_inst_9_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_9_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_9_3_4_tsni = function enumFromTo_lz_inst_9_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_9_3_4_tsni(a, b)
  }
});
lambda$_inst_9_3_4_tsni = function lambda$_inst_9_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_9_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_9_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_9_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_9_5_tsni = function enumFromTo_lz_inst_9_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_9_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_9_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_9_5_tsni(a, b)
  }
});
lambda$_inst_9_5_tsni = function lambda$_inst_9_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_9_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_9_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_9_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
lscomp1_inst_10_tsni = function lscomp1_inst_10_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_10_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_10_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$8(ls1)
  }
});
lscomp2$_inst_10_tsni = function lscomp2$_inst_10_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_10_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_10_tsni(ls1, m, ms, n, ns)
  }
});
lambda$_inst_10_tsni = function lambda$_inst_10_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_10_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_10_4_tsni = function enumFromTo_lz_inst_10_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_10_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_10_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_10_4_tsni(a, b)
  }
});
lambda$_inst_10_4_tsni = function lambda$_inst_10_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_10_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_10_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_10_tsni(ms)
    }
  }
};
lscomp1_inst_11_tsni = function lscomp1_inst_11_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda7(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda$_inst_11_tsni = function lambda$_inst_11_tsni(ls1) {
  let scrut, param0, param1, m, ms, tmp, tmp1;
  scrut = NofibPrelude.force(ls1);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.LzNil
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    m = param0;
    ms = param1;
    tmp = enumFromTo_lz_inst_11_4_tsni(0, cichelli1.maxval);
    tmp1 = lscomp2$_inst_11_tsni(ls1, m, ms, tmp);
    return NofibPrelude.force(tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2$_inst_11_tsni = function lscomp2$_inst_11_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_11_tsni = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_11_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_11_tsni1 = function lambda$_inst_11_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_11_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_11_4_tsni = function enumFromTo_lz_inst_11_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_11_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_11_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_11_4_tsni(a, b)
  }
});
lambda$_inst_11_4_tsni = function lambda$_inst_11_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_11_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_11_tsni(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_11_tsni(ms)
    }
  }
};
lambda_inst_12_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_12_tsni(ls1)
  }
});
lambda$_inst_12_tsni = function lambda$_inst_12_tsni(ls1) {
  let scrut, param0, param1, m, ms, tmp, tmp1;
  scrut = NofibPrelude.force(ls1);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.LzNil
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    m = param0;
    ms = param1;
    tmp = enumFromTo_lz_inst_12_4_tsni(0, cichelli1.maxval);
    tmp1 = lscomp2$_inst_12_tsni(ls1, m, ms, tmp);
    return NofibPrelude.force(tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2$_inst_12_tsni = function lscomp2$_inst_12_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_12_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_12_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_12_tsni1 = function lambda$_inst_12_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_12_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_12_4_tsni = function enumFromTo_lz_inst_12_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_12_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_12_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_12_4_tsni(a, b)
  }
});
lambda$_inst_12_4_tsni = function lambda$_inst_12_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_12_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_12_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1(ms)
    }
  }
};
findhash__inst_13_tsni = function findhash__inst_13_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_13_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_13_tsni = function tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_13_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_13_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_13_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_13_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_13_tsni = function lambda$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_13_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_13_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_13_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_13_tsni1 = function lambda$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_13_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_13_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$7(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda_inst_13_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_13_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_13_tsni2 = function lambda$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_13_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_13_1_tsni = function assocm_inst_13_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_13_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_13_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_13_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_13_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_13_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_13_2_tsni = function hinsert_inst_13_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_13_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_13_3_tsni = function lscomp1_inst_13_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_13_3_tsni(ls1)
  }
});
lambda$_inst_13_3_tsni = function lambda$_inst_13_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_13_3_tsni = function lscomp2$_inst_13_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_13_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_13_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_13_3_tsni1 = function lambda$_inst_13_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_13_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_13_3_4_tsni = function enumFromTo_lz_inst_13_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_13_3_4_tsni(a, b)
  }
});
lambda$_inst_13_3_4_tsni = function lambda$_inst_13_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_13_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_13_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_13_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_13_5_tsni = function enumFromTo_lz_inst_13_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_13_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_13_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_13_5_tsni(a, b)
  }
});
lambda$_inst_13_5_tsni = function lambda$_inst_13_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_13_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_13_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_13_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_14_tsni = function findhash__inst_14_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_14_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_14_tsni = function tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_14_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_14_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_14_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_14_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_14_tsni = function lambda$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_14_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_14_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_14_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_14_tsni1 = function lambda$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_14_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda$_inst_14_tsni2 = function lambda$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_14_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_14_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_14_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_14_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_14_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_14_tsni3 = function lambda$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_14_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_14_1_tsni = function assocm_inst_14_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_14_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_14_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_14_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_14_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_14_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_14_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_14_2_tsni = function hinsert_inst_14_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_14_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_14_3_tsni = function lscomp1_inst_14_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_14_3_tsni(ls1)
  }
});
lambda$_inst_14_3_tsni = function lambda$_inst_14_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_14_3_tsni = function lscomp2$_inst_14_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_14_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_14_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_14_3_tsni1 = function lambda$_inst_14_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_14_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_14_3_4_tsni = function enumFromTo_lz_inst_14_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_14_3_4_tsni(a, b)
  }
});
lambda$_inst_14_3_4_tsni = function lambda$_inst_14_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_14_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_14_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_14_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_14_5_tsni = function enumFromTo_lz_inst_14_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_14_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_14_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_14_5_tsni(a, b)
  }
});
lambda$_inst_14_5_tsni = function lambda$_inst_14_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_14_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_14_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_14_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_15_tsni = function findhash__inst_15_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_15_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_15_tsni = function tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_15_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_15_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_15_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_15_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_15_tsni = function lambda$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_15_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_15_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$6(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda_inst_15_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_15_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_15_tsni1 = function lambda$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_15_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_15_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_15_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_15_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_15_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_15_tsni2 = function lambda$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_15_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_15_1_tsni = function assocm_inst_15_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_15_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_15_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_15_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_15_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_15_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_15_2_tsni = function hinsert_inst_15_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_15_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_15_3_tsni = function lscomp1_inst_15_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_15_3_tsni(ls1)
  }
});
lambda$_inst_15_3_tsni = function lambda$_inst_15_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_15_3_tsni = function lscomp2$_inst_15_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_15_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_15_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_15_3_tsni1 = function lambda$_inst_15_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_15_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_15_3_4_tsni = function enumFromTo_lz_inst_15_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_15_3_4_tsni(a, b)
  }
});
lambda$_inst_15_3_4_tsni = function lambda$_inst_15_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_15_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_15_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_15_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_15_5_tsni = function enumFromTo_lz_inst_15_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_15_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_15_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_15_5_tsni(a, b)
  }
});
lambda$_inst_15_5_tsni = function lambda$_inst_15_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_15_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_15_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_15_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_16_tsni = function findhash__inst_16_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_16_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_16_tsni = function tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_16_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_16_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_16_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_16_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_16_tsni = function lambda$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_16_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda$_inst_16_tsni1 = function lambda$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_16_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_16_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_16_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_16_tsni2 = function lambda$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_16_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_16_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_16_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_16_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_16_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_16_tsni3 = function lambda$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_16_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_16_1_tsni = function assocm_inst_16_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_16_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_16_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_16_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_16_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_16_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_16_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_16_2_tsni = function hinsert_inst_16_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_16_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_16_3_tsni = function lscomp1_inst_16_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_16_3_tsni(ls1)
  }
});
lambda$_inst_16_3_tsni = function lambda$_inst_16_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_16_3_tsni = function lscomp2$_inst_16_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_16_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_16_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_16_3_tsni1 = function lambda$_inst_16_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_16_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_16_3_4_tsni = function enumFromTo_lz_inst_16_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_16_3_4_tsni(a, b)
  }
});
lambda$_inst_16_3_4_tsni = function lambda$_inst_16_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_16_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_16_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_16_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_16_5_tsni = function enumFromTo_lz_inst_16_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_16_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_16_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_16_5_tsni(a, b)
  }
});
lambda$_inst_16_5_tsni = function lambda$_inst_16_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_16_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_16_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_16_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_17_tsni = function findhash__inst_17_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_17_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_17_tsni = function tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_17_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_17_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_17_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_17_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$5(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda_inst_17_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_17_tsni = function lambda$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_17_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_17_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_17_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_17_tsni1 = function lambda$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_17_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_17_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_17_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_17_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_17_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_17_tsni2 = function lambda$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_17_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_17_1_tsni = function assocm_inst_17_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_17_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_17_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_17_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_17_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_17_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_17_2_tsni = function hinsert_inst_17_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_17_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_17_3_tsni = function lscomp1_inst_17_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_17_3_tsni(ls1)
  }
});
lambda$_inst_17_3_tsni = function lambda$_inst_17_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_17_3_tsni = function lscomp2$_inst_17_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_17_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_17_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_17_3_tsni1 = function lambda$_inst_17_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_17_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_17_3_4_tsni = function enumFromTo_lz_inst_17_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_17_3_4_tsni(a, b)
  }
});
lambda$_inst_17_3_4_tsni = function lambda$_inst_17_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_17_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_17_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_17_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_17_5_tsni = function enumFromTo_lz_inst_17_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_17_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_17_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_17_5_tsni(a, b)
  }
});
lambda$_inst_17_5_tsni = function lambda$_inst_17_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_17_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_17_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_17_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_18_tsni = function findhash__inst_18_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_18_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_18_tsni = function tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_18_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_18_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_18_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda$_inst_18_tsni = function lambda$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_18_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_18_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_18_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_18_tsni1 = function lambda$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_18_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_18_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_18_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_18_tsni2 = function lambda$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_18_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_18_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_18_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_18_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_18_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_18_tsni3 = function lambda$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_18_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_18_1_tsni = function assocm_inst_18_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda11(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_18_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_18_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_18_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_18_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_18_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_18_2_tsni = function hinsert_inst_18_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return findhash__inst_18_tsni(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_18_3_tsni = function lscomp1_inst_18_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_18_3_tsni(ls1)
  }
});
lambda$_inst_18_3_tsni = function lambda$_inst_18_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_18_3_tsni = function lscomp2$_inst_18_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_18_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_18_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_18_3_tsni1 = function lambda$_inst_18_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_18_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_18_3_4_tsni = function enumFromTo_lz_inst_18_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_18_3_4_tsni(a, b)
  }
});
lambda$_inst_18_3_4_tsni = function lambda$_inst_18_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_18_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_18_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_18_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_18_5_tsni = function enumFromTo_lz_inst_18_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_18_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_18_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_18_5_tsni(a, b)
  }
});
lambda$_inst_18_5_tsni = function lambda$_inst_18_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_18_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_18_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_18_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
ends_inst_19_20_tsni = function ends_inst_19_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_19_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_19_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_21_22_tsni = function lambda$_inst_21_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_21_22_20_tsni(x);
  return subset_inst_21_22_54_tsni(tmp, ds_)
};
ends_inst_21_22_20_tsni = function ends_inst_21_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_21_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_21_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
concat_inst_23_tsni = function concat_inst_23_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_23_24_tsni = function append_inst_23_24_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_25_tsni = function map_inst_25_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
ends_inst_26_tsni = function ends_inst_26_tsni(k) {
  return runtime.safeCall(k())
};
attribkeys_inst_27_tsni = function attribkeys_inst_27_tsni(ks) {
  let tmp;
  tmp = lambda_inst_27_29_tsni;
  return map_inst_27_28_tsni(tmp, ks)
};
map_inst_27_28_tsni = function map_inst_27_28_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_27_28_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_25_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_23_tsni(xs2);
        return append_inst_23_24_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return (f2, z) => {
          return match_xs_arm_Nil_inst_56_57_tsni(f2, z)
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_27_29_tsni = (undefined, function (k) {
  let tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.head(k);
  tmp1 = cichelli1.last(k);
  tmp2 = NofibPrelude.listLen(k);
  _deforest_K_s = k;
  _deforest_K_c1 = tmp;
  _deforest_K_c2 = tmp1;
  _deforest_K_i = tmp2;
  return () => {
    let param0, param1, param2, param3, a, z, tmp3, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (ys) => {
      return ys
    };
    tmp3 = (ys) => {
      return match_xs_arm_Cons_inst_23_24_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp3;
    return (ys) => {
      return match_xs_arm_Cons_inst_23_24_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
});
ends_inst_30_31_tsni = function ends_inst_30_31_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (xs) => {
      return NofibPrelude.Nil
    };
    tmp = (xs) => {
      return match_ls_arm_Cons_inst_30_58_59_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_30_58_59_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_30_32_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_30_32_22_tsni(ds_, x)
  }
});
lambda$_inst_30_32_22_tsni = function lambda$_inst_30_32_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_30_32_22_20_tsni(x);
  return subset_inst_30_32_22_54_tsni(tmp, ds_)
};
ends_inst_30_32_22_20_tsni = function ends_inst_30_32_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_30_32_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_30_32_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_30_33_tsni = function partition__inst_30_33_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_30_33_34_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_30_33_34_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_30_33_34_35_tsni(p, x, y)
  }
});
lambda$_inst_30_33_34_35_tsni = function lambda$_inst_30_33_34_35_tsni(p, x, y) {
  return select_inst_30_33_34_35_36_tsni(p, x, y)
};
select_inst_30_33_34_35_36_tsni = function select_inst_30_33_34_35_36_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
    first0 = runtime.Tuple.get(ts_fs, 0);
    first1 = runtime.Tuple.get(ts_fs, 1);
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_30_47_tsni(xs, ys);
        return NofibPrelude.Cons(x1, tmp2)
      };
      arr = globalThis.Object.freeze([
        tmp,
        fs
      ]);
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = globalThis.Object.freeze([
        ts,
        tmp1
      ]);
      return arr1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
blocked__inst_37_38_tsni = function blocked__inst_37_38_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_37_38_31_tsni(k);
    tmp1 = union_inst_37_38_58_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_37_38_32_tsni(ds_));
    scrut = partition__inst_37_38_33_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_37_38_tsni(ds_, rest);
      tmp3 = append_inst_37_38_47_tsni(det, tmp2);
      return NofibPrelude.Cons(k, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_37_38_33_tsni = function partition__inst_37_38_33_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_37_38_33_34_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_37_38_33_34_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_37_38_33_34_35_tsni(p, x, y)
  }
});
lambda$_inst_37_38_33_34_35_tsni = function lambda$_inst_37_38_33_34_35_tsni(p, x, y) {
  return select_inst_37_38_33_34_35_36_tsni(p, x, y)
};
select_inst_37_38_33_34_35_36_tsni = function select_inst_37_38_33_34_35_36_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
    first0 = runtime.Tuple.get(ts_fs, 0);
    first1 = runtime.Tuple.get(ts_fs, 1);
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_37_38_47_tsni(xs, ys);
        return NofibPrelude.Cons(x1, tmp2)
      };
      arr = globalThis.Object.freeze([
        tmp,
        fs
      ]);
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = globalThis.Object.freeze([
        ts,
        tmp1
      ]);
      return arr1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_37_38_32_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_37_38_32_22_tsni(ds_, x)
  }
});
lambda$_inst_37_38_32_22_tsni = function lambda$_inst_37_38_32_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_37_38_32_22_20_tsni(x);
  return subset_inst_37_38_32_22_54_tsni(tmp, ds_)
};
ends_inst_37_38_32_22_20_tsni = function ends_inst_37_38_32_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_37_38_32_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_37_38_32_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_37_38_31_tsni = function ends_inst_37_38_31_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (xs) => {
      return NofibPrelude.Nil
    };
    tmp = (xs) => {
      return match_ls_arm_Cons_inst_37_38_58_59_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_37_38_58_59_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_39_tsni = function tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_39_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_39_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_39_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_39_tsni = function lambda$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_39_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_39_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_39_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_39_tsni1 = function lambda$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_39_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_39_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_39_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_39_tsni2 = function lambda$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_39_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_39_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_39_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_39_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_39_tsni3 = function lambda$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_39_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_39_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_39_1_tsni = function assocm_inst_39_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_39_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_39_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_39_2_tsni = function hinsert_inst_39_2_tsni(h, hh) {
  let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this, _deforest_Some_x;
  if (hh instanceof cichelli.H.class) {
    param0 = hh.f;
    param1 = hh.s;
    param2 = hh.ls;
    lo = param0;
    hi = param1;
    hs = param2;
    tmp = cichelli.minm(lo, h);
    lo_ = tmp;
    tmp1 = cichelli.maxm(hi, h);
    hi_ = tmp1;
    tmp2 = NofibPrelude.inList(h, hs);
    lambda$this = runtime.safeCall(lambda5(lo_, hi_));
    scrut = runtime.short_or(tmp2, lambda$this);
    if (scrut === true) {
      return (newCharAssocs, ks) => {
        return cichelli1.NotEver(1)
      }
    } else {
      tmp3 = NofibPrelude.Some(lo_);
      tmp4 = NofibPrelude.Some(hi_);
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = cichelli.H(tmp3, tmp4, tmp5);
      _deforest_Some_x = tmp6;
      return (newCharAssocs, ks) => {
        let param01, newKeyHashSet;
        param01 = _deforest_Some_x;
        newKeyHashSet = param01;
        return cichelli1.findhash_(newKeyHashSet, newCharAssocs, ks)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp1_inst_39_3_tsni = function lscomp1_inst_39_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_39_3_tsni(ls1)
  }
});
lambda$_inst_39_3_tsni = function lambda$_inst_39_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_39_3_tsni = function lscomp2$_inst_39_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_39_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_39_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_39_3_tsni1 = function lambda$_inst_39_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_39_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_39_3_4_tsni = function enumFromTo_lz_inst_39_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_39_3_4_tsni(a, b)
  }
});
lambda$_inst_39_3_4_tsni = function lambda$_inst_39_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_39_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_39_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_39_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_39_5_tsni = function enumFromTo_lz_inst_39_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_39_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_39_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_39_5_tsni(a, b)
  }
});
lambda$_inst_39_5_tsni = function lambda$_inst_39_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_39_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_39_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_39_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_40_41_tsni = function findhash__inst_40_41_tsni(keyHashSet, charAssocs, ks) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (ks instanceof NofibPrelude.Nil.class) {
    return cichelli.YesIts(1, charAssocs)
  } else if (ks instanceof NofibPrelude.Cons.class) {
    param0 = ks.head;
    param1 = ks.tail;
    if (param0 instanceof cichelli.K.class) {
      param01 = param0.s;
      param11 = param0.c1;
      param2 = param0.c2;
      param3 = param0.i;
      s = param01;
      a = param11;
      z = param2;
      n = param3;
      ks1 = param1;
      tmp = assocm_inst_40_41_1_tsni(a, charAssocs);
      tmp1 = cichelli.assocm(z, charAssocs);
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = tmp1;
      arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
        let first1, first0;
        first0 = _deforest_Deforest_Arr_2_0;
        first1 = _deforest_Deforest_Arr_2_1;
        return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
      };
      scrut = arr;
      return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_40_41_tsni = function tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_40_41_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_40_41_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_40_41_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_40_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_40_41_tsni = function lambda$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_40_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_40_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_40_41_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_40_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_40_41_tsni1 = function lambda$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_40_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_40_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_40_41_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_40_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_40_41_tsni2 = function lambda$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_40_41_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_40_41_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_40_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_41_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_40_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_40_41_tsni3 = function lambda$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_40_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_40_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lscomp1_inst_40_41_3_tsni = function lscomp1_inst_40_41_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_41_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_41_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_40_41_3_tsni(ls1)
  }
});
lambda$_inst_40_41_3_tsni = function lambda$_inst_40_41_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_40_41_3_tsni = function lscomp2$_inst_40_41_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_40_41_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_40_41_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_40_41_3_tsni1 = function lambda$_inst_40_41_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_40_41_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_40_41_3_4_tsni = function enumFromTo_lz_inst_40_41_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_41_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_41_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_40_41_3_4_tsni(a, b)
  }
});
lambda$_inst_40_41_3_4_tsni = function lambda$_inst_40_41_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_40_41_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_40_41_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_40_41_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_40_41_5_tsni = function enumFromTo_lz_inst_40_41_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_41_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_41_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_40_41_5_tsni(a, b)
  }
});
lambda$_inst_40_41_5_tsni = function lambda$_inst_40_41_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_40_41_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_40_41_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_40_41_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
hinsert_inst_40_41_2_tsni = function hinsert_inst_40_41_2_tsni(h, hh) {
  return runtime.safeCall(hh(h))
};
assocm_inst_40_41_1_tsni = function assocm_inst_40_41_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_40_41_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_40_41_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_40_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
take_inst_42_43_tsni = function take_inst_42_43_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_42_63_28_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_42_63_28_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_42_43_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_42_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_42_44_tsni = function append_inst_42_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_42_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_42_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
blocked_inst_42_45_tsni = function blocked_inst_42_45_tsni(ls) {
  return blocked__inst_42_45_38_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_42_45_38_tsni = function blocked__inst_42_45_38_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_42_45_38_31_tsni(k);
    tmp1 = union_inst_42_45_38_58_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_42_45_38_32_tsni(ds_));
    scrut = partition__inst_42_45_38_33_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_42_45_38_tsni(ds_, rest);
      tmp3 = append_inst_42_45_38_47_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_42_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_42_45_38_31_tsni = function ends_inst_42_45_38_31_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (xs) => {
      return NofibPrelude.Nil
    };
    tmp = (xs) => {
      return match_ls_arm_Cons_inst_42_45_38_58_59_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_42_45_38_58_59_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_42_45_38_32_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_42_45_38_32_22_tsni(ds_, x)
  }
});
lambda$_inst_42_45_38_32_22_tsni = function lambda$_inst_42_45_38_32_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_42_45_38_32_22_20_tsni(x);
  return subset_inst_42_45_38_32_22_54_tsni(tmp, ds_)
};
ends_inst_42_45_38_32_22_20_tsni = function ends_inst_42_45_38_32_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_42_45_38_32_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_42_45_38_32_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_42_45_38_33_tsni = function partition__inst_42_45_38_33_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_42_45_38_33_34_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_42_45_38_33_34_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_42_45_38_33_34_35_tsni(p, x, y)
  }
});
lambda$_inst_42_45_38_33_34_35_tsni = function lambda$_inst_42_45_38_33_34_35_tsni(p, x, y) {
  return select_inst_42_45_38_33_34_35_36_tsni(p, x, y)
};
select_inst_42_45_38_33_34_35_36_tsni = function select_inst_42_45_38_33_34_35_36_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
    first0 = runtime.Tuple.get(ts_fs, 0);
    first1 = runtime.Tuple.get(ts_fs, 1);
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_42_45_38_47_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_42_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = globalThis.Object.freeze([
        tmp,
        fs
      ]);
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = globalThis.Object.freeze([
        ts,
        tmp1
      ]);
      return arr1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
findhash_inst_42_46_tsni = function findhash_inst_42_46_tsni(keys) {
  let tmp, _deforest_H_f, _deforest_H_s, _deforest_H_ls;
  _deforest_H_f = (y) => {
    return match_x_arm_None_inst_42_46_41_2_62_tsni(y)
  };
  _deforest_H_s = (y) => {
    return match_x_arm_None_inst_42_46_41_2_61_tsni(y)
  };
  _deforest_H_ls = (x) => {
    return match_ls_arm_Nil_inst_42_46_41_2_60_tsni(x)
  };
  tmp = (h) => {
    return match_hh_arm_H_inst_42_46_41_2_tsni(h, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
  };
  return findhash__inst_42_46_41_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_42_46_41_tsni = function findhash__inst_42_46_41_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_42_46_41_tsni = function tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_42_46_41_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_42_46_41_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_42_46_41_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_42_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_42_46_41_tsni = function lambda$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_42_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_42_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_42_46_41_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_42_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_42_46_41_tsni1 = function lambda$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_42_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_42_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_42_46_41_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_42_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_42_46_41_tsni2 = function lambda$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_42_46_41_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_42_46_41_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_42_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_42_46_41_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_42_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_42_46_41_tsni3 = function lambda$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_42_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_42_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_42_46_41_1_tsni = function assocm_inst_42_46_41_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_42_46_41_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_42_46_41_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_42_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_42_46_41_2_tsni = function hinsert_inst_42_46_41_2_tsni(h, hh) {
  return runtime.safeCall(hh(h))
};
lscomp1_inst_42_46_41_3_tsni = function lscomp1_inst_42_46_41_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_42_46_41_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_42_46_41_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_42_46_41_3_tsni(ls1)
  }
});
lambda$_inst_42_46_41_3_tsni = function lambda$_inst_42_46_41_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_42_46_41_3_tsni = function lscomp2$_inst_42_46_41_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_42_46_41_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_42_46_41_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_42_46_41_3_tsni1 = function lambda$_inst_42_46_41_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_42_46_41_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_42_46_41_3_4_tsni = function enumFromTo_lz_inst_42_46_41_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_42_46_41_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_42_46_41_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_42_46_41_3_4_tsni(a, b)
  }
});
lambda$_inst_42_46_41_3_4_tsni = function lambda$_inst_42_46_41_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_42_46_41_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_42_46_41_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_42_46_41_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_42_46_41_5_tsni = function enumFromTo_lz_inst_42_46_41_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_42_46_41_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_42_46_41_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_42_46_41_5_tsni(a, b)
  }
});
lambda$_inst_42_46_41_5_tsni = function lambda$_inst_42_46_41_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_42_46_41_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_42_46_41_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_42_46_41_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
append_inst_42_45_38_47_tsni = function append_inst_42_45_38_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
cichelli__inst_48_49_tsni = function cichelli__inst_48_49_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_48_49_43_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_48_49_44_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_48_49_63_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_48_49_45_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_48_49_46_tsni(hashkeys)
};
findhash_inst_48_49_46_tsni = function findhash_inst_48_49_46_tsni(keys) {
  let tmp, _deforest_H_f, _deforest_H_s, _deforest_H_ls;
  _deforest_H_f = (y) => {
    return match_x_arm_None_inst_48_49_46_41_2_62_tsni(y)
  };
  _deforest_H_s = (y) => {
    return match_x_arm_None_inst_48_49_46_41_2_61_tsni(y)
  };
  _deforest_H_ls = (x) => {
    return match_ls_arm_Nil_inst_48_49_46_41_2_60_tsni(x)
  };
  tmp = (h) => {
    return match_hh_arm_H_inst_48_49_46_41_2_tsni(h, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
  };
  return findhash__inst_48_49_46_41_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_48_49_46_41_tsni = function findhash__inst_48_49_46_41_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_48_49_46_41_tsni = function tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_48_49_46_41_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_48_49_46_41_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_48_49_46_41_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_48_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_48_49_46_41_tsni = function lambda$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_48_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_48_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_48_49_46_41_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_48_49_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_48_49_46_41_tsni1 = function lambda$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_48_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_48_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_48_49_46_41_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_48_49_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_48_49_46_41_tsni2 = function lambda$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_48_49_46_41_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_48_49_46_41_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_48_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_48_49_46_41_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_48_49_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_48_49_46_41_tsni3 = function lambda$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_48_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_48_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lscomp1_inst_48_49_46_41_3_tsni = function lscomp1_inst_48_49_46_41_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_46_41_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_46_41_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_48_49_46_41_3_tsni(ls1)
  }
});
lambda$_inst_48_49_46_41_3_tsni = function lambda$_inst_48_49_46_41_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_48_49_46_41_3_tsni = function lscomp2$_inst_48_49_46_41_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_48_49_46_41_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_48_49_46_41_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_48_49_46_41_3_tsni1 = function lambda$_inst_48_49_46_41_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_48_49_46_41_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_48_49_46_41_3_4_tsni = function enumFromTo_lz_inst_48_49_46_41_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_46_41_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_46_41_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_48_49_46_41_3_4_tsni(a, b)
  }
});
lambda$_inst_48_49_46_41_3_4_tsni = function lambda$_inst_48_49_46_41_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_48_49_46_41_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_48_49_46_41_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_48_49_46_41_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_48_49_46_41_5_tsni = function enumFromTo_lz_inst_48_49_46_41_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_46_41_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_46_41_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_48_49_46_41_5_tsni(a, b)
  }
});
lambda$_inst_48_49_46_41_5_tsni = function lambda$_inst_48_49_46_41_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_48_49_46_41_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_48_49_46_41_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_48_49_46_41_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
hinsert_inst_48_49_46_41_2_tsni = function hinsert_inst_48_49_46_41_2_tsni(h, hh) {
  return runtime.safeCall(hh(h))
};
assocm_inst_48_49_46_41_1_tsni = function assocm_inst_48_49_46_41_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_48_49_46_41_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_48_49_46_41_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_48_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
blocked_inst_48_49_45_tsni = function blocked_inst_48_49_45_tsni(ls) {
  return blocked__inst_48_49_45_38_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_48_49_45_38_tsni = function blocked__inst_48_49_45_38_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_48_49_45_38_31_tsni(k);
    tmp1 = union_inst_48_49_45_38_58_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_48_49_45_38_32_tsni(ds_));
    scrut = partition__inst_48_49_45_38_33_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_48_49_45_38_tsni(ds_, rest);
      tmp3 = append_inst_48_49_45_38_47_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_48_49_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_48_49_45_38_33_tsni = function partition__inst_48_49_45_38_33_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_48_49_45_38_33_34_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_48_49_45_38_33_34_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_48_49_45_38_33_34_35_tsni(p, x, y)
  }
});
lambda$_inst_48_49_45_38_33_34_35_tsni = function lambda$_inst_48_49_45_38_33_34_35_tsni(p, x, y) {
  return select_inst_48_49_45_38_33_34_35_36_tsni(p, x, y)
};
select_inst_48_49_45_38_33_34_35_36_tsni = function select_inst_48_49_45_38_33_34_35_36_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
    first0 = runtime.Tuple.get(ts_fs, 0);
    first1 = runtime.Tuple.get(ts_fs, 1);
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_48_49_45_38_47_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_48_49_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = globalThis.Object.freeze([
        tmp,
        fs
      ]);
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = globalThis.Object.freeze([
        ts,
        tmp1
      ]);
      return arr1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_48_49_45_38_32_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_48_49_45_38_32_22_tsni(ds_, x)
  }
});
lambda$_inst_48_49_45_38_32_22_tsni = function lambda$_inst_48_49_45_38_32_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_48_49_45_38_32_22_20_tsni(x);
  return subset_inst_48_49_45_38_32_22_54_tsni(tmp, ds_)
};
ends_inst_48_49_45_38_32_22_20_tsni = function ends_inst_48_49_45_38_32_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_48_49_45_38_32_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_48_49_45_38_32_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_48_49_45_38_31_tsni = function ends_inst_48_49_45_38_31_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (xs) => {
      return NofibPrelude.Nil
    };
    tmp = (xs) => {
      return match_ls_arm_Cons_inst_48_49_45_38_58_59_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_48_49_45_38_58_59_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_48_49_45_38_47_tsni = function append_inst_48_49_45_38_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_48_49_44_tsni = function append_inst_48_49_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_48_49_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_48_49_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_48_49_43_tsni = function take_inst_48_49_43_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_48_49_63_28_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_48_49_63_28_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_48_49_43_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_48_49_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prog_inst_50_51_tsni = function prog_inst_50_51_tsni(n) {
  return cichelli__inst_50_51_49_tsni(n)
};
cichelli__inst_50_51_49_tsni = function cichelli__inst_50_51_49_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_50_51_49_43_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_50_51_49_44_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_50_51_49_63_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_50_51_49_45_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_50_51_49_46_tsni(hashkeys)
};
take_inst_50_51_49_43_tsni = function take_inst_50_51_49_43_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_50_51_49_63_28_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_50_51_49_63_28_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_50_51_49_43_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_50_51_49_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_50_51_49_44_tsni = function append_inst_50_51_49_44_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_50_51_49_44_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_50_51_49_63_28_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
blocked_inst_50_51_49_45_tsni = function blocked_inst_50_51_49_45_tsni(ls) {
  return blocked__inst_50_51_49_45_38_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_50_51_49_45_38_tsni = function blocked__inst_50_51_49_45_38_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (keyHashSet, charAssocs) => {
      return cichelli.YesIts(1, charAssocs)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_50_51_49_45_38_31_tsni(k);
    tmp1 = union_inst_50_51_49_45_38_58_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_50_51_49_45_38_32_tsni(ds_));
    scrut = partition__inst_50_51_49_45_38_33_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_50_51_49_45_38_tsni(ds_, rest);
      tmp3 = append_inst_50_51_49_45_38_47_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_50_51_49_45_38_31_tsni = function ends_inst_50_51_49_45_38_31_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (xs) => {
      return NofibPrelude.Nil
    };
    tmp = (xs) => {
      return match_ls_arm_Cons_inst_50_51_49_45_38_58_59_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_50_51_49_45_38_58_59_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_50_51_49_45_38_32_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_50_51_49_45_38_32_22_tsni(ds_, x)
  }
});
lambda$_inst_50_51_49_45_38_32_22_tsni = function lambda$_inst_50_51_49_45_38_32_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_50_51_49_45_38_32_22_20_tsni(x);
  return subset_inst_50_51_49_45_38_32_22_54_tsni(tmp, ds_)
};
ends_inst_50_51_49_45_38_32_22_20_tsni = function ends_inst_50_51_49_45_38_32_22_20_tsni(k) {
  let param0, param1, param2, param3, a, z, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (k instanceof cichelli.K.class) {
    param0 = k.s;
    param1 = k.c1;
    param2 = k.c2;
    param3 = k.i;
    a = param1;
    z = param2;
    _deforest_Cons_head1 = z;
    _deforest_Cons_tail1 = (p) => {
      return true
    };
    tmp = (p) => {
      return match_ls_arm_Cons_inst_50_51_49_45_38_32_22_54_55_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_50_51_49_45_38_32_22_54_55_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_50_51_49_45_38_33_tsni = function partition__inst_50_51_49_45_38_33_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_50_51_49_45_38_33_34_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_50_51_49_45_38_33_34_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_50_51_49_45_38_33_34_35_tsni(p, x, y)
  }
});
lambda$_inst_50_51_49_45_38_33_34_35_tsni = function lambda$_inst_50_51_49_45_38_33_34_35_tsni(p, x, y) {
  return select_inst_50_51_49_45_38_33_34_35_36_tsni(p, x, y)
};
select_inst_50_51_49_45_38_33_34_35_36_tsni = function select_inst_50_51_49_45_38_33_34_35_36_tsni(p, x, ts_fs) {
  let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1, _deforest_Cons_head, _deforest_Cons_tail;
  if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
    first0 = runtime.Tuple.get(ts_fs, 0);
    first1 = runtime.Tuple.get(ts_fs, 1);
    ts = first0;
    fs = first1;
    scrut = runtime.safeCall(p(x));
    if (scrut === true) {
      _deforest_Cons_head = x;
      _deforest_Cons_tail = ts;
      tmp = (ys) => {
        let param0, param1, x1, xs, tmp2, _deforest_Cons_head1, _deforest_Cons_tail1;
        param0 = _deforest_Cons_head;
        param1 = _deforest_Cons_tail;
        x1 = param0;
        xs = param1;
        tmp2 = append_inst_50_51_49_45_38_47_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      };
      arr = globalThis.Object.freeze([
        tmp,
        fs
      ]);
      return arr
    } else {
      tmp1 = NofibPrelude.Cons(x, fs);
      arr1 = globalThis.Object.freeze([
        ts,
        tmp1
      ]);
      return arr1
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
findhash_inst_50_51_49_46_tsni = function findhash_inst_50_51_49_46_tsni(keys) {
  let tmp, _deforest_H_f, _deforest_H_s, _deforest_H_ls;
  _deforest_H_f = (y) => {
    return match_x_arm_None_inst_50_51_49_46_41_2_62_tsni(y)
  };
  _deforest_H_s = (y) => {
    return match_x_arm_None_inst_50_51_49_46_41_2_61_tsni(y)
  };
  _deforest_H_ls = (x) => {
    return match_ls_arm_Nil_inst_50_51_49_46_41_2_60_tsni(x)
  };
  tmp = (h) => {
    return match_hh_arm_H_inst_50_51_49_46_41_2_tsni(h, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
  };
  return findhash__inst_50_51_49_46_41_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_50_51_49_46_41_tsni = function findhash__inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_50_51_49_46_41_tsni = function tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_50_51_49_46_41_53_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_50_51_49_46_41_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_50_51_49_46_41_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_50_51_49_46_41_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_50_51_49_46_41_tsni = function lambda$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_50_51_49_46_41_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_50_51_49_46_41_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_50_51_49_46_41_tsni1 = function lambda$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_50_51_49_46_41_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_50_51_49_46_41_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_50_51_49_46_41_tsni2 = function lambda$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_50_51_49_46_41_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_50_51_49_46_41_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_50_51_49_46_41_tsni3 = function lambda$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_50_51_49_46_41_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_50_51_49_46_41_1_tsni = function assocm_inst_50_51_49_46_41_1_tsni(x, yz) {
  let param0, param1, first1, first0, y, z, yzs, scrut, _deforest_Some_x;
  if (yz instanceof NofibPrelude.Cons.class) {
    param0 = yz.head;
    param1 = yz.tail;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      y = first0;
      z = first1;
      yzs = param1;
      scrut = x === y;
      if (scrut === true) {
        _deforest_Some_x = z;
        return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
          let param01, ac, param02, zc, ac1, tmp, tmp1;
          param01 = _deforest_Some_x;
          ac1 = param01;
          ac = param01;
          if (first11 instanceof NofibPrelude.None.class) {
            tmp = runtime.safeCall(lambda_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_50_51_49_46_41_53_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_50_51_49_46_41_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_50_51_49_46_41_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_50_51_49_46_41_2_tsni = function hinsert_inst_50_51_49_46_41_2_tsni(h, hh) {
  return runtime.safeCall(hh(h))
};
lscomp1_inst_50_51_49_46_41_3_tsni = function lscomp1_inst_50_51_49_46_41_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_50_51_49_46_41_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_50_51_49_46_41_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_50_51_49_46_41_3_tsni(ls1)
  }
});
lambda$_inst_50_51_49_46_41_3_tsni = function lambda$_inst_50_51_49_46_41_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_50_51_49_46_41_3_tsni = function lscomp2$_inst_50_51_49_46_41_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_50_51_49_46_41_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_50_51_49_46_41_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_50_51_49_46_41_3_tsni1 = function lambda$_inst_50_51_49_46_41_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_50_51_49_46_41_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_50_51_49_46_41_3_4_tsni = function enumFromTo_lz_inst_50_51_49_46_41_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_50_51_49_46_41_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_50_51_49_46_41_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_50_51_49_46_41_3_4_tsni(a, b)
  }
});
lambda$_inst_50_51_49_46_41_3_4_tsni = function lambda$_inst_50_51_49_46_41_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_50_51_49_46_41_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_50_51_49_46_41_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_50_51_49_46_41_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_50_51_49_46_41_5_tsni = function enumFromTo_lz_inst_50_51_49_46_41_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_50_51_49_46_41_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_50_51_49_46_41_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_50_51_49_46_41_5_tsni(a, b)
  }
});
lambda$_inst_50_51_49_46_41_5_tsni = function lambda$_inst_50_51_49_46_41_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_50_51_49_46_41_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_50_51_49_46_41_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_50_51_49_46_41_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
append_inst_50_51_49_45_38_47_tsni = function append_inst_50_51_49_45_38_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_0_52_tsni = function hash_inst_0_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_6_7_52_tsni = function hash_inst_6_7_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_8_52_tsni = function hash_inst_8_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_8_53_tsni = function append_inst_8_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_9_52_tsni = function hash_inst_9_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_9_53_tsni = function append_inst_9_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_13_52_tsni = function hash_inst_13_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_13_53_tsni = function append_inst_13_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_14_52_tsni = function hash_inst_14_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_14_53_tsni = function append_inst_14_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_15_52_tsni = function hash_inst_15_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_15_53_tsni = function append_inst_15_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_16_52_tsni = function hash_inst_16_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_16_53_tsni = function append_inst_16_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_17_52_tsni = function hash_inst_17_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_17_53_tsni = function append_inst_17_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_18_52_tsni = function hash_inst_18_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_18_53_tsni = function append_inst_18_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
subset_inst_19_54_tsni = function subset_inst_19_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_19_54_55_tsni(lambda$this, xs)
};
all_inst_19_54_55_tsni = function all_inst_19_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
subset_inst_21_22_54_tsni = function subset_inst_21_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_21_22_54_55_tsni(lambda$this, xs)
};
all_inst_21_22_54_55_tsni = function all_inst_21_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
histo_inst_56_tsni = function histo_inst_56_tsni(ls) {
  return foldr_inst_56_57_tsni(cichelli1.histins, NofibPrelude.Nil, ls)
};
foldr_inst_56_57_tsni = function foldr_inst_56_57_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
union_inst_30_58_tsni = function union_inst_30_58_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_30_58_59_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_30_58_59_tsni = function lscomp$_inst_30_58_59_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_30_32_22_54_tsni = function subset_inst_30_32_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_30_32_22_54_55_tsni(lambda$this, xs)
};
all_inst_30_32_22_54_55_tsni = function all_inst_30_32_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
append_inst_30_47_tsni = function append_inst_30_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_37_38_47_tsni = function append_inst_37_38_47_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
subset_inst_37_38_32_22_54_tsni = function subset_inst_37_38_32_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_37_38_32_22_54_55_tsni(lambda$this, xs)
};
all_inst_37_38_32_22_54_55_tsni = function all_inst_37_38_32_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_37_38_58_tsni = function union_inst_37_38_58_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_37_38_58_59_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_37_38_58_59_tsni = function lscomp$_inst_37_38_58_59_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
hash_inst_39_52_tsni = function hash_inst_39_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_39_53_tsni = function append_inst_39_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
inList_inst_40_41_2_60_tsni = function inList_inst_40_41_2_60_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
maxm_inst_40_41_2_61_tsni = function maxm_inst_40_41_2_61_tsni(x, y) {
  return runtime.safeCall(x(y))
};
minm_inst_40_41_2_62_tsni = function minm_inst_40_41_2_62_tsni(x, y) {
  return runtime.safeCall(x(y))
};
hash_inst_40_41_52_tsni = function hash_inst_40_41_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_40_41_53_tsni = function append_inst_40_41_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
attribkeys_inst_42_63_tsni = function attribkeys_inst_42_63_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_42_63_28_tsni(tmp, ks)
};
map_inst_42_63_28_tsni = function map_inst_42_63_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
union_inst_42_45_38_58_tsni = function union_inst_42_45_38_58_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_42_45_38_58_59_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_42_45_38_58_59_tsni = function lscomp$_inst_42_45_38_58_59_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_42_45_38_32_22_54_tsni = function subset_inst_42_45_38_32_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_42_45_38_32_22_54_55_tsni(lambda$this, xs)
};
all_inst_42_45_38_32_22_54_55_tsni = function all_inst_42_45_38_32_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
hash_inst_42_46_41_52_tsni = function hash_inst_42_46_41_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_42_46_41_53_tsni = function append_inst_42_46_41_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
minm_inst_42_46_41_2_62_tsni = function minm_inst_42_46_41_2_62_tsni(x, y) {
  return runtime.safeCall(x(y))
};
maxm_inst_42_46_41_2_61_tsni = function maxm_inst_42_46_41_2_61_tsni(x, y) {
  return runtime.safeCall(x(y))
};
inList_inst_42_46_41_2_60_tsni = function inList_inst_42_46_41_2_60_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
inList_inst_48_49_46_41_2_60_tsni = function inList_inst_48_49_46_41_2_60_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
maxm_inst_48_49_46_41_2_61_tsni = function maxm_inst_48_49_46_41_2_61_tsni(x, y) {
  return runtime.safeCall(x(y))
};
minm_inst_48_49_46_41_2_62_tsni = function minm_inst_48_49_46_41_2_62_tsni(x, y) {
  return runtime.safeCall(x(y))
};
hash_inst_48_49_46_41_52_tsni = function hash_inst_48_49_46_41_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_48_49_46_41_53_tsni = function append_inst_48_49_46_41_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
subset_inst_48_49_45_38_32_22_54_tsni = function subset_inst_48_49_45_38_32_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_48_49_45_38_32_22_54_55_tsni(lambda$this, xs)
};
all_inst_48_49_45_38_32_22_54_55_tsni = function all_inst_48_49_45_38_32_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_48_49_45_38_58_tsni = function union_inst_48_49_45_38_58_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_48_49_45_38_58_59_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_48_49_45_38_58_59_tsni = function lscomp$_inst_48_49_45_38_58_59_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
attribkeys_inst_48_49_63_tsni = function attribkeys_inst_48_49_63_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_48_49_63_28_tsni(tmp, ks)
};
map_inst_48_49_63_28_tsni = function map_inst_48_49_63_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
attribkeys_inst_50_51_49_63_tsni = function attribkeys_inst_50_51_49_63_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_50_51_49_63_28_tsni(tmp, ks)
};
map_inst_50_51_49_63_28_tsni = function map_inst_50_51_49_63_28_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
union_inst_50_51_49_45_38_58_tsni = function union_inst_50_51_49_45_38_58_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_50_51_49_45_38_58_59_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_50_51_49_45_38_58_59_tsni = function lscomp$_inst_50_51_49_45_38_58_59_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_50_51_49_45_38_32_22_54_tsni = function subset_inst_50_51_49_45_38_32_22_54_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_50_51_49_45_38_32_22_54_55_tsni(lambda$this, xs)
};
all_inst_50_51_49_45_38_32_22_54_55_tsni = function all_inst_50_51_49_45_38_32_22_54_55_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
hash_inst_50_51_49_46_41_52_tsni = function hash_inst_50_51_49_46_41_52_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_50_51_49_46_41_53_tsni = function append_inst_50_51_49_46_41_53_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
minm_inst_50_51_49_46_41_2_62_tsni = function minm_inst_50_51_49_46_41_2_62_tsni(x, y) {
  return runtime.safeCall(x(y))
};
maxm_inst_50_51_49_46_41_2_61_tsni = function maxm_inst_50_51_49_46_41_2_61_tsni(x, y) {
  return runtime.safeCall(x(y))
};
inList_inst_50_51_49_46_41_2_60_tsni = function inList_inst_50_51_49_46_41_2_60_tsni(x, ls) {
  return runtime.safeCall(ls(x))
};
tryy$ = function tryy$(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.append(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param0, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param0 = _deforest_K_s;
    param1 = _deforest_K_c1;
    param2 = _deforest_K_c2;
    param3 = _deforest_K_i;
    a1 = param1;
    z1 = param2;
    n1 = param3;
    tmp3 = cichelli.assoc(a1, cvs);
    tmp4 = n1 + tmp3;
    tmp5 = cichelli.assoc(z1, cvs);
    return tmp4 + tmp5
  };
  tmp2 = hash_inst_0_52_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_0_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
tryy = function tryy(keyHashSet, charAssocs, s, a, z, n, ks) {
  return (newAssocs) => {
    return tryy$_inst_6_7_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs)
  }
};
lambda$10 = function lambda$(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_8_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_8_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda6 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_9_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$9 = function lambda$(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
lambda8 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$9(ls1, m, ms, n, ns)
  }
});
lscomp2$ = function lscomp2$(ls1, m, ms, ls2) {
  let scrut, param0, param1, n, ns, tmp;
  scrut = NofibPrelude.force(ls2);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return lscomp1(ms)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    n = param0;
    ns = param1;
    tmp = runtime.safeCall(lambda8(ls1, m, ms, n, ns));
    return NofibPrelude.lazy(tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp2 = function lscomp2(ls1, m, ms) {
  return (ls2) => {
    return lscomp2$(ls1, m, ms, ls2)
  }
};
lambda$8 = function lambda$(ls1) {
  let scrut, param0, param1, m, ms, tmp, tmp1;
  scrut = NofibPrelude.force(ls1);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.LzNil
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    m = param0;
    ms = param1;
    tmp = enumFromTo_lz_inst_10_4_tsni(0, cichelli1.maxval);
    tmp1 = lscomp2$_inst_10_tsni(ls1, m, ms, tmp);
    return NofibPrelude.force(tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda7 = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_11_tsni(ls1)
  }
});
lscomp1 = function lscomp1(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_12_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda$7 = function lambda$(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
  let first1, first0, m, n1, arr, arr1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  if (runtime.Tuple.isArrayLike(caseScrut) && caseScrut.length === 2) {
    first0 = runtime.Tuple.get(caseScrut, 0);
    first1 = runtime.Tuple.get(caseScrut, 1);
    m = first0;
    n1 = first1;
    arr = globalThis.Object.freeze([
      a,
      m
    ]);
    arr1 = globalThis.Object.freeze([
      z,
      n1
    ]);
    _deforest_Cons_head1 = arr1;
    _deforest_Cons_tail1 = (ys) => {
      return match_xs_arm_Nil_inst_13_53_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_13_53_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_13_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_13_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda9 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_14_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$6 = function lambda$(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_15_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_15_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda10 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_16_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$5 = function lambda$(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_17_53_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_53_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_17_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda11 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_18_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$4 = function lambda$(lo_, hi_) {
  let tmp, tmp1;
  tmp = 1 + hi_;
  tmp1 = tmp - lo_;
  return tmp1 > cichelli1.numberofkeys
};
lambda5 = (undefined, function (lo_, hi_) {
  return () => {
    return lambda$4(lo_, hi_)
  }
});
lambda$3 = function lambda$(ds_, x) {
  let tmp;
  tmp = ends_inst_19_20_tsni(x);
  return subset_inst_19_54_tsni(tmp, ds_)
};
lambda4 = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_21_22_tsni(ds_, x)
  }
});
lambda$2 = function lambda$(p, x, y) {
  return cichelli1.select(p, x, y)
};
lambda3 = (undefined, function (p) {
  return (x, y) => {
    return lambda$2(p, x, y)
  }
});
lambda2 = (undefined, function (k) {
  let tmp, tmp1, tmp2;
  tmp = NofibPrelude.head(k);
  tmp1 = cichelli1.last(k);
  tmp2 = NofibPrelude.listLen(k);
  return cichelli1.K(k, tmp, tmp1, tmp2)
});
lscomp$ = function lscomp$(xs, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    tmp = NofibPrelude.inList(h, xs);
    scrut = ! tmp;
    if (scrut === true) {
      tmp1 = lscomp$(xs, t);
      return NofibPrelude.Cons(h, tmp1)
    } else {
      return lscomp$(xs, t)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lscomp = function lscomp(xs) {
  return (ls) => {
    return lscomp$(xs, ls)
  }
};
lambda$1 = function lambda$(ys, x) {
  return NofibPrelude.inList(x, ys)
};
lambda1 = (undefined, function (ys) {
  return (x) => {
    return lambda$1(ys, x)
  }
});
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
lambda$ = function lambda$(a, b) {
  let scrut, tmp, tmp1;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = cichelli1.enumFromTo_lz(tmp, b);
    return NofibPrelude.LzCons(a, tmp1)
  } else {
    return NofibPrelude.LzNil
  }
};
lambda = (undefined, function (a, b) {
  return () => {
    return lambda$(a, b)
  }
});
globalThis.Object.freeze(class cichelli {
  static {
    cichelli1 = this
  }
  constructor() {
    runtime.Unit;
  }
  static {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49;
    tmp = NofibPrelude.nofibStringToList("case");
    tmp1 = NofibPrelude.nofibStringToList("class");
    tmp2 = NofibPrelude.nofibStringToList("data");
    tmp3 = NofibPrelude.nofibStringToList("default");
    tmp4 = NofibPrelude.nofibStringToList("deriving");
    tmp5 = NofibPrelude.nofibStringToList("else");
    tmp6 = NofibPrelude.nofibStringToList("hiding");
    tmp7 = NofibPrelude.nofibStringToList("if");
    tmp8 = NofibPrelude.nofibStringToList("import");
    tmp9 = NofibPrelude.nofibStringToList("in");
    tmp10 = NofibPrelude.nofibStringToList("infix");
    tmp11 = NofibPrelude.nofibStringToList("infixl");
    tmp12 = NofibPrelude.nofibStringToList("instance");
    tmp13 = NofibPrelude.nofibStringToList("interface");
    tmp14 = NofibPrelude.nofibStringToList("let");
    tmp15 = NofibPrelude.nofibStringToList("module");
    tmp16 = NofibPrelude.nofibStringToList("of");
    tmp17 = NofibPrelude.nofibStringToList("renaming");
    tmp18 = NofibPrelude.nofibStringToList("then");
    tmp19 = NofibPrelude.nofibStringToList("to");
    tmp20 = NofibPrelude.nofibStringToList("type");
    tmp21 = NofibPrelude.nofibStringToList("where");
    tmp22 = NofibPrelude.Cons(tmp21, NofibPrelude.Nil);
    tmp23 = NofibPrelude.Cons(tmp20, tmp22);
    tmp24 = NofibPrelude.Cons(tmp19, tmp23);
    tmp25 = NofibPrelude.Cons(tmp18, tmp24);
    tmp26 = NofibPrelude.Cons(tmp17, tmp25);
    tmp27 = NofibPrelude.Cons(tmp16, tmp26);
    tmp28 = NofibPrelude.Cons(tmp15, tmp27);
    tmp29 = NofibPrelude.Cons(tmp14, tmp28);
    tmp30 = NofibPrelude.Cons(tmp13, tmp29);
    tmp31 = NofibPrelude.Cons(tmp12, tmp30);
    tmp32 = NofibPrelude.Cons(tmp11, tmp31);
    tmp33 = NofibPrelude.Cons(tmp10, tmp32);
    tmp34 = NofibPrelude.Cons(tmp9, tmp33);
    tmp35 = NofibPrelude.Cons(tmp8, tmp34);
    tmp36 = NofibPrelude.Cons(tmp7, tmp35);
    tmp37 = NofibPrelude.Cons(tmp6, tmp36);
    tmp38 = NofibPrelude.Cons(tmp5, tmp37);
    tmp39 = NofibPrelude.Cons(tmp4, tmp38);
    tmp40 = NofibPrelude.Cons(tmp3, tmp39);
    tmp41 = NofibPrelude.Cons(tmp2, tmp40);
    tmp42 = NofibPrelude.Cons(tmp1, tmp41);
    tmp43 = NofibPrelude.Cons(tmp, tmp42);
    this.keys = tmp43;
    this.K = function K(s, c1, c2, i) {
      return globalThis.Object.freeze(new K.class(s, c1, c2, i));
    };
    globalThis.Object.freeze(class K {
      static {
        cichelli.K.class = this
      }
      constructor(s, c1, c2, i) {
        this.s = s;
        this.c1 = c1;
        this.c2 = c2;
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "K", ["s", "c1", "c2", "i"]]; 
    });
    this.H = function H(f, s, ls) {
      return globalThis.Object.freeze(new H.class(f, s, ls));
    };
    globalThis.Object.freeze(class H {
      static {
        cichelli.H.class = this
      }
      constructor(f, s, ls) {
        this.f = f;
        this.s = s;
        this.ls = ls;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "H", ["f", "s", "ls"]]; 
    });
    tmp44 = NofibPrelude.listLen(cichelli.keys);
    this.numberofkeys = tmp44;
    tmp45 = attribkeys_inst_27_tsni(cichelli.keys);
    tmp46 = map_inst_25_tsni(ends_inst_26_tsni, tmp45);
    tmp47 = concat_inst_23_tsni(tmp46);
    tmp48 = histo_inst_56_tsni(tmp47);
    this.freqtab = tmp48;
    tmp49 = NofibPrelude.listLen(cichelli.freqtab);
    this.maxval = tmp49;
    globalThis.Object.freeze(class Status {
      static {
        cichelli.Status = this
      }
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Status"]; 
    });
    this.NotEver = function NotEver(i) {
      return globalThis.Object.freeze(new NotEver.class(i));
    };
    globalThis.Object.freeze(class NotEver extends cichelli.Status {
      static {
        cichelli.NotEver.class = this
      }
      constructor(i) {
        super();
        this.i = i;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "NotEver", ["i"]]; 
    });
    this.YesIts = function YesIts(i, t) {
      return globalThis.Object.freeze(new YesIts.class(i, t));
    };
    globalThis.Object.freeze(class YesIts extends cichelli.Status {
      static {
        cichelli.YesIts.class = this
      }
      constructor(i, t) {
        super();
        this.i = i;
        this.t = t;
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "YesIts", ["i", "t"]]; 
    });
  }
  static enumFromTo_lz(a, b) {
    let tmp;
    tmp = runtime.safeCall(lambda(a, b));
    return NofibPrelude.lazy(tmp)
  } 
  static last(ls) {
    let param0, param1, h, t;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      h = param0;
      t = param1;
      return go(h, t)
    } else {
      throw globalThis.Error("last: empty list")
    }
  } 
  static ends(k) {
    let param0, param1, param2, param3, a, z, tmp;
    if (k instanceof cichelli.K.class) {
      param0 = k.s;
      param1 = k.c1;
      param2 = k.c2;
      param3 = k.i;
      a = param1;
      z = param2;
      tmp = NofibPrelude.Cons(z, NofibPrelude.Nil);
      return NofibPrelude.Cons(a, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static assoc(x, yz) {
    let param0, param1, first1, first0, y, z, yzs, scrut;
    if (yz instanceof NofibPrelude.Cons.class) {
      param0 = yz.head;
      param1 = yz.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first0;
        z = first1;
        yzs = param1;
        scrut = x === y;
        if (scrut === true) {
          return z
        } else {
          return cichelli.assoc(x, yzs)
        }
      } else {
        throw globalThis.Error("assoc: not found")
      }
    } else {
      throw globalThis.Error("assoc: not found")
    }
  } 
  static assocm(x, yz) {
    let param0, param1, first1, first0, y, z, yzs, scrut;
    if (yz instanceof NofibPrelude.Cons.class) {
      param0 = yz.head;
      param1 = yz.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first0;
        z = first1;
        yzs = param1;
        scrut = x === y;
        if (scrut === true) {
          return NofibPrelude.Some(z)
        } else {
          return cichelli.assocm(x, yzs)
        }
      } else {
        return NofibPrelude.None
      }
    } else {
      return NofibPrelude.None
    }
  } 
  static histins(x, yns) {
    let param0, param1, first1, first0, y, n, yns1, scrut, tmp, arr, arr1, tmp1, arr2, arr3;
    if (yns instanceof NofibPrelude.Cons.class) {
      param0 = yns.head;
      param1 = yns.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first0;
        n = first1;
        yns1 = param1;
        scrut = x === y;
        if (scrut === true) {
          tmp = n + 1;
          arr = globalThis.Object.freeze([
            y,
            tmp
          ]);
          return NofibPrelude.Cons(arr, yns1)
        } else {
          arr1 = globalThis.Object.freeze([
            y,
            n
          ]);
          tmp1 = cichelli.histins(x, yns1);
          return NofibPrelude.Cons(arr1, tmp1)
        }
      } else {
        arr2 = globalThis.Object.freeze([
          x,
          1
        ]);
        return NofibPrelude.Cons(arr2, NofibPrelude.Nil)
      }
    } else {
      arr3 = globalThis.Object.freeze([
        x,
        1
      ]);
      return NofibPrelude.Cons(arr3, NofibPrelude.Nil)
    }
  } 
  static histo(ls) {
    return NofibPrelude.foldr(cichelli1.histins, NofibPrelude.Nil, ls)
  } 
  static subset(xs, ys) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda1(ys));
    return NofibPrelude.all(lambda$this, xs)
  } 
  static union(xs, ys) {
    let tmp;
    tmp = lscomp$(xs, ys);
    return NofibPrelude.append(xs, tmp)
  } 
  static attribkeys(ks) {
    let tmp;
    tmp = lambda2;
    return NofibPrelude.map(tmp, ks)
  } 
  static minm(x, y) {
    let param0, x1;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      param0 = x.x;
      x1 = param0;
      return NofibPrelude.min(x1, y)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static maxm(x, y) {
    let param0, x1;
    if (x instanceof NofibPrelude.None.class) {
      return y
    } else if (x instanceof NofibPrelude.Some.class) {
      param0 = x.x;
      x1 = param0;
      return NofibPrelude.max(x1, y)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static hash(cvs, k) {
    let param0, param1, param2, param3, a, z, n, tmp, tmp1, tmp2;
    if (k instanceof cichelli.K.class) {
      param0 = k.s;
      param1 = k.c1;
      param2 = k.c2;
      param3 = k.i;
      a = param1;
      z = param2;
      n = param3;
      tmp = cichelli.assoc(a, cvs);
      tmp1 = n + tmp;
      tmp2 = cichelli.assoc(z, cvs);
      return tmp1 + tmp2
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static select(p, x, ts_fs) {
    let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      first0 = runtime.Tuple.get(ts_fs, 0);
      first1 = runtime.Tuple.get(ts_fs, 1);
      ts = first0;
      fs = first1;
      scrut = runtime.safeCall(p(x));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x, ts);
        arr = globalThis.Object.freeze([
          tmp,
          fs
        ]);
        return arr
      } else {
        tmp1 = NofibPrelude.Cons(x, fs);
        arr1 = globalThis.Object.freeze([
          ts,
          tmp1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static partition_(p, ls) {
    let arr, lambda$this;
    arr = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    lambda$this = runtime.safeCall(lambda3(p));
    return NofibPrelude.foldr(lambda$this, arr, ls)
  } 
  static freqsorted(x) {
    return x
  } 
  static blocked_(ds, ls) {
    let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this;
    if (ls instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      k = param0;
      ks = param1;
      tmp = ends_inst_30_31_tsni(k);
      tmp1 = union_inst_30_58_tsni(ds, tmp);
      ds_ = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_30_32_tsni(ds_));
      scrut = partition__inst_30_33_tsni(lambda$this, ks);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first0 = runtime.Tuple.get(scrut, 0);
        first1 = runtime.Tuple.get(scrut, 1);
        det = first0;
        rest = first1;
        tmp2 = cichelli.blocked_(ds_, rest);
        tmp3 = append_inst_30_47_tsni(det, tmp2);
        return NofibPrelude.Cons(k, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static blocked(ls) {
    return blocked__inst_37_38_tsni(NofibPrelude.Nil, ls)
  } 
  static hinsert(h, hh) {
    let param0, param1, param2, lo, hi, hs, lo_, hi_, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, lambda$this;
    if (hh instanceof cichelli.H.class) {
      param0 = hh.f;
      param1 = hh.s;
      param2 = hh.ls;
      lo = param0;
      hi = param1;
      hs = param2;
      tmp = cichelli.minm(lo, h);
      lo_ = tmp;
      tmp1 = cichelli.maxm(hi, h);
      hi_ = tmp1;
      tmp2 = NofibPrelude.inList(h, hs);
      lambda$this = runtime.safeCall(lambda5(lo_, hi_));
      scrut = runtime.short_or(tmp2, lambda$this);
      if (scrut === true) {
        return NofibPrelude.None
      } else {
        tmp3 = NofibPrelude.Some(lo_);
        tmp4 = NofibPrelude.Some(hi_);
        tmp5 = NofibPrelude.Cons(h, hs);
        tmp6 = cichelli.H(tmp3, tmp4, tmp5);
        return NofibPrelude.Some(tmp6)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static first(k, ls) {
    let scrut, param0, param1, a, l, param01, leaves, param11, leaves1, y, tmp, tmp1;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return cichelli.NotEver(k)
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      a = param0;
      l = param1;
      if (a instanceof cichelli.YesIts.class) {
        param01 = a.i;
        param11 = a.t;
        leaves1 = param01;
        y = param11;
        tmp = k + leaves1;
        return cichelli.YesIts(tmp, y)
      } else if (a instanceof cichelli.NotEver.class) {
        param01 = a.i;
        leaves = param01;
        tmp1 = k + leaves;
        return cichelli.first(tmp1, l)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static firstSuccess(f, possibles) {
    let tmp;
    tmp = NofibPrelude.map_lz(f, possibles);
    return cichelli.first(0, tmp)
  } 
  static findhash_(keyHashSet, charAssocs, ks) {
    let param0, param1, param01, param11, param2, param3, s, a, z, n, ks1, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (ks instanceof NofibPrelude.Nil.class) {
      return cichelli.YesIts(1, charAssocs)
    } else if (ks instanceof NofibPrelude.Cons.class) {
      param0 = ks.head;
      param1 = ks.tail;
      if (param0 instanceof cichelli.K.class) {
        param01 = param0.s;
        param11 = param0.c1;
        param2 = param0.c2;
        param3 = param0.i;
        s = param01;
        a = param11;
        z = param2;
        n = param3;
        ks1 = param1;
        tmp = assocm_inst_39_1_tsni(a, charAssocs);
        tmp1 = cichelli.assocm(z, charAssocs);
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = tmp1;
        arr = (keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2) => {
          let first1, first0;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a1, z1, n1, ks2, first1))
        };
        scrut = arr;
        return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a, z, n, ks1))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static findhash(keys) {
    let tmp, _deforest_H_f, _deforest_H_s, _deforest_H_ls;
    _deforest_H_f = (y) => {
      return match_x_arm_None_inst_40_41_2_62_tsni(y)
    };
    _deforest_H_s = (y) => {
      return match_x_arm_None_inst_40_41_2_61_tsni(y)
    };
    _deforest_H_ls = (x) => {
      return match_ls_arm_Nil_inst_40_41_2_60_tsni(x)
    };
    tmp = (h) => {
      return match_hh_arm_H_inst_40_41_2_tsni(h, _deforest_H_f, _deforest_H_s, _deforest_H_ls)
    };
    return findhash__inst_40_41_tsni(tmp, NofibPrelude.Nil, keys)
  } 
  static freq(c) {
    return cichelli.assoc(c, cichelli.freqtab)
  } 
  static morefreq(k1, k2) {
    let param0, param1, param2, param3, a, x, param01, param11, param21, param31, b, y, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (k1 instanceof cichelli.K.class) {
      param0 = k1.s;
      param1 = k1.c1;
      param2 = k1.c2;
      param3 = k1.i;
      a = param1;
      x = param2;
      if (k2 instanceof cichelli.K.class) {
        param01 = k2.s;
        param11 = k2.c1;
        param21 = k2.c2;
        param31 = k2.i;
        b = param11;
        y = param21;
        tmp = cichelli.freq(a);
        tmp1 = cichelli.freq(x);
        tmp2 = tmp + tmp1;
        tmp3 = cichelli.freq(b);
        tmp4 = cichelli.freq(y);
        tmp5 = tmp3 + tmp4;
        return tmp2 > tmp5
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static cichelli_(n) {
    let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    tmp = NofibPrelude.intMod(n, 2);
    tmp1 = take_inst_42_43_tsni(tmp, cichelli.keys);
    tmp2 = append_inst_42_44_tsni(cichelli.keys, tmp1);
    tmp3 = attribkeys_inst_42_63_tsni(tmp2);
    attribkeys_ = tmp3;
    tmp4 = cichelli.freqsorted(attribkeys_);
    tmp5 = blocked_inst_42_45_tsni(tmp4);
    hashkeys = tmp5;
    return findhash_inst_42_46_tsni(hashkeys)
  } 
  static prog(n) {
    return cichelli__inst_48_49_tsni(n)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_50_51_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  toString() { return runtime.render(this); }
  static [definitionMetadata] = ["class", "cichelli"]; 
});
let cichelli = cichelli1; export default cichelli;
