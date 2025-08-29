const definitionMetadata = globalThis.Symbol.for("mlscript.definitionMetadata");
const prettyPrint = globalThis.Symbol.for("mlscript.prettyPrint");
import runtime from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Runtime.mjs";
import Term from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Term.mjs";
import NofibPrelude from "./NofibPrelude.mjs";
import Predef from "./../../../../../../hkmc2/shared/src/test/mlscript-compile/Predef.mjs";
let boyer21, lambda, lambda1, lambda2, lambda3, lambda4, lambda5, lambda6, lambda$, lambda$1, lambda$2, addlemmalst_inst_0_tsni, addlemma_inst_0_1_tsni, addtoLUT_inst_0_1_2_tsni, makelemmas_inst_3_tsni, strToToken_inst_3_4_tsni, getToken_inst_3_4_5_tsni, strToToken_inst_6_tsni, getToken_inst_6_5_tsni, lispmember_inst_7_8_tsni, lispmember_inst_7_9_tsni, lispmember_inst_7_10_tsni, lispmember_inst_7_11_tsni, lispmember_inst_7_12_tsni, lispmember_inst_7_13_tsni, lispmember_inst_7_14_tsni, lispmember_inst_15_16_tsni, lispmember_inst_15_17_tsni, lispmember_inst_15_18_tsni, lispmember_inst_15_19_tsni, lispmember_inst_15_20_tsni, lispmember_inst_15_21_tsni, lispmember_inst_15_22_tsni, truep_inst_23_24_tsni, lispmember_inst_23_24_14_tsni, lispmember_inst_23_24_13_tsni, lispmember_inst_23_24_12_tsni, lispmember_inst_23_24_11_tsni, lispmember_inst_23_24_10_tsni, lispmember_inst_23_24_9_tsni, lispmember_inst_23_24_8_tsni, truep_inst_23_25_tsni, lispmember_inst_23_25_14_tsni, lispmember_inst_23_25_13_tsni, lispmember_inst_23_25_12_tsni, lispmember_inst_23_25_11_tsni, lispmember_inst_23_25_10_tsni, lispmember_inst_23_25_9_tsni, lispmember_inst_23_25_8_tsni, falsep_inst_23_26_tsni, lispmember_inst_23_26_22_tsni, lispmember_inst_23_26_21_tsni, lispmember_inst_23_26_20_tsni, lispmember_inst_23_26_19_tsni, lispmember_inst_23_26_18_tsni, lispmember_inst_23_26_17_tsni, lispmember_inst_23_26_16_tsni, truep_inst_23_27_tsni, lispmember_inst_23_27_14_tsni, lispmember_inst_23_27_13_tsni, lispmember_inst_23_27_12_tsni, lispmember_inst_23_27_11_tsni, lispmember_inst_23_27_10_tsni, lispmember_inst_23_27_9_tsni, lispmember_inst_23_27_8_tsni, falsep_inst_23_28_tsni, lispmember_inst_23_28_22_tsni, lispmember_inst_23_28_21_tsni, lispmember_inst_23_28_20_tsni, lispmember_inst_23_28_19_tsni, lispmember_inst_23_28_18_tsni, lispmember_inst_23_28_17_tsni, lispmember_inst_23_28_16_tsni, getToken_inst_29_5_tsni, strToToken_inst_30_4_tsni, getToken_inst_30_4_5_tsni, addtoLUT_inst_31_2_tsni, addlemma_inst_32_1_tsni, addtoLUT_inst_32_1_2_tsni, applysubst_inst_33_tsni, assoc_inst_33_34_tsni, applysubstlst_inst_35_tsni, assoc_inst_35_34_tsni, onewayunify1_inst_36_tsni, assoc_inst_36_37_tsni, onewayunify1lst_inst_38_tsni, assoc_inst_38_37_tsni, onewayunify1_inst_39_40_tsni, onewayunify1lst_inst_39_40_tsni, assoc_inst_39_40_37_tsni, rewrite_inst_41_tsni, rewriteargs_inst_41_tsni, getLUT_inst_41_42_tsni, onewayunify_inst_41_43_tsni, onewayunify1_inst_41_43_40_tsni, onewayunify1lst_inst_41_43_40_tsni, assoc_inst_41_43_40_37_tsni, applysubst_inst_41_44_tsni, applysubstlst_inst_41_44_tsni, assoc_inst_41_44_34_tsni, rewrite_inst_45_tsni, rewritewithlemmas_inst_45_tsni, getLUT_inst_45_42_tsni, onewayunify_inst_45_43_tsni, onewayunify1_inst_45_43_40_tsni, onewayunify1lst_inst_45_43_40_tsni, assoc_inst_45_43_40_37_tsni, applysubst_inst_45_44_tsni, applysubstlst_inst_45_44_tsni, assoc_inst_45_44_34_tsni, rewritewithlemmas_inst_46_tsni, rewriteargs_inst_46_tsni, getLUT_inst_46_42_tsni, onewayunify_inst_46_43_tsni, onewayunify1_inst_46_43_40_tsni, onewayunify1lst_inst_46_43_40_tsni, assoc_inst_46_43_40_37_tsni, applysubst_inst_46_44_tsni, applysubstlst_inst_46_44_tsni, assoc_inst_46_44_34_tsni, strToToken_inst_47_48_tsni, getToken_inst_47_48_5_tsni, rewrite_inst_49_50_tsni, rewritewithlemmas_inst_49_50_tsni, rewriteargs_inst_49_50_tsni, applysubst_inst_49_50_44_tsni, applysubstlst_inst_49_50_44_tsni, assoc_inst_49_50_44_34_tsni, onewayunify_inst_49_50_43_tsni, onewayunify1_inst_49_50_43_40_tsni, onewayunify1lst_inst_49_50_43_40_tsni, assoc_inst_49_50_43_40_37_tsni, getLUT_inst_49_50_42_tsni, tautologyp_inst_49_51_tsni, falsep_inst_49_51_28_tsni, lispmember_inst_49_51_28_16_tsni, lispmember_inst_49_51_28_17_tsni, lispmember_inst_49_51_28_18_tsni, lispmember_inst_49_51_28_19_tsni, lispmember_inst_49_51_28_20_tsni, lispmember_inst_49_51_28_21_tsni, lispmember_inst_49_51_28_22_tsni, truep_inst_49_51_27_tsni, lispmember_inst_49_51_27_8_tsni, lispmember_inst_49_51_27_9_tsni, lispmember_inst_49_51_27_10_tsni, lispmember_inst_49_51_27_11_tsni, lispmember_inst_49_51_27_12_tsni, lispmember_inst_49_51_27_13_tsni, lispmember_inst_49_51_27_14_tsni, falsep_inst_49_51_26_tsni, lispmember_inst_49_51_26_16_tsni, lispmember_inst_49_51_26_17_tsni, lispmember_inst_49_51_26_18_tsni, lispmember_inst_49_51_26_19_tsni, lispmember_inst_49_51_26_20_tsni, lispmember_inst_49_51_26_21_tsni, lispmember_inst_49_51_26_22_tsni, truep_inst_49_51_25_tsni, lispmember_inst_49_51_25_8_tsni, lispmember_inst_49_51_25_9_tsni, lispmember_inst_49_51_25_10_tsni, lispmember_inst_49_51_25_11_tsni, lispmember_inst_49_51_25_12_tsni, lispmember_inst_49_51_25_13_tsni, lispmember_inst_49_51_25_14_tsni, truep_inst_49_51_24_tsni, lispmember_inst_49_51_24_8_tsni, lispmember_inst_49_51_24_9_tsni, lispmember_inst_49_51_24_10_tsni, lispmember_inst_49_51_24_11_tsni, lispmember_inst_49_51_24_12_tsni, lispmember_inst_49_51_24_13_tsni, lispmember_inst_49_51_24_14_tsni, subterm_inst_52_53_tsni, strToToken_inst_52_53_48_tsni, getToken_inst_52_53_48_5_tsni, applysubst_inst_52_54_tsni, applysubstlst_inst_52_54_tsni, assoc_inst_52_54_34_tsni, teststatement_inst_55_56_tsni, applysubst_inst_55_56_54_tsni, applysubstlst_inst_55_56_54_tsni, assoc_inst_55_56_54_34_tsni, subterm_inst_55_56_53_tsni, strToToken_inst_55_56_53_48_tsni, getToken_inst_55_56_53_48_5_tsni, tautp_inst_55_57_tsni, tautologyp_inst_55_57_51_tsni, truep_inst_55_57_51_24_tsni, lispmember_inst_55_57_51_24_14_tsni, lispmember_inst_55_57_51_24_13_tsni, lispmember_inst_55_57_51_24_12_tsni, lispmember_inst_55_57_51_24_11_tsni, lispmember_inst_55_57_51_24_10_tsni, lispmember_inst_55_57_51_24_9_tsni, lispmember_inst_55_57_51_24_8_tsni, truep_inst_55_57_51_25_tsni, lispmember_inst_55_57_51_25_14_tsni, lispmember_inst_55_57_51_25_13_tsni, lispmember_inst_55_57_51_25_12_tsni, lispmember_inst_55_57_51_25_11_tsni, lispmember_inst_55_57_51_25_10_tsni, lispmember_inst_55_57_51_25_9_tsni, lispmember_inst_55_57_51_25_8_tsni, falsep_inst_55_57_51_26_tsni, lispmember_inst_55_57_51_26_22_tsni, lispmember_inst_55_57_51_26_21_tsni, lispmember_inst_55_57_51_26_20_tsni, lispmember_inst_55_57_51_26_19_tsni, lispmember_inst_55_57_51_26_18_tsni, lispmember_inst_55_57_51_26_17_tsni, lispmember_inst_55_57_51_26_16_tsni, truep_inst_55_57_51_27_tsni, lispmember_inst_55_57_51_27_14_tsni, lispmember_inst_55_57_51_27_13_tsni, lispmember_inst_55_57_51_27_12_tsni, lispmember_inst_55_57_51_27_11_tsni, lispmember_inst_55_57_51_27_10_tsni, lispmember_inst_55_57_51_27_9_tsni, lispmember_inst_55_57_51_27_8_tsni, falsep_inst_55_57_51_28_tsni, lispmember_inst_55_57_51_28_22_tsni, lispmember_inst_55_57_51_28_21_tsni, lispmember_inst_55_57_51_28_20_tsni, lispmember_inst_55_57_51_28_19_tsni, lispmember_inst_55_57_51_28_18_tsni, lispmember_inst_55_57_51_28_17_tsni, lispmember_inst_55_57_51_28_16_tsni, rewrite_inst_55_57_50_tsni, rewritewithlemmas_inst_55_57_50_tsni, rewriteargs_inst_55_57_50_tsni, getLUT_inst_55_57_50_42_tsni, onewayunify_inst_55_57_50_43_tsni, onewayunify1_inst_55_57_50_43_40_tsni, onewayunify1lst_inst_55_57_50_43_40_tsni, assoc_inst_55_57_50_43_40_37_tsni, applysubst_inst_55_57_50_44_tsni, applysubstlst_inst_55_57_50_44_tsni, assoc_inst_55_57_50_44_34_tsni, testresult_inst_58_59_tsni, tautp_inst_58_59_57_tsni, rewrite_inst_58_59_57_50_tsni, rewritewithlemmas_inst_58_59_57_50_tsni, rewriteargs_inst_58_59_57_50_tsni, applysubst_inst_58_59_57_50_44_tsni, applysubstlst_inst_58_59_57_50_44_tsni, assoc_inst_58_59_57_50_44_34_tsni, onewayunify_inst_58_59_57_50_43_tsni, onewayunify1_inst_58_59_57_50_43_40_tsni, onewayunify1lst_inst_58_59_57_50_43_40_tsni, assoc_inst_58_59_57_50_43_40_37_tsni, getLUT_inst_58_59_57_50_42_tsni, tautologyp_inst_58_59_57_51_tsni, falsep_inst_58_59_57_51_28_tsni, lispmember_inst_58_59_57_51_28_16_tsni, lispmember_inst_58_59_57_51_28_17_tsni, lispmember_inst_58_59_57_51_28_18_tsni, lispmember_inst_58_59_57_51_28_19_tsni, lispmember_inst_58_59_57_51_28_20_tsni, lispmember_inst_58_59_57_51_28_21_tsni, lispmember_inst_58_59_57_51_28_22_tsni, truep_inst_58_59_57_51_27_tsni, lispmember_inst_58_59_57_51_27_8_tsni, lispmember_inst_58_59_57_51_27_9_tsni, lispmember_inst_58_59_57_51_27_10_tsni, lispmember_inst_58_59_57_51_27_11_tsni, lispmember_inst_58_59_57_51_27_12_tsni, lispmember_inst_58_59_57_51_27_13_tsni, lispmember_inst_58_59_57_51_27_14_tsni, falsep_inst_58_59_57_51_26_tsni, lispmember_inst_58_59_57_51_26_16_tsni, lispmember_inst_58_59_57_51_26_17_tsni, lispmember_inst_58_59_57_51_26_18_tsni, lispmember_inst_58_59_57_51_26_19_tsni, lispmember_inst_58_59_57_51_26_20_tsni, lispmember_inst_58_59_57_51_26_21_tsni, lispmember_inst_58_59_57_51_26_22_tsni, truep_inst_58_59_57_51_25_tsni, lispmember_inst_58_59_57_51_25_8_tsni, lispmember_inst_58_59_57_51_25_9_tsni, lispmember_inst_58_59_57_51_25_10_tsni, lispmember_inst_58_59_57_51_25_11_tsni, lispmember_inst_58_59_57_51_25_12_tsni, lispmember_inst_58_59_57_51_25_13_tsni, lispmember_inst_58_59_57_51_25_14_tsni, truep_inst_58_59_57_51_24_tsni, lispmember_inst_58_59_57_51_24_8_tsni, lispmember_inst_58_59_57_51_24_9_tsni, lispmember_inst_58_59_57_51_24_10_tsni, lispmember_inst_58_59_57_51_24_11_tsni, lispmember_inst_58_59_57_51_24_12_tsni, lispmember_inst_58_59_57_51_24_13_tsni, lispmember_inst_58_59_57_51_24_14_tsni, teststatement_inst_58_59_56_tsni, subterm_inst_58_59_56_53_tsni, strToToken_inst_58_59_56_53_48_tsni, getToken_inst_58_59_56_53_48_5_tsni, applysubst_inst_58_59_56_54_tsni, applysubstlst_inst_58_59_56_54_tsni, assoc_inst_58_59_56_54_34_tsni, testBoyer2_nofib_inst_60_61_tsni, testresult_inst_60_61_59_tsni, teststatement_inst_60_61_59_56_tsni, applysubst_inst_60_61_59_56_54_tsni, applysubstlst_inst_60_61_59_56_54_tsni, assoc_inst_60_61_59_56_54_34_tsni, subterm_inst_60_61_59_56_53_tsni, strToToken_inst_60_61_59_56_53_48_tsni, getToken_inst_60_61_59_56_53_48_5_tsni, tautp_inst_60_61_59_57_tsni, tautologyp_inst_60_61_59_57_51_tsni, truep_inst_60_61_59_57_51_24_tsni, lispmember_inst_60_61_59_57_51_24_14_tsni, lispmember_inst_60_61_59_57_51_24_13_tsni, lispmember_inst_60_61_59_57_51_24_12_tsni, lispmember_inst_60_61_59_57_51_24_11_tsni, lispmember_inst_60_61_59_57_51_24_10_tsni, lispmember_inst_60_61_59_57_51_24_9_tsni, lispmember_inst_60_61_59_57_51_24_8_tsni, truep_inst_60_61_59_57_51_25_tsni, lispmember_inst_60_61_59_57_51_25_14_tsni, lispmember_inst_60_61_59_57_51_25_13_tsni, lispmember_inst_60_61_59_57_51_25_12_tsni, lispmember_inst_60_61_59_57_51_25_11_tsni, lispmember_inst_60_61_59_57_51_25_10_tsni, lispmember_inst_60_61_59_57_51_25_9_tsni, lispmember_inst_60_61_59_57_51_25_8_tsni, falsep_inst_60_61_59_57_51_26_tsni, lispmember_inst_60_61_59_57_51_26_22_tsni, lispmember_inst_60_61_59_57_51_26_21_tsni, lispmember_inst_60_61_59_57_51_26_20_tsni, lispmember_inst_60_61_59_57_51_26_19_tsni, lispmember_inst_60_61_59_57_51_26_18_tsni, lispmember_inst_60_61_59_57_51_26_17_tsni, lispmember_inst_60_61_59_57_51_26_16_tsni, truep_inst_60_61_59_57_51_27_tsni, lispmember_inst_60_61_59_57_51_27_14_tsni, lispmember_inst_60_61_59_57_51_27_13_tsni, lispmember_inst_60_61_59_57_51_27_12_tsni, lispmember_inst_60_61_59_57_51_27_11_tsni, lispmember_inst_60_61_59_57_51_27_10_tsni, lispmember_inst_60_61_59_57_51_27_9_tsni, lispmember_inst_60_61_59_57_51_27_8_tsni, falsep_inst_60_61_59_57_51_28_tsni, lispmember_inst_60_61_59_57_51_28_22_tsni, lispmember_inst_60_61_59_57_51_28_21_tsni, lispmember_inst_60_61_59_57_51_28_20_tsni, lispmember_inst_60_61_59_57_51_28_19_tsni, lispmember_inst_60_61_59_57_51_28_18_tsni, lispmember_inst_60_61_59_57_51_28_17_tsni, lispmember_inst_60_61_59_57_51_28_16_tsni, rewrite_inst_60_61_59_57_50_tsni, rewritewithlemmas_inst_60_61_59_57_50_tsni, rewriteargs_inst_60_61_59_57_50_tsni, getLUT_inst_60_61_59_57_50_42_tsni, onewayunify_inst_60_61_59_57_50_43_tsni, onewayunify1_inst_60_61_59_57_50_43_40_tsni, onewayunify1lst_inst_60_61_59_57_50_43_40_tsni, assoc_inst_60_61_59_57_50_43_40_37_tsni, applysubst_inst_60_61_59_57_50_44_tsni, applysubstlst_inst_60_61_59_57_50_44_tsni, assoc_inst_60_61_59_57_50_44_34_tsni, match_k_l_lut_arm_Deforest_Arr_3_inst_0_1_2_tsni, match_scrut_arm_Deforest_Arr_2_inst_3_4_tsni, match_scrut_arm_Deforest_Arr_2_inst_6_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_7_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_15_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_24_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_25_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_26_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_27_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_23_28_16_tsni, match_scrut_arm_Deforest_Arr_2_inst_29_tsni, match_scrut_arm_Deforest_Arr_2_inst_30_4_tsni, match_k_l_lut_arm_Deforest_Arr_3_inst_31_2_tsni, match_k_l_lut_arm_Deforest_Arr_3_inst_32_1_2_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_33_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_35_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_36_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_38_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_39_40_37_tsni, match_t_lut_arm_Deforest_Arr_2_inst_41_42_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_41_43_40_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_41_44_34_tsni, match_t_lut_arm_Deforest_Arr_2_inst_45_42_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_45_43_40_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_45_44_34_tsni, match_t_lut_arm_Deforest_Arr_2_inst_46_42_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_46_43_40_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_46_44_34_tsni, match_scrut_arm_Deforest_Arr_2_inst_47_48_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_49_50_44_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_49_50_43_40_37_tsni, match_t_lut_arm_Deforest_Arr_2_inst_49_50_42_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_28_22_tsni, match_term_l_arm_Deforest_Arr_2_inst_49_51_28_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_27_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_49_51_27_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_26_22_tsni, match_term_l_arm_Deforest_Arr_2_inst_49_51_26_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_25_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_49_51_25_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_49_51_24_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_49_51_24_tsni, match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni, match_scrut_arm_Deforest_Arr_2_inst_52_53_48_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_52_54_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_55_56_54_34_tsni, match_scrut_arm_Deforest_Arr_2_inst_55_56_53_48_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_55_57_51_24_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_55_57_51_25_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_16_tsni, match_term_l_arm_Deforest_Arr_2_inst_55_57_51_26_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_55_57_51_27_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_16_tsni, match_term_l_arm_Deforest_Arr_2_inst_55_57_51_28_tsni, match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni, match_t_lut_arm_Deforest_Arr_2_inst_55_57_50_42_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_43_40_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_44_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_44_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_43_40_37_tsni, match_t_lut_arm_Deforest_Arr_2_inst_58_59_57_50_42_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_22_tsni, match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_28_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_27_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_16_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_22_tsni, match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_26_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_25_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_8_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_14_tsni, match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_24_tsni, match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni, match_scrut_arm_Deforest_Arr_2_inst_58_59_56_53_48_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_58_59_56_54_34_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_56_54_34_tsni, match_scrut_arm_Deforest_Arr_2_inst_60_61_59_56_53_48_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_16_tsni, match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_14_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_13_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_12_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_11_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_10_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_9_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_8_tsni, match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_22_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_21_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_20_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_19_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_18_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_17_tsni, match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_16_tsni, match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_tsni, match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni, match_t_lut_arm_Deforest_Arr_2_inst_60_61_59_57_50_42_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_43_40_37_tsni, match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_44_34_tsni;
match_k_l_lut_arm_Deforest_Arr_3_inst_0_1_2_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_0_1_2_tsni, _deforest_Deforest_Arr_3_1_inst_0_1_2_tsni, _deforest_Deforest_Arr_3_2_inst_0_1_2_tsni) {
  let first2, first1, first0, k, l, param0, first21, first11, first01, left, first12, first02, k1, kl, right, scrut, scrut1, k2, l1, tmp, arr, arr1, tmp1, arr2, arr3, arr4, tmp2, arr5, arr6, arr7, arr8, tmp3, arr9, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21;
  first0 = _deforest_Deforest_Arr_3_0_inst_0_1_2_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_0_1_2_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_0_1_2_tsni;
  k2 = first0;
  l1 = first1;
  k = first0;
  l = first1;
  if (first2 instanceof boyer21.Empty.class) {
    tmp = NofibPrelude.Cons(l1, NofibPrelude.Nil);
    arr = globalThis.Object.freeze([
      k2,
      tmp
    ]);
    arr1 = globalThis.Object.freeze([
      boyer21.Empty,
      arr,
      boyer21.Empty
    ]);
    return runtime.safeCall(boyer21.Node(arr1))
  } else if (first2 instanceof boyer21.Node.class) {
    param0 = first2.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first21 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k1 = first02;
        kl = first12;
        right = first21;
        scrut1 = NofibPrelude.listEq(k, k1);
        if (scrut1 === true) {
          tmp1 = NofibPrelude.Cons(l, kl);
          arr2 = globalThis.Object.freeze([
            k1,
            tmp1
          ]);
          arr3 = globalThis.Object.freeze([
            left,
            arr2,
            right
          ]);
          return runtime.safeCall(boyer21.Node(arr3))
        } else {
          scrut = NofibPrelude.ltList(k, k1, lambda3, lambda4);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_01 = k;
            _deforest_Deforest_Arr_3_11 = l;
            _deforest_Deforest_Arr_3_21 = left;
            arr4 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_0_1_2_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            tmp2 = addtoLUT_inst_0_1_2_tsni(arr4);
            arr5 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            arr6 = globalThis.Object.freeze([
              tmp2,
              arr5,
              right
            ]);
            return runtime.safeCall(boyer21.Node(arr6))
          } else {
            arr7 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            _deforest_Deforest_Arr_3_0 = k;
            _deforest_Deforest_Arr_3_1 = l;
            _deforest_Deforest_Arr_3_2 = right;
            arr8 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_0_1_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
            };
            tmp3 = addtoLUT_inst_0_1_2_tsni(arr8);
            arr9 = globalThis.Object.freeze([
              left,
              arr7,
              tmp3
            ]);
            return runtime.safeCall(boyer21.Node(arr9))
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
});
match_scrut_arm_Deforest_Arr_2_inst_3_4_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_3_4_tsni, _deforest_Deforest_Arr_2_1_inst_3_4_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_3_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_3_4_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_3_4_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_scrut_arm_Deforest_Arr_2_inst_6_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_6_tsni, _deforest_Deforest_Arr_2_1_inst_6_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_6_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_6_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_6_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_e_x_arm_Deforest_Arr_2_inst_7_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_8_tsni, _deforest_Deforest_Arr_2_1_inst_7_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_9_tsni, _deforest_Deforest_Arr_2_1_inst_7_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_10_tsni, _deforest_Deforest_Arr_2_1_inst_7_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_11_tsni, _deforest_Deforest_Arr_2_1_inst_7_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_12_tsni, _deforest_Deforest_Arr_2_1_inst_7_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_13_tsni, _deforest_Deforest_Arr_2_1_inst_7_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_7_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_7_14_tsni, _deforest_Deforest_Arr_2_1_inst_7_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_7_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_7_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_7_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_16_tsni, _deforest_Deforest_Arr_2_1_inst_15_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_17_tsni, _deforest_Deforest_Arr_2_1_inst_15_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_18_tsni, _deforest_Deforest_Arr_2_1_inst_15_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_19_tsni, _deforest_Deforest_Arr_2_1_inst_15_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_20_tsni, _deforest_Deforest_Arr_2_1_inst_15_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_21_tsni, _deforest_Deforest_Arr_2_1_inst_15_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_15_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_15_22_tsni, _deforest_Deforest_Arr_2_1_inst_15_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_15_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_15_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_15_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_14_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_13_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_12_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_11_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_10_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_9_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_24_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_24_8_tsni, _deforest_Deforest_Arr_2_1_inst_23_24_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_24_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_24_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_24_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_14_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_13_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_12_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_11_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_10_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_9_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_25_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_25_8_tsni, _deforest_Deforest_Arr_2_1_inst_23_25_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_25_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_25_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_25_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_22_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_21_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_20_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_19_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_18_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_17_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_26_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_26_16_tsni, _deforest_Deforest_Arr_2_1_inst_23_26_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_26_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_26_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_26_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_14_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_13_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_12_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_11_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_10_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_9_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_27_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_27_8_tsni, _deforest_Deforest_Arr_2_1_inst_23_27_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_27_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_27_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_27_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_22_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_21_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_20_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_19_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_18_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_17_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_23_28_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_23_28_16_tsni, _deforest_Deforest_Arr_2_1_inst_23_28_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_23_28_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_23_28_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_23_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_23_28_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_scrut_arm_Deforest_Arr_2_inst_29_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_29_tsni, _deforest_Deforest_Arr_2_1_inst_29_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_29_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_29_tsni;
  a = first0;
  b = first1;
  tmp = boyer2.strToToken(b);
  return NofibPrelude.Cons(a, tmp)
});
match_scrut_arm_Deforest_Arr_2_inst_30_4_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_30_4_tsni, _deforest_Deforest_Arr_2_1_inst_30_4_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_30_4_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_30_4_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_30_4_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_k_l_lut_arm_Deforest_Arr_3_inst_31_2_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_31_2_tsni, _deforest_Deforest_Arr_3_1_inst_31_2_tsni, _deforest_Deforest_Arr_3_2_inst_31_2_tsni) {
  let first2, first1, first0, k, l, param0, first21, first11, first01, left, first12, first02, k1, kl, right, scrut, scrut1, k2, l1, tmp, arr, arr1, tmp1, arr2, arr3, arr4, tmp2, arr5, arr6, arr7, arr8, tmp3, arr9, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21;
  first0 = _deforest_Deforest_Arr_3_0_inst_31_2_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_31_2_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_31_2_tsni;
  k2 = first0;
  l1 = first1;
  k = first0;
  l = first1;
  if (first2 instanceof boyer21.Empty.class) {
    tmp = NofibPrelude.Cons(l1, NofibPrelude.Nil);
    arr = globalThis.Object.freeze([
      k2,
      tmp
    ]);
    arr1 = globalThis.Object.freeze([
      boyer21.Empty,
      arr,
      boyer21.Empty
    ]);
    return runtime.safeCall(boyer21.Node(arr1))
  } else if (first2 instanceof boyer21.Node.class) {
    param0 = first2.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first21 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k1 = first02;
        kl = first12;
        right = first21;
        scrut1 = NofibPrelude.listEq(k, k1);
        if (scrut1 === true) {
          tmp1 = NofibPrelude.Cons(l, kl);
          arr2 = globalThis.Object.freeze([
            k1,
            tmp1
          ]);
          arr3 = globalThis.Object.freeze([
            left,
            arr2,
            right
          ]);
          return runtime.safeCall(boyer21.Node(arr3))
        } else {
          scrut = NofibPrelude.ltList(k, k1, lambda3, lambda4);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_0 = k;
            _deforest_Deforest_Arr_3_1 = l;
            _deforest_Deforest_Arr_3_2 = left;
            arr4 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_31_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
            };
            tmp2 = addtoLUT_inst_31_2_tsni(arr4);
            arr5 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            arr6 = globalThis.Object.freeze([
              tmp2,
              arr5,
              right
            ]);
            return runtime.safeCall(boyer21.Node(arr6))
          } else {
            arr7 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            _deforest_Deforest_Arr_3_01 = k;
            _deforest_Deforest_Arr_3_11 = l;
            _deforest_Deforest_Arr_3_21 = right;
            arr8 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_31_2_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            tmp3 = addtoLUT_inst_31_2_tsni(arr8);
            arr9 = globalThis.Object.freeze([
              left,
              arr7,
              tmp3
            ]);
            return runtime.safeCall(boyer21.Node(arr9))
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
});
match_k_l_lut_arm_Deforest_Arr_3_inst_32_1_2_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_32_1_2_tsni, _deforest_Deforest_Arr_3_1_inst_32_1_2_tsni, _deforest_Deforest_Arr_3_2_inst_32_1_2_tsni) {
  let first2, first1, first0, k, l, param0, first21, first11, first01, left, first12, first02, k1, kl, right, scrut, scrut1, k2, l1, tmp, arr, arr1, tmp1, arr2, arr3, arr4, tmp2, arr5, arr6, arr7, arr8, tmp3, arr9, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21;
  first0 = _deforest_Deforest_Arr_3_0_inst_32_1_2_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_32_1_2_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_32_1_2_tsni;
  k2 = first0;
  l1 = first1;
  k = first0;
  l = first1;
  if (first2 instanceof boyer21.Empty.class) {
    tmp = NofibPrelude.Cons(l1, NofibPrelude.Nil);
    arr = globalThis.Object.freeze([
      k2,
      tmp
    ]);
    arr1 = globalThis.Object.freeze([
      boyer21.Empty,
      arr,
      boyer21.Empty
    ]);
    return runtime.safeCall(boyer21.Node(arr1))
  } else if (first2 instanceof boyer21.Node.class) {
    param0 = first2.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first21 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k1 = first02;
        kl = first12;
        right = first21;
        scrut1 = NofibPrelude.listEq(k, k1);
        if (scrut1 === true) {
          tmp1 = NofibPrelude.Cons(l, kl);
          arr2 = globalThis.Object.freeze([
            k1,
            tmp1
          ]);
          arr3 = globalThis.Object.freeze([
            left,
            arr2,
            right
          ]);
          return runtime.safeCall(boyer21.Node(arr3))
        } else {
          scrut = NofibPrelude.ltList(k, k1, lambda3, lambda4);
          if (scrut === true) {
            _deforest_Deforest_Arr_3_01 = k;
            _deforest_Deforest_Arr_3_11 = l;
            _deforest_Deforest_Arr_3_21 = left;
            arr4 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_32_1_2_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
            };
            tmp2 = addtoLUT_inst_32_1_2_tsni(arr4);
            arr5 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            arr6 = globalThis.Object.freeze([
              tmp2,
              arr5,
              right
            ]);
            return runtime.safeCall(boyer21.Node(arr6))
          } else {
            arr7 = globalThis.Object.freeze([
              k1,
              kl
            ]);
            _deforest_Deforest_Arr_3_0 = k;
            _deforest_Deforest_Arr_3_1 = l;
            _deforest_Deforest_Arr_3_2 = right;
            arr8 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_32_1_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
            };
            tmp3 = addtoLUT_inst_32_1_2_tsni(arr8);
            arr9 = globalThis.Object.freeze([
              left,
              arr7,
              tmp3
            ]);
            return runtime.safeCall(boyer21.Node(arr9))
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_33_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_33_34_tsni, _deforest_Deforest_Arr_2_1_inst_33_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_33_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_33_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_33_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_33_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_35_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_35_34_tsni, _deforest_Deforest_Arr_2_1_inst_35_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_35_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_35_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_35_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_35_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_36_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_36_37_tsni, _deforest_Deforest_Arr_2_1_inst_36_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_36_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_36_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_36_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_36_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_38_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_38_37_tsni, _deforest_Deforest_Arr_2_1_inst_38_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_38_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_38_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_38_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_38_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_39_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_39_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_39_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_39_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_39_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_39_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_39_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_41_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_41_42_tsni, _deforest_Deforest_Arr_2_1_inst_41_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_41_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_41_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_41_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_41_42_tsni(arr1)
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_41_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_41_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_41_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_41_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_41_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_41_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_41_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_41_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_41_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_41_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_41_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_41_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_45_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_45_42_tsni, _deforest_Deforest_Arr_2_1_inst_45_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_45_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_45_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_45_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_45_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_45_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_45_42_tsni(arr1)
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_45_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_45_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_45_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_45_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_45_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_45_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_45_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_45_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_45_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_45_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_45_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_45_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_45_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_45_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_46_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_46_42_tsni, _deforest_Deforest_Arr_2_1_inst_46_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_46_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_46_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_46_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_46_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_46_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_46_42_tsni(arr1)
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_46_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_46_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_46_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_46_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_46_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_46_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_46_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_46_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_46_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_46_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_46_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_46_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_46_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_46_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_scrut_arm_Deforest_Arr_2_inst_47_48_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_47_48_tsni, _deforest_Deforest_Arr_2_1_inst_47_48_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_47_48_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_47_48_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_47_48_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_term_x_y_arm_Deforest_Arr_2_inst_49_50_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_50_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_49_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_49_50_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_49_50_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_50_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_49_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_49_50_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_49_50_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_50_42_tsni, _deforest_Deforest_Arr_2_1_inst_49_50_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_50_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_50_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_49_50_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_49_50_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_49_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_49_50_42_tsni(arr1)
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
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_16_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_17_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_18_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_19_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_20_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_21_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_28_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_22_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_28_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_49_51_28_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_28_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_28_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_28_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_28_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_49_51_28_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_17_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_49_51_28_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_18_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_49_51_28_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_49_51_28_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_20_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_49_51_28_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_21_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_49_51_28_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_49_51_28_22_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_49_51_28_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_8_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_9_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_10_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_11_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_12_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_13_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_27_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_14_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_27_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_49_51_27_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_27_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_27_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_27_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_27_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_49_51_27_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_49_51_27_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_49_51_27_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_49_51_27_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_49_51_27_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_49_51_27_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_49_51_27_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_49_51_27_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_16_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_17_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_18_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_19_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_20_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_21_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_26_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_22_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_26_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_49_51_26_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_26_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_26_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_26_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_26_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_49_51_26_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_17_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_49_51_26_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_18_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_49_51_26_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_49_51_26_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_20_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_49_51_26_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_21_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_49_51_26_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_49_51_26_22_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_49_51_26_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_8_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_9_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_10_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_11_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_12_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_13_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_25_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_14_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_25_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_49_51_25_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_25_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_25_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_25_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_25_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_49_51_25_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_49_51_25_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_49_51_25_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_49_51_25_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_49_51_25_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_49_51_25_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_49_51_25_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_49_51_25_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_8_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_9_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_10_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_11_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_12_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_13_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_49_51_24_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_14_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_49_51_24_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_49_51_24_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_49_51_24_tsni, _deforest_Deforest_Arr_2_1_inst_49_51_24_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_49_51_24_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_49_51_24_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_49_51_24_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_49_51_24_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_49_51_24_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_49_51_24_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_49_51_24_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_49_51_24_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_49_51_24_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_49_51_24_14_tsni(arr6)
  }
});
match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_49_51_tsni, _deforest_Deforest_Arr_3_1_inst_49_51_tsni, _deforest_Deforest_Arr_3_2_inst_49_51_tsni) {
  let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x, y, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x1, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22, _deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23;
  first0 = _deforest_Deforest_Arr_3_0_inst_49_51_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_49_51_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_49_51_tsni;
  f = first0;
  truelst = first1;
  falselst = first2;
  if (f instanceof boyer2.Nill.class) {
    return false
  } else if (f instanceof boyer2.Atom.class) {
    param0 = f.a;
    x1 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x1));
    _deforest_Deforest_Arr_2_04 = tmp;
    _deforest_Deforest_Arr_2_14 = truelst;
    arr = () => {
      return match_term_l_arm_Deforest_Arr_2_inst_49_51_24_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
    };
    return truep_inst_49_51_24_tsni(arr)
  } else if (f instanceof boyer2.Conss.class) {
    param0 = f.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      arr1 = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr1));
      _deforest_Deforest_Arr_2_03 = tmp1;
      _deforest_Deforest_Arr_2_13 = truelst;
      arr2 = () => {
        return match_term_l_arm_Deforest_Arr_2_inst_49_51_25_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
      };
      scrut5 = truep_inst_49_51_25_tsni(arr2);
      if (scrut5 === true) {
        return true
      } else {
        arr3 = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        _deforest_Deforest_Arr_2_02 = tmp2;
        _deforest_Deforest_Arr_2_12 = falselst;
        arr4 = () => {
          return match_term_l_arm_Deforest_Arr_2_inst_49_51_26_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        scrut4 = falsep_inst_49_51_26_tsni(arr4);
        if (scrut4 === true) {
          return false
        } else {
          if (x instanceof boyer2.Atom.class) {
            param01 = x.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "i") {
                if (param1 instanceof NofibPrelude.Cons.class) {
                  param03 = param1.head;
                  param11 = param1.tail;
                  if (param03 === "f") {
                    if (param11 instanceof NofibPrelude.Nil.class) {
                      tmp3 = boyer2.car(y);
                      _deforest_Deforest_Arr_2_01 = tmp3;
                      _deforest_Deforest_Arr_2_11 = truelst;
                      arr5 = () => {
                        return match_term_l_arm_Deforest_Arr_2_inst_49_51_27_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
                      };
                      scrut3 = truep_inst_49_51_27_tsni(arr5);
                      if (scrut3 === true) {
                        tmp4 = boyer2.cadr(y);
                        _deforest_Deforest_Arr_3_0 = tmp4;
                        _deforest_Deforest_Arr_3_1 = truelst;
                        _deforest_Deforest_Arr_3_2 = falselst;
                        arr6 = () => {
                          return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
                        };
                        return tautologyp_inst_49_51_tsni(arr6)
                      } else {
                        tmp5 = boyer2.car(y);
                        _deforest_Deforest_Arr_2_0 = tmp5;
                        _deforest_Deforest_Arr_2_1 = falselst;
                        arr7 = () => {
                          return match_term_l_arm_Deforest_Arr_2_inst_49_51_28_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                        };
                        scrut2 = falsep_inst_49_51_28_tsni(arr7);
                        if (scrut2 === true) {
                          tmp6 = boyer2.caddr(y);
                          _deforest_Deforest_Arr_3_01 = tmp6;
                          _deforest_Deforest_Arr_3_11 = truelst;
                          _deforest_Deforest_Arr_3_21 = falselst;
                          arr8 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
                          };
                          return tautologyp_inst_49_51_tsni(arr8)
                        } else {
                          tmp7 = boyer2.cadr(y);
                          tmp8 = boyer2.car(y);
                          arr9 = globalThis.Object.freeze([
                            tmp8,
                            truelst
                          ]);
                          tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                          _deforest_Deforest_Arr_3_02 = tmp7;
                          _deforest_Deforest_Arr_3_12 = tmp9;
                          _deforest_Deforest_Arr_3_22 = falselst;
                          arr10 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni(_deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
                          };
                          scrut = tautologyp_inst_49_51_tsni(arr10);
                          if (scrut === true) {
                            tmp10 = boyer2.caddr(y);
                            tmp11 = boyer2.car(y);
                            arr11 = globalThis.Object.freeze([
                              tmp11,
                              falselst
                            ]);
                            tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                            _deforest_Deforest_Arr_3_03 = tmp10;
                            _deforest_Deforest_Arr_3_13 = truelst;
                            _deforest_Deforest_Arr_3_23 = tmp12;
                            arr12 = () => {
                              return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni(_deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23)
                            };
                            scrut1 = tautologyp_inst_49_51_tsni(arr12);
                            if (scrut1 === true) {
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_Deforest_Arr_2_inst_52_53_48_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_52_53_48_tsni, _deforest_Deforest_Arr_2_1_inst_52_53_48_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_52_53_48_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_52_53_48_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_52_53_48_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_term_x_y_arm_Deforest_Arr_2_inst_52_54_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_52_54_34_tsni, _deforest_Deforest_Arr_2_1_inst_52_54_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_52_54_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_52_54_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_52_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_52_54_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_55_56_54_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_56_54_34_tsni, _deforest_Deforest_Arr_2_1_inst_55_56_54_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_56_54_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_56_54_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_55_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_55_56_54_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_scrut_arm_Deforest_Arr_2_inst_55_56_53_48_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_56_53_48_tsni, _deforest_Deforest_Arr_2_1_inst_55_56_53_48_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_56_53_48_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_56_53_48_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_55_56_53_48_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_14_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_13_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_12_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_11_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_10_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_9_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_8_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_24_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_55_57_51_24_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_24_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_24_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_24_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_24_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_55_57_51_24_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_55_57_51_24_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_55_57_51_24_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_55_57_51_24_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_55_57_51_24_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_55_57_51_24_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_55_57_51_24_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_14_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_13_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_12_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_11_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_10_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_9_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_8_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_25_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_55_57_51_25_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_25_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_25_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_25_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_25_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_55_57_51_25_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_55_57_51_25_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_55_57_51_25_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_55_57_51_25_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_55_57_51_25_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_55_57_51_25_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_55_57_51_25_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_22_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_21_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_20_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_19_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_18_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_17_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_16_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_26_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_55_57_51_26_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_26_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_26_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_26_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_26_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_16_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_55_57_51_26_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_17_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_55_57_51_26_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_18_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_55_57_51_26_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_55_57_51_26_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_20_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_55_57_51_26_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_21_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_55_57_51_26_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_55_57_51_26_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_14_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_13_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_12_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_11_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_10_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_9_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_8_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_27_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_55_57_51_27_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_27_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_27_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_27_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_27_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_55_57_51_27_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_55_57_51_27_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_55_57_51_27_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_55_57_51_27_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_55_57_51_27_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_55_57_51_27_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_55_57_51_27_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_22_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_21_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_20_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_19_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_18_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_17_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_16_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_55_57_51_28_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_55_57_51_28_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_51_28_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_51_28_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_51_28_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_51_28_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_16_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_55_57_51_28_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_17_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_55_57_51_28_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_18_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_55_57_51_28_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_55_57_51_28_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_20_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_55_57_51_28_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_21_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_55_57_51_28_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_55_57_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_55_57_51_28_22_tsni(arr6)
  }
});
match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_55_57_51_tsni, _deforest_Deforest_Arr_3_1_inst_55_57_51_tsni, _deforest_Deforest_Arr_3_2_inst_55_57_51_tsni) {
  let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x, y, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x1, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22, _deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23;
  first0 = _deforest_Deforest_Arr_3_0_inst_55_57_51_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_55_57_51_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_55_57_51_tsni;
  f = first0;
  truelst = first1;
  falselst = first2;
  if (f instanceof boyer2.Nill.class) {
    return false
  } else if (f instanceof boyer2.Atom.class) {
    param0 = f.a;
    x1 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x1));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = truelst;
    arr = () => {
      return match_term_l_arm_Deforest_Arr_2_inst_55_57_51_24_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return truep_inst_55_57_51_24_tsni(arr)
  } else if (f instanceof boyer2.Conss.class) {
    param0 = f.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      arr1 = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr1));
      _deforest_Deforest_Arr_2_01 = tmp1;
      _deforest_Deforest_Arr_2_11 = truelst;
      arr2 = () => {
        return match_term_l_arm_Deforest_Arr_2_inst_55_57_51_25_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      scrut5 = truep_inst_55_57_51_25_tsni(arr2);
      if (scrut5 === true) {
        return true
      } else {
        arr3 = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        _deforest_Deforest_Arr_2_02 = tmp2;
        _deforest_Deforest_Arr_2_12 = falselst;
        arr4 = () => {
          return match_term_l_arm_Deforest_Arr_2_inst_55_57_51_26_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        scrut4 = falsep_inst_55_57_51_26_tsni(arr4);
        if (scrut4 === true) {
          return false
        } else {
          if (x instanceof boyer2.Atom.class) {
            param01 = x.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "i") {
                if (param1 instanceof NofibPrelude.Cons.class) {
                  param03 = param1.head;
                  param11 = param1.tail;
                  if (param03 === "f") {
                    if (param11 instanceof NofibPrelude.Nil.class) {
                      tmp3 = boyer2.car(y);
                      _deforest_Deforest_Arr_2_03 = tmp3;
                      _deforest_Deforest_Arr_2_13 = truelst;
                      arr5 = () => {
                        return match_term_l_arm_Deforest_Arr_2_inst_55_57_51_27_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
                      };
                      scrut3 = truep_inst_55_57_51_27_tsni(arr5);
                      if (scrut3 === true) {
                        tmp4 = boyer2.cadr(y);
                        _deforest_Deforest_Arr_3_03 = tmp4;
                        _deforest_Deforest_Arr_3_13 = truelst;
                        _deforest_Deforest_Arr_3_23 = falselst;
                        arr6 = () => {
                          return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni(_deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23)
                        };
                        return tautologyp_inst_55_57_51_tsni(arr6)
                      } else {
                        tmp5 = boyer2.car(y);
                        _deforest_Deforest_Arr_2_04 = tmp5;
                        _deforest_Deforest_Arr_2_14 = falselst;
                        arr7 = () => {
                          return match_term_l_arm_Deforest_Arr_2_inst_55_57_51_28_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
                        };
                        scrut2 = falsep_inst_55_57_51_28_tsni(arr7);
                        if (scrut2 === true) {
                          tmp6 = boyer2.caddr(y);
                          _deforest_Deforest_Arr_3_02 = tmp6;
                          _deforest_Deforest_Arr_3_12 = truelst;
                          _deforest_Deforest_Arr_3_22 = falselst;
                          arr8 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni(_deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
                          };
                          return tautologyp_inst_55_57_51_tsni(arr8)
                        } else {
                          tmp7 = boyer2.cadr(y);
                          tmp8 = boyer2.car(y);
                          arr9 = globalThis.Object.freeze([
                            tmp8,
                            truelst
                          ]);
                          tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                          _deforest_Deforest_Arr_3_01 = tmp7;
                          _deforest_Deforest_Arr_3_11 = tmp9;
                          _deforest_Deforest_Arr_3_21 = falselst;
                          arr10 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
                          };
                          scrut = tautologyp_inst_55_57_51_tsni(arr10);
                          if (scrut === true) {
                            tmp10 = boyer2.caddr(y);
                            tmp11 = boyer2.car(y);
                            arr11 = globalThis.Object.freeze([
                              tmp11,
                              falselst
                            ]);
                            tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                            _deforest_Deforest_Arr_3_0 = tmp10;
                            _deforest_Deforest_Arr_3_1 = truelst;
                            _deforest_Deforest_Arr_3_2 = tmp12;
                            arr12 = () => {
                              return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
                            };
                            scrut1 = tautologyp_inst_55_57_51_tsni(arr12);
                            if (scrut1 === true) {
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_55_57_50_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_50_42_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_50_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_50_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_50_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_55_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_55_57_50_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_55_57_50_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_55_57_50_42_tsni(arr1)
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_50_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_50_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_50_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_50_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_55_57_50_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_55_57_50_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_55_57_50_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_55_57_50_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_55_57_50_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_55_57_50_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_50_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_50_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_50_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_50_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_58_59_57_50_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_50_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_50_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_50_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_50_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_58_59_57_50_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_58_59_57_50_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_50_42_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_50_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_50_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_50_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_58_59_57_50_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_58_59_57_50_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_58_59_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_58_59_57_50_42_tsni(arr1)
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
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_16_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_17_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_18_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_19_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_20_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_21_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_22_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_28_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_28_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_28_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_28_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_58_59_57_51_28_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_17_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_58_59_57_51_28_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_18_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_58_59_57_51_28_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_58_59_57_51_28_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_20_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_58_59_57_51_28_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_21_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_58_59_57_51_28_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_28_22_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_58_59_57_51_28_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_8_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_9_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_10_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_11_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_12_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_13_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_14_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_27_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_27_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_27_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_27_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_58_59_57_51_27_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_58_59_57_51_27_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_58_59_57_51_27_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_58_59_57_51_27_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_58_59_57_51_27_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_58_59_57_51_27_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_27_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_58_59_57_51_27_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_16_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_17_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_18_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_19_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_20_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_21_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_22_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_26_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_26_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_26_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_26_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_58_59_57_51_26_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_17_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_58_59_57_51_26_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_18_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_58_59_57_51_26_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_58_59_57_51_26_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_20_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_58_59_57_51_26_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_21_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_58_59_57_51_26_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_26_22_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_58_59_57_51_26_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_8_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_9_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_10_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_11_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_12_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_13_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_14_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_25_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_25_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_25_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_25_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_58_59_57_51_25_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_58_59_57_51_25_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_58_59_57_51_25_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_58_59_57_51_25_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_58_59_57_51_25_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_58_59_57_51_25_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_25_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_58_59_57_51_25_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_8_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_9_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_10_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_11_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_12_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_13_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_14_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_58_59_57_51_24_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_24_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_57_51_24_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_57_51_24_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_0 = term;
                _deforest_Deforest_Arr_2_1 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                };
                return lispmember_inst_58_59_57_51_24_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_01 = term;
              _deforest_Deforest_Arr_2_11 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
              };
              return lispmember_inst_58_59_57_51_24_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_02 = term;
            _deforest_Deforest_Arr_2_12 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
            };
            return lispmember_inst_58_59_57_51_24_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_58_59_57_51_24_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_04 = term;
        _deforest_Deforest_Arr_2_14 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
        };
        return lispmember_inst_58_59_57_51_24_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_05 = term;
      _deforest_Deforest_Arr_2_15 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
      };
      return lispmember_inst_58_59_57_51_24_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_06 = term;
    _deforest_Deforest_Arr_2_16 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_58_59_57_51_24_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
    };
    return lispmember_inst_58_59_57_51_24_14_tsni(arr6)
  }
});
match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_58_59_57_51_tsni, _deforest_Deforest_Arr_3_1_inst_58_59_57_51_tsni, _deforest_Deforest_Arr_3_2_inst_58_59_57_51_tsni) {
  let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x, y, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x1, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22, _deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23;
  first0 = _deforest_Deforest_Arr_3_0_inst_58_59_57_51_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_58_59_57_51_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_58_59_57_51_tsni;
  f = first0;
  truelst = first1;
  falselst = first2;
  if (f instanceof boyer2.Nill.class) {
    return false
  } else if (f instanceof boyer2.Atom.class) {
    param0 = f.a;
    x1 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x1));
    _deforest_Deforest_Arr_2_04 = tmp;
    _deforest_Deforest_Arr_2_14 = truelst;
    arr = () => {
      return match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_24_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
    };
    return truep_inst_58_59_57_51_24_tsni(arr)
  } else if (f instanceof boyer2.Conss.class) {
    param0 = f.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      arr1 = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr1));
      _deforest_Deforest_Arr_2_03 = tmp1;
      _deforest_Deforest_Arr_2_13 = truelst;
      arr2 = () => {
        return match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_25_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
      };
      scrut5 = truep_inst_58_59_57_51_25_tsni(arr2);
      if (scrut5 === true) {
        return true
      } else {
        arr3 = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        _deforest_Deforest_Arr_2_02 = tmp2;
        _deforest_Deforest_Arr_2_12 = falselst;
        arr4 = () => {
          return match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_26_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        scrut4 = falsep_inst_58_59_57_51_26_tsni(arr4);
        if (scrut4 === true) {
          return false
        } else {
          if (x instanceof boyer2.Atom.class) {
            param01 = x.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "i") {
                if (param1 instanceof NofibPrelude.Cons.class) {
                  param03 = param1.head;
                  param11 = param1.tail;
                  if (param03 === "f") {
                    if (param11 instanceof NofibPrelude.Nil.class) {
                      tmp3 = boyer2.car(y);
                      _deforest_Deforest_Arr_2_01 = tmp3;
                      _deforest_Deforest_Arr_2_11 = truelst;
                      arr5 = () => {
                        return match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_27_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
                      };
                      scrut3 = truep_inst_58_59_57_51_27_tsni(arr5);
                      if (scrut3 === true) {
                        tmp4 = boyer2.cadr(y);
                        _deforest_Deforest_Arr_3_0 = tmp4;
                        _deforest_Deforest_Arr_3_1 = truelst;
                        _deforest_Deforest_Arr_3_2 = falselst;
                        arr6 = () => {
                          return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
                        };
                        return tautologyp_inst_58_59_57_51_tsni(arr6)
                      } else {
                        tmp5 = boyer2.car(y);
                        _deforest_Deforest_Arr_2_0 = tmp5;
                        _deforest_Deforest_Arr_2_1 = falselst;
                        arr7 = () => {
                          return match_term_l_arm_Deforest_Arr_2_inst_58_59_57_51_28_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                        };
                        scrut2 = falsep_inst_58_59_57_51_28_tsni(arr7);
                        if (scrut2 === true) {
                          tmp6 = boyer2.caddr(y);
                          _deforest_Deforest_Arr_3_01 = tmp6;
                          _deforest_Deforest_Arr_3_11 = truelst;
                          _deforest_Deforest_Arr_3_21 = falselst;
                          arr8 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
                          };
                          return tautologyp_inst_58_59_57_51_tsni(arr8)
                        } else {
                          tmp7 = boyer2.cadr(y);
                          tmp8 = boyer2.car(y);
                          arr9 = globalThis.Object.freeze([
                            tmp8,
                            truelst
                          ]);
                          tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                          _deforest_Deforest_Arr_3_02 = tmp7;
                          _deforest_Deforest_Arr_3_12 = tmp9;
                          _deforest_Deforest_Arr_3_22 = falselst;
                          arr10 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni(_deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
                          };
                          scrut = tautologyp_inst_58_59_57_51_tsni(arr10);
                          if (scrut === true) {
                            tmp10 = boyer2.caddr(y);
                            tmp11 = boyer2.car(y);
                            arr11 = globalThis.Object.freeze([
                              tmp11,
                              falselst
                            ]);
                            tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                            _deforest_Deforest_Arr_3_03 = tmp10;
                            _deforest_Deforest_Arr_3_13 = truelst;
                            _deforest_Deforest_Arr_3_23 = tmp12;
                            arr12 = () => {
                              return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni(_deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23)
                            };
                            scrut1 = tautologyp_inst_58_59_57_51_tsni(arr12);
                            if (scrut1 === true) {
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_scrut_arm_Deforest_Arr_2_inst_58_59_56_53_48_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_56_53_48_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_56_53_48_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_56_53_48_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_56_53_48_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_58_59_56_53_48_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_term_x_y_arm_Deforest_Arr_2_inst_58_59_56_54_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_58_59_56_54_34_tsni, _deforest_Deforest_Arr_2_1_inst_58_59_56_54_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_58_59_56_54_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_58_59_56_54_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_58_59_56_54_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_56_54_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_56_54_34_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_56_54_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_56_54_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_56_54_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_60_61_59_56_54_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_scrut_arm_Deforest_Arr_2_inst_60_61_59_56_53_48_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_56_53_48_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_56_53_48_tsni) {
  let first1, first0, a, b, tmp;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_56_53_48_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_56_53_48_tsni;
  a = first0;
  b = first1;
  tmp = strToToken_inst_60_61_59_56_53_48_tsni(b);
  return NofibPrelude.Cons(a, tmp)
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_14_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_13_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_12_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_11_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_10_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_9_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_8_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_24_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_24_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_24_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_60_61_59_57_51_24_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_60_61_59_57_51_24_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_60_61_59_57_51_24_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_60_61_59_57_51_24_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_60_61_59_57_51_24_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_60_61_59_57_51_24_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_60_61_59_57_51_24_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_14_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_13_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_12_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_11_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_10_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_9_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_8_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_25_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_25_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_25_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_60_61_59_57_51_25_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_60_61_59_57_51_25_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_60_61_59_57_51_25_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_60_61_59_57_51_25_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_60_61_59_57_51_25_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_60_61_59_57_51_25_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_60_61_59_57_51_25_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_22_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_21_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_20_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_19_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_18_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_17_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_16_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_26_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_26_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_26_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_16_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_60_61_59_57_51_26_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_17_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_60_61_59_57_51_26_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_18_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_60_61_59_57_51_26_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_60_61_59_57_51_26_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_20_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_60_61_59_57_51_26_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_21_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_60_61_59_57_51_26_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_60_61_59_57_51_26_22_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_14_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_14_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_14_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_14_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_14_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_14_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_13_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_13_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_13_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_13_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_13_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_13_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_13_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_12_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_12_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_12_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_12_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_12_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_12_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_12_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_11_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_11_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_11_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_11_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_11_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_11_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_11_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_10_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_10_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_10_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_10_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_10_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_10_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_10_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_9_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_9_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_9_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_9_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_9_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_9_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_9_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_8_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_8_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_8_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_8_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_8_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_27_8_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_27_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_27_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "t") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_8_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_60_61_59_57_51_27_8_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_9_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_60_61_59_57_51_27_9_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_10_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_60_61_59_57_51_27_10_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_60_61_59_57_51_27_11_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_12_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_60_61_59_57_51_27_12_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_13_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_60_61_59_57_51_27_13_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_14_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_60_61_59_57_51_27_14_tsni(arr6)
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_22_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_22_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_22_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_22_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_22_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_22_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_21_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_21_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_21_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_21_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_21_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_21_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_21_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_20_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_20_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_20_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_20_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_20_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_20_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_20_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_19_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_19_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_19_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_19_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_19_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_19_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_19_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_18_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_18_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_18_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_18_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_18_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_18_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_18_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_17_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_17_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_17_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_17_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_17_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_17_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_17_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_16_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_16_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_16_tsni) {
  let first1, first0, e, param0, first11, first01, x, xs, scrut, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_16_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_16_tsni;
  e = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      xs = first11;
      scrut = boyer2.lispListEq(e, x);
      if (scrut === true) {
        return true
      } else {
        _deforest_Deforest_Arr_2_0 = e;
        _deforest_Deforest_Arr_2_1 = xs;
        arr = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        return lispmember_inst_60_61_59_57_51_28_16_tsni(arr)
      }
    } else {
      return false
    }
  } else {
    return false
  }
});
match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_tsni) {
  let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_51_28_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_51_28_tsni;
  if (first0 instanceof boyer2.Nill.class) {
    return false
  } else if (first0 instanceof boyer2.Conss.class) {
    param0 = first0.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      if (first01 instanceof boyer2.Atom.class) {
        param01 = first01.a;
        if (param01 instanceof NofibPrelude.Cons.class) {
          param02 = param01.head;
          param1 = param01.tail;
          if (param02 === "f") {
            if (param1 instanceof NofibPrelude.Nil.class) {
              if (first11 instanceof boyer2.Nill.class) {
                return true
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_16_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_60_61_59_57_51_28_16_tsni(arr)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr1 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_17_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_60_61_59_57_51_28_17_tsni(arr1)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr2 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_18_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_60_61_59_57_51_28_18_tsni(arr2)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_03 = term;
          _deforest_Deforest_Arr_2_13 = l;
          arr3 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
          };
          return lispmember_inst_60_61_59_57_51_28_19_tsni(arr3)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_02 = term;
        _deforest_Deforest_Arr_2_12 = l;
        arr4 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_20_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        return lispmember_inst_60_61_59_57_51_28_20_tsni(arr4)
      }
    } else {
      term = first0;
      l = first1;
      _deforest_Deforest_Arr_2_01 = term;
      _deforest_Deforest_Arr_2_11 = l;
      arr5 = () => {
        return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_21_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      return lispmember_inst_60_61_59_57_51_28_21_tsni(arr5)
    }
  } else {
    term = first0;
    l = first1;
    _deforest_Deforest_Arr_2_0 = term;
    _deforest_Deforest_Arr_2_1 = l;
    arr6 = () => {
      return match_e_x_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_22_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return lispmember_inst_60_61_59_57_51_28_22_tsni(arr6)
  }
});
match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni = (undefined, function (_deforest_Deforest_Arr_3_0_inst_60_61_59_57_51_tsni, _deforest_Deforest_Arr_3_1_inst_60_61_59_57_51_tsni, _deforest_Deforest_Arr_3_2_inst_60_61_59_57_51_tsni) {
  let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x, y, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x1, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2, _deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21, _deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22, _deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23;
  first0 = _deforest_Deforest_Arr_3_0_inst_60_61_59_57_51_tsni;
  first1 = _deforest_Deforest_Arr_3_1_inst_60_61_59_57_51_tsni;
  first2 = _deforest_Deforest_Arr_3_2_inst_60_61_59_57_51_tsni;
  f = first0;
  truelst = first1;
  falselst = first2;
  if (f instanceof boyer2.Nill.class) {
    return false
  } else if (f instanceof boyer2.Atom.class) {
    param0 = f.a;
    x1 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x1));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = truelst;
    arr = () => {
      return match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_24_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return truep_inst_60_61_59_57_51_24_tsni(arr)
  } else if (f instanceof boyer2.Conss.class) {
    param0 = f.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      arr1 = globalThis.Object.freeze([
        x,
        y
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr1));
      _deforest_Deforest_Arr_2_01 = tmp1;
      _deforest_Deforest_Arr_2_11 = truelst;
      arr2 = () => {
        return match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_25_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
      };
      scrut5 = truep_inst_60_61_59_57_51_25_tsni(arr2);
      if (scrut5 === true) {
        return true
      } else {
        arr3 = globalThis.Object.freeze([
          x,
          y
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        _deforest_Deforest_Arr_2_02 = tmp2;
        _deforest_Deforest_Arr_2_12 = falselst;
        arr4 = () => {
          return match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_26_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
        };
        scrut4 = falsep_inst_60_61_59_57_51_26_tsni(arr4);
        if (scrut4 === true) {
          return false
        } else {
          if (x instanceof boyer2.Atom.class) {
            param01 = x.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "i") {
                if (param1 instanceof NofibPrelude.Cons.class) {
                  param03 = param1.head;
                  param11 = param1.tail;
                  if (param03 === "f") {
                    if (param11 instanceof NofibPrelude.Nil.class) {
                      tmp3 = boyer2.car(y);
                      _deforest_Deforest_Arr_2_03 = tmp3;
                      _deforest_Deforest_Arr_2_13 = truelst;
                      arr5 = () => {
                        return match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_27_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
                      };
                      scrut3 = truep_inst_60_61_59_57_51_27_tsni(arr5);
                      if (scrut3 === true) {
                        tmp4 = boyer2.cadr(y);
                        _deforest_Deforest_Arr_3_03 = tmp4;
                        _deforest_Deforest_Arr_3_13 = truelst;
                        _deforest_Deforest_Arr_3_23 = falselst;
                        arr6 = () => {
                          return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni(_deforest_Deforest_Arr_3_03, _deforest_Deforest_Arr_3_13, _deforest_Deforest_Arr_3_23)
                        };
                        return tautologyp_inst_60_61_59_57_51_tsni(arr6)
                      } else {
                        tmp5 = boyer2.car(y);
                        _deforest_Deforest_Arr_2_04 = tmp5;
                        _deforest_Deforest_Arr_2_14 = falselst;
                        arr7 = () => {
                          return match_term_l_arm_Deforest_Arr_2_inst_60_61_59_57_51_28_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
                        };
                        scrut2 = falsep_inst_60_61_59_57_51_28_tsni(arr7);
                        if (scrut2 === true) {
                          tmp6 = boyer2.caddr(y);
                          _deforest_Deforest_Arr_3_02 = tmp6;
                          _deforest_Deforest_Arr_3_12 = truelst;
                          _deforest_Deforest_Arr_3_22 = falselst;
                          arr8 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni(_deforest_Deforest_Arr_3_02, _deforest_Deforest_Arr_3_12, _deforest_Deforest_Arr_3_22)
                          };
                          return tautologyp_inst_60_61_59_57_51_tsni(arr8)
                        } else {
                          tmp7 = boyer2.cadr(y);
                          tmp8 = boyer2.car(y);
                          arr9 = globalThis.Object.freeze([
                            tmp8,
                            truelst
                          ]);
                          tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                          _deforest_Deforest_Arr_3_01 = tmp7;
                          _deforest_Deforest_Arr_3_11 = tmp9;
                          _deforest_Deforest_Arr_3_21 = falselst;
                          arr10 = () => {
                            return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni(_deforest_Deforest_Arr_3_01, _deforest_Deforest_Arr_3_11, _deforest_Deforest_Arr_3_21)
                          };
                          scrut = tautologyp_inst_60_61_59_57_51_tsni(arr10);
                          if (scrut === true) {
                            tmp10 = boyer2.caddr(y);
                            tmp11 = boyer2.car(y);
                            arr11 = globalThis.Object.freeze([
                              tmp11,
                              falselst
                            ]);
                            tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                            _deforest_Deforest_Arr_3_0 = tmp10;
                            _deforest_Deforest_Arr_3_1 = truelst;
                            _deforest_Deforest_Arr_3_2 = tmp12;
                            arr12 = () => {
                              return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
                            };
                            scrut1 = tautologyp_inst_60_61_59_57_51_tsni(arr12);
                            if (scrut1 === true) {
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
});
match_t_lut_arm_Deforest_Arr_2_inst_60_61_59_57_50_42_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_42_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_42_tsni) {
  let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_42_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_42_tsni;
  t1 = first0;
  t = first0;
  if (first1 instanceof boyer2.Empty.class) {
    return NofibPrelude.Nil
  } else if (first1 instanceof boyer2.Node.class) {
    param0 = first1.x;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      first2 = runtime.Tuple.get(param0, 2);
      left = first01;
      if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
        first02 = runtime.Tuple.get(first11, 0);
        first12 = runtime.Tuple.get(first11, 1);
        k = first02;
        kl = first12;
        right = first2;
        scrut1 = NofibPrelude.listEq(t, k);
        if (scrut1 === true) {
          return kl
        } else {
          scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
          if (scrut === true) {
            _deforest_Deforest_Arr_2_0 = t;
            _deforest_Deforest_Arr_2_1 = left;
            arr = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_60_61_59_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
            };
            return getLUT_inst_60_61_59_57_50_42_tsni(arr)
          } else {
            _deforest_Deforest_Arr_2_01 = t;
            _deforest_Deforest_Arr_2_11 = right;
            arr1 = () => {
              return match_t_lut_arm_Deforest_Arr_2_inst_60_61_59_57_50_42_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
            };
            return getLUT_inst_60_61_59_57_50_42_tsni(arr1)
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
});
match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_43_40_37_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_43_40_37_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_43_40_37_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_43_40_37_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_43_40_37_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_60_61_59_57_50_43_40_37_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_44_34_tsni = (undefined, function (_deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_44_34_tsni, _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_44_34_tsni) {
  let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  first0 = _deforest_Deforest_Arr_2_0_inst_60_61_59_57_50_44_34_tsni;
  first1 = _deforest_Deforest_Arr_2_1_inst_60_61_59_57_50_44_34_tsni;
  term = first0;
  if (first1 instanceof boyer2.Conss.class) {
    param0 = first1.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first01 = runtime.Tuple.get(param0, 0);
      first11 = runtime.Tuple.get(param0, 1);
      x = first01;
      y = first11;
      if (x instanceof boyer2.Conss.class) {
        param01 = x.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first02 = runtime.Tuple.get(param01, 0);
          first12 = runtime.Tuple.get(param01, 1);
          if (first02 instanceof boyer2.Atom.class) {
            param02 = first02.a;
            key = param02;
            rest = first12;
            tmp = runtime.safeCall(boyer2.Atom(key));
            scrut = boyer2.lispListEq(term, tmp);
            if (scrut === true) {
              return x
            } else {
              _deforest_Deforest_Arr_2_0 = term;
              _deforest_Deforest_Arr_2_1 = y;
              arr = () => {
                return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
              };
              return assoc_inst_60_61_59_57_50_44_34_tsni(arr)
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } else {
    return boyer2.Nill
  }
});
addlemmalst_inst_0_tsni = function addlemmalst_inst_0_tsni(lspls, term) {
  return runtime.safeCall(lspls(term))
};
addlemma_inst_0_1_tsni = function addlemma_inst_0_1_tsni(lspls, term) {
  let param0, first1, first0, x, y, z, scrut, scrut1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  if (lspls instanceof boyer21.Nill.class) {
    return term
  } else if (lspls instanceof boyer21.Atom.class) {
    param0 = lspls.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (lspls instanceof boyer21.Conss.class) {
    param0 = lspls.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      tmp = boyer21.car(y);
      z = tmp;
      tmp1 = boyer21.tv(x);
      tmp2 = NofibPrelude.nofibStringToList("equal");
      scrut = NofibPrelude.listEq(tmp1, tmp2);
      if (scrut === true) {
        tmp3 = boyer21.atom(z);
        scrut1 = ! tmp3;
        if (scrut1 === true) {
          tmp4 = boyer21.car(z);
          tmp5 = boyer21.tv(tmp4);
          arr = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp6 = runtime.safeCall(boyer21.Conss(arr));
          _deforest_Deforest_Arr_3_0 = tmp5;
          _deforest_Deforest_Arr_3_1 = tmp6;
          _deforest_Deforest_Arr_3_2 = term;
          arr1 = () => {
            return match_k_l_lut_arm_Deforest_Arr_3_inst_0_1_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
          };
          return addtoLUT_inst_0_1_2_tsni(arr1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
addtoLUT_inst_0_1_2_tsni = function addtoLUT_inst_0_1_2_tsni(k_l_lut) {
  return runtime.safeCall(k_l_lut())
};
makelemmas_inst_3_tsni = function makelemmas_inst_3_tsni(rules) {
  let param0, param1, h, t, tmp, tmp1, tmp2, _deforest_Cons_head, _deforest_Cons_tail;
  if (rules instanceof NofibPrelude.Nil.class) {
    return (term) => {
      return term
    }
  } else if (rules instanceof NofibPrelude.Cons.class) {
    param0 = rules.head;
    param1 = rules.tail;
    h = param0;
    t = param1;
    tmp = strToToken_inst_3_4_tsni(h);
    tmp1 = boyer21.mkLispList(tmp);
    tmp2 = makelemmas_inst_3_tsni(t);
    _deforest_Cons_head = tmp1;
    _deforest_Cons_tail = tmp2;
    return (term) => {
      let param01, param11, h1, t1, tmp3;
      param01 = _deforest_Cons_head;
      param11 = _deforest_Cons_tail;
      h1 = param01;
      t1 = param11;
      tmp3 = addlemma_inst_0_1_tsni(h1, term);
      return addlemmalst_inst_0_tsni(t1, tmp3)
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
strToToken_inst_3_4_tsni = function strToToken_inst_3_4_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_3_4_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_3_4_5_tsni = function getToken_inst_3_4_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_3_4_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_3_4_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_3_4_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_3_4_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
strToToken_inst_6_tsni = function strToToken_inst_6_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_6_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_6_5_tsni = function getToken_inst_6_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_6_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_6_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_6_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_6_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
lispmember_inst_7_8_tsni = function lispmember_inst_7_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_9_tsni = function lispmember_inst_7_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_10_tsni = function lispmember_inst_7_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_11_tsni = function lispmember_inst_7_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_12_tsni = function lispmember_inst_7_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_13_tsni = function lispmember_inst_7_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_7_14_tsni = function lispmember_inst_7_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_16_tsni = function lispmember_inst_15_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_17_tsni = function lispmember_inst_15_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_18_tsni = function lispmember_inst_15_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_19_tsni = function lispmember_inst_15_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_20_tsni = function lispmember_inst_15_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_21_tsni = function lispmember_inst_15_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_15_22_tsni = function lispmember_inst_15_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_23_24_tsni = function truep_inst_23_24_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_23_24_14_tsni = function lispmember_inst_23_24_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_13_tsni = function lispmember_inst_23_24_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_12_tsni = function lispmember_inst_23_24_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_11_tsni = function lispmember_inst_23_24_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_10_tsni = function lispmember_inst_23_24_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_9_tsni = function lispmember_inst_23_24_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_24_8_tsni = function lispmember_inst_23_24_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_23_25_tsni = function truep_inst_23_25_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_23_25_14_tsni = function lispmember_inst_23_25_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_13_tsni = function lispmember_inst_23_25_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_12_tsni = function lispmember_inst_23_25_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_11_tsni = function lispmember_inst_23_25_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_10_tsni = function lispmember_inst_23_25_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_9_tsni = function lispmember_inst_23_25_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_25_8_tsni = function lispmember_inst_23_25_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_23_26_tsni = function falsep_inst_23_26_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_23_26_22_tsni = function lispmember_inst_23_26_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_21_tsni = function lispmember_inst_23_26_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_20_tsni = function lispmember_inst_23_26_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_19_tsni = function lispmember_inst_23_26_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_18_tsni = function lispmember_inst_23_26_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_17_tsni = function lispmember_inst_23_26_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_26_16_tsni = function lispmember_inst_23_26_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_23_27_tsni = function truep_inst_23_27_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_23_27_14_tsni = function lispmember_inst_23_27_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_13_tsni = function lispmember_inst_23_27_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_12_tsni = function lispmember_inst_23_27_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_11_tsni = function lispmember_inst_23_27_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_10_tsni = function lispmember_inst_23_27_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_9_tsni = function lispmember_inst_23_27_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_27_8_tsni = function lispmember_inst_23_27_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_23_28_tsni = function falsep_inst_23_28_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_23_28_22_tsni = function lispmember_inst_23_28_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_21_tsni = function lispmember_inst_23_28_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_20_tsni = function lispmember_inst_23_28_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_19_tsni = function lispmember_inst_23_28_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_18_tsni = function lispmember_inst_23_28_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_17_tsni = function lispmember_inst_23_28_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_23_28_16_tsni = function lispmember_inst_23_28_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
getToken_inst_29_5_tsni = function getToken_inst_29_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_29_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_29_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_29_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_29_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
strToToken_inst_30_4_tsni = function strToToken_inst_30_4_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_30_4_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_30_4_5_tsni = function getToken_inst_30_4_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_30_4_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_30_4_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_30_4_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_30_4_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
addtoLUT_inst_31_2_tsni = function addtoLUT_inst_31_2_tsni(k_l_lut) {
  return runtime.safeCall(k_l_lut())
};
addlemma_inst_32_1_tsni = function addlemma_inst_32_1_tsni(lspls, term) {
  let param0, first1, first0, x, y, z, scrut, scrut1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  if (lspls instanceof boyer21.Nill.class) {
    return term
  } else if (lspls instanceof boyer21.Atom.class) {
    param0 = lspls.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (lspls instanceof boyer21.Conss.class) {
    param0 = lspls.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y = first1;
      tmp = boyer21.car(y);
      z = tmp;
      tmp1 = boyer21.tv(x);
      tmp2 = NofibPrelude.nofibStringToList("equal");
      scrut = NofibPrelude.listEq(tmp1, tmp2);
      if (scrut === true) {
        tmp3 = boyer21.atom(z);
        scrut1 = ! tmp3;
        if (scrut1 === true) {
          tmp4 = boyer21.car(z);
          tmp5 = boyer21.tv(tmp4);
          arr = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp6 = runtime.safeCall(boyer21.Conss(arr));
          _deforest_Deforest_Arr_3_0 = tmp5;
          _deforest_Deforest_Arr_3_1 = tmp6;
          _deforest_Deforest_Arr_3_2 = term;
          arr1 = () => {
            return match_k_l_lut_arm_Deforest_Arr_3_inst_32_1_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
          };
          return addtoLUT_inst_32_1_2_tsni(arr1)
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
addtoLUT_inst_32_1_2_tsni = function addtoLUT_inst_32_1_2_tsni(k_l_lut) {
  return runtime.safeCall(k_l_lut())
};
applysubst_inst_33_tsni = function applysubst_inst_33_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_33_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_33_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = boyer2.applysubstlst(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_33_34_tsni = function assoc_inst_33_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubstlst_inst_35_tsni = function applysubstlst_inst_35_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = boyer2.applysubst(alist, x);
      tmp1 = applysubstlst_inst_35_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_35_34_tsni = function assoc_inst_35_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
onewayunify1_inst_36_tsni = function onewayunify1_inst_36_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_36_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_36_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return boyer2.onewayunify1lst(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
assoc_inst_36_37_tsni = function assoc_inst_36_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
onewayunify1lst_inst_38_tsni = function onewayunify1lst_inst_38_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = boyer2.onewayunify1(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_38_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_38_37_tsni = function assoc_inst_38_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
onewayunify1_inst_39_40_tsni = function onewayunify1_inst_39_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_39_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_39_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_39_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_39_40_tsni = function onewayunify1lst_inst_39_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_39_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_39_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_39_40_37_tsni = function assoc_inst_39_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
rewrite_inst_41_tsni = function rewrite_inst_41_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = rewriteargs_inst_41_tsni(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_41_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_41_42_tsni(arr1);
      return boyer2.rewritewithlemmas(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_41_tsni = function rewriteargs_inst_41_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = rewrite_inst_41_tsni(x1, term);
      tmp1 = rewriteargs_inst_41_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
getLUT_inst_41_42_tsni = function getLUT_inst_41_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
onewayunify_inst_41_43_tsni = function onewayunify_inst_41_43_tsni(t1, t2) {
  return onewayunify1_inst_41_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_41_43_40_tsni = function onewayunify1_inst_41_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_41_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_41_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_41_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_41_43_40_tsni = function onewayunify1lst_inst_41_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_41_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_41_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_41_43_40_37_tsni = function assoc_inst_41_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubst_inst_41_44_tsni = function applysubst_inst_41_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_41_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_41_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_41_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_41_44_tsni = function applysubstlst_inst_41_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_41_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_41_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_41_44_34_tsni = function assoc_inst_41_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
rewrite_inst_45_tsni = function rewrite_inst_45_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = boyer2.rewriteargs(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_45_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_45_42_tsni(arr1);
      return rewritewithlemmas_inst_45_tsni(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewritewithlemmas_inst_45_tsni = function rewritewithlemmas_inst_45_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_45_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_45_44_tsni(u, tmp1);
        return rewrite_inst_45_tsni(tmp2, term)
      } else {
        return rewritewithlemmas_inst_45_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
getLUT_inst_45_42_tsni = function getLUT_inst_45_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
onewayunify_inst_45_43_tsni = function onewayunify_inst_45_43_tsni(t1, t2) {
  return onewayunify1_inst_45_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_45_43_40_tsni = function onewayunify1_inst_45_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_45_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_45_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_45_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_45_43_40_tsni = function onewayunify1lst_inst_45_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_45_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_45_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_45_43_40_37_tsni = function assoc_inst_45_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubst_inst_45_44_tsni = function applysubst_inst_45_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_45_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_45_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_45_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_45_44_tsni = function applysubstlst_inst_45_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_45_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_45_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_45_44_34_tsni = function assoc_inst_45_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
rewritewithlemmas_inst_46_tsni = function rewritewithlemmas_inst_46_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_46_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_46_44_tsni(u, tmp1);
        return boyer2.rewrite(tmp2, term)
      } else {
        return rewritewithlemmas_inst_46_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_46_tsni = function rewriteargs_inst_46_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = boyer2.rewrite(x1, term);
      tmp1 = rewriteargs_inst_46_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
getLUT_inst_46_42_tsni = function getLUT_inst_46_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
onewayunify_inst_46_43_tsni = function onewayunify_inst_46_43_tsni(t1, t2) {
  return onewayunify1_inst_46_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_46_43_40_tsni = function onewayunify1_inst_46_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_46_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_46_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_46_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_46_43_40_tsni = function onewayunify1lst_inst_46_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_46_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_46_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_46_43_40_37_tsni = function assoc_inst_46_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubst_inst_46_44_tsni = function applysubst_inst_46_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_46_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_46_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_46_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_46_44_tsni = function applysubstlst_inst_46_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_46_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_46_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_46_44_34_tsni = function assoc_inst_46_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
strToToken_inst_47_48_tsni = function strToToken_inst_47_48_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_47_48_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_47_48_5_tsni = function getToken_inst_47_48_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_47_48_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_47_48_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_47_48_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_47_48_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewrite_inst_49_50_tsni = function rewrite_inst_49_50_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = rewriteargs_inst_49_50_tsni(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_49_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_49_50_42_tsni(arr1);
      return rewritewithlemmas_inst_49_50_tsni(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewritewithlemmas_inst_49_50_tsni = function rewritewithlemmas_inst_49_50_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_49_50_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_49_50_44_tsni(u, tmp1);
        return rewrite_inst_49_50_tsni(tmp2, term)
      } else {
        return rewritewithlemmas_inst_49_50_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_49_50_tsni = function rewriteargs_inst_49_50_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = rewrite_inst_49_50_tsni(x1, term);
      tmp1 = rewriteargs_inst_49_50_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubst_inst_49_50_44_tsni = function applysubst_inst_49_50_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_49_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_49_50_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_49_50_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_49_50_44_tsni = function applysubstlst_inst_49_50_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_49_50_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_49_50_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_49_50_44_34_tsni = function assoc_inst_49_50_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
onewayunify_inst_49_50_43_tsni = function onewayunify_inst_49_50_43_tsni(t1, t2) {
  return onewayunify1_inst_49_50_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_49_50_43_40_tsni = function onewayunify1_inst_49_50_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_49_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_49_50_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_49_50_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_49_50_43_40_tsni = function onewayunify1lst_inst_49_50_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_49_50_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_49_50_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_49_50_43_40_37_tsni = function assoc_inst_49_50_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
getLUT_inst_49_50_42_tsni = function getLUT_inst_49_50_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
tautologyp_inst_49_51_tsni = function tautologyp_inst_49_51_tsni(f_truelst_falselst) {
  return runtime.safeCall(f_truelst_falselst())
};
falsep_inst_49_51_28_tsni = function falsep_inst_49_51_28_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_49_51_28_16_tsni = function lispmember_inst_49_51_28_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_17_tsni = function lispmember_inst_49_51_28_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_18_tsni = function lispmember_inst_49_51_28_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_19_tsni = function lispmember_inst_49_51_28_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_20_tsni = function lispmember_inst_49_51_28_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_21_tsni = function lispmember_inst_49_51_28_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_28_22_tsni = function lispmember_inst_49_51_28_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_49_51_27_tsni = function truep_inst_49_51_27_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_49_51_27_8_tsni = function lispmember_inst_49_51_27_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_9_tsni = function lispmember_inst_49_51_27_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_10_tsni = function lispmember_inst_49_51_27_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_11_tsni = function lispmember_inst_49_51_27_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_12_tsni = function lispmember_inst_49_51_27_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_13_tsni = function lispmember_inst_49_51_27_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_27_14_tsni = function lispmember_inst_49_51_27_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_49_51_26_tsni = function falsep_inst_49_51_26_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_49_51_26_16_tsni = function lispmember_inst_49_51_26_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_17_tsni = function lispmember_inst_49_51_26_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_18_tsni = function lispmember_inst_49_51_26_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_19_tsni = function lispmember_inst_49_51_26_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_20_tsni = function lispmember_inst_49_51_26_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_21_tsni = function lispmember_inst_49_51_26_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_26_22_tsni = function lispmember_inst_49_51_26_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_49_51_25_tsni = function truep_inst_49_51_25_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_49_51_25_8_tsni = function lispmember_inst_49_51_25_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_9_tsni = function lispmember_inst_49_51_25_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_10_tsni = function lispmember_inst_49_51_25_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_11_tsni = function lispmember_inst_49_51_25_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_12_tsni = function lispmember_inst_49_51_25_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_13_tsni = function lispmember_inst_49_51_25_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_25_14_tsni = function lispmember_inst_49_51_25_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_49_51_24_tsni = function truep_inst_49_51_24_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_49_51_24_8_tsni = function lispmember_inst_49_51_24_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_9_tsni = function lispmember_inst_49_51_24_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_10_tsni = function lispmember_inst_49_51_24_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_11_tsni = function lispmember_inst_49_51_24_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_12_tsni = function lispmember_inst_49_51_24_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_13_tsni = function lispmember_inst_49_51_24_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_49_51_24_14_tsni = function lispmember_inst_49_51_24_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
subterm_inst_52_53_tsni = function subterm_inst_52_53_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_52_53_48_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_52_53_48_tsni = function strToToken_inst_52_53_48_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_52_53_48_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_52_53_48_5_tsni = function getToken_inst_52_53_48_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_52_53_48_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_52_53_48_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_52_53_48_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_52_53_48_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubst_inst_52_54_tsni = function applysubst_inst_52_54_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_52_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_52_54_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_52_54_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_52_54_tsni = function applysubstlst_inst_52_54_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_52_54_tsni(alist, x);
      tmp1 = applysubstlst_inst_52_54_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_52_54_34_tsni = function assoc_inst_52_54_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
teststatement_inst_55_56_tsni = function teststatement_inst_55_56_tsni(i) {
  let tmp;
  tmp = subterm_inst_55_56_53_tsni(i);
  return applysubst_inst_55_56_54_tsni(tmp, boyer2.statement)
};
applysubst_inst_55_56_54_tsni = function applysubst_inst_55_56_54_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_55_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_55_56_54_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_55_56_54_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_55_56_54_tsni = function applysubstlst_inst_55_56_54_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_55_56_54_tsni(alist, x);
      tmp1 = applysubstlst_inst_55_56_54_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_55_56_54_34_tsni = function assoc_inst_55_56_54_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
subterm_inst_55_56_53_tsni = function subterm_inst_55_56_53_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_55_56_53_48_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_55_56_53_48_tsni = function strToToken_inst_55_56_53_48_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_55_56_53_48_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_55_56_53_48_5_tsni = function getToken_inst_55_56_53_48_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_55_56_53_48_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_55_56_53_48_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_55_56_53_48_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_55_56_53_48_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tautp_inst_55_57_tsni = function tautp_inst_55_57_tsni(term) {
  let tmp, arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  tmp = rewrite_inst_55_57_50_tsni(term, boyer2.lemmas);
  _deforest_Deforest_Arr_3_0 = tmp;
  _deforest_Deforest_Arr_3_1 = boyer2.Nill;
  _deforest_Deforest_Arr_3_2 = boyer2.Nill;
  arr = () => {
    return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_55_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
  };
  return tautologyp_inst_55_57_51_tsni(arr)
};
tautologyp_inst_55_57_51_tsni = function tautologyp_inst_55_57_51_tsni(f_truelst_falselst) {
  return runtime.safeCall(f_truelst_falselst())
};
truep_inst_55_57_51_24_tsni = function truep_inst_55_57_51_24_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_55_57_51_24_14_tsni = function lispmember_inst_55_57_51_24_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_13_tsni = function lispmember_inst_55_57_51_24_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_12_tsni = function lispmember_inst_55_57_51_24_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_11_tsni = function lispmember_inst_55_57_51_24_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_10_tsni = function lispmember_inst_55_57_51_24_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_9_tsni = function lispmember_inst_55_57_51_24_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_24_8_tsni = function lispmember_inst_55_57_51_24_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_55_57_51_25_tsni = function truep_inst_55_57_51_25_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_55_57_51_25_14_tsni = function lispmember_inst_55_57_51_25_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_13_tsni = function lispmember_inst_55_57_51_25_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_12_tsni = function lispmember_inst_55_57_51_25_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_11_tsni = function lispmember_inst_55_57_51_25_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_10_tsni = function lispmember_inst_55_57_51_25_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_9_tsni = function lispmember_inst_55_57_51_25_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_25_8_tsni = function lispmember_inst_55_57_51_25_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_55_57_51_26_tsni = function falsep_inst_55_57_51_26_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_55_57_51_26_22_tsni = function lispmember_inst_55_57_51_26_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_21_tsni = function lispmember_inst_55_57_51_26_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_20_tsni = function lispmember_inst_55_57_51_26_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_19_tsni = function lispmember_inst_55_57_51_26_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_18_tsni = function lispmember_inst_55_57_51_26_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_17_tsni = function lispmember_inst_55_57_51_26_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_26_16_tsni = function lispmember_inst_55_57_51_26_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_55_57_51_27_tsni = function truep_inst_55_57_51_27_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_55_57_51_27_14_tsni = function lispmember_inst_55_57_51_27_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_13_tsni = function lispmember_inst_55_57_51_27_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_12_tsni = function lispmember_inst_55_57_51_27_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_11_tsni = function lispmember_inst_55_57_51_27_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_10_tsni = function lispmember_inst_55_57_51_27_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_9_tsni = function lispmember_inst_55_57_51_27_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_27_8_tsni = function lispmember_inst_55_57_51_27_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_55_57_51_28_tsni = function falsep_inst_55_57_51_28_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_55_57_51_28_22_tsni = function lispmember_inst_55_57_51_28_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_21_tsni = function lispmember_inst_55_57_51_28_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_20_tsni = function lispmember_inst_55_57_51_28_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_19_tsni = function lispmember_inst_55_57_51_28_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_18_tsni = function lispmember_inst_55_57_51_28_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_17_tsni = function lispmember_inst_55_57_51_28_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_55_57_51_28_16_tsni = function lispmember_inst_55_57_51_28_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
rewrite_inst_55_57_50_tsni = function rewrite_inst_55_57_50_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = rewriteargs_inst_55_57_50_tsni(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_55_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_55_57_50_42_tsni(arr1);
      return rewritewithlemmas_inst_55_57_50_tsni(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewritewithlemmas_inst_55_57_50_tsni = function rewritewithlemmas_inst_55_57_50_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_55_57_50_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_55_57_50_44_tsni(u, tmp1);
        return rewrite_inst_55_57_50_tsni(tmp2, term)
      } else {
        return rewritewithlemmas_inst_55_57_50_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_55_57_50_tsni = function rewriteargs_inst_55_57_50_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = rewrite_inst_55_57_50_tsni(x1, term);
      tmp1 = rewriteargs_inst_55_57_50_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
getLUT_inst_55_57_50_42_tsni = function getLUT_inst_55_57_50_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
onewayunify_inst_55_57_50_43_tsni = function onewayunify_inst_55_57_50_43_tsni(t1, t2) {
  return onewayunify1_inst_55_57_50_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_55_57_50_43_40_tsni = function onewayunify1_inst_55_57_50_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_55_57_50_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_55_57_50_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_55_57_50_43_40_tsni = function onewayunify1lst_inst_55_57_50_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_55_57_50_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_55_57_50_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_55_57_50_43_40_37_tsni = function assoc_inst_55_57_50_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubst_inst_55_57_50_44_tsni = function applysubst_inst_55_57_50_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_55_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_55_57_50_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_55_57_50_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_55_57_50_44_tsni = function applysubstlst_inst_55_57_50_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_55_57_50_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_55_57_50_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_55_57_50_44_34_tsni = function assoc_inst_55_57_50_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
testresult_inst_58_59_tsni = function testresult_inst_58_59_tsni(i) {
  let tmp;
  tmp = teststatement_inst_58_59_56_tsni(i);
  return tautp_inst_58_59_57_tsni(tmp)
};
tautp_inst_58_59_57_tsni = function tautp_inst_58_59_57_tsni(term) {
  let tmp, arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  tmp = rewrite_inst_58_59_57_50_tsni(term, boyer2.lemmas);
  _deforest_Deforest_Arr_3_0 = tmp;
  _deforest_Deforest_Arr_3_1 = boyer2.Nill;
  _deforest_Deforest_Arr_3_2 = boyer2.Nill;
  arr = () => {
    return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_58_59_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
  };
  return tautologyp_inst_58_59_57_51_tsni(arr)
};
rewrite_inst_58_59_57_50_tsni = function rewrite_inst_58_59_57_50_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = rewriteargs_inst_58_59_57_50_tsni(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_58_59_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_58_59_57_50_42_tsni(arr1);
      return rewritewithlemmas_inst_58_59_57_50_tsni(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewritewithlemmas_inst_58_59_57_50_tsni = function rewritewithlemmas_inst_58_59_57_50_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_58_59_57_50_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_58_59_57_50_44_tsni(u, tmp1);
        return rewrite_inst_58_59_57_50_tsni(tmp2, term)
      } else {
        return rewritewithlemmas_inst_58_59_57_50_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_58_59_57_50_tsni = function rewriteargs_inst_58_59_57_50_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = rewrite_inst_58_59_57_50_tsni(x1, term);
      tmp1 = rewriteargs_inst_58_59_57_50_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubst_inst_58_59_57_50_44_tsni = function applysubst_inst_58_59_57_50_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_58_59_57_50_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_58_59_57_50_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_58_59_57_50_44_tsni = function applysubstlst_inst_58_59_57_50_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_58_59_57_50_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_58_59_57_50_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_58_59_57_50_44_34_tsni = function assoc_inst_58_59_57_50_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
onewayunify_inst_58_59_57_50_43_tsni = function onewayunify_inst_58_59_57_50_43_tsni(t1, t2) {
  return onewayunify1_inst_58_59_57_50_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_58_59_57_50_43_40_tsni = function onewayunify1_inst_58_59_57_50_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_58_59_57_50_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_58_59_57_50_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_58_59_57_50_43_40_tsni = function onewayunify1lst_inst_58_59_57_50_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_58_59_57_50_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_58_59_57_50_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_58_59_57_50_43_40_37_tsni = function assoc_inst_58_59_57_50_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
getLUT_inst_58_59_57_50_42_tsni = function getLUT_inst_58_59_57_50_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
tautologyp_inst_58_59_57_51_tsni = function tautologyp_inst_58_59_57_51_tsni(f_truelst_falselst) {
  return runtime.safeCall(f_truelst_falselst())
};
falsep_inst_58_59_57_51_28_tsni = function falsep_inst_58_59_57_51_28_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_58_59_57_51_28_16_tsni = function lispmember_inst_58_59_57_51_28_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_17_tsni = function lispmember_inst_58_59_57_51_28_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_18_tsni = function lispmember_inst_58_59_57_51_28_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_19_tsni = function lispmember_inst_58_59_57_51_28_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_20_tsni = function lispmember_inst_58_59_57_51_28_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_21_tsni = function lispmember_inst_58_59_57_51_28_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_28_22_tsni = function lispmember_inst_58_59_57_51_28_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_58_59_57_51_27_tsni = function truep_inst_58_59_57_51_27_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_58_59_57_51_27_8_tsni = function lispmember_inst_58_59_57_51_27_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_9_tsni = function lispmember_inst_58_59_57_51_27_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_10_tsni = function lispmember_inst_58_59_57_51_27_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_11_tsni = function lispmember_inst_58_59_57_51_27_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_12_tsni = function lispmember_inst_58_59_57_51_27_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_13_tsni = function lispmember_inst_58_59_57_51_27_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_27_14_tsni = function lispmember_inst_58_59_57_51_27_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_58_59_57_51_26_tsni = function falsep_inst_58_59_57_51_26_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_58_59_57_51_26_16_tsni = function lispmember_inst_58_59_57_51_26_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_17_tsni = function lispmember_inst_58_59_57_51_26_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_18_tsni = function lispmember_inst_58_59_57_51_26_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_19_tsni = function lispmember_inst_58_59_57_51_26_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_20_tsni = function lispmember_inst_58_59_57_51_26_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_21_tsni = function lispmember_inst_58_59_57_51_26_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_26_22_tsni = function lispmember_inst_58_59_57_51_26_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_58_59_57_51_25_tsni = function truep_inst_58_59_57_51_25_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_58_59_57_51_25_8_tsni = function lispmember_inst_58_59_57_51_25_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_9_tsni = function lispmember_inst_58_59_57_51_25_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_10_tsni = function lispmember_inst_58_59_57_51_25_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_11_tsni = function lispmember_inst_58_59_57_51_25_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_12_tsni = function lispmember_inst_58_59_57_51_25_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_13_tsni = function lispmember_inst_58_59_57_51_25_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_25_14_tsni = function lispmember_inst_58_59_57_51_25_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_58_59_57_51_24_tsni = function truep_inst_58_59_57_51_24_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_58_59_57_51_24_8_tsni = function lispmember_inst_58_59_57_51_24_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_9_tsni = function lispmember_inst_58_59_57_51_24_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_10_tsni = function lispmember_inst_58_59_57_51_24_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_11_tsni = function lispmember_inst_58_59_57_51_24_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_12_tsni = function lispmember_inst_58_59_57_51_24_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_13_tsni = function lispmember_inst_58_59_57_51_24_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_58_59_57_51_24_14_tsni = function lispmember_inst_58_59_57_51_24_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
teststatement_inst_58_59_56_tsni = function teststatement_inst_58_59_56_tsni(i) {
  let tmp;
  tmp = subterm_inst_58_59_56_53_tsni(i);
  return applysubst_inst_58_59_56_54_tsni(tmp, boyer2.statement)
};
subterm_inst_58_59_56_53_tsni = function subterm_inst_58_59_56_53_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_58_59_56_53_48_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_58_59_56_53_48_tsni = function strToToken_inst_58_59_56_53_48_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_58_59_56_53_48_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_58_59_56_53_48_5_tsni = function getToken_inst_58_59_56_53_48_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_58_59_56_53_48_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_58_59_56_53_48_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_58_59_56_53_48_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_58_59_56_53_48_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubst_inst_58_59_56_54_tsni = function applysubst_inst_58_59_56_54_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_58_59_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_58_59_56_54_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_58_59_56_54_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_58_59_56_54_tsni = function applysubstlst_inst_58_59_56_54_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_58_59_56_54_tsni(alist, x);
      tmp1 = applysubstlst_inst_58_59_56_54_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_58_59_56_54_34_tsni = function assoc_inst_58_59_56_54_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
testBoyer2_nofib_inst_60_61_tsni = function testBoyer2_nofib_inst_60_61_tsni(n) {
  let tmp;
  tmp = testresult_inst_60_61_59_tsni(n);
  return boyer2.report(tmp)
};
testresult_inst_60_61_59_tsni = function testresult_inst_60_61_59_tsni(i) {
  let tmp;
  tmp = teststatement_inst_60_61_59_56_tsni(i);
  return tautp_inst_60_61_59_57_tsni(tmp)
};
teststatement_inst_60_61_59_56_tsni = function teststatement_inst_60_61_59_56_tsni(i) {
  let tmp;
  tmp = subterm_inst_60_61_59_56_53_tsni(i);
  return applysubst_inst_60_61_59_56_54_tsni(tmp, boyer2.statement)
};
applysubst_inst_60_61_59_56_54_tsni = function applysubst_inst_60_61_59_56_54_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_56_54_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_60_61_59_56_54_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_60_61_59_56_54_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_60_61_59_56_54_tsni = function applysubstlst_inst_60_61_59_56_54_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_60_61_59_56_54_tsni(alist, x);
      tmp1 = applysubstlst_inst_60_61_59_56_54_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_60_61_59_56_54_34_tsni = function assoc_inst_60_61_59_56_54_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
subterm_inst_60_61_59_56_53_tsni = function subterm_inst_60_61_59_56_53_tsni(i) {
  let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
  tmp = NofibPrelude.stringOfInt(i);
  tmp1 = NofibPrelude.stringConcat("c", tmp);
  c = tmp1;
  tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
  tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
  tmp4 = NofibPrelude.stringConcat(c, tmp3);
  tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
  str = tmp5;
  tmp6 = NofibPrelude.nofibStringToList(str);
  tmp7 = strToToken_inst_60_61_59_56_53_48_tsni(tmp6);
  return boyer2.mkLispList(tmp7)
};
strToToken_inst_60_61_59_56_53_48_tsni = function strToToken_inst_60_61_59_56_53_48_tsni(s) {
  let scrut;
  if (s instanceof NofibPrelude.Nil.class) {
    return NofibPrelude.Nil
  } else {
    scrut = getToken_inst_60_61_59_56_53_48_5_tsni(s);
    return runtime.safeCall(scrut())
  }
};
getToken_inst_60_61_59_56_53_48_5_tsni = function getToken_inst_60_61_59_56_53_48_5_tsni(s) {
  let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12;
  if (s instanceof NofibPrelude.Nil.class) {
    _deforest_Deforest_Arr_2_0 = NofibPrelude.Nil;
    _deforest_Deforest_Arr_2_1 = NofibPrelude.Nil;
    arr = () => {
      return match_scrut_arm_Deforest_Arr_2_inst_60_61_59_56_53_48_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    return arr
  } else if (s instanceof NofibPrelude.Cons.class) {
    param0 = s.head;
    param1 = s.tail;
    h = param0;
    t = param1;
    scrut2 = h === " ";
    if (scrut2 === true) {
      return getToken_inst_60_61_59_56_53_48_5_tsni(t)
    } else {
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda2(h));
      scrut1 = runtime.short_or(tmp, lambda$this);
      if (scrut1 === true) {
        tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
        _deforest_Deforest_Arr_2_01 = tmp1;
        _deforest_Deforest_Arr_2_11 = t;
        arr1 = () => {
          return match_scrut_arm_Deforest_Arr_2_inst_60_61_59_56_53_48_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
        };
        return arr1
      } else {
        scrut = boyer21.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp2 = NofibPrelude.Cons(h, a);
          _deforest_Deforest_Arr_2_02 = tmp2;
          _deforest_Deforest_Arr_2_12 = b;
          arr2 = () => {
            return match_scrut_arm_Deforest_Arr_2_inst_60_61_59_56_53_48_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
          };
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
tautp_inst_60_61_59_57_tsni = function tautp_inst_60_61_59_57_tsni(term) {
  let tmp, arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
  tmp = rewrite_inst_60_61_59_57_50_tsni(term, boyer2.lemmas);
  _deforest_Deforest_Arr_3_0 = tmp;
  _deforest_Deforest_Arr_3_1 = boyer2.Nill;
  _deforest_Deforest_Arr_3_2 = boyer2.Nill;
  arr = () => {
    return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_60_61_59_57_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
  };
  return tautologyp_inst_60_61_59_57_51_tsni(arr)
};
tautologyp_inst_60_61_59_57_51_tsni = function tautologyp_inst_60_61_59_57_51_tsni(f_truelst_falselst) {
  return runtime.safeCall(f_truelst_falselst())
};
truep_inst_60_61_59_57_51_24_tsni = function truep_inst_60_61_59_57_51_24_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_60_61_59_57_51_24_14_tsni = function lispmember_inst_60_61_59_57_51_24_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_13_tsni = function lispmember_inst_60_61_59_57_51_24_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_12_tsni = function lispmember_inst_60_61_59_57_51_24_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_11_tsni = function lispmember_inst_60_61_59_57_51_24_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_10_tsni = function lispmember_inst_60_61_59_57_51_24_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_9_tsni = function lispmember_inst_60_61_59_57_51_24_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_24_8_tsni = function lispmember_inst_60_61_59_57_51_24_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_60_61_59_57_51_25_tsni = function truep_inst_60_61_59_57_51_25_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_60_61_59_57_51_25_14_tsni = function lispmember_inst_60_61_59_57_51_25_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_13_tsni = function lispmember_inst_60_61_59_57_51_25_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_12_tsni = function lispmember_inst_60_61_59_57_51_25_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_11_tsni = function lispmember_inst_60_61_59_57_51_25_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_10_tsni = function lispmember_inst_60_61_59_57_51_25_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_9_tsni = function lispmember_inst_60_61_59_57_51_25_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_25_8_tsni = function lispmember_inst_60_61_59_57_51_25_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_60_61_59_57_51_26_tsni = function falsep_inst_60_61_59_57_51_26_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_60_61_59_57_51_26_22_tsni = function lispmember_inst_60_61_59_57_51_26_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_21_tsni = function lispmember_inst_60_61_59_57_51_26_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_20_tsni = function lispmember_inst_60_61_59_57_51_26_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_19_tsni = function lispmember_inst_60_61_59_57_51_26_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_18_tsni = function lispmember_inst_60_61_59_57_51_26_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_17_tsni = function lispmember_inst_60_61_59_57_51_26_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_26_16_tsni = function lispmember_inst_60_61_59_57_51_26_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
truep_inst_60_61_59_57_51_27_tsni = function truep_inst_60_61_59_57_51_27_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_60_61_59_57_51_27_14_tsni = function lispmember_inst_60_61_59_57_51_27_14_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_13_tsni = function lispmember_inst_60_61_59_57_51_27_13_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_12_tsni = function lispmember_inst_60_61_59_57_51_27_12_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_11_tsni = function lispmember_inst_60_61_59_57_51_27_11_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_10_tsni = function lispmember_inst_60_61_59_57_51_27_10_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_9_tsni = function lispmember_inst_60_61_59_57_51_27_9_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_27_8_tsni = function lispmember_inst_60_61_59_57_51_27_8_tsni(e_x) {
  return runtime.safeCall(e_x())
};
falsep_inst_60_61_59_57_51_28_tsni = function falsep_inst_60_61_59_57_51_28_tsni(term_l) {
  return runtime.safeCall(term_l())
};
lispmember_inst_60_61_59_57_51_28_22_tsni = function lispmember_inst_60_61_59_57_51_28_22_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_21_tsni = function lispmember_inst_60_61_59_57_51_28_21_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_20_tsni = function lispmember_inst_60_61_59_57_51_28_20_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_19_tsni = function lispmember_inst_60_61_59_57_51_28_19_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_18_tsni = function lispmember_inst_60_61_59_57_51_28_18_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_17_tsni = function lispmember_inst_60_61_59_57_51_28_17_tsni(e_x) {
  return runtime.safeCall(e_x())
};
lispmember_inst_60_61_59_57_51_28_16_tsni = function lispmember_inst_60_61_59_57_51_28_16_tsni(e_x) {
  return runtime.safeCall(e_x())
};
rewrite_inst_60_61_59_57_50_tsni = function rewrite_inst_60_61_59_57_50_tsni(x, term) {
  let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x1 = param0;
    return runtime.safeCall(boyer2.Atom(x1))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      l1 = first0;
      l2 = first1;
      tmp = rewriteargs_inst_60_61_59_57_50_tsni(l2, term);
      arr = globalThis.Object.freeze([
        l1,
        tmp
      ]);
      tmp1 = runtime.safeCall(boyer2.Conss(arr));
      tmp2 = boyer2.tv(l1);
      _deforest_Deforest_Arr_2_0 = tmp2;
      _deforest_Deforest_Arr_2_1 = term;
      arr1 = () => {
        return match_t_lut_arm_Deforest_Arr_2_inst_60_61_59_57_50_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      tmp3 = getLUT_inst_60_61_59_57_50_42_tsni(arr1);
      return rewritewithlemmas_inst_60_61_59_57_50_tsni(tmp1, tmp3, term)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewritewithlemmas_inst_60_61_59_57_50_tsni = function rewritewithlemmas_inst_60_61_59_57_50_tsni(t, l, term) {
  let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
  if (l instanceof NofibPrelude.Nil.class) {
    return t
  } else if (l instanceof NofibPrelude.Cons.class) {
    param0 = l.head;
    param1 = l.tail;
    lh = param0;
    lt = param1;
    tmp = boyer2.cadr(lh);
    scrut = onewayunify_inst_60_61_59_57_50_43_tsni(t, tmp);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u = first1;
      if (b === true) {
        tmp1 = boyer2.caddr(lh);
        tmp2 = applysubst_inst_60_61_59_57_50_44_tsni(u, tmp1);
        return rewrite_inst_60_61_59_57_50_tsni(tmp2, term)
      } else {
        return rewritewithlemmas_inst_60_61_59_57_50_tsni(t, lt, term)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
rewriteargs_inst_60_61_59_57_50_tsni = function rewriteargs_inst_60_61_59_57_50_tsni(x, term) {
  let param0, first1, first0, x1, y, tmp, tmp1, arr;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp = rewrite_inst_60_61_59_57_50_tsni(x1, term);
      tmp1 = rewriteargs_inst_60_61_59_57_50_tsni(y, term);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
getLUT_inst_60_61_59_57_50_42_tsni = function getLUT_inst_60_61_59_57_50_42_tsni(t_lut) {
  return runtime.safeCall(t_lut())
};
onewayunify_inst_60_61_59_57_50_43_tsni = function onewayunify_inst_60_61_59_57_50_43_tsni(t1, t2) {
  return onewayunify1_inst_60_61_59_57_50_43_40_tsni(t1, t2, boyer2.Nill)
};
onewayunify1_inst_60_61_59_57_50_43_40_tsni = function onewayunify1_inst_60_61_59_57_50_43_40_tsni(t1, t2, u) {
  let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  scrut2 = boyer2.atom(t2);
  if (scrut2 === true) {
    _deforest_Deforest_Arr_2_0 = t2;
    _deforest_Deforest_Arr_2_1 = u;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_43_40_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut3 = assoc_inst_60_61_59_57_50_43_40_37_tsni(arr);
    if (scrut3 instanceof boyer2.Conss.class) {
      param0 = scrut3.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        y = first1;
        tmp = boyer2.lispListEq(t1, y);
        arr1 = globalThis.Object.freeze([
          tmp,
          u
        ]);
        return arr1
      } else {
        arr2 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr2));
        arr3 = globalThis.Object.freeze([
          tmp1,
          u
        ]);
        tmp2 = runtime.safeCall(boyer2.Conss(arr3));
        arr4 = globalThis.Object.freeze([
          true,
          tmp2
        ]);
        return arr4
      }
    } else {
      arr5 = globalThis.Object.freeze([
        t2,
        t1
      ]);
      tmp3 = runtime.safeCall(boyer2.Conss(arr5));
      arr6 = globalThis.Object.freeze([
        tmp3,
        u
      ]);
      tmp4 = runtime.safeCall(boyer2.Conss(arr6));
      arr7 = globalThis.Object.freeze([
        true,
        tmp4
      ]);
      return arr7
    }
  } else {
    scrut1 = boyer2.atom(t1);
    if (scrut1 === true) {
      arr8 = globalThis.Object.freeze([
        false,
        u
      ]);
      return arr8
    } else {
      tmp5 = boyer2.car(t1);
      tmp6 = boyer2.car(t2);
      scrut = boyer2.lispListEq(tmp5, tmp6);
      if (scrut === true) {
        tmp7 = boyer2.cdr(t1);
        tmp8 = boyer2.cdr(t2);
        return onewayunify1lst_inst_60_61_59_57_50_43_40_tsni(tmp7, tmp8, u)
      } else {
        arr9 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr9
      }
    }
  }
};
onewayunify1lst_inst_60_61_59_57_50_43_40_tsni = function onewayunify1lst_inst_60_61_59_57_50_43_40_tsni(l1, l2, u) {
  let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
  if (l1 instanceof boyer2.Nill.class) {
    arr = globalThis.Object.freeze([
      true,
      u
    ]);
    return arr
  } else {
    tmp = boyer2.car(l1);
    tmp1 = boyer2.car(l2);
    scrut = onewayunify1_inst_60_61_59_57_50_43_40_tsni(tmp, tmp1, u);
    if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
      first0 = runtime.Tuple.get(scrut, 0);
      first1 = runtime.Tuple.get(scrut, 1);
      b = first0;
      u1 = first1;
      if (b === true) {
        tmp2 = boyer2.cdr(l1);
        tmp3 = boyer2.cdr(l2);
        return onewayunify1lst_inst_60_61_59_57_50_43_40_tsni(tmp2, tmp3, u1)
      } else {
        arr1 = globalThis.Object.freeze([
          false,
          u1
        ]);
        return arr1
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  }
};
assoc_inst_60_61_59_57_50_43_40_37_tsni = function assoc_inst_60_61_59_57_50_43_40_37_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
applysubst_inst_60_61_59_57_50_44_tsni = function applysubst_inst_60_61_59_57_50_44_tsni(alist, x) {
  let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
  if (x instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (x instanceof boyer2.Atom.class) {
    param0 = x.a;
    x2 = param0;
    tmp = runtime.safeCall(boyer2.Atom(x2));
    _deforest_Deforest_Arr_2_0 = tmp;
    _deforest_Deforest_Arr_2_1 = alist;
    arr = () => {
      return match_term_x_y_arm_Deforest_Arr_2_inst_60_61_59_57_50_44_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
    };
    scrut = assoc_inst_60_61_59_57_50_44_34_tsni(arr);
    if (scrut instanceof boyer2.Conss.class) {
      param01 = scrut.a;
      if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
        first01 = runtime.Tuple.get(param01, 0);
        first11 = runtime.Tuple.get(param01, 1);
        y1 = first11;
        return y1
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else {
      return runtime.safeCall(boyer2.Atom(x2))
    }
  } else if (x instanceof boyer2.Conss.class) {
    param0 = x.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x1 = first0;
      y = first1;
      tmp1 = applysubstlst_inst_60_61_59_57_50_44_tsni(alist, y);
      arr1 = globalThis.Object.freeze([
        x1,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr1))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
applysubstlst_inst_60_61_59_57_50_44_tsni = function applysubstlst_inst_60_61_59_57_50_44_tsni(alist, y) {
  let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
  if (y instanceof boyer2.Nill.class) {
    return boyer2.Nill
  } else if (y instanceof boyer2.Atom.class) {
    param0 = y.a;
    x1 = param0;
    throw globalThis.Object.freeze(new globalThis.Error("error"))
  } else if (y instanceof boyer2.Conss.class) {
    param0 = y.a;
    if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
      first0 = runtime.Tuple.get(param0, 0);
      first1 = runtime.Tuple.get(param0, 1);
      x = first0;
      y1 = first1;
      tmp = applysubst_inst_60_61_59_57_50_44_tsni(alist, x);
      tmp1 = applysubstlst_inst_60_61_59_57_50_44_tsni(alist, y1);
      arr = globalThis.Object.freeze([
        tmp,
        tmp1
      ]);
      return runtime.safeCall(boyer2.Conss(arr))
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } else {
    throw globalThis.Object.freeze(new globalThis.Error("match error"))
  }
};
assoc_inst_60_61_59_57_50_44_34_tsni = function assoc_inst_60_61_59_57_50_44_34_tsni(term_x_y) {
  return runtime.safeCall(term_x_y())
};
lambda5 = (undefined, function (x, y) {
  return x < y
});
lambda6 = (undefined, function (x, y) {
  return x > y
});
lambda3 = (undefined, function (x, y) {
  return x < y
});
lambda4 = (undefined, function (x, y) {
  return x > y
});
lambda$2 = function lambda$(h) {
  return h === ")"
};
lambda2 = (undefined, function (h) {
  return () => {
    return lambda$2(h)
  }
});
lambda$1 = function lambda$(h) {
  return h === ")"
};
lambda = (undefined, function (h) {
  return () => {
    return lambda$1(h)
  }
});
lambda$ = function lambda$(h) {
  return h === " "
};
lambda1 = (undefined, function (h) {
  return () => {
    return lambda$(h)
  }
});
(class boyer2 {
  static {
    boyer21 = boyer2;
    let tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp46, tmp47, tmp48, tmp49, tmp50, tmp51, tmp52, tmp53, tmp54, tmp55, tmp56, tmp57, tmp58, tmp59, tmp60, tmp61, tmp62, tmp63, tmp64, tmp65, tmp66, tmp67, tmp68, tmp69, tmp70, tmp71, tmp72, tmp73, tmp74, tmp75, tmp76, tmp77, tmp78, tmp79, tmp80, tmp81, tmp82, tmp83, tmp84, tmp85, tmp86, tmp87, tmp88, tmp89, tmp90, tmp91, tmp92, tmp93, tmp94, tmp95, tmp96, tmp97, tmp98, tmp99, tmp100, tmp101, tmp102, tmp103, tmp104, tmp105, tmp106, tmp107, tmp108, tmp109, tmp110, tmp111, tmp112, tmp113, tmp114, tmp115, tmp116, tmp117, tmp118, tmp119, tmp120, tmp121, tmp122, tmp123, tmp124, tmp125, tmp126, tmp127, tmp128, tmp129, tmp130, tmp131, tmp132, tmp133, tmp134, tmp135, tmp136, tmp137, tmp138, tmp139, tmp140, tmp141, tmp142, tmp143, tmp144, tmp145, tmp146, tmp147, tmp148, tmp149, tmp150, tmp151, tmp152, tmp153, tmp154, tmp155, tmp156, tmp157, tmp158, tmp159, tmp160, tmp161, tmp162, tmp163, tmp164, tmp165, tmp166, tmp167, tmp168, tmp169, tmp170, tmp171, tmp172, tmp173, tmp174, tmp175, tmp176, tmp177, tmp178, tmp179, tmp180, tmp181, tmp182, tmp183, tmp184, tmp185, tmp186, tmp187, tmp188, tmp189, tmp190, tmp191, tmp192, tmp193, tmp194, tmp195, tmp196, tmp197, tmp198, tmp199, tmp200, tmp201, tmp202, tmp203, tmp204, tmp205, tmp206, tmp207, tmp208, tmp209, tmp210, tmp211, tmp212, tmp213, tmp214, tmp215, tmp216;
    this.Lisplist = class Lisplist {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "Lisplist"]; 
    };
    const Nill$class = class Nill extends boyer2.Lisplist {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Nill
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Nill"]; 
    };
    this.Nill = globalThis.Object.freeze(new Nill$class);
    this.Atom = function Atom(a) {
      return globalThis.Object.freeze(new Atom.class(a));
    };
    Object.defineProperty(this.Atom, "class", {
      enumerable: true,
      value: class Atom extends boyer2.Lisplist {
        constructor(a) {
          super();
          this.a = a;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Atom", ["a"]]; 
      }
    });
    this.Conss = function Conss(a) {
      return globalThis.Object.freeze(new Conss.class(a));
    };
    Object.defineProperty(this.Conss, "class", {
      enumerable: true,
      value: class Conss extends boyer2.Lisplist {
        constructor(a) {
          super();
          this.a = a;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Conss", ["a"]]; 
      }
    });
    this.LUT = class LUT {
      constructor() {}
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["class", "LUT"]; 
    };
    const Empty$class = class Empty extends boyer2.LUT {
      constructor() {
        super();
        Object.defineProperty(this, "class", {
          value: Empty
        })
      }
      toString() { return runtime.render(this); }
      static [definitionMetadata] = ["object", "Empty"]; 
    };
    this.Empty = globalThis.Object.freeze(new Empty$class);
    this.Node = function Node(x) {
      return globalThis.Object.freeze(new Node.class(x));
    };
    Object.defineProperty(this.Node, "class", {
      enumerable: true,
      value: class Node extends boyer2.LUT {
        constructor(x) {
          super();
          this.x = x;
        }
        toString() { return runtime.render(this); }
        static [definitionMetadata] = ["class", "Node", ["x"]]; 
      }
    });
    tmp = NofibPrelude.nofibStringToList("( implies ( and ( implies x y )( and ( implies y z )( and ( implies z u )( implies u w ) ) ) )( implies x w ) )");
    tmp1 = strToToken_inst_6_tsni(tmp);
    tmp2 = boyer21.mkLispList(tmp1);
    this.statement = tmp2;
    tmp3 = NofibPrelude.nofibStringToList("(equal (compile form)(reverse (codegen (optimize form) (Nill) ) ) )");
    tmp4 = NofibPrelude.nofibStringToList("(equal (eqp x y)(equal (fix x)(fix y) ) )");
    tmp5 = NofibPrelude.nofibStringToList("(equal (greaterp x y)(lessp y x) )");
    tmp6 = NofibPrelude.nofibStringToList("(equal (lesseqp x y)(not (lessp y x) ) )");
    tmp7 = NofibPrelude.nofibStringToList("(equal (greatereqp x y)(not (lessp y x) ) )");
    tmp8 = NofibPrelude.nofibStringToList("(equal (boolean x)(or (equal x (t) )(equal x (f) ) )");
    tmp9 = NofibPrelude.nofibStringToList("(equal (iff x y)(and (implies x y)(implies y x) ) )");
    tmp10 = NofibPrelude.nofibStringToList("(equal (even1 x)(if (zerop x)(t)(odd (1- x) ) ) )");
    tmp11 = NofibPrelude.nofibStringToList("(equal (countps- l pred)(countps-loop l pred (zero) ) )");
    tmp12 = NofibPrelude.nofibStringToList("(equal (fact- i)(fact-loop i 1) )");
    tmp13 = NofibPrelude.nofibStringToList("(equal (reverse- x)(reverse-loop x (Nill) ) )");
    tmp14 = NofibPrelude.nofibStringToList("(equal (divides x y)(zerop (remainder y x) ) )");
    tmp15 = NofibPrelude.nofibStringToList("(equal (assume-true var alist)(Conss (Conss var (t) )alist) )");
    tmp16 = NofibPrelude.nofibStringToList("(equal (assume-false var alist)(Conss (Conss var (f) )alist) )");
    tmp17 = NofibPrelude.nofibStringToList("(equal (tautology-checker x)(tautologyp (normalize x)(Nill) ) )");
    tmp18 = NofibPrelude.nofibStringToList("(equal (falsify x)(falsify1 (normalize x)(Nill) ) )");
    tmp19 = NofibPrelude.nofibStringToList("(equal (prime x)(and (not (zerop x))(not (equal x (add1 (zero) ) ) )(prime1 x (1- x) ) ) )");
    tmp20 = NofibPrelude.nofibStringToList("(equal (and p q)(if p (if q (t) (f) ) (f) ) )");
    tmp21 = NofibPrelude.nofibStringToList("(equal (or p q)(if p (t) (if q (t) (f) ) ) )");
    tmp22 = NofibPrelude.nofibStringToList("(equal (not p)(if p (f) (t) ) )");
    tmp23 = NofibPrelude.nofibStringToList("(equal (implies p q)(if p (if q (t) (f) ) (t) ) )");
    tmp24 = NofibPrelude.nofibStringToList("(equal (fix x)(if (numberp x) x (zero) ) )");
    tmp25 = NofibPrelude.nofibStringToList("(equal (if (if a b c) d e)(if a (if b d e) (if c d e) ) )");
    tmp26 = NofibPrelude.nofibStringToList("(equal (zerop x)(or (equal x (zero) )(not (numberp x) ) ) )");
    tmp27 = NofibPrelude.nofibStringToList("(equal (plus (plus x y) z )(plus x (plus y z) ) )");
    tmp28 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (zero ) )(and (zerop a) (zerop b) ) )");
    tmp29 = NofibPrelude.nofibStringToList("(equal (difference x x)(zero) )");
    tmp30 = NofibPrelude.nofibStringToList("(equal (equal (plus a b) (plus a c) )(equal (fix b) (fix c) ) )");
    tmp31 = NofibPrelude.nofibStringToList("(equal (equal (zero) (difference x y) )(not (lessp y x) ) )");
    tmp32 = NofibPrelude.nofibStringToList("(equal (equal x (difference x y) )(and (numberp x)(or (equal x (zero) )(zerop y) ) ) )");
    tmp33 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (append x y) ) a)(plus (meaning (plus-tree x) a)(meaning (plus-tree y) a) ) )");
    tmp34 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (plus-fringe x) ) a)(fix (meaning x a) ) )");
    tmp35 = NofibPrelude.nofibStringToList("(equal (append (append x y) z)(append x (append y z) ) )");
    tmp36 = NofibPrelude.nofibStringToList("(equal (reverse (append a b) )(append (reverse b) (reverse a) ) )");
    tmp37 = NofibPrelude.nofibStringToList("(equal (times x (plus y z) )(plus (times x y)(times x z) ) )");
    tmp38 = NofibPrelude.nofibStringToList("(equal (times (times x y) z)(times x (times y z) ) )");
    tmp39 = NofibPrelude.nofibStringToList("(equal (equal (times x y) (zero) )(or (zerop x)(zerop y) ) )");
    tmp40 = NofibPrelude.nofibStringToList("(equal (exec (append x y)pds envrn)(exec y (exec x pds envrn)envrn) )");
    tmp41 = NofibPrelude.nofibStringToList("(equal (mc-flatten x y)(append (flatten x)y) )");
    tmp42 = NofibPrelude.nofibStringToList("(equal (member x (append a b) )(or (member x a)(member x b) ) )");
    tmp43 = NofibPrelude.nofibStringToList("(equal (member x (reverse y) )(member x y) )");
    tmp44 = NofibPrelude.nofibStringToList("(equal (length (reverse x) )(length x) )");
    tmp45 = NofibPrelude.nofibStringToList("(equal (member a (intersect b c) )(and (member a b)(member a c) ) )");
    tmp46 = NofibPrelude.nofibStringToList("(equal (nth (zero)i)(zero) )");
    tmp47 = NofibPrelude.nofibStringToList("(equal (exp i (plus j k) )(times (exp i j)(exp i k) ) )");
    tmp48 = NofibPrelude.nofibStringToList("(equal (exp i (times j k) )(exp (exp i j)k) )");
    tmp49 = NofibPrelude.nofibStringToList("(equal (reverse-loop x y)(append (reverse x)y) )");
    tmp50 = NofibPrelude.nofibStringToList("(equal (reverse-loop x (Nill) )(reverse x) )");
    tmp51 = NofibPrelude.nofibStringToList("(equal (count-list z (sort-lp x y) )(plus (count-list z x)(count-list z y) ) )");
    tmp52 = NofibPrelude.nofibStringToList("(equal (equal (append a b)(append a c) )(equal b c) )");
    tmp53 = NofibPrelude.nofibStringToList("(equal (plus (remainder x y)(times y (quotient x y) ) )(fix x) )");
    tmp54 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus1 l i base)base)(plus (power-eval l base)i) )");
    tmp55 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus x y i base)base)(plus i (plus (power-eval x base)(power-eval y base) ) ) )");
    tmp56 = NofibPrelude.nofibStringToList("(equal (remainder y 1)(zero) )");
    tmp57 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)y)(not (zerop y) ) )");
    tmp58 = NofibPrelude.nofibStringToList("(equal (remainder x x)(zero) )");
    tmp59 = NofibPrelude.nofibStringToList("(equal (lessp (quotient i j)i)(and (not (zerop i) )(or (zerop j)(not (equal j 1) ) ) ) )");
    tmp60 = NofibPrelude.nofibStringToList("(equal (lessp (remainder x y)x)(and (not (zerop y) )(not (zerop x) )(not (lessp x y) ) ) )");
    tmp61 = NofibPrelude.nofibStringToList("(equal (power-eval (power-rep i base)base)(fix i) )");
    tmp62 = NofibPrelude.nofibStringToList("(equal (power-eval (big-plus (power-rep i base)(power-rep j base)(zero)base)base)(plus i j) )");
    tmp63 = NofibPrelude.nofibStringToList("(equal (gcd x y)(gcd y x) )");
    tmp64 = NofibPrelude.nofibStringToList("(equal (nth (append a b)i)(append (nth a i)(nth b (difference i (length a) ) ) ) )");
    tmp65 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)x)(fix y) )");
    tmp66 = NofibPrelude.nofibStringToList("(equal (difference (plus y x)x)(fix y) )");
    tmp67 = NofibPrelude.nofibStringToList("(equal (difference (plus x y)(plus x z) )(difference y z) )");
    tmp68 = NofibPrelude.nofibStringToList("(equal (times x (difference c w) )(difference (times c x)(times w x) ) )");
    tmp69 = NofibPrelude.nofibStringToList("(equal (remainder (times x z)z)(zero) )");
    tmp70 = NofibPrelude.nofibStringToList("(equal (difference (plus b (plus a c) )a)(plus b c) )");
    tmp71 = NofibPrelude.nofibStringToList("(equal (difference (add1 (plus y z)z)(add1 y) )");
    tmp72 = NofibPrelude.nofibStringToList("(equal (lessp (plus x y)(plus x z ) )(lessp y z) )");
    tmp73 = NofibPrelude.nofibStringToList("(equal (lessp (times x z)(times y z) )(and (not (zerop z) )(lessp x y) ) )");
    tmp74 = NofibPrelude.nofibStringToList("(equal (lessp y (plus x y) )(not (zerop x) ) )");
    tmp75 = NofibPrelude.nofibStringToList("(equal (gcd (times x z)(times y z) )(times z (gcd x y) ) )");
    tmp76 = NofibPrelude.nofibStringToList("(equal (value (normalize x)a)(value x a) )");
    tmp77 = NofibPrelude.nofibStringToList("(equal (equal (flatten x)(Conss y (Nill) ) )(and (nlistp x)(equal x y) ) )");
    tmp78 = NofibPrelude.nofibStringToList("(equal (listp (gopher x) )(listp x) )");
    tmp79 = NofibPrelude.nofibStringToList("(equal (samefringe x y)(equal (flatten x)(flatten y) ) )");
    tmp80 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)(zero) )(and (or (zerop y)(equal y 1) )(equal x (zero) ) ) )");
    tmp81 = NofibPrelude.nofibStringToList("(equal (equal (greatest-factor x y)1)(equal x 1) )");
    tmp82 = NofibPrelude.nofibStringToList("(equal (numberp (greatest-factor x y) )(not (and (or (zerop y)(equal y 1) )(not (numberp x) ) ) ) )");
    tmp83 = NofibPrelude.nofibStringToList("(equal (times-list (append x y) )(times (times-list x)(times-list y) ) )");
    tmp84 = NofibPrelude.nofibStringToList("(equal (prime-list (append x y) )(and (prime-list x)(prime-list y) ) )");
    tmp85 = NofibPrelude.nofibStringToList("(equal (equal z (times w z) )(and (numberp z)(or (equal z (zero) )(equal w 1) ) ) )");
    tmp86 = NofibPrelude.nofibStringToList("(equal (greatereqpr x y)(not (lessp x y) ) )");
    tmp87 = NofibPrelude.nofibStringToList("(equal (equal x (times x y) )(or (equal x (zero) )(and (numberp x)(equal y 1) ) ) )");
    tmp88 = NofibPrelude.nofibStringToList("(equal (remainder (times y x)y)(zero) )");
    tmp89 = NofibPrelude.nofibStringToList("(equal (equal (times a b)1)(and (not (equal a (zero) ) )(not (equal b (zero) ) )(numberp a)(numberp b)(equal (1- a)(zero) )(equal (1- b)(zero) ) ) )");
    tmp90 = NofibPrelude.nofibStringToList("(equal (lessp (length (delete x l) )(length l) )(member x l) )");
    tmp91 = NofibPrelude.nofibStringToList("(equal (sort2 (delete x l) )(delete x (sort2 l) ) )");
    tmp92 = NofibPrelude.nofibStringToList("(equal (dsort x)(sort2 x) )");
    tmp93 = NofibPrelude.nofibStringToList("(equal (length(Conss x1(Conss x2(Conss x3(Conss x4(Conss x5(Conss x6 x7) ) ) ) ) ) )(plus 6 (length x7) ) )");
    tmp94 = NofibPrelude.nofibStringToList("(equal (difference (add1 (add1 x) )2)(fix x) )");
    tmp95 = NofibPrelude.nofibStringToList("(equal (quotient (plus x (plus x y) )2)(plus x (quotient y 2) ) )");
    tmp96 = NofibPrelude.nofibStringToList("(equal (sigma (zero)i)(quotient (times i (add1 i) )2) )");
    tmp97 = NofibPrelude.nofibStringToList("(equal (plus x (add1 y) )(if (numberp y)(add1 (plus x y) )(add1 x) ) )");
    tmp98 = NofibPrelude.nofibStringToList("(equal (equal (difference x y)(difference z y) )(if (lessp x y)(not (lessp y z) )(if (lessp z y)(not (lessp y x) )(equal (fix x)(fix z) ) ) ) )");
    tmp99 = NofibPrelude.nofibStringToList("(equal (meaning (plus-tree (delete x y) )a)(if (member x y)(difference (meaning (plus-tree y)a)(meaning x a) )(meaning (plus-tree y)a) ) )");
    tmp100 = NofibPrelude.nofibStringToList("(equal (times x (add1 y) )(if (numberp y)(plus x (times x y) )(fix x) ) )");
    tmp101 = NofibPrelude.nofibStringToList("(equal (nth (Nill)i)(if (zerop i)(Nill)(zero) ) )");
    tmp102 = NofibPrelude.nofibStringToList("(equal (last (append a b) )(if (listp b)(last b)(if (listp a)(Conss (car (last a) )b)b) ) )");
    tmp103 = NofibPrelude.nofibStringToList("(equal (equal (lessp x y)z)(if (lessp x y)(equal t z)(equal f z) ) )");
    tmp104 = NofibPrelude.nofibStringToList("(equal (assignment x (append a b) )(if (assignedp x a)(assignment x a)(assignment x b) ) )");
    tmp105 = NofibPrelude.nofibStringToList("(equal (car (gopher x) )(if (listp x)(car (flatten x) )(zero) ) )");
    tmp106 = NofibPrelude.nofibStringToList("(equal (flatten (cdr (gopher x) ) )(if (listp x)(cdr (flatten x) )(Conss (zero)(Nill) ) ) )");
    tmp107 = NofibPrelude.nofibStringToList("(equal (quotient (times y x)y)(if (zerop y)(zero)(fix x) ) )");
    tmp108 = NofibPrelude.nofibStringToList("(equal (get j (set i val mem) )(if (eqp j i)val(get j mem) ) )");
    tmp109 = NofibPrelude.Cons(tmp108, NofibPrelude.Nil);
    tmp110 = NofibPrelude.Cons(tmp107, tmp109);
    tmp111 = NofibPrelude.Cons(tmp106, tmp110);
    tmp112 = NofibPrelude.Cons(tmp105, tmp111);
    tmp113 = NofibPrelude.Cons(tmp104, tmp112);
    tmp114 = NofibPrelude.Cons(tmp103, tmp113);
    tmp115 = NofibPrelude.Cons(tmp102, tmp114);
    tmp116 = NofibPrelude.Cons(tmp101, tmp115);
    tmp117 = NofibPrelude.Cons(tmp100, tmp116);
    tmp118 = NofibPrelude.Cons(tmp99, tmp117);
    tmp119 = NofibPrelude.Cons(tmp98, tmp118);
    tmp120 = NofibPrelude.Cons(tmp97, tmp119);
    tmp121 = NofibPrelude.Cons(tmp96, tmp120);
    tmp122 = NofibPrelude.Cons(tmp95, tmp121);
    tmp123 = NofibPrelude.Cons(tmp94, tmp122);
    tmp124 = NofibPrelude.Cons(tmp93, tmp123);
    tmp125 = NofibPrelude.Cons(tmp92, tmp124);
    tmp126 = NofibPrelude.Cons(tmp91, tmp125);
    tmp127 = NofibPrelude.Cons(tmp90, tmp126);
    tmp128 = NofibPrelude.Cons(tmp89, tmp127);
    tmp129 = NofibPrelude.Cons(tmp88, tmp128);
    tmp130 = NofibPrelude.Cons(tmp87, tmp129);
    tmp131 = NofibPrelude.Cons(tmp86, tmp130);
    tmp132 = NofibPrelude.Cons(tmp85, tmp131);
    tmp133 = NofibPrelude.Cons(tmp84, tmp132);
    tmp134 = NofibPrelude.Cons(tmp83, tmp133);
    tmp135 = NofibPrelude.Cons(tmp82, tmp134);
    tmp136 = NofibPrelude.Cons(tmp81, tmp135);
    tmp137 = NofibPrelude.Cons(tmp80, tmp136);
    tmp138 = NofibPrelude.Cons(tmp79, tmp137);
    tmp139 = NofibPrelude.Cons(tmp78, tmp138);
    tmp140 = NofibPrelude.Cons(tmp77, tmp139);
    tmp141 = NofibPrelude.Cons(tmp76, tmp140);
    tmp142 = NofibPrelude.Cons(tmp75, tmp141);
    tmp143 = NofibPrelude.Cons(tmp74, tmp142);
    tmp144 = NofibPrelude.Cons(tmp73, tmp143);
    tmp145 = NofibPrelude.Cons(tmp72, tmp144);
    tmp146 = NofibPrelude.Cons(tmp71, tmp145);
    tmp147 = NofibPrelude.Cons(tmp70, tmp146);
    tmp148 = NofibPrelude.Cons(tmp69, tmp147);
    tmp149 = NofibPrelude.Cons(tmp68, tmp148);
    tmp150 = NofibPrelude.Cons(tmp67, tmp149);
    tmp151 = NofibPrelude.Cons(tmp66, tmp150);
    tmp152 = NofibPrelude.Cons(tmp65, tmp151);
    tmp153 = NofibPrelude.Cons(tmp64, tmp152);
    tmp154 = NofibPrelude.Cons(tmp63, tmp153);
    tmp155 = NofibPrelude.Cons(tmp62, tmp154);
    tmp156 = NofibPrelude.Cons(tmp61, tmp155);
    tmp157 = NofibPrelude.Cons(tmp60, tmp156);
    tmp158 = NofibPrelude.Cons(tmp59, tmp157);
    tmp159 = NofibPrelude.Cons(tmp58, tmp158);
    tmp160 = NofibPrelude.Cons(tmp57, tmp159);
    tmp161 = NofibPrelude.Cons(tmp56, tmp160);
    tmp162 = NofibPrelude.Cons(tmp55, tmp161);
    tmp163 = NofibPrelude.Cons(tmp54, tmp162);
    tmp164 = NofibPrelude.Cons(tmp53, tmp163);
    tmp165 = NofibPrelude.Cons(tmp52, tmp164);
    tmp166 = NofibPrelude.Cons(tmp51, tmp165);
    tmp167 = NofibPrelude.Cons(tmp50, tmp166);
    tmp168 = NofibPrelude.Cons(tmp49, tmp167);
    tmp169 = NofibPrelude.Cons(tmp48, tmp168);
    tmp170 = NofibPrelude.Cons(tmp47, tmp169);
    tmp171 = NofibPrelude.Cons(tmp46, tmp170);
    tmp172 = NofibPrelude.Cons(tmp45, tmp171);
    tmp173 = NofibPrelude.Cons(tmp44, tmp172);
    tmp174 = NofibPrelude.Cons(tmp43, tmp173);
    tmp175 = NofibPrelude.Cons(tmp42, tmp174);
    tmp176 = NofibPrelude.Cons(tmp41, tmp175);
    tmp177 = NofibPrelude.Cons(tmp40, tmp176);
    tmp178 = NofibPrelude.Cons(tmp39, tmp177);
    tmp179 = NofibPrelude.Cons(tmp38, tmp178);
    tmp180 = NofibPrelude.Cons(tmp37, tmp179);
    tmp181 = NofibPrelude.Cons(tmp36, tmp180);
    tmp182 = NofibPrelude.Cons(tmp35, tmp181);
    tmp183 = NofibPrelude.Cons(tmp34, tmp182);
    tmp184 = NofibPrelude.Cons(tmp33, tmp183);
    tmp185 = NofibPrelude.Cons(tmp32, tmp184);
    tmp186 = NofibPrelude.Cons(tmp31, tmp185);
    tmp187 = NofibPrelude.Cons(tmp30, tmp186);
    tmp188 = NofibPrelude.Cons(tmp29, tmp187);
    tmp189 = NofibPrelude.Cons(tmp28, tmp188);
    tmp190 = NofibPrelude.Cons(tmp27, tmp189);
    tmp191 = NofibPrelude.Cons(tmp26, tmp190);
    tmp192 = NofibPrelude.Cons(tmp25, tmp191);
    tmp193 = NofibPrelude.Cons(tmp24, tmp192);
    tmp194 = NofibPrelude.Cons(tmp23, tmp193);
    tmp195 = NofibPrelude.Cons(tmp22, tmp194);
    tmp196 = NofibPrelude.Cons(tmp21, tmp195);
    tmp197 = NofibPrelude.Cons(tmp20, tmp196);
    tmp198 = NofibPrelude.Cons(tmp19, tmp197);
    tmp199 = NofibPrelude.Cons(tmp18, tmp198);
    tmp200 = NofibPrelude.Cons(tmp17, tmp199);
    tmp201 = NofibPrelude.Cons(tmp16, tmp200);
    tmp202 = NofibPrelude.Cons(tmp15, tmp201);
    tmp203 = NofibPrelude.Cons(tmp14, tmp202);
    tmp204 = NofibPrelude.Cons(tmp13, tmp203);
    tmp205 = NofibPrelude.Cons(tmp12, tmp204);
    tmp206 = NofibPrelude.Cons(tmp11, tmp205);
    tmp207 = NofibPrelude.Cons(tmp10, tmp206);
    tmp208 = NofibPrelude.Cons(tmp9, tmp207);
    tmp209 = NofibPrelude.Cons(tmp8, tmp208);
    tmp210 = NofibPrelude.Cons(tmp7, tmp209);
    tmp211 = NofibPrelude.Cons(tmp6, tmp210);
    tmp212 = NofibPrelude.Cons(tmp5, tmp211);
    tmp213 = NofibPrelude.Cons(tmp4, tmp212);
    tmp214 = NofibPrelude.Cons(tmp3, tmp213);
    this.rules = tmp214;
    tmp215 = makelemmas_inst_3_tsni(boyer2.rules);
    tmp216 = addlemmalst_inst_0_tsni(tmp215, boyer2.Empty);
    this.lemmas = tmp216;
  }
  static lispListEq(x, y) {
    let param0, first1, first0, a, b, param01, first11, first01, c, d, scrut, a1, b1;
    if (x instanceof boyer2.Nill.class) {
      if (y instanceof boyer2.Nill.class) {
        return true
      } else {
        return false
      }
    } else if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      a1 = param0;
      if (y instanceof boyer2.Atom.class) {
        param01 = y.a;
        b1 = param01;
        return NofibPrelude.listEq(a1, b1)
      } else {
        return false
      }
    } else if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        a = first0;
        b = first1;
        if (y instanceof boyer2.Conss.class) {
          param01 = y.a;
          if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
            first01 = runtime.Tuple.get(param01, 0);
            first11 = runtime.Tuple.get(param01, 1);
            c = first01;
            d = first11;
            scrut = boyer2.lispListEq(a, c);
            if (scrut === true) {
              return boyer2.lispListEq(b, d)
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
  static lispmember(e_x) {
    let first1, first0, e, param0, first11, first01, x, xs, scrut, arr;
    if (runtime.Tuple.isArrayLike(e_x) && e_x.length === 2) {
      first0 = runtime.Tuple.get(e_x, 0);
      first1 = runtime.Tuple.get(e_x, 1);
      e = first0;
      if (first1 instanceof boyer2.Conss.class) {
        param0 = first1.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          x = first01;
          xs = first11;
          scrut = boyer2.lispListEq(e, x);
          if (scrut === true) {
            return true
          } else {
            arr = globalThis.Object.freeze([
              e,
              xs
            ]);
            return boyer2.lispmember(arr)
          }
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static truep(term_l) {
    let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      first0 = runtime.Tuple.get(term_l, 0);
      first1 = runtime.Tuple.get(term_l, 1);
      if (first0 instanceof boyer2.Nill.class) {
        return false
      } else if (first0 instanceof boyer2.Conss.class) {
        param0 = first0.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          if (first01 instanceof boyer2.Atom.class) {
            param01 = first01.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "t") {
                if (param1 instanceof NofibPrelude.Nil.class) {
                  if (first11 instanceof boyer2.Nill.class) {
                    return true
                  } else {
                    term = first0;
                    l = first1;
                    _deforest_Deforest_Arr_2_0 = term;
                    _deforest_Deforest_Arr_2_1 = l;
                    arr = () => {
                      return match_e_x_arm_Deforest_Arr_2_inst_7_8_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                    };
                    return lispmember_inst_7_8_tsni(arr)
                  }
                } else {
                  term = first0;
                  l = first1;
                  _deforest_Deforest_Arr_2_01 = term;
                  _deforest_Deforest_Arr_2_11 = l;
                  arr1 = () => {
                    return match_e_x_arm_Deforest_Arr_2_inst_7_9_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
                  };
                  return lispmember_inst_7_9_tsni(arr1)
                }
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_02 = term;
                _deforest_Deforest_Arr_2_12 = l;
                arr2 = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_7_10_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
                };
                return lispmember_inst_7_10_tsni(arr2)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_03 = term;
              _deforest_Deforest_Arr_2_13 = l;
              arr3 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_7_11_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
              };
              return lispmember_inst_7_11_tsni(arr3)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr4 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_7_12_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_7_12_tsni(arr4)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_05 = term;
          _deforest_Deforest_Arr_2_15 = l;
          arr5 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_7_13_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
          };
          return lispmember_inst_7_13_tsni(arr5)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_06 = term;
        _deforest_Deforest_Arr_2_16 = l;
        arr6 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_7_14_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
        };
        return lispmember_inst_7_14_tsni(arr6)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static falsep(term_l) {
    let first1, first0, term, l, param0, first11, first01, param01, param02, param1, arr, arr1, arr2, arr3, arr4, arr5, arr6, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16;
    if (runtime.Tuple.isArrayLike(term_l) && term_l.length === 2) {
      first0 = runtime.Tuple.get(term_l, 0);
      first1 = runtime.Tuple.get(term_l, 1);
      if (first0 instanceof boyer2.Nill.class) {
        return false
      } else if (first0 instanceof boyer2.Conss.class) {
        param0 = first0.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          if (first01 instanceof boyer2.Atom.class) {
            param01 = first01.a;
            if (param01 instanceof NofibPrelude.Cons.class) {
              param02 = param01.head;
              param1 = param01.tail;
              if (param02 === "f") {
                if (param1 instanceof NofibPrelude.Nil.class) {
                  if (first11 instanceof boyer2.Nill.class) {
                    return true
                  } else {
                    term = first0;
                    l = first1;
                    _deforest_Deforest_Arr_2_0 = term;
                    _deforest_Deforest_Arr_2_1 = l;
                    arr = () => {
                      return match_e_x_arm_Deforest_Arr_2_inst_15_16_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
                    };
                    return lispmember_inst_15_16_tsni(arr)
                  }
                } else {
                  term = first0;
                  l = first1;
                  _deforest_Deforest_Arr_2_01 = term;
                  _deforest_Deforest_Arr_2_11 = l;
                  arr1 = () => {
                    return match_e_x_arm_Deforest_Arr_2_inst_15_17_tsni(_deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11)
                  };
                  return lispmember_inst_15_17_tsni(arr1)
                }
              } else {
                term = first0;
                l = first1;
                _deforest_Deforest_Arr_2_02 = term;
                _deforest_Deforest_Arr_2_12 = l;
                arr2 = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_15_18_tsni(_deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12)
                };
                return lispmember_inst_15_18_tsni(arr2)
              }
            } else {
              term = first0;
              l = first1;
              _deforest_Deforest_Arr_2_03 = term;
              _deforest_Deforest_Arr_2_13 = l;
              arr3 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_15_19_tsni(_deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13)
              };
              return lispmember_inst_15_19_tsni(arr3)
            }
          } else {
            term = first0;
            l = first1;
            _deforest_Deforest_Arr_2_04 = term;
            _deforest_Deforest_Arr_2_14 = l;
            arr4 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_15_20_tsni(_deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14)
            };
            return lispmember_inst_15_20_tsni(arr4)
          }
        } else {
          term = first0;
          l = first1;
          _deforest_Deforest_Arr_2_05 = term;
          _deforest_Deforest_Arr_2_15 = l;
          arr5 = () => {
            return match_e_x_arm_Deforest_Arr_2_inst_15_21_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
          };
          return lispmember_inst_15_21_tsni(arr5)
        }
      } else {
        term = first0;
        l = first1;
        _deforest_Deforest_Arr_2_06 = term;
        _deforest_Deforest_Arr_2_16 = l;
        arr6 = () => {
          return match_e_x_arm_Deforest_Arr_2_inst_15_22_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
        };
        return lispmember_inst_15_22_tsni(arr6)
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static tv(x) {
    let param0, a;
    if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      a = param0;
      return a
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static atom(x) {
    let param0;
    if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      return true
    } else {
      return false
    }
  } 
  static car(x) {
    let param0, first1, first0, a;
    if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        a = first0;
        return a
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static cdr(x) {
    let param0, first1, first0, b;
    if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        b = first1;
        return b
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static cadr(x) {
    let tmp;
    tmp = boyer2.cdr(x);
    return boyer2.car(tmp)
  } 
  static caddr(x) {
    let tmp, tmp1;
    tmp = boyer2.cdr(x);
    tmp1 = boyer2.cdr(tmp);
    return boyer2.car(tmp1)
  } 
  static cadddr(x) {
    let tmp, tmp1, tmp2;
    tmp = boyer2.cdr(x);
    tmp1 = boyer2.cdr(tmp);
    tmp2 = boyer2.cdr(tmp1);
    return boyer2.car(tmp2)
  } 
  static tautologyp(f_truelst_falselst) {
    let first2, first1, first0, f, truelst, falselst, param0, first11, first01, x, y, param01, param02, param1, param03, param11, scrut, scrut1, scrut2, scrut3, scrut4, scrut5, x1, tmp, arr, arr1, tmp1, arr2, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, tmp7, tmp8, arr9, tmp9, arr10, tmp10, tmp11, arr11, tmp12, arr12, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1, _deforest_Deforest_Arr_2_01, _deforest_Deforest_Arr_2_11, _deforest_Deforest_Arr_2_02, _deforest_Deforest_Arr_2_12, _deforest_Deforest_Arr_2_03, _deforest_Deforest_Arr_2_13, _deforest_Deforest_Arr_2_04, _deforest_Deforest_Arr_2_14;
    if (runtime.Tuple.isArrayLike(f_truelst_falselst) && f_truelst_falselst.length === 3) {
      first0 = runtime.Tuple.get(f_truelst_falselst, 0);
      first1 = runtime.Tuple.get(f_truelst_falselst, 1);
      first2 = runtime.Tuple.get(f_truelst_falselst, 2);
      f = first0;
      truelst = first1;
      falselst = first2;
      if (f instanceof boyer2.Nill.class) {
        return false
      } else if (f instanceof boyer2.Atom.class) {
        param0 = f.a;
        x1 = param0;
        tmp = runtime.safeCall(boyer2.Atom(x1));
        _deforest_Deforest_Arr_2_0 = tmp;
        _deforest_Deforest_Arr_2_1 = truelst;
        arr = () => {
          let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
          first02 = _deforest_Deforest_Arr_2_0;
          first12 = _deforest_Deforest_Arr_2_1;
          if (first02 instanceof boyer2.Nill.class) {
            return false
          } else if (first02 instanceof boyer2.Conss.class) {
            param04 = first02.a;
            if (runtime.Tuple.isArrayLike(param04) && param04.length === 2) {
              first03 = runtime.Tuple.get(param04, 0);
              first13 = runtime.Tuple.get(param04, 1);
              if (first03 instanceof boyer2.Atom.class) {
                param05 = first03.a;
                if (param05 instanceof NofibPrelude.Cons.class) {
                  param06 = param05.head;
                  param12 = param05.tail;
                  if (param06 === "t") {
                    if (param12 instanceof NofibPrelude.Nil.class) {
                      if (first13 instanceof boyer2.Nill.class) {
                        return true
                      } else {
                        term = first02;
                        l = first12;
                        _deforest_Deforest_Arr_2_011 = term;
                        _deforest_Deforest_Arr_2_111 = l;
                        arr13 = () => {
                          return match_e_x_arm_Deforest_Arr_2_inst_23_24_8_tsni(_deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
                        };
                        return lispmember_inst_23_24_8_tsni(arr13)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      _deforest_Deforest_Arr_2_010 = term;
                      _deforest_Deforest_Arr_2_110 = l;
                      arr14 = () => {
                        return match_e_x_arm_Deforest_Arr_2_inst_23_24_9_tsni(_deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
                      };
                      return lispmember_inst_23_24_9_tsni(arr14)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    _deforest_Deforest_Arr_2_09 = term;
                    _deforest_Deforest_Arr_2_19 = l;
                    arr15 = () => {
                      return match_e_x_arm_Deforest_Arr_2_inst_23_24_10_tsni(_deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
                    };
                    return lispmember_inst_23_24_10_tsni(arr15)
                  }
                } else {
                  term = first02;
                  l = first12;
                  _deforest_Deforest_Arr_2_08 = term;
                  _deforest_Deforest_Arr_2_18 = l;
                  arr16 = () => {
                    return match_e_x_arm_Deforest_Arr_2_inst_23_24_11_tsni(_deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
                  };
                  return lispmember_inst_23_24_11_tsni(arr16)
                }
              } else {
                term = first02;
                l = first12;
                _deforest_Deforest_Arr_2_07 = term;
                _deforest_Deforest_Arr_2_17 = l;
                arr17 = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_23_24_12_tsni(_deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
                };
                return lispmember_inst_23_24_12_tsni(arr17)
              }
            } else {
              term = first02;
              l = first12;
              _deforest_Deforest_Arr_2_06 = term;
              _deforest_Deforest_Arr_2_16 = l;
              arr18 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_23_24_13_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
              };
              return lispmember_inst_23_24_13_tsni(arr18)
            }
          } else {
            term = first02;
            l = first12;
            _deforest_Deforest_Arr_2_05 = term;
            _deforest_Deforest_Arr_2_15 = l;
            arr19 = () => {
              return match_e_x_arm_Deforest_Arr_2_inst_23_24_14_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
            };
            return lispmember_inst_23_24_14_tsni(arr19)
          }
        };
        return truep_inst_23_24_tsni(arr)
      } else if (f instanceof boyer2.Conss.class) {
        param0 = f.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          x = first01;
          y = first11;
          arr1 = globalThis.Object.freeze([
            x,
            y
          ]);
          tmp1 = runtime.safeCall(boyer2.Conss(arr1));
          _deforest_Deforest_Arr_2_01 = tmp1;
          _deforest_Deforest_Arr_2_11 = truelst;
          arr2 = () => {
            let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
            first02 = _deforest_Deforest_Arr_2_01;
            first12 = _deforest_Deforest_Arr_2_11;
            if (first02 instanceof boyer2.Nill.class) {
              return false
            } else if (first02 instanceof boyer2.Conss.class) {
              param04 = first02.a;
              if (runtime.Tuple.isArrayLike(param04) && param04.length === 2) {
                first03 = runtime.Tuple.get(param04, 0);
                first13 = runtime.Tuple.get(param04, 1);
                if (first03 instanceof boyer2.Atom.class) {
                  param05 = first03.a;
                  if (param05 instanceof NofibPrelude.Cons.class) {
                    param06 = param05.head;
                    param12 = param05.tail;
                    if (param06 === "t") {
                      if (param12 instanceof NofibPrelude.Nil.class) {
                        if (first13 instanceof boyer2.Nill.class) {
                          return true
                        } else {
                          term = first02;
                          l = first12;
                          _deforest_Deforest_Arr_2_011 = term;
                          _deforest_Deforest_Arr_2_111 = l;
                          arr13 = () => {
                            return match_e_x_arm_Deforest_Arr_2_inst_23_25_8_tsni(_deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
                          };
                          return lispmember_inst_23_25_8_tsni(arr13)
                        }
                      } else {
                        term = first02;
                        l = first12;
                        _deforest_Deforest_Arr_2_010 = term;
                        _deforest_Deforest_Arr_2_110 = l;
                        arr14 = () => {
                          return match_e_x_arm_Deforest_Arr_2_inst_23_25_9_tsni(_deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
                        };
                        return lispmember_inst_23_25_9_tsni(arr14)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      _deforest_Deforest_Arr_2_09 = term;
                      _deforest_Deforest_Arr_2_19 = l;
                      arr15 = () => {
                        return match_e_x_arm_Deforest_Arr_2_inst_23_25_10_tsni(_deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
                      };
                      return lispmember_inst_23_25_10_tsni(arr15)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    _deforest_Deforest_Arr_2_08 = term;
                    _deforest_Deforest_Arr_2_18 = l;
                    arr16 = () => {
                      return match_e_x_arm_Deforest_Arr_2_inst_23_25_11_tsni(_deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
                    };
                    return lispmember_inst_23_25_11_tsni(arr16)
                  }
                } else {
                  term = first02;
                  l = first12;
                  _deforest_Deforest_Arr_2_07 = term;
                  _deforest_Deforest_Arr_2_17 = l;
                  arr17 = () => {
                    return match_e_x_arm_Deforest_Arr_2_inst_23_25_12_tsni(_deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
                  };
                  return lispmember_inst_23_25_12_tsni(arr17)
                }
              } else {
                term = first02;
                l = first12;
                _deforest_Deforest_Arr_2_06 = term;
                _deforest_Deforest_Arr_2_16 = l;
                arr18 = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_23_25_13_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                };
                return lispmember_inst_23_25_13_tsni(arr18)
              }
            } else {
              term = first02;
              l = first12;
              _deforest_Deforest_Arr_2_05 = term;
              _deforest_Deforest_Arr_2_15 = l;
              arr19 = () => {
                return match_e_x_arm_Deforest_Arr_2_inst_23_25_14_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
              };
              return lispmember_inst_23_25_14_tsni(arr19)
            }
          };
          scrut5 = truep_inst_23_25_tsni(arr2);
          if (scrut5 === true) {
            return true
          } else {
            arr3 = globalThis.Object.freeze([
              x,
              y
            ]);
            tmp2 = runtime.safeCall(boyer2.Conss(arr3));
            _deforest_Deforest_Arr_2_02 = tmp2;
            _deforest_Deforest_Arr_2_12 = falselst;
            arr4 = () => {
              let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
              first02 = _deforest_Deforest_Arr_2_02;
              first12 = _deforest_Deforest_Arr_2_12;
              if (first02 instanceof boyer2.Nill.class) {
                return false
              } else if (first02 instanceof boyer2.Conss.class) {
                param04 = first02.a;
                if (runtime.Tuple.isArrayLike(param04) && param04.length === 2) {
                  first03 = runtime.Tuple.get(param04, 0);
                  first13 = runtime.Tuple.get(param04, 1);
                  if (first03 instanceof boyer2.Atom.class) {
                    param05 = first03.a;
                    if (param05 instanceof NofibPrelude.Cons.class) {
                      param06 = param05.head;
                      param12 = param05.tail;
                      if (param06 === "f") {
                        if (param12 instanceof NofibPrelude.Nil.class) {
                          if (first13 instanceof boyer2.Nill.class) {
                            return true
                          } else {
                            term = first02;
                            l = first12;
                            _deforest_Deforest_Arr_2_011 = term;
                            _deforest_Deforest_Arr_2_111 = l;
                            arr13 = () => {
                              return match_e_x_arm_Deforest_Arr_2_inst_23_26_16_tsni(_deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
                            };
                            return lispmember_inst_23_26_16_tsni(arr13)
                          }
                        } else {
                          term = first02;
                          l = first12;
                          _deforest_Deforest_Arr_2_010 = term;
                          _deforest_Deforest_Arr_2_110 = l;
                          arr14 = () => {
                            return match_e_x_arm_Deforest_Arr_2_inst_23_26_17_tsni(_deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
                          };
                          return lispmember_inst_23_26_17_tsni(arr14)
                        }
                      } else {
                        term = first02;
                        l = first12;
                        _deforest_Deforest_Arr_2_09 = term;
                        _deforest_Deforest_Arr_2_19 = l;
                        arr15 = () => {
                          return match_e_x_arm_Deforest_Arr_2_inst_23_26_18_tsni(_deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
                        };
                        return lispmember_inst_23_26_18_tsni(arr15)
                      }
                    } else {
                      term = first02;
                      l = first12;
                      _deforest_Deforest_Arr_2_08 = term;
                      _deforest_Deforest_Arr_2_18 = l;
                      arr16 = () => {
                        return match_e_x_arm_Deforest_Arr_2_inst_23_26_19_tsni(_deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
                      };
                      return lispmember_inst_23_26_19_tsni(arr16)
                    }
                  } else {
                    term = first02;
                    l = first12;
                    _deforest_Deforest_Arr_2_07 = term;
                    _deforest_Deforest_Arr_2_17 = l;
                    arr17 = () => {
                      return match_e_x_arm_Deforest_Arr_2_inst_23_26_20_tsni(_deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
                    };
                    return lispmember_inst_23_26_20_tsni(arr17)
                  }
                } else {
                  term = first02;
                  l = first12;
                  _deforest_Deforest_Arr_2_06 = term;
                  _deforest_Deforest_Arr_2_16 = l;
                  arr18 = () => {
                    return match_e_x_arm_Deforest_Arr_2_inst_23_26_21_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                  };
                  return lispmember_inst_23_26_21_tsni(arr18)
                }
              } else {
                term = first02;
                l = first12;
                _deforest_Deforest_Arr_2_05 = term;
                _deforest_Deforest_Arr_2_15 = l;
                arr19 = () => {
                  return match_e_x_arm_Deforest_Arr_2_inst_23_26_22_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
                };
                return lispmember_inst_23_26_22_tsni(arr19)
              }
            };
            scrut4 = falsep_inst_23_26_tsni(arr4);
            if (scrut4 === true) {
              return false
            } else {
              if (x instanceof boyer2.Atom.class) {
                param01 = x.a;
                if (param01 instanceof NofibPrelude.Cons.class) {
                  param02 = param01.head;
                  param1 = param01.tail;
                  if (param02 === "i") {
                    if (param1 instanceof NofibPrelude.Cons.class) {
                      param03 = param1.head;
                      param11 = param1.tail;
                      if (param03 === "f") {
                        if (param11 instanceof NofibPrelude.Nil.class) {
                          tmp3 = boyer2.car(y);
                          _deforest_Deforest_Arr_2_03 = tmp3;
                          _deforest_Deforest_Arr_2_13 = truelst;
                          arr5 = () => {
                            let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
                            first02 = _deforest_Deforest_Arr_2_03;
                            first12 = _deforest_Deforest_Arr_2_13;
                            if (first02 instanceof boyer2.Nill.class) {
                              return false
                            } else if (first02 instanceof boyer2.Conss.class) {
                              param04 = first02.a;
                              if (runtime.Tuple.isArrayLike(param04) && param04.length === 2) {
                                first03 = runtime.Tuple.get(param04, 0);
                                first13 = runtime.Tuple.get(param04, 1);
                                if (first03 instanceof boyer2.Atom.class) {
                                  param05 = first03.a;
                                  if (param05 instanceof NofibPrelude.Cons.class) {
                                    param06 = param05.head;
                                    param12 = param05.tail;
                                    if (param06 === "t") {
                                      if (param12 instanceof NofibPrelude.Nil.class) {
                                        if (first13 instanceof boyer2.Nill.class) {
                                          return true
                                        } else {
                                          term = first02;
                                          l = first12;
                                          _deforest_Deforest_Arr_2_011 = term;
                                          _deforest_Deforest_Arr_2_111 = l;
                                          arr13 = () => {
                                            return match_e_x_arm_Deforest_Arr_2_inst_23_27_8_tsni(_deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
                                          };
                                          return lispmember_inst_23_27_8_tsni(arr13)
                                        }
                                      } else {
                                        term = first02;
                                        l = first12;
                                        _deforest_Deforest_Arr_2_010 = term;
                                        _deforest_Deforest_Arr_2_110 = l;
                                        arr14 = () => {
                                          return match_e_x_arm_Deforest_Arr_2_inst_23_27_9_tsni(_deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
                                        };
                                        return lispmember_inst_23_27_9_tsni(arr14)
                                      }
                                    } else {
                                      term = first02;
                                      l = first12;
                                      _deforest_Deforest_Arr_2_09 = term;
                                      _deforest_Deforest_Arr_2_19 = l;
                                      arr15 = () => {
                                        return match_e_x_arm_Deforest_Arr_2_inst_23_27_10_tsni(_deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
                                      };
                                      return lispmember_inst_23_27_10_tsni(arr15)
                                    }
                                  } else {
                                    term = first02;
                                    l = first12;
                                    _deforest_Deforest_Arr_2_08 = term;
                                    _deforest_Deforest_Arr_2_18 = l;
                                    arr16 = () => {
                                      return match_e_x_arm_Deforest_Arr_2_inst_23_27_11_tsni(_deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
                                    };
                                    return lispmember_inst_23_27_11_tsni(arr16)
                                  }
                                } else {
                                  term = first02;
                                  l = first12;
                                  _deforest_Deforest_Arr_2_07 = term;
                                  _deforest_Deforest_Arr_2_17 = l;
                                  arr17 = () => {
                                    return match_e_x_arm_Deforest_Arr_2_inst_23_27_12_tsni(_deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
                                  };
                                  return lispmember_inst_23_27_12_tsni(arr17)
                                }
                              } else {
                                term = first02;
                                l = first12;
                                _deforest_Deforest_Arr_2_06 = term;
                                _deforest_Deforest_Arr_2_16 = l;
                                arr18 = () => {
                                  return match_e_x_arm_Deforest_Arr_2_inst_23_27_13_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                                };
                                return lispmember_inst_23_27_13_tsni(arr18)
                              }
                            } else {
                              term = first02;
                              l = first12;
                              _deforest_Deforest_Arr_2_05 = term;
                              _deforest_Deforest_Arr_2_15 = l;
                              arr19 = () => {
                                return match_e_x_arm_Deforest_Arr_2_inst_23_27_14_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
                              };
                              return lispmember_inst_23_27_14_tsni(arr19)
                            }
                          };
                          scrut3 = truep_inst_23_27_tsni(arr5);
                          if (scrut3 === true) {
                            tmp4 = boyer2.cadr(y);
                            arr6 = globalThis.Object.freeze([
                              tmp4,
                              truelst,
                              falselst
                            ]);
                            return boyer2.tautologyp(arr6)
                          } else {
                            tmp5 = boyer2.car(y);
                            _deforest_Deforest_Arr_2_04 = tmp5;
                            _deforest_Deforest_Arr_2_14 = falselst;
                            arr7 = () => {
                              let first12, first02, term, l, param04, first13, first03, param05, param06, param12, arr13, arr14, arr15, arr16, arr17, arr18, arr19, _deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15, _deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16, _deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17, _deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18, _deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19, _deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110, _deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111;
                              first02 = _deforest_Deforest_Arr_2_04;
                              first12 = _deforest_Deforest_Arr_2_14;
                              if (first02 instanceof boyer2.Nill.class) {
                                return false
                              } else if (first02 instanceof boyer2.Conss.class) {
                                param04 = first02.a;
                                if (runtime.Tuple.isArrayLike(param04) && param04.length === 2) {
                                  first03 = runtime.Tuple.get(param04, 0);
                                  first13 = runtime.Tuple.get(param04, 1);
                                  if (first03 instanceof boyer2.Atom.class) {
                                    param05 = first03.a;
                                    if (param05 instanceof NofibPrelude.Cons.class) {
                                      param06 = param05.head;
                                      param12 = param05.tail;
                                      if (param06 === "f") {
                                        if (param12 instanceof NofibPrelude.Nil.class) {
                                          if (first13 instanceof boyer2.Nill.class) {
                                            return true
                                          } else {
                                            term = first02;
                                            l = first12;
                                            _deforest_Deforest_Arr_2_011 = term;
                                            _deforest_Deforest_Arr_2_111 = l;
                                            arr13 = () => {
                                              return match_e_x_arm_Deforest_Arr_2_inst_23_28_16_tsni(_deforest_Deforest_Arr_2_011, _deforest_Deforest_Arr_2_111)
                                            };
                                            return lispmember_inst_23_28_16_tsni(arr13)
                                          }
                                        } else {
                                          term = first02;
                                          l = first12;
                                          _deforest_Deforest_Arr_2_010 = term;
                                          _deforest_Deforest_Arr_2_110 = l;
                                          arr14 = () => {
                                            return match_e_x_arm_Deforest_Arr_2_inst_23_28_17_tsni(_deforest_Deforest_Arr_2_010, _deforest_Deforest_Arr_2_110)
                                          };
                                          return lispmember_inst_23_28_17_tsni(arr14)
                                        }
                                      } else {
                                        term = first02;
                                        l = first12;
                                        _deforest_Deforest_Arr_2_09 = term;
                                        _deforest_Deforest_Arr_2_19 = l;
                                        arr15 = () => {
                                          return match_e_x_arm_Deforest_Arr_2_inst_23_28_18_tsni(_deforest_Deforest_Arr_2_09, _deforest_Deforest_Arr_2_19)
                                        };
                                        return lispmember_inst_23_28_18_tsni(arr15)
                                      }
                                    } else {
                                      term = first02;
                                      l = first12;
                                      _deforest_Deforest_Arr_2_08 = term;
                                      _deforest_Deforest_Arr_2_18 = l;
                                      arr16 = () => {
                                        return match_e_x_arm_Deforest_Arr_2_inst_23_28_19_tsni(_deforest_Deforest_Arr_2_08, _deforest_Deforest_Arr_2_18)
                                      };
                                      return lispmember_inst_23_28_19_tsni(arr16)
                                    }
                                  } else {
                                    term = first02;
                                    l = first12;
                                    _deforest_Deforest_Arr_2_07 = term;
                                    _deforest_Deforest_Arr_2_17 = l;
                                    arr17 = () => {
                                      return match_e_x_arm_Deforest_Arr_2_inst_23_28_20_tsni(_deforest_Deforest_Arr_2_07, _deforest_Deforest_Arr_2_17)
                                    };
                                    return lispmember_inst_23_28_20_tsni(arr17)
                                  }
                                } else {
                                  term = first02;
                                  l = first12;
                                  _deforest_Deforest_Arr_2_06 = term;
                                  _deforest_Deforest_Arr_2_16 = l;
                                  arr18 = () => {
                                    return match_e_x_arm_Deforest_Arr_2_inst_23_28_21_tsni(_deforest_Deforest_Arr_2_06, _deforest_Deforest_Arr_2_16)
                                  };
                                  return lispmember_inst_23_28_21_tsni(arr18)
                                }
                              } else {
                                term = first02;
                                l = first12;
                                _deforest_Deforest_Arr_2_05 = term;
                                _deforest_Deforest_Arr_2_15 = l;
                                arr19 = () => {
                                  return match_e_x_arm_Deforest_Arr_2_inst_23_28_22_tsni(_deforest_Deforest_Arr_2_05, _deforest_Deforest_Arr_2_15)
                                };
                                return lispmember_inst_23_28_22_tsni(arr19)
                              }
                            };
                            scrut2 = falsep_inst_23_28_tsni(arr7);
                            if (scrut2 === true) {
                              tmp6 = boyer2.caddr(y);
                              arr8 = globalThis.Object.freeze([
                                tmp6,
                                truelst,
                                falselst
                              ]);
                              return boyer2.tautologyp(arr8)
                            } else {
                              tmp7 = boyer2.cadr(y);
                              tmp8 = boyer2.car(y);
                              arr9 = globalThis.Object.freeze([
                                tmp8,
                                truelst
                              ]);
                              tmp9 = runtime.safeCall(boyer2.Conss(arr9));
                              arr10 = globalThis.Object.freeze([
                                tmp7,
                                tmp9,
                                falselst
                              ]);
                              scrut = boyer2.tautologyp(arr10);
                              if (scrut === true) {
                                tmp10 = boyer2.caddr(y);
                                tmp11 = boyer2.car(y);
                                arr11 = globalThis.Object.freeze([
                                  tmp11,
                                  falselst
                                ]);
                                tmp12 = runtime.safeCall(boyer2.Conss(arr11));
                                arr12 = globalThis.Object.freeze([
                                  tmp10,
                                  truelst,
                                  tmp12
                                ]);
                                scrut1 = boyer2.tautologyp(arr12);
                                if (scrut1 === true) {
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
  static sublist(t) {
    let param0, param1, h, t1, scrut, first1, first0, r, l, param01, param11, t2, t3, scrut1, first11, first01, r1, l1, scrut2, first12, first02, r2, l2, arr, arr1, tmp, arr2, tmp1, arr3, tmp2, arr4, tmp3, arr5, tmp4, arr6, tmp5, arr7, tmp6, arr8, arr9, tmp7, arr10, tmp8, arr11, tmp9, arr12, tmp10, arr13, tmp11, arr14, tmp12, arr15;
    if (t instanceof NofibPrelude.Nil.class) {
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        boyer2.Nill
      ]);
      return arr
    } else if (t instanceof NofibPrelude.Cons.class) {
      param0 = t.head;
      param1 = t.tail;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param11 = param0.tail;
        if (param01 === "(") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t3 = param1;
            scrut1 = boyer2.sublist(t3);
            if (runtime.Tuple.isArrayLike(scrut1) && scrut1.length === 2) {
              first01 = runtime.Tuple.get(scrut1, 0);
              first11 = runtime.Tuple.get(scrut1, 1);
              r1 = first01;
              l1 = first11;
              scrut2 = boyer2.sublist(r1);
              if (runtime.Tuple.isArrayLike(scrut2) && scrut2.length === 2) {
                first02 = runtime.Tuple.get(scrut2, 0);
                first12 = runtime.Tuple.get(scrut2, 1);
                r2 = first02;
                l2 = first12;
                arr1 = globalThis.Object.freeze([
                  l1,
                  l2
                ]);
                tmp = runtime.safeCall(boyer2.Conss(arr1));
                arr2 = globalThis.Object.freeze([
                  r2,
                  tmp
                ]);
                return arr2
              } else {
                h = param0;
                t1 = param1;
                scrut = boyer2.sublist(t1);
                if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                  first0 = runtime.Tuple.get(scrut, 0);
                  first1 = runtime.Tuple.get(scrut, 1);
                  r = first0;
                  l = first1;
                  tmp1 = runtime.safeCall(boyer2.Atom(h));
                  arr3 = globalThis.Object.freeze([
                    tmp1,
                    l
                  ]);
                  tmp2 = runtime.safeCall(boyer2.Conss(arr3));
                  arr4 = globalThis.Object.freeze([
                    r,
                    tmp2
                  ]);
                  return arr4
                } else {
                  throw globalThis.Object.freeze(new globalThis.Error("match error"))
                }
              }
            } else {
              h = param0;
              t1 = param1;
              scrut = boyer2.sublist(t1);
              if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
                first0 = runtime.Tuple.get(scrut, 0);
                first1 = runtime.Tuple.get(scrut, 1);
                r = first0;
                l = first1;
                tmp3 = runtime.safeCall(boyer2.Atom(h));
                arr5 = globalThis.Object.freeze([
                  tmp3,
                  l
                ]);
                tmp4 = runtime.safeCall(boyer2.Conss(arr5));
                arr6 = globalThis.Object.freeze([
                  r,
                  tmp4
                ]);
                return arr6
              } else {
                throw globalThis.Object.freeze(new globalThis.Error("match error"))
              }
            }
          } else {
            h = param0;
            t1 = param1;
            scrut = boyer2.sublist(t1);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              first0 = runtime.Tuple.get(scrut, 0);
              first1 = runtime.Tuple.get(scrut, 1);
              r = first0;
              l = first1;
              tmp5 = runtime.safeCall(boyer2.Atom(h));
              arr7 = globalThis.Object.freeze([
                tmp5,
                l
              ]);
              tmp6 = runtime.safeCall(boyer2.Conss(arr7));
              arr8 = globalThis.Object.freeze([
                r,
                tmp6
              ]);
              return arr8
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          }
        } else if (param01 === ")") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t2 = param1;
            arr9 = globalThis.Object.freeze([
              t2,
              boyer2.Nill
            ]);
            return arr9
          } else {
            h = param0;
            t1 = param1;
            scrut = boyer2.sublist(t1);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              first0 = runtime.Tuple.get(scrut, 0);
              first1 = runtime.Tuple.get(scrut, 1);
              r = first0;
              l = first1;
              tmp7 = runtime.safeCall(boyer2.Atom(h));
              arr10 = globalThis.Object.freeze([
                tmp7,
                l
              ]);
              tmp8 = runtime.safeCall(boyer2.Conss(arr10));
              arr11 = globalThis.Object.freeze([
                r,
                tmp8
              ]);
              return arr11
            } else {
              throw globalThis.Object.freeze(new globalThis.Error("match error"))
            }
          }
        } else {
          h = param0;
          t1 = param1;
          scrut = boyer2.sublist(t1);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            first0 = runtime.Tuple.get(scrut, 0);
            first1 = runtime.Tuple.get(scrut, 1);
            r = first0;
            l = first1;
            tmp9 = runtime.safeCall(boyer2.Atom(h));
            arr12 = globalThis.Object.freeze([
              tmp9,
              l
            ]);
            tmp10 = runtime.safeCall(boyer2.Conss(arr12));
            arr13 = globalThis.Object.freeze([
              r,
              tmp10
            ]);
            return arr13
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      } else {
        h = param0;
        t1 = param1;
        scrut = boyer2.sublist(t1);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          r = first0;
          l = first1;
          tmp11 = runtime.safeCall(boyer2.Atom(h));
          arr14 = globalThis.Object.freeze([
            tmp11,
            l
          ]);
          tmp12 = runtime.safeCall(boyer2.Conss(arr14));
          arr15 = globalThis.Object.freeze([
            r,
            tmp12
          ]);
          return arr15
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static mkLispList(ls) {
    let param0, param1, param01, param11, t, scrut, first1, first0, r, l;
    if (ls instanceof NofibPrelude.Cons.class) {
      param0 = ls.head;
      param1 = ls.tail;
      if (param0 instanceof NofibPrelude.Cons.class) {
        param01 = param0.head;
        param11 = param0.tail;
        if (param01 === "(") {
          if (param11 instanceof NofibPrelude.Nil.class) {
            t = param1;
            scrut = boyer2.sublist(t);
            if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
              first0 = runtime.Tuple.get(scrut, 0);
              first1 = runtime.Tuple.get(scrut, 1);
              r = first0;
              l = first1;
              if (r instanceof NofibPrelude.Nil.class) {
                return l
              } else {
                return boyer2.Nill
              }
            } else {
              return boyer2.Nill
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      return boyer2.Nill
    }
  } 
  static restOfToken(s) {
    let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, arr, tmp, tmp1, tmp2, arr1, tmp3, arr2, lambda$this, lambda$this1;
    if (s instanceof NofibPrelude.Nil.class) {
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ]);
      return arr
    } else if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      h = param0;
      t = param1;
      tmp = h === "(";
      lambda$this = runtime.safeCall(lambda(h));
      tmp1 = runtime.short_or(tmp, lambda$this);
      lambda$this1 = runtime.safeCall(lambda1(h));
      scrut1 = runtime.short_or(tmp1, lambda$this1);
      if (scrut1 === true) {
        tmp2 = NofibPrelude.Cons(h, t);
        arr1 = globalThis.Object.freeze([
          NofibPrelude.Nil,
          tmp2
        ]);
        return arr1
      } else {
        scrut = boyer2.restOfToken(t);
        if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
          first0 = runtime.Tuple.get(scrut, 0);
          first1 = runtime.Tuple.get(scrut, 1);
          a = first0;
          b = first1;
          tmp3 = NofibPrelude.Cons(h, a);
          arr2 = globalThis.Object.freeze([
            tmp3,
            b
          ]);
          return arr2
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("match error"))
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static getToken(s) {
    let param0, param1, h, t, scrut, first1, first0, a, b, scrut1, scrut2, arr, tmp, tmp1, arr1, tmp2, arr2, lambda$this;
    if (s instanceof NofibPrelude.Nil.class) {
      arr = globalThis.Object.freeze([
        NofibPrelude.Nil,
        NofibPrelude.Nil
      ]);
      return arr
    } else if (s instanceof NofibPrelude.Cons.class) {
      param0 = s.head;
      param1 = s.tail;
      h = param0;
      t = param1;
      scrut2 = h === " ";
      if (scrut2 === true) {
        return boyer2.getToken(t)
      } else {
        tmp = h === "(";
        lambda$this = runtime.safeCall(lambda2(h));
        scrut1 = runtime.short_or(tmp, lambda$this);
        if (scrut1 === true) {
          tmp1 = NofibPrelude.Cons(h, NofibPrelude.Nil);
          arr1 = globalThis.Object.freeze([
            tmp1,
            t
          ]);
          return arr1
        } else {
          scrut = boyer21.restOfToken(t);
          if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
            first0 = runtime.Tuple.get(scrut, 0);
            first1 = runtime.Tuple.get(scrut, 1);
            a = first0;
            b = first1;
            tmp2 = NofibPrelude.Cons(h, a);
            arr2 = globalThis.Object.freeze([
              tmp2,
              b
            ]);
            return arr2
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("match error"))
          }
        }
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static strToToken(s) {
    let scrut;
    if (s instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else {
      scrut = getToken_inst_29_5_tsni(s);
      return runtime.safeCall(scrut())
    }
  } 
  static assoc(term_x_y) {
    let first1, first0, term, param0, first11, first01, x, y, param01, first12, first02, param02, key, rest, scrut, tmp, arr;
    if (runtime.Tuple.isArrayLike(term_x_y) && term_x_y.length === 2) {
      first0 = runtime.Tuple.get(term_x_y, 0);
      first1 = runtime.Tuple.get(term_x_y, 1);
      term = first0;
      if (first1 instanceof boyer2.Conss.class) {
        param0 = first1.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          x = first01;
          y = first11;
          if (x instanceof boyer2.Conss.class) {
            param01 = x.a;
            if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
              first02 = runtime.Tuple.get(param01, 0);
              first12 = runtime.Tuple.get(param01, 1);
              if (first02 instanceof boyer2.Atom.class) {
                param02 = first02.a;
                key = param02;
                rest = first12;
                tmp = runtime.safeCall(boyer2.Atom(key));
                scrut = boyer2.lispListEq(term, tmp);
                if (scrut === true) {
                  return x
                } else {
                  arr = globalThis.Object.freeze([
                    term,
                    y
                  ]);
                  return boyer2.assoc(arr)
                }
              } else {
                return boyer2.Nill
              }
            } else {
              return boyer2.Nill
            }
          } else {
            return boyer2.Nill
          }
        } else {
          return boyer2.Nill
        }
      } else {
        return boyer2.Nill
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addtoLUT(k_l_lut) {
    let first2, first1, first0, k, l, param0, first21, first11, first01, left, first12, first02, k1, kl, right, scrut, scrut1, k2, l1, tmp, arr, arr1, tmp1, arr2, arr3, arr4, tmp2, arr5, arr6, arr7, arr8, tmp3, arr9;
    if (runtime.Tuple.isArrayLike(k_l_lut) && k_l_lut.length === 3) {
      first0 = runtime.Tuple.get(k_l_lut, 0);
      first1 = runtime.Tuple.get(k_l_lut, 1);
      first2 = runtime.Tuple.get(k_l_lut, 2);
      k2 = first0;
      l1 = first1;
      k = first0;
      l = first1;
      if (first2 instanceof boyer21.Empty.class) {
        tmp = NofibPrelude.Cons(l1, NofibPrelude.Nil);
        arr = globalThis.Object.freeze([
          k2,
          tmp
        ]);
        arr1 = globalThis.Object.freeze([
          boyer21.Empty,
          arr,
          boyer21.Empty
        ]);
        return runtime.safeCall(boyer21.Node(arr1))
      } else if (first2 instanceof boyer21.Node.class) {
        param0 = first2.x;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          first21 = runtime.Tuple.get(param0, 2);
          left = first01;
          if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
            first02 = runtime.Tuple.get(first11, 0);
            first12 = runtime.Tuple.get(first11, 1);
            k1 = first02;
            kl = first12;
            right = first21;
            scrut1 = NofibPrelude.listEq(k, k1);
            if (scrut1 === true) {
              tmp1 = NofibPrelude.Cons(l, kl);
              arr2 = globalThis.Object.freeze([
                k1,
                tmp1
              ]);
              arr3 = globalThis.Object.freeze([
                left,
                arr2,
                right
              ]);
              return runtime.safeCall(boyer21.Node(arr3))
            } else {
              scrut = NofibPrelude.ltList(k, k1, lambda3, lambda4);
              if (scrut === true) {
                arr4 = globalThis.Object.freeze([
                  k,
                  l,
                  left
                ]);
                tmp2 = boyer2.addtoLUT(arr4);
                arr5 = globalThis.Object.freeze([
                  k1,
                  kl
                ]);
                arr6 = globalThis.Object.freeze([
                  tmp2,
                  arr5,
                  right
                ]);
                return runtime.safeCall(boyer21.Node(arr6))
              } else {
                arr7 = globalThis.Object.freeze([
                  k1,
                  kl
                ]);
                arr8 = globalThis.Object.freeze([
                  k,
                  l,
                  right
                ]);
                tmp3 = boyer2.addtoLUT(arr8);
                arr9 = globalThis.Object.freeze([
                  left,
                  arr7,
                  tmp3
                ]);
                return runtime.safeCall(boyer21.Node(arr9))
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static getLUT(t_lut) {
    let first1, first0, t, param0, first2, first11, first01, left, first12, first02, k, kl, right, scrut, scrut1, t1, arr, arr1;
    if (runtime.Tuple.isArrayLike(t_lut) && t_lut.length === 2) {
      first0 = runtime.Tuple.get(t_lut, 0);
      first1 = runtime.Tuple.get(t_lut, 1);
      t1 = first0;
      t = first0;
      if (first1 instanceof boyer2.Empty.class) {
        return NofibPrelude.Nil
      } else if (first1 instanceof boyer2.Node.class) {
        param0 = first1.x;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 3) {
          first01 = runtime.Tuple.get(param0, 0);
          first11 = runtime.Tuple.get(param0, 1);
          first2 = runtime.Tuple.get(param0, 2);
          left = first01;
          if (runtime.Tuple.isArrayLike(first11) && first11.length === 2) {
            first02 = runtime.Tuple.get(first11, 0);
            first12 = runtime.Tuple.get(first11, 1);
            k = first02;
            kl = first12;
            right = first2;
            scrut1 = NofibPrelude.listEq(t, k);
            if (scrut1 === true) {
              return kl
            } else {
              scrut = NofibPrelude.ltList(t, k, lambda5, lambda6);
              if (scrut === true) {
                arr = globalThis.Object.freeze([
                  t,
                  left
                ]);
                return boyer2.getLUT(arr)
              } else {
                arr1 = globalThis.Object.freeze([
                  t,
                  right
                ]);
                return boyer2.getLUT(arr1)
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
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static makelemmas(rules) {
    let param0, param1, h, t, tmp, tmp1, tmp2;
    if (rules instanceof NofibPrelude.Nil.class) {
      return NofibPrelude.Nil
    } else if (rules instanceof NofibPrelude.Cons.class) {
      param0 = rules.head;
      param1 = rules.tail;
      h = param0;
      t = param1;
      tmp = strToToken_inst_30_4_tsni(h);
      tmp1 = boyer21.mkLispList(tmp);
      tmp2 = boyer2.makelemmas(t);
      return NofibPrelude.Cons(tmp1, tmp2)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addlemma(lspls, term) {
    let param0, first1, first0, x, y, z, scrut, scrut1, x1, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, arr, tmp6, arr1, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
    if (lspls instanceof boyer21.Nill.class) {
      return term
    } else if (lspls instanceof boyer21.Atom.class) {
      param0 = lspls.a;
      x1 = param0;
      throw globalThis.Object.freeze(new globalThis.Error("error"))
    } else if (lspls instanceof boyer21.Conss.class) {
      param0 = lspls.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x = first0;
        y = first1;
        tmp = boyer21.car(y);
        z = tmp;
        tmp1 = boyer21.tv(x);
        tmp2 = NofibPrelude.nofibStringToList("equal");
        scrut = NofibPrelude.listEq(tmp1, tmp2);
        if (scrut === true) {
          tmp3 = boyer21.atom(z);
          scrut1 = ! tmp3;
          if (scrut1 === true) {
            tmp4 = boyer21.car(z);
            tmp5 = boyer21.tv(tmp4);
            arr = globalThis.Object.freeze([
              x,
              y
            ]);
            tmp6 = runtime.safeCall(boyer21.Conss(arr));
            _deforest_Deforest_Arr_3_0 = tmp5;
            _deforest_Deforest_Arr_3_1 = tmp6;
            _deforest_Deforest_Arr_3_2 = term;
            arr1 = () => {
              return match_k_l_lut_arm_Deforest_Arr_3_inst_31_2_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
            };
            return addtoLUT_inst_31_2_tsni(arr1)
          } else {
            throw globalThis.Object.freeze(new globalThis.Error("error"))
          }
        } else {
          throw globalThis.Object.freeze(new globalThis.Error("error"))
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static addlemmalst(lspls, term) {
    let param0, param1, h, t, tmp;
    if (lspls instanceof NofibPrelude.Nil.class) {
      return term
    } else if (lspls instanceof NofibPrelude.Cons.class) {
      param0 = lspls.head;
      param1 = lspls.tail;
      h = param0;
      t = param1;
      tmp = addlemma_inst_32_1_tsni(h, term);
      return boyer2.addlemmalst(t, tmp)
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static applysubstlst(alist, y) {
    let param0, first1, first0, x, y1, x1, tmp, tmp1, arr;
    if (y instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (y instanceof boyer2.Atom.class) {
      param0 = y.a;
      x1 = param0;
      throw globalThis.Object.freeze(new globalThis.Error("error"))
    } else if (y instanceof boyer2.Conss.class) {
      param0 = y.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x = first0;
        y1 = first1;
        tmp = applysubst_inst_33_tsni(alist, x);
        tmp1 = boyer2.applysubstlst(alist, y1);
        arr = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        return runtime.safeCall(boyer2.Conss(arr))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static applysubst(alist, x) {
    let param0, first1, first0, x1, y, x2, scrut, param01, first11, first01, y1, tmp, arr, tmp1, arr1, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (x instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      x2 = param0;
      tmp = runtime.safeCall(boyer2.Atom(x2));
      _deforest_Deforest_Arr_2_0 = tmp;
      _deforest_Deforest_Arr_2_1 = alist;
      arr = () => {
        return match_term_x_y_arm_Deforest_Arr_2_inst_35_34_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      scrut = assoc_inst_35_34_tsni(arr);
      if (scrut instanceof boyer2.Conss.class) {
        param01 = scrut.a;
        if (runtime.Tuple.isArrayLike(param01) && param01.length === 2) {
          first01 = runtime.Tuple.get(param01, 0);
          first11 = runtime.Tuple.get(param01, 1);
          y1 = first11;
          return y1
        } else {
          return runtime.safeCall(boyer2.Atom(x2))
        }
      } else {
        return runtime.safeCall(boyer2.Atom(x2))
      }
    } else if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x1 = first0;
        y = first1;
        tmp1 = applysubstlst_inst_35_tsni(alist, y);
        arr1 = globalThis.Object.freeze([
          x1,
          tmp1
        ]);
        return runtime.safeCall(boyer2.Conss(arr1))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static onewayunify1lst(l1, l2, u) {
    let scrut, first1, first0, b, u1, arr, tmp, tmp1, tmp2, tmp3, arr1;
    if (l1 instanceof boyer2.Nill.class) {
      arr = globalThis.Object.freeze([
        true,
        u
      ]);
      return arr
    } else {
      tmp = boyer2.car(l1);
      tmp1 = boyer2.car(l2);
      scrut = onewayunify1_inst_36_tsni(tmp, tmp1, u);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first0 = runtime.Tuple.get(scrut, 0);
        first1 = runtime.Tuple.get(scrut, 1);
        b = first0;
        u1 = first1;
        if (b === true) {
          tmp2 = boyer2.cdr(l1);
          tmp3 = boyer2.cdr(l2);
          return boyer2.onewayunify1lst(tmp2, tmp3, u1)
        } else {
          arr1 = globalThis.Object.freeze([
            false,
            u1
          ]);
          return arr1
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    }
  } 
  static onewayunify1(t1, t2, u) {
    let scrut, scrut1, scrut2, scrut3, param0, first1, first0, y, arr, tmp, arr1, arr2, tmp1, arr3, tmp2, arr4, arr5, tmp3, arr6, tmp4, arr7, arr8, tmp5, tmp6, tmp7, tmp8, arr9, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    scrut2 = boyer2.atom(t2);
    if (scrut2 === true) {
      _deforest_Deforest_Arr_2_0 = t2;
      _deforest_Deforest_Arr_2_1 = u;
      arr = () => {
        return match_term_x_y_arm_Deforest_Arr_2_inst_38_37_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
      };
      scrut3 = assoc_inst_38_37_tsni(arr);
      if (scrut3 instanceof boyer2.Conss.class) {
        param0 = scrut3.a;
        if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
          first0 = runtime.Tuple.get(param0, 0);
          first1 = runtime.Tuple.get(param0, 1);
          y = first1;
          tmp = boyer2.lispListEq(t1, y);
          arr1 = globalThis.Object.freeze([
            tmp,
            u
          ]);
          return arr1
        } else {
          arr2 = globalThis.Object.freeze([
            t2,
            t1
          ]);
          tmp1 = runtime.safeCall(boyer2.Conss(arr2));
          arr3 = globalThis.Object.freeze([
            tmp1,
            u
          ]);
          tmp2 = runtime.safeCall(boyer2.Conss(arr3));
          arr4 = globalThis.Object.freeze([
            true,
            tmp2
          ]);
          return arr4
        }
      } else {
        arr5 = globalThis.Object.freeze([
          t2,
          t1
        ]);
        tmp3 = runtime.safeCall(boyer2.Conss(arr5));
        arr6 = globalThis.Object.freeze([
          tmp3,
          u
        ]);
        tmp4 = runtime.safeCall(boyer2.Conss(arr6));
        arr7 = globalThis.Object.freeze([
          true,
          tmp4
        ]);
        return arr7
      }
    } else {
      scrut1 = boyer2.atom(t1);
      if (scrut1 === true) {
        arr8 = globalThis.Object.freeze([
          false,
          u
        ]);
        return arr8
      } else {
        tmp5 = boyer2.car(t1);
        tmp6 = boyer2.car(t2);
        scrut = boyer2.lispListEq(tmp5, tmp6);
        if (scrut === true) {
          tmp7 = boyer2.cdr(t1);
          tmp8 = boyer2.cdr(t2);
          return onewayunify1lst_inst_38_tsni(tmp7, tmp8, u)
        } else {
          arr9 = globalThis.Object.freeze([
            false,
            u
          ]);
          return arr9
        }
      }
    }
  } 
  static onewayunify(t1, t2) {
    return onewayunify1_inst_39_40_tsni(t1, t2, boyer2.Nill)
  } 
  static rewritewithlemmas(t, l, term) {
    let param0, param1, lh, lt, scrut, first1, first0, b, u, tmp, tmp1, tmp2;
    if (l instanceof NofibPrelude.Nil.class) {
      return t
    } else if (l instanceof NofibPrelude.Cons.class) {
      param0 = l.head;
      param1 = l.tail;
      lh = param0;
      lt = param1;
      tmp = boyer2.cadr(lh);
      scrut = onewayunify_inst_41_43_tsni(t, tmp);
      if (runtime.Tuple.isArrayLike(scrut) && scrut.length === 2) {
        first0 = runtime.Tuple.get(scrut, 0);
        first1 = runtime.Tuple.get(scrut, 1);
        b = first0;
        u = first1;
        if (b === true) {
          tmp1 = boyer2.caddr(lh);
          tmp2 = applysubst_inst_41_44_tsni(u, tmp1);
          return rewrite_inst_41_tsni(tmp2, term)
        } else {
          return boyer2.rewritewithlemmas(t, lt, term)
        }
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rewriteargs(x, term) {
    let param0, first1, first0, x1, y, tmp, tmp1, arr;
    if (x instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      throw globalThis.Object.freeze(new globalThis.Error("error"))
    } else if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        x1 = first0;
        y = first1;
        tmp = rewrite_inst_45_tsni(x1, term);
        tmp1 = boyer2.rewriteargs(y, term);
        arr = globalThis.Object.freeze([
          tmp,
          tmp1
        ]);
        return runtime.safeCall(boyer2.Conss(arr))
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static rewrite(x, term) {
    let param0, first1, first0, l1, l2, x1, tmp, arr, tmp1, tmp2, arr1, tmp3, _deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1;
    if (x instanceof boyer2.Nill.class) {
      return boyer2.Nill
    } else if (x instanceof boyer2.Atom.class) {
      param0 = x.a;
      x1 = param0;
      return runtime.safeCall(boyer2.Atom(x1))
    } else if (x instanceof boyer2.Conss.class) {
      param0 = x.a;
      if (runtime.Tuple.isArrayLike(param0) && param0.length === 2) {
        first0 = runtime.Tuple.get(param0, 0);
        first1 = runtime.Tuple.get(param0, 1);
        l1 = first0;
        l2 = first1;
        tmp = rewriteargs_inst_46_tsni(l2, term);
        arr = globalThis.Object.freeze([
          l1,
          tmp
        ]);
        tmp1 = runtime.safeCall(boyer2.Conss(arr));
        tmp2 = boyer2.tv(l1);
        _deforest_Deforest_Arr_2_0 = tmp2;
        _deforest_Deforest_Arr_2_1 = term;
        arr1 = () => {
          return match_t_lut_arm_Deforest_Arr_2_inst_46_42_tsni(_deforest_Deforest_Arr_2_0, _deforest_Deforest_Arr_2_1)
        };
        tmp3 = getLUT_inst_46_42_tsni(arr1);
        return rewritewithlemmas_inst_46_tsni(tmp1, tmp3, term)
      } else {
        throw globalThis.Object.freeze(new globalThis.Error("match error"))
      }
    } else {
      throw globalThis.Object.freeze(new globalThis.Error("match error"))
    }
  } 
  static subterm(i) {
    let c, str, tmp, tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7;
    tmp = NofibPrelude.stringOfInt(i);
    tmp1 = NofibPrelude.stringConcat("c", tmp);
    c = tmp1;
    tmp2 = NofibPrelude.stringConcat(c, " d ) ) )( z f ( reverse ( append ( append a b ) ( [] ) ) ) )(u equal ( plus a b ) ( difference x y ) )(w lessp ( remainder a b )( member a ( length b ) ) ) )");
    tmp3 = NofibPrelude.stringConcat(" ( zero ) ) ) )( y f ( times ( times a b )( plus ", tmp2);
    tmp4 = NofibPrelude.stringConcat(c, tmp3);
    tmp5 = NofibPrelude.stringConcat("( ( x f ( plus ( plus a b )( plus ", tmp4);
    str = tmp5;
    tmp6 = NofibPrelude.nofibStringToList(str);
    tmp7 = strToToken_inst_47_48_tsni(tmp6);
    return boyer2.mkLispList(tmp7)
  } 
  static report(b) {
    if (b === true) {
      return "The term is a tautology"
    } else {
      return "The term is not a tautology"
    }
  } 
  static tautp(term) {
    let tmp, arr, _deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2;
    tmp = rewrite_inst_49_50_tsni(term, boyer2.lemmas);
    _deforest_Deforest_Arr_3_0 = tmp;
    _deforest_Deforest_Arr_3_1 = boyer2.Nill;
    _deforest_Deforest_Arr_3_2 = boyer2.Nill;
    arr = () => {
      return match_f_truelst_falselst_arm_Deforest_Arr_3_inst_49_51_tsni(_deforest_Deforest_Arr_3_0, _deforest_Deforest_Arr_3_1, _deforest_Deforest_Arr_3_2)
    };
    return tautologyp_inst_49_51_tsni(arr)
  } 
  static teststatement(i) {
    let tmp;
    tmp = subterm_inst_52_53_tsni(i);
    return applysubst_inst_52_54_tsni(tmp, boyer2.statement)
  } 
  static testresult(i) {
    let tmp;
    tmp = teststatement_inst_55_56_tsni(i);
    return tautp_inst_55_57_tsni(tmp)
  } 
  static testBoyer2_nofib(n) {
    let tmp;
    tmp = testresult_inst_58_59_tsni(n);
    return boyer2.report(tmp)
  } 
  static main() {
    return testBoyer2_nofib_inst_60_61_tsni(3)
  }
  static toString() { return runtime.render(this); }
  static [definitionMetadata] = ["module", "boyer2"]; 
});
let boyer2 = boyer21; export default boyer2;
