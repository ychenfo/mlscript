const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../Runtime.mjs";
import Term from "./../Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../Predef.mjs";
let go, lscomp, lscomp2, lscomp1, tryy, cichelli1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda11, lambda$, lambda$1, lscomp$, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, lambda$8, lscomp2$, lambda$9, lambda$10, tryy$, findhash__inst_0_tsni, lambda_inst_0_tsni, lambda$_inst_0_tsni, lambda_inst_0_tsni1, lambda$_inst_0_tsni1, lambda_inst_0_tsni2, lambda$_inst_0_tsni2, lambda_inst_0_tsni3, lambda$_inst_0_tsni3, assocm_inst_0_1_tsni, hinsert_inst_0_2_tsni, lscomp1_inst_0_3_tsni, lambda_inst_0_3_tsni, lambda$_inst_0_3_tsni, lscomp2$_inst_0_3_tsni, lambda_inst_0_3_tsni1, lambda$_inst_0_3_tsni1, enumFromTo_lz_inst_0_3_4_tsni, lambda_inst_0_3_4_tsni, lambda$_inst_0_3_4_tsni, enumFromTo_lz_inst_0_5_tsni, lambda_inst_0_5_tsni, lambda$_inst_0_5_tsni, findhash__inst_6_7_tsni, tryy$_inst_6_7_tsni, lambda_inst_6_7_tsni, lambda$_inst_6_7_tsni, lambda_inst_6_7_tsni1, lambda$_inst_6_7_tsni1, lambda_inst_6_7_tsni2, lambda$_inst_6_7_tsni2, lambda_inst_6_7_tsni3, lambda$_inst_6_7_tsni3, lscomp1_inst_6_7_3_tsni, lambda_inst_6_7_3_tsni, lambda$_inst_6_7_3_tsni, lscomp2$_inst_6_7_3_tsni, lambda_inst_6_7_3_tsni1, lambda$_inst_6_7_3_tsni1, enumFromTo_lz_inst_6_7_3_4_tsni, lambda_inst_6_7_3_4_tsni, lambda$_inst_6_7_3_4_tsni, enumFromTo_lz_inst_6_7_5_tsni, lambda_inst_6_7_5_tsni, lambda$_inst_6_7_5_tsni, hinsert_inst_6_7_2_tsni, assocm_inst_6_7_1_tsni, findhash__inst_8_tsni, tryy$_inst_8_tsni, lambda_inst_8_tsni, lambda$_inst_8_tsni, lambda_inst_8_tsni1, lambda$_inst_8_tsni1, lambda_inst_8_tsni2, lambda$_inst_8_tsni2, lambda_inst_8_tsni3, assocm_inst_8_1_tsni, hinsert_inst_8_2_tsni, lscomp1_inst_8_3_tsni, lambda_inst_8_3_tsni, lambda$_inst_8_3_tsni, lscomp2$_inst_8_3_tsni, lambda_inst_8_3_tsni1, lambda$_inst_8_3_tsni1, enumFromTo_lz_inst_8_3_4_tsni, lambda_inst_8_3_4_tsni, lambda$_inst_8_3_4_tsni, enumFromTo_lz_inst_8_5_tsni, lambda_inst_8_5_tsni, lambda$_inst_8_5_tsni, findhash__inst_9_tsni, tryy$_inst_9_tsni, lambda_inst_9_tsni, lambda$_inst_9_tsni, lambda_inst_9_tsni1, lambda$_inst_9_tsni1, lambda_inst_9_tsni2, lambda$_inst_9_tsni2, lambda$_inst_9_tsni3, assocm_inst_9_1_tsni, hinsert_inst_9_2_tsni, lscomp1_inst_9_3_tsni, lambda_inst_9_3_tsni, lambda$_inst_9_3_tsni, lscomp2$_inst_9_3_tsni, lambda_inst_9_3_tsni1, lambda$_inst_9_3_tsni1, enumFromTo_lz_inst_9_3_4_tsni, lambda_inst_9_3_4_tsni, lambda$_inst_9_3_4_tsni, enumFromTo_lz_inst_9_5_tsni, lambda_inst_9_5_tsni, lambda$_inst_9_5_tsni, lscomp1_inst_10_tsni, lambda_inst_10_tsni, lscomp2$_inst_10_tsni, lambda_inst_10_tsni1, lambda$_inst_10_tsni, enumFromTo_lz_inst_10_4_tsni, lambda_inst_10_4_tsni, lambda$_inst_10_4_tsni, lscomp1_inst_11_tsni, lambda$_inst_11_tsni, lscomp2$_inst_11_tsni, lambda_inst_11_tsni, lambda$_inst_11_tsni1, enumFromTo_lz_inst_11_4_tsni, lambda_inst_11_4_tsni, lambda$_inst_11_4_tsni, lambda_inst_12_tsni, lambda$_inst_12_tsni, lscomp2$_inst_12_tsni, lambda_inst_12_tsni1, lambda$_inst_12_tsni1, enumFromTo_lz_inst_12_4_tsni, lambda_inst_12_4_tsni, lambda$_inst_12_4_tsni, findhash__inst_13_tsni, tryy$_inst_13_tsni, lambda_inst_13_tsni, lambda$_inst_13_tsni, lambda_inst_13_tsni1, lambda$_inst_13_tsni1, lambda_inst_13_tsni2, lambda_inst_13_tsni3, lambda$_inst_13_tsni2, assocm_inst_13_1_tsni, hinsert_inst_13_2_tsni, lscomp1_inst_13_3_tsni, lambda_inst_13_3_tsni, lambda$_inst_13_3_tsni, lscomp2$_inst_13_3_tsni, lambda_inst_13_3_tsni1, lambda$_inst_13_3_tsni1, enumFromTo_lz_inst_13_3_4_tsni, lambda_inst_13_3_4_tsni, lambda$_inst_13_3_4_tsni, enumFromTo_lz_inst_13_5_tsni, lambda_inst_13_5_tsni, lambda$_inst_13_5_tsni, findhash__inst_14_tsni, tryy$_inst_14_tsni, lambda_inst_14_tsni, lambda$_inst_14_tsni, lambda_inst_14_tsni1, lambda$_inst_14_tsni1, lambda$_inst_14_tsni2, lambda_inst_14_tsni2, lambda$_inst_14_tsni3, assocm_inst_14_1_tsni, hinsert_inst_14_2_tsni, lscomp1_inst_14_3_tsni, lambda_inst_14_3_tsni, lambda$_inst_14_3_tsni, lscomp2$_inst_14_3_tsni, lambda_inst_14_3_tsni1, lambda$_inst_14_3_tsni1, enumFromTo_lz_inst_14_3_4_tsni, lambda_inst_14_3_4_tsni, lambda$_inst_14_3_4_tsni, enumFromTo_lz_inst_14_5_tsni, lambda_inst_14_5_tsni, lambda$_inst_14_5_tsni, findhash__inst_15_tsni, tryy$_inst_15_tsni, lambda_inst_15_tsni, lambda$_inst_15_tsni, lambda_inst_15_tsni1, lambda_inst_15_tsni2, lambda$_inst_15_tsni1, lambda_inst_15_tsni3, lambda$_inst_15_tsni2, assocm_inst_15_1_tsni, hinsert_inst_15_2_tsni, lscomp1_inst_15_3_tsni, lambda_inst_15_3_tsni, lambda$_inst_15_3_tsni, lscomp2$_inst_15_3_tsni, lambda_inst_15_3_tsni1, lambda$_inst_15_3_tsni1, enumFromTo_lz_inst_15_3_4_tsni, lambda_inst_15_3_4_tsni, lambda$_inst_15_3_4_tsni, enumFromTo_lz_inst_15_5_tsni, lambda_inst_15_5_tsni, lambda$_inst_15_5_tsni, findhash__inst_16_tsni, tryy$_inst_16_tsni, lambda_inst_16_tsni, lambda$_inst_16_tsni, lambda$_inst_16_tsni1, lambda_inst_16_tsni1, lambda$_inst_16_tsni2, lambda_inst_16_tsni2, lambda$_inst_16_tsni3, assocm_inst_16_1_tsni, hinsert_inst_16_2_tsni, lscomp1_inst_16_3_tsni, lambda_inst_16_3_tsni, lambda$_inst_16_3_tsni, lscomp2$_inst_16_3_tsni, lambda_inst_16_3_tsni1, lambda$_inst_16_3_tsni1, enumFromTo_lz_inst_16_3_4_tsni, lambda_inst_16_3_4_tsni, lambda$_inst_16_3_4_tsni, enumFromTo_lz_inst_16_5_tsni, lambda_inst_16_5_tsni, lambda$_inst_16_5_tsni, findhash__inst_17_tsni, tryy$_inst_17_tsni, lambda_inst_17_tsni, lambda_inst_17_tsni1, lambda$_inst_17_tsni, lambda_inst_17_tsni2, lambda$_inst_17_tsni1, lambda_inst_17_tsni3, lambda$_inst_17_tsni2, assocm_inst_17_1_tsni, hinsert_inst_17_2_tsni, lscomp1_inst_17_3_tsni, lambda_inst_17_3_tsni, lambda$_inst_17_3_tsni, lscomp2$_inst_17_3_tsni, lambda_inst_17_3_tsni1, lambda$_inst_17_3_tsni1, enumFromTo_lz_inst_17_3_4_tsni, lambda_inst_17_3_4_tsni, lambda$_inst_17_3_4_tsni, enumFromTo_lz_inst_17_5_tsni, lambda_inst_17_5_tsni, lambda$_inst_17_5_tsni, findhash__inst_18_tsni, tryy$_inst_18_tsni, lambda$_inst_18_tsni, lambda_inst_18_tsni, lambda$_inst_18_tsni1, lambda_inst_18_tsni1, lambda$_inst_18_tsni2, lambda_inst_18_tsni2, lambda$_inst_18_tsni3, assocm_inst_18_1_tsni, hinsert_inst_18_2_tsni, lscomp1_inst_18_3_tsni, lambda_inst_18_3_tsni, lambda$_inst_18_3_tsni, lscomp2$_inst_18_3_tsni, lambda_inst_18_3_tsni1, lambda$_inst_18_3_tsni1, enumFromTo_lz_inst_18_3_4_tsni, lambda_inst_18_3_4_tsni, lambda$_inst_18_3_4_tsni, enumFromTo_lz_inst_18_5_tsni, lambda_inst_18_5_tsni, lambda$_inst_18_5_tsni, ends_inst_19_20_tsni, lambda$_inst_21_22_tsni, ends_inst_21_22_20_tsni, map_inst_23_tsni, ends_inst_24_tsni, attribkeys_inst_25_tsni, map_inst_25_26_tsni, lambda_inst_25_27_tsni, ends_inst_28_29_tsni, lambda_inst_28_30_tsni, lambda$_inst_28_30_22_tsni, ends_inst_28_30_22_20_tsni, partition__inst_28_31_tsni, lambda_inst_28_31_32_tsni, lambda$_inst_28_31_32_33_tsni, select_inst_28_31_32_33_34_tsni, blocked__inst_35_36_tsni, partition__inst_35_36_31_tsni, lambda_inst_35_36_31_32_tsni, lambda$_inst_35_36_31_32_33_tsni, select_inst_35_36_31_32_33_34_tsni, lambda_inst_35_36_30_tsni, lambda$_inst_35_36_30_22_tsni, ends_inst_35_36_30_22_20_tsni, ends_inst_35_36_29_tsni, tryy$_inst_37_tsni, lambda_inst_37_tsni, lambda$_inst_37_tsni, lambda_inst_37_tsni1, lambda$_inst_37_tsni1, lambda_inst_37_tsni2, lambda$_inst_37_tsni2, lambda_inst_37_tsni3, lambda$_inst_37_tsni3, assocm_inst_37_1_tsni, hinsert_inst_37_2_tsni, lscomp1_inst_37_3_tsni, lambda_inst_37_3_tsni, lambda$_inst_37_3_tsni, lscomp2$_inst_37_3_tsni, lambda_inst_37_3_tsni1, lambda$_inst_37_3_tsni1, enumFromTo_lz_inst_37_3_4_tsni, lambda_inst_37_3_4_tsni, lambda$_inst_37_3_4_tsni, enumFromTo_lz_inst_37_5_tsni, lambda_inst_37_5_tsni, lambda$_inst_37_5_tsni, findhash__inst_38_39_tsni, tryy$_inst_38_39_tsni, lambda_inst_38_39_tsni, lambda$_inst_38_39_tsni, lambda_inst_38_39_tsni1, lambda$_inst_38_39_tsni1, lambda_inst_38_39_tsni2, lambda$_inst_38_39_tsni2, lambda_inst_38_39_tsni3, lambda$_inst_38_39_tsni3, lscomp1_inst_38_39_3_tsni, lambda_inst_38_39_3_tsni, lambda$_inst_38_39_3_tsni, lscomp2$_inst_38_39_3_tsni, lambda_inst_38_39_3_tsni1, lambda$_inst_38_39_3_tsni1, enumFromTo_lz_inst_38_39_3_4_tsni, lambda_inst_38_39_3_4_tsni, lambda$_inst_38_39_3_4_tsni, enumFromTo_lz_inst_38_39_5_tsni, lambda_inst_38_39_5_tsni, lambda$_inst_38_39_5_tsni, assocm_inst_38_39_1_tsni, take_inst_40_41_tsni, append_inst_40_42_tsni, blocked_inst_40_43_tsni, blocked__inst_40_43_36_tsni, ends_inst_40_43_36_29_tsni, lambda_inst_40_43_36_30_tsni, lambda$_inst_40_43_36_30_22_tsni, ends_inst_40_43_36_30_22_20_tsni, partition__inst_40_43_36_31_tsni, lambda_inst_40_43_36_31_32_tsni, lambda$_inst_40_43_36_31_32_33_tsni, select_inst_40_43_36_31_32_33_34_tsni, findhash_inst_40_44_tsni, findhash__inst_40_44_39_tsni, tryy$_inst_40_44_39_tsni, lambda_inst_40_44_39_tsni, lambda$_inst_40_44_39_tsni, lambda_inst_40_44_39_tsni1, lambda$_inst_40_44_39_tsni1, lambda_inst_40_44_39_tsni2, lambda$_inst_40_44_39_tsni2, lambda_inst_40_44_39_tsni3, lambda$_inst_40_44_39_tsni3, assocm_inst_40_44_39_1_tsni, lscomp1_inst_40_44_39_3_tsni, lambda_inst_40_44_39_3_tsni, lambda$_inst_40_44_39_3_tsni, lscomp2$_inst_40_44_39_3_tsni, lambda_inst_40_44_39_3_tsni1, lambda$_inst_40_44_39_3_tsni1, enumFromTo_lz_inst_40_44_39_3_4_tsni, lambda_inst_40_44_39_3_4_tsni, lambda$_inst_40_44_39_3_4_tsni, enumFromTo_lz_inst_40_44_39_5_tsni, lambda_inst_40_44_39_5_tsni, lambda$_inst_40_44_39_5_tsni, append_inst_40_43_36_45_tsni, cichelli__inst_46_47_tsni, findhash_inst_46_47_44_tsni, findhash__inst_46_47_44_39_tsni, tryy$_inst_46_47_44_39_tsni, lambda_inst_46_47_44_39_tsni, lambda$_inst_46_47_44_39_tsni, lambda_inst_46_47_44_39_tsni1, lambda$_inst_46_47_44_39_tsni1, lambda_inst_46_47_44_39_tsni2, lambda$_inst_46_47_44_39_tsni2, lambda_inst_46_47_44_39_tsni3, lambda$_inst_46_47_44_39_tsni3, lscomp1_inst_46_47_44_39_3_tsni, lambda_inst_46_47_44_39_3_tsni, lambda$_inst_46_47_44_39_3_tsni, lscomp2$_inst_46_47_44_39_3_tsni, lambda_inst_46_47_44_39_3_tsni1, lambda$_inst_46_47_44_39_3_tsni1, enumFromTo_lz_inst_46_47_44_39_3_4_tsni, lambda_inst_46_47_44_39_3_4_tsni, lambda$_inst_46_47_44_39_3_4_tsni, enumFromTo_lz_inst_46_47_44_39_5_tsni, lambda_inst_46_47_44_39_5_tsni, lambda$_inst_46_47_44_39_5_tsni, assocm_inst_46_47_44_39_1_tsni, blocked_inst_46_47_43_tsni, blocked__inst_46_47_43_36_tsni, partition__inst_46_47_43_36_31_tsni, lambda_inst_46_47_43_36_31_32_tsni, lambda$_inst_46_47_43_36_31_32_33_tsni, select_inst_46_47_43_36_31_32_33_34_tsni, lambda_inst_46_47_43_36_30_tsni, lambda$_inst_46_47_43_36_30_22_tsni, ends_inst_46_47_43_36_30_22_20_tsni, ends_inst_46_47_43_36_29_tsni, append_inst_46_47_43_36_45_tsni, append_inst_46_47_42_tsni, take_inst_46_47_41_tsni, prog_inst_48_49_tsni, cichelli__inst_48_49_47_tsni, take_inst_48_49_47_41_tsni, append_inst_48_49_47_42_tsni, blocked_inst_48_49_47_43_tsni, blocked__inst_48_49_47_43_36_tsni, ends_inst_48_49_47_43_36_29_tsni, lambda_inst_48_49_47_43_36_30_tsni, lambda$_inst_48_49_47_43_36_30_22_tsni, ends_inst_48_49_47_43_36_30_22_20_tsni, partition__inst_48_49_47_43_36_31_tsni, lambda_inst_48_49_47_43_36_31_32_tsni, lambda$_inst_48_49_47_43_36_31_32_33_tsni, select_inst_48_49_47_43_36_31_32_33_34_tsni, findhash_inst_48_49_47_44_tsni, findhash__inst_48_49_47_44_39_tsni, tryy$_inst_48_49_47_44_39_tsni, lambda_inst_48_49_47_44_39_tsni, lambda$_inst_48_49_47_44_39_tsni, lambda_inst_48_49_47_44_39_tsni1, lambda$_inst_48_49_47_44_39_tsni1, lambda_inst_48_49_47_44_39_tsni2, lambda$_inst_48_49_47_44_39_tsni2, lambda_inst_48_49_47_44_39_tsni3, lambda$_inst_48_49_47_44_39_tsni3, assocm_inst_48_49_47_44_39_1_tsni, lscomp1_inst_48_49_47_44_39_3_tsni, lambda_inst_48_49_47_44_39_3_tsni, lambda$_inst_48_49_47_44_39_3_tsni, lscomp2$_inst_48_49_47_44_39_3_tsni, lambda_inst_48_49_47_44_39_3_tsni1, lambda$_inst_48_49_47_44_39_3_tsni1, enumFromTo_lz_inst_48_49_47_44_39_3_4_tsni, lambda_inst_48_49_47_44_39_3_4_tsni, lambda$_inst_48_49_47_44_39_3_4_tsni, enumFromTo_lz_inst_48_49_47_44_39_5_tsni, lambda_inst_48_49_47_44_39_5_tsni, lambda$_inst_48_49_47_44_39_5_tsni, append_inst_48_49_47_43_36_45_tsni, hash_inst_0_50_tsni, hash_inst_6_7_50_tsni, hash_inst_8_50_tsni, append_inst_8_51_tsni, hash_inst_9_50_tsni, append_inst_9_51_tsni, hash_inst_13_50_tsni, append_inst_13_51_tsni, hash_inst_14_50_tsni, append_inst_14_51_tsni, hash_inst_15_50_tsni, append_inst_15_51_tsni, hash_inst_16_50_tsni, append_inst_16_51_tsni, hash_inst_17_50_tsni, append_inst_17_51_tsni, hash_inst_18_50_tsni, append_inst_18_51_tsni, subset_inst_19_52_tsni, all_inst_19_52_53_tsni, subset_inst_21_22_52_tsni, all_inst_21_22_52_53_tsni, concat_inst_54_tsni, append_inst_54_55_tsni, union_inst_28_56_tsni, lscomp$_inst_28_56_57_tsni, subset_inst_28_30_22_52_tsni, all_inst_28_30_22_52_53_tsni, append_inst_28_45_tsni, append_inst_35_36_45_tsni, subset_inst_35_36_30_22_52_tsni, all_inst_35_36_30_22_52_53_tsni, union_inst_35_36_56_tsni, lscomp$_inst_35_36_56_57_tsni, hash_inst_37_50_tsni, append_inst_37_51_tsni, hash_inst_38_39_50_tsni, append_inst_38_39_51_tsni, attribkeys_inst_40_58_tsni, map_inst_40_58_26_tsni, union_inst_40_43_36_56_tsni, lscomp$_inst_40_43_36_56_57_tsni, subset_inst_40_43_36_30_22_52_tsni, all_inst_40_43_36_30_22_52_53_tsni, hash_inst_40_44_39_50_tsni, hash_inst_46_47_44_39_50_tsni, subset_inst_46_47_43_36_30_22_52_tsni, all_inst_46_47_43_36_30_22_52_53_tsni, union_inst_46_47_43_36_56_tsni, lscomp$_inst_46_47_43_36_56_57_tsni, attribkeys_inst_46_47_58_tsni, map_inst_46_47_58_26_tsni, attribkeys_inst_48_49_47_58_tsni, map_inst_48_49_47_58_26_tsni, union_inst_48_49_47_43_36_56_tsni, lscomp$_inst_48_49_47_43_36_56_57_tsni, subset_inst_48_49_47_43_36_30_22_52_tsni, all_inst_48_49_47_43_36_30_22_52_53_tsni, hash_inst_48_49_47_44_39_50_tsni, match_first0_arm_None_inst_0_tsni, match_first0_arm_None_inst_6_7_tsni, match_first0_arm_None_inst_8_tsni, match_xs_arm_Cons_inst_8_51_tsni, match_xs_arm_Nil_inst_8_51_tsni, match_first0_arm_None_inst_9_tsni, match_xs_arm_Cons_inst_9_51_tsni, match_xs_arm_Nil_inst_9_51_tsni, match_first0_arm_None_inst_13_tsni, match_xs_arm_Cons_inst_13_51_tsni, match_xs_arm_Nil_inst_13_51_tsni, match_first0_arm_None_inst_14_tsni, match_xs_arm_Cons_inst_14_51_tsni, match_xs_arm_Nil_inst_14_51_tsni, match_first0_arm_None_inst_15_tsni, match_xs_arm_Cons_inst_15_51_tsni, match_xs_arm_Nil_inst_15_51_tsni, match_first0_arm_None_inst_16_tsni, match_xs_arm_Cons_inst_16_51_tsni, match_xs_arm_Nil_inst_16_51_tsni, match_first0_arm_None_inst_17_tsni, match_xs_arm_Cons_inst_17_51_tsni, match_xs_arm_Nil_inst_17_51_tsni, match_first0_arm_None_inst_18_tsni, match_xs_arm_Cons_inst_18_51_tsni, match_xs_arm_Nil_inst_18_51_tsni, match_ls_arm_Cons_inst_19_52_53_tsni, match_ls_arm_Cons_inst_21_22_52_53_tsni, match_xs_arm_Cons_inst_54_55_tsni, match_ls_arm_Cons_inst_28_56_57_tsni, match_ls_arm_Cons_inst_28_30_22_52_53_tsni, match_ls_arm_Cons_inst_35_36_30_22_52_53_tsni, match_ls_arm_Cons_inst_35_36_56_57_tsni, match_first0_arm_None_inst_37_tsni, match_xs_arm_Cons_inst_37_51_tsni, match_xs_arm_Nil_inst_37_51_tsni, match_xs_arm_Nil_inst_38_39_51_tsni, match_xs_arm_Cons_inst_38_39_51_tsni, match_first0_arm_None_inst_38_39_tsni, match_xs_arm_Nil_inst_40_58_26_tsni, match_xs_arm_Cons_inst_40_58_26_tsni, match_ls_arm_Cons_inst_40_43_36_56_57_tsni, match_ls_arm_Cons_inst_40_43_36_30_22_52_53_tsni, match_first0_arm_None_inst_40_44_39_tsni, match_ks_arm_Cons_inst_40_44_39_tsni, match_first0_arm_None_inst_46_47_44_39_tsni, match_ls_arm_Cons_inst_46_47_43_36_30_22_52_53_tsni, match_ls_arm_Cons_inst_46_47_43_36_56_57_tsni, match_ks_arm_Cons_inst_46_47_44_39_tsni, match_xs_arm_Cons_inst_46_47_58_26_tsni, match_xs_arm_Nil_inst_46_47_58_26_tsni, match_xs_arm_Nil_inst_48_49_47_58_26_tsni, match_xs_arm_Cons_inst_48_49_47_58_26_tsni, match_ls_arm_Cons_inst_48_49_47_43_36_56_57_tsni, match_ls_arm_Cons_inst_48_49_47_43_36_30_22_52_53_tsni, match_first0_arm_None_inst_48_49_47_44_39_tsni, match_ks_arm_Cons_inst_48_49_47_44_39_tsni;
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
match_xs_arm_Cons_inst_8_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_8_51_tsni, _deforest_Cons_tail_inst_8_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_8_51_tsni;
  param1 = _deforest_Cons_tail_inst_8_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_8_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_8_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_9_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_9_51_tsni, _deforest_Cons_tail_inst_9_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_9_51_tsni;
  param1 = _deforest_Cons_tail_inst_9_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_9_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_9_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_13_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_13_51_tsni, _deforest_Cons_tail_inst_13_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_13_51_tsni;
  param1 = _deforest_Cons_tail_inst_13_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_13_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_13_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_14_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_14_51_tsni, _deforest_Cons_tail_inst_14_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_14_51_tsni;
  param1 = _deforest_Cons_tail_inst_14_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_14_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_14_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_15_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_15_51_tsni, _deforest_Cons_tail_inst_15_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_15_51_tsni;
  param1 = _deforest_Cons_tail_inst_15_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_15_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_15_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_16_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_16_51_tsni, _deforest_Cons_tail_inst_16_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_16_51_tsni;
  param1 = _deforest_Cons_tail_inst_16_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_16_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_16_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_17_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_17_51_tsni, _deforest_Cons_tail_inst_17_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_17_51_tsni;
  param1 = _deforest_Cons_tail_inst_17_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_17_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_17_51_tsni = (undefined, function (ys) {
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
match_xs_arm_Cons_inst_18_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_18_51_tsni, _deforest_Cons_tail_inst_18_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_18_51_tsni;
  param1 = _deforest_Cons_tail_inst_18_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_18_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_18_51_tsni = (undefined, function (ys) {
  return ys
});
match_ls_arm_Cons_inst_19_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_19_52_53_tsni, _deforest_Cons_tail_inst_19_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_19_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_19_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_19_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_21_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_21_22_52_53_tsni, _deforest_Cons_tail_inst_21_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_21_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_21_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_21_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_xs_arm_Cons_inst_54_55_tsni = (undefined, function (ys, _deforest_Cons_head_inst_54_55_tsni, _deforest_Cons_tail_inst_54_55_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_54_55_tsni;
  param1 = _deforest_Cons_tail_inst_54_55_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_54_55_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_ls_arm_Cons_inst_28_56_57_tsni = (undefined, function (xs, _deforest_Cons_head_inst_28_56_57_tsni, _deforest_Cons_tail_inst_28_56_57_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_28_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_28_56_57_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_28_56_57_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_28_56_57_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_28_30_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_28_30_22_52_53_tsni, _deforest_Cons_tail_inst_28_30_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_28_30_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_28_30_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_28_30_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_35_36_30_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_35_36_30_22_52_53_tsni, _deforest_Cons_tail_inst_35_36_30_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_35_36_30_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_35_36_30_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_35_36_30_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_35_36_56_57_tsni = (undefined, function (xs, _deforest_Cons_head_inst_35_36_56_57_tsni, _deforest_Cons_tail_inst_35_36_56_57_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_35_36_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_35_36_56_57_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_35_36_56_57_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_35_36_56_57_tsni(xs, t)
  }
});
match_first0_arm_None_inst_37_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_37_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_37_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_37_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_37_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_37_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Cons_inst_37_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_37_51_tsni, _deforest_Cons_tail_inst_37_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_37_51_tsni;
  param1 = _deforest_Cons_tail_inst_37_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_37_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_xs_arm_Nil_inst_37_51_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Nil_inst_38_39_51_tsni = (undefined, function (ys) {
  return ys
});
match_xs_arm_Cons_inst_38_39_51_tsni = (undefined, function (ys, _deforest_Cons_head_inst_38_39_51_tsni, _deforest_Cons_tail_inst_38_39_51_tsni) {
  let param0, param1, x, xs, tmp;
  param0 = _deforest_Cons_head_inst_38_39_51_tsni;
  param1 = _deforest_Cons_tail_inst_38_39_51_tsni;
  x = param0;
  xs = param1;
  tmp = append_inst_38_39_51_tsni(xs, ys);
  return NofibPrelude.Cons(x, tmp)
});
match_first0_arm_None_inst_38_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_38_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_38_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_38_39_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_38_39_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_38_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_xs_arm_Nil_inst_40_58_26_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_40_58_26_tsni = (undefined, function (f, _deforest_Cons_head_inst_40_58_26_tsni, _deforest_Cons_tail_inst_40_58_26_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_40_58_26_tsni;
  param1 = _deforest_Cons_tail_inst_40_58_26_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_40_58_26_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_ls_arm_Cons_inst_40_43_36_56_57_tsni = (undefined, function (xs, _deforest_Cons_head_inst_40_43_36_56_57_tsni, _deforest_Cons_tail_inst_40_43_36_56_57_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_40_43_36_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_40_43_36_56_57_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_40_43_36_56_57_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_40_43_36_56_57_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_40_43_36_30_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_40_43_36_30_22_52_53_tsni, _deforest_Cons_tail_inst_40_43_36_30_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_40_43_36_30_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_40_43_36_30_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_40_43_36_30_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_first0_arm_None_inst_40_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_40_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_40_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_40_44_39_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_40_44_39_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_40_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ks_arm_Cons_inst_40_44_39_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_40_44_39_tsni, _deforest_Cons_tail_inst_40_44_39_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_40_44_39_tsni;
  param1 = _deforest_Cons_tail_inst_40_44_39_tsni;
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
    tmp = assocm_inst_40_44_39_1_tsni(a, charAssocs);
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
match_first0_arm_None_inst_46_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_46_47_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_46_47_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_46_47_44_39_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_46_47_44_39_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_46_47_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ls_arm_Cons_inst_46_47_43_36_30_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_46_47_43_36_30_22_52_53_tsni, _deforest_Cons_tail_inst_46_47_43_36_30_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_46_47_43_36_30_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_43_36_30_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_46_47_43_36_30_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_ls_arm_Cons_inst_46_47_43_36_56_57_tsni = (undefined, function (xs, _deforest_Cons_head_inst_46_47_43_36_56_57_tsni, _deforest_Cons_tail_inst_46_47_43_36_56_57_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_46_47_43_36_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_43_36_56_57_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_46_47_43_36_56_57_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_46_47_43_36_56_57_tsni(xs, t)
  }
});
match_ks_arm_Cons_inst_46_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_46_47_44_39_tsni, _deforest_Cons_tail_inst_46_47_44_39_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_46_47_44_39_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_44_39_tsni;
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
    tmp = assocm_inst_46_47_44_39_1_tsni(a, charAssocs);
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
match_xs_arm_Cons_inst_46_47_58_26_tsni = (undefined, function (f, _deforest_Cons_head_inst_46_47_58_26_tsni, _deforest_Cons_tail_inst_46_47_58_26_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_46_47_58_26_tsni;
  param1 = _deforest_Cons_tail_inst_46_47_58_26_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_46_47_58_26_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_xs_arm_Nil_inst_46_47_58_26_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_48_49_47_58_26_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_48_49_47_58_26_tsni = (undefined, function (f, _deforest_Cons_head_inst_48_49_47_58_26_tsni, _deforest_Cons_tail_inst_48_49_47_58_26_tsni) {
  let param0, param1, x, xs, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_48_49_47_58_26_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_47_58_26_tsni;
  x = param0;
  xs = param1;
  tmp = runtime.safeCall(f(x));
  tmp1 = map_inst_48_49_47_58_26_tsni(f, xs);
  return NofibPrelude.Cons(tmp, tmp1)
});
match_ls_arm_Cons_inst_48_49_47_43_36_56_57_tsni = (undefined, function (xs, _deforest_Cons_head_inst_48_49_47_43_36_56_57_tsni, _deforest_Cons_tail_inst_48_49_47_43_36_56_57_tsni) {
  let param0, param1, h, t, scrut, tmp, tmp1;
  param0 = _deforest_Cons_head_inst_48_49_47_43_36_56_57_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_47_43_36_56_57_tsni;
  h = param0;
  t = param1;
  tmp = NofibPrelude.inList(h, xs);
  scrut = ! tmp;
  if (scrut === true) {
    tmp1 = lscomp$_inst_48_49_47_43_36_56_57_tsni(xs, t);
    return NofibPrelude.Cons(h, tmp1)
  } else {
    return lscomp$_inst_48_49_47_43_36_56_57_tsni(xs, t)
  }
});
match_ls_arm_Cons_inst_48_49_47_43_36_30_22_52_53_tsni = (undefined, function (p, _deforest_Cons_head_inst_48_49_47_43_36_30_22_52_53_tsni, _deforest_Cons_tail_inst_48_49_47_43_36_30_22_52_53_tsni) {
  let param0, param1, h, t, scrut;
  param0 = _deforest_Cons_head_inst_48_49_47_43_36_30_22_52_53_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_47_43_36_30_22_52_53_tsni;
  h = param0;
  t = param1;
  scrut = runtime.safeCall(p(h));
  if (scrut === true) {
    return all_inst_48_49_47_43_36_30_22_52_53_tsni(p, t)
  } else {
    return false
  }
});
match_first0_arm_None_inst_48_49_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks, first1) {
  let param0, zc, scrut, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6;
  if (first1 instanceof NofibPrelude.None.class) {
    scrut = a === z;
    if (scrut === true) {
      tmp = runtime.safeCall(lambda_inst_48_49_47_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
      return cichelli.firstSuccess(tmp, tmp1)
    } else {
      tmp2 = runtime.safeCall(lambda_inst_48_49_47_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks));
      tmp3 = enumFromTo_lz_inst_48_49_47_44_39_5_tsni(0, cichelli.maxval);
      tmp4 = lscomp1_inst_48_49_47_44_39_3_tsni(tmp3);
      return cichelli.firstSuccess(tmp2, tmp4)
    }
  } else if (first1 instanceof NofibPrelude.Some.class) {
    param0 = first1.x;
    zc = param0;
    tmp5 = runtime.safeCall(lambda_inst_48_49_47_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks));
    tmp6 = cichelli.enumFromTo_lz(0, cichelli.maxval);
    return cichelli.firstSuccess(tmp5, tmp6)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_ks_arm_Cons_inst_48_49_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, _deforest_Cons_head_inst_48_49_47_44_39_tsni, _deforest_Cons_tail_inst_48_49_47_44_39_tsni) {
  let param0, param1, param01, param11, param2, param3, s, a, z, n, ks, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_48_49_47_44_39_tsni;
  param1 = _deforest_Cons_tail_inst_48_49_47_44_39_tsni;
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
    tmp = assocm_inst_48_49_47_44_39_1_tsni(a, charAssocs);
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp2 = hash_inst_6_7_50_tsni(newCharAssocs, tmp1);
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_8_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_8_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_8_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_8_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_8_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_8_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_8_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_8_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_9_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_9_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_9_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_9_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_9_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_9_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_9_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_9_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_9_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_9_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_13_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_13_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_13_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_13_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_13_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_13_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_13_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_14_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_14_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_14_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_14_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_14_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_14_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_14_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_14_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_14_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_14_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_15_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_15_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_15_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_15_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_15_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_15_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_15_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_15_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_16_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_16_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_16_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_16_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_16_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_16_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_16_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_16_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_16_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_16_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_17_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_17_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_17_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_17_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_17_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_17_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_17_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_17_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
  tmp = append_inst_18_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_18_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_18_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_18_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_18_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_18_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_18_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_18_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_18_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
              return match_xs_arm_Nil_inst_18_51_tsni(ys)
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
      return match_ls_arm_Cons_inst_19_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_19_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_21_22_tsni = function lambda$_inst_21_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_21_22_20_tsni(x);
  return subset_inst_21_22_52_tsni(tmp, ds_)
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
      return match_ls_arm_Cons_inst_21_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_21_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
map_inst_23_tsni = function map_inst_23_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
ends_inst_24_tsni = function ends_inst_24_tsni(k) {
  return runtime.safeCall(k())
};
attribkeys_inst_25_tsni = function attribkeys_inst_25_tsni(ks) {
  let tmp;
  tmp = lambda_inst_25_27_tsni;
  return map_inst_25_26_tsni(tmp, ks)
};
map_inst_25_26_tsni = function map_inst_25_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_25_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1) => {
      let _deforest_Cons_head1, _deforest_Cons_tail1;
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = runtime.safeCall(f1(x));
      tmp1 = map_inst_23_tsni(f1, xs1);
      _deforest_Cons_head1 = tmp;
      _deforest_Cons_tail1 = tmp1;
      return () => {
        let param01, param11, x1, xs2, tmp2;
        param01 = _deforest_Cons_head1;
        param11 = _deforest_Cons_tail1;
        x1 = param01;
        xs2 = param11;
        tmp2 = concat_inst_54_tsni(xs2);
        return append_inst_54_55_tsni(x1, tmp2)
      }
    }
  } else if (xs instanceof NofibPrelude.Nil.class) {
    return (f1) => {
      return () => {
        return NofibPrelude.Nil
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_25_27_tsni = (undefined, function (k) {
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
      return match_xs_arm_Cons_inst_54_55_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp3;
    return (ys) => {
      return match_xs_arm_Cons_inst_54_55_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    }
  }
});
ends_inst_28_29_tsni = function ends_inst_28_29_tsni(k) {
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
      return match_ls_arm_Cons_inst_28_56_57_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_28_56_57_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_28_30_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_28_30_22_tsni(ds_, x)
  }
});
lambda$_inst_28_30_22_tsni = function lambda$_inst_28_30_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_28_30_22_20_tsni(x);
  return subset_inst_28_30_22_52_tsni(tmp, ds_)
};
ends_inst_28_30_22_20_tsni = function ends_inst_28_30_22_20_tsni(k) {
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
      return match_ls_arm_Cons_inst_28_30_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_28_30_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_28_31_tsni = function partition__inst_28_31_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_28_31_32_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_28_31_32_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_28_31_32_33_tsni(p, x, y)
  }
});
lambda$_inst_28_31_32_33_tsni = function lambda$_inst_28_31_32_33_tsni(p, x, y) {
  return select_inst_28_31_32_33_34_tsni(p, x, y)
};
select_inst_28_31_32_33_34_tsni = function select_inst_28_31_32_33_34_tsni(p, x, ts_fs) {
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
        tmp2 = append_inst_28_45_tsni(xs, ys);
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
blocked__inst_35_36_tsni = function blocked__inst_35_36_tsni(ds, ls) {
  let param0, param1, k, ks, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this;
  if (ls instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    k = param0;
    ks = param1;
    tmp = ends_inst_35_36_29_tsni(k);
    tmp1 = union_inst_35_36_56_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_35_36_30_tsni(ds_));
    scrut = partition__inst_35_36_31_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_35_36_tsni(ds_, rest);
      tmp3 = append_inst_35_36_45_tsni(det, tmp2);
      return NofibPrelude.Cons(k, tmp3)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_35_36_31_tsni = function partition__inst_35_36_31_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_35_36_31_32_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_35_36_31_32_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_35_36_31_32_33_tsni(p, x, y)
  }
});
lambda$_inst_35_36_31_32_33_tsni = function lambda$_inst_35_36_31_32_33_tsni(p, x, y) {
  return select_inst_35_36_31_32_33_34_tsni(p, x, y)
};
select_inst_35_36_31_32_33_34_tsni = function select_inst_35_36_31_32_33_34_tsni(p, x, ts_fs) {
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
        tmp2 = append_inst_35_36_45_tsni(xs, ys);
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
lambda_inst_35_36_30_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_35_36_30_22_tsni(ds_, x)
  }
});
lambda$_inst_35_36_30_22_tsni = function lambda$_inst_35_36_30_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_35_36_30_22_20_tsni(x);
  return subset_inst_35_36_30_22_52_tsni(tmp, ds_)
};
ends_inst_35_36_30_22_20_tsni = function ends_inst_35_36_30_22_20_tsni(k) {
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
      return match_ls_arm_Cons_inst_35_36_30_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_35_36_30_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_35_36_29_tsni = function ends_inst_35_36_29_tsni(k) {
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
      return match_ls_arm_Cons_inst_35_36_56_57_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_35_36_56_57_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tryy$_inst_37_tsni = function tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_37_51_tsni(newAssocs, charAssocs);
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
  tmp2 = hash_inst_37_50_tsni(newCharAssocs, tmp1);
  scrut = hinsert_inst_37_2_tsni(tmp2, keyHashSet);
  return runtime.safeCall(scrut(newCharAssocs, ks))
};
lambda_inst_37_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_37_tsni = function lambda$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_37_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_37_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_37_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_37_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_37_tsni1 = function lambda$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_37_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_37_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_37_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_37_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_37_tsni2 = function lambda$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
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
      return match_xs_arm_Nil_inst_37_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_37_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_37_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_37_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_37_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_37_tsni3 = function lambda$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_37_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_37_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_37_1_tsni = function assocm_inst_37_1_tsni(x, yz) {
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
            tmp = runtime.safeCall(lambda_inst_37_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_37_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_37_51_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_37_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_37_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_37_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
hinsert_inst_37_2_tsni = function hinsert_inst_37_2_tsni(h, hh) {
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
        return runtime.safeCall(cichelli1.NotEver(1))
      }
    } else {
      tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
      tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
      tmp5 = NofibPrelude.Cons(h, hs);
      tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
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
lscomp1_inst_37_3_tsni = function lscomp1_inst_37_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_37_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_37_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_37_3_tsni(ls1)
  }
});
lambda$_inst_37_3_tsni = function lambda$_inst_37_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_37_3_tsni = function lscomp2$_inst_37_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_37_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_37_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_37_3_tsni1 = function lambda$_inst_37_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_37_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_37_3_4_tsni = function enumFromTo_lz_inst_37_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_37_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_37_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_37_3_4_tsni(a, b)
  }
});
lambda$_inst_37_3_4_tsni = function lambda$_inst_37_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_37_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_37_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_37_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_37_5_tsni = function enumFromTo_lz_inst_37_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_37_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_37_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_37_5_tsni(a, b)
  }
});
lambda$_inst_37_5_tsni = function lambda$_inst_37_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_37_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_37_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_37_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
findhash__inst_38_39_tsni = function findhash__inst_38_39_tsni(keyHashSet, charAssocs, ks) {
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
      tmp = assocm_inst_38_39_1_tsni(a, charAssocs);
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
tryy$_inst_38_39_tsni = function tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, param0, newKeyHashSet, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = append_inst_38_39_51_tsni(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param01, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param01 = _deforest_K_s;
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
  tmp2 = hash_inst_38_39_50_tsni(newCharAssocs, tmp1);
  scrut = cichelli1.hinsert(tmp2, keyHashSet);
  if (scrut instanceof NofibPrelude.None.class) {
    return runtime.safeCall(cichelli1.NotEver(1))
  } else if (scrut instanceof NofibPrelude.Some.class) {
    param0 = scrut.x;
    newKeyHashSet = param0;
    return findhash__inst_38_39_tsni(newKeyHashSet, newCharAssocs, ks)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_38_39_tsni = function lambda$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_38_39_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_38_39_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_38_39_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_38_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_38_39_tsni1 = function lambda$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_38_39_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_38_39_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_38_39_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_38_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_38_39_tsni2 = function lambda$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
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
      return match_xs_arm_Nil_inst_38_39_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_38_39_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_38_39_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
    };
    return tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_38_39_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_38_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_38_39_tsni3 = function lambda$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = (ys) => {
    return match_xs_arm_Nil_inst_38_39_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_38_39_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lscomp1_inst_38_39_3_tsni = function lscomp1_inst_38_39_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_38_39_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_38_39_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_38_39_3_tsni(ls1)
  }
});
lambda$_inst_38_39_3_tsni = function lambda$_inst_38_39_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_38_39_3_tsni = function lscomp2$_inst_38_39_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_38_39_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_38_39_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_38_39_3_tsni1 = function lambda$_inst_38_39_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_38_39_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_38_39_3_4_tsni = function enumFromTo_lz_inst_38_39_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_38_39_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_38_39_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_38_39_3_4_tsni(a, b)
  }
});
lambda$_inst_38_39_3_4_tsni = function lambda$_inst_38_39_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_38_39_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_38_39_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_38_39_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_38_39_5_tsni = function enumFromTo_lz_inst_38_39_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_38_39_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_38_39_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_38_39_5_tsni(a, b)
  }
});
lambda$_inst_38_39_5_tsni = function lambda$_inst_38_39_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_38_39_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_38_39_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_38_39_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
assocm_inst_38_39_1_tsni = function assocm_inst_38_39_1_tsni(x, yz) {
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
            tmp = runtime.safeCall(lambda_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, (ys) => {
              return match_xs_arm_Nil_inst_38_39_51_tsni(ys)
            })
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_38_39_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_38_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
take_inst_40_41_tsni = function take_inst_40_41_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_40_58_26_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_40_58_26_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_40_41_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_40_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_40_42_tsni = function append_inst_40_42_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_40_42_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_40_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
blocked_inst_40_43_tsni = function blocked_inst_40_43_tsni(ls) {
  return blocked__inst_40_43_36_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_40_43_36_tsni = function blocked__inst_40_43_36_tsni(ds, ls) {
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
    tmp = ends_inst_40_43_36_29_tsni(k);
    tmp1 = union_inst_40_43_36_56_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_40_43_36_30_tsni(ds_));
    scrut = partition__inst_40_43_36_31_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_40_43_36_tsni(ds_, rest);
      tmp3 = append_inst_40_43_36_45_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_40_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_40_43_36_29_tsni = function ends_inst_40_43_36_29_tsni(k) {
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
      return match_ls_arm_Cons_inst_40_43_36_56_57_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_40_43_36_56_57_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_43_36_30_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_40_43_36_30_22_tsni(ds_, x)
  }
});
lambda$_inst_40_43_36_30_22_tsni = function lambda$_inst_40_43_36_30_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_40_43_36_30_22_20_tsni(x);
  return subset_inst_40_43_36_30_22_52_tsni(tmp, ds_)
};
ends_inst_40_43_36_30_22_20_tsni = function ends_inst_40_43_36_30_22_20_tsni(k) {
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
      return match_ls_arm_Cons_inst_40_43_36_30_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_40_43_36_30_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_40_43_36_31_tsni = function partition__inst_40_43_36_31_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_40_43_36_31_32_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_40_43_36_31_32_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_40_43_36_31_32_33_tsni(p, x, y)
  }
});
lambda$_inst_40_43_36_31_32_33_tsni = function lambda$_inst_40_43_36_31_32_33_tsni(p, x, y) {
  return select_inst_40_43_36_31_32_33_34_tsni(p, x, y)
};
select_inst_40_43_36_31_32_33_34_tsni = function select_inst_40_43_36_31_32_33_34_tsni(p, x, ts_fs) {
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
        tmp2 = append_inst_40_43_36_45_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_40_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
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
findhash_inst_40_44_tsni = function findhash_inst_40_44_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_40_44_39_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_40_44_39_tsni = function findhash__inst_40_44_39_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_40_44_39_tsni = function tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, param0, newKeyHashSet, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.append(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param01, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param01 = _deforest_K_s;
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
  tmp2 = hash_inst_40_44_39_50_tsni(newCharAssocs, tmp1);
  scrut = cichelli1.hinsert(tmp2, keyHashSet);
  if (scrut instanceof NofibPrelude.None.class) {
    return runtime.safeCall(cichelli1.NotEver(1))
  } else if (scrut instanceof NofibPrelude.Some.class) {
    param0 = scrut.x;
    newKeyHashSet = param0;
    return findhash__inst_40_44_39_tsni(newKeyHashSet, newCharAssocs, ks)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_40_44_39_tsni = function lambda$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_40_44_39_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_40_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_40_44_39_tsni1 = function lambda$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_40_44_39_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_40_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_40_44_39_tsni2 = function lambda$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
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
    return tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_40_44_39_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_40_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_40_44_39_tsni3 = function lambda$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_40_44_39_1_tsni = function assocm_inst_40_44_39_1_tsni(x, yz) {
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
            tmp = runtime.safeCall(lambda_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, NofibPrelude.Nil)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_40_44_39_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_40_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
lscomp1_inst_40_44_39_3_tsni = function lscomp1_inst_40_44_39_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_44_39_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_44_39_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_40_44_39_3_tsni(ls1)
  }
});
lambda$_inst_40_44_39_3_tsni = function lambda$_inst_40_44_39_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_40_44_39_3_tsni = function lscomp2$_inst_40_44_39_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_40_44_39_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_40_44_39_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_40_44_39_3_tsni1 = function lambda$_inst_40_44_39_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_40_44_39_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_40_44_39_3_4_tsni = function enumFromTo_lz_inst_40_44_39_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_44_39_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_44_39_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_40_44_39_3_4_tsni(a, b)
  }
});
lambda$_inst_40_44_39_3_4_tsni = function lambda$_inst_40_44_39_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_40_44_39_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_40_44_39_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_40_44_39_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_40_44_39_5_tsni = function enumFromTo_lz_inst_40_44_39_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_40_44_39_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_40_44_39_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_40_44_39_5_tsni(a, b)
  }
});
lambda$_inst_40_44_39_5_tsni = function lambda$_inst_40_44_39_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_40_44_39_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_40_44_39_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_40_44_39_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
append_inst_40_43_36_45_tsni = function append_inst_40_43_36_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
cichelli__inst_46_47_tsni = function cichelli__inst_46_47_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_46_47_41_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_46_47_42_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_46_47_58_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_46_47_43_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_46_47_44_tsni(hashkeys)
};
findhash_inst_46_47_44_tsni = function findhash_inst_46_47_44_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_46_47_44_39_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_46_47_44_39_tsni = function findhash__inst_46_47_44_39_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_46_47_44_39_tsni = function tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, param0, newKeyHashSet, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.append(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param01, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param01 = _deforest_K_s;
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
  tmp2 = hash_inst_46_47_44_39_50_tsni(newCharAssocs, tmp1);
  scrut = cichelli1.hinsert(tmp2, keyHashSet);
  if (scrut instanceof NofibPrelude.None.class) {
    return runtime.safeCall(cichelli1.NotEver(1))
  } else if (scrut instanceof NofibPrelude.Some.class) {
    param0 = scrut.x;
    newKeyHashSet = param0;
    return findhash__inst_46_47_44_39_tsni(newKeyHashSet, newCharAssocs, ks)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_46_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_46_47_44_39_tsni = function lambda$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_46_47_44_39_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_46_47_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_46_47_44_39_tsni1 = function lambda$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_46_47_44_39_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_46_47_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_46_47_44_39_tsni2 = function lambda$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
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
    return tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_46_47_44_39_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_46_47_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_46_47_44_39_tsni3 = function lambda$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lscomp1_inst_46_47_44_39_3_tsni = function lscomp1_inst_46_47_44_39_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_47_44_39_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_47_44_39_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_46_47_44_39_3_tsni(ls1)
  }
});
lambda$_inst_46_47_44_39_3_tsni = function lambda$_inst_46_47_44_39_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_46_47_44_39_3_tsni = function lscomp2$_inst_46_47_44_39_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_46_47_44_39_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_46_47_44_39_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_46_47_44_39_3_tsni1 = function lambda$_inst_46_47_44_39_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_46_47_44_39_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_46_47_44_39_3_4_tsni = function enumFromTo_lz_inst_46_47_44_39_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_47_44_39_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_47_44_39_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_46_47_44_39_3_4_tsni(a, b)
  }
});
lambda$_inst_46_47_44_39_3_4_tsni = function lambda$_inst_46_47_44_39_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_46_47_44_39_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_46_47_44_39_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_46_47_44_39_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_46_47_44_39_5_tsni = function enumFromTo_lz_inst_46_47_44_39_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_46_47_44_39_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_46_47_44_39_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_46_47_44_39_5_tsni(a, b)
  }
});
lambda$_inst_46_47_44_39_5_tsni = function lambda$_inst_46_47_44_39_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_46_47_44_39_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_46_47_44_39_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_46_47_44_39_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
assocm_inst_46_47_44_39_1_tsni = function assocm_inst_46_47_44_39_1_tsni(x, yz) {
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
            tmp = runtime.safeCall(lambda_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, NofibPrelude.Nil)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_46_47_44_39_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_46_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
blocked_inst_46_47_43_tsni = function blocked_inst_46_47_43_tsni(ls) {
  return blocked__inst_46_47_43_36_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_46_47_43_36_tsni = function blocked__inst_46_47_43_36_tsni(ds, ls) {
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
    tmp = ends_inst_46_47_43_36_29_tsni(k);
    tmp1 = union_inst_46_47_43_36_56_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_46_47_43_36_30_tsni(ds_));
    scrut = partition__inst_46_47_43_36_31_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_46_47_43_36_tsni(ds_, rest);
      tmp3 = append_inst_46_47_43_36_45_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_46_47_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_46_47_43_36_31_tsni = function partition__inst_46_47_43_36_31_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_46_47_43_36_31_32_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_46_47_43_36_31_32_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_46_47_43_36_31_32_33_tsni(p, x, y)
  }
});
lambda$_inst_46_47_43_36_31_32_33_tsni = function lambda$_inst_46_47_43_36_31_32_33_tsni(p, x, y) {
  return select_inst_46_47_43_36_31_32_33_34_tsni(p, x, y)
};
select_inst_46_47_43_36_31_32_33_34_tsni = function select_inst_46_47_43_36_31_32_33_34_tsni(p, x, ts_fs) {
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
        tmp2 = append_inst_46_47_43_36_45_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_46_47_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
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
lambda_inst_46_47_43_36_30_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_46_47_43_36_30_22_tsni(ds_, x)
  }
});
lambda$_inst_46_47_43_36_30_22_tsni = function lambda$_inst_46_47_43_36_30_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_46_47_43_36_30_22_20_tsni(x);
  return subset_inst_46_47_43_36_30_22_52_tsni(tmp, ds_)
};
ends_inst_46_47_43_36_30_22_20_tsni = function ends_inst_46_47_43_36_30_22_20_tsni(k) {
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
      return match_ls_arm_Cons_inst_46_47_43_36_30_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_46_47_43_36_30_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_46_47_43_36_29_tsni = function ends_inst_46_47_43_36_29_tsni(k) {
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
      return match_ls_arm_Cons_inst_46_47_43_36_56_57_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_46_47_43_36_56_57_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_46_47_43_36_45_tsni = function append_inst_46_47_43_36_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_46_47_42_tsni = function append_inst_46_47_42_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_46_47_42_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_46_47_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
take_inst_46_47_41_tsni = function take_inst_46_47_41_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_46_47_58_26_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_46_47_58_26_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_46_47_41_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_46_47_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
prog_inst_48_49_tsni = function prog_inst_48_49_tsni(n) {
  return cichelli__inst_48_49_47_tsni(n)
};
cichelli__inst_48_49_47_tsni = function cichelli__inst_48_49_47_tsni(n) {
  let attribkeys_, hashkeys, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
  tmp = NofibPrelude.intMod(n, 2);
  tmp1 = take_inst_48_49_47_41_tsni(tmp, cichelli.keys);
  tmp2 = append_inst_48_49_47_42_tsni(cichelli.keys, tmp1);
  tmp3 = attribkeys_inst_48_49_47_58_tsni(tmp2);
  attribkeys_ = tmp3;
  tmp4 = cichelli.freqsorted(attribkeys_);
  tmp5 = blocked_inst_48_49_47_43_tsni(tmp4);
  hashkeys = tmp5;
  return findhash_inst_48_49_47_44_tsni(hashkeys)
};
take_inst_48_49_47_41_tsni = function take_inst_48_49_47_41_tsni(n, ls) {
  let param0, param1, h, t, scrut, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Nil.class) {
    return (f) => {
      return match_xs_arm_Nil_inst_48_49_47_58_26_tsni(f)
    }
  } else if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    h = param0;
    t = param1;
    scrut = n <= 0;
    if (scrut === true) {
      return (f) => {
        return match_xs_arm_Nil_inst_48_49_47_58_26_tsni(f)
      }
    } else {
      tmp = n - 1;
      tmp1 = take_inst_48_49_47_41_tsni(tmp, t);
      _deforest_Cons_head = h;
      _deforest_Cons_tail = tmp1;
      return (f) => {
        return match_xs_arm_Cons_inst_48_49_47_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
append_inst_48_49_47_42_tsni = function append_inst_48_49_47_42_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_48_49_47_42_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (f) => {
      return match_xs_arm_Cons_inst_48_49_47_58_26_tsni(f, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
blocked_inst_48_49_47_43_tsni = function blocked_inst_48_49_47_43_tsni(ls) {
  return blocked__inst_48_49_47_43_36_tsni(NofibPrelude.Nil, ls)
};
blocked__inst_48_49_47_43_36_tsni = function blocked__inst_48_49_47_43_36_tsni(ds, ls) {
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
    tmp = ends_inst_48_49_47_43_36_29_tsni(k);
    tmp1 = union_inst_48_49_47_43_36_56_tsni(ds, tmp);
    ds_ = tmp1;
    lambda$this = runtime.safeCall(lambda_inst_48_49_47_43_36_30_tsni(ds_));
    scrut = partition__inst_48_49_47_43_36_31_tsni(lambda$this, ks);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      det = first0;
      rest = first1;
      tmp2 = blocked__inst_48_49_47_43_36_tsni(ds_, rest);
      tmp3 = append_inst_48_49_47_43_36_45_tsni(det, tmp2);
      _deforest_Cons_head = k;
      _deforest_Cons_tail = tmp3;
      return (keyHashSet, charAssocs) => {
        return match_ks_arm_Cons_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
ends_inst_48_49_47_43_36_29_tsni = function ends_inst_48_49_47_43_36_29_tsni(k) {
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
      return match_ls_arm_Cons_inst_48_49_47_43_36_56_57_tsni(xs, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (xs) => {
      return match_ls_arm_Cons_inst_48_49_47_43_36_56_57_tsni(xs, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_48_49_47_43_36_30_tsni = (undefined, function (ds_) {
  return (x) => {
    return lambda$_inst_48_49_47_43_36_30_22_tsni(ds_, x)
  }
});
lambda$_inst_48_49_47_43_36_30_22_tsni = function lambda$_inst_48_49_47_43_36_30_22_tsni(ds_, x) {
  let tmp;
  tmp = ends_inst_48_49_47_43_36_30_22_20_tsni(x);
  return subset_inst_48_49_47_43_36_30_22_52_tsni(tmp, ds_)
};
ends_inst_48_49_47_43_36_30_22_20_tsni = function ends_inst_48_49_47_43_36_30_22_20_tsni(k) {
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
      return match_ls_arm_Cons_inst_48_49_47_43_36_30_22_52_53_tsni(p, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = a;
    _deforest_Cons_tail = tmp;
    return (p) => {
      return match_ls_arm_Cons_inst_48_49_47_43_36_30_22_52_53_tsni(p, _deforest_Cons_head, _deforest_Cons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
partition__inst_48_49_47_43_36_31_tsni = function partition__inst_48_49_47_43_36_31_tsni(p, ls) {
  let arr, lambda$this;
  arr = globalThis.Object.freeze([
    (ys) => {
      return ys
    },
    NofibPrelude.Nil
  ]);
  lambda$this = runtime.safeCall(lambda_inst_48_49_47_43_36_31_32_tsni(p));
  return NofibPrelude.foldr(lambda$this, arr, ls)
};
lambda_inst_48_49_47_43_36_31_32_tsni = (undefined, function (p) {
  return (x, y) => {
    return lambda$_inst_48_49_47_43_36_31_32_33_tsni(p, x, y)
  }
});
lambda$_inst_48_49_47_43_36_31_32_33_tsni = function lambda$_inst_48_49_47_43_36_31_32_33_tsni(p, x, y) {
  return select_inst_48_49_47_43_36_31_32_33_34_tsni(p, x, y)
};
select_inst_48_49_47_43_36_31_32_33_34_tsni = function select_inst_48_49_47_43_36_31_32_33_34_tsni(p, x, ts_fs) {
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
        tmp2 = append_inst_48_49_47_43_36_45_tsni(xs, ys);
        _deforest_Cons_head1 = x1;
        _deforest_Cons_tail1 = tmp2;
        return (keyHashSet, charAssocs) => {
          return match_ks_arm_Cons_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, _deforest_Cons_head1, _deforest_Cons_tail1)
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
findhash_inst_48_49_47_44_tsni = function findhash_inst_48_49_47_44_tsni(keys) {
  let tmp;
  tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
  return findhash__inst_48_49_47_44_39_tsni(tmp, NofibPrelude.Nil, keys)
};
findhash__inst_48_49_47_44_39_tsni = function findhash__inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, ks) {
  return runtime.safeCall(ks(keyHashSet, charAssocs))
};
tryy$_inst_48_49_47_44_39_tsni = function tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, newAssocs) {
  let newCharAssocs, scrut, param0, newKeyHashSet, tmp, tmp1, tmp2, _deforest_K_s, _deforest_K_c1, _deforest_K_c2, _deforest_K_i;
  tmp = NofibPrelude.append(newAssocs, charAssocs);
  newCharAssocs = tmp;
  _deforest_K_s = s;
  _deforest_K_c1 = a;
  _deforest_K_c2 = z;
  _deforest_K_i = n;
  tmp1 = (cvs) => {
    let param01, param1, param2, param3, a1, z1, n1, tmp3, tmp4, tmp5;
    param01 = _deforest_K_s;
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
  tmp2 = hash_inst_48_49_47_44_39_50_tsni(newCharAssocs, tmp1);
  scrut = cichelli1.hinsert(tmp2, keyHashSet);
  if (scrut instanceof NofibPrelude.None.class) {
    return runtime.safeCall(cichelli1.NotEver(1))
  } else if (scrut instanceof NofibPrelude.Some.class) {
    param0 = scrut.x;
    newKeyHashSet = param0;
    return findhash__inst_48_49_47_44_39_tsni(newKeyHashSet, newCharAssocs, ks)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_48_49_47_44_39_tsni = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (n1) => {
    return lambda$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1)
  }
});
lambda$_inst_48_49_47_44_39_tsni = function lambda$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, n1) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    z,
    n1
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_48_49_47_44_39_tsni1 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_48_49_47_44_39_tsni1(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_48_49_47_44_39_tsni1 = function lambda$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
lambda_inst_48_49_47_44_39_tsni2 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (caseScrut) => {
    return lambda$_inst_48_49_47_44_39_tsni2(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut)
  }
});
lambda$_inst_48_49_47_44_39_tsni2 = function lambda$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, caseScrut) {
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
    return tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp1)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_48_49_47_44_39_tsni3 = (undefined, function (keyHashSet, charAssocs, s, a, z, n, ks) {
  return (m) => {
    return lambda$_inst_48_49_47_44_39_tsni3(keyHashSet, charAssocs, s, a, z, n, ks, m)
  }
});
lambda$_inst_48_49_47_44_39_tsni3 = function lambda$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, m) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    a,
    m
  ]);
  tmp = NofibPrelude.Cons(arr, NofibPrelude.Nil);
  return tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z, n, ks, tmp)
};
assocm_inst_48_49_47_44_39_1_tsni = function assocm_inst_48_49_47_44_39_1_tsni(x, yz) {
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
            tmp = runtime.safeCall(lambda_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks));
            tmp1 = cichelli.enumFromTo_lz(0, cichelli.maxval);
            return cichelli.firstSuccess(tmp, tmp1)
          } else if (first11 instanceof NofibPrelude.Some.class) {
            param02 = first11.x;
            zc = param02;
            return tryy$_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, NofibPrelude.Nil)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        return assocm_inst_48_49_47_44_39_1_tsni(x, yzs)
      }
    } else {
      return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
        return match_first0_arm_None_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
      }
    }
  } else {
    return (keyHashSet, charAssocs, s, a, z1, n, ks, first11) => {
      return match_first0_arm_None_inst_48_49_47_44_39_tsni(keyHashSet, charAssocs, s, a, z1, n, ks, first11)
    }
  }
};
lscomp1_inst_48_49_47_44_39_3_tsni = function lscomp1_inst_48_49_47_44_39_3_tsni(ls1) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_47_44_39_3_tsni(ls1));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_47_44_39_3_tsni = (undefined, function (ls1) {
  return () => {
    return lambda$_inst_48_49_47_44_39_3_tsni(ls1)
  }
});
lambda$_inst_48_49_47_44_39_3_tsni = function lambda$_inst_48_49_47_44_39_3_tsni(ls1) {
  let scrut;
  scrut = NofibPrelude.force(ls1);
  return runtime.safeCall(scrut(ls1))
};
lscomp2$_inst_48_49_47_44_39_3_tsni = function lscomp2$_inst_48_49_47_44_39_3_tsni(ls1, m, ms, ls2) {
  let scrut;
  scrut = NofibPrelude.force(ls2);
  return runtime.safeCall(scrut(ls1, m, ms))
};
lambda_inst_48_49_47_44_39_3_tsni1 = (undefined, function (ls1, m, ms, n, ns) {
  return () => {
    return lambda$_inst_48_49_47_44_39_3_tsni1(ls1, m, ms, n, ns)
  }
});
lambda$_inst_48_49_47_44_39_3_tsni1 = function lambda$_inst_48_49_47_44_39_3_tsni(ls1, m, ms, n, ns) {
  let arr, tmp;
  arr = globalThis.Object.freeze([
    m,
    n
  ]);
  tmp = lscomp2$_inst_48_49_47_44_39_3_tsni(ls1, m, ms, ns);
  return NofibPrelude.LzCons(arr, tmp)
};
enumFromTo_lz_inst_48_49_47_44_39_3_4_tsni = function enumFromTo_lz_inst_48_49_47_44_39_3_4_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_47_44_39_3_4_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_47_44_39_3_4_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_48_49_47_44_39_3_4_tsni(a, b)
  }
});
lambda$_inst_48_49_47_44_39_3_4_tsni = function lambda$_inst_48_49_47_44_39_3_4_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_48_49_47_44_39_3_4_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1, m, ms) => {
      let param0, param1, n, ns, tmp2;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      n = param0;
      ns = param1;
      tmp2 = runtime.safeCall(lambda_inst_48_49_47_44_39_3_tsni1(ls1, m, ms, n, ns));
      return NofibPrelude.lazy(tmp2)
    }
  } else {
    return (ls1, m, ms) => {
      return lscomp1_inst_48_49_47_44_39_3_tsni(ms)
    }
  }
};
enumFromTo_lz_inst_48_49_47_44_39_5_tsni = function enumFromTo_lz_inst_48_49_47_44_39_5_tsni(a, b) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_48_49_47_44_39_5_tsni(a, b));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_48_49_47_44_39_5_tsni = (undefined, function (a, b) {
  return () => {
    return lambda$_inst_48_49_47_44_39_5_tsni(a, b)
  }
});
lambda$_inst_48_49_47_44_39_5_tsni = function lambda$_inst_48_49_47_44_39_5_tsni(a, b) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = a <= b;
  if (scrut === true) {
    tmp = a + 1;
    tmp1 = enumFromTo_lz_inst_48_49_47_44_39_5_tsni(tmp, b);
    _deforest_LzCons_head = a;
    _deforest_LzCons_tail = tmp1;
    return (ls1) => {
      let param0, param1, m, ms, tmp2, tmp3;
      param0 = _deforest_LzCons_head;
      param1 = _deforest_LzCons_tail;
      m = param0;
      ms = param1;
      tmp2 = enumFromTo_lz_inst_48_49_47_44_39_3_4_tsni(0, cichelli1.maxval);
      tmp3 = lscomp2$_inst_48_49_47_44_39_3_tsni(ls1, m, ms, tmp2);
      return NofibPrelude.force(tmp3)
    }
  } else {
    return (ls1) => {
      return NofibPrelude.LzNil
    }
  }
};
append_inst_48_49_47_43_36_45_tsni = function append_inst_48_49_47_43_36_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_0_50_tsni = function hash_inst_0_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_6_7_50_tsni = function hash_inst_6_7_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_8_50_tsni = function hash_inst_8_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_8_51_tsni = function append_inst_8_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_9_50_tsni = function hash_inst_9_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_9_51_tsni = function append_inst_9_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_13_50_tsni = function hash_inst_13_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_13_51_tsni = function append_inst_13_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_14_50_tsni = function hash_inst_14_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_14_51_tsni = function append_inst_14_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_15_50_tsni = function hash_inst_15_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_15_51_tsni = function append_inst_15_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_16_50_tsni = function hash_inst_16_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_16_51_tsni = function append_inst_16_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_17_50_tsni = function hash_inst_17_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_17_51_tsni = function append_inst_17_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_18_50_tsni = function hash_inst_18_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_18_51_tsni = function append_inst_18_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
subset_inst_19_52_tsni = function subset_inst_19_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_19_52_53_tsni(lambda$this, xs)
};
all_inst_19_52_53_tsni = function all_inst_19_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
subset_inst_21_22_52_tsni = function subset_inst_21_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_21_22_52_53_tsni(lambda$this, xs)
};
all_inst_21_22_52_53_tsni = function all_inst_21_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
concat_inst_54_tsni = function concat_inst_54_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_54_55_tsni = function append_inst_54_55_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
union_inst_28_56_tsni = function union_inst_28_56_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_28_56_57_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_28_56_57_tsni = function lscomp$_inst_28_56_57_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_28_30_22_52_tsni = function subset_inst_28_30_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_28_30_22_52_53_tsni(lambda$this, xs)
};
all_inst_28_30_22_52_53_tsni = function all_inst_28_30_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
append_inst_28_45_tsni = function append_inst_28_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
append_inst_35_36_45_tsni = function append_inst_35_36_45_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
subset_inst_35_36_30_22_52_tsni = function subset_inst_35_36_30_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_35_36_30_22_52_53_tsni(lambda$this, xs)
};
all_inst_35_36_30_22_52_53_tsni = function all_inst_35_36_30_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_35_36_56_tsni = function union_inst_35_36_56_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_35_36_56_57_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_35_36_56_57_tsni = function lscomp$_inst_35_36_56_57_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
hash_inst_37_50_tsni = function hash_inst_37_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_37_51_tsni = function append_inst_37_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
hash_inst_38_39_50_tsni = function hash_inst_38_39_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
append_inst_38_39_51_tsni = function append_inst_38_39_51_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
attribkeys_inst_40_58_tsni = function attribkeys_inst_40_58_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_40_58_26_tsni(tmp, ks)
};
map_inst_40_58_26_tsni = function map_inst_40_58_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
union_inst_40_43_36_56_tsni = function union_inst_40_43_36_56_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_40_43_36_56_57_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_40_43_36_56_57_tsni = function lscomp$_inst_40_43_36_56_57_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_40_43_36_30_22_52_tsni = function subset_inst_40_43_36_30_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_40_43_36_30_22_52_53_tsni(lambda$this, xs)
};
all_inst_40_43_36_30_22_52_53_tsni = function all_inst_40_43_36_30_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
hash_inst_40_44_39_50_tsni = function hash_inst_40_44_39_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
hash_inst_46_47_44_39_50_tsni = function hash_inst_46_47_44_39_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
};
subset_inst_46_47_43_36_30_22_52_tsni = function subset_inst_46_47_43_36_30_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_46_47_43_36_30_22_52_53_tsni(lambda$this, xs)
};
all_inst_46_47_43_36_30_22_52_53_tsni = function all_inst_46_47_43_36_30_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
union_inst_46_47_43_36_56_tsni = function union_inst_46_47_43_36_56_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_46_47_43_36_56_57_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_46_47_43_36_56_57_tsni = function lscomp$_inst_46_47_43_36_56_57_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
attribkeys_inst_46_47_58_tsni = function attribkeys_inst_46_47_58_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_46_47_58_26_tsni(tmp, ks)
};
map_inst_46_47_58_26_tsni = function map_inst_46_47_58_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
attribkeys_inst_48_49_47_58_tsni = function attribkeys_inst_48_49_47_58_tsni(ks) {
  let tmp;
  tmp = lambda2;
  return map_inst_48_49_47_58_26_tsni(tmp, ks)
};
map_inst_48_49_47_58_26_tsni = function map_inst_48_49_47_58_26_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
union_inst_48_49_47_43_36_56_tsni = function union_inst_48_49_47_43_36_56_tsni(xs, ys) {
  let tmp;
  tmp = lscomp$_inst_48_49_47_43_36_56_57_tsni(xs, ys);
  return NofibPrelude.append(xs, tmp)
};
lscomp$_inst_48_49_47_43_36_56_57_tsni = function lscomp$_inst_48_49_47_43_36_56_57_tsni(xs, ls) {
  return runtime.safeCall(ls(xs))
};
subset_inst_48_49_47_43_36_30_22_52_tsni = function subset_inst_48_49_47_43_36_30_22_52_tsni(xs, ys) {
  let lambda$this;
  lambda$this = runtime.safeCall(lambda1(ys));
  return all_inst_48_49_47_43_36_30_22_52_53_tsni(lambda$this, xs)
};
all_inst_48_49_47_43_36_30_22_52_53_tsni = function all_inst_48_49_47_43_36_30_22_52_53_tsni(p, ls) {
  return runtime.safeCall(ls(p))
};
hash_inst_48_49_47_44_39_50_tsni = function hash_inst_48_49_47_44_39_50_tsni(cvs, k) {
  return runtime.safeCall(k(cvs))
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
  tmp2 = hash_inst_0_50_tsni(newCharAssocs, tmp1);
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
    return match_xs_arm_Nil_inst_8_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_8_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
      return match_xs_arm_Nil_inst_13_51_tsni(ys)
    };
    tmp = (ys) => {
      return match_xs_arm_Cons_inst_13_51_tsni(ys, _deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = arr;
    _deforest_Cons_tail = tmp;
    tmp1 = (ys) => {
      return match_xs_arm_Cons_inst_13_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_15_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_15_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
    return match_xs_arm_Nil_inst_17_51_tsni(ys)
  };
  tmp = (ys) => {
    return match_xs_arm_Cons_inst_17_51_tsni(ys, _deforest_Cons_head, _deforest_Cons_tail)
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
  return subset_inst_19_52_tsni(tmp, ds_)
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
  return runtime.safeCall(cichelli1.K(k, tmp, tmp1, tmp2))
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
(class cichelli {
  static {
    cichelli1 = cichelli;
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
    this.K = function K(s1, c11, c21, i1) {
      return globalThis.Object.freeze(new K.class(s1, c11, c21, i1));
    };
    Object.defineProperty(this.K, "class", {
      enumerable: true,
      value: class K {
        constructor(s, c1, c2, i) {
          this.s = s;
          this.c1 = c1;
          this.c2 = c2;
          this.i = i;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "K", ["s", "c1", "c2", "i"]]; 
      }
    });
    this.H = function H(f1, s1, ls1) {
      return globalThis.Object.freeze(new H.class(f1, s1, ls1));
    };
    Object.defineProperty(this.H, "class", {
      enumerable: true,
      value: class H {
        constructor(f, s, ls) {
          this.f = f;
          this.s = s;
          this.ls = ls;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "H", ["f", "s", "ls"]]; 
      }
    });
    tmp44 = NofibPrelude.listLen(cichelli.keys);
    this.numberofkeys = tmp44;
    tmp45 = attribkeys_inst_25_tsni(cichelli.keys);
    tmp46 = map_inst_23_tsni(ends_inst_24_tsni, tmp45);
    tmp47 = concat_inst_54_tsni(tmp46);
    tmp48 = cichelli.histo(tmp47);
    this.freqtab = tmp48;
    tmp49 = NofibPrelude.listLen(cichelli.freqtab);
    this.maxval = tmp49;
    this.Status = class Status {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Status"]; 
    };
    this.NotEver = function NotEver(i1) {
      return globalThis.Object.freeze(new NotEver.class(i1));
    };
    Object.defineProperty(this.NotEver, "class", {
      enumerable: true,
      value: class NotEver extends cichelli.Status {
        constructor(i) {
          super();
          this.i = i;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "NotEver", ["i"]]; 
      }
    });
    this.YesIts = function YesIts(i1, t1) {
      return globalThis.Object.freeze(new YesIts.class(i1, t1));
    };
    Object.defineProperty(this.YesIts, "class", {
      enumerable: true,
      value: class YesIts extends cichelli.Status {
        constructor(i, t) {
          super();
          this.i = i;
          this.t = t;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "YesIts", ["i", "t"]]; 
      }
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
    let param0, param1, param2, param3, a1, z, tmp;
    if (k instanceof cichelli.K.class) {
      param0 = k.s;
      param1 = k.c1;
      param2 = k.c2;
      param3 = k.i;
      a1 = param1;
      z = param2;
      tmp = NofibPrelude.Cons(z, NofibPrelude.Nil);
      return NofibPrelude.Cons(a1, tmp)
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
  static assocm(x1, yz1) {
    let param0, param1, first1, first0, y, z, yzs, scrut;
    if (yz1 instanceof NofibPrelude.Cons.class) {
      param0 = yz1.head;
      param1 = yz1.tail;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first0;
        z = first1;
        yzs = param1;
        scrut = x1 === y;
        if (scrut === true) {
          return runtime.safeCall(NofibPrelude.Some(z))
        } else {
          return cichelli.assocm(x1, yzs)
        }
      } else {
        return NofibPrelude.None
      }
    } else {
      return NofibPrelude.None
    }
  } 
  static histins(x2, yns) {
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
        scrut = x2 === y;
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
          tmp1 = cichelli.histins(x2, yns1);
          return NofibPrelude.Cons(arr1, tmp1)
        }
      } else {
        arr2 = globalThis.Object.freeze([
          x2,
          1
        ]);
        return NofibPrelude.Cons(arr2, NofibPrelude.Nil)
      }
    } else {
      arr3 = globalThis.Object.freeze([
        x2,
        1
      ]);
      return NofibPrelude.Cons(arr3, NofibPrelude.Nil)
    }
  } 
  static histo(ls1) {
    return NofibPrelude.foldr(cichelli.histins, NofibPrelude.Nil, ls1)
  } 
  static subset(xs, ys) {
    let lambda$this;
    lambda$this = runtime.safeCall(lambda1(ys));
    return NofibPrelude.all(lambda$this, xs)
  } 
  static union(xs1, ys1) {
    let tmp;
    tmp = lscomp$(xs1, ys1);
    return NofibPrelude.append(xs1, tmp)
  } 
  static attribkeys(ks) {
    let tmp;
    tmp = lambda2;
    return NofibPrelude.map(tmp, ks)
  } 
  static minm(x3, y) {
    let param0, x4;
    if (x3 instanceof NofibPrelude.None.class) {
      return y
    } else if (x3 instanceof NofibPrelude.Some.class) {
      param0 = x3.x;
      x4 = param0;
      return NofibPrelude.min(x4, y)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static maxm(x4, y1) {
    let param0, x5;
    if (x4 instanceof NofibPrelude.None.class) {
      return y1
    } else if (x4 instanceof NofibPrelude.Some.class) {
      param0 = x4.x;
      x5 = param0;
      return NofibPrelude.max(x5, y1)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static hash(cvs, k1) {
    let param0, param1, param2, param3, a1, z, n, tmp, tmp1, tmp2;
    if (k1 instanceof cichelli.K.class) {
      param0 = k1.s;
      param1 = k1.c1;
      param2 = k1.c2;
      param3 = k1.i;
      a1 = param1;
      z = param2;
      n = param3;
      tmp = cichelli.assoc(a1, cvs);
      tmp1 = n + tmp;
      tmp2 = cichelli.assoc(z, cvs);
      return tmp1 + tmp2
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static select(p, x5, ts_fs) {
    let first1, first0, ts, fs, scrut, tmp, arr, tmp1, arr1;
    if (runtime.Tuple.isArrayLike(ts_fs) && ts_fs.length === 2) {
      first0 = runtime.Tuple.get(ts_fs, 0);
      first1 = runtime.Tuple.get(ts_fs, 1);
      ts = first0;
      fs = first1;
      scrut = runtime.safeCall(p(x5));
      if (scrut === true) {
        tmp = NofibPrelude.Cons(x5, ts);
        arr = globalThis.Object.freeze([
          tmp,
          fs
        ]);
        return arr
      } else {
        tmp1 = NofibPrelude.Cons(x5, fs);
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
  static partition_(p1, ls2) {
    let arr, lambda$this;
    arr = globalThis.Object.freeze([
      NofibPrelude.Nil,
      NofibPrelude.Nil
    ]);
    lambda$this = runtime.safeCall(lambda3(p1));
    return NofibPrelude.foldr(lambda$this, arr, ls2)
  } 
  static freqsorted(x6) {
    return x6
  } 
  static blocked_(ds, ls3) {
    let param0, param1, k2, ks1, ds_, scrut, first1, first0, det, rest, tmp, tmp1, tmp2, tmp3, lambda$this;
    if (ls3 instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (ls3 instanceof NofibPrelude.Cons.class) {
      param0 = ls3.head;
      param1 = ls3.tail;
      k2 = param0;
      ks1 = param1;
      tmp = ends_inst_28_29_tsni(k2);
      tmp1 = union_inst_28_56_tsni(ds, tmp);
      ds_ = tmp1;
      lambda$this = runtime.safeCall(lambda_inst_28_30_tsni(ds_));
      scrut = partition__inst_28_31_tsni(lambda$this, ks1);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first0 = runtime.Tuple.get(scrut, 0);
        first1 = runtime.Tuple.get(scrut, 1);
        det = first0;
        rest = first1;
        tmp2 = cichelli.blocked_(ds_, rest);
        tmp3 = append_inst_28_45_tsni(det, tmp2);
        return NofibPrelude.Cons(k2, tmp3)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static blocked(ls4) {
    return blocked__inst_35_36_tsni(NofibPrelude.Nil, ls4)
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
        tmp3 = runtime.safeCall(NofibPrelude.Some(lo_));
        tmp4 = runtime.safeCall(NofibPrelude.Some(hi_));
        tmp5 = NofibPrelude.Cons(h, hs);
        tmp6 = runtime.safeCall(cichelli.H(tmp3, tmp4, tmp5));
        return runtime.safeCall(NofibPrelude.Some(tmp6))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static first(k2, ls5) {
    let scrut, param0, param1, a1, l, param01, leaves, param11, leaves1, y2, tmp, tmp1;
    scrut = NofibPrelude.force(ls5);
    if (scrut instanceof NofibPrelude.LzNil.class) {
      return runtime.safeCall(cichelli.NotEver(k2))
    } else if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      a1 = param0;
      l = param1;
      if (a1 instanceof cichelli.YesIts.class) {
        param01 = a1.i;
        param11 = a1.t;
        leaves1 = param01;
        y2 = param11;
        tmp = k2 + leaves1;
        return cichelli.YesIts(tmp, y2)
      } else if (a1 instanceof cichelli.NotEver.class) {
        param01 = a1.i;
        leaves = param01;
        tmp1 = k2 + leaves;
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
  static findhash_(keyHashSet, charAssocs, ks1) {
    let param0, param1, param01, param11, param2, param3, s, a1, z, n, ks2, scrut, tmp, tmp1, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (ks1 instanceof NofibPrelude.Nil.class) {
      return cichelli.YesIts(1, charAssocs)
    } else if (ks1 instanceof NofibPrelude.Cons.class) {
      param0 = ks1.head;
      param1 = ks1.tail;
      if (param0 instanceof cichelli.K.class) {
        param01 = param0.s;
        param11 = param0.c1;
        param2 = param0.c2;
        param3 = param0.i;
        s = param01;
        a1 = param11;
        z = param2;
        n = param3;
        ks2 = param1;
        tmp = assocm_inst_37_1_tsni(a1, charAssocs);
        tmp1 = cichelli.assocm(z, charAssocs);
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = tmp1;
        arr = (keyHashSet1, charAssocs1, s1, a2, z1, n1, ks3) => {
          let first1, first0;
          first0 = _deforest_Deforest_Arr_2_0;
          first1 = _deforest_Deforest_Arr_2_1;
          return runtime.safeCall(first0(keyHashSet1, charAssocs1, s1, a2, z1, n1, ks3, first1))
        };
        scrut = arr;
        return runtime.safeCall(scrut(keyHashSet, charAssocs, s, a1, z, n, ks2))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static findhash(keys) {
    let tmp;
    tmp = runtime.safeCall(cichelli.H(NofibPrelude.None, NofibPrelude.None, NofibPrelude.Nil));
    return findhash__inst_38_39_tsni(tmp, NofibPrelude.Nil, keys)
  } 
  static freq(c) {
    return cichelli.assoc(c, cichelli.freqtab)
  } 
  static morefreq(k11, k21) {
    let param0, param1, param2, param3, a1, x7, param01, param11, param21, param31, b1, y2, tmp, tmp1, tmp2, tmp3, tmp4, tmp5;
    if (k11 instanceof cichelli.K.class) {
      param0 = k11.s;
      param1 = k11.c1;
      param2 = k11.c2;
      param3 = k11.i;
      a1 = param1;
      x7 = param2;
      if (k21 instanceof cichelli.K.class) {
        param01 = k21.s;
        param11 = k21.c1;
        param21 = k21.c2;
        param31 = k21.i;
        b1 = param11;
        y2 = param21;
        tmp = cichelli.freq(a1);
        tmp1 = cichelli.freq(x7);
        tmp2 = tmp + tmp1;
        tmp3 = cichelli.freq(b1);
        tmp4 = cichelli.freq(y2);
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
    tmp1 = take_inst_40_41_tsni(tmp, cichelli.keys);
    tmp2 = append_inst_40_42_tsni(cichelli.keys, tmp1);
    tmp3 = attribkeys_inst_40_58_tsni(tmp2);
    attribkeys_ = tmp3;
    tmp4 = cichelli.freqsorted(attribkeys_);
    tmp5 = blocked_inst_40_43_tsni(tmp4);
    hashkeys = tmp5;
    return findhash_inst_40_44_tsni(hashkeys)
  } 
  static prog(n1) {
    return cichelli__inst_46_47_tsni(n1)
  } 
  static main() {
    let tmp;
    tmp = prog_inst_48_49_tsni(6);
    return runtime.safeCall(tmp.toString())
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "cichelli"]; 
});
let cichelli = cichelli1; export default cichelli;
