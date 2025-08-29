const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let go, life1, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda7, lambda8, lambda9, lambda10, lambda$, lambda$1, lambda$2, lambda$3, lambda$4, lambda$5, lambda$6, lambda$7, copy_lz_inst_0_1_tsni, lambda_inst_0_1_tsni, lambda$_inst_0_1_tsni, append_lz_lz_inst_0_2_tsni, lambda_inst_0_2_tsni, lambda$_inst_0_2_tsni, lambda$_inst_3_4_tsni, append_lz_lz_inst_3_4_2_tsni, lambda_inst_3_4_2_tsni, lambda$_inst_3_4_2_tsni, copy_lz_inst_3_4_1_tsni, lambda_inst_3_4_1_tsni, lambda$_inst_3_4_1_tsni, gen_inst_5_6_tsni, row_inst_5_6_7_tsni, shift_inst_5_6_7_8_tsni, shiftl_inst_5_6_7_8_9_tsni, init_inst_5_6_7_8_9_10_tsni, append_inst_5_6_7_8_9_11_tsni, shiftr_inst_5_6_7_8_12_tsni, init_inst_5_6_7_8_12_13_tsni, shift_inst_5_6_7_14_tsni, shiftl_inst_5_6_7_14_9_tsni, init_inst_5_6_7_14_9_10_tsni, append_inst_5_6_7_14_9_11_tsni, shiftr_inst_5_6_7_14_12_tsni, init_inst_5_6_7_14_12_13_tsni, shift_inst_5_6_7_15_tsni, shiftl_inst_5_6_7_15_9_tsni, init_inst_5_6_7_15_9_10_tsni, append_inst_5_6_7_15_9_11_tsni, shiftr_inst_5_6_7_15_12_tsni, init_inst_5_6_7_15_12_13_tsni, zip3_inst_5_6_7_8_16_tsni, zip3_inst_5_6_7_14_16_tsni, zip3_inst_5_6_7_15_16_tsni, shift_inst_5_6_17_tsni, shiftl_inst_5_6_17_9_tsni, init_inst_5_6_17_9_10_tsni, shiftr_inst_5_6_17_12_tsni, init_inst_5_6_17_12_13_tsni, append_inst_5_6_17_9_11_tsni, zip3_inst_5_6_17_16_tsni, lambda$_inst_18_19_tsni, gen_inst_18_19_6_tsni, shift_inst_18_19_6_17_tsni, shiftl_inst_18_19_6_17_9_tsni, init_inst_18_19_6_17_9_10_tsni, append_inst_18_19_6_17_9_11_tsni, shiftr_inst_18_19_6_17_12_tsni, init_inst_18_19_6_17_12_13_tsni, row_inst_18_19_6_7_tsni, shift_inst_18_19_6_7_15_tsni, shiftl_inst_18_19_6_7_15_9_tsni, init_inst_18_19_6_7_15_9_10_tsni, shiftr_inst_18_19_6_7_15_12_tsni, init_inst_18_19_6_7_15_12_13_tsni, append_inst_18_19_6_7_15_9_11_tsni, zip3_inst_18_19_6_7_15_16_tsni, shift_inst_18_19_6_7_14_tsni, shiftl_inst_18_19_6_7_14_9_tsni, init_inst_18_19_6_7_14_9_10_tsni, shiftr_inst_18_19_6_7_14_12_tsni, init_inst_18_19_6_7_14_12_13_tsni, append_inst_18_19_6_7_14_9_11_tsni, zip3_inst_18_19_6_7_14_16_tsni, shift_inst_18_19_6_7_8_tsni, shiftl_inst_18_19_6_7_8_9_tsni, init_inst_18_19_6_7_8_9_10_tsni, shiftr_inst_18_19_6_7_8_12_tsni, init_inst_18_19_6_7_8_12_13_tsni, append_inst_18_19_6_7_8_9_11_tsni, zip3_inst_18_19_6_7_8_16_tsni, zip3_inst_18_19_6_17_16_tsni, map_inst_20_21_tsni, lambda_inst_23_24_tsni, map_inst_23_24_21_tsni, lambda_inst_23_25_tsni, map_inst_23_26_tsni, concat_inst_23_24_27_tsni, append_inst_23_24_27_28_tsni, lambda$_inst_29_30_tsni, lambda_inst_29_30_25_tsni, map_inst_29_30_26_tsni, lambda_inst_29_30_24_tsni, map_inst_29_30_24_21_tsni, concat_inst_29_30_24_27_tsni, append_inst_29_30_24_27_28_tsni, init_inst_31_10_tsni, shiftl_inst_32_9_tsni, init_inst_32_9_10_tsni, shiftr_inst_32_12_tsni, init_inst_32_12_13_tsni, append_inst_32_9_11_tsni, shift_inst_33_8_tsni, shiftl_inst_33_8_9_tsni, init_inst_33_8_9_10_tsni, append_inst_33_8_9_11_tsni, shiftr_inst_33_8_12_tsni, init_inst_33_8_12_13_tsni, shift_inst_33_14_tsni, shiftl_inst_33_14_9_tsni, init_inst_33_14_9_10_tsni, append_inst_33_14_9_11_tsni, shiftr_inst_33_14_12_tsni, init_inst_33_14_12_13_tsni, shift_inst_33_15_tsni, shiftl_inst_33_15_9_tsni, init_inst_33_15_9_10_tsni, append_inst_33_15_9_11_tsni, shiftr_inst_33_15_12_tsni, init_inst_33_15_12_13_tsni, zip3_inst_33_8_16_tsni, zip3_inst_33_14_16_tsni, zip3_inst_33_15_16_tsni, shift_inst_34_17_tsni, shiftl_inst_34_17_9_tsni, init_inst_34_17_9_10_tsni, append_inst_34_17_9_11_tsni, shiftr_inst_34_17_12_tsni, init_inst_34_17_12_13_tsni, row_inst_34_7_tsni, shift_inst_34_7_15_tsni, shiftl_inst_34_7_15_9_tsni, init_inst_34_7_15_9_10_tsni, shiftr_inst_34_7_15_12_tsni, init_inst_34_7_15_12_13_tsni, append_inst_34_7_15_9_11_tsni, zip3_inst_34_7_15_16_tsni, shift_inst_34_7_14_tsni, shiftl_inst_34_7_14_9_tsni, init_inst_34_7_14_9_10_tsni, shiftr_inst_34_7_14_12_tsni, init_inst_34_7_14_12_13_tsni, append_inst_34_7_14_9_11_tsni, zip3_inst_34_7_14_16_tsni, shift_inst_34_7_8_tsni, shiftl_inst_34_7_8_9_tsni, init_inst_34_7_8_9_10_tsni, shiftr_inst_34_7_8_12_tsni, init_inst_34_7_8_12_13_tsni, append_inst_34_7_8_9_11_tsni, zip3_inst_34_7_8_16_tsni, zip3_inst_34_17_16_tsni, lambda_inst_35_36_tsni, lambda$_inst_35_36_30_tsni, lambda_inst_35_36_30_24_tsni, map_inst_35_36_30_24_21_tsni, lambda_inst_35_36_30_25_tsni, map_inst_35_36_30_26_tsni, concat_inst_35_36_30_24_27_tsni, append_inst_35_36_30_24_27_28_tsni, lambda_inst_37_38_tsni, lambda$_inst_37_38_4_tsni, copy_lz_inst_37_38_4_1_tsni, lambda_inst_37_38_4_1_tsni, lambda$_inst_37_38_4_1_tsni, append_lz_lz_inst_37_38_4_2_tsni, lambda_inst_37_38_4_2_tsni, lambda$_inst_37_38_4_2_tsni, lambda_inst_37_39_tsni, lambda$_inst_37_39_19_tsni, gen_inst_37_39_19_6_tsni, row_inst_37_39_19_6_7_tsni, shift_inst_37_39_19_6_7_8_tsni, shiftl_inst_37_39_19_6_7_8_9_tsni, init_inst_37_39_19_6_7_8_9_10_tsni, append_inst_37_39_19_6_7_8_9_11_tsni, shiftr_inst_37_39_19_6_7_8_12_tsni, init_inst_37_39_19_6_7_8_12_13_tsni, shift_inst_37_39_19_6_7_14_tsni, shiftl_inst_37_39_19_6_7_14_9_tsni, init_inst_37_39_19_6_7_14_9_10_tsni, append_inst_37_39_19_6_7_14_9_11_tsni, shiftr_inst_37_39_19_6_7_14_12_tsni, init_inst_37_39_19_6_7_14_12_13_tsni, shift_inst_37_39_19_6_7_15_tsni, shiftl_inst_37_39_19_6_7_15_9_tsni, init_inst_37_39_19_6_7_15_9_10_tsni, append_inst_37_39_19_6_7_15_9_11_tsni, shiftr_inst_37_39_19_6_7_15_12_tsni, init_inst_37_39_19_6_7_15_12_13_tsni, zip3_inst_37_39_19_6_7_8_16_tsni, zip3_inst_37_39_19_6_7_14_16_tsni, zip3_inst_37_39_19_6_7_15_16_tsni, shift_inst_37_39_19_6_17_tsni, shiftl_inst_37_39_19_6_17_9_tsni, init_inst_37_39_19_6_17_9_10_tsni, shiftr_inst_37_39_19_6_17_12_tsni, init_inst_37_39_19_6_17_12_13_tsni, append_inst_37_39_19_6_17_9_11_tsni, zip3_inst_37_39_19_6_17_16_tsni, limit_inst_37_40_tsni, disp_inst_37_41_tsni, lambda_inst_37_41_36_tsni, lambda$_inst_37_41_36_30_tsni, lambda_inst_37_41_36_30_25_tsni, map_inst_37_41_36_30_26_tsni, lambda_inst_37_41_36_30_24_tsni, map_inst_37_41_36_30_24_21_tsni, concat_inst_37_41_36_30_24_27_tsni, append_inst_37_41_36_30_24_27_28_tsni, zip_lz_nl_inst_37_42_tsni, generations_inst_43_44_tsni, disp_inst_43_44_41_tsni, lambda_inst_43_44_41_36_tsni, lambda$_inst_43_44_41_36_30_tsni, lambda_inst_43_44_41_36_30_24_tsni, map_inst_43_44_41_36_30_24_21_tsni, lambda_inst_43_44_41_36_30_25_tsni, map_inst_43_44_41_36_30_26_tsni, concat_inst_43_44_41_36_30_24_27_tsni, append_inst_43_44_41_36_30_24_27_28_tsni, zip_lz_nl_inst_43_44_42_tsni, limit_inst_43_44_40_tsni, lambda_inst_43_44_39_tsni, lambda$_inst_43_44_39_19_tsni, gen_inst_43_44_39_19_6_tsni, shift_inst_43_44_39_19_6_17_tsni, shiftl_inst_43_44_39_19_6_17_9_tsni, init_inst_43_44_39_19_6_17_9_10_tsni, append_inst_43_44_39_19_6_17_9_11_tsni, shiftr_inst_43_44_39_19_6_17_12_tsni, init_inst_43_44_39_19_6_17_12_13_tsni, row_inst_43_44_39_19_6_7_tsni, shift_inst_43_44_39_19_6_7_15_tsni, shiftl_inst_43_44_39_19_6_7_15_9_tsni, init_inst_43_44_39_19_6_7_15_9_10_tsni, shiftr_inst_43_44_39_19_6_7_15_12_tsni, init_inst_43_44_39_19_6_7_15_12_13_tsni, append_inst_43_44_39_19_6_7_15_9_11_tsni, zip3_inst_43_44_39_19_6_7_15_16_tsni, shift_inst_43_44_39_19_6_7_14_tsni, shiftl_inst_43_44_39_19_6_7_14_9_tsni, init_inst_43_44_39_19_6_7_14_9_10_tsni, shiftr_inst_43_44_39_19_6_7_14_12_tsni, init_inst_43_44_39_19_6_7_14_12_13_tsni, append_inst_43_44_39_19_6_7_14_9_11_tsni, zip3_inst_43_44_39_19_6_7_14_16_tsni, shift_inst_43_44_39_19_6_7_8_tsni, shiftl_inst_43_44_39_19_6_7_8_9_tsni, init_inst_43_44_39_19_6_7_8_9_10_tsni, shiftr_inst_43_44_39_19_6_7_8_12_tsni, init_inst_43_44_39_19_6_7_8_12_13_tsni, append_inst_43_44_39_19_6_7_8_9_11_tsni, zip3_inst_43_44_39_19_6_7_8_16_tsni, zip3_inst_43_44_39_19_6_17_16_tsni, lambda_inst_43_44_38_tsni, lambda$_inst_43_44_38_4_tsni, append_lz_lz_inst_43_44_38_4_2_tsni, lambda_inst_43_44_38_4_2_tsni, lambda$_inst_43_44_38_4_2_tsni, copy_lz_inst_43_44_38_4_1_tsni, lambda_inst_43_44_38_4_1_tsni, lambda$_inst_43_44_38_4_1_tsni, testLife_nofib_inst_45_46_tsni, generations_inst_45_46_44_tsni, lambda_inst_45_46_44_38_tsni, lambda$_inst_45_46_44_38_4_tsni, copy_lz_inst_45_46_44_38_4_1_tsni, lambda_inst_45_46_44_38_4_1_tsni, lambda$_inst_45_46_44_38_4_1_tsni, append_lz_lz_inst_45_46_44_38_4_2_tsni, lambda_inst_45_46_44_38_4_2_tsni, lambda$_inst_45_46_44_38_4_2_tsni, lambda_inst_45_46_44_39_tsni, lambda$_inst_45_46_44_39_19_tsni, gen_inst_45_46_44_39_19_6_tsni, row_inst_45_46_44_39_19_6_7_tsni, shift_inst_45_46_44_39_19_6_7_8_tsni, shiftl_inst_45_46_44_39_19_6_7_8_9_tsni, init_inst_45_46_44_39_19_6_7_8_9_10_tsni, append_inst_45_46_44_39_19_6_7_8_9_11_tsni, shiftr_inst_45_46_44_39_19_6_7_8_12_tsni, init_inst_45_46_44_39_19_6_7_8_12_13_tsni, shift_inst_45_46_44_39_19_6_7_14_tsni, shiftl_inst_45_46_44_39_19_6_7_14_9_tsni, init_inst_45_46_44_39_19_6_7_14_9_10_tsni, append_inst_45_46_44_39_19_6_7_14_9_11_tsni, shiftr_inst_45_46_44_39_19_6_7_14_12_tsni, init_inst_45_46_44_39_19_6_7_14_12_13_tsni, shift_inst_45_46_44_39_19_6_7_15_tsni, shiftl_inst_45_46_44_39_19_6_7_15_9_tsni, init_inst_45_46_44_39_19_6_7_15_9_10_tsni, append_inst_45_46_44_39_19_6_7_15_9_11_tsni, shiftr_inst_45_46_44_39_19_6_7_15_12_tsni, init_inst_45_46_44_39_19_6_7_15_12_13_tsni, zip3_inst_45_46_44_39_19_6_7_8_16_tsni, zip3_inst_45_46_44_39_19_6_7_14_16_tsni, zip3_inst_45_46_44_39_19_6_7_15_16_tsni, shift_inst_45_46_44_39_19_6_17_tsni, shiftl_inst_45_46_44_39_19_6_17_9_tsni, init_inst_45_46_44_39_19_6_17_9_10_tsni, shiftr_inst_45_46_44_39_19_6_17_12_tsni, init_inst_45_46_44_39_19_6_17_12_13_tsni, append_inst_45_46_44_39_19_6_17_9_11_tsni, zip3_inst_45_46_44_39_19_6_17_16_tsni, limit_inst_45_46_44_40_tsni, disp_inst_45_46_44_41_tsni, lambda_inst_45_46_44_41_36_tsni, lambda$_inst_45_46_44_41_36_30_tsni, lambda_inst_45_46_44_41_36_30_25_tsni, map_inst_45_46_44_41_36_30_26_tsni, lambda_inst_45_46_44_41_36_30_24_tsni, map_inst_45_46_44_41_36_30_24_21_tsni, concat_inst_45_46_44_41_36_30_24_27_tsni, append_inst_45_46_44_41_36_30_24_27_28_tsni, zip_lz_nl_inst_45_46_44_42_tsni, take_lz_inst_0_47_tsni, take_lz_inst_3_4_47_tsni, zipWith3_inst_5_6_7_48_tsni, elt_inst_5_6_7_49_tsni, map_inst_5_6_50_tsni, zipWith3_inst_18_19_6_7_48_tsni, elt_inst_18_19_6_7_49_tsni, map_inst_18_19_6_50_tsni, concat_inst_20_27_tsni, glue_inst_22_51_tsni, append_inst_22_51_52_tsni, glue_inst_23_25_51_tsni, append_inst_23_25_51_52_tsni, foldr_inst_23_53_tsni, append_inst_23_25_51_54_tsni, glue_inst_29_30_25_51_tsni, append_inst_29_30_25_51_52_tsni, foldr_inst_29_30_53_tsni, append_inst_29_30_25_51_54_tsni, lzfy_inst_55_tsni, lambda_inst_55_tsni, lambda$_inst_55_tsni, append_inst_31_11_tsni, zip3_inst_32_16_tsni, zipWith3_inst_33_48_tsni, elt_inst_33_49_tsni, zipWith3_inst_34_7_48_tsni, elt_inst_34_7_49_tsni, map_inst_34_50_tsni, glue_inst_35_36_30_25_51_tsni, append_inst_35_36_30_25_51_52_tsni, foldr_inst_35_36_30_53_tsni, append_inst_35_36_30_25_51_54_tsni, take_lz_inst_37_38_4_47_tsni, zipWith3_inst_37_39_19_6_7_48_tsni, elt_inst_37_39_19_6_7_49_tsni, map_inst_37_39_19_6_50_tsni, glue_inst_37_41_36_30_25_51_tsni, append_inst_37_41_36_30_25_51_52_tsni, foldr_inst_37_41_36_30_53_tsni, append_inst_37_41_36_30_25_51_54_tsni, map_inst_37_56_tsni, glue_inst_43_44_41_36_30_25_51_tsni, append_inst_43_44_41_36_30_25_51_52_tsni, foldr_inst_43_44_41_36_30_53_tsni, append_inst_43_44_41_36_30_25_51_54_tsni, map_inst_43_44_56_tsni, zipWith3_inst_43_44_39_19_6_7_48_tsni, elt_inst_43_44_39_19_6_7_49_tsni, map_inst_43_44_39_19_6_50_tsni, take_lz_inst_43_44_38_4_47_tsni, take_lz_inst_45_46_44_38_4_47_tsni, zipWith3_inst_45_46_44_39_19_6_7_48_tsni, elt_inst_45_46_44_39_19_6_7_49_tsni, map_inst_45_46_44_39_19_6_50_tsni, glue_inst_45_46_44_41_36_30_25_51_tsni, append_inst_45_46_44_41_36_30_25_51_52_tsni, foldr_inst_45_46_44_41_36_30_53_tsni, append_inst_45_46_44_41_36_30_25_51_54_tsni, map_inst_45_46_44_56_tsni, match_scrut_arm_LzCons_inst_0_47_tsni, match_scrut_arm_LzCons_inst_3_4_47_tsni, match_zs_arm_Cons_inst_5_6_7_8_16_tsni, match_xs_arm_Cons_inst_5_6_7_8_16_tsni, match_zs_arm_Cons_inst_5_6_7_14_16_tsni, match_xs_arm_Cons_inst_5_6_7_14_16_tsni, match_zs_arm_Cons_inst_5_6_7_15_16_tsni, match_xs_arm_Cons_inst_5_6_7_15_16_tsni, match_xs_arm_default_inst_5_6_7_48_tsni, match_ys_arm_default_inst_5_6_7_48_tsni, match_zs_arm_default_inst_5_6_7_48_tsni, match_xs_arm_Cons_inst_5_6_17_16_tsni, match_zs_arm_Cons_inst_5_6_17_16_tsni, match_xs_arm_Nil_inst_5_6_50_tsni, match_zs_arm_Cons_inst_18_19_6_17_16_tsni, match_xs_arm_Cons_inst_18_19_6_17_16_tsni, match_xs_arm_Cons_inst_18_19_6_7_15_16_tsni, match_zs_arm_Cons_inst_18_19_6_7_15_16_tsni, match_zs_arm_default_inst_18_19_6_7_48_tsni, match_xs_arm_Cons_inst_18_19_6_7_14_16_tsni, match_zs_arm_Cons_inst_18_19_6_7_14_16_tsni, match_ys_arm_default_inst_18_19_6_7_48_tsni, match_xs_arm_Cons_inst_18_19_6_7_8_16_tsni, match_zs_arm_Cons_inst_18_19_6_7_8_16_tsni, match_xs_arm_default_inst_18_19_6_7_48_tsni, match_xs_arm_Nil_inst_18_19_6_50_tsni, match_ls_arm_Cons_inst_55_tsni, match_xs_arm_Cons_inst_32_16_tsni, match_zs_arm_Cons_inst_32_16_tsni, match_zs_arm_Cons_inst_33_8_16_tsni, match_xs_arm_Cons_inst_33_8_16_tsni, match_zs_arm_Cons_inst_33_14_16_tsni, match_xs_arm_Cons_inst_33_14_16_tsni, match_zs_arm_Cons_inst_33_15_16_tsni, match_xs_arm_Cons_inst_33_15_16_tsni, match_xs_arm_default_inst_33_48_tsni, match_ys_arm_default_inst_33_48_tsni, match_zs_arm_default_inst_33_48_tsni, match_zs_arm_Cons_inst_34_17_16_tsni, match_xs_arm_Cons_inst_34_17_16_tsni, match_xs_arm_Cons_inst_34_7_15_16_tsni, match_zs_arm_Cons_inst_34_7_15_16_tsni, match_zs_arm_default_inst_34_7_48_tsni, match_xs_arm_Cons_inst_34_7_14_16_tsni, match_zs_arm_Cons_inst_34_7_14_16_tsni, match_ys_arm_default_inst_34_7_48_tsni, match_xs_arm_Cons_inst_34_7_8_16_tsni, match_zs_arm_Cons_inst_34_7_8_16_tsni, match_xs_arm_default_inst_34_7_48_tsni, match_xs_arm_Nil_inst_34_50_tsni, match_scrut_arm_LzCons_inst_37_38_4_47_tsni, match_zs_arm_Cons_inst_37_39_19_6_7_8_16_tsni, match_xs_arm_Cons_inst_37_39_19_6_7_8_16_tsni, match_zs_arm_Cons_inst_37_39_19_6_7_14_16_tsni, match_xs_arm_Cons_inst_37_39_19_6_7_14_16_tsni, match_zs_arm_Cons_inst_37_39_19_6_7_15_16_tsni, match_xs_arm_Cons_inst_37_39_19_6_7_15_16_tsni, match_xs_arm_default_inst_37_39_19_6_7_48_tsni, match_ys_arm_default_inst_37_39_19_6_7_48_tsni, match_zs_arm_default_inst_37_39_19_6_7_48_tsni, match_xs_arm_Cons_inst_37_39_19_6_17_16_tsni, match_zs_arm_Cons_inst_37_39_19_6_17_16_tsni, match_xs_arm_Nil_inst_37_39_19_6_50_tsni, match_ys_arm_Cons_inst_37_42_tsni, match_xs_arm_Nil_inst_37_56_tsni, match_xs_arm_Nil_inst_43_44_56_tsni, match_ys_arm_Cons_inst_43_44_42_tsni, match_zs_arm_Cons_inst_43_44_39_19_6_17_16_tsni, match_xs_arm_Cons_inst_43_44_39_19_6_17_16_tsni, match_xs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni, match_zs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni, match_zs_arm_default_inst_43_44_39_19_6_7_48_tsni, match_xs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni, match_zs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni, match_ys_arm_default_inst_43_44_39_19_6_7_48_tsni, match_xs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni, match_zs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni, match_xs_arm_default_inst_43_44_39_19_6_7_48_tsni, match_xs_arm_Nil_inst_43_44_39_19_6_50_tsni, match_scrut_arm_LzCons_inst_43_44_38_4_47_tsni, match_scrut_arm_LzCons_inst_45_46_44_38_4_47_tsni, match_zs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni, match_xs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni, match_zs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni, match_xs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni, match_zs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni, match_xs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni, match_xs_arm_default_inst_45_46_44_39_19_6_7_48_tsni, match_ys_arm_default_inst_45_46_44_39_19_6_7_48_tsni, match_zs_arm_default_inst_45_46_44_39_19_6_7_48_tsni, match_xs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni, match_zs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni, match_xs_arm_Nil_inst_45_46_44_39_19_6_50_tsni, match_ys_arm_Cons_inst_45_46_44_42_tsni, match_xs_arm_Nil_inst_45_46_44_56_tsni;
match_scrut_arm_LzCons_inst_0_47_tsni = (undefined, function (n, _deforest_LzCons_head_inst_0_47_tsni, _deforest_LzCons_tail_inst_0_47_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_0_47_tsni;
  param1 = _deforest_LzCons_tail_inst_0_47_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_0_47_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
});
match_scrut_arm_LzCons_inst_3_4_47_tsni = (undefined, function (n, _deforest_LzCons_head_inst_3_4_47_tsni, _deforest_LzCons_tail_inst_3_4_47_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_3_4_47_tsni;
  param1 = _deforest_LzCons_tail_inst_3_4_47_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_3_4_47_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
});
match_zs_arm_Cons_inst_5_6_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_5_6_7_8_16_tsni, _deforest_Cons_tail_inst_5_6_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_5_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_5_6_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_Cons_inst_5_6_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_5_6_7_8_16_tsni, _deforest_Cons_tail_inst_5_6_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_5_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_5_6_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_5_6_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_5_6_7_14_16_tsni, _deforest_Cons_tail_inst_5_6_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_5_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_5_6_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_xs_arm_Cons_inst_5_6_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_5_6_7_14_16_tsni, _deforest_Cons_tail_inst_5_6_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_5_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_5_6_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_5_6_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_5_6_7_15_16_tsni, _deforest_Cons_tail_inst_5_6_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_5_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_5_6_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_5_6_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_5_6_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_5_6_7_15_16_tsni, _deforest_Cons_tail_inst_5_6_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_5_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_5_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_xs_arm_default_inst_5_6_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_ys_arm_default_inst_5_6_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_zs_arm_default_inst_5_6_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_5_6_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_5_6_17_16_tsni, _deforest_Cons_tail_inst_5_6_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_5_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_5_6_50_tsni(f)
    }
  }
});
match_zs_arm_Cons_inst_5_6_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_5_6_17_16_tsni, _deforest_Cons_tail_inst_5_6_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_5_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_5_6_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_5_6_7_8_tsni(0, last);
    tmp2 = shift_inst_5_6_7_14_tsni(0, this_);
    tmp3 = shift_inst_5_6_7_15_tsni(0, next);
    return zipWith3_inst_5_6_7_48_tsni(elt_inst_5_6_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_5_6_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_5_6_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Nil_inst_5_6_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_18_19_6_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_18_19_6_17_16_tsni, _deforest_Cons_tail_inst_18_19_6_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_18_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_18_19_6_7_8_tsni(0, last);
    tmp2 = shift_inst_18_19_6_7_14_tsni(0, this_);
    tmp3 = shift_inst_18_19_6_7_15_tsni(0, next);
    return zipWith3_inst_18_19_6_7_48_tsni(elt_inst_18_19_6_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_18_19_6_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_18_19_6_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_18_19_6_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_18_19_6_17_16_tsni, _deforest_Cons_tail_inst_18_19_6_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_18_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_18_19_6_50_tsni(f)
    }
  }
});
match_xs_arm_Cons_inst_18_19_6_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_18_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_18_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_18_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_zs_arm_Cons_inst_18_19_6_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_18_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_18_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_18_19_6_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_18_19_6_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_zs_arm_default_inst_18_19_6_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_18_19_6_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_18_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_18_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_18_19_6_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_18_19_6_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_18_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_18_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_18_19_6_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_ys_arm_default_inst_18_19_6_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_18_19_6_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_18_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_18_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_18_19_6_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_18_19_6_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_18_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_18_19_6_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_18_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_18_19_6_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_18_19_6_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_default_inst_18_19_6_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_18_19_6_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_ls_arm_Cons_inst_55_tsni = (undefined, function (_deforest_Cons_head_inst_55_tsni, _deforest_Cons_tail_inst_55_tsni) {
  let param0, param1, a, t, tmp;
  param0 = _deforest_Cons_head_inst_55_tsni;
  param1 = _deforest_Cons_tail_inst_55_tsni;
  a = param0;
  t = param1;
  tmp = lzfy_inst_55_tsni(t);
  return NofibPrelude.LzCons(a, tmp)
});
match_xs_arm_Cons_inst_32_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_32_16_tsni, _deforest_Cons_tail_inst_32_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_32_16_tsni;
  param1 = _deforest_Cons_tail_inst_32_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return NofibPrelude.Nil
  }
});
match_zs_arm_Cons_inst_32_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_32_16_tsni, _deforest_Cons_tail_inst_32_16_tsni) {
  let param0, param1, hz, tz, arr, tmp;
  param0 = _deforest_Cons_head_inst_32_16_tsni;
  param1 = _deforest_Cons_tail_inst_32_16_tsni;
  hz = param0;
  tz = param1;
  arr = globalThis.Object.freeze([
    hx,
    hy,
    hz
  ]);
  tmp = zip3_inst_32_16_tsni(tx, ty, tz);
  return NofibPrelude.Cons(arr, tmp)
});
match_zs_arm_Cons_inst_33_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_33_8_16_tsni, _deforest_Cons_tail_inst_33_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_33_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_33_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_Cons_inst_33_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_33_8_16_tsni, _deforest_Cons_tail_inst_33_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_33_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_33_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_33_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_33_14_16_tsni, _deforest_Cons_tail_inst_33_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_33_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_33_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_xs_arm_Cons_inst_33_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_33_14_16_tsni, _deforest_Cons_tail_inst_33_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_33_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_33_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_33_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_33_15_16_tsni, _deforest_Cons_tail_inst_33_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_33_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_33_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_33_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_33_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_33_15_16_tsni, _deforest_Cons_tail_inst_33_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_33_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_33_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_33_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_xs_arm_default_inst_33_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_ys_arm_default_inst_33_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_zs_arm_default_inst_33_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_zs_arm_Cons_inst_34_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_34_17_16_tsni, _deforest_Cons_tail_inst_34_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_34_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_34_7_8_tsni(0, last);
    tmp2 = shift_inst_34_7_14_tsni(0, this_);
    tmp3 = shift_inst_34_7_15_tsni(0, next);
    return zipWith3_inst_34_7_48_tsni(elt_inst_34_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_34_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_34_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_34_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_34_17_16_tsni, _deforest_Cons_tail_inst_34_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_34_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_34_50_tsni(f)
    }
  }
});
match_xs_arm_Cons_inst_34_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_34_7_15_16_tsni, _deforest_Cons_tail_inst_34_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_34_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_34_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_zs_arm_Cons_inst_34_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_34_7_15_16_tsni, _deforest_Cons_tail_inst_34_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_34_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_34_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_34_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_zs_arm_default_inst_34_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_34_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_34_7_14_16_tsni, _deforest_Cons_tail_inst_34_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_34_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_34_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_34_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_34_7_14_16_tsni, _deforest_Cons_tail_inst_34_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_34_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_34_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_ys_arm_default_inst_34_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_34_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_34_7_8_16_tsni, _deforest_Cons_tail_inst_34_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_34_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_34_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_34_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_34_7_8_16_tsni, _deforest_Cons_tail_inst_34_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_34_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_34_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_34_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_default_inst_34_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_34_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_scrut_arm_LzCons_inst_37_38_4_47_tsni = (undefined, function (n, _deforest_LzCons_head_inst_37_38_4_47_tsni, _deforest_LzCons_tail_inst_37_38_4_47_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_37_38_4_47_tsni;
  param1 = _deforest_LzCons_tail_inst_37_38_4_47_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_37_38_4_47_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
});
match_zs_arm_Cons_inst_37_39_19_6_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_37_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_37_39_19_6_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_Cons_inst_37_39_19_6_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_37_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_37_39_19_6_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_37_39_19_6_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_37_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_37_39_19_6_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_xs_arm_Cons_inst_37_39_19_6_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_37_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_37_39_19_6_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_37_39_19_6_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_37_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_37_39_19_6_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_37_39_19_6_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_37_39_19_6_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_37_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_37_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_37_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_xs_arm_default_inst_37_39_19_6_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_ys_arm_default_inst_37_39_19_6_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_zs_arm_default_inst_37_39_19_6_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_37_39_19_6_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_37_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_37_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_37_39_19_6_50_tsni(f)
    }
  }
});
match_zs_arm_Cons_inst_37_39_19_6_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_37_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_37_39_19_6_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_37_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_37_39_19_6_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_37_39_19_6_7_8_tsni(0, last);
    tmp2 = shift_inst_37_39_19_6_7_14_tsni(0, this_);
    tmp3 = shift_inst_37_39_19_6_7_15_tsni(0, next);
    return zipWith3_inst_37_39_19_6_7_48_tsni(elt_inst_37_39_19_6_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_37_39_19_6_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_37_39_19_6_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Nil_inst_37_39_19_6_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_ys_arm_Cons_inst_37_42_tsni = (undefined, function (x, xs, _deforest_Cons_head_inst_37_42_tsni, _deforest_Cons_tail_inst_37_42_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_37_42_tsni;
  param1 = _deforest_Cons_tail_inst_37_42_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    tmp1 = runtime.safeCall(lambda_inst_37_41_36_tsni(genn, xss));
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_37_42_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_37_56_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Nil_inst_37_56_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_43_44_56_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_ys_arm_Cons_inst_43_44_42_tsni = (undefined, function (x, xs, _deforest_Cons_head_inst_43_44_42_tsni, _deforest_Cons_tail_inst_43_44_42_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_43_44_42_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_42_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    tmp1 = runtime.safeCall(lambda_inst_43_44_41_36_tsni(genn, xss));
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_43_44_42_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_43_44_56_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_zs_arm_Cons_inst_43_44_39_19_6_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_43_44_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_43_44_39_19_6_7_8_tsni(0, last);
    tmp2 = shift_inst_43_44_39_19_6_7_14_tsni(0, this_);
    tmp3 = shift_inst_43_44_39_19_6_7_15_tsni(0, next);
    return zipWith3_inst_43_44_39_19_6_7_48_tsni(elt_inst_43_44_39_19_6_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_43_44_39_19_6_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_43_44_39_19_6_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_43_44_39_19_6_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_43_44_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_43_44_39_19_6_50_tsni(f)
    }
  }
});
match_xs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_43_44_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_zs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_43_44_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_43_44_39_19_6_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_43_44_39_19_6_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_zs_arm_default_inst_43_44_39_19_6_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_43_44_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_43_44_39_19_6_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_43_44_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_43_44_39_19_6_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_ys_arm_default_inst_43_44_39_19_6_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_43_44_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_43_44_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_43_44_39_19_6_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_43_44_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_43_44_39_19_6_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_43_44_39_19_6_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_default_inst_43_44_39_19_6_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_xs_arm_Nil_inst_43_44_39_19_6_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_scrut_arm_LzCons_inst_43_44_38_4_47_tsni = (undefined, function (n, _deforest_LzCons_head_inst_43_44_38_4_47_tsni, _deforest_LzCons_tail_inst_43_44_38_4_47_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_43_44_38_4_47_tsni;
  param1 = _deforest_LzCons_tail_inst_43_44_38_4_47_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_43_44_38_4_47_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
});
match_scrut_arm_LzCons_inst_45_46_44_38_4_47_tsni = (undefined, function (n, _deforest_LzCons_head_inst_45_46_44_38_4_47_tsni, _deforest_LzCons_tail_inst_45_46_44_38_4_47_tsni) {
  let param0, param1, h, t, tmp, tmp1;
  param0 = _deforest_LzCons_head_inst_45_46_44_38_4_47_tsni;
  param1 = _deforest_LzCons_tail_inst_45_46_44_38_4_47_tsni;
  h = param0;
  t = param1;
  tmp = n - 1;
  tmp1 = take_lz_inst_45_46_44_38_4_47_tsni(tmp, t);
  return NofibPrelude.Cons(h, tmp1)
});
match_zs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_45_46_44_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_8_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_8_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (d_e_f, g_h_i) => {
    let first2, first1, first0, a, b, c;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    a = first0;
    b = first1;
    c = first2;
    return runtime.safeCall(d_e_f(g_h_i, a, b, c))
  };
  tmp = zip3_inst_45_46_44_39_19_6_7_8_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, ys, zs) => {
    let param01, param11, hx1, tx1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hx1 = param01;
    tx1 = param11;
    return runtime.safeCall(ys(f, zs, hx1, tx1))
  }
});
match_xs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_45_46_44_39_19_6_7_8_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_8_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_8_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_8_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, ys1, zs1) => {
      return match_xs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, ys1, zs1)
    }
  }
});
match_zs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_45_46_44_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_14_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_14_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (g_h_i, a, b, c) => {
    let first2, first1, first0, d, e, f;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    d = first0;
    e = first1;
    f = first2;
    return runtime.safeCall(g_h_i(a, b, c, d, e, f))
  };
  tmp = zip3_inst_45_46_44_39_19_6_7_14_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, zs, hx1, tx1) => {
    let param01, param11, hy1, ty1;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hy1 = param01;
    ty1 = param11;
    return runtime.safeCall(zs(f, hx1, tx1, hy1, ty1))
  }
});
match_xs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_45_46_44_39_19_6_7_14_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_14_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_14_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_14_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, zs1, hx1, tx1) => {
      return match_ys_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, zs1, hx1, tx1)
    }
  }
});
match_zs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_45_46_44_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_15_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_15_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = (a, b, c, d, e, f) => {
    let first2, first1, first0, g, h, i, tot, scrut, scrut1, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, lambda$this;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    g = first0;
    h = first1;
    i = first2;
    tmp1 = a + b;
    tmp2 = tmp1 + c;
    tmp3 = tmp2 + d;
    tmp4 = tmp3 + f;
    tmp5 = tmp4 + g;
    tmp6 = tmp5 + h;
    tmp7 = tmp6 + i;
    tot = tmp7;
    tmp8 = tot < 2;
    lambda$this = runtime.safeCall(lambda3(tot));
    scrut1 = runtime.short_or(tmp8, lambda$this);
    if (scrut1 === true) {
      return 0
    } else {
      scrut = tot === 3;
      if (scrut === true) {
        return 1
      } else {
        return e
      }
    }
  };
  tmp = zip3_inst_45_46_44_39_19_6_7_15_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f, hx1, tx1, hy1, ty1) => {
    let param01, param11, hz1, tz1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    hz1 = param01;
    tz1 = param11;
    tmp1 = runtime.safeCall(f(hx1, hy1, hz1));
    tmp2 = zipWith3_inst_45_46_44_39_19_6_7_48_tsni(f, tx1, ty1, tz1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_45_46_44_39_19_6_7_15_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_7_15_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_7_15_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_7_15_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  }
});
match_xs_arm_default_inst_45_46_44_39_19_6_7_48_tsni = (undefined, function (f, ys, zs) {
  return NofibPrelude.Nil
});
match_ys_arm_default_inst_45_46_44_39_19_6_7_48_tsni = (undefined, function (f, zs, hx, tx) {
  return NofibPrelude.Nil
});
match_zs_arm_default_inst_45_46_44_39_19_6_7_48_tsni = (undefined, function (f, hx, tx, hy, ty) {
  return NofibPrelude.Nil
});
match_xs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni = (undefined, function (ys, zs, _deforest_Cons_head_inst_45_46_44_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_17_16_tsni) {
  let param0, param1, hx, tx, param01, param11, hy, ty;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_17_16_tsni;
  hx = param0;
  tx = param1;
  if (ys instanceof NofibPrelude.Cons.class) {
    param01 = ys.head;
    param11 = ys.tail;
    hy = param01;
    ty = param11;
    return runtime.safeCall(zs(hx, tx, hy, ty))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_45_46_44_39_19_6_50_tsni(f)
    }
  }
});
match_zs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni = (undefined, function (hx, tx, hy, ty, _deforest_Cons_head_inst_45_46_44_39_19_6_17_16_tsni, _deforest_Cons_tail_inst_45_46_44_39_19_6_17_16_tsni) {
  let param0, param1, hz, tz, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  param0 = _deforest_Cons_head_inst_45_46_44_39_19_6_17_16_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_39_19_6_17_16_tsni;
  hz = param0;
  tz = param1;
  _deforest_Deforest_Arr_3_0 = hx;
  _deforest_Deforest_Arr_3_1 = hy;
  _deforest_Deforest_Arr_3_2 = hz;
  arr = () => {
    let first2, first1, first0, last, this_, next, tmp1, tmp2, tmp3;
    first0 = _deforest_Deforest_Arr_3_0;
    first1 = _deforest_Deforest_Arr_3_1;
    first2 = _deforest_Deforest_Arr_3_2;
    last = first0;
    this_ = first1;
    next = first2;
    tmp1 = shift_inst_45_46_44_39_19_6_7_8_tsni(0, last);
    tmp2 = shift_inst_45_46_44_39_19_6_7_14_tsni(0, this_);
    tmp3 = shift_inst_45_46_44_39_19_6_7_15_tsni(0, next);
    return zipWith3_inst_45_46_44_39_19_6_7_48_tsni(elt_inst_45_46_44_39_19_6_7_49_tsni, tmp1, tmp2, tmp3)
  };
  tmp = zip3_inst_45_46_44_39_19_6_17_16_tsni(tx, ty, tz);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x, xs, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x = param01;
    xs = param11;
    tmp1 = runtime.safeCall(f(x));
    tmp2 = map_inst_45_46_44_39_19_6_50_tsni(f, xs);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Nil_inst_45_46_44_39_19_6_50_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
match_ys_arm_Cons_inst_45_46_44_42_tsni = (undefined, function (x, xs, _deforest_Cons_head_inst_45_46_44_42_tsni, _deforest_Cons_tail_inst_45_46_44_42_tsni) {
  let param0, param1, y, ys, arr, tmp, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  param0 = _deforest_Cons_head_inst_45_46_44_42_tsni;
  param1 = _deforest_Cons_tail_inst_45_46_44_42_tsni;
  y = param0;
  ys = param1;
  _deforest_Deforest_Arr_2_0 = x;
  _deforest_Deforest_Arr_2_1 = y;
  arr = () => {
    let first1, first0, genn, xss, tmp1;
    first0 = _deforest_Deforest_Arr_2_0;
    first1 = _deforest_Deforest_Arr_2_1;
    genn = first0;
    xss = first1;
    tmp1 = runtime.safeCall(lambda_inst_45_46_44_41_36_tsni(genn, xss));
    return NofibPrelude.lazy(tmp1)
  };
  tmp = zip_lz_nl_inst_45_46_44_42_tsni(xs, ys);
  _deforest_Cons_head = arr;
  _deforest_Cons_tail = tmp;
  return (f) => {
    let param01, param11, x1, xs1, tmp1, tmp2;
    param01 = _deforest_Cons_head;
    param11 = _deforest_Cons_tail;
    x1 = param01;
    xs1 = param11;
    tmp1 = runtime.safeCall(f(x1));
    tmp2 = map_inst_45_46_44_56_tsni(f, xs1);
    return NofibPrelude.Cons(tmp1, tmp2)
  }
});
match_xs_arm_Nil_inst_45_46_44_56_tsni = (undefined, function (f) {
  return NofibPrelude.Nil
});
copy_lz_inst_0_1_tsni = function copy_lz_inst_0_1_tsni(n, x) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_1_tsni(n, x));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_1_tsni = (undefined, function (n, x) {
  return () => {
    return lambda$_inst_0_1_tsni(n, x)
  }
});
lambda$_inst_0_1_tsni = function lambda$_inst_0_1_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (n1) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = n - 1;
    tmp1 = copy_lz_inst_0_1_tsni(tmp, x);
    _deforest_LzCons_head = x;
    _deforest_LzCons_tail = tmp1;
    return (n1) => {
      return match_scrut_arm_LzCons_inst_0_47_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  }
};
append_lz_lz_inst_0_2_tsni = function append_lz_lz_inst_0_2_tsni(xs, ys) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_0_2_tsni(xs, ys));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_0_2_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_0_2_tsni(xs, ys)
  }
});
lambda$_inst_0_2_tsni = function lambda$_inst_0_2_tsni(xs, ys) {
  let scrut, param0, param1, h, t, tmp, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = append_lz_lz_inst_0_2_tsni(t, ys);
    _deforest_LzCons_head = h;
    _deforest_LzCons_tail = tmp;
    return (n) => {
      return match_scrut_arm_LzCons_inst_0_47_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_3_4_tsni = function lambda$_inst_3_4_tsni(sz, l) {
  let tmp, tmp1;
  tmp = copy_lz_inst_3_4_1_tsni(sz, 0);
  tmp1 = append_lz_lz_inst_3_4_2_tsni(l, tmp);
  return take_lz_inst_3_4_47_tsni(sz, tmp1)
};
append_lz_lz_inst_3_4_2_tsni = function append_lz_lz_inst_3_4_2_tsni(xs, ys) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_4_2_tsni(xs, ys));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_3_4_2_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_3_4_2_tsni(xs, ys)
  }
});
lambda$_inst_3_4_2_tsni = function lambda$_inst_3_4_2_tsni(xs, ys) {
  let scrut, param0, param1, h, t, tmp, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = append_lz_lz_inst_3_4_2_tsni(t, ys);
    _deforest_LzCons_head = h;
    _deforest_LzCons_tail = tmp;
    return (n) => {
      return match_scrut_arm_LzCons_inst_3_4_47_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
copy_lz_inst_3_4_1_tsni = function copy_lz_inst_3_4_1_tsni(n, x) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_3_4_1_tsni(n, x));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_3_4_1_tsni = (undefined, function (n, x) {
  return () => {
    return lambda$_inst_3_4_1_tsni(n, x)
  }
});
lambda$_inst_3_4_1_tsni = function lambda$_inst_3_4_1_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (n1) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = n - 1;
    tmp1 = copy_lz_inst_3_4_1_tsni(tmp, x);
    _deforest_LzCons_head = x;
    _deforest_LzCons_tail = tmp1;
    return (n1) => {
      return match_scrut_arm_LzCons_inst_3_4_47_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  }
};
gen_inst_5_6_tsni = function gen_inst_5_6_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_5_6_17_tsni(tmp, board);
  return map_inst_5_6_50_tsni(row_inst_5_6_7_tsni, tmp1)
};
row_inst_5_6_7_tsni = function row_inst_5_6_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_5_6_7_8_tsni = function shift_inst_5_6_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_5_6_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_5_6_7_8_9_tsni(x, xs);
  return zip3_inst_5_6_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_5_6_7_8_9_tsni = function shiftl_inst_5_6_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_5_6_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_5_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_5_6_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_5_6_7_8_9_10_tsni = function init_inst_5_6_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_5_6_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_5_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_5_6_7_8_9_11_tsni = function append_inst_5_6_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_5_6_7_8_12_tsni = function shiftr_inst_5_6_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_5_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_5_6_7_8_12_13_tsni = function init_inst_5_6_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_5_6_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_5_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_5_6_7_14_tsni = function shift_inst_5_6_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_5_6_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_5_6_7_14_9_tsni(x, xs);
  return zip3_inst_5_6_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_5_6_7_14_9_tsni = function shiftl_inst_5_6_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_5_6_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_5_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_5_6_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_5_6_7_14_9_10_tsni = function init_inst_5_6_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_5_6_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_5_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_5_6_7_14_9_11_tsni = function append_inst_5_6_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_5_6_7_14_12_tsni = function shiftr_inst_5_6_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_5_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_5_6_7_14_12_13_tsni = function init_inst_5_6_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_5_6_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_5_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_5_6_7_15_tsni = function shift_inst_5_6_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_5_6_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_5_6_7_15_9_tsni(x, xs);
  return zip3_inst_5_6_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_5_6_7_15_9_tsni = function shiftl_inst_5_6_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_5_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_5_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_5_6_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_5_6_7_15_9_10_tsni = function init_inst_5_6_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_5_6_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_5_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_5_6_7_15_9_11_tsni = function append_inst_5_6_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_5_6_7_15_12_tsni = function shiftr_inst_5_6_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_5_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_5_6_7_15_12_13_tsni = function init_inst_5_6_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_5_6_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_5_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
zip3_inst_5_6_7_8_16_tsni = function zip3_inst_5_6_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_5_6_7_14_16_tsni = function zip3_inst_5_6_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_5_6_7_15_16_tsni = function zip3_inst_5_6_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_5_6_17_tsni = function shift_inst_5_6_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_5_6_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_5_6_17_9_tsni(x, xs);
  return zip3_inst_5_6_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_5_6_17_9_tsni = function shiftl_inst_5_6_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_5_6_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_5_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_5_6_17_9_11_tsni(tmp, tmp1)
};
init_inst_5_6_17_9_10_tsni = function init_inst_5_6_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_5_6_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_5_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_5_6_17_12_tsni = function shiftr_inst_5_6_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_5_6_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_5_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_5_6_17_12_13_tsni = function init_inst_5_6_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_5_6_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_5_6_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_5_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_5_6_17_9_11_tsni = function append_inst_5_6_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_5_6_17_16_tsni = function zip3_inst_5_6_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
lambda$_inst_18_19_tsni = function lambda$_inst_18_19_tsni(sz, b) {
  return gen_inst_18_19_6_tsni(sz, b)
};
gen_inst_18_19_6_tsni = function gen_inst_18_19_6_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_18_19_6_17_tsni(tmp, board);
  return map_inst_18_19_6_50_tsni(row_inst_18_19_6_7_tsni, tmp1)
};
shift_inst_18_19_6_17_tsni = function shift_inst_18_19_6_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_18_19_6_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_18_19_6_17_9_tsni(x, xs);
  return zip3_inst_18_19_6_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_18_19_6_17_9_tsni = function shiftl_inst_18_19_6_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_18_19_6_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_18_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_18_19_6_17_9_11_tsni(tmp, tmp1)
};
init_inst_18_19_6_17_9_10_tsni = function init_inst_18_19_6_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_18_19_6_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_18_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_18_19_6_17_9_11_tsni = function append_inst_18_19_6_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_18_19_6_17_12_tsni = function shiftr_inst_18_19_6_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_18_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_18_19_6_17_12_13_tsni = function init_inst_18_19_6_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_18_19_6_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_18_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
row_inst_18_19_6_7_tsni = function row_inst_18_19_6_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_18_19_6_7_15_tsni = function shift_inst_18_19_6_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_18_19_6_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_18_19_6_7_15_9_tsni(x, xs);
  return zip3_inst_18_19_6_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_18_19_6_7_15_9_tsni = function shiftl_inst_18_19_6_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_18_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_18_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_18_19_6_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_18_19_6_7_15_9_10_tsni = function init_inst_18_19_6_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_18_19_6_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_18_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_18_19_6_7_15_12_tsni = function shiftr_inst_18_19_6_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_18_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_18_19_6_7_15_12_13_tsni = function init_inst_18_19_6_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_18_19_6_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_18_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_18_19_6_7_15_9_11_tsni = function append_inst_18_19_6_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_18_19_6_7_15_16_tsni = function zip3_inst_18_19_6_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_18_19_6_7_14_tsni = function shift_inst_18_19_6_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_18_19_6_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_18_19_6_7_14_9_tsni(x, xs);
  return zip3_inst_18_19_6_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_18_19_6_7_14_9_tsni = function shiftl_inst_18_19_6_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_18_19_6_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_18_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_18_19_6_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_18_19_6_7_14_9_10_tsni = function init_inst_18_19_6_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_18_19_6_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_18_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_18_19_6_7_14_12_tsni = function shiftr_inst_18_19_6_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_18_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_18_19_6_7_14_12_13_tsni = function init_inst_18_19_6_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_18_19_6_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_18_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_18_19_6_7_14_9_11_tsni = function append_inst_18_19_6_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_18_19_6_7_14_16_tsni = function zip3_inst_18_19_6_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_18_19_6_7_8_tsni = function shift_inst_18_19_6_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_18_19_6_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_18_19_6_7_8_9_tsni(x, xs);
  return zip3_inst_18_19_6_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_18_19_6_7_8_9_tsni = function shiftl_inst_18_19_6_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_18_19_6_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_18_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_18_19_6_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_18_19_6_7_8_9_10_tsni = function init_inst_18_19_6_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_18_19_6_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_18_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_18_19_6_7_8_12_tsni = function shiftr_inst_18_19_6_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_18_19_6_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_18_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_18_19_6_7_8_12_13_tsni = function init_inst_18_19_6_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_18_19_6_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_18_19_6_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_18_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_18_19_6_7_8_9_11_tsni = function append_inst_18_19_6_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_18_19_6_7_8_16_tsni = function zip3_inst_18_19_6_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_18_19_6_17_16_tsni = function zip3_inst_18_19_6_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
map_inst_20_21_tsni = function map_inst_20_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_20_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_20_27_tsni(xs2);
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
lambda_inst_23_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_23_24_21_tsni(life1.star, x);
  return concat_inst_23_24_27_tsni(tmp)
});
map_inst_23_24_21_tsni = function map_inst_23_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_23_24_27_tsni(xs2);
      return append_inst_23_24_27_28_tsni(x1, tmp2)
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
lambda_inst_23_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_23_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_23_25_51_tsni(tmp, a, b)
});
map_inst_23_26_tsni = function map_inst_23_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_23_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_23_53_tsni(f1, z, t);
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
concat_inst_23_24_27_tsni = function concat_inst_23_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_23_24_27_28_tsni = function append_inst_23_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_23_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_23_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda$_inst_29_30_tsni = function lambda$_inst_29_30_tsni(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_29_30_26_tsni(lambda_inst_29_30_24_tsni, xss);
  tmp2 = foldr_inst_29_30_53_tsni(lambda_inst_29_30_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda_inst_29_30_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_29_30_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_29_30_25_51_tsni(tmp, a, b)
});
map_inst_29_30_26_tsni = function map_inst_29_30_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_29_30_53_tsni(f1, z, t);
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
lambda_inst_29_30_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_29_30_24_21_tsni(life1.star, x);
  return concat_inst_29_30_24_27_tsni(tmp)
});
map_inst_29_30_24_21_tsni = function map_inst_29_30_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_29_30_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_29_30_24_27_tsni(xs2);
      return append_inst_29_30_24_27_28_tsni(x1, tmp2)
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
concat_inst_29_30_24_27_tsni = function concat_inst_29_30_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_29_30_24_27_28_tsni = function append_inst_29_30_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_29_30_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_29_30_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
init_inst_31_10_tsni = function init_inst_31_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_31_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_31_11_tsni(xs, ys);
        return NofibPrelude.Cons(x, tmp1)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftl_inst_32_9_tsni = function shiftl_inst_32_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_32_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return NofibPrelude.Nil
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_32_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_32_9_11_tsni(tmp, tmp1)
};
init_inst_32_9_10_tsni = function init_inst_32_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_32_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_32_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_32_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_32_12_tsni = function shiftr_inst_32_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_32_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_32_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_32_12_13_tsni = function init_inst_32_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return NofibPrelude.Nil
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_32_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_32_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_32_9_11_tsni = function append_inst_32_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shift_inst_33_8_tsni = function shift_inst_33_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_33_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_33_8_9_tsni(x, xs);
  return zip3_inst_33_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_33_8_9_tsni = function shiftl_inst_33_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_33_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_33_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_33_8_9_11_tsni(tmp, tmp1)
};
init_inst_33_8_9_10_tsni = function init_inst_33_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_33_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_33_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_33_8_9_11_tsni = function append_inst_33_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_33_8_12_tsni = function shiftr_inst_33_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_33_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_33_8_12_13_tsni = function init_inst_33_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_33_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_33_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_33_14_tsni = function shift_inst_33_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_33_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_33_14_9_tsni(x, xs);
  return zip3_inst_33_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_33_14_9_tsni = function shiftl_inst_33_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_33_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_33_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_33_14_9_11_tsni(tmp, tmp1)
};
init_inst_33_14_9_10_tsni = function init_inst_33_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_33_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_33_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_33_14_9_11_tsni = function append_inst_33_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_33_14_12_tsni = function shiftr_inst_33_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_33_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_33_14_12_13_tsni = function init_inst_33_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_33_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_33_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_33_15_tsni = function shift_inst_33_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_33_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_33_15_9_tsni(x, xs);
  return zip3_inst_33_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_33_15_9_tsni = function shiftl_inst_33_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_33_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_33_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_33_15_9_11_tsni(tmp, tmp1)
};
init_inst_33_15_9_10_tsni = function init_inst_33_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_33_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_33_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_33_15_9_11_tsni = function append_inst_33_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_33_15_12_tsni = function shiftr_inst_33_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_33_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_33_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_33_15_12_13_tsni = function init_inst_33_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_33_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_33_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_33_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
zip3_inst_33_8_16_tsni = function zip3_inst_33_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_33_14_16_tsni = function zip3_inst_33_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_33_15_16_tsni = function zip3_inst_33_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_34_17_tsni = function shift_inst_34_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_34_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_34_17_9_tsni(x, xs);
  return zip3_inst_34_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_34_17_9_tsni = function shiftl_inst_34_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_34_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_34_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_34_17_9_11_tsni(tmp, tmp1)
};
init_inst_34_17_9_10_tsni = function init_inst_34_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_34_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_34_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_34_17_9_11_tsni = function append_inst_34_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_34_17_12_tsni = function shiftr_inst_34_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_34_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_34_17_12_13_tsni = function init_inst_34_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_34_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_34_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
row_inst_34_7_tsni = function row_inst_34_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_34_7_15_tsni = function shift_inst_34_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_34_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_34_7_15_9_tsni(x, xs);
  return zip3_inst_34_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_34_7_15_9_tsni = function shiftl_inst_34_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_34_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_34_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_34_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_34_7_15_9_10_tsni = function init_inst_34_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_34_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_34_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_34_7_15_12_tsni = function shiftr_inst_34_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_34_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_34_7_15_12_13_tsni = function init_inst_34_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_34_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_34_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_34_7_15_9_11_tsni = function append_inst_34_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_34_7_15_16_tsni = function zip3_inst_34_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_34_7_14_tsni = function shift_inst_34_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_34_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_34_7_14_9_tsni(x, xs);
  return zip3_inst_34_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_34_7_14_9_tsni = function shiftl_inst_34_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_34_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_34_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_34_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_34_7_14_9_10_tsni = function init_inst_34_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_34_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_34_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_34_7_14_12_tsni = function shiftr_inst_34_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_34_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_34_7_14_12_13_tsni = function init_inst_34_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_34_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_34_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_34_7_14_9_11_tsni = function append_inst_34_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_34_7_14_16_tsni = function zip3_inst_34_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_34_7_8_tsni = function shift_inst_34_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_34_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_34_7_8_9_tsni(x, xs);
  return zip3_inst_34_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_34_7_8_9_tsni = function shiftl_inst_34_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_34_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_34_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_34_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_34_7_8_9_10_tsni = function init_inst_34_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_34_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_34_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_34_7_8_12_tsni = function shiftr_inst_34_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_34_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_34_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_34_7_8_12_13_tsni = function init_inst_34_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_34_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_34_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_34_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_34_7_8_9_11_tsni = function append_inst_34_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_34_7_8_16_tsni = function zip3_inst_34_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_34_17_16_tsni = function zip3_inst_34_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
lambda_inst_35_36_tsni = (undefined, function (genn, xss) {
  return () => {
    return lambda$_inst_35_36_30_tsni(genn, xss)
  }
});
lambda$_inst_35_36_30_tsni = function lambda$_inst_35_36_30_tsni(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_35_36_30_26_tsni(lambda_inst_35_36_30_24_tsni, xss);
  tmp2 = foldr_inst_35_36_30_53_tsni(lambda_inst_35_36_30_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda_inst_35_36_30_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_35_36_30_24_21_tsni(life1.star, x);
  return concat_inst_35_36_30_24_27_tsni(tmp)
});
map_inst_35_36_30_24_21_tsni = function map_inst_35_36_30_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_35_36_30_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_35_36_30_24_27_tsni(xs2);
      return append_inst_35_36_30_24_27_28_tsni(x1, tmp2)
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
lambda_inst_35_36_30_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_35_36_30_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_35_36_30_25_51_tsni(tmp, a, b)
});
map_inst_35_36_30_26_tsni = function map_inst_35_36_30_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_35_36_30_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_35_36_30_53_tsni(f1, z, t);
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
concat_inst_35_36_30_24_27_tsni = function concat_inst_35_36_30_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_35_36_30_24_27_28_tsni = function append_inst_35_36_30_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_35_36_30_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_35_36_30_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_37_38_tsni = (undefined, function (sz) {
  return (l) => {
    return lambda$_inst_37_38_4_tsni(sz, l)
  }
});
lambda$_inst_37_38_4_tsni = function lambda$_inst_37_38_4_tsni(sz, l) {
  let tmp, tmp1;
  tmp = copy_lz_inst_37_38_4_1_tsni(sz, 0);
  tmp1 = append_lz_lz_inst_37_38_4_2_tsni(l, tmp);
  return take_lz_inst_37_38_4_47_tsni(sz, tmp1)
};
copy_lz_inst_37_38_4_1_tsni = function copy_lz_inst_37_38_4_1_tsni(n, x) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_37_38_4_1_tsni(n, x));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_37_38_4_1_tsni = (undefined, function (n, x) {
  return () => {
    return lambda$_inst_37_38_4_1_tsni(n, x)
  }
});
lambda$_inst_37_38_4_1_tsni = function lambda$_inst_37_38_4_1_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (n1) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = n - 1;
    tmp1 = copy_lz_inst_37_38_4_1_tsni(tmp, x);
    _deforest_LzCons_head = x;
    _deforest_LzCons_tail = tmp1;
    return (n1) => {
      return match_scrut_arm_LzCons_inst_37_38_4_47_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  }
};
append_lz_lz_inst_37_38_4_2_tsni = function append_lz_lz_inst_37_38_4_2_tsni(xs, ys) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_37_38_4_2_tsni(xs, ys));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_37_38_4_2_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_37_38_4_2_tsni(xs, ys)
  }
});
lambda$_inst_37_38_4_2_tsni = function lambda$_inst_37_38_4_2_tsni(xs, ys) {
  let scrut, param0, param1, h, t, tmp, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = append_lz_lz_inst_37_38_4_2_tsni(t, ys);
    _deforest_LzCons_head = h;
    _deforest_LzCons_tail = tmp;
    return (n) => {
      return match_scrut_arm_LzCons_inst_37_38_4_47_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_37_39_tsni = (undefined, function (sz) {
  return (b) => {
    return lambda$_inst_37_39_19_tsni(sz, b)
  }
});
lambda$_inst_37_39_19_tsni = function lambda$_inst_37_39_19_tsni(sz, b) {
  return gen_inst_37_39_19_6_tsni(sz, b)
};
gen_inst_37_39_19_6_tsni = function gen_inst_37_39_19_6_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_37_39_19_6_17_tsni(tmp, board);
  return map_inst_37_39_19_6_50_tsni(row_inst_37_39_19_6_7_tsni, tmp1)
};
row_inst_37_39_19_6_7_tsni = function row_inst_37_39_19_6_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_37_39_19_6_7_8_tsni = function shift_inst_37_39_19_6_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_37_39_19_6_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_37_39_19_6_7_8_9_tsni(x, xs);
  return zip3_inst_37_39_19_6_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_37_39_19_6_7_8_9_tsni = function shiftl_inst_37_39_19_6_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_37_39_19_6_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_37_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_37_39_19_6_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_37_39_19_6_7_8_9_10_tsni = function init_inst_37_39_19_6_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_37_39_19_6_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_37_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_37_39_19_6_7_8_9_11_tsni = function append_inst_37_39_19_6_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_37_39_19_6_7_8_12_tsni = function shiftr_inst_37_39_19_6_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_37_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_37_39_19_6_7_8_12_13_tsni = function init_inst_37_39_19_6_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_37_39_19_6_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_37_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_37_39_19_6_7_14_tsni = function shift_inst_37_39_19_6_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_37_39_19_6_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_37_39_19_6_7_14_9_tsni(x, xs);
  return zip3_inst_37_39_19_6_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_37_39_19_6_7_14_9_tsni = function shiftl_inst_37_39_19_6_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_37_39_19_6_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_37_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_37_39_19_6_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_37_39_19_6_7_14_9_10_tsni = function init_inst_37_39_19_6_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_37_39_19_6_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_37_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_37_39_19_6_7_14_9_11_tsni = function append_inst_37_39_19_6_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_37_39_19_6_7_14_12_tsni = function shiftr_inst_37_39_19_6_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_37_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_37_39_19_6_7_14_12_13_tsni = function init_inst_37_39_19_6_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_37_39_19_6_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_37_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_37_39_19_6_7_15_tsni = function shift_inst_37_39_19_6_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_37_39_19_6_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_37_39_19_6_7_15_9_tsni(x, xs);
  return zip3_inst_37_39_19_6_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_37_39_19_6_7_15_9_tsni = function shiftl_inst_37_39_19_6_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_37_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_37_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_37_39_19_6_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_37_39_19_6_7_15_9_10_tsni = function init_inst_37_39_19_6_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_37_39_19_6_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_37_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_37_39_19_6_7_15_9_11_tsni = function append_inst_37_39_19_6_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_37_39_19_6_7_15_12_tsni = function shiftr_inst_37_39_19_6_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_37_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_37_39_19_6_7_15_12_13_tsni = function init_inst_37_39_19_6_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_37_39_19_6_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_37_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
zip3_inst_37_39_19_6_7_8_16_tsni = function zip3_inst_37_39_19_6_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_37_39_19_6_7_14_16_tsni = function zip3_inst_37_39_19_6_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_37_39_19_6_7_15_16_tsni = function zip3_inst_37_39_19_6_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_37_39_19_6_17_tsni = function shift_inst_37_39_19_6_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_37_39_19_6_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_37_39_19_6_17_9_tsni(x, xs);
  return zip3_inst_37_39_19_6_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_37_39_19_6_17_9_tsni = function shiftl_inst_37_39_19_6_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_37_39_19_6_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_37_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_37_39_19_6_17_9_11_tsni(tmp, tmp1)
};
init_inst_37_39_19_6_17_9_10_tsni = function init_inst_37_39_19_6_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_37_39_19_6_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_37_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_37_39_19_6_17_12_tsni = function shiftr_inst_37_39_19_6_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_37_39_19_6_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_37_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_37_39_19_6_17_12_13_tsni = function init_inst_37_39_19_6_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_37_39_19_6_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_37_39_19_6_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_37_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_37_39_19_6_17_9_11_tsni = function append_inst_37_39_19_6_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_37_39_19_6_17_16_tsni = function zip3_inst_37_39_19_6_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
limit_inst_37_40_tsni = function limit_inst_37_40_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_37_56_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_37_42_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda$this = runtime.safeCall(lambda4(y, xs));
        tmp = NofibPrelude.lazy(lambda$this);
        tmp1 = limit_inst_37_40_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_37_42_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
disp_inst_37_41_tsni = function disp_inst_37_41_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
lambda_inst_37_41_36_tsni = (undefined, function (genn, xss) {
  return () => {
    return lambda$_inst_37_41_36_30_tsni(genn, xss)
  }
});
lambda$_inst_37_41_36_30_tsni = function lambda$_inst_37_41_36_30_tsni(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_37_41_36_30_26_tsni(lambda_inst_37_41_36_30_24_tsni, xss);
  tmp2 = foldr_inst_37_41_36_30_53_tsni(lambda_inst_37_41_36_30_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda_inst_37_41_36_30_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_37_41_36_30_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_37_41_36_30_25_51_tsni(tmp, a, b)
});
map_inst_37_41_36_30_26_tsni = function map_inst_37_41_36_30_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_41_36_30_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_37_41_36_30_53_tsni(f1, z, t);
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
lambda_inst_37_41_36_30_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_37_41_36_30_24_21_tsni(life1.star, x);
  return concat_inst_37_41_36_30_24_27_tsni(tmp)
});
map_inst_37_41_36_30_24_21_tsni = function map_inst_37_41_36_30_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_37_41_36_30_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_37_41_36_30_24_27_tsni(xs2);
      return append_inst_37_41_36_30_24_27_28_tsni(x1, tmp2)
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
concat_inst_37_41_36_30_24_27_tsni = function concat_inst_37_41_36_30_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_37_41_36_30_24_27_28_tsni = function append_inst_37_41_36_30_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_37_41_36_30_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_37_41_36_30_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
zip_lz_nl_inst_37_42_tsni = function zip_lz_nl_inst_37_42_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_37_56_tsni(f)
    }
  }
};
generations_inst_43_44_tsni = function generations_inst_43_44_tsni(sz) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda$this;
  tmp = NofibPrelude.enumFrom(0);
  tmp1 = NofibPrelude.map_lz(lambda8, tmp);
  tmp2 = runtime.safeCall(lambda_inst_43_44_38_tsni(sz));
  tmp3 = life.copy_lz(sz, 0);
  tmp4 = life.copy_lz(sz, tmp3);
  tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
  tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
  tmp7 = NofibPrelude.take_lz(sz, tmp6);
  lambda$this = runtime.safeCall(lambda_inst_43_44_39_tsni(sz));
  tmp8 = NofibPrelude.iterate(lambda$this, tmp7);
  tmp9 = limit_inst_43_44_40_tsni(tmp8);
  tmp10 = zip_lz_nl_inst_43_44_42_tsni(tmp1, tmp9);
  return map_inst_43_44_56_tsni(disp_inst_43_44_41_tsni, tmp10)
};
disp_inst_43_44_41_tsni = function disp_inst_43_44_41_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
lambda_inst_43_44_41_36_tsni = (undefined, function (genn, xss) {
  return () => {
    return lambda$_inst_43_44_41_36_30_tsni(genn, xss)
  }
});
lambda$_inst_43_44_41_36_30_tsni = function lambda$_inst_43_44_41_36_30_tsni(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_43_44_41_36_30_26_tsni(lambda_inst_43_44_41_36_30_24_tsni, xss);
  tmp2 = foldr_inst_43_44_41_36_30_53_tsni(lambda_inst_43_44_41_36_30_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda_inst_43_44_41_36_30_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_43_44_41_36_30_24_21_tsni(life1.star, x);
  return concat_inst_43_44_41_36_30_24_27_tsni(tmp)
});
map_inst_43_44_41_36_30_24_21_tsni = function map_inst_43_44_41_36_30_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_43_44_41_36_30_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_43_44_41_36_30_24_27_tsni(xs2);
      return append_inst_43_44_41_36_30_24_27_28_tsni(x1, tmp2)
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
lambda_inst_43_44_41_36_30_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_43_44_41_36_30_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_43_44_41_36_30_25_51_tsni(tmp, a, b)
});
map_inst_43_44_41_36_30_26_tsni = function map_inst_43_44_41_36_30_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_43_44_41_36_30_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_43_44_41_36_30_53_tsni(f1, z, t);
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
concat_inst_43_44_41_36_30_24_27_tsni = function concat_inst_43_44_41_36_30_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_43_44_41_36_30_24_27_28_tsni = function append_inst_43_44_41_36_30_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_43_44_41_36_30_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_43_44_41_36_30_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
zip_lz_nl_inst_43_44_42_tsni = function zip_lz_nl_inst_43_44_42_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_43_44_56_tsni(f)
    }
  }
};
limit_inst_43_44_40_tsni = function limit_inst_43_44_40_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_43_44_56_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_43_44_42_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda$this = runtime.safeCall(lambda4(y, xs));
        tmp = NofibPrelude.lazy(lambda$this);
        tmp1 = limit_inst_43_44_40_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_43_44_42_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_43_44_39_tsni = (undefined, function (sz) {
  return (b) => {
    return lambda$_inst_43_44_39_19_tsni(sz, b)
  }
});
lambda$_inst_43_44_39_19_tsni = function lambda$_inst_43_44_39_19_tsni(sz, b) {
  return gen_inst_43_44_39_19_6_tsni(sz, b)
};
gen_inst_43_44_39_19_6_tsni = function gen_inst_43_44_39_19_6_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_43_44_39_19_6_17_tsni(tmp, board);
  return map_inst_43_44_39_19_6_50_tsni(row_inst_43_44_39_19_6_7_tsni, tmp1)
};
shift_inst_43_44_39_19_6_17_tsni = function shift_inst_43_44_39_19_6_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_43_44_39_19_6_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_43_44_39_19_6_17_9_tsni(x, xs);
  return zip3_inst_43_44_39_19_6_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_43_44_39_19_6_17_9_tsni = function shiftl_inst_43_44_39_19_6_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_43_44_39_19_6_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_43_44_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_43_44_39_19_6_17_9_11_tsni(tmp, tmp1)
};
init_inst_43_44_39_19_6_17_9_10_tsni = function init_inst_43_44_39_19_6_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_43_44_39_19_6_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_43_44_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_43_44_39_19_6_17_9_11_tsni = function append_inst_43_44_39_19_6_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_43_44_39_19_6_17_12_tsni = function shiftr_inst_43_44_39_19_6_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_43_44_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_43_44_39_19_6_17_12_13_tsni = function init_inst_43_44_39_19_6_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_43_44_39_19_6_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_43_44_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
row_inst_43_44_39_19_6_7_tsni = function row_inst_43_44_39_19_6_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_43_44_39_19_6_7_15_tsni = function shift_inst_43_44_39_19_6_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_43_44_39_19_6_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_43_44_39_19_6_7_15_9_tsni(x, xs);
  return zip3_inst_43_44_39_19_6_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_43_44_39_19_6_7_15_9_tsni = function shiftl_inst_43_44_39_19_6_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_43_44_39_19_6_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_43_44_39_19_6_7_15_9_10_tsni = function init_inst_43_44_39_19_6_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_43_44_39_19_6_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_43_44_39_19_6_7_15_12_tsni = function shiftr_inst_43_44_39_19_6_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_43_44_39_19_6_7_15_12_13_tsni = function init_inst_43_44_39_19_6_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_43_44_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_43_44_39_19_6_7_15_9_11_tsni = function append_inst_43_44_39_19_6_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_43_44_39_19_6_7_15_16_tsni = function zip3_inst_43_44_39_19_6_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_43_44_39_19_6_7_14_tsni = function shift_inst_43_44_39_19_6_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_43_44_39_19_6_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_43_44_39_19_6_7_14_9_tsni(x, xs);
  return zip3_inst_43_44_39_19_6_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_43_44_39_19_6_7_14_9_tsni = function shiftl_inst_43_44_39_19_6_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_43_44_39_19_6_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_43_44_39_19_6_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_43_44_39_19_6_7_14_9_10_tsni = function init_inst_43_44_39_19_6_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_43_44_39_19_6_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_43_44_39_19_6_7_14_12_tsni = function shiftr_inst_43_44_39_19_6_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_43_44_39_19_6_7_14_12_13_tsni = function init_inst_43_44_39_19_6_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_43_44_39_19_6_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_43_44_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_43_44_39_19_6_7_14_9_11_tsni = function append_inst_43_44_39_19_6_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_43_44_39_19_6_7_14_16_tsni = function zip3_inst_43_44_39_19_6_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_43_44_39_19_6_7_8_tsni = function shift_inst_43_44_39_19_6_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_43_44_39_19_6_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_43_44_39_19_6_7_8_9_tsni(x, xs);
  return zip3_inst_43_44_39_19_6_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_43_44_39_19_6_7_8_9_tsni = function shiftl_inst_43_44_39_19_6_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_43_44_39_19_6_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_43_44_39_19_6_7_8_9_10_tsni = function init_inst_43_44_39_19_6_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_43_44_39_19_6_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_43_44_39_19_6_7_8_12_tsni = function shiftr_inst_43_44_39_19_6_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_43_44_39_19_6_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_43_44_39_19_6_7_8_12_13_tsni = function init_inst_43_44_39_19_6_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_43_44_39_19_6_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_43_44_39_19_6_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_43_44_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_43_44_39_19_6_7_8_9_11_tsni = function append_inst_43_44_39_19_6_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_43_44_39_19_6_7_8_16_tsni = function zip3_inst_43_44_39_19_6_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_43_44_39_19_6_17_16_tsni = function zip3_inst_43_44_39_19_6_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
lambda_inst_43_44_38_tsni = (undefined, function (sz) {
  return (l) => {
    return lambda$_inst_43_44_38_4_tsni(sz, l)
  }
});
lambda$_inst_43_44_38_4_tsni = function lambda$_inst_43_44_38_4_tsni(sz, l) {
  let tmp, tmp1;
  tmp = copy_lz_inst_43_44_38_4_1_tsni(sz, 0);
  tmp1 = append_lz_lz_inst_43_44_38_4_2_tsni(l, tmp);
  return take_lz_inst_43_44_38_4_47_tsni(sz, tmp1)
};
append_lz_lz_inst_43_44_38_4_2_tsni = function append_lz_lz_inst_43_44_38_4_2_tsni(xs, ys) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_44_38_4_2_tsni(xs, ys));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_44_38_4_2_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_43_44_38_4_2_tsni(xs, ys)
  }
});
lambda$_inst_43_44_38_4_2_tsni = function lambda$_inst_43_44_38_4_2_tsni(xs, ys) {
  let scrut, param0, param1, h, t, tmp, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = append_lz_lz_inst_43_44_38_4_2_tsni(t, ys);
    _deforest_LzCons_head = h;
    _deforest_LzCons_tail = tmp;
    return (n) => {
      return match_scrut_arm_LzCons_inst_43_44_38_4_47_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
copy_lz_inst_43_44_38_4_1_tsni = function copy_lz_inst_43_44_38_4_1_tsni(n, x) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_43_44_38_4_1_tsni(n, x));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_43_44_38_4_1_tsni = (undefined, function (n, x) {
  return () => {
    return lambda$_inst_43_44_38_4_1_tsni(n, x)
  }
});
lambda$_inst_43_44_38_4_1_tsni = function lambda$_inst_43_44_38_4_1_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (n1) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = n - 1;
    tmp1 = copy_lz_inst_43_44_38_4_1_tsni(tmp, x);
    _deforest_LzCons_head = x;
    _deforest_LzCons_tail = tmp1;
    return (n1) => {
      return match_scrut_arm_LzCons_inst_43_44_38_4_47_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  }
};
testLife_nofib_inst_45_46_tsni = function testLife_nofib_inst_45_46_tsni(n) {
  let tmp, tmp1, tmp2;
  tmp = generations_inst_45_46_44_tsni(n);
  tmp1 = life.last(tmp);
  tmp2 = NofibPrelude.force(tmp1);
  return NofibPrelude.listLen(tmp2)
};
generations_inst_45_46_44_tsni = function generations_inst_45_46_44_tsni(sz) {
  let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda$this;
  tmp = NofibPrelude.enumFrom(0);
  tmp1 = NofibPrelude.map_lz(lambda8, tmp);
  tmp2 = runtime.safeCall(lambda_inst_45_46_44_38_tsni(sz));
  tmp3 = life.copy_lz(sz, 0);
  tmp4 = life.copy_lz(sz, tmp3);
  tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
  tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
  tmp7 = NofibPrelude.take_lz(sz, tmp6);
  lambda$this = runtime.safeCall(lambda_inst_45_46_44_39_tsni(sz));
  tmp8 = NofibPrelude.iterate(lambda$this, tmp7);
  tmp9 = limit_inst_45_46_44_40_tsni(tmp8);
  tmp10 = zip_lz_nl_inst_45_46_44_42_tsni(tmp1, tmp9);
  return map_inst_45_46_44_56_tsni(disp_inst_45_46_44_41_tsni, tmp10)
};
lambda_inst_45_46_44_38_tsni = (undefined, function (sz) {
  return (l) => {
    return lambda$_inst_45_46_44_38_4_tsni(sz, l)
  }
});
lambda$_inst_45_46_44_38_4_tsni = function lambda$_inst_45_46_44_38_4_tsni(sz, l) {
  let tmp, tmp1;
  tmp = copy_lz_inst_45_46_44_38_4_1_tsni(sz, 0);
  tmp1 = append_lz_lz_inst_45_46_44_38_4_2_tsni(l, tmp);
  return take_lz_inst_45_46_44_38_4_47_tsni(sz, tmp1)
};
copy_lz_inst_45_46_44_38_4_1_tsni = function copy_lz_inst_45_46_44_38_4_1_tsni(n, x) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_45_46_44_38_4_1_tsni(n, x));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_45_46_44_38_4_1_tsni = (undefined, function (n, x) {
  return () => {
    return lambda$_inst_45_46_44_38_4_1_tsni(n, x)
  }
});
lambda$_inst_45_46_44_38_4_1_tsni = function lambda$_inst_45_46_44_38_4_1_tsni(n, x) {
  let scrut, tmp, tmp1, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = n === 0;
  if (scrut === true) {
    return (n1) => {
      return NofibPrelude.Nil
    }
  } else {
    tmp = n - 1;
    tmp1 = copy_lz_inst_45_46_44_38_4_1_tsni(tmp, x);
    _deforest_LzCons_head = x;
    _deforest_LzCons_tail = tmp1;
    return (n1) => {
      return match_scrut_arm_LzCons_inst_45_46_44_38_4_47_tsni(n1, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  }
};
append_lz_lz_inst_45_46_44_38_4_2_tsni = function append_lz_lz_inst_45_46_44_38_4_2_tsni(xs, ys) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_45_46_44_38_4_2_tsni(xs, ys));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_45_46_44_38_4_2_tsni = (undefined, function (xs, ys) {
  return () => {
    return lambda$_inst_45_46_44_38_4_2_tsni(xs, ys)
  }
});
lambda$_inst_45_46_44_38_4_2_tsni = function lambda$_inst_45_46_44_38_4_2_tsni(xs, ys) {
  let scrut, param0, param1, h, t, tmp, _deforest_LzCons_head, _deforest_LzCons_tail;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = append_lz_lz_inst_45_46_44_38_4_2_tsni(t, ys);
    _deforest_LzCons_head = h;
    _deforest_LzCons_tail = tmp;
    return (n) => {
      return match_scrut_arm_LzCons_inst_45_46_44_38_4_47_tsni(n, _deforest_LzCons_head, _deforest_LzCons_tail)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda_inst_45_46_44_39_tsni = (undefined, function (sz) {
  return (b) => {
    return lambda$_inst_45_46_44_39_19_tsni(sz, b)
  }
});
lambda$_inst_45_46_44_39_19_tsni = function lambda$_inst_45_46_44_39_19_tsni(sz, b) {
  return gen_inst_45_46_44_39_19_6_tsni(sz, b)
};
gen_inst_45_46_44_39_19_6_tsni = function gen_inst_45_46_44_39_19_6_tsni(n, board) {
  let tmp, tmp1;
  tmp = NofibPrelude.replicate(n, 0);
  tmp1 = shift_inst_45_46_44_39_19_6_17_tsni(tmp, board);
  return map_inst_45_46_44_39_19_6_50_tsni(row_inst_45_46_44_39_19_6_7_tsni, tmp1)
};
row_inst_45_46_44_39_19_6_7_tsni = function row_inst_45_46_44_39_19_6_7_tsni(last_this_next) {
  return runtime.safeCall(last_this_next())
};
shift_inst_45_46_44_39_19_6_7_8_tsni = function shift_inst_45_46_44_39_19_6_7_8_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_45_46_44_39_19_6_7_8_12_tsni(x, xs);
  tmp1 = shiftl_inst_45_46_44_39_19_6_7_8_9_tsni(x, xs);
  return zip3_inst_45_46_44_39_19_6_7_8_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_45_46_44_39_19_6_7_8_9_tsni = function shiftl_inst_45_46_44_39_19_6_7_8_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_8_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, ys, zs) => {
      return match_xs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, ys, zs)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_45_46_44_39_19_6_7_8_9_11_tsni(tmp, tmp1)
};
init_inst_45_46_44_39_19_6_7_8_9_10_tsni = function init_inst_45_46_44_39_19_6_7_8_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_8_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_45_46_44_39_19_6_7_8_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_45_46_44_39_19_6_7_8_9_11_tsni = function append_inst_45_46_44_39_19_6_7_8_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_45_46_44_39_19_6_7_8_12_tsni = function shiftr_inst_45_46_44_39_19_6_7_8_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_8_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_45_46_44_39_19_6_7_8_12_13_tsni = function init_inst_45_46_44_39_19_6_7_8_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, ys1, zs1) => {
          return match_xs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, ys1, zs1)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_8_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_8_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_45_46_44_39_19_6_7_14_tsni = function shift_inst_45_46_44_39_19_6_7_14_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_45_46_44_39_19_6_7_14_12_tsni(x, xs);
  tmp1 = shiftl_inst_45_46_44_39_19_6_7_14_9_tsni(x, xs);
  return zip3_inst_45_46_44_39_19_6_7_14_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_45_46_44_39_19_6_7_14_9_tsni = function shiftl_inst_45_46_44_39_19_6_7_14_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_14_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, zs, hx1, tx1) => {
      return match_ys_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, zs, hx1, tx1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_45_46_44_39_19_6_7_14_9_11_tsni(tmp, tmp1)
};
init_inst_45_46_44_39_19_6_7_14_9_10_tsni = function init_inst_45_46_44_39_19_6_7_14_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_14_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_45_46_44_39_19_6_7_14_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_45_46_44_39_19_6_7_14_9_11_tsni = function append_inst_45_46_44_39_19_6_7_14_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_45_46_44_39_19_6_7_14_12_tsni = function shiftr_inst_45_46_44_39_19_6_7_14_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_14_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_45_46_44_39_19_6_7_14_12_13_tsni = function init_inst_45_46_44_39_19_6_7_14_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, zs1, hx, tx) => {
          return match_ys_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, zs1, hx, tx)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_14_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_14_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shift_inst_45_46_44_39_19_6_7_15_tsni = function shift_inst_45_46_44_39_19_6_7_15_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_45_46_44_39_19_6_7_15_12_tsni(x, xs);
  tmp1 = shiftl_inst_45_46_44_39_19_6_7_15_9_tsni(x, xs);
  return zip3_inst_45_46_44_39_19_6_7_15_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_45_46_44_39_19_6_7_15_9_tsni = function shiftl_inst_45_46_44_39_19_6_7_15_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_15_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f, hx1, tx1, hy1, ty1) => {
      return match_zs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, hx1, tx1, hy1, ty1)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_45_46_44_39_19_6_7_15_9_11_tsni(tmp, tmp1)
};
init_inst_45_46_44_39_19_6_7_15_9_10_tsni = function init_inst_45_46_44_39_19_6_7_15_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_15_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_45_46_44_39_19_6_7_15_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_45_46_44_39_19_6_7_15_9_11_tsni = function append_inst_45_46_44_39_19_6_7_15_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
shiftr_inst_45_46_44_39_19_6_7_15_12_tsni = function shiftr_inst_45_46_44_39_19_6_7_15_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_7_15_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_45_46_44_39_19_6_7_15_12_13_tsni = function init_inst_45_46_44_39_19_6_7_15_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f, hx, tx, hy, ty) => {
          return match_zs_arm_default_inst_45_46_44_39_19_6_7_48_tsni(f, hx, tx, hy, ty)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_7_15_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_45_46_44_39_19_6_7_15_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
zip3_inst_45_46_44_39_19_6_7_8_16_tsni = function zip3_inst_45_46_44_39_19_6_7_8_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_45_46_44_39_19_6_7_14_16_tsni = function zip3_inst_45_46_44_39_19_6_7_14_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zip3_inst_45_46_44_39_19_6_7_15_16_tsni = function zip3_inst_45_46_44_39_19_6_7_15_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
shift_inst_45_46_44_39_19_6_17_tsni = function shift_inst_45_46_44_39_19_6_17_tsni(x, xs) {
  let tmp, tmp1;
  tmp = shiftr_inst_45_46_44_39_19_6_17_12_tsni(x, xs);
  tmp1 = shiftl_inst_45_46_44_39_19_6_17_9_tsni(x, xs);
  return zip3_inst_45_46_44_39_19_6_17_16_tsni(tmp, xs, tmp1)
};
shiftl_inst_45_46_44_39_19_6_17_9_tsni = function shiftl_inst_45_46_44_39_19_6_17_9_tsni(x, xs) {
  let tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_17_9_10_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = (hx, tx, hy, ty) => {
    return (f) => {
      return match_xs_arm_Nil_inst_45_46_44_39_19_6_50_tsni(f)
    }
  };
  tmp1 = (hx, tx, hy, ty) => {
    return match_zs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head, _deforest_Cons_tail)
  };
  return append_inst_45_46_44_39_19_6_17_9_11_tsni(tmp, tmp1)
};
init_inst_45_46_44_39_19_6_17_9_10_tsni = function init_inst_45_46_44_39_19_6_17_9_10_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys) => {
        return ys
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_17_9_10_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys) => {
        let param01, param11, x, xs, tmp1, _deforest_Cons_head1, _deforest_Cons_tail1;
        param01 = _deforest_Cons_head;
        param11 = _deforest_Cons_tail;
        x = param01;
        xs = param11;
        tmp1 = append_inst_45_46_44_39_19_6_17_9_11_tsni(xs, ys);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (hx, tx, hy, ty) => {
          return match_zs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni(hx, tx, hy, ty, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
shiftr_inst_45_46_44_39_19_6_17_12_tsni = function shiftr_inst_45_46_44_39_19_6_17_12_tsni(x, xs) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  tmp = init_inst_45_46_44_39_19_6_17_12_13_tsni(xs);
  _deforest_Cons_head = x;
  _deforest_Cons_tail = tmp;
  return (ys, zs) => {
    return match_xs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
  }
};
init_inst_45_46_44_39_19_6_17_12_13_tsni = function init_inst_45_46_44_39_19_6_17_12_13_tsni(ls) {
  let param0, param1, a, t, a1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a1 = param0;
    if (param1 instanceof NofibPrelude.Nil.class) {
      return (ys, zs) => {
        return (f) => {
          return match_xs_arm_Nil_inst_45_46_44_39_19_6_50_tsni(f)
        }
      }
    } else {
      a = param0;
      t = param1;
      tmp = init_inst_45_46_44_39_19_6_17_12_13_tsni(t);
      _deforest_Cons_head = a;
      _deforest_Cons_tail = tmp;
      return (ys, zs) => {
        return match_xs_arm_Cons_inst_45_46_44_39_19_6_17_16_tsni(ys, zs, _deforest_Cons_head, _deforest_Cons_tail)
      }
    }
  } else {
    throw globalThis.Error(ls)
  }
};
append_inst_45_46_44_39_19_6_17_9_11_tsni = function append_inst_45_46_44_39_19_6_17_9_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_45_46_44_39_19_6_17_16_tsni = function zip3_inst_45_46_44_39_19_6_17_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
limit_inst_45_46_44_40_tsni = function limit_inst_45_46_44_40_tsni(ls) {
  let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda$this, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1;
  scrut = NofibPrelude.force(ls);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    ys = param1;
    scrut1 = NofibPrelude.force(ys);
    if (scrut1 instanceof NofibPrelude.LzCons.class) {
      param01 = scrut1.head;
      param11 = scrut1.tail;
      y = param01;
      xs = param11;
      scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
      if (scrut2 === true) {
        _deforest_Cons_head = x;
        _deforest_Cons_tail = (x1, xs1) => {
          return (f) => {
            return match_xs_arm_Nil_inst_45_46_44_56_tsni(f)
          }
        };
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_45_46_44_42_tsni(x1, xs1, _deforest_Cons_head, _deforest_Cons_tail)
        }
      } else {
        lambda$this = runtime.safeCall(lambda4(y, xs));
        tmp = NofibPrelude.lazy(lambda$this);
        tmp1 = limit_inst_45_46_44_40_tsni(tmp);
        _deforest_Cons_head1 = x;
        _deforest_Cons_tail1 = tmp1;
        return (x1, xs1) => {
          return match_ys_arm_Cons_inst_45_46_44_42_tsni(x1, xs1, _deforest_Cons_head1, _deforest_Cons_tail1)
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
disp_inst_45_46_44_41_tsni = function disp_inst_45_46_44_41_tsni(gen_xss) {
  return runtime.safeCall(gen_xss())
};
lambda_inst_45_46_44_41_36_tsni = (undefined, function (genn, xss) {
  return () => {
    return lambda$_inst_45_46_44_41_36_30_tsni(genn, xss)
  }
});
lambda$_inst_45_46_44_41_36_30_tsni = function lambda$_inst_45_46_44_41_36_30_tsni(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_45_46_44_41_36_30_26_tsni(lambda_inst_45_46_44_41_36_30_24_tsni, xss);
  tmp2 = foldr_inst_45_46_44_41_36_30_53_tsni(lambda_inst_45_46_44_41_36_30_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda_inst_45_46_44_41_36_30_25_tsni = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_45_46_44_41_36_30_25_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_45_46_44_41_36_30_25_51_tsni(tmp, a, b)
});
map_inst_45_46_44_41_36_30_26_tsni = function map_inst_45_46_44_41_36_30_26_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_44_41_36_30_26_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return (f1, z) => {
      let param01, param11, h, t, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h = param01;
      t = param11;
      tmp2 = foldr_inst_45_46_44_41_36_30_53_tsni(f1, z, t);
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
lambda_inst_45_46_44_41_36_30_24_tsni = (undefined, function (x) {
  let tmp;
  tmp = map_inst_45_46_44_41_36_30_24_21_tsni(life1.star, x);
  return concat_inst_45_46_44_41_36_30_24_27_tsni(tmp)
});
map_inst_45_46_44_41_36_30_24_21_tsni = function map_inst_45_46_44_41_36_30_24_21_tsni(f, xs) {
  let param0, param1, x, xs1, tmp, tmp1, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = runtime.safeCall(f(x));
    tmp1 = map_inst_45_46_44_41_36_30_24_21_tsni(f, xs1);
    _deforest_Cons_head = tmp;
    _deforest_Cons_tail = tmp1;
    return () => {
      let param01, param11, x1, xs2, tmp2;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      x1 = param01;
      xs2 = param11;
      tmp2 = concat_inst_45_46_44_41_36_30_24_27_tsni(xs2);
      return append_inst_45_46_44_41_36_30_24_27_28_tsni(x1, tmp2)
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
concat_inst_45_46_44_41_36_30_24_27_tsni = function concat_inst_45_46_44_41_36_30_24_27_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_45_46_44_41_36_30_24_27_28_tsni = function append_inst_45_46_44_41_36_30_24_27_28_tsni(xs, ys) {
  let param0, param1, x, xs1, tmp, _deforest_Cons_head, _deforest_Cons_tail;
  if (xs instanceof NofibPrelude.Nil.class) {
    return ys
  } else if (xs instanceof NofibPrelude.Cons.class) {
    param0 = xs.head;
    param1 = xs.tail;
    x = param0;
    xs1 = param1;
    tmp = append_inst_45_46_44_41_36_30_24_27_28_tsni(xs1, ys);
    _deforest_Cons_head = x;
    _deforest_Cons_tail = tmp;
    return (ys1) => {
      param0 = _deforest_Cons_head;
      param1 = _deforest_Cons_tail;
      x = param0;
      xs1 = param1;
      tmp = append_inst_45_46_44_41_36_30_25_51_54_tsni(xs1, ys1);
      return NofibPrelude.Cons(x, tmp)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
zip_lz_nl_inst_45_46_44_42_tsni = function zip_lz_nl_inst_45_46_44_42_tsni(xs, ys) {
  let scrut, param0, param1, x, xs1;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    x = param0;
    xs1 = param1;
    return runtime.safeCall(ys(x, xs1))
  } else {
    return (f) => {
      return match_xs_arm_Nil_inst_45_46_44_56_tsni(f)
    }
  }
};
take_lz_inst_0_47_tsni = function take_lz_inst_0_47_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
take_lz_inst_3_4_47_tsni = function take_lz_inst_3_4_47_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith3_inst_5_6_7_48_tsni = function zipWith3_inst_5_6_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_5_6_7_49_tsni = function elt_inst_5_6_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_5_6_50_tsni = function map_inst_5_6_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith3_inst_18_19_6_7_48_tsni = function zipWith3_inst_18_19_6_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_18_19_6_7_49_tsni = function elt_inst_18_19_6_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_18_19_6_50_tsni = function map_inst_18_19_6_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
concat_inst_20_27_tsni = function concat_inst_20_27_tsni(ls) {
  return runtime.safeCall(ls())
};
glue_inst_22_51_tsni = function glue_inst_22_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_22_51_52_tsni(s, ys);
  return NofibPrelude.append(xs, tmp)
};
append_inst_22_51_52_tsni = function append_inst_22_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
glue_inst_23_25_51_tsni = function glue_inst_23_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_23_25_51_52_tsni(s, ys);
  return append_inst_23_25_51_54_tsni(xs, tmp)
};
append_inst_23_25_51_52_tsni = function append_inst_23_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_23_53_tsni = function foldr_inst_23_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_23_25_51_54_tsni = function append_inst_23_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
glue_inst_29_30_25_51_tsni = function glue_inst_29_30_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_29_30_25_51_52_tsni(s, ys);
  return append_inst_29_30_25_51_54_tsni(xs, tmp)
};
append_inst_29_30_25_51_52_tsni = function append_inst_29_30_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_29_30_53_tsni = function foldr_inst_29_30_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_29_30_25_51_54_tsni = function append_inst_29_30_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
lzfy_inst_55_tsni = function lzfy_inst_55_tsni(ls) {
  let tmp;
  tmp = runtime.safeCall(lambda_inst_55_tsni(ls));
  return NofibPrelude.lazy(tmp)
};
lambda_inst_55_tsni = (undefined, function (ls) {
  return () => {
    return lambda$_inst_55_tsni(ls)
  }
});
lambda$_inst_55_tsni = function lambda$_inst_55_tsni(ls) {
  return runtime.safeCall(ls())
};
append_inst_31_11_tsni = function append_inst_31_11_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
zip3_inst_32_16_tsni = function zip3_inst_32_16_tsni(xs, ys, zs) {
  return runtime.safeCall(xs(ys, zs))
};
zipWith3_inst_33_48_tsni = function zipWith3_inst_33_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_33_49_tsni = function elt_inst_33_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
zipWith3_inst_34_7_48_tsni = function zipWith3_inst_34_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_34_7_49_tsni = function elt_inst_34_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_34_50_tsni = function map_inst_34_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_35_36_30_25_51_tsni = function glue_inst_35_36_30_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_35_36_30_25_51_52_tsni(s, ys);
  return append_inst_35_36_30_25_51_54_tsni(xs, tmp)
};
append_inst_35_36_30_25_51_52_tsni = function append_inst_35_36_30_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_35_36_30_53_tsni = function foldr_inst_35_36_30_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_35_36_30_25_51_54_tsni = function append_inst_35_36_30_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
take_lz_inst_37_38_4_47_tsni = function take_lz_inst_37_38_4_47_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith3_inst_37_39_19_6_7_48_tsni = function zipWith3_inst_37_39_19_6_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_37_39_19_6_7_49_tsni = function elt_inst_37_39_19_6_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_37_39_19_6_50_tsni = function map_inst_37_39_19_6_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_37_41_36_30_25_51_tsni = function glue_inst_37_41_36_30_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_37_41_36_30_25_51_52_tsni(s, ys);
  return append_inst_37_41_36_30_25_51_54_tsni(xs, tmp)
};
append_inst_37_41_36_30_25_51_52_tsni = function append_inst_37_41_36_30_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_37_41_36_30_53_tsni = function foldr_inst_37_41_36_30_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_37_41_36_30_25_51_54_tsni = function append_inst_37_41_36_30_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_37_56_tsni = function map_inst_37_56_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_43_44_41_36_30_25_51_tsni = function glue_inst_43_44_41_36_30_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_43_44_41_36_30_25_51_52_tsni(s, ys);
  return append_inst_43_44_41_36_30_25_51_54_tsni(xs, tmp)
};
append_inst_43_44_41_36_30_25_51_52_tsni = function append_inst_43_44_41_36_30_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_43_44_41_36_30_53_tsni = function foldr_inst_43_44_41_36_30_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_43_44_41_36_30_25_51_54_tsni = function append_inst_43_44_41_36_30_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_43_44_56_tsni = function map_inst_43_44_56_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
zipWith3_inst_43_44_39_19_6_7_48_tsni = function zipWith3_inst_43_44_39_19_6_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_43_44_39_19_6_7_49_tsni = function elt_inst_43_44_39_19_6_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_43_44_39_19_6_50_tsni = function map_inst_43_44_39_19_6_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
take_lz_inst_43_44_38_4_47_tsni = function take_lz_inst_43_44_38_4_47_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
take_lz_inst_45_46_44_38_4_47_tsni = function take_lz_inst_45_46_44_38_4_47_tsni(n, ls) {
  let scrut, scrut1;
  scrut = n > 0;
  if (scrut === true) {
    scrut1 = NofibPrelude.force(ls);
    return runtime.safeCall(scrut1(n))
  } else {
    return NofibPrelude.Nil
  }
};
zipWith3_inst_45_46_44_39_19_6_7_48_tsni = function zipWith3_inst_45_46_44_39_19_6_7_48_tsni(f, xs, ys, zs) {
  return runtime.safeCall(xs(f, ys, zs))
};
elt_inst_45_46_44_39_19_6_7_49_tsni = function elt_inst_45_46_44_39_19_6_7_49_tsni(a_b_c, d_e_f, g_h_i) {
  return runtime.safeCall(a_b_c(d_e_f, g_h_i))
};
map_inst_45_46_44_39_19_6_50_tsni = function map_inst_45_46_44_39_19_6_50_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
glue_inst_45_46_44_41_36_30_25_51_tsni = function glue_inst_45_46_44_41_36_30_25_51_tsni(s, xs, ys) {
  let tmp;
  tmp = append_inst_45_46_44_41_36_30_25_51_52_tsni(s, ys);
  return append_inst_45_46_44_41_36_30_25_51_54_tsni(xs, tmp)
};
append_inst_45_46_44_41_36_30_25_51_52_tsni = function append_inst_45_46_44_41_36_30_25_51_52_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
foldr_inst_45_46_44_41_36_30_53_tsni = function foldr_inst_45_46_44_41_36_30_53_tsni(f, z, xs) {
  return runtime.safeCall(xs(f, z))
};
append_inst_45_46_44_41_36_30_25_51_54_tsni = function append_inst_45_46_44_41_36_30_25_51_54_tsni(xs, ys) {
  return runtime.safeCall(xs(ys))
};
map_inst_45_46_44_56_tsni = function map_inst_45_46_44_56_tsni(f, xs) {
  return runtime.safeCall(xs(f))
};
lambda8 = (undefined, function (i) {
  let tmp;
  tmp = NofibPrelude.stringOfInt(i);
  return NofibPrelude.nofibStringToList(tmp)
});
lambda$7 = function lambda$(sz, l) {
  let tmp, tmp1;
  tmp = copy_lz_inst_0_1_tsni(sz, 0);
  tmp1 = append_lz_lz_inst_0_2_tsni(l, tmp);
  return take_lz_inst_0_47_tsni(sz, tmp1)
};
lambda9 = (undefined, function (sz) {
  return (l) => {
    return lambda$_inst_3_4_tsni(sz, l)
  }
});
lambda$6 = function lambda$(sz, b) {
  return gen_inst_5_6_tsni(sz, b)
};
lambda10 = (undefined, function (sz) {
  return (b) => {
    return lambda$_inst_18_19_tsni(sz, b)
  }
});
lambda6 = (undefined, function (x) {
  let tmp;
  tmp = map_inst_20_21_tsni(life1.star, x);
  return concat_inst_20_27_tsni(tmp)
});
lambda7 = (undefined, function (a, b) {
  let tmp, _deforest_Cons_head, _deforest_Cons_tail;
  _deforest_Cons_head = "n";
  _deforest_Cons_tail = (ys) => {
    return ys
  };
  tmp = (ys) => {
    let param0, param1, x, xs, tmp1;
    param0 = _deforest_Cons_head;
    param1 = _deforest_Cons_tail;
    x = param0;
    xs = param1;
    tmp1 = append_inst_22_51_52_tsni(xs, ys);
    return NofibPrelude.Cons(x, tmp1)
  };
  return glue_inst_22_51_tsni(tmp, a, b)
});
lambda$5 = function lambda$(genn, xss) {
  let tmp, tmp1, tmp2, tmp3;
  tmp = NofibPrelude.nofibStringToList("nn");
  tmp1 = map_inst_23_26_tsni(lambda_inst_23_24_tsni, xss);
  tmp2 = foldr_inst_23_53_tsni(lambda_inst_23_25_tsni, NofibPrelude.Nil, tmp1);
  tmp3 = NofibPrelude.append(tmp, tmp2);
  return NofibPrelude.append(genn, tmp3)
};
lambda5 = (undefined, function (genn, xss) {
  return () => {
    return lambda$_inst_29_30_tsni(genn, xss)
  }
});
lambda$4 = function lambda$(y, xs) {
  return NofibPrelude.LzCons(y, xs)
};
lambda4 = (undefined, function (y, xs) {
  return () => {
    return lambda$4(y, xs)
  }
});
lambda$3 = function lambda$(tot) {
  return tot > 3
};
lambda3 = (undefined, function (tot) {
  return () => {
    return lambda$3(tot)
  }
});
lambda$2 = function lambda$(ls) {
  let param0, param1, a, t, tmp;
  if (ls instanceof NofibPrelude.Cons.class) {
    param0 = ls.head;
    param1 = ls.tail;
    a = param0;
    t = param1;
    tmp = life1.lzfy(t);
    return NofibPrelude.LzCons(a, tmp)
  } else {
    return NofibPrelude.LzNil
  }
};
lambda2 = (undefined, function (ls) {
  return () => {
    return lambda$2(ls)
  }
});
lambda$1 = function lambda$(xs, ys) {
  let scrut, param0, param1, h, t, tmp;
  scrut = NofibPrelude.force(xs);
  if (scrut instanceof NofibPrelude.LzNil.class) {
    return NofibPrelude.force(ys)
  } else if (scrut instanceof NofibPrelude.LzCons.class) {
    param0 = scrut.head;
    param1 = scrut.tail;
    h = param0;
    t = param1;
    tmp = life1.append_lz_lz(t, ys);
    return NofibPrelude.LzCons(h, tmp)
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lambda1 = (undefined, function (xs, ys) {
  return () => {
    return lambda$1(xs, ys)
  }
});
lambda$ = function lambda$(n, x) {
  let scrut, tmp, tmp1;
  scrut = n === 0;
  if (scrut === true) {
    return NofibPrelude.LzNil
  } else {
    tmp = n - 1;
    tmp1 = life1.copy_lz(tmp, x);
    return NofibPrelude.LzCons(x, tmp1)
  }
};
lambda = (undefined, function (n, x) {
  return () => {
    return lambda$(n, x)
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
(class life {
  static {
    life1 = life;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, lambda11, lambda12, lambda13, lambda14, lambda15, lambda16, lambda17, lambda18, lambda19, lambda20, lambda21, lambda22, lambda23, lambda24, _deforest_Cons_head, _deforest_Cons_tail, _deforest_Cons_head1, _deforest_Cons_tail1, _deforest_Cons_head2, _deforest_Cons_tail2, _deforest_Cons_head3, _deforest_Cons_tail3, _deforest_Cons_head4, _deforest_Cons_tail4, _deforest_Cons_head5, _deforest_Cons_tail5, _deforest_Cons_head6, _deforest_Cons_tail6, _deforest_Cons_head7, _deforest_Cons_tail7, _deforest_Cons_head8, _deforest_Cons_tail8, _deforest_Cons_head9, _deforest_Cons_tail9, _deforest_Cons_head10, _deforest_Cons_tail10, _deforest_Cons_head11, _deforest_Cons_tail11, _deforest_Cons_head12, _deforest_Cons_tail12, _deforest_Cons_head13, _deforest_Cons_tail13, _deforest_Cons_head14, _deforest_Cons_tail14, _deforest_Cons_head15, _deforest_Cons_tail15, _deforest_Cons_head16, _deforest_Cons_tail16, _deforest_Cons_head17, _deforest_Cons_tail17, _deforest_Cons_head18, _deforest_Cons_tail18, _deforest_Cons_head19, _deforest_Cons_tail19, _deforest_Cons_head20, _deforest_Cons_tail20, _deforest_Cons_head21, _deforest_Cons_tail21, _deforest_Cons_head22, _deforest_Cons_tail22, _deforest_Cons_head23, _deforest_Cons_tail23, _deforest_Cons_head24, _deforest_Cons_tail24, _deforest_Cons_head25, _deforest_Cons_tail25, _deforest_Cons_head26, _deforest_Cons_tail26;
    lambda11 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp = NofibPrelude.lazy(lambda11);
    lambda12 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp1 = NofibPrelude.lazy(lambda12);
    lambda13 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp2 = NofibPrelude.lazy(lambda13);
    lambda14 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp3 = NofibPrelude.lazy(lambda14);
    lambda15 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp4 = NofibPrelude.lazy(lambda15);
    lambda16 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp5 = NofibPrelude.lazy(lambda16);
    lambda17 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp6 = NofibPrelude.lazy(lambda17);
    lambda18 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp7 = NofibPrelude.lazy(lambda18);
    lambda19 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp8 = NofibPrelude.lazy(lambda19);
    lambda20 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp9 = NofibPrelude.lazy(lambda20);
    lambda21 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp10 = NofibPrelude.lazy(lambda21);
    lambda22 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp11 = NofibPrelude.lazy(lambda22);
    lambda23 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp12 = NofibPrelude.lazy(lambda23);
    lambda24 = (undefined, function () {
      return NofibPrelude.LzNil
    });
    tmp13 = NofibPrelude.lazy(lambda24);
    _deforest_Cons_head26 = 0;
    _deforest_Cons_tail26 = () => {
      return NofibPrelude.LzNil
    };
    tmp14 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head26, _deforest_Cons_tail26)
    };
    _deforest_Cons_head25 = 1;
    _deforest_Cons_tail25 = tmp14;
    tmp15 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head25, _deforest_Cons_tail25)
    };
    _deforest_Cons_head24 = 1;
    _deforest_Cons_tail24 = tmp15;
    tmp16 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head24, _deforest_Cons_tail24)
    };
    _deforest_Cons_head23 = 1;
    _deforest_Cons_tail23 = tmp16;
    tmp17 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head23, _deforest_Cons_tail23)
    };
    _deforest_Cons_head22 = 1;
    _deforest_Cons_tail22 = tmp17;
    tmp18 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head22, _deforest_Cons_tail22)
    };
    _deforest_Cons_head21 = 1;
    _deforest_Cons_tail21 = tmp18;
    tmp19 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head21, _deforest_Cons_tail21)
    };
    _deforest_Cons_head20 = 0;
    _deforest_Cons_tail20 = tmp19;
    tmp20 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head20, _deforest_Cons_tail20)
    };
    _deforest_Cons_head19 = 1;
    _deforest_Cons_tail19 = tmp20;
    tmp21 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head19, _deforest_Cons_tail19)
    };
    _deforest_Cons_head18 = 1;
    _deforest_Cons_tail18 = tmp21;
    tmp22 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head18, _deforest_Cons_tail18)
    };
    _deforest_Cons_head17 = 1;
    _deforest_Cons_tail17 = tmp22;
    tmp23 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head17, _deforest_Cons_tail17)
    };
    _deforest_Cons_head16 = 1;
    _deforest_Cons_tail16 = tmp23;
    tmp24 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head16, _deforest_Cons_tail16)
    };
    _deforest_Cons_head15 = 1;
    _deforest_Cons_tail15 = tmp24;
    tmp25 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head15, _deforest_Cons_tail15)
    };
    _deforest_Cons_head14 = 0;
    _deforest_Cons_tail14 = tmp25;
    tmp26 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head14, _deforest_Cons_tail14)
    };
    _deforest_Cons_head13 = 1;
    _deforest_Cons_tail13 = tmp26;
    tmp27 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head13, _deforest_Cons_tail13)
    };
    _deforest_Cons_head12 = 1;
    _deforest_Cons_tail12 = tmp27;
    tmp28 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head12, _deforest_Cons_tail12)
    };
    _deforest_Cons_head11 = 1;
    _deforest_Cons_tail11 = tmp28;
    tmp29 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head11, _deforest_Cons_tail11)
    };
    _deforest_Cons_head10 = 1;
    _deforest_Cons_tail10 = tmp29;
    tmp30 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head10, _deforest_Cons_tail10)
    };
    _deforest_Cons_head9 = 1;
    _deforest_Cons_tail9 = tmp30;
    tmp31 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head9, _deforest_Cons_tail9)
    };
    _deforest_Cons_head8 = 0;
    _deforest_Cons_tail8 = tmp31;
    tmp32 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head8, _deforest_Cons_tail8)
    };
    _deforest_Cons_head7 = 1;
    _deforest_Cons_tail7 = tmp32;
    tmp33 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head7, _deforest_Cons_tail7)
    };
    _deforest_Cons_head6 = 1;
    _deforest_Cons_tail6 = tmp33;
    tmp34 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head6, _deforest_Cons_tail6)
    };
    _deforest_Cons_head5 = 1;
    _deforest_Cons_tail5 = tmp34;
    tmp35 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head5, _deforest_Cons_tail5)
    };
    _deforest_Cons_head4 = 1;
    _deforest_Cons_tail4 = tmp35;
    tmp36 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head4, _deforest_Cons_tail4)
    };
    _deforest_Cons_head3 = 1;
    _deforest_Cons_tail3 = tmp36;
    tmp37 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head3, _deforest_Cons_tail3)
    };
    _deforest_Cons_head2 = 0;
    _deforest_Cons_tail2 = tmp37;
    tmp38 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head2, _deforest_Cons_tail2)
    };
    _deforest_Cons_head1 = 0;
    _deforest_Cons_tail1 = tmp38;
    tmp39 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head1, _deforest_Cons_tail1)
    };
    _deforest_Cons_head = 0;
    _deforest_Cons_tail = tmp39;
    tmp40 = () => {
      return match_ls_arm_Cons_inst_55_tsni(_deforest_Cons_head, _deforest_Cons_tail)
    };
    tmp41 = lzfy_inst_55_tsni(tmp40);
    tmp42 = NofibPrelude.Cons(tmp41, NofibPrelude.Nil);
    tmp43 = NofibPrelude.Cons(tmp13, tmp42);
    tmp44 = NofibPrelude.Cons(tmp12, tmp43);
    tmp45 = NofibPrelude.Cons(tmp11, tmp44);
    tmp46 = NofibPrelude.Cons(tmp10, tmp45);
    tmp47 = NofibPrelude.Cons(tmp9, tmp46);
    tmp48 = NofibPrelude.Cons(tmp8, tmp47);
    tmp49 = NofibPrelude.Cons(tmp7, tmp48);
    tmp50 = NofibPrelude.Cons(tmp6, tmp49);
    tmp51 = NofibPrelude.Cons(tmp5, tmp50);
    tmp52 = NofibPrelude.Cons(tmp4, tmp51);
    tmp53 = NofibPrelude.Cons(tmp3, tmp52);
    tmp54 = NofibPrelude.Cons(tmp2, tmp53);
    tmp55 = NofibPrelude.Cons(tmp1, tmp54);
    tmp56 = NofibPrelude.Cons(tmp, tmp55);
    this.start = tmp56;
  }
  static last(a_t) {
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
  static copy_lz(n, x) {
    let tmp;
    tmp = runtime.safeCall(lambda(n, x));
    return NofibPrelude.lazy(tmp)
  } 
  static append_lz_lz(xs, ys) {
    let tmp;
    tmp = runtime.safeCall(lambda1(xs, ys));
    return NofibPrelude.lazy(tmp)
  } 
  static init(ls) {
    let param0, param1, a, t, a1, tmp;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      a1 = param0;
      if (param1 instanceof NofibPrelude.Nil.class) {
        return NofibPrelude.Nil
      } else {
        a = param0;
        t = param1;
        tmp = life.init(t);
        return NofibPrelude.Cons(a, tmp)
      }
    } else {
      throw globalThis.Error(ls)
    }
  } 
  static zipWith3(f, xs, ys, zs) {
    let param0, param1, hx, tx, param01, param11, hy, ty, param02, param12, hz, tz, tmp, tmp1;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      hx = param0;
      tx = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        hy = param01;
        ty = param11;
        if (zs instanceof NofibPrelude.Cons.class) {
          param02 = zs.head;
          param12 = zs.tail;
          hz = param02;
          tz = param12;
          tmp = runtime.safeCall(f(hx, hy, hz));
          tmp1 = life.zipWith3(f, tx, ty, tz);
          return NofibPrelude.Cons(tmp, tmp1)
        } else {
          return NofibPrelude.Nil
        }
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static zip3(xs, ys, zs) {
    let param0, param1, hx, tx, param01, param11, hy, ty, param02, param12, hz, tz, arr, tmp;
    if (xs instanceof NofibPrelude.Cons.class) {
      param0 = xs.head;
      param1 = xs.tail;
      hx = param0;
      tx = param1;
      if (ys instanceof NofibPrelude.Cons.class) {
        param01 = ys.head;
        param11 = ys.tail;
        hy = param01;
        ty = param11;
        if (zs instanceof NofibPrelude.Cons.class) {
          param02 = zs.head;
          param12 = zs.tail;
          hz = param02;
          tz = param12;
          arr = globalThis.Object.freeze([
            hx,
            hy,
            hz
          ]);
          tmp = life.zip3(tx, ty, tz);
          return NofibPrelude.Cons(arr, tmp)
        } else {
          return NofibPrelude.Nil
        }
      } else {
        return NofibPrelude.Nil
      }
    } else {
      return NofibPrelude.Nil
    }
  } 
  static lzfy(ls) {
    let tmp;
    tmp = runtime.safeCall(lambda2(ls));
    return NofibPrelude.lazy(tmp)
  } 
  static elt(a_b_c, d_e_f, g_h_i) {
    let first2, first1, first0, a, b, c, first21, first11, first01, d, e, f, first22, first12, first02, g, h, i, tot, scrut, scrut1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, lambda$this;
    if (runtime.Tuple.isArrayLike(a_b_c) && a_b_c.length === 3) {
      first0 = runtime.Tuple.get(a_b_c, 0);
      first1 = runtime.Tuple.get(a_b_c, 1);
      first2 = runtime.Tuple.get(a_b_c, 2);
      a = first0;
      b = first1;
      c = first2;
      if (runtime.Tuple.isArrayLike(d_e_f) && d_e_f.length === 3) {
        first01 = runtime.Tuple.get(d_e_f, 0);
        first11 = runtime.Tuple.get(d_e_f, 1);
        first21 = runtime.Tuple.get(d_e_f, 2);
        d = first01;
        e = first11;
        f = first21;
        if (runtime.Tuple.isArrayLike(g_h_i) && g_h_i.length === 3) {
          first02 = runtime.Tuple.get(g_h_i, 0);
          first12 = runtime.Tuple.get(g_h_i, 1);
          first22 = runtime.Tuple.get(g_h_i, 2);
          g = first02;
          h = first12;
          i = first22;
          tmp = a + b;
          tmp1 = tmp + c;
          tmp2 = tmp1 + d;
          tmp3 = tmp2 + f;
          tmp4 = tmp3 + g;
          tmp5 = tmp4 + h;
          tmp6 = tmp5 + i;
          tot = tmp6;
          tmp7 = tot < 2;
          lambda$this = runtime.safeCall(lambda3(tot));
          scrut1 = runtime.short_or(tmp7, lambda$this);
          if (scrut1 === true) {
            return 0
          } else {
            scrut = tot === 3;
            if (scrut === true) {
              return 1
            } else {
              return e
            }
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
  static shiftr(x, xs) {
    let tmp;
    tmp = life.init(xs);
    return NofibPrelude.Cons(x, tmp)
  } 
  static shiftl(x, xs) {
    let tmp, tmp1;
    tmp = init_inst_31_10_tsni(xs);
    tmp1 = NofibPrelude.Cons(x, NofibPrelude.Nil);
    return append_inst_31_11_tsni(tmp, tmp1)
  } 
  static shift(x, xs) {
    let tmp, tmp1;
    tmp = shiftr_inst_32_12_tsni(x, xs);
    tmp1 = shiftl_inst_32_9_tsni(x, xs);
    return zip3_inst_32_16_tsni(tmp, xs, tmp1)
  } 
  static row(last_this_next) {
    let first2, first1, first0, last, this_, next, tmp, tmp1, tmp2;
    if (runtime.Tuple.isArrayLike(last_this_next) && last_this_next.length === 3) {
      first0 = runtime.Tuple.get(last_this_next, 0);
      first1 = runtime.Tuple.get(last_this_next, 1);
      first2 = runtime.Tuple.get(last_this_next, 2);
      last = first0;
      this_ = first1;
      next = first2;
      tmp = shift_inst_33_8_tsni(0, last);
      tmp1 = shift_inst_33_14_tsni(0, this_);
      tmp2 = shift_inst_33_15_tsni(0, next);
      return zipWith3_inst_33_48_tsni(elt_inst_33_49_tsni, tmp, tmp1, tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static gen(n, board) {
    let tmp, tmp1;
    tmp = NofibPrelude.replicate(n, 0);
    tmp1 = shift_inst_34_17_tsni(tmp, board);
    return map_inst_34_50_tsni(row_inst_34_7_tsni, tmp1)
  } 
  static star(x) {
    let scrut, scrut1;
    scrut1 = x === 0;
    if (scrut1 === true) {
      return NofibPrelude.nofibStringToList("  ")
    } else {
      scrut = x === 1;
      if (scrut === true) {
        return NofibPrelude.nofibStringToList(" o")
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } 
  static glue(s, xs, ys) {
    let tmp;
    tmp = NofibPrelude.append(s, ys);
    return NofibPrelude.append(xs, tmp)
  } 
  static limit(ls) {
    let scrut, param0, param1, x, ys, scrut1, param01, param11, y, xs, scrut2, tmp, tmp1, lambda$this;
    scrut = NofibPrelude.force(ls);
    if (scrut instanceof NofibPrelude.LzCons.class) {
      param0 = scrut.head;
      param1 = scrut.tail;
      x = param0;
      ys = param1;
      scrut1 = NofibPrelude.force(ys);
      if (scrut1 instanceof NofibPrelude.LzCons.class) {
        param01 = scrut1.head;
        param11 = scrut1.tail;
        y = param01;
        xs = param11;
        scrut2 = NofibPrelude.listEqBy(NofibPrelude.listEq, x, y);
        if (scrut2 === true) {
          return NofibPrelude.Cons(x, NofibPrelude.Nil)
        } else {
          lambda$this = runtime.safeCall(lambda4(y, xs));
          tmp = NofibPrelude.lazy(lambda$this);
          tmp1 = life.limit(tmp);
          return NofibPrelude.Cons(x, tmp1)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static disp(gen_xss) {
    let first1, first0, genn, xss, tmp;
    if (runtime.Tuple.isArrayLike(gen_xss) && gen_xss.length === 2) {
      first0 = runtime.Tuple.get(gen_xss, 0);
      first1 = runtime.Tuple.get(gen_xss, 1);
      genn = first0;
      xss = first1;
      tmp = runtime.safeCall(lambda_inst_35_36_tsni(genn, xss));
      return NofibPrelude.lazy(tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static generations(sz) {
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, lambda$this;
    tmp = NofibPrelude.enumFrom(0);
    tmp1 = NofibPrelude.map_lz(lambda8, tmp);
    tmp2 = runtime.safeCall(lambda_inst_37_38_tsni(sz));
    tmp3 = life.copy_lz(sz, 0);
    tmp4 = life.copy_lz(sz, tmp3);
    tmp5 = NofibPrelude.append_nl_lz(life.start, tmp4);
    tmp6 = NofibPrelude.map_lz(tmp2, tmp5);
    tmp7 = NofibPrelude.take_lz(sz, tmp6);
    lambda$this = runtime.safeCall(lambda_inst_37_39_tsni(sz));
    tmp8 = NofibPrelude.iterate(lambda$this, tmp7);
    tmp9 = limit_inst_37_40_tsni(tmp8);
    tmp10 = zip_lz_nl_inst_37_42_tsni(tmp1, tmp9);
    return map_inst_37_56_tsni(disp_inst_37_41_tsni, tmp10)
  } 
  static testLife_nofib(n) {
    let tmp, tmp1, tmp2;
    tmp = generations_inst_43_44_tsni(n);
    tmp1 = life.last(tmp);
    tmp2 = NofibPrelude.force(tmp1);
    return NofibPrelude.listLen(tmp2)
  } 
  static main() {
    return testLife_nofib_inst_45_46_tsni(15)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "life"]; 
});
let life = life1; export default life;
